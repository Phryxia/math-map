# 멱급수

# 개요

**멱급수(power series)** 는 다항식의 차수를 무한히 올린 형식적 합이다.

$$
\sum_{n=0}^{\infty} a_n (x - c)^n .
$$

$e^x$ 의 값을 덧셈과 곱셈만으로 계산하려면 다항식이 있어야 하는데, 어떤 다항식도 모든 $x$ 에서 $e^x$ 와 같지 않다. 멱급수는 $1+x+x^2/2!+x^3/3!+\cdots$ 처럼 항을 끝없이 더해 이런 함수를 다항식처럼 항별로 계산할 수 있는 꼴로 적는다.

# 직관

$e^{0.5}$ 를 덧셈과 곱셈만으로 계산하려고 한다. $e^x$ 는 [미분](derivative.md)해도 자기 자신이고 $e^0=1$ 이므로, $x=0$ 에서 함숫값과 모든 계 도함수가 $1$ 이다. 같은 성질을 차수를 올려 가며 맞추는 다항식은 $1$, $1+x$, $1+x+x^2/2$, $1+x+x^2/2+x^3/6$, $\dots$ 이다. $n$ 차 다항식은 $x=0$ 에서 $n$ 계 도함수까지 $e^x$ 와 같다.

$x=0.5$ 를 넣으면 차례로 $1.5$, $1.625$, $1.6458$, $1.6484$ 이고, $e^{0.5}=1.6487$ 이다. 항을 끝없이 더한 $\sum_{n\ge 0}x^n/n!$ 이 $e^x$ 를 다항식처럼 항별로 계산하는 꼴이다.

같은 방법으로 $1/(1+x^2)$ 을 적으면 $1-x^2+x^4-x^6+\cdots$ 이다. $x=0.5$ 에서는 항이 $1/4$ 배씩 줄어 합이 $1/1.25=0.8$ 이 나온다. $x=2$ 에서는 항이 $4$ 배씩 커져 합이 없는데, 함수는 $x=2$ 에서 값이 $0.2$ 이고 매끄럽다. 항을 끝없이 더한 식은 중심에서 일정한 거리 안에서만 값을 준다.

# 정의

## 멱급수와 수렴반경

중심 $c$, 계수열 $a_n$ 에 대한 멱급수는 개요의 형식적 합이다. **수렴반경(radius of convergence)** $R$ 은 Cauchy–Hadamard 공식(Cauchy–Hadamard formula)으로 주어진다.

$$
\frac{1}{R} = \limsup_{n \to \infty} \vert a_n\vert^{1/n}, \qquad R \in [0, \infty] .
$$

역수는 관례적으로 $1/0$ 을 무한대, $1/\infty$ 를 0 으로 읽는다. 계수의 비가 극한을 가지면 더 쉬운 판정도 쓸 수 있다.

$$
R = \lim_{n \to \infty} \left\vert \frac{a_n}{a_{n+1}} \right\vert \quad (\text{극한이 존재할 때}) .
$$

$\vert x-c\vert\lt R$ 이면 급수는 절대수렴하고, $\vert x-c\vert\gt R$ 이면 발산한다. 경계 $\vert x-c\vert=R$ 에서의 거동은 점마다 다르다. $\sum x^n/n^2$ 은 $R=1$ 이고 경계 전체에서 수렴, $\sum x^n$ 은 경계 전체에서 발산, $\sum x^n/n$ 은 $x=-1$ 에서 수렴하고 $x=1$ 에서 발산한다. 직관 절의 $\sum x^n/n!$ 은 $\vert a_n/a_{n+1}\vert=n+1\to\infty$ 이므로 $R=\infty$ 이고, $1-x^2+x^4-\cdots$ 은 $\vert a_n\vert^{1/n}$ 의 상극한이 $1$ 이므로 $R=1$ 이다.

## Taylor 급수

$f$ 가 $c$ 근방에서 무한번 미분가능할 때 $f$ 의 $c$ 중심 Taylor 급수는

$$
T f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!} (x - c)^n .
$$

$c=0$ 인 경우를 Maclaurin 급수(Maclaurin series)라 부른다. $e^x$ 의 Maclaurin 급수는 $f^{(n)}(0)=1$ 이므로 직관 절의 $\sum x^n/n!$ 이다.

## 해석함수

열린집합 $U$ 위의 함수 $f$ 가 **해석적(analytic)** 이라는 것은, $U$ 의 모든 점 $c$ 에서 어떤 양의 반경의 근방 안에서 $f$ 가 $c$ 중심 멱급수의 합과 일치한다는 뜻이다. 실해석적 함수 전체를 $C^\omega$ 로 쓴다. $1/(1+x^2)$ 은 $\mathbb R$ 위에서 해석적이다. 중심 $0$ 의 급수는 반경이 $1$ 이지만, 중심 $c$ 의 급수는 반경 $\sqrt{1+c^2}$ 로 $c$ 근방에서 함수와 일치한다.

## Taylor 정리와 나머지항

$f$ 가 $c$ 근방에서 $n+1$ 번 미분가능할 때

$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(c)}{k!} (x - c)^k + R_n(x) .
$$

$R_n$ 을 **나머지항(remainder)** 이라 하고, 두 가지 표준형이 있다.

Lagrange 형(Lagrange form). $c$ 와 $x$ 사이의 어떤 $\xi$ 가 존재하여

$$
R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} (x - c)^{n+1} .
$$

적분형(integral form). $f^{(n+1)}$ 이 연속이면

$$
R_n(x) = \frac{1}{n!} \int_c^x (x - t)^n f^{(n+1)}(t) \thinspace dt .
$$

$e^x$, $c=0$, $x=0.5$, $n=4$ 에서 Lagrange 형은 $0\lt\xi\lt 0.5$ 인 $\xi$ 로 $R_4=e^\xi\thinspace 0.5^5/120$ 이고, $e^\xi\lt 1.65$ 이므로 $R_4\lt 0.00043$ 이다. 직관 절의 실제 차이 $1.6487-1.6484$ 가 이 범위에 든다.

# 성질

## 수렴원 내부의 균등수렴

수렴반경이 $R$ 인 멱급수는 임의의 $r\lt R$ 에 대해 $\vert x-c\vert\le r$ 위에서 [균등수렴](uniform-convergence.md)한다.

증명의 요지. $r\lt\rho\lt R$ 인 $\rho$ 를 잡으면 $\vert a_n\vert\rho^n$ 이 유계이므로 $\vert a_n\vert r^n\le M(r/\rho)^n$ 이고, 우변은 등비급수라 수렴한다. Weierstrass M 판정법(Weierstrass M-test)으로 균등수렴한다.

수렴원 전체에서는 균등수렴하지 않는다. $\sum x^n$ 이 $(-1,1)$ 에서 균등수렴하지 않는 것이 그 예다. 콤팩트 부분집합마다 균등수렴하는 이 성질을 국소균등수렴(locally uniform convergence)이라 한다. 균등수렴이 [연속성](continuity.md)을 보존하므로 멱급수의 합은 수렴원 내부에서 연속이다.

## 항별 미분과 적분

수렴반경 $R$ 인 멱급수의 합을 $f$ 라 하면, $f$ 는 $\vert x-c\vert\lt R$ 에서 무한번 미분가능하고

$$
f'(x) = \sum_{n=1}^{\infty} n \thinspace a_n (x - c)^{n-1}, \qquad \int_c^x f(t) \thinspace dt = \sum_{n=0}^{\infty} \frac{a_n}{n+1} (x - c)^{n+1} ,
$$

이며 두 급수의 수렴반경도 모두 $R$ 이다.

증명의 요지. $n^{1/n}$ 이 1 로 가므로 Cauchy–Hadamard 값이 바뀌지 않아 반경이 보존된다. 도함수열이 국소균등수렴하므로 [균등수렴](uniform-convergence.md) 문서의 항별 미분 정리로 항별 미분이 정당화된다. 적분은 균등수렴에서 곧바로 따른다.

따라서 한 함수를 나타내는 멱급수는 하나뿐이고, 멱급수의 합은 해석함수다. 항별 미분을 $n$ 번 하고 $x=c$ 를 대입하면 $a_n=f^{(n)}(c)/n!$ 이 나온다.

## Abel 정리

Abel 정리(Abel's theorem)는 다음이다. $\sum a_n R^n$ 이 수렴하면

$$
\lim_{x \to R^-} \sum_{n=0}^{\infty} a_n x^n = \sum_{n=0}^{\infty} a_n R^n .
$$

역방향은 일반적으로 성립하지 않고, 추가 조건 아래의 역은 [Tauber 정리](tauberian-theorems.md)다. $\log 2$ 의 교대급수 표현과 Leibniz 의 $\pi/4$ 급수가 이 정리로 정당화된다.

## 적분형 나머지항

적분형은 [미적분학의 기본 정리](fundamental-calculus.md)에 부분적분을 반복 적용해 얻고, 여기에 적분의 평균값 정리를 쓰면 Lagrange 형이 나온다. $f$ 가 $c$ 근방에서 해석적인 것은 그 근방에서 $R_n(x)\to 0$ 인 것과 동치다.

## 매끄럽지만 해석적이 아닌 함수

함수의 포함관계는 다음과 같다.

$$
C^\omega(U) \subsetneq C^\infty(U) \subsetneq \cdots \subsetneq C^1(U) \subsetneq C^0(U)
$$

[복소수](complex-numbers.md)에서는 한 번 복소미분 가능한 [정칙함수](holomorphic-functions.md)가 해석적이므로 이런 사슬이 생기지 않는다. 실수에서는 Taylor 급수가 수렴해도 원래 함수와 같지 않을 수 있다. 표준 예는

$$
f(x) = \begin{cases} e^{-1/x^2} & x \ne 0 \cr 0 & x = 0 \end{cases}
$$

이다. $x$ 가 0 이 아닌 곳에서 도함수는 $p(1/x)e^{-1/x^2}$ 꼴($p$ 는 다항식)이고, 지수적 감쇠가 임의의 다항식 증가를 이기므로 $x$ 가 0 으로 갈 때 모든 도함수가 0 으로 간다. 따라서 모든 계 도함수가 원점에서 0 이며 Maclaurin 급수는 항등적으로 0 이다. 이 급수는 실직선 전체에서 수렴하지만 $f$ 와 같은 값을 갖는 점은 원점뿐이다.

이 함수는 지지집합이 콤팩트인 매끄러운 함수(bump function)와 [단위분할](partitions-of-unity.md)(partition of unity)의 재료이고, [다양체](manifolds.md) 위에서 국소적으로 정의된 대상을 전역적으로 붙이는 데 쓰인다. 해석함수로는 같은 구성을 할 수 없다. 해석함수는 한 점 근방에서 0 이면 연결된 정의역 전체에서 0 이다(항등정리, identity theorem).

## 대표 급수

| 함수 | Maclaurin 급수 | 수렴반경 |
| --- | --- | --- |
| $\exp(x)$ | 모든 $n$ 에 대해 $x^n/n!$ 의 합 | 무한대 |
| $\sin(x)$ | 홀수차 교대항 $x^{2k+1}/(2k+1)!$ | 무한대 |
| $1/(1-x)$ | $x^n$ 의 합 | 1 |
| $\log(1+x)$ | $(-1)^{n+1}x^n/n$ | 1 |
| $(1+x)^a$ (이항급수) | 일반화 이항계수 곱하기 $x^n$ | 1 ($a$ 가 음이 아닌 정수면 무한대) |
| $1/(1+x^2)$ | $(-1)^kx^{2k}$ | 1 (복소 특이점 때문) |

지수·삼각 급수는 계수의 분모에 팩토리얼이 있어 $\vert a_n\vert^{1/n}$ 이 0 으로 가고 반경이 무한대다. 이 급수들의 곱셈인 Cauchy 곱(Cauchy product)은 [생성함수](generating-functions.md)의 조합적 계산과 형식이 같다.

# 활용

## 수치 계산

초월함수의 함숫값은 부분합으로 계산하고 오차는 Lagrange 나머지항으로 상계한다. $\exp$ 의 도함수가 $\exp$ 이므로 $[0,1]$ 에서 $n$ 차 부분합의 오차는 $e/(n+1)!$ 이하이며, 요구 정밀도에서 필요한 항수가 이 상계로 정해진다. 계수의 감소가 느린 급수는 중심을 옮기거나 함수방정식으로 인수를 줄여 쓴다.

## 복소해석, 미분방정식, 조합론

- 정칙함수. 복소미분 가능한 함수는 Cauchy 적분 공식(Cauchy integral formula)으로 멱급수 전개를 얻어 해석적이다. 수렴반경이 중심에서 가장 가까운 특이점까지의 거리라는 것도 이 공식에서 나오며, 직관 절의 $1/(1+x^2)$ 은 복소평면의 특이점 $\pm i$ 가 중심 $0$ 에서 거리 $1$ 이므로 반경이 $1$ 이다.
- [상미분방정식](ordinary-differential-equations.md). 계수가 해석적인 선형 방정식은 멱급수 해를 가진다(Frobenius 방법, Frobenius method). Airy·Bessel·Legendre 함수가 이 방식으로 정의된다.
- 생성함수. 조합 수열을 계수로 갖는 멱급수를 대수적으로 조작해 점화식을 푼다. 형식적 멱급수로 다루면 수렴은 아예 문제 삼지 않아도 된다.
- [점근급수](asymptotic-series.md). 수렴반경이 $0$ 인 전개를 유한 항에서 끊어 쓴다. 수렴 대신 나머지항의 크기 조건이 정의에 들어가고, [감마 함수](gamma-function.md)의 Stirling 급수(Stirling series)가 그 예다.[^1]

## 최적화와 계산

[경사하강법](gradient-descent.md)과 [Newton 방법](newton-method.md)은 각각 목적함수의 1차·2차 Taylor 전개를 최소화하는 절차다. 수렴 속도 분석에서 나머지항 크기가 그대로 오차 재귀식에 들어간다. 자동미분(automatic differentiation)의 전방 모드는 Taylor 계수를 유한 차수까지 정확히 전파하는 구현으로 볼 수 있다.[^2] [볼록성](convexity.md) 논의에서 2차 항의 부호가 국소 최소를 판정하는 것도 Taylor 정리의 직접 응용이다.

[^1]: Carl M. Bender, Steven A. Orszag, *Advanced Mathematical Methods for Scientists and Engineers*, Springer, 3장 (Asymptotic series), https://link.springer.com/book/10.1007/978-1-4757-3069-2
[^2]: Andreas Griewank, Andrea Walther, *Evaluating Derivatives*, 2nd ed., SIAM, 13장 (Taylor arithmetic), https://epubs.siam.org/doi/book/10.1137/1.9780898717761

# 연관 문서

## 선수지식

- [급수의 수렴판정](series-convergence.md)
- [미분](derivative.md)
- [균등수렴](uniform-convergence.md)

## 더 알아보기

### 복소평면으로의 확장

- [유수 정리](residue-theorem.md)
- [해석적 연속](analytic-continuation.md)
- [z 변환](z-transform.md)

### 급수로 정의되는 함수

- [지수함수](exponential-function.md)
- [삼각함수](trigonometric-functions.md)
- [Bessel 함수](bessel-functions.md)
- [Bernoulli 수](bernoulli-numbers.md)
- [점근급수](asymptotic-series.md)

### 수렴원의 경계에서의 거동

- [Tauber 정리](tauberian-theorems.md)

#analysis #complex_analysis #combinatorics #optimization
