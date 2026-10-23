# 부분합 문제

# 개요

**부분합 문제(subset sum problem)** 는 정수 $a_1,\dots,a_n$ 과 목표값 $K$ 가 주어졌을 때 합이 정확히 $K$ 인 부분집합이 있는지 묻는 판정 문제다. 무게와 가치가 같은 [배낭 문제](knapsack-problem.md)이고, Karp 의 21 개 NP(nondeterministic polynomial time)-완전 문제 가운데 하나다[^1].

일반적으로는 다항 시간 알고리즘이 알려져 있지 않지만, $K$ 에 대한 의사다항 시간 표, 절반씩 나눈 열거, 수의 크기에 비해 개수가 적은 실례에 대한 격자 축소가 각각 다른 범위에서 문제를 푼다.

# 직관

$\lbrace 3, 34, 4, 12, 5, 2\rbrace$ 에서 합이 $9$ 인 부분집합을 찾는다. 부분집합을 모두 보면 $2^6=64$ 개이고, $n$ 이 $60$ 이면 $2^{60}$ 개라 다 볼 수 없다.

부분집합 대신 만들 수 있는 합을 기억한다. 처음에는 합 $0$ 만 있다. 수 $3$ 을 보면 $\lbrace 0,3\rbrace$, 다음 $34$ 는 $9$ 를 넘으므로 버리고, $4$ 를 보면 $\lbrace 0,3,4,7\rbrace$ 이다. $12$ 를 버리고 $5$ 를 보면 $\lbrace 0,3,4,5,7,8,9\rbrace$ 가 되어 $9=4+5$ 가 나온다. 합은 $0$ 부터 $K$ 까지의 정수뿐이므로 기억할 것이 $K+1$ 개를 넘지 않는다.

# 정의

## 문제

입력은 양의 정수 $a_1,\dots,a_n$ 과 $K$ 이고, $\sum_{i\in S}a_i=K$ 인 $S\subseteq\lbrace 1,\dots,n\rbrace$ 가 있는지 묻는다. 입력 길이는 $\sum_i\log_2 a_i+\log_2 K$ 에 비례한다.

## 합의 표

$R_i$ 를 처음 $i$ 개의 수로 만들 수 있는 $K$ 이하의 합의 집합이라 하면 $R_0=\lbrace 0\rbrace$ 이고 다음이 성립한다.

$$
R_i=R_{i-1}\cup\lbrace r+a_i : r\in R_{i-1},\thinspace r+a_i\le K\rbrace
$$

답은 $K\in R_n$ 인지다. $R_i$ 를 길이 $K+1$ 의 비트 배열로 두면 $O(nK)$ 시간이 든다.

# 성질

## NP-완전성

정리. 부분합 문제는 [NP-완전](np-completeness.md)이다[^1].

증명의 요지. 부분집합 $S$ 가 주어지면 합을 다항 시간에 확인하므로 NP 에 속한다. 3-차원 매칭이나 정확 덮개 문제에서 환원한다. 원소마다 자릿수 하나를 주고, 각 집합을 그 원소들의 자리가 $1$ 인 수로 적는다. 진법의 밑을 집합 수보다 크게 잡으면 덧셈에서 자리올림이 없으므로, 합이 모든 자리가 $1$ 인 수가 되는 것과 고른 집합들이 원소를 정확히 한 번씩 덮는 것이 동치다.

$O(nK)$ 표는 의사다항 시간이므로, $K$ 가 $n$ 의 다항식 이하인 실례에서는 다항 시간에 풀린다. 어려운 실례는 수가 $n$ 에 대해 지수적으로 큰 것이다.

## 절반씩 나눈 열거

정리. 부분합 문제는 $O(2^{n/2}n)$ 시간에 풀린다. Horowitz 와 Sahni 가 1974 년에 보였다[^2].

증명의 요지. 수를 앞 절반과 뒤 절반으로 나누고 각 절반의 부분합 $2^{n/2}$ 개를 모두 구해 [비교 정렬](comparison-sorting.md)로 정렬한다. 앞 절반의 합은 작은 것부터, 뒤 절반의 합은 큰 것부터 보며 두 합의 합이 $K$ 보다 작으면 앞쪽을, 크면 뒤쪽을 한 칸 옮긴다. 이 훑기는 $O(2^{n/2})$ 번에 끝나고 합이 $K$ 인 쌍이 있으면 반드시 만난다.

## 밀도와 격자 축소

실례의 밀도를 $n/\log_2\max_i a_i$ 로 정의한다. Lagarias 와 Odlyzko 는 해가 있는 실례에서 해의 지시 벡터를 어떤 [격자](lattices.md)의 짧은 벡터로 나타냈고, 최단 벡터를 찾는 신탁이 있으면 밀도가 $0.6463$ 미만인 거의 모든 실례가 풀린다는 것을 보였다[^3]. 실제로는 기저 축소 알고리즘이 신탁을 대신하고, 밀도가 낮은 실례는 그것으로 풀린다.

# 활용

- 배낭 문제의 어려움. 배낭 문제의 판정 문제가 NP-완전이라는 증명은 부분합 문제에서 $w_i=v_i=a_i$ 로 두는 환원이다.
- 배낭 암호. Merkle–Hellman 암호는 쉽게 풀리는 초증가 수열을 곱셈으로 감춘 부분합 실례를 공개 키로 썼다. 공개 키의 밀도가 낮아 격자 축소로 풀렸다.
- 분할 문제. 수들을 합이 같은 두 무리로 나누는 분할 문제는 $K=\frac12\sum_i a_i$ 인 부분합 문제이고, 작업을 두 기계에 나눠 끝나는 시각을 같게 하는 일정 문제가 이 꼴이다.

[^1]: R. M. Karp, "Reducibility among combinatorial problems", in *Complexity of Computer Computations*, Plenum, 1972, 85–103.
[^2]: E. Horowitz, S. Sahni, "Computing partitions with applications to the knapsack problem", Journal of the ACM 21 (1974), 277–292.
[^3]: J. C. Lagarias, A. M. Odlyzko, "Solving low-density subset sum problems", Journal of the ACM 32 (1985), 229–246.

# 연관 문서

## 선수지식

- [배낭 문제](knapsack-problem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #algorithms #combinatorics
