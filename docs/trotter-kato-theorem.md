# Trotter–Kato 근사 정리

# 개요

**Trotter–Kato 근사 정리(Trotter–Kato approximation theorem)** 는 [강연속 반군](c0-semigroups.md)의 열이 같은 지수 상한을 가질 때, 생성원이나 분해작용소가 수렴하면 반군도 수렴한다는 정리다. [열방정식](heat-equation.md)을 간격 $h$ 인 격자에서 차분으로 풀면, $h$ 를 줄일 때 그 해가 참 해로 가는지가 문제가 된다. 이 정리는 반군 자체를 비교하는 대신 차분 작용소가 매끄러운 함수에서 이계 미분으로 가는지와 차분 반군이 축약인지만 확인해 수렴을 얻는다.

# 직관

$L^2(\mathbb R)$ 위의 열 반군은 $u_t=u_{xx}$ 의 해를 주고, 생성원은 $Af=f''$ 이다. 격자 간격 $h$ 로 이계 미분을 차분으로 바꾼 작용소는 다음과 같다.

$$
(A_hf)(x)=\frac{f(x+h)-2f(x)+f(x-h)}{h^2}
$$

$A_h$ 는 유계 작용소이므로 $e^{tA_h}$ 는 급수로 정의된다. [Fourier 변환](fourier-transform.md)을 취하면 $A$ 는 $-\xi^2$ 를, $A_h$ 는 다음 값을 곱한다.

$$
\frac{e^{ih\xi}-2+e^{-ih\xi}}{h^2}=-\frac{4}{h^2}\sin^2\frac{h\xi}{2}
$$

$h\to 0$ 이면 이 값은 $\xi$ 마다 $-\xi^2$ 로 간다. 두 반군은 $e^{-t\xi^2}$ 와 $e^{-t(4/h^2)\sin^2(h\xi/2)}$ 를 곱하고, 둘 다 크기가 $1$ 이하다. 곱하는 값이 점마다 수렴하고 $1$ 로 눌리므로 [지배 수렴 정리](dominated-convergence.md)로 모든 $f$ 에서 $\Vert e^{tA_h}f-e^{tA}f\Vert\to 0$ 이다.

Fourier 변환이 없는 공간에서는 같은 계산을 할 수 없다. 그래도 두 사실은 남는다. 매끄러운 $f$ 에서 Taylor 전개로 $A_hf\to f''$ 이고, 모든 $h$ 에서 $\Vert e^{tA_h}\Vert\le 1$ 이다. Trotter–Kato 근사 정리는 이 두 사실만으로 반군의 수렴을 얻는다.

# 정의

## 안정성

[Banach 공간](banach-spaces.md) $X$ 위의 강연속 반군 $T_n$ 들이 $n$ 에 달리지 않는 $M\ge 1$, $\omega\in\mathbb R$ 에 대해 모든 $n$, $t\ge 0$ 에서 $\Vert T_n(t)\Vert\le Me^{\omega t}$ 를 만족하면 **안정(stable)** 하다고 한다. 직관 절의 $e^{tA_h}$ 들은 $M=1$, $\omega=0$ 으로 안정하다.

## 핵

생성원 $A$ 의 정의역 안의 부분공간 $D$ 가 그래프 노름 $\Vert x\Vert+\Vert Ax\Vert$ 에 대해 $\mathcal D(A)$ 에서 조밀하면 $D$ 를 $A$ 의 **핵(core)** 이라 한다. $D$ 에서 $A$ 를 알면 닫음을 취해 $A$ 전체가 정해진다.

직관 절의 $A=d^2/dx^2$ 에서는 컴팩트 지지 매끄러운 함수 전체 $C_c^\infty(\mathbb R)$ 가 핵이다. 이 함수들에서 Taylor 전개로 $A_hf\to f''$ 를 확인한다.

# 성질

## 분해작용소의 수렴

$T_n$, $T$ 가 안정한 강연속 반군이고 생성원이 $A_n$, $A$ 라 하자. $\lambda\gt\omega$ 에서 다음 둘은 동치다.[^1]

1. 모든 $x$ 에서 $(\lambda-A_n)^{-1}x\to(\lambda-A)^{-1}x$ 다.
2. 모든 $x$ 와 $t_0\gt 0$ 에서 $\sup_{0\le t\le t_0}\Vert T_n(t)x-T(t)x\Vert\to 0$ 이다.

2 에서 1 은 분해작용소가 반군의 [Laplace 변환](laplace-transform.md)이라는 데서 나온다. 적분 구간을 $\lbrack 0,t_0\rbrack$ 와 나머지로 나누고 나머지는 $e^{-(\lambda-\omega)t_0}$ 로 누른다.

