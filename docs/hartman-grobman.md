# Hartman–Grobman 정리

# 개요

**Hartman–Grobman 정리(Hartman–Grobman theorem)** 는 자율 미분방정식의 평형점에서 일차 근사의 고윳값에 실수부가 $0$ 인 것이 없으면, 그 평형점 근처의 해 곡선들이 일차 근사의 해 곡선들과 연속인 좌표 변환으로 일치한다는 정리다. [Lyapunov 안정성](lyapunov-stability.md)의 선형화 정리는 안정한지 아닌지만 판정하는데, 이 정리는 평형점 근처에서 해들이 놓인 모양 전체가 선형계와 같다는 것을 준다.

# 직관

평면의 방정식

$$
x'=x,\qquad y'=-y+x^2
$$

의 원점 근처에서 해들이 어떻게 놓이는지 알고 싶다. 원점에서의 일차 근사는 $x'=x$, $y'=-y$ 이고, 그 해는 $x$ 축 방향으로는 원점에서 멀어지고 $y$ 축 방향으로는 원점으로 다가간다. 일차 근사에서 원점으로 들어오는 해는 $y$ 축 위의 해뿐이고 원점에서 나가는 해는 $x$ 축 위의 해뿐이다.

원래 방정식에서 $x=0$ 이면 $x'=0$ 이므로 $y$ 축은 여전히 해들의 곡선이다. $x$ 축은 그렇지 않다. $y=0$ 에서 $y'=x^2\gt 0$ 이므로 해가 축을 벗어난다. 대신 $Y=y-x^2/3$ 으로 두면

$$
Y'=y'-\frac23xx'=-y+x^2-\frac23x^2=-Y
$$

이다. 좌표 $(x,Y)$ 에서 방정식은 정확히 일차 근사 $x'=x$, $Y'=-Y$ 가 된다. 원래 좌표에서 원점에서 나가는 해는 포물선 $y=x^2/3$ 위에 있고, 좌표 변환 $(x,y)\mapsto(x,y-x^2/3)$ 이 원래 방정식의 해 곡선들을 일차 근사의 해 곡선들로 옮긴다. 이런 변환이 일반적으로 원점 근처에 존재한다는 것이 이 정리다.

# 정의

$f$ 가 $\mathbb R^n$ 의 열린 집합에서 연속미분가능하고 $f(x^\ast)=0$ 이다. $A=Df(x^\ast)$ 로 두고, $x'=f(x)$ 의 해가 시각 $t$ 에 도달한 점을 $\varphi_t(x)$ 라 쓴다.

평형점 $x^\ast$ 가 **쌍곡(hyperbolic)** 이라는 것은 $A$ 의 고윳값 가운데 실수부가 $0$ 인 것이 없다는 것이다.

두 흐름 $\varphi_t$ 와 $\psi_t$ 가 **위상 공액(topologically conjugate)** 이라는 것은 위상동형사상 $h$ 가 존재해 모든 $t$ 에서 $h\circ\varphi_t=\psi_t\circ h$ 인 것이다. $h$ 는 한 흐름의 해 곡선을 시간까지 맞춰 다른 흐름의 해 곡선으로 옮긴다.

**Hartman–Grobman 정리.** $x^\ast$ 가 쌍곡 평형점이면 $x^\ast$ 의 근방 $U$ 와 원점의 근방 $V$, 위상동형사상 $h:U\to V$ 가 존재해, $\varphi_t(x)$ 가 $U$ 에 머무는 동안 $h(\varphi_t(x))=e^{tA}h(x)$ 이다.[^1]

# 성질

## 증명의 요지

$x^\ast=0$ 으로 옮기고, 원점 근처를 벗어난 곳에서 $f$ 를 잘라 $f(x)=Ax+r(x)$ 의 나머지 $r$ 가 유계이고 Lipschitz 상수가 작게 만든다. 시간 $1$ 사상 $T=\varphi_1$ 과 $L=e^{A}$ 에 대해 $h=I+u$ 꼴의 공액 $h\circ T=L\circ h$ 를 찾는다. $A$ 가 쌍곡이므로 공간이 $L$ 이 축약하는 부분공간 $E^s$ 와 $L^{-1}$ 이 축약하는 부분공간 $E^u$ 로 나뉜다. 공액 방정식을 두 성분으로 나눠 풀면 $u$ 에 대한 방정식이 유계 연속함수의 공간에서 축약사상이 되고, [축약사상 고정점 정리](banach-fixed-point.md)로 유일한 $u$ 가 나온다. 이 $h$ 를 시간에 대해 평균하면 흐름 전체의 공액이 된다.[^1]

## 위상 공액의 한계

$h$ 는 일반적으로 미분가능하지 않다. 위상 공액은 안정한 마디점(node)과 안정한 나선점(spiral)을 구별하지 않는다. 예컨대 $x'=-x$, $y'=-y$ 와 $x'=-x-y$, $y'=x-y$ 는 둘 다 원점으로 다가가는 흐름이고 서로 위상 공액이다. 고윳값이 특정 정수 관계를 만족하지 않는다는 비공명(non-resonance) 조건을 더하면 $h$ 를 매끄럽게 잡을 수 있고, 이것이 **Sternberg 정리(Sternberg's theorem)** 다.[^2]

## 안정 다양체 정리

**정리(안정 다양체 정리, stable manifold theorem).** 쌍곡 평형점 $x^\ast$ 근처에서 $t\to\infty$ 에 $x^\ast$ 로 다가가며 근처에 머무는 점들의 집합 $W^s\_{\mathrm{loc}}$ 은 $x^\ast$ 에서 $E^s$ 에 접하는 연속미분가능한 다양체이고, 그 차원은 실수부가 음수인 고윳값의 개수다. $t\to-\infty$ 에 다가가는 점들의 집합 $W^u\_{\mathrm{loc}}$ 도 같은 방식으로 $E^u$ 에 접한다.[^1]

직관 절의 예에서 $W^s\_{\mathrm{loc}}$ 은 $y$ 축이고 $W^u\_{\mathrm{loc}}$ 은 포물선 $y=x^2/3$ 이다. Hartman–Grobman 정리의 $h$ 는 이 두 곡선을 각각 $E^s$, $E^u$ 로 옮긴다.

## 쌍곡이 아닌 평형점

실수부가 $0$ 인 고윳값이 있으면 결론이 성립하지 않는다. $x'=-x^3$ 과 $x'=x^3$ 은 일차 근사가 둘 다 $x'=0$ 이지만, 앞의 것은 해가 원점으로 다가가고 뒤의 것은 멀어진다. 일차 근사의 흐름은 모든 점이 평형점이므로 어느 쪽과도 위상 공액이 아니다.

# 활용

- **평형점의 국소 분류.** 쌍곡 평형점 근처의 해들의 모양은 실수부가 음수인 고윳값과 양수인 고윳값의 개수만으로 정해진다. 평면에서는 안정점, 불안정점, 안장점(saddle) 셋이다. [Lorenz 방정식](lorenz-system.md)의 원점은 $\rho\gt 1$ 에서 실수부가 양수인 고윳값 하나와 음수인 고윳값 둘을 가진 쌍곡 평형점이므로 1 차원 불안정 다양체와 2 차원 안정 다양체를 갖는다.
- **분기의 자리.** 쌍곡 평형점은 방정식을 조금 바꿔도 근처에 쌍곡 평형점이 남고 그 근처의 해들의 모양도 그대로다. 그래서 해들의 모양이 바뀌는 분기는 고윳값이 허수축에 닿는 매개변수에서만 일어난다. Lorenz 방정식의 Hopf 분기가 그 예다.

[^1]: L. Perko, *Differential Equations and Dynamical Systems*, 3rd ed., Springer, 2001, 2 장 7 절(안정 다양체 정리), 2 장 8 절(Hartman–Grobman 정리). P. Hartman, *A lemma in the theory of structural stability of differential equations*, Proceedings of the American Mathematical Society **11** (1960), 610–620.
[^2]: S. Sternberg, *Local contractions and a theorem of Poincaré*, American Journal of Mathematics **79** (1957), 809–824.

# 연관 문서

## 선수지식

- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #topology
