# 조화함수

# 개요

**조화함수(harmonic function)** 는 Laplace 방정식 $\Delta u=0$ 을 만족하는 $C^2$ 함수다. 얇은 금속판의 가장자리 온도를 고정하고 오래 기다리면 판 안의 온도가 더 변하지 않는데, 그때의 온도 분포를 구하는 문제가 이 꼴이다. 조화함수는 한 점의 값이 그 점을 중심으로 한 원 위의 평균과 같으므로, 가장자리 값을 평균 내는 적분으로 판 안의 온도를 구한다.

# 직관

단위원판의 가장자리 온도가 각 $\theta$ 인 점에서 $\cos\theta$ 라 하자. 판 안의 온도로 $u(x,y)=x$ 를 시험하면 가장자리에서 $x=\cos\theta$ 이고 $u_{xx}+u_{yy}=0$ 이다. 중심의 온도 $u(0,0)=0$ 은 가장자리 온도 $\cos\theta$ 를 원 둘레에서 평균 낸 값 $0$ 과 같다.

$x^2+y^2$ 은 $u_{xx}+u_{yy}=4$ 이고, 중심 값 $0$ 이 원 위의 평균 $1$ 보다 작아 중심에 골짜기가 생긴다. 이차 미분의 합이 $0$ 인 함수는 어느 점에서도 둘레 평균보다 높거나 낮지 않으므로 내부에 봉우리나 골짜기가 없고, 값은 경계에서만 가장 크거나 가장 작다.

# 정의

## Laplace 방정식

열린집합 $\Omega\subset\mathbb R^n$ 위의 $C^2$ 함수 $u$ 가

$$\Delta u=\sum_{k=1}^n\frac{\partial^2u}{\partial x_k^2}=0$$

를 만족하면 $u$ 를 $\Omega$ 에서 **조화함수** 라 한다. $\Delta$ 는 [Laplace 연산자](laplace-operator.md)다. $\Delta u\ge0$ 인 함수는 **열조화함수(subharmonic function)**, $\Delta u\le0$ 인 함수는 **상조화함수(superharmonic function)** 다. 평면에서 $x$, $x^2-y^2$, $\log(x^2+y^2)$ 은 조화함수이고($\log$ 는 원점 밖에서), $x^2+y^2$ 은 열조화함수다.

## 조화 켤레

평면 영역 $\Omega\subset\mathbb C$ 에서 조화함수 $u$ 에 대해 $f=u+iv$ 가 [정칙함수](holomorphic-functions.md)가 되게 하는 조화함수 $v$ 를 $u$ 의 **조화 켤레(harmonic conjugate)** 라 한다. $u$ 와 $v$ 는 Cauchy–Riemann 방정식

$$u_x=v_y,\qquad u_y=-v_x$$

로 묶인다. $v$ 는 상수를 더하는 자유도만큼만 다르다. $u=x^2-y^2$ 의 조화 켤레는 $v=2xy$ 이고 $u+iv=z^2$ 이다. $u_x=2x=v_y$, $u_y=-2y=-v_x$ 로 확인된다.

# 성질

## 정칙함수와의 대응

$f=u+iv$ 가 정칙이면 $u$ 와 $v$ 는 조화함수다. Cauchy–Riemann 방정식을 각각 미분해 더하면 $u_{xx}+u_{yy}=v_{yx}-v_{xy}=0$ 이 나온다.

역방향은 영역의 모양에 걸린다. $\Omega$ 가 단순연결이면 조화함수 $u$ 는 언제나 조화 켤레를 가지므로 어떤 정칙함수의 실부다. $\Omega=\mathbb C\setminus\lbrace 0\rbrace$ 에서 $u=\log\vert z\vert$ 는 조화이지만 조화 켤레인 편각이 단일가치가 아니어서 전역 정칙함수의 실부가 되지 못한다.

## 평균값 성질

$u$ 가 $\overline{B(a,r)}\subset\Omega$ 에서 조화이면

$$u(a)=\frac1{2\pi}\int_0^{2\pi}u(a+re^{i\theta})\thinspace d\theta$$

