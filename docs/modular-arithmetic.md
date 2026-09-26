# 정수의 합동

# 개요

시계는 12 시 다음에 1 시로 돌아가고 요일은 7 일마다, 각도는 360 도마다 제자리로 온다. 일정 주기로 되돌아오는 산술을 정수 위에서 세운 것이 합동이다.

무한한 정수 집합을 유한 개의 부류로 줄이면서 덧셈과 곱셈을 그대로 물려받는다. [동치관계](equivalence-relations.md)의 몫 구성 가운데 가장 구체적인 사례이고, 대표원을 바꿔도 답이 같은지를 확인하는 잘 정의됨 검사가 실제로 통과하는 예다. 여기서 얻은 유한 구조가 [환](rings.md)과 [유한체](finite-fields.md)의 첫 예이며 [RSA](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)를 비롯한 공개키 암호의 계산 기반이다.

# 직관

## 나머지의 보존

$(a+b)\bmod m$ 은 $a$ 와 $b$ 를 먼저 줄여도 같고 곱셈도 같다. 매 연산마다 나머지를 취하면 값이 커지지 않으므로 $2^{1000}\bmod7$ 을 1000 자리 수 없이 계산한다.

덧셈, 뺄셈, 곱셈은 그대로 정의되지만 나눗셈은 그렇지 않다. $\bmod 6$ 에서 $2 \times 2 = 4$ 이고 $2 \times 5 \equiv 4$ 이므로 $4$ 를 $2$ 로 나눈 답이 정해지지 않는다. 어떤 수로는 나눌 수 있고 어떤 수로는 없다는 비대칭이 이 이론의 대부분을 정한다.

## 소수 법과 합성수 법

$a$ 가 법 $m$ 에서 가역일 필요충분조건은 $\gcd(a,m)=1$ 이다. 그렇지 않은 $a$ 는 영인자여서 $ab\equiv0$ 인 $b\not\equiv0$ 이 있다.

법이 소수면 $0$ 이 아닌 모든 원소가 역원을 가져 사칙연산이 온전하고, 연립방정식과 다항식의 근을 유리수에서처럼 다룬다. 합성수면 역원이 없는 원소가 생기지만 법을 소인수의 거듭제곱으로 쪼갤 수 있다. 두 경우가 [유한체](finite-fields.md)와 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 이어진다.

# 정의

## 합동

$m$ 을 양의 정수, $a$ 와 $b$ 를 정수라 하자. $a-b$ 가 $m$ 의 정수배이면 $a$ 와 $b$ 가 $m$ 을 법으로 합동이다.

$$
a\equiv b\pmod m\iff m\mid(a-b)
$$

$m\mid a$ 는 어떤 정수 $k$ 에 대해 $a=mk$ 임을 뜻한다. 합동은 동치관계이고 동치류는 나머지 $0$ 부터 $m-1$ 까지 $m$ 개다. 이 동치류들의 집합을 $\mathbb Z/m\mathbb Z$ 로 쓴다.

## 잉여류환

$\mathbb Z/m\mathbb Z$ 위의 덧셈과 곱셈을 대표원으로 정의한다.

$$
[a]+[b]=[a+b],\qquad [a]\cdot[b]=[ab]
$$

이 정의가 대표원 선택과 무관함은 아래에서 증명한다. $\mathbb{Z}/m\mathbb{Z}$ 는 항등원을 가진 가환환이고 몫사상 $\mathbb{Z} \to \mathbb{Z}/m\mathbb{Z}$ 는 환 준동형이다.

## 역원과 오일러 함수

$ab \equiv 1 \pmod m$ 인 $b$ 가 있으면 $a$ 가 법 $m$ 에서 가역이고 $b$ 가 역원이다. 가역인 원소들의 집합 $(\mathbb{Z}/m\mathbb{Z})^\times$ 는 곱셈에 대해 [군](groups.md)을 이루고 그 크기가 오일러 함수 $\varphi(m)$ 이다.

$$
\varphi(m)=m\prod_{p\mid m}\left(1-\frac1p\right)
$$

# 성질

## 연산의 잘 정의됨

$a \equiv b$ , $c \equiv d \pmod m$ 이면 다음이 성립한다.

$$
\begin{aligned}
a+c&\equiv b+d\pmod m\cr
ac&\equiv bd\pmod m
\end{aligned}
$$

덧셈은 차를 각각 $m$ 의 배수로 쓰면 나오고, 곱셈은 $ac-bd=a(c-d)+d(a-b)$ 로 분해하면 두 항 모두 $m$ 의 배수다. 대표원을 바꾸어도 결과의 동치류가 같다.

거듭제곱도 곱셈의 반복이므로 보존된다. 지수 자리는 다르다. $a^e \bmod m$ 에서 $e$ 는 $m$ 이 아니라 $\varphi(m)$ 을 법으로 줄여야 하고 그 근거가 [Euler 정리](fermat-euler-theorem.md)다.

## 소거와 가역성

$m \ge 2$ 일 때 $a$ 가 법 $m$ 에서 역원을 갖는 것과 $\gcd(a, m) = 1$ 인 것은 동치다.

*증명.* 역원이 있으면 $ab=1+km$ 이므로 $a$ 와 $m$ 의 공약수는 $1$ 을 나눈다. 역으로 $\gcd(a,m)=1$ 이면 Bézout 항등식에서 $ax+my=1$ 인 정수 $x,y$ 가 있고 $\bmod m$ 으로 보면 $x$ 가 역원이다. 이 $x$ 를 구하는 절차가 확장 [유클리드 알고리즘](euclidean-algorithm.md)이다.

$\gcd(c, m) = d$ 일 때 $c$ 를 소거하려면 법도 함께 줄인다.

$$
ca\equiv cb\pmod m\iff a\equiv b\pmod{m/d}
$$

$\bmod 6$ 에서 $2 \cdot 2 \equiv 2 \cdot 5$ 이지만 $2 \not\equiv 5$ 인 것은 $d = 2$ 라 법이 $3$ 으로 줄기 때문이고, 실제로 $2 \equiv 5 \pmod 3$ 이다.

## 빠른 거듭제곱

지수를 이진 전개하면 곱셈 횟수가 $O(\log e)$ 이고, 매 단계 나머지를 취하므로 중간값이 $m^2$ 를 넘지 않는다.

Fermat 소수판정, RSA 의 암복호화, 이산로그 기반 프로토콜이 이 절차로 계산된다.

## 구조의 분해

$m = m_1 m_2$ 이고 $\gcd(m_1, m_2) = 1$ 이면 환 동형이 성립한다.

$$
\mathbb{Z}/m\mathbb{Z}\thickspace\cong\thickspace\mathbb{Z}/m_1\mathbb{Z}\times\mathbb{Z}/m_2\mathbb{Z}
$$

이것이 [중국인의 나머지 정리](chinese-remainder-theorem.md)의 구조적 형태이고 $\varphi$ 의 곱셈성이 여기서 따라 나온다. 법이 소수 $p$ 면 $0$ 이 아닌 모든 원소가 가역이므로 $\mathbb{Z}/p\mathbb{Z}$ 는 체이고 $(\mathbb{Z}/p\mathbb{Z})^\times$ 는 크기 $p-1$ 의 순환군이다.

# 활용

- **주기와 인덱스.** 원형 버퍼, 해시 테이블의 버킷 선택, 요일 계산, 유한한 각도 표현이 나머지 연산이다. 음수의 나머지 부호는 언어마다 다르다. Python 의 `%` 는 법과 같은 부호를 주고 C 계열은 피제수의 부호를 따르므로 `((x % m) + m) % m` 으로 정규화한다.
- **검산과 오류 검출.** 큰 수의 계산을 작은 법으로 줄여 확인하는 구거법이 체크섬, ISBN 과 계좌번호의 검사숫자, CRC(cyclic redundancy check) 로 확장된다. 나머지가 다르면 틀렸고 같다고 맞는 것은 아니므로 모두 필요조건 검사다.
- **암호.** 법 $m$ 에서의 곱셈은 쉽고 이산로그와 큰 수의 소인수분해는 어렵다고 믿어진다. 이 비대칭 위에 [RSA](rsa-cryptosystem.md)와 Diffie–Hellman 이 세워졌으며, 지수 연산의 정확성은 Euler 정리가, 실행 가능성은 빠른 거듭제곱이 보장한다.
- **법의 명시.** 서로 다른 법에서 얻은 결과를 섞어 쓸 수 없고 역원의 존재 여부도 법에 따라 달라진다. 합동식에서 법은 문장의 일부다.[^1]

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

### 대수 구조 확장

- [환](rings.md)
- [유한체](finite-fields.md)
- [p 진수](p-adic-numbers.md)

#number_theory #algebra #cryptography #computation
