# Itô 적분과 확률미분방정식

# 개요

[Brown 운동](brownian-motion.md)의 경로는 1차변동이 무한이라서 $\int f\thinspace dB$ 를 경로마다 Riemann–Stieltjes 적분으로 정의할 수 없다. 무작위로 흔들리는 항이 들어간 미분방정식을 쓰려면 그 항을 적분할 수 있어야 한다.

Itô 의 해법은 적분을 경로별로 정의하지 않고 $L^2$ 극한으로 정의하는 것이다. 리만 합에서 대표점을 구간의 왼쪽 끝에서 잡으면 합이 martingale 이 되고 분산이 정확히 계산되어(Itô 등거리) 극한이 존재한다. 대가는 연쇄법칙이 바뀌는 것이다. 2차변동이 사라지지 않아 Taylor 전개의 2차항이 $dt$ 규모로 살아남고, 이 항이 Itô 공식의 보정항이 된다.

# 직관

## 왼쪽 끝점

보통의 적분에서는 구간 안 어느 점을 대표로 잡아도 극한이 같다. $\int_0^T B\thinspace dB$ 는 대표점 $B_{t_i}$ 로 계산한 값과 $B_{(t_i+t_{i+1})/2}$ 로 계산한 값이 극한에서 $T/2$ 만큼 다르다. 2차변동이 0 이 아니기 때문이다.

$$
\int_0^TB\thinspace dB=\frac{B_T^2-T}{2}\quad(\text{Itô}),\qquad \int_0^TB\circ dB=\frac{B_T^2}{2}\quad(\text{Stratonovich})
$$

왼쪽 끝점을 고르는 것은 다음에 무슨 일이 일어날지 모르는 상태에서 지금 결정한다는 뜻이고, 그래서 Itô 적분은 martingale 이 되며 기댓값이 0 이다. 중점을 고르면 미래를 엿보게 되어 martingale 성질을 잃는 대신 보통의 연쇄법칙을 되찾는다. 두 방식은 서로 변환할 수 있고, 확률론과 통계에서는 Itô 를, 기존 미적분과의 호환이 중요한 물리에서는 Stratonovich 를 쓴다.

## 2차변동의 기여

증분의 제곱합이 $t$ 로 수렴한다는 사실을 기호로 줄여 쓰면 다음과 같다.

$$
(dB)^2=dt,\qquad dB\thinspace dt=0,\qquad (dt)^2=0
$$

$f(B_t)$ 의 Taylor 전개에서 2차항 $\tfrac12 f''(B)(dB)^2$ 가 $\tfrac12 f''(B)\thinspace dt$ 로 살아남는다. Itô 공식은 이 한 줄의 결과다.

# 정의

## 단순 과정의 적분

$(\mathcal F_t)$ 를 Brown 운동의 filtration 이라 하자. 적분되는 과정 $H$ 는 adapted, 곧 시각 $t$ 의 값이 $\mathcal F_t$ 만 보고 정해져야 한다. $H$ 가 구간마다 상수인 단순 과정이면 적분을 합으로 정의한다.

$$
\int_0^TH_s\thinspace dB_s=\sum_{i}H_{t_i}\big(B_{t_{i+1}}-B_{t_i}\big)
$$

각 항에서 $H_{t_i}$ 는 증분과 독립이므로 기댓값이 0 이고 이 합은 martingale 이다.

## Itô 등거리와 확장

단순 과정에 대해 교차항이 독립증분 때문에 사라지고 대각항만 남으므로 다음이 성립한다.

$$
\mathbb{E}\bigg[\Big(\int_0^TH_s\thinspace dB_s\Big)^2\bigg]=\mathbb{E}\bigg[\int_0^TH_s^2\thinspace ds\bigg]
$$

좌변은 확률적분의 $L^2$ 노름이고 우변은 보통 적분의 노름이다. 적분 연산이 등거리사상이고 단순 과정이 조밀하므로, 이 사상은 $\int_0^T \mathbb{E}[H_s^2]\thinspace ds \lt\infty$ 인 adapted 과정 전체로 유일하게 연장된다. 이렇게 정의된 $\int H\thinspace dB$ 는 연속 martingale 이며 기댓값이 0 이다.

## Itô 공식

$X_t = X_0 + \int_0^t a_s\thinspace ds + \int_0^t b_s\thinspace dB_s$ 를 Itô 과정이라 하고 $f$ 가 두 번 연속미분가능하면

$$
df(t,X_t)=\Big(\partial_tf+a_t\thinspace\partial_xf+\tfrac12 b_t^2\thinspace\partial_x^2f\Big)dt+b_t\thinspace\partial_xf\thinspace dB_t
$$

이다. $\tfrac12 b^2 \partial_x^2 f$ 항이 고전적 연쇄법칙과의 유일한 차이이며 $(dB)^2 = dt$ 에서 나온다. $f(x) = x^2$ 와 $X = B$ 를 넣으면 $d(B^2) = 2B\thinspace dB + dt$ 이고, 적분하면 앞의 $\int B\thinspace dB$ 공식이 된다.

## 확률미분방정식

계수 $a(t,x)$ 와 $b(t,x)$ 에 대한 확률미분방정식(stochastic differential equation, SDE)은 적분형으로 정의된다.

$$
X_t=X_0+\int_0^ta(s,X_s)\thinspace ds+\int_0^tb(s,X_s)\thinspace dB_s
$$

$a$ 와 $b$ 가 $x$ 에 대해 Lipschitz 이고 선형 증가 조건을 만족하면 강해가 유일하게 존재한다. 증명은 상미분방정식의 Picard 반복과 같은 구조이고, 수축을 확인하는 자리에서 Itô 등거리가 쓰인다.

# 성질

## 기본 성질

- 선형이고, $\int_0^t H\thinspace dB$ 는 $t$ 에 대해 연속인 martingale 이다.
- 기댓값은 0 이고 분산은 Itô 등거리로 계산된다.
- 2차변동은 $d\langle X \rangle_t = b_t^2\thinspace dt$ 다. 확산계수 $b$ 가 경로의 거칠기를 결정하고 표류항 $a$ 는 2차변동에 기여하지 않는다.
- Doob 최대부등식이 그대로 적용되어 경로 전체의 크기를 종점의 크기로 통제할 수 있다.

## 대표적인 해

| SDE | 해 |
|---|---|
| $dX = \mu\thinspace dt + \sigma\thinspace dB$ | $X_0 + \mu t + \sigma B_t$ (Brown 운동에 표류 추가) |
| $dS = \mu S\thinspace dt + \sigma S\thinspace dB$ | $S_0 \exp((\mu - \sigma^2/2)t + \sigma B_t)$ (기하 Brown 운동) |
| $dX = -\theta X\thinspace dt + \sigma\thinspace dB$ | Ornstein–Uhlenbeck 과정, 평균으로 회귀 |

기하 Brown 운동의 해에 나오는 $-\sigma^2/2$ 가 Itô 보정이다. 고전적 미적분으로 풀면 이 항이 없고, 그 차이 때문에 기댓값과 중앙값이 갈라진다. $\mathbb{E}[S_t] = S_0 e^{\mu t}$ 이지만 $\log S_t$ 의 평균은 $\log S_0 + (\mu - \sigma^2/2)t$ 다.

## 지수 martingale과 측도변환

$M_t = \exp(\int \theta\thinspace dB - \tfrac12 \int \theta^2\thinspace ds)$ 는 Novikov 조건에서 martingale 이고, 이것을 밀도로 삼아 확률측도를 바꾸면 Brown 운동에 표류를 더하거나 뺄 수 있다. 이것이 Girsanov 정리이고, [측도변환](change-of-measure.md)의 밀도 변경을 연속시간 과정으로 옮긴 것이다. 금융의 위험중립측도가 이 기술로 만들어진다.

# 활용

## 금융

주가를 기하 Brown 운동으로 모형화하고 파생상품의 가치에 Itô 공식을 적용하면 무작위 항을 상쇄하는 복제 포트폴리오를 구성할 수 있다. 남는 식이 Black–Scholes 편미분방정식이고, 위험중립측도로 바꾼 뒤 기댓값을 취하면 가격 공식이 나온다. $-\sigma^2/2$ 보정을 빠뜨리면 가격이 체계적으로 틀어진다.

## 편미분방정식과의 대응

[Feynman–Kac 공식](feynman-kac.md)은 포물형 편미분방정식의 해를 확산 과정의 기댓값으로 표현한다. Itô 공식을 해에 적용해 $dt$ 항이 방정식 때문에 사라지게 하면 남은 확률적분이 martingale 이므로 기댓값만 남는다. 이 대응으로 고차원 방정식을 Monte Carlo 로 풀 수 있다.

## 필터링과 추정

잡음 섞인 관측에서 숨은 상태를 추정하는 문제는 조건부 분포가 만족하는 SDE 로 표현된다. 선형 Gauss 인 경우의 해가 Kalman 필터이고 일반적인 경우가 Zakai·Kushner 방정식이다. 확률적 경사하강법의 연속시간 극한과 확산 기반 생성모형의 역방향 과정도 SDE 로 서술된다.

# 연관 문서

## 선수지식

- [Brown 운동](brownian-motion.md)

## 더 알아보기

- [Girsanov 정리](girsanov.md)
- [확산모형](diffusion-models.md)
- [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)

#probability #analysis
