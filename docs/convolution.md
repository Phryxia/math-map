# 합성곱

# 개요

**합성곱(convolution)** 은 두 함수 $f,g:\mathbb R^n\to\mathbb R$ 에서

$$
(f\ast g)(x)=\int_{\mathbb R^n}f(x-y)g(y)\thinspace dy
$$

로 만든 함수다. $g$ 를 무게로 삼아 $f$ 를 평행이동한 것들을 평균한 값이다. 독립 확률변수의 합의 밀도, 이동평균, 선형 시불변 계의 출력이 합성곱이고, [Fourier 변환](fourier-transform.md)은 합성곱을 곱으로 바꾼다.

# 직관

$[0,1]$ 에서 고르게 뽑은 수 $X$ 와 $Y$ 가 독립일 때 합 $X+Y$ 의 분포를 구한다. 합이 $x$ 근처일 확률은 $Y=y$ 이고 $X=x-y$ 인 경우를 모든 $y$ 에 대해 더한 것이다. 밀도로 쓰면 $X$ 의 밀도 $f=\mathbf 1\_{[0,1]}$ 과 $Y$ 의 밀도 $g=\mathbf 1\_{[0,1]}$ 에서 $\int f(x-y)g(y)\thinspace dy$ 가 $X+Y$ 의 밀도다.

계산하면 $f(x-y)g(y)=1$ 인 것은 $0\le y\le 1$ 이고 $x-1\le y\le x$ 일 때다. 두 구간이 겹치는 길이가 적분값이므로 $0\le x\le 1$ 에서 $x$, $1\le x\le 2$ 에서 $2-x$, 나머지에서 $0$ 이다. 합의 밀도는 $x=1$ 에서 꼭짓점을 갖는 삼각형이다.

두 밀도는 계단 모양으로 끊겼지만 합성곱은 연속이다. $y$ 에 대해 평균을 내면서 $f$ 의 끊긴 자리가 넓게 퍼졌기 때문이다. 같은 계산을 한 번 더 하면 $X+Y+Z$ 의 밀도는 미분가능한 이차 곡선 조각으로 이어지고, 거듭할수록 매끄러워지며 [정규분포](normal-distribution.md)의 밀도에 가까워진다.

# 정의

## 함수의 합성곱

$f,g$ 가 $\mathbb R^n$ 위의 가측함수이고 거의 모든 $x$ 에서 $y\mapsto f(x-y)g(y)$ 가 적분가능하면 그 적분을 $(f\ast g)(x)$ 로 정의한다. $f,g\in L^1$ 이면 [Fubini–Tonelli 정리](fubini-tonelli.md)로

$$
\int\int\lvert f(x-y)g(y)\rvert\thinspace dy\thinspace dx=\Vert f\Vert\_1\Vert g\Vert\_1\lt\infty
$$

이므로 $f\ast g$ 가 거의 모든 점에서 정의되고 $L^1$ 에 든다.

## 측도와 수열의 합성곱

$\mathbb R^n$ 위의 유한 측도 $\mu,\nu$ 의 합성곱은 $(\mu\ast\nu)(A)=\int\mu(A-y)\thinspace d\nu(y)$ 다. 독립 확률변수 $X,Y$ 의 분포가 $\mu,\nu$ 이면 $X+Y$ 의 분포가 $\mu\ast\nu$ 다. 정수 위의 수열에서는 $(a\ast b)\_n=\sum_k a_{n-k}b_k$ 이고, 다항식 $\sum a_nx^n$ 과 $\sum b_nx^n$ 의 곱의 계수가 $a\ast b$ 다.

# 성질

## 대수적 성질

$f\ast g=g\ast f$ 이고 $(f\ast g)\ast h=f\ast(g\ast h)$ 다. 교환법칙은 변수 $y\mapsto x-y$ 의 치환에서, 결합법칙은 Fubini 정리로 적분 순서를 바꾸는 데서 나온다. 합성곱은 평행이동과 교환한다. $\tau_af(x)=f(x-a)$ 이면 $\tau_a(f\ast g)=(\tau_af)\ast g$ 다.

## Young 부등식

$1\le p,q,r\le\infty$ 이고 $1+\frac1r=\frac1p+\frac1q$ 이면

$$
\Vert f\ast g\Vert\_r\le\Vert f\Vert\_p\Vert g\Vert\_q
$$

