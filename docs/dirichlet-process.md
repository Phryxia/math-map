# Dirichlet 과정

# 개요

**Dirichlet 과정(Dirichlet process)** 은 무작위로 뽑은 확률분포의 분포, 곧 확률분포 위에 놓는 사전분포다. 손님들이 몇 개의 무리로 나뉘는지 모르는 채 무리를 나누어야 할 때, 무리의 수를 미리 정한 [Dirichlet 분포](dirichlet-distribution.md)로는 사전분포를 세울 수 없다. Dirichlet 과정은 공간을 어떻게 유한 개의 칸으로 나누든 칸마다의 확률이 Dirichlet 분포를 따르게 하여, 무리의 수를 정하지 않고 [Bayes 추론](bayesian-inference.md)을 한다.

# 직관

실수 위의 분포 $P$ 를 모른다. 실수를 세 칸 $A_1,A_2,A_3$ 으로 나누면 $(P(A_1),P(A_2),P(A_3))$ 은 확률 벡터이므로 Dirichlet 분포를 사전분포로 둘 수 있다. 문제는 칸을 다르게 나누었을 때 두 사전분포가 서로 맞아야 한다는 것이다.

Dirichlet 분포는 좌표 몇 개를 더해 합치면 매개변수도 더해진 Dirichlet 분포가 된다. 그래서 각 집합 $A$ 에 매개변수 $\alpha H(A)$ 를 주면 칸을 합칠 때 매개변수가 저절로 맞는다. 여기서 $H$ 는 고정한 확률분포이고 $\alpha\gt 0$ 이다.

이 분포에서 값을 하나씩 뽑는 규칙은 [Pólya 항아리](polya-urn.md)와 같다. 첫 값은 $H$ 에서 뽑는다. $n$ 번째 값은 확률 $\alpha/(\alpha+n-1)$ 로 $H$ 에서 새로 뽑고, 나머지 확률로 앞서 뽑은 $n-1$ 개 가운데 하나를 고르게 골라 그 값을 다시 쓴다.

같은 값이 되풀이되므로 뽑은 값들이 몇 개의 무리로 나뉜다. 무리의 수는 미리 정하지 않았고 표본이 늘면 천천히 늘어난다.

# 정의

$H$ 가 가측공간 $\Omega$ 위의 확률측도이고 $\alpha\gt 0$ 이다. 무작위 확률측도 $P$ 가 $\Omega$ 의 모든 유한 가측 분할 $(A_1,\dots,A_m)$ 에 대해 다음을 만족하면 $P$ 는 기저측도 $H$, 집중 모수(concentration parameter) $\alpha$ 인 Dirichlet 과정을 따른다고 하고 $P\sim\mathrm{DP}(\alpha,H)$ 로 쓴다.

$$
\bigl(P(A_1),\dots,P(A_m)\bigr)\sim\mathrm{Dir}\bigl(\alpha H(A_1),\dots,\alpha H(A_m)\bigr)
$$

분할을 바꾸어도 이 분포들이 서로 맞으므로, [Kolmogorov 확장정리](kolmogorov-extension.md)를 써서 이런 $P$ 가 존재함을 보인다.[^1]

# 성질

## 평균과 분산

**정리.** $P\sim\mathrm{DP}(\alpha,H)$ 이면 가측집합 $A$ 마다 다음이 성립한다.

$$
\mathbb E\lbrack P(A)\rbrack=H(A),\qquad\mathrm{Var}\bigl(P(A)\bigr)=\frac{H(A)\bigl(1-H(A)\bigr)}{\alpha+1}
$$

증명의 요지. 분할 $(A,A^c)$ 에서 $P(A)\sim\mathrm{Beta}\bigl(\alpha H(A),\thinspace\alpha(1-H(A))\bigr)$ 이고, [베타분포](beta-distribution.md)의 평균과 분산이다.

$H$ 는 $P$ 의 평균이고, $\alpha$ 가 클수록 $P$ 가 $H$ 근처에 모인다.

## 켤레성

**정리.** $P\sim\mathrm{DP}(\alpha,H)$ 이고 $P$ 가 주어지면 $X_1,\dots,X_n$ 이 독립이고 $P$ 를 따른다고 하자. $X_1,\dots,X_n$ 이 주어졌을 때 $P$ 의 사후분포는 다음이다.[^1]

$$
\mathrm{DP}\left(\alpha+n,\thinspace\frac{\alpha H+\sum_{i=1}^n\delta_{X_i}}{\alpha+n}\right)
$$

증명의 요지. 분할 $(A_1,\dots,A_m)$ 마다 칸에 떨어진 표본의 개수는 $P$ 가 주어지면 [다항분포](multinomial-distribution.md)를 따르고, Dirichlet 분포의 켤레성으로 칸 $j$ 의 매개변수에 그 개수가 더해진다. 칸의 개수가 아니라 표본 자체로 조건을 건 사후분포도 같은 꼴임은 Ferguson 이 보였다.

