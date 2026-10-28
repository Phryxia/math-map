# Laplace 연산자

# 개요

**Laplace 연산자(Laplace operator, Laplacian)** 는 함수의 값이 그 둘레의 평균과 얼마나 다른지를 재는 연산자다. 판 위의 온도 분포 $f(x,y)=x^2+y^2$ 에서 원점의 온도 $0$ 은 원점을 둘러싼 반지름 $r$ 인 원 위의 온도 $r^2$ 보다 낮고, 이 차이를 $r^2/4$ 로 나눈 값 $\Delta f=4$ 가 원점에서의 Laplace 연산자 값이다. Laplace 연산자는 이계 편미분의 합으로 계산되고, 열이 퍼지는 속도나 막의 진동처럼 둘레와의 차이로 변화가 정해지는 현상을 미분방정식으로 적는다.

# 직관

Laplace 연산자는 다변수 실함수 $f$ 에 이계 편미분의 합

$$
\Delta f=\sum_{i=1}^n\frac{\partial^2 f}{\partial x_i^2}
$$

을 대응시키는 연산자다. [Hessian 행렬](hessian.md)의 대각합이고, 기울기의 발산이다. $\Delta f(a)$ 는 $a$ 를 중심으로 하는 작은 구면 위에서 $f$ 의 평균이 $f(a)$ 보다 얼마나 큰지를 재고, 좌표축을 회전해도 값이 바뀌지 않는다.

막대 위의 온도 $u(x)$ 를 생각한다. 점 $x$ 의 온도가 양옆 점 $x-h$, $x+h$ 의 평균보다 낮으면 열이 그 점으로 흘러들고, 높으면 흘러나간다. Taylor 전개로

$$
\frac{u(x+h)+u(x-h)}2-u(x)=\frac{h^2}2u''(x)+o(h^2)
$$

이므로 일변수에서는 이계 도함수 $u''$ 가 이 차이를 잰다.

평면에서는 이웃이 두 점이 아니라 원 하나다. $f(x,y)=x^2+3y^2$ 의 원점에서 반지름 $r$ 인 원 위의 평균을 구한다. 원 위의 점을 $(r\cos\theta,r\sin\theta)$ 로 두면 $f=r^2\cos^2\theta+3r^2\sin^2\theta$ 이고, $\cos^2\theta$ 와 $\sin^2\theta$ 의 평균이 각각 $\tfrac12$ 이므로 평균은 $2r^2$ 다. $f(0,0)=0$ 이므로 원 위의 평균이 중심값보다 $2r^2$ 크다.

원점의 Hessian 은 $\begin{pmatrix}2&0\cr 0&6\end{pmatrix}$ 이다. 원 위에서 $x$ 방향과 $y$ 방향이 같은 비중으로 섞이므로 평균에는 두 대각성분의 합 $8$ 만 남고, 실제로 $2r^2=\tfrac{r^2}4\cdot 8$ 이다. 이 대각성분의 합 $\partial_x^2f+\partial_y^2f$ 가 Laplace 연산자다.

# 정의

## Laplace 연산자

열린집합 $U\subseteq\mathbb R^n$ 에서 이계 편미분이 모두 존재하는 함수 $f:U\to\mathbb R$ 에 함수

$$
\Delta f=\sum_{i=1}^n\partial_i^2f=\mathrm{tr}\thinspace H_f
$$

를 대응시키는 $\Delta$ 를 **Laplace 연산자** 라 한다. $H_f$ 는 $f$ 의 Hessian 행렬이다. $\nabla^2$ 로도 쓴다.

## 발산 꼴

벡터장 $F=(F_1,\dots,F_n)$ 의 **발산(divergence)** 은 $\mathrm{div}\thinspace F=\sum_i\partial_iF_i$ 다. 기울기 $\nabla f=(\partial_1f,\dots,\partial_nf)$ 의 발산이 $\Delta f$ 이므로 $\Delta f=\mathrm{div}\thinspace\nabla f$ 다.

## 고유함수

$\Delta\varphi=-\lambda\varphi$ 를 만족하는 $0$ 아닌 함수 $\varphi$ 를 고윳값 $\lambda$ 의 **고유함수(eigenfunction)** 라 한다. 유계 영역 $\Omega$ 에서는 경계조건을 함께 준다. 경계에서 $\varphi=0$ 인 조건이 **Dirichlet 경계조건(Dirichlet boundary condition)** 이다.

# 성질

## 평균값 공식

$f$ 가 $a$ 근방에서 $C^2$ 이고 $M_f(a,r)$ 가 반지름 $r$ 인 구면 $\lVert h\rVert=r$ 위에서 $f(a+h)$ 의 평균이면

$$
M_f(a,r)-f(a)=\frac{r^2}{2n}\Delta f(a)+o(r^2)
$$

이다. 증명의 요지. 이차 Taylor 전개 $f(a+h)=f(a)+\nabla f(a)^\top h+\tfrac12h^\top H_f(a)h+o(\lVert h\rVert^2)$ 를 구면 위에서 평균한다. $h$ 와 $-h$ 가 같은 비중이므로 일차항의 평균은 $0$ 이다. 대칭성으로 $h_ih_j$ 의 평균은 $i\ne j$ 이면 $0$ 이고, $i=j$ 이면 $\sum_ih_i^2=r^2$ 를 $n$ 개 좌표가 똑같이 나누어 $r^2/n$ 이다. 그래서 이차항의 평균은 $\frac{r^2}{2n}\sum_i\partial_i^2f(a)$ 다.

## 회전 불변성

$Q$ 가 직교행렬이고 $g(x)=f(Qx)$ 이면 $\Delta g(x)=(\Delta f)(Qx)$ 다. 연쇄법칙으로 $H_g(x)=Q^\top H_f(Qx)Q$ 이고, 대각합은 닮음변환에서 바뀌지 않는다. [스펙트럼 정리](spectral-theorem.md)로 $H_f$ 를 대각화하면 $\Delta f$ 는 Hessian 의 고윳값의 합이므로 좌표를 고르는 방법과 무관하다. 상수계수 선형 미분연산자 가운데 모든 회전과 교환하는 것은 $\Delta$ 의 다항식뿐이다.

## 극좌표

$f$ 가 원점으로부터의 거리 $r=\lVert x\rVert$ 만의 함수 $f(x)=g(r)$ 이면 $x\ne 0$ 에서

$$
\Delta f=g''(r)+\frac{n-1}rg'(r)
$$

이다. $\partial_if=g'(r)x_i/r$ 를 $x_i$ 로 한 번 더 미분해 $i$ 에 대해 더하면 나온다. 우변이 $0$ 인 해는 $n=2$ 에서 $\log r$, $n\ge 3$ 에서 $r^{2-n}$ 이고, [Green 함수](greens-function.md)의 기본해가 이 함수의 상수배다. 평면 극좌표 $(r,\theta)$ 에서는 일반적으로

$$
\Delta f=\partial_r^2f+\frac1r\partial_rf+\frac1{r^2}\partial_\theta^2f
$$

다.

## 부분적분과 부호

$u,v$ 가 $C^2$ 이고 $v$ 가 유계 집합 밖에서 $0$ 이면

$$
\int_{\mathbb R^n}v\thinspace\Delta u\thinspace dx=-\int_{\mathbb R^n}\nabla u\cdot\nabla v\thinspace dx
$$

다. 각 좌표 $x_i$ 에 대해 일변수 부분적분을 하면 경계항이 $v=0$ 으로 사라진다. 유계 영역에서 경계에서 $0$ 인 $v$ 에도 같은 등식이 발산 정리(divergence theorem)로 성립한다. Dirichlet 경계조건의 고유함수 $\varphi$ 에 $u=v=\varphi$ 를 넣으면 $\lambda\int\varphi^2=\int\lVert\nabla\varphi\rVert^2$ 이고, $\nabla\varphi=0$ 이면 $\varphi$ 가 상수 $0$ 이므로 고윳값은 모두 양수다.

## Weyl 법칙

$[0,\pi]^2$ 에서 Dirichlet 경계조건의 고유함수는 $\sin(mx)\sin(ly)$ $(m,l\ge 1)$ 이고 고윳값은 $m^2+l^2$ 다. 고윳값이 $\lambda$ 이하인 것의 개수 $N(\lambda)$ 는 반지름 $\sqrt\lambda$ 인 사분원 안의 격자점 개수이므로 $N(\lambda)\sim\pi\lambda/4$ 다. 정사각형의 넓이가 $\pi^2$ 이므로 이 값은 $\frac{\pi^2}{4\pi}\lambda$ 와 같다. 일반 유계 영역 $\Omega\subset\mathbb R^n$ 에서

$$
N(\lambda)\sim\frac{\omega_n\thinspace\mathrm{vol}(\Omega)}{(2\pi)^n}\lambda^{n/2}\qquad(\lambda\to\infty)
$$

가 성립한다. $\omega_n$ 은 $n$ 차원 단위공의 부피다. 이것이 [Weyl 법칙](weyl-law.md)이다[^1]. 첫 항은 영역의 부피만으로 정해지고 모양에 의존하지 않는다.

# 활용

- [조화함수](harmonic-functions.md)는 $\Delta u=0$ 의 해다. 평균값 공식에서 $\Delta u=0$ 이면 구면 평균과 중심값의 차가 $o(r^2)$ 이고, 조화함수의 평균값 성질은 이 차가 정확히 $0$ 이라는 것이다.
- [열방정식](heat-equation.md) $\partial_tu=\kappa\Delta u$ 는 평균값 공식대로 각 점의 값을 주변 평균 쪽으로 옮긴다. [파동방정식](wave-equation.md) $\partial_t^2u=c^2\Delta u$ 는 같은 차이로 가속도를 정한다.
- [Fourier 변환](fourier-transform.md)은 $\Delta$ 를 곱셈 연산자로 바꾼다. $\Delta e^{i\xi\cdot x}=-\lVert\xi\rVert^2e^{i\xi\cdot x}$ 이므로 평면파가 $\mathbb R^n$ 위의 고유함수다.
- [그래프 Laplacian](graph-laplacian.md) $L$ 은 $-\Delta$ 의 이산판이다. 격자 $h\mathbb Z$ 에서 $\bigl(u(x+h)+u(x-h)-2u(x)\bigr)/h^2$ 가 $\partial_x^2u$ 를 근사하고, 이웃 값의 합에서 차수배를 뺀 것의 부호를 바꾸면 $L$ 이다.
- [Riemann 계량](riemannian-metrics.md)이 있는 다양체에서는 계량으로 정의한 기울기와 발산으로 $\Delta f=\mathrm{div}\thinspace\nabla f$ 를 쓴 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)를 쓴다. [Hodge 이론](hodge-theory.md)은 미분형식 위의 Laplace 연산자의 핵으로 [de Rham 코호몰로지](de-rham-cohomology.md)를 나타낸다.
- [Brown 운동](brownian-motion.md)의 생성작용소(generator)는 $\tfrac12\Delta$ 다. 평균값 공식의 구면 평균 자리에 Brown 운동의 기댓값이 들어간다.
- [Sturm–Liouville 이론](sturm-liouville.md)은 일차원 고윳값 문제 $-u''=\lambda u$ 를 변수계수 연산자로 확장한다.

[^1]: H. Weyl, "Das asymptotische Verteilungsgesetz der Eigenwerte linearer partieller Differentialgleichungen", Math. Ann. 71 (1912), 441–479.

# 연관 문서

## 선수지식

- [Hessian 행렬](hessian.md)

## 더 알아보기

- [조화함수](harmonic-functions.md)
- [열방정식](heat-equation.md)
- [파동방정식](wave-equation.md)
- [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)
- [Faber–Krahn 부등식](faber-krahn.md)

#analysis #differential_geometry #probability
