# 다중 슬롯머신

# 개요

다중 슬롯머신은 보상 분포를 모르는 선택지 여럿 가운데 매 회차 하나를 고르는 문제다. [Markov 결정 과정](markov-decision-process.md)에서 상태가 하나뿐인 경우이며, 남는 것은 지금까지 좋았던 것을 다시 고를지 덜 해 본 것을 시험할지의 저울질이다. 성능은 매번 최선을 골랐을 때와의 보상 차이인 후회로 잰다.

# 직관

선택지가 둘이고 각각 앞면 확률을 모르는 동전이라고 하자. $1000$ 번 던져 앞면 수를 최대로 만들려고 한다.

먼저 각 동전을 $50$ 번씩 던져 비율이 높은 쪽을 정하고 남은 $900$ 번을 그 쪽에 쓴다. 진짜 확률이 $0.6$ 과 $0.5$ 이면 표본 $50$ 개의 비율 차이가 뒤집힐 확률은 작지 않고, 뒤집히면 남은 $900$ 번 내내 $0.1$ 씩 손해를 본다. 시험 횟수를 $200$ 번으로 늘리면 뒤집힐 확률은 줄지만 시험하는 동안의 손해가 늘어난다. 어느 쪽으로 정해도 한쪽 손해가 커진다.

시험과 사용을 시간으로 나누지 말고 한 번의 선택 안에서 합친다. 각 선택지에 대해 지금까지의 평균과 그 평균이 틀릴 수 있는 폭을 더한 값을 만들고, 그 값이 큰 쪽을 고른다. 덜 해 본 선택지는 폭이 넓어 값이 커지므로 저절로 뽑히고, 많이 해 본 선택지는 폭이 좁아져 평균만 남는다.

폭은 [집중부등식](concentration-inequalities.md)이 준다. 한 선택지를 $s$ 번 골랐을 때 표본평균이 참값에서 $\sqrt{2\log t/s}$ 이상 벗어날 확률은 Hoeffding 부등식으로 $t^{-4}$ 이하다. 이 폭을 더한 값으로 고르면 최선이 아닌 선택지는 폭이 그 선택지와 최선의 차이 $\Delta$ 보다 좁아지는 순간부터 뽑히지 않는다.

$\sqrt{2\log t/s}\lt \Delta/2$ 가 되는 $s$ 는 $8\log t/\Delta^2$ 규모다. 그러니 최선이 아닌 선택지는 $1000$ 번 가운데 $8\log 1000/\Delta^2$ 번쯤만 뽑히고, 손해는 그 횟수에 $\Delta$ 를 곱한 값이다. 시험 횟수를 미리 정하지 않았는데도 손해가 $\log$ 규모로 눌린다.

# 정의

## 문제

$K$ 개의 팔이 있고 팔 $i$ 를 고르면 평균 $\mu_i$ 인 분포에서 보상이 나온다. 회차 $t=1,\dots,T$ 마다 지금까지의 관측만 보고 팔 $A_t$ 를 골라 보상 $X_t$ 를 받는다. $\mu^\ast=\max_i\mu_i$ 라 할 때 **후회**는

$$
R_T=T\mu^\ast-\mathbb E\Bigl[\sum_{t=1}^T X_t\Bigr]=\sum_{i}\Delta_i\thinspace\mathbb E\lbrack N_i(T)\rbrack
$$

이다. $\Delta_i=\mu^\ast-\mu_i$ 는 팔 $i$ 의 손해폭이고 $N_i(T)$ 는 $T$ 회차 동안 팔 $i$ 를 고른 횟수다. 후회를 줄이는 것은 손해폭이 큰 팔을 적게 고르는 것과 같다.

## 상한 신뢰구간 규칙

팔 $i$ 의 표본평균을 $\hat\mu\_i(t)$, 고른 횟수를 $N_i(t)$ 라 할 때 **UCB**(upper confidence bound) 규칙은

$$
A_t=\arg\max_i\Bigl(\hat\mu\_i(t-1)+\sqrt{\frac{2\log t}{N_i(t-1)}}\Bigr)
$$

이다. 각 팔을 한 번씩 고른 뒤부터 이 규칙을 쓴다.

```javascript
function ucb(K, T, pull) {
  const count = new Array(K).fill(0)
  const mean = new Array(K).fill(0)
  for (let t = 1; t <= T; t++) {
    let arm = 0
    if (t <= K) {
      arm = t - 1
    } else {
      let best = -Infinity
      for (let i = 0; i < K; i++) {
        const score = mean[i] + Math.sqrt((2 * Math.log(t)) / count[i])
        if (score > best) { best = score; arm = i }
      }
    }
    const reward = pull(arm)
    count[arm] += 1
    mean[arm] += (reward - mean[arm]) / count[arm]
  }
  return mean
}
```

