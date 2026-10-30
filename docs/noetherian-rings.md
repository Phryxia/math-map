# Noether 환

# 개요

**Noether 환(Noetherian ring)** 은 [아이디얼](ideals-quotient-rings.md)을 키워 가는 과정이 반드시 유한 번에 멈추는 환이다. 정수에서 $(12)\subset(6)\subset(3)$ 처럼 더 큰 아이디얼로 옮겨 가면 $12$ 의 약수가 유한 개이므로 사슬이 끝나지만, 변수가 무한히 많은 다항식환에서는 $(x_1)\subset(x_1,x_2)\subset(x_1,x_2,x_3)\subset\cdots$ 가 끝나지 않는다. 사슬이 멈추는 환에서는 모든 아이디얼이 유한 개의 원소로 생성되므로, 다항식으로 정의된 도형을 유한 개의 방정식으로 적을 수 있고 아이디얼에 대한 귀납으로 증명을 끝낼 수 있다.

# 직관

$\mathbb Z$ 의 아이디얼에 원소를 하나씩 더해 키워 본다. $(12)\subsetneq(12,8)=(4)\subsetneq(4,6)=(2)\subsetneq(2,3)=(1)$ 에서 매 단계의 생성원은 앞 단계 생성원의 진약수다. $12$ 의 약수는 유한 개이므로 이 절차는 유한 번에 멈춘다.

변수가 무한한 [다항식환](polynomial-rings.md) $k[x_1,x_2,\dots]$ 에서는 같은 절차가 멈추지 않는다.

$$
(x_1)\subsetneq(x_1,x_2)\subsetneq(x_1,x_2,x_3)\subsetneq\cdots
$$

키우는 절차가 언제나 멈추는 환이 Noether 환이다. 다항식으로 정의되는 도형이 유한 개의 방정식으로 잘린다는 사실의 근거가 이 성질이다.

# 정의

가환환 $R$ 가 **Noether 환(Noetherian ring)** 이라는 것은 다음 **오름사슬 조건(ascending chain condition)** 을 만족한다는 뜻이다. 아이디얼의 증가열 $I_1\subseteq I_2\subseteq\cdots$ 은 어떤 $n$ 부터 $I_n=I_{n+1}=\cdots$ 이다.

$\mathbb Z$ 는 모든 아이디얼이 $(m)$ 꼴이고 $(m)\subsetneq(m')$ 이면 $m'$ 이 $m$ 의 진약수이므로 Noether 환이다. 체는 아이디얼이 $0$ 과 자신뿐이라 Noether 환이다. 직관 절의 $k[x_1,x_2,\dots]$ 는 Noether 환이 아니다.

$R$ 가군 $M$ 에 대해서도 부분가군의 오름사슬 조건으로 같은 정의를 하고, 그런 $M$ 을 **Noether 가군(Noetherian module)** 이라 한다. $\mathbb Z$ 는 Noether $\mathbb Z$ 가군이고, $\mathbb Q$ 는 $\mathbb Z\subsetneq\tfrac12\mathbb Z\subsetneq\tfrac14\mathbb Z\subsetneq\cdots$ 가 멈추지 않아 Noether $\mathbb Z$ 가군이 아니다.

# 성질

## 세 조건의 동치

**정리.** 가환환 $R$ 에 대해 다음 셋은 동치다.

- 오름사슬 조건.
- **유한생성.** $R$ 의 모든 아이디얼이 유한 개의 원소로 생성된다.
- **극대원 조건(maximal condition).** 공집합이 아닌 아이디얼족은 포함관계에 대한 극대원을 갖는다.

오름사슬 조건에서 유한생성으로. $I$ 가 유한생성이 아니면 원소를 하나씩 골라 $(a_1)\subsetneq(a_1,a_2)\subsetneq\cdots$ 를 만들 수 있어 사슬이 멈추지 않는다.

유한생성에서 오름사슬 조건으로. 증가열의 합집합 $I=\bigcup I_k$ 는 아이디얼이고 유한생성이므로 생성원 전부가 어떤 $I_n$ 에 들어간다. 그러면 $I=I_n$ 이다.

극대원 조건은 오름사슬 조건의 대우다. 극대원이 없는 족에서는 진포함으로 무한히 올라가는 사슬을 뽑을 수 있다.

## Hilbert 기저정리

Hilbert 기저정리(Hilbert's basis theorem)에 따라 $R$ 가 Noether 이면 $R[x]$ 도 Noether 다[^1].

증명의 요지. $J \subset R[x]$ 를 아이디얼이라 하고, $J$ 에 속하는 차수 $d$ 다항식들의 최고차 계수가 이루는 $R$ 의 아이디얼을 $L_d$ 라 하자. $L_0\subset L_1\subset\cdots$ 는 증가열이므로 어떤 $N$ 에서 멈춘다. 각 $d\le N$ 에 대해 $L_d$ 의 유한 생성원을 실현하는 $J$ 의 다항식을 유한 개 모으면, 최고차 계수를 소거하며 차수를 내리는 귀납으로 그것들이 $J$ 를 생성한다.

따름정리로 $k[x_1,\dots,x_n]$ 과 $\mathbb Z[x_1,\dots,x_n]$ 은 Noether 이고, 체나 $\mathbb Z$ 위의 유한생성 대수는 모두 Noether 다.

## 닫힘 성질

Noether 환에서 만들어지는 다음 환들도 Noether 다.

| 구성 | Noether 인가 | 근거 |
| --- | --- | --- |
| 몫환 $R/I$ | 예 | $R/I$ 의 아이디얼이 $R$ 의 아이디얼과 대응 |
| [국소화](localization-rings.md) $S^{-1}R$ | 예 | 모든 아이디얼이 확대 아이디얼 |
| 다항식환 $R[x]$ | 예 | Hilbert 기저정리 |
| 부분환 | 아니오 | $k[x_1,x_2,\dots]$ 가 그 분수체의 부분환 |

## Noether 가군

$M$ 이 Noether 가군인 것과 $M$ 의 모든 부분가군이 유한생성인 것이 동치다. 짧은 완전열 $0\to M'\to M\to M''\to 0$ 에서 $M$ 이 Noether 인 것과 $M'$ 과 $M''$ 이 둘 다 Noether 인 것이 동치이므로, Noether 환 위의 유한생성 [가군](modules.md)은 전부 Noether 다.

# 활용

## 분해의 유한성

[유일분해정역](unique-factorization-domains.md)에서 기약원 분해가 유한 번에 끝난다는 존재 부분의 증명이 오름사슬 조건을 쓴다. 주아이디얼정역(principal ideal domain)은 Noether 이므로 이 논증이 곧바로 적용된다.

## 대수적 정수론

[Dedekind 정역](dedekind-domains.md)의 세 조건 가운데 첫째가 Noether 다. [대수적 수체](algebraic-number-fields.md)의 정수환이 유한생성 $\mathbb Z$ 가군이라는 사실에서 이 조건이 따라오고, 아이디얼의 [소 아이디얼](prime-ideals.md) 분해가 유한 곱으로 끝나는 근거가 된다.

## 대수기하

$k[x_1,\dots,x_n]$ 이 Noether 이므로 임의의 다항식족이 정의하는 영점 집합은 그 족의 유한 부분집합이 정의하는 영점 집합과 같다. 아핀 공간의 닫힌집합이 내림사슬 조건을 만족한다는 뜻이고, 이것이 대수적 집합을 유한 개의 기약 성분으로 쪼개는 분해의 근거다.

[^1]: D. Hilbert, "Über die Theorie der algebraischen Formen", Mathematische Annalen 36 (1890), 473–534. 기저정리의 원 논문. 현대적 진술과 증명은 M. Atiyah and I. Macdonald, *Introduction to Commutative Algebra*, Theorem 7.5.

# 연관 문서

## 선수지식

- [아이디얼과 몫환](ideals-quotient-rings.md)
- [다항식환](polynomial-rings.md)

## 더 알아보기

- [Krull 차원](krull-dimension.md)
- [Iwasawa 대수](iwasawa-algebra.md)

#ring_theory #algebra #number_theory
