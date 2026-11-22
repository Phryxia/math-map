# 스펙트럼 분할정복

# 개요

**스펙트럼 분할정복(spectral divide and conquer)** 은 행렬의 고윳값을 복소평면의 직선 하나로 두 무리로 나누고, 각 무리에 해당하는 작은 행렬로 문제를 쪼개는 고윳값 알고리즘이다. 성분이 $2,1,1,2$ 인 $2\times 2$ 대칭행렬의 고윳값 $1$ 과 $3$ 은 수직선 $x=2$ 의 양쪽에 있다. 이 방법은 직선 왼쪽 고윳값의 고유벡터들이 생성하는 공간을 행렬 곱셈과 역행렬만으로 구하고, 그 공간에 맞춘 기저로 행렬을 블록 위삼각 꼴로 바꾼다.

# 직관

다음 행렬의 고윳값을 고윳값 문제를 직접 풀지 않고 두 무리로 나누려 한다.

$$
A=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}
$$

직선 $\mathrm{Re}\thinspace\lambda=2$ 를 기준으로 삼아 $A-2I$ 를 본다. [행렬 부호 함수](matrix-sign-function.md)는 고윳값의 실수부가 음수인 쪽을 $-1$ 로, 양수인 쪽을 $1$ 로 바꾼 행렬이다. $A-2I$ 는 성분이 $0,1,1,0$ 인 행렬이고 제곱하면 $I$ 이므로 고윳값이 이미 $\pm 1$ 이고, 부호 함수가 자기 자신이다.

$$
S=\mathrm{sign}(A-2I)=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}
$$

$P=(I-S)/2$ 는 직선 왼쪽 고윳값의 고유공간으로 가는 사영이다. 그 열은 $(1/2,-1/2)$ 와 $(-1/2,1/2)$ 이고, 둘 다 벡터 $(1,-1)$ 의 배수다. 그래서 왼쪽 고윳값의 고유공간은 $(1,-1)$ 이 생성한다.

$q_1=(1,-1)/\sqrt2$ 에 수직인 단위벡터 $q_2=(1,1)/\sqrt2$ 를 더해 직교행렬 $Q=(q_1\ q_2)$ 를 만들면 $Q^{\mathsf T}AQ$ 는 대각성분이 $1,3$ 인 대각행렬이다. 고윳값 $1$ 은 직선 왼쪽 블록에, $3$ 은 오른쪽 블록에 들어간다.

# 정의

## 분할 한 걸음

$A$ 는 $n\times n$ 행렬이고 직선 $\mathrm{Re}\thinspace\lambda=c$ 위에 고윳값이 없다. 스펙트럼 분할의 한 걸음은 다음이다.

1. $S=\mathrm{sign}(A-cI)$ 를 Newton 반복으로 구하고 $P=(I-S)/2$ 를 만든다.
2. $P$ 의 열공간의 정규직교 기저 $Q_1$ 을 열 피벗 QR 분해로 구하고, 직교 여공간의 기저 $Q_2$ 를 더해 $Q=(Q_1\ Q_2)$ 를 만든다.
3. $Q^{\ast}AQ$ 를 계산한다.

$Q_1$ 의 열 수 $k$ 는 $P$ 의 계수, 곧 직선 왼쪽 고윳값의 개수다. 직관 절에서는 $c=2$, $k=1$, $Q_1=q_1$ 이다.

## 분할정복

한 걸음의 결과는 다음 꼴이다.

$$
Q^{\ast}AQ=\begin{pmatrix}A_{11}&A_{12}\cr 0&A_{22}\end{pmatrix}
$$

$A_{11}$ 은 $k\times k$ 이고 고윳값이 직선 왼쪽에 있고, $A_{22}$ 는 오른쪽에 있다. $A_{11}$ 과 $A_{22}$ 에 다른 직선으로 같은 걸음을 되풀이해 블록이 충분히 작아지면 [QR 알고리즘](qr-algorithm.md)으로 마무리한다. 모든 $Q$ 를 곱하면 $A$ 의 [Schur 분해](schur-decomposition.md)가 나온다.

# 성질

## 불변 부분공간

$P$ 의 열공간은 $A$ 의 불변 부분공간이다. $S$ 는 $A$ 와 교환하므로 $AP=PA$ 이고, $x=Py$ 이면 $Ax=P(Ay)$ 도 $P$ 의 열공간에 있다. 그래서 $Q^{\ast}AQ$ 의 왼쪽 아래 블록은 $0$ 이다.

## 연산의 종류

한 걸음에 드는 연산은 Newton 반복의 역행렬, 행렬 곱셈, QR 분해뿐이다. 이 연산들은 블록 단위로 나누어 병렬로 계산하기 쉽고, 한 번에 고윳값 하나씩 떼어 내는 QR 알고리즘의 이동보다 통신량이 적다.

역행렬도 쓰지 않는 판본이 있다. Bai, Demmel, Gu 는 $A$ 와 $I$ 의 행렬 쌍에 QR 분해만 되풀이해 같은 사영을 구하는 방법을 제시했다[^1].

## 조건과 실패

직선 가까이에 고윳값이 있으면 Newton 반복이 느려지고 $P$ 의 계수를 판정하기 어렵다. 부호 함수의 조건수는 $A-cI$ 의 고윳값이 허수축에서 떨어진 거리와 고유벡터의 비정규성에 따라 커진다. 그래서 직선은 고윳값의 분포를 보고 고윳값이 드문 자리에 긋는다.

## 대칭행렬

$A$ 가 대칭이면 $\mathrm{sign}(A-cI)$ 는 $A-cI$ 의 극분해(polar decomposition)의 직교 인수와 같다. Nakatsukasa 와 Higham 은 극분해를 QR 분해 기반 반복인 [QDWH 반복](qdwh-iteration.md)으로 구해 대칭 고윳값 문제와 특이값 분해를 분할정복하는 방법을 만들었다[^2].

# 활용

- 병렬 고윳값 계산. 분산 메모리에서 비대칭 고윳값 문제를 행렬 곱셈 위주로 푸는 데 쓰인다.
- 부분 고유공간. 특정 영역, 예를 들어 실수부가 음수인 안정 고윳값들의 불변 부분공간만 필요하면 한 걸음으로 얻는다. [대수 Riccati 방정식](algebraic-riccati-equation.md)의 안정화 해가 그 예다.
- 계산 복잡도. Banks, Garza-Vargas, Kulkarni, Srivastava 는 작은 무작위 섭동을 더해 고윳값을 흩은 뒤 이 방법을 써서, 행렬 곱셈과 거의 같은 시간에 행렬을 근사적으로 대각화하는 알고리즘을 얻었다[^3].

[^1]: Z. Bai, J. Demmel, M. Gu, "An inverse free parallel spectral divide and conquer algorithm for nonsymmetric eigenproblems", *Numerische Mathematik* 76 (1997), 279–308.
[^2]: Y. Nakatsukasa, N. J. Higham, "Stable and efficient spectral divide and conquer algorithms for the symmetric eigenvalue decomposition and the SVD", *SIAM Journal on Scientific Computing* 35 (2013), A1325–A1349.
[^3]: J. Banks, J. Garza-Vargas, A. Kulkarni, N. Srivastava, "Pseudospectral shattering, the sign function, and diagonalization in nearly matrix multiplication time", *Foundations of Computational Mathematics* 23 (2023).

# 연관 문서

## 선수지식

- [행렬 부호 함수](matrix-sign-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #analysis
