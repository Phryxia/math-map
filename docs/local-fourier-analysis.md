# Fourier 국소 해석

# 개요

**Fourier 국소 해석(local Fourier analysis)** 은 격자 위 반복법이 각 Fourier 모드를 얼마나 줄이는지 계산해 [다중격자](multigrid.md)의 수렴률을 예측하는 방법이다. 간격 $h$ 로 이산화한 $-u''=f$ 에 감쇠 Jacobi 반복을 돌리면 오차 가운데 촘촘하게 진동하는 성분은 몇 번 만에 줄지만 완만한 성분은 거의 줄지 않는데, [행렬](matrices.md)만 보고는 어느 성분이 얼마나 줄지 알기 어렵다. Fourier 국소 해석은 오차를 모드 $e^{\mathrm i\theta j}$ 로 나누어 반복 한 번을 모드마다 수 하나를 곱하는 것으로 바꾸고, 그 수로 평활자와 매개변수를 고른다.

# 직관

구간 위의 $-u''=f$ 를 간격 $h$ 로 이산화하면 행렬 $A$ 의 대각이 $2/h^2$ 이고 양옆이 $-1/h^2$ 이다. 감쇠 Jacobi 반복(damped Jacobi iteration) $x\leftarrow x+\omega D^{-1}(b-Ax)$ 를 쓰면 오차에 $I-\omega D^{-1}A$ 가 곱해진다.

오차를 모드 $e^{\mathrm i\theta j}$ 로 두고 $A$ 를 적용하면 $j$ 번째 성분이 $\frac{1}{h^2}(-e^{\mathrm i\theta(j-1)}+2e^{\mathrm i\theta j}-e^{\mathrm i\theta(j+1)})$ 이다. $e^{\mathrm i\theta j}$ 를 묶어내면 $\frac{2-2\cos\theta}{h^2}e^{\mathrm i\theta j}$ 이므로, 결과는 같은 모드에 수 $\frac{4}{h^2}\sin^2(\theta/2)$ 를 곱한 것이다. $D^{-1}$ 이 $h^2/2$ 배이므로 반복 한 번에 이 모드에 곱해지는 수는 다음과 같다.

$$
g(\theta)=1-\omega\thinspace\frac{h^2}{2}\cdot\frac{4}{h^2}\sin^2(\theta/2)=1-\omega(1-\cos\theta)
$$

$h$ 가 사라지고 $\theta$ 와 $\omega$ 만 남는다. $\omega=1$ 을 넣으면 $g(\pi)=-1$ 이라 가장 빠르게 진동하는 모드가 부호만 바뀌고 크기가 그대로여서, 성긴 격자가 맡지 못하는 고주파를 평활자가 줄여 주기를 기대하는 다중격자의 전제가 깨진다. $\omega=2/3$ 을 넣으면 $g(\pi/2)=1/3$ 이고 $g(\pi)=-1/3$ 이라 고주파 쪽 $\pi/2\le\vert\theta\vert\le\pi$ 에서 크기가 $1/3$ 을 넘지 않는다. 반복 한 번에 고주파가 $1/3$ 로 줄어든다는 이 수가 다중격자 한 사이클의 수렴률을 예측한다.

모드마다 곱해지는 수를 기호라 하고, 고주파 모드에 대한 기호의 최댓값을 평활률이라 한다.

# 정의

무한 격자 $h\mathbb Z^d$ 위에서 상수 계수 차분 연산자 $L_h$ 를 다룬다.

## 격자 모드와 기호

$\theta\in\Theta=(-\pi,\pi\rbrack^d$ 에 대해 격자 함수 $\varphi(\theta,x)=e^{\mathrm i\theta\cdot x/h}$ 를 **격자 모드(grid mode)** 라 한다. 상수 계수 연산자에 대해서는 다음을 만족하는 수 $\tilde L_h(\theta)$ 가 있다.

$$L_h\varphi(\theta,\cdot)=\tilde L_h(\theta)\thinspace\varphi(\theta,\cdot)$$

$\tilde L_h(\theta)$ 를 $L_h$ 의 **기호(symbol)** 라 한다. 직관 절의 $1$ 차원 차분 연산자의 기호는 $(2-2\cos\theta)/h^2$ 이고, 감쇠 Jacobi 반복의 기호는 $g(\theta)=1-\omega(1-\cos\theta)$ 다.

## 저주파와 고주파

성긴 격자를 $2h$ 로 잡으면 $\theta$ 와, $\theta$ 의 성분에 $\pi$ 를 더하거나 뺀 것이 성긴 격자 위에서 같은 모드가 된다. 이것을 앨리어싱(aliasing)이라 한다. 앨리어싱으로 $\Theta$ 가 $2^d$ 개씩 묶이고, 각 묶음에서 모든 성분이 $\vert\theta_i\vert\lt\pi/2$ 인 것 하나가 **저주파(low frequency)**, 나머지가 **고주파(high frequency)** 다.

$1$ 차원에서 $\theta=\pi/4$ 와 $\theta=-3\pi/4$ 는 짝수 번째 점 $j=2m$ 에서 $e^{\mathrm i\pi m/2}$ 와 $e^{-\mathrm i3\pi m/2}=e^{\mathrm i\pi m/2}$ 로 같다. 이 묶음에서 $\pi/4$ 가 저주파, $-3\pi/4$ 가 고주파다.

## 평활률

평활자(smoother) $S_h$ 의 기호를 $\tilde S_h(\theta)$ 라 할 때 **평활률(smoothing factor)** 은 고주파에서의 최댓값이다.

$$\mu=\sup\lbrace\vert\tilde S_h(\theta)\vert:\theta\in\Theta\thinspace \text{고주파}\rbrace$$

직관 절의 $\omega=2/3$ 이면 고주파 $\pi/2\le\vert\theta\vert\le\pi$ 에서 $\vert g\vert$ 의 최댓값이 $1/3$ 이므로 $\mu=1/3$ 이다.

# 성질

## 평활률과 수렴률

성긴 격자가 저주파를 정확히 없앤다고 가정하면, 평활자를 $\nu$ 번 쓴 두 격자 사이클(two-grid cycle)의 수렴률이 $\mu^\nu$ 다.

## 상수 계수 연산자의 기호

상수 계수 연산자는 모든 격자 모드를 고유함수로 가진다. 스텐실 계수 $s_\kappa$ 에 대해 기호는 $\tilde L_h(\theta)=\sum_\kappa s_\kappa e^{\mathrm i\theta\cdot\kappa}$ 다.

## 감쇠 Jacobi 의 최적 감쇠

1 차원 [Laplace 연산자](laplace-operator.md)에서 $\tilde S_h(\theta)=1-\omega(1-\cos\theta)$ 이고 평활률은 $\mu(\omega)=\max\lbrace\vert 1-\omega\vert,\vert 1-2\omega\vert\rbrace$ 다. 두 값이 같아지는 $\omega=2/3$ 에서 $\mu=1/3$ 으로 최소다. $\omega=1$ 이면 $\mu=1$ 이라 평활이 일어나지 않는다.

2 차원 5 점 Laplace 연산자에서는 같은 계산이 $\omega=4/5$ 와 $\mu=3/5$ 를 준다[^1].

## 적흑 Gauss–Seidel

격자를 두 색으로 나누어 색마다 한 번씩 훑는 적흑 Gauss–Seidel(red-black Gauss–Seidel) 은 두 색의 모드가 $\theta$ 와 앨리어싱 짝 사이에서 섞이므로 기호가 스칼라가 아니라 $2\times 2$ 행렬이다. 2 차원 Laplace 연산자에서 이 행렬의 스펙트럼 반지름(spectral radius)으로 잰 평활률은 $1/4$ 다[^1].

## 두 격자 해석

성긴 격자 보정까지 넣으면 2 차원에서 한 묶음의 네 모드가 서로 섞이므로 사이클 연산자의 기호가 $4\times 4$ 행렬 $\tilde M(\theta)$ 다. 제한(restriction) 연산자, 보간(prolongation) 연산자, 성긴 격자 연산자의 기호를 각각 구해 곱하면 이 행렬이 나오고, 두 격자 수렴률은 저주파 $\theta$ 에 대한 스펙트럼 반지름의 최댓값이다.

$$\rho=\sup\lbrace\varrho(\tilde M(\theta)):\theta\thinspace \text{저주파}\rbrace$$

## 가정의 범위

이 계산은 격자가 무한하고 계수가 상수이며 경계가 없다고 가정한다. 유한 격자의 경계 효과와 변계수(variable coefficient) 문제의 국소 변화는 반영되지 않으므로, 예측값과 실제 수렴률이 어긋날 수 있다. 계수가 천천히 변하는 문제에서는 각 점의 계수를 상수로 고정해 얻은 값들의 최댓값을 쓴다.

# 활용

- 평활자 선택. 감쇠 매개변수, 훑는 순서, [선 완화](line-relaxation.md)와 점 완화 가운데 무엇을 쓸지를 평활률 계산으로 정한다. 비등방 문제에서 점 완화의 평활률이 $1$ 에 가까워지는 것이 선 완화를 쓰는 근거다.
- 성긴 격자 연산자 설계. 제한과 보간의 차수를 바꿔 가며 두 격자 기호 행렬의 스펙트럼 반지름을 비교한다.
- 사이클 비용 견적. 예측된 수렴률과 한 사이클의 연산량으로 목표 정확도까지의 총비용을 사이클 종류마다 비교한다.
- 대수적 방법과의 경계. [대수적 다중격자](algebraic-multigrid.md)는 격자 구조 없이 행렬만 보므로 이 해석을 그대로 적용하지 못하고, 구조가 있는 부분 문제에서만 참고값으로 쓴다.

[^1]: A. Brandt, "Multi-Level Adaptive Solutions to Boundary-Value Problems", Mathematics of Computation **31** (1977), 333–390. 교재 서술은 U. Trottenberg, C. W. Oosterlee, A. Schüller, *Multigrid*, Academic Press (2001), 4장.

# 연관 문서

## 선수지식

- [다중격자](multigrid.md)

## 더 알아보기

- [선 완화](line-relaxation.md)

#linear_algebra #analysis #computation
