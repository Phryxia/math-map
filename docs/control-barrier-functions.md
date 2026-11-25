# 제어 장벽 함수

# 개요

**제어 장벽 함수(control barrier function)** 는 상태가 허용된 영역 밖으로 나가지 않도록 입력에 거는 조건을 주는 함수다. 직선 위의 로봇이 $x=2$ 의 목표로 가는데 $x=1$ 에 벽이 있으면, 목표만 보고 정한 속도로는 벽을 넘는다.

제어 장벽 함수는 벽까지의 거리 $h$ 가 줄어드는 빠르기를 $h$ 에 비례하게 묶는다. 원래 입력을 이 조건 하나 아래에서 가장 덜 바꾸는 입력을 점마다 고르면, 로봇은 벽에 다가가면서 느려지고 벽을 넘지 않는다.

# 직관

로봇의 위치 $x$ 는 $\dot x=u$ 를 따르고 처음에 $x=0$ 이다. 목표 $x=2$ 로 가는 입력 $u=2$ 를 그대로 쓰면 $x=2t$ 이고 $t=0.5$ 에 벽 $x=1$ 을 넘는다.

벽까지의 거리 $h(x)=1-x$ 가 $0$ 이상이면 안전하다. $h$ 가 $0$ 이 되기 전에 줄어드는 빠르기를 낮추려고 $\dot h\ge-h$ 를 요구한다. $\dot h=-u$ 이므로 이 조건은 $u\le 1-x$ 다.

원래 입력 $2$ 가 이 조건을 만족하면 그대로 쓰고, 아니면 조건의 경계값으로 줄인다. 다음 입력이 나온다.

$$
u=\min(2,\thinspace 1-x)
$$

$x=0$ 에서 이미 $1-x=1\lt 2$ 이므로 처음부터 $\dot x=1-x$ 이고, $x(t)=1-e^{-t}$ 다. 로봇은 $t=1$ 에 $x\approx 0.63$, $t=3$ 에 $x\approx 0.95$ 로 벽에 다가가지만 벽에 닿지 않는다.

# 정의

## 안전 집합과 전방 불변

계 $\dot x=f(x)+g(x)u$ 와 연속 미분 가능한 함수 $h:\mathbb R^n\to\mathbb R$ 에 대해 $C=\lbrace x:h(x)\ge 0\rbrace$ 를 **안전 집합(safe set)** 이라 한다. 닫힌 계의 해가 $x(0)\in C$ 이면 모든 $t\ge 0$ 에서 $x(t)\in C$ 일 때 $C$ 가 **전방 불변(forward invariant)** 이라 한다. 직관 절의 안전 집합은 $C=\lbrace x\le 1\rbrace$ 이다.

## 제어 장벽 함수

$h$ 가 $C$ 를 포함하는 열린집합 $D$ 의 모든 점에서 다음을 만족하면 제어 장벽 함수다[^1]. 여기서 $\alpha$ 는 $\alpha(0)=0$ 인 연속 증가 함수이고 음수에서도 정의된다.

$$
\sup\_u\bigl(\nabla h(x)\cdot f(x)+\nabla h(x)\cdot g(x)\thinspace u\bigr)\ge-\alpha\bigl(h(x)\bigr)
$$

직관 절에서 $f=0$, $g=1$, $\nabla h=-1$, $\alpha(s)=s$ 이고 $u=1-x$ 가 등호를 준다. [Sontag 공식](sontag-formula.md)의 제어 Lyapunov 함수가 함수값을 원점으로 줄이는 입력을 요구하는 것과 달리, 이 조건은 $h$ 가 $0$ 아래로 내려가지 않게 하는 입력을 요구한다.

# 성질

## 안전 집합의 불변성

국소 Lipschitz 되먹임 $u=k(x)$ 가 $D$ 에서 $\dot h\ge-\alpha(h)$ 를 만족하면 $C$ 는 전방 불변이다[^1].

증명의 요지. $\alpha(s)=\gamma s$ 이면 $\frac{d}{dt}(e^{\gamma t}h)=e^{\gamma t}(\dot h+\gamma h)\ge 0$ 이므로 $h(x(t))\ge e^{-\gamma t}h(x(0))\ge 0$ 이다. 일반적인 $\alpha$ 는 비교 원리(comparison principle)로 $h(x(t))$ 가 $\dot y=-\alpha(y)$, $y(0)=h(x(0))$ 의 해 이상임을 보이고, 그 해는 $0$ 아래로 내려가지 않는다. 직관 절의 $h=e^{-t}$ 가 $\gamma=1$ 의 등호 경우다.

## Nagumo 정리

