# Poisson 합 공식

# 개요

정수점 위에서 함수를 다 더한 값과, 그 Fourier 변환을 정수점 위에서 다 더한 값이 같다.

$$
\sum_{n\in\mathbb Z}f(n)=\sum_{k\in\mathbb Z}\hat f(k),
\qquad
\hat f(\xi)=\int_{-\infty}^{\infty}f(x)e^{-2\pi i x\xi}\thinspace dx
$$

좌변은 공간 쪽의 합, 우변은 진동수 쪽의 합이다. $f$ 가 폭 $\sigma$ 로 퍼져 있으면 $\hat f$ 는 폭 $1/\sigma$ 로 모여 있으므로, 한쪽 합의 수렴이 느리면 다른 쪽이 빠르다.

[Euler–Maclaurin](euler-maclaurin.md)은 합과 적분의 차이를 발산하는 도함수 급수로 전개하고 최적 절단에서 $e^{-2\pi N}$ 규모의 오차를 남긴다. Poisson 합은 그 차이를 $\sum_{k\ne0}\hat f(k)$ 로 정확히 준다. 하나는 점근 전개이고 하나는 항등식이다.

증명은 [Fourier 급수](fourier-series.md)의 수렴 정리를 한 점에서 읽는 것이다. 결과는 theta 함수의 변환식, $\zeta$ 의 함수방정식, 표본화 정리, 구 채우기의 상한에 닿는다.

# 직관

## 주기화

$f$ 를 정수만큼 평행이동해 전부 더한다.

$$
F(x)=\sum_{n\in\mathbb Z}f(x+n)
$$

$F$ 는 정의상 주기 1 이다. 주기함수이므로 Fourier 급수로 전개할 수 있고, 그 계수를 계산하면

$$
c_k=\int_0^1F(x)e^{-2\pi ikx}dx=\sum_n\int_0^1f(x+n)e^{-2\pi ikx}dx=\int_{-\infty}^{\infty}f(x)e^{-2\pi ikx}dx=\hat f(k)
$$

잘린 적분 구간들이 실선 전체로 이어 붙는다. 따라서 $F(x)=\sum_k\hat f(k)e^{2\pi ikx}$ 이고 $x=0$ 을 넣으면 Poisson 합 공식이다. 주기화의 Fourier 계수는 원래 함수의 Fourier 변환을 정수점에서 표본화한 값이다.

## theta 변환식

$f_t(x)=e^{-\pi x^{2}t}$ 를 넣으면 $\hat f_t(\xi)=t^{-1/2}e^{-\pi\xi^{2}/t}$ 이므로

$$
\theta(t)=\sum_ne^{-\pi n^{2}t}=\frac1{\sqrt t}\thinspace\theta\negthinspace\left(\frac1t\right)
$$

$t$ 가 크면 좌변이 항 몇 개로 끝나고 $t$ 가 작으면 우변이 그렇다. $t$ 와 $1/t$ 가운데 계산하기 쉬운 쪽을 고를 수 있다. 이 항등식이 [theta 급수](theta-series.md)의 모듈러 변환 $\tau\mapsto-1/\tau$ 이고, 모듈러성은 Fourier 쌍대성에서 온다.

## 사다리꼴 오차의 정체

간격 $h$ 의 사다리꼴로 $\int_{\mathbb R}f$ 를 근사하면 Poisson 합이 오차를 정확히 준다.

$$
h\sum_{n\in\mathbb Z}f(nh)-\int_{\mathbb R}f=\sum_{k\ne0}\hat f\negthinspace\left(\frac kh\right)
$$

$f$ 가 매끄러울수록 $\hat f$ 는 빨리 죽고, $f$ 가 해석적이면 $\hat f$ 가 지수적으로 죽어 오차가 $e^{-c/h}$ 규모가 된다.

# 정의

## 공식

$f:\mathbb R\to\mathbb C$ 가 충분히 좋으면

$$
\sum_{n\in\mathbb Z}f(n)=\sum_{k\in\mathbb Z}\hat f(k)
$$

판정 조건 하나는 다음이다. $f$ 가 연속이고, 어떤 $C,\varepsilon\gt 0$ 에 대해 $|f(x)|\le C(1+|x|)^{-1-\varepsilon}$ 이며 $|\hat f(\xi)|\le C(1+|\xi|)^{-1-\varepsilon}$ 이면 양변이 절대수렴하고 등식이 성립한다. Schwartz 함수는 물론 여기 들어간다.

## 스케일과 평행이동

$f_h(x)=f(x/h)$ 에 적용하면

$$
h\sum_{n}f(nh)=\sum_k\hat f\negthinspace\left(\frac kh\right),
\qquad
\sum_nf(n+x)=\sum_k\hat f(k)e^{2\pi ikx}
$$

앞의 것이 수치적분에서 쓰는 꼴이고 뒤의 것이 주기화의 Fourier 전개다.

## 일반 격자

[격자](lattices.md) $L\subset\mathbb R^{d}$ 와 쌍대격자 $L^{\ast}=\lbrace\mu:\langle\mu,\lambda\rangle\in\mathbb Z\ \forall\lambda\in L\rbrace$ 에 대해

$$
\sum_{\lambda\in L}f(\lambda)=\frac1{\mathrm{covol}(L)}\sum_{\mu\in L^{\ast}}\hat f(\mu)
$$

$L$ 이 촘촘하면 $L^{\ast}$ 는 성기다. 기본영역의 크기가 바뀌므로 부피 인자가 붙고, $L=\mathbb Z^{d}$ 이면 $\mathrm{covol}=1$ 이라 원래 공식이 된다.

# 성질

## 증명

감쇠 조건에서 $\sum_nf(x+n)$ 이 균등수렴하므로 $F$ 는 연속이고, $\sum_k|\hat f(k)|\lt\infty$ 이므로 $F$ 의 Fourier 급수가 절대수렴해 $F$ 에 균등수렴한다. 두 사실을 $x=0$ 에서 맞추면 증명이 끝난다. $\square$

조건을 빼면 등식이 깨진다. 연속이고 $\sum f(n)$ 과 $\sum\hat f(k)$ 가 모두 절대수렴하는데 등식이 성립하지 않는 예가 있다. Fourier 급수가 점별로 값을 복원한다는 보장이 없으면 이 논법이 통하지 않는다.

## Gauss 함수의 자기쌍대성

$e^{-\pi x^{2}}$ 는 $\hat f=f$ 를 만족하는 대표적인 함수다. Poisson 합을 적용하면

$$
\sum_ne^{-\pi n^{2}}=\sum_ke^{-\pi k^{2}}
$$

라는 자명한 등식이 나온다. 스케일 매개변수를 넣으면 $\theta(t)=t^{-1/2}\theta(1/t)$ 가 된다. 자기쌍대 함수에 대칭을 깨는 매개변수를 넣는 것이 이 공식에서 정보를 뽑는 방법이다.

같은 등식이 Gauss 함수 위 사다리꼴 규칙의 오차를 정확히 준다.

$$
h\sum_{j\in\mathbb Z}e^{-\pi(jh)^2}-1=2\sum_{k\ge1}e^{-\pi k^2/h^2}
$$

Euler–Maclaurin 의 보정항이 모두 0 이 되는 자리에서 남는 것이 이 오차다. $h$ 가 줄면 $e^{-\pi/h^2}$ 규모로 사라진다.

## 부호 조건과 격자 하한

$f$ 와 $\hat f$ 를 동시에 마음대로 정할 수는 없다. 양변에 부호 조건을 걸면 부등식이 나온다. $f\le0$ 을 원점 밖에서, $\hat f\ge0$ 을 모든 곳에서 요구하면

