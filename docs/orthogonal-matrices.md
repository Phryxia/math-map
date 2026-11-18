# 직교행렬

# 개요

**직교행렬(orthogonal matrix)** 은 벡터의 길이와 두 벡터 사이의 각을 바꾸지 않는 정사각행렬이다. 화면의 그림을 돌리거나 거울에 비친 모양으로 뒤집으면 그림의 크기와 모양은 그대로이고, 이런 변환을 행렬로 적으면 직교행렬이 된다. 직교행렬은 전치행렬이 곧 역행렬이므로, 돌린 그림을 되돌리는 계산이 연립방정식을 풀지 않고 전치 하나로 끝난다.

# 직관

평면의 행렬 하나를 본다.

$$
Q=\begin{pmatrix}3/5&-4/5\cr 4/5&3/5\end{pmatrix}
$$

$Q$ 는 $(1,0)$ 을 첫째 열 $(3/5,4/5)$ 로, $(0,1)$ 을 둘째 열 $(-4/5,3/5)$ 로 보낸다. 두 열은 길이가 $1$ 이고 내적이 $-12/25+12/25=0$ 이어서 서로 수직이다. 좌표축 두 개가 길이와 직각을 지킨 채 같은 각만큼 돌아갔으므로, $Q$ 는 평면 전체를 돌린다. 점 $(5,0)$ 은 $(3,4)$ 로 가고 원점에서의 거리 $5$ 가 그대로다.

돌린 점 $(3,4)$ 를 되돌리려면 $Q$ 의 역행렬이 있어야 한다. 열들이 서로 수직이고 길이가 $1$ 이므로, $Q$ 의 전치 $Q^{\mathsf T}$ 를 곱하면 각 성분이 열끼리의 내적이 되어 $Q^{\mathsf T}Q$ 는 단위행렬이다. 실제로 다음이 나온다.

$$
Q^{\mathsf T}\begin{pmatrix}3\cr 4\end{pmatrix}=\begin{pmatrix}9/5+16/5\cr -12/5+12/5\end{pmatrix}=\begin{pmatrix}5\cr 0\end{pmatrix}
$$

# 정의

실수 성분의 $n\times n$ [행렬](matrices.md) $Q$ 가 다음을 만족하면 직교행렬이라 한다[^1].

$$
Q^{\mathsf T}Q=I
$$

$I$ 는 단위행렬이다. 이 식의 $(i,j)$ 성분은 $Q$ 의 $i$ 번째 열과 $j$ 번째 열의 내적이므로, $Q$ 가 직교행렬인 것은 $Q$ 의 열들이 정규직교 기저인 것과 동치다. 직관 절의 $Q$ 가 직교행렬이다.

$n\times n$ 직교행렬 전체는 곱에 대해 군을 이루고 이것을 **직교군(orthogonal group)** $\mathrm O(n)$ 이라 한다. 그 가운데 행렬식이 $1$ 인 것 전체를 **특수 직교군(special orthogonal group)** $\mathrm{SO}(n)$ 이라 한다.

# 성질

## 내적의 보존

다음 세 조건은 동치다. $Q$ 가 직교행렬이다. 모든 $x,y$ 에서 $\langle Qx,Qy\rangle=\langle x,y\rangle$ 이다. 모든 $x$ 에서 $\Vert Qx\Vert=\Vert x\Vert$ 이다.

첫째에서 둘째는 $\langle Qx,Qy\rangle=x^{\mathsf T}Q^{\mathsf T}Qy=x^{\mathsf T}y$ 로 나온다. 셋째에서 둘째는 [내적 공간](inner-product-spaces.md)의 편극 항등식 $4\langle x,y\rangle=\Vert x+y\Vert^2-\Vert x-y\Vert^2$ 으로 나온다. 길이를 지키는 선형사상은 각도도 지킨다.

## 행렬식

$\det(Q^{\mathsf T}Q)=\det(Q)^2=1$ 이므로 [행렬식](determinants.md)은 $1$ 이나 $-1$ 이다. 행렬식이 부피 배율이므로 직교행렬은 부피를 바꾸지 않고, 부호는 방향을 지키는지 뒤집는지를 정한다.

## 평면의 직교행렬

$2\times 2$ 직교행렬은 다음 두 꼴뿐이다.

$$
\begin{pmatrix}\cos\theta&-\sin\theta\cr \sin\theta&\cos\theta\end{pmatrix},\qquad \begin{pmatrix}\cos\theta&\sin\theta\cr \sin\theta&-\cos\theta\end{pmatrix}
$$

첫째 열이 단위벡터 $(\cos\theta,\sin\theta)$ 이고 둘째 열은 그에 수직인 단위벡터 두 개 가운데 하나이기 때문이다. 왼쪽은 행렬식이 $1$ 인 각 $\theta$ 의 회전이고, 오른쪽은 행렬식이 $-1$ 인 각 $\theta/2$ 방향 직선에 대한 반사다. 직관 절의 $Q$ 는 $\cos\theta=3/5$, $\sin\theta=4/5$ 인 회전이다.

## 고윳값과 공간의 회전

직교행렬의 복소 [고윳값](eigenvalues.md) $\lambda$ 는 $\vert\lambda\vert=1$ 을 만족한다. 고유벡터 $v$ 에서 $\Vert Qv\Vert=\vert\lambda\vert\Vert v\Vert$ 이고 길이가 보존되기 때문이다.

$3\times 3$ 이고 행렬식이 $1$ 이면 고윳값 $1$ 이 존재한다. $Q-I=Q(I-Q^{\mathsf T})$ 이므로 다음이 성립하고, 따라서 $\det(Q-I)=0$ 이다.

$$
\det(Q-I)=\det(Q)\det(I-Q^{\mathsf T})=\det(I-Q)=-\det(Q-I)
$$

고유벡터 방향은 움직이지 않고, 그에 수직인 평면에서는 평면의 회전이 일어난다. 공간의 모든 회전이 한 축 둘레의 회전이라는 이 사실을 Euler 회전 정리(Euler's rotation theorem)라 한다.

## 유니터리 행렬

복소수 성분에서는 전치 대신 켤레전치 $U^\ast$ 를 써서 $U^\ast U=I$ 인 행렬을 **유니터리 행렬(unitary matrix)** 이라 한다. 내적의 보존, $\vert\det U\vert=1$, $\vert\lambda\vert=1$ 이 같은 방법으로 성립한다.

# 활용

- [스펙트럼 정리](spectral-theorem.md). 실대칭행렬 $A$ 는 직교행렬 $Q$ 와 대각행렬 $\Lambda$ 로 $A=Q\Lambda Q^{\mathsf T}$ 로 쓰인다. [원뿔곡선](conic-sections.md)의 축 회전이 $2\times 2$ 의 경우다.
- [행렬 분해](matrix-factorizations.md)의 QR 분해(QR decomposition). $A=QR$ 의 $Q$ 가 직교행렬이고, [Householder 반사](householder-reflection.md)와 [Givens 회전](givens-rotation.md)으로 만든다. 직교행렬은 길이를 지키므로 반올림 오차를 키우지 않는다.
- [특이값 분해](singular-value-decomposition.md). 모든 행렬은 직교행렬, 음이 아닌 대각행렬, 직교행렬의 곱 $U\Sigma V^{\mathsf T}$ 로 쓰인다.
- [직교 Procrustes 문제](orthogonal-procrustes.md). 두 점 집합을 가장 가깝게 겹치는 회전이나 반사를 직교행렬 가운데서 찾는다.
- [Lie 군](lie-groups.md). $\mathrm{SO}(3)$ 은 공간의 회전 전체이고 3 차원 다양체를 이루는 Lie 군이다.

[^1]: G. Strang, *Introduction to Linear Algebra*, 5th ed., Wellesley-Cambridge Press, 2016, Section 4.4.

# 연관 문서

## 선수지식

- [행렬식](determinants.md)
- [내적 공간](inner-product-spaces.md)

## 더 알아보기

- [Householder 반사](householder-reflection.md)
- [Givens 회전](givens-rotation.md)

#linear_algebra #group_theory #computation
