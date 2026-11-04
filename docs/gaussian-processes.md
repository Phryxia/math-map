# Gauss 과정

# 개요

**Gauss 과정(Gaussian process)** 은 아무 시점 몇 개를 골라도 그 값들이 함께 [정규분포](normal-distribution.md)를 따르는 무작위 함수다. 몇 군데에서 잰 기온으로 그 사이 지점의 기온과 그 추정의 불확실성을 함께 구하려면, 함수 전체에 확률을 주어야 한다. Gauss 과정은 두 지점의 값이 얼마나 함께 움직이는지를 주는 함수 하나로 이 확률을 정해, 잰 값이 주어졌을 때 나머지 지점의 평균과 분산을 [행렬](matrices.md) 계산으로 구한다.

# 직관

지점 $0$ 에서 기온의 편차(평균을 뺀 값, 단위를 맞춘 것)를 재니 $10$ 이었다. 지점 $1$ 의 편차를 예측하려면 두 값이 함께 어떻게 분포하는지 알아야 한다. 두 값이 평균 $0$, 분산 $1$, [공분산](covariance.md) $c$ 인 2 변량 정규분포를 따른다고 두면, 지점 $0$ 의 값이 $10$ 일 때 지점 $1$ 의 값은 평균 $10c$, 분산 $1-c^2$ 인 정규분포를 따른다.

지점이 여럿이어도 모든 쌍의 공분산을 정해 두면 같은 계산이 행렬 계산이 된다. 공분산을 거리 $d$ 의 함수 $e^{-d^2/2}$ 로 정하면 거리 $1$ 에서 $c=e^{-1/2}\approx0.61$ 이고, 예측의 평균은 $6.1$, 분산은 $1-e^{-1}\approx0.63$ 이다. 거리 $3$ 이면 $c\approx0.011$ 이라 예측이 거의 $0$ 이고 분산은 거의 $1$ 이다. 모든 지점 쌍의 공분산을 함수 하나로 정한 무작위 함수가 Gauss 과정이다.

# 정의

지표집합 $T$ 위의 확률과정 $(X_t)\_{t\in T}$ 가 **Gauss 과정** 이라는 것은, 임의의 유한 부분집합 $t_1,\dots,t_n\in T$ 에 대해 $(X_{t_1},\dots,X_{t_n})$ 이 다변량 정규분포를 따른다는 뜻이다. 이때 과정의 분포는 다음 두 함수로 결정된다. $m$ 을 **평균함수(mean function)**, $k$ 를 **공분산핵(covariance kernel)** 이라 한다.

$$
m(t)=\mathbb E\lbrack X_t\rbrack,\qquad k(s,t)=\mathrm{Cov}(X_s,X_t)
$$

$k$ 는 대칭이다. 임의의 유한 시점과 계수에 대해 $\sum_{i,j}c_ic_jk(t_i,t_j)=\mathrm{Var}\bigl(\sum_i c_iX_{t_i}\bigr)\ge0$ 이므로 양의 준정부호이기도 하다. 직관 절의 과정은 $m=0$, $k(s,t)=e^{-(s-t)^2/2}$ 이다.

## 표준 핵

| 핵 | 식 | 표본경로 |
| --- | --- | --- |
| [Brown 운동](brownian-motion.md) | $k(s,t)=\min(s,t)$ | 연속, 미분 불가능 |
| RBF(radial basis function, 제곱지수) | $k(s,t)=\exp\bigl({-}\Vert s-t\Vert^2/2\ell^2\bigr)$ | 무한히 미분 가능 |
| Matérn $\nu$ | [Bessel 함수](bessel-functions.md)로 주어지는 족 | $\lceil\nu\rceil-1$ 번 미분 가능 |
| [Ornstein–Uhlenbeck](ornstein-uhlenbeck-process.md) | $k(s,t)=e^{-\vert s-t\vert/\ell}$ | 연속, 미분 불가능 |

# 성질

## 핵의 유효성

역으로 대칭이고 양의 준정부호인 $k$ 와 임의의 $m$ 이 주어지면 그것을 평균과 공분산으로 갖는 Gauss 과정이 존재한다. 유한차원 분포들이 Kolmogorov 의 양립 조건(consistency condition)을 만족하므로 [확장정리](kolmogorov-extension.md)가 과정을 준다.

정상핵 $k(s,t)=\kappa(s-t)$ 의 경우 유효성 판정이 [특성함수](characteristic-functions.md)의 Bochner 정리(Bochner's theorem)와 같은 문제가 된다. $\kappa$ 가 양의 준정부호인 것과 $\kappa$ 가 어떤 유한 측도의 [Fourier 변환](fourier-transform.md)인 것이 동치다.

## 조건부분포

관측 $\mathbf y=(X_{t_1},\dots,X_{t_n})$ 이 주어졌을 때 새 시점 $t_\ast$ 의 조건부분포는 다시 정규분포다. 평균 0 인 경우 [조건부 기댓값](conditional-expectation.md)이 다음으로 주어진다.

$$
X_{t_\ast}\mid\mathbf y\sim\mathcal N\bigl(\mathbf k_\ast^\top K^{-1}\mathbf y,\quad k(t_\ast,t_\ast)-\mathbf k_\ast^\top K^{-1}\mathbf k_\ast\bigr)
$$

여기서 $K=(k(t_i,t_j))$ 이고 $\mathbf k_\ast=(k(t_\ast,t_i))\_i$ 다. 사후분산은 관측값 $\mathbf y$ 에 의존하지 않는다. 직관 절은 $n=1$, $K=1$, $\mathbf k_\ast=e^{-1/2}$, $\mathbf y=10$ 인 경우다.

## 선형변환의 닫힘

Gauss 과정의 유한 선형결합, 적분, 미분(존재하면)은 다시 Gauss 과정이다. 미분의 공분산은 핵의 편미분 $\partial_s\partial_t k(s,t)$ 로 주어지므로, 표본경로의 매끄러움이 핵의 매끄러움으로 결정된다.

## 경로의 연속성

핵만으로 표본경로의 연속성이 보장되지는 않는다. Kolmogorov 연속성 판정(Kolmogorov continuity criterion)이 충분조건을 준다. 어떤 $\alpha,\beta,C\gt 0$ 에 대해 $\mathbb E\lbrack\vert X_s-X_t\vert^\alpha\rbrack\le C\vert s-t\vert^{1+\beta}$ 이면 연속인 판본이 존재한다. Brown 운동의 연속성이 이 판정의 표준 예다.

# 활용

## Gauss 과정 회귀

함수 자체에 Gauss 과정 사전분포를 두고 관측으로 조건을 걸면, 위 조건부분포 공식이 예측 평균과 불확실성을 한꺼번에 준다. 커널 행렬의 역행렬 계산이 $O(n^3)$ 이라 자료가 많으면 저계수 근사(low-rank approximation)를 쓴다.

## Brown 운동과 확률해석

Brown 운동은 $m=0$, $k(s,t)=\min(s,t)$ 인 Gauss 과정이다. [Brown 다리](brownian-bridge.md), 분수 Brown 운동(fractional Brownian motion)도 핵을 바꾼 Gauss 과정으로 정의한다.

## 무작위 장의 모형

공간 통계의 크리깅(kriging), 물리계의 자유장, 우주배경복사의 요동 모형이 모두 Gauss 과정이다. 지표집합이 시간이 아니라 공간이나 구면이 되는 경우다.

# 연관 문서

## 선수지식

- [특성함수](characteristic-functions.md)
- [조건부 기댓값](conditional-expectation.md)
- [정규분포](normal-distribution.md)

## 더 알아보기

- [Brown 운동](brownian-motion.md)
- [Ornstein–Uhlenbeck 과정](ornstein-uhlenbeck-process.md)

#probability #statistics #machine_learning
