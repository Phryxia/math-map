# Geweke–Porter-Hudak 추정량

# 개요

**Geweke–Porter-Hudak 추정량(Geweke–Porter-Hudak estimator)** 은 시계열의 장기 의존 정도 $d$ 를, 낮은 진동수의 주기도를 로그 눈금의 그래프에 찍고 직선을 맞춘 기울기로 추정하는 방법이다. 강 수위 기록의 장기 의존을 재려는데 주기도는 진동수마다 크게 흩어져, 진동수 두 개만 골라 비를 구하면 고른 진동수에 따라 답이 크게 달라진다. 이 추정량은 낮은 진동수 $m$ 개를 모두 써서 최소제곱 직선을 맞추고, 그 기울기의 $-1/2$ 배를 $d$ 로 쓴다.

# 직관

[ARFIMA 모형](arfima-models.md)(autoregressive fractionally integrated moving average)의 스펙트럼 밀도는 원점 근처에서 $G\omega^{-2d}$ 처럼 행동한다. 양변에 로그를 취하면 다음과 같다.

$$
\log f(\omega)\approx\log G-2d\log\omega
$$

가로축에 $\log\omega$, 세로축에 $\log f$ 를 두면 기울기가 $-2d$ 인 직선이다. 가장 낮은 두 진동수 $\omega$, $2\omega$ 에서 주기도가 $2$ 와 $\sqrt2$ 이면 기울기가 $(\log\sqrt2-\log 2)/\log 2=-1/2$ 이고 $d=1/4$ 이다.

주기도는 스펙트럼 밀도의 값이 아니다. 진동수마다 $I(\omega\_j)\approx f(\omega\_j)E\_j$ 이고, $E\_j$ 는 평균 $1$ 인 [지수분포](exponential-distribution.md)를 따르는 서로 거의 독립인 값이다. 그래서 점 두 개로 그은 직선은 $E\_1$, $E\_2$ 의 흩어짐을 그대로 받는다. 로그를 취하면 곱해진 $E\_j$ 가 더해진 $\log E\_j$ 가 되므로, 점 $m$ 개에 [선형회귀](linear-regression.md) 직선을 맞추면 흩어짐이 평균된다.

# 정의

관측 $x\_1,\dots,x\_n$ 의 주기도를 Fourier 진동수 $\omega\_j=2\pi j/n$ 에서 $I\_j$ 라 하고, 정수 $m$ 을 고른다. $j=1,\dots,m$ 에 대해 다음 회귀식을 최소제곱으로 맞춘다.

$$
\log I\_j=c-d\thinspace X\_j+e\_j,\qquad X\_j=\log\bigl(4\sin^2(\omega\_j/2)\bigr)
$$

이때 얻은 $d$ 의 최소제곱 추정값 $\hat d$ 를 **Geweke–Porter-Hudak 추정량** 이라 한다.[^1] $\bar X$ 를 $X\_j$ 의 평균이라 하면 다음과 같다.

$$
\hat d=-\frac{\sum\_{j=1}^m(X\_j-\bar X)\log I\_j}{\sum\_{j=1}^m(X\_j-\bar X)^2}
$$

$4\sin^2(\omega/2)=\vert 1-e^{-i\omega}\vert^2$ 은 분수 차분 $(1-B)^d$ 의 스펙트럼에 나오는 인수이고, $\omega$ 가 작으면 $\omega^2$ 에 가깝다. 그래서 $X\_j\approx 2\log\omega\_j$ 이고 기울기 $-d$ 는 직관 절의 $-2d\log\omega$ 와 같은 것이다. 이 추정을 **로그 주기도 회귀(log-periodogram regression)** 라고도 한다.

# 성질

## 오차항의 분포

$E\_j$ 가 평균 $1$ 인 지수분포이면 $\log E\_j$ 의 평균은 $-\gamma$ 이고 분산은 $\pi^2/6$ 이다. $\gamma=0.5772\cdots$ 는 [Euler–Mascheroni 상수](euler-mascheroni-constant.md)다. 평균 $-\gamma$ 는 절편 $c$ 에 흡수되고 기울기에는 영향이 없다.

## 점근 정규성

$f(\omega)\sim G\omega^{-2d}$ 이고 $-\frac12\lt d\lt\frac12$ 라 한다. $n\to\infty$ 에서 $m\to\infty$, $m/n\to 0$ 이고 조건을 몇 개 더 붙이면 다음이 성립한다.[^2]

$$
\sqrt m\thinspace(\hat d-d)\to N\Bigl(0,\frac{\pi^2}{24}\Bigr)
$$

분산 $\pi^2/24$ 는 오차의 분산 $\pi^2/6$ 을 $\sum(X\_j-\bar X)^2\approx 4m$ 으로 나눈 것이다. $\log j$ 의 표본분산이 $m$ 이 크면 $1$ 로 가므로, $X\_j\approx 2\log\omega\_j$ 의 표본분산은 $4$ 에 가깝다.

## 국소 Whittle 추정량과의 비교

같은 $m$ 에서 [국소 Whittle 추정량](local-whittle-estimator.md)의 극한분산은 $1/4$ 이다. $\pi^2/24\approx 0.411$ 이므로 Geweke–Porter-Hudak 추정량은 같은 정밀도를 얻는 데 진동수가 약 $1.64$ 배 필요하다. 대신 닫힌 식 하나로 계산되고, 회귀 직선을 그림으로 확인할 수 있다.

## 띠너비와 치우침

$m$ 이 크면 $G\omega^{-2d}$ 근사가 어긋나는 진동수까지 들어가 치우침이 생기고, 작으면 분산이 크다. 단기 의존 부분이 $\omega^2$ 에 비례하는 치우침을 만들면 평균제곱오차를 최소화하는 $m$ 은 $n^{4/5}$ 에 비례한다.[^3]

# 활용

- 장기 의존의 검정. $\hat d$ 와 표준오차 $\pi/\sqrt{24m}$ 로 $d=0$ 을 검정해 장기 의존이 있는지 본다.
- ARFIMA 모형의 두 단계 추정. $\hat d$ 로 계열을 분수 차분한 뒤, 남은 계열에 [ARMA 모형](arma-models.md)(autoregressive moving average)을 맞춘다.
- 수문학과 경제학. 강 수위, 물가 상승률, 금리, 실현 변동성의 $d$ 를 추정한다. [재조정 범위 분석](rescaled-range.md)의 $H$ 와는 $H=d+\frac12$ 로 비교한다.
- 그림 진단. 로그 주기도를 $\log\omega$ 에 찍은 그림에서 낮은 진동수 쪽이 직선인 범위를 보고 $m$ 을 고른다.

[^1]: J. Geweke, S. Porter-Hudak, "The estimation and application of long memory time series models", *Journal of Time Series Analysis* 4 (1983), 221–238.

[^2]: P. M. Robinson, "Log-periodogram regression of time series with long range dependence", *Annals of Statistics* 23 (1995), 1048–1072.

[^3]: C. M. Hurvich, R. Deo, J. Brodsky, "The mean squared error of Geweke and Porter-Hudak's estimator of the memory parameter of a long-memory time series", *Journal of Time Series Analysis* 19 (1998), 19–46.

# 연관 문서

## 선수지식

- [ARFIMA 모형](arfima-models.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #signal_processing
