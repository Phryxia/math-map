# 지표 계산법

# 개요

**지표 계산법(index calculus)** 은 작은 소수들의 이산로그를 연립 합동식으로 먼저 구하고, 그것으로 임의의 원소의 이산로그를 구하는 알고리즘이다. 소수 $p$ 에 대한 곱셈군 $(\mathbb Z/p\mathbb Z)^\times$ 에서 준지수 시간에 [이산로그](discrete-logarithm.md)를 구한다. 지표(index)는 이산로그의 옛 이름이다.

[Baby-step giant-step 알고리즘](baby-step-giant-step.md)과 [Pollard rho 알고리즘](pollard-rho.md)은 군 연산만 써서 $O(\sqrt p)$ 단계가 걸린다. 지표 계산법은 원소가 정수이고 정수가 소인수분해된다는 사실을 사용해 이 한계보다 빠르다.

# 직관

$p=101$, $g=2$ 에서 $2^x\equiv 37\pmod{101}$ 을 푼다. $2$ 는 이 군의 생성원이고 위수는 $100$ 이다. 로그는 곱을 합으로 바꾸므로, $3$ 과 $5$ 의 로그를 알면 $3^a5^b$ 꼴 원소의 로그는 $a\log 3+b\log 5$ 다. $\log 2=1$ 이다.

$2^k \bmod 101$ 을 차례로 계산해 $2$, $3$, $5$ 만으로 쪼개지는 값을 모은다. $2^7\equiv 27=3^3$ 에서 $3\log 3\equiv 7\pmod{100}$ 이고, $3$ 의 역원이 $67$ 이므로 $\log 3\equiv 69$ 다. $2^{24}\equiv 5$ 에서 $\log 5=24$ 다.

$37$ 은 쪼개지지 않으므로 $37\cdot 2^s$ 를 차례로 계산한다. $s=6$ 에서 $37\cdot 64\equiv 45=3^2\cdot 5$ 이다. 그러면 $\log 37+6\equiv 2\cdot 69+24\pmod{100}$ 이고 $\log 37=56$ 이다. 실제로 $2^{56}\equiv 37\pmod{101}$ 이다.

$p$ 가 크면 $2^k \bmod p$ 가 작은 소수만으로 쪼개질 확률이 작아진다. 그래서 쪼개기에 쓰는 소수의 범위를 $p$ 에 맞춰 정하고, 그 범위에서 관계식을 소수 개수만큼 모아 연립 합동식을 푼다.

# 정의

## 인수 기저와 매끄러운 수

양의 정수 $n$ 의 소인수가 모두 $B$ 이하이면 $n$ 을 **$B$-매끄러운 수(B-smooth number)** 라 한다. $B$ 이하의 소수 전체 $\mathcal F=\lbrace q_1,\dots,q_m\rbrace$ 를 **인수 기저(factor base)** 라 한다.

## 알고리즘

$g$ 를 $(\mathbb Z/p\mathbb Z)^\times$ 의 생성원, $h$ 를 목표 원소라 한다. 지표 계산법은 세 단계다[^1].

1. 관계 수집. 무작위 $k$ 에 대해 $g^k \bmod p$ 를 $1$ 과 $p-1$ 사이의 정수로 보고, $B$-매끄러우면 $g^k\equiv\prod_i q_i^{e_i}$ 를 기록한다. 각 관계는 합동식 $k\equiv\sum_i e_i\log_g q_i\pmod{p-1}$ 하나를 준다.
2. 선형대수. 관계를 $m$ 개보다 조금 많이 모아 $\log_g q_i$ 를 미지수로 하는 연립 합동식을 $\mathbb Z/(p-1)\mathbb Z$ 에서 푼다. $p-1$ 은 합성수이므로 그 소인수의 거듭제곱마다 풀고 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 합친다.
3. 개별 로그. 무작위 $s$ 에 대해 $h g^s \bmod p$ 가 $B$-매끄러우면 $\log_g h\equiv -s+\sum_i f_i\log_g q_i$ 다.

```javascript
// 관계 수집과 개별 로그. factor(n, F) 는 n 이 F 위에서 매끄러우면 지수 벡터를, 아니면 null 을 돌려준다.
function indexCalculus(p, g, h, F) {
  const rows = [];
  while (rows.length < F.length + 10) {
    const k = randomInt(1, p - 1);
    const e = factor(powMod(g, k, p), F);
    if (e) rows.push({ e, k });
  }
  const logs = solveModulo(rows, p - 1); // logs[i] = log_g F[i]
  for (;;) {
    const s = randomInt(0, p - 1);
    const f = factor((h * powMod(g, s, p)) % p, F);
    if (f) return mod(-s + dot(f, logs), p - 1);
  }
}
```

1 단계와 2 단계는 $h$ 에 무관하다. 같은 $p$ 와 $g$ 에 대해 한 번 계산해 두면 3 단계만으로 여러 $h$ 의 로그를 구한다.

# 성질

## 매끄러운 수의 확률

$u=\log x/\log y$ 라 하면, $x$ 이하의 정수 가운데 $y$-매끄러운 것의 비율은 $u^{-u(1+o(1))}$ 이다. 이것이 Canfield–Erdős–Pomerance 정리(Canfield–Erdős–Pomerance theorem)이고, $u\to\infty$ 이면서 $y\ge(\log x)^{1+\varepsilon}$ 인 범위에서 성립한다[^2].

## 복잡도

$L_p[\alpha,c]=\exp\big((c+o(1))(\log p)^\alpha(\log\log p)^{1-\alpha}\big)$ 로 쓴다. $\alpha=0$ 이면 $\log p$ 의 다항식, $\alpha=1$ 이면 $p$ 의 거듭제곱이다.

정리. $B=L_p[1/2,1/\sqrt 2]$ 로 잡으면 지표 계산법의 기대 시간은 $L_p[1/2,\sqrt 2]$ 다[^1][^2].

증명의 요지. 인수 기저의 크기는 $B$ 정도이고, $g^k \bmod p$ 가 $B$-매끄러울 확률은 $u=\log p/\log B$ 에서 $u^{-u}$ 정도다. 관계 하나를 얻는 데 시행 $u^{u}$ 번이 들고 관계가 $B$ 개 필요하므로 1 단계는 $B\cdot u^u$ 번이다. 2 단계의 연립 합동식은 행마다 $0$ 이 아닌 항이 $O(\log p)$ 개뿐이어서 희소행렬 방법으로 $B^{2+o(1)}$ 에 풀린다. 두 비용이 같아지는 $B$ 가 위의 값이다.

## 수체 체와 함수체 체

관계 수집을 정수 하나가 아니라 두 환의 원소 쌍이 동시에 매끄러운지로 바꾸면 매끄러워야 하는 수의 크기가 줄어든다. 수체 체(number field sieve)는 $(\mathbb Z/p\mathbb Z)^\times$ 의 이산로그를 $L_p[1/3,(64/9)^{1/3}]$ 에 구한다[^2]. 같은 꼴의 시간이 정수 소인수분해에서도 나오므로 유한체 Diffie–Hellman 과 [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 권장 키 길이가 비슷하다.

작은 표수의 [유한체](finite-fields.md) $\mathbb F_{q^n}$ 에서는 함수체에서 관계를 모으는 방법이 더 빠르다. Barbulescu, Gaudry, Joux, Thomé 는 고정된 작은 $q$ 에 대해 $\mathbb F_{q^n}$ 의 이산로그를 준다항식(quasi-polynomial) 시간 $(\log q^n)^{O(\log\log q^n)}$ 에 구하는 발견적(heuristic) 알고리즘을 주었다[^3].

## 적용되지 않는 군

지표 계산법에는 원소를 작은 원소들의 곱으로 쪼개는 방법이 필요하다. [타원곡선](elliptic-curves.md)의 점군에는 그런 쪼갬이 알려져 있지 않아서 일반적인 곡선의 이산로그에 대한 최선의 알고리즘은 $O(\sqrt N)$ 이다[^1].

# 활용

- 유한체 Diffie–Hellman 의 키 길이. 곱셈군의 이산로그가 준지수 시간에 풀리므로 같은 보안 수준에서 유한체의 크기가 타원곡선의 위수보다 커야 한다. 128 비트 보안에 유한체는 3072 비트를, 타원곡선은 256 비트를 쓴다.
- [쌍선형 암호](pairing-based-cryptography.md)의 MOV(Menezes–Okamoto–Vanstone) 환산은 타원곡선 이산로그를 매장 차수 $k$ 의 유한체 $\mathbb F_{p^k}$ 의 이산로그로 옮긴다. $k$ 가 작으면 그 유한체에서 지표 계산법이 곡선 쪽 $O(\sqrt N)$ 보다 빨라 공격이 된다.
- [Pohlig–Hellman 방법](pohlig-hellman.md)과 함께 쓰면, 위수 $p-1$ 의 작은 소인수 쪽은 Pohlig–Hellman 이, 큰 소인수 쪽은 지표 계산법이 맡는다. 2 단계의 연립 합동식도 같은 방식으로 $p-1$ 의 소인수마다 나눠 푼다.

[^1]: A. J. Menezes, P. C. van Oorschot, S. A. Vanstone, *Handbook of Applied Cryptography*, CRC Press, 1996, §3.6.5.
[^2]: R. Crandall, C. Pomerance, *Prime Numbers: A Computational Perspective*, 2nd ed., Springer, 2005, §1.4.5, §6.4.
[^3]: R. Barbulescu, P. Gaudry, A. Joux, E. Thomé, "A heuristic quasi-polynomial algorithm for discrete logarithm in finite fields of small characteristic", EUROCRYPT 2014, LNCS 8441, 1–16.

# 연관 문서

## 선수지식

- [이산로그](discrete-logarithm.md)

## 더 알아보기

- [이차 체](quadratic-sieve.md)

#number_theory #cryptography #algorithms
