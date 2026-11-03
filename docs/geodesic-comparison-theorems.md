# 측지선의 비교정리

# 개요

**측지선의 비교정리(geodesic comparison theorem)** 는 공간이 휘어진 정도에 한계가 있을 때, 한 점에서 나란히 출발한 [측지선](geodesics.md)들이 벌어지는 속도를 구면이나 평면의 것과 견주는 정리다. 구면의 북극에서 출발한 경선들은 처음에는 평면의 직선처럼 벌어지다가 적도를 지나 다시 모여 남극에서 만나고, 평면의 직선들은 계속 벌어진다. 이 정리는 [곡률](curvature.md)이 구면 이상이면 측지선들이 구면만큼 빨리 모이고 평면 이하이면 평면만큼은 벌어진다는 것을 보여, 곡률 조건만으로 공간의 지름과 부피의 범위를 정한다.

# 직관

측지선 $\gamma$ 를 따라 이웃한 측지선이 벌어진 정도는 [Jacobi 장](jacobi-fields.md)의 방정식

$$
\nabla\_{\dot\gamma}\nabla\_{\dot\gamma}J+R(J,\dot\gamma)\dot\gamma=0
$$

의 해 $J$ 의 크기로 잰다. 단면곡률(sectional curvature)이 상수 $\kappa$ 이면 이 방정식은 $\gamma$ 에 수직인 성분에서 $\vert J\vert''+\kappa\vert J\vert=0$ 이 되고, $\vert J(0)\vert=0$, $\vert J\vert'(0)=1$ 인 해는 $\kappa\gt0$ 에서 $\sin(\sqrt\kappa\thinspace t)/\sqrt\kappa$, $\kappa=0$ 에서 $t$, $\kappa\lt0$ 에서 $\sinh(\sqrt{-\kappa}\thinspace t)/\sqrt{-\kappa}$ 다.

첫 해는 $t=\pi/\sqrt\kappa$ 에서 다시 $0$ 이 되고 나머지 둘은 $0$ 이 되지 않는다. 곡률이 상수가 아니면 방정식의 계수가 변하지만, 계수에 상한이나 하한이 있으면 2계 선형 [상미분방정식](ordinary-differential-equations.md)의 해를 계수끼리 견주는 Sturm 비교 정리(Sturm comparison theorem)로 $\vert J\vert$ 를 위 세 함수와 견줄 수 있다. 곡률이 큰 쪽에서 해가 더 빨리 $0$ 이 되므로, 이웃한 측지선들이 다시 만나는 점도 더 이르게 나타난다.

# 정의

## 모형 함수

$\kappa\in\mathbb R$ 에 대해

$$
s_\kappa(t)=\begin{cases}\sin(\sqrt\kappa\thinspace t)/\sqrt\kappa & \kappa\gt0\cr t & \kappa=0\cr \sinh(\sqrt{-\kappa}\thinspace t)/\sqrt{-\kappa} & \kappa\lt0\end{cases}
$$

를 **모형 함수(model function)** 라 한다. $s_\kappa$ 는 $s''+\kappa s=0$, $s(0)=0$, $s'(0)=1$ 의 해이고, 단면곡률이 상수 $\kappa$ 인 공간에서 $J(0)=0$, $\vert J\vert'(0)=1$ 인 수직 Jacobi 장의 크기가 $s_\kappa$ 다.

단위구면에서 북극을 출발하는 경선을 따라 이웃 경선으로 가는 Jacobi 장의 크기는 $s_1(t)=\sin t$ 이고, 평면에서는 $s_0(t)=t$ 다.

## 켤레점

측지선 $\gamma$ 위의 점 $\gamma(t_0)$, $t_0\gt 0$ 에서 $J(0)=0$, $J(t_0)=0$ 인 $0$ 이 아닌 Jacobi 장이 있으면 $\gamma(t_0)$ 을 $\gamma(0)$ 의 **켤레점(conjugate point)** 이라 한다. 단위구면에서 북극의 첫 켤레점은 $\sin t$ 가 처음 $0$ 이 되는 $t=\pi$, 곧 남극이다. 평면과 쌍곡평면에서는 $s_0$, $s_{-1}$ 이 $t\gt 0$ 에서 $0$ 이 되지 않으므로 켤레점이 없다.

## 곡률 조건

$M$ 의 단면곡률이 모든 $2$ 차원 부분공간에서 $\kappa$ 이상인 것을 $\mathrm{sec}\ge\kappa$ 로 쓰고, Ricci 곡률(Ricci curvature)이 단위벡터에서 $(n-1)\kappa$ 이상인 것을 $\mathrm{Ric}\ge(n-1)\kappa$ 로 쓴다. $n$ 은 $M$ 의 차원이다.

Ricci 곡률 $\mathrm{Ric}(v,v)$ 는 단위벡터 $v$ 를 포함하는 서로 수직인 평면 $n-1$ 개의 단면곡률의 합이다. $n$ 차원 단위구면은 $\mathrm{sec}=1$, $\mathrm{Ric}=n-1$ 이고, 반지름 $2$ 인 구면은 $\mathrm{sec}=1/4$ 다. 쌍곡공간은 $\mathrm{sec}=-1$ 이다.

# 성질

## Rauch 비교정리

$M$ 과 $\widetilde M$ 의 측지선 $\gamma$, $\tilde\gamma$ 와 그 위의 Jacobi 장 $J$, $\tilde J$ 가 $\vert J(0)\vert=\vert\tilde J(0)\vert=0$ 과 $\vert J\vert'(0)=\vert\tilde J\vert'(0)$ 을 만족하고, 대응하는 단면곡률이 늘 $\mathrm{sec}\_M\le\mathrm{sec}\_{\widetilde M}$ 이면 $\tilde\gamma$ 의 첫 켤레점 전까지 $\vert J\vert\ge\vert\tilde J\vert$ 다. 이것이 Rauch 비교정리(Rauch comparison theorem)다.[^1]

$\vert J\vert$ 가 만족하는 2계 부등식의 계수가 작은 쪽에서 해가 덜 줄어들므로, Sturm 형 비교로 크기의 부등식이 따라 나온다. $\widetilde M$ 을 단위구면으로 잡으면 $\mathrm{sec}\le 1$ 인 $M$ 에서 $\vert J\vert\ge\sin t$ 가 $t\le\pi$ 에서 성립한다.

## Cartan–Hadamard 정리

$M$ 이 완비(complete)이고 단연결이며 $\mathrm{sec}\le0$ 이면 임의의 점 $p$ 에서의 지수사상(exponential map) $\exp_p\colon T_pM\to M$ 이 미분동형이다. 이것이 Cartan–Hadamard 정리(Cartan–Hadamard theorem)다.[^1]

$\mathrm{sec}\le0$ 이면 모형 함수 $s_0(t)=t$ 와의 비교로 $\vert J\vert$ 가 증가하므로 켤레점이 없고, 따라서 $\exp_p$ 가 국소 미분동형이다. $\exp_p$ 로 $M$ 의 계량을 $T_pM$ 에 당기면 완비 계량이 되고 $\exp_p$ 가 국소 등거리사상이므로 덮개 사상이다. 단연결성으로 이 덮개 사상이 미분동형이다.

따라서 이런 $M$ 은 $\mathbb R^n$ 과 미분동형이고 두 점을 잇는 측지선이 유일하다. 평평한 원환면은 단연결이 아니지만 그 보편덮개 $\mathbb R^2$ 에 정리가 적용된다.

## Bonnet–Myers 정리

$M$ 이 완비이고 $\mathrm{Ric}\ge(n-1)\kappa$ 이며 $\kappa\gt0$ 이면 $M$ 의 지름이 $\pi/\sqrt\kappa$ 이하이고 $M$ 은 콤팩트다. 이것이 Bonnet–Myers 정리(Bonnet–Myers theorem)다.[^1]

길이가 $\pi/\sqrt\kappa$ 를 넘는 측지선을 잡고 길이의 2차 변분(second variation)을 계산하면, Ricci 곡률의 하한 때문에 그 변분이 음수가 되는 방향이 있다. 그러면 그 측지선은 최단이 아니다. 따라서 어떤 두 점 사이의 거리도 $\pi/\sqrt\kappa$ 를 넘지 않는다. 단위구면은 $\kappa=1$ 이고 지름이 $\pi$ 이므로 등호가 성립한다.

보편덮개에도 같은 곡률 하한이 있으므로 보편덮개가 콤팩트하고, 덮개의 겹수가 유한하므로 [기본군](fundamental-group.md)이 유한하다. [실사영공간](real-projective-space.md) $\mathbb{RP}^n$ 은 $\mathrm{Ric}=n-1$ 이고 기본군이 $\mathbb Z/2$ 다.

## Bishop–Gromov 부피 비교

$\mathrm{Ric}\ge(n-1)\kappa$ 이면 반지름 $r$ 의 측지구(geodesic ball)의 부피 $\mathrm{vol}\thinspace B(p,r)$ 를 상수곡률 $\kappa$ 공간의 같은 반지름 구의 부피 $V_\kappa(r)$ 로 나눈 값이 $r$ 의 비증가 함수다. 이것이 Bishop–Gromov 부피 비교(Bishop–Gromov volume comparison)다.[^2]

지수사상의 Jacobi 행렬식을 Jacobi 장으로 적고 Ricci 곡률의 하한으로 그 로그미분을 위에서 누르면 비의 단조성이 나온다.

$r\to0$ 에서 비가 $1$ 이므로 $\mathrm{vol}\thinspace B(p,r)\le V_\kappa(r)$ 이다.

# 활용

- Ricci 곡률의 하한만으로 다양체가 콤팩트하고 지름이 유계임을 얻는다. 계량을 구체적으로 적지 않고 곡률 부등식에서 결론이 나온다.
- Cartan–Hadamard 정리로 $\mathrm{sec}\le0$ 인 완비 다양체의 보편덮개는 $\mathbb R^n$ 과 미분동형이므로 고차 [호모토피군](homotopy-groups.md)이 모두 자명하다. 그 다양체의 호모토피 유형은 기본군으로 정해진다.
- Bishop–Gromov 비교로 $\mathrm{Ric}\ge 0$ 인 다양체에서 반지름 $r$ 인 공의 부피가 $\mathbb R^n$ 의 공의 부피 이하다. 이 추정을 보편덮개에 쓰면 콤팩트한 $\mathrm{Ric}\ge 0$ 다양체의 기본군에서 생성원 길이 $r$ 이하의 단어로 적히는 원소의 수가 $r^n$ 의 상수배 이하다.
- [Ricci 흐름](ricci-flow.md)에서 흐름을 따라 곡률의 하한이 보존되는지를 보고, 보존되는 구간에서 부피와 지름의 비교 추정을 흐름의 특이점 분석에 쓴다.

[^1]: Manfredo P. do Carmo, *Riemannian Geometry*, Birkhäuser (1992). Rauch 비교정리와 Cartan–Hadamard 는 10장과 7장, Bonnet–Myers 는 9장이다.
[^2]: R. L. Bishop, R. J. Crittenden, *Geometry of Manifolds*, Academic Press (1964), 11장. Gromov 의 형태와 쓰임은 M. Gromov, *Metric Structures for Riemannian and Non-Riemannian Spaces*, Birkhäuser (1999) 의 3장과 5장에 있다.

# 연관 문서

## 선수지식

- [측지선](geodesics.md)
- [Jacobi 장](jacobi-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #topology
