# Leibniz 적분 규칙

# 개요

**Leibniz 적분 규칙(Leibniz integral rule)** 은 매개변수가 든 적분을 그 매개변수로 미분할 때 미분을 적분 안으로 넣어도 된다는 정리다. $\int_0^1\frac{x-1}{\log x}\thinspace dx$ 는 피적분함수의 원시함수를 초등함수로 적을 수 없어 [미적분학의 기본 정리](fundamental-calculus.md)로 바로 계산되지 않는다. 지수 $1$ 을 매개변수 $t$ 로 바꾼 적분을 $t$ 로 미분하면 적분 안이 $x^t$ 가 되어 계산되고, 그 결과를 $t$ 에 대해 적분하면 원래 값 $\log 2$ 가 나온다.

# 직관

다음 적분을 생각한다.

$$
I(t)=\int_0^1\frac{x^t-1}{\log x}\thinspace dx
$$

$I(1)$ 이 구하려는 값이고 $I(0)=0$ 이다. 피적분함수를 $t$ 로 미분하면 $x^t$ 의 도함수가 $x^t\log x$ 이므로 분모의 $\log x$ 가 지워지고 $x^t$ 가 남는다.

$t$ 에 대한 미분을 적분 안으로 넣을 수 있다면 $I'(t)=\int_0^1x^t\thinspace dx=\frac{1}{t+1}$ 이다. 그러면 $I(1)=I(0)+\int_0^1\frac{dt}{t+1}=\log 2$ 다.

남은 것은 미분을 적분 안으로 넣어도 되느냐는 것이다. 적분은 $x$ 에 대한 극한이고 미분은 $t$ 에 대한 극한이어서, 두 극한의 순서를 바꾸는 일이다. 피적분함수의 $t$ 에 대한 변화율이 $x$ 와 $t$ 에 대해 함께 연속이면 순서를 바꿀 수 있다는 것이 이 규칙이다.

# 정의

Leibniz 적분 규칙은 다음이다. $f$ 와 $\partial f/\partial t$ 가 직사각형 $\lbrack a,b\rbrack\times\lbrack c,d\rbrack$ 에서 [연속](continuity.md)이면 $F(t)=\int_a^bf(x,t)\thinspace dx$ 는 $\lbrack c,d\rbrack$ 에서 미분 가능하고 다음이 성립한다[^1].

$$
F'(t)=\int_a^b\frac{\partial f}{\partial t}(x,t)\thinspace dx
$$

적분 구간의 끝도 $t$ 에 따라 움직이면, $a(t)$ 와 $b(t)$ 가 미분 가능하고 $f$ 가 그 범위에서 같은 조건을 만족할 때 다음이 성립한다.

$$
\frac{d}{dt}\int_{a(t)}^{b(t)}f(x,t)\thinspace dx=f(b(t),t)\thinspace b'(t)-f(a(t),t)\thinspace a'(t)+\int_{a(t)}^{b(t)}\frac{\partial f}{\partial t}(x,t)\thinspace dx
$$

직관 절의 $f(x,t)=(x^t-1)/\log x$ 는 $f(0,t)=0$, $f(1,t)=t$ 로 두면 $0\lt\delta\le t\le 1$ 에서 이 조건을 만족하고, $\partial f/\partial t=x^t$ 다.

# 성질

## 증명의 요지

$t$ 와 $t+h$ 가 $\lbrack c,d\rbrack$ 에 있을 때, [평균값 정리](mean-value-theorem.md)로 $x$ 마다 $0$ 과 $1$ 사이의 $\theta$ 가 있어 다음이 성립한다.

$$
\frac{F(t+h)-F(t)}{h}-\int_a^b\frac{\partial f}{\partial t}(x,t)\thinspace dx=\int_a^b\left(\frac{\partial f}{\partial t}(x,t+\theta h)-\frac{\partial f}{\partial t}(x,t)\right)dx
$$

$\partial f/\partial t$ 는 닫힌 직사각형에서 연속이므로 [균등연속](uniform-continuity.md)이다. $\vert h\vert$ 가 충분히 작으면 괄호 안이 $x$ 에 상관없이 $\varepsilon$ 보다 작고, 우변의 절댓값은 $\varepsilon(b-a)$ 이하다.

구간의 끝이 움직이는 경우는 $G(u,v,t)=\int_u^vf(x,t)\thinspace dx$ 의 세 편미분을 미적분학의 기본 정리와 위 결과로 구한 뒤 [연쇄법칙](chain-rule.md)으로 더한다.

## 직관 절 계산의 완성

$0\lt x\lt 1$ 에서 다음이 성립한다.

$$
\frac{x^t-1}{\log x}=\int_0^tx^s\thinspace ds
$$

따라서 $0\le I(t)\le t$ 이고 $t\to 0$ 에서 $I(t)\to 0$ 이다. $\delta\le t\le 1$ 에서 규칙으로 $I'(t)=1/(t+1)$ 이므로 $I(1)=I(\delta)+\log 2-\log(1+\delta)$ 이고, $\delta\to 0$ 으로 보내면 $I(1)=\log 2$ 다.

## 연속성이 없는 반례

$\lbrack 0,1\rbrack$ 에서 다음 함수를 생각한다.

$$
f(x,t)=\frac{xt^3}{(x^2+t^2)^2},\qquad f(0,0)=0
$$

$F(t)=\int_0^1f(x,t)\thinspace dx=\frac{t}{2(1+t^2)}$ 이므로 $F'(0)=\frac12$ 다. 그러나 $x\gt 0$ 을 고정하면 $f(x,t)$ 는 $t^3$ 에 비례해 $0$ 으로 가므로 $\frac{\partial f}{\partial t}(x,0)=0$ 이고, 그 적분은 $0$ 이다. $\partial f/\partial t$ 가 $(0,0)$ 에서 연속이 아니어서 규칙의 가정이 깨진다.

## Lebesgue 적분판

[Lebesgue 적분](lebesgue-integral.md)에서는 연속성 대신 적분 가능한 함수로 누르는 조건을 쓴다. $x$ 마다 $f(x,\cdot)$ 이 미분 가능하고 적분 가능한 $g$ 가 있어 모든 $t$ 에서 $\vert\partial f/\partial t(x,t)\vert\le g(x)$ 이면, $F'(t)=\int\partial f/\partial t\thinspace dx$ 다. 차분몫이 평균값 정리로 $g$ 에 눌리므로 [지배 수렴 정리](dominated-convergence.md)로 극한과 적분을 바꾼다. 무한 구간의 적분에는 이 판을 쓴다.

# 활용

- [감마 함수](gamma-function.md)의 도함수. $\Gamma(s)=\int_0^\infty x^{s-1}e^{-x}\thinspace dx$ 에 Lebesgue 판을 쓰면 $\Gamma'(s)=\int_0^\infty x^{s-1}e^{-x}\log x\thinspace dx$ 다.
- [적률생성함수](moment-generating-function.md)의 적률. $M(t)=E\lbrack e^{tX}\rbrack$ 를 $t$ 로 $k$ 번 미분해 $t=0$ 을 넣으면 $E\lbrack X^k\rbrack$ 다.
- [Fourier 변환](fourier-transform.md)의 미분 공식. $\hat f(\xi)=\int f(x)e^{-2\pi ix\xi}\thinspace dx$ 를 $\xi$ 로 미분하면 $-2\pi ixf(x)$ 의 변환이 나온다.
- [Duhamel 원리](duhamel-principle.md)의 검증. $u(t)=\int_0^te^{(t-s)A}g(s)\thinspace ds$ 는 위끝이 움직이는 꼴이어서 미분하면 $g(t)+Au(t)$ 다.
- [변분법](calculus-of-variations.md)의 Euler–Lagrange 방정식. 범함수 $J(y+\varepsilon\eta)$ 를 $\varepsilon$ 으로 미분할 때 미분을 적분 안으로 넣는다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, Theorem 9.42.

# 연관 문서

## 선수지식

- [미적분학의 기본 정리](fundamental-calculus.md)
- [균등연속](uniform-continuity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #probability
