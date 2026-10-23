# 영지식 증명

# 개요

**영지식 증명(zero-knowledge proof)** 은 어떤 진술이 참이라는 것을 상대에게 확신시키되, 참이라는 사실 말고는 아무 정보도 넘기지 않는 [대화형 증명](interactive-proofs.md)이다. Goldwasser, Micali, Rackoff 가 1985 년에 정의했다[^1].

[그래프 동형](graph-isomorphism.md)의 증명은 보통 대응 하나를 내보이는 것이다. 영지식 증명은 대응을 내보이지 않고도 두 그래프가 동형임을 확신시킨다. [이산로그](discrete-logarithm.md)에서는 지수 $x$ 를 내보이지 않고 $x$ 를 안다는 것을 확신시킨다.

# 직관

두 그래프 $G\_0$, $G\_1$ 이 동형이고 증명자가 대응 $\pi:G\_0\to G\_1$ 을 안다. 검증자는 $\pi$ 를 받으면 모든 정점쌍의 인접 여부를 검사해 동형임을 확인한다. 그러나 $\pi$ 를 받은 검증자는 이제 $\pi$ 를 안다. $\pi$ 가 신원을 확인하는 데 쓰는 비밀이라면 증명 한 번으로 비밀이 넘어간다.

$\pi$ 를 보이지 않으려면 검증자가 받는 것이 $\pi$ 와 무관해야 한다. 증명자는 정점 이름을 무작위로 섞는 순열 $\sigma$ 를 골라 $H=\sigma(G\_0)$ 를 보낸다. 검증자는 동전을 던져 $b\in\lbrace 0,1\rbrace$ 를 보낸다. $b=0$ 이면 증명자는 $\sigma$ 를 보이고, $b=1$ 이면 $\sigma\circ\pi^{-1}$ 을 보인다. 둘째는 $G\_1$ 을 $H$ 로 보내는 대응이다. 검증자는 받은 대응이 $G\_b$ 를 $H$ 로 보내는지 검사한다.

두 그래프가 동형이 아니면 $H$ 는 $G\_0$, $G\_1$ 가운데 많아야 하나와 동형이다. 그래서 증명자는 $b$ 를 보기 전에 정한 $H$ 로 두 질문 가운데 하나에만 답할 수 있고, 한 번에 속을 확률이 $1/2$ 이하다. $k$ 번 되풀이하면 $2^{-k}$ 이하다.

검증자가 받는 것은 $G\_b$ 의 정점을 무작위로 섞은 그래프와 그 섞는 순열이다. 이것은 검증자가 $b$ 와 순열 $\tau$ 를 스스로 골라 $\tau(G\_b)$ 를 계산해도 같은 분포로 얻는다. 혼자 만들 수 있는 것을 받았으니 검증자가 대화에서 얻은 정보는 동형이라는 사실 하나다. 영지식은 이 성질로 정의한다.

# 정의

## 대화형 증명

대화형 증명 $(P,V)$ 는 증명자(prover) $P$ 와 확률적 다항시간 검증자(verifier) $V$ 가 입력 $x$ 를 공유하고 메시지를 주고받는 체계다. $x\in L$ 이면 $V$ 가 높은 확률로 받아들이는 완전성(completeness)과, $x\notin L$ 이면 어떤 증명자 $P^\ast$ 에 대해서도 $V$ 가 낮은 확률로만 받아들이는 건전성(soundness)을 만족한다.

## 시뮬레이터와 영지식

검증자 $V^\ast$ 의 **관점(view)** 은 $V^\ast$ 가 대화에서 쓴 난수와 받은 메시지 전부다. $(P,V)$ 가 **영지식(zero-knowledge)** 이라는 것은 다항시간 검증자 $V^\ast$ 마다 기대 다항시간 확률적 알고리즘 $S$ 가 존재해, 모든 $x\in L$ 에서 $S(x)$ 의 분포가 $V^\ast$ 의 관점의 분포와 구별되지 않는다는 뜻이다. $S$ 를 **시뮬레이터(simulator)** 라 한다.

"구별되지 않는다" 의 세기에 따라 세 가지로 나뉜다.

| 이름 | 두 분포의 관계 |
| --- | --- |
| 완전 영지식(perfect zero-knowledge) | 같다 |
| 통계적 영지식(statistical zero-knowledge) | [전변동거리](total-variation-distance.md)가 $\lvert x\rvert$ 에 대해 무시할 만하다 |
| 계산적 영지식(computational zero-knowledge) | 다항시간 알고리즘이 둘을 무시할 만한 확률 차로만 가른다 |

함수 $\varepsilon(n)$ 이 **무시할 만하다(negligible)** 는 것은 모든 다항식 $p$ 에 대해 충분히 큰 $n$ 에서 $\varepsilon(n)\lt 1/p(n)$ 이라는 뜻이다. 검증자가 프로토콜을 어기고 질문을 고르더라도 정보를 얻지 못하게 하려고 정의는 모든 $V^\ast$ 를 요구한다. 프로토콜대로 움직이는 $V$ 하나에 대해서만 시뮬레이터가 있으면 **정직한 검증자 영지식(honest-verifier zero-knowledge)** 이라 한다.

## 지식 증명

**지식 증명(proof of knowledge)** 은 진술이 참이라는 것에 더해 증명자가 증거를 안다는 것을 확인하는 대화형 증명이다. 받아들여지는 대화를 만드는 증명자 $P^\ast$ 를 블랙박스로 되감아 가며 실행해 증거를 계산하는 다항시간 알고리즘, 곧 **추출기(extractor)** 가 존재해야 한다. 이산로그 $x$ 처럼 진술 "$h$ 는 $g$ 의 거듭제곱이다" 가 순환군에서 늘 참인 경우에는 지식 증명만 의미가 있다.

# 성질

## 그래프 동형 프로토콜

직관 절의 프로토콜은 그래프 동형 언어의 완전 영지식 증명이다[^2]. 완전성은 정직한 증명자가 두 질문에 모두 답할 수 있다는 데서, 건전성은 직관 절의 확률 $1/2$ 에서 나온다.

시뮬레이터는 $b'\in\lbrace 0,1\rbrace$ 와 순열 $\tau$ 를 고르고 $H=\tau(G\_{b'})$ 를 $V^\ast$ 에 넣는다. $V^\ast$ 가 낸 질문 $b$ 가 $b'$ 과 같으면 $\tau$ 를 답으로 적고 끝내고, 다르면 $V^\ast$ 를 되감아 처음부터 다시 한다. $H$ 의 분포는 $b'$ 과 무관하므로 $b=b'$ 일 확률이 $1/2$ 이고, 시뮬레이터는 기대 두 번 만에 끝나며 출력 분포가 실제 관점과 같다.

## Schnorr 프로토콜

위수가 소수 $q$ 인 순환군 $G=\langle g\rangle$ 에서 $h=g^x$ 가 공개되고 증명자가 $x$ 를 안다. **Schnorr 프로토콜(Schnorr protocol)** 은 다음 세 단계다[^3].

1. 증명자가 $r\in\mathbb Z/q\mathbb Z$ 를 무작위로 골라 $t=g^r$ 을 보낸다.
2. 검증자가 $c\in\mathbb Z/q\mathbb Z$ 를 무작위로 골라 보낸다.
3. 증명자가 $s=r+cx \bmod q$ 를 보내고, 검증자는 다음을 검사한다.

$$
g^s=t\thinspace h^c
$$

