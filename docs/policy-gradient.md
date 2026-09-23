# 정책 경사

# 개요

정책 경사는 가치함수를 거치지 않고 정책 자체를 모수로 적어 기대 보상을 직접 올리는 방법이다. 기대 보상의 기울기가 전이확률을 포함하지 않는 꼴로 다시 써지므로, 환경을 모르는 채 경로를 굴려 기울기를 추정할 수 있다. 행동집합이 연속이거나 매우 클 때 쓴다.

# 직관

로봇 팔의 관절 각도를 정하는 제어를 배운다. 행동이 실수 벡터이므로 [Q 학습](q-learning.md)의 갱신식에 들어 있는 $\max_a Q(s',a)$ 를 계산하려면 갱신 한 번마다 연속 변수에 대한 최대화를 따로 풀어야 한다.

최댓값을 구하는 대신 행동을 고르는 규칙 자체에 모수를 붙인다. 상태 $s$ 에서 행동 $a$ 를 낼 확률을 $\pi_\theta(a\mid s)$ 로 적고 기대 보상 $J(\theta)$ 를 $\theta$ 로 미분해 올린다. 그런데 $J$ 는 환경의 전이확률까지 곱해진 기댓값이고, 그 전이확률을 모른다.

경로 $\tau=(s_0,a_0,s_1,a_1,\dots)$ 하나가 나올 확률을 적어 본다.

$$p_\theta(\tau)=p(s_0)\prod_{t\ge 0}P(s_{t+1}\mid s_t,a_t)\thinspace\pi_\theta(a_t\mid s_t)$$

로그를 취하면 곱이 합이 되고, 전이확률 항에는 $\theta$ 가 없으므로 $\theta$ 로 미분하면 사라진다. 남는 것은 정책의 항뿐이다.

$$\nabla_\theta\log p_\theta(\tau)=\sum_{t\ge 0}\nabla_\theta\log\pi_\theta(a_t\mid s_t)$$

기대 보상의 기울기는 $\nabla_\theta\int p_\theta(\tau)R(\tau)\thinspace d\tau=\int p_\theta(\tau)\nabla_\theta\log p_\theta(\tau)R(\tau)\thinspace d\tau$ 이므로, 위 식을 넣으면 전이확률이 없는 기댓값이 된다. 경로를 여러 개 굴려 이 값을 평균내면 환경을 모르고도 기울기를 얻는다.

# 정의

[Markov 결정 과정](markov-decision-process.md) $(S,A,P,r,\gamma)$ 와 $\theta$ 에 대해 미분가능한 확률적 정책족 $\pi_\theta(a\mid s)$ 가 주어졌다고 하자. 목적함수는 할인 보상의 기댓값이다.

$$J(\theta)=\mathbb E\_{\tau\sim p_\theta}\lbrack R(\tau)\rbrack,\qquad R(\tau)=\sum_{t\ge 0}\gamma^t\thinspace r(S_t,A_t)$$

**정책 경사법**은 $\nabla_\theta J$ 의 불편추정량 $g$ 를 표본에서 만들어 $\theta\leftarrow\theta+\eta\thinspace g$ 로 올리는 [확률근사](stochastic-approximation.md)다.

## 점수 함수 추정량

$\nabla_\theta p_\theta=p_\theta\thinspace\nabla_\theta\log p_\theta$ 를 쓰면 기울기가 기댓값으로 적힌다.

$$\nabla_\theta J(\theta)=\mathbb E\_{\tau\sim p_\theta}\lbrack R(\tau)\thinspace\nabla_\theta\log p_\theta(\tau)\rbrack$$

$\nabla_\theta\log\pi_\theta$ 를 **점수 함수**라 한다.

# 성질

## 정책 경사 정리

$$\nabla_\theta J(\theta)=\mathbb E\_{\pi_\theta}\lbrack\thinspace\nabla_\theta\log\pi_\theta(A\mid S)\thinspace Q^{\pi_\theta}(S,A)\thinspace\rbrack$$

이 등식이 정책 경사 정리다[^2].

증명의 요지. 점수 함수 추정량을 시각별로 풀면 $\nabla_\theta\log\pi_\theta(a_t\mid s_t)$ 마다 경로 전체의 보상 $R(\tau)$ 가 곱해진다. 시각 $t$ 보다 앞선 보상은 $s_t$ 가 주어졌을 때 $a_t$ 와 독립이고, 점수 함수의 조건부 기댓값이 $0$ 이므로 그 항들이 사라진다. 남은 것은 $t$ 이후의 할인 보상이고, 그 조건부 기댓값이 $Q^{\pi_\theta}(s_t,a_t)$ 다.

## 기준선

상태만의 함수 $b(S)$ 에 대해 다음이 성립한다.

$$\mathbb E\_{\pi_\theta}\lbrack\thinspace\nabla_\theta\log\pi_\theta(A\mid S)\thinspace b(S)\thinspace\rbrack=0$$

$S=s$ 로 조건을 걸면 안쪽 합이 $b(s)\sum_a\nabla_\theta\pi_\theta(a\mid s)=b(s)\thinspace\nabla_\theta 1=0$ 이다. 따라서 정리의 $Q$ 를 $Q-b$ 로 바꿔도 기울기의 기댓값이 같고, 추정량의 분산만 달라진다. $b=V^{\pi_\theta}$ 로 두면 곱해지는 것이 이점 함수 $A^{\pi_\theta}=Q^{\pi_\theta}-V^{\pi_\theta}$ 다.

## REINFORCE

$Q^{\pi_\theta}(s_t,a_t)$ 를 그 경로에서 실제로 받은 이후 보상 $G_t=\sum_{k\ge t}\gamma^{k-t}r_k$ 로 바꾸면 불편추정량이 되고, 이 절차를 **REINFORCE** 라 한다[^1]. 한 경로로 한 번 갱신하는 절차는 다음과 같다.

```javascript
function reinforce(policy, env, stepSize, baseline) {
  const trajectory = rollout(env, policy)        // 정책을 따라 한 경로를 굴린다
  const returns = discountedReturns(trajectory)  // G_t 를 뒤에서부터 누적
  let grad = zerosLike(policy.theta)
  trajectory.forEach((step, t) => {
    const advantage = returns[t] - baseline(step.state)
    grad = add(grad, scale(scoreFunction(policy, step.state, step.action), advantage))
  })
  return add(policy.theta, scale(grad, stepSize))
}
```

한 경로의 보상 전체가 한 계수로 곱해지므로 추정량의 분산이 크고, 기준선과 이점 함수가 그 분산을 줄이는 수단이다.

## 수렴

보폭이 $\sum_n\eta_n=\infty$ 와 $\sum_n\eta_n^2\lt\infty$ 를 만족하고 기울기 추정이 불편이며 분산이 유계이면, 확률근사의 수렴 정리가 $\theta_n$ 이 $J$ 의 정류점으로 수렴함을 준다. $J$ 가 $\theta$ 에 대해 볼록하지 않으므로 도달하는 곳이 전역 최댓값이라는 보장은 없다.

# 활용

- **연속 행동 제어.** 관절 토크나 조향각처럼 행동이 실수 벡터인 문제에서 Gauss 정책 $\pi_\theta(a\mid s)=\mathcal N(\mu_\theta(s),\sigma^2)$ 을 두고 $\mu_\theta$ 를 올린다.
- **이산 잠재변수의 미분.** [변분 오토인코더](variational-autoencoder.md)에서 잠재변수가 이산이면 재모수화를 쓸 수 없고, 점수 함수 추정량이 그 자리를 대신한다.
- **행위자–비평자.** 이점 함수를 따로 학습한 근사로 대신하면 한 경로가 끝나기를 기다리지 않고 매 단계 갱신한다. 비평자의 갱신이 [Q 학습](q-learning.md)의 시간차 오차와 같은 꼴이다.
- **보폭의 제한.** 정책이 한 번에 크게 움직이면 표본을 모은 정책과 갱신된 정책이 달라져 추정이 무너진다. 두 정책 사이의 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)를 제약으로 걸어 보폭을 재는 방법을 쓴다.

[^1]: R. J. Williams, "Simple statistical gradient-following algorithms for connectionist reinforcement learning", Machine Learning **8** (1992), 229–256.

[^2]: R. S. Sutton, D. McAllester, S. Singh, Y. Mansour, "Policy Gradient Methods for Reinforcement Learning with Function Approximation", Advances in Neural Information Processing Systems 12 (1999). 정책 경사 정리와 함수 근사 아래의 수렴을 준다.

# 연관 문서

## 선수지식

- [Markov 결정 과정](markov-decision-process.md)
- [확률근사](stochastic-approximation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #optimization #probability #algorithms
