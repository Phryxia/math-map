# 위치 부호화

# 개요

**위치 부호화(positional encoding)** 는 문장 안의 자리마다 벡터를 하나씩 정해, 낱말의 순서를 [Attention 메커니즘](attention-mechanism.md)이 볼 수 있게 하는 방법이다. 자기 Attention 은 "개가 공을 문다" 와 "공을 개가 문다" 에 같은 결과를 내므로, 누가 누구를 무는지 가르지 못한다. 위치 부호화는 낱말 벡터에 자리의 벡터를 더하거나 자리에 따라 벡터를 돌려, 두 낱말이 몇 칸 떨어져 있는지가 내적에 나타나게 한다.

# 직관

[Transformer](transformers.md) 의 자기 Attention 은 입력 낱말의 순서를 바꾸면 출력의 순서만 같게 바뀐다. 낱말 벡터에 자리마다 다른 벡터를 더하면 이 대칭이 깨진다. 자리 번호 $p$ 를 그대로 한 좌표로 더하면 긴 문장에서 그 좌표가 낱말 벡터보다 훨씬 커진다. 그래서 크기가 $1$ 로 고정된 벡터를 쓴다.

자리 $p$ 에 평면 벡터 $(\sin p,\cos p)$ 를 준다. 자리 $0,1,2$ 의 벡터는 다음과 같다.

$$(0,\thinspace 1),\qquad(0.841,\thinspace 0.540),\qquad(0.909,\thinspace -0.416)$$

이웃한 두 자리의 내적을 계산하면 자리 $0,1$ 에서 $0.540$ 이고, 자리 $1,2$ 에서도 $0.841\times0.909+0.540\times(-0.416)\approx0.540$ 이다. 두 값은 모두 $\cos1$ 이다. 내적이 자리 자체가 아니라 두 자리의 차에만 달려 있다.

한 칸 옮긴 벡터는 원래 벡터를 각 $1$ 만큼 돌린 것이다. [삼각함수](trigonometric-functions.md)의 덧셈정리에서 다음이 나온다.

$$\begin{pmatrix}\sin(p+1)\cr\cos(p+1)\end{pmatrix}=\begin{pmatrix}\cos1&\sin1\cr -\sin1&\cos1\end{pmatrix}\begin{pmatrix}\sin p\cr\cos p\end{pmatrix}$$

한 쌍의 좌표만 쓰면 $2\pi$ 쯤 떨어진 두 자리가 거의 같은 벡터를 받는다. 자리 $6$ 의 벡터는 $(-0.279,\thinspace 0.960)$ 으로 자리 $0$ 의 $(0,\thinspace 1)$ 에 가깝다. 그래서 도는 빠르기가 다른 쌍을 여러 개 이어 붙여 먼 자리도 서로 다른 벡터를 받게 한다. 이렇게 자리마다 정한 벡터를 위치 부호화라 한다.

# 정의

## 사인 위치 부호화

차원 $d$ 가 짝수일 때 자리 $p=0,1,2,\dots$ 의 벡터 $\mathbf e_p\in\mathbb R^d$ 를 $i=0,\dots,d/2-1$ 에 대해 다음과 같이 둔다[^1].

$$e_{p,2i}=\sin(\omega_i p),\qquad e_{p,2i+1}=\cos(\omega_i p),\qquad\omega_i=10000^{-2i/d}$$

낱말 $p$ 번째의 임베딩 $\mathbf x_p$ 에 $\mathbf e_p$ 를 더한 $\mathbf x_p+\mathbf e_p$ 를 첫 층에 넣는다. 이것을 **사인 위치 부호화(sinusoidal positional encoding)** 라 한다. 직관 절은 $d=2$, $\omega_0=1$ 인 경우다.

## 학습하는 위치 임베딩

자리 $p=0,\dots,N-1$ 마다 벡터 $\mathbf e_p$ 를 매개변수로 두고 다른 가중치와 함께 학습하는 것을 **학습하는 위치 임베딩(learned positional embedding)** 이라 한다. 학습할 때 본 길이 $N$ 보다 먼 자리에는 벡터가 없다.

## 회전 위치 부호화

자기 Attention 의 질의 $\mathbf q_p$ 와 키 $\mathbf k_s$ 의 좌표를 두 개씩 묶고, $i$ 번째 쌍을 각 $\omega_i p$, $\omega_i s$ 만큼 돌린 뒤 내적을 계산하는 것을 **회전 위치 부호화(rotary positional encoding)** 라 한다[^2]. 각 쌍을 돌리는 $2\times2$ 회전 행렬을 대각에 모은 행렬을 $R_p$ 라 하면 점수는 $(R_p\mathbf q_p)\cdot(R_s\mathbf k_s)$ 다. 직관 절의 회전 행렬을 질의와 키에 직접 적용한 것이다.

# 성질

## 내적과 자리의 차

사인 위치 부호화에서 두 자리의 내적은 차 $p-s$ 만의 함수다.

$$\mathbf e_p\cdot\mathbf e_s=\sum_{i=0}^{d/2-1}\cos\bigl(\omega_i(p-s)\bigr)$$

$\sin a\sin b+\cos a\cos b=\cos(a-b)$ 를 쌍마다 쓰면 나온다. 직관 절의 $0.540=\cos1$ 이 $d=2$ 인 경우다.

## 옮김은 선형 사상

모든 $k$ 에 대해 $p$ 와 무관한 행렬 $M_k$ 가 있어 $\mathbf e_{p+k}=M_k\mathbf e_p$ 다. $M_k$ 는 $i$ 번째 쌍을 각 $\omega_i k$ 만큼 돌리는 회전 행렬들을 대각에 모은 것이다. 그래서 질의와 키를 만드는 선형 사상이 "몇 칸 앞의 낱말" 을 찾는 데 쓰일 수 있다[^1].

## 회전 위치 부호화의 상대성

회전 위치 부호화의 점수는 다음과 같다.

$$(R_p\mathbf q)\cdot(R_s\mathbf k)=\mathbf q\cdot R_p^{\mathrm T}R_s\mathbf k=\mathbf q\cdot R_{s-p}\mathbf k$$

회전 행렬은 $R_p^{\mathrm T}=R_{-p}$, $R_{-p}R_s=R_{s-p}$ 를 만족한다. 그래서 질의와 키의 내용이 같으면 점수는 두 자리의 차에만 달려 있고, 문장을 통째로 몇 칸 옮겨도 Attention 무게가 바뀌지 않는다[^2]. 사인 위치 부호화를 더하는 방식에서는 $\mathbf x_p+\mathbf e_p$ 와 $\mathbf x_s+\mathbf e_s$ 의 내적에 $\mathbf x_p\cdot\mathbf e_s$ 같은 섞인 항이 들어가 이 성질이 성립하지 않는다.

## 학습 길이 밖의 자리

사인 위치 부호화는 모든 $p$ 에서 정의되지만, 짧은 문장으로 학습한 모형이 긴 문장에서 잘 예측한다는 보장은 없다. Press, Smith, Lewis 는 사인 위치 부호화를 쓴 언어 모형이 학습 길이보다 긴 입력에서 성능이 크게 떨어짐을 보고하고, 위치 벡터 대신 Attention 점수에서 거리에 비례하는 값을 빼는 [선형 치우침 Attention](attention-linear-biases.md)을 제안했다[^3].

# 활용

- Transformer 의 입력. 원 논문은 사인 위치 부호화와 학습하는 위치 임베딩을 견주어 번역 성능이 거의 같다고 보고했다[^1].
- 대규모 언어 모형. 회전 위치 부호화가 여러 공개 언어 모형의 자기 Attention 에 쓰인다.
- 영상과 신호. 영상 조각의 가로와 세로 자리, 시계열의 시각에 같은 꼴의 사인 벡터를 주어 순서와 거리를 넣는다.

[^1]: A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, I. Polosukhin, "Attention is all you need", *Advances in Neural Information Processing Systems* **30** (2017).
[^2]: J. Su, M. Ahmed, Y. Lu, S. Pan, W. Bo, Y. Liu, "RoFormer: Enhanced transformer with rotary position embedding", *Neurocomputing* **568** (2024), 127063.
[^3]: O. Press, N. A. Smith, M. Lewis, "Train short, test long: Attention with linear biases enables input length extrapolation", *International Conference on Learning Representations* (2022).

# 연관 문서

## 선수지식

- [Transformer](transformers.md)

## 더 알아보기

- [선형 치우침 Attention](attention-linear-biases.md)

#machine_learning #linear_algebra
