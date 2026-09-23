# Q 학습

# 개요

Q 학습은 전이확률과 보상함수를 모르는 상태에서 최적 가치함수를 표본만으로 구하는 방법이다. 한 번의 전이 $(s,a,r,s')$ 를 관측할 때마다 그 자리의 추정값을 Bellman 방정식이 요구하는 값 쪽으로 조금 옮긴다. 모형을 세우지 않고 갱신식만으로 최적 정책에 이른다.

# 직관

[Markov 결정 과정](markov-decision-process.md)의 값 반복은 갱신 한 번에 다음 상태 전체의 합 $\sum_{s'}P(s'\mid s,a)V(s')$ 을 계산한다. 이 합을 쓰려면 $P$ 를 알아야 한다.

$P$ 를 모르고 환경에서 행동 $a$ 를 한 번 해 보는 것만 가능하다고 하자. 그러면 얻는 것은 실제로 도착한 상태 $s'$ 하나와 받은 보상 $r$ 하나다. 합을 계산할 수 없다.

도착한 상태 $s'$ 는 분포 $P(\cdot\mid s,a)$ 에서 뽑힌 것이므로, $r+\gamma\max_{a'}Q(s',a')$ 하나의 기댓값이 바로 구하려던 합이다. 한 표본은 진짜 값에서 크게 벗어나지만 여러 번 관측해 평균하면 그 값에 가까워진다.

평균을 나중에 한꺼번에 내는 대신 볼 때마다 조금씩 옮긴다. 현재 추정을 $Q$ 라 하고 새 표본이 가리키는 값을 $y$ 라 하면 $Q\leftarrow(1-\alpha)Q+\alpha y$ 로 고친다. $\alpha$ 를 시간이 갈수록 줄이면 이 갱신이 평균 내기와 같은 일을 한다.

# 정의

## 행동 가치함수

Markov 결정 과정 $(S,A,P,r,\gamma)$ 에서 상태 $s$ 에서 행동 $a$ 를 하고 그 뒤로 최적으로 움직일 때의 기대 할인 보상을 $Q^\ast(s,a)$ 라 한다.

$$Q^\ast(s,a)=r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)\max_{a'\in A}Q^\ast(s',a')$$

최적 가치함수와는 $V^\ast(s)=\max_a Q^\ast(s,a)$ 로 이어지고, 최적 정책은 $\pi^\ast(s)\in\mathop{\mathrm{argmax}}\_a Q^\ast(s,a)$ 다. $Q$ 를 알면 모형 없이 정책을 읽을 수 있다.

## 갱신식

전이 $(s,a,r,s')$ 를 하나 관측할 때마다 다음으로 고친다. $\alpha_t\in(0,1\rbrack$ 는 학습률이다.

$$Q(s,a)\leftarrow Q(s,a)+\alpha_t\left\lbrack r+\gamma\max_{a'}Q(s',a')-Q(s,a)\right\rbrack$$

대괄호 안을 **시간차 오차**라 한다. 갱신식이 $Q$ 자신의 다음 상태 값을 목표에 쓰므로, 정답을 밖에서 받지 않고 현재 추정을 목표로 삼아 나아간다.

```javascript
function qLearning(env, A, gamma, episodes) {
  const Q = new Map()                       // (s,a) -> 추정값
  const get = (s, a) => Q.get(key(s, a)) ?? 0
  for (let k = 0; k < episodes; k++) {
    let s = env.reset()
    while (!env.done()) {
      const a = epsilonGreedy(A, a => get(s, a), epsilon(k))
      const { r, next } = env.step(s, a)
      const target = r + gamma * Math.max(...A.map(b => get(next, b)))
      Q.set(key(s, a), get(s, a) + alpha(k) * (target - get(s, a)))
      s = next
    }
  }
  return Q
}
```

# 성질

## 수렴

$S$ 와 $A$ 가 유한하고 모든 짝 $(s,a)$ 가 무한히 자주 방문되며 학습률이 $\sum_t\alpha_t=\infty$ 와 $\sum_t\alpha_t^2\lt\infty$ 를 만족하면 $Q$ 는 확률 $1$ 로 $Q^\ast$ 에 수렴한다[^1].

증명의 요지. 갱신식을 [확률근사](stochastic-approximation.md)의 형태 $Q\_{t+1}=(1-\alpha_t)Q_t+\alpha_t(\mathcal T Q_t+w_t)$ 로 쓴다. $\mathcal T$ 는 $Q$ 에 대한 Bellman 작용소이고 상한 노름에서 계수 $\gamma$ 의 [축약사상](banach-fixed-point.md)이다. $w_t$ 는 한 표본과 그 기댓값의 차이라 조건부 평균이 $0$ 이고 분산이 유계다. 축약사상에 평균이 $0$ 인 잡음을 더한 확률근사는 고정점으로 수렴한다.

## 정책에서 떨어진 학습

목표에 $\max_{a'}Q(s',a')$ 가 들어가므로, 실제로 어떤 행동을 골라 표본을 모았는지와 무관하게 최적 정책의 값이 학습된다. 표본을 모으는 정책은 모든 짝을 무한히 자주 방문하기만 하면 된다. 목표를 실제로 고른 행동의 값 $Q(s',a')$ 로 바꾸면 행동 정책 자신의 가치를 배우는 SARSA(state–action–reward–state–action)가 된다.

## 최댓값 편의

$\max_{a'}Q(s',a')$ 는 잡음이 섞인 추정값들의 최댓값이므로 기댓값의 최댓값보다 크다. 추정이 부정확한 초기에 값이 부풀고, 행동 수가 많을수록 편의가 커진다. 행동을 고르는 추정과 값을 재는 추정을 둘로 나누면 이 편의가 줄어든다.

# 활용

- **모형 없는 제어.** 전이확률을 쓰지 않으므로 환경을 시늉만 낼 수 있으면 학습이 돌아간다. 재고 관리, 대기열 제어, 게임 플레이가 같은 갱신식을 쓴다.
- **탐색과 활용.** 모든 짝을 방문해야 하므로 추정이 가장 큰 행동만 고를 수 없다. 확률 $\varepsilon$ 로 아무 행동이나 고르는 규칙이 가장 단순한 처방이고, 방문 횟수에 따라 보너스를 주는 규칙이 더 나은 후회 한계를 준다([다중 슬롯머신](multi-armed-bandits.md)).
- **함수 근사.** 상태가 많으면 표 대신 $Q(s,a)\approx f_\theta(s,a)$ 로 매개변수를 학습한다. 근사, 정책에서 떨어진 학습, 시간차 목표가 함께 있으면 갱신이 발산할 수 있고, 수렴 보장은 표 표현에서만 성립한다.

[^1]: T. Jaakkola, M. I. Jordan, S. P. Singh, *On the convergence of stochastic iterative dynamic programming algorithms*, Neural Computation **6** (1994), 1185–1201. Q 학습의 수렴을 확률근사 정리로 증명한다.

# 연관 문서

## 선수지식

- [Markov 결정 과정](markov-decision-process.md)
- [확률근사](stochastic-approximation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #probability #algorithms #optimization
