# Miller–Rabin 판정

# 개요

**Miller–Rabin 판정(Miller–Rabin test)** 은 홀수 $n$ 과 밑 $a$ 에 대해 $n-1=2^sq$ ($q$ 는 홀수)로 쓰고 $a^q,a^{2q},\dots,a^{2^sq}$ 를 법 $n$ 에서 계산해, $1$ 의 제곱근이 $\pm 1$ 이 아닌 것이 나오거나 $a^{n-1}\not\equiv 1$ 이면 $n$ 을 합성수로 판정하는 소수 판정법이다. $n$ 이 합성수이면 밑의 $3/4$ 이상이 합성수임을 드러내므로, 무작위 밑으로 $k$ 번 되풀이하면 오류 확률이 $4^{-k}$ 이하다.

G. L. Miller 가 1976 년에 일반화된 Riemann 가설 아래 결정론적 판정으로 제안했고, M. O. Rabin 이 1980 년에 무작위 밑을 쓰는 확률적 판정으로 바꿨다[^1][^2]. 판정의 근거는 [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)의 $a^{p-1}\equiv 1\pmod p$ 다.

# 직관

$n$ 이 소수이면 $1\le a\lt n$ 에 대해 $a^{n-1}\equiv 1\pmod n$ 이다. 그래서 $a^{n-1}\not\equiv 1$ 이면 $n$ 은 합성수다. 그런데 $n=561=3\cdot 11\cdot 17$ 은 $n$ 과 서로소인 모든 $a$ 에 대해 $a^{560}\equiv 1$ 이라 이 판정을 통과한다.

$560=2^4\cdot 35$ 이므로 $2^{560}$ 을 $2^{35}$ 에서 시작해 네 번 제곱해 구할 수 있다. 법 $561$ 에서 차례로 $263,166,67,1,1$ 이 나온다. $67^2\equiv 1$ 인데 $67\not\equiv\pm 1$ 이다. $n$ 이 소수이면 $x^2\equiv 1$ 의 해는 $x\equiv\pm 1$ 뿐이므로, $561$ 은 합성수다.

$67^2-1=(67-1)(67+1)$ 이 $561$ 의 배수이므로 $\gcd(66,561)=33$ 이 $561$ 의 진약수다. 판정이 합성수라고 답할 때 약수까지 주는 경우가 있다.

# 정의

## 강한 거짓 증인

홀수 $n\gt 2$ 에 대해 $n-1=2^sq$, $q$ 홀수로 쓴다. $\gcd(a,n)=1$ 인 $a$ 가 다음 가운데 하나를 만족하면 $n$ 이 밑 $a$ 에 대한 **강한 개연적 소수(strong probable prime)** 라 한다.

$$
a^q\equiv 1\pmod n\qquad\text{또는}\qquad a^{2^iq}\equiv -1\pmod n\ \ (0\le i\lt s)
$$

$n$ 이 합성수이면서 밑 $a$ 에 대한 강한 개연적 소수이면 $a$ 를 **강한 거짓 증인(strong liar)**, 둘 다 아니면 $a$ 를 $n$ 이 합성수라는 **증인(witness)** 이라 한다.

## 판정

1. $n-1=2^sq$ 로 쓰고 $1\lt a\lt n-1$ 인 $a$ 를 균등하게 고른다.
2. $x=a^q\bmod n$ 을 빠른 거듭제곱으로 계산한다. $x=\pm 1$ 이면 "소수일 수 있다" 로 끝낸다.
3. $x$ 를 많아야 $s-1$ 번 제곱하며, $-1$ 이 나오면 "소수일 수 있다" 로 끝낸다.
4. 끝까지 $-1$ 이 나오지 않으면 "합성수" 다.

```typescript
function modPow(a: bigint, e: bigint, n: bigint): bigint {
  let r = 1n;
  a %= n;
  while (e > 0n) {
    if (e & 1n) r = (r * a) % n;
    a = (a * a) % n;
    e >>= 1n;
  }
  return r;
}

function isStrongProbablePrime(n: bigint, a: bigint): boolean {
  let q = n - 1n;
  let s = 0;
  while (q % 2n === 0n) {
    q /= 2n;
    s++;
  }
  let x = modPow(a, q, n);
  if (x === 1n || x === n - 1n) return true;
  for (let i = 1; i < s; i++) {
    x = (x * x) % n;
    if (x === n - 1n) return true;
  }
  return false;
}
```

# 성질

## 소수의 통과

정리. $n$ 이 홀수 소수이면 $n$ 과 서로소인 모든 $a$ 에 대해 $n$ 은 밑 $a$ 에 대한 강한 개연적 소수다.

증명의 요지. $a^{2^sq}=a^{n-1}\equiv 1$ 이다. 수열 $a^q,a^{2q},\dots,a^{2^sq}$ 에서 각 항은 앞 항의 제곱이다. $\mathbb Z/n\mathbb Z$ 가 체이므로 $x^2=1$ 의 해는 $\pm 1$ 뿐이다. 그래서 처음 나오는 $1$ 의 바로 앞 항은 $-1$ 이고, 첫 항이 $1$ 이면 앞 항이 없다.

## 거짓 증인의 비율

정리. 홀수 합성수 $n\gt 9$ 에 대해 강한 거짓 증인은 $1\le a\lt n$ 가운데 $\varphi(n)/4$ 개 이하다. 이것을 **Monier–Rabin 정리(Monier–Rabin theorem)** 라 한다[^2][^3].

증명의 요지. 거짓 증인이 하나라도 있으면 $(-1)^q=-1$ 이므로 $a^{2^tq}\equiv -1$ 인 $a$ 가 있는 가장 큰 $t$ 가 있다. 모든 거짓 증인은 부분군 $J=\lbrace a: a^{2^tq}\equiv\pm 1\pmod n\rbrace$ 에 속한다. $n$ 의 서로 다른 소인수가 둘 이상이면 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 한 소인수의 법에서는 $-1$, 다른 소인수의 법에서는 $1$ 이 되는 원소를 만들 수 있어 $J$ 가 진부분군이다. 소인수의 수와 각 소인수 법에서의 위수를 세면 지수가 $4$ 이상이 된다. $n=p^e$ 이면 $a^{n-1}\equiv 1$ 인 $a$ 의 수가 $\gcd(n-1,\varphi(n))=p-1$ 이므로 비율이 $1/p^{e-1}$ 이고, $n=9$ 를 빼면 $1/4$ 이하다.

Carmichael 수 $561$ 은 Fermat 판정을 모든 서로소인 밑에서 통과하지만, 이 정리로 밑의 $3/4$ 이상이 증인이다. 강한 개연적 소수 조건은 Euler 판정(Euler's criterion)의 조건을 함의하므로, Miller–Rabin 판정은 [이차 상호법칙](quadratic-reciprocity.md)의 Solovay–Strassen 판정(Solovay–Strassen test)보다 오류율이 작다.

## 결정론적 판정

정리. 일반화된 [Riemann 가설](riemann-hypothesis.md)이 성립하면 홀수 합성수 $n$ 은 $2(\ln n)^2$ 이하의 증인을 갖는다[^4].

그러므로 일반화된 Riemann 가설 아래에서는 $a\le 2(\ln n)^2$ 인 밑을 모두 시험하는 것이 결정론적 다항시간 판정이다. 고정된 범위에서는 계산으로 확인한 밑의 집합이 있다. 처음 열두 개 소수 $2,3,5,\dots,37$ 을 밑으로 쓰면 $3.18\times 10^{23}$ 미만, 따라서 $2^{64}$ 미만의 모든 $n$ 이 정확히 판정된다[^5].

## 실행 시간

한 번의 판정은 법 $n$ 의 곱셈 $O(\log n)$ 번이다. 학교 곱셈으로 곱하면 $O(\log^3 n)$ 비트 연산이고, 밑 $k$ 개를 쓰면 $O(k\log^3 n)$ 이다. 결정론적 다항시간 판정인 [AKS 소수 판정법](aks-primality-test.md)(Agrawal–Kayal–Saxena)보다 지수가 작다.

# 활용

- 소수 생성. [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 키 생성은 무작위 홀수를 뽑아 작은 소수로 나눠 본 뒤 Miller–Rabin 판정을 여러 밑으로 통과하는 수를 쓴다. 수가 클수록 무작위 합성수가 한 밑에서 통과할 확률은 $4^{-1}$ 보다 훨씬 작다[^3].
- 인수분해. 직관 절처럼 $x^2\equiv 1$ 이고 $x\not\equiv\pm 1$ 인 $x$ 가 나오면 $\gcd(x-1,n)$ 이 진약수다. $\varphi(n)$ 이나 RSA 의 복호 지수를 아는 사람은 이 방법으로 $n$ 을 인수분해한다.
- 무작위 알고리즘의 예. 합성수 판정이 다항시간 무작위 알고리즘으로 풀린다는 것, 곧 합성수 문제가 [무작위 복잡도 부류](randomized-complexity-classes.md) RP(randomized polynomial time) 에 속한다는 것이 이 판정에서 나온다.
- 소수 증명의 앞 단계. 통과한 수가 소수라는 증명서가 필요하면 [타원곡선 소수 증명](elliptic-curve-primality-proving.md)을 돌린다. Miller–Rabin 으로 합성수를 먼저 걸러 두면 증명 단계의 곡선 탐색이 소수에서만 일어난다.

[^1]: G. L. Miller, "Riemann's hypothesis and tests for primality", Journal of Computer and System Sciences 13 (3) (1976), 300–317.
[^2]: M. O. Rabin, "Probabilistic algorithm for testing primality", Journal of Number Theory 12 (1) (1980), 128–138.
[^3]: R. Crandall, C. Pomerance, *Prime Numbers: A Computational Perspective*, 2nd ed., Springer, 2005, §3.5.
[^4]: E. Bach, "Explicit bounds for primality testing and related problems", Mathematics of Computation 55 (191) (1990), 355–380.
[^5]: J. Sorenson, J. Webster, "Strong pseudoprimes to twelve prime bases", Mathematics of Computation 86 (304) (2017), 985–1003.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)
- [중국인의 나머지 정리](chinese-remainder-theorem.md)

## 더 알아보기

- [타원곡선 소수 증명](elliptic-curve-primality-proving.md)

#number_theory #algorithms #cryptography #probability
