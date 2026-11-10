# Resurgence 이론

# 개요

**Resurgence 이론(resurgence theory)** 은 발산하는 [점근급수](asymptotic-series.md)에서 그 급수가 놓친 지수적으로 작은 항까지 되찾는 Écalle 의 이론이다. [Airy 함수](airy-functions.md)를 변수가 큰 쪽에서 전개하면 계수가 $n!$ 규모로 커지는 급수가 나오고, 이 급수를 아무리 길게 적어도 지수적으로 작은 항은 보이지 않는다. Resurgence 이론은 급수를 Borel 변환으로 옮겨 그 특이점에서 빠진 항을 계산한다.

# 직관

방정식 $f'+f=1/x$ 를 $x$ 가 큰 곳에서 풀려고 해를 $1/x$ 의 거듭제곱으로 놓는다. 차수별로 계수를 맞추면 $\tilde f(x)=\sum_{n\ge 0}n!\thinspace x^{-n-1}$ 이 나온다. 이웃한 항의 비가 $(n+1)/x$ 이므로 어느 $x$ 에서도 이 급수는 수렴하지 않는다.

방정식의 실제 해들은 서로 $Ce^{-x}$ 만큼 다르다. $e^{-x}$ 는 $x\to\infty$ 에서 어떤 $x^{-n}$ 보다도 빨리 작아지므로, $\tilde f$ 의 항을 아무리 많이 적어도 해들 사이의 차이 $Ce^{-x}$ 는 나타나지 않는다.

항 $x^{-n-1}$ 을 $\zeta^n/n!$ 로 바꾸면 $n!$ 이 지워져 $\sum_{n\ge 0}\zeta^n=1/(1-\zeta)$ 가 나온다. 이 함수에서 $x$ 의 함수를 다시 얻는 적분 $\int_0^\infty e^{-x\zeta}/(1-\zeta)\thinspace d\zeta$ 는 경로가 $\zeta=1$ 을 지나므로, 그 점을 위로 돌지 아래로 돌지 정해야 한다.

두 경로의 적분값의 차는 $\zeta=1$ 의 [유수](residue-theorem.md)에서 나오고 $2\pi i\thinspace e^{-x}$ 다. 급수에 나타나지 않던 $e^{-x}$ 항이 $\zeta=1$ 의 특이점에서 나온다. 특이점의 위치 $1$ 이 지수 $e^{-1\cdot x}$ 의 $1$ 이고, 계수 $n!$ 의 성장이 원점에서 그 특이점까지의 거리 $1$ 을 정한다.

# 정의

## Borel 변환과 측면 합

형식급수 $\tilde f(x)=\sum_{n\ge 0}c_nx^{-n-1}$ 의 **Borel 변환(Borel transform)** 은 $\hat f(\zeta)=\sum_{n\ge 0}c_n\zeta^n/n!$ 이다. 방향 $\theta$ 의 **Borel 합(Borel sum)** 은 다음 적분이다.

$$
\mathcal S_\theta\tilde f(x)=\int_0^{\infty e^{i\theta}}e^{-x\zeta}\thinspace\hat f(\zeta)\thinspace d\zeta
$$

이 반직선 위에 $\hat f$ 의 특이점이 있으면 $\theta$ 를 **특이 방향(singular direction)** 이라 하고, 반직선의 바로 위와 아래로 비낀 적분을 **측면 합(lateral sum)** $\mathcal S_{\theta^+}$, $\mathcal S_{\theta^-}$ 이라 한다. 직관 절의 $\tilde f=\sum n!\thinspace x^{-n-1}$ 은 $\hat f=1/(1-\zeta)$ 이고, $\theta=0$ 이 특이 방향이며 $\mathcal S_{0^+}\tilde f-\mathcal S_{0^-}\tilde f=2\pi i\thinspace e^{-x}$ 다. Borel 변환의 수치 계산은 [Borel–Padé 재합산](borel-pade.md)에서 다룬다.

## Transseries

지수와 거듭제곱을 함께 허용한 형식 표현

$$
F(x,\sigma) = \sum_{k \ge 0}\sigma^{k}\thinspace e^{-kAx}\thinspace x^{-kb}\thinspace\tilde\Phi_k(x),
\qquad
\tilde\Phi_k(x) = \sum_{n\ge0}a_{n}^{(k)}x^{-n}
$$

를 **transseries** 라 한다. 이런 표현들의 집합은 덧셈, 곱셈, $\partial_x$ 에 대해 닫혀 있고, 이 구조를 **transseries 미분대수(differential algebra of transseries)** 라 한다. 각 $k$ 를 **sector** 라 하고, $k=0$ 이 보통의 점근급수, $k \ge 1$ 이 비섭동(non-perturbative) sector 다. 직관 절의 방정식의 해는 $A=1$, $b=0$, $\tilde\Phi_0=\tilde f$, $\tilde\Phi_1=1$, $\tilde\Phi_k=0$ $(k\ge 2)$ 인 transseries $\tilde f+\sigma e^{-x}$ 다.

## Stokes 자동사상

측면 합 사이의 관계를 다음으로 적을 때, transseries 위의 사상 $\mathfrak S_\theta$ 를 **Stokes 자동사상(Stokes automorphism)** 이라 한다.

$$
\mathcal S_{\theta^+} = \mathcal S_{\theta^-}\circ\thinspace\mathfrak S_\theta
$$

직관 절의 예에서 $\mathfrak S_0\tilde f=\tilde f+2\pi i\thinspace e^{-x}$ 이고, transseries 로는 $\sigma\mapsto\sigma+2\pi i$ 다.

## Alien 미분

$\hat f$ 를 $\zeta = \omega$ 까지 해석적으로 연장한 뒤, 도중의 특이점들을 위쪽 $+$ 나 아래쪽 $-$ 로 우회하는 모든 경로를 고려한다. $\omega$ 방향의 특이점이 $\omega_1, \dots, \omega_r=\omega$ 로 늘어서 있을 때 **alien 미분(alien derivative)** $\Delta_\omega$ 를 다음으로 정의한다.

$$
\Delta_\omega \tilde f = \sum_{\epsilon \in \lbrace\pm\rbrace^{r-1}} \frac{p(\epsilon)!\thinspace q(\epsilon)!}{r!}\thickspace\mathrm{sing}\_{\omega}\bigl(\text{경로 } \epsilon \text{ 를 따른 연장}\bigr)
$$

$p, q$ 는 $\epsilon$ 안의 $+$ 와 $-$ 의 개수이고, $\mathrm{sing}\_\omega$ 는 $\zeta=\omega$ 에서의 특이 부분을 $x$ 공간의 급수로 옮겨 적은 것이다. 특이점이 하나뿐이면 합이 한 항으로 줄어 특이점을 돌 때 생기는 불연속과 같다. 직관 절의 예에서 특이점은 $\zeta=1$ 하나이고 $\Delta_1\tilde f=2\pi i$ 다.

**점찍은 alien 미분(dotted alien derivative)** 은 $\dot\Delta_\omega = e^{-\omega x}\Delta_\omega$ 다. 직관 절의 예에서 $\dot\Delta_1\tilde f=2\pi i\thinspace e^{-x}$ 다.

특이점들이 유한하거나 격자를 이루고 $\Delta_\omega\tilde f$ 가 다시 같은 종류의 대상이 되는 함수를 **resurgent 함수(resurgent function)** 라 한다. 직관 절의 $\tilde f$ 는 $\Delta_1\tilde f=2\pi i$ 가 상수이므로 resurgent 함수다.

# 성질

## Leibniz 법칙

Borel 평면에서 곱은 [합성곱](convolution.md)이다.

$$
\widehat{fg}(\zeta) = \int_0^{\zeta}\hat f(\eta)\thinspace\hat g(\zeta - \eta)\thinspace d\eta
$$

이 적분이 $\zeta = \omega$ 에서 특이해지는 것은 $\hat f$ 가 $\omega$ 에서 특이하고 $\hat g$ 가 원점 근처에서 정칙인 경우와 그 반대 경우다. 그래서 $\Delta_\omega$ 는 곱에 대해 Leibniz 법칙을 만족한다. 정의의 가중치 $p!\thinspace q!/r!$ 는 이 법칙이 성립하도록 고른 것이다.

$$
\Delta_\omega(\tilde f\tilde g) = (\Delta_\omega \tilde f)\thinspace\tilde g + \tilde f\thinspace(\Delta_\omega \tilde g)
$$

## Stokes 자동사상의 지수 표현

$\mathfrak S_\theta$ 는 transseries 미분대수의 자기동형이고 $\partial_x$ 와 교환한다. 점찍은 alien 미분은 $\partial_x$ 와 교환하고, Stokes 자동사상은 그 지수로 적힌다.

$$
\mathfrak S_\theta = \exp\left(\sum_{\omega \in \theta}\dot\Delta_\omega\right)
$$

직관 절의 예에서는 $\dot\Delta_1$ 을 두 번 적용하면 상수의 alien 미분이 되어 $0$ 이므로, 지수가 두 항에서 끊겨 $\mathfrak S_0\tilde f=\tilde f+2\pi i\thinspace e^{-x}$ 이다. 특이점이 격자 $\lbrace A, 2A, 3A, \dots\rbrace$ 를 이루면 모든 항이 남아 무한급수가 된다.

## Bridge equation

$F(x,\sigma)$ 가 비선형 [상미분방정식](ordinary-differential-equations.md)의 1-매개변수 transseries 해이면 다음 **bridge equation** 이 성립한다.

$$
\dot\Delta_{\ell A}F = S_\ell\thinspace\sigma^{\thinspace 1-\ell}\frac{\partial F}{\partial\sigma}, \qquad \ell\le 1,\quad \ell\ne 0
$$

상수 $S_\ell$ 을 **Stokes 상수(Stokes constant)** 라 하고, 방정식의 국소 계산이 아니라 해의 대역적 해석성으로 정해진다. 증명의 요지는 다음이다. $F$ 가 방정식을 만족하므로 양변에 $\dot\Delta$ 를 적용하면 $\dot\Delta F$ 가 변분방정식을 만족하고, $\partial_\sigma F$ 도 같은 방정식을 만족한다.

해공간이 1차원이므로 둘이 비례하고, 지수 차수를 맞추면 $\sigma^{1-\ell}$ 이 붙는다. 직관 절의 예에서 $F=\tilde f+\sigma e^{-x}$ 이고 $\dot\Delta_1F=2\pi i\thinspace e^{-x}=2\pi i\thinspace\partial_\sigma F$ 이므로 $S_1=2\pi i$ 다.

## Large-order 관계

Bridge equation 을 $\sigma$ 의 거듭제곱으로 전개하고 $\Delta$ 의 정의를 거꾸로 적용하면, $k=0$ sector 계수의 큰 $n$ 점근이 $k=1$ sector 계수로 적힌다.

$$
a_n^{(0)} \thickspace\sim\thickspace \frac{S_1}{2\pi i}\sum_{m\ge0}\frac{\Gamma(n-m-b)}{A^{\thinspace n-m-b}}\thickspace a_m^{(1)}
$$

주도항 $\Gamma(n)/A^n$ 이 [Stokes 현상](stokes-phenomenon.md)의 계수 성장이고, $1/n$ 보정의 계수가 두 번째 sector 의 계수 $a_m^{(1)}$ 이다. 한 sector 를 충분히 계산하면 다른 sector 와 Stokes 상수를 수치로 얻는다. 직관 절의 예에서는 $a_n^{(0)}=(n-1)!$, $A=1$, $b=0$, $a_0^{(1)}=1$ 이고 우변의 첫 항이 정확히 $\Gamma(n)=(n-1)!$ 이다.

## 실수성과 중앙 합

측면 합 $\mathcal S_{\theta^\pm}$ 는 [실수](real-numbers.md) 문제에서도 허수부를 가진다. 두 값의 평균에 해당하는 **중앙 합(median summation)**

$$
\mathcal S_{\mathrm{med}} = \mathcal S_{\theta^-}\circ\thinspace\mathfrak S_\theta^{1/2}
$$

은 실숫값을 준다. 직관 절의 예에서 $\mathcal S_{\mathrm{med}}\tilde f=\mathcal S_{0^-}\tilde f+\pi i\thinspace e^{-x}$ 는 두 측면 합의 평균이고, 이는 $\zeta=1$ 을 지나는 적분의 주치값(Cauchy principal value)이다. 물리에서 섭동급수의 허수 애매성(ambiguity)이 instanton 기여의 허수부와 상쇄된다고 하는 것이 이 경우이고, transseries 의 모든 sector 를 함께 셈하면 애매성이 서로 지워진다.

## 해석적 분류

alien 미분들은 자유 [Lie 대수](lie-algebras.md)를 이루고, 그 지수사상이 Stokes 자동사상들의 군을 준다. Écalle–Voronin 의 비선형 미분방정식 국소 해석적 분류에서 이 자료가 완전 불변량이다. 형식적 변환으로 표준형까지 갈 수 있지만 그 변환이 발산하고, 발산의 정도인 Stokes 자료가 해석적 동치류를 정한다[^1].

# 활용

## 섭동론의 비섭동 효과

양자역학의 이중우물에서 섭동급수가 발산하고, 그 발산률이 instanton 작용 $S_I$ 를 준다. Bridge equation 은 섭동 sector, instanton sector, instanton–반instanton sector 사이의 관계를 고정하고, 각 sector 의 허수 애매성이 상쇄되어 에너지 준위가 실수임을 보인다.

## 정확한 WKB

[WKB 근사](wkb-approximation.md)(Wentzel–Kramers–Brillouin)의 급수를 자르지 않고 Borel 합으로 다루는 이론이 [정확한 WKB](exact-wkb.md)다. Voros 기호(Voros symbol)와 그 Stokes 자동사상 아래에서의 변환이 resurgence 구조이고, 연결 공식은 특정 Stokes 자동사상을 적은 것이다.

## 섭동 계수로부터의 예측

행렬모형, 위상적 끈, [Chern–Simons 이론](chern-simons.md)의 자유에너지에서도 같은 구조가 나타난다. 섭동 전개의 계수를 계산해 Stokes 상수를 얻고, 그 값을 독립적으로 계산된 막 instanton 이나 복소 안장점의 작용과 비교한다.

[^1]: Inês Aniceto, Gökçe Başar, Ricardo Schiappa, *A Primer on Resurgent Transseries and Their Asymptotics*, Physics Reports 809 (2019), §§2–4. transseries 대수, alien 미분의 정의와 Leibniz 법칙, bridge equation 의 유도와 large-order 관계의 도출.

# 연관 문서

## 선수지식

- [Stokes 현상](stokes-phenomenon.md)

## 더 알아보기

- [정확한 WKB](exact-wkb.md)

#analysis #complex_analysis #computation
