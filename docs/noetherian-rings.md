# Noether 환

# 개요

Noether 환은 아이디얼의 오름사슬이 반드시 멈추는 환이다. 동치로 모든 아이디얼이 유한생성이다. 이 조건은 무한한 생성 과정이 끝난다는 보장이므로, 귀납으로 진행하는 증명과 유한한 자료로 대상을 기술하는 논증이 모두 이 조건 위에서 돌아간다.

Hilbert 기저정리가 이 부류를 넓게 만든다. $R$ 가 Noether 이면 $R[x]$ 도 Noether 이므로, $\mathbb Z$ 와 체에서 출발해 [다항식환](polynomial-rings.md)을 유한 번 쌓아 얻는 환이 전부 Noether 다. [대수적 수체](algebraic-number-fields.md)의 정수환과 [Dedekind 정역](dedekind-domains.md)도 정의에 이 조건을 포함한다.

# 직관

원소를 하나씩 더해 아이디얼을 키우는 절차를 생각한다. Noether 조건은 이 절차가 유한 번에 끝난다는 뜻이다. [유일분해정역](unique-factorization-domains.md)에서 분해가 유한 번에 끝나는 근거가 이것이고, 다항식으로 정의되는 도형이 유한 개의 방정식으로 잘린다는 사실의 근거도 이것이다.

조건이 깨지는 예는 변수가 무한한 다항식환 $k[x_1,x_2,\dots]$ 다. 아이디얼의 사슬이 멈추지 않는다.

$$
(x_1)\subsetneq(x_1,x_2)\subsetneq(x_1,x_2,x_3)\subsetneq\cdots
$$

# 정의

가환환 $R$ 가 **Noether 환**이라는 것은 다음 세 조건 가운데 하나를 만족한다는 뜻이며, 셋은 서로 동치다.

- **오름사슬 조건.** [아이디얼](ideals-quotient-rings.md)의 증가열 $I_1\subset I_2\subset\cdots$ 은 어떤 $n$ 부터 $I_n=I_{n+1}=\cdots$ 이다.
- **유한생성.** $R$ 의 모든 아이디얼이 유한 개의 원소로 생성된다.
- **극대원 조건.** 공집합이 아닌 아이디얼족은 포함관계에 대한 극대원을 갖는다.

$R$ 가군 $M$ 에 대해서도 부분가군의 오름사슬 조건으로 같은 정의를 하고, 그런 $M$ 을 **Noether 가군**이라 한다.

# 성질

## 세 조건의 동치

오름사슬 조건에서 유한생성으로. $I$ 가 유한생성이 아니면 원소를 하나씩 골라 $(a_1)\subsetneq(a_1,a_2)\subsetneq\cdots$ 를 만들 수 있어 사슬이 멈추지 않는다.

유한생성에서 오름사슬 조건으로. 증가열의 합집합 $I=\bigcup I_k$ 는 아이디얼이고 유한생성이므로 생성원 전부가 어떤 $I_n$ 에 들어간다. 그러면 $I=I_n$ 이다.

극대원 조건은 오름사슬 조건의 대우다. 극대원이 없는 족에서는 진포함으로 무한히 올라가는 사슬을 뽑을 수 있다.

## Hilbert 기저정리

$R$ 가 Noether 이면 $R[x]$ 도 Noether 다[^1].

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

[유일분해정역](unique-factorization-domains.md)에서 기약원 분해가 유한 번에 끝난다는 존재 부분의 증명이 오름사슬 조건을 쓴다. 주아이디얼정역은 Noether 이므로 이 논증이 곧바로 적용된다.

## 대수적 정수론

[Dedekind 정역](dedekind-domains.md)의 세 조건 가운데 첫째가 Noether 다. 수체의 정수환이 유한생성 $\mathbb Z$ 가군이라는 사실에서 이 조건이 따라오고, 아이디얼의 소 아이디얼 분해가 유한 곱으로 끝나는 근거가 된다.

## 대수기하

$k[x_1,\dots,x_n]$ 이 Noether 이므로 임의의 다항식족이 정의하는 자취는 그 족의 유한 부분집합이 정의하는 자취와 같다. 아핀 공간의 닫힌집합이 내림사슬 조건을 만족한다는 뜻이고, 이것이 대수적 집합을 유한 개의 기약 성분으로 쪼개는 분해의 근거다.

[^1]: D. Hilbert, "Über die Theorie der algebraischen Formen", Mathematische Annalen 36 (1890), 473–534. 기저정리의 원 논문. 현대적 진술과 증명은 M. Atiyah and I. Macdonald, *Introduction to Commutative Algebra*, Theorem 7.5.

# 연관 문서

## 선수지식

- [아이디얼과 몫환](ideals-quotient-rings.md)
- [다항식환](polynomial-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra
