# 구면 선형 보간

# 개요

**구면 선형 보간(spherical linear interpolation, slerp)** 은 두 회전 사이를 일정한 속도로 도는 중간 회전을 구하는 방법이다. 화면 속 주사위가 처음 자세에서 $z$ 축 둘레로 $90^\circ$ 돈 자세로 넘어가는 장면을 만들려면, 중간 시각마다 주사위의 자세가 하나씩 있어야 한다. 두 회전 행렬의 성분을 평균하면 주사위가 줄어든다. 구면 선형 보간은 회전을 단위 사원수로 나타내고, 두 사원수를 잇는 구면 위의 가장 짧은 호를 따라 같은 각도씩 나아간다.

# 직관

처음 자세는 항등행렬 $I$, 나중 자세는 $z$ 축 둘레의 $90^\circ$ 회전 $R$ 이다.

$$
R=\begin{pmatrix}0&-1&0\cr 1&0&0\cr 0&0&1\end{pmatrix}
$$

중간 자세로 두 행렬의 평균 $(I+R)/2$ 를 쓰면 첫째 열이 $(1/2,\ 1/2,\ 0)$ 이고 길이가 $1/\sqrt2\approx 0.71$ 이다. 이 행렬은 $x$ 축 방향의 모서리를 $0.71$ 배로 줄이므로 회전이 아니다. 행렬의 성분을 따로 보간하면 회전 전체가 이루는 집합 밖으로 나간다.

[Euler 회전 정리](euler-rotation-theorem.md)로 보면 $R$ 은 $z$ 축 둘레의 $90^\circ$ 회전 한 번이다. 중간 자세는 같은 축 둘레의 $45^\circ$ 회전이고, 시각 $t$ 의 자세는 $90t$ 도 회전이다. 처음 자세가 $I$ 가 아니어도, 처음 자세에서 나중 자세로 가는 회전의 축과 각을 구해 각만 $t$ 배로 줄이면 된다.

Euler 회전 정리 문서의 사원수 표현으로는 $90^\circ$ 회전이 $q=\cos 45^\circ+\sin 45^\circ\thinspace k$ 이고, 처음 자세가 $1$, 중간 자세가 $\cos 22.5^\circ+\sin 22.5^\circ\thinspace k$ 이다. 세 사원수는 $1$ 과 $k$ 가 펼치는 평면의 단위원 위에 있고, 중간 자세는 $1$ 과 $q$ 사이 호의 한가운데다. 단위 사원수 사이의 호를 같은 각도씩 나누면 축과 각을 따로 구하지 않고도 중간 자세가 나온다.

# 정의

단위 사원수 $q_0$, $q_1$ 을 실수 네 성분의 벡터로 보고 내적 $q_0\cdot q_1=\cos\Omega$ $(0\le\Omega\le\pi)$ 를 잡는다. $0\le t\le 1$ 에서 다음 단위 사원수를 $q_0$ 과 $q_1$ 의 **구면 선형 보간** 이라 한다[^1].

$$
\mathrm{slerp}(q_0,q_1;t)=\frac{\sin\bigl((1-t)\Omega\bigr)}{\sin\Omega}\thinspace q_0+\frac{\sin(t\Omega)}{\sin\Omega}\thinspace q_1
$$

$\Omega=0$ 이면 $q_0=q_1$ 이고 보간은 상수 $q_0$ 이다. 회전의 보간은 이 사원수가 나타내는 회전이다.

직관 절에서 $q_0=1$, $q_1=\cos 45^\circ+\sin 45^\circ\thinspace k$ 이므로 $\cos\Omega=\cos 45^\circ$, $\Omega=45^\circ$ 다. $t=1/2$ 을 넣으면 두 계수가 모두 $\sin 22.5^\circ/\sin 45^\circ\approx 0.541$ 이고, 결과는 다음이다.

$$
0.541\bigl(1+0.707+0.707\thinspace k\bigr)\approx 0.924+0.383\thinspace k=\cos 22.5^\circ+\sin 22.5^\circ\thinspace k
$$

$q$ 와 $-q$ 는 같은 회전을 나타낸다. $q_0\cdot q_1\lt 0$ 이면 $q_1$ 대신 $-q_1$ 을 써서 $\Omega\le\pi/2$ 로 만든다. 그러면 두 회전 사이의 회전각이 $180^\circ$ 이하인 쪽으로 돈다.

# 성질

## 일정한 각속도

$q_0^{-1}q_1$ 이 축 $\mathbf n$ 둘레의 각 $\theta$ 회전이면 $\mathrm{slerp}(q_0,q_1;t)=q_0\thinspace(q_0^{-1}q_1)^t$ 이고, 이것은 처음 자세 뒤에 축 $\mathbf n$ 둘레의 각 $t\theta$ 회전을 한 자세다. 여기서 $(\cos\Omega+\sin\Omega\thinspace\mathbf n)^t$ 은 $\cos(t\Omega)+\sin(t\Omega)\thinspace\mathbf n$ 으로 정한다. 회전각이 $t$ 에 비례하므로 각속도가 일정하다.

증명의 요지. 왼쪽에 $q_0^{-1}$ 을 곱하는 사상은 사원수의 길이와 내적을 보존하므로 $q_0=1$ 인 경우만 보면 된다. 이때 $q_1=\cos\Omega+\sin\Omega\thinspace\mathbf n$ 이고 $\theta=2\Omega$ 다. 정의의 식에 넣고 삼각함수의 덧셈정리를 쓰면 $\cos(t\Omega)+\sin(t\Omega)\thinspace\mathbf n$ 이 나오고, 이것은 축 $\mathbf n$ 둘레의 각 $2t\Omega=t\theta$ 회전이다.

## 정규화 선형 보간과의 비교

$q_0$ 과 $q_1$ 을 직선으로 보간한 뒤 길이를 $1$ 로 맞춘 정규화 선형 보간(normalized linear interpolation, nlerp)도 같은 호 위를 지나고 $t=1/2$ 에서 구면 선형 보간과 같다. 그러나 호 위의 각도는 $t$ 에 비례하지 않는다. 직관 절에서 $t=1/4$ 이면 정규화 선형 보간의 회전각은 약 $21.6^\circ$ 이고 구면 선형 보간은 $22.5^\circ$ 다. $\Omega$ 가 클수록 차이가 커진다.

## 회전군의 측지선

[행렬 지수](matrix-exponential.md)로 쓰면 회전 행렬의 보간은 다음이다.

$$
R(t)=R_0\exp\bigl(t\log(R_0^{\mathsf T}R_1)\bigr)
$$

$\mathrm{SO}(3)$ 에 좌우 곱으로 바뀌지 않는 거리를 주면 이 곡선은 $R_0$ 과 $R_1$ 을 잇는 가장 짧은 [측지선](geodesics.md)이고, 단위 사원수의 구면에서는 큰원의 호다. 구면 선형 보간은 이 측지선을 일정한 속력으로 지난다.

# 활용

- 컴퓨터 애니메이션의 키프레임 보간. 지정한 자세들 사이의 장면마다 구면 선형 보간으로 자세를 정한다. 자세가 셋 이상이면 구면 위에서 de Casteljau 알고리즘(de Casteljau's algorithm)을 구면 선형 보간으로 되풀이해 매끈한 곡선을 만든다[^1].
- 우주선과 드론의 자세 제어. 현재 자세에서 목표 자세까지 회전각이 일정하게 늘어나는 경로를 목표로 준다.
- 로봇 팔 끝의 자세 경로. 위치는 직선으로, 자세는 구면 선형 보간으로 보간한다.
- [Lie 군](lie-groups.md)의 지수 사상. 회전군에서 $q_0(q_0^{-1}q_1)^t$ 는 [Lie 대수](lie-algebras.md)의 직선 $t\log(q_0^{-1}q_1)$ 을 지수 사상으로 옮긴 곡선이다.

[^1]: K. Shoemake, "Animating rotation with quaternion curves", *SIGGRAPH Comput. Graph.* 19 (1985), 245–254.

# 연관 문서

## 선수지식

- [Euler 회전 정리](euler-rotation-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #differential_geometry #group_theory
