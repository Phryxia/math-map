# 정보 기준

# 개요

**정보 기준(information criterion)** 은 최대 로그가능도에서 모수 개수에 따른 벌점을 뺀 값으로 모형을 비교하는 양이다. Akaike 정보 기준(Akaike information criterion, AIC)은 참 분포와 추정한 분포 사이의 [KL divergence](kl-divergence.md)(Kullback-Leibler divergence)를 추정하고, Bayes 정보 기준(Bayesian information criterion, BIC)은 주변가능도의 로그를 근사한다. 두 기준은 벌점의 크기가 다르고, 그래서 표본이 커질 때 고르는 모형이 갈린다.

# 직관

자료 $(x_i,y_i)$ 가 $n=10$ 개 있고 $y$ 를 $x$ 의 다항식으로 맞춘다. 오차가 평균 $0$, 분산 $\sigma^2$ 인 정규분포라 두고 차수 $k$ 를 [최대가능도 추정](maximum-likelihood.md)으로 고르려 한다.

$k=9$ 로 두면 $10$ 개의 계수가 $10$ 개의 점을 모두 지나는 다항식을 준다. 잔차가 모두 $0$ 이므로 $\sigma^2$ 의 최대가능도 추정값이 $0$ 이 되고 로그가능도가 위로 발산한다. $k$ 를 올릴 때마다 로그가능도가 줄지 않으므로, 가능도를 최대화하는 규칙은 늘 가장 큰 차수를 고른다.

적합에 쓴 자료로 적합의 좋음을 재서 이렇게 되었다. 그래서 같은 모형을 새 자료 $(\tilde x_j,\tilde y_j)$ 에 적용했을 때의 로그가능도를 본다. $\hat\theta$ 가 자료에 맞춰 뽑힌 값이므로 적합에 쓴 자료의 로그가능도는 새 자료에서의 기대 로그가능도보다 크게 나온다. 큰 표본에서 그 차이의 기댓값이 모수 개수 $p$ 에 가까워진다.

그러면 로그가능도 $\hat\ell$ 에서 $p$ 를 빼면 새 자료에서의 값을 치우침 없이 추정한다. 다항회귀에서 $p=k+2$ 이므로 차수를 올릴 때 $\hat\ell$ 과 벌점이 함께 오르고, $\hat\ell-p$ 가 최대가 되는 차수가 하나 정해진다.

$-2(\hat\ell-p)$ 를 AIC 라 하고, 벌점을 $p\log n$ 으로 바꾼 $-2\hat\ell+p\log n$ 을 BIC 라 한다.

# 정의

## Akaike 정보 기준

$$\mathrm{AIC}=-2\hat\ell+2p$$

여기서 $\hat\ell=\log f_{\hat\theta}(x)$ 는 최대 로그가능도이고 $p$ 는 추정한 모수의 개수다. 여러 모형 가운데 AIC 가 가장 작은 것을 고른다.

## Bayes 정보 기준

$$\mathrm{BIC}=-2\hat\ell+p\log n$$

$n$ 은 표본 크기다.

## 보정 Akaike 정보 기준

표본이 작을 때는 치우침의 고차항을 더한

$$\mathrm{AIC}\_c=\mathrm{AIC}+\frac{2p(p+1)}{n-p-1}$$

을 쓴다. $n/p$ 가 작을 때 AIC 와 갈린다.

## 최소기술길이

최소기술길이(minimum description length, MDL)는 모형을 적는 부호의 길이와 그 모형으로 자료를 적는 부호의 길이를 더한 값이다. 두 항으로 나눈 꼴을 2부 부호라 한다.

# 성질

## AIC 의 유도

**정리.** 참 분포 $g$ 가 모형족 $\lbrace f_\theta\rbrace$ 에 들어 있고 정칙 조건이 성립하면, $-2\hat\ell+2p$ 가

$$-2n\thinspace\mathbb E_g\lbrack\log f_{\hat\theta}(X)\rbrack$$

의 점근 비편향 추정량이다.

로그가능도를 참 모수 $\theta_0$ 에서 2차까지 전개하면 $\hat\ell-\ell(\theta_0)$ 가 $\tfrac12(\hat\theta-\theta_0)^\top I(\hat\theta-\theta_0)$ 에 가까워지고, 이 양이 $\tfrac12\chi^2_p$ 분포를 따르므로 기댓값이 $p/2$ 다. 새 자료에서의 기대 로그가능도와 $\ell(\theta_0)$ 의 차이에서 같은 크기의 항이 한 번 더 나온다. 두 항을 더해 치우침이 $p$ 가 된다. ∎

## BIC 의 유도

**정리.** 사전분포 $\pi$ 가 $\hat\theta$ 근방에서 연속이고 양수이면 주변가능도가

$$\log\int f_\theta(x)\pi(\theta)\thinspace d\theta=\hat\ell-\frac p2\log n+O(1)$$

을 만족한다.

[Laplace 방법](laplace-method.md)을 적용한다. 피적분함수의 로그를 $\hat\theta$ 에서 2차까지 전개하면 Gauss 적분이 남고 그 부피가 $(2\pi/n)^{p/2}$ 의 상수배다. 로그를 취하면 $-\tfrac p2\log n$ 이 나온다. ∎

그래서 BIC 가 가장 작은 모형은 사후확률이 가장 큰 모형과 큰 표본에서 일치한다.

## 두 기준이 갈리는 자리

**정리.** 참 모형이 모형족에 있으면 BIC 로 고른 모형이 표본이 커질 때 확률 $1$ 로 참 모형이다. AIC 로 고른 모형은 참 모형보다 큰 모형일 확률이 양수로 남는다.

참 모형보다 모수가 $q$ 개 많은 모형의 로그가능도 차이는 $\tfrac12\chi^2_q$ 로 수렴한다. BIC 의 벌점 차이 $q\log n$ 은 발산하므로 큰 모형이 이길 확률이 $0$ 으로 간다. AIC 의 벌점 차이 $2q$ 는 고정이므로 $\chi^2_q\gt 2q$ 인 확률이 남는다. ∎

$n\gt e^2$ 에서 BIC 의 벌점이 AIC 보다 크다.

## 교차검증과의 관계

**정리.** 선형 모형과 정규 오차에서 하나 빼기 [교차검증](cross-validation.md)의 예측오차와 AIC 는 큰 표본에서 같은 순위를 준다.

하나 빼기 잔차를 모자 행렬의 대각성분으로 적으면 예측오차가 잔차제곱합에 $1+2p/n$ 의 상수배를 곱한 것에 가까워지고, 로그를 취하면 AIC 의 벌점항이 나온다. ∎

## 최소기술길이와의 관계

**정리.** 모수 공간을 격자 폭 $n^{-1/2}$ 로 양자화한 2부 부호의 길이가 $-\hat\ell+\tfrac p2\log n+O(1)$ 이고, BIC 와 같은 순위를 준다.

격자점의 개수가 $n^{p/2}$ 의 상수배이므로 모형을 적는 길이가 $\tfrac p2\log n$ 이다. 폭을 그보다 좁히면 모형 부호가 길어지고 넓히면 자료 부호가 길어져, 두 항의 합이 이 폭에서 최소가 된다. ∎

# 활용

- [선형회귀](linear-regression.md)의 변수 선택에서 조정 $R^2$ 대신 쓴다. 열을 더할 때 벌점이 함께 오르므로 열 개수를 고를 수 있다.
- [확률적 PCA](probabilistic-pca.md)(principal component analysis)에서 잠재 차원 $q$ 를 BIC 로 고른다. 모수 개수가 $q$ 에 따라 정해지므로 벌점이 직접 계산된다.
- [Kolmogorov 복잡도](kolmogorov-complexity.md)는 계산할 수 없으므로, 최소기술길이가 모형족을 고정하고 그 안에서 계산 가능한 부호길이를 쓴다.
- [가설검정](hypothesis-testing.md)이 두 모형의 포함관계를 전제하고 유의수준을 정하는 데 비해, 정보 기준은 포함관계가 없는 모형끼리도 값을 비교한다.

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #machine_learning #information_theory #probability
