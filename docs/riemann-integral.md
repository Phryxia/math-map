# Riemann 적분

# 개요

Riemann 적분은 구간을 잘게 쪼개고 각 조각 위에 직사각형을 세워 넓이를 더한 뒤, 조각을 한없이 가늘게 만들 때의 극한이다.

어떻게 쪼개고 조각 안 어느 점에서 높이를 잡든 같은 값으로 가야 적분값이 정해진다. 이 요구가 깨지는 함수는 [Lebesgue 적분](lebesgue-integral.md)으로 적분한다. [연속함수](continuity.md)는 닫힌 구간에서 [균등연속](uniform-continuity.md)이므로 적분 가능하다.

# 직관

## 직사각형으로 덮기

$f(x)=x$ 를 $[0,1]$ 에서 적분하려고 한다. 구간을 $n$ 등분해 각 조각 $[\frac{k-1}{n},\frac kn]$ 위에 높이 $f(\frac kn)=\frac kn$ 인 직사각형을 세우면 넓이의 합은 $\frac1{n^2}(1+2+\cdots+n)=\frac{n+1}{2n}$ 이다. $n$ 을 키우면 $\frac12$ 로 간다. 높이를 조각의 왼쪽 끝 $\frac{k-1}{n}$ 에서 잡으면 합은 $\frac{n-1}{2n}$ 이고 역시 $\frac12$ 로 간다.

## 높이의 선택

직사각형의 높이를 조각 안 어느 점의 값으로 잡아도 극한이 같아야 적분값이 하나로 정해진다. 조각을 아무리 좁혀도 그 안에서 함수가 크게 요동치면 높이를 어디서 잡느냐에 따라 합이 달라진다. 조각마다 가장 큰 값으로 잡은 합(상합)과 가장 작은 값으로 잡은 합(하합)의 차이가 $0$ 으로 가는지가 적분 가능성의 기준이다.

# 정의역의 분할

Riemann 적분은 정의역을 자른다. $x$ 축을 조각내고 각 조각 위에서 함수값이 거의 일정하기를 요구한다.

진동의 폭이 좁은 구간에 갇혀 있으면 문제가 없고, 모든 구간에서 위아래로 요동치면 실패한다. Dirichlet 함수가 그런 예다. 치역을 잘라 함수값이 일정 범위인 점들의 집합의 크기를 재면 진동이 문제가 되지 않고, 그러려면 임의의 집합의 크기를 재는 [측도](measure.md)가 필요하다.

## 상합과 하합

각 조각에서 가능한 가장 큰 값과 가장 작은 값으로 상합과 하합을 만들면, 분할을 세밀하게 할수록 상합은 줄고 하합은 는다. 둘이 만나면 적분 가능하고 벌어진 채 남으면 적분 불가능하다.

간극은 각 조각에서의 진동 폭에 조각 길이를 곱한 합이다. 적분 가능성은 진동이 큰 곳이 얼마나 좁은지에 달려 있고, 이 관찰의 정확한 형태가 Lebesgue 판정법이다.

# 정의

## Riemann 합

실수 $a \lt b$ 에 대해 $f$ 를 $[a,b]$ 위의 유계 실함수라 하자. 분할 $P$ 와 표본점 $\xi$ 를 다음처럼 정한다.

$$
a=x_0\lt x_1\lt\cdots\lt x_n=b,\qquad
\xi_i\in[x_{i-1},x_i]
$$

Riemann 합과 분할의 최대 폭은

$$
S(f,P,\xi)=\sum_{i=1}^n f(\xi_i)(x_i-x_{i-1}),\qquad
\Vert P\Vert=\max_i(x_i-x_{i-1})
$$

이다. 임의의 $\varepsilon \gt 0$ 에 대해 $\delta \gt 0$ 이 있어 $\Vert P\Vert \lt\delta$ 인 모든 분할과 모든 표본점 선택에서 $|S(f,P,\xi) - I| \lt\varepsilon$ 이면 $f$ 는 Riemann 적분 가능하고

$$
I=\int_a^b f(x)\thinspace dx
$$

로 쓴다. 등분할로 한정하지 않고 모든 분할과 모든 표본점에 대해 요구한다.

## 상합, 하합, Darboux 적분

$$
M_i=\sup_{[x_{i-1},x_i]}f,\qquad m_i=\inf_{[x_{i-1},x_i]}f
$$

$$
U(f,P)=\sum M_i\thinspace\Delta x_i,\qquad L(f,P)=\sum m_i\thinspace\Delta x_i
$$

상적분을 $\inf_PU(f,P)$ , 하적분을 $\sup_PL(f,P)$ 라 하고 둘이 같으면 Darboux 적분 가능이다. 유계함수에서 Darboux 적분 가능과 Riemann 적분 가능은 동치이고 값도 같다. 증명에는 대개 Darboux 쪽을 쓴다.

## Riemann 판정법

$f$ 가 적분 가능한 것과 다음이 동치다.

$$
\forall\varepsilon\gt 0\ \exists P:\quad U(f,P)-L(f,P)\lt\varepsilon
$$

상합과 하합의 간극을 원하는 만큼 줄이는 분할 하나를 찾으면 된다.

# 성질

## 적분 가능한 함수들

- $[a,b]$ 에서 연속인 함수는 적분 가능하다. 닫힌 유계 구간에서 연속이면 균등연속이므로, $\Vert P\Vert$ 를 작게 잡으면 모든 조각에서 진동을 $\varepsilon/(b-a)$ 이하로 만들 수 있고 간극이 $\varepsilon$ 미만이 된다.
- 단조함수는 적분 가능하다. 등분할을 쓰면 간극이 $(f(b)-f(a)) \cdot \Vert P\Vert$ 로 억눌린다. 불연속점이 가산 개 있어도 상관없다.
- 유계이고 불연속점이 유한 개면 적분 가능하다. 각 불연속점을 아주 좁은 구간으로 덮으면 된다.

적분은 선형이고 단조이며 구간에 대해 가법적이다. $f$ 가 적분 가능하면 $|f|$ 도 적분 가능하고 삼각부등식이 성립한다.

## Dirichlet 함수

$[0,1]$ 에서 유리수에 $1$ , 무리수에 $0$ 을 주는 함수가 Dirichlet 함수다. 모든 조각이 유리수와 무리수를 둘 다 포함하므로 항상 $M_i=1$ , $m_i=0$ 이고

$$
U(f,P)=1,\qquad L(f,P)=0
$$

이다. 분할을 아무리 세밀하게 해도 간극이 $1$ 로 남는다. 표본점을 유리수로만 고르면 합이 $1$ , 무리수로만 고르면 $0$ 이므로 극한이 없다. 이 함수는 Lebesgue 적분에서 값 $0$ 으로 적분된다.

## Lebesgue 판정법

유계함수 $f$ 가 $[a,b]$ 에서 Riemann 적분 가능한 것은 $f$ 의 불연속점 집합이 측도 $0$ 인 것과 동치다.

연속함수는 불연속점이 없고, 단조함수는 불연속점이 가산 개이며, Dirichlet 함수는 모든 점에서 불연속이라 적분 불가능하다. 어느 함수가 Riemann 적분 가능한지를 말하는 데 측도가 필요하다.

## 극한과의 교환

$f_n \to f$ 여도 $\int f_n \to \int f$ 는 일반적으로 성립하지 않는다. [균등수렴](uniform-convergence.md)을 가정하면 성립하지만 강한 조건이다. 적분 가능한 함수들의 점별 극한이 적분 가능하지 않을 수도 있다. $[0,1]$ 의 유리수를 $q_1, q_2, \ldots$ 로 나열하고 $f_n$ 을 $\lbrace q_1,\ldots,q_n\rbrace$ 의 지시함수로 두면 각 $f_n$ 은 적분 가능하고 극한은 Dirichlet 함수다.

[Lebesgue 적분](lebesgue-integral.md)은 [단조수렴](monotone-convergence.md)과 [지배수렴](dominated-convergence.md) 정리로 훨씬 약한 가정에서 교환을 허용하고, 그 결과 함수공간이 완비가 된다. Riemann 적분으로 정의한 함수공간은 완비가 아니다.

## 수치 적분

조각 위에서 함수를 왼끝 값으로 근사하면 사각형 합, 중점 값으로 근사하면 중점 법칙, 일차식으로 근사하면 사다리꼴 법칙이다.

매끄러운 함수에서 중점 법칙과 사다리꼴 법칙의 오차는 $O(h^2)$ 이고, 이 차수는 Taylor 전개에서 나온다. 진동이 심하거나 미분 불가능한 함수에서는 이 차수가 무너진다.

# 활용

## 누적량

변하는 속도의 누적 변위, 밀도의 총질량, 확률밀도의 누적확률, 일과 에너지가 적분이다. 부호 있는 값을 더하므로 $f$ 가 음수인 구간은 음으로 기여한다. 넓이를 구하려면 $|f|$ 를 적분한다.

## 미분과의 관계

[미적분학의 기본 정리](fundamental-calculus.md)는 적분을 원시함수의 차로 계산한다. 정의의 극한 절차를 매번 수행하지 않아도 되고 미분과 적분이 서로의 역연산이 된다. 원시함수를 초등함수로 쓸 수 없는 경우가 많으므로 수치 적분도 필요하다.

## 급수와 변환

[Fourier 급수](fourier-series.md)의 계수는 적분으로 정의되고, 계수를 다루려면 적분과 무한합을 교환해야 한다. Riemann 적분에서는 이 교환이 어렵고 수렴 이론을 세우려면 $L^2$ 공간이 필요하다.[^1]

[^1]: OpenStax, *Calculus Volume 1*, The Definite Integral. Riemann 합, 정적분의 정의, 연속함수의 적분 가능성. https://openstax.org/books/calculus-volume-1/pages/5-2-the-definite-integral

# 연관 문서

## 선수지식

- [연속함수](continuity.md)

## 더 알아보기

- [미적분학의 기본 정리](fundamental-calculus.md)
- [Lebesgue 적분](lebesgue-integral.md)
- [Fourier 급수](fourier-series.md)

#analysis #measure_theory #functional_analysis
