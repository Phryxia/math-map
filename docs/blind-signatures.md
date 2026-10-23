# 블라인드 서명

# 개요

**블라인드 서명(blind signature)** 은 서명자가 메시지를 보지 않은 채 서명하고, 나중에 공개된 서명이 어느 서명 요청에서 나왔는지 서명자가 가려낼 수 없는 서명 방식이다. Chaum 이 1983 년에 추적되지 않는 전자 화폐를 위해 제안했다[^1].

결과로 나오는 서명은 보통의 [전자서명](digital-signatures.md)이고 공개키로 확인한다. 달라지는 것은 서명을 만드는 과정이 서명자와 요청자 사이의 대화라는 점과 안전성의 정의다.

# 직관

은행이 1000 원짜리 토큰에 서명해 고객에게 주고, 고객은 상점에서 토큰을 쓰며, 상점은 은행의 공개키로 서명을 확인한다. 은행이 토큰의 일련번호 $m$ 을 보고 서명하면, 상점에서 돌아온 토큰의 $m$ 으로 누가 어디서 썼는지 알아낸다. 그래서 고객은 $m$ 을 가린 값을 보내 서명을 받는다.

[RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 공개키 $(n,e)$ 와 해시 함수 $\mathcal H$ 를 쓴다. 고객은 $n$ 과 서로소인 $r$ 을 무작위로 골라 $m'=\mathcal H(m)\thinspace r^e \bmod n$ 을 보낸다. 은행은 $s'=m'^d=\mathcal H(m)^d\thinspace r \bmod n$ 을 돌려주고, 고객은 $s=s'r^{-1}=\mathcal H(m)^d \bmod n$ 을 계산한다. $s$ 는 $m$ 에 대한 해시 후 RSA 서명이고, 은행이 본 $m'$ 은 $r$ 때문에 $m$ 과 무관한 값이다.

# 정의

## 서명 대화

블라인드 서명 방식은 키 생성 $\mathrm{Gen}$, 서명자와 요청자 사이의 대화형 프로토콜, 검증 $\mathrm{Verify}$ 로 이루어진다. 서명자는 $\mathit{sk}$ 를, 요청자는 $\mathit{pk}$ 와 메시지 $m$ 을 입력으로 받고, 대화가 끝나면 요청자가 서명 $\sigma$ 를 출력한다. 정직하게 대화하면 $\mathrm{Verify}(\mathit{pk},m,\sigma)$ 가 받아들인다.

## 은닉성

악의적인 서명자 $S$ 가 키를 만들고 메시지 $m\_0,m\_1$ 을 고른다. 무작위 비트 $b$ 에 대해 두 요청자가 $m\_b$ 와 $m\_{1-b}$ 로 $S$ 와 한 번씩 대화하고, 두 대화가 모두 성공하면 $S$ 는 두 서명을 받는다. $S$ 가 $b$ 를 맞힐 확률이 $1/2$ 보다 무시할 만한 양만큼만 크면 방식이 **은닉성(blindness)** 을 가진다고 한다.

## 일회 추가 위조 불가능성

요청자 $A$ 가 서명자와 성공한 대화를 $\ell$ 번 한 뒤 서로 다른 메시지 $\ell+1$ 개와 그 서명들을 낸다. 모든 $\ell$ 과 모든 확률적 다항시간 $A$ 에 대해 모든 서명이 받아들여질 확률이 무시할 만하면 방식이 **일회 추가 위조 불가능(one-more unforgeable)** 하다고 한다[^2]. 서명자는 어떤 메시지에 서명했는지 모르므로, EUF-CMA(existential unforgeability under chosen-message attack)처럼 "요청하지 않은 메시지" 로 위조를 정의할 수 없다.

# 성질

## RSA 블라인드 서명의 은닉성

$x\mapsto x^e \bmod n$ 은 $(\mathbb Z/n\mathbb Z)^\times$ 의 전단사다. 그래서 어떤 $m$ 과 어떤 $m'\in(\mathbb Z/n\mathbb Z)^\times$ 에 대해서도 $\mathcal H(m)r^e\equiv m'$ 인 $r$ 이 정확히 하나 있고, $r$ 을 균등하게 고르면 $m'$ 은 $m$ 과 무관하게 균등하다. 이 은닉성은 서명자의 계산 능력과 무관하게 성립한다.

## 일회 추가 RSA 역산

**일회 추가 RSA 역산 문제(one-more RSA inversion problem)** 는 무작위 값 $y\_1,\dots,y\_{\ell+1}$ 을 받고 $e$ 제곱근 오라클을 $\ell$ 번만 써서 모든 $y\_i$ 의 $e$ 제곱근을 구하는 문제다. $\mathcal H$ 를 무작위 오라클로 모형화하면, RSA 블라인드 서명이 일회 추가 위조 불가능한 것과 이 문제가 어려운 것은 동치다[^3]. 이 가정은 $x^e \bmod n$ 의 역산이 어렵다는 RSA 가정보다 강하다.

## Schnorr 블라인드 서명

위수 $q$ 인 군에서 $h=g^x$ 가 공개키다. 서명자가 $t=g^k$ 를 보내면 요청자는 $\alpha,\beta$ 를 무작위로 골라 다음을 계산하고 $c=c'+\beta \bmod q$ 를 보낸다.

$$
t'=t\thinspace g^\alpha h^\beta,\qquad c'=\mathcal H(t',m)
$$

서명자가 $s=k+cx \bmod q$ 를 돌려주면 요청자의 서명은 $(c',\thinspace s+\alpha)$ 다. $g^{s+\alpha}h^{-c'}=t\thinspace g^\alpha h^{c-c'}=t'$ 이므로 전자서명 문서의 Schnorr 서명 검증을 통과하고, $(\alpha,\beta)$ 가 균등하므로 서명자가 본 $(t,c)$ 는 서명 $(c',s+\alpha)$ 와 무관하다. 서명자가 대화 $\ell$ 개를 동시에 열어 두면, $\ell\gt\log\_2 q$ 이면 대화 $\ell$ 개로 서명 $\ell+1$ 개를 다항시간에 만드는 공격이 있다[^4].

# 활용

- 전자 화폐. 은행이 블라인드 서명으로 발행한 토큰은 은행의 공개키로 확인되고, 사용된 토큰이 어느 고객의 인출에서 나왔는지는 은행이 알 수 없다. 같은 토큰을 두 번 쓰는 것은 은행이 사용된 일련번호를 기록해 막는다[^1].
- 익명 인증 토큰. 웹 서비스가 사람임을 확인한 사용자에게 블라인드 서명으로 토큰을 주고, 사용자는 나중에 토큰을 내어 확인 절차를 건너뛴다. 서비스는 토큰과 확인 시점을 연결하지 못한다. RSA 블라인드 서명의 표준이 RFC(request for comments) 9474 다[^5].

[^1]: D. Chaum, "Blind signatures for untraceable payments", Advances in Cryptology: Proceedings of CRYPTO '82, Plenum Press, 1983, 199–203.
[^2]: D. Pointcheval, J. Stern, "Security arguments for digital signatures and blind signatures", Journal of Cryptology 13 (2000), 361–396.
[^3]: M. Bellare, C. Namprempre, D. Pointcheval, M. Semanko, "The one-more-RSA-inversion problems and the security of Chaum's blind signature scheme", Journal of Cryptology 16 (2003), 185–215.
[^4]: F. Benhamouda, T. Lepoint, J. Loss, M. Orrù, M. Raykova, "On the (in)security of ROS", EUROCRYPT 2021, LNCS 12696, 33–53.
[^5]: F. Denis, F. Jacobs, C. A. Wood, "RSA Blind Signatures", RFC 9474, 2023.

# 연관 문서

## 선수지식

- [전자서명](digital-signatures.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #number_theory #complexity
