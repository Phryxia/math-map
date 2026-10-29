# 카이제곱 분포

# 개요

**카이제곱 분포(chi-squared distribution)** 는 서로 독립인 표준정규 확률변수 몇 개를 각각 제곱해 더한 값의 분포다. 과녁 중심을 노린 화살이 가로와 세로로 각각 표준정규분포를 따라 빗나가면, 화살과 중심 사이 거리의 제곱이 이 분포를 따른다. 오차의 제곱을 더한 통계량이 우연으로 나올 만한 크기인지를 이 분포의 꼬리 확률로 판정한다.

# 직관

화살이 가로로 $X$, 세로로 $Y$ 만큼 빗나가고 $X$, $Y$ 가 독립이고 평균 $0$, 분산 $1$ 인 [정규분포](normal-distribution.md)를 따른다고 하자. 화살이 중심에서 거리의 제곱 $r$ 보다 멀리 떨어질 확률은 원 $x^2+y^2=r$ 바깥에서 밀도 $\frac1{2\pi}e^{-(x^2+y^2)/2}$ 를 적분한 값이다.

중심에서의 거리 $\rho$ 로 적분하면 반지름 $\rho$ 인 원의 둘레 $2\pi\rho$ 가 곱해진다.

$$
P(X^2+Y^2\gt r)=\int_{\sqrt r}^{\infty}\frac1{2\pi}e^{-\rho^2/2}\cdot 2\pi\rho\thinspace d\rho=e^{-r/2}
$$

그래서 거리의 제곱은 비율 $\frac12$ 인 [지수분포](exponential-distribution.md)를 따르고 평균이 $2$ 다. 축이 $k$ 개이면 같은 계산에서 둘레 대신 반지름 $\rho$ 인 구면의 넓이가 곱해지고, 그 넓이가 $\rho^{k-1}$ 에 비례하므로 밀도에 $r^{k/2-1}$ 이 붙는다.

# 정의

$Z_1,\dots,Z_k$ 가 독립이고 모두 표준정규분포 $N(0,1)$ 을 따를 때 $Q=Z_1^2+\cdots+Z_k^2$ 의 분포를 자유도 $k$ 인 카이제곱 분포라 하고 $Q\sim\chi^2_k$ 로 쓴다. $k$ 를 **자유도(degrees of freedom)** 라 한다. 밀도는 다음과 같다.[^1]

$$
f_k(x)=\frac{x^{k/2-1}e^{-x/2}}{2^{k/2}\thinspace\Gamma(k/2)}\qquad(x\gt 0)
$$

여기서 $\Gamma$ 는 [감마 함수](gamma-function.md)다.

# 성질

## 밀도의 유도

$k=1$ 에서 $P(Z^2\le x)=P(-\sqrt x\le Z\le\sqrt x)$ 를 $x$ 로 미분하면 $x^{-1/2}e^{-x/2}/\sqrt{2\pi}$ 이고, $\Gamma(1/2)=\sqrt\pi$ 이므로 위 식의 $k=1$ 인 경우다. 밀도가 $x^{a-1}e^{-x/2}$ 와 $x^{b-1}e^{-x/2}$ 에 비례하는 독립 확률변수의 합은 합성곱에서 베타 적분 $\int_0^1t^{a-1}(1-t)^{b-1}\thinspace dt$ 가 상수로 빠져 밀도가 $x^{a+b-1}e^{-x/2}$ 에 비례한다. $k$ 에 대한 귀납법으로 정의 절의 식이 나온다.

## 평균, 분산, 합

**정리.** $Q\sim\chi^2_k$ 이면 $\mathbb E\lbrack Q\rbrack=k$, $\mathrm{Var}(Q)=2k$ 이다. $Q\sim\chi^2_k$ 와 $R\sim\chi^2_m$ 이 독립이면 $Q+R\sim\chi^2_{k+m}$ 이다.

증명의 요지. $\mathbb E\lbrack Z^2\rbrack=1$, $\mathbb E\lbrack Z^4\rbrack=3$ 이므로 $\mathrm{Var}(Z^2)=2$ 이고, 독립인 항을 $k$ 개 더한다. 합은 정의에서 독립 표준정규 $k+m$ 개의 제곱합이다.

$k$ 가 크면 [중심극한정리](central-limit-theorem.md)로 $(Q-k)/\sqrt{2k}$ 의 분포가 $N(0,1)$ 에 가까워진다.

## 표본분산의 분포

**정리.** $X_1,\dots,X_n$ 이 독립이고 모두 $N(\mu,\sigma^2)$ 를 따를 때 표본평균 $\bar X$ 와 표본분산 $s^2=\frac1{n-1}\sum_i(X_i-\bar X)^2$ 은 독립이고, 다음이 성립한다.[^1]

$$
\frac{(n-1)s^2}{\sigma^2}\sim\chi^2_{n-1}
$$

증명의 요지. $Z_i=(X_i-\mu)/\sigma$ 로 두고, 첫 행이 $(1/\sqrt n,\dots,1/\sqrt n)$ 인 직교행렬 $A$ 로 $W=AZ$ 를 만든다. 독립 표준정규 벡터의 분포는 회전에 대해 변하지 않으므로 $W_1,\dots,W_n$ 도 독립 표준정규다. $W_1=\sqrt n\thinspace(\bar X-\mu)/\sigma$ 이고 $\sum_iW_i^2=\sum_iZ_i^2$ 이므로 $(n-1)s^2/\sigma^2=W_2^2+\cdots+W_n^2$ 이다. 평균을 추정하는 데 $W_1$ 하나를 쓰므로 자유도가 $n-1$ 이다.

# 활용

- [가능도비 검정](likelihood-ratio-test.md)의 Wilks 정리는 귀무가설 아래 $-2\log\Lambda$ 가 자유도가 모수 개수의 차이인 카이제곱 분포로 수렴한다고 진술한다.
- [신뢰구간](confidence-intervals.md)에서 정규 표본의 분산 $\sigma^2$ 에 대한 구간은 표본분산 정리의 $(n-1)s^2/\sigma^2$ 를 피벗량으로 쓴다.
- [James–Stein 추정량](james-stein-estimator.md)의 위험 계산은 $p\ge 3$ 에서 $\mathbb E\lbrack 1/Q\rbrack=1/(p-2)$, $Q\sim\chi^2_p$ 를 쓴다.
- [Pearson 카이제곱 검정](pearson-chi-squared-test.md)은 범주 $m$ 개의 관측 빈도 $O_j$ 와 기대 빈도 $E_j$ 로 만든 통계량 $\sum_j(O_j-E_j)^2/E_j$ 가 표본이 클 때 $\chi^2_{m-1}$ 에 가까운 분포를 따르는 것을 써서 적합도를 판정한다.

[^1]: G. Casella, R. L. Berger, *Statistical Inference*, 2nd ed., Duxbury (2002), §5.3. 정규 표본의 표본평균과 표본분산, 카이제곱 분포의 밀도와 성질.

# 연관 문서

## 선수지식

- [정규분포](normal-distribution.md)

## 더 알아보기

- [t 분포](t-distribution.md)
- [F 분포](f-distribution.md)
- [가능도비 검정](likelihood-ratio-test.md)
- [Pearson 카이제곱 검정](pearson-chi-squared-test.md)

#statistics #probability
