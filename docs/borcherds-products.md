# Borcherds 곱

# 개요

**Borcherds 곱(Borcherds product)** 은 약정칙 [모듈러 형식](modular-forms.md)의 계수를 지수로 삼아 만든 무한곱이며, 서명 $(2,n)$ 직교군의 자기동형 형식이 된다. $j$ 함수의 계수 $196884, 21493760, \dots$ 를 지수로 써서 $\prod(1-p^mq^n)^{c(mn)}$ 을 만들고 $p^{-1}$ 을 곱하면, $p=e^{2\pi i\sigma}$ 와 $q=e^{2\pi i\tau}$ 의 함수 $j(\sigma)-j(\tau)$ 가 된다. 무한곱이 모듈러 성질을 갖는지는 곱을 직접 보아서는 알 수 없다. Borcherds 는 약정칙 형식에서 출발하는 theta 올림으로 그런 곱을 일반적으로 구성했다.

# 직관

판별식 함수(discriminant function)는 지수가 모두 $24$ 인 무한곱이다.

$$
\Delta(\tau)=q\prod_{n\ge1}\bigl(1-q^n\bigr)^{24},\qquad q=e^{2\pi i\tau}
$$

이 곱은 무게 $12$ 의 첨점형식이고 계수가 Ramanujan 의 $\tau$ 다. 지수를 $n$ 마다 다르게 바꾸면 곱이 모듈러 성질을 갖는지는 곱을 직접 보아서는 알 수 없다.

두 변수 $p=e^{2\pi i\sigma}$, $q=e^{2\pi i\tau}$ 에서는 지수가 $j$ 함수의 계수인 곱이 모듈러다. $j$ 함수의 계수 $c(k)$ 를 다음으로 정한다.

$$
j(\tau)-744=\sum_{k\ge-1}c(k)q^k=q^{-1}+196884q+21493760q^2+\cdots
$$

그러면 다음이 성립한다.

$$
j(\sigma)-j(\tau)=p^{-1}\prod_{m\gt 0,\thinspace n\in\mathbb Z}\bigl(1-p^mq^n\bigr)^{c(mn)}
$$

지수 $c(mn)$ 은 $j$ 의 계수이고, $j$ 는 첨점에서 극 $q^{-1}$ 을 갖는다. 지수를 첨점에서 극을 허용하는 모듈러 형식의 계수로 잡으면 곱이 자기동형 형식이 된다는 것이 Borcherds 의 정리다.

# 정의

## 약정칙 형식

**약정칙 형식(weakly holomorphic modular form)** 은 상반평면에서 정칙이고 모듈러 변환 법칙을 만족하며 첨점에서 극을 허용하는 함수다. 무게 $k$ 의 약정칙 형식 전체를 $M^!\_k$ 로 쓴다. $q$ 전개 $\sum_{m\gg-\infty}c(m)q^m$ 의 음수 차수 부분 $\sum_{m\lt 0}c(m)q^m$ 을 **주요부(principal part)** 라 한다.

$j-744$ 는 주요부가 $q^{-1}$ 인 무게 $0$ 의 약정칙 형식이다. 약정칙 형식은 [Mock 모듈러 형식](mock-modular-forms.md)의 정칙 부분에서도 나타난다.

$L$ 을 서명 $(2,n)$ 의 짝수 [격자](lattices.md)라 하고, $f\in M^!\_{1-n/2}(\rho_L)$ 를 [Weil 표현](weil-representation.md) $\rho_L$ 에 대한 벡터값 약정칙 형식이라 한다. $f$ 의 계수를 $c(\gamma,m)$ $(\gamma\in L'/L)$ 로 적고, 주요부 계수는 정수라고 가정한다. 직관 절의 예는 $L=\mathrm{II}\_{2,2}$, $n=2$, $f=j-744$ 인 경우다.

## Heegner 인자

$Z(m)$ 은 노름 $-m$ 인 격자 벡터의 직교여공간들이 대칭공간 안에서 이루는 부분다양체의 합이다. 이것을 **Heegner 인자(Heegner divisor)** 라 한다. 모듈러 곡선에서는 판별식 $-m$ 의 CM(complex multiplication) 점, 곧 [Heegner 점](heegner-points.md)들이다. 직관 절의 $j(\sigma)-j(\tau)$ 의 영점 $\sigma=\tau$ 와 그 $\mathrm{SL}\_2(\mathbb Z)$ 이동이 $Z(1)$ 이다.

## 정규화된 theta 올림

**theta 올림(theta lift)** 은 $f$ 와 격자의 [theta 급수](theta-series.md) $\Theta(\tau,v)$ 의 짝을 [모듈러 곡선](modular-curves.md) 위에서 적분한 것이다.

$$
\Phi(v,f)=\int_{\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H}f(\tau)\thinspace\overline{\Theta(\tau,v)}\ \frac{du\thinspace dv}{v^2}
$$

$f$ 가 첨점형식이면 적분이 수렴하고, 주요부가 있으면 발산한다. 절단한 영역 $\mathcal F_T$ 위에서 적분하고 $T\to\infty$ 에서 발산하는 부분을 빼 정규화한 값을 $\Phi(v,f)$ 로 쓴다. 이 정규화는 Harvey–Moore 의 방법이다.

## Borcherds 곱

$f$ 의 **Borcherds 곱** 은 $\Psi_f(v)=e^{-\Phi(v,f)/2}$ 다.

# 성질

## Borcherds 정리

Borcherds 정리(Borcherds' theorem)는 다음 진술이다.[^1] $\Psi_f$ 는 무게 $c(0,0)/2$ 의 직교군 $\mathrm O(2,n)$ 의 유리형 자기동형 형식이고, 인자는 $\sum_{m\gt 0}c(-m)Z(m)$ 이며, 첨점 근방의 각 Weyl 방(Weyl chamber)에서

$$
\Psi_f(v)=q^{\rho}\prod_{\lambda\gt 0}\bigl(1-q^{\lambda}\bigr)^{c(\lambda,\thinspace\langle\lambda,\lambda\rangle/2)}
$$

꼴의 무한곱으로 전개된다. 정규화된 $\Phi$ 는 Heegner 인자를 따라 로그 특이점을 갖고, 그 위치와 무게가 주요부 계수로 정해진다. 직관 절의 공식은 $f=j-744$ 에서 $c(0)=0$ 이라 무게가 $0$ 이고 인자가 $Z(1)$ 인 경우다.

## 고전 항등식

| 입력 f | 출력 Ψ |
| --- | --- |
| $j-744$ | $j(\sigma)-j(\tau)$, 괴물 [Lie 대수](lie-algebras.md)의 분모 공식(denominator formula) |
| 무게 $1/2$, 주요부 $q^{-3}$ 인 $q^{-3}-248q+26752q^4-\cdots$ | $j(\tau)=q^{-1}\prod_{n\gt0}(1-q^n)^{c(n^2)}$ |
| 무게 $1/2$ 의 theta 급수 | Dedekind $\eta$ 함수와 $\Delta=\eta^{24}$ |
| 약 [Jacobi 형식](jacobi-forms.md)(weak Jacobi form) $\phi_{0,1}/2$ | [Siegel 모듈러 형식](siegel-modular-forms.md) $\Delta_5$ (Gritsenko–Nikulin) |

## 주요부와 인자의 대응

주요부와 인자의 대응은 양방향이다. 어떤 Heegner 인자를 갖는 모듈러 형식이 존재하려면 그 인자를 주요부로 갖는 약정칙 형식이 있어야 하고, 약정칙 형식의 주요부가 만족할 조건은 첨점형식과의 짝이 0 이 되는 것뿐이다(Serre 쌍대성).

$$
\sum_{m\gt 0}c(-m)\thinspace a_g(m)=0\quad\text{for all }g\in S_{1+n/2}
$$

인자가 모듈러 형식의 인자인가라는 기하 문제가 유한 개의 선형 조건으로 환원된다. [Gross–Kohnen–Zagier 정리](gross-kohnen-zagier.md)의 Borcherds 판 증명이 이 관찰에 기댄다.

## 지수의 부호

$c(-m)\gt 0$ 이면 $\Psi_f$ 가 $Z(m)$ 에서 영점을, $c(-m)\lt 0$ 이면 극을 갖는다. 모든 $c(-m)$ 을 양수로 만들 수는 없고, 첨점형식과의 짝 조건이 부호의 조합을 제한한다.

## 방법의 한계

Borcherds 곱은 인자가 Heegner 인자인 형식만 만들고, 일반적인 자기동형 형식은 이 방법으로 나오지 않는다. 곱이 수렴하는 영역이 제한적이라 전체 정의역으로의 확장은 별도의 논증을 요구한다. 서명 $(2,n)$ 밖에서는 대칭공간이 에르미트가 아니라 정칙 형식을 말할 수 없다.

# 활용

## Gross–Kohnen–Zagier 정리

모듈러 곡선 $X_0(N)$ 의 Jacobian 안에서 Heegner 점들 $y_m$ 을 모으면

$$
\sum_{m\ge1}y_m\thinspace q^m
$$

이 Jacobian 의 원소를 계수로 갖는 무게 $3/2$ 의 모듈러 형식이다. 원래 증명은 높이 계산이었고, Borcherds 는 위의 선형 조건만으로 다시 증명했다. 어떤 $\sum c(-m)Z(m)$ 이 주인자인지에서 Jacobian 안의 Heegner 점 사이의 관계식이 나온다.

## Kudla 강령

Kudla 의 추측(Kudla's conjecture)은 Heegner 인자들의 산술적 교차수가 [Eisenstein 급수](eisenstein-series.md)의 Fourier 계수의 미분과 같다는 진술이다. Borcherds 곱은 인자가 주인자가 되는 경우를 다루고, 산술적 판본에서는 $\log\Vert\Psi_f\Vert$ 가 [Arakelov 기하](arakelov-geometry.md)의 [Green 함수](greens-function.md)가 된다.

## 달빛과 Lie 대수

괴물 Lie 대수의 분모 공식은 Borcherds 곱의 한 예이고, Borcherds 는 이 공식과 괴물군 원소로 꼬인 판본을 써서 [괴물 달빛 추측](monstrous-moonshine.md)을 증명했다.[^1] 꼬인 분모 공식을 전개하면 [Hecke 작용소](hecke-operators.md)와 같은 꼴의 재귀식이 나오고, 이 재귀식과 처음 몇 계수가 McKay–Thompson 급수(McKay–Thompson series)를 정한다.

[^1]: R. Borcherds, *Automorphic forms with singularities on Grassmannians*, Invent. Math. **132** (1998), 491–562. 분모 공식과 달빛은 같은 저자의 *Monstrous moonshine and monstrous Lie superalgebras*, Invent. Math. **109** (1992). 해설과 조화 [Maass 형식](maass-forms.md)과의 관계는 J. Bruinier, J. Funke, *On two geometric theta lifts*, Duke Math. J. **125** (2004), 그리고 K. Ono, *Unearthing the visions of a master: harmonic Maass forms and number theory* (2009). Gross–Kohnen–Zagier 의 원논문은 *Heegner points and derivatives of L-series II*, Math. Ann. **278** (1987).

# 연관 문서

## 선수지식

- [Weil 표현](weil-representation.md)
- [Mock 모듈러 형식](mock-modular-forms.md)

## 더 알아보기

- [Gross–Kohnen–Zagier 정리](gross-kohnen-zagier.md)

#number_theory #complex_analysis #group_theory #construction
