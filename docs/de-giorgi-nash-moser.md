# De Giorgi–Nash–Moser 정리

# 개요

**De Giorgi–Nash–Moser 정리(De Giorgi–Nash–Moser theorem)** 는 계수가 불연속하게 뛰는 타원형 방정식의 해도 연속이라는 정리다. 열전도율이 $1$ 인 판과 $100$ 인 판을 직선을 따라 붙이고 가장자리 온도를 고정하면, 안쪽의 정상 온도 $u$ 는 $\mathrm{div}(a\nabla u)=0$ 을 만족하고 계수 $a$ 는 이음선에서 $1$ 에서 $100$ 으로 뛴다. 이음선을 지나는 열의 흐름이 같아야 하므로 $u$ 의 기울기는 이음선에서 꺾이고, $u$ 는 두 번 미분되지 않는다. 이 정리는 해의 최댓값과 최솟값의 차이가 반지름을 반으로 줄일 때마다 일정한 비율로 줄어든다는 것을 보여, 계수가 어떻게 뛰든 $u$ 가 Hölder 연속임을 증명한다.

# 직관

평면에서 $x_1\lt 0$ 인 쪽의 열전도율을 $1$, $x_1\gt 0$ 인 쪽을 $100$ 으로 두고 온도를

$$
u(x)=\begin{cases}100x_1 & x_1\lt 0\cr x_1 & x_1\ge 0\end{cases}
$$

로 잡는다. 열의 흐름 $a\thinspace\partial_1u$ 는 왼쪽에서 $1\cdot 100$, 오른쪽에서 $100\cdot 1$ 로 같아서 이음선에서 열이 쌓이지 않는다. $u$ 는 연속이지만 기울기가 $100$ 에서 $1$ 로 뛰므로, 방정식 $\mathrm{div}(a\nabla u)=0$ 을 이음선 위의 점에서 미분으로 읽을 수 없다. 이음선이 직선이 아니라 복잡하게 얽혀 있어도 $u$ 가 연속인지가 물음이다.

[Schauder 추정](schauder-estimates.md)은 점 $x_0$ 에서 계수를 $a(x_0)$ 로 고정하고 차이 $a(x)-a(x_0)$ 를 작은 오차로 다룬다. 계수가 지수 $\alpha$ 의 Hölder 조건을 만족하면 반지름 $r$ 인 공에서 그 차이가 $Cr^\alpha$ 로 작아진다. 이음선 위의 점을 중심으로 한 공은 아무리 작아도 $a=1$ 인 쪽과 $a=100$ 인 쪽을 함께 담으므로, 차이가 $99$ 아래로 줄지 않고 이 방법은 멈춘다.

계수에 대해 쓸 수 있는 것은 $1\le a\le 100$ 뿐이므로 방정식 자체에서 부등식을 끌어낸다. 약한 꼴

$$
\int\_\Omega a\nabla u\cdot\nabla\varphi\thinspace dx=0
$$

에 자른 값 $k$ 와 공 밖에서 $0$ 인 함수 $\eta$ 로 만든 $\varphi=\eta^2(u-k)^+$ 를 넣으면

$$
\int\_{B\_{r/2}}\vert\nabla(u-k)^+\vert^2dx\le\frac{C}{r^2}\int\_{B_r}\vert(u-k)^+\vert^2dx
$$

가 나오고 $C$ 는 계수의 위아래 한계의 비 $100$ 과 차원에만 의존한다. 이음선의 모양은 이 부등식에 나타나지 않는다.

$k$ 를 올리면 $(u-k)^+$ 가 $0$ 이 아닌 영역이 줄고, 위 부등식은 그 줄어드는 비율을 아래에서 묶는다. 이것을 되풀이하면 반지름을 반으로 줄일 때마다 $u$ 의 최댓값과 최솟값의 차이가 일정한 비율 이하로 줄고, 차이가 $r^\alpha$ 로 줄면 $u$ 는 Hölder 연속이다.

# 정의

## 발산형 방정식의 약한 해

$\Omega\subset\mathbb R^n$ 를 열린집합, $a^{ij}:\Omega\to\mathbb R$ 를 측정가능 함수라 하고 거의 모든 $x$ 와 모든 $\xi\in\mathbb R^n$ 에서

$$
\lambda\vert\xi\vert^2\le\sum\_{i,j}a^{ij}(x)\xi_i\xi_j\le\Lambda\vert\xi\vert^2
$$

라 하자. $0\lt \lambda\le\Lambda$ 를 **타원성 상수(ellipticity constants)** 라 한다. $u\in H^1\_{\mathrm{loc}}(\Omega)$([Sobolev 공간](sobolev-spaces.md))가 모든 $\varphi\in C_c^\infty(\Omega)$ 에서

$$
\int\_\Omega\sum\_{i,j}a^{ij}D_juD_i\varphi\thinspace dx=0
$$

을 만족하면 $u$ 를 발산형(divergence form) 방정식 $-\sum\_{i,j}D_i(a^{ij}D_ju)=0$ 의 **약한 해(weak solution)** 라 한다. 계수에 미분이 들어가지 않으므로 이 꼴에서는 계수가 측정가능이어도 식이 뜻을 갖는다.

직관 절의 예는 $n=2$, $a^{ij}=a\thinspace\delta_{ij}$ 이고 $\lambda=1$, $\Lambda=100$ 이다. $\nabla u$ 는 $x_1\lt 0$ 에서 $(100,0)$, $x_1\gt 0$ 에서 $(1,0)$ 이므로 $a\nabla u=(100,0)$ 이 평면 전체에서 상수다. 그러면 $\int a\nabla u\cdot\nabla\varphi\thinspace dx=100\int\partial_1\varphi\thinspace dx=0$ 이므로 $u$ 는 약한 해다.

## 진동

공 $B_r$ 에서 $u$ 의 **진동(oscillation)** 을

$$
\mathrm{osc}\_{B_r}u=\sup\_{B_r}u-\inf\_{B_r}u
$$

로 쓴다. $\mathrm{osc}\_{B_r}u\le Cr^\alpha$ 가 모든 작은 $r$ 에서 성립하는 것은 $u$ 가 지수 $\alpha$ 의 Hölder 조건을 만족하는 것과 같다([Hölder 공간](holder-spaces.md)). 직관 절의 예에서 원점 중심 공 $B_r$ 의 진동은 $r-(-100r)=101r$ 이므로 $\alpha=1$, $C=101$ 로 조건이 성립한다.

# 성질

## Caccioppoli 부등식

$u$ 가 $B_r$ 의 약한 해이고 $k\in\mathbb R$ 이면 다음 **Caccioppoli 부등식(Caccioppoli inequality)** 이 성립한다.

$$
\int\_{B\_{r/2}}\vert\nabla(u-k)^+\vert^2dx\le\frac{C}{r^2}\int\_{B_r}\vert(u-k)^+\vert^2dx
$$

$C$ 는 $n$ 과 $\Lambda/\lambda$ 에만 의존한다[^1].

증명의 요지. $B\_{r/2}$ 에서 $1$ 이고 $B_r$ 밖에서 $0$ 이며 $\vert\nabla\eta\vert\le C/r$ 인 절단함수(cutoff function) $\eta$ 를 잡고 $\varphi=\eta^2(u-k)^+$ 를 약한 꼴에 넣는다. 왼쪽을 전개하면 $(u-k)^+$ 의 기울기 제곱 항과 $\eta\nabla\eta$ 가 붙은 교차항이 나오고, 타원성이 앞 항을 아래에서 $\lambda$ 배로 묶는다. 교차항에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)과 Young 부등식(Young's inequality)을 쓰면 기울기 제곱 항의 일부와 $\vert\nabla\eta\vert^2(u-k)^{+2}$ 의 적분으로 갈라지고, 앞쪽을 왼쪽으로 넘긴다. $\square$

이 부등식은 해의 기울기를 해의 크기로 묶고 상수에 계수가 $\lambda,\Lambda$ 로만 들어가므로, 자른 값 $k$ 를 올리며 되풀이할 수 있다.

## De Giorgi–Nash–Moser 정리

$u$ 가 $B_1$ 에서 약한 해이면 $n$ 과 $\Lambda/\lambda$ 에만 의존하는 $\alpha\in(0,1)$ 과 $C$ 가 있어

$$
\lbrack u\rbrack\_{C^{0,\alpha}(B\_{1/2})}\le C\Vert u\Vert\_{L^2(B_1)}
$$

이다[^2].

증명의 요지. 먼저 Caccioppoli 부등식과 Sobolev 부등식(Sobolev inequality)을 번갈아 쓰며 자른 값 $k$ 를 등비로 올린다. 올린 단계마다 $(u-k)^+$ 가 $0$ 이 아닌 집합의 측도가 제곱으로 줄어들어 유한 단계 뒤 $0$ 이 되고, 여기서 $\sup\_{B\_{1/2}}u\le C\Vert u\Vert\_{L^2(B_1)}$ 가 유도된다. 다음으로 같은 반복을 $u$ 의 중간값을 기준으로 위아래에 적용하면 $\theta\lt 1$ 이 있어 $\mathrm{osc}\_{B\_{r/2}}u\le\theta\thinspace\mathrm{osc}\_{B_r}u$ 가 성립한다. 반지름을 반씩 줄이며 이 감소를 쌓으면 $\mathrm{osc}\_{B_r}u\le Cr^\alpha$ 이고 $\alpha=\log\_{1/2}\theta$ 다. $\square$

$\alpha$ 는 $\theta$ 로만 정해지고 $\theta$ 는 Caccioppoli 부등식의 상수에서 나온다. 증명의 어느 단계도 계수의 연속성을 사용하지 않는다.

## Moser 의 Harnack 부등식

$u$ 가 $B_1$ 에서 음이 아닌 약한 해이면 다음 Harnack 부등식(Harnack inequality)이 성립한다.

$$
\sup\_{B\_{1/2}}u\le C\inf\_{B\_{1/2}}u
$$

$C$ 는 $n$ 과 $\Lambda/\lambda$ 에만 의존한다[^3].

증명의 요지. $\varphi=\eta^2u^p$ 꼴의 시험함수로 $\Vert u\Vert\_{L^{p}}$ 사이의 역부등식을 만들고 $p$ 를 양수에서 음수로 넘긴다. $p=0$ 근방에서는 $\log u$ 에 대한 추정으로 건너간다. 양의 $p$ 쪽 극한이 $\sup u$, 음의 $p$ 쪽 극한이 $\inf u$ 를 주므로 두 쪽을 이으면 부등식이 나온다. $\square$

Harnack 부등식에 $u-\inf\_{B_r}u$ 와 $\sup\_{B_r}u-u$ 를 차례로 넣으면 진동 감소가 바로 나온다. De Giorgi 의 반복과 Moser 의 반복은 같은 결론에 이르는 두 증명이다.

## 지수와 타원성 비

$\alpha$ 를 $\Lambda/\lambda$ 와 무관하게 잡을 수는 없다. 평면에서 계수를 $\Lambda/\lambda$ 에 맞춰 고른 방정식의 해 가운데 $C^{0,\beta}$ 에 들지 않는 것이 있고, 그 $\beta$ 가 $\Lambda/\lambda\to\infty$ 에서 $0$ 으로 간다[^4].

# 활용

- Hilbert 의 열아홉째 문제(Hilbert's nineteenth problem). 볼록 적분범함수의 최소점이 매끄러운지 묻는 문제다. 최소점은 [변분법](calculus-of-variations.md)의 Euler–Lagrange 방정식(Euler–Lagrange equation)의 약한 해이고, 그 방정식을 한 번 미분하면 미분한 함수가 유계 측정가능 계수의 발산형 방정식을 만족한다. 이 정리가 그 함수의 Hölder 연속성을 주고, 그러면 원래 방정식의 계수가 Hölder 연속이 되어 Schauder 추정을 되풀이 쓸 수 있다.
- 타원형 정칙성의 측정가능 계수 판. [타원형 정칙성](elliptic-regularity.md) 문서가 계수가 유계 측정가능일 때의 결론으로 든 것이 이 정리다. $H^k$ 판과 달리 도함수의 차수를 올리지 않고 해 자신의 정칙성만 준다.
- Calderón–Zygmund 이론과의 분업. [Calderón–Zygmund 이론](calderon-zygmund-theory.md)의 $W^{2,p}$ 추정은 비발산형 방정식에서 계수의 연속성을 쓴다. 이 정리는 발산형에서 연속성 없이 성립하고 2계 도함수를 주지 않는다.
- 비선형 변분 문제. [극소곡면](minimal-surfaces.md) 방정식과 $p$-Laplace 방정식($p$-Laplace equation)의 정칙성 증명은 선형화한 방정식에 이 정리를 쓴 뒤, 얻은 정칙성으로 계수의 정칙성을 높이는 순서를 따른다.

[^1]: Qing Han, Fanghua Lin, *Elliptic Partial Differential Equations*, 2판, American Mathematical Society, 2011, 4.1 절.
[^2]: Ennio De Giorgi, "Sulla differenziabilità e l'analiticità delle estremali degli integrali multipli regolari", *Memorie della Accademia delle Scienze di Torino* **3** (1957), 25–43. John Nash, "Continuity of solutions of parabolic and elliptic equations", *American Journal of Mathematics* **80** (1958), 931–954 가 포물형 판을 독립으로 얻었다.
[^3]: Jürgen Moser, "A new proof of De Giorgi's theorem concerning the regularity problem for elliptic differential equations", *Communications on Pure and Applied Mathematics* **13** (1960), 457–468.
[^4]: Norman G. Meyers, "An example of non-uniqueness in the theory of quasi-conformal mappings", *Archive for Rational Mechanics and Analysis* **14** (1963), 194–198. Han, Lin, 같은 책 4.4 절의 주가 이 예를 지수의 한계로 정리한다.

# 연관 문서

## 선수지식

- [타원형 정칙성](elliptic-regularity.md)
- [Hölder 공간](holder-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #measure_theory
