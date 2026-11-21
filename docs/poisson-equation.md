# Poisson 방정식

# 개요

**Poisson 방정식(Poisson's equation)** 은 [Laplace 연산자](laplace-operator.md)를 취한 값이 주어진 함수 $f$ 가 되는 함수 $u$ 를 찾는 방정식 $-\Delta u=f$ 다. 가장자리를 틀에 고정한 얇은 막 위에 모래를 고르게 뿌리면 막이 처지고, 처진 깊이를 점마다 구하는 문제가 이 꼴이다. 이 방정식은 해를 원천 $f$ 와 [Green 함수](greens-function.md)의 적분으로 적고, 격자 위에서는 점마다 값을 이웃 네 값의 평균과 비교하는 연립일차방정식으로 푼다.

# 직관

양 끝을 고정한 줄에 고른 무게를 싣는다. 처진 깊이 $u(x)$ 는 $-u''=1$, $u(0)=u(1)=0$ 을 만족하고, 두 번 적분하면 $u(x)=x(1-x)/2$ 다. 가운데에서 가장 깊이 처지고 깊이는 $1/8$ 이다.

정사각형 $[0,1]^2$ 의 막에서는 두 방향의 휨이 더해져 $-(\partial_x^2u+\partial_y^2u)=1$ 이 되고, 손으로 적분할 수 없다. 간격 $h$ 의 격자점에서만 값을 구하기로 하고 이계도함수를 이웃과의 차로 바꾼다. $\partial_x^2u$ 를 다음 차로 바꾸고 $y$ 방향도 같이 한다.

$$
\partial_x^2u(x,y)\approx\frac{u(x+h,y)-2u(x,y)+u(x-h,y)}{h^2}
$$

그러면 격자점마다 다음 식이 나온다.

$$
4u_{i,j}-u_{i+1,j}-u_{i-1,j}-u_{i,j+1}-u_{i,j-1}=h^2
$$

$h=1/2$ 이면 안쪽 격자점은 가운데 하나이고 이웃 넷이 모두 가장자리라서 $4u=1/4$, 곧 $u=1/16=0.0625$ 다. $h=1/4$ 이면 안쪽 점 아홉 개의 연립방정식이 되고 가운데 값은 $0.0703$ 이다. 격자를 더 잘게 하면 가운데 값은 $0.0737$ 에 가까워진다.

# 정의

## Poisson 방정식과 경계 조건

$\Omega\subseteq\mathbb R^n$ 을 유계 열린집합, $f$ 를 $\Omega$ 위의 함수라 하자. $\Omega$ 안에서 성립하는 다음 식을 Poisson 방정식이라 한다.

$$
-\Delta u=f,\qquad\Delta=\sum_{i=1}^n\frac{\partial^2}{\partial x_i^2}
$$

여기에 경계 조건 하나를 붙인다.

- Dirichlet 조건(Dirichlet condition). 경계에서 값 $u=g$ 를 준다. 직관 절의 막은 $g=0$ 이다.
- Neumann 조건(Neumann condition). 경계에서 바깥 법선 방향의 도함수 $\partial u/\partial n=g$ 를 준다. 가장자리가 고정되지 않고 기울기만 정해진 경우다.

$f=0$ 이면 [조화함수](harmonic-functions.md)를 정하는 Laplace 방정식(Laplace's equation)이고, 여기에 Dirichlet 조건을 붙인 것이 [Dirichlet 문제](dirichlet-problem.md)다. $u$ 가 $\Omega$ 에서 두 번 연속미분가능하고 경계까지 연속이며 식과 경계 조건을 만족하면 **고전해(classical solution)** 라 한다.

## 5점 차분

간격 $h$ 의 격자에서 직관 절의 식을 **5점 차분(five-point stencil)** 이라 한다. 안쪽 격자점의 값들을 한 벡터 $U$ 로 모으면 $AU=h^2F$ 꼴의 연립일차방정식이 되고, $A$ 의 각 행은 대각에 $4$, 이웃 넷의 자리에 $-1$ 을 가진다. 가장자리 점의 값은 경계 조건에서 알려져 있으므로 오른쪽으로 옮긴다.

# 성질

## 유일성

Dirichlet 조건의 고전해는 많아야 하나다. 두 해의 차 $w$ 는 조화함수이고 경계에서 $0$ 이므로, [최대값 원리](maximum-principle.md)로 $w$ 의 최댓값과 최솟값이 모두 $0$ 이다.

Neumann 문제의 해는 상수만큼의 차이를 빼면 하나다. 해가 존재하려면 [발산 정리](divergence-theorem.md)로 $-\int_\Omega\Delta u=-\int_{\partial\Omega}\partial u/\partial n$ 이므로 다음 조건이 필요하다.

$$
\int_\Omega f\thinspace dx+\int_{\partial\Omega}g\thinspace dS=0
$$

막으로는 위에서 누르는 힘의 합과 가장자리에서 받치는 힘의 합이 맞아야 한다는 조건이다.

## Green 함수로 쓴 해

$\Omega$ 의 Green 함수 $G(x,y)$ 가 있으면 경계값이 $0$ 인 Dirichlet 조건의 해는 다음이다.

$$
u(x)=\int_\Omega G(x,y)\thinspace f(y)\thinspace dy
$$

$G(x,\cdot)$ 은 점 $x$ 에 놓인 크기 $1$ 의 원천에 대한 해이고, 위 적분은 원천 $f$ 를 점 원천들의 합으로 보고 해를 더한 것이다. 직관 절의 줄에서는 $G(x,y)=\min(x,y)(1-\max(x,y))$ 이고, $\int_0^1G(x,y)\thinspace dy=x(1-x)/2$ 로 직관 절의 해가 나온다.

$\Omega=\mathbb R^3$ 이고 $f$ 의 받침이 콤팩트하면 기본해 $1/(4\pi\vert x\vert)$ 와의 [합성곱](convolution.md)이 해다. $f$ 를 전하 밀도로 보면 이것이 Coulomb 퍼텐셜이다.

## Dirichlet 원리

경계에서 $u=g$ 인 함수 가운데 다음 에너지를 가장 작게 하는 것이 Dirichlet 조건의 해다. 이것은 [Dirichlet 원리](dirichlet-principle.md)에 원천 항 $-fv$ 를 더한 꼴이다.

$$
I(v)=\int_\Omega\Big(\frac12\vert\nabla v\vert^2-fv\Big)\thinspace dx
$$

최소점 $u$ 에서 경계값이 $0$ 인 $\phi$ 방향으로 $I(u+s\phi)$ 를 미분하면 $s=0$ 에서 $0$ 이어야 한다. 부분적분으로 $\int(\nabla u\cdot\nabla\phi-f\phi)=\int(-\Delta u-f)\phi$ 이므로 모든 $\phi$ 에 대해 $0$ 이면 $-\Delta u=f$ 다. 막은 위치 에너지가 가장 작은 모양으로 처진다.

## 약해

경계값이 $0$ 인 모든 시험함수 $\phi$ 에 대해 $\int_\Omega\nabla u\cdot\nabla\phi=\int_\Omega f\phi$ 를 만족하는 $u$ 를 **약해(weak solution)** 라 한다. [Sobolev 공간](sobolev-spaces.md) $H^1_0(\Omega)$ 에서 좌변은 내적이 되므로, $f\in L^2$ 이면 Riesz 표현 정리(Riesz representation theorem)로 약해가 정확히 하나 존재한다. 경계와 $f$ 가 매끄러우면 약해는 고전해다. [유한요소법](finite-element-method.md)은 이 식을 유한차원 함수공간에서 푼다.

## 이산 문제

5점 차분의 행렬 $A$ 는 대칭이고 양의 정부호다. 이산판 최대값 원리도 성립해, 경계값이 $0$ 이고 $F\ge 0$ 이면 $U\ge 0$ 이다. 해가 네 번 연속미분가능하면 격자점에서의 오차는 $O(h^2)$ 이고, 직관 절의 $0.0625$, $0.0703$ 이 $0.0737$ 로 다가가는 것이 이 수렴이다.

$A$ 의 가장 큰 고윳값과 가장 작은 고윳값의 비는 $h^{-2}$ 꼴로 자라므로, 격자를 잘게 할수록 단순 반복법은 느려진다. 이것을 푸는 방법이 [전처리](preconditioning.md)와 [다중격자법](multigrid.md)이다.

# 활용

- 정전기와 중력. 전위 $\varphi$ 는 $-\Delta\varphi=\rho/\varepsilon_0$ 을 만족하고, 이것은 [Maxwell 방정식](maxwell-equations.md)의 Gauss 법칙에 $E=-\nabla\varphi$ 를 넣은 식이다. Newton 중력 퍼텐셜은 중력 상수 $G_{\mathrm N}$ 으로 $\Delta\Phi=4\pi G_{\mathrm N}\rho$ 를 만족한다.
- 비압축 유체의 압력. [Navier–Stokes 방정식](navier-stokes-equations.md)의 투영법은 시간 단계마다 압력에 대한 Poisson 방정식을 풀어 속도의 발산을 없앤다. 같은 계산이 [Helmholtz 분해](helmholtz-decomposition.md)의 기울기 성분을 구하는 것이다.
- 탄성체의 비틀림. 막대의 단면에서 $-\Delta\psi=2$, 경계에서 $\psi=0$ 인 해의 적분이 비틀림 강성이다. 직관 절의 정사각형 막과 같은 방정식이다.
- 영상 편집. 붙여 넣을 영상의 기울기를 원천으로 두고 경계를 바탕 영상의 값으로 둔 Poisson 방정식을 풀면 이음매가 보이지 않게 합성된다.
- 반복법의 시험 문제. [정지 반복법](stationary-iterative-methods.md), 전처리, 다중격자법의 수렴 속도는 대개 정사각형 위의 5점 차분 Poisson 방정식으로 비교한다.

# 연관 문서

## 선수지식

- [Green 함수](greens-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
