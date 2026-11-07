# Alexandrov–Bakelman–Pucci 추정

# 개요

**Alexandrov–Bakelman–Pucci 추정(Alexandrov–Bakelman–Pucci estimate, ABP estimate)** 은 타원형 방정식의 해가 얼마나 커질 수 있는지를 오른쪽 항의 크기의 합으로 묶는 부등식이다. 양 끝을 고정한 줄의 한가운데 좁은 구간을 세게 누르면, 누르는 힘의 최댓값은 구간이 좁을수록 커지지만 줄이 처지는 깊이는 누른 힘의 합으로 정해진다. ABP 추정은 접선의 기울기를 세는 방법으로 이 사실을 고차원에서 증명해, 해의 최댓값을 오른쪽 항의 $L^n$ 노름으로 묶는다.

# 직관

[최대값 원리](maximum-principle.md)의 선험 상한은 $\max\vert u\vert\le\max\_{\partial U}\vert u\vert+C\sup\_U\vert f\vert$ 꼴이다. 구간 $(0,1)$ 에서 $u(0)=u(1)=0$ 이고 $-u''=f$ 인 함수를 놓고, $f$ 를 가운데 길이 $\varepsilon$ 인 구간에서 $1/\varepsilon$, 그 밖에서 $0$ 으로 둔다. $f$ 의 적분은 $\varepsilon$ 과 상관없이 $1$ 이고, 해 $u$ 는 가운데가 가장 높은 천막 모양이며 최댓값이 $1/4$ 에 가깝다. 그런데 $\sup f=1/\varepsilon$ 이므로 선험 상한은 $\varepsilon\to 0$ 에서 무한대로 간다.

$f$ 의 적분으로 $u$ 를 묶으려고 기울기를 센다. $u$ 의 최댓값을 $M$ 이라 하고 $\vert p\vert\lt M$ 인 기울기 $p$ 를 하나 고른다. 기울기 $p$ 인 직선을 그래프 위 멀리서 내려 그래프에 처음 닿게 한다. 그 직선은 최고점 $x_0$ 에서 높이가 $M$ 이상이므로 두 끝점에서 높이가 $M-\vert p\vert\gt 0$ 이상이고, 끝점의 값 $0$ 에는 닿지 않는다. 따라서 닿는 점 $y$ 는 구간 안쪽이다. 그 점에서 $u'(y)=p$ 이고 그래프가 직선 아래에 있으므로 $u''(y)\le 0$ 이다.

$p$ 를 $-M$ 에서 $M$ 까지 움직이면 이런 닿는 점에서 $u'$ 가 길이 $2M$ 인 구간 전체를 지난다. 닿는 점들의 집합을 지나는 동안 $u'$ 가 변하는 양은 그 집합에서 $\vert u''\vert=-u''=f$ 를 적분한 것을 넘지 않는다. 따라서 $2M\le\int f$ 이고, 위의 예에서는 $\varepsilon$ 과 상관없이 $M\le 1/2$ 이 나온다.

변수가 $n$ 개이면 기울기는 벡터가 되고, 닿는 점에서 나오는 기울기 전체가 반지름 $M/d$ 인 공을 채운다. $d$ 는 영역의 지름이다. 기울기 벡터가 차지하는 부피는 $\det(-D^2u)$ 의 적분으로 묶이고, [행렬식](determinants.md)은 대각합의 $n$ 제곱으로 묶이므로 $f$ 의 $n$ 제곱의 적분이 나온다.

# 정의

## 위 접촉 집합

$U\subset\mathbb R^n$ 이 유계 열린집합이고 $u\in C^2(U)\cap C^0(\overline U)$ 일 때, $u$ 의 **위 접촉 집합(upper contact set)** 은

$$
\Gamma^+=\lbrace y\in U:\thinspace\text{어떤 }p\in\mathbb R^n\text{ 에 대해 모든 }x\in U\text{ 에서 }u(x)\le u(y)+p\cdot(x-y)\rbrace
$$

이다. $y\in\Gamma^+$ 이면 $y$ 에서 $u$ 의 그래프에 위에서 닿는 초평면이 있고, 그 기울기는 $p=Du(y)$ 이며 $D^2u(y)$ 는 음의 반정부호다. 직관 절의 천막 모양 $u$ 에서 $\Gamma^+$ 는 구간 전체이고, 그래프가 아래로 움푹 들어간 자리가 있으면 그 자리에는 위에서 닿는 초평면이 없어 $\Gamma^+$ 에서 빠진다.

## 계수의 행렬식

계수가 $A(x)=(a^{ij}(x))$ 인 연산자 $Lu=-\sum\_{i,j}a^{ij}(x)D\_{ij}u$ 에서 $A(x)$ 가 대칭 양의 정부호이면

$$
\mathcal D^\ast(x)=\bigl(\det A(x)\bigr)^{1/n}
$$

로 둔다. $\mathcal D^\ast$ 는 $A(x)$ 의 [고윳값](eigenvalues.md)의 기하평균이다. $L=-\Delta$ 이면 $A$ 가 단위행렬이므로 $\mathcal D^\ast=1$ 이다.

# 성질

## Alexandrov–Bakelman–Pucci 추정

정리. $U$ 의 지름이 $d$ 이고 $u\in C^2(U)\cap C^0(\overline U)$ 가 $U$ 에서 $Lu\le f$ 를 만족하면

$$
\max\_{\overline U}u\le\max\_{\partial U}u^+ +\frac{d}{n\thinspace\omega_n^{1/n}}\left\Vert\frac{f^+}{\mathcal D^\ast}\right\Vert\_{L^n(\Gamma^+)}
$$

이다. $\omega_n$ 은 $n$ 차원 단위공의 부피이고 $u^+=\max(u,0)$, $f^+=\max(f,0)$ 다.[^1]

$n=1$, $d=1$, $\omega_1=2$ 이면 오른쪽 둘째 항이 $\frac12\int\_{\Gamma^+}f^+$ 이고, 직관 절의 $2M\le\int f$ 와 같다.

## 기울기 상의 공

보조정리. $M=\max\_{\overline U}u-\max\_{\partial U}u^+\gt 0$ 이면 $Du(\Gamma^+)$ 는 반지름 $M/d$ 인 열린 공 $B\_{M/d}(0)$ 을 포함한다.

증명의 요지. $u(x_0)=\max\_{\overline U}u$ 인 점 $x_0$ 과 $\vert p\vert\lt M/d$ 인 $p$ 를 잡고 $w(x)=u(x)-p\cdot(x-x_0)$ 를 둔다. $w(x_0)=u(x_0)$ 이고, 경계에서는 $\vert x-x_0\vert\le d$ 이므로

$$
w(x)\le\max\_{\partial U}u^+ +\vert p\vert d\lt\max\_{\partial U}u^+ +M=u(x_0)
$$

이다. 따라서 $w$ 의 최대점 $y$ 가 $U$ 안에 있고, 그 점에서 $Du(y)=p$ 이며 $u(x)\le u(y)+p\cdot(x-y)$ 가 모든 $x$ 에서 성립하므로 $y\in\Gamma^+$ 다.

## 행렬식과 대각합

$y\in\Gamma^+$ 에서 $H=-D^2u(y)$ 와 $A=A(y)$ 를 놓는다. $A$ 의 양의 정부호 제곱근 $B$ 로 $\det A\det H=\det(BHB)$ 이고, $BHB$ 는 고윳값이 $0$ 이상인 대칭행렬이다. 산술–기하 평균 부등식(inequality of arithmetic and geometric means)을 그 고윳값에 쓰면

$$
\det A\det H\le\left(\frac{\mathrm{tr}(BHB)}{n}\right)^n=\left(\frac{\mathrm{tr}(AH)}{n}\right)^n=\left(\frac{Lu(y)}{n}\right)^n\le\left(\frac{f^+(y)}{n}\right)^n
$$

이다. 곧 $\Gamma^+$ 에서 $\det(-D^2u)\le\bigl(f^+/(n\mathcal D^\ast)\bigr)^n$ 이다.

## 정리의 증명

$Du$ 는 $\Gamma^+$ 에서 국소 Lipschitz 이므로 [면적공식](area-formula.md)이 $\vert Du(\Gamma^+)\vert\le\int\_{\Gamma^+}\vert\det D^2u\vert\thinspace dx$ 를 준다. 기울기 상의 공과 행렬식의 상한을 이 부등식의 양쪽에 넣으면

$$
\omega_n\left(\frac{M}{d}\right)^n\le\int\_{\Gamma^+}\left(\frac{f^+}{n\mathcal D^\ast}\right)^n dx
$$

이고, 양변에 $1/n$ 제곱을 하면 정리가 나온다.

## 계수 조건

증명은 각 점에서 $A(y)$ 가 양의 정부호라는 것과 $\mathcal D^\ast$ 만 쓴다. 계수 $a^{ij}$ 의 연속성이나 미분가능성은 쓰지 않으므로 계수가 측정가능하기만 해도 같은 추정이 성립한다. [최대값 원리](maximum-principle.md)의 선험 상한과 견주면 $\sup\vert f\vert$ 가 $\Vert f^+/\mathcal D^\ast\Vert\_{L^n(\Gamma^+)}$ 로 바뀌고, 적분 범위가 $U$ 전체가 아니라 $\Gamma^+$ 다.

1계 항 $\sum\_i b^iD\_iu$ 와 $c\ge 0$ 인 영차항 $cu$ 를 더한 연산자에서도 같은 꼴의 추정이 성립하고, 상수는 $n$, $d$, $\Vert b/\mathcal D^\ast\Vert\_{L^n(\Gamma^+)}$ 에만 의존한다. $u$ 를 $W^{2,n}\_{\mathrm{loc}}(U)\cap C^0(\overline U)$ 로 넓혀도 성립한다.[^1]

# 활용

- 강한 해의 유일성. 계수가 측정가능한 비발산형 방정식 $Lu=f$ 에서 [Sobolev 공간](sobolev-spaces.md) $W^{2,n}\_{\mathrm{loc}}$ 의 해 둘의 차에 이 추정을 쓰면 경계값이 같은 해가 하나뿐이다. 최대값 원리의 비교 원리는 $u\in C^2$ 를 요구하므로 이 경우에 쓸 수 없다.
- Krylov–Safonov Harnack 부등식(Krylov–Safonov Harnack inequality). 비발산형 연산자의 음 아닌 해가 반지름이 절반인 공에서 최댓값이 최솟값의 상수배를 넘지 않는다는 정리이고, 증명에서 해가 작은 값을 갖는 집합의 부피를 아래로 묶는 데 이 추정을 쓴다. 그 결과로 해가 Hölder 연속이다. 발산형 연산자의 같은 결론이 [De Giorgi–Nash–Moser 정리](de-giorgi-nash-moser.md)다.[^1]
- 완전 비선형 타원형 방정식. $F(D^2u)=0$ 꼴의 방정식에서 [점성해](viscosity-solutions.md)에 대한 판본이 증명되어 있고, Caffarelli 의 정칙성 이론이 이것을 첫 단계로 쓴다.[^2]
- Monge–Ampère 방정식(Monge–Ampère equation). 볼록함수 $u$ 에 대한 $\det D^2u=f$ 의 약한 해는 기울기 상의 부피로 정의된다. 경계에서 $0$ 인 볼록 해에 기울기 상의 공 보조정리를 $-u$ 로 쓰면 $\vert\min u\vert$ 가 $d$ 와 $f$ 의 적분으로 묶인다.

[^1]: David Gilbarg, Neil S. Trudinger, *Elliptic Partial Differential Equations of Second Order*, 2판, Springer, 1983, 9 장. 9.1 절이 위 접촉 집합, 정리 9.1 과 보조정리 9.2, 1계 항이 있는 경우를 다루고, 같은 장 뒤쪽이 Krylov–Safonov 추정을 다룬다.
[^2]: Luis A. Caffarelli, Xavier Cabré, *Fully Nonlinear Elliptic Equations*, American Mathematical Society Colloquium Publications 43, 1995, 1 장과 3 장. 볼록 포락선으로 쓴 ABP 추정과 점성해에 대한 판본을 다룬다.

# 연관 문서

## 선수지식

- [최대값 원리](maximum-principle.md)
- [면적공식](area-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #measure_theory #linear_algebra
