# 근접점 방법

# 개요

**근접점 방법(proximal point method)** 은 지금 점에서 너무 멀리 가지 않으면서 함수값을 줄이는 점으로 옮겨 가기를 되풀이해 볼록 함수의 최소점을 찾는 방법이다. $\vert x\vert$ 를 $2.5$ 에서 출발해 보폭 $1$ 로 기울기 반대 방향으로 밟으면 $1.5$, $0.5$, $-0.5$, $0.5$ 로 $0$ 을 건너뛰며 멈추지 않는다. 근접점 방법은 한 걸음을 기울기로 정하지 않고 작은 최소화 문제의 해로 정하므로, 같은 보폭으로 $1.5$, $0.5$, $0$ 에 이르고 그 자리에 머문다.

# 직관

$g(x)=\vert x\vert$ 를 최소화한다. [경사하강법](gradient-descent.md)은 지금 점의 기울기를 보고 $x_{k+1}=x_k-\eta g'(x_k)$ 로 밟는다. $x_0=2.5$, $\eta=1$ 이면 기울기가 $1$ 이므로 $1.5$, $0.5$, $-0.5$ 로 가고, 거기서 기울기가 $-1$ 이 되어 $0.5$ 로 돌아온다. 기울기의 크기가 $0$ 근처에서도 $1$ 이라 걸음이 줄지 않는다.

출발점의 기울기로 걸음을 정해서 걸음이 줄지 않았으니, 도착점의 기울기로 정한다. $x_{k+1}=x_k-\eta s$ 이고 $s$ 가 도착점 $x_{k+1}$ 에서의 기울기가 되게 고른다. $x_k=0.5$ 에서 $x_{k+1}=0$ 으로 가면 $s=0.5$ 이고, $\vert x\vert$ 는 $0$ 에서 꺾여 있어 $-1$ 과 $1$ 사이의 기울기를 모두 허용하므로 이 선택이 맞는다. 따라서 $0.5$ 다음은 $0$ 이고, $0$ 에서 $s=0$ 을 고르면 그 자리에 머문다.

이렇게 고른 $x_{k+1}$ 은 $\vert x\vert+\frac12(x-x_k)^2$ 의 최소점이다. 이 함수의 기울기가 $0$ 이 되는 조건이 $x_k-x_{k+1}$ 이 $x_{k+1}$ 에서 $\vert x\vert$ 의 기울기라는 조건과 같다. 이 최소점이 [근접 경사법](proximal-gradient-method.md)에서 정의한 근접 연산자의 값이다. 근접 연산자만 되풀이하는 반복을 근접점 방법이라 부른다.

# 정의

$g:\mathbb R^n\to\mathbb R\cup\lbrace +\infty\rbrace$ 가 고유하고 볼록이고 하반연속이라 하자. 출발점 $x_0$ 과 보폭 $\eta_k\gt 0$ 에 대해

$$
x_{k+1}=\mathrm{prox}\_{\eta_k g}(x_k)=\mathop{\mathrm{argmin}}\_{x}\Bigl(g(x)+\frac{1}{2\eta_k}\Vert x-x_k\Vert^2\Bigr)
$$

로 정한 점렬을 근접점 방법의 반복이라 한다. 괄호 안이 강볼록이므로 최소점은 하나뿐이다. [부분미분](subdifferential.md)으로 쓰면 이 반복은

$$
\frac{x_k-x_{k+1}}{\eta_k}\in\partial g(x_{k+1})
$$

와 같다. 경사하강법이 출발점의 기울기를 쓰는 데 비해 이 식은 도착점의 부분기울기를 쓴다. $g$ 가 미분가능하면 $x_{k+1}=x_k-\eta_k\nabla g(x_{k+1})$ 이고, 이것은 기울기 흐름 $\dot x=-\nabla g(x)$ 를 [상미분방정식](ordinary-differential-equations.md)의 음해적 Euler 방법(implicit Euler method)으로 이산화한 것이다.

직관 절의 $g(x)=\vert x\vert$, $\eta_k=1$ 에서 $\mathrm{prox}\_g(z)$ 는 $\vert z\vert\gt 1$ 이면 $z$ 를 $0$ 쪽으로 $1$ 옮긴 점, $\vert z\vert\le 1$ 이면 $0$ 이다. $x_0=2.5$ 에서 $x_1=1.5$, $x_2=0.5$, $x_3=0$ 이고 그 뒤로 $0$ 이다.

# 성질

아래에서 $g$ 의 최솟값을 $g^\ast$, 최소점 집합을 $X^\ast$ 로 쓰고 $X^\ast$ 가 공집합이 아니라 하자.

## 고정점과 단조성

$x=\mathrm{prox}\_{\eta g}(x)$ 인 것은 $0\in\partial g(x)$, 곧 $x\in X^\ast$ 인 것과 동치다. [Moreau 포락](moreau-envelope.md)의 기울기 공식으로 $x_{k+1}=x_k-\eta_k\nabla e\_{\eta_k g}(x_k)$ 이므로, 근접점 방법은 포락 위의 경사하강법이기도 하다.

$x\_{k+1}$ 은 괄호 안의 최소점이므로 $x=x_k$ 를 넣은 값보다 작다. 따라서 $g(x\_{k+1})+\frac{1}{2\eta_k}\Vert x\_{k+1}-x_k\Vert^2\le g(x_k)$ 이고, 함숫값은 매 걸음 줄어든다.

## 단단한 비확장성

정리. 근접 연산자 $P=\mathrm{prox}\_{\eta g}$ 는 모든 $z$, $w$ 에서 다음을 만족한다.

$$
\Vert Pz-Pw\Vert^2\le\langle Pz-Pw,\thinspace z-w\rangle
$$

이 성질을 **단단한 비확장성(firm nonexpansiveness)** 이라 한다.

증명의 요지. $(z-Pz)/\eta\in\partial g(Pz)$ 와 $(w-Pw)/\eta\in\partial g(Pw)$ 를 부분미분의 단조성 $\langle a-b,\thinspace u-v\rangle\ge 0$ ($a\in\partial g(u)$, $b\in\partial g(v)$) 에 넣으면 $\langle(z-w)-(Pz-Pw),\thinspace Pz-Pw\rangle\ge 0$ 이고, 이 식의 항을 옮기면 위 부등식이다.

$x^\ast\in X^\ast$ 는 $Px^\ast=x^\ast$ 이므로 $w=x^\ast$ 를 넣고 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓰면 $\Vert x\_{k+1}-x^\ast\Vert\le\Vert x_k-x^\ast\Vert$ 다. 반복은 어느 최소점에서도 멀어지지 않는다.

## 수렴률

정리(Güler). 모든 $k\ge 1$ 과 $x^\ast\in X^\ast$ 에서 다음이 성립한다.[^1]

$$
g(x_k)-g^\ast\le\frac{\Vert x_0-x^\ast\Vert^2}{2\sum\_{i=0}^{k-1}\eta_i}
$$

증명의 요지. 부분미분 조건 $(x_i-x\_{i+1})/\eta_i\in\partial g(x\_{i+1})$ 를 부분기울기 부등식에 넣고 세 점의 항등식 $2\langle x_i-x\_{i+1},\thinspace x\_{i+1}-x^\ast\rangle=\Vert x_i-x^\ast\Vert^2-\Vert x\_{i+1}-x^\ast\Vert^2-\Vert x_i-x\_{i+1}\Vert^2$ 를 쓰면 $\eta_i(g(x\_{i+1})-g^\ast)\le\frac12(\Vert x_i-x^\ast\Vert^2-\Vert x\_{i+1}-x^\ast\Vert^2)$ 이다. $i=0,\dots,k-1$ 에서 더하면 오른쪽이 망원합이 되어 $\frac12\Vert x_0-x^\ast\Vert^2$ 이하이고, 함숫값이 줄어들므로 왼쪽은 $(\sum\eta_i)(g(x_k)-g^\ast)$ 이상이다.

보폭이 상수 $\eta$ 이면 오른쪽이 $\Vert x_0-x^\ast\Vert^2/(2\eta k)$ 다. 경사하강법과 달리 보폭에 상한이 없고, 보폭을 키울수록 한계가 작아진다. 대신 한 걸음마다 근접 연산자를 계산해야 한다. 직관 절의 예에서 $k=1$ 이면 $g(x_1)=1.5$ 이고 한계는 $2.5^2/2=3.125$ 다.

## 반복점의 수렴

정리(Rockafellar). 모든 $k$ 에서 $\eta_k\ge\eta$ 인 상수 $\eta\gt 0$ 이 있으면 $x_k$ 는 $X^\ast$ 의 한 점으로 수렴한다.[^2]

증명의 요지. $\Vert x_k-x^\ast\Vert$ 가 줄어들므로 점렬이 유계이고 수렴하는 부분점렬이 있다. 수렴률 정리로 그 극한이 $X^\ast$ 에 속하고, 그 극한을 $x^\ast$ 로 잡으면 $\Vert x_k-x^\ast\Vert$ 가 줄어드는 수열이면서 부분점렬에서 $0$ 으로 가므로 전체가 $0$ 으로 간다.

같은 논법이 [Hilbert 공간](hilbert-spaces.md)에서는 약수렴을 준다. Güler 는 Hilbert 공간에서 반복점이 노름으로 수렴하지 않는 예를 만들었다.[^1]

## 강볼록 함수의 선형 수렴

$g$ 가 $\mu$ 강볼록이면 부분미분의 단조성이 $\langle a-b,\thinspace u-v\rangle\ge\mu\Vert u-v\Vert^2$ 로 강해지고, 같은 계산으로 다음이 나온다.

$$
\Vert x\_{k+1}-x^\ast\Vert\le\frac{1}{1+\eta\mu}\Vert x_k-x^\ast\Vert
$$

$g(x)=\frac12x^2$ 이면 $\mu=1$ 이고 $\mathrm{prox}\_{\eta g}(z)=z/(1+\eta)$ 이므로 등호가 성립한다. 경사하강법 $x\_{k+1}=(1-\eta)x_k$ 는 $\eta\gt 2$ 에서 발산하지만 이 반복은 모든 $\eta\gt 0$ 에서 수렴한다.

## 유한 종료

정리(Ferris). 어떤 $\alpha\gt 0$ 에 대해 모든 $x$ 에서 $g(x)-g^\ast\ge\alpha\thinspace d(x,X^\ast)$ 이고 보폭이 $0$ 으로 가지 않으면, 근접점 방법은 유한 번 만에 $X^\ast$ 에 닿는다.[^3]

이 조건을 날카로운 최소(sharp minimum)라 한다. $\vert x\vert$ 는 $\alpha=1$ 인 날카로운 최소를 갖고, 직관 절의 반복이 세 걸음 만에 $0$ 에 닿은 것이 이 정리의 경우다.

# 활용

- 증강 Lagrangian 방법(augmented Lagrangian method). 제약 $Ax=b$ 아래 $f$ 를 최소화하는 문제의 승수법(method of multipliers)은 [Lagrange 쌍대성](lagrange-duality.md)의 쌍대 함수에 근접점 방법을 쓴 것과 같다. 쌍대 변수의 근접 연산자를 계산하는 일이 증강 Lagrangian 의 최소화가 되고, 벌점 계수 $\rho$ 가 보폭이다.[^4] [교대 방향 승수법](admm.md)은 그 최소화를 두 블록으로 나눠 한 번씩만 한다.
- [단조 작용소](monotone-operators.md)의 영점. 반복 $x\_{k+1}=(I+\eta T)^{-1}x_k$ 는 $\partial g$ 를 극대 단조 작용소(maximal monotone operator) $T$ 로 바꿔도 정의되고, 단단한 비확장성과 반복점의 수렴이 그대로 성립한다.[^2] [Douglas–Rachford 분할](douglas-rachford-splitting.md)은 두 작용소의 합에 대한 이 반복의 변형이다.
- 반복 Tikhonov 정칙화(iterated Tikhonov regularization). $g(x)=\frac12\Vert Ax-b\Vert^2$ 이면 한 걸음이 $x\_{k+1}=(I+\eta A^{\mathsf T}A)^{-1}(x_k+\eta A^{\mathsf T}b)$ 다. $A^{\mathsf T}A$ 가 특이해도 $I+\eta A^{\mathsf T}A$ 는 가역이므로 매 걸음이 잘 정의된다.
- 강성 상미분방정식. 기울기 흐름의 음해적 Euler 방법이 근접점 방법이므로, 보폭에 제한이 없다는 수렴률 정리가 음해적 방법이 큰 시간 간격에서도 안정하다는 사실의 볼록 최적화판이다.

[^1]: O. Güler, "On the convergence of the proximal point algorithm for convex minimization", *SIAM Journal on Control and Optimization* **29** (1991), 403–419.
[^2]: R. T. Rockafellar, "Monotone operators and the proximal point algorithm", *SIAM Journal on Control and Optimization* **14** (1976), 877–898. 반복 자체는 B. Martinet, "Régularisation d'inéquations variationnelles par approximations successives", *Revue Française d'Informatique et de Recherche Opérationnelle* **4** (1970), 154–158 에서 시작한다.
[^3]: M. C. Ferris, "Finite termination of the proximal point algorithm", *Mathematical Programming* **50** (1991), 359–366.
[^4]: R. T. Rockafellar, "Augmented Lagrangians and applications of the proximal point algorithm in convex programming", *Mathematics of Operations Research* **1** (1976), 97–116.

# 연관 문서

## 선수지식

- [Moreau 포락](moreau-envelope.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #functional_analysis
