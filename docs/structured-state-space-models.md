# 구조적 상태 공간 모형

# 개요

**구조적 상태 공간 모형(structured state space model, S4)** 은 서열의 원소를 하나씩 받으며 작은 상태 벡터를 원소마다 같은 선형 규칙으로 고치고, 그 상태에서 출력을 내는 서열 모형이다. 측정값 $1, 0, 2$ 를 차례로 받으며, 앞서 쌓인 합을 반으로 줄이고 새 값을 더하는 계산이 이 꼴이다. 길이가 수만인 서열에서 [주의 메커니즘](attention-mechanism.md)은 무게를 길이의 제곱만큼 계산하고, 상태를 고치는 보통의 순환 신경망은 앞 원소를 다 처리해야 다음 원소를 처리할 수 있다.

상태 공간 모형은 규칙이 원소와 무관한 선형 사상이므로, 같은 출력을 원소마다 상태를 고치는 순환으로도, 서열 전체를 한꺼번에 처리하는 [합성곱](convolution.md)으로도 계산한다.

# 직관

[선형 주의](linear-attention.md)의 인과 판은 낱말 하나를 받을 때마다 상태에 $\phi(\mathbf k_i)\mathbf v_i^{\mathrm T}$ 를 더한다. 더하기만 하므로 처음 낱말과 방금 낱말이 상태에 같은 크기로 남는다. 오래된 원소의 몫을 줄이려면 더하기 전에 상태에 $1$ 보다 작은 수를 곱한다.

상태가 수 하나인 경우를 본다. 입력 $x_0, x_1, x_2$ 를 받아 다음과 같이 상태 $h_k$ 를 고치고, 출력 $y_k$ 를 상태 그대로 둔다.

$$h_k=0.5\thinspace h_{k-1}+x_k,\qquad y_k=h_k,\qquad h_{-1}=0$$

입력이 $1, 0, 2$ 이면 상태는 $1$, $0.5\cdot 1+0=0.5$, $0.5\cdot 0.5+2=2.25$ 다. 출력 하나에 곱셈 한 번과 덧셈 한 번이 들고, 저장하는 값은 $h_{k-1}$ 하나다. 이것은 [IIR 필터](iir-filters.md)의 1 차 점화식과 같은 꼴이다.

마지막 상태를 풀어 쓰면 다음과 같다.

$$y_2=0.25\cdot x_0+0.5\cdot x_1+1\cdot x_2=0.25+0+2=2.25$$

$y_2$ 는 입력을 거꾸로 놓고 수열 $K=(1,\thinspace 0.5,\thinspace 0.25)$ 를 곱해 더한 값이다. 모든 $k$ 에서 $y_k=\sum_{j\le k}K_{k-j}x_j$ 이므로 출력은 입력과 $K$ 의 이산 합성곱이다.

곱하는 수 $0.5$ 가 입력에 따라 바뀌지 않으므로 $K$ 는 입력을 보기 전에 정해진다. 그래서 학습할 때는 $K$ 를 먼저 만들고 [고속 Fourier 변환](fft.md)으로 서열 전체의 출력을 한꺼번에 계산하고, 낱말을 하나씩 생성할 때는 점화식으로 계산한다.

$0.5$ 대신 $0.9$ 를 곱하면 $K$ 가 천천히 줄어 먼 과거가 오래 남는다. 상태를 수 $N$ 개로 늘리고 수마다 다른 비율로 줄게 하면 짧은 기억과 긴 기억을 함께 둔다. 이 비율들을 원소와 무관한 행렬로 정하고 학습하는 모형을 상태 공간 모형이라 한다.

# 정의

## 연속 상태 공간 모형

**연속 상태 공간 모형(continuous state space model)** 은 입력 신호 $x(t)\in\mathbb R$ 에서 출력 $y(t)\in\mathbb R$ 를 내는 다음 [상미분방정식](ordinary-differential-equations.md)이다.

$$h'(t)=A\thinspace h(t)+B\thinspace x(t),\qquad y(t)=C\thinspace h(t)+D\thinspace x(t)$$

$h(t)\in\mathbb C^N$ 이 상태이고, $A$ 는 $N\times N$ 행렬, $B$ 는 $N\times 1$ 행렬, $C$ 는 $1\times N$ 행렬, $D$ 는 수다. $N$ 을 상태 크기라 한다.

## 이산화

