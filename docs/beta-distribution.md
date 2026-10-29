# 베타분포

# 개요

**베타분포(beta distribution)** 는 $0$ 과 $1$ 사이의 값을 갖는 분포로, 모르는 비율이나 확률이 어디쯤인지를 나타낸다. 동전을 $10$ 번 던져 앞면이 $7$ 번 나왔을 때 이 동전의 앞면 확률 $p$ 가 $0.7$ 근처라는 것은 알지만, $0.5$ 일 가능성이 얼마나 남는지도 알고 싶다. 베타분포는 $p$ 에 대한 이런 판단을 밀도 하나로 적고, 앞면과 뒷면의 횟수를 두 모수에 더해 갱신한다.

# 직관

던지기 전에는 $p$ 에 대해 아는 것이 없다고 보고 $p$ 가 $\lbrack 0,1\rbrack$ 의 [균등분포](uniform-distribution.md)를 따른다고 두자. $p$ 가 주어지면 앞면 $7$ 번, 뒷면 $3$ 번이 특정 순서로 나올 확률은 $p^7(1-p)^3$ 이다.

[Bayes 정리](bayes.md)로 관측 뒤의 밀도는 처음 밀도 $1$ 에 이 확률을 곱한 것에 비례하므로 $p^7(1-p)^3$ 에 비례한다. 이 함수는 $p=0.7$ 에서 가장 크고, $p=0.5$ 에서의 값은 그 최댓값의 약 $0.44$ 배다. 적분해서 $1$ 이 되도록 상수를 맞춘 것이 모수 $(8,4)$ 인 베타분포이고, 평균은 $8/12=2/3$ 이다.

# 정의

$a\gt 0$, $b\gt 0$ 일 때 $(0,1)$ 에서 확률밀도가 다음과 같은 분포를 모수 $a$, $b$ 인 베타분포라 하고 $\mathrm{Beta}(a,b)$ 로 쓴다.[^1]

$$
f(p)=\frac{p^{a-1}(1-p)^{b-1}}{\mathrm B(a,b)},\qquad \mathrm B(a,b)=\int_0^1t^{a-1}(1-t)^{b-1}\thinspace dt=\frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)}
$$

$\mathrm B$ 를 베타 함수(beta function)라 한다. $a=b=1$ 이면 균등분포다.

# 성질

## 평균과 분산

**정리.** $P\sim\mathrm{Beta}(a,b)$ 이면 다음이 성립한다.

$$
\mathbb E\lbrack P\rbrack=\frac{a}{a+b},\qquad \mathrm{Var}(P)=\frac{ab}{(a+b)^2(a+b+1)}
$$

증명의 요지. $\mathbb E\lbrack P^r\rbrack=\mathrm B(a+r,b)/\mathrm B(a,b)$ 이고, 감마 함수의 식과 $\Gamma(x+1)=x\Gamma(x)$ 로 정리한다.

## 이항 관측의 켤레성

**정리.** 사전분포가 $\mathrm{Beta}(a,b)$ 이고 $p$ 가 주어졌을 때 성공 횟수 $S$ 가 [이항분포](binomial-distribution.md) $\mathrm{B}(n,p)$ 를 따르면, $S=s$ 를 관측한 뒤의 사후분포는 $\mathrm{Beta}(a+s,\thinspace b+n-s)$ 다.

증명의 요지. 사후밀도는 $p^{a-1}(1-p)^{b-1}\cdot p^s(1-p)^{n-s}$ 에 비례하고, 이것은 모수가 $a+s$, $b+n-s$ 인 베타분포의 밀도 꼴이다.

사후분포가 사전분포와 같은 족에 남으므로 이런 사전분포를 켤레 사전분포(conjugate prior)라 한다.

## 감마분포의 비

$X\sim\Gamma(a,\lambda)$ 와 $Y\sim\Gamma(b,\lambda)$ 가 독립이면 $X/(X+Y)\sim\mathrm{Beta}(a,b)$ 이고 $X+Y$ 와 독립이다. 이것이 [감마분포](gamma-distribution.md)의 비와 베타분포 정리다. 베타분포의 표본은 감마분포의 표본 둘로 만든다.

## 균등분포의 순서통계량

$U_1,\dots,U_n$ 이 독립이고 모두 $\lbrack 0,1\rbrack$ 의 균등분포를 따르면 $k$ 번째로 작은 값은 $\mathrm{Beta}(k,\thinspace n-k+1)$ 을 따른다. 균등분포의 [순서통계량](order-statistics.md) 밀도가 이 꼴이다.

# 활용

- [Laplace 계승 규칙](rule-of-succession.md)은 균등 사전분포 $\mathrm{Beta}(1,1)$ 에서 $n$ 번 가운데 $s$ 번 성공한 뒤의 사후 평균 $(s+1)/(n+2)$ 이다.
- [Dirichlet 분포](dirichlet-distribution.md)는 확률 벡터 위의 분포이고, 성분이 둘이면 베타분포다.
- [Bayes 추론](bayesian-inference.md)에서 성공 확률에 대한 사전분포로 베타분포를 쓰면 사후분포를 적분 없이 모수의 덧셈으로 구한다.

[^1]: G. Casella, R. L. Berger, *Statistical Inference*, 2nd ed., Duxbury (2002), §3.3. 베타분포의 밀도, 적률, 감마 함수와의 관계.

# 연관 문서

## 선수지식

- [감마분포](gamma-distribution.md)

## 더 알아보기

- [순서통계량](order-statistics.md)
- [Pólya 항아리](polya-urn.md)

#probability #statistics
