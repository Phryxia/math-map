# 강체해석공간

# 개요

강체해석공간은 [$p$ 진수](p-adic-numbers.md)와 같은 비아르키메데스 체 위에서 해석기하를 하기 위한 공간이다. 복소해석의 정의를 그대로 옮기면 함수가 너무 많아져 해석접속이 사라지므로, Tate 는 어떤 덮개를 허용할지 제한하는 쪽으로 구성을 바꿨다.

함수의 대수를 먼저 정하고 그 극대 스펙트럼을 점의 집합으로 삼는다. 덮개는 유한 개로 가늘게 할 수 있는 것만 허용하고, 그 제한을 [층](sheaves.md)의 조건으로 쓸 수 있게 Grothendieck 위상으로 적는다.

# 직관

$\mathbb Q_p$ 위에서 해석함수를 복소해석처럼 "국소적으로 멱급수로 전개되는 함수" 로 정의해 본다. $\mathbb Z_p$ 를 정의역으로 잡으면 다음 분해가 있다.

$$
\mathbb Z_p=\bigsqcup_{a=0}^{p-1}(a+p\mathbb Z_p)
$$

$p$ 개 조각은 서로 떨어져 있고 각각 열려 있으면서 닫혀 있다. 조각마다 멱급수를 따로 골라도 전체에서 국소적으로 멱급수이므로 이 정의를 통과한다. 조각마다 다른 상수를 주는 함수가 해석함수가 된다.

이런 함수에는 해석접속이 없다. 한 조각에서 $0$ 인 해석함수가 다른 조각에서 $1$ 일 수 있으므로, 작은 집합에서의 값이 나머지를 정하지 못한다. 분해를 더 잘게 반복하면 조각 수는 얼마든지 늘어난다.

막힌 원인이 분해를 허용한 것이므로 분해를 금지한다. $\mathbb Z_p$ 를 $p$ 개 조각으로 나눈 덮개를 덮개로 인정하지 않고, 유한 개의 조각으로 거를 수 있는 덮개만 인정한다. 그러려면 먼저 함수가 무엇인지 정해야 한다. 단위원판에서는 계수가 $0$ 으로 가는 멱급수를 함수로 삼고, 그 대수의 극대 아이디얼을 점으로 삼는다. 여기서 두 함수가 어떤 열린 조각에서 같으면 전체에서 같다.

# 정의

## Tate 대수

$K$ 를 완비 비아르키메데스 체라 하고 다음을 **Tate 대수**라 한다.

$$
T_n=K\langle x_1,\dots,x_n\rangle=\Bigl\lbrace \sum_\alpha a_\alpha x^\alpha\ :\ \vert a_\alpha\vert\to0\Bigr\rbrace
$$

$\alpha$ 는 중복지수이고 조건은 $\vert\alpha\vert\to\infty$ 일 때 계수가 $0$ 으로 간다는 뜻이다. Gauss 노름

$$
\Vert f\Vert=\max_\alpha\vert a_\alpha\vert
$$

으로 $T_n$ 이 Banach 대수가 된다. $T_n$ 은 Noether 환이고 유일 인수분해 정역이며, 극대 아이디얼의 잉여체가 모두 $K$ 의 유한확대다.

## 친화 대수와 친화 준위

$T_n$ 의 몫 $A=T_n/I$ 를 **친화 대수**(affinoid algebra)라 한다. 그 극대 아이디얼 집합

$$
\mathrm{Sp}(A)=\lbrace \mathfrak m\subset A:\mathfrak m\ \text{극대}\rbrace
$$

을 **친화 준위**라 한다. 점 $\mathfrak m$ 에서 $f\in A$ 의 값은 $A/\mathfrak m$ 의 원소이고, 그 체의 절댓값으로 $\vert f(\mathfrak m)\vert$ 가 정해진다.

$A=T_1$ 이면 $\mathrm{Sp}(A)$ 가 닫힌 단위원판이다.

## 유리 영역

$f_1,\dots,f_r,g\in A$ 가 $A$ 를 생성하면 다음이 **유리 영역**이다.

$$
X\Bigl(\frac{f_1,\dots,f_r}{g}\Bigr)=\lbrace x\in\mathrm{Sp}(A):\vert f_i(x)\vert\le\vert g(x)\vert\rbrace
$$

유리 영역은 다시 친화 준위이고, 그 함수 대수는 $A\langle f_1/g,\dots,f_r/g\rangle$ 이다. 유리 영역이 친화 준위 안의 열린 조각이다.

## 허용 덮개

$\mathrm{Sp}(A)$ 의 부분집합족 $\lbrace U_i\rbrace$ 가 **허용 덮개**라는 것은, 각 $U_i$ 가 유리 영역이고 유한 개의 $U_i$ 가 이미 전체를 덮는다는 뜻이다. 일반 공간에서는 국소적으로 이 조건을 요구한다.

허용 덮개만을 덮개로 인정하면 Grothendieck 위상이 되고 이를 **G 위상**이라 한다. $\mathbb Z_p$ 의 $p$ 개 조각은 유리 영역이지만 전체를 덮으므로 유한 부분덮개 조건은 통과한다. 금지되는 것은 무한히 많은 조각으로 쪼갠 덮개이고, 그 결과로 국소상수함수가 사라진다.

## 강체해석공간

G 위상을 갖춘 집합에 구조층을 붙이고 친화 준위의 G 위상 국소환 달린 공간과 국소적으로 동형이면 **강체해석공간**이라 한다.

# 성질

## Tate 비순환 정리

> **정리 (Tate).** 친화 준위 $\mathrm{Sp}(A)$ 의 유한 유리 덮개에 대해 구조층의 Čech 코호몰로지는 차수 $0$ 에서 $A$ 이고 양의 차수에서 $0$ 이다[^1].

증명의 요지는 덮개를 두 조각 덮개 $\lbrace \vert f\vert\le1\rbrace$ 와 $\lbrace \vert f\vert\ge1\rbrace$ 의 반복으로 분해하고, 각 단계에서 Banach 대수의 완전열이 분할된다는 것을 보이는 것이다. 이 정리로 친화 준위마다 $A$ 를 지정한 것이 실제로 G 위상의 층이 된다.

## 연결성

닫힌 단위원판 $\mathrm{Sp}(T_1)$ 은 G 위상에서 연결이다. 위상공간으로는 완전 비연결이지만 허용 덮개로 두 조각으로 가를 수 없으므로, 그 위의 함수가 조각마다 다른 값을 가질 수 없다. 해석접속이 이 연결성에서 돌아온다.

## 대수기하와의 비교

$K$ 위의 고유 스킴에는 강체해석공간이 하나 대응하고, 연접층의 범주와 코호몰로지가 양쪽에서 같다. 사영 다양체의 경우 해석적 부분다양체가 모두 대수적이다.

# 활용

- [Tate 곡선](tate-curve.md). $q\in K^\times$ 가 $\vert q\vert\lt1$ 이면 몫 $K^\times/q^{\mathbb Z}$ 가 강체해석공간이고 [타원곡선](elliptic-curves.md)의 해석화와 동형이다. 복소해석의 격자 몫에 대응하는 구성이다.
- [고유다양체](eigenvariety.md). 무게 공간과 스펙트럼 곡선이 강체해석공간이고, 과수렴 형식의 족이 그 위의 층으로 놓인다.
- [Coleman 적분](coleman-integration.md). 잔차 원판마다 항별 적분을 정의하고 Frobenius 작용으로 이어 붙일 때 원판과 그 붙임이 강체해석적이다.
- [$p$ 진 Hodge 이론](p-adic-hodge-theory.md). 주기환과 비교 동형을 세우는 자리의 공간이 강체해석공간이고, perfectoid 공간이 그 확장이다.

[^1]: J. Tate, "Rigid analytic spaces", Invent. Math. 12 (1971), 257–289. 교과서는 S. Bosch, U. Güntzer, R. Remmert, *Non-Archimedean Analysis*, Springer (1984).

# 연관 문서

## 선수지식

- [p 진수](p-adic-numbers.md)
- [층](sheaves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #analysis
