# 수송 방정식

# 개요

**수송 방정식(transport equation)** 은 흐르는 물에 실린 잉크의 농도처럼, 정해진 속도로 실려 가는 양을 적는 1계 편미분방정식 $u_t+b\cdot\nabla u=0$ 이다. 속도 $1$ 로 흐르는 강의 한 구간에 잉크를 풀면 잉크는 하류로 내려가고, 시각 $t$ 에 지점 $x$ 의 농도가 얼마인지 묻게 된다. 이 방정식은 물 입자가 지나가는 경로 위에서 $u$ 가 변하지 않는다는 것으로 바뀌고, 그 경로를 [상미분방정식](ordinary-differential-equations.md)으로 구해 풀린다.

# 직관

강물의 속도가 어디서나 $1$ 이고, 처음 농도가 구간 $\lbrack 0,1\rbrack$ 에서 $1$, 그 밖에서 $0$ 이라 하자. 잉크는 모양 그대로 내려가므로 시각 $t$ 의 농도는 $u(x,t)=u_0(x-t)$ 이고, $t=2$ 에서 잉크는 $\lbrack 2,3\rbrack$ 에 있다.

이 $u$ 가 만족하는 식을 찾는다. $u_0$ 이 미분가능하면 [연쇄법칙](chain-rule.md)으로 $u_t=-u_0'(x-t)$, $u_x=u_0'(x-t)$ 이므로 $u_t+u_x=0$ 이다. 거꾸로 $u_t+u_x=0$ 이면 물 입자의 경로 $x=x_0+t$ 를 따라 $\frac{d}{dt}u(x_0+t,t)=u_x+u_t=0$ 이므로, 입자가 처음 가진 값 $u_0(x_0)$ 이 그대로 실려 간다.

강폭이 좁아져 지점 $x\gt 0$ 에서 물의 속도가 $x$ 라 하자. 식은 $u_t+xu_x=0$ 이고, 물 입자의 경로는 $dx/dt=x$ 의 해 $x=x_0e^t$ 다. 값은 경로를 따라 실려 가므로 $u(x,t)=u_0(xe^{-t})$ 다. 처음 $\lbrack 1,2\rbrack$ 에 있던 잉크는 $t=\log 2$ 에서 $\lbrack 2,4\rbrack$ 에 있고, 농도는 $1$ 그대로인데 차지한 길이가 두 배다.

# 정의

## 수송 방정식

$b(x,t)$ 를 $\mathbb R^n$ 의 시간에 따라 변하는 [벡터장](vector-fields.md), $u_0$ 을 $\mathbb R^n$ 위의 함수라 하자. 다음 초기값 문제를 수송 방정식이라 한다. $b\cdot\nabla u$ 는 $u$ 의 [기울기 벡터](gradient.md)와 $b$ 의 내적이다.

$$
u_t+b(x,t)\cdot\nabla u=0,\qquad u(x,0)=u_0(x)
$$

$b$ 가 상수 벡터 $a$ 이면 상수계수 수송 방정식이다. 직관 절의 첫 강은 $n=1$, $a=1$ 이고, 둘째 강은 $b(x)=x$ 다. 오른쪽에 원천 $f(x,t)$ 를 둔 $u_t+b\cdot\nabla u=f$ 는 비동차 수송 방정식이다.

## 특성곡선

상미분방정식 $X'(t)=b(X(t),t)$, $X(0)=x_0$ 의 해 $t\mapsto(X(t),t)$ 를 점 $x_0$ 에서 나오는 **특성곡선(characteristic curve)** 이라 한다. 직관 절의 물 입자 경로 $x_0+t$ 와 $x_0e^t$ 가 특성곡선이다.

# 성질

## 특성곡선 위의 상수성

$u$ 가 연속미분가능한 해이면 특성곡선 위에서 $u$ 는 상수다. 연쇄법칙으로 다음이 성립한다.

$$
\frac{d}{dt}u(X(t),t)=\nabla u\cdot X'(t)+u_t=b\cdot\nabla u+u_t=0
$$

상수계수이면 특성곡선이 직선 $x_0+ta$ 이고 해는 $u(x,t)=u_0(x-ta)$ 하나뿐이다.

## 변수계수의 풀이

$b$ 가 연속이고 $x$ 에 대해 Lipschitz 이면 Picard–Lindelöf 정리(Picard–Lindelöf theorem)로 특성곡선이 점마다 하나씩 있다. 시각 $0$ 의 점을 시각 $t$ 의 점으로 보내는 사상을 $\Phi_t$ 라 하면 해는 다음이다.

$$
u(x,t)=u_0\big(\Phi_t^{-1}(x)\big)
$$

점 $x$ 에서 특성곡선을 거꾸로 따라가 시각 $0$ 에 닿는 점의 처음 값을 읽는다. 직관 절의 둘째 강에서 $\Phi_t(x_0)=x_0e^t$ 이고 $\Phi_t^{-1}(x)=xe^{-t}$ 다.

## 원천이 있는 경우

상수계수 비동차 방정식 $u_t+a\cdot\nabla u=f$ 의 해는 특성곡선을 따라 원천을 적분한 것이다. 이것을 [Duhamel 원리](duhamel-principle.md)라 한다.

$$
u(x,t)=u_0(x-ta)+\int_0^tf\big(x-(t-s)a,\thinspace s\big)\thinspace ds
$$

## 보존형과의 차이

잉크의 양을 보존하는 식은 연속 방정식(continuity equation) $\rho_t+\nabla\cdot(b\rho)=0$ 이다. 곱의 미분으로 풀면 다음이고, 수송 방정식과 $\rho\thinspace\nabla\cdot b$ 항만큼 다르다.

$$
\rho_t+b\cdot\nabla\rho+\rho\thinspace\nabla\cdot b=0
$$

수송 방정식은 특성곡선 위의 값을 보존하고, 연속 방정식은 $\int\rho\thinspace dx$ 를 보존한다. 직관 절의 둘째 강은 $\nabla\cdot b=1$ 이어서 두 식이 다르다. 연속 방정식으로는 길이가 두 배가 된 잉크의 농도가 절반이 된다. $\nabla\cdot b=0$ 이면 두 식은 같다.

## 불연속 처음 값과 의존 영역

직관 절의 처음 값은 불연속이라 미분할 수 없지만 $u_0(x-t)$ 는 다음 약한 꼴을 모든 매끄러운 시험함수 $\varphi$ 에 대해 만족한다. 이런 $u$ 를 약해(weak solution)라 한다.

$$
\int_0^\infty\int_{\mathbb R}u\thinspace(\varphi_t+a\varphi_x)\thinspace dx\thinspace dt+\int_{\mathbb R}u_0\thinspace\varphi(x,0)\thinspace dx=0
$$

점 $(x,t)$ 의 값은 처음 값의 한 점 $x-ta$ 에만 의존한다. 이 점을 점 $(x,t)$ 의 의존 영역(domain of dependence)이라 하고, 차분 방법이 이 점을 계산에 넣어야 한다는 조건이 [CFL 조건](cfl-condition.md)(Courant–Friedrichs–Lewy condition)이다.

# 활용

- 차분 방법의 시험 문제. 바람 위쪽 차분과 [Lax–Wendroff 방법](lax-wendroff-method.md)은 상수계수 수송 방정식에서 정확한 해 $u_0(x-ta)$ 와 비교해 오차를 본다. 계단 모양의 처음 값에서 선형 방법이 없던 봉우리를 만든다는 것이 [Godunov 정리](godunov-theorem.md)이고, 이것을 피하는 방법이 [전체 변동 감소 방법](tvd-schemes.md)(total variation diminishing, TVD)이다.
- 비선형 보존 법칙. [Burgers 방정식](burgers-equation.md) $u_t+uu_x=0$ 은 속도가 $u$ 자신인 수송 방정식이다. 특성곡선이 교차하는 자리에서 충격파가 생기고, 그 뒤의 해는 [엔트로피 해](entropy-solutions.md)로 정한다.
- 위상공간의 밀도. [Hamilton 역학](hamiltonian-mechanics.md)의 흐름은 발산이 $0$ 이므로 위상공간의 확률밀도는 수송 방정식과 연속 방정식을 함께 만족한다. 이것을 Liouville 방정식(Liouville equation)이라 한다.
- 진폭의 전파. [WKB 근사](wkb-approximation.md)(Wentzel–Kramers–Brillouin approximation)의 둘째 차수 식은 진폭이 광선을 따라 실려 가는 수송 방정식이다.
- 반군. 상수계수 수송 방정식의 해 작용소 $u_0\mapsto u_0(\cdot-ta)$ 는 평행이동 반군이고, 생성원은 $-a\cdot\nabla$ 다. [강연속 반군](c0-semigroups.md)의 기본 예다.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)
- [기울기 벡터](gradient.md)

## 더 알아보기

- [Burgers 방정식](burgers-equation.md)

#analysis #computation
