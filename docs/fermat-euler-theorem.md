# Fermat 소정리와 Euler 정리

# 개요

**Euler 정리(Euler's theorem)** 는 법 $n$ 과 서로소인 수의 거듭제곱을 $n$ 으로 나눈 나머지가 정해진 횟수마다 $1$ 로 돌아온다는 정리이고, **Fermat 소정리(Fermat's little theorem)** 는 $n$ 이 소수인 경우다. $3^{1000}$ 을 $7$ 로 나눈 나머지를 구하려면 곱셈을 천 번 해야 할 것 같지만, $3$ 의 거듭제곱을 $7$ 로 나눈 나머지는 $3,2,6,4,5,1$ 로 여섯 번마다 되풀이된다. 이 정리는 $a^{\varphi(n)}\equiv 1 \pmod n$ 을 보여, 지수를 $\varphi(n)$ 으로 나눈 나머지로 줄여 계산하게 한다.

# 직관

$3$ 의 거듭제곱을 $7$ 로 나눈 나머지는 $3,2,6,4,5,1,3,2,\dots$ 이다. 여섯 번째에 $1$ 이 나오고 그 뒤로 같은 여섯 개가 되풀이된다. $1000=6\cdot 166+4$ 이므로 $3^{1000}$ 의 나머지는 $3^4$ 의 나머지 $4$ 다.

$3^6$ 이 $1$ 이 되는 것은 다음 계산으로 확인된다. $7$ 로 나눈 나머지 $1,2,3,4,5,6$ 에 각각 $3$ 을 곱하고 다시 $7$ 로 나누면 $3,6,2,5,1,4$ 이고, 순서만 바뀐 같은 여섯 수다. 두 줄의 곱을 비교하면 $3^6\cdot(1\cdot 2\cdots 6)\equiv 1\cdot 2\cdots 6 \pmod 7$ 이다.

$1\cdot 2\cdots 6=720$ 은 $7$ 과 서로소이므로 양변에서 지울 수 있고 $3^6\equiv 1$ 이 남는다. $7$ 대신 아무 $n$ 을 쓰려면 $1,\dots,n-1$ 대신 $n$ 과 서로소인 나머지들만 모은다. 그 개수가 지수 자리에 오는 $\varphi(n)$ 이다.

# 정의

## Euler 함수

