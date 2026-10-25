# k-중심 문제

# 개요

**k-중심 문제(k-center problem)** 는 [거리 공간](metric-spaces.md)의 점 $n$ 개에서 중심 $k$ 개를 골라, 각 점에서 가장 가까운 중심까지의 거리 가운데 최댓값을 최소화하는 문제다. NP-난해(nondeterministic polynomial time)이고, 가장 먼 점을 차례로 중심으로 고르는 방법이 2-근사를 준다. $2-\varepsilon$ 근사는 $\mathrm P=\mathrm{NP}$ 를 함의하므로 이 2 는 최선이다. [시설 배치 문제](facility-location.md)의 $k$-중앙값이 거리의 합을 최소화하는 데 비해, 이 문제는 가장 나쁜 점의 거리를 최소화한다.

# 직관

수직선 위의 점 $0,1,2,10,11,12$ 에 중심 둘을 놓는다. $1$ 과 $11$ 에 놓으면 모든 점이 거리 $1$ 안에 있고, 이것이 최적이다.

가장 먼 점을 고르는 방법은 아무 점, 예컨대 $0$ 을 첫 중심으로 잡는다. 그다음 지금의 중심들에서 가장 먼 점 $12$ 를 둘째 중심으로 잡는다. 그러면 모든 점이 거리 $2$ 안에 들어 최적의 두 배다. 마지막에 가장 먼 점까지의 거리를 $r$ 이라 하면, 고른 중심들과 그 점은 서로 $r$ 이상 떨어진 $k+1$ 개 점이다. 최적해의 중심 $k$ 개 가운데 하나는 이 가운데 두 점을 맡으므로 그 반경은 $r/2$ 이상이다.

# 정의

거리 공간 $(X,d)$ 의 유한집합 $P$ 와 정수 $k$ 가 주어진다. $C\subseteq P$, $\lvert C\rvert=k$ 에 대해 반경을

$$
r(C)=\max_{p\in P}\min_{c\in C}d(p,c)
$$

로 두고 $r(C)$ 를 최소화하는 $C$ 를 찾는 문제가 $k$-중심 문제다. 최솟값을 $\mathrm{OPT}$ 로 쓴다.

판정 판본 "반경 $r$ 이하의 중심 $k$ 개가 있는가" 는 거리 $r$ 이하인 점을 이은 그래프에서 크기 $k$ 의 지배 집합(dominating set)이 있는지와 같다.

# 성질

## 가장 먼 점 선택

정리(Gonzalez). 첫 중심을 아무렇게나 고르고, 이후 지금의 중심 집합에서 가장 먼 점을 중심으로 더하기를 $k$ 번 하면 $r(C)\le 2\cdot\mathrm{OPT}$ 다. 시간은 $O(nk)$ 다[^1].

증명의 요지. 끝난 뒤 가장 먼 점 $p$ 까지의 거리를 $r$ 이라 한다. 선택 규칙에서 고른 중심들은 서로 $r$ 이상 떨어져 있고 $p$ 도 모든 중심에서 $r$ 이상 떨어져 있다. 이 $k+1$ 개 점 가운데 두 점 $x,y$ 가 최적해의 같은 중심 $c$ 에 배정되므로 삼각부등식으로 $r\le d(x,y)\le d(x,c)+d(c,y)\le 2\cdot\mathrm{OPT}$ 다.

## 병목 그래프 방법

D. S. Hochbaum 과 D. B. Shmoys 는 거리값을 작은 것부터 $r$ 로 시도하며, 거리 $r$ 이하인 점을 이은 그래프의 제곱에서 극대 독립집합을 구했다[^2]. 독립집합의 크기가 $k$ 이하이면 그 점들이 반경 $2r$ 의 해이고, $k$ 보다 크면 반경 $r$ 의 해가 없다. 이것도 2-근사이고, 같은 생각이 가중치가 있는 판본과 용량 제한 판본으로 넓어진다.

## 근사의 한계

정리. $2-\varepsilon$ 근사는 $\mathrm P=\mathrm{NP}$ 를 함의한다.

증명의 요지. 그래프의 지배 집합 문제에서 이웃한 정점의 거리를 $1$, 이웃하지 않은 정점의 거리를 $2$ 로 둔다. 크기 $k$ 의 지배 집합이 있으면 $\mathrm{OPT}=1$ 이고 없으면 $\mathrm{OPT}=2$ 다. $2-\varepsilon$ 근사는 이 둘을 가르므로 NP-완전인 지배 집합 문제를 푼다.

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
