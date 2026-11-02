# Kalman 필터

# 개요

**Kalman 필터(Kalman filter)** 는 잡음이 섞인 측정을 받을 때마다 움직이는 물체의 현재 상태를 추정해 고쳐 나가는 방법이다. 위성 신호로 차의 위치를 1초마다 재면 측정마다 몇 미터의 오차가 있지만, 차가 직전 속도로 움직였다는 예측과 새 측정을 섞으면 측정 하나보다 정확한 위치를 얻는다. Kalman 필터는 예측과 측정을 각각의 불확실성에 따라 섞는 비율을 계산해, 평균과 [공분산](covariance.md) 두 값만 갱신하며 상태를 추정한다.

# 직관

위치 $x$ 를 두 번 잰다. 첫 측정이 $z_1=10$ 이고 오차의 분산이 $\sigma_1^2=4$ , 둘째 측정이 $z_2=12$ 이고 분산이 $\sigma_2^2=1$ 이다. 두 측정이 독립이면 가능도의 곱의 로그가 지수의 합이므로 아래를 최소화한다.

$$
\frac{(x-10)^2}{4}+\frac{(x-12)^2}{1}
$$

최소점은 $x=11.6$ 이다. 이차항의 계수를 모으면 새 분산은 $(1/4+1/1)^{-1}=0.8$ 이다. 분산의 역수가 더해지고, 추정값은 그 역수를 가중치로 쓴 평균이다.

이 계산을 $11.6=10+0.8\cdot(12-10)$ 으로 다시 쓰면 옛 추정값에 측정과 옛 추정값의 차이를 $0.8$ 배 해서 더한 꼴이다. 계수 $0.8=\sigma_1^2/(\sigma_1^2+\sigma_2^2)$ 는 두 분산으로 정해지고, 새 측정이 정확할수록 1 에 가까워진다.

측정 사이에 물체가 움직이면 옛 추정값을 그 운동만큼 옮기고 운동의 불확실성만큼 분산을 키운다. 그 뒤 위와 같이 새 측정과 합친다. 이 두 단계를 번갈아 돌리는 절차가 Kalman 필터다.

# 정의

## 선형 Gauss 상태공간 모형

상태 $x_k\in\mathbb R^n$ 과 관측 $z_k\in\mathbb R^m$ 이 다음을 따른다.

$$
x_k=F x\_{k-1}+w_k,\qquad z_k=Hx_k+v_k
$$

$w_k\sim N(0,Q)$ 와 $v_k\sim N(0,R)$ 은 서로 독립인 Gauss 잡음이다. 이 모형을 **선형 Gauss 상태공간 모형(linear Gaussian state-space model)** 이라 하고, $F$ 를 **전이행렬(transition matrix)**, $H$ 를 **관측행렬(observation matrix)** 이라 한다.

직관 절의 물체는 $n=m=1$, $F=1$, $H=1$, $R=1$ 인 경우다. 측정 사이에 위치가 분산 $Q=1$ 만큼 흔들린다고 둔다.

## 필터링 분포

$\hat x\_{k\mid j}$ 와 $P\_{k\mid j}$ 를 관측 $z_1,\dots,z_j$ 를 조건으로 준 $x_k$ 의 조건부 평균과 조건부 공분산이라 한다. Kalman 필터는 $\hat x\_{k\mid k}$ 와 $P\_{k\mid k}$ 를 $k$ 에 대해 순차적으로 계산하는 절차다.

## 예측과 갱신

$$
\hat x\_{k\mid k-1}=F\hat x\_{k-1\mid k-1},\qquad P\_{k\mid k-1}=FP\_{k-1\mid k-1}F^{\mathsf T}+Q
$$

$$
K_k=P\_{k\mid k-1}H^{\mathsf T}\bigl(HP\_{k\mid k-1}H^{\mathsf T}+R\bigr)^{-1}
$$

$$
\hat x\_{k\mid k}=\hat x\_{k\mid k-1}+K_k\bigl(z_k-H\hat x\_{k\mid k-1}\bigr),\qquad
P\_{k\mid k}=(I-K_kH)P\_{k\mid k-1}
$$

$K_k$ 를 **Kalman 이득(Kalman gain)** 이라 한다. 괄호 안 $z_k-H\hat x\_{k\mid k-1}$ 은 관측과 예측의 차이이고 **혁신(innovation)** 이라 한다.

위의 1차원 예에서 첫 측정 뒤 $\hat x\_{1\mid 1}=10$, $P\_{1\mid 1}=4$ 라 하자. 예측 단계는 $\hat x\_{2\mid 1}=10$, $P\_{2\mid 1}=4+1=5$ 를 준다. $z_2=12$ 를 받으면 $K_2=5/(5+1)=5/6$, 혁신은 $2$ 이므로 $\hat x\_{2\mid 2}=10+(5/6)\cdot 2\approx 11.67$ 이고 $P\_{2\mid 2}=(1-5/6)\cdot 5=5/6$ 이다. $Q=0$ 이면 직관 절의 $11.6$ 과 $0.8$ 이 나온다.

# 성질

## 최적성

잡음이 Gauss 이면 $\hat x\_{k\mid k}$ 가 [조건부 기댓값](conditional-expectation.md) $E\lbrack x_k\mid z_1,\dots,z_k\rbrack$ 과 같고, 제곱오차를 최소화하는 추정량이다.

증명의 요지는 Gauss 분포의 조건부분포가 다시 Gauss 라는 것이다. $(x_k,z_k)$ 의 결합분포가 Gauss 이므로 조건부 평균이 $z_k$ 의 일차식이고, 그 계수가 공분산행렬의 [Schur 보수](schur-complement.md)로 적힌다. 그 계수가 $K_k$ 다.

Gauss 가정을 빼고 잡음의 2 차 모멘트만 가정하면 같은 식이 선형 추정량 가운데 최소 분산을 주는 것으로 남는다.

## 정보 형식과 랭크 갱신

공분산의 역행렬 $P^{-1}$ 을 정보행렬(information matrix)이라 한다. 갱신 단계를 정보행렬로 쓰면 덧셈이 된다.

$$
P\_{k\mid k}^{-1}=P\_{k\mid k-1}^{-1}+H^{\mathsf T}R^{-1}H
$$

오른쪽 둘째 항의 랭크가 관측 차원 $m$ 이하이므로, [Sherman–Morrison 공식](sherman-morrison.md)을 행렬로 확장한 Woodbury 항등식(Woodbury identity)으로 이 식과 $K_k$ 의 정의가 서로 유도된다. 관측 차원이 상태 차원보다 작으면 $m\times m$ 역행렬 하나만 계산하는 $K_k$ 쪽이 싸고, 관측이 많으면 덧셈으로 끝나는 정보 형식이 싸다.

## 수치적 안정성

$P\_{k\mid k}=(I-K_kH)P\_{k\mid k-1}$ 은 뺄셈이라 반올림오차가 쌓이면 대칭성이나 양의 준정부호성이 깨진다. Joseph 형식(Joseph form)

$$
P\_{k\mid k}=(I-K_kH)P\_{k\mid k-1}(I-K_kH)^{\mathsf T}+K_kRK_k^{\mathsf T}
$$

은 합동변환과 덧셈만 쓰므로 대칭과 부호를 보존한다.[^1] $P$ 대신 그 Cholesky 인자를 갱신하는 제곱근 필터(square-root filter)는 조건수를 제곱근으로 줄인다.

## 정상 상태

$F$ , $H$ , $Q$ , $R$ 이 $k$ 에 무관하고 계가 가관측(observable)이고 가제어(controllable)이면 $P\_{k\mid k-1}$ 이 대수 Riccati 방정식(algebraic Riccati equation)의 유일한 양의 정부호 해로 수렴한다. 이때 $K_k$ 도 상수가 되고 필터가 시간불변 선형 시스템이 된다.[^1]

# 활용

- 위성 항법과 관성 항법의 융합에서 위치와 속도를 상태로 두고 두 센서의 관측을 차례로 받는다. 비선형 관측식은 현재 추정값에서 선형화해 같은 공식을 쓰고, 이것을 확장 Kalman 필터(extended Kalman filter)라 한다.
- [선형회귀](linear-regression.md)의 순차 최소제곱이 $F=I$ 이고 $Q=0$ 인 특수한 경우다. 관측 하나를 받을 때마다 정규방정식의 역행렬을 랭크 $1$ 갱신하는 계산과 같다.
- [은닉 Markov 모형](hidden-markov-model.md)의 전향 알고리즘(forward algorithm)이 같은 재귀다. [Markov 연쇄](markov-chains.md)처럼 상태공간이 유한집합이면 그 재귀가 합이 되고, 선형 Gauss 이면 위 공식이 된다.
- 시계열의 가능도 계산에 혁신을 쓴다. 혁신이 서로 독립인 Gauss 벡터이므로 그 밀도의 곱이 관측열의 가능도가 되고, 이것을 [최대가능도 추정](maximum-likelihood.md)에 넣어 $F$ 와 $Q$ 를 추정한다.

[^1]: Brian D. O. Anderson and John B. Moore, *Optimal Filtering*, Prentice-Hall (1979), 6 장과 4 장. Joseph 형식과 제곱근 필터의 오차 해석, 정상 상태 수렴과 Riccati 방정식의 조건.

# 연관 문서

## 선수지식

- [조건부 기댓값](conditional-expectation.md)
- [Sherman–Morrison 공식](sherman-morrison.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #linear_algebra
