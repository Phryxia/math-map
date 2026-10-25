# 클릭 문제

# 개요

**클릭(clique)** 은 그래프에서 어느 두 정점도 서로 이웃하는 정점 집합이다. 가장 큰 클릭의 크기를 **클릭수(clique number)** $\omega(G)$ 라 하고, $\omega(G)$ 를 구하거나 크기 $k$ 의 클릭이 있는지 판정하는 문제를 **클릭 문제(clique problem)** 라 한다. 판정 판본은 Karp 의 21 개 [NP-완전](np-completeness.md)(nondeterministic polynomial time) 문제 가운데 하나다[^1]. 근사도 어려워서 $n^{1-\varepsilon}$ 배 이내의 근사가 $\mathrm P=\mathrm{NP}$ 를 함의하고, 매개변수 $k$ 에 대해서도 고정 매개변수 다루기 쉽지 않다고 여겨진다.

# 직관

정점 $n$ 개 그래프에서 크기 $k$ 의 클릭을 찾을 때 정점 $k$ 개를 모두 시도하면 $\binom nk$ 가지다. 그래프의 간선이 많으면 큰 클릭이 생긴다. [Turán 정리](turan-theorem.md)는 간선이 $(1-1/r)n^2/2$ 개보다 많으면 크기 $r+1$ 의 클릭이 있다고 정한다.

간선 수만으로는 클릭의 위치를 알 수 없다. 각 정점 쌍을 동전 던지기로 잇는 무작위 그래프에서는 가장 큰 클릭의 크기가 약 $2\log_2n$ 이다. 정점을 하나 고르고 지금까지 고른 모든 정점과 이웃한 정점을 계속 더하는 탐욕 방법은 매번 후보가 절반쯤 남아 약 $\log_2n$ 단계에서 멈춘다. 클릭이 있다는 것을 알면서도 그 크기의 절반에 머문다는 데서 이 문제의 어려움이 드러난다.

# 정의

그래프 $G=(V,E)$ 에서 $K\subseteq V$ 의 어느 두 정점 $u\ne v$ 에 대해 $uv\in E$ 이면 $K$ 를 클릭이라 한다. 더 큰 클릭에 포함되지 않는 클릭을 **극대 클릭(maximal clique)** 이라 한다.

- $G$ 의 보그래프 $\overline G$ 에서 클릭은 $G$ 의 독립집합이므로 $\omega(\overline G)=\alpha(G)$ 다.
- 독립집합의 여집합은 [정점 덮개](vertex-cover.md)이므로 $\alpha(G)=\lvert V\rvert-\tau(G)$ 다. 세 문제의 판정 판본은 다항시간 환원으로 서로 옮겨진다.
- 매개변수 판본은 $(G,k)$ 에서 크기 $k$ 의 클릭이 있는지 판정하는 문제다.

# 성질

## 정확한 알고리즘

J. W. Moon 과 L. Moser 는 정점 $n$ 개 그래프의 극대 클릭이 $3^{n/3}$ 개 이하이고 이 수가 달성됨을 증명했다[^2]. 극대 클릭을 모두 나열하는 Bron–Kerbosch 알고리즘에 축 정점(pivot)을 고르는 규칙을 붙이면 최악 시간이 $O(3^{n/3})$ 이 된다(Tomita–Tanaka–Takahashi)[^3].

크기 $k$ 의 클릭은 행렬곱으로 찾을 수 있다. 크기 $k/3$ 의 클릭을 정점으로 하는 그래프를 만들면 그 그래프의 삼각형이 크기 $k$ 의 클릭이고, 삼각형 판정은 인접 행렬의 곱으로 한다. 시간은 $O(n^{\omega k/3})$ 이다(Nešetřil–Poljak)[^4]. 여기서 $\omega$ 는 행렬곱 지수다.

## 매개변수 하한

크기 $k$ 의 클릭 판정은 [매개변수 복잡도](parameterized-complexity.md)의 $\mathrm W\lbrack 1\rbrack$-완전 문제다. [지수 시간 가설](exponential-time-hypothesis.md)(exponential time hypothesis, ETH)을 가정하면 $f(k)n^{o(k)}$ 시간 알고리즘이 없다. 위의 $n^{\omega k/3}$ 알고리즘이 지수의 차수에서 최적이다.

## 근사 하한

정리(Håstad, Zuckerman). 임의의 $\varepsilon\gt 0$ 에 대해 클릭수를 $n^{1-\varepsilon}$ 배 이내로 근사하는 다항시간 알고리즘이 있으면 $\mathrm P=\mathrm{NP}$ 이다[^5][^6].

J. Håstad 는 [PCP 정리](pcp-theorem.md)(probabilistically checkable proof)의 검증자에서 질의 결과가 일관된 경우를 정점으로 하는 그래프를 만들어 $\mathrm{NP}\ne\mathrm{ZPP}$ 가정 아래 이 하한을 얻었다. D. Zuckerman 은 그 구성의 무작위성을 결정적 추출기로 바꾸어 가정을 $\mathrm P\ne\mathrm{NP}$ 로 낮췄다. 정점을 모두 하나씩 고르는 자명한 알고리즘의 근사비가 $n$ 이므로 이 하한은 거의 최선이다.

## 무작위 그래프와 숨긴 클릭

[Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md) $G(n,1/2)$ 에서 $\omega(G)=(2-o(1))\log_2n$ 이 거의 확실하고, 직관 절의 탐욕 방법은 $(1-o(1))\log_2n$ 을 찾는다. R. M. Karp 는 $(1+\varepsilon)\log_2n$ 크기의 클릭을 다항시간에 찾는 알고리즘을 묻는 문제를 내놓았다[^7].

$G(n,1/2)$ 에 크기 $k$ 의 클릭을 심은 그래프에서 그 클릭을 찾는 문제를 **숨긴 클릭 문제(planted clique problem)** 라 한다. $k\ge c\sqrt n$ 이면 인접 행렬의 둘째 고유벡터로 클릭을 찾는다(Alon–Krivelevich–Sudakov)[^8].

## 완벽 그래프

[완벽그래프](perfect-graphs.md)에서는 클릭수가 채색수와 같고 [Lovász 세타 함수](lovasz-theta.md)가 그 사이에 끼므로, [반정부호 계획법](semidefinite-programming.md)으로 $\omega(G)$ 를 다항시간에 계산한다(Grötschel–Lovász–Schrijver).

# 활용

- 사회망과 생물망의 분석. 서로 모두 연결된 집단을 찾는 문제가 극대 클릭 나열이고, 단백질 상호작용망의 복합체 탐색에 Bron–Kerbosch 알고리즘이 쓰인다.
- 암호와 평균 복잡도. 숨긴 클릭 문제가 $k\ll\sqrt n$ 에서 다항시간에 풀리지 않는다는 가정이 희소 주성분 분석과 통계적 검정의 계산 하한을 증명하는 데 쓰인다.
- [Ramsey 이론](ramsey-theory.md). 모든 그래프는 크기 $\frac12\log_2n$ 의 클릭이나 독립집합을 포함한다. 무작위 그래프에서는 가장 큰 클릭과 가장 큰 독립집합이 거의 확실하게 $2\log_2n$ 보다 작다.

[^1]: R. M. Karp, "Reducibility among combinatorial problems", in *Complexity of Computer Computations* (1972), 85–103.
[^2]: J. W. Moon, L. Moser, "On cliques in graphs", Israel Journal of Mathematics 3 (1965), 23–28.
[^3]: E. Tomita, A. Tanaka, H. Takahashi, "The worst-case time complexity for generating all maximal cliques and computational experiments", Theoretical Computer Science 363 (2006), 28–42.
[^4]: J. Nešetřil, S. Poljak, "On the complexity of the subgraph problem", Commentationes Mathematicae Universitatis Carolinae 26 (1985), 415–419.
[^5]: J. Håstad, "Clique is hard to approximate within n^{1−ε}", Acta Mathematica 182 (1999), 105–142.
[^6]: D. Zuckerman, "Linear degree extractors and the inapproximability of max clique and chromatic number", Theory of Computing 3 (2007), 103–128.
[^7]: R. M. Karp, "The probabilistic analysis of some combinatorial search algorithms", in *Algorithms and Complexity: New Directions and Recent Results* (1976), 1–19.
[^8]: N. Alon, M. Krivelevich, B. Sudakov, "Finding a large hidden clique in a random graph", Random Structures & Algorithms 13 (1998), 457–466.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)
- [Turán 정리](turan-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #graph_theory #algorithms
