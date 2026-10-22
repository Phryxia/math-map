# 파동방정식

# 개요

**파동방정식(wave equation)** 은 미지함수 $u(x,t)$ 에 대한 편미분방정식

$$
\partial_t^2u=c^2\Delta u
$$

이다. $x\in\mathbb R^n$ 은 위치, $t$ 는 시간, $c\gt 0$ 은 파동의 속도이고 $\Delta=\sum_i\partial_{x_i}^2$ 는 [Laplace 연산자](laplace-operator.md)다. 줄의 진동, 소리, 전자기파가 이 방정식을 따른다.

[열방정식](heat-equation.md)이 시간에 대한 일계 도함수를 갖는 것과 달리 파동방정식은 이계 도함수를 가져서 성질이 다르다. 신호가 유한한 속도 $c$ 로 전파되고, 에너지가 보존되며, 초기값의 매끄럽지 않은 부분이 사라지지 않고 이동한다.

# 직관

양 끝이 아주 먼 줄을 생각한다. $u(x,t)$ 는 위치 $x$ 에서 줄의 높이다. 줄의 한 조각이 받는 힘은 그 점의 높이가 양옆의 평균에서 벗어난 정도, 곧 $\partial_x^2u$ 에 비례하고, 힘은 가속도 $\partial_t^2u$ 를 정한다. 그래서 $\partial_t^2u=c^2\partial_x^2u$ 다.

좌표를 $\xi=x-ct$, $\eta=x+ct$ 로 바꾸면 연쇄법칙으로 $\partial_t^2u-c^2\partial_x^2u=-4c^2\partial_\xi\partial_\eta u$ 이므로 방정식은 $\partial_\xi\partial_\eta u=0$ 이 된다. 이 식은 $\partial_\eta u$ 가 $\eta$ 만의 함수라는 것이므로 적분하면 $u=F(\xi)+G(\eta)=F(x-ct)+G(x+ct)$ 다. $F(x-ct)$ 는 모양 $F$ 를 유지한 채 속도 $c$ 로 오른쪽으로 가는 파동이고 $G(x+ct)$ 는 왼쪽으로 가는 파동이다.

줄의 한 곳을 삼각형 모양 $f$ 로 들었다가 정지 상태에서 놓으면 $u(x,0)=f(x)$ 이고 $\partial_tu(x,0)=0$ 이다. 두 조건에서 $F=G=\tfrac12f$ 가 나와 $u=\tfrac12f(x-ct)+\tfrac12f(x+ct)$ 다. 삼각형은 높이가 절반인 삼각형 두 개로 갈라져 양쪽으로 속도 $c$ 로 간다. 삼각형의 꼭짓점처럼 매끄럽지 않은 자리도 그대로 실려 간다.

# 정의

## 초기값 문제

$\mathbb R^n$ 위의 함수 $f,g$ 에 대해

$$
\partial_t^2u=c^2\Delta u,\qquad u(x,0)=f(x),\qquad \partial_tu(x,0)=g(x)
$$

를 만족하는 $u$ 를 찾는 문제를 파동방정식의 초기값 문제라 한다. 방정식이 시간에 대해 이계이므로 초기 위치 $f$ 와 초기 속도 $g$ 를 함께 준다.

## d'Alembert 공식

$n=1$ 이면 해는

$$
u(x,t)=\frac12\bigl(f(x-ct)+f(x+ct)\bigr)+\frac1{2c}\int_{x-ct}^{x+ct}g(s)\thinspace ds
$$

다. 이것을 **d'Alembert 공식(d'Alembert's formula)** 이라 한다. 직관 절의 $F+G$ 꼴에 두 초기조건을 넣으면 나온다.

## 특성선

$n=1$ 에서 직선 $x-ct=$ 상수와 $x+ct=$ 상수를 **특성선(characteristic line)** 이라 한다. $F$ 와 $G$ 의 값은 각 특성선 위에서 일정하다.

# 성질

## 유한 전파 속도

d'Alembert 공식에서 $u(x_0,t_0)$ 은 구간 $\lbrack x_0-ct_0,x_0+ct_0\rbrack$ 위의 초기값에만 의존한다. 이 구간을 점 $(x_0,t_0)$ 의 의존 영역이라 한다. 일반 차원에서도 $u(x_0,t_0)$ 은 공 $\lvert x-x_0\rvert\le ct_0$ 위의 초기값에만 의존한다. 증명은 아래 에너지를 그 공을 꼭짓점으로 한 원뿔 안에서 잰 값이 시간에 대해 증가하지 않음을 보이는 것이다. 초기값이 한 곳에만 있으면 시간 $t$ 에 거리 $ct$ 보다 먼 곳의 해는 $0$ 이다. 열방정식의 무한 전파 속도와 대비된다.

## 에너지 보존

$u$ 가 매끄럽고 $x$ 에서 빠르게 감소하면

$$
E(t)=\frac12\int_{\mathbb R^n}\bigl((\partial_tu)^2+c^2\lvert\nabla u\rvert^2\bigr)\thinspace dx
$$

는 $t$ 에 무관하다. $E'(t)=\int\bigl(\partial_tu\thinspace\partial_t^2u+c^2\nabla u\cdot\nabla\partial_tu\bigr)dx$ 의 둘째 항을 부분적분하면 $-\int c^2\Delta u\thinspace\partial_tu\thinspace dx$ 이고 방정식에 따라 첫째 항과 지워진다. 두 해의 차에 적용하면 해의 유일성이 나온다.

## Fourier 변환에 의한 해

[Fourier 변환](fourier-transform.md)을 $x$ 에 대해 취하면 진동수 $\xi$ 마다 [상미분방정식](ordinary-differential-equations.md) $\partial_t^2\hat u=-4\pi^2c^2\lvert\xi\rvert^2\hat u$ 가 되어

$$
\hat u(\xi,t)=\cos(2\pi c\lvert\xi\rvert t)\hat f(\xi)+\frac{\sin(2\pi c\lvert\xi\rvert t)}{2\pi c\lvert\xi\rvert}\hat g(\xi)
$$

이다. 각 진동수의 진폭이 시간에 따라 줄지 않고 진동한다. 열방정식에서 높은 진동수가 $e^{-4\pi^2\kappa\lvert\xi\rvert^2t}$ 로 지워져 해가 매끄러워진 것과 달리, 파동방정식은 초기값보다 해를 매끄럽게 만들지 않는다.

## 3차원의 Kirchhoff 공식

$n=3$ 이면 해는

$$
u(x,t)=\frac{\partial}{\partial t}\Bigl(t\thinspace M_{ct}f(x)\Bigr)+t\thinspace M_{ct}g(x)
$$

이다. $M_rh(x)$ 는 $x$ 를 중심으로 한 반지름 $r$ 인 구면 위에서 $h$ 의 평균이다. 이것이 Kirchhoff 공식(Kirchhoff's formula)이다. 해는 공 전체가 아니라 구면 $\lvert y-x\rvert=ct$ 위의 초기값에만 의존하므로, 한 점에서 낸 소리는 시간 $t$ 에 반지름 $ct$ 인 구면에만 있고 지나간 뒤에는 남지 않는다. 이것을 Huygens 원리(Huygens' principle)라 하고 홀수 차원 $n\ge 3$ 에서 성립한다. $n=2$ 에서는 해가 원판 전체의 초기값에 의존하므로 성립하지 않는다.

## 유계 구간과 고유진동

양 끝이 고정된 길이 $\pi$ 인 줄, 곧 $u(0,t)=u(\pi,t)=0$ 이면 변수분리로

$$
u(x,t)=\sum_{k\ge 1}\bigl(a_k\cos(ckt)+b_k\sin(ckt)\bigr)\sin kx
$$

를 얻는다. $\sin kx$ 는 $k$ 번째 고유진동의 모양이고 진동수는 $ck$ 로 기본진동수의 정수배다. 계수는 $f$ 와 $g$ 의 [Fourier 급수](fourier-series.md)의 사인 계수에서 정해진다. 공간 쪽에 남는 고윳값 문제가 [Sturm–Liouville 이론](sturm-liouville.md)의 원형이다.

# 활용

- [Bessel 함수](bessel-functions.md)는 원판 모양의 북에서 파동방정식을 극좌표로 변수분리할 때 반지름 방향의 고유함수로 나온다.
- [비유계 작용소](unbounded-operators.md)의 함수해석으로 자기수반 작용소 $A=-c^2\Delta$ 에 대해 해를 $\cos(t\sqrt A)f+\sin(t\sqrt A)A^{-1/2}g$ 로 쓴다. 영역의 모양과 경계조건은 $A$ 의 정의역에 들어간다.
- Maxwell 방정식(Maxwell's equations)에서 전기장과 자기장의 각 성분은 진공에서 빛의 속도를 $c$ 로 하는 파동방정식을 만족한다.
- 다양체 위의 파동방정식은 Laplace–Beltrami 연산자로 쓰고, 그 고유진동수로 다양체의 모양을 얼마나 정할 수 있는지가 "북의 모양을 들을 수 있는가" 라는 Kac 의 문제다.

# 연관 문서

## 선수지식

- [Fourier 변환](fourier-transform.md)
- [Laplace 연산자](laplace-operator.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #differential_geometry
