# Luenberger 관측기

# 개요

**Luenberger 관측기(Luenberger observer)** 는 계의 출력만 재면서 재지 않는 상태를 추정하는 장치로, 계의 모형을 그대로 돌리면서 잰 출력과 모형의 출력의 차이로 추정값을 고친다. 수레의 위치만 재고 속도는 재지 못하면, 속도를 써서 정하는 되먹임 입력을 바로 계산할 수 없다.

Luenberger 관측기는 추정 오차가 따르는 식을 고윳값을 고를 수 있는 선형계로 만들어, 오차가 정해진 빠르기로 $0$ 으로 가게 한다.

# 직관

[가제어성](controllability.md) 문서의 수레를 쓴다. 위치 $p\_k$ 와 속도 $v\_k$ 가 $p\_{k+1}=p\_k+v\_k$, $v\_{k+1}=v\_k+u\_k$ 를 따르고, 잴 수 있는 것은 위치 $y\_k=p\_k$ 뿐이다.

처음 상태를 모르니 추정값 $(\hat p\_0,\hat v\_0)=(0,0)$ 에서 출발해 같은 식을 돌린다. 실제 상태가 $(0,1)$ 이고 입력이 $0$ 이면 실제 위치는 $0,1,2,\dots$ 로 가는데 추정 위치는 $0$ 에 머문다. 모형만 돌리면 처음의 오차가 사라지지 않는다.

잰 위치와 추정 위치의 차이 $y\_k-\hat p\_k$ 를 추정값에 더해 고친다. 다음 꼴로 위치에 $2$ 배, 속도에 $1$ 배를 더한다.

$$
\hat p\_{k+1}=\hat p\_k+\hat v\_k+2(y\_k-\hat p\_k),\qquad\hat v\_{k+1}=\hat v\_k+u\_k+(y\_k-\hat p\_k)
$$

$k=0$ 에서 차이가 $0$ 이라 $(\hat p\_1,\hat v\_1)=(0,0)$ 이다. $k=1$ 에서 차이가 $1$ 이라 $(\hat p\_2,\hat v\_2)=(2,1)$ 이 되고, 이것이 실제 상태 $(2,1)$ 과 같다. 두 걸음 만에 속도를 정확히 알아낸다.

# 정의

계 $x\_{k+1}=Ax\_k+Bu\_k$, $y\_k=Cx\_k$ 에서 $C$ 는 $q\times n$ 행렬이다. $n\times q$ 행렬 $L$ 을 골라 다음 식으로 추정값 $\hat x\_k$ 를 만드는 것을 **Luenberger 관측기** 라 하고, $L$ 을 **관측기 이득(observer gain)** 이라 한다[^1].

$$
\hat x\_{k+1}=A\hat x\_k+Bu\_k+L(y\_k-C\hat x\_k)
$$

직관 절의 수레에서 $A$ 는 첫 행 $(1,1)$, 둘째 행 $(0,1)$ 인 행렬이고 $C=(1,0)$, $L=(2,1)^{\mathsf T}$ 이다.

**추정 오차(estimation error)** $e\_k=x\_k-\hat x\_k$ 는 두 식을 빼서 다음을 따른다.

$$
e\_{k+1}=(A-LC)e\_k
$$

입력 $u\_k$ 와 모르는 상태 $x\_k$ 가 오차의 식에서 사라진다. 수레에서 $A-LC$ 는 두 행이 모두 $(-1,1)$ 인 행렬이고 그 제곱이 영행렬이므로, 어떤 처음 오차도 두 걸음 뒤에 $0$ 이 된다.

# 성질

## 관측기 고윳값의 배치

$(A,C)$ 가 가관측이면 고윳값으로 줄 수 있는 임의의 $n$ 개 복소수 모임(켤레에 대해 닫힌 것)에 대해 $A-LC$ 의 고윳값이 그 모임이 되는 $L$ 이 존재한다.

증명의 요지. $A-LC$ 의 고윳값은 전치 $A^{\mathsf T}-C^{\mathsf T}L^{\mathsf T}$ 의 고윳값과 같다. 가제어성 문서의 쌍대성으로 $(A^{\mathsf T},C^{\mathsf T})$ 가 가제어이므로, 극배치 정리로 $A^{\mathsf T}-C^{\mathsf T}K$ 의 고윳값을 정하는 $K$ 가 있고 $L=K^{\mathsf T}$ 로 둔다.

수레에서 $L=(l\_1,l\_2)^{\mathsf T}$ 이면 $A-LC$ 의 특성다항식은 다음과 같다.

$$
\lambda^2-(2-l\_1)\lambda+(1-l\_1+l\_2)
$$

두 고윳값을 $0$ 으로 두면 $l\_1=2$, $l\_2=1$ 이 나온다. 고윳값이 모두 $0$ 이라 오차가 $n$ 걸음 안에 사라지는 관측기를 **데드비트 관측기(deadbeat observer)** 라 한다.

## 검출 가능성

$A-LC$ 의 고윳값을 모두 단위원 안에 두는 $L$ 이 존재하는 것을 $(A,C)$ 가 **검출 가능(detectable)** 하다고 한다. 검출 가능한 것과, 절댓값이 $1$ 이상인 $A$ 의 모든 고윳값 $\lambda$ 에서 $A-\lambda I$ 아래에 $C$ 를 쌓은 행렬의 계수가 $n$ 인 것은 동치다. 출력에 나타나지 않는 상태 방향이 스스로 줄어들면 그 방향은 추정하지 않아도 오차가 $0$ 으로 간다.

## 분리 원리

상태 되먹임 $u\_k=-Kx\_k$ 대신 추정값으로 $u\_k=-K\hat x\_k$ 를 쓰면, 닫힌 계의 고윳값은 $A-BK$ 의 고윳값과 $A-LC$ 의 고윳값을 합친 것이다. 이것을 **분리 원리(separation principle)** 라 한다.

증명의 요지. $u\_k=-Kx\_k+Ke\_k$ 이므로 $(x\_k,e\_k)$ 는 다음을 따른다.

$$
\begin{pmatrix}x\_{k+1}\cr e\_{k+1}\end{pmatrix}=\begin{pmatrix}A-BK&BK\cr 0&A-LC\end{pmatrix}\begin{pmatrix}x\_k\cr e\_k\end{pmatrix}
$$

블록 위삼각 행렬의 고윳값은 대각 블록의 고윳값이다. 그래서 $K$ 와 $L$ 을 따로 정해도 된다.

## 연속시간 판본

$\dot x=Ax+Bu$, $y=Cx$ 에서는 관측기가 $\dot{\hat x}=A\hat x+Bu+L(y-C\hat x)$ 이고 오차가 $\dot e=(A-LC)e$ 를 따른다. 고윳값을 복소평면의 왼쪽 반평면에 두면 오차가 지수적으로 줄고, 배치 정리와 분리 원리는 그대로 성립한다.

# 활용

- [Kalman 필터](kalman-filter.md). 계와 측정에 잡음이 있으면, 오차 공분산을 가장 작게 하는 관측기 이득이 Kalman 이득이다. Kalman 필터는 걸음마다 이득이 바뀌는 Luenberger 관측기의 꼴이다.
- 출력 되먹임 설계. [선형 이차 조절기](linear-quadratic-regulator.md)의 이득 $K$ 와 Kalman 이득 $L$ 을 분리 원리로 합친 것이 선형 이차 Gauss 제어(linear-quadratic-Gaussian control, LQG)다. Doyle 은 이렇게 합친 제어기에는 선형 이차 조절기가 가지는 이득 여유가 보장되지 않음을 예로 보였다[^2].
- 고장 검출. 잰 출력과 관측기 출력의 차이 $y\_k-C\hat x\_k$ 는 모형이 맞으면 $0$ 으로 가므로, 이 차이가 커지는 것으로 센서나 구동기의 고장을 찾는다.

[^1]: D. G. Luenberger, "Observing the state of a linear system", *IEEE Transactions on Military Electronics* 8 (1964), 74–80.
[^2]: J. C. Doyle, "Guaranteed margins for LQG regulators", *IEEE Transactions on Automatic Control* 23 (1978), 756–757.

# 연관 문서

## 선수지식

- [가제어성](controllability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #optimization #signal_processing
