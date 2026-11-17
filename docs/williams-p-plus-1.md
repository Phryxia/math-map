# Williams p + 1 방법

# 개요

**Williams p + 1 방법(Williams' p + 1 method)** 은 합성수 $n$ 의 소인수 $p$ 가운데 $p+1$ 이 작은 소수들의 곱인 것을 찾는 인수분해 알고리즘이다. $n=40633$ 에 [Pollard p − 1 방법](pollard-p-minus-1.md)을 $k=2520$ 으로 돌리면 최대공약수가 $1$ 이 나와 실패한다. $n$ 의 두 소인수 $179$, $227$ 에서 $178=2\cdot 89$ 와 $226=2\cdot 113$ 이 큰 소인수를 갖는다.

그런데 $179+1=180$ 은 작은 소수들의 곱이다. 이 방법은 크기가 $p+1$ 인 군에서 거듭제곱을 계산해 $179$ 를 찾는다.

# 직관

Pollard p − 1 방법은 $a^{p-1}\equiv 1\pmod p$ 를 쓴다. 지수 자리에 $p+1$ 이 오는 거듭제곱이 있으면 같은 계산으로 $p+1$ 이 매끄러운 소인수를 찾는다. 법 $p$ 의 정수에서는 이런 수가 $\pm 1$ 뿐이므로, 법 $p$ 에서 제곱근이 없는 정수 $D$ 의 제곱근 $\sqrt D$ 를 붙인 수 $x+y\sqrt D$ 로 넓힌다.

$t^2-Pt+1=0$ 의 두 근을 $\alpha,\beta$ 라 하면 $\alpha\beta=1$ 이고 판별식은 $D=P^2-4$ 다. [Lucas 수열](lucas-sequences.md)의 소수 법의 성질에서 $D$ 가 법 $p$ 의 제곱잉여가 아니면 $\alpha^{p+1}=\alpha\beta=1$ 이다. 그러므로 $p+1$ 이 $k$ 를 나누면 $\alpha^k=1$ 이다.

$\alpha$ 는 정수가 아니지만 $V_k=\alpha^k+\alpha^{-k}$ 는 정수이고 점화식으로 법 $n$ 에서 계산된다. $\alpha^k=1$ 이면 $V_k\equiv 2\pmod p$ 이므로 $\gcd(V_k-2,n)$ 이 $p$ 의 배수다. $n=40633$, $P=5$ 에서 $D=21$ 은 법 $179$ 의 제곱잉여가 아니다. $V_{2520}\equiv 10384\pmod n$ 이고 $\gcd(10382,40633)=179$ 이다.

$P=3$ 이면 $D=5$ 가 법 $179$ 의 제곱잉여($5\equiv 30^2$)여서 $\alpha$ 가 법 $179$ 의 정수가 된다. 이때 $\alpha^{178}=1$ 이므로 계산은 p − 1 방법과 같아지고 최대공약수는 $1$ 이다. $p$ 를 모르므로 $D$ 가 제곱잉여인지도 알 수 없어, $P$ 를 몇 개 바꿔 가며 시도한다.

# 정의

합성수 $n$, 경계 $B$, 정수 $P$ ($P^2-4$ 가 제곱수가 아니다) 를 받는다. 지수 $k$ 는 Pollard p − 1 방법과 같다.

$$
k=\prod_{q\le B}q^{\lfloor\log B/\log q\rfloor}
$$

$V_k=V_k(P,1)$ 을 법 $n$ 으로 계산하고 $g=\gcd(V_k-2,n)$ 을 구한다. $1\lt g\lt n$ 이면 $g$ 를 인수로 내놓고, 아니면 $P$ 나 $B$ 를 바꿔 다시 한다. 이 절차를 Williams 가 1982 년에 제안했다[^1].

$V_m$ 은 다음 두 식으로 첨자를 두 배로 늘리거나 하나 늘리며 계산한다.

$$
V_{2m}=V_m^2-2,\qquad V_{2m+1}=V_mV_{m+1}-P
$$

직관 절의 $n=40633$, $B=9$, $P=5$ 에서 $k=2520$ 이고 $V_{2520}\equiv 10384$, $g=179$ 이다.

```javascript
// V_k(P, 1) mod n. (a, b) = (V_m, V_{m+1}) 을 유지하며 k 의 비트를 위에서부터 읽는다.
function lucasV(k, P, n) {
  let a = P % n, b = mod(P * P - 2n, n);
  for (const bit of k.toString(2).slice(1)) {
    if (bit === "1") [a, b] = [mod(a * b - P, n), mod(b * b - 2n, n)];
    else [a, b] = [mod(a * a - 2n, n), mod(a * b - P, n)];
  }
  return a;
}

function williamsPPlus1(n, k, Ps = [3n, 5n, 7n]) {
  for (const P of Ps) {
    const g = gcd(mod(lucasV(k, P, n) - 2n, n), n);
    if (g !== 1n && g !== n) return g;
  }
  return null;
}
```

# 성질

## 성공 조건

정리. $p$ 가 $n$ 의 홀수 소인수이고 $p\nmid D$ 이며 $\varepsilon$ 이 $D$ 의 법 $p$ Legendre 기호(Legendre symbol)라 하자. $p-\varepsilon$ 이 $k$ 를 나누면 $p$ 는 $\gcd(V_k-2,n)$ 을 나눈다.

증명의 요지. $\varepsilon=1$ 이면 $\alpha,\beta\in\mathbb F_p$ 이고 $\alpha^{p-1}=\beta^{p-1}=1$ 이다. $\varepsilon=-1$ 이면 $\alpha^{p+1}=\alpha\beta=1$ 이다. 어느 경우든 $\alpha^k=\beta^k=1$ 이고 $V_k=\alpha^k+\beta^k\equiv 2\pmod p$ 다.

$\varepsilon=1$ 인 $P$ 에서는 p − 1 방법을 다시 돌린 것이 된다. 법 $p$ 에서 $P^2-4$ 가 제곱잉여가 아닌 $P$ 는 대략 절반이므로, $P$ 를 세 개 시도하면 모두 실패할 확률은 대략 $1/8$ 이다.

## 합성 공식

$t^2-V_bt+1=0$ 의 두 근은 $\alpha^b$ 와 $\alpha^{-b}$ 이므로 $V_a(V_b(P,1),1)=V_{ab}(P,1)$ 이다. 그러므로 $k$ 의 소수 거듭제곱마다 $P\leftarrow V_{q^e}(P,1)$ 로 바꿔 가며 계산할 수 있고, Pollard p − 1 방법처럼 단계마다 최대공약수를 확인할 수 있다.

## 비용

$V_k$ 의 계산은 $k$ 의 비트 하나에 법 $n$ 의 곱셈 두 번이 든다. 같은 $B$ 에서 Pollard p − 1 방법보다 느리고, $P$ 를 여러 개 시도하므로 그 배수만큼 더 든다.

# 활용

- 인수분해 프로그램은 Pollard p − 1 방법 다음에 이 방법을 $P$ 몇 개로 돌리고, 둘 다 실패하면 [타원곡선 인수분해](elliptic-curve-factorization.md)로 넘어간다.
- [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 키를 만들 때 $p-1$ 과 함께 $p+1$ 도 큰 소인수를 갖게 하면 이 방법이 통하지 않는다.
- [Lucas–Lehmer 판정](lucas-lehmer-test.md)은 같은 크기 $p+1$ 의 군을 소수 판정에 쓴다. $2^\ell-1$ 에 $1$ 을 더하면 $2$ 의 거듭제곱이므로, 그 군에서 위수가 $2^\ell$ 인 원소를 보여 $2^\ell-1$ 이 소수임을 증명한다.

[^1]: H. C. Williams, "A p + 1 method of factoring", *Mathematics of Computation* 39 (1982), 225–234.

# 연관 문서

## 선수지식

- [Pollard p − 1 방법](pollard-p-minus-1.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography
