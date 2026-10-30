# Gorenstein 환

# 개요

**Gorenstein 환(Gorenstein ring)** 은 특이점이 있어도 매끄러운 경우와 같은 쌍대성이 성립하는 환이다. 평면곡선 $y^2=x^3$ 은 원점에서 뾰족하지만 방정식 하나로 정의되므로, 매끄러운 곡선에서 쓰던 쌍대성 정리가 그대로 성립한다. Gorenstein 환은 이런 환을 [국소 코호몰로지](local-cohomology.md)를 나타내는 [가군](modules.md)이 환 자신과 같다는 조건으로 정의해, 특이점을 가진 대상에서 쌍대성을 계산한다.

# 직관

$R=k\lbrack x,y\rbrack/(x^2,y^2)$ 와 $S=k\lbrack x,y\rbrack/(x^2,xy,y^2)$ 를 본다. 둘 다 $k$ 위 유한차원이고 극대 아이디얼이 $\mathfrak m=(x,y)$ 이며 차원과 깊이가 $0$ 이라 [Cohen–Macaulay 환](cohen-macaulay-rings.md)이고, $R$ 의 $k$ 기저는 $1,x,y,xy$ , $S$ 의 기저는 $1,x,y$ 다. $\mathfrak m$ 으로 곱해 $0$ 이 되는 원소를 모으면 $R$ 에서는 $xy$ 의 스칼라배뿐이라 $1$ 차원이고 $S$ 에서는 $x$ 와 $y$ 가 모두 그러해 $2$ 차원이다. 이 부분공간을 **소클(socle)** 이라 한다.

소클이 $1$ 차원인 $R$ 에서는 $R$ 위의 함수 공간 $\mathrm{Hom}\_k(R,k)$ 가 $R$ 가군으로서 $R$ 와 동형이다. $xy$ 의 계수를 읽는 함수를 생성원으로 잡으면 나머지 함수가 그것에 $R$ 의 원소를 곱해 나오지만, 소클이 $2$ 차원인 $S$ 에서는 생성원 하나로 덮이지 않아 그런 동형이 없다. 두 환을 가른 것은 깊이가 아니라 소클의 차원이고, Gorenstein 조건은 이 차원이 $1$ 이라는 것이다.

# 정의

$(A,\mathfrak m,k)$ 를 차원 $d$ 의 Noether 국소환이라 하자.

## 단사차원

$A$ 가군 $M$ 의 **단사차원(injective dimension)** $\mathrm{injdim}\_A M$ 은 [단사가군](injective-modules.md) $I^j$ 로 된 완전열

$$
0\to M\to I^0\to I^1\to\cdots\to I^n\to 0
$$

이 존재하는 가장 작은 $n$ 이다. 그런 $n$ 이 없으면 $\infty$ 다.

$A=k\lbrack x\rbrack\_{(x)}$ 에서는 분수체 $K=k(x)$ 와 $K/A$ 가 둘 다 단사이므로 $0\to A\to K\to K/A\to 0$ 이 이 꼴이고 $\mathrm{injdim}\_A A=1$ 이다.

## Gorenstein 국소환

$A$ 가 **Gorenstein** 이라는 것은 $A$ 를 $A$ 가군으로 볼 때 단사차원이 유한하다는 뜻이다.

$$
\mathrm{injdim}\_A A\lt\infty
$$

직관 절의 $R$ 는 Gorenstein 이다. $\mathrm{Hom}\_R(M,\mathrm{Hom}\_k(R,k))\cong\mathrm{Hom}\_k(M,k)$ 이므로 $\mathrm{Hom}\_k(R,k)$ 는 단사 $R$ 가군이고, 직관 절에서 본 동형으로 $R$ 자신이 단사가 되어 $\mathrm{injdim}\_R R=0$ 이다. $S$ 는 $\mathrm{injdim}\_S S=\infty$ 이고, 이것은 성질 절의 동치 조건과 소클의 차원으로 확인된다.

국소가 아닌 [Noether 환](noetherian-rings.md)은 모든 극대 아이디얼에서의 국소화가 Gorenstein 일 때 Gorenstein 이라 한다. $k\lbrack x\rbrack$ 의 극대 아이디얼은 기약다항식 $f$ 가 생성하는 $(f)$ 이고, 그 국소화마다 위의 $k\lbrack x\rbrack\_{(x)}$ 와 같은 완전열이 있으므로 $k\lbrack x\rbrack$ 는 Gorenstein 이다.

## 유형

Cohen–Macaulay 환 $A$ 의 **유형(type)** 은 $\dim_k\mathrm{Ext}^d_A(k,A)$ 다.

차원 $0$ 에서는 $\mathrm{Ext}^0_A(k,A)=\mathrm{Hom}\_A(k,A)$ 가 $\mathfrak m$ 으로 곱해 $0$ 이 되는 원소의 모임, 곧 소클이다. 그래서 직관 절의 $R$ 의 유형은 $1$ 이고 $S$ 의 유형은 $2$ 다.

