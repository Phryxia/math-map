# 유사난수 생성기

# 개요

**유사난수 생성기(pseudorandom generator)** 는 짧은 균등 난수열을 더 긴 비트열로 늘리는 다항시간 함수로서, 그 출력과 같은 길이의 균등 난수열을 어떤 다항시간 알고리즘도 무시할 만한 확률 차로만 구별하는 것이다. 키 하나로 긴 메시지를 암호화하는 방법과, 확률적 알고리즘에서 난수를 줄이는 방법이 이 개념으로 서술된다.

[일방향 함수](one-way-functions.md)가 존재하면 유사난수 생성기가 존재하고, 그 역도 성립한다.

# 직관

일회용 패드(one-time pad)는 메시지 $m$ 과 같은 길이의 균등 난수열 $k$ 를 골라 $c=m\oplus k$ 를 보낸다. 도청자가 보는 $c$ 는 $m$ 과 무관하게 균등하게 분포한다. 그러나 1 메가바이트 메시지를 보내려면 두 사람이 미리 1 메가바이트 키를 나눠 가져야 한다.

키를 128 비트로 줄이고 그것을 1 메가바이트로 늘리는 함수 $G$ 를 쓰면 $c=m\oplus G(k)$ 다. 가능한 $G(k)$ 는 $2^{128}$ 개뿐이므로 $c$ 는 더 이상 균등하지 않고, 모든 $k$ 를 시도하는 도청자는 $m$ 에 대한 정보를 얻는다. 그래서 요구 조건을 "도청자가 가진 시간 안에는 $G(k)$ 와 균등 난수열을 가를 수 없다" 로 바꾼다. 그 조건을 만족하는 $G$ 가 유사난수 생성기이고, 이 조건 아래에서 $m\oplus G(k)$ 는 다항시간 도청자에게 $m\oplus k$ 와 같은 정보를 준다.

# 정의

## 계산적 구별 불가능성

$U\_\ell$ 을 $\lbrace 0,1\rbrace^\ell$ 위의 균등분포라 하자. 비트열의 분포족 $\lbrace X\_n\rbrace$, $\lbrace Y\_n\rbrace$ 이 **계산적으로 구별되지 않는다(computationally indistinguishable)** 는 것은 모든 확률적 다항시간 알고리즘 $D$ 에 대해 다음이 $n$ 에 대해 무시할 만하다는 뜻이다.

$$
\left\lvert\Pr\lbrack D(X\_n)=1\rbrack-\Pr\lbrack D(Y\_n)=1\rbrack\right\rvert
$$

$D$ 를 **구별자(distinguisher)** 라 한다.

## 유사난수 생성기

결정적 다항시간 함수 $G:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^{\ell(n)}$ 이 모든 $n$ 에서 $\ell(n)\gt n$ 을 만족하고, $s$ 를 $U\_n$ 에서 뽑을 때 $G(s)$ 의 분포가 $U\_{\ell(n)}$ 과 계산적으로 구별되지 않으면 유사난수 생성기다. $s$ 를 **씨(seed)**, $\ell(n)-n$ 을 늘린 길이라 한다.

## 다음 비트 예측 불가능성

$G$ 가 **다음 비트 예측 불가능(next-bit unpredictable)** 하다는 것은 모든 $i\lt\ell(n)$ 과 모든 확률적 다항시간 알고리즘 $A$ 에 대해, $G(s)$ 의 처음 $i$ 비트를 보고 $i+1$ 번째 비트를 맞힐 확률이 $1/2$ 에 무시할 만한 양을 더한 것 이하라는 뜻이다.

# 성질

## Yao 의 다음 비트 정리

**Yao 정리(Yao's next-bit theorem).** $G$ 가 유사난수 생성기인 것과 다음 비트 예측 불가능한 것은 동치다[^1].

증명의 요지. 예측기가 있으면 그것으로 구별자를 만드는 쪽은 바로 된다. 반대쪽은 **혼성 논증(hybrid argument)** 이다. 처음 $i$ 비트는 $G(s)$ 에서, 나머지는 균등하게 뽑은 분포를 $H\_i$ 라 하면 $H\_0=U\_{\ell}$, $H\_{\ell}=G(U\_n)$ 이다. 구별자 $D$ 의 이득이 $\varepsilon$ 이면 이웃한 $H\_i$, $H\_{i+1}$ 가운데 이득이 $\varepsilon/\ell$ 이상인 쌍이 있다. 두 분포는 $i+1$ 번째 비트만 다르므로, $D$ 가 그 쌍을 가르는 방식을 이용해 $i+1$ 번째 비트를 $1/2+\varepsilon/\ell$ 의 확률로 맞히는 예측기를 만든다.

## 늘린 길이의 확장

한 비트를 늘리는 생성기 $G:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^{n+1}$ 가 있으면 임의의 다항식 $\ell(n)$ 만큼 늘리는 생성기가 있다. $G(s)=(s',b)$ 로 쓰고 $b$ 를 출력한 뒤 $s'$ 에 $G$ 를 다시 적용하기를 $\ell(n)$ 번 한다. 출력이 균등 난수열과 구별되지 않는다는 것은 단계마다 $G$ 하나를 균등분포로 바꾸는 혼성 논증으로 보인다.

## 일방향 순열로부터의 구성

$f$ 가 일방향 순열이고 $b$ 가 그 하드코어 술어이면 다음이 유사난수 생성기다[^2].

$$
G(s)=\bigl(b(s),\thinspace b(f(s)),\thinspace b(f^2(s)),\thinspace\dots,\thinspace b(f^{\ell-1}(s))\bigr)
$$

이 출력을 뒤에서부터 읽으면 앞의 비트들은 모두 $f^j(s)$ 로부터 계산되고, 다음 비트는 $b(f^{j-1}(s))$ 다. 그래서 다음 비트를 맞히는 알고리즘은 $f(y)$ 에서 $b(y)$ 를 맞히는 알고리즘이 되어 하드코어 술어의 정의에 어긋난다. Blum, Blum, Shub 은 $f(x)=x^2 \bmod N$ 과 최하위 비트로 같은 구성을 했고, 그 안전성은 $N$ 의 소인수분해의 어려움으로 환원된다[^3].

## 일방향 함수와의 동치

**Håstad–Impagliazzo–Levin–Luby 정리(Håstad–Impagliazzo–Levin–Luby theorem).** 일방향 함수가 존재하는 것과 유사난수 생성기가 존재하는 것은 동치다[^4].

유사난수 생성기 $G$ 는 그 자체로 일방향 함수다. $G(s)$ 의 원상을 찾는 알고리즘이 있으면, 받은 문자열이 $G$ 의 상에 들어 있는지 확인하는 구별자가 된다. 균등 난수열이 $G$ 의 상에 들 확률은 $2^{n-\ell(n)}\le 1/2$ 이다. 반대쪽은 순열이 아닌 일방향 함수에서 엔트로피를 다루는 긴 구성이다.

## 유사난수 함수

**유사난수 함수(pseudorandom function)** 족 $\lbrace F\_k\rbrace$ 은 키 $k$ 를 무작위로 고르면, 질의를 마음대로 할 수 있는 다항시간 알고리즘이 $F\_k$ 와 균등한 무작위 함수를 무시할 만한 확률 차로만 구별하는 함수족이다. Goldreich, Goldwasser, Micali 는 두 배로 늘리는 생성기 $G(s)=(G\_0(s),G\_1(s))$ 로부터 $F\_k(x\_1\cdots x\_n)=G\_{x\_n}(\cdots G\_{x\_1}(k))$ 를 만들어 유사난수 함수를 구성했다[^5].

# 활용

- 대칭키 암호. 스트림 암호는 키를 유사난수 생성기로 늘려 메시지와 배타적 논리합을 한다. 블록 암호의 안전성 정의는 유사난수 순열이다.
- 비무작위화(derandomization). 계산 복잡도에서는 구별자를 고정된 크기의 회로로 제한한 생성기를 쓴다. 지수 시간 $\mathrm E$ 의 어떤 문제가 지수 크기의 회로를 요구하면 $\mathrm{BPP}=\mathrm P$ 다[^6]. 이 증명은 어려운 함수로부터 그런 생성기를 만들고, 확률적 알고리즘의 난수를 짧은 씨의 모든 값으로 바꿔 돌린다.
- 회로 하한의 한계. [P 대 NP 문제](p-np.md)에서 회로 하한을 보이는 흔한 논증, 곧 자연 증명(natural proof)은 충분히 강한 유사난수 함수가 존재하면 성공할 수 없다[^7].
- [영지식 증명](zero-knowledge-proofs.md)의 3-색칠 프로토콜이 쓰는 [약속](commitment-schemes.md)은 유사난수 생성기로 구성된다.

[^1]: A. C. Yao, "Theory and applications of trapdoor functions", FOCS 1982, 80–91.
[^2]: M. Blum, S. Micali, "How to generate cryptographically strong sequences of pseudo-random bits", SIAM Journal on Computing 13 (1984), 850–864.
[^3]: L. Blum, M. Blum, M. Shub, "A simple unpredictable pseudo-random number generator", SIAM Journal on Computing 15 (1986), 364–383.
[^4]: J. Håstad, R. Impagliazzo, L. A. Levin, M. Luby, "A pseudorandom generator from any one-way function", SIAM Journal on Computing 28 (1999), 1364–1396.
[^5]: O. Goldreich, S. Goldwasser, S. Micali, "How to construct random functions", Journal of the ACM 33 (1986), 792–807.
[^6]: R. Impagliazzo, A. Wigderson, "P = BPP if E requires exponential circuits: derandomizing the XOR lemma", STOC 1997, 220–229.
[^7]: A. A. Razborov, S. Rudich, "Natural proofs", Journal of Computer and System Sciences 55 (1997), 24–35.

# 연관 문서

## 선수지식

- [일방향 함수](one-way-functions.md)

## 더 알아보기

- [약속 방식](commitment-schemes.md)
- [의미론적 안전성](semantic-security.md)

#cryptography #complexity #computation
