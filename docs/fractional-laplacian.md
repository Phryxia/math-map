# 분수 Laplace 연산자

# 개요

**분수 Laplace 연산자(fractional Laplacian)** 는 $0\lt s\lt 1$ 에 대해 [Laplace 연산자](laplace-operator.md)의 $s$ 제곱 $(-\Delta)^s$ 이다. 잉크 입자가 물속에서 짧게 흔들리며 퍼지면 농도는 [열방정식](heat-equation.md)을 따르지만, 가끔 아주 멀리 뛰는 입자가 섞여 있으면 농도의 꼬리가 열방정식의 해보다 훨씬 두꺼워진다. 분수 Laplace 연산자는 한 점의 값을 이웃 값만이 아니라 멀리 있는 모든 점의 값과 거리에 따른 가중치로 비교해 이런 확산을 적는다.

# 직관

[Fourier 변환](fourier-transform.md) $\hat f(\xi)=\int f(x)e^{-ix\xi}\thinspace dx$ 아래에서 $-d^2/dx^2$ 는 $\xi^2$ 를 곱하는 연산이다. 이 곱하는 값의 제곱근 $\vert\xi\vert$ 를 곱하는 연산을 $(-\Delta)^{1/2}$ 로 둔다.

열방정식 $u_t=u_{xx}$ 의 해는 $\hat f$ 에 $e^{-t\xi^2}$ 를 곱한 것이고, 이것은 [정규분포](normal-distribution.md) 밀도와의 합성곱이다. $u_t=-(-\Delta)^{1/2}u$ 의 해는 $\hat f$ 에 $e^{-t\vert\xi\vert}$ 를 곱한 것이다. $e^{-t\vert\xi\vert}$ 는 척도 $t$ 인 [Cauchy 분포](cauchy-distribution.md)의 특성함수이므로, 해는 다음 Cauchy 밀도와의 합성곱이다.

$$
u(x,t)=\int\frac{t}{\pi((x-y)^2+t^2)}f(y)\thinspace dy
$$

$f$ 가 한 점에 몰린 처음 농도이면 열방정식의 해는 $e^{-x^2/(4t)}$ 처럼 줄지만, 이 해는 $t/(\pi x^2)$ 처럼 거듭제곱으로만 준다. 멀리 뛰는 입자의 확산이 이 꼴이다.

$f(x)=1/(1+x^2)$ 이면 $\hat f(\xi)=\pi e^{-\vert\xi\vert}$ 이고, $\vert\xi\vert\pi e^{-\vert\xi\vert}$ 를 되돌리면 다음이 나온다.

$$
(-\Delta)^{1/2}\frac1{1+x^2}=\frac{1-x^2}{(1+x^2)^2}
$$

꼭대기 $x=0$ 에서 값은 $1$ 로 양수이고, $\vert x\vert\gt 1$ 에서는 음수다. 큰 값을 가진 곳에서 줄고 작은 값을 가진 곳에서 느는 확산의 방향이다.

# 정의

## Fourier 곱으로 쓴 정의

$0\lt s\lt 1$ 이고 $f$ 가 $\mathbb R^n$ 위의 Schwartz 함수이면 $(-\Delta)^sf$ 는 Fourier 변환이 다음과 같은 함수다.

$$
\widehat{(-\Delta)^sf}(\xi)=\vert\xi\vert^{2s}\hat f(\xi)
$$

직관 절의 $(-\Delta)^{1/2}$ 는 $n=1$, $s=1/2$ 인 경우다.

## 특이 적분으로 쓴 정의

같은 연산은 다음 주치 적분(principal value integral)으로도 쓰인다. 두 정의는 Schwartz 함수에서 같다.[^1]

$$
(-\Delta)^sf(x)=C_{n,s}\thinspace\mathrm{P.V.}\int_{\mathbb R^n}\frac{f(x)-f(y)}{\vert x-y\vert^{n+2s}}\thinspace dy
$$

상수는 $C_{n,s}=4^s\Gamma(n/2+s)/(\pi^{n/2}\vert\Gamma(-s)\vert)$ 다. $n=1$, $s=1/2$ 이면 $C_{1,1/2}=1/\pi$ 이고, 가중치 $1/(\pi(x-y)^2)$ 는 직관 절의 Cauchy 밀도의 꼬리와 같은 꼴이다.

이 식은 $f(x)$ 를 모든 점의 $f(y)$ 와 비교하고, 거리가 멀수록 가중치를 $\vert x-y\vert^{-n-2s}$ 로 줄인다. Laplace 연산자는 $x$ 근처의 값만 쓰는 국소 연산이고, 분수 Laplace 연산자는 모든 점의 값을 쓰는 **비국소 연산(nonlocal operator)** 이다.

# 성질

## 비국소성

$f\ge 0$ 이고 $f$ 가 컴팩트 지지를 가지며 $x$ 가 지지 밖에 있으면 다음이 성립한다.

$$
(-\Delta)^sf(x)=-C_{n,s}\int\frac{f(y)}{\vert x-y\vert^{n+2s}}\thinspace dy\lt 0
$$

Laplace 연산자는 지지 밖에서 $0$ 이다. 직관 절의 $(1-x^2)/(1+x^2)^2$ 가 $\vert x\vert\gt 1$ 에서 음수인 것도 같은 현상이다.

## 최댓값 원리

$f$ 가 $x_0$ 에서 최댓값을 가지면 특이 적분의 피적분함수 $f(x_0)-f(y)$ 가 모두 $0$ 이상이므로 $(-\Delta)^sf(x_0)\ge 0$ 이다. $f$ 가 상수가 아니면 피적분함수가 양수인 점이 양의 측도만큼 있어 부등식이 엄격하다.

## 척도

$f_\lambda(x)=f(\lambda x)$ 이면 $(-\Delta)^sf_\lambda(x)=\lambda^{2s}((-\Delta)^sf)(\lambda x)$ 다. 미분 차수가 $2s$ 인 연산처럼 행동한다.

$s\to 1^-$ 이면 $(-\Delta)^sf\to-\Delta f$ 이고, $s\to 0^+$ 이면 $(-\Delta)^sf\to f$ 다. 두 극한은 Fourier 곱 $\vert\xi\vert^{2s}$ 에서 바로 보인다.

## 안정 과정의 생성원

$0\lt\alpha\le 2$ 이면 $-(-\Delta)^{\alpha/2}$ 는 Fourier 곱 $e^{-t\vert\xi\vert^\alpha}$ 의 반군을 생성한다. $e^{-t\vert\xi\vert^\alpha}$ 는 대칭 [안정 분포](stable-distributions.md)의 특성함수이므로, 이 반군은 $X_1$ 이 대칭 $\alpha$ 안정인 [Lévy 과정](levy-processes.md)의 전이 반군이다.

특이 적분의 가중치 $C_{n,s}\vert y\vert^{-n-2s}$ 가 이 과정의 Lévy 측도다. $\alpha=2s$ 이고, 크기가 $r$ 이상인 도약의 빈도가 $r^{-\alpha}$ 에 비례한다. $\alpha=1$ 이 직관 절의 Cauchy 과정이다.

## 조화 확장

$f$ 를 경계값으로 갖는 위 반공간 $\mathbb R^{n+1}\_+$ 의 유계 [조화함수](harmonic-functions.md) $u(x,t)$ 를 잡으면 다음이 성립한다.

$$
(-\Delta)^{1/2}f(x)=-\partial_tu(x,0)
$$

직관 절의 $f(x)=1/(1+x^2)$ 은 다음 조화함수로 확장되고,

$$
u(x,t)=\frac{1+t}{x^2+(1+t)^2}
$$

여기서 $-\partial_tu(x,0)$ 을 계산하면 $(1-x^2)/(1+x^2)^2$ 로 앞의 계산과 같다. 일반 $s$ 에서는 $\mathrm{div}(t^{1-2s}\nabla U)=0$ 의 해 $U$ 의 경계에서의 가중 법선 미분이 $(-\Delta)^sf$ 의 상수배이고, 이것을 **Caffarelli–Silvestre 확장(Caffarelli–Silvestre extension)** 이라 한다.[^2]

# 활용

- 비정상 확산. 도약 거리의 분포가 거듭제곱 꼬리를 갖는 입자 운동(Lévy 비행(Lévy flight))의 농도는 $u_t=-(-\Delta)^{\alpha/2}u$ 를 따른다. 해의 꼬리가 $\vert x\vert^{-n-\alpha}$ 로 준다.
- 유체역학. 표면 준지형 방정식(surface quasi-geostrophic equation)은 온도 $\theta$ 를 속도장 $\nabla^\perp(-\Delta)^{-1/2}\theta$ 로 수송하는 방정식이고, 소산 항으로 $(-\Delta)^s\theta$ 를 넣는다.
- 장애물 문제. 도약이 있는 Lévy 과정으로 주가를 모형화하면 미국식 옵션의 가격은 분수 Laplace 연산자의 장애물 문제로 정해진다. $s=1/2$ 인 경우는 조화 확장으로 경계의 얇은 장애물 문제인 [Signorini 문제](signorini-problem.md)와 같아진다.[^2]

[^1]: M. Kwaśnicki, "Ten Equivalent Definitions of the Fractional Laplace Operator", *Fractional Calculus and Applied Analysis* 20 (2017), 7–51.
[^2]: L. Caffarelli, L. Silvestre, "An Extension Problem Related to the Fractional Laplacian", *Communications in Partial Differential Equations* 32 (2007), 1245–1260.

# 연관 문서

## 선수지식

- [Laplace 연산자](laplace-operator.md)
- [안정 분포](stable-distributions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #probability #functional_analysis
