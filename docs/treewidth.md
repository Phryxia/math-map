# 나무폭

# 개요

나무폭은 그래프가 나무에서 얼마나 떨어져 있는지 재는 수다. 그래프의 정점을 주머니로 묶어 나무 모양으로 늘어놓은 것이 나무 분해이고, 나무폭은 가장 큰 주머니의 크기에서 $1$ 을 뺀 값의 최솟값이다. 나무의 나무폭은 $1$, 완전그래프 $K_n$ 의 나무폭은 $n-1$ 이다.

나무폭이 $k$ 로 묶인 그래프에서는 독립집합, 지배집합, 색칠처럼 일반 그래프에서 NP(nondeterministic polynomial time)-난해인 문제들이 $k$ 에 지수이고 정점 수에 선형인 시간에 풀린다. 나무폭은 마이너를 취해도 늘지 않으므로 [그래프 마이너](graph-minors.md)의 구조 정리에도 쓰인다.

# 직관

최대 독립집합 문제는 서로 인접하지 않은 정점을 가장 많이 고르는 것이다. 일반 그래프에서는 다항 시간 알고리즘이 알려져 있지 않지만 나무에서는 정점 수에 선형인 시간에 풀린다. 나무가 아닌 그래프가 나무에 얼마나 가까우면 같은 계산이 통하는지 묻는다.

나무에서는 이렇게 푼다. 아무 정점을 뿌리로 잡고 정점 $v$ 마다 두 수를 구한다. $v$ 를 고른 채로 $v$ 아래 부분나무에서 얻는 최대 크기와, $v$ 를 고르지 않은 채로 얻는 최대 크기다. $v$ 를 골랐으면 자식마다 고르지 않은 값을 쓰고, 고르지 않았으면 자식마다 두 값 가운데 큰 것을 쓴다. 자식 부분나무끼리는 간선이 없으므로 따로 구한 값을 그냥 더한다. 잎에서 뿌리까지 올라가면 답이 나온다.

사이클 $C_4$ 에 같은 계산을 해 본다. 정점 $v_1,v_2,v_3,v_4$ 가 차례로 이어지고 $v_4$ 와 $v_1$ 도 이어진다. $v_1$ 을 뿌리로 잡으면 $v_2$ 와 $v_4$ 가 자식이고 $v_3$ 은 둘 모두의 자식이어서 두 부분나무가 $v_3$ 을 공유한다. 겹치지 않게 $v_3$ 을 $v_2$ 아래에만 두면 간선 $v_3v_4$ 가 두 부분나무를 가로지른다. $v_2$ 쪽 값과 $v_4$ 쪽 값을 따로 구해 더하면 $v_3$ 과 $v_4$ 를 함께 고른 경우가 답에 섞인다.

떼어 낸 두 조각 사이에 간선이 남아서 막혔으니 그 간선의 끝점을 양쪽 조각에 함께 넣는다. $C_4$ 를 $\lbrace v_1,v_2,v_3\rbrace$ 과 $\lbrace v_1,v_3,v_4\rbrace$ 로 나누면 네 간선이 전부 한쪽 조각 안에 들어가고 두 조각이 공유하는 것은 $v_1$ 과 $v_3$ 이다. 공유하는 두 정점을 고를지 말지 네 경우로 고정하면 조각마다 최댓값을 따로 구해 합칠 수 있다. 경우 수는 조각 크기에 지수이므로 조각이 작아야 계산이 끝난다. 이렇게 만든 조각들을 나무 모양으로 이은 것을 나무 분해, 가장 큰 조각의 크기에서 $1$ 을 뺀 값을 나무폭이라 한다.

# 정의

## 나무 분해

그래프 $G$ 의 **나무 분해**는 나무 $T$ 와 주머니 모임 $\lbrace B_t\rbrace\_{t\in V(T)}$ 의 쌍이고 각 $B_t$ 는 $V(G)$ 의 부분집합이다. 다음 세 조건을 만족해야 한다.

- 덮기: $\bigcup_{t\in V(T)}B_t=V(G)$
- 간선: 모든 $uv\in E(G)$ 에 대해 $u,v\in B_t$ 인 $t$ 가 있다
- 연결성: 각 $v\in V(G)$ 에 대해 $T\lbrack \lbrace t:v\in B_t\rbrace\rbrack$ 가 $T$ 의 연결 부분나무다

분해의 **폭**은 $\max\_{t\in V(T)}\lvert B_t\rvert-1$ 이다.

## 나무폭

$G$ 의 **나무폭** $\mathrm{tw}(G)$ 는 $G$ 의 나무 분해가 갖는 폭의 최솟값이다.

$$
\mathrm{tw}(G)=\min\_{(T,\mathcal B)}\thinspace\Bigl(\max\_{t\in V(T)}\lvert B_t\rvert-1\Bigr)
$$

$1$ 을 빼는 것은 나무의 나무폭을 $1$ 로 맞추기 위한 것이다. 나무 $G$ 에서 간선마다 주머니 하나를 두고 두 끝점을 담으면 주머니 크기가 $2$ 이고 폭이 $1$ 이다.

## 좋은 나무 분해

뿌리를 정한 나무 분해에서 각 정점 $t$ 가 다음 네 꼴 가운데 하나이면 **좋은 나무 분해**라 한다.

- 잎: 자식이 없고 $B_t=\varnothing$
- 도입: 자식 $c$ 하나이고 $B_t=B_c\cup\lbrace v\rbrace$, $v\notin B_c$
- 망각: 자식 $c$ 하나이고 $B_t=B_c\setminus\lbrace v\rbrace$, $v\in B_c$
- 접합: 자식 $c_1,c_2$ 이고 $B_t=B_{c_1}=B_{c_2}$

폭 $k$ 의 나무 분해는 폭을 늘리지 않고 정점 수 $O(kn)$ 의 좋은 나무 분해로 바꿀 수 있다.

# 성질

## 나무폭의 예

| 그래프 | 나무폭 |
| --- | --- |
| 숲 | $\le 1$ |
| 사이클 $C_n$ , $n\ge3$ | $2$ |
| 직렬-병렬 그래프 | $\le 2$ |
| 완전그래프 $K_n$ | $n-1$ |
| 완전이분그래프 $K_{m,n}$ , $m\le n$ | $m$ |
| $n\times n$ 격자 | $n$ |

$\mathrm{tw}(G)\le1$ 과 $G$ 가 숲인 것은 동치다. $\mathrm{tw}(G)\le2$ 와 $K_4$ 를 마이너로 갖지 않는 것도 동치다.

## 분리자

**정리.** $(T,\lbrace B_t\rbrace)$ 를 $G$ 의 나무 분해라 하고 $t_1t_2\in E(T)$ 라 한다. $T$ 에서 이 간선을 지워 생기는 두 부분나무의 주머니 합집합을 $X_1,X_2$ 라 하면 $X_1\cap X_2=B\_{t_1}\cap B\_{t_2}$ 이고 $X_1\setminus X_2$ 와 $X_2\setminus X_1$ 사이에는 간선이 없다.

증명의 요지는 두 조건이다. $v\in X_1\cap X_2$ 이면 $v$ 가 든 주머니들이 $T$ 에서 연결이므로 $t_1$ 과 $t_2$ 를 모두 지나고 $v\in B\_{t_1}\cap B\_{t_2}$ 다. 간선 $uv$ 가 $X_1\setminus X_2$ 와 $X_2\setminus X_1$ 을 잇는다면 $u,v$ 를 함께 담은 주머니가 어느 쪽에도 없다.

## 균형 분리자

**정리.** $\mathrm{tw}(G)\le k$ 이고 $\lvert V(G)\rvert=n$ 이면 $\lvert S\rvert\le k+1$ 인 $S\subseteq V(G)$ 가 있어 $G-S$ 의 모든 연결성분이 정점 $n/2$ 개 이하를 갖는다.

증명의 요지. $T$ 의 정점 $t$ 마다 $B_t$ 를 지웠을 때 가장 큰 조각의 정점 수를 재고, 그 값이 가장 작은 $t$ 를 고른다. 이 $t$ 에서 어떤 조각의 정점 수가 $n/2$ 를 넘으면 그 조각 쪽 이웃 $t'$ 로 옮기면 값이 줄어든다. 더 옮길 수 없는 $t$ 에서 $S=B_t$ 를 취한다.

## 마이너 단조성

**정리.** $H\preceq G$ 이면 $\mathrm{tw}(H)\le\mathrm{tw}(G)$ 다.

증명의 요지는 마이너의 세 연산마다 분해를 고치는 것이다. 정점 $v$ 를 삭제할 때는 주머니마다 $v$ 를 지운다. 간선 삭제는 분해를 그대로 둔다. 간선 $uv$ 를 축약할 때는 $u$ 나 $v$ 가 든 주머니마다 그 정점을 새 정점 $w$ 로 바꾼다. $u$ 가 든 주머니들과 $v$ 가 든 주머니들이 각각 부분나무이고 간선 조건으로 둘이 주머니 하나를 공유하므로 합집합도 부분나무다. 세 연산 모두 주머니 크기를 늘리지 않는다.

따름정리로 $\mathrm{tw}(G)\le k$ 는 마이너에 대해 닫힌 성질이고, Robertson–Seymour 정리에 따라 유한 개의 금지 마이너로 특징지어진다. $k=1$ 에서 그 목록은 $K_3$ 이고 $k=2$ 에서 $K_4$ 다.

## 격자 마이너 정리

**정리 (Robertson–Seymour).** 함수 $f$ 가 있어 $\mathrm{tw}(G)\ge f(r)$ 이면 $G$ 는 $r\times r$ 격자를 마이너로 갖는다.[^1]

역방향은 마이너 단조성에서 바로 나온다. $r\times r$ 격자의 나무폭이 $r$ 이므로 $G$ 가 그 격자를 마이너로 가지면 $\mathrm{tw}(G)\ge r$ 이다. 두 방향을 합치면 나무폭이 큰 것과 큰 격자를 마이너로 갖는 것이 동치다.

## 나무폭 계산의 복잡도

**정리.** 입력 $(G,k)$ 에 대해 $\mathrm{tw}(G)\le k$ 를 판정하는 문제는 [NP-완전](np-completeness.md)이다.

**정리 (Bodlaender).** $k$ 를 고정하면 $\mathrm{tw}(G)\le k$ 를 판정하고 폭 $k$ 의 분해를 내놓는 $O(n)$ 시간 알고리즘이 있다.[^2]

이 알고리즘의 상수는 $k$ 에 이중 지수다. 실제 계산에서는 폭을 $O(\mathrm{tw}(G))$ 로 근사하는 알고리즘을 쓴다.

## 독립집합의 동적 계획법

폭 $k$ 의 좋은 나무 분해에서 주머니 $B_t$ 의 부분집합 $S$ 마다 값을 하나 둔다. $t$ 아래 부분나무가 거느린 정점 가운데 $B_t$ 와의 교집합이 정확히 $S$ 인 독립집합의 최대 크기다.

```javascript
// 좋은 나무 분해의 뿌리에서 재귀로 내려가 주머니마다 표를 채운다.
// 표의 키는 B_t 의 부분집합, 값은 그 부분집합으로 끝나는 독립집합의 최대 크기.
function table(t) {
  switch (kind(t)) {
    case 'leaf':
      return new Map([[emptySet, 0]]);

    case 'introduce': {            // B_t = B_c + {v}
      const dp = table(child(t)), out = new Map();
      for (const [S, w] of dp) {
        out.set(S, w);                                   // v 를 고르지 않는다
        if (!adjacentToAny(v, S)) out.set(S.with(v), w + 1);
      }
      return out;
    }

    case 'forget': {               // B_t = B_c - {v}
      const dp = table(child(t)), out = new Map();
      for (const [S, w] of dp) {
        const key = S.without(v);
        out.set(key, Math.max(out.get(key) ?? -Infinity, w));
      }
      return out;
    }

    case 'join': {                 // B_t = B_c1 = B_c2
      const a = table(child1(t)), b = table(child2(t)), out = new Map();
      for (const [S, w] of a) out.set(S, w + b.get(S) - S.size);
      return out;
    }
  }
}
```

접합에서 $S$ 를 양쪽 자식이 모두 세므로 한 번 빼 준다. 도입에서 $v$ 를 $S$ 에 넣을 수 있는 조건은 $v$ 가 $S$ 의 어느 정점과도 인접하지 않는 것이고, 분리자 성질로 $v$ 와 바깥 정점을 잇는 간선은 모두 $B_t$ 를 지나므로 이 검사만으로 충분하다.

주머니마다 부분집합이 $2^{k+1}$ 개이고 좋은 분해의 정점이 $O(kn)$ 개이므로 전체 시간은 $O(2^k kn)$ 이다.

## Courcelle 정리

**정리 (Courcelle).** 그래프의 성질이 단항 2차 논리(monadic second-order logic, MSO)로 쓸 수 있으면, 나무폭이 $k$ 로 묶인 그래프에서 그 성질은 $O(n)$ 시간에 판정된다. 상수는 $k$ 와 논리식에만 의존한다.[^3]

MSO 는 [1차 논리](first-order-logic.md)에 정점 집합과 간선 집합 위의 양화를 더한 것이다. 3-색칠 가능성은 정점 집합 셋의 존재로, Hamilton 순환의 존재는 간선 집합 하나의 존재와 그 집합이 순환을 이룬다는 1차 조건으로 쓸 수 있다.

# 활용

- **매개변수 알고리즘.** 나무폭을 매개변수로 삼는 동적 계획법이 고정 매개변수 다루기 가능 알고리즘의 표준 예다. 독립집합, 지배집합, [그래프 색칠](graph-coloring.md), Hamilton 순환이 모두 이 틀에서 풀린다.
- **구조 그래프 이론.** 격자 마이너 정리가 그래프를 나무폭이 작은 것과 큰 격자를 품은 것으로 가른다. Robertson–Seymour 의 구조 정리는 금지 마이너가 정해진 그래프족을 이 두 경우로 분해한다.
- **평면 그래프의 분할.** 평면 그래프의 나무폭이 $O(\sqrt n)$ 이고 균형 분리자 정리를 거쳐 분할 정복 알고리즘이 나온다.
- **확률 그래프 모형의 추론.** 결합분포를 그래프로 적은 모형에서 주변분포 계산의 비용이 모랄 그래프의 나무폭에 지수적이다. 주머니 단위로 메시지를 주고받는 절차가 위 동적 계획법과 같은 구조다.
- **제약 충족 문제.** 변수와 제약이 이루는 그래프의 나무폭이 묶이면 해의 존재 판정이 다항 시간에 끝난다.

[^1]: N. Robertson, P. Seymour, "Graph Minors. V. Excluding a planar graph", Journal of Combinatorial Theory Series B 41 (1986), https://doi.org/10.1016/0095-8956(86)90030-4
[^2]: H. L. Bodlaender, "A linear-time algorithm for finding tree-decompositions of small treewidth", SIAM Journal on Computing 25 (1996), https://doi.org/10.1137/S0097539793251219
[^3]: B. Courcelle, "The monadic second-order logic of graphs I: Recognizable sets of finite graphs", Information and Computation 85 (1990), https://doi.org/10.1016/0890-5401(90)90043-H

# 연관 문서

## 선수지식

- [그래프 마이너](graph-minors.md)
- [동적 계획법](dynamic-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #algorithms #complexity #combinatorics
