# Weierstrass 인수분해 정리

# 개요

**Weierstrass 인수분해 정리(Weierstrass factorization theorem)** 는 전해석함수를 영점에서 만든 무한곱과 영점이 없는 지수인자의 곱으로 나타내는 정리다. 다항식은 근 $a$ 마다 인자 $1-z/a$ 를 곱해 인수분해되지만, 영점이 $1,2,3,\dots$ 처럼 무한히 많으면 곱 $\prod(1-z/n)$ 이 수렴하지 않는다. 이 정리는 각 인자에 지수 수렴인자를 곱해 영점을 그대로 두면서 곱을 수렴하게 만든다.

# 직관

영점이 $1,2,3,\dots$ 인 전해석함수를 만들려고 한다. 다항식처럼 곱 $\prod_{n\ge 1}(1-z/n)$ 을 잡으면, 로그를 취했을 때 $\log(1-z/n)=-z/n-z^2/(2n^2)-\cdots$ 의 첫 항을 더한 $-z\sum 1/n$ 이 발산하므로 곱이 수렴하지 않는다.

발산의 원인이 첫 항 $-z/n$ 이므로 각 인자에 $e^{z/n}$ 을 곱해 그 항을 지운다. 그러면 $\log\bigl((1-z/n)e^{z/n}\bigr)=-z^2/(2n^2)-\cdots$ 이고 $\sum 1/n^2$ 이 수렴하므로 곱 $\prod_{n\ge 1}(1-z/n)e^{z/n}$ 이 수렴한다. $e^{z/n}$ 은 영점이 없으므로 영점은 여전히 $1,2,3,\dots$ 이다. 영점이 더 느리게 커지면 $\log(1-z/a_n)$ 의 앞 항을 더 많이 지워야 한다.

# 정의

## 무한곱의 수렴

곱 $\prod_{n\ge1}(1+u_n)$ 의 부분곱이 $0$ 이 아닌 값으로 수렴하면 곱이 수렴한다고 한다. $\prod_{n\ge 2}(1-1/n^2)$ 의 부분곱은 $\prod_{n=2}^N\frac{(n-1)(n+1)}{n^2}=\frac{N+1}{2N}$ 이므로 $1/2$ 로 수렴한다. $\prod_{n\ge 2}(1-1/n)$ 의 부분곱은 $1/N$ 이므로 $0$ 으로 가고, 이 곱은 수렴하지 않는다.

## 기본 인수

$$E_0(z)=1-z,\qquad E_p(z)=(1-z)\exp\left(z+\frac{z^2}2+\cdots+\frac{z^p}p\right)$$

를 **기본 인수(elementary factor)** 라 한다. $E_p$ 의 영점은 $z=1$ 하나뿐이고 단순하다. 직관 절의 인자 $(1-z/n)e^{z/n}$ 은 $E_1(z/n)$ 이다.

## 위수

전해석함수 $f$ 와 $M(r)=\max_{\vert z\vert=r}\vert f(z)\vert$ 에 대해

$$\rho=\limsup_{r\to\infty}\frac{\log\log M(r)}{\log r}$$

를 $f$ 의 **위수(order)** 라 한다. 다항식은 $\log M(r)$ 이 $\log r$ 의 상수배로 자라므로 위수 $0$ 이다. $e^z$ 는 $M(r)=e^r$ 이므로 위수 $1$, $e^{z^2}$ 는 $M(r)=e^{r^2}$ 이므로 위수 $2$ 다.

# 성질

## 무한곱의 절대수렴

$\sum_n\vert u_n\vert$ 이 수렴하면 $\prod_{n\ge1}(1+u_n)$ 은 수렴하고, 그 값은 어떤 $u_n$ 도 $-1$ 이 아닐 때만 $0$ 이 아니다. 각 $u_n$ 이 영역에서 정칙이고 급수 $\sum\vert u_n\vert$ 가 콤팩트 집합마다 [균등수렴](uniform-convergence.md)하면 곱도 정칙함수로 균등수렴하며, 그 영점은 인자들의 영점을 중복도까지 합친 것이다.

## 기본 인수의 추정

$\vert z\vert\le1/2$ 에서 $\vert 1-E_p(z)\vert\le2\vert z\vert^{p+1}$ 이다. 지수부가 $-\log(1-z)=z+z^2/2+\cdots$ 의 앞 $p$ 항이므로 $\log E_p(z)=-\sum_{k\gt p}z^k/k$ 이고, 이 합이 $\vert z\vert^{p+1}$ 의 상수배로 묶인다.


## Weierstrass 인수분해 정리

$0$ 이 아닌 [복소수](complex-numbers.md)열 $\lbrace a_n\rbrace$ 이 $\vert a_n\vert\to\infty$ 를 만족하면, 정확히 그 점들을 영점으로 갖는 전해석함수가 존재한다. 정수열 $p_n$ 을 $\sum_n(r/\vert a_n\vert)^{p_n+1}$ 이 모든 $r$ 에서 수렴하도록 고르면 $\prod_n E_{p_n}(z/a_n)$ 이 그 함수다. $p_n=n-1$ 은 언제나 통한다.

따라서 모든 전해석함수 $f$ 는

$$f(z)=z^m e^{g(z)}\prod_{n\ge1}E_{p_n}\left(\frac z{a_n}\right)$$

로 쓰인다. $m$ 은 원점에서의 영점 중복도, $a_n$ 은 나머지 영점, $g$ 는 전해석함수다. 두 인수분해의 몫은 영점 없는 전해석함수이므로 $e^{g}$ 꼴이고, 그래서 $g$ 를 뺀 부분이 유일하게 정해진다.

## Hadamard 인수분해 정리

$f$ 의 위수 $\rho$ 가 유한하면 위 표현에서 $g$ 는 차수 $\le\rho$ 의 다항식이고, 모든 $p_n$ 을 $p=\lfloor\rho\rfloor$ 하나로 잡을 수 있다.[^1] 이것이 Hadamard 인수분해 정리(Hadamard factorization theorem)다.

영점의 분포도 위수가 통제한다. $n(r)$ 을 $\vert z\vert\le r$ 안 영점의 개수라 하면 Jensen 공식(Jensen's formula)에서 $n(r)=O(r^{\rho+\varepsilon})$ 이 나오고, $\sum_n\vert a_n\vert^{-s}$ 는 $s\gt\rho$ 에서 수렴한다.

## Mittag-Leffler 정리

영점 대신 극을 지정해도 같은 존재 정리가 성립하고, 이것이 Mittag-Leffler 정리(Mittag-Leffler theorem)다. $\vert b_n\vert\to\infty$ 와 각 $b_n$ 에서의 주부 $P_n(1/(z-b_n))$ 이 주어지면, 정확히 그 극과 주부를 갖는 유리형함수(meromorphic function)가 존재한다. 다항식을 빼서 급수를 수렴시키는 논법이 기본 인수를 대신한다.

# 활용

- 사인의 곱 공식: $\sin\pi z$ 는 위수 $1$ 이고 영점이 정수 전체이므로 $\sin\pi z=\pi z\prod_{n\ge1}\left(1-\frac{z^2}{n^2}\right)$ 로 인수분해된다. 양변의 로그 미분에서 $\pi\cot\pi z$ 의 부분분수 전개가 나오고, $z^2$ 계수를 비교하면 $\sum n^{-2}=\pi^2/6$ 이 나온다.
- [감마 함수](gamma-function.md): $1/\Gamma$ 는 위수 $1$ 의 전해석함수이고 영점이 $0,-1,-2,\dots$ 다. Hadamard 인수분해가 $\frac1{\Gamma(z)}=z\thinspace e^{\gamma z}\prod_{n\ge1}\left(1+\frac zn\right)e^{-z/n}$ 을 준다. $\gamma$ 는 [Euler–Mascheroni 상수](euler-mascheroni-constant.md)다.
- [Riemann zeta 함수](riemann-zeta.md): 완비 zeta 함수 $\xi$ 는 위수 $1$ 의 전해석함수이므로 영점 위의 Hadamard 곱으로 쓰이고, 그 로그 미분이 소수 계수 함수의 명시 공식(explicit formula)에서 영점 항을 만든다.
- [타원함수](elliptic-functions.md): Weierstrass 시그마 함수(Weierstrass sigma function)는 [격자](lattices.md)점을 영점으로 갖는 기본 인수 $E_2$ 의 곱이다. 그 로그 미분이 Weierstrass 제타 함수 $\zeta$ 이고, $-\zeta'$ 이 Weierstrass $\wp$ 함수다.

[^1]: W. Rudin, *Real and Complex Analysis*, 3rd ed., 15장 (영점 집합과 Hadamard 인수분해).

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)

## 더 알아보기

- [Picard 정리](picard-theorems.md)
- [Cramér 분해 정리](cramer-decomposition.md)

#complex_analysis #analysis #number_theory
