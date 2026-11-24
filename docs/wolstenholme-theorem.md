# Wolstenholme 정리

# 개요

**Wolstenholme 정리(Wolstenholme's theorem)** 는 $5$ 이상의 소수 $p$ 에 대해 $1$ 부터 $p-1$ 까지의 역수를 모두 더한 분수의 분자가 $p^2$ 으로 나누어진다는 정리다. $p=7$ 이면 다음과 같고 분자 $49$ 가 $7^2$ 이다.

$$
1+\frac12+\frac13+\frac14+\frac15+\frac16=\frac{49}{20}
$$

이 성질은 이항계수 $\binom{2p-1}{p-1}$ 을 $p^3$ 으로 나눈 나머지를 구할 때 필요하다. 이 이항계수는 $\prod(1+p/k)$ 로 쓰이므로, 전개하면 역수의 합이 $p$ 의 계수로 나타나고 그 분자가 $p^2$ 으로 나누어진다는 것에서 나머지가 $1$ 이 나온다.

# 직관

$p=7$ 에서 역수의 합을 $k$ 와 $7-k$ 끼리 묶어 더한다. $1/k+1/(7-k)=7/(k(7-k))$ 이므로 세 쌍에서 각각 $7$ 이 나온다.

$$
\frac76+\frac7{10}+\frac7{12}=7\cdot\frac{10+6+5}{60}=7\cdot\frac{21}{60}
$$

남은 분자 $21$ 에 $7$ 이 한 번 더 들어 있어 분자가 $49$ 가 된다. 짝짓기는 $7$ 을 한 번만 주므로, 둘째 $7$ 은 괄호 안의 합 $1/6+1/10+1/12$ 에서 나와야 한다.

괄호 안의 분모 $k(7-k)$ 는 법 $7$ 에서 $-k^2$ 와 합동이다. 그러면 괄호 안의 합은 법 $7$ 에서 $-(1/1^2+1/2^2+1/3^2)$ 과 같다. $1,2,3$ 의 역수의 제곱은 법 $7$ 에서 $1,2,4$ 이고 합이 $7$ 이므로 $0$ 과 합동이다. 둘째 $7$ 이 여기서 나온다.

# 정의

분모가 $p$ 와 서로소인 두 유리수 $a/b$, $c/d$ 의 차의 분자가 $p^n$ 으로 나누어지면 $a/b\equiv c/d\pmod{p^n}$ 이라 쓴다. 분모 $b$ 를 법 $p^n$ 의 역원 $b^{\varphi(p^n)-1}$ 로 바꾸면 [정수의 합동](modular-arithmetic.md)과 같은 계산이 된다. 이 수가 역원임은 [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)의 $b^{\varphi(p^n)}\equiv 1$ 로 증명된다. 직관 절의 $49/20\equiv 0\pmod{49}$ 가 그 예다.

$p-1$ 번째 조화수(harmonic number)를 다음으로 둔다.

$$
H_{p-1}=\sum_{k=1}^{p-1}\frac1k
$$

$p=5$ 이면 $H_4=25/12$, $p=11$ 이면 $H_{10}=7381/2520$ 이고 $7381=11^2\cdot 61$ 이다.

# 성질

## 정리의 진술

$p\ge 5$ 가 소수이면 다음 세 합동식이 성립한다.[^1]

$$
H_{p-1}\equiv 0\pmod{p^2},\qquad
\sum_{k=1}^{p-1}\frac1{k^2}\equiv 0\pmod p,\qquad
\binom{2p-1}{p-1}\equiv 1\pmod{p^3}
$$

$p=5$ 이면 $\binom94=126=5^3+1$, $p=7$ 이면 $\binom{13}6=1716=5\cdot 7^3+1$ 이다. $p=3$ 이면 $H_2=3/2$ 이고 $\binom52=10\equiv 10\pmod{27}$ 이어서 성립하지 않는다.

## 역수 제곱의 합

$p\ge 5$ 이면 역수 제곱의 합이 $p$ 로 나누어진다.

증명의 요지. $k\mapsto k^{-1}$ 은 법 $p$ 에서 $1,\dots,p-1$ 을 다시 늘어놓으므로 역수 제곱의 합은 제곱의 합 $(p-1)p(2p-1)/6$ 과 합동이다. 이 수는 $p$ 의 배수이고, $p\ge 5$ 이면 $6$ 이 법 $p$ 에서 가역이므로 법 $p$ 에서 $0$ 이다.

## 조화수의 분자

$p\ge 5$ 이면 $H_{p-1}\equiv 0\pmod{p^2}$ 이다.

증명의 요지. 직관 절처럼 $k$ 와 $p-k$ 를 묶으면 다음이 나온다.

$$
2H_{p-1}=\sum_{k=1}^{p-1}\left(\frac1k+\frac1{p-k}\right)=p\sum_{k=1}^{p-1}\frac1{k(p-k)}
$$

$k(p-k)\equiv -k^2\pmod p$ 이므로 오른쪽 합은 법 $p$ 에서 역수 제곱의 합의 $-1$ 배이고 $0$ 이다. 앞의 $p$ 와 합쳐 $2H_{p-1}$ 이 법 $p^2$ 에서 $0$ 이다.

## 이항계수

$p\ge 5$ 이면 $\binom{2p-1}{p-1}\equiv 1\pmod{p^3}$ 이다.

증명의 요지. 이항계수를 곱으로 쓰고 $p$ 의 거듭제곱으로 전개한다.

$$
\begin{aligned}
\binom{2p-1}{p-1}&=\prod_{k=1}^{p-1}\frac{p+k}{k}=\prod_{k=1}^{p-1}\left(1+\frac pk\right) \cr
&=1+pH_{p-1}+p^2e_2+p^3(\cdots)
\end{aligned}
$$

$e_2$ 는 서로 다른 두 역수의 곱을 모두 더한 값이고 $2e_2=H_{p-1}^2-\sum 1/k^2$ 이다. 앞의 두 절에서 $pH_{p-1}$ 은 $p^3$ 으로, $p^2e_2$ 도 $p^3$ 으로 나누어진다.

[Lucas 정리](lucas-theorem.md)는 같은 이항계수를 법 $p$ 로만 계산해 $\binom{2p-1}{p-1}\equiv\binom 11\binom{p-1}{p-1}=1$ 을 준다. Wolstenholme 정리는 이것을 법 $p^3$ 까지 올린 것이다.

## 법 p⁴ 와 Bernoulli 수

법 $p^4$ 에서는 [Bernoulli 수](bernoulli-numbers.md)가 나타난다.[^2]

$$
\binom{2p-1}{p-1}\equiv 1-\frac23p^3B_{p-3}\pmod{p^4}
$$

$p=11$ 이면 $B_8=-1/30$ 이고 오른쪽은 $1+11^3/45$ 이다. $45\equiv 1\pmod{11}$ 이므로 법 $11^4$ 에서 $1+11^3=1332$ 와 합동이고, 실제로 $\binom{21}{10}=352716\equiv 1332\pmod{11^4}$ 이다.

$\binom{2p-1}{p-1}\equiv 1\pmod{p^4}$ 인 소수를 **Wolstenholme 소수(Wolstenholme prime)** 라 한다. 위 합동식에서 이것은 $p$ 가 $B_{p-3}$ 의 분자를 나누는 것과 동치다. $10^9$ 아래의 Wolstenholme 소수는 $16843$ 과 $2124679$ 둘이다.[^3]

## 일반화

$p\ge 5$ 이고 $a\ge b\ge 0$ 이면 $\binom{ap}{bp}\equiv\binom ab\pmod{p^3}$ 이다.[^4] $a=2$, $b=1$ 이면 $\binom{2p}p\equiv 2$ 이고, $\binom{2p}p=2\binom{2p-1}{p-1}$ 이므로 정리의 셋째 합동식과 같다.

# 활용

- [Lucas 정리](lucas-theorem.md). Lucas 정리와 Kummer 정리가 이항계수를 법 $p$ 와 $p$ 의 지수로 다룬다면, Wolstenholme 정리는 법 $p^2$, $p^3$ 에서의 값을 준다.
- [Bernoulli 수](bernoulli-numbers.md). 법 $p^4$ 의 합동식은 $p$ 가 $B_{p-3}$ 의 분자를 나누는지를 이항계수 하나로 판정하게 한다.
- [Wilson 정리](wilson-theorem.md). 두 정리 모두 법 $p$ 의 각 수를 역원과 짝지어 증명된다. Wilson 정리는 곱에서, Wolstenholme 정리는 합에서 이 짝짓기를 쓴다.

[^1]: J. Wolstenholme, "On certain properties of prime numbers", *The Quarterly Journal of Pure and Applied Mathematics* 5, 1862, pp. 35–39.
[^2]: J. W. L. Glaisher, "On the residues of the sums of products of the first p − 1 numbers, and their powers, to modulus p² or p³", *The Quarterly Journal of Pure and Applied Mathematics* 31, 1900, pp. 321–353.
[^3]: R. J. McIntosh, E. L. Roettger, "A search for Fibonacci–Wieferich and Wolstenholme primes", *Mathematics of Computation* 76, 2007, pp. 2087–2094.
[^4]: A. Granville, "Arithmetic properties of binomial coefficients I: Binomial coefficients modulo prime powers", *Canadian Mathematical Society Conference Proceedings* 20, 1997, pp. 253–276.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)
- [Lucas 정리](lucas-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics
