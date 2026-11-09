# 감마 함수

# 개요

**감마 함수(gamma function)** 는 자연수에서만 정의되는 계승 $n!$ 을 [실수](real-numbers.md)와 [복소수](complex-numbers.md)로 잇는 함수다. $3!=1\cdot 2\cdot 3$ 은 곱으로 정해지지만 $(1/2)!$ 은 반 개의 수를 곱한다는 뜻이 없어 계승의 정의로는 값이 없다. 감마 함수는 계승을 적분 하나로 다시 써서 $\Gamma(3/2)=\sqrt\pi/2$ 처럼 정수가 아닌 곳의 값을 준다.

# 직관

$n!$ 을 정수가 아닌 곳으로 이으려면 $f(n+1)=n!$ 인 $f$ 가 있어야 한다. 계승은 $(n+1)!=(n+1)\cdot n!$ 을 만족하므로 이 점화식을 모든 실수로 넓힌 조건을 요구한다. $f(x+1)=xf(x)$ 와 $f(1)=1$ 을 요구하면 정수에서의 값은 정해지지만 그 사이는 정해지지 않는다.

주기 1 인 양함수 $p(x)=e^{\sin2\pi x}$ 를 곱한 $f\cdot p$ 도 $p(x+1)=p(x)$ 이므로 같은 두 조건을 만족하고, 정수에서 $p=1$ 이라 계승 값도 그대로다. 이런 $p$ 는 무한히 많다.

정수 사이의 모양을 묶는 조건이 하나 더 있어야 한다. $\log f$ 가 볼록하다고 하면 $\log(f\cdot p)=\log f+\sin2\pi x$ 의 2 계 도함수가 $(\log f)''-4\pi^2\sin2\pi x$ 이고, $(\log\Gamma)''=\sum_{n\ge0}(x+n)^{-2}$ 는 큰 $x$ 에서 $0$ 으로 가므로 진폭 $4\pi^2$ 인 항이 이겨 볼록성이 깨진다.

세 조건을 만족하는 함수는 하나뿐이고 그것이 $\int_0^{\infty}t^{x-1}e^{-t}dt$ 다. $x=1$ 이면 이 적분은 $\int_0^\infty e^{-t}dt=1$ 이고, 부분적분 한 번으로 $x$ 에서 $x+1$ 로 넘어갈 때 $x$ 배가 된다. [볼록성](convexity.md)이 유일성을 주는 예다.

# 정의

## 적분과 해석적 연속

**감마 함수** 는 $\mathrm{Re}\thinspace s\gt 0$ 에서 다음 적분으로 정의한다.

$$
\Gamma(s)=\int_0^{\infty}t^{s-1}e^{-t}\thinspace dt
$$

이 영역에서 적분이 절대수렴하고 정칙이다. 부분적분으로 함수방정식(functional equation) $\Gamma(s+1)=s\thinspace\Gamma(s)$ 가 나오고, $\Gamma(1)=1$ 이므로 $\Gamma(n+1)=n!$ 이다. 성질 절의 반사공식에서 $\Gamma(\tfrac12)=\sqrt\pi$ 이고 $\Gamma(\tfrac32)=\tfrac12\Gamma(\tfrac12)=\sqrt\pi/2$ 다.

[해석적 연속](analytic-continuation.md)은 함수방정식을 거꾸로 쓴다.

$$
\Gamma(s)=\frac{\Gamma(s+n)}{s(s+1)\cdots(s+n-1)}
$$

우변은 $\mathrm{Re}\thinspace s\gt -n$ 에서 정의되므로 $n$ 을 키우면 $\mathbb C$ 전체로 이어진다. $n=1$, $s=-\tfrac12$ 이면 $\Gamma(-\tfrac12)=\Gamma(\tfrac12)/(-\tfrac12)=-2\sqrt\pi$ 다.

## Euler 곱과 Weierstrass 곱

Euler 곱(Euler product formula)과 Weierstrass 곱(Weierstrass product)은 다음 두 표현이다.

$$
\Gamma(s)=\lim_{n\to\infty}\frac{n!\thinspace n^{s}}{s(s+1)\cdots(s+n)},
\qquad
\frac1{\Gamma(s)}=s\thinspace e^{\gamma s}\prod_{n\ge1}\Big(1+\frac sn\Big)e^{-s/n}
$$

두 번째 식에서 $1/\Gamma$ 가 위수 1 의 정함수(entire function of order 1)다. 수렴인자(convergence factor) $e^{-s/n}$ 을 넣는 자리에 [Euler–Mascheroni 상수](euler-mascheroni-constant.md) $\gamma$ 가 나타나며, 이는 $\sum1/n$ 과 $\log n$ 의 차이다.

## 베타 함수

$$
\mathrm B(x,y)=\int_0^1t^{x-1}(1-t)^{y-1}dt=\frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}
$$

왼쪽 적분을 **베타 함수(beta function)** 라 하고, 오른쪽 등식은 $\Gamma(x)\Gamma(y)$ 를 이중적분으로 쓰고 극좌표에 해당하는 치환을 해서 증명한다. $\mathrm B(2,2)=\int_0^1t(1-t)dt=\tfrac16$ 이고 $\Gamma(2)\Gamma(2)/\Gamma(4)=1/3!=\tfrac16$ 이다. 정수에서 $\mathrm B(m,n)^{-1}=(m+n-1)\binom{m+n-2}{m-1}$ 이므로 베타 함수는 이항계수의 연속판이다.

# 성질

## 극점과 유수

$\Gamma$ 는 $\mathbb C$ 에서 유리형이고 영점이 없다. 극점은 $n\ge0$ 인 정수에 대한 $s=-n$ 의 단순극점뿐이며

$$
\mathop{\mathrm{Res}}\_{s=-n}\Gamma(s)=\frac{(-1)^{n}}{n!}
$$

이 유수는 [유수 정리](residue-theorem.md)로 윤곽을 옮길 때 감마 인자가 만드는 항이다.

증명의 요지. $t\to0$ 에서 $e^{-t}=1-t+\tfrac{t^2}2-\cdots$ 를 넣어 항별로 적분하면

$$
\int_0^{1}t^{s-1}e^{-t}dt=\sum_{n\ge0}\frac{(-1)^{n}}{n!}\cdot\frac1{s+n}
$$

이고 나머지 구간 $\int_1^\infty$ 는 정함수다. 적분의 수렴을 막는 것은 $t=0$ 쪽이고 $e^{-t}$ 의 Taylor 계수가 그대로 유수가 된다.

영점이 없으므로 $\Gamma$ 로 나누는 조작이 언제나 허용되고, 함수방정식에서 감마 인자를 옮겨 붙이는 계산에 제약이 없다. $1/\Gamma$ 는 정함수다.

## Bohr–Mollerup 정리

$f:(0,\infty)\to(0,\infty)$ 가 $f(1)=1$ 과 $f(x+1)=xf(x)$ 와 $\log f$ 의 볼록성을 만족하면 $f=\Gamma$ 다. 이것을 Bohr–Mollerup 정리(Bohr–Mollerup theorem)라 한다.

증명의 요지. 로그볼록성(log-convexity)으로 $\log f(n+x)$ 를 $\log f(n)$ 과 $\log f(n+1)$ 사이의 기울기로 가두면 Euler 곱 표현이 유도된다.

## 반사, 배가, 승법

$$
\Gamma(s)\Gamma(1-s)=\frac{\pi}{\sin\pi s},
\qquad
\Gamma(s)\Gamma\negthinspace\left(s+\tfrac12\right)=2^{1-2s}\sqrt\pi\thinspace\Gamma(2s)
$$

$$
\prod_{k=0}^{n-1}\Gamma\negthinspace\left(s+\frac kn\right)=(2\pi)^{(n-1)/2}\thinspace n^{1/2-ns}\thinspace\Gamma(ns)
$$

첫째 식을 반사공식(reflection formula)이라 한다. 증명의 요지. $1/\Gamma(s)$ 는 $s=0,-1,-2,\dots$ 에서, $1/\Gamma(1-s)$ 는 $s=1,2,3,\dots$ 에서 단순영점을 갖는다. 둘의 곱은 모든 정수에서 단순영점을 갖는 정함수이고, 증가 차수까지 맞추는 Hadamard 인수분해(Hadamard factorization)로 $\sin\pi s/\pi$ 와 같다.

$s=\tfrac12$ 을 넣으면 $\Gamma(\tfrac12)=\sqrt\pi$ 이고 이것이 Gauss 적분(Gaussian integral)이다. 세 번째가 Gauss 승법공식(Gauss multiplication formula)이고 두 번째 Legendre 배가공식(Legendre duplication formula)이 $n=2$ 인 경우다. 승법공식은 $\Gamma$ 가 곱셈군의 $n$ 배 사상과 정합한다는 진술이고, 지표합에서 [Gauss 합](gauss-sums.md)이 만족하는 Hasse–Davenport 관계(Hasse–Davenport relation)가 같은 형태다.

## Stirling 급수

$f=\log x$ 에 [Euler–Maclaurin 공식](euler-maclaurin.md)을 적용하면 $\log\Gamma$ 의 점근전개인 Stirling 급수(Stirling series)가 나온다.

$$
\log\Gamma(z)=\Big(z-\tfrac12\Big)\log z-z+\tfrac12\log2\pi
+\sum_{k=1}^{K}\frac{B_{2k}}{2k(2k-1)z^{2k-1}}+R_K
$$

$\vert\arg z\vert\lt\pi$ 인 닫힌 부채꼴에서 균등하게 성립한다. 지수를 취하면 다음이 된다.

$$
\Gamma(z)\sim\sqrt{\frac{2\pi}{z}}\left(\frac ze\right)^{z},
\qquad n!\sim\sqrt{2\pi n}\left(\frac ne\right)^{n}
$$

상수 $\sqrt{2\pi}$ 는 Euler–Maclaurin 공식이 주지 않고 반사공식이나 Wallis 곱(Wallis product)으로 정한다. 급수가 발산하므로 최적 절단은 $K\approx\pi\vert z\vert$ 이고 그때 상대오차가 $e^{-2\pi\vert z\vert}$ 규모다.

## 감마 인자와 함수방정식

$$
\xi(s)=\pi^{-s/2}\Gamma\negthinspace\left(\frac s2\right)\zeta(s)
\quad\Longrightarrow\quad
\xi(s)=\xi(1-s)
$$

적분 정의 $\int_0^\infty t^{s-1}e^{-t}dt$ 는 $e^{-t}$ 의 [Mellin 변환](mellin-transform.md)이다. Mellin 변환은 곱셈군 $(0,\infty)$ 위의 [Fourier 변환](fourier-transform.md)이고 스케일 변환의 지표 $t^{s}$ 로 함수를 분해하므로, 스케일을 바꾸며 적분을 정리하는 계산마다 감마가 나온다.

$$
\int_0^{\infty}t^{s-1}e^{-\lambda t}dt=\frac{\Gamma(s)}{\lambda^{s}},
\qquad
\zeta(s)\thinspace\Gamma(s)=\int_0^{\infty}\frac{t^{s-1}}{e^{t}-1}dt
$$

오른쪽 식이 $\zeta(s)$ 를 적분으로 바꾸는 표준 수법이고, 이 관점의 일반화가 [Tate 의 zeta 적분](tate-zeta-integral.md)이다.

[Riemann zeta](riemann-zeta.md) 의 함수방정식은 감마 인자를 붙여야 대칭이 된다. 소수마다 Euler 인자(Euler factor) $(1-p^{-s})^{-1}$ 가 있듯 무한 자리의 인자가 감마다. $\zeta$ 의 자명한 영점(trivial zero) $s=-2,-4,\dots$ 는 $\xi$ 가 그 점에서 유한하도록 $\Gamma(s/2)$ 의 극점을 상쇄한다. [모듈러 형식](modular-forms.md)과 [Dirichlet L 함수](dirichlet-l-functions.md)의 완비화(completion)에도 무게에 맞춘 감마 인자가 같은 자리에 붙는다.

# 활용

## 수치계산

작은 $z$ 에서는 점근전개의 정확도가 낮으므로 Stirling 급수로 $\Gamma(z+m)$ 을 계산한 뒤 정의 절의 식 $\Gamma(z)=\Gamma(z+m)/(z(z+1)\cdots(z+m-1))$ 로 $\Gamma(z)$ 를 얻는다.

$\Gamma$ 자체는 금방 넘치지만 로그는 넘치지 않으므로 $\log\Gamma$ 를 계산한다. 이항계수나 확률밀도에서 필요한 양은 감마의 비 $\Gamma(a)\Gamma(b)/\Gamma(a+b)$ 이므로 로그로 더하고 뺀다.

## 부피와 확률분포

$n$ 차원 단위공의 부피와 [감마분포](gamma-distribution.md)의 정규화 상수가 둘 다 감마 함수로 적힌다.

$$
\mathrm{vol}(B^{n})=\frac{\pi^{n/2}}{\Gamma\negthinspace\left(\frac n2+1\right)},
\qquad
p(x)=\frac{\lambda^{\alpha}}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}
$$

앞의 식에서 $\Gamma$ 가 분모에 있으므로 $n$ 이 커지면 부피가 0 으로 급격히 줄어든다. [구 채우기](sphere-packing.md)의 밀도 평가가 이 값을 쓴다. 뒤의 감마분포는 [지수분포](exponential-distribution.md)의 합이며 $\alpha=n/2$ 와 $\lambda=1/2$ 이면 자유도 $n$ 의 [카이제곱 분포](chi-squared-distribution.md)가 되어 [가설검정](hypothesis-testing.md)의 기본 분포가 된다. [지수족](exponential-families.md)의 로그분배함수가 $\log\Gamma$ 로 쓰이는 것도 같은 사정이다.

## 조합론적 근사

$$
\binom{2n}{n}=\frac{(2n)!}{(n!)^{2}}\sim\frac{4^{n}}{\sqrt{\pi n}}
$$

Stirling 근사를 세 번 써서 얻는 이 식을 [확률](probability.md)의 중심극한형 계산이 쓴다. $4^{n}$ 이 주도항이고 $\sqrt{n}$ 이 보정인 구조가 대칭 [무작위 걷기](random-walks.md)의 되돌아옴 확률(return probability), [이항분포](binomial-distribution.md)의 최댓값, 엔트로피 계산에 나타난다.[^1]

[^1]: 표준 참고는 E. Artin, *The Gamma Function* (Bohr–Mollerup 을 중심에 둔 짧은 고전)과 E. T. Whittaker, G. N. Watson, *A Course of Modern Analysis* 12 장. 수치구현은 W. Press 외, *Numerical Recipes* 6.1 절의 Lanczos 근사에 있다.

# 연관 문서

## 선수지식

- [유수 정리](residue-theorem.md)
- [해석적 연속](analytic-continuation.md)
- [Euler–Maclaurin 공식](euler-maclaurin.md)

## 더 알아보기

- [Laplace 방법](laplace-method.md)
- [Mellin 변환](mellin-transform.md)
- [Dirichlet 분포](dirichlet-distribution.md)

#analysis #complex_analysis #computation
