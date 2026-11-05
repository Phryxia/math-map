# Herbrand–Ribet 정리와 Eisenstein 합동

# 개요

**Herbrand–Ribet 정리(Herbrand–Ribet theorem)** 는 짝수 $2\le k\le p-3$ 에 대해 소수 $p$ 가 [Bernoulli 수](bernoulli-numbers.md) $B_k$ 를 나누는 것과 [원분체](cyclotomic-fields.md) $\mathbb Q(\mu_p)$ 의 류군의 $\omega^{1-k}$ 성분이 $0$ 이 아닌 것이 동치라는 정리다. $p=37$ 은 $B_{32}$ 의 분자를 나누고, $\mathbb Q(\mu_{37})$ 의 정수환에서는 소인수분해가 유일하지 않다. 류군이 $0$ 인지는 정수환의 아이디얼을 직접 다뤄야 알 수 있지만, 정리를 쓰면 류군의 각 성분이 $0$ 인지를 Bernoulli 수 하나의 나눗셈으로 판정한다.

# 직관

$\mathbb Q(\mu_p)$ 의 류군은 정수환에서 소인수분해가 얼마나 유일하지 않은지를 재는 유한 아벨군이다. 류군을 Galois 군의 작용에 따라 성분으로 나누면, [Stickelberger 원소](stickelberger.md)가 류군을 $0$ 으로 보낸다는 사실에서 $p\nmid B_k$ 일 때 대응하는 성분이 $0$ 임이 나온다. $p\mid B_k$ 이면 Stickelberger 원소의 그 성분이 $p$ 로 나누어져 아무것도 알려 주지 않는다. 그 성분이 $0$ 이 아님을 보이려면 류군의 원소, 곧 $\mathbb Q(\mu_p)$ 위의 불분기 아벨 확대를 하나 만들어야 한다.

$p=691$, $k=12$ 를 보자. $B_{12}=-691/2730$ 이므로 $691\mid B_{12}$ 이다. 무게 $12$ 의 [Eisenstein 급수](eisenstein-series.md) $E_{12}=\frac{691}{65520}+\sum_{n\ge1}\sigma_{11}(n)q^n$ 은 상수항이 $691$ 로 나누어진다. 상수항이 없는 [모듈러 형식](modular-forms.md) $\Delta=\sum\tau(n)q^n$ 과 비교하면 $\tau(n)\equiv\sigma_{11}(n)\pmod{691}$ 이다. $n=2$ 에서 $\tau(2)-\sigma_{11}(2)=-24-2049=-3\cdot 691$ 이다.

$\Delta$ 에는 [Galois 표현](galois-representations.md) $\rho_\Delta$ 가 붙어 있고, 소수 $\ell$ 의 Frobenius 원소에서 대각합이 $\tau(\ell)$ 이다. $691$ 을 법으로 줄이면 대각합이 $1+\ell^{11}$ 이 되어, 표현이 $1$ 과 $\ell^{11}$ 을 값으로 갖는 두 지표로 쪼개질 것처럼 보인다. $\Delta$ 는 Eisenstein 급수가 아니므로 표현이 완전히 쪼개지지 않고, 쪼개지지 않는 부분이 $\mathbb Q(\mu_{691})$ 위의 불분기 확대를 정한다. 이것이 Ribet 의 논법이다.

# 정의

## 지표 성분

$A$ 를 $\mathbb Q(\mu_p)$ 의 아이디얼류군의 $p$ 부분, $\Delta_p=\mathrm{Gal}(\mathbb Q(\mu_p)/\mathbb Q)\cong(\mathbb Z/p)^{\times}$ 라 하자. **Teichmüller 지표(Teichmüller character)** $\omega\colon\Delta_p\to\mathbb Z_p^\times$ 는 $\zeta\mapsto\zeta^a$ 인 원소 $\sigma_a$ 를 $\omega(\sigma_a)\equiv a\pmod p$ 인 $1$ 의 $(p-1)$ 제곱근으로 보내는 지표다. $\char35{}\Delta_p=p-1$ 이 $p$ 와 서로소이므로 군환 $\mathbb Z_p\lbrack\Delta_p\rbrack$ 의 멱등원 $\varepsilon_i$ 로 $A$ 가 쪼개진다.

$$
A=\bigoplus_{i=0}^{p-2}A^{(\omega^{i})},
\qquad
\varepsilon_i=\frac1{p-1}\sum_{\delta\in\Delta_p}\omega^{i}(\delta)\thinspace\delta^{-1},
\qquad
A^{(\omega^{i})}=\varepsilon_iA
$$

$A^{(\omega^{i})}$ 를 $A$ 의 **$\omega^i$ 성분($\omega^i$-component)** 이라 한다. $\Delta_p$ 는 이 성분 위에 $\omega^i$ 로 작용한다. $p=37$ 이면 $A$ 는 위수 $37$ 의 순환군이고, $A=A^{(\omega^{5})}$ 다. $1-32\equiv5\pmod{36}$ 이므로 $\omega^{5}=\omega^{1-32}$ 이다.

## Eisenstein 급수

무게 $k\ge4$ 가 짝수일 때 레벨 1 의 정규화된 Eisenstein 급수는 다음 급수다.

$$
E_k=-\frac{B_k}{2k}+\sum_{n\ge1}\sigma_{k-1}(n)q^{n}
$$

$\sigma_{k-1}(n)$ 은 $n$ 의 약수의 $k-1$ 제곱의 합이다. $E_k$ 는 모든 [Hecke 작용소](hecke-operators.md)의 고유형식이고 $T_\ell E_k=(1+\ell^{k-1})E_k$ 다. $k=12$ 이면 $-B_{12}/24=691/65520$ 이다.

## Eisenstein 합동

레벨 1, 무게 $k$ 의 고유첨점형식 $f$ 와 그 계수체의 $p$ 위 [소 아이디얼](prime-ideals.md) $\mathfrak p$ 가 다음을 만족하면, $f$ 가 $\mathfrak p$ 를 법으로 $E_k$ 와 **Eisenstein 합동(Eisenstein congruence)** 이라 한다.

$$
a_\ell(f)\equiv1+\ell^{k-1}\pmod{\mathfrak p}\qquad(\text{모든 소수 }\ell\ne p)
$$

$\Delta$ 는 $691$ 을 법으로 $E_{12}$ 와 Eisenstein 합동이다. 이 합동을 Ramanujan 합동(Ramanujan congruence)이라 한다.

# 성질

## Herbrand–Ribet 정리

$p$ 가 홀소수, $k$ 가 짝수, $2\le k\le p-3$ 이면 다음이 성립한다.

$$
p\mid B_k\quad\Longleftrightarrow\quad A^{(\omega^{1-k})}\ne0
$$

$\Leftarrow$ 는 Herbrand(1932), $\Rightarrow$ 는 Ribet(1976)이 증명했다. 두 방향의 증명 방법은 다르다.

| 방향 | 도구 |
|---|---|
| $p\nmid B_k\Rightarrow A^{(\omega^{1-k})}=0$ | Stickelberger 원소가 류군을 소멸시킨다 |
| $p\mid B_k\Rightarrow A^{(\omega^{1-k})}\ne0$ | Eisenstein 합동과 Galois 표현으로 원소를 만든다 |

$p=691$, $k=12$ 이면 $A^{(\omega^{-11})}\ne0$ 이다.

## Eisenstein 합동의 존재

$p$ 가 홀소수, $k$ 가 짝수, $2\le k\le p-3$ 이고 $p\mid B_k$ 이면, $\mathfrak p$ 를 법으로 $E_k$ 와 Eisenstein 합동인 레벨 1, 무게 $k$ 의 고유첨점형식 $f$ 가 존재한다[^1].

무게 $k$ 의 형식 공간에서 Eisenstein 부분을 상수항 $1$ 로 정규화하면 계수의 분모에 $B_k$ 가 들어간다. $p\mid B_k$ 이면 이 정규화가 $\mathbb Z_p$ 위에서 불가능하고, Hecke 대수에서 [Eisenstein 아이디얼과 Mazur 의 비틀림점 정리](eisenstein-ideal.md)의 Eisenstein 아이디얼이 진부분 아이디얼이 된다. 그 위의 극대 아이디얼이 합동인 첨점형식 $f$ 를 준다.

## Ribet 의 구성

$f$ 에 붙는 2 차원 $p$ 진 Galois 표현 $\rho_f$ 는 $\ell\ne p$ 에서 다음을 만족한다.

$$
\mathrm{tr}\thinspace\rho_f(\mathrm{Fr}\_\ell)=a_\ell,\qquad \det\rho_f(\mathrm{Fr}\_\ell)=\ell^{k-1}
$$

$\mathfrak p$ 를 법으로 줄이면 대각합이 $1+\ell^{k-1}$ 이고 [행렬식](determinants.md)이 $\ell^{k-1}$ 이다. Brauer–Nesbitt 정리(Brauer–Nesbitt theorem)로 반단순화가 $1\oplus\omega^{k-1}$ 이므로 $\bar\rho_f$ 는 가약이다. Ribet 은 격자를 바꿔 $\bar\rho_f$ 가 분해되지 않게 잡을 수 있음을 보였고, 그러면 적당한 기저에서 다음 꼴이다.

$$
\bar\rho_f=\begin{pmatrix}1&\ast\cr 0&\omega^{k-1}\end{pmatrix},\qquad \ast\ne0
$$

$\ast$ 가 비자명한 코사이클 $c\in H^1\big(G_{\mathbb Q},\mathbb F_p(\omega^{1-k})\big)$ 를 정의한다. $c$ 가 정하는 확대가 불분기여야 류군의 원소가 된다. $\ell\ne p$ 에서는 $f$ 가 레벨 1 이라 $\rho_f$ 가 불분기이므로 $c$ 도 불분기다. $\ell=p$ 에서는 $\rho_f$ 가 분해군(decomposition group) 위에서 $\begin{pmatrix}\omega^{k-1}&\ast\cr 0&1\end{pmatrix}$ 꼴의 보통(ordinary) 표현이고, 대각 성분의 순서가 대역 쪽과 반대이므로 $c$ 의 $p$ 자리 제한이 불분기다.

## 지표 ω¹⁻ᵏ

$\ast$ 는 대각 성분의 비 $1\cdot\omega^{-(k-1)}=\omega^{1-k}$ 를 계수로 갖는 코사이클이다. 그래서 $c$ 가 정하는 $\mathbb Q(\mu_p)$ 위의 불분기 아벨 확대에 $\Delta_p$ 가 $\omega^{1-k}$ 로 작용하고, [유체론](class-field-theory.md)으로 이 확대가 $A^{(\omega^{1-k})}$ 의 $0$ 아닌 원소를 준다.

$k$ 가 짝수이므로 $1-k$ 는 홀수이고, 이 정리는 류군의 홀수 성분만 다룬다. Stickelberger 원소도 홀수 성분에서만 정보를 준다. 짝수 성분이 $0$ 이라는 주장이 [Vandiver 추측과 순환체의 짝수 성분](vandiver-conjecture.md)의 Vandiver 추측이다.

## 무게의 범위

von Staudt–Clausen 정리(von Staudt–Clausen theorem)로 $(p-1)\mid k$ 이면 $B_k$ 의 분모가 $p$ 를 포함하므로 $p$ 는 $B_k$ 의 분자를 나누지 않는다. 짝수 $k$ 가운데 $2\le k\le p-3$ 인 것은 $k\not\equiv0\pmod{p-1}$ 인 것의 대표 전체다. Kummer 합동(Kummer congruence)으로 $k\equiv k'\not\equiv0\pmod{p-1}$ 이면 $B_k/k\equiv B_{k'}/k'\pmod p$ 이므로, $p$ 가 $B_k$ 의 분자를 나누는지는 $k$ 를 이 범위의 대표로 바꿔 판정한다.

## Mazur–Wiles 정리

Ribet 의 논법은 성분이 $0$ 이 아님을 보이는 원소 하나를 만든다. Mazur 와 Wiles 는 [Iwasawa 주추측](iwasawa-main-conjecture.md)을 증명하려고 성분의 크기를 계산했다.

- 레벨 1 대신 레벨 $Np^{r}$ 의 [모듈러 곡선](modular-curves.md)을 쓰고 $r$ 을 키운다.
- 코사이클 하나 대신 모듈러 곡선의 [Jacobi 다양체](jacobian-variety.md) 가운데 Eisenstein 아이디얼이 소멸시키는 부분 전체를 쓴다.
- 그 결과 $\char35{}A^{(\chi)}$ 가 [p 진 L 함수](p-adic-l-function.md)가 예측하는 크기 이상임을 얻는다. 반대 부등식은 해석적 류수 공식(analytic class number formula)에서 나온다.

Rubin 은 같은 결론을 [Euler 계](euler-systems.md)로 증명했다.

# 활용

## 비정칙 소수의 류군

$p$ 가 비정칙 소수(irregular prime)일 때 류군의 어느 성분이 $0$ 이 아닌지가 Herbrand–Ribet 정리로 결정된다. $p=37$ 은 $B_{32}$ 의 분자만 나누므로 $A^{(\omega^{5})}$ 만 $0$ 이 아니다. 성분을 정하는 데 Bernoulli 수만 계산하면 되므로 류군을 직접 계산하는 것보다 빠르다.

## 합동으로 만든 표현

고유형식이 Eisenstein 급수와 합동이면 그 표현이 법 $\mathfrak p$ 에서 가약이라는 사실을 [Serre 추측과 Khare–Wintenberger 정리](serre-conjecture.md)와 [Galois 표현의 변형환](deformation-rings.md)에서 쓴다. 변형환에서는 Eisenstein 극대 아이디얼에서의 Hecke 대수의 국소 구조를 묻고, Mazur 가 이것을 처음 연구했다. $\mathbb Q$ 위 타원곡선의 비틀림점 분류(Mazur 의 비틀림점 정리)도 같은 방법으로 증명되었다.

## 타원곡선의 주추측

Skinner 와 Urban 은 타원곡선의 모듈러 형식에서 $\mathrm{GU}(2,2)$ 의 Klingen Eisenstein 급수를 만들고 그것과 합동인 첨점형식을 찾아 타원곡선의 Iwasawa 주추측의 한쪽 부등식을 증명했다. 합동에서 가약 표현을 얻고, 분해되지 않는 부분에서 [Selmer 군](selmer-tate-shafarevich.md)의 원소를 만드는 단계는 Ribet 의 논법과 같다. Kato 의 Euler 계가 반대쪽 부등식을 주고, 두 부등식을 합쳐 주추측이 증명된다.

[^1]: K. Ribet, *A modular construction of unramified p-extensions of* $\mathbb Q(\mu_p)$ (Invent. Math. **34**, 1976), 151–162. 해설은 L. Washington, *Introduction to Cyclotomic Fields* (2판) 15 장과 B. Mazur, *Modular curves and the Eisenstein ideal*, Publ. IHES **47** (1977). Mazur–Wiles 는 Invent. Math. **76** (1984), Skinner–Urban 은 Invent. Math. **195** (2014).

# 연관 문서

## 선수지식

- [Stickelberger 원소](stickelberger.md)
- [Galois 표현](galois-representations.md)

## 더 알아보기

- [Eisenstein 아이디얼과 Mazur 의 비틀림점 정리](eisenstein-ideal.md)
- [Vandiver 추측과 순환체의 짝수 성분](vandiver-conjecture.md)

#number_theory #theorem #complex_analysis
