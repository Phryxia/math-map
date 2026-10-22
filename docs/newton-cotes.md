# Newton–Cotes 공식

# 개요

**Newton–Cotes 공식(Newton–Cotes formula)** 은 구간 $\lbrack a,b\rbrack$ 의 등간격 점에서 피적분함수를 [다항식 보간](polynomial-interpolation.md)한 뒤 그 다항식을 적분해 $\int_a^bf$ 의 근삿값을 얻는 수치적분 공식이다. 점이 $n+1$ 개이면 근삿값은 함숫값의 가중합 $\sum_iw_if(x_i)$ 이고, 차수 $n$ 이하의 다항식에서는 정확하다. 점 두 개가 사다리꼴 규칙, 세 개가 Simpson 규칙이다.

# 직관

$\int_0^1x^2\thinspace dx=1/3$ 을 함숫값 몇 개로 어림한다. 양 끝 값 $f(0)=0$, $f(1)=1$ 을 지나는 직선 아래 넓이는 $1/2$ 이다. 직선이 포물선 위에 있으므로 $1/6$ 만큼 크다.

가운데 값 $f(1/2)=1/4$ 를 더해 세 점을 지나는 이차 다항식을 쓴다. 피적분함수가 이차 다항식이므로 보간 다항식이 $x^2$ 자신이고 적분이 정확히 $1/3$ 이다. 세 점의 Lagrange 기저 다항식을 $\lbrack 0,1\rbrack$ 에서 적분하면 $1/6$, $4/6$, $1/6$ 이 나오고, 근삿값은 $\frac16\cdot 0+\frac46\cdot\frac14+\frac16\cdot 1=\frac13$ 이다.

# 정의

$x_i=a+ih$ $(h=(b-a)/n,\ i=0,\dots,n)$ 이라 하고 $\ell_i$ 를 이 점들의 Lagrange 기저 다항식이라 한다. 닫힌 Newton–Cotes 공식은

$$
Q_n(f)=\sum_{i=0}^nw_if(x_i),\qquad w_i=\int_a^b\ell_i(x)\thinspace dx
$$

이다. $n=1$ 이 **사다리꼴 규칙(trapezoidal rule)** $\frac{b-a}{2}\bigl(f(a)+f(b)\bigr)$ 이고, $n=2$ 가 **Simpson 규칙(Simpson's rule)** $\frac{b-a}{6}\bigl(f(a)+4f(\frac{a+b}2)+f(b)\bigr)$ 이다.

구간을 길이 $h$ 인 $N$ 칸으로 나눠 칸마다 같은 공식을 쓰고 더한 것을 **복합 규칙(composite rule)** 이라 한다.

# 성질

## 오차

다항식 보간의 오차 공식을 적분하면 다음이 나온다. 각 식에서 $\xi$ 는 $(a,b)$ 의 어떤 점이다.

$$
\int_a^bf-\frac{b-a}{2}\bigl(f(a)+f(b)\bigr)=-\frac{(b-a)^3}{12}f^{\prime\prime}(\xi)
$$

$$
\int_a^bf-\frac{b-a}{6}\Bigl(f(a)+4f\bigl(\tfrac{a+b}2\bigr)+f(b)\Bigr)=-\frac{(b-a)^5}{2880}f^{(4)}(\xi)
$$

가운데 점에 대해 대칭인 삼차 항 $(x-\frac{a+b}2)^3$ 은 적분과 가중합이 모두 $0$ 이므로, Simpson 규칙은 점이 셋인데 삼차 다항식에서도 정확하다. $n$ 이 짝수인 닫힌 공식은 모두 차수 $n+1$ 까지 정확하다.

## 복합 규칙의 수렴

칸 길이 $h$ 의 복합 사다리꼴 규칙의 오차는 $-\frac{(b-a)h^2}{12}f^{\prime\prime}(\xi)$ 이고, 복합 Simpson 규칙의 오차는 $-\frac{(b-a)h^4}{180}f^{(4)}(\xi)$ 이다. 여기서 Simpson 의 $h$ 는 세 점을 쓰는 칸 하나의 절반이다. 칸마다의 오차를 더한 뒤 중간값 정리로 $\xi$ 하나로 모은다.

## 높은 차수의 불안정

$n=8$ 의 닫힌 공식부터 음의 가중치가 나타나고, $n\to\infty$ 에서 $\sum_i\vert w_i\vert$ 가 무한히 커진다. 함숫값에 $\delta$ 만큼의 오차가 있으면 근삿값의 오차는 $\delta\sum_i\vert w_i\vert$ 까지 커질 수 있다. 차수를 올리는 대신 복합 규칙을 쓰거나, 점을 [직교다항식](orthogonal-polynomials.md)의 근으로 고르는 [Gauss 구적](gaussian-quadrature.md)을 쓴다.

## Romberg 적분

[Euler–Maclaurin 공식](euler-maclaurin.md)으로 복합 사다리꼴 규칙의 오차는 $f$ 가 매끄러우면 $c_1h^2+c_2h^4+\cdots$ 꼴로 전개된다. 칸 길이 $h$ 와 $h/2$ 의 값 $T(h)$, $T(h/2)$ 로 $\frac{4T(h/2)-T(h)}{3}$ 를 만들면 $h^2$ 항이 지워지고, 이것은 복합 Simpson 규칙과 같다. 이 소거를 되풀이하는 것이 [Richardson 외삽](richardson-extrapolation.md)을 쓴 Romberg 적분(Romberg integration)이다.

# 활용

- [Nyström 법](nystrom-method.md)은 적분방정식의 적분을 구적 공식으로 바꾸어 연립방정식으로 푼다. 복합 사다리꼴 규칙과 Simpson 규칙이 그 구적 공식으로 쓰인다.
- 주기함수를 한 주기에서 적분하면 Euler–Maclaurin 공식의 끝점 항이 모두 지워져, 복합 사다리꼴 규칙의 오차가 $h$ 의 모든 거듭제곱보다 빨리 작아진다.

# 연관 문서

## 선수지식

- [다항식 보간](polynomial-interpolation.md)
- [Riemann 적분](riemann-integral.md)

## 더 알아보기

- [Richardson 외삽](richardson-extrapolation.md)

#analysis #algorithms
