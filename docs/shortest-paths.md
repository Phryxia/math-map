# 최단경로

# 개요

가중 유향그래프에서 출발점 $s$ 로부터 각 정점까지의 최단거리 $d(v)$ 는 경로를 세는 대신 거리 함수가 만족하는 방정식을 풀어 얻는다.

$$
d(s)=0,\qquad d(v)=\min_{(u,v)\in E}\bigl(d(u)+w(u,v)\bigr)
$$

이 **Bellman 방정식**은 양쪽에 미지의 $d$ 가 있으므로 정의가 아니라 고정점 방정식이고, [동적 계획법](dynamic-programming.md)이 푸는 대상이다. 그래프가 **DAG**(directed acyclic graph)면 위상순서대로 한 번 훑어 풀린다. 사이클이 있으면 모든 거리를 $\infty$ 로 두고 우변을 좌변에 대입하기를 되풀이하며, 값이 단조 감소하고 음수 사이클이 없으면 $|V|-1$ 단계 안에 멈춘다. 이것이 Bellman–Ford 알고리즘이다.

이 반복은 [영역 이론](domain-theory.md)의 고정점 반복과 같은 구조다. 값이 작아지는 방향이 정보가 늘어나는 방향이고, $\infty$ 가 $\bot$ , 각 반복이 $F$ 한 번의 적용, 안정화가 고정점 도달이다. 사슬이 유한 단계에 멈추지 않는 경우가 음수 사이클이므로, 알고리즘의 종료 조건과 이론의 수렴 조건이 같은 것을 가리킨다.

# 직관

## 완화 반복

$d_k(v)$ 를 간선을 $k$ 개 이하 쓰는 경로의 최단길이라 하면

$$
d_0(v)=\begin{cases}0,&v=s\cr \infty,&\text{그 외}\end{cases},
\qquad
d_{k}(v)=\min\Bigl(d_{k-1}(v),\ \min_{(u,v)\in E}\bigl(d_{k-1}(u)+w(u,v)\bigr)\Bigr)
$$

이다. $k$ 를 하나 늘리는 것은 모든 간선에 더 짧게 만들 기회를 한 번씩 주는 것이고, 이 완화(relaxation)를 $|V|-1$ 번 하면 끝난다.

## 반복 횟수 $|V|-1$

음수 사이클이 없으면 최단경로를 단순경로로 고를 수 있고, 단순경로의 간선 수는 최대 $|V|-1$ 이다. $d_k$ 가 간선 $k$ 개 이하의 경로를 모두 고려하므로 $k=|V|-1$ 에서 답이 확정된다.

$|V|$ 번째 반복에서 값이 또 줄어들면 간선을 $|V|$ 개 쓰는 더 짧은 걸음이 있고, 그런 걸음은 정점을 반복하므로 사이클을 품으며 그 사이클의 가중치 합은 음수다. 종료 판정이 곧 음수 사이클 검출이다.

## 고정점 관점

$D=(\mathbb R\cup\lbrace\pm\infty\rbrace)^{V}$ 위에 값이 작을수록 정보가 많다는 순서를 주고

$$
F(d)(v)=\begin{cases}0,&v=s\cr \min_{(u,v)\in E}\bigl(d(u)+w(u,v)\bigr),&\text{그 외}\end{cases}
$$

로 두면 값 반복은 사슬 $F^k(\bot)$ 이다. $\bot$ 은 $s$ 에서만 $0$ 이고 나머지가 $\infty$ 인 배열이다. $F$ 는 단조이고 연속이므로 [Kleene 반복](domain-theory.md)이 적용된다.

음수 사이클이 있으면 사슬이 아래로 끝없이 내려가고, 극한은 그 사이클에서 도달 가능한 정점에서 $-\infty$ 이며 이것도 고정점이다. 방정식의 해는 유일하지 않다. $s$ 에서 도달할 수 없는 정점에는 부등식을 깨지 않는 값이 여럿 있다. 참된 거리 함수는

$$
d(s)\le0,\quad d(v)\le d(u)+w(u,v)\ \ \forall(u,v)\in E
$$

를 만족하는 것 중 점별로 가장 큰 것이다. 이 서술은 선형계획의 형태이고 그 쌍대가 흐름 문제다.

# 정의

## 문제

유향그래프 $G=(V,E)$ 와 가중치 $w\colon E\to\mathbb R$ 과 출발점 $s\in V$ 가 주어진다. 경로의 길이를 간선 가중치의 합으로 정의하고

$$
d(v)=\inf\lbrace\thinspace\text{길이}(P)\ :\ P\ \text{는}\ s\to v\ \text{경로}\thinspace\rbrace
$$

로 둔다. 도달할 수 없으면 $\infty$ 이고, 음수 사이클을 거쳐 갈 수 있으면 $-\infty$ 다.

## Bellman–Ford

```javascript
d = Array(n).fill(Infinity); d[s] = 0;
for (let i = 0; i < n - 1; i++)
  for (const [u, v, w] of edges) d[v] = Math.min(d[v], d[u] + w);
for (const [u, v, w] of edges)
  if (d[u] + w < d[v]) return "음수 사이클";
```

시간복잡도는 $O(|V||E|)$ 다[^1]. 반복 중 아무 값도 바뀌지 않으면 그 자리에서 멈춘다.

## 다른 경우의 알고리즘

| 조건 | 알고리즘 | 시간 |
|---|---|---|
| 가중치 비음수 | Dijkstra | $O(\vert E\vert\log\vert V\vert)$ |
| DAG | 위상순서로 한 번 훑기 | $O(\vert V\vert+\vert E\vert)$ |
| 음수 간선 허용 | Bellman–Ford | $O(\vert V\vert\vert E\vert)$ |
| 모든 쌍 | Floyd–Warshall | $O(\vert V\vert^3)$ |
| 모든 쌍, 희소 | Johnson (재가중 후 Dijkstra) | $O(\vert V\vert\vert E\vert\log\vert V\vert)$ |

가중치가 비음수면 확정된 거리 중 가장 작은 것은 더 줄어들 수 없으므로 각 정점을 한 번만 처리하는 탐욕적 순서가 성립하고, Dijkstra 가 더 빠르다. 음수 간선이 있으면 이 논거가 무너져 반복으로 돌아간다[^2].

## Johnson 의 재가중

음수 간선이 있을 때 Dijkstra 를 쓰려면 잠재함수 $h\colon V\to\mathbb R$ 로 가중치를 바꾼다.

$$
w'(u,v)=w(u,v)+h(u)-h(v)
$$

경로의 길이는 양 끝의 $h$ 차이만큼만 달라지므로 최단경로의 집합이 보존된다. $h$ 를 Bellman–Ford 로 구한 거리 함수로 잡으면 삼각부등식 $h(v)\le h(u)+w(u,v)$ 에서 $w'\ge0$ 이 나온다. 한 번의 Bellman–Ford 가 이후의 모든 Dijkstra 실행을 가능하게 한다.

# 성질

- **최적 부분구조.** $s\to v$ 최단경로의 앞부분은 그 자체로 최단경로다. 음수 사이클이 없을 때만 성립하며, Bellman 방정식의 근거다.
- **해의 비유일성.** 부등식 $d(v)\le d(u)+w(u,v)$ 를 만족하는 잠재함수는 여럿이고, 최단거리는 그중 점별 최대다. 이 여유가 Johnson 재가중을 가능하게 한다.
- **음수 사이클 검출.** $|V|$ 번째 반복에서 값이 줄어드는 간선을 따라 선행자 포인터를 역추적하면 사이클을 복원한다. 차익거래 탐지가 이 형태로 환원된다.
- **선형계획과의 관계.** 최단경로는 제약 $d(v)-d(u)\le w(u,v)$ 아래 $\max\sum_v d(v)$ 를 푸는 문제이고, 그 쌍대가 단위 유량을 보내는 최소비용 흐름이다. 차이 제약 조건계의 실행 가능성 판정도 같은 문제다.
- **DAG 라는 특수화.** 사이클이 없으면 반복 없이 위상순서 한 번으로 끝난다. 반복이 필요한 원인이 사이클에 있다.

# 활용

## 값 반복의 종료

간선을 살피는 순서는 고정점에 이르는 속도만 바꾸고 고정점 자체는 바꾸지 않는다. 음수 사이클이 있으면 반복이 $n$ 번째에도 멈추지 않으며, 멈추지 않는다는 것이 검출 신호다.

## 라우팅, 차익거래, 제약 조건계, 강화학습

- **경로 찾기.** 지도와 네트워크 라우팅의 기본이며, 거리 벡터 라우팅 프로토콜이 Bellman–Ford 의 분산 판본이다.
- **차익거래 탐지.** 환율의 로그를 부호 바꿔 가중치로 쓰면 음수 사이클이 무위험 차익거래다.
- **차이 제약 조건계.** $x_j-x_i\le c_{ij}$ 꼴의 부등식계는 최단경로 문제와 같고, 해의 존재가 음수 사이클의 부재와 동치다. 일정 계획 문제가 이 형태로 풀린다.
- **강화학습의 값 반복.** [Markov 결정 과정](markov-decision-process.md)의 Bellman 방정식에서 같은 반복이 돌아간다. 할인율이 수축사상을 만들어 수렴을 보장하는 자리가, 여기서 음수 사이클이 없어 사슬이 멈추는 자리에 대응한다.

[^1]: R. Bellman, *On a routing problem*, Quart. Appl. Math. **16** (1958), 87–90.

[^2]: T. H. Cormen, C. E. Leiserson, R. L. Rivest, C. Stein, *Introduction to Algorithms*, 3판, 24–25 장. Bellman–Ford, Dijkstra, Johnson 재가중과 차이 제약 조건계.

# 연관 문서

## 선수지식

- [동적 계획법](dynamic-programming.md)
- [영역 이론과 Kleene 고정점 정리](domain-theory.md)

## 더 알아보기

- [Markov 결정 과정](markov-decision-process.md)

#algorithms #graph_theory #computation
