# Douglas–Rachford 분할

# 개요

**Douglas–Rachford 분할(Douglas–Rachford splitting)** 은 두 볼록 함수의 합을, 각 함수의 근접 연산자만 번갈아 써서 최소화하는 반복이다. $\vert x\vert+2\vert x-3\vert$ 를 최소화할 때 두 항이 모두 꺾여 있어, 한 항을 기울기로 다루는 [근접 경사법](proximal-gradient-method.md)을 쓸 수 없다. Douglas–Rachford 분할은 두 항의 근접 연산자를 하나씩 적용하고 그 차이를 보조 변수에 누적해, 보조 변수가 멈춘 자리에서 합의 최소점을 읽어 낸다.

# 직관

$f(x)=\vert x\vert$ 와 $g(x)=2\vert x-3\vert$ 의 합을 최소화한다. $0\lt x\lt 3$ 에서 합의 기울기는 $1-2=-1$ 이므로 $x$ 를 늘리면 합이 준다. $x\gt 3$ 에서는 기울기가 $3$ 이므로 최소점은 $x=3$ 이고 최솟값은 $3$ 이다.

두 항의 근접 연산자는 각각 쉽다. 보폭을 $1$ 로 두면 $\mathrm{prox}\_f$ 는 문턱 $1$ 의 연성 문턱이고, $\mathrm{prox}\_g(v)$ 는 $v-3$ 에 문턱 $2$ 의 연성 문턱을 쓰고 $3$ 을 더한 값이다. 합 $f+g$ 의 근접 연산자는 한 변수에서는 계산할 수 있지만, 변수가 많고 두 항이 서로 다른 좌표를 묶으면 따로 풀리지 않는다. 그래서 두 연산자를 하나씩 쓰는 반복을 만든다.

보조 변수 $z$ 를 두고 한 번의 반복을 다음으로 정한다. $x=\mathrm{prox}\_f(z)$ 를 구하고, $x$ 에서 $z$ 를 반대쪽으로 뒤집은 점 $2x-z$ 에 $\mathrm{prox}\_g$ 를 써서 $y$ 를 구하고, $z$ 에 $y-x$ 를 더한다. $z=0$ 에서 시작하면 $(x,y)$ 는 $(0,2)$ , $(1,2)$ , $(2,3)$ , $(3,3)$ 이고 $z$ 는 $2,\thinspace 3,\thinspace 4,\thinspace 4$ 로 간다.

넷째 반복에서 $x=y=3$ 이 되어 $z$ 가 $4$ 에 멈춘다. 멈춘 $z$ 자체는 답이 아니고, $\mathrm{prox}\_f(4)=3$ 이 답이다. 두 연산자가 같은 점을 내놓으면 $z$ 가 더 움직이지 않는다. 이 반복을 Douglas–Rachford 분할이라 부른다.

# 정의

$f,g:\mathbb R^n\to\mathbb R\cup\lbrace +\infty\rbrace$ 가 고유하고 볼록이고 하반연속이라 하고, $\eta\gt 0$ 이라 한다. $f+g$ 를 최소화하는 **Douglas–Rachford 분할** 은 다음 반복이다.

$$
\begin{aligned}
x_k&=\mathrm{prox}\_{\eta f}(z_k)\cr
y_k&=\mathrm{prox}\_{\eta g}(2x_k-z_k)\cr
z_{k+1}&=z_k+y_k-x_k
\end{aligned}
$$

근접 연산자는 [근접 경사법](proximal-gradient-method.md)에서 정의한 것이다. 직관 절의 예는 $\eta=1$ , $z_0=0$ 인 경우다.

## 반사 연산자

$R_{\eta f}=2\mathrm{prox}\_{\eta f}-I$ 를 $f$ 의 **반사 연산자(reflected resolvent)** 라 한다. $z$ 를 $\mathrm{prox}\_{\eta f}(z)$ 에 대해 뒤집은 점이다. $f$ 가 볼록집합 $C$ 의 지시함수이면 근접 연산자는 $C$ 로의 사영이고, 반사 연산자는 $z$ 를 사영점에 대해 대칭으로 옮긴 점이다. 이 기호로 위 반복은 다음 한 줄이다.

$$
z_{k+1}=\frac12\bigl(I+R_{\eta g}R_{\eta f}\bigr)(z_k)
$$

직관 절에서 $R_f(3)=2\cdot 2-3=1$ 이고 $R_g(1)=2\cdot 3-1=5$ 이므로 $z_2=3$ 에서 $z_3=\frac12(3+5)=4$ 다.

# 성질

## 고정점과 최소점

정리. $z$ 가 반복의 고정점이면 $x=\mathrm{prox}\_{\eta f}(z)$ 가 $f+g$ 의 최소점이다. 거꾸로 $x$ 가 최소점이고 $p\in\partial f(x)$ , $-p\in\partial g(x)$ 이면 $z=x+\eta p$ 가 고정점이다.

증명의 요지. 고정점은 $y=x$ 인 점이다. 근접 연산자의 [부분미분](subdifferential.md) 특징으로 $(z-x)/\eta\in\partial f(x)$ 이고 $\bigl((2x-z)-x\bigr)/\eta=(x-z)/\eta\in\partial g(x)$ 이다. 두 식을 더하면 $0\in\partial f(x)+\partial g(x)$ 이므로 $x$ 가 최소점이다. 역방향은 $z=x+\eta p$ 를 넣으면 $\mathrm{prox}\_{\eta f}(z)=x$ 와 $\mathrm{prox}\_{\eta g}(2x-z)=x$ 가 같은 특징에서 나온다. 직관 절에서 $(4-3)/1=1\in\partial f(3)=\lbrace 1\rbrace$ 이고 $-1\in\partial g(3)=\lbrack -2,2\rbrack$ 이다.

