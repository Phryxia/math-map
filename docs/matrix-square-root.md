# 행렬 제곱근

# 개요

**행렬 제곱근(matrix square root)** 은 정사각[행렬](matrices.md) $A$ 에 대해 $X^2=A$ 인 행렬 $X$ 다. [공분산](covariance.md) 행렬 $A$ 를 갖는 Gauss 분포에서 표본을 뽑으려면 서로 독립인 표준정규 난수 벡터에 곱해 공분산이 $A$ 가 되게 하는 행렬, 곧 $XX^{\mathsf T}=A$ 인 $X$ 가 필요하다. 해는 여럿인데, 고윳값의 실수부가 양수인 것 하나를 주 제곱근이라 부르고, 수의 제곱근을 구하는 Newton 반복을 행렬에 맞게 고친 반복으로 계산한다.

# 직관

$A=\begin{pmatrix}5&4\cr 4&5\end{pmatrix}$ 는 방향 $(1,1)$ 을 $9$ 배, $(1,-1)$ 을 $1$ 배 한다. 각 방향의 배율에 제곱근을 취해 $3$ 배와 $1$ 배로 하는 행렬은 다음이고, 제곱하면 $A$ 가 된다.

$$
X=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}
$$

배율의 부호를 바꾼 $-3$ 배와 $1$ 배, $3$ 배와 $-1$ 배, $-3$ 배와 $-1$ 배도 제곱하면 $A$ 라, 제곱근이 넷 있다. 양수 배율만 고른 $X$ 가 주 제곱근이다.

수 $a$ 의 제곱근은 $y\mapsto(y+a/y)/2$ 를 되풀이해 구한다. 행렬에서는 $y$ 의 역과 $A$ 의 곱이 교환하지 않을 수 있어, 두 수열 $Y_k\to A^{1/2}$, $Z_k\to A^{-1/2}$ 를 함께 갱신한다. $Y_0=A$, $Z_0=I$ 에서 시작하면 다음이 나오고, $Y_4$ 의 성분은 $X$ 와 $0.00005$ 이내다.

$$
Y_1=\begin{pmatrix}3&2\cr 2&3\end{pmatrix},\qquad Y_2=\begin{pmatrix}2.2&1.2\cr 1.2&2.2\end{pmatrix}
$$

# 정의

$n\times n$ 복소행렬 $A$ 에 대해 $X^2=A$ 인 $X$ 를 $A$ 의 **제곱근** 이라 한다. $A$ 가 음의 실수축 $(-\infty,0\rbrack$ 위에 [고윳값](eigenvalues.md)을 갖지 않으면, 고윳값의 실수부가 모두 양수인 제곱근이 하나뿐이다.[^1] 이것을 **주 제곱근(principal square root)** 이라 하고 $A^{1/2}$ 로 쓴다. $A$ 가 양의 준정부호 에르미트 행렬이면 $A^{1/2}$ 도 양의 준정부호 에르미트이고, [극분해](polar-decomposition.md)의 $P=(A^\ast A)^{1/2}$ 가 이것이다.

# 성질

## 고윳값과 Jordan 블록

$A$ 가 대각화가능하고 $A=V\Lambda V^{-1}$ 이면 $A^{1/2}=V\Lambda^{1/2}V^{-1}$ 이다. 고윳값이 서로 다르고 $0$ 이 없으면 제곱근은 부호 선택마다 하나씩 $2^n$ 개다. [Jordan 표준형](jordan-canonical-form.md)의 블록 $\lambda I+N$ ($\lambda\ne 0$) 은 이항급수가 $N^k=0$ 에서 끝나 제곱근을 갖는다.

고윳값이 $0$ 인 크기 $2$ 블록 $\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 는 제곱근이 없다. $X^2$ 가 이것이면 $X$ 는 고윳값이 $0$ 뿐인 $2\times 2$ 행렬이라 $X^2=0$ 이 되어 어긋난다.

## Denman–Beavers 반복

$Y_0=A$, $Z_0=I$ 에서 다음을 되풀이하면 $Y_k\to A^{1/2}$, $Z_k\to A^{-1/2}$ 로 이차 수렴한다.[^2]

$$
Y\_{k+1}=\frac12\bigl(Y_k+Z_k^{-1}\bigr),\qquad Z\_{k+1}=\frac12\bigl(Z_k+Y_k^{-1}\bigr)
$$

이것을 **Denman–Beavers 반복(Denman–Beavers iteration)** 이라 한다. $X\_{k+1}=(X_k+X_k^{-1}A)/2$ 를 그대로 쓰는 반복도 정확한 계산에서는 같은 극한으로 가지만, 반올림 오차가 커지는 방향이 있어 수치적으로 불안정하다.[^1]

## 부호 함수와의 관계

[행렬 부호 함수](matrix-sign-function.md)로 다음이 성립한다.[^1]

$$
\mathrm{sign}\begin{pmatrix}0&A\cr I&0\end{pmatrix}=\begin{pmatrix}0&A^{1/2}\cr A^{-1/2}&0\end{pmatrix}
$$

이 블록 행렬에 부호 함수의 Newton 반복 $X\mapsto(X+X^{-1})/2$ 를 쓰고 블록을 읽으면 Denman–Beavers 반복이 나온다.

# 활용

- 다변량 Gauss 표본. 공분산 $A$ 에서 $x=A^{1/2}z$ 로 표본을 만든다. Cholesky 인수 $L$ 로 $x=Lz$ 를 써도 공분산이 같고, 계산은 Cholesky 분해가 싸다.
- 극분해. $A^\ast A$ 의 주 제곱근이 극분해의 에르미트 인수다.
- [행렬 로그](matrix-logarithm.md)의 계산. 제곱근을 거듭 취해 $I$ 근처로 가져온 뒤 로그를 구하는 역 척도 조정과 제곱이 이 반복을 쓴다.

[^1]: N. J. Higham, *Functions of Matrices: Theory and Computation*, SIAM (2008), 6 장. 주 제곱근의 존재와 유일성, 반복들의 안정성, 부호 함수와의 관계.
[^2]: E. D. Denman, A. N. Beavers, "The matrix sign function and computations in systems", *Applied Mathematics and Computation* 2 (1976), 63–94.

# 연관 문서

## 선수지식

- [행렬 부호 함수](matrix-sign-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #analysis
