# 아이디얼과 몫환

아이디얼은 환의 원소를 합동류로 묶어도 덧셈과 곱셈이 잘 정의되게 하는 부분집합이다.

## 정의

환 R의 부분집합 I가 양쪽 아이디얼이라는 것은 I가 덧셈에 관해 부분군이고, 모든 r∈R과 a∈I에 대해 다음 흡수 조건을 만족한다는 뜻이다.

$$
ra\in I,\qquad ar\in I
$$

가환환에서는 두 조건이 같다. R의 원소 x와 y에 대해 x-y∈I일 때 동치라고 정한다. x가 속한 동치류를 x+I라 쓰고, 모든 동치류의 집합을 몫환 R/I라 한다. 연산은 대표원으로 다음처럼 정의한다.

$$
(x+I)+(y+I)=(x+y)+I
$$

$$
(x+I)(y+I)=xy+I
$$

## 성질

곱셈이 대표원 선택과 무관한 이유가 아이디얼의 흡수 조건이다. x'=x+a와 y'=y+b이고 a,b∈I라 하자. 그러면 차이는 다음과 같다.

$$
x'y'-xy=xb+ay+ab\in I
$$

따라서 x'y'와 xy는 같은 동치류를 정한다. 덧셈 부분군이라는 조건만으로는 xb와 ay가 I에 남는다고 보장할 수 없다.

정수환에서 n의 배수 전체를 n\mathbb Z라 쓰면 n\mathbb Z는 아이디얼이고, 몫환은 정수를 n을 법으로 묶은 환이다.

$$
\mathbb Z/n\mathbb Z
$$

환 준동형 φ:R→S의 kernel은 아이디얼이다. 반대로 I를 포함하는 kernel을 가진 모든 환 준동형은 표준 사영 q:R→R/I를 통해 유일하게 분해된다. 즉 어떤 유일한 환 준동형 ψ:R/I→S가 있어 φ=ψ∘q를 만족한다.

## 활용

특정 관계를 0으로 강제한 새 환을 만든다. 합동산술은 정수환의 몫이고, 다항식환을 아이디얼로 나누면 방정식 관계를 만족하는 대수 구조를 얻는다. 환 준동형의 상을 kernel로 나눈 몫환과 비교하는 동형정리의 기반이 된다.

## 기타 참고 문헌

- [MIT OpenCourseWare 18.703, Lecture 16: Ring Homomorphisms and Ideals](https://ocw.mit.edu/courses/18-703-modern-algebra-spring-2013/3d284ce730e27a52b1fbdb5cbcebedf6_MIT18_703S13_pra_l_16.pdf): Definition-Lemma 16.4, Proposition 16.5, Theorem 16.6–16.7.

# 연관 문서

## 선수지식

- [환](rings.md)

## 더 알아보기

- [소 아이디얼과 극대 아이디얼](prime-ideals.md)
- [중국인의 나머지 정리](chinese-remainder-theorem.md)
