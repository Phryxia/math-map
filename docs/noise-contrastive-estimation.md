# 잡음 대조 추정

# 개요

**잡음 대조 추정(noise-contrastive estimation, NCE)** 은 확률의 합이 $1$ 이 되도록 나누는 수를 계산하지 않고, 자료와 일부러 섞은 잡음을 가려내는 분류 문제를 풀어 확률 모형을 맞추는 방법이다. 어휘가 수만 개인 언어 모형에서 다음 낱말의 확률을 정하려면 매번 수만 개의 점수를 모두 더해야 한다. 잡음 대조 추정은 말뭉치의 낱말 하나와 잡음에서 뽑은 낱말 몇 개만 보고 "어느 것이 말뭉치에서 왔는가" 를 맞히도록 학습하며, 그 답에서 확률이 나온다.

# 직관

[단어 임베딩](word-embeddings.md) 문서의 신경망 언어 모형은 문맥 $u$ 뒤의 낱말 $v$ 에 점수 $s_v(u)$ 를 주고, 확률을 softmax 로 정한다.

$$P(v\mid u)=\frac{\exp s_v(u)}{\sum_{v'\in V}\exp s_{v'}(u)}$$

[최대가능도 추정](maximum-likelihood.md)으로 학습하면 말뭉치의 낱말 하나마다 로그확률의 기울기를 구한다. 분모의 로그를 미분하면 어휘 전체에 걸친 합이 나온다.

