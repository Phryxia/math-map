# Lagrange 쌍대성과 KKT 조건

# 개요

Lagrange 쌍대성은 제약 최적화 문제를 제약 없는 문제의 족으로 바꿔 보는 방법이다. 각 제약에 승수(multiplier)를 곱해 목적함수에 더한 Lagrangian을 만들고, 변수에 대해 최소화하면 원 문제 최적값의 하한을 주는 함수(dual function)가 나온다. 가장 좋은 하한을 찾는 문제가 dual problem이며, 이것은 원 문제가 볼록하지 않아도 항상 볼록(concave 함수의 최대화)이다. 볼록 문제에서 Slater 조건 같은 정칙성이 성립하면 두 최적값이 일치하고(강쌍대성), 미분가능한 경우 최적성은 KKT 조건이라는 유한한 등식·부등식계로 완전히 특징지어진다. 이는 [선형계획법](linear-programming.md)의 duality를 일반 볼록 문제로 확장한 것이다.

# 직관

제약을 "위반하면 벌금을 내는 것"으로 바꿔 생각한다. 승수는 벌금 단가다. 단가를 아무렇게 정해도, 실행가능한 점은 벌금이 0 이하이므로 Lagrangian의 최솟값은 원 문제 최적값을 넘지 못한다. 그래서 임의의 승수는 하한을 주고, 벌금 단가를 잘 조절하면 하한이 올라간다. 볼록성과 정칙성이 있으면 정확히 최적값까지 올라가고, 최적 단가는 제약을 한 단위 완화했을 때의 최적값 개선률(shadow price)로 해석된다.

KKT 조건은 최적점에서 목적함수의 기울기가 "활성 제약들의 기울기가 만드는 원뿔" 안에 있다는 기하적 서술이다. 그렇지 않다면 모든 제약을 지키면서 목적함수를 줄이는 방향이 남아 있다.

# 정의

$n$ 차원 변수 $x$ 에 대한 문제를 다음 형태로 둔다. $f$ , $g_i$ , $h_j$ 는 실함수다.

$$
\min_{x}\ f(x)\quad\text{subject to}\quad g_i(x)\le 0\ (i=1,\dots,m),\quad h_j(x)=0\ (j=1,\dots,r)
$$

이 문제의 최적값을 $p$ 로 쓴다. Lagrangian은 승수 $\lambda$ (부등식용, $m$ 차원)와 $\nu$ (등식용, $r$ 차원)를 붙인 함수다.

$$
L(x,\lambda,\nu)=f(x)+\sum_{i=1}^{m}\lambda_i g_i(x)+\sum_{j=1}^{r}\nu_j h_j(x)
$$

dual function은 $x$ 에 대한 하한이다.

$$
q(\lambda,\nu)=\inf_{x}\ L(x,\lambda,\nu)
$$

dual problem은 이 하한을 최대화한다. 최적값을 $d$ 로 쓴다.

$$
d=\max_{\lambda\ge 0,\ \nu}\ q(\lambda,\nu)
$$

문제가 볼록이라는 것은 $f$ 와 모든 $g_i$ 가 [볼록](convexity.md)이고 $h_j$ 가 affine이라는 뜻이다. Slater 조건은 강실행가능점이 존재한다는 조건이다. 즉 어떤 $x$ 가 있어 affine이 아닌 모든 부등식 제약을 강한 부등호로 만족한다.

$$
\exists\thinspace \tilde{x}:\quad g_i(\tilde{x})<0\ (\forall i),\quad h_j(\tilde{x})=0\ (\forall j)
$$

# 성질

## dual function은 항상 concave

$q$ 는 각 $(\lambda,\nu)$ 에 대해 affine 함수들의 pointwise infimum이다. affine 함수족의 하한은 concave이므로 $q$ 는 $f$ , $g$ , $h$ 의 성질과 무관하게 concave이고 정의역도 볼록이다. 따라서 dual problem은 언제나 볼록 최적화 문제다.

## 약쌍대성

임의의 $\lambda\ge 0$ 과 임의의 $\nu$ 에 대해 다음이 성립하고, 따라서 $d\le p$ 다.

$$
q(\lambda,\nu)\le p
$$

증명: $x$ 가 실행가능하면 $g_i(x)\le 0$ , $\lambda_i\ge 0$ 이므로 각 항 $\lambda_i g_i(x)$ 는 $0$ 이하이고 $h_j(x)=0$ 이므로 $\nu$ 항은 사라진다. 따라서 $L(x,\lambda,\nu)\le f(x)$ 이다. 좌변을 $x$ 에 대해 전체 공간에서 inf로 바꾸면 더 작아지므로 $q(\lambda,\nu)\le f(x)$ 이고, 실행가능한 $x$ 전체에 대해 최소화하면 $q(\lambda,\nu)\le p$ 다[^1]. 이 부등식은 볼록성을 전혀 쓰지 않으므로 비볼록 문제에서도 유효하며, Lagrangian relaxation으로 하한을 얻는 근거가 된다.

$p-d$ 를 duality gap이라 한다. 비볼록 문제에서는 gap이 양수일 수 있다.

## 강쌍대성과 Slater 조건

볼록 문제가 Slater 조건을 만족하면 $p=d$ 이고, $p$ 가 유한하면 dual 최적해가 달성된다[^2]. 증명 개요는 값 함수(perturbation function)의 subgradient 존재, 또는 $(g(x),f(x))$ 꼴의 점들이 만드는 볼록집합과 점 $(0,p)$ 를 분리하는 초평면의 존재에서 나온다. Slater 조건은 그 분리 초평면이 수직(즉 $f$ 좌표의 계수가 $0$ 인 퇴화 형태)이 되지 않도록 막는 역할을 한다. LP는 부등식이 모두 affine이므로 실행가능성만으로 강쌍대성을 갖는다.

## KKT 조건

$f$ , $g_i$ , $h_j$ 가 [미분가능](derivative.md)할 때, 다음을 KKT 조건이라 한다.

$$
\nabla f(x^\star)+\sum_{i=1}^{m}\lambda_i^\star\nabla g_i(x^\star)+\sum_{j=1}^{r}\nu_j^\star\nabla h_j(x^\star)=0
$$

$$
g_i(x^\star)\le 0,\quad h_j(x^\star)=0,\quad \lambda_i^\star\ge 0,\quad \lambda_i^\star g_i(x^\star)=0
$$

네 종류의 조건은 차례로 stationarity, primal feasibility, dual feasibility, 상보 여유(complementary slackness)다. 두 방향의 결과를 구분해야 한다.

- 필요성: 강쌍대성이 성립하고 primal·dual 최적해가 달성되면, 볼록이 아니어도 미분가능한 문제의 최적해는 KKT 조건을 만족한다. 실제로 최적 $x$ 는 $L(\cdot,\lambda,\nu)$ 를 최소화하므로 기울기가 $0$ 이고, 목적값과 dual 값이 같다는 등식에서 $\lambda_i g_i$ 의 합이 $0$ 이며 각 항이 $0$ 이하이므로 모두 $0$ 이다.
- 충분성: 문제가 볼록이면 KKT 조건을 만족하는 조합은 곧 primal·dual 최적해 쌍이고 gap이 $0$ 이다. 볼록성으로 $L(\cdot,\lambda,\nu)$ 가 볼록이므로 stationarity가 전역 최소를 뜻하고, 상보 여유로 dual 값이 목적값과 같아진다.

따라서 Slater 조건을 만족하는 미분가능 볼록 문제에서 KKT 조건은 최적성의 필요충분조건이다[^2]. 비볼록 문제에서는 KKT 점이 최적해가 아닐 수 있고, 정칙성 조건(LICQ, MFCQ 등)이 없으면 최적해가 KKT 조건을 만족하지 않을 수도 있다.

# 활용

## 예제

$$
\min\ x_1^2+x_2^2\quad\text{s.t.}\quad 2-x_1-x_2\le 0
$$

Lagrangian은 다음과 같다.

$$
L(x,\lambda)=x_1^2+x_2^2+\lambda\thinspace(2-x_1-x_2)
$$

stationarity에서 $2x_1=\lambda$ , $2x_2=\lambda$ 이므로 $x=(\lambda/2,\lambda/2)$ 를 대입하면 dual function을 얻는다.

$$
q(\lambda)=2\lambda-\frac{\lambda^2}{2}
$$

$\lambda\ge 0$ 에서 최대화하면 최적 승수는 $2$ , $d=2$ 다. 상보 여유는 승수가 양수일 때 제약이 tight함을 요구하므로 최적해는 $(1,1)$ 이고 $p=2$ 가 되어 gap이 $0$ 이다. Slater 조건은 예컨대 $(2,2)$ 로 확인된다.

## 쓰임

- dual 문제가 primal보다 변수 수가 적거나 구조가 좋으면 dual을 풀어 primal을 복원한다. support vector machine의 kernel 형태가 대표적이다.
- 부등식 제약 하의 해를 손으로 구할 때 KKT 조건이 표준 도구다. 예를 들어 통신 전력배분의 water-filling 해는 상보 여유를 풀어서 얻는다.
- dual function은 임의의 승수에서 하한이므로, 정수계획 등 어려운 문제의 분기한정법에서 하한 생성기로 쓰인다.
- [경사하강법](gradient-descent.md)과 결합해 dual 문제를 1차 방법으로 올리는 dual ascent, 그리고 augmented Lagrangian·ADMM 계열 알고리즘의 뼈대가 된다.
- 최대엔트로피 추정처럼 [Shannon entropy](entropy.md)를 목적함수로 쓰는 문제에서도 승수는 물리적 단위를 갖는 가격으로 해석되며, 지수족 분포가 KKT 조건의 해로 나온다.

[^1]: S. Boyd and L. Vandenberghe, Convex Optimization, Chapter 5 (Duality) 강의 슬라이드. https://web.mit.edu/~jadbabai/www/EE605/lectures/duality.pdf
[^2]: Slater's condition, Wikipedia. https://en.wikipedia.org/wiki/Slater%27s_condition

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [미분](derivative.md)

## 더 알아보기

- [최적 수송과 Wasserstein 거리](optimal-transport.md)

#optimization
