# 지수족

# 개요

**지수족(exponential family)** 은 밀도의 로그가 "모수와 관측 요약값의 곱에서 모수만의 함수를 뺀 것" 으로 적히는 분포들의 모임이다. 동전을 백만 번 던져 앞면이 나올 확률을 추정할 때, 백만 개의 결과를 다 들고 있지 않아도 앞면의 개수 하나면 충분하다. 지수족에 드는 분포에서는 관측이 몇 개든 고정된 개수의 합만으로 추정과 계산을 한다.

# 직관

동전을 10 번 던져 앞면이 7 번 나왔다. 앞면 확률이 $p$ 이면 이 던지기 결과가 나올 확률은 앞면이 어느 차례에 나왔든 $p^7(1-p)^3$ 이다. [최대가능도 추정](maximum-likelihood.md)은 이 값을 가장 크게 하는 $p$ 를 찾는다.

이 확률을 지수 꼴로 고쳐 쓴다.

$$
p^7(1-p)^3 = \exp\negthinspace\Big(7\log\frac{p}{1-p} + 10\log(1-p)\Big)
$$

지수의 첫 항은 앞면 수 $7$ 과 $p$ 만으로 정해지는 수 $\log\frac{p}{1-p}$ 의 곱이다. 둘째 항에는 관측이 던진 횟수 $10$ 으로만 들어간다. 그래서 어느 차례에 앞면이 나왔는지는 계산에 쓰이지 않는다.

$\eta=\log\frac{p}{1-p}$ 로 놓으면 $1-p=1/(1+e^{\eta})$ 이므로 확률은 $\exp(7\eta-10\log(1+e^{\eta}))$ 다. 로그를 $\eta$ 로 미분하면 $7-10e^{\eta}/(1+e^{\eta})=7-10p$ 이고, 이 값이 $0$ 이 되는 $p=0.7$ 이 추정값이다. 밀도의 로그가 이처럼 "모수 곱하기 관측의 합, 빼기 모수만의 함수" 인 분포들을 지수족이라 부른다.

# 정의

## 지수족

기준측도 $\nu$ 가 주어진 표본공간 $\mathcal X$ 위에서, [가측함수](measurable-functions.md) $h : \mathcal X \to [0, \infty)$ 와 $T : \mathcal X \to \mathbb R^k$ 를 고정한다. $\eta \in \mathbb R^k$ 에 대해

$$
A(\eta) \thickspace=\thickspace \log \int_{\mathcal{X}} h(x)\thinspace e^{\eta^{\top}T(x)}\thinspace d\nu(x)
$$

를 **로그분배함수(log-partition function)** 라 하고, 

$$
\mathcal{N} = \lbrace\eta \in \mathbb{R}^{k} : A(\eta) \lt\infty\rbrace
$$

를 **자연모수공간(natural parameter space)** 이라 한다. $\eta \in \mathcal N$ 에 대해

$$
p(x \mid \eta) = h(x)\exp\negthinspace\big(\eta^{\top}T(x) - A(\eta)\big)
$$

는 [확률밀도](probability-density.md)이고, 이 밀도들의 모임이 **지수족** 이다. $\eta$ 를 **자연모수(natural parameter)**, $T$ 를 **충분통계량(sufficient statistic)**, $h$ 를 **기저측도(carrier)** 라 부른다.

직관 절의 동전 한 번 던지기는 $\mathcal X=\lbrace 0,1\rbrace$, $\nu$ 는 세는 측도, $h(x)=1$, $T(x)=x$ 로 놓은 경우다. $A(\eta)=\log(1+e^{\eta})$ 는 모든 실수에서 유한하므로 $\mathcal N=\mathbb R$ 이고, $p(1\mid\eta)=e^{\eta}/(1+e^{\eta})=p$ 다.

## 정칙성과 최소 표현

$\mathcal N$ 이 열린집합이면 지수족이 **정칙(regular)** 이라 한다. $T$ 의 성분들과 상수함수 $1$ 이 $\nu$ 거의 어디서나 아핀독립이면 표현이 **최소(minimal)** 라 한다.

동전에서 $\mathcal N=\mathbb R$ 은 열린집합이므로 정칙이고, $\lbrace 0,1\rbrace$ 위에서 $x$ 와 $1$ 은 아핀독립이므로 최소다. 같은 동전을 $T(x)=(x,1-x)$ 로 적으면 $x+(1-x)=1$ 이어서 최소가 아니다. 이때 $\eta=(\eta_1,\eta_2)$ 와 $(\eta_1+c,\eta_2+c)$ 는 같은 분포를 준다.

## 곡선지수족

모수 $\theta$ 가 $\eta=\eta(\theta)$ 로 $\mathcal N$ 안의 $k$ 보다 낮은 차원의 [다양체](manifolds.md)만 훑으면 **곡선지수족(curved exponential family)** 이라 한다. 평균이 $\mu$, 분산이 $\mu^2$ 인 정규분포족은 $T(x)=(x,x^2)$ 에 대해 $\eta=(1/\mu,-1/(2\mu^2))$ 이므로 평면 안의 곡선 $\eta_2=-\eta_1^2/2$ 위에만 있다.

## 평균모수

$\mu(\eta)=\mathbb E\_{\eta}[T(X)]$ 를 **평균모수(mean parameter)** 라 하고, $\eta$ 가 $\mathcal N$ 을 움직일 때 $\mu(\eta)$ 의 값들의 모임을 평균모수 공간이라 한다. 동전에서 $\mu=p$ 이고 평균모수 공간은 열린구간 $(0,1)$ 이다.

## 표준 분포의 지수족 표현

| 분포 | T(x) | 자연모수 η | A(η) |
| --- | --- | --- | --- |
| $\mathrm{Bernoulli}(p)$ | $x$ | $\log(p/(1-p))$ | $\log(1 + e^{\eta})$ |
| $\mathrm{Poisson}(\lambda)$ | $x$ | $\log \lambda$ | $e^{\eta}$ |
| 정규 (분산 기지) | $x$ | $\mu/\sigma^2$ | $\sigma^2\eta^2/2$ |
| 정규 (둘 다 미지) | $(x, x^2)$ | $(\mu/\sigma^2, -1/(2\sigma^2))$ | $-\eta_1^2/(4\eta_2) - (1/2)\log(-2\eta_2)$ |
| $\mathrm{Gamma}(\alpha,\beta)$ | $(\log x, x)$ | $(\alpha - 1, -\beta)$ | $\log \Gamma(\eta_1+1) - (\eta_1+1)\log(-\eta_2)$ |

[지수분포](exponential-distribution.md)는 [감마분포](gamma-distribution.md)의 특수경우이고, 범주형분포와 [다항분포](multinomial-distribution.md)는 지시벡터를 $T$ 로 두면 지수족이다. [균등분포](uniform-distribution.md) $U(0, \theta)$ 는 지지집합이 모수에 따라 바뀌어 지수족이 아니며, [Cauchy 분포](cauchy-distribution.md)와 자유도가 미지인 [t 분포](t-distribution.md)도 지수족이 아니다.

## 독립표본

$x_1, \dots, x_n$ 이 독립이면

$$
p(x_{1:n} \mid \eta) = \Big(\prod_{i=1}^{n} h(x_i)\Big)\exp\negthinspace\Big(\eta^{\top}\sum_{i=1}^{n}T(x_i) - nA(\eta)\Big)
$$

이므로 표본 전체도 같은 자연모수를 갖는 지수족이고, 그 충분통계량은 합

$$
S_n = \sum_{i=1}^{n} T(x_i)
$$

이다. $S_n$ 의 차원은 $n$ 에 상관없이 $k$ 다. 직관 절의 동전 10 번은 $n=10$, $S_{10}=7$ 이고 로그분배함수는 $10\log(1+e^{\eta})$ 다.

# 성질

## 충분통계량과 인수분해

통계량 $T$ 가 모수 $\theta$ 에 대해 충분하다는 것은 $T(X)$ 가 주어졌을 때 $X$ 의 조건부분포가 $\theta$ 에 의존하지 않는다는 뜻이다([충분통계량](sufficient-statistics.md)). Fisher–Neyman 인수분해 정리(Fisher–Neyman factorization theorem)는 이것을 밀도의 꼴로 판정한다.

$$
T \text{ 가 충분} \iff p(x \mid \theta) = g\big(T(x),\thinspace \theta\big)\thinspace h(x) \quad \text{(모든 } x, \theta\text{)}.
$$

지수족의 밀도가 이 꼴이므로 $T$ 는 충분통계량이다. 이산인 경우의 증명은 다음과 같다. 충분이면 $p(x \mid \theta) = \Pr(X=x \mid T=t)\Pr(T=t \mid \theta)$ 이고 앞쪽이 $\theta$ 에 의존하지 않으므로 인수분해가 나온다. 역으로 인수분해가 있으면 조건부확률의 분자와 분모에서 $g(T(x), \theta)$ 가 약분되어 $\theta$ 가 사라진다.

## 로그분배함수의 미분

$\eta$ 가 $\mathcal N$ 의 내부점이면 $A$ 는 그 근방에서 해석적이고 적분과 미분의 순서를 바꿀 수 있다. 그러면

$$
\nabla A(\eta) = \mathbb{E}\_{\eta}[T(X)], \qquad \nabla^{2} A(\eta) = \mathrm{Cov}\_{\eta}\big(T(X)\big).
$$

첫 식은 다음 계산으로 나온다.

$$
\nabla A(\eta) = \frac{\int h(x)\thinspace T(x)\thinspace e^{\eta^{\top}T(x)}d\nu}{\int h(x)\thinspace e^{\eta^{\top}T(x)}d\nu} = \mathbb{E}\_{\eta}[T(X)].
$$

한 번 더 미분하면 둘째 식이 나오고, 고차 미분은 고차 cumulant 다. Bernoulli 에서 $A'(\eta) = e^{\eta}/(1+e^{\eta})=p$ 는 로지스틱 함수이고 $A''(\eta) = p(1-p)$ 다. 동전의 $p=0.7$ 에서 $A'=0.7$, $A''=0.21$ 이다. Poisson 에서는 $A(\eta) = e^{\eta}$ 이므로 모든 차수의 cumulant 가 $\lambda = e^{\eta}$ 로 같다.

## 볼록성

$\nabla^2 A = \mathrm{Cov}(T)$ 는 [공분산](covariance.md) [행렬](matrices.md)이므로 양반정부호다. 그러므로 $A$ 는 $\mathcal N$ 위에서 볼록하고([볼록성](convexity.md)), 최소 표현이면 $\mathrm{Cov}(T)$ 가 양정부호라 엄격볼록이다. $\mathcal N$ 이 볼록집합이라는 것은 [Hölder 부등식](holder-inequality.md)으로 증명된다.

## 최대가능도 추정과 모멘트 매칭

로그가능도는

$$
\ell(\eta) = \eta^{\top}S_n - nA(\eta) + \text{const}
$$

이고, 선형 항에서 볼록함수를 뺀 것이므로 $\eta$ 의 오목함수다. 내부 최대점의 조건은

$$
\nabla \ell(\eta) = S_n - n\nabla A(\eta) = 0
\quad\Longleftrightarrow\quad
\mathbb{E}\_{\hat\eta}[T(X)] = \frac{1}{n}\sum_{i=1}^{n} T(x_i)
$$

이다. 최대가능도 추정량(maximum likelihood estimator, MLE)은 평균모수를 표본평균에 맞춘 값이다. 동전에서는 $p=S_{10}/10=0.7$ 이 직관 절의 답이다.

최소 표현에서는 $\ell$ 이 엄격오목이므로 해가 존재하면 유일하다. 해는 표본평균 $S_n/n$ 이 평균모수 공간 안에 있을 때 존재하고, 경계에 있으면 $\eta$ 가 무한으로 가서 MLE 가 존재하지 않는다. 동전을 10 번 던져 모두 앞면이면 $S_{10}/10=1$ 이 $(0,1)$ 밖이므로 그렇다. 로지스틱 회귀에서 데이터가 완전분리되는 경우도 같다.

[Fisher 정보](fisher-information.md)는 $I(\eta) = \nabla^2 A(\eta) = \mathrm{Cov}(T)$ 이므로 MLE 의 점근분산도 $A$ 의 곡률로 정해진다. [Newton 법](newton-method.md)에서는 [Hessian](hessian.md) 이 $-n\mathrm{Cov}(T)$ 라 Fisher scoring 과 같은 반복이 된다. 차원이 커서 $A$ 를 계산할 수 없으면 [경사하강법](gradient-descent.md) 계열을 쓴다.

## Legendre 쌍대와 Bregman divergence

최소·정칙 지수족에서 $\nabla A$ 는 $\mathcal N$ 의 내부에서 평균모수 공간의 내부로 가는 전단사이고, 그 역은 [볼록 공액](convex-conjugate.md)

$$
A^{\ast}(\mu) = \sup_{\eta}\big(\eta^{\top}\mu - A(\eta)\big)
$$

의 기울기다. $A^\ast(\mu)$ 는 평균모수가 $\mu$ 인 분포의 $h\thinspace d\nu$ 에 대한 음의 엔트로피다([Shannon 엔트로피](entropy.md)). 두 분포 사이의 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)는 $A$ 가 정하는 [Bregman divergence](bregman-divergence.md)와 같다.

$$
D_{\mathrm{KL}}\big(p_{\eta_1} \thinspace\Vert\thinspace p_{\eta_2}\big) = A(\eta_2) - A(\eta_1) - \nabla A(\eta_1)^{\top}(\eta_2 - \eta_1).
$$

이 항등식으로부터 [정보기하](information-geometry.md)의 Pythagoras 항등식이 유도된다.[^1]

## 충분성의 귀결

- Rao–Blackwell 정리(Rao–Blackwell theorem). 불편추정량을 충분통계량으로 조건화하면 분산이 줄거나 같다. 그러므로 분산이 작은 추정량은 $T$ 의 함수 가운데서 찾는다.
- Lehmann–Scheffé 정리(Lehmann–Scheffé theorem). 최소 표현의 정칙 지수족에서 $T$ 는 완비(complete) 충분통계량이고, $T$ 의 함수인 불편추정량이 유일한 균일최소분산불편(uniformly minimum variance unbiased, UMVU) 추정량이다.
- Pitman–Koopman–Darmois 정리(Pitman–Koopman–Darmois theorem). 지지집합이 모수에 의존하지 않는 매끄러운 모수족 가운데 표본크기와 무관하게 차원이 고정된 충분통계량을 갖는 것은 지수족뿐이다.
- 단조가능도비(monotone likelihood ratio). 일모수 지수족에서 $\eta$ 가 $\theta$ 의 증가함수이면 가능도비가 $T$ 에 대해 단조이고, 단측 검정에 균일최강력(uniformly most powerful, UMP) 검정이 존재한다([가설검정](hypothesis-testing.md)).

## 켤레사전분포

가능도가 지수족이면

$$
\pi(\eta \mid \tau, n_0) \thickspace\propto\thickspace \exp\negthinspace\big(\eta^{\top}\tau - n_0 A(\eta)\big)
$$

꼴의 사전분포족이 켤레사전분포(conjugate prior)다. 관측 $x$ 하나마다 $\tau \leftarrow \tau + T(x)$, $n_0 \leftarrow n_0 + 1$ 로 갱신되어 사후분포가 같은 족에 머문다([Bayes 추론](bayesian-inference.md)). 동전에서 이 사전분포를 $p$ 로 옮기면 [베타분포](beta-distribution.md) $\mathrm{Beta}(\tau, n_0-\tau)$ 다. $\tau=1$, $n_0=2$ 는 균등분포이고, 10 번 중 앞면 7 번을 관측하면 $\tau=8$, $n_0=12$ 가 되어 사후분포는 $\mathrm{Beta}(8,4)$ 다.

