# 적정 점수 규칙

# 개요

**적정 점수 규칙(proper scoring rule)** 은 확률 예보를 채점할 때, 예보하는 사람이 자기가 믿는 확률을 그대로 발표해야 기대 손실이 가장 작아지는 채점 규칙이다. 비 올 확률을 $0.7$ 로 믿는 예보관을 틀린 크기 그대로 채점하면 $1$ 을 발표할 때 기대 손실이 가장 작으므로, 예보관은 믿음과 다른 값을 발표한다. 틀린 크기를 제곱해 채점하면 기대 손실이 $p=0.7$ 에서 가장 작으므로, 이런 규칙으로 채점하면 믿는 확률을 그대로 받는다.

# 직관

내일 비가 올 확률이 $0.7$ 이라고 믿는 예보관이 확률 $p$ 를 발표한다. 비가 오면 $1-p$, 오지 않으면 $p$ 만큼 틀렸다고 보고 그 크기를 손실로 매기면, 기대 손실은 $0.7(1-p)+0.3p=0.7-0.4p$ 다. 이 값은 $p=1$ 에서 가장 작으므로 예보관은 믿는 $0.7$ 대신 $1$ 을 발표한다.

틀린 크기를 제곱해 손실로 매기면 기대 손실은 $0.7(1-p)^2+0.3p^2$ 이다. $p$ 로 미분하면 $-1.4(1-p)+0.6p$ 이고 $p=0.7$ 에서 $0$ 이다. 이 손실 아래서는 믿는 확률을 그대로 발표할 때 기대 손실이 가장 작다. 앞의 손실은 적정하지 않고, 뒤의 손실은 적정하다.

# 정의

결과의 집합 $\Omega$ 위의 확률분포 모임 $\mathcal P$ 에서 예측 $P\in\mathcal P$ 를 고른다. **점수 규칙(scoring rule)** 은 함수 $S:\mathcal P\times\Omega\to\mathbb R\cup\lbrace\infty\rbrace$ 이고, 값이 작을수록 좋은 손실로 쓴다. $S(P,Q)=E_{Y\sim Q}S(P,Y)$ 로 쓴다.

모든 $P,Q\in\mathcal P$ 에서 $S(Q,Q)\le S(P,Q)$ 이면 $S$ 가 **적정(proper)** 하다고 한다. 적정이고 등호가 $P=Q$ 일 때만 성립하면 **엄격히 적정(strictly proper)** 하다고 한다.

직관 절의 예보는 $\Omega=\lbrace\text{비},\text{맑음}\rbrace$ 이고 $Q$ 가 비에 $0.7$ 을 주는 경우다. 틀린 크기 $S(p,y)=\lvert p-\mathbf 1\lbrace y=\text{비}\rbrace\rvert$ 는 $S(1,Q)=0.3\lt S(Q,Q)=0.42$ 이므로 적정이 아니다. 제곱 손실은 $p=0.7$ 에서만 최소이므로 엄격히 적정이다.

결과가 유한 개 $\lbrace 1,\dots,m\rbrace$ 이고 예측이 확률 벡터 $p$ 일 때 대표적인 규칙은 다음과 같다.

| 이름 | 점수 | 기대 초과 손실 |
| --- | --- | --- |
| 로그 점수 | $-\log p_y$ | $\sum_kq_k\log(q_k/p_k)$ |
| Brier 점수 | $\sum_k(p_k-\mathbf 1\lbrace y=k\rbrace)^2$ | $\sum_k(p_k-q_k)^2$ |

기대 초과 손실은 $S(p,q)-S(q,q)$ 이다. 비 올 확률 $0.7$ 을 예보했는데 비가 오면 로그 점수는 $-\log 0.7\approx 0.357$ 이고, Brier 점수는 두 결과에 대해 더해 $(0.7-1)^2+(0.3-0)^2=0.18$ 이다.

[실수](real-numbers.md) 값 결과의 예측 분포함수 $F$ 에는 **연속 순위 확률 점수(continuous ranked probability score, CRPS)** $\int_{\mathbb R}(F(x)-\mathbf 1\lbrace y\le x\rbrace)^2\thinspace dx$ 를 쓴다. 예측이 한 점 $a$ 에 모인 분포이면 피적분함수는 $a$ 와 $y$ 사이에서만 $1$ 이므로 CRPS 는 $\lvert y-a\rvert$ 다.

# 성질

## 볼록 함수에 의한 표현

