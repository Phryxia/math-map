# 최단경로

# 개요

**최단경로(shortest path)** 는 가중 [유향그래프](graphs.md)에서 두 정점을 잇는 경로 가운데 간선 가중치의 합이 가장 작은 경로다. 예로 도로마다 걸리는 시간이 적힌 지도에서 한 도시로부터 다른 모든 도시까지 가장 빨리 가는 길을 찾으려 하면, 가능한 경로의 수가 도시 수에 대해 지수적으로 늘어 전부 비교할 수 없다. 최단경로는 각 도시까지의 거리가 이웃 도시까지의 거리에 도로 하나를 더한 값 가운데 가장 작은 것이라는 방정식을 세워 그 방정식을 풀어 얻는다.

# 직관

정점 $s,a,b,t$ 와 간선 $s\to a$ (가중치 $4$), $s\to b$ ($1$), $b\to a$ ($2$), $a\to t$ ($1$), $b\to t$ ($5$) 가 있는 지도에서 $s$ 에서 $t$ 로 가장 빨리 가는 길을 찾는다. 경로는 $s\to a\to t$ (길이 $5$), $s\to b\to t$ ($6$), $s\to b\to a\to t$ ($4$) 셋이고 셋째가 가장 짧다. 정점이 많으면 경로의 수가 정점 수에 대해 지수적으로 늘어 이렇게 모두 적을 수 없다.

$t$ 로 들어가는 마지막 간선은 $a\to t$ 나 $b\to t$ 다. 그래서 $s$ 에서 각 정점까지의 최단거리를 $d$ 로 쓰면 $d(t)=\min(d(a)+1,d(b)+5)$ 이고, 같은 이유로 $d(a)=\min(d(s)+4,d(b)+2)$, $d(b)=d(s)+1$, $d(s)=0$ 이다. 앞에서부터 풀면 $d(b)=1$, $d(a)=3$, $d(t)=4$ 이다.

간선이 사이클을 이루면 앞에서부터 푸는 순서가 없다. 그때는 $s$ 를 뺀 모든 거리를 $\infty$ 로 두고, 모든 간선에서 우변의 값으로 좌변을 고치는 일을 되풀이한다. 위 지도에서 한 번 고치면 $d(a)=4$, $d(b)=1$ 이고, 두 번째에 $d(a)=3$, $d(t)=5$, 세 번째에 $d(t)=4$ 가 되어 더 바뀌지 않는다. $k$ 번 고친 값은 간선을 $k$ 개 이하 쓰는 경로의 최단길이이고, 정점이 넷이라 경로의 간선은 셋 이하이므로 세 번에 끝난다.

# 정의

## 최단경로 문제

[유향그래프](graphs.md) $G=(V,E)$ 와 가중치 $w\colon E\to\mathbb R$ 과 출발점 $s\in V$ 가 주어진다. 경로의 길이를 간선 가중치의 합으로 두고

$$
d(v)=\inf\lbrace\thinspace\text{길이}(P)\ :\ P\ \text{는}\ s\to v\ \text{경로}\thinspace\rbrace
$$

로 둔다. 길이가 $d(v)$ 인 경로가 $s$ 에서 $v$ 로 가는 **최단경로(shortest path)** 다. 도달할 수 없으면 $\infty$ 이고, 음수 사이클을 거쳐 갈 수 있으면 $-\infty$ 다. 직관의 지도에서 $d(t)=4$ 이고 최단경로는 $s\to b\to a\to t$ 다.

## Bellman 방정식

**Bellman 방정식(Bellman equation)** 은 최단거리가 만족하는 다음 방정식이다.

$$
d(s)=0,\qquad d(v)=\min_{(u,v)\in E}\bigl(d(u)+w(u,v)\bigr)\quad(v\ne s)
$$

양쪽에 미지의 $d$ 가 있으므로 고정점 방정식이고, [동적 계획법](dynamic-programming.md)으로 푼다. 직관의 $d(t)=\min(d(a)+1,d(b)+5)$ 가 $v=t$ 인 식이다. 그래프가 **DAG**(directed acyclic graph), 곧 사이클이 없는 유향그래프이면 [위상정렬](topological-sort.md)의 순서로 한 번 훑어 풀린다.

## 완화와 Bellman–Ford 알고리즘

$d_k(v)$ 를 간선을 $k$ 개 이하 쓰는 경로의 최단길이라 하면 다음이 성립한다.

$$
d_0(v)=\begin{cases}0,&v=s\cr \infty,&\text{그 외}\end{cases},
\qquad
d_{k}(v)=\min\Bigl(d_{k-1}(v),\ \min_{(u,v)\in E}\bigl(d_{k-1}(u)+w(u,v)\bigr)\Bigr)
$$

간선 $(u,v)$ 에서 $d(v)$ 를 $\min(d(v),d(u)+w(u,v))$ 로 고치는 연산을 **완화(relaxation)** 라 한다. 직관의 지도에서 $d_1(a)=4$, $d_2(a)=3$, $d_2(t)=5$, $d_3(t)=4$ 다.

**Bellman–Ford 알고리즘(Bellman–Ford algorithm)** 은 모든 간선의 완화를 $\lvert V\rvert-1$ 번 되풀이한 뒤, 한 번 더 완화해 값이 줄어드는 간선이 있으면 음수 사이클을 보고하는 알고리즘이다[^1].

```javascript
d = Array(n).fill(Infinity); d[s] = 0;
for (let i = 0; i < n - 1; i++)
  for (const [u, v, w] of edges) d[v] = Math.min(d[v], d[u] + w);
for (const [u, v, w] of edges)
  if (d[u] + w < d[v]) return "음수 사이클";
```

## 다른 경우의 알고리즘

| 조건 | 알고리즘 | 시간 |
|---|---|---|
| 가중치 비음수 | Dijkstra | $O(\vert E\vert\log\vert V\vert)$ |
| DAG | 위상순서로 한 번 훑기 | $O(\vert V\vert+\vert E\vert)$ |
| 음수 간선 허용 | Bellman–Ford | $O(\vert V\vert\vert E\vert)$ |
| 모든 쌍 | Floyd–Warshall | $O(\vert V\vert^3)$ |
| 모든 쌍, 희소 | Johnson (재가중 후 Dijkstra) | $O(\vert V\vert\vert E\vert\log\vert V\vert)$ |

