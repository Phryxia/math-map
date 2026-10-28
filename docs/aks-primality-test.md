# AKS 소수 판정법

# 개요

**AKS 소수 판정법(Agrawal–Kayal–Saxena primality test)** 은 정수가 소수인지를 무작위성 없이 자릿수의 다항식 시간 안에 판정하는 알고리즘이다. $(X+1)^6$ 을 전개한 계수 $1,6,15,20,15,6,1$ 에서 $15$ 와 $20$ 은 $6$ 의 배수가 아니어서 $(X+1)^6\not\equiv X^6+1\pmod 6$ 이고, 소수 $5$ 에서는 $(X+1)^5$ 의 가운데 계수 $5,10,10,5$ 가 모두 $5$ 의 배수다. AKS 판정법은 이 다항식 등식을 작은 차수의 다항식으로 나눈 나머지에서 몇 개의 상수에 대해서만 확인해 시간을 줄이고, 그것으로 충분함을 [유한체](finite-fields.md)의 원소 개수를 세어 증명한다.

# 직관

AKS 소수 판정법은 정수 $n$ 이 소수인지를 $\log n$ 의 다항식 시간 안에 결정론적으로 판정하는 알고리즘이다. 2002 년에 Agrawal, Kayal, Saxena 가 발표했고, 소수 판정 문제가 복잡도 종류(complexity class) $\mathrm P$ 에 속함을 처음 증명했다.[^1]

판정의 바탕은 $(X+a)^n\equiv X^n+a\pmod n$ 이 $n$ 이 소수일 때만 성립한다는 다항식 항등식이다. 이 항등식을 $X^r-1$ 로도 나눈 나머지에서 몇 개의 $a$ 에 대해서만 확인하고, 그것으로 충분하다는 것을 유한체 안의 원소 개수를 위아래로 세어 증명한다.

[Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)의 Fermat 판정은 $a^{n-1}\equiv1\pmod n$ 을 확인한다. $561=3\cdot11\cdot17$ 은 합성수인데 $561$ 과 서로소인 모든 $a$ 에서 $a^{560}\equiv1\pmod{561}$ 이다. 수 하나의 거듭제곱으로는 $561$ 을 합성수로 가를 수 없다.

수 대신 다항식을 거듭제곱한다. 이항정리로

$$
(X+1)^{n}=\sum_{i=0}^{n}\binom ni X^i
$$

이고 $n$ 이 소수이면 $0\lt i\lt n$ 인 $\binom ni$ 가 모두 $n$ 의 배수라서 $(X+1)^n\equiv X^n+1\pmod n$ 이다. $n=561$ 에서 $X^3$ 의 계수는 $\binom{561}{3}=29269240$ 이고 $3$ 으로 나누어지지 않는다. 그러므로 $(X+1)^{561}\not\equiv X^{561}+1\pmod{561}$ 이고 $561$ 이 합성수로 판정된다.

이 판정은 계수 $n+1$ 개를 다 계산해야 하므로 $n$ 의 자릿수에 대해 지수 시간이다. 계수를 줄이려고 $X^r-1$ 로 나눈 나머지만 비교하면 계수가 $r$ 개로 줄지만, 합성수가 통과할 수 있다. AKS 는 $r$ 을 $\log n$ 의 다항식 크기로 고르고 $a$ 를 여러 개 시험하면 통과하는 합성수가 소수의 거듭제곱뿐임을 보였다.

# 정의

## 다항식 판정의 바탕

**보조정리.** $n\ge2$ 이고 $\gcd(a,n)=1$ 이면, $n$ 이 소수인 것과 $\mathbb Z\lbrack X\rbrack$ 에서

$$
(X+a)^n\equiv X^n+a\pmod n
$$

인 것이 동치다.

증명의 요지. $X^i$ 의 계수는 $\binom ni a^{n-i}$ 다. $n$ 이 소수이면 $0\lt i\lt n$ 에서 $\binom ni\equiv0$ 이고 Fermat 소정리로 $a^n\equiv a$ 다. $n$ 이 합성수이고 $q$ 가 $n$ 의 소인수이며 $q^k$ 가 $n$ 을 정확히 나누면, $q^k$ 는 $\binom nq$ 를 나누지 않고 $a^{n-q}$ 와 서로소이므로 $X^q$ 의 계수가 $n$ 을 법으로 $0$ 이 아니다.

## 알고리즘

$\log$ 는 밑이 $2$ 인 로그이고, $\mathrm{ord}\_r(n)$ 은 $n^k\equiv1\pmod r$ 인 가장 작은 $k$ 다.

```javascript
function aks(n) {
  if (isPerfectPower(n)) return "COMPOSITE"; // n = a^b, b > 1
  const L = Math.log2(n);
  let r = 2;
  while (gcd(r, n) === 1 && multiplicativeOrder(n, r) <= L * L) r++;
  for (let a = 2; a <= Math.min(r, n - 1); a++)
    if (gcd(a, n) > 1) return "COMPOSITE";
  if (n <= r) return "PRIME";
  const ell = Math.floor(Math.sqrt(eulerPhi(r)) * L);
  for (let a = 1; a <= ell; a++) {
    // 계수를 n 으로, 차수를 X^r - 1 로 줄이며 반복제곱한다
    const lhs = polyPowMod([a, 1], n, r, n); // (X + a)^n
    const rhs = monomialPlusConst(n % r, a, r, n); // X^(n mod r) + a
    if (!polyEqual(lhs, rhs)) return "COMPOSITE";
  }
  return "PRIME";
}
```

둘째 줄의 반복은 $\gcd(r,n)\gt 1$ 인 $r$ 에서도 멈추고, 그런 $r$ 은 다음 반복이 합성수로 판정하거나 $n\le r$ 인 경우로 넘긴다.

# 성질

## 정확성

**정리(Agrawal–Kayal–Saxena).** 위 알고리즘이 PRIME 을 내놓는 것은 $n$ 이 소수인 것과 동치다.[^1]

$n$ 이 소수이면 보조정리로 모든 시험을 통과한다. 반대 방향의 증명의 요지는 다음과 같다. $n$ 이 시험을 통과하고 $p$ 가 $n$ 의 소인수라 한다.

1. 수 $m$ 이 다항식 $f$ 에 대해 $f(X)^m\equiv f(X^m)$ 을 $X^r-1$ 과 $p$ 를 법으로 만족하면 $m$ 을 $f$ 에 대해 내성적(introspective)이라 한다. $p$ 는 Frobenius 사상(Frobenius map) $f(X)^p\equiv f(X^p)$ 때문에 모든 $f$ 에 대해 내성적이고, $n$ 은 시험을 통과했으므로 각 $X+a$ 에 대해 내성적이다. 내성적인 수의 곱과 내성적인 다항식의 곱도 내성적이다.
2. $n^ip^j$ 꼴의 수를 $r$ 로 나눈 나머지들이 이루는 군 $G$ 의 크기를 $t$ 라 하면 $t\ge\mathrm{ord}\_r(n)\gt\log^2n$ 이다.
3. $h$ 를 [원분체](cyclotomic-fields.md)의 원분다항식 $\Phi_r$ 의 $\mathbb F_p$ 위 기약인수라 하고, $X+a$ 들의 곱이 $\mathbb F_p\lbrack X\rbrack/(h)$ 에서 이루는 군을 $\mathcal G$ 라 한다. 서로 다른 다항식이 같은 원소가 되지 않음을 세어 $\vert\mathcal G\vert\ge\binom{t+\ell}{t-1}$ 이 나오고, 이 값은 $\ell=\lfloor\sqrt{\varphi(r)}\log n\rfloor$ 에서 $n^{\sqrt t}$ 보다 크다.
4. $n$ 이 $p$ 의 거듭제곱이 아니면 $n^ip^j$ $(0\le i,j\le\lfloor\sqrt t\rfloor)$ 가운데 둘이 $r$ 을 법으로 같고, 그 둘의 차가 $\mathcal G$ 의 모든 원소를 근으로 갖는 다항식을 주어 $\vert\mathcal G\vert\le n^{\sqrt t}$ 가 나온다.

3 과 4 가 모순이므로 $n$ 은 $p$ 의 거듭제곱이고, 첫 줄이 $b\gt 1$ 인 거듭제곱을 걸렀으므로 $n=p$ 다.

## 법 r 의 크기

**보조정리.** $\mathrm{ord}\_r(n)\gt\log^2n$ 인 $r\le\max(3,\lceil\log^5n\rceil)$ 이 존재한다.[^1]

$r$ 이 $\log n$ 의 다항식이므로 다항식 하나의 계수가 $r$ 개, 각 계수가 $\log n$ 비트이고, 반복제곱이 곱셈 $\log n$ 번으로 끝난다.

## 시간 복잡도

원 논문의 실행 시간은 $\tilde O(\log^{21/2}n)$ 이다. Lenstra 와 Pomerance 는 $X^r-1$ 대신 Gauss 주기(Gaussian period)에서 만든 다항식을 법으로 써서 $\tilde O(\log^6n)$ 으로 줄였다.[^2] $\tilde O$ 는 $\log\log n$ 의 거듭제곱 인수를 무시한 표기다.

# 활용

- 복잡도 이론: 소수 판정이 $\mathrm P$ 에 속한다는 것이 이 정리다. 그 전에는 [Riemann 가설](riemann-hypothesis.md)의 일반화를 가정한 Miller 판정과 기댓값 다항시간의 확률적 판정만 있었다.
- 실무의 소수 생성: [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 키 생성은 [Miller–Rabin 판정](miller-rabin-test.md) 같은 확률적 판정을 쓴다. AKS 는 $\log^6n$ 의 인수 때문에 같은 크기에서 훨씬 느리다.
- 증명 기법: 다항식 항등식의 해를 유한체의 부분군 크기로 위아래에서 세는 논법은 [다항식환](polynomial-rings.md) 위의 항등식 판정에서 다시 쓰인다.

[^1]: M. Agrawal, N. Kayal, N. Saxena, *PRIMES is in P*, Ann. of Math. **160** (2004), 781–793. 보조정리와 알고리즘과 정확성 증명이 여기 있다.
[^2]: H. W. Lenstra Jr., C. Pomerance, *Primality testing with Gaussian periods*, J. Eur. Math. Soc. **21** (2019), 1229–1269.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)
- [원분체](cyclotomic-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #complexity #field_theory
