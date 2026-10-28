# Hilbert 의 10번 문제

# 개요

**Hilbert 의 10번 문제(Hilbert's tenth problem)** 는 정수계수 다항방정식이 정수해를 갖는지 판정하는 알고리즘을 찾으라는 문제다. $x^2-2y^2=1$ 은 $(3,2)$ 를 대입하면 해가 있음이 확인되지만, 해가 없는 방정식은 정수 쌍을 아무리 많이 대입해도 "해가 없다" 는 답이 나오지 않는다. 이 문제는 그런 알고리즘이 없다는 것으로 풀렸고, 증명은 프로그램이 멈추는지를 다항방정식의 해 존재로 적어 [정지 문제](halting-problem.md)로 옮긴다.

# 직관

$x^2-2y^2=1$ 이 양의 정수해를 갖는지 알려면 $(x,y)$ 를 $(1,1),(2,1),(1,2),(3,1),\dots$ 처럼 빠짐없이 차례로 대입하면 된다. $(3,2)$ 에서 식이 성립하므로 "예" 라고 답한다. 해가 없는 방정식에서는 대입이 끝나지 않고, 대입만으로는 "아직 못 찾았다" 와 "해가 없다" 를 가를 수 없다. 프로그램을 실행해 보며 멈추는지 기다리는 것과 같은 모양이다.

모양이 같으니 방향을 뒤집어 프로그램의 정지를 방정식으로 쓴다. 프로그램 $e$ 가 입력 $a$ 에서 멈추는 것을 "실행 기록을 부호화한 수 $x_1,\dots,x_m$ 이 있어 $P(a,x_1,\dots,x_m)=0$" 으로 쓸 수 있으면, 방정식의 해 존재를 판정하는 알고리즘이 정지를 판정한다. 막히는 곳은 실행 기록의 길이다. 단계 수 $n$ 의 계산에서 기록을 부호화한 수는 $2^n$ 처럼 지수적으로 커지고, 다항식은 지수함수를 직접 쓸 수 없다.

[Pell 방정식](pell-equation.md) $x^2-(a^2-1)y^2=1$ 의 해는 $a+\sqrt{a^2-1}$ 의 거듭제곱으로 나오므로 $n$ 번째 해가 대략 $(2a)^n$ 으로 자란다. 해의 번호 $n$ 과 해의 크기 사이의 관계를 다항방정식으로 적으면 지수함수가 다항식으로 표현되고, 막힌 곳이 풀린다.

# 정의

자연수 $n$ 개 묶음의 집합 $A\subseteq\mathbb N^n$ 이 **Diophantine 집합(Diophantine set)** 이라는 것은 정수계수 다항식 $P(a_1,\dots,a_n,x_1,\dots,x_m)$ 이 존재해

$$
(a_1,\dots,a_n)\in A\iff \exists x_1,\dots,x_m\in\mathbb N\ \thinspace P(a_1,\dots,a_n,x_1,\dots,x_m)=0
$$

인 것이다. $a_i$ 는 매개변수이고 $x_j$ 는 미지수다. 미지수를 자연수로 두든 정수로 두든 같은 집합족이 나온다. 정수 미지수 $x$ 는 두 자연수의 차 $x=u-v$ 로 바꾸고, 자연수 미지수 $x$ 는 [Lagrange 네 제곱수 정리](four-squares-theorem.md)로 네 정수 제곱의 합 $x=p^2+q^2+r^2+s^2$ 으로 바꾼다.

다항식 대신 $x^y$ 꼴의 항을 허용한 식으로 정의한 집합을 **지수 Diophantine 집합(exponential Diophantine set)** 이라 한다.

# 성질

## MRDP 정리

Hilbert 가 1900년에 낸 23 문제의 열 번째가 이 문제이고, Matiyasevich 가 1970년에 Davis, Putnam, Robinson 의 결과를 완성해 판정 알고리즘이 없음을 증명했다[^1]. 그 증명의 내용이 MRDP 정리(Matiyasevich–Robinson–Davis–Putnam theorem)다.

**정리 (Matiyasevich, Robinson, Davis, Putnam).** 집합 $A\subseteq\mathbb N^n$ 이 Diophantine 인 것과 계산 가능하게 열거 가능한 것은 동치다.

Diophantine 집합이 계산 가능하게 열거 가능한 것은 직관 절의 대입 절차로 나온다. 반대 방향은 두 단계로 증명된다.

1. Davis, Putnam, Robinson(1961). 계산 가능하게 열거 가능한 집합은 지수 Diophantine 이다. 계산의 각 단계를 유계 한정사(bounded quantifier)로 적고, 유계 한정사를 이항계수와 계승으로 없앤 뒤 그 둘을 지수로 표현한다.
2. Matiyasevich(1970). 관계 $c=a^b$ 는 Diophantine 이다. Pell 방정식 $x^2-(a^2-1)y^2=1$ 의 $n$ 번째 해 $(x_n,y_n)$ 에서 $y_n\equiv n\pmod{a-1}$ 같은 합동 성질과 $(2a-1)^n\le y_{n+1}\le(2a)^n$ 같은 증가 범위를 다항방정식으로 적는다. Matiyasevich 의 원래 증명은 [Fibonacci 수](fibonacci-numbers.md)를 썼고, Pell 방정식을 쓰는 판본은 Davis(1973)가 정리했다.

2단계에서 필요한 것은 지수적으로 자라는 Diophantine 관계 하나가 존재한다는 것이었고, 이것을 Robinson 가설(Julia Robinson hypothesis)이라 한다. Robinson 이 1952년에 이 가설로 지수가 Diophantine 임이 따름을 보였고, Matiyasevich 가 그런 관계를 구성했다.

## 판정 알고리즘의 부재

**따름정리.** 정수계수 다항방정식이 정수해를 갖는지 판정하는 알고리즘은 없다.

정지 집합 $K$ 는 계산 가능하게 열거 가능하므로 MRDP 정리로 $e\in K\iff\exists x\thinspace P(e,x)=0$ 인 다항식 $P$ 가 있다. 해 존재를 판정하는 알고리즘이 있으면 $e$ 마다 $P(e,x)=0$ 의 해 존재를 판정해 $K$ 를 판정할 수 있으므로, $K$ 가 계산 가능하지 않다는 정지 문제의 정리에 모순이다.

## 보편 Diophantine 방정식

계산 가능하게 열거 가능한 집합 $W_k$ 를 번호 $k$ 로 모두 담는 집합 $\lbrace(k,a):a\in W_k\rbrace$ 도 계산 가능하게 열거 가능하다. MRDP 정리로 다항식 $U(k,a,x_1,\dots,x_m)$ 이 존재해, 모든 $k$ 에서 $W_k=\lbrace a:\exists x\thinspace U(k,a,x)=0\rbrace$ 다. 다항식 하나가 번호 $k$ 만 바꿔 모든 계산 가능하게 열거 가능한 집합을 정의하고, 미지수의 수 $m$ 은 고정된다. Matiyasevich 는 자연수 미지수 $9$ 개로 충분함을 보였다[^2].

## 소수를 값으로 갖는 다항식

소수의 집합은 계산 가능하므로 Diophantine 이다. $p$ 가 소수인 것이 $\exists x\thinspace P(p,x)=0$ 과 같다고 하면 다항식

$$
Q(p,x)=p\thinspace(1-P(p,x)^2)
$$

을 생각한다. $P(p,x)\ne 0$ 이면 $1-P^2\le 0$ 이어서 $Q\le 0$ 이고, $P(p,x)=0$ 이면 $Q=p$ 다. 따라서 $Q$ 가 자연수 변수에서 갖는 양의 값은 정확히 소수 전체다. Jones, Sato, Wada, Wiens 는 변수 $26$ 개, 차수 $25$ 인 그런 다항식을 명시했다[^3].

# 활용

- [Gödel 불완전성 정리](godel-incompleteness.md). MRDP 정리로 "이 다항방정식은 해가 없다" 꼴의 문장이 [산술적 계층](arithmetical-hierarchy.md)의 $\Pi^0_1$ 문장 전부를 표현한다. 그래서 증명 가능한 문장의 집합이 계산 가능하게 열거 가능하고 산술을 담는 무모순 체계마다, 해가 없지만 해가 없다는 것이 그 체계에서 증명되지 않는 다항방정식이 존재한다.
- 산술적 계층. MRDP 정리로 $\Sigma^0_1$ 집합은 유계 한정사 없이 존재 한정사 하나와 다항식의 영점 조건만으로 정의된다.
- 다른 환에서의 판정 문제. 같은 물음을 대수적 수체의 정수환에서 물을 수 있고, Denef 는 이차 수체의 정수환에서 판정 알고리즘이 없음을 Pell 방정식을 쓰는 같은 방법으로 증명했다.

[^1]: Y. V. Matiyasevich, *Hilbert's Tenth Problem*, MIT Press (1993). 1장이 정리의 진술과 역사, 2장과 3장이 지수의 Diophantine 표현과 Davis–Putnam–Robinson 정리다.
[^2]: J. P. Jones, Universal Diophantine equation, *Journal of Symbolic Logic* **47** (1982), 549–571.
[^3]: J. P. Jones, D. Sato, H. Wada, D. Wiens, Diophantine representation of the set of prime numbers, *American Mathematical Monthly* **83** (1976), 449–464.

# 연관 문서

## 선수지식

- [정지 문제](halting-problem.md)
- [Pell 방정식](pell-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #number_theory #logic
