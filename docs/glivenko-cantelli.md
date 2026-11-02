# Glivenko–Cantelli 정리

# 개요

**Glivenko–Cantelli 정리(Glivenko–Cantelli theorem)** 는 표본으로 만든 누적분포함수가 표본이 늘어나면 참 누적분포함수에 모든 점에서 한꺼번에 가까워진다는 정리다. 표본 $n$ 개 가운데 $x$ 이하인 것의 비율 $F_n(x)$ 는 점 $x$ 하나마다 [큰 수의 법칙](law-of-large-numbers.md)으로 $F(x)$ 에 수렴하지만, 점이 셀 수 없이 많으므로 모든 점에서 동시에 가까워지는지는 따로 보여야 한다. 이 정리는 $F_n$ 과 $F$ 가 모두 증가함수라는 것을 써서 유한 개의 점에서의 수렴으로 전체를 묶고, $\sup_x\vert F_n(x)-F(x)\vert\to 0$ 이 거의 확실하게 성립함을 보인다.

# 직관

표본 $X_1,\dots,X_n$ 으로 분포를 추정한다. 점 $x$ 이하인 표본의 비율

$$F_n(x) = \frac1n\sum_{i=1}^n 1\lbrack X_i\le x\rbrack$$

은 $x$ 를 고정하면 성공확률 $F(x)$ 인 시행 $n$ 번의 성공 비율이고, 큰 수의 법칙이 $F_n(x)\to F(x)$ 를 준다. 모든 $x$ 에서 동시에 수렴하는가.

점을 유한 개 고르면 답이 나온다. $x_1,\dots,x_k$ 각각에서 차이가 $\varepsilon$ 을 넘을 확률은 Hoeffding 부등식(Hoeffding's inequality)으로 $2e^{-2n\varepsilon^2}$ 이하이고, 합집합 경계(union bound)로 $k$ 개 전부에서 $2k\thinspace e^{-2n\varepsilon^2}$ 이하다. $x$ 가 [실수](real-numbers.md) 전체면 $k$ 가 무한이라 이 계산이 멈춘다.

점을 세는 대신 단조성을 쓴다. $F$ 의 값이 $1/k$ 씩 올라가는 점 $t_1,\dots,t_{k-1}$ 을 잡으면 이웃한 두 점 사이에서 $F$ 의 증가량이 $1/k$ 다. $x$ 가 $t_j$ 와 $t_{j+1}$ 사이에 있으면 $F_n$ 과 $F$ 가 둘 다 단조이므로

$$F_n(x)-F(x)\le F_n(t\_{j+1})-F(t\_{j+1}) + \frac1k$$

이고 반대쪽도 같은 꼴이다. 구간 안의 모든 $x$ 에서의 차이가 두 끝점에서의 차이에 $1/k$ 를 더한 값으로 묶인다.

그러므로 모든 $x$ 에서 본 최대 차이는 격자점 $k-1$ 개에서의 최대 차이에 $1/k$ 를 더한 값 이하다. $k$ 를 $\lceil 2/\varepsilon\rceil$ 로 잡고 앞의 유한 개 계산을 쓰면 최대 차이가 $\varepsilon$ 을 넘을 확률이 $2k\thinspace e^{-n\varepsilon^2/2}$ 이하이고, $n$ 이 커지면 $0$ 으로 간다.

# 정의

## 경험 분포함수

실수값 표본 $X_1,\dots,X_n$ 에 대해

$$F_n(x) = \frac1n\sum_{i=1}^n 1\lbrack X_i\le x\rbrack$$

을 **경험 분포함수(empirical distribution function)** 라 한다. $F_n$ 은 표본점에서 $1/n$ 씩 뛰는 오른쪽 연속 계단함수이고, 각 $x$ 에서 $E\lbrack F_n(x)\rbrack = F(x)$ 다.

$\lbrack 0,1\rbrack$ 의 [균등분포](uniform-distribution.md)에서 표본 $0.2, 0.5, 0.9$ 를 얻으면 $F_3$ 은 $x\lt 0.2$ 에서 $0$, $\lbrack 0.2,0.5)$ 에서 $1/3$, $\lbrack 0.5,0.9)$ 에서 $2/3$, $x\ge 0.9$ 에서 $1$ 이다. 참 분포함수는 $F(x)=x$ 다.

## Kolmogorov–Smirnov 거리

$$D_n = \sup\_{x\in\mathbb R}\vert F_n(x)-F(x)\vert$$

을 **Kolmogorov–Smirnov 거리(Kolmogorov–Smirnov distance)** 라 한다.

위의 세 점 표본에서 $\vert F_3(x)-x\vert$ 는 $0.9$ 바로 왼쪽에서 $0.9-2/3$ 에 다가가고 다른 구간에서는 그보다 작으므로 $D_3=0.9-2/3\approx 0.233$ 이다.

# 성질

## 분포 무관성

$F$ 가 연속이면 $D_n$ 의 분포는 $F$ 에 의존하지 않는다. $U_i=F(X_i)$ 는 $\lbrack 0,1\rbrack$ 의 균등분포를 따르고, $x\mapsto F(x)$ 로 변수를 바꾸면 $D_n$ 이 균등 표본 $U_1,\dots,U_n$ 의 Kolmogorov–Smirnov 거리와 같아진다.

## 균등수렴

$X_i$ 가 분포함수 $F$ 를 따르는 독립 표본이면 $D_n\to 0$ 이 거의 확실하게 성립한다.

증명은 직관 절의 격자 계산에 [Borel–Cantelli 보조정리](borel-cantelli.md)를 붙인 것이다. 각 $\varepsilon$ 에 대해 $P(D_n\gt \varepsilon)$ 이 $n$ 에 대해 지수로 줄어 합이 유한하므로, $D_n\gt \varepsilon$ 인 사건이 유한 번만 일어난다. $\varepsilon$ 을 $1/m$ 으로 두고 $m$ 에 대해 합집합을 취한다.

$F$ 가 불연속이어도 결론이 성립한다. 격자점을 $F$ 의 값이 $1/k$ 를 넘어 뛰는 자리에서 그 뜀의 양쪽에 두면 같은 계산이 간다.

## VC 이론으로 본 증명

반직선족 $\mathcal H=\lbrace 1\lbrack x\le t\rbrack : t\in\mathbb R\rbrace$ 의 [VC 차원](vc-dimension.md)(Vapnik–Chervonenkis dimension)은 $1$ 이다. VC 부등식(VC inequality)을 이 족에 적용하면

$$P(D_n\gt \varepsilon)\le 4(2n+1)\thinspace e^{-n\varepsilon^2/8}$$

이 증명은 단조성을 쓰지 않고 성장함수(growth function)만 쓴다. 그래서 반직선을 다른 집합족으로 바꾸어도 그 족의 VC 차원이 유한하면 같은 결론이 나온다. 이처럼 표본평균이 족 전체에서 균등하게 수렴하는 함수족을 Glivenko–Cantelli 족(Glivenko–Cantelli class)이라 한다.

## Dvoretzky–Kiefer–Wolfowitz 부등식

Dvoretzky–Kiefer–Wolfowitz 부등식(Dvoretzky–Kiefer–Wolfowitz inequality)은 다음이다. 모든 $n$ 과 $\varepsilon\gt 0$ 에 대해

$$P(D_n\gt \varepsilon)\le 2e^{-2n\varepsilon^2}$$

상수 $2$ 는 최적이다.[^1] 지수의 $2n\varepsilon^2$ 은 점 하나에서 Hoeffding 부등식이 주는 것과 같다. 그러므로 모든 점에서 동시에 요구해도 지수의 비율이 줄지 않는다.

## 수렴 속도

$\sqrt n\thinspace D_n$ 은 분포수렴한다. 극한은 $\lbrack 0,1\rbrack$ 위의 [Brown 다리](brownian-bridge.md)의 절댓값의 최대값이고 그 분포함수는

$$P(\sqrt n\thinspace D_n\le z)\to 1-2\sum_{j=1}^{\infty}(-1)^{j-1}e^{-2j^2z^2}$$

이다. 경험 과정 $\sqrt n(F_n-F)$ 가 함수 공간에서 Brown 다리로 [약수렴](weak-convergence.md)한다는 Donsker 정리(Donsker's theorem)에서 유도된다. [Donsker 불변원리](donsker-invariance-principle.md)는 같은 꼴의 수렴을 부분합 과정에 대해 말한다. [Brown 운동](brownian-motion.md) $B$ 에서 Brown 다리는 $B_t - tB_1$ 로 얻는다.

# 활용

## 적합도 검정

$D_n$ 의 분포가 연속인 $F$ 에 의존하지 않으므로, 표본이 특정 분포 $F_0$ 에서 왔다는 귀무가설의 기각역을 $\sqrt n D_n$ 의 분위수로 정한다. 이것이 [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)이고, [가설검정](hypothesis-testing.md)에서 검정통계량의 분포가 $F_0$ 의 꼴에 의존하지 않는 예다.

## 동시 신뢰띠

Dvoretzky–Kiefer–Wolfowitz 부등식에서 $\varepsilon=\sqrt{\log(2/\alpha)/(2n)}$ 으로 잡으면 $F_n\pm\varepsilon$ 이 확률 $1-\alpha$ 로 $F$ 전체를 감싼다. [신뢰구간](confidence-intervals.md)이 모수 하나에 주는 보장을 함수 전체에 준다.

## 분포의 대체

참 분포에 대한 기댓값을 경험 분포에 대한 기댓값으로 바꾸어 계산하는 방법은 이 정리를 근거로 쓴다. $F_n$ 과 $F$ 의 거리가 $0$ 으로 가므로 $F$ 의 연속 범함수는 $F_n$ 에서 계산한 값이 참값으로 간다. [붓스트랩](bootstrap.md)은 이 대체로 추정량의 분포를 근사한다. [최대가능도 추정](maximum-likelihood.md)의 일치성 증명에서도 가능도의 평균을 균등수렴으로 통제한다.

[^1]: P. Massart, "The tight constant in the Dvoretzky–Kiefer–Wolfowitz inequality", Annals of Probability 18 (1990), 1269–1283.

# 연관 문서

## 선수지식

- [VC 차원](vc-dimension.md)

## 더 알아보기

- [경험 과정](empirical-process.md)
- [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)

#statistics #probability #machine_learning
