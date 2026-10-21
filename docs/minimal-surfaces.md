# 극소곡면

# 개요

**극소곡면(minimal surface, 최소곡면)** 은 [평균곡률](curvature.md)이 모든 점에서 $0$ 인 곡면이다. 경계를 고정하고 곡면을 조금씩 움직였을 때 넓이의 일차 변분이 $0$ 인 곡면과 같은 것이고, 철사 틀에 붙은 비눗막이 그 예다.

넓이는 곡면 전체가 정해야 값이 나오는 양이므로 극소곡면은 [변분법](calculus-of-variations.md)의 정류 조건으로 정의되고, 그 조건을 곡면의 휘어짐으로 옮긴 것이 평균곡률 $0$ 이다. 주어진 닫힌 곡선을 경계로 하는 극소곡면이 존재하는지 묻는 문제가 Plateau 문제(Plateau's problem)다.

# 직관

반지름이 $R$ 인 철사 고리 두 개를 같은 축 위에 거리 $2a$ 만큼 떨어뜨려 놓고 비눗물에 담갔다 꺼내면 두 고리 사이에 잘록한 막이 생긴다. 막은 표면장력 때문에 넓이를 줄이는 쪽으로 움직이므로, 이 막의 모양은 두 고리를 경계로 하는 곡면 가운데 넓이가 정류인 것이다.

축을 $x$ 축으로 놓고 막을 곡선 $y(x)$ 를 $x$ 축 둘레로 돌린 회전면이라 하면, 넓이는 다음 적분이다.

$$
A\lbrack y\rbrack=2\pi\int_{-a}^{a}y\sqrt{1+y'^2}\thinspace dx,\qquad y(\pm a)=R
$$

피적분함수가 [현수선](catenary.md)의 위치 에너지와 같은 꼴이고 $x$ 를 명시적으로 포함하지 않으므로, Beltrami 항등식이 $y/\sqrt{1+y'^2}=C$ 를 준다. 해는 $y=C\cosh(x/C)$ 이고, 이 곡선을 돌린 곡면을 현수면(catenoid)이라 한다.

현수면의 한 점에서 자오선 방향의 곡률과 그에 수직인 방향의 곡률을 계산하면 크기가 같고 부호가 반대다. 두 주곡률의 합이 $0$ 이므로 평균곡률이 $0$ 이다. 회전면에 한정하지 않고 곡면을 법선 방향으로 움직여 넓이의 변화를 계산해도, 일차 변분이 $0$ 인 조건은 평균곡률이 $0$ 인 조건으로 나온다. 이런 곡면을 극소곡면이라 한다.

# 정의

## 넓이의 일차 변분

$r:\Omega\to\mathbb R^3$ 을 매끄러운 곡면의 매개화, $n$ 을 단위법벡터, $H$ 를 [곡률](curvature.md) 문서의 평균곡률 $H=(k_1+k_2)/2$ 라 한다. 경계에서 $0$ 인 매끄러운 함수 $\varphi$ 로 곡면을 법선 방향으로 움직인 $r+\varepsilon\varphi n$ 의 넓이를 $A(\varepsilon)$ 이라 하면 다음이 성립한다.

$$
A'(0)=-2\int_\Omega H\varphi\thinspace dA
$$

경계에서 $0$ 인 모든 $\varphi$ 에 대해 $A'(0)=0$ 인 곡면을 **극소곡면** 이라 한다. 변분법의 [기본 보조정리](fundamental-lemma.md)로 이 조건은 $H\equiv 0$ 과 동치다.

반지름 $\rho$ 인 구면에 바깥 법선을 잡으면 $H=-1/\rho$ 이고, $\varphi=1$ 로 바깥으로 부풀리면 넓이가 $4\pi(\rho+\varepsilon)^2$ 이므로 $A'(0)=8\pi\rho$ 이고, 이 값은 $-2\int H\thinspace dA$ 와 같다.

## 극소곡면 방정식

곡면이 함수 $u(x,y)$ 의 그래프이면 넓이는 $A\lbrack u\rbrack=\iint\sqrt{1+\vert\nabla u\vert^2}\thinspace dx\thinspace dy$ 이고, Euler–Lagrange 방정식은 다음이다.

$$
\nabla\cdot\left(\frac{\nabla u}{\sqrt{1+\vert\nabla u\vert^2}}\right)=0
$$

미분을 풀어 쓰면 $(1+u_y^2)u_{xx}-2u_xu_yu_{xy}+(1+u_x^2)u_{yy}=0$ 이고, 이것을 **극소곡면 방정식(minimal surface equation)** 이라 한다. 좌변의 괄호 안 발산은 위쪽 법선에 대한 그래프의 평균곡률의 $2$ 배이므로, 이 방정식은 그래프에서 $H=0$ 을 쓴 것이다.

# 성질

## 예

- **평면.** 두 주곡률이 모두 $0$ 이다.
- **현수면(catenoid).** $y=C\cosh(x/C)$ 를 $x$ 축 둘레로 돌린 곡면이다. 평면을 빼면 극소곡면인 회전면은 현수면뿐이다(Euler, 1744)[^1].
- **나선면(helicoid).** $r(s,t)=(s\cos t,\thinspace s\sin t,\thinspace ct)$ 다. 직선들로 이루어진 극소곡면은 평면과 나선면뿐이다(Catalan 정리, Catalan's theorem)[^1].

## Gauss 곡률의 부호

$H=0$ 이면 $k_2=-k_1$ 이므로 Gauss 곡률은 $K=k_1k_2=-k_1^2\le 0$ 이다. 극소곡면의 모든 점은 안장형이거나 평평하다.

**정리.** $\mathbb R^3$ 에는 경계가 없는 콤팩트 극소곡면이 존재하지 않는다.

증명의 요지. 콤팩트 곡면 위에서 원점까지의 거리가 가장 큰 점을 잡는다. 그 점에서 곡면은 그 거리를 반지름으로 하는 구면 안쪽에 놓이고 구면에 접하므로, 모든 법곡률의 크기가 구면의 곡률 이상이고 부호가 같다. 그러면 $K\gt 0$ 이어서 $K\le 0$ 과 모순이다.

## 등온 좌표와 조화함수

매개화가 $E=G=\lambda$, $F=0$ 을 만족하는 좌표를 등온 좌표(isothermal coordinates)라 한다. 등온 좌표에서는 다음이 성립한다.

$$
r_{uu}+r_{vv}=2\lambda Hn
$$

따라서 등온 좌표로 쓴 곡면이 극소곡면인 것과 세 좌표함수가 모두 [조화함수](harmonic-functions.md)인 것은 동치다[^2]. 조화함수의 [최대 원리](maximum-principle.md)를 좌표함수마다 쓰면 극소곡면은 경계의 볼록 껍질 안에 놓인다.

## 정류와 최소의 구별

극소곡면은 넓이의 정류점이고 최솟값이라는 보장은 없다. 직관 절의 두 고리에서 $y(\pm a)=R$ 을 맞추려면 $R=C\cosh(a/C)$ 의 해 $C$ 가 있어야 한다. $t=a/C$ 로 쓰면 이 조건은 $a/R=t/\cosh t$ 이고, 우변의 최댓값은 $t\tanh t=1$ 인 $t\approx 1.1997$ 에서 약 $0.6627$ 이다. 그러므로 고리 사이 거리 $2a$ 가 $R$ 의 약 $1.3255$ 배를 넘으면 두 고리를 잇는 현수면이 없고, 비눗막은 끊어져 두 원판이 된다[^3].

## Bernstein 정리

**정리(Bernstein 정리, Bernstein's theorem).** 평면 전체에서 정의된 극소곡면 방정식의 해 $u:\mathbb R^2\to\mathbb R$ 는 일차함수다[^4]. 곧 그래프로 된 완비 극소곡면은 평면뿐이다.

$\mathbb R^n$ 에서 정의된 그래프로 같은 질문을 하면 $n\le 7$ 에서는 성립하고(Simons, 1968), $n\ge 8$ 에서는 일차함수가 아닌 해가 존재한다(Bombieri–De Giorgi–Giusti, 1969)[^5].

## Plateau 문제

**정리(Douglas–Radó 정리).** $\mathbb R^3$ 의 Jordan 곡선마다 그 곡선을 경계로 하고 원판과 위상동형인 매개화를 갖는 극소곡면이 존재한다[^6].

Douglas 는 넓이 대신 Dirichlet 에너지 $\tfrac12\iint(\vert r_u\vert^2+\vert r_v\vert^2)\thinspace du\thinspace dv$ 를 최소화했다. Dirichlet 에너지는 넓이 이상이고 등호는 등온 좌표에서 성립하므로, 에너지의 최소점은 등온 좌표로 쓴 넓이의 최소점이 된다. 최소점의 존재는 [변분법의 직접법](direct-method.md)으로 보인다.

# 활용

- **비선형 타원형 방정식의 정칙성.** 극소곡면 방정식은 비선형 타원형 방정식이다. 약한 해가 매끄럽다는 증명은 선형화한 방정식에 [타원형 정칙성](elliptic-regularity.md)과 [De Giorgi–Nash–Moser 정리](de-giorgi-nash-moser.md)를 쓴다.
- **일반상대성이론의 양의 질량 정리(positive mass theorem).** Schoen 과 Yau 는 질량이 음수라고 가정하면 넓이를 최소화하는 곡면이 존재하고, 그 곡면의 안정성 조건이 스칼라 곡률의 부호와 모순됨을 보여 정리를 증명했다[^7].
- **건축의 막 구조.** 경계 케이블을 고정한 인장막 지붕의 형상을 극소곡면 방정식의 수치해로 정한다. 모든 점에서 막의 장력이 같아진다.

[^1]: R. Osserman, *A Survey of Minimal Surfaces*, Dover, 1986, §1 과 §3. 회전 극소곡면과 선직 극소곡면의 분류.
[^2]: T. H. Colding, W. P. Minicozzi II, *A Course in Minimal Surfaces*, Graduate Studies in Mathematics 121, American Mathematical Society, 2011, 1 장 2 절.
[^3]: Colding, Minicozzi, 같은 책, 1 장. 두 고리 사이 현수면의 존재 범위.
[^4]: S. N. Bernstein, "Über ein geometrisches Theorem und seine Anwendung auf die partiellen Differentialgleichungen vom elliptischen Typus", *Mathematische Zeitschrift* 26 (1927), 551–558.
[^5]: J. Simons, "Minimal varieties in Riemannian manifolds", *Annals of Mathematics* 88 (1968), 62–105. E. Bombieri, E. De Giorgi, E. Giusti, "Minimal cones and the Bernstein problem", *Inventiones Mathematicae* 7 (1969), 243–268.
[^6]: J. Douglas, "Solution of the problem of Plateau", *Transactions of the American Mathematical Society* 33 (1931), 263–321. T. Radó, "On Plateau's problem", *Annals of Mathematics* 31 (1930), 457–469.
[^7]: R. Schoen, S.-T. Yau, "On the proof of the positive mass conjecture in general relativity", *Communications in Mathematical Physics* 65 (1979), 45–76.

# 연관 문서

## 선수지식

- [곡률](curvature.md)
- [변분법](calculus-of-variations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #optimization
