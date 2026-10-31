# 논리주의

# 개요

**논리주의(logicism)** 는 수학이, 적어도 산술이, 논리로 환원된다는 주장이다. $2+2=4$ 가 왜 참인지 물으면 덧셈의 정의로 답할 수 있지만, 그 정의에 쓰인 수 $2$ 와 $4$ 자체가 무엇인지는 답이 남는다. 논리주의는 수를 "그 개념에 속하는 대상이 몇 개인가" 같은 논리적 개념으로 정의하고, 산술의 정리를 논리 법칙만으로 증명해 이 물음에 답하려 한다.

# 직관

"수 3 이란 무엇인가" 에 답하려면 3 을 무엇에 대해 말하는지부터 봐야 한다. "마구간에 말이 세 마리 있다" 에서 말 한 마리는 셋이 아니므로 3 은 말 각각의 성질이 아니다. 3 은 "마구간의 말임" 이라는 개념의 성질이다. Frege 는 이렇게 수를 대상이 아니라 개념에 붙인다.

그다음 물음은 두 개념이 언제 같은 수를 가지느냐다. 마구간에 안장이 걸려 있으면, 말 한 마리와 안장 하나를 짝지어 남는 말도 남는 안장도 없을 때 수를 세지 않고도 개수가 같다. 이 짝짓기를 전단사 [함수](functions.md)로 쓴 것이 동수성이다. 두 직선이 평행하다는 관계에서 "직선의 방향" 을 [동치류](equivalence-relations.md)로 얻듯이, Frege 는 동수성에서 수라는 대상을 얻는다.

# 정의

## 동수성

**동수성(equinumerosity)** 은 두 개념 $F$, $G$ 사이의 관계로, $F$ 에 속하는 대상과 $G$ 에 속하는 대상을 하나씩 짝짓는 관계 $R$ 가 존재한다는 것이다.

$$
F \approx G \thickspace:\iff\thickspace \exists R\thinspace\big\lbrack\thinspace \forall x\thinspace\big(Fx\to\exists! y\thinspace(Gy\wedge Rxy)\big) \wedge \forall y\thinspace\big(Gy\to\exists! x\thinspace(Fx\wedge Rxy)\big)\thinspace\big\rbrack
$$

이 식은 관계 변항 $R$ 에 대한 한정사(quantifier)를 쓰므로 2차 논리(second-order logic)의 식이다. 2차 논리는 [1차 논리](first-order-logic.md)에 개념과 관계를 가리키는 변항과 그 변항에 대한 한정사를 더한 것이고, 집합은 쓰지 않는다.

예. $F$ 를 "마구간의 말임", $G$ 를 "걸린 안장임" 이라 하고 말이 $a,b,c$, 안장이 $s_1,s_2,s_3$ 라 하자. $R$ 을 $a$ 와 $s_1$, $b$ 와 $s_2$, $c$ 와 $s_3$ 사이에서만 성립하는 관계로 잡으면 위 조건이 성립하므로 $F\approx G$ 다. 말 $c$ 를 뺀 개념 "$a$ 이거나 $b$ 임" 과 $G$ 는 어떤 $R$ 로도 안장 하나가 남으므로 동수가 아니다.

## Hume 원리

