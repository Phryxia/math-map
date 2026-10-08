# 큰 체

# 개요

큰 체는 거르는 소수마다 제거하는 잉여류의 개수가 소수의 크기에 비례할 때 쓰는 부등식이다. [체 방법](sieve-methods.md)의 Brun 절단과 Selberg 가중은 소수마다 한두 류를 거르는 문제에 맞춰져 있어, 소수마다 절반을 거르는 문제에서는 주항이 지수적으로 작아져 쓸 수 없다.

큰 체는 걸러낸 조건을 지수합으로 바꿔 한 번에 다룬다. 서로 떨어진 점에서 재는 지수합의 제곱합에 대한 부등식이 그 내용이고, 등차수열의 소수 분포를 평균으로 주는 Bombieri–Vinogradov 정리가 이 부등식에서 나온다.

# 직관

$N$ 이하의 양의 정수 가운데, $z$ 보다 작은 모든 홀수 소수 $p$ 에서 $p$ 를 법으로 제곱잉여인 것이 몇 개인지 센다.

체 방법을 그대로 쓰면 소수 $p$ 마다 걸러내는 잉여류가 비잉여 $(p-1)/2$ 개다. 주항은

$$
N\prod\_{2\lt p\lt z}\Bigl(1-\frac{p-1}{2p}\Bigr)
$$

이고 각 인자가 $1/2$ 에 가까우므로 전체가 $N$ 의 $2^{-\pi(z)}$ 배 정도다. 체의 차원을 재는 합 $\sum\_{p\lt z}w(p)\log p/p$ 는 $w(p)/p$ 가 $1/2$ 에 가까워 $\log z$ 의 상수배가 아니라 $z$ 의 상수배로 커진다. 차원 조건이 깨져 주항 공식을 쓸 수 없다.

막힌 까닭은 조건을 소수마다 하나씩 곱한 것이다. 소수마다 절반이 사라지면 남는 비율이 소수의 개수에 지수적으로 줄고, 포함배제의 오차를 그보다 작게 만들 길이 없다. 그래서 조건을 하나씩 곱하지 않고 전부를 한 번에 쓴다.

남은 수의 지시수열을 $a\_n$ 이라 하고 $S(\alpha)=\sum\_{n\le N}a\_n e(n\alpha)$ 로 두면, $n$ 이 법 $p$ 에서 절반의 류에만 든다는 조건은 분모가 $p$ 인 유리수 점에서 $\vert S\vert$ 가 크다는 뜻이 된다. 분모가 $Q$ 이하인 서로 다른 유리수 두 개는 $1/Q^2$ 이상 떨어져 있으므로, 그 점들에서 잰 $\vert S\vert^2$ 의 합이 $(N+Q^2)\sum\vert a\_n\vert^2$ 이하다. 왼쪽을 아래에서 누르면 남은 수의 개수에 상한이 나온다.

# 정의

## 지수합과 간격

$e(\alpha)=e^{2\pi i\alpha}$ 로 쓰고, 복소수열 $a\_1,\dots,a\_N$ 에 대해

$$
S(\alpha)=\sum\_{n\le N}a\_n e(n\alpha)
$$

로 둔다. 실수 $\alpha\_1,\dots,\alpha\_R$ 가 $\delta$ **떨어져 있다**는 것은 $r\ne s$ 에서 $\alpha\_r-\alpha\_s$ 가 정수와의 거리로 $\delta$ 이상 떨어져 있다는 뜻이다.

## 거르는 조건

각 소수 $p\le Q$ 마다 법 $p$ 의 잉여류 가운데 $\omega(p)$ 개를 금지한다. $N$ 이하의 양의 정수 가운데 금지된 류에 하나도 들지 않는 것의 개수를

$$
Z=\char35{}\lbrace n\le N\thinspace :\thinspace p\le Q\text{ 인 모든 }p\text{ 에서 }n\bmod p\text{ 가 허용된 류}\rbrace
$$

라 한다. $\omega(p)$ 가 $p$ 에 비례해 커지는 경우를 **큰 체**, $\omega(p)$ 가 유계인 경우를 작은 체라 한다.

# 성질

## 해석적 꼴

**정리.** $\alpha\_1,\dots,\alpha\_R$ 가 $\delta$ 떨어져 있으면

$$
\sum\_{r\le R}\vert S(\alpha\_r)\vert^2\le(N+\delta^{-1})\sum\_{n\le N}\vert a\_n\vert^2
$$

이다.[^1]

증명의 요지. 쌍대 꼴로 바꿔 $\sum\_n\vert\sum\_r c\_r e(n\alpha\_r)\vert^2$ 의 상한을 보인다. 지수합을 매끄러운 창함수로 눌러 쓰면 교차항이 $\alpha\_r-\alpha\_s$ 의 간격에 반비례하는 양으로 눌리고, $\delta$ 떨어져 있다는 조건이 그 합을 $\delta^{-1}$ 로 묶는다. 계수 $N+\delta^{-1}$ 는 Montgomery 와 Vaughan 이 얻은 것이고, 두 항 모두 상수를 더 줄일 수 없다.

## 산술적 꼴

**정리.** 위의 $Z$ 에 대해

$$
Z\le\frac{N+Q^2}{L},\qquad L=\sum\_{q\le Q}\mu(q)^2\prod\_{p\mid q}\frac{\omega(p)}{p-\omega(p)}
$$

이다.[^2]

증명의 요지. $a\_n$ 을 남은 수의 지시함수로 두면 $\sum\vert a\_n\vert^2=Z$ 다. 분모가 $q\le Q$ 인 기약분수 $a/q$ 전체는 $Q^{-2}$ 떨어져 있으므로 해석적 꼴을 적용한다. 금지된 류를 피한다는 조건을 법 $q$ 의 가법지표로 펼치면 $\sum\_{a}\vert S(a/q)\vert^2$ 가 아래에서 $Z^2$ 의 상수배로 눌리고, 그 상수를 $q$ 에 걸쳐 더한 것이 $L$ 이다.

$\omega(p)$ 가 $p$ 에 비례하면 각 인자가 $1$ 에 가까워 $L$ 이 $Q$ 의 상수배가 된다. $Q=N^{1/2}$ 를 넣으면 $Z\ll N^{1/2}$ 다. 직관 절의 제곱잉여 문제가 이 경우이고, 체 방법의 주항이 주지 못한 상한이 나온다.

## Bombieri–Vinogradov 정리

von Mangoldt 함수 $\Lambda(n)$ 을 $n=p^k$ 에서 $\log p$ , 그 밖에서 $0$ 이라 하고

$$
\psi(x;q,a)=\sum\_{n\le x,\thinspace n\equiv a\bmod q}\Lambda(n)
$$

이라 한다. 등차수열에 소수가 고르게 퍼지면 이 값이 $x/\varphi(q)$ 에 가깝다.

**정리.** 임의의 $A\gt 0$ 에 대해 $B$ 가 있어 $Q=x^{1/2}(\log x)^{-B}$ 에서

$$
\sum\_{q\le Q}\max\_{\gcd(a,q)=1}\Bigl\vert\psi(x;q,a)-\frac{x}{\varphi(q)}\Bigr\vert\ll\frac{x}{(\log x)^A}
$$

이 성립한다.[^3]

증명의 요지. Vaughan 항등식으로 $\Lambda$ 를 두 수열의 곱에 걸친 쌍선형합 몇 개로 분해한다. 각 쌍선형합을 [Dirichlet L 함수](dirichlet-l-functions.md)의 지표합으로 쓰고 큰 체의 해석적 꼴을 적용하면, 법 $q$ 를 하나씩 보지 않고 평균으로 묶은 추정이 나온다. $Q$ 가 $x^{1/2}$ 에서 멈추는 것은 쌍선형합의 두 변수 길이의 곱이 $x$ 로 묶여 있기 때문이다.

하나의 $q$ 에서는 일반화 Riemann 가설(generalized Riemann hypothesis, GRH)이 주는 세기이고, 이 정리는 그것을 $q$ 의 평균에서 무조건적으로 준다.

## Elliott–Halberstam 추측

$0\lt\theta\lt 1$ 에 대해, 위 부등식이 $Q=x^\theta$ 에서 성립한다는 주장을 **Elliott–Halberstam 추측**이라 한다. $\theta=1/2$ 인 경우가 Bombieri–Vinogradov 정리다.

# 활용

- **소수 간격.** Goldston–Pintz–Yıldırım 의 가중에 Bombieri–Vinogradov 정리를 넣으면 소수 쌍의 간격에 상한이 나온다. Zhang 은 법을 매끄러운 수로 제한한 형태를 증명해 $\theta$ 를 $1/2$ 보다 조금 넘겼다.[^4]
- **최소 비잉여.** 산술적 꼴에 $\omega(p)=(p-1)/2$ 를 넣으면, 법 $p$ 의 비잉여 가운데 가장 작은 것의 상한이 나온다. 모든 작은 수가 잉여이면 남은 수의 개수가 상한을 넘기 때문이다.
- **등차수열의 소수 개수.** [소수 정리](prime-number-theorem.md)의 등차수열 판본은 법을 하나 고정하면 $q\le(\log x)^A$ 범위에서만 유효하다. 평균으로 바꾸면 $q$ 를 $x^{1/2}$ 근처까지 키울 수 있어, 법을 변수로 쓰는 논증에 이 정리를 쓴다.
- **다항식 값의 제곱.** 정수열이 모든 법에서 제곱잉여라는 조건을 큰 체로 누르면, 제곱이 되는 값의 개수에 상한이 나온다. 조건이 소수마다 절반을 거르는 꼴이어서 작은 체로는 다루지 못한다.

[^1]: H. L. Montgomery, R. C. Vaughan, *The large sieve*, Mathematika **20** (1973), 119–134. 계수 $N+\delta^{-1}$ 와 그 최적성이 이 논문의 결과다. 원형은 Yu. V. Linnik, *The large sieve*, C. R. Acad. Sci. URSS **30** (1941), 292–294 다.

[^2]: H. Iwaniec, E. Kowalski, *Analytic Number Theory*, American Mathematical Society, 2004, 7 장. 해석적 꼴에서 산술적 꼴을 끌어내는 계산과 $L$ 의 정의가 이 장에 있다.

[^3]: E. Bombieri, *On the large sieve*, Mathematika **12** (1965), 201–225. A. I. Vinogradov, *The density hypothesis for Dirichlet L-series*, Izv. Akad. Nauk SSSR **29** (1965), 903–934. Vaughan 항등식을 쓴 현대적 증명은 H. Davenport, *Multiplicative Number Theory*, 3판, Springer, 2000, 28 장이다.

[^4]: Y. Zhang, *Bounded gaps between primes*, Ann. of Math. **179** (2014), 1121–1174. 매끄러운 법으로 제한한 Bombieri–Vinogradov 형태가 3 절과 4 절에 있다.

# 연관 문서

## 선수지식

- [Dirichlet L 함수](dirichlet-l-functions.md)
- [체 방법](sieve-methods.md)

## 더 알아보기

- [소수 간격](prime-gaps.md)
- [Chen 정리](chen-theorem.md)

#number_theory #analysis #combinatorics
