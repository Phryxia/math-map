# Stiefel–Whitney 류

# 개요

Stiefel–Whitney 류는 실 [벡터다발](vector-bundles.md)에 붙는 $\mathbb Z/2$ 계수 코호몰로지류다. 밑공간 $X$ 위의 다발 $E$ 마다 $w_i(E)\in H^i(X;\mathbb Z/2)$ 가 있고 자명한 다발에서는 $i\ge 1$ 인 것이 모두 소멸한다.

[특성류](characteristic-classes.md) 가운데 Chern 류와 Pontryagin 류가 복소 구조나 실수 계수를 요구하는 자리에서, 이 류는 아무 실 다발에나 있다. 접다발에 적용하면 $w_1$ 이 방향가능성을, $w_2$ 가 스핀 구조의 존재를, 전체 류의 역이 몰입에 필요한 차원의 하한을 판정한다.

# 직관

원 위의 실 선다발에는 띠와 Möbius 띠 두 가지가 있다. 둘을 구별하는 수를 만들어 본다. 원을 두 호 $U, V$ 로 덮으면 각 호 위에서 다발이 자명하므로 섬유를 $\mathbb R$ 과 동일시할 수 있고, 겹침은 두 조각 $U\cap V=A\sqcup B$ 다. 두 동일시가 $A$ 와 $B$ 에서 각각 $\pm 1$ 배로 어긋나므로 부호 두 개 $\varepsilon_A,\varepsilon_B$ 가 나온다. 한 호 위의 동일시를 바꾸면 두 부호가 동시에 뒤집히므로 곱 $\varepsilon_A\varepsilon_B$ 는 바뀌지 않는다. 띠에서는 이 곱이 $+1$ 이고 Möbius 띠에서는 $-1$ 이다.

이 곱은 $\lbrace\pm 1\rbrace\cong\mathbb Z/2$ 에 값을 갖고 $H^1(S^1;\mathbb Z/2)=\mathbb Z/2$ 의 원소로 읽힌다. 이것이 $w_1$ 이다. 랭크가 $r$ 인 다발에서는 겹침의 어긋남이 부호 하나가 아니라 직교군 $\mathrm O(r)$ 의 원소이고, 행렬식의 부호가 여전히 $w_1$ 을 주지만 남은 정보는 한 차수에 담기지 않는다. 그 정보를 차수 $2$ 부터 $r$ 까지의 류로 나눠 담은 것이 $w_2,\dots,w_r$ 이다.

# 정의

실 벡터다발 $E\to X$ 마다 류 $w_i(E)\in H^i(X;\mathbb Z/2)$ 가 있고 다음 네 조건을 만족한다. 이 조건들이 $w_i$ 를 유일하게 정한다.

- $w_0(E)=1$ 이고, $i\gt \mathrm{rank}\thinspace E$ 이면 $w_i(E)=0$ 이다.
- 자연성. 연속사상 $f:Y\to X$ 에 대해 $w_i(f^\ast E)=f^\ast w_i(E)$ 다.
- Whitney 곱 공식. 전체 류를 $w(E)=\sum\_{i\ge 0}w_i(E)$ 로 쓰면 $w(E\oplus F)=w(E)w(F)$ 다.
- 정규화. [실사영공간](real-projective-space.md) $\mathbb{RP}^1$ 위의 자명하지 않은 선다발 $\gamma$ 에서 $w_1(\gamma)\neq 0$ 이다.

## Steenrod 제곱을 쓴 구성

랭크 $r$ 인 다발 $E$ 의 Thom 공간을 $\mathrm{Th}(E)$ 라 하고 Thom 동형을 $\phi:H^k(X;\mathbb Z/2)\to H^{k+r}(\mathrm{Th}(E);\mathbb Z/2)$ 라 하면

$$
w_i(E)=\phi^{-1}(\mathrm{Sq}^i\phi(1))
$$

이다. [Steenrod 연산](steenrod-operations.md)의 Cartan 공식이 Whitney 곱 공식을 주고, $i\gt r$ 에서 $\mathrm{Sq}^i$ 가 차수 $r$ 인 류에 $0$ 을 주는 것이 첫째 조건을 준다.

## 분류공간

$H^\ast(\mathrm{BO}(r);\mathbb Z/2)$ 는 $w_1,\dots,w_r$ 이 생성하는 다항식환이다. 랭크 $r$ 다발은 [분류공간](classifying-spaces.md)으로 가는 사상 $X\to\mathrm{BO}(r)$ 의 호모토피류로 결정되므로, $w_i(E)$ 는 그 사상으로 생성원을 당긴 것이다.

# 성질

## 실사영공간의 접다발

$H^\ast(\mathbb{RP}^n;\mathbb Z/2)$ 는 $a$ 가 생성하고 $a^{n+1}=0$ 인 환이다. 동반 선다발 $\gamma$ 에서 $w(\gamma)=1+a$ 이고, $T\mathbb{RP}^n\oplus\varepsilon^1\cong(n+1)\gamma$ 이므로 Whitney 곱 공식이 다음을 준다.

$$
w(T\mathbb{RP}^n)=(1+a)^{n+1}
$$

계수는 이항계수를 $2$ 로 나눈 나머지다. $n=2^r$ 이면 $(1+a)^{n+1}=1+a+a^n$ 이다.

## Wu 공식

닫힌 $n$ 차원 [다양체](manifolds.md) $M$ 에서, 모든 $x$ 에 대해 $\langle v\cup x,\lbrack M\rbrack\rangle=\langle\mathrm{Sq}(x),\lbrack M\rbrack\rangle$ 를 만족하는 Wu 류 $v$ 가 유일하게 있고

$$
w(TM)=\mathrm{Sq}(v)
$$

가 성립한다. 우변이 코호몰로지 환과 Steenrod 연산으로만 적히므로, 닫힌 다양체의 Stiefel–Whitney 류는 접다발을 보지 않고 호모토피형에서 결정된다.

## 방향가능성과 스핀 구조

$M$ 이 방향가능한 것은 $w_1(TM)=0$ 과 동치다. 방향가능한 $M$ 에서 [스핀 구조](spin-structures.md)가 있는 것은 $w_2(TM)=0$ 과 동치다.

## 몰입의 차원 하한

$M^n$ 이 $\mathbb R^{n+k}$ 에 몰입하면 랭크 $k$ 인 법다발 $\nu$ 가 있고 $TM\oplus\nu$ 가 자명하므로 $w(\nu)=w(TM)^{-1}$ 이다. 랭크가 $k$ 이므로 $w(TM)^{-1}$ 의 차수 $i\gt k$ 성분은 모두 소멸해야 한다.

$n=2^r$ 인 $\mathbb{RP}^n$ 에서 이 역을 계산하면 $w(TM)^{-1}=1+a+\dots+a^{n-1}$ 이고 차수 $n-1$ 성분이 $0$ 이 아니다. 그러므로 $k\ge n-1$ 이고 $\mathbb{RP}^{2^r}$ 은 $\mathbb R^{2n-2}$ 에 몰입하지 않는다.

## Stiefel–Whitney 수

닫힌 $n$ 차원 다양체 $M$ 과 $i_1+\dots+i_k=n$ 인 단항식마다 $\langle w\_{i_1}(TM)\cdots w\_{i_k}(TM),\lbrack M\rbrack\rangle\in\mathbb Z/2$ 를 Stiefel–Whitney 수라 한다. Thom 의 정리는 두 닫힌 다양체가 비방향 코보디즘으로 같은 류에 드는 것이 모든 Stiefel–Whitney 수가 일치하는 것과 동치라고 말한다.

# 활용

- 방향가능성 판정. 다발의 전이함수를 직접 보지 않고 $H^1(M;\mathbb Z/2)$ 의 한 원소로 판정한다. $\mathbb{RP}^n$ 에서 $w_1(T\mathbb{RP}^n)=(n+1)a$ 이므로 $n$ 이 짝수일 때만 방향 지을 수 없다.
- [스핀 구조](spin-structures.md)의 존재 조건. 지표정리와 스피너 장을 쓰는 자리에서 $w_2$ 의 소멸이 전제가 된다.
- 몰입과 매장의 하한. 위 계산이 Whitney 매장정리의 차원 $2n$ 을 낮출 수 없는 다양체를 준다.
- 비방향 코보디즘 환의 계산. Stiefel–Whitney 수가 완전 불변량이므로 이 환을 다항식환으로 결정하는 Thom 의 계산에 쓰인다.
- 판정의 한계. $S^n$ 의 접다발은 모든 $w_i$ 가 소멸하지만 $n$ 이 $1, 3, 7$ 일 때만 자명하다. 평행가능성과 [나눗셈 대수](division-algebras.md)의 차원 제약은 이 류가 아니라 Steenrod 연산과 Hopf 불변량으로 판정한다.

# 연관 문서

## 선수지식

- [특성류](characteristic-classes.md)
- [Steenrod 연산](steenrod-operations.md)

## 더 알아보기

- [코보디즘](cobordism.md)

#algebraic_topology #topology #differential_geometry
