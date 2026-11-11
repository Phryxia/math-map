# Hilbert 영점 정리

# 개요

**Hilbert 영점 정리(Hilbert's Nullstellensatz)** 는 복소수 계수 다항식 방정식계에 해가 없는 것과, 방정식들에 다항식을 곱해 더하면 $1$ 이 나오는 것이 같다는 정리다. 방정식계 $xy=1$, $x=0$ 에는 해가 없고, $y\cdot x-(xy-1)=1$ 이 그 증거다. 해가 있으면 이런 식에 해를 대입해 $0=1$ 이 되므로 증거가 있을 수 없다. 이 정리는 거꾸로 해가 없으면 언제나 이런 증거가 있다는 것을 보장해, 해의 존재를 다항식의 계산으로 판정하게 한다.

# 직관

방정식계 $f\_1=xy-1=0$, $f\_2=x=0$ 을 본다. 둘째 식을 첫째 식에 넣으면 $-1=0$ 이 되므로 해가 없다. 이 대입을 다항식의 계산으로 적으면 다음과 같다.

$$
y\cdot f\_2-f\_1=xy-(xy-1)=1
$$

$f\_1$ 과 $f\_2$ 에 다항식 $-1$ 과 $y$ 를 곱해 더했더니 $1$ 이 나왔다. 어떤 점 $(a,b)$ 가 두 식을 모두 만족하면 좌변에 대입한 값이 $0$ 이므로 $0=1$ 이 된다. 그래서 이런 식이 하나라도 있으면 해가 없다.

거꾸로 해가 없을 때 언제나 이런 식이 있는지가 물음이다. 실수에서는 아니다. $x^2+1=0$ 은 실수 해가 없지만, $x^2+1$ 에 실수 계수 다항식 $h$ 를 곱한 $h\cdot(x^2+1)$ 은 $0$ 이 아니면 차수가 $2$ 이상이라 $1$ 이 될 수 없다.

복소수에서는 $x=i$ 가 해다. 복소수처럼 모든 다항식이 근을 가지는 체에서는 해가 없으면 언제나 $1$ 을 만드는 식이 있다는 것이 이 정리다.

# 정의

$k$ 를 체, $S=k\lbrack x\_1,\dots,x\_n\rbrack$ 을 [다항식환](polynomial-rings.md)이라 한다. 해집합 $V(J)$ 와 다항식 모임 $I(X)$ 는 [대수다양체](algebraic-varieties.md) 문서의 정의를 따른다.

## 대수적으로 닫힌 체

상수가 아닌 모든 일변수 다항식이 $k$ 안에 근을 가지면 $k$ 를 **대수적으로 닫힌 체(algebraically closed field)** 라 한다. 복소수체 $\mathbb C$ 는 대수적으로 닫혀 있고, 실수체 $\mathbb R$ 은 $x^2+1$ 이 근을 가지지 않으므로 닫혀 있지 않다.

## 근기

아이디얼 $J\subseteq S$ 의 **근기(radical)** 는 어떤 거듭제곱이 $J$ 에 들어가는 원소 전체다.

$$
\sqrt J=\lbrace g\in S:\text{어떤 } m\ge1 \text{ 에 대해 } g^m\in J\rbrace
$$

$J=(x^2,y)$ 이면 $x\notin J$ 이지만 $x^2\in J$ 이므로 $x\in\sqrt J$ 이고, $\sqrt J=(x,y)$ 다. $\sqrt J=J$ 인 아이디얼을 근기 아이디얼이라 한다.

# 성질

## 약한 영점 정리

정리. $k$ 가 대수적으로 닫힌 체이면 $S$ 의 극대 아이디얼은 모두 $(x\_1-a\_1,\dots,x\_n-a\_n)$ 꼴이다[^1].

증명의 요지. 극대 아이디얼 $\mathfrak m$ 에 대해 $S/\mathfrak m$ 은 $k$ 위의 유한생성 대수이고 체다. [Noether 정규화](noether-normalization.md)에서 나오는 Zariski 보조정리(Zariski's lemma)로 $S/\mathfrak m$ 은 $k$ 의 유한 확대이고, $k$ 가 대수적으로 닫혀 있으므로 $S/\mathfrak m=k$ 다. $x\_i$ 의 상을 $a\_i$ 라 하면 $x\_i-a\_i\in\mathfrak m$ 이다.

## 해가 없는 방정식계

정리. $k$ 가 대수적으로 닫힌 체이고 $f\_1,\dots,f\_r\in S$ 이면, $V(f\_1,\dots,f\_r)=\varnothing$ 인 것과 다음을 만족하는 $h\_1,\dots,h\_r\in S$ 가 있는 것이 동치다.

$$
h\_1f\_1+\cdots+h\_rf\_r=1
$$

증명의 요지. 그런 $h\_i$ 가 없으면 $J=(f\_1,\dots,f\_r)$ 이 $S$ 전체가 아니므로 어떤 극대 아이디얼에 들어간다. 약한 영점 정리로 그 극대 아이디얼은 $(x\_1-a\_1,\dots,x\_n-a\_n)$ 이고, 모든 $f\_i$ 가 점 $a$ 에서 $0$ 이다. 직관 절의 예에서 $h\_1=-1$, $h\_2=y$ 다.

## 강한 영점 정리

정리. $k$ 가 대수적으로 닫힌 체이고 $J\subseteq S$ 가 아이디얼이면 $I(V(J))=\sqrt J$ 다[^1].

증명의 요지. $g$ 가 $V(J)$ 에서 $0$ 이라 하자. 변수 $t$ 를 하나 더해 $J$ 와 $1-tg$ 를 함께 놓으면, $J$ 의 해에서는 $g=0$ 이라 $1-tg=1$ 이므로 공통 해가 없다. 해가 없는 방정식계의 정리로 다음이 있다.

$$
\sum\_ih\_i(x,t)f\_i(x)+h(x,t)(1-tg(x))=1
$$

$t=1/g$ 를 대입하고 분모 $g^m$ 을 곱하면 $g^m$ 이 $f\_i$ 의 다항식 계수 결합으로 적히므로 $g\in\sqrt J$ 다. 변수를 하나 더하는 이 방법을 Rabinowitsch 기법(Rabinowitsch trick)이라 한다[^2].

$J=(x^2,y)$, $g=x$ 이면 $V(J)$ 는 원점 하나이고 $x$ 는 거기서 $0$ 이다. 이때 등식은 다음과 같다.

$$
(1+tx)(1-tx)+t^2\cdot x^2=1
$$

$t=1/x$ 를 넣으면 첫 항이 $0$ 이 되고 $x^{-2}\cdot x^2=1$ 이 남는다. 양변에 $x^2$ 을 곱하면 $g^2=x^2$ 이 $J$ 의 생성원 $x^2$ 의 배수로 적히므로 $m=2$ 다.

## 아이디얼과 해집합의 대응

강한 영점 정리로 $V$ 와 $I$ 는 근기 아이디얼과 대수적 집합 사이의 서로 역인 대응이 되고, 포함 관계를 뒤집는다. 이 대응에서 극대 아이디얼은 점에, [소 아이디얼](prime-ideals.md)은 기약인 대수적 집합에 대응한다.

## 대수적으로 닫혀 있다는 가정

가정은 뺄 수 없다. 직관 절의 $x^2+1$ 은 $\mathbb R\lbrack x\rbrack$ 에서 $1$ 을 만들지 못하지만 실수 해가 없다.

실수에서는 $1$ 에 다항식의 제곱합을 더한 것이 증거가 된다. $1+x^2$ 은 $x^2+1$ 의 배수이므로 $x^2+1=0$ 에 실수 해가 없다는 증거다. 이 판정을 실영점 정리(real Nullstellensatz)라 하고, 부등식까지 다루는 판을 Krivine–Stengle Positivstellensatz 라 한다.

## 차수의 상한

$f\_i$ 의 차수가 $d\ge3$ 이하이면 $1=\sum h\_if\_i$ 를 만족하는 $h\_i$ 를 $h\_if\_i$ 의 차수가 $d^n$ 이하가 되게 고를 수 있다[^3]. 그래서 해가 없음을 판정하는 일은 정해진 차수 이하의 미지 계수에 대한 연립일차방정식이 된다. 차수 $d^n$ 이 필요한 예가 있어 상한은 최선이다.

# 활용

- [Gröbner 기저](groebner-bases.md). $V(f\_1,\dots,f\_r)=\varnothing$ 인 것은 $(f\_1,\dots,f\_r)$ 의 축약 Gröbner 기저가 $\lbrace1\rbrace$ 인 것과 동치이므로, Buchberger 알고리즘으로 해의 존재를 판정한다.
- [조합적 영점 정리](combinatorial-nullstellensatz.md). 격자 $A\_1\times\cdots\times A\_n$ 위에서 $0$ 인 다항식이 $\prod\_{a\in A\_i}(x\_i-a)$ 들로 적힌다는 Alon 의 정리다. 유한 격자에서는 거듭제곱 없이 임의의 체에서 성립하고 $h\_i$ 의 차수까지 정해진다.
- 증명 복잡도. 3 색칠 같은 문제를 다항식 방정식계로 적고, 해가 없다는 증거 $\sum h\_if\_i=1$ 의 차수를 증명의 크기로 보는 영점 정리 증명 체계(Nullstellensatz proof system)가 정의된다[^4].

[^1]: D. Hilbert, "Über die vollen Invariantensysteme", *Mathematische Annalen* 42 (1893), 313–373. 교재 서술은 D. Eisenbud, *Commutative Algebra with a View Toward Algebraic Geometry*, Graduate Texts in Mathematics 150, Springer, 1995, 1.6 절과 4.5 절.
[^2]: J. L. Rabinowitsch, "Zum Hilbertschen Nullstellensatz", *Mathematische Annalen* 102 (1930), 520.
[^3]: J. Kollár, "Sharp effective Nullstellensatz", *Journal of the American Mathematical Society* 1 (1988), 963–975.
[^4]: P. Beame, R. Impagliazzo, J. Krajíček, T. Pitassi, P. Pudlák, "Lower bounds on Hilbert's Nullstellensatz and propositional proofs", *Proceedings of the London Mathematical Society* 73 (1996), 1–26.

# 연관 문서

## 선수지식

- [대수다양체](algebraic-varieties.md)
- [Noether 정규화](noether-normalization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #field_theory
