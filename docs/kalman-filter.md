# Kalman 필터

# 개요

Kalman 필터는 잡음 섞인 관측에서 선형 동역학계의 상태를 순차적으로 추정한다. 상태와 관측이 모두 Gauss 분포를 따르면 [조건부 기댓값](conditional-expectation.md)이 평균과 공분산 두 개로 닫히고, 관측 하나를 받을 때마다 두 값을 갱신하는 공식이 나온다.

갱신식은 공분산행렬에 랭크가 낮은 항을 더한 역행렬이고, [Sherman–Morrison 공식](sherman-morrison.md)이 그 계산을 관측 차원 크기의 역행렬 하나로 줄인다.

# 직관

위치 $x$ 를 두 번 잰다. 첫 측정이 $z_1=10$ 이고 오차의 분산이 $\sigma_1^2=4$ , 둘째 측정이 $z_2=12$ 이고 분산이 $\sigma_2^2=1$ 이다. 두 값을 어떻게 합칠지 정해야 한다.

두 측정이 독립이면 우도의 곱이 지수의 합이다.

$$
\frac{(x-10)^2}{4}+\frac{(x-12)^2}{1}
$$

를 최소화하면 $x=11.6$ 이고, 이차항의 계수를 모으면 새 분산이 $(1/4+1/1)^{-1}=0.8$ 이다. 분산의 역수가 더해지고 추정값은 그 역수를 가중치로 쓴 평균이다.

이 계산을 $11.6=10+0.8\cdot(12-10)$ 으로 다시 쓴다. 옛 추정값에 측정과 예측의 차이를 $0.8$ 배 해서 더한 꼴이다. 이 계수 $0.8=\sigma_1^2/(\sigma_1^2+\sigma_2^2)$ 가 두 분산의 비로 정해지므로, 측정이 정확할수록 새 값 쪽으로 더 움직인다.

측정 사이에 물체가 움직이면 옛 추정값을 그 운동으로 옮기고 운동의 불확실성만큼 분산을 키운 뒤 같은 합치기를 한다. 이 두 단계를 번갈아 돌리는 것이 Kalman 필터다.

# 정의

## 선형 Gauss 상태공간 모형

상태 $x_k\in\mathbb R^n$ 과 관측 $z_k\in\mathbb R^m$ 이 다음을 따른다.

$$
x_k=F x\_{k-1}+w_k,\qquad z_k=Hx_k+v_k
$$

$w_k\sim N(0,Q)$ 와 $v_k\sim N(0,R)$ 은 서로 독립인 Gauss 잡음이다. $F$ 는 전이행렬, $H$ 는 관측행렬이다.

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

$K_k$ 를 **Kalman 이득**이라 한다. 괄호 안 $z_k-H\hat x\_{k\mid k-1}$ 은 관측과 예측의 차이이고 **혁신**(innovation)이라 한다.

# 성질

## 최적성

잡음이 Gauss 이면 $\hat x\_{k\mid k}$ 가 조건부 기댓값 $E\lbrack x_k\mid z_1,\dots,z_k\rbrack$ 과 같고, 제곱오차를 최소화하는 추정량이다.

증명의 요지는 Gauss 분포의 조건부분포가 다시 Gauss 라는 것이다. $(x_k,z_k)$ 의 결합분포가 Gauss 이므로 조건부 평균이 $z_k$ 의 일차식이고, 그 계수가 공분산행렬의 [Schur 보수](schur-complement.md)로 적힌다. 그 계수가 $K_k$ 다.

Gauss 가정을 빼고 잡음의 2 차 모멘트만 가정하면 같은 식이 선형 추정량 가운데 최소 분산을 주는 것으로 남는다.

## 정보 형식과 랭크 갱신

공분산의 역행렬 $P^{-1}$ 을 정보행렬이라 한다. 갱신 단계를 정보행렬로 쓰면 덧셈이 된다.

$$
P\_{k\mid k}^{-1}=P\_{k\mid k-1}^{-1}+H^{\mathsf T}R^{-1}H
$$

오른쪽 둘째 항의 랭크가 관측 차원 $m$ 이하이므로, Woodbury 항등식으로 이 식과 $K_k$ 의 정의가 서로 옮겨간다. 관측 차원이 상태 차원보다 작으면 $m\times m$ 역행렬 하나만 계산하는 $K_k$ 쪽이 싸고, 관측이 많으면 덧셈으로 끝나는 정보 형식이 싸다.

## 수치적 안정성

$P\_{k\mid k}=(I-K_kH)P\_{k\mid k-1}$ 은 뺄셈이라 반올림오차가 쌓이면 대칭성이나 양의 준정부호성이 깨진다. Joseph 형식

$$
P\_{k\mid k}=(I-K_kH)P\_{k\mid k-1}(I-K_kH)^{\mathsf T}+K_kRK_k^{\mathsf T}
$$

은 합동변환과 덧셈만 쓰므로 대칭과 부호를 보존한다.[^1] 더 나아가 $P$ 대신 그 Cholesky 인자를 갱신하는 제곱근 필터가 조건수를 제곱근으로 줄인다.[^1]

## 정상 상태

$F$ , $H$ , $Q$ , $R$ 이 $k$ 에 무관하고 계가 가관측이고 가제어이면 $P\_{k\mid k-1}$ 이 대수 Riccati 방정식의 유일한 양의 정부호 해로 수렴한다. 이때 $K_k$ 도 상수가 되고 필터가 시간불변 선형 시스템이 된다.[^1]

# 활용

- 위성 항법과 관성 항법의 융합에서 위치와 속도를 상태로 두고 두 센서의 관측을 차례로 받는다. 비선형 관측식은 작동점에서 선형화해 같은 공식을 쓴다.
- [선형회귀](linear-regression.md)의 순차 최소제곱이 $F=I$ 이고 $Q=0$ 인 특수한 경우다. 관측 하나를 받을 때마다 정규방정식의 역행렬을 랭크 $1$ 갱신하는 계산과 같다.
- 은닉 Markov 모형의 전향 알고리즘이 같은 재귀다. [Markov 연쇄](markov-chains.md)처럼 상태공간이 유한집합이면 그 재귀가 합이 되고, 선형 Gauss 이면 위 공식이 된다.
- 시계열의 우도 계산에 혁신을 쓴다. 혁신이 서로 독립인 Gauss 벡터이므로 그 밀도의 곱이 관측열의 우도가 되고, 이것을 [최대우도추정](maximum-likelihood.md)에 넣어 $F$ 와 $Q$ 를 추정한다.

[^1]: Brian D. O. Anderson and John B. Moore, *Optimal Filtering*, Prentice-Hall (1979), 6 장과 4 장. Joseph 형식과 제곱근 필터의 오차 해석, 정상 상태 수렴과 Riccati 방정식의 조건.

# 연관 문서

## 선수지식

- [조건부 기댓값](conditional-expectation.md)
- [Sherman–Morrison 공식](sherman-morrison.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #linear_algebra
