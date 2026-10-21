# Lorenz 방정식

# 개요

**Lorenz 방정식(Lorenz system)** 은 세 변수 $x,y,z$ 에 대한 자율 미분방정식

$$
x'=\sigma(y-x),\qquad y'=x(\rho-z)-y,\qquad z'=xy-\beta z
$$

이다. $\sigma,\rho,\beta$ 는 양의 매개변수이고, Lorenz 가 1963 년에 대기의 대류를 세 변수로 줄인 모형으로 내놓았다.[^1] $\sigma=10$, $\rho=28$, $\beta=8/3$ 에서 모든 해가 유계 영역에 갇히지만 평형점에도 주기해에도 다가가지 않는다. 평면에서는 [Poincaré–Bendixson 정리](poincare-bendixson.md)가 이런 해를 막으므로, 이 방정식은 3 차원 자율계에서 혼돈이 나타나는 표준 예로 쓰인다.

# 직관

$\sigma=10$, $\rho=28$, $\beta=8/3$ 에서 해가 시간이 지나 어디로 가는지 알고 싶다. 평면의 방정식이었다면 순서가 정해져 있다. 해가 갇히는 유계 영역을 찾고, 그 안의 평형점을 조사하고, 평형점이 모두 불안정하면 Poincaré–Bendixson 정리로 주기해를 얻는다.

같은 순서를 밟는다. 모든 해가 결국 들어와 머무는 타원체가 있다. 평형점은 원점과 두 점 $C_\pm$ 셋이고, 이 매개변수에서는 셋 다 불안정하다. 평면이었다면 여기서 주기해가 나온다.

3 차원에서는 이 마지막 단계가 성립하지 않는다. 해 곡선이 서로를 가로지르지 않아도 공간에서는 서로를 비켜 돌아갈 수 있어서, 해가 닫힌 곡선에 감겨 들 이유가 없다. 실제로 이 방정식의 해는 $C_+$ 둘레와 $C_-$ 둘레를 불규칙한 횟수로 번갈아 돌며, 이웃한 두 해의 거리는 시간에 따라 지수적으로 벌어진다. 해들이 다가가는 집합은 평형점도 주기 궤도도 아닌 집합이고, 이런 집합을 이상 끌개라 한다.

# 정의

$x'=f(x)$ 의 해가 시각 $t$ 에 도달한 점을 $\varphi_t(x_0)$ 이라 쓴다.

- 닫힌 집합 $A$ 가 **끌개(attractor)** 라는 것은 $\varphi_t(A)=A$ 가 모든 $t$ 에서 성립하고, $A$ 의 어떤 열린 근방 $U$ 에서 출발한 모든 해가 $t\to\infty$ 에서 $A$ 로 다가가며, 이 두 성질을 갖는 진부분집합이 없는 것이다.
- 해가 $A$ 위에서 **초기조건에 민감하게 의존(sensitive dependence on initial conditions)** 한다는 것은 $\delta\gt 0$ 이 존재해, $A$ 의 모든 점 $x_0$ 와 모든 $\varepsilon\gt 0$ 에 대해 $\vert y_0-x_0\vert\lt\varepsilon$ 이고 어떤 $t\gt 0$ 에서 $\vert\varphi_t(y_0)-\varphi_t(x_0)\vert\gt\delta$ 인 $y_0\in A$ 가 존재하는 것이다.
- 초기조건에 민감하게 의존하는 끌개를 **이상 끌개(strange attractor)** 라 한다.

**혼돈(chaos)** 은 결정론적인 방정식의 해가 주기적으로도 평형으로도 수렴하지 않고 초기조건에 민감하게 의존하는 장기 거동을 가리킨다. 혼돈의 정의는 문헌마다 조금씩 다르다.[^2]

# 성질

## 대칭과 평형점

방정식은 $(x,y,z)\mapsto(-x,-y,z)$ 로 바꿔도 그대로이므로 해를 이 대칭으로 옮긴 것도 해다. 원점은 항상 평형점이다. $\rho\gt 1$ 이면 평형점이 둘 더 있다.

$$
C_\pm=\Bigl(\pm\sqrt{\beta(\rho-1)},\ \pm\sqrt{\beta(\rho-1)},\ \rho-1\Bigr)
$$

## 부피 수축

벡터장의 발산은

$$
\frac{\partial x'}{\partial x}+\frac{\partial y'}{\partial y}+\frac{\partial z'}{\partial z}=-(\sigma+1+\beta)\lt 0
$$

으로 상수다. 따라서 부피가 $V_0$ 인 영역을 시간 $t$ 동안 흐름으로 옮긴 영역의 부피는 $V_0e^{-(\sigma+1+\beta)t}$ 이고, 모든 해가 다가가는 집합의 부피는 $0$ 이다.

## 흡수 타원체

상수 $C$ 를 충분히 크게 잡으면 타원체 $\rho x^2+\sigma y^2+\sigma(z-2\rho)^2\le C$ 의 경계에서 이 이차식이 해를 따라 감소한다. 그러므로 모든 해가 유한 시간 안에 이 타원체로 들어오고 그 뒤로 떠나지 않는다.[^2]

## 원점의 안정성

**정리.** $\rho\lt 1$ 이면 원점은 전역 점근 안정이다. 곧 모든 해가 원점으로 수렴한다.

증명의 요지. $V=x^2/\sigma+y^2+z^2$ 로 두면

$$
\frac12\dot V=-\Bigl(x-\frac{\rho+1}{2}y\Bigr)^2-\Bigl(1-\Bigl(\frac{\rho+1}{2}\Bigr)^2\Bigr)y^2-\beta z^2
$$

이다. $\rho\lt 1$ 이면 $(\rho+1)/2\lt 1$ 이므로 원점이 아닌 점에서 $\dot V\lt 0$ 이고, $V$ 는 공간 전체에서 [Lyapunov 안정성](lyapunov-stability.md)의 엄격한 Lyapunov 함수다. $\rho\gt 1$ 이면 원점에서의 일차 근사가 양의 고윳값을 가져 원점은 불안정하다.

## C± 의 안정성

$\sigma\gt\beta+1$ 이면 $C_\pm$ 은

$$
1\lt\rho\lt\rho_H=\frac{\sigma(\sigma+\beta+3)}{\sigma-\beta-1}
$$

에서 점근 안정하고 $\rho\gt\rho_H$ 에서 불안정하다. $\rho=\rho_H$ 에서 선형화의 켤레 고윳값 한 쌍이 허수축을 가로지르며, 이것이 [Hopf 분기](hopf-bifurcation.md)다. $\sigma=10$, $\beta=8/3$ 이면 $\rho_H=470/19$ 이고 $\rho=28$ 은 이보다 크다.[^2]

## 이상 끌개의 존재

**정리(Tucker, 2002).** $\sigma=10$, $\rho=28$, $\beta=8/3$ 에서 Lorenz 방정식은 이상 끌개를 갖는다.[^3]

이 문제는 Smale 이 21 세기의 수학 문제 목록에 14 번째로 올린 것이다. Tucker 는 끌개를 가로지르는 평면 위의 귀환 사상을 구간 산술로 검증한 계산과, 원점 근처의 해를 다루는 표준형(normal form) 이론을 합쳐 증명했다.

# 활용

- **평면과 공간의 차이.** Poincaré–Bendixson 정리가 3 차원에서 성립하지 않는다는 것을 보이는 표준 예다. 흡수 영역과 불안정한 평형점이라는 평면의 가정이 모두 성립하는데도 주기해로 수렴하지 않는다.
- **예측 가능성의 한계.** [Grönwall 부등식](gronwall-inequality.md)은 초깃값의 차이가 많아야 $e^{Kt}$ 배로 커진다는 상한을 준다. Lorenz 방정식에서는 이 지수적 증가가 실제로 일어나므로, 초깃값을 아무리 정밀하게 재도 오차가 정해진 크기에 이르는 시간은 측정 정밀도의 로그에 비례하는 만큼만 늘어난다. Lorenz 가 기상 예측의 한계로 든 것이 이 현상이다.[^1]
- **수치 해법.** 이 방정식의 개별 해는 긴 시간에 대해 수치적으로 따라갈 수 없지만, Tucker 의 증명처럼 구간 산술로 오차를 엄밀히 관리하면 끌개의 존재와 같은 정성적 성질은 컴퓨터로 증명된다.

[^1]: E. N. Lorenz, *Deterministic nonperiodic flow*, Journal of the Atmospheric Sciences **20** (1963), 130–141.
[^2]: S. H. Strogatz, *Nonlinear Dynamics and Chaos*, 2nd ed., Westview Press, 2015, 9 장 2 절(Lorenz 방정식의 성질), 9 장 3 절(혼돈과 끌개의 정의).
[^3]: W. Tucker, *A rigorous ODE solver and Smale's 14th problem*, Foundations of Computational Mathematics **2** (2002), 53–117.

# 연관 문서

## 선수지식

- [Poincaré–Bendixson 정리](poincare-bendixson.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation
