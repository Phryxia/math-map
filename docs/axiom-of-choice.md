# 선택공리와 Zorn 보조정리

# 개요

선택공리(axiom of choice, AC)는 공집합이 아닌 집합들의 임의의 족에서 각 집합의 원소를 하나씩 동시에 고를 수 있다는 주장이다. 유한 족에서는 [ZFC 공리계](zfc-axioms.md)의 다른 공리만으로 증명되지만, 무한 족에서는 독립적인 가정이 필요하다.

AC는 정렬 정리와 Zorn 보조정리와 ZF 안에서 서로 동치다. 실제 수학에서는 이 중 Zorn 보조정리를 가장 많이 쓴다. 극대 원소의 존재를 요구하는 형태가 대수와 해석의 존재 정리에 바로 맞기 때문이다.

대가도 있다. AC는 구성적 절차 없이 대상의 존재만 주장하며, Banach–Tarski 분해처럼 직관에 반하는 결론을 낳는다. Gödel과 Cohen의 결과로 AC는 ZF에서 독립임이 확정되었다.

# 직관

무한히 많은 신발 쌍에서 한 짝씩 고르는 데는 AC가 필요하지 않다. "왼쪽 것을 고른다"는 규칙이 있기 때문이다. 무한히 많은 양말 쌍에서 한 짝씩 고르는 데는 규칙이 없으므로 AC가 필요하다(Russell의 비유).

핵심은 "각 집합에 원소가 있다"와 "모든 집합에서 동시에 하나씩 지정하는 함수가 존재한다"의 차이다. 전자는 존재 양화의 무한 반복이고, 후자는 그 선택들을 하나의 집합으로 묶으라는 요구다. ZF는 후자를 만들어 낼 수단을 주지 않는다.

Zorn 보조정리의 그림: 부분순서 집합에서 위로 계속 올라가되, 올라가는 길(chain)마다 상한이 보장되어 있으면 언젠가 더 올라갈 수 없는 지점에 닿는다.

세 화살표가 순환을 이루므로 셋은 동치다.

# 정의

집합족 F에 대한 선택함수는 F의 각 원소에서 그 원소의 원소를 지정하는 함수다.

$$
f:F\to\bigcup F \quad\text{with}\quad \forall A\in F\ \ f(A)\in A
$$

## 선택공리

$$
\textbf{AC:}\quad \forall F\ \bigl(\varnothing\notin F\ \to\ \exists f\ \text{선택함수}\bigr)
$$

동치인 형태로 공집합이 아닌 집합들의 곱이 공집합이 아니라는 진술을 쓸 수도 있다.

$$
\bigl(\forall i\in I\ A_i\neq\varnothing\bigr)\ \Longrightarrow\ \prod_{i\in I}A_i\neq\varnothing
$$

## 정렬 정리

$$
\textbf{WO:}\quad \text{모든 집합 } X \text{ 위에 정렬순서가 존재한다.}
$$

## Zorn 보조정리

[부분순서](partial-orders.md) 집합 P에서, 전순서 부분집합(chain)마다 P 안에 상계가 있고 P가 공집합이 아니면 P는 극대 원소를 갖는다[^1].

$$
\textbf{ZL:}\quad P\neq\varnothing\ \wedge\ \bigl(\forall C\subseteq P \text{ chain}\ \exists u\in P\ \forall c\in C\ c\le u\bigr)\ \Longrightarrow\ \exists m\in P \text{ 극대}
$$

주의할 점 두 가지. 상계는 P 안에 있어야 하고, 공집합도 chain이므로 P가 공집합이 아니라는 조건이 그 경우를 담당한다. 또 극대(maximal)는 최대(maximum)와 다르다. 극대 원소는 자기보다 큰 원소가 없다는 뜻뿐이며 여러 개 있을 수 있다.

# 성질

## 동치 증명 개요

ZF 안에서 AC, WO, ZL이 동치다[^2].

**WO가 AC를 함의**: F의 합집합에 정렬순서를 주고, 각 A에 A의 최솟값을 대응시키면 선택함수다.

**ZL이 WO를 함의**: X의 부분집합 위의 정렬순서들을 모은 집합 P를 보고, "확장 관계"로 순서를 준다. 즉 한 정렬순서가 다른 것의 시작 절편(initial segment)일 때 작다고 한다. chain의 합집합은 다시 정렬순서이므로 상계가 존재하고, ZL이 극대 원소를 준다. 그 극대 정렬순서의 정의역이 X가 아니면 남은 원소를 맨 뒤에 붙여 더 큰 것을 만들 수 있으므로 모순이다.

**AC가 ZL을 함의**: 선택함수로 극대가 아닌 각 원소에서 "더 큰 원소 하나"를 고르고, [서수](ordinals.md)에 대한 초한재귀로 증가하는 chain을 만든다. 극대 원소가 없다면 이 과정이 모든 서수에서 멈추지 않아 서수 전체를 P에 단사로 넣게 되고, 치환 공리에 의해 서수 전체가 집합이 되어 Burali-Forti 역설에 걸린다. 따라서 어딘가에서 멈추며 그 지점이 극대다.

## AC를 쓰는 표준 결과

- 모든 [벡터 공간](vector-spaces.md)에 기저가 존재한다. 선형독립 부분집합들의 포함관계 부분순서에 ZL을 적용한다. 유한차원에서는 AC가 필요하지 않다.
- 0이 아닌 가환환의 모든 진 아이디얼은 [극대 아이디얼](prime-ideals.md)에 포함된다. 진 아이디얼들의 집합에 ZL을 적용하며, chain의 합집합이 다시 진 아이디얼임은 1을 포함하지 않는다는 조건에서 나온다.
- Tychonoff 정리: [compact](compactness.md) 공간들의 임의 곱은 곱위상에서 compact다. 이 정리는 AC와 동치다.
- 체의 대수적 폐포 존재와 유일성, [Galois 이론](galois-theory.md)의 무한 확대 취급.
- 두 집합의 크기는 항상 비교 가능하다(cardinal comparability). 이 진술도 AC와 동치다.
- 가산 개 영집합의 합집합이 영집합이라는 등 [측도](measure.md)론의 여러 기본 사실은 가산 선택(countable choice)이라는 약한 형태만 요구한다.

## 비구성성과 이상한 결과

- Vitali 집합: 실수를 유리수 평행이동으로 나눈 [동치류](relations.md)에서 대표를 하나씩 고르면 Lebesgue 비가측 집합이 된다.
- Banach–Tarski: 3차원 단위 구를 유한 개 조각으로 나누어 회전과 평행이동만으로 같은 크기의 구 두 개를 만들 수 있다[^3]. 조각들이 비가측이므로 Lebesgue 측도의 성질과 모순되지 않는다. 2차원에서는 같은 현상이 일어나지 않으며, 원인은 3차원 회전군이 자유 부분군을 갖는 데 있다([군 작용](group-actions.md)).
- 실수 전체의 정렬순서는 AC로 존재하지만 어떤 명시적 정의로도 주어지지 않는다.

## 독립성

Gödel(1938)은 구성 가능 집합 모형 L을 만들어 ZF가 무모순이면 ZFC도 무모순임을 보였고, Cohen(1963)은 forcing으로 ZF가 무모순이면 AC의 부정도 ZF와 무모순임을 보였다. 따라서 AC는 ZF에서 독립이다. 연속체 가설도 같은 방식으로 ZFC에서 독립이다.

AC의 약한 형태들은 강도가 서로 다르다. 가산 선택, 종속 선택, 초필터 보조정리, 부울 대수의 소 아이디얼 정리 순으로 강해지며 완전한 AC보다는 약하다. AC를 부정하고 "모든 실수 집합이 Lebesgue 가측"을 가정하는 Solovay 모형도 있다(단 도달 불가능 기수의 존재를 가정한다).

## 구성주의의 입장

[직관주의](intuitionism.md)의 관점에서 AC는 별도의 문제를 일으킨다. 함수를 알고리즘으로 읽는 해석에서는 유한 선택이나 명시적 규칙이 있는 선택만 인정되고, 배중률과 결합된 형태의 AC는 거부된다. 반대로 type theory의 어떤 판본에서는 함수 개념이 강해져 AC의 일부가 정리로 증명된다.

# 활용

## 사용 여부 판별 요령

증명에서 "각 원소마다 하나 고른다"가 무한히 많은 독립적 선택을 요구하면 AC(또는 그 약한 형태)를 쓴 것이다. 명시적 규칙으로 선택이 결정되면 필요하지 않다.

- 필요 없음: 유한 족, 자연수 부분집합에서 최솟값 고르기, 정렬된 집합에서 최솟값 고르기.
- 가산 선택으로 충분: 실수열의 부분열 뽑기, "점열 compact이면 compact"류의 논법 다수.
- 완전한 AC: 임의 크기 곱의 Tychonoff, 비가산 차원 기저, 모든 체의 대수적 폐포.

## Zorn 보조정리 적용 절차

```text
1. 후보들의 집합 P를 정한다. (예: 선형독립 부분집합 전체)
2. P 위의 부분순서를 정한다. (보통 포함관계)
3. P가 공집합이 아님을 확인한다. (보통 공집합 자신이 원소)
4. 임의의 chain C에 대해 합집합이 다시 P의 원소임을 확인한다.
   - 여기서 "유한히 많은 원소만 관여하는 조건"이면 자동으로 성립한다.
5. ZL로 극대 원소 m을 얻는다.
6. m이 원하는 대상임을 보인다. (예: m이 기저가 아니면 원소를 더해 더 큰 독립집합을 얻어 모순)
```

4번 단계가 실패하는 예를 알아 두면 좋다. "유한 집합 전체"는 포함관계에서 chain의 합집합이 무한일 수 있으므로 ZL을 바로 적용할 수 없다.

[^1]: Zorn's lemma, Wikipedia. https://en.wikipedia.org/wiki/Zorn%27s_lemma
[^2]: The Axiom of Choice, Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/axiom-choice/
[^3]: Banach–Tarski paradox, Wikipedia. https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox

# 연관 문서

## 선수지식

- [ZFC 공리계](zfc-axioms.md)
- [부분순서](partial-orders.md)
- [서수와 초한귀납법](ordinals.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #foundations