가 성립한다. 평면의 경우이고, $\mathbb R^n$ 에서는 구면 평균과 공 평균 모두에 대해 같은 식이 성립한다. 역도 참이다. [연속함수](continuity.md)가 모든 작은 구에서 평균값 성질을 만족하면 조화함수이고, 따라서 무한히 미분 가능하며 실해석적이다.

## 최대 원리

$\Omega$ 가 유계 영역이고 $u$ 가 $\Omega$ 에서 조화, $\overline\Omega$ 에서 연속이면 $u$ 는 최댓값과 최솟값을 경계 $\partial\Omega$ 에서 취한다. 내부의 한 점에서 최댓값을 취하면 $u$ 는 상수다.

증명은 평균값 성질에서 나온다. 내부 점 $a$ 에서 최댓값을 취하면 $a$ 둘레의 모든 작은 원에서 평균이 $u(a)$ 와 같아야 하므로 그 원 위에서 $u\equiv u(a)$ 이고, 이런 점들의 집합이 열린 동시에 닫혀 [연결성](connectedness.md)으로 $\Omega$ 전체다.

따름으로 [Dirichlet 문제](dirichlet-problem.md)의 해가 유일하다. 경계값이 같은 두 조화함수의 차는 경계에서 $0$ 이고 최대 원리로 내부에서도 $0$ 이다.

## Poisson 적분 공식

단위원판에서 조화이고 닫힌 원판에서 연속인 $u$ 는 경계값으로 복원된다.

$$u(re^{i\theta})=\frac1{2\pi}\int_0^{2\pi}P_r(\theta-t)\thinspace u(e^{it})\thinspace dt,\qquad P_r(\varphi)=\frac{1-r^2}{1-2r\cos\varphi+r^2}$$

핵 $P_r$ 은 양이고 적분이 $1$ 이며 $r\to1$ 에서 근사 항등원으로 수렴한다. 거꾸로 원 위의 연속함수를 이 식에 넣으면 그 경계값을 갖는 조화함수가 나오므로, 원판의 Dirichlet 문제는 언제나 풀린다.

## Harnack 부등식

$u$ 가 $B(0,R)$ 에서 조화이고 음이 아니면 $\vert z\vert=r\lt R$ 에서

$$\frac{R-r}{R+r}\thinspace u(0)\le u(z)\le\frac{R+r}{R-r}\thinspace u(0)$$

이다. Poisson 핵의 최댓값과 최솟값을 대입해 얻는다. 따름으로 $\mathbb R^n$ 전체에서 조화이고 아래로 유계인 함수는 상수다(Liouville 정리의 조화판). $R\to\infty$ 에서 양쪽 끝이 $u(0)$ 으로 몰린다.

# 활용

- 정칙함수: 최대 절댓값 원리는 $\vert f\vert$ 가 열조화라는 사실에서 나오고, Cauchy 적분 공식의 실부가 Poisson 공식이다.
- [해석적 연속](analytic-continuation.md): Schwarz 반사 원리의 조화판은 실축에서 $0$ 인 조화함수를 홀함수로 확장한다.
- [Brown 운동](brownian-motion.md): 영역 $\Omega$ 에서 출발한 Brown 운동을 경계에 닿을 때까지 흘려 경계값의 기댓값을 취하면 Dirichlet 문제의 해가 된다. 평균값 성질이 확률 쪽에서는 정지된 과정이 martingale 이라는 진술이 된다.
- [무작위 걷기](random-walks.md): 이산 Laplace 연산자의 영공간이 조화함수의 이산판이고, 전위가 그 원소다.
- [Kähler 다양체](kahler-manifolds.md): 조화형식은 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)의 핵이고, 각 [de Rham 코호몰로지](de-rham-cohomology.md)류에 조화 대표원이 하나씩 있다.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [Laplace 연산자](laplace-operator.md)

## 더 알아보기

- [최대값 원리](maximum-principle.md)
- [Dirichlet 문제](dirichlet-problem.md)
- [Green 함수](greens-function.md)
- [Weyl 보조정리](weyl-lemma.md)
- [유일 연속 정리](unique-continuation.md)

#complex_analysis #analysis #probability #differential_geometry
