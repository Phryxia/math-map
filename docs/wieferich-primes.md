# Wieferich 소수

# 개요

**Wieferich 소수(Wieferich prime)** 는 $2^{p-1}-1$ 이 $p$ 로 한 번 나누어지는 데 그치지 않고 $p^2$ 으로도 나누어지는 소수 $p$ 다. [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)는 홀수 소수 $p$ 마다 $2^{p-1}-1$ 이 $p$ 의 배수라고 하는데, $p=7$ 이면 $2^6-1=63=7\cdot 9$ 이고 $9$ 는 다시 $7$ 로 나누어지지 않는다. 몫 $(2^{p-1}-1)/p$ 를 $p$ 로 나눈 나머지를 보면 이 몫이 언제 $0$ 이 되는지 알 수 있고, 그런 소수는 $1093$ 과 $3511$ 두 개만 발견되었다.

# 직관

작은 소수에서 $2^{p-1}-1$ 을 $p$ 로 나눈 몫과, 그 몫을 다시 $p$ 로 나눈 나머지를 구한다.

| p | 2ᵖ⁻¹ − 1 | 몫 | 몫을 p 로 나눈 나머지 |
| --- | --- | --- | --- |
| 3 | $3$ | $1$ | $1$ |
| 5 | $15$ | $3$ | $3$ |
| 7 | $63$ | $9$ | $2$ |
| 11 | $1023$ | $93$ | $5$ |
| 13 | $4095$ | $315$ | $3$ |

나머지는 $0$ 부터 $p-1$ 까지 흩어져 나오고 $0$ 은 나오지 않는다. 나머지가 $0$ 이면 $2^{p-1}-1$ 이 $p^2$ 의 배수다. 이런 $p$ 를 찾아 계속 올라가면 $p=1093$ 에서 처음으로 나머지가 $0$ 이 된다.

이 나머지는 [Fermat 마지막 정리](fermats-last-theorem.md)에서 처음 쓰였다. Wieferich 는 $x^p+y^p=z^p$ 에 $p$ 로 나누어지지 않는 정수해가 있으면 이 나머지가 $0$ 이어야 한다는 것을 보였다. 나머지가 $0$ 인 소수가 드물므로 그 소수들 밖에서는 이런 해가 없다.

# 정의

소수 $p$ 와 $p$ 로 나누어지지 않는 정수 $a$ 에 대해 다음 수를 **Fermat 몫(Fermat quotient)** 이라 한다.

$$
q_p(a)=\frac{a^{p-1}-1}{p}
$$

Fermat 소정리로 $q_p(a)$ 는 정수다. 직관 절의 표의 셋째 열이 $q_p(2)$ 이고 넷째 열이 $q_p(2)\bmod p$ 다.

$q_p(2)\equiv 0\pmod p$, 곧 $2^{p-1}\equiv 1\pmod{p^2}$ 인 소수를 Wieferich 소수라 한다. $a$ 에 대해 $a^{p-1}\equiv 1\pmod{p^2}$ 인 소수를 밑 $a$ 의 Wieferich 소수라 한다. $3^{10}=59049=488\cdot 121+1$ 이므로 $11$ 은 밑 $3$ 의 Wieferich 소수다.

# 성질

## 알려진 Wieferich 소수

$1093$ 은 Meissner 가 1913 년에, $3511$ 은 Beeger 가 1922 년에 찾았다. $6.7\times 10^{15}$ 아래의 Wieferich 소수는 이 둘뿐이다.[^1] Meissner 는 법 $1093$ 에서 $2$ 의 위수가 $364$ 라는 것을 써서, $2^{364}-1$ 이 $1093^2$ 의 배수임을 손으로 확인했다.[^2]

## 로그 성질

$p$ 로 나누어지지 않는 $a$, $b$ 에 대해 다음이 성립한다.

$$
q_p(ab)\equiv q_p(a)+q_p(b)\pmod p
$$

증명의 요지. $a^{p-1}=1+pq_p(a)$, $b^{p-1}=1+pq_p(b)$ 를 곱하면 다음이 나온다.

$$
(ab)^{p-1}=1+p\big(q_p(a)+q_p(b)\big)+p^2q_p(a)q_p(b)
$$

따라서 $q_p$ 는 법 $p$ 의 가역원군에서 덧셈군 $\mathbb Z/p$ 로 가는 준동형처럼 행동한다. $q_p(4)\equiv 2q_p(2)$ 이므로 Wieferich 소수는 밑 $4$ 의 Wieferich 소수이기도 하다.

## 조화수로 쓴 판정

홀수 소수 $p$ 에서 다음이 성립한다.

$$
\sum_{k=1}^{(p-1)/2}\frac1k\equiv -2\thinspace q_p(2)\pmod p
$$

$p=5$ 이면 왼쪽은 $1+1/2=3/2\equiv 4$ 이고 오른쪽은 $-2\cdot 3\equiv 4$ 다. 따라서 $p$ 가 Wieferich 소수인 것은 $1$ 부터 $(p-1)/2$ 까지의 역수의 합의 분자가 $p$ 로 나누어지는 것과 동치다. [Wolstenholme 정리](wolstenholme-theorem.md)는 $1$ 부터 $p-1$ 까지의 역수의 합이 $p^2$ 으로 나누어진다고 하므로, 절반까지의 합이 판정에 쓰인다.

증명의 요지. $2^{p-1}=\prod_{k=1}^{p-1}\frac{2k}{k}$ 를 이항계수 $\binom{p-1}{(p-1)/2}$ 와 묶고, 그 이항계수를 법 $p^2$ 에서 $\prod(1-p/k)$ 로 전개해 $p$ 의 계수를 비교한다.

## Fermat 마지막 정리의 첫째 경우

$p$ 가 홀수 소수이고 $p\nmid xyz$ 인 정수 $x,y,z$ 가 $x^p+y^p=z^p$ 를 만족하면 $p$ 는 Wieferich 소수다.[^3] 이것을 Wieferich 정리(Wieferich's theorem)라 한다. Mirimanoff 는 같은 가정에서 $p$ 가 밑 $3$ 의 Wieferich 소수이기도 하다는 것을 보였다.[^4] $1093$ 과 $3511$ 은 밑 $3$ 의 Wieferich 소수가 아니므로, 두 정리를 합치면 첫째 경우가 이 두 소수에서도 성립한다.

$p\nmid xyz$ 인 해를 다루는 경우를 첫째 경우라 하고, Fermat 마지막 정리의 증명 이전에는 이런 판정으로 첫째 경우가 성립하는 지수의 범위를 넓혔다.

## Mersenne 수의 제곱 인수

$q$ 가 소수이고 $p^2$ 이 Mersenne 수 $2^q-1$ 을 나누면 $p$ 는 Wieferich 소수다. $2^q\equiv 1\pmod{p^2}$ 이면 법 $p^2$ 에서 $2$ 의 위수가 $q$ 이고, $q$ 는 $p-1$ 을 나누므로 $2^{p-1}\equiv 1\pmod{p^2}$ 이다. $1093$ 과 $3511$ 에서 $2$ 의 위수는 $364$ 와 $1755$ 이고 둘 다 소수가 아니므로, 지금까지 알려진 Mersenne 수 가운데 소수 지수의 것에는 제곱 인수가 없다.

# 활용

- [Fermat 마지막 정리](fermats-last-theorem.md). Wieferich 정리와 Mirimanoff 정리가 첫째 경우를 Fermat 몫의 계산으로 바꾼다.
- [Mihăilescu 정리](mihailescu-theorem.md). Catalan 방정식 $x^p-y^q=1$ 의 해가 있으면 $p^{q-1}\equiv 1\pmod{q^2}$ 과 $q^{p-1}\equiv 1\pmod{p^2}$ 이 함께 성립한다. 이 조건을 이중 Wieferich 쌍(double Wieferich pair)이라 하고, 증명의 한 단계가 이 조건을 쓴다.
- [Fermat 수](fermat-numbers.md)와 [완전수](perfect-numbers.md). Fermat 수나 Mersenne 수에 제곱 인수가 있으면 그 인수가 Wieferich 소수여야 하므로, 제곱 인수의 탐색이 Wieferich 소수의 탐색으로 줄어든다.

[^1]: F. G. Dorais, D. Klyve, "A Wieferich prime search up to 6.7 × 10¹⁵", *Journal of Integer Sequences* 14, 2011, Article 11.9.2.
[^2]: W. Meissner, "Über die Teilbarkeit von 2ᵖ − 2 durch das Quadrat der Primzahl p = 1093", *Sitzungsberichte der Königlich Preußischen Akademie der Wissenschaften zu Berlin*, 1913, pp. 663–667.
[^3]: A. Wieferich, "Zum letzten Fermat'schen Theorem", *Journal für die reine und angewandte Mathematik* 136, 1909, pp. 293–302.
[^4]: D. Mirimanoff, "Sur le dernier théorème de Fermat", *Comptes Rendus de l'Académie des Sciences* 150, 1910, pp. 204–206.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra
