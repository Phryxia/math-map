# Satake 동형과 비분기 Hecke 대수

# 개요

[Hecke 작용소](hecke-operators.md) $T_p$ 는 이중 잉여류 $\mathrm{SL}\_2(\mathbb Z)\begin{pmatrix}1&0\cr 0&p\end{pmatrix}\mathrm{SL}\_2(\mathbb Z)$ 로 정의된다. 이 정의에서는 작용소들이 서로 가환인 이유도, 고유값이 $L$ 함수의 Euler 인자가 되는 이유도 보이지 않는다.

[아델](adeles.md) 위로 올리면 두 사실이 함께 나온다. 자리 $p$ 를 고정하고 $G=\mathrm{GL}\_n(\mathbb Q_p)$ , $K=\mathrm{GL}\_n(\mathbb Z_p)$ 라 하자. 콤팩트 받침을 갖는 양쪽 $K$ 불변 함수들이 합성곱으로 이루는 대수

$$
\mathcal H(G,K)=C_c^\infty(K\backslash G/K)
$$

가 **비분기 Hecke 대수** 또는 구형 Hecke 대수이고, 고전적 $T_p$ 는 이 대수의 원소다. Satake 가 1963 년에 이 대수를 결정했다.

$$
\mathcal H(G,K)\thickspace\xrightarrow{\ \sim\ }\thickspace\mathbb C[x_1^{\pm1},\dots,x_n^{\pm1}]^{S_n}
\thickspace=\thickspace R\bigl(\widehat G\bigr)
$$

오른쪽은 $n$ 변수 대칭 Laurent [다항식환](polynomial-rings.md)이고 **쌍대군** $\widehat G=\mathrm{GL}\_n(\mathbb C)$ 의 유한차원 표현이 이루는 표현환이다. 이중 잉여류를 세는 조합론과 복소 [Lie 군](lie-groups.md)의 표현론이 같은 환을 준다.

이 동형에서 두 가지가 나온다.

- **가환성.** 오른쪽이 가환이므로 왼쪽도 가환이다. $T_mT_n=T_nT_m$ 이 증명 없이 따라 나온다.
- **Satake 매개변수.** 가환 대수의 1 차원 지표는 점이다. 비분기 표현 $\pi_p$ 가 $\mathcal H(G,K)$ 에 스칼라로 작용하면 그 스칼라들의 모임이 $(\mathbb C^\times)^n/S_n$ , 곧 $\widehat G$ 의 **반단순 켤레류** $A_{\pi_p}$ 하나다. $L$ 인자를 쌍대군의 표현으로 쓸 수 있다.

$$
L(s,\pi_p)=\det\bigl(1-q^{-s}A_{\pi_p}\bigr)^{-1}
$$

[Godement–Jacquet 적분](godement-jacquet.md)의 비분기 자리 계산이 이 꼴이고, [Langlands 강령](langlands-program.md)이 거의 모든 자리에서 Satake 매개변수가 Frobenius 켤레류와 일치한다는 형태로 서술된다. 강령의 진술이 이 동형 위에서 쓰인다.

# 직관

## 이중 잉여류와 격자

$\mathcal H(G,K)$ 의 원소는 $f(k_1gk_2)=f(g)$ 인 콤팩트 받침 함수다. 받침이 콤팩트하고 양쪽 불변이므로, 이런 함수는 유한개의 이중 잉여류 $KgK$ 의 특성함수들의 선형결합이다. 곱은 합성곱이다.

$$
(f_1\ast f_2)(h)=\int_G f_1(g)\thinspace f_2(g^{-1}h)\thinspace dg,
\qquad \mathrm{vol}(K)=1
$$

$\mathrm{vol}(K)=1$ 로 정규화하면 $f_1$ 의 받침이 유한개의 왼쪽 잉여류 $gK$ 로 쪼개지므로 적분이 유한합이 된다. 합성곱의 구조상수는 잉여류를 세는 정수이고, 고전적 Hecke 작용소의 격자 세기 정의가 여기에 대응한다.

$gK\mapsto L_g=g\mathbb Z_p^n$ 이 $G/K$ 와 $\mathbb Q_p^n$ 의 격자 전체의 일대일 대응이고, $KgK$ 는 $\mathbb Z_p^n$ 에 대한 $L_g$ 의 **초등인자**로 결정된다. 두 함수의 합성곱값이 중간 격자의 개수다.

$$
(1_{K\alpha K}\ast 1_{K\beta K})(h)
=\char35{}\bigl\lbrace\thinspace M \thickspace:\thickspace \mathbb Z_p^n\supset M \text{ 가 } \alpha \text{ 형},\thickspace
M\supset L_h \text{ 가 } \beta \text{ 형}\thinspace\bigr\rbrace
$$

## Gelfand 의 논법

가환성은 전치로 증명된다. 전치 $g\mapsto{}^{t}g$ 는 $G$ 의 반자기동형이고 $K$ 를 보존하므로 $\mathcal H(G,K)$ 위에 반자기동형

$$
f^\iota(g)=f({}^tg)
$$

를 유도한다. 반자기동형이므로 $(f_1\ast f_2)^\iota=f_2^\iota\ast f_1^\iota$ 다. 그런데 **Cartan 분해**가

$$
G=\bigsqcup_{\lambda_1\ge\cdots\ge\lambda_n}K\thinspace p^{\lambda}K,
\qquad p^\lambda=\mathrm{diag}(p^{\lambda_1},\dots,p^{\lambda_n})
$$

이고 $p^\lambda$ 는 대각행렬이라 ${}^tp^\lambda=p^\lambda$ 다. 곧 $\iota$ 는 모든 이중 잉여류를 제자리에 두므로 항등사상이다. 항등인 반자기동형이 있으면

$$
f_1\ast f_2=(f_1\ast f_2)^\iota=f_2^\iota\ast f_1^\iota=f_2\ast f_1
$$

이다. 고전적으로 격자 계산으로 확인하던 $T_mT_n=T_{mn}$ 같은 식이 대각행렬이 대칭이라는 관찰에서 나온다.

## 대칭 다항식과의 대응

Cartan 분해는 $\mathcal H(G,K)$ 의 기저가 **지배적 쌍대지표** $\lambda\in X_\ast(T)^+$ 로 매겨진다고 말한다. $\mathrm{GL}\_n$ 이면 $\lambda_1\ge\cdots\ge\lambda_n$ 인 정수열이다.

한편 $\widehat G=\mathrm{GL}\_n(\mathbb C)$ 의 기약표현도 최고무게 $\lambda_1\ge\cdots\ge\lambda_n$ 로 매겨진다. 표현환 $R(\widehat G)$ 의 기저가 그 지표 $\chi_\lambda$ 들이다.

$$
\lbrace\thinspace KgK\thinspace\rbrace\thickspace\longleftrightarrow\thickspace X_\ast(T)^+\thickspace\longleftrightarrow\thickspace\lbrace\thinspace\text{기약표현}\thinspace\rbrace
$$

Satake 의 정리는 기저의 대응을 넘어 곱셈까지 일치한다고 말한다. 격자를 세서 얻은 구조상수가 복소 표현의 [텐서곱](tensor-products.md) 분해 계수와 같은 환을 만든다.

대응은 기저를 기저로 보내지 않는다. $1_{K p^\lambda K}$ 의 상은 $\chi_\lambda$ 에 더 낮은 항들이 $p^{-1}$ 배로 섞인 꼴이다. 삼각행렬이므로 동형이라는 결론은 그대로다.

## Satake 변환

동형을 구현하는 사상은 상수항이다. Borel 부분군 $B=TN$ 에 대해

$$
\mathcal S(f)(t)=\delta_B(t)^{1/2}\int_N f(tn)\thinspace dn
$$

로 두면 $\mathcal S(f)$ 는 $T/T(\mathbb Z_p)\cong X_\ast(T)$ 위의 함수, 곧 Laurent 다항식이다. 여기서 $\delta_B$ 는 모듈러 지표다.

$\delta_B^{1/2}$ 인자가 없으면 $\mathcal S(f)$ 가 Weyl 군 $W$ 불변이 아니다. 반쪽 지표를 곱해야 $N$ 방향 적분에서 생긴 비대칭이 상쇄된다. 이 인자는 유도표현 $\mathrm{Ind}\_B^G\chi$ 의 정규화와 같고, $W$ 불변성은 $\mathrm{Ind}\_B^G\chi\cong\mathrm{Ind}\_B^G(w\chi)$ 에 대응한다.

# 정의

## 비분기 상황

$F$ 를 비아르키메데스 국소체, $\mathcal O$ 를 그 정수환, $q$ 를 잉여체의 크기라 하자. $G$ 는 $F$ 위의 **비분기** 연결 환원군, 곧 $F$ 위에서 준분열이고 비분기 확대에서 분열하는 군이다. $K=G(\mathcal O)$ 를 초특수 극대 콤팩트 부분군으로 잡는다. $\mathrm{GL}\_n$ 이면 $K=\mathrm{GL}\_n(\mathcal O)$ 다.

**비분기 Hecke 대수**는 $\mathrm{vol}(K)=1$ 인 Haar 측도에 대한 합성곱 대수

$$
\mathcal H(G,K)=\bigl\lbrace\thinspace f:G\to\mathbb C \thickspace\bigm|\thickspace f \text{ 는 콤팩트 받침},\thickspace f(k_1gk_2)=f(g)\thinspace\bigr\rbrace
$$

이고 단위원이 $1_K$ 다.

**Cartan 분해** $G=\bigsqcup_{\lambda\in X_\ast(T)^+}K\lambda(\varpi)K$ 에서 $\lbrace 1_{K\lambda(\varpi)K}\rbrace$ 가 $\mathbb C$ 기저를 이룬다. $\varpi$ 는 소원, $X_\ast(T)$ 는 극대 분열 원환면의 쌍대지표 격자, $X_\ast(T)^+$ 는 고정한 Borel 에 대해 지배적인 것들이다.

## Satake 변환과 정리

$B=TN$ 에 대해 모듈러 지표 $\delta_B(t)=\lvert\det(\mathrm{Ad}(t)\mid_{\mathfrak n})\rvert$ 를 쓴다.

$$
\mathcal S:\mathcal H(G,K)\to\mathbb C[X_\ast(T)],
\qquad
\mathcal S(f)(\lambda)=\delta_B(\lambda(\varpi))^{1/2}\int_N f(\lambda(\varpi)n)\thinspace dn
$$

> **정리 (Satake, 1963).** $\mathcal S$ 는 $\mathbb C$ 대수의 동형
> $$
> \mathcal H(G,K)\thickspace\xrightarrow{\ \sim\ }\thickspace\mathbb C[X_\ast(T)]^{W}
> $$
> 이다. $W$ 는 Weyl 군이다. 특히 $\mathcal H(G,K)$ 는 가환이다.[^1]

쌍대군 $\widehat G$ 는 $G$ 의 근계를 뒤집어 만든 복소 환원군이고, $X_\ast(T)=X^\ast(\widehat T)$ 다. 그래서 오른쪽은 $\widehat G$ 의 표현환이다.

$$
\mathbb C[X_\ast(T)]^W=\mathbb C[X^\ast(\widehat T)]^W=R(\widehat G)\otimes\mathbb C
$$

$G=\mathrm{GL}\_n$ 이면 $X_\ast(T)=\mathbb Z^n$ 과 $W=S_n$ 과 $\widehat G=\mathrm{GL}\_n(\mathbb C)$ 이므로

$$
\mathcal H\bigl(\mathrm{GL}\_n(F),\mathrm{GL}\_n(\mathcal O)\bigr)\thickspace\cong\thickspace
\mathbb C[x_1^{\pm1},\dots,x_n^{\pm1}]^{S_n}
$$

이고 $x_i$ 는 $\widehat T$ 의 좌표다.

## Satake 매개변수

기약 매끄러운 표현 $(\pi,V)$ 가 **비분기**(구형)라 함은 $V^K\ne0$ 인 것이다. 이때 $\dim V^K=1$ 이고 $\mathcal H(G,K)$ 가 $V^K$ 위에 스칼라로 작용한다. 곧 대수 준동형

$$
\chi_\pi:\mathcal H(G,K)\to\mathbb C
$$

이 정해진다. Satake 동형으로 옮기면 $\chi_\pi$ 는 $\mathbb C[X^\ast(\widehat T)]^W$ 의 $\mathbb C$ 점, 곧 $\widehat T(\mathbb C)/W$ 의 점이다. $\widehat T/W$ 는 $\widehat G$ 의 반단순 켤레류 전체와 같으므로, 다음을 얻는다.

> 비분기 기약표현 $\pi$ $\thickspace\longleftrightarrow\thickspace$ $\widehat G(\mathbb C)$ 의 반단순 켤레류 $A_\pi$

이 켤레류가 $\pi$ 의 **Satake 매개변수**다. $\mathrm{GL}\_n$ 이면 순서를 잊은 $n$ 쌍 $(\alpha_1,\dots,\alpha_n)\in(\mathbb C^\times)^n$ 이다.

$\widehat G$ 의 유한차원 표현 $r$ 마다 국소 $L$ 인자가 정의된다.

$$
L(s,\pi,r)=\det\bigl(1-r(A_\pi)\thinspace q^{-s}\bigr)^{-1}
$$

$r$ 이 표준표현이면 표준 $L$ 인자 $\prod_i(1-\alpha_iq^{-s})^{-1}$ 다.

# 성질

## $\mathrm{GL}\_2$ 의 명시적 상

$G=\mathrm{GL}\_2(\mathbb Q_p)$ 와 $K=\mathrm{GL}\_2(\mathbb Z_p)$ 에서 기저를 $a\ge0$ 에 대한 $T(p^b,p^{a+b})=1_{K\thinspace\mathrm{diag}(p^b,p^{a+b})K}$ 로 쓰면

$$
\mathcal S\bigl(T(p^b,p^{a+b})\bigr)
=(x_1x_2)^b\thinspace p^{a/2}\Bigl(h_a(x_1,x_2)-\tfrac1p\thinspace x_1x_2\thinspace h_{a-2}(x_1,x_2)\Bigr)
$$

이다. $h_a$ 는 완전 동차 대칭 다항식 $\sum_{k=0}^{a}x_1^kx_2^{a-k}$ 이고 $h_{-1}=h_{-2}=0$ 이다. 특별한 경우가

$$
\mathcal S\bigl(T(p)\bigr)=p^{1/2}(x_1+x_2),
\qquad
\mathcal S\bigl(T(p,p)\bigr)=x_1x_2
$$

다. $h_a=\chi_{\mathrm{Sym}^a}$ 이므로 상은 $\chi_{\mathrm{Sym}^a}$ 에 $\chi_{\det\otimes\mathrm{Sym}^{a-2}}$ 가 $-p^{-1}$ 배로 섞인 것이다. 최고항의 계수가 1 인 삼각꼴이라 기저를 기저로 옮긴다.

## 정수 구조상수

$\mathcal H$ 의 곱을 정의대로 계산하면 정수 구조상수가 나온다.

$$
T(p)\ast T(p)=T(p^2)+(p+1)\thinspace T(p,p)
$$

이고, $m\ge2$ 에서는

$$
T(p)\ast T(p^m)=T(p^{m+1})+p\thinspace T(p,p)\ast T(p^{m-1})
$$

이다. $m=1$ 에서만 계수가 $p+1$ 이고 그 뒤로는 $p$ 이며, 고전적 Hecke 관계식 $T_pT_{p^m}=T_{p^{m+1}}+p^{k-1}T_{p^{m-1}}$ 의 무게 정규화가 여기에 대응한다.

구조상수는 격자를 세어 구한다. $\mathbb Z_p^2$ 의 지표 $p^n$ 부분격자는 Hermite 꼴 $\begin{pmatrix}p^i&b\cr 0&p^{n-i}\end{pmatrix}$ 와 $0\le b\lt p^i$ 로 전부 열거되므로 유한 계산이다.

$(1,1)$ 의 계수가 $p+1$ 이고 $T(p)\ast T(p^m)$ 의 $(1,m)$ 계수가 $p$ 다. 이렇게 얻은 구조상수는 Satake 변환이 옮기는 대칭 다항식의 곱셈 규칙과 일치한다.

## 구형함수

**구형함수**는 Satake 변환의 쌍대다. 비분기 지표 $\chi$ 에 대해

$$
\omega_\chi(g)=\int_K\chi\delta_B^{1/2}(b(kg))\thinspace dk
$$

가 $\mathcal H(G,K)$ 의 동시 고유함수이고, Macdonald 의 공식이 이것을 Weyl 군 위의 합으로 명시한다.

$$
\omega_\chi(\varpi^\lambda)=\frac{\delta_B^{1/2}(\varpi^\lambda)}{\lvert W\rvert}
\sum_{w\in W}c(w\chi)\thinspace(w\chi)(\varpi^\lambda),
\qquad
c(\chi)=\prod_{\alpha\gt 0}\frac{1-q^{-1}\chi(\alpha^\vee(\varpi))^{-1}}{1-\chi(\alpha^\vee(\varpi))^{-1}}
$$

$c$ 인자는 Harish-Chandra 의 $c$ 함수의 $p$ 진 판이고, [Eisenstein 급수](eisenstein-series.md)의 상수항과 국소 얽힘 작용소의 분모에 같은 것이 나온다. $q^{-1}$ 항은 위 $\mathcal S(T(p^a))$ 공식의 $-p^{-1}$ 보정과 같은 뿌리다.

## 온도성과 Ramanujan

행렬 계수가 $L^{2+\epsilon}$ 인 표현이 **온도적**이고, 비분기 표현에서는 $\lvert\alpha_i\rvert=1$ 과 동치다. 곧 $A_\pi$ 가 $\widehat G$ 의 콤팩트 형 $\widehat K$ 안에 켤레로 들어간다.

$\mathrm{GL}\_n$ 의 첨점 자기동형 표현이 모든 자리에서 온도적이라는 **Ramanujan–Petersson 추측**은 $n\ge2$ 에서 일반적으로 증명되지 않았다[^2]. 무게 $k$ 의 정칙 첨점형식에 대해서는 Deligne 이 Weil 추측으로 증명했다. 이때 Satake 매개변수가 단위원 위에 있고 $\alpha_p\beta_p=1$ 이므로 $\alpha_p=e^{i\theta_p}$ , $\beta_p=e^{-i\theta_p}$ 로 쓴다. 이 각 $\theta_p$ 의 분포를 묻는 것이 [Sato–Tate](sato-tate.md) 문제다.

## 국소 $L$ 인자와 Euler 인자

Satake 매개변수가 $L$ 인자를 주고, 그 기하급수 전개가 Hecke 고유값 수열을 준다.

$$
\det(1-A_\pi t)^{-1}=\frac1{(1-\alpha t)(1-\beta t)}=\sum_{m\ge0}h_m(\alpha,\beta)\thinspace t^m
$$

$h_m(\alpha,\beta)$ 가 정규화된 $T_{p^m}$ 의 고유값이다.

$\lvert\alpha\rvert=1$ 이 Deligne 의 정리 $\lvert\tau(p)\rvert\le2p^{11/2}$ 다. $\tau(p^m)/p^{11m/2}=h_m(\alpha,\beta)$ 가 성립하므로 $\Delta$ 의 $L$ 함수의 $p$ 인자가 $\det(1-A_{\pi_p}p^{-s})^{-1}$ 이다. 고전적 Hecke 관계식이 2 차 Euler 인자를 주는 것을 Satake 동형이 설명한다.

# 활용

## Langlands 강령의 사전

강령은 자기동형 표현 $\pi$ 와 Galois 표현 $\rho$ 의 대응을 주장한다. 대응을 검증하려면 양쪽에서 같은 종류의 자료를 뽑아야 한다. Galois 쪽은 Frobenius 켤레류를 주고, Satake 동형이 자기동형 쪽에서 켤레류를 준다.

$$
A_{\pi_v}\ \in\ \widehat G(\mathbb C)/\negthinspace\sim
\qquad\longleftrightarrow\qquad
\rho(\mathrm{Frob}\_v)\ \in\ {}^LG/\negthinspace\sim
$$

거의 모든 자리에서 이 둘이 같다는 것이 대응의 정의다. [Galois 표현](galois-representations.md)과 [모듈러 형식](modular-forms.md)의 관계에서 $a_p=\mathrm{tr}\thinspace\rho(\mathrm{Frob}\_p)$ 가 $n=2$ 의 경우다.

Jacquet–Shalika 의 강한 중복도 1 정리에 따라 거의 모든 자리의 Satake 매개변수가 $\pi$ 를 결정한다. 이 켤레류들의 모임이 자기동형 표현의 완전한 불변량이다.

## 함수성의 정의

**함수성**은 쌍대군 사이의 준동형 $\varphi:\widehat H\to\widehat G$ 마다 $H$ 의 자기동형 표현을 $G$ 의 것으로 옮기는 사상이 있어야 한다는 요구다. 비분기 자리에서 그 사상은 Satake 매개변수로 주어진다.

$$
A_{\Pi_v}=\varphi\bigl(A_{\pi_v}\bigr)
$$

함수성은 매개변수를 $\varphi$ 로 밀어 보낸 것이 다시 자기동형 표현에서 나와야 한다는 진술이다. $\mathrm{Sym}^m:\mathrm{GL}\_2(\mathbb C)\to\mathrm{GL}\_{m+1}(\mathbb C)$ 에 대한 함수성이 $\mathrm{Sym}^m$ 올림이고 $(\alpha,\beta)\mapsto(\alpha^m,\alpha^{m-1}\beta,\dots,\beta^m)$ 이다. [Sato–Tate](sato-tate.md) 의 증명이 요구한 $L(s,\mathrm{Sym}^m\pi)$ 의 해석적 성질이 이 올림의 존재 문제였다.

## 기본 보조정리와 대각합 공식

Arthur–Selberg 대각합 공식에서 두 군의 궤도적분을 맞추려면, $\mathcal H(G,K)$ 의 원소와 내시형 군 $H$ 의 $\mathcal H(H,K_H)$ 의 원소를 짝지어야 한다. 그 짝은 쌍대군 준동형 $\widehat H\to\widehat G$ 를 Satake 동형으로 끌어내린 **기본 사상**

$$
b:\mathcal H(G,K)\to\mathcal H(H,K_H)
$$

으로 정의된다. 이 $b$ 가 궤도적분 수준에서도 맞는다는 것이 **기본 보조정리**이고, Ngô Bảo Châu 가 Hitchin 올뭉치의 기하로 증명했다. 진술 자체가 Satake 동형 위에서 쓰인다.

## 기하학적 Satake

동형의 오른쪽이 표현환이라는 것은 Grothendieck 군 수준의 진술이다. 이것을 [범주](category.md) 수준으로 올린 것이 **기하학적 Satake 대응**이다. 아핀 Grassmann 다양체 $\mathrm{Gr}\_G=G(F)/G(\mathcal O)$ 위의 $G(\mathcal O)$ 동변 퍼버스 층의 범주가 텐서 범주로서 $\widehat G$ 의 표현 범주와 동치다.

$$
\mathrm{Perv}\_{G(\mathcal O)}(\mathrm{Gr}\_G)\thickspace\simeq\thickspace\mathrm{Rep}(\widehat G)
$$

$\mathrm{Gr}\_G$ 의 $G(\mathcal O)$ 궤도가 $X_\ast(T)^+$ 로 매겨지고 그 위의 교차 코호몰로지 [층](sheaves.md)이 기약표현에 대응한다. 층 수준에서는 Satake 변환의 $p^{-1}$ 보정항이 코호몰로지 차수의 이동이 된다. Lusztig, Ginzburg, Mirković–Vilonen 을 거쳐 정리가 되었고, 이 대응이 쌍대군을 정의하는 방법을 준다.

## 계산

LMFDB(L-functions and modular forms database) 의 자기동형 형식 표가 저장하는 것이 Satake 매개변수다. 각 자리의 켤레류만 있으면 $L$ 함수의 모든 Euler 인자, 모든 대칭 거듭제곱 $L$ 함수, 함수성 올림의 매개변수가 유한 계산으로 나온다.

[^1]: I. Satake, *Theory of spherical functions on reductive algebraic groups over p-adic fields*, Publ. Math. IHÉS **18** (1963), 5–69. 정리의 현대적 서술과 $\mathrm{GL}\_n$ 의 명시적 공식은 D. Bump, *Automorphic Forms and Representations* (1997) 4.6 절, 또는 W. Casselman 의 미출간 노트 *Introduction to the theory of admissible representations of p-adic reductive groups*. Macdonald 공식은 I. G. Macdonald, *Spherical functions on a group of p-adic type* (1971). 기하학적 판은 I. Mirković, K. Vilonen, *Geometric Langlands duality and representations of algebraic groups over commutative rings*, Ann. of Math. **166** (2007). 기본 보조정리는 Ngô Bảo Châu, *Le lemme fondamental pour les algèbres de Lie*, Publ. Math. IHÉS **111** (2010).
[^2]: P. Sarnak, *Notes on the generalized Ramanujan conjectures*, Clay Mathematics Proceedings **4** (2005), 659–685. 어느 경우가 증명되었고 일반 경우가 어디까지 와 있는지 정리한다.

# 연관 문서

## 선수지식

- [Hecke 작용소](hecke-operators.md)
- [Godement–Jacquet 적분](godement-jacquet.md)

## 더 알아보기

- [Rankin–Selberg 적분](rankin-selberg.md)
- [기하학적 Satake 대응](geometric-satake.md)
- [기본 보조정리와 대각합 공식의 안정화](fundamental-lemma.md)

#number_theory #group_theory #algebra #computation
