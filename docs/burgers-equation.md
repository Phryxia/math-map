# Burgers 방정식

# 개요

**Burgers 방정식(Burgers' equation)** 은 각 점의 값이 곧 그 값이 실려 가는 속도인 편미분방정식 $u_t+uu_x=0$ 이다. 물결의 뒤쪽이 앞쪽보다 빠르면 뒤쪽이 앞쪽을 따라잡아 물결의 앞면이 점점 가팔라지고, 어느 순간 세로로 선다. 이 방정식은 그 순간을 특성곡선이 서로 만나는 시각으로 계산하고, 점성 항 $\nu u_{xx}$ 를 더한 방정식은 Cole–Hopf 변환으로 [열방정식](heat-equation.md)이 되어 정확히 풀린다.

# 직관

처음 값을 다음과 같이 둔다. 왼쪽은 속도 $1$, 오른쪽은 속도 $0$ 이고 그 사이 $\lbrack 0,1\rbrack$ 에서 일차로 줄어든다.

$$
u_0(x)=\begin{cases}1&x\lt 0\cr 1-x&0\le x\le 1\cr 0&x\gt 1\end{cases}
$$

[수송 방정식](transport-equation.md)처럼 값은 특성곡선을 따라 실려 가고, 속도가 그 값 자신이므로 점 $x_0$ 에서 나온 특성곡선은 직선 $x=x_0+u_0(x_0)t$ 다. $0\le x_0\le 1$ 이면 $x=x_0+(1-x_0)t$ 이고, $t=1$ 에서 이 직선들은 모두 $x=1$ 에 모인다.

$t\lt 1$ 에서는 $x_0=(x-t)/(1-t)$ 로 풀어 $t\le x\le 1$ 위의 해를 얻는다.

$$
u(x,t)=\frac{1-x}{1-t}
$$

기울기 $-1/(1-t)$ 가 $t\to 1$ 에서 $-\infty$ 로 가고, $t=1$ 에서 값 $1$ 과 $0$ 이 한 점에 겹친다. 그 뒤로는 특성곡선을 따라 값을 실어 나르는 방법으로 해를 정할 수 없다.

# 정의

## 비점성 Burgers 방정식

함수 $u(x,t)$, $x\in\mathbb R$, $t\ge 0$ 에 대한 다음 식을 비점성 Burgers 방정식(inviscid Burgers' equation)이라 한다. 보존형으로 쓰면 오른쪽 식이다.

$$
u_t+uu_x=0,\qquad u_t+\Big(\frac{u^2}{2}\Big)\_x=0
$$

## 점성 Burgers 방정식

$\nu\gt 0$ 에 대한 다음 식을 점성 Burgers 방정식(viscous Burgers' equation)이라 한다. 오른쪽 항은 값이 높은 곳에서 낮은 곳으로 번지게 하는 확산이다.

$$
u_t+uu_x=\nu u_{xx}
$$

# 성질

## 파괴 시간

$u_0$ 이 매끄럽고 유계인 도함수를 가지면 매끄러운 해는 다음 시각 $t^\ast$ 까지 존재하고, 해는 $u=u_0(x-ut)$ 를 $u$ 에 대해 푼 것이다.

$$
t^\ast=-\frac{1}{\min_xu_0'(x)}
$$

$u_0'$ 이 어디서나 음이 아니면 $t^\ast=\infty$ 다. 직관 절에서는 $\min u_0'=-1$ 이므로 $t^\ast=1$ 이다. 이웃한 두 특성곡선 $x_0$, $x_0+\delta$ 사이의 거리가 $\delta(1+u_0'(x_0)t)$ 이고, 이것이 $0$ 이 되는 가장 이른 시각이 $t^\ast$ 다.

## 충격파

$t^\ast$ 뒤의 해는 불연속을 허용하는 약해로 정한다. 값 $u_l$ 과 $u_r$ 사이의 불연속은 Rankine–Hugoniot 조건(Rankine–Hugoniot condition)에 따라 다음 속도로 움직인다.

$$
s=\frac{u_l^2/2-u_r^2/2}{u_l-u_r}=\frac{u_l+u_r}{2}
$$

직관 절에서 $t\ge 1$ 의 해는 $x\lt 1+(t-1)/2$ 에서 $1$, 그 오른쪽에서 $0$ 이다. 불연속은 $u_l\gt u_r$ 일 때만 허용되고, $u_l\lt u_r$ 이면 해는 부채꼴로 퍼지는 희박파 $u=x/t$ 다. 이 선택 규칙과 그 일반화가 [엔트로피 해](entropy-solutions.md)이고, 두 상수 상태에서 시작하는 문제가 [Riemann 문제](riemann-problem.md)다.

## Cole–Hopf 변환

점성 방정식에서 $u=-2\nu\thinspace\varphi_x/\varphi$ 로 두면 $\varphi$ 는 열방정식 $\varphi_t=\nu\varphi_{xx}$ 를 만족한다. 이것을 Cole–Hopf 변환(Cole–Hopf transformation)이라 한다[^1]. 열방정식의 해를 열핵으로 쓰면 다음 해 공식이 나온다.

$$
u(x,t)=-2\nu\thinspace\frac{\partial}{\partial x}\log\int_{\mathbb R}\exp\Big(-\frac{(x-y)^2}{4\nu t}-\frac{1}{2\nu}\int_0^yu_0(z)\thinspace dz\Big)\thinspace dy
$$

## 점성 충격파와 점성 소멸 극한

$u_l\gt u_r$ 이면 점성 방정식은 속도 $s=(u_l+u_r)/2$ 로 모양을 유지하며 움직이는 해를 가진다.

$$
u(x,t)=s-\frac{u_l-u_r}{2}\tanh\Big(\frac{(u_l-u_r)(x-st)}{4\nu}\Big)
$$

전이 구간의 폭은 $\nu/(u_l-u_r)$ 꼴이고 $\nu\to 0$ 에서 충격파가 된다. 일반 처음 값에서도 해 공식에 [Laplace 방법](laplace-method.md)을 쓰면 $\nu\to 0$ 의 극한이 엔트로피 해라는 것이 나온다. 이것은 Hopf 가 보였다[^1].

# 활용

- 압축성 유체. 약한 충격파를 가진 음파의 전파를 근사하는 모형이고, 보존 법칙의 충격파와 희박파를 처음 설명할 때 쓰는 예다.
- 교통 흐름. 차량 밀도 $\rho$ 와 속도 $1-\rho$ 의 흐름 보존식 $\rho_t+(\rho(1-\rho))\_x=0$ 에서 $u=1-2\rho$ 로 두면 비점성 Burgers 방정식이 된다. 앞이 막힌 곳에서 생기는 정체의 경계가 충격파다.
- 수치 방법의 시험 문제. [Godunov 방법](godunov-method.md), [Roe 풀이](roe-solver.md), [HLL 풀이](hll-solver.md)(Harten–Lax–van Leer)를 충격파와 희박파가 정확히 알려진 이 방정식으로 비교하고, 보존형 차분이 올바른 충격파 속도를 내는지가 [Lax–Wendroff 정리](lax-wendroff-theorem.md)의 내용이다.
- 성장하는 계면. 계면의 높이 $h$ 에 대한 KPZ 방정식(Kardar–Parisi–Zhang equation)은 $u=-h_x$ 로 두면 잡음이 더해진 점성 Burgers 방정식이 되고, 이 계면의 높이 요동은 [KPZ 보편성류](kpz-universality.md)에 속한다.

[^1]: E. Hopf, "The partial differential equation u_t + uu_x = μu_xx", *Communications on Pure and Applied Mathematics* 3 (1950), 201–230. J. D. Cole, "On a quasi-linear parabolic equation occurring in aerodynamics", *Quarterly of Applied Mathematics* 9 (1951), 225–236.

# 연관 문서

## 선수지식

- [수송 방정식](transport-equation.md)
- [열방정식](heat-equation.md)

## 더 알아보기

- [유체의 Euler 방정식](euler-equations-fluid.md)

#analysis #computation
