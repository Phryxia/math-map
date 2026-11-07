# Navier–Stokes 방정식

# 개요

**Navier–Stokes 방정식(Navier–Stokes equations)** 은 점성 유체의 속도와 압력이 시간에 따라 어떻게 변하는지 적는 편미분방정식이다. 컵에 담긴 물을 숟가락으로 저어 통째로 돌리면 가장자리의 수면이 가운데보다 높아진다. [Stokes 방정식](stokes-equations.md)에는 유체 알갱이가 원을 따라 돌며 받는 가속도가 없어서 이 높이 차이가 나오지 않는다. Navier–Stokes 방정식은 이 가속도 항을 더한 식이고, 에너지 등식과 고정점 정리로 해의 존재를 얻는다.

# 직관

컵의 물이 각속도 $\omega$ 로 통째로 돌면 속도는 $u=\omega(-y,x)$ 다. 각 성분이 일차식이므로 $\Delta u=0$ 이고, $\mathrm{div}\thinspace u=\partial_x(-\omega y)+\partial_y(\omega x)=0$ 이다. Stokes 방정식에 넣으면 $f=0$ 에서 $\nabla p=0$ 이므로 압력이 어디서나 같다. 그러면 수면이 평평해야 하는데 실제 수면은 가장자리가 높다.

빠진 것은 알갱이의 가속도다. 점 $(x,y)$ 에 있는 알갱이는 짧은 시간 $\delta t$ 뒤에 $(x,y)+\delta t\thinspace u$ 로 옮겨 가고, 거기서의 속도는 대략 $u+\delta t\thinspace(u\cdot\nabla)u$ 다. 따라서 알갱이의 가속도는 $(u\cdot\nabla)u$ 이고, 성분으로 $\sum_ju_j\partial_ju_i$ 다. 회전 흐름에서 계산하면 $(u\cdot\nabla)u=-\omega^2(x,y)$ 로, 중심을 향하는 구심 가속도다.

이 가속도를 만드는 힘은 압력의 기울기뿐이다. $-\nabla p=-\omega^2(x,y)$ 에서 $p=\frac{\omega^2}{2}(x^2+y^2)+c$ 이고, 압력은 중심에서 멀수록 크다. 수면의 높이가 압력에 비례하므로 가장자리가 높아진다.

# 정의

## 방정식

$\Omega\subset\mathbb R^d$ $(d=2,3)$ 를 경계가 Lipschitz 인 유계 연결 열린집합, $\nu\gt 0$ 을 점성계수, $f$ 를 바깥 힘이라 한다. **비압축 Navier–Stokes 방정식** 은 속도 $u(t,x)\in\mathbb R^d$ 와 압력 $p(t,x)\in\mathbb R$ 에 대한 다음 연립방정식이다.

$$
\partial_tu+(u\cdot\nabla)u-\nu\Delta u+\nabla p=f,\qquad\mathrm{div}\thinspace u=0\quad(\Omega\text{ 에서}),\qquad u=0\quad(\partial\Omega\text{ 에서})
$$

초기 속도 $u(0,\cdot)=u_0$ 을 함께 준다. $(u\cdot\nabla)u$ 는 **대류항(convective term)** 이고 $i$ 성분이 $\sum_ju_j\partial_ju_i$ 다. $\partial_tu=0$ 인 경우를 **정상 Navier–Stokes 방정식(steady Navier–Stokes equations)** 이라 한다. 대류항을 지우면 Stokes 방정식에 시간 미분을 더한 식이 된다.

직관 절의 회전 흐름 $u=\omega(-y,x)$ 와 $p=\frac{\omega^2}{2}(x^2+y^2)$ 는 원판에서 $f=0$ 인 정상 방정식을 만족한다. 원판의 경계에서 $u\ne 0$ 이므로 이 흐름은 경계 조건 $u=0$ 이 아니라, 컵의 벽이 같은 각속도로 도는 경계 조건 $u=\omega(-y,x)$ 의 해다.

## Reynolds 수

길이 규모 $L$ 과 속도 규모 $U$ 를 골라 $x=Lx'$, $u=Uu'$, $t=(L/U)t'$, $p=U^2p'$ 으로 바꾸면 방정식이

