# 약속 방식

# 개요

**약속 방식(commitment scheme)** 은 보내는 사람이 값 하나를 정해 그 값을 감춘 채 상대에게 맡겼다가, 나중에 열어 보이는 두 단계 프로토콜이다. 맡긴 단계에서 상대가 값을 알 수 없어야 하고(숨김성), 연 단계에서 보내는 사람이 다른 값으로 열 수 없어야 한다(구속성).

[유사난수 생성기](pseudorandom-generators.md)로부터 구성되므로 [일방향 함수](one-way-functions.md)만 가정하면 존재한다. [이산로그](discrete-logarithm.md) 가정 위에서는 덧셈을 보존하는 Pedersen 약속이 있다.

# 직관

앨리스와 밥이 전화로 동전 던지기를 한다. 앨리스가 앞면이나 뒷면을 말하고 밥이 동전을 던져 결과를 알려 주면, 밥은 결과를 거짓으로 말할 수 있다. 밥이 먼저 결과를 말하고 앨리스가 예측을 말하면, 앨리스가 결과에 맞춰 예측을 고칠 수 있다.

앨리스가 예측 $b\in\lbrace 0,1\rbrace$ 를 먼저 정해 감춘 값 $c$ 를 보내고, 밥이 동전을 던져 결과를 알려 준 뒤, 앨리스가 $c$ 를 열어 $b$ 를 보인다. $c$ 에서 $b$ 가 보이면 밥이 결과를 고치고, $c$ 를 다른 $b$ 로 열 수 있으면 앨리스가 예측을 고친다. 두 가지를 모두 막아야 한다.

$c=f(b)$ 처럼 $b$ 만의 함수로 정하면 밥은 $f(0)$ 과 $f(1)$ 을 계산해 비교한다. 그래서 앨리스는 난수 $r$ 을 함께 골라 $c=\mathrm{Com}(b;r)$ 을 보내고, 열 때 $(b,r)$ 을 보낸다. 이 방법을 Blum 이 동전 던지기에 썼다[^1].

# 정의

## 약속 방식

약속 방식은 확률적 다항시간 알고리즘 $\mathrm{Com}$ 과 두 단계로 이루어진다.

1. 약속 단계. 보내는 사람이 메시지 $m$ 과 난수 $r$ 로 $c=\mathrm{Com}(m;r)$ 을 계산해 보낸다.
2. 공개 단계. 보내는 사람이 $(m,r)$ 을 보내고, 받는 사람은 $c=\mathrm{Com}(m;r)$ 인지 검사한다.

다음 두 성질을 요구한다.

- **숨김성(hiding).** 모든 $m\_0$, $m\_1$ 에 대해 $\mathrm{Com}(m\_0;r)$ 와 $\mathrm{Com}(m\_1;r)$ 의 분포가 구별되지 않는다. 두 분포가 같으면 완전 숨김, 통계적 거리가 무시할 만하면 통계적 숨김, 다항시간 알고리즘이 가르지 못하면 계산적 숨김이다.
- **구속성(binding).** $m\ne m'$ 이고 $\mathrm{Com}(m;r)=\mathrm{Com}(m';r')$ 인 $(m,r,m',r')$ 이 없으면 완전 구속, 그런 넷을 다항시간 알고리즘이 무시할 만한 확률로만 찾으면 계산적 구속이다.

# 성질

## 숨김성과 구속성의 상충

완전 숨김이면서 완전 구속인 약속 방식은 없다.

증명의 요지. 완전 숨김이면 $\mathrm{Com}(0;r)$ 과 $\mathrm{Com}(1;r)$ 의 분포가 같으므로, $\mathrm{Com}(0;r)$ 이 값으로 가지는 $c$ 는 모두 어떤 $r'$ 에 대해 $\mathrm{Com}(1;r')$ 이기도 하다. 그러면 $c$ 를 $1$ 로도 여는 $r'$ 이 존재하므로 완전 구속이 아니다. 그래서 두 성질 가운데 적어도 하나는 계산적 가정에 기댄다.

## Pedersen 약속

