# KP 위계

# 개요

**KP 위계(KP hierarchy, Kadomtsev–Petviashvili hierarchy)** 는 [Kadomtsev–Petviashvili 방정식](kadomtsev-petviashvili-equation.md)을 첫 식으로 포함하고 서로 가환인 흐름이 무한히 이어지는 편미분방정식의 모음이다. [KdV 위계](kdv-hierarchy.md)는 2계 연산자 $\partial_x^2+u$ 의 제곱근으로 흐름을 만들고, [Boussinesq 방정식](boussinesq-equation.md)의 위계는 3계 연산자의 세제곱근으로 만든다. 차수마다 위계가 따로 있다.

KP 위계는 제곱근이나 세제곱근 자리에 오는 1계 연산자 하나에서 출발해 이 위계들을 한꺼번에 담는다. 해는 tau 함수라는 함수 하나로 적히고, 그 함수의 계수가 만족하는 조건은 부분공간의 모임을 정하는 이차방정식과 같다.

# 직관

KdV 위계에서 흐름을 만든 것은 $L=\partial_x^2+u$ 자신이 아니라 제곱근 $L^{1/2}=\partial_x+\frac12u\thinspace\partial_x^{-1}+\cdots$ 의 거듭제곱이었다. $L^{1/2}$ 을 $n$ 제곱해 미분 부분만 남기고 $L$ 과의 교환자를 잡으면 $n$ 번째 흐름이 나온다. $n$ 이 짝수이면 $L^{n/2}$ 가 처음부터 미분연산자이고 $L$ 과 가환이라서 흐름이 $0$ 이다. 그래서 KdV 위계에는 홀수 번째 흐름만 있다.

짝수 번째 흐름이 사라진 것은 $L^{1/2}$ 의 제곱이 미분연산자라는 조건 하나 때문이다. 이 조건을 버리고 다음 연산자의 계수를 모두 자유로운 함수로 두면 둘째 흐름도 $0$ 이 아니다.

$$
\partial_x+u_2\partial_x^{-1}+u_3\partial_x^{-2}+\cdots
$$

둘째 흐름의 시간을 $y$, 셋째 흐름의 시간을 $t$ 로 두고 두 흐름이 가환이라는 조건을 쓰면 $u_3$ 이 소거되고 $u_2$ 에 대한 방정식 하나가 남는다. 그 방정식이 KP 방정식이다. $u_2$ 가 $y$ 에 의존하지 않으면 그 식은 KdV 가 된다.

# 정의

## Lax 연산자와 흐름

함수와 $\partial_x^{-1}$ 의 곱은 KdV 위계 문서의 의사미분연산자 규칙으로 바꾼다. 모든 정수 $m$ 에 대해 다음과 같다.

$$
\partial_x^m f=\sum_{j\ge 0}\binom{m}{j}f^{(j)}\partial_x^{m-j}
$$

$m=-1$ 이면 $\binom{-1}{j}=(-1)^j$ 이므로 $\partial_x^{-1}f=f\partial_x^{-1}-f'\partial_x^{-2}+f''\partial_x^{-3}-\cdots$ 다. 의사미분연산자 $A$ 에서 $\partial_x$ 의 음이 아닌 거듭제곱 항만 남긴 것을 $A\_+$, 나머지를 $A\_-$ 로 적는다.

**KP Lax 연산자** 는 다음 꼴의 의사미분연산자다.

$$
\mathcal L=\partial_x+u_2\partial_x^{-1}+u_3\partial_x^{-2}+u_4\partial_x^{-3}+\cdots
$$

계수 $u_2,u_3,\dots$ 는 무한히 많은 변수 $t_1,t_2,t_3,\dots$ 의 함수이고 $t_1=x$ 로 둔다. $B_n=(\mathcal L^n)\_+$ 라 할 때, $n=1,2,3,\dots$ 에 대한 다음 방정식들을 **KP 위계** 라 한다[^1].

$$
\frac{\partial\mathcal L}{\partial t_n}=\lbrack B_n,\mathcal L\rbrack
$$

$n=1$ 이면 $B_1=\partial_x$ 이고 식은 $\partial\mathcal L/\partial t_1=\partial\mathcal L/\partial x$ 다. 그래서 $t_1$ 과 $x$ 를 같은 변수로 둘 수 있다.

## 첫 두 흐름

아래첨자 $x$, $y$, $t$ 는 그 변수로 미분한 것이다. $\mathcal L^2$ 과 $\mathcal L^3$ 을 곱의 규칙으로 전개해 미분 부분을 남기면 다음이 나온다.

$$
B_2=\partial_x^2+2u_2,\qquad B_3=\partial_x^3+3u_2\partial_x+3u_{2,x}+3u_3
$$

$y=t_2$, $t=t_3$ 으로 둔다. 두 흐름의 가환 조건 $\partial B_3/\partial y-\partial B_2/\partial t+\lbrack B_3,B_2\rbrack=0$ 을 계산하면 $\partial_x$ 의 계수와 상수항에서 각각 식이 하나씩 나온다.

