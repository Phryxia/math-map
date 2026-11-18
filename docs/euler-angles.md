# Euler 각

# 개요

**Euler 각(Euler angles)** 은 공간의 회전을 정해진 좌표축 둘레의 회전 세 번으로 쓸 때의 세 각이다. 비행기의 자세는 수평면에서 향한 방위, 기수를 들거나 내린 각, 기수 둘레로 기운 각의 세 수로 적는다. 기수가 수직이 되면 방위를 바꾸는 회전과 기수 둘레의 회전이 같은 직선 둘레를 돌아, 세 수 가운데 하나가 쓸모없어진다. Euler 각은 회전을 세 수로 적고 읽는 방법이고, 이 퇴화는 가운데 각이 $\pm 90^\circ$ 인 자리에서만 일어난다.

# 직관

[Euler 회전 정리](euler-rotation-theorem.md)의 좌표에서 $x$ 축을 비행기의 기수 방향, $z$ 축을 수직 방향으로 둔다. 비행기를 기수 둘레로 $\varphi$ 만큼 기울이고, $y$ 축 둘레로 $\theta$ 만큼 기수를 내리고, 수직축 둘레로 $\psi$ 만큼 방위를 돌린다. 세 회전을 차례로 한 결과는 다음 행렬이다.

$$
R(\psi,\theta,\varphi)=R_z(\psi)\thinspace R_y(\theta)\thinspace R_x(\varphi)
$$

$\theta=90^\circ$ 이면 기수가 수직으로 아래를 향한다. 이때 $(\psi,\varphi)=(30^\circ,10^\circ)$ 와 $(20^\circ,0^\circ)$ 을 넣으면 두 행렬이 같다.

$$
R(30^\circ,90^\circ,10^\circ)=R(20^\circ,90^\circ,0^\circ)=\begin{pmatrix}0&-\sin 20^\circ&\cos 20^\circ\cr 0&\cos 20^\circ&\sin 20^\circ\cr -1&0&0\end{pmatrix}
$$

기수가 수직이 되면 기수 둘레로 기울이는 회전과 수직축 둘레로 방위를 돌리는 회전이 같은 직선 둘레의 회전이 된다. 그래서 두 각은 차 $\psi-\varphi$ 로만 행렬에 나타나고, 세 각으로 자세를 움직일 수 있는 방향이 둘로 줄어든다. 이 자세에서 기수를 옆으로 조금 트는 회전은 $\psi$, $\theta$, $\varphi$ 를 조금씩 바꾸어서는 만들 수 없다.

# 정의

좌표축 둘레의 각 $\alpha$ 회전은 다음 세 행렬이다.

$$
\begin{aligned}
R_x(\alpha)&=\begin{pmatrix}1&0&0\cr 0&\cos\alpha&-\sin\alpha\cr 0&\sin\alpha&\cos\alpha\end{pmatrix}\cr
R_y(\alpha)&=\begin{pmatrix}\cos\alpha&0&\sin\alpha\cr 0&1&0\cr -\sin\alpha&0&\cos\alpha\end{pmatrix}\cr
R_z(\alpha)&=\begin{pmatrix}\cos\alpha&-\sin\alpha&0\cr \sin\alpha&\cos\alpha&0\cr 0&0&1\end{pmatrix}
\end{aligned}
$$

좌표축 $a,b,c$ 를 이웃한 둘이 같지 않게 고른다. 회전 $R$ 이 $R=R_a(\psi)R_b(\theta)R_c(\varphi)$ 를 만족하면 $(\psi,\theta,\varphi)$ 를 축 순서 $a$-$b$-$c$ 의 **Euler 각** 이라 한다. $a=c$ 인 순서($z$-$x$-$z$ 등)를 고유 Euler 각(proper Euler angles), 세 축이 모두 다른 순서($z$-$y$-$x$ 등)를 Tait–Bryan 각(Tait–Bryan angles)이라 한다. 직관 절의 비행기는 $z$-$y$-$x$ 순서이고, $\psi$, $\theta$, $\varphi$ 를 각각 yaw, pitch, roll 이라 부른다.

$R_z(\psi)R_y(\theta)R_x(\varphi)$ 는 고정된 $x$, $y$, $z$ 축 둘레로 이 순서로 돌린 결과이고, 물체에 붙은 축 둘레로 $z$, $y$, $x$ 의 순서로 돌린 결과와도 같다.

Euler 각을 회전으로 보내는 사상의 미분의 계수가 $3$ 보다 작은 각을 **짐벌 잠김(gimbal lock)** 이라 한다. 직관 절의 $\theta=90^\circ$ 가 짐벌 잠김이다.

# 성질

## 존재와 계산

모든 회전 $R=(r_{ij})$ 는 $-90^\circ\le\theta\le 90^\circ$ 인 $z$-$y$-$x$ Euler 각으로 쓸 수 있다. $\cos\theta\ne 0$ 이면 각이 유일하고 다음으로 구한다.

$$
\theta=-\arcsin r_{31},\qquad \psi=\mathrm{atan2}(r_{21},\thinspace r_{11}),\qquad \varphi=\mathrm{atan2}(r_{32},\thinspace r_{33})
$$

$R=R_z(\psi)R_y(\theta)R_x(\varphi)$ 를 곱하면 $r_{31}=-\sin\theta$, $r_{21}=\sin\psi\cos\theta$, $r_{11}=\cos\psi\cos\theta$, $r_{32}=\cos\theta\sin\varphi$, $r_{33}=\cos\theta\cos\varphi$ 이므로 이 식이 나온다. Euler 회전 정리 문서의 $120^\circ$ 회전은 $r_{31}=0$, $r_{21}=1$, $r_{11}=0$, $r_{32}=1$, $r_{33}=0$ 이어서 $(\psi,\theta,\varphi)=(90^\circ,0,90^\circ)$ 이고, 실제로 $R_z(90^\circ)R_x(90^\circ)$ 가 그 행렬이다.

## 짐벌 잠김의 위치

$\theta=90^\circ$ 이면 $R$ 은 $\psi-\varphi$ 에만, $\theta=-90^\circ$ 이면 $\psi+\varphi$ 에만 의존한다. 이 두 곳에서 Euler 각이 유일하지 않다.

각을 시간에 따라 바꿀 때 물체에 붙은 축으로 잰 각속도 $\boldsymbol\omega$ 는 다음이다.

$$
\boldsymbol\omega=\begin{pmatrix}\dot\varphi-\dot\psi\sin\theta\cr \dot\theta\cos\varphi+\dot\psi\cos\theta\sin\varphi\cr -\dot\theta\sin\varphi+\dot\psi\cos\theta\cos\varphi\end{pmatrix}
$$

$(\dot\psi,\dot\theta,\dot\varphi)$ 를 $\boldsymbol\omega$ 로 보내는 행렬의 행렬식의 절댓값은 $\vert\cos\theta\vert$ 다. $\theta=\pm 90^\circ$ 에서 이 행렬이 가역이 아니므로 짐벌 잠김은 이 두 곳뿐이고, 그 근처에서 작은 각속도를 내려면 $\dot\psi$ 와 $\dot\varphi$ 가 $1/\cos\theta$ 규모로 커진다.

## 특이점 없는 세 각의 불가능성

어떤 축 순서를 골라도 짐벌 잠김을 피할 수 없다. 더 일반적으로, 세 각으로 이루어진 3 차원 원환면에서 회전군 $\mathrm{SO}(3)$ 으로 가는 매끄러운 사상 가운데 모든 점에서 미분이 가역인 것은 없다[^1].

증명의 요지. 그런 사상이 있으면 콤팩트한 연결 다양체 사이의 국소 미분동형사상이므로 [덮개공간](covering-spaces.md)의 덮개 사상이다. 덮개 사상은 [기본군](fundamental-group.md)에 단사 준동형을 유도하는데, 원환면의 기본군 $\mathbb Z^3$ 은 $\mathrm{SO}(3)$ 의 기본군 $\mathbb Z/2$ 에 단사로 들어가지 않는다.

# 활용

- 비행기, 배, 우주선의 자세 표시와 조종. 사람이 읽기 쉬운 세 각으로 자세를 보이고, 기수가 수직에 가까운 기동에서는 짐벌 잠김을 피하려고 내부 계산을 사원수로 한다.
- 짐벌로 매단 자이로스코프. 회전하는 고리 셋으로 관성 측정 장치를 매달면 고리의 각이 곧 Euler 각이다. 가운데 고리가 $90^\circ$ 에 이르면 바깥 고리와 안쪽 고리의 회전축이 겹쳐 자유도 하나를 잃는다. 이름 짐벌 잠김이 여기서 나왔다.
- 강체의 운동. 팽이의 운동은 $z$-$x$-$z$ 고유 Euler 각으로 적고, 세 각의 변화가 각각 세차(precession), 장동(nutation), 자전(spin)이다.
- 양자 게이트의 분해. 한 큐비트 유니터리는 전체 위상을 빼면 $z$-$x$-$z$ 축 회전 세 번의 곱이고, [측정 기반 양자 계산](measurement-based-quantum-computation.md)이 이 분해로 임의의 한 큐비트 게이트를 만든다.
- 자세의 보간. Euler 각을 성분마다 보간하면 짐벌 잠김 근처에서 각이 크게 튀므로, 단위 사원수로 바꾸어 [구면 선형 보간](slerp.md)을 쓴다.

[^1]: J. Stuelpnagel, "On the parametrization of the three-dimensional rotation group", *SIAM Rev.* 6 (1964), 422–430.

# 연관 문서

## 선수지식

- [Euler 회전 정리](euler-rotation-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #differential_geometry #group_theory