## 핵에서의 생성원 수렴

$D$ 가 $A$ 의 핵이고 $D\subset\mathcal D(A_n)$ 이며 모든 $y\in D$ 에서 $A_ny\to Ay$ 이면, 앞 절의 두 조건이 성립한다.[^1] 이것이 정리의 주된 형태다.

증명의 요지. $D$ 가 핵이므로 $(\lambda-A)D$ 는 $X$ 에서 조밀하다. $x=(\lambda-A)y$, $y\in D$ 이면 다음이 성립한다.

$$
(\lambda-A_n)^{-1}x-(\lambda-A)^{-1}x=(\lambda-A_n)^{-1}(A_ny-Ay)
$$

안정성에서 $\Vert(\lambda-A_n)^{-1}\Vert\le M/(\lambda-\omega)$ 이므로 오른쪽이 $0$ 으로 간다. 조밀한 집합에서의 수렴과 균등한 상한으로 모든 $x$ 에서의 수렴이 나온다.

직관 절의 차분 근사는 $D=C_c^\infty(\mathbb R)$, $M=1$, $\omega=0$ 인 경우다.

## Chernoff 곱 공식

$V(t)$, $t\ge 0$ 가 $V(0)=I$ 인 유계 작용소이고, 모든 $t$ 와 $k$ 에서 $\Vert V(t)^k\Vert\le Me^{\omega kt}$ 라 하자. $A$ 의 핵 $D$ 의 모든 $y$ 에서 $(V(t)y-y)/t\to Ay$ ($t\to 0^+$) 이면 다음이 성립한다. 이것을 **Chernoff 곱 공식(Chernoff product formula)** 이라 한다.[^2]

$$
\lim_{n\to\infty}V(t/n)^nx=T(t)x
$$

증명의 요지. $A_n=\frac{n}{t}(V(t/n)-I)$ 은 유계이고 $e^{tA_n}$ 이 안정하다. 핵에서의 생성원 수렴으로 $e^{tA_n}x\to T(t)x$ 이고, $e^{tA_n}x$ 와 $V(t/n)^nx$ 의 차가 $0$ 으로 간다.

두 특수한 경우가 있다.

- $V(t)=e^{tA}e^{tB}$ 이면 [Lie–Trotter 곱 공식](lie-trotter-formula.md) $e^{t(A+B)}x=\lim(e^{tA/n}e^{tB/n})^nx$ 다.
- $V(t)=(I-tA)^{-1}$ 이면 $T(t)x=\lim_{n\to\infty}(I-\tfrac tnA)^{-n}x$ 다. 시간 간격 $t/n$ 의 뒤쪽 Euler 방법이 수렴한다는 진술이고, 실수 $e^{ta}=\lim(1-ta/n)^{-n}$ 의 작용소판이다.

# 활용

- 차분 방법의 수렴. 진화 방정식의 차분 근사가 일관성(consistency), 곧 핵에서 생성원으로 수렴하는 성질과 안정성을 함께 가지면 해가 수렴한다. 선형 문제에서 거꾸로 수렴하는 근사는 안정하다는 것까지 합친 것이 [Lax 동치 정리](lax-equivalence-theorem.md)다.
- Markov 과정의 수렴. 직관 절의 $A_h$ 는 간격 $h$ 의 격자 위에서 시간당 $1/h^2$ 의 비율로 양옆에 뛰는 연속시간 무작위 행보의 생성원이다. 정리로 이 행보의 전이 반군이 분산 $2t$ 인 [Brown 운동](brownian-motion.md)의 전이 반군으로 수렴한다. 같은 방법으로 [Feller 과정](feller-processes.md)의 생성원 수렴에서 과정의 분포 수렴을 얻는다.[^3]
- 분할 방법. 두 생성원의 합 $A+B$ 가 만드는 반군을 각 반군을 번갈아 적용해 계산하는 수치 방법의 수렴이 Chernoff 곱 공식에서 나온다.

[^1]: K.-J. Engel, R. Nagel, *One-Parameter Semigroups for Linear Evolution Equations*, Graduate Texts in Mathematics 194, Springer (2000), §III.4. 안정성, 핵, Trotter–Kato 근사 정리.
[^2]: P. R. Chernoff, "Note on Product Formulas for Operator Semigroups", *Journal of Functional Analysis* 2 (1968), 238–242.
[^3]: H. F. Trotter, "Approximation of Semi-groups of Operators", *Pacific Journal of Mathematics* 8 (1958), 887–919.

# 연관 문서

## 선수지식

- [강연속 반군](c0-semigroups.md)

## 더 알아보기

- [Lax 동치 정리](lax-equivalence-theorem.md)

#functional_analysis #analysis #probability
