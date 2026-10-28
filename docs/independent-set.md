# 독립집합 문제

# 개요

**독립집합(independent set)** 은 그래프에서 어느 두 정점도 간선으로 이어지지 않은 정점 집합이다. 과목을 정점으로 두고 함께 듣는 학생이 있는 두 과목을 간선으로 이으면, 한 시간대에 함께 시험을 치를 수 있는 과목들이 독립집합이다. 한 시간대에 과목을 가장 많이 넣는 문제는 가장 큰 독립집합을 찾는 문제이고, 정점이 많은 그래프에서는 [근사 알고리즘](approximation-algorithms.md)과 특수한 그래프에서의 알고리즘으로 다룬다.

# 직관

독립집합은 그래프에서 어느 두 정점도 서로 이웃하지 않는 정점 집합이다. 가장 큰 독립집합의 크기를 **독립수(independence number)** $\alpha(G)$ 라 하고, $\alpha(G)$ 를 구하거나 크기 $k$ 의 독립집합이 있는지 판정하는 문제를 **독립집합 문제(independent set problem)** 라 한다. 독립집합은 보그래프의 클릭이고 정점 덮개의 여집합이므로, 판정 판본은 [클릭 문제](clique-problem.md)와 [정점 덮개 문제](vertex-cover.md)처럼 NP(nondeterministic polynomial time)-완전이다. 근사의 어려움은 클릭 문제의 $n^{1-\varepsilon}$ 하한을 그대로 따르고, 정점 덮개의 2-근사는 옮겨지지 않는다.

시험 시간표를 짠다. 과목을 정점으로 두고, 두 과목을 함께 듣는 학생이 있으면 두 정점을 간선으로 잇는다. 한 시간대에 함께 시험을 치를 수 있는 과목들은 서로 이웃하지 않는 정점들이다. 한 시간대에 과목을 가장 많이 넣으려면 서로 이웃하지 않는 정점을 가장 많이 골라야 한다.

정점을 하나 고르면 그 이웃은 더 고를 수 없으니 지운다. 별 모양 그래프에서 가운데 정점을 먼저 고르면 나머지가 전부 지워져 정점 하나에서 끝난다. 가장자리 정점을 먼저 고르면 가운데 정점만 지워지고 가장자리 $n-1$ 개를 모두 고른다. 그래서 매번 이웃이 가장 적은 정점을 고른다.

이 방법이 몇 개를 고르는지는 한 번에 지우는 정점 수로 정해진다. 모든 정점의 이웃이 $d$ 개 이하이면 한 번 고를 때 많아야 $d+1$ 개가 지워지므로, 정점 $n$ 개 가운데 $n/(d+1)$ 개 이상을 고른다. 서로 모두 이어진 정점 $d+1$ 개의 덩어리를 여러 개 늘어놓으면 덩어리마다 하나밖에 고를 수 없으므로, 이 수보다 많이 고르는 것을 보장할 수는 없다.

# 정의

그래프 $G=(V,E)$ 에서 $S\subseteq V$ 의 어느 두 정점 $u,v$ 에 대해서도 $uv\notin E$ 이면 $S$ 를 독립집합이라 한다. 안정집합(stable set)이라고도 한다. 더 큰 독립집합에 포함되지 않는 독립집합을 **극대 독립집합(maximal independent set)** 이라 하고, 크기가 $\alpha(G)$ 인 독립집합을 **최대 독립집합(maximum independent set)** 이라 한다.

- 정점마다 가중치 $w_v\ge 0$ 이 있으면 가중치의 합을 최대화하는 가중 판본이 된다.
- 보그래프(complement graph) $\overline G$ 에서 $S$ 는 클릭이므로 $\alpha(G)=\omega(\overline G)$ 다.
- $V\setminus S$ 는 정점 덮개이므로 $\alpha(G)=\lvert V\rvert-\tau(G)$ 다.

정수계획으로 쓰면 다음과 같다.

$$
\alpha(G)=\max\thinspace\sum_v x_v\quad\text{s.t.}\quad x_u+x_v\le 1\quad\forall uv\in E,\qquad x\in\lbrace 0,1\rbrace^V
$$

정수해의 볼록 껍질과 정수 조건을 푼 다면체의 차이는 [안정집합 다면체](stable-set-polytope.md)에서 다룬다.

# 성질

## Caro–Wei 하한

정리(Caro–Wei). 정점 $v$ 의 차수를 $d(v)$ 라 하면 다음이 성립한다[^1][^2].

$$
\alpha(G)\ge\sum_{v\in V}\frac{1}{d(v)+1}
$$

증명의 요지. 정점을 무작위 순서로 늘어놓고, 자기 이웃 모두보다 앞에 오는 정점을 고른다. 고른 두 정점이 이웃이면 서로가 서로보다 앞이어야 하므로 고른 집합은 독립집합이다. 정점 $v$ 와 그 이웃 $d(v)$ 개 가운데 $v$ 가 맨 앞일 확률이 $1/(d(v)+1)$ 이므로 고른 집합의 크기의 기댓값이 오른쪽 합이고, 기댓값 이상의 독립집합을 주는 순서가 존재한다. 이 논증은 [확률적 방법](probabilistic-method.md)의 기댓값 논법이다.

