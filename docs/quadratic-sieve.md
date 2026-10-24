# 이차 체

# 개요

**이차 체(quadratic sieve)** 는 $x^2\equiv y^2\pmod n$ 이고 $x\not\equiv\pm y$ 인 쌍을 찾아 최대공약수 $\gcd(x-y,n)$ 으로 정수 $n$ 의 인수를 얻는 인수분해 알고리즘이다. 쌍을 만드는 재료로 $Q(x)=x^2-n$ 의 값 가운데 작은 소수로만 이루어진 것을 모으고, 그런 값을 체(sieve)로 한꺼번에 골라낸다.

관계를 모으고 선형대수로 합치는 구조가 [지표 계산법](index-calculus.md)과 같다. 기대 시간은 $\exp\bigl((1+o(1))\sqrt{\log n\log\log n}\bigr)$ 이고, 대략 100 자리 이하의 합성수에서는 수체 체(number field sieve)보다 빠르다.

# 직관

$n=1649$ 를 인수분해한다. $x^2-n$ 이 완전제곱 $y^2$ 이 되는 $x$ 를 찾으면 $n=(x-y)(x+y)$ 다. $\sqrt{1649}\approx 40.6$ 이므로 $x=41,42,43,\dots$ 를 차례로 넣는다.

$$
41^2-1649=32=2^5,\qquad 42^2-1649=115=5\cdot 23,\qquad 43^2-1649=200=2^3\cdot 5^2
$$

셋 다 완전제곱이 아니다. 이 방식으로는 $x=57$ 까지 가야 $57^2-1649=1600=40^2$ 이 나온다. $n$ 이 크면 이렇게 기다리는 것으로는 끝나지 않는다.

값 하나가 완전제곱일 필요는 없다. 값 몇 개의 곱이 완전제곱이어도 된다. $32\cdot 200=2^8\cdot 5^2=80^2$ 이므로 $(41\cdot 43)^2\equiv 80^2\pmod{1649}$ 이다. $41\cdot 43=1763\equiv 114$ 이고 $\gcd(114-80,1649)=\gcd(34,1649)=17$ 이므로 $1649=17\cdot 97$ 이다. 곱이 완전제곱인지는 소인수의 지수가 모두 짝수인지로 정해진다. 그래서 작은 소수로만 이루어진 값을 모으고, 지수의 홀짝을 더해 $0$ 이 되는 묶음을 찾는다.

# 정의

$n$ 은 홀수이고 소수의 거듭제곱이 아닌 합성수다. $m=\lceil\sqrt n\rceil$ 로 두고 $x=m,m+1,\dots$ 에서 $Q(x)=x^2-n$ 을 본다.

경계 $B$ 에 대해 $p=2$ 와, $B$ 이하의 홀수 소수 가운데 $n$ 이 법 $p$ 의 제곱잉여인 것 전체를 **인수 기저(factor base)** $\mathcal F=\lbrace p_1,\dots,p_k\rbrace$ 라 한다. 제곱잉여 여부는 [이차 상호법칙](quadratic-reciprocity.md)의 Legendre 기호(Legendre symbol) $(n/p)=1$ 로 판정한다.

$Q(x)=\pm\prod_i p_i^{e_i}$ 로 $\mathcal F$ 위에서 완전히 분해되는 $x$ 를 **관계(relation)** 라 하고, 벡터 $(e_1\bmod 2,\dots,e_k\bmod 2)\in\mathbb F_2^k$ 를 그 관계의 지수 벡터라 한다. 음수 값을 허용하면 부호를 첫 성분으로 더한다.

알고리즘은 세 단계다.[^1]

1. 체. 각 $p\in\mathcal F$ 에서 $t^2\equiv n\pmod p$ 의 두 근 $\pm t_p$ 를 구한다. $p\mid Q(x)$ 인 것은 $x\equiv\pm t_p\pmod p$ 인 것과 동치이므로, 배열의 그 자리에서 시작해 $p$ 칸씩 건너뛰며 $\log p$ 를 더한다. 합이 $\log Q(x)$ 에 가까운 자리만 실제로 나누어 관계인지 확인한다.
2. 선형대수. 관계를 $k$ 개보다 많이 모으면 지수 벡터들이 $\mathbb F_2$ 위에서 일차종속이다. 합이 $0$ 이 되는 부분집합 $S$ 를 찾는다.
3. 인수. $X=\prod_{x\in S}x$, $Y=\sqrt{\prod_{x\in S}Q(x)}$ 를 법 $n$ 으로 계산하고 $\gcd(X-Y,n)$ 을 구한다.

```javascript
// 체 단계. roots[i] 는 법 F[i] 에서 n 의 두 제곱근, logQ(x) 는 log|x*x - n|.
function sieve(n, m, len, F, roots, slack) {
  const acc = new Float64Array(len);
  F.forEach((p, i) => {
    for (const t of roots[i]) {
      for (let j = mod(t - m, p); j < len; j += p) acc[j] += Math.log(p);
    }
  });
  const candidates = [];
  for (let j = 0; j < len; j++) {
    if (acc[j] > logQ(m + j, n) - slack) candidates.push(m + j);
  }
  return candidates; // 각 후보를 F 로 나누어 실제 관계인지 확인한다
}
```

# 성질

## 인수 기저의 소수

홀수 소수 $p$ 가 $n$ 을 나누지 않을 때 $p\mid x^2-n$ 이면 $n\equiv x^2\pmod p$ 이므로 $n$ 은 법 $p$ 의 제곱잉여다. 그러므로 $(n/p)=-1$ 인 소수는 어떤 $Q(x)$ 도 나누지 않고 인수 기저에서 뺀다. 제곱잉여는 홀수 소수의 절반에서 일어나므로 $B$ 이하의 소수 가운데 대략 절반이 인수 기저에 든다.

## 성공 확률

**명제.** $n$ 이 서로 다른 홀수 소인수를 $r\ge 2$ 개 가지면, $\gcd(X,n)=1$ 인 $X$ 마다 $Y^2\equiv X^2$ 인 $Y$ 가 법 $n$ 에서 $2^r$ 개 있고 그 가운데 $Y\equiv\pm X$ 는 두 개뿐이다.

[중국인의 나머지 정리](chinese-remainder-theorem.md)로 법 $n$ 의 제곱근은 각 소인수의 거듭제곱마다 고른 부호 $\pm$ 의 조합이다. 3 단계의 $Y$ 를 이 $2^r$ 개 가운데 고르게 뽑힌 것으로 보면, 일차종속 하나가 인수를 줄 확률이 $1-2^{1-r}\ge 1/2$ 이다. 일차종속은 보통 여러 개 얻으므로 몇 번 안에 인수가 나온다.

## 복잡도

$L_n[\alpha,c]=\exp\bigl((c+o(1))(\log n)^\alpha(\log\log n)^{1-\alpha}\bigr)$ 로 쓴다. $B=L_n[1/2,1/2]$ 로 잡으면 이차 체의 발견적 기대 시간은 $L_n[1/2,1]$ 이다.[^2]

증명의 요지. $x=m+j$ 이면 $Q(x)\approx 2j\sqrt n$ 이므로 체로 보는 값의 크기가 $n^{1/2+o(1)}$ 이다. 지표 계산법의 Canfield–Erdős–Pomerance 정리로, 이 크기의 수가 $B$-매끄러울 확률은 $u=\log n^{1/2}/\log B$ 에서 $u^{-u(1+o(1))}$ 이다. 체는 후보 하나에 $\log\log B$ 정도의 일만 들인다. 관계가 $B$ 개 정도 필요하므로 체의 비용은 $B\cdot u^u$ 이고, 희소행렬의 일차종속을 찾는 비용은 $B^{2+o(1)}$ 이다. 두 비용을 맞추면 위의 값이 나온다.

지표 계산법이 크기 $p$ 의 수를 매끄럽게 만들어야 하는 데 비해 이차 체는 크기 $\sqrt n$ 의 수만 보면 되므로 $L[1/2,\sqrt 2]$ 가 $L[1/2,1]$ 로 줄어든다.

## 다중 다항식

$x$ 가 $m$ 에서 멀어지면 $Q(x)$ 가 커져 매끄러울 확률이 떨어진다. 다항식 $Q(x)$ 하나 대신 $(ax+b)^2-n$ 을 $a$ 로 나눈 꼴의 다항식을 여럿 바꾸어 쓰면, 각 다항식에서 $x$ 를 짧은 구간에서만 돌려도 된다. 이것이 다중 다항식 이차 체(multiple polynomial quadratic sieve, MPQS)이고, 기대 시간의 꼴은 같고 체로 보는 값이 작아진다.

# 활용

- **인수분해 기록.** [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 공개 도전 수 RSA-129(129 자리)는 1994 년 MPQS 로 인수분해되었다. 1600 대 남짓한 컴퓨터에 체 구간을 나누어 맡겼고, 관계 수집이 서로 독립이어서 이렇게 나누어진다.[^3]
- **수체 체의 구조.** 수체 체는 관계 수집, $\mathbb F_2$ 위의 선형대수, 제곱근과 최대공약수라는 이차 체의 세 단계를 그대로 쓰고, 매끄러워야 하는 수를 정수와 대수적 정수의 쌍으로 바꾸어 크기를 $L_n[1/3,\cdot]$ 규모로 줄인다.
- **인수분해 도구의 선택.** 작은 인수는 [Pollard rho 알고리즘](pollard-rho.md)이나 타원곡선 방법(elliptic curve method)이 먼저 떼어 낸다. 남은 수가 비슷한 크기의 두 소수의 곱이면 이차 체나 수체 체를 쓴다.

[^1]: Carl Pomerance, "A tale of two sieves", *Notices of the American Mathematical Society* 43 (1996), 1473–1485.
[^2]: Richard Crandall, Carl Pomerance, *Prime Numbers: A Computational Perspective*, 2nd ed., Springer, 2005, 6.1 절.
[^3]: Derek Atkins, Michael Graff, Arjen K. Lenstra, Paul C. Leyland, "The magic words are squeamish ossifrage", *ASIACRYPT '94*, Lecture Notes in Computer Science 917 (1995), 263–277.

# 연관 문서

## 선수지식

- [지표 계산법](index-calculus.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography
