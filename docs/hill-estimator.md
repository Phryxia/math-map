# Hill 추정량

# 개요

**Hill 추정량(Hill estimator)** 은 표본에서 가장 큰 값 몇 개만 써서 꼬리가 줄어드는 속도를 추정하는 방법이다. 보험 청구액 $1000$ 건을 받았을 때 큰 청구액의 확률이 $x^{-\alpha}$ 처럼 줄어든다면, $\alpha$ 가 $2$ 보다 작은지 $1$ 보다 작은지에 따라 청구액의 분산이나 평균이 존재하는지가 갈린다. Hill 추정량은 가장 큰 $k$ 개의 값이 그 다음 값보다 로그로 얼마나 큰지 평균을 내어 $1/\alpha$ 를 추정한다.

# 직관

꼬리 확률이 $x\ge 1$ 에서 정확히 $P(X\gt x)=x^{-\alpha}$ 인 Pareto 분포라면 $\alpha$ 를 쉽게 추정한다. $Y=\log X$ 로 두면 $P(Y\gt y)=e^{-\alpha y}$ 이므로 $Y$ 는 평균이 $1/\alpha$ 인 [지수분포](exponential-distribution.md)를 따른다. 지수분포의 [최대가능도 추정](maximum-likelihood.md)은 표본평균이므로 $1/\alpha$ 는 $\log X_i$ 의 평균으로 추정한다.

실제 청구액은 작은 값에서 Pareto 분포를 따르지 않고 큰 값에서만 $x^{-\alpha}$ 처럼 줄어든다. 그래서 큰 값만 쓴다. 문턱 $u$ 를 넘은 값을 $u$ 로 나누면 다음과 같다.

$$
P\left(\frac{X}{u}\gt x\thinspace\Big\vert\thinspace X\gt u\right)=\frac{(ux)^{-\alpha}}{u^{-\alpha}}=x^{-\alpha}
$$

문턱을 넘은 값의 비율은 다시 같은 Pareto 분포를 따른다. 문턱으로 $k+1$ 번째로 큰 값을 쓰고, 위의 $k$ 개 값에서 $\log(X/u)$ 의 평균을 낸다.

청구액을 큰 순서로 늘어놓아 위의 다섯이 $80,40,20,20,10$ 이고 $k=4$ 로 잡으면 문턱은 $10$ 이다. 네 비율은 $8,4,2,2$ 이고 로그는 $3\log 2$, $2\log 2$, $\log 2$, $\log 2$ 이므로 평균은 $\tfrac74\log 2\approx 1.21$ 이다. $\alpha$ 의 추정값은 $1/1.21\approx 0.82$ 로 $1$ 보다 작으므로 이 자료는 평균이 없는 꼬리를 시사한다.

# 정의

$X_1,\dots,X_n$ 을 큰 순서로 늘어놓은 것을 $X_{(1)}\ge X_{(2)}\ge\dots\ge X_{(n)}$ 이라 하자([순서통계량](order-statistics.md)). $1\le k\lt n$ 에 대해 다음을 **Hill 추정량** 이라 한다.[^1]

$$
H_{k,n}=\frac1k\sum_{i=1}^k\log X_{(i)}-\log X_{(k+1)}
$$

$H_{k,n}$ 은 **극값 지수(extreme value index)** $\gamma=1/\alpha$ 의 추정량이고, $\alpha$ 는 $1/H_{k,n}$ 으로 추정한다. 직관 절의 예에서 $H_{4,n}\approx 1.21$ 이다.

추정 대상은 꼬리 $P(X\gt x)$ 가 지수 $-\alpha$ 의 [정칙 변동](regular-variation.md) 함수인 분포다. $P(X\gt x)=x^{-\alpha}\log x$ 처럼 천천히 변하는 인수가 곱해져도 $\gamma=1/\alpha$ 다.

# 성질

## 정확한 Pareto 분포에서의 분포

$X$ 가 정확히 Pareto 분포를 따르면 $kH_{k,n}$ 은 형상 모수 $k$, 비율 $\alpha$ 인 [감마분포](gamma-distribution.md)를 따른다. 그래서 $\mathbb E\lbrack H_{k,n}\rbrack=1/\alpha$ 이고 분산은 $1/(k\alpha^2)$ 이다.

증명의 요지. $\log X_i$ 는 비율 $\alpha$ 인 지수분포를 따른다. 지수분포 표본의 순서통계량에서 이웃한 값의 차 $\log X_{(i)}-\log X_{(i+1)}$ 는 서로 독립이고 비율 $i\alpha$ 인 지수분포를 따른다(Rényi 표현(Rényi representation)). $kH_{k,n}$ 은 이 차들에 $i$ 를 곱해 $i=1,\dots,k$ 에서 더한 것이므로 비율 $\alpha$ 인 지수분포 $k$ 개의 합이다.

## 일치성

$P(X\gt x)$ 가 지수 $-\alpha$ 의 정칙 변동 함수이고 $k\to\infty$, $k/n\to 0$ 이면 $H_{k,n}$ 은 $1/\alpha$ 로 확률수렴한다.[^2]

$k\to\infty$ 는 평균을 낼 값이 많아야 한다는 조건이고, $k/n\to 0$ 은 문턱 $X_{(k+1)}$ 이 꼬리 쪽으로 멀어져야 한다는 조건이다.

## 점근 정규성

꼬리가 $x^{-\alpha}$ 에서 벗어나는 정도를 재는 이계 조건(second-order condition)이 성립하고 $k$ 가 너무 빨리 자라지 않으면 다음이 성립한다.[^2]

$$
\sqrt k\left(H_{k,n}-\frac1\alpha\right)\to N\left(0,\frac1{\alpha^2}\right)
$$

극한 분산은 정확한 Pareto 분포에서의 분산 $1/(k\alpha^2)$ 와 같다.

## k 의 선택

$k$ 가 작으면 평균을 내는 값이 적어 분산 $1/(k\alpha^2)$ 이 크다. $k$ 가 크면 문턱이 낮아져 꼬리가 $x^{-\alpha}$ 로 근사되지 않는 영역의 값이 섞이고 편향이 생긴다.

실무에서는 $k$ 를 바꿔 가며 $H_{k,n}$ 을 그린 **Hill 그림(Hill plot)** 을 보고, 값이 평평한 구간에서 $k$ 를 고른다. $P(X\gt x)=x^{-\alpha}\log x$ 처럼 천천히 변하는 인수가 있으면 평평한 구간이 짧아져 편향이 커진다.

# 활용

- 재보험의 초과손해 계약에서 큰 청구액의 꼬리 지수를 추정한다. $\alpha$ 의 추정값이 $2$ 보다 작으면 분산을 쓰는 보험료 산출 원칙을 쓸 수 없다.
- 높은 분위수의 외삽. 표본보다 드문 확률 $p$ 의 분위수는 다음 Weissman 추정량(Weissman estimator)으로 추정한다.[^2] 표본 최댓값을 넘는 수준도 추정할 수 있다.

$$
\hat x_p=X_{(k+1)}\left(\frac{k}{np}\right)^{H_{k,n}}
$$

- [극값 분포](extreme-value-distributions.md)에서 Fréchet 분포의 끌림 영역에 드는 분포의 지수 $\alpha$ 를 추정한다. 일반화 극값 분포의 모수 $\xi$ 가 $\gamma=1/\alpha$ 와 같다.
- [안정 분포](stable-distributions.md)의 끌림 영역에 드는 자료에서 안정 지수를 추정한다. 이때 $\alpha\lt 2$ 다.

[^1]: B. M. Hill, "A Simple General Approach to Inference About the Tail of a Distribution", *The Annals of Statistics* 3 (1975), 1163–1174.
[^2]: L. de Haan, A. Ferreira, *Extreme Value Theory: An Introduction*, Springer (2006), §3.2 과 §4.3. Hill 추정량의 일치성과 점근 정규성, 높은 분위수의 추정.

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)
- [정칙 변동](regular-variation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
