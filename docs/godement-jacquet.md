# Godement–Jacquet 적분

# 개요

[Tate 의 논문](tate-thesis.md)은 Hecke 의 $L$ 함수를 아델 위의 적분 하나로 다시 썼다. 해석적 접속과 함수방정식이 Fourier 해석과 Poisson 합공식에서 나오고, 자리마다의 국소 인자와 근 수가 국소 적분에서 읽힌다.

그 논문은 $\mathrm{GL}\_1$ 을 다루고, Godement 와 Jacquet 이 1972 년에 같은 일을 $\mathrm{GL}\_n$ 에서 했다[^1].

$$
Z(s,\Phi,\varphi)=\int_{\mathrm{GL}\_n(\mathbb A)}\Phi(g)\thinspace\varphi(g)\thinspace
\lvert\det g\rvert^{\thinspace s+\frac{n-1}2}\thinspace dg
$$

$\Phi$ 는 행렬공간 위의 Schwartz 함수이고 $\varphi$ 는 표현 $\pi$ 의 **행렬 계수**다. 이 적분이 $\mathrm{GL}\_n$ 의 모든 첨점 자기동형 표현에 대해 **표준 $L$ 함수** $L(s,\pi)$ 의 해석적 접속과 함수방정식을 준다.

Tate 가 $\mathbb A^\times$ 위의 적분을 다룰 수 있었던 것은 $\mathbb A^\times$ 가 벡터공간 $\mathbb A$ 의 열린 부분집합이기 때문이다. 벡터공간에는 Schwartz 함수와 Fourier 변환과 Poisson 합공식이 있다. $\mathrm{GL}\_n$ 을 담는 벡터공간은 **행렬대수** $M_n$ 이다.

$$
\mathbb G_m\subset\mathbb A^1
\qquad\longleftrightarrow\qquad
\mathrm{GL}\_n\subset M_n
$$

$M_n$ 은 $n^2$ 차원 벡터공간이고 $\mathrm{GL}\_n$ 은 그 안에서 $\det\ne0$ 인 열린 부분집합이다. 곱셈 지표 $\chi$ 의 자리에 표현의 행렬 계수가, $\lvert x\rvert^s$ 의 자리에 $\lvert\det g\rvert^s$ 가 들어가고 나머지는 Tate 의 구성과 같다.

[Langlands 강령](langlands-program.md)은 자기동형 표현의 $L$ 함수가 Galois 쪽 $L$ 함수와 같기를 요구하며, 그러려면 자기동형 쪽 $L$ 함수가 먼저 잘 정의되고 해석적으로 좋아야 한다. Godement–Jacquet 이 $\mathrm{GL}\_n$ 의 표준 $L$ 함수에 대해 이를 무조건적으로 보장한다.

# 직관

## Tate 적분의 부품

$\mathrm{GL}\_1$ 에서 Tate 의 적분은

$$
Z(s,f,\chi)=\int_{\mathbb A^\times}f(x)\thinspace\chi(x)\thinspace\lvert x\rvert^s\thinspace d^\times x
$$

이고 세 부품으로 이루어진다.

1. $f$ : 벡터공간 $\mathbb A$ 위의 Schwartz 함수. Fourier 변환 $\hat f$ 가 있다.
2. $\chi$ : 군 $\mathbb A^\times$ 의 지표. 곧 1 차원 표현.
3. $\lvert x\rvert^s$ : 군에서 $\mathbb C^\times$ 로 가는 매개변수족.

함수방정식은 $f\leftrightarrow\hat f$ , $\chi\leftrightarrow\chi^{-1}$ , $s\leftrightarrow1-s$ 의 대칭에서 나오고 증명은 Poisson 합공식이다.

## 행렬 계수

$n\ge2$ 에서 $\pi$ 는 1 차원이 아니므로 $\chi(x)$ 자리에 표현의 **행렬 계수**를 넣는다. $v\in V_\pi$ 와 반대표현의 $\tilde v\in V_{\tilde\pi}$ 에 대해

