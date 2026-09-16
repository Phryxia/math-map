# 이산로그와 Diffie–Hellman

# 개요

[합동 연산](modular-arithmetic.md)에서 $g^x \bmod p$ 는 반복 제곱으로 $O(\log x)$ 번의 곱셈에 계산된다. 그 역인 $g^x \equiv h$ 를 만족하는 $x$ 를 찾는 일은 어렵다고 믿어진다.

실수 위의 로그는 단조성을 이용해 좁혀 갈 수 있지만, 유한 [군](groups.md) 위에서는 값들이 순서 없이 흩어져 있어 국소적 정보로 전역해에 접근할 수 없다.

Diffie 와 Hellman 은 1976 년에 이 비대칭으로 공개 채널에서 비밀키를 합의하는 방법을 제시했다. 두 사람이 각자 비밀 지수를 고르고 거듭제곱한 값만 주고받으면 도청자는 같은 값에 도달할 수 없다.

# 직관

## 단조성의 부재

실수에서 $2^x = 1000$ 을 풀 때는 $x$ 를 키우면 값이 커진다는 단조성이 시행착오를 수렴시킨다. $\bmod p$ 에서는 $g^1, g^2, g^3, \dots$ 가 $1$ 과 $p-1$ 사이를 무작위처럼 튀므로 $g^x$ 가 목표보다 크다는 사실이 $x$ 에 대해 아무것도 말하지 않는다.

## 중간에서 만나기

$x = im + j$ 로 쪼개면 $g^x = h$ 가 $g^j = h\thinspace g^{-im}$ 이 된다. 왼쪽을 $m$ 개 만들어 표에 넣고 오른쪽을 하나씩 만들며 표를 찾으면 $m \approx \sqrt p$ 에서 두 작업이 균형을 이룬다.

$$
O(p)\ \longrightarrow\ O(\sqrt p)
$$

제곱근으로 줄어도 여전히 지수 시간이다. 비트 길이 $n$ 에 대해 $2^{n/2}$ 이므로 $n$ 을 두 배로 늘리면 안전성이 회복된다.

```mermaid
graph LR
  A["완전 탐색 O(p)"] --> B["Baby-step giant-step<br/>O(√p) 시간, O(√p) 공간"]
  B --> C["Pollard rho<br/>O(√p) 시간, O(1) 공간"]
  C --> D["Pohlig-Hellman<br/>군 위수의 소인수로 분해"]
  D --> E["지표 계산법<br/>준지수 시간, 유한체에서만"]
```

## 군 위수의 소인수

군의 위수 $N$ 이 작은 소수들의 곱이면 Pohlig–Hellman 이 각 소인수 $q$ 마다 크기 $q$ 의 부분문제로 쪼개고 중국인의 나머지 정리로 합친다. 난이도가 $\sqrt N$ 이 아니라 가장 큰 소인수의 제곱근으로 결정된다.

그래서 실무에서는 위수가 큰 소수이거나 큰 소인수를 가지는 군을 쓴다. $p$ 가 소수여도 곱셈군의 위수 $p-1$ 은 짝수이므로 $p = 2q+1$ 인 안전 소수를 고르거나 위수 $q$ 인 부분군으로 제한한다.

# 정의

## 문제

순환군 $G = \langle g\rangle$ 의 위수를 $N$ 이라 하자. **이산로그 문제**는 주어진 $h \in G$ 에 대해 다음을 만족하는 $x \in \mathbb Z/N\mathbb Z$ 를 찾는 것이다.

$$
g^x=h
$$

$G$ 가 $(\mathbb Z/p\mathbb Z)^\times$ 이면 $N = p-1$ 이고, 타원곡선군이면 덧셈 표기로 $xP = Q$ 를 푸는 문제가 된다.

## 관련된 세 문제

| 문제 | 주어진 것 | 구할 것 |
|---|---|---|
| 이산로그 (DL) | $g, g^a$ | $a$ |
| 계산적 Diffie–Hellman (CDH) | $g, g^a, g^b$ | $g^{ab}$ |
| 판정적 Diffie–Hellman (DDH) | $g, g^a, g^b, z$ | $z = g^{ab}$ 인가 |

DL 을 풀면 CDH 를, CDH 를 풀면 DDH 를 푼다. 역방향의 환원은 일반적으로 알려져 있지 않아 셋을 별개의 가정으로 다룬다[^1]. 쌍선형 사상을 가진 타원곡선에서는 DDH 가 쉬우면서 CDH 는 어려우리라 가정되고, 이 성질이 쌍선형 사상 기반 암호 구성의 재료가 되었다[^1].

## Diffie–Hellman 키 교환

공개 파라미터 $(G, g, N)$ 을 두고 진행한다.

1. 앨리스가 $a$ 를 무작위로 고르고 $A = g^a$ 를 보낸다.
2. 밥이 $b$ 를 무작위로 고르고 $B = g^b$ 를 보낸다.
3. 앨리스는 $B^a$ 를, 밥은 $A^b$ 를 계산한다.

$$
B^a=g^{ba}=g^{ab}=A^b
$$

도청자는 $g, g^a, g^b$ 를 보지만 $g^{ab}$ 를 얻으려면 CDH 를 풀어야 한다.

## 계산

```python
import math, random

p, g = 1000003, 2          # p 는 소수, g 는 원시근 후보

def bsgs(g, h, p):
    """Shanks 의 baby-step giant-step: g^x = h (mod p) 를 O(sqrt(p)) 에."""
    m = math.isqrt(p - 1) + 1
    table = {}
    e = 1
    for j in range(m):                       # baby step: g^j
        table.setdefault(e, j)
        e = e * g % p
    factor = pow(g, -m, p)                   # g^{-m}
    e = h
    for i in range(m):                       # giant step: h * g^{-im}
        if e in table:
            return i * m + table[e]
        e = e * factor % p
    return None

x_true = 726431
h = pow(g, x_true, p)
x = bsgs(g, h, p)
print("찾은 x:", x, " 검증:", pow(g, x, p) == h)

# Diffie-Hellman: 두 사람이 같은 비밀을 얻는다
rng = random.Random(7)
a, b = rng.randrange(2, p - 1), rng.randrange(2, p - 1)
A, B = pow(g, a, p), pow(g, b, p)            # 공개로 주고받는 값
print("공유 비밀 일치:", pow(B, a, p) == pow(A, b, p) == pow(g, a * b, p))
```

백만 규모에서는 표가 천 개 남짓이다. 안전한 크기는 $p$ 가 2048 비트 이상이고 그때 $\sqrt p$ 는 $2^{1024}$ 다.

# 성질

## 일반 군에서의 하한

군의 연산만 쓰고 원소의 표현을 보지 않는 알고리즘을 일반 군 알고리즘이라 한다. Shoup 의 결과에 따르면 위수가 소수 $q$ 인 군에서 이런 알고리즘은 $\Omega(\sqrt q)$ 번의 연산을 필요로 한다.

baby-step giant-step 과 Pollard rho 가 이 모형에서 최적이므로, 더 빠른 알고리즘은 군 원소의 구체적 표현을 이용해야 한다.

## 유한체에서의 준지수 시간

$(\mathbb Z/p\mathbb Z)^\times$ 는 원소가 정수로 표현되므로 그 구조를 쓸 수 있다. 지표 계산법은 작은 소수들의 곱으로 쪼개지는 원소를 모아 선형방정식을 세운 뒤 로그를 한꺼번에 구하고, 시간은 다음과 같다.

$$
L_p[1/3,c]=\exp\Big((c+o(1))(\ln p)^{1/3}(\ln\ln p)^{2/3}\Big)
$$

정수 소인수분해와 같은 형태이고 두 문제의 최선 알고리즘이 같은 뼈대를 공유한다. RSA 와 유한체 Diffie–Hellman 의 권장 키 길이가 비슷한 것이 이 때문이다.

작은 표수의 유한체에서는 2013 년 이후 준다항식 시간 알고리즘이 나와 $\mathbb F_{2^n}$ 기반 구성이 폐기되었다.

## 타원곡선의 경우

타원곡선군에는 작은 소수로 쪼개진다는 개념이 없어 지표 계산법이 적용되지 않고 최선의 공격이 $O(\sqrt N)$ 이다.

128 비트 보안에 유한체는 3072 비트가 필요하고 타원곡선은 256 비트면 된다. 대역폭과 계산량이 줄어 현대 프로토콜이 타원곡선으로 옮겨 갔다.

곡선을 잘못 고르면 무너진다. 이상 곡선이나 MOV 공격에 취약한 작은 매장 차수의 곡선이 그런 예이고, 표준 곡선을 쓰는 근거다.

## 중간자 공격

Diffie–Hellman 은 인증을 제공하지 않는다. 중간의 공격자가 양쪽과 각각 키 교환을 하면 두 세션을 읽으면서 중계할 수 있다.

그래서 실제 프로토콜은 서명이나 사전 공유 비밀로 교환 값을 인증한다. TLS 에서 서버 인증서로 $g^b$ 에 서명하는 것이 그 절차다.

## 순방향 비밀성

세션마다 새 $a, b$ 를 뽑고 끝나면 버리는 방식이 임시 Diffie–Hellman 이다. 지난 세션의 비밀이 이미 없어진 $a, b$ 에만 의존하므로 장기 키가 유출되어도 과거 세션은 복호되지 않는다.

RSA 키 전송 방식에는 이 성질이 없어 서버의 개인키가 유출되면 기록된 과거 트래픽이 풀린다. TLS 1.3 이 키 전송 방식을 제거하고 임시 Diffie–Hellman 만 남겼다.

## 양자 컴퓨터

Shor 알고리즘은 소인수분해와 이산로그를 다항시간에 푼다. 두 문제 모두 숨은 부분군 문제의 특수한 경우이고 양자 Fourier 변환이 주기를 찾는다.

충분한 규모의 양자 컴퓨터에서는 Diffie–Hellman 과 타원곡선 암호가 함께 무너지므로 타원곡선으로 옮기는 것은 도움이 되지 않는다. 격자나 부호 기반 후양자 암호로의 전환이 진행 중이다.

# 활용

- TLS, SSH, Signal, WireGuard 가 Diffie–Hellman 을 핵심 부품으로 쓴다. 대칭키를 공개 채널에서 합의하는 것이 그 역할이다. Signal 의 이중 래칫은 메시지마다 새 교환을 수행해 순방향 비밀성과 침해 후 복구를 얻는다.
- ElGamal 암호와 DSA, ECDSA 서명이 같은 가정 위에 있다. 서명에서 난수를 재사용하면 개인키가 즉시 노출되고 실제 사고가 여러 번 있었다. 결정론적 난수 생성을 규정한 RFC 6979 이 그 대응이다.
- 이산로그 계산은 유한체와 대수군의 구조를 조사하는 도구이기도 하다. 곡선의 위수를 세거나 군의 구조를 결정하는 알고리즘의 부품으로 쓰이고, Pollard rho 와 kangaroo 방법은 해시 함수의 충돌 탐색에도 쓰인다.

[^1]: D. Boneh, "The decision Diffie–Hellman problem", Algorithmic Number Theory (ANTS-III), Lecture Notes in Computer Science 1423 (1998), 48–63. DL, CDH, DDH 사이에 알려진 환원과 알려지지 않은 환원, 그리고 DDH 가 쉬운 군의 예를 정리한다.

# 연관 문서

## 선수지식

- [군](groups.md)
- [정수의 합동과 나머지 연산](modular-arithmetic.md)

## 더 알아보기

- [타원곡선과 군 구성](elliptic-curves.md)
- [격자 기반 후양자 암호](post-quantum-cryptography.md)

#cryptography #number_theory #group_theory
