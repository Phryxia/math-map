# Löwenheim–Skolem 정리

# 개요

**Löwenheim–Skolem 정리(Löwenheim–Skolem theorem)** 는 무한 모형을 가지는 [1차 논리](first-order-logic.md)의 이론이 온갖 크기의 모형을 가진다는 정리다. 자연수의 덧셈과 곱셈에 관해 참인 문장을 모두 공리로 삼아도, 그 공리를 전부 만족하면서 자연수보다 훨씬 많은 원소를 가진 구조가 존재한다. Löwenheim–Skolem 정리는 1차 논리의 공리가 무한 구조의 크기를 정하지 못한다는 것을 보이고, 이론마다 원하는 크기의 모형을 골라 쓰게 한다.

# 직관

순서 기호 $\lt$ 하나로 문장 세 개를 쓴다. $\lt$ 는 선형 순서다. 서로 다른 두 원소 사이에는 다른 원소가 있다. 가장 작은 원소도 가장 큰 원소도 없다. 유리수의 순서 $(\mathbb Q,\lt)$ 는 세 문장을 모두 만족한다. 두 유리수 $a\lt b$ 사이에는 $(a+b)/2$ 가 있다.

[실수](real-numbers.md)의 순서 $(\mathbb R,\lt)$ 도 같은 세 문장을 만족한다. 유리수는 $q_1,q_2,q_3,\dots$ 으로 줄 세울 수 있고 실수는 줄 세울 수 없으니, 두 구조는 원소 수가 다르다. 세 문장은 원소 수를 정하지 못했다.

거꾸로 $(\mathbb R,\lt)$ 에서 출발해 원소를 덜어 낸다. "$0$ 과 $1$ 사이에 원소가 있다" 는 $\mathbb R$ 에서 참이고 그 증인 $1/2$ 이 남아 있어야 덜어 낸 구조에서도 참으로 남는다. 문장 하나는 원소를 유한 개만 언급하고 증인을 유한 개만 요구한다. 문장이 셀 수 있게 많으면 증인도 셀 수 있게 많으므로, 증인만 모아도 셀 수 있는 구조가 나온다. $\mathbb Q$ 가 그런 구조다.

같은 일이 어느 무한 구조에서나 일어난다. 언어의 기호가 셀 수 있게 많은 이론이 무한 모형을 하나 가지면 셀 수 있는 모형도, 그보다 큰 어떤 크기의 모형도 가진다. 이것이 Löwenheim–Skolem 정리다.

# 정의

## 이론과 모형

언어 $L$ 의 문장 집합 $T$ 를 이론이라 한다. 구조 $M$ 이 $T$ 의 모든 문장을 만족하면 $M$ 을 $T$ 의 모형이라 하고, 모형이 존재하면 $T$ 를 만족 가능(satisfiable)하다고 한다. 구조의 크기는 논의 영역의 [기수](cardinality.md)로 잰다. 직관 절의 세 문장을 $T$ 라 하면 $(\mathbb Q,\lt)$ 는 크기 $\aleph\_0$ 인 모형이고 $(\mathbb R,\lt)$ 는 크기 $2^{\aleph\_0}$ 인 모형이다.

## 부분구조

구조 $M$ 의 **부분구조(substructure)** $N$ 은 논의 영역이 $M$ 의 부분집합이고, 상수를 포함하고 함수에 닫혀 있으며, 기호의 해석이 $M$ 의 해석을 $N$ 으로 제한한 것인 구조다. 자연수의 순서 $(\mathbb N,\lt)$ 는 정수의 순서 $(\mathbb Z,\lt)$ 의 부분구조다.

## 기본 부분구조

$N$ 이 $M$ 의 부분구조이고, 모든 논리식 $\varphi$ 와 $N$ 의 원소들의 모든 튜플 $\bar a$ 에 대해 다음이 성립하면 $N$ 을 $M$ 의 **기본 부분구조(elementary substructure)** 라 하고 $N\preccurlyeq M$ 으로 쓴다.

$$
N \models \varphi(\bar{a}) \iff M \models \varphi(\bar{a})
$$

$(\mathbb N,\lt)$ 는 $(\mathbb Z,\lt)$ 의 기본 부분구조가 아니다. 문장 $\exists x\thinspace(x\lt 0)$ 은 $\mathbb Z$ 에서 증인 $-1$ 로 참이고, $\mathbb N$ 에는 증인이 없어 거짓이다. 반면 $(\mathbb Q,\lt)\preccurlyeq(\mathbb R,\lt)$ 이다. 직관 절의 세 문장이 이루는 이론은 한정사 소거(quantifier elimination)를 가지므로, 유리수 매개변수를 쓴 논리식의 참거짓은 매개변수 사이의 순서만으로 정해지고 $\mathbb Q$ 에서와 $\mathbb R$ 에서 같다.

## 정리의 진술

하향 정리(downward theorem). $M$ 이 언어 $L$ 의 무한 구조이고 $A \subseteq M$ 이라 하자. 그러면 $A$ 를 포함하는 기본 부분구조 $N \preccurlyeq M$ 이 존재하며, 그 크기는 다음을 넘지 않는다.

$$
|N| \le \max\big(|A|,\thinspace |L|,\thinspace \aleph_0\big)
$$

$M=(\mathbb R,\lt)$, $A=\lbrace 0,1\rbrace$ 이면 $N=(\mathbb Q,\lt)$ 가 이런 기본 부분구조이고 크기는 $\aleph\_0$ 다.

상향 정리(upward theorem). $M$ 이 무한 구조이고 기수 $\kappa$ 가 $|M|$ 과 $|L|$ 이상이면, $M$ 을 기본 부분구조로 가지는 크기 $\kappa$ 의 구조가 존재한다. $M=(\mathbb Q,\lt)$, $\kappa=2^{\aleph\_0}$ 이면 $(\mathbb R,\lt)$ 가 이런 구조다.

두 정리를 합치면, 무한 모형을 가지는 이론은 $\max(|L|,\aleph\_0)$ 이상의 모든 기수에서 모형을 가진다.

# 성질

## 하향 정리의 증명

Tarski–Vaught 판정(Tarski–Vaught test)을 쓴다. 부분구조 $N$ 이 기본 부분구조일 필요충분조건은, $N$ 의 원소들을 매개변수로 하는 논리식 $\exists x\thinspace \varphi(x, \bar{a})$ 가 $M$ 에서 참일 때마다 그것을 만족하는 증인이 $N$ 안에 이미 있다는 것이다.

각 논리식마다 증인을 골라 주는 함수, 곧 Skolem 함수(Skolem function)를 정하고, $A$ 에서 출발해 이 함수들로 닫는다. 논리식은 언어 크기만큼 있고 각 함수는 유한 튜플에만 적용되므로 폐포의 크기가 위의 상한을 넘지 않는다. 증인을 고르는 단계에서 [선택공리](axiom-of-choice.md)를 쓴다.

## 콤팩트성 정리

콤팩트성 정리(compactness theorem). 1차 이론 $T$ 의 모든 유한 부분집합이 만족 가능하면 $T$ 도 만족 가능하다. 동치로, $T$ 가 문장 $\varphi$ 를 논리적으로 함의하면 $T$ 의 어떤 유한 부분집합이 이미 $\varphi$ 를 함의한다.

Gödel 의 완전성 정리(completeness theorem)로 함의와 도출 가능성이 일치한다.

$$
T \models \varphi \iff T \vdash \varphi
$$

$T$ 가 만족 가능하지 않다고 하자. 그러면 $T \vdash \bot$ 다. 도출은 유한 길이의 기호열이므로 $T$ 의 유한히 많은 문장 $T_0$ 만 사용하고, $T_0 \vdash \bot$ 이다. 건전성으로 $T_0$ 는 만족 가능하지 않다. 대우가 주장이다.

완전성 정리를 거치지 않는 증명도 있다. 유한 부분집합의 모형들을 초필터로 묶은 [초곱](ultraproducts.md)이 $T$ 의 모형이 된다. 명제 논리에서는 이 정리가 [Boole 대수](boolean-algebras.md)의 Stone 공간이 [콤팩트성](compactness.md)을 가진다는 사실과 같다.

## 상향 정리의 증명

$M$ 의 원소마다 상수 기호를 붙이고, $M$ 에서 참인 문장 전체인 기본 도형(elementary diagram)을 이론에 넣는다. 여기에 새 상수 기호 $\kappa$ 개를 추가하고, 서로 다른 두 새 상수가 다르다는 문장을 모두 넣는다. 유한 부분집합은 새 상수를 유한히 많이 언급하므로, 무한 구조 $M$ 의 서로 다른 원소들로 해석하면 만족된다. 콤팩트성 정리로 전체가 모형을 가지고, 그 모형은 $M$ 을 기본 부분구조로 포함하며 적어도 $\kappa$ 개의 원소를 가진다. 크기를 정확히 $\kappa$ 로 맞추려면 하향 정리를 한 번 더 쓴다.

## 비표준 모형

$\mathrm{Th}(\mathbb N)$ 을 표준 자연수 구조 $(\mathbb N,+,\cdot,0,1,\lt)$ 에서 참인 모든 문장의 집합이라 하자. 새 상수 $c$ 를 더하고 각 자연수 $n$ 에 대해 $c$ 가 $n$ 보다 크다는 문장을 넣는다. 유한 부분집합은 $c$ 를 큰 자연수로 해석해 만족되므로 콤팩트성 정리로 전체 이론의 모형 $M$ 이 존재한다. $M$ 은 $\mathbb N$ 과 정확히 같은 1차 문장들을 만족하지만 모든 표준 자연수보다 큰 원소를 가진다.

가산 비표준 모형의 순서형은 표준 부분 $\mathbb N$ 뒤에, $\mathbb Q$ 의 각 점마다 $\mathbb Z$ 사슬 하나를 놓은 꼴이다.

$$
\mathbb{N} \thickspace+\thickspace \mathbb{Z} \cdot \mathbb{Q}
$$

