# Birkhoff–von Neumann 정리

# 개요

**Birkhoff–von Neumann 정리(Birkhoff–von Neumann theorem)** 는 행과 열의 합이 모두 $1$ 인 음이 아닌 행렬이 순열행렬들의 가중 평균으로 쓰인다는 진술이다. 일꾼 세 명이 일 세 가지를 나눠 맡는데, 일꾼마다 각 일에 쓰는 시간의 비율을 정해 두었고 일마다 받는 시간의 비율의 합도 $1$ 이다. 이 비율을 지키면서, 매 시간대마다 일꾼 한 명이 일 하나만 하고 일 하나에 일꾼 한 명만 붙는 시간표를 짤 수 있는지 묻는다.

비율을 적은 행렬에서 양수인 자리만 따라가는 일대일 배정을 하나 찾아 그 배정에 시간을 주고 빼는 일을 되풀이하면 시간표가 나온다. 그런 배정이 언제나 있다는 것은 [매칭](matchings.md)의 Hall 결혼 정리(Hall's marriage theorem)로 증명된다.

# 직관

일꾼 $w_1,w_2,w_3$ 이 일 $j_1,j_2,j_3$ 에 쓰는 시간의 비율이 다음 행렬의 행이다.

$$
B=\frac16\begin{pmatrix}3&2&1\cr 1&3&2\cr 2&1&3\end{pmatrix}
$$

행의 합과 열의 합이 모두 $1$ 이다. 대각선 세 자리가 모두 양수이므로 $w_i$ 에게 $j_i$ 를 주는 배정을 쓸 수 있고, 세 자리의 최솟값 $3/6$ 만큼 시간을 준다. $B$ 에서 단위행렬 $I$ 의 $1/2$ 배를 빼면 다음이 남는다.

$$
B-\frac12I=\frac16\begin{pmatrix}0&2&1\cr 1&0&2\cr 2&1&0\end{pmatrix}
$$

남은 행렬도 행과 열의 합이 모두 같다. $w_1\to j_2$, $w_2\to j_3$, $w_3\to j_1$ 의 자리가 모두 $2/6$ 이므로 이 배정에 $1/3$ 을 주고 빼면, $w_1\to j_3$, $w_2\to j_1$, $w_3\to j_2$ 의 자리에 $1/6$ 씩만 남는다. 마지막 배정에 $1/6$ 을 주면 끝난다.

$$
B=\frac12P_1+\frac13P_2+\frac16P_3
$$

$P_1,P_2,P_3$ 은 세 배정을 $1$ 로 적은 행렬이다. 시간의 절반은 첫 배정, $1/3$ 은 둘째, $1/6$ 은 셋째로 일하면 비율이 지켜진다. 빼는 단계마다 $0$ 인 자리가 적어도 하나 늘어나므로 이 과정은 끝난다.

# 정의

## 이중 확률 행렬과 순열행렬

**이중 확률 행렬(doubly stochastic matrix)** 은 성분이 모두 음이 아니고 각 행의 합과 각 열의 합이 모두 $1$ 인 정사각 [행렬](matrices.md)이다. **순열행렬(permutation matrix)** 은 각 행과 각 열에 $1$ 이 정확히 하나 있고 나머지가 $0$ 인 행렬이다. 순열 $\sigma$ 의 순열행렬 $P_\sigma$ 는 $(i,\sigma(i))$ 자리가 $1$ 이다. 직관 절의 $B$ 는 이중 확률 행렬이고 $P_1,P_2,P_3$ 은 순열행렬이다.

## 볼록 결합

행렬 $M_1,\dots,M_k$ 의 **볼록 결합(convex combination)** 은 $\lambda_i\ge 0$, $\sum_i\lambda_i=1$ 인 $\sum_i\lambda_iM_i$ 다. 직관 절의 $\frac12P_1+\frac13P_2+\frac16P_3$ 이 볼록 결합이다.

## Birkhoff 다면체

$n\times n$ 이중 확률 행렬 전체를 $n^2$ 차원 공간의 점으로 본 집합을 **Birkhoff 다면체(Birkhoff polytope)** $\mathcal B_n$ 이라 한다. $\mathcal B_n$ 은 부등식 $b_{ij}\ge 0$ 과 등식 $2n$ 개로 정의되는 [볼록 다면체](convex-polytopes.md)다.

$\mathcal B_2$ 는 $0\le t\le 1$ 인 $\begin{pmatrix}t&1-t\cr 1-t&t\end{pmatrix}$ 전체이고, 두 끝점 $t=1$, $t=0$ 이 두 순열행렬이다.

## 정리

$n\times n$ 이중 확률 행렬은 순열행렬들의 볼록 결합이다[^1]. G. Birkhoff 가 1946 년에 증명했고, J. von Neumann 이 1953 년에 배정 문제와 관련해 다시 증명했다[^2].

# 성질

## 증명

음이 아닌 $n\times n$ 행렬 $C$ 의 행의 합과 열의 합이 모두 $c\gt 0$ 이면, 모든 $i$ 에서 $c_{i\sigma(i)}\gt 0$ 인 순열 $\sigma$ 가 존재한다.

증명의 요지. $i$ 행과 $j$ 열을 $c_{ij}\gt 0$ 일 때 잇는 이분 그래프를 둔다. 행의 집합 $S$ 의 성분의 합은 $c\vert S\vert$ 이고 전부 $S$ 의 이웃 열 $N(S)$ 안에 있다. 열 하나의 합은 $c$ 이므로 $c\vert S\vert\le c\vert N(S)\vert$ 이다. Hall 조건이 성립하므로 완전 매칭이 있고, 그 매칭이 $\sigma$ 다.

정리의 증명의 요지. $B$ 의 양수인 자리의 수에 대한 귀납법이다. 위 사실로 $\sigma$ 를 찾고 $\lambda=\min_ib_{i\sigma(i)}$ 로 둔다. $\lambda=1$ 이면 $B=P_\sigma$ 다. 아니면 $B-\lambda P_\sigma$ 는 행과 열의 합이 $1-\lambda$ 이고 양수인 자리가 적어도 하나 적으므로, $(B-\lambda P_\sigma)/(1-\lambda)$ 에 귀납 가정을 쓴다.

## 꼭짓점과 차원

$\mathcal B_n$ 의 꼭짓점은 $n!$ 개의 순열행렬이다. 순열행렬은 성분이 $0$ 과 $1$ 이라 다른 이중 확률 행렬의 볼록 결합으로 쓸 수 없고, 정리에 따라 다른 점은 모두 순열행렬의 볼록 결합이다.

$\mathcal B_n$ 의 차원은 $(n-1)^2$ 이다. 왼쪽 위 $(n-1)\times(n-1)$ 부분을 정하면 마지막 행과 열이 행과 열의 합으로 정해진다. Carathéodory 정리(Carathéodory's theorem)에 따라 이중 확률 행렬은 순열행렬 $(n-1)^2+1$ 개 이하의 볼록 결합이다[^3].

## 정칙 이분 그래프의 분해

두 쪽에 정점이 $n$ 개씩 있고 모든 정점의 차수가 $d$ 인 이분 그래프의 간선은 완전 매칭 $d$ 개로 나뉜다. 결합행렬을 $A$ 라 하면 $A$ 는 행과 열의 합이 $d$ 이므로 증명 절의 사실로 완전 매칭이 하나 있다. 그 매칭을 빼면 차수가 $d-1$ 인 정칙 이분 그래프가 남고, 이것을 $d$ 번 되풀이한다.

# 활용

- 배정 문제. 비용 행렬 $C$ 에 대해 $\sum_{i,j}c_{ij}b_{ij}$ 를 $\mathcal B_n$ 위에서 최소로 하는 [선형계획법](linear-programming.md) 문제는 꼭짓점에서 최솟값을 가지므로, 그 해가 순열행렬이다. 정수 조건 없이 푼 선형계획의 해가 일대일 배정이 된다[^2].
- [최적 수송](optimal-transport.md). 점 $n$ 개에 같은 질량을 둔 두 분포 사이의 수송 계획은 이중 확률 행렬의 $1/n$ 배이고, 비용을 최소로 하는 계획 가운데 순열행렬의 $1/n$ 배, 곧 점을 일대일로 옮기는 계획이 있다.
- [van der Waerden 부등식](van-der-waerden-inequality.md). 이중 확률 행렬은 순열행렬의 볼록 결합이므로 영구식이 양수다. van der Waerden 부등식은 이 영구식의 하한을 $n!/n^n$ 으로 준다.
- 다수화(majorization). 실수 벡터 $x$ 가 $y$ 에 다수화된다는 것은 $x=By$ 인 이중 확률 행렬 $B$ 가 존재한다는 것과 동치이고(Hardy–Littlewood–Pólya), 이 정리에 따라 $x$ 가 $y$ 의 성분을 재배열한 벡터들의 볼록 결합이라는 것과 동치다[^4].

[^1]: G. Birkhoff, "Tres observaciones sobre el álgebra lineal", Universidad Nacional de Tucumán Revista, Serie A 5 (1946), 147–151.
[^2]: J. von Neumann, "A certain zero-sum two-person game equivalent to the optimal assignment problem", in *Contributions to the Theory of Games II*, Annals of Mathematics Studies 28, Princeton University Press, 1953, 5–12.
[^3]: M. Marcus, R. Ree, "Diagonals of doubly stochastic matrices", Quarterly Journal of Mathematics 10 (1959), 296–302.
[^4]: G. H. Hardy, J. E. Littlewood, G. Pólya, *Inequalities*, Cambridge University Press, 1934, §2.19–2.20.

# 연관 문서

## 선수지식

- [매칭](matchings.md)
- [볼록 다면체](convex-polytopes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #optimization #linear_algebra #theorem
