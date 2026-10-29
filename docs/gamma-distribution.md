# 감마분포

# 개요

**감마분포(gamma distribution)** 는 서로 독립으로 일어나는 사건이 정해진 횟수만큼 일어날 때까지 기다리는 시간의 분포다. 시간당 평균 $30$ 통의 전화가 오는 고객센터에서 세 번째 전화가 올 때까지 걸리는 시간이 이 꼴이다. 감마분포는 [지수분포](exponential-distribution.md)를 따르는 대기시간 여러 개의 합을 밀도 하나로 적고, 횟수 자리에 정수가 아닌 양수도 넣는다.

# 직관

전화가 비율 $\lambda$ 로 오고 이웃한 전화 사이의 간격이 독립이고 모두 비율 $\lambda$ 인 지수분포를 따른다고 하자. 세 번째 전화가 시각 $t$ 뒤에 온다는 것은 $t$ 까지 온 전화가 $0$, $1$, $2$ 통 가운데 하나라는 것이다. $t$ 까지 온 전화 수는 평균 $\lambda t$ 인 [Poisson 분포](poisson-distribution.md)를 따르므로 다음이 성립한다.

$$
P(S_3\gt t)=e^{-\lambda t}\left(1+\lambda t+\frac{(\lambda t)^2}{2}\right)
$$

이것을 $t$ 로 미분해 부호를 바꾸면 이웃한 항이 상쇄되어 $S_3$ 의 밀도 $\frac{\lambda^3t^2}{2}e^{-\lambda t}$ 만 남는다. 세 번째 대신 $k$ 번째이면 같은 계산으로 밀도가 $\frac{\lambda^kt^{k-1}}{(k-1)!}e^{-\lambda t}$ 다.

# 정의

$\alpha\gt 0$, $\lambda\gt 0$ 일 때 확률밀도가 다음과 같은 분포를 모양 모수(shape parameter) $\alpha$, 비율 $\lambda$ 인 감마분포라 하고 $\Gamma(\alpha,\lambda)$ 로 쓴다.

$$
f(x)=\frac{\lambda^{\alpha}}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}\qquad(x\gt 0)
$$

$\Gamma(\alpha)=\int_0^\infty x^{\alpha-1}e^{-x}\thinspace dx$ 는 [감마 함수](gamma-function.md)이고, 정수 $k$ 에서 $\Gamma(k)=(k-1)!$ 이므로 직관 절의 밀도가 $\alpha=k$ 인 경우다. $\alpha=1$ 이면 지수분포이고, $\alpha=k/2$, $\lambda=1/2$ 이면 자유도 $k$ 인 [카이제곱 분포](chi-squared-distribution.md)다.[^1]

# 성질

## 평균과 분산

**정리.** $X\sim\Gamma(\alpha,\lambda)$ 이면 $\mathbb E\lbrack X\rbrack=\alpha/\lambda$ 이고 $\mathrm{Var}(X)=\alpha/\lambda^2$ 이다.

증명의 요지. $\mathbb E\lbrack X^r\rbrack=\frac{\Gamma(\alpha+r)}{\lambda^r\Gamma(\alpha)}$ 이고 $\Gamma(\alpha+1)=\alpha\Gamma(\alpha)$ 를 쓴다.

## 합

**정리.** $X\sim\Gamma(\alpha,\lambda)$ 와 $Y\sim\Gamma(\beta,\lambda)$ 가 독립이면 $X+Y\sim\Gamma(\alpha+\beta,\lambda)$ 이다.

증명의 요지. 합의 밀도는 $\int_0^xs^{\alpha-1}(x-s)^{\beta-1}\thinspace ds\cdot e^{-\lambda x}$ 에 비례하고, $s=xu$ 로 치환하면 적분이 $x^{\alpha+\beta-1}$ 과 $u$ 에 대한 상수의 곱이다. 상수는 베타 함수(beta function) $\mathrm B(\alpha,\beta)=\Gamma(\alpha)\Gamma(\beta)/\Gamma(\alpha+\beta)$ 로 맞는다.

## 비와 베타분포

**정리.** 위의 $X$, $Y$ 에 대해 $X/(X+Y)$ 와 $X+Y$ 는 독립이고, $X/(X+Y)$ 의 밀도는 $u^{\alpha-1}(1-u)^{\beta-1}/\mathrm B(\alpha,\beta)$ $(0\lt u\lt 1)$ 이다.[^1]

증명의 요지. $(x,y)\mapsto(u,w)=(x/(x+y),\thinspace x+y)$ 로 바꾸면 야코비 행렬식(Jacobian determinant)이 $w$ 이고, 결합밀도가 $u$ 만의 함수와 $w$ 만의 함수의 곱으로 갈라진다. 이 분포가 [베타분포](beta-distribution.md)다.

# 활용

- [Poisson 과정](poisson-process.md)에서 $n$ 번째 사건의 시각은 $\Gamma(n,\lambda)$ 를 따르고, 직관 절의 계산이 사건 수와 사건 시각의 두 표현을 잇는다.
- [Dirichlet 분포](dirichlet-distribution.md)는 독립 감마 확률변수 $X_j\sim\Gamma(\alpha_j,1)$ 를 합으로 나눈 벡터의 분포이고, 비와 베타분포 정리의 여러 변수판이다.
- [Bayes 추론](bayesian-inference.md)에서 Poisson 관측의 평균에 감마분포를 사전분포로 두면 사후분포도 감마분포다. 사전분포가 $\Gamma(\alpha,\lambda)$ 이고 관측 $n$ 개의 합이 $s$ 이면 사후분포는 $\Gamma(\alpha+s,\lambda+n)$ 이다.

[^1]: G. Casella, R. L. Berger, *Statistical Inference*, 2nd ed., Duxbury (2002), §3.3 과 §4.3. 감마분포와 베타분포, 감마 확률변수의 비.

# 연관 문서

## 선수지식

- [지수분포](exponential-distribution.md)

## 더 알아보기

- [베타분포](beta-distribution.md)

#probability #statistics
