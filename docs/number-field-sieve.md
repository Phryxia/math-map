# 수체 체

# 개요

**수체 체(number field sieve)** 는 정수 $\mathbb Z$ 와 대수적 정수의 환 $\mathbb Z\lbrack\alpha\rbrack$ 두 곳에서 동시에 제곱을 만들어 $x^2\equiv y^2\pmod n$ 인 쌍을 얻고, 최대공약수 $\gcd(x-y,n)$ 으로 정수 $n$ 의 인수를 찾는 인수분해 알고리즘이다. 두 환을 잇는 것은 $f(m)\equiv 0\pmod n$ 인 정수 $m$ 과 다항식 $f$ 가 주는 환 준동형 $\mathbb Z\lbrack\alpha\rbrack\to\mathbb Z/n\mathbb Z$ 이다.

[이차 체](quadratic-sieve.md)와 같이 관계를 모으고 $\mathbb F_2$ 위의 선형대수로 합친다. 매끄러워야 하는 수의 크기가 $n^{1/2}$ 에서 $n^{o(1)}$ 로 줄어 기대 시간이 $L_n\lbrack 1/3,(64/9)^{1/3}\rbrack$ 이 되고, 대략 100 자리를 넘는 합성수에서 알려진 가장 빠른 방법이다.

# 직관

이차 체는 $Q(x)=x^2-n$ 의 값 가운데 작은 소수로만 이루어진 것을 모은다. $x$ 가 $\sqrt n$ 근처이므로 $Q(x)$ 는 대략 $\sqrt n$ 의 크기다. $n$ 이 200 자리이면 $Q(x)$ 는 100 자리이고, 100 자리 수가 작은 소수로만 이루어질 확률은 매우 작아서 관계를 충분히 모으지 못한다.

값을 작게 하려면 $n$ 을 다른 꼴로 쓴다. $n=45113$ 을 $m=31$ 진법으로 펼치면

$$
45113=31^3+15\cdot 31^2+29\cdot 31+8
$$

이므로 $f(x)=x^3+15x^2+29x+8$ 은 $f(31)=n$ 을 만족한다. $\alpha$ 를 $f$ 의 근으로 두면, $\alpha$ 에 $31$ 을 넣는 대입은 $\mathbb Z\lbrack\alpha\rbrack$ 에서 $\mathbb Z/n\mathbb Z$ 로 가는 환 준동형 $\varphi$ 다. $f(\alpha)=0$ 이 $f(31)\equiv 0$ 으로 가기 때문이다.

작은 정수 $a,b$ 에 대해 $a-b\alpha$ 는 $\varphi$ 로 $a-31b$ 가 된다. 쌍 $(a,b)$ 를 여럿 골라 $\prod(a-31b)$ 가 정수의 제곱 $y^2$ 이고 $\prod(a-b\alpha)$ 가 $\mathbb Z\lbrack\alpha\rbrack$ 의 원소의 제곱 $\gamma^2$ 이면, $\varphi(\gamma)^2\equiv y^2\pmod n$ 이 나온다. 매끄러워야 하는 수는 $a-31b$ 와 $a-b\alpha$ 의 노름이다. 둘 다 $a,b$ 의 다항식이고 $m\approx n^{1/3}$ 이므로 $\sqrt n$ 보다 작다. 차수 $d$ 를 $n$ 에 맞춰 키우면 $m\approx n^{1/d}$ 이 더 작아져 두 수의 곱이 $\sqrt n$ 보다 훨씬 작아진다.

# 정의

## 다항식과 준동형

$n$ 은 소수의 거듭제곱이 아닌 홀수 합성수다. 차수 $d$ 와 정수 $m$ 을 골라 $n$ 을 $m$ 진법으로 펼친 계수로 일계수 다항식

$$
f(x)=x^d+c_{d-1}x^{d-1}+\dots+c_0,\qquad f(m)=n,\quad 0\le c_i\lt m
$$

을 만든다. $f$ 는 기약이라고 둔다. 기약이 아니면 $f=gh$ 에서 $n=g(m)h(m)$ 이 인수분해를 준다. $\alpha$ 를 $f$ 의 복소근 하나로 두고 [대수적 수체](algebraic-number-fields.md) $K=\mathbb Q(\alpha)$ 의 부분환 $\mathbb Z\lbrack\alpha\rbrack$ 을 쓴다. $\varphi:\mathbb Z\lbrack\alpha\rbrack\to\mathbb Z/n\mathbb Z$ 는 $\alpha\mapsto m\bmod n$ 으로 정해지는 환 준동형이다.

$F(a,b)=b^d f(a/b)$ 를 $f$ 의 동차화라 한다. $f$ 가 일계수이므로 $a-b\alpha$ 의 노름은

$$
N(a-b\alpha)=\prod_{i=1}^d(a-b\alpha_i)=b^d\prod_{i=1}^d\Bigl(\frac ab-\alpha_i\Bigr)=F(a,b)
$$

이다. 여기서 $\alpha_1,\dots,\alpha_d$ 는 $f$ 의 근이다.

## 두 인수 기저

경계 $B$ 를 정한다. **유리 인수 기저(rational factor base)** 는 $B$ 이하의 소수 전체다. **대수 인수 기저(algebraic factor base)** 는 $p\le B$ 이고 $f(r)\equiv 0\pmod p$ 인 쌍 $(p,r)$ 전체다. 쌍 $(p,r)$ 은 $\mathbb Z\lbrack\alpha\rbrack$ 의 차수 1 소 아이디얼 $(p,\alpha-r)$ 에 대응한다.

$\gcd(a,b)=1$ 인 쌍 $(a,b)$ 에서 $a-bm$ 이 $B$-매끄럽고 $F(a,b)$ 도 $B$-매끄러우면 $(a,b)$ 를 **관계(relation)** 라 한다. 소수 $p$ 가 $F(a,b)$ 를 나누는 것은 $p\nmid b$ 일 때 $a\equiv br\pmod p$ 인 근 $r$ 이 있는 것과 동치이므로, $F(a,b)$ 의 소인수 $p$ 마다 쌍 $(p,r)$ 하나가 정해진다. 관계의 지수 벡터는 $a-bm$ 의 소인수 지수와 $F(a,b)$ 의 $(p,r)$ 별 지수를 $2$ 로 나눈 나머지를 모은 $\mathbb F_2$ 벡터다.

## 알고리즘

알고리즘은 다섯 단계다.[^1]

1. 다항식 선택. $d$ 와 $m$ 을 정해 $f$ 를 만든다.
2. 체. $b$ 를 고정하고 $a$ 를 구간에서 돌린다. 유리 쪽은 $a\equiv bm\pmod p$ 인 자리에, 대수 쪽은 $a\equiv br\pmod p$ 인 자리에 $\log p$ 를 더한다. 두 합이 모두 큰 자리만 실제로 나누어 관계인지 확인한다.
3. 선형대수. 관계를 인수 기저의 크기보다 많이 모아, 지수 벡터의 합이 $0$ 인 부분집합 $S$ 를 찾는다.
4. 제곱근. $y=\sqrt{\prod_{S}(a-bm)}$ 을 정수에서, $\gamma=\sqrt{\prod_{S}(a-b\alpha)}$ 를 $\mathbb Z\lbrack\alpha\rbrack$ 에서 구한다.
5. 인수. $\gcd(\varphi(\gamma)-y,n)$ 을 계산한다.

