# Bregman divergence

# 개요

**Bregman divergence** 는 미분가능한 순볼록 함수 $\varphi$ 에 대해, 점 $x$ 에서의 $\varphi$ 의 값이 점 $y$ 에서 그은 접평면보다 얼마나 위에 있는지로 $x$ 와 $y$ 의 차이를 재는 양 $D_\varphi(x,y)$ 다. 확률을 비교할 때 제곱 차이 $(p-q)^2$ 는 $0.01$ 과 $0.02$ 의 차이를 $0.50$ 과 $0.51$ 의 차이와 같게 재지만, 앞쪽은 확률이 두 배로 바뀐 것이라 더 크게 재야 할 때가 있다. Bregman divergence 는 $\varphi$ 를 바꿔 이런 차이를 정하고, $\varphi$ 를 음의 엔트로피로 두면 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)가 나와 제곱 거리에서 쓰던 Pythagoras 정리와 평균의 최소성을 그대로 쓸 수 있다.

# 직관

$\varphi(t)=t^2$ 의 그래프에서 $t=1$ 의 접선은 $1+2(t-1)$ 이다. $t=3$ 에서 함숫값은 $9$, 접선의 값은 $5$ 이고, 차이 $4$ 는 $(3-1)^2$ 이다. 이 함수에서는 접선과의 차이가 두 점의 거리의 제곱과 같다.

$\varphi(t)=t\log t$ 로 같은 계산을 한다. $t=1$ 의 접선은 $t-1$ 이고, $t=3$ 에서 함숫값 $3\log 3\approx 3.296$ 과 접선의 값 $2$ 의 차이는 약 $1.296$ 이다. 거꾸로 $t=3$ 에서 접선을 긋고 $t=1$ 에서 재면 약 $0.901$ 이다. 그래프가 휘는 정도가 곳마다 다르므로 어느 점에서 접선을 긋는지에 따라 값이 달라진다.

$\varphi(x)=\Vert x\Vert^2$ 이면 제곱 Euclid 거리다. L. M. Bregman 이 1967 년에 볼록집합의 공통점을 찾는 반복에서 이 양을 도입했다[^1]. 대칭이 아니고 삼각부등식을 만족하지 않는다.

# 정의

$\Omega\subseteq\mathbb R^n$ 이 볼록 열린집합이고 $\varphi:\Omega\to\mathbb R$ 가 미분가능한 순볼록 함수일 때

$$
D_\varphi(x,y)=\varphi(x)-\varphi(y)-\langle\nabla\varphi(y),\thinspace x-y\rangle
$$

를 $\varphi$ 의 Bregman divergence 라 한다. $\varphi$ 를 생성함수라 한다.

| 생성함수 | Bregman divergence |
| --- | --- |
| $\Vert x\Vert^2$ | $\Vert x-y\Vert^2$ |
| $\sum_ix_i\log x_i$ | $\sum_ix_i\log(x_i/y_i)-\sum_ix_i+\sum_iy_i$ |
| $-\sum_i\log x_i$ | $\sum_i\bigl(x_i/y_i-\log(x_i/y_i)-1\bigr)$ |

둘째 줄은 확률 벡터에서 KL divergence 이고, 셋째 줄은 Itakura–Saito 거리(Itakura–Saito distance)다.

# 성질

## 기본 성질

- $D_\varphi(x,y)\ge 0$ 이고 등호는 $x=y$ 일 때만 성립한다. [볼록성](convexity.md)의 접선 하한에서 나온다.
- $D_\varphi(x,y)$ 는 $x$ 에 대해 볼록이다. $y$ 에 대해서는 일반적으로 볼록이 아니다.
- 일반적으로 $D_\varphi(x,y)\ne D_\varphi(y,x)$ 이다. 대칭인 것은 $\varphi$ 가 이차식일 때다.

## 세 점 항등식

정리. 세 점 $x,y,z$ 에 대해 다음이 성립한다.

$$
D_\varphi(x,z)=D_\varphi(x,y)+D_\varphi(y,z)+\langle\nabla\varphi(z)-\nabla\varphi(y),\thinspace y-x\rangle
$$

정의를 대입해 전개하면 나온다. $\varphi(x)=\Vert x\Vert^2$ 이면 마지막 항이 $2\langle y-z,x-y\rangle$ 가 되어 코사인 법칙이다.

## 사영과 Pythagoras 부등식

닫힌 볼록집합 $C$ 에 대해 $\Pi_C(y)=\mathop{\mathrm{arg\thinspace min}}\_{x\in C}D_\varphi(x,y)$ 를 Bregman 사영이라 한다.

정리(Bregman). 모든 $x\in C$ 에 대해 $D_\varphi(x,y)\ge D_\varphi(x,\Pi_C(y))+D_\varphi(\Pi_C(y),y)$ 이다. $C$ 가 아핀집합이면 등호가 성립한다[^1].

증명의 요지. 최소점 $p=\Pi_C(y)$ 의 최적성 조건은 모든 $x\in C$ 에서 $\langle\nabla\varphi(p)-\nabla\varphi(y),x-p\rangle\ge 0$ 이다. 세 점 항등식에 $z=y$, 가운데 점 $p$ 를 넣으면 남는 항이 이 내적이다.

## 평균의 최소성

정리(Banerjee–Guo–Wang). 확률변수 $X$ 가 $\Omega$ 에 값을 갖고 $EX\in\Omega$ 이면 $y\mapsto E\thinspace D_\varphi(X,y)$ 의 유일한 최소점은 $y=EX$ 다. 거꾸로 모든 분포에서 평균이 최소점인 차이 함수는 이 꼴뿐이다[^2].

증명의 요지. 정의를 대입하면 $E\thinspace D_\varphi(X,y)-E\thinspace D_\varphi(X,EX)=D_\varphi(EX,y)$ 이고, 이것은 $y=EX$ 에서만 $0$ 이다.

## 쌍대

$\varphi$ 의 [볼록 공액](convex-conjugate.md) $\varphi^\ast$ 와 $x^\ast=\nabla\varphi(x)$ 에 대해 $D_\varphi(x,y)=D_{\varphi^\ast}(y^\ast,x^\ast)$ 이다. [지수족](exponential-families.md)의 로그분배함수를 생성함수로 하면, 자연모수 사이의 Bregman divergence 가 두 분포의 KL divergence 다.

# 활용

- 거울 하강법(mirror descent). 경사하강의 제곱 거리 벌점을 Bregman divergence 로 바꾼 반복이다. 확률 단체 위에서 음의 엔트로피를 쓰면 [곱셈 가중치 절차](multiplicative-weights.md)의 갱신이 된다[^3].
- 군집. 평균의 최소성으로 [k 평균 군집화](k-means.md)의 Lloyd 반복이 모든 Bregman divergence 에서 그대로 성립한다[^4].
- 행렬 맞추기. [Sinkhorn 알고리즘](sinkhorn.md)의 각 단계는 아핀집합으로의 KL 사영이고, 등호가 성립하는 Pythagoras 정리로 수렴을 증명한다.
- 확률 예측의 평가. [적정 점수 규칙](proper-scoring-rules.md)의 기대 초과 손실이 볼록 함수의 Bregman divergence 다.
- [정보기하](information-geometry.md). 쌍대 평탄 다양체의 표준 divergence 가 Bregman divergence 이다.

[^1]: L. M. Bregman, "The relaxation method of finding the common point of convex sets and its application to the solution of problems in convex programming", USSR Computational Mathematics and Mathematical Physics 7 (1967), 200–217.
[^2]: A. Banerjee, X. Guo, H. Wang, "On the optimality of conditional expectation as a Bregman predictor", IEEE Transactions on Information Theory 51 (2005), 2664–2669.
[^3]: A. Beck, M. Teboulle, "Mirror descent and nonlinear projected subgradient methods for convex optimization", Operations Research Letters 31 (2003), 167–175.
[^4]: A. Banerjee, S. Merugu, I. S. Dhillon, J. Ghosh, "Clustering with Bregman divergences", Journal of Machine Learning Research 6 (2005), 1705–1749.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)

## 더 알아보기

- [적정 점수 규칙](proper-scoring-rules.md)

#optimization #information_theory #statistics
