# 가장 작은 제곱비잉여

# 개요

소수 $p$ 의 **가장 작은 제곱비잉여(least quadratic nonresidue)** $n\_p$ 는 법 $p$ 로 어떤 정수의 제곱과도 합동이 아닌 가장 작은 양의 정수다. [Tonelli–Shanks 알고리즘](tonelli-shanks-algorithm.md)으로 법 $p$ 의 제곱근을 구하려면 제곱잉여가 아닌 수가 하나 있어야 하고, $1,2,3,\dots$ 을 차례로 시험해 처음 걸리는 수를 쓰면 시험 횟수가 $n\_p$ 다. 절반의 수가 제곱비잉여이므로 보통 금방 찾지만, 모든 $p$ 에서 몇 번 안에 찾는다고 보장하려면 $n\_p$ 의 상한이 있어야 한다. 이 상한은 제곱잉여에서 $+1$, 제곱비잉여에서 $-1$ 인 함수의 짧은 구간 합이 작다는 지표합 한계에서 나온다.

# 직관

법 $23$ 의 제곱잉여는 $1,2,3,4,6,8,9,12,13,16,18$ 이므로 $n\_{23}=5$ 다. $1$ 부터 $4$ 까지가 모두 제곱잉여이면 그 곱으로 만든 수도 모두 제곱잉여다. $6=2\cdot 3$, $8=2^3$, $9=3^2$, $12$, $16$, $18$ 이 그렇게 나온다.

제곱잉여에서 $+1$, 제곱비잉여에서 $-1$ 인 함수를 $\chi$ 라 한다. $1$ 부터 $N$ 까지가 모두 제곱잉여이면 $\chi(1)+\cdots+\chi(N)=N$ 이다. [Pólya–Vinogradov 부등식](polya-vinogradov-inequality.md)은 이 합이 $\sqrt p\log p$ 정도 이하라고 하므로 $N$ 도 그 이하이고, $n\_p$ 는 $\sqrt p\log p$ 정도 이하다.

$1$ 부터 $y$ 까지가 모두 제곱잉여이면 $y$ 보다 큰 수 가운데에도 소인수가 모두 $y$ 이하인 수는 제곱잉여다. 그래서 $N$ 이 $y$ 보다 조금 크면 $1$ 부터 $N$ 까지의 대부분이 제곱잉여이고 합이 여전히 $N$ 에 가깝다. 이렇게 하면 $y$ 를 $N$ 보다 훨씬 작게 잡아도 모순이 나와 상한이 줄어든다.

# 정의

홀수 소수 $p$ 와 $p$ 의 배수가 아닌 정수 $a$ 에 대해 $x^2\equiv a\pmod p$ 인 $x$ 가 있으면 $a$ 를 법 $p$ 의 **제곱잉여(quadratic residue)**, 없으면 **제곱비잉여(quadratic nonresidue)** 라 한다. Legendre 기호(Legendre symbol) $\left(\frac ap\right)$ 는 제곱잉여에서 $1$, 제곱비잉여에서 $-1$ 이다. 가장 작은 제곱비잉여는 다음이다.

$$
n\_p=\min\left\lbrace n\ge 1:\left(\frac np\right)=-1\right\rbrace
$$

$\left(\frac{ab}p\right)=\left(\frac ap\right)\left(\frac bp\right)$ 이다. $n\_p=ab$ 이고 $1\lt a,b\lt n\_p$ 이면 $a$, $b$ 가 제곱잉여라 $ab$ 도 제곱잉여이므로, $n\_p$ 는 소수다. 직관 절의 $n\_{23}=5$ 가 그렇다.

# 성질

## Vinogradov 의 방법

$\varepsilon\gt 0$ 이면 충분히 큰 모든 $p$ 에서 다음이 성립한다[^1].

$$
n\_p\le p^{1/(2\sqrt e)+\varepsilon}
$$

증명의 요지. $y=n\_p-1$ 로 두면 $y$ 이하의 수는 모두 제곱잉여이고, 소인수가 모두 $y$ 이하인 수도 모두 제곱잉여다. $N=y^u$ 이하에서 그런 수의 비율은 [매끄러운 수](smooth-numbers.md) 문서의 Dickman 함수로 $\rho(u)$ 에 가깝고, $1\le u\le 2$ 이면 $\rho(u)=1-\log u$ 다. 나머지 수에서 $\chi$ 가 모두 $-1$ 이어도 다음이 나온다.

$$
\sum_{n\le N}\chi(n)\ge(2\rho(u)-1+o(1))N
$$

$u\lt\sqrt e$ 이면 $2\rho(u)-1\gt 0$ 이라 합이 $N$ 의 상수배 이상이다. Pólya–Vinogradov 부등식으로 $N$ 은 $p^{1/2+\varepsilon}$ 정도 이하이므로, $y=N^{1/u}$ 는 $p^{1/(2u)+\varepsilon}$ 이하다. $u$ 를 $\sqrt e$ 에 가깝게 잡으면 위 식이 나온다.

## Burgess 의 지수

같은 논법에 [Burgess 한계](burgess-bound.md)를 쓰면 $N=p^{1/4+\varepsilon}$ 에서 합이 $N$ 보다 작은 차수가 되므로 다음이 나온다[^2].

$$
n\_p\le p^{1/(4\sqrt e)+\varepsilon}
$$

$1/(4\sqrt e)\approx 0.152$ 다.

## 일반화된 Riemann 가설 아래의 상한

[Dirichlet L 함수](dirichlet-l-functions.md)의 영점이 모두 실수부 $1/2$ 위에 있다는 일반화된 [Riemann 가설](riemann-hypothesis.md)을 가정하면, Ankeny 는 $n\_p$ 가 $(\log p)^2$ 의 상수배 이하임을 보였다. Bach 는 상수를 정해 다음을 보였다[^3].

$$
n\_p\lt 2(\log p)^2
$$

Tonelli–Shanks 알고리즘이 결정론적으로 다항식 시간에 끝난다는 것이 이 상한에서 나온다.

## 큰 값과 드문 예외

$y$ 를 하나 정하고 $p\equiv 1\pmod 8$ 이며 $y$ 이하의 모든 홀수 소수 $q$ 에 대해 $p\equiv 1\pmod q$ 인 소수 $p$ 를 잡는다. 이런 $p$ 는 등차수열의 소수에 대한 Dirichlet 정리로 존재한다. [이차 상호법칙](quadratic-reciprocity.md)으로 $\left(\frac qp\right)=\left(\frac pq\right)=1$ 이고 $\left(\frac 2p\right)=1$ 이므로, $y$ 이하의 모든 소수가 법 $p$ 의 제곱잉여라 $n\_p\gt y$ 다. 그래서 $n\_p$ 는 위로 유계가 아니다.

$n\_p$ 가 큰 소수는 드물다. Linnik 은 [큰 체](large-sieve.md)로, $\varepsilon\gt 0$ 을 정하면 $x$ 이하의 소수 가운데 $n\_p\gt x^\varepsilon$ 인 것의 개수가 $\varepsilon$ 에만 달리는 상수 이하임을 보였다[^4].

# 활용

- 법 $p$ 의 제곱근. Tonelli–Shanks 알고리즘과 Cipolla 알고리즘이 제곱비잉여 하나를 쓰고, $1$ 부터 차례로 시험할 때의 횟수가 $n\_p$ 다.
- 원시근 찾기. 제곱비잉여는 법 $p$ 의 곱셈군에서 위수의 $2$ 부분이 가장 큰 원소이고, 가장 작은 [원시근](primitive-roots.md)의 상한도 같은 지표합 논법으로 얻는다.
- 소수 판정. 일반화된 Riemann 가설 아래 Miller 판정법이 결정론적이 되는 것은, 합성수의 증인이 $2(\log n)^2$ 이하에 있다는 Bach 의 같은 종류의 상한에서 나온다[^3].

[^1]: H. Iwaniec, E. Kowalski, Analytic Number Theory, AMS Colloquium Publications 53, American Mathematical Society, 2004, §9.5 와 §12.4.

[^2]: D. A. Burgess, "The distribution of quadratic residues and non-residues", Mathematika 4 (1957), 106–112.

[^3]: E. Bach, "Explicit bounds for primality testing and related problems", Mathematics of Computation 55 (1990), 355–380.

[^4]: Yu. V. Linnik, "A remark on the least quadratic non-residue", Doklady Akademii Nauk SSSR 36 (1942), 119–120.

# 연관 문서

## 선수지식

- [Burgess 한계](burgess-bound.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #algorithms
