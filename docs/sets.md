# 집합

# 개요

**집합(set)** 은 원소만으로 결정되는 대상이다. 장바구니 하나에 사과, 배, 사과를 담고 다른 장바구니에 배, 사과를 담으면 담은 개수와 순서는 다르지만, 어떤 과일이 들어 있는지만 물으면 두 답이 같다. 집합은 순서와 중복을 버리고 무엇이 들어 있는지만으로 대상을 정하며, 함수, 관계, 수 체계는 이 위에 구조를 더해 정의한다.

# 직관

개요의 두 장바구니에 "무엇이 들어 있는가" 를 물으면 둘 다 사과와 배라고 답한다. 이 답을 $\lbrace \text{사과}, \text{배}\rbrace$ 로 쓴다. 담은 순서와 횟수는 답에 나타나지 않으므로 $\lbrace \text{사과}, \text{배}, \text{사과}\rbrace$, $\lbrace \text{배}, \text{사과}\rbrace$, $\lbrace \text{사과}, \text{배}\rbrace$ 는 같은 집합이다.

"사과가 들어 있다" 와 "사과만 담은 장바구니의 내용이 모두 들어 있다" 는 다른 말이다. 앞의 것은 $\text{사과}\in\lbrace \text{사과}, \text{배}\rbrace$ 로, 뒤의 것은 $\lbrace \text{사과}\rbrace\subseteq\lbrace \text{사과}, \text{배}\rbrace$ 로 쓴다.

장바구니 안에 작은 장바구니를 통째로 넣을 수도 있다. $\lbrace\lbrace \text{사과}\rbrace, \text{배}\rbrace$ 의 원소는 $\lbrace \text{사과}\rbrace$ 와 배이고, 사과는 그 원소가 아니다. 빈 장바구니 하나를 담은 장바구니는 비어 있지 않으므로 $\varnothing\ne\lbrace\varnothing\rbrace$ 이다.

# 정의

## 원소와 부분집합

$x$ 가 $A$ 의 원소(element)이면 $x\in A$ 로 쓴다. $A$ 의 모든 원소가 $B$ 의 원소이면 $A$ 를 $B$ 의 **부분집합(subset)** 이라 한다.

$$
A\subseteq B\iff\forall x\thinspace(x\in A\Rightarrow x\in B)
$$

두 집합은 서로가 서로의 부분집합일 때 같다.

$$
A=B\iff A\subseteq B\quad\text{and}\quad B\subseteq A
$$

$\lbrace 1\rbrace\subseteq\lbrace 1,3\rbrace$ 이지만 $\lbrace 1,3\rbrace\not\subseteq\lbrace 1\rbrace$ 이다. $\lbrace 1,3\rbrace$ 과 $\lbrace 3,1\rbrace$ 은 서로가 서로의 부분집합이므로 같다.

원소가 없는 집합을 **공집합(empty set)** 이라 하고 $\varnothing$ 으로 쓴다. $x\in\varnothing$ 이 언제나 거짓이므로 $\varnothing\subseteq A$ 가 모든 $A$ 에 대해 성립한다.

## 합집합, 교집합, 차집합

$$
\begin{aligned}
A\cup B&=\lbrace x:x\in A\quad\text{or}\quad x\in B\rbrace\cr
A\cap B&=\lbrace x:x\in A\quad\text{and}\quad x\in B\rbrace\cr
A\setminus B&=\lbrace x:x\in A\quad\text{and}\quad x\notin B\rbrace
\end{aligned}
$$

세 집합을 차례로 **합집합(union)**, **교집합(intersection)**, **차집합(difference)** 이라 한다. 전체집합 $U$ 를 고정하면 $A^c=U\setminus A$ 를 $A$ 의 **여집합(complement)** 이라 한다. $A=\lbrace 1,3\rbrace$, $B=\lbrace 3,5\rbrace$ 이면 $A\cup B=\lbrace 1,3,5\rbrace$, $A\cap B=\lbrace 3\rbrace$, $A\setminus B=\lbrace 1\rbrace$ 이다. $U=\lbrace 1,2,3,4,5\rbrace$ 이면 $A^c=\lbrace 2,4,5\rbrace$ 이다.

## 멱집합과 곱집합

$A$ 의 부분집합 전체의 집합을 $A$ 의 **멱집합(power set)** 이라 하고 $\mathcal P(A)$ 로 쓴다. $\mathcal P(\lbrace 1,2\rbrace)=\lbrace\varnothing,\lbrace 1\rbrace,\lbrace 2\rbrace,\lbrace 1,2\rbrace\rbrace$ 이다.

순서쌍 $(a,b)$ 는 $(a,b)=(c,d)\iff a=c,\quad b=d$ 를 만족하는 대상이다. 순서쌍 전체의 집합을 **곱집합(Cartesian product)** 이라 한다.

$$
A\times B=\lbrace(a,b):a\in A,\quad b\in B\rbrace
$$

$\lbrace 1,2\rbrace\times\lbrace a,b\rbrace=\lbrace(1,a),(1,b),(2,a),(2,b)\rbrace$ 이다. $(1,2)\neq(2,1)$ 이지만 $\lbrace 1,2\rbrace=\lbrace 2,1\rbrace$ 이다.

## 인덱스족

인덱스 집합 $I$ 의 원소 $i$ 마다 집합 $A_i$ 를 하나씩 준 것을 **인덱스족(indexed family)** 이라 하고 $\lbrace A_i\rbrace\_{i\in I}$ 로 쓴다. 그 합집합과 교집합은 다음과 같다.

$$
\bigcup_{i\in I}A_i=\lbrace x:\exists i\in I,\quad x\in A_i\rbrace,\qquad \bigcap_{i\in I}A_i=\lbrace x:\forall i\in I,\quad x\in A_i\rbrace
$$

$I$ 는 무한집합이어도 된다. 자연수 $n$ 마다 $A_n=\lbrace n,n+1,n+2,\dots\rbrace$ 로 두면 합집합은 자연수 전체이고, 어느 자연수 $m$ 도 $A_{m+1}$ 에 없으므로 교집합은 $\varnothing$ 이다.

# 성질

## 대수 법칙

합집합, 교집합, 여집합은 논리 연결사 $\lor$, $\land$, $\lnot$ 에 대응한다. 집합 등식은 임의의 $x$ 에 대해 양변의 소속 조건이 동치임을 보여 증명한다.

합집합과 교집합은 교환·결합·분배 법칙을 만족한다. 여집합에 대해 [De Morgan 법칙](de-morgan-laws.md)이 성립한다.

$$
(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c
$$

증명은 원소마다 $\lnot(P\lor Q)\iff\lnot P\land\lnot Q$ 를 확인한다. 이 법칙들을 공리로 삼은 구조가 [Boole 대수](boolean-algebras.md)다.

## 멱집합의 크기

$|A|=n$ 이면 $|\mathcal P(A)|=2^n$ 이다. 각 원소의 포함 여부를 독립으로 고르므로 [곱 법칙](counting-principles.md)이 적용된다.

## Cantor 정리

모든 집합 $A$ 에 대해 $|A|\lt |\mathcal P(A)|$ 다. 이것을 Cantor 정리(Cantor's theorem)라 한다.

$a\mapsto\lbrace a\rbrace$ 가 단사이므로 $|A|\le|\mathcal P(A)|$ 다. 전사 $f:A\to\mathcal P(A)$ 가 있다고 하자. $D=\lbrace x\in A:x\notin f(x)\rbrace$ 에 대해 $D=f(a)$ 인 $a$ 를 잡으면 $a\in D\iff a\notin D$ 로 모순이다. 이 논법을 대각선 논법(diagonal argument)이라 하고, [기수](cardinality.md) 문서에서 같은 논법으로 실수가 셀 수 없음을 보인다.

## Russell 의 역설

어떤 모임이 집합인지는 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel set theory with choice)가 정한다. 조건 하나로 모은 모임을 모두 집합으로 인정하면 모순이 나온다. $R=\lbrace x:x\notin x\rbrace$ 를 집합으로 인정하면 $R\in R\iff R\notin R$ 이다. 이것을 Russell 의 역설(Russell's paradox)이라 한다. 그래서 ZFC 는 조건으로 집합을 만드는 것을 기존 집합의 부분집합을 고르는 분리 공리(axiom schema of separation)로 제한한다. 위의 집합 연산은 모두 ZFC 안에서 정당화된다.

# 활용

- [함수](functions.md)와 [동치관계](equivalence-relations.md)는 순서쌍의 집합으로 정의된다.
- 함수의 정의역과 공역, 확률의 표본공간, 그래프의 정점 집합, [벡터 공간](vector-spaces.md)의 바탕집합은 모두 집합이다. 조건의 결합과 분리는 집합 연산으로 계산한다.
- 순서가 필요하면 순서쌍이나 수열, 출현 횟수가 필요하면 다중집합, 원소 사이의 같음을 새로 정하려면 동치관계를 쓴다.[^1]

[^1]: OpenStax, *Contemporary Mathematics*, §1.1 Basic Set Concepts. https://openstax.org/books/contemporary-mathematics/pages/1-1-basic-set-concepts

# 연관 문서

## 선수지식

없음.

## 더 알아보기

### 집합 위의 구조

- [함수](functions.md)
- [동치관계](equivalence-relations.md)
- [그래프](graphs.md)
- [실수](real-numbers.md)

### 세기와 논리

- [셈의 기본 원리](counting-principles.md)
- [De Morgan 법칙](de-morgan-laws.md)
- [1차 논리](first-order-logic.md)
- [Boole 대수](boolean-algebras.md)
- [ZFC 공리계](zfc-axioms.md)
- [수학적 플라톤주의](mathematical-platonism.md)

### 분야 개관

- [수학기초론 개관](foundations-overview.md)
- [조합론 개관](combinatorics-overview.md)
- [선형대수 개관](linear-algebra-overview.md)
- [추상대수 개관](abstract-algebra-overview.md)
- [정수론 개관](number-theory-overview.md)
- [위상수학 개관](topology-overview.md)
- [해석학 개관](analysis-overview.md)
- [복소해석 개관](complex-analysis-overview.md)
- [측도론 개관](measure-theory-overview.md)
- [확률론 개관](probability-overview.md)
- [통계 개관](statistics-overview.md)
- [미분기하 개관](differential-geometry-overview.md)
- [그래프 이론 개관](graph-theory-overview.md)
- [최적화 개관](optimization-overview.md)
- [범주론 개관](category-theory-overview.md)
- [순서 이론 개관](order-theory-overview.md)
- [암호 개관](cryptography-overview.md)
- [정보이론 개관](information-theory-overview.md)
- [기계학습 개관](machine-learning-overview.md)
- [함수해석 개관](functional-analysis-overview.md)

#set_theory #foundations
