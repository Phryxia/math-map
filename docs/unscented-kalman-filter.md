# 무향 Kalman 필터

# 개요

**무향 Kalman 필터(unscented Kalman filter)** 는 비선형 함수를 지난 확률변수의 평균과 공분산을 몇 개의 대표점으로 계산해 쓰는 필터다. 차의 위치가 평균 $1$, 분산 $1$ 로 추정될 때 도로 밖 기지국까지 거리의 평균을 물으면, 평균 위치에서의 거리 $\sqrt2$ 는 답보다 작다. 이 필터는 평균과 분산이 추정과 같은 점 세 개를 골라 각 점의 거리를 가중평균해 그 평균을 구하고, 같은 방법으로 공분산과 이득을 계산한다.

# 직관

[확장 Kalman 필터](extended-kalman-filter.md) 문서의 예를 쓴다. 위치 $x$ 의 추정은 평균 $1$, 분산 $1$ 이고 측정은 거리 $\sqrt{x^2+1}$ 에 분산 $1/2$ 인 오차를 더한 값이다. 확장 Kalman 필터는 측정의 평균을 평균 위치의 거리 $\sqrt2\approx 1.414$ 로 예측한다. 거리 곡선은 아래로 볼록해서, 평균 양쪽으로 같은 만큼 떨어진 두 위치의 거리를 평균하면 평균 위치의 거리보다 크다. 그래서 이 예측은 작게 나오고, 실제 평균은 약 $1.624$ 다.

위치 셋 $1$, $1+\sqrt3$, $1-\sqrt3$ 에 무게 $2/3$, $1/6$, $1/6$ 을 주면 이 세 점의 가중평균은 $1$ 이고 가중분산은 $\tfrac16\cdot 3+\tfrac16\cdot 3=1$ 이다. 세 점의 거리는 약 $1.414$, $2.909$, $1.239$ 이고 그 가중평균은 약 $1.634$ 다. 곡선의 휘어짐이 반영되어 실제 평균에 가까워진다.

# 정의

## 무향 변환

$x\in\mathbb R^n$ 의 평균이 $m$, 공분산이 $P$ 이고 $\kappa\gt -n$ 이라 한다. $S$ 가 $SS^{\mathsf T}=(n+\kappa)P$ 를 만족하는 행렬이고 $s_i$ 가 그 $i$ 번째 열일 때, **시그마 점(sigma point)** 과 무게는 다음이다.

$$
\chi_0=m,\qquad \chi_i=m+s_i,\qquad \chi\_{n+i}=m-s_i\qquad(i=1,\dots,n)
$$

$$
W_0=\frac{\kappa}{n+\kappa},\qquad W_i=W\_{n+i}=\frac1{2(n+\kappa)}
$$

$S$ 는 보통 [행렬 분해](matrix-factorizations.md)의 Cholesky 분해로 구한다. 함수 $g$ 에 대해 $y=g(x)$ 의 평균과 공분산, $x$ 와 $y$ 의 교차공분산을 다음으로 근사하는 계산을 **무향 변환(unscented transform)** 이라 한다.

$$
\bar y=\sum_{i=0}^{2n}W_ig(\chi_i),\qquad
P_y=\sum_{i=0}^{2n}W_i\bigl(g(\chi_i)-\bar y\bigr)\bigl(g(\chi_i)-\bar y\bigr)^{\mathsf T},\qquad
P\_{xy}=\sum_{i=0}^{2n}W_i(\chi_i-m)\bigl(g(\chi_i)-\bar y\bigr)^{\mathsf T}
$$

직관 절의 예는 $n=1$, $\kappa=2$ 인 경우다. $S=\sqrt3$ 이고 시그마 점은 $1$, $1\pm\sqrt3$, 무게는 $2/3$, $1/6$, $1/6$ 이다.

## 예측과 갱신

[확장 Kalman 필터](extended-kalman-filter.md)와 같은 모형 $x_k=f(x\_{k-1})+w_k$, $z_k=h(x_k)+v_k$ 에서 **무향 Kalman 필터** 는 다음 두 단계를 번갈아 돌린다.

1. 예측. $(\hat x\_{k-1\mid k-1},P\_{k-1\mid k-1})$ 의 시그마 점에 $f$ 로 무향 변환을 해서 평균 $\hat x\_{k\mid k-1}$ 과 공분산을 얻고, 공분산에 $Q$ 를 더해 $P\_{k\mid k-1}$ 로 둔다.
2. 갱신. $(\hat x\_{k\mid k-1},P\_{k\mid k-1})$ 의 시그마 점에 $h$ 로 무향 변환을 해서 $\hat z_k$, $P_z$, $P\_{xz}$ 를 얻고 다음을 계산한다.

$$
P\_{zz}=P_z+R,\qquad K_k=P\_{xz}P\_{zz}^{-1}
$$

$$
\hat x\_{k\mid k}=\hat x\_{k\mid k-1}+K_k(z_k-\hat z_k),\qquad P\_{k\mid k}=P\_{k\mid k-1}-K_kP\_{zz}K_k^{\mathsf T}
$$

직관 절의 예에서 측정 $z=2$ 를 받으면 $\hat z\approx 1.634$, $P\_{zz}\approx 0.829$, $P\_{xz}\approx 0.482$ 이다. 이득은 $K\approx 0.581$ 이고 새 추정은 평균 약 $1.213$, 분산 약 $0.720$ 이다.

# 성질

## 선형인 경우

시그마 점의 가중평균이 $m$ 이고 가중공분산이 $P$ 이므로, $g(x)=Ax+b$ 이면 $\bar y=Am+b$, $P_y=APA^{\mathsf T}$, $P\_{xy}=PA^{\mathsf T}$ 가 정확히 나온다. 그래서 $f$ 와 $h$ 가 선형이면 무향 Kalman 필터는 [Kalman 필터](kalman-filter.md)와 같은 값을 낸다.

## 근사의 정확도

시그마 점은 $m$ 에 대해 대칭이므로 가중된 홀수 차 중심 모멘트가 $0$ 이다. $x$ 가 Gauss 이면 $\bar y$ 는 $g$ 의 Taylor 전개에서 3 차 항까지 $E\lbrack g(x)\rbrack$ 와 같다.[^1] 확장 Kalman 필터는 1 차 항까지만 맞는다.

$n=1$, $\kappa=2$ 의 세 점과 무게는 정규분포에 대한 3 점 [Gauss 구적](gaussian-quadrature.md)의 Gauss–Hermite 규칙과 같아서, 5 차 이하 다항식의 기댓값을 정확히 계산한다.

## 계산량

Jacobi 행렬이 필요 없고 함수값 $2n+1$ 번과 $n\times n$ 행렬의 Cholesky 분해 한 번으로 한 단계가 끝난다. 그래서 $f$ 나 $h$ 가 미분 가능하지 않거나 미분을 손으로 구하기 어려울 때도 쓴다.

# 활용

- 자세 추정. 회전이 상태에 들어가 전이식과 관측식의 Jacobi 행렬이 복잡해지는 위성과 드론의 자세 추정에 쓴다.
- 비선형 상태공간 모형의 매개변수 추정. 매개변수를 상태에 덧붙여 같은 필터로 함께 추정한다.
- [Gauss 구적](gaussian-quadrature.md)의 다른 규칙으로 시그마 점을 바꾸면 Gauss–Hermite 필터와 cubature Kalman 필터(cubature Kalman filter)가 된다.

[^1]: Simon J. Julier and Jeffrey K. Uhlmann, "Unscented filtering and nonlinear estimation", *Proceedings of the IEEE* 92 (2004), 401–422.

# 연관 문서

## 선수지식

- [확장 Kalman 필터](extended-kalman-filter.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #signal_processing #probability
