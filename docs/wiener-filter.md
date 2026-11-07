# Wiener 필터

# 개요

**Wiener 필터(Wiener filter)** 는 잡음이 섞인 측정값에서 원래 신호를 평균적으로 가장 작은 제곱오차로 추정하는 선형 필터다. 온도를 잴 때마다 측정기가 무작위 오차를 더하면, 오차는 특정 주파수에 몰려 있지 않아 [FIR 필터](fir-filters.md)(finite impulse response)의 영점으로 지울 수 없다. Wiener 필터는 신호와 잡음의 공분산만으로 가중치를 정해 오차의 제곱 평균을 최소로 만든다.

# 직관

진짜 온도 $s\lbrack n\rbrack$ 는 평균이 $0$ 이고 분산이 $1$ 이며, 이웃한 두 시점의 [공분산](covariance.md)이 $\mathrm{Cov}(s\lbrack n\rbrack,s\lbrack n-1\rbrack)=\frac12$ 이다. 측정값은 $x\lbrack n\rbrack=s\lbrack n\rbrack+v\lbrack n\rbrack$ 이고, 오차 $v\lbrack n\rbrack$ 는 평균 $0$, 분산 $1$ 이며 시점끼리도 $s$ 와도 무상관이다. 측정값을 그대로 쓰면 오차의 제곱 평균은 $\mathbb E\lbrack v\lbrack n\rbrack^2\rbrack=1$ 이다. 두 값의 평균 $\frac12(x\lbrack n\rbrack+x\lbrack n-1\rbrack)$ 을 쓰면 $\frac14\mathbb E\lbrack(s\lbrack n\rbrack-s\lbrack n-1\rbrack)^2\rbrack+\frac14\cdot 2=\frac14+\frac12=\frac34$ 이다.

가중치를 $h_0,h_1$ 로 두고 추정값 $h_0x\lbrack n\rbrack+h_1x\lbrack n-1\rbrack$ 의 제곱오차 평균을 $h_0,h_1$ 의 이차식으로 전개한다. 두 변수로 각각 미분해 $0$ 으로 놓으면 다음 연립방정식이 나온다. 계수는 측정값끼리의 공분산 $\mathbb E\lbrack x\lbrack n\rbrack^2\rbrack=2$, $\mathbb E\lbrack x\lbrack n\rbrack x\lbrack n-1\rbrack\rbrack=\frac12$ 이고, 우변은 온도와 측정값의 공분산 $1$, $\frac12$ 이다.

$$
\begin{pmatrix}2&\tfrac12\cr\tfrac12&2\end{pmatrix}\begin{pmatrix}h_0\cr h_1\end{pmatrix}=\begin{pmatrix}1\cr\tfrac12\end{pmatrix}
$$

해는 $h_0=\frac7{15}$, $h_1=\frac2{15}$ 이고 제곱오차 평균은 $1-(\frac7{15}\cdot 1+\frac2{15}\cdot\frac12)=\frac7{15}$ 이다. 두 값의 평균보다 작다. 현재 측정값에 큰 가중치를 주고, 온도와 덜 닮은 한 칸 전 측정값에는 작은 가중치를 준다.

# 정의

## 광의 정상 과정

실수값 확률변수의 수열 $x\lbrack n\rbrack$ $(n\in\mathbb Z)$ 가 모든 $n$ 에서 $\mathbb E\thinspace x\lbrack n\rbrack=0$ 이고 $\mathbb E\lbrack x\lbrack n\rbrack x\lbrack n-k\rbrack\rbrack$ 가 $n$ 에 의존하지 않으면 **광의 정상 과정(wide-sense stationary process)** 이라 한다. 이때

$$
r_x\lbrack k\rbrack=\mathbb E\lbrack x\lbrack n\rbrack x\lbrack n-k\rbrack\rbrack
$$

