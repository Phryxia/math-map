# Dickey–Fuller 검정

# 개요

**Dickey–Fuller 검정(Dickey–Fuller test)** 은 시계열이 무작위 걷기처럼 충격을 영영 간직하는지, 아니면 평균으로 돌아가는지를 가르는 [가설검정](hypothesis-testing.md)이다. 날마다 기록한 환율이 몇 달째 한쪽으로 떠돌 때, 그것이 언젠가 원래 수준으로 돌아올 계열인지 처음부터 돌아올 곳이 없는 계열인지는 그래프만 보아서는 가를 수 없다. 이 검정은 어제 값으로 오늘 값을 회귀한 기울기를 보되, 무작위 걷기에서 그 기울기가 흔히 1 보다 작게 나온다는 것을 반영한 기각값으로 판정한다.

# 직관

환율 $x_t$ 를 $T=100$ 일 동안 기록했다. 오늘의 변화 $\Delta x_t=x_t-x_{t-1}$ 을 어제 값 $x_{t-1}$ 에 상수항 없이 회귀했더니 다음이 나왔다고 하자.

$$
\sum_{t}x_{t-1}^2=2500,\qquad \sum_{t}x_{t-1}\Delta x_t=-100,\qquad \hat\sigma=1
$$

기울기는 $\hat\gamma=-100/2500=-0.04$ 이고 표준오차는 $\hat\sigma/\sqrt{2500}=0.02$ 이다. $t$ 통계량은 $-0.04/0.02=-2.0$ 이다. 기울기가 음수이면 어제 높았던 값이 오늘 내려온다는 뜻이고, 무작위 걷기이면 기울기가 $0$ 이다.

정규분포 표로 보면 한쪽 5% 기각값이 $-1.645$ 이므로 $-2.0$ 은 무작위 걷기를 기각한다. 그런데 계열이 실제로 무작위 걷기이면 $\hat\gamma$ 는 $0$ 근처에 고르게 퍼지지 않는다. 무작위 걷기 $x_t$ 를 [Brown 운동](brownian-motion.md) $W$ 로 근사하면 $\hat\gamma$ 의 부호는 $W(1)^2-1$ 의 부호와 같고, $W(1)$ 이 표준정규분포를 따르므로 $\hat\gamma\lt 0$ 일 확률은 약 $0.68$ 이다.

무작위 걷기에서도 기울기가 음수로 나오는 쪽이 더 흔하므로 $t$ 통계량의 분포는 정규분포보다 왼쪽으로 밀려 있다. 그 분포의 5% 기각값은 $-1.95$ 이고 $-2.0$ 은 그보다 겨우 작다. 상수항을 넣은 회귀에서 같은 값이 나왔다면 기각값이 $-2.86$ 이라 무작위 걷기를 기각하지 않는다.

# 정의

## 세 회귀식

$\gamma=\rho-1$ 이라 할 때 다음 세 회귀식 가운데 하나를 최소제곱으로 맞춘다.

$$
\begin{aligned}
\Delta x_t&=\gamma x_{t-1}+\varepsilon_t\cr
\Delta x_t&=\mu+\gamma x_{t-1}+\varepsilon_t\cr
\Delta x_t&=\mu+\delta t+\gamma x_{t-1}+\varepsilon_t
\end{aligned}
$$

귀무가설은 단위근(unit root) $\gamma=0$, 곧 $x_t$ 가 [ARIMA 모형](arima-models.md)(autoregressive integrated moving average)의 무작위 걷기라는 것이고, 대립가설은 $\gamma\lt 0$ 이다. 첫 식은 평균이 $0$ 인 정상 계열을, 둘째 식은 평균이 $0$ 이 아닌 정상 계열을, 셋째 식은 추세 주변의 정상 계열을 대립가설로 둔다. 직관 절의 계산은 첫 식이다.

## 검정 통계량

$\hat\gamma$ 를 최소제곱 표준오차로 나눈 $\tau=\hat\gamma/\mathrm{se}(\hat\gamma)$ 를 **Dickey–Fuller $\tau$ 통계량** 이라 한다. $T\hat\gamma=T(\hat\rho-1)$ 도 통계량으로 쓴다. 직관 절에서 $\tau=-2.0$, $T\hat\gamma=-4.0$ 이다.

## 증강 Dickey–Fuller 검정

$\varepsilon_t$ 가 서로 상관되어 있으면 차분의 시차항을 더한 회귀식을 쓴다.

$$
\Delta x_t=\mu+\gamma x_{t-1}+\sum_{i=1}^{p}\phi_i\Delta x_{t-i}+\varepsilon_t
$$

이 회귀의 $\gamma$ 에 대한 $\tau$ 통계량으로 하는 검정을 **증강 Dickey–Fuller 검정(augmented Dickey–Fuller test, ADF test)** 이라 한다. 시차항이 오차의 상관을 흡수해 $\varepsilon_t$ 를 백색잡음에 가깝게 만든다.

# 성질

## 극한분포

D. A. Dickey 와 W. A. Fuller 는 귀무가설 아래 두 통계량의 극한이 Brown 운동의 범함수임을 보였다[^1]. 상수항이 없는 회귀에서는 다음이다.

$$
T\hat\gamma\to\frac{W(1)^2-1}{2\int_0^1 W(s)^2\thinspace ds},\qquad
\tau\to\frac{W(1)^2-1}{2\bigl(\int_0^1 W(s)^2\thinspace ds\bigr)^{1/2}}
$$

$\sum x_{t-1}^2$ 이 $T$ 가 아니라 $T^2$ 의 크기로 자라므로 $\hat\gamma$ 는 $\sqrt T$ 가 아니라 $T$ 의 속도로 $0$ 에 다가간다. 상수항이나 추세를 넣으면 $W$ 를 그 항에 회귀한 잔차 과정으로 바꾼 범함수가 나온다.

## 기각값

$\tau$ 의 점근 기각값은 회귀식마다 다르다[^2].

| 회귀식         | 1%      | 5%      | 10%     |
| -------------- | ------- | ------- | ------- |
| 상수항 없음    | $-2.58$ | $-1.95$ | $-1.62$ |
| 상수항         | $-3.43$ | $-2.86$ | $-2.57$ |
| 상수항과 추세  | $-3.96$ | $-3.41$ | $-3.12$ |

넣는 항이 많을수록 기각값이 더 음수가 된다. 귀무가설이 무작위 걷기인데 상수항을 넣지 않으면, 대립가설이 평균 $0$ 을 강제해 평균이 $0$ 이 아닌 정상 계열을 단위근으로 잘못 판정한다.

## 시차항과 극한분포

오차가 유한 차수의 ARMA(autoregressive moving average) 과정이고 시차 수 $p$ 를 $T$ 와 함께 천천히 늘리면, 증강 회귀의 $\tau$ 는 오차가 독립일 때와 같은 극한분포를 가진다. S. E. Said 와 D. A. Dickey 가 증명했다[^3]. 그래서 시차항을 더해도 위 표를 그대로 쓴다.

## 검정력

대립가설의 $\rho$ 가 $1$ 에 가까우면 검정력이 낮다. $\rho=0.95$ 인 정상 계열은 몇십 걸음 안에서는 무작위 걷기와 거의 같이 움직이므로, $T=100$ 정도의 자료로는 단위근을 기각하지 못하는 일이 흔하다. 단위근을 기각하지 못한 것은 단위근이 있다는 증거가 아니다.

## 다른 단위근 검정

P. C. B. Phillips 와 P. Perron 은 시차항을 더하는 대신 $\tau$ 를 오차의 장기분산으로 보정했다[^4]. D. Kwiatkowski, P. C. B. Phillips, P. Schmidt, Y. Shin 의 [KPSS 검정](kpss-test.md)(Kwiatkowski–Phillips–Schmidt–Shin test)은 귀무가설과 대립가설을 바꿔 정상성을 귀무가설로 둔다[^5]. 두 종류를 함께 쓰면 낮은 검정력 때문에 판정이 갈리는 경우를 가려낼 수 있다.

# 활용

- 차분 횟수 정하기. ARIMA 모형의 $d$ 를 고를 때 원 계열에서 단위근을 기각하지 못하면 차분하고, 차분한 계열에 다시 검정한다.
- [공적분](cointegration.md)의 Engle–Granger 방법. 회귀 잔차에 이 검정을 쓰되, 잔차가 추정한 계수로 만들어지므로 기각값이 위 표보다 더 음수인 별도 표를 쓴다.
- 경제 계열의 무작위 걷기 가설. 환율, 주가, 실질 국내총생산이 충격을 영영 간직하는지, 구매력 평가처럼 실질 환율이 평균으로 돌아가는지를 이 검정으로 판정한다.
- [Johansen 검정](johansen-test.md). 계열이 하나일 때 Johansen 검정의 대각합 통계량은 상수항 없는 Dickey–Fuller $\tau$ 의 제곱과 같은 극한분포를 가진다.

[^1]: D. A. Dickey, W. A. Fuller, "Distribution of the estimators for autoregressive time series with a unit root", *Journal of the American Statistical Association* 74 (1979), 427–431.
[^2]: W. A. Fuller, *Introduction to Statistical Time Series*, 2nd ed., Wiley (1996).
[^3]: S. E. Said, D. A. Dickey, "Testing for unit roots in autoregressive-moving average models of unknown order", *Biometrika* 71 (1984), 599–607.
[^4]: P. C. B. Phillips, P. Perron, "Testing for a unit root in time series regression", *Biometrika* 75 (1988), 335–346.
[^5]: D. Kwiatkowski, P. C. B. Phillips, P. Schmidt, Y. Shin, "Testing the null hypothesis of stationarity against the alternative of a unit root", *Journal of Econometrics* 54 (1992), 159–178.

# 연관 문서

## 선수지식

- [ARIMA 모형](arima-models.md)

## 더 알아보기

- [KPSS 검정](kpss-test.md)

#statistics #probability
