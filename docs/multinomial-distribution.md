# 다항분포

# 개요

**다항분포(multinomial distribution)** 는 결과가 여러 가지인 시행을 서로 독립으로 정해진 횟수만큼 했을 때, 결과마다 나온 횟수를 한꺼번에 묶은 분포다. 주사위를 $6$ 번 던져 여섯 면이 한 번씩 나올 확률을 구하려면, 여섯 면을 여섯 자리에 늘어놓는 방법이 몇 가지인지 세어야 한다. 다항분포는 그 방법의 수 $6!=720$ 에 한 배열의 확률 $6^{-6}$ 을 곱해 $720/46656$ 을 얻는 계산을, 결과의 가짓수와 확률이 무엇이든 같은 식으로 한다.

# 직관

상자에 빨간 공이 $3$ 개, 파란 공이 $2$ 개, 초록 공이 $1$ 개 있다. 공을 하나 꺼내 색을 보고 다시 넣기를 $4$ 번 하면, 한 번 꺼낼 때 빨강, 파랑, 초록이 나올 확률은 $\frac12$, $\frac13$, $\frac16$ 이다. 빨강이 $2$ 번, 파랑과 초록이 $1$ 번씩 나올 확률을 구한다.

꺼낸 순서가 빨강, 빨강, 파랑, 초록일 확률은 꺼내기가 서로 독립이므로 $\frac12\cdot\frac12\cdot\frac13\cdot\frac16=\frac1{72}$ 이다. 순서를 바꿔도 곱하는 수는 같으므로 확률은 똑같이 $\frac1{72}$ 이다.

네 자리에 빨강 둘, 파랑 하나, 초록 하나를 놓는 방법은 $\frac{4!}{2!\thinspace 1!\thinspace 1!}=12$ 가지이고 이 경우들은 서로 겹치지 않는다. 그러므로 확률은 $12\cdot\frac1{72}=\frac16$ 이다.

색이 둘뿐이면 이 계산은 [이항분포](binomial-distribution.md)의 계산과 같다. 횟수의 모든 조합에 대해 확률을 더하면 $\left(\frac12+\frac13+\frac16\right)^4=1$ 을 다항정리(multinomial theorem)로 펼친 것이 된다.

# 정의

$n$ 이 양의 정수이고 $p=(p_1,\dots,p_m)$ 이 $p_j\ge 0$, $p_1+\cdots+p_m=1$ 을 만족할 때, 음이 아닌 정수 벡터에 값을 갖는 [확률변수](random-variables.md) $X=(X_1,\dots,X_m)$ 가 다음을 만족하면 $X$ 는 모수 $n$, $p$ 인 다항분포를 따른다고 하고 $X\sim\mathrm{Mult}(n,p)$ 로 쓴다.

$$
P(X_1=k_1,\dots,X_m=k_m)=\frac{n!}{k_1!\cdots k_m!}\thinspace p_1^{k_1}\cdots p_m^{k_m},\qquad k_1+\cdots+k_m=n
$$

앞의 계수는 [셈의 기본 원리](counting-principles.md)의 다항계수(multinomial coefficient)다. $X_j$ 는 $n$ 번의 시행 가운데 결과 $j$ 가 나온 횟수다.

$m=2$ 이면 $X_1\sim\mathrm B(n,p_1)$ 이고 $X_2=n-X_1$ 이다. $n=1$ 인 경우를 **범주형 분포(categorical distribution)** 라 한다. 범주형 확률변수는 한 좌표만 $1$ 이고 나머지가 $0$ 인 지시벡터이고, 독립인 범주형 확률변수 $n$ 개의 합이 $\mathrm{Mult}(n,p)$ 를 따른다.[^1]

# 성질

## 주변분포와 칸 합치기

**정리.** $X\sim\mathrm{Mult}(n,p)$ 이면 $X_j\sim\mathrm B(n,p_j)$ 다. 결과를 몇 묶음으로 합쳐 묶음마다 횟수를 더하면, 그 횟수 벡터는 묶음마다 확률을 더한 다항분포를 따른다.

증명의 요지. 시행마다 결과 $j$ 가 나오는지만 보면 성공 확률이 $p_j$ 인 독립 시행 $n$ 번이다. 묶음도 같은 방식으로 한 시행의 결과를 묶음 이름으로 바꾼 것이다.

## 평균과 공분산

**정리.** $X\sim\mathrm{Mult}(n,p)$ 이면 다음이 성립한다.

$$
\mathbb E\lbrack X_j\rbrack=np_j,\qquad\mathrm{Var}(X_j)=np_j(1-p_j),\qquad\mathrm{Cov}(X_i,X_j)=-np_ip_j\quad(i\ne j)
$$

증명의 요지. $t$ 번째 시행의 결과가 $j$ 이면 $1$, 아니면 $0$ 인 확률변수를 $I_{tj}$ 라 하면 $X_j=\sum_tI_{tj}$ 다. 한 시행에서 결과는 하나뿐이므로 $i\ne j$ 이면 $I_{ti}I_{tj}=0$ 이고, $\mathrm{Cov}(I_{ti},I_{tj})=-p_ip_j$ 다. 서로 다른 시행의 지시변수는 독립이므로 [공분산](covariance.md)이 시행마다 더해진다.

횟수의 합이 $n$ 으로 고정되어 있어 한 결과가 많이 나오면 다른 결과가 적게 나온다. 공분산이 음수인 것이 이것이다. 공분산행렬은 $n\bigl(\mathrm{diag}(p)-pp^{\top}\bigr)$ 이고, 모든 좌표의 합이 상수이므로 계수가 $m-1$ 이하다.

## 조건부분포

**정리.** $X\sim\mathrm{Mult}(n,p)$ 이고 $p_m\lt 1$ 일 때, $X_m=k$ 가 주어지면 $(X_1,\dots,X_{m-1})$ 은 $\mathrm{Mult}\bigl(n-k,\thinspace(p_1,\dots,p_{m-1})/(1-p_m)\bigr)$ 을 따른다.

증명의 요지. 결과 $m$ 이 나온 $k$ 번을 빼면 남은 $n-k$ 번의 시행은 결과가 $m$ 이 아니라는 조건 아래 독립이고, 그 조건 아래 결과 $j$ 의 확률은 $p_j/(1-p_m)$ 이다.

## Poisson 표현

**정리.** $N_1,\dots,N_m$ 이 독립이고 $N_j$ 가 평균 $\lambda p_j$ 인 [Poisson 분포](poisson-distribution.md)를 따르면, $N_1+\cdots+N_m=n$ 이 주어졌을 때 $(N_1,\dots,N_m)$ 은 $\mathrm{Mult}(n,p)$ 를 따른다.[^1]

증명의 요지. $N_1+\cdots+N_m$ 은 평균 $\lambda$ 인 Poisson 분포를 따른다. 조건부확률은 다음과 같다.

$$
\frac{\prod_je^{-\lambda p_j}(\lambda p_j)^{k_j}/k_j!}{e^{-\lambda}\lambda^n/n!}=\frac{n!}{k_1!\cdots k_m!}\thinspace p_1^{k_1}\cdots p_m^{k_m}
$$

시행 횟수를 Poisson 분포로 무작위하게 두면 칸마다의 횟수가 독립이 된다. 이것을 Poisson화(Poissonization)라 하고, 칸 사이의 음의 상관을 없애 계산을 칸별로 나누는 데 쓴다.

## Pearson 카이제곱 통계량의 극한

**정리.** $p_j\gt 0$ 이고 $X\sim\mathrm{Mult}(n,p)$ 일 때, $n\to\infty$ 이면

$$
Q_n=\sum_{j=1}^m\frac{(X_j-np_j)^2}{np_j}
$$

의 분포가 자유도 $m-1$ 인 [카이제곱 분포](chi-squared-distribution.md)로 수렴한다.[^2]

증명의 요지. $X$ 는 독립인 범주형 지시벡터 $n$ 개의 합이므로 다변량 [중심극한정리](central-limit-theorem.md)에 의해 $(X-np)/\sqrt n$ 의 분포가 평균 $0$, 공분산 $\mathrm{diag}(p)-pp^{\top}$ 인 다변량 [정규분포](normal-distribution.md)로 수렴한다. 좌표 $j$ 를 $\sqrt{p_j}$ 로 나누면 공분산이 $I-uu^{\top}$ 가 된다. 여기서 $u=(\sqrt{p_1},\dots,\sqrt{p_m})$ 은 길이가 $1$ 이다. $I-uu^{\top}$ 는 $u$ 에 수직인 $m-1$ 차원 부분공간으로의 정사영이므로, 극한 벡터의 길이의 제곱은 독립인 표준정규 확률변수 $m-1$ 개의 제곱합이다.

$Q_n$ 은 관측한 횟수 $X_j$ 와 기대한 횟수 $np_j$ 의 차이를 칸마다 재어 더한 값이다. 이 극한으로 관측 횟수가 주어진 확률 $p$ 와 맞는지 검정하는 것이 Pearson 카이제곱 검정(Pearson's chi-squared test)이다.

# 활용

- [Dirichlet 분포](dirichlet-distribution.md)는 다항분포의 확률 벡터 $p$ 에 대한 켤레사전분포다. 사전분포가 $\mathrm{Dir}(\alpha)$ 이고 횟수 $k$ 를 관측하면 사후분포는 $\mathrm{Dir}(\alpha+k)$ 다.
- [붓스트랩](bootstrap.md)에서 표본점 $n$ 개를 복원추출로 $n$ 번 다시 뽑으면, 표본점마다 뽑힌 횟수의 벡터는 $\mathrm{Mult}\bigl(n,(1/n,\dots,1/n)\bigr)$ 을 따른다.
- [지수족](exponential-families.md)에서 $n$ 을 고정한 다항분포는 충분통계량이 횟수 벡터 $X$ 이고 자연모수가 $\log(p_j/p_m)$ 인 지수족이다.
- [일반화선형모형](generalized-linear-models.md)에서 반응을 범주형 분포로 두면 정준연결의 역함수가 소프트맥스(softmax) 함수이고, 다부류 분류의 로지스틱 회귀가 이 모형이다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. I, 3rd ed., Wiley (1968), §VI.9. 다항분포의 정의와 Poisson 분포와의 관계.
[^2]: A. W. van der Vaart, *Asymptotic Statistics*, Cambridge University Press (1998), §17.1. Pearson 카이제곱 통계량의 극한분포.

# 연관 문서

## 선수지식

- [이항분포](binomial-distribution.md)

## 더 알아보기

- [Dirichlet 분포](dirichlet-distribution.md)

#probability #statistics #combinatorics
