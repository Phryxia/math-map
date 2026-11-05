# 중국인의 나머지 정리

# 개요

**중국인의 나머지 정리(Chinese remainder theorem, CRT)** 는 서로 소인 여러 법에 대한 합동식 연립이 항상 해를 가지며 그 해가 법들의 곱을 법으로 유일하다는 정리다. $3$ 으로 나누면 $2$ 가 남고 $5$ 로 나누면 $3$ 이 남고 $7$ 로 나누면 $2$ 가 남는 수를 찾는 문제가 이 꼴이고, 답은 $105$ 를 법으로 $23$ 하나다. 이 정리는 한 법에서만 나머지가 $1$ 이고 다른 법에서는 $0$ 인 수를 법마다 만들어 더하는 방법으로 해를 구성한다.

# 직관

법 3과 법 5로 나눈 나머지를 알면 $0$ 부터 $14$ 까지 중 어느 수인지 결정된다. 나머지 쌍 $(r,s)$ 는 $3\times 5=15$ 가지이고 수도 15개이므로, 대응이 단사이면 자동으로 전단사다. 서로 소가 아니면 정보가 겹친다. 법 4와 법 6은 둘 다 $2$ 로 나눈 나머지를 포함하므로 $(1,2)$ 같은 쌍은 실현되지 않는다.

# 정의

## 연립 합동식

양의 정수 $n_1,\dots,n_k$ 가 쌍마다 서로소라는 것은 다음을 뜻한다.

$$
\gcd(n_i,n_j)=1 \quad (i\neq j),\qquad N=\prod_{i=1}^{k} n_i
$$

정수 $a_1,\dots,a_k$ 에 대해 다음 꼴의 연립 [합동](modular-arithmetic.md)식을 생각한다.

$$
x\equiv a_i \pmod{n_i}\qquad (i=1,\dots,k)
$$

개요의 문제는 $(n_1,n_2,n_3)=(3,5,7)$, $(a_1,a_2,a_3)=(2,3,2)$, $N=105$ 인 경우다.

## 서로소 아이디얼

단위원을 가진 환 $R$ 의 [아이디얼](ideals-quotient-rings.md) $I,J$ 가 $I+J=R$ 를 만족하면 **서로소(comaximal)** 라 한다. $\mathbb Z$ 에서 $2\cdot3-5=1$ 이므로 $(3)+(5)=\mathbb Z$ 이고 $(3),(5)$ 는 서로소다. $(4)+(6)=(2)$ 이므로 $(4),(6)$ 은 서로소가 아니다.

# 성질

## 정수 형태

중국인의 나머지 정리의 정수 형태는 다음 진술이다. 법 $n_1,\dots,n_k$ 가 쌍마다 서로소이면 위 연립 합동식은 해를 가지며, 해 전체는 $N$ 을 법으로 하는 하나의 잉여류를 이룬다[^1]. 개요의 문제에서 해는 $x\equiv23\pmod{105}$ 다.

## 환론 형태

$I_1,\dots,I_k$ 가 쌍마다 서로소이면 환 준동형

$$
\varphi: R \longrightarrow \prod_{i=1}^{k} R/I_i,\qquad \varphi(r)=(r+I_1,\dots,r+I_k)
$$

은 전사이고 핵이 $I_1\cap\cdots\cap I_k$ 이므로 다음 동형을 얻는다[^2].

$$
R/\big(I_1\cap\cdots\cap I_k\big)\thickspace\cong\thickspace\prod_{i=1}^{k} R/I_i
$$

$R$ 이 가환이면 $I_1\cdots I_k=I_1\cap\cdots\cap I_k$ 이다. $R=\mathbb{Z}$, $I_i=(n_i)$ 로 두면 정수 형태가 나온다.

## 구성적 증명

증명은 $k=2$ 에서 시작한다. $\gcd(n_1,n_2)=1$ 이므로 [유클리드 알고리즘](euclidean-algorithm.md)의 확장형이 Bézout 계수(Bézout coefficients)를 준다.

$$
u\thinspace n_1+v\thinspace n_2=1
$$

이때 다음 $x$ 가 두 합동식을 모두 만족한다.

$$
x=a_1\thinspace v\thinspace n_2+a_2\thinspace u\thinspace n_1
$$

실제로 $v\thinspace n_2=1-u\thinspace n_1$ 이므로 $x$ 는 법 $n_1$ 에서 $a_1$ 과 합동이고, 대칭적으로 법 $n_2$ 에서 $a_2$ 와 합동이다. 일반 $k$ 는 귀납으로 처리하거나 다음 명시적 공식을 쓴다. $M_i=N/n_i$ 라 하고 $M_i$ 의 법 $n_i$ 에서의 역원을 $y_i$ 라 하면

$$
x=\sum_{i=1}^{k} a_i\thinspace M_i\thinspace y_i \pmod{N}
$$

$\gcd(M_i,n_i)=1$ 이므로 $y_i$ 가 존재한다. $j$ 와 $i$ 가 다르면 $n_i$ 가 $M_j$ 를 나누므로 $j$ 번째 항은 법 $n_i$ 에서 사라지고, $i$ 번째 항만 $a_i$ 를 남긴다.

$x$ 와 $x'$ 가 모두 해이면 차 $x-x'$ 는 모든 $n_i$ 의 배수이고, 서로 소이므로 $N$ 의 배수다.

## 곱셈적 구조와 Euler 함수

동형은 환 동형이므로 가역원군으로 제한된다.

$$
(\mathbb{Z}/N)^{\times}\ \cong\ \prod_{i=1}^{k}(\mathbb{Z}/n_i)^{\times}
$$

원소 개수를 세면 $\varphi$ 의 곱셈성이 따라온다.

$$
\varphi(mn)=\varphi(m)\varphi(n)\qquad (\gcd(m,n)=1)
$$

이 동형은 [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)를 소수 거듭제곱 성분별로 확인하는 데 쓰인다. 또한 $\mathbb{Z}/N$ 은 $N$ 이 서로 다른 소수의 곱일 때 체들의 곱과 동형이 되어 [소 아이디얼](prime-ideals.md)의 관점에서 $N$ 의 소인수분해와 대응한다.

## 서로소가 아닌 법

법이 서로소가 아니면 두 합동식 $x\equiv a_1\pmod{n_1}$, $x\equiv a_2\pmod{n_2}$ 의 연립은 다음 조건일 때 그리고 그때만 해를 가지며, 해는 $\mathrm{lcm}(n_1,n_2)$ 를 법으로 유일하다.

$$
a_1\equiv a_2 \pmod{\gcd(n_1,n_2)}
$$

$x\equiv1\pmod4$, $x\equiv3\pmod6$ 은 $1\equiv3\pmod2$ 라 해가 있고 $x\equiv9\pmod{12}$ 다. 직관 절의 쌍 $(1,2)$ 는 $1\not\equiv2\pmod2$ 라 해가 없다.

## 다항식 형태

$K$ 가 체이고 서로 다른 점 $c_1,\dots,c_k$ 에 대해 아이디얼 $(X-c_i)$ 는 쌍마다 서로소다. 따라서

$$
K[X]/\big((X-c_1)\cdots(X-c_k)\big)\ \cong\ \prod_{i=1}^{k} K
$$

이 동형이 Lagrange [다항식 보간](polynomial-interpolation.md)이다. 오른쪽의 값 튜플 $(b_1,\dots,b_k)$ 에 대응하는 차수 $k-1$ 이하의 다항식이 유일하게 존재한다는 진술이 CRT 의 특수한 경우다.

# 활용

## 알고리즘

법을 하나씩 붙여 가는 점진적 형태를 Garner 방식(Garner's algorithm)이라 하며, 각 단계에서 이미 맞춘 법 $M$ 의 조건을 유지한 채 새 법을 붙인다. 큰 수 연산은 한 번의 역원 계산과 곱셈뿐이다.

## RSA 복호 가속

$N=pq$ 이고 $d$ 가 비밀 지수일 때, 복호를 법 $p$ 와 법 $q$ 에서 따로 하고 CRT 로 합치면 지수의 크기가 절반이 된다.

$$
m_p=c^{\thinspace d \bmod (p-1)} \bmod p,\qquad m_q=c^{\thinspace d \bmod (q-1)} \bmod q
$$

$$
m = m_p + p\thinspace\big((m_q-m_p)\thinspace p^{-1} \bmod q\big)
$$

모듈러 거듭제곱 비용이 법의 크기의 세제곱에 비례하므로 약 4배 빨라진다. 대신 두 분기 중 하나에서 계산 오류가 나면 최대공약수 한 번으로 $p$ 가 드러나는 취약점(Bellcore 공격, Bellcore attack)이 있어 결과 검증이 필요하다.

## 그 밖에

- 다중 법 산술(multi-modular arithmetic): 큰 정수와 다항식 연산을 여러 작은 법에서 병렬로 수행한 뒤 합친다. 계수 폭 추정이 있으면 정확한 정수 결과를 복원한다.
- [비밀 분산](secret-sharing.md): Mignotte 방식(Mignotte's scheme)은 서로 소인 법들에 대한 나머지를 조각으로 나눠 준다.
- 주기 결합: 주기 $n_1$, $n_2$ 를 가진 두 순환 현상의 합성 주기가 최소공배수가 된다. 유한 순환군의 분해 $\mathbb{Z}/mn\cong\mathbb{Z}/m\times\mathbb{Z}/n$ 으로 표현된다. [군](groups.md)의 분류에서 쓰인다.

[^1]: Keith Conrad, The Chinese Remainder Theorem, Theorem 1 및 §2의 구성적 증명. https://kconrad.math.uconn.edu/blurbs/ringtheory/crt.pdf
[^2]: Geoffrey Scott, Ideals and the Chinese Remainder Theorem (Univ. of Toronto 강의노트), comaximal 아이디얼에 대한 환 동형 진술. https://www.math.toronto.edu/gscott/sept23_2015.pdf

# 연관 문서

## 선수지식

- [정수의 합동](modular-arithmetic.md)
- [아이디얼과 몫환](ideals-quotient-rings.md)

## 더 알아보기

- [원시근](primitive-roots.md)
- [RSA 암호](rsa-cryptosystem.md)
- [Miller–Rabin 판정](miller-rabin-test.md)
- [Pohlig–Hellman 방법](pohlig-hellman.md)

#number_theory #algebra #cryptography #theorem
