# 합성곱 신경망

# 개요

**합성곱 신경망(convolutional neural network, CNN)** 은 작은 가중치 묶음 하나를 입력의 모든 위치에 똑같이 대어 계산하는 층을 쌓은 [다층 퍼셉트론](multilayer-perceptron.md)이다. 사진 속 고양이가 한 칸 옆으로 옮겨 가도 같은 고양이인데, 픽셀마다 따로 가중치를 두는 다층 [퍼셉트론](perceptron.md)은 옮겨 간 사진을 처음부터 다시 배워야 하고 가중치도 픽셀 수의 제곱만큼 든다. 합성곱 신경망은 위치마다 같은 가중치를 써서, 입력이 옮겨 가면 층의 출력도 그만큼 옮겨 가게 하고 가중치 수를 묶음의 크기로 줄인다.

# 직관

일곱 칸짜리 흑백 줄 $x=(0,0,1,1,1,0,0)$ 에서 밝기가 바뀌는 자리를 찾는다. 이웃한 두 칸의 차 $y_i=x_i-x_{i+1}$ 을 $i=1,\dots,6$ 에서 계산하면 $y=(0,-1,0,0,1,0)$ 이다. $-1$ 은 어둡다가 밝아지는 자리, $1$ 은 밝다가 어두워지는 자리다.

이 계산은 가중치 두 개 $(w_1,w_2)=(1,-1)$ 을 여섯 자리에 똑같이 대어 $y_i=w_1x_i+w_2x_{i+1}$ 을 구한 것이다. 같은 일을 입력 일곱 개, 출력 여섯 개를 모두 잇는 층으로 하면 가중치가 $42$ 개 든다. 이웃 두 칸만 보고 모든 자리에서 같은 가중치를 쓴다는 제약으로 $42$ 개가 $2$ 개가 되었다.

입력을 한 칸 오른쪽으로 옮긴 $x'=(0,0,0,1,1,1,0)$ 에서는 $y'=(0,0,-1,0,0,1)$ 이다. 출력도 한 칸 오른쪽으로 옮겨 갔다. 모든 자리에서 같은 가중치를 쓰므로, 밝기가 바뀌는 자리가 어디에 있든 같은 값으로 잡힌다.

# 정의

## 합성곱 층

크기 $k$ 인 **커널(kernel)** $w=(w_0,\dots,w_{k-1})$ 과 입력 $x=(x_0,\dots,x_{n-1})$ 의 이산 상호상관은 다음과 같다.

$$
(w\star x)\_i=\sum_{a=0}^{k-1}w_a\thinspace x_{i+a},\qquad i=0,\dots,n-k
$$

이것은 [합성곱](convolution.md)의 수열 판본에서 커널을 뒤집은 것이고, 신경망에서는 관례상 이것을 합성곱이라 부른다. 직관 절은 $k=2$, $w=(1,-1)$ 이다.

