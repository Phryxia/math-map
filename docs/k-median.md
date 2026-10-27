# k-중앙값 문제

# 개요

**k-중앙값 문제(k-median problem)** 는 시설 $k$ 개를 열어 각 고객이 가장 가까운 시설까지 가는 거리의 합을 최소로 하는 문제다. 도시 주민 천 명을 위해 후보지 백 곳 가운데 보건소 세 곳을 고를 때 조합은 약 $16$ 만 가지이고, 열 곳을 고르면 조합의 수가 $10^{13}$ 을 넘는다. k-중앙값 문제는 정확한 답 대신 시설을 하나씩 바꿔 가며 거리의 합을 줄이는 국소 탐색으로, 최적값의 상수배 안에 드는 답을 구한다.

# 직관

k-중앙값 문제는 [거리 공간](metric-spaces.md)에서 시설 후보지 가운데 $k$ 개 이하를 골라, 각 고객에서 가장 가까운 고른 시설까지의 거리를 모두 더한 값을 최소화하는 문제다. [시설 배치 문제](facility-location.md)에서 개설 비용을 없애고 여는 시설의 수를 $k$ 이하로 제한한 판본이다. 평면에서도 NP-난해(nondeterministic polynomial time)이고, 시설을 바꿔 가며 비용을 줄이는 국소 탐색이 $3+\varepsilon$ 근사를 준다.

[k-중심 문제](k-center.md)가 가장 먼 고객의 거리를 최소화하는 데 비해, 이 문제는 거리의 합을 최소화한다.

수직선 위의 점 $0,1,2,10,11,12$ 가 고객이자 시설 후보지이고, 시설 두 곳을 연다. 두 곳의 조합은 $\binom 62=15$ 가지이지만 점이 $n$ 개, 시설이 $k$ 개이면 $\binom nk$ 가지라서 모두 시도할 수 없다.

아무 두 곳에서 시작해 한 곳씩 바꾼다. $\lbrace 0,12\rbrace$ 를 열면 각 고객의 거리는 $0,1,2,2,1,0$ 이고 합은 $6$ 이다. $0$ 을 닫고 $1$ 을 열면 거리가 $1,0,1,2,1,0$ 이 되어 합이 $5$ 다. 다시 $12$ 를 닫고 $11$ 을 열면 $1,0,1,1,0,1$ 이 되어 합이 $4$ 다.

$\lbrace 1,11\rbrace$ 에서는 한 곳을 닫고 다른 곳을 여는 어떤 바꾸기도 합을 줄이지 못하므로 여기서 멈춘다. 이 예에서는 멈춘 곳이 최적이다. 일반적으로는 최적이 아닌 곳에서 멈출 수 있지만, 멈춘 곳의 합이 최적의 $5$ 배를 넘지 않는다는 것이 증명되어 있다.

# 정의

시설 후보지 집합 $F$, 고객 집합 $C$, $F\cup C$ 위의 거리 $d$, 정수 $k$ 가 주어진다. $S\subseteq F$, $\lvert S\rvert\le k$ 의 비용을

$$
\mathrm{cost}(S)=\sum_{j\in C}\min_{i\in S}d(i,j)
$$

로 두고 $\mathrm{cost}(S)$ 를 최소화하는 문제가 k-중앙값 문제다. 최솟값을 $\mathrm{OPT}$ 로 쓴다.

정수계획으로는 $y_i$ 를 시설 $i$ 를 여는지, $x_{ij}$ 를 고객 $j$ 를 시설 $i$ 에 잇는지로 두고 다음을 푼다.

$$
\min\ \sum_{i,j}d(i,j)\thinspace x_{ij}\quad\text{s.t.}\quad\sum_ix_{ij}=1,\quad x_{ij}\le y_i,\quad\sum_iy_i\le k,\quad x_{ij},y_i\in\lbrace 0,1\rbrace
$$

$k=1$ 이고 시설을 공간의 아무 점에나 둘 수 있으면 점까지의 거리 합을 최소화하는 한 점을 찾는 문제가 되고, 이 점을 [기하 중앙값](geometric-median.md)(geometric median)이라 한다.

# 성질

## 난해성

정리(Megiddo–Supowit). 평면의 점에서 Euclid 거리를 쓰는 k-중앙값 문제는 NP-난해다[^1].

정리(Jain–Mahdian–Saberi). $1+2/e\approx 1.736$ 보다 작은 근사비의 다항시간 알고리즘이 있으면 $\mathrm{NP}\subseteq\mathrm{DTIME}(n^{O(\log\log n)})$ 이다[^2].

거리 조건이 없으면 [집합 덮개 문제](set-cover.md)가 환원되어 근사비를 상수로 막을 수 없다. 이후의 근사 결과는 모두 $d$ 가 삼각부등식을 만족한다고 둔다.

## 국소 탐색

정리(Arya 등). 지금의 시설 집합에서 시설 $p$ 개를 닫고 $p$ 개를 여는 바꾸기로 비용이 줄면 옮기기를 되풀이한다. 더 줄일 수 없는 집합 $S$ 는 $\mathrm{cost}(S)\le(3+2/p)\thinspace\mathrm{OPT}$ 를 만족한다[^3].

증명의 요지. 최적해 $O$ 의 시설과 $S$ 의 시설을 짝지은 바꾸기 몇 개를 고르되, $O$ 의 각 시설이 정확히 한 번 열리게 한다. $S$ 가 국소 최적이므로 각 바꾸기의 비용 변화는 $0$ 이상이다. 바꾸기마다 영향을 받는 고객을 $O$ 에서의 시설이나 삼각부등식으로 찾은 근처 시설에 다시 이어 비용 변화를 위로 묶고, 그 부등식을 모두 더하면 $\mathrm{cost}(S)$ 가 $\mathrm{OPT}$ 의 $3+2/p$ 배 이하로 나온다.

비용이 $(1-\varepsilon/k)$ 배 이상 줄 때만 옮기면 바꾸기의 횟수가 다항식으로 묶이고, 근사비는 $3+2/p+\varepsilon$ 이 된다.

## Lagrange 완화

정리(Jain–Vazirani). 다항시간 6-[근사 알고리즘](approximation-algorithms.md)이 있다[^4].

증명의 요지. 제약 $\sum_iy_i\le k$ 를 목적함수로 옮겨 모든 시설에 같은 개설 비용 $\lambda$ 를 두면 시설 배치 문제가 된다. 그 문제의 [원시-쌍대 방법](primal-dual-method.md) 3-근사는 연결 비용과 개설 비용의 세 배를 더한 값이 쌍대 가능해의 세 배 이하라는 더 강한 부등식을 만족한다. $\lambda$ 를 이분 탐색해 시설이 $k$ 개보다 조금 적은 해와 조금 많은 해를 얻고, 두 해를 볼록 결합한 뒤 반올림하면 근사비가 $2\cdot 3=6$ 이다. 이 방법은 [Lagrange 쌍대성](lagrange-duality.md)의 승수를 조정해 제약을 맞추는 것이다.

## 그 밖의 근사

- M. Charikar, S. Guha, É. Tardos, D. Shmoys 는 [LP 반올림](lp-rounding.md)(linear programming)으로 처음으로 상수 근사비 $6\frac23$ 을 얻었다[^5].
- S. Li 와 O. Svensson 은 시설을 $k+c$ 개 여는 해를 $k$ 개 여는 해로 고치는 방법으로 $1+\sqrt 3+\varepsilon$ 근사를 얻었다[^6].
- 평면의 Euclid 거리에서는 S. Arora, P. Raghavan, S. Rao 가 임의의 $\varepsilon\gt 0$ 에 대해 $1+\varepsilon$ 근사를 다항시간에 얻었다[^7].
- 수직선 위에서는 점을 정렬한 뒤 연속한 구간으로 나누는 [동적 계획법](dynamic-programming.md)으로 다항시간에 최적해를 구한다.

# 활용

- 군집. 자료점을 고객과 후보지로 동시에 두면 각 군집의 대표를 자료점 가운데서 고르는 군집화가 된다. 대표를 고르는 국소 탐색을 k-medoids 라 부른다. [k 평균 군집화](k-means.md)는 거리의 제곱을 더하고 중심을 공간 어디에나 둔다.
- 시설 배치. 창고와 서버를 $k$ 곳에 둘 때 고객의 평균 이동 거리를 줄이는 문제가 이 꼴이다.

[^1]: N. Megiddo, K. J. Supowit, "On the complexity of some common geometric location problems", SIAM Journal on Computing 13 (1984), 182–196.
[^2]: K. Jain, M. Mahdian, A. Saberi, "A new greedy approach for facility location problems", Proceedings of the 34th ACM Symposium on Theory of Computing (2002), 731–740.
[^3]: V. Arya, N. Garg, R. Khandekar, A. Meyerson, K. Munagala, V. Pandit, "Local search heuristics for k-median and facility location problems", SIAM Journal on Computing 33 (2004), 544–562.
[^4]: K. Jain, V. V. Vazirani, "Approximation algorithms for metric facility location and k-median problems using the primal-dual schema and Lagrangian relaxation", Journal of the ACM 48 (2001), 274–296.
[^5]: M. Charikar, S. Guha, É. Tardos, D. B. Shmoys, "A constant-factor approximation algorithm for the k-median problem", Journal of Computer and System Sciences 65 (2002), 129–149.
[^6]: S. Li, O. Svensson, "Approximating k-median via pseudo-approximation", SIAM Journal on Computing 45 (2016), 530–547.
[^7]: S. Arora, P. Raghavan, S. Rao, "Approximation schemes for Euclidean k-medians and related problems", Proceedings of the 30th ACM Symposium on Theory of Computing (1998), 106–113.

# 연관 문서

## 선수지식

- [시설 배치 문제](facility-location.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #optimization #complexity
