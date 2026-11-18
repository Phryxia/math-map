# 극좌표

# 개요

**극좌표(polar coordinates)** 는 평면의 점을 원점에서의 거리와 기준 방향에서 잰 각으로 나타내는 좌표다. 레이더는 물체의 위치를 "거리 2 km, 정동쪽에서 시계 반대 방향으로 60°" 처럼 알려 주고, 이것을 동서 방향과 남북 방향의 거리로 바꾸어야 지도에 찍을 수 있다. 극좌표는 이 두 표기 사이의 변환을 삼각함수로 주고, 원이나 나선처럼 원점 둘레로 도는 곡선을 $r=f(\theta)$ 한 식으로 적어 넓이와 길이를 계산하게 해 준다.

# 직관

레이더가 알려 준 점은 원점에서 거리 $2$, 양의 $x$ 축에서 시계 반대 방향으로 $60^\circ=\pi/3$ 인 점이다. 반지름 $2$ 인 원 위에서 각 $\pi/3$ 만큼 돈 점이므로 [삼각함수](trigonometric-functions.md)로 $x=2\cos(\pi/3)=1$, $y=2\sin(\pi/3)=\sqrt3$ 이다.

거꾸로 점 $(1,\sqrt3)$ 이 주어지면 거리는 $\sqrt{1+3}=2$ 이고, $\tan\theta=\sqrt3$ 이며 점이 제1 사분면에 있으므로 각은 $\pi/3$ 이다.

원점을 중심으로 하는 반지름 $2$ 인 원은 $x,y$ 로는 $x^2+y^2=4$ 이지만 거리와 각으로는 "거리가 $2$" 한 조건이다. 원점 둘레로 도는 곡선은 각마다 거리를 정해 주는 꼴로 적는 것이 짧다.

# 정의

평면의 점 $(x,y)$ 에 대해 다음을 만족하는 $r\ge 0$ 과 실수 $\theta$ 를 그 점의 극좌표라 한다.

$$
x=r\cos\theta,\qquad y=r\sin\theta
$$

$r=\sqrt{x^2+y^2}$ 을 **동경(radius)**, $\theta$ 를 **편각(polar angle)** 이라 한다. 원점이 아닌 점에서 편각은 $2\pi$ 의 정수배 차이를 빼고 하나로 정해지고, $\theta\in(-\pi,\pi\rbrack$ 로 제한한 값을 주값이라 한다. 원점은 $r=0$ 이고 편각이 정해지지 않는다. 직관 절의 점은 $(r,\theta)=(2,\pi/3)$ 이다.

함수 $f$ 에 대해 $r=f(\theta)$ 를 만족하는 점 전체를 극곡선(polar curve)이라 한다.

# 성질

## 극곡선의 예

$r=a$ 는 반지름 $a$ 인 원이고, $\theta=\alpha$ 는 원점에서 나가는 반직선이다. $r=2a\cos\theta$ 는 양변에 $r$ 을 곱하면 $x^2+y^2=2ax$ 이므로 중심 $(a,0)$, 반지름 $a$ 인 원이다.

$r=1+\cos\theta$ 는 심장형(cardioid)이다. $\theta=0$ 에서 $r=2$ 이고 $\theta=\pi$ 에서 $r=0$ 이어서 곡선이 원점에서 뾰족해진다. $r=a\theta$ 는 한 바퀴 돌 때마다 동경이 $2\pi a$ 씩 늘어나는 Archimedes 나선(Archimedean spiral)이다.

## 넓이

$\alpha\le\theta\le\beta$ 에서 극곡선 $r=f(\theta)$ 와 원점이 둘러싼 부채꼴 모양 영역의 넓이는 다음이다.

$$
A=\frac12\int_\alpha^\beta f(\theta)^2\thinspace d\theta
$$

각 $\Delta\theta$ 의 얇은 조각은 반지름 $f(\theta)$, 중심각 $\Delta\theta$ 인 부채꼴에 가깝고 그 넓이가 $\frac12f(\theta)^2\Delta\theta$ 이기 때문이다. 심장형 $r=1+\cos\theta$ 의 넓이는 다음과 같다.

$$
\frac12\int_0^{2\pi}(1+\cos\theta)^2\thinspace d\theta=\frac12\left(2\pi+0+\pi\right)=\frac{3\pi}{2}
$$

## 길이

$x=f(\theta)\cos\theta$, $y=f(\theta)\sin\theta$ 로 매개화하면 $x'^2+y'^2=f^2+f'^2$ 이므로, [곡선의 길이](arc-length.md) 공식이 다음이 된다.

$$
L=\int_\alpha^\beta\sqrt{f(\theta)^2+f'(\theta)^2}\thinspace d\theta
$$

심장형에서는 $f^2+f'^2=2+2\cos\theta=4\cos^2(\theta/2)$ 이므로 둘레가 $\int_0^{2\pi}2\vert\cos(\theta/2)\vert\thinspace d\theta=8$ 이다.

## 넓이 요소

$(r,\theta)$ 를 각각 $dr$, $d\theta$ 만큼 바꾸면 변의 길이가 $dr$ 과 $r\thinspace d\theta$ 인 작은 사각형이 생긴다. 사상 $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ 의 Jacobi 행렬식이 $r$ 이므로, [중적분](multiple-integral.md)에서 $dA=r\thinspace dr\thinspace d\theta$ 이다.

## 복소수의 극형식

[복소수](complex-numbers.md) $z=x+iy$ 를 극좌표로 쓰면 $z=r(\cos\theta+i\sin\theta)=re^{i\theta}$ 이고, $r=\vert z\vert$, $\theta=\arg z$ 다. 곱셈은 동경을 곱하고 편각을 더하는 연산이 된다. $(1+i\sqrt3)^3=(2e^{i\pi/3})^3=8e^{i\pi}=-8$ 이다.

# 활용

- 원판과 평면 위의 적분. 넓이 요소 $r\thinspace dr\thinspace d\theta$ 로 Gauss 적분 $\int_{\mathbb R^2}e^{-(x^2+y^2)}\thinspace dA=\pi$ 를 계산한다.
- 회전 대칭인 편미분방정식. [Laplace 연산자](laplace-operator.md)를 극좌표로 쓰면 $\partial_r^2+\frac1r\partial_r+\frac{1}{r^2}\partial_\theta^2$ 이고, 원판 위의 [열방정식](heat-equation.md)과 [파동방정식](wave-equation.md)을 변수분리로 푼다.
- 행성의 궤도. 태양을 원점에 둔 [원뿔곡선](conic-sections.md)의 극좌표 방정식 $r=ed/(1+e\cos\theta)$ 가 궤도를 준다.
- [연쇄법칙](chain-rule.md)의 예. $\partial f/\partial r$ 과 $\partial f/\partial\theta$ 를 $x,y$ 편미분으로 바꾼다.

# 연관 문서

## 선수지식

- [삼각함수](trigonometric-functions.md)
- [곡선의 길이](arc-length.md)

## 더 알아보기

- [구면좌표](spherical-coordinates.md)

#analysis #complex_analysis
