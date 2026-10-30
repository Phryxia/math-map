# 대수적 K 이론

# 개요

**대수적 K 이론(algebraic K-theory)** 은 환 위의 가군과 가역행렬에서 아벨군을 뽑아 그 환의 불변량으로 삼는 이론이다. 정수 성분의 가역행렬을 행 연산으로 단순하게 만들면, 다른 것은 모두 지워지고 행렬식의 부호 $\pm1$ 만 끝까지 남는다. 대수적 K 이론은 이렇게 남는 것을 군 $K_1$ 로 모으고, 같은 방식으로 만든 군 $K_0,K_2,K_3,\dots$ 를 계산해 환의 산술 정보를 얻는다.

# 직관

$K_0$ 은 사영 [가군](modules.md)이 직합에서 만드는 관계를 담고, $K_1$ 은 가군의 자기동형을 담는다. $K_2$ 는 한 단계 더 올라가, 자기동형을 기본행렬의 곱으로 적는 방식들 사이의 관계를 Steinberg 군의 핵으로 담는다. 같은 식으로 관계의 관계를 생성원과 관계로 적어 $K_3$ 을 만들려 하면 목록이 길어져 적을 수 없다.

관계를 손으로 적는 대신 관계를 담는 공간을 만든다. 이산군 $\mathrm{GL}(R)$ 의 분류공간 $BGL(R)$ 은 [기본군](fundamental-group.md)이 $\mathrm{GL}(R)$ 이고 2 차 이상의 호모토피군은 전부 $0$ 이다. 여기에 세포를 붙여 기본군만 아벨화하고 호몰로지는 그대로 두면 기본군이 $\mathrm{GL}(R)^{\mathrm{ab}}=K_1(R)$ 로 줄고, 보존된 [호몰로지](homology.md)가 2 차 이상의 호모토피군으로 나타난다. 이 조작이 가능한 것은 $\mathrm{GL}(R)$ 의 교환자 부분군 $E(R)$ 이 완전군이기 때문이고, 나오는 호모토피군이 $K_n(R)$ 이다.

# 정의

## 낮은 차수

- $K_0(R)$ 은 유한생성 사영 $R$ 가군의 동형류가 직합에 대해 만드는 **Grothendieck 군(Grothendieck group)** 이다. 곧 동형류 $\lbrack P\rbrack$ 의 형식적 차 $\lbrack P\rbrack-\lbrack Q\rbrack$ 들의 군이고 $\lbrack P\oplus Q\rbrack=\lbrack P\rbrack+\lbrack Q\rbrack$ 이다.
- $K_1(R)=\mathrm{GL}(R)/E(R)$ 이다. $\mathrm{GL}(R)$ 은 $\mathrm{GL}\_n(R)$ 들의 합집합이고 $E(R)$ 은 기본행렬이 생성하는 부분군이다.
- $K_2(R)$ 은 Steinberg 군(Steinberg group) $St(R)\to E(R)$ 의 핵이다. $St(R)$ 은 기본행렬이 만족하는 관계만을 관계로 두고 기본행렬의 기호로 생성한 군이다.

체 $k$ 위의 유한생성 사영가군은 유한차원 벡터공간이고 차원으로 분류된다. 그래서 $\lbrack V\rbrack\mapsto\dim V$ 가 $K_0(k)\cong\mathbb Z$ 를 준다. $R=\mathbb Z$ 이면 $E(\mathbb Z)=\mathrm{SL}(\mathbb Z)$ 이므로 $K_1(\mathbb Z)$ 의 원소는 행렬식의 부호로 정해지고, 개요의 $\pm1$ 이 $K_1(\mathbb Z)=\mathbb Z/2$ 다.

## Quillen 의 정의

$BGL(R)^{+}$ 는 분류공간 $BGL(R)$ 에 세포를 붙여 기본군을 $K_1(R)$ 로 줄이고 호몰로지는 그대로 둔 공간이다. 이 조작을 **플러스 구성(plus construction)** 이라 한다. $n\ge1$ 에 대해

$$
K_n(R)=\pi_n\big(BGL(R)^{+}\big)
$$

로 두고 $K_0$ 은 따로 붙인다. $n=1$ 이면 $\pi_1(BGL(R)^{+})=\mathrm{GL}(R)^{\mathrm{ab}}=K_1(R)$ 이므로 낮은 차수의 정의와 같다.

# 성질

## 낮은 차수의 계산

- $R$ 이 [Dedekind 정역](dedekind-domains.md)이면 $K_0(R)\cong\mathbb Z\oplus\mathrm{Cl}(R)$ 이다.
- $R$ 이 가환환이면 $\det$ 이 $K_1(R)\to R^{\times}$ 의 분해를 주고, 수체의 정수환 $\mathcal O_F$ 에서는 $K_1(\mathcal O_F)=\mathcal O_F^{\times}$ 다.
- 체 $F$ 에서 $K_2(F)$ 는 Matsumoto 정리(Matsumoto's theorem)로 기호 $\lbrace a,b\rbrace$ 와 관계 $\lbrace a,1-a\rbrace=1$ 만으로 제시된다.
- [유한체](finite-fields.md)에서는 $K_{2i-1}(\mathbb F_q)=\mathbb Z/(q^{i}-1)$ 이고 $i\ge1$ 인 짝수 차수 $K_{2i}(\mathbb F_q)$ 는 $0$ 이다.

## 국소화 완전열

Dedekind 정역 $\mathcal O_F$ 와 그 분수체 $F$ 사이에 다음 완전열이 존재한다.

$$
\cdots\to\bigoplus_{\mathfrak p}K_n(\mathcal O/\mathfrak p)\to K_n(\mathcal O_F)\to K_n(F)\to\bigoplus_{\mathfrak p}K_{n-1}(\mathcal O/\mathfrak p)\to\cdots
$$

왼쪽 항이 유한체의 $K$ 군이므로 수체 쪽 계산이 위 값을 입력으로 쓴다.

## Quillen–Lichtenbaum 정리

**정리(Voevodsky, Rost, Suslin 등).** $F$ 가 수체, $p$ 가 소수, $n\ge2$ 이면 사상

$$
K_n(\mathcal O_F\lbrack 1/p\rbrack;\mathbb Z_p)\thinspace\xrightarrow{\sim}\thinspace K^{\text{ét}}\_n(\mathcal O_F\lbrack 1/p\rbrack;\mathbb Z_p)
$$

는 동형이다. 우변은 $H^{i}\_{\text{ét}}(\mathcal O_F\lbrack 1/p\rbrack,\mathbb Z_p(j))$ 를 항으로 갖는 스펙트럼열로 계산된다. 이 항은 [에탈 코호몰로지](etale-cohomology.md)이고 계수 $\mathbb Z_p(j)$ 는 원분 지표의 $j$ 제곱인 [Galois 표현](galois-representations.md)이다. 수체에서 그 코호몰로지는 류군과 단수군의 정보다.

## Z 의 K 군

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $K_n(\mathbb Z)$ | $\mathbb Z$ | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z/48$ | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z/240$ |

$K_3(\mathbb Z)=\mathbb Z/48$ 의 48 과 $K_7(\mathbb Z)=\mathbb Z/240$ 의 240 은 $\zeta(-1)=-\tfrac1{12}$ 와 $\zeta(-3)=\tfrac1{120}$ 의 분모에 2 를 곱한 값이다. 분모는 [Bernoulli 수](bernoulli-numbers.md)의 von Staudt–Clausen 정리가 결정하고, 분자는 순환체의 류군이 결정한다. 같은 수가 구면의 안정 [호모토피군](homotopy-groups.md)의 im $J$ 부분에도 나타난다.

$K_5(\mathbb Z)=\mathbb Z$ 의 계수 1 은 Borel 이 계산했다. 일반적으로 $K_{2i+1}(\mathcal O_F)$ 의 계수는 $\zeta_F$ 의 $s=-i$ 에서의 소멸 차수와 같다. 유리계수 부분은 Borel 이 해석적으로, 비틀림 부분은 Quillen–Lichtenbaum 이 산술적으로 결정한다.

## Vandiver 와의 동치

$K_{4k}(\mathbb Z)$ 는 순환체 $\mathbb Q(\mu_p)$ 의 류군의 짝수 지표 성분으로 표현되고, 그 결과

$$
K_{4k}(\mathbb Z)=0\thinspace\text{(모든 }k\ge1)\quad\Longleftrightarrow\quad \text{Vandiver 추측}
$$

이 성립한다. [Vandiver 추측](vandiver-conjecture.md)은 $p$ 가 $\mathbb Q(\mu_p)^{+}$ 의 류수를 나누지 않는다는 진술이다. $K_4(\mathbb Z)=0$ 은 Rognes 가 Vandiver 와 독립적으로 증명했고, 더 높은 $K_{4k}$ 는 소수 범위마다 Vandiver 의 검증에 기댄다. 거꾸로 $K$ 이론 쪽의 소멸 정리가 나오면 Vandiver 가 따라온다. 같은 사정이 [Greenberg 추측](greenberg-conjecture.md)의 $\lambda^{+}=0$ 과도 이어진다.

## ζ 특수값과의 관계

$F$ 가 총실수체면 Lichtenbaum 예상은 다음 꼴이다.

$$
\big|\zeta_F(1-2k)\big|\thinspace\doteq\thinspace\frac{\big|K_{4k-2}(\mathcal O_F)\big|}{\big|K_{4k-1}(\mathcal O_F)\big|}
$$

2 를 법으로 하는 애매함은 제외한다. 좌변은 해석, 우변은 위상이다. 이 등식은 Mazur–Wiles 의 [주추측](iwasawa-main-conjecture.md) 증명으로 홀수 부분에서 알려져 있고 2 부분은 따로 처리되었다. 류수 공식의 고차 판본이며, Beilinson 예상으로 일반화된다.

## 계산의 한계

$K_n(\mathbb Z)$ 는 $n$ 이 커질수록 손으로 계산할 수 없다. 정의가 호모토피군이라 직접 접근이 막혀 있고, 에탈 쪽으로 옮겨도 순환체의 류군이 있어야 한다. 완전한 답은 Vandiver 를 가정해야 나오고, 가정 없이 아는 것은 주기적 구조의 일부다.

# 활용

## 수술 이론과 Whitehead 군

$K_1(\mathbb Z[\pi])$ 의 몫인 Whitehead 군 $\mathrm{Wh}(\pi)$ 가 $h$ 코보르디즘의 분류를 지배한다. $\mathrm{Wh}(\pi)=0$ 이면 $h$ 코보르디즘이 곱과 같아져 [고차원 Poincaré 추측](s-cobordism.md)의 증명이 작동한다. 군환의 $K$ 이론이 [다양체](manifolds.md)의 기하를 통제하는 사례이고, 같은 군환의 이차형식이 [수술 이론](surgery-theory.md)의 장애군을 준다.

## 정규화자와 특수값

$K$ 군의 유리계수 부분에서 정의되는 Borel 정규화자가 $\zeta_F$ 의 특수값을 준다. [Dirichlet 단수 정리](dirichlet-unit-theorem.md)가 $K_1$ 단계의 진술이라면 Borel 의 정리는 그 모든 차수 판본이며, 이 관점이 Beilinson 예상의 출발이다.

## 동기 코호몰로지와의 연결

Quillen–Lichtenbaum 의 증명은 $K$ 이론을 동기 코호몰로지로 번역하고 거기서 노름 잉여 동형 정리를 쓴다. 그 결과 [Milnor K 이론](milnor-k-theory.md)과 [Galois 코호몰로지](galois-cohomology.md) 사이의 동형

$$
K^{M}\_{n}(F)/m\thinspace\xrightarrow{\sim}\thinspace H^{n}\_{\text{ét}}\big(F,\mu_m^{\otimes n}\big)
$$

이 확립되었다. $n=1$ 은 [Kummer 이론](kummer-theory.md), $n=2$ 는 Merkurjev–Suslin 이며 [Brauer 군](brauer-groups.md)의 구조 정리를 포함한다.[^1]

[^1]: D. Quillen, *Higher algebraic K-theory I*, Lecture Notes in Math. 341 (1973). 표준 교과서는 C. Weibel, *The K-book: An Introduction to Algebraic K-theory* (2013) 이며 $K_n(\mathbb Z)$ 의 표와 Vandiver 와의 동치가 6 장에 정리되어 있다. Quillen–Lichtenbaum 의 증명 경로는 V. Voevodsky, *On motivic cohomology with Z/l coefficients*, Ann. of Math. 174 (2011).

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)
- [Galois 표현](galois-representations.md)
- [사영가군](projective-modules.md)

## 더 알아보기

- [Bloch 군](bloch-group.md)

#algebra #algebraic_topology #number_theory
