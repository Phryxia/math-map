# Jacobi 장

# 개요

**Jacobi 장(Jacobi field)** 은 측지선 $\gamma$ 를 따라 정의된 [벡터장](vector-fields.md) 가운데 Jacobi 방정식

$$
D_t^2J+R(J,\dot\gamma)\dot\gamma=0
$$

을 만족하는 것이다. $D_t$ 는 $\gamma$ 를 따르는 공변미분이고 $R$ 은 Riemann 곡률 텐서다. Jacobi 장은 [측지선](geodesics.md)들의 한 매개변수 족을 [미분](derivative.md)한 것과 같고, 이웃한 측지선이 얼마나 벌어지는지를 [곡률](curvature.md)로 적는다.

# 직관

구면 $S^2$ 의 북극에서 출발하는 경도선들은 모두 측지선이다. 출발 방향의 각이 $s$ 만큼 다른 두 경도선은 거리 $t$ 만큼 간 뒤 $\sin t\cdot s$ 쯤 떨어져 있다. 두 경도선은 처음에 벌어지다가 $t=\pi/2$ 인 적도에서 가장 멀어지고, $t=\pi$ 인 남극에서 다시 만난다.

벌어진 정도 $\sin t$ 는 $y''+y=0$ 의 해다. 평면에서 같은 일을 하면 반직선이 $t\cdot s$ 로 벌어지고 $y''=0$ 의 해다. 계수 $1$ 과 $0$ 이 곡률이다. 경도선의 족을 $s$ 로 미분한 벡터장이 Jacobi 장이고, 그 크기가 이 방정식을 따른다.

# 정의

## 측지선의 변분

$\Gamma(s,t)$ 가 각 $s$ 에서 $t\mapsto\Gamma(s,t)$ 가 측지선인 매끄러운 족이고 $\Gamma(0,t)=\gamma(t)$ 라 하자. $J(t)=\partial_s\Gamma(0,t)$ 로 두면 $D_t\partial_t\Gamma=0$ 을 $s$ 로 미분하고 곡률의 정의 $D_sD_t-D_tD_s=R(\partial_s\Gamma,\partial_t\Gamma)$ 를 쓰면 $J$ 가 Jacobi 방정식을 만족한다. 역으로 Jacobi 장은 모두 이런 변분에서 온다.[^1]

## 해 공간

Jacobi 방정식은 평행한 정규직교 틀에서 2 계 선형 [상미분방정식](ordinary-differential-equations.md) 계이므로, $J(0)$ 과 $D_tJ(0)$ 을 정하면 해가 하나로 정해진다. $\dim M=n$ 이면 해 공간은 $2n$ 차원이다. $(a+bt)\dot\gamma$ 꼴의 해는 측지선을 다시 매개화한 변분에서 오므로, 보통 $\dot\gamma$ 와 수직인 Jacobi 장만 본다.

## 켤레점

$\gamma(0)$ 과 $\gamma(t_0)$ 에서 모두 $0$ 이 되는 $0$ 아닌 Jacobi 장이 있으면 $\gamma(t_0)$ 을 $\gamma(0)$ 의 **켤레점(conjugate point)** 이라 한다. 그런 Jacobi 장이 이루는 공간의 차원을 켤레점의 **중복도(multiplicity)** 라 하고, 중복도는 $n-1$ 이하다.

# 성질

## 상수 곡률

단면곡률이 상수 $\kappa$ 이면 $E$ 를 $\dot\gamma$ 와 수직인 평행 단위 벡터장으로 하여, $J(0)=0$ 이고 $D_tJ(0)=E(0)$ 인 Jacobi 장은 $J(t)=s_\kappa(t)E(t)$ 다. $s_\kappa$ 는 $\kappa\gt 0$ 에서 $\sin(\sqrt\kappa t)/\sqrt\kappa$, $\kappa=0$ 에서 $t$, $\kappa\lt 0$ 에서 $\sinh(\sqrt{-\kappa}t)/\sqrt{-\kappa}$ 다. 단위 구면 $S^n$ 에서 $\gamma(0)$ 의 첫 켤레점은 $t=\pi$ 인 대척점이고 중복도는 $n-1$ 이다.

## 지수사상의 미분

$p=\gamma(0)$, $v=\dot\gamma(0)$ 이고 $w\in T_pM$ 이면

$$
d(\exp_p)\_{tv}(tw)=J(t)
$$

이다. $J$ 는 $J(0)=0$, $D_tJ(0)=w$ 인 Jacobi 장이다. 변분 $\Gamma(s,t)=\exp_p(t(v+sw))$ 를 $s$ 로 미분하면 나온다. 따라서 $\exp_p$ 가 $tv$ 에서 특이인 것은 $\gamma(t)$ 가 $p$ 의 켤레점인 것과 동치다.[^1]

## 지표 형식과 Morse 지표 정리

$\gamma\colon\lbrack 0,T\rbrack\to M$ 을 따라 끝점에서 $0$ 인 벡터장 $V,W$ 에 대해 **지표 형식(index form)** 은

$$
I(V,W)=\int_0^T\Bigl(\langle D_tV,D_tW\rangle-\langle R(V,\dot\gamma)\dot\gamma,W\rangle\Bigr)dt
$$

이다. 길이 범함수의 2 차 변분이 $I(V,V)$ 이고, 부분적분하면 $I$ 의 영공간이 끝점에서 $0$ 인 Jacobi 장 전체다.

**정리(Morse 지표 정리).** $I$ 가 음으로 정부호인 부분공간의 최대 차원은 $0\lt t\lt T$ 에 있는 $\gamma(0)$ 의 켤레점 $\gamma(t)$ 의 중복도를 더한 값이다.[^2]

그러므로 내부에 켤레점이 있는 측지선은 길이를 줄이는 변분을 가져 최단이 아니다.

## 곡률이 0 이하인 경우

단면곡률이 $0$ 이하이면 켤레점이 없다. $J(0)=0$ 인 Jacobi 장에서

$$
\frac{d^2}{dt^2}\vert J\vert^2=2\vert D_tJ\vert^2-2\langle R(J,\dot\gamma)\dot\gamma,J\rangle\ge0
$$

이므로 $\vert J\vert^2$ 이 볼록함수이고, $D_tJ(0)\ne0$ 이면 $t\gt 0$ 에서 $0$ 이 되지 않는다.

# 활용

- [측지선의 비교정리](geodesic-comparison-theorems.md): Rauch 비교정리는 곡률의 부등식에서 Jacobi 장 크기의 부등식을 얻고, Cartan–Hadamard 와 Bonnet–Myers 정리가 위의 켤레점 성질에서 나온다.
- [Morse 이론](morse-theory.md): 두 점을 잇는 경로 공간에서 에너지 범함수의 임계점이 측지선이고, 그 Morse 지표가 Morse 지표 정리로 켤레점의 개수다. [Bott 주기성](bott-periodicity.md)의 Bott 증명이 이 계산을 쓴다.
- [공간형](space-forms.md): 상수 곡률에서 Jacobi 장이 $s_\kappa E$ 로 정해지므로 지수사상의 미분이 곡률만으로 정해지고, 같은 곡률의 두 공간이 국소적으로 등거리다.

[^1]: J. M. Lee, *Introduction to Riemannian Manifolds*, 2nd ed., GTM 176, Springer, 2018, 10 장.
[^2]: J. Milnor, *Morse Theory*, Annals of Mathematics Studies 51, Princeton University Press, 1963, 15 절.

# 연관 문서

## 선수지식

- [측지선](geodesics.md)

## 더 알아보기

- [측지선의 비교정리](geodesic-comparison-theorems.md)

#differential_geometry #analysis #topology
