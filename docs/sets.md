# 집합

# 개요

집합은 어떤 대상들이 들어 있는지만으로 결정되는 수학적 대상이다. 순서도 중복도 구별하지 않으며, 두 집합이 같다는 것은 원소가 정확히 같다는 뜻이다.

이 단순함이 집합을 수학 전체의 공용어로 만들었다. 함수, 관계, 수 체계, 확률 공간, 그래프, 공간은 모두 집합과 그 위에 얹은 구조로 기술된다. 이 지도에서 집합이 뿌리인 이유도 같다. 여기서는 집합을 다루는 기본 언어만 세우고, "어떤 모임이 집합이 될 수 있는가" 라는 질문은 [ZFC 공리계](zfc-axioms.md)로 넘긴다. 아무 조건이나 집합을 만든다고 가정하면 모순이 생기기 때문이다.

# 직관

## 상자가 아니라 명단

집합을 원소를 담은 상자로 상상하면 오해가 생긴다. 상자는 담는 순서나 같은 물건을 두 번 넣은 사실을 기억하지만 집합은 기억하지 않는다. 집합은 상자보다 명단에 가깝고, 그것도 순서 없는 명단이다. $\lbrace 1,3\rbrace$, $\lbrace 3,1\rbrace$, $\lbrace 1,3,3\rbrace$ 은 모두 같은 집합이다.

이 무심함은 손실이자 이득이다. 순서나 횟수가 중요하면 다른 도구를 써야 하지만, 무엇이 들어 있는지만 따지면 되는 상황에서는 비교와 연산이 단순해진다.

## 원소인 것과 부분집합인 것

$\in$ 와 $\subseteq$ 는 다른 관계다. $1 \in \lbrace 1, 2\rbrace$ 이지만 $1$ 은 부분집합이 아니고, $\lbrace 1\rbrace \subseteq \lbrace 1, 2\rbrace$ 이지만 $\lbrace 1\rbrace$ 은 원소가 아니다. 집합이 다른 집합의 원소가 될 수 있기 때문에 이 구별이 필요하며, 공집합과 공집합만을 원소로 갖는 집합이 다른 것도 같은 이유다.

$$
\varnothing\ne\lbrace\varnothing\rbrace
$$

왼쪽은 원소가 없고 오른쪽은 원소가 하나다.

# 정의

## 원소와 포함

집합을 $A$ , $B$ 로, 대상을 $x$ 로 쓴다. $x$ 가 $A$ 의 원소임을 $x \in A$ 로 적는다. $A$ 의 모든 원소가 $B$ 에도 속하면 $A$ 는 $B$ 의 부분집합이다.

$$
A\subseteq B\iff\forall x\thinspace(x\in A\Rightarrow x\in B)
$$

두 집합은 서로가 서로의 부분집합일 때 같다. 등식을 증명할 때 양쪽 포함을 각각 보이는 방법이 여기서 나온다.

$$
A=B\iff A\subseteq B\ \text{and}\ B\subseteq A
$$

원소가 하나도 없는 집합이 공집합 $\emptyset$ 이고, 공집합은 모든 집합의 부분집합이다. $\forall x(x \in \emptyset \Rightarrow x \in A)$ 의 가정이 결코 참이 되지 않으므로 함의 전체가 참이기 때문이다.

## 연산

$$
\begin{aligned}
A\cup B&=\lbrace x:x\in A\ \text{or}\ x\in B\rbrace\cr
A\cap B&=\lbrace x:x\in A\ \text{and}\ x\in B\rbrace\cr
A\setminus B&=\lbrace x:x\in A\ \text{and}\ x\notin B\rbrace
\end{aligned}
$$

$A$ 를 $\lbrace 1,3\rbrace$ 이라 하고 $B$ 를 $\lbrace 3,5\rbrace$ 라 하면 교집합은 $\lbrace 3\rbrace$ 이고 합집합은 $\lbrace 1,3,5\rbrace$ 이며 차집합 $A\setminus B$ 는 $\lbrace 1\rbrace$ 이다. 전체집합 $U$ 를 고정하면 여집합은 $U\setminus A$ 다.

세 연산이 논리 연결사 $\lor$, $\land$, $\lnot$ 에 대응한다는 점이 중요하다. 집합 등식의 증명은 대개 "임의의 $x$ 에 대해 양변에 속할 조건이 같은 명제인가" 를 확인하는 일로 환원된다.

## 멱집합과 곱집합

$A$ 의 모든 부분집합을 모은 집합이 멱집합 $P(A)$ 이고, 순서쌍을 모은 것이 곱집합이다.

$$
A\times B=\lbrace(a,b):a\in A,\ b\in B\rbrace
$$

곱집합에서는 순서가 중요하므로 $(a,b)$ 와 $(b,a)$ 는 다르다. 순서를 잊는 집합 위에서 순서를 되살리는 장치가 순서쌍이고, 이것이 [함수](functions.md)와 [동치관계](relations.md)를 집합만으로 정의할 수 있게 해 준다.

## 인덱스족

집합을 여러 개 다룰 때는 인덱스 집합 $I$ 로 이름을 붙이고 한꺼번에 연산한다.

$$
\bigcup_{i\in I}A_i=\lbrace x:\exists i\in I,\ x\in A_i\rbrace,\qquad \bigcap_{i\in I}A_i=\lbrace x:\forall i\in I,\ x\in A_i\rbrace
$$

유한 개가 아니어도 되므로 극한, 측도, 위상을 다룰 때 기본 도구가 된다.

# 성질

## 대수 법칙

교환·결합·분배 법칙이 성립하고, 여집합과 함께 De Morgan 법칙이 성립한다.

$$
(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c
$$

증명은 원소 수준에서 $\lnot(P\lor Q)\iff(\lnot P)\land(\lnot Q)$ 를 확인하는 것이 전부다. 이 구조를 추상화한 것이 [Boolean algebra](boolean-algebras.md)이고, 합집합·교집합·여집합이 논리합·논리곱·부정의 자리를 그대로 차지한다.

## 멱집합의 크기

$|A|=n$ 인 유한집합에 대해 다음이 성립한다.

$$
\lvert\mathcal P(A)\rvert=2^n
$$

각 원소를 넣을지 뺄지 독립적으로 고르기 때문이고, 공집합과 $A$ 자신도 센다. 이 계산이 [셈의 기본 원리](counting-principles.md)의 곱 법칙을 처음 쓰는 자리다.

무한집합에서는 $P(A)$ 가 $A$ 보다 반드시 크다는 Cantor 정리가 성립한다. 어떤 함수 $f : A \to P(A)$ 를 가져와도 $D = \lbrace x \in A : x \notin f(x) \rbrace$ 는 상에 들어 있지 않기 때문이다. $D = f(a)$ 라면 $a \in D$ 인지 묻는 순간 모순이 나온다. 이 대각선 논법이 [가산성과 비가산성](cardinality.md)의 출발점이다.

## 아무 조건이나 집합을 만들지는 못한다

"자기 자신을 원소로 갖지 않는 집합 전체" 를 집합이라고 하면 그 집합이 자신의 원소인지 물었을 때 모순이 생긴다. 러셀의 역설이다. 그래서 현대의 집합론은 조건으로 새 집합을 만드는 것을 이미 있는 집합의 부분집합을 고르는 경우로 제한한다. 이 제한을 명시한 체계가 ZFC 이며, 이 문서에서 쓰는 연산은 모두 그 안에서 정당화된다.

# 활용

## 무대를 지정하는 일

수학의 거의 모든 정의는 먼저 무대가 되는 집합을 정하는 것으로 시작한다. 함수의 정의역과 공역, 확률에서 일어날 수 있는 결과 전체, 그래프의 정점, 벡터 공간의 바탕이 모두 집합이다. 조건을 결합하고 분리하는 논의는 집합 연산으로 번역되어 계산이 된다.

## 무엇을 버리는지 알고 쓰기

집합으로 옮기는 순간 순서와 중복은 사라진다. 순서가 중요하면 순서쌍이나 수열을, 출현 횟수가 중요하면 다중집합을, 원소 사이의 관계가 중요하면 그 관계를 따로 명시해야 한다. 데이터를 집합으로 모형화할 때 생기는 오류는 대개 이 세 가지 중 하나를 잃어버린 데서 나온다.[^1]

[^1]: OpenStax, *Contemporary Mathematics*, §1.1 Basic Set Concepts. 원소·부분집합·공집합의 기초 설명. https://openstax.org/books/contemporary-mathematics/pages/1-1-basic-set-concepts

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

#set_theory