```javascript
// 1 단계. n 을 m 진법으로 펼친 계수가 f 의 계수다. iroot(n, d) 는 n 의 d 제곱근의 정수 부분.
function selectPolynomial(n, d) {
  const m = iroot(n, d);
  const coeffs = [];
  let r = n;
  for (let i = 0; i <= d; i++) {
    coeffs.push(r % m); // coeffs[i] 는 x^i 의 계수
    r = r / m;          // BigInt 나눗셈
  }
  return { m, coeffs }; // coeffs[d] 가 1 이 되도록 m 을 n 의 d 제곱근 근처에서 고른다
}
```

# 성질

## 노름의 제곱과 원소의 제곱

$\prod_S(a-b\alpha)$ 가 $\mathbb Z\lbrack\alpha\rbrack$ 에서 제곱이면 그 노름 $\prod_S F(a,b)$ 는 정수의 제곱이다. 역은 성립하지 않는다. 지수 벡터의 대수 쪽 성분이 모두 짝수이면 $\prod_S(a-b\alpha)$ 가 생성하는 아이디얼은 아이디얼의 제곱이지만, 원소의 제곱이 되려면 세 가지가 더 맞아야 한다.

- $\mathbb Z\lbrack\alpha\rbrack$ 이 정수환 $\mathcal O_K$ 전체가 아닐 수 있다. $\gamma$ 는 $\mathcal O_K$ 에 있어도 $\mathbb Z\lbrack\alpha\rbrack$ 밖에 있을 수 있다. $\prod_S(a-b\alpha)$ 에 $f'(\alpha)^2$ 을 곱하면 $f'(\alpha)\gamma\in\mathbb Z\lbrack\alpha\rbrack$ 이 된다.
- 류군(class group)의 $2$-부분이 자명하지 않으면 아이디얼의 제곱근이 주 아이디얼이 아닐 수 있다.
- 단수군의 원소는 아이디얼로는 보이지 않는다. 제곱이 아닌 단수가 곱에 섞일 수 있다.

Adleman 은 셋을 한꺼번에 처리하는 이차 지표(quadratic character)를 주었다. 대수 인수 기저 밖의 쌍 $(q,s)$ 에서 Legendre 기호 $\bigl(\tfrac{a-bs}{q}\bigr)$ 를 지수 벡터에 성분으로 더한다. 제곱이면 이 기호가 모두 $1$ 이므로, 이런 성분을 수십 개 더하면 남는 장애가 높은 확률로 사라진다.[^2]

## 복잡도

$L_n\lbrack\alpha,c\rbrack=\exp\bigl((c+o(1))(\log n)^\alpha(\log\log n)^{1-\alpha}\bigr)$ 로 쓴다.

정리. $d=\bigl((3+o(1))\log n/\log\log n\bigr)^{1/3}$ 으로 잡으면 수체 체의 발견적 기대 시간은 $L_n\lbrack 1/3,(64/9)^{1/3}\rbrack$ 이다.[^1]

증명의 요지. $\vert a\vert,\vert b\vert\le u$ 이면 $\vert a-bm\vert\le 2un^{1/d}$ 이고 $\vert F(a,b)\vert\le(d+1)u^dn^{1/d}$ 이다. 두 수의 곱은 $u^{d+1}n^{2/d}$ 정도다. $u$ 와 $B$ 를 $L_n\lbrack 1/3,\cdot\rbrack$ 꼴로 잡고 $d$ 를 위와 같이 두면 이 곱은 $L_n\lbrack 2/3,\cdot\rbrack$ 꼴이 된다. [지표 계산법](index-calculus.md)의 Canfield–Erdős–Pomerance 정리로 이 크기의 수가 $B$-매끄러울 확률은 $L_n\lbrack 1/3,\cdot\rbrack^{-1}$ 꼴이다. 체의 비용과 희소행렬의 비용 $B^{2+o(1)}$ 을 맞추면 상수 $(64/9)^{1/3}\approx 1.923$ 이 나온다.

이차 체의 $L_n\lbrack 1/2,1\rbrack$ 과 비교하면 지수의 $\log n$ 차수가 $1/2$ 에서 $1/3$ 으로 내려간다.