다. 이것이 합성곱에 대한 Young 부등식(Young's convolution inequality)이다. $q=1$ 이면 $\Vert f\ast g\Vert\_p\le\Vert f\Vert\_p\Vert g\Vert\_1$ 이고 [Lᵖ 공간](lp-spaces.md)에서 Minkowski 적분 부등식(Minkowski's integral inequality)으로 증명된다. $p=q=1$ 인 경우에 따라 $L^1$ 은 합성곱을 곱으로 하는 Banach 대수다.

## 합성곱 정리

$f,g\in L^1$ 이면

$$
\widehat{f\ast g}=\hat f\thinspace\hat g
$$

다. Fourier 변환의 정의에 $f\ast g$ 를 넣고 Fubini 정리로 적분 순서를 바꾸면 $e^{-2\pi ix\cdot\xi}=e^{-2\pi i(x-y)\cdot\xi}e^{-2\pi iy\cdot\xi}$ 에 따라 두 적분으로 갈라진다. 이 등식은 미분방정식과 필터 설계에서 합성곱을 곱셈으로 바꾸는 데 쓴다.

## 평활화

$\varphi$ 가 $C^k$ 이고 도함수가 유계이며 $f\in L^1$ 이면 $f\ast\varphi$ 는 $C^k$ 이고 $\partial^\alpha(f\ast\varphi)=f\ast\partial^\alpha\varphi$ 다. 미분을 적분 안으로 넣는 것을 [지배 수렴 정리](dominated-convergence.md)가 보장한다. 합성곱의 매끄러움은 두 인자 가운데 더 매끄러운 쪽을 따른다.

## 근사 항등원

$\varphi\ge 0$, $\int\varphi=1$ 인 적분가능한 함수에서 $\varphi_\varepsilon(x)=\varepsilon^{-n}\varphi(x/\varepsilon)$ 으로 두면, $1\le p\lt\infty$ 이고 $f\in L^p$ 일 때

$$
\Vert f\ast\varphi_\varepsilon-f\Vert\_p\to 0\qquad(\varepsilon\to 0)
$$

이다. $\varphi_\varepsilon$ 을 근사 항등원(approximate identity)이라 한다. 증명의 요지는 $f\ast\varphi_\varepsilon-f=\int(\tau_yf-f)\varphi_\varepsilon(y)\thinspace dy$ 로 쓰고 평행이동의 $L^p$ 연속성 $\Vert\tau_yf-f\Vert\_p\to 0$ 을 쓰는 것이다. $\varphi$ 를 콤팩트 받침을 갖는 매끄러운 함수로 잡으면 $f\ast\varphi_\varepsilon$ 이 매끄러우므로, 매끄러운 함수가 $L^p$ 에서 조밀하다.

# 활용

- [열방정식](heat-equation.md)의 해는 초기값과 열핵의 합성곱이고, 열핵 $\Phi(\cdot,t)$ 는 $t\to 0$ 에서 근사 항등원이다.
- [Fejér 핵](fejer-kernel.md)은 원 위의 근사 항등원이고, [Fourier 급수](fourier-series.md)의 부분합의 평균이 연속함수에 균등수렴하는 것이 근사 항등원 성질이다.
- [특성함수](characteristic-functions.md)는 독립 합의 분포인 합성곱을 특성함수의 곱으로 바꾼다. [중심극한정리](central-limit-theorem.md)의 증명이 이것을 쓴다.
- [고속 Fourier 변환](fft.md)(fast Fourier transform, FFT)은 길이 $N$ 인 수열의 순환 합성곱을 $O(N\log N)$ 번의 연산으로 계산한다. 큰 정수와 다항식의 곱셈이 이렇게 빨라진다.
- [Schwartz 분포](schwartz-distributions.md)에서는 분포와 시험함수의 합성곱을 정의하고, 기본해 $E$ 에 대해 $u=E\ast f$ 가 $Lu=f$ 의 해다.
- [Dirichlet 급수](dirichlet-series.md)의 곱은 계수의 Dirichlet 합성곱 $(a\ast b)(n)=\sum_{d\mid n}a(d)b(n/d)$ 이고, 덧셈 대신 곱셈에 대한 합성곱이다.

# 연관 문서

## 선수지식

- [Fubini–Tonelli 정리](fubini-tonelli.md)
- [Lᵖ 공간](lp-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #measure_theory #probability #functional_analysis
