# θ 방법

# 개요

**θ 방법(theta method)** 은 [상미분방정식](ordinary-differential-equations.md)을 한 걸음 풀 때 걸음 왼끝의 기울기와 오른끝의 기울기를 $1-\theta$ 와 $\theta$ 의 비율로 섞어 나아가는 방법이다. [강성 방정식](stiff-equations.md) 문서의 $x'=-50(x-\cos t)$ 를 걸음 $0.5$ 로 풀면, 오른끝 기울기만 쓰는 음함수 Euler 방법은 참해를 잘 따라가지만 걸음을 줄여도 오차가 걸음에 비례해서만 준다. 두 끝을 반씩 섞는 사다리꼴 규칙은 걸음을 줄이면 오차가 걸음의 제곱으로 줄지만, 큰 걸음에서는 값이 위아래로 튄다. $\theta$ 를 $0.5$ 와 $1$ 사이에서 고르면 이 둘 사이의 절충을 수 하나로 조절한다.

# 직관

$x'=f(t,x)$ 를 걸음 $h$ 로 풀 때, 왼끝 기울기만 쓰면 양함수 Euler 방법, 오른끝 기울기만 쓰면 음함수 Euler 방법, 둘을 반씩 섞으면 사다리꼴 규칙이다. 세 방법은 다음 한 식에서 $\theta=0,1,\tfrac12$ 인 경우다.

$$
x\_{n+1}=x_n+h\bigl((1-\theta)f(t_n,x_n)+\theta f(t\_{n+1},x\_{n+1})\bigr)
$$

$x'=-50(x-\cos t)$, $x(0)=0$ 에 $h=0.5$ 를 쓰면, $\cos t$ 에서 벗어난 빠른 성분이 걸음마다 곱해지는 수가 $\theta$ 에 따라 바뀐다. $\theta=0$ 이면 $-24$ 배라 $t=2$ 에서 $-333285$ 가 된다. $\theta=\tfrac12$ 이면 $-0.852$ 배라 $t=0.5,1,1.5,2$ 에서 $1.7385$, $-0.1681$, $0.7090$, $-0.9238$ 로 참값 $0.8868$, $0.5569$, $0.0907$, $-0.3978$ 둘레를 오르내린다. $\theta=1$ 이면 $0.0385$ 배라 $0.8438$, $0.5520$, $0.0892$, $-0.3967$ 로 참값과 가깝다.

사다리꼴 규칙이 튀는 것은 빠른 성분이 $-0.852$ 배로 천천히 줄어서다. $\theta$ 를 조금 올려 $0.6$ 으로 두면 그 배율이 $-0.5625$ 가 되어 $1.4477$, $0.2407$, $0.2686$, $-0.4970$ 으로 튀는 폭이 줄어든다.

# 정의

## θ 방법

$0\le\theta\le 1$ 인 수 $\theta$ 에 대해 직관 절의 식으로 $x_n$ 에서 $x\_{n+1}$ 을 정하는 방법을 **θ 방법** 이라 한다. $\theta=0$ 이면 양함수이고, $\theta\gt 0$ 이면 걸음마다 $x\_{n+1}$ 에 대한 방정식을 푸는 음함수 방법이다. [Runge–Kutta 방법](runge-kutta-methods.md)의 Butcher 표로는 다음과 같다.

$$
\begin{array}{c|cc}
0 & 0 & 0\cr
1 & 1-\theta & \theta\cr
\hline
& 1-\theta & \theta
\end{array}
$$

## 안정성 함수

시험 방정식 $x'=\lambda x$ 에 쓰면 $x\_{n+1}=R(h\lambda)x_n$ 이고, $z=h\lambda$ 로 다음이 나온다.

$$
R(z)=\frac{1+(1-\theta)z}{1-\theta z}
$$

직관 절의 예는 $\lambda=-50$, $h=0.5$ 라 $z=-25$ 이고, $R(-25)$ 가 $\theta=0,\tfrac12,0.6,1$ 에서 $-24$, $-0.852$, $-0.5625$, $0.0385$ 다.

# 성질

## 차수

θ 방법은 $\theta=\tfrac12$ 일 때만 차수가 $2$ 이고, 그 밖에서는 차수가 $1$ 이다. $R(z)$ 를 전개하면 다음과 같다.

$$
R(z)=1+z+\theta z^2+O(z^3)
$$

$e^z$ 와 $z^2$ 항이 맞으려면 $\theta=\tfrac12$ 여야 한다. 직관 절의 방정식을 $t=2$ 까지 풀 때 걸음을 $0.02$ 에서 $0.01$ 로 줄이면, 오차가 $\theta=\tfrac12$ 에서 $6.2\times 10^{-7}$ 에서 $1.5\times 10^{-7}$ 로 $4$ 분의 $1$, $\theta=0.6$ 에서 $1.6\times 10^{-5}$ 에서 $7.7\times 10^{-6}$ 로 $2$ 분의 $1$ 이 된다.

## A-안정성과 L-안정성

$\mathrm{Re}\thinspace z\le 0$ 에서 $\vert R(z)\vert\le 1$ 은 $\theta\ge\tfrac12$ 와 동치다. $\vert 1+(1-\theta)z\vert\le\vert 1-\theta z\vert$ 의 양변을 제곱해 정리하면 $(1-2\theta)\vert z\vert^2+2\thinspace\mathrm{Re}\thinspace z\le 0$ 이 되기 때문이다. 그래서 $\theta\ge\tfrac12$ 인 θ 방법은 A-안정이다.

$z\to-\infty$ 에서 $R(z)\to-(1-\theta)/\theta$ 이다. 이 극한이 $0$ 인 것은 $\theta=1$ 뿐이므로, L-안정인 θ 방법은 음함수 Euler 방법 하나다. $\tfrac12\lt\theta\lt 1$ 이면 극한의 절댓값이 $1$ 보다 작아 빠른 성분이 걸음마다 일정한 비율로 줄고, $\theta=\tfrac12$ 이면 극한이 $-1$ 이라 거의 줄지 않는다.

## 차수와 안정성의 맞바꿈

$\theta=\tfrac12$ 는 차수 $2$ 를 주지만 큰 걸음에서 빠른 성분을 남긴다. $\theta$ 를 $\tfrac12$ 보다 조금 크게 잡으면 차수가 $1$ 로 떨어지는 대신 빠른 성분이 줄어든다. θ 방법 안에서는 차수 $2$ 와 L-안정성을 함께 얻지 못한다.

# 활용

- 열방정식의 차분법. 공간을 이산화한 [열방정식](heat-equation.md)에 θ 방법을 쓰면 $\theta=\tfrac12$ 가 [Crank–Nicolson 방법](crank-nicolson-method.md), $\theta=1$ 이 뒤 Euler 차분이다. 거친 초깃값에서 생기는 격자 진동을 줄이려고 처음 몇 걸음만 $\theta=1$ 로 하고 나머지를 $\theta=\tfrac12$ 로 하는 Rannacher 시작법(Rannacher time-stepping)이 쓰인다.[^1]
- [선형 다단계 방법](linear-multistep-methods.md)과의 관계. θ 방법은 한 걸음 선형 다단계 방법이기도 하다. A-안정인 선형 다단계 방법의 차수는 $2$ 를 넘지 못하고(Dahlquist 의 둘째 장벽, second Dahlquist barrier), 차수 $2$ 인 것 가운데 사다리꼴 규칙의 오차 상수가 가장 작다.[^2]

[^1]: R. Rannacher, "Finite element solution of diffusion problems with irregular data", *Numerische Mathematik* 43 (1984), 309–327.
[^2]: E. Hairer, G. Wanner, *Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems*, 2nd ed., Springer (1996), V.1 절. Dahlquist 의 둘째 장벽과 사다리꼴 규칙의 오차 상수.

# 연관 문서

## 선수지식

- [강성 방정식](stiff-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
