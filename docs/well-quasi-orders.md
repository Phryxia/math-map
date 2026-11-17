# 정렬 준순서

# 개요

**정렬 준순서(well-quasi-order)** 는 원소를 아무리 많이 늘어놓아도 앞의 원소가 뒤의 원소 이하인 쌍이 반드시 생기는 순서다. 어떤 절차가 상태를 계속 바꾸는데, 새 상태는 지금까지 나온 어느 상태보다도 크거나 같지 않다. 이 절차가 언젠가 멈추는지 확인하려면 상태가 영원히 그렇게 이어질 수 있는지를 보아야 한다. 상태들의 순서가 정렬 준순서이면 그런 무한한 진행은 없으므로 절차가 멈춘다.

# 직관

자연수의 쌍 $(x,y)$ 를 하나씩 적는데, 새로 적는 쌍은 앞서 적은 어느 쌍보다도 두 성분이 모두 크거나 같아서는 안 된다. 첫 쌍이 $(3,5)$ 이면 그 뒤의 쌍은 $x\lt 3$ 이거나 $y\lt 5$ 여야 한다.

$x\lt 3$ 인 쌍은 $x=0,1,2$ 세 줄에 놓인다. 한 줄 $x=c$ 에 놓인 쌍들은 $x$ 가 같으므로, 뒤의 쌍의 $y$ 가 앞의 쌍의 $y$ 보다 작아야 한다. 자연수는 끝없이 줄어들 수 없으므로 한 줄에는 쌍이 유한 개만 놓인다. $y\lt 5$ 인 쌍도 다섯 줄에 같은 이유로 유한 개만 놓인다.

그래서 $(3,5)$ 뒤에는 쌍이 유한 개만 적히고 적기는 끝난다. 첫 쌍이 무엇이든 같은 계산이 되므로, 자연수의 쌍을 성분마다 비교하는 순서에서는 이런 적기가 언제나 끝난다. 이 성질을 가진 순서가 정렬 준순서다.

# 정의

## 준순서와 나쁜 수열

집합 $Q$ 위의 관계 $\le$ 가 반사적이고 추이적이면 **준순서(quasi-order)** 라 한다. [부분순서](partial-orders.md)와 달리 $x\le y$ 이고 $y\le x$ 이면서 $x\ne y$ 일 수 있다.

$Q$ 의 수열 $x\_1,x\_2,\dots$ 에 $i\lt j$ 이고 $x\_i\le x\_j$ 인 쌍이 있으면 **좋은 수열(good sequence)**, 없으면 **나쁜 수열(bad sequence)** 이라 한다. 직관 절의 적기 규칙은 나쁜 수열을 만드는 규칙이다. 성분마다 비교하는 $\mathbb N^2$ 에서 $(3,5),(10,2),(1,100)$ 은 나쁜 수열이고, 여기에 $(4,6)$ 을 붙이면 $(3,5)\le(4,6)$ 이므로 좋은 수열이 된다.

## 정렬 준순서

준순서 $(Q,\le)$ 의 모든 무한 수열이 좋은 수열이면 $Q$ 를 **정렬 준순서** 라 한다.

직관 절의 계산은 $\mathbb N^2$ 가 정렬 준순서임을 보인다. 자연수의 순서 $(\mathbb N,\le)$ 도 정렬 준순서다. 정수의 순서 $(\mathbb Z,\le)$ 는 $0,-1,-2,\dots$ 가 나쁜 수열이므로 정렬 준순서가 아니다. 나눗셈 순서 $(\mathbb N\_{\ge 1},\mid)$ 는 소수의 수열 $2,3,5,7,\dots$ 가 나쁜 수열이므로 정렬 준순서가 아니다.

# 성질

## 동치 조건

정리. 준순서 $Q$ 에 대해 다음은 동치다.

1. $Q$ 는 정렬 준순서다.
2. $Q$ 에는 무한 감소열 $x\_1\gt x\_2\gt\cdots$ 도, 서로 비교할 수 없는 원소의 무한 집합(무한 반사슬, infinite antichain)도 없다.
3. $Q$ 의 모든 무한 수열은 $x\_{i\_1}\le x\_{i\_2}\le\cdots$ 인 무한 부분수열을 가진다.

증명의 요지. 3 에서 1 과 1 에서 2 는 정의에서 바로 나온다. 2 에서 3 은 [Ramsey 이론](ramsey-theory.md)의 무한 Ramsey 정리(infinite Ramsey theorem)를 쓴다. $i\lt j$ 인 쌍마다 $x\_i\le x\_j$, $x\_i\gt x\_j$, 비교 불가 가운데 하나로 색을 칠하면 한 색으로만 칠해진 무한 부분수열이 있다. 2 때문에 그 색은 $\le$ 이다.

## 곱과 Dickson 보조정리

정리. $Q\_1,Q\_2$ 가 정렬 준순서이면 성분마다 비교하는 곱 $Q\_1\times Q\_2$ 도 정렬 준순서다.

증명의 요지. 무한 수열 $(a\_i,b\_i)$ 에서 동치 조건 3 으로 $a$ 가 줄지 않는 무한 부분수열을 고르고, 그 안에서 $b$ 가 줄지 않는 무한 부분수열을 다시 고른다.

$\mathbb N$ 에 이 정리를 $d-1$ 번 쓰면 $\mathbb N^d$ 가 정렬 준순서라는 Dickson 보조정리(Dickson's lemma)가 나온다. [벡터 덧셈 계](vector-addition-systems.md)의 Karp–Miller 나무가 유한하다는 증명이 이 보조정리를 쓴다.

## Higman 보조정리

유한 집합 $\Sigma$ 의 글자로 된 유한 단어 전체를 $\Sigma^\ast$ 라 한다. 단어 $u$ 의 글자를 순서를 지키며 $v$ 의 글자 가운데 몇 개에 하나씩 대응시킬 수 있으면 $u$ 를 $v$ 의 부분열이라 하고 $u\preceq v$ 로 적는다. $\Sigma=\lbrace a,b\rbrace$ 에서 $ab\preceq bab$ 이고 $ba\not\preceq aab$ 다.

정리. $(\Sigma^\ast,\preceq)$ 는 정렬 준순서다. 이것이 **Higman 보조정리(Higman's lemma)** 이고, $\Sigma$ 가 유한 집합이 아닌 정렬 준순서여도 글자끼리의 비교를 써서 같은 결론이 성립한다[^1].

증명의 요지. Nash-Williams 의 최소 나쁜 수열(minimal bad sequence) 논증을 쓴다[^2]. 나쁜 수열이 있다고 하고, $w\_1$ 은 나쁜 수열의 첫 항이 될 수 있는 가장 짧은 단어, $w\_2$ 는 $w\_1,w\_2$ 로 시작하는 나쁜 수열이 있는 가장 짧은 단어로 차례로 고른다. 나쁜 수열의 항은 빈 단어가 아니므로 $w\_i$ 를 첫 글자 $a\_i$ 와 나머지 $v\_i$ 로 나눈다. 글자는 유한 개이므로 $a\_{i\_1}=a\_{i\_2}=\cdots$ 인 무한 부분수열이 있다.

수열 $w\_1,\dots,w\_{i\_1-1},v\_{i\_1},v\_{i\_2},\dots$ 를 본다. $v\_{i\_k}\preceq v\_{i\_l}$ 이면 첫 글자를 붙여 $w\_{i\_k}\preceq w\_{i\_l}$ 이고, $w\_j\preceq v\_{i\_k}$ 이면 $w\_j\preceq w\_{i\_k}$ 다. 그래서 이 수열도 나쁜 수열이다. 그런데 $v\_{i\_1}$ 은 $w\_{i\_1}$ 보다 짧아 $w\_{i\_1}$ 의 선택과 모순이다.

## 위로 닫힌 집합의 유한 기저

$U\subseteq Q$ 가 $x\in U$ 이고 $x\le y$ 이면 $y\in U$ 인 집합일 때 위로 닫혔다(upward closed)고 한다.

정리. $Q$ 가 정렬 준순서이면 위로 닫힌 집합 $U$ 마다 유한 집합 $B\subseteq U$ 가 있어, $U$ 는 $B$ 의 어느 원소 이상인 원소 전체다. 위로 닫힌 집합의 증가열 $U\_1\subseteq U\_2\subseteq\cdots$ 은 유한 번 뒤에 멈춘다.

증명의 요지. $U$ 의 극소 원소들을 서로 동치인 것끼리 하나만 남기면 반사슬이므로 동치 조건 2 로 유한하다. 정렬 준순서에는 무한 감소열이 없으므로 $U$ 의 원소마다 그 아래에 극소 원소가 있다. 증가열이 멈추지 않으면 $U\_{k+1}\setminus U\_k$ 에서 하나씩 고른 원소들이 나쁜 수열이 된다.

## Kruskal 나무 정리

뿌리 있는 유한 나무 사이에, 두 마디의 가장 가까운 공통 조상을 그 상들의 가장 가까운 공통 조상으로 보내는 단사 사상이 있으면 앞 나무가 뒤 나무에 매장된다고 한다. 유한 나무 전체가 이 매장 관계에 대해 정렬 준순서라는 정리가 [Kruskal 나무 정리](kruskal-tree-theorem.md)(Kruskal's tree theorem)다[^3]. 증명은 Higman 보조정리와 최소 나쁜 수열 논증을 함께 쓴다. 유한 그래프 전체가 [그래프 마이너](graph-minors.md) 관계에 대해 정렬 준순서라는 Robertson–Seymour 정리(Robertson–Seymour theorem)는 이 정리의 그래프판이다.

# 활용

- 전이 시스템의 덮개 가능성. 상태 집합이 정렬 준순서이고 큰 상태가 작은 상태의 움직임을 흉내 낼 수 있는 전이 시스템을 잘 구조화된 전이 시스템(well-structured transition system)이라 한다. 위로 닫힌 집합의 유한 기저로 나쁜 상태에 이르는 상태 집합을 거꾸로 계산하면 계산이 유한 번에 멈춘다[^4]. 벡터 덧셈 계, 메시지를 잃을 수 있는 통신 채널 시스템이 이 꼴이다.
- 금지 마이너. 마이너에 대해 닫힌 그래프 성질은 위로 닫힌 집합의 여집합이므로, 유한 기저 정리와 Robertson–Seymour 정리로 금지 마이너 유한 개로 정의된다.
- 종료 증명. 항 다시 쓰기(term rewriting)에서 규칙마다 왼쪽 항이 오른쪽 항보다 큰 단순화 순서(simplification ordering)를 찾으면 다시 쓰기는 무한히 이어지지 않는다. 단순화 순서에 무한 감소열이 없다는 것이 Kruskal 나무 정리로 증명된다.
- 증명 강도. Kruskal 나무 정리는 [역수학](reverse-mathematics.md)의 체계 ATR₀(arithmetical transfinite recursion) 에서 증명되지 않는다는 것을 Friedman 이 보였다.

[^1]: G. Higman, "Ordering by divisibility in abstract algebras", Proceedings of the London Mathematical Society (3) 2 (1952), 326–336.
[^2]: C. St. J. A. Nash-Williams, "On well-quasi-ordering finite trees", Proceedings of the Cambridge Philosophical Society 59 (1963), 833–835.
[^3]: J. B. Kruskal, "Well-quasi-ordering, the tree theorem, and Vazsonyi's conjecture", Transactions of the American Mathematical Society 95 (1960), 210–225.
[^4]: A. Finkel, Ph. Schnoebelen, "Well-structured transition systems everywhere!", Theoretical Computer Science 256 (2001), 63–92.

# 연관 문서

## 선수지식

- [부분순서](partial-orders.md)

## 더 알아보기

- [Kruskal 나무 정리](kruskal-tree-theorem.md)

#order_theory #combinatorics #computation
