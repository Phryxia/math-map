# Euler–Mascheroni 상수

# 개요

**Euler–Mascheroni 상수(Euler–Mascheroni constant)** $\gamma=0.5772\ldots$ 는 $1+\frac12+\cdots+\frac1n$ 과 $\log n$ 의 차이가 $n$ 이 커질 때 다가가는 수다. 쿠폰 $1000$ 종류를 무작위로 하나씩 받아 전부 모으려면 평균 $1000\left(1+\frac12+\cdots+\frac1{1000}\right)$ 번 받아야 하고, 이 값을 구하려면 분수 천 개를 더해야 한다. 이 합은 $\log 1000+\gamma$ 와 $\frac1{2000}$ 정도밖에 차이 나지 않으므로, 합 대신 로그 하나와 상수 하나로 계산한다.

# 직관

$H_n=1+\frac12+\cdots+\frac1n$ 을 넓이로 그린다. $x$ 축의 구간 $\lbrack k,k+1\rbrack$ 위에 높이 $\frac1k$ 인 직사각형을 세우면 직사각형 $n$ 개의 넓이 합이 $H_n$ 이다. 곡선 $y=1/x$ 는 $k\le x\le k+1$ 에서 $\frac1k$ 이하이므로 직사각형들은 곡선 아래 넓이 $\int_1^{n+1}dx/x=\log(n+1)$ 을 전부 덮는다.

직사각형에서 곡선 아래를 빼면 직사각형마다 오른쪽 위에 곡선으로 깎인 작은 조각이 남는다. 첫 조각의 넓이는 $1-\log 2=0.307\ldots$ 이다. $k$ 번째 조각은 가로 $1$, 세로 $\frac1k-\frac1{k+1}$ 인 직사각형 안에 들어 있다. 이 세로 길이들을 전부 더하면 $1-\frac12+\frac12-\frac13+\cdots$ 가 되어 $1$ 을 넘지 않는다.

그래서 조각들의 넓이 합 $H_n-\log(n+1)$ 은 $n$ 이 커질수록 늘어나지만 $1$ 을 넘지 못하고, 한 값으로 수렴한다. 이 값이 $\gamma$ 다. $\log(n+1)-\log n\to0$ 이므로 $H_n-\log n$ 도 같은 값으로 간다.

# 정의

$$
\gamma=\lim_{n\to\infty}\left(\sum_{k=1}^{n}\frac1k-\log n\right)
$$

직관 절의 조각 넓이를 모두 더한 꼴로 쓰면 다음과 같다.

$$
\gamma=\sum_{k=1}^{\infty}\left(\frac1k-\log\left(1+\frac1k\right)\right)
$$

[Abel 합산 공식](abel-summation.md)을 $a_n=1$, $f(t)=1/t$ 에 적용하면 $t$ 의 소수 부분 $\lbrace t\rbrace$ 로 쓴 적분 표현이 나온다.

$$
\gamma=1-\int_1^{\infty}\frac{\lbrace t\rbrace}{t^2}\thinspace dt
$$

# 성질

## 존재와 범위

**정리.** $D_n=H_n-\log n$ 은 감소하는 양수열이고, 따라서 수렴하며 $0\lt \gamma\lt 1$ 이다.

증명의 요지. $D_n-D_{n+1}=\log(1+1/n)-1/(n+1)$ 이고, $\log(1+1/n)=\int_n^{n+1}dx/x\gt 1/(n+1)$ 이므로 감소한다. 직관 절의 조각 넓이 합으로 $D_n\gt H_n-\log(n+1)\ge 1-\log 2\gt 0$ 이므로 아래로 유계여서 수렴하고, 극한은 $1-\log 2$ 이상이다. $D_1=1$ 에서 시작해 순감소하므로 극한은 $1$ 보다 작다.

## 오차

$$
H_n=\log n+\gamma+\frac1{2n}-\frac1{12n^2}+O\left(\frac1{n^4}\right)
$$

[Euler–Maclaurin 공식](euler-maclaurin.md)을 $f(x)=1/x$ 에 적용하면 이 전개가 모든 차수로 나오고, 계수는 [Bernoulli 수](bernoulli-numbers.md)다. $n=10$ 에서 Bernoulli 수 항을 여섯 개 쓰면 오차가 $10^{-15}$ 이고, $\gamma$ 의 수치는 이 전개로 계산한다.

## 감마 함수의 도함수

$$
\Gamma'(1)=-\gamma
$$

[감마 함수](gamma-function.md)의 Weierstrass 곱 $1/\Gamma(s)=s\thinspace e^{\gamma s}\prod_{n\ge1}(1+s/n)e^{-s/n}$ 에 로그를 취해 미분하고 $s=1$ 을 넣으면 $-\Gamma'(1)=1+\gamma+\sum_{n\ge 1}\left(\frac1{n+1}-\frac1n\right)=\gamma$ 다. 곱의 수렴인자 $e^{-s/n}$ 이 $\sum 1/n$ 을 상쇄하고, 남는 $\log n$ 과의 차이를 $e^{\gamma s}$ 가 맞춘다.

## zeta 함수의 상수항

$$
\zeta(s)=\frac1{s-1}+\gamma+O(s-1)\qquad(s\to1)
$$

$\frac1{s-1}=\int_1^{\infty}x^{-s}\thinspace dx$ 이므로 $\zeta(s)-\frac1{s-1}=\sum_{n\ge1}\left(n^{-s}-\int_n^{n+1}x^{-s}\thinspace dx\right)$ 이다. 이 급수는 $s=1$ 근처에서 고르게 수렴하고, $s=1$ 에서의 값이 정의 절의 둘째 식이다. [Riemann zeta 함수](riemann-zeta.md)가 $s=1$ 에서 갖는 극의 Laurent 전개 상수항이 $\gamma$ 다.

## 알려진 열린 문제

$\gamma$ 가 무리수인지 알려져 있지 않다.[^1] $\gamma$ 가 초월수인지도 알려져 있지 않다.[^1]

# 활용

- [쿠폰 수집가 문제](coupon-collector.md)에서 $n$ 종류를 모두 모으는 시간의 기댓값은 $nH_n=n\log n+\gamma n+\frac12+O(1/n)$ 이다.
- [Mertens 정리](mertens-theorem.md)의 셋째 정리는 $\prod_{p\le x}(1-1/p)^{-1}=e^{\gamma}\log x+O(1)$ 이고, 소수에 대한 곱의 상수가 $e^\gamma$ 로 정해진다.
- 감마 함수의 Weierstrass 곱에서 $e^{\gamma s}$ 가 수렴인자를 보정하고, 디감마 함수(digamma function) $\psi=\Gamma'/\Gamma$ 의 값 $\psi(1)=-\gamma$ 가 이것과 같은 식이다.
- 약수 개수 함수 $d(n)$ 의 합에 대한 Dirichlet 약수 문제(Dirichlet divisor problem)에서 $\sum_{n\le x}d(n)=x\log x+(2\gamma-1)x+O(\sqrt x)$ 의 둘째 항 계수에 $\gamma$ 가 나타난다.

[^1]: J. C. Lagarias, "Euler's constant: Euler's work and modern developments", *Bulletin of the American Mathematical Society* 50 (2013), 527–628. $\gamma$ 의 정의, 수치 계산, 무리수성 문제를 다룬다.

# 연관 문서

## 선수지식

- [Abel 합산 공식](abel-summation.md)
- [지수함수](exponential-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #number_theory