를 **자기상관(autocorrelation)** 이라 한다. 두 과정 $d,x$ 에 대해 $r_{dx}\lbrack k\rbrack=\mathbb E\lbrack d\lbrack n\rbrack x\lbrack n-k\rbrack\rbrack$ 가 $n$ 에 의존하지 않으면 이것을 **상호상관(cross-correlation)** 이라 한다. 직관 절의 측정값은 $r_x\lbrack 0\rbrack=2$, $r_x\lbrack\pm 1\rbrack=\frac12$ 이고, $d=s$ 로 두면 $r_{dx}\lbrack 0\rbrack=1$, $r_{dx}\lbrack 1\rbrack=\frac12$ 이다.

## Wiener 필터

관측 과정 $x$ 와 목표 과정 $d$ 가 광의 정상이고 상호상관을 가질 때, 차수 $M$ 의 FIR 필터 가운데 **평균제곱오차(mean squared error)**

$$
J(h)=\mathbb E\Bigl\lbrack\Bigl(d\lbrack n\rbrack-\sum_{k=0}^{M}h_k\thinspace x\lbrack n-k\rbrack\Bigr)^2\Bigr\rbrack
$$

를 최소로 하는 계수 $h=(h_0,\dots,h_M)$ 를 갖는 것을 차수 $M$ 의 **Wiener 필터** 라 한다. 직관 절은 $M=1$, $d=s$ 인 경우다.

## Wiener–Hopf 방정식

$R$ 을 $(i,j)$ 성분이 $r_x\lbrack i-j\rbrack$ 인 $(M+1)\times(M+1)$ 행렬, $p$ 를 $k$ 번째 성분이 $r_{dx}\lbrack k\rbrack$ 인 벡터라 하자. 연립방정식

$$
Rh=p
$$

를 **Wiener–Hopf 방정식(Wiener–Hopf equation)** 이라 한다. $R$ 은 대각선을 따라 성분이 같은 Toeplitz 행렬(Toeplitz matrix)이다. 직관 절의 연립방정식이 $M=1$ 의 Wiener–Hopf 방정식이다.

# 성질

## 최적성의 조건

$h$ 가 Wiener 필터의 계수인 것은 $h$ 가 Wiener–Hopf 방정식을 만족하는 것과 동치다. $J$ 를 전개하면

$$
J(h)=r_d\lbrack 0\rbrack-2p^\top h+h^\top Rh
$$

이고 기울기는 $2(Rh-p)$ 다. $R$ 은 벡터 $(x\lbrack n\rbrack,\dots,x\lbrack n-M\rbrack)$ 의 공분산행렬이므로 양의 준정부호이고, $J$ 는 볼록한 이차함수다. 따라서 기울기가 $0$ 인 점이 최소점이다. $R$ 이 양의 정부호이면 해는 $h=R^{-1}p$ 하나뿐이다.

## 직교 원리

오차 $e\lbrack n\rbrack=d\lbrack n\rbrack-\sum_kh_kx\lbrack n-k\rbrack$ 에 대해 Wiener–Hopf 방정식은

$$
\mathbb E\lbrack e\lbrack n\rbrack\thinspace x\lbrack n-k\rbrack\rbrack=0\qquad(0\le k\le M)
$$

과 같다. 이것을 **직교 원리(orthogonality principle)** 라 한다. 평균이 $0$ 인 확률변수의 공간에서 $\mathbb E\lbrack XY\rbrack$ 는 내적이므로, Wiener 필터의 출력은 $d\lbrack n\rbrack$ 를 $x\lbrack n\rbrack,\dots,x\lbrack n-M\rbrack$ 이 펼치는 부분공간에 정사영한 것이다. 이 사실을 쓰면 최소 오차는

$$
J_{\min}=\mathbb E\lbrack e\lbrack n\rbrack d\lbrack n\rbrack\rbrack=r_d\lbrack 0\rbrack-p^\top h
$$

이다. 직관 절의 $\frac7{15}$ 가 이 식으로 나왔다.

## 계산량

일반 연립방정식의 소거법은 $O(M^3)$ 번의 연산이 든다. $R$ 이 Toeplitz 이므로 차수 $m$ 의 해에서 차수 $m+1$ 의 해를 $O(m)$ 번의 연산으로 얻는 점화식이 있고, 전체는 $O(M^2)$ 번이다. 이 점화식이 Levinson–Durbin 알고리즘(Levinson–Durbin algorithm)이다.

## 주파수 영역의 해

과거와 미래의 모든 관측 $x\lbrack n-k\rbrack$ $(k\in\mathbb Z)$ 을 쓰는 무한 길이 필터에서는 직교 원리가 모든 $k$ 에 대해

$$
\sum_{j\in\mathbb Z}h_j\thinspace r_x\lbrack k-j\rbrack=r_{dx}\lbrack k\rbrack
$$

가 된다. 좌변은 합성곱이므로 이산시간 [Fourier 변환](fourier-transform.md)을 취하면 곱이 된다. $S_x(\omega)=\sum_kr_x\lbrack k\rbrack e^{-i\omega k}$ 를 $x$ 의 **전력 스펙트럼 밀도(power spectral density)**, 같은 꼴의 $S_{dx}$ 를 상호 전력 스펙트럼 밀도라 하면 해는 다음과 같다.

$$
H(e^{i\omega})=\frac{S_{dx}(\omega)}{S_x(\omega)}
$$

$x=s+v$ 이고 $s$ 와 $v$ 가 무상관이며 $d=s$ 이면 $S_{dx}=S_s$, $S_x=S_s+S_v$ 이므로 $H=S_s/(S_s+S_v)$ 다. 신호의 세기가 잡음보다 큰 주파수에서는 $H$ 가 $1$ 에 가깝고, 잡음이 큰 주파수에서는 $0$ 에 가깝다. 이 필터는 미래의 관측을 쓰므로 실시간으로 계산할 수 없다. 과거의 관측만 쓰도록 제한한 해는 $S_x$ 를 단위원 안과 밖의 인수로 나누는 스펙트럼 인수분해(spectral factorization)로 구한다[^1].

# 활용

- 잡음 제거. 녹음과 영상에서 잡음의 전력 스펙트럼 밀도를 추정해 주파수마다 $S_s/(S_s+S_v)$ 를 곱한다.
- 선형 예측. $d\lbrack n\rbrack=x\lbrack n+1\rbrack$ 로 두면 $p$ 의 성분이 $r_x\lbrack k+1\rbrack$ 이 되고, Wiener–Hopf 방정식의 해가 다음 값을 과거 값의 가중합으로 예측하는 계수다. 음성 부호화가 이 계수를 프레임마다 보낸다.
- 영상 복원. 흐림 필터 $G$ 를 거친 뒤 잡음이 붙은 영상에서는 $H=\overline{G}S_s/(\lvert G\rvert^2S_s+S_v)$ 가 같은 방법으로 나온다. $S_v=0$ 이면 $H=1/G$ 이고, 잡음이 있으면 $G$ 가 작은 주파수를 크게 키우지 않는다.
- 적응 필터. 자기상관을 모를 때 Wiener–Hopf 방정식을 풀지 않고 $J$ 의 기울기 $2(Rh-p)$ 를 관측 하나로 추정해 계수를 조금씩 고치는 방법이 [LMS 알고리즘](lms-algorithm.md)(least mean squares)이다. 계수는 Wiener 필터의 해 근처로 수렴한다.
- [Kalman 필터](kalman-filter.md)는 상태공간 모형에서 같은 평균제곱오차를 시점마다 재귀로 최소화한다. 모형이 시불변이고 정상 상태에 이르면 과거 관측만 쓰는 Wiener 필터와 같은 필터가 된다.

[^1]: N. Wiener, *Extrapolation, Interpolation, and Smoothing of Stationary Time Series*, MIT Press, 1949.

# 연관 문서

## 선수지식

- [공분산](covariance.md)
- [FIR 필터](fir-filters.md)

## 더 알아보기

- [LMS 알고리즘](lms-algorithm.md)

#signal_processing #statistics #probability #linear_algebra