Tennenbaum 정리(Tennenbaum's theorem)에 따르면 덧셈과 곱셈이 계산 가능한 가산 비표준 모형은 존재하지 않는다.

같은 방법을 실수 순서체 $(\mathbb R,+,\cdot,0,1,\lt)$ 의 1차 이론에 적용하면 모든 실수보다 큰 원소 $c$ 를 가진 초실수체(hyperreal field)를 얻는다. $1/c$ 는 $0$ 이 아니면서 모든 양의 실수보다 작은 무한소다. Robinson 의 [비표준 해석학](nonstandard-analysis.md)은 이 구조 위에서 극한과 미분을 무한소로 직접 다룬다[^1]. Archimedes 성질은 1차 문장이 아니므로 초실수체로 옮겨 가지 않는다.

## Skolem 역설

[ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)가 무모순이면 ZFC 는 완전성 정리로 모형을 가지고, 하향 정리로 가산 모형 $M$ 을 가진다. 그런데 ZFC 는 "비가산 집합이 존재한다" 를 증명한다. 가산 모형 안에 비가산 집합이 있다는 이 상황을 Skolem 역설(Skolem's paradox)이라 한다.

비가산성은 모형에 상대적인 성질이다. $M$ 이 $x$ 를 비가산이라고 판정한다는 것은 "$x$ 와 $\omega$ 사이의 전단사가 $M$ 안에 없다" 는 뜻이다. 바깥에서 보면 $x$ 의 원소들은 가산 개이고 전단사도 존재하지만, 그 전단사가 $M$ 의 원소가 아니다[^2].

1차 논리로 쓴 집합론은 의도한 해석을 유일하게 고정하지 못한다. 이 한계는 [Gödel 불완전성 정리](godel-incompleteness.md)의 한계와 다르다. 불완전성 정리는 증명할 수 없는 문장의 존재를 말하고, Skolem 역설은 같은 문장들을 만족하는 크기가 다른 모형의 존재를 말한다.

## 1차 논리로 정의할 수 없는 성질

유한성. 유한 구조에서만 참이고 원소 수가 얼마든 유한 구조는 전부 만족하는 1차 문장 집합은 없다. 있다고 하면 그 이론에 "원소가 $n$ 개 이상" 이라는 문장들을 모두 더한 이론의 유한 부분집합이 모두 만족 가능하므로, 콤팩트성 정리로 무한 모형이 생겨 모순이다.

가산성. 무한 모형이 모두 가산인 1차 이론은 없다. 상향 정리가 비가산 모형을 만든다. 완비 순서체는 동형 차이로 $\mathbb R$ 하나뿐이고 1차 이론은 다른 크기의 모형도 가지므로, 실수체의 [완비성](completeness.md)도 1차 문장으로 쓸 수 없다. 군의 torsion 성과 [그래프](graphs.md)의 연결성은 콤팩트성 정리로 같은 꼴의 논증을 거쳐 1차로 쓸 수 없음이 증명된다.

표준 모형의 유일성. [Peano 공리](peano-axioms.md)의 1차 이론은 비표준 모형을 가지고, 실수 순서체의 1차 이론은 초실수체를 모형으로 가진다. 무한 구조를 동형 차이까지 고정하는 1차 이론은 없다. 남는 것은 한 기수에서 모형이 동형 차이로 하나뿐이라는 범주성(categoricity)이고, [Morley 범주성 정리](morley-categoricity.md)에 따르면 가산 언어의 이론이 비가산 기수 하나에서 범주적이면 모든 비가산 기수에서 범주적이다.

2차 논리(second-order logic)는 이 대상들을 정의할 수 있지만 완전성 정리와 콤팩트성 정리가 성립하지 않는다. Lindström 정리(Lindström's theorem)에 따르면 콤팩트성과 하향 Löwenheim–Skolem 성질을 함께 가지는 논리 가운데 표현력이 가장 큰 것은 1차 논리다.

# 활용

## 모형 계수 문제

[모형론](model-theory.md)에서 무한 모형을 가지는 이론은 모든 충분히 큰 크기에 모형을 가지므로, 물음은 "각 기수에서 동형이 아닌 모형이 몇 개인가" 로 바뀐다. 이 계수 문제를 다루는 것이 [안정 이론](stable-theories.md)과 분류 이론(classification theory)이다[^3].

## 대수에서의 이전 원리

"표수 $0$ 의 대수적으로 닫힌 체에서 성립하는 1차 문장은 충분히 큰 소수 $p$ 마다 표수 $p$ 의 대수적으로 닫힌 체에서도 성립한다" 는 Lefschetz 원리(Lefschetz principle)는 콤팩트성 정리로 증명된다. 유한 그래프의 색칠을 무한 그래프로 옮기는 [de Bruijn–Erdős 정리](de-bruijn-erdos-theorem.md)도 콤팩트성 정리로 증명된다.

## 비표준 해석학

초실수체 위에서 극한 논증이 무한소의 곱셈과 나눗셈으로 바뀐다. 옮겨 가는 명제는 1차 문장뿐이므로, 어떤 논증이 옮겨 가는지는 그 명제가 1차 문장인지로 판별한다.

## 집합론의 독립성 증명

Skolem 역설은 형식 집합론이 하나의 집합 우주를 지목하지 못함을 보인다. [연속체 가설](continuum-hypothesis.md)의 독립성도 같은 한계에서 나온다. [강제법](forcing.md)으로 독립성을 증명할 때 ZFC 의 가산 모형에서 출발한다.

[^1]: Stanford Encyclopedia of Philosophy, "First-order Model Theory", https://plato.stanford.edu/entries/modeltheory-fo/
[^2]: Stanford Encyclopedia of Philosophy, "Skolem's Paradox", https://plato.stanford.edu/entries/paradox-skolem/
[^3]: Stanford Encyclopedia of Philosophy, "Model Theory", https://plato.stanford.edu/entries/model-theory/

# 연관 문서

## 선수지식

- [1차 논리](first-order-logic.md)
- [기수](cardinality.md)

## 더 알아보기

- [모형론](model-theory.md)

#logic #set_theory #foundations #theorem
