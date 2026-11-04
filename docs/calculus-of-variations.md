# 변분법

# 개요

**변분법(calculus of variations)** 은 함수에 수를 대응시키는 범함수의 극값을 찾는 방법이다. 두 점 $(0,0)$ 과 $(1,1)$ 을 잇는 곡선 가운데 가장 짧은 것을 찾으려면 곡선 전체가 정해져야 길이가 나오므로, 변수 하나의 함수처럼 $f'(x)=0$ 을 풀 수 없다. 변분법은 곡선을 조금 흔들었을 때 값이 변하지 않을 조건을 Euler–Lagrange 방정식이라는 [미분방정식](ordinary-differential-equations.md)으로 바꿔 극값을 찾는다.

# 직관

두 점 $(0,0)$ 과 $(1,1)$ 을 잇는 곡선 가운데 길이가 가장 짧은 것을 찾는다. 곡선을 $y(x)$ 로 쓰면 길이는 다음 적분이다.

$$
L\lbrack y\rbrack=\int_0^1\sqrt{1+y'(x)^2}\thinspace dx
$$

미분에서 극값을 찾던 방법을 옮긴다. 최소를 주는 $y$ 가 있다고 하고 양 끝에서 $0$ 인 함수 $\eta$ 를 잡아 $y+\varepsilon\eta$ 를 넣으면 $L$ 은 $\varepsilon$ 의 함수가 되고, $y$ 가 최소이면 그 함수의 미분이 $\varepsilon=0$ 에서 $0$ 이다. 부분적분으로 $\eta'$ 를 $\eta$ 로 바꾸면 경계항은 $\eta$ 가 양 끝에서 $0$ 이라 사라진다. 남은 식이 모든 $\eta$ 에서 성립하므로 괄호 안의 도함수가 $0$ 이고 $y'/\sqrt{1+y'^2}$ 이 상수이며, 그러면 $y'$ 도 상수이고 곡선은 직선이다.

$$
\frac{d}{d\varepsilon}\Big\vert\_{\varepsilon=0}L\lbrack y+\varepsilon\eta\rbrack=\int_0^1\frac{y'\eta'}{\sqrt{1+y'^2}}\thinspace dx=0
$$

$$
\int_0^1\eta\thinspace\frac{d}{dx}\Bigl(\frac{y'}{\sqrt{1+y'^2}}\Bigr)dx=0
$$

# 정의

## 범함수

구간 $\lbrack a,b\rbrack$ 에서 정의된 함수들의 모임 위에 다음 꼴로 주어지는 대응을 **범함수(functional)** 라 한다.

$$
J\lbrack y\rbrack=\int_a^b F\bigl(x,y(x),y'(x)\bigr)dx
$$

$F$ 를 **라그랑지안(Lagrangian)** 이라 한다. 경계조건 $y(a)=\alpha$ , $y(b)=\beta$ 를 만족하는 $y$ 들이 정의역이다. 직관 절의 길이 $L$ 은 $F(x,y,y')=\sqrt{1+y'^2}$, $\alpha=0$, $\beta=1$ 인 범함수이고, $y(x)=x$ 이면 $L\lbrack y\rbrack=\sqrt2$, $y(x)=x^2$ 이면 $L\lbrack y\rbrack\approx 1.479$ 다.

## 변분

양 끝에서 $0$ 인 함수 $\eta$ 에 대해 $J\lbrack y+\varepsilon\eta\rbrack$ 을 $\varepsilon$ 으로 미분한 $\varepsilon=0$ 에서의 값을 $J$ 의 **일차 변분(first variation)** 이라 하고 $\delta J\lbrack y;\eta\rbrack$ 로 쓴다. 모든 $\eta$ 에서 $\delta J=0$ 인 $y$ 를 **정류 함수(stationary function)** 라 한다. 길이 $L$ 에서 $y(x)=x$ 이면 $\delta L\lbrack y;\eta\rbrack=\int_0^1\eta'/\sqrt2\thinspace dx=(\eta(1)-\eta(0))/\sqrt2=0$ 이므로 직선은 정류 함수다.

# 성질

## Euler–Lagrange 방정식

$F$ 가 두 번 연속미분가능하고 $y$ 가 $J$ 의 정류 함수이면 다음 Euler–Lagrange 방정식(Euler–Lagrange equation)이 성립한다.

$$
\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}=0
$$

증명의 요지. 일차 변분을 계산하고 $\eta'$ 가 든 항을 부분적분한다. 경계항이 사라지고

$$
\int_a^b\eta\Bigl(\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}\Bigr)dx=0
$$

이 모든 $\eta$ 에서 성립한다. 변분법의 [기본 보조정리](fundamental-lemma.md)로 괄호 안이 항등적으로 $0$ 이다.

기본 보조정리의 진술은 다음이다. [연속함수](continuity.md) $g$ 가 양 끝에서 $0$ 인 모든 매끄러운 $\eta$ 에 대해 $\int_a^b g\eta=0$ 을 만족하면 $g\equiv0$ 이다. 어떤 점에서 $g\gt 0$ 이면 그 점 주위의 작은 구간에서만 양수인 $\eta$ 를 잡아 적분을 양수로 만들 수 있다.

## Beltrami 항등식

$F$ 가 $x$ 를 명시적으로 포함하지 않으면 Euler–Lagrange 방정식이 한 번 적분되어 다음 Beltrami 항등식(Beltrami identity)이 된다.

$$
F-y'\frac{\partial F}{\partial y'}=\text{상수}
$$

$\frac{d}{dx}$ 를 좌변에 적용하고 Euler–Lagrange 방정식을 대입하면 $0$ 이 나온다. [최단강하선 문제](brachistochrone.md)와 [현수선](catenary.md) 문제가 이 항등식으로 풀린다.

## 구속조건과 Lagrange 곱수

부가조건 $\int_a^bG(x,y,y')dx=c$ 아래에서 $J$ 의 극값을 찾는 문제는 $F-\lambda G$ 의 Euler–Lagrange 방정식으로 바뀐다. $\lambda$ 를 Lagrange 곱수(Lagrange multiplier)라 한다. 유한차원의 [Lagrange 쌍대성](lagrange-duality.md)에서 쓰는 곱수와 같다.

길이를 고정하고 둘러싼 넓이를 최대로 하는 곡선이 원이라는 [등주부등식](isoperimetric-inequality.md)이 이 형태의 문제다.

## 이차 변분과 최소의 판정

$\delta J=0$ 은 극값의 필요조건일 뿐이다. 이차 변분의 부호가 추가로 필요하고, Legendre 조건(Legendre condition) $\partial^2F/\partial y'^2\ge0$ 과 켤레점(conjugate point)이 구간 안에 없다는 Jacobi 조건(Jacobi condition)이 충분조건을 이룬다.

정류 함수가 최소를 주지 않는 예가 있다. Weierstrass 가 든 $J\lbrack y\rbrack=\int_{-1}^{1}x^2y'^2dx$ 는 하한 $0$ 에 다가가는 함수열이 있지만 경계조건을 만족하는 매끄러운 최소점이 없다.

## 직접법

[변분법의 직접법](direct-method.md)은 Euler–Lagrange 방정식을 풀지 않고 최소점의 존재를 먼저 보이는 방법이다. 최소화열을 잡고, 범함수가 아래로 유계이며 약하게 하반연속이고 정의역이 약콤팩트이면 극한이 최소점이다. 이 논증은 [Banach 공간](banach-spaces.md)의 약수렴을 쓴다.

# 활용

- 고전역학. 작용(action) $\int(T-V)dt$ 의 정류 조건이 Newton 방정식과 같다. 좌표 선택에 무관한 형태라 구속이 있는 계에서 방정식을 세우기 쉽다. 속도를 운동량으로 바꾸면 같은 운동이 [Hamilton 역학](hamiltonian-mechanics.md)의 1차 방정식계가 된다.
- 기하. 곡면 위 두 점을 잇는 최단 곡선의 방정식이 [측지선](geodesics.md) 방정식이다([Riemann 계량](riemannian-metrics.md)).
- [극소곡면](minimal-surfaces.md). 넓이 범함수의 Euler–Lagrange 방정식이 평균곡률 $0$ 조건이고, 비눗막이 그 해다([곡률](curvature.md)).
- 편미분방정식. Dirichlet 에너지(Dirichlet energy) $\int\lvert\nabla u\rvert^2$ 의 정류 조건이 Laplace 방정식(Laplace equation)이다([Dirichlet 문제](dirichlet-problem.md)).

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)

## 더 알아보기

### 방법과 구조

- [변분법의 직접법](direct-method.md)
- [Hamilton 역학](hamiltonian-mechanics.md)
- [Noether 정리](noether-theorem.md)

### 고전적인 최소화 문제

- [최단강하선 문제](brachistochrone.md)
- [현수선](catenary.md)
- [등주부등식](isoperimetric-inequality.md)
- [극소곡면](minimal-surfaces.md)

#analysis #differential_geometry #optimization
