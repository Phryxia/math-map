# 확장 Kalman 필터

# 개요

**확장 Kalman 필터(extended Kalman filter)** 는 상태의 움직임이나 측정이 상태의 일차식이 아닐 때 [Kalman 필터](kalman-filter.md)를 쓰는 방법이다. 직선 도로 위의 차에서 도로 밖 기지국까지의 거리를 재면, 거리는 차의 위치에 비례하지 않고 기지국 앞에서 꺾이는 곡선이다. 확장 Kalman 필터는 매 단계 현재 추정값 근처에서 이 곡선을 접선으로 바꾸고, 그 접선에 Kalman 필터의 공식을 쓴다.

# 직관

차가 직선 위 위치 $x$ 에 있고, 기지국은 직선에서 거리 $1$ 만큼 떨어진 곳, 위치 $0$ 의 맞은편에 있다. 측정은 기지국까지의 거리 $z=\sqrt{x^2+1}+v$ 이고 오차 $v$ 의 분산은 $1/2$ 이다. 지금까지의 추정은 평균 $1$, 분산 $1$ 이고, 새 측정값은 $z=2$ 다.

Kalman 필터의 갱신은 측정이 $z=Hx+v$ 꼴이라 놓고 계수 $H$ 로 이득을 계산한다. 거리 $\sqrt{x^2+1}$ 에는 그런 상수 계수가 없다. 그래서 추정값 $x=1$ 에서 거리 곡선의 접선을 쓴다. $x=1$ 에서 거리는 $\sqrt2$ 이고 기울기는 $1/\sqrt2$ 이므로, 그 근처에서 거리는 $\sqrt2+(x-1)/\sqrt2$ 와 거의 같다.

이 접선은 일차식이므로 Kalman 필터의 갱신을 그대로 쓴다. 이득은 $\dfrac{1\cdot(1/\sqrt2)}{(1/\sqrt2)^2\cdot 1+1/2}=\dfrac1{\sqrt2}$ 이고, 측정과 예측의 차이는 $2-\sqrt2$ 다. 새 추정은 $1+(2-\sqrt2)/\sqrt2=\sqrt2$, 새 분산은 $(1-1/2)\cdot 1=1/2$ 이다.

# 정의

## 비선형 상태공간 모형

상태 $x_k\in\mathbb R^n$ 과 관측 $z_k\in\mathbb R^m$ 이 미분 가능한 함수 $f:\mathbb R^n\to\mathbb R^n$, $h:\mathbb R^n\to\mathbb R^m$ 로 다음을 따른다.

$$
x_k=f(x\_{k-1})+w_k,\qquad z_k=h(x_k)+v_k
$$

$w_k\sim N(0,Q)$ 와 $v_k\sim N(0,R)$ 은 서로 독립인 Gauss 잡음이다. 직관 절의 예는 $n=m=1$, $h(x)=\sqrt{x^2+1}$, $R=1/2$ 인 경우다.

## 예측과 갱신

**확장 Kalman 필터** 는 다음 두 단계를 번갈아 돌리는 절차다. $Df(a)$ 는 $f$ 의 $a$ 에서의 [미분](derivative.md)을 나타내는 Jacobi 행렬이다.

$$
\hat x\_{k\mid k-1}=f(\hat x\_{k-1\mid k-1}),\qquad F_k=Df(\hat x\_{k-1\mid k-1}),\qquad P\_{k\mid k-1}=F_kP\_{k-1\mid k-1}F_k^{\mathsf T}+Q
$$

$$
H_k=Dh(\hat x\_{k\mid k-1}),\qquad K_k=P\_{k\mid k-1}H_k^{\mathsf T}\bigl(H_kP\_{k\mid k-1}H_k^{\mathsf T}+R\bigr)^{-1}
$$

$$
\hat x\_{k\mid k}=\hat x\_{k\mid k-1}+K_k\bigl(z_k-h(\hat x\_{k\mid k-1})\bigr),\qquad P\_{k\mid k}=(I-K_kH_k)P\_{k\mid k-1}
$$

평균은 $f$ 와 $h$ 를 그대로 써서 옮기고, 공분산과 이득만 Jacobi 행렬 $F_k$, $H_k$ 로 계산한다. 직관 절의 예에서 $H=h'(1)=1/\sqrt2$, $h(1)=\sqrt2$ 이고 위의 갱신식이 $\hat x=\sqrt2$, $P=1/2$ 를 준다.

# 성질

## 선형인 경우

$f(x)=Fx$, $h(x)=Hx$ 이면 Jacobi 행렬이 상수 $F$, $H$ 이고 위 식은 [Kalman 필터](kalman-filter.md)의 식과 같다.

## 근사 오차

$f$ 와 $h$ 가 선형이 아니면 $\hat x\_{k\mid k}$ 는 [조건부 기댓값](conditional-expectation.md)과 같지 않고 $P\_{k\mid k}$ 도 조건부 공분산과 같지 않다. 오차는 $f$ 와 $h$ 의 2 차 이상 Taylor 항에서 생기며, 추정값 주변의 불확실성이 클수록 커진다.

공분산은 선형화한 모형의 공분산이므로 실제 오차보다 작게 계산될 수 있다. 그러면 이득이 작아져 새 측정을 덜 반영하고, 추정이 참값에서 멀어진 채 수렴하지 않을 수 있다.[^1]

## 반복 갱신과 Gauss–Newton 법

갱신 단계는 다음 함수의 최소화 문제로 쓸 수 있다.

$$
J(x)=\bigl(x-\hat x\_{k\mid k-1}\bigr)^{\mathsf T}P\_{k\mid k-1}^{-1}\bigl(x-\hat x\_{k\mid k-1}\bigr)+\bigl(z_k-h(x)\bigr)^{\mathsf T}R^{-1}\bigl(z_k-h(x)\bigr)
$$

확장 Kalman 필터의 갱신은 $\hat x\_{k\mid k-1}$ 에서 출발한 Gauss–Newton 법(Gauss–Newton method)의 한 걸음이다. 새 추정값에서 $h$ 를 다시 선형화해 같은 계산을 되풀이하는 것을 **반복 확장 Kalman 필터(iterated extended Kalman filter)** 라 하고, 그 반복은 $J$ 에 대한 Gauss–Newton 반복과 같다.[^2] 직관 절의 예에서 $x=\sqrt2$ 에서 다시 선형화하면 추정이 약 $1.424$ 가 되고, $J$ 의 최소점은 약 $1.425$ 다. 한 번의 갱신이 낸 $\sqrt2\approx 1.414$ 와의 차이가 선형화 오차다.

# 활용

- 위성 항법과 관성 항법의 융합. 위성까지의 거리가 위치의 비선형 함수이고 자세가 회전으로 들어가므로 관측식과 전이식이 모두 비선형이다.
- 동시적 위치 추정 및 지도 작성(simultaneous localization and mapping, SLAM). 로봇의 위치와 표지물의 위치를 한 상태 벡터에 넣고, 로봇에서 본 표지물의 거리와 방향각을 관측으로 받는다.
- [최대가능도 추정](maximum-likelihood.md)에서 비선형 상태공간 모형의 가능도를 근사할 때 혁신 $z_k-h(\hat x\_{k\mid k-1})$ 을 Gauss 로 보고 [Kalman 필터](kalman-filter.md)와 같은 꼴의 밀도의 곱을 쓴다.

[^1]: Brian D. O. Anderson and John B. Moore, *Optimal Filtering*, Prentice-Hall (1979), 8 장. 확장 Kalman 필터의 유도와 발산.
[^2]: Bradley M. Bell and Frederick W. Cathey, "The iterated Kalman filter update as a Gauss–Newton method", *IEEE Transactions on Automatic Control* 38 (1993), 294–297.

# 연관 문서

## 선수지식

- [미분](derivative.md)
- [Kalman 필터](kalman-filter.md)

## 더 알아보기

- [무향 Kalman 필터](unscented-kalman-filter.md)

#statistics #signal_processing #probability
