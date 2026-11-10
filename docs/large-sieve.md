# 큰 체

# 개요

**큰 체(large sieve)** 는 소수마다 나머지류를 많이 걸러낼 때 남는 정수의 개수에 상한을 주는 부등식이다. $N$ 이하의 양의 정수 가운데 $z$ 보다 작은 모든 홀수 소수 $p$ 에서 $p$ 를 법으로 제곱잉여인 것을 세면, 소수마다 나머지류의 절반쯤이 걸러지므로 소수마다 한두 류를 거르는 [체 방법](sieve-methods.md)으로는 개수가 나오지 않는다. 큰 체는 거르는 조건을 지수합으로 바꾸고, 서로 떨어진 점에서 잰 지수합의 제곱합을 한꺼번에 묶어 남는 개수의 상한을 구한다.

# 직관

$N$ 이하의 양의 정수 가운데, $z$ 보다 작은 모든 홀수 소수 $p$ 에서 $p$ 를 법으로 제곱잉여(quadratic residue)인 것이 몇 개인지 센다.

체 방법을 그대로 쓰면 소수 $p$ 마다 걸러내는 나머지류가 비잉여 $(p-1)/2$ 개다. 남는 개수의 주항은

$$
N\prod\_{2\lt p\lt z}\Bigl(1-\frac{p-1}{2p}\Bigr)
$$

이고 각 인자가 $1/2$ 에 가까우므로 전체가 $N$ 의 $2^{-\pi(z)}$ 배 정도다. 체 방법의 주항 공식은 소수마다 거르는 비율에 $\log p$ 를 곱해 더한 합이 $\log z$ 의 상수배일 때만 오차항보다 크다. 여기서는 비율이 $1/2$ 에 가까워 그 합이 $z$ 의 상수배로 자라므로 주항 공식을 쓸 수 없다.

막힌 까닭은 조건을 소수마다 하나씩 곱한 것이다. 소수마다 절반이 사라지면 남는 비율이 소수의 개수에 지수적으로 줄고, 포함배제의 오차를 그보다 작게 만들 수 없다. 그래서 조건을 하나씩 곱하지 않고 전부를 한 번에 쓴다.

남은 수에서 $1$, 나머지에서 $0$ 인 수열을 $a\_n$ 이라 하고 $S(\alpha)=\sum\_{n\le N}a\_n e^{2\pi in\alpha}$ 로 두면, $n$ 이 법 $p$ 에서 절반의 류에만 든다는 조건은 분모가 $p$ 인 유리수 점에서 $\vert S\vert$ 가 크다는 조건으로 바뀐다. 분모가 $Q$ 이하인 서로 다른 유리수 두 개는 $1/Q^2$ 이상 떨어져 있으므로, 그 점들에서 잰 $\vert S\vert^2$ 의 합이 $(N+Q^2)\sum\vert a\_n\vert^2$ 이하다. 왼쪽의 하한을 구하면 남은 수의 개수에 상한이 나온다.

# 정의

## 지수합과 간격

$e(\alpha)=e^{2\pi i\alpha}$ 로 쓰고, [복소수](complex-numbers.md)열 $a\_1,\dots,a\_N$ 에 대해

$$
S(\alpha)=\sum\_{n\le N}a\_n e(n\alpha)
$$

로 둔다. $S$ 를 지수합(exponential sum)이라 한다. [실수](real-numbers.md) $\alpha\_1,\dots,\alpha\_R$ 가 $\delta$ **떨어져 있다(well-spaced)** 는 것은 $r\ne s$ 에서 $\alpha\_r-\alpha\_s$ 와 가장 가까운 정수 사이의 거리가 $\delta$ 이상이라는 뜻이다.

분모가 $3$ 이하인 $[0,1)$ 의 기약분수는 $0,1/3,1/2,2/3$ 이다. 이웃한 두 점의 거리는 $1/3,1/6,1/6$ 이고 $2/3$ 과 $0$ 은 정수 $1$ 을 거쳐 $1/3$ 떨어져 있으므로, 네 점은 $1/6$ 떨어져 있고 $1/3^2=1/9$ 떨어져 있다.

## 거르는 조건

각 소수 $p\le Q$ 마다 법 $p$ 의 나머지류 가운데 $\omega(p)$ 개를 금지한다. $N$ 이하의 양의 정수 가운데 금지된 류에 하나도 들지 않는 것의 개수를

$$
Z=\char35{}\lbrace n\le N\thinspace :\thinspace p\le Q\text{ 인 모든 }p\text{ 에서 }n\bmod p\text{ 가 허용된 류}\rbrace
$$

라 한다. $\omega(p)$ 가 $p$ 에 비례해 커지는 경우를 **큰 체** 라 하고, $\omega(p)$ 가 유계인 경우를 작은 체(small sieve)라 한다.

직관 절의 문제에서 $N=30$, $Q=5$ 로 두면 $p=3$ 에서 비잉여류 $2$ 를, $p=5$ 에서 비잉여류 $2,3$ 을 금지하므로 $\omega(3)=1$, $\omega(5)=2$ 다. 남는 수는 법 $15$ 로 $0,1,4,6,9,10$ 인 수이고, $30$ 이하에서는 $1,4,6,9,10,15,16,19,21,24,25,30$ 의 $Z=12$ 개다. 모든 $p$ 에서 $\omega(p)=(p-1)/2$ 이므로 큰 체의 경우다.

모든 $p\le Q$ 에서 류 $0$ 만 금지하면 $\omega(p)=1$ 이고, 남는 수는 $Q$ 이하의 소인수가 없는 수다. 이것은 작은 체의 경우다.

## 등차수열의 소수 세기

von Mangoldt 함수(von Mangoldt function) $\Lambda(n)$ 은 $n=p^k$ 에서 $\log p$, 그 밖에서 $0$ 인 함수다. 법 $q$ 와 $\gcd(a,q)=1$ 에 대해

$$
\psi(x;q,a)=\sum\_{n\le x,\thinspace n\equiv a\bmod q}\Lambda(n)
$$

로 둔다. $x=10$, $q=3$, $a=1$ 이면 더하는 $n$ 은 $1,4,7,10$ 이고 $\psi(10;3,1)=0+\log 2+\log 7+0=\log 14$ 다. 등차수열에 소수가 고르게 퍼지면 $\psi(x;q,a)$ 는 $x/\varphi(q)$ 에 가깝다.

$0\lt\theta\lt 1$ 에 대해, 모든 $A\gt 0$ 에서

$$
\sum\_{q\le x^\theta}\max\_{\gcd(a,q)=1}\Bigl\vert\psi(x;q,a)-\frac{x}{\varphi(q)}\Bigr\vert\ll\_{A}\frac{x}{(\log x)^A}
$$

가 성립하면 소수가 **분포 준위(level of distribution)** $\theta$ 를 갖는다고 한다. 모든 $\theta\lt 1$ 에서 분포 준위 $\theta$ 를 갖는다는 주장을 Elliott–Halberstam 추측(Elliott–Halberstam conjecture)이라 한다.

# 성질

## 해석적 꼴

$\alpha\_1,\dots,\alpha\_R$ 가 $\delta$ 떨어져 있으면

$$
\sum\_{r\le R}\vert S(\alpha\_r)\vert^2\le(N-1+\delta^{-1})\sum\_{n\le N}\vert a\_n\vert^2
$$

이다.[^1]