간격 $\Delta\gt 0$ 마다 입력을 받고 그 사이에서 입력이 일정하다고 두면, [행렬 지수](matrix-exponential.md)로 다음 점화식이 나온다. 이것을 **영차 유지 이산화(zero-order hold discretization)** 라 한다.

$$h_k=\bar A\thinspace h_{k-1}+\bar B\thinspace x_k,\qquad y_k=C\thinspace h_k+D\thinspace x_k$$

$$\bar A=e^{\Delta A},\qquad\bar B=A^{-1}\bigl(e^{\Delta A}-I\bigr)B$$

직관 절의 점화식은 $N=1$, $A=-\ln 2$, $B=2\ln 2$, $C=1$, $D=0$, $\Delta=1$ 에서 나온다. $\bar A=e^{-\ln 2}=0.5$ 이고 $\bar B=(0.5-1)\cdot 2\ln 2/(-\ln 2)=1$ 이다.

## 합성곱 핵

다음 수열 $K=(K_0, K_1, \dots, K_{L-1})$ 을 이 모형의 **합성곱 핵(convolution kernel)** 이라 한다. $L$ 은 서열의 길이다.

$$K_k=C\thinspace\bar A^{k}\thinspace\bar B$$

직관 절의 예에서 $K_k=0.5^k$ 이고 처음 세 항이 $1, 0.5, 0.25$ 다.

## 구조적 상태 공간 모형

**구조적 상태 공간 모형** 은 $A$ 를 계산하기 쉬운 꼴로 제한한 상태 공간 모형이다. Gu, Goel, Ré 의 S4 는 $A$ 를 대각 행렬과 계수 $1$ 행렬의 합으로 두었다[^1]. 이어진 S4D 는 $A=\mathrm{diag}(\lambda_1,\dots,\lambda_N)$ 인 대각 행렬로 두었고, 이때 상태의 성분마다 따로 $h_{k,n}=\bar a_n h_{k-1,n}+\bar b_n x_k$ 를 고친다. 여기서 $\bar a_n=e^{\Delta\lambda_n}$ 이다[^2].

모형의 한 층은 입력 채널 $H$ 개에 서로 다른 $A, B, C, D, \Delta$ 를 가진 상태 공간 모형을 하나씩 따로 걸고, 그 출력에 채널을 섞는 선형 사상과 비선형 함수를 붙인 것이다. $A, B, C, D, \Delta$ 는 학습하는 매개변수다.

# 성질

## 순환과 합성곱의 동치

$h_{-1}=0$ 이면 모든 $k$ 에서 다음이 성립한다.

$$y_k=\sum_{j=0}^{k}K_{k-j}\thinspace x_j+D\thinspace x_k$$

$h_k=\sum_{j\le k}\bar A^{k-j}\bar Bx_j$ 를 $k$ 에 대한 귀납법으로 보인다. $k$ 에서 성립하면 $h_{k+1}=\bar A h_k+\bar Bx_{k+1}=\sum_{j\le k+1}\bar A^{k+1-j}\bar Bx_j$ 다. 양변에 $C$ 를 곱하면 위 식이 나온다.

## 안정성

$A$ 가 대각이면 $\vert\bar a_n\vert=e^{\Delta\thinspace\mathrm{Re}\thinspace\lambda_n}$ 이다. 모든 $n$ 에서 $\mathrm{Re}\thinspace\lambda_n\lt 0$ 이면 $\vert\bar a_n\vert\lt 1$ 이고 핵 $K_k$ 가 $k$ 에 대해 기하급수로 $0$ 에 간다.

같은 $\lambda_n$ 에서 $\Delta$ 가 크면 $\bar a_n$ 이 $0$ 에 가까워 기억이 짧고, $\Delta$ 가 작으면 기억이 길다. 직관 절의 예에서 $\Delta=2$ 로 두면 $\bar a=0.25$ 다.

## 대각 핵의 계산

$A$ 가 대각이면 핵은 등비수열 $N$ 개의 일차결합이다.

$$K_k=\sum_{n=1}^{N}c_n\thinspace\bar b_n\thinspace\bar a_n^{\thinspace k}$$

핵 전체를 만드는 데 $NL$ 에 비례하는 곱셈이 들고, 고속 Fourier 변환으로 합성곱을 계산하는 데 $L\log L$ 에 비례하는 곱셈이 든다. 점화식으로 계산해도 $NL$ 이지만 $k$ 를 차례로 거쳐야 하므로 병렬로 계산할 수 없다. 대각이 아닌 일반 $A$ 는 $\bar A^k$ 를 거듭 곱해야 해서 $N^2L$ 이 든다. S4 는 대각 더하기 계수 $1$ 꼴에서 핵의 [생성함수](generating-functions.md)를 Cauchy 핵의 계산으로 바꾸어 비용을 줄였다[^1].

## 전달 함수

핵의 [z 변환](z-transform.md)은 다음 유리함수다. 마지막 등호는 $A$ 가 대각일 때다.

$$\sum_{k\ge 0}K_kz^{-k}=C\bigl(I-\bar Az^{-1}\bigr)^{-1}\bar B=\sum_{n=1}^{N}\frac{c_n\bar b_n}{1-\bar a_nz^{-1}}$$

극이 $\bar a_1,\dots,\bar a_N$ 이므로 상태 크기 $N$ 인 상태 공간 모형은 차수 $N$ 인 IIR 필터다. 안정성 절의 조건은 극이 모두 단위원 안에 있다는 조건이다.

## 입력에 따라 바뀌는 계수와 병렬 스캔

Gu 와 Dao 의 Mamba 는 $\Delta$, $B$, $C$ 를 입력 $x_k$ 의 함수로 두어, 입력마다 무엇을 상태에 남기고 무엇을 잊을지 정한다[^3]. 이 모형을 **선택적 상태 공간 모형(selective state space model)** 이라 한다. 이때 $\bar A_k$ 가 $k$ 마다 달라 핵이 하나로 정해지지 않으므로 합성곱 계산은 쓸 수 없다.

대신 갱신 $h\mapsto\bar a_kh+\bar b_kx_k$ 를 쌍 $(\bar a_k, \bar b_kx_k)$ 로 적으면 두 갱신의 합성은 다음 쌍이다.

$$(a_2,\thinspace u_2)\circ(a_1,\thinspace u_1)=(a_2a_1,\thinspace a_2u_1+u_2)$$

이 연산은 결합법칙을 만족하므로, 모든 $h_k$ 를 접두 합과 같은 방법으로 깊이 $\log L$ 의 병렬 계산으로 구한다.

## 선형 주의와의 관계

분모를 뺀 인과 선형 주의 $S_i=S_{i-1}+\phi(\mathbf k_i)\mathbf v_i^{\mathrm T}$ 는 $\bar A=I$ 이고 입력 항이 키와 값에서 정해지는 선택적 상태 공간 모형이다. $\bar A=I$ 이면 $\vert\bar a_n\vert=1$ 이므로 오래된 낱말의 몫이 줄지 않는다. 상태 공간 모형은 $\vert\bar a_n\vert\lt 1$ 로 오래된 몫을 줄인다.

# 활용

- 긴 서열 분류. 길이 $16384$ 의 픽셀 서열로 두 점이 이어졌는지 맞히는 Long Range Arena 의 Path-X 과제를 S4 가 처음으로 우연보다 높은 정확도로 풀었다[^1].
- 음성 생성. 표본을 하나씩 내는 음성 파형 생성에서, 학습은 합성곱으로 병렬로 하고 생성은 점화식으로 표본마다 일정한 비용으로 한다[^4].
- 언어 모형. Mamba 는 선택적 상태 공간 모형을 쌓아 [Transformer](transformers.md)와 비슷한 크기에서 비슷한 언어 모형 성능을 내고, 생성할 때 낱말당 비용이 문맥 길이와 무관하다[^3].
- 상태 공간 표현. 정의 절의 연속 모형은 제어와 [Kalman 필터](kalman-filter.md)에서 쓰는 선형 시불변 상태 공간 표현과 같은 식이다. 상태 공간 모형은 $A, B, C$ 를 자료에서 학습한다는 점이 다르다.

[^1]: A. Gu, K. Goel, C. Ré, "Efficiently modeling long sequences with structured state spaces", *International Conference on Learning Representations* (2022).
[^2]: A. Gu, A. Gupta, K. Goel, C. Ré, "On the parameterization and initialization of diagonal state space models", *Advances in Neural Information Processing Systems* 35 (2022).
[^3]: A. Gu, T. Dao, "Mamba: Linear-time sequence modeling with selective state spaces", arXiv:2312.00752 (2023).
[^4]: K. Goel, A. Gu, C. Donahue, C. Ré, "It's raw! Audio generation with state-space models", *Proceedings of the 39th International Conference on Machine Learning* (2022).

# 연관 문서

## 선수지식

- [선형 주의](linear-attention.md)
- [IIR 필터](iir-filters.md)
- [행렬 지수](matrix-exponential.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #signal_processing #linear_algebra
