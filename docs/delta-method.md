# 델타 방법

# 개요

**델타 방법(delta method)** 은 추정값의 오차가 근사적으로 정규분포를 따를 때, 그 추정값에 함수를 씌운 값의 오차를 구하는 방법이다. 동전을 $100$ 번 던져 앞면이 $62$ 번 나오면 앞면 확률의 추정값 $0.62$ 의 표준오차(standard error)는 [중심극한정리](central-limit-theorem.md)로 얻는다. 그런데 알고 싶은 것이 확률이 아니라 오즈(odds)의 로그 $\log\frac p{1-p}$ 라면 그 추정값의 오차는 따로 구해야 한다. 델타 방법은 함수를 추정값 근처에서 직선으로 바꾸고, 원래 오차에 그 직선의 기울기를 곱해 새 오차를 얻는다.

# 직관

앞면 확률을 $p$, 던진 횟수를 $n=100$, 앞면 비율을 $\hat p=0.62$ 라 한다. 중심극한정리에 따라 $\hat p$ 는 평균 $p$, 분산 $p(1-p)/n$ 인 정규분포에 가깝고, $p$ 자리에 $0.62$ 를 넣으면 표준오차는 $\sqrt{0.62\cdot0.38/100}\approx0.0485$ 다.

로그 오즈(log odds) $g(p)=\log\frac p{1-p}$ 의 추정값은 $g(0.62)\approx0.490$ 이다. $\hat p$ 는 $p$ 에서 $0.05$ 정도만 벗어나므로, 그 좁은 범위에서 $g$ 의 그래프는 $p$ 에서의 접선과 거의 같다.

$$
g(\hat p)\approx g(p)+g'(p)(\hat p-p)
$$

우변에서 $g(p)$ 와 [미분](derivative.md)계수 $g'(p)$ 는 상수이므로 $g(\hat p)$ 의 흩어짐은 $\hat p$ 의 흩어짐에 $\vert g'(p)\vert$ 를 곱한 것이다. $g'(p)=\frac1{p(1-p)}$ 이고 $g'(0.62)\approx4.24$ 이므로 로그 오즈의 표준오차는 $4.24\times0.0485\approx0.206$ 이다.

정규분포의 $95$ 퍼센트 범위 $\pm1.96$ 표준편차를 쓰면 로그 오즈의 구간은 $0.490\pm0.404$, 곧 $(0.086,\thinspace0.894)$ 다. 구간이 $0$ 을 포함하지 않으므로 이 자료는 앞면 확률이 $1/2$ 보다 크다는 쪽을 가리킨다.

# 정의

## 점근 정규성

추정량의 열 $T_n$ 이 모수 $\theta$ 에 대해 다음을 만족하면 **점근 정규(asymptotically normal)** 라 하고 $\sigma^2$ 을 **점근 분산(asymptotic variance)** 이라 한다.

$$
\sqrt n(T_n-\theta)\xrightarrow{d}N(0,\sigma^2)
$$

$\xrightarrow{d}$ 는 [약수렴](weak-convergence.md)의 분포 수렴이다. 직관 절의 $\hat p$ 는 $\theta=p$, $\sigma^2=p(1-p)$ 인 점근 정규 추정량이다.

## 델타 방법

**델타 방법** 은 다음 정리다[^1]. $T_n$ 이 점근 분산 $\sigma^2$ 으로 점근 정규이고 $g$ 가 $\theta$ 에서 미분가능하면 다음이 성립한다.

$$
\sqrt n\bigl(g(T_n)-g(\theta)\bigr)\xrightarrow{d}N\bigl(0,\thinspace g'(\theta)^2\sigma^2\bigr)
$$

직관 절에서 $g'(p)^2\sigma^2=\frac1{p(1-p)}$ 이므로 로그 오즈 추정값의 분산은 $\frac1{np(1-p)}$ 에 가깝다. $n=100$, $p=0.62$ 를 넣은 제곱근이 $0.206$ 이다.

## 다변수 델타 방법

$T_n$ 이 $\mathbb R^k$ 값이고 $\sqrt n(T_n-\theta)\xrightarrow{d}N(0,\Sigma)$ 이며 $g:\mathbb R^k\to\mathbb R^m$ 이 $\theta$ 에서 미분가능하고 Jacobi 행렬이 $J$ 이면 다음이 성립한다.

$$
\sqrt n\bigl(g(T_n)-g(\theta)\bigr)\xrightarrow{d}N\bigl(0,\thinspace J\Sigma J^{\mathsf T}\bigr)
$$

짝지은 표본 $(X_i,Y_i)$ 의 평균의 비 $\bar X/\bar Y$ 를 예로 든다. 평균을 $\mu_X,\mu_Y$, [공분산](covariance.md) 행렬을 $\Sigma$ 라 하면 $g(x,y)=x/y$ 의 Jacobi 행렬은 $J=(1/\mu_Y,\thinspace-\mu_X/\mu_Y^2)$ 이고, 점근 분산은 $R=\mu_X/\mu_Y$ 로 다음과 같다.

$$
J\Sigma J^{\mathsf T}=\frac{\sigma_X^2-2R\sigma_{XY}+R^2\sigma_Y^2}{\mu_Y^2}
$$

# 성질

## 증명의 요지

$g$ 가 $\theta$ 에서 미분가능하므로 $t\to\theta$ 일 때 $r(t)\to0$ 인 함수 $r$ 로 다음과 같이 쓸 수 있다.

$$
g(t)=g(\theta)+g'(\theta)(t-\theta)+r(t)(t-\theta)
$$ $t=T_n$ 을 넣고 $\sqrt n$ 을 곱한다.

$$
\sqrt n\bigl(g(T_n)-g(\theta)\bigr)=g'(\theta)\sqrt n(T_n-\theta)+r(T_n)\sqrt n(T_n-\theta)
$$

$\sqrt n(T_n-\theta)$ 가 분포 수렴하므로 $T_n\to\theta$ 로 확률수렴하고 $r(T_n)\to0$ 이다. 둘째 항은 $0$ 으로 확률수렴하는 것과 분포 수렴하는 것의 곱이라 $0$ 으로 확률수렴한다. Slutsky 정리(Slutsky's theorem)로 좌변은 첫째 항과 같은 극한 $N(0,g'(\theta)^2\sigma^2)$ 을 갖는다.

## 이차 델타 방법

$g'(\theta)=0$ 이면 위 극한은 $0$ 에 몰린 분포여서 오차의 크기를 주지 못한다. $g$ 가 $\theta$ 에서 두 번 미분가능하면 Taylor 전개의 이차 항이 극한을 정한다.

$$
n\bigl(g(T_n)-g(\theta)\bigr)\xrightarrow{d}\tfrac12g''(\theta)\sigma^2\chi^2_1
$$

$\chi^2_1$ 은 자유도 $1$ 인 [카이제곱 분포](chi-squared-distribution.md)다. 동전에서 $g(p)=p(1-p)$, $p=1/2$ 이면 $g'(1/2)=0$, $g''=-2$, $\sigma^2=1/4$ 이므로 $n\bigl(\hat p(1-\hat p)-\tfrac14\bigr)$ 이 $-\tfrac14\chi^2_1$ 로 분포 수렴한다. 이 경우 오차의 크기는 $1/\sqrt n$ 이 아니라 $1/n$ 이다.

## 분산 안정화 변환

점근 분산 $\sigma(\theta)^2$ 이 모수에 따라 변하면 구간의 폭이 모르는 $\theta$ 에 달린다. $g'(\theta)\sigma(\theta)$ 가 상수가 되도록 $g$ 를 고르면 $g(T_n)$ 의 점근 분산이 $\theta$ 와 무관해진다. 이런 $g$ 를 **분산 안정화 변환(variance-stabilizing transformation)** 이라 한다.

- [이항분포](binomial-distribution.md)의 비율 $\hat p$ 에서 $\sigma^2=p(1-p)$ 이고 $g(p)=\arcsin\sqrt p$ 는 $g'(p)=\frac1{2\sqrt{p(1-p)}}$ 이므로 점근 분산이 $1/4$ 이다.
- [Poisson 분포](poisson-distribution.md)의 표본평균에서 $\sigma^2=\lambda$ 이고 $g(\lambda)=2\sqrt\lambda$ 는 $g'(\lambda)=1/\sqrt\lambda$ 이므로 점근 분산이 $1$ 이다.

## 근사의 한계

델타 방법은 $T_n$ 이 흩어지는 범위에서 $g$ 가 직선에 가까울 때만 맞다. 직관 절에서 $\hat p$ 가 $0$ 이나 $1$ 에 가까우면 $g'(p)=\frac1{p(1-p)}$ 가 그 범위에서 크게 변하므로, 표본 크기가 작을 때 구간이 실제 피복확률을 지키지 못한다. $g$ 가 $\theta$ 에서 미분가능하지 않으면, 예를 들어 $g(t)=\vert t\vert$ 와 $\theta=0$ 이면, 극한이 정규분포가 아니다.

# 활용

- [최대가능도 추정](maximum-likelihood.md). $\theta$ 의 최대가능도 추정량이 $\hat\theta$ 이면 $g(\theta)$ 의 최대가능도 추정량은 $g(\hat\theta)$ 이고, 델타 방법으로 그 점근 분산 $g'(\theta)^2/I(\theta)$ 를 얻는다. $I$ 는 [Fisher 정보](fisher-information.md)다.
- [신뢰구간](confidence-intervals.md). $2\times2$ 분할표의 칸 횟수가 $a,b,c,d$ 일 때 오즈비의 로그 $\log\frac{ad}{bc}$ 의 표준오차는 다변수 델타 방법으로 다음과 같고[^2], 이것으로 오즈비의 구간을 세운다.

  $$
  \sqrt{\frac1a+\frac1b+\frac1c+\frac1d}
  $$

- [Jukes–Cantor 모형](jukes-cantor-model.md). 서열 사이의 다른 자리 비율 $\hat p$ 를 진화 거리로 바꾸는 함수에 델타 방법을 써서 거리 추정값의 분산을 구한다.
- [붓스트랩](bootstrap.md). 미분가능한 함수의 추정량에서는 붓스트랩의 분산이 델타 방법의 분산과 점근적으로 같고, $g$ 의 도함수를 계산하기 어려울 때 붓스트랩으로 대신한다.

[^1]: A. W. van der Vaart, *Asymptotic Statistics*, Cambridge University Press, 1998, 3장. 정리 3.1 이 델타 방법이고, 같은 장이 분산 안정화 변환과 고차 전개를 다룬다.
[^2]: B. Woolf, "On estimating the relation between blood group and disease", *Annals of Human Genetics* 19 (1955).

# 연관 문서

## 선수지식

- [중심극한정리](central-limit-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
