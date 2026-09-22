# 확률근사

# 개요

확률근사는 함수값을 직접 잴 수 없고 잡음이 섞인 관측만 얻을 때 방정식 $f(\theta)=0$ 의 해를 찾는 반복법이다. 관측 하나마다 보폭을 줄여 가며 한 걸음씩 움직이고, 보폭의 합이 발산하되 제곱합이 수렴하면 잡음이 상쇄되어 해로 간다.

# 직관

약의 투여량 $\theta$ 를 바꿔 가며 반응률이 50% 가 되는 지점을 찾는다. 투여량마다 반응률 $M(\theta)$ 가 정해져 있고 $M$ 은 증가함수지만 식을 모른다. 한 사람에게 투여하면 반응했는지 아닌지 하나만 얻는다.

같은 투여량으로 여러 사람을 시험해 반응률을 추정한 뒤 이분법으로 좁힐 수 있다. 그러려면 투여량 하나마다 표본을 많이 써야 하고, 버려지는 투여량에도 같은 수의 표본이 든다.

관측 하나는 $M(\theta)$ 에서 크게 벗어나지만 그 기댓값은 $M(\theta)$ 다. 한 사람의 결과 $Y$ 를 보고 $\theta$ 를 $Y-0.5$ 의 반대 방향으로 조금 옮기면, 평균적으로는 $M(\theta)-0.5$ 의 반대 방향으로 옮긴 것이 된다. 옮기는 양을 작게 하면 한 번의 잡음이 위치를 크게 흔들지 못한다.

보폭을 너무 빨리 줄이면 출발점에서 멀리 못 가고, 너무 천천히 줄이면 잡음이 계속 흔든다. 보폭의 합이 무한이어야 어디든 갈 수 있고 제곱합이 유한해야 잡음의 누적이 멈춘다.

# 정의

## Robbins–Monro 절차

$f:\mathbb R^d\to\mathbb R^d$ 의 값을 직접 얻을 수 없고, 각 $\theta$ 에서 $\mathbb E\lbrack Y(\theta)\rbrack=f(\theta)$ 인 [확률변수](random-variables.md) $Y(\theta)$ 만 뽑을 수 있다고 하자. $f(\theta)=0$ 의 해를 찾는 **Robbins–Monro 절차**는 다음 반복이다[^1].

$$\theta_{t+1}=\theta_t+\alpha_t\thinspace Y_t,\qquad Y_t=f(\theta_t)+w_t$$

$w_t$ 는 $\mathbb E\lbrack w_t\mid\mathcal F_t\rbrack=0$ 인 잡음이고 $\mathcal F_t$ 는 시각 $t$ 까지의 관측이 생성하는 $\sigma$ 대수다. 보폭 $\alpha_t$ 에는 다음을 요구한다.

$$\sum_{t}\alpha_t=\infty,\qquad \sum_{t}\alpha_t^2\lt\infty$$

$\alpha_t=1/t$ 가 이 조건을 만족하는 대표적인 선택이다.

## Kiefer–Wolfowitz 절차

$f$ 가 어떤 함수 $g$ 의 기울기이고 $g$ 의 값만 잴 수 있으면, 차분으로 기울기를 흉내 낸다. 차분폭 $c_t$ 를 $\sum_t(\alpha_t/c_t)^2\lt\infty$ 이면서 $c_t\to 0$ 이 되게 줄인다.

# 성질

## 수렴

$f$ 가 유일한 해 $\theta^\ast$ 를 갖고 $(\theta-\theta^\ast)^{\mathsf T}f(\theta)\lt 0$ 이 $\theta\ne\theta^\ast$ 에서 성립하며 잡음의 조건부 분산이 $\mathbb E\lbrack\Vert w_t\Vert^2\mid\mathcal F_t\rbrack\le K(1+\Vert\theta_t\Vert^2)$ 로 유계이면, $\theta_t\to\theta^\ast$ 가 확률 $1$ 로 성립한다.

증명의 요지. $V_t=\Vert\theta_t-\theta^\ast\Vert^2$ 를 전개하면 다음이 나온다.

$$\mathbb E\lbrack V_{t+1}\mid\mathcal F_t\rbrack\le V_t+2\alpha_t(\theta_t-\theta^\ast)^{\mathsf T}f(\theta_t)+\alpha_t^2 K(1+\Vert\theta_t\Vert^2)$$

가운데 항은 음수이고 마지막 항은 $\sum\alpha_t^2\lt\infty$ 이므로 더해도 유한하다. 따라서 $V_t$ 에 유한한 보정을 더한 과정이 음이 아닌 [supermartingale](martingales.md)이고, supermartingale 수렴 정리로 $V_t$ 가 수렴한다. 극한이 양수라면 가운데 항의 합이 $\sum\alpha_t=\infty$ 때문에 $-\infty$ 로 발산해 $V_t\ge 0$ 에 어긋나므로 극한은 $0$ 이다.

## 수렴 속도

$f$ 가 $\theta^\ast$ 에서 미분 가능하고 $\alpha_t=a/t$ 이면 $\sqrt t\thinspace(\theta_t-\theta^\ast)$ 가 정규분포로 수렴한다. 점근 분산은 $a$ 에 따라 달라지고, $a$ 가 너무 작으면 발산한다. 보폭을 $t^{-\beta}$ 로 $1/2\lt\beta\lt 1$ 에서 잡고 반복값을 평균하면 $a$ 를 고르지 않고도 최적의 점근 분산에 닿는다.

## 축약사상 판본

$f(\theta)=\mathcal T\theta-\theta$ 이고 $\mathcal T$ 가 어떤 노름에서 축약사상이면 위 조건이 자동으로 성립한다. [축약사상 고정점 정리](banach-fixed-point.md)의 유일한 고정점이 $\theta^\ast$ 이고, 축약성이 가운데 항의 부호를 준다.

# 활용

- **확률적 경사하강법.** 손실의 기울기를 표본 하나로 대신하는 [경사하강법](gradient-descent.md)이 $f=-\nabla g$ 인 Robbins–Monro 절차다. 보폭 일정을 정하는 규칙이 위 두 조건이다.
- **시간차 학습.** [Q 학습](q-learning.md)의 갱신은 $\mathcal T$ 가 Bellman 작용소인 축약사상 판본이다. 수렴 증명이 위 정리를 그대로 쓴다.
- **분위수 추정.** 분포를 모르고 표본만 얻을 때 $p$ 분위수는 $\mathbb E\lbrack\mathbf 1\lbrace X\le\theta\rbrace\rbrack-p=0$ 의 해이고, 표본 하나마다 갱신하는 절차가 그 값을 따라간다.
- **적응 제어.** 시스템의 매개변수를 모르는 채 관측으로 추정하며 동시에 제어하는 설계가 같은 형태의 반복을 쓴다.

[^1]: H. Robbins, S. Monro, *A stochastic approximation method*, Ann. Math. Statist. **22** (1951), 400–407.

# 연관 문서

## 선수지식

- [Martingale](martingales.md)

## 더 알아보기

- [Q 학습](q-learning.md)

#probability #optimization #statistics #machine_learning