직관 절의 탐욕 방법도 이 합 이상을 고른다. 차수가 가장 작은 정점 $v$ 와 그 이웃은 차수가 모두 $d(v)$ 이상이므로 지워지는 정점들의 항의 합이 $1$ 이하이고, 남은 정점의 차수는 줄기만 하므로 남은 항은 커진다. 귀납법으로 결론이 나온다.

$1/(x+1)$ 이 볼록 함수이므로 [Jensen 부등식](jensen-inequality.md)으로 평균 차수 $\bar d$ 에 대해 $\alpha(G)\ge n/(\bar d+1)$ 을 얻는다. 이 부등식을 보그래프로 옮기면 [Turán 정리](turan-theorem.md)의 간선 수 상한과 동치다.

## 근사의 한계

$\overline G$ 는 $G$ 와 정점 수가 같으므로, 독립수를 $n^{1-\varepsilon}$ 배 이내로 근사하는 알고리즘은 클릭수를 같은 비율로 근사한다. 그래서 클릭 문제의 Håstad–Zuckerman 하한이 그대로 옮겨진다. 임의의 $\varepsilon\gt 0$ 에 대해 독립수를 $n^{1-\varepsilon}$ 배 이내로 근사하는 다항시간 알고리즘이 있으면 $\mathrm P=\mathrm{NP}$ 이다.

정점 덮개의 2-근사는 여집합으로 옮겨지지 않는다. 정점 $n$ 개의 완전 이분 그래프 $K_{n/2,n/2}$ 에서 $\tau=n/2$ 이므로 2-근사는 정점 전부를 덮개로 내놓을 수 있고, 그 여집합은 공집합이다.

차수가 $\Delta$ 이하인 그래프에서는 직관 절의 탐욕 방법이 $(\Delta+2)/3$-근사다(Halldórsson–Radhakrishnan)[^3].

## 다항시간에 풀리는 그래프

이분 그래프에서는 König 정리로 $\tau=\nu$ 이므로 $\alpha=\lvert V\rvert-\nu$ 이고, 최대 [매칭](matchings.md)으로 계산한다.

나무에서는 뿌리를 정하고, 정점 $v$ 를 넣는 경우의 최댓값 $a(v)$ 와 넣지 않는 경우의 최댓값 $b(v)$ 를 잎에서 뿌리로 채운다. 합은 $v$ 의 자식 $c$ 에 대한 것이다.

$$
a(v)=1+\sum_c b(c),\qquad b(v)=\sum_c\max(a(c),b(c))
$$

같은 [동적 계획법](dynamic-programming.md)을 나무 분해의 주머니마다 주머니 안의 독립집합을 상태로 두어 돌리면, [나무폭](treewidth.md)이 $k$ 인 그래프에서 $O(2^kn)$ 시간에 풀린다.

[완벽그래프](perfect-graphs.md)에서는 $\alpha(G)$ 가 [Lovász 세타 함수](lovasz-theta.md) $\vartheta(G)$ 와 같고, $\vartheta(G)$ 는 [반정부호 계획법](semidefinite-programming.md)으로 다항시간에 계산된다. 구간 그래프(interval graph)와 현 그래프(chordal graph)가 완벽그래프다.

발톱 없는 그래프(claw-free graph), 곧 $K_{1,3}$ 을 유도 부분그래프로 갖지 않는 그래프에서는 G. J. Minty 가 최대 가중 독립집합을 다항시간에 찾았다[^4]. 그래프 $H$ 의 선 그래프(line graph)는 발톱 없는 그래프이고 그 독립집합이 $H$ 의 매칭이므로, 이 알고리즘은 매칭 알고리즘을 포함한다.

## 평면 그래프

[평면 그래프](planar-graphs.md)에서도 최대 차수가 $3$ 이하일 때 이미 NP-난해다(Garey–Johnson–Stockmeyer)[^5]. B. S. Baker 는 층 나누기로 다항시간 근사 기법(polynomial-time approximation scheme, PTAS)을 주었다[^6].

한 정점에서 너비 우선 탐색으로 거리별 층 $L_0,L_1,L_2,\dots$ 을 만든다. 정수 $k$ 를 정하고, $r=0,\dots,k-1$ 마다 번호를 $k$ 로 나눈 나머지가 $r$ 인 층을 지운다. 남은 그래프의 각 성분은 연속한 층 $k-1$ 개 안에 들어 나무폭이 $O(k)$ 이므로 위의 동적 계획법으로 정확히 풀린다. 최대 독립집합 $S^\ast$ 의 정점은 $k$ 가지 $r$ 가운데 꼭 하나에서 지워지므로, 어떤 $r$ 에서는 지워지는 정점이 $\lvert S^\ast\rvert/k$ 개 이하다. 그래서 $k$ 개의 답 가운데 가장 큰 것이 $(1-1/k)\alpha(G)$ 이상이고, 시간은 $2^{O(k)}n$ 이다.

## 정확한 알고리즘

차수가 $3$ 이상인 정점 $v$ 를 골라, $v$ 를 넣지 않는 경우와 넣는 경우로 나눈다. 넣지 않으면 $v$ 하나를 지우고, 넣으면 $v$ 와 이웃 셋 이상을 지운다. 차수가 모두 $2$ 이하이면 그래프는 경로와 순환으로 나뉘어 바로 풀린다. 실행 시간은 $T(n)\le T(n-1)+T(n-4)$ 를 만족하므로 $x^4=x^3+1$ 의 양의 근을 밑으로 하는 $O(1.3803^n)$ 이다.

R. E. Tarjan 과 A. E. Trojanowski 는 경우를 더 잘게 나누어 $O(2^{n/3})$ 을 얻었다[^7]. [지수 시간 가설](exponential-time-hypothesis.md)(exponential time hypothesis, ETH)을 가정하면 $2^{o(n)}$ 시간 알고리즘은 없다.

## 극대 독립집합의 병렬 계산

극대 독립집합 하나는 직관 절의 탐욕 방법으로 선형 시간에 찾는다. M. Luby 는 이것을 병렬로 찾는 무작위 알고리즘을 주었다[^8]. 각 단계에서 남은 정점마다 무작위 수를 뽑고, 이웃 모두보다 작은 수를 뽑은 정점을 독립집합에 넣은 뒤 그 정점과 이웃을 지운다. 한 단계에서 남은 간선의 절반 이상이 기댓값으로 지워지므로 $O(\log n)$ 단계 안에 끝난다.

# 활용

- [그래프 색칠](graph-coloring.md). 같은 색의 정점들이 독립집합을 이루므로 $\chi(G)\ge n/\alpha(G)$ 이다.
- [k-중심 문제](k-center.md). Hochbaum–Shmoys 알고리즘은 거리 $r$ 이하인 점을 이은 그래프의 제곱에서 극대 독립집합을 구해 2-근사를 얻는다.
- [Kneser 그래프](kneser-graphs.md). $K(n,k)$ 의 독립집합이 교차족이므로 독립수가 [Erdős–Ko–Rado 정리](erdos-ko-rado.md)의 $\binom{n-1}{k-1}$ 이다.
- [오류정정부호](error-correcting-codes.md). 길이 $n$ 의 이진 낱말을 정점으로 두고 Hamming 거리가 $d$ 미만인 두 낱말을 이으면, 최소거리가 $d$ 이상인 부호는 이 그래프의 독립집합이다. 모든 정점의 차수가 $\sum_{i=1}^{d-1}\binom ni$ 이므로 직관 절의 하한에서 Gilbert–Varshamov 한계(Gilbert–Varshamov bound) $2^n/\sum_{i=0}^{d-1}\binom ni$ 가 나온다.
- 일정 계획. 서로 겹치지 않는 구간을 가장 많이 고르는 문제는 구간 그래프의 독립집합 문제이고, 끝나는 시각이 가장 이른 구간부터 고르는 탐욕 방법이 최적해를 준다.
- [Ramsey 이론](ramsey-theory.md). Ramsey 수 $R(s,t)$ 는 크기 $s$ 의 클릭이나 크기 $t$ 의 독립집합을 반드시 포함하는 그래프의 최소 정점 수다.

[^1]: Y. Caro, "New results on the independence number", Technical Report, Tel Aviv University (1979).
[^2]: V. K. Wei, "A lower bound on the stability number of a simple graph", Bell Laboratories Technical Memorandum 81-11217-9 (1981).
[^3]: M. M. Halldórsson, J. Radhakrishnan, "Greed is good: approximating independent sets in sparse and bounded-degree graphs", Algorithmica 18 (1997), 145–163.
[^4]: G. J. Minty, "On maximal independent sets of vertices in claw-free graphs", Journal of Combinatorial Theory, Series B 28 (1980), 284–304.
[^5]: M. R. Garey, D. S. Johnson, L. Stockmeyer, "Some simplified NP-complete graph problems", Theoretical Computer Science 1 (1976), 237–267.
[^6]: B. S. Baker, "Approximation algorithms for NP-complete problems on planar graphs", Journal of the ACM 41 (1994), 153–180.
[^7]: R. E. Tarjan, A. E. Trojanowski, "Finding a maximum independent set", SIAM Journal on Computing 6 (1977), 537–546.
[^8]: M. Luby, "A simple parallel algorithm for the maximal independent set problem", SIAM Journal on Computing 15 (1986), 1036–1053.

# 연관 문서

## 선수지식

- [클릭 문제](clique-problem.md)
- [정점 덮개 문제](vertex-cover.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #graph_theory #algorithms #combinatorics
