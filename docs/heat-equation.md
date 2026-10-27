# 열방정식

# 개요

**열방정식(heat equation)** 은 미지함수 $u(x,t)$ 에 대한 편미분방정식

$$
\partial_t u=\kappa\thinspace\Delta u
$$

이다. $x\in\mathbb R^n$ 은 위치, $t\ge 0$ 은 시간, $\kappa\gt 0$ 은 확산 계수이고 $\Delta=\sum_i\partial_{x_i}^2$ 는 [Laplace 연산자](laplace-operator.md)다. $u$ 는 온도나 물질의 농도이고, 방정식은 각 점의 값이 주변 평균과의 차이에 비례하는 속도로 그 평균 쪽으로 움직인다는 것을 말한다.

쇠막대의 한 점을 불에 대었다 떼면 뜨거운 부분이 시간이 지나며 양옆으로 퍼지고 막대 전체의 온도가 고르게 된다. 열방정식은 이 퍼짐을 적어, 처음 온도 분포에서 이후의 온도를 계산하게 한다.

# 직관

$\mathbb R^n$ 에서의 해는 초기값에 Gauss 함수 모양의 열핵을 [합성곱](convolution.md)한 것이다. 열핵은 분산이 $2\kappa t$ 인 [정규분포](normal-distribution.md)의 밀도이고, 이 사실이 열방정식과 [Brown 운동](brownian-motion.md)을 잇는다.

막대를 간격 $h$ 인 점 $x_i=ih$ 로 나누고 각 점의 온도를 $u_i$ 라 한다. 짧은 시간 $\tau$ 동안 각 점은 양옆과 열을 주고받고, 받는 양은 이웃과의 온도 차에 비례한다. 그러면

$$
u_i(t+\tau)=u_i(t)+\frac{\kappa\tau}{h^2}\bigl(u_{i+1}(t)-2u_i(t)+u_{i-1}(t)\bigr)
$$

이다. 괄호 안은 $u_i$ 가 두 이웃의 평균보다 얼마나 낮은지의 두 배이고, $h\to 0$ 에서 $h^2\partial_x^2u$ 로 간다. 양변에서 $u_i(t)$ 를 빼고 $\tau$ 로 나누면 $\partial_tu=\kappa\partial_x^2u$ 가 나온다.

$\kappa\tau/h^2=\tfrac12$ 로 잡으면 식은 $u_i(t+\tau)=\tfrac12\bigl(u_{i+1}(t)+u_{i-1}(t)\bigr)$ 가 된다. 처음에 한 점에만 열 $1$ 을 두면 한 단계마다 그 열이 양옆으로 반씩 나뉜다. $k$ 단계 뒤의 분포는 동전을 $k$ 번 던져 앞면이면 오른쪽, 뒷면이면 왼쪽으로 한 칸씩 간 위치의 분포, 곧 이항분포다. $k$ 가 크면 이항분포는 정규분포에 가까워지므로([중심극한정리](central-limit-theorem.md)), 한 점에서 출발한 열은 시간이 지나면 Gauss 함수 모양으로 퍼진다.

# 정의

## 초기값 문제

$\mathbb R^n$ 위의 유계 연속함수 $f$ 에 대해

$$
\partial_tu=\kappa\Delta u\quad(t\gt 0),\qquad u(x,0)=f(x)
$$

를 만족하는 함수 $u$ 를 찾는 문제를 열방정식의 초기값 문제(Cauchy 문제)라 한다.

## 열핵

$$
\Phi(x,t)=\frac{1}{(4\pi\kappa t)^{n/2}}\exp\negthinspace\left(-\frac{\lvert x\rvert^2}{4\kappa t}\right)\qquad(t\gt 0)
$$

를 **열핵(heat kernel)** 이라 한다. 각 $t$ 에서 $\Phi(\cdot,t)$ 는 평균이 $0$ 이고 각 성분의 분산이 $2\kappa t$ 인 정규분포의 밀도이므로 적분이 $1$ 이고, $t\to 0$ 에서 원점에 모인다.

## 경계값 문제

유계 영역 $\Omega$ 에서는 초기조건 $u(x,0)=f(x)$ 에 경계조건을 더한다. 경계에서 $u=0$ 으로 두는 것이 Dirichlet 조건이고, 경계에서 바깥 방향 미분을 $0$ 으로 두는 것이 Neumann 조건이다. Dirichlet 조건은 경계의 온도를 고정한 것이고 Neumann 조건은 경계를 단열한 것이다.

# 성질

## 해의 공식

초기값 문제의 해는

$$
u(x,t)=\int_{\mathbb R^n}\Phi(x-y,t)f(y)\thinspace dy
$$

이다. [Fourier 변환](fourier-transform.md)을 $x$ 에 대해 취하면 방정식이 $\partial_t\hat u(\xi,t)=-4\pi^2\kappa\lvert\xi\rvert^2\hat u(\xi,t)$ 가 되어 $\hat u(\xi,t)=e^{-4\pi^2\kappa\lvert\xi\rvert^2t}\hat f(\xi)$ 이다. 곱의 역변환은 합성곱이고, Gauss 함수의 Fourier 변환이 Gauss 함수이므로 $e^{-4\pi^2\kappa\lvert\xi\rvert^2t}$ 의 역변환이 $\Phi(\cdot,t)$ 다. 여기서 Fourier 변환은 $\hat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ 로 둔다.

## 평활화와 무한 전파 속도

$f$ 가 유계이기만 하면 $t\gt 0$ 에서 $u$ 는 $x$ 와 $t$ 에 대해 무한히 미분가능하다. 미분을 $\Phi$ 에 넘기면 되고 $\Phi$ 의 모든 도함수가 빠르게 감소하기 때문이다. Fourier 쪽에서는 높은 진동수 $\xi$ 의 성분이 $e^{-4\pi^2\kappa\lvert\xi\rvert^2t}$ 로 빠르게 지워진다.

$f\ge 0$ 이고 $f$ 가 $0$ 이 아니면 $t\gt 0$ 에서 모든 $x$ 에 대해 $u(x,t)\gt 0$ 이다. $\Phi$ 가 어디서나 양수이기 때문이다. 한 점의 열이 즉시 모든 곳에 닿으므로 열방정식의 전파 속도는 무한하다.

## 최대값 원리

유계 영역 $\Omega$ 와 시간 구간 $(0,T]$ 에서 열방정식을 만족하는 연속함수 $u$ 는 최댓값과 최솟값을 포물 경계 $(\Omega\times\lbrace 0\rbrace)\cup(\partial\Omega\times\lbrack 0,T\rbrack)$ 에서 갖는다. 내부 최대점에서는 $\partial_tu\ge 0$ 이고 $\Delta u\le 0$ 인데, $u-\varepsilon t$ 로 바꾸어 등호를 깨면 방정식과 모순이다. 경계값 문제의 해의 유일성과 비교 원리가 여기서 나온다. 타원형 방정식의 판은 [최대값 원리](maximum-principle.md)에 있다.

## 에너지 감소

Dirichlet 조건에서 $E(t)=\int_\Omega u^2\thinspace dx$ 는

$$
E'(t)=2\int_\Omega u\thinspace\partial_tu\thinspace dx=-2\kappa\int_\Omega\lvert\nabla u\rvert^2\thinspace dx\le 0
$$

을 만족한다. 둘째 등식은 부분적분이고 경계항은 $u=0$ 이어서 사라진다. 두 해의 차에 적용하면 유일성이 나온다.

## 고유함수 전개

유계 영역에서는 $-\Delta$ 의 Dirichlet 고유함수 $\varphi_k$ 와 고윳값 $0\lt\lambda_1\le\lambda_2\le\cdots$ 로 해를 쓴다.

$$
u(x,t)=\sum_k c_ke^{-\kappa\lambda_kt}\varphi_k(x),\qquad c_k=\int_\Omega f\varphi_k\thinspace dx
$$

구간 $(0,\pi)$ 에서는 $\varphi_k=\sqrt{2/\pi}\sin kx$, $\lambda_k=k^2$ 이고 이것이 [Fourier 급수](fourier-series.md)가 처음 쓰인 계산이다. $t\to\infty$ 에서 해는 $e^{-\kappa\lambda_1t}$ 의 속도로 $0$ 으로 가고, 모양은 첫 고유함수 $\varphi_1$ 에 가까워진다. 고유함수의 존재와 완비성은 [Sturm–Liouville 이론](sturm-liouville.md)이 일차원에서 준다.

## 시간 역방향의 불량설정

시간을 거꾸로 돌린 문제, 곧 $u(\cdot,T)$ 에서 $u(\cdot,0)$ 을 구하는 문제는 잘 설정되지 않는다. 구간 $(0,\pi)$ 에서 $u(\cdot,T)=\varepsilon\sin kx$ 이면 $u(\cdot,0)=\varepsilon e^{\kappa k^2T}\sin kx$ 이다. $\varepsilon$ 이 작아도 $k$ 가 크면 초기값이 얼마든지 크므로 해가 자료에 연속적으로 의존하지 않는다.

## 유일성의 조건

$\mathbb R^n$ 의 초기값 문제는 증가 조건 없이는 해가 유일하지 않다. Tychonoff 는 초기값이 $0$ 인데 $0$ 이 아닌 해를 만들었고, 그 해는 $\lvert x\rvert\to\infty$ 에서 $e^{c\lvert x\rvert^2}$ 보다 빠르게 자란다. 모든 $t$ 에서 $\lvert u(x,t)\rvert\le Ae^{a\lvert x\rvert^2}$ 인 해 가운데서는 유일하다.

# 활용

- Brown 운동에서 $B_t$ 의 밀도는 $\kappa=\tfrac12$ 인 열핵 $\Phi(\cdot,t)$ 이고, $u(x,t)=\mathbb E f(x+B_t)$ 가 $\partial_tu=\tfrac12\Delta u$ 의 해다. [Feynman–Kac 공식](feynman-kac.md)이 퍼텐셜 항이 붙은 방정식으로 이 표현을 넓힌다.
- [Black–Scholes 방정식](black-scholes-equation.md)은 변수변환으로 일차원 열방정식이 되고, 옵션 가격 공식은 열핵의 적분이다.
- [그래프 Laplacian](graph-laplacian.md) $L$ 로 쓴 $\dot u=-Lu$ 가 그래프 위의 열방정식이고, 해 $e^{-tL}u_0$ 가 확산 거리와 그래프 신호의 평활에 쓰인다.
- [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)에서 Boltzmann 엔트로피 $\int\rho\log\rho$ 의 기울기 흐름이 열방정식이다.
- [Ricci 흐름](ricci-flow.md)과 [평균곡률 흐름](mean-curvature-flow.md)은 계량이나 곡면을 미지수로 갖는 비선형 열방정식이다.
- [삼중대각계](tridiagonal-systems.md)는 일차원 열방정식을 암시적 시간 단계로 풀 때 매 단계 나오는 연립방정식이다.

# 연관 문서

## 선수지식

- [Fourier 변환](fourier-transform.md)
- [Laplace 연산자](laplace-operator.md)

## 더 알아보기

- [열핵 전개](heat-kernel-asymptotics.md)

#analysis #probability #functional_analysis
