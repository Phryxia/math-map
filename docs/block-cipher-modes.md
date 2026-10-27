# 블록 암호 운용 모드

# 개요

**블록 암호 운용 모드(block cipher mode of operation)** 는 정해진 길이의 블록 하나만 암호화하는 블록 암호로 여러 블록짜리 메시지를 암호화하는 방법이다. $128$ 비트 블록을 하나씩 따로 암호화하면 같은 평문 블록이 늘 같은 암호문 블록이 되어, 메시지의 어느 부분이 반복되는지가 암호문에 그대로 드러난다. 운용 모드는 앞 암호문 블록을 다음 평문 블록에 섞거나 카운터를 암호화해 평문에 더하는 식으로 블록마다 다른 값을 섞어, 같은 평문 블록도 다른 암호문 블록이 되게 한다.

# 직관

블록 암호 운용 모드는 길이 $n$ 비트의 블록 하나를 암호화하는 블록 암호 $F_k$ 로 여러 블록의 메시지를 암호화하는 방법이다. 블록마다 따로 암호화하는 ECB(electronic codebook), 앞 암호문 블록을 다음 평문 블록에 섞는 CBC(cipher block chaining), 카운터를 암호화해 평문에 더하는 CTR(counter) 모드가 기본이다.

$F_k$ 가 [유사난수 순열](pseudorandom-permutations.md)이면 무작위 시작값을 쓰는 CBC 모드와 CTR 모드는 선택 평문 공격에 대해 [의미론적 안전성](semantic-security.md)을 갖고, ECB 모드는 갖지 않는다.

블록 암호 $F_k$ 는 $128$ 비트 블록을 $128$ 비트 블록으로 보내는 키 $k$ 의 순열이다. 메시지가 블록 $m_1,m_2,m_3$ 이면 가장 단순한 방법은 $F_k(m_1),F_k(m_2),F_k(m_3)$ 을 보내는 것이다. 그러면 $m_1=m_3$ 일 때 첫 암호문 블록과 셋째 암호문 블록이 같아, 키를 모르는 사람도 평문의 첫 블록과 셋째 블록이 같다는 것을 안다. 같은 메시지를 두 번 보내면 같은 암호문이 나가므로 "같은 메시지를 다시 보냈다" 는 것도 드러난다.

같은 평문이 같은 암호문이 되지 않으려면 암호화할 때마다 무작위로 고른 값이 들어가야 한다. 무작위 $r$ 을 고르고 $F_k(r+1),F_k(r+2),F_k(r+3)$ 을 만들어 평문 블록에 비트별로 더한다. 키를 모르면 이 세 블록은 무작위 비트와 구별되지 않으므로, 평문에 일회용 패드(one-time pad)를 더한 것과 같다. $r$ 은 암호문 앞에 붙여 보낸다.

# 정의

## 블록 암호

**블록 암호(block cipher)** 는 키 $k\in\lbrace 0,1\rbrace^\kappa$ 마다 순열 $F_k\colon\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^n$ 을 정하고 $F_k$ 와 $F_k^{-1}$ 을 효율적으로 계산하는 알고리즘이다. AES(advanced encryption standard)는 $n=128$ 이다. 안전성 목표는 $\lbrace F_k\rbrace$ 가 유사난수 순열인 것이다.

## 세 모드

메시지를 $n$ 비트 블록 $m_1,\dots,m_\ell$ 로 나눈다. $\oplus$ 는 비트별 배타적 논리합이다.

- ECB 모드. $c_i=F_k(m_i)$.
- CBC 모드. 초기화 벡터(initialization vector, IV) $c_0\in\lbrace 0,1\rbrace^n$ 을 균등하게 고르고 $c_i=F_k(m_i\oplus c_{i-1})$ 로 둔다. 복호는 $m_i=F_k^{-1}(c_i)\oplus c_{i-1}$ 이다.
- CTR 모드. $r\in\lbrace 0,1\rbrace^n$ 을 균등하게 고르고 $c_0=r$, $c_i=m_i\oplus F_k(r+i\bmod 2^n)$ 으로 둔다. 복호도 같은 식이다.

CBC 모드는 마지막 블록을 채우는 덧붙이기(padding)가 필요하고, 암호화가 앞 블록을 기다리므로 차례로만 계산한다. CTR 모드는 $F_k^{-1}$ 을 쓰지 않고, 블록마다 따로 계산하므로 병렬로 계산하며, 마지막 블록은 필요한 만큼만 잘라 쓴다.

## 선택 평문 공격에 대한 안전성

비밀키 암호화 방식 $\mathrm{Enc}$ 가 **IND-CPA(indistinguishability under chosen-plaintext attack)** 라는 것은 다음 게임에서 모든 확률적 다항시간 공격자의 이득이 무시할 만하다는 것이다. 공격자는 아무 메시지 $m$ 에 대해 $\mathrm{Enc}\_k(m)$ 을 받을 수 있다. 길이가 같은 두 메시지 $m_0,m_1$ 을 고르면 균등한 $b\in\lbrace 0,1\rbrace$ 에 대해 $\mathrm{Enc}\_k(m_b)$ 를 받고, 다시 암호화를 요청할 수 있으며, 마지막에 $b'$ 을 낸다. 이득은 $\vert\Pr\lbrack b'=b\rbrack-1/2\vert$ 다.

공개키 암호의 IND-CPA 게임에서 공개키 대신 암호화 질의를 주면 이 게임이 된다.

# 성질

## ECB 모드의 실패

ECB 모드는 결정적이므로 IND-CPA 가 아니다. 공격자는 $m_0$ 의 암호문을 질의로 받아 두고, 받은 암호문과 비교해 확률 $1$ 로 $b$ 를 맞힌다. 같은 이유로 IV 를 고정한 CBC 모드와 $r$ 을 고정한 CTR 모드도 IND-CPA 가 아니다.

## CTR 모드의 안전성

정리. $\lbrace F_k\rbrace$ 가 유사난수 함수이면 CTR 모드는 IND-CPA 다[^1][^2].

증명의 요지. $F_k$ 를 균등한 무작위 함수 $f$ 로 바꾼다. 공격자의 이득이 바뀌는 양은 유사난수 함수의 정의로 무시할 만하다. 메시지 $q$ 개가 각각 블록 $\ell$ 개 이하이면 메시지 $j$ 는 카운터 구간 $r_j+1,\dots,r_j+\ell$ 을 쓴다. 두 구간이 겹칠 확률은 $(2\ell-1)/2^n$ 이하이고, 모든 쌍에 대해 더하면 $q^2\ell/2^n$ 미만이다. 겹치지 않으면 도전 암호문의 패드 $f(r+i)$ 는 공격자가 본 적 없는 독립인 균등한 값이므로 $c_i$ 는 $b$ 와 독립이다.

$F_k$ 가 유사난수 순열일 때는 전환 보조정리(switching lemma)로 무작위 순열을 무작위 함수로 바꾸고, 블록 수의 합 $\sigma=q\ell$ 에 대해 $\sigma^2/2^{n+1}$ 이하가 이득에 더해진다.

## CBC 모드의 안전성

정리. $\lbrace F_k\rbrace$ 가 유사난수 순열이고 IV 를 암호화마다 균등하게 고르면 CBC 모드는 IND-CPA 다[^1].

증명의 요지. $F_k$ 를 무작위 함수로 바꾸면 암호화한 블록의 입력 $m_i\oplus c_{i-1}$ 들이 모두 다른 한 출력은 독립인 균등한 값이다. 앞 출력이 균등하므로 다음 입력이 앞의 입력과 같을 확률은 블록마다 $\sigma/2^n$ 이하이고, 전체가 $\sigma^2/2^n$ 이하다.

IV 를 공격자가 미리 알 수 있으면 CBC 모드는 IND-CPA 가 아니다. 도전 암호문이 $(c_0,c_1)$ 이고 다음 IV 가 $v$ 임을 알면, 공격자는 $m=v\oplus c_0\oplus m_0$ 을 질의한다. 그 암호문의 첫 블록은 $F_k(c_0\oplus m_0)$ 이므로 $b=0$ 일 때만 $c_1$ 과 같다.

## 생일 한계

두 정리의 이득에는 $\sigma^2/2^n$ 꼴의 항이 있으므로 같은 키로 암호화한 블록 수가 $2^{n/2}$ 근처에 이르면 보장이 사라진다. $n=64$ 인 블록 암호에서는 $2^{32}$ 블록, 곧 $32$ GiB 이고, CBC 모드에서 같은 암호문 블록 둘이 나오면 $m_i\oplus m_j=c_{i-1}\oplus c_{j-1}$ 이 드러나 평문 정보가 샌다[^3]. 그래서 64 비트 블록 암호 대신 $n=128$ 인 AES 를 쓴다.

## 무결성의 부재

세 모드 모두 암호문이 바뀐 것을 알아채지 못한다. CTR 모드에서 $c_i$ 의 한 비트를 뒤집으면 복호한 $m_i$ 의 같은 비트가 뒤집힌다. CBC 모드에서 $c_{i-1}$ 의 비트를 뒤집으면 $m_i$ 의 같은 비트가 뒤집힌다. 그래서 암호문을 고치는 공격까지 막으려면 [인증 암호화](authenticated-encryption.md)를 쓴다.

# 활용

- Galois/카운터 모드(Galois/counter mode, GCM). CTR 모드로 암호화하고 암호문 위의 다항식 해시로 꼬리표를 붙이는 인증 암호화다. TLS(transport layer security) 1.3 이 AES 와 함께 쓴다.
- CBC-MAC(cipher block chaining message authentication code). CBC 모드에서 IV 를 $0$ 으로 고정하고 마지막 블록만 남긴 것이 [메시지 인증 코드](message-authentication-codes.md)의 CBC-MAC 이다. 암호화에는 IV 를 무작위로 고르고, 인증에는 고정한다는 차이가 있다.
- 유사난수 생성기. CTR 모드의 패드 $F_k(r+1),F_k(r+2),\dots$ 는 키 $k$ 를 씨로 하는 [유사난수 생성기](pseudorandom-generators.md)의 출력이다. CTR 모드는 이 출력을 일회용 패드로 쓰는 스트림 암호다.

[^1]: M. Bellare, A. Desai, E. Jokipii, P. Rogaway, "A concrete security treatment of symmetric encryption", Proceedings of the 38th IEEE Symposium on Foundations of Computer Science (1997), 394–403.
[^2]: J. Katz, Y. Lindell, *Introduction to Modern Cryptography*, 3rd ed., CRC Press, 2020, §3.6.
[^3]: K. Bhargavan, G. Leurent, "On the practical (in-)security of 64-bit block ciphers: collision attacks on HTTP over TLS and OpenVPN", Proceedings of the 2016 ACM SIGSAC Conference on Computer and Communications Security, 456–467.

# 연관 문서

## 선수지식

- [유사난수 순열](pseudorandom-permutations.md)
- [의미론적 안전성](semantic-security.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #complexity #probability
