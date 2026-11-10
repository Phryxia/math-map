# Golub–Kahan 이중대각화

# 개요

**Golub–Kahan 이중대각화(Golub–Kahan bidiagonalization)** 는 직사각행렬의 양쪽에 직교행렬을 곱해 대각과 그 바로 위 대각에만 성분이 남은 행렬로 바꾸는 계산이다. 다음 행렬 $A$ 의 특이값을 구하려고 $A^{\mathsf T}A$ 의 [고윳값](eigenvalues.md)을 계산하면 곱하는 동안 작은 특이값의 자릿수가 사라진다.

$$
A=\begin{pmatrix}1&3&4\cr 0&1&0\cr 0&0&1\end{pmatrix}
$$

이중대각화는 특이값을 바꾸지 않는 직교 변환만으로 $A$ 를 다음처럼 성분이 두 줄뿐인 꼴로 만들고, 특이값 계산은 이 작은 꼴에서 반복한다.

$$
\begin{pmatrix}1&-5&0\cr 0&1&0\cr 0&0&1\end{pmatrix}
$$

# 직관

[특이값 분해](singular-value-decomposition.md)의 특이값은 $U^{\mathsf T}AV$ 꼴의 변환, 곧 왼쪽과 오른쪽에 직교행렬을 곱해도 바뀌지 않는다. 그래서 $A$ 의 0 아닌 성분을 직교 변환으로 최대한 지운 뒤 특이값을 구한다. 지우는 도구는 [Householder 반사](householder-reflection.md)다.

$A$ 의 첫 열은 이미 대각 아래가 $0$ 이다. 첫 행의 대각 오른쪽 $(3,4)$ 는 오른쪽에서 곱하는 반사로 지운다. 둘째와 셋째 좌표에서 Householder 벡터 $v=(8,4)$ 의 반사는 다음과 같다.

$$
H=\begin{pmatrix}-3/5&-4/5\cr -4/5&3/5\end{pmatrix}
$$

이 반사를 열에 곱하면 $(3,4)$ 가 $(-5,0)$ 이 된다. 첫 열은 이 반사에 걸리지 않으므로 그 열의 $0$ 은 그대로다.

$$
A\begin{pmatrix}1&0\cr 0&H\end{pmatrix}=\begin{pmatrix}1&-5&0\cr 0&-3/5&-4/5\cr 0&-4/5&3/5\end{pmatrix}
$$

둘째 열의 대각 아래 $-4/5$ 를 왼쪽에서 곱하는 반사로 지운다. $(-3/5,-4/5)$ 를 $(1,0)$ 으로 보내는 반사의 Householder 벡터는 $(2,1)$ 방향이고, 같은 반사가 셋째 열의 $(-4/5,3/5)$ 를 $(0,1)$ 로 보낸다. 결과는 대각 $1,1,1$ 과 그 위 대각 $-5,0$ 만 남은 행렬이다. 두 행렬의 성분 제곱합은 모두 $28$ 이다.

# 정의

$m\times n$ 행렬 $B$ ($m\ge n$) 가 $i\ne j$ 이고 $j\ne i+1$ 인 모든 성분이 $0$ 이면 $B$ 를 **위 이중대각행렬(upper bidiagonal matrix)** 이라 한다. 대각 성분을 $d_1,\dots,d_n$, 위 대각 성분을 $f_1,\dots,f_{n-1}$ 로 쓴다. 직관 절의 결과는 $d=(1,1,1)$, $f=(-5,0)$ 이다.

$m\times n$ 실행렬 $A$ ($m\ge n$) 를 직교행렬 $U$ ($m\times m$), $V$ ($n\times n$) 와 위 이중대각행렬 $B$ 로

$$
A=UBV^{\mathsf T}
$$

로 쓰는 것을 $A$ 의 이중대각화라 한다. Golub–Kahan 이중대각화는 $U$ 와 $V$ 를 Householder 반사의 곱으로 만드는 다음 절차다[^1].

```javascript
// k = 1..n. 왼쪽 반사로 k 열의 대각 아래를, 오른쪽 반사로 k 행의 위 대각 오른쪽을 지운다
for (let k = 1; k <= n; k++) {
  const L = householder(column(A, k, k, m));       // A[k..m][k] 를 (±‖·‖, 0, ..., 0) 으로
  applyLeft(A, L, k, m, k, n);                      // A[k..m][k..n] ← L A[k..m][k..n]
  if (k <= n - 2) {
    const R = householder(row(A, k, k + 1, n));    // A[k][k+1..n] 을 (±‖·‖, 0, ..., 0) 으로
    applyRight(A, R, k, m, k + 1, n);               // A[k..m][k+1..n] ← A[k..m][k+1..n] R
  }
}
```

오른쪽 반사는 $k+1$ 열부터만 섞는다. $k$ 열을 섞지 않으므로 직전의 왼쪽 반사가 $k$ 열에 만든 $0$ 이 그대로 남는다.

# 성질

## 존재와 연산량

모든 $m\times n$ 실행렬 ($m\ge n$) 은 이중대각화를 갖는다. 위 절차가 왼쪽 반사 $n$ 개와 오른쪽 반사 $n-2$ 개로 $B$ 를 만들기 때문이다. 연산량은 $U$, $V$ 를 행렬로 만들지 않을 때 약 $4mn^2-\frac43 n^3$ 번이다[^1].

$m$ 이 $n$ 보다 훨씬 크면 먼저 [행렬 분해](matrix-factorizations.md)의 QR 분해(orthogonal-triangular decomposition) $A=QR$ 을 하고 $n\times n$ 의 $R$ 을 이중대각화한다. 연산량은 약 $2mn^2+2n^3$ 번이고 $m\gt\frac53 n$ 이면 이쪽이 적다[^2].

## 특이값의 보존

$A=UBV^{\mathsf T}$ 이면 $A^{\mathsf T}A=VB^{\mathsf T}BV^{\mathsf T}$ 이므로 $A$ 와 $B$ 의 특이값이 같다. 직관 절의 $B$ 는 $1$ 과 $2\times 2$ 블록 $\begin{pmatrix}1&-5\cr 0&1\end{pmatrix}$ 로 나뉜다. 블록의 $B^{\mathsf T}B$ 는 대각합 $27$, [행렬식](determinants.md) $1$ 이므로 특이값의 제곱이 $(27\pm\sqrt{725})/2$ 이고, 특이값은 약 $5.193$, $1$, $0.193$ 이다. $0.193$ 은 $1/5.193$ 이다.

## 대각까지 가지 않는 계산

$B$ 를 직교 변환 유한 번으로 대각행렬로 만들 수는 없다. 대각행렬이 되면 대각 성분이 특이값이고, 특이값의 제곱은 $n$ 차 다항식 $\det(B^{\mathsf T}B-tI)$ 의 근이라 일반적으로 사칙연산과 거듭제곱근의 유한 번 조합으로 쓰이지 않는다. 그래서 특이값은 $B$ 에서 시작하는 반복으로 구하고, 이중대각 꼴은 그 반복이 유지하는 꼴이다.

## 삼중대각행렬과의 관계

$B^{\mathsf T}B$ 는 대칭 삼중대각행렬이다. 또 $\begin{pmatrix}0&B\cr B^{\mathsf T}&0\end{pmatrix}$ 의 행과 열을 $1,n+1,2,n+2,\dots$ 순으로 재배열하면 대각이 $0$ 이고 바로 아래 위 대각이 $d_1,f_1,d_2,f_2,\dots,d_n$ 인 삼중대각행렬이 되고, 그 고윳값은 $\pm\sigma_k$ 다. 이중대각행렬의 특이값 문제는 크기 $2n$ 의 대칭 삼중대각 고윳값 문제와 같다.

## 높은 상대 정확도

