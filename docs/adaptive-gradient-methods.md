# 적응적 경사 방법

# 개요

적응적 경사 방법은 좌표마다 보폭을 따로 정하는 [확률적 경사하강법](stochastic-gradient-descent.md)의 변형이다. 그 좌표에서 지금까지 본 기울기 성분의 제곱을 쌓고 그 제곱근으로 보폭을 나눈다. 손실의 곡률을 모르는 채로 좌표 사이의 규모 차이를 걸음마다 지워 나가는 것이 갱신식의 내용이다.

# 직관

좌표마다 규모가 다른 손실 $f(x)=\frac{1}{2}(100x_1^2+0.01x_2^2)$ 를 줄인다. [경사하강법](gradient-descent.md)의 한 걸음은 $x_1$ 을 $1-100\eta$ 배로, $x_2$ 를 $1-0.01\eta$ 배로 만든다. $x_1$ 이 발산하지 않으려면 $\eta\lt 2/100$ 이어야 하고, 그 보폭에서 $x_2$ 에 곱해지는 수는 아무리 작아도 $1-0.0002$ 다. $x_2$ 를 절반으로 줄이는 데 삼천 걸음이 넘게 든다.

보폭 하나가 두 좌표를 함께 맡아서 막혔으니 좌표마다 보폭을 따로 준다. 곱해야 할 수는 $1/100$ 과 $1/0.01$ 인데, 이 두 수는 손실의 식을 봐야 나온다. 식 대신 기울기를 쓴다. $x_1$ 방향의 기울기 성분은 $100x_1$ 이고 $x_2$ 방향은 $0.01x_2$ 이므로 규모의 차이가 성분의 크기에 그대로 나타난다.

좌표마다 기울기 성분을 제곱해 쌓고 그 제곱근으로 그 좌표의 보폭을 나눈다. 첫 걸음에서 좌표 $j$ 에 쌓인 값은 $g_j^2$ 이므로 갱신량은 $\eta g_j/\vert g_j\vert$ 이고 크기가 $\eta$ 다. 기울기 성분이 $10^4$ 배 차이 나는 두 좌표가 같은 거리를 움직인다.

걸음이 쌓이면 좌표 $j$ 의 갱신량은 $\eta g_{k,j}/\sqrt{\sum_{i\le k}g_{i,j}^2}$ 다. 분모가 걸음마다 커지므로 보폭이 좌표마다 줄어들고, 줄어드는 속도는 그 좌표의 기울기가 얼마나 컸는지가 정한다.

# 정의

**적응적 경사 방법**은 좌표별 기울기 제곱의 누적량 $v_k$ 를 함께 갱신하며 $\sqrt{v_k}$ 로 보폭을 나누는 반복이다. 아래에서 $g_k$ 는 $k$ 번째 걸음의 확률적 기울기이고, $\odot$ 는 성분별 곱이며 제곱근과 나눗셈도 성분별로 한다. $\varepsilon\gt 0$ 은 $0$ 으로 나누는 것을 막는 작은 수다.

## AdaGrad

$$v_k=v_{k-1}+g_k\odot g_k,\qquad x_{k+1}=x_k-\eta\thinspace\frac{g_k}{\sqrt{v_k}+\varepsilon}$$

$v_0=0$ 이다. 누적합 $v_k$ 는 단조증가하므로 좌표별 보폭 $\eta/\sqrt{v_{k,j}}$ 는 단조감소한다.

## RMSProp

$$v_k=\beta v_{k-1}+(1-\beta)\thinspace g_k\odot g_k$$

$0\lt\beta\lt 1$ 이고 갱신식은 AdaGrad 와 같다. 누적합을 지수이동평균으로 바꾸면 $v_k$ 가 최근 $1/(1-\beta)$ 걸음의 기울기 크기를 재고, 보폭이 단조감소하지 않는다. 이름은 root mean square propagation 에서 왔다.

## Adam

$$m_k=\beta_1 m_{k-1}+(1-\beta_1)\thinspace g_k,\qquad v_k=\beta_2 v_{k-1}+(1-\beta_2)\thinspace g_k\odot g_k$$

$$\hat m_k=\frac{m_k}{1-\beta_1^k},\qquad \hat v_k=\frac{v_k}{1-\beta_2^k},\qquad x_{k+1}=x_k-\eta\thinspace\frac{\hat m_k}{\sqrt{\hat v_k}+\varepsilon}$$

**Adam**(adaptive moment estimation)은 기울기 자체의 지수이동평균 $m_k$ 를 방향으로 쓰고 RMSProp 의 $v_k$ 로 그 방향을 나눈다[^1]. $m_0=v_0=0$ 이고 흔히 $\beta_1=0.9$, $\beta_2=0.999$ 를 쓴다.

## 편향 보정

기울기의 분포가 걸음에 따라 변하지 않으면 $m_0=0$ 에서 출발한 지수이동평균의 기댓값은 다음과 같다.

$$\mathbb E\lbrack m_k\rbrack=(1-\beta_1^k)\thinspace\mathbb E\lbrack g\rbrack$$

$k$ 가 작으면 $1-\beta_1^k$ 가 작아 $m_k$ 가 기울기의 평균보다 작다. $\hat m_k=m_k/(1-\beta_1^k)$ 가 이 인자를 없앤다. $v_k$ 도 같다.

# 성질

## 척도 불변성

$\varepsilon=0$ 이면 AdaGrad 의 갱신량은 기울기의 상수배에 대해 불변이다. $g_k$ 를 $c\gt 0$ 배 하면 $v_k$ 가 $c^2$ 배가 되고 $g_k/\sqrt{v_k}$ 가 그대로다. 손실 $f$ 대신 $cf$ 를 넣어도 반복값의 궤적이 같다. 경사하강법은 이 변환에서 보폭을 $1/c$ 배로 고쳐야 같은 궤적을 준다.

## AdaGrad 의 후회 한계

$d$ 차원의 볼록 손실열을 최대 노름 지름 $D\_\infty$ 인 영역에서 다룰 때, $T$ 걸음의 후회는 다음을 만족한다[^2].

$$R_T=O\left(D\_\infty\sum_{j=1}^{d}\Vert g_{1:T,j}\Vert\_2\right)$$

여기서 $g_{1:T,j}$ 는 좌표 $j$ 의 기울기 성분을 $T$ 걸음 모은 벡터다.

증명의 요지. 좌표마다 보폭이 $\eta/\sqrt{v_{k,j}}$ 인 온라인 경사하강법의 표준 분석을 적용하면 후회가 $\sum_k\sum_j\eta g_{k,j}^2/\sqrt{v_{k,j}}$ 로 묶이고, $\sum_k a_k/\sqrt{\sum_{i\le k}a_i}\le 2\sqrt{\sum_k a_k}$ 를 좌표마다 쓰면 합이 $\Vert g_{1:T,j}\Vert\_2$ 가 된다.

성분이 $1$ 로 유계이면 $\Vert g_{1:T,j}\Vert\_2\le\sqrt T$ 이므로 이 한계는 $O(d\sqrt T)$ 이내다. 좌표 $j$ 의 기울기 성분이 $T$ 걸음 가운데 $T_j$ 번만 $0$ 이 아니면 그 항이 $\sqrt{T_j}$ 로 줄어든다.

## Adam 의 비수렴 반례

$\beta_2$ 를 고정한 Adam 이 최적해로 수렴하지 않는 볼록 문제가 있다[^3]. 한 좌표에서 큰 기울기가 드물게 나오고 작은 반대 방향 기울기가 자주 나오면, 지수이동평균이 큰 기울기의 기여를 몇 걸음 안에 잊어 그 좌표의 보폭이 회복되고 반대 방향의 이동이 쌓인다. AdaGrad 의 $v_k$ 는 단조증가라서 이 현상이 일어나지 않는다. $v_k$ 를 과거 최댓값 $\max_{i\le k}v_i$ 로 바꾼 AMSGrad 가 같은 반례에서 수렴한다[^3].

## 대각 전처리

$D_k=\mathrm{diag}(\sqrt{v_k}+\varepsilon)$ 로 두면 갱신이 $x_{k+1}=x_k-\eta D_k^{-1}g_k$ 다. [Newton 법](newton-method.md)이 Hessian의 역행렬을 곱하는 자리에 대각행렬이 들어간 꼴이다. $\sqrt{v_{k,j}}$ 는 곡률이 아니라 기울기 성분의 크기라서 이 대각행렬은 Hessian의 대각을 추정하지 않고, 이차수렴도 주지 않는다.

# 활용

- **신경망 학습.** 층마다 기울기의 규모가 다른 깊은 신경망에서 Adam 이 층별 보폭 조정을 대신한다. 보폭 $\eta$ 하나만 정하면 되고 좌표별 조정은 $v_k$ 가 맡는다.
- **희소 기울기.** 자연어 모형의 단어 임베딩에서 드문 단어에 대응하는 좌표는 대부분의 걸음에서 기울기가 $0$ 이다. AdaGrad 의 후회 한계에서 그 좌표의 항이 $\sqrt{T_j}$ 로 줄어들고, 실제 갱신에서도 그 좌표의 보폭이 크게 남는다.
- **변분 추론.** [변분 오토인코더](variational-autoencoder.md)의 목적함수 기울기는 재모수화가 주는 불편 추정량이고, 그 잡음 아래에서 Adam 이 기본 최적화기로 쓰인다.
- **강화학습.** [정책 경사](policy-gradient.md)의 점수 함수 추정량은 분산이 커서 좌표마다 규모가 크게 다르다.

[^1]: D. P. Kingma and J. Ba, "Adam: A Method for Stochastic Optimization", International Conference on Learning Representations (2015).

[^2]: J. Duchi, E. Hazan, Y. Singer, "Adaptive Subgradient Methods for Online Learning and Stochastic Optimization", Journal of Machine Learning Research **12** (2011), 2121–2159.

[^3]: S. J. Reddi, S. Kale, S. Kumar, "On the Convergence of Adam and Beyond", International Conference on Learning Representations (2018).

# 연관 문서

## 선수지식

- [확률적 경사하강법](stochastic-gradient-descent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #probability
