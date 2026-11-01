# LP 반올림

# 개요

**LP 반올림(linear programming rounding)** 은 정수계획 문제의 선형계획 완화를 푼 뒤 그 해를 정수해로 반올림하는 근사 알고리즘 설계법이다. 도시 몇 곳에 소방서를 지어 모든 도로의 적어도 한쪽 끝에 소방서가 있게 하되 소방서 수를 가장 적게 하려 할 때, 가능한 배치를 모두 시험하면 도시 수에 대해 지수적으로 많은 경우가 나온다. LP 반올림은 소방서를 $0.5$ 개처럼 분수로 지어도 된다고 풀어 빠르게 푼 뒤, 값이 절반 이상인 곳에 소방서를 지어 최적의 두 배 이내인 배치를 얻는다.

# 직관

삼각형 $K_3$ 의 [정점 덮개](vertex-cover.md), 곧 세 변마다 적어도 한 끝점을 고르는 가장 작은 정점 집합을 찾는다. 정점마다 고르면 $x_i=1$, 안 고르면 $x_i=0$ 으로 두면 변 $uv$ 마다 $x_u+x_v\ge 1$ 을 만족하며 $x_1+x_2+x_3$ 을 최소화하는 문제이고, 최적값은 $2$ 다. 그래프가 크면 이 최적값을 구하는 데 시간이 너무 걸리므로, 어떤 [근사 알고리즘](approximation-algorithms.md)이 최적의 두 배 이내라고 보이려 해도 비교할 최적값을 모른다.

그래서 $x_i\in\lbrace 0,1\rbrace$ 를 $0\le x_i\le 1$ 로 풀어 [선형계획법](linear-programming.md) 문제로 바꾼다. 이 문제는 다항시간에 풀리고, $x_1=x_2=x_3=1/2$ 이 세 제약을 모두 만족하며 비용 $1.5$ 로 최적이다. 정수해도 풀린 문제의 가능해이므로 풀린 문제의 최적값 $1.5$ 는 정수 최적값 $2$ 이하다.

이제 분수해를 정수해로 바꾼다. 값이 $1/2$ 이상인 정점을 모두 고르면 세 정점을 다 골라 비용이 $3$ 이고, 이것은 $1.5$ 의 두 배다. 정수 최적값이 $1.5$ 이상이므로 비용 $3$ 은 정수 최적값의 두 배 이하이고, 정수 최적값을 구하지 않고도 이 비가 증명된다.

# 정의

## 완화와 적분성 간극

정수 계획(integer program) $\min\lbrace c^{\mathsf T}x : Ax \ge b,\ x \in \lbrace 0,1\rbrace^n\rbrace$ 의 **LP 완화(LP relaxation)** 는 마지막 조건을 $x \in \lbrack 0,1\rbrack^n$ 으로 바꾼 선형계획 문제다. 두 문제의 최적값을 $\mathrm{OPT}\_{IP}$ 와 $\mathrm{OPT}\_{LP}$ 로 쓴다. 직관의 $K_3$ 에서 $\mathrm{OPT}\_{IP}=2$, $\mathrm{OPT}\_{LP}=1.5$ 다.

최소화 문제의 **적분성 간극(integrality gap)** 은 문제의 모든 사례 $I$ 에 대한 최악의 비다.

$$
\mathrm{gap}=\sup_{I}\frac{\mathrm{OPT}\_{IP}(I)}{\mathrm{OPT}\_{LP}(I)}
$$

최대화 문제에서는 분자와 분모를 뒤집는다. $K_3$ 한 사례의 비는 $2/1.5=4/3$ 이므로 정점 덮개 완화의 간극은 $4/3$ 이상이다.

## 반올림 기법

반올림 기법은 LP 완화의 분수해를 정수해로 바꾸는 규칙이고, 주로 쓰는 것은 다음과 같다. 직관에서 쓴 것은 $\tau=1/2$ 인 임계값 반올림(threshold rounding)이다.

| 기법 | 방법 | 전형적 용도 |
|---|---|---|
| 임계값 반올림 | $x^\ast\_i \ge \tau$ 면 1, 아니면 0 | 정점 덮개, 반정수해가 나오는 문제 |
| 무작위 반올림(randomized rounding) | 확률 $x^\ast\_i$ 로 독립적으로 1 | [집합 덮개](set-cover.md), 제약이 많은 문제 |
| 규모 조정 무작위 반올림 | 확률 $\min(1, t\thinspace x^\ast\_i)$ 로 $t$ 배 부풀려 뽑기 | 실패 확률을 낮춰야 할 때 |
| 반복 반올림(iterative rounding) | 1 에 가까운 변수를 고정하고 LP 를 다시 풀기 | 신장트리, 일반화 배정 |
| 필터링(filtering) | 임계값으로 후보를 걸러낸 뒤 배정 | [시설 배치 문제](facility-location.md), 군집 |

## 정점 덮개의 완화

가중치 $w_v$ 가 있는 정점 덮개 문제의 LP 완화는 다음과 같다. 직관의 $K_3$ 는 모든 $w_v=1$ 인 경우다.

$$
\min\ \sum_{v}w_vx_v\quad\text{s.t.}\quad x_u+x_v\ge1\ \ \forall(u,v)\in E,\qquad 0\le x_v\le1
$$

## 집합 덮개의 완화

원소 집합 $U$ 를 덮는 부분집합족 $\mathcal S$ 에서 비용이 최소인 덮개를 고르는 [집합 덮개 문제](set-cover.md)의 LP 완화는 다음과 같다.

$$
\min\ \sum_{S\in\mathcal S}c_Sx_S\quad\text{s.t.}\quad \sum_{S\ni e}x_S\ge1\ \ \forall e\in U,\qquad 0\le x_S\le1
$$

$U=\lbrace 1,2,3\rbrace$ 와 비용 $1$ 인 집합 $\lbrace 1,2\rbrace,\lbrace 2,3\rbrace,\lbrace 1,3\rbrace$ 에서 세 변수가 모두 $1/2$ 인 해가 비용 $1.5$ 로 LP 최적이고, 정수 최적값은 $2$ 다.

# 성질

## 정점 덮개의 2-근사

LP 최적해 $x^\ast$ 에서 $x^\ast\_v \ge 1/2$ 인 정점을 모두 고른다.

각 간선 $(u,v)$ 에 대해 $x^\ast\_u + x^\ast\_v \ge 1$ 이므로 둘 중 하나가 $1/2$ 이상이고 그 정점이 선택되어 실현가능하다. 선택된 각 정점에서 $1 \le 2x^\ast_v$ 이므로 비용은 두 배 이내다.

$$
\sum_{v:\thinspace x^\ast\_v\ge1/2}w_v\ \le\ 2\sum_vw_vx^\ast\_v\ =\ 2\thinspace\mathrm{OPT}\_{LP}\ \le\ 2\thinspace\mathrm{OPT}\_{IP}
$$

이 논증은 가중치가 있어도 그대로 성립한다. 극대 [매칭](matchings.md)의 끝점을 모두 고르는 조합적 2-근사는 가중치가 있으면 근사비를 보장하지 못한다.

## 정점 덮개의 간극 2

완전그래프 $K_n$ 에서 모든 $x_v = 1/2$ 가 가능해이므로 $\mathrm{OPT}\_{LP} = n/2$ 다. 정수해는 두 정점을 남기면 그 사이 간선이 덮이지 않으므로 $n-1$ 개 미만을 고를 수 없다.

$$
\frac{\mathrm{OPT}\_{IP}}{\mathrm{OPT}\_{LP}}=\frac{n-1}{n/2}=2-\frac2n\ \xrightarrow{\ n\to\infty\ }\ 2
$$

따라서 이 완화의 최적값과 비교하는 방법으로는 $(2-\epsilon)$-근사를 증명할 수 없다. S. Khot 와 O. Regev 는 유일 게임 추측(unique games conjecture) 아래에서 정점 덮개의 다항시간 $(2-\epsilon)$-근사가 없음을 증명했다[^1].

## 반정수성

정점 덮개 LP 의 극점은 모든 좌표가 $0$ , $1/2$ , $1$ 중 하나이고, 이 반정수성(half-integrality)은 G. L. Nemhauser 와 L. E. Trotter 가 증명했다[^2]. 그래서 정점 덮개 LP 는 모든 좌표가 $0$ , $1/2$ , $1$ 중 하나인 최적해를 항상 가진다. 임의의 최적해에서 $1/2$ 보다 작은 좌표와 큰 좌표를 각각 $\epsilon$ 만큼 움직이면 목적값을 나쁘게 하지 않으면서 반정수 극점으로 옮길 수 있다. 임계값 반올림의 $\tau=1/2$ 는 이 반정수 좌표에서 정해진다.

## 집합 덮개의 O(log n) 근사

