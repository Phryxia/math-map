# 선의 방법

# 개요

**선의 방법(method of lines)** 은 편미분방정식을 공간 방향으로만 이산화해 연립 [상미분방정식](ordinary-differential-equations.md)으로 바꾼 뒤, 시간 방향은 상미분방정식의 해법으로 푸는 방법이다. 막대의 온도는 위치와 시간의 함수인데, 막대 위의 점 몇 개의 온도만 따라가면 각 점의 온도는 이웃한 점의 온도로 정해지는 시간의 함수가 된다. 그 연립 방정식에 [Runge–Kutta 방법](runge-kutta-methods.md)이나 [후진 차분 공식](backward-differentiation-formulas.md) 같은 이미 있는 해법을 그대로 쓰고, 시간 걸음의 안정성은 연립 방정식 행렬의 고윳값으로 판정한다.

# 직관

길이 $1$ 인 막대의 양끝 온도를 $0$ 으로 두고, 처음 온도가 $\sin\pi x$ 인 [열방정식](heat-equation.md) $u\_t=u\_{xx}$ 를 푼다. 참해는 $e^{-\pi^2t}\sin\pi x$ 다.

막대에 간격 $h=\frac14$ 로 안쪽 점 셋 $x=\frac14,\frac12,\frac34$ 를 찍고, 그 점의 온도를 $U\_1,U\_2,U\_3$ 으로 둔다. $u\_{xx}$ 를 이웃한 세 점의 차분 $(U\_{j-1}-2U\_j+U\_{j+1})/h^2$ 로 바꾸면, 시간에 대해서만 미분하는 다음 방정식이 나온다. 양끝의 $U\_0=U\_4=0$ 이다.

$$
\begin{pmatrix}U\_1\cr U\_2\cr U\_3\end{pmatrix}'=16\begin{pmatrix}-2&1&0\cr 1&-2&1\cr 0&1&-2\end{pmatrix}\begin{pmatrix}U\_1\cr U\_2\cr U\_3\end{pmatrix}
$$

처음 값 $(0.7071,1,0.7071)$ 은 행렬의 고유벡터이고 고윳값은 $-9.37$ 이다. 그래서 이 방정식의 해는 $e^{-9.37t}$ 로 줄고, 참해의 $e^{-9.87t}$ 와 가깝다. 행렬의 다른 두 고윳값은 $-32$ 와 $-54.6$ 이다.

이 방정식에 [Euler 방법](euler-method.md)을 시간 걸음 $\Delta t=0.05$ 로 쓰면, 고윳값 $\lambda$ 방향의 성분은 걸음마다 $1+\Delta t\lambda$ 배가 된다. $\lambda=-9.37$ 방향은 $0.53$ 배로 줄지만 $\lambda=-54.6$ 방향은 $-1.73$ 배가 되어, 반올림 오차로 생긴 작은 성분이 걸음마다 커진다. $\Delta t\le 2/54.6=0.037$ 로 줄이면 모든 방향이 줄고, 음함수 Euler 방법을 쓰면 $1/(1-\Delta t\lambda)$ 배라서 걸음에 상관없이 준다. 공간을 먼저 이산화하고 시간 방향은 상미분방정식으로 푸는 이 계산이 선의 방법이다.

# 정의

## 반이산화

공간 영역에 격자를 두고 공간 미분을 차분, 유한요소, 스펙트럼 근사 가운데 하나로 바꾸어 얻은 연립 상미분방정식을 **반이산화(semi-discretization)** 라 한다.

$$
U'(t)=F\_h(t,U(t)),\qquad U(0)=U\_0
$$

$U(t)$ 의 성분은 격자점의 값이나 기저함수의 계수이고, $h$ 는 격자 간격이다. 직관 절에서는 $F\_h(t,U)=A\_hU$ 이고 $A\_h$ 는 대각선이 $-2/h^2$, 그 옆이 $1/h^2$ 인 삼중대각 행렬이다.

## 선의 방법

반이산화에 상미분방정식의 수치해법을 시간 걸음 $\Delta t$ 로 적용하는 방법을 선의 방법이라 한다. 이름은 각 격자점 위에서 시간 방향으로 그은 직선 위의 해를 따라가는 데서 왔다.

# 성질

## 오차의 분리

참해를 격자점에서 잰 값을 $u\_h(t)$ 라 하면 전체 오차는 두 부분으로 나뉜다.

$$
U^n-u\_h(t\_n)=\bigl(U^n-U(t\_n)\bigr)+\bigl(U(t\_n)-u\_h(t\_n)\bigr)
$$

첫째는 시간 해법의 오차이고, 둘째는 반이산화의 오차다. 직관 절의 차분은 둘째 항을 $O(h^2)$ 로, 차수 $p$ 의 시간 해법은 첫째 항을 $O(\Delta t^p)$ 로 만든다. 단, 시간 해법의 오차 상수가 $h$ 에 무관하려면 시간 해법이 $h$ 에 대해 고르게 안정해야 한다.[^1]

## 강성

$A\_h$ 의 고윳값은 $k=1,\dots,N$ 에 대해 다음과 같다. 여기서 $N=1/h-1$ 이다.

$$
\lambda\_k=-\frac{4}{h^2}\sin^2\frac{k\pi h}{2}
$$

가장 작은 크기는 $\pi^2$ 근처에 머물고 가장 큰 크기는 $4/h^2$ 로 커진다. 그래서 격자를 잘게 할수록 반이산화는 [강성 방정식](stiff-equations.md)이 되고, Euler 방법은 $\Delta t\le h^2/2$ 를 요구한다. 음함수 해법은 이 제한이 없어, 열방정식의 선의 방법에는 A-안정 해법을 쓴다.

## 고윳값 판정의 범위

$A\_h$ 가 정규행렬이면, $\Delta t$ 와 고윳값의 곱이 모두 시간 해법의 안정 영역에 들어가는 것으로 안정성을 판정한다. 정규가 아닌 행렬에서는 고윳값만으로 부족하다. Reddy 와 Trefethen 은 $\Delta t A\_h$ 의 $\varepsilon$-의사스펙트럼(pseudospectrum)이 안정 영역에서 $O(\varepsilon)+O(\Delta t)$ 거리 안에 있는 것과 안정성이 동치임을 보였다.[^2]

## 이류 방정식

$u\_t+u\_x=0$ 의 $u\_x$ 를 중심 차분 $(U\_{j+1}-U\_{j-1})/(2h)$ 로 바꾸면 주기 경계에서 행렬이 반대칭이고, 고윳값이 모두 허수축 위에 있다. Euler 방법의 안정 영역은 허수축과 원점에서만 만나므로 어느 $\Delta t$ 에서도 불안정하다. 허수축의 한 구간을 안정 영역에 포함하는 4 단 Runge–Kutta 방법을 쓰거나, 바람 쪽 차분으로 고윳값을 왼쪽 반평면으로 옮긴다.

# 활용

- [Crank–Nicolson 방법](crank-nicolson-method.md). 열방정식의 반이산화에 사다리꼴 규칙을 쓴 것이다. 시간과 공간 모두 2 차다.
- 반응–확산 방정식. 확산 항이 강성이고 반응 항이 비선형이므로, 반이산화를 [Rosenbrock 방법](rosenbrock-methods.md)이나 후진 차분 공식으로 풀어 걸음마다 선형계 하나 또는 Newton 반복을 쓴다.
- 스펙트럼 방법. 주기 경계의 문제는 Fourier 계수를 미지수로 두는 반이산화를 만들고, 선형 부분을 [지수 적분기](exponential-integrators.md)로 정확히 푼다.
- 범용 해법의 재사용. 걸음 크기와 차수를 스스로 고르는 상미분방정식 해법을 반이산화에 그대로 쓰므로, 시간 방향의 오차 조절을 따로 만들지 않는다.[^3]

[^1]: W. Hundsdorfer, J. Verwer, *Numerical Solution of Time-Dependent Advection-Diffusion-Reaction Equations*, Springer (2003), I.1 장과 I.2 장.

[^2]: S. C. Reddy, L. N. Trefethen, "Stability of the method of lines", *Numerische Mathematik* 62 (1992), 235–267.

[^3]: W. E. Schiesser, *The Numerical Method of Lines*, Academic Press (1991).

# 연관 문서

## 선수지식

- [열방정식](heat-equation.md)
- [강성 방정식](stiff-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
