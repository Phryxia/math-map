# HiPPO

# 개요

**HiPPO(high-order polynomial projection operators)** 는 신호를 받는 동안 지금까지의 신호 전체를 차수 $N-1$ 이하의 다항식으로 근사하고, 그 계수 $N$ 개를 상태로 삼아 계속 고쳐 나가는 방법이다. 측정값을 하나씩 받으며 지금까지의 평균만 기억하면, 값이 꾸준히 오르는 신호에서 처음과 지금의 차이를 잃는다. HiPPO 는 평균 하나 대신 [직교다항식](orthogonal-polynomials.md) 계수 여러 개를 기억하고, 그 계수들이 따르는 선형 미분방정식을 주어 [구조적 상태 공간 모형](structured-state-space-models.md)의 상태 행렬로 쓴다.

# 직관

신호 $f$ 를 시각 $0$ 부터 받는다. 기억할 수를 하나로 정하고 지금까지의 평균을 기억한다. 시각 $t$ 의 평균 $c_0(t)=\frac1t\int_0^tf(x)\thinspace dx$ 를 미분하면 다음이 나온다.

$$c_0'(t)=-\frac1t\thinspace c_0(t)+\frac1t\thinspace f(t)$$

평균을 새로 구하려고 과거의 $f$ 를 다시 볼 필요가 없고, 지금의 평균과 지금의 값만 있으면 된다. 측정값을 하나씩 받을 때의 평균 $m_k=(1-\frac1k)m_{k-1}+\frac1kf_k$ 가 이 식을 시간 간격 $1$ 로 나눈 것이다.

$f(x)=x$ 이면 $c_0(t)=t/2$ 다. 평균만으로는 신호가 처음부터 $t/2$ 였는지, $0$ 에서 $t$ 까지 올라왔는지 가를 수 없다. 그래서 수를 하나 더 기억한다. 구간 $\lbrack 0,t\rbrack$ 에서 $1$ 과 직교하는 일차식 $g_1(x)=\sqrt3\thinspace(2x/t-1)$ 을 잡고 계수를 $c_1(t)=\frac1t\int_0^tf(x)g_1(x)\thinspace dx$ 로 둔다. $f(x)=x$ 에서 $c_1(t)=\sqrt3\thinspace t/6$ 이고, 두 계수로 만든 일차식은 다음과 같다.

$$c_0(t)+c_1(t)\thinspace g_1(x)=\frac t2+\frac t2\Bigl(\frac{2x}{t}-1\Bigr)=x$$

두 수로 지금까지의 신호 전체가 정확히 복원된다. $c_1$ 을 미분해 $\int_0^txf(x)\thinspace dx$ 를 $c_0$, $c_1$ 로 바꾸면 다음 식이 나온다.

$$c_1'(t)=\frac1t\Bigl(-\sqrt3\thinspace c_0(t)-2\thinspace c_1(t)+\sqrt3\thinspace f(t)\Bigr)$$

이번에도 과거의 $f$ 없이 지금의 계수와 지금의 값만으로 계수가 고쳐진다. 이렇게 다항식 계수 $N$ 개를 선형 미분방정식으로 고쳐 가는 방법이 HiPPO 다.

# 정의

## 투영

시각 $t$ 에서 구간 $\lbrack 0,t\rbrack$ 위의 확률측도 $dx/t$ 에 대한 내적을 쓴다. 이 내적에 대해 정규직교인 다항식은 Legendre 다항식 $P_n$ 을 옮긴 다음 함수다.

$$g_n^{(t)}(x)=\sqrt{2n+1}\thinspace P_n\Bigl(\frac{2x}{t}-1\Bigr),\qquad n=0,1,\dots,N-1$$

**HiPPO 계수(HiPPO coefficients)** 는 다음 $c(t)=(c_0(t),\dots,c_{N-1}(t))$ 다.

$$c_n(t)=\frac1t\int_0^tf(x)\thinspace g_n^{(t)}(x)\thinspace dx$$

$\sum_nc_n(t)g_n^{(t)}$ 는 $f$ 를 $\lbrack 0,t\rbrack$ 에서 차수 $N-1$ 이하의 다항식으로 근사한 것 가운데 이 내적의 제곱 오차가 가장 작은 것이다[^1]. 직관 절의 $c_0$, $c_1$ 이 $N=2$ 인 경우다.

## HiPPO-LegS 방정식

$c(t)$ 는 다음 선형 미분방정식을 만족한다. 이것을 **HiPPO-LegS 방정식** 이라 한다(LegS 는 scaled Legendre)[^1].

$$c'(t)=-\frac1t\thinspace A\thinspace c(t)+\frac1t\thinspace B\thinspace f(t)$$

$$A_{nk}=\begin{cases}\sqrt{2n+1}\sqrt{2k+1}&n\gt k\cr n+1&n=k\cr 0&n\lt k\end{cases},\qquad B_n=\sqrt{2n+1}$$

$N=2$ 이면 $A$, $B$ 가 다음과 같고, 두 줄이 직관 절의 두 식이다.

$$
A=\begin{pmatrix}1&0\cr \sqrt3&2\end{pmatrix},\qquad B=\begin{pmatrix}1\cr \sqrt3\end{pmatrix}
$$

## 이산화

시간 간격 $1$ 의 앞쪽 [Euler 방법](euler-method.md)으로 나누면 $k$ 번째 측정값 $f_k$ 를 받을 때 다음과 같이 고친다.

$$c_k=\Bigl(I-\frac1kA\Bigr)c_{k-1}+\frac1kB\thinspace f_k$$

$N=1$ 이면 측정값의 평균을 하나씩 고치는 식이다.

# 성질

## 시간 축척 불변성

$\tilde f(x)=f(\alpha x)$ $(\alpha\gt 0)$ 이면 $\tilde c(t)=c(\alpha t)$ 다. $x=y/\alpha$ 로 바꾸면 다음이 나온다.

$$\frac1t\int_0^tf(\alpha x)\thinspace g_n^{(t)}(x)\thinspace dx=\frac{1}{\alpha t}\int_0^{\alpha t}f(y)\thinspace g_n^{(\alpha t)}(y)\thinspace dy$$

같은 신호를 빠르게 받든 느리게 받든 같은 계수가 나오므로, 측정 간격을 미리 정하지 않아도 된다[^1].

## 정규 행렬과 계수 1 행렬의 합

$p_n=\sqrt{2n+1}$ 로 두면 다음이 성립한다.

$$A=\frac12I+S+\frac12\thinspace pp^{\mathrm T},\qquad S^{\mathrm T}=-S$$

$A-\frac12pp^{\mathrm T}$ 의 성분은 $n\gt k$ 에서 $\frac12p_np_k$, $n\lt k$ 에서 $-\frac12p_np_k$, 대각에서 $n+1-\frac{2n+1}{2}=\frac12$ 이므로 $\frac12I$ 와 반대칭 행렬의 합이다. $\frac12I+S$ 는 정규 행렬이라 유니터리 행렬로 대각화된다. 구조적 상태 공간 모형의 S4 는 이 분해를 써서 상태 행렬 $-A$ 의 합성곱 핵을 빠르게 계산한다[^2].

## 근사 오차

$f$ 가 $\lbrack 0,t\rbrack$ 에서 $L$-Lipschitz 이면 위 내적의 제곱 오차의 제곱근이 $O(tL/\sqrt N)$ 이고, $f$ 가 $k$ 번 미분가능하고 $k$ 계 도함수가 유계이면 $O(t^kN^{-k+1/2})$ 다[^1]. 매끄러운 신호일수록 적은 계수로 과거 전체를 근사한다.

# 활용

- 구조적 상태 공간 모형의 초기값. S4 는 상태 행렬을 $-A$ 로 시작해 학습하고, 이 초기값을 무작위 행렬로 바꾸면 긴 서열 과제의 성능이 크게 떨어진다고 보고되었다[^2].
- 대각 상태 공간 모형. S4D 는 $-A$ 의 정규 부분 $-\frac12I-S$ 의 고윳값을 대각 상태 행렬의 초기값으로 쓴다[^3].
- 순환 신경망의 기억. Gu 등은 HiPPO-LegS 의 계수를 순환 신경망의 상태로 두어, 길이 수천의 서열에서 오래전 입력을 기억하는 과제를 풀었다[^1].

[^1]: A. Gu, T. Dao, S. Ermon, A. Rudra, C. Ré, "HiPPO: Recurrent memory with optimal polynomial projections", *Advances in Neural Information Processing Systems* 33 (2020).
[^2]: A. Gu, K. Goel, C. Ré, "Efficiently modeling long sequences with structured state spaces", *International Conference on Learning Representations* (2022).
[^3]: A. Gu, A. Gupta, K. Goel, C. Ré, "On the parameterization and initialization of diagonal state space models", *Advances in Neural Information Processing Systems* 35 (2022).

# 연관 문서

## 선수지식

- [구조적 상태 공간 모형](structured-state-space-models.md)
- [직교다항식](orthogonal-polynomials.md)

## 더 알아보기

- [HiPPO-LegT](hippo-legt.md)

#machine_learning #analysis #signal_processing