## 수렴

정리. $f+g$ 가 최소점을 가지고 $\partial(f+g)=\partial f+\partial g$ 이면, 모든 $\eta\gt 0$ 과 시작점에서 $z_k$ 가 고정점으로 수렴하고 $x_k$ 가 $f+g$ 의 최소점으로 수렴한다[^1].

증명의 요지. 근접 연산자 $P$ 는 $\Vert Pz-Pw\Vert^2\le\langle z-w,\thinspace Pz-Pw\rangle$ 를 만족한다. 이 성질을 **단단한 비확장성(firm nonexpansiveness)** 이라 하고, 근접 경사법 문서의 비확장성 증명이 이 부등식을 거친다. 전개하면 $\Vert(2P-I)z-(2P-I)w\Vert\le\Vert z-w\Vert$ 이므로 두 반사 연산자와 그 합성 $N=R_{\eta g}R_{\eta f}$ 가 비확장이다. $T=\frac12(I+N)$ 과 고정점 $z^\star$ 에 대해 평행사변형 등식으로 다음이 나온다.

$$
\Vert Tz-z^\star\Vert^2\le\Vert z-z^\star\Vert^2-\Vert Tz-z\Vert^2
$$

그래서 $\Vert z_k-z^\star\Vert$ 가 감소하고 걸음 $\Vert z_{k+1}-z_k\Vert$ 의 제곱합이 유한하다. 유계인 열의 집적점은 $T$ 의 연속성으로 고정점이고, 거리 감소로 열 전체가 그 고정점으로 수렴한다. $x_k=\mathrm{prox}\_{\eta f}(z_k)$ 는 근접 연산자가 연속이므로 따라 수렴한다.

## 부분공간에서의 수렴률

$f$ 와 $g$ 가 원점을 지나는 두 부분공간 $U$ , $V$ 의 지시함수이면 반복은 교점 $U\cap V$ 를 찾는다. 이때 $U$ 와 $V$ 사이의 Friedrichs 각(Friedrichs angle) $\theta$ 에 대해 Douglas–Rachford 분할은 비율 $\cos\theta$ 로 선형 수렴한다[^2]. 두 사영을 번갈아 쓰는 교대 사영(alternating projections)의 비율은 $\cos^2\theta$ 다. 평면의 두 직선이 $\theta=\pi/4$ 로 만나면 비율은 각각 $0.71$ 과 $0.5$ 다.

## 교대 방향 승수법과의 관계

[교대 방향 승수법](admm.md)(alternating direction method of multipliers, ADMM)의 문제 $\min f(x)+g(z)$ , $Ax+Bz=c$ 의 쌍대 문제는 두 볼록 함수의 합의 최소화이고, 여기에 Douglas–Rachford 분할을 쓰면 ADMM 의 반복이 나온다[^3]. 그래서 ADMM 의 수렴은 위 정리에서 따라 나온다.

# 활용

- 기저 추적(basis pursuit). $Ax=b$ 를 만족하는 $x$ 가운데 $\Vert x\Vert\_1$ 이 가장 작은 것을 찾는다. $f=\Vert\cdot\Vert\_1$ 의 근접 연산자는 연성 문턱이고, $g$ 를 아핀집합 $\lbrace x:Ax=b\rbrace$ 의 지시함수로 두면 근접 연산자는 사영 $x-A^\top(AA^\top)^{-1}(Ax-b)$ 다. 두 항이 모두 꺾여 있어 근접 경사법 대신 이 반복을 쓴다. [압축 센싱](compressed-sensing.md)의 복원 문제가 이 꼴이다.
- 볼록 실현가능성 문제(convex feasibility problem). 두 닫힌 볼록집합의 교점을 찾을 때 두 지시함수의 합을 최소화한다. 근접 연산자가 두 사영이므로 반복은 사영과 반사만 쓴다.
- 위상 복원(phase retrieval). [Fourier 변환](fourier-transform.md)의 크기만 관측된 신호를 찾는 문제는 볼록이 아닌 두 집합의 교점 문제다. 수렴 보장은 없지만 같은 반복을 쓰고, Fienup 의 hybrid input-output 알고리즘은 특정한 경우 Douglas–Rachford 반복과 같다[^4].
- 열방정식의 수치해. Douglas 와 Rachford 는 2 차원과 3 차원 [열방정식](heat-equation.md)을 시간 단계마다 방향별 일차원 문제로 나누어 푸는 방법으로 이 분할을 도입했다[^5].

[^1]: P.-L. Lions and B. Mercier, *Splitting algorithms for the sum of two nonlinear operators*, SIAM Journal on Numerical Analysis 16(6), 1979, 964–979.
[^2]: H. H. Bauschke, J. Y. Bello Cruz, T. T. A. Nghia, H. M. Phan and X. Wang, *The rate of linear convergence of the Douglas–Rachford algorithm for subspaces is the cosine of the Friedrichs angle*, Journal of Approximation Theory 185, 2014, 63–79.
[^3]: J. Eckstein and D. P. Bertsekas, *On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators*, Mathematical Programming 55, 1992, 293–318.
[^4]: H. H. Bauschke, P. L. Combettes and D. R. Luke, *Phase retrieval, error reduction algorithm, and Fienup variants: a view from convex optimization*, Journal of the Optical Society of America A 19(7), 2002, 1334–1345.
[^5]: J. Douglas and H. H. Rachford, *On the numerical solution of heat conduction problems in two and three space variables*, Transactions of the American Mathematical Society 82, 1956, 421–439.

# 연관 문서

## 선수지식

- [근접 경사법](proximal-gradient-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #functional_analysis #signal_processing
