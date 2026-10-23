# 다자간 계산

# 개요

**다자간 계산(secure multiparty computation)** 은 각자 비밀 입력 $x\_1,\dots,x\_n$ 을 가진 $n$ 명이 메시지를 주고받아 함수값 $f(x\_1,\dots,x\_n)$ 을 계산하되, 각자가 자기 입력과 함숫값에서 알 수 있는 것 말고는 아무것도 알지 못하게 하는 프로토콜이다. 모든 입력을 받아 계산해 주는 믿을 만한 제3자가 있을 때와 같은 결과를, 제3자 없이 얻는 것이 목표다.

[비밀 분산](secret-sharing.md)의 조각 위에서 덧셈과 곱셈을 하는 방법과, 프로토콜을 어기는 참가자를 [영지식 증명](zero-knowledge-proofs.md)으로 막는 방법이 기본 구성이다.

# 직관

세 직원이 서로의 연봉 $x\_1$, $x\_2$, $x\_3$ 을 밝히지 않고 합을 알고 싶다. 소수 $p$ 를 연봉보다 크게 잡는다. 직원 $i$ 는 $\mathbb Z/p\mathbb Z$ 에서 무작위로 $r\_{i1}$, $r\_{i2}$ 를 고르고 $r\_{i3}=x\_i-r\_{i1}-r\_{i2}$ 로 정해, $r\_{ij}$ 를 직원 $j$ 에게 보낸다. 직원 $j$ 는 받은 세 값을 더한 $y\_j=r\_{1j}+r\_{2j}+r\_{3j}$ 를 공개한다.

$y\_1+y\_2+y\_3=x\_1+x\_2+x\_3$ 이므로 합이 나온다. 직원 $j$ 가 남에게서 받은 $r\_{ij}$ 는 균등한 무작위 값이어서 $x\_i$ 에 대해 아무것도 알려 주지 않는다. 공개된 $y$ 들에서 알 수 있는 것은 합과 자기 연봉뿐이다.

합 대신 곱이나 비교를 계산하려면 조각을 곱하는 방법이 있어야 한다. 그리고 한 직원이 거짓 조각을 보내면 합이 틀어지므로, 프로토콜을 따랐음을 확인하는 수단도 있어야 한다.

# 정의

## 이상 세계와 실제 세계

**이상 세계(ideal world)** 에서는 참가자가 입력을 믿을 만한 제3자에게 보내고, 제3자가 $f$ 를 계산해 결과를 돌려준다. **실제 세계(real world)** 에서는 참가자가 프로토콜 $\pi$ 를 실행한다. 공격자는 참가자 일부를 장악해 그들의 입력과 받은 메시지를 모두 본다.

프로토콜 $\pi$ 가 $f$ 를 **안전하게 계산한다(securely computes)** 는 것은 실제 세계의 모든 다항시간 공격자 $A$ 에 대해, 이상 세계의 다항시간 공격자 $S$ 가 존재해 두 세계에서 공격자의 관점과 정직한 참가자의 출력을 합친 분포가 계산적으로 구별되지 않는다는 뜻이다. $S$ 를 시뮬레이터라 한다[^1].

## 공격자의 종류

- **반정직(semi-honest).** 장악된 참가자도 프로토콜을 그대로 따르고, 공격자는 그들이 본 것에서 정보를 뽑으려 한다.
- **악의적(malicious).** 장악된 참가자가 프로토콜에서 벗어나 임의의 메시지를 보낸다.

공격자가 장악하는 참가자 수의 상한을 $t$ 로 쓴다.

# 성질

## 조각의 곱셈

비밀 $x$ 의 덧셈 조각을 $\lbrack x\rbrack$ 로 쓴다. 덧셈 $\lbrack x\rbrack+\lbrack y\rbrack=\lbrack x+y\rbrack$ 는 각자 조각을 더하면 되지만 곱은 그렇지 않다. **Beaver 삼중쌍(Beaver triple)** 은 $c=ab$ 인 무작위 $a$, $b$ 의 조각 $\lbrack a\rbrack,\lbrack b\rbrack,\lbrack c\rbrack$ 을 미리 나눠 둔 것이다[^2]. 참가자들은 $d=x-a$ 와 $e=y-b$ 를 공개하고 다음을 계산한다.

$$
\lbrack xy\rbrack=\lbrack c\rbrack+d\thinspace\lbrack b\rbrack+e\thinspace\lbrack a\rbrack+de
$$

$xy=(a+d)(b+e)=ab+db+ea+de$ 이므로 등식이 성립한다. $a$, $b$ 가 균등하므로 공개된 $d$, $e$ 는 $x$, $y$ 에 대해 아무것도 알려 주지 않는다. 삼중쌍 하나는 곱셈 하나에 한 번만 쓴다.

## 정직한 다수와 정보이론적 안전성

**BGW 정리(Ben-Or–Goldwasser–Wigderson theorem).** 참가자 사이에 비밀 통신로가 있을 때, 모든 함수는 반정직 공격자에 대해 $t\lt n/2$ 이면, 악의적 공격자에 대해 $t\lt n/3$ 이면 계산 가정 없이 완전하게 안전한 프로토콜로 계산된다[^3].

증명의 요지. 입력을 Shamir 조각으로 나누고 함수를 덧셈과 곱셈의 회로로 쓴다. 덧셈은 조각끼리 더한다. 곱셈은 조각을 곱해 차수가 $2t$ 인 다항식의 조각을 얻고, 그것을 다시 차수 $t$ 의 조각으로 나눠 차수를 낮춘다. 악의적 공격자에 대해서는 조각이 Reed–Solomon 부호어이므로 $t\lt n/3$ 에서 거짓 조각을 오류로 정정한다.

## 정직하지 않은 다수

**GMW 정리(Goldreich–Micali–Wigderson theorem).** 트랩도어 순열(trapdoor permutation)이 존재하면, 모든 함수는 장악된 참가자 수에 제한 없이 반정직 공격자에 대해 안전하게 계산된다. 이 프로토콜의 각 메시지에 그것이 프로토콜대로 만들어졌다는 영지식 증명을 붙이면 악의적 공격자에 대해 안전해진다[^4].

반정직 프로토콜은 두 참가자 사이의 **망각 전송(oblivious transfer)** 을 기본 단계로 쓴다. 보내는 사람이 $m\_0$, $m\_1$ 을 가지고 받는 사람이 $b$ 를 가질 때, 받는 사람은 $m\_b$ 만 얻고 보내는 사람은 $b$ 를 알지 못한다. 망각 전송만 있으면 모든 함수의 안전한 계산이 구성된다[^5].

정직하지 않은 다수에서는 공정성(fairness)을 얻지 못한다. 공정성은 공격자가 결과를 얻으면 정직한 참가자도 결과를 얻는다는 조건이다. 두 참가자의 동전 던지기에서 어느 프로토콜이든 한쪽이 중간에 그만두어 결과를 자기 쪽으로 기울일 수 있다[^6].

# 활용

- 입찰. 2008 년 덴마크의 사탕무 거래가 참가 농가의 입찰가를 감춘 채 시장 가격을 다자간 계산으로 정했다[^7].
- 문턱 서명. 비밀키의 조각을 가진 서버들이 키를 모으지 않고 [전자서명](digital-signatures.md)을 함께 계산한다.
- 집합 교집합. 두 기관이 각자의 명단을 밝히지 않고 공통 항목만 계산한다.
- 기계학습. 여러 기관의 자료를 한곳에 모으지 않고 학습이나 추론을 조각 위에서 계산한다.

[^1]: O. Goldreich, *Foundations of Cryptography*, Vol. 2 (Cambridge University Press, 2004), 7 장.
[^2]: D. Beaver, "Efficient multiparty protocols using circuit randomization", CRYPTO 1991, LNCS 576, 420–432.
[^3]: M. Ben-Or, S. Goldwasser, A. Wigderson, "Completeness theorems for non-cryptographic fault-tolerant distributed computation", STOC 1988, 1–10.
[^4]: O. Goldreich, S. Micali, A. Wigderson, "How to play any mental game", STOC 1987, 218–229.
[^5]: J. Kilian, "Founding cryptography on oblivious transfer", STOC 1988, 20–31.
[^6]: R. Cleve, "Limits on the security of coin flips when half the processors are faulty", STOC 1986, 364–369.
[^7]: P. Bogetoft et al., "Secure multiparty computation goes live", Financial Cryptography 2009, LNCS 5628, 325–343.

# 연관 문서

## 선수지식

- [비밀 분산](secret-sharing.md)
- [영지식 증명](zero-knowledge-proofs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #complexity
