# Ramanujan–Nagell 방정식

# 개요

**Ramanujan–Nagell 방정식(Ramanujan–Nagell equation)** 은 $x^2+7=2^m$ 이고, 그 정수해를 전부 찾는 문제다. $1+7=8$, $9+7=16$, $25+7=32$, $121+7=128$ 에 이어 $181^2+7=32768=2^{15}$ 이 나오는데, 그다음 해가 있는지는 $m$ 을 키워 가며 확인해서는 알 수 없다. 이 방정식은 $\sqrt{-7}$ 을 붙인 정수환에서 $x^2+7$ 을 인수분해해 [Lucas 수열](lucas-sequences.md)의 한 항이 $\pm 1$ 이 되는 문제로 바뀌고, 그 항을 법 $7$ 로 비교해 해가 다섯 개뿐임이 증명된다.

# 직관

$x^2+7$ 은 정수에서는 인수분해되지 않지만 $\sqrt{-7}$ 을 쓰면 $(x+\sqrt{-7})(x-\sqrt{-7})$ 이다. $x$ 가 홀수이면 두 인수를 $2$ 로 나눌 수 있고, $m\ge 3$ 이면 $n=m-2$ 로 두어 다음이 된다.

$$
\frac{x+\sqrt{-7}}{2}\cdot\frac{x-\sqrt{-7}}{2}=2^n
$$

$2$ 도 같은 꼴로 쪼개진다. $\alpha=(1+\sqrt{-7})/2$, $\beta=(1-\sqrt{-7})/2$ 이면 $\alpha\beta=2$ 이므로 오른쪽은 $\alpha^n\beta^n$ 이다. $x=5$, $n=3$ 에서는 $(5+\sqrt{-7})/2=-\alpha^3$ 이다.

왼쪽 두 인수는 공통 인수가 없고 오른쪽은 $\alpha$ 와 $\beta$ 의 곱이므로, 정수에서 소인수를 나누어 갖듯 한쪽이 $\alpha^n$ 을 다 갖는다. 그러면 $(x+\sqrt{-7})/2=\pm\alpha^n$ 이고 켤레를 빼면 $\sqrt{-7}=\pm(\alpha^n-\beta^n)$ 이다. $x$ 를 찾는 문제가 $\alpha^n-\beta^n=\pm(\alpha-\beta)$ 인 $n$ 을 찾는 문제로 바뀐다.

# 정의

Ramanujan–Nagell 방정식은 다음 방정식이다.

$$
x^2+7=2^m,\qquad x,m\in\mathbb Z,\quad m\ge 0
$$

$\alpha=(1+\sqrt{-7})/2$ 와 $\beta=(1-\sqrt{-7})/2$ 는 $t^2-t+2=0$ 의 두 근이다. 이 둘로 만든 Lucas 수열 $u_n=(\alpha^n-\beta^n)/(\alpha-\beta)$ 은 $u_n=u_{n-1}-2u_{n-2}$ 를 만족하는 정수열이다. 직관 절의 마지막 식은 $u_n=\pm 1$ 이다.

$u_n$ 은 $0,1,1,-1,-3,-1,5,7,-3,-17,-11,23,45,-1,\dots$ 로 이어지고 $u_1,u_2,u_3,u_5,u_{13}$ 이 $\pm 1$ 이다. 이 다섯이 $m=n+2=3,4,5,7,15$ 의 해에 대응한다.

# 성질

## Nagell 정리

Nagell 은 1948 년에 $x^2+7=2^m$ 의 양의 정수해가 다음 다섯 개뿐임을 증명했다.[^1]

$$
(x,m)=(1,3),\ (3,4),\ (5,5),\ (11,7),\ (181,15)
$$

Ramanujan 은 1913 년에 이 다섯이 해의 전부일 것이라고 문제로 냈다.[^2]

## 정수환에서의 환원

$\mathbb Z\lbrack\alpha\rbrack$ 는 $\mathbb Q(\sqrt{-7})$ 의 정수환이고 [유일분해정역](unique-factorization-domains.md)이다. 단원은 $\pm 1$ 뿐이다. $\alpha$ 와 $\beta$ 는 노름이 $2$ 인 소원이고 서로 동반이 아니다.

$(x+\sqrt{-7})/2$ 와 $(x-\sqrt{-7})/2$ 의 공통 소인수는 두 수의 차 $\sqrt{-7}$ 을 나누므로 노름이 $7$ 을 나눈다. 곱이 $2^n$ 이어서 그런 소인수의 노름은 $2$ 의 거듭제곱이므로 공통 소인수가 없다. 유일분해로 $(x+\sqrt{-7})/2=\pm\alpha^n$ 또는 $\pm\beta^n$ 이고, $x$ 의 부호를 바꾸면 앞의 경우로 모인다. 따라서 해는 $u_n=\pm 1$ 인 $n$ 과 일대일로 대응한다.

## 법 7 의 비교

$\alpha^n-\beta^n$ 을 이항전개하면 $\sqrt{-7}$ 의 홀수 거듭제곱만 남는다. $u_n=\pm 1$ 은 다음 식이 된다.

$$
\sum_{k\ \mathrm{odd}}\binom nk(-7)^{(k-1)/2}=\pm 2^{n-1}
$$

$n=1,2$ 는 $+$ 부호의 해이고, $n\ge 3$ 의 해는 모두 $-$ 부호다. $-$ 부호의 식을 법 $7$ 로 보면 $k=1$ 항만 남아 $n\equiv -2^{n-1}\pmod 7$ 이다. $2^{n-1}$ 은 법 $7$ 로 주기 $3$ 이므로 이 합동은 $n\equiv 3,5,13\pmod{21}$ 과 같다.

증명의 요지. Nagell 은 각 합동류에서 해가 그 합동류의 가장 작은 $n$ 하나뿐임을 보였다. $n_0$ 을 그 합동류의 해, $n$ 을 같은 합동류의 다른 해라 하자. 위 식을 법 $7^{l+1}$ 로 비교하면 $7^l\mid n-n_0$ 에서 $7^{l+1}\mid n-n_0$ 이 나온다. 이를 되풀이하면 $n=n_0$ 이므로 남는 해는 $n=3,5,13$ 이다.

# 활용

- 일반화된 방정식 $x^2+D=2^m$ 도 $\mathbb Q(\sqrt{-D})$ 의 정수환이 유일분해정역이면 같은 환원으로 Lucas 수열의 항이 $\pm 1$ 이 되는 문제로 바뀐다. $\pm 1$ 인 항에는 원시 소인수가 없으므로 [Bilu–Hanrot–Voutier 정리](bilu-hanrot-voutier-theorem.md)로 $n\le 30$ 의 경우만 확인하면 된다.
- 길이 $n$, 반지름 $2$ 인 이진 완전 부호가 있으려면 $1+n+\binom n2$ 이 $2$ 의 거듭제곱이어야 하고, 이것은 $(2n+1)^2+7=2^{m}$ 꼴이다. 해 $x=2n+1=181$ 에서 $n=90$ 이 나오지만 그 길이의 완전 부호는 없다.

[^1]: T. Nagell, "Løsning til oppgave nr 2", *Norsk Matematisk Tidsskrift* **30** (1948), 62–64. 영어판: "The Diophantine equation $x^2+7=2^n$", *Arkiv för Matematik* **4** (1961), 185–187.
[^2]: S. Ramanujan, Question 464, *Journal of the Indian Mathematical Society* **5** (1913), 120.

# 연관 문서

## 선수지식

- [Bilu–Hanrot–Voutier 정리](bilu-hanrot-voutier-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra
