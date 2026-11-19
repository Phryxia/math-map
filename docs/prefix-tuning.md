# 접두 조정

# 개요

**접두 조정(prefix tuning)** 은 미리 학습한 Transformer 의 가중치를 고정하고, 각 층의 주의 계산에 학습하는 키와 값 몇 개를 앞에 덧붙여 새 문제에 맞추는 방법이다. 같은 언어 모형으로 요약과 번역을 하게 하려면 입력 앞에 "다음 글을 요약하라" 같은 지시문을 붙일 수 있지만, 지시문은 어휘에 있는 낱말로만 만들 수 있다. 접두 조정은 그 앞부분을 낱말이 아닌 임의의 벡터로 두고 문제의 자료로 학습해, 문제마다 그 벡터 몇 개만 저장한다.

# 직관

[주의 메커니즘](attention-mechanism.md) 문서의 예에서 키는 $(1,0)$, $(0,1)$, $(0.5,0.5)$ 이고 값은 키와 같으며, 질의 $(2,0)$ 의 무게는 $0.665, 0.090, 0.245$, 출력은 $(0.79, 0.21)$ 이었다. 새 문제에서는 출력의 둘째 좌표가 더 커야 한다고 하자.

[BERT](bert.md) 문서의 미세 조정은 키와 값을 만드는 가중치를 모두 고쳐 이 출력을 바꾼다. 가중치를 그대로 두고 출력을 바꾸려면 질의가 볼 것을 하나 더 준다. 키 $\mathbf p_k=(1,1)$, 값 $\mathbf p_v=(0,1)$ 인 항목을 앞에 붙이면 점수는 $2, 2, 0, 1$ 이고 무게는 다음과 같다.

$$\frac{(e^2,e^2,e^0,e^1)}{2e^2+e^0+e^1}\approx(0.400,\thinspace 0.400,\thinspace 0.054,\thinspace 0.147)$$

출력은 다음과 같다.

$$0.400\cdot(0,1)+0.400\cdot(1,0)+0.054\cdot(0,1)+0.147\cdot(0.5,0.5)\approx(0.47,\thinspace 0.53)$$

붙인 항목이 출력을 둘째 좌표 쪽으로 옮겼다.

$\mathbf p_k$, $\mathbf p_v$ 는 어떤 낱말의 벡터일 필요가 없다. 그래서 이 두 벡터를 새 문제의 자료로 학습하고 나머지는 고정한다. 각 층에 이런 항목을 몇 개씩 붙여 학습하는 방법을 접두 조정이라 한다.

# 정의

## 접두 조정

[Transformer](transformers.md)의 각 층 $l=1,\dots,L$ 에서 길이 $\ell$ 의 접두 행렬 $P_K^{(l)},P_V^{(l)}\in\mathbb R^{\ell\times d}$ 를 두고, 그 층의 주의를 다음으로 바꾼다.

$$\mathrm{Attn}\bigl(Q,\thinspace\lbrack P_K^{(l)};K\rbrack,\thinspace\lbrack P_V^{(l)};V\rbrack\bigr)$$

$\lbrack P;K\rbrack$ 는 행렬 $P$ 의 행 아래에 $K$ 의 행을 쌓은 것이다. **접두 조정** 은 모형의 가중치를 고정하고 $P_K^{(l)},P_V^{(l)}$ 만 학습하는 방법이고, $\ell$ 을 **접두 길이(prefix length)** 라 한다[^1]. 직관 절의 예는 $L=1$, $\ell=1$, $d=2$ 이다.

Li 와 Liang 은 $P$ 를 바로 학습하면 불안정하다고 보고, 작은 행렬을 다층 퍼셉트론에 넣어 $P$ 를 만들고 학습이 끝나면 $P$ 만 남겼다[^1].

## 프롬프트 조정

**프롬프트 조정(prompt tuning)** 은 첫 층의 입력 앞에만 학습하는 벡터 $\ell$ 개를 붙이고 나머지 층의 접두는 두지 않는 방법이다[^2]. 이 벡터들은 낱말 임베딩과 같은 자리에 들어가지만 어휘의 어느 낱말과도 같을 필요가 없다.

# 성질

## 주의 출력의 볼록 결합

질의 $\mathbf q$ 하나에 대해 다음이 성립한다[^3].

$$\mathrm{Attn}\bigl(\mathbf q,\lbrack P_K;K\rbrack,\lbrack P_V;V\rbrack\bigr)=\lambda(\mathbf q)\thinspace\mathrm{Attn}(\mathbf q,P_K,P_V)+\bigl(1-\lambda(\mathbf q)\bigr)\thinspace\mathrm{Attn}(\mathbf q,K,V)$$

$$\lambda(\mathbf q)=\frac{\sum_ie^{\mathbf q\cdot\mathbf p_i}}{\sum_ie^{\mathbf q\cdot\mathbf p_i}+\sum_je^{\mathbf q\cdot\mathbf k_j}}$$

softmax 의 분모를 접두 쪽 합과 원래 쪽 합으로 나누면 바로 나온다. 직관 절에서 $\lambda=e^2/(2e^2+e^0+e^1)\approx 0.400$ 이고, 다음 값이 앞의 출력과 같다.

$$0.400\cdot(0,1)+0.600\cdot(0.79,\thinspace 0.21)\approx(0.47,\thinspace 0.53)$$

## 원래 항목끼리의 무게 비

접두를 붙여도 원래 키들 사이의 무게 비는 바뀌지 않는다. 원래 키 $\mathbf k_j$ 의 무게는 $(1-\lambda(\mathbf q))$ 에 원래 무게를 곱한 것이기 때문이다. 직관 절에서 $0.400:0.054:0.147$ 은 $0.665:0.090:0.245$ 와 같은 비다.

그래서 한 층 안에서 접두 조정은 원래 주의가 고르는 항목을 바꾸지 못하고, 출력을 $\mathrm{Attn}(\mathbf q,P_K,P_V)$ 쪽으로 옮기는 것만 한다. 출력이 크게 바뀌는 것은 이런 층이 여러 개 쌓여 다음 층의 질의와 키가 바뀌기 때문이다.

## 매개변수 수

학습하는 수는 $2\ell dL$ 이다. BERT-base 의 $d=768$, $L=12$ 에서 $\ell=10$ 이면 $184320$ 개이고, 모형 전체 $1.1$ 억 개의 약 $0.17$% 다.

## 모형 크기와 성능

Lester 등은 프롬프트 조정과 전체 미세 조정의 성능 차이가 모형이 커질수록 줄어, 매개변수 약 $110$ 억 개의 T5(text-to-text transfer transformer) 모형에서는 거의 없어진다고 보고했다[^2]. Li 와 Liang 은 표의 내용을 글로 쓰는 과제에서, GPT-2(generative pre-trained transformer 2)의 매개변수 약 $0.1$% 만 학습하는 접두 조정이 전체 미세 조정과 비슷한 성능을 낸다고 보고했다[^1].

# 활용

- 여러 문제를 한 모형으로 처리. 한 묶음 안에서 입력마다 다른 접두를 붙여 서로 다른 문제를 동시에 계산한다. 가중치를 바꾸는 방법은 묶음 안의 입력이 같은 가중치를 써야 한다.
- 다른 효율적 미세 조정과의 비교. He 등은 접두 조정을 볼록 결합 식으로 다시 써서, [저계수 적응](low-rank-adaptation.md)과 어댑터(adapter)처럼 층의 출력에 작은 변화량을 더하는 방법들과 같은 꼴로 비교했다[^3].
- 적은 자료의 문제. 학습하는 수가 적어 문제의 자료가 수백 개뿐일 때 전체 미세 조정보다 과적합이 적다고 보고되었다[^1].

[^1]: X. L. Li, P. Liang, "Prefix-tuning: Optimizing continuous prompts for generation", *Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics* (2021), 4582–4597.
[^2]: B. Lester, R. Al-Rfou, N. Constant, "The power of scale for parameter-efficient prompt tuning", *Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing* (2021), 3045–3059.
[^3]: J. He, C. Zhou, X. Ma, T. Berg-Kirkpatrick, G. Neubig, "Towards a unified view of parameter-efficient transfer learning", *International Conference on Learning Representations* (2022).

# 연관 문서

## 선수지식

- [BERT](bert.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #linear_algebra #optimization
