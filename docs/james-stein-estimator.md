# James–Stein 추정량

# 개요

**James–Stein 추정량(James–Stein estimator)** 은 여러 평균을 한꺼번에 추정할 때 관측값을 그대로 쓰는 대신 모두를 $0$ 쪽으로 같은 비율만큼 당겨 쓰는 추정량이다. 서로 무관한 세 양을 각각 한 번씩 측정한 값 $X_1,X_2,X_3$ 으로 추정할 때는 각 측정값을 그대로 쓰는 추정이 먼저 떠오르지만, 세 값을 같은 비율로 $0$ 쪽으로 줄이면 세 오차의 제곱합의 기댓값이 참값이 무엇이든 더 작아진다. James–Stein 추정량은 줄이는 비율을 관측값의 크기로 정하고, 양이 셋 이상이면 이 추정량이 관측값을 그대로 쓰는 것보다 항상 낫다는 것을 보인다.

# 직관

James–Stein 추정량은 분산이 $1$ 인 독립 정규 관측 $X_1,\dots,X_p$ 에서 평균 벡터 $\theta$ 를 추정할 때 관측 벡터를 원점 쪽으로 줄인 추정량이다.

$$
\hat\theta^{\mathrm{JS}}=\Bigl(1-\frac{p-2}{\Vert X\Vert^2}\Bigr)X
$$

$p\ge 3$ 이면 제곱오차의 합의 기댓값이 모든 $\theta$ 에서 $X$ 자신보다 작다. 최대가능도 추정량 $X$ 가 비허용적(inadmissible)이라는 이 결과가 Stein 의 역설(Stein's paradox)이다[^1].

[편향-분산 분해](bias-variance-decomposition.md) 문서에서 표본평균 $\bar X$ 를 $c$ 배로 줄이면 평균제곱오차가 줄었다. 최적의 배수는 $c^\ast=\mu^2/(\mu^2+\sigma^2/n)$ 이었고, 모르는 $\mu$ 가 들어 있어서 실제로 쓸 수 없었다.

평균이 $p$ 개 있으면 사정이 달라진다. $X_i$ 가 평균 $\theta_i$, 분산 $1$ 인 [정규분포](normal-distribution.md)를 따르고 서로 독립이며 손실이 $\sum_i(\hat\theta_i-\theta_i)^2$ 이라 한다. $X$ 를 그대로 쓰면 손실의 기댓값은 $p$ 다. $cX$ 로 줄이면 같은 계산으로 손실의 기댓값이 $c^2p+(1-c)^2\Vert\theta\Vert^2$ 이고, 최적의 배수는 다음과 같다.

$$
c^\ast=\frac{\Vert\theta\Vert^2}{\Vert\theta\Vert^2+p}=1-\frac{p}{\Vert\theta\Vert^2+p}
$$

모르는 것은 $\Vert\theta\Vert^2+p$ 하나다. 이 값은 $\Vert X\Vert^2$ 의 기댓값이므로 관측에서 추정할 수 있다. $p/(\Vert\theta\Vert^2+p)$ 자리에 $(p-2)/\Vert X\Vert^2$ 를 넣은 것이 James–Stein 추정량이다. 평균이 하나일 때는 $\mu^2$ 를 추정할 관측이 $\bar X$ 하나뿐이었지만, 평균이 여럿이면 $p$ 개의 관측이 함께 $\Vert\theta\Vert^2$ 를 추정한다. 분자의 $p-2$ 는 아래 위험 계산에서 정확한 값으로 나온다.

# 정의

## 위험과 허용성

$X\sim N(\theta,I_p)$ 이고 추정량 $\delta(X)$ 의 **위험(risk)** 을 제곱오차의 기댓값으로 정한다.

$$
R(\theta,\delta)=\mathbb E\_\theta\Vert\delta(X)-\theta\Vert^2
$$

두 추정량 $\delta,\delta^\prime$ 에서 모든 $\theta$ 에 대해 $R(\theta,\delta^\prime)\le R(\theta,\delta)$ 이고 어떤 $\theta$ 에서 부등호가 엄격하면 $\delta^\prime$ 이 $\delta$ 를 **지배한다(dominate)** 고 한다. 지배하는 추정량이 없으면 $\delta$ 는 **허용적(admissible)** 이고, 있으면 **비허용적** 이다.

## James–Stein 추정량과 양의 부분

$p\ge 3$ 에서 개요의 $\hat\theta^{\mathrm{JS}}$ 가 James–Stein 추정량이다. 줄이는 배수가 음수가 되는 것을 막은 것이 **양의 부분 James–Stein 추정량(positive-part James–Stein estimator)** 이다.

$$
\hat\theta^{\mathrm{JS}+}=\Bigl(1-\frac{p-2}{\Vert X\Vert^2}\Bigr)\_{+}X
$$

$(a)\_+=\max(a,0)$ 이다. 원점 대신 임의의 고정점 $\nu$ 쪽으로 줄이려면 $X$ 를 $X-\nu$ 로 바꾼다.

# 성질

## Stein 항등식

> **정리 (Stein).** $Z\sim N(0,1)$ 이고 $g$ 가 절대연속이며 $\mathbb E\vert g^\prime(Z)\vert\lt\infty$ 이면 $\mathbb E\lbrack Zg(Z)\rbrack=\mathbb E\lbrack g^\prime(Z)\rbrack$ 다.

증명은 부분적분이다. 표준정규밀도 $\varphi$ 가 $\varphi^\prime(z)=-z\varphi(z)$ 를 만족하므로 $\int zg\varphi=-\int g\varphi^\prime=\int g^\prime\varphi$ 다. 좌표마다 적용하면 $X\sim N(\theta,I_p)$ 와 약미분가능한 $g:\mathbb R^p\to\mathbb R^p$ 에 대해 $\mathbb E\lbrack(X-\theta)\cdot g(X)\rbrack=\mathbb E\lbrack\nabla\cdot g(X)\rbrack$ 이다.

## 위험 공식

> **정리 (James–Stein).** $p\ge 3$ 이면 모든 $\theta$ 에서 다음이 성립한다[^2].

$$
R(\theta,\hat\theta^{\mathrm{JS}})=p-(p-2)^2\thinspace\mathbb E\_\theta\Bigl\lbrack\frac{1}{\Vert X\Vert^2}\Bigr\rbrack\lt p=R(\theta,X)
$$

증명의 요지. $\hat\theta^{\mathrm{JS}}=X+g(X)$, $g(x)=-(p-2)x/\Vert x\Vert^2$ 로 쓰고 제곱을 전개한다.

$$
\Vert X+g(X)-\theta\Vert^2=\Vert X-\theta\Vert^2+2(X-\theta)\cdot g(X)+\Vert g(X)\Vert^2
$$

첫 항의 기댓값은 $p$ 다. 둘째 항에 Stein 항등식을 쓰면 $\nabla\cdot(x/\Vert x\Vert^2)=(p-2)/\Vert x\Vert^2$ 에서 기댓값이 $-2(p-2)^2\mathbb E\lbrack 1/\Vert X\Vert^2\rbrack$ 이다. 셋째 항은 $(p-2)^2/\Vert X\Vert^2$ 이다. 세 항을 더하면 위 식이 나온다. $p\ge 3$ 에서 $\mathbb E\lbrack 1/\Vert X\Vert^2\rbrack$ 이 유한하고 양수이므로 위험이 $p$ 보다 엄격히 작다.

$\theta=0$ 에서는 $\Vert X\Vert^2$ 이 자유도 $p$ 의 카이제곱분포를 따르고 $\mathbb E\lbrack 1/\Vert X\Vert^2\rbrack=1/(p-2)$ 이므로 위험이 $2$ 다. $p=10$ 이면 위험이 $10$ 에서 $2$ 로 준다. $\Vert\theta\Vert\to\infty$ 이면 위험은 $p$ 로 다가간다.

## 차원과 허용성

> **정리 (Stein).** $X\sim N(\theta,I_p)$ 에서 $X$ 는 $p=1,2$ 이면 허용적이고 $p\ge 3$ 이면 비허용적이다[^1].

$p\ge 3$ 의 비허용성은 위 위험 공식이 준다. $p=1,2$ 의 허용성은 정규 사전분포의 분산을 키운 Bayes 추정량의 열로 Blyth 의 방법을 써서 증명한다. 양의 부분 추정량 $\hat\theta^{\mathrm{JS}+}$ 는 $\hat\theta^{\mathrm{JS}}$ 를 지배하므로 $\hat\theta^{\mathrm{JS}}$ 도 비허용적이다.

## 경험 Bayes 해석

$\theta_i$ 가 서로 독립으로 $N(0,\tau^2)$ 를 따른다고 놓으면, [Bayes 추론](bayesian-inference.md)의 사후평균은 $\bigl(1-1/(1+\tau^2)\bigr)X$ 다. 주변분포에서 $X_i\sim N(0,1+\tau^2)$ 이므로 $\Vert X\Vert^2/(1+\tau^2)$ 가 자유도 $p$ 의 카이제곱분포를 따르고 다음이 성립한다.

$$
\mathbb E\Bigl\lbrack\frac{p-2}{\Vert X\Vert^2}\Bigr\rbrack=\frac{1}{1+\tau^2}
$$

James–Stein 추정량은 사후평균의 모르는 배수 $1/(1+\tau^2)$ 를 이 불편추정량으로 바꾼 것이다. Efron 과 Morris 가 이 해석을 세웠고, 사전분포의 모수를 관측 전체에서 추정하는 방법을 경험 Bayes(empirical Bayes)라 한다[^3].

# 활용

- **능형회귀.** [정칙화](regularization.md)의 능형회귀는 최소제곱 계수를 원점 쪽으로 줄이는 추정이고, 직교 설계에서는 고정 배수 $cX$ 꼴이다. 배수를 자료에서 정하는 일반화교차검증과 Stein 의 비편향 위험 추정(Stein's unbiased risk estimate)이 위 위험 공식과 같은 계산이다.
- **공분산행렬의 축소.** [Marchenko–Pastur 법칙](marchenko-pastur.md)이 보이는 표본공분산 고윳값의 퍼짐을 줄이려고, [Ledoit–Wolf 축소 추정](ledoit-wolf-shrinkage.md)은 표본공분산을 단위행렬의 배수 쪽으로 줄이고 그 비율을 자료에서 정한다.
- **여러 평균의 동시 추정.** 야구 타율, 지역별 발생률처럼 같은 꼴의 평균을 여러 개 추정할 때 전체 평균 $\bar X$ 쪽으로 줄이는 판본 $\bar X+\bigl(1-(p-3)/\Vert X-\bar X\Vert^2\bigr)(X-\bar X)$ 를 쓴다.

[^1]: C. Stein, *Inadmissibility of the usual estimator for the mean of a multivariate normal distribution*, Proc. Third Berkeley Symp. Math. Statist. Prob. 1 (1956), 197–206.
[^2]: W. James, C. Stein, *Estimation with quadratic loss*, Proc. Fourth Berkeley Symp. Math. Statist. Prob. 1 (1961), 361–379.
[^3]: B. Efron, C. Morris, *Stein's estimation rule and its competitors—an empirical Bayes approach*, J. Amer. Statist. Assoc. 68 (1973), 117–130.

# 연관 문서

## 선수지식

- [편향-분산 분해](bias-variance-decomposition.md)
- [정규분포](normal-distribution.md)

## 더 알아보기

- [Ledoit–Wolf 축소 추정](ledoit-wolf-shrinkage.md)

#statistics #probability
