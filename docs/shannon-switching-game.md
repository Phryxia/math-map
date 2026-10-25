# Shannon 전환 게임

# 개요

**Shannon 전환 게임(Shannon switching game)** 은 그래프의 두 정점 $u,v$ 를 두고, Short 는 간선을 하나씩 차지하고 Cut 은 간선을 하나씩 지워, Short 가 차지한 간선으로 $u$ 와 $v$ 를 이으면 Short 가 이기는 게임이다. C. Shannon 이 고안했고 A. Lehman 이 1964 년에 승패를 완전히 판정했다[^1]. Short 가 나중에 두어도 이기는 것은 $u$ 와 $v$ 를 포함하는 부분그래프에 간선을 공유하지 않는 신장트리 두 개가 있는 것과 동치다.

[전략 훔치기 논법](strategy-stealing.md)은 Bridg-It 같은 판에서 먼저 두는 사람의 이기는 전략이 존재한다는 것만 준다. 이 게임에서는 [최소 신장트리](minimum-spanning-tree.md)의 간선 교환으로 전략을 직접 만들고, 승패를 다항시간에 판정한다.

# 직관

정점 $u,w,v$ 가 있고 $u$ 와 $w$ 사이에 간선이 두 개, $w$ 와 $v$ 사이에 간선이 두 개 있다. Cut 이 먼저 둔다. Cut 이 $u$ 와 $w$ 사이의 간선 하나를 지우면 Short 는 남은 하나를 차지한다. 그러면 $u$ 와 $w$ 는 이미 이어졌으므로 한 점으로 보아도 된다. 남은 것은 $w$ 와 $v$ 사이의 두 간선이고, 같은 응수로 Short 가 $v$ 까지 잇는다.

간선을 두 묶음 $T_1=\lbrace uw_1,wv_1\rbrace$, $T_2=\lbrace uw_2,wv_2\rbrace$ 로 나누면 각각이 세 정점을 모두 잇는 나무다. Cut 이 $T_1$ 의 간선을 지우면 $T_1$ 은 두 조각으로 갈라지고, 세 정점을 모두 잇는 $T_2$ 에는 두 조각을 건너는 간선이 있다. Short 가 그 간선을 차지하고 두 끝점을 한 점으로 붙이면, 정점이 하나 줄어든 그래프에 다시 간선을 공유하지 않는 나무 두 개가 남는다. 이 응수를 되풀이하면 $u$ 와 $v$ 가 한 점이 된다.

# 정의

## 게임

$G=(V,E)$ 는 유한 무향 그래프이고 평행 간선을 허용한다. 두 정점 $u\ne v$ 를 단자(terminal)라 한다. Short 와 Cut 이 번갈아, Short 는 아직 지워지지도 차지되지도 않은 간선 하나를 차지하고 Cut 은 그런 간선 하나를 지운다. Short 가 차지한 간선이 $u$ 에서 $v$ 로 가는 경로를 포함하면 Short 가 이기고, 간선이 다 정해질 때까지 그런 경로가 없으면 Cut 이 이긴다.

## 간선 교환

$T_1$ 과 $T_2$ 가 같은 정점 집합의 신장트리이고 $e\in T_1$ 이라 하자. $T_2$ 는 모든 정점을 이으므로 $T_1-e$ 의 두 성분을 잇는 간선 $f\in T_2$ 가 있고, $T_1-e+f$ 는 다시 신장트리다.

# 성질

## Lehman 정리

Cut 이 먼저 둘 때 Short 가 이기는 것은, $u$ 와 $v$ 를 포함하는 정점 집합 $W$ 와 $W$ 위의 부분그래프 $H\subseteq G$ 가 있어 $H$ 에 간선을 공유하지 않는 신장트리 $T_1,T_2$ 가 있는 것과 동치다[^1].

충분성의 요지. Cut 이 $H$ 밖의 간선을 지우면 Short 는 아무 간선이나 차지한다. Cut 이 $e\in T_1$ 을 지우면, Short 는 간선 교환으로 $T_1-e$ 의 두 성분을 잇는 $f\in T_2$ 를 차지한다. $f$ 의 두 끝점을 한 점으로 줄이면 $T_1-e+f$ 와 $T_2-f$ 가 정점이 하나 적은 그래프의 신장트리가 되고, 서로 간선을 공유하지 않는다. $e\in T_2$ 일 때도 같다. 정점이 하나가 될 때까지 되풀이하면 $u$ 와 $v$ 가 차지한 간선으로 이어진다.

필요성은 Lehman 이 [matroid](matroids.md) 위의 게임으로 일반화해 증명했다. 같은 판정에서 Short 가 먼저 두는 경우와 Cut 이 어느 쪽이 먼저 두든 이기는 경우도 나온다.

## 판정의 계산

간선을 공유하지 않는 신장트리 두 개는 [Matroid 합 정리](matroid-union.md)의 증가 경로로 다항시간에 찾는다. 그래서 Shannon 전환 게임의 승패는 다항시간에 판정되고, 위의 응수가 그대로 Short 의 전략이다.

간선 대신 정점을 차지하고 지우는 판본은 PSPACE(polynomial space)-완전이다. S. Even 과 R. E. Tarjan 이 증명했다[^2]. [Hex 게임](hex-game.md)은 이 정점 판본의 특수한 경우다.

# 활용

- Bridg-It. D. Gale 이 고안한 판 게임이고, 두 사람이 각자 격자점을 잇는 다리를 놓아 마주 보는 두 변을 잇는다. 한 사람의 다리가 상대의 다리를 막으므로 간선 판본의 Shannon 전환 게임이 된다. 전략 훔치기로 먼저 두는 사람의 승리가 존재하고, O. Gross 가 간선을 둘씩 짝지은 명시적 전략을 주었다.
- matroid 게임. 그래프의 간선을 matroid 의 원소로, 신장트리를 기저로 바꾸면 같은 판정이 matroid 에서 성립한다. 간선을 공유하지 않는 기저 두 개의 존재가 Short 의 승리 조건이다.

[^1]: A. Lehman, "A solution of the Shannon switching game", Journal of the Society for Industrial and Applied Mathematics 12 (1964), 687–725.
[^2]: S. Even, R. E. Tarjan, "A combinatorial problem which is complete in polynomial space", Journal of the ACM 23 (1976), 710–719.

# 연관 문서

## 선수지식

- [최소 신장트리](minimum-spanning-tree.md)
- [전략 훔치기 논법](strategy-stealing.md)
- [Matroid 합 정리](matroid-union.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #computation
