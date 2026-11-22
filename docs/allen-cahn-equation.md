# Allen–Cahn 방정식

# 개요

**Allen–Cahn 방정식(Allen–Cahn equation)** 은 두 상태가 섞인 물질이 각 점에서 두 상태 가운데 하나로 갈라지고, 그 경계가 얇은 층으로 남아 움직이는 과정을 기술하는 반응 확산 방정식이다. 두 금속을 섞은 합금을 식히면 원자 배열이 두 가지 질서 가운데 하나를 고른 영역들로 나뉘고, 영역 사이의 경계는 시간이 지나면서 줄어들거나 펴진다.

Allen–Cahn 방정식은 퍼지는 항과 두 상태로 미는 항을 더해 이 과정을 적는다. 층의 폭을 $0$ 으로 보내면 경계가 [평균곡률 흐름](mean-curvature-flow.md)으로 움직인다.

# 직관

각 점의 상태를 $-1$ 과 $1$ 사이의 수 $u$ 로 적는다. $u=1$ 과 $u=-1$ 이 두 질서이고 $u=0$ 은 반씩 섞인 상태다. [상미분방정식](ordinary-differential-equations.md) $u'=u-u^3$ 을 풀면 $u(0)=0.1$ 에서 출발한 해는 $1$ 로, $u(0)=-0.1$ 에서 출발한 해는 $-1$ 로 간다. 이 항은 각 점을 가까운 쪽의 질서로 민다.

점마다 따로 이 방정식을 풀면 이웃한 점이 서로 다른 질서를 골라 경계가 날카롭게 끊긴다. 이웃과 값을 고르게 하는 [열방정식](heat-equation.md)의 항 $\Delta u$ 를 더하고, 미는 항의 세기를 $1/\varepsilon^2$ 로 키운다.

$$
u_t=\Delta u+\frac{1}{\varepsilon^2}(u-u^3)
$$

직선 위에서 시간에 의존하지 않는 해는 $u(x)=\tanh(x/(\sqrt2\varepsilon))$ 이다. $u''=(u^3-u)/\varepsilon^2$ 를 직접 미분해 확인할 수 있다. 이 해는 폭 $\varepsilon$ 정도의 구간에서 $-1$ 에서 $1$ 로 바뀐다. 작은 $\varepsilon$ 에서 해는 대부분의 점에서 $\pm 1$ 이고, 두 영역을 폭 $\varepsilon$ 의 층이 가른다.

평면에서 $u=1$ 인 원판을 $u=-1$ 이 둘러싸면 경계층은 원이고, 그 반지름 $R$ 은 $\varepsilon\to 0$ 에서 $dR/dt=-1/R$ 을 따른다. 그러므로 $R(t)^2=R_0^2-2t$ 이고 원판은 시각 $R_0^2/2$ 에 사라진다. 원의 곡률이 $1/R$ 이므로 경계는 곡률만큼의 속도로 안쪽으로 움직인다.

# 정의

$\Omega\subset\mathbb R^n$ 은 유계 열린집합이고 $\varepsilon\gt 0$ 이며 $W(s)=\tfrac14(1-s^2)^2$ 다. $W$ 는 $s=\pm 1$ 에서 $0$ 이 되는 이중 우물(double well)이다. 다음 방정식을 경계에서 $\partial u/\partial\nu=0$ 인 조건과 함께 **Allen–Cahn 방정식** 이라 한다[^1].

$$
u_t=\Delta u-\frac{1}{\varepsilon^2}W'(u)
$$

$W'(s)=s^3-s$ 이므로 직관 절의 방정식이다. 범함수 $E_\varepsilon$ 을 다음으로 둔다.

$$
E_\varepsilon(u)=\int_\Omega\Bigl(\frac{\varepsilon}{2}\vert\nabla u\vert^2+\frac{1}{\varepsilon}W(u)\Bigr)dx
$$

Allen–Cahn 방정식은 $\varepsilon u_t=-\delta E_\varepsilon/\delta u$ 다. 해는 $L^2$ 에서 $E_\varepsilon$ 이 가장 빨리 줄어드는 방향으로 움직인다.

# 성질

## 에너지의 감소

해를 따라 $\tfrac{d}{dt}E_\varepsilon(u)=-\varepsilon\int_\Omega u_t^2\thinspace dx\le 0$ 이다. 증명은 $E_\varepsilon$ 을 미분하고 경계조건으로 부분적분해 $\int u_t(-\varepsilon\Delta u+W'(u)/\varepsilon)$ 을 얻고, 괄호에 방정식을 넣는 것이다.

## 최대값 원리

초깃값이 $\vert u_0\vert\le 1$ 을 만족하면 모든 시각에 $\vert u\vert\le 1$ 이다. 상수 $1$ 과 $-1$ 이 해이고, [최대값 원리](maximum-principle.md)의 비교 원리로 해는 두 상수해 사이에 머문다.

## 경계층의 에너지

직관 절의 $\tanh$ 해에서는 두 항이 같아 $\tfrac\varepsilon2u'^2=W(u)/\varepsilon$ 이다. 그러므로 층 하나의 에너지는 $\int\sqrt{2W(u)}\thinspace u'\thinspace dx$ 이고, $s=u$ 로 바꾸면 다음 상수가 된다.

$$
\sigma=\int_{-1}^1\sqrt{2W(s)}\thinspace ds=\frac{2\sqrt2}{3}
$$

$\varepsilon\to 0$ 에서 $E_\varepsilon$ 은 $L^1$ 에서, $u=\pm 1$ 인 함수에 집합 $\lbrace u=1\rbrace$ 의 둘레의 $\sigma$ 배를 주는 범함수로 [Γ 수렴](gamma-convergence.md)한다. Γ 수렴 문서의 Modica–Mortola 정리를 이 문서의 $W$ 와 계수로 옮긴 것이다.

## 날카로운 경계의 극한

$\varepsilon\to 0$ 에서 Allen–Cahn 방정식의 해는 $u=1$ 인 영역과 $u=-1$ 인 영역으로 나뉘고, 그 경계는 법선 속도가 평균곡률인 평균곡률 흐름을 따른다. Evans–Soner–Souganidis 는 경계 흐름을 [점성해](viscosity-solutions.md)로 정의한 등위면 흐름으로의 수렴을 증명했고, Ilmanen 은 특이점이 생긴 뒤에도 성립하는 Brakke 흐름으로의 수렴을 증명했다[^2][^3].

## De Giorgi 추측

De Giorgi 추측(De Giorgi's conjecture)은 $\mathbb R^n$ 전체의 정상해 $\Delta u=W'(u)$ 가 $\vert u\vert\le 1$ 이고 한 좌표 방향으로 증가하며 $n\le 8$ 이면, 해가 단위벡터 $a$ 와 한 변수 함수 $g$ 로 $u(x)=g(a\cdot x)$ 꼴이라는 진술이다. $n=2$ 는 Ghoussoub–Gui 가, $n=3$ 은 Ambrosio–Cabré 가 증명했다. $n\ge 9$ 에서는 del Pino–Kowalczyk–Wei 가 한 방향의 함수가 아닌 해를 만들었다[^4].

# 활용

- 합금의 영역 성장. Allen 과 Cahn 은 질서가 다른 영역 사이의 경계가 곡률에 따라 움직여 영역이 점점 커진다는 관측을 이 방정식으로 설명했다[^1]. 상의 비율이 보존되는 경우는 [Cahn–Hilliard 방정식](cahn-hilliard-equation.md)을 쓴다.
- 평균곡률 흐름의 계산. 곡면을 직접 추적하는 대신 Allen–Cahn 방정식을 작은 $\varepsilon$ 으로 풀어 경계층의 위치를 읽는다. 곡면이 갈라지거나 합쳐져도 방정식은 그대로 풀린다. 이런 방법을 상장 방법(phase-field method)이라 한다.
- 극소곡면의 구성. 정상해의 경계층은 $\varepsilon\to 0$ 에서 [극소곡면](minimal-surfaces.md)으로 모인다. 콤팩트 다양체에서 $E_\varepsilon$ 의 최소최대(min-max) 임계점을 잡아 극소곡면의 존재를 얻는다.

[^1]: S. M. Allen, J. W. Cahn, "A microscopic theory for antiphase boundary motion and its application to antiphase domain coarsening", *Acta Metallurgica* **27** (1979), 1085–1095.

[^2]: L. C. Evans, H. M. Soner, P. E. Souganidis, "Phase transitions and generalized motion by mean curvature", *Communications on Pure and Applied Mathematics* **45** (1992), 1097–1123.

[^3]: T. Ilmanen, "Convergence of the Allen–Cahn equation to Brakke's motion by mean curvature", *Journal of Differential Geometry* **38** (1993), 417–461.

[^4]: M. del Pino, M. Kowalczyk, J. Wei, "On De Giorgi's conjecture in dimension N≥9", *Annals of Mathematics* **174** (2011), 1485–1569.

# 연관 문서

## 선수지식

- [열방정식](heat-equation.md)
- [Γ 수렴](gamma-convergence.md)

## 더 알아보기

- [Cahn–Hilliard 방정식](cahn-hilliard-equation.md)

#analysis #differential_geometry
