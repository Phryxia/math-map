# 해석 반군

# 개요

**해석 반군(analytic semigroup)** 은 시간 $t$ 를 복소수로 넓혀도 해석적으로 이어지는 [강연속 반군](c0-semigroups.md)이다. 꺾인 점이 있는 막대 온도를 처음 상태로 두고 [열방정식](heat-equation.md)을 풀면 아주 짧은 시간 뒤에 온도가 매끄러워지지만, 같은 처음 상태를 수송 방정식 $u_t=u_x$ 로 밀면 꺾인 점이 영원히 남는다. 해석 반군은 이 차이를 생성원 $A$ 의 분해작용소가 복소평면의 부채꼴에서 얼마나 작은지로 판정하고, 매끄럽게 만드는 반군에서는 $\Vert AT(t)\Vert\le C/t$ 같은 부등식으로 해의 미분을 계산한다.

# 직관

$L^2(\mathbb R)$ 위의 두 반군을 [Fourier 변환](fourier-transform.md)으로 비교한다. 미분 $d/dx$ 는 Fourier 변환 뒤에 $i\xi$ 를 곱하는 것이 된다.

이동 반군 $(T(t)f)(x)=f(x+t)$ 는 $\hat f(\xi)$ 에 $e^{it\xi}$ 를 곱하고, 생성원 $A=d/dx$ 는 $i\xi$ 를 곱한다. $AT(t)$ 는 $i\xi e^{it\xi}$ 를 곱하는데 그 크기 $\vert\xi\vert$ 는 유계가 아니다. 그래서 어떤 $t\gt 0$ 에서도 $T(t)f$ 가 미분가능하다는 보장이 없고, 꺾인 점이 그대로 밀려 간다.

열 반군은 $u_t=u_{xx}$ 의 해를 주고, $\hat f(\xi)$ 에 $e^{-t\xi^2}$ 를 곱한다. 생성원 $A=d^2/dx^2$ 는 $-\xi^2$ 를 곱하고, $AT(t)$ 는 $-\xi^2e^{-t\xi^2}$ 를 곱한다. $s=\xi^2$ 로 두면 $se^{-ts}$ 의 최댓값은 $s=1/t$ 에서의 $1/(et)$ 이므로 다음이 나온다.

$$
\Vert AT(t)\Vert=\frac1{et}
$$

$t\gt 0$ 이면 $T(t)f$ 가 언제나 생성원의 정의역에 들고, 미분의 크기가 $1/t$ 에 비례한다.

두 반군에서 $t$ 를 복소수 $z$ 로 바꾸면 차이가 다시 보인다. $\vert e^{-z\xi^2}\vert=e^{-(\mathrm{Re}\thinspace z)\xi^2}\le 1$ 이므로 열 반군은 $\mathrm{Re}\thinspace z\gt 0$ 인 반평면 전체에서 정의된다. $\vert e^{iz\xi}\vert=e^{-(\mathrm{Im}\thinspace z)\xi}$ 는 $\mathrm{Im}\thinspace z\ne 0$ 이면 어떤 $\xi$ 에서든 유계가 아니므로 이동 반군은 실수축 밖으로 나갈 수 없다.

# 정의

## 해석 반군

$0\lt\theta\le\pi/2$ 에 대해 부채꼴을 $\Sigma_\theta=\lbrace z\in\mathbb C\setminus\lbrace 0\rbrace:\vert\arg z\vert\lt\theta\rbrace$ 로 쓴다. [Banach 공간](banach-spaces.md) $X$ 위의 강연속 반군 $T$ 가 다음을 만족하는 $T(z)$, $z\in\Sigma_\theta\cup\lbrace 0\rbrace$ 로 확장되면 각 $\theta$ 의 **해석 반군** 이라 한다.[^1]