$n\ge 1$ 에 대해 **Euler 함수(Euler's totient function)** $\varphi(n)$ 은 $1$ 이상 $n$ 이하이면서 $n$ 과 서로소인 정수의 개수다.

$$
\varphi(n)=\char35{}\lbrace\thinspace 1\le k\le n : \gcd(k,n)=1\thinspace\rbrace
$$

$\varphi(7)=6$ 이고, $8$ 과 서로소인 수는 $1,3,5,7$ 이므로 $\varphi(8)=4$ 다.

## 가역원군

[정수의 합동](modular-arithmetic.md)의 잉여류환 $\mathbb Z/n$ 에서 곱셈의 역원이 있는 원소를 **가역원(unit)** 이라 한다. $\bar a$ 가 가역원인 것은 $\gcd(a,n)=1$ 인 것과 동치이고, 가역원 전체는 곱셈에 대해 [군](groups.md)을 이룬다.

$$
(\mathbb{Z}/n)^{\times}=\lbrace\thinspace\bar a\in\mathbb{Z}/n : \gcd(a,n)=1\thinspace\rbrace,\qquad
\bigl\vert(\mathbb{Z}/n)^{\times}\bigr\vert=\varphi(n)
$$

$(\mathbb Z/8)^{\times}=\lbrace\bar 1,\bar 3,\bar 5,\bar 7\rbrace$ 이다. 직관 절에서 $3$ 을 곱해 순서만 바꾼 여섯 수는 $(\mathbb Z/7)^{\times}$ 의 원소다.

## Euler 정리

$$
\gcd(a,n)=1 \quad\Longrightarrow\quad a^{\varphi(n)}\equiv 1 \pmod{n}
$$

$n=8$, $a=3$ 이면 $3^4=81=10\cdot 8+1$ 이다.

## Fermat 소정리

$p$ 가 [소수](primes.md)이면 $\varphi(p)=p-1$ 이므로 다음이 성립한다. 두 번째 꼴은 $a$ 가 $p$ 의 배수일 때도 성립한다[^1].

$$
p\nmid a \quad\Longrightarrow\quad a^{p-1}\equiv 1 \pmod{p},
\qquad
a^{p}\equiv a \pmod{p}\quad (a\in\mathbb{Z})
$$

$p=7$, $a=2$ 이면 $2^6=64=9\cdot 7+1$ 이고 $2^7=128=18\cdot 7+2$ 다.

# 성질

## 재배열 증명

$\gcd(a,n)=1$ 이면 $x\mapsto ax$ 는 $(\mathbb Z/n)^{\times}$ 의 순열이다. 가역원 전체의 곱을 $P$ 라 하면 다음이 성립한다.

$$
a^{\varphi(n)}P\equiv\prod_{\gcd(k,n)=1}(ak)\equiv P \pmod{n}
$$

$P$ 가 가역이므로 양변에서 지우면 결론이 나온다. 직관 절의 계산이 $n=7$, $a=3$ 인 경우다.

## 군론적 증명

$G=(\mathbb Z/n)^{\times}$ 에서 $a$ 가 생성하는 순환 부분군 $H$ 의 크기는 $a$ 의 위수(order) $d$ 이고, Lagrange 정리(Lagrange's theorem)에 따라 $d$ 가 $\vert G\vert=\varphi(n)$ 을 나눈다[^2]. $\varphi(n)=dm$ 이면 다음이 성립한다.

$$
a^{\varphi(n)}=\bigl(a^{d}\bigr)^{m}\equiv 1^{m}=1 \pmod{n}
$$

$\varphi(n)$ 이 모든 가역원에 공통인 가장 작은 지수는 아니다. 가장 작은 지수는 [Carmichael 함수](carmichael-function.md) $\lambda(n)$ 이고 $\varphi(n)$ 을 나눈다. $(\mathbb Z/8)^{\times}$ 에서 $3^2=9\equiv 1$, $5^2=25\equiv 1$, $7^2=49\equiv 1$ 이므로 $\varphi(8)=4$ 이지만 $\lambda(8)=2$ 다.

## 역원과 지수 축약

Euler 정리에서 다음 두 식이 나온다.

$$
a^{-1}\equiv a^{\varphi(n)-1}\pmod{n},\qquad
a^{e}\equiv a^{\thinspace e \bmod \varphi(n)}\pmod{n}\quad (\gcd(a,n)=1)
$$

두 번째 식에서 서로소 조건은 뺄 수 없다. $n=4$, $a=2$, $e=2$ 에서 $e \bmod \varphi(4)=0$ 이지만 $2^0=1$ 이고 $2^2\equiv 0$ 이다. 서로소가 아니면 지수가 충분히 클 때 다음 식을 쓴다.

$$
e\ge\log_2 n \quad\Longrightarrow\quad a^{e}\equiv a^{\thinspace(e \bmod \varphi(n))+\varphi(n)} \pmod{n}
$$

역원 하나를 구할 때는 [유클리드 알고리즘](euclidean-algorithm.md)의 확장형이 거듭제곱보다 빠르다.

## Euler 함수의 계산

$\gcd(m,n)=1$ 이면 $\varphi(mn)=\varphi(m)\varphi(n)$ 이다. [중국인의 나머지 정리](chinese-remainder-theorem.md)가 주는 군 동형 $(\mathbb Z/mn)^{\times}\cong(\mathbb Z/m)^{\times}\times(\mathbb Z/n)^{\times}$ 에서 이 등식이 나온다. 소수의 거듭제곱에서의 값과 합쳐 다음 공식을 얻는다.

$$
\varphi(p^{k})=p^{k}-p^{k-1},\qquad
\varphi(n)=n\prod_{p\mid n}\Bigl(1-\frac{1}{p}\Bigr)
$$

$\varphi(12)=12\cdot\frac12\cdot\frac23=4$ 이고, $12$ 와 서로소인 수는 $1,5,7,11$ 이다.

## Carmichael 수

Fermat 소정리의 역은 성립하지 않는다. 합성수 $n$ 이 자신과 서로소인 모든 $a$ 에 대해 $a^{n-1}\equiv 1 \pmod n$ 을 만족하면 $n$ 을 **Carmichael 수(Carmichael number)** 라 한다. 가장 작은 것은 $561=3\cdot 11\cdot 17$ 이고, Carmichael 수가 무한히 많다는 것을 1994 년에 Alford, Granville, Pomerance 가 증명했다[^3].

**Korselt 판정법(Korselt's criterion)** 에 따르면 $n$ 이 Carmichael 수인 것은 $n$ 이 제곱 인수가 없는(square-free) 합성수이고 모든 소인수 $p$ 에 대해 $p-1$ 이 $n-1$ 을 나누는 것과 동치다. $561$ 에서 $2,10,16$ 이 모두 $560$ 을 나눈다.

# 활용

## RSA 의 정확성

[RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)는 법 $N=pq$, 공개 지수 $e$, 비밀 지수 $d$ 를 $ed\equiv 1 \pmod{\varphi(N)}$ 이 되게 잡는다. $ed=1+k\varphi(N)$ 이므로 $\gcd(m,N)=1$ 인 평문 $m$ 에서 Euler 정리가 복호를 준다.

$$
(m^{e})^{d}=m^{1+k\varphi(N)}=m\cdot\bigl(m^{\varphi(N)}\bigr)^{k}\equiv m \pmod{N}
$$

$m$ 이 $p$ 나 $q$ 의 배수이면 각 소인수를 법으로 따로 보아 같은 결론을 얻는다. 구현은 $\varphi(N)$ 대신 $\mathrm{lcm}(p-1,q-1)$ 을 쓰고, 복호를 중국인의 나머지 정리로 $p$ 와 $q$ 에 나누어 계산한다.

## 확률적 소수판정

Fermat 판정(Fermat test)은 무작위 $a$ 에 대해 $a^{n-1}$ 을 계산하고 $1$ 이 아니면 합성수로 판정한다. 이 판정은 Carmichael 수를 통과시킨다. $n-1=2^sq$ 로 쓰고 $a^q,a^{2q},\dots$ 에서 $1$ 의 제곱근이 $\pm 1$ 인지까지 보는 [Miller–Rabin 판정](miller-rabin-test.md)은 합성수에 대해 밑의 $3/4$ 이상이 합성임을 드러내므로, $k$ 번 되풀이하면 오류 확률이 $4^{-k}$ 이하다.

## 순환소수와 이산로그

- 순환소수의 주기. $p\ne 2,5$ 이면 $1/p$ 의 십진 전개 주기는 법 $p$ 에서 $10$ 의 위수이고 $p-1$ 을 나눈다. $1/7=0.\overline{142857}$ 의 주기 $6$ 이 그 예다.
- [원시근](primitive-roots.md)과 [이산로그](discrete-logarithm.md). $(\mathbb Z/p)^{\times}$ 가 순환군이라는 사실을 Diffie–Hellman 키 교환(Diffie–Hellman key exchange)이 사용한다. 원소의 위수가 $p-1$ 의 약수이므로, $p-1$ 이 작은 소인수로만 이루어지면 [Pohlig–Hellman 방법](pohlig-hellman.md)이 이산로그를 빨리 푼다.
- 지수 축약. 법 $1000$ 에서 $\varphi(1000)=400$ 이므로 $7^{2024}\equiv 7^{24}$ 이다.

[^1]: Fermat's little theorem, Wikipedia (진술의 두 형태와 Euler 정리로의 일반화). https://en.wikipedia.org/wiki/Fermat%27s_little_theorem
[^2]: D. R. Wilkins, Fermat's Little Theorem (Trinity College Dublin 강의노트 8장), Lagrange 정리로부터의 도출. https://www.maths.tcd.ie/pub/Maths/Courseware/NumberTheory/2016/ch08.pdf
[^3]: Carmichael number, Wikipedia (561이 최소, Korselt 판정법, Alford–Granville–Pomerance 1994의 무한성 증명). https://en.wikipedia.org/wiki/Carmichael_number

# 연관 문서

## 선수지식

- [정수의 합동](modular-arithmetic.md)
- [군](groups.md)
- [소수](primes.md)

## 더 알아보기

### 정수론

- [원시근](primitive-roots.md)
- [Wilson 정리](wilson-theorem.md)
- [이차 상호법칙](quadratic-reciprocity.md)

### 소수 판정과 암호

- [Miller–Rabin 판정](miller-rabin-test.md)
- [AKS 소수 판정법](aks-primality-test.md)
- [RSA 암호](rsa-cryptosystem.md)

#number_theory #cryptography #group_theory #theorem
