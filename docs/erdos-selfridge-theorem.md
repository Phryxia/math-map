# Erdős–Selfridge 정리

# 개요

**Erdős–Selfridge 정리(Erdős–Selfridge theorem)** 는 두 사람이 번갈아 칸을 차지하는 게임에서, 채워야 할 줄이 길고 개수가 적으면 나중에 두는 사람이 모든 줄을 막을 수 있다는 정리다. 한 변이 $n$ 칸인 $d$ 차원 틱택토에서 줄은 $((n+2)^d-n^d)/2$ 개이고 먼저 두는 사람이 한 줄을 다 채우면 이기는데, 줄의 개수가 칸 수 $n$ 에 비해 얼마나 적어야 비기는지가 문제다. 이 정리는 줄마다 $2^{-n}$ 을 더한 값이 $1/2$ 보다 작으면, 나중에 두는 사람이 매번 위험도의 합을 가장 많이 줄이는 칸을 골라 상대가 어느 줄도 다 채우지 못하게 함을 보인다.

# 직관

Erdős–Selfridge 정리는 유한 집합족 $\mathcal F$ 가 $\sum_{A\in\mathcal F}2^{-\lvert A\rvert}\lt 1/2$ 를 만족하면, 두 사람이 번갈아 원소를 차지하는 게임에서 나중에 두는 사람이 상대가 $\mathcal F$ 의 어느 집합도 다 차지하지 못하게 막을 수 있다는 정리다. P. Erdős 와 J. L. Selfridge 가 1973 년에 증명했다[^1].

[Hales–Jewett 정리](hales-jewett-theorem.md)는 차원이 높은 틱택토에서 먼저 두는 사람이 이긴다는 것을 준다. 이 정리는 반대쪽, 곧 줄이 길고 개수가 적으면 나중에 두는 사람이 모든 줄을 막는다는 것을 준다. 막는 전략은 [확률적 방법](probabilistic-method.md)의 기댓값 계산을 한 수씩 따라가서 얻는다.

한 변이 $n$ 칸인 $d$ 차원 틱택토 판 $\lbrack n\rbrack^d$ 에서 두 사람이 번갈아 칸을 차지한다. 가로, 세로, 대각선 방향의 줄은 모두 $((n+2)^d-n^d)/2$ 개이고 줄마다 칸이 $n$ 개다. 먼저 두는 사람이 한 줄을 다 채우면 이긴다. $d$ 를 고정하고 $n$ 을 키우면 나중에 두는 사람이 모든 줄을 막을 수 있는지가 질문이다.

두 사람이 칸을 아무렇게나 고른다고 하자. 칸마다 먼저 두는 사람의 것일 확률이 $1/2$ 이면 한 줄이 그 사람의 것으로 다 채워질 확률은 $2^{-n}$ 이고, 다 채워지는 줄 개수의 기댓값은 줄의 개수에 $2^{-n}$ 을 곱한 값이다. 이 값이 $1$ 보다 작으면 줄이 하나도 채워지지 않는 판이 존재한다. 그러나 먼저 두는 사람은 아무렇게나 두지 않으므로, 이것만으로는 나중에 두는 사람의 전략이 나오지 않는다.

그래서 게임 도중의 판마다 같은 기댓값을 계산한다. 남은 칸을 아무렇게나 나눈다고 할 때, 나중에 두는 사람이 이미 한 칸을 가진 줄은 다 채워질 수 없으므로 $0$ 을 보태고, 그런 칸이 없고 빈칸이 $j$ 개인 줄은 $2^{-j}$ 을 보탠다. 나중에 두는 사람은 이 합을 가장 많이 줄이는 칸을 고른다. 먼저 두는 사람의 다음 수는 그 칸이 줄였던 양보다 많이 늘리지 못한다.

합은 게임 내내 늘지 않는다. 처음에 $1$ 보다 작으면 판이 다 찼을 때도 $1$ 보다 작다. 판이 다 차면 이 합은 실제로 채워진 줄의 개수이고 정수이므로 $0$ 이다. 이 합을 위험 함수(potential function)라 하고, 기댓값을 한 수씩 줄이지 않게 고르는 방법을 조건부 기댓값 방법(method of conditional expectations)이라 한다.

# 정의

## Maker–Breaker 게임

$V$ 는 유한 집합이고 $\mathcal F$ 는 $V$ 의 부분집합들의 족이다. **Maker–Breaker 게임(Maker–Breaker game)** 은 Maker 와 Breaker 두 사람이 번갈아 $V$ 의 아직 차지되지 않은 원소를 하나씩 차지하는 게임이다. Maker 가 어떤 $A\in\mathcal F$ 의 원소를 전부 차지하면 Maker 가 이기고, $V$ 가 다 차지될 때까지 그런 $A$ 가 없으면 Breaker 가 이긴다. $\mathcal F$ 의 원소를 승리 집합(winning set)이라 한다.

## 강한 게임

**강한 게임(strong game)** 은 두 사람 모두 승리 집합을 채우려 하고 먼저 채운 사람이 이기는 게임이다. 아무도 채우지 못하면 무승부다. 틱택토는 $V$ 가 칸 전체이고 $\mathcal F$ 가 줄 전체인 강한 게임이다. Maker–Breaker 게임과 강한 게임을 묶어 위치 게임(positional game)이라 한다.

강한 게임에서 나중에 두는 사람이 Breaker 의 이기는 전략을 쓰면, 먼저 두는 사람은 어떤 승리 집합도 채우지 못하므로 이기지 못한다.

## 위험 함수

게임 도중 Maker 가 차지한 원소의 집합을 $M$, Breaker 가 차지한 원소의 집합을 $B$ 라 한다.

$$
\Phi(M,B)=\sum_{A\in\mathcal F,\ A\cap B=\varnothing}2^{-\lvert A\setminus M\rvert}
$$

을 위험 함수라 한다. 아직 차지되지 않은 원소 $v$ 의 무게는 $v$ 를 포함하는 항만 더한 값이다.

$$
w(v)=\sum_{A\in\mathcal F,\ v\in A,\ A\cap B=\varnothing}2^{-\lvert A\setminus M\rvert}
$$

남은 원소를 각각 확률 $1/2$ 로 Maker 에게 주면 $\Phi(M,B)$ 는 Maker 가 다 차지하는 승리 집합 개수의 [조건부 기댓값](conditional-expectation.md)이다.

# 성질

## Erdős–Selfridge 정리

$$
\sum_{A\in\mathcal F}2^{-\lvert A\rvert}\lt\frac12
$$

이면 Maker 가 먼저 두는 Maker–Breaker 게임에서 Breaker 가 이긴다. Breaker 가 먼저 두면 합이 $1$ 보다 작은 것으로 충분하다.

증명의 요지. Breaker 는 매번 무게 $w(x)$ 가 가장 큰 원소 $x$ 를 차지한다. 그러면 $\Phi$ 가 $w(x)$ 만큼 준다. 이어서 Maker 가 $y$ 를 차지하면 $y$ 를 포함하고 $B$ 와 만나지 않는 항이 두 배가 되므로 $\Phi$ 가 $y$ 의 새 무게만큼 는다. $x$ 를 포함하는 항은 이미 빠졌으므로 $y$ 의 새 무게는 $y$ 의 옛 무게 이하이고, 옛 무게는 $w(x)$ 이하다. 그래서 Breaker 와 Maker 의 수 한 쌍이 지나면 $\Phi$ 는 늘지 않는다.

Maker 의 첫 수는 $\Phi$ 를 많아야 두 배로 만들므로 그 뒤 $\Phi\lt 1$ 이 끝까지 유지된다. Maker 가 승리 집합 $A$ 를 다 차지하면 $A$ 의 항이 $2^0=1$ 이 되어 $\Phi\ge 1$ 이므로 모순이다. Breaker 가 먼저 두면 첫 수의 두 배가 없으므로 처음 합이 $1$ 보다 작은 것으로 충분하다.

## 상수 1/2 의 최적성

깊이가 $k$ 단계인 완전 이진 나무의 꼭짓점 전체를 $V$ 로, 뿌리에서 잎까지의 경로 $2^{k-1}$ 개를 $\mathcal F$ 로 둔다. 승리 집합마다 원소가 $k$ 개이므로 합은 정확히 $2^{k-1}\cdot 2^{-k}=1/2$ 이다.

이 게임에서는 Maker 가 이긴다. Maker 는 뿌리를 차지한다. Breaker 가 어느 꼭짓점을 차지하든 그 꼭짓점은 뿌리의 두 부분나무 가운데 많아야 하나에 속하므로, Maker 는 다른 부분나무의 뿌리를 차지한다. 이것을 잎까지 되풀이하면 Maker 가 경로 하나를 다 차지한다. 그래서 정리의 $1/2$ 은 더 큰 수로 바꿀 수 없다.

## 계산

Breaker 의 전략은 매 수마다 남은 원소의 무게를 계산하고 가장 큰 것을 고르는 절차다. 한 수에 드는 계산은 $\lvert V\rvert\cdot\lvert\mathcal F\rvert$ 의 다항식이다.

```javascript
// family: 승리 집합의 배열, 각 원소는 꼭짓점의 Set
function breakerMove(family, maker, breaker, free) {
  let best = null, bestWeight = -1;
  for (const v of free) {
    let w = 0;
    for (const A of family) {
      if (!A.has(v) || [...A].some((u) => breaker.has(u))) continue;
      const left = [...A].filter((u) => !maker.has(u)).length;
      w += 2 ** -left;
    }
    if (w > bestWeight) { best = v; bestWeight = w; }
  }
  return best;
}
```

# 활용

- 다차원 틱택토. 판 $\lbrack n\rbrack^d$ 의 줄은 $((n+2)^d-n^d)/2$ 개이고 각각 칸이 $n$ 개이므로, $(n+2)^d-n^d\lt 2^n$ 이면 나중에 두는 사람이 지지 않는다. $d=2$ 이면 $n\ge 5$ 에서 성립한다. 차원이 높은 판에서 먼저 두는 사람이 이긴다는 Hales–Jewett 정리의 결론과 반대 방향의 경계다.
- Ramsey 게임. 완전 그래프 $K_N$ 의 간선을 $V$ 로, 꼭짓점 $q$ 개의 완전 부분그래프의 간선 집합 전체를 $\mathcal F$ 로 두면, $\binom Nq 2^{-\binom q2}\lt 1/2$ 일 때 Breaker 가 Maker 의 $K_q$ 를 막는다. 이 부등식은 [Ramsey 이론](ramsey-theory.md)의 하한 $R(q)\gt 2^{q/2}$ 을 주는 확률적 계산과 같은 식이다.
- 탈무작위화. 확률적 방법의 조건부 기댓값 방법을 상대가 있는 상황에 적용한 예다. 무작위 논증이 주는 기댓값 상한이 그대로 결정적 전략의 불변량이 된다.

[^1]: P. Erdős, J. L. Selfridge, "On a combinatorial game", Journal of Combinatorial Theory, Series A 14 (1973), 298–301.

# 연관 문서

## 선수지식

- [Hales–Jewett 정리](hales-jewett-theorem.md)
- [확률적 방법](probabilistic-method.md)

## 더 알아보기

- [편향 Maker–Breaker 게임](biased-maker-breaker-games.md)

#combinatorics #probability #computation
