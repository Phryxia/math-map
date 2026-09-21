# 조화함수

# 개요

조화함수는 Laplace 방정식 $\Delta u=0$ 을 만족하는 $C^2$ 함수다. 평면에서는 정칙함수의 실부와 허부가 정확히 조화함수이고, 그 덕분에 복소해석의 정리들이 퍼텐셜 이론의 정리로 옮겨 간다. 중심 성질은 평균값 성질이다. 한 점의 값이 그 점을 중심으로 하는 구면 위 평균과 같고, 여기서 최대 원리와 Poisson 적분 공식, Harnack 부등식이 따라 나온다.

# 직관

조화함수는 국소적으로 평균을 유지하는 함수다. 어느 점에서도 주변보다 높거나 낮지 않으므로 내부에 봉우리나 골짜기가 생길 수 없고, 값은 경계에서만 극단을 취한다. 정상 상태의 온도 분포가 이 그림이다.

평면에서 이 성질은 정칙성의 실수판이다. 정칙함수 $f=u+iv$ 의 Cauchy 적분 공식이 경계값으로 내부 값을 결정하듯, 조화함수의 Poisson 공식이 경계값으로 내부 값을 결정한다.

# 정의

## Laplace 방정식

열린집합 $\Omega\subset\mathbb R^n$ 위의 $C^2$ 함수 $u$ 가

$$\Delta u=\sum_{k=1}^n\frac{\partial^2u}{\partial x_k^2}=0$$

를 만족하면 $u$ 를 $\Omega$ 에서 **조화함수**라 한다. $\Delta$ 는 Laplace 연산자다. $\Delta u\ge0$ 인 함수는 **열조화함수**, $\Delta u\le0$ 인 함수는 **상조화함수**다.

## 조화 켤레

평면 영역 $\Omega\subset\mathbb C$ 에서 조화함수 $u$ 에 대해 $f=u+iv$ 가 정칙이 되게 하는 조화함수 $v$ 를 $u$ 의 **조화 켤레**라 한다. $u$ 와 $v$ 는 Cauchy–Riemann 방정식

$$u_x=v_y,\qquad u_y=-v_x$$

로 묶인다. $v$ 는 상수를 더하는 자유도만큼만 다르다.

# 성질

## 정칙함수와의 대응

$f=u+iv$ 가 정칙이면 $u$ 와 $v$ 는 조화함수다. Cauchy–Riemann 방정식을 각각 미분해 더하면 $u_{xx}+u_{yy}=v_{yx}-v_{xy}=0$ 이 나온다.

역방향은 영역의 모양에 걸린다. $\Omega$ 가 단순연결이면 조화함수 $u$ 는 언제나 조화 켤레를 가지므로 어떤 정칙함수의 실부다. $\Omega=\mathbb C\setminus\lbrace 0\rbrace$ 에서 $u=\log\vert z\vert$ 는 조화이지만 조화 켤레인 편각이 단일가치가 아니어서 전역 정칙함수의 실부가 되지 못한다.

## 평균값 성질

$u$ 가 $\overline{B(a,r)}\subset\Omega$ 에서 조화이면

$$u(a)=\frac1{2\pi}\int_0^{2\pi}u(a+re^{i\theta})\thinspace d\theta$$

가 성립한다. 평면의 경우이고, $\mathbb R^n$ 에서는 구면 평균과 공 평균 모두에 대해 같은 식이 성립한다. 역도 참이다. 연속함수가 모든 작은 구에서 평균값 성질을 만족하면 조화함수이고, 따라서 무한히 미분 가능하며 실해석적이다.

## 최대 원리

$\Omega$ 가 유계 영역이고 $u$ 가 $\Omega$ 에서 조화, $\overline\Omega$ 에서 연속이면 $u$ 는 최댓값과 최솟값을 경계 $\partial\Omega$ 에서 취한다. 내부의 한 점에서 최댓값을 취하면 $u$ 는 상수다.

증명은 평균값 성질에서 나온다. 내부 점 $a$ 에서 최댓값을 취하면 $a$ 둘레의 모든 작은 원에서 평균이 $u(a)$ 와 같아야 하므로 그 원 위에서 $u\equiv u(a)$ 이고, 이런 점들의 집합이 열린 동시에 닫혀 연결성으로 $\Omega$ 전체다.

따름으로 Dirichlet 문제의 해가 유일하다. 경계값이 같은 두 조화함수의 차는 경계에서 $0$ 이고 최대 원리로 내부에서도 $0$ 이다.

## Poisson 적분 공식

단위원판에서 조화이고 닫힌 원판에서 연속인 $u$ 는 경계값으로 복원된다.

$$u(re^{i\theta})=\frac1{2\pi}\int_0^{2\pi}P_r(\theta-t)\thinspace u(e^{it})\thinspace dt,\qquad P_r(\varphi)=\frac{1-r^2}{1-2r\cos\varphi+r^2}$$

핵 $P_r$ 은 양이고 적분이 $1$ 이며 $r\to1$ 에서 근사 항등원으로 수렴한다. 거꾸로 원 위의 연속함수를 이 식에 넣으면 그 경계값을 갖는 조화함수가 나오므로, 원판의 Dirichlet 문제는 언제나 풀린다.

## Harnack 부등식

$u$ 가 $B(0,R)$ 에서 조화이고 음이 아니면 $\vert z\vert=r\lt R$ 에서

$$\frac{R-r}{R+r}\thinspace u(0)\le u(z)\le\frac{R+r}{R-r}\thinspace u(0)$$

이다. Poisson 핵의 최댓값과 최솟값을 대입해 얻는다. 따름으로 $\mathbb R^n$ 전체에서 조화이고 아래로 유계인 함수는 상수다(Liouville 정리의 조화판). $R\to\infty$ 에서 양쪽 끝이 $u(0)$ 으로 몰린다.

# 활용

- [정칙함수와 Cauchy 적분 정리](holomorphic-functions.md): 최대 절댓값 원리는 $\vert f\vert$ 가 열조화라는 사실에서 나오고, Cauchy 적분 공식의 실부가 Poisson 공식이다.
- [해석적 연속](analytic-continuation.md): Schwarz 반사 원리의 조화판은 실축에서 $0$ 인 조화함수를 홀함수로 확장한다.
- [Brown 운동](brownian-motion.md): 영역 $\Omega$ 에서 출발한 Brown 운동을 경계에 닿을 때까지 흘려 경계값의 기댓값을 취하면 Dirichlet 문제의 해가 된다. 평균값 성질이 확률 쪽에서는 정지된 과정이 martingale 이라는 진술이 된다.
- [무작위 걷기](random-walks.md): 이산 Laplace 연산자의 영공간이 조화함수의 이산판이고, 전위가 그 역할을 한다.
- [Kähler 다양체와 Hodge 분해](kahler-manifolds.md): 조화형식은 Laplace–Beltrami 연산자의 핵이고, 각 [de Rham 코호몰로지](de-rham-cohomology.md)류에 조화 대표원이 하나씩 있다.

# 연관 문서

## 선수지식

- [정칙함수와 Cauchy 적분 정리](holomorphic-functions.md)

## 더 알아보기

- [Dirichlet 문제](dirichlet-problem.md)

#complex_analysis #analysis #probability #differential_geometry
