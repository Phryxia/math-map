# Gershgorin 원판 정리

# 개요

**Gershgorin 원판 정리(Gershgorin circle theorem)** 는 정사각행렬의 고윳값이 모두, 대각성분을 중심으로 하고 그 행의 나머지 성분의 절댓값 합을 반지름으로 하는 원판들 안에 있다는 정리다. $\begin{pmatrix}10&1\cr 2&-5\end{pmatrix}$ 같은 행렬의 고윳값이 어디쯤인지 알고 싶을 때, 특성다항식을 풀지 않고 성분만 보고 범위를 정하는 문제가 이 정리의 대상이다. 대각성분이 나머지 성분보다 크면 원판이 작아서, 고윳값이 대각성분 근처에 있다는 것과 $0$ 이 고윳값이 아니라는 것이 덧셈만으로 나온다.

# 직관

$A=\begin{pmatrix}10&1\cr 2&-5\end{pmatrix}$ 의 [고윳값](eigenvalues.md)은 특성다항식 $\lambda^2-5\lambda-52=0$ 의 근 $(5\pm\sqrt{233})/2$, 곧 약 $10.13$ 과 $-5.13$ 이다. 둘 다 대각성분 $10$ 과 $-5$ 에 가깝다. 비대각성분 $1$ 과 $2$ 가 작아서 행렬이 대각행렬 $\mathrm{diag}(10,-5)$ 와 크게 다르지 않기 때문이다.

이 거리를 근을 구하지 않고 정한다. $Av=\lambda v$ 이고 $v=(v_1,v_2)$ 에서 $\vert v_1\vert\ge\vert v_2\vert$ 라 하자. 첫 행은 $10v_1+v_2=\lambda v_1$ 이므로 $(\lambda-10)v_1=v_2$ 이고, 양변의 절댓값을 $\vert v_1\vert$ 로 나누면 $\vert\lambda-10\vert=\vert v_2\vert/\vert v_1\vert\le 1$ 이다. $\vert v_2\vert\ge\vert v_1\vert$ 이면 둘째 행 $2v_1-5v_2=\lambda v_2$ 에서 같은 계산으로 $\vert\lambda+5\vert\le 2$ 다.

그래서 각 고윳값은 중심 $10$, 반지름 $1$ 인 원판이나 중심 $-5$, 반지름 $2$ 인 원판에 있다. $10.13$ 은 첫 원판에, $-5.13$ 은 둘째 원판에 있다. 두 원판이 겹치지 않고 $0$ 을 포함하지 않으므로 $A$ 는 가역이다.

# 정의

## Gershgorin 원판

$A=(a_{ij})$ 가 $n\times n$ 복소행렬이면 $i$ 번째 행의 **Gershgorin 원판(Gershgorin disc)** 은 다음이다.

$$
D_i=\Bigl\lbrace z\in\mathbb C:\vert z-a_{ii}\vert\le R_i\Bigr\rbrace,\qquad R_i=\sum_{j\ne i}\vert a_{ij}\vert
$$

직관 절의 $A$ 에서 $D_1$ 은 중심 $10$, 반지름 $R_1=1$ 이고 $D_2$ 는 중심 $-5$, 반지름 $R_2=2$ 다.

## 대각 우세

모든 $i$ 에서 $\vert a_{ii}\vert\gt R_i$ 이면 $A$ 를 **엄격 대각 우세(strictly diagonally dominant)** 라 한다. 직관 절의 $A$ 는 $10\gt 1$, $5\gt 2$ 이므로 엄격 대각 우세다. 이 조건은 원판 $D_i$ 가 모두 $0$ 을 포함하지 않는다는 것과 같다.

# 성질

## Gershgorin 원판 정리

$A$ 의 모든 고윳값은 $D_1\cup\dots\cup D_n$ 에 있다[^1].

증명의 요지. $Av=\lambda v$, $v\ne 0$ 에서 $\vert v_i\vert$ 가 가장 큰 $i$ 를 고른다. $i$ 번째 행은 $(\lambda-a_{ii})v_i=\sum_{j\ne i}a_{ij}v_j$ 이고, 양변의 절댓값에서 $\vert v_j\vert\le\vert v_i\vert$ 를 쓰면 $\vert\lambda-a_{ii}\vert\le R_i$ 다.

$A^{\mathsf T}$ 의 고윳값은 $A$ 와 같으므로 열의 절댓값 합으로 만든 원판들도 고윳값을 모두 포함한다. 직관 절의 $A$ 에서 열 원판은 중심 $10$, 반지름 $2$ 와 중심 $-5$, 반지름 $1$ 이다.

## Levy–Desplanques 정리

엄격 대각 우세 행렬은 가역이다. 이것이 **Levy–Desplanques 정리(Levy–Desplanques theorem)** 다[^1]. 모든 원판이 $0$ 을 포함하지 않으므로 $0$ 이 고윳값이 아니다. [삼중대각계](tridiagonal-systems.md)의 대각 우세 조건은 이 조건의 삼중대각 경우이고, 그 경우 소거에서 피벗이 $0$ 이 되지 않는다.

## 연결 성분별 개수

원판 $k$ 개의 합집합이 나머지 $n-k$ 개의 합집합과 겹치지 않으면, 그 $k$ 개의 합집합에는 고윳값이 중복도까지 세어 정확히 $k$ 개 있다[^1].

증명의 요지. $A(t)=D+t(A-D)$, $D=\mathrm{diag}(a_{11},\dots,a_{nn})$ 로 두고 $t$ 를 $0$ 에서 $1$ 로 움직인다. $A(t)$ 의 원판은 중심이 같고 반지름이 $tR_i$ 이므로 $t$ 마다 두 합집합이 떨어져 있다. 고윳값은 $t$ 에 연속이고 $t=0$ 에서는 대각성분이므로, 처음 $k$ 개 원판 쪽에 있던 고윳값 $k$ 개가 다른 쪽으로 건너가지 못한다.

직관 절의 두 원판은 겹치지 않으므로 각 원판에 고윳값이 하나씩 있다. 실행렬에서 원판 하나가 다른 원판과 겹치지 않으면 그 안의 고윳값 하나는 켤레와 짝을 이룰 수 없으므로 실수다.

## 대각 닮음으로 원판 줄이기

$S=\mathrm{diag}(s_1,\dots,s_n)$, $s_i\gt 0$ 이면 $S^{-1}AS$ 는 고윳값이 $A$ 와 같고 $(i,j)$ 성분이 $a_{ij}s_j/s_i$ 다. 반지름이 $\sum_{j\ne i}\vert a_{ij}\vert s_j/s_i$ 로 바뀌므로 $s$ 를 골라 원판을 줄일 수 있다. 직관 절의 $A$ 에서 $s=(1,\varepsilon)$ 이면 첫 원판의 반지름이 $\varepsilon$, 둘째의 반지름이 $2/\varepsilon$ 이 된다. 두 원판이 떨어져 있는 한 $\varepsilon$ 을 줄여 $10$ 근처의 고윳값을 더 좁은 원판에 가둔다. $\varepsilon=0.1$ 이면 반지름이 $0.1$ 과 $20$ 이고 두 원판이 겹친다. $\varepsilon=0.2$ 이면 $\lbrack 9.8,10.2\rbrack$ 와 중심 $-5$, 반지름 $10$ 인 원판이 떨어져 있어 $\vert\lambda_1-10\vert\le 0.2$ 다.

# 활용

- [그래프 Laplacian](graph-laplacian.md)의 고윳값 범위. 정점 $i$ 의 행은 대각성분이 차수 $d_i$ 이고 나머지 절댓값 합도 $d_i$ 이므로 원판이 $\lbrack 0,2d_i\rbrack$ 를 덮는다. Laplacian 은 대칭이라 고윳값이 실수이고, 모두 $\lbrack 0,2d_{\max}\rbrack$ 에 있다.
- 인접행렬의 가장 큰 고윳값. 원판의 중심이 $0$, 반지름이 차수이므로 고윳값의 절댓값은 최대 차수 이하다. [민감도 정리](sensitivity-theorem.md)의 Huang 보조정리가 부호 붙은 인접행렬의 주부분행렬에 이 상한을 쓴다.
- 반복법의 수렴. Jacobi 반복의 반복 행렬은 $-D^{-1}(A-D)$ 이고, 엄격 대각 우세이면 그 원판이 모두 중심 $0$, 반지름 $R_i/\vert a_{ii}\vert\lt 1$ 이라 스펙트럼 반지름(spectral radius)이 $1$ 보다 작아 반복이 수렴한다.
- [Perron–Frobenius 정리](perron-frobenius.md)의 고윳값 상한. 음이 아닌 행렬의 Perron 근은 행합의 최댓값 이하이고, 이것은 원판의 오른쪽 끝 $a_{ii}+R_i$ 의 최댓값이다.

[^1]: Roger A. Horn, Charles R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press, 2013, 6.1 절. 원판 정리, 연결 성분별 개수, 대각 닮음, Levy–Desplanques 정리가 있다.

# 연관 문서

## 선수지식

- [고윳값](eigenvalues.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #graph_theory #algorithms
