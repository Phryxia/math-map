# 정점 덮개 문제

# 개요

**정점 덮개(vertex cover)** 는 그래프의 모든 간선에 대해 그 간선의 끝점을 하나 이상 포함하는 정점 집합이다. 크기가 가장 작은 정점 덮개를 찾는 문제가 **정점 덮개 문제(vertex cover problem)** 이고, 최소 크기를 $\tau(G)$ 로 쓴다. 일반 그래프에서는 NP-난해(nondeterministic polynomial time)이지만 이분 그래프에서는 최대 매칭과 크기가 같아 다항시간에 풀린다. [근사 알고리즘](approximation-algorithms.md)의 2-근사, [LP 반올림](lp-rounding.md)(linear programming)의 반정수성, [매개변수 복잡도](parameterized-complexity.md)의 분기와 커널이 모두 이 문제를 첫 예로 쓴다.

# 직관

별 모양 그래프는 가운데 정점 하나가 모든 간선을 덮으므로 $\tau=1$ 이다. 삼각형은 정점 하나가 간선 둘만 덮어 $\tau=2$ 다. 정점 $n$ 개의 경로는 둘째, 넷째, 여섯째 정점을 고르면 되어 $\tau=\lfloor n/2\rfloor$ 다.

덮개가 얼마나 작을 수 있는지는 서로 끝점을 공유하지 않는 간선들로 막힌다. 그런 간선이 $m$ 개 있으면 간선마다 서로 다른 정점이 필요하므로 덮개에는 정점이 $m$ 개 이상 있다. 경로에서는 이 하한이 $\lfloor n/2\rfloor$ 로 정확하고, 삼각형에서는 끝점을 공유하지 않는 간선이 하나뿐이라 하한 $1$ 이 실제 값 $2$ 보다 작다. 하한과 실제 값이 언제 같은지, 다르면 얼마나 다른지가 이 문제의 이론이다.

# 정의

그래프 $G=(V,E)$ 에서 $C\subseteq V$ 가 모든 $uv\in E$ 에 대해 $u\in C$ 또는 $v\in C$ 를 만족하면 정점 덮개다. 정점마다 가중치 $w_v\ge 0$ 이 있으면 가중치의 합을 최소화하는 가중 판본이 된다.

- [매칭](matchings.md)의 크기의 최댓값을 $\nu(G)$ 로 쓰면 직관 절의 하한은 $\nu(G)\le\tau(G)$ 다.
- $C$ 가 정점 덮개인 것은 $V\setminus C$ 의 어느 두 정점도 이웃하지 않는 것, 곧 $V\setminus C$ 가 독립집합인 것과 동치다. 그래서 독립수 $\alpha(G)$ 에 대해 $\alpha(G)+\tau(G)=\lvert V\rvert$ 이다.
- 판정 판본 "크기 $k$ 이하의 정점 덮개가 있는가" 는 Karp 의 21 개 NP-완전 문제 가운데 하나다.

[집합 덮개 문제](set-cover.md)에서 원소를 간선으로, 집합을 정점에 붙은 간선들로 두면 각 원소가 집합 두 개에 들어가는 특수한 경우가 정점 덮개 문제다.

# 성질

## 이분 그래프와 König 정리

이분 그래프에서는 $\nu(G)=\tau(G)$ 다(König 정리). 증명은 최대 매칭에서 교대 경로로 닿는 정점을 따라 같은 크기의 덮개를 만드는 것이고, [네트워크 흐름](network-flow.md)의 최대유량 최소절단 정리로도 얻는다. 그래서 이분 그래프의 정점 덮개는 다항시간에 풀린다.

## 2-근사

극대 매칭 $M$ 을 탐욕적으로 잡고 그 간선의 끝점을 모두 고르면 정점 덮개가 되고 크기는 $2\lvert M\rvert\le 2\nu(G)\le 2\tau(G)$ 다. 가중 판본에서는 선형 완화

$$
\min\ \sum_vw_vx_v\quad\text{s.t.}\quad x_u+x_v\ge 1\ \ \forall uv\in E,\qquad x\ge 0
$$

의 해에서 $x_v\ge 1/2$ 인 정점을 고르거나, [원시-쌍대 방법](primal-dual-method.md)으로 간선마다 두 끝점의 남은 가중치를 함께 깎아 2-근사를 얻는다.

## 반정수성

정리(Nemhauser–Trotter). 위 선형 완화는 모든 좌표가 $0$, $1/2$, $1$ 가운데 하나인 최적해 $x^\ast$ 를 갖는다. 그리고 $x^\ast\_v=1$ 인 정점을 모두 포함하고 $x^\ast\_v=0$ 인 정점을 하나도 포함하지 않는 최소 가중 정점 덮개가 존재한다[^1].

이 정리로 값이 $1$ 인 정점은 넣고 $0$ 인 정점은 지운 뒤 값 $1/2$ 인 정점만 남은 문제를 풀면 된다. 남은 정점이 $2k$ 개보다 많으면 크기 $k$ 이하의 덮개가 없으므로, 정점 $2k$ 개의 커널이 나온다.

## 근사의 한계

| 근사비 | 근거 |
| --- | --- |
| $1.3606$ 미만 불가 | $\mathrm P\ne\mathrm{NP}$ (Dinur–Safra)[^2] |
| $\sqrt 2-\varepsilon$ 불가 | $\mathrm P\ne\mathrm{NP}$, 2-to-2 정리(Khot–Minzer–Safra)[^3] |
| $2-\varepsilon$ 불가 | 유일게임 추측(Khot–Regev)[^4] |

[유일게임 추측과 2-to-2 정리](unique-games.md)가 참이면 극대 매칭의 2-근사가 최선이다. 직관 절의 삼각형을 $K_n$ 으로 키우면 $\nu=\lfloor n/2\rfloor$, $\tau=n-1$ 이라 매칭 하한만으로는 2 보다 나은 근사비를 증명할 수 없다.

## 매개변수 알고리즘

간선 $uv$ 를 골라 $u$ 를 넣는 경우와 $v$ 를 넣는 경우로 나누면 크기 $k$ 의 덮개를 $O(2^kn)$ 시간에 찾는다. 차수에 따라 더 잘게 나누면 $O(1.2738^k+kn)$ 이다. 차수가 $k$ 보다 큰 정점을 먼저 넣는 Buss 커널과 위의 반정수성 커널이 있다.

## 특수한 그래프

- 나무와 [나무폭](treewidth.md)이 작은 그래프에서는 각 정점을 넣는지에 따른 [동적 계획법](dynamic-programming.md)으로 선형 시간에 풀린다.
- [평면 그래프](planar-graphs.md)에서는 B. Baker 의 층 나누기로 $1+\varepsilon$ 근사가 다항시간에 나온다[^5].

# 활용

- 망 감시. 모든 연결을 감시하려면 각 연결의 한쪽 끝에 감시 장치를 두어야 하므로 감시 장치의 최소 수가 정점 덮개 문제다.
- 생물정보학의 충돌 제거. 서로 충돌하는 자료 쌍을 간선으로 두면 가장 적은 자료를 지워 충돌을 없애는 문제가 정점 덮개 문제다.
- 독립집합과 클릭. 여집합과 보그래프로 옮기면 최대 독립집합과 최대 클릭의 정확한 알고리즘이 정점 덮개의 알고리즘과 같아지지만, 근사비는 옮겨지지 않는다.

[^1]: G. L. Nemhauser, L. E. Trotter, "Vertex packings: structural properties and algorithms", Mathematical Programming 8 (1975), 232–248.
[^2]: I. Dinur, S. Safra, "On the hardness of approximating minimum vertex cover", Annals of Mathematics 162 (2005), 439–485.
[^3]: S. Khot, D. Minzer, M. Safra, "Pseudorandom sets in Grassmann graph have near-perfect expansion", Annals of Mathematics 198 (2023), 1–92.
[^4]: S. Khot, O. Regev, "Vertex cover might be hard to approximate to within 2−ε", Journal of Computer and System Sciences 74 (2008), 335–349.
[^5]: B. S. Baker, "Approximation algorithms for NP-complete problems on planar graphs", Journal of the ACM 41 (1994), 153–180.

# 연관 문서

## 선수지식

- [근사 알고리즘](approximation-algorithms.md)
- [매개변수 복잡도](parameterized-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #graph_theory #complexity
