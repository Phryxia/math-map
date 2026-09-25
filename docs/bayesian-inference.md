# Bayes 추론

# 개요

Bayes 추론은 모수를 고정된 미지의 상수가 아니라 확률변수로 보고, 관측 이전의 불확실성을 사전분포(prior)로 적고, 데이터를 본 뒤의 불확실성을 사후분포(posterior)로 갱신하는 통계적 추론의 틀이다. 갱신 규칙 자체는 [Bayes 정리](bayes.md)이고, 새로운 것은 정리가 아니라 "모수에도 확률을 붙인다"는 해석이다.

결과물은 점추정값 하나가 아니라 모수 공간 위의 분포 전체다. 여기서 사후평균과 최대사후확률 추정(maximum a posteriori, MAP) 같은 점추정, 신용구간(credible interval), 예측분포가 모두 파생된다. 사전분포와 가능도의 짝을 잘 고르면(켤레사전분포) 사후분포가 닫힌 형태로 나오고, 그렇지 않으면 Markov 연쇄 Monte Carlo(MCMC) 같은 수치적 방법이 필요하다.

# 직관

동전 하나를 받았다고 하자. 앞면 확률 $p$ 는 모른다. 빈도주의는 $p$ 를 고정된 미지수로 두고 데이터로 추정한다. Bayes 추론은 "공정한 동전일 가능성이 높다"는 사전 믿음을 $p$ 위의 분포로 적고, 던지기 결과를 보면서 그 분포를 옮긴다.

핵심 그림은 세 개의 곡선이다. 사전분포는 데이터 이전의 믿음, 가능도는 각 $p$ 값이 관측을 얼마나 잘 설명하는지, 사후분포는 둘의 곱을 정규화한 것이다. 데이터가 적으면 사후는 사전 쪽으로 끌리고, 데이터가 많아지면 가능도가 지배해 사전의 선택은 거의 지워진다.

또 하나의 직관은 **순차성**이다. 어제까지의 사후분포는 오늘의 사전분포가 된다. 한 번에 $n$ 개를 보든 하루에 하나씩 $n$ 일에 걸쳐 보든 최종 사후분포는 같다. 믿음의 갱신이 데이터의 도착 순서에 의존하지 않는다는 뜻이다.

# 정의

## 통계모형과 사전분포

모수 공간을 $\Theta$ 라 하고 표본 공간을 $\mathcal{X}$ 라 하자. Bayes 모형은 두 조각으로 이루어진다.

$$
\theta \sim \pi(\theta), \qquad X \mid \theta \sim p(x \mid \theta).
$$

앞의 것이 사전분포, 뒤의 것이 표집분포다. 고정된 관측값 $x$ 에 대해 $\theta$ 의 함수로 본 $p(x \mid \theta)$ 가 가능도 $L(\theta)$ 다.

## 사후분포

두 조각은 $(\theta, X)$ 의 결합분포를 정하고, 조건부밀도가 사후분포다.

$$
\pi(\theta \mid x) \thickspace=\thickspace \frac{p(x \mid \theta)\thinspace\pi(\theta)}{m(x)}, \qquad m(x) \thickspace=\thickspace \int_{\Theta} p(x \mid \theta)\thinspace\pi(\theta)\thinspace d\theta .
$$

분모 $m(x)$ 는 주변가능도(marginal likelihood) 또는 evidence 라 하며 $\theta$ 에 의존하지 않는다. 그래서 실무에서는 비례식만 쓴다.

$$
\pi(\theta \mid x) \thickspace\propto\thickspace L(\theta)\thinspace\pi(\theta).
$$

측도론적으로는 사후분포가 결합측도의 [조건부기댓값](conditional-expectation.md)에 대응하는 정칙 조건부분포이고, 사전측도에 대한 [Radon–Nikodym 정리](radon-nikodym.md) 도함수가 정규화된 가능도다.

## 점추정과 구간

사후분포에서 뽑아내는 요약은 손실함수의 선택에 대응한다.

$$
\hat\theta_{\mathrm{mean}} = \mathbb{E}[\theta \mid x], \qquad
\hat\theta_{\mathrm{med}} = \mathrm{median}(\theta \mid x), \qquad
\hat\theta_{\mathrm{MAP}} = \arg\max_{\theta} \pi(\theta \mid x).
$$

제곱손실의 Bayes 규칙이 사후평균, 절대손실이 사후중앙값, 0–1 손실의 극한이 MAP 다. 수준 $1 - \alpha$ 의 신용구간은 사후확률이 그만큼인 집합이다.

$$
\Pr(\theta \in C \mid x) = 1 - \alpha .
$$

이런 집합은 유일하지 않다. 관례는 양쪽 꼬리를 $\alpha/2$ 씩 자른 등꼬리 구간이거나, 밀도가 높은 점만 모은 HPD(highest posterior density) 집합이다.

