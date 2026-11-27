# 가장 작은 원시근

# 개요

소수 $p$ 의 **가장 작은 원시근(least primitive root)** $g(p)$ 는 법 $p$ 의 [원시근](primitive-roots.md) 가운데 가장 작은 양의 정수다. Diffie–Hellman 키 교환을 법 $p$ 에서 하려면 원시근이 하나 있어야 하고, $2,3,4,\dots$ 를 차례로 원시근 판정에 넣어 처음 통과하는 수를 쓰면 시험 횟수가 $g(p)$ 다. 모든 $p$ 에서 몇 번 안에 끝난다고 보장하려면 $g(p)$ 의 상한이 있어야 하고, 이 상한은 곱셈 지표(multiplicative character)의 짧은 구간 합이 작다는 지표합 한계에서 나온다.

# 직관

$p=41$ 이면 $p-1=40=2^3\cdot 5$ 이다. 원시근 판정에 따라 $a$ 가 원시근인 것은 $a^{20}\not\equiv 1$ 이고 $a^{8}\not\equiv 1$ 인 것이다. $a=2,\dots,6$ 을 넣으면 다음이 나온다.

| $a$ | $a^{20}\bmod 41$ | $a^{8}\bmod 41$ | 원시근 |
| --- | --- | --- | --- |
| $2$ | $1$ | $10$ | 아니다 |
| $3$ | $40$ | $1$ | 아니다 |
| $4$ | $1$ | $18$ | 아니다 |
| $5$ | $1$ | $18$ | 아니다 |
| $6$ | $40$ | $10$ | 맞다 |

$g(41)=6$ 이다. $a^{20}\equiv 1$ 인 $2,4,5$ 는 법 $41$ 의 제곱잉여이고, $3$ 은 제곱잉여가 아니지만 위수가 $8$ 이라 탈락한다. 원시근은 $p-1$ 의 소인수마다 하나씩 걸린 조건을 모두 통과해야 하므로, [가장 작은 제곱비잉여](least-quadratic-nonresidue.md) $n_{41}=3$ 보다 늦게 나온다.

$p$ 가 커질 때 이 시험이 몇 번에서 끝나는지를 정하려면, $1$ 부터 $N$ 까지의 정수 가운데 원시근이 몇 개인지를 세야 한다. 원시근은 법 $p$ 의 나머지 가운데 $\varphi(p-1)/(p-1)$ 의 비율을 차지하고, 짧은 구간 $\lbrack 1,N\rbrack$ 에서도 이 비율에 가깝게 들어 있으면 $N$ 이 그리 크지 않을 때 원시근이 이미 하나 있다.

# 정의

홀수 소수 $p$ 에 대해 다음과 같이 둔다.

$$
g(p)=\min\lbrace g\ge 1:\mathrm{ord}\_p(g)=p-1\rbrace
$$

$\mathrm{ord}\_p$ 는 원시근 문서의 위수다. 직관 절의 $g(41)=6$ 이 예다. $p$ 가 $1000$ 이하인 홀수 소수 $167$ 개 가운데 $g(p)=2$ 인 것은 $67$ 개다.

더 작은 모든 소수의 값보다 큰 $g(p)$ 가 처음 나타나는 $p$ 는 다음과 같다.

| p | 3 | 7 | 23 | 41 | 71 | 191 | 409 | 2161 | 5881 | 36721 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| g(p) | 2 | 3 | 5 | 6 | 7 | 19 | 21 | 23 | 31 | 37 |

# 성질

## 원시근의 지시함수

$p-1$ 을 나누는 $d$ 마다 위수가 정확히 $d$ 인 곱셈 지표는 $\varphi(d)$ 개다. $p\nmid a$ 이면 다음이 성립한다.

$$
\frac{\varphi(p-1)}{p-1}\sum_{d\mid p-1}\frac{\mu(d)}{\varphi(d)}\sum_{\mathrm{ord}\thinspace\chi=d}\chi(a)=\begin{cases}1&a\text{ 가 원시근}\cr 0&\text{그 밖}\end{cases}
$$

이 등식을 Vinogradov 의 지시함수 공식이라 한다. $\mu$ 는 Möbius 함수(Möbius function)다.

증명의 요지. 원시근 $g$ 로 $a=g^k$ 라 쓰면 위수가 $d$ 인 지표들의 합은 $k$ 에 대한 Ramanujan 합(Ramanujan sum) $c_d(k)$ 이고, $\sum_{d\mid p-1}\mu(d)c_d(k)/\varphi(d)$ 는 [Möbius 반전](mobius-inversion.md)으로 $\gcd(k,p-1)=1$ 일 때 $(p-1)/\varphi(p-1)$, 그 밖에서 $0$ 이다. $\gcd(k,p-1)=1$ 은 $g^k$ 가 원시근이라는 조건이다.

## Vinogradov 의 상한

$\omega(p-1)$ 을 $p-1$ 의 서로 다른 소인수의 개수라 하면 다음이 성립한다[^1].

$$
g(p)\le 2^{\omega(p-1)}\sqrt p\log p
$$

증명의 요지. 지시함수 공식을 $a=1,\dots,N$ 에서 더하면 $d=1$ 의 항이 $N$ 을 준다. $d\gt 1$ 이면 지표가 자명하지 않으므로 [Pólya–Vinogradov 부등식](polya-vinogradov-inequality.md)으로 각 지표의 구간 합이 $\sqrt p\log p$ 이하이고, 위수가 $d$ 인 지표 $\varphi(d)$ 개가 $1/\varphi(d)$ 와 상쇄된다. $\mu(d)\ne 0$ 인 $d$ 는 $2^{\omega(p-1)}$ 개이므로, 원시근의 개수는 다음 이상이다.

$$
\frac{\varphi(p-1)}{p-1}\left(N-2^{\omega(p-1)}\sqrt p\log p\right)
$$

$N$ 이 $2^{\omega(p-1)}\sqrt p\log p$ 보다 크면 이 값이 양수이므로 $\lbrack 1,N\rbrack$ 에 원시근이 있다.

## Burgess 의 지수

$2^{\omega(p-1)}$ 은 $\varepsilon\gt 0$ 마다 $p^{\varepsilon}$ 이하다. 같은 논법에 [Burgess 한계](burgess-bound.md)를 쓰면 충분히 큰 모든 $p$ 에서 다음이 나온다[^2].

$$
g(p)\le p^{1/4+\varepsilon}
$$

가장 작은 제곱비잉여의 지수 $1/(4\sqrt e)$ 와 달리 여기서는 지수가 $1/4$ 에 머문다. 제곱비잉여의 논법은 작은 수가 모두 제곱잉여이면 그 곱도 제곱잉여라는 것을 쓰지만, 원시근이 아닌 수의 곱은 원시근일 수 있어 같은 논법이 서지 않는다.

## 일반화된 Riemann 가설 아래의 상한

[Dirichlet L 함수](dirichlet-l-functions.md)에 대한 일반화된 [Riemann 가설](riemann-hypothesis.md)을 가정하면, Shoup 은 다음을 보였다[^3].

$$
g(p)=O\left(\omega(p-1)^4\left(\log\omega(p-1)+1\right)^4(\log p)^2\right)
$$

이 상한으로 $p-1$ 의 소인수분해가 주어지면 원시근을 결정론적으로 다항식 시간에 찾는다.

## 가장 작은 제곱비잉여와의 비교

홀수 소수 $p$ 의 원시근 $g$ 는 $g^{(p-1)/2}\equiv -1$ 이므로 제곱비잉여다. $n_p$ 보다 작은 양의 정수는 모두 제곱잉여이므로 다음이 성립한다.

$$
g(p)\ge n_p
$$

가장 작은 제곱비잉여 문서의 큰 값의 구성으로 $n_p$ 가 위로 유계가 아니므로, $g(p)$ 도 위로 유계가 아니다. 직관 절의 $p=41$ 에서는 $g(41)=6\gt n_{41}=3$ 이다.

## 평균

Burgess 와 Elliott 는 $x$ 이하의 소수에 대한 $g(p)$ 의 평균이 $(\log x)^2(\log\log x)^4$ 의 상수배 이하임을 보였다[^4]. 대부분의 소수에서 $g(p)$ 는 $\sqrt p$ 보다 훨씬 작다.

# 활용

- 원시근 찾기. [이산로그](discrete-logarithm.md) 기반 암호와 [Pohlig–Hellman 방법](pohlig-hellman.md)의 기준점을 $2$ 부터 차례로 시험해 정하고, 시험 횟수가 $g(p)$ 다. 평균의 상한으로 보통 몇 번 안에 끝난다.
- [Artin 원시근 추측](artin-primitive-root-conjecture.md)과의 비교. $g(p)$ 는 $p$ 를 고정하고 원시근인 가장 작은 $a$ 를 찾는 문제이고, Artin 추측은 $a$ 를 고정하고 $a$ 가 원시근인 $p$ 의 비율을 묻는 문제다. $g(p)=2$ 인 소수가 $1000$ 이하에서 $67/167\approx 0.40$ 의 비율인 것은 Artin 상수 $0.3739\ldots$ 와 견줄 수 있다.
- 유한체의 원시원소. 같은 지시함수 공식을 [유한체](finite-fields.md) $\mathbb F_{q}$ 의 곱셈 지표에 쓰면, 대각합이나 노름을 정해 둔 원소 가운데에도 곱셈군의 생성원이 있다는 존재 정리가 나온다.

[^1]: H. Iwaniec, E. Kowalski, Analytic Number Theory, AMS Colloquium Publications 53, American Mathematical Society, 2004, §12.4.
[^2]: D. A. Burgess, "On character sums and L-series", Proceedings of the London Mathematical Society (3) 12 (1962), 193–206.
[^3]: V. Shoup, "Searching for primitive roots in finite fields", Mathematics of Computation 58 (1992), 369–380.
[^4]: D. A. Burgess, P. D. T. A. Elliott, "The average of the least primitive root", Mathematika 15 (1968), 39–50.

# 연관 문서

## 선수지식

- [원시근](primitive-roots.md)
- [가장 작은 제곱비잉여](least-quadratic-nonresidue.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #cryptography #algorithms
