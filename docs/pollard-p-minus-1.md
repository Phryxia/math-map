# Pollard p − 1 방법

# 개요

**Pollard p − 1 방법(Pollard's p − 1 method)** 은 합성수 $n$ 의 소인수 $p$ 가운데 $p-1$ 이 작은 소수들의 곱인 것을 찾는 인수분해 알고리즘이다. $n=30227$ 을 작은 수부터 차례로 나누어 쪼개려면 소인수 $167$ 에 닿을 때까지 소수 $39$ 개로 나누어 보아야 하고, 자릿수가 늘면 나누어 볼 수가 지수적으로 늘어난다. 이 방법은 $2$ 를 작은 소수들의 곱만큼 거듭제곱한 값에서 $1$ 을 빼고 $n$ 과의 최대공약수를 계산해, 거듭제곱 한 번과 최대공약수 한 번으로 소인수 $181$ 을 찾는다.

# 직관

[Fermat 소정리](fermat-euler-theorem.md)에 따르면 소수 $p$ 와 $p$ 의 배수가 아닌 $a$ 에 대해 $a^{p-1}\equiv 1\pmod p$ 이다. 곧 $p$ 는 $a^{p-1}-1$ 을 나눈다. $p$ 를 모르므로 $p-1$ 도 모르지만, $p-1$ 이 나누는 수 $k$ 를 하나 잡으면 $a^k-1$ 도 $p$ 의 배수다. $n$ 도 $p$ 의 배수이므로 $\gcd(a^k-1,n)$ 은 $p$ 의 배수다.

$n=30227$ 에서 $k=2^3\cdot 3^2\cdot 5=360$ 으로 잡는다. 법 $n$ 으로 $2^{360}$ 을 계산하면 $6336$ 이고, [유클리드 알고리즘](euclidean-algorithm.md)으로 $\gcd(6335,30227)=181$ 을 얻는다. $181-1=180=2^2\cdot 3^2\cdot 5$ 가 $360$ 을 나누므로 $181$ 이 $2^{360}-1$ 을 나눈다.

다른 소인수 $167$ 에서는 $166=2\cdot 83$ 이고 $83$ 이 $360$ 을 나누지 않는다. 법 $167$ 에서 $2$ 의 위수는 $83$ 이어서 $2^{360}\equiv 157\pmod{167}$ 이고, $167$ 은 $2^{360}-1$ 을 나누지 않는다. 그래서 최대공약수가 $n$ 전체가 되지 않고 $181$ 하나만 나온다.

$167$ 을 이 방법으로 찾으려면 $k$ 가 $83$ 을 인수로 가져야 한다. $p-1$ 이 큰 소인수를 가지면 $k$ 를 그 소인수만큼 크게 잡아야 하고, 그 소인수가 수십 자리이면 계산이 끝나지 않는다.

# 정의

## 거듭제곱 매끄러운 수

양의 정수 $B$ 에 대해, 양의 정수 $m$ 을 나누는 소수 거듭제곱 $q^e$ 가 모두 $B$ 이하이면 $m$ 을 **$B$-거듭제곱 매끄러운 수(B-powersmooth number)** 라 한다. 소인수가 모두 $B$ 이하이면 **$B$-매끄러운 수(B-smooth number)** 라 한다.

직관 절의 $180=2^2\cdot 3^2\cdot 5$ 는 $9$-거듭제곱 매끄럽다. $166=2\cdot 83$ 은 $83$-매끄럽지만 $82$-매끄럽지 않다.

## Pollard p − 1 방법

합성수 $n$, 경계 $B$, 밑 $a$ ($2\le a\le n-2$) 를 받는다. 지수를 다음과 같이 정한다. $q$ 는 $B$ 이하의 소수를 돈다.

$$
k=\prod_{q\le B}q^{\lfloor\log B/\log q\rfloor}
$$

$x\equiv a^k\pmod n$ 을 반복 제곱으로 계산하고 $g=\gcd(x-1,n)$ 을 구한다. $1\lt g\lt n$ 이면 $g$ 를 인수로 내놓는다. $g=1$ 이면 $B$ 를 키워 다시 하고, $g=n$ 이면 아래 성질 절의 방법으로 $k$ 를 나누어 계산한다. 이 절차를 Pollard 가 1974 년에 제안했다[^1].

직관 절의 $n=30227$ 에서 $B=9$, $a=2$ 로 두면 $k=2^3\cdot 3^2\cdot 5\cdot 7=2520$ 이다. $2^{2520}\equiv 1630\pmod n$ 이고 $\gcd(1629,30227)=181$ 이다.

```javascript
// powMod(a, e, n) 은 반복 제곱으로 a^e mod n 을 계산한다.
// 소수 거듭제곱마다 최대공약수를 확인해 g = n 이 되기 전에 멈춘다.
function pollardPMinus1(n, B, a = 2n) {
  let x = a;
  for (const q of primesUpTo(B)) {
    let qe = q;
    while (qe * q <= B) qe *= q;
    x = powMod(x, qe, n);
    const g = gcd(x - 1n, n);
    if (g === n) return null; // 다른 a 로 다시 한다
    if (g !== 1n) return g;
  }
  return null; // B 를 키워 다시 한다
}
```

# 성질

## 성공 조건

위의 $k$ 는 $1,2,\dots,B$ 의 최소공배수이므로, $m$ 이 $B$-거듭제곱 매끄러운 것과 $m$ 이 $k$ 를 나누는 것은 동치다.

정리. $p$ 가 $n$ 의 소인수이고 $p\nmid a$ 이며 $p-1$ 이 $B$-거듭제곱 매끄러우면 $p$ 는 $\gcd(a^k-1,n)$ 을 나눈다.

증명의 요지. $p-1$ 이 $k$ 를 나누므로 Fermat 소정리에서 $a^k=(a^{p-1})^{k/(p-1)}\equiv 1\pmod p$ 이다.

$\gcd(a^k-1,n)=n$ 이 되는 것은 $n$ 의 모든 소인수 $p$ 에서 $a$ 의 법 $p$ 위수가 $k$ 를 나눌 때다. 이때는 위의 코드처럼 소수 거듭제곱을 하나 곱할 때마다 최대공약수를 계산하면 된다. $n=30227$, $a=2$ 에서 $2^{8}$, $2^{8\cdot 9}$ 까지는 최대공약수가 $1$ 이고 $2^{8\cdot 9\cdot 5}$ 에서 처음 $181$ 이 나온다.

## 비용

[소수 정리](prime-number-theorem.md)에서 $\log k$ 는 $B$ 와 같은 규모다. 그러므로 $a^k$ 를 계산하는 데 법 $n$ 의 곱셈이 $O(B)$ 번 든다. 성공 여부는 $p-1$ 이 $B$-거듭제곱 매끄러운지에 달려 있다. $u=\log p/\log B$ 로 두면 크기가 $p$ 인 무작위 정수가 $B$-매끄러울 확률은 $u^{-u}$ 규모다.

## 둘째 단계

$p-1$ 이 $B_1$-거듭제곱 매끄러운 수 $s$ 와 소수 $r$ ($B_1\lt r\le B_2$) 의 곱인 경우를 함께 잡는 것이 **둘째 단계(stage 2)** 다. $y\equiv a^k\pmod n$ 을 첫째 단계에서 얻은 뒤, $B_1$ 과 $B_2$ 사이의 소수 $r$ 마다 $y^r-1$ 을 법 $n$ 으로 곱해 모으고 마지막에 최대공약수를 한 번 계산한다. 연속한 소수의 차 $r_{i+1}-r_i$ 는 작은 짝수이므로 $y^{2},y^{4},\dots$ 를 미리 계산해 두면 $y^{r_{i+1}}=y^{r_i}\cdot y^{r_{i+1}-r_i}$ 로 소수 하나에 곱셈 한 번이 든다.

## 고정된 군의 크기

이 방법은 크기가 $p-1$ 인 곱셈군 $(\mathbb Z/p\mathbb Z)^\times$ 를 쓴다. $a$ 를 바꾸어도 군의 크기는 $p-1$ 그대로이므로, $p-1$ 이 큰 소인수를 가지면 어떤 $a$ 로도 성공하지 않는다.

[타원곡선 인수분해](elliptic-curve-factorization.md)는 이 군을 타원곡선의 점의 군 $E(\mathbb F_p)$ 로 바꾼다. 곡선마다 군의 크기가 달라지므로 곡선을 바꾸어 다시 시도할 수 있다. 크기가 $p+1$ 인 군을 쓰는 Williams p + 1 방법(Williams' p + 1 method)도 같은 꼴이다.

# 활용

- [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 키를 만들 때 소수 $p$ 의 $p-1$ 이 큰 소인수를 갖게 하면 이 방법이 통하지 않는다. 이런 조건을 단 소수를 강한 소수(strong prime)라 한다.
- 소수 $\ell$ 에 대해 $2^\ell-1$ 의 소인수 $q$ 에서는 법 $q$ 의 $2$ 의 위수가 $\ell$ 이므로 $q\equiv 1\pmod{2\ell}$ 이다. 그러므로 $k$ 에 $\ell$ 을 곱해 두면 $(q-1)/(2\ell)$ 만 매끄러우면 된다. GIMPS(Great Internet Mersenne Prime Search)는 [Lucas–Lehmer 판정](lucas-lehmer-test.md)을 돌리기 전에 이 방법으로 작은 인수를 찾아 후보를 거른다.
- 인수분해 프로그램은 타원곡선 인수분해에 앞서 이 방법을 한 번 돌린다. 한 걸음이 법 $n$ 의 곱셈 하나여서 타원곡선의 점 덧셈보다 싸다.

[^1]: J. M. Pollard, "Theorems on factorization and primality testing", *Proceedings of the Cambridge Philosophical Society* 76 (1974), 521–528.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)

## 더 알아보기

- [타원곡선 인수분해](elliptic-curve-factorization.md)

#number_theory #algorithms #cryptography
