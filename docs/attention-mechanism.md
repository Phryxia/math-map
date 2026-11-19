# 주의 메커니즘

# 개요

**주의 메커니즘(attention mechanism)** 은 여러 벡터 가운데 지금 필요한 것과 비슷한 벡터에 큰 무게를 주어 가중평균을 내는 계산이다. "개가 공을 물고 달린다" 에서 "달린다" 의 주어를 찾으려면 바로 앞의 "물고" 보다 세 낱말 앞의 "개가" 를 보아야 하고, 그 거리는 문장마다 다르다. 주의 메커니즘은 낱말마다 비슷함 점수를 계산해 무게로 바꾸므로, 거리가 얼마든 필요한 낱말의 벡터를 끌어온다.

# 직관

[단어 임베딩](word-embeddings.md) 문서의 신경망 언어 모형은 앞 $n-1$ 개 낱말의 임베딩을 이어 붙여 [다층 퍼셉트론](multilayer-perceptron.md)에 넣는다. 이어 붙인 벡터에서 각 낱말의 자리가 정해져 있으므로, 주어가 한 칸 앞에 오는 문장과 세 칸 앞에 오는 문장을 서로 다른 가중치로 배워야 한다. 창 밖의 낱말은 아예 보이지 않는다.

자리 대신 내용으로 낱말을 고른다. "개가, 공을, 물고" 의 벡터를 둘째 좌표가 다른 짧은 벡터로 두자.

$$\mathbf k_{\text{개가}}=(1,0),\qquad\mathbf k_{\text{공을}}=(0,1),\qquad\mathbf k_{\text{물고}}=(0.5,0.5)$$

"달린다" 자리에서 주어를 찾는 벡터를 $\mathbf q=(2,0)$ 이라 하면, 내적으로 잰 비슷함은 차례로 $2,0,1$ 이다.

점수를 지수함수에 넣고 합이 $1$ 이 되게 나누면 무게가 나온다.

$$\frac{(e^2,e^0,e^1)}{e^2+e^0+e^1}\approx(0.665,\thinspace 0.090,\thinspace 0.245)$$

세 벡터를 이 무게로 평균하면 $(0.79,\thinspace 0.21)$ 이다. 결과는 "개가" 의 벡터 $(1,0)$ 에 가깝다. "개가" 가 문장의 몇 번째에 있든 계산은 같다. 이렇게 찾는 벡터와의 비슷함으로 무게를 정해 평균하는 계산을 주의 메커니즘이라 한다.

# 정의

## 축척 내적 주의

**질의(query)** 행렬 $Q\in\mathbb R^{n\times d_k}$, **키(key)** 행렬 $K\in\mathbb R^{m\times d_k}$, **값(value)** 행렬 $V\in\mathbb R^{m\times d_v}$ 에 대해 다음 행렬을 **축척 내적 주의(scaled dot-product attention)** 라 한다[^2].

$$\mathrm{Attn}(Q,K,V)=\mathrm{softmax}\Bigl(\frac{QK^{\mathrm T}}{\sqrt{d_k}}\Bigr)V$$

softmax 는 행마다 적용한다. $i$ 행 $j$ 열의 무게는 다음과 같고, 출력의 $i$ 행은 $\sum_j a_{ij}\mathbf v_j$ 다.

$$a_{ij}=\frac{\exp(\mathbf q_i\cdot\mathbf k_j/\sqrt{d_k})}{\sum_{l}\exp(\mathbf q_i\cdot\mathbf k_l/\sqrt{d_k})}$$

직관 절은 $n=1$, $m=3$, $d_k=2$ 이고 $V=K$ 이며, 나누기 $\sqrt{d_k}$ 를 빼고 계산한 것이다.

## 자기 주의

낱말 $n$ 개의 벡터를 행으로 쌓은 $X\in\mathbb R^{n\times d}$ 와 학습할 행렬 $W_Q,W_K\in\mathbb R^{d\times d_k}$, $W_V\in\mathbb R^{d\times d_v}$ 에 대해 $\mathrm{Attn}(XW_Q,XW_K,XW_V)$ 를 **자기 주의(self-attention)** 라 한다. 낱말마다 자기 질의로 모든 낱말의 키를 본다. 언어 모형에서는 $j\gt i$ 인 $a_{ij}$ 를 $0$ 으로 두어 뒤의 낱말을 보지 못하게 하고, 이를 **인과 가림(causal mask)** 이라 한다.

