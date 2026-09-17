# RSA 암호

# 개요

RSA는 1977년에 제안된 최초의 실용적 공개키 암호이자 서명 방식이다[^1]. 두 소수의 곱 $n=pq$ 를 공개하고 소인수 $p$ , $q$ 는 비밀로 둔다. $n$ 만 아는 사람은 거듭제곱 $m\mapsto m^e\bmod n$ 을 계산할 수 있지만, 그 역연산은 $p$ , $q$ 를 아는 사람만 효율적으로 할 수 있다.

수학적 골격은 두 개뿐이다. [Euler 정리](fermat-euler-theorem.md)가 지수의 주기를 정해 주고, [중국인의 나머지 정리](chinese-remainder-theorem.md)가 $\bmod n$ 계산을 $\bmod p$ 와 $\bmod q$ 로 쪼개 준다. 정당성 증명과 복호화 가속이 모두 이 두 도구로 나온다.

RSA 의 안전성은 "큰 합성수의 인수분해가 어렵다"는 가정에 의존한다. 이 가정은 증명되어 있지 않다[^2]([P 대 NP 문제](p-np.md) 참조). 실제 공격의 대부분은 인수분해가 아니라 잘못된 파라미터 선택이나 패딩 부재를 노린다.

# 직관

[합동 연산](modular-arithmetic.md)에서 가역원들의 곱셈군을 생각하자. $\mathbb{Z}/n\mathbb{Z}$ 의 가역원군 $(\mathbb{Z}/n\mathbb{Z})^\ast$ 의 크기는 Euler 함수 $\varphi(n)$ 이고, 이 [군](groups.md)에서는 Lagrange 정리에 의해 모든 원소가 $\varphi(n)$ 제곱하면 1이 된다. 따라서 지수는 $\varphi(n)$ 을 법으로만 의미가 있다.

여기서 아이디어가 나온다. $e$ 와 $d$ 를 $ed \equiv 1 \pmod{\varphi(n)}$ 이 되도록 잡으면 $(m^e)^d = m^{1 + k\varphi(n)} = m$ 이다. $e$ 를 공개하고 $d$ 를 숨기면, 누구나 암호화할 수 있고 $d$ 를 가진 사람만 복호화할 수 있다.

비대칭성의 원천은 $\varphi(n) = (p-1)(q-1)$ 을 계산하려면 $n$ 의 인수분해가 필요하다는 점이다. $n$ 만 보고 $\varphi(n)$ 을 알아내는 것은 인수분해와 같은 난이도다. $n$ 과 $\varphi(n)$ 을 둘 다 알면 $p + q = n - \varphi(n) + 1$ 과 $pq = n$ 에서 $p$ 와 $q$ 가 이차방정식의 근으로 즉시 나오기 때문이다.

일방향성의 비유로, 두 소수를 곱하는 것은 몇 마이크로초지만 2048비트 곱을 되돌리는 것은 알려진 최선의 알고리즘(수체 체, number field sieve)으로도 준지수 시간이 걸린다.

# 정의

## 키 생성

1. 비슷한 크기의 서로 다른 큰 [소수](primes.md) $p$ , $q$ 를 무작위로 뽑는다(현재 권고는 각 1024비트 이상, 즉 $n$ 이 2048비트 이상).
2. $n=pq$ 로 두고 Euler 함수 값

$$
\varphi(n) = (p-1)(q-1)
$$

를 계산한다. 실무에서는 Carmichael 함수

$$
\lambda(n) = \mathrm{lcm}(p-1,\ q-1)
$$

를 쓰는 편이 지수를 작게 만들어 유리하다. 아래 논의는 $\varphi$ 로 하지만 $\lambda$ 로 바꿔도 그대로 성립한다.

3. $\gcd(e, \varphi(n)) = 1$ 인 공개지수 $e$ 를 고른다. 관례적으로 $e = 65537$ 을 쓴다.
4. [확장 유클리드 알고리즘](euclidean-algorithm.md)으로

$$
ed \equiv 1 \pmod{\varphi(n)}
$$

를 만족하는 개인지수 $d$ 를 구한다.

공개키는 $(n, e)$ 이고 개인키는 $(d, p, q)$ 다. $p$ 와 $q$ 와 $\varphi(n)$ 과 $d$ 는 모두 비밀이어야 한다.

## 암호화와 복호화

평문을 $0\le m<n$ 인 정수로 부호화한 뒤

$$
c \equiv m^{e} \pmod{n}, \qquad m \equiv c^{d} \pmod{n}
$$

로 정의한다. 서명은 역할을 바꾼 것으로, 서명자가 $s = m^d \bmod n$ 을 계산하고 검증자가 $s^e \equiv m$ 인지 확인한다.

두 거듭제곱 모두 반복 제곱법(square-and-multiply)으로 $O(\log e)$ 번의 모듈러 곱셈에 계산된다.

## 정당성

**정리.** 위 설정에서 모든 $0 \le m < n$ 에 대해 $m^{ed} \equiv m \pmod{n}$ 이다.

증명. $ed = 1 + k\varphi(n)$ 인 정수 $k\ge0$ 이 있다. $\bmod p$ 에서 두 경우로 나눈다.

- $p$ 가 $m$ 을 나누면 양변이 모두 $0$ 이다.
- 아니면 [Fermat 소정리](fermat-euler-theorem.md)에 의해 $m^{p-1} \equiv 1 \pmod{p}$ 이고,

$$
m^{ed} = m \cdot \left(m^{p-1}\right)^{k(q-1)} \equiv m \pmod p .
$$

같은 논증이 $q$ 를 법으로 해도 성립한다. 따라서 $m^{ed} - m$ 은 $p$ 로도 $q$ 로도 나누어떨어지고, $p \ne q$ 이므로 [중국인의 나머지 정리](chinese-remainder-theorem.md)(또는 유일분해)에 의해 $n = pq$ 로 나누어떨어진다. 즉 $m^{ed} \equiv m \pmod{n}$ 이다. ∎

Euler 정리만 쓰면 $\gcd(m,n)=1$ 인 경우만 처리되지만, 위처럼 소수별로 나눈 뒤 CRT로 합치면 $m$ 이 $p$ 나 $q$ 의 배수인 예외적인 경우까지 포함된다. 이 "소수별로 확인하고 CRT로 합친다"는 패턴은 RSA 분석 전반에서 반복된다.

## CRT를 이용한 복호화 가속

개인키 보유자는 $p$ , $q$ 를 알므로 다음 값들을 미리 계산해 둘 수 있다.

$$
d_p = d \bmod (p-1), \qquad d_q = d \bmod (q-1), \qquad q_{\mathrm{inv}} = q^{-1} \bmod p .
$$

복호화는

$$
m_p = c^{d_p} \bmod p, \qquad m_q = c^{d_q} \bmod q,
$$

$$
h = q_{\mathrm{inv}}\thinspace(m_p - m_q) \bmod p, \qquad m = m_q + h\thinspace q .
$$

로 수행한다. 마지막 식이 Garner 형식의 CRT 합성이며, $m \equiv m_q \pmod{q}$ 는 자명하고 $m \equiv m_p \pmod{p}$ 는 $h$ 의 정의에서 나온다.

비용 분석: 모듈러 거듭제곱은 모듈러스 비트수 $b$ 에 대해 대략 $b^3$ 에 비례한다. 절반 크기 모듈러스 두 번이면 $2(b/2)^3=b^3/4$ 이므로 약 4배 빠르다. 표준 구현은 개인키에 $d_p$ , $d_q$ , $q_{\mathrm{inv}}$ 를 함께 저장한다.

# 성질

## 안전성의 근거

RSA의 안전성은 여러 가정의 사슬 위에 있다.

- **인수분해 문제.** $n=pq$ 에서 $p$ , $q$ 를 구하는 문제. 알려진 최선은 일반 수체 체로, 복잡도가 대략 $\exp\bigl(c(\log n)^{1/3}(\log\log n)^{2/3}\bigr)$ 이다. 다항시간 알고리즘은 알려져 있지 않다[^2]. 인수분해의 판정 버전은 NP 와 coNP 에 모두 속하므로, NP-완전이면 두 부류가 같아진다([NP-완전성](np-completeness.md) 참조).
- **RSA 문제.** $(n,e,c)$ 에서 $c^{1/e}\bmod n$ 을 구하는 문제. 인수분해할 수 있으면 RSA 문제를 풀 수 있다. 역방향의 환원은 알려져 있지 않고, 작은 $e$ 에 대해서는 대수적 환원이 존재할 수 없다는 결과가 있다[^3].
- **개인키 노출의 등가성.** $d$ 를 알면 $ed - 1$ 이 $\varphi(n)$ 의 배수라는 사실로부터 확률적 다항시간에 $n$ 을 인수분해할 수 있다. "개인지수 복원"과 "인수분해"는 같은 난이도다.

앞의 두 항목은 증명되지 않은 가정이고 셋째는 정리다. 따라서 RSA 의 안전성은 인수분해와 RSA 문제의 난이도 위에 놓인다. Shor 알고리즘은 양자 컴퓨터에서 인수분해를 다항시간에 해결하므로, 충분한 규모의 양자 컴퓨터가 등장하면 RSA 는 무너진다.

## 흔한 취약점

교과서 RSA(패딩 없는 순수 거듭제곱)는 그 자체로 안전하지 않다. 결정론적이므로 같은 평문이 같은 암호문을 주고, 곱셈 준동형성 $E(m_1)E(m_2)=E(m_1m_2)$ 때문에 변조가 가능하다.

- **작은 $e$ 와 패딩 부재.** $e=3$ 이고 $m^3<n$ 이면 $c$ 의 정수 세제곱근이 곧 $m$ 이다. 같은 $m$ 을 서로 다른 세 개의 모듈러스로 보낸 경우에도 CRT로 $m^3\bmod n_1n_2n_3$ 를 복원해 세제곱근을 취할 수 있다(Håstad 방송 공격).
- **공통 모듈러스 공격.** 같은 $n$ 을 공유하며 서로소인 $e_1$ , $e_2$ 를 쓰는 두 수신자에게 같은 $m$ 이 전송되면, $ae_1+be_2=1$ 인 Bézout 계수로

$$
c_1^{a} c_2^{b} \equiv m^{a e_1 + b e_2} \equiv m \pmod n
$$

이 되어 개인키 없이 평문이 복원된다. 모듈러스는 절대 공유하지 않는다.
- **소인수 공유.** 난수원이 빈약해 서로 다른 공개키가 같은 소수를 쓰면, 공개된 모듈러스들 사이의 $\gcd$ 만으로 둘 다 인수분해된다. 실제 인터넷 인증서 대량 조사에서 발견된 취약 사례다.
- **작은 개인지수.** $d<n^{1/4}/3$ 정도로 작으면 연분수 전개로 $d$ 가 복원된다(Wiener 공격). 복호화를 빠르게 하려고 $d$ 를 작게 잡아서는 안 된다.
- **CRT 고장 공격.** CRT 복호화 도중 $\bmod p$ 계산만 오류가 나면 잘못된 서명 $s'$ 에 대해 $\gcd(s'^e-m,n)=q$ 가 되어 즉시 인수분해된다. 구현은 결과를 재검증해야 한다.

이 공격들은 대부분 대수적 구조를 그대로 노출한 데서 온다. 표준 대응은 무작위화된 패딩(암호화는 OAEP, 서명은 PSS)을 써서 평문이 대수적 관계를 갖지 않게 만드는 것이다[^2].

## 구조적 관찰

- $(\mathbb{Z}/n\mathbb{Z})^\ast$ 는 CRT에 의해 $(\mathbb{Z}/p\mathbb{Z})^\ast \times (\mathbb{Z}/q\mathbb{Z})^\ast$ 와 군 동형이다. 각 성분이 순환군이므로 전체 군의 지수(exponent)는 $\lambda(n) = \mathrm{lcm}(p-1, q-1)$ 이며, $ed \equiv 1 \pmod{\lambda(n)}$ 만으로도 정당성 증명이 통과한다.
- 제곱근이 넷이라는 사실이 여러 공격의 근원이다. $x^2 \equiv y^2 \pmod{n}$ 이고 $x \not\equiv \pm y$ 이면 $\gcd(x-y, n)$ 이 진약수다. Fermat 소정리 기반의 소수판정(Miller–Rabin)과 인수분해 알고리즘이 모두 이 성질을 쓴다.
- $n$ 이 [환](rings.md) $\mathbb{Z}/n\mathbb{Z}$ 을 정의하고 CRT는 환 동형 $\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/q\mathbb{Z}$ 를 준다([몫환](ideals-quotient-rings.md)). 두 성분은 [유한체](finite-fields.md)다.

# 활용

## 구현 예제

작은 소수로 전체 흐름을 보인다. 실제 사용에는 검증된 라이브러리와 OAEP 패딩이 필수다.

```python
from math import gcd

def egcd(a, b):
    if b == 0:
        return (a, 1, 0)
    g, x, y = egcd(b, a % b)
    return (g, y, x - (a // b) * y)

def inverse(a, m):
    g, x, _ = egcd(a % m, m)
    assert g == 1, "역원이 없다"
    return x % m

# 1) 키 생성 (데모용 작은 소수)
p, q = 1000003, 1000033
n = p * q
phi = (p - 1) * (q - 1)
e = 65537
assert gcd(e, phi) == 1
d = inverse(e, phi)

# 2) 암호화 / 복호화
m = 123456789012 % n
c = pow(m, e, n)
m_back = pow(c, d, n)

# 3) CRT 가속 복호화
dp, dq = d % (p - 1), d % (q - 1)
q_inv = inverse(q, p)

def decrypt_crt(c):
    mp = pow(c, dp, p)
    mq = pow(c, dq, q)
    h = (q_inv * (mp - mq)) % p
    return mq + h * q

print("n =", n)
print("복호화:", m_back, decrypt_crt(c))

# 4) 공통 모듈러스 공격 시연: 같은 n, 서로소인 두 공개지수
e1, e2 = 17, 65537
c1, c2 = pow(m, e1, n), pow(m, e2, n)
g, a, b = egcd(e1, e2)                            # g = 1 이라야 공격이 성립한다
recovered = (pow(c1, a, n) * pow(c2, b, n)) % n   # 음수 지수는 pow 가 역원으로 처리
print("공통 모듈러스 공격으로 복원한 평문:", recovered)
```

CRT 복호화는 크기가 절반인 모듈러스에서 거듭제곱을 두 번 하므로 대략 4 배 빠르다.

## 다른 주제와의 연결

- **소수 생성.** 키 생성은 큰 소수를 뽑는 절차에 의존한다. 무작위 홀수를 뽑아 Miller–Rabin 확률적 소수판정을 통과시키는 방식이 표준이며, 소수 정리가 필요한 시도 횟수(대략 $\ln(2^b)/2$ 회)를 알려 준다.
- **수론 알고리즘.** 확장 [유클리드 알고리즘](euclidean-algorithm.md), 반복 제곱법, Montgomery 곱셈이 구현의 뼈대다.
- **계산 이론.** RSA의 존재 자체가 일방향함수의 존재를 가정한다. 일방향함수가 존재하면 P ≠ NP 이므로, RSA의 안전성은 [P 대 NP 문제](p-np.md)보다 강한 가정이다. 반대로 P ≠ NP 라 해도 RSA가 안전하다는 보장은 없다.
- **후속 암호계.** 이산로그 기반(Diffie–Hellman, 타원곡선)과 격자 기반 방식은 같은 공개키 틀에 다른 난제를 끼운 것이다. 양자 내성 표준화는 격자·부호·해시 기반으로 이동 중이다.
- **프로토콜 위치.** 실제 TLS에서 RSA는 대칭키 교환과 인증서 서명에 쓰이고, 대량 데이터는 대칭 암호가 처리한다. 공개키 연산이 느리기 때문이다.

[^1]: R. L. Rivest, A. Shamir, L. Adleman, A Method for Obtaining Digital Signatures and Public-Key Cryptosystems, Communications of the ACM 21(2), 1978, https://people.csail.mit.edu/rivest/Rsapaper.pdf
[^2]: D. Boneh, Twenty Years of Attacks on the RSA Cryptosystem, Notices of the AMS 46(2), 1999, https://crypto.stanford.edu/~dabo/papers/RSA-survey.pdf
[^3]: D. Boneh, R. Venkatesan, "Breaking RSA may not be equivalent to factoring", EUROCRYPT 1998, LNCS 1403, 59–71. 작은 $e$ 에 대해 RSA 문제를 푸는 대수적 환원에서 인수분해 알고리즘을 얻으면 인수분해 자체가 다항시간에 풀린다는 결과다.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)
- [중국인의 나머지 정리](chinese-remainder-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #number_theory #computation
