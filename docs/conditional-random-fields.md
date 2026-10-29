# 조건부 무작위장

# 개요

**조건부 무작위장(conditional random field, CRF)** 은 관측열이 주어졌을 때 라벨열의 조건부 분포를 지수족 꼴로 직접 적은 모형이다. 문장의 단어마다 품사를 붙일 때 \"다음 단어가 대문자로 시작한다\" 와 \"-ing 으로 끝난다\" 같은 겹치는 특성을 함께 쓰려면, 단어와 품사의 결합분포를 적는 모형은 그 특성들의 결합분포까지 적어야 한다. CRF 는 관측의 분포를 적지 않고 관측이 주어졌을 때 라벨열의 분포만 적어, 겹치는 특성을 독립 가정 없이 함께 쓴다.

# 직관

품사 라벨을 붙이는 문제를 [은닉 Markov 모형](hidden-markov-model.md)으로 푼다고 한다. 단어열 $o\_{1:T}$ 와 라벨열 $s\_{1:T}$ 의 결합분포를 전이확률 $a\_{ij}$ 와 방출분포 $b_i$ 로 적고 Viterbi 알고리즘으로 가장 그럴듯한 라벨열을 찾는다.

여기에 "다음 단어가 대문자로 시작한다" 와 "단어가 -ing 으로 끝난다" 두 특성을 함께 쓰려고 한다. 결합분포에서 방출분포 $b_i(o_t)$ 는 상태 $i$ 가 주어졌을 때 관측 하나의 분포이므로, 두 특성을 쓰려면 둘의 결합분포를 상태마다 적어야 한다. 두 특성은 겹치는 정보를 담으므로 독립이라고 두면 같은 증거를 두 번 세고, 독립이 아니라고 두면 추정할 모수가 특성 조합의 수만큼 늘어난다.

라벨을 예측하는 데 쓰는 것은 $P(s\_{1:T}\mid o\_{1:T})$ 뿐이고 $P(o\_{1:T})$ 는 예측에 들어가지 않는다. 그러므로 결합분포를 세우는 일을 그만두고 조건부 분포만 적는다. 라벨열마다 점수

$$
\sum\_{t=1}^{T}\theta^{\top}\phi(s\_{t-1},s_t,o\_{1:T},t)
$$

를 주고, 그 지수를 라벨열 전체에 걸친 합으로 나눈 것을 조건부 분포라 한다. $\phi$ 는 관측열 전체를 받는 함수이므로 두 특성을 성분 둘로 나란히 넣으면 되고, 모수는 성분마다 하나씩 늘어난다.

나눌 때 쓰는 합은 라벨열 전체에 걸친 것이라 라벨 가짓수를 $N$ 이라 하면 항이 $N^T$ 개다. 점수가 인접한 라벨 쌍의 항만 더한 꼴이므로, 시점 순서로 부분합을 쌓는 재귀가 이 합을 $O(N^2T)$ 번의 연산으로 준다.

라벨 사이의 의존 구조를 무향 그래프로 두므로 CRF 는 [확률 그래프 모형](graphical-models.md)의 조건부 꼴이다. 선형사슬 구조에서 분할함수와 기울기를 전향 후향 재귀로 계산한다.

# 정의

## 선형사슬 조건부 무작위장

라벨열을 $s\_{1:T}\in S^T$, 관측열을 $o\_{1:T}$ 라 한다. **특성함수** $\phi\colon S\times S\times\mathcal O^T\times\lbrace 1,\dots,T\rbrace\to\mathbb R^d$ 와 모수 $\theta\in\mathbb R^d$ 에 대해 **선형사슬 조건부 무작위장**은 다음 조건부 분포다.

$$
P\_\theta(s\_{1:T}\mid o\_{1:T})=\frac{1}{Z\_\theta(o\_{1:T})}\exp\Bigl(\sum\_{t=1}^{T}\theta^{\top}\phi(s\_{t-1},s_t,o\_{1:T},t)\Bigr)
$$

$s_0$ 는 시작 기호로 고정한다. **분할함수**는 라벨열 전체에 걸친 합이다.

$$
Z\_\theta(o\_{1:T})=\sum\_{s\_{1:T}\in S^T}\exp\Bigl(\sum\_{t=1}^{T}\theta^{\top}\phi(s\_{t-1},s_t,o\_{1:T},t)\Bigr)
$$

$\phi$ 가 관측열 전체와 시점을 받으므로 한 시점의 특성이 관측의 어느 자리든 볼 수 있다. 조건부 분포만 정의하고 $P(o\_{1:T})$ 는 정의하지 않는다.

## 전이 행렬

관측열과 시점을 고정하고 [행렬](matrices.md) $M_t\in\mathbb R^{N\times N}$ 을

$$
\lbrack M_t\rbrack\_{ij}=\exp\bigl(\theta^{\top}\phi(i,j,o\_{1:T},t)\bigr)
$$

로 둔다. 분할함수는 이 행렬들의 곱의 성분합이다.

# 성질

## 전향 재귀

$\alpha_t\in\mathbb R^N$ 을 $\alpha_1=\lbrack M_1\rbrack\_{s_0,\cdot}$ 과 $\alpha_t^{\top}=\alpha\_{t-1}^{\top}M_t$ 로 둔다.

**정리.** $Z\_\theta(o\_{1:T})=\sum_i\lbrack\alpha_T\rbrack_i$ 이고 계산량은 $O(N^2T)$ 다.

증명의 요지. $\lbrack\alpha_t\rbrack_i$ 가 $s_t=i$ 인 길이 $t$ 의 라벨열에 걸친 지수 점수의 합이라는 것을 $t$ 에 대한 귀납으로 보인다. 재귀는 시점 $t$ 에서 $N^2$ 개의 곱을 하므로 전체가 $O(N^2T)$ 다. ∎

후향 벡터 $\beta_t$ 를 $\beta_T=\mathbf 1$ 과 $\beta_t=M\_{t+1}\beta\_{t+1}$ 로 두면 주변분포가 나온다.

$$
P\_\theta(s\_{t-1}=i,s_t=j\mid o\_{1:T})=\frac{\lbrack\alpha\_{t-1}\rbrack_i\lbrack M_t\rbrack\_{ij}\lbrack\beta_t\rbrack_j}{Z\_\theta(o\_{1:T})}
$$

## 로그 가능도의 볼록성

자료 $(o^{(k)},s^{(k)})\_{k=1}^{n}$ 의 조건부 로그 가능도를 $L(\theta)=\sum_k\log P\_\theta(s^{(k)}\mid o^{(k)})$ 라 한다.

**정리.** $L$ 은 [볼록](convexity.md) 함수의 음수, 곧 $-L$ 이 볼록이고, 기울기는 다음과 같다[^1].

$$
\nabla L(\theta)=\sum_k\Bigl(\Phi(s^{(k)},o^{(k)})-\mathbb E\_{P\_\theta(\cdot\mid o^{(k)})}\lbrack\Phi\rbrack\Bigr),\qquad \Phi(s,o)=\sum_t\phi(s\_{t-1},s_t,o,t)
$$

증명의 요지. $\log Z\_\theta$ 는 지수족의 로그 분할함수이므로 $\theta$ 에 대해 볼록이고 그 기울기가 $\Phi$ 의 조건부 기댓값이다. $L$ 은 선형항에서 이 볼록함수를 뺀 것이므로 $-L$ 이 볼록이다. ∎

기댓값은 전향 후향 재귀가 주는 인접 쌍의 주변분포로 계산한다. 그래서 기울기 하나를 자료 하나당 $O(N^2T)$ 로 얻고, 전역 최솟값을 경사법으로 찾는다.

## 생성 모형과의 대비

은닉 Markov 모형은 결합분포 $P(s,o)$ 를 세우고 조건부 분포를 Bayes 규칙으로 얻는다. 특성함수를 $\phi$ 의 성분으로 전이 지시함수 $\mathbf 1\lbrack s\_{t-1}=i,s_t=j\rbrack$ 과 방출 지시함수 $\mathbf 1\lbrack s_t=i,o_t=v\rbrack$ 만 두면, 선형사슬 조건부 무작위장이 은닉 Markov 모형과 같은 조건부 분포족을 준다.

성분을 더 넣으면 족이 넓어진다. 관측열의 여러 자리를 동시에 보는 성분은 결합분포 쪽에서는 관측의 의존 구조를 모형화해야 들어가지만, 조건부 쪽에서는 $\phi$ 의 성분 하나다.

## 라벨 편향

각 시점에서 지역적으로 정규화하는 모형, 곧 $P(s_t\mid s\_{t-1},o)$ 를 시점마다 확률분포로 두고 곱하는 모형에서는 후속 상태가 적은 상태가 확률을 몰아 받는다. 후속이 하나뿐인 상태는 그 전이에 확률 $1$ 을 주므로 관측이 무엇이든 점수가 깎이지 않는다.

조건부 무작위장은 라벨열 전체를 한 번에 정규화하므로 이 편향이 없다. 분할함수가 열 전체에 걸친 합이어서 후속 수에 따른 치우침이 들어갈 자리가 없다[^1].

# 활용

- **라벨 붙이기.** 품사 라벨, 개체명 인식, 유전자 구간 예측에서 라벨열의 조건부 분포를 이 모형으로 적는다. 예측은 $\arg\max$ 를 [동적 계획법](dynamic-programming.md)으로 찾고, 이것은 은닉 Markov 모형의 Viterbi 알고리즘과 같은 재귀다.
- **신경망과의 결합.** 특성함수 $\phi$ 의 자리에 신경망의 출력을 놓으면 전이 점수만 모수로 남는다. 분할함수와 기울기의 재귀는 그대로 쓰고 신경망의 기울기를 연쇄법칙으로 이어 받는다.
- **일반 그래프의 무작위장.** 사슬 대신 임의의 무방향 그래프에 특성함수를 두면 분할함수의 계산이 그래프의 나무 분해 폭에 따라 커진다. 폭이 큰 그래프에서는 근사 추론을 쓴다.
- **지수족으로서의 성질.** 모형은 충분통계량 $\Phi$ 를 가진 [지수족](exponential-families.md)이므로 최대가능도 추정의 1 차 조건이 특성의 표본평균과 모형 기댓값의 일치로 적힌다.

[^1]: J. Lafferty, A. McCallum, F. Pereira, "Conditional random fields: probabilistic models for segmenting and labeling sequence data", Proceedings of the 18th International Conference on Machine Learning (2001), 282–289. 라벨 편향은 1 절, 볼록성과 기울기는 5 절이다.

# 연관 문서

## 선수지식

- [지수족](exponential-families.md)
- [확률 그래프 모형](graphical-models.md)
- [은닉 Markov 모형](hidden-markov-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #probability #statistics #computation
