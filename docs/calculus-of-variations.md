# 변분법

# 개요

변분법은 함수에 수를 대응시키는 범함수의 극값을 찾는 방법이다. 곡선의 길이, 곡선 아래 넓이, 경로를 따라 흐른 시간처럼 곡선 전체가 정해야 값이 나오는 양이 대상이다.

극값 조건은 Euler–Lagrange 방정식이라는 [미분방정식](ordinary-differential-equations.md)으로 나온다. 변수 하나의 미분에서 $f'(x)=0$ 이 하던 일을 범함수에서 하는 것이 이 방정식이다.

# 직관

두 점 $(0,0)$ 과 $(1,1)$ 을 잇는 곡선 가운데 길이가 가장 짧은 것을 찾는다. 곡선을 $y(x)$ 로 쓰면 길이는 다음 적분이다.

$$
L\lbrack y\rbrack=\int_0^1\sqrt{1+y'(x)^2}\thinspace dx
$$

미분에서 극값을 찾던 방법을 옮겨 본다. 최소를 주는 $y$ 가 있다고 하고 양 끝에서 $0$ 인 함수 $\eta$ 를 잡아 $y+\varepsilon\eta$ 를 넣으면 $L$ 은 $\varepsilon$ 의 함수가 된다. $y$ 가 최소이면 이 함수가 $\varepsilon=0$ 에서 최소이므로 미분이 $0$ 이다.

$$
\frac{d}{d\varepsilon}\Big|\_{\varepsilon=0}L\lbrack y+\varepsilon\eta\rbrack=\int_0^1\frac{y'\eta'}{\sqrt{1+y'^2}}\thinspace dx=0
$$

부분적분으로 $\eta'$ 를 $\eta$ 로 바꾸면 경계항은 $\eta$ 가 양 끝에서 $0$ 이라 사라지고 다음이 남는다.

$$
\int_0^1\eta\thinspace\frac{d}{dx}\Bigl(\frac{y'}{\sqrt{1+y'^2}}\Bigr)dx=0
$$

이 식이 모든 $\eta$ 에서 성립하므로 괄호 안의 도함수가 $0$ 이고, $y'/\sqrt{1+y'^2}$ 이 상수다. 그러면 $y'$ 도 상수이고 곡선은 직선이다.

계산이 한 일은 두 가지다. 함수를 흔들어 일변수 함수로 바꾸었고, 흔드는 방향 $\eta$ 가 임의라는 점에서 적분식을 점별 방정식으로 바꾸었다.

# 정의

## 범함수

구간 $\lbrack a,b\rbrack$ 에서 정의된 함수들의 모임 위에 다음 꼴로 주어지는 대응을 **범함수**라 한다.

$$
J\lbrack y\rbrack=\int_a^b F\bigl(x,y(x),y'(x)\bigr)dx
$$

$F$ 를 **라그랑지안**이라 한다. 경계조건 $y(a)=\alpha$ , $y(b)=\beta$ 를 만족하는 $y$ 들이 정의역이다.

## 변분

양 끝에서 $0$ 인 함수 $\eta$ 에 대해 $J\lbrack y+\varepsilon\eta\rbrack$ 을 $\varepsilon$ 으로 미분한 $\varepsilon=0$ 에서의 값을 $J$ 의 **일차 변분**이라 하고 $\delta J\lbrack y;\eta\rbrack$ 로 쓴다. 모든 $\eta$ 에서 $\delta J=0$ 인 $y$ 를 **정류 함수**라 한다.

# 성질

## Euler–Lagrange 방정식

**정리.** $F$ 가 두 번 연속미분가능하고 $y$ 가 $J$ 의 정류 함수이면 다음이 성립한다.

$$
\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}=0
$$

**증명의 요지.** 일차 변분을 계산하고 $\eta'$ 가 든 항을 부분적분한다. 경계항이 사라지고

$$
\int_a^b\eta\Bigl(\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}\Bigr)dx=0
$$

이 모든 $\eta$ 에서 성립한다. 변분법의 기본 보조정리에 의해 괄호 안이 항등적으로 $0$ 이다.

**보조정리 (변분법의 기본 보조정리).** 연속함수 $g$ 가 양 끝에서 $0$ 인 모든 매끄러운 $\eta$ 에 대해 $\int_a^b g\eta=0$ 을 만족하면 $g\equiv0$ 이다. 어떤 점에서 $g\gt 0$ 이면 그 점 주위의 작은 구간에서만 양수인 $\eta$ 를 잡아 적분을 양수로 만들 수 있다.

## Beltrami 항등식

$F$ 가 $x$ 를 명시적으로 포함하지 않으면 Euler–Lagrange 방정식이 한 번 적분된다.

$$
F-y'\frac{\partial F}{\partial y'}=\text{상수}
$$

$\frac{d}{dx}$ 를 좌변에 적용하고 Euler–Lagrange 방정식을 대입하면 $0$ 이 나온다. 최단강하선 문제와 현수선 문제가 이 항등식으로 풀린다.

## 구속조건과 Lagrange 곱수

부가조건 $\int_a^bG(x,y,y')dx=c$ 아래에서 $J$ 의 극값을 찾는 문제는 $F-\lambda G$ 의 Euler–Lagrange 방정식으로 바뀐다. 유한차원의 [Lagrange 쌍대성](lagrange-duality.md)에서 쓰는 곱수와 같은 역할이다.

길이를 고정하고 둘러싼 넓이를 최대로 하는 곡선이 원이라는 등주부등식이 이 형태의 문제다.

## 이차 변분과 최소의 판정

$\delta J=0$ 은 극값의 필요조건일 뿐이다. 이차 변분의 부호가 추가로 필요하고, Legendre 조건 $\partial^2F/\partial y'^2\ge0$ 과 켤레점이 구간 안에 없다는 Jacobi 조건이 충분조건을 이룬다.

정류 함수가 최소를 주지 않는 예가 있다. Weierstrass 가 든 $J\lbrack y\rbrack=\int_{-1}^{1}x^2y'^2dx$ 는 하한 $0$ 에 다가가는 함수열이 있지만 경계조건을 만족하는 매끄러운 최소점이 없다.

## 직접법

Euler–Lagrange 방정식을 풀지 않고 최소점의 존재를 먼저 보이는 방법이다. 최소화열을 잡고, 범함수가 아래로 유계이며 약하게 하반연속이고 정의역이 약콤팩트이면 극한이 최소점이다. 이 논증은 [Banach 공간](banach-spaces.md)의 약수렴을 쓴다.

# 활용

- **고전역학.** 작용 $\int(T-V)dt$ 의 정류 조건이 Newton 방정식과 같다. 좌표 선택에 무관한 형태라 구속이 있는 계에서 방정식을 세우기 쉽다.
- **기하.** 곡면 위 두 점을 잇는 최단 곡선의 방정식이 측지선 방정식이다([Riemann 계량과 측지선](riemannian-metrics.md)).
- **최소곡면.** 넓이 범함수의 Euler–Lagrange 방정식이 평균곡률 $0$ 조건이고, 비눗막이 그 해다([곡률](curvature.md)).
- **편미분방정식.** Dirichlet 에너지 $\int\lvert\nabla u\rvert^2$ 의 정류 조건이 Laplace 방정식이다([Dirichlet 문제](dirichlet-problem.md)).

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #optimization