$$
\partial\_{t'}u'+(u'\cdot\nabla')u'-\frac{1}{\mathrm{Re}}\Delta'u'+\nabla'p'=f'
$$

이 된다. $\mathrm{Re}=UL/\nu$ 를 **Reynolds 수(Reynolds number)** 라 한다. $\mathrm{Re}$ 가 작으면 대류항이 점성항에 비해 작아 Stokes 방정식이 근사가 되고, 크면 대류항이 지배한다.

## 약해

$V=\lbrace v\in H_0^1(\Omega)^d:\mathrm{div}\thinspace v=0\rbrace$ 로 두고, $H$ 를 $V$ 의 $L^2(\Omega)^d$ 에서의 닫힘이라 한다. 삼중선형형식

$$
c(w,u,v)=\int\_\Omega\bigl((w\cdot\nabla)u\bigr)\cdot v\thinspace dx
$$

를 두면 대류항의 약한 꼴은 $c(u,u,v)$ 다. **Leray–Hopf 약해(Leray–Hopf weak solution)** 는 $u\in L^\infty(0,T;H)\cap L^2(0,T;V)$ 이고 모든 $v\in V$ 에서

$$
\frac{d}{dt}\int\_\Omega u\cdot v\thinspace dx+c(u,u,v)+\nu\int\_\Omega\nabla u:\nabla v\thinspace dx=\langle f,v\rangle
$$

를 분포의 뜻으로 만족하며, 성질 절의 에너지 부등식을 만족하는 $u$ 다. 시험함수를 $V$ 에서 고르면 $\int\_\Omega\nabla p\cdot v\thinspace dx=0$ 이므로 압력이 식에서 빠진다.

# 성질

## 에너지 등식

$\mathrm{div}\thinspace w=0$ 이고 $w$ 가 경계에서 $0$ 이면 $c(w,v,v)=0$ 이다. 적분 $c(w,v,v)=\int\_\Omega\sum_jw_j\partial_j(\vert v\vert^2/2)\thinspace dx$ 를 부분적분하면 $-\int\_\Omega(\mathrm{div}\thinspace w)\vert v\vert^2/2\thinspace dx=0$ 이다. 방정식에 $u$ 를 곱해 적분하면 대류항과 압력항이 사라지고

$$
\frac12\frac{d}{dt}\Vert u\Vert\_{L^2}^2+\nu\Vert\nabla u\Vert\_{L^2}^2=\langle f,u\rangle
$$

가 남는다. 매끄러운 해는 이 등식을, Leray–Hopf 약해는 시간에 대해 적분한 꼴의 부등식 $\frac12\Vert u(t)\Vert^2+\nu\int_0^t\Vert\nabla u\Vert^2\thinspace ds\le\frac12\Vert u_0\Vert^2+\int_0^t\langle f,u\rangle\thinspace ds$ 를 만족한다. 대류항은 에너지를 옮기기만 하고 늘리거나 줄이지 않는다.

$f=0$ 이면 Poincaré 부등식(Poincaré inequality) $\Vert v\Vert\_{L^2}^2\le\lambda_1^{-1}\Vert\nabla v\Vert\_{L^2}^2$ 과 함께 $\Vert u(t)\Vert\_{L^2}\le e^{-\nu\lambda_1t}\Vert u_0\Vert\_{L^2}$ 가 나온다. 바깥 힘이 없으면 점성이 운동 에너지를 지수적으로 줄인다.

## 정상 문제의 해

**정리.** $d=2,3$ 이고 $f\in H^{-1}(\Omega)^d$ 이면 정상 Navier–Stokes 방정식의 약해 $u\in V$ 가 존재한다. $N=\sup\_{w,u,v\in V\setminus\lbrace 0\rbrace}c(w,u,v)/(\Vert\nabla w\Vert\Vert\nabla u\Vert\Vert\nabla v\Vert)$ 에 대해 $\nu^2\gt N\Vert f\Vert\_{H^{-1}}$ 이면 해가 유일하다.[^1]

증명의 요지. 에너지 등식에서처럼 $c(u,u,u)=0$ 이므로 해는 $\nu\Vert\nabla u\Vert\le\Vert f\Vert\_{H^{-1}}$ 를 만족한다. $V$ 의 유한차원 부분공간에서 Galerkin 근사(Galerkin approximation)를 세우면 이 추정이 반지름 $\Vert f\Vert\_{H^{-1}}/\nu$ 인 공 위의 사상에 [Brouwer 고정점 정리](brouwer-fixed-point.md)를 적용할 조건을 주고, 근사해의 약수렴 극한이 해다. $d\le 3$ 에서 $H_0^1$ 이 $L^4$ 에 콤팩트하게 매장되어 $c$ 가 극한으로 넘어간다. 유일성은 두 해의 차 $w=u_1-u_2$ 에서 $\nu\Vert\nabla w\Vert^2=-c(w,u_1,w)\le N\Vert\nabla w\Vert^2\Vert f\Vert\_{H^{-1}}/\nu$ 로부터 나온다. $\square$

## 시간 의존 문제의 해

**정리 (Leray, Hopf).** $d=2,3$ 이고 $u_0\in H$, $f\in L^2(0,T;H^{-1})$ 이면 Leray–Hopf 약해가 $\lbrack 0,T\rbrack$ 전체에서 존재한다.[^2]

$d=2$ 이면 이 약해가 유일하고, 자료가 매끄러우면 해도 매끄럽다(Ladyzhenskaya 정리, Ladyzhenskaya theorem).[^1] $d=3$ 에서는 $u_0$ 이 매끄러우면 짧은 시간 동안 매끄러운 해가 유일하게 존재하고, 초기 속도가 $\nu$ 에 비해 충분히 작으면 그 해가 모든 시간에서 매끄럽다.

## 알려진 열린 문제

$d=3$ 에서 매끄럽고 빨리 줄어드는 모든 초기 속도에 대해 $f=0$ 인 방정식의 해가 모든 시간에서 매끄럽게 존재하는지, 아니면 유한 시간에 속도의 기울기가 발산하는 해가 있는지는 증명되지 않았다. Clay 수학연구소의 밀레니엄 문제(Millennium Prize Problems) 가운데 하나로 이 물음이 공식화되어 있다.[^3]

# 활용

- 투영법(projection method). 시간 단계마다 압력 없이 속도를 먼저 갱신하고, 그 결과를 발산이 $0$ 인 장으로 사영해 압력을 얻는다. 사영은 Poisson 방정식 $\Delta p=\mathrm{div}\thinspace u^\ast/\delta t$ 하나를 푸는 것이고, 이 방법이 비압축 흐름의 수치 계산에 쓰인다.[^4]
- 정상 흐름의 수치 해법. 대류항의 $u$ 하나를 앞 단계 값으로 고정하면 각 단계가 Stokes 방정식의 약한 꼴에 1차 항을 더한 선형 안장점 문제다. 이산화에는 Stokes 방정식에서 이산 inf-sup 조건을 만족하는 Taylor–Hood 요소(Taylor–Hood element) 같은 [혼합 유한요소법](mixed-finite-element-method.md)의 짝을 그대로 쓴다.[^1]

[^1]: Vivette Girault, Pierre-Arnaud Raviart, *Finite Element Methods for Navier–Stokes Equations*, Springer (1986), IV 장과 V 장.

[^2]: Jean Leray, *Sur le mouvement d'un liquide visqueux emplissant l'espace*, Acta Mathematica **63** (1934), 193–248. Eberhard Hopf, *Über die Anfangswertaufgabe für die hydrodynamischen Grundgleichungen*, Mathematische Nachrichten **4** (1951), 213–231.

[^3]: Charles L. Fefferman, *Existence and smoothness of the Navier–Stokes equation*, Clay Mathematics Institute 밀레니엄 문제 공식 설명 (2000).

[^4]: Alexandre J. Chorin, *Numerical solution of the Navier–Stokes equations*, Mathematics of Computation **22** (1968), 745–762.

# 연관 문서

## 선수지식

- [Stokes 방정식](stokes-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis
