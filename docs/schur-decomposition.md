# Schur 분해

# 개요

**Schur 분해(Schur decomposition)** 는 모든 복소 정사각행렬을 정규직교기저를 바꾸는 것만으로 위삼각행렬로 만들 수 있다는 정리와 그 분해다. $\begin{pmatrix}1&1\cr -1&3\end{pmatrix}$ 은 고유벡터가 한 방향뿐이라 대각화되지 않으므로, 고유벡터로 기저를 잡아 행렬을 단순하게 만드는 방법이 여기서 멈춘다. Schur 분해는 대각행렬 대신 위삼각행렬을 목표로 삼아, 길이와 각을 보존하는 기저 변환만으로 어떤 행렬이든 고윳값이 대각선에 놓인 꼴로 바꾼다.

# 직관

$A=\begin{pmatrix}1&1\cr -1&3\end{pmatrix}$ 의 특성다항식은 $\lambda^2-4\lambda+4=(\lambda-2)^2$ 이고, $(A-2I)v=0$ 의 해는 $(1,1)$ 의 배수뿐이다. 고유벡터 둘로 된 기저가 없으므로 [고윳값](eigenvalues.md) 문서의 대각화가 되지 않는다.

고유벡터 하나는 있으므로 그것을 첫 기저 벡터로 쓴다. $q_1=(1,1)/\sqrt2$ 에 수직인 단위벡터 $q_2=(-1,1)/\sqrt2$ 를 더해 정규직교기저를 만든다. $Aq_1=2q_1$ 이고 $Aq_2=(0,4)/\sqrt2=2q_1+2q_2$ 이므로, 이 기저에서 $A$ 는

$$
Q^{\mathsf T}AQ=\begin{pmatrix}2&2\cr 0&2\end{pmatrix},\qquad Q=\frac1{\sqrt2}\begin{pmatrix}1&-1\cr 1&1\end{pmatrix}
$$

이다. 첫 열은 $q_1$ 이 고유벡터라서 아래가 $0$ 이다. 대각성분은 고윳값 $2,2$ 이고, 대각 위의 $2$ 가 대각화가 실패한 정도를 나타낸다.

# 정의

$A$ 가 $n\times n$ 복소행렬일 때 유니터리 행렬 $Q$ 와 위삼각행렬 $T$ 로 된 분해

$$
A=QTQ^\ast
$$

를 $A$ 의 Schur 분해라 하고, $T$ 를 $A$ 의 **Schur 형(Schur form)** 이라 한다. $Q^\ast Q=I$ 이므로 $T=Q^\ast AQ$ 는 $A$ 와 닮음이고, $T$ 의 대각성분이 $A$ 의 고윳값이다. 직관 절의 $Q$ 와 $T=\begin{pmatrix}2&2\cr 0&2\end{pmatrix}$ 가 그 예다. $Q$ 의 열들은 정규직교이고, 처음 $k$ 열이 생성하는 공간은 $A$ 를 곱해도 그 안에 머문다.

# 성질

## 존재 정리

모든 복소 정사각행렬은 Schur 분해를 가지고, 대각성분의 순서는 고윳값의 어떤 순서로도 정할 수 있다. 이것이 **Schur 정리(Schur's theorem)** 다[^1].

증명의 요지. $n$ 에 대한 귀납법이다. 특성다항식은 복소수 근 $\lambda$ 를 가지므로 단위 고유벡터 $q_1$ 이 있다. $q_1$ 을 정규직교기저 $q_1,\dots,q_n$ 으로 늘리고 $Q_1=(q_1\ \cdots\ q_n)$ 으로 두면 $Q_1^\ast AQ_1$ 의 첫 열은 $(\lambda,0,\dots,0)$ 이다. 오른쪽 아래 $(n-1)\times(n-1)$ 블록에 귀납 가정을 쓴다.

## 정규행렬

$A^\ast A=AA^\ast$ 인 행렬을 정규행렬(normal matrix)이라 한다. $A$ 가 정규행렬이면 $T$ 도 정규행렬이고, 정규인 위삼각행렬은 대각행렬이다. 따라서 정규행렬은 유니터리 행렬로 대각화된다. 이것이 [스펙트럼 정리](spectral-theorem.md)의 유한차원 판본이다.

증명의 요지. $T^\ast T$ 와 $TT^\ast$ 의 $(1,1)$ 성분을 비교하면 $\vert t_{11}\vert^2=\sum_j\vert t_{1j}\vert^2$ 이므로 첫 행의 비대각성분이 $0$ 이다. 같은 비교를 다음 행에 차례로 한다. 직관 절의 $T$ 는 $t_{12}=2\ne 0$ 이므로 $A$ 는 정규행렬이 아니다.

## 비정규성의 크기

$T=D+N$ 으로 대각 부분과 대각 위 부분을 나누면, $\Vert N\Vert_F^2=\Vert A\Vert_F^2-\sum_i\vert\lambda_i\vert^2$ 다. Frobenius 노름(Frobenius norm) $\Vert\cdot\Vert_F$ 는 유니터리 변환으로 바뀌지 않으므로, 오른쪽은 Schur 분해의 선택과 무관하다. 직관 절에서 $\Vert A\Vert_F^2=12$, $\sum\vert\lambda_i\vert^2=8$ 이고 $\Vert N\Vert_F^2=4$ 다. 이 값이 $0$ 인 것과 $A$ 가 정규행렬인 것이 동치다.

## 실 Schur 형

$A$ 가 실행렬이면 직교행렬 $Q$ 로 $Q^{\mathsf T}AQ$ 를 블록 위삼각 꼴로 만들 수 있고, 대각 블록은 실 고윳값에 대한 $1\times 1$ 블록과 켤레 복소 고윳값 쌍에 대한 $2\times 2$ 블록이다[^1]. 이 꼴을 실 Schur 형(real Schur form)이라 한다. 회전행렬 $\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 은 고윳값이 $\pm i$ 라 실수 위에서는 $2\times 2$ 블록 하나가 실 Schur 형이다.

# 활용

- [QR 알고리즘](qr-algorithm.md). 이동 QR 반복은 $A$ 를 Schur 형으로 수렴시키는 계산이고, 실행렬에서는 Francis 이중 이동으로 실 Schur 형을 얻는다.
- 대각합과 행렬식. $T$ 의 대각성분이 고윳값이므로 $\mathrm{tr}A=\sum\lambda_i$, $\det A=\prod\lambda_i$ 가 중복도까지 세어 성립한다.
- 행렬함수. $f(A)=Qf(T)Q^\ast$ 이고 $f(T)$ 는 위삼각행렬이라 대각에서 위로 한 대각씩 점화식으로 계산한다. 이것이 Schur–Parlett 방법(Schur–Parlett method)이다.
- Sylvester 방정식 $AX-XB=C$. $A$ 와 $B$ 를 Schur 형으로 바꾸면 미지수를 한 열씩 삼각계로 푼다. 이것이 Bartels–Stewart 알고리즘(Bartels–Stewart algorithm)이다.

[^1]: Roger A. Horn, Charles R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press, 2013, 2.3 절과 2.5 절. Schur 정리, 정규행렬의 대각화, 실 Schur 형이 있다.

# 연관 문서

## 선수지식

- [고윳값](eigenvalues.md)
- [행렬 분해](matrix-factorizations.md)

## 더 알아보기

- [QR 알고리즘](qr-algorithm.md)

#linear_algebra #algorithms