증명의 요지. 쌍대 꼴(dual form)로 바꿔 $\sum\_n\vert\sum\_r c\_r e(n\alpha\_r)\vert^2$ 의 상한을 보인다. 제곱을 펼치면 교차항이 $1/\sin\pi(\alpha\_r-\alpha\_s)$ 꼴의 합으로 적히고, Hilbert 부등식(Hilbert's inequality)의 일반화로 그 합의 상한이 $\delta^{-1}$ 이 된다. 계수 $N-1+\delta^{-1}$ 는 Montgomery 와 Vaughan, 그리고 Selberg 가 따로 얻은 것이고 더 줄일 수 없다.

## 산술적 꼴

위의 $Z$ 에 대해

$$
Z\le\frac{N+Q^2}{L},\qquad L=\sum\_{q\le Q}\mu(q)^2\prod\_{p\mid q}\frac{\omega(p)}{p-\omega(p)}
$$

이다.[^2]

증명의 요지. $a\_n$ 을 남은 수에서 $1$ 인 수열로 두면 $\sum\vert a\_n\vert^2=Z$ 다. 분모가 $q\le Q$ 인 기약분수 $a/q$ 전체는 $Q^{-2}$ 떨어져 있으므로 해석적 꼴을 적용한다. 금지된 류를 피한다는 조건을 법 $q$ 의 가법지표(additive character)로 펼치면 $\sum\_{a}\vert S(a/q)\vert^2$ 의 하한이 $Z^2$ 의 상수배로 나오고, 그 상수를 $q$ 에 걸쳐 더한 것이 $L$ 이다.

$\omega(p)=(p-1)/2$ 이면 각 인자가 $(p-1)/(p+1)$ 이어서 $L$ 이 $Q$ 의 상수배 이상이다. $Q=N^{1/2}$ 를 넣으면 $Z\ll N^{1/2}$ 다. 직관 절의 제곱잉여 문제가 이 경우이고, 체 방법의 주항이 주지 못한 상한이 나온다.

## Bombieri–Vinogradov 정리

**Bombieri–Vinogradov 정리(Bombieri–Vinogradov theorem)** 는 다음이다. 임의의 $A\gt 0$ 에 대해 $B$ 가 있어 $Q=x^{1/2}(\log x)^{-B}$ 에서

$$
\sum\_{q\le Q}\max\_{\gcd(a,q)=1}\Bigl\vert\psi(x;q,a)-\frac{x}{\varphi(q)}\Bigr\vert\ll\frac{x}{(\log x)^A}
$$

가 성립한다.[^3] 따라서 소수는 모든 $\theta\lt 1/2$ 에서 분포 준위 $\theta$ 를 갖는다.

증명의 요지. [Vaughan 항등식](vaughan-identity.md)으로 $\Lambda$ 를 두 수열의 곱에 걸친 쌍선형합(bilinear sum) 몇 개로 분해한다. 각 쌍선형합을 [Dirichlet L 함수](dirichlet-l-functions.md)의 지표합으로 쓰고 큰 체의 해석적 꼴을 적용하면, 법 $q$ 를 하나씩 보지 않고 평균으로 묶은 추정이 나온다. 큰 체의 계수에 $Q^2$ 이 들어 있어 $Q^2$ 이 $x$ 를 넘으면 추정이 자명한 상한보다 나빠지므로, $Q$ 는 $x^{1/2}$ 근처에서 멈춘다.

일반화 [Riemann 가설](riemann-hypothesis.md)(generalized Riemann hypothesis, GRH)을 가정하면 $q$ 하나마다 $\vert\psi(x;q,a)-x/\varphi(q)\vert\ll x^{1/2}(\log x)^2$ 이고, 이것을 더하면 같은 범위의 $Q$ 에서 같은 꼴의 상한이 나온다. Bombieri–Vinogradov 정리는 이 상한을 $q$ 의 평균에서 가정 없이 준다.

# 활용

- [소수 간격](prime-gaps.md). Goldston–Pintz–Yıldırım 의 가중에 Bombieri–Vinogradov 정리를 넣으면 이웃한 두 소수의 간격이 평균 간격 $\log p$ 의 임의의 작은 배수보다 작은 경우가 무한히 많다는 것이 나온다. 분포 준위 $\theta\gt 1/2$ 를 가정하면 간격이 유계인 소수 쌍이 무한히 많다는 것이 나온다. Zhang 은 법을 매끄러운 수로 제한한 형태의 분포 준위를 $1/2$ 보다 조금 크게 증명해 간격이 $7\times 10^7$ 이하인 소수 쌍이 무한히 많음을 보였다.[^4]
- 최소 비잉여. 법 $p$ 의 최소 비잉여가 $N^\varepsilon$ 보다 큰 소수 $p\le N^{1/2}$ 의 집합을 $P$ 라 한다. 소인수가 모두 $N^\varepsilon$ 이하인 $N$ 이하의 수는 $P$ 의 모든 소수에서 제곱잉여이고 그 개수는 $N$ 의 상수배 이상이다. 산술적 꼴에 $p\in P$ 에서 $\omega(p)=(p-1)/2$ 를 넣으면 $L$ 이 $P$ 의 원소 수의 상수배 이상이므로, $P$ 의 원소 수는 $\varepsilon$ 에만 의존하는 상수 이하다. Linnik 이 큰 체를 처음 쓴 문제가 이것이다.
- 등차수열의 소수 개수. [소수 정리](prime-number-theorem.md)의 등차수열 판본은 법을 하나 고정하면 $q\le(\log x)^A$ 범위에서만 증명되어 있다. Bombieri–Vinogradov 정리는 평균에서 $q$ 를 $x^{1/2}$ 근처까지 키우므로, 법을 변수로 쓰는 논증(Titchmarsh 약수 문제, [Chen 정리](chen-theorem.md))에 이 정리를 쓴다.
- 다항식의 Galois 군. 차수 $n$, 계수의 절댓값이 $H$ 이하인 정수 계수 다항식 가운데 Galois 군이 대칭군 $S\_n$ 이 아닌 것의 비율은 $H$ 가 커지면 $0$ 으로 간다. Gallagher 는 Galois 군이 작으면 많은 소수에서 다항식의 인수분해 꼴이 제한된다는 조건을 큰 체로 세어 이 비율의 상한 $H^{-1/2}\log H$ 를 얻었다.[^5]

[^1]: H. L. Montgomery, R. C. Vaughan, *The large sieve*, Mathematika **20** (1973), 119–134. 원형은 Yu. V. Linnik, *The large sieve*, C. R. Acad. Sci. URSS **30** (1941), 292–294 다.

[^2]: H. Iwaniec, E. Kowalski, *Analytic Number Theory*, American Mathematical Society, 2004, 7 장. 해석적 꼴에서 산술적 꼴을 끌어내는 계산과 $L$ 의 정의가 이 장에 있다.

[^3]: E. Bombieri, *On the large sieve*, Mathematika **12** (1965), 201–225. A. I. Vinogradov, *The density hypothesis for Dirichlet L-series*, Izv. Akad. Nauk SSSR **29** (1965), 903–934. Vaughan 항등식을 쓴 현대적 증명은 H. Davenport, *Multiplicative Number Theory*, 3판, Springer, 2000, 28 장이다.

[^4]: Y. Zhang, *Bounded gaps between primes*, Ann. of Math. **179** (2014), 1121–1174. 매끄러운 법으로 제한한 Bombieri–Vinogradov 형태가 3 절과 4 절에 있다.

[^5]: P. X. Gallagher, *The large sieve and probabilistic Galois theory*, Proc. Sympos. Pure Math. **24** (1973), 91–101.

# 연관 문서

## 선수지식

- [Dirichlet L 함수](dirichlet-l-functions.md)
- [체 방법](sieve-methods.md)

## 더 알아보기

- [Vaughan 항등식](vaughan-identity.md)
- [소수 간격](prime-gaps.md)
- [Chen 정리](chen-theorem.md)

#number_theory #analysis #combinatorics
