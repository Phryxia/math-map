# 대수적 K 이론

# 개요

대수적 $K$ 이론은 환 $R$ 에 아벨군의 열 $K_0(R),K_1(R),K_2(R),\dots$ 을 붙이는 이론이다. 낮은 차수의 뜻은 고전적이다.

$$
K_0(R)=\text{사영가군의 Grothendieck 군},\quad
K_1(R)=\mathrm{GL}(R)^{\mathrm{ab}},\quad
K_2(R)=\text{Steinberg 군의 중심 확대}
$$

$R=\mathbb Z$ 면 $K_0=\mathbb Z$ , $K_1=\mathbb Z/2$ , $K_2=\mathbb Z/2$ 로 모두 산술적인 양이다. 차수를 올리면 $K_3(\mathbb Z)=\mathbb Z/48$ 이고, 이 48 은 구면의 안정 [호모토피군](homotopy-groups.md)에 나타나는 수와 같다.

Quillen 이 $K_n$ 을 분류공간의 호모토피군으로 정의하면서 [호몰로지](homology.md)의 기법이 들어왔고, Quillen–Lichtenbaum 정리가 $K_n(\mathbb Z)$ 를 에탈 코호몰로지로 계산 가능하게 만들면서 [Galois 표현](galois-representations.md)과 순환체의 산술이 들어왔다. 그 결과 $K_{4k}(\mathbb Z)$ 의 소멸이 [Vandiver 추측](vandiver-conjecture.md)과 동치가 된다.

# 직관

## 군의 열

$K_0$ 은 가군을 분류하고 $K_1$ 은 가군의 자기동형을 분류한다. 자기동형 사이의 관계, 그 관계 사이의 관계로 올라가면 열이 생긴다. 이것을 정리하는 방법이 공간을 만들어 호모토피군을 보는 것이다.

$$
K_n(R)=\pi_n\big(BGL(R)^{+}\times K_0(R)\big)\qquad(n\ge1)
$$

Quillen 의 plus 구성은 분류공간 $BGL(R)$ 에 세포를 붙여 [기본군](fundamental-group.md)을 아벨화하되 호몰로지는 바꾸지 않는 공간을 만든다. $\mathrm{GL}(R)$ 의 교환자 부분군이 완전군이므로 이 조작이 가능하다. 결과로 나오는 열은 국소화 완전열, 곱 구조, 함자성을 모두 만족한다.

## Bernoulli 수의 분모

$K_3(\mathbb Z)=\mathbb Z/48$ 의 48 과 $K_7(\mathbb Z)=\mathbb Z/240$ 의 240 은 Bernoulli 수의 분모에서 온다. $\zeta(-1)=-\tfrac1{12}$ , $\zeta(-3)=\tfrac1{120}$ 에 2 를 곱한 값이다. 같은 수가 구면의 안정 호모토피군의 im $J$ 부분에도 나타난다.

$\mathbb Z$ 의 $K$ 군이 $\zeta$ 의 특수값을 재고 있다는 것이 현대적 설명이며, 그것을 정리로 만든 것이 Quillen–Lichtenbaum 이다. 분모는 [Bernoulli 수](bernoulli-numbers.md)의 von Staudt–Clausen 이 결정하고, 분자는 순환체의 류군이 결정한다.

## 에탈 코호몰로지 환원

$K$ 군을 직접 계산하기는 어렵다. 대신 $K$ 이론에서 에탈 코호몰로지로 가는 사상을 만들고 차수가 충분히 높으면 동형임을 보인다.

$$
K_n(\mathcal O_F;\mathbb Z_p)\ \longrightarrow\ K^{\text{ét}}\_n(\mathcal O_F;\mathbb Z_p)
$$

우변은 Galois 코호몰로지로 계산되고, 수체에서 그것은 류군과 단수군의 정보다. 이 사상이 동형이라는 것이 Quillen–Lichtenbaum 추측이며, Voevodsky 의 노름 잉여 동형 정리 이후 정리가 되었다.

# 정의

## 낮은 차수

- $K_0(R)$ 은 유한생성 사영 $R$ 가군의 동형류가 직합에 대해 만드는 Grothendieck 군이다. $R$ 이 [Dedekind 정역](dedekind-domains.md)이면 $K_0(R)\cong\mathbb Z\oplus\mathrm{Cl}(R)$ 이다.
- $K_1(R)=\mathrm{GL}(R)/E(R)$ 이다. 가환환이면 $\det$ 이 $R^{\times}$ 로의 분해를 주고, $\mathcal O_F$ 에서는 $K_1=\mathcal O_F^{\times}$ 다.
- $K_2(R)$ 은 Steinberg 군 $St(R)\to E(R)$ 의 핵이다. 체에서는 Matsumoto 정리로 기호 $\lbrace a,b\rbrace$ 와 관계 $\lbrace a,1-a\rbrace=1$ 만으로 제시된다.

$K_0$ 이 류군을, $K_1$ 이 단수군을 담으므로 $K$ 이론은 대수적 수론의 두 기본 불변량을 한 열로 묶는다.

## Quillen 의 정의

$n\ge1$ 에 대해 $K_n(R)=\pi_n\big(BGL(R)^{+}\big)$ 로 두고 $K_0$ 을 따로 붙인다. 정확계열, 국소화열, 곱 구조가 모두 이 정의에서 나온다. 대표적인 것이 Dedekind 정역 $\mathcal O_F$ 와 그 분수체 $F$ 를 잇는 국소화 완전열이다.

$$
\cdots\to\bigoplus_{\mathfrak p}K_n(\mathcal O/\mathfrak p)\to K_n(\mathcal O_F)\to K_n(F)\to\bigoplus_{\mathfrak p}K_{n-1}(\mathcal O/\mathfrak p)\to\cdots
$$

[유한체](finite-fields.md)에서는 $K_{2i-1}(\mathbb F_q)=\mathbb Z/(q^{i}-1)$ 이고 짝수 차수는 0 이므로, 수체 쪽 계산이 이 값을 입력으로 쓴다.

## Quillen–Lichtenbaum

**정리(Voevodsky, Rost, Suslin 등).** $F$ 가 수체, $p$ 가 소수, $n\ge2$ 이면 사상

$$
K_n(\mathcal O_F[1/p];\mathbb Z_p)\ \xrightarrow{\ \sim\ }\ K^{\text{ét}}\_n(\mathcal O_F[1/p];\mathbb Z_p)
$$

는 동형이다. 우변은 $H^{i}\_{\text{ét}}(\mathcal O_F[1/p],\mathbb Z_p(j))$ 를 항으로 갖는 스펙트럼열로 계산된다.

# 성질

## $\mathbb Z$ 의 $K$ 군

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $K_n(\mathbb Z)$ | $\mathbb Z$ | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z/48$ | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z/240$ |

$K_5(\mathbb Z)=\mathbb Z$ 의 계수 1 은 Borel 이 계산했다. 일반적으로 $K_{2i+1}(\mathcal O_F)$ 의 계수는 $\zeta_F$ 의 $s=-i$ 에서의 소멸 차수와 같다. 유리계수 부분은 Borel 이 해석적으로, 비틀림 부분은 Quillen–Lichtenbaum 이 산술적으로 결정한다.

## Vandiver 와의 동치

$K_{4k}(\mathbb Z)$ 는 순환체 $\mathbb Q(\mu_p)$ 의 류군의 짝수 지표 성분으로 표현되고, 그 결과

$$
K_{4k}(\mathbb Z)=0\ \text{(모든 }k\ge1)\quad\Longleftrightarrow\quad \text{Vandiver 추측}
$$

이 성립한다. $K_4(\mathbb Z)=0$ 은 Rognes 가 Vandiver 와 독립적으로 증명했고, 더 높은 $K_{4k}$ 는 소수 범위마다 Vandiver 의 검증에 기댄다. 거꾸로 $K$ 이론 쪽의 소멸 정리가 나오면 Vandiver 가 따라온다. 같은 사정이 [Greenberg 추측](greenberg-conjecture.md)의 $\lambda^{+}=0$ 과도 이어진다.

## $\zeta$ 특수값과의 관계

$F$ 가 총실수체면 Lichtenbaum 예상은 다음 꼴이다.

$$
\big|\zeta_F(1-2k)\big|\ \doteq\ \frac{\big|K_{4k-2}(\mathcal O_F)\big|}{\big|K_{4k-1}(\mathcal O_F)\big|}
$$

2 를 법으로 하는 애매함은 제외한다. 좌변은 해석, 우변은 위상이다. 이 등식은 Mazur–Wiles 의 [주추측](iwasawa-main-conjecture.md) 증명으로 홀수 부분에서 알려져 있고 2 부분은 따로 처리되었다. 류수 공식의 고차 판본이며, Beilinson 예상으로 일반화된다.

## 계산의 한계

$K_n(\mathbb Z)$ 는 $n$ 이 커질수록 손으로 계산할 수 없다. 정의가 호모토피군이라 직접 접근이 막혀 있고, 에탈 쪽으로 옮겨도 순환체의 류군이 있어야 한다. 완전한 답은 Vandiver 를 가정해야 나오고, 가정 없이 아는 것은 주기적 구조의 일부다.

# 활용

## 수술 이론과 Whitehead 군

$K_1(\mathbb Z[\pi])$ 의 몫인 Whitehead 군 $\mathrm{Wh}(\pi)$ 가 $h$ 코보르디즘의 분류를 지배한다. $\mathrm{Wh}(\pi)=0$ 이면 $h$ 코보르디즘이 곱과 같아져 고차원 Poincaré 추측의 증명이 작동한다. 군환의 $K$ 이론이 [다양체](manifolds.md)의 기하를 통제하는 사례다.

## 정규화자와 특수값

$K$ 군의 유리계수 부분에서 정의되는 Borel 정규화자가 $\zeta_F$ 의 특수값을 준다. [Dirichlet 단수 정리](dirichlet-unit-theorem.md)가 $K_1$ 단계의 진술이라면 Borel 의 정리는 그 모든 차수 판본이며, 이 관점이 Beilinson 예상의 출발이다.

## 동기 코호몰로지와의 연결

Quillen–Lichtenbaum 의 증명은 $K$ 이론을 동기 코호몰로지로 번역하고 거기서 노름 잉여 동형 정리를 쓴다. 그 결과 Milnor $K$ 이론과 Galois 코호몰로지 사이의 동형

$$
K^{M}\_{n}(F)/m\ \xrightarrow{\ \sim\ }\ H^{n}\_{\text{ét}}\big(F,\mu_m^{\otimes n}\big)
$$

이 확립되었다. $n=1$ 은 Kummer 이론, $n=2$ 는 Merkurjev–Suslin 이며 [Brauer 군](brauer-groups.md)의 구조 정리를 포함한다.[^1]

[^1]: D. Quillen, *Higher algebraic K-theory I*, Lecture Notes in Math. 341 (1973). 표준 교과서는 C. Weibel, *The K-book: An Introduction to Algebraic K-theory* (2013) 이며 $K_n(\mathbb Z)$ 의 표와 Vandiver 와의 동치가 6 장에 정리되어 있다. Quillen–Lichtenbaum 의 증명 경로는 V. Voevodsky, *On motivic cohomology with Z/l coefficients*, Ann. of Math. 174 (2011).

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)
- [Galois 표현](galois-representations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #algebraic_topology #number_theory