각 집합 $S$ 를 확률 $x^\ast\_S$ 로 독립적으로 고르면 비용의 기댓값이 $\mathrm{OPT}\_{LP}$ 다. 제약 $\sum_{S\ni e}x^\ast\_S \ge 1$ 에서 원소 $e$ 가 덮이지 않을 확률은 다음으로 막힌다.

$$
\prod_{S\ni e}(1-x^\ast\_S)\ \le\ \exp\Big(-\sum_{S\ni e}x^\ast\_S\Big)\ \le\ e^{-1}
$$

$t = \Theta(\log n)$ 번 독립 반복해 합집합을 취하면 실패 확률이 $n^{-\Theta(1)}$ 로 떨어지고 비용의 기댓값은 $t \cdot \mathrm{OPT}\_{LP}$ 가 된다. 확률 $\min(1, t\thinspace x^\ast_S)$ 로 한 번에 뽑아도 같다. 비용이 $t$ 배로 늘고 실패 확률이 $e^{-t}$ 로 줄어드는 교환이 이 기법의 요지다.

## 간극이 1 인 경우

제약행렬이 완전 단모듈러(totally unimodular)이면 정수 $b$ 에 대해 LP 의 모든 극점이 정수점이라 간극이 1 이고 반올림이 필요 없다. 이분그래프의 정점 덮개와 매칭, [네트워크 흐름](network-flow.md)이 이 경우이고, 이때 LP 쌍대성에서 König 정리(Kőnig's theorem)와 최대 유량 최소 절단 정리(max-flow min-cut theorem)가 나온다. LP 완화가 근사 기법이 되는 것은 간극이 1 을 넘을 때다.

## 쌍대와의 관계

LP 쌍대해 하나가 최적값의 하한을 증명한다. 정점 덮개 LP 의 쌍대는 분수 매칭(fractional matching) LP 이고, 약쌍대성(weak duality)으로 어떤 분수 매칭의 크기도 어떤 덮개의 비용 이하다. 쌍대해를 키워 가며 원시해를 함께 만드는 것이 [원시-쌍대 방법](primal-dual-method.md)이고, LP 를 풀지 않고 조합적으로 같은 근사비를 얻는다.

원시-쌍대 방법은 [Lagrange 쌍대성](lagrange-duality.md)의 상보 여유 조건(complementary slackness)을 완화해 쓴다. 원시해에서 $1$ 로 고른 변수에 대응하는 쌍대 제약을 등호로 유지하면 근사비가 나온다.

## 완화의 강화

간극을 줄이려면 정수해를 모두 남기는 제약을 더해 가능 영역을 좁힌다. 절단 평면(cutting plane), 홀수 집합 제약(odd set constraint), 리프팅 계층(lift-and-project hierarchy)이 그런 제약이다. 선형 제약 대신 [반정부호 계획법](semidefinite-programming.md)의 제약을 쓰기도 하고, 벡터를 무작위 초평면으로 자르는 Goemans–Williamson 의 최대 절단(max-cut) 0.878-근사가 그 예다.

# 활용

- 설계 절차. 정수 계획으로 쓰고, 완화를 풀고, 반올림하고, 반올림된 해의 실현가능성과 $\mathrm{OPT}\_{LP}$ 대비 비용을 증명한다. 간극의 하한을 나쁜 사례로 먼저 찾으면 달성 불가능한 목표를 배제할 수 있다.
- 실무. 인력 배치, 차량 경로, 시설 배치, 광고 배분이 정수 계획으로 쓰인다. 완화해는 분기한정법(branch and bound)의 가지치기 기준과 휴리스틱의 초기해로 쓰이고, 완화해와 얻은 해의 비가 그 사례에서의 품질 증명서가 된다.
- 분수해가 답인 경우. 자원을 실제로 나눌 수 있으면 반올림이 불필요하고, 확률적 배정으로 해석하면 분수해가 무작위 전략이다.

[^1]: S. Khot, O. Regev, "Vertex cover might be hard to approximate to within 2−ε", Journal of Computer and System Sciences 74 (2008), 335–349.
[^2]: G. L. Nemhauser, L. E. Trotter, "Vertex packings: structural properties and algorithms", Mathematical Programming 8 (1975), 232–248.

# 연관 문서

## 선수지식

- [근사 알고리즘](approximation-algorithms.md)
- [선형계획법](linear-programming.md)

## 더 알아보기

- [원시-쌍대 방법](primal-dual-method.md)
- [반정부호 계획법](semidefinite-programming.md)

#algorithms #optimization #complexity