$$\nabla\log P(v\mid u)=\nabla s_v(u)-\sum_{v'\in V}P(v'\mid u)\thinspace\nabla s_{v'}(u)$$

어휘가 수만 개이면 낱말 하나를 학습할 때마다 수만 개의 점수와 기울기를 계산한다. 막힌 곳은 분모의 합이다.

분모가 없는 다른 물음을 세운다. 문맥 "개가" 뒤에 말뭉치에서 "잔다, 먹는다, 달린다" 가 각각 $1/2,1/4,1/4$ 의 비율로 나온다고 하자. 여기에 세 낱말을 똑같은 확률 $1/3$ 로 내는 잡음을 하나씩 섞는다. "잔다" 하나를 받았을 때 그것이 말뭉치에서 왔을 확률은 다음과 같다.

$$\frac{1/2}{1/2+1/3}=\frac35$$

"먹는다" 와 "달린다" 에서는 같은 계산이 $3/7$ 이다. 이 확률을 $\sigma$ 라 하면 말뭉치 쪽 확률은 $\frac13\cdot\frac{\sigma}{1-\sigma}$ 다. "잔다" 에서 $\frac13\cdot\frac{3/5}{2/5}=\frac12$ 이다.

그래서 점수 $s_v$ 를 분모 없이 그대로 로그확률로 쓰고, "말뭉치에서 왔다" 의 확률이 위 계산과 같은 꼴이 되도록 분류기를 학습한다. 학습이 끝나면 $\exp s_v$ 가 말뭉치의 확률이다. 한 번의 학습에 쓰는 것은 말뭉치의 낱말 하나와 잡음 낱말 몇 개뿐이다. 이 방법을 잡음 대조 추정이라 한다.

# 정의

## 정규화되지 않은 모형

자료의 분포를 $p_d$ 라 하고, 모형을 함수 $s_\theta$ 와 상수 $c$ 로 $\log p_{\theta,c}(x)=s_\theta(x)+c$ 라 둔다. 최대가능도 추정에서는 $c=-\log\sum_x\exp s_\theta(x)$ 로 정해지지만, 잡음 대조 추정에서는 $c$ 도 학습할 변수로 둔다. 직관 절에서 $x$ 는 문맥 "개가" 뒤의 낱말이고 $s_\theta(x)=s_x(\text{개가})$ 다.

## 잡음 분포와 분류의 로짓

**잡음 분포(noise distribution)** $q$ 는 확률을 계산할 수 있고 표본을 뽑을 수 있는, 자료와 상관없이 고른 분포다. 자료 표본 하나마다 $q$ 에서 표본 $k$ 개를 뽑는다. 표본 $x$ 를 받았을 때 그것이 자료에서 왔다고 판정하는 분류기의 로짓(logit)을 다음과 같이 둔다.

$$G(x)=\log p_{\theta,c}(x)-\log\bigl(k\thinspace q(x)\bigr)$$

판정 확률은 로지스틱 함수(logistic function) $\sigma(t)=1/(1+e^{-t})$ 로 $\sigma(G(x))$ 다. 직관 절은 $k=1$, $q=1/3$ 이고, 모형이 자료와 같으면 $\sigma(G(\text{잔다}))=3/5$ 다.

## 목적함수

다음 함수를 $\theta$ 와 $c$ 에 대해 최대화하는 것을 **잡음 대조 추정** 이라 한다[^1].

$$J(\theta,c)=\mathbb E_{x\sim p_d}\bigl\lbrack\log\sigma(G(x))\bigr\rbrack+k\thinspace\mathbb E_{y\sim q}\bigl\lbrack\log\sigma(-G(y))\bigr\rbrack$$

자료 표본 $n$ 개와 잡음 표본 $kn$ 개로 두 기댓값을 표본평균으로 바꾸고, 표본 하나씩 [확률적 경사하강법](stochastic-gradient-descent.md)으로 갱신한다. 어느 항에도 $x$ 에 걸친 합이 없다.

# 성질

## 최적해는 자료 분포

$\log p_{\theta,c}$ 가 모든 함수를 나타낼 수 있으면 $J$ 의 최대점에서 $p_{\theta,c}=p_d$ 다[^1].

증명의 요지. $J$ 를 $x$ 마다 나누면 $p_d(x)\log\sigma(G)+k\thinspace q(x)\log\sigma(-G)$ 의 합이다. $G$ 로 미분해 $0$ 으로 두면 $p_d(x)\sigma(-G)=k\thinspace q(x)\sigma(G)$ 이고 $e^{G}=p_d(x)/(k\thinspace q(x))$ 가 나온다. $G$ 의 정의에 넣으면 $p_{\theta,c}(x)=p_d(x)$ 다. 이 과정에서 $c$ 는 따로 맞출 필요 없이 $-\log\sum_x\exp s_\theta(x)$ 로 정해진다.

모형이 모든 함수를 나타내지 못하는 경우에도, 자료가 모형의 어느 매개변수에서 나왔고 잡음 분포가 자료 분포가 0 이 아닌 곳에서 0 이 아니면, 표본 수가 늘 때 추정량이 참 매개변수로 수렴한다[^2].

## 잡음 표본의 수와 효율

$k$ 가 커질수록 추정량의 점근 분산은 최대가능도 추정량의 점근 분산에 가까워진다[^2]. 잡음 분포가 자료 분포에 가까울수록 같은 $k$ 에서 분산이 작다. 언어 모형에서는 낱말의 말뭉치 빈도를 잡음 분포로 쓴다.

## 음수 표집과의 관계

단어 임베딩 문서의 음수 표집은 로짓을 $G=\mathbf w\cdot\mathbf c$ 로 두고 $\log(k\thinspace q)$ 를 빼지 않은 것이다. 같은 계산으로 최적점은 $\mathbf w\cdot\mathbf c=\log\bigl(p_d/(k\thinspace q)\bigr)$ 이고, $q$ 가 말뭉치 빈도이면 이것이 단어 임베딩 문서의 $\mathrm{PMI}-\log k$ 다. 그래서 음수 표집은 낱말 벡터를 학습하지만 확률 모형은 학습하지 않는다[^3].

## 자기 정규화

신경망 언어 모형에서는 문맥 $u$ 마다 상수 $c(u)$ 가 하나씩 필요하다. Mnih 와 Teh 는 $c(u)=0$ 으로 고정해도 학습된 모형의 $\sum_v\exp s_v(u)$ 가 $1$ 에 가깝게 나오고 예측 성능이 최대가능도 학습과 비슷함을 보고했다[^4].

# 활용

- 신경망 언어 모형의 학습. 출력층의 softmax 분모를 계산하지 않고 학습하고, 시험할 때만 필요한 문맥에서 분모를 계산한다[^4].
- 정규화 상수를 모르는 밀도 모형. 자연 영상의 조각에 대한 에너지 모형처럼 $\exp s_\theta$ 의 적분을 구할 수 없는 연속 분포의 매개변수를 추정한다[^1].
- 대조 학습. [상호정보량 추정](mutual-information-estimation.md)의 InfoNCE 하한은 참 짝 하나와 가짜 짝 여러 개 가운데 참 짝을 고르는 분류에서 나오고, 잡음 대조 추정과 같은 꼴의 손실을 쓴다.

[^1]: M. Gutmann, A. Hyvärinen, "Noise-contrastive estimation: A new estimation principle for unnormalized statistical models", *Proceedings of the Thirteenth International Conference on Artificial Intelligence and Statistics* (2010), 297–304.
[^2]: M. U. Gutmann, A. Hyvärinen, "Noise-contrastive estimation of unnormalized statistical models, with applications to natural image statistics", *Journal of Machine Learning Research* **13** (2012), 307–361.
[^3]: C. Dyer, "Notes on noise contrastive estimation and negative sampling", arXiv:1410.8251 (2014).
[^4]: A. Mnih, Y. W. Teh, "A fast and simple algorithm for training neural probabilistic language models", *Proceedings of the 29th International Conference on Machine Learning* (2012).

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)
- [단어 임베딩](word-embeddings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #statistics
