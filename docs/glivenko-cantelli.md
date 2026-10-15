# Glivenko–Cantelli 정리

# 개요

Glivenko–Cantelli 정리는 경험 분포함수가 참 분포함수로 균등하게 수렴한다는 진술이다. 표본 $n$ 개에서 만든 계단함수 $F_n$ 과 참 함수 $F$ 의 차이를 모든 점에서 본 최대값이 거의 확실하게 $0$ 으로 간다.

점 하나를 고정하면 이 수렴은 [큰 수의 법칙](law-of-large-numbers.md)이다. 정리의 내용은 비가산 개의 점에서 그 수렴이 동시에 일어난다는 것이고, 근거는 $F_n$ 과 $F$ 가 모두 단조증가라는 데 있다.

# 직관

표본 $X_1,\dots,X_n$ 으로 분포를 추정한다. 점 $x$ 이하인 표본의 비율

$$F_n(x) = \frac1n\sum_{i=1}^n 1\lbrack X_i\le x\rbrack$$

은 $x$ 를 고정하면 성공확률 $F(x)$ 인 시행 $n$ 번의 성공 비율이고, 큰 수의 법칙이 $F_n(x)\to F(x)$ 를 준다. 모든 $x$ 에서 동시에 수렴하는가.

점을 유한 개 고르면 답이 나온다. $x_1,\dots,x_k$ 각각에서 차이가 $\varepsilon$ 을 넘을 확률이 Hoeffding 부등식으로 $2e^{-2n\varepsilon^2}$ 이하이고, 합집합 경계로 $k$ 개 전부에서 $2k\thinspace e^{-2n\varepsilon^2}$ 이하다. $x$ 가 실수 전체면 $k$ 가 무한이라 이 계산이 멈춘다.

점을 세는 대신 단조성을 쓴다. $F$ 의 값이 $1/k$ 씩 올라가는 점 $t_1,\dots,t_{k-1}$ 을 잡으면 이웃한 두 점 사이에서 $F$ 의 증가량이 $1/k$ 다. $x$ 가 $t_j$ 와 $t_{j+1}$ 사이에 있으면 $F_n$ 과 $F$ 가 둘 다 단조이므로

$$F_n(x)-F(x)\le F_n(t\_{j+1})-F(t\_{j+1}) + \frac1k$$

이고 반대쪽도 같은 꼴이다. 구간 안의 모든 $x$ 에서의 차이가 두 끝점에서의 차이에 $1/k$ 를 더한 값으로 묶인다.

그러므로 모든 $x$ 에서 본 최대 차이는 격자점 $k-1$ 개에서의 최대 차이에 $1/k$ 를 더한 값 이하다. $k$ 를 $\lceil 2/\varepsilon\rceil$ 로 잡고 앞의 유한 개 계산을 쓰면 최대 차이가 $\varepsilon$ 을 넘을 확률이 $2k\thinspace e^{-n\varepsilon^2/2}$ 이하이고, $n$ 이 커지면 $0$ 으로 간다.

# 정의

## 경험 분포함수

실수값 표본 $X_1,\dots,X_n$ 에 대해

$$F_n(x) = \frac1n\sum_{i=1}^n 1\lbrack X_i\le x\rbrack$$

을 **경험 분포함수**라 한다. $F_n$ 은 표본점에서 $1/n$ 씩 뛰는 오른쪽 연속 계단함수이고, 각 $x$ 에서 $E\lbrack F_n(x)\rbrack = F(x)$ 다.

## Kolmogorov–Smirnov 거리

$$D_n = \sup\_{x\in\mathbb R}\vert F_n(x)-F(x)\vert$$

을 **Kolmogorov–Smirnov 거리**라 한다. $F$ 가 연속이면 $D_n$ 의 분포는 $F$ 에 의존하지 않는다. $U_i=F(X_i)$ 가 $\lbrack 0,1\rbrack$ 의 균등분포를 따르고 $D_n$ 이 그 균등 표본의 같은 양과 같기 때문이다.

# 성질

## 균등수렴

**정리.** $X_i$ 가 분포함수 $F$ 를 따르는 독립 표본이면 $D_n\to 0$ 이 거의 확실하게 성립한다.

증명은 직관 절의 격자 계산에 Borel–Cantelli 보조정리를 붙인 것이다. 각 $\varepsilon$ 에 대해 $P(D_n\gt \varepsilon)$ 이 $n$ 에 대해 지수로 줄어 합이 유한하므로, $D_n\gt \varepsilon$ 인 사건이 유한 번만 일어난다. $\varepsilon$ 을 $1/m$ 으로 두고 $m$ 에 대해 합집합을 취한다.

$F$ 가 불연속이어도 결론이 성립한다. 격자점을 $F$ 의 값이 $1/k$ 를 넘어 뛰는 자리에서 그 뜀의 양쪽에 두면 같은 계산이 간다.

## VC 이론으로 본 증명

반직선족 $\mathcal H=\lbrace 1\lbrack x\le t\rbrack : t\in\mathbb R\rbrace$ 의 [VC(Vapnik–Chervonenkis) 차원](vc-dimension.md)은 $1$ 이다. VC 부등식을 이 족에 적용하면

$$P(D_n\gt \varepsilon)\le 4(2n+1)\thinspace e^{-n\varepsilon^2/8}$$

단조성을 쓰는 고전 증명과 달리 이 길은 성장함수만 쓰므로, 반직선을 다른 집합족으로 바꾸어도 그 족의 VC 차원이 유한하면 같은 결론이 나온다. 그렇게 얻는 균등수렴 성질을 가진 함수족을 Glivenko–Cantelli 족이라 한다.

## Dvoretzky–Kiefer–Wolfowitz 부등식

**정리.** 모든 $n$ 과 $\varepsilon\gt 0$ 에 대해

$$P(D_n\gt \varepsilon)\le 2e^{-2n\varepsilon^2}$$

상수 $2$ 가 최적이다[^1]. 지수의 $2n\varepsilon^2$ 은 점 하나에서 Hoeffding 이 주는 것과 같아, 비가산 개의 점에서 동시에 요구해도 지수 비율에서 손해가 없다.

## 수렴 속도

$\sqrt n\thinspace D_n$ 은 분포수렴한다. 극한은 $\lbrack 0,1\rbrack$ 위의 Brown 다리의 절댓값의 최대값이고 그 분포함수는

$$P(\sqrt n\thinspace D_n\le z)\to 1-2\sum_{j=1}^{\infty}(-1)^{j-1}e^{-2j^2z^2}$$

이다. 경험 과정 $\sqrt n(F_n-F)$ 가 함수 공간에서 Brown 다리로 [약수렴](weak-convergence.md)하는 Donsker 정리의 한 결과다. [Brown 운동](brownian-motion.md) $B$ 에서 Brown 다리는 $B_t - tB_1$ 로 얻는다.

# 활용

## 적합도 검정

$D_n$ 의 극한분포가 $F$ 에 의존하지 않으므로, 표본이 특정 분포 $F_0$ 에서 왔다는 귀무가설의 기각역을 $\sqrt n D_n$ 의 분위수로 정한다. [가설검정](hypothesis-testing.md)의 검정통계량이 분포 가정 없이 구성되는 예다.

## 동시 신뢰띠

Dvoretzky–Kiefer–Wolfowitz 부등식에서 $\varepsilon=\sqrt{\log(2/\alpha)/(2n)}$ 으로 잡으면 $F_n\pm\varepsilon$ 이 확률 $1-\alpha$ 로 $F$ 전체를 감싼다. [신뢰구간](confidence-intervals.md)이 모수 하나에 주는 보장을 함수 전체에 준다.

## 분포의 대체

표본으로 분포를 바꿔 놓고 계산하는 방법의 근거가 이 정리다. 참 분포에 대한 기댓값을 경험 분포에 대한 기댓값으로 바꾸어 계산하고, $F_n$ 과 $F$ 의 거리가 $0$ 으로 가므로 그 값이 참값으로 간다. [최대가능도 추정](maximum-likelihood.md)의 일치성 증명에서도 가능도의 평균을 균등수렴으로 통제한다.

[^1]: P. Massart, "The tight constant in the Dvoretzky–Kiefer–Wolfowitz inequality", Annals of Probability 18 (1990), 1269–1283.

# 연관 문서

## 선수지식

- [VC 차원](vc-dimension.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning
