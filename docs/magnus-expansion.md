# Magnus 전개

# 개요

**Magnus 전개(Magnus expansion)** 는 계수가 시간에 따라 바뀌는 선형 미분방정식 $x'=A(t)x$ 의 해를 행렬 지수 하나 $e^{\Omega(t)}$ 로 쓰고, 지수 $\Omega(t)$ 를 $A$ 의 적분과 교환자의 급수로 구하는 방법이다. [Airy 방정식](airy-functions.md) $y''=ty$ 를 $y(0)=1$, $y'(0)=0$ 으로 풀면 $y(1)=1.17230$ 이다. 수 하나짜리 방정식 $x'=a(t)x$ 의 해가 $e^{\int a}$ 인 것을 본떠 행렬로 $e^{\int A}$ 를 계산하면 $1.26059$ 가 나와 $0.088$ 어긋난다. Magnus 전개는 이 어긋남을 교환자 항으로 고쳐, 둘째 항까지만 써도 $1.17381$ 을 낸다.

# 직관

$y''=ty$ 는 $x=(y,y')$ 로 두면 $x'=A(t)x$ 이고 계수 행렬은 다음과 같다.

$$
A(t)=\begin{pmatrix}0&1\cr t&0\end{pmatrix}
$$

$A$ 가 상수이면 해가 $e^{tA}x(0)$ 이고, $a(t)$ 가 수이면 해가 $e^{\int_0^ta}x(0)$ 이다. 두 경우를 본떠 $\Omega_1(t)=\int_0^tA(s)\thinspace ds$ 의 지수를 시험한다. $t=1$ 에서 $\Omega_1$ 은 대각성분이 $0$ 인 행렬이라 $e^{\Omega_1}$ 의 두 대각성분이 $1.26059$ 로 같은데, 참해의 행렬은 대각성분이 $1.17230$ 과 $1.34744$ 다.

[행렬 지수](matrix-exponential.md)의 지수법칙은 교환하는 행렬에서만 성립한다. $A(s)$ 와 $A(u)$ 는 $s\ne u$ 이면 교환하지 않는다. $\lbrack A(s),A(u)\rbrack=A(s)A(u)-A(u)A(s)$ 를 계산하면 다음이 나온다.

$$
\lbrack A(s),A(u)\rbrack=(u-s)\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}
$$

시간 구간을 둘로 나누고 각 절반에서 $A$ 를 상수로 보면, 해는 앞 절반의 흐름 $e^Y$ 뒤에 뒤 절반의 흐름 $e^X$ 를 곱한 $e^Xe^Y$ 다. $X$ 와 $Y$ 는 각 절반의 길이에 그 절반의 $A$ 를 곱한 행렬이다. [Baker–Campbell–Hausdorff 공식](baker-campbell-hausdorff.md)으로 이 곱의 지수에는 $X+Y$ 말고 $\tfrac12\lbrack X,Y\rbrack$ 가 더 붙는다. 시간을 잘게 나눌수록 이 항들이 모여, 늦은 시각 $s$ 와 이른 시각 $u$ 의 모든 짝에 대한 적분이 된다.

$$
\Omega_2(t)=\frac12\int_0^t\int_0^s\lbrack A(s),A(u)\rbrack\thinspace du\thinspace ds
$$

위의 교환자를 넣으면 $\Omega_2(t)$ 는 대각성분이 $-t^3/12$ 와 $t^3/12$ 인 행렬이다. $t=1$ 에서 $e^{\Omega_1+\Omega_2}$ 의 대각성분은 $1.17381$ 과 $1.35492$ 이고, 행렬 성분 가운데 가장 큰 오차가 $0.088$ 에서 $0.0093$ 으로 준다.

# 정의

## Magnus 급수

$x'=A(t)x$, $x(0)=x_0$ 의 해를 $x(t)=e^{\Omega(t)}x_0$ 로 쓰고 $\Omega(0)=0$ 으로 둔다. $\Omega$ 를 $A$ 의 차수별 항 $\Omega_1,\Omega_2,\Omega_3,\dots$ 의 합으로 전개한 것을 **Magnus 급수(Magnus series)** 라 한다. 처음 세 항은 다음과 같다.[^1]

$$
\begin{aligned}
\Omega_1(t)&=\int_0^tA(t_1)\thinspace dt_1\cr
\Omega_2(t)&=\frac12\int_0^t\int_0^{t_1}\lbrack A(t_1),A(t_2)\rbrack\thinspace dt_2\thinspace dt_1\cr
\Omega_3(t)&=\frac16\int_0^t\int_0^{t_1}\int_0^{t_2}\Bigl(\lbrack A(t_1),\lbrack A(t_2),A(t_3)\rbrack\rbrack+\lbrack A(t_3),\lbrack A(t_2),A(t_1)\rbrack\rbrack\Bigr)\thinspace dt_3\thinspace dt_2\thinspace dt_1
\end{aligned}
$$

직관 절의 Airy 방정식에서 $\Omega_1(1)$ 과 $\Omega_2(1)$ 은 다음과 같다.

$$
\Omega_1(1)=\begin{pmatrix}0&1\cr \tfrac12&0\end{pmatrix},\qquad \Omega_2(1)=\begin{pmatrix}-\tfrac1{12}&0\cr 0&\tfrac1{12}\end{pmatrix}
$$

## 지수의 미분방정식

$\Omega$ 는 다음 미분방정식을 만족한다. $\mathrm{ad}\_\Omega(B)=\lbrack\Omega,B\rbrack$ 이고, $B_k$ 는 [Bernoulli 수](bernoulli-numbers.md)로 $B_0=1$, $B_1=-\tfrac12$, $B_2=\tfrac16$ 이다.[^1]

$$
\Omega'=\sum\_{k=0}^\infty\frac{B_k}{k!}\mathrm{ad}\_\Omega^k\bigl(A(t)\bigr)=A-\tfrac12\lbrack\Omega,A\rbrack+\tfrac1{12}\lbrack\Omega,\lbrack\Omega,A\rbrack\rbrack-\cdots
$$

$\Omega=0$ 에서 시작해 이 식에 앞 차수의 근사를 넣고 적분하기를 되풀이하면 $\Omega_1$, $\Omega_2$, $\Omega_3$ 이 차례로 나온다.

## Magnus 적분법

한 걸음 $\lbrack t_n,t_n+h\rbrack$ 에서 Magnus 급수를 자르고 적분을 구적으로 바꾼 뒤 $x\_{n+1}=e^{\Omega}x_n$ 으로 나아가는 방법을 **Magnus 적분법(Magnus integrator)** 이라 한다. 걸음 안의 [Gauss 구적](gaussian-quadrature.md) 마디 $c\_{1,2}=\tfrac12\mp\tfrac{\sqrt3}6$ 에서 $A_i=A(t_n+c_ih)$ 를 재어 다음으로 두면 차수 $4$ 인 방법이 된다.[^2]

$$
\Omega=\frac h2(A_1+A_2)-\frac{\sqrt3}{12}h^2\lbrack A_1,A_2\rbrack
$$

Airy 방정식처럼 $A(t)$ 가 $t$ 의 일차식이면 이 식이 $\Omega_1+\Omega_2$ 와 같고, 직관 절의 $t=1$ 계산은 이 방법의 걸음 하나다.

# 성질

## 교환하는 경우

모든 $s$, $u$ 에서 $A(s)$ 와 $A(u)$ 가 교환하면 $\Omega_2$ 이후의 항이 모두 $0$ 이라 $x(t)=e^{\int_0^tA}x_0$ 이 정확한 해다. 상수 행렬과 수 하나짜리 방정식이 이 경우다.

## 수렴

$\int_0^t\Vert A(s)\Vert\thinspace ds\lt\pi$ 이면 Magnus 급수가 수렴하고 그 합의 지수가 참해를 준다.[^3] 직관 절은 $\int_0^1\Vert A(s)\Vert\thinspace ds$ 가 $\pi$ 보다 작은 경우라 처음 두 항으로 오차가 빠르게 준다. 긴 시간 구간에서는 급수 대신 위의 적분법으로 짧은 걸음을 이어 붙인다.

## 구조 보존

$A(t)$ 가 모두 어떤 행렬 [Lie 대수](lie-algebras.md) $\mathfrak g$ 에 속하면 $\Omega_k$ 도 모두 $\mathfrak g$ 에 속한다. 각 항이 $A$ 의 적분과 교환자로만 만들어지기 때문이다. 그래서 급수를 어디서 잘라도 $e^\Omega$ 가 대응하는 [Lie 군](lie-groups.md)에 머문다. $A(t)$ 가 반대칭이면 잘린 근사도 직교행렬이라 벡터의 길이를 정확히 보존하고, [Runge–Kutta 방법](runge-kutta-methods.md)은 일반적으로 이 성질을 갖지 않는다.

# 활용

- 양자역학. 시간에 따라 바뀌는 Hamilton 작용소 $H(t)$ 의 Schrödinger 방정식은 $A(t)=-iH(t)$ 인 경우이고, 잘린 Magnus 급수가 유니터리라 확률의 합이 $1$ 로 남는다. 핵자기공명의 평균 Hamilton 이론(average Hamiltonian theory)이 $\Omega_1$, $\Omega_2$ 를 쓴다.[^1]
- 기하적 수치적분. 회전군이나 유니터리군에 머물러야 하는 해를 구조 보존 성질로 계산한다.[^2]
- [주기 계수 방정식](floquet-theory.md). 주기 $T$ 인 $A(t)$ 에서 $e^{\Omega(T)}$ 가 한 주기의 흐름이고, 그 고윳값으로 해의 안정성을 판정한다.

[^1]: S. Blanes, F. Casas, J. A. Oteo, J. Ros, "The Magnus expansion and some of its applications", *Physics Reports* 470 (2009), 151–238. 급수의 처음 항들, Bernoulli 수를 쓴 미분방정식, 양자역학과 핵자기공명의 응용.
[^2]: A. Iserles, S. P. Nørsett, "On the solution of linear differential equations in Lie groups", *Philosophical Transactions of the Royal Society A* 357 (1999), 983–1019. Magnus 적분법과 구조 보존. 차수 4 의 두 마디 공식은 E. Hairer, C. Lubich, G. Wanner, *Geometric Numerical Integration*, 2nd ed., Springer (2006), IV.7 절.
[^3]: P. C. Moan, J. Niesen, "Convergence of the Magnus series", *Foundations of Computational Mathematics* 8 (2008), 291–301.

# 연관 문서

## 선수지식

- [Baker–Campbell–Hausdorff 공식](baker-campbell-hausdorff.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra #algorithms
