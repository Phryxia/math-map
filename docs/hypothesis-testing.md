# 가설검정

# 개요

**가설검정(hypothesis testing)** 은 자료가 어떤 가정과 어긋나는지를 미리 정한 규칙으로 판정하는 절차다. 동전을 $100$ 번 던져 앞면이 $62$ 번 나왔을 때 이 동전이 공정한지 묻는다고 하자. 공정한 동전에서 앞면이 $62$ 번 이상이거나 $38$ 번 이하로 나올 확률은 약 2%다. 가설검정은 이 확률을 미리 정한 기준, 예를 들어 5%와 비교해 공정하다는 가정을 버릴지 정한다.

# 직관

동전을 100 번 던져 앞면이 60 번 나왔다. 공정하다면 앞면 개수는 평균 50, 표준편차 5 인 분포를 따르므로 60 은 평균에서 2 표준편차 떨어진 값이다. 공정한 동전에서 평균으로부터 이만큼 이상 떨어진 결과가 나올 확률은 약 5% 다.

5% 는 작지만 0 은 아니다. 공정한 동전 스무 개를 각각 100 번 던지면 그 가운데 하나 정도는 이만큼 치우친다. 그래서 "이 확률이 미리 정한 기준보다 작으면 공정하다는 가정을 버린다" 는 규칙을 정해 두고, 이 규칙이 공정한 동전을 잘못 버리는 비율을 그 기준으로 묶는다.

공정하다는 가정을 귀무가설이라 하고, 귀무가설 아래에서 관측한 만큼 치우친 결과가 나올 확률을 p-값이라 한다. 위의 5% 가 p-값이다.

# 정의

## 가설

모형족 $f(x;\theta)$ 와 모수공간 $\Theta$ 가 주어졌을 때, $\Theta$ 를 겹치지 않는 $\Theta_0$ 과 $\Theta_1$ 로 나눈다. $H_0:\theta\in\Theta_0$ 을 **귀무가설(null hypothesis)**, $H_1:\theta\in\Theta_1$ 을 **대립가설(alternative hypothesis)** 이라 한다. 한 점만 포함하는 가설을 **단순가설(simple hypothesis)**, 여러 점을 포함하는 가설을 **복합가설(composite hypothesis)** 이라 한다.

동전에서 $X$ 는 앞면 개수이고 $f(x;\theta)$ 는 [이항분포](binomial-distribution.md) $\mathrm{Bin}(100,\theta)$ 다. $H_0:\theta=0.5$ 는 단순가설이고 $H_1:\theta\ne 0.5$ 는 복합가설이다.

## 검정

**검정(test)** 은 자료 $x$ 에 기각할 확률 $\varphi(x)\in\lbrack 0,1\rbrack$ 을 주는 함수다. 값이 $0$ 과 $1$ 만 가지면 결정론적 검정, 그 사이 값을 허용하면 **무작위화 검정(randomized test)** 이다. 동전에서 $\varphi(x)=1$ $(\vert x-50\vert\ge 11)$, $\varphi(x)=0$ (그 밖) 은 결정론적 검정이다.

## 두 종류의 오류

$H_0$ 이 참인데 기각하는 것을 **1 종 오류(type I error)**, $H_1$ 이 참인데 기각하지 못하는 것을 **2 종 오류(type II error)** 라 한다. 그 확률은 다음이다.

$$
\alpha(\theta)=\mathbb E_\theta[\varphi(X)]\quad(\theta\in\Theta_0),
\qquad
\beta(\theta)=1-\mathbb E_\theta[\varphi(X)]\quad(\theta\in\Theta_1)
$$

$\Theta_0$ 위 기각확률의 상한을 검정의 **크기(size)** 라 하고, 크기가 $\alpha$ 이하인 검정을 **유의수준(significance level)** $\alpha$ 의 검정이라 한다. 대립가설 아래의 기각확률을 **검정력(power)** 이라 한다.

$$
\text{size}=\sup_{\theta\in\Theta_0}\mathbb E_\theta[\varphi(X)],
\qquad
\text{power}(\theta)=\mathbb E_\theta[\varphi(X)]=1-\beta(\theta)
$$

동전의 검정 $\vert x-50\vert\ge 11$ 은 크기가 $P_{0.5}(\vert X-50\vert\ge 11)\approx 0.035$ 이므로 유의수준 $0.05$ 의 검정이고, $\theta=0.6$ 에서 검정력은 약 $0.46$ 이다. 문턱을 $10$ 으로 낮춘 $\vert x-50\vert\ge 10$ 은 크기가 약 $0.057$ 이어서 유의수준 $0.05$ 의 검정이 아니다.

## p-값

검정통계량 $T$ 와 관측값 $t$ 에 대해 큰 값이 $H_0$ 과 어긋남을 뜻하도록 방향을 잡으면 **p-값(p-value)** 은 다음이다.

$$
p=\sup_{\theta\in\Theta_0}\thinspace P_\theta\big(T\ge t\big)
$$

$H_0$ 아래에서 관측된 만큼 또는 더 극단적인 결과가 나올 확률이다.[^1] 동전에서 $T=\vert X-50\vert$, $t=10$ 이면 $p=P_{0.5}(\vert X-50\vert\ge 10)\approx 0.057$ 이다. 직관 절의 약 5% 는 이 값을 정규분포로 근사한 $0.0455$ 다.

# 성질

## p-값의 분포

$T$ 가 연속분포를 따르고 $H_0$ 이 단순가설이면 p-값은 $H_0$ 아래에서 $[0,1]$ 의 [균등분포](uniform-distribution.md)를 따른다. 그러므로 $p\le\alpha$ 로 기각하는 규칙의 1 종 오류율은 $\alpha$ 와 같다. 이산분포에서는 모든 $\alpha$ 에 대해 $P_{H_0}(p\le\alpha)\le\alpha$ 이고 실제 크기가 $\alpha$ 보다 작을 수 있다. 동전의 $p\le 0.05$ 규칙은 $\vert x-50\vert\ge 11$ 과 같고 크기가 $0.035$ 다.

## p-값의 오용

미국통계학회(American Statistical Association, ASA)는 2016 년 성명에서 p-값 사용의 여섯 원칙을 제시했다.[^2] 그 가운데 다음 둘은 정의에서 바로 나온다.

p-값은 $H_0$ 이 참일 확률도, 자료가 우연만으로 생겼을 확률도 아니다. p-값은 $H_0$ 을 조건으로 둔 확률이고, $H_0$ 의 확률은 사전확률 없이 정해지지 않는다([Bayes 정리](bayes.md)).

$$
P(T\ge t\mid H_0)\thickspace\neq\thickspace P(H_0\mid T\ge t)
$$

p-값은 효과의 크기나 결과의 중요성을 재지 않는다. 표본이 매우 크면 실질적으로 무의미한 차이도 아주 작은 p-값을 내고, 표본이 작으면 큰 효과도 기각되지 않는다. 그래서 추정값과 신뢰구간을 함께 보고한다. 같은 이유로 기각하지 못한 것은 $H_0$ 이 참이라는 증거가 아니다.

여러 가설을 검정하면 1 종 오류가 누적된다. 독립인 검정 $m$ 개를 각각 유의수준 $\alpha$ 로 하면 적어도 하나를 잘못 기각할 확률이 다음과 같다.

$$
1-(1-\alpha)^m\qquad(\alpha=0.05,\thinspace m=20\thickspace\Rightarrow\thickspace\approx 0.64)
$$

Bonferroni 보정(Bonferroni correction)이나 [거짓 발견률](false-discovery-rate.md) 통제가 이 문제를 다룬다. 유의해질 때까지 자료를 더 모으거나 가설을 바꾸는 관행(p-hacking)에서는 실제 1 종 오류율이 명목 유의수준보다 커진다.

## Neyman–Pearson 보조정리

$H_0$ 에서 밀도가 $f_0$, $H_1$ 에서 $f_1$ 인 단순가설을 본다. Neyman–Pearson 보조정리(Neyman–Pearson lemma)는 가능도비를 기준으로 기각하는 검정이 최적이라는 정리다.[^3]

$$
\Lambda(x)=\frac{f_1(x)}{f_0(x)},
\qquad
\varphi(x)=\begin{cases}
1, & \Lambda(x)\gt k\cr
\gamma, & \Lambda(x)=k\cr
0, & \Lambda(x)\lt k
\end{cases}
$$

진술은 두 부분이다. 임의의 $\alpha$ 에 대해 위 꼴이면서 크기가 정확히 $\alpha$ 인 상수 $k$ 와 $\gamma$ 가 존재하고, 그 검정은 유의수준 $\alpha$ 의 모든 검정 가운데 검정력이 최대다.

최적성의 증명은 크기가 $\alpha$ 이하인 임의의 검정 $\psi$ 에 대해 다음 적분을 본다.

$$
\int \big(\varphi(x)-\psi(x)\big)\big(f_1(x)-k f_0(x)\big)\thinspace dx\thickspace\ge\thickspace 0
$$

$\Lambda(x)\gt k$ 인 곳에서는 $\varphi=1$ 이라 첫 인자가 음이 아니고 둘째 인자가 양수이며, $\Lambda(x)\lt k$ 인 곳에서는 두 인자가 모두 양이 아니다. 그래서 피적분함수는 항상 음이 아니다. 전개하면 $\varphi$ 의 검정력에서 $\psi$ 의 검정력을 뺀 값이 크기 차이의 $k$ 배 이상이고, $\psi$ 의 크기가 $\alpha$ 이하이므로 그 차이가 음이 아니다.

복합가설에서는 최적 기각역이 대립가설의 어느 점을 보느냐에 따라 달라지므로 이 결과가 그대로 확장되지 않는다. 단조가능도비(monotone likelihood ratio)를 갖는 모형족에서는 단측검정에 균등최강력(uniformly most powerful, UMP) 검정이 존재한다. 일반적인 경우에는 [최대가능도 추정](maximum-likelihood.md)을 이용한 [가능도비 검정](likelihood-ratio-test.md)을 쓰고, Wilks 정리(Wilks' theorem)가 그 통계량의 점근분포를 [카이제곱 분포](chi-squared-distribution.md)로 준다.

## 신뢰구간과의 쌍대성

유의수준 $\alpha$ 의 검정족과 신뢰수준 $1-\alpha$ 의 [신뢰구간](confidence-intervals.md)은 서로를 결정한다. 값 $\theta_0$ 을 기각하지 않는 $\theta_0$ 전체가 신뢰집합이고, 역으로 신뢰집합에 $\theta_0$ 이 없을 때 기각하면 검정이 된다. 신뢰구간은 기각 여부와 함께 효과의 크기도 준다.

# 활용

## z-검정

모평균이 $\mu_0$ 인지 검정한다. 분산이 알려져 있거나 표본이 충분히 크면 [중심극한정리](central-limit-theorem.md)에 의해 다음 통계량이 $H_0$ 아래 근사적으로 [표준정규분포](normal-distribution.md)를 따른다.

$$
Z=\frac{\overline X_n-\mu_0}{\sigma/\sqrt n},
\qquad
p_{\text{양측}}=2\big(1-\Phi(\vert z\vert)\big)
$$

동전 예에서 $H_0$ 은 성공확률 $0.5$, $n=100$, 앞면 60 회다. 표본비율이 $0.6$ 이고 $H_0$ 아래 표준오차가 $0.05$ 이므로 다음과 같다.

$$
z=\frac{0.6-0.5}{0.05}=2.0,
\qquad
p_{\text{양측}}=2\big(1-\Phi(2.0)\big)\approx 0.0455
$$

유의수준 0.05 에서는 기각하고 0.01 에서는 기각하지 않는다. 정확한 이항 p-값 $0.057$ 로는 0.05 에서도 기각하지 않으므로, 경계 근처에서는 근사의 선택도 결론을 바꾼다.

## 검정력 설계

표본 크기를 정할 때는 검출하려는 효과 크기 $\delta$, 유의수준 $\alpha$, 목표 검정력 $1-\beta$ 를 정하고 $n$ 을 역산한다. 양측 z-검정의 근사식은 다음이고 $z_q$ 는 표준정규분포의 상위 $q$ 분위수다.

$$
n\thickspace\approx\thickspace\frac{\left(z_{\alpha/2}+z_{\beta}\right)^2\sigma^2}{\delta^2}
$$

검출하려는 효과가 절반이 되면 필요한 표본이 네 배가 된다. 자료를 본 뒤 관측 효과로 계산한 검정력은 p-값의 함수이므로 해석에 쓰지 않는다.

## 같은 틀을 쓰는 분야와 대안 기준

임상시험의 우월성과 비열등성 검정, A/B 테스트, 품질관리의 관리도, 난수 생성기의 적합도 검정이 같은 틀을 쓴다. 입자물리의 5 시그마 기준은 표준정규분포의 단측 꼬리 확률 약 $3\times10^{-7}$ 을 유의수준으로 쓰는 것이다. 대안으로 사후확률과 Bayes 인자(Bayes factor)를 보고하는 방식, [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)의 추정에 기반한 [정보 기준](information-criteria.md)으로 모형을 비교하는 방식, [e-값](e-values.md)으로 증거를 재는 방식이 있다.

[^1]: R. L. Wasserstein and N. A. Lazar, "The ASA Statement on p-Values: Context, Process, and Purpose", The American Statistician 70(2), 2016. https://www.tandfonline.com/doi/full/10.1080/00031305.2016.1154108
[^2]: American Statistical Association, "ASA Statement on Statistical Significance and P-Values", 2016 (여섯 원칙). https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf
[^3]: Stanford University, Stats 200, Lecture 6: "Simple alternatives, Neyman–Pearson lemma" (가능도비 검정의 존재와 최적성 진술 및 증명). https://web.stanford.edu/class/stats200/Lecture06.pdf

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [중심극한정리](central-limit-theorem.md)
- [최대가능도 추정](maximum-likelihood.md)

## 더 알아보기

### 구간 추정

- [신뢰구간](confidence-intervals.md)

### 검정 방법

- [가능도비 검정](likelihood-ratio-test.md)
- [Pearson 카이제곱 검정](pearson-chi-squared-test.md)
- [Fisher 정확 검정](fisher-exact-test.md)
- [Wilcoxon 순위합 검정](wilcoxon-rank-sum-test.md)
- [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)
- [순차확률비 검정](sequential-probability-ratio-test.md)

### 다중 검정

- [거짓 발견률](false-discovery-rate.md)

#statistics #probability
