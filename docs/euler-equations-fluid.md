# 유체의 Euler 방정식

# 개요

**유체의 Euler 방정식(Euler equations)** 은 점성이 없는 유체의 밀도, 속도, 압력이 질량, 운동량, 에너지의 보존에 따라 어떻게 변하는지 적는 편미분방정식계다. 공기 중에서 소리가 초속 몇 미터로 퍼지는지, 폭발 뒤의 압력 벽이 얼마나 빨리 움직이는지가 이 방정식으로 계산된다. 이 방정식계는 작은 흔들림에서는 [파동방정식](wave-equation.md)이 되어 음속을 주고, 큰 흔들림에서는 [Burgers 방정식](burgers-equation.md)처럼 앞면이 가팔라져 충격파를 만든다.

# 직관

관 속의 공기가 정지해 있고 밀도 $\rho_0$, 압력 $p_0$ 이다. 공기의 양은 [연속 방정식](continuity-equation.md) $\rho_t+(\rho u)\_x=0$ 을 따르고, 공기 덩어리는 양옆의 압력 차로 가속되므로 $\rho(u_t+uu_x)=-p_x$ 다. 열이 드나들 틈 없이 빨리 압축되면 압력은 밀도만의 함수 $p=K\rho^\gamma$ 이고, 공기는 $\gamma=1.4$ 다.

작은 흔들림 $\rho=\rho_0+\rho'$, $u=u'$ 을 넣고 두 개 이상 곱해진 작은 항을 버리면 $\rho'\_t+\rho_0u'\_x=0$ 과 $\rho_0u'\_t+c^2\rho'\_x=0$ 이 남는다. 여기서 $c^2=dp/d\rho=\gamma p_0/\rho_0$ 이다. 첫 식을 $t$ 로, 둘째 식을 $x$ 로 미분해 빼면 $\rho'\_{tt}=c^2\rho'\_{xx}$ 이므로 흔들림은 속도 $c$ 의 파동이다.

$20^\circ\mathrm C$ 공기에서 $p_0=101325\thinspace\mathrm{Pa}$, $\rho_0=1.204\thinspace\mathrm{kg/m^3}$ 을 넣으면 $c=\sqrt{1.4\cdot 101325/1.204}\approx 343\thinspace\mathrm{m/s}$ 이고 측정한 음속과 맞는다. $\gamma=1$, 곧 온도가 일정하다고 놓으면 $290\thinspace\mathrm{m/s}$ 가 나와 측정값보다 작다.

흔들림이 크면 버린 항이 남는다. 압축된 부분은 밀도와 압력이 높아 소리가 더 빨리 전해지고 공기 자신도 앞으로 움직이므로, 뒤쪽의 압축이 앞쪽을 따라잡아 앞면이 가팔라진다. Burgers 방정식에서 특성곡선이 만나는 것과 같은 일이고, 그 자리에 충격파가 생긴다.

# 정의

## 압축성 Euler 방정식

1차원에서 밀도 $\rho$, 속도 $u$, 압력 $p$, 단위 부피당 전체 에너지 $E$ 에 대해 다음 보존 법칙을 압축성 Euler 방정식(compressible Euler equations)이라 한다.

$$
\begin{aligned}
\rho_t+(\rho u)\_x&=0\cr
(\rho u)\_t+(\rho u^2+p)\_x&=0\cr
E_t+\big(u(E+p)\big)\_x&=0
\end{aligned}
$$

차례로 질량, 운동량, 에너지의 보존이다. 식을 닫으려면 상태 방정식이 필요하고, 이상기체에서는 $p=(\gamma-1)(E-\tfrac12\rho u^2)$ 다. 다차원에서는 $u$ 가 벡터이고 $\rho u^2$ 는 $\rho\thinspace u\otimes u$ 로, $x$ 미분은 발산으로 바뀐다.

## 비압축성 Euler 방정식

밀도가 일정한 유체에서는 질량 보존이 $\nabla\cdot u=0$ 이 되고, 운동량 보존은 다음 꼴이다. 이것을 비압축성 Euler 방정식(incompressible Euler equations)이라 한다.

