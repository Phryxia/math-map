# KPSS 검정

# 개요

**KPSS 검정(Kwiatkowski–Phillips–Schmidt–Shin test)** 은 시계열이 한 수준 근처에 머무는 정상 계열이라는 것을 귀무가설로 두고, 무작위 걷기 성분이 섞여 있으면 기각하는 가설검정이다. 환율 자료에 [Dickey–Fuller 검정](dickey-fuller-test.md)을 했는데 무작위 걷기를 기각하지 못했다면, 그것이 무작위 걷기라서인지 자료가 짧아서인지 그 검정만으로는 가를 수 없다. KPSS 검정은 가설의 방향을 바꿔, 평균에서 벗어난 양을 차례로 더한 합이 얼마나 멀리 떠도는지로 판정한다.

# 직관

평균을 뺀 잔차 여덟 개가 두 가지로 나왔다고 하자.

$$
e^{(A)}=(1,-1,1,-1,1,-1,1,-1),\qquad e^{(B)}=(1,1,1,1,-1,-1,-1,-1)
$$

두 계열 모두 평균이 $0$ 이고 제곱의 평균이 $1$ 이다. 차이는 부호가 얼마나 오래 이어지는지다. 잔차를 앞에서부터 더한 부분합 $S_t=e_1+\cdots+e_t$ 를 적으면 다음과 같다.

$$
S^{(A)}=(1,0,1,0,1,0,1,0),\qquad S^{(B)}=(1,2,3,4,3,2,1,0)
$$

A 의 부분합은 $0$ 과 $1$ 사이를 오가고, B 의 부분합은 $4$ 까지 올라간다. 정상 계열의 잔차는 부호가 자주 바뀌어 부분합이 멀리 가지 않고, 무작위 걷기 성분이 섞이면 잔차가 한쪽으로 오래 몰려 부분합이 멀리 간다.

부분합의 제곱을 더하면 A 는 $4$, B 는 $44$ 다. 부분합은 대략 $T$ 의 크기로 자랄 수 있으므로 $T^2=64$ 와 잔차의 분산 $1$ 로 나누면 A 는 $0.06$, B 는 $0.69$ 다. KPSS 검정은 이 값이 표의 기각값보다 크면 정상 계열이라는 가설을 기각한다.

# 정의

## 모형

계열이 추세, 무작위 걷기, 정상 오차의 합이라 하자.

$$
x_t=\xi t+r_t+\varepsilon_t,\qquad r_t=r_{t-1}+u_t,\qquad \mathrm{Var}(u_t)=\sigma_u^2
$$

$\varepsilon_t$ 는 정상 과정이다. 귀무가설은 $\sigma_u^2=0$ 이다. 그러면 $r_t$ 는 상수 $r_0$ 이고 $x_t$ 는 추세 주변의 정상 계열이다.

$\xi=0$ 으로 둔 경우를 **수준 정상성(level stationarity)**, 그렇지 않은 경우를 **추세 정상성(trend stationarity)** 검정이라 한다. 대립가설 $\sigma_u^2\gt 0$ 에서는 $x_t$ 에 단위근이 있다.

## 검정 통계량

$x_t$ 를 상수항에, 또는 상수항과 $t$ 에 최소제곱 회귀한 잔차를 $e_t$, 그 부분합을 $S_t=\sum_{s\le t}e_s$ 라 한다. **KPSS 통계량** 은 다음이다.

$$
\eta=\frac{1}{T^2\hat\sigma^2}\sum_{t=1}^{T}S_t^2
$$

$\hat\sigma^2$ 은 $e_t$ 의 장기분산(long-run variance) 추정량이다. 장기분산은 자기공분산을 모든 시차에 걸쳐 더한 값 $\sum_{j}\gamma(j)$ 이고, 잔차가 서로 독립이면 보통의 분산과 같다. 직관 절의 계산은 $\hat\sigma^2$ 을 보통의 분산 $1$ 로 둔 것이다.

## 장기분산 추정

$\hat\sigma^2$ 은 표본 자기공분산 $\hat\gamma(j)$ 에 Bartlett 무게를 곱해 더한다. $\ell$ 은 $T$ 와 함께 천천히 늘리는 시차 절단 수다.

$$
\hat\sigma^2=\hat\gamma(0)+2\sum_{j=1}^{\ell}\Bigl(1-\frac{j}{\ell+1}\Bigr)\hat\gamma(j)
$$

무게가 시차에 따라 줄어들어 $\hat\sigma^2$ 이 음수가 되지 않는다. 이 추정량은 W. K. Newey 와 K. D. West 가 제안했다[^2].

# 성질

## Lagrange 승수 검정

$\varepsilon_t$ 가 독립 정규이면 $\eta$ 는 $\sigma_u^2=0$ 에 대한 Lagrange 승수 검정(Lagrange multiplier test) 통계량, 곧 점수 검정 통계량에 비례한다. 귀무가설이 모수 공간의 경계 $\sigma_u^2=0$ 에 있어서 [가능도비 검정](likelihood-ratio-test.md)의 카이제곱 극한은 쓰지 않는다.

## 극한분포

귀무가설 아래 부분합 $S_{\lfloor sT\rfloor}/(\sigma\sqrt T)$ 는 수준 정상성의 경우 [Brown 다리](brownian-bridge.md) $V(s)=W(s)-sW(1)$ 로 수렴한다. 잔차의 합이 $0$ 이라 $S_T=0$ 이 되는 것이 끝점 $V(1)=0$ 에 대응한다. 그래서 다음이 성립한다[^1].

$$
\eta\to\int_0^1 V(s)^2\thinspace ds
$$

추세 정상성의 경우에는 $W$ 를 상수와 $s$ 에 회귀한 잔차를 적분한 2 차 Brown 다리가 $V$ 자리에 온다.

## 기각값

KPSS 의 점근 기각값은 다음과 같다[^1].

| 귀무가설     | 10%     | 5%      | 1%      |
| ------------ | ------- | ------- | ------- |
| 수준 정상성  | $0.347$ | $0.463$ | $0.739$ |
| 추세 정상성  | $0.119$ | $0.146$ | $0.216$ |

직관 절의 B 는 $0.69$ 로 수준 정상성의 5% 기각값 $0.463$ 보다 크다. 다만 $T=8$ 은 점근 표를 쓰기에 짧고, B 처럼 잔차가 한쪽으로 몰리면 장기분산 추정량이 커져 $\eta$ 가 작아진다.

## 대립가설 아래의 크기

$\sigma_u^2\gt 0$ 이면 부분합이 $T^{3/2}$ 의 크기로 자라 $\sum S_t^2$ 이 $T^4$ 의 크기가 된다. 장기분산 추정량이 $\ell T$ 의 크기로 자라므로 $\eta$ 는 $T/\ell$ 의 크기로 커지고, 검정은 일치성(consistency)을 가진다. 시차 절단 수 $\ell$ 을 크게 잡을수록 검정력이 줄어든다.

## Dickey–Fuller 검정과 함께 쓰기

Dickey–Fuller 검정은 단위근을, KPSS 검정은 정상성을 귀무가설로 둔다. 두 판정의 조합은 넷이다.

| Dickey–Fuller | KPSS        | 판정                         |
| ------------- | ----------- | ---------------------------- |
| 기각          | 기각 못 함  | 정상 계열                    |
| 기각 못 함    | 기각        | 단위근                       |
| 기각 못 함    | 기각 못 함  | 자료가 판정하기에 짧다       |
| 기각          | 기각        | 두 모형 모두 맞지 않는다     |

넷째 경우는 장기 의존처럼 단위근도 짧은 기억의 정상성도 아닌 계열에서 나타난다.

# 활용

- 단위근 판정의 확인. ARIMA(autoregressive integrated moving average) 모형의 차분 횟수를 고를 때 Dickey–Fuller 검정과 함께 돌려 두 판정이 맞는지 본다.
- 장기 의존의 탐지. 부분합의 크기로 판정하므로 분수 차분 계열에서도 기각이 일어난다. [ARFIMA 모형](arfima-models.md)(autoregressive fractionally integrated moving average)의 차분 차수 $d$ 가 $0$ 인지 보는 데 쓴다.
- 공적분의 정상성 귀무가설 검정. [공적분](cointegration.md) 회귀의 잔차에 KPSS 통계량을 써서 공적분이 있다는 것을 귀무가설로 두는 검정을 만든다.

[^1]: D. Kwiatkowski, P. C. B. Phillips, P. Schmidt, Y. Shin, "Testing the null hypothesis of stationarity against the alternative of a unit root", *Journal of Econometrics* 54 (1992), 159–178.
[^2]: W. K. Newey, K. D. West, "A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix", *Econometrica* 55 (1987), 703–708.

# 연관 문서

## 선수지식

- [Dickey–Fuller 검정](dickey-fuller-test.md)
- [Brown 다리](brownian-bridge.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
