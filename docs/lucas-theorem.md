# Lucas 정리

# 개요

**Lucas 정리(Lucas's theorem)** 는 이항계수 $\binom mn$ 을 소수 $p$ 로 나눈 나머지를 $m$ 과 $n$ 의 $p$ 진 자릿수만으로 계산하는 정리다. $\binom{7}{3}=35$ 는 홀수이고 $\binom{8}{3}=56$ 은 짝수인데, 큰 이항계수의 홀짝은 계산하지 않고는 알기 어렵다. 이 정리로는 $m$ 과 $n$ 을 $p$ 진법으로 쓰고 자리마다 작은 이항계수를 구해 곱하면 나머지가 나온다.

# 직관

$\binom{7}{3}$ 과 $\binom{8}{3}$ 의 홀짝을 본다. $7=111_2$, $8=1000_2$, $3=11_2$ 이다. $(1+x)^2=1+2x+x^2$ 을 $2$ 로 나눈 나머지만 보면 $1+x^2$ 이고, 같은 방법으로 $(1+x)^4\equiv 1+x^4$, $(1+x)^8\equiv 1+x^8$ 이다.

그러면 $(1+x)^7=(1+x)^4(1+x)^2(1+x)$ 는 $2$ 로 나눈 나머지로 $(1+x^4)(1+x^2)(1+x)$ 이다. 이 곱을 전개하면 $x^0$ 부터 $x^7$ 까지 모든 항의 계수가 $1$ 이므로 $\binom{7}{3}$ 은 홀수다. $(1+x)^8\equiv 1+x^8$ 에는 $x^3$ 항이 없으므로 $\binom 83$ 은 짝수다. $x^3=x^2\cdot x$ 는 $3$ 의 이진 자릿수가 쓰는 자리 $2^1,2^0$ 이 $m$ 의 이진 자릿수에도 있을 때만 만들어진다.

# 정의

소수 $p$ 와 음이 아닌 정수 $m,n$ 을 $p$ 진법으로 $m=\sum_{i=0}^{k}m_ip^i$, $n=\sum_{i=0}^{k}n_ip^i$, $0\le m_i,n_i\lt p$ 로 쓴다. Lucas 정리는 다음 합동식이다.

$$
\binom mn\equiv\prod_{i=0}^{k}\binom{m_i}{n_i}\pmod p
$$

여기서 $n_i\gt m_i$ 이면 $\binom{m_i}{n_i}=0$ 으로 둔다. E. Lucas 가 1878 년에 증명했다.[^1]

# 성질

## 증명

$0\lt j\lt p$ 이면 $\binom pj=\frac{p!}{j!(p-j)!}$ 의 분자에는 $p$ 가 있고 분모에는 없으므로 $p\mid\binom pj$ 다. 따라서 $(1+x)^p\equiv 1+x^p\pmod p$ 이고, 되풀이하면 $(1+x)^{p^i}\equiv 1+x^{p^i}$ 이다. [셈의 기본 원리](counting-principles.md)의 이항정리로 다음 두 전개를 비교한다.

$$
(1+x)^m\equiv\prod_{i=0}^{k}\left(1+x^{p^i}\right)^{m_i}=\prod_{i=0}^{k}\sum_{j=0}^{m_i}\binom{m_i}{j}x^{jp^i}\pmod p
$$

오른쪽에서 $x^n$ 이 나오는 방법은 각 $i$ 에서 $j=n_i$ 를 고르는 것 하나뿐이다. $p$ 진 전개가 유일하고 $j\le m_i\lt p$ 이기 때문이다. 양변의 $x^n$ 계수를 [정수의 합동](modular-arithmetic.md)으로 비교하면 정리가 나온다.

## 법 2 의 홀짝

$p=2$ 이면 자릿수의 이항계수는 $\binom 00=\binom 10=\binom 11=1$, $\binom 01=0$ 뿐이다. 따라서 $\binom mn$ 이 홀수인 것은 $n$ 의 이진 자릿수 가운데 $1$ 인 자리가 모두 $m$ 에서도 $1$ 인 것과 동치다. 비트 연산으로는 $n$ 과 $m$ 의 비트별 논리곱이 $n$ 이다. Pascal 삼각형에서 홀수 칸을 칠하면 Sierpiński 삼각형(Sierpiński triangle)이 나오는 것이 이 성질이다.

## Legendre 공식

$n!$ 을 나누는 $p$ 의 최대 지수 $v_p(n!)$ 은 다음과 같다. $s_p(n)$ 은 $n$ 의 $p$ 진 자릿수의 합이다.

$$
v_p(n!)=\sum_{j\ge 1}\left\lfloor\frac{n}{p^j}\right\rfloor=\frac{n-s_p(n)}{p-1}
$$

이를 Legendre 공식(Legendre's formula)이라 한다. 첫 식은 $1,\dots,n$ 가운데 $p^j$ 의 배수의 개수를 $j$ 마다 더한 것이고, 둘째 식은 $\lfloor n/p^j\rfloor$ 를 자릿수로 적어 더한 것이다. $v_2(10!)=5+2+1=8$ 이고, $10=1010_2$ 에서 $(10-2)/1=8$ 이다.

## Kummer 정리

$\binom{m+n}{n}$ 을 나누는 $p$ 의 최대 지수는 $p$ 진법으로 $m$ 과 $n$ 을 더할 때 일어나는 받아올림의 횟수다. 이를 Kummer 정리(Kummer's theorem)라 한다.

증명의 요지. Legendre 공식을 세 계승에 적용하면 다음이 나온다.

$$
v_p\binom{m+n}{n}=\frac{s_p(m)+s_p(n)-s_p(m+n)}{p-1}
$$

자리마다 받아올림이 한 번 일어나면 그 자리에서 $p$ 가 빠지고 윗자리에 $1$ 이 더해져 자릿수의 합이 $p-1$ 줄어든다. $\binom 42=6$ 에서 $2+2$ 를 이진법으로 더하면 $10_2+10_2=100_2$ 로 받아올림이 한 번이고, $6=2\cdot 3$ 이다.

Lucas 정리와의 관계. $\binom mn\not\equiv 0\pmod p$ 인 것은 $n$ 과 $m-n$ 을 더할 때 받아올림이 없는 것, 곧 모든 자리에서 $n_i\le m_i$ 인 것과 동치다.

## 계산

$\binom mn\bmod p$ 는 $m$ 과 $n$ 의 자릿수를 하나씩 떼어 작은 이항계수의 곱으로 계산한다. 자릿수는 $\log_p m$ 개이므로 작은 이항계수 표를 한 번 만들어 두면 곱셈 $O(\log_p m)$ 번으로 끝난다.

```javascript
// C(m, n) mod p, small[a][b] = C(a, b) mod p (0 <= a, b < p)
function binomModP(m, n, p, small) {
  let r = 1;
  while (n > 0 || m > 0) {
    const mi = m % p, ni = n % p;
    if (ni > mi) return 0;
    r = (r * small[mi][ni]) % p;
    m = Math.floor(m / p);
    n = Math.floor(n / p);
  }
  return r;
}
```

# 활용

- [Catalan 수](catalan-numbers.md) $C_n=\frac1{n+1}\binom{2n}{n}$ 이 홀수인 것은 $n+1$ 이 $2$ 의 거듭제곱일 때뿐이다. Kummer 정리로 $\binom{2n}{n}$ 의 $2$ 진 지수가 $n$ 의 이진 자릿수 가운데 $1$ 의 개수임을 쓰면 나온다.
- 제곱 인수 없는 법 $N=p_1\cdots p_r$ 에 대한 $\binom mn\bmod N$ 은 소수마다 Lucas 정리로 구한 뒤 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 합친다.
- [p 진수](p-adic-numbers.md)에서 $v_p(n!)$ 은 [지수함수](exponential-function.md) 급수 $\sum x^n/n!$ 의 수렴 반경을 정한다. Legendre 공식에서 $v_p(n!)\lt n/(p-1)$ 이므로 급수는 $v_p(x)\gt 1/(p-1)$ 에서 수렴한다.

[^1]: É. Lucas, "Théorie des fonctions numériques simplement périodiques", *American Journal of Mathematics* **1** (1878), 184–240, 289–321. Legendre 공식과 Kummer 정리를 함께 정리한 개관은 A. Granville, "Arithmetic properties of binomial coefficients I: binomial coefficients modulo prime powers", *Canadian Mathematical Society Conference Proceedings* **20** (1997), 253–275.

# 연관 문서

## 선수지식

- [셈의 기본 원리](counting-principles.md)
- [정수의 합동](modular-arithmetic.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics
