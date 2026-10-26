# 보편포락대수

# 개요

**보편포락대수(universal enveloping algebra)** 는 [Lie 대수](lie-algebras.md)의 원소들을 행렬처럼 곱할 수 있게 만든 결합대수다. $\mathfrak{sl}\_2$ 의 표현에서 $E$ 와 $F$ 는 행렬이므로 곱 $EF$ 를 계산할 수 있지만, Lie 대수 안에는 괄호 $[E,F]$ 만 있고 곱 $EF$ 가 없다. 그래서 $EF+FE+\frac12H^2$ 처럼 모든 표현에서 같은 꼴로 적히는 식을 표현을 정하기 전에 다룰 자리가 없다. 보편포락대수는 괄호를 교환자로 바꾸는 관계만 넣고 곱을 허용한 대수이고, Lie 대수의 표현은 이 대수의 가군과 같다.

# 직관

[Lie 대수](lie-algebras.md)의 $\mathfrak{sl}\_2$ 절은 기저 $H,E,F$ 와 괄호 $[H,E]=2E$, $[H,F]=-2F$, $[E,F]=H$ 를 쓴다. $n+1$ 차원 기약표현 $V$ 에서 $H,E,F$ 가 작용하는 행렬로 다음 행렬을 만든다.

$$
C=EF+FE+\tfrac12H^2
$$

$C$ 는 $E$ 와 교환한다. $[E,EF]=E[E,F]=EH$, $[E,FE]=[E,F]E=HE$, $[E,H^2]=[E,H]H+H[E,H]=-2EH-2HE$ 이므로 합이 $0$ 이다. 같은 계산으로 $C$ 는 $F$, $H$ 와도 교환한다.

$V$ 의 최고무게 벡터 $v$ 는 $Hv=nv$, $Ev=0$ 이다. $FEv=0$ 이고 $EFv=[E,F]v+FEv=Hv=nv$ 이므로 다음이 나온다.

$$
Cv=\Big(n+\tfrac12n^2\Big)v=\tfrac12n(n+2)\thinspace v
$$

$C$ 가 모든 작용과 교환하고 $V$ 가 기약이므로 Schur 보조정리(Schur's lemma)로 $C$ 는 $V$ 위에서 상수 $\frac12n(n+2)$ 배다. 이 값은 $n$ 마다 다르므로 $C$ 의 값만으로 기약표현이 구별된다. $C$ 의 정의식과 교환 계산은 $V$ 를 고르기 전에 이미 정해져 있고 괄호 관계만 썼다. $H,E,F$ 를 곱할 수 있고 곱이 $XY-YX=[X,Y]$ 만을 만족하는 대수가 있으면 $C$ 는 그 대수의 원소 하나가 되고, 그 대수가 $U(\mathfrak{sl}\_2)$ 다. $C$ 를 **Casimir 원소(Casimir element)** 라 한다.

# 정의

## 보편포락대수

$\mathfrak g$ 를 체 $k$ 위의 Lie 대수, $T(\mathfrak g)=\bigoplus_{m\ge0}\mathfrak g^{\otimes m}$ 을 [텐서곱](tensor-products.md)으로 만든 텐서대수라 하자. $I$ 를 $X\otimes Y-Y\otimes X-[X,Y]$ ($X,Y\in\mathfrak g$) 꼴의 원소들이 생성하는 양쪽 아이디얼이라 하면 보편포락대수는 다음 몫이다.

$$
U(\mathfrak g)=T(\mathfrak g)/I
$$

$\iota:\mathfrak g\to U(\mathfrak g)$ 를 $\mathfrak g=\mathfrak g^{\otimes1}$ 에서 몫으로 가는 사상이라 한다. 결합대수 $A$ 는 교환자 $[a,b]=ab-ba$ 로 Lie 대수가 되고, $\iota$ 는 이 괄호에 대한 Lie 대수 준동형이다.

## 보편성질

$A$ 가 단위원을 갖는 결합대수이고 $\varphi:\mathfrak g\to A$ 가 $\varphi([X,Y])=\varphi(X)\varphi(Y)-\varphi(Y)\varphi(X)$ 를 만족하는 선형사상이면, $\varphi=\tilde\varphi\circ\iota$ 인 대수 준동형 $\tilde\varphi:U(\mathfrak g)\to A$ 가 유일하게 존재한다.

$A=\mathrm{End}(V)$ 로 두면 $\mathfrak g$ 의 표현 $\mathfrak g\to\mathrm{End}(V)$ 와 $U(\mathfrak g)$ 의 [가군](modules.md) 구조가 일대일로 대응한다.

## Casimir 원소

$\mathfrak g$ 가 복소 반단순이면 Killing 형식 $B$ 가 비퇴화다. 기저 $X_1,\dots,X_d$ 와 $B(X_i,X^j)=\delta_{ij}$ 인 쌍대기저 $X^1,\dots,X^d$ 를 잡아 다음을 Casimir 원소라 한다.

$$
C=\sum_{i=1}^dX_iX^i\in U(\mathfrak g)
$$

$C$ 는 기저의 선택에 의존하지 않고 $U(\mathfrak g)$ 의 중심 $Z(\mathfrak g)$ 에 속한다. $\mathfrak{sl}\_2$ 에서 $B$ 대신 대각합 형식 $\mathrm{tr}(XY)$ 를 쓰면 쌍대기저가 $H/2,F,E$ 이고 직관 절의 $C$ 가 나온다.

# 성질

## Poincaré–Birkhoff–Witt 정리

**Poincaré–Birkhoff–Witt 정리(Poincaré–Birkhoff–Witt theorem).** $X_1,\dots,X_d$ 가 $\mathfrak g$ 의 순서 있는 기저이면 단항식 $\iota(X_1)^{a_1}\cdots\iota(X_d)^{a_d}$ ($a_i\ge0$) 들이 $U(\mathfrak g)$ 의 기저다.[^1]

생성은 쉬운 쪽이다. 임의의 곱에서 순서가 뒤바뀐 이웃 $X_jX_i$ ($j\gt i$) 를 $X_iX_j+[X_j,X_i]$ 로 바꾸면 차수가 낮은 항만 새로 생기므로, 차수에 대한 귀납으로 모든 원소가 정렬된 단항식의 결합이 된다. 일차독립은 다항식환 $k\lbrack z_1,\dots,z_d\rbrack$ 위에 $\mathfrak g$ 의 작용을 만들어 정렬된 단항식들이 일차독립인 다항식으로 보내짐을 보여서 증명한다.

다음이 따라 나온다.

- $\iota$ 는 단사다. 그래서 $\mathfrak g$ 를 $U(\mathfrak g)$ 의 부분공간으로 본다.
- $U(\mathfrak g)$ 를 단항식의 차수로 여과하면 그 등급대수가 다항식환 $k\lbrack z_1,\dots,z_d\rbrack$ 과 동형이다. 따라서 $U(\mathfrak g)$ 에는 영인자가 없다.
- $\mathfrak g=\mathfrak a\oplus\mathfrak b$ 가 부분대수 둘의 벡터공간 직합이면 곱사상 $U(\mathfrak a)\otimes U(\mathfrak b)\to U(\mathfrak g)$ 가 벡터공간 동형이다. [최고무게 가군](highest-weight-modules.md)의 Verma 가군이 $U(\mathfrak n^{-})$ 위의 자유가군이라는 것이 이 꼴이다.

## Hopf 대수 구조

$\Delta(X)=X\otimes1+1\otimes X$, $\varepsilon(X)=0$, $S(X)=-X$ ($X\in\mathfrak g$) 는 보편성질로 $U(\mathfrak g)$ 전체로 확장되어 $U(\mathfrak g)$ 를 Hopf 대수로 만든다. $\Delta$ 가 두 표현의 텐서곱 $V\otimes W$ 위의 작용 $X(v\otimes w)=Xv\otimes w+v\otimes Xw$ 를 주고, $S$ 가 쌍대표현 위의 작용을 준다.

## 중심

**Harish-Chandra 동형(Harish-Chandra isomorphism).** 복소 반단순 $\mathfrak g$ 의 Cartan 부분대수를 $\mathfrak h$, Weyl 군을 $W$ 라 하면 중심 $Z(\mathfrak g)$ 는 $\mathfrak h^\ast$ 위의 다항식 가운데 $W$ 의 이동 작용 $w\cdot\lambda=w(\lambda+\rho)-\rho$ 에 대해 불변인 것들의 환과 동형이다.[^1]

$z\in Z(\mathfrak g)$ 는 최고무게 $\lambda$ 의 Verma 가군 위에서 상수 $\chi_\lambda(z)$ 로 작용하고, $\lambda\mapsto\chi_\lambda(z)$ 가 그 다항식이다. $\mathfrak{sl}\_2$ 에서 $\rho=1$ 이고 직관 절의 값 $\frac12n(n+2)=\frac12\big((n+1)^2-1\big)$ 는 $n\mapsto-n-2$ 에 대해 불변이다. 일반적으로 $\chi_\lambda=\chi_\mu$ 일 필요충분조건은 $\mu\in W\cdot\lambda$ 다.

# 활용

- [최고무게 가군](highest-weight-modules.md)의 Verma 가군은 $U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\lambda$ 로 정의되고, 무게공간의 차원은 Poincaré–Birkhoff–Witt 정리로 센다.
- [범주 O](category-o.md)의 블록 분해는 중심 $Z(\mathfrak g)$ 가 작용하는 값으로 가군을 가른 것이고, Harish-Chandra 동형이 같은 블록에 드는 무게를 이동 작용의 궤도로 정한다.
- [양자군](quantum-groups.md) $U_q(\mathfrak g)$ 는 $U(\mathfrak g)$ 의 생성원과 관계에 매개변수 $q$ 를 넣어 변형한 Hopf 대수다.
- [Lie 군](lie-groups.md) $G$ 위에서 $U(\mathfrak g)$ 는 왼쪽 불변 미분작용소들의 대수와 동형이다. $\mathrm{SU}(2)$ 의 Casimir 원소는 $S^3$ 위의 Laplace 작용소의 상수배이고, 양자역학에서는 전체 각운동량의 제곱 $L^2$ 이다.

[^1]: J. Humphreys, *Introduction to Lie Algebras and Representation Theory* (1972), 17 절(보편포락대수와 Poincaré–Birkhoff–Witt 정리), 23 절(Harish-Chandra 정리). J. Dixmier, *Enveloping Algebras* (1977) 2 장과 7 장.

# 연관 문서

## 선수지식

- [Lie 대수](lie-algebras.md)
- [텐서곱](tensor-products.md)

## 더 알아보기

- [Weyl 완전가약성 정리](weyl-complete-reducibility.md)
- [Lie 대수 코호몰로지](lie-algebra-cohomology.md)
- [최고무게 가군](highest-weight-modules.md)
- [양자군](quantum-groups.md)

#algebra #ring_theory #linear_algebra
