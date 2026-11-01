# k-중심 문제

# 개요

**k-중심 문제(k-center problem)** 는 점들 가운데 $k$ 곳에 소방서를 세워, 각 점에서 가장 가까운 소방서까지의 거리 가운데 가장 큰 값을 가장 작게 하는 문제다. 수직선 위의 마을 $0,1,2,10,11,12$ 에 소방서 두 곳을 세운다면 $1$ 과 $11$ 에 세워 모든 마을을 거리 $1$ 안에 두는 것이 최선이다. 점이 많을 때는 최선의 배치 대신, 지금의 소방서들에서 가장 먼 점에 다음 소방서를 세우는 방법으로 최선의 두 배 이내인 배치를 얻는다.

# 직관

수직선 위의 점 $0,1,2,10,11,12$ 에 중심 둘을 놓는다. $1$ 과 $11$ 에 놓으면 모든 점이 거리 $1$ 안에 있다. 점 사이 거리가 $1$ 이상이라 반경이 $1$ 보다 작으면 중심마다 자기 자신만 덮고 여섯 점을 덮지 못하므로, 이 배치가 최적이다.

점이 많으면 모든 배치를 비교할 수 없다. 그래서 아무 점, 예컨대 $0$ 을 첫 중심으로 잡고, 지금의 중심들에서 가장 먼 점 $12$ 를 둘째 중심으로 잡는다. 그러면 $2$ 는 $0$ 에서, $10$ 은 $12$ 에서 거리 $2$ 이고 모든 점이 거리 $2$ 안에 들어 최적의 두 배다.

# 정의

[거리 공간](metric-spaces.md) $(X,d)$ 의 유한집합 $P$ 와 정수 $k$ 가 주어진다. $C\subseteq P$, $\lvert C\rvert=k$ 에 대해 반경을

$$
r(C)=\max_{p\in P}\min_{c\in C}d(p,c)
$$

로 두고 $r(C)$ 를 최소화하는 $C$ 를 찾는 문제가 $k$-중심 문제다. 최솟값을 $\mathrm{OPT}$ 로 쓴다. 직관의 예에서 $r(\lbrace 1,11\rbrace)=1=\mathrm{OPT}$ 이고 $r(\lbrace 0,12\rbrace)=2$ 다.

[시설 배치 문제](facility-location.md)의 하나인 [k-중앙값 문제](k-median.md)는 각 점에서 가장 가까운 중심까지의 거리를 더한 값을 최소화하고, $k$-중심 문제는 그 거리의 최댓값을 최소화한다. 직관의 예에서 $\lbrace 1,11\rbrace$ 의 거리 합은 $4$ 다.

**판정 판본(decision version)** 은 "반경 $r$ 이하인 중심 $k$ 개가 있는가" 를 묻는 문제다. 이것은 거리 $r$ 이하인 점을 이은 [그래프](graphs.md)에서 크기 $k$ 의 [지배 집합](dominating-set.md)(dominating set)이 있는지와 같다. 직관의 예에서 $r=1$ 이면 그래프가 $0-1-2$ 와 $10-11-12$ 두 경로이고 $\lbrace 1,11\rbrace$ 이 지배 집합이다.

# 성질

## 가장 먼 점 선택

Gonzalez 의 가장 먼 점 선택(farthest-first traversal)은 첫 중심을 아무렇게나 고르고, 이후 지금의 중심 집합에서 가장 먼 점을 중심으로 더해 중심이 $k$ 개가 되면 멈춘다. 이렇게 얻은 $C$ 는 $r(C)\le 2\cdot\mathrm{OPT}$ 를 만족하고, 점이 $n$ 개일 때 시간은 $O(nk)$ 다[^1]. 곧 가장 먼 점 선택은 근사비 $2$ 의 [근사 알고리즘](approximation-algorithms.md)이다.

끝난 뒤 가장 먼 점 $p$ 까지의 거리를 $r$ 이라 한다. 선택 규칙에서 고른 중심들은 서로 $r$ 이상 떨어져 있고 $p$ 도 모든 중심에서 $r$ 이상 떨어져 있다. 이 $k+1$ 개 점 가운데 두 점 $x,y$ 가 최적해의 같은 중심 $c$ 에 배정되므로 삼각부등식으로 $r\le d(x,y)\le d(x,c)+d(c,y)\le 2\cdot\mathrm{OPT}$ 다.

## 병목 그래프 방법

D. S. Hochbaum 과 D. B. Shmoys 는 거리값을 작은 것부터 $r$ 로 시도하며, 거리 $r$ 이하인 점을 이은 그래프의 제곱(square of a graph), 곧 그 그래프에서 길이 2 이하의 경로로 이어지는 점끼리 이은 그래프에서 극대 [독립집합](independent-set.md)을 구했다[^2]. 독립집합의 크기가 $k$ 이하이면 그 점들이 반경 $2r$ 의 해이고, $k$ 보다 크면 반경 $r$ 의 해가 없다. 이것도 2-근사(2-approximation)다.

## 근사의 한계

$k$-중심 문제는 NP-난해(NP-hard, NP 는 nondeterministic polynomial time)이고, 어떤 $\varepsilon\gt 0$ 에 대해서도 다항시간 $(2-\varepsilon)$-근사 알고리즘이 있으면 $\mathrm P=\mathrm{NP}$ 다. 따라서 가장 먼 점 선택의 근사비 $2$ 는 $\mathrm P\ne\mathrm{NP}$ 이면 개선되지 않는다.

그래프의 지배 집합 문제에서 이웃한 정점의 거리를 $1$, 이웃하지 않은 정점의 거리를 $2$ 로 둔다. 크기 $k$ 의 지배 집합이 있으면 $\mathrm{OPT}=1$ 이고 없으면 $\mathrm{OPT}=2$ 다. $(2-\varepsilon)$-근사는 이 둘을 가르므로 [NP-완전](np-completeness.md)인 지배 집합 문제를 푼다. 같은 환원에서 $k$-중심 문제의 NP-난해성이 나온다.

삼각부등식이 없으면 $\mathrm P\ne\mathrm{NP}$ 일 때 어떤 근사비도 다항시간에 보장할 수 없다.

# 활용

- 시설과 응급 서비스. 소방서나 기지국처럼 가장 먼 사용자까지의 응답 거리를 보장해야 할 때 이 목적함수를 쓴다.
- 군집과 자료 요약. 가장 먼 점 선택은 자료점 가운데 서로 멀리 떨어진 대표를 고르는 방법으로 쓰이고, [k 평균 군집화](k-means.md)의 초기 중심을 고르는 k-means++ 의 결정적 판본에 해당한다.
- 핵심 집합(coreset). 가장 먼 점 선택으로 고른 점들은 전체를 반경 $2\cdot\mathrm{OPT}$ 로 덮으므로, 큰 자료를 작은 대표 집합으로 줄이는 데 쓴다.

[^1]: T. F. Gonzalez, "Clustering to minimize the maximum intercluster distance", Theoretical Computer Science 38 (1985), 293–306.
[^2]: D. S. Hochbaum, D. B. Shmoys, "A best possible heuristic for the k-center problem", Mathematics of Operations Research 10 (1985), 180–184.

# 연관 문서

## 선수지식

- [근사 알고리즘](approximation-algorithms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #complexity #optimization
