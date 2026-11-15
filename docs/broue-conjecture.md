# Broué 추측

# 개요

**Broué 추측(Broué's conjecture)** 은 결손군이 가환인 유한군의 블록이 그 결손군의 정규화군 쪽 블록과 유도 범주로 동치라는 추측이다. 표수 $3$ 에서 대칭군 $S_4$ 의 표현과 그보다 작은 $S_3$ 의 표현을 비교하면, 한 블록 안의 기약 지표 수와 단순 가군 수가 셋과 둘로 같고 지표가 단순 가군으로 갈라지는 방식도 같다. Broué 추측은 이런 일치가 우연이 아니라 두 블록의 [유도 범주](derived-categories.md) 사이의 동치에서 나온다고 진술하고, 큰 군의 블록을 작은 군의 블록으로 계산하게 한다.

# 직관

표수 $3$ 에서 $S_4$ 의 기약 지표를 [p 핵](p-cores.md)으로 나눈다. $(4)$, $(2,2)$, $(1,1,1,1)$ 은 3 칸 띠를 하나 떼면 $(1)$ 이 남고, $(3,1)$ 과 $(2,1,1)$ 은 그 자체로 3 핵이다. 그래서 $(4)$, $(2,2)$, $(1,1,1,1)$ 이 무게 $1$ 인 블록 하나를 이룬다. 이 블록의 결손군은 3-순환 $(1\thinspace2\thinspace3)$ 이 생성하는 위수 $3$ 의 부분군 $D$ 다.

$D$ 를 정규화하는 $S_4$ 의 원소는 $\lbrace 1,2,3\rbrace$ 만 섞는 순열이고, 이들이 이루는 군은 $S_3$ 이다. $S_3$ 의 세 지표 $(3)$, $(1,1,1)$, $(2,1)$ 은 표수 $3$ 에서 블록 하나를 이룬다.

두 블록을 견준다. 표수 $3$ 의 단순 가군은 양쪽 다 자명 가군과 부호 가군 둘이다. 차원이 $2$ 인 지표 $(2,2)$ 와 $(2,1)$ 은 표수 $3$ 에서 둘 다 자명과 부호로 갈라지고, 나머지 두 지표는 각각 자명과 부호로 남는다.

지표 수, 단순 가군 수, 갈라지는 방식이 모두 같다. Broué 추측은 이 일치를 두 블록의 가군 범주 사이의 관계로 설명한다.

# 정의

## 블록과 결손군

$k$ 를 표수 $p$ 의 대수적으로 닫힌 체라 하자. 군대수 $kG$ 를 더 쪼개지지 않는 양쪽 아이디얼의 직곱 $kG=B_1\times\cdots\times B_r$ 로 나눌 때 각 $B_i$ 를 $kG$ 의 **블록(block)** 이라 한다. 기약 지표는 어느 한 블록에 속하고, 이 분류는 중심 지표로 정의한 $p$ 블록과 같다.

블록 $B$ 의 **결손군(defect group)** 은 $B$ 를 $k\lbrack G\times G\rbrack$ 가군으로 볼 때 그 가군이 대각 부분군 $\Delta D=\lbrace(d,d)\rbrace$ 에서 유도된 가군의 직합 성분이 되는 가장 작은 $p$ 부분군 $D$ 다. 켤레를 무시하면 하나로 정해진다. 직관 절의 블록은 $D=\langle(1\thinspace2\thinspace3)\rangle$ 이다.

## Brauer 대응

Brauer 제1 주정리(Brauer's first main theorem)에 따르면, 결손군이 $D$ 인 $kG$ 의 블록과 결손군이 $D$ 인 $kN_G(D)$ 의 블록 사이에 일대일 대응이 있다. 대응하는 블록을 **Brauer 대응 블록(Brauer correspondent)** 이라 한다. 직관 절에서 $N_{S_4}(D)=S_3$ 이고, $S_4$ 의 무게 $1$ 블록에 대응하는 것은 $kS_3$ 전체다.

## 추측

$B$ 가 $kG$ 의 블록이고 결손군 $D$ 가 가환이며 $b$ 가 $kN_G(D)$ 의 Brauer 대응 블록이면, 유한 생성 가군의 유계 유도 범주 사이에 삼각 범주의 동치가 있다.[^1]

$$
D^b(B\text{-}\mathrm{mod})\simeq D^b(b\text{-}\mathrm{mod})
$$

이런 동치를 **유도 동치(derived equivalence)** 라 한다. Rickard 의 정리에 따르면 유도 동치는 $B\otimes b^{\mathrm{op}}$ 가군의 복합체 하나, 곧 경사 복합체(tilting complex)로 주어진다.

# 성질

## 유도 동치가 보존하는 것

유도 동치인 두 블록은 중심이 동형이고, 단순 가군이 생성하는 [Grothendieck 군](grothendieck-group.md)의 계수가 같다. 그래서 기약 지표의 수 $k(B)=\dim Z(B)$ 와 단순 가군의 수 $l(B)$ 가 같다. 직관 절의 $k=3$, $l=2$ 가 이것이다. 지표 수준에서는 두 블록의 지표군 사이에 부호를 붙인 일대일 대응인 완전 등거리(perfect isometry)가 생긴다.

## 가환이라는 가정

결손군이 가환이 아니면 결론이 성립하지 않는 예가 있다. 표수 $2$ 에서 $kS_4$ 는 블록 하나이고 결손군은 위수 $8$ 의 이면체군 $D_8$ 이며, $N_{S_4}(D_8)=D_8$ 이다. $kD_8$ 의 단순 가군은 자명 가군 하나뿐이고 $kS_4$ 의 단순 가군은 자명 가군과 2 차원 가군 둘이다. 유도 동치는 $l$ 을 보존하므로 두 블록은 유도 동치가 아니다.

## 증명된 경우

- 결손군이 순환군인 블록. Rickard 가 Brauer 나무를 써서 경사 복합체를 만들었다.
- 대칭군의 블록. 결손군이 가환인 것은 무게 $w$ 가 $p$ 보다 작은 것과 동치다. Chuang–Kessar 는 무게가 $w\lt p$ 인 블록 가운데 Rouquier 블록(Rouquier block)이라 부르는 하나에서 추측이 성립함을 보였고, Chuang–Rouquier 는 무게가 같은 대칭군 블록끼리 모두 유도 동치임을 보였다. 둘을 합치면 대칭군에서 추측이 성립한다.[^2]

## sl₂ 범주화

Chuang–Rouquier 의 증명은 대칭군의 가군 범주들에 $\mathfrak{sl}\_2$ 범주화(sl₂-categorification)를 세운다. 대칭군의 블록들은 [아핀 Lie 대수](affine-lie-algebras.md)의 한 표현의 무게 공간에 대응하고, 무게가 같은 블록은 아핀 Weyl 군의 단순 반사를 거듭해 서로 옮겨진다. 단순 반사 하나마다 $\mathfrak{sl}\_2$ 작용이 있고, 그 반사를 범주 수준에서 실현한 복합체가 이웃한 두 블록의 유도 동치를 준다. 이 복합체를 Rickard 복합체(Rickard complex)라 한다.

# 활용

- 블록의 불변량 계산. 큰 군의 블록에서 단순 가군의 수, 분해 행렬, Cartan 행렬을 정규화군 쪽에서 계산한다. 정규화군의 블록은 결손군과 그 위에 작용하는 작은 군의 반직접곱으로 적히는 경우가 많다.
- 유한 Lie 형 군. 정의 표수가 아닌 표수에서 결손군이 가환인 블록에 대해, Broué 는 Deligne–Lusztig 다양체의 코호몰로지 복합체가 유도 동치를 준다는 기하적 판본을 제안했다.
- [p 핵](p-cores.md). 대칭군에서 블록은 p 핵으로, 유도 동치류는 무게로 분류된다.

[^1]: M. Broué, Isométries parfaites, types de blocs, catégories dérivées, *Astérisque* **181–182** (1990), 61–92.
[^2]: J. Chuang, R. Kessar, Symmetric groups, wreath products, Morita equivalences, and Broué's abelian defect group conjecture, *Bull. London Math. Soc.* **34** (2002), 174–184. J. Chuang, R. Rouquier, Derived equivalences for symmetric groups and sl₂-categorification, *Ann. of Math.* **167** (2008), 245–298.

# 연관 문서

## 선수지식

- [p 핵](p-cores.md)
- [유도 범주](derived-categories.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #algebra #category_theory
