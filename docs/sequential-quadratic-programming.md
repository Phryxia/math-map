# 순차 이차 계획법

# 개요

**순차 이차 계획법(sequential quadratic programming, SQP)** 은 제약이 곡선이나 곡면인 최적화 문제를, 현재 점에서 만든 [이차 계획법](quadratic-programming.md) 문제를 되풀이해 푸는 방법이다. 원 $x^2+y^2=2$ 위에서 $x+y$ 를 가장 작게 하는 점을 찾을 때, 원 위를 따라 움직이는 식을 직접 풀기는 번거롭다. 순차 이차 계획법은 지금 점에서 원을 접선으로, 목적함수를 이차식으로 바꾼 문제를 풀어 다음 점으로 옮기고, 이것을 몇 번 되풀이해 최적점 $(-1,-1)$ 에 빠르게 다가간다.

# 직관

$x+y$ 를 $x^2+y^2=2$ 에서 최소화한다. [Lagrange 승수법](lagrange-multipliers.md)의 조건은

$$
1+2\nu x=0,\qquad 1+2\nu y=0,\qquad x^2+y^2=2
$$

이고 해는 $(x,y)=(-1,-1)$, $\nu=1/2$ 이다. 이 세 식은 미지수 $x,y,\nu$ 의 비선형 연립방정식이므로 [Newton 법](newton-method.md)으로 풀 수 있다.

점 $(-2,0)$, $\nu=1$ 에서 세 식을 일차식으로 바꾸면 걸음 $(p_x,p_y)$ 와 새 승수 $\nu^+$ 에 대해 $2p_x-4\nu^+=-1$, $2p_y=-1$, $-4p_x=-2$ 가 된다. 풀면 $p=(0.5,-0.5)$, $\nu^+=0.5$ 이고 다음 점은 $(-1.5,-0.5)$ 다. 같은 계산을 되풀이하면 점이 $(-1.15,-1.05)$, $(-1.0011,-1.0107)$, $(-1.0001,-1.0000)$ 으로 가고, 제약의 오차는 $0.5$, $0.43$, $0.024$, $0.00012$ 이고, 해에 가까워진 뒤에는 한 걸음마다 대략 제곱으로 줄어든다.

이 일차 연립방정식은 목적함수를 이차식으로, 제약을 접선으로 바꾼 등식 제약 이차 계획의 최적성 조건과 같다. 그래서 Newton 법의 한 걸음이 이차 계획 하나를 푸는 것이 된다.

# 정의

## 이차 계획 부분문제

$f:\mathbb R^n\to\mathbb R$, $c:\mathbb R^n\to\mathbb R^m$ 이 두 번 미분 가능하고 문제는 $c(x)=0$ 에서 $f(x)$ 의 최소화다. Lagrange 함수는 $L(x,\nu)=f(x)+\nu^{\mathsf T}c(x)$ 이고, $J(x)$ 는 $c$ 의 Jacobi 행렬, $\nabla^2\_{xx}L$ 은 $L$ 의 $x$ 에 대한 [Hessian 행렬](hessian.md)이다. 현재 점 $(x_k,\nu_k)$ 에서

$$
\min_p\ \nabla f(x_k)^{\mathsf T}p+\tfrac12p^{\mathsf T}\nabla^2\_{xx}L(x_k,\nu_k)\thinspace p\qquad\text{subject to}\qquad c(x_k)+J(x_k)p=0
$$

를 **이차 계획 부분문제(quadratic programming subproblem)** 라 한다. 부등식 제약 $g(x)\le 0$ 이 있으면 부분문제에 일차 부등식 $g(x_k)+\nabla g(x_k)^{\mathsf T}p\le 0$ 을 더한다.

## 반복

**순차 이차 계획법** 은 부분문제의 해 $p_k$ 와 그 제약의 승수 $\nu^+$ 로 $x\_{k+1}=x_k+p_k$, $\nu\_{k+1}=\nu^+$ 로 옮기는 반복이다. 등식 제약만 있으면 부분문제의 최적성 조건은 다음 일차연립방정식이다.

$$
\begin{pmatrix}\nabla^2\_{xx}L&J^{\mathsf T}\cr J&0\end{pmatrix}\begin{pmatrix}p\cr\nu^+\end{pmatrix}=\begin{pmatrix}-\nabla f\cr -c\end{pmatrix}
$$

직관 절의 예에서 $\nabla^2\_{xx}L=2\nu I$, $J=(2x,2y)$, $\nabla f=(1,1)$ 이고 첫 반복이 $(-2,0)$ 에서 $(-1.5,-0.5)$ 로 간다.

# 성질

## 국소 이차 수렴

$(x^\ast,\nu^\ast)$ 에서 제약 기울기들이 일차독립이고, 제약의 접공간 위에서 $\nabla^2\_{xx}L(x^\ast,\nu^\ast)$ 가 양의 정부호이면, 충분히 가까운 점에서 출발한 반복은 $(x^\ast,\nu^\ast)$ 로 이차 수렴한다.[^1] 위의 일차연립방정식이 KKT 조건(Karush–Kuhn–Tucker conditions)에 대한 Newton 법의 한 걸음이므로 Newton 법의 수렴이 그대로 옮겨 온다. 두 가정 아래 계수행렬이 $(x^\ast,\nu^\ast)$ 에서 가역이다.

## 준Newton 근사

$\nabla^2\_{xx}L$ 을 계산하기 어려우면 [준Newton 법](quasi-newton-methods.md)의 BFGS(Broyden–Fletcher–Goldfarb–Shanno) 갱신으로 근사한다. 이때 $\nabla_xL$ 의 변화를 쓰고, 근사가 양의 정부호로 남도록 갱신을 조정한다. 수렴은 이차에서 초선형으로 바뀐다.

## 전역화

먼 점에서 출발하면 걸음이 목적함수와 제약을 함께 나쁘게 할 수 있다. 그래서 $\phi(x)=f(x)+\rho\Vert c(x)\Vert_1$ 같은 벌점 함수를 두고 $p_k$ 방향으로 $\phi$ 가 충분히 줄도록 [선탐색](line-search.md)을 하거나, 부분문제에 신뢰영역 제약을 더한다. $\rho$ 가 승수의 절댓값보다 크면 $x^\ast$ 가 $\phi$ 의 국소 최소점이다.[^1]

# 활용

- [선형 이차 조절기](linear-quadratic-regulator.md)의 계가 비선형이면, 궤적 전체를 변수로 둔 최적 제어 문제를 순차 이차 계획법으로 푼다. 이때 부분문제는 선형계의 이차 비용 문제다.
- 공학 설계의 형상 최적화와 화학 공정 최적화처럼 변수가 수십에서 수천이고 제약이 비선형인 문제의 표준적인 해법으로 쓴다.
- [비선형 최소제곱](nonlinear-least-squares.md)의 Gauss–Newton 법은 제약이 없을 때 $\nabla^2\_{xx}L$ 을 Jacobi 행렬의 곱으로 바꾼 부분문제를 푸는 경우와 같다.

[^1]: Jorge Nocedal and Stephen J. Wright, *Numerical Optimization*, 2nd ed., Springer (2006), 18 장. 국소 수렴 정리와 벌점 함수의 정확성.

# 연관 문서

## 선수지식

- [이차 계획법](quadratic-programming.md)
- [Newton 법](newton-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis
