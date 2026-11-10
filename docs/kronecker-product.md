# Kronecker 곱

# 개요

**Kronecker 곱(Kronecker product)** 은 두 [행렬](matrices.md) $A$, $B$ 에서 $A$ 의 각 성분 자리에 그 성분과 $B$ 의 곱을 놓아 만든 큰 행렬 $A\otimes B$ 다. $2\times 2$ 격자의 네 점에서 이웃한 값의 차를 더하는 계산은 $4\times 4$ 행렬이지만, 실제로는 가로 방향과 세로 방향으로 같은 $2\times 2$ 계산을 한 번씩 한 것이다. Kronecker 곱은 큰 행렬을 작은 행렬 둘로 적고, 큰 행렬의 고윳값과 역행렬을 작은 행렬의 것으로 계산한다.

# 직관

$2\times 2$ 격자의 값을 행렬 $X$ 로 두고, 행렬 $A$ 를 다음처럼 둔다.

$$
X=\begin{pmatrix}x\_{11}&x\_{12}\cr x\_{21}&x\_{22}\end{pmatrix},\qquad A=\begin{pmatrix}-2&1\cr 1&-2\end{pmatrix}
$$

각 점에서 위아래 이웃의 값을 더하고 자기 값의 두 배를 빼는 계산은 $AX$, 좌우 이웃에 대해 같은 계산은 $XA$ 이다. 둘을 더한 $L(X)=AX+XA$ 는 각 점에서 이웃 둘의 합에서 자기 값의 네 배를 뺀 것이다.

네 값을 세로로 $(x\_{11},x\_{21},x\_{12},x\_{22})$ 처럼 열 순서로 늘어놓으면 $L$ 은 $4\times 4$ 행렬

$$
M=\begin{pmatrix}-4&1&1&0\cr 1&-4&0&1\cr 1&0&-4&1\cr 0&1&1&-4\end{pmatrix}
=\begin{pmatrix}A&0\cr 0&A\end{pmatrix}+\begin{pmatrix}-2I&I\cr I&-2I\end{pmatrix}
$$

이다. 첫째 항은 $A$ 를 대각에 두 번 놓은 것이고, 둘째 항은 $A$ 의 성분 $-2,1,1,-2$ 자리에 각각 $-2I,I,I,-2I$ 를 놓은 것이다.

$A$ 의 [고윳값](eigenvalues.md)은 $-1$, $-3$ 이고 고유벡터는 $v=(1,1)$, $w=(1,-1)$ 이다. $X=vv^{\mathsf T}$ 이면 $L(X)=Avv^{\mathsf T}+vv^{\mathsf T}A=-2X$ 이다. 같은 계산으로 $vw^{\mathsf T}$, $wv^{\mathsf T}$, $ww^{\mathsf T}$ 에서 $-4,-4,-6$ 이 나온다.

$4\times 4$ 행렬 $M$ 의 고윳값 $-2,-4,-4,-6$ 이 $A$ 의 고윳값 두 개를 두 번씩 더한 값으로 나온다. 둘째 항처럼 행렬의 성분 자리에 다른 행렬을 곱해 놓는 연산이 Kronecker 곱이다.

# 정의

## Kronecker 곱

$A$ 가 $m\times n$, $B$ 가 $p\times q$ 행렬이면

$$
A\otimes B=\begin{pmatrix}a\_{11}B&\cdots&a\_{1n}B\cr\vdots&&\vdots\cr a\_{m1}B&\cdots&a\_{mn}B\end{pmatrix}
$$

인 $mp\times nq$ 행렬을 **Kronecker 곱** 이라 한다. 직관 절의 첫째 항은 $I\otimes A$, 둘째 항은 $A\otimes I$ 다. 기저를 고정했을 때 두 [선형사상](linear-maps.md)의 [텐서곱](tensor-products.md)을 나타내는 행렬이 Kronecker 곱이다.

## 열 쌓기와 Kronecker 합

$m\times n$ 행렬 $X$ 의 열을 차례로 이어 붙인 길이 $mn$ 의 벡터를 $\mathrm{vec}(X)$ 라 한다. 직관 절에서 $\mathrm{vec}(X)=(x\_{11},x\_{21},x\_{12},x\_{22})$ 다. $A$ 가 $m\times m$, $B$ 가 $n\times n$ 이면

$$
A\oplus B=A\otimes I_n+I_m\otimes B
$$

를 **Kronecker 합(Kronecker sum)** 이라 한다. 직관 절의 $M$ 은 $A\oplus A$ 다.

# 성질

## 곱셈 규칙

크기가 맞으면 다음이 성립한다[^1].

$$
(A\otimes B)(C\otimes D)=(AC)\otimes(BD),\qquad (A\otimes B)^\ast=A^\ast\otimes B^\ast
$$

첫 식은 블록 곱셈에서 $(i,k)$ 블록이 $\sum_ja\_{ij}c\_{jk}BD$ 인 것에서 나온다. 따라서 $A$, $B$ 가 가역이면 $(A\otimes B)^{-1}=A^{-1}\otimes B^{-1}$ 이고, $A$, $B$ 가 유니터리이면 $A\otimes B$ 도 유니터리다.

## 행렬 곱의 벡터화

$$
\mathrm{vec}(AXB)=(B^{\mathsf T}\otimes A)\thinspace\mathrm{vec}(X)
$$

$AXB$ 의 $k$ 번째 열은 $\sum_jb\_{jk}Ax_j$ 이고, 이것이 $B^{\mathsf T}\otimes A$ 의 $k$ 번째 블록 행을 $\mathrm{vec}(X)$ 에 곱한 값이다. 직관 절에서 $\mathrm{vec}(AX)=(I\otimes A)\mathrm{vec}(X)$, $\mathrm{vec}(XA)=(A^{\mathsf T}\otimes I)\mathrm{vec}(X)$ 이고 $A$ 가 대칭이라 $M=I\otimes A+A\otimes I$ 다.

## 고윳값

$A$ 가 $m\times m$, $B$ 가 $n\times n$ 이고 고윳값이 각각 $\lambda_1,\dots,\lambda_m$ 과 $\mu_1,\dots,\mu_n$ 이면, 중복도까지 세어

- $A\otimes B$ 의 고윳값은 $\lambda_i\mu_j$ 전부다.
- $A\oplus B$ 의 고윳값은 $\lambda_i+\mu_j$ 전부다.

증명의 요지. [Schur 분해](schur-decomposition.md) $A=QTQ^\ast$, $B=URU^\ast$ 에 곱셈 규칙을 쓰면 $A\otimes B=(Q\otimes U)(T\otimes R)(Q\otimes U)^\ast$ 이고 $Q\otimes U$ 는 유니터리다. $T\otimes R$ 은 위삼각이고 대각성분이 $t\_{ii}r\_{jj}$ 다. $A\oplus B$ 는 같은 닮음으로 $T\otimes I+I\otimes R$ 이 되고 대각성분이 $t\_{ii}+r\_{jj}$ 다.

이로부터 $\det(A\otimes B)=\det(A)^n\det(B)^m$, $\mathrm{tr}(A\otimes B)=\mathrm{tr}(A)\thinspace\mathrm{tr}(B)$ 가 나온다. 특이값도 같은 방법으로 $A$ 와 $B$ 의 특이값의 곱 전부다.

## Sylvester 방정식의 벡터화

행렬 곱의 벡터화로 $AX-XB=C$ 는

$$
(I_n\otimes A-B^{\mathsf T}\otimes I_m)\thinspace\mathrm{vec}(X)=\mathrm{vec}(C)
$$

가 된다. 계수행렬은 Kronecker 합 $(-B^{\mathsf T})\oplus A$ 이므로 고윳값이 $\lambda_i-\mu_j$ 이고, $A$ 와 $B$ 가 공통 고윳값을 갖지 않을 때만 가역이다. [Sylvester 방정식](sylvester-equation.md)의 해의 유일성을 이렇게도 증명한다. 계수행렬이 $mn\times mn$ 이라 이 식으로 직접 풀면 $O(m^3n^3)$ 번의 연산이 들고, Bartels–Stewart 알고리즘은 $O(m^3+n^3)$ 번이다.

# 활용

- 격자 위의 Poisson 방정식. $n\times n$ 격자의 이산 Laplace 작용소는 $A\oplus A$ 이고 $A$ 는 1 차원 이차 차분 행렬이다. $A$ 의 고유벡터가 사인 함수의 표본이므로, 행과 열에 각각 이산 사인 변환을 쓰면 $n^2\times n^2$ 계가 대각이 된다.
- 2 차원 [이산 Fourier 변환](fourier.md). 크기 $n\times n$ 인 배열 $X$ 의 2 차원 변환은 $FXF^{\mathsf T}$ 이고 벡터화하면 $(F\otimes F)\mathrm{vec}(X)$ 다. 행마다 변환하고 열마다 변환하는 계산이 이 분해를 쓴다.
- [양자 회로](quantum-circuits.md). 큐비트 여러 개의 상태 공간은 $\mathbb C^2$ 의 Kronecker 곱이고, 큐비트마다 따로 거는 게이트는 각 게이트의 Kronecker 곱이다. 곱셈 규칙 때문에 따로 건 게이트를 차례로 곱한 결과도 Kronecker 곱이다.
- [Hadamard 행렬](hadamard-matrices.md)의 Sylvester 구성. $H_2=\begin{pmatrix}1&1\cr 1&-1\end{pmatrix}$ 의 Kronecker 거듭제곱 $H\_{2^k}=H_2\otimes\cdots\otimes H_2$ 는 성분이 $\pm 1$ 이고 $H\_{2^k}H\_{2^k}^{\mathsf T}=2^kI$ 다. 곱셈 규칙으로 $H_2H_2^{\mathsf T}=2I$ 에서 바로 나온다.

[^1]: R. A. Horn, C. R. Johnson, *Topics in Matrix Analysis*, Cambridge University Press, 1991. 4 장.

# 연관 문서

## 선수지식

- [Schur 분해](schur-decomposition.md)

## 더 알아보기

- [Hadamard 행렬](hadamard-matrices.md)

#linear_algebra #algorithms #signal_processing
