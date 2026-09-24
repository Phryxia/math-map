# Peano 공리

# 개요

Peano 공리는 자연수 전체를 $0$ 과 후자 함수만으로 특징짓는 공리계다. 나머지 산술은 여기서 재귀로 정의되며, 덧셈과 곱셈의 모든 항등식이 귀납법으로 증명된다.

같은 공리를 2차 논리로 쓸 때와 [1차 논리](first-order-logic.md)로 쓸 때 결과가 다르다. 2차 형태는 모형을 동형을 무시하고 하나로 결정하지만, 1차 형태인 Peano 산술은 표준 모형과 동형이 아닌 모형을 반드시 가진다. 이 차이가 형식 체계의 표현력이 어디서 끊기는지를 보여 주는 대표적 예다.

# 직관

## 후자 함수와 귀납

자연수를 특징짓는 자료는 시작점 $0$ 과 한 걸음 나아가는 연산 $S$ 뿐이다. $S$ 가 단사이고 $0$ 을 값으로 갖지 않으면 $0, S(0), S(S(0)), \ldots$ 가 모두 다른 원소가 된다. 이것만으로는 이 목록 밖에 다른 원소가 없다는 보장이 없다.

귀납 공리가 그 보장을 맡는다. $0$ 을 담고 $S$ 로 닫힌 부분집합이 전체뿐이라고 요구하면, 목록 밖의 원소를 뺀 부분집합이 반례가 되므로 그런 원소가 존재할 수 없다.

# 정의

## Peano 공리

**Peano 공리**는 집합 $N$ , 원소 $0 \in N$ , 함수 $S \colon N \to N$ 에 대한 다음 조건이다.

1. $S$ 는 단사다. $S(m) = S(n)$ 이면 $m = n$ 이다.
2. $0$ 은 $S$ 의 상에 속하지 않는다. 모든 $n$ 에 대해 $S(n) \neq 0$ 이다.
3. 귀납 공리. $0 \in X$ 이고 $n \in X$ 가 항상 $S(n) \in X$ 를 함의하는 $X \subseteq N$ 은 $N$ 뿐이다.

세 조건을 만족하는 세 쌍 $(N, 0, S)$ 를 자연수 체계라 한다.

## Peano 산술

3 의 $X$ 는 임의의 부분집합을 훑으므로 2차 논리의 양화다. 1차 논리에서는 부분집합을 양화할 수 없어 논리식 하나마다 공리를 하나씩 두는 도식으로 바꾼다. 자유변수 $n$ 을 갖는 각 논리식 $\varphi$ 에 대해 다음을 공리로 둔다.

$$
\bigl(\varphi(0) \wedge \forall n\thinspace (\varphi(n) \to \varphi(S(n)))\bigr) \to \forall n\thinspace \varphi(n)
$$

이 귀납 도식에 덧셈과 곱셈의 재귀 등식을 더한 1차 이론이 **Peano 산술**(Peano arithmetic, PA)이다. 재귀 등식은 다음 넷이다.

$$
m + 0 = m, \qquad m + S(n) = S(m + n), \qquad m \cdot 0 = 0, \qquad m \cdot S(n) = m \cdot n + m
$$

# 성질

## 범주성

