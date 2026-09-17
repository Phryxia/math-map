# 지수족과 충분통계량

# 개요

지수족(exponential family)은 밀도가

$$
p(x \mid \eta) = h(x)\thinspace\exp\negthinspace\big(\eta^{\top}T(x) - A(\eta)\big)
$$

꼴로 쓰이는 분포족이다. Bernoulli, Poisson, 정규, Gamma, Beta, 다항분포 등 표준적인 분포 대부분이 여기에 들어간다.

이 형태에서 여러 성질이 따라 나온다. 추론에 필요한 요약은 $T$ 의 합뿐이고(충분통계량), 로그분배함수 $A$ 의 미분이 $T$ 의 모멘트를 생성하며, $A$ 의 볼록성이 로그가능도의 오목성을 주어 [최대가능도 추정](maximum-likelihood.md)이 유일한 모멘트 매칭 문제가 된다. 켤레사전분포, 일반화선형모형, 최대엔트로피 분포도 같은 구조에서 나온다.

# 직관

Poisson 모형에서 관측이 백만 개여도 모수 추정에 필요한 것은 관측값의 합 하나다. 표본 크기가 커져도 요약의 차원이 고정되는 성질이 지수족의 특징이다.

$A(\eta)$ 는 밀도를 1 로 만드는 정규화 비용이고, 이 비용이 $\eta$ 에 따라 변하는 방식이 분포의 모멘트다. 기울기가 평균, 곡률이 분산이다. 곡률이 양반정부호라 $A$ 가 볼록하고 로그가능도가 오목하다.

같은 분포족을 자연모수 $\eta$ 로도, 평균모수 $\mu = E[T]$ 로도 볼 수 있다. 두 좌표계는 $\nabla A$ 로 오가고 그 대응이 Legendre 변환이다. 평균모수 좌표에서 MLE 는 표본평균을 그대로 쓰는 것이다.

# 정의

## 지수족

기준측도 $\nu$ 가 주어진 표본공간 $\mathcal X$ 위에서, 가측함수 $h : \mathcal X \to [0, \infty)$ 와 $T : \mathcal X \to \mathbb R^k$ 를 고정한다. 자연모수 $\eta \in \mathbb R^k$ 에 대해

$$
A(\eta) \thickspace=\thickspace \log \int_{\mathcal{X}} h(x)\thinspace e^{\eta^{\top}T(x)}\thinspace d\nu(x)
$$

를 로그분배함수(log-partition function) 또는 cumulant 생성함수라 하고, 자연모수공간을

$$
\mathcal{N} = \lbrace\eta \in \mathbb{R}^{k} : A(\eta) < \infty\rbrace
$$

로 둔다. $\eta \in \mathcal N$ 에 대해

$$
p(x \mid \eta) = h(x)\exp\negthinspace\big(\eta^{\top}T(x) - A(\eta)\big)
$$

가 확률밀도가 되며, 이렇게 얻은 분포족을 지수족이라 한다. $T$ 를 충분통계량, $h$ 를 기저측도(carrier)라 부른다.

$\mathcal N$ 이 열린집합이면 정칙(regular), $T$ 의 성분들과 상수함수 1 이 $\nu$ 거의 어디서나 아핀독립이면 최소(minimal) 표현이다. 최소가 아니면 서로 다른 $\eta$ 가 같은 분포를 주어 항등가능성이 깨진다. 모수가 $\eta = \eta(\theta)$ 로 $k$ 보다 낮은 차원의 다양체를 훑으면 곡선지수족(curved exponential family)이라 한다.

## 예

