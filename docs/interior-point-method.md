# 내점법

# 개요

내점법은 부등식 제약을 만족하는 영역의 내부를 지나며 최적해로 가는 방법이다. 제약을 경계에서 발산하는 장벽함수로 바꿔 목적함수에 더하고, 장벽의 가중치를 줄이면서 각 가중치에서 Newton 법으로 푼다.

[선형계획법](linear-programming.md)과 반정부호 계획을 입력 크기와 $\log(1/\varepsilon)$ 의 다항식 시간에 푼다. 단체법과 달리 꼭짓점을 방문하지 않으므로 다면체가 아닌 볼록 영역에도 그대로 쓴다.

# 직관

선형계획 $\min c^{\mathsf T}x$ ($Ax=b$, $x\ge 0$) 의 최적해는 다면체의 꼭짓점에 있다. 꼭짓점을 밟지 않고 내부에서 바로 내려가려면 경사 방향 $-c$ 를 따라가는데, $x_i=0$ 인 면이 가까우면 걸음 길이를 그 면에 닿지 않을 만큼 줄여야 한다. 한 면에 바짝 붙은 뒤에는 다음 걸음이 더 짧아지고, 면을 따라 기어가는 동안 걸음 수가 쌓인다.

목적함수가 면의 위치를 모르는 것이 막힌 이유다. 그러므로 면에 가까워지면 값이 커지는 항을 목적함수에 더한다. $x_i\to 0$ 에서 $-\log x_i$ 가 $+\infty$ 로 가므로

$$
t\thinspace c^{\mathsf T}x-\sum_{i=1}^n\log x_i
$$

의 최소점은 제약을 쓰지 않아도 반드시 내부에 있고, 등식 제약만 남아 Newton 법으로 풀린다. $t$ 를 키우면 첫 항이 커져 최소점이 참 최적해로 다가간다. 경계가 보이지 않는 영역 안쪽을 따라 최적해로 가는 이 자취가 중심 경로다.

# 정의

## 로그 장벽

볼록 문제

$$
\min f_0(x)\quad \text{subject to}\quad f_i(x)\le 0\thinspace (i=1,\dots,m),\thinspace Ax=b
$$

에서 각 $f_i$ 가 볼록이라 하자. **로그 장벽**은 실행가능 영역의 내부에서 정의된 함수다.

$$
\phi(x)=-\sum_{i=1}^m\log\bigl(-f_i(x)\bigr)
$$

$f_i(x)\to 0^-$ 이면 $\phi(x)\to+\infty$ 이므로 $\phi$ 는 경계에서 발산한다.

## 중심 경로

$t\gt 0$ 마다 다음 문제의 최소점을 $x^\ast(t)$ 라 한다.

$$
\min\thinspace t\thinspace f_0(x)+\phi(x)\quad \text{subject to}\quad Ax=b
$$

$t$ 가 움직일 때 $x^\ast(t)$ 가 그리는 곡선이 **중심 경로**다.

## 장벽법

$t$ 를 $t_0$ 에서 시작해 $\mu\gt 1$ 배로 늘리고, 각 $t$ 에서 직전 해를 초깃값으로 Newton 법을 돌린다. 쌍대 간격이 $\varepsilon$ 아래로 내려가면 멈춘다.

# 성질

## 쌍대 간격의 한계

**정리.** $p^\ast$ 를 최적값이라 하면 중심 경로의 점에서 다음이 성립한다[^1].

$$
f_0\bigl(x^\ast(t)\bigr)-p^\ast\le\frac{m}{t}
$$

증명의 요지. $x^\ast(t)$ 의 정류 조건에

$$
\lambda_i=-\frac{1}{t\thinspace f_i(x^\ast(t))}\gt 0
$$

을 대입하면 $\lambda$ 가 [Lagrange 쌍대](lagrange-duality.md) 문제의 실행가능점이 되고, 쌍대 함수의 값이 $f_0(x^\ast(t))-m/t$ 로 계산된다. 약쌍대성으로 그 값이 $p^\ast$ 이하다.

부등식이 $m$ 개뿐이므로 간격이 $t$ 에 반비례해 줄어든다. 정확도 $\varepsilon$ 에는 $t=m/\varepsilon$ 이면 충분하다.

## 반복 횟수

바깥 반복은 $t$ 를 $\mu$ 배로 늘리므로 $\lceil\log(m/(t_0\varepsilon))/\log\mu\rceil$ 번이다. 각 바깥 반복의 Newton 단계 수가 상수로 묶이는지가 문제인데, 장벽이 자기일치(self-concordant)이면 묶인다.

**정리 (Nesterov–Nemirovskii).** 자기일치 장벽을 쓰고 $\mu=1+\Theta(1/\sqrt m)$ 로 잡으면 전체 Newton 단계 수가 $O\bigl(\sqrt m\thinspace\log(m/(t_0\varepsilon))\bigr)$ 이다[^2].

선형계획의 로그 장벽과 반정부호 계획의 $-\log\det X$ 가 자기일치다. 한 Newton 단계는 선형계 하나를 푸는 비용이다.

## 원시-쌍대 형태

구현에서는 $x$ 와 쌍대변수 $\lambda$ 를 함께 갱신한다. 선형계획의 KKT(Karush–Kuhn–Tucker) 조건 가운데 상보성 $x_is_i=0$ 을 $x_is_i=1/t$ 로 완화한 연립방정식에 Newton 법을 적용하는 형태이고, 원시와 쌍대의 실행가능성을 동시에 좁혀 장벽법보다 적은 반복으로 끝난다.

## 단체법과의 차이

단체법은 꼭짓점을 옮겨 다니며 정확한 유리수 해를 내지만 반복 횟수의 다항 상한이 알려져 있지 않다. 내점법은 반복 횟수에 다항 상한이 있으나 근사해를 내므로, 선형계획에서 정확한 꼭짓점이 필요하면 마지막에 교차 단계를 붙인다.

# 활용

- **대규모 선형계획.** Karmarkar 의 1984 년 방법이 선형계획의 다항시간 해법을 내점법으로 처음 제시했다. 제약행렬이 희소하면 한 Newton 단계의 선형계를 희소 분해로 풀어 단체법보다 빠르다.
- **반정부호 계획.** 양의 준정부호 뿔은 꼭짓점이 유한하지 않아 단체법이 통하지 않고, $-\log\det X$ 장벽을 쓴 내점법이 표준 해법이다([반정부호 계획법](semidefinite-programming.md)).
- **일반 볼록 제약 문제.** 이차 원뿔 제약과 지수 원뿔 제약에 자기일치 장벽이 알려져 있어, [볼록성](convexity.md)만 확인되면 같은 틀로 푼다.
- **제약 있는 기계학습.** 지지벡터기계의 쌍대 문제처럼 변수 수가 적고 제약이 많은 이차 계획에서 쓰인다.

[^1]: Stephen Boyd, Lieven Vandenberghe, *Convex Optimization*, Cambridge University Press, 2004, 11 장. 로그 장벽, 중심 경로, 쌍대 간격 $m/t$ 의 증명과 원시-쌍대 방법. https://web.stanford.edu/~boyd/cvxbook/
[^2]: Yurii Nesterov, Arkadii Nemirovskii, *Interior-Point Polynomial Algorithms in Convex Programming*, SIAM, 1994. 자기일치 장벽의 정의와 $O(\sqrt m\thinspace\log(1/\varepsilon))$ 반복 한계.

# 연관 문서

## 선수지식

- [선형계획법](linear-programming.md)
- [Lagrange 쌍대성](lagrange-duality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #linear_algebra
