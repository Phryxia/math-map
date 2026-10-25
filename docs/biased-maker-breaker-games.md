# 편향 Maker–Breaker 게임

# 개요

**편향 Maker–Breaker 게임(biased Maker–Breaker game)** 은 Maker 가 한 번에 원소 $1$ 개를, Breaker 가 한 번에 원소 $b$ 개를 차지하는 Maker–Breaker 게임이다. 성질마다 Maker 가 이기는 $b$ 와 Breaker 가 이기는 $b$ 를 가르는 문턱 편향(threshold bias)이 있고, V. Chvátal 과 P. Erdős 가 1978 년에 완전 그래프의 간선 위에서 이 문턱을 처음 연구했다[^1].

[Erdős–Selfridge 정리](erdos-selfridge-theorem.md)의 위험 함수는 $b$ 가 커져도 같은 방식으로 Breaker 의 전략을 준다. 연결성과 [Hamilton 순환](hamiltonian-cycles.md)의 게임에서는 문턱 편향이 [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)의 문턱에서 계산한 값과 일치한다.

# 직관

완전 그래프 $K_n$ 의 간선을 두고 Maker 는 연결된 신장 부분그래프를 만들려 한다. 한 번에 $1$ 개씩 번갈아 차지하면 Maker 가 쉽게 이긴다. Breaker 가 한 번에 $b$ 개를 차지하게 하면 $b$ 가 클수록 Breaker 에게 유리하다. Maker 가 지기 시작하는 $b$ 가 얼마인지 묻는다.

두 사람이 아무렇게나 둔다고 하자. 판이 다 차면 Maker 는 간선 $\binom n2$ 개 가운데 약 $1/(b+1)$ 의 비율을 가지므로, Maker 의 그래프는 간선을 확률 $p=1/(b+1)$ 로 넣은 랜덤 그래프와 비슷하다. 랜덤 그래프는 $p$ 가 $\ln n/n$ 을 넘으면 연결되므로, $1/(b+1)=\ln n/n$ 에서 $b\approx n/\ln n$ 이 나온다.

두 사람은 아무렇게나 두지 않는다. 그래도 연결성 게임의 문턱 편향은 $(1+o(1))\thinspace n/\ln n$ 이고 이 계산과 같다. 삼각형 게임에서는 같은 계산이 $b\approx n$ 을 주지만 실제 문턱은 $\sqrt n$ 규모다. 이 일치와 불일치를 랜덤 그래프 직관(random graph intuition)이라 한다.

# 정의

$V$ 는 유한 집합이고 $\mathcal F$ 는 $V$ 의 부분집합의 족이다. $(1:b)$ 게임에서 Maker 는 차례마다 아직 차지되지 않은 원소 $1$ 개를, Breaker 는 $b$ 개를 차지한다. Maker 가 어떤 $A\in\mathcal F$ 를 다 차지하면 Maker 가 이기고, 그렇지 않으면 Breaker 가 이긴다.

$b$ 를 늘리면 Breaker 의 전략은 그대로 이기므로, Breaker 가 이기는 $b$ 의 집합은 위로 닫혀 있다. 그 최솟값 $b\_{\mathcal F}$ 를 $\mathcal F$ 의 문턱 편향이라 한다. 완전 그래프 $K_n$ 의 간선 위에서 $\mathcal F$ 를 연결된 신장 부분그래프 전체로 두면 연결성 게임, Hamilton 순환 전체로 두면 Hamilton 게임, 삼각형 전체로 두면 삼각형 게임이다.

# 성질

## Beck 판정

$$
\sum_{A\in\mathcal F}(1+b)^{-\lvert A\rvert}\lt\frac{1}{1+b}
$$

이면 Maker 가 먼저 두는 $(1:b)$ 게임에서 Breaker 가 이긴다. Breaker 가 먼저 두면 합이 $1$ 보다 작은 것으로 충분하다. J. Beck 이 증명했다[^2]. $b=1$ 이면 Erdős–Selfridge 정리다.

증명의 요지. 위험 함수를 $\Phi=\sum(1+b)^{-\lvert A\setminus M\rvert}$ 로 두고 Breaker 가 만나지 않은 $A$ 만 더한다. 원소의 무게 $w(v)$ 는 $v$ 를 포함하는 항의 합이다. Breaker 는 $b$ 개를 하나씩, 그때마다 무게가 가장 큰 것으로 고른다. Maker 가 다음에 $y$ 를 차지하면 $y$ 를 포함하는 항이 $(1+b)$ 배가 되어 $\Phi$ 가 $b\thinspace w(y)$ 만큼 는다. Breaker 가 고른 원소 하나하나의 무게는 그 시점의 $w(y)$ 이상이고 $w(y)$ 는 Breaker 의 수로 줄기만 하므로, Breaker 의 $b$ 수가 줄인 양은 $b\thinspace w(y)$ 이상이다. $\Phi\lt 1$ 이 유지되므로 Maker 는 승리 집합을 채우지 못한다.

## 연결성 게임

연결성 게임의 문턱 편향은 $(1+o(1))\thinspace n/\ln n$ 이다.

- Breaker 쪽. Chvátal 과 Erdős 는 $b\ge(1+\varepsilon)\thinspace n/\ln n$ 이면 Breaker 가 Maker 의 그래프에 고립점을 남긴다는 것을 증명했다[^1]. Breaker 는 먼저 Maker 가 건드리지 않은 정점들 사이의 간선을 차지해 정점 집합 하나를 만들고, 그 정점들 각각에 붙은 간선을 나눠 차지해 그 가운데 하나를 고립시킨다.
- Maker 쪽. H. Gebauer 와 T. Szabó 는 $b\le(1-\varepsilon)\thinspace n/\ln n$ 이면 Maker 가 이긴다는 것을 증명했다[^3].

## Hamilton 게임과 삼각형 게임

- Hamilton 게임의 문턱 편향도 $(1+o(1))\thinspace n/\ln n$ 이다. M. Krivelevich 가 증명했다[^4]. 랜덤 그래프의 Hamilton 순환 문턱이 연결성 문턱과 점근적으로 같은 $\ln n/n$ 이므로 랜덤 그래프 직관과 맞는다.
- 삼각형 게임의 문턱 편향은 $\Theta(\sqrt n)$ 이다[^1]. Chvátal 과 Erdős 는 $b\ge 2\sqrt n$ 이면 Breaker 가 이기고 $b$ 가 $\sqrt n$ 의 작은 상수배 이하이면 Maker 가 이긴다는 것을 증명했다. 랜덤 그래프 직관이 주는 $n$ 규모와 다르다.

# 활용

- 랜덤 그래프와 게임의 비교. 문턱 편향과 Erdős–Rényi 랜덤 그래프의 문턱 확률의 역수를 견주어, 영리한 상대가 있을 때 성질이 무작위 상황보다 얼마나 쉽게 또는 어렵게 얻어지는지 잰다.
- 탈무작위화. Beck 판정의 위험 함수는 Maker 의 원소를 확률 $1/(1+b)$ 로 정하는 무작위 배정의 조건부 기댓값이고, [확률적 방법](probabilistic-method.md)의 조건부 기댓값 방법을 편향 게임으로 넓힌 것이다.

[^1]: V. Chvátal, P. Erdős, "Biased positional games", Annals of Discrete Mathematics 2 (1978), 221–229.
[^2]: J. Beck, "Remarks on positional games. I", Acta Mathematica Academiae Scientiarum Hungaricae 40 (1982), 65–71.
[^3]: H. Gebauer, T. Szabó, "Asymptotic random graph intuition for the biased connectivity game", Random Structures & Algorithms 35 (2009), 431–443.
[^4]: M. Krivelevich, "The critical bias for the Hamiltonicity game is (1+o(1))n/ln n", Journal of the American Mathematical Society 24 (2011), 125–131.

# 연관 문서

## 선수지식

- [Erdős–Selfridge 정리](erdos-selfridge-theorem.md)
- [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #probability
