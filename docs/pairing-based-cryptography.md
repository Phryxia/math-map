# 쌍선형 암호

# 개요

**쌍선형 암호(pairing-based cryptography)** 는 [타원곡선](elliptic-curves.md)의 쌍선형 사상을 이용해 신원 기반 암호(identity-based encryption)나 짧은 서명을 구성하는 공개키 암호다. 보통의 공개키 암호로 이메일을 보내려면 받는 사람의 공개키를 인증서로 먼저 받아 와야 하는데, 받는 사람의 이메일 주소 자체를 공개키로 쓸 수 있으면 이 단계가 사라진다. 쌍선형 암호는 곡선 위의 두 점을 유한체의 수 하나로 보내는 사상으로 지수끼리 곱하는 계산을 만들어 이런 구성을 얻는다.

# 직관

앨리스, 밥, 캐럴 세 사람이 공개 채널에서 공통 비밀을 만들려고 한다. 곡선 위의 점 $P$ 를 공개하고, 각자 비밀 수 $a,b,c$ 를 골라 $aP, bP, cP$ 를 한 번씩 보낸다. 두 사람일 때는 [이산로그](discrete-logarithm.md) 문서의 Diffie–Hellman 키 교환처럼 앨리스가 $a(bP)=abP$ 를 계산하면 끝난다. 세 사람이면 앨리스가 만들 수 있는 것은 $abP$ 와 $acP$ 이고, $abcP$ 를 만들려면 $bcP$ 가 있어야 한다. $bP$ 와 $cP$ 만 보고 $bcP$ 를 만드는 것이 곡선에서 어려운 문제이므로 한 번의 송신으로는 공통 비밀이 나오지 않는다.

막힌 곳은 곡선에서 두 비밀 수를 곱할 수 없다는 점이다. 그래서 두 점을 받아 다른 군의 원소 하나를 내놓되, 두 점의 비밀 수가 지수 자리에서 곱해지는 사상 $e$ 를 쓴다.

$$
e(aP,bP)=e(P,P)^{ab}
$$

이런 사상이 있으면 앨리스는 $e(bP,cP)^a=e(P,P)^{abc}$ 를 계산한다. 밥은 $e(aP,cP)^b$ 를, 캐럴은 $e(aP,bP)^c$ 를 계산하고 셋 다 같은 값에 이른다.

계산 구조만 보이는 작은 예로, 덧셈군 $\mathbb Z/11\mathbb Z$ 에서 $P=1$ 로 두고 $e(x,y)=2^{xy}\bmod 23$ 이라 하자. $2^{11}=2048\equiv 1\pmod{23}$ 이므로 지수는 $11$ 로 나눈 나머지만 중요하고 $e$ 는 위 등식을 만족한다. $a=2,b=3,c=4$ 이면 앨리스는 $e(3,4)^2=(2^{12})^2\equiv 2^2=4$, 밥은 $e(2,4)^3=(2^8)^3\equiv 3^3\equiv 4$, 캐럴은 $e(2,3)^4=(2^6)^4\equiv 18^4\equiv 4$ 를 얻는다. 이 군에서는 $aP=a$ 라서 비밀 수가 그대로 보이므로 암호로는 쓸 수 없다. 비밀 수가 숨는 타원곡선군에서 이런 사상을 주는 것이 아래의 Weil 쌍과 Tate 쌍이다.

# 정의

## 비틀림 부분군

$E$ 가 유한체 $\mathbb F_q$ 위의 타원곡선이고 $O$ 가 무한원점일 때, **$r$ 차 비틀림 부분군($r$-torsion subgroup)** 은 다음과 같다.

$$
E[r]=\lbrace P\in E(\bar{\mathbb F}\_q):rP=O\rbrace
$$

$p=23$ 에서 $E:y^2=x^3+1$ 을 보자. $P=(0,1)$ 에서 접선은 $y=1$ 이고 이 직선은 $x^3=0$ 에서 곡선과 만나 $P$ 에 세 번 닿으므로 $3P=O$ 다. $\mathbb F_{23}$ 좌표의 $3$ 차 비틀림점은 $O,(0,1),(0,22)$ 셋이다. $3$ 차 비틀림점의 $x$ 좌표는 $3x(x^3+4)=0$ 의 근이고, $x=20$ 은 $20^3\equiv 19\equiv -4$ 를 만족하지만 $y^2=20$ 이 $\mathbb F_{23}$ 에서 풀리지 않는다. $i^2=-1$ 로 $\mathbb F_{23^2}=\mathbb F_{23}(i)$ 를 만들면 $(7i)^2=-49\equiv 20$ 이므로 $Q=(20,7i)\in E[3]$ 이다.

## 매장 차수

**매장 차수(embedding degree)** 는 $r\mid\char35{}E(\mathbb F_q)$ 인 소수 $r$ 에 대해 다음 $k$ 다.

$$
k=\min\lbrace k\ge1:\ r\mid q^k-1\rbrace
$$

위 예에서 $\char35{}E(\mathbb F_{23})=24$ 이고 $r=3$ 이다. $23-1=22$ 는 $3$ 으로 나뉘지 않고 $23^2-1=528=3\cdot 176$ 은 나뉘므로 $k=2$ 다.

## Weil 쌍

**Weil 쌍(Weil pairing)** 은 인자(divisor)로 정의되는 사상 $e:E[r]\times E[r]\to\mu_r$ 다. $\mathrm{div}(f_P)=r[P]-r[O]$ 인 함수 $f_P$ 를 잡아 $e(P,Q)=f_P(Q)/f_Q(P)$ 로 쓰고, 극점은 평행이동으로 피한다. 여기서 $\mu_r$ 은 $\mathbb F_{q^k}^\times$ 의 $r$ 제곱근 $1$ 들이 이루는 부분군이다.

위 예에서 $P=(0,1)$ 의 접선 $y=1$ 이 $P$ 에만 세 번 닿으므로 $\mathrm{div}(y-1)=3[P]-3[O]$ 이고 $f_P=y-1$ 이다.

## Tate 쌍

**Tate 쌍(Tate pairing)** 은 다음 사상이다. $f_{r,P}$ 는 인자가 $r[P]-r[O]$ 인 함수다.

$$
\langle P,Q\rangle=f_{r,P}(Q)^{(q^k-1)/r}
$$

마지막 거듭제곱이 **최종 멱승(final exponentiation)** 이다.

위 예에서 $f_{3,P}=y-1$ 이므로 $\langle P,Q\rangle=(7i-1)^{176}$ 이다. $z^{22}=\bar z/z$ 를 쓰면 $(7i-1)^{22}=(-1-7i)/(-1+7i)\equiv 11+15i$ 이고, $(11+15i)^3=1$ 이므로 $(11+15i)^8=(11+15i)^2\equiv 11+8i$ 다. $11+8i\ne 1$ 이고 $(11+8i)^3=1$ 이므로 쌍 값은 $\mu_3$ 의 자명하지 않은 원소다.

## Miller 알고리즘

**Miller 알고리즘(Miller's algorithm)** 은 $f_{r,P}$ 를 만들지 않고 $Q$ 에서의 값만 계산하는 절차다. $r$ 의 이진 전개를 따라 점 $T$ 를 이중화하거나 $P$ 를 더하고, 각 단계에서 그 연산의 직선 $l$ 의 값을 곱하고 결과 점을 지나는 수직선 $v$ 의 값으로 나눈다.

위 예에서 $r=3$ 은 이진수 $11$ 이다. 이중화 단계는 $T=P$ 의 접선 $y-1$ 을 곱하고 $2P=(0,22)$ 의 수직선 $x$ 로 나눈다. 덧셈 단계는 $(0,22)$ 와 $P$ 를 지나는 직선 $x$ 를 곱하고, 결과 $3P=O$ 의 수직선은 $1$ 이다. 곱은 $\frac{y-1}{x}\cdot x=y-1$ 로 위의 $f_{3,P}$ 와 같다.

## 간극 Diffie–Hellman 군

**간극 Diffie–Hellman 군(gap Diffie–Hellman group)** 은 이산로그 문서의 판정적 Diffie–Hellman(decisional Diffie–Hellman, DDH) 문제가 쉽고 계산적 Diffie–Hellman(computational Diffie–Hellman, CDH) 문제가 어려운 군이다. 쌍이 있으면 $(P,aP,bP,cP)$ 에서 $e(aP,bP)=e(P,cP)$ 인지 확인해 $c=ab$ 를 판정한다.

직관 절의 작은 예에서 $(1,2,3,6)$ 은 $e(2,3)=2^6$ 과 $e(1,6)=2^6$ 이 같으므로 $c=ab$ 이고, $(1,2,3,7)$ 은 $e(1,7)=2^7\equiv 13$ 이 $2^6\equiv 18$ 과 달라 $c\ne ab$ 다.

# 성질

## 비틀림 부분군의 구조

$\gcd(r,q)=1$ 이면 $E[r]\cong\mathbb Z/r\mathbb Z\times\mathbb Z/r\mathbb Z$ 다. 위 예의 $E[3]$ 은 원소가 $9$ 개이고, $\mathbb F_{23}$ 좌표의 셋은 그 가운데 한 부분군이다.

## Weil 쌍의 성질

- 쌍선형(bilinear): $e(P_1+P_2,Q)=e(P_1,Q)e(P_2,Q)$ 이고 둘째 변수도 마찬가지다.
- 교대(alternating): $e(P,P)=1$ 이고 따라서 $e(P,Q)=e(Q,P)^{-1}$ 이다.
- 비퇴화(non-degenerate): $P\ne O$ 면 $e(P,Q)\ne1$ 인 $Q$ 가 존재한다.
- Galois 동변(Galois equivariant): $e(\sigma P,\sigma Q)=\sigma(e(P,Q))$ 이다.

Tate 쌍은 최종 멱승으로 값을 $\mu_r$ 로 보내 $f_{r,P}$ 의 상수배 선택에 따른 모호성을 없앤다. Weil 쌍과 달리 $\langle P,P\rangle$ 은 자명하지 않을 수 있다. 계산 비용은 Weil 쌍의 절반 정도여서 실무에서는 Tate 쌍을 쓴다.

## 비퇴화와 확대체

쌍이 비퇴화하려면 서로 다른 두 부분군에서 점을 하나씩 가져와야 한다. 기저체 $\mathbb F_q$ 위의 $r$ 차 비틀림은 대개 한 부분군 $r$ 개뿐이므로, 두 번째 점은 확대체 $\mathbb F_{q^k}$ 위에 있어야 한다. 위 예의 $Q=(20,7i)$ 가 그런 점이다. $\mu_r\subset\mathbb F_{q^k}^\times$ 이므로 $r\mid q^k-1$ 이어야 하고, 이것이 매장 차수의 조건이다.

무작위 곡선에서 $k$ 는 $r$ 규모라 쌍을 계산할 수 없다. 초특이 곡선(supersingular curve)에서는 $k\le6$ 이고 표수가 큰 경우 $k=2$ 다. 쌍 암호는 Barreto–Naehrig 계열처럼 $k$ 가 보통 12 이하인 곡선을 의도적으로 구성해 쓴다.

위 예의 곡선은 $p\equiv2\pmod3$ 이므로 초특이 곡선이고 $\char35{}E(\mathbb F_p)=p+1$ 이다. Frobenius 사상의 고윳값이 $\pm i\sqrt p$ 이므로 확대체에서 위수가 완전제곱 $\char35{}E(\mathbb F_{p^2})=(p+1)^2=576$ 이 된다.

## Miller 알고리즘의 비용

Miller 알고리즘은 $O(\log r)$ 회의 곡선 연산으로 쌍 값을 구한다. 스칼라 곱과 같은 규모다.

## MOV 환산

**MOV 환산(Menezes–Okamoto–Vanstone reduction)** 은 쌍으로 타원곡선 이산로그를 유한체 이산로그로 옮기는 공격이다. $P$ 의 위수가 $r$ 이고 $Q\in E[r]$ 를 $e(P,Q)\ne1$ 이 되도록 잡으면, $aP$ 에 대해

$$
e(aP,Q)=e(P,Q)^a
$$

이므로 $\mathbb F_{q^k}^\times$ 에서의 이산로그 한 번이 $a$ 를 준다.

유한체 이산로그는 [지표 계산법](index-calculus.md)으로 준지수 시간에 풀리고 곡선에서는 $O(\sqrt r)$ 이 최선이다. 따라서 $k$ 가 작으면 환산이 실질적인 공격이 되고, $k\le6$ 인 초특이 곡선은 일반 암호 용도에서 배제되었다. $k$ 가 $r$ 규모이면 $\mathbb F_{q^k}$ 가 너무 커서 환산이 무의미하며, 무작위로 뽑은 곡선은 거의 확실히 이 경우다. 같은 쌍이 $k$ 가 작으면 공격 수단이 되고, 쌍 암호는 그 $k$ 를 안전성과 계산 비용이 맞는 값으로 골라 쌍을 구성에 쓴다.

## 파라미터의 균형

쌍 암호는 두 어려움을 맞춰야 한다. 곡선 쪽 비용은 $\sqrt r$ 이고 확대체 쪽 비용은 $\mathbb F_{q^k}$ 의 이산로그이며, 둘이 비슷해지도록 $k$ 를 고른다.

2016 년 Kim–Barbulescu 가 확대체 이산로그의 [수체 체](number-field-sieve.md) 거름법을 개선하면서 이 균형이 깨졌다. 128 비트 안전성으로 여겨지던 BN254 곡선이 100 비트 근처로 떨어졌고, 표준 곡선이 BN381 과 BLS12-381 로 옮겨 갔다.

# 활용

## 3자 키 합의

Diffie–Hellman 으로 세 사람이 공통 비밀을 만들려면 두 번의 왕복이 필요하다. Joux 의 프로토콜은 직관 절처럼 각자 $aP,bP,cP$ 를 한 번 뿌리는 것으로 끝난다. 각자가 받은 두 값으로 쌍을 계산하면

$$
e(bP,cP)^a=e(aP,cP)^b=e(aP,bP)^c=e(P,P)^{abc}
$$

로 같은 값에 도달한다. 2000 년에 발표된 이 프로토콜이 쌍을 구성 도구로 쓴 첫 결과다.

## 신원 기반 암호

공개키를 임의의 문자열로 삼는 구상은 1984 년 Shamir 가 제기했고 Boneh–Franklin 이 2001 년에 쌍으로 구현했다.

신뢰 기관이 마스터 비밀 $s$ 를 갖고 공개값 $sP$ 를 공표한다. 신원 문자열을 곡선 점으로 해싱한 $Q_{ID}$ 에 대해 개인키는 $sQ_{ID}$ 다. 송신자는 무작위 $t$ 로 $tP$ 와 $e(Q_{ID},sP)^t$ 로 마스킹한 메시지를 보내고, 수신자는 쌍선형성으로 값이 같은 $e(sQ_{ID},tP)$ 를 계산한다.

인증서 관리가 사라지는 대신 기관이 모든 개인키를 안다. 이 키 위탁(key escrow) 문제가 실제 배치를 제한했고, 속성 기반 암호(attribute-based encryption)와 함수 암호(functional encryption)가 후속 구성으로 나왔다.

## 짧은 서명과 집계

BLS(Boneh–Lynn–Shacham) [전자서명](digital-signatures.md)은 $\sigma=xH(m)$ 이고 검증은 $e(\sigma,P)=e(H(m),xP)$ 다. 서명이 곡선 점 하나이므로 같은 안전성에서 ECDSA(elliptic curve digital signature algorithm)의 절반 길이다.

여러 서명을 더하면 하나의 짧은 서명이 되고 검증도 쌍 계산 한 묶음으로 끝난다. 이 집계 성질 때문에 수십만 명이 참여하는 지분증명(proof of stake) 합의 프로토콜의 표준 서명이 되었다.

## 영지식 증명

zk-SNARK(zero-knowledge succinct non-interactive argument of knowledge)는 [영지식 증명](zero-knowledge-proofs.md)의 한 방식이고 검증식은 쌍의 등식이다. 증명자가 다항식의 값을 곡선 점으로 약속하면 검증자는 그 점들 사이의 곱셈 관계를 쌍으로 확인한다. 곡선 군만으로는 덧셈밖에 확인할 수 없다.

증명 크기가 수백 바이트로 상수이고 검증이 쌍 몇 번으로 끝난다. 쌍 기반 SNARK 는 양자 공격에 취약하고 신뢰 설정(trusted setup)이 필요하므로 해시 기반 STARK(scalable transparent argument of knowledge) 계열이 대안으로 연구된다.

## 양자 내성

쌍의 안전성은 이산로그에 의존하므로 [Shor 알고리즘](shor-algorithm.md) 앞에서 무너진다. [후양자 암호](post-quantum-cryptography.md)로의 전환에서 쌍 기반 구성은 전부 대체 대상이고, [격자](lattices.md) 기반 신원 기반 암호와 해시 기반 서명이 후보다.

# 연관 문서

## 선수지식

- [타원곡선](elliptic-curves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #number_theory #algebra