## 특수 수체 체

$n=r^e\pm s$ 처럼 $n$ 이 작은 계수의 다항식 값으로 주어지면 계수가 아주 작은 $f$ 를 쓸 수 있다. $F(a,b)$ 의 크기가 줄어 기대 시간이 $L_n\lbrack 1/3,(32/9)^{1/3}\rbrack$ 이 된다. 이것을 **특수 수체 체(special number field sieve)** 라 하고, 계수가 $m$ 크기인 일반적인 경우를 일반 수체 체(general number field sieve)라 한다.

## 제곱근 단계

$\gamma^2=\prod_S(a-b\alpha)$ 는 수백만 개의 인수의 곱이라 계수가 매우 크다. Couveignes 는 $d$ 가 홀수일 때 여러 소수 $p$ 에서 $\gamma\bmod p$ 를 구해 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 합쳤다. Montgomery 는 곱을 전개하지 않고 격자 축소로 인수를 조금씩 나누어 가는 방법을 주었다.[^3]

# 활용

- **인수분해 기록.** 232 자리의 RSA(Rivest–Shamir–Adleman) 도전 수 RSA-768 은 2009 년 일반 수체 체로 인수분해되었다. 다항식 선택에 반년, 체에 2 년 가까이 들었고, 행렬은 1.9 억 행 정도였고 그 영공간은 블록 [Wiedemann 알고리즘](wiedemann-algorithm.md)으로 구했다.[^4] [RSA 암호](rsa-cryptosystem.md)의 권장 키 길이는 이 알고리즘의 $L_n\lbrack 1/3,\cdot\rbrack$ 시간에서 정해진다.
- **Fermat 수.** 아홉째 Fermat 수 $F_9=2^{512}+1$ 은 1990 년 특수 수체 체로 인수분해되었다. $f(x)=x^5+8$, $m=2^{103}$ 으로 $8F_9=m^5+8$ 이 된다.[^5]
- **이산로그.** 같은 구조로 $\mathbb Z$ 와 $\mathbb Z\lbrack\alpha\rbrack$ 에서 관계를 모으면 $(\mathbb Z/p\mathbb Z)^\times$ 의 이산로그를 $L_p\lbrack 1/3,(64/9)^{1/3}\rbrack$ 에 구한다. 선형대수가 $\mathbb F_2$ 대신 $\mathbb Z/(p-1)$ 위에서 이루어진다.
- **관계 수집 안의 분해.** 체를 통과한 값에서 작은 소수를 나눈 뒤 남는 몫은 수십 비트이고, 이 몫을 [타원곡선 인수분해](elliptic-curve-factorization.md)로 쪼개 관계를 늘린다.

[^1]: J. P. Buhler, H. W. Lenstra, Jr., C. Pomerance, "Factoring integers with the number field sieve", in A. K. Lenstra, H. W. Lenstra, Jr. (eds.), *The development of the number field sieve*, Lecture Notes in Mathematics 1554, Springer, 1993, 50–94.
[^2]: L. M. Adleman, "Factoring numbers using singular integers", *Proceedings of the 23rd ACM Symposium on Theory of Computing* (1991), 64–71.
[^3]: Richard Crandall, Carl Pomerance, *Prime Numbers: A Computational Perspective*, 2nd ed., Springer, 2005, 6.2 절.
[^4]: T. Kleinjung et al., "Factorization of a 768-bit RSA modulus", *CRYPTO 2010*, Lecture Notes in Computer Science 6223 (2010), 333–350.
[^5]: A. K. Lenstra, H. W. Lenstra, Jr., M. S. Manasse, J. M. Pollard, "The factorization of the ninth Fermat number", *Mathematics of Computation* 61 (1993), 319–349.

# 연관 문서

## 선수지식

- [이차 체](quadratic-sieve.md)
- [대수적 수체](algebraic-number-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography
