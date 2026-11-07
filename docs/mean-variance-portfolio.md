# 평균-분산 포트폴리오

# 개요

**평균-분산 포트폴리오(mean–variance portfolio)** 는 정한 기대수익을 내는 자산 배분 가운데 수익의 분산이 가장 작은 배분이다. 수익률의 표준편차가 20% 와 30% 이고 서로 상관이 없는 두 주식에 돈을 나누면, 적절한 비율에서 두 주식 어느 쪽보다도 표준편차가 작은 묶음이 된다. 평균-분산 포트폴리오는 수익률의 [공분산](covariance.md)행렬로 분산을 적고, 기대수익과 비중의 합을 제약으로 둔 최소화를 [Lagrange 승수법](lagrange-multipliers.md)으로 풀어 그 비율을 구한다.

# 직관

주식 1 의 수익률 분산이 $0.04$, 주식 2 의 분산이 $0.09$ 이고 둘이 독립이다. 돈의 비중 $w$ 를 주식 1 에, $1-w$ 를 주식 2 에 두면 묶음의 수익률 분산은 다음이다.

$$
0.04w^2+0.09(1-w)^2
$$

$w$ 로 미분해 $0$ 으로 두면 $0.08w-0.18(1-w)=0$ 이고 $w=9/13\approx 0.69$ 다. 이때 분산은 $0.0036/0.13\approx 0.0277$, 표준편차는 약 16.6% 다. 한쪽의 수익이 낮을 때 다른 쪽이 따로 움직여 일부를 메우므로 분산이 줄어든다.

기대수익을 목표값으로 정하면 $w$ 에 제약이 하나 더 붙는다. 자산이 많으면 이 제약들 아래 분산을 최소화하는 문제가 된다.

# 정의

## 최소 분산 문제

자산 $n$ 개의 수익률 벡터의 기댓값이 $\mu\in\mathbb R^n$, 공분산행렬이 양의 정부호 $\Sigma$ 다. 비중 벡터 $w\in\mathbb R^n$ 의 수익률은 기댓값 $\mu^{\mathsf T}w$, 분산 $w^{\mathsf T}\Sigma w$ 를 갖는다. 목표 기대수익 $r$ 에 대해

$$
\min_w\ w^{\mathsf T}\Sigma w\qquad\text{subject to}\qquad \mathbf 1^{\mathsf T}w=1,\qquad \mu^{\mathsf T}w=r
$$

의 해를 기대수익 $r$ 의 **평균-분산 포트폴리오** 라 한다. 여기서 $\mathbf 1$ 은 성분이 모두 $1$ 인 벡터다. 음의 비중은 빌려서 판 자산을 뜻한다.

## 효율적 경계

$r$ 을 움직일 때 최소 분산 $\sigma^2(r)$ 이 그리는 곡선 가운데 $r$ 이 전역 최소 분산 포트폴리오의 기대수익 이상인 부분을 **효율적 경계(efficient frontier)** 라 한다. 이 위의 배분은 같은 분산으로 더 큰 기대수익을 낼 수 없다.

# 성질

## 닫힌 꼴의 해

$a=\mathbf 1^{\mathsf T}\Sigma^{-1}\mathbf 1$, $b=\mathbf 1^{\mathsf T}\Sigma^{-1}\mu$, $c=\mu^{\mathsf T}\Sigma^{-1}\mu$, $d=ac-b^2$ 로 두고 $\mu$ 가 $\mathbf 1$ 의 배수가 아니면 $d\gt 0$ 이다. 해와 최소 분산은 다음이다.[^1]

$$
w(r)=\Sigma^{-1}\bigl(\lambda\mathbf 1+\gamma\mu\bigr),\qquad \lambda=\frac{c-br}{d},\qquad \gamma=\frac{ar-b}{d},\qquad \sigma^2(r)=\frac{ar^2-2br+c}{d}
$$

증명의 요지. Lagrange 함수의 $w$ 에 대한 기울기를 $0$ 으로 두면 $2\Sigma w$ 가 $\mathbf 1$ 과 $\mu$ 의 일차결합이므로 $w=\Sigma^{-1}(\lambda\mathbf 1+\gamma\mu)$ 꼴이다. 두 제약에 넣으면 $a\lambda+b\gamma=1$, $b\lambda+c\gamma=r$ 이고 이것을 풀면 위 식이 나온다. 분산은 $w^{\mathsf T}\Sigma w=\lambda+\gamma r$ 이다.

## 전역 최소 분산 포트폴리오

$\sigma^2(r)$ 은 $r=b/a$ 에서 최소 $1/a$ 이고, 그 배분은 $w_g=\Sigma^{-1}\mathbf 1/a$ 다. 직관 절에서는 $\Sigma^{-1}=\mathrm{diag}(25,100/9)$ 이라 $a=325/9$, $1/a\approx 0.0277$ 이고 $w_g=(9/13,4/13)$ 이다.

## 두 펀드 정리

$w(r)$ 은 $r$ 의 일차식이므로, 효율적 경계 위의 서로 다른 두 배분을 고르면 경계 위의 모든 배분이 그 둘의 일차결합이다. 이것을 두 펀드 정리(two-fund theorem)라 한다.

## 무위험 자산과 접점 포트폴리오

이자율 $r_f$ 로 빌리고 빌려줄 수 있는 무위험 자산이 있으면, 위험 자산 부분의 최적 배분은 기대수익과 상관없이 다음 벡터의 방향이다.

$$
w_t\propto\Sigma^{-1}\bigl(\mu-r_f\mathbf 1\bigr)
$$

이것을 비중의 합이 $1$ 이 되게 나눈 것을 **접점 포트폴리오(tangency portfolio)** 라 한다. 이 배분은 초과 기대수익을 표준편차로 나눈 비 $(\mu^{\mathsf T}w-r_f)/\sqrt{w^{\mathsf T}\Sigma w}$ 를 최대로 하고, 이 비를 Sharpe 비율(Sharpe ratio)이라 한다.

# 활용

- 공매도 금지. 비중에 $w\ge 0$ 을 더하면 닫힌 꼴이 없어지고 [이차 계획법](quadratic-programming.md)으로 푼다.
- 공분산행렬의 추정. 자산 수가 관측 기간에 비해 많으면 표본공분산의 역행렬이 불안정해 배분이 극단으로 치우치므로, [Ledoit–Wolf 축소 추정](ledoit-wolf-shrinkage.md)으로 줄인 행렬을 넣는다.
- 장기 성장률을 최대로 하는 [Kelly 기준](kelly-criterion.md)은 로그 수익의 기댓값을 목적으로 쓴다. 수익이 작을 때 로그를 2 차까지 전개하면 평균에서 분산의 절반을 뺀 목적이 되어 평균-분산 문제의 한 점을 고른다.

[^1]: Robert C. Merton, "An analytic derivation of the efficient portfolio frontier", *Journal of Financial and Quantitative Analysis* 7 (1972), 1851–1872.

# 연관 문서

## 선수지식

- [공분산](covariance.md)
- [Lagrange 승수법](lagrange-multipliers.md)

## 더 알아보기

- [자본자산 가격결정 모형](capital-asset-pricing-model.md)

#optimization #statistics #probability
