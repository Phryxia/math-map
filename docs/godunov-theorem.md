# Godunov 정리

# 개요

**Godunov 정리(Godunov's theorem)** 는 수송 방정식을 푸는 선형 차분 방법이 계단 모양의 값에 없던 봉우리를 만들지 않으면 그 방법은 1 차 정확도를 넘지 못한다는 정리다. 강물에 실린 오염 물질의 경계처럼 농도가 한 지점에서 뚝 떨어지는 값을 계산하면, 정확도가 높은 방법은 경계 앞에 원래 농도보다 높은 값을 만들고, 그런 값을 만들지 않는 방법은 경계를 넓게 뭉갠다. Godunov 정리에 따라 두 문제를 함께 피하는 선형 방법은 없으므로, 경계 근처에서만 계수를 바꾸는 비선형 방법을 쓴다.

# 직관

물살의 속도가 $1$ 인 강에서 농도 $u$ 는 수송 방정식 $u\_t+u\_x=0$ 을 따른다. 격자 간격 $h$, 시간 간격 $k$, $\nu=k/h=0.5$ 로 두고, 처음 값이 지점 $j\le 0$ 에서 $1$, $j\ge 1$ 에서 $0$ 인 계단이라 한다.

[CFL 조건](cfl-condition.md)(Courant–Friedrichs–Lewy condition) 문서의 바람 위쪽 차분은 $u^{n+1}\_j=0.5u^n\_{j-1}+0.5u^n\_j$ 다. 한 걸음 뒤 지점 $-1,0,1,2$ 의 값은 $1,1,0.5,0$ 이다. 값은 $0$ 과 $1$ 사이에 머물지만, 걸음이 쌓이면 계단이 여러 칸에 걸쳐 완만해진다.

2 차 정확도의 [Lax–Wendroff 방법](lax-wendroff-method.md)은 세 이웃에 계수 $0.375$, $0.75$, $-0.125$ 를 곱한다.

$$
u^{n+1}\_j=0.375\thinspace u^n\_{j-1}+0.75\thinspace u^n\_j-0.125\thinspace u^n\_{j+1}
$$

한 걸음 뒤 지점 $-1,0,1,2$ 의 값은 $1,1.125,0.375,0$ 이다. 지점 $0$ 의 값 $1.125$ 는 처음 값의 최댓값 $1$ 을 넘는다. 계수 $-0.125$ 가 음수라서 아래쪽의 $0$ 이 위쪽의 $1$ 보다 작은 것이 지점 $0$ 의 값을 올린다.

음수 계수를 없애면 봉우리는 사라진다. Godunov 정리에 따르면 그때 2 차 정확도도 함께 사라진다.

# 정의

## 선형 차분 방법

정수 $m$ 에 대한 상수 $c\_m$ 이 유한 개를 빼고 $0$ 일 때, 다음 갱신을 **선형 차분 방법(linear difference scheme)** 이라 한다.

$$
u^{n+1}\_j=\sum\_mc\_m\thinspace u^n\_{j+m}
$$

직관 절의 바람 위쪽 차분은 $c\_{-1}=\nu$, $c\_0=1-\nu$ 이고, Lax–Wendroff 방법은 다음 계수다.

$$
c\_{-1}=\frac{\nu(1+\nu)}{2},\qquad c\_0=1-\nu^2,\qquad c\_1=-\frac{\nu(1-\nu)}{2}
$$

## 단조성

모든 $j$ 에서 $u^n\_j\le v^n\_j$ 이면 모든 $j$ 에서 $u^{n+1}\_j\le v^{n+1}\_j$ 인 방법을 **단조(monotone)** 라 한다. 선형 차분 방법이 단조인 것은 모든 $c\_m$ 이 $0$ 이상인 것과 같다. 계수가 모두 $0$ 이상이고 합이 $1$ 이면 새 값은 옛 값의 가중평균이라 옛 값의 최댓값을 넘지 않는다.

바람 위쪽 차분은 $0\le\nu\le 1$ 에서 단조이고, Lax–Wendroff 방법은 $0\lt\nu\lt 1$ 에서 $c\_1\lt 0$ 이라 단조가 아니다.

## 정확도의 차수

참해가 매끄러우면 $u(x\_j,t+k)=u(x\_j-\nu h,t)$ 이다. 방법이 내놓는 값 $\sum\_mc\_mu(x\_j+mh,t)$ 와 이 값을 $h$ 의 Taylor 급수로 펼쳐, $h^p$ 의 계수가 $p=0,1,\dots,r$ 에서 같으면 방법의 **정확도 차수(order of accuracy)** 가 $r$ 이상이라 한다. 조건은 다음과 같다.

$$
\sum\_mc\_m\thinspace m^p=(-\nu)^p,\qquad p=0,1,\dots,r
$$

Lax–Wendroff 방법의 $\nu=0.5$ 계수로 확인하면 $\sum c\_m=1$, $\sum mc\_m=-0.375-0.125=-0.5$, $\sum m^2c\_m=0.375-0.125=0.25$ 라 $r=2$ 다. 바람 위쪽 차분은 $\sum m^2c\_m=\nu$ 가 $\nu^2$ 와 다르므로 $r=1$ 이다.

# 성질

## Godunov 정리

$\nu$ 가 정수가 아니면, 수송 방정식에 대한 단조인 선형 차분 방법의 정확도 차수는 $1$ 이하다.[^1]

증명의 요지. 차수가 $2$ 이상이고 단조라 한다. $c\_m\ge 0$, $\sum c\_m=1$ 이므로 $c\_m$ 은 정수 위의 확률분포다. 차수 조건에서 이 분포의 평균은 $-\nu$, 제곱의 평균은 $\nu^2$ 이므로 분산(variance)이 $\nu^2-(-\nu)^2=0$ 이다. 분산이 $0$ 인 분포는 한 점에 몰려 있으므로 $c\_m$ 은 $m=-\nu$ 한 곳에서만 $1$ 이고, $\nu$ 가 정수여야 한다.

$\nu$ 가 정수이면 그 방법은 값을 $\nu$ 칸 옮기는 것이고, 이것은 참해 그대로다.

## 비선형 방법

정리의 가정은 선형성이다. 계수를 이웃 값의 차이에 따라 바꾸는 비선형 방법은 매끄러운 곳에서 2 차 정확도를 가지면서 새 봉우리를 만들지 않을 수 있다. 전체 변동 $\sum\_j\vert u\_{j+1}-u\_j\vert$ 이 걸음마다 늘지 않는 방법을 전체 변동 감소 방법(total variation diminishing scheme, TVD)이라 하고, 플럭스 제한자(flux limiter)로 Lax–Wendroff 방법과 바람 위쪽 차분을 섞어 만든다.[^2] 이런 방법도 극값 근처에서는 1 차로 떨어진다.

## 보존 법칙의 단조 방법

비선형 보존 법칙 $u\_t+f(u)\_x=0$ 에 대해서도, 단조인 보존형 방법은 수렴하면 엔트로피 해로 수렴하지만 정확도는 1 차를 넘지 못한다.[^3]

# 활용

- 충격파 계산. 기체 역학의 [Riemann 문제](riemann-problem.md)처럼 해에 불연속이 있는 문제에서, 경계 앞의 거짓 진동을 피하려고 단조 방법이나 TVD 방법을 쓴다.
- 고해상도 방법의 설계. MUSCL(monotone upstream-centered schemes for conservation laws), ENO(essentially non-oscillatory), WENO(weighted ENO) 방법은 모두 경계 근처에서 계수를 바꾸는 비선형 방법이다.
- 수치 확산의 해석. 단조 방법이 1 차에 묶이므로, 바람 위쪽 차분의 수치 확산은 격자를 줄이는 것 말고는 선형 방법 안에서 없앨 수 없다.

[^1]: S. K. Godunov, "A difference method for numerical calculation of discontinuous solutions of the equations of hydrodynamics", *Matematicheskii Sbornik* 47(89) (1959), 271–306.

[^2]: A. Harten, "High resolution schemes for hyperbolic conservation laws", *Journal of Computational Physics* 49 (1983), 357–393.

[^3]: A. Harten, J. M. Hyman, P. D. Lax, "On finite-difference approximations and entropy conditions for shocks", *Communications on Pure and Applied Mathematics* 29 (1976), 297–322.

# 연관 문서

## 선수지식

- [Lax–Wendroff 방법](lax-wendroff-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #computation
