# Satake 동형

# 개요

**Satake 동형(Satake isomorphism)** 은 격자를 부분격자로 바꾸는 연산들이 이루는 대수를 대칭다항식의 환과 같다고 보는 동형이다. 평면 격자 $\mathbb Z^2$ 안에서 지수가 $2$ 인 부분격자는 $\langle(2,0),(0,1)\rangle$, $\langle(1,0),(0,2)\rangle$, $\langle(1,1),(0,2)\rangle$ 의 세 개이고, 격자 위의 함수를 이 세 부분격자에서의 값의 합으로 바꾸는 것이 [Hecke 작용소](hecke-operators.md) $T_2$ 다. $T_2$ 를 두 번 쓰면 지수 $4$ 인 부분격자가 여러 번씩 세어져, $T_2^2$ 을 지수 $4$ 인 작용소들로 어떻게 쓰는지가 정의에서 바로 보이지 않는다. Satake 동형은 이런 작용소마다 대칭 다항식 하나를 대응시켜, 작용소의 곱을 다항식의 곱으로 계산하게 한다.

# 직관

격자 $L$ 위의 함수 $F$ 에 $T_2$ 를 두 번 쓰면, $L$ 의 지수 $2$ 부분격자 세 개 각각에서 다시 지수 $2$ 부분격자 세 개로 내려가 모두 $9$ 개의 값을 더한다. 내려간 격자는 전부 $L$ 의 지수 $4$ 부분격자다. $L=\mathbb Z^2$ 의 지수 $4$ 부분격자는 일곱 개이고, $2\mathbb Z^2$ 하나와 $\mathbb Z^2$ 를 그것으로 나눈 몫이 $\mathbb Z/4$ 인 것 여섯이다.

일곱 개가 몇 번씩 세어지는지 센다. $2\mathbb Z^2$ 는 지수 $2$ 부분격자 세 개에 모두 들어 있어 세 번 세어진다. 나머지 여섯은 각각 지수 $2$ 부분격자 하나에만 들어 있어 한 번씩 세어진다. $6+3=9$ 이므로 셈이 맞다. 몫이 $\mathbb Z/4$ 인 여섯에서의 합을 $T(4)$, $F(2L)$ 을 주는 작용소를 $T(2,2)$ 라 하면

$$
T_2^2=T(4)+3\thinspace T(2,2)
$$

다. 작용소를 하나 더 곱할 때마다 이런 세기를 새로 해야 하고, $T(4)T_2$ 와 $T_2T(4)$ 가 같은지도 세어 봐야 안다.

세기 대신 작용소마다 두 변수 $x_1,x_2$ 의 다항식을 붙인다. $T_2$ 에 $\sqrt2\thinspace(x_1+x_2)$, $T(2,2)$ 에 $x_1x_2$, $T(4)$ 에 $2(x_1^2+x_1x_2+x_2^2)-x_1x_2$ 를 붙이면

$$
2(x_1+x_2)^2=\bigl(2(x_1^2+x_1x_2+x_2^2)-x_1x_2\bigr)+3x_1x_2
$$

이 위의 격자 세기와 같은 식이다. 다항식의 곱은 순서와 무관하므로 작용소도 곱하는 순서를 바꿔도 같다. 세 다항식은 $x_1$ 과 $x_2$ 를 바꿔도 그대로이고, Satake 동형은 모든 지수와 모든 차원에서 이 대응표를 준다.

$F$ 가 모든 작용소의 고유함수이면, 고윳값은 한 쌍의 수 $(\alpha,\beta)$ 를 위 다항식에 넣은 값이다. 지수 $2^m$ 부분격자 전체에서의 합을 $2^{m/2}$ 로 나눈 작용소의 고윳값을 $t^m$ 의 계수로 모으면 $1/\bigl((1-\alpha t)(1-\beta t)\bigr)$ 이 된다. [Godement–Jacquet 적분](godement-jacquet.md)이 비분기 자리에서 내놓는 $L$ 인자가 이 꼴이다.

# 정의

## 비분기 Hecke 대수

$F$ 를 비아르키메데스 국소체, $\mathcal O$ 를 그 정수환, $\varpi$ 를 소원, $q$ 를 잉여체의 크기라 하자. $G$ 는 $F$ 위의 비분기 연결 환원군(unramified connected reductive group), 곧 $F$ 위에서 준분열(quasi-split)이고 비분기 확대에서 분열하는 군이다. $K=G(\mathcal O)$ 는 초특수(hyperspecial) 극대 콤팩트 부분군이다.

**비분기 Hecke 대수(unramified Hecke algebra)** 또는 구형 Hecke 대수(spherical Hecke algebra) 는 $\mathrm{vol}(K)=1$ 인 [Haar 측도](haar-measure.md)에 대한 [합성곱](convolution.md) 대수다.

$$
\mathcal H(G,K)=\bigl\lbrace\thinspace f:G\to\mathbb C \thickspace\bigm\vert\thickspace f \text{ 는 콤팩트 받침},\thickspace f(k_1gk_2)=f(g)\thinspace\bigr\rbrace,
\qquad
(f_1\ast f_2)(h)=\int_G f_1(g)\thinspace f_2(g^{-1}h)\thinspace dg
$$

단위원은 $K$ 의 특성함수 $1_K$ 다.

$G=\mathrm{GL}\_n(\mathbb Q_p)$, $K=\mathrm{GL}\_n(\mathbb Z_p)$ 이면 $gK\mapsto g\mathbb Z_p^n$ 이 $G/K$ 와 $\mathbb Q_p^n$ 의 [격자](lattices.md) 전체를 대응시킨다. 이중 잉여류 $K\thinspace\mathrm{diag}(p^{\lambda_1},\dots,p^{\lambda_n})K$ 는 $\mathbb Z_p^n/M\cong\bigoplus_i\mathbb Z/p^{\lambda_i}$ 인 부분격자 $M$ 들에 대응한다. $n=2$ 에서 다음 세 원소가 직관 절의 세 작용소다.

$$
T(p)=1_{K\mathrm{diag}(1,p)K},\qquad T(p,p)=1_{pK},\qquad T(p^2)=1_{K\mathrm{diag}(1,p^2)K}
$$

$T(p)$ 는 지수 $p$ 부분격자 $p+1$ 개에서의 합이고, $T(p,p)$ 는 $L\mapsto pL$ 이다.

**Cartan 분해(Cartan decomposition)** 는 $G=\bigsqcup_{\lambda\in X_\ast(T)^+}K\lambda(\varpi)K$ 다. $T$ 는 극대 분열 원환면, $X_\ast(T)$ 는 그 쌍대지표 격자(cocharacter lattice), $X_\ast(T)^+$ 는 고정한 Borel 부분군 $B=TN$ 에 대해 지배적(dominant)인 쌍대지표들이다. 그래서 $\lbrace 1_{K\lambda(\varpi)K}\rbrace\_{\lambda\in X_\ast(T)^+}$ 가 $\mathcal H(G,K)$ 의 $\mathbb C$ 기저다. $\mathrm{GL}\_n$ 이면 $X_\ast(T)=\mathbb Z^n$ 이고 $X_\ast(T)^+$ 는 $\lambda_1\le\dots\le\lambda_n$ 인 것들이다.

## Satake 변환

$\delta_B(t)=\lvert\det(\mathrm{Ad}(t)\mid_{\mathfrak n})\rvert$ 를 $B$ 의 모듈러 지표(modular character)라 하자. $\mathfrak n$ 은 $N$ 의 [Lie 대수](lie-algebras.md)다. **Satake 변환(Satake transform)** 은

$$
\mathcal S:\mathcal H(G,K)\to\mathbb C\lbrack X_\ast(T)\rbrack,
\qquad
\mathcal S(f)(\lambda)=\delta_B(\lambda(\varpi))^{1/2}\int_N f(\lambda(\varpi)n)\thinspace dn
$$

이다. $\mathbb C\lbrack X_\ast(T)\rbrack$ 는 쌍대지표 격자의 군환이고, $\mathrm{GL}\_n$ 이면 $\lambda=(\lambda_1,\dots,\lambda_n)$ 을 단항식 $x_1^{\lambda_1}\cdots x_n^{\lambda_n}$ 으로 적어 Laurent 다항식환 $\mathbb C\lbrack x_1^{\pm1},\dots,x_n^{\pm1}\rbrack$ 이 된다.

$\mathrm{GL}\_2(\mathbb Q_p)$ 에서 $f=T(p)$ 의 변환을 계산한다. $\delta_B(\mathrm{diag}(t_1,t_2))=\lvert t_1/t_2\rvert$ 이고 $n=\begin{pmatrix}1&x\cr 0&1\end{pmatrix}$ 다.

- $\lambda=(1,0)$ 이면 $\mathrm{diag}(p,1)\thinspace n=\begin{pmatrix}p&px\cr 0&1\end{pmatrix}$ 이 $K\mathrm{diag}(1,p)K$ 에 드는 것은 $x\in p^{-1}\mathbb Z_p$ 일 때이고, 그 부피가 $p$ 다. 앞의 인자가 $\lvert p\rvert^{1/2}=p^{-1/2}$ 이므로 값은 $p^{1/2}$ 다.
- $\lambda=(0,1)$ 이면 $\begin{pmatrix}1&x\cr 0&p\end{pmatrix}$ 이 그 이중 잉여류에 드는 것은 $x\in\mathbb Z_p$ 일 때이고, 부피 $1$ 에 인자 $p^{1/2}$ 를 곱해 값은 $p^{1/2}$ 다.

다른 $\lambda$ 에서는 $0$ 이므로 $\mathcal S(T(p))=p^{1/2}(x_1+x_2)$ 이고, 직관 절에서 $T_2$ 에 붙인 다항식이 이것이다.

## 쌍대군

$G$ 의 **쌍대군(dual group)** $\widehat G$ 는 $G$ 의 근 자료(root datum)에서 지표와 쌍대지표, 근과 쌍대근을 맞바꾸어 얻는 복소 연결 환원군이다. $\widehat G$ 의 극대 원환면 $\widehat T$ 는 $X^\ast(\widehat T)=X_\ast(T)$ 를 만족한다. $\mathrm{GL}\_n$ 의 쌍대군은 $\mathrm{GL}\_n(\mathbb C)$ 이고, $\mathrm{SL}\_2$ 의 쌍대군은 $\mathrm{PGL}\_2(\mathbb C)$, $\mathrm{PGL}\_2$ 의 쌍대군은 $\mathrm{SL}\_2(\mathbb C)$ 다.

## Satake 매개변수

기약 매끄러운 표현 $(\pi,V)$ 가 **비분기(unramified)** 또는 구형(spherical)이라 함은 $K$ 가 고정하는 벡터가 있는 것, 곧 $V^K\ne0$ 인 것이다. 이때 $V^K$ 는 1 차원이고(성질 절) $\mathcal H(G,K)$ 가 그 위에 스칼라로 작용하므로 대수 준동형 $\chi_\pi:\mathcal H(G,K)\to\mathbb C$ 가 정해진다.

Satake 동형(성질 절)으로 옮기면 $\chi_\pi$ 는 $\widehat T(\mathbb C)/W$ 의 점이고, 이것을 $\widehat G(\mathbb C)$ 의 반단순 켤레류 $A_\pi$ 로 본 것이 $\pi$ 의 **Satake 매개변수(Satake parameter)** 다. $W$ 는 Weyl 군(Weyl group)이다.

$\mathrm{GL}\_2(\mathbb Q_p)$ 에서 $\chi_i(p)=\alpha_i$ 인 비분기 지표 $\chi_1,\chi_2$ 로 정규화 유도한 표현 $\mathrm{Ind}\_B^G(\chi_1\otimes\chi_2)$ 가 기약이면, 그 Satake 매개변수는 $\mathrm{diag}(\alpha_1,\alpha_2)$ 의 켤레류다. $T(p)$ 는 $V^K$ 위에 $p^{1/2}(\alpha_1+\alpha_2)$ 로, $T(p,p)$ 는 $\alpha_1\alpha_2$ 로 작용한다.

$\widehat G$ 의 유한차원 표현 $r$ 마다 **국소 L 인자(local L-factor)** 를

$$
L(s,\pi,r)=\det\bigl(1-r(A_\pi)\thinspace q^{-s}\bigr)^{-1}
$$

로 정의한다. 위 $\mathrm{GL}\_2$ 의 예에서 $r$ 이 표준표현이면 다음과 같다.

$$
L(s,\pi,r)=(1-\alpha_1p^{-s})^{-1}(1-\alpha_2p^{-s})^{-1}
$$

# 성질

## Satake 정리

> Satake 변환 $\mathcal S$ 는 $\mathbb C$ 대수의 동형 $\mathcal H(G,K)\xrightarrow{\sim}\mathbb C\lbrack X_\ast(T)\rbrack^{W}$ 다.[^1]

$\delta_B^{1/2}$ 인자가 없으면 $\mathcal S(f)$ 는 $W$ 불변이 아니다. 이 인자는 유도표현 $\mathrm{Ind}\_B^G\chi$ 의 정규화와 같고, $W$ 불변성은 $\mathrm{Ind}\_B^G\chi$ 와 $\mathrm{Ind}\_B^G(w\chi)$ 의 반단순화가 같다는 사실에 대응한다.

$X_\ast(T)=X^\ast(\widehat T)$ 이므로 오른쪽은 $\widehat G$ 의 표현환(representation ring)이고, 곱은 표현의 [텐서곱](tensor-products.md)이다.

$$
\mathbb C\lbrack X_\ast(T)\rbrack^W=\mathbb C\lbrack X^\ast(\widehat T)\rbrack^W=R(\widehat G)\otimes\mathbb C
$$

$G=\mathrm{GL}\_n$ 이면 $W=S_n$ 이고 다음을 얻는다. 오른쪽은 $n$ 변수 대칭 Laurent [다항식환](polynomial-rings.md)이다.

$$
\mathcal H\bigl(\mathrm{GL}\_n(F),\mathrm{GL}\_n(\mathcal O)\bigr)\thickspace\cong\thickspace
\mathbb C\lbrack x_1^{\pm1},\dots,x_n^{\pm1}\rbrack^{S_n}
$$

## 가환성

오른쪽이 가환이므로 $\mathcal H(G,K)$ 는 가환이다. $\mathrm{GL}\_n$ 에서는 동형을 거치지 않고도 증명된다. 전치 $g\mapsto{}^tg$ 는 $G$ 의 반자기동형이고 $K$ 를 보존하므로 $f^\iota(g)=f({}^tg)$ 는 $(f_1\ast f_2)^\iota=f_2^\iota\ast f_1^\iota$ 를 만족한다.

Cartan 분해의 대표원 $\mathrm{diag}(p^{\lambda_1},\dots,p^{\lambda_n})$ 은 대칭행렬이므로 $\iota$ 는 모든 이중 잉여류를 제자리에 두어 항등사상이고, $f_1\ast f_2=(f_1\ast f_2)^\iota=f_2^\iota\ast f_1^\iota=f_2\ast f_1$ 이다. 이 논법을 Gelfand 의 방법(Gelfand's trick)이라 한다.

## 비분기 표현의 분류

$\mathcal H(G,K)$ 가 가환이므로 비분기 기약표현 $\pi$ 의 $V^K$ 는 1 차원이다. $\pi\mapsto A_\pi$ 는 비분기 기약표현의 동형류와 $\widehat G(\mathbb C)$ 의 반단순 켤레류 사이의 전단사다. 반단순 켤레류마다 그 원환면 원소로 정해지는 비분기 주계열 표현이 있고, 그 표현의 유일한 비분기 기약 성분이 대응하는 $\pi$ 다. $\mathrm{GL}\_n$ 이면 Satake 매개변수는 순서를 잊은 $n$ 쌍 $(\alpha_1,\dots,\alpha_n)\in(\mathbb C^\times)^n$ 이다.

## GL₂ 의 명시적 상

$G=\mathrm{GL}\_2(\mathbb Q_p)$ 에서 기저를 $a\ge0$ 에 대한 $T(p^b,p^{a+b})=1_{K\thinspace\mathrm{diag}(p^b,p^{a+b})K}$ 로 쓰면

$$
\mathcal S\bigl(T(p^b,p^{a+b})\bigr)
=(x_1x_2)^b\thinspace p^{a/2}\Bigl(h_a(x_1,x_2)-\tfrac1p\thinspace x_1x_2\thinspace h_{a-2}(x_1,x_2)\Bigr)
$$

이다. $h_a=\sum_{k=0}^{a}x_1^kx_2^{a-k}$ 는 완전 동차 대칭 다항식이고 $h_{-1}=h_{-2}=0$ 이다. 특별한 경우가

$$
\mathcal S\bigl(T(p)\bigr)=p^{1/2}(x_1+x_2),
\qquad
\mathcal S\bigl(T(p,p)\bigr)=x_1x_2,
\qquad
\mathcal S\bigl(T(p^2)\bigr)=p\thinspace h_2(x_1,x_2)-x_1x_2
$$

이고, $p=2$ 에서 직관 절의 세 다항식이다. $h_a$ 는 $\mathrm{Sym}^a$ 의 지표이므로 상은 $\chi_{\mathrm{Sym}^a}$ 에 $\chi_{\det\otimes\mathrm{Sym}^{a-2}}$ 를 $-p^{-1}$ 배 더한 것이다. 최고항의 계수가 1 인 삼각꼴이라 기저를 기저로 옮긴다.

## 정수 구조상수

$\mathcal H$ 의 곱을 정의대로 계산하면 정수 구조상수가 나온다.

$$
T(p)\ast T(p)=T(p^2)+(p+1)\thinspace T(p,p),
\qquad
T(p)\ast T(p^m)=T(p^{m+1})+p\thinspace T(p,p)\ast T(p^{m-1})\quad(m\ge2)
$$

두 식 모두 위 명시적 상을 넣으면 $h_1h_m=h_{m+1}+x_1x_2h_{m-1}$ 로 확인된다. 고전적 Hecke 관계식 $T_pT_{p^m}=T_{p^{m+1}}+p^{k-1}T_{p^{m-1}}$ 에서는 $T_{p^m}$ 이 지수 $p^m$ 부분격자 전체에서의 합 $\sum_{2j\le m}T(p^j,p^{m-j})$ 이므로 $m=1$ 과 $m\ge2$ 를 나누지 않는다.

구조상수는 격자를 세어 구한다. $L_h=h\mathbb Z_p^n$ 이라 하면

$$
(1_{K\alpha K}\ast 1_{K\beta K})(h)
=\char35{}\bigl\lbrace\thinspace M \thickspace:\thickspace \mathbb Z_p^n/M \text{ 의 꼴이 } \alpha,\thickspace
M/L_h \text{ 의 꼴이 } \beta\thinspace\bigr\rbrace
$$

이다. $\mathbb Z_p^2$ 의 지수 $p^m$ 부분격자는 Hermite 꼴 $\begin{pmatrix}p^i&b\cr 0&p^{m-i}\end{pmatrix}$ $(0\le b\lt p^i)$ 의 열벡터가 생성하는 것으로 전부 열거되므로 유한 계산이다.

## 구형함수

비분기 지표 $\chi$ 에 대해 **구형함수(spherical function)** 를 Iwasawa 분해(Iwasawa decomposition) $g=b(g)k$ 로

$$
\omega_\chi(g)=\int_K(\chi\delta_B^{1/2})(b(kg))\thinspace dk
$$

로 정의하면, $\omega_\chi$ 는 $\mathcal H(G,K)$ 의 동시 고유함수이고 $\omega_\chi(1)=1$ 이다. Macdonald 공식(Macdonald formula)이 이것을 Weyl 군 위의 합으로 명시한다.

$$
\omega_\chi(\varpi^\lambda)=\frac{\delta_B^{1/2}(\varpi^\lambda)}{Q(q^{-1})}
\sum_{w\in W}c(w\chi)\thinspace(w\chi)(\varpi^\lambda),
\qquad
c(\chi)=\prod_{\alpha\gt 0}\frac{1-q^{-1}\chi(\alpha^\vee(\varpi))^{-1}}{1-\chi(\alpha^\vee(\varpi))^{-1}}
$$

$Q(t)=\sum_{w\in W}t^{\ell(w)}$ 는 Weyl 군의 Poincaré 다항식이다. $\mathrm{GL}\_2$ 에서 $z=\chi(\alpha^\vee(\varpi))$ 라 하면 $\lambda=0$ 의 합은 다음과 같다.

$$
\frac{1-q^{-1}z^{-1}}{1-z^{-1}}+\frac{1-q^{-1}z}{1-z}=1+q^{-1}=Q(q^{-1})
$$

그러므로 $\omega_\chi(1)=1$ 이 맞는다. $c$ 는 Harish-Chandra 의 $c$ 함수의 $p$ 진 판이고, [Eisenstein 급수](eisenstein-series.md)의 상수항과 국소 얽힘 작용소(intertwining operator)의 계산에 같은 인자가 나타난다.

## 온도성과 Ramanujan 추측

[행렬](matrices.md) 계수가 모든 $\epsilon\gt 0$ 에 대해 $L^{2+\epsilon}$ 인 표현이 **온도적(tempered)** 이다. 비분기 표현에서는 모든 $\lvert\alpha_i\rvert=1$ 인 것과 동치이고, 곧 $A_\pi$ 가 $\widehat G$ 의 콤팩트 형 $\widehat K$ 안에 켤레로 들어간다.

$\mathrm{GL}\_n$ 의 첨점 자기동형 표현이 모든 자리에서 온도적이라는 Ramanujan–Petersson 추측(Ramanujan–Petersson conjecture)은 $n\ge2$ 에서 일반적으로 증명되지 않았다[^2]. 무게 $k\ge2$ 의 정칙 첨점 고유형식에 대해서는 Deligne 이 [Weil 추측](deligne-weil-conjectures.md)으로부터 증명했다. 이때 Satake 매개변수가 단위원 위에 있고 $\alpha_p\beta_p=1$ 이므로 $\alpha_p=e^{i\theta_p}$, $\beta_p=e^{-i\theta_p}$ 로 쓴다. 이 각 $\theta_p$ 의 분포가 [Sato–Tate](sato-tate.md) 문제다.

## 국소 L 인자와 Euler 인자

Satake 매개변수가 $L$ 인자를 주고, 그 [기하급수](geometric-series.md) 전개가 Hecke 고윳값 수열을 준다.

$$
\det(1-A_\pi t)^{-1}=\frac1{(1-\alpha t)(1-\beta t)}=\sum_{m\ge0}h_m(\alpha,\beta)\thinspace t^m
$$

$h_m(\alpha,\beta)$ 가 $p^{-m/2}T_{p^m}$ 의 고윳값이다. 명시적 상의 식을 $T_{p^m}=\sum_{2j\le m}T(p^j,p^{m-j})$ 의 항마다 더하면 $\mathcal S(T_{p^m})=p^{m/2}h_m$ 이 나온다.

판별식 형식 $\Delta$ 에서는 $\tau(p^m)/p^{11m/2}=h_m(\alpha,\beta)$ 이므로 $L(s,\Delta)$ 의 $p$ 인자가 $\det(1-A_{\pi_p}p^{-s})^{-1}$ 이다. $\lvert\alpha\rvert=1$ 은 Deligne 의 정리 $\lvert\tau(p)\rvert\le2p^{11/2}$ 과 동치다.

# 활용

## Langlands 대응

[Langlands 강령](langlands-program.md)은 자기동형 표현 $\pi$ 와 Galois 표현 $\rho$ 의 대응을 주장한다. $\mathrm{GL}\_n$ 에서는 $\overline{\mathbb Q}\_\ell\cong\mathbb C$ 를 고정하고, 거의 모든 자리 $v$ 에서 Satake 매개변수와 Frobenius 켤레류가 같은 것을 대응이라 정의한다.

$$
A_{\pi_v}=\rho(\mathrm{Frob}\_v)\quad\text{in }\mathrm{GL}\_n(\mathbb C)/\text{켤레}
$$

[Galois 표현](galois-representations.md)과 [모듈러 형식](modular-forms.md)의 관계에서 $a_p=\mathrm{tr}\thinspace\rho(\mathrm{Frob}\_p)$ 가 $n=2$ 의 경우다. Jacquet–Shalika 의 강한 중복도 1 정리(strong multiplicity one theorem)에 따라 $\mathrm{GL}\_n$ 의 첨점 자기동형 표현은 거의 모든 자리의 Satake 매개변수로 결정된다.

## 함수성

**함수성(functoriality)** 은 쌍대군 사이의 준동형 $\varphi:\widehat H\to\widehat G$ 마다 $H$ 의 자기동형 표현 $\pi$ 를 $G$ 의 자기동형 표현 $\Pi$ 로 옮기는 사상이 있어야 한다는 Langlands 의 요구다. 비분기 자리에서 그 사상은 Satake 매개변수로 정의된다.

$$
A_{\Pi_v}=\varphi\bigl(A_{\pi_v}\bigr)
$$

$\mathrm{Sym}^m:\mathrm{GL}\_2(\mathbb C)\to\mathrm{GL}\_{m+1}(\mathbb C)$ 에 대한 함수성이 $\mathrm{Sym}^m$ 올림이고, 매개변수는 $(\alpha,\beta)\mapsto(\alpha^m,\alpha^{m-1}\beta,\dots,\beta^m)$ 으로 옮겨진다. Serre 는 모든 $m$ 에 대해 $L(s,\mathrm{Sym}^m\pi)$ 가 $\mathrm{Re}\thinspace s\ge1$ 에서 정칙이고 $0$ 이 아니면 Sato–Tate 분포가 따라 나옴을 보였고, 이 조건은 $\mathrm{Sym}^m$ 올림이 존재하면 성립한다.

## 기본 보조정리

Arthur–[Selberg 대각합 공식](selberg-trace-formula.md)에서 $G$ 와 내시 군(endoscopic group) $H$ 의 궤도적분을 맞추려면 $\mathcal H(G,K)$ 의 원소와 $\mathcal H(H,K_H)$ 의 원소를 짝지어야 한다. 그 짝은 쌍대군 준동형 $\widehat H\to\widehat G$ 를 Satake 동형으로 옮긴 사상

$$
b:\mathcal H(G,K)\to\mathcal H(H,K_H)
$$

으로 정의된다. $1_K$ 와 $b(1_K)=1_{K_H}$ 의 궤도적분이 맞는다는 진술이 [기본 보조정리](fundamental-lemma.md)이고, Ngô Bảo Châu 가 Lie 대수 판을 Hitchin 올뭉치(Hitchin fibration)의 기하로 증명했다.

## 기하학적 Satake

Satake 동형의 오른쪽이 표현환이라는 것은 Grothendieck 군 수준의 진술이다. 이것을 [범주](category.md) 수준으로 올린 것이 [기하학적 Satake 대응](geometric-satake.md)이다. 아핀 Grassmann 다양체(affine Grassmannian) $\mathrm{Gr}\_G=G(F)/G(\mathcal O)$ 위의 $G(\mathcal O)$ 동변 퍼버스 층(perverse sheaf)의 범주가 텐서 범주로서 $\widehat G$ 의 표현 범주와 동치다.

$$
\mathrm{Perv}\_{G(\mathcal O)}(\mathrm{Gr}\_G)\thickspace\simeq\thickspace\mathrm{Rep}(\widehat G)
$$

$\mathrm{Gr}\_G$ 의 $G(\mathcal O)$ 궤도는 $X_\ast(T)^+$ 로 매겨지고, 그 위의 교차 코호몰로지(intersection cohomology) [층](sheaves.md)이 기약표현에 대응한다. 명시적 상의 $p$ 거듭제곱 보정항은 이 층의 줄기 차원을 차수별로 센 [Kazhdan–Lusztig 다항식](kazhdan-lusztig.md)으로 나타난다(Lusztig). 이 대응을 [Tannaka 쌍대성](tannaka-duality.md)으로 거꾸로 읽어 $\widehat G$ 를 구성한 것이 Mirković–Vilonen 이다.

## 계산

LMFDB(L-functions and modular forms database)의 고전적 모듈러 형식 페이지는 Hecke 고윳값과 함께 각 소수의 Satake 매개변수와 Satake 각 $\theta_p$ 를 싣는다. 비분기 자리의 켤레류만 있으면 그 자리의 Euler 인자, 대칭 거듭제곱 $L$ 함수의 인자, 함수성 올림의 매개변수가 유한 계산으로 나온다.

[^1]: I. Satake, *Theory of spherical functions on reductive algebraic groups over p-adic fields*, Publ. Math. IHÉS **18** (1963), 5–69. 정리의 현대적 서술과 $\mathrm{GL}\_n$ 의 명시적 공식은 D. Bump, *Automorphic Forms and Representations* (1997) 4.6 절, 또는 W. Casselman 의 미출간 노트 *Introduction to the theory of admissible representations of p-adic reductive groups*. Macdonald 공식은 I. G. Macdonald, *Spherical functions on a group of p-adic type* (1971). 기하학적 판은 I. Mirković, K. Vilonen, *Geometric Langlands duality and representations of algebraic groups over commutative rings*, Ann. of Math. **166** (2007). 기본 보조정리는 Ngô Bảo Châu, *Le lemme fondamental pour les algèbres de Lie*, Publ. Math. IHÉS **111** (2010).
[^2]: P. Sarnak, *Notes on the generalized Ramanujan conjectures*, Clay Mathematics Proceedings **4** (2005), 659–685. 어느 경우가 증명되었고 일반 경우가 어디까지 와 있는지 정리한다.

# 연관 문서

## 선수지식

- [Hecke 작용소](hecke-operators.md)
- [Godement–Jacquet 적분](godement-jacquet.md)

## 더 알아보기

- [Rankin–Selberg 적분](rankin-selberg.md)
- [기하학적 Satake 대응](geometric-satake.md)
- [기본 보조정리](fundamental-lemma.md)

#number_theory #group_theory #algebra #computation