이중대각행렬의 특이값은 $d_i$, $f_i$ 의 작은 상대 오차에 대해 상대적으로 조금만 움직인다. 각 성분이 $1+\eta$ 배 안에서 바뀌면 각 특이값도 약 $1+(2n-1)\eta$ 배 안에서 바뀐다[^3]. 그래서 이중대각 꼴에서 시작한 반복은 $0.193$ 같은 작은 특이값도 상대 오차 기계 정밀도 규모로 계산한다. $A^{\mathsf T}A$ 를 만들면 그 오차가 $\sigma_1^2$ 규모의 절대 오차가 되어, $\sigma_n$ 이 $\sigma_1$ 의 $10^{-8}$ 배보다 작으면 배정밀도에서 자릿수가 남지 않는다.

## Lanczos 이중대각화

$U$ 와 $V$ 의 첫 열들을 차례로 정하는 점화식으로도 이중대각행렬을 얻는다. $\beta_1u_1=b$ 에서 시작해

$$
\alpha_kv_k=A^{\mathsf T}u_k-\beta_kv_{k-1},\qquad \beta_{k+1}u_{k+1}=Av_k-\alpha_ku_k
$$

로 두고 $\alpha_k$, $\beta_{k+1}$ 은 각 벡터의 길이를 $1$ 로 맞추는 양수로 잡는다[^1]. 이 절차는 $A$ 와 $A^{\mathsf T}$ 를 벡터에 곱하는 계산만 쓰므로 큰 희소 행렬(sparse matrix)에 쓴다. 생성하는 $u_k$ 와 $v_k$ 는 $AA^{\mathsf T}$ 와 $A^{\mathsf T}A$ 의 [Krylov 부분공간](krylov-subspace-methods.md)의 정규직교기저이고, $\alpha$ 와 $\beta$ 가 이중대각행렬의 성분이다.

# 활용

- 특이값 분해의 계산. 조밀한 행렬은 Householder 이중대각화 뒤 $B$ 에 이동 [QR 알고리즘](qr-algorithm.md)의 이중대각 판본(Golub–Kahan 단계)이나 dqds 알고리즘(differential quotient-difference algorithm with shifts)을 써서 특이값을 구한다. 수치 선형대수 라이브러리의 표준 특이값 분해 루틴이 이 순서다.
- 최소제곱 문제(least squares problem). [LSQR](lsqr.md)(least squares QR)은 Lanczos 이중대각화로 만든 $B_k$ 에서 $\min\Vert\beta_1e_1-B_ky\Vert$ 를 [Givens 회전](givens-rotation.md)으로 갱신하며 풀어 $\Vert Ax-b\Vert$ 를 최소화한다[^4].
- 큰 희소 행렬의 큰 특이값 몇 개. Lanczos 이중대각화를 $k$ 단계 돌린 $B_k$ 의 특이값이 $A$ 의 큰 특이값을 근사한다. [주성분 분석](principal-component-analysis.md)과 [행렬 완성](matrix-completion.md)의 절단 특이값 분해가 이 계산을 쓴다.
- 계수 판정과 의사역행렬. $B$ 에서 구한 특이값 가운데 기계 정밀도 규모보다 작은 것을 $0$ 으로 보아 수치적 계수를 정하고, 나머지의 역수로 의사역행렬을 만든다.

[^1]: G. Golub and W. Kahan, "Calculating the singular values and pseudo-inverse of a matrix", *Journal of the Society for Industrial and Applied Mathematics, Series B: Numerical Analysis* 2 (1965), 205–224. 연산량은 Gene H. Golub and Charles F. Van Loan, *Matrix Computations*, 4th ed., Johns Hopkins University Press (2013), §5.4 와 §8.6.

[^2]: Tony F. Chan, "An improved algorithm for computing the singular value decomposition", *ACM Transactions on Mathematical Software* 8 (1982), 72–83.

[^3]: James Demmel and W. Kahan, "Accurate singular values of bidiagonal matrices", *SIAM Journal on Scientific and Statistical Computing* 11 (1990), 873–912.

[^4]: Christopher C. Paige and Michael A. Saunders, "LSQR: an algorithm for sparse linear equations and sparse least squares", *ACM Transactions on Mathematical Software* 8 (1982), 43–71.

# 연관 문서

## 선수지식

- [Householder 반사](householder-reflection.md)
- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

- [LSQR](lsqr.md)

#linear_algebra #algorithms #computation