2 차원 입력과 여러 **채널(channel)** 이 있으면, 입력 채널 $C_{\mathrm{in}}$ 개의 $H\times W$ 배열 $x_{c'}$ 에서 출력 채널 $c$ 를 다음으로 계산한다.

$$
z_c\lbrack i,j\rbrack=b_c+\sum_{c'=1}^{C_{\mathrm{in}}}\sum_{a=0}^{k-1}\sum_{a'=0}^{k-1}w_{c,c'}\lbrack a,a'\rbrack\thinspace x_{c'}\lbrack i+a,j+a'\rbrack
$$

$c=1,\dots,C_{\mathrm{out}}$ 마다 이 계산을 하는 층을 **합성곱 층(convolutional layer)** 이라 한다. 입력 둘레에 $0$ 을 $p$ 겹 덧붙이는 것을 **덧대기(padding)**, $i$, $j$ 를 $s$ 칸씩 건너뛰며 계산하는 것을 **보폭(stride)** $s$ 라 한다. 컬러 사진은 빨강, 초록, 파랑의 세 채널이다.

## 풀링 층

**최대 풀링(max pooling)** 은 겹치지 않는 크기 $r$ 의 구간마다 최댓값 하나를 남기는 사상이다. 직관 절의 $y$ 에 정류 선형 단위(rectified linear unit, ReLU) $\max(0,t)$ 를 성분마다 쓰면 $(0,0,0,0,1,0)$ 이고, $r=2$ 로 최대 풀링하면 $(0,0,1)$ 이다.

## 합성곱 신경망

합성곱 신경망은 합성곱 층, 활성함수, 풀링 층을 번갈아 합성하고 끝에 다층 퍼셉트론의 완전 연결층(fully connected layer)을 붙인 함수다. 가중치는 다층 퍼셉트론과 같이 손실함수의 기울기를 역전파로 계산해 [경사하강법](gradient-descent.md)으로 찾는다.

# 성질

## 이동 등변성

이동 $(S x)\_i=x_{i-1}$ 에 대해, 양쪽 끝의 효과를 무시하면 $w\star(Sx)=S(w\star x)$ 이다. 왼쪽의 $i$ 성분은 $\sum_a w_ax_{i+a-1}$ 이고 오른쪽의 $i$ 성분도 같다. 이 성질을 **이동 등변성(translation equivariance)** 이라 한다.

직관 절의 $y'=Sy$ 가 그 예다. 성분마다 쓰는 활성함수도 이동과 교환하므로 합성곱 층과 활성함수를 몇 번 합성해도 이동 등변이다.

## 이동과 교환하는 선형사상

정수 위의 수열에서 이동과 교환하는 [선형사상](linear-maps.md) $T$ 는 모두 합성곱이다. $\delta$ 를 $0$ 에서만 $1$ 인 수열이라 하면 $x=\sum_kx_kS^k\delta$ 이고, $TS^k=S^kT$ 이므로 $Tx=\sum_kx_kS^k(T\delta)$ 이다. 오른쪽은 $T\delta$ 와 $x$ 의 합성곱이다. 그래서 이동 등변성을 요구하는 선형 층은 합성곱 층뿐이다. 이동 대신 [군 작용](group-actions.md)과 교환하라고 요구하면 군 위의 합성곱이 나오고, 회전에도 등변인 신경망이 이 방식으로 만들어진다[^3].

## 가중치 수와 출력 크기

합성곱 층의 가중치는 $k^2C_{\mathrm{in}}C_{\mathrm{out}}$ 개이고 입력 크기 $H\times W$ 에 의존하지 않는다. 같은 입력과 출력을 잇는 완전 연결층은 $(HW)^2C_{\mathrm{in}}C_{\mathrm{out}}$ 개다. $28\times 28$ 흑백 사진에서 $3\times 3$ 커널 채널 하나는 $9$ 개, 완전 연결층은 약 $6.1\times 10^5$ 개다.

크기 $n$ 인 입력에 덧대기 $p$, 보폭 $s$ 로 크기 $k$ 커널을 쓰면 출력 크기는 $\lfloor(n+2p-k)/s\rfloor+1$ 이다. 직관 절은 $n=7$, $k=2$, $p=0$, $s=1$ 이라 $6$ 이다.

## 수용 영역

출력 한 칸의 값을 정하는 입력의 범위를 **수용 영역(receptive field)** 이라 한다. 보폭 $1$, 크기 $k$ 인 층을 $L$ 개 쌓으면 수용 영역은 $1+L(k-1)$ 이다. $3\times 3$ 층 두 개는 $5\times 5$ 범위를 보고 채널당 가중치가 $18$ 개로, $5\times 5$ 층 하나의 $25$ 개보다 적다. 풀링이나 보폭 $2$ 를 섞으면 수용 영역이 층마다 배로 넓어진다.

## 역전파

출력 $y=w\star x$ 에 대한 손실의 기울기를 $g_i=\partial\ell/\partial y_i$ 라 하면 다음이 성립한다.

$$
\frac{\partial\ell}{\partial w_a}=\sum_ig_i\thinspace x_{i+a}=(g\star x)\_a,\qquad\frac{\partial\ell}{\partial x_j}=\sum_ag_{j-a}\thinspace w_a
$$

커널의 기울기는 입력과 출력 기울기의 상호상관이고, 입력의 기울기는 출력 기울기와 커널의 합성곱이다. 둘 다 같은 꼴의 계산이므로 순전파와 같은 방법으로 계산한다. 커널이 크면 [고속 Fourier 변환](fft.md)으로 곱셈으로 바꾸어 계산한다.

# 활용

- 손글씨 숫자와 사진 분류. LeCun 등의 LeNet 은 합성곱 층과 풀링 층을 번갈아 쌓고 역전파로 학습해 우편번호 손글씨를 읽었고[^1], Krizhevsky, Sutskever, Hinton 의 AlexNet 은 같은 구조를 키워 120 만 장의 사진을 1000 부류로 분류했다[^2].
- [확산모형](diffusion-models.md)의 잡음 예측. 잡음을 맞히는 신경망 $\epsilon_\theta$ 는 사진과 크기가 같은 출력을 내야 하고, 합성곱 층으로 해상도를 낮췄다 다시 높이는 구조를 쓴다.
- 음성과 시계열. 시간축 하나의 1 차원 합성곱을 쓰고, 커널 성분 사이를 $2^\ell$ 칸씩 띄운 층을 쌓아 수용 영역을 층 수에 대해 지수적으로 넓힌다.

[^1]: Y. LeCun, L. Bottou, Y. Bengio, P. Haffner, "Gradient-based learning applied to document recognition", *Proceedings of the IEEE* 86 (1998), 2278–2324.
[^2]: A. Krizhevsky, I. Sutskever, G. E. Hinton, "ImageNet classification with deep convolutional neural networks", *Advances in Neural Information Processing Systems* 25 (2012), 1097–1105.
[^3]: T. Cohen and M. Welling, "Group equivariant convolutional networks", *Proceedings of the 33rd International Conference on Machine Learning* (2016), 2990–2999.

# 연관 문서

## 선수지식

- [다층 퍼셉트론](multilayer-perceptron.md)

## 더 알아보기

- [잔차 신경망](residual-networks.md)

#machine_learning #optimization #signal_processing
