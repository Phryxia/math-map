# Morawetz 추정

# 개요

**Morawetz 추정(Morawetz estimate)** 은 파동이 원점에서 바깥으로 흘러가는 운동량이 늘기만 하고 유계라는 사실에서, 해의 크기를 시간과 공간 전체에 걸쳐 적분한 양을 처음 값으로 누르는 부등식이다. 3차원 공간의 한 점 근처에 모인 파동은 시간이 지나며 바깥으로 퍼지는데, 질량과 에너지의 보존만으로는 각 시각의 크기만 알 뿐 파동이 원점 근처에 얼마나 오래 머무는지는 알 수 없다. Morawetz 추정은 그 머무는 정도를 하나의 유한한 적분으로 재고, [비선형 Schrödinger 방정식](nonlinear-schrodinger-equation.md)의 해가 결국 퍼진다는 것을 보이는 데 쓰인다.

# 직관

3차원 자유 [Schrödinger 방정식](schrodinger-equation.md) $i\psi_t+\Delta\psi=0$ 의 처음 값을 $\psi_0(x)=e^{-\vert x\vert^2/2}$ 로 둔다. 해는 다음과 같다.

$$
\psi(x,t)=(1+2it)^{-3/2}\exp\Bigl(-\frac{\vert x\vert^2}{2(1+2it)}\Bigr)
$$

세기는 다음과 같다.

$$
\vert\psi\vert^2=(1+4t^2)^{-3/2}e^{-\vert x\vert^2/(1+4t^2)}
$$

파동은 폭 $\sqrt{1+4t^2}$ 로 퍼지고, 원점의 세기 $\vert\psi(0,t)\vert^2=(1+4t^2)^{-3/2}$ 은 줄어든다. 질량 $\int\vert\psi\vert^2dx=\pi^{3/2}$ 은 시간에 따라 변하지 않으므로 질량에서는 원점의 세기가 얼마나 빨리 줄어드는지 알 수 없다.

원점에서 바깥을 향하는 운동량의 총합을 본다. 점 $x$ 에서 파동이 흐르는 양은 $\mathrm{Im}(\bar\psi\nabla\psi)$ 이고, 그 가운데 바깥 방향 성분을 모은 값을 $M(t)$ 라 한다. 위 해의 위상은 $t\vert x\vert^2/(1+4t^2)$ 이므로 흐름은 $\vert\psi\vert^2\cdot 2tx/(1+4t^2)$ 이고, 적분하면 다음이 나온다.

$$
M(t)=\int\frac{x}{\vert x\vert}\cdot\mathrm{Im}(\bar\psi\nabla\psi)\thinspace dx=\frac{4\pi t}{\sqrt{1+4t^2}}
$$

$M(t)$ 는 $-2\pi$ 에서 $2\pi$ 까지 늘기만 하고 그 증가율은 다음과 같다.

$$
M'(t)=4\pi(1+4t^2)^{-3/2}=4\pi\vert\psi(0,t)\vert^2
$$

증가율을 모든 시간에 걸쳐 적분하면 총증가량 $4\pi$ 이므로 원점의 세기의 시간 적분이 $\int\vert\psi(0,t)\vert^2dt=1$ 로 유한하다. 늘기만 하는 유계인 양의 증가율에서 시간 적분이 유한한 양을 얻는 것이 Morawetz 추정이다.

# 정의

$\mathbb R^n$ 위의 방정식 $i\psi_t+\Delta\psi+\mu\vert\psi\vert^{p-1}\psi=0$ 의 해 $\psi$ 와 매끄러운 함수 $a(x)$ 에 대해 다음 양을 **Morawetz 작용(Morawetz action)** 이라 한다.

$$
M_a(t)=\int_{\mathbb R^n}\nabla a\cdot\mathrm{Im}\bigl(\bar\psi\nabla\psi\bigr)\thinspace dx
$$

$a=\vert x\vert$ 이면 $\nabla a=x/\vert x\vert$ 이고 직관 절의 $M(t)$ 가 된다. $\vert\nabla a\vert\le 1$ 이면 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $\vert M_a(t)\vert\le\Vert\psi(t)\Vert\_{L^2}\Vert\nabla\psi(t)\Vert\_{L^2}$ 이다. 직관 절의 해에서 우변은 $\pi^{3/2}\sqrt{3/2}\approx 6.82$ 이고 $\vert M(t)\vert\lt 2\pi\approx 6.28$ 이다.

$M_a$ 의 시간 미분에서 나오는 시공간 적분의 상계를 **Morawetz 추정** 이라 한다. $n=3$ 의 발산형 방정식($\mu=-1$)에서는 다음이 성립한다.

$$
\int_{\mathbb R}\int_{\mathbb R^3}\frac{\vert\psi\vert^{p+1}}{\vert x\vert}\thinspace dx\thinspace dt\le C_p\sup\_t\Vert\psi(t)\Vert\_{L^2}\Vert\nabla\psi(t)\Vert\_{L^2}
$$

# 성질

## Morawetz 항등식

해가 충분히 매끄럽고 빨리 줄어들면 $M_a$ 의 시간 미분은 다음과 같다. $\partial\_j\partial\_ka$ 는 $a$ 의 [Hessian 행렬](hessian.md)의 성분이다.

$$
M_a'(t)=2\int\partial\_j\partial\_ka\thinspace\mathrm{Re}\bigl(\overline{\partial\_j\psi}\thinspace\partial\_k\psi\bigr)dx-\frac12\int\vert\psi\vert^2\Delta^2a\thinspace dx-\mu\frac{p-1}{p+1}\int\vert\psi\vert^{p+1}\Delta a\thinspace dx
$$

국소 질량 보존 $\partial_t\vert\psi\vert^2=-2\nabla\cdot\mathrm{Im}(\bar\psi\nabla\psi)$ 와 방정식을 써서 $M_a'$ 을 계산하고 부분적분하면 나온다[^1]. $a=\vert x\vert^2$ 이면 $M_a$ 는 $\int\vert x\vert^2\vert\psi\vert^2dx$ 의 시간 미분의 절반이고, Hessian 행렬이 $2I$, $\Delta^2a=0$ 이므로 이 항등식은 비선형 Schrödinger 방정식 문서의 Glassey 계산과 같은 꼴의 2계 미분 공식이 된다.

## 3차원의 부호

$n=3$, $a=\vert x\vert$ 이면 $\partial\_j\partial\_ka=(\delta\_{jk}-x_jx_k/\vert x\vert^2)/\vert x\vert$ 는 음이 아닌 행렬이고, $\Delta a=2/\vert x\vert$, $\Delta^2a=-8\pi\delta_0$ 이다. 그러므로 발산형에서 다음이 나온다.

$$
M'(t)=2\int\frac{\vert\nabla\psi\vert^2-\vert\hat x\cdot\nabla\psi\vert^2}{\vert x\vert}dx+4\pi\vert\psi(0,t)\vert^2+\frac{2(p-1)}{p+1}\int\frac{\vert\psi\vert^{p+1}}{\vert x\vert}dx
$$

$\hat x=x/\vert x\vert$ 이다. 세 항이 모두 $0$ 이상이므로 $M$ 은 늘기만 하고, $M'$ 을 시간에 대해 적분하면 정의 절의 추정이 $C_p=(p+1)/(p-1)$ 로 나온다. 직관 절의 자유 해에서는 첫 항이 $0$ 이고 셋째 항이 없어 $M'=4\pi\vert\psi(0,t)\vert^2$ 이다. 이 추정은 Lin 과 Strauss 가 증명했고, 원형은 Morawetz 가 Klein–Gordon 방정식(Klein–Gordon equation)에 대해 쓴 것이다[^2][^3].

## 상호작용 Morawetz 추정

$a=\vert x\vert$ 의 원점을 해 자신의 질량 분포에 대해 평균한 다음 작용을 쓴다.

$$
\iint\vert\psi(y)\vert^2\frac{x-y}{\vert x-y\vert}\cdot\mathrm{Im}(\bar\psi\nabla\psi)(x)\thinspace dx\thinspace dy
$$

그러면 3차원 발산형 방정식에서 다음이 나온다[^4].

$$
\int_{\mathbb R}\int_{\mathbb R^3}\vert\psi\vert^4\thinspace dx\thinspace dt\le C\sup\_t\Vert\psi(t)\Vert\_{L^2}^2\sup\_t\Vert\psi(t)\Vert\_{\dot H^{1/2}}^2
$$

원점이 따로 정해지지 않으므로 처음 값이 반지름 대칭이 아니어도 쓸 수 있고, 우변에 비선형 항이 들어가지 않는다.

# 활용

- 비선형 분산 방정식의 산란. Morawetz 추정이 준 시공간 적분에 [Strichartz 추정](strichartz-estimates.md)을 함께 써서 Strichartz 노름이 유한함을 보이고, 그 결과로 해가 [비선형 분산 방정식의 산란](nonlinear-scattering.md)의 뜻으로 산란함을 얻는다. Ginibre–Velo 의 발산형 산란 정리가 이 순서로 증명된다.
- 에너지 임계 방정식. 상호작용 Morawetz 추정은 3차원 5차 발산형 방정식의 산란 증명에서 해가 한 점에 몰리는 것을 막는 데 쓰인다.
- 파동방정식과 국소 에너지 감소. [파동방정식](wave-equation.md)에서 같은 작용이 유계 영역 안의 에너지가 시간에 대해 적분 가능하다는 국소 에너지 감소(local energy decay)를 준다.

[^1]: T. Tao, *Nonlinear Dispersive Equations: Local and Global Analysis*, CBMS Regional Conference Series in Mathematics 106, American Mathematical Society, 2006, 3.5 절.
[^2]: J. E. Lin, W. A. Strauss, "Decay and scattering of solutions of a nonlinear Schrödinger equation", *Journal of Functional Analysis* 30 (1978), 245–263.
[^3]: C. S. Morawetz, "Time decay for the nonlinear Klein-Gordon equation", *Proceedings of the Royal Society of London A* 306 (1968), 291–296.
[^4]: J. Colliander, M. Keel, G. Staffilani, H. Takaoka, T. Tao, "Global existence and scattering for rough solutions of a nonlinear Schrödinger equation on R³", *Communications on Pure and Applied Mathematics* 57 (2004), 987–1014.

# 연관 문서

## 선수지식

- [비선형 Schrödinger 방정식](nonlinear-schrodinger-equation.md)

## 더 알아보기

- [비선형 분산 방정식의 산란](nonlinear-scattering.md)

#analysis #functional_analysis
