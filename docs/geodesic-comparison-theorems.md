# 측지선의 비교정리

# 개요

[측지선](geodesics.md)이 어디까지 최단인지는 켤레점의 위치가 정하고, 켤레점의 위치는 Jacobi 방정식의 계수인 [곡률](curvature.md)이 정한다.

**비교정리**는 곡률에 상한이나 하한이 있을 때 측지선이 벌어지는 속도를 상수곡률 공간의 것과 견준다. 이 비교에서 지름의 유계성, 지수사상의 전역 미분동형성, 부피의 증가 속도가 곡률 조건만으로 나온다.

# 직관

측지선 $\gamma$ 를 따라 이웃한 측지선이 얼마나 벌어지는지는 Jacobi 방정식

$$
\nabla\_{\dot\gamma}\nabla\_{\dot\gamma}J+R(J,\dot\gamma)\dot\gamma=0
$$

의 해 $J$ 의 크기가 말해 준다. 단면곡률이 상수 $\kappa$ 이면 이 방정식은 $\gamma$ 에 수직인 성분에서 $\vert J\vert''+\kappa\vert J\vert=0$ 이 되고, $\vert J(0)\vert=0$, $\vert J\vert'(0)=1$ 인 해는 $\kappa\gt0$ 에서 $\sin(\sqrt\kappa\thinspace t)/\sqrt\kappa$, $\kappa=0$ 에서 $t$, $\kappa\lt0$ 에서 $\sinh(\sqrt{-\kappa}\thinspace t)/\sqrt{-\kappa}$ 다.

첫 해는 $t=\pi/\sqrt\kappa$ 에서 다시 $0$ 이 되고 나머지 둘은 $0$ 이 되지 않는다. 곡률이 상수가 아니면 방정식의 계수가 변하지만, 계수에 상한이나 하한이 있으면 2계 선형 상미분방정식의 해를 계수끼리 견주는 Sturm 비교로 $\vert J\vert$ 를 위 세 함수와 견줄 수 있다. 곡률이 큰 쪽이 해를 더 빨리 $0$ 으로 되돌리므로 켤레점이 더 이르게 나타난다.

# 정의

## 모형 함수

$\kappa\in\mathbb R$ 에 대해

$$
s_\kappa(t)=\begin{cases}\sin(\sqrt\kappa\thinspace t)/\sqrt\kappa & \kappa\gt0\cr t & \kappa=0\cr \sinh(\sqrt{-\kappa}\thinspace t)/\sqrt{-\kappa} & \kappa\lt0\end{cases}
$$

를 **모형 함수**라 한다. $s_\kappa$ 는 $s''+\kappa s=0$, $s(0)=0$, $s'(0)=1$ 의 해이고, 단면곡률이 상수 $\kappa$ 인 공간에서 Jacobi 장의 크기가 $s_\kappa$ 다.

## 곡률 조건

$M$ 의 단면곡률이 모든 $2$ 차원 부분공간에서 $\kappa$ 이상인 것을 $\mathrm{sec}\ge\kappa$ 로 쓰고, Ricci 곡률이 단위벡터에서 $(n-1)\kappa$ 이상인 것을 $\mathrm{Ric}\ge(n-1)\kappa$ 로 쓴다. $n$ 은 $M$ 의 차원이다.

# 성질

## Rauch 비교정리

**정리.** $M$ 과 $\widetilde M$ 의 측지선 $\gamma$, $\tilde\gamma$ 와 그 위의 Jacobi 장 $J$, $\tilde J$ 가 $\vert J(0)\vert=\vert\tilde J(0)\vert=0$ 과 $\vert J\vert'(0)=\vert\tilde J\vert'(0)$ 을 만족하고, 대응하는 단면곡률이 늘 $\mathrm{sec}\_M\le\mathrm{sec}\_{\widetilde M}$ 이면 첫 켤레점 전까지 $\vert J\vert\ge\vert\tilde J\vert$ 다.[^1]

$\vert J\vert$ 가 만족하는 2계 부등식의 계수가 작은 쪽이 해를 덜 누르므로, Sturm 형 비교로 크기의 부등식이 그대로 따라온다. ∎

## Cartan–Hadamard 정리

**정리.** $M$ 이 완비이고 단연결이며 $\mathrm{sec}\le0$ 이면 임의의 점 $p$ 에서의 지수사상 $\exp_p:T_pM\to M$ 이 미분동형이다.[^1]

$\mathrm{sec}\le0$ 이면 모형 함수 $s_0(t)=t$ 와의 비교로 $\vert J\vert$ 가 증가하므로 켤레점이 없고, 따라서 $\exp_p$ 가 국소 미분동형이다. 완비성으로 $T_pM$ 의 평평한 계량을 당겨 올 수 있고, 단연결성으로 덮개 사상이 동형이 된다. ∎

따라서 이런 $M$ 은 $\mathbb R^n$ 과 미분동형이고 두 점을 잇는 측지선이 유일하다.

## Bonnet–Myers 정리

**정리.** $M$ 이 완비이고 $\mathrm{Ric}\ge(n-1)\kappa$ 이며 $\kappa\gt0$ 이면 $M$ 의 지름이 $\pi/\sqrt\kappa$ 이하이고 $M$ 은 콤팩트다.[^1]

길이가 $\pi/\sqrt\kappa$ 를 넘는 측지선을 잡고 Jacobi 장으로 길이의 2차 변분을 계산하면, Ricci 곡률의 하한이 그 변분을 음수로 만든다. 그러면 그 측지선은 최단이 아니다. 따라서 어떤 두 점 사이의 거리도 $\pi/\sqrt\kappa$ 를 넘지 않는다. ∎

유한 덮개에도 같은 부등식이 적용되므로 [기본군](fundamental-group.md)이 유한하다.

## Bishop–Gromov 부피 비교

**정리.** $\mathrm{Ric}\ge(n-1)\kappa$ 이면 반지름 $r$ 의 측지구의 부피 $\mathrm{vol}\thinspace B(p,r)$ 를 상수곡률 $\kappa$ 공간의 같은 반지름 구의 부피 $V_\kappa(r)$ 로 나눈 값이 $r$ 의 비증가 함수다.[^2]

지수사상의 Jacobi 행렬식을 Jacobi 장으로 적고 Ricci 곡률의 하한으로 그 로그미분을 누르면 비의 단조성이 나온다. ∎

$r\to0$ 에서 비가 $1$ 이므로 $\mathrm{vol}\thinspace B(p,r)\le V_\kappa(r)$ 이다.

# 활용

- **지름과 콤팩트성의 판정.** Ricci 곡률의 하한만으로 다양체가 콤팩트하고 지름이 유계임을 얻는다. 계량을 구체적으로 적지 않고 곡률 부등식에서 결론이 나온다.
- **부정곡률 다양체의 위상.** Cartan–Hadamard 정리로 $\mathrm{sec}\le0$ 인 완비 단연결 다양체는 $\mathbb R^n$ 과 미분동형이므로 고차 호모토피군이 모두 자명하다. 콤팩트인 경우 그 다양체는 기본군이 결정하는 공간의 보편덮개가 된다.
- **부피 성장과 기본군.** Bishop–Gromov 비교로 비음 Ricci 곡률 다양체의 부피 증가가 다항적으로 눌리고, 그 보편덮개 위의 부피 추정이 기본군의 증가 속도를 제한한다.
- **[Ricci 흐름](ricci-flow.md)의 추정.** 흐름을 따라 곡률의 하한이 보존되는지를 보고, 보존되는 구간에서 부피와 지름의 비교 추정을 흐름의 특이점 분석에 쓴다.

[^1]: Manfredo P. do Carmo, *Riemannian Geometry*, Birkhäuser (1992). Rauch 비교정리와 Cartan–Hadamard 는 10장과 7장, Bonnet–Myers 는 9장이다.
[^2]: R. L. Bishop, R. J. Crittenden, *Geometry of Manifolds*, Academic Press (1964), 11장. Gromov 의 형태와 쓰임은 M. Gromov, *Metric Structures for Riemannian and Non-Riemannian Spaces*, Birkhäuser (1999) 의 3장과 5장에 있다.

# 연관 문서

## 선수지식

- [측지선](geodesics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #topology
