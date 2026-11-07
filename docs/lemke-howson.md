# Lemke–Howson 알고리즘

# 개요

**Lemke–Howson 알고리즘(Lemke–Howson algorithm)** 은 두 사람 게임에서 혼합 전략의 [Nash 균형](nash-equilibrium.md) 하나를 피벗 연산으로 찾는 알고리즘이다. 두 사람이 각자 전략 몇 개 가운데 확률을 정해 섞을 때, 균형에서는 확률을 준 전략이 모두 같은 최대 보수를 내야 한다. 어느 전략에 확률을 줄지 고르는 방법은 지수적으로 많아서 하나씩 시험하면 계산이 커진다. Lemke–Howson 알고리즘은 균형의 조건을 [선형 상보성 문제](linear-complementarity.md)로 적고, 다면체 두 개의 꼭짓점을 따라 한 길로만 걸어 균형에 닿는다.

# 직관

두 사람이 각자 전략 둘 가운데 하나를 고르고, 같은 전략을 고르면 첫째 전략에서 둘 다 $3$, 둘째 전략에서 둘 다 $2$, 다르면 둘 다 $1$ 을 받는다. 첫째 사람의 보수 행렬 $A$ 와 둘째 사람의 보수 행렬 $B$ 가

$$
A=B=\begin{pmatrix}3&1\cr 1&2\end{pmatrix}
$$

이다. 둘 다 첫째 전략을 고르는 것은 균형이다. 상대가 첫째 전략을 고르면 첫째 전략의 보수 $3$ 이 둘째 전략의 보수 $1$ 보다 크다.

이 균형을 확률의 조건으로 적는다. 첫째 사람의 전략 $i$ 마다 "확률이 $0$" 이거나 "최대 보수를 낸다" 가운데 하나가 성립하고, 둘째 사람도 같다. 첫째 사람의 둘째 전략은 확률이 $0$ 이고, 첫째 전략은 최대 보수를 낸다. 둘째 사람도 같으므로, 네 전략 모두에서 두 조건 가운데 하나가 성립한다. 이 "둘 가운데 하나" 꼴이 상보성이다.

알고리즘은 확률이 모두 $0$ 인 가짜 출발점에서 시작한다. 그 점에서도 네 전략 모두 "확률이 $0$" 을 만족한다. 전략 하나의 조건을 일부러 풀고 확률을 키우면 다른 전략 하나의 조건이 겹쳐 두 번 성립하게 되고, 겹친 쪽의 다른 조건을 풀며 움직인다. 처음 푼 조건이 다시 성립하는 순간 네 조건이 모두 성립하고, 그 점이 균형이다.

# 정의

## 최선 응답 다면체와 표지

첫째 사람의 전략이 $m$ 개, 둘째 사람의 전략이 $n$ 개이고 보수 행렬 $A$, $B$ 의 성분이 모두 양수라 하자. 다면체

$$
P=\lbrace x\in\mathbb R^m:x\ge 0,\ B^{\mathsf T}x\le\mathbf 1\rbrace,\qquad Q=\lbrace y\in\mathbb R^n:y\ge 0,\ Ay\le\mathbf 1\rbrace
$$

를 **최선 응답 다면체(best response polytope)** 라 한다. $x\in P$ 에서 $x_i=0$ 이면 $x$ 가 **표지(label)** $i$ 를 갖고, $(B^{\mathsf T}x)\_j=1$ 이면 표지 $m+j$ 를 갖는다. $y\in Q$ 에서 $y_j=0$ 이면 표지 $m+j$, $(Ay)\_i=1$ 이면 표지 $i$ 를 갖는다. $x$ 와 $y$ 의 표지를 합쳐 $1,\dots,m+n$ 이 모두 나오면 $(x,y)$ 를 **완전 표지(completely labeled)** 라 한다.

직관 절의 게임에서 $x=(\frac13,0)$ 은 $x_2=0$ 으로 표지 $2$ 를, $B^{\mathsf T}x=(1,\frac13)$ 로 표지 $3$ 을 갖는다. $y=(\frac13,0)$ 은 표지 $4$ 와 $1$ 을 가지므로 $(x,y)$ 는 완전 표지다.

# 성질

## 완전 표지와 균형

