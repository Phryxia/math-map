# 분산분석

# 개요

**분산분석(analysis of variance, ANOVA)** 은 여러 집단의 평균이 모두 같은지를, 자료의 흩어짐을 집단 사이의 몫과 집단 안의 몫으로 나누어 비교하는 가설검정이다. 비료 세 가지를 밭 세 곳씩에 뿌려 수확량을 재었을 때, 비료에 따라 평균 수확량이 다른지 아니면 밭마다의 차이로 그 정도는 나오는지를 정해야 한다. 분산분석은 집단 평균끼리의 차이가 집단 안의 흩어짐에 비해 얼마나 큰지를 비로 재고, 그 비를 [F 분포](f-distribution.md)와 비교한다.

# 직관

비료 A, B, C 를 뿌린 밭의 수확량이 각각 $4,5,6$ 과 $6,7,8$ 과 $8,9,10$ 이다. 집단 평균은 $5$, $7$, $9$ 이고 전체 평균은 $7$ 이다.

수확량이 전체 평균에서 벗어난 정도를 제곱해 더하면 $30$ 이다. 이것을 둘로 나눈다. 집단 평균이 전체 평균에서 벗어난 값 $-2$, $0$, $2$ 를 밭마다 하나씩 세면 $3\cdot(2^2+0^2+2^2)=24$ 다. 각 값이 자기 집단 평균에서 벗어난 몫은 집단마다 $1+0+1=2$ 이므로 $6$ 이다. $24+6=30$ 으로 두 몫이 전체를 정확히 나눈다.

비료가 수확량에 영향이 없다면 집단 평균들도 밭마다의 차이만큼만 흩어질 것이다. 두 몫을 각각 자유도 $3-1=2$ 와 $9-3=6$ 으로 나누면 $12$ 와 $1$ 이고, 그 비는 $12$ 다.

평균이 모두 같고 수확량이 정규분포를 따르면 이 비는 자유도 $(2,6)$ 인 F 분포를 따르고, $12$ 이상이 나올 확률은 $0.008$ 이다. 그래서 유의수준 $0.05$ 에서 세 비료의 평균 수확량이 모두 같다는 가설을 기각한다.

# 정의

집단 $k$ 개에서 집단 $i$ 의 관측 $Y_{ij}$ ($j=1,\dots,n_i$) 를 얻고 $n=n_1+\cdots+n_k$ 이다. 모형은 $Y_{ij}=\mu_i+\varepsilon_{ij}$ 이고 $\varepsilon_{ij}$ 는 서로 독립이며 $N(0,\sigma^2)$ 를 따른다. 귀무가설은 $H_0:\mu_1=\cdots=\mu_k$ 이다.

집단 평균을 $\bar Y_i$, 전체 평균을 $\bar Y$ 라 하고 세 제곱합을 정한다.

$$
\mathrm{SST}=\sum_{i,j}(Y_{ij}-\bar Y)^2,\qquad\mathrm{SSB}=\sum_in_i(\bar Y_i-\bar Y)^2,\qquad\mathrm{SSW}=\sum_{i,j}(Y_{ij}-\bar Y_i)^2
$$

$\mathrm{SST}$ 는 전체 제곱합(total sum of squares), $\mathrm{SSB}$ 는 집단 사이 제곱합(between-group sum of squares), $\mathrm{SSW}$ 는 집단 안 제곱합(within-group sum of squares)이다. 검정통계량은 다음이고, 이것이 $F(k-1,n-k)$ 의 상위 $\alpha$ 분위수보다 크면 $H_0$ 을 기각한다. 이 절차를 일원 분산분석(one-way ANOVA)이라 한다.

$$
F=\frac{\mathrm{SSB}/(k-1)}{\mathrm{SSW}/(n-k)}
$$

# 성질

## 제곱합의 분해

**정리.** $\mathrm{SST}=\mathrm{SSB}+\mathrm{SSW}$ 이다.

증명의 요지. $Y_{ij}-\bar Y=(Y_{ij}-\bar Y_i)+(\bar Y_i-\bar Y)$ 를 제곱해 더하면 교차항이 $2\sum_i(\bar Y_i-\bar Y)\sum_j(Y_{ij}-\bar Y_i)$ 이고, 안쪽 합이 $0$ 이다.

자료를 $\mathbb R^n$ 의 벡터로 보면 이 분해는 [선형회귀](linear-regression.md)의 정사영이다. 집단을 나타내는 지시변수들이 펼치는 $k$ 차원 부분공간으로의 사영이 집단 평균 벡터이고, 상수 벡터가 펼치는 $1$ 차원 부분공간으로의 사영이 전체 평균 벡터다. $\mathrm{SSB}$ 와 $\mathrm{SSW}$ 는 서로 직교하는 두 성분의 길이의 제곱이고, 분해는 Pythagoras 정리다.

## 귀무가설 아래의 분포

**정리.** $H_0$ 아래 $\mathrm{SSB}/\sigma^2\sim\chi^2_{k-1}$ 과 $\mathrm{SSW}/\sigma^2\sim\chi^2_{n-k}$ 는 독립이고, 따라서 $F\sim F(k-1,n-k)$ 이다.[^1]

증명의 요지. 오차 벡터 $\varepsilon/\sigma$ 는 독립 표준정규 좌표를 갖고, 직교 사영으로 나눈 성분들은 독립인 표준정규 좌표를 사영의 차원만큼 갖는다. $H_0$ 아래 $\mathrm{SSB}$ 는 차원 $k-1$ 인 부분공간, $\mathrm{SSW}$ 는 차원 $n-k$ 인 부분공간의 성분이다. 이것은 [카이제곱 분포](chi-squared-distribution.md)의 표본분산 정리와 같은 회전 논증이다.

## 평균제곱의 기댓값

$\mathbb E\lbrack\mathrm{SSW}/(n-k)\rbrack=\sigma^2$ 은 $H_0$ 과 관계없이 성립한다. 반면 $\mathbb E\lbrack\mathrm{SSB}/(k-1)\rbrack=\sigma^2+\frac1{k-1}\sum_in_i(\mu_i-\bar\mu)^2$ 이고, $\bar\mu=\sum_in_i\mu_i/n$ 이다. 평균들이 다르면 분자가 커지므로 $F$ 의 큰 값에서 기각한다.

## 두 집단의 경우

$k=2$ 이면 $F$ 는 두 표본 t 통계량의 제곱이고, $F(1,n-2)$ 는 자유도 $n-2$ 인 [t 분포](t-distribution.md)를 따르는 확률변수의 제곱의 분포다. 일원 분산분석은 등분산을 가정한 두 표본 t 검정을 집단 $k$ 개로 늘린 것과 같은 결론을 준다.

# 활용

- 실험계획법에서 요인이 둘이면 이원 분산분석(two-way ANOVA)으로 제곱합을 두 요인의 주효과, 교호작용, 오차로 나누고 각 효과를 F 비로 검정한다.
- 귀무가설을 기각한 뒤 어느 집단끼리 다른지 알려면 집단 쌍마다 검정을 하므로 [거짓 발견률](false-discovery-rate.md)이나 검정 횟수로 나눈 유의수준으로 여러 번 검정한 오류를 조절한다.
- 정규성이 의심되면 순위로 바꾼 자료에 같은 분해를 하는 Kruskal–Wallis 검정을 쓴다. 이 검정은 [Wilcoxon 순위합 검정](wilcoxon-rank-sum-test.md)을 집단 $k$ 개로 늘린 것이다.

[^1]: G. Casella, R. L. Berger, *Statistical Inference*, 2nd ed., Duxbury (2002), §11.2. 일원 분산분석, 제곱합의 분해와 F 검정.

# 연관 문서

## 선수지식

- [F 분포](f-distribution.md)
- [선형회귀](linear-regression.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #linear_algebra
