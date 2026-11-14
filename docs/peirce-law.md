# Peirce 법칙

# 개요

**Peirce 법칙(Peirce's law)** 은 함의만으로 적은 논리식 $((A\to B)\to A)\to A$ 다. 진리표로 따지면 언제나 참이지만, 증명을 구성으로 읽는 [직관주의](intuitionism.md) 논리에서는 증명되지 않는다. 부정 기호 없이 함의만 쓰는 체계에서 고전 논리와 직관주의 논리가 어디서 갈리는지 물으면 답이 이 식 하나다. 직관주의 논리에 Peirce 법칙을 더하면 고전 논리가 되고, 증명을 프로그램으로 읽으면 이 식은 계산의 흐름을 되잡는 연산자의 타입이 된다.

# 직관

진리표로 확인한다. $A$ 가 참이면 식 전체가 결론 $A$ 때문에 참이다. $A$ 가 거짓이면 $A\to B$ 는 참이고, 따라서 $(A\to B)\to A$ 는 참에서 거짓으로 가는 함의라 거짓이다. 거짓을 가정한 함의는 참이므로 식 전체가 참이다.

직관주의 논리에서는 $(A\to B)\to A$ 의 증명을 받아 $A$ 의 증명을 만들어야 한다. 받은 것은 "$A\to B$ 의 증명을 주면 $A$ 의 증명을 돌려준다" 는 방법뿐이다. 그 방법을 쓰려면 $A\to B$ 의 증명, 곧 $A$ 의 증명을 $B$ 의 증명으로 바꾸는 방법을 먼저 내놓아야 하는데, $A$ 와 $B$ 가 아무 관계 없는 명제이면 그런 방법을 만들 재료가 없다. 고전 논리의 진리표 논증은 "$A$ 가 참이거나 거짓이다" 로 경우를 나눴고, 직관주의 논리는 이 나눔을 허용하지 않는다.

# 정의

## Peirce 법칙

명제 $A,B$ 에 대해 다음 식을 **Peirce 법칙** 이라 한다[^1].

$$
((A\to B)\to A)\to A
$$

$B$ 를 거짓 $\bot$ 으로 두면 $\neg A=A\to\bot$ 이므로 $(\neg A\to A)\to A$ 가 된다. 이것을 **consequentia mirabilis** 라 하고, "$A$ 가 아니라고 가정해 $A$ 가 나오면 $A$ 다" 라는 논법이다.

## 함의 논리

**함의 명제논리(implicational propositional calculus)** 는 연결사로 $\to$ 하나만 쓰고 추론 규칙으로 전건 긍정(modus ponens)만 쓰는 체계다. 직관주의 함의 논리의 공리는 다음 두 꼴이다.

$$
A\to(B\to A),\qquad (A\to(B\to C))\to((A\to B)\to(A\to C))
$$

# 성질

## Kripke 반례

[직관주의 논리의 Kripke 의미론](kripke-semantics.md)에서 Peirce 법칙을 거짓으로 만드는 모형이 있다. 세계 둘 $w_0\le w_1$ 을 두고 $A$ 는 $w_1$ 에서만 참, $B$ 는 어디서도 참이 아니게 한다.

- $w_1$ 에서 $A$ 가 참이고 $B$ 가 거짓이므로 $A\to B$ 는 $w_1$ 에서 성립하지 않고, 따라서 $w_0$ 에서도 성립하지 않는다.
- $A\to B$ 가 어느 세계에서도 성립하지 않으므로 $(A\to B)\to A$ 는 두 세계에서 모두 성립한다.
- Peirce 법칙이 $w_0$ 에서 성립하려면 $w_0$ 에서 $A$ 가 성립해야 하는데, 그렇지 않다.

건전성 정리에 따라 Peirce 법칙은 직관주의 논리에서 증명되지 않는다.

## 배중률과의 동치

직관주의 논리 위에서 다음 세 도식은 서로를 증명한다. 배중률(law of excluded middle) $A\lor\neg A$, 이중부정 제거(double negation elimination) $\neg\neg A\to A$, Peirce 법칙.

- 배중률에서 Peirce 법칙. $(A\to B)\to A$ 를 가정하고 $A\lor\neg A$ 로 나눈다. $A$ 이면 끝이다. $\neg A$ 이면 $A$ 에서 모순이 나오므로 아무 $B$ 나 나와 $A\to B$ 가 성립하고, 가정에 넣어 $A$ 를 얻는다.
- Peirce 법칙에서 배중률. Peirce 법칙에 $A$ 대신 $A\lor\neg A$, $B$ 대신 $\bot$ 을 넣는다. 남은 일은 $\neg(A\lor\neg A)\to A\lor\neg A$ 의 증명이다. $\neg(A\lor\neg A)$ 를 가정하면 $A$ 에서 $A\lor\neg A$ 가 나와 모순이므로 $\neg A$ 이고, 여기서 $A\lor\neg A$ 가 나온다.

## 함의 논리의 완전성

직관주의 함의 논리의 두 공리에 Peirce 법칙을 공리로 더한 체계는 고전 함의 논리와 같다. 곧 $\to$ 만으로 적힌 식 가운데 진리표로 언제나 참인 것이 전부 이 체계에서 증명된다[^2]. 부정이나 $\bot$ 이 없으므로 배중률과 이중부정 제거는 이 체계에서 적을 수 없고, 함의만으로 고전 논리를 얻는 데 필요한 공리가 Peirce 법칙이다.

# 활용

- [Curry–Howard 대응](curry-howard.md). Griffin 은 Peirce 법칙이 call/cc(call with current continuation) 같은 제어 연산자(control operator)의 타입임을 보였다[^3]. call/cc 는 함수 $k\colon A\to B$ 를 받는 함수에 현재 계산의 나머지를 $k$ 로 넘기고, $k$ 가 불리면 그 자리로 값 $A$ 를 들고 돌아간다. 고전 논리의 증명은 이런 연산자를 쓰는 프로그램으로 읽힌다.
- 증명 불가능성. 어떤 고전 정리의 증명이 직관주의적으로 바뀌지 않음을 보일 때, 그 정리가 Peirce 법칙이나 배중률을 함의한다는 것을 보이고 Kripke 반례를 쓴다.
- 이중부정 번역. Gödel–Gentzen 번역(Gödel–Gentzen translation)으로 옮긴 Peirce 법칙은 직관주의 논리에서 증명되고, 이것이 고전 논리의 증명을 직관주의 논리의 증명으로 옮기는 단계의 하나다.

[^1]: C. S. Peirce, "On the algebra of logic: a contribution to the philosophy of notation", *American Journal of Mathematics* 7 (1885).
[^2]: 이 공리화는 Tarski 와 Bernays 의 것이다. A. Church, *Introduction to Mathematical Logic*, Princeton University Press, 1956 이 함의 명제논리와 그 완전성을 다룬다.
[^3]: T. Griffin, "A formulae-as-types notion of control", *Principles of Programming Languages* 학술대회 논문집 (1990).

# 연관 문서

## 선수지식

- [직관주의 논리의 Kripke 의미론](kripke-semantics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#logic #computation
