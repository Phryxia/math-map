# 증강 Lagrangian 방법

# 개요

**증강 Lagrangian 방법(augmented Lagrangian method)** 은 제약을 어긴 정도에 벌점을 매기면서, 벌점만으로는 남는 어긋남을 승수라는 보정값에 모아 다음 번 최소화에 넘기는 반복이다. $x=1$ 이라는 제약 아래 $x^2$ 을 최소화할 때 $x^2+(x-1)^2$ 을 최소화하면 $x=0.5$ 가 나와 제약을 지키지 못하고, 벌점의 계수를 한없이 키워야 $1$ 에 다가간다. 증강 Lagrangian 방법은 계수를 그대로 둔 채 승수를 고쳐 가며 같은 최소화를 되풀이하고, 이 예에서는 $0.5,0.75,0.875,\dots$ 로 $1$ 에 간다.

# 직관

$x=1$ 아래 $x^2$ 을 최소화한다. 벌점 계수 $\rho$ 로 $x^2+\frac\rho2(x-1)^2$ 을 최소화하면 $x=\rho/(2+\rho)$ 다. $\rho=2$ 이면 $0.5$, $\rho=98$ 이면 $0.98$ 이다. 제약을 지키려면 $\rho\to\infty$ 여야 하고, 그러면 최소화하는 함수의 곡률이 $2+\rho$ 로 커져 이 최소화를 수치로 풀기가 점점 어려워진다.

$x=0.5$ 에서 벌점항의 기울기는 $\rho(x-1)=-1$ 이다. 이 값을 다음 번 목적함수에 일차항으로 미리 넣는다. 승수 $y$ 를 두고 $x^2+y(x-1)+(x-1)^2$ 을 최소화하면 $x=(2-y)/4$ 이고, 매번 $y$ 에 $2(x-1)$ 을 더한다. $y=0$ 에서 $x=0.5$, $y=-1$ 에서 $x=0.75$, $y=-1.5$ 에서 $x=0.875$ 이고, 제약과의 어긋남이 매번 절반이 된다.

$y$ 는 $-2$ 로 가고, $y=-2$ 이면 $x^2-2(x-1)+(x-1)^2$ 의 최소점이 정확히 $x=1$ 이다. $-2$ 는 Lagrangian $x^2+y(x-1)$ 의 정상 조건 $2x+y=0$ 에 $x=1$ 을 넣은 값, 곧 [Lagrange 승수법](lagrange-multipliers.md)의 승수다. 벌점 계수를 키우지 않고 승수를 맞추는 이 반복을 증강 Lagrangian 방법이라 부른다.

# 정의

## 증강 Lagrangian

$f:\mathbb R^n\to\mathbb R$ 과 $h:\mathbb R^n\to\mathbb R^p$ 에 대해 문제

$$
\min_x f(x)\qquad\text{subject to}\qquad h(x)=0
$$

를 푼다. 벌점 계수 $\rho\gt 0$ 과 승수 $y\in\mathbb R^p$ 에 대해

$$
L_\rho(x,y)=f(x)+\langle y,h(x)\rangle+\frac\rho2\Vert h(x)\Vert^2
$$

를 **증강 Lagrangian(augmented Lagrangian)** 이라 한다. $\rho=0$ 이면 [Lagrange 쌍대성](lagrange-duality.md)의 Lagrangian 이다. 직관 절은 $f(x)=x^2$, $h(x)=x-1$, $\rho=2$ 다.

## 승수법

**승수법(method of multipliers)** 은 다음 반복이다.[^1][^2]

$$
x\_{k+1}\in\mathop{\mathrm{argmin}}\_xL_\rho(x,y_k),\qquad y\_{k+1}=y_k+\rho\thinspace h(x\_{k+1})
$$

승수의 갱신은 $L_\rho$ 의 $x$ 에 대한 기울기 $\nabla f+\nabla h^{\mathsf T}(y_k+\rho h)$ 를 $\nabla f+\nabla h^{\mathsf T}y\_{k+1}$ 로 적게 하는 값이다. 그래서 $x\_{k+1}$ 은 승수 $y\_{k+1}$ 의 보통 Lagrangian 의 정상점이다.

## 부등식 제약

$g(x)\le 0$ 꼴의 제약은 여유변수 $s\ge 0$ 으로 $g(x)+s=0$ 으로 바꾸고 $s$ 에 대해 먼저 최소화한다. 그러면 제약 하나마다 항

$$
\frac1{2\rho}\Bigl(\max\bigl(0,\thinspace y+\rho g(x)\bigr)^2-y^2\Bigr)
$$

이 생기고, 승수 갱신은 $y\_{k+1}=\max(0,\thinspace y_k+\rho g(x\_{k+1}))$ 이다.[^3]

# 성질

## 유한한 벌점 계수의 정확성

정리. $(x^\ast,y^\ast)$ 가 KKT 조건(Karush–Kuhn–Tucker conditions)과 이계 충분조건(second-order sufficient condition)을 만족하면, 어떤 $\bar\rho$ 가 있어 $\rho\gt\bar\rho$ 일 때 $x^\ast$ 는 $L_\rho(\cdot,y^\ast)$ 의 엄격한 국소 최소점이다.[^4]

증명의 요지. $\nabla\_xL_\rho(x^\ast,y^\ast)=\nabla f+\nabla h^{\mathsf T}y^\ast=0$ 이다. [Hessian 행렬](hessian.md)은 Lagrangian 의 Hessian 행렬에 $\rho\nabla h^{\mathsf T}\nabla h$ 를 더한 것이다. 이계 충분조건은 $\nabla h$ 의 영공간에서 앞의 것이 양의 정부호라는 조건이고, 뒤의 것은 그 영공간의 여공간에서 $\rho$ 에 비례해 커지므로 $\rho$ 가 크면 전체가 양의 정부호다. 직관 절에서 $y^\ast=-2$ 이면 모든 $\rho$ 에서 최소점이 $1$ 이다.

벌점법은 $y=0$ 으로 고정한 경우이고 $\rho$ 가 유한하면 $x^\ast$ 에 닿지 않는다. 승수법은 승수가 $y^\ast$ 로 가면 유한한 $\rho$ 로 충분하다.

## 쌍대 근접점 방법

정리(Rockafellar). $f$ 가 볼록이고 $h(x)=Ax-b$ 이면, 승수법의 승수 갱신은 쌍대 함수 $d(y)=\inf_x\bigl(f(x)+\langle y,Ax-b\rangle\bigr)$ 를 최대화하는 [근접점 방법](proximal-point-method.md)이다.[^3]

$$
y\_{k+1}=\mathop{\mathrm{argmax}}\_y\Bigl(d(y)-\frac1{2\rho}\Vert y-y_k\Vert^2\Bigr)
$$

증명의 요지. 정의 절의 마지막 문장으로 $x\_{k+1}$ 은 $f+\langle y\_{k+1},Ax-b\rangle$ 의 최소점이고, 따라서 $Ax\_{k+1}-b$ 는 $y\_{k+1}$ 에서 오목 함수 $d$ 의 상기울기다. 승수 갱신은 $(y\_{k+1}-y_k)/\rho=Ax\_{k+1}-b$ 이고, 이것이 위 최대화의 최적성 조건이다.

근접점 방법의 수렴 정리가 그대로 적용되므로, 강쌍대성이 성립하고 쌍대 최적해가 있으면 모든 $\rho\gt 0$ 에서 $d(y_k)$ 가 최댓값으로 가고 그 차이는 $O(1/(\rho k))$ 다.

## 승수의 선형 수렴

정리. 위 정리의 가정 아래에서 $y_0$ 이 $y^\ast$ 에 가깝고 $\rho$ 가 충분히 크면, 어떤 상수 $M$ 에 대해 $\Vert y\_{k+1}-y^\ast\Vert\le\frac M\rho\Vert y_k-y^\ast\Vert$ 이다.[^4]

직관 절에서는 $y_k+2$ 가 $1,0.5,0.25,\dots$ 로 매번 $2/(2+\rho)$ 배가 된다. $\rho$ 를 키우면 비율이 줄지만, 매 걸음의 최소화가 벌점법과 같은 이유로 어려워진다.

# 활용

- [교대 방향 승수법](admm.md). 목적함수가 $f(x)+g(z)$ 로 갈라지고 제약이 $Ax+Bz=c$ 이면, 증강 Lagrangian 의 최소화를 $x$ 와 $z$ 에 한 번씩만 번갈아 하고 승수를 고친다.
- 기저 추구와 Bregman 반복. [압축 센싱](compressed-sensing.md)의 문제 $\min\Vert x\Vert_1$ subject to $Ax=b$ 에 승수법을 쓰면, 측정값에 잔차를 되더하는 Bregman 반복(Bregman iteration)과 같은 점렬이 나온다.[^5]
- 대규모 비선형 계획. 상하한 제약만 남기고 나머지 제약을 증강 Lagrangian 으로 옮기면 부분문제가 상자 제약 최소화가 된다. 일반 제약을 직접 다루는 [순차 이차 계획법](sequential-quadratic-programming.md)과 함께 비선형 계획의 주된 두 방법이다.

[^1]: Magnus R. Hestenes, "Multiplier and gradient methods", *Journal of Optimization Theory and Applications* **4** (1969), 303–320.
[^2]: M. J. D. Powell, "A method for nonlinear constraints in minimization problems", in R. Fletcher (ed.), *Optimization*, Academic Press, 1969, 283–298.
[^3]: R. T. Rockafellar, "Augmented Lagrangians and applications of the proximal point algorithm in convex programming", *Mathematics of Operations Research* **1** (1976), 97–116.
[^4]: Dimitri P. Bertsekas, *Constrained Optimization and Lagrange Multiplier Methods*, Academic Press, 1982, 2 장.
[^5]: Wotao Yin, Stanley Osher, Donald Goldfarb, Jerome Darbon, "Bregman iterative algorithms for ℓ1-minimization with applications to compressed sensing", *SIAM Journal on Imaging Sciences* **1** (2008), 143–168.

# 연관 문서

## 선수지식

- [Lagrange 쌍대성](lagrange-duality.md)
- [근접점 방법](proximal-point-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis
