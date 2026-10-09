# Artin–Schreier 이론

# 개요

표수 $p$ 인 체 $K$ 의 차수 $p$ 순환확대는 모두 $y^p-y=a$ 의 근을 붙여 얻는다. 어떤 $a$ 가 같은 확대를 주는지는 덧셈군의 몫 $K/\wp(K)$ 가 정하고, 여기서 $\wp(x)=x^p-x$ 다.

[Kummer 이론](kummer-theory.md)은 바닥 체가 $1$ 의 원시 $n$ 제곱근을 품고 표수가 $n$ 을 나누지 않을 때 지수 $n$ 아벨 확대를 분류한다. 표수 $p$ 에서 $n=p$ 인 경우가 그 조건 밖에 있고, 그 자리를 Artin–Schreier 이론이 맡는다. 곱셈군 $K^{\times}$ 와 $n$ 제곱 사상을 덧셈군 $K$ 와 $\wp$ 로 바꾼 같은 꼴의 대응이다.

# 직관

$\mathbb F\_p(t)$ 의 차수 $p$ Galois 확대를 만들려 한다. 표수가 $p$ 가 아닐 때는 $n$ 제곱근을 붙여 차수 $n$ 순환확대를 얻었으므로, $n=p$ 에서 같은 것을 해 본다.

$x^p-t$ 의 근 하나를 $\theta$ 라 한다. 표수 $p$ 에서 $p$ 제곱 사상이 덧셈을 보존하므로 $(x-\theta)^p=x^p-\theta^p=x^p-t$ 이고, $x^p-t$ 의 근은 $\theta$ 하나뿐이다. $\theta$ 를 다른 근으로 보낼 수 없으니 $\mathbb F\_p(t)(\theta)$ 의 자기동형은 항등 하나이고, 차수는 $p$ 인데 Galois 확대가 아니다.

근이 한 점에 겹친 것은 $x\mapsto x^p$ 가 덧셈을 보존해 $x^p-t$ 가 완전 $p$ 승이 된 탓이다. 덧셈을 보존하는 사상은 그대로 쓰면서 근이 흩어지게 바꾼다. $y\mapsto y^p-y$ 도 덧셈을 보존하고, 이 사상으로 $t$ 를 끌어올려 $y^p-y=t$ 를 푼다. 두 근 $y\_1,y\_2$ 의 차는 $(y\_1-y\_2)^p-(y\_1-y\_2)=0$ 을 만족하므로 $y^p-y=0$ 의 근, 곧 $\mathbb F\_p$ 의 원소다.

근 하나 $y$ 를 붙이면 $y,y+1,\dots,y+(p-1)$ 이 모두 들어오므로 $\mathbb F\_p(t)(y)$ 는 $y^p-y-t$ 의 분해체다. $y\mapsto y+c$ 가 자기동형이고 $c\in\mathbb F\_p$ 를 고르는 것이 Galois 군이므로 군은 $\mathbb Z/p$ 이고, 차수 $p$ 순환확대가 나온다.

# 정의

$K$ 를 표수 $p$ 인 체라 한다. **Artin–Schreier 사상**은 다음이다.

$$
\wp:K\to K,\qquad \wp(x)=x^p-x
$$

표수 $p$ 에서 $(x+y)^p=x^p+y^p$ 이므로 $\wp$ 는 덧셈군의 준동형이다. 핵은 $x^p=x$ 를 만족하는 원소 전체, 곧 소체 $\mathbb F\_p$ 다.

## Artin–Schreier 확대

$a\in K\setminus\wp(K)$ 에 대해 $y^p-y-a$ 의 근 하나를 붙인 확대 $L=K(y)$ 를 $a$ 의 **Artin–Schreier 확대**라 한다. $\lbrack L:K\rbrack=p$ 이고 $\mathrm{Gal}(L/K)\cong\mathbb Z/p$ 다.

## Artin–Schreier 쌍

$\Delta$ 를 $\wp(K)\subseteq\Delta\subseteq K$ 인 덧셈 부분군이라 하고, $L=K(\wp^{-1}\Delta)$ 를 $\Delta$ 의 원소 $a$ 마다 $\wp(y)=a$ 의 근을 붙인 체라 한다. 다음이 **Artin–Schreier 쌍**이다.

$$
\mathrm{Gal}(L/K)\times\Delta/\wp(K)\longrightarrow\mathbb F\_p,
\qquad
(\sigma,a)\longmapsto\sigma(y)-y
$$

값은 $\wp(y)=a$ 인 근 $y$ 의 선택에 의존하지 않고 양쪽 변수에 대해 준동형이다.

# 성질

## 차수 p 순환확대의 생성

**정리.** $K$ 가 표수 $p$ 이고 $L/K$ 가 차수 $p$ 의 순환확대이면 $\wp(y)\in K$ 인 $y\in L$ 이 있어 $L=K(y)$ 다.[^1]

증명의 요지. $\sigma$ 를 $\mathrm{Gal}(L/K)$ 의 생성원이라 한다. $L/K$ 가 분리확대이므로 대각합 $\mathrm{Tr}\_{L/K}$ 는 전사이고, $\mathrm{Tr}\_{L/K}(\alpha)=1$ 인 $\alpha\in L$ 을 잡는다.

$$
y=-\sum\_{i=0}^{p-1}i\thinspace\sigma^{i}(\alpha)
$$

로 두면 $\sigma^{p}=\mathrm{id}$ 와 $p-1=-1$ 에서 $\sigma(y)-y=\sum\_{i=0}^{p-1}\sigma^{i}(\alpha)=1$ 이다. 그러면 $\sigma(\wp(y))=\wp(y+1)=\wp(y)$ 이므로 $\wp(y)$ 는 $\sigma$ 가 고정하는 원소, 곧 $K$ 의 원소다. $\sigma(y)\ne y$ 이므로 $y\notin K$ 이고 $\lbrack L:K\rbrack=p$ 가 소수이므로 $L=K(y)$ 다.

[Hilbert 정리 90](hilbert-theorem-90.md)은 곱셈군에서 $N\_{L/K}(a)=1$ 인 원소를 $b/\sigma(b)$ 로 적는다. 위 계산은 그 덧셈군 판본 $H^1(G,L)=0$ 을 대각합으로 쓴 것이다.

## 기약성 판정

**정리.** $a\in K$ 에 대해 $y^p-y-a$ 는 $a\notin\wp(K)$ 이면 $K\lbrack y\rbrack$ 에서 기약이고, $a\in\wp(K)$ 이면 일차 인자 $p$ 개로 완전히 분해한다.

증명의 요지. $a=\wp(c)$ 이면 근이 $c,c+1,\dots,c+p-1$ 로 모두 $K$ 에 있다. 역으로 $a\notin\wp(K)$ 라 하고 차수 $d$ 인 모닉 인자를 하나 잡는다. 근 하나를 $y$ 라 하면 모든 근이 $y+c$ 꼴이므로 그 인자의 근은 $y+c\_1,\dots,y+c\_d$ 이고, 근의 합 $dy+(c\_1+\dots+c\_d)$ 가 $K$ 에 있다. $d\lt p$ 이면 $d$ 가 $K$ 에서 가역이므로 $y\in K$ 가 되어 $a=\wp(y)\in\wp(K)$ 다. 따라서 $d=p$ 다.

## 유한체에서의 판정

**정리.** $q=p^{n}$ 이고 $a\in\mathbb F\_q$ 일 때, $y^p-y-a$ 가 $\mathbb F\_q\lbrack y\rbrack$ 에서 기약인 것과 $\mathrm{Tr}\_{\mathbb F\_q/\mathbb F\_p}(a)\ne0$ 인 것이 동치다.

증명의 요지. $\mathrm{Tr}(c^{p})=\sum\_{i=0}^{n-1}c^{p^{i+1}}=\mathrm{Tr}(c)$ 이므로 $\mathrm{Tr}(\wp(c))=0$ 이고 $\wp(\mathbb F\_q)\subseteq\ker\mathrm{Tr}$ 다. $\wp$ 의 핵이 $\mathbb F\_p$ 이므로 상의 크기는 $q/p$ 이고, 대각합이 전사이므로 그 핵의 크기도 $q/p$ 다. 크기가 같은 포함이므로 $\wp(\mathbb F\_q)=\ker\mathrm{Tr}$ 이고, 앞의 기약성 판정에 넣으면 된다.

## Kummer 이론과의 대응

| | Kummer 이론 | Artin–Schreier 이론 |
| --- | --- | --- |
| 바닥 체의 조건 | $\mu_n\subseteq K$, $\mathrm{char}\thinspace K\nmid n$ | $\mathrm{char}\thinspace K=p$ |
| 쓰는 군 | 곱셈군 $K^{\times}$ | 덧셈군 $K$ |
| 사상 | $x\mapsto x^{n}$ | $x\mapsto x^{p}-x$ |
| 사상의 핵 | $\mu_n$ | $\mathbb F\_p$ |
| 분류하는 몫 | $K^{\times}/(K^{\times})^{n}$ | $K/\wp(K)$ |
| 생성 다항식 | $x^{n}-a$ | $y^{p}-y-a$ |
| 소멸하는 코호몰로지 | $H^1(G,L^{\times})=1$ | $H^1(G,L)=0$ |

## 차수 p^m 순환확대

$\wp$ 가 분류하는 것은 지수 $p$ 아벨 확대까지다. 차수 $p^{m}$ 순환확대는 길이 $m$ 의 Witt 벡터에 $\wp$ 를 성분별로 확장한 사상으로 분류하고, 이것을 Artin–Schreier–Witt 이론이라 한다.[^2]

# 활용

- [에탈 기본군](etale-fundamental-group.md). 표수 $p$ 의 아핀 직선의 에탈 기본군이 자명하지 않은 것은 $y^p-y=f(t)$ 꼴 덮개가 있기 때문이고, 그 덮개가 Artin–Schreier 확대다. 야생 분기를 다루는 절이 이 다항식을 정의 없이 쓴다.
- [Galois 이론](galois-theory.md)의 분리성. 그 문서는 $\mathbb F\_p(t)$ 위 $x^p-t$ 를 분리가능하지 않은 다항식의 예로 든다. 같은 체에서 같은 차수의 Galois 확대를 주는 다항식이 $y^p-y-t$ 다.
- [유한체](finite-fields.md) 위 기약 다항식. $\mathbb F\_q$ 에서 차수 $p$ 인 기약 다항식 $y^p-y-a$ 를 고르는 일이 $\mathrm{Tr}(a)\ne0$ 인 $a$ 를 고르는 일로 바뀐다.

[^1]: Lang, *Algebra*, 3rd ed., VI §6 "Artin–Schreier extensions" — 차수 $p$ 순환확대의 생성과 대응 정리.
[^2]: Serre, *Local Fields*, Ch. II §5 — Witt 벡터와 차수 $p^{m}$ 순환확대의 분류.

# 연관 문서

## 선수지식

- [Galois 이론](galois-theory.md)
- [유한체](finite-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra #number_theory #group_theory
