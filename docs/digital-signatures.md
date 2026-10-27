# 전자서명

# 개요

**전자서명(digital signature)** 은 비밀키를 가진 사람만 만들 수 있고 공개키를 가진 누구나 확인할 수 있는, 메시지에 붙이는 값이다. 은행이 계좌 이체 요청을 받으면 그 요청을 계좌 주인이 보냈는지, 도중에 금액이 바뀌지 않았는지 알아야 한다. 손글씨 서명은 다른 문서로 오려 붙일 수 있고, 비밀번호는 받는 쪽도 알아야 해서 받는 쪽이 요청을 꾸밀 수 있다. 전자서명은 메시지마다 비밀키로 다른 값을 계산해 붙이고, 받는 쪽은 공개키만으로 그 값이 이 메시지와 맞는지 확인한다.

# 직관

받는 사람은 메시지가 공개키의 주인에게서 왔고 도중에 바뀌지 않았음을 확인한다.

[RSA 암호](rsa-cryptosystem.md)의 $s=m^d \bmod n$ 이 처음 제안된 서명이다. 안전한 서명 방식이 존재하는 것은 [일방향 함수](one-way-functions.md)가 존재하는 것과 동치다.

앨리스가 공개 게시판에 한 비트 $m\in\lbrace 0,1\rbrace$ 를 올리고, 읽는 사람 누구나 그 비트를 앨리스가 올렸음을 확인하게 하고 싶다. 앨리스는 일방향 함수 $f$ 와 무작위 문자열 $x\_0$, $x\_1$ 을 골라 $y\_0=f(x\_0)$, $y\_1=f(x\_1)$ 을 미리 공개한다. 비트 $m$ 을 올릴 때 $x\_m$ 을 함께 올리고, 읽는 사람은 $f(x\_m)=y\_m$ 인지 계산한다.

다른 사람이 $1-m$ 을 앨리스의 이름으로 올리려면 $y\_{1-m}$ 의 원상을 찾아야 하고, 이것은 $f$ 를 역산하는 일이다. $n$ 비트 메시지는 비트마다 이 쌍을 하나씩 두어 서명한다. 이것이 Lamport 서명(Lamport signature)이다[^1].

이 방식으로 두 메시지에 서명하면 두 메시지가 다른 비트 자리에서 $x\_0$ 과 $x\_1$ 이 모두 공개되고, 그 자리를 섞은 메시지를 누구나 서명할 수 있다. 그래서 Lamport 서명은 키 하나로 한 번만 쓴다.

# 정의

## 서명 방식

서명 방식은 확률적 다항시간 알고리즘 셋 $(\mathrm{Gen},\mathrm{Sign},\mathrm{Verify})$ 이다.

1. $\mathrm{Gen}(1^n)$ 이 공개키 $\mathit{pk}$ 와 비밀키 $\mathit{sk}$ 를 낸다.
2. $\mathrm{Sign}(\mathit{sk},m)$ 이 서명 $\sigma$ 를 낸다.
3. $\mathrm{Verify}(\mathit{pk},m,\sigma)$ 가 받아들이거나 거절한다.

모든 $m$ 에 대해 $\mathrm{Verify}(\mathit{pk},m,\mathrm{Sign}(\mathit{sk},m))$ 이 받아들여야 한다.

## 선택 메시지 공격에 대한 존재적 위조 불가능성

공격자 $A$ 는 $\mathit{pk}$ 를 받고, 고른 메시지 $m\_1,\dots,m\_q$ 의 서명을 차례로 요청해 받는다. 마지막에 $A$ 가 $(m^\ast,\sigma^\ast)$ 을 내고, $m^\ast$ 이 요청한 메시지가 아니며 $\mathrm{Verify}(\mathit{pk},m^\ast,\sigma^\ast)$ 가 받아들이면 $A$ 가 이긴다. 모든 확률적 다항시간 $A$ 의 승리 확률이 $n$ 에 대해 무시할 만한 서명 방식을 **선택 메시지 공격에 대해 존재적으로 위조 불가능(existentially unforgeable under chosen-message attack, EUF-CMA)** 하다고 한다[^2]. $q=1$ 로 제한한 것이 **일회용 서명(one-time signature)** 의 안전성이다.

# 성질

## 일방향 함수와의 동치

