# Lyapunov 안정성

# 개요

**Lyapunov 안정성(Lyapunov stability)** 은 미분방정식의 평형점 가까이에서 출발한 해가 그 뒤로도 계속 평형점 가까이 머무는 성질이다. [상미분방정식](ordinary-differential-equations.md)의 해는 대부분 식으로 구할 수 없으므로, 해를 구하지 않고 이 성질을 판정하는 방법이 필요하다. 궤적을 따라 증가하지 않는 함수를 찾는 직접법과, 평형점에서의 일차 근사의 [고윳값](eigenvalues.md)을 보는 선형화(linearization)가 그 두 방법이다.

# 직관

마찰이 있는 진자의 각도를 $x$, 각속도를 $y$ 라 하면 운동은 다음 방정식을 따른다.

$$
x'=y,\qquad y'=-\sin x-cy\qquad(c\gt 0)
$$

진자가 바로 아래에 멈춘 상태 $(0,0)$ 이 평형점이다. 진자를 조금 밀었을 때 다시 아래 근처에 머무는지 알고 싶지만, 이 방정식의 해는 식으로 적을 수 없다.

해 대신 진자의 에너지 $V(x,y)=\tfrac12y^2+(1-\cos x)$ 를 본다. $V$ 는 $(0,0)$ 에서 $0$ 이고 그 근처의 다른 점에서는 양수다. 해를 따라 $V$ 를 미분하면

$$
\frac{d}{dt}V\bigl(x(t),y(t)\bigr)=(\sin x)\thinspace y+y\thinspace(-\sin x-cy)=-cy^2\le 0
$$

이다. 해를 모르고도 이 값이 계산되고, 에너지는 시간이 지나도 늘지 않는다. 처음 에너지가 작으면 해는 에너지가 그 값 이하인 작은 영역을 벗어나지 못하고, 진자는 아래 근처에 머문다. 이렇게 쓰는 $V$ 를 Lyapunov 함수라 한다.

# 정의

$f$ 가 [Lipschitz 사상](lipschitz-maps.md)인 자율 방정식 $x'=f(x)$ 에서 $f(x^\ast)=0$ 인 점 $x^\ast$ 를 **평형점(equilibrium)** 이라 한다. $x(t)$ 는 $x(0)=x_0$ 에서 출발한 해다.

- $x^\ast$ 가 **안정(stable)** 하다는 것은 모든 $\varepsilon\gt 0$ 에 대해 $\delta\gt 0$ 이 존재해 $\vert x_0-x^\ast\vert\lt\delta$ 이면 모든 $t\ge 0$ 에서 $\vert x(t)-x^\ast\vert\lt\varepsilon$ 인 것이다. 안정하지 않으면 **불안정(unstable)** 하다고 한다.
- $x^\ast$ 가 **점근 안정(asymptotically stable)** 하다는 것은 안정하고, 어떤 $\delta\gt 0$ 에 대해 $\vert x_0-x^\ast\vert\lt\delta$ 이면 $t\to\infty$ 에서 $x(t)\to x^\ast$ 인 것이다.
- $x^\ast$ 가 **지수 안정(exponentially stable)** 하다는 것은 상수 $C,\lambda,\delta\gt 0$ 이 존재해 $\vert x_0-x^\ast\vert\lt\delta$ 이면 $\vert x(t)-x^\ast\vert\le C\vert x_0-x^\ast\vert e^{-\lambda t}$ 인 것이다.

$x^\ast$ 의 근방 $U$ 에서 연속미분가능한 함수 $V$ 가 $V(x^\ast)=0$ 이고 $x\ne x^\ast$ 에서 $V(x)\gt 0$ 이며

$$
\dot V(x)=\nabla V(x)\cdot f(x)\le 0\qquad(x\in U)
$$

이면 $V$ 를 **Lyapunov 함수(Lyapunov function)** 라 한다. $\dot V(x)$ 는 $x$ 를 지나는 해를 따라 $V$ 를 미분한 값이다. $x\ne x^\ast$ 에서 $\dot V(x)\lt 0$ 이면 **엄격한 Lyapunov 함수(strict Lyapunov function)** 라 한다.

# 성질

## Lyapunov 직접법

**정리(Lyapunov 직접법, Lyapunov's direct method).** Lyapunov 함수가 존재하면 $x^\ast$ 는 안정하다. 엄격한 Lyapunov 함수가 존재하면 $x^\ast$ 는 점근 안정하다.[^1]

증명의 요지. 반지름 $\varepsilon$ 인 구면 위에서 $V$ 의 최솟값을 $m\gt 0$ 이라 하고, $V\lt m$ 이 되는 $\delta$ 근방을 잡는다. 해를 따라 $V$ 가 증가하지 않으므로 $\delta$ 근방에서 출발한 해에서는 $V\lt m$ 이 유지되고, 해는 구면에 닿지 못한다. 엄격한 경우, 해를 따라 감소하는 $V$ 의 극한이 $c\gt 0$ 이면 해는 $V\ge c$ 인 콤팩트 영역에 머물고 거기서 $\dot V\le -k\lt 0$ 이므로 $V$ 가 음수가 되어 모순이다. 따라서 $V\to 0$ 이고 $x(t)\to x^\ast$ 다.

## LaSalle 불변 원리

**정리(LaSalle 불변 원리, LaSalle's invariance principle).** $V$ 가 Lyapunov 함수이고 $\lbrace V\le r\rbrace$ 가 $x^\ast$ 를 둘러싼 콤팩트 집합이면, 그 안에서 출발한 해는 집합 $\lbrace \dot V=0\rbrace$ 에 포함되는 가장 큰 불변집합으로 다가간다. 불변집합은 거기서 출발한 해가 영원히 그 안에 머무는 집합이다.[^2]

직관 절의 진자에서 $\dot V=-cy^2$ 은 엄격하지 않다. $\dot V=0$ 인 곳은 $y=0$ 인 직선인데, 그 위에서 해가 머물려면 $y'=-\sin x=0$ 이어야 하므로 그 근방의 불변집합은 $(0,0)$ 하나다. 따라서 $(0,0)$ 은 점근 안정하다.

## 선형화

**정리(선형화에 의한 판정).** $A=Df(x^\ast)$ 의 모든 고윳값의 실수부가 음수이면 $x^\ast$ 는 지수 안정하다. 실수부가 양수인 고윳값이 하나라도 있으면 $x^\ast$ 는 불안정하다.[^1]

증명의 요지. 모든 고윳값의 실수부가 음수이면 $P=\int_0^\infty e^{tA^{\mathsf T}}e^{tA}\thinspace dt$ 가 수렴하고 양의 정부호이며 $A^{\mathsf T}P+PA=-I$ 를 만족한다. $V(x)=(x-x^\ast)^{\mathsf T}P(x-x^\ast)$ 로 두면 $f(x)=A(x-x^\ast)+O(\vert x-x^\ast\vert^2)$ 이므로 $\dot V=-\vert x-x^\ast\vert^2+O(\vert x-x^\ast\vert^3)$ 이다. $x^\ast$ 근처에서 $\dot V\le -V/(2\lambda_{\max}(P))$ 가 되어 $V$ 가 지수적으로 줄어든다.

고윳값 가운데 실수부가 $0$ 인 것이 있고 나머지 실수부가 음수이면 선형화로는 판정되지 않는다. $x'=-x^3$ 과 $x'=x^3$ 은 둘 다 $A=0$ 이지만 앞의 것은 점근 안정하고 뒤의 것은 불안정하다. $V=x^2$ 에 대해 $\dot V$ 가 각각 $-2x^4$ 와 $2x^4$ 이다.

## Lyapunov 방정식

**정리.** 행렬 $A$ 의 모든 고윳값의 실수부가 음수인 것과, 어떤 양의 정부호(positive definite) 행렬 $Q$ 에 대해 **Lyapunov 방정식(Lyapunov equation)**

$$
A^{\mathsf T}P+PA=-Q
$$

이 양의 정부호 해 $P$ 를 갖는 것은 동치다. 이때 해는 $P=\int_0^\infty e^{tA^{\mathsf T}}Qe^{tA}\thinspace dt$ 하나뿐이다.

역방향의 증명은 $V(x)=x^{\mathsf T}Px$ 가 $x'=Ax$ 의 엄격한 Lyapunov 함수라는 것이다. $\dot V=-x^{\mathsf T}Qx\lt 0$ 이고, 점근 안정한 선형계는 모든 해가 $0$ 으로 가므로 고윳값의 실수부가 음수다.

# 활용

- **평형점의 판정.** [상미분방정식](ordinary-differential-equations.md)의 평형점 안정성 절이 쓰는 고윳값 판정이 선형화 정리이고, 실수부가 $0$ 인 고윳값이 있을 때 찾는 함수가 Lyapunov 함수다.
- **보존계.** [Hamilton 역학](hamiltonian-mechanics.md)에서 에너지는 해를 따라 보존되므로 $\dot V=0$ 이다. 에너지가 극소인 평형점은 안정하지만 점근 안정하지는 않다.
- **경사 흐름.** $x'=-\nabla F(x)$ 에서 $V=F-F(x^\ast)$ 는 $\dot V=-\vert\nabla F\vert^2\le 0$ 을 만족한다. [경사하강법](gradient-descent.md)의 수렴 증명은 이 계산을 이산 시간에서 하는 것이다.
- **선형 행렬 부등식.** 조건 $P\succ 0$, $A^{\mathsf T}P+PA\prec 0$ 을 만족하는 $P$ 를 찾는 문제는 [반정부호 계획법](semidefinite-programming.md)의 실현가능성 문제다. 매개변수가 불확실한 선형계에서 모든 $A$ 에 공통인 $P$ 를 찾아 안정성을 보이는 데 쓴다.

[^1]: H. K. Khalil, *Nonlinear Systems*, 3rd ed., Prentice Hall, 2002, 4 장 1 절(Lyapunov 직접법), 4 장 3 절(선형화와 Lyapunov 방정식).
[^2]: J. P. LaSalle, *Some extensions of Liapunov's second method*, IRE Transactions on Circuit Theory **7** (1960), 520–527.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization
