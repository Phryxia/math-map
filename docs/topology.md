# 위상 공간

# 개요

**위상 공간(topological space)** 은 점 사이의 거리를 재지 않고 어느 부분집합이 열려 있는지만 정해 둔 공간이다. 고무막에 그린 원은 막을 찢지 않고 늘여서 정사각형으로 바꿀 수 있고, 그동안 거리와 각도는 전부 달라진다. 이런 변형으로 바뀌지 않는 것, 곧 구멍의 개수나 한 덩어리인지 여부를 따지려면 거리 없이 가까움만 남겨야 한다. 위상 공간은 열린집합의 모임 하나로 그 가까움을 정하고, 연속과 수렴을 열린집합으로 정의한다.

# 직관

[실수](real-numbers.md)에서 열린구간 $(0,1)$ 에 속한 점은 어느 쪽으로든 조금 움직여도 그 구간 안에 있다. 닫힌구간 $\lbrack 0,1\rbrack$ 의 끝점 $0$ 은 왼쪽으로 조금만 움직여도 구간 밖으로 나간다. 모든 점이 이런 여유를 갖는 집합을 열려 있다고 하면, 함수가 끊기지 않는다는 것도 거리 대신 이 여유로 말할 수 있다.

열린집합을 몇 개 모아 합집합을 만들면 각 점의 여유가 그대로 남는다. 교집합에서는 여유가 줄어든다. 반지름이 줄어드는 열린구간을 무한히 많이 교차시키면 여유가 $0$ 이 된다.

$$
\bigcap_{n=1}^{\infty}\Big(-\frac1n,\frac1n\Big)=\lbrace 0\rbrace
$$

남은 한 점 $0$ 은 어느 쪽으로도 움직일 수 없다. 무한 교집합까지 열린 것으로 치면 모든 한 점 집합이 열리고, 그 합집합인 모든 부분집합이 열려 여유라는 구분이 사라진다. 그래서 합집합은 몇 개든 허용하고 교집합은 유한 개로 제한한다. 이 조건만 남기고 거리를 지운 것이 위상이다.

# 정의

## 위상

집합 $X$ 의 부분집합들의 모임 $\tau$ 가 다음 셋을 만족하면 $\tau$ 를 $X$ 의 **위상(topology)** 이라 한다.

- $\emptyset \in \tau$ 이고 $X \in \tau$ 다.
- $\tau$ 의 원소들의 임의의 합집합이 $\tau$ 에 속한다.
- $\tau$ 의 원소들의 유한 교집합이 $\tau$ 에 속한다.

쌍 $(X,\tau)$ 를 위상 공간이라 한다. $\tau$ 의 원소를 **열린집합(open set)**, 열린집합의 여집합을 **닫힌집합(closed set)** 이라 한다.

- $X=\lbrace a,b\rbrace$ 에서 $\tau=\lbrace\emptyset,\lbrace a\rbrace,X\rbrace$ 는 세 조건을 만족한다. $\lbrace a\rbrace$ 는 열린집합이고 $\lbrace b\rbrace$ 는 닫힌집합이다.
- 모든 부분집합을 연 위상을 **이산 위상(discrete topology)**, $\emptyset$ 과 $X$ 만 연 위상을 **비이산 위상(indiscrete topology)** 이라 한다. $\lbrace a,b\rbrace$ 의 이산 위상은 $\lbrace\emptyset,\lbrace a\rbrace,\lbrace b\rbrace,X\rbrace$ 이고 비이산 위상은 $\lbrace\emptyset,X\rbrace$ 다.
- $\lbrace\emptyset,\lbrace a\rbrace,\lbrace b\rbrace\rbrace$ 는 $X$ 를 포함하지 않으므로 위상이 아니다.

## 거리에서 오는 위상

[거리 공간](metric-spaces.md) $(X,d)$ 에서 부분집합 $U$ 의 각 점 $x$ 마다 반지름 $r\gt 0$ 이 있어 열린 공 $\lbrace y:d(x,y)\lt r\rbrace$ 가 $U$ 에 포함되면 $U$ 를 열린집합이라 한다. 이 열린집합들의 모임이 $d$ 가 정하는 **거리 위상(metric topology)** 이다.

- 실수의 거리 $d(x,y)=\vert x-y\vert$ 에서 $(0,1)$ 은 열린집합이다. 점 $x$ 에서 $r=\min(x,1-x)$ 를 잡으면 된다. $\lbrack 0,1)$ 은 점 $0$ 에서 어떤 $r$ 도 맞지 않으므로 열린집합이 아니다.

위상이 어떤 거리의 거리 위상과 같으면 그 위상 공간을 **거리화 가능(metrizable)** 하다고 한다.

## 연속과 위상동형

위상 공간 사이의 함수 $f : X \to Y$ 는 $Y$ 의 모든 열린집합 $U$ 에 대해 역상

$$
f^{-1}(U)=\lbrace x\in X:f(x)\in U\rbrace
$$

가 $X$ 의 열린집합일 때 **연속(continuous)** 이다. 역상 표기는 역함수의 존재와 무관하다. 전단사 $f$ 와 그 역함수가 모두 연속이면 $f$ 를 **위상동형(homeomorphism)** 이라 한다.

- $\lbrace a,b\rbrace$ 의 이산 위상에서 비이산 위상으로 가는 항등함수는 연속이다. 비이산 위상의 열린집합 $\emptyset$, $X$ 의 역상이 이산 위상에서 열려 있다. 반대 방향의 항등함수는 $\lbrace a\rbrace$ 의 역상 $\lbrace a\rbrace$ 가 비이산 위상에서 열려 있지 않으므로 연속이 아니다.
- $x\mapsto\tan\big(\pi(x-\tfrac12)\big)$ 는 $(0,1)$ 에서 $\mathbb R$ 로 가는 위상동형이다. 길이가 $1$ 인 구간과 길이가 무한한 직선이 위상 공간으로는 같다.

# 성질

## 위상으로 정의되는 개념

| 개념 | 정의 |
|---|---|
| 근방(neighborhood) | 그 점이 속하는 열린집합을 포함하는 집합 |
| 내부(interior)·폐포(closure) | 포함된 가장 큰 열린집합, 포함하는 가장 작은 닫힌집합 |
| 조밀(dense) | 폐포가 전체인 부분집합 |
| [연결](connectedness.md) | 공집합이 아닌 두 열린집합으로 쪼갤 수 없음 |
| [콤팩트](compactness.md) | 모든 열린덮개가 유한 부분덮개를 가짐 |

연결성과 콤팩트성은 연속함수의 상으로 보존된다. 실수의 구간이 연결이므로 [중간값 정리](intermediate-value-theorem.md)가, 닫힌구간이 콤팩트이므로 최대·최소 정리(extreme value theorem)가 이 보존에서 유도된다.

## 거리 위상의 비교

거리값이 달라도 거리 위상은 같을 수 있다. 평면의 Euclid 거리와 좌표별 차의 절댓값을 더한 거리에서는 한 거리의 열린 공 안에 다른 거리의 같은 중심 열린 공이 항상 들어가므로, 두 거리는 같은 열린집합을 준다.

모든 위상이 거리에서 오지는 않는다. 점이 둘 이상인 비이산 위상에서는 서로 다른 두 점 $a,b$ 를 가르는 열린집합이 없다. 거리 위상에서는 반지름 $d(a,b)/2$ 인 두 열린 공이 두 점을 가르므로 이 위상은 거리화 가능하지 않다.

## 부분공간, 곱공간, 몫공간

- **부분공간(subspace)** $A\subseteq X$ 의 열린집합은 $X$ 의 열린집합과 $A$ 의 교집합이다.
- **곱공간(product space)** $X\times Y$ 의 위상은 $U\times V$ 꼴의 집합들의 합집합으로 생성된다.
- **몫공간(quotient space)** 에서는 원상이 열린 집합을 열린집합으로 둔다. 정사각형의 마주 보는 두 쌍의 변을 붙인 몫공간이 원환면(torus)이다.

무한 곱에서 위의 생성 방식을 좌표 유한 개만 제한하는 집합으로 바꾸어야 [Tychonoff 정리](tychonoff-theorem.md)가 성립한다. 이 정리는 [선택공리](axiom-of-choice.md)와 동치다.

## 분리 공리

서로 다른 두 점이 겹치지 않는 근방을 가지면 그 공간을 **Hausdorff 공간(Hausdorff space)** 이라 한다. Hausdorff 공간에서 수렴하는 점열의 극한은 유일하다. 거리 공간은 항상 Hausdorff 이지만, 점이 둘 이상인 비이산 위상에서는 상수 점열 $a,a,a,\dots$ 가 $a$ 와 $b$ 둘 다로 수렴한다. 점을 떼어내는 정도에 따른 등급은 [분리공리](separation-axioms.md)가 다룬다.

# 활용

## 함수해석학

수렴, 연속, 콤팩트성에 관한 정리를 거리 없이 증명해 두면 거리가 주어지지 않는 함수 공간에 그대로 적용된다. [Banach–Alaoglu 정리](banach-alaoglu.md)에서 쌍대공간의 닫힌 단위공은 노름 위상에서 콤팩트가 아니지만 약한 별 위상(weak-star topology)에서는 콤팩트이고, 이것이 변분법의 존재 정리에 쓰인다.

## 불변량과 분류

두 공간이 위상동형인지 판정하려면 위상동형으로 보존되는 양을 비교한다. 연결 성분의 개수, [Euler 지표](euler-characteristic.md), [기본군](fundamental-group.md), [호몰로지](homology.md) 군이 그런 불변량이고, 하나라도 다르면 두 공간은 위상동형이 아니다.

## 대수기하와 계산 이론

[대수다양체](algebraic-varieties.md)의 Zariski 위상(Zariski topology)은 다항식의 공통 영점 집합을 닫힌집합으로 둔다. [영역 이론](domain-theory.md)의 Scott 위상(Scott topology)은 프로그램의 부분 출력들의 순서에서 정의되고, 이 위상에서 연속인 함수가 [계산 가능성](computability.md)의 유한성 조건을 만족한다. 양의 차원 다양체의 Zariski 위상과 $a\lt b$ 인 두 원소가 있는 순서의 Scott 위상은 Hausdorff 가 아니므로 거리에서 오지 않는다.[^1]

[^1]: University of Toronto, *MAT327 Lecture Notes 1*. 열린집합의 합집합·교집합 공리와 연속성의 연결. https://www.math.toronto.edu/~herzig/MAT327-lecturenotes01.pdf

# 연관 문서

## 선수지식

- [연속함수](continuity.md)
- [위상수학 개관](topology-overview.md)

## 더 알아보기

### 공간의 성질

- [필터와 그물](filters-and-nets.md)
- [콤팩트성](compactness.md)
- [분리공리](separation-axioms.md)
- [연결성](connectedness.md)

### 대수적 불변량

- [기본군](fundamental-group.md)
- [단체 호몰로지](homology.md)

### 공간 위의 구조

- [측도](measure.md)
- [위상군](topological-groups.md)
- [다양체](manifolds.md)
- [층](sheaves.md)

#topology #set_theory #analysis