2차 형태의 Peano 공리를 만족하는 두 체계 $(N, 0, S)$ 와 $(N', 0', S')$ 사이에는 $0 \mapsto 0'$ 과 $S$ 를 보존하는 전단사가 유일하게 존재한다.

증명의 요지는 재귀로 사상 $f \colon N \to N'$ 을 정의하고 $f$ 가 전단사임을 귀납으로 보이는 것이다. 단사성은 $S'$ 의 단사성과 $0'$ 이 상에 없다는 조건에서, 전사성은 $f$ 의 상이 $0'$ 을 담고 $S'$ 으로 닫혀 있다는 데서 나온다.

## 재귀 정리

집합 $A$ , 원소 $a \in A$ , 함수 $g \colon A \to A$ 가 주어지면 $f(0) = a$ 와 $f(S(n)) = g(f(n))$ 을 만족하는 $f \colon N \to A$ 가 유일하게 존재한다.

덧셈과 곱셈은 이 정리로 정의된다. 덧셈은 $g = S$ 를 $m$ 에서 시작해 반복한 것이고, 곱셈은 $g$ 를 $m$ 더하기로 두고 $0$ 에서 시작한 것이다. 결합법칙과 교환법칙은 정의에서 귀납으로 증명된다.

## 비표준 모형

Peano 산술은 표준 모형 $\mathbb N$ 과 동형이 아닌 모형을 가진다.

언어에 새 상수 $c$ 를 더하고 무한히 많은 문장 $c \gt 0$ , $c \gt S(0)$ , $c \gt S(S(0))$ 을 이어 공리로 추가한다. 이 집합의 유한 부분집합은 $c$ 를 충분히 큰 수로 해석하면 만족되므로, [콤팩트성 정리](lowenheim-skolem.md)에 의해 전체가 모형을 가진다. 그 모형에서 $c$ 는 모든 표준 자연수보다 크다.

2차 논리는 Compactness 정리를 만족하지 않으므로 2차 형태에서 이 논법이 막힌다. 범주성과 Compactness 는 함께 성립할 수 없다.

## 증명할 수 없는 참인 명제

Peano 산술은 재귀적으로 공리화되고 기본 산술을 표현하므로 [Gödel 불완전성 정리](godel-incompleteness.md)의 가정을 만족한다. Peano 산술이 무모순이면 표준 모형에서 참이지만 Peano 산술에서 증명되지 않는 산술 문장이 존재한다.

Gödel 문장 외에 조합적 내용을 가진 예도 알려져 있다. Goodstein 수열이 항상 $0$ 에서 끝난다는 정리와 Paris–Harrington 정리가 표준 모형에서 참이면서 Peano 산술에서 증명되지 않는다.[^1]

## 무모순성 증명의 서수

Gentzen 은 $\varepsilon_0$ 까지의 [초한귀납법](ordinals.md)을 원시재귀 산술에 더하면 Peano 산술의 무모순성이 증명됨을 보였다.[^2] $\varepsilon_0$ 은 $\omega, \omega^\omega, \omega^{\omega^\omega}$ 의 극한이며 Peano 산술이 정당화할 수 있는 서수의 상한이다.

# 활용

- **자연수의 구성.** [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel 집합론에 [선택공리](axiom-of-choice.md)를 더한 공리계)에서 무한공리로 얻은 귀납적 집합의 최소 원소를 $\mathbb N$ 으로 두면 Peano 공리가 정리로 증명된다. 자연수를 원시 개념으로 두지 않고 집합으로 환원하는 경로다.
- **역수학의 기준선.** 산술의 부분체계를 강도로 줄 세울 때 Peano 산술이 기준점 역할을 한다. 2차 산술의 부분체계들은 이보다 약하거나 강한 쪽으로 나뉜다.
- **형식주의 프로그램의 대상.** [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md)이 유한적 수단으로 무모순성을 증명하려 한 대상이 산술이며, 불완전성 정리가 그 목표를 좁혔다.
- **자동 증명.** 귀납 도식은 논리식마다 공리를 하나씩 주므로 자동 증명기는 귀납 가설을 스스로 지어내야 한다. 이 단계가 산술 명제의 자동 증명에서 가장 어려운 부분이다.

[^1]: Paris and Harrington, "A Mathematical Incompleteness in Peano Arithmetic", in *Handbook of Mathematical Logic*, North-Holland, 1977.
[^2]: Gentzen, "Die Widerspruchsfreiheit der reinen Zahlentheorie", *Mathematische Annalen* 112 (1936), 493–565.

# 연관 문서

## 선수지식

- [1차 논리](first-order-logic.md)

## 더 알아보기

- [Gödel 불완전성 정리](godel-incompleteness.md)
- [2차 산술](second-order-arithmetic.md)

#logic #foundations #set_theory
