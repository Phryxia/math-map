# LR 알고리즘

# 개요

**LR 알고리즘(LR algorithm)** 은 행렬을 아래삼각행렬과 위삼각행렬의 곱으로 분해하고 두 인수를 바꿔 곱하는 일을 되풀이해 고윳값을 구하는 반복법이다. 대각 성분이 $2,1$ 이고 비대각 성분이 $1$ 인 대칭행렬의 고윳값 $2.618$ 과 $0.382$ 를 구하려고 [QR 알고리즘](qr-algorithm.md)을 쓰면 반복마다 직교행렬을 만들어야 한다.

LR 알고리즘은 직교행렬 대신 삼각 분해만 쓴다. 양의 정부호 행렬에서는 Cholesky 분해로 하는 LR 두 걸음이 QR 한 걸음과 같은 행렬을 준다.

# 직관

$A\_0$ 을 위 대칭행렬로 두고 Cholesky 분해 $A\_0=L\_0L\_0^{\mathsf T}$ 를 구한다.

$$
L\_0=\begin{pmatrix}\sqrt2&0\cr 1/\sqrt2&1/\sqrt2\end{pmatrix},\qquad A\_1=L\_0^{\mathsf T}L\_0=\begin{pmatrix}2.5&0.5\cr 0.5&0.5\end{pmatrix}
$$

$A\_1=L\_0^{-1}A\_0L\_0$ 이므로 고윳값이 같다. 같은 일을 되풀이하면 비대각 성분이 $1,\thinspace 0.5,\thinspace 0.2,\thinspace 0.077,\dots$ 로 반복마다 약 $0.4$ 배로 줄고, 대각 성분은 $2.618$ 과 $0.382$ 로 간다.

줄어드는 비율 $0.4$ 는 고윳값의 비 $0.382/2.618=0.146$ 의 제곱근이다. QR 알고리즘의 한 걸음은 비대각 성분을 $0.146$ 배로 줄이므로, LR 두 걸음이 QR 한 걸음에 해당한다.

# 정의

정사각행렬 $A\_0$ 에서 시작해 다음을 되풀이하는 것이 **LR 알고리즘** 이다. $L\_k$ 는 대각 성분이 $1$ 인 아래삼각행렬이고 $R\_k$ 는 위삼각행렬이다.

$$
A\_k=L\_kR\_k,\qquad A\_{k+1}=R\_kL\_k
$$

분해는 [행렬 분해](matrix-factorizations.md)의 LU 분해다. $A\_0$ 이 대칭 양의 정부호이면 $A\_k=L\_kL\_k^{\mathsf T}$ 로 Cholesky 분해하고 $A\_{k+1}=L\_k^{\mathsf T}L\_k$ 로 두는데, 이것을 **Cholesky LR 알고리즘(Cholesky LR algorithm)** 이라 한다. 직관 절의 반복이 이것이다.

# 성질

## 닮음

$A\_{k+1}=R\_kL\_k=L\_k^{-1}A\_kL\_k$ 이므로 모든 $A\_k$ 는 $A\_0$ 과 닮음이고 고윳값이 같다. Cholesky LR 알고리즘에서는 $A\_{k+1}=L\_k^{-1}A\_kL\_k$ 가 다시 대칭 양의 정부호이므로 분해가 끝까지 이어진다.

## 수렴

**정리(Rutishauser, 1958).** $A\_0$ 의 고윳값의 절댓값이 $\vert\lambda\_1\vert\gt\vert\lambda\_2\vert\gt\dots\gt\vert\lambda\_n\vert$ 이고 매 걸음의 LU 분해가 존재하며 알맞은 비퇴화 조건을 만족하면, $A\_k$ 의 대각 아래 성분은 $0$ 으로 가고 대각 성분은 $\lambda\_1,\dots,\lambda\_n$ 으로 간다[^1]. $(i,j)$ 성분 $(i\gt j)$ 은 반복마다 약 $\vert\lambda\_i/\lambda\_j\vert$ 배로 준다.

증명은 $A\_0^k=(L\_0\cdots L\_{k-1})(R\_{k-1}\cdots R\_0)$ 에서 시작한다. 이것은 $A\_0^k$ 의 LU 분해이고, [거듭제곱법](power-iteration.md)처럼 $A\_0^k$ 의 열이 큰 고윳값의 고유벡터 쪽으로 기우는 것이 아래삼각 인수의 수렴으로 나타난다.

## QR 알고리즘과의 관계

$A\_0$ 이 대칭 양의 정부호이면 Cholesky LR 두 걸음의 결과는 QR 한 걸음의 결과와 같다[^2]. Cholesky LR 의 두 인수를 $L\_0$, $L\_1$ 이라 하면 다음이 성립한다.

$$
A\_0^2=L\_0L\_0^{\mathsf T}L\_0L\_0^{\mathsf T}=(L\_0L\_1)(L\_0L\_1)^{\mathsf T}
$$

한편 $A\_0=QR$ 이면 $A\_0^2=A\_0^{\mathsf T}A\_0=R^{\mathsf T}R$ 이다. Cholesky 분해가 하나뿐이므로 $L\_0L\_1=R^{\mathsf T}$ 이고, QR 한 걸음의 결과 $RQ=RA\_0R^{-1}$ 이 LR 두 걸음의 결과 $(L\_0L\_1)^{\mathsf T}A\_0(L\_0L\_1)^{-\mathsf T}$ 와 같다.

## 분해의 실패

LU 분해는 피벗이 $0$ 이면 존재하지 않는다. 대각 성분이 $0$ 이고 비대각 성분이 $1$ 인 $2\times 2$ 행렬은 고윳값이 $\pm 1$ 인데 첫 피벗이 $0$ 이라 첫 걸음부터 분해가 없다. 피벗이 $0$ 에 가까우면 $L\_k$ 의 성분이 커져 반올림 오차가 커진다. QR 알고리즘은 직교행렬을 써서 이 문제가 없으므로 일반 행렬의 고윳값 계산에서 LR 알고리즘을 대신했다.

# 활용

- [dqds 알고리즘](dqds-algorithm.md). 양의 정부호 삼중대각행렬 $B^{\mathsf T}B$ 에 Cholesky LR 알고리즘을 쓰되 이중대각 인수 $B$ 의 성분의 제곱만으로 계산한 것이다. dqds 의 표에서 반복 $k+1$ 의 행으로 만든 $B^{\mathsf T}B$ 가 직관 절의 $A\_k$ 다.
- QR 알고리즘의 역사. Francis 와 Kublanovskaya 는 LR 알고리즘의 분해를 직교 분해로 바꾸어 QR 알고리즘을 얻었다[^2].
- qd 알고리즘. 삼중대각행렬에 LR 알고리즘을 쓰고 인수의 성분만 따로 갱신하면 Rutishauser 의 qd 알고리즘이 된다[^1].

[^1]: H. Rutishauser, "Solution of eigenvalue problems with the LR-transformation", *National Bureau of Standards Applied Mathematics Series* 49 (1958), 47–81.
[^2]: J. H. Wilkinson, *The Algebraic Eigenvalue Problem*, Oxford University Press, 1965, Chapter 8.

# 연관 문서

## 선수지식

- [QR 알고리즘](qr-algorithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation
