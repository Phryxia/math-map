# Helmholtz 분해

# 개요

**Helmholtz 분해(Helmholtz decomposition)** 는 공간의 벡터장을 회전이 없는 부분과 발산이 없는 부분의 합으로 나누는 정리다. 욕조 배수구 근처의 물은 한 점으로 빨려 들어가면서 동시에 그 점 둘레를 돈다. 빨려 드는 흐름은 퍼텐셜의 기울기로 적히고 도는 흐름은 회전으로 적히지만, 둘이 섞인 흐름은 어느 쪽으로도 적히지 않는다. 이 정리는 흐름의 발산과 회전만으로 두 성분을 각각 [Poisson 방정식](poisson-equation.md)의 해로 구한다.

# 직관

$\mathbb R^3$ 의 흐름 $F=(x-y,\thinspace x+y,\thinspace 0)$ 을 본다. 발산과 회전을 계산하면 다음이 나온다.

$$
\mathrm{div}\thinspace F=1+1=2,\qquad \mathrm{curl}\thinspace F=(0,\thinspace 0,\thinspace 1-(-1))=(0,0,2)
$$

$F=\nabla\varphi$ 인 함수 $\varphi$ 가 있으면 $\mathrm{curl}\thinspace\nabla\varphi=0$ 이어야 하고, $F=\mathrm{curl}\thinspace A$ 인 벡터장 $A$ 가 있으면 $\mathrm{div}\thinspace\mathrm{curl}\thinspace A=0$ 이어야 한다. 이 $F$ 는 둘 다 $0$ 이 아니므로 어느 꼴로도 적히지 않는다.

발산과 회전을 한 성분씩 맡기면 된다. $F$ 를 바깥으로 퍼지는 흐름 $(x,y,0)$ 과 $z$ 축 둘레를 도는 흐름 $(-y,x,0)$ 의 합으로 쓴다. 앞의 것은 발산이 $2$, 회전이 $0$ 이고, 뒤의 것은 발산이 $0$, 회전이 $(0,0,2)$ 다.

회전이 $0$ 인 앞의 흐름은 [Poincaré 보조정리](poincare-lemma.md)로 기울기다. 실제로 $(x,y,0)=\nabla\big(\tfrac12(x^2+y^2)\big)$ 다. 발산이 $0$ 인 뒤의 흐름은 같은 정리로 회전이다. 실제로 $A=(0,\thinspace 0,\thinspace -\tfrac12(x^2+y^2))$ 이면 $\mathrm{curl}\thinspace A=(\partial_yA_3,\thinspace -\partial_xA_3,\thinspace 0)=(-y,x,0)$ 다.

# 정의

## 기울기, 회전, 발산

$\mathbb R^3$ 의 매끄러운 함수 $\varphi$ 와 [벡터장](vector-fields.md) $F=(F_1,F_2,F_3)$ 에 대해 기울기(gradient), 회전(curl), 발산(divergence)은 다음이다.

$$
\begin{aligned}
\nabla\varphi&=(\partial_1\varphi,\thinspace\partial_2\varphi,\thinspace\partial_3\varphi)\cr
\mathrm{curl}\thinspace F&=(\partial_2F_3-\partial_3F_2,\thinspace\partial_3F_1-\partial_1F_3,\thinspace\partial_1F_2-\partial_2F_1)\cr
\mathrm{div}\thinspace F&=\partial_1F_1+\partial_2F_2+\partial_3F_3
\end{aligned}
$$

$\mathrm{curl}\thinspace F=0$ 인 벡터장을 **회전 없는 장(irrotational field)**, $\mathrm{div}\thinspace F=0$ 인 벡터장을 **발산 없는 장(solenoidal field)** 이라 한다. 직관 절의 $(x,y,0)$ 은 회전 없는 장이고 $(-y,x,0)$ 은 발산 없는 장이다.

## Helmholtz 분해

벡터장 $F$ 의 **Helmholtz 분해** 는 다음 꼴의 표현이다. $\nabla\varphi$ 를 기울기 성분, $\mathrm{curl}\thinspace A$ 를 회전 성분이라 한다.

$$
F=\nabla\varphi+\mathrm{curl}\thinspace A
$$

직관 절의 $F$ 에서는 $\varphi=\tfrac12(x^2+y^2)$, $A=(0,\thinspace 0,\thinspace -\tfrac12(x^2+y^2))$ 이다. 기울기 성분은 회전이 없고 회전 성분은 발산이 없으므로, $\mathrm{div}\thinspace F$ 는 기울기 성분만, $\mathrm{curl}\thinspace F$ 는 회전 성분만 정한다.

# 성질

## 존재와 표현 공식

$F$ 가 $\mathbb R^3$ 의 매끄러운 벡터장이고 받침이 콤팩트하면 Helmholtz 분해가 존재하고, $E(x)=1/(4\pi\vert x\vert)$ 로 두면 다음이 그 분해를 준다.

$$
\varphi(x)=-\int_{\mathbb R^3}E(x-y)\thinspace\mathrm{div}\thinspace F(y)\thinspace dy,\qquad A(x)=\int_{\mathbb R^3}E(x-y)\thinspace\mathrm{curl}\thinspace F(y)\thinspace dy
$$

$E$ 는 $-\Delta E=\delta_0$ 을 만족하는 [Green 함수](greens-function.md)의 기본해다. 그러므로 $\Delta\varphi=\mathrm{div}\thinspace F$ 이고 $-\Delta A=\mathrm{curl}\thinspace F$ 다. 두 퍼텐셜은 각각 원천이 $\mathrm{div}\thinspace F$ 와 $\mathrm{curl}\thinspace F$ 인 Poisson 방정식의 해다.

증명의 요지. 성분마다 확인하는 항등식 $\mathrm{curl}\thinspace\mathrm{curl}\thinspace A=\nabla(\mathrm{div}\thinspace A)-\Delta A$ 를 쓴다. [합성곱](convolution.md)은 미분과 교환하므로 $\mathrm{div}\thinspace A=E\ast\mathrm{div}\thinspace\mathrm{curl}\thinspace F=0$ 이고, $\mathrm{curl}\thinspace\mathrm{curl}\thinspace A=\mathrm{curl}\thinspace F$ 다. 그러면 $G=F-\nabla\varphi-\mathrm{curl}\thinspace A$ 는 발산과 회전이 모두 $0$ 이다. 같은 항등식으로 $\Delta G=0$ 이므로 $G$ 의 각 성분은 무한원에서 $0$ 으로 가는 [조화함수](harmonic-functions.md)이고, [Liouville 정리](liouville-theorem.md)로 $G=0$ 이다.

## 유일성

$F$ 가 무한원에서 $0$ 으로 갈 때 두 성분은 무한원에서 $0$ 으로 가는 것 가운데 유일하다. 두 분해의 차 $\nabla\varphi-\nabla\varphi'=\mathrm{curl}\thinspace(A'-A)$ 는 발산과 회전이 모두 $0$ 이므로 존재 증명의 마지막 단계와 같이 $0$ 이다.

감소 조건이 없으면 유일하지 않다. $\nabla x=(1,0,0)$ 은 기울기이면서 $\mathrm{curl}\thinspace(0,0,y)$ 이므로 어느 성분에도 넣을 수 있다. 직관 절의 $F$ 는 무한원에서 커지므로 그 분해도 하나가 아니다.

## Fourier 변환으로 본 분해

[Fourier 변환](fourier-transform.md)을 하면 $\nabla$ 는 $i\xi$ 를 곱하는 것이 된다. 기울기 성분의 변환은 $\xi$ 와 평행하고 회전 성분의 변환은 $\xi$ 와 수직이다. 그러므로 진동수 $\xi\ne 0$ 마다 $\hat F(\xi)$ 를 $\xi$ 방향과 그 수직 평면으로 정사영한 것이 두 성분이다.

$$
\widehat{\nabla\varphi}(\xi)=\frac{\xi\cdot\hat F(\xi)}{\vert\xi\vert^2}\thinspace\xi,\qquad\widehat{\mathrm{curl}\thinspace A}(\xi)=\hat F(\xi)-\frac{\xi\cdot\hat F(\xi)}{\vert\xi\vert^2}\thinspace\xi
$$

Plancherel 정리(Plancherel theorem)로 두 성분은 $L^2(\mathbb R^3)$ 에서 직교한다. 제곱적분 가능한 벡터장의 공간은 기울기장의 닫힌 부분공간과 발산 없는 장의 닫힌 부분공간의 직교합이다.

## 경계가 있는 영역

유계 영역 $\Omega$ 에서는 경계 조건을 붙여 분해한다. $L^2(\Omega)$ 의 벡터장은 기울기장 $\nabla\varphi$ 와, 발산이 $0$ 이고 경계에서 법선 성분이 $0$ 인 장의 직교합이다. 기울기 성분의 $\varphi$ 는 Neumann 경계 조건(Neumann boundary condition) $\partial\varphi/\partial n=F\cdot n$ 을 붙인 Poisson 방정식 $\Delta\varphi=\mathrm{div}\thinspace F$ 의 해다.

영역에 구멍이 있으면 발산과 회전이 모두 $0$ 이고 경계 조건을 만족하는 조화 성분이 따로 생기고, 그 차원은 영역의 [de Rham 코호몰로지](de-rham-cohomology.md)가 정한다. 이것을 미분형식으로 일반화한 것이 [Hodge 이론](hodge-theory.md)의 Hodge 분해다.

# 활용

- 비압축 유체. [Navier–Stokes 방정식](navier-stokes-equations.md)의 속도는 발산이 $0$ 이어야 하므로, 시간 간격마다 계산한 속도를 Helmholtz 분해의 회전 성분으로 정사영하고 기울기 성분을 압력의 기울기로 둔다. 이 정사영을 Leray 정사영(Leray projection)이라 하고, 수치 유체 계산의 [Chorin 투영법](chorin-projection-method.md)이 이것을 쓴다.
- 전자기학. 전기장은 전하 밀도에서 나오는 기울기 성분과 자기장의 시간 변화에서 나오는 회전 성분의 합이다. 자기장은 발산이 $0$ 이므로 회전 성분만 있고, 그 퍼텐셜이 벡터 퍼텐셜이다.
- 탄성파. 균질 탄성체의 변위장을 분해하면 기울기 성분은 종파(longitudinal wave), 회전 성분은 횡파(transverse wave)의 방정식을 따로 만족하고 두 파는 다른 속도로 전파된다.
- 벡터장 자료의 해석. 측정한 바람장이나 해류의 발산 성분과 소용돌이 성분을 나누는 데 쓴다.

# 연관 문서

## 선수지식

- [Poincaré 보조정리](poincare-lemma.md)
- [Green 함수](greens-function.md)

## 더 알아보기

- [Maxwell 방정식](maxwell-equations.md)
- [Chorin 투영법](chorin-projection-method.md)

#analysis #differential_geometry #functional_analysis
