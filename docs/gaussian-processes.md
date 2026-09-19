# Gauss 과정

# 개요

Gauss 과정은 유한 개의 시점을 잡을 때마다 다변량 정규분포가 되는 확률과정이다. 평균함수와 공분산핵 두 개가 과정 전체를 결정하므로, 무한차원 대상을 유한차원 선형대수로 다룰 수 있다.

[Brown 운동](brownian-motion.md)이 공분산핵 $\min(s,t)$ 를 가진 Gauss 과정이고, 회귀에서 쓰는 사후평균과 사후분산도 같은 공식의 특수한 경우다.

# 직관

정규분포는 선형변환에 닫혀 있고 조건부분포도 다시 정규분포다. 이 두 성질이 무한히 많은 시점으로 확장되어도 유지되므로, 관측한 점에서 조건을 걸어 관측하지 않은 점의 분포를 구하는 계산이 행렬 연산으로 끝난다.

# 정의

지표집합 $T$ 위의 확률과정 $(X_t)\_{t\in T}$ 가 **Gauss 과정**이라는 것은, 임의의 유한 부분집합 $t_1,\dots,t_n\in T$ 에 대해 $(X_{t_1},\dots,X_{t_n})$ 이 다변량 정규분포를 따른다는 뜻이다. 이때 과정은 두 함수로 결정된다.

$$
m(t)=\mathbb E[X_t],\qquad k(s,t)=\mathrm{Cov}(X_s,X_t)
$$

$k$ 는 대칭이고 양의 준정부호다. 임의의 유한 시점과 계수에 대해 $\sum_{i,j}c_ic_jk(t_i,t_j)=\mathrm{Var}\bigl(\sum_i c_iX_{t_i}\bigr)\ge0$ 이기 때문이다.

## 핵의 유효성

역으로 대칭이고 양의 준정부호인 $k$ 와 임의의 $m$ 이 주어지면 그것을 평균과 공분산으로 갖는 Gauss 과정이 존재한다. 유한차원 분포들이 Kolmogorov 의 양립 조건을 만족하므로 확장정리가 과정을 준다.

정상핵 $k(s,t)=\kappa(s-t)$ 의 경우 유효성 판정이 [특성함수](characteristic-functions.md)의 Bochner 정리와 같은 문제가 된다. $\kappa$ 가 양의 준정부호인 것과 $\kappa$ 가 어떤 유한 측도의 Fourier 변환인 것이 동치다.

## 표준 핵

| 핵 | 식 | 표본경로 |
| --- | --- | --- |
| Brown 운동 | $k(s,t)=\min(s,t)$ | 연속, 미분 불가능 |
| RBF(radial basis function, 제곱지수) | $k(s,t)=\exp\bigl({-}\Vert s-t\Vert^2/2\ell^2\bigr)$ | 무한히 미분 가능 |
| Matérn $\nu$ | Bessel 함수로 주어지는 족 | $\lceil\nu\rceil-1$ 번 미분 가능 |
| Ornstein–Uhlenbeck | $k(s,t)=e^{-\vert s-t\vert/\ell}$ | 연속, 미분 불가능 |

# 성질

## 조건부분포

관측 $\mathbf y=(X_{t_1},\dots,X_{t_n})$ 이 주어졌을 때 새 시점 $t_\ast$ 의 조건부분포는 다시 정규분포다. 평균 0 인 경우 [조건부 기댓값](conditional-expectation.md)이 다음으로 주어진다.

$$
X_{t_\ast}\mid\mathbf y\ \sim\ \mathcal N\bigl(\mathbf k_\ast^\top K^{-1}\mathbf y,\ \ k(t_\ast,t_\ast)-\mathbf k_\ast^\top K^{-1}\mathbf k_\ast\bigr)
$$

여기서 $K=(k(t_i,t_j))$ 이고 $\mathbf k_\ast=(k(t_\ast,t_i))\_i$ 다. 사후분산이 관측값 $\mathbf y$ 에 의존하지 않는다. 이것이 정규분포에 고유한 성질이다.

## 선형변환의 닫힘

Gauss 과정의 유한 선형결합, 적분, 미분(존재하면)은 다시 Gauss 과정이다. 미분의 공분산은 핵의 편미분 $\partial_s\partial_t k(s,t)$ 로 주어지므로, 표본경로의 매끄러움이 핵의 매끄러움으로 결정된다.

## 경로의 연속성

핵만으로 표본경로의 연속성이 보장되지는 않는다. Kolmogorov 연속성 판정이 충분조건을 준다. 어떤 $\alpha,\beta,C\gt 0$ 에 대해 $\mathbb E[|X_s-X_t|^\alpha]\le C|s-t|^{1+\beta}$ 이면 연속인 판본이 존재한다. Brown 운동의 연속성이 이 판정의 표준 예다.

# 활용

## Gauss 과정 회귀

함수 자체에 Gauss 과정 사전분포를 두고 관측으로 조건을 걸면, 위 조건부분포 공식이 예측 평균과 불확실성을 한꺼번에 준다. 커널 행렬의 역행렬 계산이 $O(n^3)$ 이라 자료가 많으면 저계수 근사를 쓴다.

## Brown 운동과 확률해석

[Brown 운동](brownian-motion.md)은 $m=0,\ k(s,t)=\min(s,t)$ 인 Gauss 과정이다. Brown 다리, 분수 Brown 운동도 핵을 바꾼 Gauss 과정으로 정의한다.

## 무작위 장의 모형

공간 통계의 크리깅, 물리계의 자유장, 우주배경복사의 요동 모형이 모두 Gauss 과정이다. 지표집합이 시간이 아니라 공간이나 구면이 되는 경우다.

# 연관 문서

## 선수지식

- [특성함수와 Lévy 연속성 정리](characteristic-functions.md)
- [조건부 기댓값](conditional-expectation.md)

## 더 알아보기

- [Brown 운동](brownian-motion.md)

#probability #statistics #machine_learning