## 여러 머리 주의

$W_Q,W_K,W_V$ 를 $h$ 벌 두어 자기 주의를 $h$ 번 계산하고, 결과를 이어 붙여 행렬 $W_O$ 를 곱한 것을 **여러 머리 주의(multi-head attention)** 라 한다. 한 머리는 주어를, 다른 머리는 목적어를 찾는 식으로 머리마다 다른 비슷함을 배울 수 있다.

# 성질

## 순서에 대한 등변성

자기 주의는 입력 행의 순서를 바꾸면 출력 행의 순서가 같게 바뀐다. 치환 행렬 $P$ 에 대해 다음이 성립한다.

$$\mathrm{softmax}\bigl(PQK^{\mathrm T}P^{\mathrm T}\bigr)PV=P\thinspace\mathrm{softmax}\bigl(QK^{\mathrm T}\bigr)V$$

행마다의 softmax 는 행의 치환과 열의 치환을 그대로 옮기고, $P^{\mathrm T}P=I$ 다. 그래서 자기 주의만으로는 "개가 공을 문다" 와 "공을 개가 문다" 를 가르지 못한다. 낱말 벡터에 자리마다 다른 벡터를 더하는 **위치 부호화(positional encoding)** 로 순서를 넣는다[^1].

## 축척 상수

$\mathbf q$ 와 $\mathbf k$ 의 성분이 서로 독립이고 평균 $0$, 분산 $1$ 이면 $\mathbf q\cdot\mathbf k$ 의 분산은 $d_k$ 다. 나누지 않으면 $d_k$ 가 클 때 점수가 넓게 퍼져 softmax 가 거의 한 키에 무게 $1$ 을 주고, 나머지 무게의 기울기가 $0$ 에 가까워진다. $\sqrt{d_k}$ 로 나누면 분산이 $1$ 이 된다[^1].

## 온도와 선택

점수에 $1/T$ 를 곱하고 $T\to0$ 으로 보내면 무게는 점수가 가장 큰 키 하나에 $1$ 을 주고, 출력은 그 키의 값이다. $T\to\infty$ 이면 무게가 모두 $1/m$ 이 되어 출력은 값들의 단순 평균이다. 직관 절의 무게 $0.665$ 는 그 사이에 있다.

## 계산 비용

길이 $n$ 의 자기 주의는 $QK^{\mathrm T}$ 를 계산하는 데 $n^2d_k$ 에 비례하는 곱셈과 $n^2$ 개의 무게를 저장하는 공간이 든다. 대신 어느 두 낱말 사이도 한 번의 주의로 이어진다. 낱말을 하나씩 차례로 읽는 순환 신경망(recurrent neural network)에서는 거리 $n$ 의 두 낱말 사이에 $n$ 번의 계산이 끼고, 낱말마다의 계산을 동시에 할 수 없다.

# 활용

- 기계 번역. 원문 문장의 낱말 벡터를 키와 값으로, 번역문을 만드는 쪽의 현재 상태를 질의로 두어 지금 옮길 원문 낱말에 무게를 준다[^2]. 무게 행렬이 원문과 번역문 낱말의 대응을 보인다.
- [Transformer](transformers.md). 여러 머리 자기 주의와 낱말마다 따로 적용하는 다층 퍼셉트론을 [잔차 신경망](residual-networks.md)처럼 건너뛰는 연결로 이은 층을 여러 번 쌓은 모형이다[^1]. 인과 가림을 쓴 Transformer 가 대규모 언어 모형의 기본 구조다.
- 영상과 그래프. 영상을 작은 조각으로 나누어 조각마다 벡터를 주고 자기 주의를 적용하거나, 그래프의 이웃 정점들에 주의 무게를 주어 정점 벡터를 갱신한다.

[^1]: A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, I. Polosukhin, "Attention is all you need", *Advances in Neural Information Processing Systems* **30** (2017).
[^2]: D. Bahdanau, K. Cho, Y. Bengio, "Neural machine translation by jointly learning to align and translate", *International Conference on Learning Representations* (2015), arXiv:1409.0473.

# 연관 문서

## 선수지식

- [다층 퍼셉트론](multilayer-perceptron.md)
- [단어 임베딩](word-embeddings.md)

## 더 알아보기

- [Transformer](transformers.md)

#machine_learning #linear_algebra