$$
0\ \ge\ \sum_{\lambda\ne0}f(\lambda)=\frac{\hat f(0)}{\mathrm{covol}(L)}-f(0)+\frac1{\mathrm{covol}(L)}\sum_{\mu\ne0}\hat f(\mu)\ \ge\ \frac{\hat f(0)}{\mathrm{covol}(L)}-f(0)
$$

에서 $\mathrm{covol}(L)\ge\hat f(0)/f(0)$ 이 나온다. 격자를 지정하지 않았으므로 이 하한은 모든 격자에 적용된다. 이것이 Cohn–Elkies 선형계획 한계이고, [구 채우기](sphere-packing.md)의 8 차원과 24 차원 해결은 이 부등식이 등호가 되게 하는 $f$ 를 구성한 것이다.

# 활용

## $\zeta$ 의 함수방정식

$\theta$ 의 변환식을 Mellin 변환으로 읽으면 함수방정식이 나온다. [감마 함수](gamma-function.md)를 써서

$$
\pi^{-s/2}\Gamma\negthinspace\left(\frac s2\right)\zeta(s)=\int_0^{\infty}\frac{\theta(t)-1}{2}\thinspace t^{s/2-1}dt
$$

로 쓰고 적분을 $t=1$ 에서 자른 뒤 앞쪽 조각에 $t\mapsto1/t$ 와 $\theta(1/t)=\sqrt t\thinspace\theta(t)$ 를 적용하면 $s\mapsto1-s$ 에 대해 대칭인 표현이 남는다. 이것이 Riemann 의 두 번째 증명이고 대칭의 근원은 Poisson 합이다. [소수 정리](prime-number-theorem.md)의 해석적 도구가 이 함수방정식 위에 선다.

## 표본화와 에일리어싱

$\hat f$ 가 $[-B,B]$ 밖에서 0 인 대역제한 함수를 간격 $h$ 로 표본화하면, 주기화된 스펙트럼 $\sum_k\hat f(\xi-k/h)$ 가 겹치지 않을 조건이 $1/h\ge2B$ 다. 이것이 Nyquist 조건이고 겹칠 때 생기는 왜곡이 에일리어싱이다. 이산 Fourier 변환이 연속 변환을 근사하는 정도도 같은 식으로 평가된다.

## 격자합의 빠른 계산

정전기 에너지 $\sum_{\lambda}1/|\lambda+r|$ 처럼 느리게 수렴하거나 조건수렴하는 격자합은 그대로 더할 수 없다. Ewald 합은 $1/|x|$ 를 감마 적분으로 쪼개 가까운 쪽은 실공간에서, 먼 쪽은 Poisson 으로 옮겨 쌍대격자에서 더한다. 분할 매개변수를 양쪽이 모두 지수적으로 수렴하도록 잡는다. 분자동역학과 결정 계산의 표준 기법이다.

## 대각합 공식의 가환판

$\mathbb R/\mathbb Z$ 위의 Laplace 작용소에서 좌변은 고윳값 쪽 합이고 우변은 닫힌 측지선 길이 쪽 합이다. 이 구조를 비가환군과 쌍곡곡면으로 일반화한 것이 [Selberg 대각합 공식](selberg-trace-formula.md)이다. Poisson 합은 스펙트럼과 기하를 잇는 공식의 가장 단순한 경우다.[^1]

[^1]: 표준 참고는 E. M. Stein, R. Shakarchi, *Fourier Analysis* 5 장과 H. Iwaniec, E. Kowalski, *Analytic Number Theory* 4 장. 선형계획 한계는 H. Cohn, N. Elkies, *New upper bounds on sphere packings I*, Ann. of Math. 157 (2003). 등식이 깨지는 반례는 Y. Katznelson, *An Introduction to Harmonic Analysis* 의 연습문제로 있다.

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)
- [Euler–Maclaurin 공식과 점근급수](euler-maclaurin.md)

## 더 알아보기

- [theta 급수](theta-series.md)
- [Mellin 변환과 Perron 공식](mellin-transform.md)

#analysis #number_theory #theorem
