# Whittle 추정량

# 개요

**Whittle 추정량(Whittle estimator)** 은 정상 시계열 모형의 모수를, 자료의 주기도와 모형의 스펙트럼 밀도를 진동수마다 맞추어 추정하는 방법이다. [ARMA 모형](arma-models.md)의 계수를 [최대가능도 추정](maximum-likelihood.md)으로 구하려면 관측 $n$ 개의 $n\times n$ 공분산행렬의 역행렬과 행렬식이 모수마다 필요하다. Whittle 추정량은 [Fourier 변환](fourier-transform.md)이 이 행렬을 거의 대각으로 만든다는 것을 써서, 가능도를 진동수별 항의 합으로 바꾸어 계산한다.

# 직관

관측 $1,2,-1,0$ 이 평균 $0$ 인 백색잡음이라 놓고 분산 $\sigma^2$ 를 추정한다. Fourier 변환 $X\_j=\sum\_tx\_te^{-2\pi ijt/4}$ 는 $X\_0=2$, $X\_1=2-2i$, $X\_2=-2$, $X\_3=2+2i$ 이고, 제곱한 크기는 $4,8,4,8$ 이다.

백색잡음의 스펙트럼 밀도는 진동수에 무관한 상수 $\sigma^2/(2\pi)$ 다. 진동수마다 주기도 $I\_j=\vert X\_j\vert^2/(2\pi n)$ 이 이 상수 근처에 흩어진다고 보고, 그 흩어짐이 가장 그럴듯한 $\sigma^2$ 를 찾는다. $X\_0$ 은 관측의 합이라 평균에 쓰이므로 빼고 남은 세 진동수를 쓴다.

계산하면 $\sigma^2$ 는 세 주기도의 평균에 $2\pi$ 를 곱한 값 $20/12=5/3$ 이다. 이것은 표본평균 $\frac12$ 를 뺀 제곱합 $6-1=5$ 를 $3$ 으로 나눈 표본분산과 같다.

모형의 스펙트럼 밀도가 진동수마다 다르면, 같은 계산이 진동수마다 다른 무게로 주기도를 맞추는 일이 된다. 행렬의 역을 구하지 않고 고속 Fourier 변환 한 번과 진동수에 대한 합만 쓴다.

# 정의

## 주기도

관측 $x\_1,\dots,x\_n$ 과 Fourier 진동수 $\omega\_j=2\pi j/n$ 에 대해 다음을 **주기도(periodogram)** 라 한다.

$$
I(\omega\_j)=\frac{1}{2\pi n}\Bigl\vert\sum\_{t=1}^nx\_te^{-it\omega\_j}\Bigr\vert^2
$$

## Whittle 가능도

스펙트럼 밀도가 $f\_\vartheta$ 인 모형족에 대해 다음을 Whittle 음의 로그가능도라 하고, 이것을 최소화하는 $\hat\vartheta$ 를 Whittle 추정량이라 한다.[^1]

$$
\ell\_W(\vartheta)=\sum\_{j}\Bigl(\log f\_\vartheta(\omega\_j)+\frac{I(\omega\_j)}{f\_\vartheta(\omega\_j)}\Bigr)
$$

합은 $0\lt\omega\_j\lt 2\pi$ 인 진동수에 대해 하고, $\omega\_0=0$ 은 평균의 영향을 받으므로 뺀다. 직관 절은 $f\_\vartheta=\sigma^2/(2\pi)$ 이고, 미분해 $0$ 으로 두면 $\sigma^2=(2\pi/m)\sum\_jI(\omega\_j)$ 가 나온다. 여기서 $m$ 은 합의 항 수다.

# 성질

## 정확한 가능도와의 관계

평균이 $0$ 인 Gauss 정상 과정의 음의 로그가능도는 상수를 빼면 $\frac12(\log\det\Gamma\_n+x^{\mathsf T}\Gamma\_n^{-1}x)$ 다. $\Gamma\_n$ 은 [Toeplitz 행렬](toeplitz-matrices.md)이고, $n$ 이 크면 Fourier 기저에서 거의 대각이며 대각 성분이 $2\pi f(\omega\_j)$ 에 가깝다. 이 근사로 $\log\det\Gamma\_n\approx\sum\_j\log(2\pi f(\omega\_j))$, $x^{\mathsf T}\Gamma\_n^{-1}x\approx\sum\_jI(\omega\_j)/f(\omega\_j)$ 가 되어 Whittle 가능도가 나온다.

## 점근 성질

단기 의존인 ARMA 모형에서 Whittle 추정량은 일치추정량이고, 정확한 Gauss 최대가능도 추정량과 같은 점근 정규분포를 갖는다.[^2] 장기 의존인 [ARFIMA 모형](arfima-models.md)에서도 $0\lt d\lt\frac12$ 이면 일치성과 $\sqrt n$ 점근 정규성이 성립한다.[^3]

## 계산량

주기도는 [고속 Fourier 변환](fft.md)으로 $O(n\log n)$ 에 한 번 구한다. 그 뒤 모수를 바꿀 때마다 진동수 $n$ 개에서 $f\_\vartheta$ 를 계산하면 되므로 한 번의 평가가 $O(n)$ 이다. 정확한 가능도는 Durbin–Levinson 재귀로도 평가마다 $O(n^2)$ 이 든다.

# 활용

- 장기 의존의 $d$ 추정. ARFIMA 모형의 $d$ 를 Whittle 가능도로 추정하고, 원점 근처의 진동수만 쓰는 국소 Whittle 추정량은 단기 부분의 모형을 정하지 않고 $d$ 를 추정한다.
- [스펙트럼 추정](spectral-estimation.md)과의 연결. 모수 모형의 스펙트럼을 주기도에 맞추는 방법이라, 비모수 스펙트럼 추정의 결과를 모수 모형으로 요약할 때 쓴다.
- 공간 자료. 격자 위의 정상 확률장에서 2 차원 주기도로 같은 가능도를 세워 공분산 모수를 추정한다.

[^1]: P. Whittle, *Hypothesis Testing in Time Series Analysis*, Almqvist & Wiksell (1951).

[^2]: E. J. Hannan, "The asymptotic theory of linear time-series models", *Journal of Applied Probability* 10 (1973), 130–145.

[^3]: R. Fox, M. S. Taqqu, "Large-sample properties of parameter estimates for strongly dependent stationary Gaussian time series", *Annals of Statistics* 14 (1986), 517–532.

# 연관 문서

## 선수지식

- [ARMA 모형](arma-models.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #signal_processing #probability
