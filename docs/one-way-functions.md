# 일방향 함수

# 개요

**일방향 함수(one-way function)** 는 계산하기는 쉽지만 결과에서 입력을 거꾸로 찾기는 어려운 함수다. 큰 소수 $p$ 와 수 $g$ 를 정해 두면 $x$ 에서 $g^x \bmod p$ 를 구하는 데는 곱셈 수백 번이면 되지만, 값만 보고 $x$ 를 하나씩 대입해 찾으려면 $p$ 번 가까이 계산해야 한다. 일방향 함수는 이런 비대칭을 확률과 계산 시간으로 정의해, 상대가 입력을 되찾지 못해야 하는 암호 방식의 안전성 근거로 쓴다.

# 직관

소수 $p$ 와 생성원 $g$ 를 정해 두고 [이산로그](discrete-logarithm.md)의 역방향인 $f(x)=g^x \bmod p$ 를 계산한다. 반복 제곱으로 $\log x$ 번 정도의 곱셈이면 끝난다. 거꾸로 $h$ 가 주어졌을 때 $g^x\equiv h$ 인 $x$ 를 찾는 알려진 방법은 $p$ 의 비트 길이에 대해 지수 시간이나 준지수 시간이 걸린다.

"찾기 어렵다" 를 최악의 입력으로 재면 암호에 쓸 수 없다. 대부분의 $h$ 에서 쉽고 드문 $h$ 에서만 어려운 함수라면, 비밀키 $x$ 를 무작위로 고른 사용자는 거의 항상 쉬운 경우에 놓인다. 그래서 $x$ 를 무작위로 골랐을 때 $g^x$ 로부터 $x$ 를 찾는 확률로 어려움을 잰다. 이 확률이 비트 길이의 어떤 다항식의 역수보다도 빨리 줄어드는 함수가 일방향 함수다.

# 정의

## 무시할 만한 함수

함수 $\varepsilon:\mathbb N\to\lbrack 0,1\rbrack$ 이 **무시할 만하다(negligible)** 는 것은 모든 다항식 $q$ 에 대해 충분히 큰 $n$ 에서 $\varepsilon(n)\lt 1/q(n)$ 이라는 뜻이다. $2^{-n}$ 과 $n^{-\log n}$ 은 무시할 만하고 $n^{-100}$ 은 아니다.

## 일방향 함수

함수 $f:\lbrace 0,1\rbrace^\ast\to\lbrace 0,1\rbrace^\ast$ 가 다음 두 조건을 만족하면 **일방향 함수** 다.

1. $f$ 를 계산하는 결정적 다항시간 알고리즘이 존재한다.
2. 모든 확률적 다항시간 알고리즘 $A$ 에 대해 다음 확률이 $n$ 에 대해 무시할 만하다.

$$
\Pr\_{x\leftarrow\lbrace 0,1\rbrace^n}\lbrack f(A(1^n,f(x)))=f(x)\rbrack
$$

$A$ 는 $x$ 자체를 찾을 필요가 없고 같은 값을 내는 입력 하나를 찾으면 성공이다. $1^n$ 은 $f(x)$ 가 짧은 경우에도 $A$ 에게 $n$ 의 다항시간을 허락하려고 넣는다.

예. 항등함수 $f(x)=x$ 는 $A$ 가 받은 값을 그대로 내면 확률 $1$ 로 성공하므로 일방향 함수가 아니다. 직관 절의 $x\mapsto g^x \bmod p$ 는 후보이고, 일방향 함수라는 증명은 알려져 있지 않다.

## 약한 일방향 함수

조건 2 를 "어떤 다항식 $q$ 가 있어서 모든 $A$ 의 실패 확률이 충분히 큰 $n$ 에서 $1/q(n)$ 이상이다" 로 바꾼 것이 **약한 일방향 함수(weak one-way function)** 다. 앞 절의 일방향 함수를 이와 구별할 때 강한 일방향 함수라 한다.

예. $n$ 비트 정수 둘의 곱 $f(x,y)=xy$ 는 일방향 함수가 아니다. $x$ 나 $y$ 가 짝수일 확률이 $3/4$ 이고, 그때 $A$ 는 $(2,xy/2)$ 를 내어 성공한다. 그러나 $x$ 와 $y$ 가 둘 다 소수일 확률은 대략 $1/n^2$ 이상이므로, 소인수분해가 어렵다면 $f$ 는 약한 일방향 함수다.

## 트랩도어 함수

**트랩도어 함수(trapdoor function)** 는 일방향 함수의 족 $\lbrace f\_k\rbrace$ 로서, 키 $k$ 를 만들 때 함께 나오는 보조 정보 $t\_k$ 가 있으면 $f\_k$ 의 역을 다항시간에 계산할 수 있는 것이다. [RSA 암호](rsa-cryptosystem.md)의 $x\mapsto x^e \bmod N$ 이 후보이고 $N$ 의 소인수분해가 보조 정보다. 공개키 암호화는 트랩도어 함수를 쓰고, 대칭키 암호와 서명은 일방향 함수만으로 구성된다.

# 성질

## P 대 NP 와의 관계

일방향 함수가 존재하면 $\mathrm P\ne\mathrm{NP}$ 다. 그래서 일방향 함수의 존재를 증명하면 [P 대 NP 문제](p-np.md)도 풀린다.

증명의 요지. 다음 언어는 $\mathrm{NP}$ 에 속한다. 증거는 $x$ 다.

