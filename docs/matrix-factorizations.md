# 행렬 분해

# 개요

**행렬 분해(matrix factorization)** 는 [행렬](matrices.md)을 다루기 쉬운 행렬 몇 개의 곱으로 쓰는 것이다. 같은 계수의 연립일차방정식을 오른쪽 값만 바꿔 천 번 풀어야 한다면, 매번 소거를 처음부터 하면 같은 계산을 천 번 되풀이한다. 소거 과정을 한 번 기록해 두면 계수행렬이 아래삼각행렬과 위삼각행렬의 곱으로 적히고, 삼각행렬의 방정식은 위에서부터 하나씩 대입해 바로 풀린다. 행렬 분해는 이렇게 계산을 한 번만 하고 다시 쓰며, 목적에 따라 삼각, 직교, 대각 행렬로 쪼갠다.

# 직관

$Ax = b$ 를 [Gauss 소거법](gaussian-elimination.md)으로 풀면 $A$ 를 위삼각 꼴로 만든 뒤 뒤에서부터 대입한다. $n\times n$ 행렬에서 소거는 곱셈이 약 $n^3/3$ 번 들고 대입은 약 $n^2$ 번 든다. 우변 $b$ 만 바꿔 천 번 풀면 소거도 천 번 한다.

$$
A = \begin{pmatrix}2&1\cr 4&5\end{pmatrix}
$$

에서 둘째 행에서 첫째 행의 $2$ 배를 빼면 $U = \begin{pmatrix}2&1\cr 0&3\end{pmatrix}$ 이 된다. 이 한 단계는 $A$ 의 왼쪽에 $\begin{pmatrix}1&0\cr -2&1\end{pmatrix}$ 을 곱하는 것과 같다. 그 역행렬 $L = \begin{pmatrix}1&0\cr 2&1\end{pmatrix}$ 을 양변에 곱하면 $A = LU$ 이고, 소거에서 쓴 계수 $2$ 가 $L$ 의 그 자리에 그대로 적힌다.

$b = (3, 9)$ 이면 $Ly = b$ 를 위에서부터 풀어 $y_1 = 3$, $y_2 = 9 - 2\cdot 3 = 3$ 을 얻고, $Ux = y$ 를 아래에서부터 풀어 $x_2 = 1$, $x_1 = (3-1)/2 = 1$ 을 얻는다. 우변이 바뀌어도 $L$ 과 $U$ 는 그대로이므로 이 두 번의 대입만 다시 한다. 대입은 $n^2$ 번의 연산으로 끝난다.

# 정의

## 삼각행렬

**아래삼각행렬(lower triangular matrix)** 은 주대각선 위의 성분이 모두 $0$ 인 정사각행렬이고, **위삼각행렬(upper triangular matrix)** 은 주대각선 아래의 성분이 모두 $0$ 인 정사각행렬이다. 직관 절의 $L$ 은 아래삼각행렬이고 $U$ 는 위삼각행렬이다.

## LU 분해

**LU 분해(lower–upper decomposition)** 는 정사각행렬 $A$ 를 $A = LU$ 로 쓰는 것이다. 여기서 $L$ 은 대각성분이 모두 $1$ 인 아래삼각행렬이고 $U$ 는 위삼각행렬이다. 직관 절의 $A = \begin{pmatrix}2&1\cr 4&5\end{pmatrix}$ 에서는 $L = \begin{pmatrix}1&0\cr 2&1\end{pmatrix}$, $U = \begin{pmatrix}2&1\cr 0&3\end{pmatrix}$ 이다.

LU 분해가 없는 행렬도 있다. $B = \begin{pmatrix}0&1\cr 1&1\end{pmatrix}$ 이 $LU$ 이면 $(1,1)$ 성분에서 $u_{11} = 0$ 이고, $(2,1)$ 성분이 $l_{21}u_{11} = 0$ 이 되어 $1$ 과 맞지 않는다.

## 치환행렬과 부분 피벗팅

**치환행렬(permutation matrix)** 은 항등행렬의 행 순서를 바꾼 행렬이다. 왼쪽에 곱하면 행의 순서가 같은 방식으로 바뀐다. 위의 $B$ 에 $P = \begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 을 곱하면 $PB = \begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 이 이미 위삼각행렬이므로 $L = I$ 다.

행 교환을 허용한 분해

$$
PA = LU
$$

를 **피벗팅을 쓴 LU 분해(LU decomposition with pivoting)** 라 한다. 소거의 각 단계에서 그 열의 남은 성분 가운데 절댓값이 가장 큰 것이 있는 행을 맨 위로 올리는 규칙을 **부분 피벗팅(partial pivoting)** 이라 한다. 직관 절의 $A$ 는 첫 열이 $2, 4$ 이므로 부분 피벗팅이 두 행을 먼저 바꾼다. 그러면 $PA = \begin{pmatrix}4&5\cr 2&1\end{pmatrix}$ 에서 둘째 행에서 첫째 행의 $1/2$ 배를 빼 $U = \begin{pmatrix}4&5\cr 0&-3/2\end{pmatrix}$, $L = \begin{pmatrix}1&0\cr 1/2&1\end{pmatrix}$ 을 얻는다.

## Cholesky 분해

**양의 정부호(positive definite)** 행렬은 $0$ 이 아닌 모든 벡터 $x$ 에 대해 $x^{\top}Ax \gt 0$ 인 대칭행렬이다. **Cholesky 분해(Cholesky decomposition)** 는 양의 정부호 행렬 $A$ 를 대각성분이 양수인 아래삼각행렬 $L$ 로

$$
A = LL^{\top}
$$

꼴로 쓰는 것이다. $C = \begin{pmatrix}4&2\cr 2&5\end{pmatrix}$ 는 $x^{\top}Cx = (2x_1 + x_2)^2 + 4x_2^2$ 이므로 양의 정부호이고, $L = \begin{pmatrix}2&0\cr 1&2\end{pmatrix}$ 로 $LL^{\top} = C$ 다.

## QR 분해

벡터들이 **정규직교(orthonormal)** 라는 것은 각각의 길이가 $1$ 이고 서로의 [내적](inner-product-spaces.md)이 $0$ 이라는 것이다. **QR 분해(orthogonal-triangular decomposition)** 는 $m \times n$ 행렬 $A$ 를 $A = QR$ 로 쓰는 것이다. 여기서 $Q$ 는 열이 정규직교인 $m\times n$ 행렬이고 $R$ 은 $n\times n$ 위삼각행렬이다.

$$
\begin{pmatrix}3&0\cr 4&5\end{pmatrix} = \frac{1}{5}\begin{pmatrix}3&-4\cr 4&3\end{pmatrix}\begin{pmatrix}5&4\cr 0&3\end{pmatrix}
$$

에서 $Q$ 의 두 열 $(3,4)/5$ 와 $(-4,3)/5$ 는 길이가 $1$ 이고 내적이 $-12/25 + 12/25 = 0$ 이다.

## 조건수

가역행렬 $A$ 의 **조건수(condition number)** 는 [작용소 노름](banach-spaces.md)으로 다음과 같이 정의한다.

$$
\kappa(A) = \lVert A\rVert\thinspace\lVert A^{-1}\rVert
$$

$D = \begin{pmatrix}1&0\cr 0&1/100\end{pmatrix}$ 은 2 노름에서 $\lVert D\rVert = 1$, $\lVert D^{-1}\rVert = 100$ 이므로 $\kappa(D) = 100$ 이다.

# 성질

## 분해의 존재와 유일성

**정리.** $A$ 의 모든 선행 주소행렬식(leading principal minor)이 $0$ 이 아니면 $A = LU$ 가 존재하고 유일하다.[^1]

소거의 각 단계는 한 행의 배수를 다른 행에서 빼는 것이고, 대각성분이 $1$ 인 아래삼각행렬을 왼쪽에서 곱하는 것과 같다. 선행 주소행렬식이 $0$ 이 아니면 행 교환 없이 소거가 끝나고, 그 행렬들의 곱 $M$ 으로 $MA = U$ 가 위삼각이 된다. $L = M^{-1}$ 도 대각성분이 $1$ 인 아래삼각행렬이므로 $A = LU$ 다. 유일성은 $L_1U_1 = L_2U_2$ 에서 $L_2^{-1}L_1 = U_2U_1^{-1}$ 이 아래삼각이면서 위삼각이므로 대각행렬이고, 대각성분이 $1$ 이므로 항등행렬인 것에서 나온다. ∎

행 교환을 허용하면 조건이 필요 없다. 가역행렬에는 $PA = LU$ 가 항상 존재한다.

**정리.** 대칭행렬 $A$ 가 양의 정부호인 것과 Cholesky 분해가 존재하는 것이 동치다.

한쪽은 $A = LL^{\top}$ 에서 $x^{\top}Ax = \lVert L^{\top}x\rVert^2 \gt 0$ 이 나오는 것이고, 다른 쪽은 소거를 진행하며 각 단계의 주대각 성분이 양수임을 보이는 것이다. Cholesky 분해의 연산량은 약 $n^3/6$ 으로 LU 분해의 절반이다.

## QR 분해의 구성

열이 일차독립인 $A$ 에는 QR 분해가 존재한다. Gram–Schmidt 직교화(Gram–Schmidt process), Householder 반사(Householder reflection), Givens 회전(Givens rotation)이 구성 방법이다. 위 예의 $Q$ 는 Gram–Schmidt 직교화로 얻는다. 첫 열 $(3,4)$ 를 길이 $5$ 로 나누고, 둘째 열 $(0,5)$ 에서 첫 방향 성분 $4$ 를 뺀 $(-12/5, 9/5)$ 를 길이 $3$ 으로 나눈다. 나눈 길이와 뺀 성분이 $R$ 의 성분 $5, 3, 4$ 다.

## 조건수와 특이값

2 노름에서 $\kappa_2(A)$ 는 [특이값 분해](singular-value-decomposition.md)의 최대 특이값을 최소 특이값으로 나눈 값이다. 그래서 $\kappa(A) \ge 1$ 이고, 직교행렬의 조건수는 $1$ 이다.

## 오차의 증폭

**정리.** $Ax = b$ 의 우변을 $b + \delta b$ 로 흔들면 해의 상대오차가 다음을 넘지 않는다.

$$
\frac{\lVert \delta x\rVert}{\lVert x\rVert} \thinspace\le\thinspace \kappa(A)\thinspace\frac{\lVert \delta b\rVert}{\lVert b\rVert}
$$

$A\delta x = \delta b$ 에서 $\lVert \delta x\rVert \le \lVert A^{-1}\rVert \lVert \delta b\rVert$ 이고, $\lVert b\rVert \le \lVert A\rVert \lVert x\rVert$ 를 함께 쓰면 나온다. ∎

조건수가 크면 입력의 작은 오차가 해에서 크게 벌어진다. 위의 $D$ 에서 $b = (1, 0)$ 이면 해는 $x = (1, 0)$ 이다. 우변을 $\delta b = (0, 1/100)$ 만큼 흔들면 해가 $\delta x = (0, 1)$ 만큼 움직여, 상대오차 $1/100$ 이 $1$ 로 커진다. 배율 $100$ 이 $\kappa(D)$ 와 같다.

Hilbert 행렬(Hilbert matrix)은 크기 $n$ 에서 조건수가 지수적으로 커지는 예다.

## 수치적 안정성

부분 피벗팅을 쓴 LU 분해는 대부분의 행렬에서 안정적이지만 증폭인자(growth factor)가 $2^{n-1}$ 까지 커지는 행렬이 있다. Cholesky 분해는 피벗팅 없이도 안정적이고, 증폭인자가 $1$ 로 묶인다.

QR 분해는 직교행렬이 2 노름을 보존하므로 오차를 키우지 않는다. Householder 반사로 구성한 QR 분해가 Gram–Schmidt 보다 안정적이다. Gram–Schmidt 는 벡터를 차례로 빼면서 직교성을 잃는다.

# 활용

- [선형회귀](linear-regression.md)의 정규방정식(normal equation) $X^{\top}X\hat\beta = X^{\top}y$ 를 푸는 데 Cholesky 분해를 쓴다. 조건수가 제곱되는 것을 피하려면 정규방정식 대신 $X$ 의 QR 분해를 직접 쓴다.
- [행렬식](determinants.md)은 LU 분해에서 $U$ 의 대각성분의 곱과 치환의 부호를 곱해 얻는다. 여인수 전개보다 연산량이 훨씬 적다.
- [Gauss 과정](gaussian-processes.md)의 로그 가능도(log-likelihood) 계산에서 [공분산](covariance.md)행렬의 Cholesky 분해가 역행렬과 행렬식을 한 번에 준다.
- QR 알고리즘(QR algorithm)이 고윳값 계산의 표준 방법이다. $A_k = Q_kR_k$ 로 분해하고 $A_{k+1} = R_kQ_k$ 로 두는 반복으로 [고윳값](eigenvalues.md)이 대각선에 모인다.
- 내부점 방법(interior point method)이 매 반복에서 양의 정부호 계를 풀므로 Cholesky 분해가 [최적화](optimization-overview.md) 문제를 푸는 비용을 지배한다.

[^1]: Gene H. Golub and Charles F. Van Loan, *Matrix Computations*, 4th ed., Johns Hopkins University Press (2013), Ch. 3–5. LU, Cholesky, QR 분해의 존재 조건과 안정성 분석이 이 장들의 내용이다.

# 연관 문서

## 선수지식

- [Gauss 소거법](gaussian-elimination.md)

## 더 알아보기

- [삼중대각계](tridiagonal-systems.md)
- [Schur 보수](schur-complement.md)
- [Krylov 부분공간 방법](krylov-subspace-methods.md)

#linear_algebra #algorithms #optimization
