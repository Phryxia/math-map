# Monge–Ampère 방정식

# 개요

**Monge–Ampère 방정식(Monge–Ampère equation)** 은 볼록함수의 [Hessian 행렬](hessian.md)의 [행렬식](determinants.md)을 자리마다 정해 주는 방정식 $\det D^2u=f$ 다. 볼록함수 $u$ 의 기울기 $Du$ 는 평면의 작은 조각을 다른 조각으로 보내고, 넓이가 몇 배가 되는지가 $\det D^2u$ 다. 고르게 깔린 모래를 정해진 밀도로 다시 까는 사상을 볼록함수의 기울기로 찾으면, 각 자리에서 넓이 배율을 정하는 이 방정식이 나온다. Monge–Ampère 방정식은 넓이 배율을 기울기 상의 부피로 바꿔 써서, 꺾인 점이 있는 볼록함수까지 해로 다룬다.

# 직관

$u(x)=\frac12\vert x\vert^2$ 이면 $Du(x)=x$ 이고 $D^2u$ 는 단위행렬이다. 기울기 사상이 항등사상이라 넓이가 그대로이고 $\det D^2u=1$ 이다. $u(x)=\frac12(x_1^2+4x_2^2)$ 이면 $Du(x)=(x_1,4x_2)$ 가 세로로 $4$ 배 늘이고 $\det D^2u=4$ 다.

원뿔 $u(x)=\vert x\vert$ 를 평면에서 본다. 원점 밖에서는 $Du(x)=x/\vert x\vert$ 이고 평면 전체가 단위원 위로 가므로 넓이가 $0$ 이 되고, 실제로 $\det D^2u=0$ 이다. 원점에서는 $u$ 가 미분가능하지 않지만, 원점에서 원뿔에 아래로 닿는 평면의 기울기는 단위원판 전체다. 그래서 원점 한 점이 넓이 $\pi$ 인 원판으로 늘어난다.

$\det D^2u$ 를 점마다 계산하면 원뿔은 원점 밖에서 $0$ 이고 원점에서는 값이 정의되지 않아 원점의 넓이 $\pi$ 를 놓친다. 그래서 각 집합 $E$ 에 대해 $E$ 의 점에서 아래로 닿는 평면의 기울기를 전부 모으고 그 부피를 잰다. 원뿔에서는 원점을 담는 $E$ 의 부피가 $\pi$, 원점을 담지 않는 $E$ 의 부피가 $0$ 이다.

# 정의

## Monge–Ampère 측도

$\Omega\subset\mathbb R^n$ 이 열린집합이고 $u:\Omega\to\mathbb R$ 가 볼록함수일 때, $x\in\Omega$ 에서 $u$ 의 [부분미분](subdifferential.md)을

$$
\partial u(x)=\lbrace p\in\mathbb R^n:\ u(z)\ge u(x)+p\cdot(z-x)\thinspace\text{ 모든 }z\in\Omega\text{ 에서}\rbrace
$$

로 쓰고, $E\subset\Omega$ 에 대해 $\partial u(E)=\bigcup\_{x\in E}\partial u(x)$ 로 둔다. Borel 집합 $E$ 에서

$$
Mu(E)=\vert\partial u(E)\vert
$$

로 정한 $Mu$ 를 $u$ 의 **Monge–Ampère 측도(Monge–Ampère measure)** 라 한다. $\vert\cdot\vert$ 는 Lebesgue 측도다. 직관 절의 원뿔은 $\partial u(0)$ 이 닫힌 단위원판이므로 $Mu=\pi\delta_0$ 이다.

## Alexandrov 해

볼록함수 $u$ 가 $\Omega$ 의 모든 Borel 집합 $E$ 에서

$$
Mu(E)=\int\_E f\thinspace dx
$$

를 만족하면 $u$ 를 $\det D^2u=f$ 의 **Alexandrov 해(Alexandrov solution)** 라 한다. $f$ 자리에 Borel 측도 $\nu$ 를 두고 $Mu=\nu$ 를 요구해도 같은 정의가 된다. 원뿔은 $\det D^2u=\pi\delta_0$ 의 Alexandrov 해이고, $\frac12(x_1^2+4x_2^2)$ 는 $\det D^2u=4$ 의 Alexandrov 해다.

# 성질

## Monge–Ampère 측도의 가산 가법성

$Mu$ 는 $\Omega$ 의 Borel 집합 위의 측도다.[^1]

증명의 요지. 서로 다른 두 점 $x\ne y$ 에서 함께 부분기울기가 되는 $p$ 의 집합이 부피 $0$ 임을 보이면 가산 가법성이 나온다. 그런 $p$ 에서는 [볼록 공액](convex-conjugate.md) $u^\ast$ 의 부분미분이 두 점 이상을 담으므로 $u^\ast$ 가 미분가능하지 않다. 볼록함수는 거의 모든 점에서 미분가능하므로 그런 $p$ 의 집합은 부피가 $0$ 이다.

## 매끄러운 해와의 일치

$u\in C^2(\Omega)$ 가 볼록이면 $Mu(E)=\int\_E\det D^2u\thinspace dx$ 다. 이때 $\partial u(x)=\lbrace Du(x)\rbrace$ 이고, 앞 절에서 $Du$ 의 겹침수가 거의 모든 점에서 $1$ 이므로 [면적공식](area-formula.md)이 이 등식을 준다. 따라서 매끄러운 볼록함수에서 Alexandrov 해와 고전해가 같다.

## 선형화와 타원성

$u$ 에서 $u+tv$ 로 움직일 때

$$
\frac{d}{dt}\Big\vert\_{t=0}\det D^2(u+tv)=\mathrm{tr}\bigl(\mathrm{cof}(D^2u)\thinspace D^2v\bigr)
$$

이다. $\mathrm{cof}$ 는 여인자 행렬이다. $D^2u$ 가 양의 정부호이면 여인자 행렬도 양의 정부호이고 이 선형 연산자는 타원형이다. $D^2u$ 가 부정부호이면 선형화가 타원형이 아니므로, 방정식을 볼록함수에서만 다룬다.

## Alexandrov 최대값 원리

$\Omega$ 가 지름 $d$ 인 유계 볼록 열린집합이고 $u$ 가 $\overline\Omega$ 에서 연속인 볼록함수이며 $\partial\Omega$ 에서 $u=0$ 이면

$$
\omega_n\left(\frac{\vert\min\_{\overline\Omega}u\vert}{d}\right)^n\le Mu(\Omega)
$$

이다. $\omega_n$ 은 $n$ 차원 단위공의 부피다.

증명의 요지. $m=\vert\min u\vert$ 와 최소점 $x_0$, $\vert p\vert\lt m/d$ 인 $p$ 를 잡는다. 평면 $\ell(z)=u(x_0)+p\cdot(z-x_0)$ 는 경계에서 $u(x_0)+\vert p\vert d\lt 0=u$ 이므로 $\ell$ 을 아래에서 올리면 $u$ 의 그래프에 안쪽 점에서 처음 닿는다. 그 점에서 $p$ 가 부분기울기이므로 $\partial u(\Omega)$ 가 반지름 $m/d$ 인 공을 포함한다. [Alexandrov–Bakelman–Pucci 추정](alexandrov-bakelman-pucci.md)의 기울기 상의 공과 같은 논법이다.

$\Omega$ 가 볼록이면 경계까지의 거리를 쓴 더 강한 판 $\vert u(x)\vert^n\le C_n d^{n-1}\mathrm{dist}(x,\partial\Omega)\thinspace Mu(\Omega)$ 도 성립한다.[^1]

## 비교 원리와 Dirichlet 문제

비교 원리. $\Omega$ 가 유계 열린집합이고 $u$, $v$ 가 $\overline\Omega$ 에서 연속인 볼록함수이며 $\Omega$ 의 Borel 집합에서 $Mu\ge Mv$, $\partial\Omega$ 에서 $u\le v$ 이면 $\Omega$ 에서 $u\le v$ 다.[^1] [최대값 원리](maximum-principle.md)의 비교 원리와 같은 꼴이다.

증명의 요지. $u-v$ 가 안쪽 점에서 양의 최댓값을 갖는다고 하면, 그 근처의 집합 $E=\lbrace u\gt v+\delta\rbrace$ 에서 경계에서 $u=v+\delta$ 이고 안에서 $v+\delta\lt u$ 이므로 $\partial u(E)\subset\partial v(E)$ 이다. $v$ 에 작은 이차식을 더하면 $Mv(E)$ 가 양의 양만큼 늘고 포함은 유지되므로 $Mu(E)\lt Mv(E)$ 가 되어 가정과 어긋난다.

[Dirichlet 문제](dirichlet-problem.md). $\Omega$ 가 유계 순볼록 열린집합이고 $g$ 가 $\partial\Omega$ 에서 연속이며 $\nu$ 가 $\Omega$ 위의 유한 Borel 측도이면, $Mu=\nu$ 이고 $\partial\Omega$ 에서 $u=g$ 인 Alexandrov 해가 하나 있다.[^1] 존재는 아래 해의 상한을 잡는 Perron 방법(Perron method)으로 증명하고, 유일성은 비교 원리에서 나온다.

# 활용

- 최적 수송. [최적 수송](optimal-transport.md)의 Brenier 정리가 주는 최적 사상 $T=\nabla\varphi$ 는 밀도 $f$, $g$ 사이에서 $g(\nabla\varphi)\det D^2\varphi=f$ 를 만족한다. 경계조건이 $\nabla\varphi$ 가 한 영역을 다른 영역으로 보낸다는 것인 Monge–Ampère 방정식이다.
- Gauss 곡률 지정. 그래프 $x_{n+1}=u(x)$ 의 Gauss 곡률은 $K=\det D^2u/(1+\vert Du\vert^2)^{(n+2)/2}$ 다. 곡률을 정해 두고 곡면을 찾는 문제는 오른쪽에 $Du$ 가 들어간 Monge–Ampère 방정식이다. [곡률](curvature.md)의 Gauss 곡률은 $n=2$ 인 경우다.
- 복소 Monge–Ampère 방정식(complex Monge–Ampère equation). [Kähler 다양체](kahler-manifolds.md)에서 Ricci 곡률을 정한 계량을 찾는 [Calabi 추측](calabi-conjecture.md)은 Kähler 퍼텐셜 $\phi$ 에 대한 방정식 $\det(g\_{i\bar j}+\partial_i\partial\_{\bar j}\phi)=e^F\det(g\_{i\bar j})$ 가 된다. Yau 는 이 방정식을 풀어 Calabi 추측을 증명했다.[^2]

[^1]: Cristian E. Gutiérrez, *The Monge–Ampère Equation*, Birkhäuser, 2001, 1 장. Monge–Ampère 측도, Alexandrov 해, Alexandrov 최대값 원리, 비교 원리, Dirichlet 문제의 존재와 유일성을 다룬다.
[^2]: Shing-Tung Yau, "On the Ricci curvature of a compact Kähler manifold and the complex Monge–Ampère equation. I", *Communications on Pure and Applied Mathematics* **31** (1978), 339–411.

# 연관 문서

## 선수지식

- [부분미분](subdifferential.md)
- [Alexandrov–Bakelman–Pucci 추정](alexandrov-bakelman-pucci.md)

## 더 알아보기

- [Calabi 추측](calabi-conjecture.md)

#analysis #differential_geometry #optimization