$$
L\_f=\lbrace (y,z):\thinspace z \text{ 로 시작하는 } x \text{ 가 존재해 } f(x)=y\rbrace
$$

$\mathrm P=\mathrm{NP}$ 이면 $L\_f$ 를 다항시간에 판정하고, $z$ 를 한 비트씩 늘려 가며 $(y,z0)$ 이 $L\_f$ 에 속하는지 물어 $f^{-1}(y)$ 의 원소를 $n$ 번의 판정으로 찾는다. 이 역산은 모든 $y$ 에서 성공하므로 조건 2 가 깨진다.

## 약한 함수에서 강한 함수로

**Yao 정리(Yao's theorem).** 약한 일방향 함수 $f$ 가 존재하면 강한 일방향 함수가 존재한다[^1].

증명의 요지. $f$ 의 실패 확률이 $1/q(n)$ 이상이면 $g(x\_1,\dots,x\_m)=(f(x\_1),\dots,f(x\_m))$ 을 $m=nq(n)$ 으로 둔다. $g$ 를 역산하려면 $m$ 개를 모두 역산해야 한다. $g$ 의 역산기로부터 $f$ 의 역산기를 만들어, $g$ 의 성공 확률이 무시할 만하지 않으면 $f$ 의 실패 확률이 $1/q(n)$ 보다 작아진다는 모순을 이끈다. 각 좌표가 독립이라고 단순히 곱할 수 없어서 환원이 필요하다.

## 하드코어 비트

함수 $b:\lbrace 0,1\rbrace^\ast\to\lbrace 0,1\rbrace$ 가 $f$ 의 **하드코어 술어(hard-core predicate)** 라는 것은 $b(x)$ 를 다항시간에 계산할 수 있지만, $f(x)$ 만 보고 $b(x)$ 를 맞히는 확률이 모든 확률적 다항시간 알고리즘에서 $1/2$ 에 무시할 만한 양을 더한 것 이하라는 뜻이다.

**Goldreich–Levin 정리(Goldreich–Levin theorem).** $f$ 가 일방향 함수이면 $g(x,r)=(f(x),r)$ 도 일방향 함수이고, 내적 $b(x,r)=\sum\_i x\_ir\_i \bmod 2$ 가 $g$ 의 하드코어 술어다[^2].

증명의 요지. $b$ 를 $1/2+\varepsilon$ 의 확률로 맞히는 알고리즘이 있으면, $r$ 을 여러 개 골라 그 답을 모아 $x$ 의 각 비트를 다수결로 복원하고 $f$ 를 역산한다. 복원 단계는 Hadamard 부호(Hadamard code)의 목록 복호다.

## 일방향 함수에서 나오는 구성

- [유사난수 생성기](pseudorandom-generators.md). 다항시간 함수 $G:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^{\ell(n)}$, $\ell(n)\gt n$ 으로서 $G(s)$ 와 균등한 $\ell(n)$ 비트 문자열을 다항시간 알고리즘이 무시할 만한 확률 차로만 가르는 것이다. 일방향 함수가 존재하면 유사난수 생성기가 존재한다[^3]. 일방향 순열이면 Goldreich–Levin 비트로 $G(s)=(f(s),b(s))$ 를 만들어 한 비트를 늘린다.
- [약속 방식](commitment-schemes.md). 유사난수 생성기에서 비트 약속이 구성된다[^4]. 이 약속이 영지식 증명의 3-색칠 프로토콜에 쓰인다.
- [전자서명](digital-signatures.md). 일방향 함수가 존재하면 선택 메시지 공격에 안전한 서명이 존재한다[^5].

# 활용

- 비밀번호 저장. 서버는 비밀번호 $w$ 대신 $f(w)$ 를 저장하고, 로그인 때 받은 값의 $f$ 를 비교한다. 저장 파일이 새도 $w$ 를 찾으려면 $f$ 를 역산해야 한다.
- 공개키 암호의 안전성 가정. 이산로그 가정과 RSA 가정은 특정 함수족이 일방향 함수라는 주장이다. 암호 방식의 안전성 증명은 공격자를 이 함수의 역산기로 바꾸는 환원이다.
- [영지식 증명](zero-knowledge-proofs.md). Goldreich–Micali–Wigderson 정리가 $\mathrm{NP}$ 전체에 계산적 영지식 증명을 주는 데 쓰는 가정이 일방향 함수의 존재다.

[^1]: A. C. Yao, "Theory and applications of trapdoor functions", FOCS 1982, 80–91. 증명의 상세는 O. Goldreich, *Foundations of Cryptography*, Vol. 1 (Cambridge University Press, 2001) 2.3 절.
[^2]: O. Goldreich, L. A. Levin, "A hard-core predicate for all one-way functions", STOC 1989, 25–32.
[^3]: J. Håstad, R. Impagliazzo, L. A. Levin, M. Luby, "A pseudorandom generator from any one-way function", SIAM Journal on Computing 28 (1999), 1364–1396.
[^4]: M. Naor, "Bit commitment using pseudorandomness", Journal of Cryptology 4 (1991), 151–158.
[^5]: J. Rompel, "One-way functions are necessary and sufficient for secure signatures", STOC 1990, 387–394.

# 연관 문서

## 선수지식

- [P 대 NP 문제](p-np.md)
- [이산로그](discrete-logarithm.md)

## 더 알아보기

- [유사난수 생성기](pseudorandom-generators.md)
- [암호 해시 함수](cryptographic-hash-functions.md)
- [전자서명](digital-signatures.md)

#cryptography #complexity #computation
