# Reidemeister 비틀림과 렌즈 공간

# 개요

[호몰로지](homology.md)는 강력하지만 많은 것을 버린다. 사슬복합체

$$
\cdots\to C_2\xrightarrow{\partial_2}C_1\xrightarrow{\partial_1}C_0
$$

에서 호몰로지는 $\ker\partial/\mathrm{im}\partial$ 만 본다. 복합체가 비순환이면 호몰로지가 전부 0 이지만 경계사상들이 맞물리는 방식은 남아 있다.

Reidemeister 비틀림[^1]은 그 정보를 [행렬식](determinants.md)으로 꺼낸다. 비순환 복합체를 조각으로 잘라 각 조각의 기저 변환 행렬의 행렬식을 교대로 곱하면 자른 방법에 의존하지 않는 수 하나가 나온다.

렌즈 공간이 대표적인 적용 대상이다. $L(7,1)$ 과 $L(7,2)$ 는

- 기본군이 둘 다 $\mathbb Z/7$ 이고,
- 모든 호몰로지군이 같고,
- 실제로 **호모토피 동치**이지만,
- 위상동형이 아니다.

호모토피 불변량으로는 이 둘을 구별할 수 없다. 비틀림은 호모토피 불변량이 아니라 **단순 호모토피 불변량**이므로 구별한다. 호모토피형보다 섬세한 불변량이 필요함을 보인 첫 사례다.

# 직관

## 기저 변환의 행렬식

유한차원 벡터공간의 짧은 완전열 $0\to A\to B\to C\to0$ 에서 차원은 $\dim B=\dim A+\dim C$ 로 결정된다. $A,B,C$ 에 기저가 주어져 있으면 정보가 더 있다. $A$ 의 기저와 $C$ 의 들림을 합쳐 만든 $B$ 의 기저가 원래 기저와 얼마나 다른지를 행렬식 하나가 잰다.

호몰로지가 차원 계산에 해당하고 비틀림이 이 행렬식에 해당한다.

비순환 복합체 $C_\ast$ 에서는 $\ker\partial_i=\mathrm{im}\partial_{i+1}$ 이므로 각 $C_i$ 가 두 조각으로 쪼개진다. 쪼갠 뒤 기저를 비교해 나온 행렬식들을 교대로 곱한 것이 비틀림이다.

$$
\tau(C_\ast)=\prod_i\big[\det(\cdots)\big]^{(-1)^i}
$$

교대곱인 것은 [Euler 지표](euler-characteristic.md)가 교대합인 것과 같은 이유다. 조각을 다르게 잘라도 이웃한 항에서 같은 인자가 한 번은 분자로 한 번은 분모로 들어와 상쇄된다.

## 비꼬인 계수

$M$ 이 닫힌 다양체이면 보통 계수의 사슬복합체는 비순환이 아니다. $H_0\ne0$ 이므로 비틀림이 정의되지 않는다.

**비꼬인 계수**가 이를 해결한다. 표현 $\rho:\pi_1(M)\to\mathrm{GL}\_n(\mathbb C)$ 를 골라 보편덮개의 사슬복합체에 $\rho$ 로 비꾼 계수를 준다. $\rho$ 가 적절하면 비꼬인 호몰로지가 전부 0 이 되어 비틀림이 정의된다.

비틀림은 [다양체](manifolds.md) 하나의 수가 아니라 다양체와 그 기본군 표현의 쌍에 붙는 수다. [Chern–Simons 이론](chern-simons.md)에서 평탄 접속이 $\pi_1$ 의 표현이므로 안장점 근사의 진폭에 비틀림이 나타난다.


## 애매성

비틀림은 사슬의 기저를 고르는 방법(세포의 순서, 방향, 각 세포에 붙일 덮개의 들림)에 따라 $\pm\rho(g)$ 꼴의 행렬식만큼 달라진다. 따라서 비틀림은

$$
\tau\in\mathbb C^\times/\lbrace\pm\det\rho(g):g\in\pi_1\rbrace
$$

의 원소다. $\rho$ 가 유니터리이면 $|\det\rho(g)|=1$ 이므로 절댓값 $|\tau|$ 가 잘 정의된다. 렌즈 공간의 비교도 이 절댓값으로 한다.

# 정의

## 비순환 복합체의 비틀림

$C_\ast$ 를 기저가 주어진 유한 복합체, $H_\ast(C)=0$ 이라 하자. 각 $i$ 에서 $B_i=\mathrm{im}\partial_{i+1}=\ker\partial_i$ 의 기저 $b_i$ 를 고른다. 비순환성에서 $b_i$ 를 $\partial$ 로 들어 올린 것과 $b_{i-1}$ 을 합치면 $C_i$ 의 기저가 되고, 그것을 주어진 기저 $c_i$ 와 비교한 변환행렬의 행렬식을 $[\thinspace\widetilde b_i b_{i-1}/c_i\thinspace]$ 라 쓴다.

> **정의.** $\tau(C_\ast)=\displaystyle\prod_i\big[\widetilde b_ib_{i-1}/c_i\big]^{(-1)^{i+1}}$

$b_i$ 의 선택에 의존하지 않는다는 것은 교대곱의 상쇄에서 나온다.

## 다양체의 비틀림

$M$ 을 유한 CW(closure-finite weak topology) 복합체, $\rho:\pi_1(M)\to\mathrm{GL}\_n(\mathbb C)$ 를 표현이라 하자. 보편덮개 $\widetilde M$ 의 세포 사슬복합체 $C_\ast(\widetilde M)$ 은 $\mathbb Z[\pi_1]$ 가군이고, 여기에 $\rho$ 를 먹여

$$
C_\ast^\rho(M)=\mathbb C^n\otimes_{\rho}C_\ast(\widetilde M)
$$

를 만든다. 이것이 비순환이면 $\rho$ 를 **비순환 표현**이라 하고, 그때 $\tau_\rho(M)$ 이 정의된다.

> **정리 (Reidemeister, Franz, de Rham).** $\tau_\rho(M)$ 은 $M$ 의 CW 구조에 의존하지 않고, 세포 분할의 세분에도 불변이다. 곧 $M$ 의 (그리고 $\rho$ 의) 불변량이다.

비틀림은 호모토피 동치에서 불변이 아니다. 불변인 것은 세포를 붙였다 떼는 기본 조작만으로 이어지는 **단순 호모토피 동치**다.

## 렌즈 공간

$L(p,q)$ 의 표준 CW 구조에서 계산이 끝까지 된다. $\pi_1=\mathbb Z/p$ 의 생성원을 $\zeta=e^{2\pi ij/p}$ 로 보내는 1 차원 표현 $\rho_j$ 를 쓰면, $qq^\ast\equiv1\pmod p$ 인 $q^\ast$ 에 대해

$$
\tau_{\rho_j}(L(p,q))=(\zeta^j-1)(\zeta^{jq^\ast}-1)
$$

이다. 단위원 곱만큼의 애매성이 남는다. $q$ 가 $q^{\ast}$ 를 통해 이 식에 들어오므로 답에 $p$ 와 $q$ 가 함께 남는다. 호몰로지는 $p$ 만 본다.

# 성질

## 렌즈 공간의 분류

호모토피 동치의 판정과 위상동형의 판정이 다르다.

> **정리.** $L(p,q)$ 와 $L(p,q')$ 는
> - **호모토피 동치**일 필요충분조건이 $qq'\equiv\pm n^2\pmod p$ 인 $n$ 이 존재하는 것,
> - **위상동형**일 필요충분조건이 $q'\equiv\pm q^{\pm1}\pmod p$ 인 것이다.

앞의 것은 호몰로지와 기본군으로 판정되고 뒤의 것은 비틀림이 판정한다. $p=7$ , $q=1$ , $q'=2$ 에서 $1\cdot2=2\equiv3^2\pmod7$ 이므로 호모토피 동치이고, $\pm1^{\pm1}=\lbrace 1,6\rbrace$ 에 $2$ 가 없으므로 위상동형이 아니다.

## 단순 호모토피와 Whitehead 비틀림

호모토피 동치 $f:X\to Y$ 마다 Whitehead 군 $\mathrm{Wh}(\pi_1)$ 의 원소 $\tau(f)$ 가 붙고, $\tau(f)=0$ 인 것이 단순 호모토피 동치다. Reidemeister 비틀림은 이 $\tau(f)$ 를 표현 $\rho$ 로 내린 것이다.

$\mathrm{Wh}(\mathbb Z/p)$ 가 자명하지 않으므로 렌즈 공간에서 두 개념이 갈린다. 자유군처럼 $\mathrm{Wh}$ 가 자명한 군에서는 두 개념이 일치하고 비틀림이 새 정보를 주지 않는다.

**s-코보디즘 정리**는 코보디즘이 곱과 동형일 조건으로 Whitehead 비틀림의 소멸을 요구하고, 차원 $\ge5$ 의 Poincaré 추측이 그 위에서 증명된다.

## 다른 정의와의 일치

- **Alexander 다항식.** 매듭 여집합의 비틀림이 Alexander 다항식이다(Milnor).
- **해석적 비틀림.**[^2] Ray–Singer 가 Laplace 작용소의 행렬식으로 같은 양을 정의했고, Cheeger 와 Müller 가 두 양의 일치를 증명했다.
- **점근의 진폭.** [Witten 점근 추측](witten-asymptotics.md)에서 각 평탄 접속의 기여 크기 $\sqrt{T_\alpha}$ 의 $T_\alpha$ 가 이 비틀림이다. 경로적분의 2 차 변분 행렬식을 정규화하면 비틀림이 된다.

# 활용

## 렌즈 공간의 구별

표현 $\rho_j$ 를 $j=1,\dots,p-1$ 로 돌려 얻은 $\vert\tau_{\rho_j}\vert$ 의 다중집합은 단위원 애매성을 지운 불변량이다. 작은 $p$ 에서 이 다중집합은 위상동형 판정과 일치하고 호모토피 동치 판정과는 갈린다.

| 쌍 | 호모토피 동치 | 위상동형 | 비틀림 일치 |
| --- | --- | --- | --- |
| $L(7,1)$ , $L(7,2)$ | 예 | 아니오 | 아니오 |
| $L(7,1)$ , $L(7,6)$ | 예 | 예 | 예 |
| $L(15,1)$ , $L(15,4)$ | 예 | 아니오 | 아니오 |
| $L(5,1)$ , $L(5,2)$ | 아니오 | 아니오 | 아니오 |
| $L(13,1)$ , $L(13,5)$ | 아니오 | 아니오 | 아니오 |

$L(7,1)$ 과 $L(7,2)$ 는 호모토피 동치이므로 호몰로지, 코호몰로지 환, 기본군, 고차 [호모토피군](homotopy-groups.md)이 전부 같다. 비틀림 값의 다중집합은 $\lbrace 0.75,2.45,3.80\rbrace$ 와 $\lbrace 1.36,1.69,3.05\rbrace$ 로 겹치는 값이 없으므로 기저 선택의 애매성으로 맞출 수 없다.

$L(7,6)$ 은 $q'=6\equiv-1$ 이라 $L(7,1)$ 과 방향만 다른 동형 공간이고 비틀림도 일치한다.

$L(7,1)$ 의 값 $0.7530,\thinspace 2.4450,\thinspace 3.8019$ 은 $4\sin^2(2\pi b/7)$ 을 $b=1,2,3$ 에서 계산한 값이다. 렌즈 공간의 RT(Reshetikhin–Turaev) 불변량을 [Gauss 합](gauss-sums.md) 상호법칙으로 분해했을 때 각 평탄 접속의 진폭으로 나오는 수와 같다.

## 다양체 분류, 매듭 이론, 양자 불변량

- **분류 문제.** 호모토피형이 같은 다양체를 구별한다. 렌즈 공간이 표준 예이고, 고차원에서는 s-코보디즘 정리를 통해 분류 이론에 들어간다.
- **매듭 이론.** Alexander 다항식이 비틀림이라는 사실이 그 다항식의 대칭성과 Seifert 행렬과의 관계를 설명한다.
- **양자 불변량.** 평탄 접속마다 붙는 비틀림이 양자 불변량 점근의 진폭으로 나타난다.

[^1]: 원전은 K. Reidemeister, *Homotopieringe und Linsenräume*, Abh. Math. Sem. Univ. Hamburg 11 (1935) 와 W. Franz, *Über die Torsion einer Überdeckung*, J. Reine Angew. Math. 173 (1935). 표준적인 현대적 서술은 J. Milnor, *Whitehead torsion*, Bull. AMS 72 (1966).
[^2]: 해석적 비틀림과의 일치는 J. Cheeger, Ann. of Math. 109 (1979) 와 W. Müller, Adv. Math. 28 (1978). 매듭 여집합의 비틀림이 Alexander 다항식이라는 것은 J. Milnor, *A duality theorem for Reidemeister torsion*, Ann. of Math. 76 (1962).

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)
- [행렬식](determinants.md)

## 더 알아보기

- [s-코보디즘 정리와 고차원 Poincaré 추측](s-cobordism.md)

#algebraic_topology #topology #linear_algebra
