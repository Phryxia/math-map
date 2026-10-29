# 완전수

# 개요

**완전수(perfect number)** 는 자기 자신을 뺀 양의 약수를 모두 더하면 자기 자신이 되는 양의 정수다. $6$ 의 약수 가운데 $6$ 을 뺀 $1,2,3$ 을 더하면 $6$ 이고, $28$ 도 $1+2+4+7+14=28$ 이다. 약수의 합을 소인수분해에서 바로 계산하는 공식을 쓰면, 짝수 완전수는 $2^p-1$ 꼴의 소수 하나로 전부 정해진다.

# 직관

$28=2^2\cdot 7$ 의 약수는 $2$ 의 거듭제곱 $1,2,4$ 와 $7$ 의 거듭제곱 $1,7$ 을 하나씩 골라 곱한 것이다. 그래서 약수를 모두 더한 값은 두 묶음의 합을 곱한 값과 같다.

$$
(1+2+4)(1+7)=7\cdot 8=56=2\cdot 28
$$

$7=2^3-1$ 이 소수이므로 $2^2\cdot 7$ 의 약수의 합에서 $2^2$ 쪽 묶음의 합이 $7$, $7$ 쪽 묶음의 합이 $8=2^3$ 이 되어 정확히 $2\cdot 28$ 이 나온다. $6=2\cdot 3$ 에서도 $3=2^2-1$ 이 소수이고 $(1+2)(1+3)=12$ 다. 같은 계산이 $2^{p-1}(2^p-1)$ 꼴의 모든 수에서 되풀이된다.

# 정의

양의 정수 $n$ 의 **약수 합 함수(sum-of-divisors function)** 는 다음 값이다.

$$
\sigma(n)=\sum_{d\mid n}d
$$

$\sigma(n)=2n$ 이면 $n$ 을 **완전수** 라 한다. $\sigma(n)\gt 2n$ 이면 **과잉수(abundant number)**, $\sigma(n)\lt 2n$ 이면 **부족수(deficient number)** 라 한다. 처음 네 완전수는 $6,28,496,8128$ 이다. $12$ 는 $\sigma(12)=28\gt 24$ 이므로 과잉수이고, 모든 [소수](primes.md) $p$ 는 $\sigma(p)=p+1$ 이므로 부족수다.

$2^p-1$ 꼴의 수를 Mersenne 수(Mersenne number) $M_p$ 라 하고, 그 가운데 소수인 것을 Mersenne 소수(Mersenne prime)라 한다.

# 성질

## 약수 합의 공식

$\gcd(m,n)=1$ 이면 $\sigma(mn)=\sigma(m)\sigma(n)$ 이다. 소수 거듭제곱에서는 다음과 같다.

$$
\sigma(p^k)=1+p+\cdots+p^k=\frac{p^{k+1}-1}{p-1}
$$

증명의 요지. 산술의 기본 정리로 $mn$ 의 약수는 $m$ 의 약수와 $n$ 의 약수의 곱으로 정확히 한 번씩 적힌다. 따라서 $\sigma(mn)$ 은 두 합의 곱으로 갈라진다. 이 성질을 가진 함수를 곱셈적 함수(multiplicative function)라 한다.

## Mersenne 소수의 지수

$2^p-1$ 이 소수이면 $p$ 는 소수다. $p=ab$, $a,b\gt 1$ 이면 다음 식에서 $2^a-1$ 이 $2^p-1$ 의 진약수이기 때문이다.

$$
2^{ab}-1=(2^a-1)(2^{a(b-1)}+2^{a(b-2)}+\cdots+1)
$$

역은 성립하지 않는다. $2^{11}-1=2047=23\cdot 89$ 다.

## Euclid–Euler 정리

**Euclid–Euler 정리(Euclid–Euler theorem)** 는 짝수 $n$ 이 완전수인 것과 $2^p-1$ 이 소수인 어떤 $p$ 에 대해 $n=2^{p-1}(2^p-1)$ 인 것이 동치라는 정리다. 충분조건은 Euclid 의 *원론* 9 권 명제 36 에 있고, 필요조건은 Euler 가 증명했다.[^1]

증명의 요지. 충분조건은 직관 절의 계산이다. $q=2^p-1$ 이 소수이면 $\sigma(2^{p-1}q)=(2^p-1)(q+1)=2^p q$ 다.

필요조건. 짝수 완전수를 $n=2^k m$, $k\ge 1$, $m$ 홀수로 쓰면 곱셈성에서 다음이 나온다.

$$
2^{k+1}m=\sigma(n)=(2^{k+1}-1)\sigma(m)
$$

$2^{k+1}-1$ 은 $2^{k+1}$ 과 서로소이므로 $m$ 을 나눈다. $m=(2^{k+1}-1)d$ 라 두면 $\sigma(m)=2^{k+1}d=m+d$ 다. $d$ 와 $m$ 은 $m$ 의 서로 다른 약수이므로 $\sigma(m)\ge m+d$ 이고, 등호이므로 $m$ 의 약수는 $d$ 와 $m$ 뿐이다. 그러면 $d=1$ 이고 $m=2^{k+1}-1$ 은 소수다.

## 홀수 완전수

홀수 완전수가 존재하는지는 알려져 있지 않다.[^2] 존재한다면 다음 조건을 만족해야 한다.

- Euler 의 꼴. $n=q^{\alpha}m^2$, $q$ 는 소수이고 $q\equiv\alpha\equiv 1\pmod 4$, $q\nmid m$ 이다.
- 크기. $n\gt 10^{1500}$ 이다.[^3]

Euler 의 꼴은 $\sigma(n)=2n$ 이 법 $4$ 로 $2$ 라는 데서 나온다. 홀수 소수 거듭제곱 $p^e$ 에 대해 $\sigma(p^e)$ 는 $e$ 가 짝수일 때 홀수이므로, $\sigma(n)$ 이 $2$ 로 정확히 한 번 나누어지려면 지수가 홀수인 소인수 $q^{\alpha}$ 가 정확히 하나여야 한다. $q\equiv 3\pmod 4$ 이면 $1+q$ 가 $\sigma(q^{\alpha})$ 를 나누어 $4\mid\sigma(q^{\alpha})$ 이므로 $q\equiv 1\pmod 4$ 이고, 그러면 $\sigma(q^{\alpha})\equiv\alpha+1\equiv 2\pmod 4$ 에서 $\alpha\equiv 1\pmod 4$ 다.

# 활용

- [Lucas–Lehmer 판정](lucas-lehmer-test.md)은 $M_p$ 가 소수인지를 결정하므로, Euclid–Euler 정리를 거쳐 짝수 완전수를 찾는 방법이 된다. 알려진 짝수 완전수는 모두 이 판정으로 확인된 Mersenne 소수에서 나왔다.
- 약수 합 함수의 곱셈성은 [Möbius 반전 공식](mobius-inversion.md)이 다루는 산술함수의 합성곱 $\sigma=\mathbf 1\ast\mathrm{id}$ 의 한 예다.
- $\sigma(n)/n$ 의 크기는 Robin 부등식(Robin's inequality) $\sigma(n)\lt e^{\gamma}n\log\log n$ 으로 이어지고, 이 부등식이 $n\gt 5040$ 에서 성립하는 것은 [Riemann 가설](riemann-hypothesis.md)과 동치다.[^4]

[^1]: G. H. Hardy, E. M. Wright, *An Introduction to the Theory of Numbers*, 6th ed., Oxford University Press (2008), Ch. XVI. 짝수 완전수의 꼴과 Euclid, Euler 의 기여.
[^2]: R. K. Guy, *Unsolved Problems in Number Theory*, 3rd ed., Springer (2004), Problem B1. 홀수 완전수의 존재를 미해결 문제로 싣고 알려진 조건을 정리한다.
[^3]: P. Ochem, M. Rao, "Odd perfect numbers are greater than $10^{1500}$", *Mathematics of Computation* **81** (2012), 1869–1877.
[^4]: G. Robin, "Grandes valeurs de la fonction somme des diviseurs et hypothèse de Riemann", *Journal de Mathématiques Pures et Appliquées* **63** (1984), 187–213.

# 연관 문서

## 선수지식

- [소수](primes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics
