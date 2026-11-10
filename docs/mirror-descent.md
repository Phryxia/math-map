# 거울 하강법

# 개요

**거울 하강법(mirror descent)** 은 [경사하강법](gradient-descent.md)이 한 걸음마다 쓰는 거리의 제곱을, 변수가 놓인 집합의 모양에 맞춘 다른 차이로 바꾼 반복이다. 세 선택지에 확률 $p_1,p_2,p_3$ 을 나누어 주고 기대 비용을 줄이려 할 때, 기울기 방향으로 한 걸음을 밟으면 확률이 음수가 되거나 합이 $1$ 에서 벗어난다. 거울 하강법은 거리의 제곱 대신 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)로 걸음을 재어, 확률마다 비용에 따른 배율을 곱하고 합이 $1$ 이 되게 나누는 갱신을 얻는다.

# 직관

선택지 셋의 비용이 $c=(0,1,2)$ 이고 기대 비용 $f(p)=\langle c,p\rangle$ 을 확률 벡터 $p$ 위에서 줄인다. 균등한 $p=(1/3,1/3,1/3)$ 에서 기울기는 $c$ 이고, 보폭 $1$ 로 경사하강을 하면 $p-c=(1/3,-2/3,-5/3)$ 이다. 음수가 있고 합이 $-2$ 라 확률이 아니므로, 확률 벡터의 집합으로 다시 사영해야 한다.

경사하강의 한 걸음은 $\langle c,p\rangle+\frac{1}{2\eta}\Vert p-p_k\Vert^2$ 을 최소화한 결과다. 둘째 항이 현재 점에서 멀리 가지 못하게 막는다. 이 항을 확률 벡터 사이의 차이인 $\frac1\eta\mathrm{KL}(p\Vert p_k)=\frac1\eta\sum_ip_i\log(p_i/p_{k,i})$ 로 바꾸고 합이 $1$ 이라는 조건 아래 최소화하면, [Lagrange 승수법](lagrange-multipliers.md)으로 계산해 다음 갱신이 나온다.

$$
p_{k+1,i}=\frac{p_{k,i}\thinspace e^{-\eta c_i}}{\sum_jp_{k,j}\thinspace e^{-\eta c_j}}
$$

$\eta=\log 2$ 로 두면 배율이 $2^{-c_i}=(1,\thinspace 1/2,\thinspace 1/4)$ 이다. 균등한 $p$ 에서 한 걸음이면 $(4,2,1)/7$ , 두 걸음이면 $(16,4,1)/21$ 이 된다. 값이 언제나 양수이고 합이 $1$ 이므로 사영이 필요 없고, 확률이 비용 $0$ 인 첫 선택지로 모인다. 이처럼 걸음을 재는 차이를 집합에 맞게 바꾼 경사하강을 거울 하강법이라 부른다.

# 정의

$C\subseteq\mathbb R^n$ 이 닫힌 볼록집합이고 $f$ 가 $C$ 위의 볼록 함수라 하자. $\psi$ 가 $C$ 를 포함하는 볼록 열린집합에서 미분가능하고 순볼록인 함수이고, $D_\psi$ 가 $\psi$ 의 [Bregman divergence](bregman-divergence.md)라 하자. $g_k$ 가 $x_k$ 에서 $f$ 의 [부분미분](subdifferential.md)의 원소일 때 **거울 하강법** 은 다음 반복이다.

$$
x_{k+1}=\mathop{\mathrm{arg\thinspace min}}\_{x\in C}\Bigl(\eta\langle g_k,x\rangle+D_\psi(x,x_k)\Bigr)
$$

$\psi$ 를 **거울 사상(mirror map)** 이라 한다. 직관 절의 예는 $C$ 가 확률 벡터 전체인 확률 단체(probability simplex)이고 $\psi(x)=\sum_ix_i\log x_i$ 인 경우다. 이때 $D_\psi$ 는 확률 벡터 위에서 KL divergence 이고 갱신은 직관 절의 식이며, 이 경우를 지수화 경사법(exponentiated gradient)이라고도 부른다. $\psi(x)=\frac12\Vert x\Vert^2$ 이면 $D_\psi(x,y)=\frac12\Vert x-y\Vert^2$ 이고 반복은 사영 경사법(projected gradient method)이다.

## 쌍대 공간의 걸음

최적성 조건을 풀면 한 걸음이 두 단계로 갈린다.

$$
\nabla\psi(y_{k+1})=\nabla\psi(x_k)-\eta g_k,\qquad x_{k+1}=\mathop{\mathrm{arg\thinspace min}}\_{x\in C}D_\psi(x,y_{k+1})
$$

첫 단계는 점을 $\nabla\psi$ 로 옮긴 곳에서 기울기 걸음을 밟고 $\nabla\psi$ 의 역으로 되옮기는 것이고, 둘째 단계는 $C$ 로의 Bregman 사영이다. 기울기는 일차함수의 계수이므로 원래 공간의 점과 다른 공간에 있다. $\nabla\psi$ 가 두 공간을 오가는 사상이므로 $\psi$ 를 거울 사상이라 부른다. 직관 절에서 $\nabla\psi(p)\_i=1+\log p_i$ 이므로 첫 단계는 $\log p_i$ 에서 $\eta c_i$ 를 빼는 것이고, 둘째 단계는 합으로 나누는 것이다.

# 성질

## 수렴률

$\Vert\cdot\Vert$ 가 $\mathbb R^n$ 의 노름이고 $\Vert g\Vert\_\ast=\sup_{\Vert x\Vert\le 1}\langle g,x\rangle$ 가 그 쌍대 노름(dual norm)이라 하자.

정리. $\psi$ 가 $\Vert\cdot\Vert$ 에 대해 $1$ 강볼록이고, 모든 $k$ 에서 $\Vert g_k\Vert\_\ast\le G$ 이고, $R^2=D_\psi(x^\star,x_1)$ 이라 하자. 보폭을 $\eta=\frac{R}{G}\sqrt{2/K}$ 로 두면 평균 $\bar x_K=\frac1K\sum_{k=1}^Kx_k$ 가 다음을 만족한다[^1].

$$
f(\bar x_K)-f(x^\star)\le RG\sqrt{\frac{2}{K}}
$$

증명의 요지. 한 걸음의 최적성 조건은 다음과 같다.

$$
\langle\eta g_k+\nabla\psi(x_{k+1})-\nabla\psi(x_k),\thinspace x^\star-x_{k+1}\rangle\ge 0
$$

여기에 Bregman divergence 의 세 점 항등식을 쓰면 다음이 나온다.

$$
\eta\langle g_k,x_k-x^\star\rangle\le D_\psi(x^\star,x_k)-D_\psi(x^\star,x_{k+1})+\eta\langle g_k,x_k-x_{k+1}\rangle-D_\psi(x_{k+1},x_k)
$$

강볼록성으로 $D_\psi(x_{k+1},x_k)\ge\frac12\Vert x_{k+1}-x_k\Vert^2$ 이므로 뒤 두 항의 합은 $\frac{\eta^2}{2}\Vert g_k\Vert\_\ast^2$ 이하다. $k=1$ 부터 $K$ 까지 더하면 첫 두 항이 망원합으로 $R^2$ 이하가 되고, 왼쪽은 볼록성으로 $\eta\sum_k(f(x_k)-f(x^\star))$ 이상이다. $\eta$ 를 위처럼 고르면 결론이 나온다.

## 확률 단체에서의 차원 의존

$C$ 가 $n$ 차원 확률 단체이고 $\psi$ 가 음의 엔트로피이면, Pinsker 부등식(Pinsker's inequality) $\mathrm{KL}(p\Vert q)\ge\frac12\Vert p-q\Vert\_1^2$ 으로 $\psi$ 가 $\ell^1$ 노름에 대해 $1$ 강볼록이다. 쌍대 노름은 $\ell^\infty$ 노름이고, 균등한 $x_1$ 에서 시작하면 $R^2\le\log n$ 이다. 그래서 비용의 각 성분이 $G$ 이하이면 오차가 $G\sqrt{2\log n/K}$ 이하다.

같은 문제에 사영 경사법을 쓰면 $\psi=\frac12\Vert x\Vert\_2^2$ 이고 $R\le 1$ 이지만 기울기의 $\ell^2$ 노름이 $G\sqrt n$ 까지 커질 수 있어 한계가 $G\sqrt{2n/K}$ 이다. 차원 $n$ 이 크면 거울 하강법의 한계가 훨씬 작다.

# 활용

- [곱셈 가중치 절차](multiplicative-weights.md). 전문가 $n$ 명의 가중치를 손실의 지수로 줄이는 Hedge 갱신은 확률 단체 위에서 선형 손실에 음의 엔트로피 거울 사상을 쓴 거울 하강법이다. 위의 수렴률 증명이 그대로 후회(regret) $O(\sqrt{T\log n})$ 의 증명이 된다.
- [온라인 볼록 최적화](online-convex-optimization.md). 매 단계 다른 볼록 손실 $f_k$ 가 주어질 때 $g_k$ 를 $f_k$ 의 기울기로 두면, 수렴률 증명의 합이 고정된 비교점에 대한 누적 손실의 차이를 묶는다. 확률 단체에서 음의 엔트로피를 쓰면 이 반복은 follow the regularized leader 와 같은 갱신을 준다.
- [밀도 행렬](density-matrix.md) 위의 최적화. 대각합이 $1$ 인 반정부호 행렬 위에서 von Neumann 엔트로피 $\mathrm{tr}(X\log X)$ 를 거울 사상으로 쓰면 갱신이 행렬 지수함수로 적힌다. [반정부호 계획법](semidefinite-programming.md)의 근사 해법에 쓴다.
- 영합 게임의 근사 균형. 두 사람 영합 게임(zero-sum game)에서 두 사람이 각자 혼합전략의 확률 단체 위에서 거울 하강법을 돌리면 평균 전략이 [Nash 균형](nash-equilibrium.md)의 근사로 간다. 오차가 $\log n$ 에만 의존하므로 전략이 많은 게임에 쓴다.

[^1]: A. Beck and M. Teboulle, *Mirror descent and nonlinear projected subgradient methods for convex optimization*, Operations Research Letters 31(3), 2003, 167–175. 원래의 방법은 A. Nemirovski and D. Yudin, *Problem Complexity and Method Efficiency in Optimization*, Wiley, 1983.

# 연관 문서

## 선수지식

- [경사하강법](gradient-descent.md)
- [Bregman divergence](bregman-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #information_theory
