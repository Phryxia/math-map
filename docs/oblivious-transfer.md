# 망각 전송

# 개요

**망각 전송(oblivious transfer)** 은 보내는 사람이 가진 메시지 두 개 가운데 받는 사람이 하나만 받되, 보내는 사람은 어느 것이 넘어갔는지 모르게 하는 두 사람 사이의 프로토콜이다. 서버에 기록이 두 개 있고 사용자가 그 가운데 하나를 받아야 할 때, 서버가 두 기록을 다 보내면 사용자가 다른 기록까지 알게 되고 사용자가 원하는 번호를 말하면 서버가 그 번호를 알게 된다. 망각 전송에서는 받는 사람이 공개키 두 개를 만들되 그 가운데 하나의 비밀키만 알고, 보내는 사람은 두 메시지를 각 공개키로 암호화해 보낸다. 받는 사람은 하나만 풀 수 있고, 보내는 사람에게는 두 공개키가 구별되지 않으므로 어느 쪽이 풀렸는지 알 수 없다.

# 직관

망각 전송은 보내는 사람이 메시지 두 개 $m\_0$, $m\_1$ 을 가지고 받는 사람이 비트 $b$ 를 가질 때, 받는 사람은 $m\_b$ 만 얻고 다른 메시지는 알지 못하며 보내는 사람은 $b$ 를 알지 못하게 하는 두 사람 사이의 프로토콜이다. Rabin 이 1981 년에 처음 제안했고, 지금 쓰는 둘 중 하나 꼴은 Even, Goldreich, Lempel 이 정의했다[^1][^2].

[다자간 계산](secure-multiparty-computation.md)은 망각 전송 하나만으로 모든 함수에 대해 구성된다. 공개키 암호화에서 구성되며, ElGamal 암호를 쓰는 구성이 [의미론적 안전성](semantic-security.md)의 판정적 Diffie–Hellman 가정 위에 있다.

서버에 기록이 두 개 있고, 사용자는 그 가운데 하나를 받되 서버가 어느 것을 가져갔는지 몰라야 한다. 서버는 다른 기록이 사용자에게 넘어가는 것도 막고 싶다. 서버가 두 기록을 다 보내면 서버의 조건이 깨지고, 사용자가 원하는 번호를 말하면 사용자의 조건이 깨진다.

사용자가 공개키 두 개를 서버에 보낸다. 하나는 비밀키를 아는 정상 키이고, 하나는 비밀키 없이 무작위로 뽑은 값이다. 사용자는 정상 키를 $b$ 번째 자리에 둔다. 서버는 $m\_0$ 을 첫째 키로, $m\_1$ 을 둘째 키로 암호화해 보낸다.

사용자는 비밀키를 아는 $b$ 번째 암호문만 풀어 $m\_b$ 를 얻는다. 두 키가 같은 분포를 따르면 서버는 어느 쪽이 정상 키인지 알 수 없고, 비밀키가 없는 쪽의 암호문에서 사용자는 아무것도 얻지 못한다.

# 정의

## 둘 중 하나 망각 전송

**둘 중 하나 망각 전송(1-out-of-2 oblivious transfer)** 은 다음 함수를 안전하게 계산하는 두 사람 프로토콜이다.

$$
((m\_0,m\_1),\thinspace b)\mapsto(\varnothing,\thinspace m\_b)
$$

보내는 사람의 입력이 $(m\_0,m\_1)$, 받는 사람의 입력이 $b\in\lbrace 0,1\rbrace$ 이고, 보내는 사람은 아무것도 받지 않으며 받는 사람은 $m\_b$ 를 받는다. "안전하게 계산한다" 는 다자간 계산의 이상 세계 정의를 따른다.

## Rabin 망각 전송

**Rabin 망각 전송(Rabin oblivious transfer)** 에서 보내는 사람은 메시지 $m$ 하나를 보내고, 받는 사람은 확률 $1/2$ 로 $m$ 을 받고 확률 $1/2$ 로 아무것도 받지 못한다. 보내는 사람은 어느 쪽이 일어났는지 알지 못한다[^1].

# 성질

## 두 꼴의 동치

Rabin 망각 전송과 둘 중 하나 망각 전송은 서로로부터 구성된다[^3]. 둘 중 하나에서 Rabin 꼴을 얻는 쪽은, 보내는 사람이 $m$ 과 무작위 값을 무작위 순서로 넣고 나중에 순서를 알려 주면 받는 사람이 확률 $1/2$ 로 $m$ 을 받는다. 반대쪽은 Rabin 전송을 여러 번 하고, 받는 사람이 받은 것과 받지 못한 것의 번호를 섞어 알려 주는 구성이다.

## ElGamal 키로의 구성

위수가 소수 $q$ 인 순환군 $G=\langle g\rangle$ 에서 판정적 Diffie–Hellman 가정이 성립한다고 하자. 반정직 참가자에 대해 다음 프로토콜이 둘 중 하나 망각 전송이다.

1. 받는 사람이 $x$ 를 골라 $h\_b=g^x$ 로 두고, $h\_{1-b}$ 는 $G$ 에서 이산로그를 모르는 채 무작위로 뽑는다. $(h\_0,h\_1)$ 을 보낸다.
2. 보내는 사람이 $i=0,1$ 마다 $r\_i$ 를 골라 $c\_i=(g^{r\_i},\thinspace m\_ih\_i^{r\_i})$ 을 보낸다.
3. 받는 사람이 $c\_b=(u,v)$ 에서 $m\_b=v\thinspace u^{-x}$ 를 계산한다.

$h\_0$, $h\_1$ 은 둘 다 $G$ 위에서 균등하므로 보내는 사람의 관점은 $b$ 와 무관하다. $c\_{1-b}$ 는 이산로그를 모르는 키에 대한 ElGamal 암호문이므로 판정적 Diffie–Hellman 가정 아래에서 $m\_{1-b}$ 에 대해 정보를 주지 않는다.

## 완전성

망각 전송이 있으면 두 사람 사이의 모든 다항시간 함수가 악의적 공격자에 대해 안전하게 계산되고, 다른 계산 가정은 필요하지 않다[^4]. 반정직 공격자에 대한 GMW(Goldreich–Micali–Wigderson) 프로토콜은 함수를 불 회로로 쓰고, 덧셈 조각 위의 AND 게이트 하나마다 망각 전송을 한 번 쓴다.

## 망각 전송 확장

공개키 연산은 대칭키 연산보다 느리다. **망각 전송 확장(oblivious transfer extension)** 은 보안 매개변수 $k$ 개의 기본 망각 전송과 [암호 해시 함수](cryptographic-hash-functions.md)만으로 임의의 다항식 개수의 망각 전송을 만든다[^5]. 그래서 대량의 망각 전송을 쓰는 프로토콜도 공개키 연산은 $k$ 번만 한다.

## 일방향 함수만으로는 부족함

망각 전송이 있으면 두 사람이 공개 통신로로 비밀키를 합의할 수 있다. Impagliazzo 와 Rudich 는 일방향 순열을 블랙박스로 쓰는 키 합의 구성이 존재하지 않음을 보였다[^6]. 그래서 망각 전송도 [일방향 함수](one-way-functions.md)로부터 블랙박스로 구성되지 않고, 트랩도어 순열이나 판정적 Diffie–Hellman 같은 공개키 가정이 필요하다.

# 활용

- 두 사람 계산. Yao 의 [뒤섞인 회로](garbled-circuits.md)에서 회로를 계산하는 쪽은 자기 입력 비트마다 대응하는 회로 키를 망각 전송으로 받는다. 만든 쪽은 어느 키가 전해졌는지 모른다.
- 다자간 계산의 곱셈. Beaver 삼중쌍을 두 사람 사이에서 만들 때 망각 전송을 쓴다.
- 대칭 개인 정보 검색(symmetric private information retrieval). 데이터베이스의 한 항목을 서버가 어느 항목인지 모르게 받고 다른 항목은 받지 않는 것이 $n$ 개 중 하나 망각 전송이다.
- 집합 교집합. 두 기관이 공통 항목만 계산하는 프로토콜이 망각 전송 확장으로 대량의 비교를 처리한다.

[^1]: M. O. Rabin, "How to exchange secrets with oblivious transfer", Technical Report TR-81, Aiken Computation Laboratory, Harvard University (1981).
[^2]: S. Even, O. Goldreich, A. Lempel, "A randomized protocol for signing contracts", Communications of the ACM 28 (1985), 637–647.
[^3]: C. Crépeau, "Equivalence between two flavours of oblivious transfers", CRYPTO 1987, LNCS 293, 350–354.
[^4]: J. Kilian, "Founding cryptography on oblivious transfer", STOC 1988, 20–31.
[^5]: Y. Ishai, J. Kilian, K. Nissim, E. Petrank, "Extending oblivious transfers efficiently", CRYPTO 2003, LNCS 2729, 145–161.
[^6]: R. Impagliazzo, S. Rudich, "Limits on the provable consequences of one-way permutations", STOC 1989, 44–61.

# 연관 문서

## 선수지식

- [의미론적 안전성](semantic-security.md)

## 더 알아보기

- [다자간 계산](secure-multiparty-computation.md)

#cryptography #complexity
