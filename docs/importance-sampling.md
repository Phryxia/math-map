# 중요도 표집

# 개요

**중요도 표집(importance sampling)** 은 기댓값을 구하려는 분포 대신 다른 분포에서 표본을 뽑고, 두 밀도의 비를 무게로 곱해 평균을 내는 방법이다. 표준[정규분포](normal-distribution.md)를 따르는 값이 $4$ 를 넘을 확률은 약 $0.00003$ 이라, 표본 10만 개를 뽑아도 $4$ 를 넘는 것이 평균 세 개뿐이다. 중요도 표집은 $4$ 근처에 몰린 분포에서 표본을 뽑아 대부분의 표본이 계산에 쓰이게 하고, 그렇게 생긴 치우침을 무게로 바로잡는다.

# 직관

$X$ 가 표준정규분포를 따를 때 $P(X\gt 4)$ 를 표본으로 구한다. 표준정규분포에서 $N=10^5$ 개를 뽑아 $4$ 를 넘는 비율을 세면, 넘는 개수가 평균 $3.17$ 개라 추정의 표준편차가 추정값의 약 56% 다. 셋이 나올지 다섯이 나올지에 따라 답이 크게 달라진다.

대신 평균이 $4$ 이고 분산이 $1$ 인 정규분포에서 뽑으면 표본의 절반이 $4$ 를 넘는다. 이 분포는 $4$ 근처를 실제보다 자주 뽑으므로, 표본 $x$ 마다 두 밀도의 비

$$
\frac{e^{-x^2/2}}{e^{-(x-4)^2/2}}=e^{8-4x}
$$

를 곱해 그 치우침을 바로잡는다. $4$ 를 넘는 표본의 무게를 모두 더해 $N$ 으로 나눈 값의 기댓값은 $P(X\gt 4)$ 와 같고, $N=10^5$ 에서 표준편차는 추정값의 약 0.7% 다.

# 정의

## 중요도 표집 추정량

$p$ 는 기댓값을 구하려는 분포의 [확률밀도](probability-density.md)이고, $q$ 는 $p(x)\varphi(x)\ne 0$ 인 곳에서 양수인 밀도다. $q$ 를 **제안분포(proposal distribution)**, $w(x)=p(x)/q(x)$ 를 **중요도 무게(importance weight)** 라 한다. 다음 등식이 성립한다.

$$
E_p\lbrack\varphi(X)\rbrack=\int\varphi(x)p(x)\thinspace dx=\int\varphi(x)\frac{p(x)}{q(x)}q(x)\thinspace dx=E_q\lbrack\varphi(X)w(X)\rbrack
$$

$X_1,\dots,X_N$ 을 $q$ 에서 독립으로 뽑아

$$
\hat\mu_N=\frac1N\sum_{i=1}^N\varphi(X_i)w(X_i)
$$

로 $E_p\lbrack\varphi(X)\rbrack$ 를 추정하는 방법을 **중요도 표집** 이라 한다. 직관 절의 예는 $p$ 가 표준정규 밀도, $q$ 가 평균 $4$ 인 정규 밀도, $\varphi(x)$ 가 $x\gt 4$ 에서 $1$ 이고 나머지에서 $0$ 인 경우다.

## 자기 정규화 추정량

$p$ 를 상수배까지만 알아서 $\tilde p=cp$ 만 계산할 수 있으면 $\tilde w=\tilde p/q$ 로 두고 다음으로 추정한다.

$$
\tilde\mu_N=\frac{\sum_{i=1}^N\varphi(X_i)\tilde w(X_i)}{\sum_{i=1}^N\tilde w(X_i)}
$$

이것을 **자기 정규화 중요도 표집(self-normalized importance sampling)** 이라 한다. 분모와 분자에서 $c$ 가 약분된다. [Bayes 추론](bayesian-inference.md)의 사후분포가 이 꼴이다.

# 성질

## 불편성과 일치성

$E_q\lbrack\hat\mu_N\rbrack=E_p\lbrack\varphi(X)\rbrack$ 이므로 $\hat\mu_N$ 은 불편 추정량이다. $E_q\lbrack\vert\varphi(X)w(X)\vert\rbrack\lt\infty$ 이면 [큰 수의 법칙](law-of-large-numbers.md)에 따라 $\hat\mu_N$ 과 $\tilde\mu_N$ 이 모두 거의 확실히 $E_p\lbrack\varphi(X)\rbrack$ 로 수렴한다. $\tilde\mu_N$ 은 분자와 분모의 비라서 유한한 $N$ 에서는 일반적으로 편향이 있다.

## 분산과 최적 제안분포

$\hat\mu_N$ 의 분산은 다음이다.

$$
\mathrm{Var}(\hat\mu_N)=\frac1N\Bigl(\int\frac{\varphi(x)^2p(x)^2}{q(x)}\thinspace dx-\mu^2\Bigr),\qquad \mu=E_p\lbrack\varphi(X)\rbrack
$$

$\varphi\ge 0$ 이고 $\mu\gt 0$ 이면 $q^\ast(x)=\varphi(x)p(x)/\mu$ 에서 적분이 $\mu^2$ 이 되어 분산이 $0$ 이다. $q^\ast$ 를 만들려면 구하려는 $\mu$ 를 알아야 하므로 직접 쓸 수는 없지만, $\varphi p$ 의 모양을 닮은 $q$ 일수록 분산이 작다. 직관 절의 평균 $4$ 인 정규분포는 $x\gt 4$ 에 몰린 $q^\ast$ 와 봉우리 위치가 가깝다.

## 꼬리 조건

$q$ 의 꼬리가 $p$ 보다 얇으면 분산이 무한일 수 있다. $p$ 가 표준정규이고 $q$ 가 평균 $0$, 분산 $\sigma^2$ 인 정규분포이면 $p^2/q$ 는 $e^{-x^2(1-1/(2\sigma^2))}$ 에 비례하고, 이것은 $\sigma^2\gt 1/2$ 일 때만 적분 가능하다. $\sigma^2\le 1/2$ 이면 $\varphi=1$ 에서도 $\mathrm{Var}(\hat\mu_N)=\infty$ 이고, 추정값은 드물게 뽑히는 큰 무게 하나에 좌우된다.

## 유효 표본 크기

정규화한 무게 $\bar w_i=\tilde w(X_i)/\sum_j\tilde w(X_j)$ 로

$$
N\_{\mathrm{eff}}=\Bigl(\sum_{i=1}^N\bar w_i^2\Bigr)^{-1}
$$

을 **유효 표본 크기(effective sample size)** 라 한다. 무게가 모두 같으면 $N$ 이고 한 표본에 다 몰리면 $1$ 이다. 제안분포가 목표분포와 얼마나 어긋났는지를 표본만으로 진단하는 데 쓴다.

# 활용

- [입자 필터](particle-filter.md)는 시점마다 전이분포를 제안분포로 쓰는 중요도 표집에 재표집을 더한 것이다. 관측밀도가 중요도 무게가 된다.
- [측도변환](change-of-measure.md)에서 [Radon–Nikodym 정리](radon-nikodym.md)가 주는 밀도가 중요도 무게다. 연속시간 확률과정에서는 [Girsanov 정리](girsanov.md)의 밀도가 같은 역할을 한다.
- 드문 사건의 확률. [대편차 원리](large-deviations.md)가 주는 지수 경사(exponential tilting) 분포를 제안분포로 쓰면, 사건이 드물어져도 상대오차가 느리게 커진다.
- 강화학습의 정책 밖 평가(off-policy evaluation). 다른 정책으로 모은 궤적에 두 정책의 확률비를 무게로 곱해 평가할 정책의 기대 보상을 추정한다.

# 연관 문서

## 선수지식

- [확률밀도](probability-density.md)
- [큰 수의 법칙](law-of-large-numbers.md)

## 더 알아보기

- [입자 필터](particle-filter.md)

#probability #statistics #computation
