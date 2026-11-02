# 최대가능도 추정

# 개요

**최대가능도 추정(maximum likelihood estimation, MLE)** 은 관측된 데이터를 가장 그럴듯하게 만드는 모수를 고르는 추정법이다. 동전을 $10$ 번 던져 앞면이 $7$ 번 나왔을 때 앞면 확률 $p$ 를 수 하나로 추정하려면 $p$ 를 고르는 기준이 있어야 한다. MLE 는 $p$ 마다 이 결과가 나올 확률을 계산해 그 값이 가장 큰 $p$ 를 고르고, 이 예에서는 $p=0.7$ 이 나온다.

# 직관

동전을 $10$ 번 던져 앞면이 $7$ 번 나왔다. 앞면 확률이 $p$ 이면 이 던지기 결과가 나올 확률은 $p^7(1-p)^3$ 이다. $p=0.1$ 이면 약 $7.3\times 10^{-8}$, $p=0.5$ 이면 약 $9.8\times10^{-4}$, $p=0.7$ 이면 약 $2.2\times10^{-3}$ 이다.

이 값을 가장 크게 하는 $p$ 를 찾는다. 곱보다 합이 미분하기 쉬우므로 로그를 취한 $7\log p+3\log(1-p)$ 를 미분한다. 로그는 증가함수라 최대점이 바뀌지 않는다. 도함수 $7/p-3/(1-p)$ 가 $0$ 이 되는 $p=0.7$ 이 답이다.

자료를 고정하고 $p$ 를 움직이며 본 $p^7(1-p)^3$ 을 가능도라 부른다. 가능도는 $p$ 의 확률분포가 아니어서 $p$ 에 대해 적분해도 $1$ 이 되지 않는다.

# 정의

모수 공간 $\Theta$ 에 대해 모형이란 [확률밀도](probability-density.md) 또는 확률질량함수의 족 $f(x;\theta)$ 다. 관측값 $x_1,\dots,x_n$ 이 이 모형에서 독립으로 나왔다고 가정할 때 **가능도(likelihood)** $L$ 과 **로그가능도(log-likelihood)** $\ell$ 을 자료를 고정한 $\theta$ 의 함수로 다음과 같이 정의한다.

$$
L(\theta)=\prod_{i=1}^{n} f(x_i;\theta),
\qquad
\ell(\theta)=\log L(\theta)=\sum_{i=1}^{n}\log f(x_i;\theta)
$$

**최대가능도 추정량(maximum likelihood estimator)** 은 로그가능도를 최대화하는 점이다. 존재하지 않거나 유일하지 않을 수 있으므로 argmax 는 집합이다.

$$
\hat\theta=\mathop{\mathrm{arg\thinspace max}}\_{\theta\in\Theta}\thinspace\ell(\theta)
$$

직관 절의 동전은 $f(x;p)=p^x(1-p)^{1-x}$, $x\in\lbrace 0,1\rbrace$ 인 모형에서 $n=10$, $\sum x_i=7$ 인 경우다. $\ell(p)=7\log p+3\log(1-p)$ 이고 $\hat p=0.7$ 이다. 열 번 모두 앞면이면 $\ell(p)=10\log p$ 가 열린 구간 $(0,1)$ 에서 최대점을 갖지 않고, $\Theta=\lbrack 0,1\rbrack$ 로 두면 $\hat p=1$ 이다.

## 점수함수와 Fisher 정보

로그가능도의 모수에 대한 도함수를 **점수함수(score function)** 라 한다. 미분과 적분의 교환이 허용되는 정칙 조건 아래 점수함수의 기댓값은 $0$ 이다.

$$
s(\theta;x)=\frac{\partial}{\partial\theta}\log f(x;\theta),
\qquad
\mathbb E_\theta\big[s(\theta;X)\big]=0
$$

[Fisher 정보](fisher-information.md)는 점수함수의 분산이며, 같은 조건 아래 로그가능도의 2차 도함수의 기댓값의 음수와 같다.

$$
I(\theta)=\mathbb E_\theta\negthinspace\left[s(\theta;X)^2\right]
=-\thinspace\mathbb E_\theta\negthinspace\left[\frac{\partial^2}{\partial\theta^2}\log f(X;\theta)\right]
$$

동전 한 번에서 $s(p;x)=x/p-(1-x)/(1-p)$ 이고, $x=1$ 일 확률 $p$ 를 곱해 더하면 $\mathbb E\_p[s]=1-1=0$ 이다. 다변수 모수에서는 $I(\theta)$ 가 [행렬](matrices.md)이고, 그 [고윳값](eigenvalues.md)은 각 고유벡터 방향의 정보량이다.

## 정칙 조건

점근 결과가 성립하기 위한 표준적 가정은 다음을 포함한다[^1]. 분포의 지지집합이 $\theta$ 에 의존하지 않는다. 참값이 $\Theta$ 의 내부점이고 모형이 식별가능하다(서로 다른 $\theta$ 가 서로 다른 분포를 준다). 로그밀도가 $\theta$ 에 대해 충분히 매끄럽고 미분과 적분의 교환이 허용된다. Fisher 정보가 유한하고 $0$ 이 아니다. 모수의 개수가 $n$ 과 함께 늘어나지 않는다.

# 성질

## 1차 조건

$\Theta$ 가 열린 구간이고 로그가능도가 미분가능하면 내부 최대점에서 점수 방정식(score equation)이 성립한다. 이 조건은 필요조건이므로 2차 도함수의 부호나 경계값과의 비교로 최대인지 확인한다.

$$
\ell'(\hat\theta)=\sum_{i=1}^{n}\frac{\partial}{\partial\theta}\log f(x_i;\hat\theta)=0
$$

최대점이 경계에 놓이는 경우도 흔하다. [균등분포](uniform-distribution.md) $U(0,\theta)$ 에서 가능도는 $\theta$ 가 모든 관측값 이상인 구간에서 $\theta^{-n}$ 에 비례하므로 미분으로는 극점이 없고 최대점은 관측값의 최댓값이다.

## 변환 불변성

$g$ 가 단사함수일 때, $g(\theta)$ 의 MLE 는 MLE 의 상이다. $\theta$ 를 $g(\theta)$ 로 재매개화하면 가능도의 값 집합이 바뀌지 않으므로 최대를 주는 점이 대응된다.

$$
\widehat{g(\theta)}=g(\hat\theta)
$$

동전에서 로그 오즈 $\log(p/(1-p))$ 의 MLE 는 $\log(0.7/0.3)\approx 0.847$ 이다. 불편성은 이런 불변성을 갖지 않는다. $\theta$ 의 불편추정량을 비선형 $g$ 로 보낸 값은 일반적으로 $g(\theta)$ 의 불편추정량이 아니다. MLE 는 일반적으로 불편이 아니다. [정규분포](normal-distribution.md) 분산의 MLE 는 편차제곱합을 $n$ 으로 나눈 값이어서 불편추정량보다 작다.

## 일치성

모형이 식별가능하고 정칙 조건이 만족되면 MLE 는 참값으로 확률수렴한다. 증명의 요지는 다음이다. [큰 수의 법칙](law-of-large-numbers.md)으로 $1/n$ 을 곱한 로그가능도가 참값 $\theta_0$ 에서의 기댓값으로 수렴한다.

$$
\frac1n\ell(\theta)\thinspace\xrightarrow{\thinspace P\thinspace}\thinspace
\mathbb E_{\theta_0}\negthinspace\left[\log f(X;\theta)\right]
=-H(\theta_0)-D_{\mathrm{KL}}\negthinspace\left(f_{\theta_0}\thinspace\Vert\thinspace f_\theta\right)
$$

여기서 $H(\theta_0)$ 는 $f_{\theta_0}$ 의 [Shannon 엔트로피](entropy.md)다. [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)는 음이 아니고 두 분포가 같을 때만 $0$ 이므로, 극한 목적함수는 $\theta_0$ 에서 유일하게 최대다. 여기에 최대점의 수렴을 보장하는 [균등수렴](uniform-convergence.md) 조건을 더하면 일치성이 나온다. 그러므로 MLE 는 $D_{\mathrm{KL}}(f_{\theta_0}\Vert f_\theta)$ 를 최소화하는 $\theta$ 를 표본으로 추정한 값이다.

## 점근정규성

정칙 조건 아래 다음이 성립한다[^2].

$$
\sqrt n\thinspace(\hat\theta-\theta_0)\thickspace\xrightarrow{\thinspace d\thinspace}\thickspace N\negthinspace\left(0,\thinspace I(\theta_0)^{-1}\right)
$$

증명의 요지는 다음과 같다. 점수함수를 참값 주위에서 1차 Taylor 전개한다.

$$
0=\ell'(\hat\theta)\approx\ell'(\theta_0)+\ell''(\theta_0)(\hat\theta-\theta_0)
\thinspace\Longrightarrow\thinspace
\sqrt n(\hat\theta-\theta_0)\approx
\frac{n^{-1/2}\ell'(\theta_0)}{-n^{-1}\ell''(\theta_0)}
$$

분자는 평균 $0$, 분산 $I(\theta_0)$ 인 독립 동일분포 점수함수의 표준화된 합이므로 [중심극한정리](central-limit-theorem.md)에 의해 정규분포로 수렴하고, 분모는 큰 수의 법칙으로 $I(\theta_0)$ 로 수렴한다. 두 결과를 Slutsky 정리(Slutsky's theorem)로 합치면 결론이 나온다. 나머지항의 통제에 일치성과 3차 미분의 국소적 유계성이 쓰인다.

점근분산이 Cramér–Rao 하한(Cramér–Rao bound), 곧 불편추정량의 분산의 하한 $(nI(\theta))^{-1}$ 과 같으므로 MLE 는 점근적으로 효율적이다. 유한 표본에서는 MLE 보다 평균제곱오차가 작은 추정량이 존재할 수 있다.

## 실패 사례

모형이 잘못 지정되면 MLE 는 참 분포가 아니라 모형족 안에서 KL divergence 가 가장 작은 분포로 수렴한다. 혼합모형에서는 가능도가 무계일 수 있고(한 성분의 분산을 0으로 보내면 발산), 모수 개수가 표본 크기와 함께 커지는 경우 일치성이 깨진다. Neyman–Scott 문제(Neyman–Scott problem)가 후자의 반례다.

# 활용

## Bernoulli

$n$ 번의 독립 시행에서 성공 횟수를 $k$ 라 하면 로그가능도와 그 도함수는 다음과 같다.

$$
\ell(p)=k\log p+(n-k)\log(1-p),
\qquad
\ell'(p)=\frac{k}{p}-\frac{n-k}{1-p}
$$

0으로 두고 풀면 표본비율이 나온다. Fisher 정보도 직접 계산된다.

$$
\hat p=\frac kn,\qquad I(p)=\frac{1}{p(1-p)}
$$

따라서 표본비율의 점근분산은 $p(1-p)/n$ 이고, 비율에 대한 신뢰구간 공식을 이 분산에서 얻는다.

## 정규분포

평균과 분산을 모두 모를 때 로그가능도를 두 모수로 각각 편미분해 0으로 두고 풀면 다음을 얻는다.

$$
\hat\mu=\overline x,
\qquad
\hat\sigma^2=\frac1n\sum_{i=1}^{n}(x_i-\overline x)^2
$$

평균이 알려진 경우와 달리 평균을 데이터에서 추정하면 자유도 하나를 잃는다. 그래서 분산의 MLE 는 $n-1$ 이 아니라 $n$ 으로 나눈 값이고 편향되어 있다. 평균만 모르는 정규 모형에서 MLE 를 구하는 문제는 제곱합 최소화와 같으므로, [선형회귀](linear-regression.md)의 최소제곱법은 정규 오차 가정 아래의 MLE 다.

## 수치 최적화

닫힌 해가 없으면 점수 방정식을 수치적으로 푼다. [Newton 법](newton-method.md)(Newton–Raphson method)은 2차 도함수를 쓰고, 그 자리에 Fisher 정보를 넣은 변형이 Fisher scoring 이다. 로그가능도가 오목하면, 예를 들어 [지수족](exponential-families.md)의 자연모수에서는, 국소 최대가 전역 최대이고 [볼록성](convexity.md) 기반의 [경사하강법](gradient-descent.md)이 그대로 적용된다.

## 다른 추론 방식과의 관계

가능도에 사전분포를 곱해 최대화하면 최대사후확률(maximum a posteriori, MAP) 추정이 되고, 사전분포가 균등하면 MLE 와 같다. 이 관계는 [Bayes 정리](bayes.md)에서 유도된다. 정규분포 사전분포를 쓴 MAP 는 제곱 벌점(ridge)과 같고, Laplace 사전분포는 절댓값 벌점(lasso)과 같다. 가능도비를 검정통계량으로 쓰면 [가설검정](hypothesis-testing.md)의 [가능도비 검정](likelihood-ratio-test.md)이 되고, Wilks 정리(Wilks' theorem)가 그 점근분포를 준다.

[^1]: Michal Kulich, "Maximum Likelihood Estimation Theory", NMST432 lecture notes, Charles University (정칙 조건, 점수함수, Fisher 정보, 점근 결과). https://www.karlin.mff.cuni.cz/~kulich/vyuka/glm/doc/mle_summary.pdf
[^2]: Gregory Gundersen, "Asymptotic Normality of Maximum Likelihood Estimators" (Taylor 전개 증명 개요와 Fisher 정보의 역수 형태 점근분산). https://gregorygundersen.com/blog/2019/11/28/asymptotic-normality-mle/

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [미분](derivative.md)
- [통계 개관](statistics-overview.md)

## 더 알아보기

### 추정의 이론

- [Fisher 정보](fisher-information.md)
- [지수족](exponential-families.md)
- [M-추정량](m-estimators.md)

### 알고리즘과 모형

- [기댓값 최대화 알고리즘](em-algorithm.md)
- [선형회귀](linear-regression.md)

### 모형 비교

- [가설검정](hypothesis-testing.md)
- [정보 기준](information-criteria.md)

#statistics #probability #optimization
