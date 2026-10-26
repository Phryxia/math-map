# 시설 배치 문제

# 개요

**시설 배치 문제(facility location problem)** 는 시설 후보지와 고객이 주어질 때, 어느 후보지에 시설을 열고 각 고객을 어느 열린 시설에 이을지 정해 개설 비용과 연결 비용의 합을 최소화하는 문제다. 용량 제한이 없는 판본도 NP-난해(nondeterministic polynomial time)이고, 연결 비용이 삼각부등식을 만족하면 상수 근사가 있다. [원시-쌍대 방법](primal-dual-method.md)과 [LP 반올림](lp-rounding.md)(linear programming)이 이 문제에서 같은 정수계획을 두 방식으로 다룬다.

# 직관

후보지가 둘, 고객이 셋인 예를 본다. 후보지 $1$ 의 개설 비용은 $3$, 후보지 $2$ 는 $2$ 이다. 고객 $a,b$ 는 후보지 $1$ 까지 거리 $1$, 후보지 $2$ 까지 거리 $3$ 이고, 고객 $c$ 는 후보지 $1$ 까지 $3$, 후보지 $2$ 까지 $1$ 이다.

후보지 $1$ 만 열면 $3+1+1+3=8$ 이고, 후보지 $2$ 만 열면 $2+3+3+1=9$ 이며, 둘 다 열면 $5+1+1+1=8$ 이다. 시설을 많이 열수록 연결 비용이 줄고 개설 비용이 는다. 어느 후보지 조합을 열지 고르는 선택이 $2^{(\text{후보지 수})}$ 가지라서 문제가 어려워진다.

연결 비용이 거리라는 점을 쓰면 비용을 막을 수 있다. 고객 $c$ 가 후보지 $1$ 에 이어질 때 비용 $3$ 은 $c$ 에서 후보지 $2$ 까지, 후보지 $2$ 에서 고객 $a$ 까지, $a$ 에서 후보지 $1$ 까지의 거리 합 $1+3+1=5$ 이하다. [근사 알고리즘](approximation-algorithms.md)은 이 삼각부등식으로 "가까운 시설을 닫고 조금 먼 시설에 잇는" 손실을 상수배로 막는다.

# 정의

시설 후보지 집합 $F$, 고객 집합 $C$, 개설 비용 $f_i\ge 0$, 연결 비용 $c_{ij}\ge 0$ 가 주어진다. **비용량 시설 배치 문제(uncapacitated facility location problem)** 는 열 시설 집합 $S\subseteq F$ 를 골라

$$
\sum_{i\in S}f_i+\sum_{j\in C}\min_{i\in S}c_{ij}
$$

를 최소화하는 문제다. $c$ 가 $F\cup C$ 위의 거리 함수에서 나오면 **거리 시설 배치(metric facility location)** 라 한다.

정수계획으로는 $y_i$ 를 시설 $i$ 를 여는지, $x_{ij}$ 를 고객 $j$ 를 시설 $i$ 에 잇는지로 두고 다음을 푼다.

$$
\min\ \sum_if_iy_i+\sum_{i,j}c_{ij}x_{ij}\quad\text{s.t.}\quad\sum_ix_{ij}=1,\quad x_{ij}\le y_i,\quad x_{ij},y_i\in\lbrace 0,1\rbrace
$$

여는 시설 수를 $k$ 이하로 제한하고 개설 비용을 없앤 판본이 [k-중앙값 문제](k-median.md)(k-median problem)다.

# 성질

## 집합 덮개로의 환원과 로그 근사

시설 하나와 그 시설에 잇는 고객들의 집합을 한 집합으로 보고 비용을 개설 비용과 연결 비용의 합으로 두면 [집합 덮개 문제](set-cover.md)의 가중 판본이 된다. 집합이 지수 개이지만 탐욕 선택의 비율 최솟값은 시설마다 가까운 고객부터 더해 보며 계산할 수 있어 $O(\log\lvert C\rvert)$ 근사가 나온다. 거리 조건이 없으면 집합 덮개가 이 문제의 특수한 경우이므로 로그 근사가 최선이다.

## LP 반올림의 상수 근사

