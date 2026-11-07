# 선형 이차 조절기

# 개요

**선형 이차 조절기(linear–quadratic regulator, LQR)** 는 상태가 일차식으로 움직이는 계에서, 상태가 목표에서 벗어난 정도와 쓴 입력의 크기를 함께 가장 작게 하는 입력을 고르는 문제와 그 답이다. 수레를 원점으로 되돌릴 때 한 번에 세게 밀면 빨리 돌아오지만 힘이 많이 들고, 약하게 밀면 힘은 덜 들지만 오래 벗어나 있다. 두 비용의 합을 이차식으로 두면 가장 좋은 입력은 지금 상태에 일정한 행렬을 곱한 것이 되고, 그 행렬은 Riccati 방정식 하나를 풀어 얻는다.

# 직관

수레의 위치 $x$ 를 1초마다 $u$ 만큼 옮길 수 있어 $x\_{k+1}=x_k+u_k$ 이다. 매초 $x_k^2+u_k^2$ 의 비용이 들고, 처음 위치 $x_0$ 에서 그 합을 끝없이 더한 값을 가장 작게 하려 한다.

매번 남은 거리의 $K$ 배를 되밀어 $u_k=-Kx_k$ 로 두면, 위치는 매초 $1-K$ 배가 되고 비용은 매초 $(1+K^2)x_k^2$ 이다. 합은 등비급수라 다음이 된다.

$$
\sum\_{k=0}^\infty(1+K^2)(1-K)^{2k}x_0^2=\frac{1+K^2}{1-(1-K)^2}x_0^2
$$

$K=1$ 로 한 번에 원점에 보내면 $2x_0^2$ 이고 $K=1/2$ 이면 $\tfrac53x_0^2$ 이다. 이 식을 $K$ 로 미분해 $0$ 으로 두면 $K^2+K-1=0$ 이고 $K=(\sqrt5-1)/2\approx 0.618$ 에서 최소 $\tfrac{1+\sqrt5}2x_0^2\approx 1.618x_0^2$ 이 나온다.

# 정의

## 유한 구간 문제

$A$ 는 $n\times n$, $B$ 는 $n\times p$ 행렬이고 $x\_{k+1}=Ax_k+Bu_k$ 다. $W$ 는 양의 준정부호, $V$ 는 양의 정부호 대칭행렬이고 $G$ 는 양의 준정부호다. 처음 상태 $x_0$ 에서

$$
J=\sum\_{k=0}^{T-1}\bigl(x_k^{\mathsf T}Wx_k+u_k^{\mathsf T}Vu_k\bigr)+x_T^{\mathsf T}Gx_T
$$

를 최소화하는 입력 $u_0,\dots,u\_{T-1}$ 을 고르는 문제를 **선형 이차 조절기 문제** 라 한다. 직관 절의 예는 $n=p=1$, $A=B=W=V=1$ 이고 $T=\infty$ 인 경우다.

## Riccati 재귀

$S_T=G$ 에서 시작해 $k=T-1,\dots,0$ 의 순서로 다음을 계산한다.

$$
S_k=A^{\mathsf T}S\_{k+1}A-A^{\mathsf T}S\_{k+1}B\bigl(B^{\mathsf T}S\_{k+1}B+V\bigr)^{-1}B^{\mathsf T}S\_{k+1}A+W
$$

$$
K_k=\bigl(B^{\mathsf T}S\_{k+1}B+V\bigr)^{-1}B^{\mathsf T}S\_{k+1}A
$$

첫 식을 **이산 Riccati 방정식(discrete Riccati equation)**, $K_k$ 를 **되먹임 이득(feedback gain)** 이라 한다. 직관 절의 예에서 $S\_{k+1}=s$ 이면 $S_k=s-s^2/(s+1)+1$, $K_k=s/(s+1)$ 이다.

# 성질

## 최적 입력과 최소 비용

최적 입력은 $u_k=-K_kx_k$ 이고 최소 비용은 $x_0^{\mathsf T}S_0x_0$ 이다.

증명의 요지는 [동적 계획법](dynamic-programming.md)이다. 시점 $k+1$ 부터의 최소 비용이 $x^{\mathsf T}S\_{k+1}x$ 라 가정하면, 시점 $k$ 에서 고를 것은

$$
x_k^{\mathsf T}Wx_k+u^{\mathsf T}Vu+(Ax_k+Bu)^{\mathsf T}S\_{k+1}(Ax_k+Bu)
$$

를 최소화하는 $u$ 다. 이것은 $u$ 의 이차식이고 이차항의 계수 $B^{\mathsf T}S\_{k+1}B+V$ 가 양의 정부호이므로, 미분을 $0$ 으로 두면 $u=-K_kx_k$ 가 유일한 최소점이다. 이 $u$ 를 넣으면 값이 $x_k^{\mathsf T}S_kx_k$ 가 되어 가정이 한 시점 앞에서도 성립한다.

## 무한 구간과 대수 Riccati 방정식

$(A,B)$ 가 [가제어](controllability.md)이고 $W=D^{\mathsf T}D$ 로 쓸 때 $(A,D)$ 가 가관측이면, $T\to\infty$ 에서 $S_k$ 는 다음 대수 Riccati 방정식(algebraic Riccati equation)의 유일한 양의 준정부호 해 $S$ 로 수렴한다.[^1]

$$
S=A^{\mathsf T}SA-A^{\mathsf T}SB\bigl(B^{\mathsf T}SB+V\bigr)^{-1}B^{\mathsf T}SA+W
$$

이때 상수 이득 $K=(B^{\mathsf T}SB+V)^{-1}B^{\mathsf T}SA$ 로 닫은 계 $x\_{k+1}=(A-BK)x_k$ 의 고윳값은 모두 절댓값이 $1$ 보다 작아 상태가 $0$ 으로 수렴한다. 직관 절의 예에서 방정식은 $s^2/(s+1)=1$, 곧 $s^2-s-1=0$ 이고 $s=(1+\sqrt5)/2$ 다. 이득 $K=s/(s+1)=(\sqrt5-1)/2$ 와 최소 비용 $sx_0^2$ 이 직관 절의 계산과 같고, 닫은 계는 $x\_{k+1}\approx 0.382x_k$ 다.

## Kalman 필터와의 쌍대성

$A$ 를 $F^{\mathsf T}$, $B$ 를 $H^{\mathsf T}$, $W$ 를 $Q$, $V$ 를 $R$ 로 바꾸면 Riccati 재귀가 [Kalman 필터](kalman-filter.md)의 예측 공분산 재귀가 된다. 조절기의 재귀는 마지막 시점에서 거꾸로, 필터의 재귀는 처음 시점에서 앞으로 돈다. 같은 바꿔치기로 가제어 조건과 가관측 조건이 서로 자리를 바꾼다.

## 연속시간

$\dot x=Ax+Bu$ 에서 비용 $\int_0^T(x^{\mathsf T}Wx+u^{\mathsf T}Vu)\thinspace dt+x(T)^{\mathsf T}Gx(T)$ 를 최소화하면 [Hamilton–Jacobi–Bellman 방정식](hamilton-jacobi-bellman.md)이 미분 Riccati 방정식 $-\dot S=A^{\mathsf T}S+SA-SBV^{-1}B^{\mathsf T}S+W$, $S(T)=G$ 가 되고 최적 입력은 $u=-V^{-1}B^{\mathsf T}Sx$ 다.

# 활용

- 선형 이차 Gauss 제어(linear–quadratic–Gaussian control, LQG). 상태를 직접 보지 못하고 잡음 섞인 관측만 받으면, [Kalman 필터](kalman-filter.md)로 추정한 상태에 조절기의 이득을 곱한 입력이 최적이다. 추정과 제어를 따로 설계해도 되는 이 결과를 분리 원리(separation principle)라 한다.[^1]
- 평형점 근처의 안정화. 비선형계를 평형점에서 선형화해 이득을 구하고, 그 이득으로 도립진자나 비행체의 자세를 평형점 근처에 유지한다.
- 모형 예측 제어(model predictive control). 매 시점 유한 구간 문제를 풀어 첫 입력만 쓰고 다음 시점에 다시 푼다. 입력에 상한이 있으면 이 문제는 이차 계획법(quadratic programming)이 되고 [내점법](interior-point-method.md)으로 푼다.

[^1]: Dimitri P. Bertsekas, *Dynamic Programming and Optimal Control*, Vol. I, 4th ed., Athena Scientific (2017), 3 장. 이산 Riccati 방정식의 수렴 조건과 선형 이차 Gauss 문제의 분리.

# 연관 문서

## 선수지식

- [동적 계획법](dynamic-programming.md)
- [가제어성](controllability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra #signal_processing
