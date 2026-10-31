# Peano 공리

# 개요

**Peano 공리(Peano axioms)** 는 자연수 전체를 $0$ 과 다음 수를 주는 후자 함수만으로 특징짓는 공리계다. $2+2=4$ 를 증명하려면 덧셈이 무엇인지부터 정해야 하는데, 수를 세어 본 경험만으로는 그 정의가 나오지 않는다. Peano 공리에서는 덧셈과 곱셈을 후자 함수의 재귀로 정의하고, 그 항등식을 귀납법으로 증명한다.

# 직관

$2+2=4$ 를 증명하려고 한다. $0$ 에서 한 걸음 나아가는 연산을 $S$ 라 쓰면 $2=S(S(0))$, $4=S(S(S(S(0))))$ 이다. 덧셈을 "$m$ 에 $0$ 을 더하면 $m$, $m$ 에 $S(n)$ 을 더하면 $m+n$ 의 다음 수" 로 정하면, 이 규칙을 두 번 쓰고 마지막에 첫 규칙을 써서 $2+2$ 가 $S(S(S(S(0))))$ 로 바뀐다.

이 계산이 자연수에 대한 계산이 되려면 자연수가 $0$ 에서 $S$ 를 되풀이해 얻는 수뿐이어야 한다. $S$ 가 단사이고 $0$ 을 값으로 갖지 않으면 $0, S(0), S(S(0)), \ldots$ 가 모두 다른 원소가 된다. 이것만으로는 이 목록 밖에 다른 원소가 없다는 보장이 없다.

귀납 공리가 그 보장을 맡는다. $0$ 을 담고 $S$ 로 닫힌 부분집합이 전체뿐이라고 요구하면, 목록 자체가 그런 부분집합이므로 목록이 전체이고 목록 밖의 원소는 존재할 수 없다.

# 정의

## Peano 공리

**Peano 공리** 는 집합 $N$ , 원소 $0 \in N$ , 함수 $S \colon N \to N$ 에 대한 다음 조건이다.

1. $S$ 는 단사다. $S(m) = S(n)$ 이면 $m = n$ 이다.
2. $0$ 은 $S$ 의 상에 속하지 않는다. 모든 $n$ 에 대해 $S(n) \neq 0$ 이다.
3. 귀납 공리. $0 \in X$ 이고 $n \in X$ 가 항상 $S(n) \in X$ 를 함의하는 $X \subseteq N$ 은 $N$ 뿐이다.

세 조건을 만족하는 세 쌍 $(N, 0, S)$ 를 자연수 체계라 한다. $S(n)=n+1$ 로 둔 $(\mathbb N,0,S)$ 가 자연수 체계다. $\mathbb N$ 에 원소 $a$ 하나를 더하고 $S(a)=a$ 로 두면 조건 1 과 2 는 성립하지만, $\mathbb N$ 이 $0$ 을 담고 $S$ 로 닫힌 진부분집합이므로 조건 3 이 깨진다.

## Peano 산술

3 의 $X$ 는 임의의 부분집합을 훑으므로 2차 논리(second-order logic)의 한정사다. [1차 논리](first-order-logic.md)에서는 부분집합에 한정사를 붙일 수 없어 논리식 하나마다 공리를 하나씩 두는 공리 도식(axiom schema)으로 바꾼다. 자유변수 $n$ 을 갖는 각 논리식 $\varphi$ 에 대해 다음을 공리로 둔다.

$$
\bigl(\varphi(0) \wedge \forall n\thinspace (\varphi(n) \to \varphi(S(n)))\bigr) \to \forall n\thinspace \varphi(n)
$$

$\varphi(n)$ 을 $0+n=n$ 으로 두면 이 도식의 한 사례가 $0$ 이 왼쪽 항등원이라는 것을 준다. 이 귀납 도식에 후자 함수의 두 조건과 덧셈과 곱셈의 재귀 등식을 더한 1차 이론이 **Peano 산술(Peano arithmetic, PA)** 이다. 재귀 등식은 다음 넷이다.

$$
m + 0 = m, \qquad m + S(n) = S(m + n), \qquad m \cdot 0 = 0, \qquad m \cdot S(n) = m \cdot n + m
$$

직관 절의 계산은 둘째 등식을 두 번, 첫째 등식을 한 번 쓴 것이다.

$$
S(S(0))+S(S(0))=S\bigl(S(S(0))+S(0)\bigr)=S\bigl(S(S(S(0))+0)\bigr)=S(S(S(S(0))))
$$

# 성질

## 범주성

범주성(categoricity). 2차 형태의 Peano 공리를 만족하는 두 체계 $(N, 0, S)$ 와 $(N', 0', S')$ 사이에는 $0 \mapsto 0'$ 과 $S$ 를 보존하는 전단사가 유일하게 존재한다.

증명의 요지는 재귀로 사상 $f \colon N \to N'$ 을 정의하고 $f$ 가 전단사임을 귀납으로 보이는 것이다. 단사성은 $S'$ 의 단사성과 $0'$ 이 상에 없다는 조건에서, 전사성은 $f$ 의 상이 $0'$ 을 담고 $S'$ 으로 닫혀 있다는 데서 나온다.

## 재귀 정리

집합 $A$ , 원소 $a \in A$ , 함수 $g \colon A \to A$ 가 주어지면 $f(0) = a$ 와 $f(S(n)) = g(f(n))$ 을 만족하는 $f \colon N \to A$ 가 유일하게 존재한다.

덧셈과 곱셈은 이 정리로 정의된다. 덧셈은 $g = S$ 를 $m$ 에서 시작해 반복한 것이고, 곱셈은 $g$ 를 $m$ 더하기로 두고 $0$ 에서 시작한 것이다. 결합법칙과 교환법칙은 정의에서 귀납으로 증명된다.

## 비표준 모형

Peano 산술은 표준 모형 $\mathbb N$ 과 동형이 아닌 모형을 가진다.

언어에 새 상수 $c$ 를 더하고 무한히 많은 문장 $c \gt 0$ , $c \gt S(0)$ , $c \gt S(S(0))$ 을 이어 공리로 추가한다. 이 집합의 유한 부분집합은 $c$ 를 충분히 큰 수로 해석하면 만족되므로, [콤팩트성 정리](lowenheim-skolem.md)로 전체가 모형을 가진다. 그 모형에서 $c$ 는 모든 표준 자연수보다 크다.

2차 논리에서는 콤팩트성 정리가 성립하지 않으므로 2차 형태에서 이 논법이 막힌다. 무한 모형에 대한 범주성과 콤팩트성 정리는 한 이론에서 함께 성립할 수 없다.

## 증명할 수 없는 참인 명제

Peano 산술은 재귀적으로 공리화되고 기본 산술을 표현하므로 [Gödel 불완전성 정리](godel-incompleteness.md)의 가정을 만족한다. Peano 산술이 무모순이면 표준 모형에서 참이지만 Peano 산술에서 증명되지 않는 산술 문장이 존재한다.

Gödel 문장 외에 조합적 내용을 가진 예도 알려져 있다. Goodstein 수열이 항상 $0$ 에서 끝난다는 [Goodstein 정리](goodstein-theorem.md)와 [Paris–Harrington 정리](paris-harrington.md)가 표준 모형에서 참이면서 Peano 산술에서 증명되지 않는다.[^1]

## 무모순성 증명의 서수

Gentzen 은 $\varepsilon_0$ 까지의 [초한귀납법](ordinals.md)을 원시재귀 산술에 더하면 Peano 산술의 무모순성이 증명됨을 보였다.[^2] $\varepsilon_0$ 은 $\omega, \omega^\omega, \omega^{\omega^\omega}, \dots$ 의 극한이고 Peano 산술의 증명론적 서수(proof-theoretic ordinal)다. Peano 산술은 $\varepsilon_0$ 보다 작은 각 서수까지의 초한귀납법을 증명하지만 $\varepsilon_0$ 까지의 초한귀납법은 증명하지 못한다.

# 활용

- 자연수의 구성. [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel 집합론에 [선택공리](axiom-of-choice.md)를 더한 공리계)에서 무한공리로 얻은 귀납적 집합의 최소 원소를 $\mathbb N$ 으로 두면 Peano 공리가 정리로 증명된다. 자연수를 원시 개념으로 두지 않고 집합으로 환원하는 경로다.
- 역수학의 기준선. [역수학](reverse-mathematics.md)이 다루는 [2차 산술](second-order-arithmetic.md)의 부분체계 가운데 산술적 내포 공리(arithmetical comprehension axiom)를 갖춘 $\mathrm{ACA}\_0$ 는 산술 문장에 대해 Peano 산술의 보존적 확장이다. 이보다 약한 체계와 강한 체계를 Peano 산술과 견주어 줄 세운다.
- 형식주의 프로그램의 대상. [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md)이 유한적 수단으로 무모순성을 증명하려 한 대상이 산술이며, 불완전성 정리가 그 목표를 좁혔다.
- 자동 증명. 귀납 도식은 논리식마다 공리를 하나씩 주므로, 자동 증명기는 증명에 쓸 귀납 가설의 논리식을 스스로 골라야 한다.

[^1]: Paris and Harrington, "A Mathematical Incompleteness in Peano Arithmetic", in *Handbook of Mathematical Logic*, North-Holland, 1977.
[^2]: Gentzen, "Die Widerspruchsfreiheit der reinen Zahlentheorie", *Mathematische Annalen* 112 (1936), 493–565.

# 연관 문서

## 선수지식

- [1차 논리](first-order-logic.md)

## 더 알아보기

- [Gödel 불완전성 정리](godel-incompleteness.md)
- [2차 산술](second-order-arithmetic.md)
- [Goodstein 정리](goodstein-theorem.md)

#logic #foundations #set_theory
