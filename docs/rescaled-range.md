# 재조정 범위 분석

# 개요

**재조정 범위 분석(rescaled range analysis, R/S 분석)** 은 시계열의 누적 편차가 얼마나 넓게 흔들리는지를 여러 길이에서 재어, 그 폭이 길이에 따라 자라는 지수로 장기 의존성을 판정하는 방법이다. 강물을 저수지에 받아 해마다 평균 유입량만큼 내보내면, 넘치지도 마르지도 않게 하는 데 필요한 저수지 용량은 기록 기간이 길수록 커진다. 해마다의 유입량이 서로 독립이면 이 용량은 기간 $n$ 의 $\sqrt n$ 에 비례해 자라는데, Hurst 는 Nile 강 기록에서 $n^{0.7}$ 쯤으로 자라는 것을 보았다.[^1] R/S 분석은 이 자라는 지수 $H$ 를 추정해, 서로 멀리 떨어진 해의 유입량이 얼마나 함께 움직이는지를 가린다.

# 직관

여덟 해의 유입량이 $3,5,4,6,2,4,5,3$ 이라 한다. 평균은 $4$ 이고, 해마다 $4$ 를 내보내면 저수지에 남는 양의 변화는 $-1,1,0,2,-2,0,1,-1$ 이다. 이것을 차례로 더하면 저수량이 처음보다 얼마나 많은지가 $-1,0,0,2,0,0,1,0$ 으로 나온다.

저수량은 가장 많을 때 처음보다 $2$ 많고 가장 적을 때 $1$ 적다. 처음 물을 $1$ 넣어 두고 용량을 $3$ 으로 잡으면 여덟 해 동안 마르지도 넘치지도 않는다. 이 $3$ 이 누적 편차의 범위다.

범위는 유입량의 단위와 흔들림의 크기에 따라 바뀌므로, 유입량의 표준편차 $\sqrt{12/8}\approx 1.225$ 로 나눈다. 나눈 값 $3/1.225\approx 2.45$ 가 길이 $8$ 의 재조정 범위다. 긴 기록을 길이 $n$ 인 토막들로 잘라 토막마다 이 값을 구해 평균하고, $n$ 을 바꿔 가며 $\log n$ 에 대해 그린 기울기를 $H$ 로 읽는다.

# 정의

## 재조정 범위

$x_1,\dots,x_n$ 의 평균을 $\bar x$, 표준편차를 $S_n=\bigl(\tfrac1n\sum_i(x_i-\bar x)^2\bigr)^{1/2}$ 이라 하고, 누적 편차를 $Y_k=\sum\_{i=1}^k(x_i-\bar x)$ 로 둔다. 다음을 **재조정 범위(rescaled range)** 라 한다.

$$
\frac{R_n}{S_n},\qquad R_n=\max\bigl(0,Y_1,\dots,Y_n\bigr)-\min\bigl(0,Y_1,\dots,Y_n\bigr)
$$

직관 절의 여덟 값에서 $R_8=2-(-1)=3$, $S_8\approx 1.225$ 이다. $Y_n=0$ 이므로 $R_n$ 은 항상 $0$ 이상이다.

## Hurst 지수의 R/S 추정량

길이 $N$ 인 기록과 여러 토막 길이 $n$ 에 대해, 기록을 길이 $n$ 인 겹치지 않는 토막으로 나누어 토막마다 $R_n/S_n$ 을 구하고 평균한 것을 $\overline{(R/S)}\_n$ 이라 한다. 점 $(\log n,\thinspace\log\overline{(R/S)}\_n)$ 들에 최소제곱 직선을 맞춘 기울기를 **Hurst 지수(Hurst exponent)** $H$ 의 R/S 추정량이라 한다.[^1]

# 성질

## 독립인 경우의 점근

$x_i$ 가 독립 동일분포이고 분산이 유한하면 $R_n/(\sigma\sqrt n)$ 은 [Brown 다리](brownian-bridge.md)의 최댓값에서 최솟값을 뺀 것으로 분포수렴하고, 그 기댓값은 $\sqrt{\pi/2}$ 이다.[^2] $S_n\to\sigma$ 이므로 $\overline{(R/S)}\_n$ 은 대략 $\sqrt{\pi n/2}$ 로 자라고 기울기 $H$ 는 $\tfrac12$ 에 가깝다.

## 유한 표본의 치우침

정규 독립 표본에서 $R_n/S_n$ 의 기댓값은 작은 $n$ 에서 $\sqrt{\pi n/2}$ 보다 작다. Anis 와 Lloyd 는 다음 근사식을 주었다.[^3]

$$
E\Bigl\lbrack\frac{R_n}{S_n}\Bigr\rbrack\approx\frac{\Gamma\bigl(\tfrac{n-1}2\bigr)}{\sqrt\pi\thinspace\Gamma\bigl(\tfrac n2\bigr)}\sum\_{i=1}^{n-1}\sqrt{\frac{n-i}i}
$$

$n=8$ 이면 $2.62$, $n=100$ 이면 $11.45$ 이고, $\sqrt{\pi n/2}$ 는 각각 $3.54$, $12.53$ 이다. 작은 $n$ 에서 값이 덜 자라므로 작은 토막을 함께 쓰면 독립 표본에서도 기울기가 $\tfrac12$ 보다 크게 나온다. 그래서 이 기댓값을 빼고 기울기를 재거나 작은 $n$ 을 버린다.

## 장기 의존의 경우

[자기유사 과정](self-similar-processes.md) 문서의 분수 Brown 운동의 증분, 곧 분수 Gauss 잡음(fractional Gaussian noise)에서는 $R_n/S_n$ 이 $n^H$ 에 비례해 자란다. $\tfrac12\lt H\lt 1$ 이면 자기상관이 $k^{2H-2}$ 처럼 느리게 줄어 그 합이 발산하고, 이것을 장기 의존(long-range dependence)이라 한다.[^1]

## 짧은 의존에 대한 민감성

자기상관이 지수적으로 빨리 줄어드는 과정도 작은 $n$ 에서는 $R_n/S_n$ 을 키워 기울기를 $\tfrac12$ 보다 크게 만든다. Lo 는 $S_n$ 대신 자기공분산을 시차 $q$ 까지 더한 장기 분산 추정량을 써서, 짧은 의존이 있어도 귀무가설 "장기 의존 없음" 아래 극한분포가 정해지는 수정 R/S 통계량(modified R/S statistic)을 만들었다.[^4]

# 활용

- 수문학. 저수지 용량 설계에서 Hurst 가 R/S 를 처음 썼고, 강수량과 수위 기록의 $H$ 가 $0.7$ 근처로 보고된다.[^1]
- 금융 시계열. 주가 수익률에 장기 기억이 있는지를 수정 R/S 통계량으로 검정한다. Lo 의 검정은 미국 주가 지수 수익률에서 장기 의존의 증거를 찾지 못했다.[^4]
- 다른 추정법과의 비교. 토막 평균의 분산이 $n^{2H-2}$ 로 줄어드는 것을 쓰는 집계 분산법, 추세를 뺀 누적합의 요동을 재는 추세 제거 요동 분석(detrended fluctuation analysis, DFA), 스펙트럼 밀도로 가능도를 근사하는 Whittle 추정량이 같은 $H$ 를 추정한다.

[^1]: J. Beran, *Statistics for Long-Memory Processes*, Chapman & Hall (1994), 2 장과 4 장. 장기 의존의 정의, 분수 Gauss 잡음, R/S 그림과 Hurst 의 관측.
[^2]: W. Feller, "The asymptotic distribution of the range of sums of independent random variables", *Annals of Mathematical Statistics* 22 (1951), 427–432.
[^3]: A. A. Anis, E. H. Lloyd, "The expected value of the adjusted rescaled Hurst range of independent normal summands", *Biometrika* 63 (1976), 111–116.
[^4]: A. W. Lo, "Long-term memory in stock market prices", *Econometrica* 59 (1991), 1279–1313.

# 연관 문서

## 선수지식

- [자기유사 과정](self-similar-processes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
