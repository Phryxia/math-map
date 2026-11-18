# Euler 방법

# 개요

**Euler 방법(Euler method)** 은 미분방정식의 해를 짧은 걸음마다 그 점의 기울기를 따라 직선으로 나아가며 어림하는 방법이다. 돈이 매 순간 그때의 잔고에 비례해 불어나면 잔고 $x$ 는 $x'=x$ 를 만족하고, $1$ 원이 $1$ 년 뒤 얼마인지 묻게 된다. Euler 방법은 $1$ 년을 $n$ 걸음으로 나누어 걸음마다 잔고에 $1+1/n$ 을 곱하고, $n$ 을 키우면 그 값 $(1+1/n)^n$ 이 참값 $e=2.718\cdots$ 에 다가간다.

# 직관

$x'=x$, $x(0)=1$ 에서 시각 $0$ 의 기울기는 $x(0)=1$ 이다. 기울기가 반 년 동안 변하지 않는다고 놓으면 반 년 뒤의 잔고는 $1+0.5\cdot1=1.5$ 다. 그 점의 기울기 $1.5$ 로 다시 반 년 가면 $1.5+0.5\cdot1.5=2.25$ 다.

걸음 동안 잔고가 커지며 기울기도 커지는데 걸음 첫 점의 기울기만 썼으므로, 결과는 참값 $e=2.718\cdots$ 보다 작다. 걸음을 줄이면 기울기가 변하는 시간이 짧아진다. 걸음 $0.1$ 로 열 걸음 가면 $1.1^{10}=2.5937\cdots$ 이고, 모자라는 양은 $0.125$ 다.

걸음을 $1/n$ 로 하면 결과는 $(1+1/n)^n$ 이고, $n\to\infty$ 에서 $e$ 로 간다. 모자라는 양은 대략 $e/(2n)$ 이어서 걸음을 절반으로 줄이면 오차도 절반이 된다.

# 정의

[상미분방정식](ordinary-differential-equations.md)의 초깃값 문제 $x'=f(t,x)$, $x(t_0)=x_0$ 과 걸음 $h\gt 0$ 에 대해, 다음 점화식으로 정한 수열 $x_k$ 가 $x(t_0+kh)$ 의 Euler 방법 어림이다[^1].

$$
x_{k+1}=x_k+h\thinspace f(t_k,x_k),\qquad t_{k+1}=t_k+h
$$

직관 절의 잔고는 $f(t,x)=x$, $t_0=0$, $x_0=1$ 이고, $x_{k+1}=(1+h)x_k$ 이므로 $x_k=(1+h)^k$ 다.

한 걸음 동안 생기는 오차 $x(t_{k+1})-x(t_k)-hf(t_k,x(t_k))$ 를 **국소 절단오차(local truncation error)** 라 하고, $x_k$ 와 $x(t_k)$ 의 차를 **전역 오차(global error)** 라 한다.

# 성질

## 1 차 수렴

$f$ 가 $x$ 에 대해 Lipschitz 상수 $L$ 을 갖고 해 $x$ 가 두 번 연속미분가능하며 $\vert x''\vert\le M$ 이면, 구간 $\lbrack t_0,t_0+T\rbrack$ 에서 다음이 성립한다.

$$
\vert x_k-x(t_k)\vert\le\frac{Mh}{2L}\bigl(e^{LT}-1\bigr)
$$

증명의 요지. [Taylor 정리](taylor-theorem.md)로 국소 절단오차는 $Mh^2/2$ 이하다. 전역 오차 $e_k$ 는 다음을 만족하고, 이 점화 부등식을 푸는 것이 [Grönwall 부등식](gronwall-inequality.md)의 이산판이다.

$$
e_{k+1}\le(1+hL)e_k+\frac{Mh^2}2
$$

국소 오차가 $h^2$ 이고 걸음 수가 $T/h$ 이므로 전역 오차는 $h$ 에 비례한다. 직관 절에서 걸음을 절반으로 줄이면 오차가 절반이 된 것이 이것이다.

## 안정성

시험 방정식 $x'=\lambda x$, $\lambda\lt 0$ 의 해는 $0$ 으로 줄어든다. Euler 방법은 $x_{k+1}=(1+h\lambda)x_k$ 이므로 $\vert 1+h\lambda\vert\le1$, 곧 $h\le2/\vert\lambda\vert$ 일 때만 어림도 줄어든다. $\lambda=-10$ 이면 $h=0.25$ 에서 배율이 $-1.5$ 여서 어림이 부호를 바꾸며 커지고, $h=0.05$ 에서는 배율이 $0.5$ 여서 줄어든다.

## 음함수 Euler 방법

걸음 끝점의 기울기를 쓰는 **음함수 Euler 방법(implicit Euler method)** 은 다음이다.

$$
x_{k+1}=x_k+h\thinspace f(t_{k+1},x_{k+1})
$$

$x_{k+1}$ 이 양변에 있으므로 걸음마다 방정식을 풀어야 한다. 시험 방정식에서는 $x_{k+1}=x_k/(1-h\lambda)$ 이고, $\lambda\lt 0$ 이면 모든 $h$ 에서 배율이 $1$ 보다 작다. $\lambda=-10$, $h=0.25$ 이면 배율은 $1/3.5$ 다. 이 성질 때문에 [강성 방정식](stiff-equations.md)에 쓴다.

# 활용

- [Runge–Kutta 방법](runge-kutta-methods.md): 한 걸음 안에서 기울기를 여러 번 재어 평균해 Euler 방법의 1 차 오차를 높은 차수로 줄인다. Euler 방법은 단이 하나인 Runge–Kutta 방법이다.
- [Peano 존재정리](peano-existence-theorem.md): Euler 방법이 만드는 꺾은선의 열에서 수렴하는 부분열을 뽑아 해의 존재를 증명한다.
- [적응 걸음 크기 조절](adaptive-step-size-control.md): Euler 방법과 2 차 방법의 차로 오차를 어림해 걸음을 고른다.
- [경사하강법](gradient-descent.md): 기울기 흐름 $x'=-\nabla F(x)$ 에 Euler 방법을 쓴 것이 경사하강법의 갱신식이다.

[^1]: E. Hairer, S. P. Nørsett, G. Wanner, *Solving Ordinary Differential Equations I*, 2nd ed., Springer, 1993, I.7 절.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)

## 더 알아보기

- [Runge–Kutta 방법](runge-kutta-methods.md)

#analysis #computation #algorithms
