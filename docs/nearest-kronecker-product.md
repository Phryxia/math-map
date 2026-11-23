# 가장 가까운 Kronecker 곱

# 개요

**가장 가까운 Kronecker 곱(nearest Kronecker product)** 은 주어진 큰 행렬 $A$ 에 Frobenius 노름으로 가장 가까운 꼴 $B\otimes C$ 의 행렬을 찾는 문제다. 정사각형 격자의 이산 Laplace 작용소는 가로 차분과 세로 차분의 합이라 [Kronecker 곱](kronecker-product.md) 두 개의 합이다. 이것을 Kronecker 곱 하나로 근사하면 역행렬과 고윳값을 작은 행렬 둘에서 구할 수 있다. Van Loan 과 Pitsianis 는 $A$ 의 성분을 재배열하면 이 문제가 [특이값 분해](singular-value-decomposition.md)의 가장 큰 특이값 하나를 구하는 문제가 된다는 것을 보였다.

# 직관

$T$ 가 대각 성분 $2$, 비대각 성분 $-1$ 인 $2\times 2$ 행렬이면, $2\times 2$ 격자의 이산 Laplace 작용소는 $A=I\otimes T+T\otimes I$ 다.

$$
A=\begin{pmatrix}4&-1&-1&0\cr -1&4&0&-1\cr -1&0&4&-1\cr 0&-1&-1&4\end{pmatrix}
$$

$A$ 를 $2\times 2$ 블록 네 개로 자르면 블록 $(i,j)$ 는 $\delta\_{ij}T+T\_{ij}I$ 다. 블록마다 성분 네 개를 한 줄로 펴서 쌓은 $4\times 4$ 행렬을 $R(A)$ 라 하면, $B\otimes C$ 는 블록 $(i,j)$ 가 $B\_{ij}C$ 이므로 $R(B\otimes C)=\mathrm{vec}(B)\mathrm{vec}(C)^{\mathsf T}$ 다. 그러므로 $B\otimes C$ 로 $A$ 를 근사하는 것은 $R(A)$ 를 계수 $1$ 인 행렬로 근사하는 것과 같다.

이 $A$ 의 재배열은 다음과 같다.

$$
R(A)=\mathrm{vec}(I)\thinspace\mathrm{vec}(T)^{\mathsf T}+\mathrm{vec}(T)\thinspace\mathrm{vec}(I)^{\mathsf T}
$$

$R(A)$ 는 계수가 $2$ 이고 특이값이 $4+2\sqrt5\approx 8.472$ 와 $2\sqrt5-4\approx 0.472$ 다. 큰 특이값 하나만 남기면 $B=C=0.473(\sqrt5I+T)$ 가 나온다. 대각 성분이 $2.003$, 비대각 성분이 $-0.473$ 이고, 오차의 Frobenius 노름은 작은 특이값 $0.472$ 로 $\Vert A\Vert\_F=\sqrt{72}$ 의 $5.6$ 퍼센트다.

# 정의

$A$ 가 $m\_1m\_2\times n\_1n\_2$ 행렬이고, $m\_2\times n\_2$ 블록 $A\_{ij}$ ($1\le i\le m\_1$, $1\le j\le n\_1$)로 나뉜다. **재배열(rearrangement)** $R(A)$ 는 $\mathrm{vec}(A\_{ij})^{\mathsf T}$ 를 행으로 하여 블록을 열 우선 순서 $A\_{11},A\_{21},\dots,A\_{m\_11},A\_{12},\dots$ 로 쌓은 $m\_1n\_1\times m\_2n\_2$ 행렬이다.

**가장 가까운 Kronecker 곱 문제** 는 다음 최솟값을 이루는 $m\_1\times n\_1$ 행렬 $B$ 와 $m\_2\times n\_2$ 행렬 $C$ 를 찾는 것이다.

$$
\min\_{B,C}\Vert A-B\otimes C\Vert\_F
$$

직관 절은 $m\_1=n\_1=m\_2=n\_2=2$ 인 경우다.

# 성질

## 재배열 등식

정리. 모든 $B$, $C$ 에 대해 다음이 성립한다[^1].

$$
\Vert A-B\otimes C\Vert\_F=\bigl\Vert R(A)-\mathrm{vec}(B)\thinspace\mathrm{vec}(C)^{\mathsf T}\bigr\Vert\_F
$$

증명의 요지. $B\otimes C$ 의 블록 $(i,j)$ 는 $B\_{ij}C$ 이므로 $R(B\otimes C)$ 의 해당 행은 $B\_{ij}\mathrm{vec}(C)^{\mathsf T}$ 이고, $R(B\otimes C)=\mathrm{vec}(B)\mathrm{vec}(C)^{\mathsf T}$ 다. $R$ 은 성분의 자리만 바꾸므로 Frobenius 노름을 보존하고 일차다.

## 특이값 분해로 푸는 해

정리. $R(A)$ 의 가장 큰 특이값이 $\sigma\_1$ 이고 대응하는 왼쪽과 오른쪽 특이벡터가 $u\_1$, $v\_1$ 이면, $\mathrm{vec}(B)=\sqrt{\sigma\_1}u\_1$, $\mathrm{vec}(C)=\sqrt{\sigma\_1}v\_1$ 이 최솟값을 이룬다. 최솟값은 $\bigl(\sum\_{k\ge 2}\sigma\_k^2\bigr)^{1/2}$ 이다[^1].

재배열 등식으로 문제가 계수 $1$ 인 행렬로 $R(A)$ 를 근사하는 문제가 되고, 그 답은 Eckart–Young–Mirsky 정리(Eckart–Young–Mirsky theorem)에 따라 특이값 분해의 첫 항이다. $\sigma\_1$ 과 두 특이벡터만 필요하므로 거듭제곱법이나 [Lanczos 반복](lanczos-iteration.md)으로 구한다.

## 구조의 보존

$A$ 가 대칭이고 $m\_1=n\_1$, $m\_2=n\_2$ 이면 $B$ 와 $C$ 를 대칭으로 고를 수 있다. $A$ 가 양의 정부호이면 $B$ 와 $C$ 를 둘 다 양의 정부호로 고를 수 있다[^1]. 직관 절의 $B=C$ 가 대칭이고 양의 정부호인 예다.

## Kronecker 곱 여럿의 합

$R(A)$ 의 특이값 분해에서 앞의 $r$ 항을 남기면 $A$ 에 가장 가까운 $\sum\_{k=1}^rB\_k\otimes C\_k$ 가 나온다. 직관 절의 $A$ 는 $R(A)$ 의 계수가 $2$ 이므로 두 항으로 정확히 적힌다.

# 활용

- 전처리. 블록 구조가 있는 큰 행렬을 $B\otimes C$ 로 근사하면 $(B\otimes C)^{-1}=B^{-1}\otimes C^{-1}$ 이라 작은 행렬 둘의 역행렬로 전처리를 만든다. 흐린 그림을 되살리는 영상 복원에서 흐림 행렬을 이렇게 근사한다[^2].
- 공분산 추정. 공간과 시간의 공분산이 분리된다고 보는 모형에서 표본 공분산에 가장 가까운 Kronecker 곱을 구한다.
- 신경망의 2차 최적화. 층의 [Fisher 정보](fisher-information.md) 행렬을 입력 공분산과 기울기 공분산의 Kronecker 곱으로 근사해 역행렬을 싸게 구하는 방법이 같은 꼴의 근사를 쓴다.

[^1]: C. F. Van Loan, N. Pitsianis, "Approximation with Kronecker products", in *Linear Algebra for Large Scale and Real-Time Applications*, Kluwer (1993), 293–314.
[^2]: J. Kamm, J. G. Nagy, "Optimal Kronecker product approximation of block Toeplitz matrices", *SIAM Journal on Matrix Analysis and Applications* 22 (2000), 155–172.

# 연관 문서

## 선수지식

- [Kronecker 곱](kronecker-product.md)
- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #statistics
