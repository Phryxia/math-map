# 타원곡선 소수 증명

# 개요

**타원곡선 소수 증명(elliptic curve primality proving, ECPP)** 은 법 $n$ 의 [타원곡선](elliptic-curves.md) 위에서 위수가 큰 소수로 나누어지는 점을 찾아, 정수 $n$ 이 소수라는 증명서를 만드는 알고리즘이다. 증명서는 $n$ 보다 작은 소수 $q$ 의 소수성으로 $n$ 의 소수성을 보이는 단계의 사슬이고, 누구나 다항식 시간에 검증한다.

[Miller–Rabin 판정](miller-rabin-test.md)은 합성수를 높은 확률로 걸러내지만 통과한 수가 소수라는 증명은 주지 않는다. ECPP 는 그 증명을 준다. 실행 시간은 발견적으로 $(\log n)^{4+o(1)}$ 이고, 수천 자리 이상의 소수를 증명하는 데 쓴다.

# 직관

$n=47$ 이 소수임을 보인다. $n-1=46=2\cdot 23$ 이다. $a=5$ 에서 $5^{46}\equiv 1\pmod{47}$ 이고 $5^{46/23}-1=24$ 는 $47$ 과 서로소다. $47$ 의 소인수 $p$ 가 있으면 법 $p$ 에서 $5$ 의 위수는 $46$ 을 나누고 $2$ 를 나누지 않으므로 $23$ 의 배수다. 위수는 $p-1$ 을 나누므로 $p\ge 24$ 이고, $p\gt\sqrt{47}$ 인 소인수는 $47$ 자신뿐이다. 그러므로 $23$ 이 소수이면 $47$ 이 소수다.

이 논증이 [Pocklington 판정](pocklington-criterion.md)이고, $n-1$ 에서 $\sqrt n$ 보다 큰 소인수 $q$ 를 찾아야 쓸 수 있다. $n-1$ 이 큰 합성수 인수를 가지면 그것을 인수분해해야 하고, 인수분해는 어렵다. 군 $(\mathbb Z/p\mathbb Z)^\times$ 의 크기가 $p-1$ 하나로 고정되어 있어서 $a$ 를 바꾸어도 소용이 없다.

막힌 이유가 군의 크기가 하나뿐이라는 것이므로, [타원곡선 인수분해](elliptic-curve-factorization.md)와 같이 크기가 여럿인 군으로 바꾼다. 곡선 $E$ 를 바꾸면 점 개수 $m$ 이 달라지므로, $m=kq$ 에서 $k$ 가 작고 $q$ 가 소수로 보이는 곡선을 만날 때까지 곡선을 바꾼다. 같은 논증이 $q$ 의 소수성에서 $n$ 의 소수성을 준다. 인수분해에서는 점 개수가 작은 소수들로 이루어지기를 바라고, 소수 증명에서는 점 개수가 큰 소수 하나를 갖기를 바란다.

# 정의

## Goldwasser–Kilian 판정

$n$ 은 $6$ 과 서로소인 정수이고 $E:y^2=x^3+ax+b$ 는 $\gcd(4a^3+27b^2,n)=1$ 인 법 $n$ 의 곡선이다. 덧셈은 타원곡선 인수분해와 같이 법 $n$ 에서 공식을 그대로 쓴다.

**정리 (Goldwasser–Kilian).** 정수 $m$ 과 소수 $q$ 가 $q\mid m$ 이고 $q\gt(n^{1/4}+1)^2$ 을 만족한다. $E$ 위의 점 $P$ 에 대해 $(m/q)P$ 를 계산하는 동안 분모의 역원이 모두 존재하여 결과가 무한원점이 아닌 점이고, $mP$ 가 무한원점이면 $n$ 은 소수다.[^1]

증명의 요지. $n$ 이 합성수이면 $p\le\sqrt n$ 인 소인수 $p$ 가 있다. 법 $n$ 의 계산이 실패하지 않았으므로 법 $p$ 로 줄여도 같은 계산이 성립하고, $E(\mathbb F_p)$ 에서 $(m/q)P\ne O$, $mP=O$ 다. 그러므로 법 $p$ 에서 $P$ 의 위수는 $q$ 의 배수이고, 타원곡선의 Hasse 정리(Hasse's theorem)로

$$
q\le\char35{}E(\mathbb F_p)\le p+1+2\sqrt p=(\sqrt p+1)^2\le(n^{1/4}+1)^2
$$

이다. 가정과 어긋나므로 $n$ 은 소수다.

## 증명서

$n=n_0$ 의 **증명서(certificate)** 는 $i=0,1,\dots,s-1$ 마다 곡선 $E_i$, 점 $P_i$, 정수 $m_i$ 와 다음 수 $n_{i+1}=q_i$ 를 모은 사슬이다. 각 단계는 위 정리의 조건을 만족하고, 마지막 $n_s$ 는 시험 나눗셈으로 소수임을 확인할 만큼 작다.

```javascript
// 증명서 검증. 각 단계에서 (m/q)P 가 무한원점이 아닌 점이고 mP 가 무한원점인지 본다.
// ecMul 은 법 n 의 스칼라 곱이며, 분모의 역원이 없으면 { factor } 를 돌려준다.
function verifyCertificate(n, steps, smallPrimeBound) {
  for (const { a, b, P, m, q } of steps) {
    if (gcd(n, 6n) !== 1n || gcd(4n * a ** 3n + 27n * b * b, n) !== 1n) return false;
    if (m % q !== 0n || q <= (iroot(n, 4n) + 2n) ** 2n) return false;
    const R = ecMul(m / q, P, a, n);
    if (R === null || R.factor) return false;
    if (ecMul(q, R, a, n) !== null) return false;
    n = q;
  }
  return n < smallPrimeBound && isPrimeByTrialDivision(n);
}
```

`iroot` 는 내림이므로 $\lfloor n^{1/4}\rfloor+2\gt n^{1/4}+1$ 이고, 코드의 비교는 정리의 조건보다 강하다.

# 성질

## 증명서의 길이와 검증 시간

Hasse 정리로 $m\le n+1+2\sqrt n$ 이다. $m=kq$ 에서 $k\ge 2$ 이면 $q$ 는 대략 $n/2$ 이하이므로 단계마다 $n$ 의 비트 수가 적어도 $1$ 씩 준다. 실제로는 $k$ 를 작은 수들의 곱으로 허용해 단계마다 여러 비트가 준다. 단계 수는 $O(\log n)$ 이다.

각 단계의 검증은 스칼라 곱 두 번이고, 스칼라 곱은 법 $n$ 의 곱셈 $O(\log n)$ 번이다. 법 $n$ 의 곱셈을 $O((\log n)^2)$ 으로 하면 증명서 전체의 검증은 $O((\log n)^4)$ 이다.

## 곡선을 고르는 두 방법

곡선을 찾는 쪽에는 점 개수 $m$ 을 알아야 한다.

- Goldwasser–Kilian 은 곡선을 무작위로 뽑고 Schoof 알고리즘(Schoof's algorithm)으로 점 개수를 센다. 점 개수가 $2q$ 꼴인 곡선이 충분히 자주 나온다는 소수 분포의 가정 아래 기대 다항식 시간이다. 그 가정 없이도 거의 모든 소수에서 기대 다항식 시간임이 증명되어 있다.[^1]
- Atkin–Morain 은 [복소 곱셈](complex-multiplication.md)으로 점 개수를 먼저 정하고 곡선을 만든다. $4n=t^2+\vert D\vert s^2$ 을 만족하는 작은 판별식 $D\lt 0$ 를 찾으면 $\mathbb Q(\sqrt D)$ 에 의한 복소 곱셈을 갖는 곡선의 점 개수가 $n+1\pm t$ 이다. 곡선은 Hilbert 류 다항식 $H_D$ 의 법 $n$ 의 근을 $j$ 불변량으로 하여 만든다. 점을 세는 비용이 없어 실제로 쓰는 ECPP 는 이 방법이다. 발견적 시간은 $(\log n)^{5+o(1)}$ 이고, 판별식 탐색을 개선한 fastECPP 는 $(\log n)^{4+o(1)}$ 이다.[^2]

## 다른 소수 증명과의 비교

[AKS 소수 판정법](aks-primality-test.md)(Agrawal–Kayal–Saxena)은 가정 없이 결정론적 다항식 시간이지만 실행 시간이 $(\log n)^{6+o(1)}$ 이고 증명서를 남기지 않는다. ECPP 는 실행 시간이 발견적 추정이지만 더 빠르고, 한 번 만든 증명서를 다른 사람이 짧은 시간에 검증한다.

# 활용

- **큰 소수의 증명.** Mersenne 수처럼 특별한 꼴이 아닌 수에서 수만 자리의 소수를 증명한 기록은 ECPP 로 얻었다. 특별한 꼴의 수에는 [Lucas–Lehmer 판정](lucas-lehmer-test.md)처럼 $n\pm 1$ 의 인수분해를 쓰는 판정이 더 빠르다.
- **증명서의 공개.** 증명서가 짧고 검증이 빠르므로, 큰 소수의 기록을 발표할 때 증명서를 함께 공개해 다른 사람이 검증하게 한다.

[^1]: S. Goldwasser, J. Kilian, "Primality testing using elliptic curves", *Journal of the ACM* 46 (1999), 450–472.
[^2]: A. O. L. Atkin, F. Morain, "Elliptic curves and primality proving", *Mathematics of Computation* 61 (1993), 29–68. F. Morain, "Implementing the asymptotically fast version of the elliptic curve primality proving algorithm", *Mathematics of Computation* 76 (2007), 493–505.

# 연관 문서

## 선수지식

- [타원곡선 인수분해](elliptic-curve-factorization.md)
- [Miller–Rabin 판정](miller-rabin-test.md)
- [Pocklington 판정](pocklington-criterion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography
