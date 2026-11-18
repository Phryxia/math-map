# 구면좌표

# 개요

**구면좌표(spherical coordinates)** 는 공간의 점을 원점에서의 거리와 두 각으로 나타내는 좌표다. 반지름 $1$ 인 공의 부피를 $x,y,z$ 로 적분하면 $z$ 의 범위가 $\pm\sqrt{1-x^2-y^2}$ 처럼 제곱근으로 주어져 계산이 길어진다. 구면좌표에서는 공이 거리와 두 각의 범위로 된 직육면체가 되고, 작은 조각의 부피 배율 $\rho^2\sin\varphi$ 를 곱해 적분하면 부피 $4\pi/3$ 이 바로 나온다.

# 직관

공 안의 점은 원점에서의 거리 $\rho$, 위쪽 $z$ 축에서 기울어진 각 $\varphi$, 바닥에 비친 그림자가 $x$ 축에서 돈 각 $\theta$ 로 정해진다. 공은 $0\le\rho\le1$, $0\le\varphi\le\pi$, $0\le\theta\le2\pi$ 인 점 전체다. 세 범위가 서로에 의존하지 않으므로 $(\rho,\varphi,\theta)$ 공간에서 공은 직육면체다.

그 직육면체를 작은 상자로 자르면 공도 작은 조각으로 잘린다. 변이 $\Delta\rho$, $\Delta\varphi$, $\Delta\theta$ 인 상자의 상은 거의 직육면체이고, 세 변의 길이는 다음과 같다.

- $\rho$ 만 바꾸면 반지름 방향으로 $\Delta\rho$ 만큼 간다.
- $\varphi$ 만 바꾸면 반지름 $\rho$ 인 원을 따라 $\rho\thinspace\Delta\varphi$ 만큼 간다.
- $\theta$ 만 바꾸면 $z$ 축에서 거리 $\rho\sin\varphi$ 인 원을 따라 $\rho\sin\varphi\thinspace\Delta\theta$ 만큼 간다.

세 방향은 서로 수직이므로 조각의 부피는 거의 $\rho^2\sin\varphi\thinspace\Delta\rho\thinspace\Delta\varphi\thinspace\Delta\theta$ 다. 조각을 모두 더한 극한은 세 적분의 곱이다.

$$
\int_0^{2\pi}\int_0^\pi\int_0^1\rho^2\sin\varphi\thinspace d\rho\thinspace d\varphi\thinspace d\theta=\frac13\cdot2\cdot2\pi=\frac{4\pi}3
$$

# 정의

## 좌표 변환

구면좌표 $(\rho,\varphi,\theta)$, $\rho\ge0$, $0\le\varphi\le\pi$, $0\le\theta\lt 2\pi$ 는 다음 식으로 직교좌표 $(x,y,z)$ 에 대응한다[^1].

$$
x=\rho\sin\varphi\cos\theta,\qquad y=\rho\sin\varphi\sin\theta,\qquad z=\rho\cos\varphi
$$

$\rho$ 를 **동경(radial distance)**, $\varphi$ 를 **극각(polar angle)**, $\theta$ 를 **방위각(azimuthal angle)** 이라 한다. $(\rho\sin\varphi,\theta)$ 는 점의 그림자 $(x,y)$ 의 [극좌표](polar-coordinates.md)이고, $(\rho,\varphi)$ 는 $z$ 축과 그 점을 포함하는 평면에서의 극좌표다.

거꾸로 $\rho=\sqrt{x^2+y^2+z^2}$ 이고 $\cos\varphi=z/\rho$ 이며, $\theta$ 는 $(x,y)$ 의 극좌표의 각이다. 점 $(1,1,\sqrt2)$ 는 $\rho=2$, $\cos\varphi=\sqrt2/2$ 에서 $\varphi=\pi/4$, $\theta=\pi/4$ 다.

물리학에서는 극각을 $\theta$, 방위각을 $\varphi$ 로 바꾸어 쓰는 일이 많다. 지구의 위도는 $\pi/2-\varphi$, 경도는 $\theta$ 에 해당한다.

## 부피 요소

구면좌표 변환의 Jacobi 행렬식은 $\rho^2\sin\varphi$ 다. 그래서 [치환적분](integration-by-substitution.md)의 공식에 따라 공간의 영역 $V$ 에 대해 다음이 성립하고, $\rho^2\sin\varphi\thinspace d\rho\thinspace d\varphi\thinspace d\theta$ 를 **부피 요소(volume element)** 라 한다.

$$
\iiint_V f\thinspace dx\thinspace dy\thinspace dz=\iiint f\thinspace\rho^2\sin\varphi\thinspace d\rho\thinspace d\varphi\thinspace d\theta
$$

직관 절의 공에서 $f=1$ 이면 부피 $4\pi/3$ 이다. 밀도가 원점에서의 거리 $\rho$ 와 같은 공의 질량은 $\int_0^1\rho^3\thinspace d\rho\cdot2\cdot2\pi=\pi$ 다.

# 성질

## 행렬식 계산

변환의 Jacobi 행렬은 다음이다.

$$
\begin{pmatrix}\sin\varphi\cos\theta&\rho\cos\varphi\cos\theta&-\rho\sin\varphi\sin\theta\cr\sin\varphi\sin\theta&\rho\cos\varphi\sin\theta&\rho\sin\varphi\cos\theta\cr\cos\varphi&-\rho\sin\varphi&0\end{pmatrix}
$$

셋째 행으로 전개하면 $\cos\varphi\cdot\rho^2\sin\varphi\cos\varphi+\rho\sin\varphi\cdot\rho\sin^2\varphi=\rho^2\sin\varphi$ 다. $\sin\varphi\ge0$ 이므로 절댓값을 붙일 필요가 없다. 행렬식은 $\rho=0$ 과 $z$ 축 위($\varphi=0,\pi$)에서 $0$ 이고, 이 집합은 부피가 $0$ 이어서 적분에 영향을 주지 않는다.

## 구면의 넓이 요소

$\rho=R$ 로 고정하면 반지름 $R$ 인 구면의 매개화가 되고, 직관 절의 둘째와 셋째 변이 조각을 이룬다. 그 넓이는 $R^2\sin\varphi\thinspace\Delta\varphi\thinspace\Delta\theta$ 이므로 [면적분](surface-integral.md)의 넓이 요소는 $R^2\sin\varphi\thinspace d\varphi\thinspace d\theta$ 이고, 구면의 넓이는 $4\pi R^2$ 이다. 부피 요소는 넓이 요소에 두께 $d\rho$ 를 곱한 것이다.

## 반지름에만 의존하는 함수

$f$ 가 $\rho$ 에만 의존하면 두 각에 대한 적분이 구면의 넓이 $4\pi$ 를 주므로 다음이 성립한다.

$$
\iiint_{\mathbb R^3}f(\rho)\thinspace dx\thinspace dy\thinspace dz=4\pi\int_0^\infty f(\rho)\thinspace\rho^2\thinspace d\rho
$$

$f=e^{-\rho^2}$ 이면 $\int_0^\infty\rho^2e^{-\rho^2}d\rho=\sqrt\pi/4$ 이므로 적분은 $\pi^{3/2}$ 이고, 한 변수 Gauss 적분 $\sqrt\pi$ 의 세제곱과 같다. $f=\rho^{-\alpha}$ 를 단위공에서 적분하면 $\int_0^1\rho^{2-\alpha}d\rho$ 가 되므로, 원점 근처에서 적분이 유한한 것은 $\alpha\lt 3$ 일 때뿐이다.

## Laplace 연산자의 구면좌표 표현

[Laplace 연산자](laplace-operator.md) $\Delta u=u_{xx}+u_{yy}+u_{zz}$ 는 구면좌표에서 다음이 된다.

$$
\Delta u=\frac{1}{\rho^2}\frac{\partial}{\partial\rho}\Bigl(\rho^2\frac{\partial u}{\partial\rho}\Bigr)+\frac{1}{\rho^2\sin\varphi}\frac{\partial}{\partial\varphi}\Bigl(\sin\varphi\frac{\partial u}{\partial\varphi}\Bigr)+\frac{1}{\rho^2\sin^2\varphi}\frac{\partial^2u}{\partial\theta^2}
$$

$u=1/\rho$ 이면 $\rho^2u_\rho=-1$ 이 상수이므로 첫 항이 $0$ 이고, 나머지 항도 $0$ 이다. 곧 $1/\rho$ 는 원점 밖에서 $\Delta u=0$ 을 만족한다. 이것이 점 전하와 점 질량의 퍼텐셜이다.

## 원기둥좌표

$z$ 는 그대로 두고 $(x,y)$ 만 극좌표 $(r,\theta)$ 로 바꾼 $(r,\theta,z)$ 를 **원기둥좌표(cylindrical coordinates)** 라 한다. 부피 요소는 $r\thinspace dr\thinspace d\theta\thinspace dz$ 이고, 원기둥이나 회전체처럼 $z$ 축 둘레로 대칭인 영역에서 쓴다.

# 활용

- [구면조화함수](spherical-harmonics.md): Laplace 연산자의 구면좌표 표현에서 각 부분 $(\varphi,\theta)$ 를 떼어 내면 구면 위의 고유함수 문제가 되고, 그 해가 구면조화함수다.
- [Riemann 계량](riemannian-metrics.md): 단위구면의 계량은 구면좌표에서 $d\varphi^2+\sin^2\varphi\thinspace d\theta^2$ 이다.
- [정규분포](normal-distribution.md): 세 성분이 독립인 표준정규 벡터의 길이의 분포를 반지름에만 의존하는 함수의 적분 공식으로 구한다. 기체 분자의 속력 분포인 Maxwell 분포(Maxwell distribution)가 이렇게 나온다.
- 중력과 전기력: 구 대칭인 질량 분포가 바깥의 점에 주는 중력은 같은 질량이 중심에 모인 것과 같다는 Newton 의 껍질 정리(shell theorem)를 구면좌표의 적분으로 증명한다.

[^1]: J. Stewart, *Calculus: Early Transcendentals*, 8th ed., Cengage, 2015, 15 장 8 절.

# 연관 문서

## 선수지식

- [극좌표](polar-coordinates.md)
- [치환적분](integration-by-substitution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
