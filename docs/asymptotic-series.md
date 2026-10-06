# 점근급수

# 개요

점근급수는 함수를 유한 항까지 전개하고 나머지를 마지막 항보다 작은 양으로 묶은 식이다. 급수 전체가 수렴할 것을 요구하지 않는다. 계수를 무한히 더하면 발산하는 전개가 처음 몇 항만으로 함숫값을 소수점 아래 여러 자리까지 준다.

감마 함수의 Stirling 급수, Laplace 방법이 내놓는 적분의 전개, WKB 근사(Wentzel–Kramers–Brillouin)의 해가 모두 이 꼴이다.

# 직관

작은 $x\gt 0$ 에서 다음 적분값을 계산하려 한다.

$$
F(x)=\int_0^\infty\frac{e^{-t}}{1+xt}\thinspace dt
$$

분모를 등비급수로 펴면 $1/(1+xt)=\sum_{n\ge 0}(-1)^nx^nt^n$ 이고 $\int_0^\infty e^{-t}t^n\thinspace dt=n!$ 이므로 항별로 적분하면 $\sum_{n\ge 0}(-1)^nn!\thinspace x^n$ 이 나온다.

이 급수는 어떤 $x\gt 0$ 에서도 발산한다. 이웃한 두 항의 크기의 비가 $(n+1)x$ 이고 $n$ 이 커지면 $1$ 보다 커진다. 수렴반경이 $0$ 이므로 무한히 더하는 길이 막혔다.

무한히 더하는 것이 막혔으니 유한 항에서 멈추고 차이를 적는다. 등비급수를 $N$ 항에서 끊으면 나머지가 분모를 그대로 갖는다.

$$
\frac{1}{1+xt}=\sum_{n=0}^{N-1}(-1)^nx^nt^n+\frac{(-1)^Nx^Nt^N}{1+xt}
$$

양변에 $e^{-t}$ 를 곱해 적분하면 처음 $N$ 항의 합과 $F(x)$ 의 차가 나온다.

$$
F(x)-\sum_{n=0}^{N-1}(-1)^nn!\thinspace x^n=(-1)^N\int_0^\infty\frac{e^{-t}x^Nt^N}{1+xt}\thinspace dt
$$

$t\ge 0$ 에서 $1+xt\ge 1$ 이므로 우변의 절댓값은 $x^N\int_0^\infty e^{-t}t^N\thinspace dt=N!\thinspace x^N$ 이하다. $x=1/100$ 과 $N=5$ 를 넣으면 한계가 $120/10^{10}$ 이다. 발산하는 급수의 처음 다섯 항이 여덟 자리까지 맞는 값을 준다.

$N$ 을 키우면 이 한계 $N!\thinspace x^N$ 은 $N\approx 1/x$ 까지 줄고 그 뒤로 커진다. 그래서 이 전개를 쓸 때 보는 것은 $N\to\infty$ 에서 부분합이 모이는가가 아니라, $N$ 을 고정했을 때 $x\to 0$ 에서 오차가 $x^N$ 보다 빨리 작아지는가다.

# 정의

점근급수는 나머지항의 크기 조건만으로 정의한 형식적 급수다.

$x\to x_0$ 에서 $\varphi_{n+1}(x)/\varphi_n(x)\to 0$ 을 만족하는 함수열 $\lbrace\varphi_n\rbrace\_{n\ge 0}$ 을 **점근 수열**이라 한다. $f$ 가 이 수열에 대해 계수 $a_n$ 의 **점근전개**를 갖는다는 것은

$$
\lim_{x\to x_0}\frac{f(x)-\sum_{n=0}^{N}a_n\varphi_n(x)}{\varphi_N(x)}=0
$$

이 모든 $N\ge 0$ 에서 성립한다는 뜻이고, 이때

$$
f(x)\sim\sum_{n\ge 0}a_n\varphi_n(x)\qquad(x\to x_0)
$$

으로 쓴다. 정의는 각 $N$ 마다 하나의 극한을 요구하고 급수의 수렴은 요구하지 않는다.

## 표준 점근 수열

$x\to 0$ 에서는 $\varphi_n(x)=x^n$, $x\to\infty$ 에서는 $\varphi_n(x)=x^{-n}$ 을 쓴다. $\log x$ 나 $x^{\alpha}$ 의 거듭제곱을 섞은 수열도 조건을 만족하면 쓸 수 있다.

## 수렴급수와의 차이

수렴급수는 $x$ 를 고정하고 $N\to\infty$ 로 보낸 극한이 $f(x)$ 다. 점근전개는 $N$ 을 고정하고 $x\to x_0$ 으로 보낸 극한이 조건을 만족한다. 두 극한의 순서가 다르다. 수렴하는 멱급수는 그 수렴 영역에서 점근전개이기도 하지만, 역은 성립하지 않는다.

# 성질

## 계수의 유일성

점근 수열을 고정하면 계수 $a_n$ 이 $f$ 로부터 유일하게 정해진다.

