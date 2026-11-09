# Lucas–Lehmer 판정

# 개요

**Lucas–Lehmer 판정(Lucas–Lehmer test)** 은 $2^p-1$ 꼴의 수가 소수인지를 수열 하나로 판정하는 방법이다. $2^5-1=31$ 에서 $4$ 로 시작해 제곱하고 $2$ 를 빼는 일을 $31$ 로 나눈 나머지로 되풀이하면 $4,14,8,0$ 이 되고, 셋째 단계에서 $0$ 이 나오므로 $31$ 은 소수다. 일반적으로 $p-2$ 번째 값이 $2^p-1$ 로 나누어지는지만 보면 되므로, 약수를 찾지 않고 제곱 $p-2$ 번으로 판정이 끝난다.

# 직관

$2^{61}-1$ 이 소수인지 나눗셈으로 확인하려면 $\sqrt{2^{61}}\approx 1.5\times 10^9$ 이하의 소수로 전부 나눠 봐야 한다. 지수가 수천만인 $2^p-1$ 에서는 이 방법으로 끝나지 않는다.

[Pocklington 판정](pocklington-criterion.md)은 $n-1$ 의 소인수를 알 때, 법 $n$ 의 곱셈에서 위수가 $n-1$ 의 큰 약수인 원소를 보여 $n$ 이 소수임을 증명한다. $n=2^p-1$ 이면 $n-1=2^p-2$ 의 소인수는 모르지만 $n+1=2^p$ 의 소인수는 $2$ 하나뿐이다. 그래서 정수 대신 $a+b\sqrt 3$ 꼴의 수를 법 $n$ 으로 계산하고, 그 곱셈에서 위수가 $n+1$ 인 원소를 찾는다.

후보는 $\omega=2+\sqrt 3$ 이다. $\bar\omega=2-\sqrt 3$ 이라 하면 $\omega\bar\omega=1$ 이고, $s\_k=\omega^{2^k}+\bar\omega^{2^k}$ 로 두면 $s\_0=4$ 이고 $s\_{k+1}=s\_k^2-2$ 다. $\sqrt 3$ 없이 정수만으로 $s\_k$ 를 계산할 수 있다. $s\_{p-2}\equiv 0$ 은 $\omega^{2^{p-1}}\equiv -1$ 과 같고, 이것은 $\omega$ 의 위수가 정확히 $2^p=n+1$ 이라는 뜻이다.

$n=2^5-1=31$ 이면 법 $31$ 로 $s\_0=4$, $s\_1=14$, $s\_2=194\equiv 8$, $s\_3=62\equiv 0$ 이다. $\omega$ 의 위수가 $32$ 이므로 $31$ 은 소수다.

# 정의

$p$ 에 대해 $M\_p=2^p-1$ 을 **Mersenne 수(Mersenne number)** 라 하고, 소수인 Mersenne 수를 Mersenne 소수(Mersenne prime)라 한다. $M\_5=31$ 은 Mersenne 소수이고, $M\_{11}=2047=23\cdot 89$ 는 소수가 아니다.

$s\_0=4$, $s\_{k+1}=s\_k^2-2$ 로 정한 수열을 Lucas–Lehmer 수열(Lucas–Lehmer sequence)이라 한다. 처음 값은 $4,14,194,37634$ 다.

홀수 소수 $p$ 에 대해 $s\_{p-2}$ 를 $M\_p$ 로 나눈 나머지가 $0$ 이면 $M\_p$ 를 소수로, 아니면 합성수로 판정하는 절차가 Lucas–Lehmer 판정이다.[^1] 법 $M\_p$ 로 줄이며 계산하면 다음과 같다.

```javascript
// BigInt 로 계산한다. p 는 홀수 소수.
function lucasLehmer(p) {
  const M = (1n << BigInt(p)) - 1n;
  let s = 4n;
  for (let k = 0; k < p - 2; k++) s = (s * s - 2n) % M;
  return s === 0n;
}
```

$p=11$ 이면 법 $2047$ 로 $s\_9\equiv 1736$ 이 $0$ 이 아니므로 $M\_{11}$ 은 합성수로 판정된다.

# 성질

## Lucas–Lehmer 정리

홀수 소수 $p$ 에 대해 $M\_p$ 가 소수인 것은 $s\_{p-2}\equiv 0\pmod{M\_p}$ 인 것과 동치다. 판정은 이 정리로 정당화된다.

### 충분성

증명의 요지. $s\_{p-2}\equiv 0$ 이고 $q$ 가 $M\_p$ 의 소인수라고 하자. 환 $R=\mathbb Z\lbrack\sqrt 3\rbrack/q$ 에서 $\omega^{2^{p-2}}+\bar\omega^{2^{p-2}}=0$ 에 $\omega^{2^{p-2}}$ 를 곱하면 $\omega^{2^{p-1}}=-1$ 이다. 그러므로 $R$ 의 가역원 군에서 $\omega$ 의 위수는 $2^p$ 다. $R$ 은 원소가 $q^2$ 개이고 $0$ 은 가역이 아니므로 $2^p\le q^2-1$ 이다. 따라서 $q^2\gt 2^p\gt M\_p$, 곧 $q\gt\sqrt{M\_p}$ 이고, 모든 소인수가 $\sqrt{M\_p}$ 보다 크므로 $M\_p$ 는 소수다.

### 필요성

$M\_p$ 가 소수이면 $M\_p\equiv 7\pmod{12}$ 이다. [이차 상호법칙](quadratic-reciprocity.md)으로 $3$ 은 법 $M\_p$ 의 제곱비잉여이고 $2$ 는 제곱잉여다. 그러면 $R=\mathbb F\_{M\_p}(\sqrt 3)$ 은 원소 $M\_p^2$ 개의 체이고, Frobenius 사상이 $\sqrt 3$ 을 $-\sqrt 3$ 으로 보내므로 $\omega^{M\_p}=\bar\omega$, 곧 $\omega^{M\_p+1}=\omega\bar\omega=1$ 이다.

$\omega=(1+\sqrt 3)^2/2$ 이므로 $\omega^{(M\_p+1)/2}=(1+\sqrt 3)^{M\_p+1}/2^{(M\_p+1)/2}$ 이다. 분자는 $(1+\sqrt 3)(1-\sqrt 3)=-2$ 이고, $2$ 가 제곱잉여이므로 분모는 $2\cdot 2^{(M\_p-1)/2}=2$ 다. 그러므로 $\omega^{(M\_p+1)/2}=-1$ 이다. 이것이 $s\_{p-2}\equiv 0$ 과 동치다.

## 지수 조건

$p$ 가 합성수 $ab$ 이면 $2^a-1$ 이 $2^p-1$ 을 나누므로 $M\_p$ 는 소수가 아니다. 그래서 판정은 소수 지수에만 쓴다. 소수 지수여도 $M\_{11}$ 처럼 합성수일 수 있다.

## 계산 비용

제곱 한 번은 $p$ 비트 수의 곱셈이고, $2^p\equiv 1$ 이므로 법 $M\_p$ 의 나머지는 상위 $p$ 비트를 하위 $p$ 비트에 더하는 것으로 끝난다. 곱셈을 [고속 Fourier 변환](fft.md)으로 하면 판정 전체가 $O(p^2\log p)$ 정도의 비트 연산이다.

# 활용

- 가장 큰 알려진 소수. 알려진 가장 큰 소수들은 대부분 Mersenne 소수이고 이 판정으로 증명되었다. 판정 하나가 $p$ 에 대한 제곱의 반복이어서 일반 수에 쓰는 [타원곡선 소수 증명](elliptic-curve-primality-proving.md)보다 훨씬 큰 수에 닿는다.
- 완전수. [완전수](perfect-numbers.md)의 Euclid–Euler 정리(Euclid–Euler theorem)로 짝수 완전수는 $M\_p$ 가 소수일 때의 $2^{p-1}M\_p$ 뿐이므로, 이 판정이 짝수 완전수를 찾는 방법이다.

[^1]: D. H. Lehmer, "An extended theory of Lucas' functions", *Annals of Mathematics* 31 (1930), 419–448. 이 꼴의 증명은 Richard Crandall, Carl Pomerance, *Prime Numbers: A Computational Perspective*, 2nd ed., Springer, 2005, 4.2 절.

# 연관 문서

## 선수지식

- [Pocklington 판정](pocklington-criterion.md)
- [이차 상호법칙](quadratic-reciprocity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms
