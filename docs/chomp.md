# Chomp

# 개요

**Chomp** 는 직사각형 초콜릿 판에서 두 사람이 번갈아 칸 하나를 골라 그 칸과 오른쪽 위의 칸을 모두 지우고, 왼쪽 아래 구석의 칸을 지우는 사람이 지는 게임이다. $2\times 2$ 판에서는 먼저 두는 사람이 오른쪽 위 칸을 지우면 이기지만, 판이 커지면 이기는 첫 수를 손으로 찾기 어렵다. 판이 칸 하나가 아니면 먼저 두는 사람에게 이기는 전략이 있다는 것이 [전략 훔치기 논법](strategy-stealing.md)으로 증명되고, 그 논법은 이기는 첫 수를 알려 주지 않는다.

# 직관

D. Gale 이 1974 년에 이 이름으로 소개했고, 같은 게임을 F. Schuh 가 1952 년에 약수 게임으로 먼저 다루었다[^1][^2]. 판을 [부분순서](partial-orders.md) 집합으로 바꾸면 Chomp 는 부분순서 집합 위의 게임의 한 예가 된다.

$2\times 2$ 판에서 칸을 왼쪽 아래부터 $(1,1),(1,2),(2,1),(2,2)$ 로 부른다. 칸 $(i,j)$ 를 고르면 $i'\ge i$ 이고 $j'\ge j$ 인 칸이 모두 지워진다. 먼저 두는 사람이 $(2,2)$ 를 지우면 $(1,1)$ 과 그 양옆의 $(1,2)$, $(2,1)$ 이 남는다. 상대가 둘 가운데 하나를 지우면 나머지 하나를 지우고, 상대는 $(1,1)$ 만 남은 판에서 그 칸을 지워 진다.

$n\times n$ 판에서도 같은 수가 통한다. 먼저 $(2,2)$ 를 고르면 맨 아래 줄과 맨 왼쪽 줄만 남고, 두 줄은 $(1,1)$ 을 빼고 길이가 $n-1$ 로 같다. 상대가 한 줄에서 칸 몇 개를 지우면 다른 줄에서 같은 수를 지운다. 두 줄의 길이가 늘 같으므로 마지막에 $(1,1)$ 만 남은 판을 받는 사람은 상대다.

$2\times 3$ 판에서는 줄 두 개의 길이가 다르다. 먼저 $(2,3)$ 을 지워 아래 줄 길이 $3$, 위 줄 길이 $2$ 를 만든다. 상대가 어떻게 지우든 다시 아래 줄이 위 줄보다 하나 길게 맞출 수 있고, 아래 줄 $1$ 과 위 줄 $0$, 곧 $(1,1)$ 만 남은 판이 상대에게 간다. $3\times 5$ 판에서는 이렇게 맞출 대칭이 없어 같은 방식이 통하지 않는다.

# 정의

판 $\lbrack m\rbrack\times\lbrack n\rbrack$ 에 곱 순서 $(i,j)\le(i',j')\iff i\le i',\ j\le j'$ 를 준다. 남은 칸의 집합 $B$ 에서 칸 $x$ 를 고르면 $B$ 가 $B\setminus\lbrace y\in B : y\ge x\rbrace$ 로 바뀌고, $(1,1)$ 을 고르는 사람이 진다.

더 일반적으로 유한 부분순서 집합 $P$ 위의 **부분순서 게임(poset game)** 은 두 사람이 번갈아 $x\in P$ 를 골라 $\lbrace y : y\ge x\rbrace$ 를 지우고, 둘 차례에 남은 원소가 없는 사람이 지는 게임이다. Chomp 는 $\lbrack m\rbrack\times\lbrack n\rbrack$ 에서 $(1,1)$ 을 뺀 부분순서 집합 위의 부분순서 게임이다. $(1,1)$ 만 남은 판을 받는 사람이 둘 수 있는 칸이 없는 사람이다.

# 성질

## 가장 큰 원소가 있는 부분순서 게임

정리. 유한 부분순서 집합 $P\ne\varnothing$ 에 가장 큰 원소 $g$ 가 있으면 $P$ 위의 부분순서 게임에서 먼저 두는 사람에게 이기는 전략이 있다.

증명의 요지. 먼저 두는 사람이 $g$ 만 지운다고 하자. 상대에게 이기는 응수 $x$ 가 있으면 $\lbrace y : y\ge x\rbrace$ 가 $g$ 를 포함하므로, 먼저 두는 사람이 처음부터 $x$ 를 골라 같은 국면을 상대에게 넘긴다. 이기는 응수가 없으면 $g$ 가 이기는 첫 수다. 유한 게임에 무승부가 없으므로 어느 경우든 먼저 두는 사람이 이긴다.

$mn\gt 1$ 이면 $\lbrack m\rbrack\times\lbrack n\rbrack$ 에서 $(1,1)$ 을 뺀 집합의 가장 큰 원소가 $(m,n)$ 이므로 Chomp 는 먼저 두는 사람의 승리다.

## 두 줄 판

아래 줄 길이 $a$, 위 줄 길이 $b$ 의 국면을 $(a,b)$ 로 쓰면, 둘 차례인 사람이 지는 국면은 $b=a-1$ 인 것뿐이다. $(a,a-1)$ 에서 위 줄을 $b'\lt a-1$ 로 줄이면 아래 줄을 $b'+1$ 로 줄여 맞춘다. 아래 줄의 $j$ 번째 칸을 고르면 두 줄이 모두 $j-1$ 이하로 줄어 $(j-1,\min(j-1,a-1))$ 이 되고, 위 줄을 하나 더 줄여 맞춘다. 그래서 $2\times n$ 판에서 이기는 첫 수는 $(2,n)$ 하나다.

## 약수 게임

자연수 $N$ 의 약수를 두 사람이 번갈아 부르되, 앞서 부른 수의 배수는 부를 수 없고 $1$ 을 부르는 사람이 진다. 이 게임은 $N$ 의 약수가 나눗셈에 대해 이루는 부분순서 집합에서 $1$ 을 뺀 집합 위의 부분순서 게임이다. $N=p^{m-1}q^{n-1}$ 이고 $p,q$ 가 서로 다른 소수이면 약수 $p^iq^j$ 가 칸 $(i+1,j+1)$ 에 대응하여 $m\times n$ Chomp 와 같다. $N$ 자신이 가장 큰 원소이므로 $N\gt 1$ 이면 먼저 부르는 사람이 이긴다.

## Grundy 값과 계산

Chomp 는 두 사람이 둘 수 있는 수가 같은 공평 게임이므로 [Sprague–Grundy 정리](sprague-grundy-theorem.md)로 국면마다 Grundy 값이 정해진다. 남은 판은 왼쪽 아래로 닫힌 칸 집합이고 $m\times n$ 판에서 그런 집합은 $\binom{m+n}{m}$ 개이므로, 국면 전체를 훑어 이기는 첫 수를 계산할 수 있지만 그 수가 판의 크기에 지수적으로 는다. D. Zeilberger 는 3 줄 판의 국면을 이렇게 계산했다[^3].

D. Grier 는 임의의 유한 부분순서 집합 위의 부분순서 게임에서 승패를 판정하는 문제가 [공간 복잡도](space-complexity.md)의 PSPACE(polynomial space)-완전임을 증명했다[^4]. 증명은 [일반화 지리 게임](generalized-geography.md)과 같은 PSPACE-완전 게임에서의 환원이다.

# 활용

- 전략 훔치기 논법의 대표 예. 존재는 증명되지만 이기는 수가 구성되지 않는 경우로 쓰인다.
- 조합 게임의 계산. $2\times n$ 판과 $n\times n$ 판처럼 이기는 수가 닫힌 꼴로 나오는 판과 Grundy 값을 계산해야 하는 판을 견주는 예로 쓰인다.

[^1]: D. Gale, "A curious Nim-type game", American Mathematical Monthly 81 (1974), 876–879.
[^2]: F. Schuh, "Spel van delers", Nieuw Tijdschrift voor Wiskunde 39 (1952), 299–304.
[^3]: D. Zeilberger, "Three-rowed CHOMP", Advances in Applied Mathematics 26 (2001), 168–179.
[^4]: D. Grier, "Deciding the winner of an arbitrary finite poset game is PSPACE-complete", in *Automata, Languages, and Programming (ICALP 2013)*, Lecture Notes in Computer Science 7965 (2013), 497–503.

# 연관 문서

## 선수지식

- [전략 훔치기 논법](strategy-stealing.md)
- [부분순서](partial-orders.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #combinatorics #order_theory
