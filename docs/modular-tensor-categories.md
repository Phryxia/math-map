# 모듈러 텐서범주

# 개요

[Zhu 대수](zhu-algebra.md)에서 강유리 [정점작용소대수](vertex-operator-algebras.md)의 기약가군들은 서로 곱해지는 **융합 구조**와 지표의 모듈러 변환에서 나오는 $S$ 행렬을 동시에 갖고, Verlinde 공식이 둘을 묶는다.

이 자료를 정점작용소대수에서 떼어내 공리로 세운 것이 **모듈러 텐서범주**(modular tensor category, MTC)다. [범주](category.md) 하나에 다음이 얹힌다.

- 대상의 [텐서곱](tensor-products.md)과 유한개의 단순대상. 곱이 단순대상의 직합으로 분해된다.
- **꼬임**(braiding) $c_{X,Y}:X\otimes Y\to Y\otimes X$ . 대칭이 아니어도 되고 두 번 꼬아 제자리로 돌아오지 않아도 된다.
- 그 꼬임의 비퇴화성. 동치로 $S$ 행렬이 가역이다.

마지막 조건에서 $S$ 와 $T$ 가 $\mathrm{SL}\_2(\mathbb Z)$ 의 표현을 이루고, 이름의 "모듈러" 가 거기서 온다.

$$
S=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix},\qquad T=\begin{pmatrix}1&1\cr 0&1\end{pmatrix}
$$

이 공리계에서 MTC 하나가 3 차원 위상적 장론(topological quantum field theory, TQFT) 하나와 대응한다. Reshetikhin–Turaev 구성이 MTC 에서 3 차원 다양체와 그 안의 매듭에 대한 불변량을 만들고, 역으로 3 차원 TQFT 에서 원환면에 붙는 벡터공간과 그 위의 $\mathrm{SL}\_2(\mathbb Z)$ 작용이 MTC 를 복원한다.

$$
\lbrace\text{MTC}\rbrace\ \longleftrightarrow\ \lbrace\text{3 차원 TQFT}\rbrace
$$

Jones 다항식이 이 구성의 가장 작은 예이고 위상적 양자계산이 그 응용이다.

# 직관

벡터공간의 텐서곱에서 $V\otimes W\cong W\otimes V$ 를 주는 교환은 두 번 하면 항등이다. 평면 위의 두 점을 맞바꾸는 과정을 시간 방향을 세워 3 차원 그림으로 그리면 두 가닥이 꼬인다. 시계방향으로 돌린 교환과 반시계방향으로 돌린 교환은 가닥이 감긴 방향이 반대다. 두 그림을 이어 붙여도 가닥은 풀리지 않는다.

$$
c_{Y,X}\circ c_{X,Y}\neq\mathrm{id}\_{X\otimes Y}
$$

공간이 3 차원이면 한 가닥을 다른 가닥 바깥으로 들어 올려 풀 수 있고, 2 차원에는 들어 올릴 방향이 없다. 그래서 교환 $c_{X,Y}:X\otimes Y\to Y\otimes X$ 를 동형으로만 두고 두 번 합성한 것이 항등이라는 조건을 뺀다. 그 합성이 $\pm1$ 대신 임의의 위상인자나 행렬을 주는 평면 위의 준입자가 **애니온**이다. 꼬임을 그리는 데 쓴 세로 방향까지 세면 그림은 3 차원 [다양체](manifolds.md) 안의 얽힌 고리다.

# 정의

## 융합범주와 모듈러 조건

$\mathbb C$ 위의 범주 $\mathcal C$ 가 다음을 만족하면 **융합범주**다.

- $\mathbb C$ 선형이고 반단순이며 유한개의 단순대상 $X_0=\mathbf1,X_1,\dots,X_{n-1}$ 을 갖는다.
- 결합적 텐서곱과 단위대상이 있고 각 대상의 쌍대 $X^\ast$ 가 있다.

단순대상의 곱을 분해한 계수가 **융합 규칙**이다.

$$
X_i\otimes X_j\cong\bigoplus_kN_{ij}^kX_k,\qquad N_{ij}^k\in\mathbb Z_{\ge0}
$$

꼬임 $c_{X,Y}$ 와 정합적인 비틀림 $\theta_X$ 를 얹으면 **리본범주**가 되고 각 단순대상에 양자 차원 $d_i$ 와 비틀림 고윳값 $\theta_i$ 가 붙는다. $S$ 행렬과 $T$ 행렬을 다음으로 정의한다.

$$
S_{ij}=\frac1{\mathcal D}\sum_kN_{i^\ast j}^k\frac{\theta_k}{\theta_i\theta_j}d_k,\qquad T_{ij}=\delta_{ij}\theta_i,\qquad \mathcal D=\sqrt{\sum_id_i^2}
$$

$S_{ij}$ 는 도형으로 라벨 $i,j$ 를 단 두 고리를 한 번 걸어 놓은 그림의 값이다.

> **정의.** 리본 융합범주가 **모듈러**라는 것은 $S$ 가 가역이라는 뜻이다. 이때 $S,T$ 가 $\mathrm{SL}\_2(\mathbb Z)$ 의 사영표현을 준다.

$S$ 의 가역성은 투명 대상이 없다는 조건과 같다. 단순대상 $X$ 가 **투명하다**는 것은 모든 $Y$ 에 대해 $c_{Y,X}\circ c_{X,Y}=\mathrm{id}$ 라는 뜻이고, 단위대상 $\mathbf1$ 은 언제나 투명하다. $X_i$ 가 투명하면 $S_{ij}$ 를 주는 두 고리 그림이 풀려 $S_{ij}=d_id_j/\mathcal D$ 가 된다. 이 행이 $\mathbf1$ 의 행의 $d_i$ 배라 $S$ 가 퇴화하므로, 모듈러 조건은 투명한 단순대상이 $\mathbf1$ 뿐이라는 조건이다.

## Verlinde 공식

모듈러 조건 아래에서 융합 규칙이 $S$ 로 결정된다.

$$
N_{ij}^k=\sum_m\frac{S_{im}S_{jm}\overline{S_{km}}}{S_{0m}}
$$

동치인 형태로, 융합 행렬 $(N_i)\_{jk}=N_{ij}^k$ 들이 서로 가환이고 $S$ 가 그것들을 동시에 대각화한다. 융합 규칙이라는 정수 자료가 한 행렬의 고유벡터 자료가 된다.

# 성질

## 예와 분류

| MTC | 단순대상 수 | 비고 |
|---|---|---|
| $\mathrm{Vec}$ | 1 | 자명 |
| 준-Ising 곧 $\mathrm{SU}(2)\_2$ | 3 | $\mathbf1,\sigma,\psi$ 이고 $\sigma^2=\mathbf1\oplus\psi$ |
| Fibonacci ($\mathrm{SU}(2)\_3$ 의 부분) | 2 | $\tau^2=\mathbf1\oplus\tau$ 이고 $d_\tau=\varphi$ 는 황금비 |
| $\mathrm{SU}(2)\_k$ | $k+1$ | 위의 예 |
| $\mathcal Z(\mathrm{Vec}\_G)$ | $G$ 의 켤레류 자료 | 유한군 $G$ 의 Drinfeld 중심 |

Fibonacci 범주에서 $d_\tau$ 가 황금비인 것은 $d_\tau^2=1+d_\tau$ 에서 나온다. 양자 차원이 정수가 아니어도 되고, 애니온 하나가 차원 $\varphi$ 를 갖는다는 물리적 진술이 된다.

> **랭크 유한성 정리 (Bruillard–Ng–Rowell–Wang, 2016).** 단순대상 개수를 고정하면 MTC 는 동치를 빼고 유한개다.

증명은 $S,T$ 가 $\mathrm{SL}\_2(\mathbb Z)$ 의 표현을 이루며 그 핵이 유한 지표라는 Ng–Schauenburg 의 Galois 대칭에서 나온다. 랭크 5 까지 완전한 목록이 알려져 있다.[^1]

## 3 차원 TQFT 번역

Reshetikhin–Turaev 구성은 MTC 에서 다음을 만든다.

- 닫힌 곡면 $\Sigma$ 에 벡터공간 $Z(\Sigma)$ . 원환면이면 차원이 단순대상 개수다.
- 3 차원 다양체 $M$ 에 수 $Z(M)\in\mathbb C$ . 경계가 있으면 $Z(\partial M)$ 의 벡터가 된다.
- $M$ 안의 라벨 붙은 매듭에 수.

3 차원 다양체가 매듭을 따라 수술해 얻어진다는 Lickorish–Wallace 정리와 수술 표현이 Kirby 이동으로 연결된다는 사실을 쓴다. 매듭 불변량을 정의한 뒤 Kirby 이동에 불변임을 확인하면 다양체 불변량이 되고, 그 확인에 $S$ 의 가역성이 쓰인다. 모듈러 조건이 없으면 매듭 불변량이 3 차원 다양체 불변량으로 올라가지 못한다.

## 원환면 위의 $\mathrm{SL}\_2(\mathbb Z)$ 작용

원환면 $T^2$ 에 붙는 벡터공간의 기저는 원환면의 속을 채우는 고체원환의 심에 라벨 $i$ 를 넣은 상태이고, 차원은 단순대상의 개수다. 원환면의 자기동상사상군이 $\mathrm{SL}\_2(\mathbb Z)$ 이므로 그 군이 이 공간에 작용한다. 두 주기를 맞바꾸는 사상이 $S$ 를, 한 쪽을 비트는 사상이 $T$ 를 준다. Zhu 정리에서 정점작용소대수의 지표가 이루던 $\mathrm{SL}\_2(\mathbb Z)$ 표현과 같은 행렬이다.

# 활용

## 매듭 불변량

$\mathrm{SU}(2)\_k$ 에서 라벨 1, 곧 스핀 $1/2$ 를 단 매듭의 불변량이 Jones 다항식을 $q=e^{2\pi i/(k+2)}$ 에서 평가한 값이다. Witten 이 Jones 다항식을 3 차원 [Chern–Simons 이론](chern-simons.md)의 Wilson 고리 기댓값으로 설명했고 Reshetikhin–Turaev 가 그것을 수학적으로 구성했으며, MTC 가 그 구성의 대수적 입력이다.

라벨을 바꾸면 색 Jones 다항식이, 다른 [Lie 군](lie-groups.md)을 쓰면 HOMFLY(Hoste–Ocneanu–Millett–Freyd–Lickorish–Yetter) 나 Kauffman 다항식이 나온다.

## 위상적 양자계산

애니온 여러 개를 평면에 놓으면 그 상태공간이 $Z$ 로 주어지고, 애니온의 위치를 서로 돌려 바꾸는 것이 그 공간 위의 유니터리 연산이 된다. 연산이 경로의 위상만으로 정해지므로 국소적 잡음에 강하다.

Fibonacci 애니온의 꼬임 연산은 유니터리 군에서 조밀한 부분군을 생성하므로 보편 양자계산이 가능하다. $\mathrm{SU}(2)\_2$ 의 Ising 애니온은 Clifford 군만 주어 보편적이지 않고 추가 연산이 필요하다. 범주의 대수적 성질이 계산 능력을 정한다.

## 정점작용소대수와의 왕복

강유리 VOA(vertex operator algebra) 의 [가군](modules.md) 범주가 MTC 라는 Huang 의 정리가 두 이론을 잇는다. Zhu 정리가 준 $S$ 행렬이 범주 쪽 $S$ 행렬과 같고, 거꾸로 MTC 의 분류 결과가 어떤 VOA 가 존재할 수 있는지를 제한한다. 주어진 MTC 를 실현하는 VOA 가 항상 있는지는 열린 문제다.[^2]

[^1]: 기초 구성은 N. Reshetikhin–V. Turaev, *Invariants of 3-manifolds via link polynomials and quantum groups*, Invent. Math. 103 (1991) 와 V. Turaev, *Quantum Invariants of Knots and 3-Manifolds* (1994). 물리적 기원은 E. Witten, *Quantum field theory and the Jones polynomial*, Commun. Math. Phys. 121 (1989). 랭크 유한성은 P. Bruillard, S.-H. Ng, E. Rowell, Z. Wang, *Rank-finiteness for modular categories*, J. Amer. Math. Soc. 29 (2016). 위상적 양자계산은 Z. Wang, *Topological Quantum Computation* (2010).

[^2]: 모든 모듈러 텐서범주가 정점작용소대수로 실현되는지가 열려 있다는 진술은 E. Rowell, Z. Wang, *Mathematics of topological quantum computing*, Bull. Amer. Math. Soc. 55 (2018), 5.3 절.

# 연관 문서

## 선수지식

- [Zhu 대수](zhu-algebra.md)
- [텐서곱](tensor-products.md)
- [모노이드 범주](monoidal-categories.md)

## 더 알아보기

- [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)
- [애니온](anyons.md)

#category_theory #algebra #topology
