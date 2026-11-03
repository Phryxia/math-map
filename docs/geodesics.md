# 측지선

# 개요

**측지선(geodesic)** 은 곡면이나 휜 공간에서 휘지 않고 곧게 나아가는 곡선이다. 지구 위에서 서울과 뉴욕을 잇는 가장 짧은 길은 지도 위의 직선이 아니라 북극 근처를 지나는 대원의 호다. 구면 위를 걷는 사람이 좌우로 돌지 않고 앞으로만 걸으면 그 대원을 따라간다. 측지선은 이 "돌지 않는다" 는 조건을 미분방정식으로 적어, 휜 공간에서 가까운 두 점 사이의 가장 짧은 길을 구한다.

# 직관

구면 위의 두 점을 잇는 가장 짧은 길을 찾는다. 평면에서라면 답은 직선이고, 직선은 속도가 변하지 않는 곡선, 곧 가속도가 $0$ 인 곡선이다.

구면에서 가속도가 $0$ 인 곡선을 찾아 본다. 단위구면 $S^2\subset\mathbb R^3$ 위의 곡선 $\gamma$ 에 $\gamma''=0$ 을 요구하면 $\gamma$ 는 $\mathbb R^3$ 의 직선이고, 직선은 구면 위에 놓이지 않는다. 가속도를 $0$ 으로 두는 조건은 구면에서 해를 주지 않는다.

가속도가 구면을 벗어나는 방향을 가리켜서 막혔다. $\vert\gamma\vert=1$ 을 두 번 미분하면 $\langle\gamma'',\gamma\rangle=-\vert\gamma'\vert^2$ 이므로 가속도는 반드시 법방향 성분을 갖는다. 그 성분은 곡선이 구면에 붙어 있기 위한 것이므로 빼고, 접평면에 남는 성분만 $0$ 으로 요구한다.

호길이로 매개화하면 $\vert\gamma'\vert=1$ 이고, 접성분이 $0$ 이라는 조건은 $\gamma''$ 이 법방향뿐이라는 뜻이므로 $\gamma''=-\gamma$ 다. 이 방정식의 해는 $\gamma(t)=\cos t\thinspace p+\sin t\thinspace v$ 이고, $p$ 와 $v$ 가 직교하는 단위벡터이므로 궤적은 $p$ 와 $v$ 가 펼치는 평면이 구면을 자른 대원이다. 가속도의 접성분을 $0$ 으로 두는 것이 측지선의 정의다.

# 정의

[Riemann 계량](riemannian-metrics.md)을 가진 다양체 $(M,g)$ 와 그 Levi-Civita 접속(Levi-Civita connection) $\nabla$ 에 대해, 곡선 $\gamma:I\to M$ 이

$$\nabla\_{\dot\gamma}\dot\gamma=0$$

을 만족하면 $\gamma$ 를 **측지선**이라 한다. 좌표 $(x^1,\dots,x^n)$ 에서는 접속계수 $\Gamma^k\_{ij}$ 로

$$\ddot x^k+\Gamma^k\_{ij}\thinspace\dot x^i\dot x^j=0,\qquad k=1,\dots,n$$

이다. 여기서 $\Gamma^k\_{ij}$ 는 [접속](connection.md)의 접속계수, 곧 Christoffel 기호다.

평면의 직교좌표에서는 $\Gamma^k\_{ij}=0$ 이므로 방정식이 $\ddot x^k=0$ 이고 측지선은 등속 직선이다. 직관 절의 단위구면에서는 $\nabla\_{\dot\gamma}\dot\gamma$ 가 $\gamma''$ 의 접성분이고, 측지선은 대원을 등속으로 도는 $\gamma(t)=\cos(ct)\thinspace p+\sin(ct)\thinspace v$ 다.

## 지수사상

점 $p\in M$ 과 $v\in T_pM$ 에 대해 $\gamma(0)=p$, $\dot\gamma(0)=v$ 인 측지선을 $\gamma_v$ 라 할 때 $\exp_p(v)=\gamma_v(1)$ 로 정의한 사상을 **지수사상(exponential map)** 이라 한다.

단위구면의 점 $p$ 에서 $v\ne 0$ 이면 $\exp_p(v)=\cos\vert v\vert\thinspace p+\sin\vert v\vert\thinspace v/\vert v\vert$ 다. 길이 $\pi$ 인 벡터는 모두 대척점 $-p$ 로 간다.

$\exp_p$ 가 미분동형인 근방에서 접공간의 정규직교 좌표를 $\exp_p$ 로 옮겨 얻은 좌표를 **측지 정규좌표(geodesic normal coordinates)** 라 한다. 단위구면에서는 $\vert v\vert\lt\pi$ 인 원판이 그런 근방이고, 측지 정규좌표는 $p$ 를 극으로 하는 지도에서 극까지의 거리와 방향을 보존하는 좌표다.

## 길이 범함수와 에너지 범함수

곡선 $\gamma:\lbrack a,b\rbrack\to M$ 의 길이와 에너지를

$$L(\gamma)=\int_a^b\vert\dot\gamma\vert\thinspace dt,\qquad E(\gamma)=\frac12\int_a^b\vert\dot\gamma\vert^2\thinspace dt$$

로 정의하고, 이것을 **길이 범함수(length functional)** 와 **에너지 범함수(energy functional)** 라 한다. 단위구면에서 각 $\theta$ 인 대원의 호를 $\lbrack 0,1\rbrack$ 에서 속력 $\theta$ 로 돌면 $L=\theta$, $E=\theta^2/2$ 다.

# 성질

## 존재와 유일성

각 $p\in M$ 과 $v\in T_pM$ 에 대해 $\gamma(0)=p$, $\dot\gamma(0)=v$ 인 측지선이 어떤 구간에서 유일하게 있다. 측지선 방정식이 접속계수가 매끄러운 2 계 [상미분방정식](ordinary-differential-equations.md)이므로 해의 존재와 유일성 정리가 적용된다.

측지선은 속력이 일정하다. $\frac{d}{dt}g(\dot\gamma,\dot\gamma)=2g(\nabla\_{\dot\gamma}\dot\gamma,\dot\gamma)=0$ 이다.

## 지수사상의 국소 미분동형성

$\exp_p$ 는 $0$ 의 어떤 근방에서 정의되고, $d(\exp_p)\_0$ 이 항등사상이므로 [역함수 정리](inverse-function-theorem.md)로 그 근방에서 미분동형이다. 측지 정규좌표에서 $p$ 를 지나는 측지선은 원점을 지나는 직선이고 $g\_{ij}(p)=\delta\_{ij}$ 다.

## 변분 특성

고정된 두 끝점을 잇는 곡선들 가운데 $E$ 의 임계점은 측지선이다. 변분 $\gamma_s$ 의 변분장(variation field)을 $V$ 라 하면 1 차 변분은

$$\frac{d}{ds}E(\gamma_s)\Big\vert\_{s=0}=-\int_a^b g(V,\nabla\_{\dot\gamma}\dot\gamma)\thinspace dt$$

이고, 끝점이 고정되어 경계항이 사라진다. 모든 $V$ 에서 이 값이 $0$ 이면 $\nabla\_{\dot\gamma}\dot\gamma=0$ 이다. $L$ 의 임계점은 매개화를 바꾼 측지선이고, 호길이 매개화를 고르면 $E$ 의 임계점과 같다.[^1]

## 국소 최단성

각 점에 근방이 있어, 그 안의 두 점을 잇는 측지선이 두 점을 잇는 모든 곡선 가운데 길이가 가장 짧다.[^1] 증명은 측지 정규좌표에서 Gauss 보조정리(Gauss lemma)를 쓴다. 원점에서 나가는 측지선이 거리구와 직교하므로, 다른 곡선의 길이는 반지름 방향 성분만 세어도 측지선의 길이 이상이 된다.

전역에서는 최단이 아닐 수 있다. 구면에서 길이가 $\pi$ 를 넘는 대원의 호는 측지선이지만 반대쪽 호가 더 짧다.

## Hopf–Rinow 정리

$(M,g)$ 가 연결일 때 다음이 동치다. 이것이 Hopf–Rinow 정리(Hopf–Rinow theorem)다.[^1]

- $M$ 이 거리공간으로 완비다.
- 모든 측지선이 $\mathbb R$ 전체로 연장된다.
- 어떤 $p$ 에서 $\exp_p$ 가 $T_pM$ 전체에서 정의된다.

그리고 이 조건이 성립하면 임의의 두 점을 길이가 거리와 같은 측지선이 잇는다.

## 켤레점

측지선 $\gamma$ 를 따르는 Jacobi 방정식(Jacobi equation) $\nabla\_{\dot\gamma}\nabla\_{\dot\gamma}J+R(J,\dot\gamma)\dot\gamma=0$ 의 해를 [Jacobi 장](jacobi-fields.md)이라 한다. $\gamma(0)$ 과 $\gamma(t_0)$ 에서 모두 $0$ 이 되는 $0$ 아닌 Jacobi 장이 있으면 두 점을 켤레점(conjugate point)이라 한다. 단위구면에서 $p$ 와 $-p$ 가 켤레점이고, 길이 $\pi$ 인 벡터가 모두 $-p$ 로 가는 것이 이것이다.

켤레점을 지난 뒤의 측지선은 최단이 아니다.[^1] 곡률 $R$ 이 방정식의 계수이므로 켤레점의 위치가 곡률로 통제된다. 단면곡률이 $\kappa\gt 0$ 이상이면 길이 $\pi/\sqrt\kappa$ 안에 켤레점이 생기고, 단면곡률이 $0$ 이하이면 켤레점이 없다. 이 두 진술이 [측지선의 비교정리](geodesic-comparison-theorems.md)의 특수한 경우다.

# 활용

- 측지선 다발이 퍼지는지 모이는지가 [곡률](curvature.md)의 부호다. 켤레점의 유무로 적은 이 성질이 Cartan–Hadamard 정리와 Bonnet–Myers 정리의 가정이다.
- [쌍곡 3 다양체](hyperbolic-3-manifolds.md)에서 닫힌 측지선의 길이가 위상 불변량이고, 그 길이 스펙트럼이 [Selberg 대각합 공식](selberg-trace-formula.md)에서 Laplace 고윳값과 짝지어진다.
- 두 점을 잇는 측지선은 경로공간 위 에너지 함수의 임계점이므로, [Morse 이론](morse-theory.md)이 그 개수의 하한을 경로공간의 호몰로지로 준다.
- 계량이 [Killing 벡터장](killing-vector-fields.md)을 가지면 그 방향의 운동량이 측지선을 따라 상수이므로 방정식을 낮은 차수로 푼다. 회전면에서 이 보존량이 Clairaut 관계식(Clairaut's relation) $r\sin\psi=$ 상수이고, $r$ 은 회전축까지의 거리, $\psi$ 는 측지선과 자오선이 이루는 각이다.
- 일반상대성이론(general relativity)의 Lorentz 계량(Lorentzian metric)에서 자유낙하하는 물체의 세계선이 측지선이고, 측지선 방정식이 중력에 의한 운동방정식이다.

[^1]: Manfredo P. do Carmo, *Riemannian Geometry*, Birkhäuser, 1992. 측지선과 지수사상은 3 장, 변분 공식과 국소 최단성은 3 장과 9 장, Hopf–Rinow 는 7 장, Jacobi 장과 켤레점은 5 장과 10 장이다.

# 연관 문서

## 선수지식

- [Riemann 계량](riemannian-metrics.md)
- [접속](connection.md)

## 더 알아보기

- [Jacobi 장](jacobi-fields.md)
- [측지선의 비교정리](geodesic-comparison-theorems.md)
- [공간형](space-forms.md)

#differential_geometry #analysis #topology
