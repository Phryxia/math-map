# 이산로그

# 개요

**이산로그(discrete logarithm)** 는 순환군에서 $g^x=h$ 를 만족하는 지수 $x$ 다. $3^x$ 를 $17$ 로 나눈 나머지가 $12$ 가 되는 $x$ 를 찾을 때, $3^x$ 의 나머지를 계산하기는 쉽지만 나머지들이 순서 없이 흩어져 있어 $x$ 를 하나씩 시험하는 것 말고는 좁혀 갈 단서가 보이지 않는다. 이산로그는 이렇게 한 방향 계산은 쉽고 반대 방향은 어려운 성질로, 공개 채널에서 비밀키를 합의하는 암호의 안전성을 준다.

# 직관

[실수](real-numbers.md)에서 $2^x=1000$ 을 풀 때는 $x$ 를 키우면 값이 커진다는 사실을 쓴다. $2^9=512$ 는 작고 $2^{10}=1024$ 는 크므로 $x$ 는 $9$ 와 $10$ 사이에 있고, 구간을 반씩 줄여 가면 답에 다가간다.

[합동 연산](modular-arithmetic.md)에서 $3^x\equiv 12\pmod{17}$ 을 같은 방법으로 풀려고 한다. $3$ 의 거듭제곱을 $17$ 로 나눈 나머지는 다음과 같다.

$$
3,\ 9,\ 10,\ 13,\ 5,\ 15,\ 11,\ 16,\ 14,\ 8,\ 7,\ 4,\ 12,\ 2,\ 6,\ 1
$$

$3^4\equiv 13$ 은 목표 $12$ 보다 크지만 답은 $x=13$ 이다. 나머지가 크고 작은 것이 $x$ 의 위치를 알려 주지 않으므로 구간을 줄일 수 없고, 앞에서부터 하나씩 시험해 열세 번째에야 찾는다. 법이 $2^{256}$ 근처의 소수이면 이 시험은 현실적인 시간 안에 끝나지 않는다.

반대 방향은 빠르다. $3^{13}$ 을 구할 때 제곱을 되풀이해 $3^2\equiv 9$, $3^4\equiv 13$, $3^8\equiv 16$ 을 얻고 $13=8+4+1$ 이므로 $16\cdot 13\cdot 3=624\equiv 12$ 다. 곱셈 횟수가 지수의 자릿수 정도이므로 지수가 $2^{256}$ 근처여도 곱셈 수백 번이면 된다.

하나씩 시험하는 것보다는 빠르게 할 수 있다. $x=4i+j$ ($0\le j\lt 4$) 로 쪼개면 $3^x\equiv 12$ 는 $3^j\equiv 12\cdot 3^{-4i}$ 와 같다. 왼쪽 네 값 $1,3,9,10$ 을 표에 적는다. $3^{-4}\equiv 4$ 이므로 오른쪽은 $12, 14, 5, 3$ 이고, $i=3$ 에서 $3$ 이 표에 있어 $j=1$, $x=13$ 이다. 법이 $p$ 이면 표의 크기와 시험 횟수가 모두 $\sqrt p$ 정도로 줄지만, $\sqrt p$ 도 $p$ 의 자릿수에 대해 지수적으로 크다.

# 정의

## 문제

순환군 $G = \langle g\rangle$ 의 위수를 $N$ 이라 하자. **이산로그 문제(discrete logarithm problem)** 는 주어진 $h \in G$ 에 대해 다음을 만족하는 $x \in \mathbb Z/N\mathbb Z$ 를 찾는 것이다.

$$
g^x=h
$$

직관 절의 예는 $G=(\mathbb Z/17\mathbb Z)^\times$, $g=3$, $h=12$ 인 경우다. $3$ 은 법 $17$ 의 [원시근](primitive-roots.md)이므로 $N=16$ 이고 답은 $x=13\in\mathbb Z/16\mathbb Z$ 다. $x=29$ 도 $3^{29}\equiv 12$ 를 만족하지만 $\mathbb Z/16\mathbb Z$ 에서 $13$ 과 같은 원소다.

$G$ 가 [타원곡선](elliptic-curves.md)의 점들이 이루는 군이면 덧셈 표기로 $xP = Q$ 를 푸는 문제가 된다.

## 관련된 세 문제

| 문제 | 주어진 것 | 구할 것 |
|---|---|---|
| 이산로그(discrete logarithm, DL) | $g, g^a$ | $a$ |
| 계산적 Diffie–Hellman(computational Diffie–Hellman, CDH) | $g, g^a, g^b$ | $g^{ab}$ |
| 판정적 Diffie–Hellman(decisional Diffie–Hellman, DDH) | $g, g^a, g^b, z$ | $z = g^{ab}$ 인가 |

법 $17$ 에서 $g=3$, $a=5$, $b=2$ 로 두면 $g^a\equiv 5$, $g^b\equiv 9$ 다. DL 은 $5$ 에서 $a=5$ 를, CDH 는 $5$ 와 $9$ 에서 $g^{ab}=3^{10}\equiv 8$ 을 구하는 문제다. DDH 는 $z=8$ 이 주어지면 "그렇다", $z=7$ 이 주어지면 "아니다" 를 답하는 문제다.

## Diffie–Hellman 키 교환

**Diffie–Hellman 키 교환(Diffie–Hellman key exchange)** 은 공개 파라미터 $(G, g, N)$ 을 두고 다음 세 단계로 공유 비밀 $g^{ab}$ 를 만드는 절차다. Diffie 와 Hellman 이 1976 년에 제시했다.

1. 앨리스가 $a$ 를 무작위로 고르고 $A = g^a$ 를 보낸다.
2. 밥이 $b$ 를 무작위로 고르고 $B = g^b$ 를 보낸다.
3. 앨리스는 $B^a$ 를, 밥은 $A^b$ 를 계산한다.

$$
B^a=g^{ba}=g^{ab}=A^b
$$

법 $17$, $g=3$ 에서 앨리스가 $a=5$, 밥이 $b=2$ 를 고르면 $A=5$, $B=9$ 가 오간다. 앨리스는 $9^5\equiv 8$ 을, 밥은 $5^2=25\equiv 8$ 을 얻어 같은 값 $8$ 에 이른다.

# 성질

## 세 문제 사이의 환원

DL 을 풀면 CDH 를, CDH 를 풀면 DDH 를 푼다. 역방향의 환원은 일반적으로 알려져 있지 않아 셋을 별개의 가정으로 다룬다[^1]. [쌍선형 암호](pairing-based-cryptography.md)는 쌍선형 사상(bilinear map)을 가진 타원곡선에서 DDH 가 쉬우면서 CDH 는 어렵다는 가정을 쓴다[^1].

Diffie–Hellman 키 교환의 도청자는 $g, g^a, g^b$ 를 보지만 $g^{ab}$ 를 얻으려면 CDH 를 풀어야 한다. 위 예의 도청자는 $5$ 와 $9$ 를 보고 $8$ 을 구해야 한다.

## 알고리즘의 비교

| 알고리즘 | 시간 | 공간 | 적용 범위 |
| --- | --- | --- | --- |
| 완전 탐색 | $O(p)$ | $O(1)$ | 모든 군 |
| [Baby-step giant-step 알고리즘](baby-step-giant-step.md) | $O(\sqrt p)$ | $O(\sqrt p)$ | 모든 군 |
| [Pollard rho 알고리즘](pollard-rho.md) | $O(\sqrt p)$ | $O(1)$ | 모든 군 |
| [Pohlig–Hellman 방법](pohlig-hellman.md) | 가장 큰 소인수 $q$ 에 대해 $O(\sqrt q)$ | $O(1)$ | 위수가 매끄러운 군 |
| [지표 계산법](index-calculus.md) | 준지수 | 준지수 | [유한체](finite-fields.md)의 곱셈군 |

완전 탐색 다음의 두 알고리즘은 직관 절의 표 만들기처럼 시간을 $O(\sqrt p)$ 로 줄인다. 비트 길이 $n$ 에 대해 $2^{n/2}$ 이므로 여전히 지수 시간이고, $n$ 을 두 배로 늘리면 같은 안전성이 회복된다.

## 일반 군에서의 하한

군의 연산만 쓰고 원소의 표현을 보지 않는 알고리즘을 일반 군 알고리즘(generic group algorithm)이라 한다. Shoup 의 결과에 따르면 위수가 소수 $q$ 인 군에서 이런 알고리즘은 $\Omega(\sqrt q)$ 번의 연산을 필요로 한다.

baby-step giant-step 과 Pollard rho 가 이 모형에서 최적이므로, 더 빠른 알고리즘은 군 원소의 구체적 표현을 이용해야 한다.

## 군 위수의 소인수

군의 위수 $N$ 이 작은 소수들의 곱이면 Pohlig–Hellman 이 각 소인수 $q$ 마다 크기 $q$ 의 부분문제로 쪼개고 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 합친다. 난이도가 $\sqrt N$ 이 아니라 가장 큰 소인수의 제곱근으로 결정된다.

그래서 실무에서는 위수가 큰 소수이거나 큰 소인수를 가지는 군을 쓴다. $p$ 가 소수여도 곱셈군의 위수 $p-1$ 은 짝수이므로 $p = 2q+1$ 인 안전 소수(safe prime)를 고르거나 위수 $q$ 인 부분군으로 제한한다.

## 유한체에서의 준지수 시간

$(\mathbb Z/p\mathbb Z)^\times$ 는 원소가 정수로 표현되므로 그 구조를 쓸 수 있다. 지표 계산법은 작은 소수들의 곱으로 쪼개지는 원소를 모아 선형방정식을 세운 뒤 로그를 한꺼번에 구한다. 걸리는 시간은 $p$ 의 자릿수에 대해 지수보다 느리게 늘어나는 준지수 시간(subexponential time)이다.

$$
L_p[1/3,c]=\exp\Big((c+o(1))(\ln p)^{1/3}(\ln\ln p)^{2/3}\Big)
$$

정수 소인수분해와 같은 형태이고 두 문제의 최선 알고리즘이 같은 구조를 공유하므로, [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)와 유한체 Diffie–Hellman 의 권장 키 길이가 비슷하다.

작은 표수의 유한체에서는 2013 년 이후 준다항식 시간 알고리즘이 나와 $\mathbb F_{2^n}$ 기반 구성이 폐기되었다.

## 타원곡선의 경우

타원곡선군에는 작은 소수로 쪼개진다는 개념이 없어 지표 계산법이 적용되지 않고 최선의 공격이 $O(\sqrt N)$ 이다.

128 비트 보안에 유한체는 3072 비트가 필요하고 타원곡선은 256 비트면 된다. 대역폭과 계산량이 줄어 현대 프로토콜이 타원곡선으로 옮겨 갔다.

곡선을 잘못 고르면 무너진다. 이상 곡선(anomalous curve)이나 MOV(Menezes–Okamoto–Vanstone) 공격에 취약한 작은 매장 차수(embedding degree)의 곡선이 그런 예이고, 표준 곡선을 쓰는 근거다.

## 중간자 공격

Diffie–Hellman 키 교환은 인증을 제공하지 않는다. 중간자 공격(man-in-the-middle attack)은 중간의 공격자가 양쪽과 각각 키 교환을 하면 두 세션을 읽으면서 중계하는 공격이다.

그래서 실제 프로토콜은 서명이나 사전 공유 비밀로 교환 값을 인증한다. TLS(transport layer security)에서 서버 인증서로 $g^b$ 에 서명하는 것이 그 절차다.

## 순방향 비밀성

세션마다 새 $a, b$ 를 뽑고 끝나면 버리는 방식이 임시 Diffie–Hellman(ephemeral Diffie–Hellman)이다. 지난 세션의 비밀이 이미 없어진 $a, b$ 에만 의존하므로 장기 키가 유출되어도 과거 세션은 복호되지 않고, 이 성질을 순방향 비밀성(forward secrecy)이라 한다.

RSA 키 전송 방식에는 이 성질이 없어 서버의 개인키가 유출되면 기록된 과거 트래픽이 풀린다. TLS 1.3 이 키 전송 방식을 제거하고 임시 Diffie–Hellman 만 남겼다.

## 양자 컴퓨터

[Shor 알고리즘](shor-algorithm.md)은 소인수분해와 이산로그를 다항시간에 푼다. 두 문제 모두 숨은 부분군 문제(hidden subgroup problem)의 특수한 경우이고 양자 [Fourier 변환](fourier-transform.md)이 주기를 찾는다.

충분한 규모의 양자 컴퓨터에서는 Diffie–Hellman 과 타원곡선 암호가 함께 무너지므로 타원곡선으로 옮기는 것은 도움이 되지 않는다. [격자 기반 후양자 암호](post-quantum-cryptography.md)를 비롯한 격자나 부호 기반 방식으로의 전환이 진행 중이다.

# 활용

- TLS, SSH(secure shell), Signal, WireGuard 가 Diffie–Hellman 을 핵심 부품으로 쓴다. 이 부품으로 대칭키를 공개 채널에서 합의한다. Signal 의 이중 래칫(double ratchet)은 메시지마다 새 교환을 수행해 순방향 비밀성과 침해 후 복구를 얻는다.
- ElGamal 암호(ElGamal encryption)와 [전자서명](digital-signatures.md) DSA(digital signature algorithm), ECDSA(elliptic curve digital signature algorithm) 서명이 같은 가정 위에 있다. 서명에서 난수를 재사용하면 개인키가 즉시 노출되고 실제 사고가 여러 번 있었다. 결정론적 난수 생성을 규정한 RFC(request for comments) 6979 가 그 대응이다.
- 이산로그 계산은 유한체와 대수군의 구조를 조사하는 도구이기도 하다. 곡선의 위수를 세거나 군의 구조를 결정하는 알고리즘의 부품으로 쓰이고, Pollard rho 와 kangaroo 방법(Pollard kangaroo method)은 해시 함수의 충돌 탐색에도 쓰인다.

[^1]: D. Boneh, "The decision Diffie–Hellman problem", Algorithmic Number Theory (ANTS-III), Lecture Notes in Computer Science 1423 (1998), 48–63. DL, CDH, DDH 사이에 알려진 환원과 알려지지 않은 환원, 그리고 DDH 가 쉬운 군의 예를 정리한다.

# 연관 문서

## 선수지식

- [군](groups.md)
- [정수의 합동](modular-arithmetic.md)
- [암호 개관](cryptography-overview.md)

## 더 알아보기

### 이산로그의 계산

- [Baby-step giant-step 알고리즘](baby-step-giant-step.md)
- [Pollard rho 알고리즘](pollard-rho.md)
- [지표 계산법](index-calculus.md)
- [타원곡선](elliptic-curves.md)

### 이산로그에 기반한 구성

- [영지식 증명](zero-knowledge-proofs.md)
- [일방향 함수](one-way-functions.md)
- [약속 방식](commitment-schemes.md)

### 다른 가정

- [격자 기반 후양자 암호](post-quantum-cryptography.md)

#cryptography #number_theory #group_theory
