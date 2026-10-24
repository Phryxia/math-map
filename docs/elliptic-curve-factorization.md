# 타원곡선 인수분해

# 개요

**타원곡선 인수분해(elliptic curve factorization)** 는 합성수 $n$ 을 법으로 [타원곡선](elliptic-curves.md)의 점에 스칼라 곱을 하다가 덧셈 공식의 나눗셈이 실패하는 자리에서 $n$ 의 인수를 얻는 알고리즘이다. H. W. Lenstra 가 1985 년에 제안했고 타원곡선 방법(elliptic curve method, ECM)이라고도 부른다.

걸리는 시간이 $n$ 의 크기가 아니라 가장 작은 소인수 $p$ 의 크기로 정해진다. 그래서 큰 수에서 중간 크기의 인수를 떼어 내는 데 쓴다.

# 직관

$n=1649$ 에서 $2^{16}\bmod n$ 을 계산하면 $1225$ 이고, $\gcd(1225-1,1649)=17$ 이다. $17-1=16$ 이므로 [Fermat 소정리](fermat-euler-theorem.md)로 $2^{16}\equiv 1\pmod{17}$ 이고, 그래서 $17$ 이 $2^{16}-1$ 을 나눈다. 다른 소인수 $97$ 에서는 $2^{16}\not\equiv 1$ 이므로 최대공약수가 $n$ 전체가 되지 않는다. 일반적으로 작은 소수들의 거듭제곱을 곱한 지수 $k$ 를 잡고 $\gcd(a^k-1,n)$ 을 계산하면, $p-1$ 의 소인수가 모두 작은 소인수 $p$ 가 나온다.

이 방법은 $p-1$ 이 큰 소인수를 가지면 실패한다. 군 $(\mathbb Z/p\mathbb Z)^\times$ 의 크기가 $p-1$ 로 고정되어 있어서 다른 $a$ 를 골라도 소용이 없다. 실패한 이유가 군의 크기가 하나뿐이라는 것이므로, 크기가 여럿인 군의 모임으로 바꾼다.

$\mathbb F_p$ 위의 타원곡선 $E$ 의 점 개수는 Hasse 정리(Hasse's theorem)로 $p+1-2\sqrt p$ 와 $p+1+2\sqrt p$ 사이에 있고, 곡선의 계수를 바꾸면 이 범위 안에서 달라진다. 곡선을 여러 개 시도하면 점 개수가 작은 소인수로만 이루어진 곡선을 만난다. 그 곡선에서 $kP$ 가 법 $p$ 로 무한원점이 되고, 법 $n$ 으로 계산하던 덧셈 공식이 그 자리에서 $p$ 의 배수로 나누려다 멈춘다. 멈춘 자리의 분모와 $n$ 의 최대공약수가 $p$ 다.

# 정의

$n$ 은 $2$ 와 $3$ 으로 나누어지지 않는 합성수다. $a,x_0,y_0\in\mathbb Z/n\mathbb Z$ 를 고르고 $b=y_0^2-x_0^3-ax_0$ 으로 두면 점 $P=(x_0,y_0)$ 이 곡선 $E:y^2=x^3+ax+b$ 위에 있다.

법 $n$ 의 덧셈은 타원곡선의 덧셈 공식을 그대로 쓴다. 기울기 $\lambda$ 의 분모 $d$ 가 법 $n$ 에서 역원을 가지면 계산을 계속하고, $1\lt\gcd(d,n)\lt n$ 이면 그 값을 인수로 내놓고 멈춘다.

경계 $B_1$ 에 대해 $k=\prod_{q\le B_1}q^{\lfloor\log B_1/\log q\rfloor}$ ($q$ 는 소수)로 두고 $kP$ 를 반복 두 배와 덧셈으로 계산한다. 인수가 나오지 않으면 새 $(a,x_0,y_0)$ 으로 다시 한다.[^1]

```javascript
// 법 n 의 타원곡선 덧셈. 분모가 역원이 없으면 { factor } 를 돌려준다.
function ecAdd(P, Q, a, n) {
  if (P === null) return Q;
  if (Q === null) return P;
  const [x1, y1] = P, [x2, y2] = Q;
  const num = x1 === x2 ? mod(3n * x1 * x1 + a, n) : mod(y2 - y1, n);
  const den = x1 === x2 ? mod(2n * y1, n) : mod(x2 - x1, n);
  if (x1 === x2 && mod(y1 + y2, n) === 0n) return null; // 무한원점
  const g = gcd(den, n);
  if (g !== 1n) return { factor: g };
  const lam = mod(num * modInverse(den, n), n);
  const x3 = mod(lam * lam - x1 - x2, n);
  return [x3, mod(lam * (x1 - x3) - y1, n)];
}
```

# 성질

## 실패가 인수를 주는 조건

$p$ 와 $q$ 가 $n$ 의 서로 다른 소인수이고, 법 $p$ 로 줄인 곡선에서 $P$ 의 위수가 $k$ 를 나누며 법 $q$ 로 줄인 곡선에서는 나누지 않는다고 하자. $kP$ 를 계산하는 덧셈 사슬 가운데 법 $p$ 로 처음 무한원점이 나오는 덧셈에서 분모 $d$ 는 $p$ 의 배수이고, 법 $q$ 로는 그 덧셈의 결과가 무한원점이 아니므로 $d$ 가 $q$ 의 배수가 아니다. 그러므로 $\gcd(d,n)$ 은 $p$ 의 배수이고 $n$ 이 아니다.

위수가 $k$ 를 나누는 것은 $\char35{}E(\mathbb F_p)$ 의 소인수가 모두 $B_1$ 이하이면 충분하다. 두 소인수에서 동시에 그런 일이 일어나는 경우는 드물다.

## 점 개수의 분포

**정리 (Lenstra).** $a,x_0,y_0$ 을 고르게 뽑으면 $\char35{}E(\mathbb F_p)$ 는 구간 $I=\lbrack p+1-\sqrt p,\thinspace p+1+\sqrt p\rbrack$ 위에 거의 고르게 퍼진다. 상수 $c\gt 0$ 이 있어 $I$ 의 정수로 이루어진 집합 $S$ 마다 $\char35{}E(\mathbb F_p)\in S$ 일 확률이 $c(\char35{}S-2)/(\sqrt p\log p)$ 이상이다.[^2]

이 정리로 곡선 하나가 성공할 확률이 구간 안의 $B_1$-매끄러운 정수의 비율과 같은 규모가 된다. [Pollard rho 알고리즘](pollard-rho.md)이나 Pollard $p-1$ 방법(Pollard's p − 1 method)과 달리, 실패하면 곡선을 바꾸어 독립인 시도를 새로 얻는다.

## 복잡도

$L_p\lbrack\alpha,c\rbrack=\exp\bigl((c+o(1))(\log p)^\alpha(\log\log p)^{1-\alpha}\bigr)$ 로 쓴다. 구간 안의 정수가 매끄러울 확률이 같은 크기의 무작위 정수와 같다는 가정 아래 $B_1=L_p\lbrack 1/2,1/\sqrt 2\rbrack$ 로 잡으면, 가장 작은 소인수 $p$ 를 찾는 기대 시간은 법 $n$ 의 곱셈 $L_p\lbrack 1/2,\sqrt 2\rbrack$ 번이다.[^2]

증명의 요지. 곡선 하나의 비용은 $kP$ 의 계산인 $O(B_1)$ 번의 곱셈이다. 점 개수의 크기가 $p$ 이므로 매끄러울 확률은 $u=\log p/\log B_1$ 에서 $u^{-u}$ 규모이고, 곡선이 $u^u$ 개 필요하다. $B_1\cdot u^u$ 를 최소화하는 $B_1$ 이 위의 값이다.

[이차 체](quadratic-sieve.md)의 시간 $L_n\lbrack 1/2,1\rbrack$ 이 $n$ 에 대해 적히는 것과 달리 이 시간은 $p$ 에 대해 적힌다. $n$ 이 비슷한 크기의 두 소수의 곱이면 $p\approx\sqrt n$ 이고 $L_p\lbrack 1/2,\sqrt 2\rbrack$ 가 $L_n\lbrack 1/2,1\rbrack$ 과 같은 규모가 된다.

# 활용

- **작은 인수의 제거.** 인수분해할 수에서 먼저 시험 나눗셈과 Pollard rho 로 아주 작은 인수를, 이어서 이 방법으로 수십 자리의 인수를 떼어 낸다. 남은 수가 큰 소수 두 개의 곱으로 보이면 이차 체나 [수체 체](number-field-sieve.md)(number field sieve)로 넘긴다.
- **수체 체 안의 분해.** 수체 체의 관계 수집에서 체를 통과한 값은 작은 소수를 나눈 뒤 남은 몫이 다시 매끄러운지 확인해야 한다. 이 몫은 수십 비트의 수이고, 그것을 쪼개는 데 이 방법을 쓴다.
- **소수 증명.** 타원곡선 소수 증명(elliptic curve primality proving, ECPP)은 같은 곡선을 법 $n$ 으로 다루되, 위수를 아는 점을 찾아 $n$ 이 소수라는 증명서를 만든다. 인수분해에서 점 개수가 매끄럽기를 바라는 것과 반대로, 이 증명은 점 개수가 큰 소인수를 갖기를 바란다.

[^1]: Richard Crandall, Carl Pomerance, *Prime Numbers: A Computational Perspective*, 2nd ed., Springer, 2005, 7.4 절.
[^2]: H. W. Lenstra Jr., "Factoring integers with elliptic curves", *Annals of Mathematics* 126 (1987), 649–673.

# 연관 문서

## 선수지식

- [타원곡선](elliptic-curves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography
