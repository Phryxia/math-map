# 강성 방정식

# 개요

**강성 방정식(stiff equation)** 은 해 자체는 천천히 변하는데, 그 근처로 끌려가는 성분이 매우 빨리 줄어드는 [상미분방정식](ordinary-differential-equations.md)이다. 온도 $x$ 가 바깥 온도 $\cos t$ 를 빠르게 따라가는 $x'=-50(x-\cos t)$ 에서, 처음 잠깐을 빼면 해는 거의 $\cos t$ 라 걸음 $0.5$ 로도 충분히 그릴 수 있다. 그런데 양함수 Euler 방법은 걸음이 $0.04$ 를 넘으면 숫자가 튄다. 걸음의 크기가 정확도가 아니라 안정성으로 묶이는 이런 방정식은, 빨리 줄어드는 성분을 큰 걸음에서도 줄여 주는 음함수 방법으로 푼다.

# 직관

$x'=-50(x-\cos t)$, $x(0)=0$ 의 참해는 다음과 같다.

$$
x(t)=\frac{2500\cos t+50\sin t}{2501}-\frac{2500}{2501}e^{-50t}
$$

둘째 항은 $t=0.1$ 이면 $0.007$ 이하라, 그 뒤의 해는 $\cos t$ 에 가까운 매끄러운 곡선이다. [Runge–Kutta 방법](runge-kutta-methods.md) 문서의 Euler 방법으로 풀면 걸음마다 $\cos t$ 와의 차가 $1-50h$ 배가 된다. $h=0.03$ 이면 $-0.5$ 배라 $t=1.5$ 에서 $0.09068$ 로 참값 $0.09065$ 와 맞는다. $h=0.05$ 이면 $-1.5$ 배라 $t=1.5$ 에서 $-191770$ 이 된다.

차가 걸음마다 $-1.5$ 배로 커져서 터졌으니, 끝점의 기울기로 가는 음함수 Euler 방법을 쓴다. 이때 차는 걸음마다 $1/(1+50h)$ 배라 어느 $h$ 에서도 줄어든다. $h=0.5$ 로 $t=0.5,1,1.5,2$ 에서 $0.8438$, $0.5520$, $0.0892$, $-0.3967$ 이 나오고, 참값 $0.8868$, $0.5569$, $0.0907$, $-0.3978$ 과 가깝다.

# 정의

## 강성

$x'=f(t,x)$ 의 해 근처에서 Jacobi 행렬(Jacobian matrix) $\partial f/\partial x$ 의 [고윳값](eigenvalues.md) $\lambda_i$ 가 모두 실수부가 음수이고, 그 가운데 $\vert\mathrm{Re}\thinspace\lambda_i\vert$ 가 해를 보려는 시간 길이의 역수보다 훨씬 큰 것이 있으면 방정식을 **강성(stiff)** 이라 한다. 직관 절의 방정식은 고윳값이 $-50$ 이고 해가 변하는 시간 척도가 $1$ 이다. 고윳값의 실수부 절댓값의 최댓값과 최솟값의 비를 강성비(stiffness ratio)라 부르기도 하지만, 강성은 수 하나로 정해지는 성질이 아니라 양함수 방법의 걸음이 정확도보다 안정성으로 먼저 묶이는 현상을 가리킨다.[^1]

## L-안정성

Runge–Kutta 방법 문서의 안정성 함수 $R$ 에 대해, 방법이 A-안정이고 다음을 만족하면 **L-안정(L-stable)** 이라 한다.

$$
\lim\_{z\to-\infty}R(z)=0
$$

음함수 Euler 방법은 $R(z)=1/(1-z)$ 라 L-안정이다. 음함수 중점 방법과 [선형 다단계 방법](linear-multistep-methods.md)의 사다리꼴 규칙은 $R(z)=(1+z/2)/(1-z/2)\to -1$ 이라 A-안정이지만 L-안정이 아니다.

## 단조 조건과 B-안정성

내적 $\langle\cdot,\cdot\rangle$ 과 그 노름에서 모든 $t$, $x$, $y$ 에 대해 다음이 성립하면 $f$ 가 **단조 조건(monotonicity condition)** 을 만족한다고 한다.

$$
\bigl\langle f(t,x)-f(t,y),\thinspace x-y\bigr\rangle\le 0
$$

이때 참해 두 개 사이의 거리는 시간에 따라 늘지 않는다. [로그 노름](logarithmic-norm.md)으로 쓰면 Jacobi 행렬의 2 노름 로그 노름이 $0$ 이하인 것이다. 이 조건을 만족하는 모든 $f$ 와 모든 $h\gt 0$ 에서 수치해 두 개 사이의 거리가 걸음마다 늘지 않는 Runge–Kutta 방법을 **B-안정(B-stable)** 이라 한다.[^2] $\mathrm{Re}\thinspace\lambda\le 0$ 인 $f(t,x)=\lambda x$ 가 단조 조건을 만족하므로, B-안정인 방법은 A-안정이다.

# 성질

## 사다리꼴 규칙의 진동

직관 절의 방정식을 사다리꼴 규칙으로 $h=0.5$ 에 풀면 $\cos t$ 와의 차가 걸음마다 다음 배가 된다.

$$
R(-25)=\frac{1-12.5}{1+12.5}\approx -0.852
$$

차가 부호를 바꾸며 천천히 줄어, $t=0.5,1,1.5,2$ 에서 $1.7385$, $-0.1681$, $0.7090$, $-0.9238$ 이 나온다. 참해의 빠른 성분은 $t=0.5$ 에 이미 $e^{-25}$ 배인데 수치해에는 $0.852^n$ 배로 남는다. A-안정은 이 성분이 커지지 않는다는 것만 보장하고, 큰 걸음에서 줄어든다는 것은 L-안정이 보장한다.

## 양함수 방법의 걸음 제한

양함수 Runge–Kutta 방법의 안정 영역은 유계이므로, 실수 고윳값 $\lambda\lt 0$ 에 대해 $h\vert\lambda\vert\le c$ 가 필요하다. $c$ 는 Euler 방법에서 $2$, 고전 4 차 방법에서 약 $2.785$ 다. 걸음 수는 $\vert\lambda\vert$ 에 비례하고, 해가 매끄러워져도 줄지 않는다.

## 대수적 안정성

$s$ 단 Runge–Kutta 방법의 계수 $A=(a\_{ij})$, $b=(b_i)$ 와 $B=\mathrm{diag}(b_1,\dots,b_s)$ 로 다음 행렬을 만든다.

$$
M=BA+A^{\mathsf T}B-bb^{\mathsf T}
$$

모든 $b_i\ge 0$ 이고 $M$ 이 양의 준정부호이면 방법을 **대수적 안정(algebraically stable)** 이라 하고, 대수적 안정인 방법은 B-안정이다.[^2] $s$ 단 Gauss 방법은 $M=0$ 이라 대수적 안정이다. 음함수 중점 방법은 $A=(\tfrac12)$, $b=(1)$ 이라 $M=\tfrac12+\tfrac12-1=0$ 이다.

## 음함수 방법의 비용

음함수 방법은 걸음마다 $x\_{n+1}$ 에 대한 비선형 방정식을 푼다. 고정점 반복은 수렴하려면 대략 $h\vert\lambda\vert\lt 1$ 이어야 해서 양함수 방법과 같은 제한이 돌아온다. 그래서 Jacobi 행렬을 쓰는 [Newton 법](newton-method.md)으로 풀고, 걸음마다 $I-h\gamma J$ 꼴의 연립방정식을 푼다.

# 활용

- 화학 반응 속도론. 반응 속도 상수가 여러 자릿수에 걸쳐 흩어진 계가 대표적인 강성 문제이고, 후진 차분 공식이나 L-안정인 음함수 Runge–Kutta 방법으로 푼다.[^1]
- 편미분방정식의 선의 방법(method of lines). [열방정식](heat-equation.md)을 격자 간격 $h$ 로 공간만 이산화하면 가장 큰 고윳값이 $4/h^2$ 규모라 강성이다. [Crank–Nicolson 방법](crank-nicolson-method.md)은 사다리꼴 규칙이라 큰 걸음에서 격자 진동이 남고, 뒤 Euler 차분은 남지 않는다.
- 회로와 제어. 시상수가 크게 다른 소자가 섞인 회로의 과도 응답을 음함수 방법으로 계산한다.

[^1]: E. Hairer, G. Wanner, *Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems*, 2nd ed., Springer (1996), IV.1–IV.3 절. 강성의 정의와 예, 안정 영역, L-안정성.
[^2]: J. C. Butcher, "A stability property of implicit Runge–Kutta methods", *BIT Numerical Mathematics* 15 (1975), 358–361. 대수적 안정성은 K. Burrage, J. C. Butcher, "Stability criteria for implicit Runge–Kutta methods", *SIAM Journal on Numerical Analysis* 16 (1979), 46–57.

# 연관 문서

## 선수지식

- [Runge–Kutta 방법](runge-kutta-methods.md)
- [로그 노름](logarithmic-norm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
