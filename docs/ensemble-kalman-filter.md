# 앙상블 Kalman 필터

# 개요

**앙상블 Kalman 필터(ensemble Kalman filter)** 는 상태의 공분산을 행렬로 들고 다니는 대신, 모형을 여러 번 돌린 결과의 흩어짐으로 공분산을 어림해 [Kalman 필터](kalman-filter.md)의 갱신을 하는 방법이다. 일기예보의 상태는 격자점마다의 기온, 기압, 바람으로 수천만 개의 수이고, 그 공분산행렬은 칸이 $10^{14}$ 개를 넘어 저장할 수도 없다. 앙상블 Kalman 필터는 초기 상태를 조금씩 달리한 예보 수십 개를 돌리고, 그 예보들이 서로 얼마나 다른지로 Kalman 이득을 계산한다.

# 직관

[Kalman 필터](kalman-filter.md)의 예측 단계는 $P\_{k\mid k-1}=FP\_{k-1\mid k-1}F^{\mathsf T}+Q$ 를 계산한다. 상태가 $n$ 차원이면 $F$ 를 곱하는 것은 모형을 한 걸음 돌리는 것이고, $P$ 의 열 $n$ 개에 각각 $F$ 를 곱해야 하므로 모형을 $n$ 번 돌려야 한다. $n=10^7$ 이면 한 단계에 모형을 천만 번 돌려야 한다.

예측 단계가 하는 일은 지금 상태의 불확실성이 모형을 거쳐 어떻게 퍼지는지 보는 것이다. 그래서 지금 추정의 분포에서 상태 $N$ 개를 뽑아 각각 모형으로 한 걸음 돌리고, 결과의 표본 평균과 표본 공분산을 예측으로 쓴다. 모형은 $N$ 번만 돌린다.

1차원에서 네 상태를 돌린 결과가 $9,10,11,12$ 라 한다. 표본 평균은 $10.5$, 표본 분산은 $\bigl(1.5^2+0.5^2+0.5^2+1.5^2\bigr)/3=5/3$ 이다. 오차 분산 $1$ 인 측정 $12$ 를 받으면 이득은 $(5/3)/(5/3+1)=5/8$ 이고, 평균은 $10.5+\tfrac58(12-10.5)\approx 11.44$ 로 옮겨 간다.

# 정의

## 앙상블과 표본 공분산

**앙상블(ensemble)** 은 상태의 표본 $x^{(1)},\dots,x^{(N)}\in\mathbb R^n$ 이다. 표본 평균 $\bar x$ 와 편차행렬 $A$, 표본 [공분산](covariance.md) $\hat P$ 는 다음이다.

$$
\bar x=\frac1N\sum_{i=1}^Nx^{(i)},\qquad
A=\frac1{\sqrt{N-1}}\bigl\lbrack x^{(1)}-\bar x,\dots,x^{(N)}-\bar x\bigr\rbrack,\qquad
\hat P=AA^{\mathsf T}
$$

$A$ 는 $n\times N$ 행렬이고 $\hat P$ 를 $n\times n$ 행렬로 만들 필요는 없다.

## 예측과 갱신

모형 $x_k=f(x\_{k-1})+w_k$, $z_k=Hx_k+v_k$, $w_k\sim N(0,Q)$, $v_k\sim N(0,R)$ 에서 **앙상블 Kalman 필터** 는 다음 두 단계를 번갈아 돌린다.[^1]

1. 예측. 각 $i$ 마다 $w^{(i)}\sim N(0,Q)$ 를 뽑아 $x_k^{f,(i)}=f(x\_{k-1}^{a,(i)})+w^{(i)}$ 로 둔다.
2. 갱신. 예측 앙상블의 편차행렬 $A^f$ 로 이득을 계산하고, 각 $i$ 마다 $v^{(i)}\sim N(0,R)$ 을 뽑아 앙상블의 원소를 하나씩 옮긴다.

$$
K=A^f(HA^f)^{\mathsf T}\bigl(HA^f(HA^f)^{\mathsf T}+R\bigr)^{-1}
$$

$$
x_k^{a,(i)}=x_k^{f,(i)}+K\bigl(z_k+v^{(i)}-Hx_k^{f,(i)}\bigr)
$$

$K$ 는 [Kalman 필터](kalman-filter.md)의 이득에서 $P\_{k\mid k-1}$ 을 $A^f(A^f)^{\mathsf T}$ 로 바꾼 것이다. 위 첨자 $f$ 는 예측(forecast), $a$ 는 갱신 결과(analysis)를 가리킨다. 직관 절의 예는 $n=m=1$, $N=4$, $H=1$, $R=1$ 이다.

## 관측 섭동

갱신에서 관측에 $v^{(i)}$ 를 더하는 것을 **관측 섭동(perturbed observations)** 이라 한다. 섭동이 없으면 갱신된 앙상블의 표본 공분산이 $(I-KH)\hat P^f(I-KH)^{\mathsf T}$ 가 되어, Kalman 필터의 $(I-KH)\hat P^f$ 보다 $KRK^{\mathsf T}$ 만큼 작다. 섭동을 더하면 그 항이 기댓값으로 다시 더해진다.[^2]

# 성질

## Kalman 필터로의 수렴

$f$ 가 선형이고 잡음이 Gauss 이면, $N\to\infty$ 일 때 앙상블의 표본 평균과 표본 공분산이 [Kalman 필터](kalman-filter.md)의 $\hat x\_{k\mid k}$ 와 $P\_{k\mid k}$ 로 수렴한다. $f$ 가 비선형이면 평균과 공분산만 갱신에 쓰므로 필터링 분포의 다른 모양은 반영되지 않는다.

## 계수와 계산량

$\hat P=AA^{\mathsf T}$ 의 계수는 $N-1$ 이하다. 갱신이 각 원소에 더하는 $K(\cdot)$ 는 $A^f$ 의 열들이 만드는 공간에 있으므로, 앙상블은 처음 편차들이 만든 $N-1$ 차원 공간 밖으로 고쳐지지 않는다. 저장하는 것은 $n\times N$ 행렬이고 역행렬은 $m\times m$ 하나뿐이어서, 모형을 $N$ 번 돌리는 비용이 계산을 지배한다.

## 표본 오차와 국소화

$N$ 이 $n$ 보다 훨씬 작으면 표본 공분산에 서로 먼 격자점 사이의 거짓 상관이 생긴다. 그러면 한 지점의 관측이 관계없는 먼 지점의 상태를 바꾼다. 거리에 따라 $1$ 에서 $0$ 으로 줄어드는 상관 함수의 행렬 $\rho$ 를 잡아 $\hat P$ 대신 성분별 곱 $\rho\circ\hat P$ 를 쓰는 것을 **공분산 국소화(covariance localization)** 라 한다.[^3] 표본 오차로 퍼짐이 작게 추정되는 것을 보완하려고 편차행렬에 $1$ 보다 큰 상수를 곱하는 공분산 팽창(covariance inflation)도 함께 쓴다.

# 활용

- 수치 일기예보와 해양 모형의 자료 동화(data assimilation). 위성과 관측소의 측정을 수천만 차원의 모형 상태에 반영한다.
- 지하수와 유전 저류층 모형의 매개변수 추정. 투수율처럼 공간에 분포한 매개변수를 상태에 덧붙여 생산 기록으로 고친다.
- [입자 필터](particle-filter.md)가 차원 때문에 쓸 수 없는 문제에서 그 대안으로 쓴다. 앙상블 원소는 모두 같은 무게를 갖고, 갱신이 원소를 옮겨서 무게의 퇴화가 일어나지 않는다.

[^1]: Geir Evensen, "Sequential data assimilation with a nonlinear quasi-geostrophic model using Monte Carlo methods to forecast error statistics", *Journal of Geophysical Research* 99 (1994), 10143–10162.
[^2]: Gerrit Burgers, Peter Jan van Leeuwen, and Geir Evensen, "Analysis scheme in the ensemble Kalman filter", *Monthly Weather Review* 126 (1998), 1719–1724.
[^3]: P. L. Houtekamer and Herschel L. Mitchell, "A sequential ensemble Kalman filter for atmospheric data assimilation", *Monthly Weather Review* 129 (2001), 123–137.

# 연관 문서

## 선수지식

- [Kalman 필터](kalman-filter.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #signal_processing #probability
