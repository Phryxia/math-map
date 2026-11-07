# Rauch–Tung–Striebel 평활기

# 개요

**Rauch–Tung–Striebel 평활기(Rauch–Tung–Striebel smoother)** 는 측정을 다 모은 뒤 지난 시점의 상태 추정을 나중 측정까지 써서 고치는 방법이다. 차의 위치를 1초마다 재며 [Kalman 필터](kalman-filter.md)로 추정했다면 1초 시점의 추정은 1초까지의 측정만 썼지만, 2초의 측정값도 1초의 위치에 따라 정해지므로 1초의 추정을 고치는 데 쓸 수 있다. 이 평활기는 필터를 끝까지 돌린 뒤 마지막 시점에서 처음 시점으로 거슬러 가며 각 시점의 평균과 공분산을 한 번씩 고친다.

# 직관

[Kalman 필터](kalman-filter.md) 문서의 1차원 예를 이어 간다. 위치가 측정 사이에 분산 $1$ 만큼 흔들리고, 첫 측정 $z_1$ 만으로 낸 추정은 평균 $10$, 분산 $4$ 다. 둘째 측정 $z_2=12$ 의 오차 분산은 $1$ 이다. 필터는 $z_2$ 를 받아 둘째 시점의 위치를 고치지만 첫 시점의 추정 $10$ 은 그대로 둔다.

첫 시점의 위치를 $x_1$ 이라 하면 $z_2$ 는 $x_1$ 에 흔들림과 측정 오차를 더한 값이다. 두 오차가 독립이므로 $z_2$ 는 $x_1$ 을 분산 $1+1=2$ 로 잰 측정이다. 첫 시점에는 분산 $4$ 인 추정 $10$ 과 분산 $2$ 인 측정 $12$ 가 있으므로, 분산의 역수를 가중치로 평균하면 새 분산은 $(1/4+1/2)^{-1}=4/3$, 새 평균은 $\bigl(10/4+12/2\bigr)\cdot 4/3=34/3\approx 11.33$ 이다.

이 계산은 둘째 시점의 고친 추정에서 첫 시점으로 정보를 한 단계 거꾸로 보낸 것이다. 시점이 많으면 마지막 시점에서 시작해 이 한 단계를 처음 시점까지 되풀이한다.

# 정의

## 고정 구간 평활

[Kalman 필터](kalman-filter.md)와 같은 선형 Gauss 상태공간 모형 $x_k=Fx\_{k-1}+w_k$, $z_k=Hx_k+v_k$ 에서 관측 $z_1,\dots,z_N$ 을 다 받았다고 한다. $\hat x\_{k\mid N}$ 과 $P\_{k\mid N}$ 은 $z_1,\dots,z_N$ 을 조건으로 준 $x_k$ 의 조건부 평균과 조건부 공분산이다. 이것을 $k=1,\dots,N$ 전부에 대해 구하는 문제를 **고정 구간 평활(fixed-interval smoothing)** 이라 한다.

$k=N$ 에서는 필터의 결과 $\hat x\_{N\mid N}$, $P\_{N\mid N}$ 이 답이다. 직관 절의 예는 $N=2$ 이고 구할 것은 $\hat x\_{1\mid 2}$ 와 $P\_{1\mid 2}$ 다.

## 후향 재귀

**Rauch–Tung–Striebel 평활기** 는 필터를 $k=1,\dots,N$ 으로 돌려 $\hat x\_{k\mid k}$, $P\_{k\mid k}$, $\hat x\_{k+1\mid k}$, $P\_{k+1\mid k}$ 를 저장한 뒤, $k=N-1,\dots,1$ 의 순서로 다음을 계산하는 절차다.[^1]

$$
C_k=P\_{k\mid k}F^{\mathsf T}P\_{k+1\mid k}^{-1}
$$

$$
\hat x\_{k\mid N}=\hat x\_{k\mid k}+C_k\bigl(\hat x\_{k+1\mid N}-\hat x\_{k+1\mid k}\bigr),\qquad
P\_{k\mid N}=P\_{k\mid k}+C_k\bigl(P\_{k+1\mid N}-P\_{k+1\mid k}\bigr)C_k^{\mathsf T}
$$

$C_k$ 를 **평활 이득(smoother gain)** 이라 한다. 괄호 안의 $\hat x\_{k+1\mid N}-\hat x\_{k+1\mid k}$ 는 다음 시점의 추정이 나중 관측으로 얼마나 바뀌었는지다.

직관 절의 예에서 $P\_{1\mid 1}=4$, $P\_{2\mid 1}=5$ 이므로 $C_1=4/5$ 다. 필터가 낸 $\hat x\_{2\mid 2}=35/3$, $P\_{2\mid 2}=5/6$ 을 넣으면

$$
\hat x\_{1\mid 2}=10+\tfrac45\bigl(\tfrac{35}3-10\bigr)=\tfrac{34}3,\qquad
P\_{1\mid 2}=4+\tfrac{16}{25}\bigl(\tfrac56-5\bigr)=\tfrac43
$$

이고 직관 절의 값과 같다.

# 성질

## 최적성

잡음이 Gauss 이면 $\hat x\_{k\mid N}$ 은 [조건부 기댓값](conditional-expectation.md) $E\lbrack x_k\mid z_1,\dots,z_N\rbrack$ 이고 $P\_{k\mid N}$ 은 그 조건부 공분산이다.

증명의 요지는 Markov 성질(Markov property)이다. $x\_{k+1}$ 이 주어지면 $z\_{k+1},\dots,z_N$ 은 $x_k$ 와 조건부 독립(conditionally independent)이므로, $x_k$ 의 조건부분포는 $z_1,\dots,z_k$ 와 $x\_{k+1}$ 만으로 정해진다. $(x_k,x\_{k+1})$ 의 결합분포가 Gauss 이므로 그 조건부 평균은 $\hat x\_{k\mid k}+C_k(x\_{k+1}-\hat x\_{k+1\mid k})$ 이고 조건부 공분산은 $P\_{k\mid k}-C_kP\_{k+1\mid k}C_k^{\mathsf T}$ 다. 여기서 $x\_{k+1}$ 을 $z_1,\dots,z_N$ 에 대해 평균하면 조건부 기댓값의 반복 성질(tower property)과 전체 분산 공식(law of total variance)으로 후향 재귀가 나온다.

## 분산의 감소

$P\_{k+1\mid N}\preceq P\_{k+1\mid k}$ 이므로 $P\_{k\mid N}\preceq P\_{k\mid k}$ 다. 여기서 $A\preceq B$ 는 $B-A$ 가 양의 준정부호라는 뜻이다. 관측을 더 쓰면 불확실성이 줄어들고, 예에서는 분산이 $4$ 에서 $4/3$ 으로 줄었다.

## 계산량

전향 필터와 후향 재귀가 각각 시점마다 $n\times n$ 행렬의 곱과 역행렬을 한 번씩 계산하므로 전체 계산량은 $O(Nn^3)$ 이다. 궤적 $x_1,\dots,x_N$ 전체의 사후분포를 한꺼번에 풀면 정보행렬이 $Nn\times Nn$ 블록 [삼중대각계](tridiagonal-systems.md)가 되고, Rauch–Tung–Striebel 평활기는 그 계를 블록 단위로 소거하는 계산과 같다. 행렬이 블록 삼중대각이므로 계산량이 관측 개수 $N$ 에 비례한다.

# 활용

- [기댓값 최대화 알고리즘](em-algorithm.md)으로 상태공간 모형의 $F$, $Q$, $R$ 을 추정할 때 E 단계가 이 평활기다. M 단계에 필요한 $E\lbrack x_kx_k^{\mathsf T}\rbrack$ 와 $E\lbrack x\_{k+1}x_k^{\mathsf T}\rbrack$ 가 $\hat x\_{k\mid N}$, $P\_{k\mid N}$, $C_k$ 로 적힌다.
- [은닉 Markov 모형](hidden-markov-model.md)의 후향 알고리즘과 사후 주변분포 계산이 상태가 유한집합일 때의 같은 절차다. 상태가 선형 Gauss 이면 합이 위의 행렬 공식이 된다.
- 위성 항법 기록이나 관성 측정 기록에서 실시간 추정이 필요 없을 때 궤적 전체를 다시 추정하는 데 쓴다.

[^1]: H. E. Rauch, F. Tung, and C. T. Striebel, "Maximum likelihood estimates of linear dynamic systems", *AIAA Journal* 3 (1965), 1445–1450.

# 연관 문서

## 선수지식

- [Kalman 필터](kalman-filter.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #signal_processing
