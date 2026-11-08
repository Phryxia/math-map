# 잔차 신경망

# 개요

**잔차 신경망(residual network, ResNet)** 은 층마다 입력을 그대로 출력에 더하는 길을 두어, 층이 입력 자체 대신 입력에 더할 차이만 계산하게 한 신경망이다. 층을 수십 개 쌓은 [합성곱 신경망](convolutional-neural-networks.md)은 층마다 기울기에 1 보다 작은 수가 곱해져 앞쪽 층의 기울기가 거의 $0$ 이 되고, 층을 더 쌓을수록 훈련 오차가 오히려 커진다. 잔차 신경망은 더하는 길로 기울기에 항등 항을 남겨, 층을 백 개 넘게 쌓아도 앞쪽 층까지 기울기가 전해지게 한다.

# 직관

입력 $x$ 에 수 $w_1,\dots,w_L$ 을 차례로 곱하는 신경망 $f(x)=w_L\cdots w_1x$ 를 생각한다. 첫 가중치에 대한 기울기는 $\partial f/\partial w_1=w_L\cdots w_2\thinspace x$ 다. 모든 $w_\ell$ 이 $0.5$ 이고 $L=20$ 이면 이 값은 $0.5^{19}x\approx 1.9\times 10^{-6}x$ 이고, [경사하강법](gradient-descent.md)은 $w_1$ 을 거의 움직이지 못한다. 모든 $w_\ell$ 이 $1.5$ 이면 $1.5^{19}\approx 2217$ 배로 커진다.

층마다 입력을 더해 $h_\ell=h_{\ell-1}+a_\ell h_{\ell-1}$ 로 바꾼다. 그러면 $f(x)=(1+a_L)\cdots(1+a_1)x$ 이고 $\partial f/\partial a_1=(1+a_L)\cdots(1+a_2)\thinspace x$ 다. 모든 $a_\ell$ 을 $0$ 에서 시작하면 이 기울기는 $x$ 이고, 층이 몇 개든 줄어들지 않는다. 층이 해야 할 일도 $1$ 을 곱하는 항등사상이 아니라 $0$ 을 더하는 것에서 시작한다.

# 정의

**잔차 블록(residual block)** 은 함수 $F_\ell$ 로 정한 다음 사상이다.

$$
h^\ell=h^{\ell-1}+F_\ell(h^{\ell-1})
$$

$F_\ell$ 을 **잔차 함수(residual function)**, 더하는 길을 **잔차 연결(residual connection, shortcut connection)** 이라 한다. He 등의 원래 구성에서 $F_\ell$ 은 $3\times 3$ 합성곱 층 두 개 사이에 정류 선형 단위(rectified linear unit, ReLU)를 끼운 것이다[^1]. 직관 절은 $F_\ell(h)=a_\ell h$ 인 경우다.

$h^{\ell-1}$ 과 $F_\ell(h^{\ell-1})$ 의 채널 수나 크기가 다르면 잔차 연결에 선형사상 $W_s$ 를 두어 $h^\ell=W_sh^{\ell-1}+F_\ell(h^{\ell-1})$ 로 쓴다. 잔차 블록을 쌓고 끝에 완전 연결층을 붙인 신경망을 잔차 신경망이라 한다.

# 성질

## 기울기의 항등 항

연쇄법칙으로 $\ell\lt L$ 에서 다음이 성립한다.

$$
\frac{\partial h^L}{\partial h^\ell}=\prod_{k=\ell+1}^{L}\Bigl(I+\frac{\partial F_k}{\partial h}(h^{k-1})\Bigr)
$$

곱을 전개하면 항등행렬 $I$ 가 한 항으로 들어 있다. 손실 $\mathcal L$ 의 기울기 $\partial\mathcal L/\partial h^\ell$ 은 $\partial\mathcal L/\partial h^L$ 을 그대로 전한 항과 잔차 함수를 거친 항의 합이다. 직관 절에서 $a_k=0$ 이면 곱이 $1$ 이다.

## 경로의 합

$(1+a_2)(1+a_1)=1+a_1+a_2+a_2a_1$ 처럼, 블록 $L$ 개를 전개하면 각 블록에서 잔차 연결과 잔차 함수 가운데 하나를 고른 $2^L$ 개 경로의 합이 된다. 잔차 함수를 $j$ 번 거치는 경로는 $\binom Lj$ 개이고, 훈련된 잔차 신경망에서 기울기의 대부분은 $j$ 가 작은 짧은 경로로 전해진다[^2].

## 상미분방정식의 Euler 걸음

$F_\ell(h)=\Delta t\thinspace f(h,\theta_\ell)$ 이면 잔차 블록은 [상미분방정식](ordinary-differential-equations.md) $h'(t)=f(h(t),\theta(t))$ 에 Euler 방법(Euler method)을 걸음 크기 $\Delta t$ 로 한 걸음 쓴 것이다. 블록 수를 늘리고 $\Delta t$ 를 줄인 극한이 신경 상미분방정식(neural ordinary differential equation)이고, 그 기울기는 수반 방정식을 거꾸로 풀어 계산한다[^3].

## 가역성

$F$ 가 Lipschitz 상수 $c\lt 1$ 인 사상이면 $h\mapsto h+F(h)$ 는 전단사다. 출력 $y$ 에서 $h=y-F(h)$ 의 해는 $h\mapsto y-F(h)$ 가 축약사상이므로 [축약사상 고정점 정리](banach-fixed-point.md)로 하나뿐이고, $h_{k+1}=y-F(h_k)$ 의 반복이 그 해로 수렴한다. 직관 절의 $h\mapsto(1+a)h$ 는 $\vert a\vert\lt 1$ 이면 역사상이 $h\mapsto h/(1+a)$ 다. 가중치의 스펙트럼 노름을 제한해 이 조건을 맞춘 신경망이 가역 잔차 신경망(invertible residual network)이다[^4].

# 활용

- 사진 분류. He 등은 층이 152 개인 잔차 신경망으로 ImageNet 분류 오차를 같은 깊이의 잔차 연결 없는 신경망보다 낮추었고, 잔차 연결이 없으면 층이 많은 쪽의 훈련 오차가 더 크다는 것을 보였다[^1].
- [확산모형](diffusion-models.md)의 잡음 예측 신경망. 해상도를 낮췄다 높이는 합성곱 신경망의 각 단계가 잔차 블록이다.
- 정규화 흐름(normalizing flow). 가역 잔차 신경망은 역사상을 고정점 반복으로 계산하고, 밀도 변환에 필요한 Jacobian 행렬식의 로그를 [Hutchinson 대각합 추정량](hutchinson-trace-estimator.md)과 거듭제곱 급수로 추정한다[^4].

[^1]: K. He, X. Zhang, S. Ren, J. Sun, "Deep residual learning for image recognition", *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition* (2016), 770–778.
[^2]: A. Veit, M. Wilber, S. Belongie, "Residual networks behave like ensembles of relatively shallow networks", *Advances in Neural Information Processing Systems* 29 (2016).
[^3]: R. T. Q. Chen, Y. Rubanova, J. Bettencourt, D. Duvenaud, "Neural ordinary differential equations", *Advances in Neural Information Processing Systems* 31 (2018).
[^4]: J. Behrmann, W. Grathwohl, R. T. Q. Chen, D. Duvenaud, J.-H. Jacobsen, "Invertible residual networks", *Proceedings of the 36th International Conference on Machine Learning* (2019), 573–582.

# 연관 문서

## 선수지식

- [합성곱 신경망](convolutional-neural-networks.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #optimization #analysis
