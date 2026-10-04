# Ricci 흐름

# 개요

Ricci 흐름은 [Riemann 계량](riemannian-metrics.md)을 Ricci 곡률의 음수 방향으로 움직이는 편미분방정식이다.

$$
\frac{\partial g}{\partial t}=-2\mathrm{Ric}(g)
$$

곡률이 큰 방향으로는 계량이 줄고 작은 방향으로는 늘어난다. 계량에 대한 열방정식 꼴이어서 곡률이 시간이 지나며 고르게 퍼진다. Hamilton 이 1982 년에 도입했고, Perelman 이 특이점에서 수술을 붙여 [기하화 정리](geometrization.md)를 증명했다.

# 직관

닫힌 다양체에 곡률이 일정한 계량이 있는지 묻는다. 아무 계량에서 출발해 곡률이 큰 자리를 줄이고 작은 자리를 늘리면 고른 상태에 닿을 것 같다. 함수에서 같은 일을 하는 것이 열방정식 $\partial u/\partial t=\Delta u$ 이고, 그 해는 시간이 지나며 평균으로 간다. 계량 $g$ 를 좌표성분 $g_{ij}$ 의 모음으로 보면 $\Delta g_{ij}$ 를 쓸 수 있는데, 이 양은 좌표를 바꾸면 변해 기하적 뜻이 없다.

좌표를 조화좌표로 고정하면 Ricci 곡률의 성분이

$$
R_{ij}=-\tfrac12\Delta g_{ij}+Q(g,\partial g)
$$

로 쓰이고 $Q$ 는 $g$ 의 1 차 도함수만 담은 항이다. 그래서 $\partial g/\partial t=-2\mathrm{Ric}(g)$ 는 조화좌표에서 $\partial g_{ij}/\partial t=\Delta g_{ij}-2Q$ 꼴이 된다. 좌표에 의존하는 $\Delta g_{ij}$ 대신 좌표에 무관한 $\mathrm{Ric}$ 을 써서 열방정식과 같은 변형을 얻는다.

반지름 $r_0$ 인 둥근 구에서 이 방정식을 푼다. 단위구의 계량을 $g_1$ 이라 하면 $g(t)=r(t)^2g_1$ 이고, $n$ 차원 단위구의 Ricci 곡률이 $(n-1)g_1$ 이므로 $\mathrm{Ric}(g)=(n-1)g_1$ 이다. 방정식의 양변을 $g_1$ 의 계수로 읽으면

$$
\frac{d(r^2)}{dt}=-2(n-1),\qquad r(t)^2=r_0^2-2(n-1)t
$$

이다. 둥근 구는 둥근 구로 남고 반지름만 줄어 $T=r_0^2/2(n-1)$ 에서 한 점으로 모인다. 곡률 $1/r^2$ 는 그 시각에 무한으로 간다. 유한 시간에 해가 끊기는 것이 Ricci 흐름의 일반적인 모습이고, 부피를 고정해 다시 재면 이 해는 상수 곡률 계량에 그대로 머문다.

# 정의

## 방정식

$M$ 을 닫힌 매끄러운 [다양체](manifolds.md), $g_0$ 를 그 위의 Riemann 계량이라 하자. $g(t)$ 가

$$
\frac{\partial g}{\partial t}=-2\mathrm{Ric}(g),\qquad g(0)=g_0
$$

을 만족하면 $g(t)$ 를 $g_0$ 에서 출발한 **Ricci 흐름**이라 한다. 계수 $-2$ 는 $\mathrm{Ric}$ 의 주요항이 $-\tfrac12\Delta g$ 인 것에 맞춰 열방정식의 계수를 $1$ 로 만드는 규격이다.

## 정규화한 흐름

흐름이 부피를 바꾸므로, 부피를 고정한 변형은 스칼라 곡률의 평균 $\langle R\rangle$ 을 빼서 쓴다.

$$
\frac{\partial g}{\partial t}=-2\mathrm{Ric}(g)+\frac{2}{n}\langle R\rangle g,\qquad \langle R\rangle=\frac{\int_M R\thinspace dV}{\int_M dV}
$$

두 흐름의 해는 시간과 크기를 다시 매개화하면 서로 옮겨진다. 수렴을 논할 때는 정규화한 쪽을 쓴다.

## 특이점

$\lbrack 0,T)$ 에서 해가 존재하고 $T$ 를 넘겨 연장되지 않으면 $T$ 를 **특이시각**이라 한다. 닫힌 다양체에서는 $T\lt\infty$ 일 때 $\sup_M\vert\mathrm{Rm}(g(t))\vert\to\infty$ 가 성립한다. 여기서 $\mathrm{Rm}$ 은 Riemann 곡률 텐서다.

# 성질

## 단시간 존재와 유일성

**정리.** 닫힌 $M$ 과 매끄러운 $g_0$ 에 대해 어떤 $T\gt 0$ 이 있어 $\lbrack 0,T)$ 에서 Ricci 흐름의 해가 존재하고 유일하다.[^1]

증명의 요지. $-2\mathrm{Ric}$ 은 미분동형사상군에 불변이므로 선형화한 작용소의 핵이 좌표 변환 방향을 전부 담고, 방정식이 강포물형이 아니다. DeTurck 은 고정한 배경계량으로 정하는 벡터장을 따라 흐르는 미분동형사상을 합성해 이 자유도를 없앴다. 바뀐 방정식은 강포물형이어서 표준적인 단시간 존재 정리가 적용되고, 미분동형사상을 되돌리면 원래 방정식의 해가 나온다.

## 곡률의 전개

스칼라 곡률 $R$ 은 흐름을 따라

$$
\frac{\partial R}{\partial t}=\Delta R+2\vert\mathrm{Ric}\vert^2
$$

을 만족한다.[^1] 오른쪽 둘째 항이 음이 아니므로 최대원리가 $\min_M R$ 이 시간에 대해 비감소임을 준다. $R\ge -C$ 로 시작한 흐름은 그 하계를 유지한다.

$\vert\mathrm{Ric}\vert^2\ge R^2/n$ 을 쓰면 $\min_M R$ 이 상미분방정식 $dr/dt=2r^2/n$ 의 해로 아래에서 눌린다. $R$ 의 최솟값이 양수로 시작하면 유한 시간에 무한으로 가므로 흐름의 존재 시간이 유한하다.

## 3 차원 양의 Ricci 곡률

**정리.** 닫힌 3 다양체 $M$ 의 계량이 양의 Ricci 곡률을 가지면, 정규화한 Ricci 흐름의 해가 상수 단면곡률 계량으로 수렴한다. 따라서 $M$ 은 구면 공간형이다.[^2]

증명의 요지. 3 차원에서는 Weyl 텐서가 $0$ 이므로 곡률 텐서가 Ricci 텐서로 정해진다. Ricci 텐서의 고윳값에 대한 최대원리가 가장 큰 것과 가장 작은 것의 비를 $1$ 로 조이고, 그 핀칭 추정과 도함수 추정이 부분열의 수렴을 준다. 극한의 Ricci 텐서는 계량의 상수배이고 3 차원에서 이 조건은 상수 단면곡률과 같다.

## 수술과 비국소 붕괴

3 차원 특이점은 곡률이 폭발하는 자리를 적당히 확대하면 원기둥 $S^2\times\mathbb R$ 꼴로 보인다. 그 목을 잘라 두 개의 공을 붙이고 흐름을 다시 시작하는 조작이 **수술**이다. 수술을 유한 번만 하면 되는 근거는 각 수술이 부피를 일정량 이상 줄인다는 추정이다.

확대의 극한이 존재한다는 것은 자동이 아니다. Perelman 은 $\mathcal W$ 엔트로피가 흐름을 따라 비감소임을 보이고, 그로부터 유한 시간 안에서는 어떤 척도에서도 부피가 유클리드 공간에 비해 일정 비율 이하로 줄지 않는다는 비국소 붕괴 정리를 얻었다.[^3] 이 추정이 확대열의 콤팩트성을 주어 특이점의 모형을 분류할 수 있게 한다.

## 경사흐름 구조

Perelman 의 범함수

$$
\mathcal F(g,f)=\int_M(R+\vert\nabla f\vert^2)e^{-f}dV
$$

를 $e^{-f}dV$ 를 고정한 채 변분하면 Ricci 흐름이 $\mathcal F$ 의 경사흐름으로 나온다.[^3] 변분에서 나오는 방정식은 $\mathrm{Ric}+\nabla^2f=0$ 이고, 이것을 만족하는 $(g,f)$ 가 경사 Ricci 솔리톤이다. 솔리톤은 흐름을 따라 미분동형사상과 크기 변환만으로 변하는 해이고, 특이점을 확대한 극한이 이 꼴로 나타난다.

# 활용

- **기하화 정리.** 닫힌 3 다양체를 수술을 곁들인 Ricci 흐름으로 변형하면 조각마다 여덟 모형 기하 가운데 하나의 계량이 남는다. 단순연결인 경우가 Poincaré 추측이다.
- **미분가능 구면 정리.** 단면곡률이 $\lbrack 1,4)$ 에 드는 닫힌 다양체는 구면과 미분동형이다. 증명은 곡률 조건이 Ricci 흐름을 따라 유지됨을 보이고 흐름을 상수 곡률까지 끌고 간다.[^4]
- **Kähler 계량의 변형.** [Kähler 다양체](kahler-manifolds.md)에서 흐름이 Kähler 조건을 보존하고 Kähler 류 안의 변형으로 내려온다. 극한이 Kähler–Einstein 계량인지가 대수기하적 안정성 조건과 연결된다.
- **곡률 추정의 도구.** 흐름을 짧은 시간만 돌려 초기 계량을 매끄럽게 만드는 기법을 다른 문제의 보조 단계로 쓴다. Hamilton 의 도함수 추정이 짧은 시간 뒤의 곡률 도함수를 초기 곡률만으로 누른다.

[^1]: Richard S. Hamilton, "Three-manifolds with positive Ricci curvature", *Journal of Differential Geometry* 17 (1982), 255–306. 단시간 존재는 Dennis M. DeTurck, "Deforming metrics in the direction of their Ricci tensors", *Journal of Differential Geometry* 18 (1983), 157–162 의 방법으로 간단해졌다. 전개식과 최대원리의 계산은 Bennett Chow, Dan Knopf, *The Ricci Flow: An Introduction*, American Mathematical Society, 2004, 3 장과 6 장에 있다.
[^2]: Hamilton (1982), 위 논문의 주 정리다.
[^3]: Grisha Perelman, "The entropy formula for the Ricci flow and its geometric applications", arXiv:math/0211159, 2002. 수술을 포함한 증명의 정리된 서술은 John Morgan, Gang Tian, *Ricci Flow and the Poincaré Conjecture*, American Mathematical Society, 2007 이다.
[^4]: Simon Brendle, Richard Schoen, "Manifolds with 1/4-pinched curvature are space forms", *Journal of the American Mathematical Society* 22 (2009), 287–307.

# 연관 문서

## 선수지식

- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

- [기하화 정리](geometrization.md)

#differential_geometry #topology #analysis
