# Rosenbrock 방법

# 개요

**Rosenbrock 방법(Rosenbrock method)** 은 강성 미분방정식을 풀 때 걸음마다 비선형 방정식 대신 연립일차방정식 몇 개만 푸는 수치 방법이다. $x'=-50x(x-1)$ 을 $x(0)=2$ 에서 걸음 $0.5$ 로 풀면 양함수 [Euler 방법](euler-method.md)은 첫 걸음에 $-48$ 로 튀고, 음함수 Euler 방법은 튀지 않지만 걸음마다 이차방정식을 [Newton 법](newton-method.md)으로 여러 번 반복해 풀어야 한다. Rosenbrock 방법은 그 Newton 반복을 한 번에서 멈추고, 멈추어도 안정하도록 계수를 고른다.

# 직관

$x'=f(x)=-50x(x-1)$ 의 해는 빠르게 $1$ 로 간다. $x=1$ 근처에서 $f'(x)\approx -50$ 이라 [강성 방정식](stiff-equations.md)이다.

음함수 Euler 방법은 다음 식을 $x_{n+1}$ 에 대해 푼다.

$$
x_{n+1}=x_n+hf(x_{n+1})
$$

$x_0=2$, $h=0.5$ 에서 이 방정식을 $x_n$ 을 초깃값으로 Newton 법으로 풀면 반복값이 $1.3421$, $1.0911$, $1.0395$, $1.0371$, $1.03714$ 로 다섯 번 만에 맞는다. 반복마다 $f'$ 을 계산하고 일차방정식을 하나 푼다.

첫 반복값 $1.3421$ 에서 멈추면 계산은 다음 한 식이다.

$$
x_{n+1}=x_n+\frac{hf(x_n)}{1-hf'(x_n)}
$$

이 식을 걸음마다 쓰면 $1.3421$, $1.0758$, $1.0074$, $1.0003$ 으로 튀지 않고 $1$ 에 다가간다. 음함수 Euler 방법의 $1.0371$, $1.0014$, $1.0001$ 보다 느리지만 걸음마다 일차방정식 하나로 끝난다. 이 방법을 선형 음함수 Euler 방법이라 하고, 단을 늘려 차수를 올린 것이 Rosenbrock 방법이다.

# 정의

$x'=f(x)$ 에서 $J=f'(x\_n)$ 을 Jacobi 행렬(Jacobian matrix)이라 한다. $s$ 단 **Rosenbrock 방법** 은 계수 $\alpha\_{ij}$, $\gamma\_{ij}$, $b\_i$ 와 $\gamma\gt 0$ 에 대해 $i=1,\dots,s$ 의 순서로 다음 연립일차방정식을 풀어 $k\_i$ 를 구하는 방법이다[^1].

$$
(I-h\gamma J)\thinspace k_i=hf\Bigl(x_n+\sum_{j\lt i}\alpha_{ij}k_j\Bigr)+hJ\sum_{j\lt i}\gamma_{ij}k_j
$$

다음 값은 $x\_{n+1}=x\_n+\sum\_i b\_ik\_i$ 다. 모든 단의 계수행렬이 $I-h\gamma J$ 하나이므로 LU 분해(lower–upper decomposition)를 걸음마다 한 번만 한다.

$s=1$, $\gamma=1$, $b\_1=1$ 이면 $(I-hJ)k\_1=hf(x\_n)$ 이고, 직관 절의 **선형 음함수 Euler 방법(linearly implicit Euler method)** 이다.

$f$ 가 시간 $t$ 에도 의존하면 우변에 $h^2\gamma\_i\thinspace\partial f/\partial t$ 꼴의 항을 더한다. 직관 절의 방정식은 $t$ 에 의존하지 않는다.

# 성질

## 안정성 함수

시험 방정식 $x'=\lambda x$ 에서는 $J=\lambda$ 이고 Newton 반복이 한 번에 맞으므로, Rosenbrock 방법은 $\alpha\_{ij}+\gamma\_{ij}$ 와 $\gamma$ 를 계수로 하는 대각 음함수 [Runge–Kutta 방법](runge-kutta-methods.md)과 같은 유리함수 $R(z)$ 를 안정성 함수로 갖는다. 선형 음함수 Euler 방법은 $R(z)=1/(1-z)$ 이므로 음함수 Euler 방법과 같이 L-안정이다.

## 차수 조건

Rosenbrock 방법의 차수 조건은 $J$ 가 정확한 Jacobi 행렬이라는 가정에서 세운다. 단 $2$ 개로 차수 $2$ 를 얻는 방법이 있고, $\gamma=1-1/\sqrt2$ 로 고르면 L-안정이다[^1]. 단 $4$ 개로 차수 $4$ 인 방법들이 강성 문제의 표준 풀이기로 쓰인다.

## W 방법

$J$ 를 정확한 Jacobi 행렬이 아닌 근사 $W$ 로 바꾸어도 차수가 유지되도록 계수를 고른 방법을 W 방법(W-method)이라 한다. Jacobi 행렬을 몇 걸음마다 한 번만 계산하거나 차분으로 근사할 때 쓴다[^1].

## 비용의 비교

음함수 Runge–Kutta 방법은 걸음마다 Newton 반복의 횟수만큼 $f$ 를 계산하고 일차방정식을 푼다. Rosenbrock 방법은 반복이 없어 걸음마다 $f$ 계산 $s$ 번, 일차방정식 $s$ 개로 비용이 정해진다. 대신 $J$ 가 걸음마다 필요하고, $J$ 가 부정확하면 차수가 떨어진다.

# 활용

- 화학 반응 속도론과 대기 화학. 반응 수십 개의 Jacobi 행렬을 해석적으로 구할 수 있는 계에서 4 차 Rosenbrock 방법을 쓴다.
- 편미분방정식의 선의 방법(method of lines). [열방정식](heat-equation.md)을 공간에서 이산화한 큰 희소 계에서 $I-h\gamma J$ 의 분해를 걸음마다 한 번만 하므로, Newton 반복의 수렴을 걱정하지 않고 걸음을 정한다.
- [지수 적분기](exponential-integrators.md)와의 비교. 지수 적분기는 선형 부분 $L$ 을 정확히 풀고, Rosenbrock 방법은 Jacobi 행렬로 선형화한 부분을 음함수로 푼다. $L$ 이 고정된 반선형 문제에는 지수 적분기를, Jacobi 행렬이 상태에 따라 크게 바뀌는 문제에는 Rosenbrock 방법을 쓴다.

[^1]: E. Hairer, G. Wanner, *Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems*, 2nd ed., Springer (1996), IV.7 절.

# 연관 문서

## 선수지식

- [강성 방정식](stiff-equations.md)
- [Newton 법](newton-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
