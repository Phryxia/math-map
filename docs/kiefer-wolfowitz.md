# Kiefer–Wolfowitz 절차

# 개요

Kiefer–Wolfowitz 절차는 함수의 기울기를 얻을 수 없고 잡음 섞인 함숫값만 관측할 때 최솟점을 찾는 반복법이다. 두 점에서 잰 값의 차를 두 점 사이 거리로 나눠 기울기 대신 쓰고, 그 거리와 보폭을 함께 줄여 차분의 편향과 잡음의 증폭을 동시에 없앤다.

# 직관

재고 수준 $\theta$ 를 정해 하루를 운영하면 그날 비용이 나온다. 수요가 매일 다르므로 같은 $\theta$ 에서도 비용이 다르고, 평균 비용 $g(\theta)$ 를 최소로 하는 $\theta$ 를 찾으려 한다. [경사하강법](gradient-descent.md)을 쓰려면 $g'(\theta)$ 가 필요한데 수요 분포를 모르니 $g$ 의 식이 없고, 하루를 운영해 얻는 것은 비용 하나뿐이다.

두 재고 수준 $\theta+c$ 와 $\theta-c$ 로 하루씩 운영해 비용 $Y^+$ 와 $Y^-$ 를 얻고 $(Y^+-Y^-)/(2c)$ 를 기울기로 쓴다. 이 값의 기댓값은 $(g(\theta+c)-g(\theta-c))/(2c)$ 이고, $g$ 를 Taylor 전개하면 $g'(\theta)+c^2g'''(\theta)/6+o(c^2)$ 다. $c$ 를 작게 잡으면 참 기울기에 가까워진다.

하루 비용의 흔들림이 표준편차 $\sigma$ 라면 $(Y^+-Y^-)/(2c)$ 의 표준편차는 $\sigma/(c\sqrt 2)$ 다. $c=0.01$ 이고 $\sigma=1$ 이면 기울기 추정값이 참값에서 $70$ 쯤 벗어난다. $c$ 를 줄여 없앤 $c^2$ 만큼의 치우침이 $1/c$ 배로 커진 흔들림으로 돌아온다.

한 걸음의 흔들림은 보폭으로 누른다. 걸음마다 $c_t$ 를 줄여 치우침을 없애고, 보폭 $\alpha_t$ 를 $c_t$ 보다 빨리 줄여 걸음마다 더해지는 흔들림 $\alpha_t\sigma/c_t$ 의 제곱합이 유한하게 한다. 이 두 수열에 거는 조건이 $c_t\to 0$ 과 $\sum_t(\alpha_t/c_t)^2\lt\infty$ 다.

# 정의

## Kiefer–Wolfowitz 절차

$g:\mathbb R\to\mathbb R$ 의 최솟점을 찾는 **Kiefer–Wolfowitz 절차**는 다음 반복이다[^1].

$$\theta_{t+1}=\theta_t-\alpha_t\thinspace\frac{Y_t^+-Y_t^-}{2c_t}$$

$Y_t^\pm$ 는 $\theta_t\pm c_t$ 에서 얻은 관측이고 $\mathbb E\lbrack Y_t^\pm\mid\mathcal F_t\rbrack=g(\theta_t\pm c_t)$ 를 만족한다. $\mathcal F_t$ 는 시각 $t$ 까지의 관측이 생성하는 $\sigma$ 대수다. 보폭 $\alpha_t$ 와 차분폭 $c_t$ 는 양수이고 다음을 만족한다.

$$\alpha_t\to 0,\qquad c_t\to 0,\qquad \sum_t\alpha_t=\infty,\qquad \sum_t\alpha_t c_t^2\lt\infty,\qquad \sum_t\Bigl(\frac{\alpha_t}{c_t}\Bigr)^2\lt\infty$$

$\alpha_t=a/t$ 와 $c_t=c\thinspace t^{-1/6}$ 이 네 조건을 모두 만족한다.

## 좌표별 유한차분

$g:\mathbb R^d\to\mathbb R$ 에서는 좌표마다 차분을 잰다. $e_i$ 를 $i$ 번째 표준기저 벡터라 하면 기울기 추정량의 $i$ 번째 성분은 다음이다.

$$\hat g_{t,i}=\frac{Y(\theta_t+c_te_i)-Y(\theta_t-c_te_i)}{2c_t}$$

한 걸음에 관측을 $2d$ 번 쓴다.

## 동시 섭동

$\Delta_t=(\Delta_{t,1},\dots,\Delta_{t,d})$ 의 성분을 서로 독립이고 $\lbrace -1,1\rbrace$ 에서 같은 확률로 값을 갖는 [확률변수](random-variables.md)로 잡는다. $\theta_t+c_t\Delta_t$ 와 $\theta_t-c_t\Delta_t$ 두 점에서만 관측 $Y_t^\pm$ 를 얻고 기울기 추정량을 다음으로 둔다.

$$\hat g_{t,i}=\frac{Y_t^+-Y_t^-}{2c_t\Delta_{t,i}}$$

이 추정량을 쓰는 절차가 **동시 섭동 확률근사**(simultaneous perturbation stochastic approximation, SPSA)다[^3]. 차원과 무관하게 한 걸음에 관측을 두 번 쓴다.

```javascript
// SPSA 한 걸음. observe(x) 는 g(x) 에 잡음이 섞인 관측 하나를 돌려준다.
function spsaStep(theta, t, observe, a, c) {
  const alpha = a / t;
  const ct = c / Math.pow(t, 1 / 6);
  const delta = theta.map(() => (Math.random() < 0.5 ? -1 : 1));
  const yPlus = observe(theta.map((x, i) => x + ct * delta[i]));
  const yMinus = observe(theta.map((x, i) => x - ct * delta[i]));
  const diff = (yPlus - yMinus) / (2 * ct);
  return theta.map((x, i) => x - alpha * diff / delta[i]);
}
```

# 성질

## 차분 추정량의 편향과 분산

$g$ 가 세 번 연속미분가능하고 관측 잡음의 조건부 분산이 $\sigma^2$ 로 유계이면 다음이 성립한다.

$$\mathbb E\lbrack\hat g_t\mid\mathcal F_t\rbrack=g'(\theta_t)+\frac{c_t^2}{6}g'''(\theta_t)+o(c_t^2),\qquad \mathrm{Var}(\hat g_t\mid\mathcal F_t)\le\frac{\sigma^2}{2c_t^2}$$

편향은 $O(c_t^2)$ 이고 표준편차는 $O(1/c_t)$ 다. 전방차분 $(Y(\theta_t+c_t)-Y(\theta_t))/c_t$ 를 쓰면 편향이 $O(c_t)$ 로 커지므로 중앙차분을 쓴다.

## 수렴

$g$ 가 유일한 최솟점 $\theta^\ast$ 를 갖고 $\theta\ne\theta^\ast$ 에서 $(\theta-\theta^\ast)g'(\theta)\gt 0$ 이며 위 보폭 조건이 성립하면, $\theta_t\to\theta^\ast$ 가 확률 $1$ 로 성립한다.

증명의 요지. 기울기 추정량을 $\hat g_t=g'(\theta_t)+b_t+\xi_t$ 로 쪼갠다. $b_t$ 는 $O(c_t^2)$ 인 편향이고 $\xi_t$ 는 조건부 평균이 $0$ 이며 조건부 분산이 $O(1/c_t^2)$ 인 항이다. 그러면 반복은 $f=-g'$ 인 [Robbins–Monro 절차](stochastic-approximation.md)에 두 교란항이 더해진 꼴이다. $\sum_t\alpha_t c_t^2\lt\infty$ 가 편향의 누적을 유한하게 묶고 $\sum_t(\alpha_t/c_t)^2\lt\infty$ 가 잡음의 누적을 유한하게 묶으므로, Robbins–Monro 절차의 supermartingale 논법이 그대로 적용된다.

## 수렴 속도

$\alpha_t=a/t$ 와 $c_t=c\thinspace t^{-1/6}$ 으로 잡고 $g$ 가 $\theta^\ast$ 에서 세 번 미분 가능하면 $t^{1/3}(\theta_t-\theta^\ast)$ 가 정규분포로 수렴한다[^2]. 오차는 $O(t^{-1/3})$ 이다.

기울기의 불편추정을 쓰는 Robbins–Monro 절차의 오차는 $O(t^{-1/2})$ 다. 차분을 쓰면 편향 $c_t^2$ 와 잡음 $1/c_t$ 를 함께 억제해야 하므로 $c_t$ 를 줄이는 속도가 양쪽에서 제한된다. 보폭 일정을 $c_t=c\thinspace t^{-\gamma}$ 로 두면 편향에서 오는 오차가 $t^{-2\gamma}$, 잡음에서 오는 오차가 $t^{-(1-2\gamma)/2}$ 이고, 두 지수가 같아지는 $\gamma=1/6$ 에서 $t^{-1/3}$ 이 나온다.

## 동시 섭동의 관측 비용

SPSA 의 오차도 $O(t^{-1/3})$ 이고 점근 정규성의 공분산이 차원 $d$ 에 의존하지 않는다. 좌표별 유한차분이 한 걸음에 $2d$ 번, SPSA 가 두 번 관측하므로 관측 횟수를 같게 두면 SPSA 가 $d$ 배 많은 걸음을 밟는다. 관측 횟수를 기준으로 비교하면 SPSA 의 오차가 $d$ 차원에서 $d^{1/3}$ 배 작다.

증명의 요지. $\Delta_{t,i}$ 가 평균 $0$ 이고 서로 독립이므로 $\mathbb E\lbrack\Delta_{t,j}/\Delta_{t,i}\rbrack=0$ 이 $j\ne i$ 에서 성립한다. $Y_t^+-Y_t^-$ 를 전개한 $2c_t\sum_j\Delta_{t,j}\partial_jg(\theta_t)$ 를 $2c_t\Delta_{t,i}$ 로 나누고 조건부 기댓값을 취하면 $j\ne i$ 인 항이 사라져 $\partial_ig(\theta_t)$ 만 남는다.

# 활용

- **시뮬레이션 최적화.** 대기열이나 재고 모형의 설계변수를 시뮬레이터의 출력만으로 조정한다. 기울기를 유도할 식이 없고 한 번의 실행이 잡음 섞인 함숫값 하나를 주는 상황이 정의 절의 가정과 같다.
- **영차 최적화.** 함숫값 질의만 허용하는 최적화를 영차(zeroth-order) 최적화라 하고, 동시 섭동의 기울기 추정량이 그 표준 도구다. 무작위 방향으로 함숫값 차를 재는 진화전략의 갱신도 같은 추정량을 쓴다.
- **보폭 일정의 비교.** 기울기의 불편추정을 얻을 수 있으면 [확률적 경사하강법](stochastic-gradient-descent.md)을 쓴다. 두 절차의 보폭 조건이 같고 차분폭 조건만 더 붙으므로, 수렴 속도의 차이가 기울기를 직접 얻는지에서만 온다.
- **제어 매개변수 조정.** 신호 제어나 공정 제어의 매개변수를 운영 중에 조정할 때 성능 지표의 기울기를 모형으로 얻을 수 없으므로 동시 섭동으로 추정한다.

[^1]: J. Kiefer, J. Wolfowitz, *Stochastic estimation of the maximum of a regression function*, Annals of Mathematical Statistics **23** (1952), 462–466.
[^2]: K. L. Chung, *On a stochastic approximation method*, Annals of Mathematical Statistics **25** (1954), 463–483. 차분폭 지수 $1/6$ 에서 $t^{1/3}$ 규모의 점근 정규성을 증명한다.
[^3]: J. C. Spall, *Multivariate stochastic approximation using a simultaneous perturbation gradient approximation*, IEEE Transactions on Automatic Control **37** (1992), 332–341.

# 연관 문서

## 선수지식

- [확률근사](stochastic-approximation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #statistics #probability