Savage 와 Gneiting–Raftery 의 표현 정리는 다음이다. $S$ 가 적정인 것은 $\mathcal P$ 위의 [볼록](convexity.md) 함수 $G$ 와 그 부분기울기 $G'(P)$ 가 있어 다음을 만족하는 것과 동치다.[^1][^2]

$$
S(P,y)=-G(P)-\bigl\langle G'(P),\thinspace\delta_y-P\bigr\rangle
$$

$G$ 가 순볼록이면 $S$ 는 엄격히 적정이다.

증명의 요지는 다음과 같다. 위의 꼴이면 $S(P,Q)-S(Q,Q)=G(Q)-G(P)-\langle G'(P),Q-P\rangle$ 이고, 볼록 함수는 접선 위에 있으므로 이 값이 $0$ 이상이다. 거꾸로 $S$ 가 적정이면 $-S(Q,Q)$ 는 $Q$ 의 일차함수 $-S(P,\cdot)$ 들의 상한이므로 볼록이고, 이것을 $G$ 로 잡는다.

$G(p)=\sum_kp_k\log p_k$ 이면 로그 점수가 나오고, $G(p)=\sum_kp_k^2$ 이면 Brier 점수에서 상수 $1$ 을 뺀 것이 나온다. 기대 초과 손실 $G(Q)-G(P)-\langle G'(P),Q-P\rangle$ 은 $G$ 의 [Bregman divergence](bregman-divergence.md)이고, 로그 점수에서는 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence) $\sum_kq_k\log(q_k/p_k)$ 다.

## 국소성

점수가 실제로 일어난 결과의 확률 $p_y$ 에만 의존하면 **국소적(local)** 이라 한다.

Bernardo 는 다음을 증명했다. 결과가 셋 이상일 때 국소적이고 매끄러운 엄격히 적정 점수 규칙은 $-a\log p_y+b(y)$, $a\gt 0$ 꼴뿐이다.[^3] Brier 점수는 $p_y$ 외의 성분에도 의존하므로 국소적이 아니다.

## 최대가능도와의 관계

모수 모형 $P_\theta$ 에 대해 $\sum_iS(P_\theta,y_i)$ 를 최소화하는 추정량은 [M-추정량](m-estimators.md)이고, $S$ 가 엄격히 적정이면 정칙 조건 아래 표본이 커질 때 참 모수로 확률수렴한다. 로그 점수를 쓰면 [최대가능도 추정](maximum-likelihood.md)이다.

## 함수값의 유도

분포 전체 대신 평균이나 분위수 같은 값 하나를 예측할 때, 기대 손실을 최소로 하는 예측이 그 값이 되는 손실이 있으면 그 값이 유도 가능(elicitable)하다고 한다. 평균은 제곱 오차로, $\tau$-분위수는 [분위수 회귀](quantile-regression.md)의 확인 함수(check function)로 유도되고, [기대 결손](expected-shortfall.md)은 단독으로는 유도 가능하지 않다. 평균을 유도하는 손실은 Bregman divergence 꼴뿐이다.[^4]

# 활용

- 일기예보 검증. 강수 확률 예보의 성능을 Brier 점수로 잰다. Brier 가 1950 년에 이 목적으로 도입했다.[^5]
- 분류기 학습. 신경망 분류기의 교차 엔트로피 손실이 로그 점수이고, 그 최소화가 최대가능도 추정이다.
- 확률 예측의 비교. 두 예측 체계의 평균 점수 차이로 어느 쪽이 나은지 검정한다. 엄격히 적정인 규칙이어야 정직한 예측이 불리해지지 않는다.

[^1]: T. Gneiting, A. E. Raftery, "Strictly proper scoring rules, prediction, and estimation", Journal of the American Statistical Association 102 (2007), 359–378.
[^2]: L. J. Savage, "Elicitation of personal probabilities and expectations", Journal of the American Statistical Association 66 (1971), 783–801.
[^3]: J. M. Bernardo, "Expected information as expected utility", Annals of Statistics 7 (1979), 686–690.
[^4]: A. Banerjee, X. Guo, H. Wang, "On the optimality of conditional expectation as a Bregman predictor", IEEE Transactions on Information Theory 51 (2005), 2664–2669.
[^5]: G. W. Brier, "Verification of forecasts expressed in terms of probability", Monthly Weather Review 78 (1950), 1–3.

# 연관 문서

## 선수지식

- [KL divergence](kl-divergence.md)
- [Bregman divergence](bregman-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #information_theory
