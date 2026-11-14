# Grothendieck 군

# 개요

**Grothendieck 군(Grothendieck group)** 은 더하기는 있지만 빼기가 없는 대상들에 형식적인 차를 붙여 만든 아벨군이다. 자연수에는 $3-5$ 가 없으므로 두 자연수의 쌍 $(3,5)$ 를 차로 보고, $a+d=b+c$ 인 두 쌍 $(a,b)$ 와 $(c,d)$ 를 같은 것으로 보면 정수가 나온다. 벡터 공간이나 가군처럼 직합으로만 더할 수 있는 대상의 동형류에도 같은 구성을 적용하면, 대상을 빼는 계산을 군 안에서 할 수 있다.

# 직관

자연수에서 정수를 만드는 과정을 다시 본다. 차 $a-b$ 를 쌍 $(a,b)$ 로 적으면 $(3,5)$ 와 $(0,2)$ 는 같은 수 $-2$ 를 가리켜야 한다. $3+2=5+0$ 이므로 "$a+d=b+c$ 이면 $(a,b)$ 와 $(c,d)$ 가 같다" 는 규칙이 이것을 맞춘다. 쌍끼리는 성분별로 더하고, $(a,b)$ 에 $(b,a)$ 를 더하면 $(a+b,a+b)$ 로 $(0,0)$ 과 같아진다.

이 규칙은 자연수에서 $x+k=y+k$ 이면 $x=y$ 라는 소거법칙에 기대고 있다. 소거법칙이 없는 덧셈에서는 규칙이 추이적이지 않다. 자연수에 $\infty$ 를 하나 더하고 $n+\infty=\infty$ 로 정하면 $1+\infty=2+\infty$ 이지만 $1\ne 2$ 다.

그래서 규칙을 "어떤 $k$ 를 양쪽에 더해 같아지면 같다" 로 넓힌다. 위의 예에서 $k=\infty$ 를 고르면 모든 쌍이 서로 같아지고, 만들어지는 군은 원소가 하나뿐인 $0$ 이다. 더하는 순간 정보가 사라지는 원소 $\infty$ 가 있으면 차로 복원할 정보도 남지 않는다.

# 정의

**가환 모노이드(commutative monoid)** 는 결합적이고 교환적인 덧셈 $+$ 와 항등원 $0$ 을 가진 집합 $M$ 이다. 자연수, 직관 절의 $\mathbb N\cup\lbrace\infty\rbrace$, 유한차원 벡터 공간의 동형류가 직합에 대해 가환 모노이드다.

$M\times M$ 위에서 다음을 만족하는 $k\in M$ 이 있을 때 $(a,b)\sim(c,d)$ 로 둔다.

$$
a+d+k=b+c+k
$$

이 관계는 [동치관계](equivalence-relations.md)다. 추이성에서 두 $k$ 를 더한 것을 새 $k$ 로 쓴다.

동치류 $\lbrack a,b\rbrack$ 전체에 성분별 덧셈을 주면 아벨군이 되고, $\lbrack a,b\rbrack$ 의 역원은 $\lbrack b,a\rbrack$ 다. 이 군을 $M$ 의 Grothendieck 군이라 하고 $K(M)$ 으로 쓴다. 사상 $\iota:M\to K(M)$, $\iota(a)=\lbrack a,0\rbrack$ 을 표준 사상이라 한다.

- $K(\mathbb N)=\mathbb Z$ 이고 $\lbrack a,b\rbrack$ 가 정수 $a-b$ 다.
- $K(\mathbb N\cup\lbrace\infty\rbrace)=0$ 이다.
- 양의 정수의 곱셈 모노이드에서는 같은 구성이 양의 유리수의 곱셈군을 준다. 쌍 $(a,b)$ 가 분수 $a/b$ 다.

# 성질

## 보편성질

$A$ 가 아벨군이고 $f:M\to A$ 가 $f(a+b)=f(a)+f(b)$, $f(0)=0$ 을 만족하면, $f=g\circ\iota$ 인 군 준동형 $g:K(M)\to A$ 가 정확히 하나 있다.[^1]

$$
g(\lbrack a,b\rbrack)=f(a)-f(b)
$$

$(a,b)\sim(c,d)$ 이면 정의의 등식 양변에 $f$ 를 적용하고 $A$ 에서 $f(k)$ 를 소거해 $f(a)-f(b)=f(c)-f(d)$ 를 얻으므로 $g$ 가 잘 정의된다. $K(M)$ 의 원소는 모두 $\iota(a)-\iota(b)$ 꼴이므로 $g$ 는 $\iota$ 위의 값으로 정해진다. 유한차원 벡터 공간의 동형류에서 차원은 이런 $f$ 이고, $g$ 는 $K\to\mathbb Z$ 의 동형이다.

## 안정 동치

$\iota(a)=\iota(b)$ 인 것은 어떤 $k$ 에서 $a+k=b+k$ 인 것과 동치다. 이때 $a$ 와 $b$ 가 **안정 동치(stably equivalent)** 라 한다. 따라서 $\iota$ 가 단사인 것은 $M$ 이 소거법칙을 만족하는 것과 동치다. 자연수에서는 $\iota$ 가 단사이고 $\mathbb N\cup\lbrace\infty\rbrace$ 에서는 모든 원소가 $0$ 으로 간다.

## 함자성

모노이드 준동형 $h:M\to N$ 은 $\lbrack a,b\rbrack\mapsto\lbrack h(a),h(b)\rbrack$ 로 군 준동형 $K(M)\to K(N)$ 을 준다. 항등사상은 항등사상으로, 합성은 합성으로 간다.

# 활용

- [사영가군](projective-modules.md)과 [대수적 K 이론](algebraic-k-theory.md). 환 $R$ 위의 유한생성 사영가군의 동형류는 직합으로 가환 모노이드이고, 그 Grothendieck 군이 $K_0(R)$ 이다. 체 위에서는 차원이 동형 $K_0\to\mathbb Z$ 를 준다.
- [작용소 K 이론](operator-k-theory.md). [C 스타 대수](c-star-algebras.md)의 사영의 동치류에 같은 구성을 적용한 것이 $K_0(A)$ 다.
- [벡터다발](vector-bundles.md). 콤팩트 Hausdorff 공간 $X$ 위의 복소 벡터다발의 동형류에서 얻은 군이 [위상 K 이론](topological-k-theory.md)의 $K^0(X)$ 다. 구면 $S^2$ 의 접다발은 [털난 공 정리](hairy-ball-theorem.md)에 따라 자명하지 않지만, 법선 방향의 자명한 선다발을 더하면 $\mathbb R^3$ 의 자명한 다발이 된다. 따라서 실 벡터다발의 K 군에서 접다발은 계수 $2$ 의 자명한 다발과 같은 원소이고, 두 다발은 안정 동치다.
- [군의 표현](group-representations.md). 유한군의 유한차원 복소 표현의 동형류에서 얻은 군이 표현환이다. 표현을 지표로 보내는 사상이 단사이므로 표현환의 원소는 지표의 정수 계수 결합으로 적힌다.

[^1]: S. Lang, *Algebra*, 개정 3판, Springer, 2002, I 장. 가환 모노이드의 Grothendieck 군의 구성과 보편성질이 있다.

# 연관 문서

## 선수지식

- [군](groups.md)

## 더 알아보기

- [대수적 K 이론](algebraic-k-theory.md)
- [위상 K 이론](topological-k-theory.md)
- [작용소 K 이론](operator-k-theory.md)

#algebra #algebraic_topology
