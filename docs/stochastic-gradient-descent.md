# 확률적 경사하강법

# 개요

확률적 경사하강법은 손실의 기울기를 표본 일부로 추정해 내려가는 방법이다. 항이 $N$ 개인 평균 손실에서 한 걸음의 비용이 $N$ 과 무관해지고, 대신 기울기에 잡음이 섞인다. 그 잡음의 분산과 보폭 일정이 함께 수렴률을 정한다.

# 직관

자료 $100$ 만 개의 평균 제곱오차를 줄인다. [경사하강법](gradient-descent.md)은 한 걸음마다 $100$ 만 개 항의 기울기를 전부 계산해 평균을 내고, 그 평균으로 $x$ 를 $\eta$ 배만큼 옮긴다.

$100$ 만 번의 계산으로 얻는 것은 평균 하나다. 그 평균을 무작위로 고른 항 하나의 기울기로 대신한다. 균등하게 고르면 한 항의 기울기의 기댓값이 곧 전체 평균이므로 옮기는 방향이 평균적으로는 같고, 한 걸음의 비용은 $100$ 만분의 $1$ 이 된다. 같은 계산량으로 $100$ 만 걸음을 걷는다.

대신 한 표본의 기울기는 평균에서 떨어져 있다. 그 어긋남의 크기를 $\sigma^2$ 이라 하고, 최소점 $x^\ast$ 까지의 거리가 어떻게 변하는지 한 걸음 분량을 센다. 손실이 $\mu$ 강볼록이고 보폭 $\eta$ 가 작으면 다음이 나온다.

$$\mathbb E\Vert x_{k+1}-x^\ast\Vert^2\le(1-\mu\eta)\thinspace\mathbb E\Vert x_k-x^\ast\Vert^2+\eta^2\sigma^2$$

앞의 항은 거리를 $1-\mu\eta$ 배로 줄이고 뒤의 항은 매 걸음 $\eta^2\sigma^2$ 만큼 더한다. 두 힘이 맞서는 고정점은 $\eta\sigma^2/\mu$ 이고, 보폭이 고정이면 거리가 그 값 아래로는 내려가지 않는다. 보폭을 줄이면 이 값이 따라 줄지만 수축도 함께 느려지므로, 보폭을 $0$ 으로 보내되 너무 빨리 보내지 않는 일정이 있어야 한다.

# 정의

목적함수가 유한합이거나 기댓값 꼴이라 하자.

$$f(x)=\frac{1}{N}\sum_{i=1}^{N}f_i(x)\qquad\text{또는}\qquad f(x)=\mathbb E_\xi\lbrack F(x,\xi)\rbrack$$

**확률적 경사하강법**(stochastic gradient descent, SGD)은 매 단계 불편 기울기 추정량 $g_k$ 를 뽑아 갱신하는 반복이다.

$$x_{k+1}=x_k-\eta_k\thinspace g_k,\qquad\mathbb E\lbrack g_k\mid x_k\rbrack=\nabla f(x_k)$$

유한합에서 $i_k$ 를 균등하게 뽑고 $g_k=\nabla f_{i_k}(x_k)$ 로 두면 이 조건이 성립한다. $f=-\nabla g$ 로 보면 [확률근사](stochastic-approximation.md)의 Robbins–Monro 절차다.

## 미니배치

크기 $B$ 의 첨자 집합 $B_k$ 를 뽑아 $g_k=\frac{1}{B}\sum_{i\in B_k}\nabla f_i(x_k)$ 로 두면 기울기의 분산이 $\sigma^2/B$ 로 줄고 한 걸음의 비용이 $B$ 배가 된다.

## 보폭 조건

$$\sum_{k\ge 0}\eta_k=\infty,\qquad\sum_{k\ge 0}\eta_k^2\lt\infty$$

첫 조건은 어디서 출발해도 최소점까지 갈 수 있게 하고, 둘째 조건은 누적되는 잡음을 유한하게 묶는다.

# 성질

## 강볼록 손실의 수렴률

$f$ 가 $\mu$ 강볼록이고 $\nabla f$ 가 $L$ -Lipschitz 이며 $\mathbb E\Vert g_k-\nabla f(x_k)\Vert^2\le\sigma^2$ 이라 하자. $\eta_k=\Theta(1/(\mu k))$ 이면 다음이 성립한다[^1].

$$\mathbb E\Vert x_k-x^\ast\Vert^2=O\left(\frac{\sigma^2}{\mu^2 k}\right)$$

증명의 요지. 갱신식을 제곱해 조건부 기댓값을 취하면 직관 절의 점화식이 나온다. 보폭이 $c/k$ 이면 $(1-\mu\eta_k)$ 의 곱이 $k$ 의 음의 거듭제곱으로 줄고, 뒤의 항이 만드는 합이 조화급수의 꼬리와 같은 규모라서 두 기여가 모두 $1/k$ 다.

잡음이 없으면 같은 가정에서 경사하강법이 기하급수적으로 수렴한다. $1/k$ 로 느려진 원인은 오직 $\sigma^2$ 이다.

## 볼록 손실의 수렴률

강볼록성 없이 $f$ 가 볼록이고 기울기가 유계이면, $\eta_k=\Theta(1/\sqrt k)$ 와 반복값의 평균 $\bar x_k=\frac{1}{k}\sum_{j\lt k}x_j$ 에 대해 $\mathbb E\lbrack f(\bar x_k)-f^\ast\rbrack=O(1/\sqrt k)$ 다. 평균을 취하지 않은 $x_k$ 는 이 속도를 보장하지 않는다.

## Polyak–Ruppert 평균

보폭을 $\eta_k=\Theta(k^{-a})$ 로 두되 $1/2\lt a\lt 1$ 로 천천히 줄이고 반복값의 평균 $\bar x_k$ 를 답으로 쓰면, $\sqrt k\thinspace(\bar x_k-x^\ast)$ 가 정규분포로 수렴하고 그 공분산이 $\nabla^2f(x^\ast)^{-1}$ 로 정해지는 최소값에 이른다[^2]. 보폭을 $1/k$ 로 맞추지 않고도 최적의 점근 분산을 얻는다.

## 분산 축소

유한합에서는 각 항의 기울기를 마지막으로 계산한 값으로 기억해 두고 현재 표본의 기울기와의 차이로 보정할 수 있다. 추정량이 여전히 불편이면서 분산이 $0$ 으로 가므로, 고정 보폭에서 강볼록 손실의 기하급수적 수렴이 회복된다. 기억할 항이 $N$ 개이므로 자료가 무한히 들어오는 경우에는 쓰지 못한다.

# 활용

- **신경망 학습.** 역전파가 미니배치 하나의 기울기를 주고 그 기울기로 한 걸음 옮긴다. 배치 크기가 기울기의 분산과 한 걸음의 비용을 동시에 정한다.
- **온라인 학습.** 자료가 한 번에 하나씩 들어오고 다시 보지 않는 상황에서 기댓값 꼴의 목적함수를 그대로 최소화한다.
- **변분 추론.** [변분 오토인코더](variational-autoencoder.md)에서 목적함수가 잠재변수에 대한 기댓값이고, 재모수화가 그 기댓값의 불편 기울기 추정량을 만든다.
- **강화학습.** [정책 경사](policy-gradient.md)의 갱신이 점수 함수 추정량을 기울기로 쓴 이 방법이다.

[^1]: A. Nemirovski, A. Juditsky, G. Lan, A. Shapiro, "Robust Stochastic Approximation Approach to Stochastic Programming", SIAM Journal on Optimization **19** (2009), 1574–1609.

[^2]: B. T. Polyak and A. B. Juditsky, "Acceleration of Stochastic Approximation by Averaging", SIAM Journal on Control and Optimization **30** (1992), 838–855.

# 연관 문서

## 선수지식

- [경사하강법](gradient-descent.md)
- [확률근사](stochastic-approximation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #probability #statistics
