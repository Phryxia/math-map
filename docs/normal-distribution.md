# 정규분포

# 개요

**정규분포(normal distribution, Gaussian distribution)** 는 실수 위에서 밀도가

$$
f(x)=\frac{1}{\sqrt{2\pi\sigma^2}}\exp\negthinspace\left(-\frac{(x-m)^2}{2\sigma^2}\right)
$$

인 분포다. $m$ 은 평균, $\sigma^2\gt 0$ 은 분산이고 $N(m,\sigma^2)$ 으로 쓴다. 밀도는 $m$ 에서 가장 크고 $m$ 에서 멀어질수록 거리의 제곱의 지수로 줄어든다.

독립 확률변수의 합을 표준화하면 정규분포로 분포수렴하고([중심극한정리](central-limit-theorem.md)), 정규분포를 따르는 변수의 일차결합은 다시 정규분포를 따른다. 측정오차, 회귀의 잡음, Brown 운동의 증분을 정규분포로 두는 근거가 이 두 성질이다.

# 직관

밀도 앞의 상수 $1/\sqrt{2\pi\sigma^2}$ 는 전체 확률을 $1$ 로 맞추는 값이다. $m=0$, $\sigma=1$ 이면 이 상수가 맞는지 확인하려면 $I=\int_{-\infty}^\infty e^{-x^2/2}\thinspace dx$ 를 알아야 한다. $e^{-x^2/2}$ 의 원시함수는 초등함수로 쓸 수 없으므로 미적분의 기본정리로는 이 값이 나오지 않는다.

변수가 하나여서 막혔으므로 같은 적분을 두 번 곱해 변수를 둘로 늘린다.

$$
I^2=\int_{-\infty}^\infty\int_{-\infty}^\infty e^{-(x^2+y^2)/2}\thinspace dx\thinspace dy
$$

피적분함수는 원점에서의 거리 $r=\sqrt{x^2+y^2}$ 에만 의존한다. 극좌표로 바꾸면 넓이 요소가 $r\thinspace dr\thinspace d\theta$ 가 되고, 덧붙은 $r$ 때문에 원시함수가 $-e^{-r^2/2}$ 로 나온다.

$$
I^2=\int_0^{2\pi}\int_0^\infty e^{-r^2/2}\thinspace r\thinspace dr\thinspace d\theta=2\pi
$$

그래서 $I=\sqrt{2\pi}$ 이고 상수가 맞다. 이중적분을 반복적분으로 쓰는 단계는 [Fubini–Tonelli 정리](fubini-tonelli.md)가 보장한다. 같은 계산이 독립인 두 표준정규 변수 $(X,Y)$ 의 결합밀도가 회전에 불변이라는 사실을 보여 준다.

# 정의

## 일변량 정규분포

$N(0,1)$ 을 **표준정규분포(standard normal distribution)** 라 하고, 그 분포함수를

$$
\Phi(x)=\int_{-\infty}^x\frac{1}{\sqrt{2\pi}}e^{-u^2/2}\thinspace du
$$

로 쓴다. $Z\sim N(0,1)$ 이면 $X=m+\sigma Z$ 는 $N(m,\sigma^2)$ 을 따르고, 거꾸로 $X\sim N(m,\sigma^2)$ 이면 $(X-m)/\sigma\sim N(0,1)$ 이다. 이 변환을 표준화라 한다. 분산이 $0$ 인 경우는 한 점 $m$ 에 확률 $1$ 을 주는 분포로 두고 퇴화 정규분포라 한다.

## 다변량 정규분포

$\mathbb R^d$ 값 확률벡터 $X$ 가 모든 $a\in\mathbb R^d$ 에서 $a^\top X$ 가 (퇴화를 포함한) 일변량 정규분포를 따르면 $X$ 를 **다변량 정규분포(multivariate normal distribution)** 를 따른다고 한다. 평균벡터 $\mu=\mathbb E X$ 와 [공분산](covariance.md)행렬 $\Sigma=\mathbb E\lbrack(X-\mu)(X-\mu)^\top\rbrack$ 가 분포를 결정하고 $N(\mu,\Sigma)$ 로 쓴다. $\Sigma$ 는 대칭이고 양의 준정부호다.

$\Sigma$ 가 가역이면 밀도는

$$
f(x)=\frac{1}{(2\pi)^{d/2}(\det\Sigma)^{1/2}}\exp\negthinspace\left(-\frac12(x-\mu)^\top\Sigma^{-1}(x-\mu)\right)
$$

이다. $\Sigma$ 가 특이이면 분포는 $\mu+\mathrm{range}(\Sigma)$ 라는 낮은 차원의 아핀 부분공간에 실리고 Lebesgue 측도에 대한 밀도가 없다.

성분마다 정규분포를 따르는 것만으로는 다변량 정규분포가 아니다. $Z\sim N(0,1)$ 이고 $\varepsilon$ 이 $Z$ 와 독립인 부호이면 $Y=\varepsilon Z$ 도 $N(0,1)$ 이지만 $Z+Y$ 는 확률 $\tfrac12$ 로 $0$ 이어서 정규분포가 아니다.

# 성질

## 적률과 특성함수

$Z\sim N(0,1)$ 이면 홀수 차 적률은 $0$ 이고 $\mathbb E Z^{2k}=(2k-1)(2k-3)\cdots 3\cdot 1$ 이다. 부분적분으로 $\mathbb E Z^{n+1}=n\thinspace\mathbb E Z^{n-1}$ 이 나온다. $X\sim N(m,\sigma^2)$ 의 적률생성함수와 [특성함수](characteristic-functions.md)는

$$
\mathbb E e^{tX}=e^{mt+\sigma^2t^2/2},\qquad \mathbb E e^{itX}=e^{imt-\sigma^2t^2/2}
$$

이다. $N(\mu,\Sigma)$ 의 특성함수는 $\exp(i\thinspace t^\top\mu-\frac12 t^\top\Sigma t)$ 이고, 이 식에서 분포가 $\mu$ 와 $\Sigma$ 로 결정된다는 것이 나온다.

## 선형변환

$X\sim N(\mu,\Sigma)$ 이고 $A$ 가 $k\times d$ 행렬, $b\in\mathbb R^k$ 이면

$$
AX+b\sim N(A\mu+b,\thinspace A\Sigma A^\top)
$$

이다. $a^\top(AX+b)=(A^\top a)^\top X+a^\top b$ 가 정규분포를 따르므로 정의에서 바로 나온다. 양의 준정부호 $\Sigma$ 마다 $\Sigma=LL^\top$ 인 $L$ 을 잡고 독립 표준정규 벡터 $Z$ 로 $X=\mu+LZ$ 를 두면 $N(\mu,\Sigma)$ 가 존재한다.

## 독립 합

$X\sim N(m_1,\sigma_1^2)$ 과 $Y\sim N(m_2,\sigma_2^2)$ 이 독립이면 $X+Y\sim N(m_1+m_2,\thinspace\sigma_1^2+\sigma_2^2)$ 이다. 특성함수의 곱이 지수의 합이 되므로 나온다.

역도 성립한다. 독립인 $X,Y$ 의 합이 정규분포를 따르면 $X$ 와 $Y$ 도 각각 정규분포를 따른다. 이것이 [Cramér 분해 정리](cramer-decomposition.md)이고 증명은 특성함수가 전해석함수라는 것과 Hadamard 인수분해 정리(Hadamard factorization theorem)를 쓴다. 이 정리는 [Weierstrass 인수분해 정리](weierstrass-factorization.md)를 유한 위수의 전해석함수로 좁힌 것이다.

## 무상관과 독립

$(X,Y)$ 가 다변량 정규분포를 따르면 $\mathrm{Cov}(X,Y)=0$ 과 $X,Y$ 의 독립이 동치다. 공분산행렬이 블록대각이면 특성함수가 두 인수의 곱으로 갈라진다. 정의 절의 $Z$ 와 $Y=\varepsilon Z$ 는 공분산이 $0$ 이지만 $\lvert Y\rvert=\lvert Z\rvert$ 이므로 독립이 아니고, 둘은 함께 다변량 정규분포를 따르지 않는다.

## 조건부분포

$X=(X_1,X_2)$ 가 $N(\mu,\Sigma)$ 를 따르고 $\Sigma$ 를 같은 방식으로 블록 $\Sigma_{11},\Sigma_{12},\Sigma_{21},\Sigma_{22}$ 로 나누며 $\Sigma_{22}$ 가 가역이면

$$
X_1\mid X_2=x_2\thickspace\sim\thickspace N\bigl(\mu_1+\Sigma_{12}\Sigma_{22}^{-1}(x_2-\mu_2),\thickspace\Sigma_{11}-\Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21}\bigr)
$$

이다. 조건부 평균은 $x_2$ 의 일차함수이고 조건부 공분산은 $x_2$ 에 의존하지 않으며 $\Sigma_{22}$ 의 [Schur 보수](schur-complement.md)다. 증명은 $X_1-\Sigma_{12}\Sigma_{22}^{-1}X_2$ 가 $X_2$ 와 무상관이므로 독립이라는 데서 나온다.

## 꼬리

$Z\sim N(0,1)$ 이고 $t\gt 0$ 이면

$$
\frac{t}{1+t^2}\cdot\frac{e^{-t^2/2}}{\sqrt{2\pi}}\le P(Z\gt t)\le\frac1t\cdot\frac{e^{-t^2/2}}{\sqrt{2\pi}}
$$

이다. 위 부등식은 $u\ge t$ 에서 $1\le u/t$ 를 피적분함수에 곱해 적분하면 나온다. 꼬리 확률이 $e^{-t^2/2}$ 의 속도로 줄어든다는 것이 [집중부등식](concentration-inequalities.md)에서 sub-Gauss 조건의 기준이 된다.

## 최대 엔트로피

평균과 분산이 주어진 실수 위의 밀도 가운데 미분 엔트로피 $-\int f\log f$ 가 가장 큰 것은 정규분포다. [Shannon 엔트로피](entropy.md)의 연속판에서, $N(m,\sigma^2)$ 의 미분 엔트로피는 $\frac12\log(2\pi e\sigma^2)$ 이다. 증명은 임의의 밀도 $g$ 와 정규밀도 $f$ 사이의 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)가 $0$ 이상이라는 부등식이다.

# 활용

- [중심극한정리](central-limit-theorem.md)는 유한한 분산을 갖는 독립 동일분포 합의 표준화가 $N(0,1)$ 로 분포수렴한다는 정리이고, [신뢰구간](confidence-intervals.md)과 [가설검정](hypothesis-testing.md)의 정규근사가 여기서 나온다.
- [Gauss 과정](gaussian-processes.md)은 유한 개 시점의 값이 다변량 정규분포를 따르는 과정이고, 회귀의 사후분포는 조건부분포 공식으로 계산한다.
- [Brown 운동](brownian-motion.md)의 증분 $B_t-B_s$ 는 $N(0,t-s)$ 를 따른다.
- [선형회귀](linear-regression.md)에서 잡음을 독립 $N(0,\sigma^2)$ 로 두면 [최대가능도 추정](maximum-likelihood.md)이 최소제곱법과 같아진다.
- [주성분 분석](principal-component-analysis.md)은 공분산행렬의 고유벡터를 찾는 방법이고, 다변량 정규분포에서는 밀도의 등고선인 타원체의 축이 그 고유벡터다.

# 연관 문서

## 선수지식

- [확률밀도](probability-density.md)
- [공분산](covariance.md)

## 더 알아보기

- [Gauss 과정](gaussian-processes.md)
- [Cramér 분해 정리](cramer-decomposition.md)
- [James–Stein 추정량](james-stein-estimator.md)

#probability #statistics #analysis
