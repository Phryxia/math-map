# HiPPO-FouT

# 개요

**HiPPO-FouT(translated Fourier)** 는 신호를 받는 동안 최근 길이 $\theta$ 의 구간만 삼각함수로 근사하고, 그 계수를 선형 미분방정식으로 고쳐 가는 [HiPPO](hippo.md)(high-order polynomial projection operators)의 한 판본이다. 기계의 진동을 재는 센서에서 지난 $1$ 초 동안 어느 진동수가 얼마나 섞였는지 알고 싶으면, 지난 $1$ 초의 측정값을 전부 쌓아 두고 매 순간 다시 계산해야 한다.

HiPPO-FouT 는 측정값을 쌓지 않고 창 위의 [Fourier 급수](fourier-series.md) 계수만 기억하며, 새 값이 들어올 때마다 그 계수를 미분방정식으로 고친다.

# 직관

창 $\lbrack t-\theta,t\rbrack$ 의 평균 $a_0(t)=\frac1\theta\int_{t-\theta}^tf(x)\thinspace dx$ 를 미분하면 들어온 값과 나간 값의 차가 나온다.

$$
a_0'(t)=\frac1\theta\bigl(f(t)-f(t-\theta)\bigr)
$$

$f(t-\theta)$ 는 이미 지나간 값이라 기억에 없다. [HiPPO-LegT](hippo-legt.md)는 계수로 복원한 함수의 창 왼쪽 끝 값을 그 자리에 넣었다. 삼각함수는 주기가 창의 길이와 같아서 왼쪽 끝 값과 오른쪽 끝 값이 같으므로, 복원한 함수는 $f(t-\theta)$ 와 $f(t)$ 를 가르지 못한다.

창을 한 주기로 보고 $f$ 를 주기적으로 이으면 창의 끝에서 $f(t-\theta)$ 와 $f(t)$ 가 만나 끊긴다. 끊긴 점에서 Fourier 급수는 양쪽 값의 평균으로 수렴하므로, 복원한 값 $r$ 은 $\frac12\bigl(f(t)+f(t-\theta)\bigr)$ 에 가깝다. 그래서 $f(t-\theta)$ 자리에 $2r-f(t)$ 를 넣는다.

계수가 $a_0$ 하나이면 $r=a_0$ 이고 식은 다음이 된다.

$$
a_0'(t)=\frac2\theta\bigl(f(t)-a_0(t)\bigr)
$$

시각 $0$ 부터 값 $1$ 을 받기 시작하고 $\theta=1$ 이면 창의 평균은 $a_0(t)=t$ 로 오르다 $t=1$ 에서 $1$ 이 된다. 위 식의 해는 $1-e^{-2t}$ 이고 $t=1$ 에서 약 $0.86$ 이다. 과거의 $f$ 없이 지금의 계수와 지금의 값만으로 평균을 따라간다.

# 정의

## 창 위의 Fourier 계수

창 $\lbrack t-\theta,t\rbrack$ 위의 확률측도 $dx/\theta$ 에 대한 내적을 쓰고, 창 안의 위치를 $s=(x-t)/\theta+1\in\lbrack 0,1\rbrack$ 로 잰다. 정수 $k$ 에 대해 계수는 다음과 같다.

$$
c_k(t)=\frac1\theta\int_{t-\theta}^tf(x)\thinspace e^{-2\pi iks}\thinspace dx
$$

$\vert k\vert\le M$ 인 계수 $N=2M+1$ 개로 복원한 $\sum_kc_k(t)\thinspace e^{2\pi iks}$ 은 창 위에서 $f$ 를 진동수 $M$ 이하의 삼각다항식으로 근사한 것 가운데 이 내적의 제곱 오차가 가장 작은 것이다. 직관 절의 $a_0$ 은 $c_0$ 이다.

## HiPPO-FouT 방정식

$\mathbf 1$ 을 성분이 모두 $1$ 인 벡터로 둔다. 계수 벡터 $c=(c_{-M},\dots,c_M)$ 이 따르는 다음 선형 미분방정식을 **HiPPO-FouT 방정식** 이라 한다[^1][^2].

$$
c'(t)=\frac1\theta\bigl(D-2\thinspace\mathbf 1\mathbf 1^{\top}\bigr)c(t)+\frac2\theta\thinspace\mathbf 1\thinspace f(t),\qquad D=\mathrm{diag}(2\pi ik)\_{\vert k\vert\le M}
$$

$M=0$ 이면 직관 절의 식이다. $k$ 번째 줄은 계수 $c_k$ 가 진동수 $k$ 로 돌면서, 지금 값 $f(t)$ 와 창 끝의 복원값 $\sum_jc_j$ 의 차를 받는다는 뜻이다.

# 성질

## 방정식의 유도

$c_k$ 를 미분하면 창의 두 끝에서 나오는 항과 $e^{-2\pi iks}$ 가 창과 함께 움직이는 항이 나온다. $s=1$ 과 $s=0$ 에서 $e^{-2\pi iks}=1$ 이고, $\partial_te^{-2\pi iks}=\frac{2\pi ik}{\theta}e^{-2\pi iks}$ 이다.

$$
c_k'=\frac1\theta\bigl(f(t)-f(t-\theta)\bigr)+\frac{2\pi ik}{\theta}\thinspace c_k
$$

창 끝의 복원값은 $\sum_jc_j$ 이다. $f(t-\theta)$ 를 $2\sum_jc_j-f(t)$ 로 바꾸면 정의 절의 방정식이 나온다.

## 실수 꼴

$f$ 가 실수값이면 $c_{-k}=\overline{c_k}$ 이다. $a_0=c_0$ 과 $k\ge 1$ 에 대해 $a_k=\sqrt2\thinspace\mathrm{Re}\thinspace c_k$, $b_k=-\sqrt2\thinspace\mathrm{Im}\thinspace c_k$ 로 두면 $a_k$, $b_k$ 는 정규직교 기저 $\sqrt2\cos 2\pi ks$, $\sqrt2\sin 2\pi ks$ 에 대한 계수이고, 방정식은 다음과 같다.

$$
\begin{aligned}
a_0'&=\frac1\theta\Bigl(-2a_0-2\sqrt2\textstyle\sum_ja_j+2f(t)\Bigr)\cr
a_k'&=\frac1\theta\Bigl(-2\sqrt2\thinspace a_0-4\textstyle\sum_ja_j+2\pi k\thinspace b_k+2\sqrt2\thinspace f(t)\Bigr)\cr
b_k'&=-\frac{2\pi k}{\theta}\thinspace a_k
\end{aligned}
$$

합은 $1\le j\le M$ 에 대해서다. 사인 계수 $b_k$ 는 창의 두 끝에서 $0$ 이라 들어온 값과 나간 값을 받지 않고, 코사인 계수와 맞물려 돌기만 한다.

## 정확성

방정식에서 근사한 것은 $f(t-\theta)$ 를 $2\sum_jc_j-f(t)$ 로 바꾼 한 자리뿐이다. $f$ 가 주기 $\theta$ 이고 진동수 $M$ 이하인 삼각다항식이면 $f(t-\theta)=f(t)$ 이고 복원값 $\sum_jc_j$ 도 $f(t)$ 이므로 바꾼 값이 정확하다. 그러면 방정식의 해는 정확한 계수다.

## 대각과 계수 1 의 합

상태 행렬 $D-2\thinspace\mathbf 1\mathbf 1^{\top}$ 은 대각 행렬과 계수(rank) 1 행렬의 합이다. [구조적 상태 공간 모형](structured-state-space-models.md)은 이 꼴의 행렬에서 합성곱 핵을 빠르게 계산한다.

$D$ 는 반에르미트이므로 입력이 $0$ 일 때 다음이 성립한다.

$$
\frac{d}{dt}\Vert c\Vert^2=-\frac4\theta\thinspace\Bigl\vert\sum_jc_j\Bigr\vert^2\le 0
$$

계수 벡터의 길이는 늘지 않고, 창 끝의 복원값이 $0$ 이 아닌 동안 줄어든다.

## 시불변성

계수 $1/\theta$ 가 상수이므로 HiPPO-FouT 방정식은 HiPPO-LegT 방정식처럼 선형 시불변 시스템(linear time-invariant system)이다. 입력 $f$ 에서 계수 $c$ 로 가는 사상은 고정된 핵과의 [합성곱](convolution.md)이다.

# 활용

- 창이 있는 기억. HiPPO-LegT 와 같이 길이 $\theta$ 의 창 밖으로 나간 과거를 잊는 기억이 필요한 순환 모형의 상태 갱신식으로 쓴다[^1].
- S4 의 초기값. Gu 등은 S4(structured state space sequence model)의 상태 행렬을 HiPPO-FouT 행렬로 초기화한 S4-FouT 를 썼다[^2]. 상태 행렬이 대각과 계수 1 의 합이므로 S4 의 핵 계산을 그대로 쓴다.

## 미끄러지는 이산 Fourier 변환

길이 $N$ 의 버퍼에 지난 표본을 쌓아 두면 [이산 Fourier 변환](fourier.md)(discrete Fourier transform, DFT) 계수를 다음과 같이 고칠 수 있다. 이 갱신을 sliding DFT 라 한다.

$$
X_k\lbrack n\rbrack=e^{2\pi ik/N}\bigl(X_k\lbrack n-1\rbrack+x\lbrack n\rbrack-x\lbrack n-N\rbrack\bigr)
$$

유도 절의 정확한 식을 이산화한 것이다. HiPPO-FouT 는 버퍼 대신 $x\lbrack n-N\rbrack$ 를 계수로 복원한 값으로 바꾼다.

[^1]: A. Gu, T. Dao, S. Ermon, A. Rudra, C. Ré, "HiPPO: Recurrent memory with optimal polynomial projections", *Advances in Neural Information Processing Systems* 33 (2020).
[^2]: A. Gu, I. Johnson, A. Timalsina, A. Rudra, C. Ré, "How to train your HiPPO: State space models with generalized orthogonal basis projections", *International Conference on Learning Representations* (2023).

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)
- [HiPPO-LegT](hippo-legt.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #signal_processing #analysis