**Hume 원리(Hume's principle)** 는 개념 $F$ 마다 대상 $\char35{}F$ 를 하나씩 대응시키는 연산 $\char35{}$ 에 대해 다음이 성립한다는 공리다. $\char35{}F$ 를 $F$ 의 수라 한다.

$$
\char35{}F = \char35{}G \iff F \approx G
$$

예. 앞 절의 "마구간의 말임" $F$ 와 "걸린 안장임" $G$ 는 동수이므로 $\char35{}F=\char35{}G$ 이고, 이 대상이 셋이라는 수다.

Hume 원리처럼 새 대상의 동일성을 이미 있는 동치관계로 정하는 원리를 **추상화 원리(abstraction principle)** 라 한다. 직관 절의 방향도 추상화 원리로 주어진다. 직선 $l$, $m$ 의 방향 $d(l)$, $d(m)$ 은 $d(l)=d(m)\iff l\parallel m$ 을 만족한다.

## 기본 법칙 V

**기본 법칙 V(Basic Law V)** 는 개념 $F$ 마다 대상 $\mathrm{ext}(F)$ 를 대응시키는 연산에 대해 다음이 성립한다는 공리다. $\mathrm{ext}(F)$ 를 $F$ 의 **외연(extension)** 또는 값범위(value-range)라 한다.

$$
\mathrm{ext}(F) = \mathrm{ext}(G) \iff \forall x\thinspace(Fx \leftrightarrow Gx)
$$

예. 마구간의 말이 모두 갈색이면 "마구간의 말임" 과 "마구간의 갈색 말임" 은 같은 대상에 대해 참이므로 외연이 같다. "마구간의 말임" 과 "걸린 안장임" 은 동수라서 수가 같지만, 말 $a$ 가 앞의 개념에만 속하므로 외연은 다르다. 동수성은 개념을 속하는 대상의 개수로만 가르고, 외연의 동일성은 속하는 대상까지 가른다.

## Frege 의 수 정의

기본 법칙 V 를 받으면 연산 $\char35{}$ 를 외연으로 정의할 수 있다.

$$
\char35{}F \thickspace:=\thickspace \mathrm{ext}\big(\lambda G.\thinspace G \approx F\big)
$$

$F$ 의 수는 "$F$ 와 동수임" 이라는 개념, 곧 개념에 대해 참이거나 거짓인 개념의 외연이다. 말 세 마리에 대한 $F$ 의 수는 $F$ 와 동수인 개념 전체의 외연이고, "걸린 안장임" 이 그 가운데 하나다. 영은 다음으로 정의한다.

$$
0 := \char35{}\big(\lambda x.\thinspace x \ne x\big)
$$

자기 자신과 다른 대상은 없으므로 $0$ 은 대상이 하나도 속하지 않는 개념의 수다. "마구간의 말이면서 안장임" 도 속하는 대상이 없으므로 그 수는 $0$ 이다.

**후속자(successor)** 관계는 다음으로 정의한다.

$$
S(m,n) \thickspace:\iff\thickspace \exists F\thinspace\exists x\thinspace\big\lbrack\thinspace Fx \wedge n=\char35{}F \wedge m=\char35{}\big(\lambda y.\thinspace Fy\wedge y\ne x\big)\thinspace\big\rbrack
$$

$n$ 이 $m$ 의 후속자라는 것은 $n$ 이 어떤 개념의 수이고 그 개념에서 대상 하나를 뺀 개념의 수가 $m$ 이라는 것이다. "마구간의 말임" 에서 말 $c$ 를 빼면 "$a$ 이거나 $b$ 임" 이 남으므로 셋은 둘의 후속자다.

$n$ 이 **자연수(natural number)** 라는 것은 $0$ 이 속하고 후속자로 닫힌 모든 개념에 $n$ 이 속한다는 것이다.

$$
\mathbb N(n) \thickspace:\iff\thickspace \forall P\thinspace\big\lbrack\thinspace P0 \wedge \forall m\thinspace\forall k\thinspace\big(Pm\wedge S(m,k)\to Pk\big) \to Pn\thinspace\big\rbrack
$$

이 정의는 관계 $S$ 의 조상(ancestral)을 2차 논리로 쓴 것이다. 말을 하나씩 빼 가면 셋, 둘, 하나를 거쳐 $0$ 에 이르므로, $0$ 이 속하고 후속자로 닫힌 개념에는 셋도 속한다. 그래서 셋은 자연수다.

# 성질

## Russell 역설

**정리.** 2차 논리에서 기본 법칙 V 는 모순이다. 이 모순을 Russell 역설(Russell's paradox)이라 한다.

*증명의 요지.* 기본 법칙 V 는 서로 다른 개념마다 서로 다른 외연을 요구한다. 개념은 대상들의 부분모임만큼 많고 외연은 대상이므로, 멱집합에서 원래 영역으로 가는 단사가 있어야 한다. Cantor 의 대각선 논법(diagonal argument)이 이것을 금지한다. 구체적으로 "자기 자신의 외연에 속하지 않는다" 는 개념을 잡아 그 외연이 그 개념에 속하는지 물으면 어느 쪽이든 모순이 나온다.

Frege 의 저작은 셋이다. *Begriffsschrift*(1879)가 양화 논리를 세우고, *Grundlagen der Arithmetik*(1884)가 수를 정의하고, *Grundgesetze der Arithmetik*(1893)가 기본 법칙 V 로 그 정의를 형식화한다. Russell 이 1902 년 편지로 이 모순을 알렸을 때 *Grundgesetze* 2권은 인쇄 중이었다. Frege 는 부록에서 수정안을 제시했으나 그 수정안도 모순이었고, 결국 프로그램을 포기했다.

## Frege 정리

Frege 의 도출에서 기본 법칙 V 는 Hume 원리를 이끌어 내는 데만 쓰이고, 그 뒤로는 Hume 원리만 사용된다.

**정리(Frege 정리, Frege's theorem).** 2차 논리에 Hume 원리를 공리로 더한 체계(Frege 산술, Frege arithmetic)에서 Dedekind–[Peano 공리](peano-axioms.md)를 모두 도출할 수 있다[^1].

*증명의 요지.* 0 과 후속자를 정의 절처럼 정의한다. 후속자의 단사성과 "0 은 어떤 수의 후속자가 아니다"는 동수성의 성질에서 나온다. [수학적 귀납법](mathematical-induction.md)은 자연수를 조상으로 정의한 방식에서 바로 증명된다. [증명](proofs.md)에서는 귀납법을 공리로 받는다. 가장 섬세한 부분은 모든 수가 후속자를 가진다는 주장이다. Frege 는 "0 부터 $n$ 까지의 수들"이라는 개념을 만들어 그 수를 취해 새 대상을 확보한다. 수 자신을 세는 대상으로 다시 쓰므로 무한 공리를 따로 요구하지 않는다.

**정리(Boolos, Heck).** Frege 산술은 2차 Peano 산술, 곧 [2차 산술](second-order-arithmetic.md)과 상호 해석 가능(mutually interpretable)하며 무모순성이 동치다.

Hume 원리는 무모순이고 모순은 외연 쪽에서만 왔다.

## Principia 의 유형 이론

Russell 과 Whitehead 는 다른 길을 택했다. 역설의 원인을 자기 지시적 정의, 곧 악순환(vicious circle)으로 보고, 대상과 개념을 유형으로 층층이 나누는 유형 이론(type theory)으로 "개념은 자기 자신에 적용될 수 없다"를 문법 차원에서 막았다. 여기에 같은 유형 안에서도 정의의 복잡도에 따라 단계를 나누는 분지(ramified) 구조를 더했다.

분지 구조 때문에 [실수](real-numbers.md)의 상한 존재 같은 해석학의 기본 정리가 도출되지 않는다. Russell 과 Whitehead 는 이를 피하려고 환원 공리(axiom of reducibility)를 도입했다. 산술을 얻으려면 무한 공리(axiom of infinity)가, [기수](cardinality.md) 이론을 얻으려면 [선택공리](axiom-of-choice.md)에 해당하는 곱셈 공리(multiplicative axiom)가 필요했다. 이 셋은 어느 기준으로도 논리 법칙으로 보기 어려우므로 "수학은 논리다"라는 주장이 "수학은 논리와 몇 개의 존재 가정이다"로 약해졌다.

## 신논리주의

신논리주의(neo-logicism)는 Wright 가 1983년에, 이후 Hale 과 함께 제안한 입장으로, Frege 정리에서 출발해 프로그램을 재건하려 한다. 요지는 기본 법칙 V 를 버리고 Hume 원리를 직접 공리로 채택하는 것이다. Hume 원리가 수 개념에 대한 분석적 진리(analytic truth)이거나 적어도 개념 구성적(implicit definition) 원리라면, 산술의 인식론적 지위가 그로부터 설명된다는 주장이다[^2].

주요 반론은 셋이다.

**Caesar 문제(Caesar problem).** Hume 원리에서 나오는 것은 수와 수를 비교하는 법뿐이고, "Julius Caesar 는 수 3 인가" 같은 물음의 답은 나오지 않는다. 대상의 동일성 조건을 온전히 규정하지 못한다면 대상을 도입한 것이라 할 수 있는가.

**나쁜 동반자 문제(bad company problem).** Hume 원리와 기본 법칙 V 는 형태가 같다. 하나는 무모순이고 하나는 모순이다. 형태만으로는 둘을 구별하지 못하므로, 좋은 추상화 원리와 나쁜 추상화 원리를 가르는 기준이 별도로 필요하고 그 기준 자체가 논리적이어야 한다. 각각은 무모순이면서 서로 양립 불가능한 추상화 원리 쌍도 있다.

**2차 논리의 지위.** Frege 정리는 2차 논리를 필요로 한다. 2차 논리는 표준 의미론(standard semantics)에서 완전성과 콤팩트성을 모두 잃는다는 점에서([Löwenheim–Skolem 정리](lowenheim-skolem.md)) 1차 논리와 성격이 다르다. Quine 은 이를 두고 2차 논리가 "양의 탈을 쓴 집합론(set theory in sheep's clothing)"이라 했다. 2차 논리가 논리가 아니라면 논리주의의 환원이 논리에 기댄 것이 아니다.

## Gödel 이후

[Gödel 불완전성 정리](godel-incompleteness.md)는 논리주의에도 타격을 준다. 산술의 모든 진리를 재귀적으로 열거되는(recursively enumerable) 공리계에서 도출할 수 없으므로, "모든 산술적 진리는 논리적 진리"라는 강한 논리주의를 유지하기 어렵다. 다만 2차 논리의 표준 의미론에서는 2차 Peano 산술이 표준 모형을 유일하게 고정하므로, 의미론적 함의 수준에서는 완전성이 회복된다. 이 차이를 어떻게 평가하느냐에서 논리주의 평가가 갈린다.

## 무한 공리 없이 얻는 무한

유한 우주에서 개념을 부분집합으로, 수를 동수성 동치류로 두면 Hume 원리의 모형이 나온다. 이 모형에서 Peano 공리 가운데 셋은 성립하고 후속자의 존재만 실패한다. 유한 우주에서는 셀 대상이 더 없다.

Frege 는 수 자신을 세어지는 대상으로 썼다. "0 부터 $n$ 까지"라는 개념의 수가 $n$ 의 후속자이므로 대상의 공급이 끊기지 않는다. Hume 원리는 이렇게 무한 공리 없이 무한을 얻고, Principia 는 무한 공리를 따로 요구했다.

# 활용

## 집합론과의 관계

기본 법칙 V 의 실패는 "모든 개념에 외연이 있다"는 무제한 내포 원리(unrestricted comprehension)를 버려야 한다는 교훈으로 이어졌다. [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel 집합론에 선택공리를 더한 것)의 분리 공리꼴(axiom schema of separation)은 이미 있는 집합 안에서만 부분집합을 만들도록 제한해 같은 문제를 피한다. 논리주의가 실패한 자리에 공리적 [집합론](sets.md)이 들어섰지만, 그 대가로 집합 존재 주장들은 논리적 진리라는 지위를 잃었다.

## 플라톤주의와의 비교

논리주의는 수가 논리적 대상이라고 주장한다는 점에서 [수학적 플라톤주의](mathematical-platonism.md)와 겹치면서도 다르다. 플라톤주의에서 수학적 대상은 독립적으로 존재하지만 어떻게 그것을 인식하는지 설명하기 어렵다. 논리주의는 그 인식론적 부담을 논리로 옮겨 해결하려 한다. 추상화 원리가 대상을 추가 가정 없이 준다는 신논리주의의 주장이 정확히 이 전략이다.

[수학적 구조주의](mathematical-structuralism.md)와의 차이는 더 선명하다. 구조주의는 수가 무엇인지 묻지 말고 구조 안의 자리로 보라고 한다. 이 관점에서 Caesar 문제는 애초에 잘못된 질문이다. 반대로 논리주의는 수를 특정한 대상으로 지목하려 하므로 그 질문에 답할 의무를 진다.

논리주의와 [직관주의](intuitionism.md), [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md)이 20세기 초 기초론의 세 갈래다. 셋 다 역설에 대한 대응으로 나왔다. 셋 다 원래 형태로는 성공하지 못했고 도구만 지금 수학에 남았다.

## 기술적 유산

현대의 양화 논리 표기, 관계의 조상으로 쓰는 귀납적 정의, 동치관계에서 대상을 얻는 추상화 기법이 모두 Frege 에서 나왔다. 어떤 추상화 원리가 무모순인지를 가르는 부분적 기준이 알려져 있다[^2].

[^1]: Stanford Encyclopedia of Philosophy, "Frege's Theorem and Foundations for Arithmetic", https://plato.stanford.edu/entries/frege-theorem/
[^2]: Stanford Encyclopedia of Philosophy, "Logicism and Neologicism", https://plato.stanford.edu/entries/logicism/

# 연관 문서

## 선수지식

- [수학적 플라톤주의](mathematical-platonism.md)
- [1차 논리](first-order-logic.md)
- [수학기초론 개관](foundations-overview.md)

## 더 알아보기

아직 연결한 문서가 없다.

#philosophy_of_math #foundations
