# 지수 적분기

# 개요

**지수 적분기(exponential integrator)** 는 미분방정식의 선형 부분을 [행렬 지수](matrix-exponential.md)로 정확히 풀고 나머지만 근사하는 수치 방법이다. 온도 $x$ 가 바깥 온도 $\cos t$ 를 빠르게 따라가는 $x'=-50(x-\cos t)$ 를 양함수 [Euler 방법](euler-method.md)으로 풀면 걸음이 $0.04$ 를 넘을 때 숫자가 튄다. 지수 적분기는 $-50x$ 부분의 해 $e^{-50t}$ 를 그대로 쓰므로 걸음 $0.5$ 에서도 튀지 않고, 연립방정식을 풀지 않는다.

# 직관

[강성 방정식](stiff-equations.md) 문서의 예 $x'=-50(x-\cos t)$, $x(0)=0$ 을 걸음 $h=0.5$ 로 푼다. 참값은 $t=0.5,1,1.5,2$ 에서 $0.8868$, $0.5569$, $0.0907$, $-0.3978$ 이다.

한 걸음 동안 바깥 온도를 걸음 시작의 값 $\cos t_n$ 으로 고정하면 방정식은 $x'=-50(x-\cos t_n)$ 이고, 이 방정식은 정확히 풀린다. 차 $x-\cos t_n$ 이 $e^{-50h}$ 배가 되므로 다음이 나온다.

$$
x_{n+1}=e^{-50h}x_n+(1-e^{-50h})\cos t_n
$$

$e^{-25}$ 은 $10^{-10}$ 규모라 $x_{n+1}$ 은 거의 $\cos t_n$ 이다. 값은 $1.0000$, $0.8776$, $0.5403$, $0.0707$ 로 튀지 않지만, 참값보다 한 걸음씩 늦다. 바깥 온도를 걸음 시작의 값에 묶어 두었기 때문이다.

늦는 이유가 바깥 온도의 고정이니, 걸음 안에서 바깥 온도를 $\cos t_n$ 과 $\cos t_{n+1}$ 을 잇는 직선으로 바꾸어 다시 정확히 푼다. 값은 $0.8825$, $0.5538$, $0.0895$, $-0.3967$ 이고 참값과 소수 둘째 자리까지 맞는다. 선형 부분을 정확히 풀고 나머지만 다항식으로 근사하는 이런 방법을 지수 적분기라 한다.

# 정의

$L$ 이 상수 행렬이고 $N$ 이 나머지인 방정식 $x'=Lx+N(t,x)$ 를 푼다. [Duhamel 원리](duhamel-principle.md)로 한 걸음의 참해는 다음과 같다.

$$
x(t_n+h)=e^{hL}x(t_n)+\int_0^h e^{(h-s)L}N\bigl(t_n+s,x(t_n+s)\bigr)\thinspace ds
$$

**지수 적분기** 는 이 식에서 $e^{hL}$ 은 그대로 두고 적분 안의 $N$ 만 다항식으로 근사하는 방법이다. 다항식과 $e^{(h-s)L}$ 의 곱의 적분은 다음 $\varphi$ 함수(phi function)로 적힌다.

$$
\varphi_0(z)=e^z,\qquad \varphi_1(z)=\frac{e^z-1}{z},\qquad \varphi_2(z)=\frac{e^z-1-z}{z^2}
$$

일반적으로 $\varphi_k(z)=\sum_{j\ge 0}z^j/(j+k)!$ 이고, $z=0$ 에서 $\varphi_k(0)=1/k!$ 이다.

$N$ 을 걸음 시작의 값으로 고정한 방법을 **지수 Euler 방법(exponential Euler method)** 이라 한다.

$$
x_{n+1}=e^{hL}x_n+h\varphi_1(hL)N(t_n,x_n)
$$

직관 절의 첫 방법이 $L=-50$, $N=50\cos t$ 인 경우다. $h\varphi_1(-25)\cdot 50=1-e^{-25}$ 이다.

$N$ 을 걸음 양 끝을 잇는 직선으로 근사하고 끝의 값을 지수 Euler 방법의 예측값 $a\_n$ 으로 구한 방법이 2 차 지수 Runge–Kutta 방법(exponential time differencing Runge–Kutta, ETDRK2)이다[^1].

$$
x_{n+1}=a_n+h\varphi_2(hL)\bigl(N(t_{n+1},a_n)-N(t_n,x_n)\bigr)
$$

$a\_n=e^{hL}x_n+h\varphi_1(hL)N(t_n,x_n)$ 이다. 직관 절의 둘째 방법이 이것이고, 예에서는 $N$ 이 $x$ 에 의존하지 않아 $N(t_{n+1},a_n)=50\cos t_{n+1}$ 이다.

# 성질

## 선형 부분의 정확성

$N=0$ 이면 지수 적분기는 $x_{n+1}=e^{hL}x_n$ 이라 참해와 같다. 걸음 크기에 대한 제한이 $L$ 의 고윳값에서 오지 않으므로, $L$ 이 큰 음의 고윳값을 가진 강성 방정식에서 큰 걸음을 쓸 수 있다. $N$ 이 상수여도 참해와 같다.

[Runge–Kutta 방법](runge-kutta-methods.md)의 안정성 함수로 쓰면 시험 방정식 $x'=\lambda x$ 를 $L=\lambda$ 로 나눌 때 $R(z)=e^z$ 다. $\mathrm{Re}\thinspace z\lt 0$ 에서 $\vert R(z)\vert\lt 1$ 이고 $z\to-\infty$ 에서 $0$ 으로 가므로 L-안정 방법과 같은 감쇠를 보인다.

## 차수

지수 Euler 방법은 1 차, ETDRK2 는 2 차다. $L$ 이 고윳값의 크기가 큰 행렬이면 Taylor 전개의 오차 상수에 $\Vert L\Vert$ 가 들어가 차수가 실제보다 낮게 보일 수 있다. Hochbruck 과 Ostermann 은 $L$ 이 [해석 반군](analytic-semigroups.md)을 생성할 때 $\Vert L\Vert$ 에 의존하지 않는 오차 상한을 주는 차수 조건을 세웠다[^2].

## φ 함수의 계산

$z$ 가 $0$ 에 가까우면 $(e^z-1)/z$ 를 그대로 계산할 때 뺄셈에서 유효숫자를 잃는다. 작은 $z$ 에서는 급수나 유리 근사를 쓴다. $L$ 이 큰 행렬이면 $\varphi_k(hL)$ 을 만들지 않고 벡터와의 곱 $\varphi_k(hL)v$ 를 [행렬 함수의 Krylov 근사](krylov-approximation-of-matrix-functions.md)로 계산한다. $\varphi_1(hL)v$ 는 $(n+1)\times(n+1)$ 행렬 $\begin{pmatrix}hL&v\cr 0&0\end{pmatrix}$ 의 지수의 오른쪽 위 블록에 나타난다.

# 활용

- 반선형 편미분방정식. [열방정식](heat-equation.md)에 비선형 반응항이 붙은 반응확산 방정식을 주기 경계에서 [Fourier 급수](fourier-series.md)로 이산화하면 $L$ 이 대각행렬이 되어 $e^{hL}$ 과 $\varphi_k(hL)$ 이 성분별 지수로 계산된다. 높은 Fourier 모드일수록 $L$ 의 고윳값이 크게 음수여서 강성이 생긴다.
- [강성 방정식](stiff-equations.md)의 양함수 풀이. 음함수 방법이 걸음마다 비선형 연립방정식을 푸는 것과 달리, 지수 적분기는 $N$ 을 양함수로 다루고 강성은 $e^{hL}$ 이 맡는다.
- [Duhamel 원리](duhamel-principle.md)의 수치판. 바깥 입력이 있는 선형 방정식에서 입력을 걸음마다 다항식으로 근사한 것이 지수 적분기다.

[^1]: S. M. Cox and P. C. Matthews, "Exponential time differencing for stiff systems", *Journal of Computational Physics* 176 (2002), 430–455.
[^2]: M. Hochbruck and A. Ostermann, "Exponential integrators", *Acta Numerica* 19 (2010), 209–286.

# 연관 문서

## 선수지식

- [강성 방정식](stiff-equations.md)
- [Duhamel 원리](duhamel-principle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
