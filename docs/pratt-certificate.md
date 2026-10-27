# Pratt 증명서

# 개요

**Pratt 증명서(Pratt certificate)** 는 어떤 수가 소수라는 사실을 짧게 적어 남이 빨리 확인할 수 있게 한 증거다. 수가 합성수라는 것은 약수 하나를 보여 주면 곱셈 한 번으로 확인된다. 소수라는 것을 보이려고 $\sqrt n$ 이하의 모든 수로 나눠 보이면 증거가 수의 크기만큼 길어진다. Pratt 증명서는 법 $n$ 에서 거듭제곱하면 $1$ 부터 $n-1$ 까지의 나머지가 모두 나오는 수 $a$ 와 $n-1$ 의 소인수분해, 그 소인수들의 증명서를 적어, 자릿수의 제곱 정도 길이로 $n$ 이 소수임을 증명한다.

# 직관

Pratt 증명서는 소수 $p$ 에 대해 $\mathbb Z/p\mathbb Z$ 의 곱셈군의 생성원 $a$ 와 $p-1$ 의 소인수분해, 그리고 그 소인수들 각각의 Pratt 증명서를 재귀적으로 모은 것이다. 길이가 $O((\log p)^2)$ 비트이고 다항식 시간에 검증되므로, 소수 판정 문제가 NP(nondeterministic polynomial time)에 속한다.[^1]

합성수는 약수 하나가 짧은 증거이므로 소수 판정은 처음부터 coNP(complement of NP)에 속한다. V. Pratt 는 1975 년 이 증명서로 소수 판정이 $\mathrm{NP}\cap\mathrm{coNP}$ 에 든다는 것을 보였다. [P 대 NP 문제](p-np.md)의 부류로 소수 판정의 위치를 정한 첫 결과다.

$47$ 이 소수라는 것을 남에게 짧게 보여 주려 한다. 약수가 없다는 것을 보이려면 $\sqrt{47}$ 이하의 수로 다 나누어 보아야 하고, 수가 커지면 나누어 볼 수가 지수적으로 늘어난다.

소수 $p$ 에서는 곱셈군 $(\mathbb Z/p\mathbb Z)^\times$ 가 크기 $p-1$ 의 순환군이다. 그러므로 위수가 $46$ 인 원소를 내놓으면 된다. $5$ 를 내놓고 $5^{46}\equiv 1$ 과 함께 $46=2\cdot 23$ 의 두 소인수에서 $5^{46/2}\equiv 46$, $5^{46/23}=25$ 가 $1$ 이 아님을 보이면 $5$ 의 위수는 $46$ 이다. 위수가 $46$ 인 원소가 있으면 $\mathbb Z/47\mathbb Z$ 의 $0$ 이 아닌 원소 $46$ 개가 모두 가역이므로 $47$ 은 소수다.

이 논증은 $23$ 이 소수라는 것을 썼다. $23$ 에 같은 일을 하면 $22=2\cdot 11$ 과 원소 $5$ 가, $11$ 에는 $10=2\cdot 5$ 와 원소 $2$ 가, $5$ 에는 $4=2^2$ 과 원소 $2$ 가 필요하다. 소수 $47,23,11,5,2$ 의 나무가 증명서다.

# 정의

## Lucas 판정

**정리 (Lucas).** 정수 $n\ge 3$ 이 소수인 것은 다음을 만족하는 $a$ 가 있는 것과 동치다.

$$
a^{n-1}\equiv 1\pmod n,\qquad a^{(n-1)/q}\not\equiv 1\pmod n\quad(q\mid n-1\text{ 인 모든 소수 }q)
$$

증명의 요지. 조건은 법 $n$ 에서 $a$ 의 위수가 $n-1$ 이라는 뜻이다. 위수는 Euler 함수(Euler's totient function) $\varphi(n)$ 을 나누고 $\varphi(n)\le n-1$ 이며 등호는 $n$ 이 소수일 때뿐이므로 $n$ 은 소수다. 역으로 $n$ 이 소수이면 [유한체](finite-fields.md) $\mathbb F_n$ 의 곱셈군이 순환군이므로 생성원 $a$ 가 조건을 만족한다.

## 증명서

소수 $p$ 의 **Pratt 증명서** $\mathcal C(p)$ 는 다음과 같이 재귀적으로 정한다.

- $\mathcal C(2)$ 는 빈 증명서다.
- $p\ge 3$ 이면 $\mathcal C(p)$ 는 원소 $a$, $p-1$ 의 소인수분해 $p-1=\prod_i q_i^{e_i}$, 각 $q_i$ 의 증명서 $\mathcal C(q_i)$ 의 묶음이다.

검증은 $\prod_i q_i^{e_i}=p-1$ 을 확인하고, Lucas 판정의 거듭제곱을 계산하고, 각 $\mathcal C(q_i)$ 를 재귀적으로 검증한다.

```javascript
// cert = { p, a, factors: [{ q, e, cert }] }. powMod 는 반복 제곱으로 계산한다.
function verifyPratt(cert) {
  const { p, a, factors } = cert;
  if (p === 2n) return true;
  if (factors.reduce((acc, { q, e }) => acc * q ** e, 1n) !== p - 1n) return false;
  if (powMod(a, p - 1n, p) !== 1n) return false;
  for (const { q, cert: sub } of factors) {
    if (powMod(a, (p - 1n) / q, p) === 1n) return false;
    if (sub.p !== q || !verifyPratt(sub)) return false;
  }
  return true;
}
```

# 성질

## 증명서의 크기

**명제.** $p\ge 3$ 의 증명서 나무에 나오는 소수의 개수 $N(p)$ 는 $2\log_2 p-1$ 이하다.

증명의 요지. $N(2)=1$ 이다. $p\ge 3$ 이면 $p-1$ 은 짝수이므로 자식은 $2$ 와 홀수 소수 $q_1,\dots,q_r$ 이고 $2\prod q_i\le p-1$ 이다. 귀납 가정으로

$$
N(p)\le 1+1+\sum_{i=1}^{r}(2\log_2 q_i-1)\le 2+2\log_2\frac{p-1}{2}-r\le 2\log_2 p-r
$$

이다. $r\ge 1$ 이면 결론이 나오고, $r=0$ 이면 $N(p)=2\le 2\log_2 3-1$ 이다.

나무의 마디마다 $\log_2 p$ 비트 이하의 수가 $O(\log p)$ 개 있으므로 증명서는 $O((\log p)^2)$ 비트이고, 검증은 마디마다 반복 제곱 $O(\log p)$ 번씩이라 $\log p$ 의 다항식 시간이다.

## 소수 판정의 복잡도

| 결과 | 부류 | 방법 |
| --- | --- | --- |
| Pratt (1975) | $\mathrm{NP}\cap\mathrm{coNP}$ | 원시근과 $p-1$ 의 인수분해 |
| Solovay–Strassen, Rabin (1977–1980) | $\mathrm{coRP}$ | 무작위 밑의 판정 |
| Adleman–Huang (1992) | $\mathrm{ZPP}$ | 초타원곡선 위의 소수 증명 |
| Agrawal–Kayal–Saxena (2002) | $\mathrm{P}$ | 다항식 합동 |

[Miller–Rabin 판정](miller-rabin-test.md)이 합성수 판정을 무작위 다항식 시간 부류 RP(randomized polynomial time)에 넣고, [AKS 소수 판정법](aks-primality-test.md)(Agrawal–Kayal–Saxena)이 결정론적 다항식 시간 부류 P 에 넣었다.

## 증명서 작성과 인수분해

증명서를 만들려면 $p-1$ 을 완전히 인수분해해야 한다. 증명서가 존재한다는 것은 NP 에 속한다는 데에 충분하지만, 큰 $p$ 에서 증명서를 실제로 만드는 데는 인수분해가 걸림돌이다. $p-1$ 의 인수 가운데 $\sqrt p$ 보다 큰 부분만 인수분해해도 되는 [Pocklington 판정](pocklington-criterion.md)(Pocklington's criterion)이 이 요구를 줄이고, [타원곡선 소수 증명](elliptic-curve-primality-proving.md)은 $p-1$ 대신 곡선의 점 개수를 써서 인수분해를 피한다.

# 활용

- **복잡도 부류의 예.** $\mathrm{NP}\cap\mathrm{coNP}$ 에 속하지만 P 에 속하는지 오랫동안 알려지지 않은 문제의 대표였고, 2002 년 AKS 판정으로 P 에 든다는 것이 증명되었다.
- **소수 생성과 증명.** 소수 $q$ 에서 시작해 $n=2kq+1$ 꼴의 수를 시험하면 $n-1$ 의 큰 소인수 $q$ 를 아는 채로 Pocklington 판정을 쓸 수 있다. 이것을 되풀이해 증명서와 함께 큰 소수를 만드는 방법이 Maurer 의 소수 생성 알고리즘이다.[^2]

[^1]: V. R. Pratt, "Every prime has a succinct certificate", *SIAM Journal on Computing* 4 (1975), 214–220.
[^2]: U. M. Maurer, "Fast generation of prime numbers and secure public-key cryptographic parameters", *Journal of Cryptology* 8 (1995), 123–155.

# 연관 문서

## 선수지식

- [유한체](finite-fields.md)
- [P 대 NP 문제](p-np.md)

## 더 알아보기

- [Pocklington 판정](pocklington-criterion.md)

#complexity #number_theory #algorithms
