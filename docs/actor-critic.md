# 행위자–비평자

# 개요

행위자–비평자는 정책을 올리는 갱신과 가치함수를 추정하는 갱신을 함께 돌리는 구조다. 정책을 모수로 갖는 쪽을 **행위자**, 그 정책의 가치를 추정하는 쪽을 **비평자**라 한다.

비평자가 내놓는 시간차 오차 하나가 두 갱신에 함께 쓰인다. 비평자는 그 값으로 가치 추정을 고치고, 행위자는 그 값을 점수함수에 곱해 정책 모수를 고친다. 경로가 끝나기를 기다리지 않고 전이 하나마다 정책이 움직인다.

# 직관

한 에피소드가 $1000$ 단계인 보행 과제를 [정책 경사](policy-gradient.md)의 REINFORCE 로 배운다. 갱신 계수로 쓰는 $G_t=\sum_{k\ge t}\gamma^{k-t}r_k$ 는 시각 $t$ 이후의 보상을 전부 더한 값이므로, 경로가 끝나기 전에는 $t=1$ 의 갱신조차 계산할 수 없다. 더해지는 보상 $900$ 개가 그동안 고른 행동 $900$ 개의 확률적 결과를 함께 담으므로, 시각 $t$ 의 행동 하나가 좋았는지와 무관한 변동이 계수에 섞여 들어간다. 같은 행동에 매번 다른 계수가 붙어 $\theta$ 가 흔들린다.

$G_t$ 를 그 조건부 기댓값 $Q^\pi(s_t,a_t)$ 로 바꾸면 이 변동이 사라지지만 $Q^\pi$ 를 모른다. 전이 하나 $(s_t,a_t,r_t,s_{t+1})$ 만 보고 만들 수 있는 것은 $r_t+\gamma V(s_{t+1})$ 이고, 여기서 $V(s_t)$ 를 빼면 상태의 평균 몫이 걷혀 그 행동이 평균보다 나은 만큼만 남는다. 이 차이의 조건부 기댓값이 $Q^\pi-V^\pi$ 이므로, 상태만의 함수 $V$ 를 추정하는 것으로 계수가 정해진다. $V$ 를 고치는 갱신은 [Q 학습](q-learning.md)의 갱신식에서 $\max\_{a'}$ 를 떼면 그대로 나온다.

# 정의

## 행위자와 비평자

Markov 결정 과정 $(S,A,P,r,\gamma)$ 에서 미분가능한 정책족 $\pi_\theta(a\mid s)$ 와 가치 근사 $V_w\colon S\to\mathbb R$ 를 둔다. 전이 $(s_t,a_t,r_t,s_{t+1})$ 의 **시간차 오차**는 다음이다.

$$
\delta_t=r_t+\gamma V_w(s_{t+1})-V_w(s_t)
$$

행위자와 비평자의 갱신은 보폭 $\alpha_t$ 와 $\beta_t$ 로 적는다.

$$
w\leftarrow w+\beta_t\thinspace\delta_t\thinspace\nabla_w V_w(s_t),\qquad
\theta\leftarrow\theta+\alpha_t\thinspace\delta_t\thinspace\nabla_\theta\log\pi_\theta(a_t\mid s_t)
$$

비평자의 갱신은 $\delta_t$ 를 줄이는 방향이고, 행위자의 갱신은 $\delta_t$ 가 양수인 행동의 확률을 올린다.

```javascript
function actorCritic(env, policy, value, gamma, episodes) {
  for (let k = 0; k < episodes; k++) {
    let s = env.reset()
    while (!env.done()) {
      const a = sample(policy, s)
      const { r, next } = env.step(s, a)
      const delta = r + gamma * value.at(next) - value.at(s)   // 종료 상태면 둘째 항은 0
      value.theta = add(value.theta, scale(value.grad(s), beta(k) * delta))
      policy.theta = add(policy.theta, scale(scoreFunction(policy, s, a), alpha(k) * delta))
      s = next
    }
  }
  return policy
}
```

## 적격 흔적

한 단계만 보는 $\delta_t$ 와 경로 끝까지 보는 $G_t-V_w(s_t)$ 사이를 $\lambda\in\lbrack 0,1\rbrack$ 로 잇는다. **일반화 이점 추정**(generalized advantage estimation, GAE)은 시간차 오차의 가중합이다[^4].

$$
\hat A_t^{(\lambda)}=\sum_{l\ge 0}(\gamma\lambda)^l\thinspace\delta_{t+l}
$$

$\lambda=0$ 이면 $\delta_t$ 이고 $\lambda=1$ 이면 $G_t-V_w(s_t)$ 다. 같은 가중을 비평자 쪽에 적용한 것이 **적격 흔적**(eligibility trace)이며, 흔적 $z_t=\gamma\lambda z_{t-1}+\nabla_w V_w(s_t)$ 를 들고 다니며 $w\leftarrow w+\beta_t\thinspace\delta_t\thinspace z_t$ 로 고친다.

# 성질

## 시간차 오차의 조건부 기댓값

$V_w=V^\pi$ 이면 시간차 오차의 조건부 기댓값이 이점 함수다.

$$
\mathbb E\lbrack\thinspace\delta_t\mid s_t=s,\thinspace a_t=a\thinspace\rbrack=Q^\pi(s,a)-V^\pi(s)=A^\pi(s,a)
$$

증명의 요지. $\mathbb E\lbrack r_t+\gamma V^\pi(s_{t+1})\mid s,a\rbrack$ 은 $Q^\pi$ 의 Bellman 방정식의 오른쪽이므로 $Q^\pi(s,a)$ 다. $V^\pi(s)$ 는 조건에 대해 상수라 그대로 빠진다. 정책 경사 정리의 $Q^{\pi_\theta}$ 를 $\delta_t$ 로 바꿔도 기울기의 기댓값이 같은 근거가 이 등식이고, 상태만의 함수를 빼는 것이 기댓값을 바꾸지 않는다는 기준선 성질이 함께 쓰인다.

## 호환 함수 근사

비평자가 $Q^\pi$ 를 정확히 맞히지 못해도 기울기가 참값과 같아지는 근사족이 있다. 근사 $Q_u$ 가

$$
\nabla_u Q_u(s,a)=\nabla_\theta\log\pi_\theta(a\mid s)
$$

를 만족하고 $u$ 가 $\mathbb E\_{\pi_\theta}\lbrack(Q^{\pi_\theta}-Q_u)^2\rbrack$ 을 최소화하면, $Q_u$ 를 넣은 정책 경사가 참 기울기와 같다[^1].

증명의 요지. 최소화의 일차 조건은 $\mathbb E\lbrack(Q^{\pi_\theta}-Q_u)\thinspace\nabla_u Q_u\rbrack=0$ 이다. 호환 조건으로 $\nabla_u Q_u$ 를 점수함수로 바꾸면 $\mathbb E\lbrack(Q^{\pi_\theta}-Q_u)\thinspace\nabla_\theta\log\pi_\theta\rbrack=0$ 이고, 이 기댓값이 정책 경사의 두 값의 차이다. 조건을 만족하는 가장 단순한 꼴은 점수함수에 선형인 $Q_u(s,a)=u^\top\nabla_\theta\log\pi_\theta(a\mid s)$ 다.

## 두 시간 스케일 수렴

$\sum_t\alpha_t=\sum_t\beta_t=\infty$, $\sum_t(\alpha_t^2+\beta_t^2)\lt\infty$, $\alpha_t/\beta_t\to 0$ 이면 모수열이 $J$ 의 정류점 집합으로 수렴한다[^2].

증명의 요지. $\alpha_t/\beta_t\to 0$ 이면 비평자의 시간 눈금에서 행위자가 멈춘 것으로 보이므로, 비평자는 고정된 $\theta$ 에 대한 가치를 푸는 [확률근사](stochastic-approximation.md)가 되어 $V_w\to V^{\pi_\theta}$ 로 간다. 행위자의 눈금에서는 비평자가 이미 수렴한 값을 내놓으므로 갱신이 참 기울기에 평균 $0$ 인 잡음을 더한 것이 된다. 두 시간 눈금을 가진 확률근사의 수렴 정리가 이 분리를 정당화한다[^3].

## 편의와 분산의 맞바꿈

$\lambda$ 를 $0$ 에 가깝게 잡으면 더해지는 항이 적어 분산이 작고, $V_w$ 가 $V^\pi$ 에서 벗어난 만큼이 편의로 남는다. $\lambda=1$ 이면 비평자의 오차가 계수에 들어가지 않아 불편이지만 보상 $900$ 개의 변동이 그대로 실린다. 비평자를 쓰지 않는 REINFORCE 가 $\lambda=1$ 의 끝이고, 한 단계 시간차가 $\lambda=0$ 의 끝이다.

# 활용

- **연속 행동 제어.** 행동이 실수 벡터이면 Gauss 정책의 평균을 행위자가 내고 비평자가 상태가치만 추정한다. 행동집합에 대한 최대화를 풀지 않으므로 관절 토크나 조향각을 그대로 다룬다.
- **보폭의 제한.** 갱신 전후 정책의 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)를 제약이나 벌점으로 걸어 한 번의 이동을 제한한다. 신뢰영역 정책 최적화(trust region policy optimization, TRPO)와 근접 정책 최적화(proximal policy optimization, PPO)가 이 형태이고, 이점 추정에 GAE 를 쓴다.
- **병렬 수집.** 환경 복제본 여럿에서 전이를 모아 한 모수에 갱신을 모으면 표본의 상관이 줄어든다. 비동기 이득 행위자–비평자(asynchronous advantage actor-critic, A3C)와 그 동기 판이 이 구조다.
- **비평자의 대상 선택.** 비평자가 $V$ 대신 $Q$ 를 추정하면 행동까지 입력으로 받아 결정적 정책의 기울기를 $\nabla_a Q$ 로 받을 수 있다. 정책에서 떨어진 표본을 재사용하는 알고리즘들이 이 쪽을 쓴다.

[^1]: R. S. Sutton, D. McAllester, S. Singh, Y. Mansour, "Policy Gradient Methods for Reinforcement Learning with Function Approximation", Advances in Neural Information Processing Systems 12 (1999). 호환 함수 근사 조건과 그 아래의 수렴을 준다.

[^2]: V. R. Konda, J. N. Tsitsiklis, "Actor-Critic Algorithms", SIAM Journal on Control and Optimization **42** (2003), 1143–1166. 두 시간 눈금 갱신의 수렴을 증명한다.

[^3]: V. S. Borkar, "Stochastic approximation with two time scales", Systems & Control Letters **29** (1997), 291–294.

[^4]: J. Schulman, P. Moritz, S. Levine, M. I. Jordan, P. Abbeel, "High-Dimensional Continuous Control Using Generalized Advantage Estimation", International Conference on Learning Representations (2016).

# 연관 문서

## 선수지식

- [정책 경사](policy-gradient.md)
- [Q 학습](q-learning.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #optimization #probability #algorithms
