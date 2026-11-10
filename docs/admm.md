# 교대 방향 승수법

# 개요

**교대 방향 승수법(alternating direction method of multipliers, ADMM)** 은 목적함수를 두 부분으로 나누어 부분마다 따로 최소화하면서, 두 부분이 같은 답에 이르도록 승수로 맞춰 가는 반복이다. 잡음 섞인 측정값 $b_1,\dots,b_n$ 을 매끄럽게 하려고 $\frac12\sum_i(x_i-b_i)^2+\lambda\sum_i\vert x_{i+1}-x_i\vert$ 를 최소화하면, 뒤 항은 한 좌표가 이웃한 두 차이에 함께 들어 있어 좌표마다 따로 풀리지 않는다. ADMM 은 차이 $x_{i+1}-x_i$ 를 새 변수 $z_i$ 로 떼어 내, $x$ 는 연립일차방정식으로, $z$ 는 좌표마다 연성 문턱으로 번갈아 구하고, $z_i=x_{i+1}-x_i$ 가 성립하도록 승수를 고친다.

# 직관

두 점만 있는 경우로 줄인다. 측정값이 $b=(0,3)$ 이고 $\frac12(x_1-0)^2+\frac12(x_2-3)^2+\vert x_2-x_1\vert$ 를 최소화한다. 차이 $d=x_2-x_1$ 을 고정하면 앞 두 항은 $x=(1.5-d/2,\thinspace 1.5+d/2)$ 에서 가장 작고 그 값은 $(1.5-d/2)^2$ 이다.

$(1.5-d/2)^2+\vert d\vert$ 는 $d=1$ 에서 가장 작으므로 답은 $x=(1,2)$ 다. 두 측정값이 $1$ 씩 서로 가까워진다.

[근접 경사법](proximal-gradient-method.md)으로 이 문제를 풀려면 $\vert x_2-x_1\vert$ 의 근접 연산자가 있어야 한다. $\vert x_1\vert+\vert x_2\vert$ 였다면 좌표마다 연성 문턱을 쓰면 되지만, 차이의 절댓값은 두 좌표를 함께 묶는다. 점이 $n$ 개이면 $x_i$ 가 $\vert x_i-x_{i-1}\vert$ 와 $\vert x_{i+1}-x_i\vert$ 에 함께 들어 있어 근접 연산자 자체가 원래 문제만큼 어렵다.

차이를 새 변수 $z$ 로 떼어 $\frac12\Vert x-b\Vert^2+\vert z\vert$ 를 $x_2-x_1-z=0$ 아래에서 최소화한다. $z$ 만 보면 절댓값 하나라 연성 문턱으로 풀리고, $x$ 만 보면 이차식이라 연립일차방정식으로 풀린다. 제약을 맞추려고 차이 $x_2-x_1-z$ 에 승수를 붙이고 그 제곱도 벌점으로 더한 뒤, $x$ 와 $z$ 를 한 번씩 번갈아 최소화하고 남은 차이를 승수에 더한다. 벌점 계수를 $1$ 로 두고 승수를 $u$ 로 쓰면 한 번의 반복은 다음이다.

- $x$ 단계. $\frac12\Vert x-b\Vert^2+\frac12(x_2-x_1-z+u)^2$ 을 최소화한다. $w=z-u$ 로 두면 답은 $x=\bigl((3-w)/3,\thinspace(6+w)/3\bigr)$ 이고 $x_2-x_1=1+2w/3$ 이다.
- $z$ 단계. $\vert z\vert+\frac12(z-(x_2-x_1+u))^2$ 을 최소화한다. 답은 $x_2-x_1+u$ 에 문턱 $1$ 의 연성 문턱을 쓴 값이다.
- 승수 단계. $u$ 에 남은 차이 $x_2-x_1-z$ 를 더한다.

$z=3$ , $u=0$ 에서 시작하면 $x$ 단계가 $x=(0,3)$ 곧 측정값 그대로를 주고, $z=2$ , $u=1$ 이 된다. 다음 반복에서 $x=(2/3,\thinspace 7/3)$ , $z=5/3$ 이고 $u$ 는 $1$ 에 머문다. 그 뒤로 $u=1$ 이 유지되고 차이 $x_2-x_1$ 은 $3,\thinspace 5/3,\thinspace 13/9,\dots$ 로 $1$ 과의 간격이 반복마다 $2/3$ 배가 되어 $x$ 가 답 $(1,2)$ 로 간다. 이 반복을 교대 방향 승수법이라 부른다.

# 정의

$f:\mathbb R^n\to\mathbb R\cup\lbrace +\infty\rbrace$ 와 $g:\mathbb R^m\to\mathbb R\cup\lbrace +\infty\rbrace$ 가 고유하고 볼록이고 하반연속이라 한다. 행렬 $A\in\mathbb R^{p\times n}$ , $B\in\mathbb R^{p\times m}$ 과 $c\in\mathbb R^p$ 에 대해 다음 문제를 푼다.

