# Baby-step giant-step 알고리즘

# 개요

**Baby-step giant-step 알고리즘(baby-step giant-step algorithm)** 은 $g^x=h$ 인 지수 $x$ 를 하나씩 시험하는 대신 두 묶음으로 나눠 찾는 알고리즘이다. 법 $101$ 에서 $2^x\equiv 3$ 인 $x$ 를 찾을 때 $x=10i+j$ 로 쓰면, $2^0,\dots,2^9$ 을 표에 적어 두고 $3\cdot 2^{-10i}$ 를 $i=0,1,\dots$ 에 대해 계산해 표에서 찾으므로 시험 횟수가 $100$ 번에서 $20$ 번 정도로 준다. 위수가 $N$ 인 군에서 이 알고리즘은 군 연산과 저장 공간을 각각 $\sqrt N$ 정도로 써서 [이산로그](discrete-logarithm.md)를 구한다.

# 직관

Baby-step giant-step 알고리즘은 위수가 $N$ 이하인 순환군 $\langle g\rangle$ 에서 $g^x=h$ 인 $x$ 를 $m=\lceil\sqrt N\rceil$ 에 대해 $x=im+j$ $(0\le i,j\lt m)$ 로 나눠, $g^j$ 를 모두 저장한 표에서 $hg^{-im}$ 을 찾아 구하는 알고리즘이다. 군 연산 $O(\sqrt N)$ 번과 원소 $O(\sqrt N)$ 개의 저장 공간을 쓴다. D. Shanks 가 1971 년에 류수 계산을 위해 제안했다[^1].

이산로그를 완전 탐색하면 $g^0,g^1,\dots$ 를 $N$ 개까지 시험한다. 이 알고리즘은 시험할 지수를 $\sqrt N$ 개씩 두 묶음으로 나눠 저장 공간으로 시간을 줄인다.

법 $101$ 에서 $2^x\equiv 3$ 인 $x$ 를 찾는다. $2$ 의 위수는 $100$ 이므로 $0\le x\lt 100$ 이고, $x=10i+j$ $(0\le i,j\le 9)$ 로 쓸 수 있다. $2^{10i+j}\equiv 3$ 은 $2^j\equiv 3\cdot(2^{-10})^i$ 와 같다.

왼쪽 $2^j$ 를 $j=0,\dots,9$ 에서 계산해 표에 적으면 $1,2,4,8,16,32,64,27,54,7$ 이다. $2^{10}\equiv 14$ 이고 $14\cdot 65\equiv 1$ 이므로 $2^{-10}\equiv 65$ 다. 오른쪽은 $3$ 에서 시작해 $65$ 를 거듭 곱한 $3,94,50,18,59,98,7,\dots$ 이고, $i=6$ 에서 $7$ 이 표의 $j=9$ 자리에 있다.

그래서 $x=10\cdot 6+9=69$ 이고 $2^{69}\equiv 3\pmod{101}$ 이다. 곱셈은 표를 만드는 데 $10$ 번, 오른쪽을 만드는 데 $6$ 번이었다. 완전 탐색은 $69$ 번이 든다.

# 정의

## 알고리즘

입력은 원소 $g$, $h$ 와 $g$ 의 위수의 상한 $N$ 이다.

1. $m=\lceil\sqrt N\rceil$ 로 둔다.
2. 아기 걸음. $j=0,1,\dots,m-1$ 에 대해 $(g^j,j)$ 를 [해시 테이블](hash-tables.md)에 넣는다.
3. 거인 걸음. $u=g^{-m}$ 을 계산하고 $y=h$ 에서 시작해 $i=0,1,\dots,m-1$ 마다 $y$ 가 표에 있는지 본다. 있으면 그 $j$ 에 대해 $x=im+j$ 를 낸다. 없으면 $y\leftarrow yu$ 로 한다.
4. 끝까지 찾지 못하면 $h$ 는 $\langle g\rangle$ 에 없다.

```typescript
function bsgs(g: bigint, h: bigint, p: bigint, N: number): number {
  const mul = (a: bigint, b: bigint) => (a * b) % p;
  const m = Math.ceil(Math.sqrt(N));
  const table = new Map();
  let e = 1n;
  for (let j = 0; j < m; j++) {
    if (!table.has(e)) table.set(e, j);
    e = mul(e, g);
  }
  const u = modInverse(e, p);
  let y = h % p;
  for (let i = 0; i < m; i++) {
    if (table.has(y)) return i * m + table.get(y);
    y = mul(y, u);
  }
  return -1;
}
```

`modInverse` 는 확장 [유클리드 알고리즘](euclidean-algorithm.md)으로 역원을 구하는 함수이고, 첫 반복이 끝난 뒤 `e` 는 $g^m$ 이다.

# 성질

## 정확성과 비용

정리. $h=g^x$ 이고 $0\le x\lt N$ 이면 알고리즘은 $x$ 를 낸다. 군 연산은 $2m+O(\log m)=O(\sqrt N)$ 번이고 표의 크기는 $m$ 이다[^2].

증명의 요지. $x=im+j$ 로 $m$ 진법으로 쓰면 $0\le i,j\lt m$ 이고 $hg^{-im}=g^j$ 가 표에 있다. 표를 만드는 데 곱셈 $m$ 번, $g^{-m}$ 을 구하는 데 $O(\log m)$ 번, 거인 걸음에 많아야 $m$ 번이다. 해시 테이블의 조회는 기대 상수 시간이다.

## 일반 군 알고리즘으로서의 최적성

군의 연산과 같음 판정만 쓰는 알고리즘은 위수가 소수 $q$ 인 군에서 이산로그를 구하는 데 $\Omega(\sqrt q)$ 번의 연산이 필요하다는 것이 Shoup 의 하한(Shoup's lower bound)이다[^3]. 이 알고리즘은 이 하한과 차수가 같다. [Pollard rho 알고리즘](pollard-rho.md)은 같은 시간을 기대값으로 내고 공간을 $O(1)$ 로 줄인다.

## 시간과 공간의 교환

$m$ 대신 표의 크기를 $s$ 로 두면 거인 걸음의 보폭이 $s$ 이고 걸음 수가 $N/s$ 이다. 시간 $O(s+N/s)$ 와 공간 $O(s)$ 사이에서 고를 수 있고, $s=\sqrt N$ 이 시간을 최소로 한다. 지수가 구간 $\lbrack a,b\rbrack$ 에 있다고 알면 $N$ 대신 $b-a$ 로 같은 계산을 해서 $O(\sqrt{b-a})$ 에 찾는다.

# 활용

- 군 위수의 계산. 원소 $P$ 의 위수가 구간 $\lbrack L,L+W\rbrack$ 에 있다고 알면 $kP=0$ 인 $k$ 를 이 알고리즘으로 $O(\sqrt W)$ 번의 연산에 찾는다. [타원곡선](elliptic-curves.md)의 점 개수가 Hasse 구간 $\lvert\char35{}E(\mathbb F_q)-q-1\rvert\le 2\sqrt q$ 에 있으므로, Shanks–Mestre 방법이 이것으로 점의 개수를 $O(q^{1/4})$ 번의 연산에 센다.
- [Pohlig–Hellman 방법](pohlig-hellman.md)의 부분 문제. 위수의 소인수 $q_j$ 마다 생기는 이산로그 문제를 이 알고리즘으로 $O(\sqrt{q_j})$ 에 푼다.
- 류군의 구조. Shanks 의 원래 목적은 이차체의 류군에서 원소의 위수와 류수를 구하는 것이었다[^1].

[^1]: D. Shanks, "Class number, a theory of factorization, and genera", Proceedings of Symposia in Pure Mathematics 20, American Mathematical Society, 1971, 415–440.
[^2]: A. J. Menezes, P. C. van Oorschot, S. A. Vanstone, *Handbook of Applied Cryptography*, CRC Press, 1996, §3.6.2.
[^3]: V. Shoup, "Lower bounds for discrete logarithms and related problems", EUROCRYPT 1997, LNCS 1233, 256–266.

# 연관 문서

## 선수지식

- [이산로그](discrete-logarithm.md)

## 더 알아보기

- [Pohlig–Hellman 방법](pohlig-hellman.md)

#number_theory #algorithms #cryptography #group_theory