$$
C_{\mathrm{HPD}} = \lbrace\theta : \pi(\theta \mid x) \ge c\rbrace, \quad c \text{ 는 } \Pr(C_{\mathrm{HPD}} \mid x) = 1-\alpha \text{ 가 되도록 잡는다.}
$$

## 사후예측분포

다음 관측 $X'$ 에 대한 예측은 모수를 적분해 없앤 분포다.

$$
p(x' \mid x) = \int_{\Theta} p(x' \mid \theta)\thinspace \pi(\theta \mid x)\thinspace d\theta .
$$

플러그인 예측 $p(x' \mid \hat\theta)$ 과 달리 모수의 불확실성까지 퍼뜨린다.

## 켤레사전분포

사전분포족 $\mathcal{P}$ 가 가능도 $p(x \mid \theta)$ 에 대해 켤레(conjugate)라는 것은, 사전분포가 $\mathcal{P}$ 에 속하면 사후분포도 $\mathcal{P}$ 에 속한다는 뜻이다. 켤레족은 [지수족](exponential-families.md)에서 나온다. 가능도가 자연모수 $\eta$ 의 지수족이면

$$
\pi(\eta \mid \tau, n_0) \thickspace\propto\thickspace \exp\negthinspace\big(\eta^{\top}\tau - n_0 A(\eta)\big)
$$

꼴의 족이 켤레이고, 갱신은 $\tau \leftarrow \tau + T(x)$ 와 $n_0 \leftarrow n_0 + 1$ 이라는 덧셈이 된다.

# 성질

## Beta–Binomial

$X\mid p\sim\mathrm{Binomial}(n,p)$ 이고 사전분포가 $\mathrm{Beta}(a,b)$ 면

$$
\pi(p \mid x) \thickspace\propto\thickspace p^{x}(1-p)^{n-x}\thinspace p^{a-1}(1-p)^{b-1} \thickspace=\thickspace p^{x+a-1}(1-p)^{n-x+b-1},
$$

즉 $\mathrm{Beta}(a+x,b+n-x)$ 다. 사후평균은

$$
\mathbb{E}[p \mid x] = \frac{a + x}{a + b + n} = \underbrace{\frac{a+b}{a+b+n}}\_{w}\cdot \frac{a}{a+b} \thickspace+\thickspace (1-w)\cdot\frac{x}{n}.
$$

사전평균과 표본비율의 볼록결합이고, 가중치는 "사전표본크기" $a + b$ 대 실제 표본크기 $n$ 의 비다. $n \to \infty$ 이면 최대가능도추정값 $x/n$ 으로 간다. MAP 는 $(a + x - 1)/(a + b + n - 2)$ 로 사후평균과 일반적으로 다르다.

## Normal–Normal

분산 $\sigma^2$ 을 아는 정규표본 $x_1, \dots, x_n$ 에 평균의 사전분포를 $N(\mu_0, \tau_0^2)$ 로 주면, 정밀도(precision)를 $\lambda = 1/\text{분산}$ 으로 쓸 때 사후분포는 정규분포이고

$$
\lambda_n = \lambda_0 + n\lambda, \qquad
\mu_n = \frac{\lambda_0 \mu_0 + n \lambda \bar{x}}{\lambda_0 + n\lambda}.
$$

정밀도는 더해지고 평균은 정밀도로 가중평균된다. 여기서도 $n \to \infty$ 면 사후평균이 표본평균으로, 사후분산이 $\sigma^2/n$ 으로 수렴한다. 이 축소(shrinkage) 구조는 ridge 회귀의 벌점항과 같은 형태이며, [선형회귀](linear-regression.md)에서 정규 사전분포를 놓은 결과로 다시 나온다.

## 순차 갱신과 충분통계량

독립 관측 $x_1,\dots,x_n$ 에 대해 가능도가 곱이므로

$$
\pi(\theta \mid x_1, \dots, x_n) \thickspace\propto\thickspace \pi(\theta)\prod_{i=1}^{n} p(x_i \mid \theta)
$$

이고, 이를 한 항씩 곱해 나가는 것과 한꺼번에 곱하는 것이 같다. 따라서 $k$ 번째 단계의 사후분포를 $k+1$ 번째의 사전분포로 쓰면 되고, 최종 결과는 관측 순서에 무관하다. 또한 $T$ 가 충분통계량이면 가능도가 $g(T(x), \theta)h(x)$ 로 인수분해되어 사후분포는 $T(x)$ 에만 의존한다. Beta–Binomial 에서 앞면 횟수만 필요했던 이유가 이것이다.

## 사전분포의 영향과 점근

정칙 조건 아래에서 Bernstein–von Mises 정리는 사후분포가 참값 $\theta_0$ 근방에서 점근적으로 정규분포임을 말한다.

$$
\pi(\theta \mid x_{1:n}) \thickspace\approx\thickspace N\negthinspace\left(\hat\theta_{\mathrm{MLE}}, \thickspace \frac{1}{n I(\theta_0)}\right),
$$

여기서 $I$ 는 Fisher 정보량이다. 즉 표본이 커지면 사전분포의 (양의 밀도를 갖는 한) 선택은 씻겨 나가고, Bayes 신용구간과 빈도주의 [신뢰구간](confidence-intervals.md)이 1차 근사에서 일치한다.[^1] 반대로 표본이 작거나 모수가 많거나 사전분포가 지지집합을 잘라 버리면 둘은 크게 갈린다.

## 빈도주의와의 대비

| | 빈도주의 | Bayes |
| --- | --- | --- |
| 모수 | 고정된 미지수 | 확률변수 |
| 확률의 대상 | 반복표집에서의 절차 | 모수에 대한 믿음 |
| 구간 해석 | 피복확률 $1-\alpha$ 의 절차 | 이 데이터 아래 사후확률 $1-\alpha$ |
| 사전정보 | 모형 선택에 암묵적으로만 | 사전분포로 명시 |
| 다중비교 | 별도 보정 필요 | 계층모형의 축소로 흡수 |

[가설검정](hypothesis-testing.md)의 p-값은 "귀무가설이 참일 때 이만큼 극단적인 데이터가 나올 확률"이고, Bayes 쪽 대응물은 Bayes 인자

$$
BF_{10} = \frac{m_1(x)}{m_0(x)} = \frac{\int p(x\mid\theta)\thinspace\pi_1(\theta)\thinspace d\theta}{\int p(x\mid\theta)\thinspace\pi_0(\theta)\thinspace d\theta}
$$

이다. 두 값은 같은 질문에 답하지 않으며, 같은 데이터에서 상반된 결론을 주기도 한다(Lindley 역설).

## 무정보 사전분포

"아무것도 모른다"를 표현하려는 시도는 매개변수화에 의존한다는 문제에 부딪힌다. $p$ 에 균등분포를 주면 $\log(p/(1-p))$ 에는 균등이 아니다. Jeffreys 사전분포

$$
\pi_J(\theta) \thickspace\propto\thickspace \sqrt{\det I(\theta)}
$$

는 매끄러운 재매개변수화에 대해 불변이라는 성질로 이 문제를 부분적으로 피한다. Bernoulli 모형에서는 $\mathrm{Beta}(1/2,1/2)$ 가 된다. 사전분포가 적분해서 무한대가 되는 improper prior 도 쓰이지만, 사후분포가 정상분포인지는 매번 확인해야 한다.

# 활용

## 계산

닫힌 형태가 없으면 정규화상수 $m(x)$ 의 적분이 문제가 된다. 실무의 표준 도구는 사후분포를 불변분포로 갖는 [Markov 연쇄](markov-chains.md)를 설계해 표본을 얻는 MCMC(Metropolis–Hastings, Gibbs, Hamiltonian Monte Carlo)다. 대안으로는 사후분포를 다루기 쉬운 분포족으로 근사하되 [KL divergence](kl-divergence.md)(Kullback–Leibler)를 최소화하는 변분추론, 그리고 MAP 주변의 이차근사인 Laplace 근사가 있다.

## 적용 사례

- **온라인 학습과 A/B 테스트**: 전환율에 Beta 사전분포를 두고 방문마다 갱신하면 언제 멈춰 보아도 해석이 일관된다. Thompson sampling 은 사후분포에서 뽑은 표본으로 팔을 고르는 bandit 알고리즘이다.
- **계층모형**: 여러 집단의 모수에 공통 사전분포를 두면 표본이 적은 집단의 추정이 전체 평균 쪽으로 축소되어 분산이 줄어든다.
- **분류**: naive Bayes 스팸 필터는 문서 클래스의 사후확률을 조건부독립 가정 아래 계산한다.
- **역문제와 필터링**: 칼만 필터는 Normal–Normal 갱신을 시간에 따라 반복하는 것이고, 관측 잡음과 상태 전이가 모두 정규일 때 사후분포가 정규로 닫힌다.
- **모형 비교**: 주변가능도는 모형의 복잡도에 자동으로 벌점을 준다(Occam factor). 다만 사전분포에 민감해 실무에서는 교차검증과 함께 본다.

[^1]: A. Gelman, J. Carlin, H. Stern, D. Dunson, A. Vehtari, D. Rubin, *Bayesian Data Analysis*, 3rd ed., http://www.stat.columbia.edu/~gelman/book/

# 연관 문서

## 선수지식

- [Bayes 정리](bayes.md)
- [확률변수](random-variables.md)
- [통계 개관](statistics-overview.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning
