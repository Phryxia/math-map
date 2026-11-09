# Möbius 반전 공식

# 개요

**Möbius 반전 공식(Möbius inversion formula)** 은 산술함수 $f$ 의 약수 합 $g(n)=\sum\_{d\mid n}f(d)$ 를 알 때 $f$ 를 되찾는 공식이다. $n$ 이하이고 $n$ 과 서로소인 자연수의 개수를 $\varphi(n)$ 이라 하면, $1$ 부터 $12$ 까지를 $12$ 와의 최대공약수로 묶어 $\varphi(1)+\varphi(2)+\varphi(3)+\varphi(4)+\varphi(6)+\varphi(12)=12$ 를 얻는다. 이 식은 바로 나오지만 구하려는 $\varphi(12)$ 하나는 이 합에서 읽히지 않는다. 반전 공식은 $g$ 의 값들에 $+1$, $-1$, $0$ 의 계수를 붙여 더해 $f$ 를 얻고, 그 계수를 정하는 함수가 Möbius 함수 $\mu$ 다.

# 직관

$n$ 이하의 자연수 가운데 $n$ 과 서로소인 것의 개수를 $\varphi(n)$ 이라 한다. $1$ 부터 $n$ 까지를 $n$ 과의 최대공약수로 묶으면 최대공약수가 $d$ 인 것의 개수가 $\varphi(n/d)$ 이므로 $\sum\_{d\mid n}\varphi(d)=n$ 이 성립한다. 약수에 걸친 합은 쉽게 나왔지만 구하려는 것은 $\varphi(n)$ 하나다.

$f$ 를 작은 $n$ 부터 차례로 푼다. $g(n)=\sum\_{d\mid n}f(d)$ 를 $f(n)=g(n)-\sum\_{d\mid n,\thinspace d\lt n}f(d)$ 로 쓰고 차례로 대입한다. 소수 $p$ 에서 $f(p)=g(p)-g(1)$ 이고, 서로 다른 소수 $p,q$ 에서 $f(pq)=g(pq)-f(p)-f(q)-f(1)=g(pq)-g(p)-g(q)+g(1)$ 이며, $f(p^2)=g(p^2)-f(p)-f(1)=g(p^2)-g(p)$ 다.

각 $g(d)$ 의 계수는 $+1$, $-1$, $0$ 셋뿐이고 $n/d$ 의 소인수 개수와 제곱 인수의 유무로만 정해진다. 그 계수를 함수로 적은 것이 $\mu$ 다.

# 정의

## 산술함수와 Dirichlet 합성곱

자연수에서 [복소수](complex-numbers.md)로 가는 함수를 **산술함수(arithmetic function)** 라 한다. $\varphi$, 상수함수 $1$, 약수의 개수 $d(n)$ 이 그 예다. 산술함수 $f,g$ 의 **Dirichlet 합성곱(Dirichlet convolution)** 은

$$
(f\ast g)(n)=\sum\_{d\mid n}f(d)\thinspace g(n/d)
$$

이다. $(1\ast 1)(6)$ 은 $6$ 의 약수 $1,2,3,6$ 마다 $1\cdot 1$ 을 더한 $4$ 이고, 일반적으로 $1\ast 1=d$ 다. $\delta(1)=1$ 이고 $n\gt 1$ 에서 $\delta(n)=0$ 인 함수를 $\delta$ 로 쓴다.

$\gcd(m,n)=1$ 에서 $f(mn)=f(m)f(n)$ 이고 $f$ 가 항등적으로 $0$ 이 아니면 $f$ 를 **곱셈적(multiplicative)** 이라 한다. $\varphi(4)\varphi(3)=2\cdot 2=4=\varphi(12)$ 이고, $\varphi$ 는 곱셈적이다.

## Möbius 함수

$$
\mu(n)=\begin{cases}1&n=1\cr(-1)^k&n \text{ 이 서로 다른 소수 } k \text{ 개의 곱}\cr 0&n \text{ 이 어떤 소수의 제곱으로 나뉠 때}\end{cases}
$$

로 정한 $\mu$ 를 **Möbius 함수(Möbius function)** 라 한다. $\mu(6)=1$, $\mu(30)=-1$, $\mu(12)=0$ 이다. 직관 절의 계산에서 $f(pq)$ 에 붙은 $g(1)$ 의 계수 $+1$ 이 $\mu(pq)$ 이고, $f(p^2)$ 에 $g(1)$ 이 나타나지 않는 것이 $\mu(p^2)=0$ 이다.

# 성질

## 산술함수의 환

점별 덧셈과 Dirichlet 합성곱으로 산술함수 전체는 가환환을 이루고, 항등원은 $\delta$ 다.

산술함수 $f$ 가 합성곱에 대해 가역일 필요충분조건은 $f(1)\ne 0$ 이다. $f\ast h=\delta$ 를 $n$ 에 대한 귀납으로 푼다. $h(1)=1/f(1)$ 이고, $n\gt 1$ 에서

$$
h(n)=-\frac{1}{f(1)}\sum\_{d\mid n,\thinspace d\lt n}f(n/d)\thinspace h(d)
$$

로 정하면 오른쪽에 $h(n)$ 이 나타나지 않으므로 $h$ 가 하나로 정해진다.

## μ 는 상수함수 1 의 역원

