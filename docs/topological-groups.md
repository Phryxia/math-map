# 위상군

# 개요

**위상군(topological group)** 은 곱셈과 역원이 연속이어서, 원소를 조금 움직이면 곱도 조금만 움직이는 군이다. 원 위의 회전 전체는 원소가 무한히 많아서 유한군처럼 원소를 하나씩 세어 평균을 낼 수 없다. 위상군에서는 연산이 연속이므로 원소를 세는 대신 군 위에서 적분해 평균을 내고, 위상에 관한 정보를 항등원 근처 하나에서 읽는다.

# 직관

[실수](real-numbers.md) 덧셈군에서 점 $a$ 의 근방은 $0$ 의 근방을 옮긴 것이다. $U$ 가 $0$ 을 포함하는 열린집합이면 $a+U$ 는 $a$ 를 포함하는 열린집합이고, 거꾸로 $a$ 의 열린 근방 $V$ 에 대해 $-a+V$ 는 $0$ 의 열린 근방이다. 옮기는 사상 $x\mapsto a+x$ 가 연속이고 그 역사상 $x\mapsto -a+x$ 도 연속이므로 두 근방계가 서로 옮겨진다. 군 연산이 연속이면 같은 계산이 임의의 군에서 된다.

$$
V\thinspace\text{가}\thinspace a\thinspace\text{의 근방}\quad\Longleftrightarrow\quad a^{-1}V\thinspace\text{가}\thinspace e\thinspace\text{의 근방}
$$

그러므로 항등원 $e$ 의 근방을 전부 알면 모든 점의 근방을 알고, 위상 전체가 정해진다. 거리 공간에서 점마다 따로 확인하던 연속성과 수렴을 위상군에서는 $e$ 근방에서 한 번만 확인한다. 원 위의 회전처럼 원소가 무한히 많은 군에서도 같은 일이 되므로, 유한군에서 원소를 세어 내던 평균을 적분으로 낼 수 있다.

# 정의

## 위상군

군이면서 위상공간인 $G$ 에서 다음 두 사상이 연속이면 $G$ 를 위상군이라 한다.

$$
m:G\times G\to G,\quad m(g,h)=gh,\qquad i:G\to G,\quad i(g)=g^{-1}
$$

$G\times G$ 에는 곱위상을 준다. 두 조건을 합쳐 $(g,h)\mapsto gh^{-1}$ 하나의 연속성으로 쓸 수도 있다.

