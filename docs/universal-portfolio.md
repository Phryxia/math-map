# 보편 포트폴리오

# 개요

**보편 포트폴리오(universal portfolio)** 는 자산 가격의 분포를 가정하지 않고, 모든 고정 비율 포트폴리오의 결과를 평균하는 방식으로 투자 비율을 정하는 전략이다. T. M. Cover 가 1991 년에 제안했다.[^1]

[Kelly 기준](kelly-criterion.md)은 수익률의 분포를 알 때 로그 성장률을 최대로 한다. 보편 포트폴리오는 분포를 모르는 채로, 사후에 본 최선의 고정 비율 포트폴리오와 같은 지수 성장률을 얻는다.

# 직관

현금과 주식 하나가 있다. 주식 가격은 매 기간 번갈아 $2$ 배가 되고 절반이 된다. 주식만 가지고 있거나 현금만 가지고 있으면 두 기간이 지날 때마다 돈이 처음과 같다.

매 기간 초에 돈의 절반을 주식에, 절반을 현금에 두도록 다시 맞춘다. 주식이 $2$ 배가 되는 기간에는 돈이 $\frac12\cdot 2+\frac12\cdot 1=1.5$ 배, 절반이 되는 기간에는 $\frac12\cdot\frac12+\frac12\cdot 1=0.75$ 배가 된다. 두 기간마다 $1.5\cdot 0.75=1.125$ 배이므로 돈이 지수적으로 불어난다. 주식 비율 $b$ 로 맞추면 두 기간의 배율은 $(1+b)(1-b/2)$ 이고, 이것을 최대로 하는 $b$ 가 $1/2$ 이다.

그런데 가격이 어떻게 움직일지 미리 알아야 $b=1/2$ 를 고를 수 있다. 그래서 돈을 잘게 나누어 가능한 모든 $b$ 에 하나씩 맡기고, 각각을 비율 $b$ 로 따로 굴린다. 전체 돈은 모든 $b$ 의 결과를 평균한 것이다. 최선의 $b$ 근처에 맡긴 몫이 지수적으로 불어나므로 평균도 같은 지수 속도로 불어난다.

# 정의

자산이 $m$ 개이고 기간 $k$ 의 가격 상대값을 $x_k\in\mathbb R_{\gt 0}^m$ 이라 한다. $x_{k,j}$ 는 자산 $j$ 의 기간 말 가격을 기간 초 가격으로 나눈 값이다. 포트폴리오는 단체 $\Delta_m=\lbrace b\in\mathbb R_{\ge 0}^m:\sum_jb_j=1\rbrace$ 의 점이다.

매 기간 같은 $b$ 로 다시 맞추는 전략을 **고정 비율 포트폴리오(constant rebalanced portfolio)** 라 한다. $n$ 기간 뒤의 돈은

$$
S_n(b)=\prod_{k=1}^n b\cdot x_k
$$

이고, 사후에 본 최선의 값을 $S_n^\ast=\max_{b\in\Delta_m}S_n(b)$ 로 쓴다.

**보편 포트폴리오** 는 기간 $k+1$ 에 비율

$$
\hat b_{k+1}=\frac{\int_{\Delta_m}b\thinspace S_k(b)\thinspace db}{\int_{\Delta_m}S_k(b)\thinspace db}
$$

을 쓰는 전략이다. 적분은 $\Delta_m$ 위의 균등분포에 대한 것이고, $\hat b_1$ 은 균등 비율이다.

# 성질

## 평균의 항등식

**명제.** 보편 포트폴리오의 돈은 $\hat S_n=\int_{\Delta_m}S_n(b)\thinspace db$ 이다. 적분은 균등분포에 대한 평균이다.

$k$ 에 대한 귀납법이다. $\hat b_{k+1}\cdot x_{k+1}=\int S_k(b)\thinspace(b\cdot x_{k+1})\thinspace db/\int S_k(b)\thinspace db=\int S_{k+1}(b)\thinspace db/\int S_k(b)\thinspace db$ 이므로 곱이 망원곱으로 줄어든다. $\square$

## 후회의 상한

**정리 (Cover).** 모든 가격열 $x_1,\dots,x_n$ 에 대해

$$
\frac{\hat S_n}{S_n^\ast}\ge\frac{1}{e\thinspace(n+1)^{m-1}}
$$

이다. 그러므로 $\frac1n\log S_n^\ast-\frac1n\log\hat S_n\le\frac{(m-1)\log(n+1)+1}{n}\to 0$ 이다.[^2]

증명의 요지. 최선의 $b^\ast$ 근처에서 $b=(1-\varepsilon)b^\ast+\varepsilon c$ ($c\in\Delta_m$) 꼴의 점을 보면 $b\cdot x_k\ge(1-\varepsilon)b^\ast\cdot x_k$ 이므로 $S_n(b)\ge(1-\varepsilon)^nS_n^\ast$ 다. 이런 $b$ 의 집합은 $\Delta_m$ 의 부피 가운데 $\varepsilon^{m-1}$ 을 차지한다. 그러므로 $\hat S_n\ge\varepsilon^{m-1}(1-\varepsilon)^nS_n^\ast$ 이고, $\varepsilon=1/(n+1)$ 로 잡으면 $(1-\varepsilon)^n\ge e^{-1}$ 이다. $\square$

$\log S_n^\ast-\log\hat S_n$ 을 **후회(regret)** 라 한다. 가격열을 확률로 가정하지 않으므로 이 상한은 가장 나쁜 가격열에 대해서도 성립한다.

## Dirichlet 사전분포

균등분포 대신 매개변수가 모두 $1/2$ 인 Dirichlet 분포(Dirichlet distribution)로 평균하면 후회의 상한이 $\frac{m-1}2\log n+O(1)$ 로 줄어든다. 계수 $\frac{m-1}2$ 는 어떤 전략도 모든 가격열에서 더 줄일 수 없다.[^3]

# 활용

- **분포를 모르는 투자.** 자산 수익률이 매 기간 독립으로 같은 분포를 따르면 최선의 고정 비율 포트폴리오가 Kelly 기준의 포트폴리오다. 보편 포트폴리오는 그 분포를 추정하지 않고 같은 성장률을 얻는다.
- **순차 예측과 부호화.** 자산 $m$ 개가 기호 $m$ 개이고 $x_k$ 가 나온 기호의 표시 벡터이면 $S_n(b)$ 는 독립 동일 분포 $b$ 의 가능도다. 이때 보편 포트폴리오의 비율은 [Laplace 계승 규칙](rule-of-succession.md)의 예측 확률과 같고, $-\log\hat S_n$ 이 그 예측으로 만든 부호의 길이다.
- **온라인 학습.** 매 회차 손실을 보고 비율을 고치는 [곱셈 가중치 절차](multiplicative-weights.md)와 같은 틀의 문제다. 손실이 $-\log(b\cdot x_k)$ 인 경우이고, 후회가 $\log n$ 규모로 작은 것은 이 손실이 지수 오목(exp-concave)이기 때문이다.

[^1]: Thomas M. Cover, "Universal portfolios", *Mathematical Finance* 1 (1991), 1–29.
[^2]: Thomas M. Cover, Joy A. Thomas, *Elements of Information Theory*, 2nd ed., Wiley, 2006, 16.7 절.
[^3]: Erik Ordentlich, Thomas M. Cover, "The cost of achieving the best portfolio in hindsight", *Mathematics of Operations Research* 23 (1998), 960–982.

# 연관 문서

## 선수지식

- [Kelly 기준](kelly-criterion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #optimization #probability
