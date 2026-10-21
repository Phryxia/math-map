# 그래프 이론 개관

# 개요

그래프 이론(graph theory)은 정점과 간선만으로 이루어진 구조를 다룬다. 물음은 "연결 관계만 남겼을 때 무엇을 말할 수 있는가" 이고, 답은 세 방향에서 온다. 조합적 논증, 다항시간 알고리즘, 그리고 인접행렬의 스펙트럼이다.

그래프 이론의 갈래는 다섯 줄기다. 기본 구조, 색칠과 매칭, 알고리즘과 최적화, 동형과 구별, 그리고 스펙트럼 그래프 이론이다. 그래프 알고리즘의 계산복잡도 쪽은 [NP-완전성](np-completeness.md)(nondeterministic polynomial time)에, 조합적 세기 쪽은 [조합론 개관](combinatorics-overview.md)에 있다.

시작은 [그래프](graphs.md)다. 거기서 [그래프 색칠](graph-coloring.md)과 [매칭](matchings.md)이 조합적 갈래로, [네트워크 흐름](network-flow.md)이 알고리즘 갈래로, [그래프 Laplacian](graph-laplacian.md)이 스펙트럼 갈래로 갈라진다.

# 지도

```mermaid
graph TD
  ST["집합"] --> GR["그래프"]
  GR --> GS2["그래프 탐색"]
  GR --> DG["위상정렬"]
  GR --> GC["그래프 색칠"]
  GR --> MA["매칭"]
  GR --> NF["네트워크 흐름"]
  GR --> GI["그래프 동형"]
  GR --> GL["그래프 Laplacian"]
  EC["Euler 지표"] --> PG["평면 그래프"]
  GR --> PG
  LP["선형계획법"] --> NF
  GC --> LT["Lovász 세타 함수"]
  LT --> PF["완벽그래프와 강한 완벽그래프 정리"]
  GI --> CR["Color refinement"]
  CR --> GN["그래프 신경망의 표현력"]
  MT["Matroid"] --> MS["최소 신장트리"]
  GL --> ER["유효저항"]
  GL --> EG["Expander 그래프"]
  EV["고윳값"] --> EG
  ER --> SS["스펙트럼 희소화"]
  EG --> RG["Ramanujan 그래프의 명시적 구성"]
```

# 갈래

처음 읽는 사람은 기본 구조를 순서대로 읽는다. 그 뒤는 네 방향으로 갈린다. 색칠과 매칭은 조합적 논증으로, 알고리즘과 최적화는 탐욕 규칙과 흐름으로, 동형과 구별은 라벨을 잊은 동일성의 판정으로, 스펙트럼 그래프 이론은 인접행렬의 고윳값으로 간다.

## 기본 구조

먼저 읽을 것: [집합](sets.md)(기초 개관), [동치관계](equivalence-relations.md)(기초 개관), [부분순서](partial-orders.md)(순서론 개관). 시작 문서: [그래프](graphs.md).

- [그래프](graphs.md): 정점과 간선, 차수, 경로와 연결성
- [그래프 탐색](graph-search.md): DFS(depth-first search)와 BFS(breadth-first search), 탐색 트리와 간선 분류, 강연결성분
- [위상정렬](topological-sort.md): 방향 비순환 그래프(directed acyclic graph, DAG)의 정점을 간선 방향과 맞는 한 줄로 놓는 순서
- [평면 그래프](planar-graphs.md): Euler 공식과 Kuratowski 정리
  - [교차수 부등식](crossing-number-inequality.md): 변이 많을 때 교차수의 세제곱 하한, 무작위 부분그래프 논증
  - [완전그래프의 교차수](complete-graph-crossing-number.md): $\mathrm{cr}(K_n)$ 의 확정값과 Guy 의 그림, 두 번 세기 하한
  - [Sylvester 네 점 문제](sylvester-four-point.md): 무작위 네 점이 볼록 위치일 확률, Blaschke 의 극값과 직선 교차수의 점근 상수
- [그래프 마이너](graph-minors.md): 정렬 유사 순서와 유한 금지 마이너
- [나무폭](treewidth.md): 주머니로 묶은 나무 분해, 마이너 단조성, 주머니 단위 동적 계획법
  - [경로폭](pathwidth.md): 주머니를 한 줄로 늘어놓은 분해의 폭, 구간 그래프와 정점 탐색 수와의 일치
  - [가지폭](branchwidth.md): 간선 집합의 가르기로 재는 폭, 나무폭과의 상수배 관계와 평면 그래프의 쌍대성
- [Hamilton 순환](hamiltonian-cycles.md): Dirac 과 Ore 의 차수 조건, 닫힘, 판정의 NP-완전성

## 색칠과 매칭

먼저 읽을 갈래: 기본 구조. 먼저 읽을 것: [셈의 기본 원리](counting-principles.md)(조합론 개관), [비둘기집 원리](pigeonhole-principle.md)(조합론 개관). 시작 문서: [그래프 색칠](graph-coloring.md).

- [그래프 색칠](graph-coloring.md): 채색수, 탐욕 상한, 4색 정리
  - [Tutte 다항식](tutte-polynomial.md): 채색 다항식과 신장트리 개수를 함께 거두는 두 변수 불변량
- [매칭](matchings.md): 이분그래프의 완전매칭 조건
- [완벽그래프와 강한 완벽그래프 정리](perfect-graphs.md): 채색수와 클릭 수가 모든 유도부분그래프에서 같은 그래프

## 알고리즘과 최적화

먼저 읽을 갈래: 기본 구조. 시작 문서: [최소 신장트리](minimum-spanning-tree.md).

- [최소 신장트리](minimum-spanning-tree.md): 탐욕 알고리즘이 최적해를 주는 독립성 구조
- [네트워크 흐름](network-flow.md): 흐름의 최댓값과 절단의 최솟값이 같다

## 동형과 구별

먼저 읽을 갈래: 기본 구조. 시작 문서: [그래프 동형](graph-isomorphism.md).

- [그래프 동형](graph-isomorphism.md): 라벨을 잊은 동일성과 그 판정 문제
- [Color refinement](color-refinement.md): 1차원 Weisfeiler–Leman 알고리즘과 그 한계
- [그래프 신경망의 표현력](gnn-expressivity.md): 메시지 전달 신경망의 구별력이 색 세분과 같다

## 스펙트럼 그래프 이론

먼저 읽을 갈래: 기본 구조. 먼저 읽을 것: [고윳값](eigenvalues.md)(선형대수 개관), [유한 확률 공간](probability.md)(확률 개관). 시작 문서: [그래프 Laplacian](graph-laplacian.md).

- [그래프 Laplacian](graph-laplacian.md): 차수행렬과 인접행렬의 차, 고윳값과 연결성분
- [유효저항](effective-resistance.md): 간선을 저항으로 둔 회로의 두 정점 사이 저항, Laplacian 의 유사역행렬로 적은 값
  - [스펙트럼 희소화](spectral-sparsification.md): 유효저항에 비례한 표본추출로 이차형식을 보존하며 간선 수를 줄인다
- [Expander 그래프](expander-graphs.md): 성김과 강한 연결성의 공존
  - [Ramanujan 그래프의 명시적 구성](ramanujan-graphs.md): 스펙트럼 간극의 최적 경계를 달성하는 구성

# 연관 문서

## 선수지식

- [집합](sets.md)

## 더 알아보기

- [그래프](graphs.md)
- [최소 신장트리](minimum-spanning-tree.md)
- [완벽그래프와 강한 완벽그래프 정리](perfect-graphs.md)

#graph_theory #combinatorics #algorithms #overview
