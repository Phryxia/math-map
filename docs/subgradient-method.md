# 부분기울기법

# 개요

**부분기울기법(subgradient method)** 은 꺾인 볼록 함수를 최소화하려고, 기울기 대신 부분기울기의 반대 방향으로 한 걸음씩 옮기는 방법이다. $\vert x_1\vert+2\vert x_2\vert$ 는 좌표축 위에서 미분이 없어 [경사하강법](gradient-descent.md)의 걸음을 정할 수 없다. 부분기울기법은 그런 점에서 부분기울기 하나를 골라 걸음을 밟고, 걸음이 함숫값을 늘릴 수 있으므로 보폭을 점점 줄이고 지나온 점 가운데 가장 좋은 점을 답으로 삼는다.

# 직관

$f(x)=\vert x_1\vert+2\vert x_2\vert$ 의 최소점은 원점이다. 점 $(1,0)$ 에서 $x_2$ 쪽으로는 꺾여 있어 [부분미분](subdifferential.md)이 $\lbrace 1\rbrace\times\lbrack -2,2\rbrack$ 이다. 부분기울기 $g=(1,2)$ 를 골라 보폭 $0.1$ 로 옮기면 $(0.9,\thinspace -0.2)$ 이고, 함숫값은 $1$ 에서 $0.9+0.4=1.3$ 으로 늘어난다.

함숫값은 늘었지만 원점까지의 거리는 $1$ 에서 $\sqrt{0.85}\approx 0.92$ 로 줄었다. 부분기울기의 정의 부등식 $f(0)\ge f(x)+\langle g,\thinspace 0-x\rangle$ 에서 $\langle g,x\rangle\ge f(x)-f(0)=1\gt 0$ 이므로, $-g$ 방향은 최소점 쪽으로 기운 방향이다. 그래서 보폭이 작으면 거리가 준다.

보폭을 고정하면 최소점 근처에서 멈추지 않는다. $f(x)=\vert x\vert$ 에서 보폭 $0.3$ 으로 $x=1$ 부터 옮기면 $0.7,\thinspace 0.4,\thinspace 0.1,\thinspace -0.2,\thinspace 0.1,\thinspace -0.2,\dots$ 로 $0$ 을 사이에 두고 오가고, 부분기울기의 크기가 $0$ 근처에서도 $1$ 이라 걸음이 줄지 않는다. 보폭을 반복마다 줄이면 오가는 폭도 줄어 최소점에 다가간다. 이렇게 부분기울기 방향으로 줄어드는 보폭의 걸음을 밟는 방법을 부분기울기법이라 부른다.

# 정의

$f:\mathbb R^n\to\mathbb R$ 이 볼록 함수라 하자. **부분기울기법** 은 $x_0$ 에서 시작해 다음을 되풀이한다.

$$
x_{k+1}=x_k-\eta_kg_k,\qquad g_k\in\partial f(x_k)
$$

$\eta_k\gt 0$ 이 보폭이다. 함숫값이 단조로 줄지 않으므로 $f_k^{\mathrm{best}}=\min_{0\le i\le k}f(x_i)$ 를 기록하고, 그 값을 준 점을 답으로 쓴다. 직관 절의 첫 예는 $x_0=(1,0)$ , $g_0=(1,2)$ , $\eta_0=0.1$ 이다. 닫힌 볼록집합 $C$ 위에서 최소화하면 걸음 뒤에 $C$ 로의 사영을 붙이고, 이것을 사영 부분기울기법(projected subgradient method)이라 한다.

# 성질

아래에서 $x^\star$ 는 최소점, $f^\star=f(x^\star)$ 다.

## 거리 부등식

정리. 모든 $k$ 에서 다음이 성립한다.

$$
\Vert x_{k+1}-x^\star\Vert^2\le\Vert x_k-x^\star\Vert^2-2\eta_k\bigl(f(x_k)-f^\star\bigr)+\eta_k^2\Vert g_k\Vert^2
$$

증명의 요지. 왼쪽을 전개하면 $\Vert x_k-x^\star\Vert^2-2\eta_k\langle g_k,\thinspace x_k-x^\star\rangle+\eta_k^2\Vert g_k\Vert^2$ 이고, 부분기울기의 정의로 $\langle g_k,\thinspace x_k-x^\star\rangle\ge f(x_k)-f^\star$ 다. 직관 절의 첫 걸음에서는 $1-0.2+0.05=0.85$ 로 등호가 성립한다. 함숫값 대신 거리가 줄어드는 양을 재는 것이 경사하강법의 분석과 다른 점이다.

## 수렴률

정리. 모든 $k$ 에서 $\Vert g_k\Vert\le G$ 이고 $\Vert x_0-x^\star\Vert\le R$ 이면 다음이 성립한다[^1].

$$
f_K^{\mathrm{best}}-f^\star\le\frac{R^2+G^2\sum_{k=0}^{K}\eta_k^2}{2\sum_{k=0}^{K}\eta_k}
$$

증명의 요지. 거리 부등식을 $k=0$ 부터 $K$ 까지 더하면 거리 항이 망원합이 되고, $f(x_k)-f^\star$ 를 $f_K^{\mathrm{best}}-f^\star$ 로 아래에서 묶으면 나온다.

보폭이 $\sum\eta_k=\infty$ 와 $\sum\eta_k^2\lt\infty$ 를 만족하면, 예를 들어 $\eta_k=1/(k+1)$ 이면 $f_K^{\mathrm{best}}\to f^\star$ 이다. 반복 횟수 $K$ 를 정해 두고 보폭을 $\eta_k=R/(G\sqrt{K+1})$ 로 고정하면 오차가 $RG/\sqrt{K+1}$ 이하다.

## 하한

차원이 반복 횟수보다 크면, 점마다 함숫값과 부분기울기 하나만 받아 쓰는 어떤 방법도 최악의 경우 $K$ 번 뒤의 오차를 $RG/(2(1+\sqrt{K+1}))$ 보다 작게 만들 수 없다[^1]. 그래서 부분기울기법의 $1/\sqrt K$ 률은 상수배를 빼고 개선되지 않는다.

## Polyak 보폭

최솟값 $f^\star$ 를 알면 $\eta_k=\bigl(f(x_k)-f^\star\bigr)/\Vert g_k\Vert^2$ 로 둔다. 이 보폭은 거리 부등식의 오른쪽을 $\eta_k$ 에 대해 최소로 하는 값이고, 그때 $\Vert x_k-x^\star\Vert$ 가 반복마다 줄어든다[^2]. 실현가능성 문제처럼 $f^\star=0$ 임을 아는 경우에 쓴다.

# 활용

- [Lagrange 쌍대성](lagrange-duality.md)의 쌍대 문제. 쌍대함수는 오목하지만 대개 미분가능하지 않고, 승수 $\lambda$ 에서 내부 최소화의 해를 $x_\lambda$ 라 하면 제약 함수의 값 $\bigl(g_1(x_\lambda),\dots,g_m(x_\lambda)\bigr)$ 이 쌍대함수의 부분기울기다. [정수계획법](integer-programming.md)의 Lagrange 완화에서 하한을 올리는 데 부분기울기법을 쓴다.
- [서포트 벡터 머신](support-vector-machine.md). 힌지 손실 $\max(0,\thinspace 1-y\langle w,x\rangle)$ 의 합에 정칙화 항을 더한 목적함수를 표본 하나의 부분기울기로 갱신한다.
- [확률적 경사하강법](stochastic-gradient-descent.md). 부분기울기를 기댓값이 같은 추정량으로 바꾸어도 거리 부등식이 기댓값으로 성립하므로 같은 분석이 적용된다.
- [거울 하강법](mirror-descent.md). 거리의 제곱을 [Bregman divergence](bregman-divergence.md)로 바꾼 부분기울기법이고, 수렴률의 $R$ 과 $G$ 가 집합에 맞춘 노름으로 바뀐다.

[^1]: Y. Nesterov, *Introductory Lectures on Convex Optimization: A Basic Course*, Kluwer, 2004, 3.2 절, 정리 3.2.1 과 정리 3.2.2.
[^2]: B. T. Polyak, *Minimization of unsmooth functionals*, USSR Computational Mathematics and Mathematical Physics 9(3), 1969, 14–29.

# 연관 문서

## 선수지식

- [경사하강법](gradient-descent.md)
- [부분미분](subdifferential.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning
