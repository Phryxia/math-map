# Johansen 검정

# 개요

**Johansen 검정(Johansen test)** 은 여러 시계열 사이에 [공적분](cointegration.md) 관계가 몇 개 있는지 정하는 가능도비 검정이다. 같은 금을 파는 세 시장의 값이 있으면, 세 값의 차이 가운데 몇 개가 0 근처에 머무는지는 회귀식 하나로 알 수 없다. Johansen 검정은 오늘의 변화와 어제의 수준 사이의 상관을 방향마다 재서, 상관이 뚜렷한 방향의 수를 공적분 관계의 수로 고른다.

# 직관

공적분 문서의 금값 예를 쓴다. 시장 A 의 값 $x_t$ 는 무작위 걷기이고 시장 B 의 값은 $y_t=x_t+u_t$ 다. $\varepsilon_t$ 와 $u_t$ 는 서로 독립이고 분산이 $1$ 인 잡음이다.

$$
x_t=x_{t-1}+\varepsilon_t,\qquad y_t=x_t+u_t
$$

두 값의 차이 $y_{t-1}-x_{t-1}=u_{t-1}$ 이 어제 크게 벌어졌으면, 오늘 차이의 변화 $\Delta y_t-\Delta x_t=u_t-u_{t-1}$ 은 그만큼 거꾸로 움직인다. 두 양의 상관계수를 계산하면 공분산이 $-1$, 분산이 $2$ 와 $1$ 이므로 $-1/\sqrt2$ 다.

어제의 값 $x_{t-1}$ 자체는 사정이 다르다. 오늘의 변화 $\Delta x_t=\varepsilon_t$ 는 어제까지의 값과 독립이므로, 표본이 길어질수록 둘의 표본 상관은 $0$ 으로 간다.

그래서 어제의 수준을 일차결합한 방향마다 오늘의 변화와의 상관을 재면, 공적분 벡터 방향에서만 상관이 $0$ 에서 떨어져 있다. 계열이 셋 이상이면 그런 방향이 여럿일 수 있고, 상관이 뚜렷한 방향의 수가 공적분 계수다. Johansen 검정은 이 수를 가능도비로 정한다.

# 정의

## 축소 계수 회귀

$k$ 차원 계열 $z_t$ 의 [벡터 자기회귀 모형](vector-autoregression.md)을 공적분 문서의 오차 수정 꼴로 쓴다.

$$
\Delta z_t=\Pi z_{t-1}+\sum_{i=1}^{p-1}\Gamma_i\Delta z_{t-i}+\varepsilon_t,\qquad \varepsilon_t\sim N(0,\Omega)
$$

공적분 계수가 $r$ 이라는 것은 $\Pi$ 의 계수가 $r$ 이라는 것이고, 그때 $\Pi=\alpha\beta^{\mathsf T}$ 로 쓰인다. $\alpha$, $\beta$ 는 $k\times r$ 행렬이다. 계수에 제약을 둔 이 회귀를 **축소 계수 회귀(reduced rank regression)** 라 한다. 직관 절에서 $k=2$, $p=1$ 이고 $\alpha=(0,-1)^{\mathsf T}$, $\beta=(-1,1)^{\mathsf T}$ 이므로 $\Pi$ 의 계수는 $1$ 이다.

## 적률 행렬과 고윳값

$\Delta z_t$ 와 $z_{t-1}$ 을 각각 $\Delta z_{t-1},\dots,\Delta z_{t-p+1}$ 에 회귀한 잔차를 $R_{0t}$, $R_{1t}$ 라 하고, 관측 수를 $T$ 라 하자. 적률 행렬은 $S_{ij}=T^{-1}\sum_t R_{it}R_{jt}^{\mathsf T}$ 다. $p=1$ 이면 회귀할 것이 없어 $R_{0t}=\Delta z_t$, $R_{1t}=z_{t-1}$ 이다. 다음 방정식의 해 $\hat\lambda_1\ge\cdots\ge\hat\lambda_k$ 를 **Johansen 고윳값** 이라 한다.

$$
\det\bigl(\lambda S_{11}-S_{10}S_{00}^{-1}S_{01}\bigr)=0
$$

$\hat\lambda_i$ 는 $R_{0t}$ 와 $R_{1t}$ 사이의 정준상관(canonical correlation)의 제곱이고 $0$ 과 $1$ 사이에 있다. 직관 절의 금값 예에서 $\hat\lambda_1$ 은 $(-1/\sqrt2)^2=1/2$ 근처에 있고, $\hat\lambda_2$ 는 $T$ 가 커질수록 $0$ 으로 간다.

## 두 검정 통계량

공적분 계수가 $r$ 이하라는 가설을 모든 계수를 허용하는 모형과 견주는 통계량을 **대각합 통계량(trace statistic)**, 계수 $r+1$ 인 모형과 견주는 통계량을 **최대 고윳값 통계량(maximum eigenvalue statistic)** 이라 한다.

$$
\lambda_{\mathrm{trace}}(r)=-T\sum_{i=r+1}^{k}\log(1-\hat\lambda_i),\qquad
\lambda_{\max}(r)=-T\log(1-\hat\lambda_{r+1})
$$

직관 절에서 $T=100$ 일 때 $\hat\lambda_1=0.5$, $\hat\lambda_2=0.01$ 이 나왔다고 하자. 두 통계량은 다음과 같다.

$$
\begin{aligned}
\lambda_{\mathrm{trace}}(0)&=-100\bigl(\log 0.5+\log 0.99\bigr)=70.3\cr
\lambda_{\mathrm{trace}}(1)&=-100\log 0.99=1.0
\end{aligned}
$$

# 성질

## 최대가능도 해

S. Johansen 은 이 모형의 최대가능도 추정이 위 고윳값 문제로 풀린다는 것을 보였다[^1]. $\beta$ 를 고정하면 $\alpha$ 와 $\Omega$ 의 최대가능도 추정은 $R_{0t}$ 를 $\beta^{\mathsf T}R_{1t}$ 에 회귀한 최소제곱 해다. 이것을 가능도에 넣으면 최대화할 것이 $\beta$ 만의 식이 된다.

$$
\frac{\det\bigl(\beta^{\mathsf T}(S_{11}-S_{10}S_{00}^{-1}S_{01})\beta\bigr)}{\det\bigl(\beta^{\mathsf T}S_{11}\beta\bigr)}
$$

이 비를 최소화하는 $\beta$ 는 큰 고윳값 $r$ 개의 고유벡터를 열로 모은 행렬이고, 최대 가능도는 다음과 같다.

$$
L_{\max}^{-2/T}=\det S_{00}\prod_{i=1}^{r}(1-\hat\lambda_i)
$$

계수 $r$ 과 계수 $k$ 의 최대 가능도의 비에 [가능도비 검정](likelihood-ratio-test.md)의 $-2\log$ 를 취하면 대각합 통계량이 나온다. 직관 절에서 $\hat\beta$ 는 $\hat\lambda_1$ 의 고유벡터이고, $T$ 가 커지면 $(-1,1)^{\mathsf T}$ 의 상수배로 간다.

## 극한분포

가설 아래 대각합 통계량은 카이제곱 분포로 가지 않는다. 남은 $k-r$ 개 방향이 무작위 걷기라서 Wilks 정리의 정칙 조건이 성립하지 않는다. 결정적 항이 없는 모형에서 극한은 $k-r$ 차원 표준 [Brown 운동](brownian-motion.md) $W$ 의 범함수다[^1].

$$
\lambda_{\mathrm{trace}}(r)\to\mathrm{tr}\Bigl(\int_0^1 dW\thinspace W^{\mathsf T}\Bigl(\int_0^1 W W^{\mathsf T}dt\Bigr)^{-1}\int_0^1 W\thinspace dW^{\mathsf T}\Bigr)
$$

이 분포는 $k-r$ 에만 달려 있고 기각값은 모의실험으로 만든 표에서 읽는다[^3]. $k-r=1$ 이면 단위근 검정의 Dickey–Fuller 통계량의 제곱과 같은 분포다.

## 결정적 항

모형에 상수항이나 시간 추세를 넣는 방법에 따라 극한분포가 달라진다. 상수항을 공적분 관계 안에만 두는 경우, 계열의 추세로도 두는 경우, 추세를 공적분 관계 안에 두는 경우마다 Brown 운동을 바꾼 범함수가 나오고 표도 따로 있다[^2]. 같은 자료라도 어느 경우를 택하느냐에 따라 계수의 판정이 달라질 수 있다.

## 순차 검정

$r=0,1,\dots,k-1$ 의 순서로 대각합 통계량을 표의 기각값과 견주고, 처음 기각되지 않는 $r$ 을 공적분 계수로 고른다. 큰 $r$ 부터 검정하면 첫 단계에서 이미 기각되지 않아 계수를 크게 잡을 수 있으므로 작은 $r$ 부터 올라간다. 직관 절의 $70.3$ 은 $k-r=2$ 의 기각값보다 훨씬 커서 $r=0$ 을 기각하고, $1.0$ 은 $k-r=1$ 의 기각값보다 작아 $r=1$ 을 받아들인다.

# 활용

- 거시경제 변수의 장기 관계. S. Johansen 과 K. Juselius 는 덴마크와 핀란드의 통화량, 소득, 물가, 금리에 이 검정을 써서 화폐 수요 관계의 수를 정했다[^2].
- 짝 거래(pairs trading)와 바구니 거래. 여러 종목의 가격에서 정상인 일차결합을 찾고, 그 결합이 평균에서 벗어나면 거래한다. 고유벡터 $\hat\beta$ 가 각 종목의 비중이다.
- 공적분 벡터에 대한 가설. 계수를 정한 뒤 $\beta$ 가 특정한 꼴(예를 들어 두 금값의 차이 $(-1,1)^{\mathsf T}$)이라는 가설도 같은 고윳값 문제를 제약 아래 다시 풀어 가능도비로 검정하고, 이 통계량은 카이제곱 극한을 가진다[^1].

[^1]: S. Johansen, "Statistical analysis of cointegration vectors", *Journal of Economic Dynamics and Control* 12 (1988), 231–254.
[^2]: S. Johansen, K. Juselius, "Maximum likelihood estimation and inference on cointegration — with applications to the demand for money", *Oxford Bulletin of Economics and Statistics* 52 (1990), 169–210.
[^3]: M. Osterwald-Lenum, "A note with quantiles of the asymptotic distribution of the maximum likelihood cointegration rank test statistics", *Oxford Bulletin of Economics and Statistics* 54 (1992), 461–472.

# 연관 문서

## 선수지식

- [공적분](cointegration.md)
- [가능도비 검정](likelihood-ratio-test.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #linear_algebra
