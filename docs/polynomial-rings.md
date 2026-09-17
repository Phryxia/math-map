# 다항식환

# 개요

다항식환은 환 $R$ 의 원소를 계수로 갖는 형식적 다항식 전체가 이루는 환이다. 계수가 [체](fields.md)일 때 나눗셈 정리가 성립하므로 다항식환은 유클리드 정역이 되고, [소수와 유일분해](primes.md)에서 정수에 대해 성립한 이론이 그대로 옮겨진다. 기약다항식이 소수의 역할을 하고, 최대공약수는 [유클리드 알고리즘](euclidean-algorithm.md)으로 계산되며, 인수분해는 단위원 배수와 순서를 무시하면 유일하다.

기약다항식 $f$ 로 생성한 아이디얼은 극대 아이디얼이고, 몫환 $k[x]/(f)$ 는 $f$ 의 근을 하나 품은 체다. [체의 확대](field-extensions.md), [유한체](finite-fields.md), [Galois 이론](galois-theory.md)이 이 구성에서 출발한다.

# 직관

차수가 정수의 절댓값 역할을 한다. 나머지의 차수가 제수의 차수보다 작아지는 것이 "나머지가 제수보다 작다"에 대응하고, 정수의 나눗셈 정리와 유일분해가 같은 형태로 따라온다.

$$
x^3-1=(x-1)(x^2+x+1),\qquad x^3+x+1 \text{는 } \mathbb{F}_2 \text{ 위에서 기약}
$$

기약성은 계수체에 의존한다. $x^2+1$ 은 $\mathbb{R}$ 위에서 기약이지만 $\mathbb{C}$ 위에서는 $(x+i)(x-i)$ 로 쪼개지고, $\mathbb{F}\_2$ 위에서는 $(x+1)^2$ 이 된다. 인수분해는 다항식과 체의 쌍에 대한 성질이다.

# 정의

$R$ 를 항등원 있는 가환환이라 하자. $R$ 위 한 변수 다항식환은 유한개만 $0$ 이 아닌 계수열의 집합에 통상의 덧셈과 합성곱(convolution) 곱셈을 준 환이다.

$$
R[x]=\Big\lbrace\textstyle\sum_{i=0}^{n}a_ix^i \ :\ n\ge 0,\ a_i\in R\Big\rbrace,\qquad
\Big(\sum_i a_ix^i\Big)\Big(\sum_j b_jx^j\Big)=\sum_k\Big(\sum_{i+j=k}a_ib_j\Big)x^k
$$

$0$ 이 아닌 다항식 $f$ 의 차수 $\deg f$ 는 $0$ 이 아닌 최고차 계수의 지수이고, 그 계수를 leading coefficient라 한다. leading coefficient가 $1$ 인 다항식을 **monic**이라 한다. $0$ 다항식의 차수는 정의하지 않거나 음의 무한으로 둔다.

체 $k$ 위의 $0$ 이 아닌 다항식 $f$ 가 **기약**(irreducible)이라는 것은 $\deg f \ge 1$ 이고, $f=gh$ 로 쓰면 $g$ 또는 $h$ 가 상수라는 뜻이다.

원소 $a$ 가 $f$ 의 **근**이라는 것은 $f(a)=0$ 을 뜻한다. 여기서 $f(a)$ 는 계수를 그대로 두고 $x$ 에 $a$ 를 대입한 값이다.

# 성질

## 나눗셈 정리

$k$ 가 체이고 $f,g \in k[x]$ 이며 $g \ne 0$ 이면 다음을 만족하는 $q,r$ 가 유일하게 존재한다[^1].

$$
f=qg+r,\qquad r=0 \ \text{또는}\ \deg r<\deg g
$$

증명 개요. $\deg f < \deg g$ 면 $q=0$ 이고 $r=f$ 다. 그렇지 않으면 $f$ 에서 leading coefficient의 비와 $x^{\deg f - \deg g}$ 와 $g$ 의 곱을 빼 차수를 내리고 귀납한다. $g$ 의 leading coefficient로 나누는 단계에서 $k$ 가 체라는 조건이 쓰인다. 계수환이 체가 아니면 정리가 깨진다. $\mathbb{Z}[x]$ 에서 $x$ 를 $2x$ 로 나눌 수 없다.

## 유클리드 정역과 유일분해

차수를 크기 함수로 쓰면 $k[x]$ 는 유클리드 정역이고, 모든 유클리드 정역은 주 아이디얼 정역이며 유일분해 정역(UFD)이다[^2]. $k[x]$ 의 $0$ 이 아닌 모든 비단위 다항식은 기약다항식들의 곱으로 쓰이고, 그 분해는 순서와 $0$ 이 아닌 상수배를 무시하면 유일하다.

$$
f=c\thinspace p_1^{e_1}\cdots p_m^{e_m},\qquad c\in k^{\times},\ p_i \text{ monic 기약}
$$

주 아이디얼 정역임의 증명 개요. [아이디얼](ideals-quotient-rings.md) $I$ 가 $0$ 이 아니면 $I$ 에서 차수가 최소인 원소 $g$ 를 잡는다. 임의의 $f\in I$ 를 $g$ 로 나누면 나머지 $r=f-qg$ 가 $I$ 에 속하고 차수가 $g$ 보다 작으므로 $r=0$ 이다. 즉 $I=(g)$ 다.

## 근과 인수 정리

$f$ 를 $x-a$ 로 나누면 나머지는 상수이고, $x=a$ 를 대입하면 그 상수가 $f(a)$ 다.

$$
f(x)=(x-a)q(x)+f(a)
$$

$a$ 가 $f$ 의 근인 것과 $x-a$ 가 $f$ 를 나누는 것이 동치다. 귀납하면 체 위의 $0$ 이 아닌 차수 $n$ 다항식은 근을 최대 $n$ 개 가진다. 이 개수 제한은 계수환이 정역일 때만 성립한다. $\mathbb{Z}/8\mathbb{Z}$ 위에서 $x^2-1$ 은 근이 $1,3,5,7$ 로 네 개다.

$\deg f$ 가 $2$ 또는 $3$ 인 $k[x]$ 의 다항식은 기약성과 근의 부재가 동치다. 인수분해하면 반드시 1차 인수가 나오기 때문이다. 4차 이상에서는 성립하지 않는다. $x^4+2x^2+1=(x^2+1)^2$ 은 $\mathbb{Q}$ 위에서 근이 없지만 기약이 아니다.

## 기약다항식과 극대 아이디얼

$k[x]$ 는 주 아이디얼 정역이므로, $0$ 이 아닌 $(f)$ 가 [극대 아이디얼](prime-ideals.md)인 것과 $f$ 가 기약인 것이 동치다.

$$
f \text{ 기약} \iff k[x]/(f) \text{가 체}
$$

몫체에서 $x$ 의 동치류는 $f$ 의 근이 된다. $\mathbb{F}\_2[x]/(x^2+x+1)$ 은 원소 4개인 체이고, $\mathbb{R}[x]/(x^2+1)$ 은 $\mathbb{C}$ 와 동형이다.

## 기약성 판정

- $\mathbb{Q}[x]$ : Gauss의 보조정리로 $\mathbb{Z}[x]$ 에서의 기약성과 동치다. Eisenstein 판정법, 소수 $p$ 로 환원해 $\mathbb{F}\_p[x]$ 에서 기약성을 보는 방법을 쓴다.
- 유리근 정리: 정수계수 다항식의 유리근 $b/c$ 는 $b$ 가 상수항을, $c$ 가 leading coefficient를 나눈다.
- $\mathbb{C}[x]$ : 대수학의 기본정리에 의해 기약다항식은 1차뿐이다. $\mathbb{R}[x]$ 에서는 1차와 판별식이 음인 2차뿐이다.

# 활용

## 최대공약수와 확장 유클리드

$k[x]$ 에서 유클리드 알고리즘은 정수판과 같은 형태로 돌아간다. 확장형은 $\gcd(f,g)=1$ 일 때 $k[x]/(g)$ 에서 $f$ 의 역원을 계산하는 수단이고, 유한체 산술과 오류정정 부호 구현의 기본 연산이다.

```python
def poly_gcd_F2(a, b):
    # F_2[x] 다항식을 비트마스크로 표현: x^3+x+1 -> 0b1011
    while b:
        while a.bit_length() >= b.bit_length() and a:
            a ^= b << (a.bit_length() - b.bit_length())
        a, b = b, a
    return a

print(bin(poly_gcd_F2(0b1011, 0b110)))  # x^3+x+1 과 x^2+x 는 서로소 -> 0b1
```

## 체의 구성

기약다항식으로 몫을 취하는 절차가 [체의 확대](field-extensions.md)의 단순 확대이며, [유한체](finite-fields.md)는 $\mathbb{F}\_p[x]$ 를 차수 $n$ 의 기약다항식으로 나눈 몫으로 구성된다. 최소다항식(minimal polynomial)은 확대체 원소를 소멸시키는 monic 다항식 중 차수가 최소인 것으로, 기약이며 그 원소를 소멸시키는 모든 다항식을 나눈다.

## 선형대수와의 연결

정사각행렬 $A$ 에 대해 특성다항식과 최소다항식은 $k[x]$ 의 원소이며, $k[x]$ 의 유일분해가 Jordan 표준형과 고윳값 중복도 이론의 뼈대를 준다. [선형사상](linear-maps.md)을 $k[x]$ -모듈 구조로 보는 관점이 그 형식화다.

[^1]: UC Irvine Math 120B, "Rings of Polynomials" — 체 위 다항식환의 나눗셈 알고리즘과 인수 정리. https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf
[^2]: R. Woodroofe, "Polynomial rings and unique factorization domains" — 유클리드 정역이 PID이고 UFD임, $k[x]$ 의 유일분해. https://osebje.famnit.upr.si/~russ.woodroofe/wustl-notes/ufds.pdf

# 연관 문서

## 선수지식

- [환](rings.md)
- [체](fields.md)

## 더 알아보기

- [체의 확대](field-extensions.md)

#ring_theory #algebra #field_theory
