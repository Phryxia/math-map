# ARIMA 모형

# 개요

**ARIMA 모형(autoregressive integrated moving average model)** 은 시계열을 정수 $d$ 번 차분한 것이 [ARMA 모형](arma-models.md)을 따른다고 놓는 모형이다. 주가나 물가 지수는 평균으로 돌아오지 않고 떠돌아, 정상 과정을 전제한 ARMA 모형을 그대로 맞추면 계수 추정도 예측구간도 틀린다. ARIMA 모형은 하루 차이를 먼저 구해 정상 과정으로 바꾼 뒤 ARMA 모형을 맞추고, 차분을 다시 더해 원래 값의 예측을 얻는다.

# 직관

오늘 값이 어제 값에 분산 $1$ 인 충격을 더한 것이라 한다. 이것은 [무작위 걷기](random-walks.md)다.

$$
x\_n=x\_{n-1}+\varepsilon\_n
$$

$x\_0=0$ 에서 시작하면 $x\_n=\varepsilon\_1+\cdots+\varepsilon\_n$ 이고 분산이 $n$ 이다. 분산이 시각에 따라 커지므로 약정상 과정이 아니고, 자기회귀 계수 $1$ 은 [자기회귀 모형](autoregressive-models.md)의 정상성 조건(자기회귀 다항식의 근이 단위원 밖)을 어긴다. 근 $z=1$ 이 단위원 위에 있다.

하루 차이 $x\_n-x\_{n-1}=\varepsilon\_n$ 은 백색잡음이라 정상이다. 차이를 한 번 구하면 ARMA 모형이 되고, 원래 값은 차이를 다시 더해 얻는다. 차분 횟수 $d$ 를 붙인 이 모형이 ARIMA 모형이다.

# 정의

## 차분

$B$ 를 $Bx\_n=x\_{n-1}$ 인 연산이라 하면 $(1-B)x\_n=x\_n-x\_{n-1}$ 을 **차분(differencing)** 이라 한다. $(1-B)^d$ 는 차분을 $d$ 번 한 것이다.

## ARIMA(p, d, q) 모형

$\phi$ 를 근이 모두 단위원 밖인 자기회귀 다항식, $\theta$ 를 이동평균 다항식이라 하자. $(1-B)^dx\_n$ 이 ARMA($p,q$) 모형을 따르는 과정을 ARIMA($p,d,q$) 모형이라 한다.

$$
\phi(B)(1-B)^dx\_n=\theta(B)\varepsilon\_n
$$

$\phi(z)(1-z)^d$ 는 $z=1$ 을 $d$ 중근으로 갖는다. 이 근을 **단위근(unit root)** 이라 한다. 직관 절의 무작위 걷기는 ARIMA($0,1,0$) 이다.

# 성질

## 예측구간의 증가

ARIMA($0,1,0$) 에서 $h$ 걸음 예측은 $x\_n$ 그대로이고, 예측오차는 앞으로 올 충격 $h$ 개의 합이라 분산이 $h\sigma^2$ 다. 정상인 ARMA 모형의 예측오차 분산은 $h\to\infty$ 에서 과정의 분산으로 수렴하는 것과 달리, $d\ge 1$ 이면 예측오차 분산이 한없이 커진다.

## 지수평활과의 관계

ARIMA($0,1,1$) 모형 $x\_n-x\_{n-1}=\varepsilon\_n+\theta\varepsilon\_{n-1}$($-1\lt\theta\lt 0$)의 한 걸음 예측 $\hat x\_{n+1}$ 은 다음 갱신을 따른다.[^1]

$$
\hat x\_{n+1}=\alpha x\_n+(1-\alpha)\hat x\_n,\qquad \alpha=1+\theta
$$

이것은 무게 $\alpha$ 의 단순 지수평활(simple exponential smoothing)이다. $\varepsilon\_n=x\_n-\hat x\_n$ 을 모형 식에 넣으면 $\hat x\_{n+1}=x\_n+\theta\varepsilon\_n$ 이 나오고, 정리하면 위 식이다.

## Dickey–Fuller 검정

$x\_n=\rho x\_{n-1}+\varepsilon\_n$ 에서 단위근 $\rho=1$ 을 귀무가설로 하는 [가설검정](hypothesis-testing.md)이 [Dickey–Fuller 검정](dickey-fuller-test.md)이다. 최소제곱 추정량 $\hat\rho$ 로 $t$ 통계량을 만들지만, 귀무가설 아래에서 그 극한분포는 정규분포가 아니라 [Brown 운동](brownian-motion.md) $W$ 의 범함수다.[^2]

$$
n(\hat\rho-1)\to\frac{W(1)^2-1}{2\int\_0^1W(t)^2\thinspace dt}
$$

상수항이 없는 회귀에서 $t$ 통계량의 5% 기각값은 약 $-1.95$ 이고, 상수항이 있으면 $-2.86$, 선형 추세까지 있으면 $-3.41$ 이다. 정규분포의 $-1.645$ 를 쓰면 단위근을 너무 자주 기각한다.

# 활용

- 차분 횟수 정하기. Box–Jenkins 방법(Box–Jenkins method)은 표본 자기상관이 천천히 주는지와 단위근 검정으로 $d$ 를 정하고, 차분한 계열에 ARMA 차수를 고른다.[^1]
- 경제 시계열. 물가, 생산량, 환율의 로그는 대개 $d=1$ 로 다룬다. 차분한 계열이 성장률이다.
- 공적분. 각각 단위근을 가진 두 계열의 일차결합이 정상일 수 있다. 이것을 [공적분](cointegration.md)이라 하고, Engle–Granger 방법은 그 일차결합의 잔차에 Dickey–Fuller 검정을 쓴다.

[^1]: G. E. P. Box, G. M. Jenkins, *Time Series Analysis: Forecasting and Control*, Holden-Day (1970). 지수평활과의 대응은 J. F. Muth, "Optimal properties of exponentially weighted forecasts", *Journal of the American Statistical Association* 55 (1960), 299–306.

[^2]: D. A. Dickey, W. A. Fuller, "Distribution of the estimators for autoregressive time series with a unit root", *Journal of the American Statistical Association* 74 (1979), 427–431. 기각값은 W. A. Fuller, *Introduction to Statistical Time Series*, 2nd ed., Wiley (1996) 의 표를 따른다.

# 연관 문서

## 선수지식

- [ARMA 모형](arma-models.md)

## 더 알아보기

- [Dickey–Fuller 검정](dickey-fuller-test.md)
- [공적분](cointegration.md)

#statistics #probability