**Rompel 정리(Rompel's theorem).** 일방향 함수가 존재하면 EUF-CMA 서명 방식이 존재한다[^3].

증명의 요지. Lamport 서명은 일회용 서명이다. 긴 메시지는 충돌을 찾기 어려운 압축 함수로 줄인 뒤 서명하고, Rompel 은 그런 함수의 약한 형태인 범용 일방향 해시 함수(universal one-way hash function)를 일방향 함수로부터 구성했다. 일회용 서명을 여러 번 쓰는 것은 공개키들을 이진 나무로 묶어 뿌리 하나만 공개하는 [Merkle 나무](merkle-trees.md)로 한다[^4]. 반대 방향은, 서명 방식이 있으면 $\mathrm{Gen}$ 의 난수에서 $\mathit{pk}$ 로 가는 함수가 일방향 함수라는 것이다.

## RSA 서명의 위조

$s=m^d \bmod n$ 을 그대로 쓰면 EUF-CMA 가 아니다. 공격자는 아무 $s$ 를 골라 $m=s^e \bmod n$ 을 계산하면 $(m,s)$ 를 얻는다. 또 $m\_1$, $m\_2$ 의 서명을 요청하면 다음이 성립한다.

$$
(m\_1m\_2)^d\equiv m\_1^d\thinspace m\_2^d \pmod n
$$

그래서 [해시 함수](cryptographic-hash-functions.md) $\mathcal H$ 를 먼저 적용해 $s=\mathcal H(m)^d \bmod n$ 으로 서명한다. $\mathcal H$ 를 무작위 함수로 모형화하는 무작위 오라클 모형(random oracle model)에서는, 이 방식을 위조하는 공격자로부터 $x^e \bmod n$ 을 역산하는 알고리즘이 나온다[^5].

## Schnorr 서명

[영지식 증명](zero-knowledge-proofs.md)의 Schnorr 프로토콜에 [Fiat–Shamir 변환](fiat-shamir.md)을 적용한 것이 Schnorr 서명(Schnorr signature)이다. 위수 $q$ 인 군에서 $h=g^x$ 가 공개키일 때 다음과 같다.

$$
t=g^k,\qquad c=\mathcal H(t,m),\qquad s=k+cx \bmod q
$$

서명은 $(c,s)$ 이고, 검증은 $\mathcal H(g^sh^{-c},m)=c$ 인지 본다. 무작위 오라클 모형에서 위조자를 두 번 돌려 같은 $t$ 에 다른 $c$ 를 받게 하면 이산로그 $x$ 가 나온다[^6].

같은 $k$ 로 두 메시지에 서명하면 $s\_1-s\_2=(c\_1-c\_2)x$ 이므로 공개된 값만으로 $x=(s\_1-s\_2)(c\_1-c\_2)^{-1} \bmod q$ 가 계산된다. 그래서 $k$ 는 서명마다 새로 무작위로 골라야 한다. [타원곡선](elliptic-curves.md) 군 위의 ECDSA(elliptic curve digital signature algorithm)도 같은 이유로 $k$ 를 다시 쓰면 비밀키가 드러난다.

# 활용

- 인증서. 인증 기관(certificate authority)이 웹 서버의 공개키와 이름의 쌍에 서명하고, 브라우저는 인증 기관의 공개키로 그 서명을 확인해 서버의 공개키를 받아들인다.
- 소프트웨어 배포. 배포자가 실행 파일의 해시값에 서명하고, 설치 프로그램이 내려받은 파일의 서명을 확인한다.
- 블록체인의 거래. 거래마다 보내는 사람의 서명이 붙고, 노드는 공개키로 확인한다. 쓰이는 방식은 타원곡선 위의 ECDSA 와 Schnorr 서명이다.
- 후양자 서명. Lamport 서명과 Merkle 나무를 쓰는 해시 기반 서명은 해시 함수의 안전성만 가정하므로 [격자 기반 후양자 암호](post-quantum-cryptography.md)와 함께 양자 컴퓨터 이후의 후보다.

[^1]: L. Lamport, "Constructing digital signatures from a one way function", SRI International Technical Report CSL-98 (1979).
[^2]: S. Goldwasser, S. Micali, R. L. Rivest, "A digital signature scheme secure against adaptive chosen-message attacks", SIAM Journal on Computing 17 (1988), 281–308.
[^3]: J. Rompel, "One-way functions are necessary and sufficient for secure signatures", STOC 1990, 387–394.
[^4]: R. C. Merkle, "A certified digital signature", CRYPTO 1989, LNCS 435, 218–238.
[^5]: M. Bellare, P. Rogaway, "The exact security of digital signatures: how to sign with RSA and Rabin", EUROCRYPT 1996, LNCS 1070, 399–416.
[^6]: D. Pointcheval, J. Stern, "Security arguments for digital signatures and blind signatures", Journal of Cryptology 13 (2000), 361–396.

# 연관 문서

## 선수지식

- [일방향 함수](one-way-functions.md)
- [RSA 암호](rsa-cryptosystem.md)

## 더 알아보기

- [블라인드 서명](blind-signatures.md)

#cryptography #complexity #number_theory
