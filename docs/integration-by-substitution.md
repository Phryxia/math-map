# 치환적분

# 개요

**치환적분(integration by substitution)** 은 적분변수를 다른 변수의 함수로 바꾸어 적분을 계산하는 방법이다. $\int_0^1 2x\cos(x^2)\thinspace dx$ 는 $\cos(x^2)$ 의 원시함수가 바로 보이지 않아 그대로는 계산하기 어렵다. 치환적분은 $u=x^2$ 으로 바꾸어 $2x\thinspace dx$ 를 $du$ 로 만들고, 적분을 $\int_0^1\cos u\thinspace du=\sin 1$ 로 바꾼다.

# 직관

$\lbrack 0,1\rbrack$ 을 잘게 자르고 조각 $\lbrack x,x+\Delta x\rbrack$ 가 $u=x^2$ 으로 어디로 가는지 본다. 조각은 $\lbrack x^2,(x+\Delta x)^2\rbrack$ 로 가고, 그 길이는 거의 $2x\Delta x$ 다. 조각이 $2x$ 배로 늘어난다.

그러면 원래 적분의 한 조각 $\cos(x^2)\cdot 2x\Delta x$ 는 $u$ 쪽의 조각 길이 $\Delta u\approx 2x\Delta x$ 에 높이 $\cos u$ 를 곱한 것이다. 조각을 전부 더하면 $u$ 가 $0$ 부터 $1$ 까지 가는 동안의 $\cos u\thinspace\Delta u$ 의 합이 되고, 극한은 $\int_0^1\cos u\thinspace du$ 다.

같은 결과를 [연쇄법칙](chain-rule.md)으로도 얻는다. $\sin(x^2)$ 을 미분하면 $\cos(x^2)\cdot 2x$ 이므로 피적분함수는 $\sin(x^2)$ 의 도함수이고, [미적분학의 기본 정리](fundamental-calculus.md)로 적분값은 $\sin 1-\sin 0=\sin 1$ 이다.

변수가 둘이면 작은 정사각형이 평행사변형으로 옮겨지고, 늘어나는 배율은 넓이의 배율이다. 그 배율이 미분의 [행렬식](determinants.md)이다.

# 정의

## 한 변수

치환적분은 다음 공식이다. $g$ 가 $\lbrack a,b\rbrack$ 에서 연속미분가능하고 $f$ 가 $g(\lbrack a,b\rbrack)$ 에서 연속이면 다음이 성립한다.

$$
\int_a^b f\bigl(g(x)\bigr)g'(x)\thinspace dx=\int_{g(a)}^{g(b)}f(u)\thinspace du
$$

직관 절의 예는 $g(x)=x^2$, $f(u)=\cos u$, $\lbrack a,b\rbrack=\lbrack 0,1\rbrack$ 인 경우다.

## 여러 변수

$U$, $V$ 가 $\mathbb R^n$ 의 열린 집합이고 $\varphi\colon U\to V$ 가 연속미분가능한 전단사이며 역사상도 연속미분가능하다고 한다. $V$ 에서 적분 가능한 $f$ 에 대해 다음이 성립한다.

$$
\int_V f(y)\thinspace dy=\int_U f\bigl(\varphi(x)\bigr)\thinspace\bigl\vert\det D\varphi(x)\bigr\vert\thinspace dx
$$

$D\varphi(x)$ 는 $\varphi$ 의 Jacobi 행렬(Jacobian matrix)이고, $\vert\det D\varphi(x)\vert$ 는 $x$ 근처의 작은 상자가 옮겨질 때 부피가 늘어나는 배율이다[^1]. $n=1$ 이면 $\vert g'(x)\vert$ 가 직관 절의 배율 $2x$ 다.

극좌표 $\varphi(r,\theta)=(r\cos\theta,r\sin\theta)$ 에서 다음이 나온다.

$$
\det D\varphi=\det\begin{pmatrix}\cos\theta&-r\sin\theta\cr\sin\theta&r\cos\theta\end{pmatrix}=r
$$

반지름 $r$ 근처의 각 조각은 원점에서 멀수록 넓어지고, 그 배율이 $r$ 이다.

# 성질

## 증명

한 변수. $F$ 를 $f$ 의 원시함수라 하면 연쇄법칙으로 $(F\circ g)'=f(g(x))g'(x)$ 이다. 좌변의 적분은 $F(g(b))-F(g(a))$ 이고, 이것이 우변의 적분이다.

여러 변수. 직사각형 위의 적분으로 줄이고, 작은 상자에서 $\varphi$ 를 미분 $D\varphi(x)$ 로 근사한다. 선형사상은 상자의 부피를 $\vert\det\vert$ 배로 바꾸므로 Riemann 합의 각 항이 그 배율만큼 늘어난다. 근사의 오차가 상자 크기보다 빨리 줄어드는 것을 보이는 데 미분의 균등한 연속성을 쓴다[^1].

## 방향과 절댓값

한 변수 공식에는 절댓값이 없다. $g$ 가 감소하면 $g(a)\gt g(b)$ 여서 우변의 적분 구간이 거꾸로 놓이고, 그 부호가 $g'\lt 0$ 의 부호를 지운다. $g(x)=-x$ 이면 다음이 성립한다.

$$
\int_0^1 f(-x)\cdot(-1)\thinspace dx=\int_0^{-1}f(u)\thinspace du=-\int_{-1}^0 f(u)\thinspace du
$$

여러 변수에서는 적분하는 곳을 구간의 끝점이 아니라 집합 $U$, $V$ 로 주므로 방향이 없고, 그래서 $\vert\det D\varphi\vert$ 를 쓴다. 방향을 넣어 절댓값 없이 쓴 것이 [미분형식](differential-forms.md)의 적분이다.

## Gauss 적분

$I=\int_{-\infty}^\infty e^{-x^2}\thinspace dx$ 는 원시함수를 초등함수로 쓸 수 없다. $I^2$ 을 평면 위의 적분으로 쓰고 극좌표로 바꾸면 배율 $r$ 덕분에 계산된다.

$$
I^2=\int_{\mathbb R^2}e^{-(x^2+y^2)}\thinspace dx\thinspace dy=\int_0^{2\pi}\int_0^\infty e^{-r^2}r\thinspace dr\thinspace d\theta=2\pi\cdot\frac12=\pi
$$

안쪽 적분은 $u=r^2$ 인 한 변수 치환적분이다. 그러므로 $I=\sqrt\pi$ 이고, 이것이 [정규분포](normal-distribution.md)의 밀도에 $1/\sqrt{2\pi}$ 가 붙는 이유다.

## 단사가 아닌 사상

$\varphi$ 가 단사가 아니면 $V$ 의 점마다 그 점으로 가는 $U$ 의 점의 개수를 센다. 우변은 $\int_V f(y)N(y)\thinspace dy$ 가 되고, $N(y)$ 는 $\varphi^{-1}(y)$ 의 원소 수다. 차원이 다른 사상까지 넓힌 것이 [면적공식](area-formula.md)이다.

# 활용

- [확률밀도](probability-density.md)의 변환. $Y=g(X)$ 이고 $g$ 가 가역이면 $Y$ 의 밀도는 $\rho\_X(g^{-1}(y))$ 에 $g^{-1}$ 의 Jacobi 행렬식의 절댓값을 곱한 것이다. 정규화 흐름 같은 생성 모형이 이 식으로 우도를 계산한다.
- [상측도](pushforward-measure.md)의 적분 공식. 가측사상으로 옮긴 측도에 대한 적분을 원래 측도의 적분으로 쓰는 공식이고, 위의 여러 변수 공식은 상측도가 Lebesgue 측도에 대해 밀도 $1/\vert\det D\varphi(\varphi^{-1}(y))\vert$ 를 갖는 경우다.
- 대칭이 있는 적분. 원판, 구, 원기둥 위의 적분을 극좌표, 구면좌표, 원기둥좌표로 바꾸어 계산한다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, Theorem 6.19, Theorem 10.9.

# 연관 문서

## 선수지식

- [미적분학의 기본 정리](fundamental-calculus.md)
- [중적분](multiple-integral.md)
- [행렬식](determinants.md)

## 더 알아보기

- [발산 정리](divergence-theorem.md)

#analysis #linear_algebra #measure_theory