1. $z\mapsto T(z)$ 는 $\Sigma_\theta$ 에서 작용소 노름에 대해 [정칙 함수](holomorphic-functions.md)다.
2. $z_1,z_2\in\Sigma_\theta$ 이면 $T(z_1+z_2)=T(z_1)T(z_2)$ 다.
3. $0\lt\theta'\lt\theta$ 인 각 $\theta'$ 에서 $z\in\Sigma_{\theta'}$ 이 $0$ 으로 가면 모든 $x$ 에서 $T(z)x\to x$ 다.

$T(z)$ 가 각 $\Sigma_{\theta'}$ 에서 유계이면 **유계 해석 반군(bounded analytic semigroup)** 이라 한다. 직관 절의 열 반군은 각 $\pi/2$ 의 유계 해석 반군이고, 이동 반군은 해석 반군이 아니다.

## 부채꼴 작용소

닫힌 작용소 $A$ 와 $0\lt\delta\le\pi/2$, $M\ge 1$ 이 있어 부채꼴 $\Sigma_{\pi/2+\delta}$ 가 $A$ 의 분해집합에 들고 그 위에서 다음이 성립하면 $A$ 를 **부채꼴 작용소(sectorial operator)** 라 한다.

$$
\Vert(\lambda-A)^{-1}\Vert\le\frac{M}{\vert\lambda\vert}\qquad(\lambda\in\Sigma_{\pi/2+\delta})
$$

열 반군의 생성원 $A=d^2/dx^2$ 은 $-\xi^2$ 을 곱하므로 스펙트럼이 $(-\infty,0\rbrack$ 이고, $(\lambda-A)^{-1}$ 은 $1/(\lambda+\xi^2)$ 을 곱한다. $\vert\arg\lambda\vert\lt\pi-\varepsilon$ 이면 $\vert\lambda+\xi^2\vert\ge\vert\lambda\vert\sin\varepsilon$ 이므로 $M=1/\sin\varepsilon$ 으로 부채꼴 작용소다. 이동 반군의 생성원은 스펙트럼이 허수축 전체라 어떤 $\delta\gt 0$ 에서도 부채꼴 작용소가 아니다.

# 성질

## 해석 반군의 판정

$T$ 가 생성원 $A$ 를 갖는 유계 강연속 반군이면 다음 셋은 동치다.[^1]

1. $T$ 는 어떤 각의 유계 해석 반군으로 확장된다.
2. $A$ 는 부채꼴 작용소다.
3. 모든 $t\gt 0$ 에서 $T(t)X\subset\mathcal D(A)$ 이고 $\sup_{t\gt 0}t\Vert AT(t)\Vert\lt\infty$ 다.

직관 절의 $\Vert AT(t)\Vert=1/(et)$ 가 셋째 조건이다.

2 에서 1 로 가는 증명의 요지. $\Gamma$ 를 분해집합 안에서 음의 실수축을 둘러싸는 경로로 잡고 다음을 정의한다.

$$
T(z)=\frac1{2\pi i}\int_\Gamma e^{z\lambda}(\lambda-A)^{-1}\thinspace d\lambda
$$

$z$ 가 부채꼴 $\Sigma_\delta$ 에 있으면 $\Gamma$ 의 두 끝에서 $e^{z\lambda}$ 가 지수적으로 줄어 적분이 수렴하고, 분해작용소의 상한 $M/\vert\lambda\vert$ 로 $T(z)$ 의 유계성이 나온다. 행렬의 $e^{zA}$ 도 같은 경로 적분으로 쓰이고, 경로 안의 고윳값마다 [유수 정리](residue-theorem.md)를 쓰면 지수함수가 나온다.

## 매끄럽게 만드는 성질

$T$ 가 유계 해석 반군이면 $t\gt 0$ 에서 $T(t)X\subset\mathcal D(A^n)$ 이 모든 $n$ 에서 성립하고, 상수 $C$ 가 있어 다음이 성립한다.[^2]

$$
\Vert A^nT(t)\Vert\le\left(\frac{Cn}{t}\right)^n
$$

$A^nT(t)=(AT(t/n))^n$ 에 판정 정리의 셋째 조건을 쓴다. $t\mapsto T(t)$ 는 $(0,\infty)$ 에서 작용소 노름으로 무한히 미분가능하다.

## 자기수반 작용소

[Hilbert 공간](hilbert-spaces.md) 위의 자기수반 작용소 $A$ 가 모든 $x$ 에서 $\langle Ax,x\rangle\le 0$ 이면 $e^{tA}$ 는 각 $\pi/2$ 의 유계 해석 반군이다.

[스펙트럼 정리](spectral-theorem.md)로 $A$ 를 $(-\infty,0\rbrack$ 위의 곱셈으로 쓰면 $T(z)$ 는 $e^{z\mu}$ 를 곱하는 작용소이고, $\mathrm{Re}\thinspace z\gt 0$, $\mu\le 0$ 에서 $\vert e^{z\mu}\vert\le 1$ 이다. 직관 절의 열 반군이 이 경우다.

## 스펙트럼 사상 정리

해석 반군에서는 $t\gt 0$ 마다 다음이 성립한다.[^1]

$$
\sigma(T(t))\setminus\lbrace 0\rbrace=e^{t\sigma(A)}
$$

그래서 $\Vert T(t)\Vert$ 의 지수 증가율은 $\sup\lbrace\mathrm{Re}\thinspace\lambda:\lambda\in\sigma(A)\rbrace$ 와 같다. 스펙트럼이 모두 왼쪽 반평면 $\mathrm{Re}\thinspace\lambda\le -\varepsilon$ 에 있으면 $\Vert T(t)\Vert$ 가 $e^{-\varepsilon t}$ 의 상수배로 줄어든다. 일반 강연속 반군에서는 이 등식이 성립하지 않는 예가 있다.

# 활용

- 포물형 방정식. 계수가 매끄럽고 균등 타원형인 이계 미분작용소는 $L^p$ 공간과 연속함수 공간에서 해석 반군을 생성한다.[^2] 열방정식의 해가 $t\gt 0$ 에서 매끄러워지는 것이 매끄럽게 만드는 성질 절의 부등식이다.
- 비선형 포물형 방정식. $u'=Au+F(u)$ 의 해를 다음 상수 변화 공식의 고정점으로 구한다.

$$
u(t)=T(t)u_0+\int_0^tT(t-s)F(u(s))\thinspace ds
$$

$\Vert AT(t)\Vert\le C/t$ 가 있으면 $F$ 가 $u$ 의 미분을 포함해도 적분이 수렴하게 만들 수 있다. 이때 부채꼴 작용소의 분수 거듭제곱 $(-A)^\alpha$ 를 쓴다.

- 선형화 안정성. 반응확산 방정식의 평형점에서 선형화한 작용소가 해석 반군을 생성하면, 스펙트럼 사상 정리로 스펙트럼이 왼쪽 반평면에 있는지만 보고 평형점의 안정성을 판정한다.

[^1]: K.-J. Engel, R. Nagel, *One-Parameter Semigroups for Linear Evolution Equations*, Graduate Texts in Mathematics 194, Springer (2000), §II.4.a 와 §IV.3. 해석 반군의 정의와 판정 정리, 스펙트럼 사상 정리.
[^2]: A. Pazy, *Semigroups of Linear Operators and Applications to Partial Differential Equations*, Springer (1983), §2.5 와 §7.2. 해석 반군의 미분 상한과 타원형 작용소가 생성하는 반군.

# 연관 문서

## 선수지식

- [강연속 반군](c0-semigroups.md)
- [열방정식](heat-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis
