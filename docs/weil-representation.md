# Weil 표현

# 개요

**Weil 표현(Weil representation)** 은 심플렉틱 군의 이중덮개인 메타플렉틱 군의 유니터리 표현으로, Heisenberg 군의 기약 유니터리 표현이 유일하다는 데서 얻어진다. [theta 급수](theta-series.md) $\theta(\tau)=\sum_n e^{\pi in^2\tau}$ 는 $\theta(-1/\tau)=\sqrt{-i\tau}\thinspace\theta(\tau)$ 를 만족한다. 이 식에 제곱근이 들어 있어서, 변환을 군의 작용으로 보려면 제곱근의 부호까지 기억하는 2 겹 덮개 군이 있어야 한다. Weil 표현은 그 덮개 군의 표현이고, theta 급수의 모듈러성을 군론의 결과로 얻게 한다.

# 직관

$\theta(\tau)=\sum_n e^{\pi in^2\tau}$ 의 변환식 $\theta(-1/\tau)=\sqrt{-i\tau}\thinspace\theta(\tau)$ 를 $\mathrm{SL}\_2(\mathbb R)$ 의 작용으로 읽으려고 한다. $\tau\mapsto-1/\tau$ 를 두 번 하면 항등이지만, 인자 $\sqrt{-i\tau}$ 를 두 번 곱한 값의 부호는 제곱근의 가지를 어떻게 고르는지에 따라 달라진다. 그래서 인자를 군의 원소마다 하나로 정할 수 없다. 이 부호가 어디서 나오는지는 theta 급수를 만드는 함수 공간 위의 작용에서 보인다.

Heisenberg 군 $H(W)$ 의 기약 유니터리 표현 $\rho_\psi$ 는 중심 지표를 고정하면 유일하다. $\mathrm{Sp}(W)$ 가 $H(W)$ 에 중심을 고정하며 작용하므로 $g\in\mathrm{Sp}(W)$ 마다 $\rho_\psi\circ g$ 도 같은 중심 지표의 기약 표현이고, 유일성으로 $\rho_\psi$ 와 동형이다. 그 동형을 주는 연산자 $\omega(g)$ 를 고르면 $\rho_\psi(g\cdot h)=\omega(g)\thinspace\rho_\psi(h)\thinspace\omega(g)^{-1}$ 이 성립한다.

$\omega(g)$ 는 Schur 보조정리로 스칼라 차이까지만 정해지므로 $\omega(g_1)\omega(g_2)$ 와 $\omega(g_1g_2)$ 가 스칼라만큼 어긋난다. $\mathrm{SL}\_2$ 에서 [Fourier 변환](fourier-transform.md)에 대응하는 원소 $w$ 는 $w^2=-I$ 를 만족하고 $-I$ 는 $\varphi(x)\mapsto\varphi(-x)$ 로 작용해야 하는데, Fourier 변환의 제곱이 그것이 되게 하는 정규화 상수는 Gauss 적분의 제곱근이라 부호가 두 가지다. 그 부호를 고르는 것이 2 겹 덮개의 원소를 고르는 것이고, 거기서 반정수 무게가 나온다.

# 정의

## Heisenberg 군

$(W,\langle\cdot,\cdot\rangle)$ 을 체 $F$ 위의 심플렉틱 공간이라 하자. **Heisenberg 군(Heisenberg group)** 은 집합으로 $H(W)=W\times F$ 이고 곱은 다음과 같다.

$$
(w,t)\cdot(w',t')=\Bigl(w+w',\ t+t'+\tfrac12\langle w,w'\rangle\Bigr)
$$

중심은 $\lbrace 0\rbrace\times F$ 이고 교환자가 $[(w,0),(w',0)]=(0,\langle w,w'\rangle)$ 이라 심플렉틱 형식이 군의 비가환성이 된다. 양자역학의 정준교환관계 $[\hat q,\hat p]=i\hbar$ 가 이 군의 [Lie 대수](lie-algebras.md) 판본이다.

## Schrödinger 모형

비자명 지표 $\psi:F\to\mathbb C^\times$ 를 고정하자. 극대 등방부분공간 $X\subset W$ 로 만든 **Schrödinger 모형(Schrödinger model)** 은 Schwartz 공간 $\mathcal S(X)$ 위의 표현이고, $W=X\oplus Y$ 에 대해 다음으로 준다.

$$
\rho_\psi(x,0)\varphi(u)=\varphi(u+x),\qquad
\rho_\psi(y,0)\varphi(u)=\psi\bigl(\langle u,y\rangle\bigr)\varphi(u),\qquad
\rho_\psi(0,t)=\psi(t)\cdot\mathrm{id}
$$

$F=\mathbb R$, $W=\mathbb R^2$, $\psi(t)=e^{2\pi it}$ 이면 $\rho_\psi(x,0)$ 은 함수를 $x$ 만큼 옮기고 $\rho_\psi(y,0)$ 은 $e^{2\pi iuy}$ 를 곱한다. 양자역학의 위치 이동과 운동량 이동이 이 두 연산자다.

## Weil 표현

$\mathrm{Sp}(W)$ 는 $H(W)$ 에 $g\cdot(w,t)=(gw,t)$ 로 작용하고 중심을 고정한다. 유일성에서 사영표현이 생기고 그 코사이클이 2 겹 덮개 $\mathrm{Mp}(W)\to\mathrm{Sp}(W)$ 위에서 자명해진다. 이 덮개 $\mathrm{Mp}(W)$ 를 메타플렉틱 군(metaplectic group)이라 하고, 그 위의 표현 $\omega_\psi$ 가 **Weil 표현** 이다.

$\mathrm{SL}\_2$ 에서 생성원의 작용은 다음과 같다.

$$
\omega_\psi\negthinspace\begin{pmatrix}a&0\cr 0&a^{-1}\end{pmatrix}\varphi(x)=\chi(a)\thinspace|a|^{1/2}\varphi(ax),
\qquad
\omega_\psi\negthinspace\begin{pmatrix}1&b\cr 0&1\end{pmatrix}\varphi(x)=\psi\negthinspace\left(\tfrac{b x^2}{2}\right)\varphi(x)
$$

$$
\omega_\psi(w)\varphi=\gamma_\psi\cdot\widehat\varphi
$$

$\gamma_\psi$ 를 Weil 지표(Weil index)라 하고, 제곱근의 모호함은 여기에만 들어 있다.

## theta 범함수

아델 위에서 $\omega_\psi$ 는 Schwartz 공간 $\mathcal S(\mathbb A^n)$ 에 작용한다. 유리점의 값을 모두 더하는 범함수를 정의한다.

$$
\theta:\mathcal S(\mathbb A^n)\to\mathbb C,\qquad
\theta(\varphi)=\sum_{x\in F^n}\varphi(x)
$$

[Poisson 합 공식](poisson-summation.md)과 $\psi$ 가 $F$ 에서 자명하다는 것으로부터 이 범함수가 $\mathrm{Sp}(F)$ 의 작용에 불변임이 증명된다. 여기서 자기동형 형식을 얻는다.

$$
\Theta_\varphi(g)=\theta\bigl(\omega_\psi(g)\varphi\bigr)
$$

이 함수는 정의상 $\mathrm{Sp}(F)$ 에 대해 왼쪽 불변이다. 고전적인 $\sum e^{\pi i n^2\tau}$ 는 $\varphi$ 를 Gauss 함수로 잡았을 때의 $\Theta_\varphi$ 이고, 모듈러 변환식이 이 불변성에서 따라 나온다.

## 쌍대쌍과 theta 올림

이차공간 $V$ 와 심플렉틱 공간 $W$ 를 놓으면 $V\otimes W$ 가 심플렉틱 공간이고

$$
\bigl(O(V),\ \mathrm{Sp}(W)\bigr)\subset\mathrm{Sp}(V\otimes W)
$$

는 서로가 서로의 중심화군이다. 이런 쌍이 **축소 쌍대쌍(reductive dual pair)** 이다. $\omega_\psi$ 를 이 곱으로 제한한 뒤 한쪽 군의 자기동형 형식과 적분하면 다른 쪽의 형식이 나오고, 이 사상이 **theta 올림(theta lift)** 이다.

$$
\theta(f)(h)=\int_{G(F)\backslash G(\mathbb A)}\Theta_\varphi(g,h)\thinspace\overline{f(g)}\thinspace dg
$$

# 성질

## Stone–von Neumann 정리

Stone–von Neumann 정리(Stone–von Neumann theorem). 중심 위에서 $\psi$ 로 작용하는 $H(W)$ 의 기약 유니터리 표현은 유니터리 동형 차이로 유일하다. Schrödinger 모형이 그 표현이다.

## Weil 지표

$\omega_\psi(w)\varphi=\gamma_\psi\cdot\widehat\varphi$ 의 정규화 상수는 다음 Gauss 적분으로 정해진다.

$$
\int_{\mathbb R}e^{-\pi i x^2}\thinspace dx=e^{-\pi i/4}
$$

$\gamma_\psi=e^{-\pi i/4}$ 가 8 차 근이고, $w^2=-I$ 를 만족시키려면 이 값의 제곱근을 골라야 하므로 사영표현의 코사이클이 $\mathrm{Sp}$ 위에서 자명해지지 않는다. 실 [Lie 군](lie-groups.md) 수준에서는 $\mathrm{SL}\_2(\mathbb R)$ 의 [기본군](fundamental-group.md)이 $\mathbb Z$ 이므로 2 겹 덮개가 존재한다.

## 무게 1/2 의 변환식

$\tau=it$ 로 놓으면 변환식 $\theta(-1/\tau)=\sqrt{-i\tau}\thinspace\theta(\tau)$ 는 $\theta(i/t)=\sqrt t\thinspace\theta(it)$ 가 되어 [실수](real-numbers.md)만 남는다.

인자 $\sqrt t$ 가 무게 $1/2$ 를 나타내고, 제곱근이 2 겹 덮개의 흔적이다. $t$ 를 순허수 축 바깥으로 움직이면 제곱근의 가지를 고르는 일이 $\mathrm{Mp}$ 의 원소를 고르는 일이 된다.

## Howe 쌍대성

쌍대쌍 $(G,H)$ 에 대해 $\omega_\psi|\_{G\times H}$ 를 분해하면, $G$ 의 기약표현 $\pi$ 가 나타날 때 짝지어지는 $H$ 의 기약표현이 유일하게 결정된다.

$$
\omega_\psi\big|\_{G\times H}\ \rightsquigarrow\ \pi\ \longleftrightarrow\ \theta(\pi)
$$

중복도 1 이 여기서도 성립한다. Howe 가 이를 예측했고 비아르키메데스 홀수 잔여특성에서 Waldspurger 가, 아르키메데스 자리에서 Howe 자신이 증명했고, Gan–Takeda 가 모든 비아르키메데스 경우를 마쳤다.[^1] 두 군의 표현론을 잇는 사전이라는 점에서 Langlands 함자성의 구체적 사례다.

## Shimura 대응

쌍대쌍 $\bigl(\mathrm{Mp}\_2,\mathrm{PGL}\_2\bigr)$ 가 주는 올림이 고전적 [Shimura 대응](shimura-correspondence.md)이다. 무게 $k+1/2$ 의 형식과 무게 $2k$ 의 형식이 대응하고 Hecke 고윳값이 일치한다. [Waldspurger 정리](waldspurger-formula.md)가 반정수 무게 계수와 토릭 주기라는 두 형태를 갖는 근거가 이 대응이다.

## Siegel–Weil 공식

theta 급수를 $O(V)$ 방향으로 적분하면 [Eisenstein 급수](eisenstein-series.md)가 나온다는 것이 [Siegel–Weil 공식](siegel-weil.md)이다.

$$
\int_{O(V)(F)\backslash O(V)(\mathbb A)}\Theta_\varphi(g,h)\thinspace dh
\ =\ E(g,\varphi)
$$

좌변은 이차형식의 표현수를 담고 우변은 국소 밀도의 곱으로 계산된다. 표현수의 종 평균이 국소 밀도의 곱과 같다는 Siegel 의 [질량 공식](mass-formula.md)이 이 등식의 특수한 경우다.

## Gan–Gross–Prasad 추측의 Fourier–Jacobi 경우

[Gan–Gross–Prasad 추측](gan-gross-prasad.md)에서 여차원이 짝수이면 중복도를 잴 때 $\omega_\psi$ 를 함께 텐서한다. Bessel 경우에는 중복도를 지표 $\nu$ 를 텐서한 공간에서 재고, Fourier–Jacobi 경우에는 $\nu$ 대신 $\omega_\psi$ 를 텐서한다.

# 활용

- 이차형식의 표현수. $\theta^k$ 의 계수가 $k$ 개의 제곱수 합으로 $n$ 을 적는 방법의 수다. Weil 표현이 보장하는 모듈러성 덕분에 이 급수가 유한차원 공간에 놓이고 Eisenstein 부분과 첨점 부분으로 쪼개지며, 앞쪽이 주항을 뒤쪽이 오차항을 준다. $k=4$ 에서는 첨점 부분이 없어 Jacobi 의 네 제곱수 정리 $r_4(n)=8\sum_{4\nmid d\mid n}d$ 가 정확한 공식이 된다.
- 반정수 무게 형식의 구성. 반정수 무게는 메타플렉틱군의 표현이고 그 군의 기본 표현이 $\omega_\psi$ 이므로, 반정수 무게 형식을 만드는 체계적 방법이 theta 급수다. Zagier 의 Eisenstein 급수, Cohen 의 형식, [Jacobi 형식](jacobi-forms.md)이 이 틀에서 나온다.
- 정준교환관계의 유일성. Stone–von Neumann 정리는 물리에서 양자화의 유일성 정리다. 위치와 운동량의 교환관계를 만족하는 연산자 쌍은 구현 방식에 관계없이 유니터리 동치이고, Schrödinger 표현과 Heisenberg [행렬](matrices.md)역학이 같은 이론인 근거가 된다. 메타플렉틱 표현은 선형 정준변환의 양자화다. 유일성은 유한 자유도에서만 성립한다.

[^1]: R. Howe, *Transcending classical invariant theory*, J. Amer. Math. Soc. **2** (1989). W. T. Gan, S. Takeda, *A proof of the Howe duality conjecture*, J. Amer. Math. Soc. **29** (2016). Weil 표현의 원 논문은 A. Weil, *Sur certains groupes d'opérateurs unitaires*, Acta Math. **111** (1964).

# 연관 문서

## 선수지식

- [theta 급수](theta-series.md)
- [Peter–Weyl 정리](peter-weyl.md)

## 더 알아보기

- [Siegel–Weil 공식](siegel-weil.md)
- [Shimura 대응](shimura-correspondence.md)
- [Borcherds 곱](borcherds-products.md)

#number_theory #group_theory #complex_analysis
