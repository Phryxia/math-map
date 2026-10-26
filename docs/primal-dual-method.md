# 원시-쌍대 방법

# 개요

**원시-쌍대 방법(primal-dual method)** 은 정수계획의 선형 완화에 대해 쌍대 가능해를 조금씩 키우고, 쌍대 제약이 등식이 된 변수만 정수 원시해에 넣어 근사해를 만드는 [근사 알고리즘](approximation-algorithms.md)의 설계 방법이다. 선형계획을 풀지 않고 조합적 연산만 쓰며, 끝에 남은 쌍대해가 최적값의 하한을 증명한다. [LP 반올림](lp-rounding.md)(linear programming)이 완화의 최적해를 구한 뒤 반올림하는 것과 달리, 이 방법은 원시해와 쌍대해를 함께 만든다.

# 직관

[집합 덮개 문제](set-cover.md)의 예를 쓴다. 원소는 $1$ 부터 $6$ 까지이고 집합은 $A=\lbrace 1,2,3\rbrace$, $B=\lbrace 4,5,6\rbrace$, $C=\lbrace 1,2,4,5\rbrace$ 이며 비용은 모두 $1$ 이다. 원소마다 값 $y_e\ge 0$ 을 두고, 어느 집합에서나 그 원소들의 $y_e$ 합이 그 집합의 비용 $1$ 을 넘지 않게 한다. 덮개는 원소마다 집합을 하나 이상 쓰므로, 이 조건 아래에서 $\sum_e y_e$ 는 어느 덮개의 비용보다도 크지 않다.

아직 덮이지 않은 원소 $3$ 의 $y_3$ 을 $0$ 에서 키운다. $3$ 을 포함하는 집합은 $A$ 뿐이므로 $y_3=1$ 에서 $A$ 의 합이 $1$ 에 닿고 더 키울 수 없다. 합이 비용에 닿은 $A$ 를 덮개에 넣으면 $1,2,3$ 이 덮인다. 다음으로 덮이지 않은 원소 $4$ 의 $y_4$ 를 키우면 $y_4=1$ 에서 $B$ 와 $C$ 의 합이 함께 $1$ 에 닿는다. $B$ 를 넣으면 남은 원소가 모두 덮인다.

덮개 $\lbrace A,B\rbrace$ 의 비용은 $2$ 이고 $y_3+y_4=2$ 이다. $\sum_e y_e$ 는 어느 덮개의 비용보다도 크지 않으므로 비용 $2$ 보다 싼 덮개는 없고, 이 덮개가 최적임이 쌍대 값으로 증명된다. 원소마다 붙인 값 $y_e$ 가 쌍대 변수이고, 합이 비용에 닿은 집합을 고르는 것이 이 방법의 동작이다.

# 정의

덮기 꼴의 정수계획 $\min\lbrace c^{\mathsf T}x:Ax\ge 1,\ x\in\lbrace 0,1\rbrace^m\rbrace$ 에서 $A$ 의 성분이 $0$ 또는 $1$ 이라 하자. [선형계획법](linear-programming.md)의 쌍대는 다음 쌍이다.

$$
\min\ c^{\mathsf T}x\ \ \text{s.t.}\ \ Ax\ge 1,\ x\ge 0\qquad\qquad\max\ 1^{\mathsf T}y\ \ \text{s.t.}\ \ A^{\mathsf T}y\le c,\ y\ge 0
$$

$y$ 가 쌍대 가능해일 때 $j$ 번째 쌍대 제약이 등식 $(A^{\mathsf T}y)\_j=c_j$ 이면 변수 $j$ 가 **빠듯하다(tight)** 고 한다.

원시-쌍대 알고리즘은 $x=0$, $y=0$ 에서 시작해 다음을 되풀이한다.

1. 만족되지 않은 원시 제약 $i$ 를 고른다.
2. 어느 변수가 빠듯해질 때까지 $y_i$ 를 키운다.
3. 빠듯해진 변수 하나를 $x_j=1$ 로 둔다.

모든 원시 제약이 만족되면 멈춘다. 원시 제약을 여럿 함께 골라 그 쌍대 변수를 같은 속도로 키우는 판본도 있다.

# 성질

## 완화된 상보 여유

정리. $x$ 가 정수 원시 가능해, $y$ 가 쌍대 가능해이고 다음 두 조건을 만족하면 $c^{\mathsf T}x\le\alpha\cdot 1^{\mathsf T}y\le\alpha\cdot\mathrm{OPT}$ 이다.

- 원시 조건. $x_j\gt 0$ 이면 $(A^{\mathsf T}y)\_j=c_j$ 다.
- 완화된 쌍대 조건. $y_i\gt 0$ 이면 $(Ax)\_i\le\alpha$ 다.

증명의 요지. 원시 조건에서 $c^{\mathsf T}x=\sum_jx_j(A^{\mathsf T}y)\_j=\sum_iy_i(Ax)\_i$ 이고, 완화된 쌍대 조건에서 이것은 $\alpha\sum_iy_i$ 이하다. 선형계획의 약쌍대성으로 $1^{\mathsf T}y\le\mathrm{OPT}\_{LP}\le\mathrm{OPT}$ 이다. $\alpha=1$ 이면 상보 여유 조건 그 자체이고 두 해가 모두 최적이다.

알고리즘의 3단계는 빠듯한 변수만 넣으므로 원시 조건을 늘 지킨다. 근사비는 완화된 쌍대 조건의 $\alpha$ 를 얼마로 잡을 수 있는지로 정해진다.

## 집합 덮개의 빈도 근사

정리(Bar-Yehuda–Even). 원소마다 그 원소를 포함하는 집합이 $f$ 개 이하이면 원시-쌍대 알고리즘의 덮개 비용은 $f\cdot\mathrm{OPT}$ 이하다[^1].

증명의 요지. 원소 $e$ 의 원시 제약 $(Ax)\_e$ 는 $e$ 를 덮는 고른 집합의 수이고 $f$ 이하다. 완화된 상보 여유에 $\alpha=f$ 를 넣는다. $f=2$ 인 정점 덮개에서는 가중 2-근사가 되고, 간선을 하나씩 보며 두 끝점의 남은 비용 가운데 작은 쪽만큼 양쪽에서 빼는 선형 시간 알고리즘이 된다.

## 역삭제와 Steiner 숲

그래프의 정점 쌍 $(s_i,t_i)$ 들이 주어지고, 각 쌍을 잇는 간선 집합 가운데 비용이 가장 작은 것을 찾는 문제가 **Steiner 숲 문제(Steiner forest problem)** 다. 원시 제약은 $s_i$ 와 $t_i$ 를 가르는 정점 집합 $S$ 마다 $S$ 를 떠나는 간선을 하나 이상 고르라는 것이다.

정리(Agrawal–Klein–Ravi, Goemans–Williamson). 아직 쌍이 이어지지 않은 연결 성분의 쌍대 변수를 모두 같은 속도로 키우고, 끝에 불필요한 간선을 넣은 순서의 역순으로 지우면 비용이 $2\cdot\mathrm{OPT}$ 이하다[^2][^3].

증명의 요지. 역순으로 지운 뒤에는 각 단계의 활성 성분들이 고른 간선을 평균 2 개 미만 가로지른다. 쌍대 변수를 함께 키우므로 이 평균이 단계마다의 $\alpha$ 로 들어간다. 지우는 단계가 없으면 하나의 성분이 고른 간선을 많이 가로질러 $\alpha$ 가 커진다.

## 시설 배치

시설을 열 비용과 고객을 시설에 잇는 비용의 합을 최소화하는 [시설 배치 문제](facility-location.md)에서 연결 비용이 거리 공간을 이루면, 원시-쌍대 방법이 3-근사를 준다(Jain–Vazirani)[^4]. 고객마다 쌍대 변수를 키우되 시설 하나에 대한 기여를 합해 그 시설의 개설 비용에 닿으면 연다.

## 정확한 원시-쌍대 알고리즘

제약행렬이 완전 단모듈러여서 간극이 $1$ 이면 $\alpha=1$ 로 잡을 수 있고 알고리즘이 최적해를 낸다. 이분그래프의 최소 비용 완전 매칭을 푸는 Hungarian 방법(Hungarian method)이 그 예이며, 정점마다 쌍대 변수를 두고 빠듯한 간선만으로 증가 경로를 찾는다[^5]. [매칭](matchings.md)에 그 절차가 있다.

# 활용

- [집합 덮개 문제](set-cover.md)와 정점 덮개의 가중 근사. 빈도 근사가 선형계획을 풀지 않는 선형 시간 알고리즘이 된다.
- 네트워크 설계. Steiner 숲, [Steiner 나무](steiner-tree-problem.md), 일반화 Steiner 망, 최소 비용 연결 문제의 2-근사와 그 변형이 동시 증가와 역삭제로 증명된다.
- [Lagrange 쌍대성](lagrange-duality.md)과의 결합. Jain–Vazirani 는 시설 배치의 원시-쌍대 알고리즘을 Lagrange 완화 안에서 써서 [k-중앙값 문제](k-median.md)의 상수 근사를 얻었다[^4].

[^1]: R. Bar-Yehuda, S. Even, "A linear-time approximation algorithm for the weighted vertex cover problem", Journal of Algorithms 2 (1981), 198–203.
[^2]: A. Agrawal, P. Klein, R. Ravi, "When trees collide: an approximation algorithm for the generalized Steiner problem on networks", SIAM Journal on Computing 24 (1995), 440–456.
[^3]: M. X. Goemans, D. P. Williamson, "A general approximation technique for constrained forest problems", SIAM Journal on Computing 24 (1995), 296–317.
[^4]: K. Jain, V. V. Vazirani, "Approximation algorithms for metric facility location and k-median problems using the primal-dual schema and Lagrangian relaxation", Journal of the ACM 48 (2001), 274–296.
[^5]: H. W. Kuhn, "The Hungarian method for the assignment problem", Naval Research Logistics Quarterly 2 (1955), 83–97.

# 연관 문서

## 선수지식

- [LP 반올림](lp-rounding.md)
- [집합 덮개 문제](set-cover.md)

## 더 알아보기

- [시설 배치 문제](facility-location.md)

#algorithms #optimization #complexity
