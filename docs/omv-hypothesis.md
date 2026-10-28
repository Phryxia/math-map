# OMv 가설

# 개요

**OMv 가설(online matrix-vector multiplication hypothesis, OMv conjecture)** 은 $n\times n$ 부울 행렬(Boolean matrix) $M$ 을 미리 받고, 벡터 $v_1,\dots,v_n$ 이 하나씩 도착할 때마다 다음 벡터를 보기 전에 $Mv_i$ 를 내놓는 문제를 전체 $n^{3-\varepsilon}$ 시간에 푸는 알고리즘이 없다는 가설이다. 간선을 넣고 빼면서 두 정점의 거리를 묻는 자료구조는 질의마다 탐색하면 질의가 느리고, 갱신마다 거리를 다시 계산해 두면 갱신이 느리다. 이 가설을 받아들이면 그런 자료구조가 갱신과 질의를 함께 빠르게 할 수 없다는 조건부 하한이 나온다.

# 직관

그래프에서 간선을 넣고 빼면서 두 정점 $s,t$ 의 거리를 묻는 자료구조를 만든다. 정점이 $n$ 개이면 질의마다 너비 우선 탐색을 하는 방법은 질의 시간이 $O(n^2)$ 이고 갱신 시간이 $O(1)$ 이다. 갱신마다 거리를 다시 계산해 두는 방법은 갱신 시간이 $O(n^2)$ 이고 질의 시간이 $O(1)$ 이다. 두 시간을 함께 줄이는 방법을 찾는다.

행렬 $M$ 의 $1$ 인 성분 $(i,j)$ 마다 왼쪽 정점 $i$ 와 오른쪽 정점 $j$ 를 잇는 그래프를 만든다. 벡터 $u$ 와 $v$ 가 오면 $u_i=1$ 인 왼쪽 정점을 $s$ 에, $v_j=1$ 인 오른쪽 정점을 $t$ 에 잇는다. 그러면 $s$ 와 $t$ 의 거리가 $3$ 인 것은 $u_i=M_{ij}=v_j=1$ 인 $i,j$ 가 있는 것, 곧 $u^{\mathsf T}Mv=1$ 인 것과 같다. 답을 얻으면 넣은 간선을 다시 뺀다.

벡터 쌍 하나에 갱신이 $O(n)$ 번, 질의가 한 번이다. 쌍이 $n$ 개이면 갱신이 $O(n^2)$ 번, 질의가 $n$ 번이다. 갱신 시간이 $n^{1-\varepsilon}$, 질의 시간이 $n^{2-\varepsilon}$ 이면 전체가 $n^{3-\varepsilon}$ 이 되어, 쌍이 하나씩 들어오는 $u^{\mathsf T}Mv$ 계산을 $n^3$ 보다 빨리 하게 된다. OMv 가설은 이것이 불가능하다고 가정한다.

이 가설은 M. Henzinger, S. Krinninger, D. Nanongkai, T. Saranurak 가 2015 년에 내놓았다[^1]. [세분 복잡도](fine-grained-complexity.md)의 다른 가설과 달리 질의가 하나씩 들어오는 상황을 겨냥한다.

# 정의

## OMv 문제

**OMv 문제(online matrix-vector multiplication problem)** 의 입력은 $n\times n$ 부울 행렬 $M$ 과 차례로 도착하는 부울 벡터 $v_1,\dots,v_n\in\lbrace 0,1\rbrace^n$ 이다. 알고리즘은 $v_i$ 를 받은 뒤 $v_{i+1}$ 을 받기 전에 부울 곱 $Mv_i$ 를 내놓아야 한다. 부울 곱의 성분은 $(Mv)\_j=\bigvee_kM_{jk}\wedge v_k$ 다.

## 가설

OMv 가설. 임의의 $\varepsilon\gt 0$ 에 대해, $M$ 의 다항시간 전처리를 허용해도 OMv 문제를 전체 $O(n^{3-\varepsilon})$ 시간에 푸는 무작위 알고리즘이 없다.

