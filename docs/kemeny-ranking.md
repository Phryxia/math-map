# Kemeny 순위

# 개요

**Kemeny 순위(Kemeny ranking)** 는 여러 사람이 낸 순위들과 어긋나는 쌍의 수를 모두 더한 값이 가장 작은 순위다. 일곱 사람이 a, b, c 에 순위를 매겼는데 두 후보씩 다수결을 하면 a 가 b 를, b 가 c 를, c 가 a 를 이기는 순환이 생길 때, 사회의 순위 하나를 정하려면 순환의 어느 한 대결을 뒤집어야 한다. Kemeny 순위는 뒤집을 때 생기는 불일치의 수를 세어, 가장 적은 사람의 의견을 거스르는 순위를 고른다.

# 직관

세 사람이 a, b, c 순, 두 사람이 b, c, a 순, 두 사람이 c, a, b 순으로 순위를 냈다. 두 후보씩 다수결을 하면 a 가 b 를 $5:2$, b 가 c 를 $5:2$ 로 이기고, c 가 a 를 $4:3$ 으로 이긴다. 다수결의 결과가 순환한다.

순위 a, b, c 를 고르면 a 를 b 앞에 두어 b 를 앞에 둔 두 사람과 어긋나고, b 를 c 앞에 두어 두 사람과 어긋나고, a 를 c 앞에 두어 네 사람과 어긋난다. 불일치는 모두 $2+2+4=8$ 이다.

같은 셈으로 순위 b, c, a 의 불일치는 $5+2+3=10$, 순위 c, a, b 의 불일치는 $2+5+3=10$ 이다. 순환을 이루지 않는 나머지 세 순위는 다수결을 둘 이상 뒤집어 불일치가 $11$ 이상이다.

그래서 Kemeny 순위는 a, b, c 다. 순환의 세 대결 가운데 표 차이가 가장 작은 c 와 a 의 대결을 뒤집었다.

# 정의

후보의 유한집합 $A$ 위의 두 전순서 $\sigma$, $\tau$ 에 대해, 두 순서가 다른 순서로 놓는 후보 쌍의 수를 **Kendall 거리(Kendall tau distance)** 라 하고 $d(\sigma,\tau)$ 로 적는다. 직관 절에서 a, b, c 와 b, c, a 의 Kendall 거리는 $2$ 다. a 와 b, a 와 c 의 순서가 다르고 b 와 c 의 순서는 같다.

유권자들의 순위 $\sigma_1,\dots,\sigma_n$ 이 주어질 때, 다음을 최소로 하는 전순서 $\pi$ 를 **Kemeny 순위** 라 한다.

$$
\sum_{i=1}^{n}d(\pi,\sigma_i)
$$

후보 쌍 $\lbrace x,y\rbrace$ 마다 $x$ 를 앞에 둔 유권자 수를 $N(x,y)$ 라 하면, 위의 합은 $\pi$ 가 $y$ 를 $x$ 보다 앞에 둔 모든 쌍에서 $N(x,y)$ 를 더한 값이다.

# 성질

## Condorcet 조건

일대일 다수결에서 다른 모든 후보를 이기는 후보가 있으면, 그 후보는 Kemeny 순위의 1 위다. 그 후보를 1 위로 올리면 그 후보와 관련된 모든 쌍에서 다수와 같아지고 다른 쌍의 순서는 그대로이므로 합이 줄어든다. 일대일 다수결의 결과가 순환하지 않고 전순서를 이루면 Kemeny 순위는 그 순서다.

## Arrow 조건과의 관계

모든 유권자가 $x$ 를 $y$ 앞에 두면 Kemeny 순위도 $x$ 를 $y$ 앞에 두므로 Pareto 조건을 만족한다. 독재가 아니므로 [Arrow 불가능성 정리](arrow-impossibility-theorem.md)에 따라 무관한 대안으로부터의 독립성을 어긴다. 직관 절에서 a 와 b 의 순서는 c 와 관련된 표 차이에 따라 정해진다.

## 최대가능도 해석

참된 순위 $\pi$ 가 있고 각 유권자가 서로 독립으로 $\pi$ 에서 Kendall 거리가 $k$ 인 순위를 $\phi^k$ 에 비례하는 확률로 낸다고 하자($0\lt\phi\lt 1$). 이 모형을 Mallows 모형(Mallows model)이라 한다. 가능도가 $\phi^{\sum_i d(\pi,\sigma_i)}$ 에 비례하므로, 관측된 순위들에서 $\pi$ 의 [최대가능도 추정](maximum-likelihood.md)은 Kemeny 순위다.

## 계산의 어려움

후보 수 $m$ 에 대해 순위는 $m!$ 개다. Kemeny 순위를 구하는 문제는 NP-어려움(nondeterministic polynomial time hard, NP-hard)이고, 유권자가 네 명이어도 그렇다.[^1] 후보마다 꼭짓점을 두고 $N(x,y)\gt N(y,x)$ 이면 $x$ 에서 $y$ 로 무게 $N(x,y)-N(y,x)$ 의 화살표를 그은 방향 그래프에서, Kemeny 순위는 거꾸로 가는 화살표의 무게 합이 가장 작은 꼭짓점 순서다. 이 문제는 가중 최소 되먹임 호 집합(minimum feedback arc set) 문제와 같다.

# 활용

- 순위 집계. 여러 검색 엔진의 결과 순위나 여러 심사위원의 순위를 하나로 합칠 때 Kemeny 순위를 기준으로 삼고, 계산이 어려우므로 [근사 알고리즘](approximation-algorithms.md)을 쓴다.[^2]
- 선거 제도. 후보 전체의 순위를 내는 규칙으로 Condorcet 조건을 만족하는 Kemeny–Young 방법(Kemeny–Young method)이라 부른다.
- 쌍대 비교 자료. 순환하는 쌍대 비교 결과를 하나의 순서로 정리할 때, 뒤집는 비교의 수를 최소로 하는 순서로 쓴다. 승패를 확률 모형으로 다루는 [Bradley–Terry 모형](bradley-terry-model.md)과 달리 모형 없이 셈만으로 순서를 정한다.

[^1]: C. Dwork, R. Kumar, M. Naor, D. Sivakumar, "Rank aggregation methods for the web", Proceedings of the 10th International World Wide Web Conference (2001). NP-어려움 자체는 J. Bartholdi, C. A. Tovey, M. A. Trick, "Voting schemes for which it can be difficult to tell who won the election", Social Choice and Welfare 6 (1989).
[^2]: N. Ailon, M. Charikar, A. Newman, "Aggregating inconsistent information: ranking and clustering", Journal of the Association for Computing Machinery 55 (2008).

# 연관 문서

## 선수지식

- [Arrow 불가능성 정리](arrow-impossibility-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#order_theory #combinatorics #computation
