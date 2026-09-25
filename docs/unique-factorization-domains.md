# 유일분해정역

# 개요

유일분해정역(unique factorization domain, UFD)은 $0$ 이 아닌 비단위 원소가 기약원의 곱으로 쓰이고 그 분해가 순서와 단위원 배수를 무시하면 유일한 정역이다. [소수](primes.md)에서 정수에 대해 성립한 산술의 기본정리를 환 일반으로 옮긴 조건이다.

정역 가운데 이 성질을 갖는 것을 가려내는 기준이 Euclid 정역과 주아이디얼정역이다. 셋은 포함 사슬을 이루고, [다항식환](polynomial-rings.md)은 계수환이 무엇이냐에 따라 사슬의 어느 칸에 놓일지가 갈린다. [대수적 수체](algebraic-number-fields.md)의 정수환은 이 사슬에서 떨어져 나가며, 분해의 대상을 원소에서 아이디얼로 바꾸어 유일성을 복구한 것이 [Dedekind 정역](dedekind-domains.md)이다.

# 직관

정수에서 $6=2\cdot 3$ 이 순서와 단원을 무시하면 유일한 분해라는 것은 나눗셈 정리에서 따라온다. 나눗셈 정리가 있으면 유클리드 알고리즘이 돌고, 최대공약수가 두 원소의 결합으로 쓰이며, 기약원이 소원이 되어 유일성이 나온다. 이 사슬의 각 칸을 조건으로 분리한 것이 아래 세 부류다.

유일성이 깨지는 최초의 예가 $\mathbb Z[\sqrt{-5}]$ 다. 여기서 $6$ 은 두 가지로 분해된다.

$$
6 = 2\cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})
$$

네 인수는 모두 기약이지만 어느 것도 다른 쪽 인수와 단위원 배수 관계가 아니다. 노름 $N(a+b\sqrt{-5})=a^2+5b^2$ 이 $2$ 나 $3$ 의 값을 갖지 못하는 것이 기약성의 근거다.

# 정의

$R$ 를 정역, $R^{\times}$ 를 그 단위원군이라 하자. $0$ 이 아닌 비단위 $p$ 에 대해 두 개념을 구분한다.

- $p$ 가 **기약원**(irreducible)이라는 것은 $p=ab$ 이면 $a\in R^{\times}$ 또는 $b\in R^{\times}$ 라는 뜻이다.
- $p$ 가 **소원**(prime)이라는 것은 $p \mid ab$ 이면 $p \mid a$ 또는 $p \mid b$ 라는 뜻이다. 동치로 $(p)$ 가 [소 아이디얼](prime-ideals.md)이다.

정역 $R$ 가 **유일분해정역**이라는 것은 $0$ 이 아닌 모든 비단위 $a$ 가 다음 꼴로 쓰이고, 그 표현이 인수의 순서와 단위원 배수를 무시하면 유일하다는 뜻이다.

$$
a = u\thinspace p_1\cdots p_m,\qquad u\in R^{\times},\ p_i \text{ 기약}
$$

**주아이디얼정역**(principal ideal domain, PID)은 모든 [아이디얼](ideals-quotient-rings.md)이 한 원소로 생성되는 정역이다. **Euclid 정역**(Euclidean domain, ED)은 함수 $N\colon R\setminus\lbrace 0\rbrace \to \mathbb Z\_{\ge 0}$ 가 있어 $b \ne 0$ 인 임의의 $a,b$ 에 대해 $a=qb+r$ 이고 $r=0$ 이거나 $N(r)\lt N(b)$ 인 $q,r$ 가 존재하는 정역이다.

# 성질

## 포함 사슬

$$
\text{체} \subset \text{ED} \subset \text{PID} \subset \text{UFD} \subset \text{정역}
$$

네 포함은 모두 진부분이다. 각 칸을 가르는 예는 다음과 같다.

| 환 | ED | PID | UFD | 가르는 이유 |
| --- | --- | --- | --- | --- |
| $\mathbb Z,\ k[x]$ | 예 | 예 | 예 | 나눗셈 정리 |
| $\mathbb Z\bigl[\tfrac{1+\sqrt{-19}}{2}\bigr]$ | 아니오 | 예 | 예 | Euclid 함수가 없는 PID[^1] |
| $k[x,y]$ | 아니오 | 아니오 | 예 | $(x,y)$ 가 주아이디얼이 아니다 |
| $\mathbb Z[\sqrt{-5}]$ | 아니오 | 아니오 | 아니오 | $6$ 의 두 분해 |

## ED 에서 PID

$I \ne 0$ 을 아이디얼이라 하고 $N$ 값이 최소인 $b \in I\setminus\lbrace 0\rbrace$ 를 잡는다. 임의의 $a \in I$ 를 $a=qb+r$ 로 쓰면 $r=a-qb \in I$ 이고 $N(r)\lt N(b)$ 는 최소성에 어긋나므로 $r=0$ 이다. 즉 $I=(b)$ 다.

## PID 에서 UFD

두 단계로 나뉜다. 존재는 Noether 조건에서 온다. PID 에서 아이디얼의 증가열 $(a_1)\subset(a_2)\subset\cdots$ 은 합집합이 다시 주아이디얼이므로 멈추고, 따라서 기약원으로 쪼개는 절차가 유한 번에 끝난다.

유일성은 기약원이 소원이라는 데서 온다. $p$ 가 기약이면 $(p)$ 는 극대이므로 소 아이디얼이고, $R/(p)$ 가 체다. 소원 분해의 유일성은 $p_1 \mid q_1\cdots q_n$ 에서 어느 $q_j$ 를 나눔을 얻고 기약성으로 $p_1$ 과 $q_j$ 가 단위원 배수임을 얻는 귀납으로 나온다.

## 기약원과 소원

임의의 정역에서 소원은 기약이다. $p=ab$ 이면 $p\mid ab$ 이므로 $p\mid a$ 라 하고 $a=pc$ 로 쓰면 $p=pcb$ 에서 $cb=1$ 이 되어 $b$ 가 단위원이다.

역은 UFD 에서만 성립한다. 두 성질이 갈라지는 자리가 $\mathbb Z[\sqrt{-5}]$ 이고, $2$ 는 기약이지만 $2 \mid (1+\sqrt{-5})(1-\sqrt{-5})$ 이면서 두 인수 어느 쪽도 나누지 않으므로 소원이 아니다.

## Gauss 정리

$R$ 가 UFD 이면 $R[x]$ 도 UFD 다[^2]. 증명의 축은 원시다항식(primitive polynomial)의 곱이 원시라는 Gauss 보조정리이고, 이것이 $\mathrm{Frac}(R)[x]$ 에서의 분해를 $R[x]$ 로 되돌린다.

PID 는 이 성질을 갖지 않는다. $\mathbb Z$ 는 PID 이지만 $\mathbb Z[x]$ 에서 $(2,x)$ 는 주아이디얼이 아니다. 따라서 변수를 늘려도 남는 것은 UFD 조건이고, $k[x_1,\dots,x_n]$ 이 UFD 인 근거가 이것이다.

# 활용

## 대수적 정수론

[대수적 수체](algebraic-number-fields.md)의 정수환은 일반적으로 UFD 가 아니다. 유수(class number)가 그 실패를 재는 유한 불변량이고, 유수가 $1$ 인 것과 정수환이 PID 인 것이 동치이며 이때 UFD 이기도 하다. 원소의 분해 대신 아이디얼의 소 아이디얼 분해를 쓰면 유일성이 회복되고, 그 조건을 공리로 뽑은 것이 [Dedekind 정역](dedekind-domains.md)이다.

## 다항식과 인수분해

[다항식환](polynomial-rings.md) $k[x]$ 는 차수를 Euclid 함수로 삼는 ED 이므로 기약다항식 분해가 유일하다. 이 유일성이 기약다항식으로 나눈 몫이 체가 된다는 사실과 맞물려 [체의 확대](field-extensions.md)와 [유한체](finite-fields.md)의 구성을 떠받친다. 여러 변수의 경우 $k[x_1,\dots,x_n]$ 은 PID 가 아니지만 Gauss 정리로 UFD 이므로 기약 분해는 여전히 유일하다.

## 최대공약수

UFD 에서는 두 원소의 최대공약수가 지수별 최솟값으로 정의되고 단위원 배수를 무시하면 유일하다. PID 에서는 여기에 더해 $\gcd(a,b)=d$ 가 $(a,b)=(d)$ 를 만족하므로 $d=ax+by$ 꼴로 쓰인다. ED 에서는 그 $x,y$ 를 [유클리드 알고리즘](euclidean-algorithm.md)의 확장형으로 실제로 계산한다.

[^1]: P. M. Cohn, "On the structure of the $\mathrm{GL}\_2$ of a ring", Publications mathématiques de l'IHÉS 30 (1966), 5–53. $\mathbb Z\bigl[\tfrac{1+\sqrt{-19}}{2}\bigr]$ 가 Euclid 정역이 아닌 PID 라는 확인. http://www.numdam.org/item/PMIHES_1966__30__5_0/
[^2]: S. Lang, *Algebra*, 3rd ed., Springer GTM 211, Chapter IV §2. Gauss 보조정리와 $R$ UFD $\Rightarrow$ $R[x]$ UFD.

# 연관 문서

## 선수지식

- [소수](primes.md)
- [아이디얼과 몫환](ideals-quotient-rings.md)
- [다항식환](polynomial-rings.md)

## 더 알아보기

- [Gauss 정수환](gaussian-integers.md)
- [PID 위의 유한생성 가군](finitely-generated-modules.md)
- [Dedekind 정역](dedekind-domains.md)

#ring_theory #algebra #number_theory
