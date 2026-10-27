# Fiat–Shamir 변환

# 개요

**Fiat–Shamir 변환(Fiat–Shamir transform)** 은 주고받는 대화로 하는 증명을, 증명자가 혼자 만들어 보내는 증명으로 바꾸는 방법이다. 비밀을 안다는 것을 보이는 증명에서 검증자는 무작위 질문을 보내고, 증명자는 비밀을 알아야만 맞힐 수 있는 답을 보낸다. 질문을 미리 아는 사람은 답에 맞춰 대화를 꾸밀 수 있어서, 녹화한 대화를 남에게 보여도 증명이 되지 않는다. Fiat–Shamir 변환은 질문을 증명자의 첫 메시지에 해시 함수를 적용한 값으로 정해, 증명자가 질문을 먼저 알고 대화를 꾸미지 못하게 한다.

# 직관

Fiat–Shamir 변환은 검증자가 무작위 질문만 보내는 대화형 증명에서, 질문을 지금까지의 메시지에 [암호 해시 함수](cryptographic-hash-functions.md)를 적용한 값으로 바꿔 증명자 혼자 만드는 비대화형 증명으로 바꾼다[^1]. [영지식 증명](zero-knowledge-proofs.md)의 Schnorr 프로토콜에 적용하면 Schnorr 서명이 나온다.

해시 함수를 무작위 함수로 모형화하면 안전성이 증명된다. 실제 해시 함수로 바꾸면 안전하지 않은 프로토콜이 존재한다.

Schnorr 프로토콜에서 증명자는 $t=g^r$ 을 보내고, 검증자의 질문 $c$ 를 받고, $s=r+cx$ 를 보낸다. 검증자는 $g^s=th^c$ 를 검사한다. 이 대화를 그대로 기록해 제3자에게 보여 주어도 증거가 되지 않는다. 증명자가 $c$ 와 $s$ 를 먼저 고르고 $t=g^sh^{-c}$ 로 두면 $x$ 없이도 검사를 통과하는 기록이 만들어진다.

$t$ 를 $c$ 보다 나중에 정할 수 있어서 위조가 된다. 그래서 $c$ 를 $t$ 의 함수 $c=\mathcal H(t)$ 로 정한다. 증명자는 $t$ 를 먼저 정해야 $c$ 를 알 수 있고, $\mathcal H$ 가 무작위 함수처럼 동작하면 $t$ 를 정한 뒤 받는 $c$ 는 검증자가 무작위로 고른 질문과 같다.

# 정의

## 공개 동전 프로토콜

[대화형 증명](interactive-proofs.md)에서 검증자의 메시지가 모두 자기 난수 그대로인 것을 공개 동전 프로토콜이라 한다. 세 단계 공개 동전 프로토콜 $(a,e,z)$ 에서 증명자가 $a$ 를, 검증자가 무작위 질문 $e$ 를, 증명자가 응답 $z$ 를 보내고, 검증자는 $(x,a,e,z)$ 의 결정적 함수로 판정한다. 이런 프로토콜을 **시그마 프로토콜(sigma protocol)** 이라 한다.

## 변환

해시 함수 $\mathcal H$ 에 대해 Fiat–Shamir 변환은 다음 비대화형 증명이다.

1. 증명자가 $a$ 를 계산하고 $e=\mathcal H(x,a)$ 로 둔 뒤 $z$ 를 계산해 $(a,z)$ 를 낸다.
2. 검증자는 $e=\mathcal H(x,a)$ 를 다시 계산하고 원래 판정을 $(x,a,e,z)$ 에 적용한다.

서명을 만들 때는 메시지 $m$ 도 넣어 $e=\mathcal H(x,a,m)$ 으로 둔다. 공개 동전 라운드가 여럿이면 라운드마다 그때까지의 모든 메시지를 해시한 값을 질문으로 쓴다.

# 성질

## 무작위 오라클 모형에서의 안전성

시그마 프로토콜이 특수 건전성(special soundness)을 가지면, 무작위 오라클 모형에서 Fiat–Shamir 변환은 지식 증명이다. 특수 건전성은 같은 $a$ 에 대한 서로 다른 질문 $e\ne e'$ 의 받아들여지는 응답 둘에서 증거가 계산된다는 조건이다.

증명의 요지. **분기 보조정리(forking lemma)** 를 쓴다[^2]. 비대화형 증명을 만드는 증명자를 실행하고, 그가 $(x,a)$ 를 오라클에 물은 시점으로 되감아 그 질의에 다른 무작위 답 $e'$ 을 주고 다시 실행한다. 첫 실행이 성공할 확률이 $\varepsilon$ 이고 오라클 질의 수가 $Q$ 이면, 두 실행이 같은 $a$ 에서 모두 성공할 확률이 대략 $\varepsilon^2/Q$ 이상이다. 그 두 응답에 특수 건전성을 적용해 증거를 얻는다.

## 문장을 뺀 해시와 위조

$e=\mathcal H(a)$ 로 문장 $x$ 를 빼면, 증명자는 $a$ 와 $e$ 를 먼저 정한 뒤 검사를 통과하는 $x$ 를 고를 수 있는 경우가 생긴다. Schnorr 프로토콜에서는 $s$ 를 고르고 $h=(g^s/t)^{1/c}$ 로 공개키를 나중에 정해, 그 공개키에 대한 증명을 $x$ 없이 만든다. 전자 투표 시스템 Helios 가 이 결함으로 투표 내용의 증명을 위조당할 수 있었다[^3].

## 실제 해시 함수로의 대체

무작위 오라클 모형에서 안전하지만, 오라클을 어떤 다항시간 함수족으로 바꾸어도 안전하지 않은 서명 방식과 암호화 방식이 존재한다[^4]. Fiat–Shamir 변환에 대해서도, 무작위 오라클 모형에서 안전하지만 어떤 해시 함수족을 써도 건전하지 않은 대화형 논증이 존재한다[^5]. 그래서 무작위 오라클 모형의 증명은 해시 함수에 대한 구체적 가정으로부터의 증명이 아니다.

# 활용

- 서명. Schnorr 서명과 그 변형인 EdDSA(Edwards-curve digital signature algorithm)는 Schnorr 프로토콜의 Fiat–Shamir 변환이다. [전자서명](digital-signatures.md)의 Schnorr 서명 절이 그 식이다.
- 비대화형 영지식 논증. [쌍선형 암호](pairing-based-cryptography.md)의 zk-SNARK(zero-knowledge succinct non-interactive argument of knowledge)와 해시 기반 STARK(scalable transparent argument of knowledge)는 여러 라운드의 공개 동전 프로토콜을 이 변환으로 한 메시지로 만든다.
- 신원 확인. Fiat 와 Shamir 의 원래 목적은 스마트카드가 서버와 대화하지 않고 신원을 증명하는 것이었다[^1].

[^1]: A. Fiat, A. Shamir, "How to prove yourself: practical solutions to identification and signature problems", CRYPTO 1986, LNCS 263, 186–194.
[^2]: D. Pointcheval, J. Stern, "Security arguments for digital signatures and blind signatures", Journal of Cryptology 13 (2000), 361–396.
[^3]: D. Bernhard, O. Pereira, B. Warinschi, "How not to prove yourself: pitfalls of the Fiat–Shamir heuristic and applications to Helios", ASIACRYPT 2012, LNCS 7658, 626–643.
[^4]: R. Canetti, O. Goldreich, S. Halevi, "The random oracle methodology, revisited", Journal of the ACM 51 (2004), 557–594.
[^5]: S. Goldwasser, Y. T. Kalai, "On the (in)security of the Fiat–Shamir paradigm", FOCS 2003, 102–113.

# 연관 문서

## 선수지식

- [영지식 증명](zero-knowledge-proofs.md)
- [암호 해시 함수](cryptographic-hash-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #complexity
