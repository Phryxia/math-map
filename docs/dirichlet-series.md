# Dirichlet 급수

# 개요

수열 $(a_n)$ 의 **Dirichlet 급수**는 $D(s)=\sum\_{n\ge1}a_n n^{-s}$ 다. 변수 $s$ 를 복소수로 보면 이 급수는 어떤 가로선의 오른쪽에서 수렴하고 그 영역에서 정칙이다.

계수의 Dirichlet 합성곱이 급수의 곱에 대응하므로 산술함수 사이의 항등식이 함수 사이의 항등식으로 바뀐다. 거꾸로 $D(s)$ 의 극의 위치와 차수가 부분합 $\sum\_{n\le x}a_n$ 의 크기를 정하고, 이 대응이 [소수 정리](prime-number-theorem.md)의 해석적 증명이다.

# 직관

약수의 개수 $d(n)$ 을 $n=1$ 부터 $x$ 까지 더한 값을 구하려 한다. $d(1)=1$, $d(2)=2$, $d(3)=2$, $d(4)=3$ 처럼 값이 들쭉날쭉해서 항을 차례로 더하는 길로는 크기를 알 수 없다.

$d(n)$ 은 $n=ab$ 로 쓰는 양의 정수 쌍의 개수다. 따라서 합 $\sum\_{n\le x}d(n)$ 은 $ab\le x$ 인 쌍 $(a,b)$ 의 개수다. $a$ 를 고정하면 $b$ 의 개수가 $\lfloor x/a\rfloor$ 이므로 합은 $\sum\_{a\le x}\lfloor x/a\rfloor$ 이고 이것은 $x\log x$ 정도다.

쌍으로 쪼개지는 구조를 쓴 것이 계산을 끝낸 자리다. 그 구조를 식에 남기려면 계수마다 $n^{-s}$ 를 붙여 더한다. $n=ab$ 에서 $n^{-s}=a^{-s}b^{-s}$ 이므로 다음이 성립한다.

$$
\sum\_{n\ge1}\frac{d(n)}{n^{s}}=\sum\_{a\ge1}\sum\_{b\ge1}\frac{1}{a^{s}b^{s}}=\Bigl(\sum\_{a\ge1}\frac{1}{a^{s}}\Bigr)^{2}
$$

오른쪽은 $\zeta(s)^2$ 이고 $s=1$ 에서 $2$ 차 극을 갖는다. 극의 차수가 $2$ 이고 위치가 $s=1$ 인 것이 부분합의 크기 $x\log x$ 를 되돌려 준다. $\log x$ 의 거듭제곱이 극의 차수에서, $x$ 의 거듭제곱이 극의 위치에서 나온다. 이렇게 계수열에 $n^{-s}$ 를 붙여 만든 급수를 Dirichlet 급수라 한다.

# 정의

## Dirichlet 급수

복소수열 $(a_n)\_{n\ge1}$ 의 Dirichlet 급수는 다음 급수이고 $n^{-s}=e^{-s\log n}$ 으로 읽는다.

$$
D(s)=\sum\_{n=1}^{\infty}\frac{a_n}{n^{s}}
$$

$s=\sigma+it$ 로 쓰면 $\lvert n^{-s}\rvert=n^{-\sigma}$ 이므로 절대수렴은 실수부만으로 정해진다.

## 수렴 가로선

$D(s)$ 가 $s_0$ 에서 수렴하면 $\sigma\gt\sigma_0$ 인 모든 $s$ 에서 수렴한다. 따라서 수렴하는 $s$ 의 집합은 어떤 값 $\sigma_c$ 를 경계로 하는 반평면이고 $\sigma_c$ 를 **수렴 가로선**이라 한다. 절대수렴에 대해 같은 값을 $\sigma_a$ 라 한다.

$$
\sigma_c\le\sigma_a\le\sigma_c+1
$$

$\sigma\gt\sigma_c$ 에서 $D(s)$ 는 [정칙함수](holomorphic-functions.md)이고 항별 미분이 허용된다.

## Dirichlet 합성곱

산술함수 $a,b$ 의 **Dirichlet 합성곱**은 다음과 같다.

$$
(a\ast b)(n)=\sum\_{d\mid n}a(d)\thinspace b(n/d)
$$

두 급수가 절대수렴하는 영역에서 $D_a(s)D_b(s)=D\_{a\ast b}(s)$ 다. $n=de$ 로 쓰는 방법마다 곱의 한 항이 대응하므로 항을 모아 쓰면 바로 나온다.

## Euler 곱

$a$ 가 곱셈적이면, 곧 $\gcd(m,n)=1$ 에서 $a(mn)=a(m)a(n)$ 이면 절대수렴 영역에서 다음이 성립한다.

$$
D_a(s)=\prod_{p}\Bigl(1+\frac{a(p)}{p^{s}}+\frac{a(p^{2})}{p^{2s}}+\cdots\Bigr)
$$

$a$ 가 완전 곱셈적이면 각 인자가 등비급수여서 $D_a(s)=\prod_p(1-a(p)p^{-s})^{-1}$ 이 된다.

# 성질

## 계수의 유일성

**정리.** 두 Dirichlet 급수가 어떤 반평면에서 같은 값을 가지면 계수가 모두 같다.

$\sigma\to\infty$ 에서 $D(\sigma)\to a_1$ 이므로 $a_1$ 이 정해진다. $a_1$ 항을 빼고 $2^{s}$ 를 곱한 뒤 같은 극한을 취하면 $a_2$ 가 정해지고, 귀납으로 모든 계수가 정해진다.

## 부분합과 Abel 합

$A(x)=\sum\_{n\le x}a_n$ 이라 하면 $\sigma\gt\max(0,\sigma_c)$ 에서 다음이 성립한다.

$$
D(s)=s\int_{1}^{\infty}\frac{A(x)}{x^{s+1}}\thinspace dx
$$

증명의 요지는 Abel 합산이다. $a_n=A(n)-A(n-1)$ 을 대입해 합을 재배열하면 $\sum_n A(n)(n^{-s}-(n+1)^{-s})$ 가 되고, $n^{-s}-(n+1)^{-s}=s\int_n^{n+1}x^{-s-1}\thinspace dx$ 를 쓰면 적분이 된다.

**따름정리.** $A(x)=O(x^{\theta})$ 이면 $\sigma_c\le\theta$ 다. 거꾸로 적분 표현의 극의 위치가 $A(x)$ 의 크기를 제약한다.

## Perron 공식

$c\gt\max(0,\sigma_a)$ 이고 $x$ 가 정수가 아니면 다음이 성립한다.

$$
\sum\_{n\le x}a_n=\frac{1}{2\pi i}\int\_{c-i\infty}^{c+i\infty}D(s)\frac{x^{s}}{s}\thinspace ds
$$

적분선을 왼쪽으로 옮기면 지나간 극마다 유수가 주항으로 떨어진다. $s=1$ 의 단순극에서 유수 $cx$ 가 나오고 $2$ 차 극에서 $x\log x$ 가 나온다. 급수의 해석적 연속([해석적 연속](analytic-continuation.md))을 알아야 선을 옮길 수 있으므로 이 공식이 부분합 추정을 함수의 성질 문제로 바꾼다.

## Wiener–Ikehara 정리

**정리.** $a_n\ge0$ 이고 $D(s)$ 가 $\sigma\gt1$ 에서 수렴하며, 어떤 $c$ 에 대해 $D(s)-\dfrac{c}{s-1}$ 이 $\sigma\ge1$ 을 담는 열린집합으로 정칙하게 확장되면 $A(x)\sim cx$ 다.[^1]

계수가 음이 아니라는 조건이 핵심이다. 이 조건 없이는 $\sigma\ge1$ 에서의 정칙성만으로 부분합의 점근을 얻을 수 없다. $a_n=\Lambda(n)$ 에 적용하면 $\sum\_{n\le x}\Lambda(n)\sim x$ 이고, 이것이 소수 정리와 동치다.

## 표준적인 예

| 계수 | Dirichlet 급수 | 수렴 가로선 |
| --- | --- | --- |
| $1$ | $\zeta(s)$ | $1$ |
| Möbius $\mu(n)$ | $1/\zeta(s)$ | $1$ |
| 약수 개수 $d(n)$ | $\zeta(s)^{2}$ | $1$ |
| 약수 합 $\sigma(n)$ | $\zeta(s)\zeta(s-1)$ | $2$ |
| Euler $\varphi(n)$ | $\zeta(s-1)/\zeta(s)$ | $2$ |
| von Mangoldt $\Lambda(n)$ | $-\zeta'(s)/\zeta(s)$ | $1$ |
| Dirichlet 지표 $\chi(n)$ | $L(s,\chi)$ | $1$ |

$\mu\ast 1=\delta$ 와 $1\ast 1=d$ 와 $\Lambda\ast 1=\log$ 가 각각 첫 두 줄, 셋째 줄, 여섯째 줄의 항등식에 대응한다. [Möbius 반전 공식](mobius-inversion.md)이 합성곱의 역원을 구하는 것과 같다.

# 활용

- **소수 정리.** $-\zeta'(s)/\zeta(s)$ 가 $s=1$ 에서 단순극을 갖고 $\sigma=1$ 에서 $\zeta$ 의 영점이 없다는 것이 Wiener–Ikehara 정리의 조건을 채운다([소수 정리](prime-number-theorem.md)).
- **산술진수의 소수.** 지표 $\chi$ 의 Dirichlet 급수가 [Dirichlet L 함수](dirichlet-l-functions.md)이고, $L(1,\chi)\ne0$ 이 법 $q$ 의 각 잉여류에 소수가 무한히 많다는 것을 준다.
- **약수 문제.** $\zeta(s)^2$ 의 $s=1$ 에서의 Laurent 전개가 $\sum\_{n\le x}d(n)=x\log x+(2\gamma-1)x+O(x^{\theta})$ 를 주고, 오차항의 지수 $\theta$ 를 얼마까지 줄일 수 있는지 묻는 것이 Dirichlet 약수 문제다.
- **모듈러 형식의 L 함수.** 모듈러 형식의 Fourier 계수를 Dirichlet 급수의 계수로 삼으면 함수방정식과 Euler 곱을 갖는 함수가 되고, 계수의 곱셈성이 Hecke 작용소의 고유성에서 나온다([모듈러 형식](modular-forms.md)).
- **격자점 세기.** 이차형식이 값 $n$ 을 취하는 횟수를 계수로 삼은 급수가 Epstein 제타 함수이고, 그 극이 격자점 개수의 점근을 준다.

[^1]: S. Ikehara, "An extension of Landau's theorem in the analytical theory of numbers", Journal of Mathematics and Physics 10 (1931), https://doi.org/10.1002/sapm1931101

# 연관 문서

## 선수지식

- [급수의 수렴판정](series-convergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #complex_analysis
