# GloVe

# 개요

**GloVe(global vectors)** 는 말뭉치 전체에서 두 낱말이 함께 나온 횟수를 한 번 세어 표로 만든 뒤, 낱말 벡터의 내적이 그 횟수의 로그에 가깝도록 벡터를 맞추는 단어 임베딩 방법이다. "얼음" 과 "수증기" 의 차이는 "고체" 가 얼음 곁에 훨씬 자주 나오고 "기체" 가 수증기 곁에 훨씬 자주 나온다는 데서 드러나고, "물" 은 둘 곁에 비슷하게 나와 차이를 말해 주지 않는다. GloVe 는 두 낱말 벡터의 차와 문맥 벡터의 내적이 이런 횟수 비율의 로그가 되게 하여, 벡터의 차로 낱말의 차이를 나타낸다.

# 직관

[단어 임베딩](word-embeddings.md) 문서처럼 낱말 $w$ 의 창 안에 낱말 $c$ 가 나온 횟수를 $X_{wc}$ 라 하고, $w$ 의 창 안에 나온 낱말들 가운데 $c$ 의 비율을 $P(c\mid w)=X_{wc}/X_w$ 라 한다. 여기서 $X_w=\sum_c X_{wc}$ 다. 약 60 억 낱말의 말뭉치에서 "ice" 와 "steam" 에 대해 센 값은 다음과 같다[^1].

| 문맥 낱말                                  | solid                | gas                  | water                | fashion              |
| ------------------------------------------ | -------------------- | -------------------- | -------------------- | -------------------- |
| $P(c\mid\text{ice})$                       | $1.9\times10^{-4}$   | $6.6\times10^{-5}$   | $3.0\times10^{-3}$   | $1.7\times10^{-5}$   |
| $P(c\mid\text{steam})$                     | $2.2\times10^{-5}$   | $7.8\times10^{-4}$   | $2.2\times10^{-3}$   | $1.8\times10^{-5}$   |
| 비율                                       | $8.9$                | $8.5\times10^{-2}$   | $1.36$               | $0.96$               |

확률 하나만 보면 "water" 가 두 낱말 모두에서 가장 크다. 그런데 "water" 는 얼음과 수증기 어느 쪽과도 관련되어 비율이 $1$ 에 가깝고, 두 낱말의 차이를 말해 주지 않는다. 차이를 말해 주는 것은 비율이 $1$ 에서 먼 "solid" 와 "gas" 다.

그래서 낱말 벡터 $\mathbf w$ 와 문맥 벡터 $\mathbf c$ 를 두고, 두 낱말 벡터의 차와 문맥 벡터의 내적이 비율의 로그가 되기를 바란다.

$$(\mathbf w_{\text{ice}}-\mathbf w_{\text{steam}})\cdot\mathbf c_{\text{solid}}=\log 8.9\approx2.19$$

"gas" 에서는 $\log0.085\approx-2.47$, "water" 에서는 $\log1.36\approx0.31$ 이다. 이 식이 모든 낱말 쌍에서 성립하려면 각 낱말에서 $\mathbf w\cdot\mathbf c=\log P(c\mid w)=\log X_{wc}-\log X_w$ 이면 된다. $\log X_w$ 는 $w$ 에만 달린 수이므로 낱말마다 상수 하나로 둔다.

함께 나오지 않은 쌍은 $X_{wc}=0$ 이라 로그가 없다. 한두 번 함께 나온 쌍은 우연일 수 있어 로그값을 믿기 어렵다. 그래서 쌍마다 횟수에 따라 무게를 주어 제곱오차를 더하고, 횟수가 $0$ 인 쌍의 무게는 $0$ 으로 둔다. 이 방법이 GloVe 다.

# 정의

## 목적함수

어휘 $V$ 위의 동시 출현 횟수 행렬 $X$ 에 대해, 낱말 벡터 $\mathbf w_i\in\mathbb R^d$, 문맥 벡터 $\tilde{\mathbf c}\_j\in\mathbb R^d$, 치우침 $b_i,\tilde b_j\in\mathbb R$ 를 다음 함수를 최소화하도록 정한다[^1].

$$J=\sum_{i,j\in V}f(X_{ij})\bigl(\mathbf w_i\cdot\tilde{\mathbf c}\_j+b_i+\tilde b_j-\log X_{ij}\bigr)^2$$

이 최소화로 얻는 단어 임베딩을 **GloVe** 라 한다. 치우침 $b_i$ 가 직관 절의 $-\log X_w$ 자리이고, $\tilde b_j$ 는 $i$ 와 $j$ 를 대칭으로 다루려고 더한 것이다.

## 무게 함수

**무게 함수(weighting function)** $f$ 는 다음과 같다.

$$f(x)=\begin{cases}(x/x_{\max})^{\alpha}&x\lt x_{\max}\cr 1&x\ge x_{\max}\end{cases}$$

$f(0)=0$ 이므로 함께 나오지 않은 쌍은 합에서 빠진다. 드문 쌍은 작은 무게를 받고, $x_{\max}$ 이상 나온 쌍은 모두 같은 무게 $1$ 을 받는다. 원 논문은 $x_{\max}=100$, $\alpha=3/4$ 를 썼다. $100$ 번 이상 나온 쌍은 무게 $1$ 이고, $25$ 번 나온 쌍은 $(1/4)^{3/4}\approx0.35$ 다.

# 성질

## 로그 횟수 행렬의 분해

$d$ 가 충분히 커서 내적을 쌍마다 따로 정할 수 있으면, $X_{ij}\gt 0$ 인 모든 쌍에서 $\mathbf w_i\cdot\tilde{\mathbf c}\_j=\log X_{ij}-b_i-\tilde b_j$ 일 때 $J=0$ 으로 최소다. 치우침을 $b_i=\log X_i-\frac12\log N$, $\tilde b_j=\log X_j-\frac12\log N$ 으로 고르면 우변은 단어 임베딩 문서의 점별 상호정보(pointwise mutual information) $\mathrm{PMI}(i,j)$ 다. $N=\sum_{i,j}X_{ij}$ 다.

$d$ 가 작으면 GloVe 는 행렬 $\log X$ 에서 행마다, 열마다 상수를 뺀 것을 계수 $d$ 의 행렬 $W\tilde C^{\mathrm T}$ 로 근사하되, 오차를 $f(X_{ij})$ 의 무게로 잰다. 단어 임베딩 문서의 음수 표집 skip-gram 이 같은 꼴의 행렬 $\mathrm{PMI}-\log k$ 를 다른 손실로 분해하는 것과 견주어진다.

## 0 아닌 성분만의 계산

$f(0)=0$ 이므로 $J$ 의 합은 $X$ 의 0 아닌 성분에 대해서만 계산된다. 원 논문은 말뭉치 크기 $\lvert C\rvert$ 에 대해 0 아닌 성분의 수가 약 $\lvert C\rvert^{0.8}$ 로 늘어난다고 보고했다[^1]. 한 번의 갱신이 말뭉치를 다시 읽지 않고 표의 성분 하나를 쓰므로, 말뭉치를 창마다 훑는 skip-gram 보다 한 회의 학습이 가볍다.

## 기울기

$e_{ij}=\mathbf w_i\cdot\tilde{\mathbf c}\_j+b_i+\tilde b_j-\log X_{ij}$ 로 두면 다음이 나온다.

$$\frac{\partial J}{\partial\mathbf w_i}=2\sum_j f(X_{ij})\thinspace e_{ij}\thinspace\tilde{\mathbf c}\_j,\qquad\frac{\partial J}{\partial b_i}=2\sum_j f(X_{ij})\thinspace e_{ij}$$

0 아닌 성분 $(i,j)$ 를 무작위 순서로 하나씩 뽑아 이 기울기의 한 항으로 갱신하면 [확률적 경사하강법](stochastic-gradient-descent.md)이다. 원 논문은 성분마다 학습률을 따로 줄이는 AdaGrad(adaptive gradient)를 썼다.

## 낱말 벡터와 문맥 벡터의 대칭

창이 앞뒤로 대칭이면 $X$ 가 대칭 행렬이고, $J$ 에서 $\mathbf w$ 와 $\tilde{\mathbf c}$ 의 자리가 바뀌어도 같다. 그래서 두 벡터는 초깃값만 다른 같은 문제의 해이고, 원 논문은 최종 임베딩으로 $\mathbf w_i+\tilde{\mathbf c}\_i$ 를 썼다.

# 활용

- 낱말 유추. 단어 임베딩 문서의 "king − man + woman" 꼴의 유추 문제에서, 원 논문은 420 억 낱말 말뭉치와 $d=300$ 으로 질문의 75.0% 를 맞혔다고 보고했다[^1].
- 다른 모형의 입력. 개체명 인식이나 문장 분류 모형에서 낱말을 학습해 둔 GloVe 벡터로 바꾸어 넣고, 그 위의 모형만 학습한다.
- 동시 출현 행렬의 가중 분해. 추천에서 사용자와 상품이 함께 나온 횟수 행렬에 같은 목적함수를 써서 두 쪽의 벡터를 얻는다.

[^1]: J. Pennington, R. Socher, C. D. Manning, "GloVe: Global vectors for word representation", *Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing* (2014), 1532–1543.

# 연관 문서

## 선수지식

- [단어 임베딩](word-embeddings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #linear_algebra #statistics
