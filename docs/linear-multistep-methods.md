# 선형 다단계 방법

# 개요

**선형 다단계 방법(linear multistep method)** 은 [상미분방정식](ordinary-differential-equations.md)의 해를 한 걸음씩 근사할 때, 이미 지나온 여러 걸음의 값과 기울기를 일차결합해 다음 값을 정하는 방법이다. $x'=x$ 를 걸음 $0.1$ 로 풀면 중점 방법은 걸음마다 기울기를 두 번 새로 재는데, 직전 걸음의 기울기를 다시 쓰면 한 번만 재고도 오차가 비슷하다. 지나온 값을 다시 쓰는 공식은 계수를 잘못 고르면 작은 반올림 오차가 걸음마다 몇 배씩 불어난다. 공식의 계수로 만든 다항식의 근을 보면, 걸음을 줄일수록 참해에 수렴하는 공식인지 판정된다.

# 직관

[Runge–Kutta 방법](runge-kutta-methods.md)의 중점 방법은 걸음 가운데 $t_n+\tfrac h2$ 의 기울기로 한 걸음 간다. 그 기울기를 얻으려고 걸음마다 $f$ 를 두 번 계산한다. 그런데 직전 걸음의 기울기 $f\_{n-1}$ 과 지금의 기울기 $f_n$ 은 이미 있다. 두 기울기를 지나는 직선을 반 걸음 앞으로 늘이면 가운데 기울기의 어림이 나온다.

$$
f_n+\frac12\bigl(f_n-f\_{n-1}\bigr)=\frac32f_n-\frac12f\_{n-1}
$$

이 기울기로 한 걸음 가는 공식은 다음과 같다.

$$
x\_{n+1}=x_n+h\Bigl(\frac32f_n-\frac12f\_{n-1}\Bigr)
$$

걸음마다 새로 계산하는 것은 $f_n$ 하나다.

$x'=x$, $x_0=1$, $h=0.1$ 에서 $x_1=e^{0.1}\approx 1.105171$ 로 시작하면 다음이 나온다.

$$
x_2=1.105171+0.1\bigl(1.5\cdot 1.105171-0.5\cdot 1\bigr)\approx 1.220947
$$

참값 $e^{0.2}\approx 1.221403$ 과의 차는 $0.00046$ 이고, 중점 방법으로 두 걸음 간 $1.105^2=1.221025$ 의 차 $0.00038$ 과 비슷하다. $f$ 의 계산은 절반이다.

# 정의

## k 단계 방법

$x'=f(t,x)$ 를 걸음 $h$ 로 풀고 $f_m=f(t_m,x_m)$ 로 쓴다. 수 $\alpha_0,\dots,\alpha_k$ 와 $\beta_0,\dots,\beta_k$ 를 정하고 $\alpha_k=1$ 로 둔다. 앞의 $k$ 개 값에서 $x\_{n+k}$ 를 정하는 다음 식을 **$k$ 단계 선형 다단계 방법($k$-step linear multistep method)** 이라 한다.

$$
\sum\_{j=0}^k\alpha_jx\_{n+j}=h\sum\_{j=0}^k\beta_jf\_{n+j}
$$

$\beta_k=0$ 이면 우변에 $x\_{n+k}$ 가 들어가지 않아 **양함수(explicit)** 방법이고, 아니면 $x\_{n+k}$ 에 대한 방정식을 푸는 **음함수(implicit)** 방법이다. 처음 $k$ 개 값 $x_0,\dots,x\_{k-1}$ 은 다른 방법으로 구한다. 직관 절의 공식은 $k=2$, $\alpha=(0,-1,1)$, $\beta=(-\tfrac12,\tfrac32,0)$ 이다.

## 특성다항식

다음 두 다항식을 방법의 **첫째 특성다항식(first characteristic polynomial)** 과 **둘째 특성다항식(second characteristic polynomial)** 이라 한다.

$$
\rho(\zeta)=\sum\_{j=0}^k\alpha_j\zeta^j,\qquad\sigma(\zeta)=\sum\_{j=0}^k\beta_j\zeta^j
$$

직관 절의 공식은 $\rho(\zeta)=\zeta^2-\zeta$, $\sigma(\zeta)=\tfrac32\zeta-\tfrac12$ 이다.

## 대표적인 방법

- Adams–Bashforth 방법(Adams–Bashforth method). $\rho(\zeta)=\zeta^k-\zeta^{k-1}$ 인 양함수 방법이고, 지나온 $k$ 개 기울기의 보간 다항식을 한 걸음 적분한다. 직관 절의 공식이 $k=2$ 인 경우다.
- Adams–Moulton 방법(Adams–Moulton method). $\rho$ 는 같고 $f\_{n+k}$ 까지 보간하는 음함수 방법이다. $k=1$ 이면 다음 사다리꼴 규칙(trapezoidal rule)이다.

  $$
  x\_{n+1}=x_n+\frac h2\bigl(f_n+f\_{n+1}\bigr)
  $$
- 후진 차분 공식(backward differentiation formula). $\sigma(\zeta)=\beta_k\zeta^k$ 인 음함수 방법이고, $x\_{n+k}$ 에서의 기울기를 지나온 값들의 보간 다항식의 도함수로 맞춘다. $k=2$ 이면 다음과 같다.

  $$
  \frac32x\_{n+2}-2x\_{n+1}+\frac12x_n=hf\_{n+2}
  $$

## 차수와 근 조건

매끄러운 함수 $x(t)$ 에 대해 다음 값이 $O(h^{p+1})$ 이면 방법의 **차수(order)** 가 $p$ 다.

$$
\sum\_{j=0}^k\alpha_jx(t+jh)-h\sum\_{j=0}^k\beta_jx'(t+jh)
$$

$x$ 를 $t$ 에서 Taylor 전개하면, 차수가 $p$ 인 것은 $q=0,1,\dots,p$ 에 대해 $\sum_jj^q\alpha_j=q\sum_jj^{q-1}\beta_j$ 인 것과 동치다. $q=0,1$ 의 두 조건 $\rho(1)=0$, $\rho'(1)=\sigma(1)$ 을 만족하면 방법이 **일관(consistent)** 이라 한다.

$\rho$ 의 근이 모두 $\vert\zeta\vert\le 1$ 에 있고 $\vert\zeta\vert=1$ 인 근이 모두 단순근이면 방법이 **근 조건(root condition)** 을 만족한다고 하고, 이 방법을 **영안정(zero-stable)** 이라 한다. Adams 방법은 $\rho$ 의 근이 $1$ 과 $0$ 뿐이라 영안정이다.

# 성질

## 영안정이 아닌 방법

$k=2$ 인 양함수 방법 가운데 차수가 가장 높은 것은 다음이고 차수가 $3$ 이다.

$$
x\_{n+2}+4x\_{n+1}-5x_n=h\bigl(4f\_{n+1}+2f_n\bigr)
$$

$\rho(\zeta)=\zeta^2+4\zeta-5=(\zeta-1)(\zeta+5)$ 의 근 $-5$ 가 단위원 밖에 있다. $x'=0$, $x_0=1$ 에 쓰면 다음 점화식이 되고, 해는 $A+B(-5)^n$ 꼴이다.

$$
x\_{n+2}=-4x\_{n+1}+5x_n
$$

$x_1$ 에 $10^{-8}$ 의 오차만 넣어도 $x\_{14}\approx -9.17$, $x\_{17}\approx 1273$ 이 되어 참해 $1$ 에서 멀어진다.

## Dahlquist 동치 정리

처음 값의 오차가 $h\to 0$ 에서 $0$ 으로 가면 근사가 참해로 수렴하는 것을 방법이 **수렴(convergent)** 한다고 한다. 선형 다단계 방법이 수렴하는 것은 일관이고 영안정인 것과 동치다.[^1] 이것을 Dahlquist 동치 정리(Dahlquist equivalence theorem)라 한다. 편미분방정식의 차분법에서 같은 꼴의 정리가 [Lax 동치 정리](lax-equivalence-theorem.md)다.

증명의 요지. 영안정이 아니면 $\rho$ 에 $\vert\zeta_0\vert\gt 1$ 인 근이나 $\vert\zeta_0\vert=1$ 인 중근 $\zeta_0$ 이 있다. 앞의 경우 $x_n=h\zeta_0^n$, 뒤의 경우 $x_n=hn\zeta_0^n$ 은 처음 값이 $O(h)$ 인 $x'=0$ 의 근사인데, $t=nh$ 를 고정하고 $h\to 0$ 으로 보낼 때 $0$ 으로 가지 않는다. 일관이고 영안정이면 걸음마다 생기는 $O(h^{p+1})$ 오차가 근 조건 덕분에 합쳐도 $O(h^p)$ 로 머문다.

## Dahlquist 첫째 장벽

영안정인 $k$ 단계 방법의 차수는 $k$ 가 홀수이면 $k+1$ 이하, 짝수이면 $k+2$ 이하이고, 양함수이면 $k$ 이하다.[^1] 이것을 Dahlquist 첫째 장벽(first Dahlquist barrier)이라 한다. 위의 차수 $3$ 인 2 단계 양함수 방법이 영안정이 아닌 것이 이 장벽의 예다.

## Dahlquist 둘째 장벽

시험 방정식 $x'=\lambda x$ 에 쓰면 $x_n$ 은 $\rho(\zeta)-z\sigma(\zeta)=0$ 의 근 $\zeta$ 의 거듭제곱의 일차결합이다. 여기서 $z=h\lambda$ 다. $\mathrm{Re}\thinspace z\le 0$ 인 모든 $z$ 에서 이 근이 근 조건을 만족하면 방법을 **A-안정(A-stable)** 이라 한다. Runge–Kutta 방법 문서의 A-안정성과 같은 뜻이다.

A-안정인 선형 다단계 방법의 차수는 $2$ 이하이고, 차수 $2$ 인 A-안정 방법 가운데 오차 상수가 가장 작은 것은 사다리꼴 규칙이다.[^2] 이것을 Dahlquist 둘째 장벽(second Dahlquist barrier)이라 한다. 사다리꼴 규칙의 근은 다음과 같아, 음함수 중점 방법의 안정성 함수와 같은 식이다.

$$
\zeta=\frac{1+z/2}{1-z/2}
$$

## 후진 차분 공식의 안정성

후진 차분 공식은 $k$ 단계에서 차수가 $k$ 이고, $k\le 6$ 이면 영안정, $k\ge 7$ 이면 영안정이 아니다.[^1] $k=1$, $2$ 는 A-안정이다. $k=3,\dots,6$ 은 A-안정이 아니지만 음의 실수축 둘레의 넓은 부채꼴에서 근 조건을 만족한다.

# 활용

- 예측자와 수정자(predictor–corrector). Adams–Bashforth 방법으로 $x\_{n+k}$ 를 어림하고, 그 값을 Adams–Moulton 방법의 우변에 넣어 한 번 고친다. 음함수 방정식을 풀지 않고 음함수 방법의 차수를 얻는다.
- 강성(stiff) 방정식. 빨리 줄어드는 성분이 있는 계에서 후진 차분 공식을 쓰고, 걸음마다 음함수 방정식을 [Newton 법](newton-method.md)으로 푼다.
- 시작 값. 처음 $k$ 개 값은 같은 차수의 Runge–Kutta 방법으로 구한다.
- [열 방정식](heat-equation.md)을 공간에서만 이산화한 계. 사다리꼴 규칙으로 시간을 이산화한 것이 Crank–Nicolson 방법(Crank–Nicolson method)이다.

[^1]: E. Hairer, S. P. Nørsett, G. Wanner, *Solving Ordinary Differential Equations I: Nonstiff Problems*, 2nd ed., Springer (1993), III.2–III.4 절. 차수 조건, 근 조건, Dahlquist 동치 정리와 첫째 장벽, 후진 차분 공식의 영안정성.
[^2]: G. Dahlquist, "A special stability problem for linear multistep methods", *BIT Numerical Mathematics* 3 (1963), 27–43.

# 연관 문서

## 선수지식

- [Runge–Kutta 방법](runge-kutta-methods.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
