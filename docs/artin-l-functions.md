# Artin L 함수

# 개요

**Artin L 함수(Artin L-function)** 는 수체의 Galois 확대에서 소수가 어떻게 갈라지는지를 Galois 군의 표현마다 모아 적은 함수다. $x^3-2$ 를 $p$ 를 법으로 인수분해하면 $p=31$ 에서는 일차식 셋, $p=5$ 에서는 일차식 하나와 기약 이차식, $p=7$ 에서는 기약 삼차식이 된다. Artin L 함수는 이 갈라지는 모양에 해당하는 Frobenius 원소에서 표현의 특성다항식으로 소수마다 인자를 정하고, 그 인자들을 곱해 갈라짐의 분포를 해석함수로 다룬다.

# 직관

Artin L 함수는 수체의 Galois 확대 $L/K$ 와 Galois 군의 복소 표현 $\rho$ 에 대해, 소 아이디얼마다 Frobenius 원소의 특성다항식으로 Euler 인자를 정해 곱한 함수 $L(s,\rho)$ 다. 자명한 표현에서는 $K$ 의 [Dedekind zeta 함수](dedekind-zeta.md)이고, 1 차원 표현에서는 유체론을 거쳐 Hecke L 함수(Hecke L-function)가 된다.

정칙 표현의 Artin L 함수가 $\zeta_L$ 이므로 $\zeta_L$ 은 기약 표현의 Artin L 함수의 곱으로 분해된다. 자명하지 않은 기약 표현의 $L(s,\rho)$ 가 정함수라는 것이 Artin 추측(Artin conjecture)이다.

$K=\mathbb Q(\sqrt[3]2)$ 의 Dedekind zeta 함수의 Euler 인자는 $x^3-2$ 를 $p$ 를 법으로 인수분해한 모양으로 정해진다. $T=p^{-s}$ 로 쓴다. $p=31$ 에서는 $4^3\equiv2$ 이고 $\mathbb F_{31}$ 이 $1$ 의 원시 세제곱근을 포함하므로 일차식 셋으로 갈라져 인자가 $(1-T)^{-3}$ 이다. $p=5$ 에서는 $3^3\equiv2$ 인 근 하나와 기약 이차식으로 갈라져 $(1-T)^{-1}(1-T^2)^{-1}$ 이고, $p=7$ 에서는 근이 없어 $(1-T^3)^{-1}$ 이다.

$\zeta_K$ 를 $\zeta$ 로 나누면 세 인자는 $(1-T)^{-2}$, $(1-T^2)^{-1}$, $(1+T+T^2)^{-1}$ 이 된다. $K$ 의 Galois 폐포의 Galois 군은 $S_3$ 이고, 세 경우의 Frobenius 는 차례로 항등원, 호환, 3 순환이다. $S_3$ 의 2 차원 기약 표현 $\rho_2$ 에서 세 원소의 고윳값은 $\lbrace1,1\rbrace$, $\lbrace1,-1\rbrace$, $\lbrace\omega,\omega^2\rbrace$ 이므로 $\det(1-\rho_2(\mathrm{Frob})T)$ 가 각각 $(1-T)^2$, $1-T^2$, $1+T+T^2$ 다.

그래서 $\zeta_K(s)/\zeta(s)$ 는 소수마다 $\det(1-\rho_2(\mathrm{Frob}\_p)p^{-s})^{-1}$ 을 곱한 함수이고, Dirichlet 지표 대신 2 차원 표현으로 적힌 $L$ 함수다. 이것이 $L(s,\rho_2)$ 다.

# 정의

$L/K$ 를 수체의 Galois 확대, $G=\mathrm{Gal}(L/K)$, $\rho:G\to\mathrm{GL}(V)$ 를 유한차원 복소 표현이라 한다. $K$ 의 소 아이디얼 $\mathfrak p$ 위의 $\mathfrak P$ 를 하나 잡고, [분기군](ramification-groups.md)의 분해군 $D_{\mathfrak P}$, 관성군 $I_{\mathfrak P}$, Frobenius 원소 $\mathrm{Frob}\_{\mathfrak P}\in D_{\mathfrak P}/I_{\mathfrak P}$ 를 쓴다.

$$
L_{\mathfrak p}(s,\rho)=\det\big(1-\rho(\mathrm{Frob}\_{\mathfrak P})N(\mathfrak p)^{-s}\thinspace\big\vert\thinspace V^{I_{\mathfrak P}}\big)^{-1},\qquad
L(s,\rho)=\prod_{\mathfrak p}L_{\mathfrak p}(s,\rho)
$$

$V^{I_{\mathfrak P}}$ 는 관성군이 고정하는 부분공간이고, 그 위에서 Frobenius 의 작용이 잘 정의된다. $\mathfrak P$ 를 바꾸면 Frobenius 가 켤레로 바뀌므로 인자가 $\mathfrak p$ 에만 의존한다. 곱은 $\mathrm{Re}\thinspace s\gt1$ 에서 절대수렴한다.

# 성질

## 형식적 성질

[군의 표현](group-representations.md)의 연산과 다음과 같이 맞물린다.[^1]

- 직합: $L(s,\rho\oplus\rho')=L(s,\rho)L(s,\rho')$.
- 유도: $H\le G$ 의 표현 $\rho$ 에 대해 $L(s,\mathrm{Ind}\_H^G\rho)=L(s,\rho)$. 우변은 $L/L^H$ 위의 Artin L 함수다.
- 몫: $\rho$ 가 $G/N$ 을 거치면 $L/K$ 와 $L^N/K$ 에서 계산한 값이 같다.

자명한 표현에서 $L(s,1)=\zeta_K(s)$ 이고, 정칙 표현은 $H=1$ 에서 유도한 자명 표현이므로 $L(s,\mathrm{reg})=\zeta_L(s)$ 다. 정칙 표현을 기약 표현으로 분해하면

$$
\zeta_L(s)=\prod_{\rho\ \text{기약}}L(s,\rho)^{\dim\rho}
$$

이다. 직관 절의 $\mathbb Q(\sqrt[3]2)$ 는 $\mathrm{Ind}\_{S_2}^{S_3}1=1\oplus\rho_2$ 이므로 $\zeta_K=\zeta\cdot L(s,\rho_2)$ 다.

## 아벨 표현

$\rho$ 가 1 차원이면 $\rho$ 는 $G$ 의 아벨화를 거치고, [유체론](class-field-theory.md)의 Artin 상호사상이 $\rho$ 를 이델류군의 지표 $\chi$ 로 옮긴다. 그러면 $L(s,\rho)=L(s,\chi)$ 가 Hecke L 함수이고, $\chi\ne1$ 이면 정함수다. $K=\mathbb Q$ 이면 $\chi$ 는 Dirichlet 지표이고 $L(s,\rho)$ 는 [Dirichlet L 함수](dirichlet-l-functions.md)다.

## Brauer 유도 정리와 유리형성

**Brauer 유도 정리(Brauer induction theorem).** 유한군의 지표는 기본 부분군(elementary subgroup)의 1 차원 지표에서 유도한 지표들의 정수 계수 일차결합이다.[^1]

형식적 성질과 아벨 표현의 정함수성을 합치면 $L(s,\rho)$ 는 Hecke L 함수들의 정수 거듭제곱의 곱이 되고, 따라서 복소평면 전체에서 유리형이다. 계수가 음수일 수 있으므로 정함수성은 이 방법으로 나오지 않는다.

## 함수방정식과 도체

무한 자리의 감마 인자와 분기군으로 정한 Artin 도체 $\mathfrak f(\rho)$ 를 붙인 완비 $L$ 함수 $\Lambda(s,\rho)$ 는

$$
\Lambda(s,\rho)=W(\rho)\thinspace\Lambda(1-s,\bar\rho),\qquad\vert W(\rho)\vert=1
$$

을 만족한다. $W(\rho)$ 를 Artin 근 번호(Artin root number)라 한다. 직관 절의 $\rho_2$ 의 도체는 $108$ 이고, 이것은 $\mathbb Q(\sqrt[3]2)$ 의 판별식 $-108$ 의 절댓값과 같다.

## Artin 추측

Artin 추측은 자명하지 않은 기약 표현 $\rho$ 의 $L(s,\rho)$ 가 정함수라는 진술이다. $\rho$ 가 $\mathbb Q$ 위의 2 차원 홀수 표현이면 [Serre 추측](serre-conjecture.md)의 증명으로 $\rho$ 가 무게 $1$ 의 모듈러 형식에서 오고, 그 $L$ 함수가 정함수이므로 Artin 추측이 성립한다.[^2]

# 활용

- [Chebotarev 밀도 정리](chebotarev.md): $\sum_{\mathrm{Frob}\_p\in C}p^{-s}$ 를 지표의 직교성으로 $\log L(s,\rho)$ 들의 일차결합으로 쓰고, $s=1$ 에서 $\zeta_K$ 만 극을 갖고 나머지는 $0$ 이 아니라는 것에서 밀도 $\char35{}C/\char35{}G$ 가 나온다.
- Dedekind zeta 함수: $\zeta_L/\zeta_K$ 가 자명하지 않은 기약 표현의 $L$ 함수의 곱이므로, Artin 추측은 $\zeta_L/\zeta_K$ 가 정함수라는 Dedekind 추측을 포함한다.
- [Langlands 강령](langlands-program.md): $n$ 차원 Artin 표현마다 $\mathrm{GL}\_n$ 의 자기동형 표현이 대응하여 $L$ 함수가 같다는 진술이 강한 Artin 추측이다.

[^1]: J. Neukirch, *Algebraic Number Theory*, Grundlehren 322, Springer, 1999, 7장 10절과 11절.
[^2]: C. Khare, J.-P. Wintenberger, "Serre's modularity conjecture (I)", *Inventiones Mathematicae* 178 (2009), 485–504.

# 연관 문서

## 선수지식

- [Dedekind zeta 함수](dedekind-zeta.md)
- [분기군](ramification-groups.md)
- [군의 표현](group-representations.md)

## 더 알아보기

- [Langlands–Tunnell 정리](langlands-tunnell.md)

#number_theory #group_theory #complex_analysis