# 성질

## 동치 조건

**정리.** 차원 $d$ 의 Noether 국소환 $A$ 에 대해 다음은 서로 동치다.[^1]

- $\mathrm{injdim}\_A A\lt\infty$ 이고, 이때 그 값은 $d$ 다.
- $A$ 가 Cohen–Macaulay 이고 유형이 $1$ 이다.
- $A$ 가 Cohen–Macaulay 이고 표준 가군(canonical module) $\omega_A$ 이 $A$ 와 동형이다.
- $\mathrm{Ext}^i_A(k,A)$ 이 $i\neq d$ 에서 $0$ 이고 $i=d$ 에서 $k$ 다.

직관 절의 $S$ 는 $\mathrm{Ext}^0_S(k,S)=k^2$ 이므로 넷째 조건을 어기고, 따라서 $\mathrm{injdim}\_S S=\infty$ 다.

## 세 조건의 포함

**정리.** [정칙 국소환](regular-local-rings.md)은 Gorenstein 이고 Gorenstein 국소환은 Cohen–Macaulay 다.

*증명의 요지.* 정칙 국소환에서는 $k$ 의 자유분해가 [Koszul 복합체](koszul-complex.md)로 길이 $d$ 에서 끝나고 $\mathrm{Ext}^d_A(k,A)=k$ 가 직접 계산된다. 두 번째는 단사차원이 유한하면 깊이가 차원과 같다는 Bass 의 정리다. ∎

두 포함은 진짜다. $k\lbrack x\rbrack/(x^2)$ 는 Gorenstein 이지만 정칙이 아니고, 직관 절의 $S$ 는 Cohen–Macaulay 이지만 Gorenstein 이 아니다.

## 완전교차

$A=B/(f_1,\dots,f_c)$ 에서 $B$ 가 정칙 국소환이고 $f_1,\dots,f_c$ 가 $B$ 정칙열(regular sequence)이면 $A$ 는 Gorenstein 이다. Koszul 복합체가 $A$ 의 $B$ 위 자유분해를 주고 그 쌍대가 다시 같은 복합체라 유형이 $1$ 이 된다. 역은 성립하지 않으며, 유형 $1$ 이지만 [완전교차환](complete-intersection-rings.md)이 아닌 환이 있다.

## 보존되는 연산

Gorenstein 성질은 국소화, 완비화, 정칙열에 의한 몫, 그리고 다항식환과 멱급수환을 취하는 조작에서 보존된다. 두 Gorenstein 국소 $k$ 대수의 텐서곱도 Gorenstein 이다.

## 국소 쌍대성

$A$ 가 Gorenstein 이면 표준 가군이 자유이므로 국소 쌍대성(local duality)이 $\mathrm{Ext}$ 만으로 적힌다. 유한생성 $A$ 가군 $M$ 에 대해

$$
H^i_{\mathfrak m}(M)^\vee\cong\mathrm{Ext}^{d-i}\_A(M,A)
$$

이고, $(\cdot)^\vee$ 는 Matlis 쌍대(Matlis dual)다. Cohen–Macaulay 이지만 Gorenstein 이 아닌 환에서는 오른쪽에 $\omega_A$ 가 끼어든다.

# 활용

- **대수기하의 쌍대성.** 스킴이 Gorenstein 이면 쌍대 층(dualizing sheaf)이 가역층(invertible sheaf)이고, Serre 쌍대성(Serre duality)이 매끄러운 경우와 같은 꼴로 적힌다. 특이점을 가진 곡선의 산술 종수(arithmetic genus) 계산이 이 성질을 쓴다.
- **특이점론.** 곡면의 유리 이중점(rational double point)과 초곡면 특이점은 완전교차이므로 Gorenstein 이다. 유형은 특이점의 불변량이 된다.
- **조합론.** Stanley–Reisner 환(Stanley–Reisner ring)이 Gorenstein 인 조건이 단체 복합체가 구면의 성질을 갖는 것으로 번역되고, 이것이 면 개수 수열의 대칭성을 준다.
- **Hecke 대수.** [Eisenstein 아이디얼](eisenstein-ideal.md)에서의 Hecke 대수 완비화가 Gorenstein 이라는 계산이 모듈러성 올리기(modularity lifting) 논법에서 쓰인다.

[^1]: W. Bruns, J. Herzog, *Cohen–Macaulay Rings*, Cambridge (1993), 3장. 동치 조건의 증명과 유형의 정의가 3.1절과 3.2절에 있다. 원 논문은 H. Bass, "On the ubiquity of Gorenstein rings", *Math. Z.* **82** (1963), 8–28.

# 연관 문서

## 선수지식

- [Cohen–Macaulay 환](cohen-macaulay-rings.md)

## 더 알아보기

- [완전교차환](complete-intersection-rings.md)

#ring_theory #algebra #combinatorics #topology
