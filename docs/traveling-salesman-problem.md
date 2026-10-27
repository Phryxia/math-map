# 외판원 문제

# 개요

**외판원 문제(traveling salesman problem, TSP)** 는 모든 도시를 한 번씩 들르고 출발한 도시로 돌아오는 가장 짧은 경로를 찾는 문제다. 도시가 $n$ 개이면 가능한 순회가 $(n-1)!/2$ 가지이고 $n=20$ 이면 약 $6\times 10^{16}$ 가지라, 전부 길이를 재어 비교할 수 없다. 이 문제는 판정형이 NP(nondeterministic polynomial time)-완전이므로, 거리가 삼각부등식을 만족할 때 최적의 $3/2$ 배 안에 드는 순회를 다항시간에 찾는 것 같은 [근사 알고리즘](approximation-algorithms.md)으로 다룬다.

# 직관

외판원 문제는 도시 $n$ 개와 도시 사이의 거리가 주어졌을 때, 모든 도시를 한 번씩 방문하고 출발한 도시로 돌아오는 경로 가운데 길이가 가장 짧은 것을 찾는 문제다. 그래프로는 변에 음이 아닌 가중치가 붙은 완전그래프에서 가중치 합이 최소인 [Hamilton 순환](hamiltonian-cycles.md)을 찾는 문제다.

판정형은 NP-완전이고, 거리에 아무 조건이 없으면 어떤 상수배로도 근사 알고리즘이 존재하지 않는다($\mathrm P\ne\mathrm{NP}$ 가정). 거리가 삼각부등식을 만족하면 최적의 $3/2$ 배 안에 드는 순회를 다항시간에 찾는다.

도시가 $n$ 개이면 출발 도시를 고정하고 나머지를 늘어놓는 순서가 $(n-1)!$ 가지이고, 방향을 뒤집은 것을 같은 순회로 보면 $(n-1)!/2$ 가지다. $n=20$ 이면 약 $6\times 10^{16}$ 가지라 전부 길이를 재어 비교할 수 없다.

순회를 앞에서부터 만들어 간다고 하자. 도시 $1$ 에서 출발해 도시 집합 $S$ 를 모두 지나 지금 도시 $j$ 에 있다면, 남은 도시를 돌아 $1$ 로 돌아가는 가장 짧은 길은 $S$ 를 어떤 순서로 지났는지와 상관이 없다. 그래서 "$S$ 를 지나 $j$ 에서 끝나는 가장 짧은 길" 의 길이만 표에 적어 두면 된다. 표의 칸은 $S$ 와 $j$ 의 짝마다 하나라 $2^n n$ 개 이하이고, $n=20$ 이면 약 $2\times 10^7$ 개다.

# 정의

## 문제

$K_n$ 을 정점 $\lbrace 1,\dots,n\rbrace$ 위의 완전그래프, $w\colon E(K_n)\to\mathbb R_{\ge 0}$ 을 가중치라 한다. **순회(tour)** 는 $K_n$ 의 Hamilton 순환이고, 그 길이는 지나는 변의 가중치 합이다. 외판원 문제는 길이가 최소인 순회를 찾는 문제다. 판정형은 수 $L$ 이 함께 주어졌을 때 길이가 $L$ 이하인 순회가 있는지를 묻는다.

## 변형

- **거리 외판원 문제(metric TSP).** 모든 $i,j,k$ 에 대해 삼각부등식 $w(i,k)\le w(i,j)+w(j,k)$ 를 만족하는 경우다.
- **유클리드 외판원 문제(Euclidean TSP).** 도시가 평면의 점이고 $w$ 가 유클리드 거리인 경우다. 거리 외판원 문제의 특수한 경우다.
- **비대칭 외판원 문제(asymmetric TSP).** $w(i,j)\ne w(j,i)$ 일 수 있는 유향 판본이다.

## Held–Karp 점화식

$S\subseteq\lbrace 2,\dots,n\rbrace$ 와 $j\in S$ 에 대해 $C(S,j)$ 를 도시 $1$ 에서 출발해 $S$ 의 도시를 한 번씩 지나 $j$ 에서 끝나는 가장 짧은 길의 길이라 한다. 그러면

$$
C(\lbrace j\rbrace,j)=w(1,j),\qquad C(S,j)=\min_{i\in S\setminus\lbrace j\rbrace}\big(C(S\setminus\lbrace j\rbrace,i)+w(i,j)\big)
$$

이고, 최적 순회의 길이는 $\min_{j}\big(C(\lbrace 2,\dots,n\rbrace,j)+w(j,1)\big)$ 이다. M. Held 와 R. M. Karp, R. Bellman 이 1962 년에 각각 제시한 [동적 계획법](dynamic-programming.md)이다[^1].

```typescript
// 부분집합 S 를 비트마스크로 쓴다. 비트 k 는 도시 k+1 (k = 1..n-1). 도시 1 은 0 번.
function heldKarp(w: number[][]): number {
  const n = w.length;
  const full = (1 << n) - 2; // 도시 2..n
  const C = new Map<string, number>();
  for (let j = 1; j < n; j++) C.set(`${1 << j},${j}`, w[0][j]);
  for (const S of subsetsOfByIncreasingSize(full)) {
    for (const j of elementsOf(S)) {
      if (S === 1 << j) continue;
      let best = Infinity;
      for (const i of elementsOf(S & ~(1 << j))) best = Math.min(best, C.get(`${S & ~(1 << j)},${i}`)! + w[i][j]);
      C.set(`${S},${j}`, best);
    }
  }
  let opt = Infinity;
  for (let j = 1; j < n; j++) opt = Math.min(opt, C.get(`${full},${j}`)! + w[j][0]);
  return opt;
}
```

# 성질

## NP-완전성

정리. 외판원 문제의 판정형은 NP-완전이다.

증명의 요지. 순회 자체가 증명서이므로 NP 에 든다. 그래프 $G$ 가 Hamilton 순환을 갖는지 판정하는 NP-완전 문제에서 환원한다. 정점이 $n$ 개인 $G$ 의 변에는 가중치 $1$, $G$ 에 없는 변에는 가중치 $2$ 를 준 $K_n$ 을 만들면, 길이가 $n$ 이하인 순회가 있는 것과 $G$ 에 Hamilton 순환이 있는 것이 동치다. 환원의 틀은 [NP-완전성과 Cook–Levin 정리](np-completeness.md)에 있다.

## 일반 외판원 문제의 근사 불가능성

정리. $\mathrm P\ne\mathrm{NP}$ 이면 어떤 상수 $\rho\ge 1$ 에 대해서도 일반 외판원 문제의 $\rho$ 근사 다항시간 알고리즘은 없다[^2].

증명의 요지. 위 환원에서 $G$ 에 없는 변의 가중치를 $\rho n+1$ 로 바꾼다. $G$ 에 Hamilton 순환이 있으면 최적 길이가 $n$ 이므로 $\rho$ 근사 알고리즘은 길이 $\rho n$ 이하의 순회를 내놓는다. 없으면 모든 순회가 무거운 변을 하나 이상 지나 길이가 $\rho n+1$ 이상이다. 알고리즘의 출력 길이로 Hamilton 순환의 존재가 판정된다.

## Held–Karp 점화식의 비용

표의 칸이 $O(2^n n)$ 개이고 칸마다 $O(n)$ 번 비교하므로 시간은 $O(2^n n^2)$, 공간은 $O(2^n n)$ 이다. $(n-1)!/2$ 가지를 훑는 것보다 지수의 밑이 작아진다.

## 최소 신장트리를 쓰는 2-근사

거리 외판원 문제에서 [최소 신장트리](minimum-spanning-tree.md) $T$ 를 구하고, $T$ 의 변을 모두 두 번씩 지나는 닫힌 걸음을 만든 뒤, 이미 방문한 도시를 건너뛰어 순회로 만든다.

- 최적 순회에서 변 하나를 빼면 신장트리이므로 $w(T)\le\mathrm{OPT}$ 다.
- 닫힌 걸음의 길이는 $2w(T)$ 다.
- 삼각부등식에 따라 도시를 건너뛰어도 길이가 늘지 않는다.

그래서 순회의 길이는 $2\mathrm{OPT}$ 이하다.

## Christofides 알고리즘

정리. 거리 외판원 문제에서 길이가 $\tfrac32\mathrm{OPT}$ 이하인 순회를 다항시간에 찾는다[^3].

절차는 최소 신장트리 $T$ 를 구하고, $T$ 에서 차수가 홀수인 정점 집합 $O$ 위에서 가중치가 최소인 완전 [매칭](matchings.md) $M$ 을 구하고, $T\cup M$ 의 [Euler 회로](eulerian-circuits.md)를 따라가며 방문한 도시를 건너뛰는 것이다. $T\cup M$ 의 모든 정점은 차수가 짝수이므로 Euler 회로가 있다.

증명의 요지. 최적 순회에서 $O$ 의 정점만 남기고 건너뛰면 삼각부등식으로 길이가 $\mathrm{OPT}$ 이하인 $O$ 위의 순환이 된다. $\lvert O\rvert$ 가 짝수이므로 이 순환의 변을 번갈아 고르면 완전 매칭 두 개로 나뉘고, 그중 가벼운 것은 $\mathrm{OPT}/2$ 이하다. 따라서 $w(M)\le\mathrm{OPT}/2$ 이고, $w(T)+w(M)\le\tfrac32\mathrm{OPT}$ 이다.

A. R. Karlin, N. Klein, S. Oveis Gharan 이 2021 년에 어떤 상수 $\varepsilon\gt 10^{-36}$ 에 대해 $(\tfrac32-\varepsilon)$ 근사를 주는 무작위 알고리즘을 발표했다[^4].

## 유클리드 외판원 문제의 근사 방식

S. Arora 는 고정 차원의, J. S. B. Mitchell 은 평면의 유클리드 외판원 문제에 모든 $\varepsilon\gt 0$ 에 대해 $(1+\varepsilon)$ 근사를 주는 다항시간 근사 방식(polynomial-time approximation scheme, PTAS)을 각각 제시했다[^5]. 평면을 사분 트리(quadtree)로 나누고, 순회가 각 칸의 경계를 정해 둔 소수의 점에서만 지나도록 고친 뒤 칸마다 동적 계획법으로 푼다.

# 활용

- [정수계획법](integer-programming.md)의 절단평면. 변마다 $0$ 또는 $1$ 변수를 두고 꼭짓점의 차수를 $2$ 로 묶은 모형에 부분순회를 끊는 부등식을 더해 가며 푼다. 대규모 실례의 정확한 해는 이 방법과 분기한정으로 구한다.
- 근사 알고리즘의 등급 구분. 일반 외판원 문제는 상수 근사가 없고, 거리 외판원 문제는 상수 근사가 있으며, 유클리드 외판원 문제는 다항시간 근사 방식이 있다. 같은 문제가 거리의 조건에 따라 세 등급으로 갈린다.
- 차량 경로, 회로 기판의 구멍 뚫는 순서, 망원경의 관측 순서처럼 점을 한 번씩 방문하는 순서를 정하는 문제가 외판원 문제나 그 변형으로 모형화된다.

[^1]: M. Held, R. M. Karp, "A dynamic programming approach to sequencing problems", Journal of the Society for Industrial and Applied Mathematics 10(1) (1962), 196–210. R. Bellman, "Dynamic programming treatment of the travelling salesman problem", Journal of the ACM 9(1) (1962), 61–63.
[^2]: S. Sahni, T. Gonzalez, "P-complete approximation problems", Journal of the ACM 23(3) (1976), 555–565.
[^3]: N. Christofides, "Worst-case analysis of a new heuristic for the travelling salesman problem", Report 388, Graduate School of Industrial Administration, Carnegie Mellon University (1976). A. I. Serdyukov 가 1978 년에 같은 알고리즘을 독립적으로 발표했다.
[^4]: A. R. Karlin, N. Klein, S. Oveis Gharan, "A (slightly) improved approximation algorithm for metric TSP", Proceedings of the 53rd ACM Symposium on Theory of Computing (2021), 32–45.
[^5]: S. Arora, "Polynomial time approximation schemes for Euclidean traveling salesman and other geometric problems", Journal of the ACM 45(5) (1998), 753–782. J. S. B. Mitchell, "Guillotine subdivisions approximate polygonal subdivisions", SIAM Journal on Computing 28(4) (1999), 1298–1309.

# 연관 문서

## 선수지식

- [Hamilton 순환](hamiltonian-cycles.md)
- [근사 알고리즘](approximation-algorithms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #complexity #graph_theory #optimization
