# Baum–Connes 추측

# 개요

**Baum–Connes 추측(Baum–Connes conjecture)** 은 군으로 만든 작용소 대수의 불변량을, 그 군이 평행이동으로 작용하는 공간의 모양으로 계산할 수 있다는 추측이다. 정수군 $\mathbb Z$ 에서는 정수 칸 위의 수열을 한 칸씩 미는 작용소가 만드는 대수가 원 위의 연속함수 대수와 같고, 실직선을 정수만큼의 평행이동으로 접어도 같은 원이 나와 두 쪽에서 계산한 불변량이 같다. Baum–Connes 추측은 모든 이산군에서 공간 쪽 불변량을 대수 쪽 불변량으로 보내는 사상이 동형사상이라고 진술하고, 이것이 성립하는 군에서는 대수 쪽 불변량을 공간의 위상으로 계산한다.

# 직관

Baum–Connes 추측은 이산군 $G$ 의 축소 군 [C 스타 대수](c-star-algebras.md) $C^\ast_r(G)$ 의 K 군이 $G$ 가 작용하는 공간의 위상으로 계산된다는 추측이다. 조립 사상(assembly map)이라 부르는 군 준동형

$$
\mu\colon K^G_\ast(\underline EG)\longrightarrow K_\ast(C^\ast_r(G))
$$

이 동형사상이라고 진술한다. 좌변은 고유 작용의 보편 공간 $\underline EG$ 의 동변 K 호몰로지이고 우변은 [작용소 K 이론](operator-k-theory.md)의 K 군이다[^1].

[교차곱](crossed-products.md) 문서의 축소 군 C 스타 대수 $C^\ast_r(G)$ 는 $\ell^2(G)$ 위에서 군 원소의 평행이동 작용소들이 생성하는 대수다. $G=\mathbb Z$ 이면 평행이동 하나 $U$ 가 생성하고, [Fourier 급수](fourier-series.md)로 $\ell^2(\mathbb Z)$ 를 $L^2(S^1)$ 로 옮기면 $U$ 가 함수 $z$ 의 곱셈작용소가 되어 $C^\ast_r(\mathbb Z)\cong C(S^1)$ 이다. 작용소 K 이론의 표에서 $K_0(C(S^1))=\mathbb Z$, $K_1(C(S^1))=\mathbb Z$ 다.

같은 원은 다른 길로도 나온다. 정수군은 실직선 $\mathbb R$ 에 평행이동으로 자유롭게 작용하고 $\mathbb R$ 은 한 점으로 수축된다. 몫 $\mathbb R/\mathbb Z$ 가 원이고, 이 원이 $\mathbb Z$ 의 [분류공간](classifying-spaces.md) $B\mathbb Z$ 다. 원의 K 호몰로지는 $K_0(S^1)=\mathbb Z$, $K_1(S^1)=\mathbb Z$ 로, 대수 쪽의 답과 같다.

$G=\mathbb Z^2$ 에서도 두 쪽이 모두 $2$ 차원 원환면 $T^2$ 이 되어 같은 계산이 반복된다. 일반적인 군에서는 $C^\ast_r(G)$ 가 함수 대수가 아니어서 K 군을 직접 계산하기 어렵다. 위상 쪽은 공간의 호몰로지 계산이므로 다루기 쉽다. Baum–Connes 추측은 두 쪽을 잇는 사상이 늘 동형이라고 진술한다.

# 정의

## 고유 작용의 보편 공간

$G$ 가 공간 $X$ 에 작용하고 모든 점의 근방 $U$ 에 대해 $gU\cap U\ne\varnothing$ 인 $g$ 가 유한 개이면 작용이 **고유(proper)** 하다고 한다. 고유 $G$ 공간 $\underline EG$ 가 모든 유한 부분군 $H$ 에 대해 고정점 집합 $(\underline EG)^H$ 가 수축가능하고 무한 부분군에 대해 비어 있으면 $\underline EG$ 를 **고유 작용의 보편 공간(universal space for proper actions)** 이라 한다. $G$ 에 꼬임원(torsion)이 없으면 $\underline EG=EG$ 다.

## 동변 K 호몰로지

**K 호몰로지(K-homology)** 는 위상 K 이론과 쌍대인 호몰로지 이론이다. Kasparov 의 정의에서 그 원소는 공간 위의 함수가 작용하는 [Hilbert 공간](hilbert-spaces.md)과 그 함수들과 콤팩트 작용소를 빼고 교환하는 [Fredholm 작용소](fredholm-operators.md)의 쌍으로 표현된다. $G$ 작용과 교환하는 쌍으로 같은 구성을 하고 $G$ 콤팩트 부분공간에 대한 극한을 잡은 것이 **동변 K 호몰로지(equivariant K-homology)** $K^G_\ast(\underline EG)$ 다. $G$ 에 꼬임원이 없으면 $K^G_\ast(\underline EG)\cong K_\ast(BG)$ 다.

## 조립 사상

$\underline EG$ 위의 동변 K 호몰로지 원소, 예를 들어 고유 $G$ 다양체 위의 $G$ 불변 타원 작용소에 그 작용소의 고차 지표(higher index)를 대응시키는 사상이 조립 사상 $\mu$ 다. 고차 지표는 정수가 아니라 $K_\ast(C^\ast_r(G))$ 의 원소다. $G$ 가 자명군이면 $\mu$ 는 콤팩트 다양체 위 타원 작용소의 Fredholm 지표다.

## 추측의 진술

**Baum–Connes 추측** 은 모든 이산군 $G$ 에 대해 $\mu$ 가 동형사상이라는 추측이다. C 스타 대수 $A$ 에 작용하는 $G$ 에 대해 $K_\ast(A\rtimes_r G)$ 를 우변으로 하는 판을 **계수가 있는 Baum–Connes 추측(Baum–Connes conjecture with coefficients)** 이라 한다.

# 성질

## 유한군

$G$ 가 유한이면 $\underline EG$ 는 한 점이고 $K^G_0(\mathrm{pt})$ 는 $G$ 의 표현환 $R(G)$, 곧 유한차원 표현의 동형류로 만든 Grothendieck 군이다. 한편 $C^\ast_r(G)$ 는 기약 표현마다 [행렬](matrices.md) 대수 하나를 둔 직합 $\bigoplus_\pi M_{\dim\pi}(\mathbb C)$ 이므로 $K_0$ 이 기약 표현의 개수만큼의 $\mathbb Z$ 이고 $R(G)$ 와 같다. $\mu$ 가 동형이다. $BG$ 의 K 호몰로지는 이 값과 다르므로, 꼬임원이 있는 군에서는 $EG$ 대신 $\underline EG$ 를 써야 한다.

## 증명된 경우

- [Haagerup 성질](haagerup-property.md)을 갖는 군에서 계수가 있는 판이 성립한다(Higson–Kasparov)[^2]. [순종군](amenable-groups.md)은 모두 이 성질을 갖는다.
- [쌍곡군](hyperbolic-groups.md)에서 성립한다(Lafforgue, Mineyev–Yu)[^3].

Higson–Kasparov 의 증명은 Kasparov 의 Dirac–쌍대 Dirac 방법(Dirac–dual-Dirac method)을 쓴다. $KK$ 이론의 원소 $\gamma$ 를 만들고 $\gamma=1$ 을 보이면 $\mu$ 가 동형이 된다. Kazhdan 성질 (T)(Kazhdan's property (T)) 를 갖는 무한군에서는 $\gamma\ne 1$ 이어서 이 방법이 그대로 통하지 않고, Lafforgue 는 Banach 대수 위의 $KK$ 이론으로 이 제약을 피했다[^1].

## 계수가 있는 판의 반례

Gromov 의 무작위 군에서 계수가 있는 Baum–Connes 추측은 성립하지 않는다(Higson–Lafforgue–Skandalis)[^4]. 이 군은 [Expander 그래프](expander-graphs.md)의 열을 Cayley 그래프 안에 담고, 반례의 계수 대수는 그 그래프 열에서 만든다.

## 알려진 열린 문제

계수 없는 Baum–Connes 추측은 반례가 알려져 있지 않고, 모든 이산군에 대한 증명도 없다[^1].

# 활용

- Kadison–Kaplansky 추측(Kadison–Kaplansky conjecture). 꼬임원이 없는 $G$ 에서 $\mu$ 가 전사이면 $C^\ast_r(G)$ 에 $0$ 과 $1$ 밖의 사영이 없다. 사영 $p$ 의 류가 조립 사상의 상에 있으면 Atiyah 의 $L^2$ [지표 정리](index-theorem.md)($L^2$ index theorem)로 표준 대각합 $\tau(p)$ 가 정수다. $0\le\tau(p)\le 1$ 이고 $\tau$ 가 충실하므로 $p$ 는 $0$ 이나 $1$ 이다.
- [Novikov 추측](novikov-conjecture.md). $\mu$ 가 유리수 계수에서 단사이면 $\pi_1(M)=G$ 인 닫힌 다양체 $M$ 의 고차 부호수가 호모토피 불변이다.
- 교차곱의 K 군 계산. 계수가 있는 판이 성립하는 군에서는 교차곱 $A\rtimes_r G$ 의 K 군을 동변 K 호몰로지로 계산한다. $G=\mathbb Z$ 일 때 이 계산이 Pimsner–Voiculescu 완전열과 같다.

[^1]: A. Valette, *Introduction to the Baum–Connes Conjecture*, Lectures in Mathematics ETH Zürich, Birkhäuser (2002). 추측의 원래 진술은 P. Baum, A. Connes, N. Higson, Classifying space for proper actions and K-theory of group C\*-algebras, *Contemp. Math.* 167 (1994), 241–291.
[^2]: N. Higson, G. Kasparov, E-theory and KK-theory for groups which act properly and isometrically on Hilbert space, *Invent. Math.* 144 (2001), 23–74.
[^3]: V. Lafforgue, K-théorie bivariante pour les algèbres de Banach et conjecture de Baum–Connes, *Invent. Math.* 149 (2002), 1–95. I. Mineyev, G. Yu, The Baum–Connes conjecture for hyperbolic groups, *Invent. Math.* 149 (2002), 97–122.
[^4]: N. Higson, V. Lafforgue, G. Skandalis, Counterexamples to the Baum–Connes conjecture, *Geom. Funct. Anal.* 12 (2002), 330–354.

# 연관 문서

## 선수지식

- [교차곱](crossed-products.md)
- [작용소 K 이론](operator-k-theory.md)

## 더 알아보기

- [Novikov 추측](novikov-conjecture.md)

#functional_analysis #group_theory #topology
