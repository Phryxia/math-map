# Schrödinger 방정식

# 개요

**Schrödinger 방정식(Schrödinger equation)** 은 양자역학에서 입자의 상태를 나타내는 복소수값 함수 $\psi$ 가 시간에 따라 어떻게 변하는지 정하는 편미분방정식이다. 한 점 근처에 모아 놓은 전자를 그대로 두면 시간이 지나며 발견될 수 있는 범위가 넓어지고, 점 $x$ 근처에서 발견될 확률은 $\vert\psi(x,t)\vert^2$ 로 주어진다. 이 방정식은 [열방정식](heat-equation.md)과 같은 꼴에 허수 단위 $i$ 를 붙인 것이어서, 진동수 성분마다 크기는 그대로 두고 위상만 돌리며 풀린다.

# 직관

열방정식 $u_t=u_{xx}$ 에 $u=e^{ikx}$ 를 넣으면 $e^{-k^2t}e^{ikx}$ 가 해이고, 진동수 $k$ 가 큰 성분일수록 빨리 줄어든다. 같은 식의 오른쪽에 $i$ 를 곱한 $\psi_t=i\psi_{xx}$ 에 넣으면 다음이 해다.

$$
\psi(x,t)=e^{i(kx-k^2t)}
$$

$\vert\psi\vert=1$ 이 시간에 따라 변하지 않는다. 성분은 줄어들지 않고 위상만 속도 $k^2$ 로 돈다.

처음 상태가 $\psi_0(x)=e^{-x^2/2}$ 처럼 원점 근처에 모인 함수이면 진동수 성분마다 위상이 다른 속도로 돌아 성분들이 어긋나고, 함수가 퍼진다. 열방정식의 해 $(1+2s)^{-1/2}e^{-x^2/(2(1+2s))}$ 에 $s=it$ 를 넣으면 해가 나오고, 확률 밀도는 다음이다.

$$
\vert\psi(x,t)\vert^2=\frac{1}{\sqrt{1+4t^2}}\exp\Big(-\frac{x^2}{1+4t^2}\Big)
$$

폭은 $\sqrt{1+4t^2}$ 배로 넓어지고 높이는 같은 배로 낮아지므로 $\int\vert\psi\vert^2dx=\sqrt\pi$ 가 시간에 따라 변하지 않는다. 열방정식은 $\int u\thinspace dx$ 를 보존하고, Schrödinger 방정식은 $\int\vert\psi\vert^2dx$ 를 보존한다.

# 정의

## 시간에 따른 방정식

질량 $m$ 인 입자가 위치에너지 $V(x)$ 속에서 움직일 때 상태 $\psi(x,t)$, $x\in\mathbb R^n$ 은 다음을 만족한다. $\hbar$ 는 Planck 상수를 $2\pi$ 로 나눈 값이다.

$$
i\hbar\frac{\partial\psi}{\partial t}=-\frac{\hbar^2}{2m}\Delta\psi+V\psi
$$

단위를 $\hbar=1$, $m=1/2$ 로 잡으면 $i\psi_t=-\Delta\psi+V\psi$ 이고, 이 문서는 이 꼴을 쓴다. 오른쪽의 작용소 $H=-\Delta+V$ 를 **Hamilton 작용소(Hamiltonian)** 라 한다. $V=0$ 이면 자유 Schrödinger 방정식이고, 직관 절의 $\psi_t=i\psi_{xx}$ 가 그 1차원판이다.

## 파동함수와 확률

각 시각의 $\psi(\cdot,t)$ 는 $\int\vert\psi\vert^2dx=1$ 인 [Hilbert 공간](hilbert-spaces.md) $L^2(\mathbb R^n)$ 의 원소이고 **파동함수(wave function)** 라 한다. 영역 $A$ 에서 입자가 발견될 확률이 $\int_A\vert\psi(x,t)\vert^2dx$ 라는 것이 Born 규칙(Born rule)이다. 직관 절의 $\psi_0$ 은 $\pi^{-1/4}$ 를 곱하면 이 조건을 만족한다.

## 정상상태

$\psi(x,t)=e^{-iEt}\varphi(x)$ 꼴의 해를 **정상상태(stationary state)** 라 한다. 넣으면 $\varphi$ 는 고윳값 문제 $H\varphi=E\varphi$ 를 만족하고, 이것을 시간에 무관한 Schrödinger 방정식이라 한다. $\vert\psi\vert^2=\vert\varphi\vert^2$ 이 시간에 따라 변하지 않는다.

1차원 [조화 진동자](harmonic-oscillator.md) $V=x^2$ 에서는 $\varphi_0=e^{-x^2/2}$ 가 $-\varphi_0''+x^2\varphi_0=\varphi_0$ 을 만족하므로 $E=1$ 인 정상상태다. 고윳값 전체는 $E=1,3,5,\dots$ 이고 이것이 에너지 준위다.

# 성질

## 확률 보존

$V$ 가 실수값이면 $\Vert\psi(t)\Vert^2=\int\vert\psi\vert^2dx$ 는 시간에 따라 변하지 않는다. $H$ 가 대칭이므로 다음이 성립한다.

$$
\frac{d}{dt}\langle\psi,\psi\rangle=\langle-iH\psi,\psi\rangle+\langle\psi,-iH\psi\rangle=-i\langle H\psi,\psi\rangle+i\langle\psi,H\psi\rangle=0
$$

같은 계산으로 에너지 $\langle H\psi,\psi\rangle$ 도 보존된다.

## 시간 발전 작용소

해 $\psi(t)=e^{-itH}\psi_0$ 이 모든 처음 상태에서 정의되고 확률을 보존하려면 $t\mapsto e^{-itH}$ 가 유니터리 일매개군이어야 한다. [비유계 작용소](unbounded-operators.md)의 Stone 정리(Stone's theorem)로 이것은 $H$ 가 자기수반인 것과 동치다. 수소 원자의 $V=-1/\vert x\vert$ 처럼 특이점이 있는 위치에너지에서는 Kato–Rellich 정리(Kato–Rellich theorem)로 $-\Delta+V$ 의 자기수반성을 보인다.

## 자유 방정식의 풀이

[Fourier 변환](fourier-transform.md)을 하면 $-\Delta$ 는 $\vert\xi\vert^2$ 를 곱하는 것이 되므로 $\hat\psi(\xi,t)=e^{-it\vert\xi\vert^2}\hat\psi_0(\xi)$ 다. 열핵에서 시간 $s$ 를 $it$ 로 바꾸면 다음 적분 표현이 나온다.

$$
\psi(x,t)=\frac{1}{(4\pi it)^{n/2}}\int_{\mathbb R^n}e^{i\vert x-y\vert^2/(4t)}\psi_0(y)\thinspace dy
$$

## 분산

진동수 $k$ 근처의 성분만 가진 파동 묶음은 속도 $2k$ 로 움직인다. 위상 $kx-k^2t$ 를 $k$ 로 미분한 $x-2kt$ 가 $0$ 인 자리에서 이웃한 진동수의 위상이 맞아 성분들이 겹친다. 진동수마다 속도가 다르므로 묶음은 흩어지고, 이 성질을 분산(dispersion)이라 한다.

위 적분 표현에서 $\vert e^{i\vert x-y\vert^2/(4t)}\vert=1$ 이므로 다음 분산 추정이 나온다.

$$
\sup_x\vert\psi(x,t)\vert\le(4\pi\vert t\vert)^{-n/2}\int\vert\psi_0\vert\thinspace dy
$$

$L^2$ 노름은 그대로인데 최댓값은 $\vert t\vert^{-n/2}$ 로 줄어든다. 직관 절의 가우스 함수에서 높이가 $(1+4t^2)^{-1/2}$ 로 줄어드는 것이 $n=1$ 의 경우다.

# 활용

- 원자의 에너지 준위. 수소 원자의 시간에 무관한 방정식의 음의 고윳값이 선 스펙트럼의 에너지 준위이고, 그 겹침은 [Kepler 문제의 SO(4) 대칭](kepler-problem-so4-symmetry.md)으로 설명된다. 주기 위치에너지 속 전자의 방정식은 [Floquet 이론](floquet-theory.md)의 Hill 방정식이다.
- 준고전 근사. $\hbar\to 0$ 에서 정상상태를 근사하는 것이 [WKB 근사](wkb-approximation.md)(Wentzel–Kramers–Brillouin approximation)다.
- 수치 계산. [Crank–Nicolson 방법](crank-nicolson-method.md)의 한 걸음 행렬은 유니터리여서 확률을 보존하고, [Lie–Trotter 곱 공식](lie-trotter-formula.md)으로 $-\Delta$ 와 $V$ 를 번갈아 푸는 분할 해법이 쓰인다. 큰 Hermite 행렬의 $e^{-iHt}\psi$ 는 [행렬 함수의 Krylov 근사](krylov-approximation-of-matrix-functions.md)로 계산한다.
- 양자 계산. 큐비트 $n$ 개의 상태는 $\mathbb C^{2^n}$ 의 단위벡터이고 같은 방정식으로 변한다. 그 시간 발전을 회로로 근사하는 것이 [해밀토니언 시뮬레이션](hamiltonian-simulation.md)이고, [단열 양자 계산](adiabatic-quantum-computation.md)은 천천히 바꾸는 $H(t)$ 의 방정식을 쓴다.
- 비선형 분산 방정식. 위치에너지 대신 $\vert\psi\vert^2\psi$ 를 넣은 [비선형 Schrödinger 방정식](nonlinear-schrodinger-equation.md)은 [역산란 변환](inverse-scattering-transform.md)으로 풀리는 솔리톤 방정식이다. 분산 추정을 시간 적분으로 강화한 Strichartz 추정(Strichartz estimate)이 이런 방정식의 해의 존재를 보이는 데 쓰인다.

# 연관 문서

## 선수지식

- [열방정식](heat-equation.md)
- [비유계 작용소](unbounded-operators.md)

## 더 알아보기

- [비선형 Schrödinger 방정식](nonlinear-schrodinger-equation.md)

#analysis #functional_analysis
