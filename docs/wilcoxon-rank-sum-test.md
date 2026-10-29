# Wilcoxon 순위합 검정

# 개요

**Wilcoxon 순위합 검정(Wilcoxon rank-sum test)** 은 두 집단의 값을 한데 모아 크기순으로 늘어놓고, 한 집단이 받은 순위의 합으로 두 집단의 분포가 같은지를 판정하는 가설검정이다. 새 진통제를 먹은 환자 $3$ 명과 가짜 약을 먹은 환자 $4$ 명의 통증이 멎은 시간을 비교할 때, 시간이 정규분포를 따르는지 알 수 없고 환자 수도 적다. 순위만 쓰면 두 분포가 같다는 가설 아래 순위의 분포가 원래 분포와 관계없이 경우의 수로 정해지므로, 분포에 대한 가정 없이 p-값을 정확히 계산한다.

# 직관

진통제 집단의 시간이 $7$, $9$, $12$ 시간이고 가짜 약 집단이 $2$, $3$, $5$, $8$ 시간이다. 일곱 값을 작은 것부터 늘어놓으면 진통제 집단은 $4$, $6$, $7$ 번째이고 순위의 합은 $17$ 이다.

두 집단의 분포가 같다면 일곱 값은 한 분포에서 독립으로 나온 것이고, 어느 세 순위가 진통제 집단에 가든 확률이 같다. $1$ 부터 $7$ 까지에서 세 순위를 고르는 방법은 $\binom73=35$ 가지다.

합이 $17$ 이상인 경우는 $\lbrace 4,6,7\rbrace$ 과 $\lbrace 5,6,7\rbrace$ 두 가지뿐이다. 그래서 진통제 쪽 순위의 합이 이만큼 클 확률은 $2/35\approx 0.057$ 이고, 유의수준 $0.05$ 의 한쪽 검정에서 두 분포가 같다는 가설을 기각하지 않는다.

이 계산에 시간의 분포는 한 번도 쓰이지 않았다. 값을 순위로 바꾸면 남는 것은 어느 집단이 어느 자리를 받았는지뿐이다.

# 정의

$X_1,\dots,X_m$ 과 $Y_1,\dots,Y_n$ 이 서로 독립이고, $X_i$ 는 분포함수 $F$, $Y_j$ 는 분포함수 $G$ 를 따르며 둘 다 연속이다. $N=m+n$ 개의 값을 함께 늘어놓은 [순서통계량](order-statistics.md)에서 $X_i$ 의 순위를 $R_i$ 라 하고, 다음을 Wilcoxon 순위합 통계량이라 한다.

$$
W=R_1+\cdots+R_m
$$

귀무가설 $H_0:F=G$ 아래 $W$ 의 분포로 p-값을 계산한다. $X_i\gt Y_j$ 인 쌍 $(i,j)$ 의 개수 $U$ 를 **Mann–Whitney U 통계량(Mann–Whitney U statistic)** 이라 하고, $U=W-m(m+1)/2$ 이다.

# 성질

## 분포 무관성

**정리.** $H_0$ 아래 $(R_1,\dots,R_m)$ 이 이루는 집합은 $\lbrace 1,\dots,N\rbrace$ 의 $m$ 원소 부분집합 $\binom Nm$ 개 가운데 하나를 고르게 고른 것이다. 따라서 $W$ 의 분포는 $F$ 와 관계없다.

증명의 요지. $H_0$ 아래 $N$ 개의 값은 독립이고 같은 연속 분포를 따르므로 같은 값이 나올 확률이 $0$ 이고, $N!$ 가지 순서가 모두 같은 확률로 나온다.

## 평균과 분산

**정리.** $H_0$ 아래 다음이 성립한다.

$$
\mathbb E\lbrack W\rbrack=\frac{m(N+1)}2,\qquad\mathrm{Var}(W)=\frac{mn(N+1)}{12}
$$

증명의 요지. 각 $R_i$ 는 $\lbrace 1,\dots,N\rbrace$ 위의 균등분포를 따르므로 평균 $(N+1)/2$, 분산 $(N^2-1)/12$ 이다. 서로 다른 $R_i$, $R_k$ 는 같은 값을 가질 수 없어 공분산이 $-(N+1)/12$ 이다. [초기하분포](hypergeometric-distribution.md)의 유한 모집단 수정과 같은 계산이다.

$m$ 과 $n$ 이 함께 커지면 $(W-\mathbb E\lbrack W\rbrack)/\sqrt{\mathrm{Var}(W)}$ 의 분포가 표준 [정규분포](normal-distribution.md)로 수렴하고, 표본이 크면 이 근사로 p-값을 계산한다.[^1]

## U 통계량과 우위 확률

$U/(mn)$ 은 $X_i\gt Y_j$ 인 쌍의 비율이므로 $\mathbb E\lbrack U\rbrack/(mn)=P(X\gt Y)$ 다. $H_0$ 아래 이 값은 $\frac12$ 이다. 그러므로 이 검정은 평균이 같은지가 아니라 한 집단의 값이 다른 집단의 값보다 클 확률이 $\frac12$ 인지를 본다.

## Kruskal–Wallis 검정

집단이 $k$ 개이고 집단 $i$ 의 크기가 $n_i$, 순위의 합이 $S_i$ 이면 다음 통계량을 쓴다. 이것을 Kruskal–Wallis 검정(Kruskal–Wallis test)이라 한다.

$$
H=\frac{12}{N(N+1)}\sum_{i=1}^k\frac{S_i^2}{n_i}-3(N+1)
$$

$H$ 는 [분산분석](analysis-of-variance.md)의 집단 사이 제곱합을 순위에 대해 계산하고 순위 전체의 분산으로 나눈 것이다. $H_0$ 아래 표본이 크면 $H$ 의 분포가 자유도 $k-1$ 인 [카이제곱 분포](chi-squared-distribution.md)에 가깝다. $k=2$ 이면 $H$ 는 표준화한 $W$ 의 제곱이다.

## 효율

자료가 실제로 정규분포를 따를 때 두 표본 t 검정에 대한 이 검정의 점근 상대효율(asymptotic relative efficiency)은 $3/\pi\approx 0.955$ 이고, 모든 연속 분포에서 $0.864$ 이상이다.[^2] 꼬리가 두꺼운 분포에서는 $1$ 보다 크다.

# 활용

- 표본이 작거나 이상값이 있는 임상 자료에서 두 처치를 비교하는 [가설검정](hypothesis-testing.md)으로 t 검정 대신 쓴다.
- 이진 분류기의 ROC 곡선(receiver operating characteristic curve) 아래 넓이는 양성 표본의 점수가 음성 표본의 점수보다 클 확률이고, 두 집단의 점수로 만든 $U/(mn)$ 과 같다.

[^1]: H. B. Mann, D. R. Whitney, "On a test of whether one of two random variables is stochastically larger than the other", *Annals of Mathematical Statistics* 18 (1947), 50–60.
[^2]: J. L. Hodges, E. L. Lehmann, "The efficiency of some nonparametric competitors of the t-test", *Annals of Mathematical Statistics* 27 (1956), 324–335.

# 연관 문서

## 선수지식

- [가설검정](hypothesis-testing.md)
- [순서통계량](order-statistics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #combinatorics
