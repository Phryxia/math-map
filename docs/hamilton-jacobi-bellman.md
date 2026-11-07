# Hamilton–Jacobi–Bellman 방정식

# 개요

**Hamilton–Jacobi–Bellman 방정식(Hamilton–Jacobi–Bellman equation)** 은 연속 시간 최적 제어 문제에서 최소 비용을 출발점의 함수로 본 가치함수가 만족하는 편미분방정식이다. 호수 위의 배가 어느 방향으로든 속력 $1$ 이하로 움직일 수 있을 때, 출발점마다 가장 빨리 물가에 닿는 시간을 묻는 문제가 이 꼴이다. 매 순간 방향을 골라야 하므로 고를 수 있는 경로가 무한히 많다. Hamilton–Jacobi–Bellman 방정식은 [동적 계획법](dynamic-programming.md)의 점화식을 짧은 시간 간격의 극한으로 바꿔, 경로를 고르는 문제를 출발점마다의 방정식 하나로 바꾼다.

# 직관

배가 구간 $(-1,1)$ 위에 있고 매 순간 속도 $a$ 를 $\vert a\vert\le 1$ 에서 고른다. 끝점 $\pm1$ 에 닿는 데 걸리는 가장 짧은 시간을 $T(x)$ 라 한다. 짧은 시간 $h$ 동안 속도 $a$ 로 움직이면 $x+ha$ 에 도착하고, 거기서부터 가장 빠르게 가면 $T(x+ha)$ 가 더 걸린다. 그러므로

$$
T(x)=\min\_{\vert a\vert\le 1}\bigl\lbrack h+T(x+ha)\bigr\rbrack
$$

이다. 이 식은 동적 계획법의 점화식에서 상태를 점 $x$ 로, 한 단계를 시간 $h$ 로 바꾼 것이다.

$T$ 가 미분가능하면 $T(x+ha)=T(x)+haT'(x)+o(h)$ 이므로 양변에서 $T(x)$ 를 빼고 $h$ 로 나누어 $h\to 0$ 으로 보내면

$$
0=\min\_{\vert a\vert\le 1}\bigl\lbrack 1+aT'(x)\bigr\rbrack=1-\vert T'(x)\vert
$$

이다. 경로를 고르는 문제가 방정식 $\vert T'\vert=1$ 과 경계조건 $T(\pm1)=0$ 이 되었다.

답은 $T(x)=1-\vert x\vert$ 이고 $x=0$ 에서 꺾인다. 원점에서는 왼쪽으로 가도 오른쪽으로 가도 시간이 같아서 최적 방향이 둘이다. 같은 방정식과 경계조건을 꺾인 점 밖에서 만족하는 함수는 $\vert x\vert-1$ 과 톱니 모양도 있으므로, 방정식만으로는 $T$ 가 정해지지 않는다. [점성해](viscosity-solutions.md)의 정의가 $1-\vert x\vert$ 하나를 고르고, 그것이 실제 최단 시간과 같다.

# 정의

## 최적 제어 문제

집합 $A\subset\mathbb R^m$ 을 제어값의 집합, $f:\mathbb R^n\times A\to\mathbb R^n$ 을 운동 방정식, $L:\mathbb R^n\times A\to\mathbb R$ 을 단위 시간당 비용, $g:\mathbb R^n\to\mathbb R$ 를 끝 비용이라 하자. 시각 $t$ 에 점 $x$ 에서 출발해 측정가능한 제어 $a:\lbrack t,T\rbrack\to A$ 를 쓰면 상태가

$$
\dot y(s)=f(y(s),a(s)),\qquad y(t)=x
$$

를 따라 움직이고 비용은

$$
J(x,t;a)=\int_t^T L(y(s),a(s))\thinspace ds+g(y(T))
$$

이다. **가치함수(value function)** 는 $V(x,t)=\inf\_a J(x,t;a)$ 다. 직관 절의 배는 $f(x,a)=a$, $A=\lbrack -1,1\rbrack$, $L=1$ 이고, 끝 시각 대신 끝점에 닿는 시각에서 멈추는 문제다.

## Hamilton–Jacobi–Bellman 방정식

$H(x,p)=\sup\_{a\in A}\bigl(-f(x,a)\cdot p-L(x,a)\bigr)$ 로 두면 가치함수가 만족하는 방정식

$$
-V_t+H(x,DV)=0,\qquad V(x,T)=g(x)
$$

