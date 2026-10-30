# 범주

# 개요

**범주(category)** 는 대상들과 그 사이의 화살표들을 모으고, 화살표를 이어 붙이는 규칙을 정한 구조다. 집합과 [함수](functions.md), 군과 준동형, 공간과 [연속함수](continuity.md)는 서로 다른 대상을 다루지만, 셋 다 화살표를 이어 붙일 수 있고 세 개를 이을 때 어느 둘을 먼저 잇든 결과가 같다. 범주는 이 공통점만 남겨 두고 곱이나 동형 같은 구성을 원소 대신 화살표로 정의해, 여러 분야의 같은 꼴의 구성을 한 번에 다룬다.

# 직관

두 집합 $A=\lbrace 0,1\rbrace$, $B=\lbrace a,b,c\rbrace$ 의 곱집합 $A\times B$ 는 순서쌍 여섯 개의 집합이다. 두 군의 곱은 성분마다 곱하는 군이고, 두 공간의 곱은 곱위상을 준 공간이다. 세 정의는 원소를 다루는 방식이 다르지만 화살표로는 같은 말을 한다. 곱에서 $A$ 와 $B$ 로 가는 사영 $p$, $q$ 가 있고, 다른 집합 $X$ 에서 $A$ 와 $B$ 로 가는 함수 $f$, $g$ 의 쌍은 $X$ 에서 $A\times B$ 로 가는 함수 $t\mapsto(f(t),g(t))$ 하나로 모인다. 이 함수는 $p$ 와 합성하면 $f$, $q$ 와 합성하면 $g$ 가 되는 유일한 함수다.

이 문장에는 화살표와 그 합성만 나온다. 합성에 필요한 규칙은 두 가지다. 세 화살표를 이을 때 어느 둘을 먼저 잇든 같고, 대상마다 아무것도 바꾸지 않는 화살표가 있다. 함수의 합성이 이 규칙을 만족하고, [부분순서](partial-orders.md)에서 $a\le b$ 와 $b\le c$ 를 화살표로 보면 추이성 $a\le c$ 가 합성이다. [군](groups.md)의 원소를 화살표로 보면 군의 곱이 합성이다.

원소도 화살표로 적힌다. 한원소집합 $\lbrace\ast\rbrace$ 에서 $A=\lbrace 0,1\rbrace$ 로 가는 함수는 $\ast\mapsto 0$ 과 $\ast\mapsto 1$ 두 개뿐이고, $A$ 의 원소와 일대일로 대응한다.

같은 두 대상이 같은 것으로 취급되는지는 어떤 화살표를 허용하느냐에 달렸다. 모든 함수를 허용하면 원소 수가 같은 두 집합은 서로 오가는 역함수 쌍을 가진다. 연속함수만 허용하면 위상까지 같아야 하고, [선형사상](linear-maps.md)만 허용하면 차원이 같아야 한다.

# 정의

## 공리

범주 $C$ 는 **대상(object)** 들의 모임, 각 대상 쌍 $(A, B)$ 에 대한 **사상(morphism)** 들의 모임 $\mathrm{Hom}(A, B)$, **합성(composition)** $\mathrm{Hom}(B,C) \times \mathrm{Hom}(A,B) \to \mathrm{Hom}(A,C)$, 각 대상의 **항등사상(identity morphism)** $\mathrm{id}\_A$ 로 이루어지고 다음을 만족한다.

$$
h\circ(g\circ f)=(h\circ g)\circ f,\qquad f\circ\mathrm{id}\_A=f=\mathrm{id}\_B\circ f
$$

각 $\mathrm{Hom}(A, B)$ 가 집합이면 **국소적으로 작은 범주(locally small category)**, 대상 전체까지 집합이면 **작은 범주(small category)** 다. 직관 절의 집합과 함수는 범주를 이루고, $\mathrm{Hom}(\lbrace\ast\rbrace,\lbrace 0,1\rbrace)$ 는 원소가 둘인 집합이다. 모든 집합의 범주는 작지 않지만 국소적으로 작다. 사상이 반드시 함수일 필요는 없다.

## 집합, 군, 부분순서, 반대 범주

| 범주 | 대상 | 사상 |
|---|---|---|
| $\mathbf{Set}$ | 집합 | 함수 |
| $\mathbf{Grp},\thinspace \mathbf{Vect},\thinspace \mathbf{Top}$ | 군, [벡터 공간](vector-spaces.md), 위상공간 | 준동형, 선형사상, 연속함수 |
| 부분순서 집합 | 원소 | $A \le B$ 일 때 사상 하나 |
| 군 | 대상 하나 | 군의 원소, 합성은 군의 곱 |
| $C^{\mathrm{op}}$ | $C$ 의 대상 | $C$ 의 사상을 뒤집은 것 |

표의 마지막 줄을 **반대 범주(opposite category)** 라 한다. 부분순서 $1\le 2\le 3$ 의 범주에는 사상이 여섯 개 있고, 그 반대 범주는 순서 $3\le 2\le 1$ 의 범주다.

## 사상으로 정의되는 개념

- $f\colon A\to B$ 가 **동형사상(isomorphism)** 이라는 것은 $g \circ f = \mathrm{id}\_A$ 와 $f \circ g = \mathrm{id}\_B$ 를 만족하는 $g$ 가 있다는 것이다.
- $f$ 가 **단사사상(monomorphism, mono)** 이라는 것은 $f \circ g = f \circ h \Rightarrow g = h$ 가 성립한다는 것이다.
- $f$ 가 **전사사상(epimorphism, epi)** 이라는 것은 $g \circ f = h \circ f \Rightarrow g = h$ 가 성립한다는 것이다.
- **시작대상(initial object)** 은 모든 대상으로 가는 사상이 정확히 하나인 대상이고, **종단대상(terminal object)** 은 모든 대상에서 오는 사상이 정확히 하나인 대상이다.

$\mathbf{Set}$ 에서 $\lbrace 0,1\rbrace$ 과 $\lbrace x,y\rbrace$ 사이의 전단사 함수는 동형사상이다. 공집합은 시작대상이고, 직관 절의 한원소집합 $\lbrace\ast\rbrace$ 는 종단대상이다.

# 성질

## 예의 확인

부분순서에서는 두 대상 사이 사상이 많아야 하나라서 결합법칙이 자동으로 성립하고, 반사성이 항등사상을, 추이성이 합성을 준다. 군을 대상 하나짜리 범주로 보면, 모든 사상이 가역인 대상 하나짜리 범주가 곧 군이다. 반대 범주로 옮기면 정의가 쌍대로 뒤집혀 곱과 합, 시작대상과 종단대상이 짝을 이룬다.

## 단사사상과 전사사상

$\mathbf{Set}$ 에서 단사사상은 단사함수, 전사사상은 전사함수와 일치하지만 모든 범주에서 그렇지는 않다. 가환환의 범주에서 정수환에서 유리수체로 가는 포함사상은 전사가 아닌데도 전사사상이다.

## 가환 그림

여러 사상 사이의 등식을 그림으로 그리고 어느 경로를 따라가도 같다고 말하는 것이 가환 그림(commutative diagram)이다. 등식을 나열하는 대신 그림을 그리면 어떤 경로가 존재하는지, 무엇을 채우면 증명이 끝나는지가 드러난다.

## 보편성질

어떤 대상을 그 성질을 만족하는 것들 가운데 유일하게 경유되는 것으로 규정하는 방식이 보편성질(universal property)이다. 시작대상과 종단대상이 가장 단순한 형태이고, 직관 절의 곱과 몫, 자유 구성이 이 틀로 정의된다.

보편성질로 정의된 대상은 존재하면 동형을 무시하고 유일하다. 두 대상 사이에 양방향 사상이 유일하게 존재하고 그 합성이 유일성 때문에 항등사상이 된다.

## 크기 문제

모든 집합의 집합이 존재할 수 없듯이 큰 범주에서도 크기가 문제가 된다. 국소적으로 작음을 요구하거나 Grothendieck 우주(Grothendieck universe)를 도입하는 것이 표준 처방이며, [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel 집합론에 [선택공리](axiom-of-choice.md)를 더한 것)에서 제한한 것과 같은 종류의 문제다.

# 활용

## 여러 분야의 같은 구성

집합, 군, 공간, 명제마다 따로 적었던 구성이 같은 보편성질을 만족하는지 비교할 수 있다. 곱집합, 직접곱, 곱공간, 논리곱이 하나의 정의에서 나오므로 각각에 대해 따로 증명하던 성질이 한 번에 정리된다.

## 함자와 수반

두 범주 사이의 대응인 [함자](functors.md), 함자 사이의 비교인 [자연변환](natural-transformations.md), 최적 근사 관계인 [수반](adjunctions.md)이 범주의 공리로 정의된다. 대수적 위상수학(algebraic topology)은 공간을 대수적 대상으로 옮길 때 함자를 쓰고, 프로그래밍 언어의 타입 이론(type theory)은 계산의 효과를 [monad](monads.md) 로 쓴다.[^1]

[^1]: Emily Riehl, *Category Theory in Context*, Chapter 1. 범주·사상·동형과 구체적 예시. https://math.jhu.edu/~eriehl/context/

# 연관 문서

## 선수지식

- [부분순서](partial-orders.md)
- [군](groups.md)
- [범주론 개관](category-theory-overview.md)

## 더 알아보기

- [함자](functors.md)
- [구조적 집합론](structural-set-theory.md)
- [기하학적 Satake 대응](geometric-satake.md)

#category_theory #algebra #topology #logic