정리(Shmoys–Tardos–Aardal). 거리 시설 배치에서 선형 완화의 최적해를 반올림해 비용 $3.16\cdot\mathrm{OPT}$ 이하의 해를 다항시간에 얻는다[^1].

증명의 요지. 고객마다 분수해가 잇는 시설들의 거리를 보고, 그 거리가 짧은 고객부터 하나씩 골라 주변 시설 가운데 가장 싼 것을 연다. 고른 고객과 분수해를 공유하는 다른 고객은 그 시설에 잇는다. 삼각부등식으로 그런 고객의 연결 비용은 자기 반경의 세 배 이하다. 이것이 3 배 근사의 원형이고, 반경을 무작위로 잡아 $3.16$ 이 된다.

## 원시-쌍대 3-근사

정리(Jain–Vazirani). 거리 시설 배치에서 원시-쌍대 알고리즘의 해는 $3\cdot\mathrm{OPT}$ 이하이고 시간은 $O(m\log m)$ 이다. 여기서 $m=\lvert F\rvert\lvert C\rvert$ 다[^2].

증명의 요지. 고객마다 쌍대 변수 $\alpha_j$ 를 같은 속도로 키운다. $\alpha_j\ge c_{ij}$ 가 되면 고객 $j$ 가 시설 $i$ 의 개설 비용에 $\alpha_j-c_{ij}$ 만큼 보탠다. 보탠 합이 $f_i$ 에 닿으면 시설을 임시로 연다. 끝에 같은 고객이 보탠 두 시설은 함께 열지 않게 골라 내면, 고른 시설에서 먼 고객은 삼각부등식으로 $3\alpha_j$ 이하의 거리에 이어진다. 개설 비용은 쌍대 변수로 정확히 지불되고 연결 비용이 세 배 안에 든다.

## 근사의 한계

거리 시설 배치에서 $1.463$ 보다 작은 근사비는 $\mathrm{NP}\subseteq\mathrm{DTIME}(n^{O(\log\log n)})$ 를 함의한다(Guha–Khuller)[^3]. S. Li 는 LP 반올림과 원시-쌍대 해를 무작위로 섞어 $1.488$ 근사를 얻었다[^4].

## 국소 탐색

열린 시설 집합에서 시설 하나를 더하거나 빼거나 바꾸어 비용이 줄면 옮기는 국소 탐색은 $k$-중앙값 문제에서 $3+\varepsilon$ 근사를 준다(Arya 등)[^5]. 한 번에 $p$ 개씩 바꾸면 $3+2/p$ 다.

# 활용

- 물류와 망 설계. 창고, 기지국, 캐시 서버의 위치를 정하는 문제가 이 꼴이다.
- 군집. $k$-중앙값과 [k 평균 군집화](k-means.md)는 고객을 자료점, 시설을 군집 중심으로 둔 판본이다.
- [Lagrange 쌍대성](lagrange-duality.md)과의 결합. 개설 비용에 공통 값 $\lambda$ 를 두고 시설 배치를 풀어 $\lambda$ 를 조정하면 $k$-중앙값의 상수 근사가 나온다[^2].

[^1]: D. B. Shmoys, É. Tardos, K. Aardal, "Approximation algorithms for facility location problems", Proceedings of the 29th ACM Symposium on Theory of Computing (1997), 265–274.
[^2]: K. Jain, V. V. Vazirani, "Approximation algorithms for metric facility location and k-median problems using the primal-dual schema and Lagrangian relaxation", Journal of the ACM 48 (2001), 274–296.
[^3]: S. Guha, S. Khuller, "Greedy strikes back: improved facility location algorithms", Journal of Algorithms 31 (1999), 228–248.
[^4]: S. Li, "A 1.488 approximation algorithm for the uncapacitated facility location problem", Information and Computation 222 (2013), 45–58.
[^5]: V. Arya, N. Garg, R. Khandekar, A. Meyerson, K. Munagala, V. Pandit, "Local search heuristics for k-median and facility location problems", SIAM Journal on Computing 33 (2004), 544–562.

# 연관 문서

## 선수지식

- [원시-쌍대 방법](primal-dual-method.md)

## 더 알아보기

- [k-중앙값 문제](k-median.md)

#algorithms #optimization #complexity
