# Lipschitz 사상

# 개요

**Lipschitz 사상(Lipschitz map)** 은 두 점의 거리가 사상을 지나며 일정 비율 이상으로 늘어나지 않는 사상이다. $\sqrt x$ 는 $\lbrack 0,1\rbrack$ 에서 연속이지만 $0$ 근처에서 기울기가 끝없이 커져, $\sqrt x-\sqrt 0$ 이 $x$ 의 몇 배 이하라고 묶을 수 없다. Lipschitz 조건은 $\vert f(x)-f(y)\vert\le L\vert x-y\vert$ 로 기울기의 상한 $L$ 을 요구하고, $L\lt 1$ 이면 반복이 한 점으로 모여 미분방정식 해의 유일성과 반복법의 수렴이 증명된다.

# 직관

$f(x)=2x$ 에서는 $\vert f(x)-f(y)\vert=2\vert x-y\vert$ 이므로 두 점의 거리가 정확히 두 배가 된다. $f(x)=\sqrt x$ 에서 $y=0$ 으로 두면 $\vert f(x)-f(0)\vert/\vert x\vert=1/\sqrt x$ 이고, 이 비율은 $x=0.01$ 에서 $10$, $x=0.0001$ 에서 $100$ 이다. 이 비율은 두 점을 잇는 할선의 기울기이고, $\sqrt x$ 에서는 원점 근처에서 끝없이 커진다.

실함수에서 Lipschitz 조건은 두 점을 잇는 할선의 기울기가 모두 한 상수 안에 든다는 것이다. 미분가능한 함수라면 도함수가 유계인 것과 같다.

$f(x)=\sqrt x$ 는 $\lbrack 0,1\rbrack$ 에서 [균등연속](uniform-continuity.md)이지만 원점 근처에서 할선의 기울기가 발산하므로 Lipschitz 가 아니다. $f(x)=\lvert x\rvert$ 는 원점에서 미분가능하지 않지만 상수 $1$ 의 Lipschitz 사상이다. 미분가능성과 Lipschitz 조건은 서로를 함의하지 않는다.

# 정의

## Lipschitz 조건

거리공간 $(X,d_X)$ , $(Y,d_Y)$ 사이의 사상 $f$ 가 **Lipschitz** 라 함은 상수 $L\ge0$ 이 있어 모든 $x,x'$ 에서 다음이 성립하는 것이다.

$$
d_Y\bigl(f(x),f(x')\bigr)\le L\thinspace d_X(x,x')
$$

이런 $L$ 의 최솟값을 **Lipschitz 상수(Lipschitz constant)** 라 하고 $\mathrm{Lip}(f)$ 로 쓴다. $\mathrm{Lip}(f)\lt 1$ 이면 $f$ 를 **축소사상(contraction)** 이라 한다.

직관 절의 $f(x)=2x$ 는 $\mathrm{Lip}(f)=2$ 다. $f(x)=x/2$ 는 $\mathrm{Lip}(f)=1/2$ 인 축소사상이고, $\sin$ 은 $\vert\sin x-\sin y\vert\le\vert x-y\vert$ 이고 $0$ 근처에서 비율이 $1$ 에 가까우므로 $\mathrm{Lip}(\sin)=1$ 이다.

## 국소 Lipschitz

각 점의 어떤 근방에서 Lipschitz 조건이 성립하면 $f$ 가 **국소 Lipschitz(locally Lipschitz)** 라 한다. $f(x)=x^2$ 는 $\lbrack -R,R\rbrack$ 에서 $\vert x^2-y^2\vert=\vert x+y\vert\vert x-y\vert\le 2R\vert x-y\vert$ 이므로 $\mathbb R$ 에서 국소 Lipschitz 다. 할선의 기울기 $x+y$ 가 유계가 아니므로 $\mathbb R$ 에서 Lipschitz 는 아니다.

# 성질

## 국소 Lipschitz 와 Lipschitz

콤팩트 집합 위에서는 국소 Lipschitz 가 Lipschitz 를 함의하지만 열린집합 위에서는 그렇지 않다. 정의 절의 $x^2$ 가 $\mathbb R$ 에서의 반례다.

## 연속성의 사슬

$$
\text{축소}\subset\text{Lipschitz}\subset\text{균등연속}\subset\text{연속}
$$

$\delta=\varepsilon/L$ 로 두면 Lipschitz 에서 균등연속이 따라온다. 역은 성립하지 않고 $\sqrt x$ 가 반례다.

## 축소사상의 고정점

완비 거리공간 위의 축소사상은 고정점을 정확히 하나 가지며, 임의의 시작점에서 반복 $x\_{n+1}=f(x_n)$ 이 그 점으로 수렴한다([축약사상 고정점 정리](banach-fixed-point.md)). 수렴은 $d(x_n,x^\ast)\le L^n(1-L)^{-1}d(x_1,x_0)$ 으로 기하적이고, Lipschitz 상수 $L$ 이 오차의 감소율이다.

## Rademacher 정리

$\mathbb R^n$ 의 열린집합에서 정의된 Lipschitz 사상은 Lebesgue 측도로 거의 모든 점에서 미분가능하다([Rademacher 정리](rademacher-theorem.md)). 한 변수에서는 Lipschitz 함수가 절대연속(absolutely continuous)이므로 [유계변동 함수](bounded-variation.md)에 대한 미분정리로 따라오고, 그때 $\lvert f'\rvert\le\mathrm{Lip}(f)$ 가 거의 어디서나 성립한다.

## McShane 확장

$A\subseteq X$ 에서 정의된 실숫값 Lipschitz 함수는 상수를 늘리지 않고 $X$ 전체로 확장된다. 이것을 McShane 확장(McShane extension)이라 한다.

$$
\tilde f(x)=\inf_{a\in A}\bigl(f(a)+L\thinspace d(x,a)\bigr)
$$

이 식이 $A$ 에서 $f$ 와 일치하고 상수 $L$ 을 유지한다. 치역이 [Hilbert 공간](hilbert-spaces.md)인 경우의 확장이 Kirszbraun 정리(Kirszbraun theorem)다.

# 활용

## 미분방정식 해의 유일성

$y'=F(t,y)$ 에서 $F$ 가 $y$ 에 대해 국소 Lipschitz 이면 초깃값 문제의 해가 국소적으로 유일하게 존재한다([상미분방정식](ordinary-differential-equations.md)의 Picard–Lindelöf 정리(Picard–Lindelöf theorem)). 증명은 적분 방정식을 축소사상으로 보고 축약사상 고정점 정리를 적용한다. $y'=y^{2/3}$ 처럼 Lipschitz 가 아닌 우변에서는 해가 여럿이다.

## 최적화의 수렴률

[경사하강법](gradient-descent.md)의 수렴 보장은 목적함수의 기울기가 Lipschitz 라는 조건에서 나온다. 그 상수 $L$ 이 안전한 보폭 $\eta\le1/L$ 을 정한다.

## 수송 거리의 쌍대성

[최적 수송](optimal-transport.md)에서 $1$ 차 Wasserstein 거리(Wasserstein distance)는 Lipschitz 상수가 $1$ 이하인 함수들에 대한 상한으로 다시 쓰인다.

$$
W_1(\mu,\nu)=\sup\_{\mathrm{Lip}(g)\le1}\left(\int g\thinspace d\mu-\int g\thinspace d\nu\right)
$$

# 연관 문서

## 선수지식

- [균등연속](uniform-continuity.md)

## 더 알아보기

- [축약사상 고정점 정리](banach-fixed-point.md)
- [Rademacher 정리](rademacher-theorem.md)
- [Hölder 공간](holder-spaces.md)

#analysis #topology #optimization
