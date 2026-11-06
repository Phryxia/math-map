# Painlevé 방정식

# 개요

**Painlevé 방정식(Painlevé equations)** 은 움직이는 특이점이 극뿐인 2계 비선형 [상미분방정식](ordinary-differential-equations.md) 가운데 기존 특수함수로 풀리지 않는 여섯 가지 방정식이다. $y' = y^2$ 의 해 $y = 1/(c-x)$ 는 $x = c$ 에서 터지고 그 위치를 초깃값이 정하는데, 이런 움직이는 특이점이 분지점이면 해가 다가(多價)가 되어 전역적으로 다루기 어렵다. Painlevé 방정식의 해는 움직이는 특이점이 극뿐이어서 복소평면 전체에서 함수 하나로 정의되고, 선형 방정식의 특수함수가 하던 일을 비선형 문제에서 맡는다.

# 직관

선형 방정식 $y'' + p(x)y' + q(x)y = 0$ 의 해는 $p, q$ 가 정칙인 곳에서 정칙이다. 해가 터지는 자리는 계수가 정하고, 초깃값을 바꿔도 움직이지 않는다.

비선형 방정식 $y' = y^2$ 의 해 $y = 1/(c-x)$ 는 $x = c$ 에서 터지고, 그 자리 $c$ 를 초깃값이 정한다. 이 특이점은 극이다. $x$ 가 $c$ 둘레를 한 바퀴 돌아도 $y$ 는 같은 값으로 돌아오므로, 해는 복소평면에서 함수 하나로 정의된다.

$y' = y^3$ 의 해 $y = (2(c-x))^{-1/2}$ 도 초깃값이 정하는 자리 $x = c$ 에서 터진다. 이번에는 $x$ 가 $c$ 둘레를 한 바퀴 돌면 제곱근의 부호가 바뀐다. 같은 점에서 해가 두 값을 가지므로 복소평면 전체에서 함수 하나로 다룰 수 없다.

그래서 초깃값에 따라 움직이는 특이점이 $y' = y^2$ 처럼 극뿐인 방정식만 고른다. 2계 방정식 $y'' = F(x, y, y')$ 에서 이런 방정식을 모두 찾으면, 대부분은 이미 아는 함수로 풀리고 여섯 개가 남는다.

# 정의

## P 성질과 여섯 방정식

초깃값에 따라 위치가 바뀌는 특이점을 **움직이는 특이점(movable singularity)** 이라 한다. 방정식의 모든 해에 대해 움직이는 특이점이 극뿐일 때 그 방정식은 **Painlevé 성질(Painlevé property, $\mathbf{P}$ 성질)** 을 가진다. 직관 절의 $y'=y^2$ 는 $\mathbf{P}$ 성질을 가지고, $y'=y^3$ 은 움직이는 분지점이 있어 가지지 않는다. $y'' = F(x,y,y')$ 에서 $F$ 가 $y, y'$ 의 유리함수이고 $x$ 에 해석적으로 의존하는 경우를 조사하면 약 50 개의 표준형이 나오고, 그 가운데 44 개는 초등함수, 타원함수, 선형방정식의 해로 풀린다. 남는 여섯이 다음 표의 방정식이고, 이들을 **Painlevé 방정식** $\mathrm{P}\_{\mathrm{I}}$ 부터 $\mathrm{P}\_{\mathrm{VI}}$ 이라 한다.

| 이름 | 방정식 | 특수해가 되는 고전함수 |
|---|---|---|
| $\mathrm{P}\_{\mathrm{I}}$ | $q'' = 6q^2 + x$ | 없음 |
| $\mathrm{P}\_{\mathrm{II}}$ | $q'' = 2q^3 + xq + \alpha$ | Airy |
| $\mathrm{P}\_{\mathrm{III}}$ | $q'' = \dfrac{(q')^2}{q} - \dfrac{q'}{x} + \dfrac{\alpha q^2+\beta}{x} + \gamma q^3 + \dfrac{\delta}{q}$ | Bessel |
| $\mathrm{P}\_{\mathrm{IV}}$ | $q'' = \dfrac{(q')^2}{2q} + \dfrac32 q^3 + 4xq^2 + 2(x^2-\alpha)q + \dfrac{\beta}{q}$ | 포물기둥 함수 |
| $\mathrm{P}\_{\mathrm{V}}$ | (유리형, 매개변수 4개) | 합류초기하 |
| $\mathrm{P}\_{\mathrm{VI}}$ | 유리형, 매개변수 4개, 고정특이점 $0,1,\infty$ | 초기하 |

$\mathrm{P}\_{\mathrm{I}}$ 을 제외한 다섯은 매개변수가 특정 값일 때 고전함수로 풀리는 해를 가진다. 그 밖의 해를 **Painlevé 초월함수(Painlevé transcendent)** 라 한다.

## PII 의 Airy 해

$\alpha = \tfrac12$ 일 때 Riccati 방정식(Riccati equation)

$$
q' = q^2 + \frac{x}{2}
$$

의 해는 $\mathrm{P}\_{\mathrm{II}}$ 를 만족한다. Riccati 는 $q = -w'/w$ 로 선형화되고, 대입하면

$$
w'' = -\frac{x}{2}\thinspace w
$$

가 되어 $x = -2^{1/3}t$ 치환으로 [Airy 함수](airy-functions.md)의 방정식 $w''=tw$ 가 된다. 따라서 $q(x) = -\frac{d}{dx}\log \mathrm{Ai}\bigl(-2^{-1/3}x\bigr)$ 가 $\mathrm{P}\_{\mathrm{II}}$ 의 해다. Bäcklund 변환(Bäcklund transformation)이 $\alpha \mapsto \alpha \pm 1$ 을 실현하므로 $\alpha \in \mathbb Z + \tfrac12$ 전체에 대한 Airy 형 해의 사슬이 만들어진다.

## 등모노드로미 변형

$\mathrm{P}\_{\mathrm{II}}$ 의 [Lax 쌍](lax-pairs.md)은 $2\times2$ 선형계

$$
\frac{\partial \Psi}{\partial \lambda} = A(\lambda, x)\Psi, \qquad
\frac{\partial \Psi}{\partial x} = B(\lambda, x)\Psi
$$

이다. $A$ 는 $\lambda$ 의 2차 다항식, $B$ 는 1차 다항식이며 계수가 $q, q'$ 로 쓰인다. 두 식의 적합성 $\partial_x A - \partial_\lambda B + [A,B] = 0$ 이 정확히 $\mathrm{P}\_{\mathrm{II}}$ 다.

첫 식의 해 $\Psi$ 를 $\lambda$ 평면의 특이점 둘레로 이어 가면 해들이 [행렬](matrices.md)을 곱한 꼴로 섞인다. 이 행렬들을 **모노드로미 자료(monodromy data)** 라 한다. $\lambda = \infty$ 는 비정칙 특이점이므로 [Stokes 현상](stokes-phenomenon.md)이 일어나고, 그 Stokes 행렬들이 모노드로미 자료에 들어간다. $x$ 를 움직여도 이 자료가 변하지 않는 변형을 **등모노드로미 변형(isomonodromic deformation)** 이라 하고, $\mathrm{P}\_{\mathrm{II}}$ 의 해 하나가 자료 하나에 대응한다.

# 성질

## Hastings–McLeod 해

$\alpha = 0$ 인 $\mathrm{P}\_{\mathrm{II}}$

$$
q'' = 2q^3 + xq
$$

에서 조건 $q(x) \sim \mathrm{Ai}(x)$ $(x \to +\infty)$ 를 붙이면 해가 유일하게 결정된다. 이것이 **Hastings–McLeod 해(Hastings–McLeod solution)** 다. 큰 $x$ 에서 $q$ 가 작아 $2q^3$ 항을 무시할 수 있으므로 방정식이 Airy 방정식에 가까워진다.

반대쪽 점근은 다음과 같다.

$$
q(x) \sim \sqrt{\frac{-x}{2}} \qquad (x \to -\infty)
$$

한쪽에서 지수적으로 0 에 가까운 해가 다른 쪽에서 대수적으로 자란다. 두 점근을 잇는 연결 공식은 등모노드로미로 증명된다. 양쪽 점근을 각각 모노드로미 자료로 번역하면 그 자료가 $x$ 에 무관하므로 두 점근이 같은 자료로 표현된다. 조건을 $q \sim k\mathrm{Ai}(x)$ 로 놓으면 해의 실수축 위 거동이 $k$ 로 갈린다. $\lvert k\rvert \lt 1$ 에서는 $x \to -\infty$ 에서 진폭이 $\lvert x\rvert^{-1/4}$ 규모로 줄며 진동하는 Ablowitz–Segur 해(Ablowitz–Segur solution)이고, $k = \pm 1$ 에서는 Hastings–McLeod 해와 그 부호를 바꾼 해이며, $\lvert k \rvert \gt 1$ 에서는 실수축 위의 유한한 $x$ 에 극이 생긴다.

## 유리해와 변환군

$\mathrm{P}\_{\mathrm{II}}$ 는 $\alpha \in \mathbb Z$ 에서 유리해를 가진다. $\alpha = 0$ 에서 $q = 0$ , $\alpha = 1$ 에서 $q = -1/x$ , $\alpha = 2$ 에서 $q = \frac{1}{x} - \frac{3x^2}{x^3+4}$ 이고, 분자와 분모는 Yablonskii–Vorob'ev 다항식(Yablonskii–Vorob'ev polynomials)이라는 정수계수 다항식열이다.

Bäcklund 변환은 매개변수 공간에 아핀 Weyl 군(affine Weyl group)의 작용을 준다. $\mathrm{P}\_{\mathrm{II}}$ 에서는 $A_1^{(1)}$ 형, $\mathrm{P}\_{\mathrm{IV}}$ 에서는 $A_2^{(1)}$ 형이다.

## 극점과 해의 전역 구조

$\mathrm{P}\_{\mathrm{I}}$ 의 모든 해는 복소평면 전체에서 유리형이고 극점이 무한히 많다. 극점 근처에서 $q \sim (x-c)^{-2}$ 이고, 극점 위치 $c$ 와 Laurent 전개(Laurent expansion)의 한 계수가 자유롭게 정해져 초기조건 두 개에 대응한다. 특이점의 위치는 자유롭고 형태는 고정되어 있다.

# 활용

## Hastings–McLeod 해의 수치 적분

$x$ 가 큰 곳에서 Airy 점근으로 초깃값을 잡고 음의 방향으로 Runge–Kutta 방법(Runge–Kutta method)으로 적분하면 이 해를 얻는다. $\lvert k\rvert$ 가 $1$ 에서 조금만 벗어나도 $x\to-\infty$ 거동이 바뀌므로 초깃값의 오차가 크게 자란다.

## 분포함수

[Tracy–Widom 분포](tracy-widom.md)는 Hastings–McLeod 해 $q$ 로

$$
F_2(s) = \exp\left(-\int_s^\infty (x-s)\thinspace q(x)^2\thinspace dx\right)
$$

로 쓰인다. 무한차원 [Fredholm 행렬식](fredholm-determinant.md)이 2계 상미분방정식 하나로 바뀌므로 분포표를 수치적분으로 만들 수 있다.

2차원 [Ising 모형](ising-model.md)의 두 점 상관함수는 임계온도 근방에서 $\mathrm{P}\_{\mathrm{III}}$ 으로 쓰인다(1976). [최장 증가 부분수열](longest-increasing-subsequence.md)의 길이 분포, 육각형 타일링의 북극권, 양자장론의 형상인자(form factor)에도 Painlevé 초월함수가 나타나고, 이 문제들은 등모노드로미 변형으로 적힌다[^1].

## 적분가능성 판별

새로운 비선형 방정식의 적분가능성은 $\mathbf{P}$ 성질 검사로 먼저 시험한다. 해를 Laurent 급수로 놓고 움직이는 특이점 주변의 전개가 자유 매개변수를 충분히 가지는지 보는 ARS(Ablowitz–Ramani–Segur) 알고리즘이 이 검사다. 편미분방정식에는 진행파 환원(traveling wave reduction)을 거쳐 적용한다. KdV(Korteweg–de Vries) 방정식과 비선형 Schrödinger 방정식의 상사 환원(similarity reduction)이 Painlevé 방정식이 된다.

[^1]: Athanassios S. Fokas, Alexander R. Its, Andrei A. Kapaev, Victor Yu. Novokshenov, *Painlevé Transcendents: The Riemann–Hilbert Approach*, AMS (2006), 제1장(분류와 $\mathbf{P}$ 성질), 제4–5장(등모노드로미 변형과 $\mathrm{P}\_{\mathrm{II}}$ 의 연결 문제).

# 연관 문서

## 선수지식

- [Airy 함수](airy-functions.md)

## 더 알아보기

- [Tracy–Widom 분포](tracy-widom.md)

#analysis #complex_analysis #computation
