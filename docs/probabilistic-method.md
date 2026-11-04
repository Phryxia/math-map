# 확률적 방법

# 개요

**확률적 방법(probabilistic method)** 은 어떤 성질을 가진 대상이 있음을, 대상을 무작위로 뽑았을 때 그 성질을 가질 확률이 양수임을 계산해 증명하는 방법이다. 여섯 사람 가운데에는 서로 다 아는 세 명이나 서로 다 모르는 세 명이 언제나 있다. 사람 수와 무리의 크기 $k$ 를 늘려, 서로 다 아는 $k$ 명도 서로 다 모르는 $k$ 명도 없게 친분을 정할 수 있는지 물으면 따질 친분 관계가 너무 많다. 확률적 방법은 친분을 동전 던지기로 정했을 때 그런 $k$ 명이 생길 확률의 합이 $1$ 보다 작음을 보여, 그런 $k$ 명이 없는 친분 관계가 있음을 증명한다.

# 직관

$100$ 명 사이의 친분을 정해, 서로 다 아는 $10$ 명도 서로 다 모르는 $10$ 명도 없게 할 수 있는지 묻는다. 두 사람의 쌍은 $4950$ 개이므로 친분을 정하는 방법은 $2^{4950}$ 가지이고, 하나씩 따질 수 없다.

두 사람마다 동전을 던져 앞면이면 아는 사이, 뒷면이면 모르는 사이로 정한다. 정해 둔 $10$ 명이 서로 다 알 확률은 $45$ 쌍이 모두 앞면일 확률 $2^{-45}$ 이고, 서로 다 모를 확률도 같아 합이 $2^{-44}$ 다. $10$ 명 무리는 $\binom{100}{10}\approx 1.73\times 10^{13}$ 개이므로, 어느 무리 하나라도 이렇게 될 확률은 많아야 $1.73\times 10^{13}\times 2^{-44}\approx 0.98$ 이다.

이 확률이 $1$ 보다 작으므로, 동전 던지기의 결과 가운데 그런 $10$ 명이 하나도 없는 결과가 있다. 그 친분 관계가 무엇인지는 이 계산에서 나오지 않는다.

# 정의

## 기본 원리

유한 [확률 공간](probability.md) $(\Omega,\Pr)$ 과 사건 $A\subseteq\Omega$ 에 대해

$$
\Pr\lbrack A\rbrack\gt 0\ \Longrightarrow\ A\ne\varnothing
$$

이다. 조합론에서 $\Omega$ 는 보통 대상들의 유한 집합(모든 그래프, 모든 색칠, 모든 부분집합)이고 $A$ 는 원하는 성질을 만족하는 것들의 집합이다. 직관 절에서 $\Omega$ 는 $100$ 명의 친분 관계 $2^{4950}$ 개이고 $A$ 는 그런 $10$ 명이 없는 친분 관계의 집합이다.

## 합집합 상한

원하는 성질이 깨지는 방식을 나쁜 사건 $A_1,\dots,A_m$ 으로 나열했을 때

$$
\Pr\Bigl\lbrack\bigcup_i A_i\Bigr\rbrack\le\sum_i\Pr\lbrack A_i\rbrack
$$

를 **합집합 상한(union bound)** 이라 한다. 우변이 $1$ 보다 작으면 나쁜 사건이 하나도 일어나지 않는 결과가 존재한다. 직관 절에서 $A_i$ 는 $i$ 번째 $10$ 명 무리가 서로 다 알거나 서로 다 모르는 사건이고, 우변이 $0.98$ 이다.

## 기댓값 논법

[확률변수](random-variables.md) $X:\Omega\to\mathbb R$ 에 대해

$$
\exists\omega\in\Omega:X(\omega)\ge\mathbb E\lbrack X\rbrack,\qquad\exists\omega'\in\Omega:X(\omega')\le\mathbb E\lbrack X\rbrack
$$

가 성립한다는 논법을 **기댓값 논법(expectation argument)** 이라 한다. 기댓값의 선형성

$$
\mathbb E\Bigl\lbrack\sum_{i=1}^nX_i\Bigr\rbrack=\sum_{i=1}^n\mathbb E\lbrack X_i\rbrack
$$

