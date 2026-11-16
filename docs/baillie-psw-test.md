# Baillie–PSW 판정

# 개요

**Baillie–PSW 판정(Baillie–Pomerance–Selfridge–Wagstaff primality test)** 은 밑 $2$ 의 [Miller–Rabin 판정](miller-rabin-test.md)과 Lucas 판정을 한 번씩 해서 소수인지 가리는 방법이다. $2047=23\cdot 89$ 는 밑 $2$ 의 Miller–Rabin 판정을 통과하는 합성수이고, $323=17\cdot 19$ 는 $F_{324}$ 를 나누어 [Fibonacci 수](fibonacci-numbers.md)로 하는 Lucas 판정을 통과하는 합성수다. 두 판정을 통과하는 합성수가 서로 달라서 둘을 함께 통과하는 합성수는 알려진 것이 없고, 이 판정은 그 둘을 함께 요구해 한 번의 계산으로 소수를 가린다.

# 직관

밑 $2$ 의 판정은 $\mathbb Z/n$ 에서 $2$ 의 거듭제곱을 계산해 $2^{n-1}$ 이 $1$ 인지, 그 제곱근들이 $\pm 1$ 인지 본다. 소수 $p$ 이면 $2$ 의 위수가 $p-1$ 을 나누므로 통과한다. $2047=2^{11}-1$ 에서는 $2^{11}\equiv 1$ 이고 $11$ 이 $2046$ 을 나누어 합성수인데도 통과한다.

[Lucas 수열](lucas-sequences.md)의 판정은 $p+1$ 을 쓴다. $D=P^2-4Q$ 가 법 $p$ 의 제곱잉여가 아니면 $p\mid U_{p+1}$ 이다. Fibonacci 수에서는 $D=5$ 이고, $323=17\cdot 19$ 는 $17\mid F_{18}$, $19\mid F_{18}$, $18\mid 324$ 이므로 $323\mid F_{324}$ 가 되어 통과한다.

$2047$ 은 $F_{2048}$ 을 나누지 않고, $323$ 은 밑 $2$ 의 판정에서 떨어진다. 한 판정은 $n-1$ 의 약수로, 다른 판정은 $n+1$ 의 약수로 위수를 맞춰야 하므로 두 조건을 함께 만족하는 합성수를 만들기 어렵다.

# 정의

$n$ 은 제곱수가 아닌 홀수다.

**Selfridge 매개변수(Selfridge parameters)** 는 $5,-7,9,-11,13,\dots$ 에서 Jacobi 기호(Jacobi symbol) $(D/n)$ 이 $-1$ 인 첫 $D$ 와 $P=1$, $Q=(1-D)/4$ 다. 도중에 $(D/n)=0$ 인 $D$ 가 나오고 $\vert D\vert\ne n$ 이면 $n$ 은 합성수다. $n=323$ 이면 $(5/323)=-1$ 이어서 $D=5$, $Q=-1$ 이고 Lucas 수열은 Fibonacci 수다.

$n$ 이 **Lucas 확률소수(Lucas probable prime)** 라는 것은 Selfridge 매개변수의 Lucas 수열이 다음을 만족하는 것이다.

$$
U_{n+1}\equiv 0\pmod n
$$

이것을 만족하는 합성수를 **Lucas 유사소수(Lucas pseudoprime)** 라 한다. $323$, $377$, $1159$ 가 처음 세 개다.

**Baillie–PSW 판정** 은 $n$ 이 밑 $2$ 의 강한 확률소수(strong probable prime)이고 Lucas 확률소수이면 소수라고 답하고, 어느 하나라도 아니면 합성수라고 답한다.

# 성질

## 계산량

$U_{n+1}$ 은 배수 공식 $U_{2k}=U_kV_k$, $V_{2k}=V_k^2-2Q^k$ 과 한 칸 옮기는 공식으로 $n+1$ 의 이진 자릿수를 따라 계산한다. 곱셈은 $O(\log n)$ 번이고, Miller–Rabin 판정 몇 번의 계산량과 같은 규모다.

## 반례가 알려지지 않음

Baillie–PSW 판정을 통과하는 합성수는 알려진 것이 없고, $2^{64}$ 보다 작은 합성수는 모두 떨어진다는 것이 계산으로 확인되었다.[^1] Pomerance 는 그런 합성수가 무한히 많을 것이라는 발견적 논증을 냈다.[^2] 따라서 이 판정은 확률적 판정이 아니면서 증명된 판정도 아니다.

## Lucas 판정의 강한 꼴

$n+1=2^sd$ 이고 $d$ 가 홀수일 때 $U_d\equiv 0$ 이거나 어떤 $0\le r\lt s$ 에서 $V_{2^rd}\equiv 0$ 이면 $n$ 을 **강한 Lucas 확률소수(strong Lucas probable prime)** 라 한다. Miller–Rabin 판정이 Fermat 판정을 강화한 것과 같은 방식이고, 소수는 모두 이 조건을 만족한다. 이 조건을 만족하는 가장 작은 합성수는 $5459$ 다. 실제 구현은 대개 이 강한 꼴을 쓴다.

# 활용

- 여러 수학 소프트웨어와 암호 라이브러리가 큰 정수의 소수 판정 기본값으로 이 판정을 쓴다. [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 키 생성에서 후보 소수를 거르는 단계가 그런 자리다.
- $2^{64}$ 보다 작은 수에서는 이 판정이 결정론적 판정이다. 더 큰 수의 소수성을 증명해야 하면 [타원곡선 소수 증명](elliptic-curve-primality-proving.md)으로 증명서를 만든다.

[^1]: R. Baillie, A. Fiori, S. S. Wagstaff Jr., "Strengthening the Baillie-PSW primality test", *Mathematics of Computation* **90** (2021), 1931–1955.
[^2]: C. Pomerance, "Are there counter-examples to the Baillie–PSW primality test?", *Dopo Le Parole* (1984).

# 연관 문서

## 선수지식

- [Miller–Rabin 판정](miller-rabin-test.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography
