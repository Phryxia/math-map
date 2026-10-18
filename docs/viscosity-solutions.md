# 점성해

# 개요

**점성해(viscosity solution)** 는 1차 비선형 편미분방정식의 해를 미분 없이 정의하는 방법이다. [Hamilton-Jacobi 방정식](hamilton-jacobi-equation.md)의 매끄러운 해는 특성곡선이 교차하는 곳에서 끊기고, 꺾인 함수를 허용하면 거의 모든 점에서 방정식을 만족하는 함수가 여러 개 나온다.

점성해는 꺾인 점에서 도함수를 쓰는 대신 그 점에서 위나 아래로 접하는 매끄러운 함수의 도함수에 부등식을 요구한다. 그 조건을 만족하는 연속함수는 하나뿐이다.

# 직관

구간 $(-1,1)$ 에서 $\vert u'\vert=1$ 이고 $u(-1)=u(1)=0$ 인 함수를 찾는다. $u'$ 가 연속이면 $+1$ 과 $-1$ 가운데 하나로 고정되어 두 경계조건을 함께 맞출 수 없으므로 매끄러운 해가 없다. 꺾인 함수를 허용하면 $1-\vert x\vert$ 도, $\vert x\vert-1$ 도, 기울기가 $\pm1$ 을 번갈아 오가는 톱니 모양도 꺾인 점을 뺀 모든 점에서 방정식을 만족한다.

하나를 고르는 기준으로 2계 항을 쓴다. $-\varepsilon u''+\vert u'\vert=1$ 은 각 $\varepsilon\gt 0$ 에서 매끄러운 해가 하나이고, $\varepsilon$ 을 $0$ 으로 보내면 그 해가 $1-\vert x\vert$ 로 간다. 톱니 모양은 극한에 나타나지 않는다.

이 극한을 2계 항 없이 가려내려면 꺾인 점에서 쓸 양이 있어야 한다. 꺾인 점에서 $u$ 에 매끄러운 함수 $\varphi$ 를 접해 보고 $\varphi$ 의 도함수를 방정식에 넣는다. $u-\varphi$ 가 그 점에서 국소 최댓값이면 $\vert\varphi'\vert-1\le0$ 을, 국소 최솟값이면 $\vert\varphi'\vert-1\ge0$ 을 요구한다.

$1-\vert x\vert$ 를 $x=0$ 에서 보면 위에서 접하는 $\varphi$ 의 기울기는 $-1$ 과 $1$ 사이의 값이고 $\vert\varphi'\vert-1\le0$ 이 성립한다. 아래에서 접하는 매끄러운 함수는 없으므로 둘째 요구는 확인할 것이 없다. $\vert x\vert-1$ 을 $x=0$ 에서 보면 아래에서 접하는 기울기에 $0$ 이 들어가고 $\vert0\vert-1\ge0$ 이 거짓이므로 둘째 요구가 깨진다.

두 요구를 함께 만족하는 연속함수를 점성해라 하고, 이 문제에서는 $1-\vert x\vert$ 가 그 하나다.

# 정의

점성해는 시험함수와의 접촉으로 정의되는 약한 해다. 열린집합 $U\subset\mathbb R^n$ 과 연속함수 $F\colon U\times\mathbb R\times\mathbb R^n\to\mathbb R$ 에 대해 방정식

$$
F(x,u(x),Du(x))=0\qquad (x\in U)
$$

를 둔다. 연속함수 $u\colon U\to\mathbb R$ 에 대해 다음을 정의한다.

$u$ 가 **점성 아래해**라는 것은, 모든 $\varphi\in C^1(U)$ 와 $u-\varphi$ 가 국소 최댓값을 갖는 모든 점 $x\_0$ 에서

$$
F(x\_0,u(x\_0),D\varphi(x\_0))\le0
$$

이 성립한다는 뜻이다. $u$ 가 **점성 위해**라는 것은, 모든 $\varphi\in C^1(U)$ 와 $u-\varphi$ 가 국소 최솟값을 갖는 모든 점 $x\_0$ 에서 같은 식에서 부등호를 뒤집은 $F\ge0$ 이 성립한다는 뜻이다. 둘을 함께 만족하면 $u$ 를 **점성해**라 한다.

국소 최댓값을 갖는 $\varphi$ 가 한 점에서 없으면 그 점에서 아래해 조건은 확인할 것이 없다. 꺾인 점에서 두 조건 가운데 하나만 실제로 제약이 되는 것이 이 정의가 해를 가려내는 방식이다.

# 성질

## 고전해와의 관계

**정리.** $u$ 가 $C^1$ 이면 $u$ 가 점성해인 것과 $F(x,u,Du)=0$ 을 모든 점에서 만족하는 것이 같다.

$u$ 가 $C^1$ 이고 $u-\varphi$ 가 $x\_0$ 에서 국소 최댓값이면 $Du(x\_0)=D\varphi(x\_0)$ 이므로 아래해 조건이 $F(x\_0,u,Du)\le0$ 이 된다. 위해 조건에서 같은 점의 $\ge$ 를 얻으므로 등식이 나온다. 거꾸로 고전해이면 두 조건이 등식에서 바로 따라온다. ∎

## 안정성

**정리.** $u\_\varepsilon$ 이 $-\varepsilon\Delta u\_\varepsilon+F(x,u\_\varepsilon,Du\_\varepsilon)=0$ 의 해이고 $\varepsilon\to0$ 에서 $u\_\varepsilon$ 이 $u$ 로 국소 균등수렴하면 $u$ 는 $F=0$ 의 점성해다.[^1]

$u-\varphi$ 가 $x\_0$ 에서 엄격한 국소 최댓값이라 하면, $u\_\varepsilon-\varphi$ 의 국소 최댓값점 $x\_\varepsilon$ 이 $x\_0$ 으로 간다. 그 점에서 $D u\_\varepsilon=D\varphi$ 이고 $\Delta(u\_\varepsilon-\varphi)\le0$ 이므로

$$
F(x\_\varepsilon,u\_\varepsilon,D\varphi)=\varepsilon\Delta u\_\varepsilon\le\varepsilon\Delta\varphi(x\_\varepsilon)
$$

이고, $\varepsilon\to0$ 의 극한에서 $F(x\_0,u(x\_0),D\varphi(x\_0))\le0$ 을 얻는다. 위해 조건은 부호를 바꾸어 같다. ∎

이 성질이 2계 항을 붙여 푼 뒤 극한을 취하는 방법에 점성해라는 이름이 붙은 까닭이다.

## 비교 원리와 유일성

**정리.** $F$ 가 $u$ 에 대해 단조증가하고 $p$ 에 대해 적절한 연속성 조건을 만족하면, 유계 열린집합에서 점성 아래해 $u$ 와 점성 위해 $v$ 가 경계에서 $u\le v$ 이면 내부에서도 $u\le v$ 다.[^1]

증명은 $u-v$ 가 내부의 한 점에서 양의 최댓값을 갖는다고 가정하고, 두 변수의 함수 $u(x)-v(y)-\vert x-y\vert^2/\delta$ 의 최댓값점에서 아래해 조건과 위해 조건을 함께 써서 모순을 얻는 방식이다. ∎

점성해는 아래해이면서 위해이므로 두 점성해가 서로를 위아래로 누르고, 따라서 같은 경계조건을 가진 점성해는 하나다.

## Hopf-Lax 공식

**정리.** $H$ 가 볼록이고 초기값 $g$ 가 Lipschitz 이면 $u\_t+H(Du)=0$, $u(x,0)=g(x)$ 의 점성해는

$$
u(x,t)=\min\_{y}\left\lbrack g(y)+t\thinspace L\left(\frac{x-y}{t}\right)\right\rbrack
$$

이고, 여기서 $L$ 은 $H$ 의 [볼록 공액](convex-conjugate.md)이다.[^1]

최솟값을 주는 $y$ 가 유일한 점에서 $u$ 가 미분가능하고 방정식을 만족하며, 그런 $y$ 가 둘 이상인 점이 특성곡선이 교차하는 곳이다. 그 점에서 위 공식의 $u$ 는 꺾이고, 꺾임이 아래가 아니라 위로 생기므로 점성해 조건을 만족한다. ∎

# 활용

- [Hamilton-Jacobi 방정식](hamilton-jacobi-equation.md)의 전역해를 정의하는 자리다. 매끄러운 해는 특성곡선이 교차하기 전까지만 있고, 점성해는 교차 뒤에도 유일하게 이어진다.
- [동적 계획법](dynamic-programming.md)의 연속시간 판본에서 가치함수가 만족하는 방정식의 해가 점성해다. 가치함수는 보통 꺾이므로 고전해로는 다룰 수 없고, 유일성이 수치해법의 수렴을 보장하는 근거가 된다.
- [볼록 공액](convex-conjugate.md)이 Hopf-Lax 공식에 들어간다. Hamilton 함수가 볼록이면 공액으로 적은 최솟값 공식이 해를 명시적으로 준다.
- 보존법칙의 [엔트로피 해](entropy-solutions.md)와 같은 자리에 있다. 1차원에서 보존법칙의 해를 적분한 함수가 Hamilton–Jacobi 방정식의 해이고, 엔트로피 조건이 점성해 조건에 대응한다.[^1]

[^1]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 3 장과 10 장. 점성해의 정의, 안정성, 비교 원리와 유일성, Hopf-Lax 공식, 보존법칙과의 관계를 다룬다.

# 연관 문서

## 선수지식

- [Hamilton-Jacobi 방정식](hamilton-jacobi-equation.md)

## 더 알아보기

- [엔트로피 해](entropy-solutions.md)

#analysis #optimization #differential_geometry
