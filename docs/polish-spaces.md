# Polish 공간

# 개요

**Polish 공간(Polish space)** 은 셀 수 있는 조밀 부분집합을 갖고, 완비인 거리로 위상을 줄 수 있는 공간이다. 열린구간 $(0,1)$ 은 보통 거리로는 $1/n$ 의 극한 $0$ 이 구간 밖에 있어 완비가 아니지만, 실직선 $\mathbb R$ 과 위상동형이어서 거리를 바꾸면 완비가 된다. Polish 공간은 완비 거리가 하나라도 존재하면 되는 조건으로 정의되어 위상동형에서 보존되고, [Baire 범주 정리](baire-category.md)와 셀 수 있는 기저를 함께 쓸 수 있게 한다.

# 직관

Polish 공간은 완비 거리로 위상을 줄 수 있는 가분 위상공간이다. $\mathbb R^n$, $\lbrack 0,1\rbrack$, [Cantor 집합](cantor-set.md), 무리수 전체가 그 예다. Sierpiński, Kuratowski, Tarski 등 폴란드 학파가 체계적으로 연구해 이 이름이 붙었다.

완비성은 거리에 달린 성질이고 위상만으로는 정해지지 않는다. Polish 공간은 완비 거리가 하나 존재한다는 조건으로 정의되므로 위상동형으로 보존된다. 완비 거리가 있으므로 Baire 범주 정리가 성립하고, 가분이므로 위상이 가산 개의 열린 공으로 생성된다.

열린구간 $(0,1)$ 은 보통 거리로 완비가 아니다. $1/n$ 은 Cauchy 수열인데 극한 $0$ 이 구간 밖에 있다. 그런데 $(0,1)$ 은 $\mathbb R$ 과 위상동형이고 $\mathbb R$ 은 완비다. 위상동형사상 $\varphi\colon(0,1)\to\mathbb R$ 로 거리를 옮겨 $d(x,y)=\vert\varphi(x)-\varphi(y)\vert$ 로 두면, 이 거리는 같은 위상을 주고 완비다. $1/n$ 은 이 거리로는 Cauchy 수열이 아니다.

유리수 집합 $\mathbb Q$ 에는 그런 거리가 없다. $\mathbb Q$ 는 한 점짜리 집합 가산 개의 합집합이고, 한 점은 $\mathbb Q$ 안에서 내부가 없는 닫힌집합이다. 완비 거리가 있으면 Baire 범주 정리로 이런 합집합이 전체가 될 수 없으므로 모순이다. 반면 무리수 전체는 [연분수](continued-fractions.md) 전개로 자연수열 전체와 위상동형이고, 자연수열 공간에는 완비 거리가 있다.

# 정의

## 완비 거리화 가능성

위상공간 $X$ 의 위상을 주는 완비 거리가 존재하면 $X$ 를 **완비 거리화 가능(completely metrizable)** 하다고 한다. 가산 조밀부분집합이 있으면 **가분(separable)** 이라 한다. 가분이고 완비 거리화 가능한 위상공간이 Polish 공간이다.[^1]

## 예

- $\mathbb R^n$, $\mathbb C^n$, 그 닫힌 부분집합.
- 가분 [Banach 공간](banach-spaces.md). 상한 노름의 $C(\lbrack 0,1\rbrack)$, $1\le p\lt\infty$ 인 $\ell^p$ 와 $L^p(\lbrack 0,1\rbrack)$.
- Cantor 공간(Cantor space) $\mathcal C=\lbrace 0,1\rbrace^{\mathbb N}$ 과 수열 공간 $\mathcal N=\mathbb N^{\mathbb N}$. 둘 다 곱위상을 주고, 두 수열이 처음 달라지는 자리가 $n$ 이면 거리를 $2^{-n}$ 으로 둔다. 기술집합론에서는 $\mathcal N$ 을 Baire 공간(Baire space)이라 부른다. Baire 범주 정리의 Baire 공간과는 다른 뜻이다.
- 콤팩트 거리공간. 콤팩트이면 완비이고 가분이다.

$\mathbb Q$ 는 직관 절의 논증으로 Polish 공간이 아니다. 상한 노름의 $\ell^\infty$ 는 완비이지만 가분이 아니다.

# 성질

## 부분공간

> **정리 (Alexandrov).** Polish 공간 $X$ 의 부분집합 $A$ 가 Polish 공간인 것과 $A$ 가 $G\_\delta$ 집합, 곧 열린집합 가산 개의 교집합인 것은 동치다.

