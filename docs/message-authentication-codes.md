# 메시지 인증 코드

# 개요

**메시지 인증 코드(message authentication code, MAC)** 는 두 사람이 공유한 비밀키로 메시지에 붙이는 짧은 값으로서, 키를 모르는 사람은 새 메시지에 맞는 값을 만들 수 없는 것이다. 받는 사람은 같은 키로 값을 다시 계산해 메시지가 도중에 바뀌지 않았고 키를 가진 상대가 보냈음을 확인한다.

[전자서명](digital-signatures.md)과 같은 위조 불가능성을 요구하지만 확인하는 데에도 비밀키가 필요하다. [유사난수 생성기](pseudorandom-generators.md) 문서의 유사난수 함수가 그대로 MAC 이 되고, 실제로 널리 쓰는 HMAC(hash-based message authentication code)은 [암호 해시 함수](cryptographic-hash-functions.md)로 만든다.

# 직관

앨리스가 밥에게 "철수에게 100 원을 보내라" 는 메시지 $m$ 을 보내고, 중간에 있는 사람이 메시지를 바꿀 수 있다. 두 사람이 비밀 비트열 $r$ 을 공유해 $c=m\oplus r$ 을 보내면 중간의 사람은 $m$ 을 읽지 못한다. 그러나 그 사람이 $c$ 에 아무 $\Delta$ 를 배타적 논리합해 넘기면 밥은 $m\oplus\Delta$ 로 복호한다. 금액이 적힌 비트 자리를 알면 $\Delta$ 를 골라 100 을 900 으로 바꿀 수 있고, 밥은 바뀐 것을 알지 못한다.

그래서 앨리스는 밥이 확인할 값 $t$ 를 메시지와 함께 보낸다. 두 사람이 메시지마다 $n$ 비트 값을 무작위로 적은 표 $f$ 를 공유하고 $t=f(m)$ 을 보낸다. 중간의 사람이 $(m,f(m))$ 쌍을 여럿 보아도 다른 메시지 $m'$ 의 칸 $f(m')$ 은 따로 뽑은 값이므로 그것을 맞힐 확률은 $2^{-n}$ 이다. 밥은 받은 $t$ 가 $f(m)$ 과 같은지 계산해 바뀐 메시지를 걸러 낸다.

메시지가 $\ell$ 비트이면 이 표는 $2^\ell$ 칸이라 공유할 수 없다. 표를 짧은 키 $k$ 로 계산하는 함수 $F\_k$ 로 바꾸고, 다항시간 공격자가 $F\_k$ 와 무작위 표를 구별하지 못하면 같은 논증이 통한다. 이런 $F\_k$ 가 유사난수 함수이고, 공유한 키로 계산해 붙이는 확인값 $t=F\_k(m)$ 이 메시지 인증 코드다.

# 정의

## MAC 방식

**MAC 방식(MAC scheme)** 은 확률적 다항시간 알고리즘 셋 $(\mathrm{Gen},\mathrm{Mac},\mathrm{Vrfy})$ 이다.

1. $\mathrm{Gen}(1^n)$ 이 키 $k$ 를 낸다.
2. $\mathrm{Mac}(k,m)$ 이 꼬리표(tag) $t$ 를 낸다.
3. $\mathrm{Vrfy}(k,m,t)$ 가 받아들이거나 거절한다.

모든 $m$ 에 대해 $\mathrm{Vrfy}(k,m,\mathrm{Mac}(k,m))$ 이 받아들여야 한다. $\mathrm{Mac}$ 이 결정적이면 $\mathrm{Vrfy}$ 는 $\mathrm{Mac}(k,m)$ 을 다시 계산해 $t$ 와 비교한다.

## 선택 메시지 공격에 대한 위조 불가능성

공격자 $A$ 는 키를 받지 않고, 고른 메시지 $m\_1,\dots,m\_q$ 의 꼬리표를 차례로 요청해 받는다. 마지막에 $A$ 가 $(m^\ast,t^\ast)$ 을 내고, $m^\ast$ 이 요청한 메시지가 아니며 $\mathrm{Vrfy}(k,m^\ast,t^\ast)$ 가 받아들이면 $A$ 가 이긴다. 모든 확률적 다항시간 $A$ 의 승리 확률이 $n$ 에 대해 무시할 만한 MAC 방식을 **선택 메시지 공격에 대해 존재적으로 위조 불가능(existentially unforgeable under chosen-message attack, EUF-CMA)** 하다고 한다.

조건을 "$(m^\ast,t^\ast)$ 이 받은 쌍이 아니다" 로 바꾸면 **강한 위조 불가능성(strong unforgeability)** 이다. 결정적인 $\mathrm{Mac}$ 에서는 메시지마다 맞는 꼬리표가 하나뿐이므로 두 정의가 같다.

# 성질

## 유사난수 함수로부터의 구성

정리. $\lbrace F\_k\rbrace$ 가 $n$ 비트를 출력하는 유사난수 함수족이면 $\mathrm{Mac}(k,m)=F\_k(m)$ 은 고정 길이 메시지에 대해 EUF-CMA 다[^1].

증명의 요지. 위조자 $A$ 로 구별자 $D$ 를 만든다. $D$ 는 오라클 $O$ 를 받아 $A$ 의 요청 $m\_i$ 에 $O(m\_i)$ 로 답하고, $A$ 가 낸 $(m^\ast,t^\ast)$ 에 대해 $O(m^\ast)=t^\ast$ 인지 출력한다. $O=F\_k$ 이면 $D$ 의 출력 확률은 $A$ 의 승리 확률이다. $O$ 가 균등한 무작위 함수이면 $O(m^\ast)$ 은 $A$ 가 본 적 없는 값이므로 그 확률은 $2^{-n}$ 이다. 두 확률의 차는 무시할 만하므로 $A$ 의 승리 확률은 $2^{-n}$ 에 무시할 만한 양을 더한 것 이하다.

[일방향 함수](one-way-functions.md)가 존재하면 유사난수 생성기가 존재하고, 그로부터 Goldreich–Goldwasser–Micali 구성으로 유사난수 함수가 존재한다. 그래서 일방향 함수가 존재하면 EUF-CMA 인 MAC 방식이 존재한다.

## CBC-MAC

$\lbrace F\_k\rbrace$ 가 $b$ 비트 블록을 $b$ 비트로 보내는 유사난수 함수일 때 $\ell$ 블록 메시지 $m=m\_1\cdots m\_\ell$ 의 **CBC-MAC(cipher block chaining MAC)** 은 다음이다.

$$
t\_0=0^b,\qquad t\_i=F\_k(t\_{i-1}\oplus m\_i),\qquad \mathrm{Mac}(k,m)=t\_\ell
$$

$\ell$ 을 고정하면 CBC-MAC 은 EUF-CMA 다[^2].

길이가 다른 메시지를 섞으면 위조된다. 한 블록 메시지 $m\_1$ 의 꼬리표 $t=F\_k(m\_1)$ 을 받은 공격자는 두 블록 메시지 $m\_1\Vert(m\_1\oplus t)$ 를 낸다. 그 꼬리표는 다음과 같이 $t$ 이고, 공격자는 이것을 요청하지 않고 계산했다.

$$
F\_k\bigl(F\_k(m\_1)\oplus m\_1\oplus t\bigr)=F\_k(m\_1)=t
$$

메시지 앞에 길이 $\ell$ 을 블록으로 덧붙이거나 마지막 사슬 값을 다른 키로 한 번 더 계산하면 가변 길이에서도 안전하다.

## HMAC

키가 없는 해시 함수 $H$ 에서 $H(k\Vert m)$ 을 꼬리표로 쓰면, Merkle–Damgård 구성의 해시값이 마지막 사슬 값 그대로이므로 $H(k\Vert m)$ 만으로 $m$ 뒤에 블록을 이어 붙인 메시지의 꼬리표가 계산된다. **HMAC** 은 해시를 두 번 겹쳐 이 공격을 막는다.

$$
\mathrm{HMAC}(k,m)=H\bigl((k\oplus\mathit{opad})\Vert H((k\oplus\mathit{ipad})\Vert m)\bigr)
$$

$\mathit{ipad}$ 와 $\mathit{opad}$ 는 서로 다른 고정 상수다. 바깥 해시의 입력은 고정 길이이므로 안쪽 해시값 뒤에 블록을 이어 붙여도 바깥 해시값은 계산되지 않는다. 압축 함수가 유사난수 함수이면 HMAC 은 유사난수 함수이고, 이 증명은 $H$ 의 충돌 저항성을 쓰지 않는다[^3].

## 일회용 MAC

계산 능력에 제한이 없는 공격자를 상대로도 메시지 하나는 인증할 수 있다. 소수 $p$ 에 대해 키를 $\mathbb Z/p\mathbb Z$ 의 균등한 쌍 $(a,b)$ 로 고르고 다음을 꼬리표로 쓴다[^4].

$$
\mathrm{Mac}((a,b),m)=am+b \bmod p
$$

공격자가 $(m,t)$ 를 본 뒤 $m'\ne m$ 과 $t'$ 을 낸다. $am+b=t$ 를 만족하는 키는 $p$ 개이고, 그 가운데 $am'+b=t'$ 도 만족하는 것은 $a=(t'-t)(m'-m)^{-1}$ 로 정해지는 하나뿐이다. 그래서 위조 확률은 정확히 $1/p$ 다. 함수 $m\mapsto am+b \bmod p$ 의 모임은 [범용 해시족](universal-hashing.md) 가운데 쌍마다 독립인 것이다. 같은 키로 두 메시지에 꼬리표를 붙이면 두 식에서 $(a,b)$ 가 풀리므로 키는 한 번만 쓴다.

# 활용

- [인증 암호화](authenticated-encryption.md). 암호화한 뒤 암호문에 MAC 을 붙이는 방식은 평문을 감추는 [의미론적 안전성](semantic-security.md)과 암호문의 위조 불가능성을 함께 가지며, 선택 암호문 공격에 대해 안전하다[^5]. 직관 절의 배타적 논리합 변조를 이 방식이 막는다.
- 통신 규약. TLS(transport layer security)와 IPsec(internet protocol security)이 레코드마다 MAC 을 붙인다. TLS 1.3 이 쓰는 AES-GCM(advanced encryption standard Galois/counter mode)과 ChaCha20-Poly1305 의 인증 부분은 일회용 MAC 의 다항식 꼴을 [유한체](finite-fields.md) 위에서 계산한다.
- 키 유도. HKDF(HMAC-based key derivation function)는 HMAC 을 유사난수 함수로 써서 [이산로그](discrete-logarithm.md)의 Diffie–Hellman 교환으로 합의한 값을 대칭키로 바꾼다[^6].

[^1]: J. Katz, Y. Lindell, *Introduction to Modern Cryptography*, 3판, CRC Press, 2020, 4.3 절.
[^2]: M. Bellare, J. Kilian, P. Rogaway, "The security of the cipher block chaining message authentication code", Journal of Computer and System Sciences 61 (2000), 362–399.
[^3]: M. Bellare, "New proofs for NMAC and HMAC: security without collision-resistance", CRYPTO 2006, LNCS 4117, 602–619.
[^4]: M. N. Wegman, J. L. Carter, "New hash functions and their use in authentication and set equality", Journal of Computer and System Sciences 22 (1981), 265–279.
[^5]: M. Bellare, C. Namprempre, "Authenticated encryption: relations among notions and analysis of the generic composition paradigm", ASIACRYPT 2000, LNCS 1976, 531–545.
[^6]: H. Krawczyk, "Cryptographic extraction and key derivation: the HKDF scheme", CRYPTO 2010, LNCS 6223, 631–648.

# 연관 문서

## 선수지식

- [유사난수 생성기](pseudorandom-generators.md)
- [암호 해시 함수](cryptographic-hash-functions.md)

## 더 알아보기

- [인증 암호화](authenticated-encryption.md)

#cryptography #complexity #probability