## Thompson 표집

팔마다 $\mu_i$ 의 사후분포를 두고, 회차마다 각 사후분포에서 값을 하나씩 뽑아 가장 큰 값을 준 팔을 고른다. 보상이 Bernoulli 이면 사후분포가 Beta 분포이고 갱신이 성공과 실패의 횟수를 더하는 것으로 끝난다.

# 성질

## UCB 의 후회 한계

> **정리.** 보상이 $\lbrack 0,1\rbrack$ 에 들면 UCB 의 후회는 $R_T\le\sum_{i:\Delta_i\gt 0}\bigl(8\log T/\Delta_i+3\Delta_i\bigr)$ 이하다.[^1]

증명의 요지는 $N_i(T)$ 를 직접 재는 것이다. 팔 $i$ 가 회차 $t$ 에 뽑히려면 그 팔의 신뢰상한이 최선 팔의 신뢰상한 이상이어야 하고, 이는 두 표본평균 가운데 하나가 신뢰폭 밖으로 벗어났거나 $N_i(t-1)$ 이 $8\log T/\Delta_i^2$ 보다 작다는 뜻이다. 벗어날 확률은 Hoeffding 부등식으로 $t^{-4}$ 이하이고 $t$ 에 대해 더해도 상수로 유계다. 남는 것이 $8\log T/\Delta_i^2$ 이므로 $\Delta_i$ 를 곱하면 위 식이다.

손해폭을 모르는 채로 재면 $\Delta_i$ 가 작을수록 항이 커지지만 $\Delta_i\thinspace N_i(T)$ 가 $T$ 를 넘지 못하므로 $R_T=O(\sqrt{KT\log T})$ 도 함께 성립한다.

## 하한

> **정리 (Lai–Robbins).** 보상 분포족이 적당한 조건을 만족하면, 모든 문제에서 후회가 $o(T^a)$ ($a\gt 0$) 인 규칙은 $\liminf\_{T\to\infty}R_T/\log T\ge\sum_{i:\Delta_i\gt 0}\Delta_i/\mathrm{KL}(\nu_i\Vert\nu^\ast)$ 를 만족한다.[^2]

두 분포를 가르려면 표본이 KL 발산의 역수 규모만큼 필요하다는 것이 근거다. UCB 의 상한이 이 하한과 $\log T$ 차수에서 일치하므로 차수로는 더 줄일 수 없다.

## 문맥과 적대적 판

각 회차에 문맥 $c_t$ 가 주어지고 보상이 문맥에 의존하면 문맥 밴딧이다. 보상이 문맥의 선형함수이면 UCB 의 신뢰폭을 타원체로 바꾼 규칙이 $O(d\sqrt T)$ 후회를 준다.

보상을 확률분포에서 뽑는 대신 미리 정해진 수열로 두면 적대적 밴딧이고, 이때는 지수가중 규칙 EXP3(exponential-weight algorithm for exploration and exploitation)가 $O(\sqrt{TK\log K})$ 후회를 준다. 확률 모형의 $\log T$ 규모는 나오지 않는다.

# 활용

- **임상시험.** 치료법 배정을 고정하지 않고 성적에 따라 옮기면 시험 기간 동안의 환자 손해가 줄어든다. 밴딧 규칙의 초기 동기다.
- **추천과 광고.** 어느 항목을 보일지 고르는 문제가 문맥 밴딧이고, 사용자 특징이 문맥이다.
- **[Q 학습](q-learning.md)의 탐색.** 상태마다 행동을 고를 때 밴딧 규칙을 그대로 쓴다. 상태가 여럿이면 후회 한계가 상태 수와 지평까지 포함한 꼴로 바뀐다.
- **몬테카를로 트리 탐색.** 게임 트리의 각 노드에서 자식을 UCB 로 고르는 절차가 UCT(upper confidence bounds applied to trees)이고, 바둑과 체스 프로그램의 탐색이 이 규칙을 쓴다.

[^1]: P. Auer, N. Cesa-Bianchi, P. Fischer, "Finite-time analysis of the multiarmed bandit problem", Machine Learning 47 (2002), https://doi.org/10.1023/A:1013689704352

[^2]: T. L. Lai, H. Robbins, "Asymptotically efficient adaptive allocation rules", Advances in Applied Mathematics 6 (1985), https://doi.org/10.1016/0196-8858(85)90002-8

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)
- [Markov 결정 과정](markov-decision-process.md)

## 더 알아보기

- [Gittins 지표](gittins-index.md)

#machine_learning #probability #algorithms #optimization