$$
u_t+(u\cdot\nabla)u+\nabla p=0,\qquad\nabla\cdot u=0
$$

점성 항 $\nu\Delta u$ 를 더하면 [Navier–Stokes 방정식](navier-stokes-equations.md)이다. 압력은 시간 발전 식이 없고 $\nabla\cdot u=0$ 을 지키도록 정해지며, 발산을 취하면 $-\Delta p=\nabla\cdot((u\cdot\nabla)u)$ 인 [Poisson 방정식](poisson-equation.md)을 만족한다.

# 성질

## 쌍곡성과 파의 속도

압축성 방정식을 보존량 $U=(\rho,\rho u,E)$ 에 대해 $U_t+A(U)U_x=0$ 으로 쓰면 행렬 $A(U)$ 의 고윳값은 다음 셋이다.

$$
u-c,\qquad u,\qquad u+c,\qquad c=\sqrt{\gamma p/\rho}
$$

세 고윳값이 실수이고 서로 다르므로 방정식계는 쌍곡형이다. $u\pm c$ 는 유체와 함께 움직이며 양쪽으로 퍼지는 음파의 속도이고, $u$ 는 유체에 실려 가는 밀도와 온도의 경계가 움직이는 속도다. 직관 절의 $c$ 가 $u=0$ 에서의 값이다.

## 충격파의 조건

불연속의 양쪽 상태 $U_l$, $U_r$ 과 불연속의 속도 $s$ 는 세 보존량마다 Rankine–Hugoniot 조건 $s(U_r-U_l)=F(U_r)-F(U_l)$ 을 만족한다. 여기서 $F$ 는 위 식의 괄호 안 유속이다. 이 조건만으로는 해가 하나로 정해지지 않고, 충격파를 지나며 유체의 엔트로피가 늘어나야 한다는 조건을 더해 [엔트로피 해](entropy-solutions.md)를 고른다.

## 충격파 관

관의 가운데에 막을 두고 왼쪽을 $(\rho,u,p)=(1,0,1)$, 오른쪽을 $(0.125,0,0.1)$ 로 채운 뒤 막을 걷는 문제를 Sod 충격파 관(Sod shock tube)이라 한다. 해는 왼쪽으로 퍼지는 희박파, 오른쪽으로 움직이는 밀도의 경계, 그 앞의 충격파 셋으로 된다. 세 파가 세 고윳값에 하나씩 대응하고, 이 구조가 [Riemann 문제](riemann-problem.md)의 해다.

## 소용돌이의 보존

비압축성 방정식에서 유체와 함께 움직이는 닫힌 곡선을 따른 순환 $\oint u\cdot dl$ 은 시간에 따라 변하지 않는다. 이것이 Kelvin 순환 정리(Kelvin's circulation theorem)다. 2차원에서는 소용돌이 $\omega=\partial_xu_2-\partial_yu_1$ 이 유체에 실려 가며 값이 변하지 않으므로 $\omega_t+u\cdot\nabla\omega=0$ 인 [수송 방정식](transport-equation.md)을 만족한다.

# 활용

- 기체 역학의 수치 계산. 충격파 관과 초음속 흐름은 압축성 Euler 방정식을 [Godunov 방법](godunov-method.md), [Roe 풀이](roe-solver.md), [MUSCL 방법](muscl-method.md)(monotone upstream-centered schemes for conservation laws)으로 푼다. 보존형 차분이 올바른 충격파 속도를 내는지가 [Lax–Wendroff 정리](lax-wendroff-theorem.md)의 내용이다.
- 음향학. 직관 절의 선형화가 음파의 방정식이고, 측정한 음속에서 $\gamma$ 를 정할 수 있다.
- 공기역학. 점성이 작은 고속 흐름에서 날개 주위의 압력과 양력을 Euler 방정식으로 근사하고, 벽 근처의 얇은 층만 점성을 따로 다룬다.
- 볼록 적분. [h 원리](h-principle.md)의 볼록 적분으로 에너지가 보존되지 않는 비압축성 Euler 방정식의 연속 약해가 만들어진다.

# 연관 문서

## 선수지식

- [연속 방정식](continuity-equation.md)
- [Burgers 방정식](burgers-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation
