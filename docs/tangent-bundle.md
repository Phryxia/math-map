# 접다발

# 개요

접다발은 [다양체](manifolds.md)의 각 점에 그 점의 접공간을 붙여 만든 [벡터다발](vector-bundles.md)이다. 좌표근방마다 곱과 같고, 두 좌표근방이 겹치는 곳에서는 좌표변환의 야코비 행렬이 두 자명화를 잇는다. 전체 집합은 $2n$ 차원 매끄러운 다양체가 되고, 그 위에서 벡터장은 단면으로, 매끄러운 사상의 미분은 다발 사상으로 적힌다.

# 직관

구면 위의 곡선 $\gamma$ 가 점 $p$ 를 지날 때 그 속도를 적는다. 좌표근방 $(U,\varphi)$ 에서 $\varphi\circ\gamma$ 의 도함수를 계산하면 성분 $n$ 개가 나온다. 같은 곡선을 다른 좌표근방 $(V,\psi)$ 에서 계산하면 성분이 다르고, 두 성분은 연쇄법칙으로 좌표변환 $\psi\circ\varphi^{-1}$ 의 야코비 행렬을 곱한 관계다. 점마다 속도의 공간이 있고 그 안의 벡터를 적는 방식만 좌표에 달려 있다.

점과 그 점의 속도를 한 쌍으로 묶어 전부 모은다. 좌표근방 $U$ 위에서는 쌍이 $(x,v)$ 로 적히므로 그 부분이 $\varphi(U)\times\mathbb R^n$ 과 같다. 겹치는 곳에서 $x$ 는 좌표변환으로, $v$ 는 그 변환의 야코비 행렬로 옮겨간다. 야코비 행렬이 가역이므로 조각마다의 $\mathbb R^n$ 이 벡터 공간의 구조를 지킨 채 맞물리고, 모은 것 전체가 $M$ 위의 벡터다발이 된다.

# 정의

## 접벡터의 세 구성

$M$ 을 $n$ 차원 매끄러운 다양체, $p\in M$ 이라 한다. 다음 세 가지가 같은 $n$ 차원 [벡터 공간](vector-spaces.md)을 준다.

1. **derivation.** Leibniz 규칙 $X(fg)=X(f)\thinspace g(p)+f(p)\thinspace X(g)$ 를 만족하는 선형사상 $X\colon C^\infty(M)\to\mathbb R$ 전체.
2. **곡선류.** $\gamma(0)=p$ 인 매끄러운 곡선 $\gamma\colon(-\varepsilon,\varepsilon)\to M$ 전체에서, 어떤 좌표근방에서 $(\varphi\circ\gamma)'(0)$ 이 같은 것끼리 묶은 동치류.
3. **좌표류.** 좌표근방 $(U,\varphi)$ 와 $v\in\mathbb R^n$ 의 쌍 전체에서, $((U,\varphi),v)$ 와 $((V,\psi),w)$ 를 $w=D(\psi\circ\varphi^{-1})(\varphi(p))\thinspace v$ 일 때 같다고 본 동치류.

2 에서 1 로는 $\gamma$ 에 $f\mapsto(f\circ\gamma)'(0)$ 을 대응시키고, 3 에서 1 로는 $v$ 에 좌표 기저 $\partial/\partial x^i$ 의 선형결합 $\sum\_i v^i\thinspace\partial/\partial x^i$ 를 대응시킨다. 이 공간을 $T\_pM$ 으로 쓰고 **접공간**이라 한다.

## 접다발

$$
TM=\bigsqcup\_{p\in M}T\_pM,\qquad \pi(p,X)=p
$$

로 두고, 좌표근방 $(U,\varphi)$ 마다

$$
\tilde\varphi\colon\pi^{-1}(U)\to\varphi(U)\times\mathbb R^n,\qquad \tilde\varphi(p,X)=(\varphi(p),\thinspace(X(x^1),\dots,X(x^n)))
$$

를 준다. 두 좌표근방이 겹치는 곳에서 $\tilde\psi\circ\tilde\varphi^{-1}$ 는

$$
(x,v)\mapsto\bigl(\tau(x),\thinspace D\tau(x)\thinspace v\bigr),\qquad \tau=\psi\circ\varphi^{-1}
$$

이고 $\tau$ 가 매끄러우므로 이 사상도 매끄럽다. 따라서 $\lbrace\tilde\varphi\rbrace$ 는 $TM$ 에 $2n$ 차원 매끄러운 다양체의 구조를 주고, $\pi$ 는 rank $n$ 벡터다발이다. 이것을 $M$ 의 **접다발**이라 한다.

## 미분사상

매끄러운 사상 $F\colon M\to N$ 에 대해 $dF\_p\colon T\_pM\to T\_{F(p)}N$ 을

$$
(dF\_p X)(f)=X(f\circ F)
$$

로 정의한다. 좌표에서 $dF\_p$ 의 행렬은 $F$ 의 야코비 행렬이다. 각 점의 $dF\_p$ 를 모은 $dF\colon TM\to TN$ 은 매끄럽고 $\pi\_N\circ dF=F\circ\pi\_M$ 을 만족한다.

## 여접다발

$T\_p^\ast M=(T\_pM)^\ast$ 를 **여접공간**, 이것을 모은 $T^\ast M$ 을 **여접다발**이라 한다. 전이함수가 $D\tau(x)$ 의 역전치이므로 접다발과 다른 다발이다. 함수 $f$ 의 미분 $df\_p(X)=X(f)$ 가 $T^\ast M$ 의 단면이고, 좌표 미분 $dx^1,\dots,dx^n$ 이 각 점에서 $\partial/\partial x^i$ 의 쌍대기저다.

# 성질

## 전이함수

접다발의 전이함수는

$$
g\_{VU}(x)=D(\psi\circ\varphi^{-1})(x)\in\mathrm{GL}\_n(\mathbb R)
$$

다. 아틀라스의 좌표변환이 전이함수를 그대로 정하므로 다양체의 매끄러운 구조가 접다발을 결정한다. 좌표변환의 야코비 행렬식이 모두 양수인 아틀라스를 잡을 수 있는 것이 방향지음 가능성이고, 그때 전이함수가 $\mathrm{GL}\_n^+(\mathbb R)$ 로 줄어든다.

## 영단면

$s(p)=0\in T\_pM$ 으로 정의되는 영단면은 $M$ 을 $TM$ 의 닫힌 부분다양체로 매장한다. 섬유마다 $(p,v)\mapsto(p,tv)$ 로 $t$ 를 $1$ 에서 $0$ 까지 줄이면 $TM$ 에서 영단면으로 가는 변형 수축이 되므로 $TM$ 과 $M$ 은 호모토피 동치다. 접다발의 호몰로지는 $M$ 의 호몰로지와 같고, 다발의 비자명성은 호모토피형에 나타나지 않는다.

## 평행화 가능성

$TM$ 이 자명한 다발, 곧 $TM\cong M\times\mathbb R^n$ 이면 $M$ 을 **평행화 가능**이라 한다. 어디서도 선형독립인 벡터장 $n$ 개가 있다는 것과 같다.

> **정리.** [Lie 군](lie-groups.md)은 평행화 가능하다.

항등원의 접벡터를 왼쪽 곱으로 옮기면 좌불변 벡터장을 얻고, 항등원의 기저를 옮긴 $n$ 개가 모든 점에서 기저가 된다.

> **정리 (Bott–Milnor, Kervaire).** $S^n$ 은 $n=1,3,7$ 에서만 평행화 가능하다.[^1]

증명은 평행화가 $\mathbb R^{n+1}$ 에 쌍선형 나눗셈 구조를 주고, 특성류로 그런 구조가 $n+1=2,4,8$ 에서만 가능함을 보이는 것이다. $n$ 이 짝수일 때는 [Euler 지표](euler-characteristic.md)가 $2$ 라서 영이 아닌 벡터장 하나도 없다.

## 접다발의 접다발

$TM$ 이 다양체이므로 $T(TM)$ 을 다시 만들 수 있고, 여기에는 $TM$ 이 벡터다발이라는 사실에서 오는 여분의 구조가 있다. 섬유 방향의 부분다발이 수직 부분다발이고, 그 여분을 고르는 것이 접속이다. 접속을 하나 고정하면 $T(TM)$ 이 수평과 수직으로 쪼개진다.

# 활용

- **[벡터장](vector-fields.md).** 벡터장의 정의가 $TM$ 의 매끄러운 단면 $X\colon M\to TM$ 이고, 벡터장 전체를 $\Gamma(TM)$ 으로 쓴다.
- **[미분형식](differential-forms.md).** $k$ 형식은 여접다발의 $k$ 차 외대수 $\Lambda^k T^\ast M$ 의 단면이다. 외미분과 적분이 그 단면 위에서 정의된다.
- **[Riemann 계량](riemannian-metrics.md).** 계량은 각 $T\_pM$ 에 내적을 매끄럽게 주는 것, 곧 $T^\ast M\otimes T^\ast M$ 의 대칭 단면이다.
- **[심플렉틱 다양체](symplectic-manifolds.md).** 여접다발 $T^\ast M$ 에는 좌표와 무관한 2 형식이 하나 있어 항상 심플렉틱 다양체가 되고, 이것이 Hamilton 역학의 위상공간이다.
- **[특성류](characteristic-classes.md).** 접다발의 특성류가 다양체의 불변량이 된다. Stiefel–Whitney 류와 Pontryagin 류가 방향지음 가능성과 매장 차원의 제약을 준다.

[^1]: R. Bott and J. Milnor, *On the parallelizability of the spheres*, Bull. Amer. Math. Soc. **64** (1958), 87–89. M. Kervaire, *Non-parallelizability of the $n$-sphere for $n\gt 7$*, Proc. Nat. Acad. Sci. **44** (1958), 280–283.

# 연관 문서

## 선수지식

- [벡터다발](vector-bundles.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #topology #algebraic_topology