$\mu\ast 1=\delta$ 다. $n=1$ 에서는 양변이 $1$ 이다. $n\gt 1$ 의 서로 다른 소인수가 $p\_1,\dots,p\_r$ 이면 $\mu(d)\ne 0$ 인 약수 $d$ 는 그 소인수들의 부분집합의 곱이고, 소인수 $j$ 개를 고른 것이 $\binom rj$ 개다. 따라서

$$
\sum\_{d\mid n}\mu(d)=\sum\_{j=0}^{r}\binom rj(-1)^j=(1-1)^r=0
$$

이다. $n=12$ 이면 $\mu(1)+\mu(2)+\mu(3)+\mu(4)+\mu(6)+\mu(12)=1-1-1+0+1+0=0$ 이다.

## 반전 공식

산술함수 $f,g$ 에 대해 다음 두 조건은 동치다.

$$
g(n)=\sum\_{d\mid n}f(d)\quad(\text{모든 } n),\qquad f(n)=\sum\_{d\mid n}\mu(n/d)\thinspace g(d)\quad(\text{모든 } n)
$$

### 반전 공식의 증명

첫 조건은 $g=f\ast 1$ 이다. 양변에 $\mu$ 를 합성곱하면 결합법칙과 앞 정리로 $g\ast\mu=f\ast 1\ast\mu=f\ast\delta=f$ 이고, 이것이 둘째 조건이다. 거꾸로 $f=g\ast\mu$ 에 $1$ 을 합성곱하면 첫 조건이 나온다.

## 곱셈적 함수의 군

곱셈적 함수 둘의 합성곱은 곱셈적이고, 곱셈적 함수는 $f(1)=1$ 이라 가역이며 역원도 곱셈적이다. 그러므로 곱셈적 함수 전체가 합성곱에 대한 군을 이룬다. $\mu$, 상수함수 $1$, $\varphi$, 약수 개수 $d$, 약수 합 $\sigma$ 가 모두 곱셈적이다.

## 표준적인 짝

| f | g=f∗1 |
| --- | --- |
| $\mu$ | $\delta$ |
| $\varphi$ | $n$ |
| $1$ | 약수 개수 $d(n)$ |
| $n$ | 약수 합 $\sigma(n)$ |
| von Mangoldt 함수(von Mangoldt function) $\Lambda$ | $\log n$ |

둘째 줄에 반전을 적용하면 $\varphi(n)=\sum\_{d\mid n}\mu(n/d)\thinspace d$ 이고, $\mu$ 와 항등함수가 곱셈적이므로 소수 거듭제곱에서 계산한 값을 곱해 $\varphi(n)=n\prod\_{p\mid n}(1-1/p)$ 를 얻는다.

## Dirichlet 급수와의 대응

[Dirichlet 급수](dirichlet-series.md)는 합성곱을 곱으로 옮긴다. 절대수렴 영역에서 $D\_{f\ast g}(s)=D\_f(s)D\_g(s)$ 이므로 $\mu\ast 1=\delta$ 는

$$
\sum\_{n\ge 1}\frac{\mu(n)}{n^{s}}=\frac{1}{\zeta(s)}
$$

로 적힌다. 환의 항등식 하나가 [Riemann zeta 함수](riemann-zeta.md)의 역수에 대한 급수 표현이 된다.

## 반순서집합으로의 확장

[반순서집합](partial-orders.md) $P$ 가 국소 유한이면 구간마다 정수를 주는 함수 $\mu\_P(x,y)$ 를 $\mu\_P(x,x)=1$ 과

$$
\sum\_{x\le z\le y}\mu\_P(x,z)=0\quad(x\lt y)
$$

로 정의할 수 있고, $g(y)=\sum\_{x\le y}f(x)$ 에서 $f(y)=\sum\_{x\le y}\mu\_P(x,y)\thinspace g(x)$ 가 따른다. $P$ 가 나눔 관계로 순서를 준 자연수이면 $\mu\_P(d,n)=\mu(n/d)$ 이고, $P$ 가 유한집합의 부분집합 격자이면 같은 공식이 [포함배제 원리](inclusion-exclusion.md)다.

# 활용

- Euler 함수의 곱 공식. 위 표의 둘째 줄에 반전을 적용해 $\varphi(n)=n\prod\_{p\mid n}(1-1/p)$ 를 얻는다.
- [체 방법](sieve-methods.md). Legendre 의 체는 소수의 배수를 걸러낸 개수를 $\sum\_{d}\mu(d)\lfloor x/d\rfloor$ 로 적는다. $\mu$ 가 포함배제의 부호를 담당하고, 이 합의 오차를 다루는 것이 체 방법의 출발 문제다.
- 원분다항식. $x^n-1=\prod\_{d\mid n}\Phi\_d(x)$ 를 곱셈 꼴로 반전하면 $\Phi\_n(x)=\prod\_{d\mid n}(x^d-1)^{\mu(n/d)}$ 다. 약수 합에 대한 반전을 곱셈 군에서 쓴 것이다.
- [소수 정리](prime-number-theorem.md). von Mangoldt 함수와 $\log$ 의 짝 $\Lambda\ast 1=\log$ 가 $-\zeta'(s)/\zeta(s)$ 의 급수 표현을 주고, 그 급수의 극 구조에서 소수의 분포가 나온다.

# 연관 문서

## 선수지식

- [소수](primes.md)
- [포함배제 원리](inclusion-exclusion.md)

## 더 알아보기

- [Lyndon 단어](lyndon-words.md)

#number_theory #combinatorics #algebra #order_theory
