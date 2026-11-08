# QR 알고리즘

# 개요

**QR 알고리즘(QR algorithm)** 은 행렬을 직교행렬과 위삼각행렬의 곱으로 분해한 뒤 두 인수를 바꿔 곱하는 일을 되풀이해, 행렬을 고윳값이 대각선에 놓인 삼각행렬로 다가가게 하는 반복법이다. 고윳값은 특성다항식의 근이지만 $5$ 차 이상의 다항식은 근의 공식이 없고, 계수에서 근을 구하는 계산은 계수의 작은 반올림 오차에도 근이 크게 움직인다. QR 알고리즘은 다항식을 거치지 않고 직교행렬로 닮음 변환만 거듭하므로 고윳값이 바뀌지 않고 오차도 커지지 않는다.

# 직관

$A_0=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 의 [고윳값](eigenvalues.md)은 $3$ 과 $1$ 이다. 열 $(2,1)$, $(1,2)$ 를 Gram–Schmidt 과정(Gram–Schmidt process)으로 정규직교화하면 $A_0=Q_0R_0$ 이다.

$$
Q_0=\frac1{\sqrt5}\begin{pmatrix}2&-1\cr 1&2\end{pmatrix},\qquad R_0=\frac1{\sqrt5}\begin{pmatrix}5&4\cr 0&3\end{pmatrix}
$$

순서를 바꿔 곱하면 $A_1=R_0Q_0=\begin{pmatrix}14/5&3/5\cr 3/5&6/5\end{pmatrix}$ 이다. $R_0=Q_0^{\mathsf T}A_0$ 이므로 $A_1=Q_0^{\mathsf T}A_0Q_0$ 이고, 고윳값이 $A_0$ 와 같다. 대각합 $4$ 와 행렬식 $3$ 이 그대로다.

한 번 더 하면 $A_2=\begin{pmatrix}122/41&9/41\cr 9/41&42/41\end{pmatrix}$ 이다. 대각성분이 $2.8,1.2$ 에서 $2.976,1.024$ 로 $3,1$ 에 다가가고, 비대각성분이 $3/5=0.6$ 에서 $9/41\approx 0.22$ 로 약 $1/3$ 배가 된다. $1/3$ 은 두 고윳값의 비다. 왼쪽 위 성분 $14/5$, $122/41$ 은 [거듭제곱법](power-iteration.md)을 $(1,0)$ 에서 시작했을 때의 고윳값 근사와 같다.

# 정의

## QR 반복

$A_0=A$ 에서 $k=0,1,2,\dots$ 마다 [행렬 분해](matrix-factorizations.md)의 QR 분해 $A_k=Q_kR_k$ 를 구하고 $A_{k+1}=R_kQ_k$ 로 두는 반복을 QR 알고리즘이라 한다. $R_k$ 의 대각성분은 양수로 정한다. 직관 절의 $A_1$, $A_2$ 가 이 반복의 처음 두 행렬이다.

## 이동 QR 반복

수 $\mu_k$ 를 골라 $A_k-\mu_kI=Q_kR_k$ 로 분해하고 $A_{k+1}=R_kQ_k+\mu_kI$ 로 두는 반복을 **이동 QR 반복(shifted QR iteration)** 이라 하고, $\mu_k$ 를 이동(shift)이라 한다. $A_{k+1}=Q_k^{\mathsf T}A_kQ_k$ 는 그대로 성립한다. 직관 절의 $A_1$ 에 $\mu_1=6/5$ 를 쓰면 $A_1-\mu_1I=\begin{pmatrix}8/5&3/5\cr 3/5&0\end{pmatrix}$ 이다.

# 성질

## 닮음과 부분공간 반복

$\bar Q_k=Q_0Q_1\cdots Q_{k-1}$, $\bar R_k=R_{k-1}\cdots R_0$ 로 두면 다음이 성립한다[^1].

$$
A_k=\bar Q_k^{\mathsf T}A\bar Q_k,\qquad A^k=\bar Q_k\bar R_k
$$

둘째 식은 $A^k$ 의 QR 분해다. $\bar Q_k$ 의 처음 $p$ 열은 $A^k$ 의 처음 $p$ 열을 정규직교화한 것이므로, 거듭제곱법의 부분공간 반복을 $X_0=I$ 에서 시작한 것과 같다. 첫 열이 거듭제곱법의 벡터 $A^ke_1/\Vert A^ke_1\Vert$ 이고, $A_k$ 의 왼쪽 위 성분이 그 벡터의 [Rayleigh 몫](rayleigh-quotient.md)이다.

## 수렴

$A$ 의 고윳값이 $\vert\lambda_1\vert\gt\vert\lambda_2\vert\gt\dots\gt\vert\lambda_n\vert$ 이고 고유벡터에 대한 일반성 조건이 성립하면, $A_k$ 의 대각 아래 성분 $(i+1,i)$ 는 $\vert\lambda_{i+1}/\lambda_i\vert^k$ 의 속도로 $0$ 으로 가고 대각성분은 $\lambda_i$ 로 간다[^1]. 극한의 위삼각행렬이 $A$ 의 [Schur 분해](schur-decomposition.md)가 주는 Schur 형이다. $A$ 가 대칭이면 $A_k$ 도 대칭이라 극한은 대각행렬이다.

## Hessenberg 축소

대각 아래 둘째 줄부터 성분이 $0$ 인 행렬을 위 Hessenberg 행렬(upper Hessenberg matrix)이라 한다. [Householder 반사](householder-reflection.md)를 양쪽에 곱하는 직교 닮음 변환으로 $A$ 를 이 꼴로 바꾸는 데 연산이 $O(n^3)$ 번 들고, Hessenberg 행렬의 QR 반복은 Hessenberg 꼴을 유지하며 한 번에 $O(n^2)$ 번 든다. 대칭행렬은 [삼중대각계](tridiagonal-systems.md)의 삼중대각 꼴이 되고 한 번에 $O(n)$ 번 든다. 그래서 실제 계산은 먼저 Hessenberg 꼴로 바꾸고 QR 반복을 시작한다[^1].

## 이동과 수렴 속도

이동을 쓰면 마지막 대각 아래 성분 $(n,n-1)$ 의 수렴률이 $\vert(\lambda_n-\mu)/(\lambda_{n-1}-\mu)\vert$ 가 된다. $\mu_k$ 를 마지막 대각성분 $(A_k)\_{nn}$ 으로 잡는 Rayleigh 몫 이동은 $\mu_k$ 가 $\lambda_n$ 에 가까울수록 수렴률이 작아져, 대칭행렬에서 그 성분이 한 번에 세제곱으로 줄어든다[^1]. 그 성분이 충분히 작아지면 $0$ 으로 두고 남은 $(n-1)\times(n-1)$ 행렬로 넘어간다. 이것을 수축(deflation)이라 한다.

직관 절의 $A_1$ 에 $\mu_1=6/5$ 를 쓰면 다음 행렬의 비대각성분은 $3/5\cdot(3/5)^2/((8/5)^2+(3/5)^2)\approx 0.074$ 다. 이동 없이 얻은 $0.22$ 보다 작다.

대칭 삼중대각 행렬에서는 마지막 $2\times 2$ 블록의 고윳값 가운데 $(A_k)\_{nn}$ 에 가까운 것을 쓰는 Wilkinson 이동(Wilkinson shift)이 모든 경우의 수렴을 보장한다. 실행렬이 복소 고윳값을 가지면 켤레 이동 두 개를 실수 연산으로 한꺼번에 쓰는 Francis 이중 이동(Francis double shift)으로 $2\times 2$ 블록이 대각에 놓인 실 Schur 형을 얻는다[^1].

# 활용

- 조밀한 행렬의 고윳값 계산. Hessenberg 축소와 이동 QR 반복이 수치 선형대수 라이브러리의 표준 고윳값 루틴이다.
- 다항식의 근. 다항식 $t^n+c_{n-1}t^{n-1}+\dots+c_0$ 의 동반행렬(companion matrix)은 고윳값이 그 다항식의 근이므로, QR 알고리즘으로 근을 모두 구한다.
- [특이값 분해](singular-value-decomposition.md)의 계산. 행렬을 직교 변환으로 이중대각 꼴로 바꾸고 $A^{\mathsf T}A$ 를 만들지 않는 QR 반복의 판본으로 특이값을 구한다.
- [Krylov 부분공간 방법](krylov-subspace-methods.md)의 Ritz 값. [Lanczos 반복](lanczos-iteration.md)이나 Arnoldi 반복이 만든 작은 삼중대각 또는 Hessenberg 행렬의 고윳값을 이 알고리즘으로 구한다.

[^1]: Lloyd N. Trefethen, David Bau III, *Numerical Linear Algebra*, SIAM, 1997, 26 강부터 29 강. Hessenberg 축소, 이동 없는 QR 알고리즘과 부분공간 반복, Rayleigh 몫 이동과 Wilkinson 이동이 있다.

# 연관 문서

## 선수지식

- [거듭제곱법](power-iteration.md)
- [행렬 분해](matrix-factorizations.md)
- [Schur 분해](schur-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation
