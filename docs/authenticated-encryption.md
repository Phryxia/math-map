# 인증 암호화

# 개요

**인증 암호화(authenticated encryption)** 는 평문을 감추는 동시에, 받는 사람이 암호문이 도중에 바뀌지 않았는지 확인하게 하는 비밀키 암호화 방식이다. 평문에 키 수열을 비트마다 더해 암호화하면, 공격자는 평문을 몰라도 암호문의 한 비트를 뒤집어 복호된 평문의 같은 비트를 뒤집을 수 있다. 송금액이 적힌 자리를 노리면 금액이 바뀐다. 인증 암호화는 암호문에 키로만 만들 수 있는 꼬리표를 붙이고, 꼬리표가 맞지 않는 암호문은 복호하지 않고 거절한다.

# 직관

앨리스와 밥이 키 $k$ 를 공유하고, 앨리스는 무작위 $r$ 을 골라 $(r,\thinspace F\_k(r)\oplus m)$ 을 보낸다. $F\_k$ 는 키로 정해지는 함수이고 키를 모르면 무작위 함수와 구별되지 않으므로, 이 방식은 [의미론적 안전성](semantic-security.md)을 가진다. 그러나 중간의 사람이 둘째 성분에 $\Delta$ 를 배타적 논리합해 넘기면 밥은 $m\oplus\Delta$ 를 받고, 평문을 모르는 사람이 평문을 원하는 만큼 고쳤다.

그래서 앨리스는 다른 키 $k'$ 으로 [메시지 인증 코드](message-authentication-codes.md)(message authentication code, MAC) 꼬리표를 붙인다. 평문의 꼬리표 $\mathrm{Mac}\_{k'}(m)$ 을 암호문 옆에 붙이면, 결정적인 꼬리표는 같은 평문에 언제나 같은 값이라 도청자가 두 메시지의 평문이 같은지 알아낸다. 평문에 꼬리표를 붙인 뒤 통째로 암호화하면 밥은 먼저 복호해야 꼬리표를 확인할 수 있어서, 복호 과정의 오류가 정보를 흘린다.

암호문 $c$ 의 꼬리표 $\mathrm{Mac}\_{k'}(c)$ 를 붙이면 밥은 복호하기 전에 바뀐 암호문을 거절하고, 이 순서가 앞의 두 문제를 모두 피한다.

# 정의

## 비밀키 암호화

비밀키 암호화 방식은 확률적 다항시간 알고리즘 셋 $(\mathrm{Gen},\mathrm{Enc},\mathrm{Dec})$ 이다. $\mathrm{Gen}(1^n)$ 이 키 $k$ 를 내고, $\mathrm{Enc}(k,m)$ 은 난수를 써서 암호문을 내며, $\mathrm{Dec}(k,c)$ 는 평문이나 거절 기호 $\bot$ 을 낸다. 모든 $m$ 에 대해 $\mathrm{Dec}(k,\mathrm{Enc}(k,m))=m$ 이다.

예. 직관 절의 방식은 $\mathrm{Enc}(k,m)=(r,\thinspace F\_k(r)\oplus m)$, $\mathrm{Dec}(k,(r,c))=F\_k(r)\oplus c$ 이고, $F\_k(r)\oplus F\_k(r)\oplus m=m$ 이므로 위 조건을 만족한다. 이 $\mathrm{Dec}$ 는 $\bot$ 을 내지 않는다.

IND-CPA(indistinguishability under chosen-plaintext attack)와 IND-CCA2(indistinguishability under adaptive chosen-ciphertext attack)는 의미론적 안전성의 게임에서 공개키를 주는 대신 공격자에게 $\mathrm{Enc}(k,\cdot)$ 오라클을 주어 정의한다.

## 암호문 무결성

공격자 $A$ 는 $\mathrm{Enc}(k,\cdot)$ 오라클로 고른 평문의 암호문 $c\_1,\dots,c\_q$ 를 받는다. 마지막에 $A$ 가 $c^\ast$ 을 내고, $c^\ast$ 이 받은 암호문이 아니며 $\mathrm{Dec}(k,c^\ast)\ne\bot$ 이면 $A$ 가 이긴다. 모든 확률적 다항시간 $A$ 의 승리 확률이 무시할 만하면 방식이 **암호문 무결성(integrity of ciphertexts, INT-CTXT)** 을 가진다고 한다.

IND-CPA 이면서 INT-CTXT 인 방식이 인증 암호화다.

예. 직관 절의 방식에서 $A$ 가 평문 하나를 맡겨 $(r,c)$ 를 받고 $c^\ast=(r,\thinspace c\oplus 1)$ 을 내면, $c^\ast$ 은 받은 적 없는 암호문이고 $\mathrm{Dec}(k,c^\ast)=m\oplus 1\ne\bot$ 이다. $A$ 가 확률 $1$ 로 이기므로 이 방식은 IND-CPA 이지만 인증 암호화가 아니다. 꼬리표 $\mathrm{Mac}\_{k'}(c)$ 를 붙이면 $c\oplus 1$ 의 꼬리표를 만들어야 이기므로 승리 확률이 MAC 의 위조 확률로 줄어든다.

## 연관 데이터가 있는 인증 암호화

**연관 데이터가 있는 인증 암호화(authenticated encryption with associated data, AEAD)** 는 $\mathrm{Enc}(k,N,A,m)$ 과 $\mathrm{Dec}(k,N,A,c)$ 가 넌스(nonce) $N$ 과 연관 데이터 $A$ 를 함께 받는 방식이다[^2]. $A$ 는 감추지 않고 무결성만 보호하는 부분이고, 패킷 머리의 주소와 순번이 여기에 든다. 예를 들어 패킷마다 순번을 $N$ 으로, 받는 주소를 $A$ 로 두면, 중간의 사람이 주소만 바꿔 다른 사람에게 보낸 패킷은 복호에서 $\bot$ 이 나온다. 안전성 정의는 같은 $N$ 을 두 번 쓰지 않는 공격자에 대해서만 요구한다.

# 성질

## 선택 암호문 공격에 대한 안전성

정리. IND-CPA 이고 INT-CTXT 인 방식은 IND-CCA2 다[^1].

증명의 요지. IND-CCA2 공격자 $A$ 의 복호 요청에 언제나 $\bot$ 으로 답하는 게임을 만든다. $A$ 가 받은 적 없는 암호문을 보내 $\bot$ 이 아닌 답을 받는 사건은 INT-CTXT 위조이므로 확률이 무시할 만하고, 받은 암호문의 평문은 $A$ 가 이미 안다. 그래서 두 게임에서 $A$ 의 성공 확률의 차는 무시할 만하고, 바뀐 게임은 복호 오라클이 없는 IND-CPA 게임이다.

## 암호화 후 인증

정리. $(\mathrm{Gen},\mathrm{Enc},\mathrm{Dec})$ 가 IND-CPA 이고 MAC 방식이 강하게 위조 불가능하면, 독립인 두 키 $k,k'$ 으로 만든 다음 방식은 인증 암호화다[^1].

$$
c=\mathrm{Enc}(k,m),\qquad \mathrm{Enc}'((k,k'),m)=\bigl(c,\thinspace\mathrm{Mac}(k',c)\bigr)
$$

$\mathrm{Dec}'$ 은 꼬리표를 먼저 확인해 틀리면 $\bot$ 을 내고, 맞으면 $\mathrm{Dec}(k,c)$ 를 낸다. 받은 적 없는 $(c,t)$ 가 통과하면 MAC 의 강한 위조가 되므로 INT-CTXT 가 나온다. 꼬리표는 $k$ 와 독립인 키로 $c$ 에서만 계산되므로 IND-CPA 도 유지된다.

## 다른 두 순서

평문의 꼬리표를 암호문 옆에 붙이는 암호화 및 인증(encrypt-and-MAC)은 꼬리표가 결정적이면 IND-CPA 가 아니다. 공격자는 $m\_0$ 을 오라클로 암호화해 받은 꼬리표와 도전 암호문의 꼬리표를 비교한다.

평문과 꼬리표를 함께 암호화하는 인증 후 암호화(MAC-then-encrypt)는 일반적으로 INT-CTXT 를 주지 않는다. 블록 단위 암호화에서 평문 끝을 채우는 형식이 틀렸을 때와 꼬리표가 틀렸을 때 수신자의 응답이 다르면, 공격자는 암호문의 마지막 바이트를 바꿔 보내며 그 응답으로 평문을 한 바이트씩 알아낸다[^3]. 이 공격을 패딩 오라클 공격(padding oracle attack)이라 한다.

## 넌스 재사용

Galois/카운터 모드(Galois/counter mode, GCM)는 $F\_k(N\Vert i)$ 를 평문 블록과 배타적 논리합하고, 암호문 블록을 계수로 하는 다항식을 [유한체](finite-fields.md) $\mathbb F\_{2^{128}}$ 의 비밀 점 $H$ 에서 계산해 꼬리표를 만든다. 같은 $N$ 을 두 번 쓰면 두 암호문의 배타적 논리합이 두 평문의 배타적 논리합이 된다. 두 꼬리표의 차는 $H$ 에 대한 다항식 방정식을 주고, 그 근을 구하면 이후의 모든 메시지에 꼬리표를 위조할 수 있다[^4].

# 활용

- 통신 규약. TLS(transport layer security) 1.3 은 레코드 보호에 AEAD 만 허용하고, AES-GCM(advanced encryption standard GCM)과 ChaCha20-Poly1305 가 쓰인다[^5]. 레코드 순번이 넌스가 되고 레코드 머리가 연관 데이터가 된다.
- 하이브리드 공개키 암호화. 공개키로 대칭키를 감싸 보내고 메시지는 그 키로 인증 암호화한다. 공개키 쪽이 IND-CCA2 인 키 캡슐화(key encapsulation mechanism)이고 대칭 쪽이 인증 암호화이면 전체가 IND-CCA2 다.
- 개인 채널. [다자간 계산](secure-multiparty-computation.md)의 프로토콜이 가정하는 참가자 사이의 개인 채널을 인증 암호화로 구현한다.

[^1]: M. Bellare, C. Namprempre, "Authenticated encryption: relations among notions and analysis of the generic composition paradigm", ASIACRYPT 2000, LNCS 1976, 531–545.
[^2]: P. Rogaway, "Authenticated-encryption with associated-data", ACM CCS 2002, 98–107.
[^3]: S. Vaudenay, "Security flaws induced by CBC padding — applications to SSL, IPSEC, WTLS...", EUROCRYPT 2002, LNCS 2332, 534–545.
[^4]: A. Joux, "Authentication failures in NIST version of GCM", NIST 공개 의견서, 2006.
[^5]: E. Rescorla, "The Transport Layer Security (TLS) Protocol Version 1.3", RFC 8446, 2018, 5.2 절.

# 연관 문서

## 선수지식

- [메시지 인증 코드](message-authentication-codes.md)
- [의미론적 안전성](semantic-security.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #complexity #probability
