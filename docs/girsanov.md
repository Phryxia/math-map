# Girsanov 정리

# 개요

표류가 있는 확률과정 $dX = \mu\,dt + \sigma\,dB$ 를 다루기는 표류가 없는 경우보다 어렵다. martingale 성질이 깨지므로 기댓값을 다루는 도구가 대부분 쓸 수 없게 된다.

Girsanov 정리는 표류를 지우는 방법을 준다. 과정 자체를 바꾸는 것이 아니라 확률측도를 바꾼다. 같은 경로들에 다른 확률을 배정하면, 원래 측도에서 위로 흐르던 과정이 새 측도에서는 순수한 Brown 운동이 된다. 표류가 사라지는 것이 아니라 확률의 무게가 옮겨 가는 것이다.

이것은 [측도변환과 우도비](change-of-measure.md)에서 본 밀도 바꾸기를 연속시간으로 옮긴 것이다. 이산 시간에서 동전의 앞면 확률을 $p$ 에서 $q$ 로 기울인 것에 해당하며, 밀도 역할을 하는 것이 [Itô 적분](ito-calculus.md)으로 쓰인 지수 martingale 이다. 금융의 위험중립 가격결정, 통계의 연속시간 우도비 검정, 필터링 이론의 참조측도 기법이 전부 이 정리 하나에서 나온다.

# 직관

## 표류는 측도에 따라 달라진다

한 경로를 보고 "이 과정에 표류가 있는가" 를 물으면 답할 수 없다. 위로 올라가는 경로는 표류 없는 Brown 운동에서도 나오고, 표류가 있으면 더 자주 나올 뿐이다. 표류는 경로의 성질이 아니라 경로들 위의 확률분포의 성질이다.

그러므로 확률을 다시 배정하면 표류를 바꿀 수 있다. 위로 가는 경로에 낮은 확률을, 아래로 가는 경로에 높은 확률을 주면 평균적 흐름이 0 이 된다. 두 측도가 서로 절대연속인 한, 무엇이 가능한 경로인지는 변하지 않고 얼마나 그럴듯한지만 변한다.

```mermaid
graph LR
  A["측도 P<br/>B_t 는 표준 Brown 운동"] -->|"밀도 L_T = exp(−θB_T − θ²T/2)"| C["측도 Q<br/>B_t + θt 가 Brown 운동"]
  C -->|"밀도 1/L_T"| A
  D["같은 경로 공간<br/>영집합도 같음"] --- A
  D --- C
```

## 왜 지수 martingale 인가

이산 시간에서 밀도는 각 단계의 우도비를 곱한 것이었다. 연속시간에서 이 곱을 극한으로 보내면 지수가 나온다. 한 눈금에서 표류 $\theta h$ 를 넣는 Gauss 밀도의 비가

$$
\frac{\exp\big(-(\Delta B-\theta h)^2/2h\big)}{\exp\big(-(\Delta B)^2/2h\big)}=\exp\Big(\theta\,\Delta B-\tfrac12\theta^2h\Big)
$$

이므로, 모든 눈금에 대해 곱하면 지수의 안이 합이 되어 $\theta B_t - \theta^2 t/2$ 가 된다. 이차항 $-\theta^2t/2$ 는 정규화에서 오는 것이고, 이것이 있어야 평균이 1 로 유지된다.

이 보정항의 정체는 Itô 공식이다. $L_t = e^{Y_t}$ 에서 $Y$ 가 이차변동을 가지면 $dL = L\,dY + \tfrac12 L\,d\langle Y\rangle$ 이므로, $dL$ 에 $dt$ 항이 남지 않으려면 $Y$ 의 표류가 정확히 $-\tfrac12 d\langle Y\rangle$ 여야 한다.

## 무엇을 얻는가

표류를 지우면 과정이 martingale 이 된다. martingale 은 기댓값이 시간에 따라 변하지 않으므로, 미래 시점의 값에 대한 기댓값을 현재 값으로 바로 읽을 수 있다. 금융에서 가격을 "할인된 미래 지급의 기댓값" 으로 쓸 수 있는 근거가 이것이다. 계산하고 싶은 기댓값은 원래 측도의 것이므로, 새 측도에서 계산한 뒤 밀도를 곱해 되돌린다.

# 정의

## 지수 martingale

