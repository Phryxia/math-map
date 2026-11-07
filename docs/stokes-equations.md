# Stokes 방정식

# 개요

**Stokes 방정식(Stokes equations)** 은 끈적한 유체가 느리게 흐를 때 속도와 압력이 만족하는 편미분방정식이다. 꿀이 담긴 그릇에 숟가락을 천천히 움직이거나 가는 관에 기름을 흘려 보낼 때, 유체의 각 점에서 속도 벡터와 압력을 구하는 문제가 이 꼴이다. 압력을 "유체가 압축되지 않는다" 는 조건에 붙는 [Lagrange 승수](lagrange-multipliers.md)로 두면 방정식이 [혼합 유한요소법](mixed-finite-element-method.md)의 안장점 문제가 되고, Babuška–Brezzi 정리로 해의 존재와 유일성을 얻는다.

# 직관

평면 영역 $\Omega$ 에 담긴 유체가 바깥 힘 $f=(f_1,f_2)$ 를 받는다. 속도 $u=(u_1,u_2)$ 가 경계에서 $0$ 이고 점성만이 힘과 맞선다고 하면, 성분마다 [Laplace 연산자](laplace-operator.md)의 방정식 $-\nu\Delta u_i=f_i$ 가 나온다. $\nu\gt 0$ 은 점성계수(viscosity)다. 이 식은 성분마다 [Lax–Milgram 정리](lax-milgram.md)로 풀린다.

그런데 유체는 압축되지 않는다. 영역 안의 작은 상자마다 들어오는 양과 나가는 양이 같아야 하므로 $\mathrm{div}\thinspace u=\partial_1u_1+\partial_2u_2=0$ 이어야 한다. 위 식의 해는 이 조건을 지키지 않는다. 중력 $f=(0,-g)$ 를 넣으면 $-\nu\Delta u_2=-g$ 의 해 $u_2$ 는 경계에서 $0$ 이고 안쪽에서 음수이므로 $\partial_2u_2\ne 0$ 인 곳이 있고, 그곳에서 유체가 늘거나 줄어든다.

조건을 지키려면 $\mathrm{div}\thinspace v=0$ 인 속도장 $v$ 들만 모은 공간에서 약한 꼴을 푼다. 이 공간은 닫힌 부분공간이므로 Lax–Milgram 정리가 그대로 적용되고, 모든 그런 $v$ 에 대해 $\nu\int\_\Omega\nabla u:\nabla v\thinspace dx=\int\_\Omega f\cdot v\thinspace dx$ 인 $u$ 가 하나 나온다. 중력의 경우 $f=\nabla(-gy)$ 이므로 부분적분하면 $\int\_\Omega f\cdot v\thinspace dx=\int\_\Omega gy\thinspace\mathrm{div}\thinspace v\thinspace dx=0$ 이고, 해는 $u=0$ 이다.

이 $u=0$ 은 $-\nu\Delta u=f$ 를 점마다 만족하지 않는다. 남는 차이 $f+\nu\Delta u=(0,-g)$ 는 $-gy$ 의 기울기(gradient)이고, 이 함수가 유체가 정지한 그릇의 압력이다. 일반적으로도 차이는 어떤 함수 $p$ 의 기울기 $\nabla p$ 로 나타나고, 그 $p$ 를 **압력(pressure)** 이라 한다. 압력은 압축되지 않는다는 조건을 지키게 하는 힘이다.

# 정의

## 강한 꼴

$\Omega\subset\mathbb R^d$ 를 경계가 Lipschitz 인 유계 연결 열린집합, $\nu\gt 0$ 을 점성계수, $f\colon\Omega\to\mathbb R^d$ 를 바깥 힘이라 한다. **Stokes 방정식** 은 속도 $u\colon\Omega\to\mathbb R^d$ 와 압력 $p\colon\Omega\to\mathbb R$ 에 대한 다음 연립방정식이다.

$$
-\nu\Delta u+\nabla p=f,\qquad\mathrm{div}\thinspace u=0\quad(\Omega\text{ 에서}),\qquad u=0\quad(\partial\Omega\text{ 에서})
$$

$\Delta u$ 는 성분마다 Laplace 연산자를 적용한 벡터다. 첫 식은 $d$ 개의 성분 방정식이고, 둘째 식이 **비압축 조건(incompressibility condition)** 이다.

$p$ 에 상수를 더해도 $\nabla p$ 가 같으므로 압력은 상수 차이를 빼고만 정해진다. 그래서 압력은 $\int\_\Omega p\thinspace dx=0$ 으로 정규화한다. 직관 절의 그릇에서 $f=(0,-g)$ 이면 $u=0$ 과 $p=-g(y-\bar y)$ 가 해다. $\bar y$ 는 $\Omega$ 에서 $y$ 의 평균이고, $\nabla p=(0,-g)=f$ 이다.

## 약한 꼴

[Sobolev 공간](sobolev-spaces.md)으로 $V=H_0^1(\Omega)^d$ 와 $Q=L_0^2(\Omega)=\lbrace q\in L^2(\Omega):\int\_\Omega q\thinspace dx=0\rbrace$ 를 두고, 쌍선형형식을

$$
a(u,v)=\nu\int\_\Omega\nabla u:\nabla v\thinspace dx,\qquad b(v,q)=-\int\_\Omega q\thinspace\mathrm{div}\thinspace v\thinspace dx
$$

로 정한다. $\nabla u:\nabla v=\sum\_{i,j}\partial_ju_i\thinspace\partial_jv_i$ 다. **Stokes 방정식의 약한 꼴(weak formulation)** 은 $f\in H^{-1}(\Omega)^d$ 에 대해

$$
a(u,v)+b(v,p)=\langle f,v\rangle\quad(\forall v\in V),\qquad b(u,q)=0\quad(\forall q\in Q)
$$

를 만족하는 $(u,p)\in V\times Q$ 를 찾는 문제다. 첫 식은 강한 꼴의 첫 식에 $v$ 를 곱하고 부분적분한 것이고, 둘째 식은 $\mathrm{div}\thinspace u$ 가 $Q$ 의 모든 함수와 직교한다는 것이다.

그릇의 예에서 $u=0$ 과 $p=-g(y-\bar y)$ 를 넣으면 $v\in V$ 가 경계에서 $0$ 이므로 $b(v,p)=-\int\_\Omega p\thinspace\mathrm{div}\thinspace v\thinspace dx=\int\_\Omega\nabla p\cdot v\thinspace dx=\int\_\Omega f\cdot v\thinspace dx$ 이고, 둘째 식은 $u=0$ 에서 자명하다.

이 약한 꼴은 혼합 유한요소법 문서의 안장점 문제에서 $a$, $b$, $V$, $Q$ 를 위처럼 잡고 $g=0$ 으로 둔 경우다. $b$ 의 핵은 $K=\lbrace v\in V:\mathrm{div}\thinspace v=0\rbrace$ 이고, 직관 절에서 약한 꼴을 푼 공간이 이 $K$ 다.

# 성질

## 해의 존재와 유일성

**정리.** 모든 $f\in H^{-1}(\Omega)^d$ 에 대해 약한 꼴의 해 $(u,p)\in V\times Q$ 가 유일하게 존재하고 $\nu\Vert\nabla u\Vert\_{L^2}+\Vert p\Vert\_{L^2}\le C\Vert f\Vert\_{H^{-1}}$ 이다. $C$ 는 $\nu$ 와 $\Omega$ 로 정해진다.[^1]

증명의 요지. Babuška–Brezzi 정리의 두 조건을 확인한다. Poincaré 부등식(Poincaré inequality)으로 $\Vert\nabla v\Vert\_{L^2}$ 가 $V$ 의 노름과 동치이므로 $a$ 는 $V$ 전체에서 강제이고, 핵 강제성은 그 특수한 경우다. inf-sup 조건에는 발산 연산자의 전사성을 쓴다. Lipschitz 경계를 가진 유계 연결 영역에서는 모든 $q\in Q$ 에 대해 $\mathrm{div}\thinspace v=-q$ 이고 $\Vert v\Vert\_{H^1}\le C\_\Omega\Vert q\Vert\_{L^2}$ 인 $v\in V$ 가 존재한다(Nečas 부등식, Nečas inequality).[^1] 이 $v$ 에서 $b(v,q)=\Vert q\Vert\_{L^2}^2$ 이므로

$$
\sup\_{v\in V,\thinspace v\ne 0}\frac{b(v,q)}{\Vert v\Vert\_{H^1}}\ge\frac{1}{C\_\Omega}\Vert q\Vert\_{L^2}
$$

이고, 정리가 해의 존재, 유일성, 안정성 추정을 준다. $\square$

$Q$ 를 $L^2(\Omega)$ 전체로 잡으면 상수함수 $q=1$ 에서 발산 정리(divergence theorem)로 $b(v,1)=-\int\_{\partial\Omega}v\cdot n\thinspace dS=0$ 이 모든 $v\in V$ 에서 성립해 inf-sup 조건이 깨진다. 압력을 평균 $0$ 으로 정규화하는 것이 이 상수를 빼는 일이다.

## 에너지 최소화와 안장점

$u$ 는 비압축 속도장 가운데 에너지

$$
E(v)=\frac{\nu}{2}\int\_\Omega\vert\nabla v\vert^2\thinspace dx-\langle f,v\rangle
$$

를 가장 작게 하는 것이다. $a$ 가 대칭이고 강제이므로 $K$ 에서 $E$ 의 최소점이 유일하고, 그 최소점의 조건이 직관 절의 식이다.

제약 $\mathrm{div}\thinspace v=0$ 에 Lagrange 승수법을 쓰면 Lagrange 함수는 $L(v,q)=E(v)+b(v,q)$ 이다. $v$ 로 미분해 $0$ 으로 두면 약한 꼴의 첫 식이, $q$ 로 미분해 $0$ 으로 두면 둘째 식이 나온다. 해 $(u,p)$ 는 $L(u,q)\le L(u,p)\le L(v,p)$ 를 만족하는 안장점이고, 압력이 비압축 조건의 Lagrange 승수다.

## Poiseuille 흐름

두 평행판 $y=0$ 과 $y=1$ 사이의 띠에서 압력이 $x$ 방향으로 일정하게 떨어지는 흐름은 닫힌 꼴로 풀린다. $G\gt 0$ 에 대해

$$
u(x,y)=\Bigl(\frac{G}{2\nu}y(1-y),\thinspace 0\Bigr),\qquad p(x,y)=-Gx
$$

는 $f=0$ 인 Stokes 방정식을 만족한다. $-\nu\Delta u_1=-\nu\cdot\frac{G}{2\nu}\cdot(-2)=G$ 와 $\partial_xp=-G$ 가 상쇄되고, $u_1$ 이 $x$ 에 의존하지 않으므로 $\mathrm{div}\thinspace u=0$ 이며, 두 판에서 $u=0$ 이다. 속도 단면은 가운데에서 가장 큰 포물선이고, 판 사이를 지나는 유량은 $\int_0^1u_1\thinspace dy=G/(12\nu)$ 로 압력 기울기에 비례한다.

## 이산화의 안정성

$V_h\subset V$ 와 $Q_h\subset Q$ 를 유한요소공간으로 잡으면 이산 문제는 블록 행렬

$$
\begin{pmatrix}A&B^{\mathsf T}\cr B&0\end{pmatrix}\begin{pmatrix}\boldsymbol u\cr\boldsymbol p\end{pmatrix}=\begin{pmatrix}\boldsymbol f\cr 0\end{pmatrix}
$$

의 연립방정식이다. $a$ 가 $V$ 전체에서 강제이므로 핵 강제성은 $V_h$ 에서도 그대로 성립하고, 안정성은 이산 inf-sup 조건 하나에 달린다. 속도와 압력을 같은 차수의 연속함수로 잡거나, 사각형 격자에서 속도를 겹일차, 압력을 요소마다 상수로 잡으면 이 조건이 깨져 압력에 체커보드 모드가 생긴다. 속도를 조각마다 이차, 압력을 조각마다 일차인 연속함수로 잡은 Taylor–Hood 요소(Taylor–Hood element)는 $h$ 와 무관한 inf-sup 상수를 갖는다.[^2]

# 활용

- Navier–Stokes 방정식(Navier–Stokes equations)의 근사. 비압축 Navier–Stokes 방정식은 Stokes 방정식의 첫 식에 대류항 $(u\cdot\nabla)u$ 를 더한 것이다. 길이 규모 $L$, 속도 규모 $U$ 에서 Reynolds 수(Reynolds number) $UL/\nu$ 가 작으면 대류항이 점성항보다 작아 Stokes 방정식으로 근사한다. 미생물의 헤엄, 미세 유체 관로, 윤활막 흐름이 이 경우다.[^1]
- Navier–Stokes 방정식의 반복 해법. 대류항의 $u$ 를 앞 단계 값으로 고정한 선형 문제를 반복해 풀면, 각 단계가 Stokes 방정식의 약한 꼴에 1차 항이 더해진 안장점 문제다. 존재 증명도 이 선형 문제의 해 작용소에 고정점 정리를 적용해 얻는다.[^1]
- 연립방정식의 전처리. 이산 블록 행렬의 [Schur 보수](schur-complement.md) $BA^{-1}B^{\mathsf T}$ 는 이산 inf-sup 조건이 성립하면 압력 질량행렬과 $h$ 에 무관한 상수 범위에서 스펙트럼 동치다. 그래서 $A$ 의 근사 역행렬과 압력 질량행렬의 대각 블록을 [전처리](preconditioning.md)로 쓰면 최소잔차(minimal residual) 계열 방법의 반복 횟수가 격자를 세분해도 늘지 않는다.[^3]

[^1]: Vivette Girault, Pierre-Arnaud Raviart, *Finite Element Methods for Navier–Stokes Equations*, Springer (1986), I 장이 Stokes 문제의 약한 꼴과 발산 연산자의 전사성을, IV 장이 Navier–Stokes 방정식의 존재 정리를 다룬다.

[^2]: Daniele Boffi, Franco Brezzi, Michel Fortin, *Mixed Finite Element Methods and Applications*, Springer (2013), 8 장.

[^3]: Howard Elman, David Silvester, Andy Wathen, *Finite Elements and Fast Iterative Solvers*, 2nd ed., Oxford University Press (2014), 이산 Stokes 문제의 해법을 다루는 장.

# 연관 문서

## 선수지식

- [혼합 유한요소법](mixed-finite-element-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #optimization #linear_algebra