- 실수 덧셈군 $\mathbb R$, 원 위의 회전군 $S^1=\lbrace z\in\mathbb C:\vert z\vert=1\rbrace$, [행렬](matrices.md)군 $\mathrm{GL}\_n(\mathbb R)$, [p 진수](p-adic-numbers.md)의 덧셈군 $\mathbb Q\_p$ 는 위상군이다. 유한군에 이산위상을 주어도 위상군이다.
- $\mathbb R$ 에 반열린 구간 $\lbrack a,b)$ 들로 생성한 위상을 주면 덧셈은 연속이지만 $x\mapsto -x$ 가 $\lbrack 0,1)$ 을 열린집합이 아닌 $(-1,0\rbrack$ 으로 보내 연속이 아니므로 위상군이 아니다.

## 국소콤팩트군

$G$ 가 Hausdorff 이고 $e$ 가 [콤팩트](compactness.md) 근방을 가지면 $G$ 를 **국소콤팩트군(locally compact group)** 이라 한다.

- $\mathbb R$ 은 $\lbrack -1,1\rbrack$ 이, $\mathbb Q\_p$ 는 $\mathbb Z\_p$ 가 $0$ 의 콤팩트 근방이므로 국소콤팩트군이다.
- $\mathbb Q$ 에 $\mathbb R$ 의 부분공간 위상을 준 덧셈군은 $0$ 의 근방이 콤팩트가 아니므로 국소콤팩트가 아니다.

## 몫공간

$H\le G$ 에 대해 $G/H$ 에는 $\pi^{-1}(W)$ 가 $G$ 에서 열린 $W\subseteq G/H$ 를 열린집합으로 하는 몫위상(quotient topology)을 준다. $\pi:G\to G/H$ 는 이 위상에서 연속이다.

- $\mathbb R/\mathbb Z$ 는 몫위상으로 원 $S^1$ 과 위상군으로 동형이다. $x\mapsto e^{2\pi ix}$ 가 동형을 준다.
- $\mathbb R/\mathbb Q$ 의 몫위상은 열린집합이 공집합과 전체뿐이다. $\mathbb Q$ 가 조밀해 열린집합의 역상이 $\mathbb R$ 전체가 된다.

# 성질

## 평행이동과 분리성

고정된 $a\in G$ 에 대해 좌평행이동 $L_a(x)=ax$ 는 연속이고 역사상 $L_{a^{-1}}$ 도 연속이므로 위상동형이다. 우평행이동과 역원 사상도 위상동형이다. 국소콤팩트군에서는 이로써 모든 점이 콤팩트 근방을 갖는다. 위상군이 Hausdorff 인 것은 $\lbrace e\rbrace$ 가 닫힌집합인 것과 동치다. $\pi:G\to G/H$ 는 열린 사상이고, $H$ 가 정규부분군이면 $G/H$ 는 몫위상으로 위상군이다.

$\mathbb R^n$, $\mathrm{GL}\_n(\mathbb R)$, $\mathbb Q\_p$, $\mathbb Z\_p$, 이산군, 콤팩트군은 국소콤팩트다. 무한차원 [Banach 공간](banach-spaces.md)의 덧셈군은 닫힌 단위공이 콤팩트가 아니어서 국소콤팩트가 아니다.

## 근방 기저가 결정하는 위상

$e$ 의 근방 전체 $\mathcal N$ 을 알면 $G$ 의 위상이 정해진다. 점 $a$ 의 근방은 $a\mathcal N=\lbrace aU:U\in\mathcal N\rbrace$ 이고, 평행이동이 위상동형이므로 이것이 $a$ 의 근방계 전부다.

역으로 군 $G$ 와 $e$ 를 포함하는 집합족 $\mathcal B$ 가 주어졌을 때, 각 $U\in\mathcal B$ 에 대해 $VV\subseteq U$ 인 $V\in\mathcal B$ 가 있고 $V^{-1}\subseteq U$ 인 $V\in\mathcal B$ 가 있으며 각 $g\in G$ 에 대해 $gVg^{-1}\subseteq U$ 인 $V\in\mathcal B$ 가 있으면, $\mathcal B$ 를 $e$ 의 근방 기저로 하는 위상군 구조가 유일하게 결정된다. 세 조건은 각각 곱의 연속성, 역원의 연속성, 켤레의 연속성에서 온다.

## 몫의 분리성

$G/H$ 가 Hausdorff 일 필요충분조건은 $H$ 가 닫힌집합인 것이다.

$H$ 가 닫혔다고 하자. $aH\ne bH$ 이면 $b^{-1}a\notin H$ 이고 $H$ 의 여집합이 열렸으므로 $b^{-1}a$ 의 근방 $W$ 가 $H$ 를 피한다. 곱과 역원의 연속성으로 $U^{-1}b^{-1}aU\subseteq W$ 인 $e$ 의 근방 $U$ 를 잡으면 $\pi(aU)$ 와 $\pi(bU)$ 가 서로소인 열린집합이다. 거꾸로 $G/H$ 가 Hausdorff 이면 한 점 $\lbrace H\rbrace$ 이 닫혔고 $H=\pi^{-1}(\lbrace H\rbrace)$ 이 닫힌다.

같은 논법으로 $G/H$ 가 이산위상을 갖는 것은 $H$ 가 열린집합인 것과 동치다. 열린부분군은 항등원 근방을 담으므로 항상 닫혀 있다.

## 국소콤팩트군 위의 불변 측도

국소콤팩트 Hausdorff 위상군에는 좌평행이동 불변인 Radon 측도가 존재하고, 두 개는 양의 상수배로 서로 옮겨진다(Haar, Weil).

이 측도가 [Haar 측도](haar-measure.md)다. 존재의 근거는 콤팩트 집합을 작은 근방의 평행이동으로 덮어 개수를 세고 근방을 줄이며 극한을 잡는 것이다. 국소콤팩트성이 빠지면 성립하지 않는다.

$G$ 가 콤팩트면 $\mu(G)\lt\infty$ 이므로 $\mu(G)=1$ 로 정규화할 수 있고, 유한군에서 원소 수로 나누던 평균이 그대로 재현된다. $G$ 가 이산군이면 셈측도가 Haar 측도다.

## 아벨군의 쌍대

국소콤팩트 아벨군 $G$ 에 대해 연속 준동형 $\chi:G\to\lbrace z\in\mathbb C:\vert z\vert=1\rbrace$ 를 **지표(character)** 라 하고, 지표 전체가 점별 곱으로 군을 이룬다. 콤팩트 집합 위의 균등수렴 위상을 주면 이 **쌍대군(dual group)** $\hat G$ 도 국소콤팩트 아벨군이다.

$\widehat{\mathbb R}\cong\mathbb R$, $\widehat{\mathbb Z}\cong S^1$, $\widehat{S^1}\cong\mathbb Z$, $\widehat{\mathbb Q\_p}\cong\mathbb Q\_p$ 다. [Pontryagin 쌍대성](pontryagin-duality.md)은 자연사상 $G\to\hat{\hat G}$ 가 위상군 동형이라는 정리이고, 이것이 [Fourier 변환](fourier-transform.md)을 군 위에서 정의하는 틀이다.

# 활용

- Haar 측도의 정의가 국소콤팩트 위상군을 전제한다. 군 위의 $L^2$ 공간과 정규표현이 이 측도로 정의되고, [Peter–Weyl 정리](peter-weyl.md)는 콤팩트군에서 그 공간을 기약표현으로 분해한다.
- [아델](adeles.md)은 모든 완비화의 제한 직적으로 만든 위상환이며, 그 덧셈군과 단수군이 국소콤팩트군이다. 콤팩트 열린부분군 $\prod\mathbb Z\_p$ 의 존재가 제한 직적 위상의 근거다.
- [Satake 동형](satake-isomorphism.md)은 국소콤팩트군 $G(\mathbb Q\_p)$ 의 콤팩트 열린부분군 $K$ 에 대해 $K$ 양측불변 함수의 [합성곱](convolution.md) 대수를 다룬다. 몫공간 $G/K$ 의 이산성이 이 대수를 조합적 대상으로 만든다.
- [Lie 군](lie-groups.md)은 다양체 구조를 가진 위상군이다. Hilbert 의 다섯째 문제의 해는 국소 Euclid 위상군이 Lie 군 구조를 유일하게 갖는다는 것이다[^1].

[^1]: Montgomery–Zippin, *Topological Transformation Groups*, Interscience, 1955, 4장.

# 연관 문서

## 선수지식

- [위상 공간](topology.md)
- [군](groups.md)

## 더 알아보기

- [Haar 측도](haar-measure.md)
- [Pontryagin 쌍대성](pontryagin-duality.md)

#topology #group_theory #measure_theory #number_theory
