# Itô 적분과 확률미분방정식

# 개요

[Brown 운동](brownian-motion.md)의 경로는 1차변동이 무한이라서 `∫ f dB` 를 경로마다 Riemann–Stieltjes 적분으로 정의할 수 없다. 그럼에도 적분이 필요한 이유는 분명하다. "무작위로 흔들리는 항이 들어간 미분방정식" 을 쓰려면 그 항을 적분할 수 있어야 한다.

Itô 의 해법은 적분을 경로별로 정의하기를 포기하고 `L²` 극한으로 정의하는 것이다. 리만 합에서 대표점을 반드시 구간의 왼쪽 끝에서 잡으면, 합이 martingale 이 되고 분산을 정확히 계산할 수 있어(Itô 등거리) 극한이 존재한다. 대가는 연쇄법칙이 바뀌는 것이다. 2차변동이 사라지지 않으므로 Taylor 전개의 2차항이 `dt` 규모로 살아남고, 이 항이 Itô 공식의 보정항이 된다.

# 직관

## 왜 왼쪽 끝점인가

보통의 적분에서는 구간 안 어느 점을 대표로 잡아도 극한이 같다. 하지만 `∫_0^T B\,dB` 를 대표점 `B_{t_i}` 로 계산한 값과 `B_{(t_i+t_{i+1})/2}` 로 계산한 값은 극한에서 `T/2` 만큼 다르다. 2차변동이 0 이 아니기 때문이다.

$$
\int_0^TB\,dB=\frac{B_T^2-T}{2}\quad(\text{Itô}),\qquad \int_0^TB\circ dB=\frac{B_T^2}{2}\quad(\text{Stratonovich})
$$

왼쪽 끝점을 고르는 것은 "다음에 무슨 일이 일어날지 모르는 상태에서 지금 결정한다" 는 뜻이다. 도박에서 판돈을 결과를 보기 전에 거는 것과 같고, 그래서 Itô 적분은 martingale 이 되고 기댓값이 0 이 된다. 중점을 고르면 미래를 조금 엿보게 되어 martingale 성질을 잃는 대신 보통의 연쇄법칙을 되찾는다. 두 방식은 서로 변환할 수 있고, 확률론과 통계에서는 Itô 를, 물리에서 기존 미적분과의 호환이 중요한 경우에는 Stratonovich 를 쓴다.

## dB 의 제곱은 dt

증분의 제곱합이 `t` 로 수렴한다는 사실을 기호로 줄여 쓰면 다음과 같다.

$$
(dB)^2=dt,\qquad dB\,dt=0,\qquad (dt)^2=0
$$

`f(B_t)` 를 Taylor 전개할 때 1차항만 남기던 습관이 여기서 깨진다. 2차항 `½f''(B)(dB)²` 가 `½f''(B)dt` 로 살아남기 때문이다. Itô 공식은 이 한 줄의 결과일 뿐이다.

# 정의

## 단순 과정에서 시작한다

`(F_t)` 를 Brown 운동의 filtration 이라 하자. 적분되는 과정 `H` 는 adapted, 즉 시각 `t` 의 값이 `F_t` 만 보고 정해져야 한다. `H` 가 구간마다 상수인 단순 과정이면 적분을 합으로 정의한다.

$$
\int_0^TH_s\,dB_s=\sum_{i}H_{t_i}\big(B_{t_{i+1}}-B_{t_i}\big)
$$

각 항에서 `H_{t_i}` 는 증분과 독립이므로 기댓값이 0 이고, 따라서 이 합은 martingale 이다.

## Itô 등거리와 확장

단순 과정에 대해 다음 등식이 성립한다. 교차항이 독립증분 때문에 사라지고 대각항만 남기 때문이다.

$$
\mathbb{E}\bigg[\Big(\int_0^TH_s\,dB_s\Big)^2\bigg]=\mathbb{E}\bigg[\int_0^TH_s^2\,ds\bigg]
$$

좌변은 확률적분의 `L²` 노름, 우변은 보통 적분의 노름이다. 즉 적분 연산은 등거리사상이고, 단순 과정이 조밀하므로 이 사상은 `∫_0^T E[H_s²]ds < ∞` 인 adapted 과정 전체로 유일하게 연장된다. 이렇게 정의된 `∫ H dB` 는 연속 martingale 이며 기댓값이 0 이다.

## Itô 공식

`X_t = X_0 + ∫_0^t a_s ds + ∫_0^t b_s dB_s` 를 Itô 과정이라 하고 `f` 가 두 번 연속미분가능하면 다음이 성립한다.

$$
df(t,X_t)=\Big(\partial_tf+a_t\,\partial_xf+\tfrac12 b_t^2\,\partial_x^2f\Big)dt+b_t\,\partial_xf\,dB_t
$$

`½b²∂_x²f` 항이 고전적 연쇄법칙과의 유일한 차이이며 `(dB)² = dt` 에서 나온다. 가장 단순한 경우 `f(x) = x²`, `X = B` 를 넣으면 `d(B²) = 2B\,dB + dt` 이고, 적분하면 앞의 `∫B dB` 공식이 된다.

## 확률미분방정식

계수 `a(t,x)`, `b(t,x)` 에 대한 SDE 는 적분형으로 정의된다.

$$
X_t=X_0+\int_0^ta(s,X_s)\,ds+\int_0^tb(s,X_s)\,dB_s
$$

`a`, `b` 가 `x` 에 대해 Lipschitz 이고 선형 증가 조건을 만족하면 강해가 유일하게 존재한다. 증명은 상미분방정식의 Picard 반복과 같은 구조이고, 수축을 확인하는 자리에서 Itô 등거리가 쓰인다.

# 성질

## 기본 성질

- 선형이고, `∫_0^t H dB` 는 `t` 에 대해 연속인 martingale 이다.
- 기댓값은 0 이고 분산은 Itô 등거리로 계산된다.
- 2차변동은 `d⟨X⟩_t = b_t^2 dt` 다. 즉 확산계수 `b` 가 경로의 거칠기를 결정하고, 표류항 `a` 는 2차변동에 기여하지 않는다.
- Doob 최대부등식이 그대로 적용되어 경로 전체의 크기를 종점의 크기로 통제할 수 있다.

## 대표적인 해

| SDE | 해 |
|---|---|
| `dX = μ dt + σ dB` | `X_0 + μt + σB_t` (Brown 운동에 표류 추가) |
| `dS = μS dt + σS dB` | `S_0 exp((μ − σ²/2)t + σB_t)` (기하 Brown 운동) |
| `dX = −θX dt + σ dB` | Ornstein–Uhlenbeck 과정, 평균으로 회귀 |

기하 Brown 운동의 해에 나오는 `−σ²/2` 가 Itô 보정의 가장 유명한 얼굴이다. 고전적 미적분으로 풀면 이 항이 없고, 그 차이 때문에 기댓값과 중앙값이 갈라진다. `E[S_t] = S_0e^{μt}` 이지만 `log S_t` 의 평균은 `log S_0 + (μ − σ²/2)t` 다.

## 지수 martingale과 측도변환

`M_t = exp(∫θ dB − ½∫θ² ds)` 는 적당한 조건(Novikov)에서 martingale 이고, 이것을 밀도로 삼아 확률측도를 바꾸면 Brown 운동에 표류를 더하거나 뺄 수 있다. 이것이 Girsanov 정리이고, [측도변환과 우도비](change-of-measure.md)에서 다루는 밀도 변경을 연속시간 과정으로 옮긴 것이다. 금융에서 위험중립측도를 만드는 기술이 바로 이것이다.

## 수치로 확인

대표점을 왼쪽 끝에서 잡을 때와 중점에서 잡을 때 값이 정확히 `T/2` 만큼 갈리는지, 그리고 Euler–Maruyama 로 푼 기하 Brown 운동이 닫힌 해와 맞는지 본다.

```python
import math, random

rng = random.Random(7)

def path(n, T=1.0):
    h = T / n
    b, out = 0.0, [0.0]
    for _ in range(n):
        b += rng.gauss(0, math.sqrt(h))
        out.append(b)
    return out

n, trials = 5000, 400
e_ito = e_str = 0.0
for _ in range(trials):
    B = path(n)
    ito   = sum(B[i] * (B[i+1] - B[i]) for i in range(n))                # 왼쪽 끝점
    strat = sum(0.5 * (B[i] + B[i+1]) * (B[i+1] - B[i]) for i in range(n))  # 중점
    e_ito += abs(ito - (B[-1]**2 - 1.0) / 2)      # 예측: (B_T^2 - T)/2
    e_str += abs(strat - B[-1]**2 / 2)            # 예측: B_T^2/2
print(round(e_ito / trials, 6), round(e_str / trials, 6))
# 0.007853 0.0

mu, sig, S0, T, m, trials = 0.1, 0.3, 100.0, 1.0, 500, 5000
h = T / m
tot_em = tot_exact = 0.0
for _ in range(trials):
    s, b = S0, 0.0
    for _ in range(m):
        dB = rng.gauss(0, math.sqrt(h))
        s += mu * s * h + sig * s * dB            # Euler-Maruyama
        b += dB
    tot_em += s
    tot_exact += S0 * math.exp((mu - sig**2 / 2) * T + sig * b)   # 닫힌 해
print(round(tot_em / trials, 2), round(tot_exact / trials, 2),
      round(S0 * math.exp(mu * T), 2))
# 110.29 110.29 110.52
```

중점 합의 오차가 정확히 0 인 것은 우연이 아니다. 중점과 증분의 곱이 `(B_{i+1}² − B_i²)/2` 로 망원합이 되어 이산 수준에서 이미 `B_T²/2` 이기 때문이다. 반대로 왼쪽 끝점 합은 `T` 를 빼야 맞고, 남은 오차는 눈금을 잘게 할수록 줄어든다. 두 번째 실험에서 Euler–Maruyama 와 닫힌 해가 같은 난수를 쓰면 거의 일치하고, 이론값 `S_0e^{μT}` 와의 차이는 표본 수에서 오는 Monte Carlo 오차다.

# 활용

## 금융

주가를 기하 Brown 운동으로 모형화하고 파생상품의 가치에 Itô 공식을 적용하면, 무작위 항을 상쇄하는 복제 포트폴리오를 구성할 수 있다. 남는 식이 Black–Scholes 편미분방정식이고, 위험중립측도로 바꾼 뒤 기댓값을 취하면 가격 공식이 나온다. `−σ²/2` 보정을 빠뜨리면 가격이 체계적으로 틀어진다.

## 편미분방정식과의 다리

Feynman–Kac 공식은 포물형 편미분방정식의 해를 확산 과정의 기댓값으로 표현한다. Itô 공식을 해에 적용해 `dt` 항이 방정식 때문에 사라지도록 만들면, 남은 확률적분이 martingale 이므로 기댓값만 남는다는 것이 증명의 골격이다. 이 대응 덕분에 고차원 방정식을 Monte Carlo 로 풀 수 있다.

## 필터링과 추정

잡음 섞인 관측에서 숨은 상태를 추정하는 문제는 조건부 분포가 만족하는 SDE 로 표현된다. 선형 Gauss 인 경우의 해가 Kalman 필터이고, 일반적인 경우가 Zakai·Kushner 방정식이다. 확률적 경사하강법의 연속시간 극한, 확산 기반 생성모형의 역방향 과정도 모두 SDE 로 서술된다.

# 연관 문서

## 선수지식

- [Brown 운동](brownian-motion.md)

## 더 알아보기

- [Girsanov 정리](girsanov.md)

#probability #analysis
