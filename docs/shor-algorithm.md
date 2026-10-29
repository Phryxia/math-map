# Shor 알고리즘

# 개요

**Shor 알고리즘(Shor's algorithm)** 은 [양자 회로](quantum-circuits.md)로 큰 수를 빠르게 소인수분해하는 알고리즘이다. $7^x\bmod 15$ 는 $1,7,4,13,1,\dots$ 로 주기가 $4$ 이므로 $(7^2-1)(7^2+1)$ 이 $15$ 의 배수이고 $\gcd(48,15)=3$ 과 $\gcd(50,15)=5$ 가 인수로 나오지만, 큰 수에서 주기를 하나씩 계산해 찾으면 주기만큼의 계산이 들고 주기는 $N$ 규모일 수 있다. Shor 알고리즘은 모든 $x$ 의 중첩에서 $a^x\bmod N$ 을 한 번에 계산하고, 양자 Fourier 변환으로 주기를 읽어 낸다.

# 직관

Shor 알고리즘은 정수 $N$ 의 소인수분해와 유한 순환군의 이산로그를 양자 회로로 $\log N$ 의 다항 시간에 푸는 알고리즘이다(Shor, 1994). 소인수분해를 함수 $x\mapsto a^x\bmod N$ 의 주기를 찾는 문제로 바꾸고, 주기를 양자 Fourier 변환으로 읽어 낸 뒤 [연분수](continued-fractions.md)로 복원한다. 고전 알고리즘으로는 두 문제 모두 다항 시간 알고리즘이 알려져 있지 않다.

$N=15$ 를 $a=7$ 로 인수분해한다. $7^x\bmod 15$ 는 $x=0,1,2,3,4,\dots$ 에서 $1,7,4,13,1,\dots$ 이고 주기가 $r=4$ 다. $7^4\equiv 1$ 이므로 $(7^2-1)(7^2+1)=48\cdot 50$ 이 $15$ 의 배수이고, $\gcd(48,15)=3$ 과 $\gcd(50,15)=5$ 가 인수다. 주기만 알면 인수가 나온다.

주기를 고전적으로 찾으려면 $a^x\bmod N$ 을 여러 $x$ 에서 계산해 같은 값이 다시 나올 때까지 기다려야 하고, 주기가 $N$ 규모면 계산 횟수도 그 규모다. 양자 회로는 모든 $x$ 의 중첩에서 $a^x\bmod N$ 을 한 번에 계산한다. 둘째 레지스터를 측정하면 첫 레지스터에는 $x_0,x_0+r,x_0+2r,\dots$ 만 같은 진폭으로 남는다. 간격 $r$ 인 빗 모양 벡터의 [이산 Fourier 변환](fourier.md)은 간격 $Q/r$ 인 빗이므로, 첫 레지스터를 Fourier 변환하고 측정하면 $Q/r$ 의 배수 근처의 값이 나온다.

# 정의

## 위수 찾기로의 환원

$N$ 이 홀수이고 소수의 거듭제곱이 아닌 합성수라 하자. $1\lt a\lt N$ 을 무작위로 고르고 $\gcd(a,N)\gt 1$ 이면 그것이 인수다. 아니면 $a$ 의 위수 $r$, 곧 $a^r\equiv 1\pmod N$ 인 가장 작은 양의 정수를 구한다. $r$ 이 짝수이고 $a^{r/2}\not\equiv -1\pmod N$ 이면

$$
N\mid(a^{r/2}-1)(a^{r/2}+1),\qquad N\nmid a^{r/2}\pm 1
$$

이므로 $\gcd(a^{r/2}-1,N)$ 이 $N$ 의 자명하지 않은 인수다. [중국인의 나머지 정리](chinese-remainder-theorem.md)로 $(\mathbb Z/N\mathbb Z)^\times$ 를 소인수별로 나누어 세면 무작위 $a$ 에서 이 조건이 확률 $1/2$ 이상으로 성립한다[^1].

## 양자 Fourier 변환

$Q=2^q$ 에서 **양자 Fourier 변환(quantum Fourier transform)** 은

$$
\vert x\rangle\mapsto\frac1{\sqrt Q}\sum_{y=0}^{Q-1}e^{2\pi ixy/Q}\vert y\rangle
$$

로 정의되는 유니터리 사상이다. 진폭 벡터에 이산 Fourier 변환 [행렬](matrices.md)을 곱하는 것이고, Hadamard 게이트 $q$ 개와 제어 위상 게이트 $q(q-1)/2$ 개로 이루어진 회로로 구현된다.

## 위수 찾기 회로

$N^2\le Q\lt 2N^2$ 인 $Q=2^q$ 를 잡는다.

1. 첫 레지스터에 Hadamard 게이트를 걸어 $Q^{-1/2}\sum_x\vert x\rangle\vert 0\rangle$ 을 만든다.
2. 반복 제곱법을 가역 회로로 옮겨 $\vert x\rangle\vert 0\rangle\mapsto\vert x\rangle\vert a^x\bmod N\rangle$ 을 계산한다.
3. 첫 레지스터에 양자 Fourier 변환을 걸고 측정해 $y$ 를 얻는다.
4. $y/Q$ 의 연분수 전개에서 분모가 $N$ 미만인 근사분수 $k/r'$ 을 구하고 $a^{r'}\equiv 1$ 인지 확인한다.

# 성질

## 측정값과 주기

측정값 $y$ 는 적당한 정수 $k$ 에 대해 $\vert y/Q-k/r\vert\le 1/(2Q)$ 를 만족하는 것이 확률 $4/\pi^2$ 이상으로 나온다. $Q\ge N^2\gt r^2$ 이므로 $1/(2Q)\lt 1/(2r^2)$ 이고, 이 범위의 근사분수는 반드시 연분수 전개의 수렴분수다(Legendre 정리, Legendre's theorem). 따라서 4 단계에서 기약분수 $k/r$ 이 나오고, $\gcd(k,r)=1$ 이면 분모가 $r$ 이다. $k$ 가 $r$ 과 서로소일 확률은 $\Omega(1/\log\log r)$ 이므로 $O(\log\log N)$ 번 반복하면 $r$ 이 나온다[^1].

## 회로 크기

$n=\log_2 N$ 이라 하면 양자 Fourier 변환은 $O(n^2)$ 게이트이고, 2 단계의 거듭제곱은 곱셈 $O(n)$ 번에 학교식 곱셈 $O(n^2)$ 을 써서 $O(n^3)$ 게이트다. 전체 회로 크기는 $O(n^3)$ 이고, 고전 전처리와 연분수 계산을 합쳐 소인수분해가 다항 시간에 끝난다. 그래서 소인수분해가 BQP(bounded-error quantum polynomial time)에 속한다.

## 이산로그와 숨은 부분군 문제

순환군 $\langle g\rangle$ 의 위수 $r$ 을 알 때 $h=g^s$ 의 $s$ 를 구하려면 $f(x,y)=g^xh^{-y}$ 를 $(\mathbb Z/r\mathbb Z)^2$ 위에서 본다. $f$ 는 부분군 $\lbrace(ks,k)\rbrace$ 의 잉여류에서 일정하므로, 두 레지스터에 양자 Fourier 변환을 걸어 측정하면 $(u,v)$ 가 $us+v\equiv 0\pmod r$ 근처에서 나오고 $s$ 를 푼다. 두 경우 모두 유한 아벨군 위에서 잉여류마다 일정한 함수로부터 부분군을 찾는 숨은 부분군 문제(hidden subgroup problem)이고, 유한 아벨군에서는 같은 방법이 다항 시간에 통한다.

# 활용

- [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman). 공개된 법 $N$ 을 인수분해하면 비밀 지수가 나오므로, 충분히 큰 양자 컴퓨터 앞에서 RSA 는 안전하지 않다.
- [이산로그](discrete-logarithm.md) 기반 암호. 유한체의 곱셈군과 [타원곡선](elliptic-curves.md)의 유리점 군에서 이산로그가 같은 방법으로 풀리므로 Diffie–Hellman 키 교환과 타원곡선 서명이 함께 무너진다.
- [양자 내성 암호](post-quantum-cryptography.md). 격자 문제처럼 아벨 숨은 부분군 문제로 환원되지 않는 문제에 암호를 세우는 방향이 여기서 나왔다.

[^1]: P. W. Shor, Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer, *SIAM Journal on Computing* 26 (1997), 1484–1509.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [이산 Fourier 변환](fourier.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #number_theory #cryptography