$(x,y)\ne(0,0)$ 이 $P\times Q$ 의 완전 표지 점인 것과 $(x/\sum_ix_i,\thinspace y/\sum_jy_j)$ 가 Nash 균형인 것은 동치다.[^1] 표지 $i$ 는 "첫째 사람의 전략 $i$ 의 확률이 $0$" 이거나 "상대의 혼합 전략 $y$ 에 대해 전략 $i$ 의 보수가 최대" 라는 뜻이고, 완전 표지는 모든 전략에서 이 둘 가운데 하나가 성립한다는 것이다. 이 조건은 $z=(x,y)$, $w=(\mathbf 1-B^{\mathsf T}x,\thinspace\mathbf 1-Ay)$ 에 대한 상보성 $z\ge 0$, $w\ge 0$, $z^{\mathsf T}w=0$ 과 같다. 직관 절의 완전 표지 점을 정규화하면 두 사람이 첫째 전략을 고르는 균형이다.

## 알고리즘

```javascript
// 비퇴화 게임에서 완전 표지 점을 찾는다. 출발점은 (0, 0) 이다.
function lemkeHowson(P, Q, k) {
  let x = P.origin(), y = Q.origin();            // 모든 표지를 가진 가짜 균형
  let side = k <= P.dim ? "P" : "Q";             // 표지 k 를 버릴 다면체
  let drop = k;
  while (true) {
    const v = side === "P" ? x : y;
    const next = (side === "P" ? P : Q).moveAlongEdgeDropping(v, drop);
    const gained = (side === "P" ? P : Q).newLabel(v, next);
    if (side === "P") x = next; else y = next;
    if (gained === k) return [x, y];             // 버린 표지를 되찾으면 끝
    drop = gained;                               // 겹친 표지를 다른 쪽에서 버린다
    side = side === "P" ? "Q" : "P";
  }
}
```

비퇴화 게임에서는 각 꼭짓점이 정확히 차원 수만큼의 표지를 갖고, 표지 $k$ 하나만 빠진 점들은 $P\times Q$ 의 꼭짓점과 간선으로 이루어진 경로와 순환으로 갈라진다. 경로의 끝점은 완전 표지 점이고, 알고리즘은 $(0,0)$ 에서 시작하는 경로를 따라가므로 반대쪽 끝의 균형에 닿는다.[^1]

## 균형의 개수

$(0,0)$ 을 포함한 완전 표지 점이 경로의 끝점으로 둘씩 짝지어지므로 그 개수가 짝수다. 따라서 비퇴화 두 사람 게임의 Nash 균형의 개수는 홀수다.[^1] 직관 절의 게임에는 두 사람 모두 첫째 전략, 모두 둘째 전략, 그리고 확률 $(\frac13,\frac23)$ 을 섞는 균형까지 셋이 있다.

## 걸음 수

어느 표지를 버리고 시작하든 걸음 수가 전략 수에 대해 지수적인 게임이 있다.[^2] 두 사람 게임의 균형 하나를 찾는 문제가 PPAD(polynomial parity argument, directed) 완전이므로, 다항시간 알고리즘은 알려져 있지 않다. 경로를 따라가면 반드시 끝에 닿는다는 이 알고리즘의 논법이 PPAD 라는 복잡도 모임을 정의하는 원형이다.

# 활용

- 정확한 균형 계산. 피벗만 쓰므로 보수 행렬이 유리수이면 균형의 확률을 정확한 유리수로 낸다.
- 보충 피벗. 선형 상보성 문제의 Lemke 알고리즘과 같은 피벗 규칙이고, 두 사람 게임의 상보성 문제에서는 보조 변수 없이 $(0,0)$ 에서 출발할 수 있다.
- 균형 개수의 홀수성. 비퇴화 두 사람 게임의 균형 개수가 홀수라는 사실이 경로 짝짓기에서 증명된다.

[^1]: C. E. Lemke, J. T. Howson, Jr., "Equilibrium points of bimatrix games", *Journal of the Society for Industrial and Applied Mathematics* **12** (1964), 413–423. Bernhard von Stengel, "Computing equilibria for two-person games", *Handbook of Game Theory with Economic Applications* 3 권, Elsevier, 2002, 45 장이 다면체와 표지로 쓴 판을 정리한다.
[^2]: Rahul Savani, Bernhard von Stengel, "Hard-to-solve bimatrix games", *Econometrica* **74** (2006), 397–429.

# 연관 문서

## 선수지식

- [선형 상보성 문제](linear-complementarity.md)
- [Nash 균형](nash-equilibrium.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #complexity #computation