Nagumo 정리(Nagumo's theorem)에 따르면, 해가 유일한 계 $\dot x=F(x)$ 에서, $\partial C$ 위에서 $\nabla h\ne 0$ 이면 $C$ 가 전방 불변인 것과 $\partial C$ 의 모든 점에서 $\nabla h\cdot F\ge 0$ 인 것은 동치다[^2]. 경계에서 속도가 집합 안쪽이나 접선 방향을 향하는 것이 조건이다.

제어 장벽 함수의 조건은 이 경계 조건을 $D$ 전체로 넓힌 것이다. 경계에서는 $h=0$ 이라 $-\alpha(h)=0$ 이 되어 Nagumo 조건과 같고, $C$ 안쪽에서는 $h$ 가 줄어도 되지만 그 빠르기가 $\alpha(h)$ 로 묶인다.

## 안전 필터의 닫힌 해

원래 입력 $u\_{\mathrm{nom}}(x)$ 가 있을 때 다음 [이차 계획법](quadratic-programming.md) 문제의 해를 쓰는 되먹임을 **안전 필터(safety filter)** 라 한다. $a=\nabla h\cdot f$, $b=\nabla h\cdot g$ 로 둔다.

$$
k(x)=\mathop{\mathrm{arg\thinspace min}}\_{u}\thinspace\Vert u-u\_{\mathrm{nom}}(x)\Vert^2\quad\text{subject to}\quad a+bu\ge-\alpha(h)
$$

$\psi=a+bu\_{\mathrm{nom}}+\alpha(h)$ 로 두면 $b\ne 0$ 에서 해는 다음과 같다.

$$
k(x)=u\_{\mathrm{nom}}+\frac{\max(0,-\psi)}{\Vert b\Vert^2}\thinspace b^{\mathsf T}
$$

증명의 요지. $\psi\ge 0$ 이면 $u\_{\mathrm{nom}}$ 이 제약을 만족하므로 해다. $\psi\lt 0$ 이면 KKT 조건(Karush–Kuhn–Tucker conditions)으로 제약이 등호로 성립하고 $u-u\_{\mathrm{nom}}$ 이 $b^{\mathsf T}$ 에 평행하므로, $u=u\_{\mathrm{nom}}+\lambda b^{\mathsf T}$ 를 제약 $a+bu=-\alpha(h)$ 에 넣어 $\lambda=-\psi/\Vert b\Vert^2$ 을 얻는다. 직관 절에서 $b=-1$, $\psi=-2+1-x$ 이고 $\psi\lt 0$ 이면 $k=2+\psi=1-x$ 다.

$b$ 가 $0$ 이 되지 않는 곳에서 이 해는 $x$ 의 국소 Lipschitz 함수이므로 불변성 절의 가정이 성립한다[^1].

## 높은 상대 차수

입력이 가속도인 $\ddot x=u$ 에서 $h=1-x$ 는 $\dot h=-\dot x$ 로 $u$ 가 나오지 않아 $b=0$ 이고, 조건이 입력을 제한하지 못한다. 입력이 처음 나타날 때까지 미분한 횟수를 상대 차수(relative degree)라 하고, 이 예에서는 2 다. 이때 $h\_1=\dot h+\gamma\_1h$ 를 새 함수로 두고 $h\_1$ 에 제어 장벽 함수 조건을 건다. $\dot h\_1=-u-\gamma\_1\dot x$ 에는 $u$ 가 나온다.

$h\_1\ge 0$ 이 유지되면 불변성 절의 계산으로 $h\ge 0$ 도 유지된다. 이 방법을 지수 제어 장벽 함수(exponential control barrier function)라 하며 상대 차수가 $r$ 이면 $r$ 번 거듭한다[^3].

# 활용

- 제어 Lyapunov 함수와 함께 쓰는 이차 계획. 안정화 조건 $\dot V\le-cV+\delta$ 와 안전 조건 $\dot h\ge-\alpha(h)$ 를 함께 제약으로 두고, 완화 변수 $\delta$ 에 벌점을 주어 두 조건이 부딪힐 때 안전을 앞세운다[^1]. 보행 로봇, 차량의 차간 거리 유지, 드론 편대의 충돌 회피에서 점마다 이 문제를 푼다.
- 학습한 제어기의 감시. 강화학습이나 신경망으로 얻은 $u\_{\mathrm{nom}}$ 을 안전 필터에 통과시켜, 학습 결과와 상관없이 안전 집합을 지킨다.
- 장벽 인증서(barrier certificate). 입력이 없는 계에서 $h$ 가 초기 집합에서 양수, 위험 집합에서 음수이고 $\dot h\ge 0$ 이면 위험 집합에 닿는 궤적이 없다. Prajna 와 Jadbabaie 는 다항식 계에서 이런 $h$ 를 제곱합(sum of squares) 다항식의 [반정부호 계획법](semidefinite-programming.md)으로 찾았다[^4].

[^1]: A. D. Ames, X. Xu, J. W. Grizzle, P. Tabuada, "Control barrier function based quadratic programs for safety critical systems", *IEEE Transactions on Automatic Control* 62 (2017), 3861–3876.
[^2]: F. Blanchini, "Set invariance in control", *Automatica* 35 (1999), 1747–1767.
[^3]: Q. Nguyen, K. Sreenath, "Exponential control barrier functions for enforcing high relative-degree safety-critical constraints", *Proceedings of the American Control Conference* (2016), 322–328.
[^4]: S. Prajna, A. Jadbabaie, "Safety verification of hybrid systems using barrier certificates", *Hybrid Systems: Computation and Control*, Lecture Notes in Computer Science 2993, Springer, 2004, 477–492.

# 연관 문서

## 선수지식

- [Sontag 공식](sontag-formula.md)
- [이차 계획법](quadratic-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis
