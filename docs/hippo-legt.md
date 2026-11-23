# HiPPO-LegT

# 개요

**HiPPO-LegT(translated Legendre)** 는 신호를 받는 동안 최근 길이 $\theta$ 의 구간만 Legendre 다항식으로 근사하고, 그 계수를 선형 미분방정식으로 고쳐 가는 [HiPPO](hippo.md)의 한 판본이다. 시각 $10$ 까지 $1$ 이고 그 뒤로 $0$ 인 신호를 시각 $100$ 에 보면, 처음부터의 평균은 $0.1$ 로 오래전 일을 여전히 담고 있다. 최근 $20$ 동안의 평균은 $0$ 이다.

HiPPO-LegT 는 처음부터의 구간 대신 지금에서 끝나는 길이 $\theta$ 의 창을 쓰고, 창 밖으로 나간 과거는 잊는다.

# 직관

창 $\lbrack t-\theta,t\rbrack$ 의 평균 $c_0(t)=\frac1\theta\int_{t-\theta}^tf(x)\thinspace dx$ 를 미분하면 들어온 값과 나간 값의 차가 나온다.

$$
c_0'(t)=\frac1\theta\bigl(f(t)-f(t-\theta)\bigr)
$$

$f(t-\theta)$ 는 이미 지나간 값이라 기억에 없다. 기억에 있는 것은 계수뿐이므로 $f(t-\theta)$ 를 계수로 복원한 값으로 바꾼다. 계수가 $c_0$ 하나이면 복원한 함수는 상수 $c_0$ 이고, 식은 $c_0'=\frac1\theta(-c_0+f(t))$ 가 된다. 처음부터의 평균을 고치는 HiPPO 문서의 식에서 $1/t$ 가 상수 $1/\theta$ 로 바뀐 것이다.

계수를 하나 더 둔다. 창에서 $1$ 과 직교하는 일차식 $g_1(x)=\sqrt3\thinspace\bigl(2(x-t)/\theta+1\bigr)$ 은 창의 오른쪽 끝에서 $\sqrt3$, 왼쪽 끝에서 $-\sqrt3$ 이다. 복원한 함수 $c_0+c_1g_1$ 의 왼쪽 끝 값 $c_0-\sqrt3\thinspace c_1$ 을 $f(t-\theta)$ 자리에 넣으면 다음이 나온다.

$$
\begin{aligned}
c_0'&=\frac1\theta\bigl(-c_0+\sqrt3\thinspace c_1+f(t)\bigr)\cr
c_1'&=\frac1\theta\bigl(-\sqrt3\thinspace c_0-3c_1+\sqrt3\thinspace f(t)\bigr)
\end{aligned}
$$

둘째 식은 $c_1$ 을 미분할 때 $g_1$ 이 창과 함께 움직이는 항 $-2\sqrt3\thinspace c_0/\theta$ 를 더한 것이다. 이번에도 과거의 $f$ 없이 지금의 계수와 지금의 값만으로 계수가 고쳐진다.

# 정의

## 미끄러지는 창의 투영

시각 $t$ 에서 창 $\lbrack t-\theta,t\rbrack$ 위의 확률측도 $dx/\theta$ 에 대한 내적을 쓴다. 이 내적에 대해 정규직교인 다항식은 Legendre 다항식 $P_n$ 을 옮긴 다음 함수다.

$$
g_n^{(t)}(x)=\sqrt{2n+1}\thinspace P_n\Bigl(\frac{2(x-t)}{\theta}+1\Bigr),\qquad n=0,1,\dots,N-1
$$

계수는 $c_n(t)=\frac1\theta\int_{t-\theta}^tf(x)\thinspace g_n^{(t)}(x)\thinspace dx$ 다. $\sum_nc_n(t)g_n^{(t)}$ 은 창 위에서 $f$ 를 차수 $N-1$ 이하의 다항식으로 근사한 것 가운데 이 내적의 제곱 오차가 가장 작은 것이다. 직관 절의 $c_0$, $c_1$ 이 $N=2$ 인 경우다.

## HiPPO-LegT 방정식

다음 선형 미분방정식을 **HiPPO-LegT 방정식** 이라 한다[^1].

$$
c'(t)=-\frac1\theta\thinspace A\thinspace c(t)+\frac1\theta\thinspace B\thinspace f(t)
$$

$$
A_{nk}=\sqrt{2n+1}\sqrt{2k+1}\cdot\begin{cases}1&n\ge k\cr (-1)^{n-k}&n\lt k\end{cases},\qquad B_n=\sqrt{2n+1}
$$

$N=2$ 이면 $A$, $B$ 가 다음과 같고, 두 줄이 직관 절의 두 식이다.

$$
A=\begin{pmatrix}1&-\sqrt3\cr \sqrt3&3\end{pmatrix},\qquad B=\begin{pmatrix}1\cr \sqrt3\end{pmatrix}
$$

HiPPO 의 LegS 행렬은 아래 삼각이지만 LegT 행렬은 위 삼각 부분도 $0$ 이 아니다. 위 삼각 부분은 $f(t-\theta)$ 를 모든 계수로 복원한 데서 나온다.

# 성질

## 방정식의 유도

$c_n$ 을 미분하면 창의 두 끝에서 나오는 항과 $g_n^{(t)}$ 가 움직이는 항이 나온다. $P_n(1)=1$, $P_n(-1)=(-1)^n$ 이므로 두 끝의 값은 $\sqrt{2n+1}$ 과 $(-1)^n\sqrt{2n+1}$ 이다.

$$
c_n'=\frac{\sqrt{2n+1}}{\theta}\Bigl(f(t)-(-1)^nf(t-\theta)\Bigr)+\frac1\theta\int_{t-\theta}^tf(x)\thinspace\partial_tg_n^{(t)}(x)\thinspace dx
$$

$P_n'=\sum(2k+1)P_k$ 이고 합은 $k\lt n$, $n-k$ 홀수에 대해서다. 그래서 마지막 항은 $-\frac2\theta\sum\sqrt{2n+1}\sqrt{2k+1}\thinspace c_k$ 로 같은 범위의 합이다. $f(t-\theta)$ 를 $\sum_k(-1)^k\sqrt{2k+1}\thinspace c_k$ 로 바꾸면 $c_k$ 의 계수가 $-\frac1\theta(-1)^{n-k}\sqrt{2n+1}\sqrt{2k+1}$ 이다.

두 항을 합치면 $k\lt n$ 이고 $n-k$ 가 홀수인 자리에서 $(-1)+2=1$, 나머지 자리에서 $(-1)^{n-k}$ 가 되어 정의 절의 $A$ 가 나온다[^1].

## 정확성

방정식에서 근사한 것은 $f(t-\theta)$ 를 복원한 값으로 바꾼 한 자리뿐이다. 그러므로 $f$ 가 모든 창 위에서 차수 $N-1$ 이하의 다항식이면, 곧 $f$ 자신이 그런 다항식이면 방정식의 해는 정확한 계수다. 그 밖에서는 창 왼쪽 끝의 복원 오차가 계수에 쌓인다.

## 시불변성

LegS 방정식의 계수 $1/t$ 는 시각에 따라 변하지만 LegT 방정식의 계수 $1/\theta$ 는 상수다. 그래서 LegT 방정식은 선형 시불변 시스템(linear time-invariant system)이고, 입력 $f$ 에서 계수 $c$ 로 가는 사상이 고정된 핵과의 [합성곱](convolution.md)이다. 그 대가로 $\theta$ 를 미리 정해야 하고, HiPPO 문서의 시간 축척 불변성은 성립하지 않는다.

# 활용

- Legendre 기억 단위. Voelker, Kajić, Eliasmith 의 Legendre 기억 단위(Legendre memory unit, LMU)는 순환 신경망의 상태를 이 방정식으로 고친다[^2]. Gu 등은 LMU 의 갱신식이 HiPPO-LegT 방정식임을 보였다[^1].
- 구조적 상태 공간 모형. LegT 방정식은 상태 행렬이 상수인 선형 상태 공간 모형이므로, [구조적 상태 공간 모형](structured-state-space-models.md)처럼 서열 전체의 출력을 합성곱 핵 하나로 한꺼번에 계산한다[^3].
- 미끄러지는 창의 다른 기저. Legendre 다항식 대신 창 위의 Fourier 기저를 쓴 것을 HiPPO-FouT 라 한다[^1].

[^1]: A. Gu, T. Dao, S. Ermon, A. Rudra, C. Ré, "HiPPO: Recurrent memory with optimal polynomial projections", *Advances in Neural Information Processing Systems* 33 (2020).
[^2]: A. Voelker, I. Kajić, C. Eliasmith, "Legendre memory units: Continuous-time representation in recurrent neural networks", *Advances in Neural Information Processing Systems* 32 (2019).
[^3]: A. Gu, K. Goel, C. Ré, "Efficiently modeling long sequences with structured state spaces", *International Conference on Learning Representations* (2022).

# 연관 문서

## 선수지식

- [HiPPO](hippo.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #analysis #signal_processing
