# 근사 알고리즘

# 개요

**근사 알고리즘(approximation algorithm)** 은 최적해 대신 최적해와의 비율이 증명된 해를 다항시간에 내놓는 알고리즘이다. 도시 몇 곳에 소방서를 지어 모든 도로의 한쪽 끝에 소방서가 있게 하는 가장 작은 배치는 모든 경우를 시험하면 도시 수에 대해 지수적으로 오래 걸리지만, 아직 덮이지 않은 도로의 양 끝에 모두 소방서를 짓는 일을 되풀이하면 최적의 두 배를 넘지 않는 배치가 빠르게 나온다. 근사 알고리즘은 최적값을 모르는 채로 그보다 작을 수 없는 양을 찾아, 결과가 최적의 몇 배 안에 드는지를 증명한다.

# 직관

경로 $1-2-3-4$ 의 변 $12,23,34$ 를 모두 덮는 가장 작은 정점 집합, 곧 [정점 덮개 문제](vertex-cover.md)의 답은 $\lbrace 2,3\rbrace$ 이고 크기가 $2$ 다. 그래프가 크면 이 최솟값을 찾는 데 정점 수에 대해 지수적으로 오래 걸린다. 그래서 빠른 방법으로 덮개를 만들고, 그 크기가 최솟값의 몇 배 이하인지 증명한다.

아직 덮이지 않은 변을 하나 골라 양 끝을 모두 넣기를 되풀이한다. 변 $12$ 를 골라 $1,2$ 를 넣으면 $34$ 가 남고, $34$ 를 골라 $3,4$ 를 넣으면 덮개 $\lbrace 1,2,3,4\rbrace$ 가 나온다. 고른 변 $12$ 와 $34$ 는 끝점을 공유하지 않으므로 어떤 덮개도 두 변에서 서로 다른 끝점을 하나씩 넣어야 하고, 최솟값은 $2$ 이상이다. 만든 덮개의 크기 $4$ 는 고른 변 수의 두 배이므로 최솟값의 두 배 이하다.

일반 그래프에서도 고른 변들은 끝점을 공유하지 않는 [매칭](matchings.md) $M$ 을 이룬다. 그래서 최솟값을 모른 채 다음이 성립한다.

$$
\lvert M\rvert\le\mathrm{OPT}\le\mathrm{ALG}=2\lvert M\rvert
$$

# 정의

## 근사비

최소화 문제의 알고리즘이 모든 입력 $x$ 에서 다음을 만족하면 **$\rho$-근사($\rho$-approximation)** 라 하고, $\rho$ 를 **근사비(approximation ratio)** 라 한다.

$$
\mathrm{ALG}(x)\le\rho\cdot\mathrm{OPT}(x)
$$

최대화 문제에서는 $\mathrm{ALG} \ge \mathrm{OPT}/\rho$ 로 쓰거나 $\rho \le 1$ 인 비율로 쓴다. $\rho$ 는 상수일 수도 있고 입력 크기에 따라 커질 수도 있다. 직관의 정점 덮개 알고리즘은 $2$-근사다. 최적해의 값과 비교할 수 있는 이런 하한 $\lvert M\rvert$ 를 찾는 것이 근사비 증명의 요지다.

## 근사 가능성의 등급

| 등급 | 뜻 | 예 |
|---|---|---|
| **FPTAS**(fully polynomial-time approximation scheme) | 임의의 $\varepsilon$ 에 대해 $1+\varepsilon$ 근사를 $1/\varepsilon$ 의 다항시간에 | [배낭 문제](knapsack-problem.md) |
| **PTAS**(polynomial-time approximation scheme) | 임의의 $\varepsilon$ 에 대해 $1+\varepsilon$ 근사, 시간은 $\varepsilon$ 에 지수적이어도 됨 | 유클리드 [외판원 문제](traveling-salesman-problem.md)(traveling salesman problem, TSP) |
| **APX**(approximable) | 어떤 상수 $\rho$ 로 근사 가능 | 정점 덮개, 최대 절단 |
| 로그 근사 | $\Theta(\log n)$ 이 최선 | [집합 덮개](set-cover.md) |
| 근사 불가 | 어떤 상수배로도 근사 불가($\mathrm{P} \ne \mathrm{NP}$ 가정) | 일반 TSP, [최대 클릭](clique-problem.md) |

조건을 바꾸면 등급이 달라진다. 삼각부등식을 만족하는 TSP 는 상수 근사가 가능하다. 일반 TSP 의 상수 근사가 있으면 그것으로 [NP-완전](np-completeness.md)(NP 는 nondeterministic polynomial time)인 [Hamilton 순환](hamiltonian-cycles.md)의 존재를 판정할 수 있으므로, $\mathrm P\ne\mathrm{NP}$ 이면 일반 TSP 의 상수 근사는 없다.

# 성질

## 정점 덮개의 2-근사

유일 게임 추측(unique games conjecture)을 가정하면 다항시간 $(2-\varepsilon)$-근사는 없다[^1]. 이 추측 없이 $\mathrm P\ne\mathrm{NP}$ 만 가정하면 $1.3606$ 보다 작은 근사비가 불가능하다[^2].

## 집합 덮개의 로그 인자

남은 원소를 가장 많이 덮는 집합을 반복해 고르는 탐욕 알고리즘은 $H_n \approx \ln n$ 근사를 준다. 각 단계에서 남은 원소 수가 $1 - 1/\mathrm{OPT}$ 배 이하로 줄어든다.

$$
r_{t+1}\le r_t\Big(1-\frac{1}{\mathrm{OPT}}\Big)\ \Rightarrow\ \text{단계 수}\le\mathrm{OPT}\cdot\ln n
$$

$\mathrm P\ne\mathrm{NP}$ 이면 $(1-\varepsilon)\ln n$ 근사는 없으므로 탐욕 알고리즘의 근사비가 최선이다[^3].

## 기법

- 탐욕과 국소 탐색(local search). 집합 덮개, 최대 절단의 1/2 근사.
- LP(linear programming) 완화와 반올림. 정수 제약을 풀어 [선형계획법](linear-programming.md)으로 푼 뒤 반올림하는 [LP 반올림](lp-rounding.md)이다. 최적 LP 값과 정수 최적값의 비인 적분성 간극(integrality gap)이 근사비의 한계를 준다.
- 원시-쌍대. LP 쌍대해를 함께 키우며 해를 구성하는 [원시-쌍대 방법](primal-dual-method.md)이다. [Lagrange 쌍대성](lagrange-duality.md)의 조합적 판본이다.
- 무작위화와 비무작위화. 각 변수를 확률로 정하면 기댓값 보장이 나오고, [조건부 기댓값](conditional-expectation.md)을 따라가면 결정적 알고리즘이 된다. 최대 절단(max-cut)의 0.878-근사는 M. X. Goemans 와 D. P. Williamson 이 [반정부호 계획법](semidefinite-programming.md)의 해를 반올림해 얻었다.

## 근사 불가능성의 근거

근사 불가능성 증명은 [PCP 정리](pcp-theorem.md)(probabilistically checkable proof)를 쓴다. 모든 NP 문제의 증명을 상수 개의 비트만 무작위로 읽고 검증할 수 있다는 이 정리는 간극이 있는 판정 문제로 번역된다. 참인 사례와 거짓인 사례 사이에 값의 간극이 생기도록 환원을 만들면, 그 간극보다 정밀한 근사 알고리즘은 판정 문제를 풀어 버리므로 존재할 수 없다.

# 활용

- 대규모 최적화. [시설 배치](facility-location.md), 차량 경로, 작업 스케줄링, 광고 배분은 NP-난해지만 매일 풀어야 한다. 근사비 보장이 있으면 비용 계획에 최악의 경우를 넣을 수 있고, 보장 없는 휴리스틱의 초기해로도 쓴다.
- 문제 정의의 재설계. 일반 TSP 의 근사 불가능성은 삼각부등식을 만족하는 거리 함수를 쓰도록 모형을 고치는 근거가 되고, 집합 덮개의 로그 하한은 더 나은 알고리즘 대신 문제의 특수 구조를 찾게 한다.
- 온라인과 스트리밍. 온라인 알고리즘의 경쟁비와 스트리밍 알고리즘의 근사 인자가 같은 틀이며, 하한 증명의 기법만 정보이론 쪽으로 바뀐다.

[^1]: S. Khot, O. Regev, "Vertex cover might be hard to approximate to within 2−ε", Journal of Computer and System Sciences 74 (2008), 335–349.
[^2]: I. Dinur, S. Safra, "On the hardness of approximating minimum vertex cover", Annals of Mathematics 162 (2005), 439–485.
[^3]: I. Dinur, D. Steurer, "Analytical approach to parallel repetition", Proceedings of the 46th ACM Symposium on Theory of Computing (2014), 624–633.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

## 더 알아보기

### 설계 기법과 하한

- [LP 반올림](lp-rounding.md)
- [PCP 정리](pcp-theorem.md)

### 대표 문제

- [집합 덮개 문제](set-cover.md)
- [정점 덮개 문제](vertex-cover.md)
- [배낭 문제](knapsack-problem.md)
- [외판원 문제](traveling-salesman-problem.md)
- [Steiner 나무 문제](steiner-tree-problem.md)
- [k-중심 문제](k-center.md)

#complexity #algorithms
