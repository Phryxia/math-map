# RSA 암호

# 개요

**RSA 암호(RSA cryptosystem, Rivest–Shamir–Adleman)** 는 누구나 암호화할 수 있지만 비밀을 아는 사람만 복호화할 수 있는 공개키 암호이자 서명 방식이다. 예로 처음 연락하는 상대에게 열린 통신선으로 카드 번호를 보내려면, 미리 비밀 값을 나눠 갖지 않은 상태에서 엿듣는 사람이 읽지 못하게 해야 한다. RSA 는 받는 사람이 두 소수의 곱을 공개하고 보내는 사람이 그 곱을 법으로 메시지를 거듭제곱해 보내게 하며, 두 소수를 아는 사람만 그 거듭제곱의 역연산을 계산할 수 있다.

# 직관

받는 사람이 $n=55$ 와 $e=3$ 을 공개한다. 보내는 사람은 메시지 $13$ 을 세제곱해 $55$ 로 나눈 나머지를 보낸다. $13^2=169\equiv 4$ 이고 $4\cdot 13=52$ 이므로 보내는 값은 $52$ 다. [합동 연산](modular-arithmetic.md)에서 이 세제곱은 곱셈 두 번이면 끝난다.

엿듣는 사람은 $52$ 에서 $13$ 을 되찾아야 한다. 정수의 세제곱근처럼 크기로 좁혀 갈 방법이 없으므로 $0$ 부터 $54$ 까지 세제곱해 보는 수밖에 없고, $n$ 이 $617$ 자리이면 이 시험은 현실적인 시간 안에 끝나지 않는다.

받는 사람은 세제곱을 푸는 대신 한 번 더 거듭제곱한다. $55$ 와 서로소인 수는 $40$ 제곱하면 $1$ 이 된다. 그래서 $3d$ 가 $40$ 의 배수보다 $1$ 큰 $d=27$ 을 고르면 $3\cdot 27=81=2\cdot 40+1$ 이므로 $(13^3)^{27}=13\cdot(13^{40})^2\equiv 13$ 이다. 실제로 $52^{27}\equiv 13\pmod{55}$ 다.

$40$ 은 $55=5\cdot 11$ 에서 $(5-1)(11-1)$ 로 나온다. $55$ 를 두 소수로 쪼갤 줄 아는 사람만 $40$ 을 알고, $40$ 을 알아야 $27$ 을 구한다. 두 소수를 곱하기는 쉽고 곱을 쪼개기는 어려우므로, 쪼개는 방법을 미리 아는 받는 사람만 복호할 수 있다.

# 정의

## 키 생성

**RSA 키 생성(RSA key generation)** 은 다음 네 단계다. RSA 는 Rivest, Shamir, Adleman 이 1977 년에 제안한 최초의 실용적 공개키 암호다[^1].

1. 비슷한 크기의 서로 다른 큰 [소수](primes.md) $p$ , $q$ 를 무작위로 뽑는다. 현재 권고는 각 1024비트 이상, 곧 $n$ 이 2048비트 이상이다.
2. $n=pq$ 로 두고 Euler 함수(Euler's totient function) 값 $\varphi(n) = (p-1)(q-1)$ 을 계산한다.
3. $\gcd(e, \varphi(n)) = 1$ 인 공개지수(public exponent) $e$ 를 고른다. 관례적으로 $e = 65537$ 을 쓴다.
4. [확장 유클리드 알고리즘](euclidean-algorithm.md)으로 $ed \equiv 1 \pmod{\varphi(n)}$ 을 만족하는 개인지수(private exponent) $d$ 를 구한다.

공개키는 $(n, e)$ 이고 개인키는 $(d, p, q)$ 다. $p$ 와 $q$ 와 $\varphi(n)$ 과 $d$ 는 모두 비밀이어야 한다.

직관 절의 예는 $p=5$, $q=11$, $n=55$, $\varphi(55)=40$ 이다. $\gcd(3,40)=1$ 이므로 $e=3$ 을 쓸 수 있다. $40=13\cdot 3+1$ 에서 $1=40-13\cdot 3$ 이므로 $d\equiv -13\equiv 27\pmod{40}$ 이다.

$\varphi(n)$ 대신 [Carmichael 함수](carmichael-function.md) $\lambda(n) = \mathrm{lcm}(p-1,\ q-1)$ 로 $ed\equiv 1\pmod{\lambda(n)}$ 인 $d$ 를 구해도 된다. 위 예에서 $\lambda(55)=20$ 이고 $d=7$ 이다.

## 암호화와 복호화

**암호화(encryption)** 와 **복호화(decryption)** 는 평문을 $0\le m\lt n$ 인 정수로 부호화한 뒤 다음과 같이 정의한다.

$$
c \equiv m^{e} \pmod{n}, \qquad m \equiv c^{d} \pmod{n}
$$

위 예에서 $m=13$ 은 $c=52$ 가 되고, $52^{27}\equiv 13$ 으로 돌아온다. 두 거듭제곱 모두 반복 제곱법(square-and-multiply)으로 계산한다.

**RSA 서명(RSA signature)** 은 역할을 바꾼 것이다. 서명자가 $s = m^d \bmod n$ 을 계산하고 검증자가 $s^e \equiv m$ 인지 확인한다. 위 예에서 $m=2$ 의 서명은 $2^{27}\equiv 18\pmod{55}$ 이고, $18^3=5832=106\cdot 55+2$ 이므로 검증을 통과한다.

## CRT 를 이용한 복호화

개인키 보유자는 $p$ , $q$ 를 알므로 다음 값들을 미리 계산해 둘 수 있다.

$$
d_p = d \bmod (p-1), \qquad d_q = d \bmod (q-1), \qquad q_{\mathrm{inv}} = q^{-1} \bmod p .
$$

**CRT 복호화(CRT decryption)** 는 [중국인의 나머지 정리](chinese-remainder-theorem.md)(Chinese remainder theorem, CRT)로 $\bmod n$ 계산을 $\bmod p$ 와 $\bmod q$ 로 나누어 하는 다음 절차다.

$$
m_p = c^{d_p} \bmod p, \qquad m_q = c^{d_q} \bmod q,
$$

$$
h = q_{\mathrm{inv}}\thinspace(m_p - m_q) \bmod p, \qquad m = m_q + h\thinspace q .
$$

마지막 식이 Garner 형식(Garner's formula)의 CRT 합성이다.

위 예에서 $d_p=27\bmod 4=3$, $d_q=27\bmod 10=7$, $q_{\mathrm{inv}}=11^{-1}\bmod 5=1$ 이다. $c=52$ 이면 $m_p=2^3\bmod 5=3$, $m_q=8^7\bmod 11=2$ 이고, $h=1\cdot(3-2)=1$, $m=2+1\cdot 11=13$ 이다.

# 성질

## 정당성

$ed\equiv 1\pmod{\varphi(n)}$ 이면 모든 $0 \le m \lt n$ 에 대해 $m^{ed} \equiv m \pmod{n}$ 이다.

$ed = 1 + k\varphi(n)$ 인 정수 $k\ge0$ 이 있다. $\bmod p$ 에서 두 경우로 나눈다.

- $p$ 가 $m$ 을 나누면 양변이 모두 $0$ 이다.
- 아니면 [Fermat 소정리](fermat-euler-theorem.md)(Fermat's little theorem)로 $m^{p-1} \equiv 1 \pmod{p}$ 이므로 $m^{ed} = m \cdot \left(m^{p-1}\right)^{k(q-1)} \equiv m \pmod p$ 다.

같은 논증이 $q$ 를 법으로 해도 성립한다. 따라서 $m^{ed} - m$ 은 $p$ 로도 $q$ 로도 나누어떨어지고, $p \ne q$ 이므로 $n = pq$ 로 나누어떨어진다.

Euler 정리(Euler's theorem)만 쓰면 $\gcd(m,n)=1$ 인 경우만 처리된다. 위처럼 소수별로 나눈 뒤 CRT 로 합치면 $m$ 이 $p$ 나 $q$ 의 배수인 경우까지 포함된다. 위 예에서 $m=10$ 은 $55$ 와 서로소가 아니지만 $10^3=1000\equiv 10$, $10^{27}\equiv 10$ 이다.

## Carmichael 함수와 군의 지수

$(\mathbb{Z}/n\mathbb{Z})^\ast$ 는 CRT 로 $(\mathbb{Z}/p\mathbb{Z})^\ast \times (\mathbb{Z}/q\mathbb{Z})^\ast$ 와 [군](groups.md) 동형이다. 각 성분이 순환군이므로 전체 군의 지수(exponent)는 $\lambda(n) = \mathrm{lcm}(p-1, q-1)$ 이며, $ed \equiv 1 \pmod{\lambda(n)}$ 만으로도 정당성 증명이 통과한다. 위 예에서 $2^{10}=1024\equiv 34$ 이고 $34^2=1156\equiv 1$ 이므로 $2^{20}\equiv 1\pmod{55}$ 다.

$n$ 은 [환](rings.md) $\mathbb{Z}/n\mathbb{Z}$ 를 정의하고 CRT 는 환 동형 $\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/q\mathbb{Z}$ 를 준다([몫환](ideals-quotient-rings.md)). 두 성분은 [유한체](finite-fields.md)다.

## 계산 비용

반복 제곱법은 $O(\log e)$ 번의 모듈러 곱셈으로 $m^e$ 를 계산한다. 모듈러 거듭제곱은 모듈러스 비트수 $b$ 에 대해 대략 $b^3$ 에 비례한다. CRT 복호화는 절반 크기 모듈러스로 두 번 계산하므로 $2(b/2)^3=b^3/4$ 이고 약 4배 빠르다. 표준 구현은 개인키에 $d_p$ , $d_q$ , $q_{\mathrm{inv}}$ 를 함께 저장한다.

## 안전성의 근거

RSA 의 안전성은 다음 세 사실에 걸려 있다.

- 인수분해 문제(integer factorization problem)는 $n=pq$ 에서 $p$ , $q$ 를 구하는 문제다. 알려진 최선은 [수체 체](number-field-sieve.md)(number field sieve)로, 복잡도가 대략 $\exp\bigl(c(\log n)^{1/3}(\log\log n)^{2/3}\bigr)$ 이다. 다항시간 알고리즘은 알려져 있지 않다[^2]. 인수분해의 판정 버전은 NP(nondeterministic polynomial time)와 coNP 에 모두 속하므로, NP-완전이면 두 부류가 같아진다([NP-완전성](np-completeness.md) 참조).
- RSA 문제(RSA problem)는 $(n,e,c)$ 에서 $c^{1/e}\bmod n$ 을 구하는 문제다. 인수분해할 수 있으면 RSA 문제를 풀 수 있다. 역방향의 환원은 알려져 있지 않고, 작은 $e$ 에 대해서는 대수적 환원이 존재할 수 없다는 결과가 있다[^3].
- $d$ 를 알면 $ed - 1$ 이 $\varphi(n)$ 의 배수이므로 확률적 다항시간에 $n$ 을 인수분해할 수 있다. 개인지수 복원과 인수분해는 같은 난이도다.

$n$ 과 $\varphi(n)$ 을 둘 다 알면 $p + q = n - \varphi(n) + 1$ 과 $pq = n$ 에서 $p$ 와 $q$ 가 이차방정식의 근으로 나온다. 위 예에서 $p+q=55-40+1=16$ 이고 $t^2-16t+55=0$ 의 근이 $5$ 와 $11$ 이다. 그래서 $n$ 만 보고 $\varphi(n)$ 을 알아내는 것도 인수분해와 같은 난이도다.

앞의 두 항목은 증명되지 않은 가정이고 셋째는 정리다[^2]. [Shor 알고리즘](shor-algorithm.md)은 양자 컴퓨터에서 인수분해를 다항시간에 해결하므로, 충분한 규모의 양자 컴퓨터가 등장하면 RSA 는 무너진다.

## 흔한 취약점

교과서 RSA(textbook RSA)는 패딩 없는 순수 거듭제곱이고, 그 자체로 안전하지 않다. 결정론적이므로 같은 평문이 같은 암호문을 주고, 곱셈 준동형성 $E(m_1)E(m_2)=E(m_1m_2)$ 로 변조가 가능하다. 실제 공격의 대부분은 인수분해가 아니라 다음과 같은 잘못된 파라미터 선택이나 패딩 부재를 노린다[^2].

- 작은 $e$ 와 패딩 부재: $e=3$ 이고 $m^3\lt n$ 이면 $c$ 의 정수 세제곱근이 곧 $m$ 이다. 같은 $m$ 을 서로 다른 세 개의 모듈러스로 보낸 경우에도 CRT 로 $m^3\bmod n_1n_2n_3$ 를 복원해 세제곱근을 취할 수 있고, 이것이 Håstad 방송 공격(Håstad's broadcast attack)이다.
- 공통 모듈러스 공격(common modulus attack): 같은 $n$ 을 공유하며 서로소인 $e_1$ , $e_2$ 를 쓰는 두 수신자에게 같은 $m$ 이 전송되면, $ae_1+be_2=1$ 인 Bézout 계수로 $c_1^{a} c_2^{b} \equiv m^{a e_1 + b e_2} \equiv m \pmod n$ 이 되어 개인키 없이 평문이 복원된다. 모듈러스는 공유하지 않는다.
- 소인수 공유: 난수원이 빈약해 서로 다른 공개키가 같은 소수를 쓰면, 공개된 모듈러스들 사이의 $\gcd$ 만으로 둘 다 인수분해된다. 인터넷 인증서 대량 조사에서 발견된 취약 사례다.
- Wiener 공격(Wiener's attack): $d\lt n^{1/4}/3$ 정도로 작으면 $e/n$ 의 [연분수](continued-fractions.md) 전개로 $d$ 가 복원된다. 복호화를 빠르게 하려고 $d$ 를 작게 잡아서는 안 된다.
- CRT 고장 공격(CRT fault attack): CRT 복호화 도중 $\bmod p$ 계산만 오류가 나면 잘못된 서명 $s'$ 에 대해 $\gcd(s'^e-m,n)=q$ 가 되어 즉시 인수분해된다. 구현은 결과를 재검증해야 한다.

이 공격들은 대수적 구조를 그대로 노출한 데서 온다. 표준 대응은 무작위화된 패딩을 써서 평문이 대수적 관계를 갖지 않게 만드는 것이다. 암호화에는 OAEP(optimal asymmetric encryption padding)를, 서명에는 PSS(probabilistic signature scheme)를 쓴다[^2].

## 법 n 의 제곱근

$\bmod n$ 에서 $1$ 의 제곱근은 넷이고, 이것이 여러 공격의 근원이다. $x^2 \equiv y^2 \pmod{n}$ 이고 $x \not\equiv \pm y$ 이면 $\gcd(x-y, n)$ 이 진약수다. 위 예에서 $21^2=441\equiv 1$ 이고 $21\not\equiv\pm 1$ 이므로 $\gcd(20,55)=5$ 가 나온다. Fermat 소정리 기반의 소수판정([Miller–Rabin 판정](miller-rabin-test.md))과 인수분해 알고리즘이 모두 이 성질을 쓴다.

# 활용

- 소수 생성: 키 생성은 큰 소수를 뽑는 절차에 의존한다. 무작위 홀수를 뽑아 Miller–Rabin 확률적 소수판정을 통과시키는 방식이 표준이며, [소수 정리](prime-number-theorem.md)가 필요한 시도 횟수(대략 $\ln(2^b)/2$ 회)를 준다.
- 수론 알고리즘: 확장 유클리드 알고리즘, 반복 제곱법, Montgomery 곱셈(Montgomery multiplication)이 구현의 기본 요소다.
- 계산 이론: RSA 가 안전하면 [일방향 함수](one-way-functions.md)가 존재한다. 일방향 함수가 존재하면 $\mathrm P\ne\mathrm{NP}$ 이므로, RSA 의 안전성은 [P 대 NP 문제](p-np.md)보다 강한 가정이다. 반대로 $\mathrm P\ne\mathrm{NP}$ 라 해도 RSA 가 안전하다는 보장은 없다.
- 후속 암호계: [이산로그](discrete-logarithm.md) 기반(Diffie–Hellman, [타원곡선](elliptic-curves.md))과 [격자](lattices.md) 기반 방식은 같은 공개키 틀에서 다른 문제의 어려움을 쓴다. 양자 내성 표준화는 [격자 기반 후양자 암호](post-quantum-cryptography.md)를 비롯한 격자·부호·해시 기반으로 이동 중이다.
- 프로토콜: 공개키 연산이 느리므로 TLS(transport layer security)에서 RSA 는 대칭키 교환과 인증서의 [전자서명](digital-signatures.md)에 쓰이고, 대량 데이터는 대칭 암호가 처리한다.

[^1]: R. L. Rivest, A. Shamir, L. Adleman, A Method for Obtaining Digital Signatures and Public-Key Cryptosystems, Communications of the ACM 21(2), 1978, https://people.csail.mit.edu/rivest/Rsapaper.pdf
[^2]: D. Boneh, Twenty Years of Attacks on the RSA Cryptosystem, Notices of the AMS 46(2), 1999, https://crypto.stanford.edu/~dabo/papers/RSA-survey.pdf
[^3]: D. Boneh, R. Venkatesan, "Breaking RSA may not be equivalent to factoring", EUROCRYPT 1998, LNCS 1403, 59–71. 작은 $e$ 에 대해 RSA 문제를 푸는 대수적 환원에서 인수분해 알고리즘을 얻으면 인수분해 자체가 다항시간에 풀린다는 결과다.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)
- [중국인의 나머지 정리](chinese-remainder-theorem.md)
- [암호 개관](cryptography-overview.md)

## 더 알아보기

- [전자서명](digital-signatures.md)
- [의미론적 안전성](semantic-security.md)

#cryptography #number_theory #computation
