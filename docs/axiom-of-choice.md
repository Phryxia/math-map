# 선택공리

# 개요

**선택공리(axiom of choice, AC)** 는 공집합이 아닌 집합들의 임의의 족에서 각 집합의 원소를 하나씩 동시에 고를 수 있다는 주장이다. 신발이 무한히 많은 켤레로 있으면 "왼쪽 짝" 이라는 규칙 하나로 켤레마다 한 짝씩 고를 수 있지만, 양말 켤레는 두 짝을 구별할 규칙이 없어 고르는 방법을 적을 수 없다. 선택공리는 이런 규칙이 없어도 고르는 함수가 존재한다고 가정해, 기저나 극대 아이디얼의 존재 같은 정리를 증명하게 한다.

# 직관

양말 세 켤레에서 한 짝씩 고른다. 첫 켤레가 비어 있지 않으니 한 짝을 집고, 둘째 켤레에서 한 짝을 집고, 셋째 켤레에서 한 짝을 집는다. 증명으로 쓰면 "원소가 있다" 에서 "그 원소를 $x_1$ 이라 하자" 로 넘어가는 줄이 세 번 나온다. 켤레가 백 개여도 줄이 백 개일 뿐이고, [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)에서 선택공리를 뺀 나머지 공리만으로 증명이 끝난다.

켤레가 자연수만큼 무한히 많으면 이 방법이 막힌다. 증명은 유한한 길이여야 하는데 고르는 줄이 켤레마다 하나씩 무한히 필요하다. 신발이면 "켤레마다 왼쪽 짝" 이라는 규칙 하나가 모든 선택을 한꺼번에 정하므로 줄 하나로 끝난다. 양말은 두 짝을 가를 성질이 없어 이런 규칙을 적을 수 없다.

선택공리는 규칙을 적지 못해도 켤레마다 한 짝을 정하는 함수가 존재한다고 가정한다. 이 비유는 Russell 이 들었다.

# 정의

## 선택함수

집합족 $\mathcal{F}$ 에 대한 **선택함수(choice function)** 는 $\mathcal{F}$ 의 각 원소에서 그 원소의 원소를 지정하는 함수다.

$$
f:\mathcal F\to\bigcup \mathcal F \quad\text{with}\quad \forall A\in \mathcal F\ \ f(A)\in A
$$

$\mathcal F=\lbrace \lbrace 1,2\rbrace,\lbrace 3\rbrace\rbrace$ 에서 $f(\lbrace 1,2\rbrace)=1$, $f(\lbrace 3\rbrace)=3$ 은 선택함수다. 신발 켤레의 족 $\lbrace \lbrace L_n,R_n\rbrace : n\in\mathbb N\rbrace$ 에서 $f(\lbrace L_n,R_n\rbrace)=L_n$ 도 선택함수다.

## 선택공리

선택공리는 공집합을 원소로 갖지 않는 모든 집합족에 선택함수가 존재한다는 공리다.

$$
\textbf{AC:}\quad \forall \mathcal F\ \bigl(\varnothing\notin \mathcal F\ \to\ \exists f\ \text{선택함수}\bigr)
$$

양말 켤레의 족 $\lbrace \lbrace S_n,S_n'\rbrace : n\in\mathbb N\rbrace$ 는 공집합을 원소로 갖지 않으므로, 선택공리에 따라 켤레마다 한 짝을 고르는 함수가 존재한다.

## 정렬 정리

**정렬 정리(well-ordering theorem, WO)** 는 모든 집합 위에 정렬순서가 존재한다는 진술이다. 정렬순서(well-order)는 공집합이 아닌 부분집합마다 최솟값이 있는 전순서다([서수](ordinals.md)).

$$
\textbf{WO:}\quad \text{모든 집합 } X \text{ 위에 정렬순서가 존재한다.}
$$

정수의 보통 순서는 $\mathbb Z$ 자신에 최솟값이 없어 정렬순서가 아니다. $0,-1,1,-2,2,\dots$ 의 순서로 늘어놓으면 정렬순서다. 실수 집합 위의 정렬순서는 이런 식으로 적히지 않는다.

## Zorn 보조정리

**Zorn 보조정리(Zorn's lemma, ZL)** 는 다음 진술이다. [부분순서](partial-orders.md) 집합 $P$ 가 공집합이 아니고, 전순서 부분집합, 곧 사슬(chain)마다 $P$ 안에 상계가 있으면 $P$ 는 극대 원소를 갖는다[^1].

$$
\textbf{ZL:}\quad P\neq\varnothing\ \wedge\ \bigl(\forall C\subseteq P \text{ 사슬}\ \exists u\in P\ \forall c\in C\ c\le u\bigr)\ \Longrightarrow\ \exists m\in P \text{ 극대}
$$

$\lbrace 1,2,3\rbrace$ 의 진부분집합 전체를 포함관계로 순서 지은 $P$ 에서 $\varnothing\subset\lbrace 1\rbrace\subset\lbrace 1,2\rbrace$ 는 사슬이고 $\lbrace 1,2\rbrace$ 가 상계다. 극대 원소는 $\lbrace 1,2\rbrace$, $\lbrace 1,3\rbrace$, $\lbrace 2,3\rbrace$ 셋이고, 극대(maximal)는 자기보다 큰 원소가 없다는 뜻이라 여러 개일 수 있다. 셋 모두보다 큰 원소가 없으므로 최대(maximum)는 없다. 공집합도 사슬이므로 상계 조건이 성립하면 $P$ 는 이미 공집합이 아니다. 비어 있지 않은 사슬에만 상계를 요구하는 판본에서는 $P\neq\varnothing$ 조건이 이 경우를 맡는다.

# 성질

## 곱 형태

AC 는 공집합이 아닌 집합들의 곱이 공집합이 아니라는 진술과 동치다. 곱 $\prod_{i\in I}A_i$ 의 원소는 각 $A_i$ 에서 원소 하나를 고른 함수이므로, 곱의 원소가 곧 족 $\lbrace A_i\rbrace$ 의 선택함수다.

$$
\bigl(\forall i\in I\ A_i\neq\varnothing\bigr)\ \Longrightarrow\ \prod_{i\in I}A_i\neq\varnothing
$$

## 세 진술의 동치

ZF(선택공리를 뺀 Zermelo–Fraenkel) 안에서 AC 와 WO 와 ZL 이 동치다[^2]. 실제 수학에서는 극대 원소의 존재를 주는 ZL 을 가장 많이 쓴다.

### WO 에서 AC

$\mathcal{F}$ 의 합집합에 정렬순서를 주고 각 $A$ 에 $A$ 의 최솟값을 대응시키면 선택함수다.

### ZL 에서 WO

$X$ 의 부분집합 위의 정렬순서들을 모은 집합 $P$ 에 확장 관계로 순서를 준다. 한 정렬순서가 다른 것의 시작 절편(initial segment)일 때 작다고 한다. 사슬의 합집합은 다시 정렬순서이므로 상계가 존재하고 ZL 이 극대 원소를 준다. 그 극대 정렬순서의 정의역이 $X$ 가 아니면 남은 원소를 맨 뒤에 붙여 더 큰 것을 만들 수 있어 모순이다.

### AC 에서 ZL

선택함수로 극대가 아닌 각 원소에서 더 큰 원소 하나를 고르고, 서수에 대한 초한재귀(transfinite recursion)로 증가하는 사슬을 만든다. 극대 원소가 없다면 이 과정이 모든 서수에서 멈추지 않아 서수 전체를 $P$ 에 단사로 넣게 되고, 치환 공리로 서수 전체가 집합이 되어 Burali-Forti 역설(Burali-Forti paradox)에 걸린다. 따라서 어딘가에서 멈추며 그 지점이 극대다.

## AC 를 쓰는 표준 결과

- 모든 [벡터 공간](vector-spaces.md)에 기저가 존재한다. 선형독립 부분집합들의 포함관계 부분순서에 ZL 을 적용한다. 유한차원에서는 AC 가 필요하지 않다.
- 0 이 아닌 가환환의 모든 진 아이디얼은 [극대 아이디얼](prime-ideals.md)에 포함된다. 진 아이디얼들의 집합에 ZL 을 적용하며, 사슬의 합집합이 다시 진 아이디얼임은 1 을 포함하지 않는다는 조건에서 나온다.
- [Tychonoff 정리](tychonoff-theorem.md)로 [콤팩트](compactness.md) 공간들의 임의 곱은 곱위상에서 콤팩트하다. 이 정리는 AC 와 동치다.
- 체의 대수적 폐포 존재와 유일성, [Galois 이론](galois-theory.md)의 무한 확대 취급.
- 두 집합의 크기는 항상 비교 가능하다(comparability of cardinals). 이 진술도 AC 와 동치다.
- 가산 개 영집합의 합집합이 영집합이라는 등 [측도](measure.md)론의 여러 기본 사실은 가산 선택(countable choice)만 요구한다.

## 비구성성

- [Vitali 집합](vitali-set.md). [실수](real-numbers.md)를 유리수 평행이동으로 나눈 [동치류](equivalence-relations.md)에서 대표를 하나씩 고르면 Lebesgue 비가측 집합이 된다.
- [Banach–Tarski 분해](banach-tarski.md). 3 차원 단위 구를 유한 개 조각으로 나누어 회전과 평행이동만으로 같은 크기의 구 두 개를 만들 수 있다[^3]. 조각들이 비가측이므로 Lebesgue 측도의 성질과 모순되지 않는다. 2 차원에서는 같은 현상이 일어나지 않으며, 원인은 3 차원 회전군이 자유 부분군을 갖는 데 있다([군 작용](group-actions.md)).
- 실수 전체의 정렬순서는 AC 로 존재하지만 어떤 명시적 정의로도 주어지지 않는다.

## 독립성

AC 는 ZF 에서 독립이다. Gödel(1938)은 [구성가능 우주](constructible-universe.md) $L$ 을 만들어 ZF 가 무모순이면 ZFC 도 무모순임을 보였고, Cohen(1963)은 [강제법](forcing.md)(forcing)으로 ZF 가 무모순이면 AC 의 부정도 ZF 와 무모순임을 보였다. [연속체 가설](continuum-hypothesis.md)도 같은 방식으로 ZFC 에서 독립이다.

AC 의 약한 형태들은 강도가 다르다. 가산 선택, 종속 선택(dependent choice), 초필터 보조정리(ultrafilter lemma), [Boole 대수](boolean-algebras.md)의 소 아이디얼 정리(Boolean prime ideal theorem) 순으로 강해지며 완전한 AC 보다는 약하다([선택공리의 약한 형태](weak-choice-principles.md)). AC 를 부정하고 모든 실수 집합이 Lebesgue 가측임을 가정하는 Solovay 모형(Solovay model)도 있고, 그 구성은 도달 불가능 기수(inaccessible cardinal)의 존재를 가정한다.

## 구성주의의 입장

[직관주의](intuitionism.md)에서 함수를 알고리즘으로 읽으면 유한 선택이나 명시적 규칙이 있는 선택만 인정되고, 배중률과 결합된 형태의 AC 는 거부된다. Martin-Löf 유형 이론(Martin-Löf type theory)에서는 존재 증명이 증인을 함께 담으므로, 각 $x$ 에 $y$ 가 있다는 증명에서 선택함수가 만들어지는 형태의 AC 가 정리로 증명된다.

# 활용

## 사용 여부 판별

증명에서 각 원소마다 하나 고르는 일이 무한히 많은 독립적 선택을 요구하면 AC 또는 그 약한 형태를 쓴 것이다. 명시적 규칙으로 선택이 결정되면 필요하지 않다.

- 필요 없음: 유한 족, 자연수 부분집합에서 최솟값 고르기, 정렬된 집합에서 최솟값 고르기.
- 가산 선택으로 충분: 실수열의 부분열 뽑기, 점열 콤팩트이면 콤팩트라는 유형의 논법.
- 완전한 AC: 임의 크기 곱의 Tychonoff, 비가산 차원 기저, 모든 체의 대수적 폐포.

## Zorn 보조정리 적용 절차

1. 후보들의 집합 $P$ 를 정한다. 예를 들어 선형독립 부분집합 전체다.
2. $P$ 위의 부분순서를 정한다. 보통 포함관계다.
3. $P$ 가 공집합이 아님을 확인한다. 보통 공집합 자신이 원소다.
4. 임의의 사슬 $C$ 에 대해 합집합이 다시 $P$ 의 원소임을 확인한다. 유한히 많은 원소만 관여하는 조건이면 자동으로 성립한다.
5. Zorn 보조정리로 극대 원소 $m$ 을 얻는다.
6. $m$ 이 원하는 대상임을 보인다. $m$ 이 기저가 아니면 원소를 더해 더 큰 독립집합을 얻어 모순이다.

4 번 단계는 실패할 수 있다. 유한 집합 전체는 포함관계에서 사슬의 합집합이 무한일 수 있으므로 ZL 을 바로 적용할 수 없다.

[^1]: Zorn's lemma, Wikipedia. https://en.wikipedia.org/wiki/Zorn%27s_lemma
[^2]: The Axiom of Choice, Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/axiom-choice/
[^3]: Banach–Tarski paradox, Wikipedia. https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox

# 연관 문서

## 선수지식

- [ZFC 공리계](zfc-axioms.md)
- [부분순서](partial-orders.md)
- [서수](ordinals.md)

## 더 알아보기

- [선택공리의 약한 형태](weak-choice-principles.md)
- [Tychonoff 정리](tychonoff-theorem.md)
- [Vitali 집합](vitali-set.md)
- [Banach–Tarski 분해](banach-tarski.md)

#set_theory #foundations
