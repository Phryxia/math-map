# Pocklington 판정

# 개요

**Pocklington 판정(Pocklington's criterion)** 은 $n-1$ 의 소인수분해를 일부만 알아도 $n$ 이 소수임을 증명하는 판정이다. $47$ 이 소수임을 [Pratt 증명서](pratt-certificate.md)로 보이려면 $46=2\cdot 23$ 의 두 소인수 모두에서 $5$ 의 거듭제곱을 확인해야 하지만, $23\gt\sqrt{47}$ 이므로 소인수 $23$ 하나만 확인해도 된다. 이 판정은 $\sqrt n$ 보다 큰 약수 $F$ 의 소인수 $q$ 마다 $a^{n-1}\equiv 1$ 이고 $a^{(n-1)/q}-1$ 이 $n$ 과 서로소인 $a$ 를 찾아, $n$ 의 소인수가 모두 $\sqrt n$ 보다 크다는 것을 보인다.

# 직관

Pocklington 판정은 $n-1$ 의 소인수분해를 전부 알지 못해도, $\sqrt n$ 보다 큰 약수 $F$ 의 소인수분해만 알면 $n$ 이 소수임을 증명하는 판정이다. $F$ 의 소인수 $q$ 마다 $a^{n-1}\equiv 1$ 이고 $a^{(n-1)/q}-1$ 이 $n$ 과 서로소인 $a$ 를 내놓으면 $n$ 의 모든 소인수가 $\sqrt n$ 보다 커서 $n$ 이 소수다.[^1]

Pratt 증명서가 요구하는 $n-1$ 의 완전한 인수분해를 절반 크기의 인수분해로 줄인다.

$47$ 의 Pratt 증명서는 $46=2\cdot 23$ 의 두 소인수 모두에서 $5$ 의 거듭제곱을 확인했다. 소인수 $23$ 하나만 확인해도 결론이 나온다.

$5^{46}\equiv 1$ 이고 $5^{46/23}-1=24$ 가 $47$ 과 서로소라고 하자. $47$ 의 소인수 $p$ 를 하나 잡으면 법 $p$ 에서 $5^{46}\equiv 1$ 이고 $5^2\not\equiv 1$ 이므로 $5$ 의 위수는 $46$ 을 나누되 $2$ 를 나누지 않는다. 위수가 $23$ 의 배수이고 위수는 $p-1$ 을 나누므로 $p\ge 24$ 다. $24\gt\sqrt{47}$ 이므로 $47$ 의 소인수는 모두 $\sqrt{47}$ 보다 크고, 그런 소인수는 $47$ 자신뿐이다. $2$ 에서는 아무것도 확인하지 않았다.

# 정의

**정리 (Pocklington).** $n-1=FR$, $\gcd(F,R)=1$ 이고 $F\gt\sqrt n$ 이며 $F$ 의 소인수분해를 안다고 하자. $F$ 의 소인수 $q$ 마다

$$
a\_q^{n-1}\equiv 1\pmod n,\qquad \gcd\bigl(a\_q^{(n-1)/q}-1,\thinspace n\bigr)=1
$$

인 정수 $a\_q$ 가 있으면 $n$ 은 소수다.

증명의 요지. $p$ 를 $n$ 의 소인수로 두고 $q^e$ 를 $F$ 를 정확히 나누는 거듭제곱이라 하자. 법 $p$ 에서 $a\_q$ 의 위수 $d$ 는 $n-1$ 을 나누고, $a\_q^{(n-1)/q}\not\equiv 1\pmod p$ 이므로 $(n-1)/q$ 를 나누지 않는다. 그러므로 $q^e\mid d$ 이고 $d\mid p-1$ 이다. 모든 $q$ 에서 이것이 성립하므로 $F\mid p-1$ 이고 $p\gt F\gt\sqrt n$ 이다. 모든 소인수가 $\sqrt n$ 보다 큰 수는 소수다.

# 성질

## Proth 정리

$n=k\cdot 2^m+1$ 이고 $k$ 가 홀수, $k\lt 2^m$ 이면 $F=2^m\gt\sqrt n$ 이다. $F$ 의 소인수는 $2$ 하나이므로 판정은 다음이 된다.

**정리 (Proth).** $n$ 이 소수인 것은 $a^{(n-1)/2}\equiv -1\pmod n$ 인 $a$ 가 있는 것과 동치다.

$\equiv -1$ 이면 $a^{n-1}\equiv 1$ 이고 $a^{(n-1)/2}-1\equiv -2$ 가 $n$ 과 서로소이므로 Pocklington 판정이 성립한다. 역으로 $n$ 이 소수이면 $a$ 를 법 $n$ 의 제곱비잉여로 잡을 때 Euler 판정법(Euler's criterion)으로 $a^{(n-1)/2}\equiv -1$ 이다.

## 세제곱근 크기의 약수

Brillhart, Lehmer, Selfridge 는 $F\ge n^{1/3}$ 이면 같은 조건에 $R$ 을 $F$ 진법으로 펼친 계수에 대한 판정 하나를 더해 소수성을 결정했다.[^2] 인수분해해야 할 부분이 $n^{1/2}$ 에서 $n^{1/3}$ 으로 줄어든다.

## 증명서의 재귀

판정에 쓴 $F$ 의 소인수 $q$ 마다 소수라는 증명이 다시 필요하다. 각 $q$ 에 이 판정을 되풀이하면 Pratt 증명서보다 마디가 적은 증명서 나무가 나온다. [타원곡선 소수 증명](elliptic-curve-primality-proving.md)은 같은 논증을 $(\mathbb Z/p\mathbb Z)^\times$ 대신 타원곡선의 점군에서 하여, 크기가 $p-1$ 로 고정된 군에서 생기는 인수분해 문제를 피한다.

# 활용

- **특별한 꼴의 소수.** $k\cdot 2^m+1$ 꼴의 큰 소수는 Proth 정리로 증명한다. Fermat 수 $2^{2^m}+1$ 에 대한 Pépin 판정은 $a=3$ 으로 정한 Proth 정리의 특수 사례다.
- **증명 가능한 소수의 생성.** 소수 $q$ 에서 시작해 $n=2kq+1$ ($2k\lt q$) 꼴의 수를 시험하면 $F=q\gt\sqrt n$ 의 소인수분해를 처음부터 안다. 이것을 되풀이해 큰 소수를 증명서와 함께 만든다.

[^1]: H. C. Pocklington, "The determination of the prime or composite nature of large numbers by Fermat's theorem", *Proceedings of the Cambridge Philosophical Society* 18 (1914–1916), 29–30.
[^2]: J. Brillhart, D. H. Lehmer, J. L. Selfridge, "New primality criteria and factorizations of 2ᵐ ± 1", *Mathematics of Computation* 29 (1975), 620–647.

# 연관 문서

## 선수지식

- [Pratt 증명서](pratt-certificate.md)

## 더 알아보기

- [Lucas–Lehmer 판정](lucas-lehmer-test.md)
- [타원곡선 소수 증명](elliptic-curve-primality-proving.md)

#number_theory #algorithms #complexity
