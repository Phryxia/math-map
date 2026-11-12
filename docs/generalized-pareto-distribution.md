# 일반화 Pareto 분포

# 개요

**일반화 Pareto 분포(generalized Pareto distribution)** 는 어떤 값이 높은 문턱을 넘었을 때 넘은 양이 따르는 분포다. 강 수위를 해마다 최댓값 하나만 남기지 않고 $5$ m 를 넘은 날을 전부 기록하면, 넘은 높이가 얼마나 큰지가 홍수 대비의 기준이 된다. 문턱을 높이면 원래 분포가 무엇이든 넘은 양의 분포가 모수 두 개짜리 한 족으로 다가가므로, 이 족을 자료에 맞추어 드문 수위를 추정한다.

# 직관

문턱 $u$ 를 넘은 양 $X-u$ 의 분포를 세 분포에서 계산한다.

[지수분포](exponential-distribution.md) $P(X\gt x)=e^{-x}$ 는 무기억성 때문에 넘은 양이 다시 같은 지수분포를 따른다.

$$
P(X-u\gt y\mid X\gt u)=e^{-y}
$$

Pareto 분포 $P(X\gt x)=x^{-\alpha}$ ($x\ge 1$) 에서는 넘은 양의 꼬리가 다음과 같다. 문턱이 높을수록 넘은 양의 척도가 $u$ 에 비례해 커진다.

$$
P(X-u\gt y\mid X\gt u)=\left(1+\frac{y}{u}\right)^{-\alpha}
$$

$\lbrack 0,1\rbrack$ 의 [균등분포](uniform-distribution.md)에서는 넘은 양이 $\lbrack 0,1-u\rbrack$ 의 균등분포를 따른다.

$$
P(X-u\gt y\mid X\gt u)=1-\frac{y}{1-u}
$$

세 꼬리는 모두 $(1+\xi y/\sigma)^{-1/\xi}$ 꼴로 쓰인다. Pareto 분포는 $\xi=1/\alpha$, $\sigma=u/\alpha$ 이고, 균등분포는 $\xi=-1$, $\sigma=1-u$ 이며, 지수분포는 $\xi\to 0$ 의 극한 $e^{-y/\sigma}$ 에서 $\sigma=1$ 이다.

# 정의

$\xi\in\mathbb R$, $\sigma\gt 0$ 에 대해 분포함수가 다음과 같은 분포를 **일반화 Pareto 분포** 라 하고 $\mathrm{GPD}(\xi,\sigma)$ 로 쓴다. GPD 는 generalized Pareto distribution 의 약어다.

$$
G_{\xi,\sigma}(y)=\begin{cases}1-\left(1+\dfrac{\xi y}{\sigma}\right)^{-1/\xi} & (\xi\ne 0)\cr 1-e^{-y/\sigma} & (\xi=0)\end{cases}
$$

$\xi\ge 0$ 이면 $y\ge 0$ 에서, $\xi\lt 0$ 이면 $0\le y\le -\sigma/\xi$ 에서 정의된다. $\xi$ 를 형상 모수(shape parameter), $\sigma$ 를 척도 모수(scale parameter)라 한다.

직관 절의 세 예는 $\mathrm{GPD}(1/\alpha,u/\alpha)$, $\mathrm{GPD}(-1,1-u)$, $\mathrm{GPD}(0,1)$ 이다. $\xi\gt 0$ 이면 꼬리가 $y^{-1/\xi}$ 처럼 거듭제곱으로 줄고, $\xi=0$ 이면 지수적으로 줄고, $\xi\lt 0$ 이면 위로 막혀 있다.

# 성질

## 문턱 안정성

$Y\sim\mathrm{GPD}(\xi,\sigma)$ 이고 $v\ge 0$ 이면, $Y\gt v$ 일 때 $Y-v$ 는 $\mathrm{GPD}(\xi,\sigma+\xi v)$ 를 따른다.

증명. $\xi\ne 0$ 이면 다음과 같다. $\xi=0$ 이면 지수분포의 무기억성이다.

$$
\frac{P(Y\gt v+y)}{P(Y\gt v)}=\left(\frac{\sigma+\xi(v+y)}{\sigma+\xi v}\right)^{-1/\xi}=\left(1+\frac{\xi y}{\sigma+\xi v}\right)^{-1/\xi}
$$

문턱을 더 올려도 형상 모수 $\xi$ 는 그대로이고 척도만 $\xi v$ 만큼 바뀐다. 직관 절의 Pareto 분포에서 척도가 $u/\alpha$ 로 문턱에 비례한 것이 이 식의 $\sigma+\xi v$ 다.

## 평균 초과량

$\xi\lt 1$ 이면 $\mathbb E\lbrack Y\rbrack=\sigma/(1-\xi)$ 다. 문턱 안정성과 합치면 평균 초과량은 문턱 $v$ 의 일차함수다.

$$
\mathbb E\lbrack Y-v\mid Y\gt v\rbrack=\frac{\sigma+\xi v}{1-\xi}
$$

자료에서 문턱마다 넘은 양의 평균을 그린 그림이 어느 문턱부터 직선이 되는지를 보고 문턱을 고른다. 기울기는 $\xi/(1-\xi)$ 다. $\xi\ge 1$ 이면 평균이 무한하다.

## 극값 분포와의 관계

[극값 분포](extreme-value-distributions.md)의 일반화 극값 분포 $G_\xi(x)=\exp(-(1+\xi x)^{-1/\xi})$ 와 $\mathrm{GPD}(\xi,1)$ 은 $\log G_\xi(x)\ge -1$ 인 범위에서 다음 관계를 만족한다. 두 분포의 형상 모수가 같다.

$$
G_{\xi,1}(x)=1+\log G_\xi(x)
$$

## Pickands–Balkema–de Haan 정리

**Pickands–Balkema–de Haan 정리(Pickands–Balkema–de Haan theorem)** 는 다음이다. $x_F$ 를 분포 $F$ 의 오른쪽 끝점($\infty$ 일 수 있다), $F_u(y)=P(X-u\le y\mid X\gt u)$ 를 문턱 $u$ 의 초과량 분포라 하자. $F$ 가 일반화 극값 분포 $G_\xi$ 의 끌림 영역에 드는 것은 양의 함수 $\sigma(u)$ 가 존재해 다음이 성립하는 것과 동치다.[^1][^2]

$$
\lim_{u\to x_F}\thinspace\sup_{0\le y\lt x_F-u}\left\vert F_u(y)-G_{\xi,\sigma(u)}(y)\right\vert=0
$$

최댓값의 극한이 $G_\xi$ 인 분포는 초과량의 극한이 같은 $\xi$ 의 일반화 Pareto 분포다. [정규분포](normal-distribution.md)와 [감마분포](gamma-distribution.md)는 $\xi=0$ 이고, 꼬리가 지수 $-\alpha$ 의 [정칙 변동](regular-variation.md) 함수인 분포는 $\xi=1/\alpha$ 다.

# 활용

- 문턱 초과 방법(peaks over threshold method). 해마다 최댓값 하나만 쓰는 대신 문턱 $u$ 를 넘은 값을 전부 모아 일반화 Pareto 분포를 맞춘다. 같은 자료에서 극값 분포보다 많은 값을 쓴다.
- 높은 분위수의 추정. 표본 $n$ 개 가운데 $N_u$ 개가 $u$ 를 넘었고 초과량에 $\mathrm{GPD}(\hat\xi,\hat\sigma)$ 를 맞췄으면, 확률 $p$ 로 넘는 수준은 다음으로 추정한다.[^2] 수문학의 $100$ 년 빈도 수위, 금융의 위험가치(value at risk)가 이렇게 계산된다.

$$
\hat x_p=u+\frac{\hat\sigma}{\hat\xi}\left(\left(\frac{np}{N_u}\right)^{-\hat\xi}-1\right)
$$

- $\xi\gt 0$ 이면 $\xi$ 를 [Hill 추정량](hill-estimator.md)으로 추정할 수 있다. Hill 추정량은 문턱을 $k+1$ 번째로 큰 값으로 잡고 초과 비율의 로그를 평균한 것이다.

[^1]: J. Pickands III, "Statistical Inference Using Extreme Order Statistics", *The Annals of Statistics* 3 (1975), 119–131. A. A. Balkema, L. de Haan, "Residual Life Time at Great Age", *The Annals of Probability* 2 (1974), 792–804.
[^2]: P. Embrechts, C. Klüppelberg, T. Mikosch, *Modelling Extremal Events for Insurance and Finance*, Springer (1997), §3.4 과 §6.5. 일반화 Pareto 분포의 성질과 문턱 초과 방법.

# 연관 문서

## 선수지식

- [극값 분포](extreme-value-distributions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
