# Wilson 정리

# 개요

**Wilson 정리(Wilson's theorem)** 는 소수 $p$ 에 대해 $1$ 부터 $p-1$ 까지 모두 곱한 수를 $p$ 로 나누면 나머지가 $p-1$ 이라는 정리다. $p=7$ 이면 $6!=720=7\cdot 102+6$ 이고, 나머지 $6$ 은 $-1$ 과 합동이다. 곱할 수 하나하나를 그 수와 곱해 $1$ 이 되는 짝과 묶으면 짝마다 $1$ 이 되어 사라지고, 자기 자신이 짝인 $1$ 과 $p-1$ 만 남는다.

# 직관

법 $7$ 에서 $1\cdot 2\cdot 3\cdot 4\cdot 5\cdot 6$ 을 계산한다. $2\cdot 4=8\equiv 1$ 이고 $3\cdot 5=15\equiv 1$ 이므로 두 쌍을 먼저 곱하면 각각 $1$ 이 된다. 남는 것은 $1\cdot 6\equiv 6\equiv -1$ 이다.

$2$ 부터 $5$ 까지가 둘씩 짝지어진 것은 법 $7$ 에서 곱해서 $1$ 이 되는 수가 수마다 하나씩 있고, $2$ 부터 $5$ 가운데 자기 자신과 짝인 수가 없기 때문이다. 자기 자신과 짝인 수는 $x^2\equiv 1$ 의 해이고, 법이 소수이면 그 해는 $1$ 과 $-1$ 둘뿐이다.

법이 합성수이면 결과가 다르다. 법 $6$ 에서 $5!=120\equiv 0$ 이다. $2$ 와 $3$ 이 모두 곱에 들어 있고 $2\cdot 3=6$ 이기 때문이다.

# 정의

Wilson 정리는 소수 $p$ 에 대한 다음 합동식이다.

$$
(p-1)!\equiv -1\pmod p
$$

역도 성립하므로, 정수 $n\ge 2$ 에 대해 다음 동치를 소수의 판정으로 쓸 수 있다.

$$
(n-1)!\equiv -1\pmod n\iff n\text{ 이 소수}
$$

진술은 Waring 이 1770 년에 Wilson 의 이름으로 발표했고, 첫 증명은 Lagrange 가 1771 년에 주었다.[^1]

# 성질

## 짝짓기 증명

$p$ 가 소수이면 $1\le a\le p-1$ 마다 $ab\equiv 1\pmod p$ 인 $b$ 가 $1\le b\le p-1$ 안에 하나 있다. 이는 [정수의 합동](modular-arithmetic.md)의 역원이다. $a=b$ 인 것은 $a^2\equiv 1$, 곧 $p\mid(a-1)(a+1)$ 일 때이고, $p$ 가 [소수](primes.md)이므로 $a\equiv\pm 1$ 이다. 나머지 $p-3$ 개는 서로 다른 짝으로 묶이고 짝의 곱이 $1$ 이므로 다음이 나온다.

$$
(p-1)!\equiv 1\cdot(p-1)\equiv -1\pmod p
$$

## 다항식 증명

[Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)의 Fermat 소정리로 $1,2,\dots,p-1$ 은 모두 $x^{p-1}-1$ 의 근이다. 법 $p$ 에서 $p-1$ 차 다항식의 근은 $p-1$ 개 이하이므로 다음이 성립한다.

$$
x^{p-1}-1\equiv(x-1)(x-2)\cdots(x-(p-1))\pmod p
$$

양변의 상수항을 비교하면 $-1\equiv(-1)^{p-1}(p-1)!$ 이다. $p$ 가 홀수이면 $(-1)^{p-1}=1$ 이고 $p=2$ 에서는 $1\equiv -1$ 이므로 정리가 나온다. 같은 비교를 $x$ 의 다른 계수에 하면 $1,\dots,p-1$ 의 기본 대칭식(elementary symmetric polynomial)이 법 $p$ 로 모두 $0$ 이라는 사실이 나온다.

## 역의 증명

$n$ 이 합성수이면 $(n-1)!\not\equiv -1\pmod n$ 이다. $n=ab$, $1\lt a\le b\lt n$ 이라 하자. $a\lt b$ 이면 $a$ 와 $b$ 가 모두 곱에 들어 있어 $(n-1)!\equiv 0$ 이다. $a=b$ 이고 $a\gt 2$ 이면 $a$ 와 $2a$ 가 모두 $n-1$ 이하이므로 역시 $0$ 이다. 남는 경우 $n=4$ 에서는 $3!=6\equiv 2$ 다.

## Gauss 의 일반화

법 $n$ 에서 $n$ 과 서로소인 $1\le a\le n$ 을 모두 곱한 값을 $P_n$ 이라 하면 다음이 성립한다.

$$
P_n\equiv\begin{cases}-1 & n=2,\ 4,\ p^k,\ 2p^k\cr 1 & \text{그 밖의 }n\end{cases}\pmod n
$$

여기서 $p$ 는 홀수 소수다. 짝짓기 증명에서 남는 것은 $x^2\equiv 1$ 의 해이고, 해의 곱이 $-1$ 인 것은 해가 $\pm 1$ 둘뿐일 때다. 그런 법이 정확히 [원시근](primitive-roots.md)이 있는 법이다.

# 활용

- 법 $p\equiv 1\pmod 4$ 에서 $-1$ 의 제곱근을 식으로 준다. $(p-1)!$ 의 뒤 절반을 $a\mapsto p-a$ 로 바꾸면 다음이 나온다.
  $$
  \left(\left(\tfrac{p-1}{2}\right)!\right)^2\equiv(-1)^{(p+1)/2}\pmod p
  $$
  $p\equiv 1\pmod 4$ 이면 우변이 $-1$ 이므로 $x=((p-1)/2)!$ 이 $x^2\equiv -1$ 의 해다. [Gauss 정수환](gaussian-integers.md)에서 이런 소수가 두 제곱수의 합임을 보일 때 이 해를 쓴다.
- 소수의 판정으로서는 계산이 $n$ 번의 곱셈을 요구하므로 실용적이지 않다. 실제 판정은 [Miller–Rabin 판정](miller-rabin-test.md)처럼 Fermat 소정리를 쓴다.
- Wilson 정리를 법 $p^2$ 로 올리면 $(p-1)!\equiv -1\pmod{p^2}$ 이 되는 소수를 Wilson 소수(Wilson prime)라 한다. $p=5$ 에서 $4!+1=25$ 다.

[^1]: G. H. Hardy, E. M. Wright, *An Introduction to the Theory of Numbers*, 6th ed., Oxford University Press (2008), Ch. VI. Wilson 정리의 진술과 증명, 역의 성립, $-1$ 의 제곱근으로의 응용.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #theorem
