# Transformer

# 개요

**Transformer** 는 [주의 메커니즘](attention-mechanism.md)과 낱말마다 따로 적용하는 작은 신경망을 번갈아 여러 층 쌓고, 층마다 입력을 출력에 더해 넘기는 신경망 구조다. "개가 공을 물고 달린다" 에서 주의 한 번은 "달린다" 자리에 주어 "개가" 의 벡터를 끌어오지만, 끌어온 벡터는 원래 벡터들의 가중평균일 뿐이라 "주어가 동물이다" 같은 새로운 판단을 만들지 못한다. Transformer 는 평균을 낸 뒤 비선형 신경망을 적용하는 일을 층마다 되풀이하고, 더해 넘기는 연결로 깊게 쌓아도 학습이 되게 한다.

# 직관

주의 메커니즘 문서의 계산에서 "달린다" 자리의 출력은 $(0.79,\thinspace 0.21)$ 이었다. 이 벡터는 "개가, 공을, 물고" 의 벡터를 무게 $0.665,0.090,0.245$ 로 평균한 것이고, 세 벡터가 놓인 범위 밖으로 나가지 못한다. 주의를 한 번 더 해도 다시 평균이므로 결과는 처음 벡터들의 평균이다.

평균을 낸 뒤 자리마다 [다층 퍼셉트론](multilayer-perceptron.md)을 하나씩 적용한다. 다층 퍼셉트론은 비선형 함수이므로 "개가" 쪽에 기운 벡터에서 "주어가 동물이다" 같은 새 좌표를 계산할 수 있다. 모든 자리에 같은 다층 퍼셉트론을 쓰므로 문장 길이가 달라도 된다.

주의를 하면 "달린다" 자리의 원래 벡터가 평균에 묻혀 사라진다. 그래서 출력을 원래 벡터에 더해 넘긴다. "달린다" 의 벡터를 $\mathbf x$ 라 하면 다음 층이 받는 것은 $\mathbf x+(0.79,\thinspace 0.21)$ 이고, 자기 내용과 주어의 내용이 함께 들어 있다. 이 더해 넘기기는 [잔차 신경망](residual-networks.md)의 건너뛰는 연결과 같고, 층이 수십 개여도 기울기가 앞층까지 전해진다.

더하기를 되풀이하면 벡터의 크기가 층마다 달라진다. 그래서 각 층의 입력을 성분의 평균이 $0$, 표준편차가 $1$ 이 되게 고친다. $(1,3)$ 은 평균 $2$, 표준편차 $1$ 이므로 $(-1,1)$ 이 된다. 이 네 가지, 곧 주의, 자리마다의 다층 퍼셉트론, 더해 넘기기, 크기 맞추기를 한 층으로 묶어 쌓은 것이 Transformer 다.

# 정의

## 층 정규화

벡터 $\mathbf x\in\mathbb R^d$ 의 성분 평균을 $\mu$, 표준편차를 $s$ 라 할 때 다음 함수를 **층 정규화(layer normalization)** 라 한다.

$$\mathrm{LN}(\mathbf x)=\boldsymbol\gamma\odot\frac{\mathbf x-\mu\mathbf 1}{s}+\boldsymbol\beta$$

$\boldsymbol\gamma,\boldsymbol\beta\in\mathbb R^d$ 는 학습하는 매개변수이고 $\odot$ 는 성분별 곱이다. 직관 절의 $(1,3)\mapsto(-1,1)$ 은 $\boldsymbol\gamma=\mathbf 1$, $\boldsymbol\beta=\mathbf 0$ 인 경우다.

## 위치별 전방 신경망

**위치별 전방 신경망(position-wise feed-forward network)** 은 행렬 $H\in\mathbb R^{n\times d}$ 의 각 행 $\mathbf h$ 에 같은 두 층 신경망을 적용한다.

$$\mathrm{FF}(\mathbf h)=W_2\thinspace\phi(W_1\mathbf h+\mathbf b_1)+\mathbf b_2$$

$W_1\in\mathbb R^{d_{ff}\times d}$, $W_2\in\mathbb R^{d\times d_{ff}}$ 이고 $\phi$ 는 성분별 비선형 함수다. 보통 $d_{ff}=4d$ 로 둔다.

## Transformer 층

낱말 $n$ 개의 벡터를 행으로 쌓은 $H\in\mathbb R^{n\times d}$ 에 대해, 주의 메커니즘 문서의 여러 머리 자기 주의를 $\mathrm{MHA}$ 라 할 때 다음 사상을 **Transformer 층** 이라 한다. 층 정규화와 위치별 전방 신경망은 행마다 적용한다.

$$H'=H+\mathrm{MHA}(\mathrm{LN}(H)),\qquad H''=H'+\mathrm{FF}(\mathrm{LN}(H'))$$

이 꼴을 앞 정규화(pre-layer normalization)라 한다. 원 논문은 더한 뒤에 정규화하는 $H'=\mathrm{LN}(H+\mathrm{MHA}(H))$ 꼴을 썼고, 이를 뒤 정규화(post-layer normalization)라 한다[^1].

## Transformer

낱말마다 [단어 임베딩](word-embeddings.md)과 [위치 부호화](positional-encoding.md)를 더한 행렬 $H_0$ 에 Transformer 층을 $L$ 번 적용하고, 마지막 행렬의 각 행을 선형 사상과 softmax 로 어휘 위의 확률로 바꾸는 신경망을 **Transformer** 라 한다[^1]. 원 논문의 위치 부호화는 자리 $p$ 의 $2i$ 번째와 $2i+1$ 번째 성분을 $\sin(p/10000^{2i/d})$, $\cos(p/10000^{2i/d})$ 로 둔다.

인과 가림을 쓴 자기 주의만으로 쌓으면 다음 낱말을 예측하는 언어 모형이 된다. 번역처럼 입력 문장과 출력 문장이 따로 있으면, 입력을 처리하는 층들의 출력을 키와 값으로, 출력 쪽의 행을 질의로 두는 주의를 출력 쪽 층마다 하나 더 넣는다. 이를 **교차 주의(cross-attention)** 라 한다.

# 성질

## 층마다의 매개변수와 계산량

여러 머리 자기 주의는 $d\times d$ 행렬 넷($W_Q,W_K,W_V,W_O$)으로 매개변수가 $4d^2$ 개이고, $d_{ff}=4d$ 인 위치별 전방 신경망은 $8d^2$ 개다. 그래서 층 하나의 매개변수는 치우침과 층 정규화를 빼면 $12d^2$ 개다. 원 논문의 기본 모형은 $d=512$, $h=8$, $d_{ff}=2048$, $L=6$ 이다[^1].

길이 $n$ 의 입력에서 층 하나의 곱셈은 주의 무게를 만드는 $n^2d$ 와 행렬 곱의 $nd^2$ 를 더한 것에 비례한다. $n$ 이 $d$ 보다 작으면 뒤의 항이, 크면 앞의 항이 지배한다.

## 더해 쌓이는 표현

앞 정규화에서는 층 정규화가 더하는 쪽 경로에만 있으므로, $L$ 층을 지난 행렬은 다음과 같다.

$$H_L=H_0+\sum_{l=1}^{L}\bigl(\text{층 }l\text{ 의 주의 출력}+\text{층 }l\text{ 의 전방 신경망 출력}\bigr)$$

각 층은 이 합에 한 항을 더할 뿐이고, 손실의 기울기는 덧셈을 거쳐 $H_0$ 까지 감쇠 없이 전해지는 경로를 가진다. 앞 정규화에서는 초기화 직후의 기울기가 층 수에 대해 고르게 유지되어 학습률을 처음에 천천히 올리는 단계 없이도 학습되고, 뒤 정규화는 그 단계가 필요하다[^2].

## 보편 근사

위치 부호화를 더한 Transformer 는 길이가 고정된 수열을 수열로 보내는 콤팩트 집합 위의 [연속함수](continuity.md)를 원하는 정확도로 근사한다[^3]. 위치 부호화가 없으면 주의 메커니즘 문서의 순서 등변성에 따라, 근사할 수 있는 함수는 입력의 순서를 바꾸면 출력의 순서가 같게 바뀌는 함수로 제한된다.

# 활용

- 기계 번역. 원 논문은 입력 쪽 6 층, 출력 쪽 6 층에 교차 주의를 둔 Transformer 로 영어–독일어 번역을 학습했다[^1].
- 언어 모형. 인과 가림을 쓴 Transformer 를 큰 말뭉치에서 다음 낱말 예측으로 학습한 것이 대규모 언어 모형이다. 출력의 선형 사상에 단어 임베딩 행렬을 그대로 다시 쓰기도 한다.
- 가린 낱말 예측. [BERT](bert.md) 처럼 가림 없이 양쪽을 다 보는 Transformer 에서 문장의 일부 낱말을 가리고 맞히게 학습하면, 문장 분류와 질의응답 모형의 시작점으로 쓰는 낱말 벡터가 나온다[^4].
- 영상. 영상을 작은 정사각형 조각으로 나누어 조각마다 벡터를 주고 같은 층을 쌓는다.

[^1]: A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, I. Polosukhin, "Attention is all you need", *Advances in Neural Information Processing Systems* **30** (2017).
[^2]: R. Xiong, Y. Yang, D. He, K. Zheng, S. Zheng, C. Xing, H. Zhang, Y. Lan, L. Wang, T.-Y. Liu, "On layer normalization in the Transformer architecture", *Proceedings of the 37th International Conference on Machine Learning* (2020).
[^3]: C. Yun, S. Bhojanapalli, A. S. Rawat, S. J. Reddi, S. Kumar, "Are Transformers universal approximators of sequence-to-sequence functions?", *International Conference on Learning Representations* (2020).
[^4]: J. Devlin, M.-W. Chang, K. Lee, K. Toutanova, "BERT: Pre-training of deep bidirectional transformers for language understanding", *Proceedings of NAACL-HLT* (2019), 4171–4186.

# 연관 문서

## 선수지식

- [주의 메커니즘](attention-mechanism.md)
- [잔차 신경망](residual-networks.md)

## 더 알아보기

- [위치 부호화](positional-encoding.md)
- [BERT](bert.md)

#machine_learning #linear_algebra
