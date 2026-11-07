# 가제어성

# 개요

**가제어성(controllability)** 은 입력을 골라 계의 상태를 원하는 어느 상태로든 옮길 수 있는 성질이다. 직선 위의 수레를 밀어 움직일 때 미는 힘이 속도를 바꾸면, 몇 번 밀어 원하는 위치에 원하는 속도로 세울 수 있다. 상태의 변화를 행렬로 적고 그 행렬과 입력 방향으로 만든 행렬 하나의 계수(rank)를 보면 이것이 가능한지 판정된다.

# 직관

수레의 위치를 $p$, 속도를 $v$ 라 하고 1초마다 한 번 민다. 1초 동안 위치는 속도만큼 늘고, 미는 힘 $u$ 는 속도를 $u$ 만큼 바꾼다. 상태 $x=(p,v)$ 로 쓰면 다음과 같다.

$$
x\_{k+1}=\begin{pmatrix}1&1\cr 0&1\end{pmatrix}x_k+\begin{pmatrix}0\cr 1\end{pmatrix}u_k
$$

정지한 수레 $x_0=(0,0)$ 를 2초 뒤 위치 $1$ 에 세우려 한다. 첫 힘 $u_0$ 뒤 상태는 $(0,u_0)$ 이고, 둘째 힘 $u_1$ 뒤 상태는 $(u_0,u_0+u_1)$ 이다. $u_0=1$, $u_1=-1$ 로 밀면 $(1,0)$ 에 선다. 같은 방법으로 $(u_0,u_0+u_1)$ 은 평면의 어느 점이든 될 수 있다.

힘이 속도 대신 위치를 직접 바꾼다고 하자. 입력 방향이 $(1,0)$ 이 되고, 속도는 입력과 상관없이 처음 값 그대로다. 정지한 수레는 어떻게 밀어도 속도 $1$ 인 상태가 되지 않는다.

# 정의

## 선형 이산시간계

$A$ 는 $n\times n$ [행렬](matrices.md), $B$ 는 $n\times p$ 행렬이고 상태 $x_k\in\mathbb R^n$ 이 입력 $u_k\in\mathbb R^p$ 로 다음을 따른다.

$$
x\_{k+1}=Ax_k+Bu_k
$$

모든 $x_0$ 와 $x^\ast$ 에 대해 어떤 $T$ 와 입력 $u_0,\dots,u\_{T-1}$ 이 존재해 $x_T=x^\ast$ 이면, 이 계 또는 쌍 $(A,B)$ 를 **가제어(controllable)** 라 한다. 직관 절의 첫 수레는 가제어이고 둘째 수레는 가제어가 아니다.

## 가제어성 행렬

$n\times np$ 행렬

$$
\mathcal C=\begin{pmatrix}B&AB&A^2B&\cdots&A^{n-1}B\end{pmatrix}
$$

를 **가제어성 행렬(controllability matrix)** 이라 한다. 첫 수레는 $B=(0,1)^{\mathsf T}$, $AB=(1,1)^{\mathsf T}$ 이므로 $\mathcal C=\begin{pmatrix}0&1\cr 1&1\end{pmatrix}$ 이다. 둘째 수레는 $B=AB=(1,0)^{\mathsf T}$ 이다.

## 가관측성

입력이 $0$ 이고 출력 $y_k=Cx_k$ 만 볼 수 있을 때, $y_0,\dots,y\_{n-1}$ 이 $x_0$ 을 하나로 정하면 쌍 $(A,C)$ 를 **가관측(observable)** 이라 한다. 직관 절의 수레에서 위치만 재면 연속한 두 위치의 차이로 속도가 나오므로 가관측이고, 속도만 재면 위치를 알 수 없으므로 가관측이 아니다.

# 성질

## Kalman 계수 조건

$(A,B)$ 가 가제어인 것과 $\mathrm{rank}\thinspace\mathcal C=n$ 인 것은 동치다.[^1]

증명의 요지. $x_0=0$ 에서 $T$ 걸음 뒤의 상태는

$$
x_T=A^{T-1}Bu_0+A^{T-2}Bu_1+\cdots+Bu\_{T-1}
$$

이므로 도달할 수 있는 상태의 집합은 $B,AB,\dots,A^{T-1}B$ 의 열들이 생성하는 부분공간이다. [최소다항식](minimal-polynomial.md) 문서의 Cayley–Hamilton 정리(Cayley–Hamilton theorem)에 따라 $A^n$ 은 $I,A,\dots,A^{n-1}$ 의 일차결합이므로, $T\ge n$ 이어도 이 부분공간은 $\mathcal C$ 의 열공간보다 커지지 않는다. 일반의 $x_0$ 은 $x^\ast-A^Tx_0$ 에 도달하는 문제로 바뀐다. 첫 수레의 $\mathcal C$ 는 행렬식이 $-1$ 이라 계수가 $2$ 이고, 둘째 수레는 계수가 $1$ 이다.

## 최소 에너지 입력

가제어이면 $x_0=0$ 에서 $n$ 걸음에 $x^\ast$ 로 가는 입력 가운데 $\sum_k\Vert u_k\Vert^2$ 이 가장 작은 것은 다음이다.

$$
\begin{pmatrix}u\_{n-1}\cr\vdots\cr u_0\end{pmatrix}=\mathcal C^{\mathsf T}\bigl(\mathcal C\mathcal C^{\mathsf T}\bigr)^{-1}x^\ast
$$

$\mathcal C\mathcal C^{\mathsf T}=\sum\_{j=0}^{n-1}A^jBB^{\mathsf T}(A^{\mathsf T})^j$ 을 **가제어성 Gram 행렬(controllability Gramian)** 이라 한다. 이 행렬의 고윳값이 작은 방향일수록 그 방향으로 상태를 옮기는 데 큰 입력이 든다.

## 고윳값 판정

$(A,B)$ 가 가제어인 것은 $A$ 의 모든 [고윳값](eigenvalues.md) $\lambda$ 에 대해 $n\times(n+p)$ 행렬 $\begin{pmatrix}A-\lambda I&B\end{pmatrix}$ 의 계수가 $n$ 인 것과 동치다. 이것을 Popov–Belevitch–Hautus 판정(Popov–Belevitch–Hautus test)이라 한다.[^1] 계수가 떨어지는 $\lambda$ 가 있으면 $w^{\mathsf T}A=\lambda w^{\mathsf T}$, $w^{\mathsf T}B=0$ 인 $w\ne 0$ 이 있고, $w^{\mathsf T}x_k$ 는 입력과 상관없이 $\lambda^kw^{\mathsf T}x_0$ 이다. 둘째 수레에서는 $w=(0,1)$, $\lambda=1$ 이고 $w^{\mathsf T}x_k$ 가 속도다.

## 쌍대성

$(A,C)$ 가 가관측인 것과 $(A^{\mathsf T},C^{\mathsf T})$ 가 가제어인 것은 동치다. $y_0,\dots,y\_{n-1}$ 을 쌓으면 $\begin{pmatrix}C\cr CA\cr\vdots\cr CA^{n-1}\end{pmatrix}x_0$ 이고, 이 행렬의 전치가 $(A^{\mathsf T},C^{\mathsf T})$ 의 가제어성 행렬이다. 그래서 가관측성 판정은 계수 $n$ 조건 $\mathrm{rank}\begin{pmatrix}C\cr CA\cr\vdots\cr CA^{n-1}\end{pmatrix}=n$ 이다.

## 극배치

$(A,B)$ 가 가제어인 것과, 고윳값으로 줄 수 있는 임의의 $n$ 개 복소수 모임(켤레에 대해 닫힌 것)에 대해 $A-BK$ 의 고윳값이 그 모임이 되는 $p\times n$ 행렬 $K$ 가 존재하는 것은 동치다.[^1] 이것을 극배치 정리(pole placement theorem)라 한다. 되먹임(feedback) 입력 $u_k=-Kx_k$ 를 쓰면 계가 $x\_{k+1}=(A-BK)x_k$ 가 되므로, 가제어인 계는 고윳값의 절댓값을 모두 $1$ 보다 작게 잡아 상태를 $0$ 으로 수렴시킬 수 있다.

# 활용

- [Kalman 필터](kalman-filter.md)의 정상 상태 조건. 가관측성과 가제어성이 있으면 오차 공분산이 대수 Riccati 방정식의 유일한 해로 수렴한다. 같은 문서의 선형 이차 조절기(linear–quadratic regulator, LQR)와의 쌍대성 절이 두 조건이 맞바뀌는 것을 보인다.
- [Krylov 부분공간 방법](krylov-subspace-methods.md)의 Krylov 부분공간 $\mathrm{span}\lbrace b,Ab,\dots,A^{k-1}b\rbrace$ 이 입력이 하나인 계에서 $k$ 걸음에 도달하는 상태의 집합이다.
- [Lyapunov 안정성](lyapunov-stability.md)과 함께 써서, 극배치로 만든 되먹임 계 $x\_{k+1}=(A-BK)x_k$ 의 안정성을 판정한다.

[^1]: Eduardo D. Sontag, *Mathematical Control Theory*, 2nd ed., Springer (1998), 3 장. Kalman 계수 조건, Hautus 판정, 극배치 정리.

# 연관 문서

## 선수지식

- [최소다항식](minimal-polynomial.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #optimization #signal_processing