| 분포 | $T(x)$ | 자연모수 $\eta$ | $A(\eta)$ |
| --- | --- | --- | --- |
| $\mathrm{Bernoulli}(p)$ | $x$ | $\log(p/(1-p))$ | $\log(1 + e^{\eta})$ |
| $\mathrm{Poisson}(\lambda)$ | $x$ | $\log \lambda$ | $e^{\eta}$ |
| 정규 (분산 기지) | $x$ | $\mu/\sigma^2$ | $\sigma^2\eta^2/2$ |
| 정규 (둘 다 미지) | $(x, x^2)$ | $(\mu/\sigma^2, -1/(2\sigma^2))$ | $-\eta_1^2/(4\eta_2) - (1/2)\log(-2\eta_2)$ |
| $\mathrm{Gamma}(\alpha,\beta)$ | $(\log x, x)$ | $(\alpha - 1, -\beta)$ | $\log \Gamma(\eta_1+1) - (\eta_1+1)\log(-\eta_2)$ |

지수분포는 Gamma 의 특수경우이고, 범주형과 다항분포는 지시벡터를 $T$ 로 두면 지수족이다. 균등분포 $U(0, \theta)$ 는 지지집합이 모수에 의존해 지수족이 아니며, Cauchy 분포와 자유도가 미지인 t 분포도 아니다.

## 독립표본

$x_1, \dots, x_n$ 이 독립이면

$$
p(x_{1:n} \mid \eta) = \Big(\prod_{i=1}^{n} h(x_i)\Big)\exp\negthinspace\Big(\eta^{\top}\sum_{i=1}^{n}T(x_i) - nA(\eta)\Big)
$$

이므로 표본 전체도 같은 자연모수를 갖는 지수족이고, 충분통계량은 합

$$
S_n = \sum_{i=1}^{n} T(x_i)
$$

이다. 충분통계량의 차원은 $n$ 에 무관하게 $k$ 다.

## 충분통계량과 인수분해

통계량 $T$ 가 모수 $\theta$ 에 대해 **충분**(sufficient)하다는 것은 $T(X)$ 가 주어졌을 때 $X$ 의 조건부분포가 $\theta$ 에 의존하지 않는다는 뜻이다. Fisher–Neyman 인수분해 정리가 이를 밀도의 형태로 판정한다.

$$
T \text{ 가 충분} \iff p(x \mid \theta) = g\big(T(x),\thinspace \theta\big)\thinspace h(x) \quad \text{(모든 } x, \theta\text{)}.
$$

지수족의 정의식이 이 형태이므로 $T$ 는 충분통계량이다. 이산의 경우 증명은 다음과 같다. 충분이면 $p(x \mid \theta) = \Pr(X=x \mid T=t)\Pr(T=t \mid \theta)$ 로 쪼개지고 앞쪽이 $\theta$ 무관이므로 인수분해가 나온다. 역으로 인수분해가 있으면 조건부확률을 계산할 때 $g(T(x), \theta)$ 가 분자와 분모에서 약분되어 $\theta$ 가 사라진다.

# 성질

## 로그분배함수의 미분

$\eta$ 가 $\mathcal N$ 의 내부점이면 $A$ 는 그 근방에서 해석적이고 적분과 미분을 교환할 수 있다. 그러면

$$
\nabla A(\eta) = \mathbb{E}_{\eta}[T(X)], \qquad \nabla^{2} A(\eta) = \mathrm{Cov}_{\eta}\big(T(X)\big).
$$

첫 식의 계산은 다음과 같다.

$$
\nabla A(\eta) = \frac{\int h(x)\thinspace T(x)\thinspace e^{\eta^{\top}T(x)}d\nu}{\int h(x)\thinspace e^{\eta^{\top}T(x)}d\nu} = \mathbb{E}_{\eta}[T(X)].
$$

한 번 더 미분하면 두 번째 식이 나오고, 고차 미분은 고차 cumulant 를 준다. Poisson 에서 $A(\eta) = e^{\eta}$ 이므로 모든 차수의 cumulant 가 $\lambda = e^{\eta}$ 로 같고, Bernoulli 에서 $A'(\eta) = e^{\eta}/(1+e^{\eta})$ 는 로지스틱 함수이며 $A''(\eta) = p(1-p)$ 다.

## 볼록성

