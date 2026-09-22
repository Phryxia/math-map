# Lagrange 쌍대성

# 개요

Lagrange 쌍대성은 제약 최적화 문제를 제약 없는 문제의 족으로 바꾸는 방법이다. 각 제약에 승수를 곱해 목적함수에 더한 Lagrangian 을 변수에 대해 최소화하면 원 문제 최적값의 하한을 주는 쌍대함수가 나온다. 가장 큰 하한을 찾는 쌍대 문제는 원 문제가 볼록하지 않아도 볼록 문제다.

[볼록](convexity.md) 문제가 Slater 조건을 만족하면 원 문제와 쌍대 문제의 최적값이 같다. 함수가 [미분가능](derivative.md)하면 최적성이 **KKT**(Karush–Kuhn–Tucker) 조건이라는 유한한 등식·부등식계로 특징지어진다. [선형계획법](linear-programming.md)의 쌍대성을 일반 볼록 문제로 넓힌 것이다.

# 직관

제약을 위반하면 승수를 단가로 벌금을 매긴다고 두면, 허용해에서는 벌금이 $0$ 이하이므로 Lagrangian 의 최솟값이 원 문제의 최적값을 넘지 못한다. 그래서 어떤 승수든 하한을 주고, 승수를 조절하면 하한이 올라간다. 볼록성과 Slater 조건 아래에서는 하한이 최적값까지 올라가고, 최적 승수는 제약을 한 단위 완화했을 때 최적값이 개선되는 비율이다.

KKT 조건은 최적점에서 목적함수의 기울기가 활성 제약의 기울기들이 만드는 원뿔 안에 있다는 조건이다. 원뿔 밖에 있으면 모든 제약을 지키면서 목적함수를 줄이는 방향이 남는다.

# 정의

## Lagrangian 과 쌍대함수

실함수 $f$ , $g_i$ , $h_j$ 에 대한 제약 최적화 문제를 다음 형태로 둔다.

$$
\min_{x}\ f(x)\quad\text{subject to}\quad g_i(x)\le 0\ (i=1,\dots,m),\quad h_j(x)=0\ (j=1,\dots,r)
$$

최적값을 $p$ 로 쓴다. **Lagrangian** 은 승수 $\lambda\in\mathbb{R}^m$ 과 $\nu\in\mathbb{R}^r$ 를 제약에 붙인 함수다.

$$
L(x,\lambda,\nu)=f(x)+\sum_{i=1}^{m}\lambda_i g_i(x)+\sum_{j=1}^{r}\nu_j h_j(x)
$$

**쌍대함수**는 Lagrangian 의 $x$ 에 대한 하한이다.

$$
q(\lambda,\nu)=\inf_{x}\ L(x,\lambda,\nu)
$$

**쌍대 문제**는 쌍대함수를 최대화하는 문제이고 최적값을 $d$ 로 쓴다.

$$
d=\max_{\lambda\ge 0,\ \nu}\ q(\lambda,\nu)
$$

$p-d$ 가 **쌍대성 간극**이다.

## 볼록 문제와 Slater 조건

문제가 **볼록**인 것은 $f$ 와 모든 $g_i$ 가 볼록함수이고 모든 $h_j$ 가 아핀인 것이다. **Slater 조건**은 아핀이 아닌 부등식 제약을 전부 강한 부등호로 만족하는 허용해가 있다는 조건이다.

$$
\exists\thinspace \tilde{x}:\quad g_i(\tilde{x})\lt 0\ (\forall i),\quad h_j(\tilde{x})=0\ (\forall j)
$$

# 성질

## 쌍대함수의 오목성

$q$ 는 $(\lambda,\nu)$ 의 아핀함수들의 점별 하한이므로 $f$ , $g$ , $h$ 의 성질과 무관하게 오목함수다. 정의역도 볼록집합이므로 쌍대 문제는 언제나 볼록 최적화 문제다.

## 약쌍대성

임의의 $\lambda\ge 0$ 과 $\nu$ 에 대해 $q(\lambda,\nu)\le p$ 이고, 따라서 $d\le p$ 다.[^1]

*증명.* 허용해 $x$ 에서 $g_i(x)\le 0$ , $\lambda_i\ge 0$ 이므로 $\lambda_i g_i(x)\le0$ 이고 $h_j(x)=0$ 이므로 $\nu$ 항은 사라져 $L(x,\lambda,\nu)\le f(x)$ 다. 좌변을 전체 공간에서 $x$ 에 대해 하한으로 바꾸면 $q(\lambda,\nu)\le f(x)$ 이고, 허용해 전체에서 최소화하면 $q(\lambda,\nu)\le p$ 다.

볼록성을 쓰지 않으므로 비볼록 문제에서도 성립한다. 비볼록 문제에서는 간극이 양수일 수 있다.

## 강쌍대성

볼록 문제가 Slater 조건을 만족하면 $p=d$ 이고, $p$ 가 유한하면 쌍대 최적해가 달성된다.[^2]

*증명의 요지.* $(g(x),f(x))$ 꼴의 점들이 만드는 볼록집합과 점 $(0,p)$ 를 분리하는 초평면이 존재한다. Slater 조건은 이 초평면이 수직, 곧 $f$ 좌표의 계수가 $0$ 인 퇴화 형태가 되지 못하게 막는다. 초평면의 법선이 최적 승수다. 선형계획 문제는 제약이 모두 아핀이므로 허용해의 존재만으로 강쌍대성을 갖는다.

## KKT 조건

$f$ , $g_i$ , $h_j$ 가 미분가능할 때 **KKT 조건**은 다음 등식·부등식계다.

$$
\nabla f(x^\star)+\sum_{i=1}^{m}\lambda_i^\star\nabla g_i(x^\star)+\sum_{j=1}^{r}\nu_j^\star\nabla h_j(x^\star)=0
$$

$$
g_i(x^\star)\le 0,\quad h_j(x^\star)=0,\quad \lambda_i^\star\ge 0,\quad \lambda_i^\star g_i(x^\star)=0
$$

첫 식이 정상성, 둘째 줄의 네 조건이 차례로 원 문제 허용성, 쌍대 허용성, 상보 여유다.

- 필요성. 강쌍대성이 성립하고 양쪽 최적해가 달성되면, 볼록이 아니어도 최적해는 KKT 조건을 만족한다. 최적 $x^\star$ 는 $L(\cdot,\lambda^\star,\nu^\star)$ 를 최소화하므로 기울기가 $0$ 이고, $p=d$ 에서 $\sum_i\lambda_i^\star g_i(x^\star)=0$ 인데 각 항이 $0$ 이하이므로 모두 $0$ 이다.
- 충분성. 볼록 문제에서 KKT 조건을 만족하는 $(x^\star,\lambda^\star,\nu^\star)$ 는 원 문제와 쌍대 문제의 최적해 쌍이고 간극이 $0$ 이다. $L(\cdot,\lambda^\star,\nu^\star)$ 가 볼록함수이므로 정상성이 전역 최소를 뜻하고, 상보 여유로 쌍대 값이 목적값과 같아진다.

Slater 조건을 만족하는 미분가능 볼록 문제에서 KKT 조건은 최적성의 필요충분조건이다.[^2] 비볼록 문제에서는 KKT 점이 최적해가 아닐 수 있고, LICQ(linear independence constraint qualification)나 MFCQ(Mangasarian–Fromovitz constraint qualification) 같은 정칙성 조건이 없으면 최적해가 KKT 조건을 만족하지 않을 수 있다.

# 활용

## 이차 목적함수의 쌍대함수

$$
\min\ x_1^2+x_2^2\quad\text{subject to}\quad 2-x_1-x_2\le 0
$$

Lagrangian 은 $L(x,\lambda)=x_1^2+x_2^2+\lambda\thinspace(2-x_1-x_2)$ 다. 정상성에서 $x=(\lambda/2,\lambda/2)$ 이고, 대입하면 쌍대함수는 다음이다.

$$
q(\lambda)=2\lambda-\frac{\lambda^2}{2}
$$

$\lambda\ge 0$ 에서 최대화하면 최적 승수는 $2$ , $d=2$ 다. 승수가 양수이므로 상보 여유에 따라 제약이 등식으로 성립하고, 최적해는 $(1,1)$ , $p=2$ 로 간극이 $0$ 이다. $(2,2)$ 가 Slater 조건의 허용해다.

## 쌍대 문제 풀이와 KKT 조건

- 쌍대 문제가 원 문제보다 변수가 적거나 구조가 좋으면 쌍대 문제를 풀어 원 문제의 해를 복원한다. support vector machine 의 kernel 형태가 그 예다.
- 부등식 제약 아래의 해를 손으로 구할 때 KKT 조건을 푼다. 통신 전력배분의 water-filling 해는 상보 여유에서 나온다.
- 쌍대함수는 임의의 승수에서 하한이므로 정수계획법의 분기한정법에서 하한을 만든다.
- [경사하강법](gradient-descent.md)으로 쌍대 문제를 올리는 dual ascent 와 augmented Lagrangian, ADMM(alternating direction method of multipliers) 계열 알고리즘의 기본 구조다.
- [Shannon 엔트로피](entropy.md)를 최대화하는 최대엔트로피 추정에서 지수족 분포가 KKT 조건의 해로 나온다.

[^1]: S. Boyd and L. Vandenberghe, Convex Optimization, Chapter 5 (Duality) 강의 슬라이드. https://web.mit.edu/~jadbabai/www/EE605/lectures/duality.pdf
[^2]: Slater's condition, Wikipedia. https://en.wikipedia.org/wiki/Slater%27s_condition

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [미분](derivative.md)

## 더 알아보기

- [최적 수송과 Wasserstein 거리](optimal-transport.md)

#optimization #analysis