$B$ 를 $(\Omega,\mathcal F,(\mathcal F_t),P)$ 위의 $d$ 차원 표준 Brown 운동, $\theta = (\theta_t)$ 를 적합한 가측 과정이라 한다. 다음을 정의한다.

$$
L_t=\exp\left(-\int_0^t\theta_s^{\mathsf T}\,dB_s-\frac12\int_0^t\lVert\theta_s\rVert^2\,ds\right)
$$

Itô 공식에서 $dL_t = -L_t\theta_t^{\mathsf T}dB_t$ 이므로 $L$ 은 국소 martingale 이고 $L_0 = 1$ 이다.

## Novikov 조건

$L$ 이 진짜 martingale 임을 보장하는 충분조건이다.

$$
\mathbb E_P\left[\exp\left(\frac12\int_0^T\lVert\theta_s\rVert^2\,ds\right)\right]<\infty
$$

이 조건이 성립하면 $\mathbb E_P[L_T] = 1$ 이므로 $dQ = L_T\,dP$ 가 확률측도를 정의한다. 조건이 없으면 $L$ 이 순수한 국소 martingale 이 되어 $\mathbb E_P[L_T] < 1$ 일 수 있고, 그러면 $Q$ 는 전체 질량이 1 이 아니다.

## 정리

Novikov 조건 아래에서 $dQ = L_T\,dP$ 로 정의된 $Q$ 는 $P$ 와 동치이고, 다음 과정은 $Q$ 아래에서 표준 Brown 운동이다.

$$
\tilde B_t=B_t+\int_0^t\theta_s\,ds,\qquad 0\le t\le T
$$

즉 $P$-Brown 운동에 표류 $\theta$ 를 더한 것이 $Q$-Brown 운동이 된다. 뒤집어 읽으면, $Q$ 아래에서 보면 원래 있던 표류가 사라진 셈이다.

## SDE 의 표류 바꾸기

$dX_t = b_t\,dt + \sigma_t\,dB_t$ 에서 표류를 $\tilde b$ 로 바꾸고 싶다면 $\sigma_t\theta_t = b_t - \tilde b_t$ 를 풀어 $\theta$ 를 정하면 된다. 그러면 $Q$ 아래에서

$$
dX_t=\tilde b_t\,dt+\sigma_t\,d\tilde B_t
$$

가 된다. 확산계수 $\sigma$ 는 바뀌지 않는다는 점이 핵심이다. 측도변환으로 표류는 마음대로 바꿀 수 있지만 변동성은 건드릴 수 없다.

# 성질

## 확산계수는 불변이다

이차변동 $\langle X\rangle_t = \int_0^t \sigma_s^2\,ds$ 는 경로별로 확률수렴 극한으로 정의되고, 동치인 두 측도는 영집합이 같으므로 이 극한이 양쪽에서 같다. 따라서 $\sigma$ 는 측도변환의 불변량이다.

이 사실의 통계적 의미가 크다. 연속적으로 관측된 확산 과정에서 변동성은 원리적으로 오차 없이 식별되지만, 표류는 유한한 구간의 관측만으로는 결코 정확히 알 수 없다. 표류가 다른 두 모형이 서로 동치인 측도를 주기 때문이다.

## 절대연속이 깨지는 경우

$\sigma$ 가 다른 두 확산은 서로 특이하다. 위 논증이 보여 주듯 이차변동이 다르면 한쪽에서 확률 1 인 사건이 다른 쪽에서 확률 0 이 된다. 마찬가지로 무한 구간 $[0,\infty)$ 에서는 대수의 법칙으로 표류를 식별할 수 있으므로 절대연속성이 깨진다. Girsanov 정리가 유한한 시평 $T$ 에 대한 진술인 이유다.

## 되돌리기

기댓값을 옮기는 공식은 [측도변환](change-of-measure.md)의 일반 공식 그대로다.

$$
\mathbb E_P[Z]=\mathbb E_Q\!\left[\frac{Z}{L_T}\right],\qquad \mathbb E_Q[Z]=\mathbb E_P[Z\,L_T]
$$

조건부 기댓값에는 밀도 과정이 들어간다. $s \le t$ 에 대해

$$
\mathbb E_Q[Z\mid\mathcal F_s]=\frac{\mathbb E_P[Z\,L_t\mid\mathcal F_s]}{L_s}
$$

이며, $L$ 이 $P$-martingale 이라는 사실이 분모를 정당화한다.

## 수치로 확인

표류 $\theta$ 를 가진 Brown 운동의 경로를 뽑고, 밀도 $L_T$ 로 가중해 표준 Brown 운동의 기댓값을 재현한다.

```python
import math, random

rng = random.Random(11)
T, n, theta, trials = 1.0, 200, 0.8, 200000
h = T / n

def sample():
    """P 아래: X_t = B_t + theta*t. 밀도 L_T = exp(-theta*B_T - theta^2*T/2)."""
    b = 0.0
    for _ in range(n):
        b += rng.gauss(0, math.sqrt(h))
    x = b + theta * T
    L = math.exp(-theta * b - 0.5 * theta**2 * T)
    return x, L

num = den = 0.0
for _ in range(trials):
    x, L = sample()
    num += L * x**2        # E_Q[X_T^2] = E_P[L_T * X_T^2]
    den += L               # E_P[L_T] = 1 이어야 한다
print(round(den / trials, 4), round(num / trials, 4))
# 0.998 0.9987
```

가중치의 평균이 1 이고, $X_T$ 의 이차 적률이 $Q$ 아래에서 $T = 1$ 로 나온다. $Q$ 에서 $X$ 가 표준 Brown 운동이라는 진술의 수치적 확인이다. 가중치를 빼고 계산하면 $\mathbb E_P[X_T^2] = T + \theta^2T^2 = 1.64$ 가 나와야 한다.

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

주가가 $dS = \mu S\,dt + \sigma S\,dB$ 를 따르고 무위험 이자율이 $r$ 이라 하자. $\theta = (\mu - r)/\sigma$ 로 잡으면 $Q$ 아래에서 $dS = rS\,dt + \sigma S\,d\tilde B$ 가 되고, 할인된 주가 $e^{-rt}S_t$ 가 martingale 이 된다. 이 $Q$ 를 위험중립측도라 한다.

그러면 만기 지급 $\Phi(S_T)$ 의 가격이 할인된 기댓값으로 쓰인다.

$$
V_0=e^{-rT}\,\mathbb E_Q[\Phi(S_T)]
$$

$\mu$ 가 식에서 완전히 사라진 것이 중요하다. 자산의 기대수익률을 추정하지 않고도 가격을 정할 수 있다는 것이 무차익 가격결정의 핵심이며, 그 이유는 표류가 측도변환으로 바뀌는 양이고 $\sigma$ 는 그렇지 않기 때문이다.

$\Phi$ 가 유럽형 콜의 지급이면 위 기댓값이 닫힌 꼴로 계산되어 Black–Scholes 공식이 나온다.

## 우도비 검정과 필터링

두 표류 가설 아래의 확산 과정을 구별하는 문제에서 우도비가 정확히 $L_T$ 다. Neyman–Pearson 보조정리를 연속시간 관측에 적용할 수 있게 해 준다.

비선형 필터링에서는 관측 과정이 Brown 운동이 되도록 참조측도를 잡는다. 그러면 조건부 분포가 밀도 과정에 대한 선형 방정식, 곧 Zakai 방정식을 만족하고, 비선형 문제가 선형 문제로 바뀐다.

## Monte Carlo 의 분산 감소

희귀사건의 확률을 추정할 때 표류를 사건 쪽으로 기울여 표본을 뽑고 $L_T$ 로 보정한다. 연속시간 importance sampling 이며, 어떤 $\theta$ 를 고를지가 분산을 좌우한다. 큰 편차 이론이 최적의 기울이기를 알려 준다.

## 편미분방정식으로 가는 길

측도변환이 표류를 다루는 한 가지 방법이라면, 다른 방법은 기댓값을 방정식으로 바꾸는 것이다. [Feynman–Kac 공식](feynman-kac.md)이 포물형 편미분방정식의 해를 확산 과정의 기댓값으로 표현하며, 위 가격 공식과 Black–Scholes 방정식이 같은 대상의 두 얼굴임을 설명한다.

# 연관 문서

## 선수지식

- [Itô 적분과 확률미분방정식](ito-calculus.md)
- [측도변환과 우도비](change-of-measure.md)

## 더 알아보기

- [Feynman–Kac 공식](feynman-kac.md)

#probability #measure_theory #analysis
