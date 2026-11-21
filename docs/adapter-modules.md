# 어댑터 모듈

# 개요

**어댑터 모듈(adapter module)** 은 미리 학습한 Transformer 의 각 층 사이에 폭이 좁은 작은 신경망을 끼워 넣고, 그 신경망만 학습해 새 문제에 맞추는 방법이다. [BERT](bert.md) 하나로 문장 분류 열 가지를 하려면 문제마다 매개변수 $1.1$ 억 개를 통째로 고친 사본이 하나씩 필요하다. 어댑터 모듈은 원래 가중치를 그대로 두고 문제마다 끼워 넣은 작은 신경망만 저장하므로, 문제 하나에 원래 모형의 몇 퍼센트만 더 저장한다.

# 직관

[Attention 메커니즘](attention-mechanism.md) 문서의 예에서 한 층의 Attention 출력은 $\mathbf h=(0.79, 0.21)$ 이었다. 새 문제에서는 이 벡터의 둘째 좌표가 첫째 좌표와의 차이에 따라 커져야 한다고 하자.

층의 가중치를 고치지 않고 $\mathbf h$ 를 바꾸려면 $\mathbf h$ 를 받아 작은 변화량을 내는 함수를 하나 두고 $\mathbf h$ 에 더한다. 두 좌표의 차를 재는 벡터 $\mathbf w_{\downarrow}=(1,-1)$ 로 수 하나 $0.79-0.21=0.58$ 을 만들고, 음수를 $0$ 으로 바꾸는 함수를 거친 뒤 벡터 $\mathbf w_{\uparrow}=(0, 0.5)$ 를 곱해 $(0, 0.29)$ 를 만든다. 이것을 더한 출력은 $(0.79, 0.50)$ 이다.

이 함수는 $2$ 차원을 $1$ 차원으로 줄였다가 다시 $2$ 차원으로 늘린다. 학습하는 것은 $\mathbf w_{\downarrow}$, $\mathbf w_{\uparrow}$ 뿐이고, $\mathbf w_{\uparrow}=0$ 이면 출력이 원래 $\mathbf h$ 와 같다. 이렇게 층 사이에 끼워 넣어 원래 출력에 변화량을 더하는 작은 신경망을 어댑터 모듈이라 한다.

# 정의

## 어댑터 모듈

폭 $d$ 인 은닉 벡터 $\mathbf h\in\mathbb R^d$ 와 병목 폭 $m\lt d$ 를 정한다. **어댑터 모듈** 은 다음 함수다[^1].

$$\mathrm{Adapter}(\mathbf h)=\mathbf h+W_{\uparrow}\thinspace\sigma\bigl(W_{\downarrow}\mathbf h+\mathbf b_{\downarrow}\bigr)+\mathbf b_{\uparrow}$$

$W_{\downarrow}\in\mathbb R^{m\times d}$ 와 $W_{\uparrow}\in\mathbb R^{d\times m}$ 는 행렬이고 $\mathbf b_{\downarrow}$, $\mathbf b_{\uparrow}$ 는 치우침, $\sigma$ 는 성분마다 거는 비선형 함수다. $m$ 을 **병목 폭(bottleneck dimension)** 이라 한다. 직관 절의 예는 $d=2$, $m=1$, $\sigma(x)=\max(x,0)$, 치우침 $0$ 인 경우다.

## 끼워 넣는 자리

Houlsby 등은 [Transformer](transformers.md)의 각 층에서 Attention 부분의 출력 사상 뒤와 자리마다의 전방 신경망 뒤에 어댑터 모듈을 하나씩, 층마다 두 개를 넣었다[^1]. 원래 가중치는 고정하고 어댑터 모듈, 층 정규화의 매개변수, 마지막 분류 층만 학습한다.

## 초기값

$W_{\uparrow}$ 와 $\mathbf b_{\uparrow}$ 를 $0$ 에 가깝게 두면 학습을 시작할 때 어댑터 모듈이 거의 항등 사상이다. 그러면 처음 모형의 출력이 미리 학습한 모형과 거의 같다[^1].

# 성질

## 매개변수 수

어댑터 모듈 하나의 매개변수는 $2md+m+d$ 개다. BERT-base 의 $d=768$ 에서 $m=64$ 이면 하나에 $99136$ 개이고, 층마다 두 개씩 $12$ 층이면 약 $238$ 만 개로 모형 전체 $1.1$ 억 개의 약 $2.2$% 다.

## 비선형 변화량

$\sigma$ 가 항등 함수이면 어댑터 모듈이 더하는 변화량 $W_{\uparrow}W_{\downarrow}\mathbf h$ 는 계수 $m$ 이하의 행렬을 $\mathbf h$ 에 곱한 것이다. 어댑터 모듈 바로 앞의 선형 사상이 $W$ 이면 $(I+W_{\uparrow}W_{\downarrow})W=W+W_{\uparrow}W_{\downarrow}W$ 이므로, $W$ 에 계수 $m$ 이하의 행렬을 더한 [저계수 적응](low-rank-adaptation.md)과 같은 꼴이다. $\sigma$ 가 비선형이면 변화량이 $\mathbf h$ 의 비선형 함수다.

## 추론 비용

어댑터 모듈은 비선형 함수를 거치므로 원래 가중치에 합쳐 넣을 수 없다. 추론할 때 층마다 행렬 곱 두 번이 차례로 더 들고, Hu 등은 한 번에 입력 하나를 처리하는 경우 이 때문에 지연 시간이 늘어난다고 보고했다[^2]. 저계수 적응은 $BA$ 를 가중치에 더해 두므로 추론 비용이 늘지 않는다.

## 성능

Houlsby 등은 GLUE(general language understanding evaluation) 벤치마크에서, 문제마다 원래 모형의 약 $3.6$% 의 매개변수만 더하는 어댑터 모듈이 전체 미세 조정과 평균 $0.4$ 점 안의 성능을 냈다고 보고했다[^1].

# 활용

- 여러 문제의 미세 조정. 원래 모형 하나를 두고 문제마다 어댑터 모듈만 바꿔 끼운다. 문제가 늘어도 저장량은 문제당 어댑터 모듈의 크기만큼만 는다.
- 다른 효율적 미세 조정과의 비교. He 등은 어댑터 모듈, [접두 조정](prefix-tuning.md), 저계수 적응을 모두 층의 출력에 변화량을 더하는 꼴로 써서, 변화량을 어디에 더하는지와 비선형 함수가 있는지로 구분했다[^3].
- 다국어 모형. 언어마다 어댑터 모듈을 따로 학습해 한 다국어 모형에서 언어를 바꿔 쓴다.

[^1]: N. Houlsby, A. Giurgiu, S. Jastrzebski, B. Morrone, Q. de Laroussilhe, A. Gesmundo, M. Attariyan, S. Gelly, "Parameter-efficient transfer learning for NLP", *Proceedings of the 36th International Conference on Machine Learning* (2019).
[^2]: E. J. Hu, Y. Shen, P. Wallis, Z. Allen-Zhu, Y. Li, S. Wang, L. Wang, W. Chen, "LoRA: Low-rank adaptation of large language models", *International Conference on Learning Representations* (2022).
[^3]: J. He, C. Zhou, X. Ma, T. Berg-Kirkpatrick, G. Neubig, "Towards a unified view of parameter-efficient transfer learning", *International Conference on Learning Representations* (2022).

# 연관 문서

## 선수지식

- [BERT](bert.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #linear_algebra #optimization
