# Steiner 나무 문제

# 개요

**Steiner 나무 문제(Steiner tree problem)** 는 간선에 음이 아닌 비용이 붙은 그래프와 정점의 부분집합 $K$ 가 주어질 때, $K$ 의 모든 정점을 잇는 부분나무 가운데 비용의 합이 가장 작은 것을 찾는 문제다. $K$ 의 정점을 **단말(terminal)** 이라 하고, 나무가 단말 밖의 정점을 지나도 된다. $K$ 가 정점 전체이면 [최소 신장트리](minimum-spanning-tree.md)이고 $K$ 가 두 정점이면 [최단경로](shortest-paths.md)인데, 그 사이의 일반적인 경우는 NP-난해(nondeterministic polynomial time)다. 단말끼리의 최단경로 거리에서 최소 신장트리를 구하는 방법이 2-근사를 준다.

# 직관

단말이 셋인 별 모양 그래프를 본다. 가운데 정점 $c$ 에서 단말 $a,b,d$ 로 가는 간선의 비용이 각각 $1$ 이고, 단말끼리 직접 잇는 간선의 비용은 각각 $2$ 다. 단말만 써서 신장트리를 만들면 비용 $2$ 인 간선 둘이 들어가 합이 $4$ 다. 단말이 아닌 $c$ 를 지나면 비용 $1$ 인 간선 셋으로 합이 $3$ 이다. 단말 밖의 정점을 쓸 수 있다는 것이 최소 신장트리와 다른 점이고, 어느 정점을 쓸지 고르는 데서 문제가 어려워진다.

쓸 정점을 고르지 않고도 비용을 막을 수 있다. 위 예에서 단말끼리의 최단경로 거리는 모두 $2$ 이다. 이 거리로 단말 셋의 완전그래프를 만들고 최소 신장트리를 구하면 비용이 $4$ 이고, 최적의 $3$ 의 두 배를 넘지 않는다. 최적 나무를 한 바퀴 도는 길은 각 간선을 두 번 지나므로 길이가 최적 비용의 두 배이고, 그 길이 단말을 차례로 이으므로 단말 사이의 신장트리 하나보다 길다. 이 논증이 일반 그래프의 2-근사를 증명한다.

# 정의

그래프 $G=(V,E)$, 간선 비용 $c:E\to\mathbb R\_{\ge 0}$, 단말 집합 $K\subseteq V$ 가 주어진다. **Steiner 나무(Steiner tree)** 는 $K$ 를 정점으로 포함하는 $G$ 의 부분나무 $T$ 이고, 그 비용은 $c(T)=\sum_{e\in T}c(e)$ 다. $T$ 에 들어간 단말 밖의 정점을 **Steiner 점(Steiner point)** 이라 한다.

$K$ 위의 **거리 폐포(metric closure)** 는 $K$ 의 두 정점 $u,v$ 사이에 비용 $d_G(u,v)$ 의 간선을 둔 완전그래프다. 여기서 $d_G$ 는 $G$ 의 최단경로 거리다.

평면의 점 집합 $K$ 를 선분으로 이어 길이의 합을 최소화하는 문제를 **Euclid Steiner 나무 문제(Euclidean Steiner tree problem)** 라 하고, 이때는 평면의 어느 점이나 Steiner 점이 될 수 있다.

# 성질

## 거리 폐포 근사

정리. 거리 폐포의 최소 신장트리를 구한 뒤 각 간선을 $G$ 의 최단경로로 바꾸면 비용이 $2(1-1/\lvert K\rvert)\cdot\mathrm{OPT}$ 이하인 Steiner 나무가 나온다.

증명의 요지. 최적 나무 $T^\ast$ 를 깊이 우선으로 한 바퀴 돌면 길이 $2c(T^\ast)$ 인 닫힌 길이 되고, 단말을 처음 만나는 순서로 이으면 거리 폐포의 순환이 된다. 이 순환에서 가장 긴 간선 하나를 빼면 신장 경로이고 길이가 $2(1-1/\lvert K\rvert)c(T^\ast)$ 이하다. 최소 신장트리는 이보다 짧고, 최단경로로 바꾼 간선들의 합집합에서 순환을 지워도 비용이 늘지 않는다.

## 정확한 알고리즘

Dreyfus 와 Wagner 의 [동적 계획법](dynamic-programming.md)은 단말의 부분집합 $D$ 와 정점 $v$ 마다 $D\cup\lbrace v\rbrace$ 를 잇는 최소 나무의 비용을 계산한다[^1]. $v$ 에서 나무가 두 갈래로 나뉘는 점을 고르는 점화식이고 시간은 $O(3^{\lvert K\rvert}n+2^{\lvert K\rvert}n^2+n^3)$ 이다. 단말 수가 고정되면 다항시간이다.

## 근사의 한계

판정 판본은 Karp 의 21 개 NP-완전 문제 가운데 하나다. 근사비는 $\ln 4+\varepsilon\approx 1.39$ 까지 내려왔고(Byrka–Grandoni–Rothvoß–Sanità)[^2], $96/95$ 보다 작은 근사비는 $\mathrm P=\mathrm{NP}$ 를 함의한다(Chlebík–Chlebíková)[^3]. 단말을 넷씩 묶은 부분나무들로 만든 선형 완화를 반복 무작위 반올림한 것이 $\ln 4$ 근사의 방법이다. [LP 반올림](lp-rounding.md)(linear programming)의 한 사례다.

## Euclid 판본

Steiner 점에서는 세 선분이 120° 로 만난다. 세 점 문제의 Steiner 점은 세 각이 모두 120° 보다 작을 때 [Fermat 점](geometric-median.md)이고, 한 각이 120° 이상이면 그 꼭짓점이 답이다. 단말이 $k$ 개이면 Steiner 점은 $k-2$ 개 이하다. 이 판본은 NP-난해이고(Garey–Graham–Johnson)[^4], S. Arora 는 임의의 $\varepsilon\gt 0$ 에 대해 $1+\varepsilon$ 근사를 다항시간에 주는 방법을 만들었다[^5].

# 활용

- 회로 설계. 칩 위의 핀을 잇는 배선은 직선 거리(rectilinear distance) 판본의 Steiner 나무 문제다.
- 망 설계. 여러 쌍을 각각 잇는 Steiner 숲 문제는 [원시-쌍대 방법](primal-dual-method.md)의 동시 증가와 역삭제로 2-근사가 된다.
- 계통 발생. 생물 종의 서열을 단말로 두고 조상 서열을 Steiner 점으로 두면, 변이 수를 최소화하는 계통수(maximum parsimony)가 Hamming 거리에 대한 Steiner 나무 문제다.

[^1]: S. E. Dreyfus, R. A. Wagner, "The Steiner problem in graphs", Networks 1 (1971), 195–207.
[^2]: J. Byrka, F. Grandoni, T. Rothvoß, L. Sanità, "Steiner tree approximation via iterative randomized rounding", Journal of the ACM 60 (2013), Article 6.
[^3]: M. Chlebík, J. Chlebíková, "The Steiner tree problem on graphs: inapproximability results", Theoretical Computer Science 406 (2008), 207–214.
[^4]: M. R. Garey, R. L. Graham, D. S. Johnson, "The complexity of computing Steiner minimal trees", SIAM Journal on Applied Mathematics 32 (1977), 835–859.
[^5]: S. Arora, "Polynomial time approximation schemes for Euclidean traveling salesman and other geometric problems", Journal of the ACM 45 (1998), 753–782.

# 연관 문서

## 선수지식

- [최소 신장트리](minimum-spanning-tree.md)
- [근사 알고리즘](approximation-algorithms.md)

## 더 알아보기

- [Steiner 비](steiner-ratio.md)

#graph_theory #algorithms #complexity #optimization
