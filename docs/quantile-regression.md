# 분위수 회귀

# 개요

**분위수 회귀(quantile regression)** 는 설명변수 $x$ 가 주어질 때 반응 $Y$ 의 조건부 $\tau$-분위수를 $x$ 의 일차식으로 추정하는 회귀다. 제곱 잔차 대신 양수 잔차에 $\tau$, 음수 잔차에 $1-\tau$ 의 기울기를 주는 비대칭 절댓값 손실의 합을 최소화하므로 [M-추정량](m-estimators.md)의 한 경우이고, 최적화는 [선형계획법](linear-programming.md)으로 푼다. R. Koenker 와 G. Bassett 가 1978 년에 도입했다[^1]. $\tau=1/2$ 이면 잔차 절댓값의 합을 최소화하는 중앙값 회귀다.

# 직관

수 $1,2,\dots,8$ 의 아래쪽 $1/4$ 지점을 손실의 최소점으로 찾는다. $\theta$ 보다 작은 수에는 거리의 $3/4$ 배, 큰 수에는 거리의 $1/4$ 배를 손실로 매긴다. $\theta$ 를 오른쪽으로 조금 옮기면 작은 수 하나마다 손실이 $3/4$ 씩 늘고 큰 수 하나마다 $1/4$ 씩 준다.

$\theta$ 보다 작은 수가 $b$ 개, 큰 수가 $a$ 개이면 손실의 기울기는 $\frac34b-\frac14a$ 다. $2\lt\theta\lt 3$ 에서는 $b=2$, $a=6$ 이라 기울기가 $0$ 이고, $\theta\lt 2$ 에서는 음수, $\theta\gt 3$ 에서는 양수다. 따라서 $[2,3]$ 의 모든 점이 최소점이고, 이것은 표본의 $1/4$ 분위수다. 작은 수의 비율이 $1/4$ 이 되는 곳에서 기울기가 $0$ 이 된다.

[선형회귀](linear-regression.md)는 같은 방식으로 상수 $\theta$ 대신 일차식 $x^{\mathsf T}\beta$ 를 넣어 제곱 손실을 최소화하고, 그 결과가 조건부 평균의 추정이다. 위의 비대칭 손실에 $x^{\mathsf T}\beta$ 를 넣으면 조건부 $1/4$ 분위수의 추정이 된다.

# 정의

## 확인 함수

$0\lt\tau\lt 1$ 에 대해 **확인 함수(check function)** 는

$$
\rho_\tau(u)=u\bigl(\tau-\mathbf 1\lbrace u\lt 0\rbrace\bigr)
$$

이다. $u\ge 0$ 이면 $\tau u$, $u\lt 0$ 이면 $(\tau-1)u$ 이다. 확률변수 $Y$ 의 $\tau$-분위수 $Q_Y(\tau)=\inf\lbrace y:P(Y\le y)\ge\tau\rbrace$ 는 $\theta\mapsto E\rho_\tau(Y-\theta)$ 의 최소점이다.

## 회귀 분위수

자료 $(x_i,y_i)$, $x_i\in\mathbb R^p$, $i=1,\dots,n$ 에 대해 **회귀 분위수(regression quantile)** 는

$$
\hat\beta(\tau)\in\mathop{\mathrm{arg\thinspace min}}\_{\beta\in\mathbb R^p}\sum_{i=1}^n\rho_\tau\bigl(y_i-x_i^{\mathsf T}\beta\bigr)
$$

이다. 모형은 조건부 분위수가 $Q_Y(\tau\mid x)=x^{\mathsf T}\beta(\tau)$ 인 것이다.

# 성질

## 선형계획

잔차를 양의 부분과 음의 부분 $u_i,v_i\ge 0$ 으로 나누면 회귀 분위수는 다음 선형계획의 해다.

$$
\min\ \sum_{i=1}^n\bigl(\tau u_i+(1-\tau)v_i\bigr)\quad\text{s.t.}\quad y_i-x_i^{\mathsf T}\beta=u_i-v_i,\quad u_i,v_i\ge 0
$$

정리(Koenker–Bassett). 설계행렬의 계수가 $p$ 이면 관측값 $p$ 개를 정확히 지나는 회귀 분위수가 있다. 잔차가 음수인 관측값의 수는 $n\tau$ 이하이고, 잔차가 $0$ 이하인 관측값의 수는 $n\tau$ 이상이다[^1].

증명의 요지. 선형계획의 최적해 가운데 꼭짓점이 있고, 꼭짓점에서는 $p$ 개의 제약에서 $u_i=v_i=0$ 이다. 잔차 개수의 부등식은 최적해에서 $\beta$ 를 조금 움직일 때 목적함수의 방향미분이 $0$ 이상이라는 조건에서 나온다. 직관 절의 기울기 계산이 그 한 차원 판본이다.

## 점근 정규성

정리(Koenker–Bassett). 오차 $Y-x^{\mathsf T}\beta(\tau)$ 가 $x$ 와 독립이고 분포 $F$ 의 밀도 $f$ 가 $F^{-1}(\tau)$ 에서 양수이며 $\frac1n\sum_ix_ix_i^{\mathsf T}\to D$ 가 가역이면 다음이 성립한다[^1].

$$
\sqrt n\thinspace\bigl(\hat\beta(\tau)-\beta(\tau)\bigr)\xrightarrow{d}N\Bigl(0,\thinspace\frac{\tau(1-\tau)}{f(F^{-1}(\tau))^2}D^{-1}\Bigr)
$$

M-추정량의 샌드위치 분산에서 $\psi_\tau(u)=\tau-\mathbf 1\lbrace u\lt 0\rbrace$ 의 분산이 $\tau(1-\tau)$ 이고, $\psi_\tau$ 의 기댓값을 $\beta$ 로 미분한 값이 $f(F^{-1}(\tau))D$ 이다.

## 동변성

- 증가함수 $h$ 에 대해 $Q_{h(Y)}(\tau\mid x)=h\bigl(Q_Y(\tau\mid x)\bigr)$ 이다. 조건부 평균에는 이 성질이 없다.
- 반응을 $y+X\gamma$ 로 바꾸면 회귀 분위수는 $\hat\beta(\tau)+\gamma$ 가 되고, $y$ 를 양수 $a$ 배하면 $a\hat\beta(\tau)$ 가 된다.

## 분위수 교차

$\tau$ 마다 따로 추정한 직선 $x^{\mathsf T}\hat\beta(\tau)$ 는 표본의 어떤 $x$ 에서 서로 교차할 수 있다. 참 조건부 분위수는 $\tau$ 에 대해 증가하므로 교차는 추정 오차나 모형의 일차식 가정이 틀린 데서 생긴다.

# 활용

- 이분산의 기술. 오차의 분산이 $x$ 에 따라 달라지면 $\tau=0.1$ 과 $\tau=0.9$ 의 직선의 기울기가 다르다. 소득과 식비의 관계에서 소득이 클수록 식비의 퍼짐이 커지는 것이 이런 예다.
- 강건한 회귀. 중앙값 회귀는 반응의 큰 오차에 영향을 받지 않는 회귀이고, 오차 분포의 꼬리가 두꺼울 때 최소제곱보다 분산이 작다.
- 위험 측정. 금융에서 손실 분포의 $\tau$-분위수인 위험가치(value at risk)를 설명변수의 함수로 추정하고, 그 위쪽 꼬리의 평균으로 [기대 결손](expected-shortfall.md)을 추정한다.
- 성장 곡선. 나이에 따른 키와 몸무게의 백분위 곡선을 조건부 분위수로 그린다.

[^1]: R. Koenker, G. Bassett, "Regression quantiles", Econometrica 46 (1978), 33–50.

# 연관 문서

## 선수지식

- [M-추정량](m-estimators.md)
- [선형회귀](linear-regression.md)

## 더 알아보기

- [기대 결손](expected-shortfall.md)

#statistics #optimization
