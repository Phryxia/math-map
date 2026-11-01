# 분리공리

# 개요

**분리공리(separation axioms)** 는 위상공간에서 서로 다른 점이나 닫힌집합을 열린집합으로 갈라 놓을 수 있는 정도를 재는 조건들이다. 두 점 $\lbrace a,b\rbrace$ 에 열린집합이 $\varnothing$ 과 전체뿐인 위상을 주면 $a$ 만 담는 열린집합이 없고, [실수](real-numbers.md)로 가는 [연속함수](continuity.md)는 모두 상수여서 두 점을 구별하지 못한다. 분리공리는 갈라 놓는 정도를 $T_0$ 부터 $T_4$ 까지 단계로 나누고, 단계가 높을수록 점과 집합을 구별하는 연속함수가 많이 존재한다.

# 직관

위상공간에서 점 두 개를 구별하려면 한쪽만 담는 열린집합이 있어야 한다. $X=\lbrace a,b\rbrace$ 에 열린집합을 $\varnothing$ 과 $X$ 뿐인 위상을 주면 $a$ 만 담는 열린집합이 없다. $f\colon X\to\mathbb R$ 이 연속이면 $f^{-1}$ 이 열린집합을 열린집합으로 보내야 하는데 열린집합이 둘뿐이므로 $f$ 는 상수다. 두 점을 구별하는 연속함수가 하나도 없다.

[거리공간](metric-spaces.md)에서는 $x\ne y$ 이면 $r=d(x,y)/2$ 로 두 공 $B(x,r)$ 과 $B(y,r)$ 이 겹치지 않고, 함수 $f(z)=d(z,x)$ 가 두 점에서 다른 값을 준다. 거리 없이 같은 일을 하려면 열린집합만으로 무엇을 요구해야 하는지를 적어야 하고, 그 요구의 강도가 분리공리의 단계를 이룬다.

# 정의

## 계열

[위상 공간](topology.md) $X$ 에 대해 다음을 정의한다.

| 조건 | 요구 |
| --- | --- |
| $T_0$ | 서로 다른 두 점 가운데 적어도 한쪽만 담는 열린집합이 있다 |
| $T_1$ | 서로 다른 두 점 각각에 대해 그 점만 담고 다른 점은 담지 않는 열린집합이 있다 |
| $T_2$ (Hausdorff 공간, Hausdorff space) | 서로 다른 두 점이 겹치지 않는 열린집합에 각각 들어간다 |
| $T_3$ (정칙 공간, regular space) | $T_1$ 이고, 점과 그 점을 담지 않는 닫힌집합이 겹치지 않는 열린집합으로 갈린다 |
| $T_4$ (정규 공간, normal space) | $T_1$ 이고, 겹치지 않는 두 닫힌집합이 겹치지 않는 열린집합으로 갈린다 |

- 직관의 두 점 공간 $\lbrace a,b\rbrace$ 에 열린집합이 $\varnothing$, $X$ 뿐인 위상은 $T_0$ 도 아니다.
- $\lbrace a,b\rbrace$ 에 열린집합을 $\varnothing,\lbrace a\rbrace,X$ 로 주면 $T_0$ 이지만 $T_1$ 이 아니다. $b$ 만 담는 열린집합이 없다.
- 무한집합에 여집합이 유한한 집합과 공집합을 열린집합으로 주면 $T_1$ 이지만 $T_2$ 가 아니다. 공집합이 아닌 두 열린집합은 항상 만난다.
- 직관의 논증으로 거리공간은 $T_2$ 이고, 실제로 $T_4$ 다.

# 성질

## 계열의 함의

$T_1$ 은 한 점 집합이 닫혀 있다는 것과 동치다. 계열은 위로 갈수록 강하고 $T_4\Rightarrow T_3\Rightarrow T_2\Rightarrow T_1\Rightarrow T_0$ 이다. $T_1$ 이 없으면 비분리 위상(indiscrete topology)도 정칙 조건과 정규 조건을 만족해 계열이 함의 관계를 이루지 않는다.

## 콤팩트 Hausdorff

