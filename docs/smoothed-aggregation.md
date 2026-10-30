# 평활 응집

# 개요

**평활 응집(smoothed aggregation)** 은 [대수적 다중격자](algebraic-multigrid.md)의 보간 연산자를 만드는 방법이다. 3차원 탄성 문제의 강성 [행렬](matrices.md)에는 평행이동 셋과 회전 셋, 모두 여섯 개의 에너지 $0$ 인 벡터가 있어 완화로 줄지 않는데, 변수를 하나씩 뽑아 만드는 보간은 그 가운데 상수 모드만 담는다. 평활 응집은 변수를 겹치지 않는 덩어리로 묶어 덩어리마다 여섯 벡터의 성분으로 보간의 열을 세우고, 그 열을 완화로 다듬어 쓴다.

# 직관

탄성 문제의 강성 행렬(stiffness matrix) $A$ 에는 $Ab=0$ 인 벡터가 3차원에서 평행이동 셋과 회전 셋, 모두 여섯 개 있다. 이 여섯을 강체운동(rigid body motion)이라 한다. 에너지가 $0$ 이라 완화가 줄이지 못하므로 보간 $P$ 의 열공간이 이 벡터들을 담아야 한다. 강한 연결의 문턱으로 고른 C/F 분할에서 보간의 열은 뽑힌 변수 하나에 대응하고, 여섯 모드 가운데 상수 모드만 담는다. 회전 모드는 성분마다 좌표에 비례해 뽑힌 변수의 값만으로 복원되지 않으므로, 그 성분이 격자 사이를 오가며 남고 반복이 느려진다.

여섯 모드를 처음부터 넣고 보간을 짠다. 변수를 덩어리로 나누고 각 덩어리 안에서 여섯 벡터의 성분을 잘라 열로 세우면 열공간이 여섯 모드를 담는다. 그런데 이렇게 만든 열은 덩어리 경계에서 끊기는 계단이라 $\Vert Pv\Vert_A$ 가 크고, 성긴 행렬 $P^\top AP$ 의 조건이 나빠진다. 완화 한 번을 열에 적용해 계단을 눕히면, $Ab=0$ 이므로 완화가 $b$ 를 바꾸지 않아 여섯 모드는 그대로 남는다.

한 줄로 이어진 정점 여섯 개의 [그래프 Laplacian](graph-laplacian.md)으로 보인다.

$$
A=\begin{pmatrix}1&-1&&&&\cr -1&2&-1&&&\cr &-1&2&-1&&\cr &&-1&2&-1&\cr &&&-1&2&-1\cr &&&&-1&1\end{pmatrix}
$$

이 행렬에서 $Ab=0$ 인 벡터는 상수벡터 하나다. 변수를 $\lbrace 1,2,3\rbrace$ 과 $\lbrace 4,5,6\rbrace$ 으로 묶고 덩어리마다 상수벡터를 자르면 열 $(1,1,1,0,0,0)$ 과 $(0,0,0,1,1,1)$ 이 나온다. 첫 열은 정점 $3$ 과 $4$ 사이에서 $1$ 에서 $0$ 으로 끊기는 계단이고, 에너지 $x^\top Ax$ 는 이웃 값의 차의 제곱합인 $1$ 이다. 감쇠 Jacobi 완화를 한 번 걸면 이 열이 $(1,\thinspace 1,\thinspace 2/3,\thinspace 1/3,\thinspace 0,\thinspace 0)$ 으로 눕고 에너지가 $1/3$ 로 준다. 둘째 열은 $(0,\thinspace 0,\thinspace 1/3,\thinspace 2/3,\thinspace 1,\thinspace 1)$ 이 되어, 두 열의 합은 여전히 상수벡터다.

# 정의

## 응집

색인 집합 $\lbrace 1,\dots,n\rbrace$ 의 분할 $\lbrace A_1,\dots,A_m\rbrace$ 을 **응집(aggregation)** 이라 한다. 각 $A_j$ 는 강하게 연결된 변수들의 덩어리이고, 보통 아직 묶이지 않은 변수 하나와 그것에 강하게 연결된 이웃 전부를 모아 만든다. 직관 절의 예에서 응집은 $\lbrace\lbrace 1,2,3\rbrace,\lbrace 4,5,6\rbrace\rbrace$ 이고 $m=2$ 다.

## 후보 벡터와 임시 보간

$B\in\mathbb R^{n\times k}$ 의 열을 **후보 벡터(candidate vector)** 라 한다. 완화가 줄이지 못하는 모드를 넣는 자리이고, 탄성에서는 강체운동 $k=6$, Poisson 문제(Poisson problem)에서는 상수벡터 $k=1$ 이다. 직관 절의 예에서는 $B=(1,1,1,1,1,1)^\top$ 이다.

**임시 보간(tentative prolongator)** $\hat P\in\mathbb R^{n\times mk}$ 는 $j$ 번째 열 묶음이 $B$ 의 $A_j$ 행만 남기고 나머지를 $0$ 으로 채운 뒤 정규직교화한 것이다. 직관 절의 예에서 $\hat P$ 의 두 열은 $(1,1,1,0,0,0)/\sqrt 3$ 과 $(0,0,0,1,1,1)/\sqrt 3$ 이다.

## 평활 보간

$D=\mathrm{diag}(A)$ 라 하고 감쇠 Jacobi 완화(damped Jacobi relaxation) $S=I-\omega D^{-1}A$ 를 잡는다. **평활 보간(smoothed prolongator)** $P$ 와 성긴 행렬 $A_c$ 는

$$
P=S\hat P,\qquad A_c=P^\top AP
$$

다. $\omega$ 는 $D^{-1}A$ 의 스펙트럼 반지름(spectral radius) 추정값 $\varrho$ 로 $\omega=4/(3\varrho)$ 로 잡는다.

직관 절의 예에서 $D^{-1}A$ 의 스펙트럼 반지름은 $2$ 이므로 $\omega=2/3$ 이다. 첫 열 $(1,1,1,0,0,0)$ 에 대해 $D^{-1}A$ 를 곱하면 $(0,\thinspace 0,\thinspace 1/2,\thinspace -1/2,\thinspace 0,\thinspace 0)$ 이므로, $S$ 를 곱한 결과가 직관 절의 $(1,\thinspace 1,\thinspace 2/3,\thinspace 1/3,\thinspace 0,\thinspace 0)$ 이다. $P$ 의 열은 이것을 $\sqrt 3$ 으로 나눈 것이다.

# 성질

## 임시 보간의 구조

행 색인이 덩어리마다 갈리므로 $\hat P$ 는 블록 대각(block diagonal)이다. 그래서 정규직교화는 각 덩어리 안의 $\vert A_j\vert\times k$ 행렬 하나에서 끝난다.

## 후보 벡터의 보존

$B$ 의 각 열이 $\hat P$ 의 열들의 조합이므로 $B=\hat PR$ 인 $R\in\mathbb R^{mk\times k}$ 가 있다. $AB=0$ 이면

$$
PR=S\hat PR=SB=B-\omega D^{-1}AB=B
$$

이므로 $P$ 의 열공간이 $B$ 의 열공간을 포함한다. 완화를 몇 번 걸어도 같다.

## 성긴 계의 크기

성긴 변수의 개수는 $mk$ 다. 응집 하나가 공간 차원 $d$ 에서 변수 $3^d$ 개쯤을 묶으므로 한 층마다 크기가 $3^d/k$ 배로 줄고, 층의 수가 $\log n$ 규모다. $k$ 가 크면 첫 성긴 계가 덜 줄어드는 대신 수렴이 빨라진다.

## 근사 성질

임시 보간만 쓰면 보간 오차가 $\Vert\cdot\Vert_A$ 에서 응집의 지름에 비례해 커진다. 완화를 한 번 걸면 $P$ 의 열이 국소적으로 $A$ 조화적($A$-harmonic)에 가까워지고, 요소 강성 행렬이 기준 요소와 스펙트럼 등가라는 가정 아래 2차 타원 문제에서 V 사이클 조건수가 격자 간격에 무관한 상수에 $\log$ 인자 하나만 붙은 값으로 묶인다.[^1]

## 완화의 비용

$S\hat P$ 는 희소 행렬 곱 하나다. $\hat P$ 의 열마다 $A$ 의 행 몇 개만 닿으므로 $P$ 의 희소성이 응집 하나에 이웃 응집을 더한 범위로 유지된다. 완화를 두 번 이상 걸면 $P$ 가 급히 조밀해져 성긴 행렬의 비용이 커진다.

# 활용

- 탄성과 껍질. 강체운동 여섯 개를 후보 벡터로 넣는다. 껍질 요소(shell element)에서는 굽힘 모드(bending mode)가 더 붙어 $k$ 가 커진다.
- Maxwell 방정식(Maxwell's equations). 에지 요소(edge element)로 짠 계에서 회전 연산자(curl)의 핵이 기울기 장(gradient field) 전체이므로 그 공간의 국소 기저를 후보 벡터로 넣는다.
- 후보 벡터를 모르는 경우. 상수벡터 하나로 시작해 몇 번의 사이클로 남은 오차를 뽑아 후보 벡터에 더하는 방식으로 $B$ 를 갱신한다.
- 그래프 Laplacian. 후보 벡터가 상수벡터 하나이고 응집이 그래프의 정점 묶음이므로, 성긴 행렬이 묶인 그래프의 Laplacian 에 완화를 한 번 씌운 것이 된다.

[^1]: P. Vaněk, J. Mandel, M. Brezina, "Algebraic multigrid by smoothed aggregation for second and fourth order elliptic problems", *Computing* **56** (1996), 179–196. 조건수 상한과 완화 계수 $4/(3\varrho)$ 의 근거가 3절과 5절에 있다.

# 연관 문서

## 선수지식

- [대수적 다중격자](algebraic-multigrid.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation
