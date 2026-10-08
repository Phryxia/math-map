# Killing 벡터장

# 개요

Killing 벡터장은 흐름이 [Riemann 계량](riemannian-metrics.md)을 보존하는 벡터장이다. 계량의 대칭을 좌표 없이 적은 것이고, 하나가 있으면 [측지선](geodesics.md)을 따라 상수인 함수가 하나 나온다.

등거리변환군의 Lie 대수가 Killing 벡터장 전체이므로, 이 벡터장을 세는 일이 다양체가 가진 대칭을 세는 일이다.

# 직관

평면의 극좌표 계량 $ds^2=dr^2+r^2d\theta^2$ 에는 $\theta$ 가 미분으로만 들어가고 계수에는 나오지 않는다. 측지선의 Lagrange 함수 $\frac12(\dot r^2+r^2\dot\theta^2)$ 도 그러므로 $\partial L/\partial\theta=0$ 이고, Euler–Lagrange 방정식에서 $r^2\dot\theta$ 가 측지선을 따라 상수다. 이 보존량은 $\theta$ 방향으로 옮기는 변환이 계량을 그대로 둔다는 사실에서 나왔다.

좌표를 직교좌표로 바꾸면 같은 계량에서 어느 좌표도 계수에서 빠지지 않는다. 대칭은 좌표를 바꿔도 남아 있으므로 "계량의 계수에 나오지 않는 좌표" 대신 좌표를 쓰지 않는 조건이 있어야 한다. 옮기는 변환을 벡터장의 흐름으로 보고 그 흐름을 따라 계량의 변화율이 $0$ 이라고 적으면 된다.

# 정의

벡터장 $X$ 가 **Killing 벡터장**이라 함은

$$
\mathcal L_X g=0
$$

인 것이다. 여기서 $\mathcal L_X$ 는 $X$ 에 대한 Lie 미분이다. 좌표로 쓰면 Levi-Civita 접속에 대해

$$
\nabla_iX_j+\nabla_jX_i=0
$$

이고, 이 식을 **Killing 방정식**이라 한다.

# 성질

## 측지선을 따르는 보존량

**정리.** $X$ 가 Killing 벡터장이고 $\gamma$ 가 측지선이면 $g(X,\dot\gamma)$ 가 $\gamma$ 를 따라 상수다.

$\frac{d}{dt}g(X,\dot\gamma)=g(\nabla\_{\dot\gamma}X,\dot\gamma)+g(X,\nabla\_{\dot\gamma}\dot\gamma)$ 에서 둘째 항은 측지선 방정식으로 $0$ 이다. 첫째 항은 $\nabla_iX_j$ 의 반대칭성에 $\dot\gamma^i\dot\gamma^j$ 를 대입한 것이므로 $0$ 이다. ∎

극좌표에서 $X=\partial\_\theta$ 를 넣으면 $g(X,\dot\gamma)=r^2\dot\theta$ 이고 위에서 본 보존량이다.

## Lie 대수 구조

Killing 벡터장 둘의 Lie 괄호가 다시 Killing 벡터장이므로 전체가 Lie 대수를 이룬다. 연결 다양체에서 이 Lie 대수는 등거리변환군의 Lie 대수와 같고, 유한차원이다.

## 차원의 상한

**정리.** $n$ 차원 Riemann 다양체의 Killing 벡터장은 $n(n+1)/2$ 차원을 넘지 않는다.

Killing 방정식과 그 한 번 미분한 식이 한 점에서 $X$ 와 $\nabla X$ 의 값을 정하면 $X$ 가 전체에서 정해진다. 그 점에서 $X$ 의 성분이 $n$ 개, $\nabla_iX_j$ 가 반대칭이라 $n(n-1)/2$ 개이므로 합이 상한이다.[^1] 상한을 달성하는 것이 상수곡률 공간이다. ∎

## Noether 전하와의 일치

측지선 흐름을 여접다발 위의 [Hamilton 역학](hamiltonian-mechanics.md)으로 보면 $H(q,p)=\frac12g^{ij}p\_ip\_j$ 이고, Killing 벡터장이 만드는 변환이 $H$ 를 보존하는 대칭이다. 그 대칭의 [Noether](noether-theorem.md) 전하가 $g(X,\dot\gamma)$ 다.

# 활용

- 측지선 방정식의 1차 적분을 얻는다. 보존량 하나마다 풀어야 할 방정식이 하나 줄어든다.
- 상수곡률 공간을 가려낸다. Killing 벡터장의 차원이 상한에 닿는 것이 상수곡률의 특징이다.
- 등거리변환군의 차원을 계량에서 바로 읽는다. 일반적인 계량에서는 Killing 벡터장이 $0$ 뿐이다.

[^1]: Shoshichi Kobayashi, Katsumi Nomizu, *Foundations of Differential Geometry*, vol. 1, Interscience (1963), 6 장. Killing 벡터장의 Lie 대수와 차원 상한을 다룬다.

# 연관 문서

## 선수지식

- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis
