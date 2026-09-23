# Girsanov 정리

# 개요

표류가 있는 확률과정 $dX = \mu\thinspace dt + \sigma\thinspace dB$ 에서는 martingale 성질이 깨져 기댓값을 다루는 도구를 쓸 수 없다.

Girsanov 정리는 과정이 아니라 확률측도를 바꿔 표류를 지운다. 같은 경로들에 다른 확률을 배정하면 원래 측도에서 위로 흐르던 과정이 새 측도에서 표준 [Brown 운동](brownian-motion.md)이 된다.

이 변환은 [측도변환](change-of-measure.md)의 밀도 바꾸기를 연속시간으로 옮긴 것이다. 이산 시간에서 동전의 앞면 확률을 $p$ 에서 $q$ 로 기울이는 것에 해당하고, 밀도 역할을 하는 것이 [Itô 적분](ito-calculus.md)으로 쓴 지수 martingale 이다. 금융의 위험중립 가격결정, 통계의 연속시간 우도비 검정, 필터링 이론의 참조측도 기법이 이 정리를 쓴다.

# 직관

## 측도에 의존하는 표류

경로 하나로는 표류의 유무를 판정할 수 없다. 위로 올라가는 경로는 표류 없는 Brown 운동에서도 나오고 표류가 있으면 더 자주 나온다. 표류는 경로의 성질이 아니라 경로들 위의 확률분포의 성질이다.

확률을 다시 배정하면 표류가 바뀐다. 위로 가는 경로에 낮은 확률을, 아래로 가는 경로에 높은 확률을 주면 평균적 흐름이 0 이 된다. 두 측도가 서로 절대연속이면 가능한 경로는 그대로이고 그 확률만 달라진다.

## 지수 martingale

이산 시간에서 밀도는 각 단계의 우도비의 곱이고, 연속시간에서는 그 극한이 지수가 된다. 한 눈금에서 표류 $\theta h$ 를 넣는 Gauss 밀도의 비가

$$
\frac{\exp\big(-(\Delta B-\theta h)^2/2h\big)}{\exp\big(-(\Delta B)^2/2h\big)}=\exp\Big(\theta\thinspace\Delta B-\tfrac12\theta^2h\Big)
$$

이므로 모든 눈금에 대해 곱하면 지수 안이 합이 되어 $\theta B_t - \theta^2 t/2$ 가 된다. 이차항 $-\theta^2t/2$ 는 정규화 항이고 평균을 1 로 유지한다.

보정항은 Itô 공식에서 나온다. $L_t = e^{Y_t}$ 에서 $Y$ 가 이차변동을 가지면 $dL = L\thinspace dY + \tfrac12 L\thinspace d\langle Y\rangle$ 이므로, $dL$ 에 $dt$ 항이 남지 않으려면 $Y$ 의 표류가 정확히 $-\tfrac12 d\langle Y\rangle$ 여야 한다.

## 변환의 이득

표류를 지우면 과정이 martingale 이 되고 기댓값이 시간에 따라 변하지 않으므로, 미래 시점의 기댓값을 현재 값으로 읽는다. 금융에서 가격을 할인된 미래 지급의 기댓값으로 쓰는 근거가 이것이다. 원래 측도의 기댓값은 새 측도에서 계산한 뒤 밀도를 곱해 되돌린다.

# 정의

## 지수 martingale

$B$ 를 $(\Omega,\mathcal F,(\mathcal F_t),P)$ 위의 $d$ 차원 표준 Brown 운동, $\theta = (\theta_t)$ 를 적합한 가측 과정이라 하고 다음을 정의한다.

$$
L_t=\exp\left(-\int_0^t\theta_s^{\mathsf T}\thinspace dB_s-\frac12\int_0^t\lVert\theta_s\rVert^2\thinspace ds\right)
$$

Itô 공식에서 $dL_t = -L_t\theta_t^{\mathsf T}dB_t$ 이므로 $L$ 은 국소 martingale 이고 $L_0 = 1$ 이다.

## Novikov 조건

$L$ 이 진짜 martingale 임을 보장하는 충분조건이다.

$$
\mathbb E_P\left[\exp\left(\frac12\int_0^T\lVert\theta_s\rVert^2\thinspace ds\right)\right]\lt\infty
$$

이 조건에서 $\mathbb E_P[L_T] = 1$ 이므로 $dQ = L_T\thinspace dP$ 가 확률측도다. 조건이 없으면 $L$ 이 순수한 국소 martingale 이 되어 $\mathbb E_P[L_T] \lt 1$ 일 수 있고 $Q$ 의 전체 질량이 1 이 아니다.

## 정리

Novikov 조건 아래에서 $dQ = L_T\thinspace dP$ 로 정의된 $Q$ 는 $P$ 와 동치이고, 다음 과정은 $Q$ 아래에서 표준 Brown 운동이다.

$$
\tilde B_t=B_t+\int_0^t\theta_s\thinspace ds,\qquad 0\le t\le T
$$

$P$ Brown 운동에 표류 $\theta$ 를 더한 것이 $Q$ Brown 운동이고, $Q$ 아래에서는 원래의 표류가 사라진다.

## SDE 의 표류 변경

$dX_t = b_t\thinspace dt + \sigma_t\thinspace dB_t$ 에서 표류를 $\tilde b$ 로 바꾸려면 $\sigma_t\theta_t = b_t - \tilde b_t$ 를 풀어 $\theta$ 를 정한다. $Q$ 아래에서

$$
dX_t=\tilde b_t\thinspace dt+\sigma_t\thinspace d\tilde B_t
$$

가 된다. 측도변환은 표류를 바꾸지만 확산계수 $\sigma$ 는 바꾸지 않는다.

# 성질

## 확산계수의 불변성

이차변동 $\langle X\rangle_t = \int_0^t \sigma_s^2\thinspace ds$ 는 경로별로 확률수렴 극한으로 정의되고, 동치인 두 측도는 영집합이 같으므로 이 극한이 양쪽에서 같다. 따라서 $\sigma$ 는 측도변환의 불변량이다.

연속적으로 관측된 확산 과정에서 변동성은 오차 없이 식별되지만, 표류가 다른 두 모형이 서로 동치인 측도를 주므로 표류는 유한 구간의 관측으로 식별되지 않는다.

## 절대연속이 깨지는 경우

$\sigma$ 가 다른 두 확산은 서로 특이하다. 이차변동이 다르면 한쪽에서 확률 1 인 사건이 다른 쪽에서 확률 0 이다. 무한 구간 $[0,\infty)$ 에서도 대수의 법칙으로 표류가 식별되어 절대연속성이 깨지므로, Girsanov 정리는 유한한 시평 $T$ 에 대한 진술이다.

## 기댓값의 변환

기댓값을 옮기는 공식은 [측도변환](change-of-measure.md)의 일반 공식 그대로다.

$$
\mathbb E_P[Z]=\mathbb E_Q\negthinspace\left[\frac{Z}{L_T}\right],\qquad \mathbb E_Q[Z]=\mathbb E_P[Z\thinspace L_T]
$$

[조건부 기댓값](conditional-expectation.md)에는 밀도 과정이 들어간다. $s \le t$ 에 대해

$$
\mathbb E_Q[Z\mid\mathcal F_s]=\frac{\mathbb E_P[Z\thinspace L_t\mid\mathcal F_s]}{L_s}
$$

이고, 분모는 $L$ 이 $P$ martingale 이라는 사실에서 정당화된다.

## 이산 시간과의 대응

| 이산 | 연속 |
|---|---|
| 동전 확률 $p \to q$ | 표류 $b \to \tilde b$ |
| 우도비의 곱 | 지수 martingale $L_t$ |
| 모든 $p\in(0,1)$ 이 동치 | 유한 $T$ 에서 모든 표류가 동치 |
| 앞면 확률은 관측으로 추정 | 표류는 유한 구간에서 식별 불가 |
| 동전의 개수는 불변 | 확산계수 $\sigma$ 는 불변 |

# 활용

## 위험중립 가격결정

주가가 $dS = \mu S\thinspace dt + \sigma S\thinspace dB$ 를 따르고 무위험 이자율이 $r$ 이라 하자. $\theta = (\mu - r)/\sigma$ 로 잡으면 $Q$ 아래에서 $dS = rS\thinspace dt + \sigma S\thinspace d\tilde B$ 이고 할인된 주가 $e^{-rt}S_t$ 가 martingale 이다. 이 $Q$ 가 **위험중립측도**다.

만기 지급 $\Phi(S_T)$ 의 가격은 할인된 기댓값이다.

$$
V_0=e^{-rT}\thinspace\mathbb E_Q[\Phi(S_T)]
$$

식에 $\mu$ 가 없으므로 자산의 기대수익률을 추정하지 않고 가격을 정한다. 표류는 측도변환으로 바뀌고 $\sigma$ 는 바뀌지 않기 때문이다.

$\Phi$ 가 유럽형 콜의 지급이면 이 기댓값이 닫힌 꼴로 계산되어 Black–Scholes 공식이 나온다.

## 우도비 검정과 필터링

두 표류 가설 아래의 확산 과정을 구별하는 문제에서 우도비가 $L_T$ 이고, Neyman–Pearson 보조정리가 연속시간 관측에 적용된다.

비선형 필터링에서는 관측 과정이 Brown 운동이 되도록 참조측도를 잡는다. 조건부 분포가 밀도 과정에 대한 선형 방정식인 Zakai 방정식을 만족해 비선형 문제가 선형 문제가 된다.

## Monte Carlo 의 분산 감소

희귀사건의 확률을 추정할 때 표류를 사건 쪽으로 기울여 표본을 뽑고 $L_T$ 로 보정한다. 이 연속시간 importance sampling 에서 분산은 $\theta$ 의 선택에 좌우되고, 큰 편차 이론으로 최적의 기울이기를 정한다.

## 편미분방정식과의 대응

표류를 다루는 다른 방법은 기댓값을 방정식으로 바꾸는 것이다. [Feynman–Kac 공식](feynman-kac.md)이 포물형 편미분방정식의 해를 확산 과정의 기댓값으로 표현하고, 위 가격 공식과 Black–Scholes 방정식이 같다는 것을 준다.

# 연관 문서

## 선수지식

- [Itô 적분](ito-calculus.md)
- [측도변환](change-of-measure.md)

## 더 알아보기

- [Feynman–Kac 공식](feynman-kac.md)

#probability #measure_theory #analysis