$$
\varphi(g)=\langle\pi(g)v,\tilde v\rangle
$$

가 $\mathrm{GL}\_n$ 위의 함수이고, $n=1$ 이면 $\varphi=\chi$ 다. 행렬 계수는 표현의 정보를 함수 하나로 압축하며 Schur 직교성에 의해 지표와 같은 역할을 한다.

$\lvert x\rvert^s$ 자리에는 $\det\colon\mathrm{GL}\_n\to\mathbb G_m$ 을 써서 $\lvert\det g\rvert^s$ 를 넣는다. 지수를 $s+\frac{n-1}2$ 로 옮기는 것은 함수방정식이 $s\leftrightarrow1-s$ 가 되게 하는 정규화다.

## $M_n$ 의 세 성질

$M_n$ 은 다음 세 조건을 만족한다.

- $\mathrm{GL}\_n$ 이 $M_n$ 의 **조밀한 열린** 부분집합이다. 그래서 $\mathrm{GL}\_n$ 위의 적분을 $M_n$ 위의 Schwartz 함수로 다룰 수 있다.
- $M_n$ 위에 $\mathrm{GL}\_n\times\mathrm{GL}\_n$ 이 왼쪽·오른쪽 곱으로 작용하고, Fourier 변환이 이 작용과 잘 어울린다. 자기쌍대 측도에서 $\widehat{\Phi}$ 가 다시 Schwartz 함수다.
- $\det$ 이 $M_n$ 위의 다항식이라 $\lvert\det\rvert^s$ 의 국소 적분이 유리함수로 수렴한다. 수렴영역이 $\mathrm{Re}(s)$ 가 클 때 확보되고, 거기서 해석적으로 접속한다.

다른 군에는 이런 벡터공간이 없으므로 Godement–Jacquet 은 $\mathrm{GL}\_n$ 에 특화된 방법이고, 다른 군과 다른 $L$ 함수에는 [Rankin–Selberg 적분](rankin-selberg.md)이나 Langlands–Shahidi 방법을 쓴다.

## 비분기 자리의 국소 인자

거의 모든 자리에서 $\pi_v$ 는 비분기이고, 그 표현은 **[Satake 매개변수](satake-isomorphism.md)**라 부르는 대각행렬

$$
A_{\pi_v}=\mathrm{diag}(\alpha_1,\dots,\alpha_n)\in\mathrm{GL}\_n(\mathbb C)
$$

의 켤레류로 완전히 결정된다. 이 자리에서 국소 적분을 계산하면

$$
L(s,\pi_v)=\det\big(1-q_v^{-s}A_{\pi_v}\big)^{-1}
=\prod_{i=1}^n\big(1-\alpha_iq_v^{-s}\big)^{-1}
$$

가 나온다. 국소 인자는 Satake 매개변수의 특성다항식의 역수다. $n=1$ 이면 $(1-\chi(\varpi)q^{-s})^{-1}$ 로 Tate 의 결과가 되고, $n=2$ 이면 [모듈러 형식](modular-forms.md)의 2 차 오일러 인자가 된다.

# 정의

## 국소 적분

$F$ 를 국소체, $\pi$ 를 $\mathrm{GL}\_n(F)$ 의 기약 허용 표현, $\varphi$ 를 그 행렬 계수, $\Phi\in\mathcal S(M_n(F))$ 라 하자.

$$
Z(s,\Phi,\varphi)=\int_{\mathrm{GL}\_n(F)}\Phi(g)\thinspace\varphi(g)\thinspace
\lvert\det g\rvert^{\thinspace s+\frac{n-1}2}\thinspace dg
$$

$\mathrm{Re}(s)$ 가 충분히 크면 수렴하고 $q^{-s}$ 의 유리함수로 접속한다. 이런 적분 전체가 만드는 $\mathbb C[q^{\pm s}]$ 가군의 생성원이 국소 $L$ 인자 $L(s,\pi)$ 다.

## 대역 적분과 함수방정식

$\pi$ 를 $\mathrm{GL}\_n(\mathbb A)$ 의 첨점 자기동형 표현이라 하고 위의 적분을 아델 위에서 잡는다.

> **정리 (Godement–Jacquet, 1972).** $Z(s,\Phi,\varphi)$ 는 $\mathbb C$ 전체로 해석적으로 접속하고($n\ge2$ 이면 정함수)
> $$Z(s,\Phi,\varphi)=Z(1-s,\widehat\Phi,\tilde\varphi)$$
> 를 만족한다. 여기서 $\tilde\varphi(g)=\varphi(g^{-1})$ 는 반대표현 $\tilde\pi$ 의 행렬 계수다.
> 따라서 완비 $L$ 함수 $\Lambda(s,\pi)=\prod_vL(s,\pi_v)$ 가 정함수이고
> $$\Lambda(s,\pi)=\varepsilon(s,\pi)\thinspace\Lambda(1-s,\tilde\pi)$$
> 다.

$n=1$ 의 자명한 지표에서는 $\zeta$ 함수에 극점이 생기고, $n\ge2$ 의 첨점 표현에서는 극점이 없다.

## 표준 $L$ 함수

이렇게 정의된 $L(s,\pi)$ 가 $\pi$ 의 **표준(standard) $L$ 함수**이고, Langlands 의 언어로는 쌍대군 ${}^L\mathrm{GL}\_n=\mathrm{GL}\_n(\mathbb C)$ 의 표준표현에 딸린 $L$ 함수다. 대칭곱이나 외적곱 같은 다른 표현의 $L$ 함수는 이 방법으로 나오지 않는다.

# 성질

## 적용 범위

| | 상태 |
|---|---|
| $\mathrm{GL}\_n$ 의 표준 $L$ 함수 | Godement–Jacquet — 무조건적 |
| $\mathrm{GL}\_n\times\mathrm{GL}\_m$ 의 Rankin–Selberg | Jacquet–Piatetski-Shapiro–Shalika — 무조건적 |
| 대칭곱 $L(s,\mathrm{Sym}^k\pi)$ | $k\le4$ 만 알려짐 (Kim–Shahidi) |
| 일반 $L(s,\pi,r)$ | Langlands 의 추측 |

[Sato–Tate](sato-tate.md)에는 모든 $k$ 의 대칭곱이 필요하고 표준 $L$ 함수만으로는 닿지 않는다. Taylor 등은 잠재적 모듈러성으로 우회했다.

## Tate 와의 대응

| $\mathrm{GL}\_1$ 의 Tate | $\mathrm{GL}\_n$ 의 Godement–Jacquet |
|---|---|
| 벡터공간 $\mathbb A$ | 행렬대수 $M_n(\mathbb A)$ |
| 군 $\mathbb A^\times$ | $\mathrm{GL}\_n(\mathbb A)$ |
| 지표 $\chi$ | 행렬 계수 $\langle\pi(g)v,\tilde v\rangle$ |
| $\lvert x\rvert^s$ | $\lvert\det g\rvert^{s+(n-1)/2}$ |
| Fourier 변환 $f\mapsto\hat f$ | $\Phi\mapsto\widehat\Phi$ (자기쌍대 측도) |
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

이다. 오일러 곱과 Dirichlet 급수가 같다는 이 등식이 Hecke 작용소의 곱셈성이고, 국소 인자가 $2\times2$ 행렬의 특성다항식이라는 진술이다.

# 활용

## 오일러 곱의 전개

$\Delta$ 의 표준 $L$ 함수는 오일러 곱 $\prod_p(1-\tau(p)p^{-s}+p^{11-2s})^{-1}$ 이고, 이것을 Dirichlet 급수로 전개하면 계수가 $\tau(n)$ 이다. 소수마다의 국소 인자를 전개하면 $p$ 거듭제곱 자리의 계수가 2 항 점화식을 만족한다.

$$
\tau(p^{m+1})=\tau(p)\thinspace\tau(p^m)-p^{11}\thinspace\tau(p^{m-1})
$$

서로소인 자리끼리는 국소 인자가 독립이므로 $\gcd(m,n)=1$ 일 때 $\tau(mn)=\tau(m)\tau(n)$ 이다. 이 두 관계가 $\mathrm{GL}\_2$ 의 표준 $L$ 함수가 자리마다의 곱이라는 진술의 고전적 판본이다.

## 국소 인자와 특성다항식

$1-\tau(p)X+p^{11}X^2=\det(1-X\thinspace A_{\pi_p})$ 에서 $A_{\pi_p}$ 의 고윳값이 $\alpha_p,\beta_p$ 이고, 대각합이 $\tau(p)$ , 행렬식이 $p^{11}$ 이다. 이 행렬이 Satake 매개변수이고 $\mathrm{GL}\_n$ 에서는 $n\times n$ 이 된다.

## 계수와 대칭곱 지표

$c_{p^m}=\sum_{k=0}^m\alpha^k\beta^{m-k}$ 는 $\mathrm{GL}\_2(\mathbb C)$ 의 $m$ 번째 대칭곱 표현의 지표를 $A_{\pi_p}$ 에서 평가한 값이다. $\tau(p^m)$ 이 Satake 매개변수의 대칭곱 지표다.

[Sato–Tate](sato-tate.md) 의 등분포에는 모든 대칭곱의 평균이 사라져야 하고 그 평균을 $L(s,\mathrm{Sym}^m\pi)$ 가 통제한다. Godement–Jacquet 은 $m=1$ 인 표준표현만 준다.

## 관련 정리와 일반화

- **Langlands 강령의 전제.** 자기동형 $L$ 함수의 좋은 성질이 [강령](langlands-program.md)의 모든 진술의 전제이고, $\mathrm{GL}\_n$ 표준 $L$ 함수에 대해 이 정리가 그것을 무조건적으로 준다.
- **강한 중복도 1.** 표준 $L$ 함수가 표현을 결정한다는 정리(Jacquet–Shalika)가 거의 모든 자리의 Satake 매개변수로 $\pi$ 가 정해진다는 말이고, 증명에 이 적분이 쓰인다.
- **[Rankin–Selberg](rankin-selberg.md).** $\mathrm{GL}\_n\times\mathrm{GL}\_m$ 의 $L$ 함수를 다루는 Jacquet–Piatetski-Shapiro–Shalika 의 적분은 이 방법의 형제다. 함수성 판정과 Ramanujan 형 추정의 주요 도구다.
- **국소 상수.** 국소 Langlands 대응의 검증 조건은 분기 자리의 $\varepsilon(s,\pi)$ 를 Galois 쪽 근 수와 맞추는 것이다.
- **더 일반적인 군.** $M_n$ 같은 벡터공간이 없는 군에서는 이 방법이 통하지 않는다. Braverman–Kazhdan 과 L. Lafforgue 가 일반 군에 대해 같은 역할을 하는 공간을 찾는 강령을 제안했다.

[^1]: R. Godement, H. Jacquet, *Zeta Functions of Simple Algebras*, Lecture Notes in Math. 260 (1972). Tate 이론과의 비교는 D. Bump, *Automorphic Forms and Representations* (1997) 3장. Satake 매개변수와 비분기 계산은 같은 책 4장, 또는 A. Knapp 의 Motives 논문집 개설. Rankin–Selberg 쪽은 H. Jacquet, I. Piatetski-Shapiro, J. Shalika, *Rankin–Selberg convolutions*, Amer. J. Math. **105** (1983). 일반 군으로의 확장 제안은 A. Braverman, D. Kazhdan, *γ-functions of representations and lifting*, GAFA (2000).

# 연관 문서

## 선수지식

- [Tate 의 논문](tate-thesis.md)
- [Langlands 강령](langlands-program.md)

## 더 알아보기

- [Satake 동형과 비분기 Hecke 대수](satake-isomorphism.md)
- [Rankin–Selberg 적분](rankin-selberg.md)

#number_theory #analysis #group_theory #computation