위수가 소수 $q$ 인 순환군 $G$ 에서 받는 사람이 생성원 $g$, $h$ 를 고르고, 보내는 사람은 $\log\_g h$ 를 모른다. 메시지 $m\in\mathbb Z/q\mathbb Z$ 와 난수 $r\in\mathbb Z/q\mathbb Z$ 에 대해 **Pedersen 약속(Pedersen commitment)** 은 다음이다[^2].

$$
\mathrm{Com}(m;r)=g^m h^r
$$

- 완전 숨김. $r$ 이 균등하면 $h^r$ 이 $G$ 위에서 균등하므로 $g^m h^r$ 도 $m$ 과 무관하게 균등하다.
- 계산적 구속. $g^m h^r=g^{m'}h^{r'}$ 이고 $m\ne m'$ 이면 $r\ne r'$ 이고 $\log\_g h=(m-m')(r'-r)^{-1} \bmod q$ 다. 두 가지로 여는 알고리즘은 이산로그를 계산한다.
- 덧셈 준동형. $\mathrm{Com}(m\_1;r\_1)\cdot\mathrm{Com}(m\_2;r\_2)=\mathrm{Com}(m\_1+m\_2;r\_1+r\_2)$ 다. 받는 사람은 열지 않은 두 약속으로부터 합의 약속을 계산한다.

## Naor 약속

$G:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^{3n}$ 이 유사난수 생성기라 하자. **Naor 약속(Naor commitment)** 은 한 비트 $b$ 를 다음과 같이 맡긴다[^3].

1. 받는 사람이 $R\in\lbrace 0,1\rbrace^{3n}$ 을 무작위로 골라 보낸다.
2. 보내는 사람이 씨 $s\in\lbrace 0,1\rbrace^n$ 을 골라, $b=0$ 이면 $c=G(s)$ 를, $b=1$ 이면 $c=G(s)\oplus R$ 을 보낸다.
3. 열 때는 $(b,s)$ 를 보낸다.

- 계산적 숨김. $G(s)$ 와 $G(s)\oplus R$ 은 둘 다 균등 난수열과 계산적으로 구별되지 않는다.
- 통계적 구속. 두 가지로 열려면 $G(s)\oplus G(s')=R$ 인 $s$, $s'$ 이 있어야 한다. 그런 쌍이 만드는 $R$ 은 많아야 $2^{2n}$ 개이므로, 무작위 $R$ 이 그 가운데 하나일 확률은 $2^{2n}/2^{3n}=2^{-n}$ 이하다.

# 활용

- [영지식 증명](zero-knowledge-proofs.md). Goldreich–Micali–Wigderson 의 3-색칠 프로토콜에서 증명자는 정점의 색을 약속으로 맡기고, 검증자가 고른 간선의 양 끝만 연다. 숨김성이 영지식을, 구속성이 건전성을 준다.
- 동전 던지기와 봉인 입찰. 직관 절의 동전 던지기와, 모든 참가자가 입찰액을 먼저 맡긴 뒤 함께 여는 입찰이 약속 방식을 쓴다.
- 다항식 약속. [쌍선형 암호](pairing-based-cryptography.md)의 zk-SNARK(zero-knowledge succinct non-interactive argument of knowledge)는 다항식 $p$ 를 곡선 점 하나로 맡기고, 한 점에서의 값 $p(z)$ 를 쌍선형 사상 등식 하나로 증명하는 Kate–Zaverucha–Goldberg 약속을 쓴다[^4].
- 기밀 거래. Pedersen 약속의 덧셈 준동형으로, 금액을 감춘 채 입력의 합과 출력의 합이 같다는 것을 검사한다.

[^1]: M. Blum, "Coin flipping by telephone: a protocol for solving impossible problems", ACM SIGACT News 15 (1983), 23–27.
[^2]: T. P. Pedersen, "Non-interactive and information-theoretic secure verifiable secret sharing", CRYPTO 1991, LNCS 576, 129–140.
[^3]: M. Naor, "Bit commitment using pseudorandomness", Journal of Cryptology 4 (1991), 151–158.
[^4]: A. Kate, G. M. Zaverucha, I. Goldberg, "Constant-size commitments to polynomials and their applications", ASIACRYPT 2010, LNCS 6477, 177–194.

# 연관 문서

## 선수지식

- [유사난수 생성기](pseudorandom-generators.md)
- [이산로그](discrete-logarithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #complexity
