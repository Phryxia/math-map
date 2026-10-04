# 측지선

# 개요

측지선은 Riemann 다양체에서 가속도의 접성분이 $0$ 인 곡선이다. Levi-Civita 접속으로 적으면 $\nabla\_{\dot\gamma}\dot\gamma=0$ 이고, 좌표에서는 접속계수가 들어간 2 계 상미분방정식이 된다.

이 조건은 길이의 1 차 변분이 $0$ 이라는 조건과 같다. 그래서 측지선은 가까운 두 점 사이의 최단 경로이지만, 멀리 떨어진 두 점에서는 최단이 아닐 수 있다. 어디까지 최단인지를 곡률이 켤레점의 위치로 통제한다.

# 직관

구면 위의 두 점을 잇는 가장 짧은 길을 찾는다. 평면에서라면 답은 직선이고, 직선은 속도가 변하지 않는 곡선, 곧 가속도가 $0$ 인 곡선이다.

구면에서 가속도가 $0$ 인 곡선을 찾아 본다. 단위구면 $S^2\subset\mathbb R^3$ 위의 곡선 $\gamma$ 에 $\gamma''=0$ 을 요구하면 $\gamma$ 는 $\mathbb R^3$ 의 직선이고, 직선은 구면 위에 놓이지 않는다. 가속도를 $0$ 으로 두는 조건은 구면에서 해를 주지 않는다.

가속도가 구면을 벗어나는 방향을 가리켜서 막혔다. $\vert\gamma\vert=1$ 을 두 번 미분하면 $\langle\gamma'',\gamma\rangle=-\vert\gamma'\vert^2$ 이므로 가속도는 반드시 법방향 성분을 갖는다. 그 성분은 곡선이 구면에 붙어 있기 위한 것이므로 빼고, 접평면에 남는 성분만 $0$ 으로 요구한다.

호길이로 매개화하면 $\vert\gamma'\vert=1$ 이고, 접성분이 $0$ 이라는 조건은 $\gamma''$ 이 법방향뿐이라는 뜻이므로 $\gamma''=-\gamma$ 다. 이 방정식의 해는 $\gamma(t)=\cos t\thinspace p+\sin t\thinspace v$ 이고, $p$ 와 $v$ 가 직교하는 단위벡터이므로 궤적은 $p$ 와 $v$ 가 펼치는 평면이 구면을 자른 대원이다. 가속도의 접성분을 $0$ 으로 두는 것이 측지선의 정의다.

# 정의

Riemann 다양체 $(M,g)$ 와 그 Levi-Civita 접속 $\nabla$ 에 대해, 곡선 $\gamma:I\to M$ 이

$$\nabla\_{\dot\gamma}\dot\gamma=0$$

을 만족하면 $\gamma$ 를 **측지선**이라 한다. 좌표 $(x^1,\dots,x^n)$ 에서는 접속계수 $\Gamma^k\_{ij}$ 로

$$\ddot x^k+\Gamma^k\_{ij}\thinspace\dot x^i\dot x^j=0,\qquad k=1,\dots,n$$

이다. 측지선은 속력이 일정하다. $\frac{d}{dt}g(\dot\gamma,\dot\gamma)=2g(\nabla\_{\dot\gamma}\dot\gamma,\dot\gamma)=0$ 이기 때문이다.

## 지수사상

점 $p\in M$ 과 $v\in T_pM$ 에 대해 $\gamma(0)=p$, $\dot\gamma(0)=v$ 인 측지선을 $\gamma_v$ 라 할 때 $\exp_p(v)=\gamma_v(1)$ 로 정의한 사상을 **지수사상**이라 한다. $\exp_p$ 는 $0$ 의 어떤 근방에서 정의되고, 그 근방에서 미분동형이다.

$\exp_p$ 로 접공간의 좌표를 옮겨 얻은 좌표를 측지 정규좌표라 한다. 그 좌표에서 $p$ 를 지나는 측지선은 원점을 지나는 직선이고 $g\_{ij}(p)=\delta\_{ij}$ 다.

## 길이 범함수와 에너지 범함수

곡선 $\gamma:\lbrack a,b\rbrack\to M$ 의 길이와 에너지를

$$L(\gamma)=\int_a^b\vert\dot\gamma\vert\thinspace dt,\qquad E(\gamma)=\frac12\int_a^b\vert\dot\gamma\vert^2\thinspace dt$$

로 정의한다.

# 성질

## 존재와 유일성

각 $p\in M$ 과 $v\in T_pM$ 에 대해 $\gamma(0)=p$, $\dot\gamma(0)=v$ 인 측지선이 어떤 구간에서 유일하게 있다. 측지선 방정식이 2 계 [상미분방정식](ordinary-differential-equations.md)이고 접속계수가 매끄럽기 때문이다.

## 변분 특성

고정된 두 끝점을 잇는 곡선들 가운데 $E$ 의 임계점은 측지선이다. 변분 $\gamma_s$ 의 변분장을 $V$ 라 하면 1 차 변분은

$$\frac{d}{ds}E(\gamma_s)\Big\vert\_{s=0}=-\int_a^b g(V,\nabla\_{\dot\gamma}\dot\gamma)\thinspace dt$$

이고, 끝점이 고정되어 경계항이 사라진다. 모든 $V$ 에서 이 값이 $0$ 이면 $\nabla\_{\dot\gamma}\dot\gamma=0$ 이다. $L$ 의 임계점은 매개화를 바꾼 측지선이고, 호길이 매개화를 고르면 $E$ 의 임계점과 같다.[^1]

## 국소 최단성

각 점에 근방이 있어, 그 안의 두 점을 잇는 측지선이 두 점을 잇는 모든 곡선 가운데 길이가 가장 짧다.[^1] 증명은 측지 정규좌표에서 Gauss 보조정리를 쓴다. 원점에서 나가는 측지선이 거리구와 직교하므로, 다른 곡선의 길이는 반지름 방향 성분만 세어도 측지선의 길이 이상이 된다.

전역에서는 최단이 아닐 수 있다. 구면에서 길이가 $\pi$ 를 넘는 대원의 호는 측지선이지만 반대쪽 호가 더 짧다.

## Hopf–Rinow 정리

$(M,g)$ 가 연결일 때 다음이 동치다.[^1]

- $M$ 이 거리공간으로 완비다.
- 모든 측지선이 $\mathbb R$ 전체로 연장된다.
- 어떤 $p$ 에서 $\exp_p$ 가 $T_pM$ 전체에서 정의된다.

그리고 이 조건이 성립하면 임의의 두 점을 길이가 거리와 같은 측지선이 잇는다.

## 켤레점

측지선 $\gamma$ 를 따르는 Jacobi 방정식 $\nabla\_{\dot\gamma}\nabla\_{\dot\gamma}J+R(J,\dot\gamma)\dot\gamma=0$ 의 해를 Jacobi 장이라 한다. $\gamma(0)$ 과 $\gamma(t_0)$ 에서 모두 $0$ 이 되는 $0$ 아닌 Jacobi 장이 있으면 두 점을 켤레점이라 한다.

켤레점을 지난 뒤의 측지선은 최단이 아니다.[^1] 곡률 $R$ 이 방정식의 계수이므로 켤레점의 위치가 곡률로 통제된다. 단면곡률이 $\kappa\gt 0$ 이상이면 길이 $\pi/\sqrt\kappa$ 안에 켤레점이 생기고, 단면곡률이 $0$ 이하이면 켤레점이 없다.

[^1]: Manfredo P. do Carmo, *Riemannian Geometry*, Birkhäuser, 1992. 측지선과 지수사상은 3 장, 변분 공식과 국소 최단성은 3 장과 9 장, Hopf–Rinow 는 7 장, Jacobi 장과 켤레점은 5 장과 10 장이다.

# 활용

- **곡률의 측정.** 측지선 다발이 퍼지는지 모이는지가 [곡률](curvature.md)의 부호다. 켤레점의 유무로 적은 이 성질이 Cartan–Hadamard 정리와 Bonnet–Myers 정리의 가정이다.
- **쌍곡 다양체.** [쌍곡 3 다양체](hyperbolic-3-manifolds.md)에서 닫힌 측지선의 길이가 위상 불변량이고, 그 길이 스펙트럼이 [Selberg 대각합 공식](selberg-trace-formula.md)에서 Laplace 고윳값과 짝지어진다.
- **임계점 이론.** 두 점을 잇는 측지선은 경로공간 위 에너지 함수의 임계점이므로, [Morse 이론](morse-theory.md)이 그 개수의 하한을 경로공간의 호몰로지로 준다.
- **일반상대성.** Lorentz 계량에서 자유낙하하는 물체의 세계선이 측지선이고, 측지선 방정식이 중력에 의한 운동방정식이다.

# 연관 문서

## 선수지식

- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #topology
