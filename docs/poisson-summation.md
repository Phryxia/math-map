# Poisson 합 공식

# 개요

**Poisson 합 공식(Poisson summation formula)** 은 정수점 위에서 함수를 다 더한 값과 그 [Fourier 변환](fourier-transform.md)을 정수점 위에서 다 더한 값이 같다는 항등식이다. 합 $\sum_n e^{-\pi n^2 t}$ 는 $t$ 가 작으면 항이 천천히 줄어 많은 항을 더해야 값이 나온다. Poisson 합 공식은 이 합을 Fourier 변환 쪽의 합 $t^{-1/2}\sum_k e^{-\pi k^2/t}$ 로 바꾸고, 그쪽은 $t$ 가 작을 때 첫 항만으로 값이 거의 정해진다.

# 직관

합 $\sum_{n\in\mathbb Z}e^{-\pi n^2 t}$ 를 $t=0.01$ 에서 구한다. $n=10$ 인 항이 $e^{-\pi}\approx 0.04$ 이고 $n=30$ 인 항이 $e^{-9\pi}\approx 5\times 10^{-13}$ 이므로, 앞의 수십 개 항을 더해야 값이 정해진다.

$f(x)=e^{-\pi x^2 t}$ 를 정수만큼 평행이동해 전부 더한 함수를 만든다.

$$
F(x)=\sum_{n\in\mathbb Z}f(x+n)
$$

구하는 합은 $F(0)$ 이다. $F$ 는 주기가 $1$ 이므로 [Fourier 급수](fourier-series.md)로 전개할 수 있다. 계수를 계산하면 $\lbrack 0,1\rbrack$ 위의 적분 조각들이 실선 전체의 적분으로 이어 붙고, 계수는 $f$ 의 [Fourier 변환](fourier-transform.md) $\hat f$ 의 정수점 값이다.

$$
c_k=\int_0^1F(x)e^{-2\pi ikx}dx=\sum_n\int_0^1f(x+n)e^{-2\pi ikx}dx=\int_{-\infty}^{\infty}f(x)e^{-2\pi ikx}dx=\hat f(k)
$$

그러므로 $F(x)=\sum_k\hat f(k)e^{2\pi ikx}$ 이고, $x=0$ 을 넣으면 $\sum_n f(n)=\sum_k\hat f(k)$ 다. 이 예에서 $\hat f(k)=t^{-1/2}e^{-\pi k^2/t}$ 이다. $t=0.01$ 이면 $k=0$ 항이 $10$ 이고 $k=\pm 1$ 항이 $10e^{-100\pi}$ 이므로, 처음 합은 첫 항 $10$ 과 $10^{-100}$ 보다 작은 차이로 같다.

# 정의

## 공식

$f:\mathbb R\to\mathbb C$ 의 Fourier 변환을 $\hat f(\xi)=\int_{-\infty}^{\infty}f(x)e^{-2\pi i x\xi}\thinspace dx$ 로 둔다. 다음 등식이 **Poisson 합 공식** 이다.

$$
\sum_{n\in\mathbb Z}f(n)=\sum_{k\in\mathbb Z}\hat f(k)
$$

판정 조건 하나는 다음이다. $f$ 가 연속이고, 어떤 $C,\varepsilon\gt 0$ 에 대해 $|f(x)|\le C(1+|x|)^{-1-\varepsilon}$ 이며 $|\hat f(\xi)|\le C(1+|\xi|)^{-1-\varepsilon}$ 이면 양변이 절대수렴하고 등식이 성립한다. Schwartz 함수(Schwartz function)도 이 조건을 만족한다. 직관 절의 $f(x)=e^{-\pi x^2t}$ 는 Schwartz 함수이고, 공식은 $\sum_ne^{-\pi n^2t}=t^{-1/2}\sum_ke^{-\pi k^2/t}$ 가 된다.

## 스케일과 평행이동

$f_h(x)=f(x/h)$ 에 적용하면

$$
h\sum_{n}f(nh)=\sum_k\hat f\negthinspace\left(\frac kh\right),
\qquad
\sum_nf(n+x)=\sum_k\hat f(k)e^{2\pi ikx}
$$

앞의 것이 수치적분에서 쓰는 꼴이고 뒤의 것이 주기화의 Fourier 전개다.

## 일반 격자

[격자](lattices.md) $L\subset\mathbb R^{d}$ 와 **쌍대격자(dual lattice)** $L^{\ast}=\lbrace\mu:\langle\mu,\lambda\rangle\in\mathbb Z\quad\forall\lambda\in L\rbrace$ 에 대해

$$
\sum_{\lambda\in L}f(\lambda)=\frac1{\mathrm{covol}(L)}\sum_{\mu\in L^{\ast}}\hat f(\mu)
$$

