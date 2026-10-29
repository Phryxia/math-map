# 원시근

# 개요

**원시근(primitive root)** 은 법 $n$ 에서 거듭제곱만으로 $n$ 과 서로소인 나머지를 전부 만들어 내는 수다. 법 $7$ 에서 $3$ 을 거듭제곱하면 나머지가 $3,2,6,4,5,1$ 로 $1$ 부터 $6$ 까지 모두 나오고, $2$ 를 거듭제곱하면 $2,4,1$ 셋만 되풀이된다. 원시근 $g$ 를 하나 잡으면 서로소인 나머지가 모두 $g^k$ 꼴로 적히므로, 법 $n$ 의 곱셈이 지수의 덧셈으로 바뀐다.

# 직관

법 $7$ 에서 $x^3\equiv 6$ 을 풀려고 한다. 여섯 나머지를 모두 세제곱해 볼 수도 있지만, 법이 커지면 그 방법은 쓸 수 없다. 원시근 $3$ 으로 적으면 $6\equiv 3^3$ 이고 $x\equiv 3^k$ 로 두면 식은 $3^{3k}\equiv 3^3$ 이 된다. $3$ 의 거듭제곱은 여섯 번마다 되풀이되므로 이 식은 지수끼리의 합동 $3k\equiv 3\pmod 6$ 과 같다. 해는 $k=1,3,5$ 이고 $x\equiv 3,6,5$ 다.

법 $8$ 에서는 같은 방법이 막힌다. $8$ 과 서로소인 나머지는 $1,3,5,7$ 인데 $3^2=9$, $5^2=25$, $7^2=49$ 를 $8$ 로 나눈 나머지가 모두 $1$ 이다. 어느 수를 거듭제곱해도 나머지가 둘 넘게 나오지 않으므로 넷을 다 만드는 수가 없다. 원시근이 있는 법과 없는 법을 가르는 것이 이 문서의 주된 정리다.

# 정의

$\gcd(a,n)=1$ 일 때 $a$ 의 **위수(multiplicative order)** $\mathrm{ord}\_n(a)$ 는 $a^k\equiv 1\pmod n$ 을 만족하는 가장 작은 양의 정수 $k$ 다. [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)의 Euler 정리 $a^{\varphi(n)}\equiv 1$ 에서 위수가 존재하고 $\mathrm{ord}\_n(a)\le\varphi(n)$ 이다. 여기서 $\varphi(n)$ 은 Euler 함수(Euler's totient function)다.

**원시근** 은 $\mathrm{ord}\_n(g)=\varphi(n)$ 인 정수 $g$ 다. 이때 $g,g^2,\dots,g^{\varphi(n)}$ 이 서로 다르므로 가역 나머지 전부를 한 번씩 지나고, 곱셈군 $(\mathbb Z/n)^{\times}$ 은 $g$ 가 생성하는 순환군(cyclic group)이다. 원시근이 있다는 것과 $(\mathbb Z/n)^{\times}$ 이 순환군이라는 것은 동치다.

원시근 $g$ 를 고정하면 가역 나머지 $a$ 마다 $a\equiv g^k$ 인 $k$ 가 법 $\varphi(n)$ 으로 하나 정해진다. 이 $k$ 를 $a$ 의 **지표(index)** $\mathrm{ind}\_g(a)$ 라 한다. 지표는 다음을 만족한다.

$$
\mathrm{ind}\_g(ab)\equiv\mathrm{ind}\_g(a)+\mathrm{ind}\_g(b)\pmod{\varphi(n)}
$$

암호에서는 지표를 [이산로그](discrete-logarithm.md)라 부른다.

# 성질

## 위수의 성질

$d=\mathrm{ord}\_n(a)$ 라 두면 다음이 성립한다.

$$
a^m\equiv 1\pmod n\iff d\mid m,\qquad \mathrm{ord}\_n(a^k)=\frac{d}{\gcd(k,d)}
$$

증명의 요지. $m=qd+r$, $0\le r\lt d$ 로 나누면 $a^m\equiv a^r$ 이고, $d$ 의 최소성으로 $a^r\equiv 1$ 은 $r=0$ 일 때뿐이다. 둘째 식은 첫째 식을 $a^{km}\equiv 1\iff d\mid km$ 에 적용해 얻는다.

둘째 식에서 원시근 $g$ 의 거듭제곱 $g^k$ 가 다시 원시근인 것은 $\gcd(k,\varphi(n))=1$ 일 때뿐이다. 그러므로 원시근이 하나라도 있으면 법 $n$ 의 원시근은 정확히 $\varphi(\varphi(n))$ 개다. 법 $7$ 에서는 $\varphi(6)=2$ 개이고 $3$ 과 $3^5\equiv 5$ 다.

## 원시근 판정

$\varphi(n)$ 의 소인수를 $q_1,\dots,q_r$ 이라 하면, $\gcd(g,n)=1$ 인 $g$ 가 원시근인 것은 다음과 동치다.

$$
g^{\varphi(n)/q_i}\not\equiv 1\pmod n\qquad(i=1,\dots,r)
$$

증명의 요지. 위수 $d$ 는 $\varphi(n)$ 을 나누고, $d\lt\varphi(n)$ 이면 $d$ 는 어떤 $\varphi(n)/q_i$ 를 나눈다. 위수의 성질로 그때 $g^{\varphi(n)/q_i}\equiv 1$ 이다. 법 $7$ 에서 $\varphi(7)=6=2\cdot 3$ 이고, $3^3\equiv 6$, $3^2\equiv 2$ 이므로 $3$ 은 원시근이다. $2^3\equiv 1$ 이므로 $2$ 는 아니다.

$n$ 이 소수인지 모를 때 같은 조건을 지수 $n-1$ 로 검사하는 것이 Lucas 판정(Lucas test)이고, [Pratt 증명서](pratt-certificate.md)가 이 판정을 재귀적으로 쌓는다.

## 소수 법의 원시근 존재

소수 $p$ 에 대해 법 $p$ 의 원시근이 존재하고, 그 개수는 $\varphi(p-1)$ 이다.

증명의 요지. $\mathbb Z/p$ 는 체이므로 $x^d-1$ 의 근은 $d$ 개 이하다. 위수가 $d$ 인 원소가 하나라도 있으면 그 거듭제곱 $d$ 개가 $x^d-1$ 의 근 전부이고, 그 가운데 위수가 정확히 $d$ 인 것은 $\varphi(d)$ 개다. 따라서 위수가 $d$ 인 원소의 수 $\psi(d)$ 는 $0$ 이거나 $\varphi(d)$ 다. 모든 원소의 위수가 $p-1$ 을 나누므로 $\sum_{d\mid p-1}\psi(d)=p-1$ 이고, $\sum_{d\mid p-1}\varphi(d)=p-1$ 이므로 모든 $d$ 에서 $\psi(d)=\varphi(d)$ 다. $d=p-1$ 에서 원시근이 $\varphi(p-1)\ge 1$ 개 나온다.

같은 논증이 임의의 체의 곱셈군의 유한 부분군에 그대로 적용된다. [유한체](finite-fields.md)의 곱셈군이 순환군인 것이 그 경우다.

## Gauss 의 원시근 정리

Gauss 의 원시근 정리(primitive root theorem)[^1]. 법 $n\ge 2$ 의 원시근이 존재하는 것은 $n$ 이 다음 가운데 하나일 때뿐이다. 여기서 $p$ 는 홀수 소수, $k\ge 1$ 이다.

$$
n=2,\quad 4,\quad p^k,\quad 2p^k
$$

존재 쪽의 요지는 소수 법의 원시근을 올리는 것이다.

- $g$ 가 법 $p$ 의 원시근이면 $g$ 와 $g+p$ 가운데 하나는 법 $p^2$ 의 원시근이다. 법 $p^2$ 의 원시근 $g$ 는 모든 $k\ge 2$ 에서 법 $p^k$ 의 원시근이다. 핵심 계산은 $g^{p-1}=1+tp$, $p\nmid t$ 이면 $g^{p^{k-2}(p-1)}\equiv 1+tp^{k-1}\not\equiv 1\pmod{p^k}$ 이라는 것이다.
- [중국인의 나머지 정리](chinese-remainder-theorem.md)로 $(\mathbb Z/2p^k)^{\times}\cong(\mathbb Z/p^k)^{\times}$ 이다. 법 $p^k$ 의 원시근 $g$ 와 $g+p^k$ 가운데 홀수인 것이 법 $2p^k$ 의 원시근이다.

없는 쪽의 요지는 지수가 $\varphi(n)$ 에 못 미친다는 것이다.

- $n=ab$, $\gcd(a,b)=1$, $a,b\ge 3$ 이면 $\varphi(a)$ 와 $\varphi(b)$ 가 모두 짝수다. 중국인의 나머지 정리로 모든 가역 $x$ 가 $x^L\equiv 1$ 을 만족하고, $L=\mathrm{lcm}(\varphi(a),\varphi(b))\le\varphi(a)\varphi(b)/2\lt\varphi(n)$ 이다.
- $n=2^k$, $k\ge 3$ 이면 모든 홀수 $x$ 가 $x^{2^{k-2}}\equiv 1\pmod{2^k}$ 을 만족한다. $k=3$ 이 직관 절의 계산이고, $x^{2^{k-2}}=1+2^k s$ 를 제곱하면 다음 $k$ 로 넘어간다. $\varphi(2^k)=2^{k-1}$ 이므로 원시근이 없다.

원시근이 없는 법에서도 모든 가역 $x$ 에 대해 $x^m\equiv 1$ 인 가장 작은 공통 지수 $\lambda(n)$ 을 정의할 수 있고, 이를 [Carmichael 함수](carmichael-function.md)라 한다. 원시근이 있는 것은 $\lambda(n)=\varphi(n)$ 과 동치다.

## 거듭제곱 잉여

$p$ 가 소수이고 $p\nmid a$ 이면, $x^k\equiv a\pmod p$ 가 해를 갖는 것은 다음과 동치다.

$$
a^{(p-1)/\gcd(k,p-1)}\equiv 1\pmod p
$$

해가 있으면 해의 개수는 $\gcd(k,p-1)$ 이다. 원시근 $g$ 로 $x=g^y$, $a=g^c$ 로 두면 식은 $ky\equiv c\pmod{p-1}$ 이 되고, 이 일차 합동식은 $\gcd(k,p-1)\mid c$ 일 때 $\gcd(k,p-1)$ 개의 해를 갖는다. $k=2$ 이면 $a^{(p-1)/2}\equiv 1$ 이 되어 [이차 상호법칙](quadratic-reciprocity.md)이 쓰는 Euler 판정법(Euler's criterion)이 나온다.

# 활용

- [이산로그](discrete-logarithm.md)와 Diffie–Hellman 키 교환(Diffie–Hellman key exchange)은 법 $p$ 의 원시근 $g$ 를 공개 기준으로 쓴다. $g^k$ 계산은 빠르고 $k$ 를 되찾는 지표 계산은 어렵다.
- [Pratt 증명서](pratt-certificate.md)는 법 $p$ 의 원시근과 $p-1$ 의 소인수분해를 증거로 적어 $p$ 가 소수임을 짧게 증명한다. 원시근 판정 조건이 곧 검증 절차다.
- [Pohlig–Hellman 방법](pohlig-hellman.md)은 지표를 $p-1$ 의 소인수마다 따로 구한 뒤 중국인의 나머지 정리로 합친다.
- 위 거듭제곱 잉여의 판정으로 $x^k\equiv a$ 의 가해성을 정하고, $k=2$ 의 경우가 Legendre 기호(Legendre symbol)의 계산에 쓰인다.
- Artin 원시근 추측(Artin's conjecture on primitive roots)은 제곱수가 아니고 $-1$ 이 아닌 정수 $a$ 가 무한히 많은 소수 $p$ 에 대해 법 $p$ 의 원시근이라는 진술이다.

[^1]: K. Ireland, M. Rosen, *A Classical Introduction to Modern Number Theory*, 2nd ed., Springer, Graduate Texts in Mathematics 84 (1990), Ch. 4 "The Structure of U(Z/nZ)". 원시근의 존재, 법 $p^k$ 로의 올림, 원시근이 있는 법의 분류, 거듭제곱 잉여의 판정.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)
- [중국인의 나머지 정리](chinese-remainder-theorem.md)

## 더 알아보기

- [Carmichael 함수](carmichael-function.md)
- [Pratt 증명서](pratt-certificate.md)

#number_theory #group_theory #cryptography #theorem
