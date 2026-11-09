# Euler–Maclaurin 공식

# 개요

**Euler–Maclaurin 공식(Euler–Maclaurin formula)** 은 유한합과 적분의 차이를 도함수의 급수로 전개한다. $1+\frac12+\frac13+\cdots+\frac1{1000}$ 을 계산하려면 천 개의 항을 더해야 하지만, 적분 $\int_1^{1000}dx/x=\ln 1000$ 은 한 번에 나온다. Euler–Maclaurin 공식은 합과 적분의 차이를 양 끝에서의 도함수 값 몇 개로 적어, 합을 적분과 보정항으로 계산하게 한다.

# 직관

$1^2+2^2+\cdots+10^2=385$ 를 적분으로 어림한다. $\int_1^{10}x^2dx=333$ 은 $52$ 만큼 모자란다. 합은 높이 $f(a)$ 인 막대 열 개이고, 적분은 $x=1$ 부터 $x=10$ 까지 곡선 아래 넓이라서 양 끝의 막대가 절반씩 빠진다.

양 끝 값의 절반 $\frac{f(1)+f(10)}2=50.5$ 를 더하면 $383.5$ 이고 아직 $1.5$ 가 모자란다. 합에서 양 끝 값의 절반을 뺀 $334.5$ 는 각 칸 $\lbrack a,a+1\rbrack$ 에서 두 끝점을 잇는 선분 아래 넓이를 더한 값, 곧 사다리꼴 규칙(trapezoidal rule)의 값이다. 곡선 $x^2$ 가 선분 아래로 처지므로 이 값이 적분 $333$ 보다 $1.5$ 크고, 모자란 $1.5$ 가 이 차이다.

한 칸 $\lbrack 0,1\rbrack$ 에서 선분과 곡선의 차이를 부분적분으로 적는다. $B_1(x)=x-\frac12$ 로 두면

$$
\frac{f(0)+f(1)}2-\int_0^1 f(x)\thinspace dx=\int_0^1 B_1(x)f'(x)\thinspace dx
$$

이다. 오른쪽을 한 번 더 부분적분하면 $\frac1{12}(f'(1)-f'(0))$ 과 $f''$ 가 들어간 적분이 남는다. 칸을 $1$ 부터 $10$ 까지 이어 더하면 안쪽 끝점의 $f'$ 값이 서로 지워지고 $\frac1{12}(f'(10)-f'(1))=\frac{18}{12}=1.5$ 가 남는다. $f''=2$ 가 상수이고 남은 적분의 가중치는 칸마다 적분이 $0$ 이므로 그 항은 $0$ 이고, $333+50.5+1.5=385$ 가 정확히 나온다.

일반적인 $f$ 에서는 남은 적분을 다시 부분적분할 때마다 홀수 계 도함수의 양 끝 값 차이가 하나씩 나오고, 그 앞의 상수가 [Bernoulli 수](bernoulli-numbers.md) $B_2,B_4,B_6,\dots$ 를 계승으로 나눈 값이다. 이 되풀이를 $K$ 단계까지 적은 등식이 Euler–Maclaurin 공식이다.

# 정의

## 주기 Bernoulli 함수

Bernoulli 다항식(Bernoulli polynomial) $B_n(x)$ 를 주기 1 로 반복시킨 함수

$$
\tilde B_n(x)=B_n(x-\lfloor x\rfloor)
$$

를 **주기 Bernoulli 함수(periodic Bernoulli function)** 라 한다. $B_1(x)=x-\frac12$, $B_2(x)=x^2-x+\frac16$ 이고, $B_n'(x)=nB_{n-1}(x)$ 와 $n\ge1$ 일 때의 $\int_0^1 B_n(x)\thinspace dx=0$ 이 성립한다. $n\ge2$ 면 $B_n(0)=B_n(1)=B_n$ 이므로 $\tilde B_n$ 은 연속이고, $\tilde B_1$ 만 정수점에서 끊긴다. 직관 절의 부분적분에 쓴 가중치가 $\tilde B_1$ 과 $\tilde B_2$ 다.

## Euler–Maclaurin 공식

$M\lt N$ 이 정수이고 $f$ 가 $\lbrack M,N\rbrack$ 에서 $2K$ 번 연속미분가능하면 다음 등식이 성립한다.

$$
\sum_{a=M}^{N}f(a)
=\int_M^{N}f+\frac{f(M)+f(N)}2
+\sum_{k=1}^{K}\frac{B_{2k}}{(2k)!}\Big(f^{(2k-1)}(N)-f^{(2k-1)}(M)\Big)+R_K
$$

$$
R_K=-\frac1{(2K)!}\int_M^{N}\tilde B_{2K}(x)\thinspace f^{(2K)}(x)\thinspace dx
$$

$R_K$ 를 나머지항(remainder term)이라 한다. 나머지항이 명시적 적분이므로 각 $K$ 마다 등식이 정확하다.

직관 절의 $f(x)=x^2$, $M=1$, $N=10$, $K=1$ 에서는 $B_2/2!=\frac1{12}$ 이고 $R_1=-\frac12\int_1^{10}2\tilde B_2(x)\thinspace dx=0$ 이므로 $385=333+50.5+1.5$ 가 이 등식이다.

## 점근전개

보정항의 급수는 $K\to\infty$ 에서 대개 발산하고, $K$ 를 고정한 채 $N$ 을 키울 때 오차가 마지막 항보다 작아진다. 이 공식이 주는 전개는 수렴급수가 아니라 [점근급수](asymptotic-series.md)이고, 이것을 Euler–Maclaurin 점근전개(asymptotic expansion)라 한다. 전부 더해야 값이 되는 [멱급수](power-series.md)와 쓰는 법이 다르다.

# 성질

## 공식의 유도

한 칸 $\lbrack 0,1\rbrack$ 에서 $B_1(x)=x-\tfrac12$ 로 [부분적분](fundamental-calculus.md)하면 다음을 얻는다.

$$
\frac{f(0)+f(1)}2-\int_0^1 f(x)\thinspace dx=\int_0^1 B_1(x)f'(x)\thinspace dx
$$

좌변은 사다리꼴 규칙의 오차다. $B_1=\tfrac12 B_2'$ 이고 $B_2(0)=B_2(1)=B_2$ 이므로 우변을 다시 부분적분할 수 있다.

$$
\int_0^1 B_1f'=\frac{B_2}{2}\big(f'(1)-f'(0)\big)-\frac12\int_0^1 B_2(x)f''(x)\thinspace dx
$$

첫 항 $\tfrac1{12}(f'(1)-f'(0))$ 이 사다리꼴 오차의 주항이다. 남은 적분을 $K$ 번까지 되풀이하고 칸을 $M$ 부터 $N$ 까지 더하면 공식과 나머지항이 나온다. $n\ge3$ 이 홀수면 $B_n=0$ 이므로 보정항에는 홀수 계 도함수만 남는다.

## 주기 Bernoulli 함수의 Fourier 전개

$\tilde B_n$ 의 [Fourier 급수](fourier-series.md) 전개는 다음과 같다.

$$
\tilde B_n(x)=-\frac{n!}{(2\pi i)^{n}}\sum_{m\ne0}\frac{e^{2\pi imx}}{m^{n}}
$$

$x=0$, $n=2k$ 를 넣으면 계수의 크기가 나온다.

$$
\frac{\vert B_{2k}\vert}{(2k)!}=\frac{2\zeta(2k)}{(2\pi)^{2k}}\thickspace\approx\thickspace\frac{2}{(2\pi)^{2k}}
$$

## 나머지항의 크기

$\tilde B_{2K}$ 의 최댓값이 정수점에서 나오므로 $\max_x\vert\tilde B_{2K}(x)\vert=\vert B_{2K}\vert$ 이고

$$
\vert R_K\vert\le\frac{\vert B_{2K}\vert}{(2K)!}\int_M^{N}\big\vert f^{(2K)}(x)\big\vert\thinspace dx
=\frac{2\zeta(2K)}{(2\pi)^{2K}}\int_M^{N}\big\vert f^{(2K)}\big\vert
$$

이다. $f^{(2K)}$ 가 구간에서 부호를 바꾸지 않으면 다음이 성립하므로 우변이 급수의 다음 항의 크기다.

$$
\int\vert f^{(2K)}\vert=\vert f^{(2K-1)}(N)-f^{(2K-1)}(M)\vert
$$

곧 나머지는 첫 번째로 버린 항보다 크지 않다.

$f=x^{-s}$, $f=\log x$, $f=e^{-x}$ 처럼 도함수의 부호가 일정한 함수에 이 판정이 적용된다. 다음 항 하나를 더 계산하면 오차의 상한을 얻는다.

## 최적 절단과 초점근 정확도

$f=\log x$ 이면 $f^{(2k-1)}(x)=(2k-2)!/x^{2k-1}$ 이므로 $N$ 쪽 항의 크기는 $t_k\approx 2(2k-2)!\thinspace(2\pi N)^{-2k}N$ 이다. $t_{k+1}/t_k\approx (2k)(2k-1)/(2\pi N)^2$ 이므로 비가 1 이 되는 곳이

$$
k^{\ast}\approx\pi N,\qquad t_{k^{\ast}}\thickspace\sim\thickspace e^{-2\pi N}
$$

이다. 이 자리에서 끊는 것을 최적 절단(optimal truncation)이라 하고, 그때의 오차 규모를 초점근(superasymptotic) 정확도라 한다.

앞의 인자 $(2\pi)^{-2k}$ 는 기하급수적으로 작아지지만 고계 도함수는 보통 계승 속도로 커진다. 계승은 어떤 기하급수보다 빨리 커지므로 급수의 수렴반경은 $0$ 이다. $N$ 을 두 배로 늘리면 지수가 두 배가 되므로 정확도는 항을 더 더해서가 아니라 $N$ 을 키워서 올린다.

## 지수적으로 작은 항

점근전개가 놓치는 지수적으로 작은 항이 이 공식에서는 최적 절단에 남는 오차 $e^{-2\pi N}$ 이다. 나머지항 적분이 그 크기를 주고, 이런 항의 크기가 바뀌는 현상이 [Stokes 현상](stokes-phenomenon.md)이다.

## 주기함수 위의 사다리꼴 규칙

$f$ 가 주기 $N-M$ 인 매끄러운 함수면 모든 $k$ 에 대해 $f^{(2k-1)}(N)=f^{(2k-1)}(M)$ 이므로 보정항이 전부 0 이 된다. 남는 것은 나머지항뿐이고, 한 주기를 간격 $h$ 로 나눈 사다리꼴 규칙의 오차는

$$
R_K=O\negthinspace\left(h^{2K}\right)\quad\text{모든 }K
$$

이다. 곧 오차가 모든 차수보다 빨리 감소한다. $f$ 가 해석적이면 감소는 지수적이다. 일반적으로 2 차 정확도인 사다리꼴 규칙이 주기함수 위에서는 고차 공식보다 정확하며, [이산 Fourier 변환](fourier.md) 계산과 격자합에서 표준으로 쓰인다.

# 활용

## ζ(s) 의 고정밀 계산

급수 $\sum n^{-s}$ 는 $s$ 가 1 에 가까우면 수렴이 느리고 $\mathrm{Re}\thinspace s\le1$ 에서는 발산한다. 앞의 $N-1$ 항을 직접 더하고 꼬리를 Euler–Maclaurin 공식으로 바꾸면 두 문제가 함께 풀린다.

$$
\zeta(s)=\sum_{n=1}^{N-1}\frac1{n^{s}}
+\frac{N^{1-s}}{s-1}+\frac1{2N^{s}}
+\sum_{k=1}^{K}\frac{B_{2k}}{(2k)!}\thinspace\frac{\Gamma(s+2k-1)}{\Gamma(s)}\thinspace N^{-s-2k+1}+R_K
$$

$N$ 을 고정하고 $K$ 를 늘리면 오차가 $K\approx\pi N$ 에서 최소가 되고 그 뒤로 다시 커진다. $N=4$ 이면 최적 절단이 $k^\ast\approx12.6$ 이고 그 자리의 오차가 $e^{-8\pi}$ 규모다.

## Stirling 급수

$f=\log x$ 에 공식을 적용하면 $\log n!$ 의 전개가 나온다. 정수를 벗어나 [감마 함수](gamma-function.md)로 쓰면 다음 Stirling 급수(Stirling series)를 얻는다.

$$
\log\Gamma(x)=\Big(x-\tfrac12\Big)\log x-x+\tfrac12\log2\pi
+\sum_{k=1}^{K}\frac{B_{2k}}{2k(2k-1)\thinspace x^{2k-1}}+R_K
$$

$\tfrac12\log2\pi$ 는 공식이 주지 않고 Wallis 곱(Wallis product)이나 [유수 계산](residue-theorem.md)으로 따로 정한다. 최적 절단은 $k^{\ast}\approx\pi x$ 이고 최소 오차는 $e^{-2\pi x}$ 다. $x$ 가 작으면 $\log\Gamma(x+m)$ 을 이 급수로 계산한 뒤 $\Gamma(x+1)=x\Gamma(x)$ 를 $m$ 번 써서 $\log\Gamma(x)$ 를 얻는다.

## Euler 상수

$f=1/x$ 로 두면

$$
\sum_{a=1}^{n}\frac1a=\log n+\gamma+\frac1{2n}-\sum_{k=1}^{K}\frac{B_{2k}}{2k\thinspace n^{2k}}+R_K
$$

이다. [Euler–Mascheroni 상수](euler-mascheroni-constant.md) $\gamma$ 는 공식이 만들어 내는 적분상수이고, 이 식이 $\gamma$ 를 고정밀로 얻는 표준 방법이다. $n=10$, $K=6$ 에서 오차가 $10^{-15}$ 규모다. 전개는 조화수와 $\log n$ 의 차이를 모든 차수로 준다.

## 격자합과 이산화 오차

격자 위의 합을 적분으로 바꿀 때 생기는 보정이 이 공식이다. 격자 간격 $h$ 로 쓰면 보정항이 $h^{2k}$ 의 급수가 되고, 낮은 차수 항을 소거하는 것이 [Richardson 외삽](richardson-extrapolation.md)과 Romberg 적분(Romberg integration)이다. 경계에서 도함수가 일치하는 경우, 곧 주기 경계, 급감쇠 함수, 변수변환으로 끝을 누른 tanh–sinh 구적법(tanh–sinh quadrature)에서는 보정항이 사라져 지수적 정확도가 나온다. 공식은 이산화 오차를 경계항으로 국소화한다[^1].

[^1]: 표준 참고는 N. G. de Bruijn, *Asymptotic Methods in Analysis* 3 장과 R. L. Graham, D. E. Knuth, O. Patashnik, *Concrete Mathematics* 9.5 절. $\zeta$ 의 Euler–Maclaurin 계산은 H. Cohen, *Number Theory II: Analytic and Modern Tools* 10.3 절에 정리되어 있다.

# 연관 문서

## 선수지식

- [Bernoulli 수](bernoulli-numbers.md)
- [점근급수](asymptotic-series.md)

## 더 알아보기

- [감마 함수](gamma-function.md)
- [Poisson 합 공식](poisson-summation.md)
- [Richardson 외삽](richardson-extrapolation.md)

#analysis #computation #number_theory
