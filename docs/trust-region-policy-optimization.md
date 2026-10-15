# 신뢰영역 정책 최적화

# 개요

신뢰영역 정책 최적화(trust region policy optimization, TRPO)는 정책의 갱신 보폭을 파라미터 거리가 아니라 정책 분포 사이의 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)로 재는 제약 최적화다.

$$\max_{\theta'}\thinspace L_\theta(\theta')\quad \text{subject to}\quad \bar D_{\mathrm{KL}}(\theta,\theta')\le\delta$$

$L_\theta$ 는 옛 정책의 표본으로 적은 대리 목적함수이고 $\delta$ 는 신뢰영역의 반지름이다. 제약 안에서는 대리 목적의 개선량이 실제 성능의 개선량을 하한으로 보장한다.

제약 문제를 그대로 풀려면 [Fisher 정보](fisher-information.md)행렬의 역행렬이 필요하다. 근접 정책 최적화(proximal policy optimization, PPO)는 그 제약을 중요도비의 잘라내기로 바꿔 제약 없는 1차 최적화로 만든 것이다.

# 직관

[정책 경사](policy-gradient.md)법은 기울기 추정량 $g$ 로 $\theta\leftarrow\theta+\eta\thinspace g$ 를 반복하고 보폭 $\eta$ 를 골라야 한다. 행동이 둘뿐인 정책 $\pi_\theta(a=1)=\sigma(\theta)$ 에서 같은 $\eta$ 가 정책을 얼마나 바꾸는지 본다.

$\theta=0$ 에 $0.1$ 을 더하면 행동 $1$ 의 확률이 $0.500$ 에서 $0.525$ 로 간다. $\theta=4$ 에 같은 $0.1$ 을 더하면 $0.982$ 에서 $0.9837$ 로 간다. 앞에서는 확률이 $0.025$ 움직이고 뒤에서는 $0.0017$ 움직인다. 파라미터를 얼마나 움직였는지로는 정책이 얼마나 달라졌는지 알 수 없다.

그러면 보폭을 분포 사이의 거리로 잰다. 갱신 전후 두 정책의 KL divergence 를 $\delta$ 이하로 묶고 그 안에서 성능이 가장 좋은 점을 고른다. $\sigma$ 의 기울기가 완만한 자리에서는 $\theta$ 가 멀리 가고 급한 자리에서는 조금만 간다.

고를 대상인 성능을 적어야 한다. 새 정책의 성능은 새 정책으로 표본을 다시 모아야 알 수 있고 지금 가진 표본은 옛 정책의 것이다. 각 표본에 두 정책의 확률비 $\pi_{\theta'}(a\mid s)/\pi_\theta(a\mid s)$ 를 곱하면 옛 표본의 평균이 새 정책의 평균을 추정한다. 이렇게 적은 식이 제약 안에서 최대화할 대리 목적이고, 확률비가 $1$ 에서 멀어질수록 이 추정이 믿을 수 없다는 것이 보폭을 묶는 또 하나의 이유다.

# 정의

## 할인 방문분포와 대리 목적

[Markov 결정 과정](markov-decision-process.md)과 정책족 $\pi_\theta$ 에 대해 할인 방문분포를 $d^{\theta}(s)=(1-\gamma)\sum_{t\ge 0}\gamma^t P(S_t=s)$ 로 둔다. 정책 $\pi_\theta$ 의 이점 함수를 $A^\theta$ 라 할 때 **대리 목적함수**는 다음이다.

$$L_\theta(\theta')\thinspace=\thinspace\frac{1}{1-\gamma}\thinspace\mathbb E\_{s\sim d^\theta,\thinspace a\sim\pi_\theta}\left\lbrack \frac{\pi_{\theta'}(a\mid s)}{\pi_\theta(a\mid s)}\thinspace A^\theta(s,a)\right\rbrack$$

방문분포와 행동분포가 모두 옛 정책 $\pi_\theta$ 의 것이므로 옛 표본으로 계산된다.

## 신뢰영역 문제

평균 KL divergence 를 $\bar D_{\mathrm{KL}}(\theta,\theta')=\mathbb E\_{s\sim d^\theta}\lbrack D_{\mathrm{KL}}(\pi_\theta(\cdot\mid s)\thinspace\Vert\thinspace\pi_{\theta'}(\cdot\mid s))\rbrack$ 로 둔다. **TRPO** 는 $\bar D_{\mathrm{KL}}(\theta,\theta')\le\delta$ 아래에서 $L_\theta(\theta')$ 를 최대화하는 $\theta'$ 를 한 번의 갱신으로 삼는다.

## 잘라낸 대리 목적

확률비를 $r(\theta')=\pi_{\theta'}(a\mid s)/\pi_\theta(a\mid s)$ 라 하고 $\epsilon\gt 0$ 을 고정한다. **PPO** 는 제약 없이 다음을 최대화한다.

$$L^{\mathrm{CLIP}}(\theta')\thinspace=\thinspace\mathbb E\lbrack\thinspace\min\lbrace r(\theta')A^\theta,\thinspace \mathrm{clip}(r(\theta'),1-\epsilon,1+\epsilon)\thinspace A^\theta\rbrace\thinspace\rbrack$$

$\mathrm{clip}$ 은 첫 인자를 구간 $\lbrack 1-\epsilon,1+\epsilon\rbrack$ 으로 자르는 함수다.

# 성질

## 성능 차이 항등식

두 정책의 성능 차이는 새 정책의 방문분포 아래에서 옛 정책의 이점을 평균한 것이다.

$$J(\theta')-J(\theta)\thinspace=\thinspace\frac{1}{1-\gamma}\thinspace\mathbb E\_{s\sim d^{\theta'},\thinspace a\sim\pi_{\theta'}}\lbrack A^\theta(s,a)\rbrack$$

증명의 요지. $A^\theta(s,a)=r(s,a)+\gamma \mathbb E\lbrack V^\theta(S')\rbrack-V^\theta(s)$ 를 새 정책의 경로에 대해 할인 합으로 더하면 $V^\theta$ 항들이 인접 시각끼리 상쇄되고 $-V^\theta(S_0)$ 만 남는다. 나머지 보상 합의 기댓값이 $J(\theta')$ 다.

대리 목적 $L_\theta(\theta')$ 는 이 식에서 방문분포 $d^{\theta'}$ 를 $d^\theta$ 로 바꾼 것이므로, 두 정책이 가까울 때만 성능 차이를 근사한다.

## 단조 개선의 하한

$\varepsilon=\max_{s,a}\lvert A^\theta(s,a)\rvert$ 와 $C=4\varepsilon\gamma/(1-\gamma)^2$ 에 대해 다음이 성립한다[^1].

$$J(\theta')\thinspace\ge\thinspace J(\theta) + L_\theta(\theta') - C\thinspace D^{\max}\_{\mathrm{KL}}(\theta,\theta')$$

$\theta'=\theta$ 에서 우변의 뒤 두 항이 $0$ 이므로 하한과 $J$ 가 같은 값을 갖는다. 따라서 우변을 최대화한 $\theta'$ 는 우변을 $J(\theta)$ 이상으로 만들고, 하한에서 $J(\theta')\ge J(\theta)$ 가 따라온다. 성능이 단조로 비감소하는 갱신이 이 부등식에서 나온다. TRPO 의 KL 제약은 벌점항 $C\thinspace D^{\max}\_{\mathrm{KL}}$ 을 제약으로 옮기고 최댓값을 평균으로 완화한 것이다.

## 자연 경사 방향

$\theta'=\theta+u$ 로 두고 목적을 1차, 제약을 2차까지 전개한다. $L_\theta$ 의 기울기는 정책 경사 $g$ 와 같고, $\bar D_{\mathrm{KL}}$ 의 Hessian 은 Fisher 정보행렬 $F$ 다.

$$u\thinspace=\thinspace\sqrt{\frac{2\delta}{g^\top F^{-1}g}}\thinspace F^{-1}g$$

$F^{-1}g$ 를 **자연 경사** 방향이라 한다. 좌표계를 바꿔도 이 방향이 변하지 않으므로, 직관 절에서 본 파라미터화 의존성이 사라진다. $F$ 를 만들지 않고 $Fv$ 꼴의 곱만으로 켤레기울기법이 $F^{-1}g$ 를 구한다.

## 잘라내기의 기울기

$A^\theta\gt 0$ 인 표본에서 $r\gt 1+\epsilon$ 이면 $L^{\mathrm{CLIP}}$ 의 두 항 가운데 잘린 쪽이 작으므로 최솟값이 $r$ 과 무관해지고 기울기가 $0$ 이다. $A^\theta\lt 0$ 이면 $r\lt 1-\epsilon$ 에서 같은 일이 일어난다. 확률비를 구간 밖으로 더 밀어내는 방향에만 기울기가 사라지고 되돌아오는 방향에는 남으므로, 갱신이 구간을 크게 벗어나지 않는다.

$\min$ 을 취하지 않고 잘라내기만 쓰면 구간 밖에서 되돌아오는 기울기도 사라져 한번 벗어난 표본이 교정되지 않는다.

# 활용

- **연속 행동 제어.** 관절 토크를 출력하는 Gauss 정책에서 [정책 경사](policy-gradient.md)의 보폭 문제가 직접 드러나므로, 보행과 조작 과제의 표준 알고리즘으로 쓰인다.
- **언어모형의 정렬.** 사람 선호로 학습한 보상 모형 아래에서 생성 정책을 올릴 때 PPO 를 쓰고, 참조 정책과의 KL divergence 를 보상에 벌점으로 더해 보폭을 한 번 더 묶는다.
- **행위자–비평자 구현.** [행위자–비평자](actor-critic.md)의 이점 추정에 잘라낸 목적을 얹어 한 묶음의 표본으로 여러 번 갱신한다. 중요도비가 표본을 재사용할 수 있게 하는 부분이다.
- **자연 경사법.** $F^{-1}g$ 는 분포족 위의 [KL divergence](kl-divergence.md)가 주는 2차 근사에서 나오므로, 같은 계산이 변분 추론과 최대가능도 추정의 Fisher scoring 에도 쓰인다.

[^1]: J. Schulman, S. Levine, P. Abbeel, M. Jordan, P. Moritz, "Trust Region Policy Optimization", Proceedings of the 32nd International Conference on Machine Learning (2015), 1889–1897. 하한과 $C$ 의 값, 평균 KL 로의 완화를 준다.

# 연관 문서

## 선수지식

- [정책 경사](policy-gradient.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #optimization #probability #information_theory
