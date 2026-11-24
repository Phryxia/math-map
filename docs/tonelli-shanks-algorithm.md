# Tonelli–Shanks 알고리즘

# 개요

**Tonelli–Shanks 알고리즘(Tonelli–Shanks algorithm)** 은 소수 $p$ 와 법 $p$ 의 제곱잉여 $a$ 가 주어졌을 때 $x^2\equiv a\pmod p$ 인 $x$ 를 찾는 절차다. $p=13$, $a=10$ 이면 $1$ 부터 $12$ 까지 제곱해 보면 $6^2=36\equiv 10$ 을 찾지만, $p$ 가 수백 자리인 암호에서는 이렇게 할 수 없다. 이 알고리즘은 $p-1$ 을 $2$ 의 거듭제곱과 홀수로 나누고, 거듭제곱 계산 몇 번으로 오차를 $2$ 의 거듭제곱 위수만큼씩 지워 $x$ 를 얻는다.

# 직관

$p\equiv 3\pmod 4$ 이면 바로 풀린다. [이차 상호법칙](quadratic-reciprocity.md)의 Euler 판정법(Euler's criterion)으로 $a^{(p-1)/2}\equiv 1$ 이므로 $x=a^{(p+1)/4}$ 가 $x^2=a^{(p+1)/2}=a\cdot a^{(p-1)/2}\equiv a$ 를 만족한다. $p=13$ 이면 $(p+1)/4$ 가 정수가 아니어서 이 식을 쓸 수 없다.

$p-1=12=2^2\cdot 3$ 이므로 홀수 부분 $q=3$ 으로 같은 일을 해 본다. $x=a^{(q+1)/2}=10^2\equiv 9$ 로 두면 $x^2=a\cdot a^q$ 이고, $t=a^q=1000\equiv 12\equiv -1$ 이 오차다. 오차 $t$ 가 $1$ 이면 끝났을 텐데 $-1$ 이다.

오차를 지우려고 제곱잉여가 아닌 수 $z=2$ 를 쓴다. $c=z^q=8$ 은 $c^2=64\equiv -1$ 이므로 $t$ 와 같은 위수 $4$ 의 원소의 제곱근 역할을 한다. $x$ 에 $c$ 를 곱하면 $x^2$ 에 $c^2\equiv -1$ 이 곱해져 오차가 $t\cdot c^2\equiv 1$ 이 된다. 새 $x=9\cdot 8=72\equiv 7$ 이고 $7^2=49\equiv 10$ 이다.

# 정의

$p$ 가 홀수 소수이고 $a$ 가 법 $p$ 의 제곱잉여일 때, $p-1=2^sq$ ($q$ 홀수) 로 쓰고 제곱잉여가 아닌 $z$ 를 하나 고른다. 다음 절차가 Tonelli–Shanks 알고리즘이다.[^1]

```javascript
// p 는 홀수 소수, a 는 법 p 의 제곱잉여, z 는 제곱잉여가 아닌 수
function tonelliShanks(a, p, z) {
  let q = p - 1, s = 0;
  while (q % 2 === 0) { q /= 2; s += 1; }
  let m = s;
  let c = powMod(z, q, p);           // 위수 2^m
  let t = powMod(a, q, p);           // 오차, 위수가 2^m 을 나눈다
  let x = powMod(a, (q + 1) / 2, p); // x^2 = a * t
  while (t !== 1) {
    let i = 0, u = t;
    while (u !== 1) { u = (u * u) % p; i += 1; } // t 의 위수 2^i
    const b = powMod(c, 2 ** (m - i - 1), p);
    m = i;
    c = (b * b) % p;
    t = (t * c) % p;
    x = (x * b) % p;
  }
  return x;
}
```

직관 절의 계산은 $s=2$, $q=3$, $z=2$ 에서 처음 값 $m=2$, $c=8$, $t=12$, $x=9$ 가 한 번의 반복으로 $m=1$, $c=12$, $t=1$, $x=7$ 이 된 것이다.

# 성질

## 정확성

반복마다 다음 세 식이 유지된다.

$$
x^2\equiv a\thinspace t,\qquad c^{2^{m-1}}\equiv -1,\qquad t^{2^{m-1}}\equiv 1
$$

처음에는 $x^2=a^{q+1}=a\cdot a^q$ 이고, $c=z^q$ 는 Euler 판정법으로 $c^{2^{s-1}}=z^{(p-1)/2}\equiv -1$ 이며, $t^{2^{s-1}}=a^{(p-1)/2}\equiv 1$ 이다. 반복에서 $t$ 의 위수가 $2^i$ ($i\lt m$) 이면 $b=c^{2^{m-i-1}}$ 의 제곱 $b^2$ 은 위수가 정확히 $2^i$ 이고 $(b^2)^{2^{i-1}}\equiv -1$ 이다. 따라서 $t\thinspace b^2$ 은 $t^{2^{i-1}}\cdot(-1)\equiv 1$ 이 되어 위수가 $2^{i-1}$ 이하로 줄고, $x\thinspace b$ 의 제곱은 $a\thinspace t\thinspace b^2$ 이다.

$t$ 의 위수의 지수가 반복마다 줄어들므로 많아야 $s$ 번 반복하면 $t=1$ 이 되고, 그때 $x^2\equiv a$ 다.

## 계산량

거듭제곱 한 번은 곱셈 $O(\log p)$ 번이다. 반복은 많아야 $s$ 번이고 반복마다 $t$ 의 위수를 찾는 제곱이 많아야 $s$ 번이므로, 곱셈은 모두 $O(\log p+s^2)$ 번이다. $s\le\log_2 p$ 이므로 최악에도 $O(\log^2 p)$ 번이다.

제곱잉여가 아닌 $z$ 는 $1$ 부터 $p-1$ 까지의 절반이므로 무작위로 고르면 평균 두 번 만에 찾는다. 일반화된 [Riemann 가설](riemann-hypothesis.md) 아래에서는 가장 작은 제곱잉여가 아닌 수가 $2(\ln p)^2$ 보다 작아, 결정론적으로 찾을 수 있다.[^2]

## Cipolla 알고리즘

$t^2-a$ 가 제곱잉여가 아닌 $t$ 를 고르고 $\omega=\sqrt{t^2-a}$ 를 붙인 [유한체](finite-fields.md) $\mathbb F_{p^2}$ 에서 계산하면 다음이 $a$ 의 제곱근이다.

$$
x=(t+\omega)^{(p+1)/2}
$$

$(t+\omega)^p=t-\omega$ 이므로 $x^2=(t+\omega)(t-\omega)=t^2-\omega^2=a$ 이다. 이 방법을 Cipolla 알고리즘(Cipolla's algorithm)이라 하고, $s$ 가 클 때 Tonelli–Shanks 알고리즘보다 곱셈이 적다.

## 법 p 의 거듭제곱

$p\nmid 2a$ 이면 법 $p$ 의 제곱근을 [Hensel 보조정리](hensel-lemma.md)로 법 $p^k$ 의 제곱근으로 올린다. $x_k^2\equiv a\pmod{p^k}$ 이면 다음 값이 법 $p^{k+1}$ 의 해다.

$$
x_{k+1}=x_k-\frac{x_k^2-a}{2x_k}
$$

# 활용

- [이차 체](quadratic-sieve.md). 인수분해할 수 $n$ 에 대해 인수 기저의 각 소수 $p$ 에서 $x^2\equiv n\pmod p$ 의 두 근을 구해 체의 시작 위치로 쓴다.
- 타원곡선 암호의 점 압축. 곡선 $y^2=x^3+Ax+B$ 의 점을 $x$ 좌표와 $y$ 의 짝홀 하나로 저장하고, 복원할 때 $x^3+Ax+B$ 의 제곱근을 이 알고리즘으로 구한다.
- [Miller–Rabin 판정](miller-rabin-test.md). $p-1=2^sq$ 로 나누고 $a^q$ 를 거듭 제곱해 $-1$ 에 닿는지 보는 계산이 이 알고리즘의 오차 $t$ 의 위수 계산과 같다.

[^1]: D. Shanks, "Five number-theoretic algorithms", *Proceedings of the Second Manitoba Conference on Numerical Mathematics*, 1973, pp. 51–70.
[^2]: E. Bach, "Explicit bounds for primality testing and related problems", *Mathematics of Computation* 55, 1990, pp. 355–380.

# 연관 문서

## 선수지식

- [이차 상호법칙](quadratic-reciprocity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography
