# Krylov–Safonov Harnack 부등식

# 개요

**Krylov–Safonov Harnack 부등식(Krylov–Safonov Harnack inequality)** 은 계수가 측정가능하기만 한 비발산형 타원형 방정식의 음 아닌 해가, 반지름을 절반으로 줄인 공에서 최댓값이 최솟값의 상수배를 넘지 않는다는 정리다. 평면의 판 위에서 입자가 자리마다 다른 방향과 세기로 무작위로 움직이다가 판의 가장자리에 닿는다. 출발점 $x$ 에서 입자가 가장자리의 정해진 부분으로 나갈 확률 $u(x)$ 는 계수가 움직임의 세기인 비발산형 방정식을 만족하고, 그 세기가 경계선을 따라 뛰어도 $u$ 가 이웃한 점에서 크게 다른지가 물음이다. 이 정리는 [Alexandrov–Bakelman–Pucci 추정](alexandrov-bakelman-pucci.md)으로 해가 작은 값을 갖는 집합의 부피를 세어, 계수의 연속성 없이 이웃한 점의 확률이 비슷하고 $u$ 가 Hölder 연속임을 증명한다.

# 직관

[De Giorgi–Nash–Moser 정리](de-giorgi-nash-moser.md)는 발산형 방정식 $\mathrm{div}(a\nabla u)=0$ 에 시험함수를 곱하고 부분적분해 $\nabla u$ 의 적분을 $u$ 의 적분으로 묶는다. 비발산형 방정식 $-\sum\_{i,j}a^{ij}D\_{ij}u=0$ 에 같은 시험함수를 곱하고 부분적분하면 도함수가 $a^{ij}$ 로 넘어간다. $a^{ij}$ 는 측정가능하기만 하므로 그 도함수가 뜻을 갖지 않고, 이 방법은 첫 단계에서 멈춘다.

계수를 미분하지 않는 도구는 Alexandrov–Bakelman–Pucci 추정이다. 그 추정에 따르면 위 해 $u$ 가 공 가운데에서 경계보다 깊이 내려갈 때 오른쪽 항의 $L^n$ 노름이 커야 하고, 그 노름을 계산하는 범위는 $u$ 가 낮은 자리에 있는 접촉 집합뿐이다. 그래서 $u$ 가 가운데 한 점에서 $1$ 이하로 내려가는데 $u$ 가 작은 집합의 부피가 아주 작으면 노름이 작아져 모순이 난다. 음 아닌 위 해가 가운데에서 $1$ 이하인 값을 가지면 $u\le M$ 인 점이 일정한 비율 $\mu$ 이상을 차지한다.

이 비율을 작은 정육면체마다 되풀이하면 $u\gt M$ 인 점의 비율은 $1-\mu$ 이하, $u\gt M^2$ 인 점의 비율은 $(1-\mu)^2$ 이하가 되고, $u$ 가 큰 값을 갖는 집합의 부피가 거듭제곱으로 준다. 큰 값의 부피가 작으면 해의 최댓값도 최솟값으로 묶이고, 그것이 Harnack 부등식이다.

# 정의

## 비발산형 방정식의 강한 해

$\Omega\subset\mathbb R^n$ 이 열린집합이고 $a^{ij}:\Omega\to\mathbb R$ 가 측정가능 함수이며 $a^{ij}=a^{ji}$ 이고, 상수 $0\lt \lambda\le\Lambda$ 에 대해 거의 모든 $x$ 와 모든 $\xi\in\mathbb R^n$ 에서

$$
\lambda\vert\xi\vert^2\le\sum\_{i,j}a^{ij}(x)\xi_i\xi_j\le\Lambda\vert\xi\vert^2
$$

이 성립한다고 둔다. 연산자를 $Lu=-\sum\_{i,j}a^{ij}D\_{ij}u$ 로 쓴다. $u\in W^{2,n}\_{\mathrm{loc}}(\Omega)$([Sobolev 공간](sobolev-spaces.md))가 거의 모든 점에서 $Lu\ge 0$ 이면 **강한 위 해(strong supersolution)**, $Lu\le 0$ 이면 **강한 아래 해(strong subsolution)**, $Lu=0$ 이면 **강한 해(strong solution)** 라 한다.

$a^{ij}$ 가 미분되지 않으므로 이 정의에는 계수의 연속성이 들어가지 않는다. 평면에서 $x_1\lt 0$ 이면 $a=\mathrm{diag}(1,1)$, $x_1\ge 0$ 이면 $a=\mathrm{diag}(100,1)$ 로 두면 $\lambda=1$, $\Lambda=100$ 이다. 이 계수에서 $u(x)=1-x_2^2$ 는 $Lu=2\ge 0$ 이므로 강한 위 해다.

## Harnack 부등식

$B_r$ 에서 음이 아닌 함수 $u$ 가

$$
\sup\_{B\_{r/2}}u\le C\inf\_{B\_{r/2}}u
$$

를 만족할 때 $u$ 가 상수 $C$ 의 **Harnack 부등식(Harnack inequality)** 을 만족한다고 한다. 위 예의 $u=1-x_2^2$ 는 $B_1$ 에서 음이 아니고, $B\_{1/2}$ 에서 최댓값 $1$ 과 최솟값 $3/4$ 를 가지므로 $C=4/3$ 으로 부등식을 만족한다.

# 성질

## 측도 추정

정리. $n$ 과 $\Lambda/\lambda$ 에만 의존하는 상수 $M\gt 1$ 과 $0\lt \mu\lt 1$ 이 있어 다음이 성립한다. $Q_r$ 을 원점 중심 한 변의 길이 $r$ 인 정육면체라 할 때, $u$ 가 $Q\_{4\sqrt n}$ 에서 음 아닌 강한 위 해이고 $\inf\_{Q_3}u\le 1$ 이면

$$
\vert\lbrace u\le M\rbrace\cap Q_1\vert\gt \mu
$$

이다.[^1]

증명의 요지. $Q_3$ 에서 $\varphi\le -2$, $B\_{2\sqrt n}$ 의 경계에서 $\varphi\ge 0$ 이고 $Q_1$ 밖에서 $L\varphi\ge 0$ 인 매끄러운 함수 $\varphi$ 를 만든다. $w=-(u+\varphi)$ 는 $B\_{2\sqrt n}$ 의 경계에서 $0$ 이하이고 $Q_3$ 의 한 점에서 $1$ 이상이다. $Lw\le -L\varphi$ 이므로 $w$ 에 Alexandrov–Bakelman–Pucci 추정을 쓰면 오른쪽 항의 양수 부분이 $Q_1$ 안의 접촉 집합에서만 $0$ 이 아니고, 접촉 집합에서는 $u\le -\varphi\le M$ 이다. 따라서 $1\le C\vert\lbrace u\le M\rbrace\cap Q_1\vert^{1/n}$ 이 나온다.

## 약한 Harnack 부등식

정리. 같은 가정에서 $n$ 과 $\Lambda/\lambda$ 에만 의존하는 $\varepsilon\gt 0$ 과 $C$ 가 있어 모든 $t\gt 0$ 에서

$$
\vert\lbrace u\gt t\rbrace\cap Q_1\vert\le Ct^{-\varepsilon}
$$

이다. 이것을 **약한 Harnack 부등식(weak Harnack inequality)** 이라 한다.[^1]

증명의 요지. $A_k=\lbrace u\gt M^k\rbrace\cap Q_1$ 로 둔다. $Q_1$ 을 $2^n$ 등분하며 내려가 $A_k$ 가 차지하는 비율이 $1-\mu$ 를 넘는 첫 정육면체에서 멈춘다. 멈춘 정육면체의 부모 근처에 $u\le M^{k-1}$ 인 점이 있으면 축척을 바꾼 $u/M^{k-1}$ 에 측도 추정을 써서 비율이 $1-\mu$ 이하여야 하므로, 부모들은 $A\_{k-1}$ 에 들어간다. [Calderón–Zygmund 이론](calderon-zygmund-theory.md)의 정육면체 분해에서처럼 부피를 더하면 $\vert A_k\vert\le(1-\mu)\vert A\_{k-1}\vert$ 이고, $\vert A_k\vert\le(1-\mu)^k$ 에서 $\varepsilon=\log\bigl(1/(1-\mu)\bigr)/\log M$ 로 정리가 나온다.

## Krylov–Safonov Harnack 부등식

정리. $u$ 가 $B_1$ 에서 음 아닌 강한 해이면 $n$ 과 $\Lambda/\lambda$ 에만 의존하는 $C$ 로

$$
\sup\_{B\_{1/2}}u\le C\inf\_{B\_{1/2}}u
$$

이다.[^2][^1]

증명의 요지. 최솟값 쪽은 약한 Harnack 부등식이 $u$ 의 $L^\varepsilon$ 노름을 $\inf u$ 로 묶는다. 최댓값 쪽은 아래 해 $u$ 에 Alexandrov–Bakelman–Pucci 추정과 같은 정육면체 논법을 쓴 국소 최댓값 원리(local maximum principle)가 $\sup u$ 를 $u$ 의 $L^\varepsilon$ 노름으로 묶는다. 둘을 이으면 정리가 나온다.

## Hölder 연속성

$u$ 가 $B_1$ 에서 강한 해이면 $n$ 과 $\Lambda/\lambda$ 에만 의존하는 $0\lt \alpha\lt 1$ 과 $C$ 로

$$
\vert u(x)-u(y)\vert\le C\Vert u\Vert\_{L^\infty(B_1)}\vert x-y\vert^\alpha\qquad(x,y\in B\_{1/2})
$$

이다. Harnack 부등식을 $\sup\_{B_r}u-u$ 와 $u-\inf\_{B_r}u$ 에 차례로 쓰면 $\mathrm{osc}\_{B\_{r/2}}u\le\gamma\thinspace\mathrm{osc}\_{B_r}u$ 인 $\gamma\lt 1$ 이 나오고, 이것을 되풀이하면 [Hölder 공간](holder-spaces.md)의 조건이 나온다.

## 발산형과의 차이

De Giorgi–Nash–Moser 정리는 해가 $H^1$ 에 속하는 약한 해에 대한 것이고, 이 정리는 해가 $W^{2,n}$ 에 속하는 강한 해에 대한 것이다. 두 정리 모두 상수가 $n$ 과 $\Lambda/\lambda$ 에만 의존하지만, 증명의 도구가 앞의 것은 부분적분과 에너지 부등식이고 뒤의 것은 Alexandrov–Bakelman–Pucci 추정과 부피 세기다.

# 활용

- 확산 과정. 생성 작용소가 비발산형인 확산 과정에서 출구 확률과 기대 출구 시각은 $Lu=0$ 꼴의 방정식을 만족한다. Krylov 와 Safonov 는 [확률미분방정식](stochastic-differential-equations.md)의 해가 양의 부피를 갖는 집합에 닿을 확률의 하한에서 출발했고, 1980 년 논문에서 포물형 방정식에 대해 정리를 증명했다.[^2]
- 근사 해의 수렴. 측정가능 계수를 매끄러운 계수로 근사해 얻은 해들은 같은 Hölder 상수를 가지므로 [Arzelà–Ascoli 정리](arzela-ascoli.md)가 균등 수렴하는 부분열을 준다.
- 완전 비선형 타원형 방정식. $F(D^2u)=0$ 의 [점성해](viscosity-solutions.md)에 대해 같은 Harnack 부등식이 증명되어 있고, 그 결과로 해의 1계 도함수가 Hölder 연속이다. $F$ 가 오목이면 2계 도함수까지 Hölder 연속이라는 [Evans–Krylov 정리](evans-krylov-theorem.md)도 이 정리를 쓴다.[^1]

[^1]: Luis A. Caffarelli, Xavier Cabré, *Fully Nonlinear Elliptic Equations*, American Mathematical Society Colloquium Publications 43, 1995, 4 장부터 6 장. 측도 추정, 정육면체 분해를 쓴 약한 Harnack 부등식, 국소 최댓값 원리, 점성해의 정칙성, Evans–Krylov 정리를 다룬다.
[^2]: N. V. Krylov, M. V. Safonov, "A certain property of solutions of parabolic equations with measurable coefficients", *Izvestiya Akademii Nauk SSSR, Seriya Matematicheskaya* **44** (1980), 161–175.

# 연관 문서

## 선수지식

- [Alexandrov–Bakelman–Pucci 추정](alexandrov-bakelman-pucci.md)
- [Hölder 공간](holder-spaces.md)

## 더 알아보기

- [Evans–Krylov 정리](evans-krylov-theorem.md)

#analysis #probability #measure_theory
