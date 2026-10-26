# M-추정량

# 개요

**M-추정량(M-estimator)** 은 표본마다 손실 $\rho(X_i,\theta)$ 를 매기고 그 합을 최소화하는 $\theta$ 로 모수를 추정하는 추정량이다. 손실을 음의 로그가능도로 두면 [최대가능도 추정](maximum-likelihood.md)이고, 제곱 손실이면 표본평균, 절댓값 손실이면 표본 중앙값이다. P. J. Huber 가 1964 년에 멀리 떨어진 관측값에 덜 흔들리는 위치 추정을 위해 도입했다[^1]. 정칙 조건 아래 점근 정규이고, 점근 분산은 손실의 기울기 $\psi$ 의 두 모멘트로 정해진다.

# 직관

관측값 $1,2,3,4,100$ 의 중심을 추정한다. 평균은 $22$ 이고, $100$ 하나가 나머지 넷과 동떨어진 값을 만든다. 중앙값은 $3$ 이고, $100$ 을 $1000$ 으로 바꿔도 $3$ 이다. 그 대신 중앙값은 $4$ 를 $4.5$ 로 바꾸어도 $3$ 에 머물러 가운데 값들의 크기를 쓰지 않는다.

두 추정을 손실로 비교한다. 평균은 $\sum_i(x_i-\theta)^2$ 를 최소화하고, $\theta$ 로 미분해 $0$ 으로 두면 $\sum_i(x_i-\theta)=0$ 이다. 각 관측값이 $\theta$ 를 자기와의 차이만큼 끌어당기는 식이어서 $100$ 이 $97$ 만큼 당긴다. 중앙값은 $\sum_i\lvert x_i-\theta\rvert$ 를 최소화하고, 같은 식에서 차이 대신 그 부호 $\pm1$ 이 들어가므로 모든 관측값이 같은 크기로 당긴다.

두 식의 중간을 쓴다. 차이가 $2$ 이하이면 차이만큼, $2$ 를 넘으면 $2$ 만큼 당기게 하면 $\theta=3$ 에서 당기는 양이 $-2,-1,0,1,2$ 로 합이 $0$ 이므로 추정값은 $3$ 이다. $100$ 은 $2$ 만큼만 당기므로 $1000$ 으로 바꿔도 추정값이 그대로다. $4$ 를 $4.5$ 로 바꾸면 추정값은 $19/6\approx 3.17$ 로 움직여 가운데 값들의 크기가 반영된다.

# 정의

## M-추정량과 Z-추정량

독립 동일분포 표본 $X_1,\dots,X_n$ 과 모수공간 $\Theta\subseteq\mathbb R^p$ 위의 손실 $\rho(x,\theta)$ 에 대해 M-추정량은

$$
\hat\theta_n\in\mathop{\mathrm{arg\thinspace min}}\_{\theta\in\Theta}\sum_{i=1}^n\rho(X_i,\theta)
$$

이다. $\rho$ 가 $\theta$ 로 미분가능하면 $\psi=\nabla_\theta\rho$ 로 두고 추정방정식

$$
\sum_{i=1}^n\psi(X_i,\hat\theta_n)=0
$$

의 해로 정의하기도 하며, 이 꼴을 **Z-추정량(Z-estimator)** 이라 한다. 위치 모수에서는 $\rho(x,\theta)=\rho(x-\theta)$ 꼴을 쓰고, $\psi=\rho'$ 로 두면 추정방정식은 $\sum_i\psi(X_i-\hat\theta_n)=0$ 이다.

## Huber 손실

$c\gt 0$ 에 대해 **Huber 손실(Huber loss)** 은

$$
\rho_c(u)=\begin{cases}u^2/2&\lvert u\rvert\le c\cr c\lvert u\rvert-c^2/2&\lvert u\rvert\gt c\end{cases},\qquad\psi_c(u)=\max(-c,\min(c,u))
$$

이다. 직관 절의 추정값은 $c=2$ 인 Huber 위치 추정량이다.

# 성질

## 일치성

정리. $\theta_0$ 이 $\theta\mapsto E\rho(X,\theta)$ 의 유일한 최소점이고 $\Theta$ 가 콤팩트하며 $\frac1n\sum_i\rho(X_i,\theta)$ 가 $E\rho(X,\theta)$ 에 $\theta$ 에 대해 고르게 확률수렴하면 $\hat\theta_n\to\theta_0$ 이 확률수렴한다.

증명의 요지. 고른 수렴으로 표본 손실의 최소점이 기대 손실을 $\theta_0$ 근처에서보다 크게 하는 영역에 있을 확률이 $0$ 으로 간다. 고른 수렴은 손실의 족 $\lbrace\rho(\cdot,\theta)\rbrace$ 에 대한 [Glivenko–Cantelli 정리](glivenko-cantelli.md)의 성질이고, [경험 과정](empirical-process.md)이 그 조건을 준다.

## 점근 정규성

정리(Huber). 정칙 조건 아래 $A=E\thinspace\nabla_\theta\psi(X,\theta_0)$ 가 가역이고 $B=E\thinspace\psi(X,\theta_0)\psi(X,\theta_0)^{\mathsf T}$ 이면 다음이 성립한다[^2].

$$
\sqrt n\thinspace(\hat\theta_n-\theta_0)\xrightarrow{d}N\bigl(0,\thinspace A^{-1}BA^{-\mathsf T}\bigr)
$$

증명의 요지. 추정방정식을 $\theta_0$ 에서 Taylor 전개하면 $0\approx\frac1n\sum_i\psi(X_i,\theta_0)+A(\hat\theta_n-\theta_0)$ 이다. 첫 항에 [중심극한정리](central-limit-theorem.md)를 쓰면 $\sqrt n$ 배가 $N(0,B)$ 로 가고, $A^{-1}$ 을 곱해 결론이 나온다.

$A^{-1}BA^{-\mathsf T}$ 를 **샌드위치 분산(sandwich variance)** 이라 한다. $\rho$ 가 참 분포의 음의 로그가능도이면 $A$ 와 $B$ 가 모두 [Fisher 정보](fisher-information.md) $I(\theta_0)$ 이고 분산이 $I(\theta_0)^{-1}$ 이 된다. 모형이 틀렸을 때는 $A\ne B$ 이고, 샌드위치 분산의 표본 추정이 최대가능도 추정량의 분산을 바르게 추정한다.

위치 모수에서 분산은 $E\psi(X-\theta_0)^2/\bigl(E\psi'(X-\theta_0)\bigr)^2$ 이다. 표준정규 분포에서 평균은 $1$, 중앙값은 $\pi/2\approx 1.571$ 이고, $c=1.345$ 인 Huber 추정량은 약 $1.05$ 다.

## 영향 함수

**영향 함수(influence function)** 는 분포 $F$ 에 점 $x$ 의 질량을 조금 섞었을 때 추정값이 변하는 비율이다[^3]. M-추정량에서는

$$
\mathrm{IF}(x)=-A^{-1}\psi(x,\theta_0)
$$

이다. $\psi$ 가 유계이면 관측값 하나가 추정값에 미치는 영향이 유계다. 평균의 $\psi(u)=u$ 는 유계가 아니고, Huber 의 $\psi_c$ 는 $c$ 로 막힌다.

## Huber 의 최소최대 성질

정리(Huber). 표준정규 분포에 비율 $\varepsilon$ 만큼 임의의 대칭 분포를 섞은 분포족 $\lbrace(1-\varepsilon)\Phi+\varepsilon H\rbrace$ 에서, 최대 점근 분산을 가장 작게 하는 위치 M-추정량은 $\varepsilon$ 에 따라 정해지는 $c$ 의 Huber 추정량이다[^1].

증명의 요지. 이 분포족에서 Fisher 정보가 가장 작은 분포는 가운데가 정규이고 꼬리가 지수인 분포이고, 그 분포의 최대가능도 추정량이 Huber 추정량이다. 이 쌍이 점근 분산의 안장점을 이룬다.

## 계산

$\rho$ 가 볼록이면 목적함수가 볼록이므로 국소 최소가 전역 최소다. 회귀에서 잔차 $r_i$ 에 가중치 $w_i=\psi(r_i)/r_i$ 를 두면 추정방정식이 가중 최소제곱의 정규방정식이 되므로, 가중치와 계수를 번갈아 갱신하는 반복 가중최소제곱(iteratively reweighted least squares)으로 푼다. [일반화선형모형](generalized-linear-models.md)의 적합과 [기하 중앙값](geometric-median.md)의 Weiszfeld 반복이 같은 꼴이다.

# 활용

- 강건 회귀. [선형회귀](linear-regression.md)의 제곱 손실을 Huber 손실로 바꾸면 반응에 섞인 큰 오차의 영향이 막힌다.
- 모형이 틀린 추론. 최대가능도 추정량의 표준오차를 샌드위치 분산으로 계산하면 모형이 틀려도 점근적으로 타당한 신뢰구간이 나온다.
- 기계학습의 손실. 회귀 모형의 학습에서 Huber 손실이 이상치가 있는 자료의 손실로 쓰이고, 경험 위험 최소화의 해가 M-추정량이다.

[^1]: P. J. Huber, "Robust estimation of a location parameter", Annals of Mathematical Statistics 35 (1964), 73–101.
[^2]: P. J. Huber, "The behavior of maximum likelihood estimates under nonstandard conditions", Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability 1 (1967), 221–233.
[^3]: F. R. Hampel, "The influence curve and its role in robust estimation", Journal of the American Statistical Association 69 (1974), 383–393.

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #optimization #probability