$\delta_x$ 는 점 $x$ 에 확률 $1$ 을 주는 측도다. 사후분포의 평균은 사전 평균 $H$ 와 경험분포 $\frac1n\sum_i\delta_{X_i}$ 를 $\alpha:n$ 으로 섞은 것이다.

## 예측 규칙

**정리(Blackwell–MacQueen 예측 규칙).** 위의 $X_1,X_2,\dots$ 에서 $X_1\sim H$ 이고, 다음이 성립한다.[^2]

$$
X_{n+1}\mid X_1,\dots,X_n\ \sim\ \frac{\alpha H+\sum_{i=1}^n\delta_{X_i}}{\alpha+n}
$$

증명의 요지. 켤레성 정리의 사후분포 아래 $X_{n+1}$ 의 분포는 사후 평균이다.

이것이 직관 절의 추출 규칙이다. 앞의 값과 같은 값을 다시 쓸 확률이 양수이므로 $X_1,X_2,\dots$ 는 교환가능하지만 독립이 아니다.

## 막대 꺾기 표현과 이산성

**정리(Sethuraman 의 막대 꺾기 표현, stick-breaking representation).** $V_1,V_2,\dots$ 가 독립이고 $\mathrm{Beta}(1,\alpha)$ 를 따르고, $\theta_1,\theta_2,\dots$ 가 이들과 독립이고 $H$ 를 따른다. $w_k=V_k\prod_{j=1}^{k-1}(1-V_j)$ 라 하면 다음 $P$ 는 $\mathrm{DP}(\alpha,H)$ 를 따른다.[^3]

$$
P=\sum_{k=1}^\infty w_k\thinspace\delta_{\theta_k}
$$

길이 $1$ 인 막대에서 $V_1$ 비율만큼 꺾어 $w_1$ 로 두고, 남은 막대에서 다시 $V_2$ 비율만큼 꺾는 것을 되풀이한다. 그러므로 $\mathrm{DP}(\alpha,H)$ 의 표본은 $H$ 에 원자(atom), 곧 양의 확률을 갖는 한 점이 없어도 거의 확실하게 셀 수 있는 개수의 점에만 확률을 주는 이산 분포다.

## 무리의 수

**정리.** 예측 규칙으로 뽑은 $X_1,\dots,X_n$ 가운데 서로 다른 값의 개수를 $K_n$ 이라 하고 $H$ 에 원자가 없다고 하면 다음이 성립한다.

$$
\mathbb E\lbrack K_n\rbrack=\sum_{i=1}^n\frac{\alpha}{\alpha+i-1}\approx\alpha\log n
$$

증명의 요지. $i$ 번째 값이 새 값일 확률이 $\alpha/(\alpha+i-1)$ 이고, 기댓값의 선형성으로 더한다.

뽑은 값들이 같은 값끼리 나뉘는 무작위 분할을 중국집 과정(Chinese restaurant process)이라 한다. 손님 $n+1$ 은 손님이 $n_j$ 명 앉은 식탁 $j$ 에 확률 $n_j/(\alpha+n)$ 로 앉고, 새 식탁에 확률 $\alpha/(\alpha+n)$ 로 앉는다.

# 활용

- Dirichlet 과정 혼합 모형(Dirichlet process mixture model)은 자료점마다 $P$ 에서 뽑은 모수로 정규분포 같은 성분을 정하고, 무리의 수를 정하지 않고 군집을 나눈다. 무리의 수의 사후분포가 자료에서 정해진다.
- 계층 Dirichlet 과정(hierarchical Dirichlet process)은 문서마다의 Dirichlet 과정이 공통의 Dirichlet 과정을 기저측도로 쓰게 하여, Dirichlet 분포로 세운 주제 모형에서 주제의 수를 정하지 않는다.
- [de Finetti 정리](de-finetti-theorem.md)의 교환가능한 무작위 분할 판인 Kingman 표현정리에서 중국집 과정은 가장 기본적인 예다.

[^1]: T. S. Ferguson, "A Bayesian analysis of some nonparametric problems", *Annals of Statistics* 1 (1973), 209–230.
[^2]: D. Blackwell, J. B. MacQueen, "Ferguson distributions via Pólya urn schemes", *Annals of Statistics* 1 (1973), 353–355.
[^3]: J. Sethuraman, "A constructive definition of Dirichlet priors", *Statistica Sinica* 4 (1994), 639–650.

# 연관 문서

## 선수지식

- [Dirichlet 분포](dirichlet-distribution.md)
- [Pólya 항아리](polya-urn.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning
