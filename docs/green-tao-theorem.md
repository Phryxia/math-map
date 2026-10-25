# Green–Tao 정리

# 개요

**Green–Tao 정리(Green–Tao theorem)** 는 소수 전체의 집합이 모든 길이 $k$ 의 등차수열을 포함한다는 정리다. B. Green 과 T. Tao 가 2008 년에 증명했다[^1]. 길이 $10$ 인 예는 다음이다.

$$
199,\ 409,\ 619,\ 829,\ 1039,\ 1249,\ 1459,\ 1669,\ 1879,\ 2089
$$

[Szemerédi 정리](szemeredi-theorem.md)는 상밀도가 양수인 집합에만 적용되는데, [소수 정리](prime-number-theorem.md)에 따라 $N$ 이하의 소수는 약 $N/\log N$ 개라서 소수의 밀도는 $0$ 이다. 이 정리는 소수를 밀도가 양수가 되는 더 큰 집합 안에 넣고, 그 안에서 Szemerédi 정리의 상대적 판본을 증명한다.

# 직관

소수 $3,5,7$ 은 공차 $2$ 의 등차수열이다. 공차 $2$ 로 넷째 항 $9$ 를 붙이면 $3$ 의 배수가 된다. $a,a+2,a+4$ 가운데 하나는 언제나 $3$ 의 배수이므로, 공차가 $2$ 인 세 소수는 $3,5,7$ 뿐이다. 같은 이유로 길이 $k$ 인 소수 등차수열의 공차는 $k$ 이하의 소수 $p$ 가운데 수열에 들어 있지 않은 것으로 모두 나누어떨어진다. 위의 길이 $10$ 인 예의 공차는 $210=2\cdot 3\cdot 5\cdot 7$ 이다.

작은 소수가 만드는 이 치우침을 먼저 걷어낸다. $W=2\cdot 3\cdot 5\cdot 7=210$ 으로 두고 $Wn+1$ 꼴의 수만 보면, 이 수들은 $7$ 이하의 소수로 나누어떨어지지 않는다. $Wn+1$ 이 소수인 $n$ 의 집합은 여전히 밀도가 $0$ 이지만, $2,3,5,7$ 의 배수 때문에 생기던 등차수열의 장애는 없다.

남은 문제는 밀도다. [체 방법](sieve-methods.md)으로 작은 소인수가 없는 수를 걸러 내면, 그런 수는 소수보다 $\log$ 배쯤 많고 등차수열에 대해 무작위 집합처럼 분포한다. 소수는 이 집합 안에서 양의 비율을 차지한다. 그래서 "무작위처럼 분포하는 집합 안에서 비율이 양수인 부분집합은 긴 등차수열을 포함한다" 를 증명하면 소수에 대한 결론이 나온다.

# 정의

정리(Green–Tao). 모든 $k\ge 3$ 에 대해 소수 $p_1\lt p_2\lt\cdots\lt p_k$ 가 존재해 $p_{i+1}-p_i$ 가 모두 같다. 더 강하게, 소수 집합의 부분집합 $A$ 가

$$
\limsup_{N\to\infty}\frac{\lvert A\cap\lbrack 1,N\rbrack\rvert}{\pi(N)}\gt 0
$$

를 만족하면 $A$ 도 모든 길이의 등차수열을 포함한다. 여기서 $\pi(N)$ 은 $N$ 이하의 소수의 개수다.

$\mathbb Z/N$ 위의 함수 $\nu\ge 0$ 가 $\mathbb E\thinspace\nu=1+o(1)$ 이고 다음 두 조건을 만족하면 **의사무작위 측도(pseudorandom measure)** 라 한다.

- 선형 형식 조건(linear forms condition). 서로 비례하지 않는 일차식 $\psi_1,\dots,\psi_m$ 에서 $\mathbb E\thinspace\nu(\psi_1(\mathbf x))\cdots\nu(\psi_m(\mathbf x))=1+o(1)$ 이다. $m$ 과 계수의 크기는 $k$ 에 따라 정한 범위 안에 있다.
- 상관 조건(correlation condition). $\nu$ 를 평행이동한 것들의 곱의 평균이, 이동량의 차에만 의존하는 가중 함수로 위에서 막힌다.

[Gowers 균등 노름](gowers-norms.md)의 정의가 이 조건에 쓰인다. 선형 형식 조건은 $\nu-1$ 의 $U^{k-1}$ 노름이 $o(1)$ 임을 함의한다.

# 성질

## 상대적 Szemerédi 정리

정리. $\nu$ 가 $\mathbb Z/N$ 위의 의사무작위 측도이고 $0\le f\le\nu$, $\mathbb E\thinspace f\ge\delta$ 이면

$$
\mathbb E\_{x,d\in\mathbb Z/N}\thinspace f(x)f(x+d)\cdots f(x+(k-1)d)\ge c(k,\delta)-o(1)
$$

이다. $c(k,\delta)\gt 0$ 은 $k$ 와 $\delta$ 에만 의존한다.

증명의 요지는 **전이 원리(transference principle)** 다. $f$ 를 $0\le f\_1\le 1$ 인 유계 부분 $f\_1$ 과 $U^{k-1}$ 노름이 작은 부분 $f\_2$ 의 합으로 가른다. $f\_1$ 에는 유계 함수에 대한 Szemerédi 정리를 적용한다. $f\_2$ 의 기여는 $\nu$ 로 막힌 함수에 대한 일반화 von Neumann 정리(generalized von Neumann theorem)로 작다. 선형 형식 조건이 이 정리를 증명하고, 상관 조건이 $f\_1$ 을 $1$ 이하로 잡는 분해를 만든다.

## 소수를 막는 측도

$W=\prod_{p\le w}p$ 로 두고 $w$ 를 $N$ 과 함께 천천히 키운다. 소수를 담는 함수는

$$
f(n)=\frac{\varphi(W)}{W}\log(Wn+1)\cdot 1\_{Wn+1\text{ 소수}}
$$

이고, 소수 정리를 등차수열로 옮긴 판본에서 $\mathbb E\thinspace f$ 가 양의 상수 이상이다. 막는 측도는 Goldston 과 Yıldırım 의 절단 약수합

$$
\Lambda_R(n)=\sum_{d\mid n,\thinspace d\le R}\mu(d)\log\frac Rd
$$

으로 만든다[^2]. $\nu(n)=\frac{\varphi(W)}{W}\frac{\Lambda_R(Wn+1)^2}{\log R}$ 로 두면 $R=N^{c}$ 인 작은 $c\gt 0$ 에서 $f\le C\nu$ 이고, $\nu$ 는 의사무작위 측도의 두 조건을 만족한다. 두 조건의 검증은 Selberg 체와 같은 꼴의 다중 약수합 계산이다.

## 개수의 점근식

Green 과 Tao 는 이후 소수 위의 일차 방정식계의 해의 개수를 구했다[^3]. 이 결과는 $U^{s+1}$ 역정리[^4]와 Möbius 함수가 멱영열(nilsequence)과 상관하지 않는다는 정리로 완성되었다. 그 따름정리로 $N$ 이하의 소수로 된 길이 $k$ 인 등차수열의 개수는

$$
(1+o(1))\thinspace\mathfrak S\_k\frac{N^2}{2(k-1)(\log N)^k}
$$

이고, $\mathfrak S\_k\gt 0$ 은 소수 $p$ 마다 국소 인자를 곱한 상수다.

## 다항식 판본

T. Tao 와 T. Ziegler 는 정수 계수이고 상수항이 $0$ 인 다항식 $P_1,\dots,P_k$ 에 대해 $x+P_1(m),\dots,x+P_k(m)$ 이 모두 소수인 $x$ 와 $m\ge 1$ 이 존재함을 증명했다[^5]. [Furstenberg 다중 되돌이 정리](furstenberg-multiple-recurrence.md)의 다항식 판본을 같은 전이 원리로 소수에 옮긴 것이다.

# 활용

- Erdős 등차수열 추측(Erdős conjecture on arithmetic progressions). 역수의 합이 발산하는 양의 정수 집합은 모든 길이의 등차수열을 포함한다는 추측이다. 소수의 역수 합은 발산하므로 이 정리는 그 특수한 경우다. 길이 $3$ 의 경우는 T. F. Bloom 과 O. Sisask 가 증명했다[^6].
- 전이 원리의 다른 쓰임. 의사무작위 측도로 막힌 집합에서 조합적 정리를 옮기는 방법이 [Szemerédi 정규성 보조정리](szemeredi-regularity-lemma.md)의 희박 판본과 무작위 그래프의 극단 문제에 쓰인다.
- [소수 간격](prime-gaps.md). Goldston–Pintz–Yıldırım 의 가중은 이 정리의 절단 약수합과 같은 꼴이고, 유계 간격의 증명에 쓰인다.

[^1]: B. Green, T. Tao, "The primes contain arbitrarily long arithmetic progressions", Annals of Mathematics 167 (2008), 481–547.
[^2]: D. A. Goldston, C. Y. Yıldırım, "Higher correlations of divisor sums related to primes I: triple correlations", Integers 3 (2003), A5.
[^3]: B. Green, T. Tao, "Linear equations in primes", Annals of Mathematics 171 (2010), 1753–1850.
[^4]: B. Green, T. Tao, T. Ziegler, "An inverse theorem for the Gowers U^{s+1}[N]-norm", Annals of Mathematics 176 (2012), 1231–1372.
[^5]: T. Tao, T. Ziegler, "The primes contain arbitrarily long polynomial progressions", Acta Mathematica 201 (2008), 213–305.
[^6]: T. F. Bloom, O. Sisask, "Breaking the logarithmic barrier in Roth's theorem on arithmetic progressions", arXiv:2007.03528 (2020).

# 연관 문서

## 선수지식

- [Gowers 균등 노름](gowers-norms.md)
- [체 방법](sieve-methods.md)
- [소수 정리](prime-number-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics #theorem
