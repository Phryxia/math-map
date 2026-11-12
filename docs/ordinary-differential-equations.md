# 상미분방정식

# 개요

**상미분방정식(ordinary differential equation, ODE)** 은 미지함수와 그 도함수 사이의 관계를 독립변수 하나에 대해 적은 식이다. 통에 든 세균의 수가 늘어나는 빠르기가 지금 세균 수에 비례하면, 세균 수 $x(t)$ 는 $x'=x$ 를 만족한다. 상미분방정식의 이론은 처음 값을 정했을 때 이런 식을 만족하는 함수가 존재하는지, 하나뿐인지 정하고, 식으로 적히지 않는 해는 거동을 조사하거나 수치로 근사한다.

# 직관

세균 수가 처음에 $1$ 이고 늘어나는 빠르기가 지금 수와 같다고 하자. 구하는 함수는 $x'(t)=x(t)$, $x(0)=1$ 을 만족한다. 도함수가 자기 자신인 함수를 미리 알지 못하면 이 식에서 바로 $x$ 를 읽어 낼 방법이 없다.

양변을 $0$ 부터 $t$ 까지 적분하면 [미적분학의 기본 정리](fundamental-calculus.md)로 $x(t)=1+\int_0^t x(s)\thinspace ds$ 가 나온다. 우변에 함수 하나를 넣으면 새 함수 하나가 나온다. 상수 $1$ 을 넣으면 $1+t$ 가 나오고, $1+t$ 를 넣으면 $1+t+t^2/2$ 가, 그것을 넣으면 $1+t+t^2/2+t^3/6$ 이 나온다.

넣을 때마다 항이 하나씩 붙고, 끝없이 되풀이한 극한은 $\sum_{n\ge 0}t^n/n!=e^t$ 다. [지수함수](exponential-function.md) $e^t$ 는 도함수가 자기 자신이고 $t=0$ 에서 $1$ 이므로 처음 식의 해다.

구간 $[0,1/2]$ 에서 두 함수의 차가 어디서나 $d$ 이하라고 하자. 우변은 그 차를 길이 $1/2$ 이하의 구간에서 적분하므로, 우변에 넣고 나온 두 함수의 차는 $d/2$ 이하다. 되풀이할 때마다 차이가 절반 이하로 줄므로 어느 함수에서 출발해도 같은 극한에 간다. 이렇게 거리를 일정 비율로 줄이는 반복이 한 점으로 수렴한다는 정리가 [축약사상 고정점 정리](banach-fixed-point.md)다.

# 정의

구간 $J$ 위의 $n$ 차원 벡터값 미지함수 $x(t)$ 에 대한 **초깃값 문제(initial value problem)** 는 다음이다.

$$
x'(t)=f\bigl(t,x(t)\bigr),\qquad x(t_0)=x_0
$$

직관 절의 문제는 $n=1$, $f(t,x)=x$, $t_0=0$, $x_0=1$ 인 경우다.

$f$ 가 $t$ 에 따로 의존하지 않으면 **자율(autonomous)** 방정식이라 한다. $x'=x$ 는 자율이고 $x'=tx$ 는 자율이 아니다.

고차 방정식은 도함수를 새 변수로 두어 이 꼴로 바꾼다. $x''=-x$ 는 $y=x'$ 로 두면 $(x,y)'=(y,-x)$ 인 2 차원 1 차 방정식이다.

$f$ 가 $x$ 에 대해 **Lipschitz** 라는 것은 다음을 만족하는 상수 $K$ 가 있다는 뜻이다([Lipschitz 사상](lipschitz-maps.md)).

$$
\left\lVert f(t,x)-f(t,y)\right\rVert\le K\left\lVert x-y\right\rVert
$$

$f(t,x)=x$ 는 $K=1$ 로 Lipschitz 다. $f(t,x)=3x^{2/3}$ 은 $0$ 의 근방에서 Lipschitz 가 아니다. $\vert f(t,x)-f(t,0)\vert/\vert x\vert=3\vert x\vert^{-1/3}$ 이 $x\to 0$ 에서 한없이 커진다.

연속함수 $x$ 를 받아 다음 함수를 내놓는 작용소 $T$ 를 **Picard 작용소(Picard operator)** 라 한다.

$$
(Tx)(t)=x_0+\int_{t_0}^{t}f\bigl(s,x(s)\bigr)\thinspace ds
$$

직관 절의 반복은 $f(t,x)=x$ 에 대한 $T$ 를 상수함수 $1$ 에 거듭 적용한 것이다. $T1=1+t$, $T(1+t)=1+t+t^2/2$ 이다.

자율 방정식에서 $f(x^\star)=0$ 인 점 $x^\star$ 를 **평형점(equilibrium)** 이라 한다. 처음 값이 평형점이면 해는 상수 $x^\star$ 다. 평형점이 [Lyapunov 안정](lyapunov-stability.md)이라는 것은 처음 값을 충분히 가깝게 두면 해가 모든 $t\ge t_0$ 에서 가까이 머무는 것이다.

**점근 안정(asymptotically stable)** 은 여기에 더해 해가 평형점으로 수렴하는 것이다. $x'=-x$ 의 평형점 $0$ 은 해 $x_0e^{-t}$ 가 $0$ 으로 가므로 점근 안정이고, $x'=x$ 의 평형점 $0$ 은 해 $x_0e^{t}$ 가 멀어지므로 안정이 아니다.

# 성질

## 미분방정식과 적분방정식의 동치

$f$ 가 연속이면, $x$ 가 초깃값 문제의 해인 것과 $x$ 가 $Tx=x$ 를 만족하는 [연속함수](continuity.md)인 것은 동치다. 한쪽은 적분하고 다른 쪽은 미적분학의 기본 정리로 미분한다.

## Picard–Lindelöf 정리

Picard–Lindelöf 정리(Picard–Lindelöf theorem)는 다음을 말한다. $f$ 가 초기점의 근방에서 연속이고 $x$ 에 대해 Lipschitz 이면, 어떤 양수 $\varepsilon$ 에 대해 구간 $[t_0-\varepsilon,\thinspace t_0+\varepsilon]$ 에서 초깃값 문제의 해가 존재하고 유일하다[^1].

증명의 요지. $M$ 을 근방에서 $\Vert f\Vert$ 의 상한, $K$ 를 Lipschitz 상수라 하자. 처음 값을 중심으로 한 닫힌 공 안에 머무는 연속함수들의 집합은 [sup 노름](banach-spaces.md)에서 [완비](completeness.md)다. 적분의 크기가 $M\varepsilon$ 이하이므로, $\varepsilon$ 을 충분히 작게 잡으면 $T$ 가 이 집합을 자기 자신으로 보낸다. 두 함수 $x$, $y$ 에 대해 Lipschitz 조건을 적분에 넣으면 다음이 나온다.

$$
\left\lVert Tx-Ty\right\rVert_{\infty}\le K\varepsilon\thinspace\left\lVert x-y\right\rVert_{\infty}
$$

$\varepsilon\lt 1/K$ 로 잡으면 $T$ 는 축약사상이고, 완비 [거리 공간](metric-spaces.md) 위의 축약사상은 유일한 고정점을 가진다[^2]. 그 고정점이 초깃값 문제의 유일한 해다. 직관 절의 $K=1$, $\varepsilon=1/2$ 가 이 경우다. Lipschitz 상수와 무관한 구간을 얻으려면 지수 가중 노름을 쓰거나 [Grönwall 부등식](gronwall-inequality.md)을 쓴다.

$f$ 가 연속이지만 Lipschitz 가 아니면 [Peano 존재정리](peano-existence-theorem.md)로 존재성은 남지만 유일성은 성립하지 않을 수 있다. 정의 절의 $f=3x^{2/3}$ 이 그 예다.

$$
x'=3x^{2/3},\quad x(0)=0\quad\Longrightarrow\quad x(t)\equiv 0,\quad x(t)=t^3
$$

## 해의 최대 존재구간

Picard–Lindelöf 정리는 짧은 구간에서의 해만 준다. $f$ 가 어디서나 매끄러워도 해가 유한 시간에 발산할 수 있다.

$$
x'=x^2,\quad x(0)=1\quad\Longrightarrow\quad x(t)=\frac{1}{1-t}\quad(t\lt 1)
$$

$f$ 가 $x$ 에 대해 전 구역에서 Lipschitz(특히 선형)이면 해는 모든 시간으로 확장된다.

## 선형 방정식

상수계수 선형 연립방정식의 해는 [행렬](matrices.md)의 [행렬 지수](matrix-exponential.md)(matrix exponential)로 주어진다.

$$
x'=Ax,\quad x(0)=x_0\quad\Longrightarrow\quad x(t)=e^{tA}x_0,\qquad e^{tA}=\sum_{k=0}^{\infty}\frac{t^k A^k}{k!}
$$

$A$ 가 대각화 가능하면 [고윳값](eigenvalues.md)과 고유벡터로 해를 분해한다. 고윳값 $\lambda$ 와 대응하는 고유벡터 $v$ 에 대해 $x(t)=e^{\lambda t}v$ 가 해다. 일반적인 $A$ 에서는 [Jordan 표준형](jordan-canonical-form.md)에 따라 $t$ 의 다항식이 계수로 붙는다. 비동차 방정식의 해는 Duhamel 공식(Duhamel's formula)으로 쓴다.

$$
x'=Ax+g(t)\quad\Longrightarrow\quad x(t)=e^{tA}x_0+\int_0^{t}e^{(t-s)A}g(s)\thinspace ds
$$

## 평형점의 안정성

선형계 $x'=Ax$ 에서 원점은 $A$ 의 모든 고윳값의 실수부가 음수이면 점근 안정이고, 어떤 고윳값의 실수부가 양수이면 불안정하다.

비선형 자율 방정식의 평형점 $x^\star$ 에서는 Jacobi 행렬(Jacobian matrix) $A=Df(x^\star)$ 를 본다. $A$ 의 모든 고윳값의 실수부가 음수이면 평형점은 점근 안정이고, 어떤 고윳값의 실수부가 양수이면 불안정하다. 실수부가 $0$ 인 고윳값이 있으면 선형화만으로는 판정할 수 없다. 이때는 평형점에서 최소이고 해를 따라 감소하는 함수인 Lyapunov 함수(Lyapunov function)를 찾는다.

# 활용

## 로지스틱 방정식

**로지스틱 방정식(logistic equation)** 은 변수분리(separation of variables)로 풀린다.

$$
x'=r\thinspace x\thinspace(1-x),\qquad r\gt 0
$$

평형점은 $x=0$ 과 $x=1$ 이다. 우변을 미분한 $r(1-2x)$ 는 $x=0$ 에서 $r\gt 0$ 이므로 $0$ 은 불안정하고, $x=1$ 에서 $-r\lt 0$ 이므로 $1$ 은 점근 안정이다. 처음 값이 $0$ 과 $1$ 사이면 해는 다음과 같다.

$$
x(t)=\frac{x_0e^{rt}}{1-x_0+x_0e^{rt}}
$$

## 수치해법

**Euler 방법(Euler method)** 은 적분방정식의 피적분함수를 구간 왼끝의 값으로 근사한다.

$$
x_{k+1}=x_k+h\thinspace f(t_k,x_k),\qquad t_{k+1}=t_k+h
$$

$f$ 가 Lipschitz 이고 해가 두 번 미분가능한 구간에서 전역 오차는 $h$ 에 비례한다. 한 단계의 국소 절단오차는 $h^2$ 규모이고 단계 수가 $1/h$ 규모이므로 차수가 하나 준다. 4 차 [Runge–Kutta 방법](runge-kutta-methods.md)(Runge–Kutta method)이 흔히 쓰이고, [강성](stiff-equations.md)(stiff) 문제에는 안정성이 좋은 음함수 방법을 쓴다. 후진 Euler 방법(backward Euler method)과 [선형 다단계 방법](linear-multistep-methods.md)의 BDF(backward differentiation formula)가 그 예다.

## 모형화와 이웃 분야

Newton 운동방정식, 전기 회로, 화학반응 속도론, 개체군 동역학, 전염병의 [SIR 모형](sir-model.md), 제어이론이 ODE 로 적힌다. 해의 장기 거동을 해 곡선 집합의 기하로 다루는 분야가 동역학계(dynamical system) 이론이다. 무작위 요동을 더하면 [확률미분방정식](stochastic-differential-equations.md)이 되고, 상태공간이 이산이면 [Markov 연쇄](markov-chains.md)가 된다. 독립변수가 둘 이상이면 편미분방정식(partial differential equation)이다.

[^1]: Picard–Lindelöf theorem, Wikipedia (정리 진술과 Banach 고정점 증명). https://en.wikipedia.org/wiki/Picard%E2%80%93Lindel%C3%B6f_theorem
[^2]: A. Seeger, An existence and uniqueness theorem (Math 522 강의노트), University of Wisconsin–Madison. https://people.math.wisc.edu/~aseeger/522/picard.pdf

# 연관 문서

## 선수지식

- [미분](derivative.md)
- [축약사상 고정점 정리](banach-fixed-point.md)
- [미적분학의 기본 정리](fundamental-calculus.md)

## 더 알아보기

### 해의 존재, 안정성, 고윳값

- [Grönwall 부등식](gronwall-inequality.md)
- [Peano 존재정리](peano-existence-theorem.md)
- [Lyapunov 안정성](lyapunov-stability.md)
- [Sturm–Liouville 이론](sturm-liouville.md)

### 점근해

- [Airy 함수](airy-functions.md)
- [WKB 근사](wkb-approximation.md)

### 풀이 방법

- [Wronski 행렬식](wronskian.md)
- [행렬 지수](matrix-exponential.md)
- [Laplace 변환](laplace-transform.md)
- [Runge–Kutta 방법](runge-kutta-methods.md)

### 방정식의 확장

- [변분법](calculus-of-variations.md)
- [확률미분방정식](stochastic-differential-equations.md)

### 응용 모형

- [SIR 모형](sir-model.md)

#analysis #computation #probability
