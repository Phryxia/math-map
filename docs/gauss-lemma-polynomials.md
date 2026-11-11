# 원시다항식의 Gauss 보조정리

# 개요

**원시다항식의 Gauss 보조정리(Gauss's lemma on primitive polynomials)** 는 계수의 공약수가 $1$ 인 정수 계수 다항식 두 개를 곱해도 계수의 공약수가 $1$ 이라는 정리다. $6x^2+5x+1$ 을 유리수 계수로 $(x+\tfrac12)(6x+2)$ 로 쪼갰을 때, 분수를 없애 정수 계수의 곱으로 고쳐 쓸 수 있는지는 이 예만 보아서는 알 수 없다. 이 정리로 유리수 계수의 인수분해는 언제나 같은 차수의 정수 계수 인수분해로 바뀌고, 정수 계수 다항식의 기약성을 정수만으로 판정한다.

# 직관

$(x+\tfrac12)(6x+2)$ 에서 분모 $2$ 를 없애려면 앞 인수에 $2$ 를 곱하고 뒤 인수를 $2$ 로 나눈다.

$$
6x^2+5x+1=\Bigl(x+\frac12\Bigr)(6x+2)=(2x+1)(3x+1)
$$

뒤 인수를 $2$ 로 나눌 수 있었던 것은 $6x+2$ 의 계수가 모두 $2$ 의 배수였기 때문이다. 일반적으로 $f=gh$ 이고 분모를 정리해 $df=g_1h_1$ ( $d$ 는 정수, $g_1,h_1$ 은 정수 계수) 로 쓰면, $d$ 의 소인수 $p$ 가 $g_1h_1$ 의 계수를 전부 나눈다. 이때 $p$ 가 $g_1$ 이나 $h_1$ 한쪽의 계수를 전부 나누면 그쪽에서 $p$ 를 덜어 낼 수 있다.

계수를 $p$ 로 나눈 나머지만 보면 $g_1$ 과 $h_1$ 의 나머지를 곱한 것이 $0$ 이다. 나머지로 된 다항식끼리의 곱이 $0$ 이면 한쪽이 $0$ 이므로 $p$ 는 한쪽의 계수를 전부 나눈다. 이것을 $d$ 의 소인수마다 되풀이하면 $d$ 가 다 덜어지고 정수 계수의 인수분해가 남는다.

# 정의

## 내용과 원시다항식

$f\in\mathbb Z\lbrack x\rbrack$ 가 $0$ 이 아닐 때, 계수 전체의 최대공약수를 $f$ 의 **내용(content)** $c(f)$ 라 하고, $c(f)=1$ 인 다항식을 **원시다항식(primitive polynomial)** 이라 한다. 직관 절의 $6x+2$ 는 $c(6x+2)=2$ 이고 $3x+1$ 과 $6x^2+5x+1$ 은 원시다항식이다. $0$ 이 아닌 $f$ 는 $f=c(f)\thinspace f_0$ 꼴로 쓰이고 $f_0$ 은 원시다항식이다.

## 정리의 진술

원시다항식 $g,h\in\mathbb Z\lbrack x\rbrack$ 의 곱 $gh$ 는 원시다항식이다[^1]. 같은 말로 $0$ 이 아닌 $g,h$ 에 대해 다음이 성립한다.

$$
c(gh)=c(g)\thinspace c(h)
$$

# 성질

## 증명

$gh$ 가 원시가 아니면 어떤 [소수](primes.md) $p$ 가 $gh$ 의 계수를 전부 나눈다. 계수를 법 $p$ 로 줄이는 사상 $\mathbb Z\lbrack x\rbrack\to\mathbb F\_p\lbrack x\rbrack$ 를 막대로 적으면 $\bar g\bar h=0$ 이다. [유한체](finite-fields.md) $\mathbb F\_p$ 위의 다항식환은 정역이므로 $\bar g=0$ 이거나 $\bar h=0$ 이고, $p$ 가 $g$ 나 $h$ 의 계수를 전부 나눈다. 이것은 $g,h$ 가 원시라는 가정에 어긋난다.

## 유리수 계수와 정수 계수의 인수분해

$f\in\mathbb Z\lbrack x\rbrack$ 가 $\mathbb Q\lbrack x\rbrack$ 에서 차수 $r$ 과 $s$ 인 두 다항식의 곱이면, $\mathbb Z\lbrack x\rbrack$ 에서도 차수 $r$ 과 $s$ 인 두 다항식의 곱이다.

$f=gh$, $g,h\in\mathbb Q\lbrack x\rbrack$ 라 한다. 분모를 정리하면 양의 유리수 $a,b$ 와 원시다항식 $g_0,h_0$ 이 있어 $g=ag_0$, $h=bh_0$ 이다. $f=ab\thinspace g_0h_0$ 이고 $g_0h_0$ 이 원시이므로, 양변의 내용을 비교하면 $ab=c(f)$ 가 정수다. 그래서 $f=(ab\thinspace g_0)h_0$ 이 정수 계수 인수분해다.

따름정리로 원시다항식 $f$ 가 $\mathbb Z\lbrack x\rbrack$ 에서 기약인 것과 $\mathbb Q\lbrack x\rbrack$ 에서 기약인 것은 동치다. $\mathbb Z\lbrack x\rbrack$ 의 기약원은 $\pm p$ ( $p$ 는 소수) 와 $\mathbb Q\lbrack x\rbrack$ 에서 기약인 원시다항식이다.

## 유일분해정역 위의 다항식환

정리와 증명은 $\mathbb Z$ 를 [유일분해정역](unique-factorization-domains.md) $R$ 로, $\mathbb Q$ 를 분수체 $K$ 로 바꾸어도 그대로 성립한다. 내용은 계수들의 최대공약수로 단원 배수를 무시하고 정해지고, 증명의 $\mathbb F\_p$ 자리에 기약원 $p$ 로 나눈 몫 $R/(p)$ 가 들어간다. $R/(p)$ 는 $p$ 가 소원이므로 정역이다.

이로부터 **Gauss 정리(Gauss's theorem)**, 곧 $R$ 가 유일분해정역이면 $R\lbrack x\rbrack$ 도 유일분해정역이라는 것이 나온다[^2]. $K\lbrack x\rbrack$ 는 [유클리드 정역](euclidean-domains.md)이라 유일분해가 성립하고, 보조정리로 $K\lbrack x\rbrack$ 의 분해를 내용과 원시다항식의 분해로 옮긴다. 변수를 하나씩 늘리면 $\mathbb Z\lbrack x_1,\dots,x_n\rbrack$ 과 $k\lbrack x_1,\dots,x_n\rbrack$ 이 유일분해정역이다.

# 활용

- [Eisenstein 판정법](eisenstein-criterion.md). 유리수 계수 인수분해를 정수 계수 인수분해로 바꾼 뒤 계수를 법 $p$ 로 줄여 모순을 얻는다.
- [유리근 정리](rational-root-theorem.md)와 함께 쓰는 기약성 판정. 정수 계수 다항식의 기약성을 $\mathbb Q$ 위에서 볼 때 인수의 계수를 정수로 제한하므로 후보가 유한개가 된다.
- [다항식환](polynomial-rings.md)의 여러 변수 유일분해. $k\lbrack x,y\rbrack$ 는 주아이디얼정역이 아니지만 Gauss 정리로 유일분해정역이고, [대수다양체](algebraic-varieties.md)의 초곡면이 기약 다항식으로 하나씩 정해진다.

[^1]: S. Lang, *Algebra*, 3rd ed., Springer GTM 211, Chapter IV §2, Theorem 2.1.
[^2]: Lang, 같은 책, Chapter IV §2, Theorem 2.3.

# 연관 문서

## 선수지식

- [유일분해정역](unique-factorization-domains.md)

## 더 알아보기

- [Eisenstein 판정법](eisenstein-criterion.md)

#ring_theory #algebra #number_theory
