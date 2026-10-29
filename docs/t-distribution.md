# t 분포

# 개요

**t 분포(Student's t-distribution)** 는 표본평균과 참평균의 차를 표본에서 구한 표준편차로 나눈 값의 분포다. 나사 두 개의 길이를 재어 평균 길이의 범위를 정하려는데 측정 오차의 크기를 모르면, 두 측정값의 차이로 오차의 크기를 어림해야 한다. 두 값이 우연히 가까우면 어림한 오차가 너무 작아지므로, t 분포는 이 흔들림까지 넣어 정규분포보다 넓은 범위를 준다.

# 직관

나사 두 개의 길이 $X_1$, $X_2$ 가 독립이고 평균 $\mu$, 분산 $\sigma^2$ 인 [정규분포](normal-distribution.md)를 따른다고 하자. $\sigma$ 를 알면 $\bar X=(X_1+X_2)/2$ 를 표준화한 값이 $N(0,1)$ 을 따르므로, $\vert\bar X-\mu\vert\le 1.96\thinspace\sigma/\sqrt2$ 가 확률 $0.95$ 로 성립한다.

$\sigma$ 를 모르면 표본 표준편차 $s=\vert X_1-X_2\vert/\sqrt 2$ 를 대신 넣어 $T=(\bar X-\mu)/(s/\sqrt 2)$ 를 본다. 정리하면 $T=(X_1+X_2-2\mu)/\vert X_1-X_2\vert$ 이다. 분자 $X_1+X_2-2\mu$ 와 분모 안의 $X_1-X_2$ 는 공분산이 $\mathrm{Var}(X_1)-\mathrm{Var}(X_2)=0$ 인 두 정규 확률변수여서 독립이고, 분산이 $2\sigma^2$ 로 같다. 그래서 $T$ 는 독립 표준정규 두 개의 비의 절댓값 꼴이고, 계산하면 $P(\vert T\vert\gt c)=1-\frac2\pi\arctan c$ 다.

이 확률을 $0.05$ 로 만드는 $c$ 는 $12.71$ 이다. $\sigma$ 를 알 때의 $1.96$ 보다 여섯 배 넘게 크다. 측정값 두 개가 우연히 아주 가까우면 $s$ 가 $0$ 에 가까워지고 $T$ 가 커지므로 범위를 그만큼 넓혀야 한다.

# 정의

$Z\sim N(0,1)$ 과 $V\sim\chi^2_\nu$ 가 독립일 때 다음 $T$ 의 분포를 자유도 $\nu$ 인 t 분포라 하고 $T\sim t_\nu$ 로 쓴다. $V$ 는 [카이제곱 분포](chi-squared-distribution.md)를 따른다.

$$
T=\frac{Z}{\sqrt{V/\nu}}
$$

밀도는 다음과 같다.[^1]

$$
f_\nu(t)=\frac{\Gamma\negthinspace\left(\frac{\nu+1}2\right)}{\sqrt{\nu\pi}\thinspace\Gamma\negthinspace\left(\frac\nu2\right)}\left(1+\frac{t^2}\nu\right)^{-(\nu+1)/2}
$$

$\nu=1$ 이면 밀도가 $\frac1{\pi(1+t^2)}$ 이고, 이것이 직관 절에서 나온 [Cauchy 분포](cauchy-distribution.md)다.

# 성질

## 표본평균의 t 통계량

**정리.** $X_1,\dots,X_n$ 이 독립이고 모두 $N(\mu,\sigma^2)$ 을 따르면 다음이 성립한다.[^1]

$$
\frac{\bar X-\mu}{s/\sqrt n}\sim t_{n-1}
$$

증명의 요지. 분자를 $\sigma/\sqrt n$ 으로 나눈 $Z=\sqrt n(\bar X-\mu)/\sigma$ 는 $N(0,1)$ 을 따른다. 카이제곱 분포의 표본분산 정리로 $V=(n-1)s^2/\sigma^2\sim\chi^2_{n-1}$ 이고 $V$ 는 $\bar X$ 와 독립이다. 주어진 식은 $Z/\sqrt{V/(n-1)}$ 이고 $\sigma$ 가 약분되어 사라진다.

## 꼬리와 적률

밀도가 $\vert t\vert^{-(\nu+1)}$ 의 빠르기로 줄어들므로 $\mathbb E\lbrack\vert T\vert^r\rbrack$ 는 $r\lt\nu$ 일 때만 유한하다. $\nu\gt 1$ 이면 평균이 $0$ 이고, $\nu\gt 2$ 이면 분산이 $\nu/(\nu-2)$ 다. 자유도가 작을수록 꼬리가 두껍고, $\nu=1$ 인 Cauchy 분포는 평균이 존재하지 않는다.

## 정규분포로의 수렴

$\nu\to\infty$ 이면 $t_\nu$ 가 $N(0,1)$ 로 분포수렴한다. $V/\nu$ 는 독립인 $Z_i^2$ 의 평균이므로 [큰 수의 법칙](law-of-large-numbers.md)으로 $1$ 로 확률수렴하고, Slutsky 정리(Slutsky's theorem)로 $Z/\sqrt{V/\nu}$ 가 $Z$ 와 같은 극한을 갖는다. 양쪽 5% 기준값은 $\nu=1$ 에서 $12.71$, $\nu=5$ 에서 $2.57$, $\nu=30$ 에서 $2.04$ 로 $1.96$ 에 다가간다.

# 활용

- [신뢰구간](confidence-intervals.md)에서 분산을 모르는 정규 표본의 평균에 대한 구간은 $\bar X\pm t_{n-1,\alpha/2}\thinspace s/\sqrt n$ 이다.
- [가설검정](hypothesis-testing.md)의 t 검정(t-test)은 $\mu=\mu_0$ 을 귀무가설로 두고 t 통계량이 $t_{n-1}$ 의 양 끝 기준값을 넘으면 기각한다.
- [선형회귀](linear-regression.md)에서 오차가 독립 정규분포이면, 계수 추정량을 그 표준오차로 나눈 값이 자유도 $n-p$ 인 t 분포를 따른다. 여기서 $p$ 는 계수의 개수다.
- [지수족](exponential-families.md)에 자유도를 모르는 t 분포족은 들지 않는다.

[^1]: G. Casella, R. L. Berger, *Statistical Inference*, 2nd ed., Duxbury (2002), §5.3. t 분포의 정의와 밀도, 정규 표본의 t 통계량. 분포는 W. S. Gosset 이 "Student" 라는 이름으로 발표한 "The probable error of a mean", *Biometrika* 6 (1908), 1–25 에서 나왔다.

# 연관 문서

## 선수지식

- [카이제곱 분포](chi-squared-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
