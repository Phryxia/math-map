# Weierstrass 인수분해 정리

# 개요

다항식은 근으로 인수분해된다. Weierstrass 인수분해 정리는 같은 일을 전해석함수에 대해 한다. 미리 정한 영점 목록을 갖는 전해석함수가 언제나 존재하고, 모든 전해석함수는 영점에서 나온 무한곱과 영점이 없는 지수인자의 곱으로 쓰인다. 위수가 유한하면 지수인자가 다항식으로 좁혀지고, 그것이 Hadamard 인수분해 정리다.

# 직관

영점이 $a_1,a_2,\dots$ 로 무한히 많을 때 곱 $\prod(1-z/a_n)$ 은 대개 발산한다. 각 인자에 지수 수렴인자를 곱해 $1$ 에 더 빨리 가까워지게 하면 곱이 수렴하고, 영점은 그대로 남는다. 어느 차수의 수렴인자가 필요한지는 $\sum\vert a_n\vert^{-p}$ 가 수렴하는 $p$ 가 정한다.

# 정의

## 무한곱의 수렴

$\prod_{n\ge1}(1+u_n)$ 은 $\sum_n\vert u_n\vert$ 이 수렴하면 절대수렴하고, 그 값은 어떤 $u_n$ 도 $-1$ 이 아닐 때만 $0$ 이 아니다. 각 $u_n$ 이 영역에서 정칙이고 급수가 콤팩트 집합마다 균등수렴하면 곱도 정칙함수로 균등수렴하며, 그 영점은 인자들의 영점을 중복도까지 합친 것이다.

## 기본 인수

$$E_0(z)=1-z,\qquad E_p(z)=(1-z)\exp\left(z+\frac{z^2}2+\cdots+\frac{z^p}p\right)$$

를 **기본 인수**라 한다. 지수부는 $\log(1-z)$ 의 Taylor 전개 앞 $p$ 항을 상쇄하므로 $\vert z\vert\le1/2$ 에서 $\vert1-E_p(z)\vert\le2\vert z\vert^{p+1}$ 이다. $E_p$ 의 영점은 $z=1$ 하나뿐이고 단순하다.

## 위수

전해석함수 $f$ 와 $M(r)=\max_{\vert z\vert=r}\vert f(z)\vert$ 에 대해

$$\rho=\limsup_{r\to\infty}\frac{\log\log M(r)}{\log r}$$

를 $f$ 의 **위수**라 한다. 다항식은 위수 $0$, $e^z$ 는 위수 $1$, $e^{z^2}$ 는 위수 $2$ 다.

# 성질

## Weierstrass 인수분해 정리

$0$ 이 아닌 복소수열 $\lbrace a_n\rbrace$ 이 $\vert a_n\vert\to\infty$ 를 만족하면, 정확히 그 점들을 영점으로 갖는 전해석함수가 존재한다. 정수열 $p_n$ 을 $\sum_n(r/\vert a_n\vert)^{p_n+1}$ 이 모든 $r$ 에서 수렴하도록 고르면 $\prod_n E_{p_n}(z/a_n)$ 이 그 함수다. $p_n=n-1$ 은 언제나 통한다.

따라서 모든 전해석함수 $f$ 는

$$f(z)=z^m e^{g(z)}\prod_{n\ge1}E_{p_n}\left(\frac z{a_n}\right)$$

로 쓰인다. $m$ 은 원점에서의 영점 중복도, $a_n$ 은 나머지 영점, $g$ 는 전해석함수다. 두 인수분해의 몫은 영점 없는 전해석함수이므로 $e^{g}$ 꼴이고, 그래서 $g$ 를 뺀 부분이 유일하게 정해진다.

## Hadamard 인수분해 정리

$f$ 의 위수 $\rho$ 가 유한하면 위 표현에서 $g$ 는 차수 $\le\rho$ 의 다항식이고, 모든 $p_n$ 을 $p=\lfloor\rho\rfloor$ 하나로 잡을 수 있다[^1].

영점의 분포도 위수가 통제한다. $n(r)$ 을 $\vert z\vert\le r$ 안 영점의 개수라 하면 Jensen 공식에서 $n(r)=O(r^{\rho+\varepsilon})$ 이 나오고, $\sum_n\vert a_n\vert^{-s}$ 는 $s\gt\rho$ 에서 수렴한다.

## Mittag-Leffler 정리

영점 대신 극을 지정해도 같은 일이 된다. $\vert b_n\vert\to\infty$ 와 각 $b_n$ 에서의 주부 $P_n(1/(z-b_n))$ 이 주어지면, 정확히 그 극과 주부를 갖는 유리형함수가 존재한다. 다항식을 빼서 급수를 수렴시키는 논법이 기본 인수의 역할을 한다.

# 활용

- 사인의 곱 공식: $\sin\pi z$ 는 위수 $1$ 이고 영점이 정수 전체이므로 $$\sin\pi z=\pi z\prod_{n\ge1}\left(1-\frac{z^2}{n^2}\right)$$ 로 인수분해된다. 양변의 로그 미분에서 $\pi\cot\pi z$ 의 부분분수 전개가 나오고, $z^2$ 계수를 비교하면 $\sum n^{-2}=\pi^2/6$ 이 나온다.
- [감마 함수와 Stirling 근사](gamma-function.md): $1/\Gamma$ 는 위수 $1$ 의 전해석함수이고 영점이 $0,-1,-2,\dots$ 다. Hadamard 인수분해가 $$\frac1{\Gamma(z)}=z\thinspace e^{\gamma z}\prod_{n\ge1}\left(1+\frac zn\right)e^{-z/n}$$ 을 준다. $\gamma$ 는 Euler–Mascheroni 상수다.
- [소수 정리와 Riemann zeta 함수](prime-number-theorem.md): 완비 zeta 함수 $\xi$ 는 위수 $1$ 의 전해석함수이므로 영점 위의 Hadamard 곱으로 쓰이고, 그 로그 미분이 소수 계수 함수의 명시 공식에서 영점 항을 만든다.
- [타원함수](elliptic-functions.md): Weierstrass 시그마 함수는 격자점을 영점으로 갖는 기본 인수 곱이고, 그 로그 미분이 제타 함수와 페 함수로 이어진다.

[^1]: W. Rudin, *Real and Complex Analysis*, 3rd ed., 15장 (영점 집합과 Hadamard 인수분해).

# 연관 문서

## 선수지식

- [정칙함수와 Cauchy 적분 정리](holomorphic-functions.md)

## 더 알아보기

- [Picard 정리](picard-theorems.md)

#complex_analysis #analysis #number_theory
