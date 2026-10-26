# Bron–Kerbosch 알고리즘

# 개요

**Bron–Kerbosch 알고리즘(Bron–Kerbosch algorithm)** 은 그래프의 극대 클릭을 모두, 각각 한 번씩 나열하는 역추적(backtracking) 알고리즘이다. C. Bron 과 J. Kerbosch 가 1973 년에 발표했다[^1]. 축 정점(pivot)을 고르는 규칙을 붙이면 정점 $n$ 개 그래프에서 최악 시간이 $O(3^{n/3})$ 이고, 극대 클릭이 $3^{n/3}$ 개인 그래프가 있으므로 이 시간은 $n$ 만의 함수로서 최적이다.

[클릭 문제](clique-problem.md)의 가장 큰 클릭은 나열한 극대 클릭 가운데 가장 큰 것이므로, 이 알고리즘은 클릭수를 구하는 정확한 알고리즘으로도 쓰인다.

# 직관

정점 $1,2,3,4,5$ 와 간선 $12,13,23,24,34,45$ 로 된 그래프의 극대 클릭을 모두 찾는다. 답은 $\lbrace 1,2,3\rbrace$, $\lbrace 2,3,4\rbrace$, $\lbrace 4,5\rbrace$ 셋이다. 정점 집합 $2^5$ 개를 전부 검사하면 찾을 수 있지만 대부분은 클릭이 아니다.

클릭을 한 정점씩 키운다. 지금 고른 클릭을 $R$ 이라 하고, $R$ 의 모든 정점과 이웃한 정점만 다음 후보로 남긴다. $R=\lbrace 1\rbrace$ 이면 후보는 $\lbrace 2,3\rbrace$ 이고, $2$ 를 더하면 후보는 $\lbrace 3\rbrace$, $3$ 을 더하면 후보가 없으므로 $\lbrace 1,2,3\rbrace$ 를 보고한다. 이렇게 하면 클릭이 아닌 집합은 만들지 않는다.

이것만으로는 같은 클릭이 여러 번 나온다. $R=\lbrace 1\rbrace$ 에서 $3$ 을 먼저 더하면 다시 $\lbrace 1,2,3\rbrace$ 에 이른다. $R=\lbrace 2\rbrace$ 에서 시작해 $3$ 만 더하면 후보 $1$ 과 $4$ 가 남는데, $1$ 은 이미 정점 $1$ 에서 시작한 탐색이 다 다룬 정점이다. 그래서 다 다룬 정점을 따로 모아 둔다. 후보가 바닥났을 때 $R$ 의 모든 정점과 이웃한 정점이 그 모음에 남아 있으면 $R$ 은 이미 보고한 클릭의 부분이므로 보고하지 않는다.

# 정의

## 기본 재귀

그래프 $G=(V,E)$ 에서 정점 $v$ 의 이웃 집합을 $N(v)$ 라 한다. 재귀 $\mathrm{BK}(R,P,X)$ 는 서로소인 세 집합을 받는다.

- $R$ 은 지금까지 고른 클릭이다.
- $P$ 는 $R$ 의 모든 정점과 이웃하고 아직 다루지 않은 후보 정점의 집합이다.
- $X$ 는 $R$ 의 모든 정점과 이웃하지만 이미 다룬 정점의 집합이다.

$P=X=\varnothing$ 이면 $R$ 을 보고한다. 그렇지 않으면 $P$ 의 정점 $v$ 마다 차례로 $\mathrm{BK}(R\cup\lbrace v\rbrace,\thinspace P\cap N(v),\thinspace X\cap N(v))$ 를 부르고, 부른 뒤 $v$ 를 $P$ 에서 빼서 $X$ 에 넣는다. 처음 호출은 $\mathrm{BK}(\varnothing,V,\varnothing)$ 이다.

## 축 정점

**축 정점(pivot)** 은 $P\cup X$ 에서 고른 정점 $u$ 이고, 재귀는 $P$ 전체 대신 $P\setminus N(u)$ 의 정점에서만 가지를 친다. Tomita, Tanaka, Takahashi 는 $\lvert P\cap N(u)\rvert$ 가 가장 큰 $u$ 를 고른다[^2].

```typescript
// adj[a][b] 는 a 와 b 가 이웃이면 true 다. 정점은 0 부터 n-1 까지다.
function bronKerbosch(adj: boolean[][], report: (clique: number[]) => void): void {
  const rec = (R: number[], P: number[], X: number[]): void => {
    if (P.length === 0 && X.length === 0) {
      report(R);
      return;
    }
    // 축 정점: P 안의 이웃이 가장 많은 정점
    let u = -1;
    let best = -1;
    for (const w of [...P, ...X]) {
      const c = P.filter((x) => adj[w][x]).length;
      if (c > best) {
        best = c;
        u = w;
      }
    }
    for (const v of P.filter((x) => !adj[u][x])) {
      rec(
        [...R, v],
        P.filter((x) => adj[v][x]),
        X.filter((x) => adj[v][x]),
      );
      P = P.filter((x) => x !== v);
      X = [...X, v];
    }
  };
  rec([], adj.map((row, i) => i), []);
}
```

# 성질

## 정확성

정리. $\mathrm{BK}(\varnothing,V,\varnothing)$ 은 축 정점을 쓰든 쓰지 않든 $G$ 의 극대 클릭을 모두, 각각 정확히 한 번 보고한다[^1].

증명의 요지. 재귀 내내 $R$ 은 클릭이고, $R$ 의 모든 정점과 이웃한 정점은 전부 $P\cup X$ 에 있다. 따라서 $P=X=\varnothing$ 일 때 $R$ 에 더할 정점이 없어 $R$ 은 극대다. 극대 클릭 $K$ 의 정점이 처음으로 가지에 쓰이는 순서는 하나로 정해지고, 그 정점이 $X$ 로 옮겨진 뒤의 가지에서는 $K$ 가 보고되지 않으므로 $K$ 는 한 번만 나온다. 축 정점 $u$ 를 쓸 때는 $R$ 을 포함하는 극대 클릭이 $u$ 를 포함하거나 $u$ 와 이웃하지 않는 정점을 포함하므로, $P\setminus N(u)$ 에서만 가지를 쳐도 빠지는 클릭이 없다.

## Moon–Moser 경계와 최악 시간

정리(Moon–Moser). 정점 $n$ 개 그래프의 극대 클릭은 $3^{n/3}$ 개 이하이고, $n$ 이 $3$ 의 배수이면 정점을 크기 $3$ 의 부분 $n/3$ 개로 나눈 완전 다부 그래프(complete multipartite graph)가 이 수를 달성한다[^3].

완전 다부 그래프의 극대 클릭은 각 부분에서 정점을 하나씩 고른 집합이므로 $3^{n/3}$ 개다.

정리(Tomita–Tanaka–Takahashi). $\lvert P\cap N(u)\rvert$ 가 가장 큰 축 정점을 쓰면 Bron–Kerbosch 알고리즘의 최악 시간은 $O(3^{n/3})$ 이다[^2].

증명의 요지. 크기 $n$ 의 $P$ 에서 가지 $k$ 개를 치면 각 가지의 후보는 $n-k$ 개 이하이므로 실행 시간 $T(n)$ 은 $T(n)\le\max_k k\thinspace T(n-k)+O(n^2)$ 를 만족한다. $k\thinspace 3^{-k/3}$ 은 정수 $k$ 에서 $k=3$ 일 때 가장 크고, 이 점화식의 해가 $O(3^{n/3})$ 이다. Moon–Moser 경계에 따라 출력만으로 $3^{n/3}$ 개가 나오는 그래프가 있으므로 $n$ 만의 함수로는 더 줄일 수 없다.

## 퇴화도 순서

그래프의 **퇴화도(degeneracy)** $d$ 는 모든 부분그래프가 차수 $d$ 이하의 정점을 갖는 가장 작은 $d$ 다. 차수가 가장 작은 정점을 차례로 지우면 정점의 순서 $v_1,\dots,v_n$ 이 나오고, 각 $v_i$ 의 이웃 가운데 뒤에 오는 것은 $d$ 개 이하다.

정리(Eppstein–Löffler–Strash). 바깥 고리를 이 순서로 돌며 $v_i$ 마다 $P$ 를 뒤에 오는 이웃, $X$ 를 앞에 오는 이웃으로 두고 축 정점을 쓴 재귀를 부르면, 극대 클릭을 모두 $O(dn3^{d/3})$ 시간에 나열한다[^4].

각 재귀의 처음 $P$ 가 $d$ 개 이하이므로 지수가 $n$ 이 아니라 $d$ 에 걸린다. [평면 그래프](planar-graphs.md)는 퇴화도가 $5$ 이하이므로 이 알고리즘으로 극대 클릭을 선형 시간에 나열한다.

# 활용

- 클릭수 계산. 나열한 극대 클릭 가운데 가장 큰 것이 $\omega(G)$ 다. 클릭 문제의 정확한 알고리즘 가운데 이 방식이 실제 그래프에서 많이 쓰인다.
- 극대 독립집합(maximal independent set)의 나열. 보그래프(complement graph) $\overline G$ 의 극대 클릭이 $G$ 의 극대 독립집합이므로 같은 알고리즘으로 나열한다.
- 망 분석. 사회망과 단백질 상호작용망에서 서로 모두 연결된 집단을 찾을 때 쓴다. 이런 망은 정점 수에 비해 퇴화도가 작아 퇴화도 순서 판본이 빠르다.

[^1]: C. Bron, J. Kerbosch, "Algorithm 457: finding all cliques of an undirected graph", Communications of the ACM 16 (1973), 575–577.
[^2]: E. Tomita, A. Tanaka, H. Takahashi, "The worst-case time complexity for generating all maximal cliques and computational experiments", Theoretical Computer Science 363 (2006), 28–42.
[^3]: J. W. Moon, L. Moser, "On cliques in graphs", Israel Journal of Mathematics 3 (1965), 23–28.
[^4]: D. Eppstein, M. Löffler, D. Strash, "Listing all maximal cliques in sparse graphs in near-optimal time", in *Algorithms and Computation*, Lecture Notes in Computer Science 6506 (2010), 403–414.

# 연관 문서

## 선수지식

- [클릭 문제](clique-problem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #graph_theory #complexity
