# Kolmogorov–Smirnov 검정

# 개요

**Kolmogorov–Smirnov 검정(Kolmogorov–Smirnov test)** 은 표본이 주어진 분포에서 왔는지 판정할 때, 표본에서 센 누적 비율과 그 분포의 누적 확률이 가장 크게 어긋나는 정도를 보는 검정이다. 표본 $100$ 개가 $\lbrack 0,1\rbrack$ 의 균등분포에서 왔는지 보려 한다. $0.1$ 근처와 $0.9$ 근처에 절반씩 몰린 표본도 평균이 $0.5$ 여서 평균만으로는 균등분포와 구별되지 않는다. 이 검정은 모든 점 $x$ 에서 $x$ 이하인 표본의 비율과 $x$ 를 비교해, 그 차이의 최댓값이 우연으로 나오기 어려울 만큼 크면 균등분포라는 가설을 버린다.

# 직관

검정통계량은 표본의 경험 분포함수와 가설의 분포함수 사이의 최대 차이 $D_n$ 이다. 귀무가설의 분포가 연속이면 $D_n$ 의 분포가 그 분포에 의존하지 않으므로, 기각역 하나로 모든 연속분포를 검정한다. 두 표본의 경험 분포함수끼리 비교하는 이표본 판본도 있다.

[Glivenko–Cantelli 정리](glivenko-cantelli.md)가 $D_n\to 0$ 과 $\sqrt n D_n$ 의 극한분포를 주고, 이 검정은 그 극한분포의 분위수로 [가설검정](hypothesis-testing.md)의 기각역을 정한다.

표본 $100$ 개가 $\lbrack 0,1\rbrack$ 의 균등분포에서 왔는지 판정하려고 한다. 실제 분포는 확률 $\tfrac12$ 로 $\lbrack 0,0.1\rbrack$ 에서, 확률 $\tfrac12$ 로 $\lbrack 0.9,1\rbrack$ 에서 균등하게 뽑는 것이라 하자. 평균은 $\tfrac12$ 로 균등분포와 같아서 표본평균으로는 두 분포를 가르지 못한다.

점 $x$ 이하인 표본의 비율 $F_n(x)$ 를 균등분포의 값 $x$ 와 비교한다. $x=0.1$ 에서 $F_n(0.1)$ 은 $0.5$ 근처이고 균등분포의 값은 $0.1$ 이므로 차이가 $0.4$ 쯤이다. 모든 $x$ 에서 차이의 최대를 $D_n$ 으로 두면, 균등분포가 참일 때 $\sqrt{100}\thinspace D\_{100}$ 이 $1.36$ 을 넘을 확률이 약 5% 이므로 $D\_{100}\gt 0.136$ 이면 기각한다. 이 표본에서는 $D\_{100}$ 이 $0.4$ 근처이므로 기각한다.

# 정의

## 일표본 검정

$X_1,\dots,X_n$ 이 독립이고 같은 분포 $F$ 를 따른다. 연속인 분포함수 $F_0$ 에 대해 $H_0:F=F_0$ 를 검정한다. 경험 분포함수 $F_n$ 으로

$$
D_n=\sup\_{x\in\mathbb R}\vert F_n(x)-F_0(x)\vert
$$

를 **Kolmogorov–Smirnov 통계량**이라 한다. 유의수준 $\alpha$ 에서 $\sqrt n D_n\gt k\_{1-\alpha}$ 이면 기각한다. $k\_{1-\alpha}$ 는 **Kolmogorov 분포(Kolmogorov distribution)**

$$
K(z)=1-2\sum\_{j=1}^\infty(-1)^{j-1}e^{-2j^2z^2}\qquad(z\gt 0)
$$

의 $1-\alpha$ 분위수다.[^1] $k\_{0.90}\approx 1.224$, $k\_{0.95}\approx 1.358$, $k\_{0.99}\approx 1.628$ 이다.

## 계산

$F_n$ 은 표본점에서만 뛰고 $F_0$ 은 증가하므로 상한은 표본점의 양쪽에서 얻어진다. 순서통계량 $X\_{(1)}\le\dots\le X\_{(n)}$ 과 $V_i=F_0(X\_{(i)})$ 로

$$
D_n=\max\_{1\le i\le n}\max\Bigl(\frac in-V_i,\ V_i-\frac{i-1}n\Bigr)
$$

이다. 정렬에 $O(n\log n)$ 이 든다.

## 이표본 검정

두 독립 표본 $X_1,\dots,X_n\sim F$, $Y_1,\dots,Y_m\sim G$ 의 경험 분포함수를 $F_n$, $G_m$ 이라 한다. $H_0:F=G$ 의 통계량은

$$
D\_{n,m}=\sup\_{x\in\mathbb R}\vert F_n(x)-G_m(x)\vert
$$

이고, $\sqrt{nm/(n+m)}\thinspace D\_{n,m}\gt k\_{1-\alpha}$ 이면 기각한다.[^2]

# 성질

## 분포무관성

$F_0$ 이 연속이면 $U_i=F_0(X_i)$ 가 $H_0$ 아래에서 $\lbrack 0,1\rbrack$ 의 균등분포를 따르고 $D_n$ 은 $U_i$ 만으로 정해진다. 따라서 $D_n$ 의 분포는 $n$ 에만 의존하고 $F_0$ 에 의존하지 않는다. 이표본에서도 $F=G$ 가 연속이면 $D\_{n,m}$ 의 분포는 두 표본을 합친 순위만으로 정해진다.

## 극한분포

> **정리 (Kolmogorov).** $H_0$ 아래에서 $n\to\infty$ 이면 $\Pr\lbrack\sqrt n D_n\le z\rbrack\to K(z)$ 이다.

경험 과정 $\sqrt n(F_n-F_0)$ 은 균등 표본으로 옮기면 [Brown 다리](brownian-bridge.md) $B^0$ 로 약수렴하고, 상한 사상의 연속성으로 $\sqrt n D_n$ 이 $\sup_t\vert B^0_t\vert$ 로 분포수렴한다. $\sup_t\vert B^0_t\vert$ 의 분포함수가 $K$ 다. 이 약수렴이 [Donsker 불변원리](donsker-invariance-principle.md)의 [경험 과정](empirical-process.md) 판본이다. 이표본에서는 $\sqrt{nm/(n+m)}(F_n-G_m)$ 이 같은 Brown 다리로 수렴하므로 같은 $K$ 가 나온다.

## 유한 표본의 기각역

Dvoretzky–Kiefer–Wolfowitz 부등식(Dvoretzky–Kiefer–Wolfowitz inequality) $\Pr\lbrack D_n\gt\varepsilon\rbrack\le 2e^{-2n\varepsilon^2}$ 에서 $\varepsilon=\sqrt{\log(2/\alpha)/(2n)}$ 으로 두면 모든 $n$ 에서 크기가 $\alpha$ 이하인 검정이 나온다. $\alpha=0.05$ 이면 $\varepsilon\approx 1.358/\sqrt n$ 이다. $1-K(z)$ 의 첫 항이 $2e^{-2z^2}$ 이므로 두 기각역이 거의 같다.

## 일치성

$F\ne F_0$ 이면 $\delta=\sup_x\vert F(x)-F_0(x)\vert\gt 0$ 이다. Glivenko–Cantelli 정리로 $\sup_x\vert F_n-F\vert\to 0$ 이므로 $D_n\to\delta$ 가 거의 확실하게 성립하고, $\sqrt n D_n\to\infty$ 이다. 따라서 고정된 대립가설마다 검정력이 $1$ 로 간다.

## 가정의 위반

- **추정한 모수.** $F_0$ 의 모수를 같은 표본에서 추정해 넣으면 $F_n$ 과 $F_0$ 이 가까워져 $D_n$ 이 작아진다. $K$ 의 분위수를 그대로 쓰면 실제 크기가 $\alpha$ 보다 작다. 정규분포의 평균과 분산을 추정한 경우의 분위수는 Lilliefors 가 모의실험으로 표를 만들었다.[^3]
- **이산분포.** $F_0$ 이 뛰는 점에서는 $F_n$ 과 $F_0$ 이 함께 뛰므로 $D_n$ 이 연속인 경우보다 작다. $K$ 의 분위수를 쓰면 실제 크기가 $\alpha$ 이하다.
- **꼬리의 차이.** $F_n(x)-F_0(x)$ 의 분산은 $F_0(x)(1-F_0(x))/n$ 이어서 $F_0(x)$ 가 $0$ 이나 $1$ 에 가까운 꼬리에서 작다. 차이에 같은 가중을 주는 $D_n$ 은 꼬리의 차이에 둔하다. 이 분산으로 나눈 가중을 주는 통계량이 [이차 경험분포함수 통계량](quadratic-edf-statistics.md)의 Anderson–Darling 통계량이다.

# 활용

- **분포 가정의 확인.** 회귀 잔차나 대기시간이 가정한 분포를 따르는지 검정한다. 모수를 추정해 넣는 경우에는 위의 보정 분위수를 쓴다.
- **두 집단의 분포 비교.** 이표본 판본은 평균이나 분산 하나가 아니라 분포함수 전체의 차이를 본다. 직관 절의 두 분포처럼 평균이 같은 대립가설도 기각한다.
- **난수 생성기의 검정.** 생성한 수열이 $\lbrack 0,1\rbrack$ 의 균등분포를 따르는지 일표본 검정으로 확인한다.
- **동시 신뢰띠.** 기각역을 뒤집으면 $F_n\pm k\_{1-\alpha}/\sqrt n$ 이 근사적으로 확률 $1-\alpha$ 로 $F$ 전체를 감싸는 띠가 된다. [신뢰구간](confidence-intervals.md)을 함수 전체로 넓힌 것이다.

[^1]: A. N. Kolmogorov, "Sulla determinazione empirica di una legge di distribuzione", *Giornale dell'Istituto Italiano degli Attuari* **4** (1933), 83–91.
[^2]: N. V. Smirnov, "On the estimation of the discrepancy between empirical curves of distribution for two independent samples", *Bulletin Mathématique de l'Université de Moscou* **2** (1939), 3–14.
[^3]: Hubert W. Lilliefors, "On the Kolmogorov–Smirnov test for normality with mean and variance unknown", *Journal of the American Statistical Association* **62** (1967), 399–402.

# 연관 문서

## 선수지식

- [Glivenko–Cantelli 정리](glivenko-cantelli.md)
- [가설검정](hypothesis-testing.md)

## 더 알아보기

- [이차 경험분포함수 통계량](quadratic-edf-statistics.md)

#statistics #probability