**Dijkstra 알고리즘(Dijkstra's algorithm)** 은 가중치가 비음수일 때 아직 확정되지 않은 정점 가운데 $d$ 가 가장 작은 것을 확정하고 그 정점에서 나가는 간선을 완화하기를 되풀이한다. 직관의 지도에서는 $s,b,a,t$ 의 순서로 확정된다.

**Johnson 재가중(Johnson's reweighting)** 은 잠재함수 $h\colon V\to\mathbb R$ 로 가중치를 다음과 같이 바꾸는 것이다.

$$
w'(u,v)=w(u,v)+h(u)-h(v)
$$

# 성질

## Bellman–Ford 의 정확성과 시간

음수 사이클이 없으면 최단경로를 단순경로로 고를 수 있고, 단순경로의 간선 수는 $\lvert V\rvert-1$ 이하다. $d_k$ 가 간선 $k$ 개 이하의 경로를 모두 고려하므로 $k=\lvert V\rvert-1$ 에서 답이 확정된다. 시간은 $O(\lvert V\rvert\lvert E\rvert)$ 이고, 한 번의 반복에서 아무 값도 바뀌지 않으면 그 자리에서 멈춰도 된다.

## Dijkstra 의 정확성

가중치가 비음수면 확정되지 않은 정점 가운데 $d$ 가 가장 작은 것은 다른 정점을 거쳐 더 줄어들 수 없다. 그래서 정점마다 한 번만 처리하면 되고 Bellman–Ford 보다 빠르다. 음수 간선이 있으면 이 논증이 성립하지 않는다[^2].

## 재가중의 보존

$s$ 에서 $v$ 로 가는 모든 경로의 길이가 $w'$ 아래에서 똑같이 $h(s)-h(v)$ 만큼 달라지므로 최단경로의 집합이 바뀌지 않는다. 새 정점 하나에서 모든 정점으로 가중치 $0$ 인 간선을 더한 그래프에서 Bellman–Ford 로 구한 거리를 $h$ 로 잡으면, 삼각부등식 $h(v)\le h(u)+w(u,v)$ 에서 $w'\ge 0$ 이 나온다. 그래서 Bellman–Ford 한 번 뒤에 모든 출발점에서 Dijkstra 를 쓸 수 있다.

## 고정점 반복

$D=(\mathbb R\cup\lbrace\pm\infty\rbrace)^{V}$ 위에 값이 작을수록 정보가 많다는 순서를 주고 다음으로 둔다.

$$
F(d)(v)=\begin{cases}0,&v=s\cr \min_{(u,v)\in E}\bigl(d(u)+w(u,v)\bigr),&\text{그 외}\end{cases}
$$

$\bot$ 을 $s$ 에서만 $0$ 이고 나머지가 $\infty$ 인 배열로 두면 Bellman–Ford 의 값은 사슬 $F^k(\bot)$ 이다. $F$ 는 단조이고 연속이므로 [영역 이론](domain-theory.md)의 Kleene 고정점 정리(Kleene fixed-point theorem)가 적용되고, 사슬의 극한이 최소 고정점이다. 음수 사이클이 있으면 사슬이 끝없이 내려가고, 극한은 그 사이클에서 도달 가능한 정점에서 $-\infty$ 이며 이것도 고정점이다.

## 기본 성질

- 최적 부분구조(optimal substructure). $s\to v$ 최단경로의 앞부분은 그 자체로 최단경로다. 음수 사이클이 없을 때 성립하고, Bellman 방정식은 이것에서 나온다.
- 잠재함수. 부등식 $d(v)\le d(u)+w(u,v)$ 와 $d(s)=0$ 을 만족하는 함수는 여럿이고, 최단거리는 그 가운데 점별 최대다. Johnson 재가중은 이 부등식을 쓴다.
- 음수 사이클 검출. $\lvert V\rvert$ 번째 반복에서 값이 줄어드는 간선에서 선행자 포인터를 거슬러 가면 사이클이 나온다.
- [선형계획법](linear-programming.md)과의 관계. 최단거리는 제약 $d(v)-d(u)\le w(u,v)$, $d(s)=0$ 아래 $\sum_v d(v)$ 를 최대화하는 문제의 해이고, 그 쌍대가 단위 유량을 보내는 최소비용 흐름이다.

# 활용

- 경로 찾기. 지도와 네트워크 라우팅에 쓰이고, 거리 벡터 라우팅 프로토콜(distance-vector routing protocol)이 Bellman–Ford 의 분산 판본이다.
- 차익거래 탐지. 환율의 로그에 음의 부호를 붙여 가중치로 쓰면 음수 사이클이 무위험 차익거래(arbitrage)다.
- 차이 제약 조건계(system of difference constraints). $x_j-x_i\le c_{ij}$ 꼴의 부등식계는 간선 $i\to j$ 의 가중치를 $c_{ij}$ 로 둔 최단경로 문제와 같고, 해의 존재가 음수 사이클의 부재와 동치다. 일정 계획 문제가 이 꼴로 풀린다.
- 강화학습의 값 반복. [Markov 결정 과정](markov-decision-process.md)의 Bellman 방정식도 같은 반복으로 푼다. 거기서는 할인율이 Bellman 연산자를 수축사상으로 만들어 수렴이 보장되고, 최단경로에서는 음수 사이클이 없다는 조건이 반복을 멈추게 한다.

[^1]: R. Bellman, *On a routing problem*, Quart. Appl. Math. **16** (1958), 87–90.

[^2]: T. H. Cormen, C. E. Leiserson, R. L. Rivest, C. Stein, *Introduction to Algorithms*, 3판, 24–25 장. Bellman–Ford, Dijkstra, Johnson 재가중과 차이 제약 조건계.

# 연관 문서

## 선수지식

- [동적 계획법](dynamic-programming.md)
- [영역 이론](domain-theory.md)

## 더 알아보기

- [Markov 결정 과정](markov-decision-process.md)
- [세분 복잡도](fine-grained-complexity.md)

#algorithms #graph_theory #computation
