# F 분포

# 개요

**F 분포(F distribution)** 는 서로 독립인 카이제곱 확률변수 둘을 각자의 자유도로 나눈 뒤 그 비를 취한 값의 분포다. 두 공장에서 만든 나사의 길이를 $10$ 개, $13$ 개 재었더니 표본분산이 $0.04$ 와 $0.02$ 였다면, 두 공장의 길이 산포가 실제로 다른지 정해야 한다. F 분포는 두 정규 표본의 표본분산의 비가 따르는 분포이고, 관측한 비 $2$ 가 산포가 같을 때 나올 만한 값인지를 이 분포의 꼬리 확률로 판정한다.

# 직관

[카이제곱 분포](chi-squared-distribution.md)의 표본분산 정리에 따르면 정규 표본 $n$ 개의 표본분산 $s^2$ 에 대해 $(n-1)s^2/\sigma^2$ 이 자유도 $n-1$ 인 카이제곱 분포를 따른다. 공장 A 의 표본분산을 $s_A^2$, 공장 B 의 것을 $s_B^2$ 이라 하면 다음 두 값은 독립이다.

$$
\frac{9s_A^2}{\sigma_A^2}\sim\chi^2_9,\qquad\frac{12s_B^2}{\sigma_B^2}\sim\chi^2_{12}
$$

두 공장의 모분산이 같아 $\sigma_A^2=\sigma_B^2$ 이면 각각을 자유도로 나누어 비를 취할 때 모르는 $\sigma^2$ 이 약분된다. 그래서 $s_A^2/s_B^2$ 의 분포는 $\sigma^2$ 과 관계없이 정해지고, 이것이 자유도 $(9,12)$ 인 F 분포다.

이 분포에서 $2$ 이상이 나올 확률은 약 $0.13$ 이다. 비가 $2$ 인 것은 산포가 같아도 드물지 않으므로 유의수준 $0.05$ 에서 같다는 가설을 기각하지 않는다. 기각하려면 비가 약 $2.80$ 을 넘어야 한다.

# 정의

$U\sim\chi^2_{d_1}$ 과 $V\sim\chi^2_{d_2}$ 가 독립일 때 다음 $F$ 의 분포를 자유도 $(d_1,d_2)$ 인 F 분포라 하고 $F\sim F(d_1,d_2)$ 로 쓴다.

$$
F=\frac{U/d_1}{V/d_2}
$$

밀도는 $x\gt 0$ 에서 다음과 같다. $B$ 는 베타 함수다.[^1]

$$
f(x)=\frac{1}{B(d_1/2,\thinspace d_2/2)}\left(\frac{d_1}{d_2}\right)^{d_1/2}x^{d_1/2-1}\left(1+\frac{d_1}{d_2}x\right)^{-(d_1+d_2)/2}
$$

# 성질

## 베타분포와의 관계

**정리.** $F\sim F(d_1,d_2)$ 이면 $\dfrac{d_1F}{d_1F+d_2}$ 는 $\mathrm{Beta}(d_1/2,\thinspace d_2/2)$ 를 따른다.

증명의 요지. $\dfrac{d_1F}{d_1F+d_2}=\dfrac{U}{U+V}$ 이고, 자유도 $d$ 인 카이제곱 분포는 형태 $d/2$, 비율 $\frac12$ 인 [감마분포](gamma-distribution.md)다. 비율이 같은 독립 감마 확률변수 $U$, $V$ 에 대해 $U/(U+V)$ 는 [베타분포](beta-distribution.md)를 따른다.

F 분포의 분포함수는 이 관계로 정규화된 불완전 베타 함수로 계산한다. 밀도 식도 이 변수변환에서 나온다.

## 역수와 t 분포

**정리.** $F\sim F(d_1,d_2)$ 이면 $1/F\sim F(d_2,d_1)$ 이다. $T$ 가 자유도 $d$ 인 [t 분포](t-distribution.md)를 따르면 $T^2\sim F(1,d)$ 이다.

증명의 요지. 역수는 정의에서 분자와 분모를 바꾼 것이다. $T=Z/\sqrt{V/d}$, $Z\sim N(0,1)$ 로 쓰면 $T^2=(Z^2/1)/(V/d)$ 이고 $Z^2\sim\chi^2_1$ 이다.

## 평균과 극한

$d_2\gt 2$ 이면 $\mathbb E\lbrack F\rbrack=d_2/(d_2-2)$ 이다. $\mathbb E\lbrack U/d_1\rbrack=1$ 이고 $\mathbb E\lbrack d_2/V\rbrack=d_2/(d_2-2)$ 이므로 독립성으로 곱한다.

$d_2\to\infty$ 이면 [큰 수의 법칙](law-of-large-numbers.md)으로 $V/d_2\to 1$ 이므로, $d_1F$ 의 분포는 $\chi^2_{d_1}$ 로 수렴한다.

# 활용

- [선형회귀](linear-regression.md)에서 설명변수 $p$ 개인 모형의 계수 가운데 $q$ 개가 모두 $0$ 인지 검정할 때, 두 모형의 잔차제곱합(residual sum of squares, RSS) $\mathrm{RSS}\_0$, $\mathrm{RSS}\_1$ 로 만든 $\dfrac{(\mathrm{RSS}\_0-\mathrm{RSS}\_1)/q}{\mathrm{RSS}\_1/(n-p)}$ 가 정규오차 아래 $F(q,n-p)$ 를 따른다.
- 분산분석(analysis of variance)은 집단 $k$ 개의 평균이 모두 같은지를, 집단 사이 제곱합과 집단 안 제곱합을 각각 자유도로 나눈 비로 검정하고, 이 비가 $F(k-1,n-k)$ 를 따른다.
- 직관 절처럼 두 정규 모집단의 분산이 같은지를 표본분산의 비로 검정한다. 이 검정은 정규성이 깨지면 1 종 오류율이 크게 어긋나므로 자료가 정규분포에 가까울 때 쓴다.

[^1]: G. Casella, R. L. Berger, *Statistical Inference*, 2nd ed., Duxbury (2002), §5.3. F 분포의 정의, 밀도, 베타분포와 t 분포와의 관계.

# 연관 문서

## 선수지식

- [카이제곱 분포](chi-squared-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
