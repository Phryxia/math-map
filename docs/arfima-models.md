# ARFIMA 모형

# 개요

**ARFIMA 모형(autoregressive fractionally integrated moving average model)** 은 시계열을 차분하는 횟수를 정수가 아닌 $d$ 로 둔 모형으로, 멀리 떨어진 값들 사이의 상관이 거듭제곱으로 천천히 줄어드는 시계열을 다룬다. 강의 연간 유량이나 인터넷 트래픽은 수십 걸음 떨어진 값들도 눈에 띄게 상관되어 있는데, [자기회귀 모형](autoregressive-models.md)의 자기상관은 기하급수적으로 줄어 열 걸음만 가도 거의 $0$ 이다. ARFIMA 모형은 $(1-B)^d$ 를 이항급수로 펼친 무한 개의 계수로 이 느린 감소를 매개변수 $d$ 하나에 담는다.

# 직관

자기회귀 모형 문서의 $x\_n=\phi x\_{n-1}+\varepsilon\_n$ 에서 하루 떨어진 자기상관은 $\phi$ 이고 $k$ 일 떨어진 것은 $\phi^k$ 다. $\phi=0.4286$ 이면 열흘 떨어진 상관은 $0.00021$, 백 일 떨어진 상관은 $10^{-37}$ 쯤이다.

하루 떨어진 상관이 같은 $0.4286$ 이면서 열흘 뒤에도 $0.17$, 백 일 뒤에도 $0.07$ 이 남는 시계열을 만들고 싶다. 자기회귀 모형은 지난 값 몇 개만 쓰므로 상관이 기하급수로 끊긴다. 그래서 지난 값을 전부 쓰되 무게가 거듭제곱으로 줄게 한다.

$B$ 를 하루 전으로 옮기는 연산 $Bx\_n=x\_{n-1}$ 이라 하면, 하루 차분은 $(1-B)x\_n=x\_n-x\_{n-1}$ 이다. $(1-B)^{0.3}$ 을 이항급수로 펼치면 계수가 다음과 같이 거듭제곱 속도로 줄어든다.

$$
1,\thinspace -0.3,\thinspace -0.105,\thinspace -0.0595,\thinspace -0.0402,\thinspace \dots
$$
 $(1-B)^{0.3}x\_n=\varepsilon\_n$ 으로 정한 시계열의 자기상관이 $k=1,2,10,100$ 에서 $0.4286$, $0.3277$, $0.173$, $0.069$ 다.

# 정의

## 분수 차분

실수 $d\gt -1$ 에 대해 **분수 차분(fractional differencing)** 은 다음 연산이다.

$$
(1-B)^d=\sum\_{k\ge 0}\pi\_kB^k,\qquad \pi\_0=1,\quad \pi\_k=\pi\_{k-1}\frac{k-1-d}{k}
$$

계수는 이항계수 $\binom dk(-1)^k$ 이다. $d$ 가 음이 아닌 정수이면 급수가 유한해 보통의 차분이 되고, 그 밖에는 계수가 모두 $0$ 이 아니다. 직관 절의 계수는 $d=0.3$ 인 경우다.

## ARFIMA(p, d, q) 모형

두 다항식을 다음과 같이 둔다.

$$
\phi(z)=1-\phi\_1z-\cdots-\phi\_pz^p,\qquad \theta(z)=1+\theta\_1z+\cdots+\theta\_qz^q
$$

$\varepsilon\_n$ 이 백색잡음일 때, 다음을 만족하는 약정상 과정을 ARFIMA($p,d,q$) 모형이라 한다.[^1]

$$
\phi(B)(1-B)^dx\_n=\theta(B)\varepsilon\_n
$$

$d=0$ 이면 [ARMA 모형](arma-models.md)이다. 직관 절의 시계열은 $p=q=0$, $d=0.3$ 인 ARFIMA($0,0.3,0$) 이다.

# 성질

## 정상성과 가역성

$\phi$ 와 $\theta$ 의 근이 모두 단위원 밖에 있다고 하자. $d\lt\frac12$ 이면 약정상 해가 하나뿐이고, $d\gt-\frac12$ 이면 $\varepsilon\_n$ 을 지난 $x$ 의 급수로 적을 수 있다.[^2] ARFIMA($0,d,0$) 의 잡음 급수는 $(1-B)^{-d}$ 의 계수 $\psi\_k=\psi\_{k-1}(k-1+d)/k$ 를 쓰고, $\psi\_k$ 가 $k^{d-1}$ 의 속도로 줄어 $d\lt\frac12$ 일 때 제곱합이 유한하다.

## 자기상관

ARFIMA($0,d,0$) 의 자기상관은 다음 점화식을 따른다.

$$
\rho(0)=1,\qquad \rho(k)=\rho(k-1)\frac{k-1+d}{k-d}
$$

$k$ 가 크면 다음 꼴로 줄어든다.[^2]

$$
\rho(k)\sim\frac{\Gamma(1-d)}{\Gamma(d)}k^{2d-1}
$$

$0\lt d\lt\frac12$ 이면 $2d-1\gt -1$ 이므로 $\sum\_k\rho(k)$ 가 발산한다. 자기상관의 합이 발산하는 정상 과정을 **장기 의존(long-range dependence)** 이라 한다. 자기회귀 모형의 자기상관은 합이 유한하다.

## 스펙트럼 밀도와 Hurst 지수

ARFIMA($0,d,0$) 의 스펙트럼 밀도는 다음과 같다.

$$
f(\omega)=\frac{\sigma^2}{2\pi}\Bigl(2\sin\frac\omega2\Bigr)^{-2d}
$$

$\omega\to 0$ 에서 $\omega^{-2d}$ 로 발산한다. 부분합 $\sum\_{n\le N}x\_n$ 의 분산은 $N^{2d+1}$ 로 커지므로 $H=d+\frac12$ 가 [자기유사 과정](self-similar-processes.md)의 Hurst 지수(Hurst exponent) 자리에 온다. [재조정 범위 분석](rescaled-range.md)이 추정하는 $H$ 가 이 값이다.

# 활용

- 수문학. Hurst 가 Nile 강의 수위를 비롯한 여러 지구물리 기록에서 찾은 평균 $H\approx 0.73$ 은 ARFIMA 모형의 $d\approx 0.23$ 에 해당한다. 저수지 용량 설계에서 가뭄이 이어지는 길이를 이 모형으로 계산한다.
- 금융 변동성. 수익률 자체는 상관이 약하지만 수익률의 절댓값이나 제곱은 느리게 줄어드는 자기상관을 보여, 변동성 모형에 분수 차분을 넣는다.
- $d$ 의 추정. 원점 근처 주기도의 로그를 $\log(2\sin(\omega/2))$ 에 회귀한 기울기로 $-2d$ 를 추정하는 [Geweke–Porter-Hudak 추정량](geweke-porter-hudak-estimator.md)과, 스펙트럼 밀도로 근사 가능도를 세우는 [Whittle 추정량](whittle-estimator.md)이 쓰인다. 원점 근처의 진동수만 쓰는 판이 [국소 Whittle 추정량](local-whittle-estimator.md)이다.

[^1]: C. W. J. Granger, R. Joyeux, "An introduction to long-memory time series models and fractional differencing", *Journal of Time Series Analysis* 1 (1980), 15–29.

[^2]: J. R. M. Hosking, "Fractional differencing", *Biometrika* 68 (1981), 165–176.

# 연관 문서

## 선수지식

- [ARMA 모형](arma-models.md)

## 더 알아보기

- [국소 Whittle 추정량](local-whittle-estimator.md)
- [Geweke–Porter-Hudak 추정량](geweke-porter-hudak-estimator.md)

#statistics #probability #signal_processing
