# Pontryagin 최대 원리

# 개요

**Pontryagin 최대 원리(Pontryagin maximum principle)** 는 최적 제어가 만족해야 하는 필요조건으로, 최적 경로를 따라 정해지는 벡터 하나가 있어 매 순간의 제어값이 Hamilton 함수를 최대로 만든다는 정리다. 직선 위에 멈춰 있는 차를 가속도 $\vert a\vert\le 1$ 로 움직여 거리 $1$ 만큼 떨어진 곳에 다시 멈추게 할 때, 가장 빨리 도착하려면 매 순간 가속 페달을 얼마나 밟아야 하는가. 제어는 시간의 함수 전체라서 고를 수 있는 것이 무한히 많다. 최대 원리는 그 선택을 시각마다의 최대화 문제와 미분방정식 하나로 바꾸고, 차의 문제에서는 끝까지 가속하다가 한 번 바꿔 끝까지 감속하는 제어가 답이다.

# 직관

차의 위치를 $y_1$, 속도를 $y_2$ 라 하면 $\dot y_1=y_2$, $\dot y_2=a$ 이고, 처음과 끝에서 $y_2=0$ 이다. 시각 $s$ 근처의 짧은 시간 $h$ 동안 가속도를 $\varepsilon$ 만큼 바꾼다. 끝 시각 $T$ 의 속도는 $\varepsilon h$ 만큼, 위치는 $\varepsilon h(T-s)$ 만큼 바뀐다. 바꾼 효과가 $s$ 의 일차식 $T-s$ 로 끝 상태에 전달된다.

끝 상태에 주는 효과를 하나의 수로 재려면 두 성분에 가중치 $c_1$, $c_2$ 를 준다. 시각 $s$ 에서 가속도를 바꾼 효과의 가중합은 $\varepsilon h\bigl(c_1(T-s)+c_2\bigr)$ 이고, $p_2(s)=c_1(T-s)+c_2$ 로 두면 이것은 $\varepsilon hp_2(s)$ 다. 최적 제어에서는 어느 시각에도 이 효과를 더 늘릴 수 없어야 하므로, $\vert a\vert\le 1$ 에서 $p_2(s)a$ 가 가장 큰 $a$, 곧 $a(s)=\mathrm{sign}\thinspace p_2(s)$ 를 쓴다.

$p_2$ 는 $s$ 의 일차식이므로 부호가 많아야 한 번 바뀐다. 따라서 최적 제어는 $a=1$ 로 시작해 한 번 $a=-1$ 로 바뀐다. 대칭성에서 바꾸는 시각은 $T/2$ 이고, 그때까지 간 거리 $\frac12(T/2)^2$ 의 두 배가 $1$ 이므로 $T=2$ 다.

# 정의

## 공상태와 Hamilton 함수

[Hamilton–Jacobi–Bellman 방정식](hamilton-jacobi-bellman.md)의 최적 제어 문제 $\dot y=f(y,a)$, $a(s)\in A$, 비용 $\int_t^T L(y,a)\thinspace ds+g(y(T))$ 를 둔다. 이 문제의 **Hamilton 함수(Hamiltonian)** 를

$$
\mathcal H(x,p,a)=p\cdot f(x,a)-L(x,a)
$$

로 정한다. 제어 $a(\cdot)$ 와 그 경로 $y(\cdot)$ 에 대해

$$
\dot p(s)=-\frac{\partial\mathcal H}{\partial x}(y(s),p(s),a(s)),\qquad p(T)=-Dg(y(T))
$$

를 만족하는 $p:\lbrack t,T\rbrack\to\mathbb R^n$ 을 **공상태(costate)** 라 한다. 직관 절의 차에서는 $f(y,a)=(y_2,a)$ 이고 $\mathcal H=p_1y_2+p_2a-L$ 이므로 공상태 방정식이 $\dot p_1=0$, $\dot p_2=-p_1$ 이다. $p_1$ 이 상수이고 $p_2$ 가 일차식이며, 직관 절의 $c_1$ 이 $p_1$ 이다.

# 성질

## Pontryagin 최대 원리

정리. $A$ 가 콤팩트이고 $f$, $L$, $g$ 가 $x$ 에 대해 연속미분가능하다고 하자. $(y^\ast,a^\ast)$ 가 끝 시각 $T$ 를 고정하고 끝점을 고정하지 않은 문제의 최적 제어와 경로이면, 그 공상태 $p$ 가 거의 모든 $s$ 에서

$$
\mathcal H(y^\ast(s),p(s),a^\ast(s))=\max\_{a\in A}\mathcal H(y^\ast(s),p(s),a)
$$

를 만족한다.[^1] 원래의 증명은 Pontryagin 과 공저자들의 책에 있다.[^2]

증명의 요지. 시각 $\tau$ 직전의 길이 $h$ 인 구간에서만 $a^\ast$ 를 상수 $a$ 로 바꾼다. 경로는 $\tau$ 에서 $h\bigl(f(y^\ast(\tau),a)-f(y^\ast(\tau),a^\ast(\tau))\bigr)+o(h)$ 만큼 벗어나고, 그 차이가 선형화한 방정식을 따라 $T$ 까지 전달된다. 공상태는 선형화한 방정식의 수반 방정식을 따르므로 $p(s)\cdot v(s)$ 가 $s$ 에 대해 상수다. 비용의 1차 변화를 이 상수로 적으면 $-h\bigl(\mathcal H(\cdot,a)-\mathcal H(\cdot,a^\ast)\bigr)$ 이고, 최적성에서 이것이 $0$ 이상이다.

## 끝점과 끝 시각의 조건

끝점 $y(T)$ 를 고정하면 끝 조건 $p(T)=-Dg$ 가 사라지고, 상수 $p_0\ge 0$ 이 있어 $\mathcal H=p\cdot f-p_0L$ 로 같은 결론이 성립하며 $(p_0,p)$ 는 $0$ 이 아니다. 끝 시각 $T$ 도 고르는 문제에서는 최적 경로를 따라 $\max\_a\mathcal H=0$ 이 더해진다.[^1] 직관 절의 차가 이 경우이고, $L=1$ 이며 $y_2=0$ 인 처음과 끝 시각에서 $\max\_a\mathcal H=0$ 이 $\vert p_2\vert=p_0$ 을 준다.

## Hamilton–Jacobi–Bellman 방정식과의 관계

가치함수 $V$ 가 최적 경로 근처에서 미분가능하면 공상태는 $p(s)=-DV(y(s),s)$ 다. 그러면 최대 원리의 최대화는 Hamilton–Jacobi–Bellman 방정식의 상한과 같고, $(y,p)$ 가 따르는 Hamilton 계가 그 방정식의 특성곡선이다. 최대 원리는 가치함수가 미분가능하지 않아도 성립하는 필요조건이고, Hamilton–Jacobi–Bellman 방정식은 모든 출발점에 대한 충분조건까지 준다.

## Euler–Lagrange 방정식

$f(x,a)=a$, $A=\mathbb R^n$ 이면 $\dot y=a$ 이고 비용은 [변분법](calculus-of-variations.md)의 범함수 $\int L(y,\dot y)\thinspace ds$ 다. 최대화의 1계 조건이 $p=\partial L/\partial a$ 이고 공상태 방정식이 $\dot p=\partial L/\partial x$ 이므로

$$
\frac{d}{ds}\frac{\partial L}{\partial\dot y}=\frac{\partial L}{\partial y}
$$

이 나온다. 최대 원리는 제어값이 닫힌 집합에 묶여 1계 조건 대신 최대화를 써야 하는 경우의 Euler–Lagrange 방정식이다.

# 활용

- 뱅뱅 제어(bang-bang control). $f$ 와 $L$ 이 $a$ 에 대해 일차이고 $A$ 가 다면체이면 $\mathcal H$ 의 최대가 꼭짓점에서 나오므로, 최적 제어는 직관 절의 차처럼 꼭짓점 값 사이를 오간다.
- 로켓과 궤도. 연료 소비나 도착 시각을 최소화하는 추력의 방향과 크기가 각 시각의 공상태로 정해진다.
- 수치 해법. 상태 방정식을 앞으로, 공상태 방정식을 뒤로 풀고 최대화로 제어를 고치는 되풀이가 사격법(shooting method)과 경사법의 기초다. 가치함수를 모든 점에서 구하는 대신 경로 하나만 따라가므로 상태의 차원이 클 때 쓴다.
- [Lagrange 승수법](lagrange-multipliers.md). 공상태는 운동 방정식 $\dot y=f(y,a)$ 를 제약으로 보았을 때 그 제약의 Lagrange 승수다.

[^1]: Daniel Liberzon, *Calculus of Variations and Optimal Control Theory: A Concise Introduction*, Princeton University Press, 2012, 4 장. 최대 원리의 진술, 바늘 변분에 의한 증명, 끝점과 끝 시각의 조건, 가치함수와의 관계를 다룬다.
[^2]: L. S. Pontryagin, V. G. Boltyanskii, R. V. Gamkrelidze, E. F. Mishchenko, *The Mathematical Theory of Optimal Processes*, Interscience, 1962.

# 연관 문서

## 선수지식

- [Hamilton–Jacobi–Bellman 방정식](hamilton-jacobi-bellman.md)
- [변분법](calculus-of-variations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization #differential_geometry