증명의 요지. 열린집합 $U\ne X$ 에서는 $d\_U(x,y)=d(x,y)+\vert 1/d(x,X\setminus U)-1/d(y,X\setminus U)\vert$ 가 같은 위상을 주는 완비 거리다. 직관 절의 $(0,1)$ 이 이 경우다. $G\_\delta$ 집합 $\bigcap_n U_n$ 은 $\prod_n U_n$ 의 대각선에 해당하는 닫힌 부분집합과 위상동형이다. 역으로 완비 거리화 가능한 부분집합이 $G\_\delta$ 라는 것은 완비 거리로 잰 진동이 $0$ 인 점의 집합을 보아 얻는다.

Polish 공간의 가산 곱과 가산 서로소 합도 Polish 공간이다.

## 수열 공간의 연속상

> **정리.** 공집합이 아닌 Polish 공간은 모두 $\mathcal N$ 의 연속 전사상이다.

증명의 요지. $X$ 를 지름 $1$ 이하인 닫힌집합 가산 개 $F_0,F_1,\dots$ 로 덮고, 각 $F_i$ 를 다시 지름 $1/2$ 이하인 닫힌집합 가산 개로 덮는 일을 되풀이한다. 수열 $(i_0,i_1,\dots)\in\mathcal N$ 에 $F_{i_0}\cap F_{i_0i_1}\cap\cdots$ 의 한 점을 대응시키면 완비성으로 그 점이 존재하고 하나뿐이다.

## Cantor–Bendixson 정리와 기수

> **정리 (Cantor–Bendixson).** Polish 공간 $X$ 는 고립점이 없는 닫힌집합 $P$ 와 가산 열린집합 $C$ 의 서로소 합집합 $X=P\cup C$ 로 유일하게 나뉜다.

고립점이 없는 공집합 아닌 Polish 공간은 $\mathcal C$ 와 위상동형인 부분집합을 포함한다. 따라서 비가산 Polish 공간의 기수는 $2^{\aleph_0}$ 이고, Polish 공간에서는 닫힌집합에 대해 연속체 가설이 성립한다.

## Borel 동형 정리

> **정리 (Kuratowski).** 두 비가산 Polish 공간 사이에는 자신과 역이 모두 Borel 가측인 전단사가 존재한다.

따라서 Borel 구조만 보면 비가산 Polish 공간은 $\lbrack 0,1\rbrack$ 하나뿐이다. Polish 공간의 Borel $\sigma$ 대수를 갖춘 가측공간을 **표준 Borel 공간(standard Borel space)** 이라 한다.

# 활용

## 기술집합론

[Borel 계층](borel-hierarchy.md)과 [사영 계층](projective-hierarchy.md)은 Polish 공간의 부분집합을 분류한다. 수열 공간의 연속상 정리로 해석적 집합을 $\mathcal N$ 의 닫힌집합의 연속상으로 다룰 수 있고, Borel 동형 정리로 계층의 성질을 $\mathcal N$ 하나에서 증명하면 모든 비가산 Polish 공간에서 성립한다.

## 확률측도의 공간

$S$ 가 Polish 공간이면 $S$ 위의 확률측도 전체는 [약수렴](weak-convergence.md)의 위상으로 다시 Polish 공간이고, Prokhorov 정리(Prokhorov's theorem)로 그 부분집합이 상대콤팩트인 것과 긴밀한(tight) 것이 동치다. [Skorokhod 표현정리](skorokhod-representation.md)와 [de Finetti 정리](de-finetti-theorem.md)도 상태공간을 Polish 공간으로 둔다.

## 조건부 분포

$S$ 가 Polish 공간이면 $S$ 값 확률변수의 정칙 조건부 분포가 존재한다. 각 $\omega$ 에서 $A\mapsto P(X\in A\mid\mathcal G)(\omega)$ 가 확률측도가 되도록 [조건부 기댓값](conditional-expectation.md)의 버전을 고를 수 있다. 증명은 Borel 동형 정리로 $S$ 를 $\lbrack 0,1\rbrack$ 의 Borel 부분집합으로 바꾼 뒤 유리수에서의 분포함수를 맞춘다.

[^1]: 이 문서의 정리 전체의 서술은 A. S. Kechris, *Classical Descriptive Set Theory*, Springer Graduate Texts in Mathematics 156 (1995), 3, 6, 7, 15 절.

# 연관 문서

## 선수지식

- [Baire 범주 정리](baire-category.md)
- [Cantor 집합](cantor-set.md)

## 더 알아보기

- [Borel 계층](borel-hierarchy.md)

#topology #set_theory #probability #analysis
