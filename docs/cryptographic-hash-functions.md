# 암호 해시 함수

# 개요

**암호 해시 함수(cryptographic hash function)** 는 임의 길이의 비트열을 고정 길이 $n$ 비트로 줄이는 다항시간 함수로서, 같은 값을 내는 서로 다른 두 입력을 찾기 어려운 것이다. [전자서명](digital-signatures.md)은 긴 메시지 대신 그 해시값에 서명하고, Merkle 나무(Merkle tree)와 [약속 방식](commitment-schemes.md)도 해시값으로 긴 데이터를 대신한다.

입력이 출력보다 많으므로 [비둘기집 원리](pigeonhole-principle.md)로 같은 값을 내는 입력 쌍은 반드시 존재한다. 요구 조건은 그런 쌍이 없는 것이 아니라 찾는 데 오래 걸리는 것이다.

# 직관

앨리스가 계약서 $m$ 의 해시값 $H(m)$ 에 서명한다. 서명은 $H(m)$ 에만 붙어 있으므로, 누가 $H(m')=H(m)$ 인 다른 계약서 $m'$ 을 만들면 같은 서명이 $m'$ 의 서명으로도 통한다. 그래서 같은 해시값을 내는 두 입력을 찾기 어려워야 한다.

출력이 $n$ 비트이면 해시값은 $N=2^n$ 가지다. 공격자가 서로 다른 입력 $q$ 개의 해시값을 계산하면 쌍이 $q(q-1)/2$ 개 생기고, 해시값이 균등하게 퍼져 있다면 한 쌍이 같을 확률은 $1/N$ 이다. 그러면 $q$ 가 $\sqrt N$ 정도일 때 같은 값을 내는 쌍이 하나쯤 나온다. 256 비트 출력에서 이 공격은 $2^{128}$ 번 계산이 들고, 출력 길이를 정하는 기준이 이 수다.

# 정의

## 해시 함수족

함수족 $\lbrace H\_k\rbrace$ 는 키 생성 알고리즘이 $1^n$ 에서 키 $k$ 를 고르고, $H\_k:\lbrace 0,1\rbrace^\ast\to\lbrace 0,1\rbrace^{n}$ 을 다항시간에 계산하는 것이다. 다음 세 성질을 정의한다. 모두 확률적 다항시간 공격자 $A$ 의 성공 확률이 $n$ 에 대해 무시할 만하다는 뜻이다.

- **충돌 저항성(collision resistance).** $k$ 를 받은 $A$ 가 $x\ne x'$ 이고 $H\_k(x)=H\_k(x')$ 인 쌍을 낸다.
- **제2 원상 저항성(second-preimage resistance).** $k$ 와 무작위 $x$ 를 받은 $A$ 가 $x'\ne x$ 이고 $H\_k(x')=H\_k(x)$ 인 $x'$ 을 낸다.
- **원상 저항성(preimage resistance).** $k$ 와 무작위 $x$ 의 해시값 $y=H\_k(x)$ 를 받은 $A$ 가 $H\_k(x')=y$ 인 $x'$ 을 낸다. 이것은 $H\_k$ 가 [일방향 함수](one-way-functions.md)라는 조건이다.

하나로 고정된 함수에는 충돌 쌍이 존재하고 그 쌍을 상수로 출력하는 알고리즘이 항상 성공하므로, 정의는 키로 고른 함수족에 대해 한다. 실제로 쓰는 SHA-256(secure hash algorithm 256) 같은 함수는 키가 없고, 그 충돌 저항성은 알려진 공격이 생일 공격보다 빠르지 않다는 경험적 주장이다.

## 무작위 오라클 모형

**무작위 오라클 모형(random oracle model)** 은 모든 참가자가 해시 함수를 직접 계산하지 못하고, 입력마다 균등하게 고른 값을 돌려주는 공용 오라클에 질의로만 접근한다고 가정하는 증명 모형이다[^1]. [Fiat–Shamir 변환](fiat-shamir.md)과 해시 후 RSA 서명의 안전성 증명이 이 모형에서 이루어진다.

# 성질

## 세 성질의 관계

충돌 저항성은 제2 원상 저항성을 함의한다. 제2 원상을 찾는 알고리즘이 있으면 무작위 $x$ 를 스스로 골라 넣어 충돌 쌍 $(x,x')$ 을 얻는다. 제2 원상 저항성은 출력이 입력보다 충분히 짧을 때 원상 저항성을 함의한다. 원상을 찾는 알고리즘을 $H\_k(x)$ 에 적용하면 찾은 $x'$ 은 높은 확률로 $x$ 와 달라 제2 원상이 된다.

## 생일 한계

$N$ 개 값에서 균등하게 독립으로 $q$ 개를 뽑을 때 모두 다를 확률은 다음 이하다.

$$
\prod\_{i=1}^{q-1}\Bigl(1-\frac{i}{N}\Bigr)\le\exp\Bigl(-\frac{q(q-1)}{2N}\Bigr)
$$

$1-t\le e^{-t}$ 를 항마다 쓰면 된다. 그래서 $q\approx\sqrt{2N\ln 2}$ 에서 충돌 확률이 $1/2$ 를 넘는다. $n$ 비트 해시 함수의 충돌은 함수의 구조와 무관하게 $O(2^{n/2})$ 번의 계산으로 찾아지고, 이것을 **생일 공격(birthday attack)** 이라 한다.

## Merkle–Damgård 구성

고정 길이 압축 함수 $h:\lbrace 0,1\rbrace^{n+b}\to\lbrace 0,1\rbrace^n$ 에서 임의 길이 해시 함수를 만든다. 메시지 끝에 길이를 덧붙이고 $b$ 비트 블록 $m\_1,\dots,m\_\ell$ 로 나눈 뒤, 고정된 초기값 $z\_0$ 에서 다음을 반복한다.

$$
z\_i=h(z\_{i-1},m\_i),\qquad H(m)=z\_\ell
$$

**Merkle–Damgård 정리(Merkle–Damgård theorem).** $h$ 가 충돌 저항적이면 $H$ 도 충돌 저항적이다[^2][^3].

증명의 요지. $H(m)=H(m')$ 인 $m\ne m'$ 이 있으면 마지막 블록부터 거꾸로 $z\_i$ 를 비교한다. 길이가 다르면 마지막 블록이 다르므로 마지막 단계에서 $h$ 의 충돌이 나온다. 길이가 같으면 블록이 처음으로 다르거나 사슬 값이 처음으로 같아지는 자리에서 $h$ 의 충돌이 나온다.

이 구성의 해시값은 마지막 사슬 값 그대로이므로, $H(m)$ 만 알면 $m$ 을 모르고도 $m$ 뒤에 블록을 이어 붙인 메시지의 해시값을 계산할 수 있다. 그래서 비밀키 $k$ 에 대해 $H(k\Vert m)$ 을 인증 값으로 쓰면 위조된다.

## 이산로그로부터의 구성

위수가 소수 $q$ 인 군에서 생성원 $g$, $h$ 를 무작위로 고르면 다음은 충돌 저항적이다[^4].

$$
H(x,y)=g^xh^y,\qquad x,y\in\mathbb Z/q\mathbb Z
$$

$g^xh^y=g^{x'}h^{y'}$ 이고 $(x,y)\ne(x',y')$ 이면 $\log\_gh=(x-x')(y'-y)^{-1} \bmod q$ 다. 충돌을 찾는 알고리즘은 [이산로그](discrete-logarithm.md)를 계산한다. 이것은 Pedersen 약속과 같은 식이다.

## 일방향 함수와의 거리

일방향 함수에서 충돌 저항 함수를 만드는 블랙박스 구성은 존재하지 않는다[^5]. 일방향 함수만으로 얻는 것은 키를 먼저 받은 뒤 입력을 정한 공격자가 아니라, 입력 $x$ 를 먼저 정하고 키를 받은 공격자에 대한 제2 원상 저항성이다. 이 약한 함수를 범용 일방향 해시 함수(universal one-way hash function)라 하고, 전자서명의 Rompel 정리가 이것을 쓴다.

# 활용

- 해시 후 서명. 서명 방식은 메시지 대신 해시값에 서명한다. 충돌 저항성이 깨지면 서명이 두 메시지에 동시에 통한다.
- Merkle 나무. 데이터 블록의 해시값을 이진 나무로 쌓아 뿌리 해시값 하나로 전체를 대표한다. 블록 하나가 포함되었음을 블록 수의 로그만큼의 해시값으로 보인다.
- [메시지 인증 코드](message-authentication-codes.md). HMAC(hash-based message authentication code)은 $H\bigl((k\oplus\mathit{opad})\Vert H((k\oplus\mathit{ipad})\Vert m)\bigr)$ 로 길이 확장을 막는다[^6].
- 비밀번호 저장. 서버는 비밀번호에 무작위 문자열을 붙여 해시값만 저장하고, 원상 저항성이 비밀번호를 감춘다.
- 해시 기반 서명. 해시 함수의 안전성만 가정하는 서명은 Lamport 서명과 Merkle 나무에서 나왔고, [격자 기반 후양자 암호](post-quantum-cryptography.md)의 서명과 함께 NIST(National Institute of Standards and Technology)의 후양자 서명 표준에 SLH-DSA(stateless hash-based digital signature algorithm)로 들어 있다.

[^1]: M. Bellare, P. Rogaway, "Random oracles are practical: a paradigm for designing efficient protocols", ACM CCS 1993, 62–73.
[^2]: R. C. Merkle, "One way hash functions and DES", CRYPTO 1989, LNCS 435, 428–446.
[^3]: I. B. Damgård, "A design principle for hash functions", CRYPTO 1989, LNCS 435, 416–427.
[^4]: D. Chaum, E. van Heijst, B. Pfitzmann, "Cryptographically strong undeniable signatures, unconditionally secure for the signer", CRYPTO 1991, LNCS 576, 470–484.
[^5]: D. R. Simon, "Finding collisions on a one-way street: can secure hash functions be based on general assumptions?", EUROCRYPT 1998, LNCS 1403, 334–345.
[^6]: M. Bellare, R. Canetti, H. Krawczyk, "Keying hash functions for message authentication", CRYPTO 1996, LNCS 1109, 1–15.

# 연관 문서

## 선수지식

- [일방향 함수](one-way-functions.md)
- [비둘기집 원리](pigeonhole-principle.md)

## 더 알아보기

- [Fiat–Shamir 변환](fiat-shamir.md)
- [메시지 인증 코드](message-authentication-codes.md)

#cryptography #complexity #probability
