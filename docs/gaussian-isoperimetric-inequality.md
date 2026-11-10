# Gauss 등주부등식

# 개요

**Gauss 등주부등식(Gaussian isoperimetric inequality)** 은 [정규분포](normal-distribution.md)로 잰 확률이 정해진 집합 가운데, 집합을 일정한 폭만큼 넓혔을 때 확률이 가장 적게 늘어나는 것이 반공간이라는 부등식이다. 평면에 표준 정규분포를 놓고 확률이 $1/2$ 인 두 집합, 왼쪽 반평면 $\lbrace x_1\le 0\rbrace$ 과 원점 중심의 원판을 그린다. 두 집합을 폭 $1$ 만큼 넓히면 반평면의 확률은 약 $0.841$ 이 되고 원판의 확률은 약 $0.906$ 이 된다. 이 부등식은 어떤 모양의 집합도 반평면보다 적게 늘어나지 않음을 보이므로, 확률 $1/2$ 인 집합에서 거리 $r$ 이상 떨어진 점의 확률이 반평면의 경우인 $1-\Phi(r)$ 이하라는 것이 나온다.

# 직관

평면의 표준 정규분포 $\gamma_2$ 에서 원점 중심 반지름 $\rho$ 인 원판의 확률은 $1-e^{-\rho^2/2}$ 다. 확률이 $1/2$ 이 되는 반지름은 $\rho=\sqrt{2\log 2}\approx 1.177$ 이다. 폭 $1$ 만큼 넓힌 원판은 반지름이 $2.177$ 이고 확률은 $1-e^{-2.370}\approx 0.906$ 이다.

왼쪽 반평면 $\lbrace x_1\le 0\rbrace$ 의 확률은 첫 좌표만 보면 되므로 일차원 정규분포의 분포함수 $\Phi$ 로 $\Phi(0)=1/2$ 이다. 폭 $1$ 만큼 넓히면 $\lbrace x_1\le 1\rbrace$ 이고 확률은 $\Phi(1)\approx 0.841$ 이다. 같은 폭으로 넓혔을 때 반평면은 확률이 $0.341$ 늘고 원판은 $0.406$ 늘었다.

넓이를 Lebesgue 측도로 재면 같은 넓이의 집합 가운데 원판이 가장 적게 늘어나고, 이것이 [등주부등식](isoperimetric-inequality.md)이다. 정규분포로 재면 답이 반평면으로 바뀌는데, 이를 확인하려면 모든 모양과 비교해야 한다. 차원이 큰 구면 위의 균등분포를 몇 좌표로 사영하면 정규분포에 가까워지고, 구면 위에서는 같은 넓이의 집합 가운데 구면 모자(spherical cap)가 가장 적게 늘어난다.

구면 모자를 사영하면 반공간이 된다. 성질 절의 증명이 이 길을 간다.

# 정의

## 확대와 Gauss 측도

$\gamma_n$ 은 $\mathbb R^n$ 의 표준 정규분포이고, $\Phi(t)=\gamma_1((-\infty,t\rbrack)$, $\varphi=\Phi'$ 이다. 집합 $A\subset\mathbb R^n$ 과 $r\gt 0$ 에 대해 $A$ 의 **$r$ 확대($r$-enlargement)** 는 다음이다.

$$
A_r=\lbrace x\in\mathbb R^n:\mathrm{dist}(x,A)\le r\rbrace
$$

직관 절의 반평면 $H=\lbrace x_1\le 0\rbrace$ 에서 $H_1=\lbrace x_1\le 1\rbrace$ 이고, 반지름 $\rho$ 인 원판의 $1$ 확대는 반지름 $\rho+1$ 인 원판이다.

## Gauss 둘레

Borel 집합 $A$ 의 **Gauss 둘레(Gaussian perimeter)** 는 다음이다.

$$
\gamma_n^+(A)=\liminf_{r\to 0}\frac{\gamma_n(A_r)-\gamma_n(A)}{r}
$$

반공간 $H=\lbrace x_1\le a\rbrace$ 에서 $\gamma_n(H_r)=\Phi(a+r)$ 이므로 $\gamma_n^+(H)=\varphi(a)$ 다. 함수 $I=\varphi\circ\Phi^{-1}$ 을 **Gauss 등주 윤곽(Gaussian isoperimetric profile)** 이라 하고, 확률이 $p$ 인 반공간의 Gauss 둘레가 $I(p)$ 다. 확률 $1/2$ 에서 $I(1/2)=1/\sqrt{2\pi}\approx 0.399$ 다.

# 성질

## Borell–Sudakov–Tsirelson 정리

모든 Borel 집합 $A\subset\mathbb R^n$ 과 $r\gt 0$ 에서 다음이 성립하고, $A$ 가 반공간이면 등호가 성립한다[^1][^2].

$$
\Phi^{-1}\bigl(\gamma_n(A_r)\bigr)\ge\Phi^{-1}\bigl(\gamma_n(A)\bigr)+r
$$

$r\to 0$ 으로 보내면 $\gamma_n^+(A)\ge I(\gamma_n(A))$ 가 나온다. 확률이 같은 집합 가운데 반공간의 Gauss 둘레가 가장 작다. 부등식은 차원 $n$ 을 포함하지 않는다.

## 구면에서의 증명

$S^{N-1}(\sqrt N)$ 을 $\mathbb R^N$ 의 반지름 $\sqrt N$ 인 구면이라 하고 그 위의 균등분포를 $\sigma_N$ 이라 한다. 고정한 $n$ 에서 $\sigma_N$ 을 처음 $n$ 좌표로 사영한 분포는 $N\to\infty$ 에서 $\gamma_n$ 으로 수렴한다. 이것을 **Poincaré 극한(Poincaré limit)** 이라 한다. 구면 위에서는 구면에서는 [Lévy 등주부등식](levy-isoperimetric-inequality.md)이 같은 넓이의 집합 가운데 구면 모자의 확대가 가장 작다고 한다. $A\times\mathbb R^{N-n}$ 을 구면과 자른 집합을 같은 넓이의 모자와 비교하고 $N\to\infty$ 로 보내면, 모자의 사영은 반공간으로 가고 정리의 부등식이 나온다[^2].

## Bobkov 부등식

$f:\mathbb R^n\to\lbrack 0,1\rbrack$ 이 매끄러우면 다음이 성립한다[^3].

$$
I\Bigl(\int f\thinspace d\gamma_n\Bigr)\le\int\sqrt{I(f)^2+\vert\nabla f\vert^2}\thinspace d\gamma_n
$$

$f$ 를 $A$ 의 지시함수에 가까운 매끄러운 함수로 잡으면 $\gamma_n^+(A)\ge I(\gamma_n(A))$ 가 된다. Bobkov 는 이 부등식을 두 점 공간에서 증명하고, 곱공간으로 옮긴 뒤 [중심극한정리](central-limit-theorem.md)로 Gauss 판본을 얻었다. $f=\varepsilon g^2$ 을 넣고 $\varepsilon\to 0$ 으로 보내면 [로그 Sobolev 부등식](log-sobolev-inequality.md)의 Gauss 판본이 나온다[^3].

## 집중

$\gamma_n(A)\ge 1/2$ 이면 정리에서 $\Phi^{-1}(\gamma_n(A))\ge 0$ 이므로 다음이 성립한다.

$$
\gamma_n\bigl(\mathbb R^n\setminus A_r\bigr)\le 1-\Phi(r)\le\frac12e^{-r^2/2}
$$

$F$ 가 1-Lipschitz 이고 $M$ 이 $F$ 의 중앙값이면 $A=\lbrace F\le M\rbrace$ 에 대해 $A_r\subset\lbrace F\le M+r\rbrace$ 이므로 $\gamma_n(F\gt M+r)\le 1-\Phi(r)$ 이다. 1-Lipschitz 함수 $F(x)=x_1$ 에서 등호가 성립하므로 이 꼬리 상한은 상수까지 정확하다.

## Borell–TIS 부등식

$(X_t)\_{t\in T}$ 가 평균이 $0$ 인 [Gauss 과정](gaussian-processes.md)이고 $\sup_tX_t$ 가 거의 확실히 유한하며 $\sigma^2=\sup_t\mathbb E X_t^2$ 이라 한다. 그러면 $u\gt 0$ 에서 다음이 성립한다. 이것이 **Borell–TIS 부등식(Borell–TIS inequality, Tsirelson–Ibragimov–Sudakov)** 이다[^1][^4].

$$
P\Bigl(\sup_tX_t-\mathbb E\sup_tX_t\gt u\Bigr)\le e^{-u^2/(2\sigma^2)}
$$

유한한 $T$ 에서 $X=\Sigma^{1/2}Z$ 로 쓰면 $\sup_tX_t$ 는 표준 정규 벡터 $Z$ 의 $\sigma$-Lipschitz 함수이므로 집중 절의 결과에서 나온다. 이 증명은 중앙값 둘레의 꼬리 $1-\Phi(u/\sigma)$ 를 준다. 평균 둘레의 상한 $e^{-u^2/(2\sigma^2)}$ 은 같은 Lipschitz 함수에 [로그 Sobolev 부등식](log-sobolev-inequality.md)의 Herbst 논법을 쓰면 나온다.

## 잡음 안정성

Borell 은 같은 반공간이 잡음 안정성(noise stability)도 최대로 한다는 것을 보였다. 상관계수가 $\rho\in(0,1)$ 인 두 표준 정규 벡터 $g,h$ 와 $\gamma_n(A)$ 가 정해진 집합 $A$ 에서 $P(g\in A,\thinspace h\in A)$ 는 $A$ 가 반공간일 때 가장 크다. 이 정리는 [다항식의 불변 원리](invariance-principle-polynomials.md)에서 쓰인다.

# 활용

- [집중부등식](concentration-inequalities.md). Gauss 측도 위 Lipschitz 함수의 꼬리 $1-\Phi(r)$ 은 차원과 무관하고 상수까지 정확한 판본이다.
- [Gauss 과정](gaussian-processes.md)의 최댓값이 기댓값 둘레에 몰려 있다는 것을 Borell–TIS 부등식으로 보인다. 기댓값 자체의 크기는 연쇄(chaining) 논법이 따로 준다.
- [유일게임 추측](unique-games.md) 아래의 근사 불가능성 증명에서, 잡음 안정성 판본이 다수결이 가장 안정적이라는 정리(majority is stablest)의 Gauss 쪽 단계다.

[^1]: C. Borell, "The Brunn–Minkowski inequality in Gauss space", *Inventiones Mathematicae* 30 (1975), 207–216.
[^2]: V. N. Sudakov, B. S. Tsirel'son, "Extremal properties of half-spaces for spherically invariant measures", *Zapiski Nauchnykh Seminarov LOMI* 41 (1974), 14–24. 구면에서의 증명은 Michel Ledoux, *The Concentration of Measure Phenomenon*, American Mathematical Society, 2001, 2 장에도 있다.
[^3]: S. G. Bobkov, "An isoperimetric inequality on the discrete cube, and an elementary proof of the isoperimetric inequality in Gauss space", *Annals of Probability* 25 (1997), 206–214.
[^4]: Robert J. Adler, Jonathan E. Taylor, *Random Fields and Geometry*, Springer, 2007, 2.1 절.

# 연관 문서

## 선수지식

- [Lévy 등주부등식](levy-isoperimetric-inequality.md)
- [정규분포](normal-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #measure_theory
