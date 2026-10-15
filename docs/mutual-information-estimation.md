# 상호정보량 추정

# 개요

상호정보량 추정은 결합분포를 모르고 표본만 있을 때 $I(X;Y)$ 의 값을 재는 문제다. 밀도를 먼저 추정하는 대신 [KL divergence](kl-divergence.md)(Kullback–Leibler)의 변분 표현을 써서 하한을 최대화한다.

$$
I(X;Y)=\mathrm{KL}(p\_{XY}\Vert p_X p_Y)=\sup_{T}\thinspace\mathbb E_{p\_{XY}}\lbrack T\rbrack-\log\mathbb E_{p_X p_Y}\lbrack e^{T}\rbrack
$$

모든 가측 함수에 대해 상한을 취하면 등호가 성립하고, 함수족을 신경망으로 좁히면 하한이 된다. 두 기댓값을 표본평균으로 바꾸면 표본만으로 계산되는 추정량이 나온다.

# 직관

두 측정값이 서로 얼마나 알려 주는지 재려고 한다. 상관계수는 직선 관계만 보므로 $Y=X^2$ 에서 $X$ 가 대칭분포이면 $0$ 이 된다. 상호정보량은 이런 의존도 잡지만 계산에 밀도 $p(x,y)$ 가 들어가고, 손에 있는 것은 표본 쌍 $(x_i,y_i)$ 뿐이다.

밀도를 칸으로 추정해 본다. 두 변수가 각각 $d$ 차원이고 축마다 $10$ 칸으로 자르면 칸이 $10^{2d}$ 개다. 표본이 $10^4$ 개일 때 $d=2$ 에서 칸이 $10^4$ 개이므로 칸마다 표본 하나가 돌아가고, 빈 칸의 확률을 $0$ 으로 읽으면 그 칸의 기여가 사라진다. $d$ 를 하나 올릴 때마다 칸이 $100$ 배가 되어 추정값이 표본의 흔들림을 따라간다.

상호정보량의 식에는 밀도가 따로 들어가지 않고 비 $p(x,y)/p(x)p(y)$ 만 들어간다. 그래서 두 밀도를 각각 추정하는 대신 비를 하나의 함수로 보고 그 함수를 직접 맞춘다.

비를 맞추는 기준이 개요의 변분 표현이다. 함수 $T$ 를 하나 놓고 결합표본에서의 평균과 섞은 표본에서의 지수 평균을 견주면, 그 차이가 $T=\log\frac{p(x,y)}{p(x)p(y)}$ 에서 가장 커지고 그 최댓값이 $I(X;Y)$ 다. 결합표본은 쌍 $(x_i,y_i)$ 를 그대로 쓰고 섞은 표본은 $y$ 를 뒤섞어 만든다.

# 정의

## Donsker–Varadhan 추정량

함수족 $\mathcal T$ 를 정하고 표본 $n$ 개로 다음을 계산한다.

$$
\hat I_{\mathrm{DV}}=\sup_{T\in\mathcal T}\thinspace\frac1n\sum_{i=1}^{n}T(x_i,y_i)-\log\frac1n\sum_{i=1}^{n}e^{T(x_i,y_{\pi(i)})}
$$

$\pi$ 는 첨자의 뒤섞기다. $\mathcal T$ 를 매개변수 $\theta$ 의 신경망으로 두고 경사상승법으로 푸는 것이 **MINE**(mutual information neural estimation)이다.[^1]

## InfoNCE 하한

쌍 $(x_1,y_1)$ 과 같은 $y_1$ 에 대한 가짜 짝 $x_2,\dots,x_K$ 를 모아 점수 $f$ 로 참 짝을 고르는 문제를 만든다.

$$
I(X;Y)\ge\mathbb E\lbrack\log\frac{e^{f(x_1,y_1)}}{\frac1K\sum_{k=1}^{K}e^{f(x_k,y_1)}}\rbrack
$$

우변을 InfoNCE(noise-contrastive estimation) 하한이라 하고, 최적 점수는 비의 로그에 $y$ 만의 함수를 더한 것이다.[^2]

# 성질

## InfoNCE 하한의 한계

InfoNCE 하한은 $\log K$ 를 넘지 못한다. 분류 문제의 정답률이 $1$ 일 때 우변이 $\log K$ 이기 때문이다. 그래서 $I(X;Y)$ 가 $\log K$ 보다 크면 가짜 짝의 개수를 늘리지 않는 한 추정값이 그 자리에서 멈춘다.

## 표본 수의 하한

> **정리.** 어떤 추정량도 신뢰구간의 폭을 $\mathcal O(1)$ 로 두려면 표본이 $\exp(I(X;Y))$ 쯤 필요하다.[^3]

증명의 요지는 분포 두 개를 만드는 것이다. 상호정보량이 크게 다르고 표본 $n$ 개로는 구별되지 않는 쌍을 만들면, 두 분포에서 같은 값을 내놓아야 하므로 어느 한쪽에서 틀린다. 그래서 $I$ 가 큰 영역에서는 추정값의 신뢰구간이 넓고, 보고된 값의 크기 비교만 쓰는 것이 안전하다.

## 편향과 분산

$\hat I\_{\mathrm{DV}}$ 의 둘째 항은 지수의 평균에 로그를 씌운 것이라 표본 하나가 전체를 끌 수 있다. $T$ 의 값이 커지면 분산이 지수로 늘고, 경사의 분산도 같이 늘어 학습이 불안정하다. $T$ 의 출력에 상한을 두거나 둘째 항의 로그를 선형으로 바꾼 하한을 쓰면 분산이 줄고 편향이 생긴다.

# 활용

- 대조 학습에서 손실 함수가 InfoNCE 하한의 음수다. 같은 원본에서 만든 두 관측을 참 짝으로 두고 다른 원본의 관측을 가짜 짝으로 쓴다.
- [정보 병목](information-bottleneck.md)의 두 항을 표본으로 계산할 때 쓴다. $I(X;T)$ 는 위에서 잡는 하한이 아니라 상한이 필요하므로 KL 항으로 바꾸고, $I(T;Y)$ 에 이 하한을 쓴다.
- 독립성 검정에서 검정통계량으로 쓴다. 뒤섞은 표본으로 영분포를 만들고 추정값의 위치를 본다.
- 특징 선택에서 후보 변수와 목표 사이의 추정값을 비교한다. 추정량의 편향이 변수의 차원에 따라 달라지므로 차원이 다른 후보를 값으로 직접 견주지 않는다.

[^1]: M. I. Belghazi et al., "Mutual information neural estimation", *Proc. ICML 2018*, 531–540 쪽.
[^2]: A. van den Oord, Y. Li, O. Vinyals, "Representation learning with contrastive predictive coding", arXiv:1807.03748, 2018.
[^3]: D. McAllester, K. Stratos, "Formal limitations on the measurement of mutual information", *Proc. AISTATS 2020*, 875–884 쪽.

# 연관 문서

## 선수지식

- [KL divergence](kl-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #statistics #machine_learning