$\mathrm{covol}(L)$ 은 기본영역의 부피다. $L=\mathbb Z^{d}$ 이면 $\mathrm{covol}=1$ 이라 원래 공식이 된다. $d=1$, $L=2\mathbb Z$ 이면 $L^{\ast}=\tfrac12\mathbb Z$, $\mathrm{covol}(L)=2$ 이고 공식은 $\sum_nf(2n)=\tfrac12\sum_k\hat f(k/2)$ 다.

$L$ 이 촘촘하면 $L^{\ast}$ 는 성기다. 국소 콤팩트 아벨 군 $G$ 와 닫힌 부분군 $H$ 에서도 같은 꼴의 공식이 성립하고, 쌍대격자 자리에 [Pontryagin 쌍대성](pontryagin-duality.md)의 쌍대군에서 $H$ 를 소멸시키는 지표들의 군이 온다.

# 성질

## 판정 조건 아래의 증명

감쇠 조건에서 $\sum_nf(x+n)$ 이 [균등수렴](uniform-convergence.md)하므로 $F$ 는 연속이고, $\sum_k|\hat f(k)|\lt\infty$ 이므로 $F$ 의 Fourier 급수가 절대수렴해 $F$ 에 균등수렴한다. 두 사실을 $x=0$ 에서 맞추면 등식이 나온다.

조건을 빼면 등식이 깨진다. 연속이고 $\sum f(n)$ 과 $\sum\hat f(k)$ 가 모두 절대수렴하는데 등식이 성립하지 않는 예가 있다. Fourier 급수가 점별로 값을 복원한다는 보장이 없으면 이 논법이 통하지 않는다.

## Gauss 함수의 자기쌍대성

$e^{-\pi x^{2}}$ 는 $\hat f=f$ 를 만족하는 대표적인 함수다. Poisson 합을 적용하면

$$
\sum_ne^{-\pi n^{2}}=\sum_ke^{-\pi k^{2}}
$$

라는 자명한 등식이 나온다. 직관 절처럼 매개변수 $t$ 를 넣으면 $\theta(t)=t^{-1/2}\theta(1/t)$ 가 된다.

같은 등식이 Gauss 함수 위 사다리꼴 규칙의 오차를 정확히 준다.

$$
h\sum_{j\in\mathbb Z}e^{-\pi(jh)^2}-1=2\sum_{k\ge1}e^{-\pi k^2/h^2}
$$

[Euler–Maclaurin 공식](euler-maclaurin.md)의 보정항은 $e^{-\pi x^2}$ 의 모든 도함수가 $\pm\infty$ 에서 $0$ 이므로 모두 $0$ 이고, 남는 오차가 이 값이다. Euler–Maclaurin 공식이 합과 적분의 차이를 점근 전개로 주는 데 비해 Poisson 합 공식은 그 차이 $\sum_{k\ne0}\hat f(k)$ 를 등식으로 준다. $h$ 가 줄면 $e^{-\pi/h^2}$ 규모로 사라진다.

## 부호 조건과 격자 하한

$f$ 와 $\hat f$ 를 동시에 마음대로 정할 수는 없다. 양변에 부호 조건을 걸면 부등식이 나온다. $f\le0$ 을 원점 밖에서, $\hat f\ge0$ 을 모든 곳에서 요구하면

$$
0\quad\ge\quad\sum_{\lambda\ne0}f(\lambda)=\frac{\hat f(0)}{\mathrm{covol}(L)}-f(0)+\frac1{\mathrm{covol}(L)}\sum_{\mu\ne0}\hat f(\mu)\quad\ge\quad\frac{\hat f(0)}{\mathrm{covol}(L)}-f(0)
$$

에서 $\mathrm{covol}(L)\ge\hat f(0)/f(0)$ 이 나온다. 격자를 지정하지 않았으므로 이 하한은 모든 격자에 적용된다. 이것이 Cohn–Elkies 선형계획 한계(linear programming bound)이고, [구 채우기](sphere-packing.md)의 8 차원과 24 차원 해결은 이 부등식이 등호가 되게 하는 $f$ 를 구성한 것이다.

# 활용

## theta 변환식

$f_t(x)=e^{-\pi x^{2}t}$ 를 넣으면 $\hat f_t(\xi)=t^{-1/2}e^{-\pi\xi^{2}/t}$ 이므로 다음을 얻는다.

$$
\theta(t)=\sum_ne^{-\pi n^{2}t}=\frac1{\sqrt t}\thinspace\theta\negthinspace\left(\frac1t\right)
$$

$t$ 가 크면 좌변이 항 몇 개로 끝나고 $t$ 가 작으면 우변이 그렇다. $t$ 와 $1/t$ 가운데 계산하기 쉬운 쪽을 고를 수 있다. 이 항등식이 [theta 급수](theta-series.md)의 모듈러 변환 $\tau\mapsto-1/\tau$ 이고, 모듈러성은 Fourier 쌍대성에서 온다.

## ζ 의 함수방정식

$\theta$ 의 변환식을 [Mellin 변환](mellin-transform.md)으로 읽으면 함수방정식이 나온다. [감마 함수](gamma-function.md)를 써서

$$
\pi^{-s/2}\Gamma\negthinspace\left(\frac s2\right)\zeta(s)=\int_0^{\infty}\frac{\theta(t)-1}{2}\thinspace t^{s/2-1}dt
$$

로 쓰고 적분을 $t=1$ 에서 자른 뒤 앞쪽 조각에 $t\mapsto1/t$ 와 $\theta(1/t)=\sqrt t\thinspace\theta(t)$ 를 적용하면 $s\mapsto1-s$ 에 대해 대칭인 표현이 남는다. 이것이 Riemann 의 두 번째 증명이고, 대칭은 Poisson 합 공식에서 나온다. [Riemann zeta 함수](riemann-zeta.md)의 [해석적 연속](analytic-continuation.md)과 [소수 정리](prime-number-theorem.md)의 증명이 이 함수방정식을 쓴다.

## 표본화와 에일리어싱

$\hat f$ 가 $[-B,B]$ 밖에서 0 인 대역제한 함수를 간격 $h$ 로 표본화하면, 주기화된 스펙트럼 $\sum_k\hat f(\xi-k/h)$ 가 겹치지 않을 조건이 $1/h\ge2B$ 다. 이것이 [표본화 정리](sampling-theorem.md)의 Nyquist 조건(Nyquist condition)이고, 겹칠 때 생기는 왜곡이 에일리어싱(aliasing)이다. [이산 Fourier 변환](fourier.md)이 연속 변환을 근사하는 정도도 같은 식으로 평가된다.

## 사다리꼴 규칙의 오차

간격 $h$ 의 사다리꼴로 $\int_{\mathbb R}f$ 를 근사하면 Poisson 합이 오차를 정확히 준다.

$$
h\sum_{n\in\mathbb Z}f(nh)-\int_{\mathbb R}f=\sum_{k\ne0}\hat f\negthinspace\left(\frac kh\right)
$$

$f$ 가 매끄러울수록 $\hat f$ 는 빨리 작아지고, $f$ 가 해석적이면 $\hat f$ 가 지수적으로 작아져 오차가 $e^{-c/h}$ 규모가 된다.

## 격자합의 빠른 계산

정전기 에너지 $\sum_{\lambda}1/|\lambda+r|$ 처럼 느리게 수렴하거나 조건수렴하는 격자합은 그대로 더할 수 없다. Ewald 합(Ewald summation)은 $1/|x|$ 를 감마 적분으로 쪼개 가까운 쪽은 실공간에서, 먼 쪽은 Poisson 으로 옮겨 쌍대격자에서 더한다. 분할 매개변수를 양쪽이 모두 지수적으로 수렴하도록 잡는다. 분자동역학과 결정 계산의 표준 기법이다.

## 대각합 공식의 가환판

$\mathbb R/\mathbb Z$ 위의 [Laplace 연산자](laplace-operator.md)에서 좌변은 고윳값 쪽 합이고 우변은 닫힌 측지선 길이 쪽 합이다. 이 구조를 비가환군과 쌍곡곡면으로 일반화한 것이 [Selberg 대각합 공식](selberg-trace-formula.md)이다. Poisson 합은 스펙트럼과 기하를 잇는 공식의 가장 단순한 경우다.[^1]

[^1]: 표준 참고는 E. M. Stein, R. Shakarchi, *Fourier Analysis* 5 장과 H. Iwaniec, E. Kowalski, *Analytic Number Theory* 4 장. 선형계획 한계는 H. Cohn, N. Elkies, *New upper bounds on sphere packings I*, Ann. of Math. 157 (2003). 등식이 깨지는 반례는 Y. Katznelson, *An Introduction to Harmonic Analysis* 의 연습문제로 있다.

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)
- [Euler–Maclaurin 공식](euler-maclaurin.md)
- [Pontryagin 쌍대성](pontryagin-duality.md)

## 더 알아보기

- [theta 급수](theta-series.md)
- [Mellin 변환](mellin-transform.md)
- [표본화 정리](sampling-theorem.md)
- [Gauss 원 문제](gauss-circle-problem.md)

#analysis #number_theory #theorem
