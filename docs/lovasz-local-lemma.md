# Lovász 국소 보조정리

# 개요

**Lovász 국소 보조정리(Lovász local lemma, LLL)** 는 피해야 할 나쁜 사건이 아무리 많아도, 사건마다 일어날 확률이 작고 각 사건이 다른 소수의 사건하고만 얽혀 있으면 모두를 피할 확률이 양수라는 정리다. 원 위에 점 $n$ 개를 놓고 빨강과 파랑으로 칠할 때 이웃한 여섯 점이 모두 같은 색인 자리를 없애려 하면, 그런 자리가 생길 확률을 모두 더한 값은 $n$ 이 커지면 $1$ 을 넘는다. 확률을 더하는 셈으로는 칠하는 방법이 있다는 것을 보일 수 없다. 국소 보조정리는 한 자리가 공유하는 점이 있는 다른 자리의 수만 세어 $n$ 에 관계없이 칠하는 방법이 있다는 것을 보인다.

# 직관

원 위의 점 $n$ 개를 각각 독립으로 반반의 확률로 빨강이나 파랑으로 칠한다. 점 $i$ 부터 이어지는 여섯 점이 모두 같은 색인 사건을 $A_i$ 라 하면 $P(A_i) = 2 \cdot 2^{-6} = 1/32$ 이다. 사건이 $n$ 개이므로 확률의 합은 $n/32$ 이고, $n \ge 32$ 이면 합이 $1$ 이상이라 [확률적 방법](probabilistic-method.md)의 합집합 상한으로는 결론이 나오지 않는다.

$A_i$ 는 점 여섯 개의 색으로 정해지고, 이 점들을 하나라도 쓰는 다른 사건은 $A_{i-5}, \dots, A_{i+5}$ 가운데 $A_i$ 를 뺀 열 개다. 나머지 사건들은 $A_i$ 와 겹치는 점이 없어서 $A_i$ 가 일어나는지에 영향을 주지 않는다. 사건 하나가 얽힌 사건이 $10$ 개뿐이고 확률이 $1/32$ 이면, 국소 보조정리의 조건 $e \cdot (1/32) \cdot 11 \approx 0.93 \le 1$ 이 성립한다. 그래서 $n$ 이 얼마든 모든 $A_i$ 를 피하는 칠하기가 있다.

이 예는 두 색을 번갈아 칠하면 바로 답이 나온다. 같은 셈은 여섯 점짜리 자리들이 원 위에 불규칙하게 흩어져 있어도, 각 자리가 점을 공유하는 다른 자리가 $10$ 개 이하이기만 하면 그대로 성립한다.

# 정의

## 의존성 그래프

사건 $A_1, \dots, A_m$ 을 정점으로 하는 그래프 $D$ 가 다음을 만족하면 $D$ 를 **의존성 그래프(dependency graph)** 라 한다. 모든 $i$ 에서 $A_i$ 는 $D$ 에서 $A_i$ 와 이웃하지 않고 $A_i$ 자신도 아닌 사건들 전체와 상호 독립이다. $j$ 가 $D$ 에서 $i$ 의 이웃이면 $j \sim i$ 로 적는다.

직관 절에서는 $A_i$ 와 $A_j$ 가 점을 공유할 때 변을 그으면 의존성 그래프가 된다. 겹치는 점이 없는 사건들은 서로 다른 동전들로 정해지므로 상호 독립이다. 이 그래프의 최대 차수는 $10$ 이다.

# 성질

## 대칭형

$P(A_i) \le p$ 이고 의존성 그래프의 최대 차수가 $d$ 이며 $e\thinspace p\thinspace(d+1) \le 1$ 이면 다음이 성립한다[^1]. 여기서 $e$ 는 자연로그의 밑이다.

$$
P\Big(\bigcap_{i=1}^m\overline{A_i}\Big) \gt 0
$$

비대칭형에서 모든 $x_i$ 를 $1/(d+1)$ 로 두면 나온다. $(1 - 1/(d+1))^d \ge 1/e$ 이므로 $x_i\prod_{j \sim i}(1 - x_j) \ge 1/(e(d+1)) \ge p$ 다.

## 비대칭형

$x_i \in (0,1)$ 이 있어 모든 $i$ 에서 다음이 성립하면 $\bigcap\overline{A_i}$ 의 확률이 $\prod_i(1 - x_i)$ 이상이다[^2].

$$
P(A_i) \le x_i\prod_{j \sim i}(1 - x_j)
$$

증명의 요지. $i \notin S$ 인 모든 집합 $S$ 에서 $P(A_i \mid \bigcap_{j \in S}\overline{A_j}) \le x_i$ 를 $\lvert S\rvert$ 에 대한 귀납법으로 보인다. $S$ 를 $i$ 의 이웃인 $S_1$ 과 나머지 $S_2$ 로 나누면 조건부 확률은 다음 분수다.

$$
\frac{P\big(A_i \cap \bigcap_{j \in S_1}\overline{A_j} \mid \bigcap_{j \in S_2}\overline{A_j}\big)}{P\big(\bigcap_{j \in S_1}\overline{A_j} \mid \bigcap_{j \in S_2}\overline{A_j}\big)}
$$

분자는 $P(A_i \mid \bigcap_{S_2}\overline{A_j}) = P(A_i)$ 이하다. 분모는 $S_1$ 의 원소를 하나씩 조건에 넣으며 귀납 가정을 쓰면 $\prod_{j \in S_1}(1 - x_j)$ 이상이다. 마지막으로 $P(\bigcap\overline{A_i})$ 를 조건부 확률의 곱으로 쓰면 각 인수가 $1 - x_i$ 이상이다.

## 상수 e

조건 $e\thinspace p\thinspace(d+1) \le 1$ 의 상수 $e$ 는 $d \to \infty$ 에서 더 키울 수 없다. Shearer 는 최대 차수가 $d$ 인 모든 의존성 그래프에서 결론이 성립하게 하는 $p$ 의 최댓값이 $(d-1)^{d-1}/d^d$ 임을 보였고, 이 값에 $d$ 를 곱하면 $1/e$ 로 간다[^3].

## Janson 부등식과의 비교

[Janson 부등식](janson-inequality.md)은 단조 사건들이 하나도 일어나지 않을 확률의 상한을 준다. 국소 보조정리는 단조성 없이 그 확률이 양수라는 하한을 주고, 하한의 크기 $\prod(1 - x_i)$ 는 대개 지수적으로 작다.

# 활용

- 충족 가능성. 각 절이 정확히 $k$ 개의 리터럴을 갖고, 각 절과 변수를 공유하는 다른 절이 $2^k/e - 1$ 개 이하인 논리곱 표준형(conjunctive normal form) 식은 충족 가능하다. 변수를 독립적으로 균등하게 배정하면 절 하나가 거짓일 확률이 $2^{-k}$ 이다.
- 초그래프 2-색칠. 모든 간선의 크기가 $k$ 이고 각 간선이 다른 간선과 $2^{k-1}/e - 1$ 개 이하로 만나는 $k$ 균등 초그래프는 단색 간선이 없게 두 색으로 칠해진다. Erdős 와 Lovász 가 이 문제로 보조정리를 도입했다[^1].
- [Ramsey 이론](ramsey-theory.md)의 하한. 국소 보조정리를 쓰면 합집합 상한으로 얻는 하한보다 상수 인자가 $2$ 배인 대각 Ramsey 수의 하한이 다음과 같이 나온다.

  $$
  R(k,k) \gt (1 + o(1))\frac{\sqrt2}{e}\thinspace k\thinspace 2^{k/2}
  $$

- [Moser–Tardos 알고리즘](moser-tardos-algorithm.md). 국소 보조정리는 해의 존재만 준다. Moser–Tardos 알고리즘은 사건들이 독립인 변수들로 정해질 때 같은 조건 아래에서 기대 다항시간에 해를 찾는다[^4].

[^1]: P. Erdős, L. Lovász, "Problems and results on 3-chromatic hypergraphs and some related questions", Infinite and Finite Sets, Colloquia Mathematica Societatis János Bolyai 10 (1975), 609–627.
[^2]: N. Alon, J. H. Spencer, The Probabilistic Method, 4th ed., Wiley, 2016, 5장.
[^3]: J. B. Shearer, "On a problem of Spencer", Combinatorica 5 (1985), 241–245.
[^4]: R. A. Moser, G. Tardos, "A constructive proof of the general Lovász Local Lemma", Journal of the ACM 57 (2010), https://doi.org/10.1145/1667053.1667060

# 연관 문서

## 선수지식

- [확률적 방법](probabilistic-method.md)

## 더 알아보기

- [Moser–Tardos 알고리즘](moser-tardos-algorithm.md)

#combinatorics #probability #algorithms
