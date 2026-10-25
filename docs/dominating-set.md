# 지배 집합 문제

# 개요

**지배 집합(dominating set)** 은 그래프의 모든 정점이 그 집합에 속하거나 그 집합의 정점과 이웃하게 하는 정점 집합이다. 크기가 가장 작은 지배 집합을 찾는 문제가 **지배 집합 문제(dominating set problem)** 이고, 최소 크기를 **지배수(domination number)** $\gamma(G)$ 라 한다. 정점마다 자신과 이웃의 집합을 하나의 집합으로 보면 [집합 덮개 문제](set-cover.md)가 되어 탐욕 알고리즘이 $\ln n$ 근사를 주고, 이 로그 인자는 개선되지 않는다. [매개변수 복잡도](parameterized-complexity.md)에서는 크기 $k$ 의 지배 집합 판정이 $\mathrm W\lbrack 2\rbrack$-완전이다.

# 직관

정점 $n$ 개의 경로에서 정점 하나는 자신과 양옆 둘, 모두 셋을 지배한다. 그래서 둘째, 다섯째, 여덟째처럼 세 칸마다 고르면 $\lceil n/3\rceil$ 개로 충분하고, 더 적게는 안 된다. 별 모양 그래프는 가운데 정점 하나로 지배된다.

[정점 덮개](vertex-cover.md)는 간선을 덮고 지배 집합은 정점을 덮는다. 고립점이 없는 그래프에서 정점 덮개는 지배 집합이므로 $\gamma(G)\le\tau(G)$ 다. 덮어야 할 대상이 정점 하나와 그 이웃 전체로 묶여 있어서, 간선 하나를 골라 두 경우로 나누는 정점 덮개의 분기 방법은 여기서 통하지 않는다.

# 정의

그래프 $G=(V,E)$ 에서 정점 $v$ 의 닫힌 이웃을 $N\lbrack v\rbrack=\lbrace v\rbrace\cup\lbrace u:uv\in E\rbrace$ 로 쓴다. $D\subseteq V$ 가 $\bigcup_{v\in D}N\lbrack v\rbrack=V$ 를 만족하면 지배 집합이다.

- 집합 덮개로 쓰면 전체집합이 $V$ 이고 집합들이 $N\lbrack v\rbrack$ 들이다.
- 거꾸로 집합 덮개는 지배 집합으로 옮겨진다. 원소마다 정점을 두고 집합마다 정점을 두어, 집합 정점들을 서로 모두 잇고 집합 정점을 그 원소 정점과 잇는다. 집합 정점만으로 된 지배 집합이 덮개와 대응한다.
- 판정 판본 "크기 $k$ 이하의 지배 집합이 있는가" 는 NP-완전(nondeterministic polynomial time)이다.

# 성질

## 근사

집합 덮개의 탐욕 알고리즘을 쓰면 최대 차수가 $\Delta$ 인 그래프에서 $H_{\Delta+1}\le 1+\ln(\Delta+1)$ 근사가 나온다. 위의 거꾸로 가는 환원은 근사비를 보존하므로, 집합 덮개의 근사 하한이 그대로 옮겨져 $(1-\varepsilon)\ln n$ 근사는 $\mathrm P=\mathrm{NP}$ 를 함의한다.

## 매개변수 하한

정리(Downey–Fellows). 크기 $k$ 의 지배 집합 판정은 $\mathrm W\lbrack 2\rbrack$-완전이다[^1].

$\mathrm{FPT}\ne\mathrm W\lbrack 2\rbrack$ 이면 $f(k)n^{O(1)}$ 시간 알고리즘이 없다. [지수 시간 가설](exponential-time-hypothesis.md)(exponential time hypothesis, ETH)을 가정하면 $f(k)n^{o(k)}$ 시간에도 풀리지 않는다. 정점 $k$ 개를 모두 시도하는 $n^{k+1}$ 꼴의 방법이 지수의 차수에서 최적이다.

## 특수한 그래프

- 나무와 [나무폭](treewidth.md)이 작은 그래프에서는 각 정점이 집합에 들었는지, 이미 지배되었는지, 아직 지배되지 않았는지의 세 상태를 쓰는 [동적 계획법](dynamic-programming.md)으로 선형 시간에 풀린다.
- [평면 그래프](planar-graphs.md)에서는 크기 $k$ 의 지배 집합이 있으면 나무폭이 $O(\sqrt k)$ 이하라서 $2^{O(\sqrt k)}n$ 시간에 풀린다. 이 지수는 ETH 아래에서 최적이다.
- 정점 $n$ 개, 최소 차수 $\delta$ 인 그래프에서 무작위로 정점을 고르고 지배되지 않은 정점을 더하는 [확률적 방법](probabilistic-method.md)은 $\gamma(G)\le n\frac{1+\ln(\delta+1)}{\delta+1}$ 을 준다.

## 변형

- **연결 지배 집합(connected dominating set).** 지배 집합이 연결된 부분그래프를 이뤄야 한다. 무선망의 중계 노드 선택이 이 꼴이다.
- **독립 지배 집합(independent dominating set).** 지배 집합이 독립집합이어야 한다. 극대 독립집합과 같은 개념이다.
- [k-중심 문제](k-center.md)의 판정 판본은 거리 $r$ 이하인 점을 이은 그래프의 지배 집합 문제다.

# 활용

- 망의 감시와 중계. 모든 노드가 감시 장치나 중계 노드에 한 걸음 안에 닿게 하려면 그 장치의 위치가 지배 집합이다.
- k-중심 문제의 근사 하한. 지배 집합을 거리 $1$ 과 $2$ 의 거리 공간으로 옮겨 $2-\varepsilon$ 근사의 불가능성을 증명한다.
- 매개변수 하한의 출발점. $\mathrm W\lbrack 2\rbrack$-완전 문제로서, 다른 문제의 W[2]-어려움을 보이는 환원의 출발점으로 쓰인다.

[^1]: R. G. Downey, M. R. Fellows, "Fixed-parameter tractability and completeness I: basic results", SIAM Journal on Computing 24 (1995), 873–921.

# 연관 문서

## 선수지식

- [집합 덮개 문제](set-cover.md)
- [매개변수 복잡도](parameterized-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #graph_theory #complexity
