# 이상적분

# 개요

**이상적분(improper integral)** 은 적분 구간이 끝없이 뻗거나 함수가 구간 끝에서 한없이 커지는 경우에, 적분을 유한한 구간의 적분의 극한으로 정한 것이다. 곡선 $y=1/x^2$ 아래에서 $x\ge 1$ 인 부분은 오른쪽으로 끝없이 뻗는데, 이 부분의 넓이는 유한한가. 이상적분은 $1$ 부터 $b$ 까지의 넓이를 구하고 $b$ 를 한없이 키운 극한을 그 넓이로 삼는다.

# 직관

$1$ 부터 $b$ 까지 $y=1/x^2$ 아래의 넓이는 [미적분학의 기본 정리](fundamental-calculus.md)로 계산된다.

$$
\int_1^b\frac{dx}{x^2}=\Bigl\lbrack -\frac1x\Bigr\rbrack_1^b=1-\frac1b
$$

$b$ 를 키우면 넓이는 $1$ 로 다가간다. 그래서 끝없이 뻗는 부분의 넓이를 $1$ 로 정한다.

$y=1/x$ 로 같은 계산을 하면 $1$ 부터 $b$ 까지의 넓이가 $\log b$ 이고, $b$ 를 키우면 한없이 커진다. 이 부분에는 유한한 넓이가 없다. 두 곡선은 모두 $0$ 으로 다가가지만 $1/x^2$ 이 충분히 빨리 다가가서 넓이가 유한하다.

# 정의

$f$ 가 모든 $b\gt a$ 에서 $\lbrack a,b\rbrack$ 위의 [Riemann 적분](riemann-integral.md)을 가질 때, 다음 극한이 존재하면 **이상적분** $\int_a^\infty f$ 가 수렴한다(converge)고 하고 그 값을 극한으로 정한다[^1].

$$
\int_a^\infty f(x)\thinspace dx=\lim_{b\to\infty}\int_a^b f(x)\thinspace dx
$$

극한이 없으면 발산한다(diverge)고 한다. 직관 절에서 $\int_1^\infty dx/x^2=1$ 은 수렴하고 $\int_1^\infty dx/x$ 는 발산한다.

$f$ 가 $\lbrack a,b\rbrack$ 의 끝점 $a$ 근처에서 유계가 아니고 모든 $\varepsilon\gt 0$ 에서 $\lbrack a+\varepsilon,b\rbrack$ 위의 적분을 가지면, 같은 방식으로 다음과 같이 정한다.

$$
\int_a^b f(x)\thinspace dx=\lim_{\varepsilon\to 0^+}\int_{a+\varepsilon}^b f(x)\thinspace dx
$$

$\int_0^1 dx/\sqrt x=\lim_{\varepsilon\to 0^+}(2-2\sqrt\varepsilon)=2$ 가 그 예다. 양 끝이 모두 이런 경우이면 가운데의 한 점에서 나누어 두 이상적분이 각각 수렴할 때 수렴한다고 한다.

# 성질

## 거듭제곱 함수

$p\gt 0$ 에 대해 다음이 성립한다.

- $\int_1^\infty x^{-p}\thinspace dx$ 는 $p\gt 1$ 일 때만 수렴하고 값은 $1/(p-1)$ 이다.
- $\int_0^1 x^{-p}\thinspace dx$ 는 $p\lt 1$ 일 때만 수렴하고 값은 $1/(1-p)$ 이다.

원시함수 $x^{1-p}/(1-p)$ 와 $p=1$ 에서의 $\log x$ 의 극한을 보면 나온다. 직관 절의 두 곡선은 첫째 항목의 $p=2$ 와 $p=1$ 이다.

## 비교 판정

$0\le f\le g$ 이고 $\int_a^\infty g$ 가 수렴하면 $\int_a^\infty f$ 도 수렴한다. $\int_a^b f$ 는 $b$ 에 대해 증가하고 $\int_a^\infty g$ 이하로 유계이므로 극한이 있다.

$x\ge 1$ 에서 $e^{-x^2}\le e^{-x}$ 이고 $\int_1^\infty e^{-x}\thinspace dx=1/e$ 이므로 $\int_{-\infty}^\infty e^{-x^2}\thinspace dx$ 는 수렴한다. 그 값 $\sqrt\pi$ 는 [치환적분](integration-by-substitution.md)으로 구한다.

## 절대수렴과 조건수렴

$\int_a^\infty\vert f\vert$ 가 수렴하면 $\int_a^\infty f$ 가 절대수렴한다(converge absolutely)고 한다. 절대수렴하면 비교 판정으로 수렴한다. 역은 성립하지 않는다.

$\int_1^\infty\sin x/x\thinspace dx$ 에 [부분적분](integration-by-parts.md)을 쓰면 다음이 나온다.

$$
\int_1^b\frac{\sin x}{x}\thinspace dx=\cos 1-\frac{\cos b}{b}-\int_1^b\frac{\cos x}{x^2}\thinspace dx
$$

$\vert\cos x/x^2\vert\le 1/x^2$ 이므로 마지막 적분은 절대수렴하고, $b\to\infty$ 에서 좌변이 수렴한다. 그러나 $\int_1^\infty\vert\sin x\vert/x\thinspace dx$ 는 발산한다. 구간 $\lbrack k\pi,(k+1)\pi\rbrack$ 마다 적분이 $2/((k+1)\pi)$ 이상이고, 이것을 더하면 [조화급수](harmonic-series.md)처럼 발산한다. 이렇게 수렴하지만 절대수렴하지 않는 것을 조건수렴(conditional convergence)이라 한다. 값 $\int_0^\infty\sin x/x\thinspace dx=\pi/2$ 는 복소 경로 적분과 [Jordan 보조정리](jordan-lemma.md)로 계산한다.

## 급수와의 대응

$f$ 가 $\lbrack 1,\infty)$ 에서 음이 아니고 감소하면 $\sum_{n\ge 1}f(n)$ 과 $\int_1^\infty f$ 는 함께 수렴하거나 함께 발산한다. 이것이 [급수의 수렴판정](series-convergence.md)의 적분판정(integral test)이다. 직관 절의 두 곡선에서 $\sum 1/n^2$ 은 수렴하고 $\sum 1/n$ 은 발산한다.

## 주값

$\int_{-\infty}^\infty x\thinspace dx$ 는 $\int_0^\infty x\thinspace dx$ 가 발산하므로 발산한다. 그런데 대칭 구간의 적분은 $\int_{-R}^R x\thinspace dx=0$ 이어서 $R\to\infty$ 극한이 $0$ 이다. 이 대칭 극한을 Cauchy 주값(Cauchy principal value)이라 하고, 이상적분과 구별한다.

# 활용

- [감마 함수](gamma-function.md)의 정의 $\Gamma(s)=\int_0^\infty x^{s-1}e^{-x}\thinspace dx$ 는 $0$ 근처와 무한대 쪽이 모두 이상적분이다. $0$ 근처는 거듭제곱 함수 절로 $s\gt 0$ 에서 수렴하고, 무한대 쪽은 비교 판정으로 수렴한다.
- [Laplace 변환](laplace-transform.md)과 [Fourier 변환](fourier-transform.md)은 무한 구간 위의 이상적분으로 정의된다. 변환이 정의되는 $s$ 의 범위가 이상적분이 수렴하는 범위다.
- [확률밀도](probability-density.md)는 실수 전체에서의 이상적분이 $1$ 인 음이 아닌 함수다.
- [Lebesgue 적분](lebesgue-integral.md)에서는 절대수렴하는 이상적분만 적분 가능하다. $\sin x/x$ 는 $\lbrack 1,\infty)$ 에서 Lebesgue 적분 가능하지 않다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, 6 장 연습문제 7, 8.

# 연관 문서

## 선수지식

- [미적분학의 기본 정리](fundamental-calculus.md)

## 더 알아보기

- [Jordan 보조정리](jordan-lemma.md)

#analysis #probability
