# Carmichael 함수

# 개요

**Carmichael 함수(Carmichael function)** $\lambda(n)$ 은 $n$ 과 서로소인 모든 수가 $\lambda(n)$ 제곱하면 법 $n$ 으로 $1$ 이 되는 가장 작은 양의 지수다. 법 $15$ 에서 Euler 정리는 지수 $\varphi(15)=8$ 을 주지만, $2^4=16$, $7^4=2401$, $14^4=38416$ 을 비롯해 $15$ 와 서로소인 여덟 수가 모두 네제곱에서 이미 $1$ 이 된다. 법 $n$ 을 소수 거듭제곱으로 쪼개 각 법의 지수를 구하고 그 최소공배수를 잡으면 $\lambda(n)$ 이 나온다.

# 직관

법 $15$ 에서 $a^4\equiv 1$ 이 모든 $a$ 에 대해 성립하는 이유를 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 본다. $a$ 를 $3$ 과 $5$ 로 나눈 나머지를 따로 보면, 법 $3$ 에서는 $a^2\equiv 1$ 이고 법 $5$ 에서는 $a^4\equiv 1$ 이다. 두 지수 $2$ 와 $4$ 의 공배수인 $4$ 에서 두 법 모두 $1$ 이 되므로 법 $15$ 에서도 $a^4\equiv 1$ 이다.

Euler 정리의 지수 $\varphi(15)=2\cdot 4=8$ 은 두 지수를 곱한 값이고, 실제로 필요한 것은 최소공배수 $4$ 다. 두 지수가 모두 짝수이므로 곱과 최소공배수가 다르다. 법 $15$ 에 [원시근](primitive-roots.md)이 없는 것도 같은 이유다.

# 정의

$n\ge 1$ 에 대해 **Carmichael 함수** 는 다음 값이다.

$$
\lambda(n)=\min\lbrace m\ge 1 : \gcd(a,n)=1\text{ 인 모든 }a\text{ 에 대해 }a^m\equiv 1\pmod n\rbrace
$$

군으로 쓰면 곱셈군 $(\mathbb Z/n)^{\times}$ 의 지수(exponent), 곧 모든 원소의 위수의 최소공배수다. Carmichael 이 1910 년에 도입했다.[^1]

값은 다음 공식으로 계산된다. $p$ 는 홀수 소수다.

$$
\lambda(2)=1,\quad\lambda(4)=2,\quad\lambda(2^k)=2^{k-2}\thinspace(k\ge 3),\quad\lambda(p^k)=p^{k-1}(p-1)
$$

$$
\lambda(p_1^{k_1}\cdots p_r^{k_r})=\mathrm{lcm}\big(\lambda(p_1^{k_1}),\dots,\lambda(p_r^{k_r})\big)
$$

# 성질

## 공식의 증명

곱 공식은 중국인의 나머지 정리에서 나온다. $(\mathbb Z/n)^{\times}$ 이 소수 거듭제곱 법의 곱셈군의 곱과 동형이고, 곱군의 원소가 $1$ 이 되는 지수는 성분마다의 지수의 공배수다.

소수 거듭제곱의 값은 원시근 문서의 Gauss 원시근 정리에서 나온다. 법 $p^k$ 와 법 $2$, $4$ 에는 원시근이 있으므로 $\lambda=\varphi$ 이다. 법 $2^k$, $k\ge 3$ 에서는 모든 홀수 $a$ 가 $a^{2^{k-2}}\equiv 1$ 을 만족하고 $5$ 의 위수가 정확히 $2^{k-2}$ 이므로 $\lambda(2^k)=2^{k-2}$ 이다.

## 위수 λ(n) 인 원소

$\lambda(n)$ 은 $\varphi(n)$ 을 나누고, $(\mathbb Z/n)^{\times}$ 에는 위수가 정확히 $\lambda(n)$ 인 원소가 있다.

증명의 요지. 가환군에서 위수가 $r$, $s$ 인 원소 $x$, $y$ 가 있고 $\gcd(r,s)=1$ 이면 $xy$ 의 위수는 $rs$ 다. $\lambda(n)$ 을 소인수분해해 각 소수 거듭제곱 $q^e$ 마다 위수가 $q^e$ 의 배수인 원소를 골라 알맞게 거듭제곱하고 곱하면 위수가 $\lambda(n)$ 인 원소가 나온다.

따라서 $\lambda(n)=\varphi(n)$ 인 것과 법 $n$ 에 원시근이 있는 것은 동치다.

## Korselt 판정과 Carmichael 수

합성수 $n$ 이 $\gcd(a,n)=1$ 인 모든 $a$ 에 대해 $a^{n-1}\equiv 1$ 을 만족하면 $n$ 을 Carmichael 수(Carmichael number)라 한다. 정의에서 바로 다음이 나온다.

$$
n\text{ 이 Carmichael 수}\iff n\text{ 이 합성수이고 }\lambda(n)\mid n-1
$$

$561=3\cdot 11\cdot 17$ 이면 $\lambda(561)=\mathrm{lcm}(2,10,16)=80$ 이고 $560=7\cdot 80$ 이므로 $561$ 은 Carmichael 수다. 곱 공식을 대입하면 [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)의 Korselt 판정(Korselt's criterion)이 나온다. $p^2\mid n$ 이면 $p\mid\lambda(n)$ 이지만 $p\nmid n-1$ 이므로 $n$ 은 제곱 인수가 없어야 하고, 남는 조건은 모든 소인수 $p$ 에 대해 $p-1\mid n-1$ 이다.

# 활용

- [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)에서 공개 지수 $e$ 의 역원을 법 $\lambda(pq)=\mathrm{lcm}(p-1,q-1)$ 로 잡아도 복호가 성립한다. 모든 평문 $m$ 에 대해 $m^{ed}\equiv m$ 이 필요한 것은 $ed\equiv 1\pmod{\lambda(n)}$ 이고, 법 $\varphi(n)$ 으로 잡은 것보다 작은 비밀 지수가 나온다.
- Carmichael 수는 $n$ 과 서로소인 모든 밑에서 Fermat 판정을 통과한다. [Miller–Rabin 판정](miller-rabin-test.md)은 $1$ 의 제곱근이 $\pm 1$ 뿐이라는 조건을 더해 이런 수도 합성수로 잡는다.

[^1]: R. D. Carmichael, "Note on a new number theory function", *Bulletin of the American Mathematical Society* **16** (1910), 232–238.

# 연관 문서

## 선수지식

- [원시근](primitive-roots.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #cryptography
