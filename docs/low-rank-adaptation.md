# 저계수 적응

# 개요

**저계수 적응(low-rank adaptation, LoRA)** 은 미리 학습한 신경망을 새 문제에 맞게 고칠 때, 가중치 행렬은 그대로 두고 그 변화량만 두 얇은 행렬의 곱으로 학습하는 방법이다. 문장 분류, 질의응답, 요약처럼 문제가 열 개면 [BERT](bert.md) 같은 모형을 문제마다 통째로 더 학습해 매개변수 $1.1$ 억 개짜리 사본 열 개를 저장해야 한다. 저계수 적응은 문제마다 변화량의 두 인수만 저장하므로, 사본 하나의 몇백 분의 일만 저장하고 원래 모형 하나를 함께 쓴다.

# 직관

BERT 문서의 미세 조정은 분류용 선형 사상을 붙이고 모형의 모든 가중치를 조금씩 고친다. 학습이 끝나면 각 가중치 행렬 $W_0$ 이 $W_0+\Delta W$ 로 바뀌고, 저장할 것은 $\Delta W$ 다.

$3\times 3$ 행렬 하나에서 미세 조정이 다음 변화량을 냈다고 하자.

$$\Delta W=\begin{pmatrix}2&0&-2\cr 4&0&-4\cr 0&0&0\end{pmatrix}$$

둘째 행은 첫째 행의 두 배이고 셋째 행은 $0$ 이므로, 이 행렬은 열벡터 $(1,2,0)^{\mathrm T}$ 와 행벡터 $(2,0,-2)$ 의 곱이다. 수 $9$ 개 대신 $6$ 개를 저장하면 된다.

BERT-base 의 Attention 층 질의 행렬은 $768\times 768$ 이고 수 $589824$ 개다. 변화량이 $768\times 8$ 행렬과 $8\times 768$ 행렬의 곱이면 수 $12288$ 개로 적히고, 이것은 $48$ 분의 $1$ 이다. 그래서 미세 조정 처음부터 변화량을 두 얇은 행렬의 곱으로 두고 그 두 행렬만 학습한다. 이 방법을 저계수 적응이라 한다.

# 정의

## 저계수 적응

미리 학습한 가중치 행렬 $W_0\in\mathbb R^{d\times k}$ 와 정수 $r\lt\min(d,k)$ 를 정한다. **저계수 적응** 은 다음 꼴로 층의 출력을 바꾸고, $W_0$ 은 고정한 채 $B$ 와 $A$ 만 학습하는 방법이다[^1].

$$\mathbf h=W_0\mathbf x+\frac{\alpha}{r}BA\thinspace\mathbf x,\qquad B\in\mathbb R^{d\times r},\quad A\in\mathbb R^{r\times k}$$

$r$ 을 **적응 계수(adaptation rank)** 라 하고, $\alpha$ 는 $r$ 을 바꿀 때 학습률을 다시 고르지 않도록 곱하는 상수다. 직관 절의 예는 $d=k=3$, $r=1$, $\alpha=1$ 에서 $B=(1,2,0)^{\mathrm T}$, $A=(2,0,-2)$ 인 경우다.

## 초기값

$A$ 의 성분은 평균 $0$ 인 정규분포에서 뽑고 $B$ 는 영행렬로 둔다[^1]. 그러면 학습을 시작할 때 $BA=0$ 이어서 모형의 출력이 미리 학습한 모형과 같다.

## 적용하는 행렬

Hu 등은 [Transformer](transformers.md)의 각 층에서 Attention 의 질의 행렬과 값 행렬에만 저계수 적응을 걸고 나머지 가중치는 고정했다[^1]. BERT-base 에서 $r=8$ 이면 학습하는 수는 층마다 $2\times 12288$ 개, $12$ 층에서 약 $29$ 만 개이고, 모형 전체 $1.1$ 억 개의 약 $0.27$% 다.

# 성질

## 표현할 수 있는 변화량

$\lbrace BA: B\in\mathbb R^{d\times r}, A\in\mathbb R^{r\times k}\rbrace$ 는 계수가 $r$ 이하인 $d\times k$ 행렬 전체와 같다.

$BA$ 의 열은 $B$ 의 열 $r$ 개의 일차결합이므로 계수가 $r$ 이하다. 거꾸로 계수가 $r$ 이하인 $M$ 은 [특이값 분해](singular-value-decomposition.md) $M=U\Sigma V^{\mathrm T}$ 에서 $0$ 아닌 특이값이 $r$ 개 이하이므로, 앞 $r$ 개의 열만 남겨 $B=U_r\Sigma_r$, $A=V_r^{\mathrm T}$ 로 두면 $M=BA$ 다.

## 최선의 근사

전체 미세 조정이 낸 변화량 $\Delta W$ 를 계수 $r$ 이하의 행렬로 바꾸어 쓸 때, Frobenius 노름(Frobenius norm)으로 잰 오차가 가장 작은 것은 $\Delta W$ 의 특이값 분해에서 큰 특이값 $r$ 개만 남긴 행렬이다. 이것은 Eckart–Young–Mirsky 정리(Eckart–Young–Mirsky theorem)다. 오차의 제곱은 버린 특이값의 제곱합 $\sum_{i\gt r}\sigma_i^2$ 이다.

## 처음 단계의 기울기

$W=W_0+BA$ 에 대한 손실의 기울기를 $G=\partial\mathcal L/\partial W$ 라 하면 $\alpha=r$ 일 때 다음이 성립한다.

$$\frac{\partial\mathcal L}{\partial B}=G\thinspace A^{\mathrm T},\qquad\frac{\partial\mathcal L}{\partial A}=B^{\mathrm T}G$$

초기값에서 $B=0$ 이므로 $A$ 의 기울기는 $0$ 이고 처음 단계에서는 $B$ 만 움직인다. $B$ 가 $0$ 이 아니게 된 뒤부터 $A$ 도 움직인다.

## 추론 비용

학습이 끝나면 $W=W_0+\frac{\alpha}{r}BA$ 를 한 번 계산해 저장하므로, 추론할 때 곱셈 수가 원래 모형과 같다. 다른 문제로 바꿀 때는 $\frac{\alpha}{r}BA$ 를 빼고 그 문제의 $\frac{\alpha}{r}B'A'$ 를 더한다.

## 계수에 따른 성능

Hu 등은 GPT-3(generative pre-trained transformer 3)의 질의 행렬과 값 행렬에 $r=1$ 이나 $r=2$ 를 걸어도 $r=64$ 와 비슷한 성능이 나온다고 보고했다[^1]. 같은 논문은 GPT-3 에서 학습하는 매개변수가 전체 미세 조정의 약 $1$ 만 분의 $1$ 이고 학습에 드는 그래픽 처리 장치(graphics processing unit, GPU)의 메모리가 약 $3$ 분의 $1$ 이라고 보고했다.

# 활용

- 여러 문제의 미세 조정. 원래 모형 하나를 메모리에 두고 문제마다 $B$, $A$ 만 바꿔 끼운다.
- 양자화한 모형의 미세 조정. Dettmers 등은 원래 가중치를 4 비트로 [양자화](quantization.md)해 고정하고 저계수 적응만 16 비트로 학습해, 매개변수 $650$ 억 개 모형을 GPU 하나에서 미세 조정했다[^2].
- 영상 생성 모형의 적응. [확산모형](diffusion-models.md)의 Attention 층에 저계수 적응을 걸어 특정 화풍이나 대상의 그림 몇 장으로 생성 결과를 바꾼다.

[^1]: E. J. Hu, Y. Shen, P. Wallis, Z. Allen-Zhu, Y. Li, S. Wang, L. Wang, W. Chen, "LoRA: Low-rank adaptation of large language models", *International Conference on Learning Representations* (2022).
[^2]: T. Dettmers, A. Pagnoni, A. Holtzman, L. Zettlemoyer, "QLoRA: Efficient finetuning of quantized LLMs", *Advances in Neural Information Processing Systems* 36 (2023).

# 연관 문서

## 선수지식

- [BERT](bert.md)
- [특이값 분해](singular-value-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #linear_algebra #optimization