## 최대엔트로피 표현

$T$ 의 평균이 $\mu$ 로 고정된 분포 가운데 엔트로피가 가장 큰 것을 찾는 문제

$$
\max_{p}\thickspace H(p) \quad \text{s.t.} \quad \mathbb{E}\_{p}[T(X)] = \mu, \thickspace\thickspace \int p \thinspace d\nu = 1
$$

의 해는 제약의 Lagrange 승수를 $\eta$ 로 하는 지수족 분포 $p(x \mid \eta) = h(x)\exp(\eta^{\top}T(x) - A(\eta))$ 다([Lagrange 쌍대성](lagrange-duality.md)). 모멘트 제약을 만족하는 $p$ 와 그 지수족 분포 $q$ 사이에서 교차항이 상쇄되므로

$$
H(p) = H(q) - D_{\mathrm{KL}}(p \thinspace\Vert\thinspace q) \le H(q)
$$

가 성립한다. 양의 실수 위에서 평균만 고정하면 지수분포, 실수 위에서 평균과 분산을 고정하면 [정규분포](normal-distribution.md), 유한집합 위에서 제약이 없으면 균등분포가 해다.[^2]

# 활용

- [일반화선형모형](generalized-linear-models.md). 반응분포를 지수족으로 두고 자연모수를 $x^{\top}\beta$ 로 놓으면(정준연결함수, canonical link) 로그가능도가 $\beta$ 에 대해 오목하고 추정은 반복가중최소제곱(iteratively reweighted least squares, IRLS)이 된다. 정규분포를 넣으면 [선형회귀](linear-regression.md), Bernoulli 를 넣으면 로지스틱 회귀, Poisson 을 넣으면 로그선형모형이다.
- 그래프 모형. 무향 그래프 모형과 [조건부 무작위장](conditional-random-fields.md)은 퍼텐셜의 로그를 $T$ 로 하는 지수족이다. [변분 추론](variational-inference.md)은 $A$ 의 변분표현을 써서 추론을 평균모수 다면체 위의 최적화로 바꾼다. 평균장 근사(mean-field approximation)와 belief propagation 이 이 방법에 속한다.[^1]
- [기댓값 최대화 알고리즘](em-algorithm.md)(expectation-maximization, EM). 완전 데이터가 지수족이면 E 단계는 충분통계량의 조건부기댓값을 계산하고, M 단계는 그 값으로 모멘트 매칭을 푼다.
- 통계물리. $A$ 는 자유에너지, $\eta$ 는 역온도와 외부장, $T$ 는 에너지와 자기화에 대응한다. Jaynes 는 최대엔트로피 원리(maximum entropy principle)를 통계추론의 방법으로 정식화했다.[^2]
- 온라인 추정. 관측이 들어올 때마다 $S_n$ 에 $T(x)$ 를 더해 두면 과거 관측을 저장하지 않고 MLE 를 다시 풀 수 있다.

[^1]: M. J. Wainwright, M. I. Jordan, "Graphical Models, Exponential Families, and Variational Inference", Foundations and Trends in Machine Learning 1(1–2) (2008), https://people.eecs.berkeley.edu/~jordan/papers/wainwright-jordan-fnt.pdf
[^2]: E. T. Jaynes, "Information Theory and Statistical Mechanics", Physical Review 106 (1957), 620–630, https://doi.org/10.1103/PhysRev.106.620

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)

## 더 알아보기

- [일반화선형모형](generalized-linear-models.md)
- [충분통계량](sufficient-statistics.md)
- [조건부 무작위장](conditional-random-fields.md)

#statistics #probability #information_theory
