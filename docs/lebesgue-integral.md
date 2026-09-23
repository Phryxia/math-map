# Lebesgue 적분

# 개요

Lebesgue 적분은 함수의 그래프 아래 넓이를 [측도](measure.md)로 재는 적분이다. 정의역을 구간으로 자르는 대신 함숫값이 같은 점들을 모아, 그 집합의 측도에 함숫값을 곱해 더한다.

함숫값이 같은 점들의 집합에 측도가 있어야 하므로 함수는 [가측](measurable-functions.md)이어야 한다. [Riemann 적분](riemann-integral.md)이 안 되는 함수도 적분되고, 극한과 적분을 바꾸는 정리가 점별 수렴만으로 성립한다.

# 직관

## Dirichlet 함수의 적분

유리수에서 $1$ , 무리수에서 $0$ 인 함수를 $[0,1]$ 에서 적분하려고 한다. Riemann 적분은 $[0,1]$ 을 작은 구간으로 자르고 구간마다 직사각형의 높이를 그 안의 함숫값으로 정하는데, 어느 구간에나 유리수와 무리수가 함께 있어 높이를 정할 수 없다.

구간을 위치로 자르는 대신 함숫값으로 가른다. 값이 $1$ 인 점의 집합은 유리수 집합이고 측도가 $0$ 이다. 값이 $0$ 인 점의 집합은 무리수 집합이고 측도가 $1$ 이다. 적분값은 $1\cdot 0+0\cdot 1=0$ 이다.

## 값이 무한히 많은 함수

함숫값이 유한 개면 값마다 그 값을 갖는 집합의 측도를 곱해 더하면 끝난다. 그런 함수를 단순함수라 한다. 값이 무한히 많은 함수 $f$ 는 $f$ 보다 작거나 같은 단순함수들로 아래에서 근사한다. 그 단순함수들의 적분값이 올라갈 수 있는 한계(상한)가 $f$ 의 적분이다.

위에서 조이지 않고 아래에서만 올린다. 그래서 값이 무한대인 함수에도 적분이 정해진다.

# 정의

## 단순함수의 적분

측도 공간 $(X, \Sigma, \mu)$ 를 고정한다. 지시함수 $\mathbf{1}\_A$ 는 $A$ 위에서 값이 $1$ 이고 바깥에서 $0$ 이다. 서로소 가측집합 $A_1, \dots, A_n$ 과 음이 아닌 유한 실수 $c_1, \dots, c_n$ 으로 만든 단순함수 $s$ 에 대해

$$
s=\sum_{i=1}^n c_i\mathbf{1}\_{A_i},\qquad
\int_X s\thinspace d\mu=\sum_{i=1}^n c_i\thinspace\mu(A_i)
$$

로 정한다. 여기서 $0 \cdot \infty = 0$ 으로 약속한다. $s$ 를 다른 서로소 집합들로 다시 써도 공통 세분을 취하면 같은 값이 나온다.

## 일반 함수의 적분

음이 아닌 가측함수 $f$ 에 대해

$$
\int_X f\thinspace d\mu=\sup\Bigl\lbrace\int_X s\thinspace d\mu\ :\ 0\le s\le f,\ s\text{ 단순}\Bigr\rbrace
$$

로 정의하며 값으로 $\infty$ 를 허용한다. 실수값 가측함수는 $f^+ = \max(f, 0)$ 과 $f^- = \max(-f, 0)$ 으로 쪼개

$$
\int_X f\thinspace d\mu=\int_X f^+\thinspace d\mu-\int_X f^-\thinspace d\mu
$$

로 정한다. 두 항이 모두 무한대면 정의되지 않는다. $\int \lvert f \rvert\thinspace d\mu \lt\infty$ 이면 $f$ 가 **적분 가능**하고, 그런 함수들의 모임이 $L^1(\mu)$ 다. 가측집합 $E$ 위의 적분은 $\int f \cdot \mathbf{1}\_E\thinspace d\mu$ 다.

## 거의 어디서나

측도 $0$ 인 집합을 제외하고 성립하는 성질을 **거의 어디서나** 성립한다고 한다. $f = g$ 가 거의 어디서나이면 두 적분이 같다. 그래서 $L^1$ 은 거의 어디서나 같은 함수를 한 원소로 본다.

# 성질

## 기본 성질

- 단조성: $0 \le f \le g$ 이면 $\int f \le \int g$ 다. $f$ 아래의 단순함수는 모두 $g$ 아래에도 있다.
- 선형성: $\int (af + bg) = a\int f + b\int g$ 다. 음이 아닌 경우는 단조수렴 정리를 거쳐 증명한다.
- 삼각부등식: $\lvert \int f \rvert \le \int \lvert f \rvert$ 다.
- $\int \lvert f \rvert\thinspace d\mu = 0$ 인 것과 $f = 0$ 이 거의 어디서나인 것은 동치다.

## 수렴 정리

| 정리 | 가정 | 결론 |
|---|---|---|
| [단조수렴](monotone-convergence.md) | $0 \le f_1 \le f_2 \le \cdots$ 이고 $f_n \to f$ | $\int f_n \to \int f$ |
| Fatou | $f_n \ge 0$ | $\int \liminf f_n \le \liminf \int f_n$ |
| [지배수렴](dominated-convergence.md) | $f_n \to f$ 거의 어디서나이고 $\lvert f_n \rvert \le g \in L^1$ | $\int f_n \to \int f$ 이고 $\int \lvert f_n - f \rvert \to 0$ |

세 정리 모두 점별 수렴만 가정한다. Riemann 적분에서는 [균등수렴](uniform-convergence.md)이 필요했다. 급수와 적분의 교환, 매개변수 미분과 적분의 교환을 이 정리들로 증명한다.

단조수렴 정리의 따름정리로 음이 아닌 항의 급수와 적분을 항상 교환할 수 있다.

$$
\int_X\sum_{n=1}^\infty f_n\thinspace d\mu=\sum_{n=1}^\infty\int_X f_n\thinspace d\mu\qquad(f_n\ge0)
$$

## Riemann 적분과의 관계

유계함수가 $[a,b]$ 에서 Riemann 적분 가능하면 Lebesgue 적분도 가능하고 두 값이 같다. 역은 성립하지 않는다. 직관 절의 함수는 Lebesgue 적분이 $0$ 이지만 Riemann 적분은 없다.

이상적분은 다르다. 이상적분 $\int_0^\infty \frac{\sin x}{x}\thinspace dx$ 는 수렴하지만 $\int \frac{\lvert \sin x \rvert}{x}\thinspace dx = \infty$ 라 Lebesgue 적분 가능하지 않다. Lebesgue 적분은 $\lvert f\rvert$ 의 적분이 유한할 때만 정의되므로 조건수렴하는 이상적분은 따로 다룬다.

## 완비성

$L^1(\mu)$ 는 $\lVert f \rVert_1 = \int \lvert f \rvert\thinspace d\mu$ 로 완비 [노름공간](banach-spaces.md)이다(Riesz–Fischer 정리). 증명에 지배수렴 정리를 쓴다. Riemann 적분 가능한 함수에 같은 노름을 주면 완비가 아니다. 같은 방식으로 $L^2$ 는 [Hilbert 공간](hilbert-spaces.md)이고 Fourier 해석은 이 공간에서 한다.

## 측도의 교체

정의에서 측도 $\mu$ 를 바꾸면 다른 적분이 나온다. 아래 활용 절의 급수와 기댓값이 그 예다.

# 활용

## 급수와 기댓값

셈측도를 쓰면 적분이 급수이고 확률측도를 쓰면 [기댓값](random-variables.md)이다. 그래서 급수의 교환 정리와 확률의 수렴 정리를 따로 증명하지 않는다. 이산분포와 연속분포가 섞인 확률변수도, 밀도가 없는 특이분포도 같은 정의로 다룬다.

## 밀도와 측도의 비교

[Radon–Nikodym 정리](radon-nikodym.md)에 따르면 한 측도가 다른 측도에 절대연속이면 둘 사이의 밀도가 있다. 그 밀도가 확률에서 확률밀도함수, 통계에서 [우도비](change-of-measure.md), 정보이론에서 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)의 피적분함수다.

## 교환의 조건

$f_n = n \cdot \mathbf{1}\_{(0,1/n)}$ 은 점별로 $0$ 에 수렴하지만 모든 $n$ 에서 적분이 $1$ 이다. 지배함수가 없어서 지배수렴 정리를 쓸 수 없고, Fatou 의 부등식은 여기서 등호가 아니다. 극한과 적분의 순서를 바꿀 때는 어느 정리의 어느 가정을 쓰는지 적는다.[^1]

[^1]: Terence Tao, *245A Notes 3: Integration on abstract measure spaces and the convergence theorems*, §4 정의 10·11·13. 단순함수에서 일반 가측함수로의 확장과 수렴 정리. https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Riemann 적분](riemann-integral.md)
- [가측함수](measurable-functions.md)

## 더 알아보기

- [단조 수렴 정리](monotone-convergence.md)
- [유계변동 함수](bounded-variation.md)
- [Radon–Nikodym 정리](radon-nikodym.md)
- [$L^p$ 공간](lp-spaces.md)
- [확률변수](random-variables.md)

#measure_theory #analysis #probability
