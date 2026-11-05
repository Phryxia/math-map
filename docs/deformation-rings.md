# Galois 표현의 변형환

# 개요

**Galois 표현의 변형환(deformation ring)** 은 [유한체](finite-fields.md) 위의 [Galois 표현](galois-representations.md) $\bar\rho$ 를 들어 올린 표현들을 매개하는 완비 국소환이다. [행렬](matrices.md) 성분이 $\mathbb F_p$ 인 표현 $\bar\rho$ 하나를 놓고 성분을 $\mathbb Z/p^2$, $\mathbb Z/p^3$ 으로 한 자리씩 올려 같은 성질의 표현을 만드는 방법은 여러 가지이고, 하나씩 찾으면 끝이 없다. 변형환은 그 모든 올림을 환 하나에서 나가는 준동형으로 매개해, 표현을 찾는 문제를 가환대수의 계산으로 바꾼다.

# 직관

가장 작은 경우부터 센다. $G=\mathbb Z/p$ 를 생성원 $\gamma$ 로 쓰고, $\bar\rho\colon G\to\mathrm{GL}\_1(\mathbb F_p)$ 를 $\gamma\mapsto1$ 인 자명한 표현으로 잡는다. 이것을 $\mathbb Z/p^2$ 계수로 올리려면 $\gamma\mapsto1+t$ 에서 $t\equiv0\pmod p$ 이고 $(1+t)^p=1$ 이어야 한다. $t=pa$ 이면 $(1+pa)^p\equiv1\pmod{p^2}$ 이므로 $a=0,1,\dots,p-1$ 이 모두 되고, 올림은 $p$ 개다.

올림 하나는 $t$ 하나로 정해지고 $t$ 가 만족할 조건은 $(1+t)^p=1$ 하나다. 그래서 변수 $T$ 에 이 관계만 건 환 $R=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack/((1+T)^p-1)$ 을 만들면, $A$ 계수 올림은 $T\mapsto t$ 로 정해지는 환 준동형 $R\to A$ 와 일대일로 대응한다. 계수환 $A$ 를 바꿔도 같은 $R$ 하나로 모든 올림이 적힌다.

$n\ge2$ 이면 올림의 첫 단계가 [군 코호몰로지](group-cohomology.md)로 적힌다. 고정한 행렬 올림 $\tilde{\bar\rho}(g)$ 에 $p$ 배의 보정을 곱해 $\mathbb Z/p^2$ 계수 올림을 쓴다.

$$
\rho(g)=\bigl(1+p\thinspace c(g)\bigr)\thinspace\tilde{\bar\rho}(g)
$$

$\rho$ 가 준동형일 조건을 $p^2=0$ 에서 전개하면 $c$ 에 대한 조건 하나가 남는다.

$$
c(gh)=c(g)+\mathrm{Ad}(\bar\rho(g))\thinspace c(h)
$$

계수가 $\mathrm{ad}\thinspace\bar\rho=M_n(\mathbb F_p)$ 인 1-코사이클 조건이다. $1+pm$ 꼴로 켤레를 취하면 $c$ 가 쌍대경계(coboundary)만큼 바뀌므로, 켤레로 같은 것을 묶은 올림은 $H^1(G,\mathrm{ad}\thinspace\bar\rho)$ 의 원소와 대응한다. 앞의 $n=1$ 경우에는 $H^1(\mathbb Z/p,\mathbb F_p)=\mathrm{Hom}(\mathbb Z/p,\mathbb F_p)$ 의 원소가 $p$ 개이고 올림도 $p$ 개다. 한 층 더 올릴 때 생기는 장애는 [군 확대](group-extensions.md)를 분류하는 것과 같은 $H^2(G,\mathrm{ad}\thinspace\bar\rho)$ 에 속한다.

# 정의

## 계수환의 범주

$\Lambda$ 를 잉여체 $k=\mathbb F_p$ 인 완비 이산부치환이라 하고 보통 $\mathbb Z_p$ 를 쓴다. 범주 $\mathcal C_\Lambda$ 의 대상은 잉여체가 $k$ 인 완비 국소 Noether $\Lambda$ 대수, 사상은 국소 $\Lambda$ 대수 준동형이다. $\mathbb Z/p^m$, $\mathbb Z_p$, $\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$, 이중수 환 $k\lbrack\varepsilon\rbrack=k\lbrack x\rbrack/(x^2)$ 이 대상이다.

## 변형 함자

$A\in\mathcal C_\Lambda$ 의 극대 아이디얼을 $\mathfrak m_A$ 라 하자. $\bar\rho\colon G\to\mathrm{GL}\_n(k)$ 의 $A$ 계수 **변형(deformation)** 은 $\bmod\thinspace\mathfrak m_A$ 로 줄이면 $\bar\rho$ 가 되는 연속 표현 $\rho\colon G\to\mathrm{GL}\_n(A)$ 를, $\ker(\mathrm{GL}\_n(A)\to\mathrm{GL}\_n(k))$ 의 원소에 의한 켤레로 같은 것끼리 묶은 류다. $A$ 에 그 집합 $D_{\bar\rho}(A)$ 를 대응시키는 [함자](functors.md)를 **변형 함자(deformation functor)** 라 한다. 직관 절의 $G=\mathbb Z/p$ 에서 $D_{\bar\rho}(\mathbb Z/p^2)$ 는 $p$ 개의 원소를 갖는다.

켤레로 묶지 않고 표현 자체를 모은 함자를 **틀 붙인 변형 함자(framed deformation functor)** $D^{\square}\_{\bar\rho}$ 라 한다. $n=1$ 이면 켤레가 자명하므로 두 함자가 같다.

수론에서 $G$ 는 유한집합 $S$ 밖에서 비분기인 최대 확대의 Galois 군 $G_{\mathbb Q,S}$ 다. 이 군은 Mazur 의 $p$ 유한성 조건 $\Phi_p$, 곧 열린 부분군마다 위수 $p$ 의 지표로 가는 연속 준동형이 유한개라는 조건을 만족한다.

## 보편 변형환

$R\in\mathcal C_\Lambda$ 와 변형 $\rho^{\mathrm{univ}}\colon G\to\mathrm{GL}\_n(R)$ 가 있어 모든 $A$ 에서

$$
\mathrm{Hom}\_{\mathcal C_\Lambda}(R,A)\thickspace\xrightarrow{\thinspace\sim\thinspace}\thickspace D_{\bar\rho}(A),
\qquad \varphi\longmapsto \varphi\circ\rho^{\mathrm{univ}}
$$

가 전단사이면, $R$ 을 $\bar\rho$ 의 **보편 변형환(universal deformation ring)** $R_{\bar\rho}$ 라 하고 $\rho^{\mathrm{univ}}$ 를 **보편 변형(universal deformation)** 이라 한다. 직관 절의 $G=\mathbb Z/p$ 에서는

$$
R_{\bar\rho}=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack\big/\bigl((1+T)^p-1\bigr),\qquad \rho^{\mathrm{univ}}(\gamma)=1+T
$$

이다. $G=\mathbb Z_p$ 를 위상 생성원 $\gamma$ 로 쓰면 $1+t$ 에 관계가 없으므로 $R_{\bar\rho}=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 다. 틀 붙인 변형 함자를 표현하는 환은 **틀 변형환(framed deformation ring)** $R^{\square}\_{\bar\rho}$ 라 한다.

## 접공간과 장애류

$D_{\bar\rho}(k\lbrack\varepsilon\rbrack)$ 를 변형 함자의 **접공간(tangent space)** 이라 한다. 직관 절의 계산에서 $p$ 를 $\varepsilon$ 으로 바꾼 것이다.

$\mathbb Z/p^m$ 계수 변형을 $\mathbb Z/p^{m+1}$ 계수로 올리려고 행렬을 아무렇게나 올리면 준동형이 아니고, 어긋나는 정도가 $\mathrm{ad}\thinspace\bar\rho$ 계수 2-코사이클을 만든다. 그 류를 **장애류(obstruction class)** 라 하고 $H^2(G,\mathrm{ad}\thinspace\bar\rho)$ 에 속한다. $H^2(G,\mathrm{ad}^0\bar\rho)=0$ 이면 변형 문제를 **장애 없음(unobstructed)** 이라 한다. $\mathrm{ad}^0$ 은 대각합이 $0$ 인 행렬이다.

## 조건을 단 변형

수론에서는 변형 함자에 조건을 걸어 부분함자를 쓴다.

- $S$ 밖 비분기 조건은 $G_{\mathbb Q,S}$ 를 쓰는 것으로 들어간다.
- 행렬식 고정 조건은 $\det\rho=\chi^{k-1}\cdot(\text{유한 지표})$ 를 요구한다. $\chi$ 는 $p$ 진 원분 지표다.
- $p$ 자리의 국소 조건은 평탄, 결정적, 반안정, 또는 Hodge–Tate 무게를 지정한 것이다. [Fontaine–Mazur 추측](fontaine-mazur.md)의 de Rham 조건을 변형 함자에 건 것이다[^4].
- $\ell\ne p$ 자리의 국소 조건은 도체의 형태를 지정한다.

각 조건은 국소 틀 변형환 $R^{\square}\_v$ 의 닫힌 부분스킴에 대응하고, 조건을 단 전역 변형환은 그 조건들로 자른 몫환이다.

# 성질

## Mazur 의 표현가능성 정리

$G$ 가 $\Phi_p$ 를 만족하고 $\mathrm{End}\_G(\bar\rho)=k$ 이면 $D_{\bar\rho}$ 는 보편 변형환 $R_{\bar\rho}$ 로 표현된다[^1]. 절대기약인 $\bar\rho$ 는 Schur 보조정리(Schur's lemma)에 의해 이 조건을 만족한다. 증명은 Schlessinger 의 판정(Schlessinger's criterion)[^2]을 확인하는 것이다. $\bar\rho$ 가 스칼라 아닌 자기준동형을 가지면 변형을 붙일 때 켤레의 선택이 여럿이 되어 판정이 깨진다.

틀 붙인 변형 함자는 $\mathrm{End}\_G(\bar\rho)=k$ 없이도 $R^{\square}\_{\bar\rho}$ 로 표현된다. $\mathrm{End}\_G(\bar\rho)=k$ 이면 $R^{\square}\_{\bar\rho}$ 는 $R_{\bar\rho}$ 위의 멱급수환이고 변수는 $n^2-1$ 개다.

## 접공간과 표시

직관 절의 계산에서

$$
D_{\bar\rho}(k\lbrack\varepsilon\rbrack)\thickspace\cong\thickspace\mathrm{Hom}\_k\bigl(\mathfrak m_R/(\mathfrak m_R^2,p),\thinspace k\bigr)\thickspace\cong\thickspace H^1(G,\mathrm{ad}\thinspace\bar\rho)
$$

이다. 장애류가 관계식을 통제하므로 $d=\dim_k H^1$ 개의 변수로 다음 표시가 있다.

$$
R_{\bar\rho}\thickspace\cong\thickspace\Lambda\lbrack\lbrack x_1,\dots,x_d\rbrack\rbrack/(f_1,\dots,f_r),\qquad r\le \dim_k H^2(G,\mathrm{ad}\thinspace\bar\rho)
$$

$G=\mathbb Z/p$ 에서는 $\dim H^1(\mathbb Z/p,\mathbb F_p)=1$ 과 $\dim H^2(\mathbb Z/p,\mathbb F_p)=1$ 이 변수 하나와 관계식 $(1+T)^p-1$ 하나에 대응한다. $H^2=0$ 이면 $R_{\bar\rho}\cong\Lambda\lbrack\lbrack x_1,\dots,x_d\rbrack\rbrack$ 이고, $G=\mathbb Z_p$ 가 그 예다. 일반적으로

$$
\dim R_{\bar\rho}\thickspace\ge\thickspace 1+\dim H^1-\dim H^2
$$

이다. 우변은 Tate 의 전역 Euler 표수 공식(global Euler characteristic formula)으로 $H^0$ 과 무한소수 자리의 기여만으로 계산된다. $\mathrm{GL}\_2$ 의 홀수 $\bar\rho$ 에서 $\mathrm{ad}^0$ 을 쓰면 우변이 $1$ 이다.

## 두 성분의 예

$G=\mathbb Z/p$ 에서 $(1+T)^p-1=T\cdot\Phi_p(1+T)$ 이고 $\Phi_p(1+T)$ 는 $p$ 에서 Eisenstein 다항식이다. 그래서 $\mathrm{Spec}\thinspace R_{\bar\rho}$ 의 기약 성분은 $R/(T)=\mathbb Z_p$ 와 $R/(\Phi_p(1+T))=\mathbb Z_p\lbrack\zeta_p\rbrack$ 두 개다. 앞의 것은 자명한 변형이고, 뒤의 것은 $\gamma\mapsto\zeta_p$ 인 지표다. $R_{\bar\rho}$ 는 $\mathbb Z_p$ 위 유한이므로 $\mathbb Z/p^m$ 값 점이 각 $m$ 에서 유한개다.

## R=T

같은 $\bar\rho$ 로 환원되는 고유형식들의 Hecke 대수 $\mathbb T_{\bar\rho}$ 도 $\mathcal C_\Lambda$ 의 대상이고, 고유형식에 Galois 표현을 붙이는 구성이 사상

$$
R_{\bar\rho}\longrightarrow\mathbb T_{\bar\rho}
$$

을 준다. 이 사상은 전사이고, 이것이 동형이라는 주장을 **R=T 정리(R=T theorem)** 라 한다. 동형이면 조건을 만족하는 $\bar\rho$ 의 모든 변형이 모듈러다.

Wiles 와 Taylor 의 증명[^3]은 수치 판정을 쓴다. $R$ 이 [완전교차환](complete-intersection-rings.md)이고 $\mathbb T$ 의 합동 가군의 크기가 $R$ 의 여접공간 크기와 맞으면 동형이라는 가환대수 보조정리를 만들고, Taylor–Wiles 계(Taylor–Wiles system)가 그 조건을 만족시킨다. 보조 소수를 붙인 변형환들의 극한을 $\Lambda\lbrack\lbrack x_1,\dots,x_g\rbrack\rbrack$ 위에서 통제하는 이 방법을 패칭(patching)이라 하고, Diamond, Fujiwara, Kisin, Calegari–Geraghty 를 거쳐 $\mathrm{GL}\_n$ 과 수체로 확장되었다.

## 장애 없는 변형

장애 없음이면 $\mathrm{ad}^0$ 에 대한 변형환은 $\mathbb Z_p\lbrack\lbrack x_1,x_2,x_3\rbrack\rbrack$ 이다. Weston 은 무게 $3$ 이상의 새형식 하나를 고정하면 유한개를 뺀 모든 $p$ 에서 그 $\bar\rho$ 의 변형 문제가 장애 없음을 증명했다[^5].

# 활용

- [Serre 추측](serre-conjecture.md)의 Khare–Wintenberger 증명은 $\bar\rho$ 를 특성 $0$ 표현으로 올리고 모듈러성 올림을 적용하는 귀납이다. 올리는 단계는 조건을 단 변형환의 점을 찾는 일이고, Ramakrishna 의 올림 정리(Ramakrishna's lifting theorem)가 그 변형환이 비어 있지 않음을 증명한다.
- 모듈러성 올림 정리(modularity lifting theorem)는 $\bar\rho$ 가 모듈러이면 조건을 만족하는 변형도 모듈러라는 정리들이고, R=T 의 꼴로 증명된다. [Fermat 의 마지막 정리](fermats-last-theorem.md)가 첫 응용이었다.
- Fontaine–Mazur 추측의 $\mathrm{GL}\_2$ 경우에 대한 Kisin 과 Emerton 의 증명은 de Rham 조건을 단 변형환의 $\mathbb Q_p$ 값 점이 모두 $\mathbb T$ 에서 옴을 보이고, 국소 변형환의 기하를 $p$ 진 국소 Langlands 대응(p-adic local Langlands correspondence)과 비교한다.
- 변형환의 점을 강체 해석 공간으로 모은 것이 [Hida 이론](hida-theory.md)의 족과 [고유다양체](eigenvariety.md)다.
- 구체적인 $\bar\rho$ 의 접공간 차원은 다음 순서로 계산한다. $\bar\rho$ 의 상을 정하고 $\mathrm{ad}^0$ 의 $G$ -[가군](modules.md) 분해를 본다. 상이 충분히 크면 $H^0(\mathrm{ad}^0)=0$ 이다. 전역 Euler 표수 공식으로 $\dim H^1-\dim H^2$ 를 얻는다. [Poitou–Tate 완전열](poitou-tate.md)로 국소 조건을 단 [Selmer 군](selmer-tate-shafarevich.md)과 쌍대 Selmer 군을 연결해 조건이 자른 $H^1$ 을 센다. Taylor–Wiles 계에서 보조 소수를 붙이는 목적이 쌍대 Selmer 군을 $0$ 으로 만드는 것이다.

[^1]: B. Mazur, *Deforming Galois representations*, Galois Groups over $\mathbb Q$ (MSRI Publ. 16, 1989), 385–437. 변형 함자, $\Phi_p$ 조건, 표현가능성, 접공간이 $H^1$ 이라는 계산이 모두 이 논문에 있다.

[^2]: M. Schlessinger, *Functors of Artin rings*, Trans. AMS **130** (1968), 208–222. 표현가능성 판정.

[^3]: A. Wiles, *Modular elliptic curves and Fermat's Last Theorem*, Ann. of Math. **141** (1995); R. Taylor, A. Wiles, *Ring-theoretic properties of certain Hecke algebras*, 같은 권. $R=T$ 와 패칭 논법의 원전.

[^4]: M. Kisin, *Moduli of finite flat group schemes, and modularity*, Ann. of Math. **170** (2009), 1085–1180. 국소 틀 변형환의 기약 성분과 모듈러성 올림.

[^5]: T. Weston, *Unobstructed modular deformation problems*, Amer. J. Math. **126** (2004), 1237–1252.

# 연관 문서

## 선수지식

- [Fontaine–Mazur 추측](fontaine-mazur.md)
- [군 확대](group-extensions.md)
- [Poitou–Tate 완전열](poitou-tate.md)

## 더 알아보기

- [Serre 추측과 Khare–Wintenberger 정리](serre-conjecture.md)

#number_theory #group_theory #ring_theory #construction
