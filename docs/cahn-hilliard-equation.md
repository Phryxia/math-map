# Cahn–Hilliard 방정식

# 개요

**Cahn–Hilliard 방정식(Cahn–Hilliard equation)** 은 두 성분이 섞인 혼합물이 각 성분의 총량을 지킨 채 두 상으로 갈라지는 과정을 기술하는 4계 확산 방정식이다. 고르게 섞인 합금을 급히 식히면 두 금속 원자가 제자리를 바꾸며 모여, 처음에는 가는 무늬가 생기고 시간이 지나면 무늬가 굵어진다.

[Allen–Cahn 방정식](allen-cahn-equation.md)은 각 점이 상태를 바꿀 수 있어서 한 성분의 총량이 줄어들 수 있다. Cahn–Hilliard 방정식은 상태의 변화를 흐름의 발산으로 적어 총량을 보존한다.

# 직관

각 점의 조성을 $-1$ 과 $1$ 사이의 수 $u$ 로 적는다. $u=1$ 은 금속 A 만, $u=-1$ 은 금속 B 만 있는 상태다. Allen–Cahn 방정식에서 $u=1$ 인 원판은 반지름이 줄어 사라지는데, 이때 금속 A 의 양 $\int u$ 가 줄어든다. 원자는 사라지지 않으므로 합금에서는 $\int u$ 가 일정해야 한다.

총량을 지키려면 $u_t$ 를 어떤 흐름 $J$ 의 발산 $-\mathrm{div}\thinspace J$ 로 쓴다. 원자는 화학 퍼텐셜 $\mu$ 가 높은 곳에서 낮은 곳으로 움직이므로 $J=-\nabla\mu$ 로 둔다. $\mu$ 는 Allen–Cahn 방정식에서 $u$ 를 미는 양 $W'(u)-\varepsilon^2\Delta u$ 다.

$$
u_t=\Delta\mu,\qquad\mu=W'(u)-\varepsilon^2\Delta u
$$

반씩 섞인 상태 $u=0$ 에 작은 물결 $\delta\cos(kx)$ 를 더한다. $W(s)=\tfrac14(1-s^2)^2$ 이면 $W''(0)=-1$ 이므로, 방정식을 $\delta$ 에 대해 선형화하면 물결의 진폭은 다음 비율로 자란다.

$$
\lambda(k)=k^2-\varepsilon^2k^4
$$

$0\lt k\lt 1/\varepsilon$ 인 물결은 모두 자라고, $k=1/(\sqrt2\varepsilon)$ 에서 가장 빨리 자란다. 그래서 처음 생기는 무늬의 간격은 $2\pi\sqrt2\varepsilon$ 정도로 정해진다. 이 현상을 **스피노달 분해(spinodal decomposition)** 라 한다.

# 정의

$\Omega\subset\mathbb R^n$ 은 유계 열린집합이고 $\varepsilon\gt 0$ 이며 $W(s)=\tfrac14(1-s^2)^2$ 다. 다음 방정식을 경계에서 $\partial u/\partial\nu=\partial\mu/\partial\nu=0$ 인 조건과 함께 **Cahn–Hilliard 방정식** 이라 한다[^1].

$$
u_t=\Delta\mu,\qquad\mu=W'(u)-\varepsilon^2\Delta u
$$

$\mu$ 를 **화학 퍼텐셜(chemical potential)** 이라 한다. 범함수 $E$ 를 다음으로 두면 $\mu$ 는 $E$ 의 $L^2$ 변분 $\delta E/\delta u$ 다.

$$
E(u)=\int_\Omega\Bigl(\frac{\varepsilon^2}{2}\vert\nabla u\vert^2+W(u)\Bigr)dx
$$

직관 절의 선형화에서 일반적인 평균 조성 $m$ 을 쓰면 $\lambda(k)=-k^2(W''(m)+\varepsilon^2k^2)$ 다. $W''(m)=3m^2-1$ 이므로 균일한 상태가 불안정한 조성은 $\vert m\vert\lt 1/\sqrt3$ 이다.

# 성질

## 총량의 보존

해를 따라 $\int_\Omega u\thinspace dx$ 는 일정하다. $\tfrac{d}{dt}\int u=\int\Delta\mu$ 이고, 경계조건 $\partial\mu/\partial\nu=0$ 으로 이 적분은 $0$ 이다.

## 에너지의 감소

해를 따라 $\tfrac{d}{dt}E(u)=-\int_\Omega\vert\nabla\mu\vert^2dx\le 0$ 이다. $E$ 를 미분해 부분적분하면 $\int\mu u_t=\int\mu\Delta\mu$ 이고, 한 번 더 부분적분한다. Cahn–Hilliard 방정식은 평균이 $0$ 인 함수의 공간에 $H^{-1}$ 내적을 준 공간에서 $E$ 의 기울기 흐름이다.

## 최대값 원리의 부재

4계 방정식이어서 [최대값 원리](maximum-principle.md)가 없다. $\vert u_0\vert\le 1$ 이어도 해가 $1$ 을 넘을 수 있다. Allen–Cahn 방정식에서 상수해 $\pm 1$ 사이에 해를 가두던 비교 논증이 여기서는 성립하지 않는다.

## 평형 상태와 등주 문제

총량 $\int u=m\vert\Omega\vert$ 를 고정한 $E$ 의 최소점이 평형 상태다. $E/\varepsilon$ 은 $\varepsilon\to 0$ 에서 총량 제약을 지킨 채 둘레의 상수배로 [Γ 수렴](gamma-convergence.md)한다. 그러므로 작은 $\varepsilon$ 의 평형 상태에서 한 상이 차지하는 영역은 부피를 고정한 채 둘레가 최소인 집합에 가깝다. $\mathbb R^n$ 에서는 [등주부등식](isoperimetric-inequality.md)의 등호 집합인 공이다.

## 날카로운 경계의 극한

$\varepsilon\to 0$ 이고 시간을 $1/\varepsilon$ 배로 늘리면, 두 상의 경계는 Mullins–Sekerka 문제(Mullins–Sekerka problem)를 따라 움직인다. 각 상 안에서 $\mu$ 는 조화함수이고, 경계에서 $\mu$ 는 평균곡률에 비례하며, 경계의 법선 속도는 양쪽에서 $\nabla\mu$ 의 법선 성분의 차다[^2][^3]. 경계가 곡률만으로 움직이는 Allen–Cahn 방정식과 달리 이 움직임은 경계 전체의 모양에 의존한다.

## 굵어짐의 속도

스피노달 분해 뒤 무늬의 길이 척도는 대략 $t^{1/3}$ 로 자란다. Kohn 과 Otto 는 에너지가 시간 평균의 뜻에서 $t^{-1/3}$ 보다 빨리 줄어들 수 없다는 하한을 증명했다[^4].

# 활용

- 합금과 고분자 혼합물. 급냉한 합금의 미세 조직과 고분자 혼합물의 상분리 무늬를 이 방정식의 해로 계산한다. 무늬의 처음 간격은 직관 절의 가장 빨리 자라는 물결의 간격이다.
- 영상 복원. 지워진 영역을 둘러싼 영상의 값을 경계조건으로 두고 Cahn–Hilliard 방정식을 풀어 끊긴 모서리를 잇는다. 4계 항이 모서리의 방향을 이어 준다.
- 다상 유체. 두 유체의 경계를 날카로운 곡면 대신 폭 $\varepsilon$ 의 층으로 적고, [Navier–Stokes 방정식](navier-stokes-equations.md)과 연립해 방울의 합쳐짐과 갈라짐을 계산한다.

[^1]: J. W. Cahn, J. E. Hilliard, "Free energy of a nonuniform system. I. Interfacial free energy", *The Journal of Chemical Physics* **28** (1958), 258–267.

[^2]: R. L. Pego, "Front migration in the nonlinear Cahn–Hilliard equation", *Proceedings of the Royal Society of London A* **422** (1989), 261–278.

[^3]: N. D. Alikakos, P. W. Bates, X. Chen, "Convergence of the Cahn–Hilliard equation to the Hele-Shaw model", *Archive for Rational Mechanics and Analysis* **128** (1994), 165–205.

[^4]: R. V. Kohn, F. Otto, "Upper bounds on coarsening rates", *Communications in Mathematical Physics* **229** (2002), 375–395.

# 연관 문서

## 선수지식

- [Allen–Cahn 방정식](allen-cahn-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
