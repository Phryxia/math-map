# Poincaré–Bendixson 정리

# 개요

**Poincaré–Bendixson 정리(Poincaré–Bendixson theorem)** 는 평면의 자율 미분방정식에서 유계 영역에 머무는 해가 시간이 지나면 평형점이나 주기해, 또는 평형점과 그 사이를 잇는 궤도들로 이루어진 고리에 다가간다는 정리다. 해를 구하지 않고 주기해의 존재를 보이는 데 쓴다. 평면 밖에서는 성립하지 않고, 3 차원 이상의 방정식에서는 이 셋 가운데 어디에도 다가가지 않는 해가 있다.

# 직관

평면의 방정식

$$
x'=x-y-x(x^2+y^2),\qquad y'=x+y-y(x^2+y^2)
$$

에 주기해가 있는지 알고 싶다. 원점은 평형점이고, 원점에서의 일차 근사의 [고윳값](eigenvalues.md)은 $1\pm i$ 다. 실수부가 양수이므로 원점 근처의 해는 원점에서 멀어진다.

해를 구하는 대신 원점까지의 거리 $r=\sqrt{x^2+y^2}$ 이 어떻게 변하는지만 계산하면 $r'=r(1-r^2)$ 이다. $r=1/2$ 인 원 위에서는 $r'\gt 0$ 이고 $r=2$ 인 원 위에서는 $r'\lt 0$ 이다. 그러므로 두 원 사이의 고리 모양 영역에서 출발한 해는 이 영역을 떠나지 못한다. 이 영역 안에는 평형점이 없다.

해는 고리 안을 영원히 돌아다니지만 어느 점에도 멈추지 않는다. 평면에서는 해 곡선이 서로 가로지르지 못하므로, 해가 같은 자리를 다시 지날 때마다 이전 경로의 안쪽이나 바깥쪽 한쪽으로만 밀린다. 그 결과 해는 닫힌 곡선 하나에 감겨 든다. 이 예에서 그 곡선은 $r=1$ 인 원이고, 이 원 위의 해가 주기해다. 마지막 단계, 곧 평형점이 없는 유계 영역에 갇힌 해가 닫힌 곡선에 감겨 든다는 것이 이 정리다.

# 정의

$f$ 가 평면의 열린 집합 $U$ 에서 연속미분가능하고, $x'=f(x)$ 의 해 가운데 $x(0)=x_0$ 인 것을 $x(t)$ 라 한다.

- 상수가 아닌 해가 어떤 $T\gt 0$ 에 대해 $x(t+T)=x(t)$ 를 만족하면 **주기해(periodic solution)** 라 하고, 그 상을 **주기 궤도(periodic orbit)** 라 한다.
- $x_0$ 의 **ω-극한집합(ω-limit set)** $\omega(x_0)$ 은 $t_n\to\infty$ 이고 $x(t_n)\to p$ 인 수열 $t_n$ 이 존재하는 점 $p$ 전체의 집합이다.
- 주기 궤도가 자기 자신이 아닌 어떤 해의 ω-극한집합이면 **극한 순환(limit cycle)** 이라 한다.
- 집합 $K$ 에서 출발한 해가 모든 $t\ge 0$ 에서 $K$ 에 머물면 $K$ 를 **앞으로 불변(positively invariant)** 이라 한다.

직관 절의 예에서 고리 영역은 앞으로 불변이고, 고리 안의 모든 점의 ω-극한집합은 원 $r=1$ 이며, 이 원은 극한 순환이다.

# 성질

## Poincaré–Bendixson 정리

**정리.** 해 $x(t)$ 가 모든 $t\ge 0$ 에서 콤팩트 집합 $K\subseteq U$ 에 머물고 $K$ 의 평형점이 유한 개이면, $\omega(x_0)$ 은 다음 셋 가운데 하나다.[^1]

1. 평형점 하나.
2. 주기 궤도 하나.
3. 유한 개의 평형점과, $t\to\pm\infty$ 에서 그 평형점들에 다가가는 해들의 궤도로 이루어진 집합.

$K$ 에 평형점이 없으면 1 과 3 이 불가능하므로 $\omega(x_0)$ 은 주기 궤도다. 직관 절의 고리 영역이 이 경우다.

증명의 요지. $\omega(x_0)$ 은 공집합이 아니고 콤팩트하며 연결되어 있고, 그 점에서 출발한 해는 $\omega(x_0)$ 에 머문다. 평형점이 아닌 점을 지나며 $f$ 와 평행하지 않은 짧은 선분을 횡단선이라 한다. 해가 횡단선을 차례로 지나는 점들은 선분 위에서 단조로 늘어선다. 두 연속한 교점 사이의 해 곡선과 선분 조각이 닫힌 곡선을 이루고, Jordan 곡선 정리(Jordan curve theorem)로 해가 그 곡선의 한쪽에 갇히기 때문이다. 그러므로 $\omega(x_0)$ 은 횡단선과 많아야 한 점에서 만나고, 평형점이 아닌 $\omega(x_0)$ 의 점을 지나는 해는 같은 횡단선을 다시 지나야 하므로 닫힌 궤도다.

## Bendixson 판정법

**정리(Bendixson 판정법, Bendixson's criterion).** 단순연결 영역 $D$ 에서 $f=(P,Q)$ 의 발산 $\partial P/\partial x+\partial Q/\partial y$ 의 부호가 일정하고, $D$ 의 어떤 열린 부분집합에서도 항등적으로 $0$ 이 아니면, $D$ 안에 주기 궤도가 없다.[^2]

증명의 요지. 주기 궤도 $\gamma$ 가 $D$ 안에 있으면 $\gamma$ 가 둘러싼 영역 $R$ 은 $D$ 에 포함된다. Green 정리(Green's theorem)로 $R$ 에서 발산의 적분은 $\gamma$ 를 가로지르는 $f$ 의 선적분과 같은데, $\gamma$ 위에서 $f$ 는 접선 방향이므로 이 선적분은 $0$ 이다. 발산의 부호가 일정하면 적분이 $0$ 이 아니어서 모순이다.

## 3 차원 이상

정리는 평면에서만 성립한다. 증명의 횡단선 논증이 Jordan 곡선 정리에 기대고, 3 차원 공간에서는 닫힌 곡선이 공간을 두 조각으로 나누지 않는다. Lorenz 방정식(Lorenz system)

$$
x'=\sigma(y-x),\qquad y'=x(\rho-z)-y,\qquad z'=xy-\beta z
$$

은 $\sigma=10$, $\rho=28$, $\beta=8/3$ 에서 유계 영역에 머물면서 평형점에도 주기 궤도에도 다가가지 않는 해를 갖는다.[^3]

# 활용

- **극한 순환의 존재.** van der Pol 방정식 $x''-\mu(1-x^2)x'+x=0$ ($\mu\gt 0$) 은 평면계 $x'=y$, $y'=\mu(1-x^2)y-x$ 와 같다. 원점은 불안정하고 먼 곳의 해는 안쪽으로 들어오므로, 원점 근방을 뺀 앞으로 불변인 고리 영역이 만들어지고 이 정리로 극한 순환이 존재한다. 극한 순환이 하나뿐이라는 것은 Liénard 정리(Liénard's theorem)로 증명된다.[^1]
- **평형점의 판정과 함께 쓰기.** [Lyapunov 안정성](lyapunov-stability.md)의 선형화로 평형점이 불안정함을 보이고, 그 둘레에 앞으로 불변인 고리를 만들면 이 정리가 주기해를 준다. 직관 절의 계산이 이 순서다.
- **연속 시간 혼돈의 차원.** 평면의 자율계에서는 유계인 해가 셋 가운데 하나에 다가가므로 혼돈이 생기지 않는다. 자율 미분방정식에서 혼돈이 나타나려면 상태공간이 3 차원 이상이어야 한다.

[^1]: S. H. Strogatz, *Nonlinear Dynamics and Chaos*, 2nd ed., Westview Press, 2015, 7 장 3 절(Poincaré–Bendixson 정리), 7 장 4 절(Liénard 계). 정리의 세 경우는 M. W. Hirsch, S. Smale, R. L. Devaney, *Differential Equations, Dynamical Systems, and an Introduction to Chaos*, 3rd ed., Academic Press, 2013, 10 장.
[^2]: L. Perko, *Differential Equations and Dynamical Systems*, 3rd ed., Springer, 2001, 3 장 9 절.
[^3]: E. N. Lorenz, *Deterministic nonperiodic flow*, Journal of the Atmospheric Sciences **20** (1963), 130–141. 이상 끌개의 존재는 W. Tucker, *A rigorous ODE solver and Smale's 14th problem*, Foundations of Computational Mathematics **2** (2002), 53–117 이 컴퓨터 보조 증명으로 보였다.

# 연관 문서

## 선수지식

- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #topology
