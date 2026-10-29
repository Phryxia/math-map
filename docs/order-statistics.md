# 순서통계량

# 개요

**순서통계량(order statistic)** 은 표본을 작은 것부터 늘어놓았을 때 $k$ 번째에 오는 값이다. 수명이 평균 $1000$ 시간인 전구 $5$ 개를 한꺼번에 켰을 때 세 번째로 꺼지는 시각의 분포를 구하려면, 전구 하나의 수명 분포에서 다섯 개를 늘어놓은 뒤의 셋째 값의 분포로 넘어가야 한다. 순서통계량은 그 분포를 어떤 시각까지 꺼진 전구의 개수로 바꾸어 계산한다.

# 직관

전구의 수명이 서로 독립이고 각각 시각 $t$ 까지 꺼질 확률이 $F(t)=1-e^{-t/1000}$ 이라 한다. 세 번째로 꺼지는 시각이 $t$ 이하라는 것은 시각 $t$ 까지 전구가 $3$ 개 이상 꺼졌다는 것과 같다.

시각 $t$ 까지 꺼진 전구의 개수는 전구마다 확률 $F(t)$ 로 꺼지는 독립 시행 $5$ 번의 성공 횟수이므로 [이항분포](binomial-distribution.md) $\mathrm B(5,F(t))$ 를 따른다. 그래서 세 번째로 꺼지는 시각이 $t$ 이하일 확률은 다음과 같다.

$$
\sum_{j=3}^{5}\binom5jF(t)^j\bigl(1-F(t)\bigr)^{5-j}
$$

같은 방식으로 첫 번째로 꺼지는 시각이 $t$ 보다 늦을 확률은 다섯이 모두 $t$ 까지 켜져 있을 확률 $e^{-5t/1000}$ 이다. 첫 번째로 꺼지는 시각은 평균이 $200$ 시간인 [지수분포](exponential-distribution.md)를 따른다.

# 정의

확률변수 $X_1,\dots,X_n$ 의 값을 작은 것부터 늘어놓은 것을 $X_{(1)}\le X_{(2)}\le\cdots\le X_{(n)}$ 으로 쓰고, $X_{(k)}$ 를 $k$ 번째 순서통계량이라 한다. $X_{(1)}$ 은 최솟값, $X_{(n)}$ 은 최댓값이다.

$0\lt q\lt 1$ 일 때 $X_{(\lceil nq\rceil)}$ 을 **표본 $q$ 분위수(sample quantile)** 라 한다. $n$ 이 홀수이면 $X_{((n+1)/2)}$ 가 표본 중앙값이다.

# 성질

이 절에서 $X_1,\dots,X_n$ 은 독립이고 분포함수가 $F$ 인 같은 분포를 따른다.

## 분포함수와 밀도

**정리.** $X_{(k)}$ 의 분포함수는 다음과 같다.

$$
P(X_{(k)}\le x)=\sum_{j=k}^{n}\binom njF(x)^j\bigl(1-F(x)\bigr)^{n-j}
$$

$F$ 가 밀도 $f$ 를 가지면 $X_{(k)}$ 의 밀도는 다음과 같다.

$$
f_{(k)}(x)=\frac{n!}{(k-1)!\thinspace(n-k)!}F(x)^{k-1}\bigl(1-F(x)\bigr)^{n-k}f(x)
$$

증명의 요지. $X_{(k)}\le x$ 는 $x$ 이하인 표본이 $k$ 개 이상이라는 것과 같고, 그 개수는 $\mathrm B(n,F(x))$ 를 따른다. 밀도는 $n$ 개 가운데 하나가 $x$ 근처에, $k-1$ 개가 그 왼쪽에, $n-k$ 개가 오른쪽에 오는 경우를 세어 얻는다.

## 역변환에 의한 환원

**정리.** $U_1,\dots,U_n$ 이 독립이고 $\lbrack 0,1\rbrack$ 의 [균등분포](uniform-distribution.md)를 따르고 $F^{-1}(u)=\inf\lbrace x:F(x)\ge u\rbrace$ 이면, $(X_{(1)},\dots,X_{(n)})$ 은 $(F^{-1}(U_{(1)}),\dots,F^{-1}(U_{(n)}))$ 과 같은 분포를 따른다. $U_{(k)}$ 는 [베타분포](beta-distribution.md) $\mathrm{Beta}(k,\thinspace n-k+1)$ 을 따른다.

증명의 요지. $F^{-1}(U_i)$ 는 분포함수가 $F$ 이고, $F^{-1}$ 이 감소하지 않으므로 순서를 보존한다.

순서통계량에 대한 물음은 균등분포의 순서통계량에 대한 물음으로 바뀐다. 결합밀도는 $x_1\lt\cdots\lt x_n$ 에서 $n!\thinspace f(x_1)\cdots f(x_n)$ 이다.

## 지수분포의 간격

**정리.** $X_i$ 가 비율 $\lambda$ 인 지수분포를 따르고 $X_{(0)}=0$ 이라 하면, 간격 $X_{(k)}-X_{(k-1)}$ ($k=1,\dots,n$) 은 서로 독립이고 각각 비율 $(n-k+1)\lambda$ 인 지수분포를 따른다.[^1]

증명의 요지. $k-1$ 개가 끝난 시각에 남은 $n-k+1$ 개는 무기억성에 의해 새로 시작한 것과 같고, 그 가운데 가장 먼저 끝나는 시각은 비율 $(n-k+1)\lambda$ 인 지수분포를 따른다.

그러므로 $\mathbb E\lbrack X_{(k)}\rbrack=\frac1\lambda\sum_{j=1}^{k}\frac1{n-j+1}$ 이다. 개요의 전구에서 세 번째로 꺼지는 시각의 평균은 $1000\left(\frac15+\frac14+\frac13\right)\approx 783$ 시간이다.

## 표본 분위수의 극한분포

**정리.** $0\lt q\lt 1$ 이고 $F(\xi)=q$ 인 점 $\xi$ 에서 $F$ 가 미분가능하고 $f(\xi)\gt 0$ 이면, $n\to\infty$ 일 때 다음이 성립한다.[^2]

$$
\sqrt n\bigl(X_{(\lceil nq\rceil)}-\xi\bigr)\to N\negthinspace\left(0,\thinspace\frac{q(1-q)}{f(\xi)^2}\right)\quad\text{(분포수렴)}
$$

증명의 요지. $P\bigl(X_{(\lceil nq\rceil)}\le\xi+t/\sqrt n\bigr)$ 는 $\mathrm B\bigl(n,F(\xi+t/\sqrt n)\bigr)$ 가 $\lceil nq\rceil$ 이상일 확률이다. $F(\xi+t/\sqrt n)\approx q+f(\xi)t/\sqrt n$ 이고, 이항분포에 [중심극한정리](central-limit-theorem.md)를 적용하면 이 확률이 표준정규분포의 분포함수 $\Phi$ 에서의 값 $\Phi\bigl(f(\xi)t/\sqrt{q(1-q)}\bigr)$ 로 수렴한다.

[정규분포](normal-distribution.md) $N(\mu,\sigma^2)$ 의 표본 중앙값은 $q=\frac12$, $f(\mu)=1/\sqrt{2\pi\sigma^2}$ 이므로 분산이 약 $\pi\sigma^2/(2n)$ 이다. 표본평균의 분산 $\sigma^2/n$ 의 약 $1.57$ 배다.

## 최댓값의 극한분포

**정리.** $X_i$ 가 비율 $1$ 인 지수분포를 따르면 $n\to\infty$ 일 때 모든 실수 $x$ 에서 다음이 성립한다.

$$
P\bigl(X_{(n)}-\log n\le x\bigr)=\left(1-\frac{e^{-x}}n\right)^n\to\exp\bigl(-e^{-x}\bigr)
$$

극한의 분포함수 $\exp(-e^{-x})$ 를 **Gumbel 분포(Gumbel distribution)** 라 한다. 최댓값을 적절히 옮기고 늘린 것이 퇴화하지 않는 분포로 수렴하면 그 극한은 Gumbel, Fréchet, Weibull 세 꼴 가운데 하나다. 이것이 [극값 분포](extreme-value-distributions.md)의 Fisher–Tippett–Gnedenko 정리(Fisher–Tippett–Gnedenko theorem)다.[^3]

# 활용

- [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)과 [이차 경험분포 통계량](quadratic-edf-statistics.md)은 통계량을 $F_0(X_{(i)})$ 로 적고, 귀무가설 아래 이 값들이 균등분포의 순서통계량을 따르는 것으로 분포를 계산한다.
- [신뢰구간](confidence-intervals.md)에서 중앙값의 구간 $\lbrack X_{(j)},X_{(n-j+1)}\rbrack$ 의 피복확률은 분포함수 정리의 이항 확률로 계산되고 $F$ 에 의존하지 않는다.
- [쿠폰 수집가 문제](coupon-collector.md)에서 모두 모으는 데 걸리는 횟수는 종류마다 처음 나오는 시각의 최댓값이고, 그 극한분포가 Gumbel 분포다.

[^1]: A. Rényi, "On the theory of order statistics", *Acta Mathematica Academiae Scientiarum Hungaricae* 4 (1953), 191–231.
[^2]: A. W. van der Vaart, *Asymptotic Statistics*, Cambridge University Press (1998), §21.2. 표본 분위수의 점근 정규성.
[^3]: H. A. David, H. N. Nagaraja, *Order Statistics*, 3rd ed., Wiley (2003), §2.1 과 §10.5. 순서통계량의 분포와 극값의 극한분포.

# 연관 문서

## 선수지식

- [균등분포](uniform-distribution.md)
- [베타분포](beta-distribution.md)

## 더 알아보기

- [극값 분포](extreme-value-distributions.md)

#probability #statistics
