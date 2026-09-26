# Gorenstein 환

# 개요

Gorenstein 환은 [Cohen–Macaulay 환](cohen-macaulay-rings.md) 가운데 자기 쌍대성을 갖는 것이다. Cohen–Macaulay 조건은 깊이와 차원이 같다는 것만 말하고, Gorenstein 조건은 그 위에 최고차 국소 코호몰로지를 나타내는 가군이 환 자신과 동형이라는 것을 더한다.

정칙 국소환은 Gorenstein 이고 Gorenstein 환은 Cohen–Macaulay 이며, 두 포함은 모두 진짜다. 이 자리 덕분에 특이점을 가진 대상에도 쌍대성을 쓸 수 있고, 대수기하의 쌍대 층이 가역층이 되는 조건이 이것이다.

# 직관

$R=k\lbrack x,y\rbrack/(x^2,y^2)$ 와 $S=k\lbrack x,y\rbrack/(x^2,xy,y^2)$ 를 본다. 둘 다 $k$ 위 유한차원이고 극대 아이디얼이 $\mathfrak m=(x,y)$ 이며 차원과 깊이가 $0$ 이라 Cohen–Macaulay 다. $R$ 의 $k$ 기저는 $1,x,y,xy$ 이고 $S$ 의 기저는 $1,x,y$ 다.

$\mathfrak m$ 으로 곱해 $0$ 이 되는 원소를 모은다. $R$ 에서는 $xy$ 와 그 스칼라배뿐이므로 $1$ 차원이고, $S$ 에서는 $x$ 와 $y$ 가 모두 그러하므로 $2$ 차원이다. 이 부분공간을 **소클**(socle)이라 한다.

소클이 $1$ 차원인 $R$ 에서는 $R$ 위의 함수 공간 $\mathrm{Hom}\_k(R,k)$ 가 $R$ 가군으로서 $R$ 와 동형이다. $xy$ 의 계수를 읽는 함수를 생성원으로 잡으면 나머지 함수가 그것에 $R$ 의 원소를 곱해 나온다. 소클이 $2$ 차원인 $S$ 에서는 생성원 하나로 덮이지 않으므로 그런 동형이 없다.

$R$ 와 $S$ 를 가른 것은 깊이가 아니라 소클의 차원이다. Gorenstein 조건은 이 차원이 $1$ 이라는 것이고, 차원이 양수인 환에서는 소클 자리를 최고차 국소 코호몰로지가 맡는다.

# 정의

$(R,\mathfrak m,k)$ 를 차원 $d$ 의 Noether 국소환이라 하자.

## Gorenstein 국소환

$R$ 가 **Gorenstein** 이라는 것은 $R$ 를 $R$ 가군으로 볼 때 단사차원이 유한하다는 뜻이다.

$$
\mathrm{injdim}\_R R\lt\infty
$$

국소가 아닌 Noether 환은 모든 극대 아이디얼에서의 국소화가 Gorenstein 일 때 Gorenstein 이라 한다.

## 동치 조건

다음 셋은 서로 동치다.[^1]

- $\mathrm{injdim}\_R R\lt\infty$ 이고, 이때 그 값은 $d$ 다.
- $R$ 가 Cohen–Macaulay 이고 표준 가군 $\omega_R$ 이 $R$ 와 동형이다.
- $\mathrm{Ext}^i_R(k,R)$ 이 $i\neq d$ 에서 $0$ 이고 $i=d$ 에서 $k$ 다.

## 유형

Cohen–Macaulay 환 $R$ 의 **유형**은 $\dim_k\mathrm{Ext}^d_R(k,R)$ 다. Gorenstein 은 유형이 $1$ 인 Cohen–Macaulay 환이다. 차원 $0$ 에서 유형은 소클의 $k$ 차원과 같다.

# 성질

## 세 조건의 포함

**정리.** 정칙 국소환은 Gorenstein 이고 Gorenstein 국소환은 Cohen–Macaulay 다.

*증명의 요지.* 정칙 국소환에서는 $k$ 의 자유분해가 Koszul 복합체로 길이 $d$ 에서 끝나고 $\mathrm{Ext}^d_R(k,R)=k$ 가 직접 계산된다. 두 번째는 단사차원이 유한하면 깊이가 차원과 같다는 Bass 의 정리다. ∎

두 포함은 진짜다. $k\lbrack x\rbrack/(x^2)$ 는 Gorenstein 이지만 정칙이 아니고, 위 직관 절의 $S$ 는 Cohen–Macaulay 이지만 Gorenstein 이 아니다.

## 완전교차

$R=A/(f_1,\dots,f_c)$ 에서 $A$ 가 정칙 국소환이고 $f_i$ 가 $A$ 정칙열이면 $R$ 는 Gorenstein 이다. Koszul 복합체가 $R$ 의 $A$ 위 자유분해를 주고 그 쌍대가 다시 같은 복합체라 유형이 $1$ 이 된다. 역은 성립하지 않으며, 유형 $1$ 이지만 완전교차가 아닌 환이 있다.

## 보존되는 연산

Gorenstein 성질은 국소화, 완비화, 정칙열에 의한 몫, 그리고 다항식환과 멱급수환을 취하는 조작에서 보존된다. 두 Gorenstein 국소 $k$ 대수의 텐서곱도 Gorenstein 이다.

## 국소 쌍대성

$R$ 가 Gorenstein 이면 표준 가군이 자유이므로 국소 쌍대성이 $\mathrm{Ext}$ 만으로 적힌다. 유한생성 $R$ 가군 $M$ 에 대해

$$
H^i_{\mathfrak m}(M)^\vee\cong\mathrm{Ext}^{d-i}\_R(M,R)
$$

이고, $(\cdot)^\vee$ 는 Matlis 쌍대다. Cohen–Macaulay 이지만 Gorenstein 이 아닌 환에서는 오른쪽에 $\omega_R$ 가 끼어든다.

# 활용

- **대수기하의 쌍대성.** 스킴이 Gorenstein 이면 쌍대 층이 가역층이고, Serre 쌍대성이 매끄러운 경우와 같은 꼴로 적힌다. 특이점을 가진 곡선의 산술 종수 계산이 이 성질을 쓴다.
- **특이점론.** 곡면의 유리 이중점과 초곡면 특이점은 완전교차이므로 Gorenstein 이다. 유형은 특이점의 불변량이 된다.
- **조합론.** Stanley–Reisner 환이 Gorenstein 인 조건이 단체 복합체가 구면의 성질을 갖는 것으로 번역되고, 이것이 면 개수 수열의 대칭성을 준다.
- **Hecke 대수.** [Eisenstein 아이디얼](eisenstein-ideal.md)에서의 Hecke 대수 완비화가 Gorenstein 이라는 계산이 모듈러성 올리기 논법에서 쓰인다.

[^1]: W. Bruns, J. Herzog, *Cohen–Macaulay Rings*, Cambridge (1993), 3장. 동치 조건의 증명과 유형의 정의가 3.1절과 3.2절에 있다. 원 논문은 H. Bass, "On the ubiquity of Gorenstein rings", *Math. Z.* **82** (1963), 8–28.

# 연관 문서

## 선수지식

- [Cohen–Macaulay 환](cohen-macaulay-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #combinatorics #topology
