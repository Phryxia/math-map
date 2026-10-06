# 단사가군

# 개요

단사가군은 부분가군에서 정의된 준동형을 전체로 늘릴 수 있는 [가군](modules.md)이다. [사영가군](projective-modules.md)이 전사사상을 따라 들어 올리는 성질을 뽑은 것이라면 단사가군은 그 화살표를 뒤집은 것이고, $\mathrm{Hom}\_R(-,Q)$ 가 완전함자라는 것과 동치다. 좌 아이디얼에서의 확장만 보면 되는 Baer 판정과 모든 가군이 단사가군에 매장된다는 정리가 이 개념의 두 축이고, 후자가 [유도 함자](derived-functors.md)의 단사 분해를 가능하게 한다.

# 직관

$\mathbb Z$ 가군 사이의 준동형 $f\colon 2\mathbb Z\to\mathbb Z$ 를 $f(2)=1$ 로 둔다. 이것을 $2\mathbb Z$ 를 품은 $\mathbb Z$ 전체에서 정의된 준동형 $g\colon\mathbb Z\to\mathbb Z$ 로 늘린다. $g(1)=n$ 이라 하면 $g$ 가 준동형이므로 $g(2)=2n$ 이고, $g$ 가 $f$ 의 확장이려면 $2n=1$ 이어야 한다. 정수 가운데 $2n=1$ 인 $n$ 이 없으므로 이런 $g$ 는 없다.

막힌 것은 $1$ 을 $2$ 로 나눌 자리가 치역 $\mathbb Z$ 에 없어서다. 치역을 $\mathbb Q$ 로 바꾸고 $f\colon 2\mathbb Z\to\mathbb Q$ 를 같은 식으로 두면 $g(1)=1/2$ 로 확장이 된다. 더 큰 부분가군 $m\mathbb Z$ 에서 출발해도 같다. $f(m)=q$ 를 늘리려면 $g(1)=q/m$ 으로 두면 되고, $\mathbb Q$ 에서는 모든 $m\neq 0$ 으로 나눌 수 있으므로 늘 된다.

$\mathbb Z$ 의 부분가군은 모두 $m\mathbb Z$ 꼴이므로, 확장을 막는 것은 치역에서 나눗셈이 되는지 하나뿐이다. 치역이 $\mathbb Q$ 처럼 모든 정수로 나누어지는 가군이면 어떤 부분가군에서 출발한 준동형도 전체로 늘어난다. 이 확장 성질만 뽑아 이름을 붙인 것이 단사가군이고, 확인할 것이 부분가군 전체가 아니라 아이디얼뿐이라는 것이 아래 Baer 판정이다.

# 정의

$R$ 를 환, $Q$ 를 $R$ 가군이라 하자. $Q$ 가 **단사**라는 것은 모든 $R$ 가군 $B$ 와 그 부분가군 $A$ 와 모든 $R$ 준동형 $f\colon A\to Q$ 에 대해, $A$ 로의 제한이 $f$ 인 $R$ 준동형 $g\colon B\to Q$ 가 존재하는 것이다.

$$
g\vert\_A=f
$$

포함사상을 일반적인 단사 준동형 $\iota\colon A\to B$ 로 바꾸어도 같은 정의다. $\iota$ 의 상을 $A$ 와 동일시하면 되기 때문이다.

가군 $M$ 의 **단사 분해**는 각 $I^n$ 이 단사가군인 완전열 $0\to M\to I^0\to I^1\to\cdots$ 이다.

# 성질

## 동치 조건

*정리.* $R$ 가군 $Q$ 에 대해 다음 셋은 동치다[^1].

1. $Q$ 가 단사다.
2. $\mathrm{Hom}\_R(-,Q)$ 가 완전함자다.
3. $Q$ 를 부분가군으로 품은 모든 가군 $M$ 에서 $Q$ 가 직합인자다.

*증명의 요지.* $\mathrm{Hom}\_R(-,Q)$ 는 언제나 좌완전이고 단사사상을 전사사상으로 보내는 것이 남은 조건이므로 1 과 2 가 같다. 1 에서 3 은 $A=Q$ , $B=M$ , $f=\mathrm{id}\_Q$ 를 넣어 얻은 $g\colon M\to Q$ 가 사영이 되는 것이다. 3 에서 1 은 아래 매장 정리로 $Q$ 를 단사가군 $E$ 에 넣고 직합인자임을 쓰면, $E$ 로의 확장을 $Q$ 로 사영해 얻는다. ∎

조건 3 은 사영가군의 "자유가군의 직합인자" 와 짝이 되는 자리다. 사영가군 쪽에서는 자유가군이라는 구체적인 생성원이 있지만 단사가군 쪽에는 그에 해당하는 표준 생성원이 없다.

## Baer 판정

*정리.* $Q$ 가 단사인 것과, 모든 좌 아이디얼 $I\subseteq R$ 과 모든 $R$ 준동형 $f\colon I\to Q$ 가 $R$ 전체로 확장되는 것이 동치다[^1].

*증명의 요지.* 필요조건은 $I\subseteq R$ 에 정의를 적용한 것이다. 충분조건은 Zorn 보조정리를 쓴다. $A\subseteq B$ 와 $f\colon A\to Q$ 가 주어졌을 때 $A$ 를 품고 $B$ 에 담긴 부분가군 가운데 $f$ 의 확장을 갖는 것들을 모으면 포함관계로 사슬마다 상계가 있으므로 극대원 $A'$ 과 확장 $f'$ 이 있다. $A'\neq B$ 라 하고 $b\in B\setminus A'$ 를 잡으면 다음이 좌 아이디얼이다.

$$
I=\lbrace r\in R:rb\in A'\rbrace
$$

$r\mapsto f'(rb)$ 는 $I\to Q$ 준동형이므로 가정에서 $h\colon R\to Q$ 로 확장되고, $q=h(1)$ 로 두어 $A'+Rb$ 위에 $f'(a')+rq$ 를 값으로 주면 잘 정의된 확장이 된다. $A'$ 의 극대성에 어긋나므로 $A'=B$ 다. ∎

확인할 대상이 모든 부분가군에서 아이디얼로 줄어드는 것이 이 판정의 쓰임이다. $R=\mathbb Z$ 에서는 아이디얼이 $m\mathbb Z$ 뿐이므로 다음 따름정리가 나온다.

## 나눗셈 가능 아벨군

아벨군 $D$ 가 **나눗셈 가능**이라는 것은 모든 $d\in D$ 와 모든 정수 $m\neq 0$ 에 대해 $mx=d$ 인 $x\in D$ 가 있는 것이다.

*따름정리.* $\mathbb Z$ 가군 $D$ 가 단사인 것과 $D$ 가 나눗셈 가능인 것이 동치다.

$\mathbb Q$ , $\mathbb Q/\mathbb Z$ , $p$ 차 거듭제곱 꼴의 원소만 모은 $\mathbb Z(p^\infty)$ 가 단사 $\mathbb Z$ 가군이다. $\mathbb Z$ 자신은 $2x=1$ 이 풀리지 않으므로 단사가 아니다. 사영가군 쪽에서는 $\mathbb Z$ 가 자유가군이므로 사영인데, 같은 가군이 한쪽 성질만 갖는다.

## 매장 정리

*정리.* 모든 $R$ 가군 $M$ 은 단사 $R$ 가군에 매장된다. 따라서 모든 가군이 단사 분해를 갖는다[^2].

*증명의 요지.* 먼저 아벨군으로서 $M$ 을 나눗셈 가능 군 $D$ 에 넣는다. $M$ 을 자유 아벨군의 몫 $F/K$ 로 쓰고 $F$ 의 각 $\mathbb Z$ 인자를 $\mathbb Q$ 로 바꾸면 $M\hookrightarrow(F\otimes\mathbb Q)/K$ 이고 오른쪽이 나눗셈 가능이다. 다음으로 $\mathrm{Hom}\_{\mathbb Z}(R,D)$ 에 $R$ 가군 구조를 주면 이것이 단사 $R$ 가군이고, $\mathrm{Hom}\_R(N,\mathrm{Hom}\_{\mathbb Z}(R,D))\cong\mathrm{Hom}\_{\mathbb Z}(N,D)$ 가 완전함자이기 때문이다. 끝으로 $M\to\mathrm{Hom}\_{\mathbb Z}(R,D)$ 를 $m\mapsto(r\mapsto rm)$ 으로 주면 단사다. ∎

사영 분해는 자유가군의 전사를 되풀이해 바로 만들 수 있지만 단사 분해의 존재는 이 정리를 거쳐야 한다.

## 직적과 직합

단사가군의 직적은 단사다. $\mathrm{Hom}\_R(-,\prod\_i Q\_i)\cong\prod\_i\mathrm{Hom}\_R(-,Q\_i)$ 이고 완전열의 직적이 완전열이기 때문이다.

직합은 일반적으로 단사가 아니다. 단사가군의 임의의 직합이 단사인 것과 $R$ 가 좌 Noether 환인 것이 동치다. 사영가군 쪽에서는 직합이 늘 사영이고 직적이 그렇지 않으므로 여기서도 쌍대가 뒤집힌다.

## Ext 판정과 단사 포락

$Q$ 가 단사인 것과 모든 $M$ 에 대해 $\mathrm{Ext}\_R^1(M,Q)=0$ 인 것이 동치다. $\mathrm{Ext}\_R^1(M,Q)$ 가 $Q$ 를 끝항으로 하는 확장의 동치류를 분류하므로, 단사성은 그런 확장이 모두 분해된다는 것이다.

$M$ 을 품은 단사가군 가운데 $M$ 의 본질적 확장인 것, 곧 $M$ 과 $0$ 이 아닌 교집합을 갖는 부분가군만을 갖는 것이 존재하고 동형을 빼면 유일하다. 이것을 $M$ 의 **단사 포락**이라 하고 $E(M)$ 으로 쓴다.

# 활용

- 유도 함자에서 좌완전 함자 $F$ 의 우유도 함자 $R^nF$ 는 단사 분해 위에서 정의된다. $F=\mathrm{Hom}\_R(M,-)$ 를 넣으면 $\mathrm{Ext}\_R^n(M,-)$ 이고, 사영 분해로 계산한 것과 같은 결과를 준다.
- 가환 Noether 환 $R$ 위의 단사가군은 소 아이디얼 $\mathfrak p$ 마다 하나씩 있는 단사 포락 $E(R/\mathfrak p)$ 들의 직합으로 분해된다. $R=\mathbb Z$ 에서 $E(\mathbb Z/p\mathbb Z)=\mathbb Z(p^\infty)$ 와 $E(\mathbb Z)=\mathbb Q$ 가 그 경우다.
- 유한군 $G$ 와 체 $k$ 에 대해 군환 $kG$ 위에서는 사영가군과 단사가군이 일치한다. 이 성질을 갖는 대수를 Frobenius 대수라 하고, [군의 표현](group-representations.md)의 블록 이론에서 사영 분해와 단사 분해를 같은 것으로 다룰 수 있게 한다.
- 가군 $M$ 에 대해 $\mathrm{Hom}\_{\mathbb Z}(M,\mathbb Q/\mathbb Z)$ 를 특성 가군이라 한다. $\mathbb Q/\mathbb Z$ 가 단사이므로 이 대응이 완전열을 완전열로 보내고, 평탄성과 단사성을 서로 옮기는 데 쓰인다.

[^1]: D. S. Dummit, R. M. Foote, *Abstract Algebra*, 3rd ed., Section 10.5 (Exact Sequences — Projective, Injective and Flat Modules) — 단사가군의 동치 조건, Baer 판정, 나눗셈 가능 아벨군.

[^2]: J. J. Rotman, *An Introduction to Homological Algebra*, 2nd ed., Chapter 3 — 단사가군에의 매장, 단사 포락의 존재와 유일성, Noether 환과 직합.

# 연관 문서

## 선수지식

- [사영가군](projective-modules.md)

## 더 알아보기

- [유도 함자](derived-functors.md)

#ring_theory #algebra #category_theory
