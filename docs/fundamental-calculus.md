# 미적분학의 기본 정리

# 개요

**미적분학의 기본 정리(fundamental theorem of calculus)** 는 [미분](derivative.md)과 [적분](riemann-integral.md)이 서로의 역이라는 정리다. 곡선 $y=x^2$ 아래 $0$ 부터 $1$ 까지의 넓이를 구간을 잘게 나눠 직사각형 넓이를 더하는 방식으로 구하면 제곱수의 합 공식과 극한이 필요하다. 미분해서 $x^2$ 이 되는 함수 $x^3/3$ 을 찾으면 넓이는 양 끝값의 차 $1/3-0=1/3$ 이다. 이 정리는 넓이를 쌓아 가는 함수를 미분하면 원래 함수가 나옴을 보여, 넓이 계산을 미분의 역을 찾는 문제로 바꾼다.

# 직관

곡선 $y=t^2$ 아래 $0$ 부터 $x$ 까지의 넓이를 $F(x)$ 라 한다. $x$ 를 $h$ 만큼 늘리면 새로 쌓이는 넓이는 폭 $h$, 높이 약 $x^2$ 인 띠다. $x=1$, $h=0.1$ 이면 띠의 넓이는 $F(1.1)-F(1)=0.11033$ 이고 $x^2h=0.1$ 과 가깝다. 일반적으로

$$
F(x+h)-F(x)\approx x^2\thinspace h
$$

이고 양변을 $h$ 로 나누어 $h\to 0$ 으로 보내면 $F'(x)=x^2$ 이다. $h=0.1$ 에서 나눈 값은 $1.1033$, $h=0.01$ 에서는 $1.0100$ 으로 $1$ 에 다가간다.

미분해서 $x^2$ 이 되는 함수는 $x^3/3$ 에 상수를 더한 것뿐이다. $F(0)=0$ 이므로 $F(x)=x^3/3$ 이고, 넓이 $F(1)=1/3$ 이 직사각형의 합 없이 나온다.

# 정의

[실수](real-numbers.md) $a\lt b$ 를 고정하고 $f$ 를 $\lbrack a,b\rbrack$ 에서 Riemann 적분 가능한 함수라 하자.

$$
F(x)=\int_a^x f(t)\thinspace dt,\qquad x\in\lbrack a,b\rbrack
$$

를 **누적함수(accumulation function)** 라 한다. $G'=f$ 인 $G$ 를 $f$ 의 **원시함수(antiderivative)** 라 한다.

직관 절의 $f(t)=t^2$, $a=0$ 에서 누적함수는 $F(x)=x^3/3$ 이다. $x^3/3$ 과 $x^3/3+5$ 는 둘 다 $t^2$ 의 원시함수다.

# 성질

## 제1 형태

$f$ 가 $\lbrack a,b\rbrack$ 에서 적분 가능하면 $F$ 는 연속이다. 나아가 $f$ 가 점 $x$ 에서 연속이면 $F$ 는 그 점에서 미분가능하고

$$
F'(x)=f(x)
$$

가 성립한다. 특히 $f$ 가 $\lbrack a,b\rbrack$ 에서 연속이면 $F$ 가 $f$ 의 원시함수다.

증명의 요지. $h\gt 0$ 에 대해

$$
\frac{F(x+h)-F(x)}h=\frac1h\int_x^{x+h}f(t)\thinspace dt
$$

이고 우변은 $\lbrack x, x+h\rbrack$ 에서의 $f$ 의 평균이다. $f$ 가 $x$ 에서 연속이므로 $\vert f(t) - f(x)\vert \lt\varepsilon$ 를 만드는 $\delta$ 를 잡으면 $0 \lt h \lt\delta$ 에서

$$
\left\vert\frac{F(x+h)-F(x)}h-f(x)\right\vert\le\frac1h\int_x^{x+h}\vert f(t)-f(x)\vert\thinspace dt\lt\varepsilon
$$

이다. $h \lt 0$ 에서도 같다. 연속성 없이 적분 가능성만 있으면 $\vert F(x+h)-F(x)\vert \le M\vert h\vert$ 로 $F$ 가 [Lipschitz 사상](lipschitz-maps.md)이라는 것만 얻는다.

## 제2 형태

$f$ 가 $\lbrack a,b\rbrack$ 에서 적분 가능하고, $\lbrack a,b\rbrack$ 에서 연속이며 내부에서 미분가능한 $G$ 가 $G'=f$ 를 만족하면

$$
\int_a^b f(t)\thinspace dt=G(b)-G(a)
$$

이다. 제1 형태와 달리 $f$ 의 연속성을 요구하지 않는다. 두 원시함수는 상수만큼 다르고, 그 상수는 양 끝의 차에서 사라진다.

증명의 요지. $\lbrack a,b\rbrack$ 를 잘게 나누고 각 조각에서 $G(x_i)-G(x_{i-1})$ 를 평균값 정리(mean value theorem)로 $G'(\xi_i)\Delta x_i=f(\xi_i)\Delta x_i$ 로 바꾼다. 좌변의 합은 중간항이 모두 지워져 $G(b)-G(a)$ 가 되고 우변은 Riemann 합이므로, 극한을 취하면 등식이 나온다.

## 연속성 가정의 위치

$\lbrack -1,1\rbrack$ 에서 $f(0) = 1$ 이고 나머지 점에서 $0$ 인 함수는 모든 누적적분이 $0$ 이라 $F \equiv 0$ 이고 $F'(0) = 0 \ne f(0)$ 이다. 적분 가능성만으로는 모든 점에서 $F' = f$ 가 성립하지 않는다.

원시함수가 있다고 해서 $f$ 가 연속인 것도 아니다. $f(x) = 2x \sin(1/x^2) - (2/x)\cos(1/x^2)$ 는 $x = 0$ 근처에서 유계가 아니지만 원시함수 $x^2 \sin(1/x^2)$ 를 갖는다. 도함수가 될 수 있는 함수의 모임은 연속함수보다 넓고, Darboux 성질(Darboux property, 중간값 성질)을 만족한다.

## 정확한 판본

가장 넓은 진술은 [Lebesgue 적분](lebesgue-integral.md)에서 나온다. $F$ 가 $\lbrack a,b\rbrack$ 에서 절대연속(absolutely continuous)인 것과 어떤 $f \in L^1$ 에 대해 $F(x) = F(a) + \int_a^x f$ 로 쓰이는 것이 동치이고, 이때 $F' = f$ 가 거의 어디서나 성립한다.

Cantor 함수(Cantor function)가 절대연속성 가정의 필요성을 보인다. 이 함수는 연속이고 단조증가하며 거의 어디서나 도함수가 $0$ 인데도 $0$ 에서 $1$ 까지 올라간다. $\int_0^1 F' = 0 \ne 1 = F(1) - F(0)$ 이므로 제2 형태가 성립하지 않는다.

## 따름정리

- 치환적분(integration by substitution). $\int f(g(x))g'(x)\thinspace dx = \int f(u)\thinspace du$ 는 연쇄법칙을 거꾸로 쓴 것이다.
- 부분적분(integration by parts). $\int uv' = uv - \int u'v$ 는 곱의 미분법을 거꾸로 쓴 것이다.
- Leibniz 적분 규칙(Leibniz integral rule). 적분 구간의 끝이 변수일 때 다음과 같이 미분한다.

  $$
  \frac{d}{dx} \int_{a(x)}^{b(x)} f = f(b(x))b'(x) - f(a(x))a'(x)
  $$

# 활용

## 적분 계산

분할합의 극한 대신 원시함수를 찾아 양 끝값을 대입한다. 원시함수가 초등함수로 표현되지 않는 경우가 흔하고 $e^{-t^2}$, $\sin(t)/t$, $1/\ln t$ 가 그렇다. Risch 알고리즘(Risch algorithm)이 주어진 초등함수의 원시함수가 초등함수인지 판정하고 존재하면 구성한다. 초등적 표현이 없으면 수치 적분이나 특수함수를 쓴다.

## 적분으로 정의된 함수

오차함수(error function), [감마 함수](gamma-function.md), 로그적분(logarithmic integral), 확률의 누적분포함수는 적분으로 정의된다. 제1 형태가 이들의 도함수를 주므로 정의식을 직접 다루지 않고 근사와 점근 분석을 할 수 있다. 누적분포함수를 미분하면 밀도함수가 되는 관계도 이 정리다.

## 미분방정식과 복소해석

[상미분방정식](ordinary-differential-equations.md)을 푸는 첫 단계는 양변을 적분해 초기조건을 반영한 적분방정식으로 바꾸는 것이고, 이 변환이 기본 정리다. Picard 반복법(Picard iteration)은 그 적분방정식에 [축약사상 고정점 정리](banach-fixed-point.md)를 적용한다.

[정칙함수](holomorphic-functions.md)의 경로적분이 경로에 무관하다는 Cauchy 적분 정리(Cauchy's integral theorem)가 원시함수의 존재에 해당하는 복소판이고, 여기서 Cauchy 적분 공식(Cauchy's integral formula)과 [유수 정리](residue-theorem.md)가 나온다[^1].

[^1]: Jiří Lebl, *Basic Analysis*, The fundamental theorem of calculus. 두 형태의 정리와 증명, 연속성 가정의 역할. https://www.jirka.org/ra/html/sec_ftc.html

# 연관 문서

## 선수지식

- [미분](derivative.md)
- [Riemann 적분](riemann-integral.md)

## 더 알아보기

- [정칙함수](holomorphic-functions.md)
- [상미분방정식](ordinary-differential-equations.md)
- [Green 정리](greens-theorem.md)
- [곡선의 길이](arc-length.md)

#analysis #complex_analysis #theorem