$$
\begin{aligned}
2u_{3,x}&=u_{2,y}-u_{2,xx}\cr
2u_{2,t}&=3u_{2,xy}+3u_{3,y}-3u_{3,xx}-u_{2,xxx}+6u_2u_{2,x}
\end{aligned}
$$

둘째 식을 $x$ 로 미분하고 첫째 식으로 $u_3$ 을 지우면 $u=u_2$ 에 대한 식 하나가 남는다.

$$
3u_{yy}=\bigl(4u_t-12uu_x-u_{xxx}\bigr)\_x
$$

$U=2u$, $T=-t/4$ 로 바꾸면 다음 식이 나오고, 이것이 Kadomtsev–Petviashvili 방정식 문서의 KP-II 다.

$$
\bigl(U_T+6UU_x+U_{xxx}\bigr)\_x+3U_{yy}=0
$$

## tau 함수

KP 위계의 해 $\mathcal L$ 마다 함수 $\tau(t_1,t_2,t_3,\dots)$ 가 상수배를 빼고 하나 정해져 다음을 만족한다. 이 $\tau$ 를 **tau 함수(tau function)** 라 한다[^2].

$$
u_2=\frac{\partial^2}{\partial x^2}\log\tau
$$

$\tau$ 로 쓰면 KP 방정식은 $\tau$ 의 이차식이 된다. 이 꼴을 Hirota 쌍선형 꼴(Hirota bilinear form)이라 한다.

$$
\begin{aligned}
&\tau\tau_{xxxx}-4\tau_x\tau_{xxx}+3\tau_{xx}^2\cr
&\quad+3\bigl(\tau\tau_{yy}-\tau_y^2\bigr)-4\bigl(\tau\tau_{xt}-\tau_x\tau_t\bigr)=0
\end{aligned}
$$

$\tau=1+e^\theta$ 이고 $\theta=ax+by+ct$ 이면 좌변은 $(a^4+3b^2-4ac)e^\theta$ 다. 두 수 $p$, $q$ 를 골라 $a=p-q$, $b=p^2-q^2$, $c=p^3-q^3$ 으로 두면 괄호가 $0$ 이 되어 $\tau$ 는 tau 함수다. 이때 다음이 나온다.

$$
U=2u_2=\frac{(p-q)^2}{2}\thinspace\mathrm{sech}^2\frac{\theta}{2}
$$

$\theta$ 에서 $y$ 의 계수를 $x$ 의 계수로 나눈 $p+q$ 가 파면의 기울기다. 이 해가 KP 방정식 문서의 기울어진 선 고립파다.

# 성질

## 흐름의 가환성

모든 $m$, $n$ 에 대해 $t_m$ 흐름과 $t_n$ 흐름은 가환이다. 연산자로는 다음 영곡률 조건(zero curvature condition, Zakharov–Shabat equation)과 같다[^1].

$$
\frac{\partial B_n}{\partial t_m}-\frac{\partial B_m}{\partial t_n}+\lbrack B_n,B_m\rbrack=0
$$

정의 절에서 KP 방정식을 얻은 계산이 $m=2$, $n=3$ 인 경우다. $m$, $n$ 을 바꾸면 $u_2,u_3,\dots$ 에 대한 식이 무한히 나오고, 이 식들 전체가 $\tau$ 에 대한 쌍선형 방정식의 무한한 모음으로 적힌다.

## KdV 와 Gelfand–Dickey 위계로의 환원

$\mathcal L^n$ 이 미분연산자이면, 곧 $(\mathcal L^n)\_-=0$ 이면 $B_{kn}=\mathcal L^{kn}$ 이 $\mathcal L$ 과 가환이다. 그래서 $t_n,t_{2n},t_{3n},\dots$ 흐름은 $0$ 이고 해는 이 변수들에 의존하지 않는다. 이 조건을 $n$ 환원($n$-reduction)이라 한다.

$n=2$ 이면 $\mathcal L^2=\partial_x^2+2u_2$ 이고, 남은 홀수 번째 흐름이 KdV 위계다. KdV 위계 문서의 $u$ 가 여기의 $2u_2$ 다. $n=3$ 이면 Boussinesq 방정식의 위계가 나오고, 일반의 $n$ 이면 Gelfand–Dickey 위계(Gelfand–Dickey hierarchy)가 나온다[^1].

## Sato Grassmann 다양체와 Plücker 관계

$\tau$ 를 [Schur 다항식](schur-polynomials.md)으로 전개한다. 거듭제곱 합 $p_k$ 를 $kt_k$ 로 바꾼 $s_\lambda(t)$ 를 쓰면 $s_{(1)}=x$, $s_{(2)}=\frac12x^2+y$, $s_{(1,1)}=\frac12x^2-y$ 다.

$$
\tau(t)=\sum_\lambda\pi_\lambda s_\lambda(t)
$$

Sato 의 정리(Sato's theorem)는 $\tau$ 가 KP 위계의 tau 함수일 필요충분조건이 계수 $\pi_\lambda$ 가 Plücker 관계를 만족하는 것이라는 정리다[^2][^3]. 계수의 모임 $(\pi_\lambda)$ 는 무한차원 [Grassmann 다양체](grassmannian.md)의 Plücker 좌표이고, 이 공간을 Sato Grassmann 다양체(Sato Grassmannian)라 한다.

$2\times 2$ 칸 안에 들어가는 분할만 쓰는 $\tau$ 는 $\mathrm{Gr}(2,4)$ 의 점에 대응한다. 첨자 $\lbrace i,j\rbrace$ 를 분할 $(j-2,i-1)$ 로 바꾸면 Grassmann 다양체 문서의 관계식 $p\_{12}p\_{34}-p\_{13}p\_{24}+p\_{14}p\_{23}=0$ 이 다음 식이 된다.

$$
\pi_\varnothing\pi_{(2,2)}-\pi_{(1)}\pi_{(2,1)}+\pi_{(2)}\pi_{(1,1)}=0
$$

$\tau=s_{(2)}=\frac12x^2+y$ 는 $\pi_{(2)}$ 만 $1$ 이므로 이 관계를 만족한다. Hirota 쌍선형 꼴에 넣어도 $3\tau_{xx}^2=3$ 과 $-3\tau_y^2=-3$ 이 상쇄되어 좌변이 $0$ 이다. $\tau=s_{(2)}+s_{(1,1)}=x^2$ 은 $\pi_{(2)}\pi_{(1,1)}=1$ 이라 관계를 어기고, 쌍선형 꼴의 좌변도 $3\tau_{xx}^2=12$ 로 $0$ 이 아니다.

## 해의 군

Sato Grassmann 다양체에는 무한차원 일반선형군이 작용하고, 이 작용이 tau 함수를 tau 함수로 보낸다. 그래서 KP 위계의 해 하나에서 군의 원소를 작용해 다른 해를 얻는다. Date, Jimbo, Kashiwara, Miwa 는 이 작용을 페르미온 Fock 공간(fermionic Fock space) 위의 표현으로 적고, $N$ 고립파 해가 꼭짓점 연산자(vertex operator)를 $N$ 번 작용해 얻어진다는 것을 보였다[^3].

# 활용

- Schottky 문제. 아벨 다양체의 theta 함수를 $\tau$ 로 놓은 함수가 KP 위계의 해일 필요충분조건은 그 아벨 다양체가 곡선의 [Jacobi 다양체](jacobian-variety.md)인 것이다[^4]. KP 방정식 문서의 Shiota 정리가 이것이다.
- KP 고립파의 교차 모양. Kodama 와 Williams 는 $\tau$ 가 $\mathrm{Gr}(k,n)$ 의 전비음 부분(totally nonnegative part)의 점에서 나오면 해가 어디서나 매끄럽다는 것을 보이고, 선 고립파들이 만나는 모양을 그 점의 Plücker 좌표 가운데 $0$ 인 것의 조합으로 분류했다[^5].
- Hurwitz 수. Okounkov 는 곡선의 분지 피복을 세는 Hurwitz 수(Hurwitz number)의 생성함수가 Toda 위계(Toda hierarchy)의 tau 함수이고, 한쪽 변수 묶음을 고정하면 KP 위계의 tau 함수임을 보였다[^6].
- 곡선의 모듈라이 공간. KdV 위계 문서의 Witten 추측에서 교차수의 생성함수는 KP 위계의 $2$ 환원의 tau 함수다.

[^1]: L. A. Dickey, *Soliton Equations and Hamiltonian Systems*, 2nd ed., Advanced Series in Mathematical Physics 26, World Scientific, 2003.
[^2]: M. Sato, "Soliton equations as dynamical systems on infinite dimensional Grassmann manifolds", *RIMS Kôkyûroku* 439 (1981), 30–46.
[^3]: E. Date, M. Jimbo, M. Kashiwara, T. Miwa, "Transformation groups for soliton equations", in *Nonlinear Integrable Systems — Classical Theory and Quantum Theory*, World Scientific, 1983, 39–119.
[^4]: T. Shiota, "Characterization of Jacobian varieties in terms of soliton equations", *Inventiones Mathematicae* 83 (1986), 333–382.
[^5]: Y. Kodama, L. Williams, "KP solitons and total positivity for the Grassmannian", *Inventiones Mathematicae* 198 (2014), 637–699.
[^6]: A. Okounkov, "Toda equations for Hurwitz numbers", *Mathematical Research Letters* 7 (2000), 447–453.

# 연관 문서

## 선수지식

- [Kadomtsev–Petviashvili 방정식](kadomtsev-petviashvili-equation.md)
- [KdV 위계](kdv-hierarchy.md)
- [Grassmann 다양체](grassmannian.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algebra #differential_geometry #combinatorics
