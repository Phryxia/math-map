# 정보기하

# 개요

**정보기하(information geometry)** 는 확률분포들의 모임을 곡면처럼 보고 분포 사이의 거리를 재는 기하다. [정규분포](normal-distribution.md)의 분산을 $1$ 에서 $1.21$ 로 옮길 때 모수를 분산으로 잡으면 차이가 $0.21$ 이고 표준편차로 잡으면 $0.1$ 이어서, 모수 좌표의 거리는 두 분포가 얼마나 다른지를 재지 못한다. 정보기하는 두 분포의 차이를 이차식으로 근사한 [Fisher 정보](fisher-information.md) 행렬을 계량으로 써서, 모수를 어떻게 잡아도 같은 거리를 얻는다.

# 직관

정보기하는 확률분포족을 다양체로 보고 Fisher 정보행렬을 [Riemann 계량](riemannian-metrics.md)으로 삼아 분포 사이의 거리와 사영을 재는 기하다. 이 계량은 모수를 어떻게 잡아도 같은 기하를 주며, 충분통계량에 대한 불변성만으로 상수배까지 결정된다. 지수접속과 혼합접속이라는 두 아핀접속이 계량에 대해 쌍대이고, 지수족이 두 접속 가운데 하나에 대해 평평한 다양체가 된다.

두 분포가 얼마나 다른지를 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)로 잰다. 정규분포족에서 평균을 고정하고 분산을 $\sigma^2=1$ 에서 $\sigma^2=1.21$ 로 옮긴 경우를 생각한다. 모수를 분산 $\sigma^2$ 로 잡으면 두 점의 유클리드 거리가 $0.21$ 이고, 표준편차 $\sigma$ 로 잡으면 $0.1$ 이다. 같은 두 분포인데 모수를 바꿔 적었다는 이유로 거리가 달라지므로, 모수 공간의 유클리드 거리는 분포 사이의 거리가 아니다.

$\theta$ 에서 $\theta+\delta$ 로 옮길 때 KL divergence 는 $\tfrac12\delta^{\mathsf T}I(\theta)\delta$ 에 3차 오차를 더한 값이다. 모수를 $\theta\mapsto\eta$ 로 바꿔 적으면 $\delta$ 는 Jacobian 행렬 $J$ 를 곱한 만큼 바뀌고 $I$ 는 $J^{-\mathsf T}IJ^{-1}$ 로 바뀌므로 이차형식의 값이 그대로다. 각 점에 이 이차형식을 놓으면 모수 선택과 무관한 Riemann 계량이 되고, 곡선의 길이와 측지선, 직교 사영을 분포족 자체의 성질로 말할 수 있다.

# 정의

## 통계적 다양체

통계적 다양체는 모수 $\theta\in\Theta\subset\mathbb R^d$ 로 매개화된 확률밀도족 $\lbrace f(\cdot;\theta)\rbrace$ 가 이루는 다양체다. $\Theta$ 가 열린집합이고 $\theta\mapsto f(\cdot;\theta)$ 가 단사이며 로그밀도가 $\theta$ 에 대해 두 번 미분가능하다고 둔다. 점은 분포이고 좌표는 모수다.

## Fisher–Rao 계량

Fisher–Rao 계량은 점 $\theta$ 의 접공간에 다음 내적을 주는 것이다.

$$
g_{ij}(\theta)=\mathbb E\_{\theta}\big\lbrack \partial_i\log f(X;\theta)\thinspace \partial_j\log f(X;\theta)\big\rbrack
$$

우변이 Fisher 정보행렬 $I(\theta)$ 의 성분이다. 양정의성은 점수함수의 성분들이 선형독립인 것과 같고, 정칙 조건 아래 성립한다.

## 쌍대 접속

지수접속 $\nabla^{(e)}$ 와 혼합접속 $\nabla^{(m)}$ 은 각각 로그밀도의 아핀결합과 밀도의 아핀결합을 측지선으로 갖는 아핀접속이다. 두 접속은 계량 $g$ 에 대해 쌍대이고, 벡터장 $X,Y,Z$ 에서 다음이 성립하는 것이 그 정의다.

$$
Z\thinspace g(X,Y)=g\big(\nabla^{(e)}\_ZX,\thinspace Y\big)+g\big(X,\thinspace\nabla^{(m)}\_ZY\big)
$$

둘의 평균이 Levi-Civita 접속이다.[^2] Riemann 기하가 한 접속으로 하는 일을 정보기하는 쌍을 이루는 두 접속으로 한다.

# 성질

## Chentsov 정리

