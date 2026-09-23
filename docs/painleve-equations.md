# Painlevé 방정식과 등모노드로미 변형

# 개요

2계 비선형 [상미분방정식](ordinary-differential-equations.md)의 해는 초기조건에 따라 위치가 달라지는 특이점을 가진다. $y' = y^2$ 의 해 $y = 1/(c-x)$ 는 $x = c$ 에서 터지고, 그 위치를 초기값이 정한다. 이런 움직이는 특이점이 분지점이면 해가 다가(多價)가 되어 전역적으로 다루기 어렵다.

$y'' = F(x, y, y')$ 꼴에서 움직이는 특이점이 극점뿐이라는 조건($\mathbf{P}$ 성질)을 만족하는 방정식을 분류하면, 알려진 함수로 풀리는 것을 제외하고 여섯 개가 남는다. 이것이 **Painlevé 방정식** $\mathrm{P}\_{\mathrm{I}}$ 부터 $\mathrm{P}\_{\mathrm{VI}}$ 이고, 그 해가 Painlevé 초월함수다.

무작위 행렬의 [Tracy–Widom 분포](tracy-widom.md), 2차원 Ising 모형의 상관함수, 최장증가부분수열의 길이 분포가 모두 이 여섯 개 가운데 하나로 쓰인다. [Airy 함수](airy-functions.md)가 선형 방정식의 표준형이라면 Painlevé 방정식은 비선형의 표준형이다.

# 직관

## 움직이는 특이점

선형 방정식 $y'' + p(x)y' + q(x)y = 0$ 의 해는 $p, q$ 가 정칙인 곳에서 정칙이다. 특이점의 위치가 계수로 고정되어 있어 초기조건과 무관하다. 비선형에서는 사정이 다르다. $y' = y^2$ 의 극점 위치 $c$ 는 초기값이 정한다.

움직이는 특이점이 극점이면 해는 유리형함수다. 분지점이면 사정이 다르다. $y' = y^3$ 의 해 $y = (2(c-x))^{-1/2}$ 는 $x = c$ 를 돌면 부호가 바뀌어 일가함수가 아니고, 복소평면 위에서 대역적으로 기술할 수 없다. $\mathbf{P}$ 성질은 대역적으로 정의되는 함수를 주는 방정식만 남기는 조건이다.

## P 성질과 적분가능성

$\mathbf{P}$ 성질을 만족하는 방정식은 **Lax 쌍**을 가진다. 곧 어떤 선형 방정식계의 적합성 조건으로 다시 쓰이고, 해의 대역적 거동이 그 선형 문제의 자료로 환원된다. 움직이는 분지점이 없다는 것은 해가 매개변수에 부드럽게 의존한다는 뜻이며, 그 부드러움이 배후의 선형 구조에서 온다. 적분가능한 비선형 방정식의 실용적 판별 기준으로 $\mathbf{P}$ 성질 검사(Painlevé 검정)가 쓰인다.

## 모노드로미를 보존하는 변형

선형 방정식 $\partial_\lambda \Psi = A(\lambda, x)\Psi$ 에서 $\lambda$ 평면의 특이점을 돌 때 해가 섞이는 방식이 **모노드로미 자료**이고, Stokes 행렬과 연결 행렬이 그 내용이다. 계수 $A$ 를 $x$ 로 변형하되 모노드로미 자료를 보존하려는 조건이 Painlevé 방정식이다.

이로부터 Painlevé 초월함수의 $x \to \pm\infty$ 점근을 잇는 **연결 문제**가 대수적으로 풀린다. 양쪽 끝의 점근을 각각 모노드로미 자료로 번역하면 그 자료가 $x$ 에 무관하므로 두 점근이 같은 자료로 표현된다. 선형 이론의 [Stokes 현상](stokes-phenomenon.md)에 대응하는 비선형 현상이다.

# 정의

## $\mathbf{P}$ 성질과 여섯 방정식

방정식의 모든 해에 대해 움직이는 특이점이 극점뿐일 때 그 방정식은 $\mathbf{P}$ **성질**을 가진다. $y'' = F(x,y,y')$ 에서 $F$ 가 $y, y'$ 의 유리함수이고 $x$ 에 해석적으로 의존하는 경우를 조사하면 약 50 개의 표준형이 나오고, 그 가운데 44 개는 초등함수, 타원함수, 선형방정식의 해로 풀린다. 남는 여섯이 다음이다.

| 이름 | 방정식 | 특수해가 되는 고전함수 |
|---|---|---|
| $\mathrm{P}\_{\mathrm{I}}$ | $q'' = 6q^2 + x$ | 없음 |
| $\mathrm{P}\_{\mathrm{II}}$ | $q'' = 2q^3 + xq + \alpha$ | Airy |
| $\mathrm{P}\_{\mathrm{III}}$ | $q'' = \dfrac{(q')^2}{q} - \dfrac{q'}{x} + \dfrac{\alpha q^2+\beta}{x} + \gamma q^3 + \dfrac{\delta}{q}$ | Bessel |
| $\mathrm{P}\_{\mathrm{IV}}$ | $q'' = \dfrac{(q')^2}{2q} + \dfrac32 q^3 + 4xq^2 + 2(x^2-\alpha)q + \dfrac{\beta}{q}$ | 포물린더 |
| $\mathrm{P}\_{\mathrm{V}}$ | (유리형, 매개변수 4개) | 합류초기하 |
| $\mathrm{P}\_{\mathrm{VI}}$ | 유리형, 매개변수 4개, 고정특이점 $0,1,\infty$ | 초기하 |

$\mathrm{P}\_{\mathrm{I}}$ 을 제외한 다섯은 매개변수가 특정 값일 때 고전함수로 풀리는 해를 가진다. 나머지 매개변수에서의 해가 새로운 초월함수다.

## $\mathrm{P}\_{\mathrm{II}}$ 의 Airy 해

$\alpha = \tfrac12$ 일 때 Riccati 방정식

$$
q' = q^2 + \frac{x}{2}
$$

의 해는 $\mathrm{P}\_{\mathrm{II}}$ 를 만족한다. Riccati 는 $q = -w'/w$ 로 선형화되고, 대입하면

$$
w'' = -\frac{x}{2}\thinspace w
$$

가 되어 $x = -2^{1/3}t$ 치환으로 Airy 방정식이 된다. 따라서 $q(x) = -\frac{d}{dx}\log \mathrm{Ai}\bigl(-2^{-1/3}x\bigr)$ 가 $\mathrm{P}\_{\mathrm{II}}$ 의 해다. **Bäcklund 변환**이 $\alpha \mapsto \alpha \pm 1$ 을 실현하므로 $\alpha \in \mathbb Z + \tfrac12$ 전체에 대한 Airy 형 해의 사슬이 만들어진다.

## 등모노드로미 변형

$\mathrm{P}\_{\mathrm{II}}$ 의 Lax 쌍은 $2\times2$ 선형계

$$
\frac{\partial \Psi}{\partial \lambda} = A(\lambda, x)\Psi, \qquad
\frac{\partial \Psi}{\partial x} = B(\lambda, x)\Psi
$$

이고, $A$ 는 $\lambda$ 의 2차 다항식, $B$ 는 1차 다항식이며 계수가 $q, q'$ 로 쓰인다. 두 식의 적합성 $\partial_x A - \partial_\lambda B + [A,B] = 0$ 이 정확히 $\mathrm{P}\_{\mathrm{II}}$ 다.

$\lambda = \infty$ 는 비정칙 특이점이므로 Stokes 현상이 일어나고, 그 Stokes 행렬들이 모노드로미 자료를 이룬다. $x$ 를 움직여도 이 자료가 변하지 않는 것이 **등모노드로미**이고, 해 하나가 자료 하나에 대응한다.

# 성질

## Hastings–McLeod 해

$\alpha = 0$ 인 $\mathrm{P}\_{\mathrm{II}}$

$$
q'' = 2q^3 + xq
$$

에서 조건 $q(x) \sim \mathrm{Ai}(x)$ $(x \to +\infty)$ 를 붙이면 해가 유일하게 결정된다. 이것이 **Hastings–McLeod 해**다. 큰 $x$ 에서 $q$ 가 작아 $2q^3$ 항을 무시할 수 있으므로 방정식이 Airy 방정식에 가까워진다.

반대쪽 점근은 다음과 같다.

$$
q(x) \sim \sqrt{\frac{-x}{2}} \qquad (x \to -\infty)
$$

한쪽에서 지수적으로 0 에 가까운 해가 다른 쪽에서 대수적으로 자란다. 두 점근을 잇는 연결 공식은 등모노드로미로 증명된다. 조건을 $q \sim k\mathrm{Ai}(x)$ 로 놓으면 $\lvert k\rvert \lt 1$ 에서 위와 같은 매끄러운 거동, $k = 1$ 에서 임계, $\lvert k \rvert \gt 1$ 에서 유한한 $x$ 의 극점으로 갈린다. 이 해는 양방향으로 불안정하다.

## 유리해와 변환군

$\mathrm{P}\_{\mathrm{II}}$ 는 $\alpha \in \mathbb Z$ 에서 유리해를 가진다. $\alpha = 0$ 에서 $q = 0$ , $\alpha = 1$ 에서 $q = -1/x$ , $\alpha = 2$ 에서 $q = \frac{1}{x} - \frac{3x^2}{x^3+4}$ 이고, 분자와 분모는 Yablonskii–Vorob'ev 다항식이라는 정수계수 다항식열이다.

Bäcklund 변환은 매개변수 공간에 아핀 Weyl 군의 작용을 준다. $\mathrm{P}\_{\mathrm{II}}$ 에서는 $A_1^{(1)}$ 형, $\mathrm{P}\_{\mathrm{IV}}$ 에서는 $A_2^{(1)}$ 형이다.

## 극점과 해의 전역 구조

$\mathrm{P}\_{\mathrm{I}}$ 의 모든 해는 복소평면 전체에서 유리형이고 극점이 무한히 많다. 극점 근처에서 $q \sim (x-c)^{-2}$ 이고, 극점 위치 $c$ 와 Laurent 전개의 한 계수가 자유롭게 정해져 초기조건 두 개에 대응한다. 특이점의 위치는 자유롭고 형태는 고정되어 있다.

# 활용

## Hastings–McLeod 해의 수치 적분

$x$ 가 큰 곳에서 Airy 점근으로 초기값을 잡고 음의 방향으로 Runge–Kutta 적분하면 이 해를 얻는다.

적분한 해는 음의 방향에서 $\sqrt{-x/2}$ 에 다가간다.

## 분포함수

[Tracy–Widom 분포](tracy-widom.md)는 Hastings–McLeod 해 $q$ 로

$$
F_2(s) = \exp\left(-\int_s^\infty (x-s)\thinspace q(x)^2\thinspace dx\right)
$$

로 쓰인다. 무한차원 [Fredholm 행렬식](fredholm-determinant.md)이 2계 상미분방정식 하나로 바뀌므로 분포표를 수치적분으로 만들 수 있다.

2차원 Ising 모형의 두 점 상관함수가 임계온도 근방에서 $\mathrm{P}\_{\mathrm{III}}$ 으로 쓰인다는 결과(1976)가 이 분야의 시작이다. 이후 최장증가부분수열, 육각형 타일링의 북극권, 양자장론의 형상인자에서 같은 함수들이 나타났다. 이 문제들이 등모노드로미 구조를 공유하기 때문이다.[^1]

## 적분가능성 판별

새로운 비선형 방정식의 적분가능성은 $\mathbf{P}$ 성질 검사로 먼저 시험한다. 해를 Laurent 급수로 놓고 움직이는 특이점 주변의 전개가 자유 매개변수를 충분히 가지는지 보는 ARS(Ablowitz–Ramani–Segur) 알고리즘이 표준이며, 편미분방정식에는 진행파 환원을 거쳐 적용한다. KdV 와 비선형 Schrödinger 방정식의 유사 환원이 Painlevé 방정식이 된다.

[^1]: Athanassios S. Fokas, Alexander R. Its, Andrei A. Kapaev, Victor Yu. Novokshenov, *Painlevé Transcendents: The Riemann–Hilbert Approach*, AMS (2006), 제1장(분류와 $\mathbf{P}$ 성질), 제4–5장(등모노드로미 변형과 $\mathrm{P}\_{\mathrm{II}}$ 의 연결 문제).

# 연관 문서

## 선수지식

- [Airy 함수](airy-functions.md)

## 더 알아보기

- [Tracy–Widom 분포와 Airy 핵](tracy-widom.md)

#analysis #complex_analysis #computation
