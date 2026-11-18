# Euler 회전 정리

# 개요

**Euler 회전 정리(Euler's rotation theorem)** 는 공간에서 한 점을 고정한 채 물체를 어떻게 돌려도, 그 결과가 그 점을 지나는 축 하나 둘레의 회전 한 번과 같다는 정리다. 주사위의 중심을 고정하고 앞뒤로 $90^\circ$ 굴린 다음 제자리에서 $90^\circ$ 돌리면, 두 동작을 합친 결과도 어떤 축 둘레의 한 번의 회전이다. 이 정리는 회전을 나타내는 직교행렬에서 움직이지 않는 벡터로 축을 찾고 대각합으로 각을 구한다.

# 직관

좌표축을 주사위의 면에 맞추고, 먼저 $x$ 축 둘레로 $90^\circ$ 돌린 다음 $z$ 축 둘레로 $90^\circ$ 돌린다. 첫 회전은 점 $(x,y,z)$ 를 $(x,-z,y)$ 로, 둘째 회전은 $(x,y,z)$ 를 $(-y,x,z)$ 로 보낸다. 둘을 차례로 하면 $(x,y,z)$ 가 $(z,x,y)$ 로 간다.

이 동작에서 움직이지 않는 점은 $(z,x,y)=(x,y,z)$ 인 점, 곧 $x=y=z$ 인 점이다. 원점과 $(1,1,1)$ 을 지나는 직선 위의 점은 제자리에 있다.

이 직선에 수직인 벡터 $(1,-1,0)$ 은 $(0,1,-1)$ 로 간다. 두 벡터의 길이는 $\sqrt2$ 이고 내적은 $-1$ 이므로 사이각의 코사인은 $-1/2$, 각은 $120^\circ$ 다. 직선에 수직인 평면이 $120^\circ$ 돌았다. 두 번의 회전을 합친 결과는 $(1,1,1)$ 방향 축 둘레의 $120^\circ$ 회전 한 번이다.

축이 언제나 있는 이유는 [직교행렬](orthogonal-matrices.md)의 [고윳값](eigenvalues.md)에 있다. 행렬식이 $1$ 인 $3\times 3$ 직교행렬은 고윳값 $1$ 을 가지므로 움직이지 않는 방향이 하나 있고, 그 방향이 축이다.

# 정의

공간의 **회전(rotation)** 은 행렬식이 $1$ 인 $3\times 3$ 직교행렬이다. 회전 전체는 행렬 곱에 대해 군을 이루고 이것을 $\mathrm{SO}(3)$ 으로 쓴다. 직관 절의 동작은 다음 행렬이다.

$$
R=\begin{pmatrix}0&0&1\cr 1&0&0\cr 0&1&0\end{pmatrix}
$$

단위벡터 $\mathbf n$ 과 각 $\theta$ 에 대해 **축 $\mathbf n$ 둘레의 각 $\theta$ 회전** 은 $\mathbf n$ 을 고정하고, $\mathbf n$ 에 수직인 평면을 $\mathbf n$ 쪽에서 내려다볼 때 시계 반대 방향으로 $\theta$ 만큼 돌리는 회전이다. 직관 절의 $R$ 은 $\mathbf n=(1,1,1)/\sqrt3$, $\theta=2\pi/3$ 인 경우다.

Euler 회전 정리는 다음 진술이다. 모든 $R\in\mathrm{SO}(3)$ 에 대해 단위벡터 $\mathbf n$ 과 $0\le\theta\le\pi$ 가 존재하여 $R$ 은 축 $\mathbf n$ 둘레의 각 $\theta$ 회전이다. $R=I$ 이면 $\theta=0$ 이고 축은 아무것이나 된다.

# 성질

## 정리의 증명

$R\in\mathrm{SO}(3)$ 이면 $\det(R-I)=0$ 이므로 $R\mathbf n=\mathbf n$ 인 단위벡터 $\mathbf n$ 이 존재한다. $R$ 은 내적을 보존하므로 $\mathbf n$ 에 수직인 벡터를 $\mathbf n$ 에 수직인 벡터로 보낸다.

$\mathbf n$ 에 수직인 평면의 정규직교기저 $\mathbf u$, $\mathbf v$ 를 $\mathbf u\times\mathbf v=\mathbf n$ 이 되게 잡는다. 기저 $\mathbf u,\mathbf v,\mathbf n$ 에서 $R$ 은 왼쪽 위 $2\times 2$ 블록이 평면의 직교행렬이고 오른쪽 아래 성분이 $1$ 인 행렬이다. 전체 행렬식이 $1$ 이므로 블록의 행렬식도 $1$ 이고, 평면의 직교행렬 가운데 행렬식이 $1$ 인 것은 회전이다. $\theta$ 가 $\pi$ 보다 크면 $\mathbf n$ 을 $-\mathbf n$ 으로 바꾸어 $2\pi-\theta$ 로 쓴다.

## 축과 각의 계산

기저를 바꾸어도 대각합은 바뀌지 않으므로 증명의 블록 행렬에서 다음이 나온다.

$$
\mathrm{tr}\thinspace R=1+2\cos\theta
$$

직관 절의 $R$ 은 대각합이 $0$ 이므로 $\cos\theta=-1/2$ 이고 $\theta=2\pi/3$ 이다. 축은 $R-I$ 의 영공간이다.

## Rodrigues 공식

축 $\mathbf n$ 둘레의 각 $\theta$ 회전은 벡터 $\mathbf v$ 를 다음으로 보낸다.

$$
R\mathbf v=\cos\theta\thinspace\mathbf v+\sin\theta\thinspace(\mathbf n\times\mathbf v)+(1-\cos\theta)(\mathbf n\cdot\mathbf v)\thinspace\mathbf n
$$

이것을 Rodrigues 공식(Rodrigues' rotation formula)이라 한다. $\mathbf v$ 를 $\mathbf n$ 방향 성분 $(\mathbf n\cdot\mathbf v)\mathbf n$ 과 수직 성분 $\mathbf v\_\perp$ 로 나누면 앞 성분은 그대로이다. $\mathbf v\_\perp$ 와 $\mathbf n\times\mathbf v$ 는 길이가 같고 서로 수직이므로, 그 평면에서 $\theta$ 만큼 돌린 벡터는 $\cos\theta\thinspace\mathbf v\_\perp+\sin\theta\thinspace(\mathbf n\times\mathbf v)$ 다. 두 성분을 더하면 공식이 나온다.

직관 절의 회전에 $\mathbf v=(1,0,0)$ 을 넣으면 세 항이 $(-\frac12,0,0)$, $(0,\frac12,-\frac12)$, $(\frac12,\frac12,\frac12)$ 이고 합은 $(0,1,0)$ 이다. $R$ 의 첫째 열과 같다.

## 합성과 비가환성

두 회전의 곱은 행렬식이 $1$ 인 직교행렬이므로 정리에 의해 다시 한 축 둘레의 회전이다. 곱의 순서를 바꾸면 결과가 다르다. 직관 절에서 $z$ 축 둘레로 먼저 돌리고 $x$ 축 둘레로 돌리면 $(x,y,z)$ 가 $(-y,-z,x)$ 로 가고, 이것은 $(z,x,y)$ 와 다르다.

## 반사가 섞인 직교행렬

행렬식이 $-1$ 인 $3\times 3$ 직교행렬 $Q$ 에 대해 $-Q$ 는 행렬식이 $1$ 이다. 따라서 $Q$ 는 회전 $-Q$ 와 원점에 대한 대칭 $-I$ 의 곱이다. 공간의 직교행렬은 회전이거나, 회전 뒤에 원점 대칭을 한 것이다.

## 사원수 표현

단위벡터 $\mathbf n=(n_1,n_2,n_3)$ 과 각 $\theta$ 에 대해 다음 Hamilton 사원수를 잡는다.

$$
q=\cos\frac\theta2+\sin\frac\theta2\thinspace(n_1i+n_2j+n_3k)
$$

벡터 $\mathbf v$ 를 순허수 사원수로 보면 $q\mathbf v\bar q$ 가 축 $\mathbf n$ 둘레의 각 $\theta$ 회전이다[^1]. $q$ 와 $-q$ 는 같은 회전을 주고, 두 회전의 합성은 사원수의 곱에 대응한다.

# 활용

- [Lie 군](lie-groups.md). 회전은 축의 방향(구면 위의 점, 매개변수 둘)과 각(매개변수 하나)으로 정해지므로 $\mathrm{SO}(3)$ 은 3 차원이다. 사원수 표현의 $q\mapsto$ 회전 사상이 $\mathrm{SU}(2)\to\mathrm{SO}(3)$ 이중덮개다.
- [Givens 회전](givens-rotation.md). 좌표축 하나를 축으로 하는 회전이고, 행렬의 성분 하나를 $0$ 으로 만드는 데 쓴다.
- [직교 Procrustes 문제](orthogonal-procrustes.md). 두 점 집합을 겹치는 최적의 직교행렬을 구한 뒤 행렬식이 $1$ 이 되게 고치면 회전이 나오고, 그 축과 각을 대각합과 영공간으로 읽는다.
- [사원수 대수](quaternion-algebras.md)의 Hamilton 사원수. 사원수 표현은 회전의 합성을 행렬 곱 대신 사원수 네 성분의 곱으로 계산하게 한다.

[^1]: J. Stillwell, *Naive Lie Theory*, Springer, 2008, Section 1.5.

# 연관 문서

## 선수지식

- [직교행렬](orthogonal-matrices.md)
- [벡터곱](cross-product.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #group_theory #differential_geometry
