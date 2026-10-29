# Poisson 분포

# 개요

**Poisson 분포(Poisson distribution)** 는 드물게 일어나는 일이 정해진 범위 안에서 몇 번 일어나는지를 나타내는 분포다. 책 한 쪽에 글자가 $2000$ 개 있고 글자마다 오타일 확률이 $1/1000$ 이면, 한 쪽의 오타 개수는 $2000$ 번 시행의 이항분포를 따르지만 이항계수 $\binom{2000}{k}$ 를 계산하기는 번거롭다. 시행 횟수가 많고 성공 확률이 작으면 이 분포는 평균 $\lambda=2$ 하나로 정해지는 식 $e^{-\lambda}\lambda^k/k!$ 에 가까워지고, 그 식으로 확률을 계산한다.

# 직관

오타가 하나도 없을 확률은 $(1-0.001)^{2000}$ 이다. $\log(1-x)$ 가 작은 $x$ 에서 $-x$ 에 가까우므로 이 값은 $e^{-2000\times 0.001}=e^{-2}\approx 0.135$ 에 가깝다.

오타가 $k$ 개일 확률을 $k-1$ 개일 확률로 나누면 $\frac{(2000-k+1)\times 0.001}{k\times 0.999}$ 이다. $k$ 가 $2000$ 에 비해 작으면 이 비는 $2/k$ 에 가깝다. 그래서 $k=0$ 에서 시작해 $2/1$, $2/2$, $2/3$ 을 차례로 곱하면 오타가 $k$ 개일 확률은 $e^{-2}\cdot 2^k/k!$ 에 가깝다. $k=1,2,3$ 에서 약 $0.271$, $0.271$, $0.180$ 이다.

계산에 남은 수는 글자 수와 오타 확률의 곱 $2$ 뿐이다. 글자가 $20000$ 개이고 오타 확률이 $1/10000$ 이어도 같은 값이 나온다.

# 정의

$\lambda\gt 0$ 에 대해 $0,1,2,\dots$ 에 값을 갖는 [확률변수](random-variables.md) $X$ 가 다음을 만족하면 $X$ 는 모수 $\lambda$ 인 Poisson 분포를 따른다고 하고 $X\sim\mathrm{Po}(\lambda)$ 로 쓴다.

$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\qquad k=0,1,2,\dots
$$

[지수함수](exponential-function.md)의 급수 $e^\lambda=\sum_{k\ge 0}\lambda^k/k!$ 에서 확률의 합이 $1$ 이다.

# 성질

## 평균과 분산

**정리.** $X\sim\mathrm{Po}(\lambda)$ 이면 $\mathbb E[X]=\mathrm{Var}(X)=\lambda$ 다.

증명의 요지. $k/k!=1/(k-1)!$ 이므로 첨자를 하나 당기면 다음이 나온다.

$$
\mathbb E[X]=\sum_{k\ge 1}e^{-\lambda}\frac{\lambda^k}{(k-1)!}=\lambda,\qquad \mathbb E[X(X-1)]=\sum_{k\ge 2}e^{-\lambda}\frac{\lambda^k}{(k-2)!}=\lambda^2
$$

$\mathrm{Var}(X)=\mathbb E[X(X-1)]+\mathbb E[X]-\mathbb E[X]^2=\lambda^2+\lambda-\lambda^2=\lambda$ 다.

## 독립합

**정리.** $X\sim\mathrm{Po}(\lambda)$ 와 $Y\sim\mathrm{Po}(\mu)$ 가 독립이면 $X+Y\sim\mathrm{Po}(\lambda+\mu)$ 다.

증명의 요지. $X+Y=n$ 인 경우를 $X=k$ 로 나누고 이항정리를 쓴다.

$$
P(X+Y=n)=\sum_{k=0}^{n}e^{-\lambda}\frac{\lambda^k}{k!}e^{-\mu}\frac{\mu^{n-k}}{(n-k)!}=\frac{e^{-(\lambda+\mu)}}{n!}\sum_{k=0}^{n}\binom nk\lambda^k\mu^{n-k}=e^{-(\lambda+\mu)}\frac{(\lambda+\mu)^n}{n!}
$$

## Poisson 극한정리

**정리.** $np_n\to\lambda$ 이고 $X_n$ 이 $n$ 번 시행, 성공 확률 $p_n$ 인 이항분포를 따르면 모든 $k$ 에서 $P(X_n=k)\to e^{-\lambda}\lambda^k/k!$ 이다. 이것을 **Poisson 극한정리(Poisson limit theorem)** 라 한다.

증명의 요지. 이항분포의 확률을 세 인수로 나눈다.

$$
\binom nk p_n^k(1-p_n)^{n-k}=\frac{n(n-1)\cdots(n-k+1)}{n^k}\cdot\frac{(np_n)^k}{k!}\cdot(1-p_n)^{n-k}
$$

$k$ 가 고정되어 있으므로 첫 인수는 $1$ 로, 둘째는 $\lambda^k/k!$ 로 가고, 셋째는 직관 절의 계산대로 $e^{-\lambda}$ 로 간다.

## Le Cam 부등식

성공 확률이 시행마다 달라도 근사가 성립하고, 오차의 크기가 주어진다.

**정리.** $X_1,\dots,X_n$ 이 독립이고 $P(X_i=1)=p_i$, $P(X_i=0)=1-p_i$ 이면, $S=X_1+\cdots+X_n$ 과 $\lambda=p_1+\cdots+p_n$ 에 대해 다음이 성립한다. 이것을 **Le Cam 부등식(Le Cam's inequality)** 이라 한다.[^1]

$$
\sum_{k\ge 0}\left\lvert P(S=k)-e^{-\lambda}\frac{\lambda^k}{k!}\right\rvert\lt 2\sum_{i=1}^{n}p_i^2
$$

좌변은 두 분포의 [전변동거리](total-variation-distance.md)의 두 배다. 직관 절의 예에서 우변은 $2\times 2000\times 0.001^2=0.004$ 이므로 각 확률의 오차가 $0.004$ 보다 작다.

# 활용

- [Poisson 과정](poisson-process.md)에서 길이 $t$ 인 구간의 사건 수는 $\mathrm{Po}(\lambda t)$ 를 따르고, 겹치지 않는 구간의 사건 수는 독립이다.
- [Stein 방법](stein-method.md)의 Chen–Stein 판본은 약하게 의존하는 희귀 사건들의 개수를 Poisson 분포로 근사하고 전변동거리로 오차를 준다.
- [쿠폰 수집가 문제](coupon-collector.md)에서 아직 모으지 못한 종류의 개수가 Poisson 분포로 근사된다.
- [Bell 수](bell-numbers.md) $B_n$ 은 $\mathrm{Po}(1)$ 의 $n$ 차 적률(moment) $\mathbb E\lbrack X^n\rbrack$ 이고, 이것이 Dobinski 공식이다.
- [일반화선형모형](generalized-linear-models.md)의 Poisson 회귀는 개수 자료를 $\mathrm{Po}(\lambda)$ 로 놓고 $\log\lambda$ 를 설명변수의 일차식으로 둔다.

[^1]: Lucien Le Cam, "An approximation theorem for the Poisson binomial distribution", *Pacific Journal of Mathematics* 10(4), 1960, pp. 1181–1197.

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [지수함수](exponential-function.md)

## 더 알아보기

- [Poisson 과정](poisson-process.md)

#probability #statistics #combinatorics