증명의 요지. $N=0$ 의 조건이 $a_0=\lim_{x\to x_0}f(x)/\varphi_0(x)$ 를 준다. $a_0,\dots,a_{N-1}$ 이 정해졌으면 $N$ 의 조건이

$$
a_N=\lim_{x\to x_0}\frac{f(x)-\sum_{n=0}^{N-1}a_n\varphi_n(x)}{\varphi_N(x)}
$$

을 준다. 각 극한값이 앞의 계수만으로 결정되므로 계수가 차례로 하나씩 정해진다.

## 전개의 비유일성

점근전개는 함수를 결정하지 않는다. $g(x)=e^{-1/x}$ 는 $x\to 0^+$ 에서 모든 $n$ 에 대해 $g(x)/x^n\to 0$ 이므로 $g\sim 0$ 이고, 따라서 $f$ 와 $f+g$ 의 점근전개가 같다.

이렇게 전개가 놓치는 항이 **지수적으로 작은 항**이다. 매개변수가 복소평면의 어떤 선을 지날 때 이 항의 크기가 바뀌는 것이 [Stokes 현상](stokes-phenomenon.md)이다.

## 항별 연산

합, 스칼라배, 곱은 점근전개를 보존한다. $x\to 0$ 에서 $\varphi_n(x)=x^n$ 인 경우 항별 적분도 보존한다.

미분은 보존하지 않는다. $x\to\infty$ 에서 $f(x)=e^{-x}\sin(e^{x})$ 는 모든 $n$ 에 대해 $x^nf(x)\to 0$ 이므로 $f\sim 0$ 이다. 그런데 $f'(x)=\cos(e^{x})-e^{-x}\sin(e^{x})$ 는 극한이 없으므로 $x^{-n}$ 수열에 대한 점근전개를 갖지 않는다.

## 최적 절단

항의 크기가 $n$ 에 대해 줄다가 다시 커지는 전개에서는 가장 작은 항에서 멈출 때 오차 한계가 가장 작다. 직관 절의 예에서 항 $n!\thinspace x^n$ 의 비가 $(n+1)x$ 이므로 최소 항은 $n\approx 1/x$ 이고, Stirling 공식으로 그 크기는 $e^{-1/x}$ 정도다.

절단 오차를 이보다 작게 하려면 항을 더 더하는 것으로는 안 되고 급수를 [Borel–Padé 재합산](borel-pade.md) 같은 절차로 다시 더해야 한다.

## Watson 보조정리

$g$ 가 $t\to 0^+$ 에서 $g(t)\sim\sum_{n\ge 0}c_nt^{n+\alpha}$ 를 만족하고($\alpha\gt -1$) $\lvert g(t)\rvert$ 가 어떤 $e^{ct}$ 보다 느리게 커지면, $\lambda\to\infty$ 에서

$$
\int_0^\infty e^{-\lambda t}g(t)\thinspace dt\sim\sum_{n\ge 0}\frac{c_n\Gamma(n+\alpha+1)}{\lambda^{n+\alpha+1}}
$$

이다.

증명의 요지. 적분을 $\lbrack 0,\delta\rbrack$ 와 그 밖으로 나눈다. 밖의 적분은 $e^{-\lambda\delta}$ 꼴의 한계를 가져 모든 $\lambda^{-n}$ 보다 작다. 안에서는 $g$ 를 유한 항까지의 전개로 바꾸고 각 항에 $\int_0^\infty e^{-\lambda t}t^{n+\alpha}\thinspace dt=\Gamma(n+\alpha+1)\lambda^{-n-\alpha-1}$ 을 쓴다. 바꿀 때 생기는 오차가 다음 항의 크기로 묶인다.

# 활용

- [Laplace 방법](laplace-method.md): 적분 $\int e^{-\lambda S(t)}h(t)\thinspace dt$ 를 $S$ 의 최소점 근방에서 치환해 Watson 보조정리를 적용한다. 그 결과로 나오는 $\lambda^{-n}$ 의 전개가 점근전개이고 대개 발산한다.
- [감마 함수](gamma-function.md): $\log\Gamma(z)$ 의 Stirling 급수가 $z\to\infty$ 에서의 점근전개다. 계수에 Bernoulli 수가 나오고 급수는 발산한다.
- [Euler–Maclaurin 공식](euler-maclaurin.md): 합과 적분의 차를 Bernoulli 수로 쓴 전개가 점근전개이고, 공식의 나머지항 한계가 최적 절단의 자리를 알려준다.
- [WKB 근사](wkb-approximation.md): 작은 매개변수의 거듭제곱으로 쓴 해가 점근전개이고, 회전점 근방에서 전개가 깨진다.
- [Resurgence 이론](resurgence.md): 점근급수의 계수가 계승처럼 커질 때 그 성장률에서 지수적으로 작은 항의 위치를 읽는다.

# 연관 문서

## 선수지식

- [멱급수](power-series.md)

## 더 알아보기

- [Euler–Maclaurin 공식](euler-maclaurin.md)

#analysis #complex_analysis #computation
