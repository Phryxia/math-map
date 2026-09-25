# Fourier 국소 해석

# 개요

Fourier 국소 해석은 격자 위 반복법이 각 Fourier 모드를 얼마나 줄이는지 계산해 [다중격자](multigrid.md)의 수렴률을 예측하는 방법이다. 격자 연산자를 지수함수 모드에 적용하면 스칼라 배가 되므로, 반복 한 번의 효과가 모드마다 하나의 수 곧 기호로 정리된다. 고주파 모드에 대한 기호의 최댓값이 평활률이고, 이 값이 평활자와 그 매개변수를 고르는 기준이다.

# 직관

구간 위의 $-u''=f$ 를 간격 $h$ 로 이산화하면 행렬 $A$ 의 대각이 $2/h^2$ 이고 양옆이 $-1/h^2$ 다. 감쇠 Jacobi 반복 $x\leftarrow x+\omega D^{-1}(b-Ax)$ 를 오차에 적용하면 오차가 $I-\omega D^{-1}A$ 배가 된다.

오차를 모드 $e^{\mathrm i\theta j}$ 로 두고 $A$ 를 적용한다. $j$ 번째 성분은 $\frac{1}{h^2}(-e^{\mathrm i\theta(j-1)}+2e^{\mathrm i\theta j}-e^{\mathrm i\theta(j+1)})$ 이고, $e^{\mathrm i\theta j}$ 를 묶어내면 $\frac{2-2\cos\theta}{h^2}e^{\mathrm i\theta j}$ 다. 모드가 모드로 되돌아오고 곱해진 수는 $\frac{4}{h^2}\sin^2(\theta/2)$ 하나다.

$D^{-1}$ 이 $h^2/2$ 배이므로 반복 한 번에 이 모드에 곱해지는 수는 다음과 같다.

$$g(\theta)=1-\omega\thinspace\frac{h^2}{2}\cdot\frac{4}{h^2}\sin^2(\theta/2)=1-\omega(1-\cos\theta)$$

$h$ 가 사라지고 $\theta$ 와 $\omega$ 만 남는다. $\omega=1$ 을 넣으면 $g(\pi)=-1$ 이라 가장 빠르게 진동하는 모드가 부호만 바뀌고 크기가 그대로다. 다중격자는 성긴 격자가 맡지 못하는 고주파를 평활자가 줄여 주기를 기대하는데, $\omega=1$ 에서는 그 기대가 깨진다.

$\omega=2/3$ 을 넣으면 $g(\pi/2)=1/3$ 이고 $g(\pi)=-1/3$ 이라 고주파 쪽 $\pi/2\le\vert\theta\vert\le\pi$ 에서 크기가 $1/3$ 을 넘지 않는다. 반복 한 번에 고주파가 $1/3$ 로 줄어든다는 이 수가 다중격자 한 사이클의 수렴률을 예측한다.

# 정의

무한 격자 $h\mathbb Z^d$ 위에서 상수 계수 차분 연산자 $L_h$ 를 다룬다.

## 격자 모드와 기호

$\theta\in\Theta=(-\pi,\pi\rbrack^d$ 에 대해 격자 함수 $\varphi(\theta,x)=e^{\mathrm i\theta\cdot x/h}$ 를 **격자 모드**라 한다. 상수 계수 연산자는 모든 격자 모드를 고유함수로 가지므로 다음을 만족하는 수 $\tilde L_h(\theta)$ 가 있다.

$$L_h\varphi(\theta,\cdot)=\tilde L_h(\theta)\thinspace\varphi(\theta,\cdot)$$

$\tilde L_h(\theta)$ 를 $L_h$ 의 **기호**라 한다. 스텐실 계수 $s_\kappa$ 에 대해 $\tilde L_h(\theta)=\sum_\kappa s_\kappa e^{\mathrm i\theta\cdot\kappa}$ 다.

## 저주파와 고주파

성긴 격자를 $2h$ 로 잡으면 $\theta$ 와 $\theta$ 에서 각 성분마다 $\pi$ 를 더하거나 뺀 것이 성긴 격자 위에서 같은 모드가 된다. 이 앨리어싱으로 $\Theta$ 가 넷씩 묶이고, 각 묶음에서 $\vert\theta_i\vert\lt\pi/2$ 인 것 하나가 **저주파**, 나머지가 **고주파**다.

## 평활률

평활자 $S_h$ 의 기호를 $\tilde S_h(\theta)$ 라 할 때 **평활률**은 고주파에서의 최댓값이다.

$$\mu=\sup\lbrace\vert\tilde S_h(\theta)\vert:\theta\in\Theta\ \text{고주파}\rbrace$$

성긴 격자가 저주파를 정확히 없앤다고 가정하면 평활자 $\nu$ 번을 쓴 두 격자 사이클의 수렴률이 $\mu^\nu$ 다.

# 성질

## 감쇠 Jacobi 의 최적 감쇠

1 차원 Laplace 연산자에서 $\tilde S_h(\theta)=1-\omega(1-\cos\theta)$ 이고 평활률은 $\mu(\omega)=\max\lbrace\vert 1-\omega\vert,\vert 1-2\omega\vert\rbrace$ 다. 두 값이 같아지는 $\omega=2/3$ 에서 $\mu=1/3$ 으로 최소다. $\omega=1$ 이면 $\mu=1$ 이라 평활이 일어나지 않는다.

2 차원 5 점 Laplace 연산자에서는 같은 계산이 $\omega=4/5$ 와 $\mu=3/5$ 를 준다[^1].

## 적흑 Gauss–Seidel

격자를 두 색으로 나누어 색마다 한 번씩 훑는 Gauss–Seidel 은 기호가 스칼라가 아니라 $2\times 2$ 행렬이다. 두 색의 모드가 $\theta$ 와 앨리어싱 짝 사이에서 섞이기 때문이다. 2 차원 Laplace 연산자에서 이 행렬의 스펙트럼 반지름으로 잰 평활률은 $1/4$ 다[^1].

## 두 격자 해석

성긴 격자 보정까지 넣으면 한 묶음의 네 모드가 서로 섞이므로 사이클 연산자의 기호가 $4\times 4$ 행렬 $\tilde M(\theta)$ 다. 제한 연산자, 보간 연산자, 성긴 격자 연산자의 기호를 각각 구해 곱하면 이 행렬이 나오고, 두 격자 수렴률은 저주파 $\theta$ 에 대한 스펙트럼 반지름의 최댓값이다.

$$\rho=\sup\lbrace\varrho(\tilde M(\theta)):\theta\ \text{저주파}\rbrace$$

## 가정의 범위

이 계산은 격자가 무한하고 계수가 상수이며 경계가 없다고 가정한다. 유한 격자의 경계 효과와 변계수 문제의 국소 변화는 반영되지 않으므로, 예측값과 실제 수렴률이 어긋날 수 있다. 계수가 천천히 변하는 문제에서는 각 점의 계수를 상수로 고정해 얻은 값들의 최댓값을 쓴다.

# 활용

- **평활자 선택.** 감쇠 매개변수, 훑는 순서, 선 완화와 점 완화 가운데 무엇을 쓸지를 평활률 계산으로 정한다. 비등방 문제에서 점 완화의 평활률이 $1$ 에 가까워지는 것이 선 완화를 쓰는 근거다.
- **성긴 격자 연산자 설계.** 제한과 보간의 차수를 바꿔 가며 두 격자 기호 행렬의 스펙트럼 반지름을 비교한다.
- **사이클 비용 견적.** 예측된 수렴률과 한 사이클의 연산량으로 목표 정확도까지의 총비용을 사이클 종류마다 비교한다.
- **대수적 방법과의 경계.** [대수적 다중격자](algebraic-multigrid.md)는 격자 구조 없이 행렬만 보므로 이 해석을 그대로 적용하지 못하고, 구조가 있는 부분 문제에서만 참고값으로 쓴다.

[^1]: A. Brandt, "Multi-Level Adaptive Solutions to Boundary-Value Problems", Mathematics of Computation **31** (1977), 333–390. 교재 서술은 U. Trottenberg, C. W. Oosterlee, A. Schüller, *Multigrid*, Academic Press (2001), 4장.

# 연관 문서

## 선수지식

- [다중격자](multigrid.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #computation
