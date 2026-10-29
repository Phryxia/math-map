# 이항분포

# 개요

**이항분포(binomial distribution)** 는 성공 확률이 같은 시행을 서로 독립으로 정해진 횟수만큼 했을 때 성공한 횟수의 분포다. 동전을 $10$ 번 던져 앞면이 정확히 $7$ 번 나올 확률을 구하려면, 앞면이 나오는 $7$ 자리를 고르는 방법이 몇 가지인지 세어야 한다. 이항분포는 그 방법의 수 $\binom{10}{7}=120$ 에 한 경우의 확률 $2^{-10}$ 을 곱해 $120/1024$ 를 얻는 계산을, 시행 횟수와 성공 확률이 무엇이든 같은 식으로 한다.

# 직관

주사위를 $4$ 번 던져 $6$ 이 정확히 $2$ 번 나올 확률을 구한다. $6$ 이 첫째와 둘째 던지기에서 나오고 나머지에서 나오지 않을 확률은 던지기가 서로 독립이므로 $\frac16\cdot\frac16\cdot\frac56\cdot\frac56=\frac{25}{1296}$ 이다.

$6$ 이 나오는 두 자리를 다르게 골라도 곱하는 수는 순서만 바뀌므로 확률은 똑같이 $\frac{25}{1296}$ 이다. 네 자리에서 두 자리를 고르는 방법은 $\binom42=6$ 가지이고 이 경우들은 서로 겹치지 않으므로, 확률은 $6\cdot\frac{25}{1296}=\frac{150}{1296}\approx 0.116$ 이다.

같은 계산을 $6$ 이 나온 횟수 $0,1,2,3,4$ 마다 하면 분자가 $625$, $500$, $150$, $20$, $1$ 이다. 다섯을 더하면 $1296$ 이고, 이는 $\left(\frac16+\frac56\right)^4=1$ 을 [셈의 기본 원리](counting-principles.md)의 이항정리(binomial theorem)로 펼친 것과 같다.

# 정의

$n$ 이 양의 정수이고 $0\le p\le 1$ 일 때, $\lbrace 0,1,\dots,n\rbrace$ 에 값을 갖는 [확률변수](random-variables.md) $X$ 가 다음을 만족하면 $X$ 는 모수 $n$, $p$ 인 이항분포를 따른다고 하고 $X\sim\mathrm{B}(n,p)$ 로 쓴다.

$$
P(X=k)=\binom nk p^k(1-p)^{n-k},\qquad k=0,1,\dots,n
$$

$n=1$ 인 경우를 **Bernoulli 분포(Bernoulli distribution)** 라 한다. 성공 확률이 $p$ 인 Bernoulli 확률변수 $X_1,\dots,X_n$ 이 독립이라 하자. 합이 $k$ 인 경우는 $1$ 이 놓이는 $k$ 자리를 고르는 $\binom nk$ 가지 경우로 나뉘고 각 경우의 확률이 $p^k(1-p)^{n-k}$ 이므로, 합 $X_1+\cdots+X_n$ 은 $\mathrm{B}(n,p)$ 를 따른다.[^1]

# 성질

## 평균과 분산

**정리.** $X\sim\mathrm{B}(n,p)$ 이면 $\mathbb E\lbrack X\rbrack=np$ 이고 $\mathrm{Var}(X)=np(1-p)$ 다.

증명의 요지. $X=X_1+\cdots+X_n$ 으로 쓴다. $\mathbb E\lbrack X_i\rbrack=p$ 이므로 기댓값의 선형성으로 평균이 $np$ 다. $X_i^2=X_i$ 이므로 $\mathrm{Var}(X_i)=p-p^2$ 이고, 독립인 확률변수의 분산은 더해지므로 분산이 $np(1-p)$ 다.

## 합의 분포

**정리.** $X\sim\mathrm{B}(n,p)$ 와 $Y\sim\mathrm{B}(m,p)$ 가 독립이면 $X+Y\sim\mathrm{B}(n+m,p)$ 다.