## OuMv 문제

**OuMv 문제(online vector-matrix-vector multiplication problem)** 는 $M$ 을 미리 받고 벡터 쌍 $(u_1,v_1),\dots,(u_n,v_n)$ 이 하나씩 도착할 때 다음 쌍을 받기 전에 비트 $u_i^{\mathsf T}Mv_i$ 를 내놓는 문제다. 답이 한 비트이므로 동적 자료구조의 질의 하나로 옮기기 쉽다.

# 성질

## 자명한 알고리즘과 개선

벡터마다 $M$ 의 $n^2$ 성분을 훑으면 전체 $O(n^3)$ 이다. 벡터를 모두 미리 알면 행렬곱 한 번으로 $O(n^\omega)$ 에 끝나지만, 벡터가 하나씩 오므로 빠른 행렬곱을 쓸 수 없다.

정리(Larsen–Williams). OMv 문제는 전체 $n^3/2^{\Omega(\sqrt{\log n})}$ 시간에 풀린다[^2].

이 개선은 지수를 줄이지 않으므로 가설과 어긋나지 않는다.

## OuMv 로의 환원

정리(Henzinger–Krinninger–Nanongkai–Saranurak). OMv 가설이 참이면 OuMv 문제도 전체 $O(n^{3-\varepsilon})$ 시간에 풀 수 없다[^1].

증명의 요지. $Mv$ 의 성분 $(Mv)\_j$ 하나는 $e_j^{\mathsf T}Mv$ 이므로 OuMv 질의 $n$ 번으로 나온다. 이것만으로는 $n^2$ 배가 들어 시간이 맞지 않으므로, $M$ 을 작은 블록으로 나누고 각 블록에서 $1$ 인 성분을 이분 탐색으로 찾아 질의 횟수를 답의 $1$ 의 개수에 비례하게 줄인다.

## 동적 문제의 하한

정리. OMv 가설이 참이면, 간선 삽입과 삭제를 받고 두 고정 정점 $s,t$ 의 거리를 답하는 자료구조는 다항시간 전처리를 허용해도 갱신 시간 $O(n^{1-\varepsilon})$ 과 질의 시간 $O(n^{2-\varepsilon})$ 을 함께 달성하지 못한다[^1].

직관 절의 환원이 증명이다. 같은 방식으로 Henzinger 등은 켜고 끌 수 있는 정점들 사이의 연결 질의(subgraph connectivity)와 동적 $s$-$t$ [최단경로](shortest-paths.md) 같은 문제에 하한을 얻었고, 여러 문제에서 그 하한이 알려진 알고리즘의 시간과 일치한다[^1].

# 활용

- 동적 자료구조의 하한. [동적 연결성](dynamic-connectivity.md)처럼 갱신과 질의가 번갈아 오는 문제에서, 갱신 시간과 질의 시간의 곱이나 합에 대한 조건부 하한을 이 가설로 증명한다.
- 온라인 판본과 오프라인 판본의 구별. 같은 문제라도 질의를 미리 모두 받으면 빠른 행렬곱으로 지수를 줄이고, 하나씩 받으면 이 가설 아래 줄일 수 없다는 비교에 쓴다.

[^1]: M. Henzinger, S. Krinninger, D. Nanongkai, T. Saranurak, "Unifying and strengthening hardness for dynamic problems via the online matrix-vector multiplication conjecture", Proceedings of the 47th ACM Symposium on Theory of Computing (2015), 21–30.
[^2]: K. G. Larsen, R. Williams, "Faster online matrix-vector multiplication", Proceedings of the 28th ACM–SIAM Symposium on Discrete Algorithms (2017), 2182–2189.

# 연관 문서

## 선수지식

- [세분 복잡도](fine-grained-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #algorithms #data_structures
