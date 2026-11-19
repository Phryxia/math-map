# ARMA 모형의 상태공간 표현

# 개요

**ARMA 모형의 상태공간 표현(state-space representation of ARMA models)** 은 [ARMA 모형](arma-models.md)(autoregressive moving average)을 보이지 않는 상태 벡터가 한 걸음씩 옮겨 가는 꼴로 다시 쓴 것이다. 하루 측정값이 빠진 기록에 ARMA 모형을 맞추려 하면, 지난 값의 일차결합으로 오늘 값을 적는 식에 빈칸이 생겨 가능도를 계산할 수 없다. 상태공간 표현으로 바꾸면 [Kalman 필터](kalman-filter.md)가 값이 있는 날에는 상태를 고치고 빠진 날에는 예측만 하며, 가능도를 관측 수에 비례하는 계산으로 얻는다.

# 직관

오늘 측정값이 오늘 충격과 어제 충격의 $0.4$ 배의 합이라 한다. 충격 $\varepsilon\_n$ 은 평균 $0$, 분산 $1$ 인 Gauss 잡음이다.

$$
x\_n=\varepsilon\_n+0.4\thinspace\varepsilon\_{n-1}
$$

첫날 $x\_1=1$ 이고 둘째 날 $x\_2=0.5$ 를 얻었다. 둘째 날 값을 예측하려면 어제 충격 $\varepsilon\_1$ 을 알아야 하는데, 관측한 것은 $x\_1=\varepsilon\_1+0.4\varepsilon\_0$ 뿐이라 $\varepsilon\_1$ 이 하나로 정해지지 않는다.

그래서 오늘 값과 내일로 넘어갈 몫 $0.4\varepsilon\_n$ 을 한 벡터로 묶어 상태라 부른다.

$$
s\_n=\begin{pmatrix}x\_n\cr 0.4\thinspace\varepsilon\_n\end{pmatrix}=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}s\_{n-1}+\begin{pmatrix}1\cr 0.4\end{pmatrix}\varepsilon\_n,\qquad x\_n=\begin{pmatrix}1&0\end{pmatrix}s\_n
$$

첫 성분은 어제 넘어온 몫 $0.4\varepsilon\_{n-1}$ 에 오늘 충격을 더한 $x\_n$ 이고, 둘째 성분은 오늘 충격의 $0.4$ 배다. 이것은 Kalman 필터가 다루는 꼴이다. 상태는 보이지 않고, 매일 상태의 첫 성분만 잡음 없이 관측된다.

Kalman 필터를 돌리면 첫날 관측 뒤 $0.4\varepsilon\_1$ 의 추정값이 $0.4/1.16=0.345$ 로 나온다. 이것이 둘째 날 값의 예측이고, 예측오차 분산은 $1.022$ 다. 실제 값 $0.5$ 와의 차이 $0.155$ 가 둘째 날의 예측오차다. 둘째 날 값이 빠졌다면 상태를 고치지 않고 예측만 한 걸음 더 하면 된다.

# 정의

## 상태공간 표현

ARMA($p,q$) 모형 $\phi(B)x\_n=\theta(B)\varepsilon\_n$ 에서 $r=\max(p,q+1)$ 로 두고, 없는 계수는 $0$ 으로 채운다. 다음 식을 이 모형의 **상태공간 표현** 이라 한다.[^1]

$$
s\_n=Ts\_{n-1}+R\thinspace\varepsilon\_n,\qquad x\_n=Zs\_n
$$

행렬은 다음과 같다.

$$
T=\begin{pmatrix}\phi\_1&1&&\cr \vdots&&\ddots&\cr \phi\_{r-1}&&&1\cr \phi\_r&0&\cdots&0\end{pmatrix},\qquad R=\begin{pmatrix}1\cr\theta\_1\cr\vdots\cr\theta\_{r-1}\end{pmatrix},\qquad Z=\begin{pmatrix}1&0&\cdots&0\end{pmatrix}
$$

$s\_n$ 은 $r$ 차원 **상태 벡터(state vector)** 이고, 첫 성분이 $x\_n$ 이다. 직관 절은 $p=0$, $q=1$, $r=2$, $\theta\_1=0.4$ 인 경우다.

## 예측오차 분해

관측 $x\_1,\dots,x\_{t-1}$ 을 조건으로 준 $x\_t$ 의 예측을 $\hat x\_{t\mid t-1}$ 이라 하고 $v\_t=x\_t-\hat x\_{t\mid t-1}$, $F\_t=\mathrm{Var}(v\_t)$ 로 둔다. 충격이 Gauss 이면 가능도는 다음과 같이 예측오차의 밀도의 곱으로 쓰인다.

$$
\log L=-\frac12\sum\_{t=1}^{n}\Bigl(\log(2\pi F\_t)+\frac{v\_t^2}{F\_t}\Bigr)
$$

이 식을 **예측오차 분해(prediction error decomposition)** 라 한다.[^1] 직관 절에서 $v\_1=1$, $F\_1=1.16$ 이고 $v\_2=0.155$, $F\_2=1.022$ 다.

# 성질

## 표현의 정당성

상태공간 표현의 $x\_n$ 은 원래의 ARMA 식을 만족한다. $\theta\_0=1$, $s\_{n-1,r+1}=0$ 으로 두면 상태의 $i$ 번째 성분은 다음을 따른다.

$$
s\_{n,i}=\phi\_is\_{n-1,1}+s\_{n-1,i+1}+\theta\_{i-1}\varepsilon\_n
$$

마지막 성분부터 거꾸로 첫 성분에 대입하면 $x\_n=\sum\_i\phi\_ix\_{n-i}+\sum\_j\theta\_j\varepsilon\_{n-j}$ 가 나온다.

같은 ARMA 모형의 상태공간 표현은 하나가 아니다. 가역행렬 $M$ 으로 상태를 $Ms\_n$ 으로 바꾸어도 관측 $x\_n$ 의 분포는 같다.

## 초기 상태

과정이 인과적이면 첫 상태의 분포로 정상분포를 쓴다. 그 공분산 $P\_0$ 은 다음 [Stein 방정식](stein-equation.md)의 해다.

$$
P\_0=TP\_0T^{\mathsf T}+\sigma^2RR^{\mathsf T}
$$

직관 절에서 $P\_0$ 의 성분은 $\mathrm{Var}(x\_n)=1.16$, $\mathrm{Cov}(x\_n,0.4\varepsilon\_n)=0.4$, $\mathrm{Var}(0.4\varepsilon\_n)=0.16$ 이다. $F\_1=1.16$ 은 $P\_0$ 의 첫 성분이다.

## 예측오차 분산의 수렴

모형이 가역이면 $F\_t$ 는 $t\to\infty$ 에서 $\sigma^2$ 로 수렴한다.[^2] 관측이 쌓일수록 지난 충격이 지난 값으로 정확히 복원된다. 직관 절의 모형에서 $F\_t$ 는 다음과 같다.

| t | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| $F\_t$ | 1.16 | 1.0221 | 1.0035 | 1.0006 |

$\theta\_1=2.5$ 처럼 가역이 아닌 이동평균(moving average, MA) 모형 MA($1$) 에서는 $F\_t$ 가 $\theta\_1^2\sigma^2=6.25$ 로 수렴한다.[^2]

## 계산량

$n$ 개 관측의 Gauss 가능도를 공분산행렬로 직접 계산하면 $n\times n$ [Toeplitz 행렬](toeplitz-matrices.md)의 행렬식과 역행렬이 필요하다. Kalman 필터는 한 걸음마다 $r\times r$ 행렬 연산만 하므로 계산량이 $O(nr^3)$ 이다.

## 결측값

$x\_t$ 가 빠지면 갱신 단계를 건너뛰고 $\hat s\_{t\mid t}=\hat s\_{t\mid t-1}$ 로 둔다. 가능도의 합에서는 그 항을 뺀다. 직관 절에서 둘째 날 값이 빠지면 셋째 날 예측은 $0$, 예측오차 분산은 $1.16$ 이다. 이틀 떨어진 값끼리 상관이 없으므로 첫날 관측이 셋째 날 예측을 바꾸지 않는다.

# 활용

- 정확한 최대가능도 추정. 예측오차 분해의 $\log L$ 을 계수 $\phi,\theta$ 에 대해 수치 최적화해 [최대가능도 추정](maximum-likelihood.md)을 얻는다. 통계 소프트웨어의 ARMA 추정이 이 방식을 쓴다.[^3]
- 결측값과 불규칙한 간격. 빠진 날은 예측만 하고 넘어간다. 빠진 값의 추정은 [Rauch–Tung–Striebel 평활기](rauch-tung-striebel-smoother.md)로 얻는다.
- [ARIMA 모형](arima-models.md)(autoregressive integrated moving average). 차분 전의 수준을 상태에 더해 넣으면 정상이 아닌 계열도 같은 필터로 다룬다. 이때 첫 상태의 분산을 무한대로 두는 산만한 초기화(diffuse initialization)를 쓴다.[^1]
- 예측. $h$ 걸음 예측과 그 분산은 갱신 없이 예측 단계를 $h$ 번 돌려 얻는다.

[^1]: A. C. Harvey, *Forecasting, Structural Time Series Models and the Kalman Filter*, Cambridge University Press (1989), 3 장.

[^2]: P. J. Brockwell, R. A. Davis, *Time Series: Theory and Methods*, 2nd ed., Springer (1991), 5.5 절과 12.2 절.

[^3]: G. Gardner, A. C. Harvey, G. D. A. Phillips, "Algorithm AS 154: An algorithm for exact maximum likelihood estimation of autoregressive-moving average models by means of Kalman filtering", *Journal of the Royal Statistical Society, Series C* 29 (1980), 311–322.

# 연관 문서

## 선수지식

- [ARMA 모형](arma-models.md)
- [Kalman 필터](kalman-filter.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #linear_algebra
