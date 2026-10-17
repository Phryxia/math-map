# 곱셈 가중치 절차

# 개요

**곱셈 가중치 절차(multiplicative weights update method)** 는 $n$ 개의 선택지 가운데 매 회차 하나를 고르는 문제에서, 각 선택지의 가중치를 그 선택지가 받은 누적 손실에 지수적으로 줄이고 가중치에 비례한 확률로 고르는 절차다. $T$ 회차 뒤의 기대손실이 사후 최선의 선택지보다 $O(\sqrt{T\log n})$ 만큼만 크고, 이 상한은 가중치 합의 로그를 퍼텐셜로 삼아 한 회차의 감소를 양쪽에서 재는 것으로 나온다. [선형계획법](linear-programming.md)의 근사해, 부스팅, 영합 게임의 균형 계산이 같은 절차의 사례다.

# 직관

선택지 $n$ 개가 있고 매 회차 하나를 골라 그 선택지에 붙은 손실을 받는다. 회차가 끝나면 모든 선택지의 손실이 공개된다. $T$ 회차를 돌린 뒤 내가 받은 누적 손실이 사후에 돌아본 최선의 선택지 하나의 누적 손실보다 얼마나 더 큰지를 **후회**라 하고, 이 양을 작게 하려 한다.

가장 단순한 방법은 그때까지 누적 손실이 가장 작은 선택지를 고르는 것이다. 선택지가 둘일 때 이 방법을 적대자와 겨뤄 보자. 내 선택은 과거 손실로 정해지므로 적대자가 미리 알 수 있고, 적대자는 내가 고른 쪽에 손실 $1$ 을, 다른 쪽에 $0$ 을 준다. $T$ 회차 뒤 내 손실은 $T$ 이고 두 선택지의 손실을 합한 것도 $T$ 이므로 더 나은 쪽의 손실은 $T/2$ 이하다. 후회가 $T/2$ 로 회차 수에 비례해 커진다.

내 선택이 미리 정해져서 막혔으니 확률로 고른다. 두 선택지를 매번 반반으로 고르면 기대손실이 두 손실의 평균이고, 적대자가 한쪽에만 계속 손실을 주면 평균은 최선의 쪽보다 크다. 그래서 성적이 좋은 쪽에 확률을 몰되 어느 쪽도 확률 $0$ 으로 두지 않는다.

$i$ 번째 선택지의 누적 손실을 $L_i$ 라 하고 가중치를 $w_i=e^{-\eta L_i}$ 로 둔 다음 가중치에 비례한 확률로 고른다. 가중치의 합 $W$ 는 두 가지로 읽힌다. 한편으로 합은 항 하나보다 크므로 $W\ge e^{-\eta L^\star}$ 이고, 여기서 $L^\star$ 는 최선의 선택지의 누적 손실이다. 다른 한편 한 회차에 $W$ 가 줄어드는 비율이 그 회차 내 기대손실로 적힌다. 두 부등식의 로그를 맞추면 내 누적 기대손실이 $L^\star$ 에 $\log n/\eta$ 와 $\eta T$ 정도의 항을 더한 것으로 묶이고, $\eta$ 를 $\sqrt{\log n/T}$ 로 잡으면 두 항이 $\sqrt{T\log n}$ 에서 균형을 이룬다.

# 정의

## 전문가 문제

회차 $t=1,\dots,T$ 마다 알고리즘이 확률분포 $p_t$ 를 $\lbrace 1,\dots,n\rbrace$ 위에 정하고, 그 뒤 손실벡터 $\ell_t\in\lbrack 0,1\rbrack^n$ 이 공개된다. 알고리즘의 그 회차 기대손실은 $\langle p_t,\ell_t\rangle$ 다. **후회**는 다음 양이다.

$$
R_T=\sum_{t=1}^T\langle p_t,\ell_t\rangle-\min_{1\le i\le n}\sum_{t=1}^T\ell_{t,i}
$$

손실벡터를 알고리즘의 과거 선택을 보고 정하는 적대자를 허용한다.

## 가중치 갱신

**곱셈 가중치 절차**는 학습률 $\eta\in(0,1/2\rbrack$ 에 대해 $w_{1,i}=1$ 에서 시작해 다음을 되풀이한다.

$$
p_{t,i}=\frac{w_{t,i}}{W_t},\qquad W_t=\sum_{i=1}^n w_{t,i},\qquad w_{t+1,i}=w_{t,i}(1-\eta\ell_{t,i})
$$

갱신을 $w_{t+1,i}=w_{t,i}e^{-\eta\ell_{t,i}}$ 로 쓴 판본을 **Hedge** 라 한다. 두 판본의 후회 상한은 상수배만 다르다.

```javascript
function multiplicativeWeights(n, T, eta, observeLoss) {
  const w = new Array(n).fill(1)
  for (let t = 0; t < T; t++) {
    const W = w.reduce((a, b) => a + b, 0)
    const p = w.map(wi => wi / W)
    const loss = observeLoss(p)        // 손실벡터는 p 를 보고 정해질 수 있다
    for (let i = 0; i < n; i++) w[i] *= 1 - eta * loss[i]
  }
  return w
}
```

# 성질

## 후회 상한

**정리.** $\ell_t\in\lbrack 0,1\rbrack^n$ 이고 $\eta\in(0,1/2\rbrack$ 이면 모든 $i$ 에 대해

$$
\sum_{t=1}^T\langle p_t,\ell_t\rangle\le\sum_{t=1}^T\ell_{t,i}+\eta\sum_{t=1}^T\ell_{t,i}^2+\frac{\log n}{\eta}
$$

가 성립한다.

가중치 합의 갱신을 쓰면

$$
W_{t+1}=\sum_i w_{t,i}(1-\eta\ell_{t,i})=W_t\bigl(1-\eta\langle p_t,\ell_t\rangle\bigr)
$$

이고, $1-x\le e^{-x}$ 와 $W_1=n$ 에서 $W_{T+1}\le n\exp\bigl(-\eta\sum_t\langle p_t,\ell_t\rangle\bigr)$ 이 나온다. 한편 합은 항 하나보다 크므로 $W_{T+1}\ge\prod_t(1-\eta\ell_{t,i})$ 다. 두 식의 로그를 비교하고 $\eta\ell\le 1/2$ 에서 성립하는 $\log(1-\eta\ell)\ge-\eta\ell-\eta^2\ell^2$ 을 왼쪽에 쓰면

$$
-\eta\sum_t\ell_{t,i}-\eta^2\sum_t\ell_{t,i}^2\le\log n-\eta\sum_t\langle p_t,\ell_t\rangle
$$

이고, $\eta$ 로 나누면 정리의 식이다. ∎

**따름정리.** $\ell_{t,i}^2\le\ell_{t,i}\le 1$ 이므로 $R_T\le\eta T+\log n/\eta$ 이고, $\eta=\sqrt{\log n/T}$ 로 잡으면 $R_T\le 2\sqrt{T\log n}$ 이다.

후회가 $T$ 보다 느리게 커지므로 회차당 후회 $R_T/T$ 가 $0$ 으로 간다. 손실의 범위나 분포에 대한 가정 없이 적대적 손실열에서 성립한다.

## 상한의 최적성

**정리.** 손실을 $\lbrace 0,1\rbrace$ 에서 독립 균등으로 뽑는 손실열에 대해, 임의의 알고리즘의 기대후회가 $\Omega(\sqrt{T\log n})$ 이다[^1].

$n$ 개의 독립 확률보행 가운데 최솟값의 편차가 $\sqrt{T\log n}$ 규모이고 알고리즘의 기대손실은 어느 분포를 쓰든 $T/2$ 이므로, 둘의 차이가 그 규모로 남는다. ∎

## 거울하강으로서의 갱신

Hedge 판본의 갱신은 선형화한 손실에 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)를 정칙화로 붙인 최소화 문제의 해다. 곧 $p_{t+1}$ 은 $\eta\langle p,\ell_t\rangle+\mathrm{KL}\bigl(p\thinspace\Vert\thinspace p_t\bigr)$ 를 확률단체 위에서 최소화한다. Lagrange 조건을 쓰면 $p_{t+1,i}\propto p_{t,i}e^{-\eta\ell_{t,i}}$ 가 나온다. 정칙화를 제곱노름으로 바꾸면 사영된 [경사하강법](gradient-descent.md)이고, 그때의 후회 상한은 $\log n$ 대신 차원 $n$ 에 의존한다. 선택지 개수에 로그로만 의존하는 성질이 KL 정칙화에서 온다[^2].

# 활용

- [상관균형](correlated-equilibrium.md)의 수렴에서 각 참가자가 이 절차를 돌린다. 외부 후회가 $o(T)$ 이므로 경험적 결합분포가 조상관균형 집합으로 가고, 영합 게임에서는 그 조건이 minimax 값으로의 수렴과 같다.
- [선형계획법](linear-programming.md)의 포장 문제와 덮개 문제에서 제약마다 가중치를 두고 위반된 제약의 가중치를 올리면, $O(\varepsilon^{-2}\log m)$ 회차로 $(1+\varepsilon)$ 근사해를 얻는다. $m$ 은 제약 개수다.
- 부스팅에서 분류가 틀린 표본의 가중치를 올리는 갱신이 이 절차이고, 약한 학습기의 이점이 $\gamma$ 이면 훈련오차가 회차에 지수로 줄어든다.
- [다중 슬롯머신 문제](multi-armed-bandits.md)는 고른 선택지의 손실만 공개되는 판본이다. 손실벡터 전체를 못 보므로 중요도 가중으로 추정값을 만들어 같은 갱신에 넣고, 후회 상한의 $\log n$ 이 $n$ 으로 바뀐다.
- 최대 유량과 최소 컷의 근사, 희소화, 반정부호 계획의 [근사 알고리즘](approximation-algorithms.md)이 제약의 가중치를 이 규칙으로 갱신한다[^3].

[^1]: Nicolò Cesa-Bianchi, Gábor Lugosi, *Prediction, Learning, and Games*, Cambridge University Press (2006), 정리 3.7.

[^2]: Amir Beck, Marc Teboulle, "Mirror descent and nonlinear projected subgradient methods for convex optimization", Operations Research Letters 31 (2003), 167–175.

[^3]: Sanjeev Arora, Elad Hazan, Satyen Kale, "The Multiplicative Weights Update Method: a Meta-Algorithm and Applications", Theory of Computing 8 (2012), 121–164.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [상관균형](correlated-equilibrium.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #machine_learning #probability
