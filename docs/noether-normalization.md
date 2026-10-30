# Noether 정규화

# 개요

**Noether 정규화(Noether normalization)** 는 체 위의 유한생성 대수가, 변수 몇 개의 다항식환 위에서 유한 개의 원소로 생성되는 가군이 된다는 정리다. 쌍곡선 $xy=1$ 을 $x$ 축에 사영하면 $x=0$ 위에 점이 없고, 그래서 좌표환이 $k\lbrack x\rbrack$ 위에서 유한하게 생성되지 않는다. 좌표를 $x+y$ 로 바꿔 사영하면 모든 점 위에 점이 유한 개 놓이고, 이 정리는 이렇게 좌표를 바꾸어 $d$ 차원 대수다양체에서 $d$ 차원 아핀공간으로 가는 유한 전사 사상을 만든다.

# 직관

$A=k\lbrack x,y\rbrack/(xy-1)$ 은 쌍곡선 $xy=1$ 의 좌표환이다. 분수체가 $k(x)$ 이므로 [초월차수](transcendence-degree.md)는 $1$ 이고, 변수 하나 위에서 $A$ 를 유한하게 만들고 싶다. $k\lbrack x\rbrack$ 위에서는 되지 않는다. $y=1/x$ 는 $k\lbrack x\rbrack$ 계수의 일계수 다항식의 근이 아니어서 $A$ 가 $k\lbrack x\rbrack$ 위의 유한생성 가군이 아니다. 쌍곡선을 $x$ 축에 사영하면 $x=0$ 위에 점이 없다.

변수를 섞어 $u=x+y$ 로 바꾼다. $x^2-ux+1=x^2-x^2-xy+1=0$ 이므로 $x$ 는 $k\lbrack u\rbrack$ 위의 일계수 이차식의 근이고, $y=u-x$ 도 그렇다. 그러면 $A=k\lbrack u\rbrack\cdot1+k\lbrack u\rbrack\cdot x$ 이고 $A$ 는 $k\lbrack u\rbrack$ 위에서 유한하다. 쌍곡선을 직선 $x=y$ 방향으로 사영하면 모든 $u$ 위에 점이 두 개 있다.

# 정의

## 정수적 원소

환 확대 $B\subseteq A$ 에서 $a\in A$ 가 $B$ 계수의 일계수 다항식의 근이면 $a$ 를 $B$ 위에서 **정수적(integral)** 이라 한다.

직관 절의 $A=k\lbrack x,y\rbrack/(xy-1)$ 에서 $x$ 는 $T^2-uT+1$ 의 근이므로 $k\lbrack u\rbrack$ 위에서 정수적이다. $x$ 는 $k\lbrack x\rbrack$ 위에서 정수적이지만, $y=1/x$ 는 $k\lbrack x\rbrack$ 위에서 정수적이 아니다.

## 유한 확대

$A$ 가 유한생성 $B$ 가군이면 $B\subseteq A$ 를 **유한 확대(finite extension)** 라 하고 $A$ 가 $B$ 위에서 유한하다고 한다. 직관 절의 $A$ 는 $1,x$ 로 생성되므로 $k\lbrack u\rbrack$ 위에서 유한하다.

# 성질

## Noether 정규화 정리

**정리.** $k$ 를 체, $A$ 를 유한생성 $k$ 대수라 하면 $k$ 위에서 대수적으로 독립인 $y_1,\dots,y_d\in A$ 가 있어 $A$ 가 $k\lbrack y_1,\dots,y_d\rbrack$ 위에서 유한하다.[^1]

직관 절의 쌍곡선에서는 $d=1$ 이고 $y_1=u=x+y$ 다. 기하로는 $d$ 차원 대수다양체에서 $d$ 차원 아핀공간으로 가는 유한 전사 사상이 있다는 진술이다.

## 정수적과 유한의 동치

$A$ 가 $B$ 위의 유한생성 대수이면 $A$ 의 모든 원소가 $B$ 위에서 정수적인 것과 $A$ 가 $B$ 위에서 유한한 것이 동치다.

## 증명의 요지

$A=k\lbrack x_1,\dots,x_n\rbrack$ 이고 $x_i$ 들 사이에 $0$ 아닌 다항식 관계 $f(x_1,\dots,x_n)=0$ 이 있다고 하자. 충분히 큰 정수 $r$ 로 $z_i=x_i-x_n^{r^i}$ $(i\lt n)$ 를 두고 $f$ 를 $z_1,\dots,z_{n-1},x_n$ 으로 다시 쓰면, 서로 다른 단항식이 $x_n$ 의 서로 다른 차수를 주므로 $x_n$ 의 최고차 계수가 $k$ 의 $0$ 아닌 상수가 된다. 그러면 $x_n$ 이 $k\lbrack z_1,\dots,z_{n-1}\rbrack$ 위에서 정수적이고, 변수의 개수에 대한 귀납법으로 끝난다. $k$ 가 무한체이면 직관 절처럼 일차 변환 $z_i=x_i-c_ix_n$ 으로 충분하다.

## 차원

$A$ 가 정역이면 $d$ 는 분수체의 초월차수 $\mathrm{trdeg}\_k\mathrm{Frac}(A)$ 이다. 유한 확대에서는 소 아이디얼 사슬이 올라가고 내려가므로 $A$ 와 $k\lbrack y_1,\dots,y_d\rbrack$ 의 [Krull 차원](krull-dimension.md)이 같고, 다항식환의 차원이 $d$ 다. 따라서 Krull 차원과 초월차수가 일치한다.

## 영점 정리

$A$ 가 체이면 $d=0$ 이어야 한다. $d\ge1$ 이면 $A$ 가 $k\lbrack y_1,\dots,y_d\rbrack$ 위에서 정수적이고, 정수적 확대 $B\subseteq A$ 에서 $A$ 가 체이면 $B$ 도 체이므로 다항식환이 체가 되어 모순이다. 그래서 체 $k$ 위의 유한생성 대수가 체이면 $k$ 의 유한 확대다(Zariski 보조정리(Zariski's lemma)). $k$ 가 대수적으로 닫혀 있으면 $k\lbrack x_1,\dots,x_n\rbrack$ 의 극대 아이디얼이 모두 $(x_1-a_1,\dots,x_n-a_n)$ 꼴이라는 약한 영점 정리(weak Nullstellensatz)가 여기서 나온다.

# 활용

- Krull 차원: 유한생성 대수의 Krull 차원을 다항식환의 차원으로 옮겨 계산한다.
- [Cohen–Macaulay 환](cohen-macaulay-rings.md): 정규화 $k\lbrack y_1,\dots,y_d\rbrack\subseteq A$ 에서 $A$ 가 자유 가군인 것이 Cohen–Macaulay 성질과 동치다.
- [대수다양체](algebraic-varieties.md): $d$ 차원 아핀 다양체에서 아핀공간 $\mathbb A^d$ 로 가는 유한 전사 사상을 주어, 다양체의 차원과 함수체의 초월차수를 맞춘다.

[^1]: D. Eisenbud, *Commutative Algebra with a View Toward Algebraic Geometry*, Graduate Texts in Mathematics 150, Springer, 1995, 13장 1절.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [초월차수](transcendence-degree.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #field_theory