$$
\min_{x,z}\thinspace f(x)+g(z)\quad\text{subject to}\quad Ax+Bz=c
$$

직관 절의 예는 $f(x)=\frac12\Vert x-b\Vert^2$ , $g(z)=\vert z\vert$ , $A=\begin{pmatrix}-1&1\end{pmatrix}$ , $B=-1$ , $c=0$ 이다.

## 증강 Lagrangian

벌점 계수 $\rho\gt 0$ 에 대해 **증강 Lagrangian(augmented Lagrangian)** 은 [Lagrange 쌍대성](lagrange-duality.md)의 Lagrangian 에 제약 위반의 제곱을 더한 함수다. 이 함수를 $(x,z)$ 에 대해 한꺼번에 최소화하고 $y$ 를 갱신하는 반복이 [증강 Lagrangian 방법](augmented-lagrangian-method.md)이다.

$$
L_\rho(x,z,y)=f(x)+g(z)+\langle y,\thinspace Ax+Bz-c\rangle+\frac{\rho}{2}\Vert Ax+Bz-c\Vert^2
$$

$y\in\mathbb R^p$ 가 승수다. 제약을 지키는 점에서는 더한 두 항이 $0$ 이므로 $L_\rho$ 가 목적함수와 같다.

## 반복

**교대 방향 승수법** 은 다음 반복이다.

$$
\begin{aligned}
x_{k+1}&=\mathop{\mathrm{arg\thinspace min}}\_{x}\thinspace L_\rho(x,z_k,y_k)\cr
z_{k+1}&=\mathop{\mathrm{arg\thinspace min}}\_{z}\thinspace L_\rho(x_{k+1},z,y_k)\cr
y_{k+1}&=y_k+\rho\thinspace(Ax_{k+1}+Bz_{k+1}-c)
\end{aligned}
$$

$u=y/\rho$ 로 바꾸면 일차항과 제곱항이 하나로 묶여 $x$ 단계와 승수 단계가 다음이 된다.

$$
\begin{aligned}
x_{k+1}&=\mathop{\mathrm{argmin}}\_x\Bigl(f(x)+\frac{\rho}{2}\Vert Ax+Bz_k-c+u_k\Vert^2\Bigr)\cr
u_{k+1}&=u_k+Ax_{k+1}+Bz_{k+1}-c
\end{aligned}
$$

직관 절의 계산은 이 꼴에서 $\rho=1$ 인 경우다. $B=-I$ 이고 $c=0$ 이면 $z$ 단계는 근접 연산자 $\mathrm{prox}\_{g/\rho}(Ax_{k+1}+u_k)$ 다.

## 잔차

다음 $r_{k+1}$ 을 **원 잔차(primal residual)**, $s_{k+1}$ 을 **쌍대 잔차(dual residual)** 라 한다.

$$
r_{k+1}=Ax_{k+1}+Bz_{k+1}-c,\qquad s_{k+1}=\rho A^\top B(z_{k+1}-z_k)
$$

원 잔차는 제약을 얼마나 어기는지이고, 쌍대 잔차는 아래 최적성 조건에서 $x$ 쪽 조건이 얼마나 어긋나는지다. 직관 절의 둘째 반복은 차이 $5/3$ 과 $z=5/3$ 이 같아 원 잔차가 $0$ 이고, $z$ 가 $2$ 에서 $5/3$ 으로 바뀌었으므로 쌍대 잔차는 $(-1/3,\thinspace 1/3)$ 이다.

# 성질

## 최적성 조건

$x^\star,z^\star,y^\star$ 가 최적인 것은 다음 세 조건이 성립하는 것과 동치다. 여기서 $\partial$ 는 [부분미분](subdifferential.md)이다.

$$
Ax^\star+Bz^\star=c,\qquad 0\in\partial f(x^\star)+A^\top y^\star,\qquad 0\in\partial g(z^\star)+B^\top y^\star
$$

Lagrangian 의 안장점(saddle point), 곧 $x,z$ 에 대해 최소이고 $y$ 에 대해 최대인 점의 조건을 적은 것이다.

## z 쪽 조건의 자동 성립

정리. 모든 반복에서 다음이 성립한다.

$$
0\in\partial g(z_{k+1})+B^\top y_{k+1}
$$

증명의 요지. $z$ 단계와 $x$ 단계의 최적성 조건은 다음과 같다.

$$
\begin{aligned}
0&\in\partial g(z_{k+1})+B^\top y_k+\rho B^\top(Ax_{k+1}+Bz_{k+1}-c)\cr
0&\in\partial f(x_{k+1})+A^\top y_{k+1}+\rho A^\top B(z_k-z_{k+1})
\end{aligned}
$$

첫 줄의 뒤 두 항은 승수 단계의 식으로 $B^\top y_{k+1}$ 이다. 둘째 줄의 남는 어긋남이 쌍대 잔차 $s_{k+1}$ 다. 그래서 $r_k$ 와 $s_k$ 가 둘 다 작아지면 반복을 멈춘다[^1].

## 수렴

정리. 증강하지 않은 Lagrangian $L_0$ 이 안장점을 가지면, 모든 $\rho\gt 0$ 에서 $r_k\to 0$ 이고, $f(x_k)+g(z_k)$ 가 최적값으로 수렴하고, $y_k$ 가 쌍대 문제의 해로 수렴한다[^1].

증명의 요지. 안장점 $(x^\star,z^\star,y^\star)$ 에 대해 $V_k=\frac1\rho\Vert y_k-y^\star\Vert^2+\rho\Vert B(z_k-z^\star)\Vert^2$ 로 두고, 위의 두 최적성 조건과 볼록성의 부등식을 더하면 다음이 나온다.

$$
V_{k+1}\le V_k-\rho\Vert r_{k+1}\Vert^2-\rho\Vert B(z_{k+1}-z_k)\Vert^2
$$

$V_k$ 가 감소하고 음이 아니므로 빠지는 두 항의 합이 유한하고, 그래서 $r_k\to 0$ 과 $s_k\to 0$ 이다. $f$ 와 $g$ 가 매끄럽거나 강볼록일 필요가 없고, $f$ 와 $g$ 가 지시함수여도 된다.

평균한 반복점에 대해서는 최적성 조건의 어긋남이 $O(1/k)$ 로 줄어든다[^2]. 직관 절의 예에서는 간격이 반복마다 $2/3$ 배가 되어 이보다 빠르다.

## Douglas–Rachford 분할과의 관계

ADMM 은 쌍대 문제에 [Douglas–Rachford 분할](douglas-rachford-splitting.md)을 쓴 것과 같다[^3]. 쌍대 문제는 $f$ 쪽 항과 $g$ 쪽 항의 합의 최소화이고, Douglas–Rachford 분할은 두 항의 근접 연산자를 번갈아 써서 그런 합을 최소화하는 반복이다. 그래서 수렴 증명을 [단조 작용소](monotone-operators.md)의 고정점 반복으로 할 수도 있다.

# 활용

- ℓ¹ 정칙화 회귀. $\frac12\Vert Ax-b\Vert^2+\lambda\Vert z\Vert\_1$ 을 $x=z$ 아래에서 풀면 $x$ 단계가 $(A^\top A+\rho I)x=A^\top b+\rho(z_k-u_k)$ 이다. 행렬을 한 번 분해해 두면 반복마다 삼각 연립방정식만 풀고, $z$ 단계는 [근접 경사법](proximal-gradient-method.md)의 연성 문턱이다. [압축 센싱](compressed-sensing.md)의 기저 추적 문제도 같은 분할로 푼다.
- 전변동 잡음 제거(total variation denoising). 개요의 문제에서 차분 행렬 $D$ 로 $z=Dx$ 를 두면 $x$ 단계가 삼중대각 연립방정식 $(I+\rho D^\top D)x=b+\rho D^\top(z_k-u_k)$ 이고 $z$ 단계는 좌표별 연성 문턱이다. 이미지에서는 $D$ 가 가로와 세로 차분이다.
- 합의 최적화(consensus optimization). $\sum_{i=1}^N f_i(x)$ 를 기계 $N$ 대에 나누어 최소화할 때 $x_i=z$ 를 제약으로 둔다. $x$ 단계는 기계마다 따로 $f_i$ 만 다루고, $z$ 단계는 $x_i+u_i$ 의 평균이다. 기계끼리 주고받는 것은 벡터 하나씩이다.
- [반정부호 계획법](semidefinite-programming.md). 변수를 아핀 제약 쪽 $x$ 와 반정부호 원뿔 쪽 $z$ 로 나누면 $z$ 단계가 원뿔로의 사영이고, 사영은 [고윳값](eigenvalues.md) 분해 뒤 음의 고윳값을 $0$ 으로 바꾸는 것이다. [내점법](interior-point-method.md)보다 정밀도는 낮지만 반복 하나가 가벼워 큰 문제에 쓴다.
- [행렬 완성](matrix-completion.md). 관측된 성분을 맞추는 제약과 핵 노름 항을 나누면 핵 노름 쪽 단계가 특이값 연성 문턱이다.

[^1]: S. Boyd, N. Parikh, E. Chu, B. Peleato and J. Eckstein, *Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers*, Foundations and Trends in Machine Learning 3(1), 2011, 1–122. 3.2 절과 3.3 절, 부록 A.
[^2]: B. He and X. Yuan, *On the O(1/n) Convergence Rate of the Douglas–Rachford Alternating Direction Method*, SIAM Journal on Numerical Analysis 50(2), 2012, 700–709.
[^3]: J. Eckstein and D. P. Bertsekas, *On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators*, Mathematical Programming 55, 1992, 293–318.

# 연관 문서

## 선수지식

- [Lagrange 쌍대성](lagrange-duality.md)
- [근접 경사법](proximal-gradient-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #statistics #signal_processing
