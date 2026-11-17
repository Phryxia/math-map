# Glauber 동역학

# 개요

**Glauber 동역학(Glauber dynamics)** 은 그래프의 정점마다 상태를 준 분포에서 표본을 얻으려고, 정점 하나를 골라 그 정점의 상태만 이웃을 보고 다시 뽑기를 되풀이하는 Markov 연쇄다. 자석의 원자 수천 개가 위나 아래를 향하는 [Ising 모형](ising-model.md)에서 배치 하나를 뽑으려 해도, 배치가 $2^{1000}$ 개를 넘어 확률을 전부 계산할 수 없다.

Glauber 동역학은 한 번에 한 정점만 보므로 한 걸음의 계산이 이웃 수만큼으로 끝난다. 걸음을 충분히 되풀이하면 배치의 분포가 목표 분포에 가까워지고, 몇 걸음이 필요한지는 이웃 사이의 영향이 얼마나 센지로 정해진다.

# 직관

정점 두 개 $1,2$ 를 간선으로 이은 그래프에서 상태 $\sigma_1,\sigma_2\in\lbrace +1,-1\rbrace$ 의 분포를 $\mu(\sigma)\propto e^{\beta\sigma_1\sigma_2}$ 로 둔다. $\beta\gt0$ 이면 두 정점이 같은 부호일 때 무게가 크다.

한 걸음에서 정점 하나를 같은 확률로 고르고, 다른 정점의 부호를 보고 고른 정점의 부호를 다시 뽑는다. 이웃이 $+1$ 이면 $+1$ 을 $e^\beta/(e^\beta+e^{-\beta})$ 의 확률로, $-1$ 을 $1/(1+e^{2\beta})$ 의 확률로 고른다.

$(+1,+1)$ 에서 출발하면 한 걸음에 섞인 상태로 갈 확률이 $1/(1+e^{2\beta})$ 이다. $\beta=1$ 이면 약 $0.119$ 이므로 평균 $8.4$ 걸음 동안 $(+1,+1)$ 에 머문다. $\beta=3$ 이면 약 $404$ 걸음 동안 머문다. 목표 분포에서 $(+1,+1)$ 과 $(-1,-1)$ 의 확률은 같은데, 연쇄가 한쪽에서 다른 쪽으로 건너가는 데 $e^{2\beta}$ 정도의 걸음이 든다.

# 정의

## 스핀계

유한 그래프 $G=(V,E)$ 와 유한집합 $S$ 에 대해 배치 $\sigma\in S^V$ 위의 확률분포 $\mu$ 를 **스핀계(spin system)** 라 한다. 정점 $v$ 밖의 배치 $\sigma\_{V\setminus v}$ 를 정했을 때 $\sigma_v$ 의 조건부 분포가 이웃의 상태에만 기대면 $\mu$ 를 국소적이라 한다. 직관 절의 분포, Ising 모형, [단단한 알갱이 모형](hard-core-model.md), [그래프 색칠](graph-coloring.md)의 균등분포가 국소적인 스핀계다.

## Glauber 동역학

$\mu$ 에 대한 **Glauber 동역학(Glauber dynamics)** 은 다음 걸음을 되풀이하는 $S^V$ 위의 [Markov 연쇄](markov-chains.md)다.

- 정점 $v$ 를 $V$ 에서 균등하게 고른다.
- $\sigma_v$ 를 $\mu(\sigma_v\in\cdot\mid\sigma\_{V\setminus v})$ 에서 다시 뽑고 나머지는 그대로 둔다.

이것은 [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)의 Gibbs 표본추출에서 좌표를 무작위로 고르는 판본이다. 열탕 동역학(heat-bath dynamics)이라고도 한다.

# 성질

## 가역성

Glauber 동역학은 $\mu$ 에 대해 가역이고 $\mu$ 가 불변분포다. 두 배치 $\sigma,\tau$ 가 정점 $v$ 에서만 다르면 전이확률은 $P(\sigma,\tau)=\frac1{\vert V\vert}\mu(\tau)/\mu(\sigma\_{V\setminus v})$ 이고, 여기서 $\mu(\sigma\_{V\setminus v})$ 는 $v$ 밖이 $\sigma$ 와 같은 배치들의 확률의 합이다. 그러므로 $\mu(\sigma)P(\sigma,\tau)=\mu(\tau)P(\tau,\sigma)$ 다. 모든 배치 사이를 한 정점씩 바꾸어 오갈 수 있으면 연쇄가 기약이고 분포가 $\mu$ 로 수렴한다.

## Dobrushin 조건과 빠른 혼합

정점 $w$ 가 $v$ 에 주는 **영향(influence)** $R\_{vw}$ 를, $w$ 에서만 다른 두 배치 $\sigma,\tau$ 에 대한 $v$ 의 조건부 분포 사이의 [전변동거리](total-variation-distance.md)의 최댓값으로 둔다. 한 정점이 받는 영향의 합의 최댓값을

$$
\alpha=\max_v\sum_{w}R_{vw}
$$

라 한다. $\alpha\lt1$ 이면 정점 $n$ 개에서 Glauber 동역학의 [혼합시간](mixing-time.md)이 다음 이하다.

$$
t_{\mathrm{mix}}(\varepsilon)\le\Bigl\lceil\frac{n}{1-\alpha}\log\frac n\varepsilon\Bigr\rceil
$$

증명의 요지. 한 정점에서만 다른 두 배치에서 같은 정점을 고르고 조건부 분포를 최대로 겹치게 [결합](coupling.md)한다. 두 배치가 다른 정점 $w$ 를 고르면 거리가 $0$ 이 되고, 다른 정점 $u$ 를 고르면 확률 $R\_{uw}$ 이하로 차이가 하나 는다. 거리의 기댓값이 한 걸음에 $1-(1-\alpha)/n$ 배 이하로 줄고, [경로 결합](path-coupling.md)으로 모든 배치 쌍에 넓힌다.

## 두 모형의 조건

- Ising 모형에서 이웃 하나의 영향은 $\tanh\beta$ 이하이므로, 최대 차수가 $\Delta$ 이고 $\Delta\tanh\beta\lt1$ 이면 혼합시간이 $O(n\log n)$ 이다.
- 단단한 알갱이 모형에서 이웃 하나의 영향은 $\lambda/(1+\lambda)$ 이하이므로, $\Delta\lambda/(1+\lambda)\lt1$, 곧 $\lambda\lt1/(\Delta-1)$ 이면 같은 결론이다.

## 낮은 온도의 느린 혼합

완전그래프 $K\_n$ 위에서 결합 세기를 $\beta/n$ 으로 둔 Ising 모형(Curie–Weiss 모형)의 Glauber 동역학은 $\beta\lt1$ 에서 혼합시간이 $\Theta(n\log n)$, $\beta=1$ 에서 $\Theta(n^{3/2})$, $\beta\gt1$ 에서 $n$ 의 지수함수다[^1]. $\beta\gt1$ 이면 대부분이 $+1$ 인 배치와 대부분이 $-1$ 인 배치가 모두 확률이 크고, 그 사이를 지나는 배치들의 확률이 $n$ 에 대해 지수적으로 작다. 직관 절의 두 정점 그래프에서 $e^{2\beta}$ 걸음이 든 것과 같은 현상이다.

# 활용

- 통계역학 모형의 표본추출. 격자 위의 Ising 모형, [Potts 모형](potts-model.md), 단단한 알갱이 모형의 배치를 뽑아 평균 자화나 밀도를 추정한다.
- [근사 세기](approximate-counting.md). 스핀계에서 표본을 빠르게 뽑을 수 있으면 분배함수를 곱의 망원식으로 근사한다. 색칠의 수, 독립집합의 수의 근사가 이 방법이다.
- 베이즈 통계의 Gibbs 표본추출. 그래프 모형의 변수들을 하나씩 조건부 분포에서 다시 뽑는 알고리즘이 같은 구조다.
- 상전이의 판별. 혼합시간이 다항식에서 지수로 바뀌는 자리가 모형의 상전이와 같은 경우가 많아, 동역학의 느려짐으로 상전이를 연구한다.

[^1]: D. A. Levin, M. J. Luczak, Y. Peres, "Glauber dynamics for the mean-field Ising model: cut-off, critical power law, and metastability", *Probability Theory and Related Fields* 146 (2010), 223–265.

# 연관 문서

## 선수지식

- [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)
- [Ising 모형](ising-model.md)

## 더 알아보기

- [Swendsen–Wang 알고리즘](swendsen-wang-algorithm.md)

#probability #computation #algorithms