을 **Hamilton–Jacobi–Bellman 방정식** 이라 한다. $H$ 를 이 문제의 **Hamilton 함수(Hamiltonian)** 라 한다. 직관 절의 배는 $H(p)=\sup\_{\vert a\vert\le 1}(-ap-1)=\vert p\vert-1$ 이고, 시간에 의존하지 않는 판 $H(T')=0$ 이 $\vert T'\vert=1$ 이다.

# 성질

## 동적 계획 원리

$t\lt t+h\le T$ 에서

$$
V(x,t)=\inf\_a\left\lbrack\int_t^{t+h}L(y(s),a(s))\thinspace ds+V(y(t+h),t+h)\right\rbrack
$$

이다. 이것을 **동적 계획 원리(dynamic programming principle)** 라 한다. $\lbrack t,T\rbrack$ 위의 제어를 $\lbrack t,t+h\rbrack$ 위의 제어와 그 뒤의 제어로 나누면 증명된다. 직관 절의 첫 식이 이 원리의 배 판이다.

## 가치함수와 점성해

$A$ 가 콤팩트이고 $f$, $L$, $g$ 가 유계이며 $x$ 에 대해 Lipschitz 이면, 가치함수 $V$ 는 유계 Lipschitz 함수이고 Hamilton–Jacobi–Bellman 방정식의 유일한 점성해다.[^1]

증명의 요지. 시험함수 $\varphi$ 가 $(x_0,t_0)$ 에서 $V-\varphi$ 의 국소 최댓값을 주면, 동적 계획 원리에 상수 제어 $a$ 를 넣고 $V$ 를 $\varphi$ 로 바꾼 부등식을 $h$ 로 나누어 $-\varphi_t-f\cdot D\varphi-L\le 0$ 을 얻는다. $a$ 에 대한 상한을 잡으면 점성 아래해 조건이다. 위해 조건은 거의 최적인 제어로 같은 계산을 해서 얻는다. 유일성은 점성해의 비교 원리에서 나온다.

## 검증 정리

$v\in C^1$ 이 Hamilton–Jacobi–Bellman 방정식과 끝 조건을 만족하고, 제어 $a^\ast(s)$ 가 각 시각에서 $-f(y(s),a)\cdot Dv(y(s),s)-L(y(s),a)$ 의 상한을 달성하면 $a^\ast$ 는 최적 제어이고 $v=V$ 다.[^1] 최적 제어를 현재 상태 $y(s)$ 와 $Dv$ 만으로 정하므로, 이런 $a^\ast$ 를 **되먹임 제어(feedback control)** 라 한다.

## 특성곡선과 Pontryagin 최대 원리

$V$ 가 미분가능한 곳에서 최적 경로를 따라 $p(s)=DV(y(s),s)$ 로 두면 $(y,p)$ 는 $H$ 의 Hamilton 계

$$
\dot y=-\frac{\partial H}{\partial p},\qquad\dot p=\frac{\partial H}{\partial x}
$$

를 만족한다(부호는 $H$ 의 정의에서 $-f\cdot p$ 를 쓴 데서 온다). 이것은 [Hamilton–Jacobi 방정식](hamilton-jacobi-equation.md)의 특성곡선이고, [Pontryagin 최대 원리](pontryagin-maximum-principle.md)가 최적 경로의 필요조건으로 주는 방정식과 같다.

## 확률 제어

상태가 [확률미분방정식](stochastic-differential-equations.md) $dY=f(Y,a)\thinspace ds+\sigma(Y,a)\thinspace dB$ 를 따르고 비용의 기댓값을 최소화하면, 가치함수는

$$
V_t+\inf\_{a\in A}\left(\tfrac12\mathrm{tr}\bigl(\sigma\sigma^{\mathsf T}(x,a)D^2V\bigr)+f(x,a)\cdot DV+L(x,a)\right)=0
$$

을 만족한다.[^2] 선형함수들의 하한이므로 이 방정식은 $D^2V$ 에 대해 오목한 2계 완전 비선형 방정식이고, $\sigma\sigma^{\mathsf T}$ 가 일률 양의 정부호이면 [Evans–Krylov 정리](evans-krylov-theorem.md)의 가정을 만족한다.

# 활용

- [선형 이차 조절기](linear-quadratic-regulator.md)(linear–quadratic regulator, LQR). $f=Ax+Ba$, $L=x^{\mathsf T}Qx+a^{\mathsf T}Ra$, $g=x^{\mathsf T}Gx$ 이고 $R$ 이 양의 정부호이면 $V(x,t)=x^{\mathsf T}P(t)x$ 이다. Hamilton–Jacobi–Bellman 방정식은 Riccati 방정식 $-\dot P=A^{\mathsf T}P+PA-PBR^{-1}B^{\mathsf T}P+Q$, $P(T)=G$ 가 되고, 최적 제어는 $a=-R^{-1}B^{\mathsf T}Px$ 다. 같은 꼴의 Riccati 방정식이 [Kalman 필터](kalman-filter.md)의 공분산 갱신에 나온다.
- 최단 시간과 거리함수. 직관 절의 배를 $n$ 차원 영역에서 속력 $1$ 이하로 움직이면 최단 시간은 경계까지의 거리이고, 방정식은 $\vert DT\vert=1$ 이다.
- [Markov 결정 과정](markov-decision-process.md). 이산 시간 Markov 결정 과정의 Bellman 방정식에서 시간 간격을 $0$ 으로 보내면 확률 제어의 방정식이 나온다.

[^1]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 10.3 절. 동적 계획 원리, 가치함수가 점성해라는 정리, 검증 정리를 다룬다.
[^2]: Wendell H. Fleming, H. Mete Soner, *Controlled Markov Processes and Viscosity Solutions*, 2판, Springer, 2006, 3 장과 4 장.

# 연관 문서

## 선수지식

- [동적 계획법](dynamic-programming.md)
- [점성해](viscosity-solutions.md)

## 더 알아보기

- [Pontryagin 최대 원리](pontryagin-maximum-principle.md)
- [평균장 게임](mean-field-games.md)

#analysis #optimization #probability
