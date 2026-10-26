# Stoer–Wagner 알고리즘

# 개요

**Stoer–Wagner 알고리즘(Stoer–Wagner algorithm)** 은 음이 아닌 간선 무게가 있는 무향 그래프의 전역 최소 절단을 최대 흐름 없이 구하는 결정적 알고리즘이다. 전선망을 둘로 끊는 데 잘라야 하는 전선 무게의 최솟값을 구할 때, 정점 쌍마다 최대 흐름을 구하면 흐름 계산이 정점 수만큼 필요하다. 이 알고리즘은 정점을 가장 강하게 이어진 순서로 늘어놓아 마지막 두 정점을 가르는 가장 작은 절단을 바로 읽고, 그 두 정점을 합치는 일을 되풀이해 답을 얻는다.

# 직관

전역 최소 절단은 [Menger 정리](menger-theorem.md)의 간선 연결도이고, 정점 $s$ 를 고정해 나머지 정점마다 최대 흐름을 구하면 얻는다. 최대 흐름을 $n-1$ 번 구하는 대신, 어떤 한 쌍 $s,t$ 의 최소 $s$–$t$ 절단을 흐름 없이 구할 수 있으면 다음처럼 진행한다.

전역 최소 절단은 $s$ 와 $t$ 를 가르거나 가르지 않는다. 가르면 지금 구한 최소 $s$–$t$ 절단이 전역 최소 절단이다. 가르지 않으면 $s$ 와 $t$ 를 한 정점으로 합쳐도 그 절단이 남으므로, 정점이 하나 줄어든 그래프에서 같은 일을 한다. 매번 구한 절단 가운데 가장 작은 것이 답이다.

남은 일은 흐름 없이 최소 $s$–$t$ 절단을 구할 한 쌍을 고르는 것이다. 정점 하나에서 시작해, 지금까지 고른 정점들과 이어진 간선 무게의 합이 가장 큰 정점을 하나씩 더한다. 마지막에 더한 정점 $t$ 는 나머지 정점들과 가장 약하게 이어져 있고, 그 직전 정점이 $s$ 다.

# 정의

무향 그래프 $G=(V,E)$ 의 간선 무게를 $w\ge 0$ 이라 하고, 서로소인 $A,B\subseteq V$ 사이의 간선 무게의 합을 $w(A,B)$ 로 쓴다. 정점 $a$ 에서 시작해 $A=\lbrace a\rbrace$ 로 두고, $w(A,v)$ 가 가장 큰 $v\notin A$ 를 $A$ 에 더하기를 $A=V$ 가 될 때까지 되풀이한 순서 $v_1=a,v_2,\dots,v_n$ 을 **최대 인접 순서(maximum adjacency ordering)** 라 한다. 마지막 두 정점 $s=v_{n-1}$, $t=v_n$ 에 대해 $w(V\setminus\lbrace t\rbrace,\lbrace t\rbrace)$ 를 그 단계의 절단이라 한다.

```javascript
// 한 단계: 최대 인접 순서의 마지막 두 정점과 그 단계의 절단을 구한다.
function phase(graph, a) {
  const order = [a];
  const key = new Map(); // key.get(v) = w(A, v)
  for (const v of graph.vertices()) if (v !== a) key.set(v, graph.weight(a, v));
  while (key.size > 0) {
    const v = argmax(key); // 우선순위 큐로 고른다
    const cut = key.get(v);
    key.delete(v);
    order.push(v);
    for (const u of graph.neighbors(v)) if (key.has(u)) key.set(u, key.get(u) + graph.weight(v, u));
    if (key.size === 0) return { s: order[order.length - 2], t: v, cut };
  }
}

function stoerWagner(graph) {
  let best = Infinity;
  while (graph.vertexCount() > 1) {
    const { s, t, cut } = phase(graph, graph.anyVertex());
    best = Math.min(best, cut);
    graph.merge(s, t); // s 와 t 를 합치고 겹친 간선의 무게를 더한다
  }
  return best;
}
```

# 성질

## 단계의 절단

보조정리(Stoer–Wagner). 최대 인접 순서의 마지막 두 정점 $s,t$ 에 대해, 그 단계의 절단은 최소 $s$–$t$ 절단이다[^1].

증명의 요지. $s$ 와 $t$ 를 가르는 아무 절단 $C$ 를 잡는다. 순서에서 $v$ 보다 앞의 정점 집합을 $A_v$ 라 하고, $v$ 와 바로 앞 정점이 $C$ 의 다른 쪽에 있으면 $v$ 를 활성이라 한다. $A_v\cup\lbrace v\rbrace$ 안에서 $C$ 를 건너는 간선 무게의 합을 $C_v$ 라 할 때, 활성인 $v$ 마다 $w(A_v,v)\le C_v$ 임을 귀납법으로 보인다. 직전 활성 정점 $u$ 에 대해

$$
w(A_v,v)=w(A_u,v)+w(A_v\setminus A_u,v)\le w(A_u,u)+w(A_v\setminus A_u,v)\le C_u+w(A_v\setminus A_u,v)\le C_v
$$

이다. 첫 부등식은 $u$ 가 $v$ 보다 먼저 골라진 데서 나오고, 마지막 부등식은 $A_v\setminus A_u$ 의 정점이 모두 $v$ 와 $C$ 의 다른 쪽에 있어 그 간선들이 $C_u$ 밖에서 $C$ 를 건너는 데서 나온다. $t$ 는 활성이고 $A_t\cup\lbrace t\rbrace=V$ 이므로 그 단계의 절단 $w(A_t,t)$ 가 $C$ 의 무게 이하다.

## 정확성과 시간

정리. 알고리즘이 내놓는 값은 전역 최소 절단의 무게다.

전역 최소 절단이 어느 단계의 $s$ 와 $t$ 를 처음으로 가르면 그 단계의 절단이 그 무게 이하이고, 그 전 단계들의 합치기는 최소 절단을 바꾸지 않는다. 한 단계는 [Fibonacci 힙](fibonacci-heaps.md)으로 키를 늘리면 $O(\lvert E\rvert+\lvert V\rvert\log\lvert V\rvert)$ 시간이고, 단계가 $\lvert V\rvert-1$ 번이다. 전체 시간은 $O(\lvert V\rvert\lvert E\rvert+\lvert V\rvert^2\log\lvert V\rvert)$ 다. M. Stoer 와 F. Wagner 가 1997 년에 발표했고, 정점 순서는 H. Nagamochi 와 T. Ibaraki 의 것이다[^1][^2].

## 다른 방법과의 비교

[Gomory–Hu 나무](gomory-hu-tree.md)는 최대 흐름 $n-1$ 번으로 모든 쌍의 최소 절단을 주고, [Karger 축약 알고리즘](karger-min-cut.md)은 무작위 간선을 합쳐 높은 확률로 전역 최소 절단을 찾는다. Stoer–Wagner 알고리즘은 Karger 알고리즘처럼 정점을 합치지만, 합칠 쌍을 무작위가 아니라 최대 인접 순서로 정해 결정적으로 답을 낸다.

# 활용

- 간선 연결도의 계산. 무게가 모두 $1$ 이면 결과가 간선 연결도 $\lambda(G)$ 이고, 망이 몇 개의 연결 끊김을 견디는지 판정한다.
- 군집과 영상 분할. 무게를 유사도로 둔 그래프에서 가장 약하게 이어진 두 덩어리로 가르는 첫 단계로 쓰인다.
- 정수계획의 분리 문제. [외판원 문제](traveling-salesman-problem.md)의 부분 순회 제거 부등식을 어기는 집합은 해의 값을 무게로 둔 그래프에서 무게가 $2$ 보다 작은 절단이고, 전역 최소 절단으로 찾는다.

[^1]: M. Stoer, F. Wagner, "A simple min-cut algorithm", Journal of the ACM 44 (1997), 585–591.
[^2]: H. Nagamochi, T. Ibaraki, "Computing edge-connectivity in multigraphs and capacitated graphs", SIAM Journal on Discrete Mathematics 5 (1992), 54–66.

# 연관 문서

## 선수지식

- [Menger 정리](menger-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #algorithms #optimization
