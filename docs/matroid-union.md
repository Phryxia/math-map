# Matroid 합 정리

# 개요

**Matroid 합 정리(matroid union theorem)** 는 같은 집합 위의 matroid $M_1,\dots,M_k$ 에서 각 $M_i$ 의 독립집합을 하나씩 골라 합친 집합들이 다시 matroid 를 이루고, 그 계수가 $r(X)=\min_{Y\subseteq X}\bigl(\lvert X\setminus Y\rvert+\sum_i r_i(Y)\bigr)$ 라는 정리다. C. St. J. A. Nash-Williams 와 J. Edmonds 가 1960 년대에 증명했다[^1][^2].

[Matroid](matroids.md)의 탐욕법은 기저 하나를 찾는다. 이 정리는 기저 여러 개를 서로 겹치지 않게 찾는 문제와 집합을 독립집합 몇 개로 덮는 문제를 같은 계수 공식으로 답한다. 그래프에서는 간선을 공유하지 않는 신장트리 $k$ 개가 있을 조건이 나온다.

# 직관

완전 그래프 $K_4$ 의 정점을 $1,2,3,4$ 라 하면 간선은 $6$ 개이고 신장트리는 간선 $3$ 개다. 간선을 공유하지 않는 신장트리 두 개를 찾는다. 먼저 정점 $1$ 에 붙은 간선 $12,13,14$ 를 첫 나무로 고르면, 남은 간선 $23,34,24$ 는 정점 $1$ 에 닿지 않아 둘째 나무가 되지 못한다.

첫 나무를 고칠 수 있다. 남은 간선 가운데 $23$ 을 첫 나무에 넣고, 그러면 생기는 순환 $1,2,3$ 에서 $13$ 을 뺀다. 첫 나무는 $12,23,14$ 이고 남은 간선은 $13,34,24$ 이며, 둘 다 네 정점을 잇는 나무다. 한 쪽에 원소를 넣고 생긴 순환에서 원소를 빼 다른 쪽으로 넘기는 이 교환을 이어 가는 것이 증명과 알고리즘의 요지다.

두 나무가 없는 그래프도 있다. 정점을 덩어리 $p$ 개로 나누면 신장트리 하나는 덩어리 사이를 잇는 간선을 적어도 $p-1$ 개 쓴다. 그래서 신장트리 두 개가 있으려면 덩어리 사이의 간선이 $2(p-1)$ 개 이상이어야 한다. 이 조건이 충분하다는 것이 이 정리의 그래프 판본이다.

# 정의

$M_1=(E,\mathcal I_1),\dots,M_k=(E,\mathcal I_k)$ 는 같은 유한 집합 $E$ 위의 matroid 이고 계수 함수가 $r_1,\dots,r_k$ 이다. 이들의 합(union)은

$$
M_1\vee\cdots\vee M_k=\bigl(E,\thinspace\lbrace I_1\cup\cdots\cup I_k : I_i\in\mathcal I_i\rbrace\bigr)
$$

이다. 같은 matroid $M$ 을 $k$ 번 합친 것을 $M^{\vee k}$ 로 쓴다.

# 성질

## 계수 공식

$M_1\vee\cdots\vee M_k$ 는 matroid 이고, $X\subseteq E$ 의 계수는 다음과 같다.

$$
r(X)=\min_{Y\subseteq X}\Bigl(\lvert X\setminus Y\rvert+\sum_{i=1}^k r_i(Y)\Bigr)
$$

증명의 요지. 독립집합 $I_1\cup\cdots\cup I_k\subseteq X$ 와 $Y\subseteq X$ 에서 $Y$ 밖의 원소는 많아야 $\lvert X\setminus Y\rvert$ 개이고, $Y$ 안의 원소는 $I_i\cap Y$ 의 합이라 많아야 $\sum r_i(Y)$ 개다. 그래서 왼쪽이 오른쪽 이하다. 등호는 다음 교환 그래프의 증가 경로로 보인다. 현재의 $I_1,\dots,I_k$ 에 대해, $I_i+x-y\in\mathcal I_i$ 이면 $x$ 에서 $y$ 로 화살표를 긋는다. 어느 $I_i$ 에도 없는 원소에서 시작해 어떤 $I_j$ 에 그냥 더할 수 있는 원소로 가는 가장 짧은 경로가 있으면, 경로를 따라 원소를 넘겨 합집합이 하나 커진다. 그런 경로가 없으면 시작점에서 닿는 원소의 집합이 위 최솟값을 이루는 $Y$ 다.

## 덮기와 채우기

같은 matroid $M=(E,\mathcal I)$ 에 $M^{\vee k}$ 의 계수 공식을 쓰면 Edmonds 의 두 정리가 나온다[^2].

- 덮기. $E$ 가 독립집합 $k$ 개의 합집합인 것은 모든 $A\subseteq E$ 에서 $\lvert A\rvert\le k\thinspace r(A)$ 인 것과 동치다.
- 채우기. $M$ 에 서로 만나지 않는 기저가 $k$ 개 있는 것은 모든 $A\subseteq E$ 에서 $\lvert E\setminus A\rvert\ge k\bigl(r(E)-r(A)\bigr)$ 인 것과 동치다.

## Nash-Williams–Tutte 정리

연결 그래프 $G=(V,E)$ 에 간선을 공유하지 않는 신장트리가 $k$ 개 있는 것은, $V$ 의 모든 분할 $\mathcal P$ 에서 서로 다른 덩어리를 잇는 간선이 $k(\lvert\mathcal P\rvert-1)$ 개 이상인 것과 동치다. Nash-Williams 와 W. T. Tutte 가 1961 년에 따로 증명했다[^1][^3].

그래프 matroid 에서 $r(A)$ 는 $\lvert V\rvert$ 에서 간선 집합 $A$ 의 연결 성분 수를 뺀 값이다. 채우기 조건을 최소로 만드는 $A$ 는 어떤 분할의 각 덩어리 안 간선을 모두 담은 집합이고, 그때 $r(E)-r(A)=\lvert\mathcal P\rvert-1$ 이며 $E\setminus A$ 는 덩어리 사이의 간선이다.

## 수목도

그래프 $G$ 의 간선을 숲 $k$ 개로 나눌 수 있는 것은 모든 부분그래프 $H$ 에서 $\lvert E(H)\rvert\le k(\lvert V(H)\rvert-1)$ 인 것과 동치다. 이런 $k$ 의 최솟값을 수목도(arboricity)라 한다. Nash-Williams 가 1964 년에 증명했고[^4], 덮기 정리를 그래프 matroid 에 쓴 것이다.

## 계산

독립성을 판정하는 신탁이 있으면 교환 그래프를 만들고 증가 경로를 찾는 일을 원소마다 한 번씩 되풀이해, 합의 최대 독립집합과 그것을 이루는 $I_1,\dots,I_k$ 를 다항시간에 찾는다. 그래프에서는 간선을 공유하지 않는 신장트리 $k$ 개를 이렇게 찾는다.

# 활용

- [Shannon 전환 게임](shannon-switching-game.md). 나중에 두는 Short 가 이기는 조건이 간선을 공유하지 않는 신장트리 두 개의 존재이고, 그 판정과 나무는 이 정리의 알고리즘으로 얻는다.
- 그래프의 강한 연결도. 간선 연결도가 $2k$ 이상이면 분할의 덩어리마다 밖으로 나가는 간선이 $2k$ 개 이상이므로 덩어리 사이의 간선이 $k\lvert\mathcal P\rvert$ 개 이상이다. Nash-Williams–Tutte 정리에서 간선을 공유하지 않는 신장트리가 $k$ 개 있다.
- matroid 교집합. 합의 계수 공식과 두 matroid 의 공통 독립집합의 최대 크기를 주는 Edmonds 의 [Matroid 교집합 정리](matroid-intersection.md)는 서로 유도된다.

[^1]: C. St. J. A. Nash-Williams, "Edge-disjoint spanning trees of finite graphs", Journal of the London Mathematical Society 36 (1961), 445–450.
[^2]: J. Edmonds, "Minimum partition of a matroid into independent subsets", Journal of Research of the National Bureau of Standards 69B (1965), 67–72.
[^3]: W. T. Tutte, "On the problem of decomposing a graph into n connected factors", Journal of the London Mathematical Society 36 (1961), 221–230.
[^4]: C. St. J. A. Nash-Williams, "Decomposition of finite graphs into forests", Journal of the London Mathematical Society 39 (1964), 12.

# 연관 문서

## 선수지식

- [Matroid](matroids.md)

## 더 알아보기

- [Shannon 전환 게임](shannon-switching-game.md)
- [Matroid 교집합 정리](matroid-intersection.md)

#combinatorics #graph_theory #optimization
