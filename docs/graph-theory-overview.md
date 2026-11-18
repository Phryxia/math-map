# 그래프 이론 개관

# 개요

그래프 이론(graph theory)은 점들과, 그 가운데 어느 두 점이 이어져 있는지만 남긴 구조를 다루는 분야다. 지하철 노선도에서 두 역 사이를 가장 적은 정거장으로 가는 길을 찾는 문제, 시험 시간표에서 같은 학생이 듣는 두 과목을 같은 시간에 놓지 않는 문제가 이 꼴이다. 역이나 과목을 점으로, 바로 이웃한 역이나 함께 듣는 학생이 있는 과목을 선으로 그리면 문제가 그림 하나로 적히고, 그 그림의 연결 구조만으로 답이 나온다.

처음 읽는 사람은 [그래프](graphs.md)에서 시작한다.

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
  - [König 보조정리](konig-lemma.md): 자식이 유한 개인 무한 나무에 끝없는 가지가 있다는 정리, 유한 부분의 칠하기를 마디로 하는 나무, 차수가 유한한 연결 무한 그래프의 무한한 길, 곱공간의 콤팩트성, ACA₀ 와의 동치
  - [Cayley 공식](cayley-formula.md): 이름 붙은 나무가 nⁿ⁻² 개라는 정리, Prüfer 부호와 차수 분포
- [그래프 탐색](graph-search.md): DFS(depth-first search)와 BFS(breadth-first search), 탐색 트리와 간선 분류, 강연결성분
- [위상정렬](topological-sort.md): 방향 비순환 그래프(directed acyclic graph, DAG)의 정점을 간선 방향과 맞는 한 줄로 놓는 순서
  - [강연결성분](strongly-connected-components.md): 서로 오갈 수 있는 정점의 동치류와 그 응축이 DAG 라는 정리, 종료 시각으로 성분의 순서를 정하는 Kosaraju 알고리즘과 DFS 한 번의 Tarjan 알고리즘, 2-SAT 판정
- [평면 그래프](planar-graphs.md): Euler 공식과 Kuratowski 정리
  - [교차수 부등식](crossing-number-inequality.md): 변이 많을 때 교차수의 세제곱 하한, 무작위 부분그래프 논증
  - [완전그래프의 교차수](complete-graph-crossing-number.md): $\mathrm{cr}(K_n)$ 의 확정값과 Guy 의 그림, 두 번 세기 하한
  - [Steinitz 정리](steinitz-theorem.md): 3 차원 볼록 다면체의 그래프가 3-연결 평면 그래프와 같다는 정리, Schlegel 도형과 Balinski 정리, Δ–Y 변환과 원 채움에 의한 실현
  - [Sylvester 네 점 문제](sylvester-four-point.md): 무작위 네 점이 볼록 위치일 확률, Blaschke 의 극값과 직선 교차수의 점근 상수
- [그래프 마이너](graph-minors.md): 정렬 준순서와 유한 금지 마이너
- [나무폭](treewidth.md): 주머니로 묶은 나무 분해, 마이너 단조성, 주머니 단위 동적 계획법
  - [경로폭](pathwidth.md): 주머니를 한 줄로 늘어놓은 분해의 폭, 구간 그래프와 정점 탐색 수와의 일치
  - [가지폭](branchwidth.md): 간선 집합의 가르기로 재는 폭, 나무폭과의 상수배 관계와 평면 그래프의 쌍대성
- [Hamilton 순환](hamiltonian-cycles.md): Dirac 과 Ore 의 차수 조건, 닫힘, 판정의 NP-완전성
  - [그래프 강인성](graph-toughness.md): 지운 정점 수와 남은 조각 수의 비의 최솟값, Hamilton 그래프의 1 강인성과 Chvátal 의 강인성 추측, 완전 매칭과 k 인자의 충분조건
- [Euler 회로](eulerian-circuits.md): 모든 변을 한 번씩 지나는 닫힌 걸음이 모든 차수가 짝수인 것과 동치라는 Euler 정리, Hierholzer 알고리즘과 유향 Euler 회로의 개수 공식
  - [de Bruijn 수열](de-bruijn-sequences.md): 길이 n 인 문자열을 모두 한 번씩 담는 길이 kⁿ 의 순환 수열, de Bruijn 그래프의 Euler 회로와 개수 공식, Lyndon 단어와 최대 길이 수열

## 색칠과 매칭

먼저 읽을 갈래: 기본 구조. 먼저 읽을 것: [셈의 기본 원리](counting-principles.md)(조합론 개관), [비둘기집 원리](pigeonhole-principle.md)(조합론 개관). 시작 문서: [그래프 색칠](graph-coloring.md).

- [그래프 색칠](graph-coloring.md): 채색수, 탐욕 상한, 4색 정리
  - [그래프 퇴화도](graph-degeneracy.md): 모든 부분그래프에 차수 d 이하의 정점이 있는 가장 작은 d, 최소 차수 제거 순서의 선형 시간 계산, k-핵, 수목도와의 부등식
  - [Tutte 다항식](tutte-polynomial.md): 채색 다항식과 신장트리 개수를 함께 거두는 두 변수 불변량
  - [목록 색칠](list-coloring.md): 정점마다 허용된 색의 목록 안에서 칠하는 색칠과 선택수, Alon–Tarsi 정리와 평면 그래프의 Thomassen 5 선택 가능성, 이분그래프 간선의 Galvin 정리
  - [그래프 준동형](graph-homomorphisms.md): 이웃을 이웃으로 보내는 정점 사상, 색칠과 독립집합을 준동형 수로 세는 H 색칠, 핵, Hell–Nešetřil 이분법, 준동형 수로 정해지는 그래프와 준동형 밀도
    - [그래프의 핵](graph-cores.md): 자기 준동형이 모두 전단사인 그래프, 핵의 존재와 유일성, 이분그래프의 핵 K₂ 와 홀수 고리의 사슬, 서로소 합과 곱이 상계와 하계인 준동형 순서, Welzl 의 조밀성, Hedetniemi 추측의 반례
- [de Bruijn–Erdős 정리](de-bruijn-erdos-theorem.md): 모든 유한 부분그래프가 k 색으로 칠해지면 무한 그래프 전체가 k 색으로 칠해진다는 정리, Tychonoff 정리와 콤팩트성 증명, 선택 원리의 역할
  - [평면의 채색수](chromatic-number-of-the-plane.md): 거리 1 인 두 점이 다른 색을 받는 평면 색칠의 최소 색 수, Moser 방추의 하한 4 와 육각형 무늬의 상한 7, de Grey 의 하한 5
- [매칭](matchings.md): 이분그래프의 완전매칭 조건
  - [Tutte 정리](tutte-theorem.md): 정점을 지운 뒤 남는 홀수 성분의 수로 완전 매칭의 존재를 판정하는 정리, 최대 매칭 크기의 Tutte–Berge 공식과 Petersen 정리
  - [안정 매칭](stable-matching.md): 서로를 지금 짝보다 좋아하는 두 사람이 없는 짝짓기, Gale–Shapley 의 지연 수락 알고리즘과 청혼하는 쪽의 최적성, 안정 매칭의 격자
- [완벽그래프와 강한 완벽그래프 정리](perfect-graphs.md): 채색수와 클릭 수가 모든 유도부분그래프에서 같은 그래프

## 알고리즘과 최적화

먼저 읽을 갈래: 기본 구조. 먼저 읽을 것: [유한 확률 공간](probability.md)(확률 개관). 시작 문서: [최소 신장트리](minimum-spanning-tree.md).

- [최소 신장트리](minimum-spanning-tree.md): 탐욕 알고리즘이 최적해를 주는 독립성 구조
  - [유향 신장트리](arborescences.md): 뿌리에서 모든 정점으로 경로가 하나씩 있는 호의 집합, 순환을 줄이는 Chu–Liu/Edmonds 최소 비용 알고리즘과 Edmonds 가지 정리
- [Steiner 나무 문제](steiner-tree-problem.md): 단말 밖의 정점을 지나도 되는 최소 비용 연결 나무, 거리 폐포의 2-근사와 Dreyfus–Wagner 동적 계획법, Euclid 판본의 120° 조건
  - [Steiner 비](steiner-ratio.md): 최소 Steiner 나무와 최소 신장트리의 길이의 비의 하한, 일반 거리의 1/2 와 직교 거리의 2/3, 정삼각형의 √3/2 와 Gilbert–Pollak 추측
- [네트워크 흐름](network-flow.md): 흐름의 최댓값과 절단의 최솟값이 같다
  - [최소 비용 흐름](min-cost-flow.md): 정한 양을 보내는 흐름 가운데 비용 합이 최소인 것, 잔여 그래프의 음수 순환 조건과 퍼텐셜 조건, 연속 최단 경로법과 꺾은선 비용 함수, 수송 문제와 할당 문제
    - [할당 문제](assignment-problem.md): 비용 표에서 행과 열마다 하나씩 골라 합을 최소화하는 짝짓기, 행과 열의 빼기로 얻는 쌍대 하한과 등식 부분그래프, 헝가리안 방법과 덮개 갱신의 정당성, 최소 비용 흐름과의 대응. 매칭을 먼저 읽는다
    - [네트워크 단체법](network-simplex-method.md): 신장 트리 위의 흐름에서 트리 밖 간선 하나를 넣고 순환의 간선 하나를 빼는 피벗, 기저와 신장 트리의 대응, 트리 퍼텐셜의 축소 비용과 순환 비용, 강허용 트리. 단체법(최적화 개관)을 먼저 읽는다
  - [Hoffman 순환 정리](hoffman-circulation-theorem.md): 간선마다 하한과 상한이 있을 때 모든 정점에서 유입과 유출이 같은 흐름이 존재할 조건, 정점 묶음마다 들어와야 하는 양과 나갈 수 있는 양의 비교, 최대 흐름 환원과 정수성, Gale 의 공급-수요 정리
- [Menger 정리](menger-theorem.md): 두 정점 사이의 내부 서로소 경로의 최대 개수와 분리 집합의 최소 크기가 같다는 정리, 흐름으로 하는 증명, Whitney 의 k 연결 판정과 부채 보조정리
  - [Gomory–Hu 나무](gomory-hu-tree.md): 모든 정점 쌍의 최소 절단을 경로의 가장 가벼운 간선으로 담는 나무, 세 정점의 최소 절단 부등식, 최대 흐름 n − 1 번의 구성과 Gusfield 판본, 매칭 다면체의 분리 문제
  - [Karger 축약 알고리즘](karger-min-cut.md): 무작위 간선을 축약해 전역 최소 절단을 찾는 알고리즘, 성공 확률 1/C(n,2) 와 최소 절단 개수의 상한, Karger–Stein 재귀
  - [Stoer–Wagner 알고리즘](stoer-wagner-algorithm.md): 최대 인접 순서의 마지막 두 정점에서 최소 절단을 얻고 두 정점을 합치기를 n − 1 번 되풀이하는 결정적 전역 최소 절단 알고리즘
- [귀 분해](ear-decomposition.md): 순환에서 시작해 경로를 하나씩 붙이는 분해, 2 연결과 열린 귀 분해의 동치(Whitney), 간선 2 연결과 Robbins 의 강한 방향 정리, 깊이 우선 탐색의 사슬 분해
  - [Gallai–Edmonds 분해](gallai-edmonds-decomposition.md): 최대 매칭이 덮지 않을 수 있는 정점과 그 이웃과 나머지로 나눈 분해, 인수 임계 성분과 Tutte–Berge 공식의 최댓값, Gallai 보조정리와 홀수 귀 분해
  - [블록-절단점 나무](block-cut-tree.md): 절단점 없는 극대 부분그래프와 절단점을 이은 나무, 두 블록이 공유하는 정점은 하나 이하, 깊이 우선 탐색의 low 값으로 하는 선형 시간 계산
- [Chvátal–Erdős 정리](chvatal-erdos-theorem.md): 연결도가 독립수 이상이면 Hamilton 순환이 있다는 정리, 가장 긴 순환과 부채 보조정리

## 동형과 구별

먼저 읽을 갈래: 기본 구조. 시작 문서: [그래프 동형](graph-isomorphism.md).

- [그래프 동형](graph-isomorphism.md): 라벨을 잊은 동일성과 그 판정 문제
- [Color refinement](color-refinement.md): 1차원 Weisfeiler–Leman 알고리즘과 그 한계
- [그래프 신경망의 표현력](gnn-expressivity.md): 메시지 전달 신경망의 구별력이 색 세분과 같다

## 스펙트럼 그래프 이론

먼저 읽을 갈래: 기본 구조. 먼저 읽을 것: [고윳값](eigenvalues.md)(선형대수 개관), [유한 확률 공간](probability.md)(확률 개관), [회의 행렬](conference-matrices.md)(조합론 개관), [Ramsey 이론](ramsey-theory.md)(조합론 개관). 시작 문서: [그래프 Laplacian](graph-laplacian.md).

- [그래프 Laplacian](graph-laplacian.md): 차수행렬과 인접행렬의 차, 고윳값과 연결성분
  - [행렬-트리 정리](matrix-tree-theorem.md): 한 행과 열을 지운 Laplacian 의 행렬식이 신장트리의 개수라는 정리, 고윳값 곱으로 쓴 꼴, 유향 판본
- [유효저항](effective-resistance.md): 간선을 저항으로 둔 회로의 두 정점 사이 저항, Laplacian 의 유사역행렬로 적은 값
  - [스펙트럼 희소화](spectral-sparsification.md): 유효저항에 비례한 표본추출로 이차형식을 보존하며 간선 수를 줄인다
- [Expander 그래프](expander-graphs.md): 성김과 강한 연결성의 공존
  - [Ramanujan 그래프의 명시적 구성](ramanujan-graphs.md): 스펙트럼 간극의 최적 경계를 달성하는 구성
- [초입방체 그래프](hypercube-graphs.md): 한 비트만 다른 이진 문자열을 이은 그래프, 반사 Gray 부호의 Hamilton 순환, 지표 벡터로 얻는 고윳값 n − 2i, 간선 등주 부등식, 정점 절반 하나 더의 유도 부분그래프에서 최대 차수 √n
- [Petersen 그래프](petersen-graph.md): 다섯 원소의 두 원소 부분집합을 서로소일 때 이은 3-정규 그래프, 둘레 5 와 지름 2, 간선을 세 색으로 칠할 수 없고 Hamilton 순환이 없는 가장 작은 반례
- [강정칙 그래프](strongly-regular-graphs.md): 공통 이웃 수가 이웃 여부로만 정해지는 그래프, 인접행렬의 세 고윳값과 중복도의 정수성, 지름 2 의 Moore 그래프가 차수 2, 3, 7, 57 에서만 가능하다는 Hoffman–Singleton 정리, 회의 그래프와 회의 행렬
  - [Paley 그래프](paley-graphs.md): 유한체에서 차가 제곱수인 원소를 이은 자기 여그래프, 17 정점에서 얻는 R(4,4) ≥ 18, 회의 그래프의 매개변수와 Gauss 합으로 얻는 고윳값, 클릭 수의 √q 상한, 간선의 고른 분포
  - [거리 정칙 그래프](distance-regular-graphs.md): 어느 정점에서 보아도 거리별 층과 층 사이 이웃 수가 같은 그래프, 교차 배열과 층의 크기, 거리 행렬의 점화식, 삼중대각 행렬로 얻는 d + 1 개의 고윳값과 Biggs 의 중복도 공식, 지름 3 이상의 Moore 그래프의 비존재
    - [Johnson 그래프](johnson-graphs.md): k 원소 부분집합을 원소 하나 바꾸기로 이은 그래프, 원소를 바꾸는 수로 정해지는 교차 배열, 고윳값 (k−j)(n−k−j)−j, Kneser 그래프와의 관계
- [Hoffman 비율 한계](hoffman-ratio-bound.md): 정칙 그래프의 독립수를 가장 큰 고윳값과 가장 작은 고윳값으로 막는 부등식, Petersen 그래프의 4

# 연관 문서

## 선수지식

- [집합](sets.md)

## 더 알아보기

- [그래프](graphs.md)
- [최소 신장트리](minimum-spanning-tree.md)
- [완벽그래프와 강한 완벽그래프 정리](perfect-graphs.md)

#graph_theory #combinatorics #algorithms #overview