통계적 다양체 위의 Riemann 계량이 충분통계량으로의 변환에서 불변이면 Fisher–Rao 계량의 상수배다. 유한 표본공간에서 Markov 사상에 대한 불변성으로 진술하며, 증명은 불변성을 표본공간의 세분과 치환에 차례로 적용해 계량의 성분을 하나의 자유도로 줄이는 것이다.[^1] 통계적 추론에서 충분통계량이 정보를 잃지 않는다는 요구만으로 계량이 정해진다.

## 지수족의 평평함

[지수족](exponential-families.md)은 자연모수 $\theta$ 좌표에서 $e$ 평평하다. 로그밀도가 $\theta$ 의 아핀함수이므로 지수접속의 접속계수가 전부 $0$ 이기 때문이다. 기댓값모수 $\eta=\nabla\psi(\theta)$ 좌표에서는 $m$ 평평하며, $\psi$ 가 로그분배함수다. 두 좌표는 [볼록 공액](convex-conjugate.md)으로 맺어진다.

$$
\psi^{\ast}(\eta)=\sup_{\theta}\big(\langle\theta,\eta\rangle-\psi(\theta)\big)
$$

계량은 두 좌표에서 $I(\theta)=\nabla^2\psi(\theta)$ 와 $\nabla^2\psi^{\ast}(\eta)$ 이고, 두 행렬이 서로 역행렬이다.

## Bregman divergence 와 Pythagoras 정리

KL divergence 는 지수족에서 로그분배함수를 생성함수로 하는 [Bregman divergence](bregman-divergence.md)다.

$$
D\_{\mathrm{KL}}(p\_{\theta\_1}\thinspace\Vert\thinspace p\_{\theta\_2})=\psi(\theta\_2)-\psi(\theta\_1)-\langle\theta\_2-\theta\_1,\thinspace\nabla\psi(\theta\_1)\rangle
$$

세 점 $p,q,r$ 에서 $q$ 와 $p$ 를 잇는 $m$ 측지선과 $q$ 와 $r$ 을 잇는 $e$ 측지선이 $q$ 에서 직교하면 등식

$$
D\_{\mathrm{KL}}(p\thinspace\Vert\thinspace q)+D\_{\mathrm{KL}}(q\thinspace\Vert\thinspace r)=D\_{\mathrm{KL}}(p\thinspace\Vert\thinspace r)
$$

이 성립한다. Bregman divergence 의 세 항을 전개하면 교차항이 직교조건으로 사라진다. 부분다양체로의 divergence 최소화가 측지선 사영이 되는 것이 이 등식의 쓰임이다.

## 자연 경사법

분포족 위에서 손실 $L(\theta)$ 를 줄일 때, 계량으로 길이를 잰 작은 공 안에서 가장 많이 줄이는 방향은 $-I(\theta)^{-1}\nabla L(\theta)$ 다. 유클리드 최급강하 방향 $-\nabla L$ 과 달리 모수 선택을 바꿔도 같은 분포 열을 지나며, 걸음의 크기를 KL divergence 로 재는 제약 최적화의 1차 해가 같은 식이다.

# 활용

- [최대가능도 추정](maximum-likelihood.md). 경험분포에서 모형 부분다양체로 내리는 $m$ 사영이 최대가능도 추정량이고, 지수족에서는 기댓값모수를 표본적률과 맞추는 적률방정식이 그 사영이다.
- [신뢰영역 정책 최적화](trust-region-policy-optimization.md). 정책족 위의 KL 제약을 Fisher–Rao 계량의 이차형식으로 바꿔 풀면 자연 경사 방향이 나온다.
- [변분 추론](variational-inference.md)의 사후분포 근사. 사후분포를 다루기 쉬운 분포족으로 내리는 사영을 divergence 최소화로 적고, 갱신을 기댓값모수에서 수행한다.
- 지수족의 로그분배함수. 그 [Hessian](hessian.md) 이 계량이고 기울기가 좌표변환이므로, 평평한 좌표계 두 개가 같은 함수에서 나온다.

[^1]: N. N. Chentsov, *Statistical Decision Rules and Optimal Inference*, American Mathematical Society, 1982. 유한 표본공간에서 Markov 사상 불변 계량이 Fisher 정보의 상수배인 것.
[^2]: Shun-ichi Amari and Hiroshi Nagaoka, *Methods of Information Geometry*, American Mathematical Society, 2000, 2–3장. 쌍대 접속, 평평한 좌표계, 일반화 Pythagoras 정리.

# 연관 문서

## 선수지식

- [Fisher 정보](fisher-information.md)
- [Riemann 계량](riemannian-metrics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #differential_geometry #information_theory #machine_learning
