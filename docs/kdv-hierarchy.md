# KdV 위계

# 개요

**KdV 위계(KdV hierarchy)** 는 [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)과 보존량을 함께 쓰며 서로 방해하지 않는 무한히 많은 시간 흐름의 모음이다. KdV 의 보존량 $\int u^2dx$ 를 에너지로 삼아 흐름을 만들면 파동을 그대로 옆으로 미는 평행이동이 나오고, 다음 보존량을 에너지로 삼으면 KdV 자신이 나온다. 위계는 이 과정을 모든 보존량에 대해 되풀이해 얻은 방정식들을 하나의 연산자로 적고, 그 흐름들이 어떤 순서로 적용해도 같은 결과를 낸다는 것을 보인다.

# 직관

KdV $u_t+6uu_x+u_{xxx}=0$ 의 보존량 $I_3=\int(u^3-\frac12u_x^2)dx$ 는 $\delta I_3/\delta u=3u^2+u_{xx}$ 를 만족하므로, KdV 는 $u_t=-\partial_x(\delta I_3/\delta u)$ 라 쓸 수 있다. 같은 꼴에 다른 보존량을 넣는다.

$I_2=\int u^2dx$ 를 넣으면 $\delta I_2/\delta u=2u$ 이므로 $u_t=-2u_x$ 이고, 해는 $u(x,t)=u(x-2t,0)$ 이다. 처음 모양을 속도 $2$ 로 옮기기만 하는 흐름이다. $I_1=\int u\thinspace dx$ 를 넣으면 $\delta I_1/\delta u=1$ 이어서 $u_t=0$ 이다.

KdV 에는 $x$ 가 직접 나오지 않으므로 $u(x,t)$ 가 해이면 $u(x-2s,t)$ 도 해다. 그래서 평행이동 흐름과 KdV 흐름은 어느 쪽을 먼저 적용해도 결과가 같다. KdV 의 보존량은 무한히 많으므로 이 과정을 계속하면 흐름이 무한히 나오고, 그 다음 것은 $u$ 의 5계 도함수를 포함하는 방정식이다.

# 정의

미분연산자 $L=\partial_x^2+u$ 의 제곱근을 $\partial_x^{-1}$ 의 거듭제곱까지 허용한 형식적 급수로 둔다.

$$
L^{1/2}=\partial_x+\frac12u\thinspace\partial_x^{-1}-\frac14u_x\thinspace\partial_x^{-2}+\cdots
$$

$\partial_x^{-1}$ 은 $\partial_x^{-1}f=f\partial_x^{-1}-f_x\partial_x^{-2}+f_{xx}\partial_x^{-3}-\cdots$ 의 규칙으로 함수와 바꿔 쓴다. 이런 급수를 **의사미분연산자(pseudodifferential operator)** 라 하고, 급수에서 $\partial_x$ 의 음이 아닌 거듭제곱 항만 남긴 것을 $(\cdot)\_+$ 로 적는다.

$k=0,1,2,\dots$ 에 대한 다음 방정식들을 **KdV 위계** 라 한다.

$$
\frac{\partial L}{\partial t\_k}=\bigl\lbrack(L^{(2k+1)/2})\_+,\thinspace L\bigr\rbrack
$$

$L$ 의 시간 미분은 곱셈 연산자 $u_{t_k}$ 이고, 우변도 곱셈 연산자가 되므로 각 식은 $u$ 에 대한 편미분방정식이다. $k=0$ 이면 $(L^{1/2})\_+=\partial_x$ 이고 $u_{t_0}=u_x$ 로 평행이동이다. $k=1$ 이면 다음이 나온다.

$$
(L^{3/2})\_+=\partial_x^3+\frac32u\thinspace\partial_x+\frac34u_x,\qquad u_{t_1}=\frac14\bigl(u_{xxx}+6uu_x\bigr)
$$

$t=-t_1/4$ 로 두면 KdV $u_t+6uu_x+u_{xxx}=0$ 이다. 직관 절의 두 흐름이 $k=0$, $k=1$ 이다.

# 성질

## 흐름의 가환성

서로 다른 $k$, $l$ 의 흐름은 가환이다. $u$ 를 $t_k$ 방향으로 먼저 흘리고 $t_l$ 방향으로 흘린 결과와 그 반대 순서의 결과가 같다. 연산자로는 다음 영곡률 조건(zero curvature condition)과 같다[^1].

$$
\frac{\partial}{\partial t\_l}(L^{(2k+1)/2})\_+-\frac{\partial}{\partial t\_k}(L^{(2l+1)/2})\_++\bigl\lbrack(L^{(2k+1)/2})\_+,\thinspace(L^{(2l+1)/2})\_+\bigr\rbrack=0
$$

## 보존량과 Hamilton 꼴

각 흐름은 $L$ 의 스펙트럼을 바꾸지 않는 [Lax 쌍](lax-pairs.md)의 방정식이다. 그래서 모든 흐름이 같은 보존량을 갖는다. 보존량은 $L^{(2k+1)/2}$ 의 $\partial_x^{-1}$ 계수의 적분 $H_k=\int\mathrm{res}\thinspace L^{(2k+1)/2}dx$ 로 얻는다. 각 흐름은 상수배를 빼면 $H_k$ 를 에너지로 하는 Hamilton 꼴 $u_{t_k}=\partial_x(\delta H_k/\delta u)$ 로 쓸 수 있고, 서로 다른 $H_k$ 와 $H_l$ 의 Poisson 괄호는 $0$ 이다[^1]. 직관 절에서 보존량을 에너지로 넣어 흐름을 얻은 것이 이 대응의 처음 두 경우다.

## 고정된 흐름의 정상해

어떤 흐름의 결합 $\sum c_ku_{t_k}=0$ 을 만족하는 $u$ 는 [상미분방정식](ordinary-differential-equations.md)의 해이고, 이런 해를 유한 간격 해(finite-gap solution)라 한다. KdV 의 고립파는 $u_{t_1}$ 과 $u_{t_0}$ 의 결합이 $0$ 인 해이고, KdV 문서의 cnoidal 파도 같다. 유한 간격 해에서 $L$ 의 스펙트럼은 유한 개의 간격만 비고, 해는 그 스펙트럼으로 정해지는 곡선의 [Jacobi 다양체](jacobian-variety.md) 위의 직선 운동으로 적힌다[^2].

# 활용

- 곡선의 모듈라이 공간의 교차수. [곡선의 모듈라이 공간](moduli-of-curves.md) 위의 여접선류 교차수를 모은 생성함수가 KdV 위계를 만족한다는 Witten 추측(Witten conjecture)을 Kontsevich 가 증명했다[^3][^4]. KdV 위계의 시간 변수 $t_k$ 가 교차수의 지수를 세는 변수다.
- 2차원 양자 중력. 행렬 모형의 이중 척도 극한에서 자유 에너지가 KdV 위계의 해로 나온다. Witten 추측은 이 계산에서 나왔다.
- 다른 위계. $L$ 을 $n$ 계 미분연산자로 바꾸면 Gelfand–Dickey 위계(Gelfand–Dickey hierarchy)가 나오고, $n=3$ 이 Boussinesq 방정식의 위계다. 모든 차수를 한꺼번에 다루는 것이 KP 위계(Kadomtsev–Petviashvili hierarchy)다.

[^1]: L. A. Dickey, *Soliton Equations and Hamiltonian Systems*, 2nd ed., Advanced Series in Mathematical Physics 26, World Scientific, 2003.
[^2]: P. G. Drazin, R. S. Johnson, *Solitons: An Introduction*, Cambridge University Press, 1989.
[^3]: E. Witten, "Two-dimensional gravity and intersection theory on moduli space", *Surveys in Differential Geometry* 1 (1991), 243–310.
[^4]: M. Kontsevich, "Intersection theory on the moduli space of curves and the matrix Airy function", *Communications in Mathematical Physics* 147 (1992), 1–23.

# 연관 문서

## 선수지식

- [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algebra #differential_geometry
