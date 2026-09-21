# Heyting algebra

# 개요

Heyting algebra 는 유계 격자에 함의 연산을 하나 더 붙인 대수 구조다. 함의는 만남 연산의 오른쪽 수반으로 유일하게 결정되고, 이 조건 하나가 직관주의 명제논리의 정리를 대수적으로 재현한다.

Boolean algebra 가 고전 명제논리의 대수적 대응물이듯 Heyting algebra 는 [직관주의 논리](intuitionism.md)의 대수적 대응물이다. 차이는 배중률에 해당하는 항등식이 성립하지 않아도 된다는 것뿐이고, 분배법칙과 de Morgan 법칙의 절반과 이중부정 도입은 남는다.

주요 예는 위상공간의 열린집합 격자와 [Kripke 프레임](kripke-semantics.md)의 상향닫힌 집합 격자다. 두 예 모두 여집합이 구조를 벗어나기 때문에 배중률을 잃는다.

# 직관

고전논리에서 함의는 부정으로 환원된다.

$$
a \to b \thickspace=\thickspace \neg a \vee b
$$

부정을 가정할 수 없으면 함의를 따로 특징지어야 한다. $a \to b$ 는 $a$ 와 만나도 $b$ 를 넘지 않는 원소들 중 최대 원소로 정의되며, 이를 상대 의사보수라 한다. 부정은 $\neg a=a\to 0$ , 곧 $a$ 와 만나면 바닥이 되는 최대 원소다.

실직선의 열린집합에서 $A$ 를 0 을 뺀 실직선이라 하면 여집합이 한 점이고 그 안의 가장 큰 열린집합은 공집합이므로 $\neg A=\varnothing$ 이고 $A\vee\neg A$ 가 전체가 아니다. 여집합을 취하면 열린집합 밖으로 나가므로 안쪽으로 잘라 들여야 하고, 그 과정에서 경계가 버려진다.

[Kripke 의미론](kripke-semantics.md)에서 명제는 한 번 참이면 이후에도 참인 상향닫힌 집합이다. 상향닫힌 집합의 여집합은 하향닫힌 집합이라 명제가 되지 못하고, 상향닫힌 부분만 남긴 것이 부정이 된다.

```mermaid
graph TD
  L["유계 격자"] --> D["분배격자"]
  D --> H["Heyting algebra"]
  H --> B["Boolean algebra"]
  H --> F["complete Heyting algebra (frame)"]
  D --> DL["유한 분배격자 = 유한 Heyting algebra"]
  B --> P["멱집합 대수"]
  F --> O["위상공간의 열린집합 격자"]
```

# 정의

## 상대 의사보수

$(H, \wedge, \vee, 0, 1)$ 이 최소원 $0$ 과 최대원 $1$ 을 가지는 격자라 하자. 원소 $a$ 와 $b$ 에 대해

$$
\forall x \in H:\quad x \wedge a \le b \iff x \le c
$$

를 만족하는 $c$ 를 $b$ 에 대한 $a$ 의 **상대 의사보수**라 하고 $a \to b$ 로 쓴다. 두 원소가 같은 조건을 만족하면 서로를 넘지 않으므로 $c$ 는 유일하다. 동치로 $a \to b$ 는 집합

$$
\lbrace\thinspace x \in H : x \wedge a \le b \thinspace\rbrace
$$

의 최대원이다.

## Heyting algebra

**정의.** **Heyting algebra** 는 모든 $a,b$ 에 대해 상대 의사보수 $a \to b$ 가 존재하는 유계 격자 $H$ 다. 부정은

$$
\neg a \thickspace:=\thickspace a \to 0
$$

으로 정의한다.

수반 조건은 [부분순서](partial-orders.md)의 언어로 Galois 연결이다. 각 $a$ 마다 $(-) \wedge a$ 가 왼쪽 수반이고 $a \to (-)$ 가 오른쪽 수반이다. [범주](category.md)의 관점에서는 $H$ 를 얇은 범주로 볼 때 $(-) \wedge a$ 가 왼쪽 수반 [함자](functors.md) 라는 진술과 같다.

## 동치인 공리적 정의

수반 조건 대신 다음 항등식으로 정의해도 같다. 방정식으로만 쓰이므로 Heyting algebra 들의 모임은 variety 다.

$$
a \to a = 1, \qquad a \wedge (a \to b) = a \wedge b
$$

$$
b \wedge (a \to b) = b, \qquad a \to (b \wedge c) = (a \to b) \wedge (a \to c)
$$

## complete Heyting algebra

임의의 부분집합이 상한을 가지는 Heyting algebra 가 **complete Heyting algebra** 또는 frame 이다. 완비 격자에서 Heyting 구조가 존재할 필요충분조건은 무한 분배법칙

$$
a \wedge \bigvee_{i \in I} b_i \thickspace=\thickspace \bigvee_{i \in I} (a \wedge b_i)
$$

이며, 성립하면 $a \to b$ 를 위 집합의 상한으로 정의한다.

## 표준 예

**열린집합 격자.** [위상공간](topology.md) $X$ 의 열린집합 전체 $O(X)$ 는 포함관계로 complete Heyting algebra 다. $\mathrm{int}$ 를 내부라 하면 연산은 다음과 같다.

$$
U \to V = \mathrm{int}\big((X \setminus U) \cup V\big), \qquad \neg U = \mathrm{int}(X \setminus U)
$$

**상향닫힌 집합 격자.** 부분순서 집합 $(W, \le)$ 의 상향닫힌 집합 전체 $\mathrm{Up}(W)$ 는 교집합과 합집합으로 complete Heyting algebra 이고 함의는

$$
U \to V = \lbrace\thinspace w \in W : \forall v \ge w,\thickspace v \in U \Rightarrow v \in V \thinspace\rbrace
$$

다. [Kripke 의미론](kripke-semantics.md)의 강제 조건을 대수화한 것이다.

**Lindenbaum–Tarski 대수.** 직관주의 명제논리의 논리식을 상호 도출 가능성으로 나눈 몫은 Heyting algebra 이고 $[\varphi] \le [\psi]$ 는 $\varphi \vdash \psi$ 를 뜻한다. [동치관계](equivalence-relations.md)로 나누는 전형적인 구성이다.

# 성질

## 분배법칙

**정리.** 모든 Heyting algebra 는 분배격자다.

*증명 스케치.* $(-) \wedge a$ 가 왼쪽 수반이므로 존재하는 모든 상한을 보존하고, 특히 이항 상한을 보존하므로 $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$ 다. ∎

## 부정의 비대칭

다음이 항상 성립한다.

$$
a \le \neg\neg a, \qquad \neg\neg\neg a = \neg a, \qquad \neg(a \vee b) = \neg a \wedge \neg b
$$

$\neg\neg a \le a$ 와 $\neg(a \wedge b) = \neg a \vee \neg b$ 와 배중률 $a \vee \neg a = 1$ 은 일반적으로 성립하지 않는다.

## Boolean 이 되는 조건

**정리.** Heyting algebra $H$ 에 대해 다음은 동치다.

1. 모든 $a$ 에 대해 $a \vee \neg a = 1$ 이다.
2. 모든 $a$ 에 대해 $\neg\neg a = a$ 다.
3. $H$ 는 [Boolean algebra](boolean-algebras.md) 이며 $a \to b = \neg a \vee b$ 다.

*증명 스케치.* 1에서 2는 $a \vee \neg a = 1$ 의 양변에 $\neg\neg a$ 를 만나게 하고 $\neg a \wedge \neg\neg a = 0$ 을 쓴다. 2에서 3은 $\neg$ 가 대합이 되어 de Morgan 법칙이 양방향 모두 회복되고 의사보수가 보수가 된다. 3에서 1은 자명하다. ∎

## 정칙 원소와 Glivenko 정리

$\neg\neg a = a$ 인 원소를 **정칙**이라 한다. 정칙 원소 전체는 $H$ 의 부분격자가 아니지만, 만남과 $\neg$ 를 그대로 쓰고 이음을 $a \sqcup b := \neg(\neg a \wedge \neg b)$ 로 정의하면 Boolean algebra 가 된다. 사상 $a \mapsto \neg\neg a$ 는 그 Boolean algebra 로 가는 전사 준동형이다.

논리 쪽 대응물이 Glivenko 정리다. 명제논리식 $\varphi$ 가 고전논리에서 증명 가능한 것과 $\neg\neg\varphi$ 가 직관주의논리에서 증명 가능한 것은 동치이므로, 고전논리는 이중부정을 통해 직관주의논리 안에 들어앉는다.

## 건전성과 완전성

**정리.** 직관주의 명제논리(IPC)에 대해

$$
\mathrm{IPC} \vdash \varphi \iff v(\varphi) = 1 \ \text{for every Heyting algebra } H \text{ and valuation } v
$$

가 성립한다.

*증명 스케치.* 건전성은 공리마다 수반 조건으로 확인한다. 완전성은 Lindenbaum–Tarski 대수를 반례 모형으로 쓴다. $\varphi$ 가 증명 불가능하면 몫 대수에서 $[\varphi] \neq 1$ 이다. ∎

유한 모형 성질이 따라붙는다. IPC 에서 증명 불가능한 식은 어떤 유한 Heyting algebra 에서 값이 1 이 아니게 되므로 IPC 는 결정 가능하다. Boolean 경우와 달리 크기 상한은 상수가 아니라 식의 크기에 의존한다.

## 유한 Heyting algebra 와 Kripke 프레임

**정리(Birkhoff 표현).** 유한 분배격자는 그 join-기약 원소들의 부분순서 집합의 하향닫힌 집합 격자와 동형이다.

유한 격자에서는 무한 분배법칙이 유한 분배법칙과 같으므로 다음이 나온다.

**따름정리.** 유한 Heyting algebra 와 유한 분배격자는 같은 것이다. Heyting 구조는 존재하면 유일하므로 유한 분배격자에 함의를 붙이는 방법은 정확히 하나다.

유한 Kripke 프레임과 유한 Heyting algebra 는 서로 번역된다. 프레임의 상향닫힌 집합 격자를 취하면 대수가 되고, 대수의 소 필터들을 포함관계로 세우면 프레임이 된다. 무한 경우에는 Esakia 쌍대성이 여기에 위상을 더해 대응을 만든다.

```mermaid
graph LR
  K["Kripke 프레임 (W, 순서)"] -->|"상향닫힌 집합"| H["Heyting algebra Up(W)"]
  H -->|"소 필터"| K
  H -->|"Lindenbaum 대수"| I["직관주의 명제논리"]
  I -->|"건전성 / 완전성"| H
  H -->|"이중부정 정칙 원소"| B["Boolean algebra"]
  B -->|"Glivenko 번역"| C["고전 명제논리"]
```

## 최소 반례

두 세계 $w_0\lt w_1$ 로 된 프레임의 상향닫힌 집합 격자에서 함의와 부정을 계산한다.

원소는 공집합과 $\lbrace w_1\rbrace$ 과 $\lbrace w_0, w_1\rbrace$ 셋이다. $A = \lbrace w_1\rbrace$ 에서 $\neg A$ 가 공집합이므로 $A \vee \neg A$ 는 전체가 아니고, $\neg\neg A$ 는 전체이므로 이중부정 제거도 실패한다. 이 세 원소 사슬은 배중률을 만족하지 않는 가장 작은 Heyting algebra 이고 Gödel 의 3치 대수라 부른다.

# 활용

## 직관주의 수학의 의미론

Heyting algebra 는 [직관주의](intuitionism.md)의 논리를 대수로 고정한다. $a \to b$ 가 최대원으로 정의된다는 것은 함의가 자료가 아니라 변환 가능성의 한계로 규정된다는 뜻이다. Tarski 의 위상적 해석은 열린집합 격자만으로 IPC 가 완전함을 보이고, 실직선 하나로 반례를 모두 만든다[^1].

## 중간논리

IPC 와 고전논리 사이의 논리를 중간논리라 하고, 각 중간논리는 Heyting algebra 의 어떤 부분 종족에 대응한다. $(a \to b) \vee (b \to a) = 1$ 을 더하면 Gödel–Dummett 논리가, $\neg a \vee \neg\neg a = 1$ 을 더하면 de Morgan 법칙이 회복된 논리가 나온다. 대수 종족의 격자 구조가 논리 확장의 격자 구조와 같아 논리학의 질문이 보편대수의 질문이 된다.

## 위상수학과 locale

frame 은 점 없이 공간을 다루는 locale 이론의 기본 대상이다. 공간에서 열린집합 격자를 얻는 대응이 [함자](functors.md) 이고 그 반대 방향이 점을 복원하려는 시도다. 선택공리 없이 compactness 를 다룰 수 있어 [선택공리](axiom-of-choice.md) 사용을 추적하는 구성적 수학에서 쓰인다.

## 타입 이론과 프로그램

[Curry–Howard 대응](curry-howard.md)에서 직관주의 함의는 함수 타입에 대응한다. [Lambda calculus](lambda-calculus.md)의 단순 타입 체계에서 타입이 붙는 항의 존재와 그 타입에 해당하는 명제의 IPC 증명 가능성이 같다. Heyting algebra 는 증명 대상들의 범주에서 사상의 개수를 잊고 얻는다. topos 에서는 부분대상 분류자가 내부 Heyting algebra 가 되어 topos 안의 수학이 직관주의 논리를 따른다.

## 다른 기초론과의 위치

Heyting algebra 가 다루는 체계는 배중률을 부정하지 않고 가정하지 않는다. 이는 [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md)이 요구한 무모순성 증명과도 [Gödel 불완전성 정리](godel-incompleteness.md)가 드러낸 한계와도 다른 층위의 문제다. 배중률의 지위는 증명 가능성이 아니라 의미론의 선택 문제이고, Heyting algebra 가 그 선택지를 격자 하나로 요약한다[^2].

[^1]: Stanford Encyclopedia of Philosophy, "Intuitionistic Logic", https://plato.stanford.edu/entries/logic-intuitionistic/
[^2]: Stanford Encyclopedia of Philosophy, "The Mathematics of Boolean Algebra", https://plato.stanford.edu/entries/boolalg-math/

# 연관 문서

## 선수지식

- [직관주의 논리의 Kripke 의미론](kripke-semantics.md)
- [순서론의 격자](order-lattices.md)

## 더 알아보기

아직 연결한 문서가 없다.

#order_theory #logic
