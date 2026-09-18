# 집합

# 개요

집합은 원소만으로 결정되는 대상이다. 순서와 중복은 구별하지 않는다. 함수, 관계, 수 체계, 확률 공간, 그래프, 위상 공간은 모두 집합 위에 구조를 얹어 정의한다. 어떤 모임이 집합인지는 [ZFC 공리계](zfc-axioms.md)가 정한다.

# 직관

집합은 순서 없는 명단이다. $\lbrace 1,3\rbrace$ , $\lbrace 3,1\rbrace$ , $\lbrace 1,3,3\rbrace$ 은 같은 집합이다. 순서가 필요하면 순서쌍을, 횟수가 필요하면 다중집합을 따로 둔다.

원소 관계 $\in$ 와 포함 관계 $\subseteq$ 는 다르다. $1\in\lbrace 1,2\rbrace$ 이지만 $1\subseteq\lbrace 1,2\rbrace$ 는 아니고, $\lbrace 1\rbrace\subseteq\lbrace 1,2\rbrace$ 이지만 $\lbrace 1\rbrace\in\lbrace 1,2\rbrace$ 는 아니다. 집합은 다른 집합의 원소가 될 수 있다. $\varnothing\ne\lbrace\varnothing\rbrace$ 이다.

# 정의

## 원소와 부분집합

$x$ 가 $A$ 의 원소이면 $x\in A$ 로 쓴다. $A$ 의 모든 원소가 $B$ 의 원소이면 $A$ 는 $B$ 의 **부분집합**이다.

$$
A\subseteq B\iff\forall x\thinspace(x\in A\Rightarrow x\in B)
$$

두 집합은 서로가 서로의 부분집합일 때 같다.

$$
A=B\iff A\subseteq B\ \text{and}\ B\subseteq A
$$

원소가 없는 집합이 **공집합** $\varnothing$ 이다. $x\in\varnothing$ 이 거짓이므로 $\varnothing\subseteq A$ 가 모든 $A$ 에 대해 성립한다.

## 연산

$$
\begin{aligned}
A\cup B&=\lbrace x:x\in A\ \text{or}\ x\in B\rbrace\cr
A\cap B&=\lbrace x:x\in A\ \text{and}\ x\in B\rbrace\cr
A\setminus B&=\lbrace x:x\in A\ \text{and}\ x\notin B\rbrace
\end{aligned}
$$

전체집합 $U$ 를 고정하면 여집합은 $A^c=U\setminus A$ 다. $A=\lbrace 1,3\rbrace$ , $B=\lbrace 3,5\rbrace$ 이면 $A\cup B=\lbrace 1,3,5\rbrace$ , $A\cap B=\lbrace 3\rbrace$ , $A\setminus B=\lbrace 1\rbrace$ 이다.

세 연산은 논리 연결사 $\lor$ , $\land$ , $\lnot$ 에 대응한다. 집합 등식의 증명은 임의의 $x$ 에 대해 양변의 소속 조건이 동치임을 보이는 것이다.

## 멱집합과 곱집합

$A$ 의 부분집합 전체의 집합이 **멱집합** $\mathcal P(A)$ 이다. 순서쌍 전체의 집합이 **곱집합**이다.

$$
A\times B=\lbrace(a,b):a\in A,\ b\in B\rbrace
$$

$(a,b)=(c,d)\iff a=c,\ b=d$ 이다. 순서쌍이 [함수](functions.md)와 [관계](relations.md)를 집합으로 정의하는 재료다.

## 인덱스족

인덱스 집합 $I$ 로 이름 붙인 집합족 $\lbrace A_i\rbrace\_{i\in I}$ 의 합집합과 교집합은 다음과 같다.

$$
\bigcup_{i\in I}A_i=\lbrace x:\exists i\in I,\ x\in A_i\rbrace,\qquad \bigcap_{i\in I}A_i=\lbrace x:\forall i\in I,\ x\in A_i\rbrace
$$

$I$ 는 무한집합이어도 된다.

# 성질

## 대수 법칙

합집합과 교집합은 교환·결합·분배 법칙을 만족한다. 여집합에 대해 De Morgan 법칙이 성립한다.

$$
(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c
$$

증명은 원소 수준에서 $\lnot(P\lor Q)\iff\lnot P\land\lnot Q$ 를 확인하는 것이다. 이 구조를 추상화한 것이 [Boolean algebra](boolean-algebras.md) 다.

## 멱집합의 크기

$|A|=n$ 이면 $|\mathcal P(A)|=2^n$ 이다. 각 원소의 포함 여부를 독립으로 고르므로 [곱 법칙](counting-principles.md)이 적용된다.

## Cantor 정리

모든 집합 $A$ 에 대해 $|A|\lt |\mathcal P(A)|$ 다.

*증명.* $a\mapsto\lbrace a\rbrace$ 가 단사이므로 $|A|\le|\mathcal P(A)|$ 다. 전사 $f:A\to\mathcal P(A)$ 가 있다고 하자. $D=\lbrace x\in A:x\notin f(x)\rbrace$ 에 대해 $D=f(a)$ 인 $a$ 를 잡으면 $a\in D\iff a\notin D$ 로 모순이다. 이 대각선 논법이 [기수](cardinality.md) 이론의 기초다.

## Russell 의 역설

$R=\lbrace x:x\notin x\rbrace$ 를 집합으로 인정하면 $R\in R\iff R\notin R$ 이다. 그래서 ZFC 는 조건으로 집합을 만드는 것을 기존 집합의 부분집합을 고르는 분리 공리로 제한한다. 이 문서의 연산은 모두 ZFC 안에서 정당화된다.

# 활용

- 함수의 정의역과 공역, 확률의 표본공간, 그래프의 정점 집합, 벡터 공간의 바탕 집합은 모두 집합이다. 조건의 결합과 분리는 집합 연산으로 계산한다.
- 순서가 필요하면 순서쌍이나 수열, 출현 횟수가 필요하면 다중집합, 원소 사이의 관계가 필요하면 [관계](relations.md)를 쓴다.[^1]

[^1]: OpenStax, *Contemporary Mathematics*, §1.1 Basic Set Concepts. https://openstax.org/books/contemporary-mathematics/pages/1-1-basic-set-concepts

# 연관 문서

## 선수지식

없음.

## 더 알아보기

### 집합 위의 구조

- [함수](functions.md)
- [동치관계와 동치류](relations.md)
- [그래프](graphs.md)

### 세기와 논리

- [셈의 기본 원리](counting-principles.md)
- [1차 논리](first-order-logic.md)
- [Boolean algebra](boolean-algebras.md)
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
