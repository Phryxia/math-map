# Lagrange 쌍대성

# 개요

**Lagrange 쌍대성(Lagrange duality)** 은 제약이 있는 최적화 문제에 짝이 되는 다른 최적화 문제를 붙여 최적값의 한계를 얻는 방법이다. 직선 $x+y=2$ 위에서 $x^2+y^2$ 을 최소로 하는 문제에서 제약에 수 $\lambda$ 를 곱해 목적함수에 더하고 제약 없이 최소화하면, $\lambda$ 마다 최솟값의 하한 $2\lambda-\lambda^2/2$ 가 나온다. Lagrange 쌍대성은 이런 하한 가운데 가장 큰 것을 찾는 문제를 따로 풀고, 볼록 문제에서는 그 값이 원래 최솟값과 같음을 보인다. 이 예에서는 $\lambda=2$ 에서 두 값이 모두 $2$ 다.

# 직관

평면에서 $x_1+x_2\ge 2$ 를 만족하는 점 가운데 $x_1^2+x_2^2$ 이 가장 작은 점을 찾는다. 제약을 지키는 점만 보아야 하므로, 목적함수를 미분해 $0$ 으로 놓으면 제약을 어기는 $(0,0)$ 이 나온다.

제약을 어긴 정도 $2-x_1-x_2$ 에 수 $\lambda\ge 0$ 을 곱해 목적함수에 더한 $x_1^2+x_2^2+\lambda(2-x_1-x_2)$ 를 제약 없이 최소화한다. 제약을 지키는 점에서는 더한 항이 $0$ 이하이므로, 이 최솟값은 원래 문제의 최솟값보다 크지 않다. 각 좌표로 미분해 $0$ 으로 놓으면 $x=(\lambda/2,\lambda/2)$ 이고, 대입하면 최솟값은 $2\lambda-\lambda^2/2$ 다.

$\lambda=1$ 이면 하한 $1.5$, $\lambda=2$ 이면 하한 $2$ 가 나온다. $2\lambda-\lambda^2/2$ 는 $\lambda=2$ 에서 가장 크고, 그때의 $x=(1,1)$ 은 제약을 지키며 목적함숫값이 $2$ 다. 하한 $2$ 를 실제로 달성하는 점이 있으므로 원래 문제의 최솟값은 $2$ 다. 이렇게 $\lambda$ 마다 하한을 만들고 그 가운데 가장 큰 것을 찾는 것이 Lagrange 쌍대성이다.

# 정의

## Lagrangian 과 쌍대함수

실함수 $f$ , $g_i$ , $h_j$ 에 대한 제약 최적화 문제를 다음 형태로 둔다.

$$
\min_{x}\thinspace f(x)\quad\text{subject to}\quad g_i(x)\le 0\thinspace (i=1,\dots,m),\quad h_j(x)=0\thinspace (j=1,\dots,r)
$$

최적값을 $p$ 로 쓴다. **Lagrangian** 은 승수(multiplier) $\lambda\in\mathbb{R}^m$ 과 $\nu\in\mathbb{R}^r$ 를 제약에 붙인 다음 함수다.

$$
L(x,\lambda,\nu)=f(x)+\sum_{i=1}^{m}\lambda_i g_i(x)+\sum_{j=1}^{r}\nu_j h_j(x)
$$

**쌍대함수(dual function)** 는 Lagrangian 의 $x$ 에 대한 하한이다.

$$
q(\lambda,\nu)=\inf_{x}\thinspace L(x,\lambda,\nu)
$$

**쌍대 문제(dual problem)** 는 쌍대함수를 최대화하는 문제이고 최적값을 $d$ 로 쓴다.

$$
d=\max_{\lambda\ge 0,\thinspace \nu}\thinspace q(\lambda,\nu)
$$

**쌍대성 간극(duality gap)** 은 $p-d$ 다.

직관 절의 문제는 $f(x)=x_1^2+x_2^2$, $g_1(x)=2-x_1-x_2$ 이고 등식 제약이 없다. Lagrangian 은 $L(x,\lambda)=x_1^2+x_2^2+\lambda\thinspace(2-x_1-x_2)$, 쌍대함수는 $q(\lambda)=2\lambda-\lambda^2/2$ 다. 쌍대 문제의 최적 승수는 $\lambda=2$ 이고 $d=2$, $p=2$ 이므로 쌍대성 간극은 $0$ 이다.

## 볼록 문제와 Slater 조건

문제가 **볼록(convex)** 이라는 것은 $f$ 와 모든 $g_i$ 가 [볼록](convexity.md)함수이고 모든 $h_j$ 가 아핀이라는 것이다. **Slater 조건(Slater's condition)** 은 아핀이 아닌 부등식 제약을 전부 강한 부등호로 만족하는 허용해가 있다는 조건이다.

$$
\exists\thinspace \tilde{x}:\quad g_i(\tilde{x})\lt 0\thinspace (\forall i),\quad h_j(\tilde{x})=0\thinspace (\forall j)
$$

직관 절의 문제는 $f$ 가 볼록이고 $g_1$ 이 아핀이므로 볼록 문제다. $g_1$ 은 아핀이라 Slater 조건에서 빠지지만, 강한 부등호로 확인해도 $g_1(2,2)=-2\lt 0$ 이다.

# 성질

## 쌍대함수의 오목성

$q$ 는 $(\lambda,\nu)$ 의 아핀함수들의 점별 하한이므로 $f$ , $g$ , $h$ 의 성질과 무관하게 오목함수다. 정의역도 볼록집합이므로 쌍대 문제는 언제나 볼록 최적화 문제다.

## 약쌍대성

약쌍대성(weak duality)은 다음이다. 임의의 $\lambda\ge 0$ 과 $\nu$ 에 대해 $q(\lambda,\nu)\le p$ 이고, 따라서 $d\le p$ 다[^1].

증명. 허용해 $x$ 에서 $g_i(x)\le 0$ , $\lambda_i\ge 0$ 이므로 $\lambda_i g_i(x)\le0$ 이고 $h_j(x)=0$ 이므로 $\nu$ 항은 사라져 $L(x,\lambda,\nu)\le f(x)$ 다. 좌변을 전체 공간에서 $x$ 에 대해 하한으로 바꾸면 $q(\lambda,\nu)\le f(x)$ 이고, 허용해 전체에서 최소화하면 $q(\lambda,\nu)\le p$ 다.

볼록성을 쓰지 않으므로 비볼록 문제에서도 성립한다. 비볼록 문제에서는 간극이 양수일 수 있다.

## 강쌍대성

강쌍대성(strong duality)은 다음이다. 볼록 문제가 Slater 조건을 만족하면 $p=d$ 이고, $p$ 가 유한하면 쌍대 최적해가 달성된다[^2].

증명의 요지. $(g(x),f(x))$ 꼴의 점들이 만드는 볼록집합과 점 $(0,p)$ 를 분리하는 초평면이 존재한다. Slater 조건은 이 초평면이 수직, 곧 $f$ 좌표의 계수가 $0$ 인 퇴화 형태가 되지 못하게 막는다. 초평면의 법선이 최적 승수다.

[선형계획](linear-programming.md) 문제는 제약이 모두 아핀이므로 Slater 조건 없이 허용해의 존재만으로 강쌍대성을 갖는다.

## KKT 조건

$f$ , $g_i$ , $h_j$ 가 [미분가능](derivative.md)할 때 KKT(Karush–Kuhn–Tucker) 조건은 다음 등식·부등식계다.

$$
\nabla f(x^\star)+\sum_{i=1}^{m}\lambda_i^\star\nabla g_i(x^\star)+\sum_{j=1}^{r}\nu_j^\star\nabla h_j(x^\star)=0
$$

$$
g_i(x^\star)\le 0,\quad h_j(x^\star)=0,\quad \lambda_i^\star\ge 0,\quad \lambda_i^\star g_i(x^\star)=0
$$

첫 식이 정상성(stationarity), 둘째 줄의 네 조건이 차례로 원 문제 허용성(primal feasibility), 쌍대 허용성(dual feasibility), 상보 여유(complementary slackness)다. 직관 절의 문제에서 $x^\star=(1,1)$, $\lambda^\star=2$ 이면 $\nabla f=(2,2)$, $\nabla g_1=(-1,-1)$ 이므로 $(2,2)+2(-1,-1)=0$ 이고, $g_1(x^\star)=0$ 이라 상보 여유도 성립한다.

- 필요성. 강쌍대성이 성립하고 양쪽 최적해가 달성되면, 볼록이 아니어도 최적해는 KKT 조건을 만족한다. 최적 $x^\star$ 는 $L(\cdot,\lambda^\star,\nu^\star)$ 를 최소화하므로 기울기가 $0$ 이고, $p=d$ 에서 $\sum_i\lambda_i^\star g_i(x^\star)=0$ 인데 각 항이 $0$ 이하이므로 모두 $0$ 이다.
- 충분성. 볼록 문제에서 KKT 조건을 만족하는 $(x^\star,\lambda^\star,\nu^\star)$ 는 원 문제와 쌍대 문제의 최적해 쌍이고 간극이 $0$ 이다. $L(\cdot,\lambda^\star,\nu^\star)$ 가 볼록함수이므로 정상성이 전역 최소를 뜻하고, 상보 여유로 쌍대 값이 목적값과 같아진다.

Slater 조건을 만족하는 미분가능 볼록 문제에서 KKT 조건은 최적성의 필요충분조건이다[^2]. 비볼록 문제에서는 KKT 점이 최적해가 아닐 수 있고, LICQ(linear independence constraint qualification)나 MFCQ(Mangasarian–Fromovitz constraint qualification) 같은 정칙성 조건이 없으면 최적해가 KKT 조건을 만족하지 않을 수 있다.

# 활용

- 쌍대 문제가 원 문제보다 변수가 적거나 구조가 좋으면 쌍대 문제를 풀어 원 문제의 해를 복원한다. [서포트 벡터 머신](support-vector-machine.md)의 커널(kernel) 형태가 그 예다.
- 부등식 제약 아래의 해를 손으로 구할 때 KKT 조건을 푼다. 통신 전력배분의 물 채우기(water-filling) 해는 상보 여유에서 나온다.
- 쌍대함수는 임의의 승수에서 하한이므로 최소화 문제의 [정수계획법](integer-programming.md)에서 분기한정법의 하한을 만든다.
- [경사하강법](gradient-descent.md)으로 쌍대 문제를 올리는 쌍대 상승법(dual ascent)과 증강 Lagrangian(augmented Lagrangian), ADMM(alternating direction method of multipliers) 계열 알고리즘의 기본 구조다.
- [Shannon 엔트로피](entropy.md)를 최대화하는 최대엔트로피 추정(maximum entropy estimation)에서 [지수족](exponential-families.md) 분포가 KKT 조건의 해로 나온다.

[^1]: S. Boyd and L. Vandenberghe, Convex Optimization, Chapter 5 (Duality) 강의 슬라이드. https://web.mit.edu/~jadbabai/www/EE605/lectures/duality.pdf
[^2]: Slater's condition, Wikipedia. https://en.wikipedia.org/wiki/Slater%27s_condition

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [Lagrange 승수법](lagrange-multipliers.md)

## 더 알아보기

- [내점법](interior-point-method.md)
- [서포트 벡터 머신](support-vector-machine.md)
- [최적 수송](optimal-transport.md)

#optimization #analysis
