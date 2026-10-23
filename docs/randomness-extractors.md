# 무작위성 추출기

# 개요

**무작위성 추출기(randomness extractor)** 는 어느 값의 확률도 크지 않은 분포에서 뽑은 비트열과 짧은 균등 난수열 하나를 받아, 균등 분포에 가까운 비트열을 내는 함수다. 입력 분포가 균등하지 않아도 되고 비트끼리 상관되어 있어도 된다.

추출할 수 있는 양은 [Shannon 엔트로피](entropy.md)가 아니라 가장 큰 확률로 정하는 최소 엔트로피로 잰다. **잔여 해시 보조정리(leftover hash lemma)** 는 [범용 해시족](universal-hashing.md)에서 고른 함수가 추출기임을 보인다[^1].

# 직관

장치가 잡음을 재어 $n$ 비트 문자열 $x$ 를 내고, 어느 문자열이 나올 확률도 $2^{-k}$ 이하다. 비트들은 서로 상관되어 있고 분포의 모양은 모른다. 여기서 균등한 비트 하나를 얻으려고 함수 $f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 를 고정해 $f(x)$ 를 쓴다.

$f$ 의 값이 $0$ 인 문자열과 $1$ 인 문자열 가운데 한쪽은 $2^{n-1}$ 개 이상이다. 장치가 그쪽 문자열만 균등하게 낸다면 어느 문자열의 확률도 $2^{-(n-1)}$ 이하인데 $f(x)$ 는 언제나 같은 값이다. 그래서 $f$ 하나를 고정하면 비트 하나도 얻을 수 없다.

고정된 $f$ 에 맞춰 나쁜 분포를 고를 수 있어서 막혔으니, 함수를 짧은 균등 난수열로 무작위로 고른다. 함수를 범용 해시족에서 고르면 서로 다른 두 문자열이 같은 값을 낼 확률이 작고, 그러면 출력 $h(x)$ 가 한 값에 몰리지 않는다. 이렇게 짧은 난수열을 써서 균등에 가까운 비트를 뽑는 함수가 무작위성 추출기다.

# 정의

## 최소 엔트로피

값이 유한 집합에 있는 확률변수 $X$ 의 **최소 엔트로피(min-entropy)** 는 다음이다.

$$
H\_\infty(X)=-\log\_2\max\_x\Pr\lbrack X=x\rbrack
$$

$H\_\infty(X)\ge k$ 는 모든 값의 확률이 $2^{-k}$ 이하라는 뜻이다. Shannon 엔트로피는 확률의 로그를 평균한 것이므로 $H\_\infty(X)\le H(X)$ 다. 확률 $1/2$ 로 $0^n$ 이고 나머지 확률을 다른 $2^n-1$ 개에 고르게 나누는 분포는 Shannon 엔트로피가 $n/2$ 보다 크지만 최소 엔트로피는 $1$ 이다.

## 통계적 거리

같은 유한 집합 위의 두 분포 $P,Q$ 의 **통계적 거리(statistical distance)** 는 다음이다.

$$
\Delta(P,Q)=\frac12\sum\_z\lvert P(z)-Q(z)\rvert=\max\_E\lvert P(E)-Q(E)\rvert
$$

$\Delta(P,Q)\le\varepsilon$ 이면 어떤 판정 절차도 두 분포를 $\varepsilon$ 보다 큰 확률 차로 구별하지 못한다.

## 추출기

$U\_d$ 는 $\lbrace 0,1\rbrace^d$ 위의 균등 분포다. 함수 $\mathrm{Ext}:\lbrace 0,1\rbrace^n\times\lbrace 0,1\rbrace^d\to\lbrace 0,1\rbrace^m$ 이 $H\_\infty(X)\ge k$ 인 모든 $X$ 에 대해 다음을 만족하면 **$(k,\varepsilon)$ 추출기** 라 한다. $d$ 비트 입력을 **씨(seed)** 라 한다.

$$
\Delta\bigl(\mathrm{Ext}(X,U\_d),\thinspace U\_m\bigr)\le\varepsilon
$$

씨를 출력에 붙인 $(U\_d,\mathrm{Ext}(X,U\_d))$ 가 $U\_{d+m}$ 과 $\varepsilon$ 이내이면 **강한 추출기(strong extractor)** 라 한다. 강한 추출기에서는 씨를 공개해도 출력이 균등에 가깝다.

# 성질

## 결정적 추출의 불가능성

$k\le n-1$ 이면 씨가 없는 함수 $f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 는 $(k,\varepsilon)$ 추출기가 아니다. $\varepsilon\lt 1/2$ 이면 직관 절의 분포가 반례다. 그 분포에서 $f(X)$ 는 상수이고 균등한 비트와의 통계적 거리가 $1/2$ 다.

## 잔여 해시 보조정리

정리. $\mathcal H$ 가 $\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^m$ 의 범용 해시족이고 $H\_\infty(X)\ge k$ 이면, $h$ 를 $\mathcal H$ 에서 균등하게 고를 때 다음이 성립한다[^1][^2].

$$
\Delta\bigl((h,h(X)),\thinspace(h,U\_m)\bigr)\le\frac12\sqrt{2^{m-k}}
$$

$m=k-2\log\_2(1/\varepsilon)$ 로 두면 우변이 $\varepsilon/2$ 이므로, $h$ 를 씨로 고르는 $\mathrm{Ext}(x,h)=h(x)$ 는 강한 $(k,\varepsilon)$ 추출기다.

증명의 요지. 분포 $Z$ 의 충돌 확률(collision probability) $\mathrm{CP}(Z)=\sum\_z\Pr\lbrack Z=z\rbrack^2$ 을 쓴다. 독립인 두 표본 $x,x'$ 이 같거나, 다르지만 $h(x)=h(x')$ 인 경우를 더하면 $\mathrm{CP}(h,h(X))\le\frac{1}{\lvert\mathcal H\rvert}(2^{-k}+2^{-m})$ 이다. 크기 $N=\lvert\mathcal H\rvert 2^m$ 인 집합 위의 분포 $Z$ 에 대해 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $\Delta(Z,U)\le\frac12\sqrt{N\thinspace\mathrm{CP}(Z)-1}$ 이고, 여기에 넣으면 정리가 나온다.

## 엔트로피 손실의 하한

어떤 $(k,\varepsilon)$ 추출기도 출력 길이가 $m\le d+k-2\log\_2(1/\varepsilon)+O(1)$ 이다[^3]. 잔여 해시 보조정리의 손실 $2\log\_2(1/\varepsilon)$ 은 상수 차이를 빼면 줄일 수 없다. 같은 논문은 씨 길이도 $d\ge\log\_2(n-k)+2\log\_2(1/\varepsilon)-O(1)$ 이어야 함을 보인다.

# 활용

- 키 유도. 키 교환으로 합의한 값은 균등하지 않으므로 대칭키로 쓰기 전에 추출기를 거친다. HKDF(HMAC-based key derivation function)의 추출 단계가 HMAC(hash-based message authentication code)을 이 용도로 쓴다[^4].
- 비밀성 증폭(privacy amplification). 두 사람이 공유한 비트열에 대해 도청자가 일부 정보를 가졌을 때, 공개 채널로 해시 함수를 골라 적용하면 도청자에게 균등에 가까운 더 짧은 키가 남는다[^5]. 양자 키 분배(quantum key distribution)의 마지막 단계가 이것이다.
- [유사난수 생성기](pseudorandom-generators.md)의 구성. 일반 [일방향 함수](one-way-functions.md)에서 유사난수 생성기를 만드는 Håstad–Impagliazzo–Levin–Luby 구성은 하드코어 비트(hardcore bit)들의 엔트로피를 잔여 해시 보조정리로 균등한 비트로 바꾼다[^2].

[^1]: R. Impagliazzo, L. A. Levin, M. Luby, "Pseudo-random generation from one-way functions", STOC 1989, 12–24.
[^2]: J. Håstad, R. Impagliazzo, L. A. Levin, M. Luby, "A pseudorandom generator from any one-way function", SIAM Journal on Computing 28 (1999), 1364–1396.
[^3]: J. Radhakrishnan, A. Ta-Shma, "Bounds for dispersers, extractors, and depth-two superconcentrators", SIAM Journal on Discrete Mathematics 13 (2000), 2–24.
[^4]: H. Krawczyk, "Cryptographic extraction and key derivation: the HKDF scheme", CRYPTO 2010, LNCS 6223, 631–648.
[^5]: C. H. Bennett, G. Brassard, C. Crépeau, U. M. Maurer, "Generalized privacy amplification", IEEE Transactions on Information Theory 41 (1995), 1915–1923.

# 연관 문서

## 선수지식

- [범용 해시족](universal-hashing.md)
- [Shannon 엔트로피](entropy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #probability #information_theory #cryptography
