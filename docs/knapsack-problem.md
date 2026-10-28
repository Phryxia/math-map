# 배낭 문제

# 개요

**배낭 문제(knapsack problem)** 는 무게와 가치가 정해진 물건들 가운데 무게 한도 안에서 가치의 합이 가장 큰 조합을 고르는 문제다. 용량 $10$ 인 배낭에 무게 $5$ , 가치 $10$ 인 물건 둘과 무게 $6$ , 가치 $13$ 인 물건 하나가 있으면, 가치가 큰 물건부터 담는 방법은 $13$ 을 얻고 무게 $5$ 짜리 둘을 담아 얻는 $20$ 을 놓친다. 용량 $0,1,\dots,W$ 마다 얻을 수 있는 가장 큰 가치를 표로 채우는 [동적 계획법](dynamic-programming.md)으로 정확한 답을 얻는다.

# 직관

배낭 문제는 무게 $w_i$ 와 가치 $v_i$ 가 있는 물건 $n$ 개 가운데, 무게의 합이 용량 $W$ 이하가 되게 골라 가치의 합을 가장 크게 하는 문제다. 동적 계획법으로 $O(nW)$ 시간에 풀리지만 이 시간은 입력 길이의 다항식이 아니고, 판정 문제는 NP(nondeterministic polynomial time)-완전이다. 가치를 반올림하면 임의의 $\varepsilon\gt 0$ 에 대해 $(1-\varepsilon)$ 배 이상의 해를 $n$ 과 $1/\varepsilon$ 의 다항 시간에 구하는 [근사 알고리즘](approximation-algorithms.md)이 있다.

용량 $9$ 인 배낭에 물건 셋 (무게, 가치) $=(3,50),(4,40),(6,57)$ 을 넣는다. 가치를 무게로 나눈 비율이 큰 순서로 넣으면 $(3,50)$ 과 $(4,40)$ 을 넣고, 남은 용량 $2$ 에는 아무것도 못 넣어 가치가 $90$ 이다. $(3,50)$ 과 $(6,57)$ 을 넣으면 무게 $9$ 로 가치가 $107$ 이다. 비율 순서로 고르면 남는 용량을 버린다.

물건을 하나씩 보며 넣을지 뺄지 정하되, 앞에서 정한 것의 세부는 잊고 지금까지 쓴 무게만 기억한다. 처음 $i$ 개의 물건으로 무게 $c$ 이하를 채울 때의 최대 가치를 $c=0,\dots,W$ 마다 적어 두면, $i+1$ 번째 물건을 넣는 경우와 빼는 경우를 표에서 바로 비교한다. 표의 칸은 $(n+1)(W+1)$ 개다.

# 정의

## 0-1 배낭 문제

입력은 양의 정수 $w_1,\dots,w_n$, $v_1,\dots,v_n$, $W$ 이다. $\sum_{i\in S}w_i\le W$ 인 $S\subseteq\lbrace 1,\dots,n\rbrace$ 가운데 $\sum_{i\in S}v_i$ 를 가장 크게 하는 것을 찾는다. 판정 문제는 주어진 $V$ 에 대해 가치의 합이 $V$ 이상인 $S$ 가 있는지 묻는다.

## 용량에 대한 표

처음 $i$ 개의 물건으로 무게 $c$ 이하를 채울 때의 최대 가치를 $A(i,c)$ 라 하면 $A(0,c)=0$ 이고 다음이 성립한다.

$$
A(i,c)=\begin{cases}A(i-1,c) & w_i\gt c\cr \max\bigl(A(i-1,c),\thinspace v_i+A(i-1,c-w_i)\bigr) & w_i\le c\end{cases}
$$

답은 $A(n,W)$ 이다.

## 가치에 대한 표

처음 $i$ 개의 물건으로 가치 합을 정확히 $u$ 로 만드는 최소 무게를 $B(i,u)$ 라 한다. $B(0,0)=0$, $u\gt 0$ 이면 $B(0,u)=\infty$ 이고 다음이 성립한다.

$$
B(i,u)=\min\bigl(B(i-1,u),\thinspace w_i+B(i-1,u-v_i)\bigr)
$$

$u\lt v_i$ 이면 둘째 항을 $\infty$ 로 둔다. 답은 $B(n,u)\le W$ 인 가장 큰 $u$ 다. $u$ 는 $\sum_i v_i\le n v_{\max}$ 이하이므로 표의 칸은 $O(n^2v_{\max})$ 개다.

# 성질

## 의사다항 시간과 NP-완전성

정리. 배낭 문제의 판정 문제는 [NP-완전성과 Cook–Levin 정리](np-completeness.md)의 뜻에서 NP-완전이다[^1].

증명의 요지. 해 $S$ 가 주어지면 두 합을 다항 시간에 확인하므로 NP 에 속한다. [부분합 문제](subset-sum.md), 곧 정수 $a_1,\dots,a_n$ 과 $K$ 에 대해 합이 정확히 $K$ 인 부분집합이 있는지 묻는 NP-완전 문제에서, $w_i=v_i=a_i$, $W=V=K$ 로 두면 가치 $K$ 이상과 무게 $K$ 이하가 동시에 성립하는 것은 합이 정확히 $K$ 인 것과 같다.

$O(nW)$ 는 수 $W$ 의 크기에 대한 다항식이고, $W$ 를 이진수로 적은 길이 $\log_2 W$ 에 대해서는 지수다. 이런 시간을 의사다항 시간(pseudo-polynomial time)이라 한다. P 와 NP 가 다르면 배낭 문제에는 다항 시간 알고리즘이 없지만, 수가 단항으로 적힌 입력에서는 다항 시간에 풀린다.

## 완전 다항 시간 근사 방식

정리. 임의의 $\varepsilon\gt 0$ 에 대해, 가치가 최적값의 $(1-\varepsilon)$ 배 이상인 해를 $O(n^3/\varepsilon)$ 시간에 구한다. 이런 알고리즘을 FPTAS(fully polynomial-time approximation scheme)라 한다. Ibarra 와 Kim 이 1975 년에 보였다[^2].

증명의 요지. 무게가 $W$ 를 넘는 물건은 버리고, $K=\varepsilon v_{\max}/n$ 으로 두어 가치를 $v'\_i=\lfloor v_i/K\rfloor$ 로 바꾼다. $v'\_i\le n/\varepsilon$ 이므로 가치에 대한 표가 $O(n^3/\varepsilon)$ 시간에 바뀐 문제의 최적해 $S$ 를 준다. 원래 문제의 최적해를 $S^\ast$ 라 하면 반올림의 손실이 물건마다 $K$ 이하이므로 다음이 성립한다.

$$
\sum_{i\in S}v_i\ge K\sum_{i\in S}v'\_i\ge K\sum_{i\in S^\ast}v'\_i\ge\sum_{i\in S^\ast}v_i-nK=\mathrm{OPT}-\varepsilon v_{\max}
$$

물건 하나만 넣어도 되므로 $\mathrm{OPT}\ge v_{\max}$ 이고, 오른쪽은 $(1-\varepsilon)\mathrm{OPT}$ 이상이다.

## 쪼갤 수 있는 배낭

물건을 비율 $x_i\in\lbrack 0,1\rbrack$ 만큼 넣을 수 있으면, 비율 $v_i/w_i$ 가 큰 순서로 채우고 마지막 물건만 쪼개는 탐욕법이 최적이다. 이 값은 0-1 배낭 문제의 [선형계획법](linear-programming.md) 완화의 최적값이다. 쪼갠 물건 하나를 뺀 탐욕해와 그 물건 하나 가운데 나은 것을 고르면 0-1 문제의 최적값의 절반 이상이다.

# 활용

- 자원 배분. 예산 안에서 사업을 고르는 것, 용량이 정해진 저장소에 파일을 고르는 것이 배낭 문제다. 제약이 여러 개이면 다차원 배낭 문제가 되고, P 와 NP 가 다르면 이 경우에는 FPTAS 가 없다.
- 열 생성. 정해진 길이의 원자재를 여러 길이로 자르는 재단 문제를 선형계획법으로 풀 때, 새 절단 방식을 찾는 부분문제가 배낭 문제다.
- 배낭 암호. Merkle–Hellman 암호는 부분합 문제의 어려움을 안전성의 가정으로 삼았으나, 공개 키가 가진 구조 때문에 [격자](lattices.md) 기저 축소로 깨졌다[^3].

[^1]: R. M. Karp, "Reducibility among combinatorial problems", in *Complexity of Computer Computations*, Plenum, 1972, 85–103.
[^2]: O. H. Ibarra, C. E. Kim, "Fast approximation algorithms for the knapsack and sum of subset problems", Journal of the ACM 22 (1975), 463–468.
[^3]: A. Shamir, "A polynomial-time algorithm for breaking the basic Merkle–Hellman cryptosystem", IEEE Transactions on Information Theory 30 (1984), 699–704.

# 연관 문서

## 선수지식

- [동적 계획법](dynamic-programming.md)
- [근사 알고리즘](approximation-algorithms.md)

## 더 알아보기

- [부분합 문제](subset-sum.md)

#algorithms #complexity #optimization
