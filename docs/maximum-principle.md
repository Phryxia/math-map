# 최대값 원리

# 개요

최대값 원리는 2계 타원형 연산자 $L$ 에 대해 $Lu\le 0$ 인 함수가 최대값을 경계에서 갖는다는 정리다. 방정식을 풀지 않고도 해의 크기를 경계값으로 묶는다.

[조화함수](harmonic-functions.md)에서는 평균값 성질이 이 결론을 준다. 계수가 점마다 달라지면 평균값 성질이 없고, 대신 최대점에서 Hessian 이 음의 반정부호라는 사실을 쓴다.

# 직관

$U\subset\mathbb R^n$ 에서 $Lu=-\sum\_{i,j}a^{ij}(x)D\_{ij}u$ 를 놓고 $u$ 가 내부 점 $x_0$ 에서 최대값을 갖는다고 하자. 최대점에서 $\nabla u(x_0)=0$ 이고 Hessian $H=D^2u(x_0)$ 가 음의 반정부호다. 남은 것은 $\sum\_{i,j}a^{ij}(x_0)H\_{ij}$ 의 부호다.

$A=(a^{ij}(x_0))$ 는 대칭 양의 정부호이므로 대칭 양의 정부호 행렬 $B$ 로 $A=B^2$ 라 쓸 수 있다. 그러면

$$
\sum\_{i,j}a^{ij}(x_0)H\_{ij}=\mathrm{tr}(AH)=\mathrm{tr}(BHB)
$$

이고, $H\le 0$ 이므로 각 $\xi$ 에서 $\xi^{\mathsf T}BHB\xi=(B\xi)^{\mathsf T}H(B\xi)\le 0$ 다. 따라서 $BHB$ 가 음의 반정부호이고 대각합이 $0$ 이하다. 곧 $Lu(x_0)\ge 0$ 이다.

그러므로 $U$ 안에서 $Lu\lt 0$ 이면 내부에 최대점이 없고, 최대값은 경계에서만 나온다. 부등식이 등호를 허용하는 $Lu\le 0$ 에서는 $Lu\lt 0$ 인 함수를 조금 더해 같은 결론으로 되돌린다.

# 정의

## 아래 해와 위 해

$U\subset\mathbb R^n$ 를 유계 열린집합이라 하고

$$
Lu=-\sum\_{i,j=1}^n a^{ij}(x)D\_{ij}u+\sum\_{i=1}^n b^i(x)D\_iu+c(x)u
$$

를 일률 타원형 연산자라 하자. 곧 $a^{ij}=a^{ji}$ 이고 상수 $\lambda\gt 0$ 이 있어 $\sum\_{i,j}a^{ij}(x)\xi_i\xi_j\ge\lambda\vert\xi\vert^2$ 다.

$u\in C^2(U)\cap C^0(\overline U)$ 가 $U$ 에서 $Lu\le 0$ 을 만족하면 $u$ 를 **아래 해**(subsolution), $Lu\ge 0$ 을 만족하면 **위 해**(supersolution)라 한다. $Lu=0$ 인 것은 둘 다인 경우다.

## 최대값 원리의 두 꼴

결론이 $\max\_{\overline U}u=\max\_{\partial U}u$ 인 것을 **약한 최대값 원리**, 내부 점에서 최대값을 달성하면 $u$ 가 상수라는 것을 **강한 최대값 원리**라 한다. 약한 꼴은 경계의 값으로 내부를 묶고, 강한 꼴은 내부에서 최대값에 닿는 경우를 상수로 배제한다.

# 성질

## 약한 최대값 원리

**정리.** $c\equiv 0$ 이고 $u$ 가 $U$ 의 아래 해이면 $\max\_{\overline U}u=\max\_{\partial U}u$ 다.[^1]

증명의 요지. $\gamma\gt 0$ 과 $v(x)=e^{\gamma x_1}$ 를 놓으면

$$
Lv=-(a^{11}\gamma^2+b^1\gamma)e^{\gamma x_1}
$$

이고 $a^{11}\ge\lambda$ 이므로 $\gamma$ 를 $\Vert b^1\Vert\_{C^0}/\lambda$ 보다 크게 잡으면 $Lv\lt 0$ 이다. $\varepsilon\gt 0$ 에서 $u\_\varepsilon=u+\varepsilon v$ 는 $Lu\_\varepsilon\lt 0$ 을 만족하므로 직관 절의 계산에서 내부 최대점이 없고 $\max\_{\overline U}u\_\varepsilon=\max\_{\partial U}u\_\varepsilon$ 다. $\varepsilon\to 0$ 에서 $v$ 가 $\overline U$ 에서 유계이므로 양변이 각각 $\max\_{\overline U}u$ 와 $\max\_{\partial U}u$ 로 간다. $\square$

## 영차항의 부호 조건

$c\ge 0$ 이면 아래 해에 대해 $\max\_{\overline U}u\le\max\_{\partial U}u^+$ 가 성립한다. $u^+=\max(u,0)$ 이다. 증명은 $u\gt 0$ 인 열린집합에 $cu\ge 0$ 을 더해 $c\equiv 0$ 의 경우로 돌리는 것이다.

$c$ 의 부호를 빼면 결론이 깨진다. $U=(0,\pi)$ 와 $Lu=-u''-u$ 에서 $u(x)=\sin x$ 는 $Lu=0$ 이고 경계값이 $0$ 인데 내부에서 최대값 $1$ 을 갖는다. 이 $\pi$ 는 Lax–Milgram 정리 문서에서 강제성이 깨지는 최소 고윳값과 같은 자리다.

## Hopf 보조정리

**정리.** $c\equiv 0$, $u$ 가 아래 해, $x_0\in\partial U$ 에서 $u(x_0)\gt u(x)$ 가 모든 $x\in U$ 에서 성립하며, $x_0$ 에서 $U$ 안에 내접하는 공이 있다고 하자. 그러면 그 공의 외향 법선 $\nu$ 에 대해

$$
\frac{\partial u}{\partial\nu}(x_0)\gt 0
$$

이다.[^2]

증명의 요지. 내접하는 공 $B_R(y)$ 를 잡고 $w(x)=e^{-\kappa\vert x-y\vert^2}-e^{-\kappa R^2}$ 를 둔다. $\kappa$ 를 크게 잡으면 $B_R(y)\setminus\overline{B\_{R/2}(y)}$ 에서 $Lw\lt 0$ 이다. 그 영역의 안쪽 경계에서 $u-u(x_0)\le-\delta\lt 0$ 이므로 작은 $\epsilon$ 에서 $u-u(x_0)+\epsilon w$ 가 그 영역의 경계 전체에서 $0$ 이하이고, 약한 최대값 원리가 영역 안에서도 $0$ 이하임을 준다. $x_0$ 에서 등호가 성립하므로 법선 방향 미분을 비교하면 $\partial u/\partial\nu(x_0)\ge-\epsilon\partial w/\partial\nu(x_0)\gt 0$ 이다. $\square$

## 강한 최대값 원리

**정리.** $U$ 가 연결이고 $c\equiv 0$ 이며 $u$ 가 아래 해일 때, 내부 점에서 $\max\_{\overline U}u$ 를 달성하면 $u$ 는 상수다.[^1]

증명의 요지. $M=\max\_{\overline U}u$ 와 $V=\lbrace x\in U:u(x)=M\rbrace$ 를 놓는다. $u$ 가 연속이므로 $V$ 가 $U$ 에서 닫혀 있다. $V$ 가 열려 있지 않다고 하면 $V$ 의 경계점에 접하는 공을 $U\setminus V$ 안에 잡을 수 있고, 그 공에 Hopf 보조정리를 쓰면 접점에서 법선 미분이 양수다. 그 접점은 $U$ 의 내부 점이고 $u$ 의 최대점이므로 $\nabla u=0$ 이라 모순이다. 따라서 $V$ 가 열려 있고 닫혀 있으며 비지 않으므로 연결성에서 $V=U$ 다. $\square$

## 비교 원리

**정리.** $c\ge 0$ 이고 $Lu\le Lv$ 이며 $\partial U$ 에서 $u\le v$ 이면 $\overline U$ 에서 $u\le v$ 다.

증명의 요지. $w=u-v$ 가 $Lw\le 0$ 과 $\partial U$ 에서 $w\le 0$ 을 만족하므로 부호 조건의 결론이 $\max\_{\overline U}w\le\max\_{\partial U}w^+=0$ 을 준다. $\square$

$u$ 와 $v$ 의 자리를 바꿔 쓰면 경계값이 같은 두 해가 같다는 유일성이 나온다. 또 $Lu=f$, $c\ge 0$ 에서 $v=\max\_{\partial U}\vert u\vert+C\sup\_U\vert f\vert$ 꼴의 함수를 비교 대상으로 잡으면

$$
\max\_{\overline U}\vert u\vert\le\max\_{\partial U}\vert u\vert+C\sup\_U\vert f\vert
$$

가 나오고 $C$ 는 $\lambda$, $\Vert b\Vert\_{C^0}$, $U$ 의 지름에만 의존한다.

# 활용

- **Dirichlet 문제의 유일성.** [Dirichlet 문제](dirichlet-problem.md)에서 같은 경계값을 갖는 두 해의 차는 경계값이 $0$ 인 해이므로 비교 원리가 그 차를 $0$ 으로 만든다. Perron 방법이 아래 해의 상한으로 해를 만드는 구성도 이 원리를 쓴다.
- **Schauder 추정의 $C^0$ 항.** [Schauder 추정](schauder-estimates.md)의 내부 추정은 오른쪽에 $\Vert u\Vert\_{C^0}$ 를 남긴다. $c\ge 0$ 이면 위의 선험 상한이 그 항을 경계값과 $f$ 의 노름으로 바꾼다.
- **조화함수의 최대 원리.** $a^{ij}=\delta^{ij}$, $b=0$, $c=0$ 인 경우가 조화함수 문서의 최대 원리다. 그 증명은 평균값 성질을 쓰고, 여기의 증명은 Hessian 의 부호만 쓴다.
- **고윳값의 하한.** 부호 조건의 반례에서 본 대로, $Lu=-\Delta u-\lambda u$ 가 최대값 원리를 만족하는 $\lambda$ 의 범위는 Dirichlet 경계조건을 준 Laplace 작용소의 최소 고윳값 아래쪽이다.

[^1]: David Gilbarg, Neil S. Trudinger, *Elliptic Partial Differential Equations of Second Order*, 2판, Springer, 1983, 3.1 절과 3.2 절. Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 6.4 절도 같은 두 정리를 다룬다.
[^2]: Eberhard Hopf, "Elementare Bemerkungen über die Lösungen partieller Differentialgleichungen zweiter Ordnung vom elliptischen Typus", *Sitzungsberichte der Preussischen Akademie der Wissenschaften* **19** (1927), 147–152.

# 연관 문서

## 선수지식

- [조화함수](harmonic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #complex_analysis #functional_analysis
