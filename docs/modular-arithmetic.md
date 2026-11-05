# 정수의 합동

# 개요

**정수의 합동(congruence)** 은 두 정수의 차가 주어진 수의 배수일 때 둘을 같다고 보는 관계다. 시계는 12 시 다음에 1 시로 돌아가고 요일은 7 일마다, 각도는 360 도마다 제자리로 온다. 합동은 이렇게 일정 주기마다 같은 값이 반복되는 산술을 정수 위에서 정의해, 큰 수의 계산을 나머지만으로 끝낸다.

# 직관

월요일에서 $100$ 일 뒤가 무슨 요일인지 묻는다. 요일은 $7$ 일마다 반복되므로 $100$ 을 $7$ 로 나눈 나머지 $2$ 만 보면 되고, 답은 수요일이다. $100$ 과 $2$ 는 $7$ 의 배수만큼 차이 나서 요일 계산에서 구별되지 않는다.

$2^{1000}$ 을 $7$ 로 나눈 나머지도 같은 방법으로 구한다. $2^3=8$ 은 $7$ 로 나눈 나머지가 $1$ 이므로, $2^{1000}=(2^3)^{333}\cdot 2$ 의 나머지는 $1^{333}\cdot 2=2$ 다. 곱하기 전에 나머지로 줄여도 곱의 나머지가 같아서, $300$ 자리가 넘는 수를 쓰지 않고 답이 나온다.

나눗셈은 이렇게 되지 않는다. $6$ 으로 나눈 나머지만 볼 때 $2\times 2=4$ 이고 $2\times 5=10$ 의 나머지도 $4$ 이므로, "$4$ 를 $2$ 로 나눈 값" 이 $2$ 인지 $5$ 인지 정해지지 않는다. $2$ 와 $6$ 이 공약수 $2$ 를 가져서 생기는 일이고, $7$ 로 나눈 나머지에서는 $0$ 이 아닌 수로 언제나 나눌 수 있다.

# 정의

## 합동

$m$ 을 양의 정수, $a$ 와 $b$ 를 정수라 한다. $a-b$ 가 $m$ 의 정수배이면 $a$ 와 $b$ 가 $m$ 을 법(modulus)으로 **합동** 이라 하고 다음과 같이 쓴다.

$$
a\equiv b\pmod m\iff m\mid(a-b)
$$

$m\mid a$ 는 어떤 정수 $k$ 에 대해 $a=mk$ 임을 뜻한다. $100-2=98=7\cdot 14$ 이므로 $100\equiv 2\pmod 7$ 이다.

합동은 [동치관계](equivalence-relations.md)이고, $a$ 의 동치류 $[a]$ 를 **잉여류(residue class)** 라 한다. 법 $7$ 에서 $[2]=\lbrace\dots,-5,2,9,16,\dots\rbrace$ 이다. 잉여류는 나머지 $0$ 부터 $m-1$ 까지 $m$ 개이고, 그 집합을 $\mathbb Z/m\mathbb Z$ 로 쓴다.

## 잉여류환

$\mathbb Z/m\mathbb Z$ 위의 덧셈과 곱셈을 대표원으로 정의한다.

$$
[a]+[b]=[a+b],\qquad [a]\cdot[b]=[ab]
$$

법 $7$ 에서 $[3]+[5]=[8]=[1]$ 이고 $[3]\cdot[5]=[15]=[1]$ 이다. 이 연산을 갖춘 $\mathbb Z/m\mathbb Z$ 를 **잉여류환(residue class ring)** 이라 한다.

## 역원과 Euler 함수

$ab \equiv 1 \pmod m$ 인 $b$ 가 있으면 $a$ 가 법 $m$ 에서 **가역(invertible)** 이라 하고 $b$ 를 역원이라 한다. 법 $7$ 에서 $3\cdot 5\equiv 1$ 이므로 $5$ 가 $3$ 의 역원이다. 법 $6$ 에서 $2$ 는 어떤 수를 곱해도 나머지가 짝수이므로 가역이 아니다.

가역인 잉여류의 집합을 $(\mathbb{Z}/m\mathbb{Z})^\times$ 로 쓰고, 그 원소 수를 **Euler 함수(Euler's totient function)** $\varphi(m)$ 이라 한다. 법 $12$ 에서 가역인 것은 $1,5,7,11$ 이므로 $\varphi(12)=4$ 다.

# 성질

## 연산의 잘 정의됨

$a \equiv b$ , $c \equiv d \pmod m$ 이면 다음이 성립한다.

$$
\begin{aligned}
a+c&\equiv b+d\pmod m\cr
ac&\equiv bd\pmod m
\end{aligned}
$$

덧셈은 차를 각각 $m$ 의 배수로 쓰면 나오고, 곱셈은 $ac-bd=a(c-d)+d(a-b)$ 로 분해하면 두 항 모두 $m$ 의 배수다. 그러므로 잉여류환의 연산은 대표원 선택과 무관하고, $\mathbb{Z}/m\mathbb{Z}$ 는 항등원을 가진 가환 [환](rings.md)이며 몫사상 $\mathbb{Z} \to \mathbb{Z}/m\mathbb{Z}$ 는 환 준동형이다.

거듭제곱도 곱셈의 반복이므로 보존된다. 지수 자리는 다르다. $a^e \bmod m$ 에서 $e$ 는 $m$ 이 아니라 $\varphi(m)$ 을 법으로 줄여야 하고 그 근거가 [Euler 정리](fermat-euler-theorem.md)다.

## 소거와 가역성

$m \ge 2$ 일 때 $a$ 가 법 $m$ 에서 역원을 갖는 것과 $\gcd(a, m) = 1$ 인 것은 동치다.

증명의 요지. 역원이 있으면 $ab=1+km$ 이므로 $a$ 와 $m$ 의 공약수는 $1$ 을 나눈다. 역으로 $\gcd(a,m)=1$ 이면 Bézout 항등식(Bézout's identity)에서 $ax+my=1$ 인 정수 $x,y$ 가 있고 $\bmod m$ 으로 보면 $x$ 가 역원이다. 이 $x$ 를 구하는 절차가 확장 [유클리드 알고리즘](euclidean-algorithm.md)이다.

$\gcd(c, m) = d$ 일 때 $c$ 를 소거하려면 법도 함께 줄인다.

$$
ca\equiv cb\pmod m\iff a\equiv b\pmod{m/d}
$$

$\bmod 6$ 에서 $2 \cdot 2 \equiv 2 \cdot 5$ 이지만 $2 \not\equiv 5$ 다. $d = 2$ 이므로 소거하면 법이 $3$ 으로 줄고, $2 \equiv 5 \pmod 3$ 이다.

## 빠른 거듭제곱

지수를 이진 전개하면 곱셈 횟수가 $O(\log e)$ 이고, 매 단계 나머지를 취하므로 중간값이 $m^2$ 를 넘지 않는다.

Fermat 소수판정, [RSA](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 암복호화, [이산로그](discrete-logarithm.md) 기반 프로토콜이 이 절차로 계산된다.

## 구조의 분해

$m = m_1 m_2$ 이고 $\gcd(m_1, m_2) = 1$ 이면 환 동형이 성립한다.

$$
\mathbb{Z}/m\mathbb{Z}\thickspace\cong\thickspace\mathbb{Z}/m_1\mathbb{Z}\times\mathbb{Z}/m_2\mathbb{Z}
$$

이것이 [중국인의 나머지 정리](chinese-remainder-theorem.md)의 환 동형 꼴이다. 가역원끼리 대응하므로 $\varphi(m_1m_2)=\varphi(m_1)\varphi(m_2)$ 이고, 소수 거듭제곱에서 $\varphi(p^k)=p^k-p^{k-1}$ 이므로

$$
\varphi(m)=m\prod_{p\mid m}\left(1-\frac1p\right)
$$

이다. $\varphi(12)=12\cdot\frac12\cdot\frac23=4$ 다. 법이 소수 $p$ 면 $0$ 이 아닌 모든 원소가 가역이므로 $\mathbb{Z}/p\mathbb{Z}$ 는 체이고 $(\mathbb{Z}/p\mathbb{Z})^\times$ 는 크기 $p-1$ 의 순환군이다. 체 $\mathbb Z/p\mathbb Z$ 는 [유한체](finite-fields.md)의 첫 예다.

# 활용

- 주기와 인덱스. 원형 버퍼, [해시 테이블](hash-tables.md)의 버킷 선택, 요일 계산, 유한한 각도 표현이 나머지 연산이다. 음수의 나머지 부호는 언어마다 다르다. Python 의 `%` 는 법과 같은 부호를 주고 C 계열은 피제수의 부호를 따르므로 `((x % m) + m) % m` 으로 정규화한다.
- 검산과 오류 검출. 큰 수의 계산을 작은 법으로 줄여 확인하는 구거법이 체크섬, ISBN(International Standard Book Number)과 계좌번호의 검사숫자, CRC(cyclic redundancy check) 로 확장된다. 나머지가 다르면 틀렸고 같다고 맞는 것은 아니므로 모두 필요조건 검사다.
- 암호. 법 $m$ 에서의 곱셈은 쉽고 이산로그와 큰 수의 소인수분해는 어렵다고 믿어진다. RSA 와 Diffie–Hellman 키 교환(Diffie–Hellman key exchange)이 이 차이를 쓰며, 지수 연산의 정확성은 Euler 정리가, 실행 가능성은 빠른 거듭제곱이 보장한다.
- 법의 명시. 서로 다른 법에서 얻은 결과를 섞어 쓸 수 없고, 역원의 존재 여부도 법에 따라 달라진다. 그래서 합동식에는 법을 항상 함께 적는다.[^1]

[^1]: MIT 6.042J, *Number Theory I: GCDs*. 정수 나눗셈, 최대공약수, Bézout 항등식과 법 연산의 기초. https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/mit6_042js15_session12.pdf

# 연관 문서

## 선수지식

- [동치관계](equivalence-relations.md)
- [정수론 개관](number-theory-overview.md)

## 더 알아보기

### 합동식의 계산과 응용

- [유클리드 알고리즘](euclidean-algorithm.md)
- [중국인의 나머지 정리](chinese-remainder-theorem.md)
- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)
- [이산로그](discrete-logarithm.md)
- [범용 해시족](universal-hashing.md)
- [Lucas 정리](lucas-theorem.md)

### 대수 구조 확장

- [환](rings.md)
- [유한체](finite-fields.md)
- [p 진수](p-adic-numbers.md)

#number_theory #algebra #cryptography #computation