$X$ 가 [콤팩트](compactness.md)이고 Hausdorff 이면 $T_4$ 다. 콤팩트 공간의 닫힌 부분집합은 콤팩트이고, 콤팩트 집합과 그 밖의 점은 Hausdorff 조건을 유한 번 써서 겹치지 않는 열린집합으로 갈린다. 같은 논법을 두 콤팩트 집합에 쓰면 정규성이 나온다.
## Urysohn 보조정리

$X$ 가 정규이고 $A,B$ 가 겹치지 않는 닫힌집합이면, $f\colon X\to\lbrack0,1\rbrack$ 이 연속이고 $A$ 에서 $0$ , $B$ 에서 $1$ 인 것이 존재한다.

증명의 요지. $\lbrack0,1\rbrack$ 안의 유리수로 색인된 열린집합족 $U_q$ 를 $p\lt q$ 이면 $\overline{U_p}\subseteq U_q$ 가 되도록 정규성을 반복 적용해 만든다. $f(x)=\inf\lbrace q:x\in U_q\rbrace$ 로 두면 이 포함관계가 $f$ 의 연속을 준다.

닫힌집합을 가르는 연속함수의 존재가 정규성과 동치라는 뜻이다. 역방향은 $f^{-1}(\lbrack 0,1/2))$ 과 $f^{-1}((1/2,1\rbrack)$ 이 갈라 주는 열린집합이다.

## Tietze 확장 정리

$X$ 가 정규이고 $A\subseteq X$ 가 닫힌집합이면, $A$ 위의 유계 연속함수는 $X$ 전체로 연속 확장된다.

Urysohn 보조정리로 만든 함수를 써서 오차를 $2/3$ 배씩 줄이는 근사열을 만들고, 그 합이 균등수렴하므로 확장이 연속이다([균등수렴](uniform-convergence.md)).

## Urysohn 거리화 정리

제2 가산이고 정칙인 위상공간은 거리화 가능하다.

증명의 요지. 가산 기저의 쌍마다 Urysohn 보조정리로 함수를 하나씩 얻어 $X$ 를 $\lbrack0,1\rbrack^{\mathbb N}$ 에 심는다. 이 곱공간은 거리화 가능하므로 상 위의 거리를 $X$ 의 거리로 쓴다.

## 유전되지 않는 성질

정규성은 부분공간과 곱으로 유전되지 않는다. Sorgenfrey 직선(Sorgenfrey line)은 정규이지만 그 제곱은 정규가 아니다. 정칙성과 Hausdorff 성질은 부분공간과 곱에서 유지된다.

콤팩트성도 임의 곱에서 유지된다([Tychonoff 정리](tychonoff-theorem.md)). 콤팩트 Hausdorff 공간의 곱으로 제한한 판본은 [선택공리](axiom-of-choice.md)보다 약한 초필터 보조정리(ultrafilter lemma)로 증명된다.

# 활용

- Urysohn 보조정리가 정규 공간 위에 충분히 많은 연속함수를 준다. 그 함수들이 만드는 대수에 [Stone–Weierstrass 정리](stone-weierstrass.md)를 적용해 근사를 얻는다.
- 점과 닫힌집합을 연속함수로 가를 수 있는 완전정칙 공간(completely regular space)을 $\lbrack0,1\rbrack$ 값 연속함수들의 곱에 심고 닫힘을 취하면 [Stone–Čech 콤팩트화](stone-cech-compactification.md)가 된다. Tychonoff 정리가 그 곱의 콤팩트성을 보증한다.
- 단위공이 약 $\ast$ 위상에서 콤팩트라는 [Banach–Alaoglu 정리](banach-alaoglu.md)의 증명이 Tychonoff 정리를 쓴다([Banach 공간](banach-spaces.md)).
- Hausdorff 조건이 없으면 수렴하는 점열의 극한이 유일하지 않고 단위 분할(partition of unity)이 만들어지지 않는다. 그래서 [다양체](manifolds.md)의 정의에 이 조건을 넣는다.

# 연관 문서

## 선수지식

- [위상 공간](topology.md)
- [콤팩트성](compactness.md)

## 더 알아보기

- [Stone–Čech 콤팩트화](stone-cech-compactification.md)
- [Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)

#topology #analysis #set_theory