- 특수 건전성(special soundness). 같은 $t$ 에 대해 $c\ne c'$ 인 두 질문에 모두 답한 $(s,c)$, $(s',c')$ 이 있으면 $x=(s-s')(c-c')^{-1} \bmod q$ 다. 추출기는 증명자를 $t$ 를 보낸 직후로 되감아 다른 $c'$ 을 던져 이 둘을 얻는다. 그래서 Schnorr 프로토콜은 지식 증명이다.
- 정직한 검증자 영지식. 시뮬레이터는 $c$ 와 $s$ 를 먼저 무작위로 고르고 $t=g^s h^{-c}$ 로 정한다. $(t,c,s)$ 의 분포가 실제 대화와 같다.

되감기 시뮬레이터가 $c$ 를 맞힐 확률이 $1/q$ 이므로, 임의의 검증자에 대한 영지식은 이 시뮬레이터로 증명되지 않는다.

## NP 의 영지식 증명

**Goldreich–Micali–Wigderson 정리(Goldreich–Micali–Wigderson theorem).** [일방향 함수](one-way-functions.md)가 존재하면 $\mathrm{NP}$ 의 모든 언어에 계산적 영지식 증명이 존재한다[^2].

증명의 요지. [그래프 색칠](graph-coloring.md)의 3-색칠 문제가 [NP-완전](np-completeness.md)이므로 그 언어 하나에 대해 보이면 다항시간 환원으로 나머지가 따라온다. 증명자는 색칠의 세 색을 무작위로 바꾼 뒤 정점마다 색을 [약속](commitment-schemes.md)하여 보낸다. 검증자가 간선 하나를 고르면 증명자는 그 양 끝의 약속만 열고, 검증자는 두 색이 다른지 본다. 약속은 열기 전에 내용을 감추고 연 뒤에 바꿀 수 없는 값이고, 일방향 함수에서 구성된다. 한 번에 속을 확률은 많아야 $1-1/\lvert E\rvert$ 이므로 $\lvert E\rvert k$ 번 되풀이한다.

## Fiat–Shamir 변환

**Fiat–Shamir 변환(Fiat–Shamir transform)** 은 검증자의 무작위 질문을 지금까지의 메시지에 [해시 함수](cryptographic-hash-functions.md)를 적용한 값으로 바꿔 대화를 없애는 방법이다[^4]. Schnorr 프로토콜에서 $c=\mathcal H(t,m)$ 으로 두면 증명자 혼자 $(t,s)$ 를 만들 수 있고, 이것이 메시지 $m$ 에 대한 Schnorr 서명이다. 해시 함수를 무작위 함수로 모형화하면 서명의 위조가 이산로그 계산으로 환원된다.

# 활용

- 신원 확인. 비밀번호를 서버에 보내지 않고 $h=g^x$ 의 $x$ 를 안다는 것을 Schnorr 프로토콜로 보인다. 서버가 저장하는 것은 $h$ 뿐이다.
- [전자서명](digital-signatures.md). Fiat–Shamir 변환으로 얻은 Schnorr 서명이 이산로그 가정 위의 서명 방식이고, [타원곡선](elliptic-curves.md) 군에서 쓰인다.
- 간결한 비대화형 논증. [쌍선형 암호](pairing-based-cryptography.md)의 zk-SNARK(zero-knowledge succinct non-interactive argument of knowledge)는 다항식의 값에 대한 약속을 쌍선형 사상으로 검사해, 계산 전체의 정당성을 상수 크기 증명으로 보인다.
- 암호 프로토콜의 정직성 강제. 여러 당사자가 함께 계산할 때 각자 프로토콜대로 메시지를 만들었다는 것을 영지식 증명으로 덧붙이면, 프로토콜을 어기는 공격자를 프로토콜을 지키는 공격자로 환원할 수 있다[^2].

[^1]: S. Goldwasser, S. Micali, C. Rackoff, "The knowledge complexity of interactive proof systems", SIAM Journal on Computing 18 (1989), 186–208. 학회판은 STOC 1985.
[^2]: O. Goldreich, S. Micali, A. Wigderson, "Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems", Journal of the ACM 38 (1991), 690–728. 그래프 동형의 완전 영지식 증명, 3-색칠의 계산적 영지식 증명, 다자간 계산에의 응용이 있다.
[^3]: C. P. Schnorr, "Efficient signature generation by smart cards", Journal of Cryptology 4 (1991), 161–174.
[^4]: A. Fiat, A. Shamir, "How to prove yourself: practical solutions to identification and signature problems", CRYPTO 1986, LNCS 263, 186–194.

# 연관 문서

## 선수지식

- [대화형 증명](interactive-proofs.md)
- [이산로그](discrete-logarithm.md)

## 더 알아보기

- [다자간 계산](secure-multiparty-computation.md)

#cryptography #complexity #computation #graph_theory
