# Paley–Wiener 정리

# 개요

**Paley–Wiener 정리(Paley–Wiener theorem)** 는 함수가 유한 구간 밖에서 $0$ 인지를 그 함수의 [Fourier 변환](fourier-transform.md)만 보고 판정하는 정리다. 사각 펄스 $\mathbf 1\_{\lbrack -1,1\rbrack}$ 은 구간 밖에서 $0$ 이고 Gauss 함수 $e^{-\pi x^2}$ 은 어디서도 $0$ 이 아니지만, 두 함수의 변환은 둘 다 실수축 위에서 $0$ 으로 줄어드는 매끄러운 함수라 겉모습으로는 갈리지 않는다.

이 정리는 변환의 변수에 복소수를 넣어, 허수축 방향으로 커지는 속도가 지수함수 이하인지로 두 경우를 가른다. 그 지수의 크기가 구간의 길이를 정한다.

# 직관

사각 펄스 $f=\mathbf 1\_{\lbrack -1,1\rbrack}$ 의 변환은 $\hat f(\xi)=\sin(2\pi\xi)/(\pi\xi)$ 이다. Gauss 함수 $g(x)=e^{-\pi x^2}$ 의 변환은 $\hat g(\xi)=e^{-\pi\xi^2}$ 이다. 실수 $\xi$ 에서 두 변환은 모두 유계이고 $\vert\xi\vert\to\infty$ 에서 $0$ 으로 간다.

두 식은 $\xi$ 자리에 복소수 $\zeta$ 를 넣어도 뜻이 있다. $\zeta=i\eta$ 를 넣으면 다음이 나온다.

$$
\hat f(i\eta)=\frac{\sinh(2\pi\eta)}{\pi\eta},\qquad \hat g(i\eta)=e^{\pi\eta^2}
$$

$\hat f(i\eta)$ 는 $\vert\eta\vert$ 가 커지면 대략 $e^{2\pi\vert\eta\vert}$ 의 속도로 커지고, $\hat g(i\eta)$ 는 어떤 지수함수보다도 빨리 커진다. 사각 펄스 쪽의 지수 $2\pi$ 는 구간 $\lbrack -1,1\rbrack$ 의 반지름 $1$ 에 $2\pi$ 를 곱한 값이다.

이 차이는 정의식에서 바로 나온다. $\hat f(\zeta)=\int_{-1}^{1}e^{-2\pi i\zeta x}\thinspace dx$ 에서 $\vert e^{-2\pi i\zeta x}\vert=e^{2\pi x\thinspace\mathrm{Im}\thinspace\zeta}$ 이고, $x$ 가 $\lbrack -1,1\rbrack$ 안에만 있으므로 이 값은 $e^{2\pi\vert\mathrm{Im}\thinspace\zeta\vert}$ 이하다. Paley–Wiener 정리는 이 관찰의 역, 곧 변환이 이 속도 이하로만 커지면 원래 함수가 구간 밖에서 $0$ 이라는 것도 성립한다고 말한다.

# 정의

복소평면 전체에서 정칙인 함수를 **전해석함수(entire function)** 라 한다. 전해석함수 $F$ 가 어떤 상수 $C$ 와 $\sigma\ge 0$ 에 대해 다음을 만족하면 $F$ 를 **지수형 $\sigma$ 이하(exponential type at most σ)** 라 한다.

$$
\vert F(\zeta)\vert\le Ce^{\sigma\vert\zeta\vert}\qquad(\zeta\in\mathbb C)
$$

직관 절의 $\hat f(\zeta)=\sin(2\pi\zeta)/(\pi\zeta)$ 는 지수형 $2\pi$ 이하다. $\hat g(\zeta)=e^{-\pi\zeta^2}$ 은 허수축 위에서 $e^{\pi\vert\zeta\vert^2}$ 이므로 어떤 $\sigma$ 에 대해서도 지수형이 아니다.

$f\in L^2(\mathbb R)$ 가 $\lbrack -A,A\rbrack$ 밖에서 거의 어디서나 $0$ 이면 $f$ 의 **지지 집합(support)** 이 $\lbrack -A,A\rbrack$ 에 들어 있다고 한다. 사각 펄스의 지지 집합은 $\lbrack -1,1\rbrack$ 이고, Gauss 함수의 지지 집합은 $\mathbb R$ 전체다.

# 성질

## Paley–Wiener 정리

*정리.* $F\in L^2(\mathbb R)$ 와 $A\gt 0$ 에 대해 다음 둘은 동치다[^1].

1. 지지 집합이 $\lbrack -A,A\rbrack$ 에 들어 있는 $f\in L^2(\mathbb R)$ 가 있어 $F=\hat f$ 다.
2. $F$ 는 지수형 $2\pi A$ 이하인 전해석함수로 확장된다.

*증명의 요지.* 1 에서 2 는 직관 절의 계산이다. $\hat f(\zeta)=\int_{-A}^{A}f(x)e^{-2\pi i\zeta x}\thinspace dx$ 는 적분 안에서 $\zeta$ 로 미분할 수 있어 전해석이고, [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $\vert\hat f(\zeta)\vert\le\sqrt{2A}\thinspace\Vert f\Vert\_2\thinspace e^{2\pi A\vert\mathrm{Im}\thinspace\zeta\vert}$ 다.

2 에서 1 은 두 단계다. 먼저 사분면마다 [Phragmén–Lindelöf 원리](phragmen-lindelof.md)를 써서 지수형 조건과 실수축 위의 $L^2$ 조건을 $\vert F(\xi+i\eta)\vert$ 의 $\xi$ 에 대한 $L^2$ 노름이 $Ce^{2\pi A\vert\eta\vert}$ 이하라는 조건으로 바꾼다. 다음으로 $f(t)=\int F(\xi)e^{2\pi i\xi t}\thinspace d\xi$ 의 적분선을 $\mathrm{Im}\thinspace\xi=\eta$ 로 옮기면 $\vert e^{2\pi i\xi t}\vert=e^{-2\pi\eta t}$ 이므로 $t\gt A$ 에서 크기가 $e^{2\pi\eta(A-t)}$ 에 비례하고, $\eta\to\infty$ 로 보내면 $f(t)=0$ 이다. $t\lt -A$ 는 $\eta\to-\infty$ 로 같다. ∎

## 지지 집합의 크기

정리의 두 조건에서 $A$ 는 같은 수다. 그러므로 $\hat f$ 가 지수형 $\sigma$ 이하인 가장 작은 $\sigma$ 가 $2\pi A$ 이면, $f$ 의 지지 집합을 담는 가장 작은 대칭 구간은 $\lbrack -A,A\rbrack$ 이다. 사각 펄스에서 $\sigma=2\pi$, $A=1$ 이다.

## 대역제한 함수의 판

정리를 역변환 쪽에 쓰면 [표본화 정리](sampling-theorem.md)의 대역제한 함수가 나온다. $\hat f$ 가 $\lbrack -B,B\rbrack$ 밖에서 $0$ 인 $f\in L^2(\mathbb R)$ 전체, 곧 Paley–Wiener 공간 $\mathrm{PW}\_B$ 는 실수축 위에서 $L^2$ 이고 지수형 $2\pi B$ 이하인 전해석함수 전체와 같다. $\mathrm{sinc}(t)=\sin(\pi t)/(\pi t)$ 는 지수형 $\pi$ 이고 $\mathrm{PW}\_{1/2}$ 에 속한다.

## 양쪽 지지 집합이 함께 유한할 수 없음

$f\ne 0$ 의 지지 집합이 유한 구간에 들어 있으면 $\hat f$ 는 $0$ 이 아닌 전해석함수이고, 그 영점은 고립되어 있다. 그러므로 $\hat f$ 는 어떤 구간 위에서도 항등적으로 $0$ 일 수 없고, $f$ 와 $\hat f$ 의 지지 집합이 둘 다 유한 구간에 들어 있는 일은 없다. 분산 대신 지지 집합으로 적은 [불확정성 원리](uncertainty-principle.md)의 판이다.

# 활용

- [표본화 정리](sampling-theorem.md)의 sinc 급수는 $\mathrm{PW}\_B$ 의 함수를 다루고, 위 대역제한 함수의 판에 따라 그 급수는 실수 $t$ 만이 아니라 복소수 $z$ 에서도 함수를 나타낸다.
- $\mathrm{PW}\_B$ 의 함수는 허수축 위에서 $e^{2\pi B\vert y\vert}$ 이하로 커진다. $2\pi B\lt\pi$, 곧 $B\lt 1/2$ 이면 [Carlson 정리](carlson-theorem.md)의 조건이 맞으므로, 음이 아닌 정수에서의 값만으로 $f$ 가 정해진다.
- [Schwartz 분포](schwartz-distributions.md)로 넓힌 Paley–Wiener–Schwartz 정리(Paley–Wiener–Schwartz theorem)는 지지 집합이 콤팩트인 분포의 Fourier 변환을, 다항식 곱 이하로 커지는 지수형 전해석함수로 특징짓는다. 편미분방정식의 기본해를 구성할 때 이 특징짓기를 쓴다.

[^1]: W. Rudin, *Real and Complex Analysis*, 3rd ed., McGraw-Hill, 1987, Theorem 19.3 — Paley–Wiener 정리.

# 연관 문서

## 선수지식

- [Fourier 변환](fourier-transform.md)
- [Phragmén–Lindelöf 원리](phragmen-lindelof.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #complex_analysis #functional_analysis #signal_processing
