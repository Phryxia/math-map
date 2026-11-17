# Kalman–Bucy 필터

# 개요

**Kalman–Bucy 필터(Kalman–Bucy filter)** 는 끊임없이 들어오는 잡음 섞인 측정으로 움직이는 대상의 상태를 시간에 따라 추정하는 연속시간 [Kalman 필터](kalman-filter.md)다. 천천히 떠도는 물체의 위치를 센서가 매 순간 읽어 보내면, 측정 하나하나는 잡음에 묻혀 있지만 그 흐름 전체에는 위치의 정보가 쌓인다. Kalman–Bucy 필터는 추정값을 측정과 예측의 차이에 비례해 고쳐 나가는 미분방정식과, 그 비례 계수를 정하는 오차 분산의 Riccati 미분방정식으로 이 추정을 계산한다.

# 직관

물체의 위치 $x$ 가 시간당 분산 $q=1$ 로 무작위하게 떠돈다. 센서는 위치를 연속으로 읽고, 짧은 시간 $\Delta$ 동안의 측정을 평균하면 위치에 분산 $r/\Delta$ ($r=1$) 의 잡음이 더해진 값이 나온다. 이산 Kalman 필터를 간격 $\Delta$ 로 돌려 본다. 처음 위치는 정확히 안다고 두어 오차 분산 $p=0$ 에서 시작한다.

예측 단계에서 분산은 $p+q\Delta$ 가 되고, 갱신 단계에서 분산 $r/\Delta$ 의 측정과 합치면 다음이 된다.

$$
p\leftarrow\frac{(p+q\Delta)\thinspace r/\Delta}{p+q\Delta+r/\Delta}=p+q\Delta-\frac{p^2}{r}\Delta+O(\Delta^2)
$$

$\Delta$ 로 나누고 $\Delta\to 0$ 으로 보내면 $\dot p=q-p^2/r=1-p^2$ 이 나온다. 해는 $p(t)=\tanh t$ 이고, 오차 분산은 $0$ 에서 출발해 $1$ 로 다가간다. 물체가 떠도는 만큼 불확실성이 늘고 측정이 쌓이는 만큼 줄어들어, 두 효과가 맞먹는 $p=1$ 에서 멈춘다.

같은 극한에서 Kalman 이득은 $p\Delta/r$ 이 되어, 추정값 $\hat x$ 는 시간 $dt$ 동안 측정과 추정의 차이에 $p/r$ 을 곱한 만큼 움직인다. 오래 지나면 $p/r=1$ 이므로 추정값은 시간상수 $1$ 로 측정을 따라가는 1차 저역 필터가 된다.

# 정의

## 연속시간 선형 Gauss 모형

상태 $x_t\in\mathbb R^n$ 과 누적 관측 $z_t\in\mathbb R^m$ 이 다음 [확률미분방정식](stochastic-differential-equations.md)을 따른다.

$$
dx_t=Ax_t\thinspace dt+dw_t,\qquad dz_t=Hx_t\thinspace dt+dv_t
$$

$w_t$ 와 $v_t$ 는 서로 독립인 Wiener 과정(Wiener process), 곧 [Brown 운동](brownian-motion.md)이고 단위 시간당 공분산이 각각 $Q$ 와 $R$ ($R$ 은 양의 정부호) 이다. $x_0$ 은 평균 $\hat x_0$, 공분산 $P_0$ 의 Gauss 분포이고 $w$, $v$ 와 독립이다.

직관 절의 물체는 $n=m=1$, $A=0$, $H=1$, $Q=R=1$, $P_0=0$ 인 경우다.

## Kalman–Bucy 필터

다음 두 방정식으로 $\hat x_t$ 와 $P_t$ 를 정하는 절차를 **Kalman–Bucy 필터** 라 한다[^1].

$$
d\hat x_t=A\hat x_t\thinspace dt+K_t\bigl(dz_t-H\hat x_t\thinspace dt\bigr),\qquad K_t=P_tH^{\mathsf T}R^{-1}
$$

$$
\dot P_t=AP_t+P_tA^{\mathsf T}+Q-P_tH^{\mathsf T}R^{-1}HP_t
$$

둘째 식을 **Riccati 미분방정식(Riccati differential equation)** 이라 하고, $K_t$ 를 Kalman 이득이라 한다. 직관 절의 예에서 둘째 식은 $\dot p=1-p^2$ 이고 $K_t=\tanh t$ 다.

# 성질

## 최적성

정리. 정의 절의 모형에서 $\hat x_t$ 는 관측 $\lbrace z_s:s\le t\rbrace$ 를 조건으로 한 $x_t$ 의 조건부 기댓값이고, $P_t$ 는 오차 $x_t-\hat x_t$ 의 공분산이다[^1].

증명의 요지. 이산 Kalman 필터의 최적성이 간격 $\Delta$ 마다 성립하고, 직관 절의 계산처럼 $\Delta\to 0$ 에서 예측과 갱신이 위의 두 미분방정식으로 모인다. 혁신 $dz_t-H\hat x_t\thinspace dt$ 가 공분산 $R$ 의 Wiener 과정의 증분이라는 것을 보이는 증명도 있다.

$P_t$ 의 방정식에는 관측값 $z_t$ 가 들어 있지 않다. 그러므로 이득 $K_t$ 를 측정 전에 미리 계산해 둘 수 있다.

## 정상 상태

$(A,H)$ 가 관측 가능하고 $(A,Q^{1/2})$ 가 안정화 가능하면 $t\to\infty$ 에서 $P_t$ 는 다음 [대수 Riccati 방정식](algebraic-riccati-equation.md)의 안정화 해 $P_\infty$ 로 수렴한다[^2].

$$
AP+PA^{\mathsf T}+Q-PH^{\mathsf T}R^{-1}HP=0
$$

이 방정식은 [선형 이차 조절기](linear-quadratic-regulator.md)의 Riccati 방정식에서 $A$ 를 $A^{\mathsf T}$ 로, 입력 행렬을 $H^{\mathsf T}$ 로 바꾼 것이다. 1차원에서 $A=a$, $H=1$ 이면 양의 해는 다음이다.

$$
p_\infty=r\Bigl(a+\sqrt{a^2+q/r}\Bigr)
$$

직관 절의 $a=0$, $q=r=1$ 에서 $p_\infty=1$ 이다. 정상 상태의 필터는 이득이 일정한 선형 시불변 체계다. $A$ 의 고윳값의 실수부가 모두 음수여서 상태가 정상 확률과정이면, 이 필터는 [Wiener 필터](wiener-filter.md)와 같다.

# 활용

- 관성 항법. 가속도계와 자이로의 연속 신호로 위치와 자세를 적분하고 위성 측위로 오차를 고치는 체계를 연속시간 모형으로 설계하고, 이득은 정상 상태 해로 고정한다.
- 선형 이차 Gauss 제어(linear–quadratic–Gaussian control). 상태를 직접 볼 수 없는 선형 체계에서 이 필터의 추정값에 선형 이차 조절기의 이득을 곱해 입력으로 쓰면 최적 제어가 된다. 추정과 제어를 따로 설계해도 되는 이 사실을 분리 원리(separation principle)라 한다.
- 이산 측정의 표본 간격이 체계의 시간상수보다 훨씬 짧은 센서 융합에서, 정상 상태 이득과 필터의 대역폭을 이 미분방정식으로 미리 계산한다.

[^1]: R. E. Kalman, R. S. Bucy, "New results in linear filtering and prediction theory", *Journal of Basic Engineering* 83 (1961), 95–108.
[^2]: Kemin Zhou, John C. Doyle, Keith Glover, *Robust and Optimal Control*, Prentice Hall, 1996, 13 장.

# 연관 문서

## 선수지식

- [Kalman 필터](kalman-filter.md)
- [확률미분방정식](stochastic-differential-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #signal_processing
