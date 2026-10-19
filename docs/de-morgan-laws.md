# De Morgan 법칙

# 개요

**De Morgan 법칙(De Morgan's laws)** 은 여집합이 합집합과 교집합을 서로 바꾼다는 두 등식이다.

$$
(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c
$$

[집합](sets.md)의 연산에서도 명제의 결합에서도 같은 꼴이고, 두 등식을 공리로 가진 구조가 [Boole 대수](boolean-algebras.md)다. 부정이 약한 [Heyting 대수](heyting-algebras.md)에서는 첫째 등식만 성립한다.

# 직관

전체집합을 $1$ 부터 $10$ 까지의 정수로 두고 $A$ 를 2의 배수, $B$ 를 3의 배수라 한다. $A=\lbrace 2,4,6,8,10\rbrace$ 이고 $B=\lbrace 3,6,9\rbrace$ 이므로 $A\cup B=\lbrace 2,3,4,6,8,9,10\rbrace$ 이고 그 여집합은 $\lbrace 1,5,7\rbrace$ 이다.

같은 집합을 다른 길로 구한다. 2의 배수가 아닌 수는 $\lbrace 1,3,5,7,9\rbrace$ 이고 3의 배수가 아닌 수는 $\lbrace 1,2,4,5,7,8,10\rbrace$ 이다. 두 집합의 교집합도 $\lbrace 1,5,7\rbrace$ 이다.

두 길이 같은 값을 내는 까닭은 원소 하나를 두고 보면 나온다. 수 $7$ 이 $A\cup B$ 에 없다는 것은 $7$ 이 $A$ 에도 없고 $B$ 에도 없다는 것과 같다. 원소마다 이 말이 성립하므로 두 집합이 같다. 합집합을 교집합으로 바꾼 등식도 마찬가지로, "둘 다 들어 있지는 않다" 가 "적어도 하나에는 없다" 와 같다.

# 정의

## 집합

전체집합 $U$ 의 부분집합 $A,B$ 와 여집합 $A^c=U\setminus A$ 에 대해 다음 두 등식이 성립한다.

$$
(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c
$$

인덱스족 $\lbrace A_i\rbrace\_{i\in I}$ 에 대해서도 같은 등식이 성립한다.

$$
\Big(\bigcup_{i\in I}A_i\Big)^c=\bigcap_{i\in I}A_i^c,\qquad \Big(\bigcap_{i\in I}A_i\Big)^c=\bigcup_{i\in I}A_i^c
$$

$I$ 는 무한집합이어도 된다.

## 명제

명제 $P,Q$ 에 대해 다음 두 동치가 성립한다.

$$
\lnot(P\lor Q)\iff\lnot P\land\lnot Q,\qquad \lnot(P\land Q)\iff\lnot P\lor\lnot Q
$$

[1차 논리](first-order-logic.md)의 논리식 $\varphi(x)$ 에서는 한정사(quantifier)가 같은 꼴로 바뀐다.

$$
\lnot\forall x\thinspace\varphi(x)\iff\exists x\thinspace\lnot\varphi(x),\qquad \lnot\exists x\thinspace\varphi(x)\iff\forall x\thinspace\lnot\varphi(x)
$$

## 격자

보원(complement)을 가진 유계 [격자](order-lattices.md)에서 원소 $a,b$ 와 보원 $\lnot a$ 에 대한 등식으로 쓴다.

$$
\lnot(a\lor b)=\lnot a\land\lnot b,\qquad \lnot(a\land b)=\lnot a\lor\lnot b
$$

여기서 $\lor$ 와 $\land$ 는 이음(join)과 만남(meet)이다. 집합 판본은 멱집합을 이 구조로 본 것이고, 명제 판본은 명제의 동치류를 이 구조로 본 것이다.

# 성질

## 증명

$x\in(A\cup B)^c$ 는 $x\notin A\cup B$ 와 같고, 이것은 $x\in A$ 와 $x\in B$ 가 둘 다 성립하지 않는다는 뜻이다. 곧 $x\in A^c$ 이고 $x\in B^c$ 이므로 $x\in A^c\cap B^c$ 다. 각 단계가 동치이므로 두 집합이 같다. 인덱스족 판본도 $\lnot\exists i$ 를 $\forall i\thinspace\lnot$ 로 바꾸는 같은 계산이다.

## 여집합의 쌍대성

둘째 등식은 첫째 등식에서 나온다. 첫 등식의 $A,B$ 자리에 $A^c,B^c$ 를 넣으면 $(A^c\cup B^c)^c=A\cap B$ 이고, 양변의 여집합을 취하면 $A^c\cup B^c=(A\cap B)^c$ 다. 여집합이 대합(involution)이어서 $(A^c)^c=A$ 가 성립하므로 이 대입이 가능하다.

그래서 합집합과 교집합을 서로 바꾸고 포함관계를 뒤집은 진술은 원래 진술과 동시에 성립한다. Boole 대수의 쌍대성 원리가 이 교환을 공리 수준에서 적은 것이다.

## Boole 대수에서의 유도

Boole 대수에서 두 등식은 공리에서 유도된다. $\lnot a\land\lnot b$ 가 $a\lor b$ 의 보원임을 보이면 보원의 유일성으로 첫 등식이 나온다.

$$
(a\lor b)\land(\lnot a\land\lnot b)=(a\land\lnot a\land\lnot b)\lor(b\land\lnot a\land\lnot b)=0
$$

$$
(a\lor b)\lor(\lnot a\land\lnot b)=\big((a\lor b)\lor\lnot a\big)\land\big((a\lor b)\lor\lnot b\big)=1
$$

두 계산 모두 분배법칙과 $a\land\lnot a=0$, $a\lor\lnot a=1$ 만 쓴다. 둘째 등식은 쌍대성으로 따라온다.

## Heyting 대수에서의 실패

Heyting 대수의 부정은 $\lnot a=a\to 0$ 이고 보원이 아니다. 첫 등식 $\lnot(a\lor b)=\lnot a\land\lnot b$ 는 그대로 성립한다. 둘째 등식에서는 $\lnot a\lor\lnot b\le\lnot(a\land b)$ 만 성립하고 역의 포함은 성립하지 않는다.

반례는 [직관주의 논리의 Kripke 의미론](kripke-semantics.md)에서 얻는다. 뿌리 $w_0$ 위에 서로 비교할 수 없는 두 세계 $w_1,w_2$ 를 둔 프레임을 잡고, $p$ 를 $w_1$ 에서만 참, $q$ 를 $w_2$ 에서만 참으로 둔다. 어느 세계에서도 $p\land q$ 가 참이 아니므로 $\lnot(p\land q)$ 는 $w_0$ 에서 참이다. 한편 $w_1$ 에서 $p$ 가 참이므로 $\lnot p$ 는 $w_0$ 에서 참이 아니고, $w_2$ 에서 $q$ 가 참이므로 $\lnot q$ 도 $w_0$ 에서 참이 아니다. 따라서 $\lnot p\lor\lnot q$ 는 $w_0$ 에서 참이 아니다.

둘째 등식이 모든 원소에서 성립하는 것은 약한 배중률(weak excluded middle) $\lnot a\lor\lnot\lnot a=1$ 과 동치다. 한 방향은 둘째 등식의 $b$ 자리에 $\lnot a$ 를 넣어 $a\land\lnot a=0$ 과 $\lnot 0=1$ 을 쓰면 나온다. 이 식을 직관주의 명제논리에 더한 중간논리를 Jankov 논리(Jankov's logic)라 한다[^1].

# 활용

- [측도](measure.md)의 $\sigma$ 대수는 여집합과 셀 수 있는 합집합에 닫혀 있다는 조건으로 정의된다. 셀 수 있는 교집합에 닫혀 있는 것은 인덱스족 판본으로 따라오므로 공리에 넣지 않는다.
- [위상 공간](topology.md)의 공리는 열린집합이 임의 합집합과 유한 교집합에 닫혀 있다고 말한다. 닫힌집합이 임의 교집합과 유한 합집합에 닫혀 있다는 진술은 이 공리에 인덱스족 판본을 적용한 것이다.
- [Borel–Cantelli 보조정리](borel-cantelli.md)는 상극한 사건 $\bigcap_{N}\bigcup_{n\ge N}A_n$ 을 다룬다. 둘째 보조정리의 증명은 이 사건의 여집합을 $\bigcup_{N}\bigcap_{n\ge N}A_n^c$ 로 바꾸고 독립성으로 곱을 쪼갠다.
- 1차 논리의 논리식을 한정사가 앞에 모인 꼴로 바꿀 때 부정을 한정사 안쪽으로 밀어 넣는 데 한정사 판본을 쓴다.
- [직관주의](intuitionism.md)에서 어느 고전적 추론이 남는지를 가르는 데 쓴다. 합집합 쪽 등식은 남고 교집합 쪽 등식은 남지 않는다.

[^1]: Stanford Encyclopedia of Philosophy, "Intuitionistic Logic", https://plato.stanford.edu/entries/logic-intuitionistic/

# 연관 문서

## 선수지식

- [집합](sets.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #logic #order_theory #foundations
