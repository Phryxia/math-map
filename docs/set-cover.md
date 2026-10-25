# 집합 덮개 문제

# 개요

**집합 덮개 문제(set cover problem)** 는 전체집합 $U$ 와 그 부분집합들의 모임 $\mathcal S$ 가 주어질 때, 합집합이 $U$ 가 되는 $\mathcal S$ 의 부분모임 가운데 집합 수가 가장 적은 것을 찾는 문제다. [NP-완전성](np-completeness.md)(nondeterministic polynomial time)이 증명된 문제이고, 남은 원소를 가장 많이 덮는 집합을 되풀이해 고르는 탐욕 알고리즘이 $\ln n$ 배 이내의 해를 준다. [근사 알고리즘](approximation-algorithms.md)에서 이 $\ln n$ 은 다항시간으로 개선되지 않는 근사비의 표준 예다.

# 직관

원소가 $1$ 부터 $6$ 까지 여섯 개이고 집합이 셋 있다.

$$
A=\lbrace 1,2,3\rbrace ,\qquad B=\lbrace 4,5,6\rbrace ,\qquad C=\lbrace 1,2,4,5\rbrace
$$

가장 많이 덮는 집합부터 고른다. 처음에는 원소 넷을 덮는 $C$ 를 고르고, $3$ 과 $6$ 이 남는다. $A$ 와 $B$ 가 남은 원소를 하나씩 덮으므로 둘 다 더 골라야 하고, 모두 세 집합을 쓴다. $A$ 와 $B$ 두 집합만으로도 여섯 원소가 다 덮이므로 이 방법은 최솟값을 놓쳤다.

놓친 정도에는 한계가 있다. $C$ 를 고른 뒤 남은 원소 $3$, $6$ 은 최적해의 두 집합 $A$, $B$ 가 덮는다. 두 집합이 두 원소를 덮으니 그 가운데 하나는 남은 원소의 절반 이상을 덮는다. 최적해가 $k$ 개 집합을 쓰면 어느 단계에서나 남은 원소의 $1/k$ 이상을 덮는 집합이 있고, 탐욕 선택은 적어도 그만큼 덮는다. 남은 원소 수가 단계마다 $1-1/k$ 배 이하로 줄어드므로 약 $k\ln n$ 단계 안에 모두 덮인다.

# 정의

**집합 덮개(set cover)** 는 $\bigcup_{S\in\mathcal C}S=U$ 를 만족하는 부분모임 $\mathcal C\subseteq\mathcal S$ 다. 원소 수를 $n=\lvert U\rvert$, 집합 수를 $m=\lvert\mathcal S\rvert$ 로 쓴다. 집합마다 비용 $c_S\ge 0$ 이 붙은 가중 판본은 다음 정수계획이다.

$$
\min\ \sum_{S\in\mathcal S}c_Sx_S\quad\text{s.t.}\quad\sum_{S\ni e}x_S\ge 1\ \ \forall e\in U,\qquad x_S\in\lbrace 0,1\rbrace
$$

- 판정 판본은 "집합 $k$ 개 이하로 된 덮개가 있는가" 이고, Karp 의 21 개 NP-완전 문제 가운데 하나다[^1].
- 원소마다 그 원소를 포함하는 집합의 수를 빈도라 하고, 그 최댓값을 $f$ 로 쓴다. 집합 크기의 최댓값은 $d$ 로 쓴다.
- **적중 집합 문제(hitting set problem)** 는 모든 $S\in\mathcal S$ 와 만나는 가장 작은 $H\subseteq U$ 를 찾는 문제다. 원소와 집합의 역할을 바꾸면 집합 덮개 문제와 같다.
- **최대 덮기 문제(maximum coverage problem)** 는 집합 수를 $k$ 로 고정하고 덮이는 원소 수를 최대화하는 문제다.

정점 덮개는 $f=2$ 인 경우다. 원소를 그래프의 간선으로, 집합을 각 정점에 붙은 간선들의 모임으로 두면 간선마다 두 끝점의 집합에만 들어간다.

# 성질

## 탐욕 알고리즘

남은 원소 집합을 $R$ 이라 하고, 새로 덮는 원소 하나당 비용 $c_S/\lvert S\cap R\rvert$ 이 가장 작은 집합을 고른다. 비용이 모두 $1$ 이면 남은 원소를 가장 많이 덮는 집합을 고르는 것과 같다.

```javascript
function greedySetCover(universe, sets, cost) {
  const remaining = new Set(universe);
  const chosen = [];
  while (remaining.size > 0) {
    let best = null, bestRatio = Infinity;
    for (const S of sets) {
      const gain = [...S].filter((e) => remaining.has(e)).length;
      if (gain > 0 && cost(S) / gain < bestRatio) { best = S; bestRatio = cost(S) / gain; }
    }
    chosen.push(best);
    for (const e of best) remaining.delete(e);
  }
  return chosen;
}
```

## 조화수 근사비

정리(Johnson, Lovász, Chvátal). 탐욕 알고리즘이 고른 덮개의 비용은 $H_n\cdot\mathrm{OPT}$ 이하다. 여기서 $H_n=1+1/2+\cdots+1/n\le 1+\ln n$ 이다[^2][^3][^4].

증명의 요지. 집합 $S$ 를 고를 때 새로 덮이는 원소마다 가격 $c_S/\lvert S\cap R\rvert$ 를 매기면 가격의 합이 탐욕 해의 비용이다. 원소를 덮인 순서로 $e_1,\dots,e_n$ 이라 하면, $e_j$ 가 덮이기 직전에 남은 원소는 $n-j+1$ 개 이상이다. 최적 덮개의 집합들이 이 원소들을 총비용 $\mathrm{OPT}$ 로 덮으므로, 그 가운데 원소 하나당 비용이 $\mathrm{OPT}/(n-j+1)$ 이하인 집합이 있다. 탐욕 선택의 비율은 그 이하이므로

$$
\sum_{j=1}^{n}\mathrm{price}(e_j)\le\sum_{j=1}^{n}\frac{\mathrm{OPT}}{n-j+1}=H_n\cdot\mathrm{OPT}
$$

이다. 같은 논증을 집합 하나 안에서 돌리면 $n$ 자리에 $d$ 가 들어가 근사비 $H_d$ 가 나오고, 비교 대상을 선형 완화의 최솟값으로 바꿔도 성립한다.

## 탐욕 알고리즘의 하한 예

직관 절의 예를 키운다. 원소를 두 줄로 놓고 열을 크기 $1,2,4,\dots,2^{k-1}$ 인 묶음으로 나눈다. 위 줄과 아래 줄이 각각 집합이고, 묶음 $i$ 의 두 줄 원소 $2^{i+1}$ 개가 또 하나의 집합이다. 한 줄의 원소는 $2^k-1$ 개이고 가장 큰 묶음 집합의 원소는 $2^k$ 개라서 탐욕 알고리즘은 묶음 집합을 큰 것부터 $k$ 개 고른다. 최적해는 두 줄 두 개이고 $n=2(2^k-1)$ 이므로 비율은 $k/2\approx\frac12\log_2 n$ 이다.

## 선형 완화와 간극

정의 절의 정수계획에서 $x_S\in\lbrace 0,1\rbrace$ 을 $0\le x_S\le 1$ 로 바꾸면 [선형계획법](linear-programming.md)(linear programming, LP)의 문제가 된다. 그 최솟값 $\mathrm{OPT}\_{LP}$ 와 정수 최솟값의 비는 $\Theta(\log n)$ 까지 벌어진다.

- 간극의 예. $U$ 를 $\mathbb F\_2^k$ 의 영 아닌 벡터 $2^k-1$ 개로 두고, 영 아닌 $y$ 마다 $S\_y=\lbrace x:\langle x,y\rangle=1\rbrace$ 로 둔다. 원소마다 $2^{k-1}$ 개 집합에 들어가므로 모든 $x\_S=2^{1-k}$ 가 가능해이고 $\mathrm{OPT}\_{LP}\le(2^k-1)2^{1-k}\lt 2$ 다. 반면 $y$ 를 $k-1$ 개만 고르면 그 모두와 직교하는 영 아닌 $x$ 가 있어 덮이지 않으므로 정수해는 $k$ 개 이상이다.
- 무작위 반올림. 각 집합을 확률 $x^\ast\_S$ 로 고르는 것을 $O(\log n)$ 번 되풀이하면 $O(\log n)$ 근사가 나온다. 계산은 [LP 반올림](lp-rounding.md)에 있다.
- 빈도 근사. 원소마다 $\sum_{S\ni e}x^\ast\_S\ge 1$ 이고 항이 $f$ 개 이하이므로 어느 항은 $1/f$ 이상이다. $x^\ast\_S\ge 1/f$ 인 집합을 모두 고르면 덮개가 되고 비용은 $f\cdot\mathrm{OPT}\_{LP}$ 이하다. $f=2$ 이면 정점 덮개의 2-근사다.

## 근사 하한

정리(Feige). 임의의 $\varepsilon\gt 0$ 에 대해, 집합 덮개 문제를 $(1-\varepsilon)\ln n$ 배 이내로 근사하는 다항시간 알고리즘이 있으면 $\mathrm{NP}\subseteq\mathrm{DTIME}(n^{O(\log\log n)})$ 이다[^5].

Dinur 와 Steurer 는 같은 하한을 $\mathrm P\ne\mathrm{NP}$ 가정만으로 증명했다[^6]. 두 증명 모두 [PCP 정리](pcp-theorem.md)(probabilistically checkable proof)에서 출발하는 환원이다. 탐욕 알고리즘의 $H_n=\ln n+O(1)$ 과 합치면 집합 덮개의 다항시간 근사비는 $(1\pm o(1))\ln n$ 으로 정해진다.

## 최대 덮기

최대 덮기에서 덮이는 원소 수 $g(\mathcal C)=\lvert\bigcup_{S\in\mathcal C}S\rvert$ 는 단조 [부분모듈 함수](submodular-functions.md)다. 남은 원소를 가장 많이 덮는 집합을 $k$ 번 고르면 최댓값의 $1-1/e$ 배 이상을 덮고, Feige 는 이 비율도 다항시간으로 개선되지 않음을 같은 논문에서 증명했다[^5].

# 활용

- 정점 덮개. $f=2$ 인 집합 덮개이므로 빈도 근사가 [LP 반올림](lp-rounding.md)의 2-근사가 된다.
- [정수계획법](integer-programming.md)의 모형화. 집합 덮개는 0-1 변수와 덮임 제약 하나로 쓰이는 정수계획의 기본 꼴이고, 승무원 배정과 시설 배치가 이 꼴로 모형화된다.
- 기하적 집합 덮개. 집합들이 [VC 차원](vc-dimension.md)(Vapnik–Chervonenkis dimension)이 유한한 범위 공간을 이루면 $\varepsilon$-그물을 써서 $O(\log\mathrm{OPT})$ 근사가 나온다(Brönnimann–Goodrich).
- 부분모듈 덮개. 덮이는 원소 수를 일반 단조 부분모듈 함수로 바꾼 문제에서도 탐욕 알고리즘이 조화수 꼴의 근사비를 준다(Wolsey).

[^1]: R. M. Karp, "Reducibility among combinatorial problems", in *Complexity of Computer Computations* (1972), 85–103.
[^2]: D. S. Johnson, "Approximation algorithms for combinatorial problems", Journal of Computer and System Sciences 9 (1974), 256–278.
[^3]: L. Lovász, "On the ratio of optimal integral and fractional covers", Discrete Mathematics 13 (1975), 383–390.
[^4]: V. Chvátal, "A greedy heuristic for the set-covering problem", Mathematics of Operations Research 4 (1979), 233–235.
[^5]: U. Feige, "A threshold of ln n for approximating set cover", Journal of the ACM 45 (1998), 634–652.
[^6]: I. Dinur, D. Steurer, "Analytical approach to parallel repetition", Proceedings of the 46th ACM Symposium on Theory of Computing (2014), 624–633.

# 연관 문서

## 선수지식

- [근사 알고리즘](approximation-algorithms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #complexity #combinatorics #optimization
