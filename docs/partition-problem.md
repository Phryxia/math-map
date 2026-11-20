# 분할 문제

# 개요

**분할 문제(partition problem)** 는 주어진 양의 정수들을 합이 같은 두 무리로 나눌 수 있는지 묻는 문제다. 두 사람이 무게 $8,7,6,5,4$ kg 인 짐을 나눠 들 때 두 사람의 짐 무게를 똑같이 맞출 수 있는지가 이 꼴이다. 전체 합의 절반을 목표값으로 하는 [부분합 문제](subset-sum.md)로 보고 만들 수 있는 합을 표로 채우면 판정되고, 수가 크면 가장 큰 두 수를 그 차로 바꾸기를 되풀이하는 차분법으로 차가 작은 나눔을 빠르게 얻는다.

# 직관

짐 $8,7,6,5,4$ 의 무게 합은 $30$ 이므로, 두 사람이 $15$ 씩 들면 차가 $0$ 이다.

무거운 짐부터 지금 가벼운 쪽 사람에게 준다. $8$ 은 첫째, $7$ 은 둘째, $6$ 은 둘째($13$), $5$ 는 첫째($13$), $4$ 는 첫째에게 가서 $17$ 과 $13$ 이 되고 차가 $4$ 다. 마지막 짐이 둘을 맞출 만큼 작지 않았다.

차만 기억하는 방법도 있다. 가장 무거운 $8$ 과 $7$ 을 다른 사람에게 주기로 하면 두 짐은 차 $1$ 하나로 대신할 수 있다. 남은 $6,5,4,1$ 에서 다시 $6$ 과 $5$ 를 갈라 $1$ 로 바꾸면 $4,1,1$ 이 되고, $4$ 와 $1$ 을 갈라 $3,1$, 마지막으로 $3$ 과 $1$ 을 갈라 차 $2$ 가 남는다.

두 방법 모두 차가 $0$ 인 나눔을 놓쳤다. $8+7=15$ 이고 $6+5+4=15$ 이므로 차 $0$ 이 된다. 부분합 문제의 표로 $8,7,6,5,4$ 가운데 몇 개를 골라 합 $15$ 를 만들 수 있는지 보면 이 나눔이 나온다.

# 정의

## 분할 문제

양의 정수 $a\_1,\dots,a\_n$ 이 주어질 때, 다음을 만족하는 $S\subseteq\lbrace 1,\dots,n\rbrace$ 가 있는지 묻는 판정 문제를 **분할 문제** 라 한다.

$$
\sum_{i\in S}a_i=\sum_{i\notin S}a_i
$$

합 $\sum\_ia\_i$ 가 홀수이면 답은 "아니오" 이고, 짝수이면 목표값 $K=\frac12\sum\_ia\_i$ 인 부분합 문제와 같다. 직관 절의 $8,7,6,5,4$ 는 $S$ 가 $8$ 과 $7$ 의 자리이므로 답이 "예" 다.

차 $\vert\sum\_{i\in S}a\_i-\sum\_{i\notin S}a\_i\vert$ 를 가장 작게 하는 $S$ 를 찾는 최적화 판본을 **수 분할(number partitioning)** 이라 한다.

## 차분법

가장 큰 두 수를 지우고 그 차를 넣기를 수가 하나 남을 때까지 되풀이하는 방법을 **차분법(differencing method)** 이라 한다. 남은 수가 어떤 나눔의 차이고, 두 수를 차로 바꿀 때마다 두 수를 서로 다른 무리에 넣는다고 기록하면 그 나눔이 복원된다. N. Karmarkar 와 R. M. Karp 가 제안해 Karmarkar–Karp 방법이라고도 한다[^1]. 직관 절에서 차분법은 $8,7,6,5,4\to 6,5,4,1\to 4,1,1\to 3,1\to 2$ 로 차 $2$ 를 낸다.

# 성질

## NP-완전성

분할 문제는 [NP(nondeterministic polynomial time)-완전](np-completeness.md)이고, R. M. Karp 의 21 개 NP-완전 문제 가운데 하나다[^2]. 부분합 문제의 입력 $a\_1,\dots,a\_n$ 과 $K$ 에서 합을 $T=\sum\_ia\_i$ 로 두고 두 수 $2T-K$ 와 $T+K$ 를 더한다. 새 합은 $4T$ 이고 두 새 수의 합 $3T$ 가 $2T$ 를 넘으므로 둘은 다른 무리에 들고, $2T-K$ 쪽 무리는 원래 수에서 합 $K$ 를 채워야 한다. 그래서 새 입력의 답과 원래 부분합 문제의 답이 같다.

## 의사다항 시간 풀이

부분합 문제의 합의 표를 $K=\frac12\sum\_ia\_i$ 로 채우면 $O(n\sum\_ia\_i)$ 시간에 판정된다. 수들의 크기가 $n$ 의 다항식 이하이면 다항 시간이고, 어려운 입력은 수가 $n$ 에 대해 지수적으로 큰 것이다.

## 탐욕 규칙의 보장

무거운 것부터 가벼운 쪽에 주는 탐욕 규칙은 기계 두 대의 [동일 병렬 기계 일정 문제](identical-machine-scheduling.md)에서 LPT(longest processing time first) 규칙과 같다. 그래서 무거운 쪽의 합이 최적 나눔의 무거운 쪽 합의 $7/6$ 배를 넘지 않는다. 직관 절에서 $17\le\frac76\cdot 15=17.5$ 다.

## 무작위 입력에서의 차

$a\_i$ 가 $\lbrack 0,1\rbrack$ 위의 균등분포에서 독립으로 뽑히면 최적 나눔의 차는 기댓값이 $\Theta(\sqrt n\thinspace 2^{-n})$ 이다[^3]. 차분법이 내는 차는 기댓값이 $n^{-\Theta(\log n)}$ 이다[^4].

# 활용

- 두 기계의 일정. 일들을 기계 두 대에 나눠 동시에 끝나게 하는 것이 분할 문제다. 기계가 여러 대이면 동일 병렬 기계 일정 문제가 된다.
- NP-어려움(NP-hardness)의 환원. [상자 채우기 문제](bin-packing.md)에서 상자 두 개로 충분한지, 기계 두 대의 일정에서 완료 시각이 합의 절반인지를 판정하는 것이 분할 문제이므로, 두 문제의 NP-어려움과 근사 하한이 여기서 나온다.
- 공정한 나눔. 값이 정해진 물건들을 두 사람에게 나눌 때 두 몫의 차를 줄이는 문제가 수 분할이다.

[^1]: N. Karmarkar, R. M. Karp, "The differencing method of set partitioning", Technical Report UCB/CSD 82/113, University of California, Berkeley (1982).
[^2]: R. M. Karp, "Reducibility among combinatorial problems", in Complexity of Computer Computations, Plenum (1972), 85–103.
[^3]: N. Karmarkar, R. M. Karp, G. S. Lueker, A. M. Odlyzko, "Probabilistic analysis of optimum partitioning", Journal of Applied Probability 23 (1986), 626–645.
[^4]: B. Yakir, "The differencing algorithm LDM for partitioning: a proof of a conjecture of Karmarkar and Karp", Mathematics of Operations Research 21 (1996), 85–99.

# 연관 문서

## 선수지식

- [부분합 문제](subset-sum.md)

## 더 알아보기

- [3-분할 문제](three-partition-problem.md)

#algorithms #complexity #combinatorics