는 $X_i$ 들의 독립성을 요구하지 않는다. 직관 절에서 $X$ 를 서로 다 알거나 서로 다 모르는 $10$ 명 무리의 개수로 두면, 무리마다 확률 $2^{-44}$ 로 $1$ 인 지표변수(indicator variable)의 합이므로 $\mathbb E\lbrack X\rbrack\approx 0.98$ 이고, $X\le 0.98$ 곧 $X=0$ 인 친분 관계가 있다.

## 무작위 그래프

$G(n,p)$ 는 정점이 $n$ 개이고 각 정점 쌍이 서로 독립적으로 확률 $p$ 로 간선이 되는 무작위 [그래프](graphs.md) 모형이다. $p=1/2$ 는 $n$ 개 정점 위의 모든 라벨 그래프에서 균등하게 하나를 뽑는 것과 같다. 직관 절의 동전 던지기는 아는 사이를 간선으로 둔 $G(100,1/2)$ 이다.

## 의존성 그래프

사건들 $A_1,\dots,A_m$ 에 대한 **의존성 그래프(dependency graph)** 는 정점이 사건이고, 각 $A_i$ 가 자신과 인접하지 않은 사건들의 모임 전체와 서로 독립이 되도록 만든 그래프다. 직관 절의 사건들에서는 두 무리가 사람을 두 명 이상 공유할 때, 곧 같은 쌍을 공유할 때 두 사건을 잇는다.

# 성질

## Erdős 의 Ramsey 하한

Ramsey 수(Ramsey number) $R(k,k)$ 는 $K_n$ 의 간선을 어떻게 두 색으로 칠해도 크기 $k$ 의 단색 클리크(clique)가 생기는 최소의 $n$ 이다. [Ramsey 이론](ramsey-theory.md)의 이 수에 대해 Erdős 가 1947 년에 다음을 증명했다[^1]. $k\ge 3$ 이고

$$
\binom nk2^{1-\binom k2}\lt 1
$$

이면 $R(k,k)\gt n$ 이다. 따라서

$$
R(k,k)\gt(1+o(1))\frac{k}{e\sqrt2}\thinspace 2^{k/2}
$$

증명의 요지. $K_n$ 의 각 간선을 독립적으로 확률 $1/2$ 로 빨강 또는 파랑으로 칠한다. 고정된 $k$ 개 정점 집합 $S$ 가 단색 클리크가 될 확률은 $2\cdot 2^{-\binom k2}=2^{1-\binom k2}$ 이다. 그런 $S$ 는 $\binom nk$ 개이므로 합집합 상한으로 단색 클리크가 하나라도 생길 확률은 $\binom nk2^{1-\binom k2}$ 이하다. $\binom nk\le n^k/k!$ 와 Stirling 근사를 쓰면 $n=\lfloor 2^{k/2}\rfloor$ 근처에서 조건이 성립한다. 직관 절은 $k=10$, $n=100$ 인 경우다.

증명은 그래프를 하나도 명시하지 않는다. 상한은 $R(k,k)\le 4^k$ 이고, 2023 년에 Campos, Griffiths, Morris, Sahasrabudhe 가 어떤 $\varepsilon\gt 0$ 에 대해 $(4-\varepsilon)^k$ 로 줄였다[^3].

## 최대 절단

간선이 $m$ 개인 모든 그래프는 크기가 $m/2$ 이상인 절단(cut)을 가진다.

증명의 요지. 각 정점을 독립적으로 확률 $1/2$ 로 $S$ 또는 $T$ 에 넣는다. 간선 $e=uv$ 에 대해 지표변수 $X_e$ 를 $u$ 와 $v$ 가 다른 쪽에 있을 때 $1$ 로 두면 $\mathbb E\lbrack X_e\rbrack=1/2$ 다. 절단 크기 $X=\sum_eX_e$ 이고 선형성으로 $\mathbb E\lbrack X\rbrack=m/2$ 다. 따라서 $X\ge m/2$ 인 분할이 존재한다.

이 논증이 그대로 $1/2$ [근사 알고리즘](approximation-algorithms.md)이다. 최대 절단은 [네트워크 흐름](network-flow.md)의 최소 절단과 달리 NP(nondeterministic polynomial time)-난해이며([NP-완전성과 Cook–Levin 정리](np-completeness.md)), 준정부호 계획법(semidefinite programming)으로 근사비 $0.878$ 이 얻어진다.

## 토너먼트

토너먼트(tournament)는 완전 그래프의 각 간선에 방향을 준 것이다. 토너먼트가 성질 $S_k$ 를 가진다는 것은, 임의의 $k$ 명 선수 집합에 대해 그들 모두를 이긴 선수가 존재한다는 뜻이다. Erdős 는 $\binom nk(1-2^{-k})^{n-k}\lt 1$ 이면 $S_k$ 를 만족하는 $n$ 명 토너먼트가 존재함을 증명했다.

증명의 요지. 각 경기 결과를 독립적으로 균등하게 정한다. 고정된 $k$ 명 집합 $K$ 에 대해 특정한 다른 선수가 $K$ 전체를 이길 확률은 $2^{-k}$ 이고, 남은 $n-k$ 명이 모두 실패할 확률은 $(1-2^{-k})^{n-k}$ 다. 합집합 상한을 $K$ 에 대해 적용한다. $n$ 이 $k^22^k$ 정도면 조건이 만족된다.

## 변경 논법과 독립집합

**변경 논법(alteration method)** 은 무작위로 뽑은 대상에서 나쁜 부분을 잘라내 원하는 대상을 얻는 논법이다. 정점이 $n$ 개, 간선이 $m\ge n/2$ 개인 그래프는 크기가 $n^2/(4m)$ 이상인 독립집합을 가진다. 평균 차수 $d=2m/n$ 으로는 $n/(2d)$ 이상이다.

증명의 요지. 각 정점을 독립적으로 확률 $p$ 로 뽑아 집합 $S$ 를 만든다. $\mathbb E\lbrack\lvert S\rvert\rbrack=pn$ 이고, 양 끝이 모두 $S$ 에 든 간선 수의 기댓값은 $p^2m$ 이다. 그런 간선마다 끝점 하나를 지우면 남은 집합 $S'$ 은 독립집합이고 $\mathbb E\lbrack\lvert S'\rvert\rbrack\ge pn-p^2m$ 이다. $p=n/(2m)$ 에서 우변이 $n^2/(4m)$ 이다.

정점을 무작위 순서로 늘어놓고 앞선 이웃이 없는 정점을 고르는 논법으로는 더 강한 하한 $n/(d+1)$ 이 나온다. 같은 변경 논법으로 짧은 순환이 없고 독립수도 작은 그래프, 곧 채색수가 크면서 둘레가 긴 그래프의 존재가 증명된다([그래프 색칠](graph-coloring.md)).

## Lovász 국소 보조정리

나쁜 사건이 많아 $\sum\Pr\lbrack A_i\rbrack\ge 1$ 이 되더라도, 각 사건이 소수의 다른 사건에만 의존하면 전부 피할 수 있다. Lovász 국소 보조정리(Lovász local lemma, LLL)의 대칭형은 Erdős 와 Lovász 가 1975 년에 증명했다. 사건 $A_1,\dots,A_m$ 이 각각 $\Pr\lbrack A_i\rbrack\le p$ 를 만족하고 의존성 그래프의 최대차수가 $d$ 이며

$$
e\thinspace p\thinspace(d+1)\le 1
$$

이면

$$
\Pr\Bigl\lbrack\bigcap_{i=1}^m\overline{A_i}\Bigr\rbrack\gt 0
$$

이다. 여기서 $e$ 는 자연로그의 밑이다.

비대칭형. [실수](real-numbers.md) $x_i\in(0,1)$ 들이 있어 각 $i$ 에 대해

$$
\Pr\lbrack A_i\rbrack\le x_i\prod_{j\sim i}(1-x_j)
$$

이면 같은 결론이 성립한다. 증명은 $\Pr\lbrack A_i\mid\bigcap\_{j\in J}\overline{A_j}\rbrack\le x_i$ 를 $\vert J\vert$ 에 대한 귀납으로 보이는 것이다.

LLL 은 다음에 쓰인다.

- 충족 가능성. 각 절이 정확히 $k$ 개의 리터럴을 갖고, 각 절과 변수를 공유하는 다른 절이 $2^k/e-1$ 개 이하인 CNF(conjunctive normal form) 식은 충족 가능하다. 변수를 독립적으로 균등하게 배정하면 절 하나가 거짓일 확률이 $2^{-k}$ 이다.
- 초그래프 2-색칠. 모든 간선의 크기가 $k$ 이고 각 간선이 다른 간선과 $2^{k-1}/e-1$ 개 이하로 만나는 $k$ 균등 초그래프는 단색 간선이 없게 두 색으로 칠해진다.
- Ramsey 하한. LLL 을 쓰면 $R(k,k)\gt(1+o(1))\frac{\sqrt2}{e}\thinspace k2^{k/2}$ 로 상수 인자가 $2$ 배가 된다.

LLL 은 해의 존재만 준다. [Moser–Tardos 알고리즘](moser-tardos-algorithm.md)[^2]은 같은 조건 아래에서 기대 다항시간에 해를 찾는다.

## 탈무작위화

확률적 방법의 결론은 존재만 주장하고 대상을 지목하지 않는다. 대상을 찾는 방법은 셋이다.

1. 반복 시행. 성질을 만족할 확률이 $1-o(1)$ 이면 무작위 시행 몇 번으로 높은 확률의 해를 얻는다. 확률이 $1-o(1)$ 임을 보이는 데 [집중부등식](concentration-inequalities.md)을 쓴다.
2. 조건부 기댓값 방법(method of conditional expectations). 무작위 선택을 하나씩 결정하되, 매번 [조건부 기댓값](conditional-expectation.md)을 떨어뜨리지 않는 쪽을 고른다. 최대 절단에서는 정점을 순서대로 보면서 이미 놓인 이웃 가운데 반대편이 더 많아지는 쪽에 넣으면 $m/2$ 이상의 절단을 결정적으로 얻는다. 조건부 기댓값을 다항시간에 계산할 수 있어야 한다.
3. 표본 공간 축소. 완전 독립 대신 $k$ 겹 독립($k$-wise independent) 확률변수를 쓰면 표본 공간이 다항 크기로 줄어 전수 탐색이 가능하다. 증명이 낮은 차수의 적률만 쓸 때 통한다.

[Expander 그래프](expander-graphs.md)는 무작위 그래프가 높은 확률로 갖는 성질을 명시적 구성으로 얻은 예다. Margulis 와 Lubotzky–Phillips–Sarnak 의 구성이 그것이다.

# 활용

- 무작위 알고리즘. 무작위 quicksort, [선형계획법](linear-programming.md) 완화의 해를 정수해로 바꾸는 무작위 반올림(randomized rounding), 해시 기반 자료구조가 무작위 선택의 기댓값으로 성능을 보장한다.
- 극값 그래프 이론. Ramsey 수, 독립수, 초그래프 색칠의 하한이 위의 논법으로 얻어진다. [Turán 정리](turan-theorem.md)는 독립수의 하한 $n/(d+1)$ 과 같은 꼴의 결과다.
- 부호 이론. Shannon 의 [채널 부호화 정리](channel-coding.md)는 무작위 부호의 평균 오류 확률이 용량 아래에서 $0$ 으로 감을 보여 좋은 부호의 존재를 증명한다. 용량은 [Shannon 엔트로피](entropy.md)로 계산한다.
- 집중. 기댓값만으로 부족할 때 Chernoff, Azuma, Talagrand 의 집중부등식이 무작위 변수를 기댓값 근처에 묶는다. Azuma 부등식(Azuma's inequality)은 [Martingale](martingales.md) 의 차분이 유계일 때 쓴다.
- 기하. 무작위 단체복합체, 무작위 다면체, 고차원 구면 위의 [측도](measure.md) 집중이 같은 논법을 쓴다.

[^1]: P. Erdős, "Some remarks on the theory of graphs", Bulletin of the American Mathematical Society 53 (1947), https://www.ams.org/journals/bull/1947-53-04/S0002-9904-1947-08785-1/
[^2]: R. A. Moser, G. Tardos, "A constructive proof of the general Lovász Local Lemma", Journal of the ACM 57 (2010), https://doi.org/10.1145/1667053.1667060
[^3]: M. Campos, S. Griffiths, R. Morris, J. Sahasrabudhe, "An exponential improvement for diagonal Ramsey", arXiv:2303.09521 (2023).

# 연관 문서

## 선수지식

- [Ramsey 이론](ramsey-theory.md)
- [유한 확률 공간](probability.md)

## 더 알아보기

- [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)
- [Moser–Tardos 알고리즘](moser-tardos-algorithm.md)
- [Erdős–Selfridge 정리](erdos-selfridge-theorem.md)

#combinatorics #probability
