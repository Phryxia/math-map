# Bayes 추론

# 개요

**Bayes 추론(Bayesian inference)** 은 모르는 값에 대한 믿음을 확률분포로 적고, 데이터를 볼 때마다 그 분포를 고쳐 나가는 추론 방법이다. 앞면 확률 $p$ 를 모르는 동전을 열 번 던져 앞면이 일곱 번 나왔을 때, $p$ 가 $0.7$ 이라고 답하는 것만으로는 $p=0.5$ 일 가능성이 얼마나 남았는지 말할 수 없다. Bayes 추론은 던지기 전의 믿음을 $p$ 위의 분포로 적고 [Bayes 정리](bayes.md)로 결과를 반영해, $p$ 가 각 값일 가능성을 담은 분포 전체를 답으로 낸다.

# 직관

앞면 확률 $p$ 를 모르는 동전을 열 번 던져 앞면이 일곱 번 나왔다. 앞면 비율 $0.7$ 은 $p$ 의 추정값 하나일 뿐이고, 공정한 동전 $p=0.5$ 에서도 일곱 번은 흔히 나온다. $p=0.5$ 일 가능성이 얼마나 남았는지 수로 답하려면 $p$ 의 각 값에 가능성을 배정해야 한다.

$p$ 가 $0.3$, $0.5$, $0.7$ 셋 가운데 하나이고 던지기 전에는 셋이 같은 가능성 $1/3$ 이라고 놓는다. 각 $p$ 에서 일곱 번 앞면이 나올 확률은 $p^7(1-p)^3$ 에 비례하고, 그 값은 $0.000075$, $0.000977$, $0.002224$ 다. [Bayes 정리](bayes.md)로 이 값에 $1/3$ 을 곱하고 합이 $1$ 이 되게 나누면 던진 뒤의 가능성은 $0.023$, $0.298$, $0.679$ 다. $p=0.5$ 일 가능성은 $0.30$ 이 남는다.

$p$ 가 $\lbrack 0,1\rbrack$ 의 어느 값이든 될 수 있으면 같은 계산을 밀도로 한다. 던지기 전 밀도를 상수 $1$ 로 두면 던진 뒤 밀도는 $p^7(1-p)^3$ 에 비례하고, $\int_0^1p^7(1-p)^3\thinspace dp=1/1320$ 이므로 $1320\thinspace p^7(1-p)^3$ 이다. 이 밀도를 $0$ 에서 $0.5$ 까지 적분하면 $p\le 0.5$ 일 가능성이 $0.113$ 으로 나온다.

던지기 전의 분포를 사전분포(prior distribution), 각 $p$ 에서 관측이 나올 확률을 가능도(likelihood), 던진 뒤의 분포를 사후분포(posterior distribution)라 한다.

# 정의

## 통계모형과 사전분포

모수 공간을 $\Theta$ 라 하고 표본 공간을 $\mathcal{X}$ 라 하자. Bayes 모형은 두 조각으로 이루어진다.

$$
\theta \sim \pi(\theta), \qquad X \mid \theta \sim p(x \mid \theta).
$$

앞의 것이 **사전분포(prior distribution)**, 뒤의 것이 **표집분포(sampling distribution)** 다. 고정된 관측값 $x$ 에 대해 $\theta$ 의 함수로 본 $p(x \mid \theta)$ 가 **가능도(likelihood)** $L(\theta)$ 다.

직관 절의 동전에서는 $\theta=p$, $\Theta=\lbrack 0,1\rbrack$, $\pi(p)=1$ 이고 $X\mid p\sim\mathrm{Binomial}(10,p)$ 이다. $x=7$ 의 가능도는 $L(p)=\binom{10}{7}p^7(1-p)^3=120\thinspace p^7(1-p)^3$ 이다.

## 사후분포

두 조각은 $(\theta, X)$ 의 결합분포를 정하고, 그 조건부밀도가 **사후분포(posterior distribution)** 다.

$$
\pi(\theta \mid x) \thickspace=\thickspace \frac{p(x \mid \theta)\thinspace\pi(\theta)}{m(x)}, \qquad m(x) \thickspace=\thickspace \int_{\Theta} p(x \mid \theta)\thinspace\pi(\theta)\thinspace d\theta .
$$

분모 $m(x)$ 는 주변가능도(marginal likelihood) 또는 evidence 라 하며 $\theta$ 에 의존하지 않는다. 그래서 계산에서는 비례식을 쓴다.

$$
\pi(\theta \mid x) \thickspace\propto\thickspace L(\theta)\thinspace\pi(\theta).
$$

동전에서는 $m(7)=120/1320=1/11$ 이고 사후밀도는 $1320\thinspace p^7(1-p)^3$, 곧 $\mathrm{Beta}(8,4)$ 의 밀도다.

## 점추정과 구간

사후분포의 요약으로 다음 점추정을 쓴다. 최대사후확률(maximum a posteriori, MAP) 추정은 사후밀도가 가장 큰 점이다.

$$
\hat\theta_{\mathrm{mean}} = \mathbb{E}\lbrack\theta \mid x\rbrack, \qquad
\hat\theta_{\mathrm{med}} = \mathrm{median}(\theta \mid x), \qquad
\hat\theta_{\mathrm{MAP}} = \arg\max_{\theta} \pi(\theta \mid x).
$$

수준 $1 - \alpha$ 의 **신용구간(credible interval)** 은 사후확률이 그만큼인 집합이다.

$$
\Pr(\theta \in C \mid x) = 1 - \alpha .
$$

이런 집합은 유일하지 않다. 양쪽 꼬리를 $\alpha/2$ 씩 자른 등꼬리 구간(equal-tailed interval)을 쓰거나, 밀도가 높은 점만 모은 HPD(highest posterior density) 집합을 쓴다.

$$
C_{\mathrm{HPD}} = \lbrace\theta : \pi(\theta \mid x) \ge c\rbrace, \quad c \text{ 는 } \Pr(C_{\mathrm{HPD}} \mid x) = 1-\alpha \text{ 가 되도록 잡는다.}
$$

동전의 $\mathrm{Beta}(8,4)$ 에서는 사후평균이 $8/12=2/3$, 사후중앙값이 약 $0.676$, MAP 가 $0.7$ 이고, 95% 등꼬리 구간은 약 $\lbrack 0.390,0.891\rbrack$ 이다.

## 사후예측분포

다음 관측 $X'$ 에 대한 **사후예측분포(posterior predictive distribution)** 는 모수를 적분해 없앤 분포다.

$$
p(x' \mid x) = \int_{\Theta} p(x' \mid \theta)\thinspace \pi(\theta \mid x)\thinspace d\theta .
$$

동전에서 다음 던지기가 앞면일 사후예측확률은 $\int_0^1p\cdot 1320\thinspace p^7(1-p)^3\thinspace dp=2/3$ 이다. 이것이 [Laplace 계승 규칙](rule-of-succession.md)의 $(7+1)/(10+2)$ 다. 추정값을 넣은 예측 $p(x' \mid \hat\theta)$ 는 $0.7$ 을 주고, 사후예측분포는 모수의 불확실성까지 반영한다.

## 켤레사전분포

사전분포족 $\mathcal{P}$ 가 가능도 $p(x \mid \theta)$ 에 대해 **켤레(conjugate)** 라는 것은, 사전분포가 $\mathcal{P}$ 에 속하면 사후분포도 $\mathcal{P}$ 에 속한다는 뜻이다. 동전에서 사전분포 $\mathrm{Beta}(1,1)$ 이 사후분포 $\mathrm{Beta}(8,4)$ 가 되었듯 Beta 분포족은 이항 가능도에 대해 켤레다.

# 성질

## 측도론적 정식화

사후분포는 결합측도의 [조건부기댓값](conditional-expectation.md)에 대응하는 정칙 조건부분포(regular conditional distribution)이고, 사전측도에 대한 [Radon–Nikodym 정리](radon-nikodym.md) 도함수가 정규화된 가능도다.

## 손실함수와 점추정

제곱손실의 Bayes 규칙이 사후평균, 절대손실이 사후중앙값, 0–1 손실의 극한이 MAP 다.

## 지수족의 켤레족

켤레족은 [지수족](exponential-families.md)에서 나온다. 가능도가 자연모수 $\eta$ 의 지수족이면

$$
\pi(\eta \mid \tau, n_0) \thickspace\propto\thickspace \exp\negthinspace\big(\eta^{\top}\tau - n_0 A(\eta)\big)
$$

꼴의 족이 켤레이고, 갱신은 $\tau \leftarrow \tau + T(x)$ 와 $n_0 \leftarrow n_0 + 1$ 이라는 덧셈이 된다.

## Beta–Binomial

$X\mid p\sim\mathrm{Binomial}(n,p)$ 이고 사전분포가 $\mathrm{Beta}(a,b)$ 면

$$
\pi(p \mid x) \thickspace\propto\thickspace p^{x}(1-p)^{n-x}\thinspace p^{a-1}(1-p)^{b-1} \thickspace=\thickspace p^{x+a-1}(1-p)^{n-x+b-1},
$$

즉 $\mathrm{Beta}(a+x,b+n-x)$ 다. 사후평균은

$$
\mathbb{E}\lbrack p \mid x\rbrack = \frac{a + x}{a + b + n} = \underbrace{\frac{a+b}{a+b+n}}\_{w}\cdot \frac{a}{a+b} \thickspace+\thickspace (1-w)\cdot\frac{x}{n}.
$$

사전평균과 표본비율의 볼록결합이고, 가중치는 "사전표본크기" $a + b$ 대 실제 표본크기 $n$ 의 비다. $n \to \infty$ 이면 [최대가능도 추정](maximum-likelihood.md)값 $x/n$ 으로 간다. MAP 는 $(a + x - 1)/(a + b + n - 2)$ 로 사후평균과 일반적으로 다르다. 동전은 $a=b=1$, $n=10$, $x=7$ 이고 $w=2/12$ 이므로 사후평균 $2/3$ 은 $\frac16\cdot\frac12+\frac56\cdot 0.7$ 이다.

## Normal–Normal

분산 $\sigma^2$ 을 아는 정규표본 $x_1, \dots, x_n$ 에 평균의 사전분포를 $N(\mu_0, \tau_0^2)$ 로 주면, 정밀도(precision)를 $\lambda = 1/\text{분산}$ 으로 쓸 때 사후분포는 [정규분포](normal-distribution.md)이고

$$
\lambda_n = \lambda_0 + n\lambda, \qquad
\mu_n = \frac{\lambda_0 \mu_0 + n \lambda \bar{x}}{\lambda_0 + n\lambda}.
$$

정밀도는 더해지고 평균은 정밀도로 가중평균된다. 여기서도 $n \to \infty$ 면 사후평균이 표본평균으로, 사후분산이 $\sigma^2/n$ 으로 수렴한다. 이 축소(shrinkage) 구조는 능형회귀(ridge regression)의 벌점항과 같은 형태이며, [선형회귀](linear-regression.md)에서 정규 사전분포를 놓은 결과로 다시 나온다.

## 순차 갱신과 충분통계량

독립 관측 $x_1,\dots,x_n$ 에 대해 가능도가 곱이므로

$$
\pi(\theta \mid x_1, \dots, x_n) \thickspace\propto\thickspace \pi(\theta)\prod_{i=1}^{n} p(x_i \mid \theta)
$$

이고, 이를 한 항씩 곱해 나가는 것과 한꺼번에 곱하는 것이 같다. 따라서 $k$ 번째 단계의 사후분포를 $k+1$ 번째의 사전분포로 쓰면 되고, 최종 결과는 관측 순서에 무관하다. 또한 $T$ 가 [충분통계량](sufficient-statistics.md)이면 가능도가 $g(T(x), \theta)h(x)$ 로 인수분해되어 사후분포는 $T(x)$ 에만 의존한다. 앞면 횟수가 충분통계량이므로 Beta–Binomial 의 사후분포는 앞면 횟수에만 의존한다.

## 사전분포의 영향과 점근

Bernstein–von Mises 정리(Bernstein–von Mises theorem)로 정칙 조건 아래에서 사후분포는 참값 $\theta_0$ 근방에서 점근적으로 정규분포다.

$$
\pi(\theta \mid x_{1:n}) \thickspace\approx\thickspace N\negthinspace\left(\hat\theta_{\mathrm{MLE}}, \thickspace \frac{1}{n I(\theta_0)}\right),
$$

여기서 $\hat\theta_{\mathrm{MLE}}$ 는 최대가능도 추정(maximum likelihood estimation, MLE)의 값이고 $I$ 는 [Fisher 정보](fisher-information.md)다. 사전분포가 $\theta_0$ 근방에서 양의 밀도를 가지면 표본이 커질 때 사전분포의 선택이 극한에 영향을 주지 않고, Bayes 신용구간과 빈도주의 [신뢰구간](confidence-intervals.md)이 1차 근사에서 일치한다.[^1] 반대로 표본이 작거나 모수가 많거나 사전분포가 지지집합을 잘라 버리면 둘은 크게 갈린다.

## 빈도주의와의 대비

| | 빈도주의 | Bayes |
| --- | --- | --- |
| 모수 | 고정된 미지수 | 확률변수 |
| 확률의 대상 | 반복표집에서의 절차 | 모수에 대한 믿음 |
| 구간 해석 | 피복확률 $1-\alpha$ 의 절차 | 이 데이터 아래 사후확률 $1-\alpha$ |
| 사전정보 | 모형 선택에 암묵적으로만 | 사전분포로 명시 |
| 다중비교 | 별도 보정 필요 | 계층모형의 축소로 흡수 |

[가설검정](hypothesis-testing.md)의 p-값은 "귀무가설이 참일 때 이만큼 극단적인 데이터가 나올 확률"이고, Bayes 쪽 대응물은 Bayes 인자(Bayes factor)

$$
BF_{10} = \frac{m_1(x)}{m_0(x)} = \frac{\int p(x\mid\theta)\thinspace\pi_1(\theta)\thinspace d\theta}{\int p(x\mid\theta)\thinspace\pi_0(\theta)\thinspace d\theta}
$$

이다. 두 값은 같은 질문에 답하지 않으며, 같은 데이터에서 상반된 결론을 주기도 한다. 이것이 Lindley 역설(Lindley's paradox)이다.

## 무정보 사전분포

"아무것도 모른다"를 표현하려는 시도는 매개변수화에 의존한다는 문제에 부딪힌다. $p$ 에 [균등분포](uniform-distribution.md)를 주면 $\log(p/(1-p))$ 에는 균등이 아니다. Jeffreys 사전분포(Jeffreys prior)

$$
\pi_J(\theta) \thickspace\propto\thickspace \sqrt{\det I(\theta)}
$$

는 매끄러운 재매개변수화에 대해 불변이라는 성질로 이 문제를 부분적으로 피한다. Bernoulli 모형에서는 $\mathrm{Beta}(1/2,1/2)$ 가 된다. 적분이 무한대인 비정칙 사전분포(improper prior)도 쓰이지만, 그때는 사후분포의 적분이 유한한지 따로 확인한다.

# 활용

## 계산

닫힌 형태가 없으면 정규화상수 $m(x)$ 의 적분이 문제가 된다. 실무의 표준 도구는 사후분포를 불변분포로 갖는 [Markov 연쇄](markov-chains.md)를 설계해 표본을 얻는 [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)(Markov chain Monte Carlo, MCMC)다. Metropolis–Hastings, Gibbs 표집, [Hamiltonian Monte Carlo](hamiltonian-monte-carlo.md)가 여기 든다. 대안으로는 사후분포를 다루기 쉬운 분포족으로 근사하되 [KL divergence](kl-divergence.md)(Kullback–Leibler)를 최소화하는 [변분추론](variational-inference.md), 그리고 MAP 주변의 이차근사인 Laplace 근사(Laplace approximation)가 있다.

## 적용 사례

- 전환율에 Beta 사전분포를 두고 방문마다 갱신하면 사후분포가 관측을 언제 멈추는지에 의존하지 않는다. Thompson 표집(Thompson sampling)은 사후분포에서 뽑은 표본으로 팔을 고르는 [다중 슬롯머신](multi-armed-bandits.md) 알고리즘이다.
- 계층모형(hierarchical model)에서 여러 집단의 모수에 공통 사전분포를 두면 표본이 적은 집단의 추정이 전체 평균 쪽으로 축소되어 분산이 줄어든다.
- 나이브 Bayes(naive Bayes) 스팸 필터는 문서 클래스의 사후확률을 조건부독립 가정 아래 계산한다.
- [Kalman 필터](kalman-filter.md)는 Normal–Normal 갱신을 시간에 따라 반복하는 것이고, 관측 잡음과 상태 전이가 모두 정규일 때 사후분포가 정규로 닫힌다.
- 모형 비교에서 주변가능도는 모수가 많은 모형에 자동으로 벌점을 준다. 이 벌점을 Occam 인자(Occam factor)라 한다. 주변가능도는 사전분포에 민감하므로 [교차검증](cross-validation.md)과 함께 본다.

[^1]: A. Gelman, J. Carlin, H. Stern, D. Dunson, A. Vehtari, D. Rubin, *Bayesian Data Analysis*, 3rd ed., http://www.stat.columbia.edu/~gelman/book/

# 연관 문서

## 선수지식

- [Bayes 정리](bayes.md)
- [확률변수](random-variables.md)
- [통계 개관](statistics-overview.md)

## 더 알아보기

- [Dirichlet 분포](dirichlet-distribution.md)
- [de Finetti 정리](de-finetti-theorem.md)
- [Laplace 계승 규칙](rule-of-succession.md)
- [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)
- [확률 그래프 모형](graphical-models.md)

#statistics #probability #machine_learning
