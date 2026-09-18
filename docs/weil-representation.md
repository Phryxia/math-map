# Weil 표현과 theta 대응

# 개요

[theta 급수](theta-functions.md)의 모듈러성은 Poisson 합 공식으로 $\theta(-1/\tau)=\sqrt{-i\tau}\thinspace\theta(\tau)$ 를 계산해 얻을 수도 있고, 이 변환을 일으키는 군의 표현에서 얻을 수도 있다. 그 표현이 **Weil 표현**이다.

심플렉틱 공간 $W$ 에서 Heisenberg 군 $H(W)$ 를 만들고 중심 지표 $\psi$ 를 고정하면, Stone–von Neumann 정리에 따라 그런 기약 유니터리 표현이 하나뿐이다. $\mathrm{Sp}(W)$ 가 $H(W)$ 에 중심을 고정하며 작용하므로 유일성에 의해 $\mathrm{Sp}(W)$ 의 모든 원소가 그 표현을 자기 자신으로 옮기고 사영표현이 생긴다.

$$
\mathrm{Sp}(W)\longrightarrow \mathrm{PGL}(\mathcal S)
$$

이 사영표현은 2 겹 덮개 $\mathrm{Mp}(W)$ 로 올라가야 진짜 표현이 되며, 그것이 Weil 표현 $\omega_\psi$ 다. 2 겹이 필요하다는 데서 **반정수 무게 모듈러 형식**이 나온다. theta 급수는 $\omega_\psi$ 안의 불변 범함수가 주는 자기동형 형식이고, 모듈러성은 군론의 결과가 된다.

$\mathrm{Sp}$ 안의 두 부분군이 서로의 중심화군일 때(쌍대쌍) $\omega_\psi$ 를 그 곱으로 제한하면 두 군의 표현 사이의 사전이 생기고, 이것이 **theta 대응**이다. Shimura 대응과 Jacquet–Langlands 대응의 여러 사례가 이 사전의 특수한 경우다.

# 직관

## 유일성에서 나오는 작용

어떤 대상이 유일하면 그 대상을 보존하는 모든 변환이 자동으로 그 위에 작용한다.

$$
\rho_\psi\circ g\ \cong\ \rho_\psi
\quad\Longrightarrow\quad
\exists\thinspace\omega(g)\in\mathrm{GL}(\mathcal S)\ \text{ with }\ \rho_\psi(g\cdot h)=\omega(g)\thinspace\rho_\psi(h)\thinspace\omega(g)^{-1}
$$

Schur 보조정리에 의해 $\omega(g)$ 는 스칼라 차이로 결정되고, 그래서 $\omega$ 는 표현이 아니라 사영표현이다. [Whittaker 모형의 유일성](whittaker-models.md)이 전역 적분의 Euler 곱 분해를 낳은 것과 같은 요령이다.

## 2 겹 덮개

사영표현을 진짜 표현으로 올리려면 코사이클을 없애야 하는데 $\mathrm{Sp}$ 에서는 없어지지 않는다. $\mathrm{SL}\_2$ 의 원소

$$
w=\begin{pmatrix}0&1\cr-1&0\end{pmatrix}
$$

에 대응하는 연산자가 Fourier 변환이다. $w^2=-I$ 이고 $-I$ 는 $\varphi(x)\mapsto\varphi(-x)$ 로 작용해야 하는데, Fourier 변환의 제곱이 그것이 되게 하는 정규화 상수는 Gauss 적분의 제곱근이라 부호가 모호하다.

$$
\int_{\mathbb R}e^{-\pi i x^2}\thinspace dx=e^{-\pi i/4}
$$

$e^{-\pi i/4}$ 가 Weil 지표라 불리는 8 차 근이고, 제곱근의 가지 선택이 2 겹 덮개를 만든다. 실 Lie 군 수준에서는 $\mathrm{SL}\_2(\mathbb R)$ 의 기본군이 $\mathbb Z$ 라 덮개가 존재한다는 말과 같다. 이 2 겹에서 무게가 반정수가 되며, 반정수 무게 형식은 메타플렉틱군의 형식이다.

## 불변 범함수로서의 theta

아델 위에서 $\omega_\psi$ 는 Schwartz 공간 $\mathcal S(\mathbb A^n)$ 에 작용한다. 유리점의 값을 모두 더하는 범함수를 얹는다.

$$
\theta:\mathcal S(\mathbb A^n)\to\mathbb C,\qquad
\theta(\varphi)=\sum_{x\in F^n}\varphi(x)
$$

[Poisson 합 공식](poisson-summation.md)은 이 범함수가 $\mathrm{Sp}(F)$ 의 작용에 불변이라고 말한다. 불변 범함수에서 자기동형 형식이 나온다.

$$
\Theta_\varphi(g)=\theta\bigl(\omega_\psi(g)\varphi\bigr)
$$

이 함수는 정의상 $\mathrm{Sp}(F)$ 에 대해 왼쪽 불변이다. 고전적인 $\sum e^{\pi i n^2\tau}$ 는 $\varphi$ 를 Gauss 함수로 잡았을 때의 $\Theta_\varphi$ 이고, 모듈러 변환식이 군의 정의에서 따라 나온다.

# 정의

## Heisenberg 군

$(W,\langle\cdot,\cdot\rangle)$ 을 체 $F$ 위의 심플렉틱 공간이라 하자. **Heisenberg 군**은 집합으로 $H(W)=W\times F$ 이고 곱은 다음과 같다.

$$
(w,t)\cdot(w',t')=\Bigl(w+w',\ t+t'+\tfrac12\langle w,w'\rangle\Bigr)
$$

중심은 $\lbrace 0\rbrace\times F$ 이고 교환자가 $[(w,0),(w',0)]=(0,\langle w,w'\rangle)$ 이라 심플렉틱 형식이 군의 비가환성이 된다. 양자역학의 정준교환관계 $[\hat q,\hat p]=i\hbar$ 가 이 군의 Lie 대수 판본이다.

## Stone–von Neumann 정리

비자명 지표 $\psi:F\to\mathbb C^\times$ 를 고정하자. 중심 위에서 $\psi$ 로 작용하는 $H(W)$ 의 기약 유니터리 표현은 유니터리 동형 차이로 유일하다. 구체적 모형은 극대 등방부분공간 $X\subset W$ 로 만든 **Schrödinger 모형** $\mathcal S(X)$ 이고, $W=X\oplus Y$ 에 대해 다음으로 준다.

$$
\rho_\psi(x,0)\varphi(u)=\varphi(u+x),\qquad
\rho_\psi(y,0)\varphi(u)=\psi\bigl(\langle u,y\rangle\bigr)\varphi(u),\qquad
\rho_\psi(0,t)=\psi(t)\cdot\mathrm{id}
$$

## Weil 표현

$\mathrm{Sp}(W)$ 는 $H(W)$ 에 $g\cdot(w,t)=(gw,t)$ 로 작용하고 중심을 고정한다. 유일성에서 사영표현이 생기고 그 코사이클이 2 겹 덮개 $\mathrm{Mp}(W)\to\mathrm{Sp}(W)$ 위에서 자명해진다. 이 덮개 위의 표현 $\omega_\psi$ 가 **Weil 표현**이다.

$\mathrm{SL}\_2$ 에서 생성원의 작용은 다음과 같다.

$$
\omega_\psi\negthinspace\begin{pmatrix}a&0\cr 0&a^{-1}\end{pmatrix}\varphi(x)=\chi(a)\thinspace|a|^{1/2}\varphi(ax),
\qquad
\omega_\psi\negthinspace\begin{pmatrix}1&b\cr 0&1\end{pmatrix}\varphi(x)=\psi\negthinspace\left(\tfrac{b x^2}{2}\right)\varphi(x)
$$

$$
\omega_\psi(w)\varphi=\gamma_\psi\cdot\widehat\varphi
$$

$\gamma_\psi$ 가 Weil 지표이고 제곱근의 모호함은 여기에만 들어 있다.

## 쌍대쌍과 theta 올림

이차공간 $V$ 와 심플렉틱 공간 $W$ 를 놓으면 $V\otimes W$ 가 심플렉틱 공간이고

$$
\bigl(O(V),\ \mathrm{Sp}(W)\bigr)\subset\mathrm{Sp}(V\otimes W)
$$

는 서로가 서로의 중심화군이다. 이런 쌍이 **축소 쌍대쌍**이다. $\omega_\psi$ 를 이 곱으로 제한한 뒤 한쪽 군의 자기동형 형식과 적분하면 다른 쪽의 형식이 나오고, 이 사상이 **theta 올림**이다.

$$
\theta(f)(h)=\int_{G(F)\backslash G(\mathbb A)}\Theta_\varphi(g,h)\thinspace\overline{f(g)}\thinspace dg
$$

# 성질

## 무게 1/2 의 변환식

$\tau=it$ 로 놓으면 변환식 $\theta(-1/\tau)=\sqrt{-i\tau}\thinspace\theta(\tau)$ 는 $\theta_3(1/t)=\sqrt t\thinspace\theta_3(it)$ 로 실수만 남는다.

인자 $\sqrt t$ 가 무게 $1/2$ 를 나타내고, 제곱근이 2 겹 덮개의 흔적이다. $t$ 를 순허수 축 바깥으로 움직이면 제곱근의 가지를 고르는 일이 $\mathrm{Mp}$ 의 원소를 고르는 일이 된다.

## Howe 쌍대성

쌍대쌍 $(G,H)$ 에 대해 $\omega_\psi|\_{G\times H}$ 를 분해하면, $G$ 의 기약표현 $\pi$ 가 나타날 때 짝지어지는 $H$ 의 기약표현이 유일하게 결정된다.

$$
\omega_\psi\big|\_{G\times H}\ \rightsquigarrow\ \pi\ \longleftrightarrow\ \theta(\pi)
$$

중복도 1 이 여기서도 핵심이다. Howe 가 이를 예측했고 비아르키메데스 홀수 잔여특성에서 Waldspurger 가, 아르키메데스 자리에서 Howe 자신이 증명했다.[^1] 두 군의 표현론을 잇는 사전이라는 점에서 Langlands 함자성의 구체적 사례다.

## Shimura 대응

쌍대쌍 $\bigl(\mathrm{Mp}\_2,\mathrm{PGL}\_2\bigr)$ 가 주는 올림이 고전적 Shimura 대응이다. 무게 $k+1/2$ 의 형식과 무게 $2k$ 의 형식이 대응하고 Hecke 고윳값이 일치한다. [Waldspurger 정리](waldspurger-formula.md)가 반정수 무게 계수와 토릭 주기라는 두 형태를 갖는 근거가 이 대응이다.

## Siegel–Weil 공식

theta 급수를 $O(V)$ 방향으로 적분하면 Eisenstein 급수가 나온다.

$$
\int_{O(V)(F)\backslash O(V)(\mathbb A)}\Theta_\varphi(g,h)\thinspace dh
\ =\ E(g,\varphi)
$$

좌변은 이차형식의 표현수를 담고 우변은 국소 밀도의 곱으로 계산된다. 이차형식 표현론의 국소-전역 원리를 양적으로 만든 공식이며, [Rankin–Selberg 적분](rankin-selberg.md)이 Eisenstein 급수를 쓰는 구조와 마주 본다.

## GGP 의 Fourier–Jacobi 경우

[Gan–Gross–Prasad 추측](gan-gross-prasad.md)에서 여차원이 짝수이면 중복도를 잴 때 $\omega_\psi$ 를 함께 텐서한다. 여차원이 짝수일 때 쌍 $(G_n,G_n)$ 사이에 지표만으로 메울 수 없는 자리가 남고, Heisenberg 군과 Weil 표현이 그 자리를 채운다. Bessel 경우의 지표 $\nu$ 가 하던 일을 $\omega_\psi$ 가 맡는다.

# 활용

- **이차형식의 표현수.** $\theta^k$ 의 계수가 $k$ 개의 제곱수 합으로 $n$ 을 적는 방법의 수다. Weil 표현이 보장하는 모듈러성 덕분에 이 급수가 유한차원 공간에 놓이고 Eisenstein 부분과 첨점 부분으로 쪼개지며, 앞쪽이 주항을 뒤쪽이 오차항을 준다. $k=4$ 에서는 첨점 부분이 없어 Jacobi 의 네 제곱수 정리 $r_4(n)=8\sum_{4\nmid d\mid n}d$ 가 정확한 공식이 된다.
- **반정수 무게 형식의 공급원.** 반정수 무게는 메타플렉틱군의 표현이고 그 군의 기본 표현이 $\omega_\psi$ 이므로, 반정수 무게 형식을 만드는 체계적 방법이 theta 급수다. Zagier 의 Eisenstein 급수, Cohen 의 형식, Jacobi 형식이 이 틀에서 나온다.
- **정준교환관계의 유일성.** Stone–von Neumann 정리는 물리에서 양자화의 유일성 정리다. 위치와 운동량의 교환관계를 만족하는 연산자 쌍은 구현 방식에 관계없이 유니터리 동치이고, Schrödinger 표현과 Heisenberg 행렬역학이 같은 이론인 근거가 된다. 메타플렉틱 표현은 선형 정준변환의 양자화이며, 광학의 ABCD 행렬의 양자 판본이 $\omega_\psi$ 다. 유일성은 유한 자유도에서만 성립하고, 장론에서는 동치가 아닌 표현이 연속적으로 많이 생겨 상전이와 자발적 대칭깨짐이 표현론적 의미를 갖는다.

[^1]: R. Howe, *Transcending classical invariant theory*, J. Amer. Math. Soc. **2** (1989). Weil 표현의 원 논문은 A. Weil, *Sur certains groupes d'opérateurs unitaires*, Acta Math. **111** (1964).

# 연관 문서

## 선수지식

- [theta 급수와 Dedekind eta](theta-functions.md)
- [Peter–Weyl 정리](peter-weyl.md)

## 더 알아보기

- [Siegel–Weil 공식과 이차형식의 표현수](siegel-weil.md)
- [Shimura 대응과 반정수 무게 형식](shimura-correspondence.md)

#number_theory #group_theory #complex_analysis
