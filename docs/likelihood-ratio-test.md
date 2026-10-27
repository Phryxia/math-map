# 가능도비 검정

# 개요

**가능도비 검정(likelihood ratio test)** 은 가설 아래에서 자료가 나올 가능성과 가설 없이 자료에 가장 잘 맞춘 경우의 가능성을 견주어, 그 비가 작으면 가설을 버리는 검정이다. 동전을 $100$ 번 던져 앞면이 $60$ 번 나왔을 때 앞면 확률이 $1/2$ 이라는 가설 아래의 가능도와 가장 잘 맞는 $p=0.6$ 의 가능도를 견주면, 그 비가 얼마나 작아야 가설을 버릴지 정할 기준이 있어야 한다. 가능도비 검정은 비의 로그에 $-2$ 를 곱한 통계량이 표본이 클 때 카이제곱 분포를 따른다는 Wilks 정리(Wilks' theorem)로 그 기준을 정한다.

# 직관

가능도비 검정은 귀무가설의 모수 집합 안에서 얻는 가장 큰 가능도와 모수 공간 전체에서 얻는 가장 큰 가능도의 비가 작을 때 귀무가설을 기각하는 검정이다. 비의 로그에 $-2$ 를 곱한 통계량은 정칙 조건 아래 표본이 커지면 카이제곱 분포로 수렴하고, 이것이 Wilks 정리다.[^1]

[가설검정](hypothesis-testing.md)의 Neyman–Pearson 보조정리(Neyman–Pearson lemma)는 단순가설끼리에서만 최강력 검정을 준다. 가능도비 검정은 복합가설에서 분자와 분모를 각 모수 집합 위의 최대 가능도로 바꾼 비를 쓰고, 기각역의 경계는 [Fisher 정보](fisher-information.md)로 계산되는 점근분포에서 정한다.

동전을 $100$ 번 던져 앞면이 $60$ 번 나왔고, 앞면 확률이 $p=1/2$ 인지 검정한다. 로그가능도는 $\ell(p)=60\log p+40\log(1-p)$ 이고 $\hat p=0.6$ 에서 가장 크다. 공정한 동전 아래의 값과 견주면

$$
2\big(\ell(0.6)-\ell(0.5)\big)=2\left(60\log\frac{0.6}{0.5}+40\log\frac{0.4}{0.5}\right)\approx 4.03
$$

이다. 이 값이 클수록 $p=1/2$ 에서 자료가 덜 그럴듯하다.

기각 여부를 정하려면 $p=p_0=1/2$ 일 때 이 값이 어떤 분포를 따르는지 알아야 한다. $\ell$ 을 $\hat p$ 주위에서 2 차까지 전개하면 $\ell'(\hat p)=0$ 이므로 $2(\ell(\hat p)-\ell(p_0))\approx -\ell''(p_0)(\hat p-p_0)^2$ 이고, $-\ell''(p_0)$ 는 대략 $n/(p_0(1-p_0))=400$ 이다. 그러면 값은 $400\cdot(0.1)^2=4$, 곧 표준화한 앞면 개수 $z=(60-50)/5=2$ 의 제곱이다. $z$ 가 표준정규분포를 따르므로 이 통계량은 표준정규 변수의 제곱의 분포를 따르고, 그 분포에서 $4.03$ 이상이 나올 확률은 약 4.5% 다.

# 정의

## 가능도비

모형 $f(x;\theta)$, $\theta\in\Theta\subseteq\mathbb R^p$ 와 표본 $x=(x_1,\dots,x_n)$ 의 가능도 $L(\theta)$ 에 대해, 가설 $H_0:\theta\in\Theta_0$ 의 **가능도비(likelihood ratio)** 는

$$
\Lambda(x)=\frac{\sup_{\theta\in\Theta_0}L(\theta)}{\sup_{\theta\in\Theta}L(\theta)}
$$

이다. $\Theta_0\subseteq\Theta$ 이므로 $0\le\Lambda\le 1$ 이다. 분모의 최대점은 [최대가능도 추정](maximum-likelihood.md)의 추정량 $\hat\theta$ 이고, 분자의 최대점은 $\Theta_0$ 으로 제한한 추정량 $\hat\theta_0$ 이다.

가능도비 검정은 $\Lambda(x)\le c$ 일 때 기각하는 검정이고, 같은 것을 $\lambda_n=-2\log\Lambda=2\big(\ell(\hat\theta)-\ell(\hat\theta_0)\big)$ 가 문턱 이상일 때 기각한다고 쓴다.

## 카이제곱 분포

독립인 표준정규 확률변수 $Z_1,\dots,Z_k$ 의 제곱합 $Z_1^2+\cdots+Z_k^2$ 의 분포를 자유도 $k$ 인 **카이제곱 분포(chi-squared distribution)** $\chi^2_k$ 라 한다. [정규분포](normal-distribution.md)에서 바로 정의되고 평균은 $k$ 다.

## 단순가설의 경우

$\Theta=\lbrace\theta_0,\theta_1\rbrace$ 이고 $\Theta_0=\lbrace\theta_0\rbrace$ 이면 $\Lambda=\min\big(1,\thinspace L(\theta_0)/L(\theta_1)\big)$ 이다. $c\lt 1$ 에서 $\Lambda\le c$ 는 $L(\theta_1)/L(\theta_0)\ge 1/c$ 와 같으므로, 가능도비 검정이 Neyman–Pearson 보조정리의 최강력 검정과 일치한다.

# 성질

## Wilks 정리

**정리(Wilks, 1938).** $\Theta$ 가 $\mathbb R^p$ 의 열린 집합이고 $\Theta_0$ 이 그 안의 $p-k$ 차원 매끄러운 부분다양체이며 참값 $\theta^\ast$ 가 $\Theta_0$ 에 속한다고 하자. 최대가능도 추정의 정칙 조건 아래

$$
-2\log\Lambda\ \xrightarrow{d}\ \chi^2_k\qquad(n\to\infty)
$$

이다.[^1]

증명의 요지. $\Theta_0=\lbrace\theta_0\rbrace$, $k=p$ 인 경우를 본다. $\ell(\theta_0)$ 을 $\hat\theta$ 주위에서 전개하면 $\ell'(\hat\theta)=0$ 이므로

$$
2\big(\ell(\hat\theta)-\ell(\theta_0)\big)=n(\hat\theta-\theta_0)^\top\Big(-\tfrac1n\ell''(\tilde\theta)\Big)(\hat\theta-\theta_0)
$$

인 $\tilde\theta$ 가 $\hat\theta$ 와 $\theta_0$ 사이에 있다. [큰 수의 법칙](law-of-large-numbers.md)으로 $-\tfrac1n\ell''(\tilde\theta)\to I(\theta_0)$ 이고, 점근정규성 $\sqrt n(\hat\theta-\theta_0)\to N(0,I(\theta_0)^{-1})$ 에서 $Y=\sqrt n\thinspace I(\theta_0)^{1/2}(\hat\theta-\theta_0)$ 이 $p$ 차원 표준정규로 수렴한다. 통계량은 $\vert Y\vert^2$ 에 가까우므로 $\chi^2_p$ 로 수렴한다.

일반의 $\Theta_0$ 에서는 $\ell(\hat\theta)-\ell(\hat\theta_0)$ 이 두 이차형식의 차가 되고, $Y$ 를 $\Theta_0$ 의 접공간에 직교하는 $k$ 차원으로 사영한 길이의 제곱으로 수렴한다.

## 자유도

자유도 $k$ 는 $\dim\Theta-\dim\Theta_0$, 곧 귀무가설이 고정하는 모수의 개수다. 정규분포 $N(m,\sigma^2)$ 에서 $H_0:m=0$ 을 검정하면 $\sigma^2$ 는 양쪽에서 추정되므로 $k=1$ 이다.

## Wald 검정과 점수 검정

같은 가설에 대해 다음 두 통계량도 $H_0$ 아래 $\chi^2_k$ 로 수렴하고, 세 통계량의 차는 확률수렴으로 $0$ 이 된다. 단순가설 $\Theta_0=\lbrace\theta_0\rbrace$ 에서 쓴다.

- **Wald 검정(Wald test)**: $W=n(\hat\theta-\theta_0)^\top I(\hat\theta)(\hat\theta-\theta_0)$. 전체 모형의 추정량만 쓴다.
- **점수 검정(score test, Rao 검정)**: $S=\ell'(\theta_0)^\top\big(nI(\theta_0)\big)^{-1}\ell'(\theta_0)$. 귀무가설 아래의 점수함수만 쓰므로 전체 모형을 적합하지 않아도 된다.

직관 절의 동전에서는 $W=100\cdot 0.1^2/0.24\approx 4.17$, $S=100\cdot 0.1^2/0.25=4$ 이고 가능도비 통계량은 $4.03$ 이다. 가능도비 통계량은 모수를 다시 매개변수화해도 값이 같고, Wald 통계량은 매개변수화에 따라 값이 달라진다.

## 정칙 조건이 깨지는 경우

- 참값이 $\Theta$ 의 경계에 있으면 극한이 $\chi^2_k$ 가 아니다. 분산 성분 $\sigma^2\ge 0$ 에서 $H_0:\sigma^2=0$ 을 검정하면 극한은 $0$ 에 질량 $1/2$ 를 두고 나머지 $1/2$ 가 $\chi^2_1$ 인 혼합분포다.[^2]
- 귀무가설 아래 모형이 식별되지 않으면 극한이 달라진다. 정규 혼합에서 성분 수가 $1$ 인지 $2$ 인지 검정하면 귀무가설 아래 혼합 비율과 둘째 성분의 위치가 정해지지 않아 Wilks 정리의 가정이 성립하지 않는다.

# 활용

- [일반화 선형모형](generalized-linear-models.md)에서 중첩된 두 모형의 이탈도 차이는 가능도비 통계량이고, 자유도가 모수 개수 차이인 카이제곱 분포로 비교한다.
- [신뢰구간](confidence-intervals.md)의 가능도비 구간은 $2(\ell(\hat\theta)-\ell(\theta))$ 가 $\chi^2_k$ 의 분위수 이하인 $\theta$ 전체이고, 가능도비 검정을 뒤집어 얻는다.
- [순차확률비 검정](sequential-probability-ratio-test.md)은 표본마다 가능도비를 갱신하고 두 문턱 가운데 하나를 넘을 때 멈춘다.

[^1]: S. S. Wilks, *The large-sample distribution of the likelihood ratio for testing composite hypotheses*, Ann. Math. Statist. **9** (1938), 60–62.
[^2]: S. G. Self, K.-Y. Liang, *Asymptotic properties of maximum likelihood estimators and likelihood ratio tests under nonstandard conditions*, J. Amer. Statist. Assoc. **82** (1987), 605–610.

# 연관 문서

## 선수지식

- [가설검정](hypothesis-testing.md)
- [Fisher 정보](fisher-information.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
