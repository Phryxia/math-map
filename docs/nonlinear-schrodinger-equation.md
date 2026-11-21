# 비선형 Schrödinger 방정식

# 개요

**비선형 Schrödinger 방정식(nonlinear Schrödinger equation)** 은 [Schrödinger 방정식](schrodinger-equation.md)의 위치에너지 자리에 파동 자신의 세기 $\vert\psi\vert^2$ 를 넣은 방정식이다. 광섬유에 짧은 빛 펄스를 보내면 진동수마다 속도가 달라 펄스가 퍼지지만, 빛이 세면 유리의 굴절률이 세기에 따라 바뀌어 퍼짐을 거스른다. 이 방정식은 두 효과를 한 식에 적고, 둘이 맞아떨어지면 모양을 유지한 채 나아가는 펄스가 해로 존재함을 보인다.

# 직관

선형 방정식 $i\psi_t+\psi_{xx}=0$ 에서는 처음에 모여 있던 파동 묶음이 퍼지고 높이가 $t^{-1/2}$ 로 낮아진다. 진동수 $k$ 성분의 위상이 $k^2t$ 로 돌아 성분마다 어긋나기 때문이다.

세기가 큰 곳에서 위상이 더 빨리 돌게 하는 항 $2\vert\psi\vert^2\psi$ 를 더한다.

$$
i\psi_t+\psi_{xx}+2\vert\psi\vert^2\psi=0
$$

모양이 변하지 않는 해 $\psi=\varphi(x)e^{i\omega t}$ 를 찾는다. 넣으면 실함수 $\varphi$ 에 대한 식 $\varphi''+2\varphi^3=\omega\varphi$ 가 나온다. $\varphi=a\thinspace\mathrm{sech}(ax)$ 이면 $\varphi''=a^2\varphi-2\varphi^3$ 이므로 $\omega=a^2$ 에서 성립한다. 높이 $a$ 와 폭 $1/a$ 가 묶여 있어, 높은 펄스일수록 좁고 위상이 빨리 돈다.

# 정의

## 방정식

$\psi\colon\mathbb R^n\times\mathbb R\to\mathbb C$ 와 부호 $\mu=\pm1$ 에 대해 다음을 3차 비선형 Schrödinger 방정식이라 한다.

$$
i\psi_t+\Delta\psi+\mu\vert\psi\vert^2\psi=0
$$

$\mu=1$ 이면 **집속형(focusing)**, $\mu=-1$ 이면 **발산형(defocusing)** 이라 한다. 직관 절의 식은 $n=1$ 인 집속형에서 $\psi$ 를 $\sqrt2$ 배로 바꾼 것이다. 집속형에서는 세기가 큰 곳이 위치에너지가 낮은 곳처럼 작용해 파동을 모으고, 발산형에서는 흩는다.

## 고립파

$\psi(x,t)=\varphi(x)e^{i\omega t}$ 꼴의 해를 **고립파(solitary wave)** 라 한다. 직관 절의 $a\thinspace\mathrm{sech}(ax)e^{ia^2t}$ 가 그 예다. Galilei 변환으로 움직이는 고립파도 얻는다. 해 $\psi(x,t)$ 와 속도 $v$ 에 대해 다음도 해다.

$$
\psi\big(x-2vt,\thinspace t\big)\thinspace e^{i(vx-v^2t)}
$$

# 성질

## 보존량

매끄럽고 무한원에서 빨리 줄어드는 해에서 다음 세 양은 시간에 따라 변하지 않는다.

$$
\begin{aligned}
M&=\int\vert\psi\vert^2dx\cr
P&=\mathrm{Im}\int\bar\psi\thinspace\nabla\psi\thinspace dx\cr
E&=\int\Big(\vert\nabla\psi\vert^2-\frac{\mu}{2}\vert\psi\vert^4\Big)dx
\end{aligned}
$$

$M$ 은 선형 방정식의 확률 보존과 같은 계산으로 나온다. 비선형 항은 $\bar\psi\cdot\vert\psi\vert^2\psi$ 가 실수라서 $M$ 의 시간 미분에 기여하지 않는다.

## 1차원 적분가능성

$n=1$ 이면 방정식은 [Lax 쌍](lax-pairs.md)을 가지고, $2\times 2$ 일차 계의 산란 문제로 [역산란 변환](inverse-scattering-transform.md)이 적용된다. 이것은 Zakharov 와 Shabat 가 보였다[^1]. 그래서 보존량이 무한히 많고, 집속형의 처음 값은 시간이 지나면 여러 고립파와 퍼지는 부분으로 갈라진다. 고립파끼리 부딪쳐도 모양과 속도가 그대로 남는 [솔리톤](solitons.md)이다.

## 차원과 폭발

집속형에서 질량을 유지한 채 폭을 $1/\lambda$ 배로 줄이면 에너지의 첫 항은 $\lambda^2$ 배, 둘째 항은 $\lambda^n$ 배로 커진다. $n=1$ 이면 퍼짐이 이기므로 에너지 보존으로 $\Vert\nabla\psi\Vert$ 가 유계이고 해가 모든 시간에 존재한다. $n=2$ 이면 두 항이 같은 비율로 커진다.

$n=2$ 의 집속형에서 에너지가 음수이고 $\int\vert x\vert^2\vert\psi\vert^2dx$ 가 유한한 해는 유한 시간에 $\Vert\nabla\psi\Vert$ 가 무한대로 간다. 이것은 $V(t)=\int\vert x\vert^2\vert\psi\vert^2dx$ 가 $V''(t)=8E$ 를 만족한다는 Glassey 의 계산에서 나온다[^2]. $E\lt 0$ 이면 $V$ 는 위로 볼록한 이차함수이므로 유한 시간에 음이 되어야 하는데, $V$ 는 음이 될 수 없으므로 그 전에 해가 끝난다. 질량이 고립파 $Q$ 의 질량보다 작으면 폭발하지 않는다는 것은 Weinstein 이 보였다[^3].

# 활용

- 광섬유. 펄스의 포락선이 광섬유의 분산과 Kerr 효과(Kerr effect)에 따라 이 방정식을 따르고, $\mathrm{sech}$ 꼴 펄스가 모양을 유지한 채 먼 거리를 간다.
- 수면파. 깊은 물에서 일정한 진동수로 오르내리는 파도의 포락선이 이 방정식을 따르고, 고른 파열이 작은 흔들림에 깨지는 Benjamin–Feir 불안정성(Benjamin–Feir instability)이 집속형의 불안정성이다.
- Bose–Einstein 응축. 원자 기체의 응축 상태를 적는 Gross–Pitaevskii 방정식(Gross–Pitaevskii equation)은 가둠 위치에너지를 더한 비선형 Schrödinger 방정식이다.
- 분산 방정식의 해석. 선형 방정식의 분산 추정과 그것을 시간 적분으로 강화한 [Strichartz 추정](strichartz-estimates.md)(Strichartz estimate)으로 비선형 항을 작은 섭동으로 다뤄 해의 존재를 보인다.

[^1]: V. E. Zakharov and A. B. Shabat, "Exact theory of two-dimensional self-focusing and one-dimensional self-modulation of waves in nonlinear media", *Soviet Physics JETP* 34 (1972), 62–69.
[^2]: R. T. Glassey, "On the blowing up of solutions to the Cauchy problem for nonlinear Schrödinger equations", *Journal of Mathematical Physics* 18 (1977), 1794–1797.
[^3]: M. I. Weinstein, "Nonlinear Schrödinger equations and sharp interpolation estimates", *Communications in Mathematical Physics* 87 (1983), 567–576.

# 연관 문서

## 선수지식

- [Schrödinger 방정식](schrodinger-equation.md)
- [솔리톤](solitons.md)

## 더 알아보기

- [비선형 분산 방정식의 산란](nonlinear-scattering.md)

#analysis #differential_geometry
