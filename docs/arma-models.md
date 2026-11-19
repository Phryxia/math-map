# ARMA 모형

# 개요

**ARMA 모형(autoregressive moving average model)** 은 시계열의 오늘 값을 지난 값들의 일차결합과 지난 잡음들의 일차결합의 합으로 놓는 모형이다. 측정 장치가 받은 충격이 하루만 남고 사라지는 시계열은 하루 떨어진 값끼리만 상관되고 이틀부터는 상관이 $0$ 인데, [자기회귀 모형](autoregressive-models.md)으로 이 모양을 맞추려면 지난 값을 끝없이 많이 써야 한다. ARMA 모형은 지난 잡음 항 몇 개를 더해, 적은 계수로 이런 시계열과 자기회귀 꼴의 시계열을 함께 적는다.

# 직관

오늘 측정값이 오늘의 충격과 어제 충격의 $0.4$ 배의 합이라 한다. 충격 $\varepsilon\_n$ 은 평균 $0$, 분산 $1$ 이고 서로 상관이 없다.

$$
x\_n=\varepsilon\_n+0.4\thinspace\varepsilon\_{n-1}
$$

분산은 $1+0.16=1.16$ 이다. 하루 떨어진 두 값은 $\varepsilon\_{n-1}$ 을 함께 가지므로 공분산이 $0.4$ 이고 자기상관은 $0.4/1.16=0.345$ 다. 이틀 떨어진 두 값은 공통 충격이 없어 자기상관이 $0$ 이다.

자기회귀 모형은 자기상관이 기하급수로 줄 뿐 $0$ 으로 끊기지 않는다. 위 식을 충격에 대해 거꾸로 풀면 다음과 같이 지난 값이 전부 들어간다.

$$
\varepsilon\_n=x\_n-0.4x\_{n-1}+0.16x\_{n-2}-0.064x\_{n-3}+\cdots
$$
 그래서 지난 충격을 직접 항으로 두는 쪽이 계수 하나로 끝난다.

# 정의

## 이동평균 모형

$\varepsilon\_n$ 을 분산 $\sigma^2$ 인 백색잡음이라 하자. 다음 꼴의 과정을 차수 $q$ 의 **이동평균 모형(moving average model, MA)** 이라 하고 MA($q$) 로 쓴다.

$$
x\_n=\varepsilon\_n+\theta\_1\varepsilon\_{n-1}+\cdots+\theta\_q\varepsilon\_{n-q}
$$

다음 다항식을 **이동평균 다항식(moving average polynomial)** 이라 한다.

$$
\theta(z)=1+\theta\_1z+\cdots+\theta\_qz^q
$$
 직관 절은 $q=1$, $\theta(z)=1+0.4z$ 다.

## ARMA(p, q) 모형

자기회귀 다항식 $\phi(z)=1-\phi\_1z-\cdots-\phi\_pz^p$ 와 이동평균 다항식 $\theta$ 로 다음을 만족하는 약정상 과정을 ARMA($p,q$) 모형이라 한다. $B$ 는 $Bx\_n=x\_{n-1}$ 인 연산이다.

$$
\phi(B)x\_n=\theta(B)\varepsilon\_n
$$

$\phi$ 와 $\theta$ 는 공통근이 없다고 둔다. $p=0$ 이면 MA($q$), $q=0$ 이면 AR($p$)(autoregressive) 모형이다.

# 성질

## 인과성과 가역성

$\phi$ 의 근이 모두 단위원 밖에 있으면 해가 지난 충격의 급수 $x\_n=\sum\_{j\ge 0}\psi\_j\varepsilon\_{n-j}$ 로 적힌다. 이것을 **인과성(causality)** 이라 한다.

$\theta$ 의 근이 모두 단위원 밖에 있으면 충격이 지난 값의 급수로 적힌다. 이것을 **가역성(invertibility)** 이라 한다.[^1] 계수는 다음 멱급수로 정해진다.

$$
\sum\_{j\ge 0}\psi\_jz^j=\frac{\theta(z)}{\phi(z)}
$$

직관 절의 $\theta(z)=1+0.4z$ 는 근이 $-2.5$ 라 가역이고, 거꾸로 푼 급수의 계수가 $(-0.4)^j$ 다.

## 자기공분산

MA($q$) 의 자기공분산은 $\vert k\vert\gt q$ 에서 $0$ 이다. ARMA($1,1$) 모형 $x\_n=0.5x\_{n-1}+\varepsilon\_n+0.4\varepsilon\_{n-1}$($\sigma^2=1$)은 $\psi\_0=1$, $\psi\_j=0.9\cdot 0.5^{j-1}$ 이고, 다음이 나온다.

$$
\gamma(0)=\sum\_j\psi\_j^2=2.08,\qquad \gamma(1)=\sum\_j\psi\_j\psi\_{j+1}=1.44
$$

$k\ge 2$ 에서는 $\gamma(k)=0.5\thinspace\gamma(k-1)$ 이다. 첫 걸음의 상관 $0.692$ 는 이동평균 부분이 정하고, 그 뒤의 감소율 $0.5$ 는 자기회귀 부분이 정한다.

## 자기상관의 모양으로 차수 고르기

자기상관이 $q$ 다음에 끊기면 MA($q$), 편자기상관이 $p$ 다음에 끊기면 AR($p$) 이고, 둘 다 기하급수로 줄면 ARMA 를 고른다. 이 판정과 [정보 기준](information-criteria.md)을 함께 쓰는 절차가 Box–Jenkins 방법(Box–Jenkins method)이다.[^2] 정상이 아닌 계열은 먼저 차분해 [ARIMA 모형](arima-models.md)으로 다룬다.

## 스펙트럼 밀도

ARMA($p,q$) 과정의 스펙트럼 밀도는 두 다항식의 비로 적힌다.

$$
f(\omega)=\frac{\sigma^2}{2\pi}\frac{\vert\theta(e^{-i\omega})\vert^2}{\vert\phi(e^{-i\omega})\vert^2}
$$

$\theta$ 의 근이 단위원에 가까우면 그 진동수에서 스펙트럼이 0 에 가깝게 파이고, $\phi$ 의 근이 가까우면 봉우리가 선다.

# 활용

- 예측. 가역인 모형은 충격을 지난 값으로 복원해 $h$ 걸음 예측을 계산한다. [상태공간 꼴](arma-state-space.md)로 바꾸어 [Kalman 필터](kalman-filter.md)로 가능도와 예측을 함께 계산하기도 한다.
- [ARFIMA 모형](arfima-models.md). 차분 횟수를 실수 $d$ 로 둔 확장으로, 자기상관이 거듭제곱으로 천천히 주는 시계열을 다룬다.
- 디지털 필터. 백색잡음을 극과 영점이 있는 IIR(infinite impulse response) 필터에 통과시킨 출력이 ARMA 과정이다. $\phi$ 의 근이 극이고 $\theta$ 의 근이 영점이다.

[^1]: P. J. Brockwell, R. A. Davis, *Time Series: Theory and Methods*, 2nd ed., Springer (1991), 3 장.

[^2]: G. E. P. Box, G. M. Jenkins, *Time Series Analysis: Forecasting and Control*, Holden-Day (1970).

# 연관 문서

## 선수지식

- [자기회귀 모형](autoregressive-models.md)

## 더 알아보기

- [ARIMA 모형](arima-models.md)
- [ARFIMA 모형](arfima-models.md)
- [Whittle 추정량](whittle-estimator.md)
- [ARMA 모형의 상태공간 표현](arma-state-space.md)

#statistics #probability #signal_processing
