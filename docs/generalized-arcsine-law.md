# 일반화된 아크사인 법칙

# 개요

**일반화된 아크사인 법칙(generalized arcsine law)** 은 무작위 걷기가 양수에 머문 시간의 비율이, 각 시각에 양수일 확률이 $\rho$ 로 수렴할 때 Beta 분포 $\mathrm{Beta}(\rho,1-\rho)$ 로 수렴한다는 정리다. 매일의 변동이 중심 $1$ 인 Cauchy 분포를 따르는 가격은 어느 날이든 시작가보다 높을 확률이 $3/4$ 이다. 그렇다고 백 일 가운데 대략 75 일을 시작가 위에서 보내는 것은 아니고, 위에 있는 날의 비율은 $0$ 근처부터 $1$ 근처까지 넓게 퍼진다.

[아크사인 법칙](arcsine-law.md)은 $\rho=1/2$ 인 경우이고, 이 정리는 그 비율의 분포를 모든 $\rho$ 에서 준다.

# 직관

걸음이 중심 $1$, 척도 $1$ 인 [Cauchy 분포](cauchy-distribution.md)를 따른다고 한다. $n$ 걸음의 합 $S\_n$ 을 $n$ 으로 나눈 것은 다시 같은 Cauchy 분포이므로 모든 $n$ 에서 다음이 성립한다.

$$
\Pr\lbrack S\_n\gt 0\rbrack=\frac12+\frac1\pi\arctan1=\frac34
$$

두 걸음 동안 양수였던 날의 수 $N\_2$ 의 분포는 성질 절의 식으로 $21/32$, $6/32$, $5/32$ 다. 차례로 $N\_2=2,1,0$ 의 확률이다. 날마다 독립으로 $3/4$ 의 확률로 양수라면 $N\_2=1$ 의 확률은 $2\cdot\frac34\cdot\frac14=12/32$ 이어야 한다.

실제로는 그 절반이고, 나머지가 양 끝 $0$ 과 $2$ 로 옮겨 갔다. 한 번 위에 있으면 계속 위에 있기 쉽기 때문이다.

$n$ 을 키우면 이 쏠림이 남아, 양수인 날의 비율의 분포는 양 끝 $0$ 과 $1$ 에서 밀도가 무한대인 Beta 분포가 된다.

# 정의

## 양수 횟수

독립이고 같은 분포를 따르는 걸음의 [무작위 걷기](random-walks.md) $S\_n$ 에서 $N\_n$ 을 $S\_k\gt 0$ 인 $k\in\lbrace1,\dots,n\rbrace$ 의 개수라 한다. 이것을 **양수 횟수(number of positive partial sums)** 라 한다.

## Spitzer 조건

다음 극한이 존재하면 걷기가 **Spitzer 조건(Spitzer's condition)** 을 만족한다고 한다.

$$
\frac1n\sum\_{k=1}^n\Pr\lbrack S\_k\gt 0\rbrack\to\rho
$$

직관 절의 걷기는 모든 $k$ 에서 $\Pr\lbrack S\_k\gt 0\rbrack=3/4$ 이라 $\rho=3/4$ 이다.

## 일반화된 아크사인 분포

$0\lt\rho\lt 1$ 에서 $\mathrm{Beta}(\rho,1-\rho)$ 분포를 **일반화된 아크사인 분포(generalized arcsine distribution)** 라 한다. 밀도는 다음이다.

$$
f\_\rho(x)=\frac{\sin\pi\rho}{\pi}\thinspace x^{\rho-1}(1-x)^{-\rho}\qquad(0\lt x\lt 1)
$$

$\rho=1/2$ 이면 아크사인 분포의 밀도 $1/(\pi\sqrt{x(1-x)})$ 이다.

# 성질

## 양수 횟수의 생성함수

다음 항등식이 성립한다(Sparre Andersen, Spitzer)[^1].

$$
\sum\_{n\ge0}s^nE\lbrack u^{N\_n}\rbrack=\exp\Bigl(\sum\_{n\ge1}\frac{s^n}n\bigl(u\Pr\lbrack S\_n\gt 0\rbrack+\Pr\lbrack S\_n\le0\rbrack\bigr)\Bigr)
$$

[무작위 걷기의 Wiener–Hopf 분해](random-walk-wiener-hopf.md)의 Spitzer–Baxter 항등식을 오름 쪽과 내림 쪽에 쓰고, $N\_n$ 이 처음으로 최댓값에 닿는 시각과 같은 분포라는 Sparre Andersen 의 동치 원리를 쓰면 나온다.

## 모든 시각에서 같은 확률

모든 $n$ 에서 $\Pr\lbrack S\_n\gt 0\rbrack=\rho$ 이면 우변은 $(1-s)^{-u\rho}(1-s)^{-(1-\rho)}$ 이다. 두 인수를 이항급수로 펼치면 다음이 나온다.

$$
\Pr\lbrack N\_n=k\rbrack=\binom{k+\rho-1}{k}\binom{n-k-\rho}{n-k}
$$

$n=2$, $\rho=3/4$ 이면 $k=2,1,0$ 에서 $\frac{\rho(\rho+1)}2=\frac{21}{32}$, $\rho(1-\rho)=\frac6{32}$, $\frac{(1-\rho)(2-\rho)}2=\frac5{32}$ 다. 이것이 직관 절의 값이다. $\rho=1/2$ 이면 [Sparre Andersen 정리](sparre-andersen-theorem.md)의 $u\_{2k}u\_{2n-2k}$ 다.

## 극한 정리

$N\_n/n$ 이 어떤 분포로 수렴하는 것은 Spitzer 조건과 동치이고, 그때 극한은 $0\lt\rho\lt 1$ 이면 $\mathrm{Beta}(\rho,1-\rho)$ 다. $\rho=0$ 이면 $0$, $\rho=1$ 이면 $1$ 에 모인 분포다(Lamperti 1958)[^2].

모든 $n$ 에서 확률이 $\rho$ 인 경우는 앞 절의 식에 Stirling 공식(Stirling's formula)을 쓰면 $\Pr\lbrack N\_n=k\rbrack\approx f\_\rho(k/n)/n$ 이 나온다.

# 활용

- 안정 분포의 걷기. [안정 분포](stable-distributions.md)를 따르는 걸음은 $\Pr\lbrack S\_n\gt 0\rbrack$ 가 $n$ 과 무관하므로 Spitzer 조건을 만족하고, $\rho$ 는 안정 지수와 비대칭 계수로 정해진다.
- [Lévy 과정](levy-processes.md). 안정 Lévy 과정이 $\lbrack0,1\rbrack$ 에서 양수인 시간의 길이는 $\mathrm{Beta}(\rho,1-\rho)$ 를 따른다.
- 평균이 $0$ 이고 분산이 유한한 걸음은 [중심극한정리](central-limit-theorem.md)로 $\rho=1/2$ 이고, 극한은 아크사인 분포다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., Wiley, 1971, Ch. XII.
[^2]: J. Lamperti, "An occupation time theorem for a class of stochastic processes", *Transactions of the American Mathematical Society* 88 (1958), 380–387.

# 연관 문서

## 선수지식

- [무작위 걷기의 Wiener–Hopf 분해](random-walk-wiener-hopf.md)
- [아크사인 법칙](arcsine-law.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics
