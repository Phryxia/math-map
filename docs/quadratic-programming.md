# 이차 계획법

# 개요

**이차 계획법(quadratic programming)** 은 일차 부등식과 일차 등식으로 정한 영역 안에서 이차 함수를 가장 작게 하는 문제다. 평면의 점 $(2,2)$ 에서 가장 가까운 점을 $x+y\le 2$ 인 반평면 안에서 찾는 문제가 이 꼴이고, 답 $(1,1)$ 은 경계 직선의 꼭짓점이 아닌 가운데에 있다. 이차 계획법은 볼록인 경우 최적점에서 목적함수의 기울기가 활성 제약의 기울기로 상쇄된다는 조건을 일차연립방정식과 부등식으로 적어 푼다.

# 직관

$(x-2)^2+(y-2)^2$ 을 $x+y\le 2$ 에서 최소화한다. 제약이 없으면 최소점은 $(2,2)$ 인데 $2+2\gt 2$ 라 영역 밖이다. 그래서 최소점은 경계 $x+y=2$ 위에 있다.

경계 위에서 $y=2-x$ 를 넣으면 $(x-2)^2+x^2$ 이 되고, 미분해 $0$ 으로 두면 $x=1$ 이다. 최소점 $(1,1)$ 에서 목적함수의 기울기는 $(-2,-2)$ 이고 제약 $x+y$ 의 기울기 $(1,1)$ 의 $-2$ 배다. 목적함수를 더 줄이는 방향이 정확히 영역 밖을 향하므로 더 움직일 곳이 없다.

목적함수가 일차식이면 최소점은 영역의 꼭짓점에 있어 꼭짓점만 찾아보면 된다. 이차식이면 위처럼 변의 가운데나 영역의 안쪽에 있을 수 있다.

# 정의

## 이차 계획 문제

$Q$ 는 $n\times n$ 대칭행렬, $c\in\mathbb R^n$, $A$ 는 $m\times n$ 행렬, $b\in\mathbb R^m$ 이다. 다음 문제를 **이차 계획 문제(quadratic program)** 라 한다.

$$
\min_{x\in\mathbb R^n}\ \tfrac12x^{\mathsf T}Qx+c^{\mathsf T}x\qquad\text{subject to}\qquad Ax\le b
$$

부등식은 성분별이고, 등식 제약 $Ex=d$ 는 두 부등식으로 쓴다. $Q$ 가 양의 준정부호이면 목적함수가 [볼록](convexity.md)이므로 **볼록 이차 계획(convex quadratic program)** 이라 한다. 직관 절의 예는 $Q=2I$, $c=(-4,-4)$, $A=\begin{pmatrix}1&1\end{pmatrix}$, $b=2$ 이고 상수항 $8$ 을 뺀 것이다.

## 활성 제약

실행 가능한 점 $x$ 에서 $(Ax)\_i=b_i$ 인 제약 $i$ 를 **활성 제약(active constraint)** 이라 한다. 직관 절의 $(1,1)$ 에서 유일한 제약 $x+y\le 2$ 가 활성이다.

# 성질

## KKT 조건

볼록 이차 계획에서 $x^\ast$ 가 최적인 것은 다음을 만족하는 $\lambda\in\mathbb R^m$ 이 존재하는 것과 동치다.

$$
Qx^\ast+c+A^{\mathsf T}\lambda=0,\qquad Ax^\ast\le b,\qquad \lambda\ge 0,\qquad \lambda_i\bigl(b-Ax^\ast\bigr)\_i=0
$$

[Lagrange 쌍대성](lagrange-duality.md)의 KKT 조건(Karush–Kuhn–Tucker conditions)을 이 문제에 쓴 것이다. 제약이 일차식이므로 제약 자격(constraint qualification)을 따로 가정하지 않아도 필요조건이 되고, 목적함수가 볼록이므로 충분조건이 된다. 직관 절의 예에서 $2(1)-4+\lambda=0$ 이므로 $\lambda=2$ 다.

## 등식 제약만 있는 경우

제약이 $Ex=d$ 뿐이면 KKT 조건은 일차연립방정식이다.

$$
\begin{pmatrix}Q&E^{\mathsf T}\cr E&0\end{pmatrix}\begin{pmatrix}x\cr\nu\end{pmatrix}=\begin{pmatrix}-c\cr d\end{pmatrix}
$$

$E$ 의 행이 일차독립이고 $Q$ 가 $E$ 의 영공간 위에서 양의 정부호이면 이 행렬은 가역이고 해가 유일하다.

## 쌍대 문제

$Q$ 가 양의 정부호이면 Lagrange 함수를 $x$ 에 대해 최소화한 값은 $x=-Q^{-1}(c+A^{\mathsf T}\lambda)$ 에서 나오고, 쌍대 문제는 다음이다.

$$
\max_{\lambda\ge 0}\ -\tfrac12\bigl(c+A^{\mathsf T}\lambda\bigr)^{\mathsf T}Q^{-1}\bigl(c+A^{\mathsf T}\lambda\bigr)-b^{\mathsf T}\lambda
$$

쌍대 문제도 이차 계획이고 제약이 $\lambda\ge 0$ 뿐이다. 볼록 이차 계획에서는 강쌍대성이 성립해 두 최적값이 같다.

## 활성 집합법

**활성 집합법(active set method)** 은 활성 제약의 집합을 추측해 그 제약만 등식으로 둔 문제를 위의 연립방정식으로 풀고, 실행 가능성이 깨지면 제약을 더하고 $\lambda_i\lt 0$ 이면 그 제약을 빼는 반복이다. $Q$ 가 양의 정부호이면 같은 활성 집합이 되풀이되지 않아 유한 번 안에 끝난다.[^1] 직관 절에서는 활성 집합을 빈 집합으로 추측하면 $(2,2)$ 가 실행 불가능하므로 제약을 더하고, 그 다음 풀이 $(1,1)$ 에서 $\lambda=2\ge 0$ 이라 끝난다.

## 계산 복잡도

볼록 이차 계획은 [내점법](interior-point-method.md)으로 다항식 시간에 푼다. $Q$ 가 음의 고윳값을 하나만 가져도 이차 계획은 NP-어려움(NP-hard)이다.[^2]

# 활용

- [서포트 벡터 머신](support-vector-machine.md)의 쌍대 문제는 상자 제약과 등식 하나가 있는 볼록 이차 계획이다.
- [평균-분산 포트폴리오](mean-variance-portfolio.md). 자산 수익률의 공분산행렬이 $Q$ 이고, 기대수익의 하한과 비중의 합이 $1$ 이라는 제약 아래 분산을 최소화한다.
- [선형 이차 조절기](linear-quadratic-regulator.md)에 입력의 상한을 더한 모형 예측 제어는 시점마다 이차 계획을 푼다.
- [선형 상보성 문제](linear-complementarity.md)는 볼록 이차 계획의 KKT 조건을 $x$ 와 $\lambda$ 의 상보성으로 다시 쓴 꼴이다.
- 비선형 제약 최적화의 순차 이차 계획법(sequential quadratic programming)은 현재 점에서 목적함수를 이차식으로, 제약을 일차식으로 근사한 이차 계획을 매 걸음 푼다.

[^1]: Jorge Nocedal and Stephen J. Wright, *Numerical Optimization*, 2nd ed., Springer (2006), 16 장. 등식 제약 이차 계획의 KKT 계와 활성 집합법의 유한 종료.
[^2]: Panos M. Pardalos and Stephen A. Vavasis, "Quadratic programming with one negative eigenvalue is NP-hard", *Journal of Global Optimization* 1 (1991), 15–22.

# 연관 문서

## 선수지식

- [Lagrange 쌍대성](lagrange-duality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra
