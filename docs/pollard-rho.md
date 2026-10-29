# Pollard rho 알고리즘

# 개요

**Pollard rho 알고리즘(Pollard's rho algorithm)** 은 같은 함수를 되풀이해 적용한 수열이 언젠가 앞의 값으로 돌아온다는 것을 써서 정수의 인수를 찾는 알고리즘이다. $n=8051$ 의 인수를 찾을 때 $f(x)=x^2+1$ 을 $2$ 에서부터 되풀이해 $5,26,677,\dots$ 을 만들면, 모르는 소인수 $p$ 로 나눈 나머지는 $p$ 가지뿐이라 언젠가 $x_i\equiv x_j\pmod p$ 가 된다. 그때 $\gcd(x_j-x_i,n)$ 이 $p$ 를 내놓고, 무작위 함수처럼 움직이는 수열에서는 이 일이 약 $\sqrt p$ 단계 안에 일어나며 저장하는 값은 두 개뿐이다.

# 직관

Pollard rho 알고리즘은 유한 집합 위의 함수 $f$ 를 되풀이해 적용한 수열 $x_{i+1}=f(x_i)$ 가 언젠가 앞의 값으로 돌아온다는 것을 써서, 정수의 인수를 찾거나 [이산로그](discrete-logarithm.md)를 구하는 알고리즘이다. 집합의 크기가 $m$ 이고 $f$ 가 무작위 함수처럼 움직이면 $O(\sqrt m)$ 단계 안에 같은 값이 다시 나오고, 저장하는 값은 두 개뿐이다. J. M. Pollard 가 인수분해판을 1975 년에, 이산로그판을 1978 년에 발표했다[^1][^2].

같은 값이 $\sqrt m$ 단계 근처에서 나온다는 계산은 [유한 확률 공간](probability.md)의 [생일 문제](birthday-problem.md)다.

$n=8051$ 의 인수를 찾는다. $f(x)=x^2+1\bmod n$ 으로 두고 $x_0=2$ 에서 $x_1=5$, $x_2=26$, $x_3=677$, $\dots$ 를 만든다. $n$ 의 소인수 $p$ 를 모르지만, 같은 수열을 법 $p$ 로 보면 값이 $p$ 가지뿐이라 언젠가 $x_i\equiv x_j\pmod p$ 인 $i\lt j$ 가 나온다. 그러면 $p$ 가 $x_j-x_i$ 를 나누므로 $\gcd(x_j-x_i,n)$ 이 $p$ 의 배수다.

모든 쌍을 비교하면 쌍의 수가 많아진다. 대신 $x_i$ 와 $x_{2i}$ 만 비교한다. $i=1$ 에서 $\gcd(26-5,8051)=1$, $i=2$ 에서 $x_4=7474$ 로 $\gcd(7474-26,8051)=1$, $i=3$ 에서 $x_6=871$ 로 $\gcd(871-677,8051)=97$ 이다. $8051=83\cdot 97$ 이다.

법 $97$ 에서 수열은 처음 몇 항을 지나 고리에 들어가고 그 뒤로는 고리를 돈다. 꼬리와 고리를 그리면 글자 $\rho$ 모양이고, 이름이 여기서 왔다.

# 정의

## 수열의 꼬리와 고리

유한 집합 $S$ 와 함수 $f\colon S\to S$, 시작점 $x_0$ 에 대해 $x_{i+1}=f(x_i)$ 로 둔다. 처음으로 되풀이되는 값의 첫 위치를 $\mu$, 고리의 길이를 $\lambda$ 라 하면 $\mu$ 는 $x_\mu=x_{\mu+\lambda}$ 인 가장 작은 첨자이고, $i\ge\mu$ 에서 $x_{i+\lambda}=x_i$ 다. $\mu$ 를 **꼬리 길이(tail length)**, $\lambda$ 를 **고리 길이(cycle length)** 라 한다.

## Floyd 고리 찾기

**Floyd 고리 찾기(Floyd's cycle-finding algorithm)** 는 $x_i$ 와 $x_{2i}$ 를 $i=1,2,\dots$ 에서 비교한다. $i\ge\mu$ 이고 $\lambda$ 가 $i$ 를 나누면 $x_i=x_{2i}$ 이므로, 처음 같아지는 $i$ 는 $\mu+\lambda$ 이하다. 저장하는 값은 $x_i$ 와 $x_{2i}$ 둘이다.

## 인수분해판

```typescript
function gcd(a: bigint, b: bigint): bigint {
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

function pollardRho(n: bigint, c: bigint = 1n): bigint {
  const f = (x: bigint) => (x * x + c) % n;
  let x = 2n;
  let y = 2n;
  let d = 1n;
  while (d === 1n) {
    x = f(x);
    y = f(f(y));
    d = gcd(x > y ? x - y : y - x, n);
  }
  return d;
}
```

결과 $d$ 가 $n$ 이면 두 소인수의 고리가 동시에 닫힌 것이므로 $c$ 를 바꿔 다시 한다.

## 이산로그판

위수가 소수 $q$ 인 순환군 $G=\langle g\rangle$ 에서 $h=g^x$ 의 $x$ 를 찾는다. $G$ 를 크기가 비슷한 세 집합 $S_1,S_2,S_3$ 으로 나누고 $f(y)$ 를 $y\in S_1$ 이면 $hy$, $y\in S_2$ 이면 $y^2$, $y\in S_3$ 이면 $gy$ 로 둔다. $y_0=1$ 에서 시작하면 모든 $y_i$ 가 $g^{a_i}h^{b_i}$ 꼴이고 지수 $a_i,b_i$ 를 법 $q$ 로 함께 갱신한다. Floyd 고리 찾기로 $y_i=y_{2i}$ 를 찾으면

$$
g^{a_i}h^{b_i}=g^{a_{2i}}h^{b_{2i}},\qquad x(b_i-b_{2i})\equiv a_{2i}-a_i\pmod q
$$

이고, $b_i\not\equiv b_{2i}$ 이면 $x$ 가 나온다.

# 성질

## 생일 한계

정리. 크기 $m$ 인 집합에서 함수 $f$ 를 균등한 무작위 함수로 고르면 처음으로 되풀이되는 위치 $\mu+\lambda$ 의 기댓값은 $\sqrt{\pi m/2}+O(1)$ 이다[^3].

증명의 요지. 처음 $k$ 개의 값이 모두 다를 확률은 $\prod_{j=1}^{k-1}(1-j/m)\approx e^{-k^2/(2m)}$ 이다. 기댓값은 이 확률을 $k$ 에 대해 더한 것이고, 합은 $\int_0^\infty e^{-t^2/(2m)}dt=\sqrt{\pi m/2}$ 에 가깝다.

알고리즘의 $f(x)=x^2+c$ 는 무작위 함수가 아니다. 실행 시간의 분석은 $f$ 가 무작위 함수처럼 움직인다는 가정 아래의 것이고, 실제 계산에서 이 가정에 맞는 시간이 나온다[^3].

## 실행 시간

- 인수분해판. $n$ 의 가장 작은 소인수를 $p$ 라 하면 법 $p$ 의 수열이 $O(\sqrt p)$ 단계에 고리를 닫으므로 기대 $O(\sqrt p)$ 번의 곱셈과 최대공약수 계산이다. $n$ 이 합성수이면 $p\le\sqrt n$ 이므로 $O(n^{1/4})$ 단계다.
- 이산로그판. $\vert G\vert=q$ 이므로 기대 $O(\sqrt q)$ 번의 군 연산이다. 군의 연산만 쓰는 알고리즘은 $\Omega(\sqrt q)$ 번의 연산이 필요하므로 차수가 최적이고, baby-step giant-step 과 달리 공간이 $O(1)$ 이다.

R. P. Brent 는 Floyd 고리 찾기 대신 $x_{2^k}$ 를 저장해 두고 다음 $2^k$ 개와 비교하는 방법과 최대공약수를 여러 단계에 한 번만 구하는 방법으로 상수를 줄였다. Brent 와 Pollard 는 이 방법으로 Fermat 수 $F_8=2^{256}+1$ 을 인수분해했다[^4].

## 병렬화

이산로그판은 여러 프로세서가 각자 다른 시작점에서 수열을 만들고, 정해진 꼴의 원소(예를 들어 표현의 아래 비트가 $0$ 인 원소)를 만날 때만 공유 목록에 적는 방법으로 병렬화한다. 두 수열이 한 번 만나면 그 뒤로 같은 길을 가므로 같은 원소가 목록에 두 번 적히고, 프로세서 $P$ 개로 시간이 $O(\sqrt q/P)$ 가 된다[^5].

# 활용

- [타원곡선](elliptic-curves.md) 암호의 안전성. 타원곡선 이산로그 문제에 알려진 가장 좋은 일반적인 공격이 병렬화한 Pollard rho 알고리즘이고, 위수 $q$ 인 곡선의 안전성 수준을 $\sqrt q$ 로 셈한다.
- [Pohlig–Hellman 방법](pohlig-hellman.md). 군의 위수가 $\prod q_j^{e_j}$ 이면 이산로그를 각 $q_j$ 위수 부분군의 문제로 나누고, 그 각각을 Pollard rho 알고리즘으로 푼다. 비용은 가장 큰 $q_j$ 의 제곱근으로 정해진다.
- 작은 인수 찾기. 큰 수의 인수분해에서 나눗셈으로 걸러지지 않는 십여 자리의 소인수를 이 알고리즘으로 먼저 떼어 낸다.

[^1]: J. M. Pollard, "A Monte Carlo method for factorization", BIT Numerical Mathematics 15 (3) (1975), 331–334.
[^2]: J. M. Pollard, "Monte Carlo methods for index computation (mod p)", Mathematics of Computation 32 (143) (1978), 918–924.
[^3]: R. Crandall, C. Pomerance, *Prime Numbers: A Computational Perspective*, 2nd ed., Springer, 2005, §5.2.
[^4]: R. P. Brent, J. M. Pollard, "Factorization of the eighth Fermat number", Mathematics of Computation 36 (154) (1981), 627–630.
[^5]: P. C. van Oorschot, M. J. Wiener, "Parallel collision search with cryptanalytic applications", Journal of Cryptology 12 (1) (1999), 1–28.

# 연관 문서

## 선수지식

- [이산로그](discrete-logarithm.md)
- [유한 확률 공간](probability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography #probability
