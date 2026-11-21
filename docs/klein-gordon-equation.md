# Klein–Gordon 방정식

# 개요

**Klein–Gordon 방정식(Klein–Gordon equation)** 은 [파동방정식](wave-equation.md)에 제자리로 되돌아가려는 힘의 항 $m^2u$ 를 더한 편미분방정식 $u_{tt}-\Delta u+m^2u=0$ 이다. 팽팽한 줄의 각 점을 바닥에 용수철로 매어 두면, 줄을 따라 퍼지는 파동과 각 점의 진동이 함께 일어난다. 이 방정식은 그런 줄의 운동을 적고, 같은 식이 질량 $m$ 인 상대론적 입자의 파동함수가 따르는 방정식이다.

# 직관

용수철이 없는 줄 $u_{tt}=u_{xx}$ 에서 $\cos(kx-\omega t)$ 가 해가 되려면 $\omega=\vert k\vert$ 이다. 모든 파장이 같은 속도 $1$ 로 나아가고, $k=0$ 인 고른 변위는 움직이지 않는다.

각 점을 용수철로 매면 변위 $u$ 에 비례해 되돌리는 힘이 더해져 $u_{tt}=u_{xx}-m^2u$ 가 된다. 같은 꼴을 넣으면 다음이 나온다.

$$
\omega=\sqrt{k^2+m^2}
$$

$k=0$ 이면 $\omega=m$ 이어서 줄 전체가 함께 진동수 $m$ 으로 오르내린다. $m=1$, $k=1$ 인 파동의 마루는 속도 $\omega/k=\sqrt2$ 로 움직이지만, 파장이 비슷한 파동을 모은 묶음은 속도 $d\omega/dk=k/\sqrt{k^2+m^2}=1/\sqrt2$ 로 움직인다. 묶음의 속도는 어느 $k$ 에서나 $1$ 보다 작다.

# 정의

$m\ge 0$ 과 함수 $u(x,t)$, $x\in\mathbb R^n$ 에 대한 다음 방정식을 **Klein–Gordon 방정식** 이라 하고, $m$ 을 질량이라 한다.

$$
u_{tt}-\Delta u+m^2u=0
$$

$m=0$ 이면 파동방정식이다. 직관 절의 줄은 $n=1$ 인 경우다. 비선형 항을 더한 $u_{tt}-\Delta u+m^2u=\pm\vert u\vert^{p-1}u$ 를 비선형 Klein–Gordon 방정식이라 한다.

# 성질

## 에너지 보존과 유한 전파 속도

$u$ 가 해이면 다음 에너지가 시간에 따라 변하지 않는다.

$$
E=\frac12\int\bigl(u_t^2+\vert\nabla u\vert^2+m^2u^2\bigr)dx
$$

$E$ 를 미분하고 $\nabla u_t\cdot\nabla u$ 를 부분적분하면 $\int u_t(u_{tt}-\Delta u+m^2u)dx=0$ 이 나온다. 같은 계산을 원뿔 안에서 하면 처음 값이 공 $\vert x\vert\le R$ 밖에서 $0$ 일 때 해가 $\vert x\vert\le R+t$ 밖에서 $0$ 이다. 신호는 파동방정식과 같은 속도 $1$ 보다 빨리 퍼지지 않는다.

## 1차원 기본해

$n=1$ 에서 처음 값 $u(x,0)=0$, $u_t(x,0)=g(x)$ 의 해는 다음과 같다. $J_0$ 은 0 차 [Bessel 함수](bessel-functions.md)다.

$$
u(x,t)=\frac12\int_{x-t}^{x+t}J_0\Bigl(m\sqrt{t^2-(x-y)^2}\Bigr)g(y)\thinspace dy
$$

$m=0$ 이면 $J_0(0)=1$ 이어서 d'Alembert 공식이 된다. $m\gt 0$ 이면 신호가 원뿔 경계뿐 아니라 원뿔 안쪽에도 남는다.

## 분산 감쇠

처음 값이 매끄럽고 빨리 줄어들면 해의 최댓값은 $t\to\infty$ 에서 $t^{-n/2}$ 의 상수배로 줄어든다. $m=0$ 인 파동방정식에서는 $t^{-(n-1)/2}$ 이므로 질량이 있으면 더 빨리 줄어든다. [Strichartz 추정](strichartz-estimates.md)이 이 감쇠에서 Schrödinger 방정식과 같은 논법으로 나온다[^1].

## 비상대론 극한

$u=e^{-imt}\psi$ 로 두고 넣으면 $\psi_{tt}-2im\psi_t-\Delta\psi=0$ 이다. $m$ 이 크고 $\psi$ 가 천천히 변해 $\psi_{tt}$ 를 무시할 수 있으면 $i\psi_t=-\frac{1}{2m}\Delta\psi$ 가 남고, 이것은 [Schrödinger 방정식](schrodinger-equation.md)이다.

# 활용

- 상대론적 양자역학. 에너지와 운동량의 관계 $E^2=\vert p\vert^2+m^2$ 에서 $E$ 를 $i\partial_t$, $p$ 를 $-i\nabla$ 로 바꾸면 이 방정식이 나온다. Klein, Gordon, Fock 이 1926 년에 제안했고, 스핀이 없는 입자의 장을 적는다[^2].
- sine-Gordon 방정식의 선형화. [sine-Gordon 방정식](sine-gordon-equation.md) $u_{tt}-u_{xx}+\sin u=0$ 에서 $\sin u$ 를 $u$ 로 바꾸면 $m=1$ 인 Klein–Gordon 방정식이다.
- 비선형 방정식의 장시간 거동. Morawetz 가 처음 시공간 적분 추정을 만든 것은 비선형 Klein–Gordon 방정식의 감쇠를 보이기 위해서였고, 이것이 [Morawetz 추정](morawetz-estimates.md)이다.

[^1]: T. Tao, *Nonlinear Dispersive Equations: Local and Global Analysis*, CBMS Regional Conference Series in Mathematics 106, American Mathematical Society, 2006, 2 장.
[^2]: O. Klein, "Quantentheorie und fünfdimensionale Relativitätstheorie", *Zeitschrift für Physik* 37 (1926), 895–906.

# 연관 문서

## 선수지식

- [파동방정식](wave-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
