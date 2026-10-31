# Boole 대수

# 개요

**Boole 대수(Boolean algebra)** 는 "합집합, 교집합, 여집합"의 규칙만 뽑아낸 대수 구조다. "비가 오거나 우산이 없다" 의 부정이 "비가 오지 않고 우산이 있다" 인 것과, 두 집합의 합집합의 여집합이 여집합들의 교집합인 것은 같은 규칙이다. Boole 대수는 이런 규칙을 항등식으로 모아, 집합, 명제, 논리회로의 계산을 같은 식 변형으로 처리한다.

# 직관

사흘 $X=\lbrace 1,2,3\rbrace$ 가운데 비가 온 날이 $A=\lbrace 1\rbrace$, 우산이 없던 날이 $B=\lbrace 2\rbrace$ 라 하자. "비가 오거나 우산이 없다" 가 거짓인 날은 $A\cup B=\lbrace 1,2\rbrace$ 의 여집합 $\lbrace 3\rbrace$ 이다. "비가 오지 않고 우산이 있다" 가 참인 날은 $\lbrace 2,3\rbrace\cap\lbrace 1,3\rbrace=\lbrace 3\rbrace$ 이고, 두 계산이 같은 답을 준다.

합집합, 교집합, 여집합은 이 밖에도 여러 등식을 만족한다. 이 등식들만 남기고 원소가 무엇인지는 잊으면, 명제의 "또는", "그리고", "아니다" 와 논리회로의 게이트에도 같은 등식이 성립한다. 그 공통 규칙을 공리로 적은 것이 Boole 대수다.

Boole 대수에서는 $a \vee \neg a = 1$ 과 $\neg\neg a = a$ 가 성립한다. 원소를 명제로 보면 앞의 것은 모든 명제가 참이거나 거짓이라는 요구이고, 뒤의 것은 부정을 두 번 하면 원래 명제라는 요구다.

함의가 있는 [격자](order-lattices.md)라고 해서 이 두 요구가 따라오지는 않는다. 열린집합 격자에서는 여집합이 격자 밖으로 나가므로 보수가 존재하지 않고, 그런 격자가 [Heyting 대수](heyting-algebras.md)다. Boole 대수는 보수의 존재를 공리로 요구한다.

# 정의

## 공리적 정의

**Boole 대수** 는 집합 $B$ 와 이항연산 $\wedge$ , $\vee$ , 단항연산 $\neg$ , 상수 $0$ , $1$ 의 조합으로, 모든 원소에 대해 다음이 성립하는 것이다.

$$
a \vee b = b \vee a, \qquad a \wedge b = b \wedge a
$$

$$
a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c), \qquad a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)
$$

$$
a \vee 0 = a, \qquad a \wedge 1 = a
$$

$$
a \vee \neg a = 1, \qquad a \wedge \neg a = 0
$$

직관 절의 $P(\lbrace 1,2,3\rbrace)$ 는 $\vee=\cup$, $\wedge=\cap$, $\neg$ 를 여집합, $0=\varnothing$, $1=\lbrace 1,2,3\rbrace$ 로 두면 Boole 대수다.

## 멱집합 대수, Lindenbaum–Tarski 대수, Boolean 환

멱집합 대수(power set algebra). [집합](sets.md) $X$ 에 대해 $P(X)$ 는 합집합, 교집합, 여집합으로 Boole 대수다. 이것이 원형이다. 더 일반적으로 $X$ 의 부분집합들 중 합집합, 교집합, 여집합에 닫힌 족을 **집합체(field of sets)** 라 하며, 이것도 Boole 대수다. 유한집합과 여유한집합들만 모은 족이 대표적인 부분 예다.

Lindenbaum–Tarski 대수(Lindenbaum–Tarski algebra). 고전 명제논리의 논리식들을 논리적 동치로 나눈 몫은 Boole 대수다. 연산은 연결사에서 유도되고 순서는 도출 가능성이다.

$$
[\varphi] \le [\psi] \iff \varphi \vdash \psi
$$

변수가 $n$ 개면 이 대수는 크기 $2$ 의 $2^n$ 거듭제곱, 즉 $n$ 개 생성원 위의 자유 Boole 대수다. 변수가 가산무한이면 원자가 하나도 없는 무한 대수가 된다.

Boole 환. 모든 원소가 멱등인 [환](rings.md), 즉 모든 $x$ 에 대해 $x$ 의 제곱이 $x$ 인 단위원 있는 가환환을 **Boole 환(Boolean ring)** 이라 한다. 두 구조는 다음 번역으로 서로 옮겨진다.

$$
x \wedge y = xy, \qquad x \vee y = x + y + xy, \qquad \neg x = 1 + x
$$

$$
x + y = (x \wedge \neg y) \vee (\neg x \wedge y)
$$

덧셈은 대칭차집합이다. 이 번역은 두 개념이 사실상 같은 것임을 보여 주며, 덕분에 [아이디얼과 몫환](ideals-quotient-rings.md)의 개념을 그대로 쓸 수 있다.

## 필터, 아이디얼, 초필터

$B$ 의 부분집합 $F$ 가 **필터(filter)** 라 함은 $1 \in F$ 이고, 위로 닫혀 있고, 유한 만남에 닫혀 있다는 뜻이다. $0$ 을 포함하지 않는 극대 필터를 **초필터(ultrafilter)** 라 한다. $P(\lbrace 1,2,3\rbrace)$ 에서 $1$ 을 포함하는 부분집합 전체는 초필터다.

# 성질

## Huntington 공리계

공리적 정의의 목록(Huntington 공리계, Huntington's axioms)에서 결합법칙, 멱등법칙, 흡수법칙, [De Morgan 법칙](de-morgan-laws.md), 보수의 유일성이 모두 따라 나온다. 특히 보수는 유일하므로 다른 연산들이 $\neg$ 를 결정한다.

## 격자로서의 Boole 대수

Boole 대수는 보수를 가지는 유계 분배격자와 같다. 여기서 [부분순서](partial-orders.md)는 다음으로 정의된다.

$$
a \le b \iff a \wedge b = a \iff a \vee b = b
$$

이 순서에 대해 $a \wedge b$ 는 하한, $a \vee b$ 는 상한이다. 함의는 다음처럼 정의할 수 있고, 이렇게 정의하면 Boole 대수는 $\neg\neg a = a$ 를 만족하는 Heyting 대수와 같아진다.

$$
a \to b \thickspace:=\thickspace \neg a \vee b
$$

## 초필터의 판정

$F$ 가 초필터일 필요충분조건은 모든 $a$ 에 대해 $a \in F$ 와 $\neg a \in F$ 중 정확히 하나가 성립하는 것이다. 초필터는 두 원소 Boole 대수로 가는 준동형과 일대일 대응하고, Boole 환에서는 [극대 아이디얼](prime-ideals.md)의 여집합이다.


## 유한 Boole 대수의 구조

$0$ 이 아닌 원소 $a$ 가 **원자(atom)** 라 함은 $0 \lt x \le a$ 인 $x$ 가 $a$ 뿐이라는 뜻이다.

유한 Boole 대수 $B$ 는 원자들의 집합 $\mathrm{At}(B)$ 의 멱집합 대수와 동형이다. 따라서 유한 Boole 대수의 크기는 항상 2의 거듭제곱이며, 크기가 같으면 동형이다.

*증명의 요지.* 각 $a$ 에 대해 $a$ 아래의 원자들을 모으는 사상 $a \mapsto \lbrace p \in \mathrm{At}(B) : p \le a\rbrace$ 를 본다. 유한성에서 $a$ 는 자기 아래 원자들의 이음과 같다(아니라면 차이 부분에서 더 작은 원소를 계속 잡아 무한 하강열이 나온다). 분배성에서 이 사상이 연산을 보존하고, 보수의 존재에서 단사임이 나온다. 전사성은 원자들의 임의의 부분집합의 이음을 취하면 된다.

무한에서는 이것이 깨진다. 가산 생성 자유 Boole 대수 처럼 원자가 전혀 없는 무한 대수(atomless)가 존재한다.

## Stone 표현 정리

Stone 표현 정리(Stone's representation theorem). 모든 Boole 대수 $B$ 는 어떤 집합체와 동형이다. Stone 이 1936 년에 증명했다. 더 정확히, $B$ 의 초필터 전체에 적절한 위상을 주면 콤팩트 Hausdorff 이고 완전분리된 공간 $S(B)$ 가 되고, $B$ 는 $S(B)$ 의 열린닫힌 집합들이 이루는 대수와 동형이다[^1].

*증명의 요지.* 각 $a$ 에 대해 $U_a$ 를 $a$ 를 포함하는 초필터들의 집합이라 하자. 이 집합들을 기저로 삼아 [위상](topology.md)을 준다. 사상 $a \mapsto U_a$ 가 연산을 보존함은 초필터의 성질에서 바로 나온다. 단사성이 핵심인데, $a \ne b$ 이면 어느 한쪽만 포함하는 초필터가 존재해야 한다. 이것이 Boolean 소 아이디얼 정리(Boolean prime ideal theorem)이며, [선택공리](axiom-of-choice.md)보다 약하지만 ZF(Zermelo–Fraenkel 집합론) 만으로는 증명되지 않는다.

이 대응은 Boole 대수의 [범주](category.md)와 Stone 공간의 범주 사이의 쌍대 동치로 확장된다. 대수의 질문이 위상의 질문으로 바뀌며, 예를 들어 $S(B)$ 의 [콤팩트성](compactness.md)는 명제논리의 compactness 정리와 같은 사실이다.

## 완전성과 고전 명제논리

Lindenbaum–Tarski 대수를 쓰면 다음이 나온다.

$$
\vdash \varphi \iff v(\varphi) = 1 \ \text{for every Boolean algebra valuation } v
$$

임의의 Boole 대수에서 값이 1이 아니면 초필터를 하나 잡아 두 원소 대수로 보낼 수 있다. 두 원소 대수만으로 충분한 점이 Heyting 경우와 다르고, 고전 명제논리는 진리표로 결정 가능하다.

# 활용

## 집합 연산과 확률

멱집합 대수는 집합론의 기본 계산 도구다. 사건들의 족이 합집합·여집합에 닫혀 있다는 요구가 [측도](measure.md)에서의 대수(algebra of sets) 개념이고, 여기에 가산 연산을 요구하면 $\sigma$ 대수가 된다. 측도를 영집합으로 나눈 몫인 measure algebra 는 원자가 없는 완비 Boole 대수의 대표적 예이며, [유한 확률 공간](probability.md)에서는 원자가 표본점이 된다. [포함배제 원리](inclusion-exclusion.md)도 이 대수 안의 항등식으로 읽을 수 있다.

## 논리회로와 최적화

디지털 회로의 게이트는 Boolean 연산이고, 회로 최소화는 같은 원소를 더 짧은 항으로 표현하는 문제다. 선언 정규형(disjunctive normal form, DNF)은 항상 존재하지만 크기가 지수적일 수 있고, 최소 크기 표현을 찾는 문제는 계산적으로 어렵다. 충족가능성 판정(satisfiability, SAT)은 Lindenbaum 대수에서 "주어진 원소가 $0$ 이 아닌가"를 묻는 것과 같다. 이 문제는 [NP-완전](np-completeness.md)(nondeterministic polynomial time)이다. 계산 복잡도 이론은 이것을 기준 문제로 삼는다.

## 모형론과 집합론

초필터는 모형을 만드는 도구다. 첨자 집합 위의 초필터로 구조들의 곱을 나누면 ultraproduct 가 되고, 이것이 [1차 논리](first-order-logic.md)의 compactness 정리에 대한 대수적 증명을 준다. 집합론에서는 [Boolean 값 모형](boolean-valued-models.md)이 forcing 의 한 형태로 쓰여, [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice, 곧 ZF 에 선택공리를 더한 것)에서 증명되지 않는 문장들의 독립성을 보이는 데 사용된다.

## 순서론에서의 위치

Boole 대수는 격자 이론의 여러 계층 중 가장 강한 조건을 만족하는 층에 있다. 분배성만 요구하면 분배격자, 여기에 상대 의사보수를 요구하면 Heyting 대수, 보수까지 요구하면 Boole 대수다. 이 계층은 각각 고전논리 이하의 논리 체계들과 정확히 대응하고, 포기하는 법칙마다 남는 구조가 다르다[^2].

[^1]: Stanford Encyclopedia of Philosophy, "The Mathematics of Boolean Algebra", https://plato.stanford.edu/entries/boolalg-math/
[^2]: Stanford Encyclopedia of Philosophy, "Intuitionistic Logic", https://plato.stanford.edu/entries/logic-intuitionistic/

# 연관 문서

## 선수지식

- [순서론의 격자](order-lattices.md)
- [집합](sets.md)

## 더 알아보기

- [Boolean 값 모형](boolean-valued-models.md)

#order_theory #logic
