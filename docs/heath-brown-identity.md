# Heath-Brown 항등식

# 개요

**Heath-Brown 항등식(Heath-Brown's identity)** 은 von Mangoldt 함수 $\Lambda$ 를 Möbius 함수와 $1$, $\log$ 의 합성곱 $2K$ 겹 이하의 교대합으로 쓰는 항등식이다. Möbius 함수가 붙는 변수는 모두 $x^{1/K}$ 이하로 짧다. [Vaughan 항등식](vaughan-identity.md)과 같이 소수에 걸친 합을 Type I 합과 Type II 합으로 가르는 데 쓰고, 정수 $K$ 를 고르면 각 조각의 변수 길이를 원하는 범위로 묶을 수 있다.

# 직관

Vaughan 항등식의 셋째 항은 $\sum\_{k\gt V}\Lambda(k)\sum\_{mr=l,\thinspace m\le U}\mu(m)$ 꼴이다. 바깥 변수 $k$ 와 안쪽 변수 $l$ 의 길이는 $U,V$ 로만 조절되고, 두 길이가 쓰려는 추정의 범위에 들지 않으면 그 조각을 다룰 방법이 없다. 변수가 더 잘게 나뉘어 있으면 변수 몇 개를 묶어 원하는 길이를 만들 수 있다.

잘게 나누는 근거는 Möbius 함수의 짧은 합이다. $M(s)=\sum\_{m\le z}\mu(m)m^{-s}$ 로 두면 $\zeta M$ 의 $n$ 번째 계수는 $\sum\_{d\mid n,\thinspace d\le z}\mu(d)$ 이고, $n\le z$ 이면 약수가 전부 $z$ 이하라 이 값은 $n=1$ 에서 $1$, $1\lt n\le z$ 에서 $0$ 이다. 따라서 $1-\zeta M$ 의 계수는 $n\le z$ 에서 전부 $0$ 이고, 그 $K$ 제곱의 계수는 $n\le z^K$ 에서 전부 $0$ 이다. $(1-\zeta M)^K$ 를 이항전개하고 $-\zeta'/\zeta$ 를 곱하면 $n\le z^K$ 에서 $\Lambda(n)$ 이 $\zeta$, $\zeta'$, $M$ 의 곱들의 계수로 쓰인다.

# 정의

$z\ge 1$ 과 정수 $K\ge 1$ 을 고정한다. $1\le n\le z^K$ 이면

$$
\Lambda(n)=\sum_{j=1}^K(-1)^{j-1}\binom Kj\sum_{\substack{m_1\cdots m_jn_1\cdots n_j=n\cr m_1,\dots,m_j\le z}}\mu(m_1)\cdots\mu(m_j)\log n_1
$$

이다[^1]. [Dirichlet 급수](dirichlet-series.md)로는

$$
-\frac{\zeta'}{\zeta}(1-\zeta M)^K=-\frac{\zeta'}{\zeta}+\sum_{j=1}^K(-1)^{j-1}\binom Kj\thinspace\zeta'\zeta^{j-1}M^j
$$

의 좌변 계수가 $n\le z^K$ 에서 $0$ 이라는 것이다. 우변의 $\zeta'$ 이 $\log n_1$ 을, $\zeta^{j-1}$ 이 계수 $1$ 인 변수 $n_2,\dots,n_j$ 를, $M^j$ 가 변수 $m_1,\dots,m_j$ 를 준다. $x$ 까지의 합에 쓸 때는 $z=x^{1/K}$ 로 둔다.

$\mu(m_i)$ 가 붙는 변수를 **거친 변수(rough variable)**, 계수가 $1$ 이나 $\log n_1$ 인 변수를 **매끄러운 변수(smooth variable)** 라 부른다. 매끄러운 변수에 걸친 합은 부분합 공식(partial summation)으로 $\sum 1$ 의 합으로 바뀌므로 Type I 합으로 다룬다.

# 성질

## 쌍선형합으로의 분해

$\sum\_{n\le x}\Lambda(n)f(n)$ 에 항등식을 넣고 변수마다 길이를 $2$ 배 구간 $(N\_i,2N\_i\rbrack$ 로 나누면 조각의 개수가 $(\log x)^{2K}$ 규모다. 각 조각은 변수 $2j$ 개의 곱에 걸친 합이고, 변수 길이의 곱은 $x$ 의 상수배 안에 있다. 각 조각을 Type I 합 또는 Type II 합으로 묶을 수 있으면 원래 합의 상한이 그 두 추정과 로그 인자로 정해진다.

## K = 3 에서의 분류

$z=x^{1/3}$ 이면 각 조각은 다음 둘 가운데 하나다.

- 매끄러운 변수 하나의 길이가 $x^{2/3}$ 보다 크다. 나머지 변수의 곱이 $x^{1/3}$ 보다 작으므로 Type I 합이다.
- 변수 몇 개의 곱이 $(x^{1/3},x^{2/3}\rbrack$ 에 들어간다. 그 곱과 나머지의 곱을 두 변수로 보면 Type II 합이다.

증명. 길이가 $x^{1/3}$ 보다 큰 변수가 있으면 그것은 매끄러운 변수이고, $x^{2/3}$ 보다 크면 첫째 경우, 아니면 그 변수 하나가 둘째 경우다. 모든 변수가 $x^{1/3}$ 이하이면 변수를 하나씩 곱해 가다 처음으로 $x^{1/3}$ 을 넘는 곱을 본다. 마지막으로 곱한 변수가 $x^{1/3}$ 이하이므로 그 곱은 $x^{2/3}$ 이하이고 둘째 경우가 된다. ∎

$K$ 를 키우면 거친 변수가 $x^{1/K}$ 이하로 짧아져 같은 논법이 더 좁은 Type II 범위를 준다. 대가로 조각의 개수와 로그 인자가 늘어난다.

## Vaughan 항등식과의 비교

$K=1$ 이면 항등식은 $n\le z$ 에서 $\Lambda(n)=\sum\_{mn\_1=n}\mu(m)\log n\_1$ 이고, 이는 $\log=1\ast\Lambda$ 에 [Möbius 반전 공식](mobius-inversion.md)을 쓴 것이다. Vaughan 항등식은 항이 셋이지만 셋째 항에 $\Lambda$ 가 남아 그 변수를 더 나눌 수 없다. Heath-Brown 항등식은 $\Lambda$ 를 남기지 않고 모든 변수를 $\mu$, $1$, $\log$ 로 쓰므로 변수를 자유롭게 묶을 수 있다.

# 활용

- 짧은 구간의 소수. Huxley 는 $y\ge x^{7/12+\varepsilon}$ 에서 $\pi(x+y)-\pi(x)\sim y/\log x$ 를 증명했다. Heath-Brown 은 이 항등식으로 범위를 $y\ge x^{7/12-\varepsilon(x)}$, $\varepsilon(x)\to 0$ 까지 넓혔다[^1].
- [소수 간격](prime-gaps.md)의 유계성. Zhang(2014)의 유계 간격 증명은 등차수열 속 소수의 분포를 Bombieri–Vinogradov 정리의 범위 너머로 넓히는 단계에서 이 항등식을 $K=10$ 으로 써서 $\Lambda$ 를 Type I, Type II 합과 길이가 비슷한 매끄러운 변수 셋을 갖는 Type III 합으로 나눴다[^2].
- [원법](circle-method.md)의 소호 추정. Vaughan 항등식 대신 이 항등식을 쓰면 Weyl 합 상한에서 변수 길이를 문제에 맞게 고를 수 있다.

[^1]: D. R. Heath-Brown, Prime numbers in short intervals and a generalized Vaughan identity, *Canadian Journal of Mathematics* 34 (1982), 1365–1377.
[^2]: Y. Zhang, Bounded gaps between primes, *Annals of Mathematics* 179 (2014), 1121–1174.

# 연관 문서

## 선수지식

- [Vaughan 항등식](vaughan-identity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis
