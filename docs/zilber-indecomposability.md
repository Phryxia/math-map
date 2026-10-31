# Zilber 불가분성 정리

# 개요

**Zilber 불가분성 정리(Zilber indecomposability theorem)** 는 [유한 Morley 위수 군](groups-of-finite-morley-rank.md)에서 특정 조건을 만족하는 집합들이 만드는 부분군이, 그 집합들을 유한 번 곱한 것으로 이미 다 나온다는 정리다. 평면 회전군에서 각 $0$ 부터 $10^\circ$ 까지의 회전을 모아 거듭 곱하면 36 번 안에 모든 회전이 나온다. 일반적으로는 곱을 몇 번 해야 끝나는지 정해지지 않아, 생성된 부분군을 일차 논리의 식 하나로 적을 수 없다. 이 정리는 불가분성이라는 조건 아래에서 곱이 유한 번에 끝난다는 것을 보여, 그 부분군을 식으로 정의할 수 있게 한다.

# 직관

군 $G$ 의 부분집합 $X$ 가 생성하는 부분군은 아래 합집합인데, $X$ 가 정의 가능해도 오른쪽은 $k$ 에 대한 무한 합집합이다. [1차 논리](first-order-logic.md)의 식 하나는 $k$ 를 변수로 잡지 못하므로 이 합집합이 정의 가능하다는 보장이 없다. 유한 Morley 위수 군의 도구는 정의 가능한 집합에만 위수를 주므로, 생성 부분군에 위수를 붙이려면 먼저 합집합을 유한 곱으로 줄여야 한다.

$$
\langle X\rangle=\bigcup_{k\ge 1}\bigl(X\cup X^{-1}\bigr)^{k}
$$

$1\in X$ 이면 $X\subseteq X^2\subseteq X^3\subseteq\cdots$ 이고 $X^k$ 의 Morley 위수는 줄지 않는다. 위수는 $G$ 의 위수를 넘지 않으므로 어느 단계부터 위수와 Morley 정도가 더 늘지 않는다. 그래도 $X^k$ 와 $X^{k+1}$ 은 더 낮은 위수의 집합만큼 다를 수 있다. 덧셈군 $(\mathbb C,+)$ 에서 $X=\lbrace 0,1\rbrace$ 을 잡으면 $k$ 번 더한 집합은 $\lbrace 0,1,\dots,k\rbrace$ 이고 위수는 늘 $0$ 이지만 곱은 멈추지 않는다. 이 $X$ 는 부분군 $\lbrace 0\rbrace$ 의 잉여류 두 개로 쪼개진다. 낮은 위수의 차이를 지우려면 $X$ 가 정의 가능한 부분군의 잉여류 유한개로 쪼개지지 않아야 하고, 그 조건이 불가분성이다.

# 정의

$G$ 를 유한 Morley 위수 군이라 한다. $1\in X$ 인 정의 가능 집합 $X\subseteq G$ 가 **불가분(indecomposable)** 이라 함은, 정의 가능한 부분군 $H\le G$ 의 잉여류 유한개가 $X$ 를 덮을 때마다 $X\subseteq H$ 라는 것이다.

동치인 진술은 다음이다. 모든 정의 가능한 부분군 $H$ 에 대해 잉여류 공간 $X/H=\lbrace xH:x\in X\rbrace$ 의 크기가 $1$ 이거나 무한이다.

덧셈군 $(\mathbb C,+)$ 에서 $X=\mathbb C$ 는 불가분이다. 정의 가능한 진부분군은 유한하므로 그 잉여류 유한개로는 $\mathbb C$ 를 덮지 못한다. $X=\lbrace 0,1\rbrace$ 은 부분군 $\lbrace 0\rbrace$ 의 잉여류 두 개로 덮이지만 $\lbrace 0\rbrace$ 에 포함되지 않으므로 불가분이 아니다.

정의 가능한 부분군 $H\le G$ 가 **연결(connected)** 이라 함은 유한 지표의 정의 가능한 진부분군을 갖지 않는 것이고, $H^\circ$ 는 $H$ 의 정의 가능한 연결 부분군 가운데 유한 지표인 유일한 것이다. $(\mathbb C,+)$ 는 연결이다. $H=\mathbb Z/2\times(\mathbb C,+)$ 에서 $H^\circ=\lbrace 0\rbrace\times\mathbb C$ 이고 지표는 $2$ 다.

# 성질

## 생성 부분군의 정의 가능성

Zilber 불가분성 정리. $\lbrace X_i\rbrace\_{i\in I}$ 가 모두 $1$ 을 포함하는 불가분 집합이면 $H=\langle X_i:i\in I\rangle$ 는 정의 가능하고 연결이며, 첨자 $i_1,\dots,i_k$ 가 있어 $H=X\_{i_1}\cdots X\_{i_k}$ 다.[^1]

증명은 세 단계다. 하강 사슬 조건으로 모든 $X_i$ 를 포함하는 정의 가능한 부분군 가운데 최소인 $K$ 를 잡는다. $K^\circ$ 가 $K$ 에서 유한 지표이므로 그 잉여류 유한개가 각 $X_i$ 를 덮고, 불가분성이 $X_i\subseteq K^\circ$ 를 준다. $K$ 의 최소성에서 $K=K^\circ$ 이므로 $K$ 는 연결이다.

남은 것은 $K$ 가 유한 곱이라는 것이다. 곱 $X\_{i_1}\cdots X\_{i_k}$ 들 가운데 Morley 위수가 가장 크고 그 위수에서 정도가 가장 큰 것을 $Y$ 로 잡는다. $1\in X_i$ 이므로 모든 $i$ 에 대해 $Y\subseteq YX_i$ 이고, 최대성에서 두 집합의 위수와 정도가 같으므로 차집합의 위수가 더 낮다. 이 성질을 가진 $Y$ 에 대해 $YY^{-1}$ 이 정의 가능한 부분군이고 각 $X_i$ 를 포함하므로 $K\subseteq YY^{-1}$ 이다. $Y\subseteq K$ 이므로 $YY^{-1}\subseteq K$ 이고, $K=YY^{-1}$ 이 유한 곱이다.

## 불가분 집합의 예

- 정의 가능한 연결 부분군 $H$ 는 불가분이다. 정의 가능한 부분군 $L$ 의 잉여류 유한개가 $H$ 를 덮으면 $H\cap L$ 이 $H$ 에서 유한 지표이므로 연결성에서 $H\cap L=H$ 다.
- 연결 군 $G$ 와 $g\in G$ 에 대해 교환자 집합 $\lbrace\lbrack g,x\rbrack:x\in G\rbrace$ 는 불가분이다. 이 집합은 켤레류 $g^G$ 를 $g^{-1}$ 로 옮긴 것이고, 연결 군의 켤레 작용으로 생기는 궤도의 이런 이동이 불가분이라는 증명은 Borovik–Nesin 5.4 절에 있다.[^1]

## 교환자 부분군

$G$ 가 연결 유한 Morley 위수 군이고 $H\le G$ 가 정의 가능한 부분군이면 $\lbrack G,H\rbrack$ 는 정의 가능하고 연결이다.

$\lbrack G,H\rbrack$ 는 위 교환자 집합들이 생성하는 부분군이므로 정리가 그대로 적용된다. $H=G$ 로 두면 연결 군의 교환자 부분군 $G'$ 가 정의 가능하고 연결이다. 일반 군에서 교환자 부분군은 교환자를 유한 번 곱한 원소들의 합집합이고 곱의 횟수에 상한이 없다. 유한 Morley 위수 가정 아래서는 횟수에 상한이 생긴다.

같은 방식으로 내림 중심열과 파생열의 각 항이 정의 가능하고 연결이며 유한 단계에서 멈춘다.

# 활용

- 유한 Morley 위수 군에서 대수군의 구조 정리를 옮겨 쓸 때 기약성 논증이 들어가는 자리를 이 정리가 채운다. [Cherlin–Zilber 추측](cherlin-zilber-conjecture.md)을 향한 분류 논증은 가해 근기(solvable radical)와 Sylow 부분군(Sylow subgroup)의 연결 성분을 다루는 단계마다 이 정리로 생성 부분군의 정의 가능성을 확보한다.
- [나쁜 군](bad-groups.md)의 분석에서 정의 가능한 연결 진부분군이 모두 멱영이라는 가정과 이 정리를 함께 쓰면, 두 진부분군이 생성하는 부분군이 전체가 되어야 한다는 제약이 나온다.
- 연결 군의 중심 $Z(G)$ 와 중심화군 $C_G(X)$ 가 정의 가능하다는 사실에 이 정리를 더하면 중심 확대의 각 층을 정의할 수 있다.

[^1]: A. Borovik, A. Nesin, Groups of Finite Morley Rank, Oxford University Press, 1994, 5.4 절(Zilber 의 불가분성 정리).

# 연관 문서

## 선수지식

- [유한 Morley 위수 군](groups-of-finite-morley-rank.md)

## 더 알아보기

- [Cherlin–Zilber 추측](cherlin-zilber-conjecture.md)

#logic #foundations #algebra #group_theory