증명의 요지. $X$ 를 Bernoulli 확률변수 $n$ 개의 합으로, $Y$ 를 그와 독립인 $m$ 개의 합으로 쓰면 $X+Y$ 는 독립인 $n+m$ 개의 합이다. 확률을 직접 비교하면 Vandermonde 항등식(Vandermonde's identity) $\sum_j\binom nj\binom m{k-j}=\binom{n+m}k$ 이 된다.

## 최빈값

**정리.** $0\lt p\lt 1$ 이면 $P(X=k)$ 는 $k\le(n+1)p$ 에서 증가하고 그 뒤에서 감소한다. 따라서 가장 큰 확률은 $k=\lfloor(n+1)p\rfloor$ 에서 나오고, $(n+1)p$ 가 정수이면 $k=(n+1)p$ 와 $k=(n+1)p-1$ 두 곳에서 같다.[^1]

증명의 요지. 이웃한 두 확률의 비는 다음과 같다.

$$
\frac{P(X=k)}{P(X=k-1)}=\frac{(n-k+1)p}{k(1-p)}
$$

이 비가 $1$ 이상인 것은 $(n-k+1)p\ge k(1-p)$, 곧 $k\le(n+1)p$ 와 동치다.

## 꼬리 확률

$X$ 가 평균 $np$ 에서 멀리 벗어날 확률은 지수적으로 작다. [집중부등식](concentration-inequalities.md)의 Chernoff 한계(Chernoff bound)를 $X_1,\dots,X_n$ 에 적용하면 $0\lt\delta\le 1$ 에서 다음이 나온다.[^2]

$$
P\bigl(X\ge(1+\delta)np\bigr)\le\exp\left(-\frac{\delta^2np}{3}\right),\qquad P\bigl(X\le(1-\delta)np\bigr)\le\exp\left(-\frac{\delta^2np}{2}\right)
$$

## 두 극한

$n$ 이 커질 때 이항분포는 $p$ 를 어떻게 두느냐에 따라 두 분포에 가까워진다.

- $np\to\lambda$ 로 $p$ 를 줄이면 $P(X=k)\to e^{-\lambda}\lambda^k/k!$ 이고, 극한은 [Poisson 분포](poisson-distribution.md)다.
- $p$ 를 고정하면 $(X-np)/\sqrt{np(1-p)}$ 의 분포가 표준 [정규분포](normal-distribution.md)로 수렴한다. 이것이 de Moivre–Laplace 정리(de Moivre–Laplace theorem)이고, [중심극한정리](central-limit-theorem.md)를 Bernoulli 확률변수의 합에 적용한 경우다.

# 활용

- [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md) $G(n,p)$ 에서 정점 하나의 차수는 나머지 $n-1$ 개 정점과의 간선이 각각 확률 $p$ 로 독립으로 있으므로 $\mathrm{B}(n-1,p)$ 를 따른다.
- [신뢰구간](confidence-intervals.md)에서 표본 $n$ 개 가운데 중앙값보다 작은 것의 개수는 $\mathrm{B}(n,1/2)$ 를 따르고, 이것으로 분포 가정 없이 중앙값의 구간을 만든다.
- [Laplace 계승 규칙](rule-of-succession.md)은 성공 확률 $p$ 를 모르는 이항분포에서 $p$ 에 균등 사전분포를 두고 다음 시행의 성공 확률을 구한다.
- [Poisson 과정](poisson-process.md)에서 길이 $t$ 인 구간을 $n$ 칸으로 나누고 칸마다 확률 $\lambda t/n$ 로 사건이 일어난다고 두면 사건 수는 $\mathrm{B}(n,\lambda t/n)$ 을 따르고, $n\to\infty$ 에서 구간의 사건 수가 Poisson 분포가 된다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. I, 3rd ed., Wiley (1968), Chapter VI. 이항분포의 정의, 최빈값, Poisson 근사.
[^2]: M. Mitzenmacher, E. Upfal, *Probability and Computing*, 2nd ed., Cambridge University Press (2017), §4.2. 독립 Bernoulli 합의 Chernoff 한계.

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [셈의 기본 원리](counting-principles.md)

## 더 알아보기

- [기하분포](geometric-distribution.md)
- [Poisson 분포](poisson-distribution.md)

#probability #statistics #combinatorics
