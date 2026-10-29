# Frobenius 동전 문제

# 개요

**Frobenius 동전 문제(Frobenius coin problem)** 는 몇 가지 액면의 동전만으로 정확히 낼 수 없는 금액 가운데 가장 큰 것을 구하는 문제다. $3$ 원과 $5$ 원짜리 동전만 있으면 $1,2,4,7$ 원은 낼 수 없고, $8=3+5$, $9=3\cdot 3$, $10=5\cdot 2$ 부터는 $3$ 원을 더해 가며 모든 금액을 낸다. 액면이 서로소인 두 가지 $a,b$ 이면 답이 $ab-a-b$ 이고, 이는 금액마다 $b$ 원 동전의 개수를 법 $a$ 로 하나로 정해 보면 나온다.

# 직관

$3$ 원과 $5$ 원으로 금액 $n$ 을 내려면 $5$ 원 동전을 몇 개 쓸지 정해야 한다. $5$ 원 동전을 $3$ 개 쓰는 것은 $3$ 원 동전 $5$ 개와 같으므로 $5$ 원 동전은 $0,1,2$ 개만 보면 된다. $5$ 원 $0$ 개로는 $3$ 의 배수 $0,3,6,\dots$, $1$ 개로는 $5,8,11,\dots$, $2$ 개로는 $10,13,16,\dots$ 이 나온다.

세 줄은 $3$ 으로 나눈 나머지가 $0,2,1$ 인 수를 각각 맡고, 줄마다 시작점 $0,5,10$ 아래의 수만 빠진다. 빠지는 가장 큰 수는 가장 늦게 시작하는 줄의 바로 앞 $10-3=7$ 이다. 빠지는 수는 $5$ 아래의 $2$ 와 $10$ 아래의 $1,4,7$ 로 모두 넷이다.

# 정의

양의 정수 $a_1,\dots,a_k$ 의 최대공약수가 $1$ 일 때, 음이 아닌 정수 $x_i$ 로 $n=a_1x_1+\cdots+a_kx_k$ 라 쓸 수 있는 $n$ 을 **표현 가능한 수** 라 하고, 표현 가능하지 않은 가장 큰 정수를 **Frobenius 수(Frobenius number)** $g(a_1,\dots,a_k)$ 라 한다. 최대공약수가 $1$ 이면 충분히 큰 정수는 모두 표현 가능하므로 $g$ 가 존재한다.

표현 가능한 수의 집합은 $0$ 을 포함하고 덧셈에 닫혀 있으며 유한 개의 수만 빠진다. 이런 집합을 수치 반군(numerical semigroup)이라 하고, 빠진 수를 그 반군의 틈(gap)이라 한다.

# 성질

## 두 액면의 공식

$\gcd(a,b)=1$ 이면 다음이 성립한다. Sylvester 가 1884 년에 문제로 냈다.[^1]

$$
g(a,b)=ab-a-b,\qquad \text{틈의 개수}=\frac{(a-1)(b-1)}{2}
$$

증명의 요지. [유클리드 알고리즘](euclidean-algorithm.md)의 Bézout 항등식으로 모든 정수 $n$ 은 $n=ax+by$, $0\le y\le a-1$ 꼴로 정확히 한 가지로 적힌다. $y$ 는 $n\equiv by\pmod a$ 로 정해지기 때문이다. $n$ 이 표현 가능한 것은 이 표현에서 $x\ge 0$ 인 것과 동치다. $y$ 를 $a$ 이상으로 늘리면 $x$ 가 줄어들 뿐이기 때문이다.

$ab-a-b=a\cdot(-1)+b(a-1)$ 은 $x=-1$ 이므로 표현 가능하지 않다. $n\gt ab-a-b$ 이면 $ax=n-by\ge n-b(a-1)\gt -a$ 이므로 $x\ge 0$ 이다.

## 대칭성

$0\le n\le g$ 이면 $n$ 과 $g-n$ 가운데 정확히 하나가 표현 가능하다. $n=ax+by$, $0\le y\le a-1$ 이면 $g-n=a(-1-x)+b(a-1-y)$ 이고 $0\le a-1-y\le a-1$ 이므로, $x\ge 0$ 과 $-1-x\ge 0$ 가운데 정확히 하나가 성립한다. 따라서 $0,\dots,g$ 의 $g+1=(a-1)(b-1)$ 개 수가 절반씩 나뉘어 틈의 개수가 나온다.

## 세 액면 이상

액면이 셋 이상이면 $g$ 를 액면의 다항식으로 쓰는 일반 공식이 없다는 것이 Curtis(1990)에 의해 증명되었다. 액면의 개수를 고정하면 $g$ 를 입력 길이의 다항식 시간에 계산하는 알고리즘이 있고(Kannan, 1992), 액면의 개수를 입력의 일부로 두면 $g$ 의 계산은 NP(nondeterministic polynomial time) 어려움(NP-hard)이다(Ramírez Alfonsín, 1996).[^2] 예로 $g(6,9,20)=43$ 이다.

## 잉여류 최단경로

가장 작은 액면 $a$ 에 대해 법 $a$ 의 나머지 $r$ 마다 나머지가 $r$ 인 가장 작은 표현 가능한 수 $t_r$ 을 구하면 다음이 성립한다.

$$
g=\max_r t_r-a
$$

$t_r$ 은 나머지 $0,\dots,a-1$ 을 정점으로, $r\to r+a_i\bmod a$ 를 길이 $a_i$ 의 간선으로 둔 그래프에서 $0$ 부터의 [최단경로](shortest-paths.md) 길이다. 직관 절의 $0,5,10$ 이 $a=3$ 일 때의 $t_0,t_2,t_1$ 이다.

# 활용

- 수치 반군은 대수곡선의 한 점에서 극을 갖는 함수의 극 차수들이 이루는 Weierstrass 반군(Weierstrass semigroup)으로 나타나고, 틈의 개수가 곡선의 종수(genus)와 같다. 이를 Weierstrass 틈 정리(Weierstrass gap theorem)라 한다.
- 정수 계획법에서 $\sum a_ix_i=n$ 의 음이 아닌 정수해 존재를 묻는 배낭 문제의 특수한 꼴이고, $n\gt g$ 이면 해가 항상 있다는 점을 판정에 쓴다.

[^1]: J. J. Sylvester, "Mathematical questions with their solutions", *Educational Times* **41** (1884), 21. 두 액면의 틈의 개수와 Frobenius 수.
[^2]: J. L. Ramírez Alfonsín, *The Diophantine Frobenius Problem*, Oxford University Press (2005). Curtis 의 다항식 공식 부재, Kannan 의 고정 차원 알고리즘, NP 어려움 증명, 최단경로 방법.

# 연관 문서

## 선수지식

- [유클리드 알고리즘](euclidean-algorithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics #algorithms
