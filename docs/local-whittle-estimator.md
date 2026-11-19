# 국소 Whittle 추정량

# 개요

**국소 Whittle 추정량(local Whittle estimator)** 은 시계열의 장기 의존 정도 $d$ 를 가장 낮은 진동수 몇 개의 주기도만으로 추정하는 방법이다. 강의 수위처럼 몇십 년 떨어진 해끼리도 상관이 남는 기록에서 $d$ 를 알고 싶은데, 하루하루의 짧은 오르내림까지 모형으로 정하면 그 모형이 틀린 만큼 $d$ 의 추정도 틀린다. 국소 Whittle 추정량은 원점 근처에서 스펙트럼 밀도가 $\omega^{-2d}$ 꼴이라는 것만 써서, 짧은 오르내림의 모형을 정하지 않고 $d$ 를 추정한다.

# 직관

[ARFIMA 모형](arfima-models.md)(autoregressive fractionally integrated moving average)의 스펙트럼 밀도는 원점 근처에서 $G\omega^{-2d}$ 처럼 행동한다. 진동수를 두 배로 하면 스펙트럼 밀도가 $4^d$ 분의 일로 준다.

어느 수위 기록의 가장 낮은 두 Fourier 진동수 $\omega$, $2\omega$ 에서 주기도가 $I\_1=2$, $I\_2=\sqrt2\approx 1.41$ 이라 한다. 진동수가 두 배가 될 때 주기도가 $\sqrt2$ 분의 일로 줄었으므로 $4^d=\sqrt2$ 이고 $d=1/4$ 이다.

[Whittle 추정량](whittle-estimator.md)은 모든 진동수에서 모형의 스펙트럼 밀도를 주기도에 맞춘다. 높은 진동수에서는 짧은 오르내림이 스펙트럼을 정하므로, 그 부분의 자기회귀·이동평균 차수를 잘못 고르면 $d$ 까지 끌려간다. 위의 계산은 낮은 진동수 둘만 보고 상수 $G$ 는 묻지 않았다. 국소 Whittle 추정량은 이 계산을 낮은 진동수 $m$ 개에 대한 Whittle 가능도로 한 것이다.

# 정의

## 국소 Whittle 목적함수

관측 $x\_1,\dots,x\_n$ 의 Fourier 진동수 $\omega\_j=2\pi j/n$ 에서 주기도를 $I\_j=I(\omega\_j)$ 라 하고, 정수 $m$ 을 $1\le m\lt n/2$ 로 고른다. 다음 함수를 최소화하는 $\hat d$ 를 **국소 Whittle 추정량** 이라 한다.[^1]

$$
R(d)=\log\Bigl(\frac1m\sum\_{j=1}^m\omega\_j^{2d}I\_j\Bigr)-\frac{2d}{m}\sum\_{j=1}^m\log\omega\_j
$$

$m$ 을 **띠너비(bandwidth)** 라 한다. 이 함수는 $j=1,\dots,m$ 에서만 $f(\omega)=G\omega^{-2d}$ 로 둔 Whittle 음의 로그가능도를 $G$ 에 대해 최소화한 것이다. $G$ 의 최소점은 다음과 같다.

$$
\hat G(d)=\frac1m\sum\_{j=1}^m\omega\_j^{2d}I\_j
$$

## 직관 절의 계산

$m=2$ 이고 $\omega\_2=2\omega\_1$ 이면 $\omega\_1$ 이 들어간 항이 서로 지워져 다음이 남는다.

$$
R(d)=\log\frac{I\_1+4^dI\_2}{2}-d\log 2
$$

$d$ 로 미분해 $0$ 으로 두면 $4^dI\_2=I\_1$ 이고 $\hat d=\frac12\log\_2(I\_1/I\_2)$ 다. $I\_1/I\_2=\sqrt2$ 이면 $\hat d=1/4$ 이다.

# 성질

## 일치성

과정이 $\omega\to 0$ 에서 $f(\omega)\sim G\omega^{-2d}$ 이고 $-\frac12\lt d\lt\frac12$ 라 한다. $n\to\infty$ 에서 $m\to\infty$, $m/n\to 0$ 이면 $\hat d$ 는 $d$ 로 확률수렴한다.[^1] 원점에서 멀리 떨어진 진동수의 스펙트럼 모양에 대해서는 아무 가정도 하지 않는다.

## 점근 정규성

조건을 조금 더 붙이면 다음이 성립한다.[^1]

$$
\sqrt m\thinspace(\hat d-d)\to N\Bigl(0,\frac14\Bigr)
$$

극한분산 $\frac14$ 는 $d$ 와 $G$ 에 의존하지 않는다. 같은 띠너비의 로그 주기도 회귀인 Geweke–Porter-Hudak 추정량(Geweke–Porter-Hudak estimator)의 극한분산은 $\pi^2/24\approx 0.41$ 이라, 국소 Whittle 추정량이 더 효율적이다.[^2]

## 띠너비의 선택

수렴 속도는 $\sqrt n$ 이 아니라 $\sqrt m$ 이다. $m$ 을 키우면 분산 $1/(4m)$ 이 줄지만, 원점에서 먼 진동수에서는 $G\omega^{-2d}$ 근사가 어긋나 치우침이 커진다. $f(\omega)=G\omega^{-2d}(1+b\omega^2+\cdots)$ 이면 치우침이 $(m/n)^2$ 에 비례하고, 평균제곱오차를 최소화하는 $m$ 은 $n^{4/5}$ 에 비례한다.[^3]

## 정상이 아닌 경우

$d$ 가 $\frac34$ 이상이면 $\hat d$ 의 극한분포가 정규가 아니고, $d\gt 1$ 이면 $\hat d$ 가 $1$ 로 수렴해 일치하지 않는다.[^4] 분수 차분을 목적함수 안에 넣은 정확한 국소 Whittle 추정량(exact local Whittle estimator)은 $d$ 가 이 범위 밖이어도 같은 극한분포를 갖는다.

# 활용

- 수문학. 강 수위와 강수량 기록의 $d$ 를 짧은 주기의 계절 변동과 날씨 모형 없이 추정한다. [재조정 범위 분석](rescaled-range.md)의 $H$ 와는 $H=d+\frac12$ 로 비교한다.
- 금융 변동성. 수익률의 절댓값이나 실현 변동성의 $d$ 를 추정해 변동성 모형에 장기 의존을 넣을지 판단한다.
- 네트워크 교통량. 패킷 수 시계열의 Hurst 지수(Hurst exponent)를 추정한다.
- 분수 공적분. 두 계열의 일차결합에 국소 Whittle 추정을 적용해, 일차결합의 $d$ 가 각 계열의 $d$ 보다 작은지 본다. 정수 차수의 경우가 [공적분](cointegration.md)이다.

[^1]: P. M. Robinson, "Gaussian semiparametric estimation of long range dependence", *Annals of Statistics* 23 (1995), 1630–1661. 목적함수는 H. R. Künsch, "Statistical aspects of self-similar processes", *Proceedings of the First World Congress of the Bernoulli Society* (1987), 67–74 가 먼저 제안했다.

[^2]: J. Geweke, S. Porter-Hudak, "The estimation and application of long memory time series models", *Journal of Time Series Analysis* 4 (1983), 221–238. 극한분산의 비교는 위 Robinson (1995).

[^3]: M. Henry, P. M. Robinson, "Bandwidth choice in Gaussian semiparametric estimation of long range dependence", in P. M. Robinson, M. Rosenblatt (eds.), *Athens Conference on Applied Probability and Time Series Analysis*, Springer (1996), 220–232.

[^4]: K. Shimotsu, P. C. B. Phillips, "Exact local Whittle estimation of fractional integration", *Annals of Statistics* 33 (2005), 1890–1933.

# 연관 문서

## 선수지식

- [Whittle 추정량](whittle-estimator.md)
- [ARFIMA 모형](arfima-models.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #signal_processing