$\nabla^2 A = \mathrm{Cov}(T)$ 는 공분산행렬이므로 양반정부호다. 따라서 $A$ 는 $\mathcal N$ 위에서 볼록하고([볼록성](convexity.md)), 최소 표현이면 $\mathrm{Cov}(T)$ 가 양정부호라 엄격볼록이다. $\mathcal N$ 자체도 Hölder 부등식으로 볼록집합임을 보인다.

## 최대가능도 추정과 모멘트 매칭

로그가능도는

$$
\ell(\eta) = \eta^{\top}S_n - nA(\eta) + \text{const}
$$

로 $\eta$ 의 오목함수다(선형 항에서 볼록함수를 뺀 것). 내부 최대점의 조건은

$$
\nabla \ell(\eta) = S_n - n\nabla A(\eta) = 0
\quad\Longleftrightarrow\quad
\mathbb{E}_{\hat\eta}[T(X)] = \frac{1}{n}\sum_{i=1}^{n} T(x_i).
$$

MLE 는 모형의 이론적 모멘트를 표본 모멘트에 맞춘다. 최소 표현에서는 $\ell$ 이 엄격오목이므로 해가 존재하면 유일하다. 존재는 표본 평균 $S_n/n$ 이 평균모수 공간의 내부에 있을 때 보장되고, 경계에 있으면 MLE 가 발산한다. Bernoulli 표본이 전부 1 인 경우와 로지스틱 회귀에서 데이터가 완전분리되는 경우가 그렇다.

Fisher 정보는 $I(\eta) = \nabla^2 A(\eta) = \mathrm{Cov}(T)$ 이므로 점근분산도 같은 함수의 곡률이다. Newton 방법에서는 Hessian 이 공분산이라 Fisher scoring 과 일치한다. 차원이 커서 $A$ 를 구하지 못하면 [경사하강법](gradient-descent.md) 계열을 쓴다.

## Legendre 쌍대와 Bregman divergence

$\nabla A$ 는 최소·정칙 지수족에서 자연모수공간의 내부를 평균모수공간의 내부로 보내는 전단사이고, 그 역이 볼록켤레

$$
A^{*}(\mu) = \sup_{\eta}\big(\eta^{\top}\mu - A(\eta)\big)
$$

의 기울기다. $A^\ast$ 는 음의 엔트로피에 해당한다([Shannon entropy](entropy.md)). 또한 두 분포 사이의 [KL divergence](kl-divergence.md)는 $A$ 가 만드는 Bregman divergence 로 정확히 표현된다.

$$
D_{\mathrm{KL}}\big(p_{\eta_1} \thinspace\Vert\thinspace p_{\eta_2}\big) = A(\eta_2) - A(\eta_1) - \nabla A(\eta_1)^{\top}(\eta_2 - \eta_1).
$$

이 항등식이 지수족의 정보기하, 곧 선형족과 지수족의 직교성과 Pythagoras 항등식의 바탕이다.[^1]

## 충분성의 귀결

- **Rao–Blackwell**: 불편추정량을 충분통계량으로 조건화하면 분산이 줄거나 같다. 좋은 추정량은 $T$ 의 함수 중에 있다.
- **완비성과 Lehmann–Scheffé**: 최소 표현의 정칙 지수족에서 $T$ 는 완비충분통계량이고, $T$ 의 함수인 불편추정량이 유일한 UMVU 추정량이다.
- **Pitman–Koopman–Darmois 정리**: 지지집합이 모수에 의존하지 않는 매끄러운 모수족 중 표본크기와 무관하게 차원이 고정된 충분통계량을 갖는 것은 지수족뿐이다.
- **검정**: 단조가능도비 성질에서 단측 검정의 UMP 성이 따른다([가설검정과 p-값](hypothesis-testing.md)).

## 켤레사전분포

가능도가 지수족이면

$$
\pi(\eta \mid \tau, n_0) \thickspace\propto\thickspace \exp\negthinspace\big(\eta^{\top}\tau - n_0 A(\eta)\big)
$$

족이 켤레다. 관측 $x$ 에서 $\tau \leftarrow \tau + T(x)$ 와 $n_0 \leftarrow n_0 + 1$ 로 갱신되어 사후분포가 같은 족에 머문다. Beta–Binomial, Gamma–Poisson, Normal–Normal 이 이 식의 특수경우다([Bayes 추론과 사후분포](bayesian-inference.md)).

## 최대엔트로피 표현

$T$ 의 평균이 $\mu$ 로 고정된 분포 중 엔트로피를 최대화하는 것을 찾는 문제

$$
\max_{p}\thickspace H(p) \quad \text{s.t.} \quad \mathbb{E}_{p}[T(X)] = \mu, \thickspace\thickspace \int p \thinspace d\nu = 1
$$

의 해는 제약의 Lagrange 승수를 $\eta$ 로 하는 지수족 분포 $p(x \mid \eta) = h(x)\exp(\eta^{\top}T(x) - A(\eta))$ 다([Lagrange 쌍대성과 KKT 조건](lagrange-duality.md)). 목표 분포 $p$ 와 지수족 분포 $q$ 의 KL divergence 가 비음이고 모멘트 제약 아래에서 교차항이 상쇄되므로

$$
H(p) = H(q) - D_{\mathrm{KL}}(p \thinspace\Vert\thinspace q) \le H(q)
$$

가 성립한다. 평균만 고정하면 지수분포, 평균과 분산을 고정하면 정규분포, 제약이 없으면 균등분포가 해다.[^2]

# 활용

## 모멘트 매칭 계산

모멘트 매칭 $\nabla A(\hat\eta)=\bar T$ 는 일부 족에서 닫힌 형태로 풀린다. Poisson 은 $A(\eta)=e^\eta$ 이므로 $\hat\eta=\log\bar x$ 이고, Bernoulli 는 $A(\eta)=\log(1+e^\eta)$ 이므로 $\hat\eta=\log\frac{\bar y}{1-\bar y}$ 다. 두 경우 모두 평균모수 $\mu=\nabla A(\hat\eta)$ 가 표본평균과 같다.

## 응용

- **일반화선형모형**: 반응분포를 지수족으로 두고 자연모수를 선형예측자 $x^{\top}\beta$ 로 연결하면(정준연결함수) 로그가능도가 $\beta$ 에 대해 오목해지고 추정이 IRLS 가 된다. 정규분포를 넣으면 [선형회귀와 최소제곱법](linear-regression.md)이 되고, Bernoulli 를 넣으면 로지스틱 회귀, Poisson 을 넣으면 로그선형모형이 된다.
- **그래프 모형과 변분추론**: 무향 그래프 모형은 퍼텐셜의 로그가 $T$ 인 지수족이고, 추론이 $A$ 의 변분표현을 통해 평균모수 다면체 위의 최적화가 된다. 평균장 근사와 belief propagation 이 이 틀에 속한다.[^1]
- **정보기하와 EM**: 지수족에서 EM 알고리즘의 E 단계는 충분통계량의 조건부기대값을 계산하는 것이고, M 단계는 모멘트 매칭이다.
- **통계물리**: $A$ 는 자유에너지, $\eta$ 는 역온도와 외부장, $T$ 는 에너지와 자기화에 대응한다. Jaynes 는 최대엔트로피 원리를 통계추론의 언어로 옮겼다.[^2]
- **모형 선택과 근사**: 표본에서 $T$ 의 평균만 보존하면 되므로 스케치와 온라인 학습이 대규모 데이터를 요약해 추정한다.

[^1]: M. J. Wainwright, M. I. Jordan, "Graphical Models, Exponential Families, and Variational Inference", Foundations and Trends in Machine Learning 1(1–2) (2008), https://people.eecs.berkeley.edu/~jordan/papers/wainwright-jordan-fnt.pdf
[^2]: E. T. Jaynes, "Information Theory and Statistical Mechanics", Physical Review 106 (1957), 620–630, https://doi.org/10.1103/PhysRev.106.620

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #information_theory
