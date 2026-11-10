# Godement–Jacquet 적분

# 개요

**Godement–Jacquet 적분(Godement–Jacquet integral)** 은 [행렬](matrices.md) 위의 적분 하나로 $L$ 함수를 적어, 급수가 수렴하지 않는 곳까지 $L$ 함수를 늘이고 그 대칭을 보이는 방법이다. $\zeta(s)=1+2^{-s}+3^{-s}+\cdots$ 은 $s\gt 1$ 에서만 수렴하지만, $e^{-\pi n^2x}$ 를 $n\ge1$ 에 대해 더한 함수에 $x^{s/2-1}$ 을 곱해 $x$ 로 적분하면 $\pi^{-s/2}\Gamma(s/2)\zeta(s)$ 가 나오고, 그 함수가 $x\mapsto1/x$ 에서 갖는 대칭에서 $s\mapsto1-s$ 대칭이 나온다. 수 $x$ 대신 $n\times n$ 가역행렬을 변수로 놓고 같은 적분을 하면 $\mathrm{GL}\_n$ 의 자기동형 표현에 붙는 표준 $L$ 함수에서 같은 결과가 나오며, Godement 와 Jacquet 이 1972 년에 이것을 보였다.

# 직관

[Tate 의 zeta 적분](tate-zeta-integral.md) $\int_{\mathbb A^\times}f(x)\thinspace\chi(x)\thinspace\lvert x\rvert^s\thinspace d^\times x$ 은 $\mathrm{GL}\_1$ 의 $L$ 함수를 주고, 세 부품으로 이루어진다. 벡터공간 $\mathbb A$ 위의 Schwartz 함수 $f$ , 군 $\mathbb A^\times$ 의 지표 $\chi$ , 매개변수족 $\lvert x\rvert^s$ 다. $n\ge2$ 에서 $\pi$ 는 1 차원이 아니므로 지표 자리에 행렬 계수 $\langle\pi(g)v,\tilde v\rangle$ 를 넣는다. $n=1$ 이면 이 함수가 $\chi$ 로 돌아온다. $\lvert x\rvert^s$ 자리에는 $\det\colon\mathrm{GL}\_n\to\mathbb G_m$ 을 써서 $\lvert\det g\rvert^s$ 를 넣는다.

남은 부품은 Schwartz 함수이고, 그러려면 $\mathrm{GL}\_n$ 을 담는 벡터공간이 있어야 한다. $\mathbb A^\times$ 가 벡터공간 $\mathbb A$ 의 열린 부분집합이듯 $\mathrm{GL}\_n$ 은 $n^2$ 차원 벡터공간인 행렬대수(matrix algebra) $M_n$ 에서 $\det\ne0$ 인 조밀한 열린 부분집합이므로, 적분을 $M_n$ 위의 Schwartz 함수로 다룰 수 있다. 세 부품을 다 갖춘 적분을 비분기 자리에서 계산하면 국소 인자가 [Satake 매개변수](satake-isomorphism.md) $A_{\pi_v}=\mathrm{diag}(\alpha_1,\dots,\alpha_n)$ 의 특성다항식의 역수로 나온다.

$$
L(s,\pi_v)=\det\big(1-q_v^{-s}A_{\pi_v}\big)^{-1}
=\prod_{i=1}^n\big(1-\alpha_iq_v^{-s}\big)^{-1}
$$

$n=1$ 이면 $(1-\chi(\varpi)q^{-s})^{-1}$ 로 Tate 의 결과가 되고, $n=2$ 이면 [모듈러 형식](modular-forms.md)의 2 차 오일러 인자가 된다.

# 정의

## 국소 적분

$F$ 를 국소체, $\pi$ 를 $\mathrm{GL}\_n(F)$ 의 기약 허용 표현, $\Phi\in\mathcal S(M_n(F))$ 라 하자. $v\in V_\pi$ 와 반대표현의 $\tilde v\in V_{\tilde\pi}$ 에 대해

$$
\varphi(g)=\langle\pi(g)v,\tilde v\rangle
$$

를 $\pi$ 의 **행렬 계수(matrix coefficient)** 라 한다. $n=1$ 이면 $\pi$ 는 지표 $\chi$ 이고 행렬 계수는 $\chi$ 의 상수배다. 행렬 계수는 Schur 직교성(Schur orthogonality)에 따라 지표와 같은 직교관계를 만족한다.

$$
Z(s,\Phi,\varphi)=\int_{\mathrm{GL}\_n(F)}\Phi(g)\thinspace\varphi(g)\thinspace
\lvert\det g\rvert^{\thinspace s+\frac{n-1}2}\thinspace dg
$$

이 적분이 **Godement–Jacquet 적분(Godement–Jacquet integral)** 이다. $\mathrm{Re}(s)$ 가 충분히 크면 수렴하고 $q^{-s}$ 의 유리함수로 접속한다. 이런 적분 전체가 만드는 $\mathbb C[q^{\pm s}]$ 가군의 생성원이 국소 $L$ 인자 $L(s,\pi)$ 다. 지수를 $s+\frac{n-1}2$ 로 옮기는 것은 함수방정식이 $s\leftrightarrow1-s$ 가 되게 하는 정규화다.

$n=1$, $F=\mathbb Q_p$, $\chi=1$, $\Phi=\mathbf 1_{\mathbb Z_p}$ 이면 적분은 $\sum_{k\ge0}p^{-ks}=(1-p^{-s})^{-1}$ 이고, 이것이 $\zeta(s)$ 의 $p$ 자리 인자다.

## 대역 적분과 함수방정식

$\pi$ 를 $\mathrm{GL}\_n(\mathbb A)$ 의 첨점 자기동형 표현이라 하고 위의 적분을 아델 위에서 잡는다.

Godement 와 Jacquet 이 1972 년에 다음을 증명했다[^1]. $Z(s,\Phi,\varphi)$ 는 $\mathbb C$ 전체로 해석적으로 접속하고($n\ge2$ 이면 정함수) 다음을 만족한다.

$$
Z(s,\Phi,\varphi)=Z(1-s,\widehat\Phi,\tilde\varphi)
$$

여기서 $\tilde\varphi(g)=\varphi(g^{-1})$ 는 반대표현 $\tilde\pi$ 의 행렬 계수다. 따라서 완비 $L$ 함수 $\Lambda(s,\pi)=\prod_vL(s,\pi_v)$ 가 정함수이고 다음이 성립한다.

$$
\Lambda(s,\pi)=\varepsilon(s,\pi)\thinspace\Lambda(1-s,\tilde\pi)
$$

$n=1$ 의 자명한 지표에서는 $\zeta$ 함수에 극점이 생기고, $n\ge2$ 의 첨점 표현에서는 극점이 없다.

## 표준 L 함수

이렇게 정의된 $L(s,\pi)$ 를 $\pi$ 의 **표준 L 함수(standard L-function)** 라 한다. [Langlands 강령](langlands-program.md)의 대응으로는 쌍대군 ${}^L\mathrm{GL}\_n=\mathrm{GL}\_n(\mathbb C)$ 의 표준표현에 딸린 $L$ 함수다. 대칭곱이나 외적곱 같은 다른 표현의 $L$ 함수는 이 방법으로 나오지 않는다.

# 성질

## 행렬대수의 역할

구성이 되려면 $M_n$ 이 세 조건을 만족해야 한다.

- $\mathrm{GL}\_n$ 이 $M_n$ 의 조밀한 열린 부분집합이다. 그래서 $\mathrm{GL}\_n$ 위의 적분을 $M_n$ 위의 Schwartz 함수로 다룰 수 있다.
- $M_n$ 위에 $\mathrm{GL}\_n\times\mathrm{GL}\_n$ 이 왼쪽·오른쪽 곱으로 작용하고 [Fourier 변환](fourier-transform.md)이 이 작용과 어울린다. 자기쌍대 측도에서 $\widehat\Phi$ 가 다시 Schwartz 함수다.
- $\det$ 이 $M_n$ 위의 다항식이라 $\lvert\det\rvert^s$ 의 국소 적분이 $\mathrm{Re}(s)$ 가 큰 영역에서 수렴하고 유리함수로 접속한다.

다른 군에는 이런 벡터공간이 없으므로 이 방법은 $\mathrm{GL}\_n$ 에 한정된다. 다른 군과 다른 $L$ 함수에는 [Rankin–Selberg 적분](rankin-selberg.md)이나 Langlands–Shahidi 방법을 쓴다.

## 적용 범위

| | 상태 |
|---|---|
| $\mathrm{GL}\_n$ 의 표준 $L$ 함수 | Godement–Jacquet — 무조건적 |
| $\mathrm{GL}\_n\times\mathrm{GL}\_m$ 의 Rankin–Selberg | Jacquet–Piatetski-Shapiro–Shalika — 무조건적 |
| 대칭곱 $L(s,\mathrm{Sym}^k\pi)$ | $k\le4$ 만 알려짐 (Kim–Shahidi) |
| 일반 $L(s,\pi,r)$ | Langlands 의 추측 |

[Sato–Tate](sato-tate.md)에는 모든 $k$ 의 대칭곱이 필요하고 표준 $L$ 함수만으로는 닿지 않는다. Taylor 등은 잠재적 모듈러성으로 우회했다.

## Tate 와의 대응

| GL₁ 의 Tate | GLₙ 의 Godement–Jacquet |
|---|---|
| 벡터공간 $\mathbb A$ | 행렬대수 $M_n(\mathbb A)$ |
| 군 $\mathbb A^\times$ | $\mathrm{GL}\_n(\mathbb A)$ |
| 지표 $\chi$ | 행렬 계수 $\langle\pi(g)v,\tilde v\rangle$ |
| $\lvert x\rvert^s$ | $\lvert\det g\rvert^{s+(n-1)/2}$ |
| Fourier 변환 $f\mapsto\hat f$ | $\Phi\mapsto\widehat\Phi$ (자기쌍대 [측도](measure.md)) |
| Poisson 합공식 | 같은 공식, $M_n$ 위에서 |
| $L$ 인자 $(1-\chi(\varpi)q^{-s})^{-1}$ | $\det(1-q^{-s}A_\pi)^{-1}$ |
| 근 수 $\varepsilon$ | 같은 꼴의 $\varepsilon(s,\pi)$ |

[Gauss 합](gauss-sums.md)이 $\mathrm{GL}\_1$ 의 분기 자리에서 근 수로 나타나듯, $\mathrm{GL}\_n$ 에서도 분기 자리의 $\varepsilon$ 이 비자명한 정보를 담는다. Deligne 과 Langlands 의 국소 상수 이론이 그것을 Galois 쪽 근 수와 맞춘다.

## 모듈러 형식과의 사전

$n=2$ 에서 무게 $k$ 의 Hecke 고유형식 $f=\sum a_nq^n$ 에 딸린 $\pi_f$ 의 Satake 매개변수는 정규화 전에

$$
\lbrace\alpha_p,\beta_p\rbrace,\qquad\alpha_p+\beta_p=a_p,\quad\alpha_p\beta_p=p^{k-1}
$$

다. 그러면 표준 $L$ 함수가

$$
L(s,\pi_f)=\prod_p\big(1-a_pp^{-s}+p^{k-1-2s}\big)^{-1}=\sum_{n\ge1}\frac{a_n}{n^s}
$$

이다. 오일러 곱과 [Dirichlet 급수](dirichlet-series.md)가 같다는 이 등식이 [Hecke 작용소](hecke-operators.md)의 곱셈성이고, 국소 인자가 $2\times2$ 행렬의 특성다항식이라는 진술이다.

# 활용

## 오일러 곱의 전개

$\Delta$ 의 표준 $L$ 함수는 오일러 곱 $\prod_p(1-\tau(p)p^{-s}+p^{11-2s})^{-1}$ 이고, 이것을 Dirichlet 급수로 전개하면 계수가 $\tau(n)$ 이다. 소수마다의 국소 인자를 전개하면 $p$ 거듭제곱 자리의 계수가 2 항 점화식을 만족한다.

$$
\tau(p^{m+1})=\tau(p)\thinspace\tau(p^m)-p^{11}\thinspace\tau(p^{m-1})
$$

서로소인 자리끼리는 국소 인자가 독립이므로 $\gcd(m,n)=1$ 일 때 $\tau(mn)=\tau(m)\tau(n)$ 이다. 이 두 관계가 $\mathrm{GL}\_2$ 의 표준 $L$ 함수가 자리마다의 곱이라는 진술의 고전적 판본이다.

## 국소 인자와 특성다항식

$1-\tau(p)X+p^{11}X^2=\det(1-X\thinspace A_{\pi_p})$ 에서 $A_{\pi_p}$ 의 [고윳값](eigenvalues.md)이 $\alpha_p,\beta_p$ 이고, 대각합이 $\tau(p)$ , [행렬식](determinants.md)이 $p^{11}$ 이다. 이 행렬이 Satake 매개변수이고 $\mathrm{GL}\_n$ 에서는 $n\times n$ 이 된다.

## 계수와 대칭곱 지표

$c_{p^m}=\sum_{k=0}^m\alpha^k\beta^{m-k}$ 는 $\mathrm{GL}\_2(\mathbb C)$ 의 $m$ 번째 대칭곱 표현의 지표를 $A_{\pi_p}$ 에서 평가한 값이다. $\tau(p^m)$ 이 Satake 매개변수의 대칭곱 지표다.

Sato–Tate 의 등분포에는 모든 대칭곱의 평균이 사라져야 하고 그 평균을 $L(s,\mathrm{Sym}^m\pi)$ 가 통제한다. Godement–Jacquet 은 $m=1$ 인 표준표현만 준다.

## 관련 정리와 일반화

- Langlands 강령의 전제. 자기동형 $L$ 함수의 좋은 성질이 강령의 모든 진술의 전제이고, $\mathrm{GL}\_n$ 표준 $L$ 함수에 대해 이 정리가 그것을 무조건적으로 준다.
- 강한 중복도 1. 표준 $L$ 함수가 표현을 결정한다는 정리(Jacquet–Shalika)가 거의 모든 자리의 Satake 매개변수로 $\pi$ 가 정해진다는 말이고, 증명에 이 적분이 쓰인다.
- Rankin–Selberg. Jacquet–Piatetski-Shapiro–Shalika 의 적분이 $\mathrm{GL}\_n\times\mathrm{GL}\_m$ 의 $L$ 함수를 같은 방식으로 다룬다. 함수성 판정과 Ramanujan 형 추정의 주요 도구다.
- 국소 상수. 국소 Langlands 대응의 검증 조건은 분기 자리의 $\varepsilon(s,\pi)$ 를 Galois 쪽 근 수와 맞추는 것이다.
- 더 일반적인 군. $M_n$ 같은 벡터공간이 없는 군에서는 이 방법이 통하지 않는다. Braverman–Kazhdan 과 L. Lafforgue 가 일반 군에서 $M_n$ 을 대신할 공간을 찾는 강령을 제안했다.

[^1]: R. Godement, H. Jacquet, *Zeta Functions of Simple Algebras*, Lecture Notes in Math. 260 (1972). Tate 이론과의 비교는 D. Bump, *Automorphic Forms and Representations* (1997) 3장. Satake 매개변수와 비분기 계산은 같은 책 4장, 또는 A. Knapp 의 Motives 논문집 개설. Rankin–Selberg 쪽은 H. Jacquet, I. Piatetski-Shapiro, J. Shalika, *Rankin–Selberg convolutions*, Amer. J. Math. **105** (1983). 일반 군으로의 확장 제안은 A. Braverman, D. Kazhdan, *γ-functions of representations and lifting*, GAFA (2000).

# 연관 문서

## 선수지식

- [Tate 의 zeta 적분](tate-zeta-integral.md)
- [Langlands 강령](langlands-program.md)

## 더 알아보기

- [Satake 동형](satake-isomorphism.md)
- [Rankin–Selberg 적분](rankin-selberg.md)

#number_theory #analysis #group_theory #computation
