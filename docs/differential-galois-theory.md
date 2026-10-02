# 미분 Galois 이론

# 개요

미분 Galois 이론은 선형 미분방정식의 해가 어떤 연산으로 쓰이는지를 그 방정식에 딸린 군으로 판정한다. [Galois 이론](galois-theory.md)에서 유한군이 대수방정식의 가해성을 결정하는 자리에 선형 대수군이 온다.

# 직관

$\mathbb C(x)$ 에서 $y'=y/x$ 를 풀면 $y=cx$ 이고 해가 이미 $\mathbb C(x)$ 안에 있다. $y'=1/x$ 를 풀면 $y=\log x$ 이고 이것은 유리함수가 아니다. 그래서 $\mathbb C(x)$ 에 $\log x$ 를 붙인 체 $\mathbb C(x)(\log x)$ 로 나가야 한다. 미분은 $(\log x)'=1/x$ 로 정해지고, 도함수가 $0$ 인 원소는 여전히 $\mathbb C$ 의 원소뿐이다.

이 확대의 자기동형을 찾는다. $\mathbb C(x)$ 를 고정하고 미분과 가환하는 사상 $\sigma$ 는 $\sigma(\log x)$ 의 도함수를 $1/x$ 로 남겨야 하므로 $\sigma(\log x)-\log x$ 의 도함수가 $0$ 이고, 그 차이는 상수 $c\in\mathbb C$ 다. 자기동형은 $\log x\mapsto\log x+c$ 꼴이 전부이고 모임은 덧셈군 $\mathbb C$ 다. $y'=y$ 로 같은 계산을 하면 해는 $e^x$ 이고 $\sigma(e^x)/e^x$ 의 도함수가 $0$ 이므로 $e^x\mapsto ce^x$, $c\in\mathbb C^\times$ 꼴이어서 모임이 곱셈군 $\mathbb C^\times$ 다. 두 군은 $\mathrm{GL}\_1(\mathbb C)$ 안의 대수적 부분군이고 둘 다 가해군이다.

# 정의

## Picard–Vessiot 확대

$K$ 를 표수 $0$ 인 미분체, $C$ 를 그 상수체라 하고 $C$ 가 대수적으로 닫혀 있다고 하자. 계수가 $K$ 에 있는 선형 미분방정식

$$
L(y)=y^{(n)}+a_{n-1}y^{(n-1)}+\dots+a_0y=0
$$

에 대해 미분체 확대 $M/K$ 가 **Picard–Vessiot 확대**라는 것은 두 조건을 만족한다는 뜻이다.

1. $L(y)=0$ 의 해 $y_1,\dots,y_n$ 이 $C$ 위에서 선형독립이고 $M=K\langle y_1,\dots,y_n\rangle$ 이다.
2. $M$ 의 상수체가 $C$ 와 같다.

둘째 조건이 새 상수가 들어오는 것을 막는다. 상수가 늘면 자기동형이 고정해야 할 것이 줄어 군이 커지고 대응이 깨진다.

## 미분 Galois 군

$K$ 를 고정하고 미분과 가환하는 $M$ 의 체 자기동형 전체를 $\mathrm{Gal}\_\delta(M/K)$ 라 쓰고 **미분 Galois 군**이라 한다.

$$
\mathrm{Gal}\_\delta(M/K)=\lbrace \sigma\in\mathrm{Aut}(M/K):\sigma\circ\delta=\delta\circ\sigma\rbrace
$$

# 성질

## 선형 대수군

**정리.** $V=\lbrace y\in M:L(y)=0\rbrace$ 은 $C$ 위의 $n$ 차원 벡터공간이고, $\mathrm{Gal}\_\delta(M/K)$ 를 $V$ 에 제한하면 $\mathrm{GL}\_n(C)$ 의 Zariski 닫힌 부분군이 된다.

$\sigma$ 가 $L$ 의 계수를 고정하고 미분과 가환하므로 해를 해로 보내고, $V$ 가 $C$ 위 벡터공간이니 $\sigma\vert_V$ 는 $C$ 선형이다. $M$ 이 $V$ 로 생성되므로 이 제한은 단사다. 기저 $y_1,\dots,y_n$ 의 Wronski 행렬식이 $0$ 이 아니라는 조건과 $\sigma$ 가 $K$ 위의 대수적 관계를 보존한다는 조건이 모두 다항식 방정식이므로 상은 Zariski 닫혀 있다.

## Galois 대응

**정리.** $M/K$ 가 Picard–Vessiot 확대이고 $G=\mathrm{Gal}\_\delta(M/K)$ 이면 $M$ 과 $K$ 사이의 중간 미분체와 $G$ 의 Zariski 닫힌 부분군이 포함관계를 뒤집으며 일대일로 대응한다. 중간체 $F$ 가 $M/F$ 를 Picard–Vessiot 확대로 만드는 것은 대응하는 부분군이 정규인 것과 동치이고, 그때 $\mathrm{Gal}\_\delta(F/K)\cong G/H$ 다.

고정체를 취하는 방향과 고정하는 부분군을 취하는 방향이 서로 역임을 보이는 것이 증명의 요지다. Zariski 닫힘을 요구하는 자리가 유한 Galois 이론에서 부분군을 그냥 취하던 자리를 대신한다.

## 구적 가해성

$M/K$ 가 **Liouville 확대**라는 것은 $K=F_0\subset F_1\subset\dots\subset F_m=M$ 인 사슬이 있어 각 단계가 대수적 확대이거나 적분 하나($a'\in F_i$ 인 $a$ 를 붙임)이거나 지수 하나($a'/a\in F_i$ 인 $a$ 를 붙임)를 붙인 것이라는 뜻이다.

**정리.** $L(y)=0$ 의 해가 어떤 Liouville 확대 안에 있는 것과 $\mathrm{Gal}\_\delta(M/K)$ 의 항등성분이 가해군인 것이 동치다.[^1]

적분은 덧셈군을, 지수는 곱셈군을, 대수적 확대는 유한군을 몫으로 준다. 사슬을 따라가면 가해열이 나오는 것이 한 방향이다. 반대 방향은 가해열의 각 단계에서 고정체를 취해 사슬을 만든다.

## 존재와 유일성

상수체가 대수적으로 닫혀 있으면 주어진 $L$ 에 대한 Picard–Vessiot 확대가 있고, 미분체 동형을 빼고 유일하다. 구성은 $\mathrm{GL}\_n$ 의 좌표환에 해당하는 미분 다항식환을 잡고 극대 미분 아이디얼로 나누는 것이다.

# 활용

- **구적으로 풀리지 않음의 증명.** Airy 방정식 $y''=xy$ 의 미분 Galois 군은 $\mathrm{SL}\_2(\mathbb C)$ 이고 이 군은 연결이며 가해가 아니다. 그러므로 해를 유리함수와 적분, 지수, 대수적 근의 유한 번 조합으로 쓸 수 없다.
- **판정 알고리즘.** 2계 방정식 $y''=ry$ 에서 군은 $\mathrm{SL}\_2(\mathbb C)$ 의 대수적 부분군이고 그 분류가 네 경우로 끝난다. Kovacic 알고리즘이 $r$ 의 극점 차수에서 각 경우를 검사해 Liouville 해를 찾거나 없음을 판정한다.
- **미분적으로 닫힌 체 안의 구성.** [미분적으로 닫힌 체](differentially-closed-fields.md)는 모든 선형 미분방정식의 해를 담으므로 그 안에서 Picard–Vessiot 확대를 부분체로 찾을 수 있다.
- **모노드로미와의 관계.** $K=\mathbb C(x)$ 이고 $L$ 이 Fuchs 형이면 해를 특이점 주위로 연속시킬 때 생기는 모노드로미 표현의 상이 미분 Galois 군 안에서 Zariski 조밀하다.

[^1]: M. van der Put and M. F. Singer, *Galois Theory of Linear Differential Equations*, Grundlehren der mathematischen Wissenschaften **328**, Springer (2003). Picard–Vessiot 이론은 1장, Liouville 확대와 가해성은 1.5절, Kovacic 알고리즘은 4.3절이다.

# 연관 문서

## 선수지식

- [Galois 이론](galois-theory.md)
- [미분적으로 닫힌 체](differentially-closed-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra #group_theory #logic
