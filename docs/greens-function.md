# Green 함수

# 개요

**Green 함수(Green's function)** 는 한 점에 놓인 크기 $1$ 의 원천이 만드는 퍼텐셜이다. 평면에 전하가 퍼져 있을 때 전위 $u$ 는 $-\Delta u=f$ 를 만족하고, 퍼진 전하는 점전하들을 모은 것이므로 점전하 하나의 전위를 알면 그것을 더해 $u$ 를 얻는다. Green 함수는 점전하 하나에 대한 해를 구해 두고, 일반 원천에 대한 해를 Green 함수와 원천의 적분으로 계산한다.

# 직관

$-\Delta u=f$ 를 푼다. 방정식이 선형이므로 $f$ 를 점에 몰린 질량들의 합으로 보고, 점질량 하나에 대한 해를 구해 더하는 방법을 쓴다.

점질량 하나는 Dirac 델타(Dirac delta) $\delta_0$ 이고, 이것은 함수가 아니라 [Schwartz 분포](schwartz-distributions.md)이므로 $-\Delta E=\delta_0$ 을 분포의 등식으로 푼다. $\delta_0$ 이 회전에 불변이므로 $E$ 를 $r=\vert x\vert$ 만의 함수 $\phi(r)$ 로 찾는다. 원점 밖에서는 $\Delta E=0$ 이고 회전대칭 함수의 Laplace 작용소가

$$
\Delta\phi=\phi''(r)+\frac{n-1}{r}\phi'(r)
$$

이므로, 이를 $0$ 으로 두고 풀면 $\phi'(r)=cr^{1-n}$ 이다.

적분하면 $n=3$ 에서 $\phi(r)=c/r$ 이고 $n=2$ 에서 $\phi(r)=-c\log r$ 이다. 상수는 원점을 둘러싼 반지름 $\varepsilon$ 인 공의 경계에서 정한다. 분포 $-\Delta E$ 를 시험함수 $\varphi$ 에 적용한 값에서 $\varphi\equiv 1$ 인 부분만 보면 $-\int\_{\partial B\_\varepsilon}\partial\_\nu\phi\thinspace dS$ 이고, $n=3$ 에서 이 값이 $4\pi c$ 다. $\delta_0$ 이 주는 값이 $1$ 이므로 $c=1/4\pi$ 다.

$E$ 를 구하면 [합성곱](convolution.md) $u=E\ast f$ 가 해다. 합성곱의 도함수는 한쪽에만 걸리므로 $-\Delta(E\ast f)=(-\Delta E)\ast f=\delta_0\ast f=f$ 다. 문제가 $f$ 를 적분하는 계산으로 바뀐다.

# 정의

## 기본해

미분작용소 $L$ 에 대해 $LE=\delta_0$ 을 만족하는 분포 $E$ 를 $L$ 의 **기본해(fundamental solution)** 라 한다.

$-\Delta$ 의 기본해는 단위구 $S^{n-1}$ 의 표면적을 $\sigma_n$ 이라 할 때

$$
E(x)=\frac{1}{(n-2)\sigma_n\vert x\vert^{n-2}}\quad(n\ge 3),\qquad E(x)=-\frac{1}{2\pi}\log\vert x\vert\quad(n=2)
$$

다. $n=3$ 이면 $\sigma_3=4\pi$ 이므로 $E=1/(4\pi\vert x\vert)$ 이고 직관 절의 $c=1/4\pi$ 와 같다. $n=1$ 이면 $-E''=\delta_0$ 의 해 $E(x)=-\vert x\vert/2$ 가 기본해다. 기본해는 [조화함수](harmonic-functions.md)를 더한 만큼 달라지므로 유일하지 않다.

## 영역의 Green 함수

유계 열린집합 $U$ 와 $x\in U$ 에 대해, $U$ 에서 조화이고 경계에서 $E(\cdot-x)$ 와 같은 함수를 $h_x$ 라 하고

$$
G(x,y)=E(y-x)-h_x(y)
$$

를 $U$ 의 **Green 함수** 라 한다. 정의에서 $y\in\partial U$ 이면 $G(x,y)=0$ 이고, $y\ne x$ 에서 $G(x,\cdot)$ 가 조화다.

$n=1$, $U=(0,1)$ 이면 $h_x$ 는 $h_x(0)=-x/2$, $h_x(1)=-(1-x)/2$ 인 일차함수이고, 계산하면 $y\le x$ 에서 $G(x,y)=y(1-x)$, $y\ge x$ 에서 $G(x,y)=x(1-y)$ 다. 양 끝에서 $0$ 이고 $y=x$ 에서 기울기가 $1$ 만큼 줄어 $-\partial_y^2G=\delta_x$ 를 만족한다.

# 성질

## 대칭성

$x\ne y$ 인 $x,y\in U$ 에서 $G(x,y)=G(y,x)$ 다. 정의 절의 $(0,1)$ 예에서 $y(1-x)$ 와 $x(1-y)$ 가 $x,y$ 를 맞바꾸면 서로 바뀌는 것이 이 대칭이다.

증명의 요지. $u=G(x,\cdot)$ , $v=G(y,\cdot)$ 로 두고 두 점을 뺀 영역에서 Green 항등식(Green's identity)

$$
\int(u\Delta v-v\Delta u)=\int\_{\partial}(u\partial\_\nu v-v\partial\_\nu u)
$$

을 쓴다. 왼쪽은 두 함수가 조화이므로 $0$ 이고, $\partial U$ 에서는 둘 다 $0$ 이다. 남는 것은 $x$ 와 $y$ 를 둘러싼 작은 구면의 적분이고, 반지름을 $0$ 으로 보내면 각각 $v(x)$ 와 $u(y)$ 로 수렴한다.[^1]

## 표현 공식

$u$ 가 $\overline U$ 에서 두 번 연속미분가능하면 다음 표현 공식(representation formula)이 성립한다[^1].

$$
u(x)=\int\_U G(x,y)\thinspace(-\Delta u(y))\thinspace dy-\int\_{\partial U}u(y)\thinspace\partial\_\nu G(x,y)\thinspace dS(y)
$$

증명의 요지. Green 항등식을 $u$ 와 $G(x,\cdot)$ 에 적용한다. $G$ 가 경계에서 $0$ 이므로 경계항 가운데 $\partial\_\nu u$ 가 붙은 쪽이 사라지고, $x$ 주변의 특이성이 $u(x)$ 를 남긴다.

따라서 $-\Delta u=f$ 와 경계값 $g$ 가 주어지면 해가 두 적분의 합으로 정해진다. 첫 항이 내부의 원천, 둘째 항이 경계값의 기여다.

## 공의 Poisson 핵

반지름 $R$ 인 공 $B$ 의 Green 함수는 거울상 점(reflected point) $x^\ast=R^2x/\vert x\vert^2$ 를 써서 적을 수 있다. 그 법선미분이

$$
-\partial\_\nu G(x,y)=\frac{R^2-\vert x\vert^2}{R\sigma_n\vert x-y\vert^n}
$$

이고, 이것을 Poisson 핵(Poisson kernel)이라 한다. 경계에서 연속인 $g$ 에 대해 위 핵과 $g$ 의 경계 적분이 공에서 조화이고 경계값이 $g$ 인 함수를 준다.[^1]

증명의 요지. 표현 공식에서 $f=0$ 으로 두면 꼴이 나온다. 핵이 양수이고 경계 전체에 걸친 적분이 $1$ 이므로, 경계점에 가까이 가면 질량이 그 점에 모여 $g$ 의 값으로 수렴한다.

## 양수성과 단조성

$x\ne y$ 에서 $G(x,y)\gt 0$ 이고, $U\subset V$ 이면 $G_U(x,y)\le G_V(x,y)$ 다.

증명의 요지. $G(x,\cdot)$ 는 $x$ 근방을 뺀 영역에서 조화이고 경계에서 $0$ 이며 $x$ 에 가까이 가면 양의 무한으로 가므로, 최대원리(maximum principle)가 양수성을 준다. 단조성은 차 $G_V-G_U$ 가 $U$ 에서 조화이고 $\partial U$ 에서 $G_V\ge 0$ 인 것에 최대원리를 적용해 얻는다.

# 활용

- [Dirichlet 문제](dirichlet-problem.md)의 해가 표현 공식의 둘째 항으로 주어지고, 공에서는 Poisson 핵의 적분이 명시적인 해다. 경계가 복잡한 영역에서는 Green 함수의 존재 자체를 따로 보여야 한다.
- 평면 영역의 Green 함수는 [등각사상](conformal-mapping.md)으로 옮겨도 변하지 않는다. 단위원판의 Green 함수가 $-\log$ 꼴이므로, [Riemann 사상정리](riemann-mapping-theorem.md)가 주는 사상을 알면 영역의 Green 함수를 얻는다.
- 확률적 표현. $G(x,y)$ 는 $x$ 에서 출발한 [Brownian 운동](brownian-motion.md)이 $U$ 를 떠나기 전에 $y$ 근방에 머무는 시간의 밀도다. 양수성과 영역에 대한 단조성이 이 해석에서도 보인다.
- 다른 작용소의 기본해. 열작용소 $\partial_t-\Delta$ 의 기본해가 Gauss 핵이고, Helmholtz 작용소(Helmholtz operator) $-\Delta-k^2$ 의 기본해가 진동하는 꼴이다. 작용소마다 기본해를 구하면 같은 방식으로 해를 적분으로 쓴다.

[^1]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 2.2 절. 기본해, Green 함수의 대칭성, 표현 공식, Poisson 핵이 모두 이 절에 있다. 영역의 Green 함수의 존재와 양수성은 D. Gilbarg, N. S. Trudinger, *Elliptic Partial Differential Equations of Second Order*, Springer, 2001, 2 장이다.

# 연관 문서

## 선수지식

- [조화함수](harmonic-functions.md)
- [Schwartz 분포](schwartz-distributions.md)

## 더 알아보기

- [퍼텐셜 이론](potential-theory.md)

#analysis #functional_analysis #complex_analysis
