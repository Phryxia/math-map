# 선형 주의

# 개요

**선형 주의(linear attention)** 는 주의 무게를 질의와 키 각각의 특성 벡터의 내적으로 바꾸어, 모든 질의–키 쌍의 무게를 만들지 않고 주의를 계산하는 방법이다. 낱말 $n$ 개의 문장에서 보통의 자기 주의는 무게 $n^2$ 개를 계산하고 저장하므로, 문장이 열 배 길어지면 비용이 백 배가 된다. 선형 주의는 키와 값을 먼저 한 행렬로 합쳐 두고 질의마다 그 행렬을 한 번 곱하므로 비용이 $n$ 에 비례한다.

# 직관

[주의 메커니즘](attention-mechanism.md) 문서의 예는 키 $(1,0)$, $(0,1)$, $(0.5,0.5)$ 와 질의 $(2,0)$ 이었고, 값은 키와 같았다. 무게 $\exp(\mathbf q\cdot\mathbf k_j)$ 는 질의와 키가 [지수함수](exponential-function.md) 안에서 섞여 있어, 질의마다 모든 키와의 무게를 따로 계산해야 한다.

지수함수 대신 성분마다 $1$ 을 더하는 사상 $\phi(\mathbf x)=\mathbf x+\mathbf 1$ 을 쓰고, 무게를 $\phi(\mathbf q)\cdot\phi(\mathbf k_j)$ 로 둔다. $\phi(\mathbf q)=(3,1)$ 이고 세 키는 $(2,1)$, $(1,2)$, $(1.5,1.5)$ 로 가므로 무게는 $7,5,6$ 이다. 합 $18$ 로 나누어 평균하면 다음이 나온다.

$$\frac{7(1,0)+5(0,1)+6(0.5,0.5)}{18}=\frac{(10,\thinspace 8)}{18}\approx(0.556,\thinspace 0.444)$$

이 계산을 곱셈 순서를 바꾸어 한다. 무게가 내적이므로 키 쪽만 먼저 모을 수 있다.

$$S=\sum_j\phi(\mathbf k_j)\thinspace\mathbf v_j^{\mathrm T}=\begin{pmatrix}2.75&1.75\cr 1.75&2.75\end{pmatrix},\qquad\mathbf z=\sum_j\phi(\mathbf k_j)=(4.5,\thinspace 4.5)$$

그러면 $\phi(\mathbf q)^{\mathrm T}S=(10,8)$ 이고 $\phi(\mathbf q)\cdot\mathbf z=18$ 이어서 같은 답이 나온다. $S$ 와 $\mathbf z$ 는 질의와 무관하므로 한 번만 만들고, 질의가 $n$ 개여도 질의마다 작은 행렬 곱 하나로 끝난다. 이렇게 무게를 특성 벡터의 내적으로 바꾸어 순서를 바꾼 계산을 선형 주의라 한다.

# 정의

## 특성 사상 주의

**특성 사상(feature map)** $\phi:\mathbb R^{d_k}\to\mathbb R^{r}$ 의 값이 모두 음이 아니라 하자. 질의 $\mathbf q_i$, 키 $\mathbf k_j$, 값 $\mathbf v_j$ 에 대해 다음 출력을 **선형 주의** 라 한다[^1].

$$\mathbf o_i=\frac{\phi(\mathbf q_i)^{\mathrm T}\sum_j\phi(\mathbf k_j)\mathbf v_j^{\mathrm T}}{\phi(\mathbf q_i)^{\mathrm T}\sum_j\phi(\mathbf k_j)}$$

분자의 합이 직관 절의 $S$ 이고 분모의 합이 $\mathbf z$ 다. Katharopoulos 등은 $\phi(x)=\mathrm{elu}(x)+1$ 을 성분마다 쓴다[^1]. 여기서 $\mathrm{elu}(x)$ 는 $x\ge0$ 에서 $x$, $x\lt 0$ 에서 $e^x-1$ 이다.

## 인과 선형 주의

언어 모형처럼 $i$ 번째 출력이 $j\le i$ 인 키만 보아야 하면, 합을 앞에서부터 누적한다.

$$S_i=S_{i-1}+\phi(\mathbf k_i)\mathbf v_i^{\mathrm T},\qquad\mathbf z_i=\mathbf z_{i-1}+\phi(\mathbf k_i),\qquad\mathbf o_i=\frac{\phi(\mathbf q_i)^{\mathrm T}S_i}{\phi(\mathbf q_i)\cdot\mathbf z_i}$$

이것을 **인과 선형 주의(causal linear attention)** 라 한다. 낱말 하나를 받을 때마다 크기 $r\times d_v$ 의 상태 $S_i$ 만 고치므로, 이미 본 낱말을 모두 저장할 필요가 없다.

# 성질

## 계산 비용

$S$ 와 $\mathbf z$ 를 만드는 데 $nrd_v$, 출력 $n$ 개를 만드는 데 $nrd_v$ 에 비례하는 곱셈이 든다. 보통의 자기 주의는 $n^2d_k$ 이므로, $n$ 이 $r$ 보다 크면 선형 주의가 싸다. 생성할 때 낱말 하나당 비용은 보통의 주의가 지금까지의 길이에 비례하고, 인과 선형 주의는 길이와 무관하다[^1].

## 무게 행렬의 계수

선형 주의의 무게를 정규화하기 전 행렬 $\bigl(\phi(\mathbf q_i)\cdot\phi(\mathbf k_j)\bigr)\_{ij}$ 는 $n\times r$ 행렬과 $r\times n$ 행렬의 곱이므로 계수가 $r$ 이하다. softmax 의 무게 행렬은 계수 제한이 없으므로, 질의마다 키 하나에 무게를 거의 다 주는 무게를 선형 주의는 정확히 나타내지 못한다. 직관 절에서도 "개가" 의 무게가 softmax 의 $0.665$ 에서 $0.389$ 로 내려갔다.

## 지수 핵의 양의 무작위 특성

$\boldsymbol\omega$ 가 표준 [정규분포](normal-distribution.md) $N(\mathbf 0,I)$ 를 따르면 모든 $\mathbf q,\mathbf k$ 에서 다음이 성립한다[^2].

$$\exp(\mathbf q\cdot\mathbf k)=\mathbb E_{\boldsymbol\omega}\Bigl\lbrack e^{\boldsymbol\omega\cdot\mathbf q-\Vert\mathbf q\Vert^2/2}\thinspace e^{\boldsymbol\omega\cdot\mathbf k-\Vert\mathbf k\Vert^2/2}\Bigr\rbrack$$

정규분포의 [적률생성함수](moment-generating-function.md)에서 $\mathbb E\lbrack e^{\boldsymbol\omega\cdot\mathbf a}\rbrack=e^{\Vert\mathbf a\Vert^2/2}$ 이고, $\mathbf a=\mathbf q+\mathbf k$ 를 넣으면 $\Vert\mathbf q+\mathbf k\Vert^2/2-\Vert\mathbf q\Vert^2/2-\Vert\mathbf k\Vert^2/2=\mathbf q\cdot\mathbf k$ 다. $\boldsymbol\omega$ 를 $r$ 개 뽑아 $\phi(\mathbf x)$ 의 성분을 $e^{\boldsymbol\omega_l\cdot\mathbf x-\Vert\mathbf x\Vert^2/2}/\sqrt r$ 로 두면, $\phi(\mathbf q)\cdot\phi(\mathbf k)$ 는 softmax 무게의 분자를 편향 없이 추정하고 값이 항상 양수다. 이 특성 사상을 쓴 선형 주의를 Performer 라 한다[^2].

# 활용

- 긴 입력. 수천에서 수만 낱말의 문서, 단백질 서열, 고해상도 영상처럼 $n^2$ 개의 무게를 저장할 수 없는 입력에 주의를 적용한다[^2].
- 순환 신경망 꼴의 생성. 인과 선형 주의는 상태 $S_i$ 를 고치는 순환 신경망이므로, 생성할 때 낱말마다 일정한 계산과 기억 공간으로 다음 낱말을 낸다[^1].
- [재생 핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)의 핵 근사. 무게를 핵 함수로, 특성 사상을 그 핵의 유한 차원 근사로 보면 선형 주의는 핵 회귀를 유한 개의 특성으로 계산하는 것이다.

[^1]: A. Katharopoulos, A. Vyas, N. Pappas, F. Fleuret, "Transformers are RNNs: Fast autoregressive transformers with linear attention", *Proceedings of the 37th International Conference on Machine Learning* (2020).
[^2]: K. Choromanski, V. Likhosherstov, D. Dohan, X. Song, A. Gane, T. Sarlos, P. Hawkins, J. Davis, A. Mohiuddin, Ł. Kaiser, D. Belanger, L. Colwell, A. Weller, "Rethinking attention with Performers", *International Conference on Learning Representations* (2021).

# 연관 문서

## 선수지식

- [주의 메커니즘](attention-mechanism.md)

## 더 알아보기

- [구조적 상태 공간 모형](structured-state-space-models.md)

#machine_learning #linear_algebra #probability
