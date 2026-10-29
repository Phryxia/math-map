# Lagrange 승수법

# 개요

**Lagrange 승수법(method of Lagrange multipliers)** 은 등식 제약 위에서 함수의 최댓값과 최솟값이 나올 수 있는 점을 찾는 방법이다. 단위원 $x^2+y^2=1$ 위에서 $x+y$ 가 가장 큰 점을 찾으려면, 원의 식을 $y$ 에 대해 풀어 대입해야 하는데 풀린 식이 위아래 반원 둘로 갈리고 $(\pm1,0)$ 에서는 풀리지 않는다. Lagrange 승수법은 제약을 풀지 않고, 최적점에서 목적함수의 기울기가 제약함수의 기울기의 상수배라는 방정식을 세워 후보를 구한다.

# 직관

단위원 위에서 $f(x,y)=x+y$ 를 최대로 하려고 한다. 원의 식을 풀면 $y=\pm\sqrt{1-x^2}$ 이고, 위쪽 반원에서 $x+\sqrt{1-x^2}$ 을 [미분](derivative.md)해 $0$ 으로 두면 $1-x/\sqrt{1-x^2}=0$, 곧 $x=1/\sqrt2$ 다. 아래쪽 반원은 따로 계산해야 하고, $x=\pm1$ 에서는 $y$ 의 미분이 정의되지 않아 끝점을 또 따로 봐야 한다. 제약이 더 복잡하면 대입할 식부터 구할 수 없다.

막힌 이유는 제약을 한 변수에 대해 풀어야 했다는 것이다. 풀지 않고 최대점의 조건만 본다. 최대점에서 원을 따라 조금 움직이면 $f$ 의 값은 일차까지 변하지 않아야 하므로, 원의 접선 방향은 $f$ 의 기울기 $(1,1)$ 과 수직이다. 원의 접선은 $g(x,y)=x^2+y^2$ 의 기울기 $(2x,2y)$ 와도 수직이므로, 평면에서 두 기울기는 평행하다.

그러면 $(1,1)=\lambda(2x,2y)$ 를 만족하는 수 $\lambda$ 가 있다. $x=y=1/(2\lambda)$ 이고 $x^2+y^2=1$ 에 넣으면 $x=y=\pm1/\sqrt2$ 다. 두 후보에서 $f$ 의 값은 $\pm\sqrt2$ 이므로 최댓값은 $\sqrt2$, 최솟값은 $-\sqrt2$ 다. 반원을 나누지도 끝점을 따로 보지도 않았다. 이때의 $\lambda$ 를 승수라 부른다.

# 정의

## 정칙점

열린집합 $U\subseteq\mathbb R^n$ 위의 연속미분가능한 함수 $g_1,\dots,g_k$ 로 제약집합 $M=\lbrace x\in U\mid g_1(x)=\cdots=g_k(x)=0\rbrace$ 을 둔다. $a\in M$ 에서 기울기 $\nabla g_1(a),\dots,\nabla g_k(a)$ 가 일차독립이면 $a$ 를 $M$ 의 **정칙점(regular point)** 이라 한다. Jacobi 행렬 $Dg(a)$ 의 계수가 $k$ 라는 조건과 같다.

## Lagrangian

$f\colon U\to\mathbb R$ 과 제약 $g=(g_1,\dots,g_k)$ 에 대해 다음 함수를 **Lagrangian** 이라 한다.

$$
L(x,\lambda)=f(x)-\sum_{i=1}^{k}\lambda_ig_i(x),\qquad \lambda=(\lambda_1,\dots,\lambda_k)\in\mathbb R^k
$$

$\lambda_i$ 를 **Lagrange 승수(Lagrange multiplier)** 라 한다. $\nabla_xL=0$ 은 $\nabla f=\sum\lambda_i\nabla g_i$ 이고 $\nabla_\lambda L=0$ 은 제약 $g=0$ 이다. Lagrange 승수법은 $n+k$ 개 미지수의 방정식 $\nabla L(x,\lambda)=0$ 을 풀어 극값 후보를 구하는 방법이다.

# 성질

## Lagrange 승수 정리

**정리.** $f$, $g_1,\dots,g_k$ 가 연속미분가능하고 $a$ 가 $M$ 의 정칙점이며 $f$ 를 $M$ 으로 제한한 함수가 $a$ 에서 극값을 가지면, 다음을 만족하는 $\lambda\in\mathbb R^k$ 가 유일하게 존재한다.

$$
\nabla f(a)=\sum_{i=1}^{k}\lambda_i\nabla g_i(a)
$$

증명의 요지. 좌표를 $(u,v)\in\mathbb R^{n-k}\times\mathbb R^k$ 로 나누어 $D_vg(a)$ 가 가역이 되게 한다. 정칙점이므로 가능하다. [역함수 정리](inverse-function-theorem.md)의 음함수 정리로 $a$ 근처의 $M$ 은 그래프 $v=h(u)$ 이고 $Dh=-(D_vg)^{-1}D_ug$ 다. $u\mapsto f(u,h(u))$ 가 극값을 가지므로 $D_uf+D_vf\thinspace Dh=0$ 이다. $\lambda^{\top}=D_vf\thinspace(D_vg)^{-1}$ 로 두면 $D_vf=\lambda^{\top}D_vg$ 이고, 앞의 식에서 $D_uf=\lambda^{\top}D_ug$ 가 나온다. 유일성은 $\nabla g_i(a)$ 의 일차독립에서 나온다.

## 정칙 조건이 없는 경우

곡선 $y^2=x^3$ 위에서 $f(x,y)=x$ 의 최솟값은 원점에서 나온다. 곡선 위에서 $x=y^{2/3}\ge0$ 이기 때문이다. $g=y^2-x^3$ 의 기울기는 원점에서 $(0,0)$ 이므로 원점은 정칙점이 아니고, $\nabla f=(1,0)$ 은 $(0,0)$ 의 상수배가 아니다. 그래서 $\nabla L=0$ 의 해만 보면 이 최솟값을 놓친다. 정칙점이 아닌 점은 승수 방정식과 별도로 후보에 넣는다.

## 이계 조건

$(a,\lambda)$ 가 $\nabla L=0$ 의 해라 하자. $x$ 에 대한 Lagrangian 의 [Hessian 행렬](hessian.md) $D_x^2L(a,\lambda)$ 이 접공간 $T=\lbrace w\mid Dg(a)w=0\rbrace$ 위에서 양의 정부호이면 $a$ 는 $M$ 위에서 $f$ 의 순 극소점이고, 음의 정부호이면 순 극대점이다. $T$ 밖에서의 부호는 판정에 쓰지 않는다. 직관 절의 예에서 $D_x^2L=-2\lambda I$ 이고 $\lambda=1/\sqrt2$ 에서 음의 정부호이므로 $(1/\sqrt2,1/\sqrt2)$ 이 극대점이다.

## 승수의 뜻

제약을 $g(x)=c$ 로 바꾸었을 때의 최적값을 $V(c)$ 라 하자. 최적점과 승수가 $c$ 에 대해 연속미분가능하게 움직이면 $V'(c)=\lambda$ 다. $g(x(c))=c$ 를 미분하면 $\nabla g\cdot x'(c)=1$ 이므로 $V'(c)=\nabla f\cdot x'(c)=\lambda\nabla g\cdot x'(c)=\lambda$ 다. 원 $x^2+y^2=c$ 위의 $x+y$ 의 최댓값은 $V(c)=\sqrt{2c}$ 이고, $V'(c)=1/\sqrt{2c}$ 는 그 점의 승수 $1/(2x)$ 와 같다.

# 활용

- [고윳값](eigenvalues.md). 단위구면 $\Vert x\Vert^2=1$ 위에서 대칭행렬의 이차형식 $x^{\top}Ax$ 를 최대화하면 승수 조건이 $Ax=\lambda x$ 이고 최댓값이 가장 큰 고윳값이다. [스펙트럼 정리](spectral-theorem.md)의 변분적 증명에 이 계산을 쓴다.
- [Shannon 엔트로피](entropy.md). $\sum p_i=1$ 과 $\sum p_iE_i=E$ 아래에서 $-\sum p_i\log p_i$ 를 최대화하면 승수 조건이 $p_i\propto e^{-\beta E_i}$ 를 주고, 이것이 [지수족](exponential-families.md)의 최대 엔트로피 성질이다.
- 산술-기하 평균 부등식(arithmetic mean–geometric mean inequality, AM–GM). $x_1+\cdots+x_n=s$ 아래에서 $\log x_1+\cdots+\log x_n$ 을 최대화하면 승수 조건이 $1/x_i=\lambda$ 이므로 모든 $x_i$ 가 같을 때 곱이 최대다.
- [Lagrange 쌍대성](lagrange-duality.md). 부등식 제약을 더하면 승수에 부호 조건이 붙은 KKT(Karush–Kuhn–Tucker) 조건이 되고, 승수를 변수로 하는 쌍대 문제가 생긴다.
- [다양체](manifolds.md). 정칙점만으로 된 $M$ 은 $n-k$ 차원 부분다양체이고, 승수 조건은 $\nabla f(a)$ 가 접공간에 수직이라는 진술이다.

# 연관 문서

## 선수지식

- [역함수 정리](inverse-function-theorem.md)

## 더 알아보기

- [Lagrange 쌍대성](lagrange-duality.md)

#optimization #analysis #differential_geometry
