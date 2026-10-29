# 로그정규분포

# 개요

**로그정규분포(log-normal distribution)** 는 로그를 취하면 [정규분포](normal-distribution.md)를 따르는 양수 확률변수의 분포다. $1000$ 원짜리 주식이 매일 $1.1$ 배가 되거나 $0.9$ 배가 되고 둘이 반반의 확률이라면, $100$ 일 뒤 가격의 분포는 날마다의 배율을 $100$ 번 곱한 값의 분포다. 로그를 취하면 곱이 합으로 바뀌므로, 로그정규분포는 이런 양의 분포를 정규분포의 계산으로 구한다.

# 직관

$t$ 번째 날의 배율을 $R_t$ 라 하면 $100$ 일 뒤 가격은 $S=1000\thinspace R_1R_2\cdots R_{100}$ 이다. 배율이 곱으로 쌓이므로 $S$ 의 분포를 직접 세려면 $1.1$ 과 $0.9$ 를 섞어 곱하는 $2^{100}$ 가지 경우를 다뤄야 한다.

로그를 취하면 $\log S=\log 1000+\sum_t\log R_t$ 이고, 합이 되었다. $\log R_t$ 는 $\log 1.1\approx 0.0953$ 과 $\log 0.9\approx -0.1054$ 를 반반으로 갖는다. 평균은 약 $-0.0050$, 분산은 약 $0.0101$ 이고, $100$ 일 동안 더하면 평균 약 $-0.50$, 분산 약 $1.0$ 이다.

[중심극한정리](central-limit-theorem.md)에 의해 $\log(S/1000)$ 의 분포는 평균 $-0.50$, 분산 $1.0$ 인 정규분포에 가깝다. 그러므로 $S$ 가 $1000e^{-0.50}\approx 607$ 원보다 작을 확률이 약 $\frac12$ 이다.

한편 $\mathbb E\lbrack R_t\rbrack=1$ 이므로 독립성에 의해 $\mathbb E\lbrack S\rbrack=1000$ 원이다. 가격의 평균은 그대로인데 절반의 경우에 가격이 $607$ 원 아래로 내려간다. 드물게 크게 오르는 경우가 평균을 $1000$ 원으로 끌어올린다.

# 정의

$Y\sim N(\mu,\sigma^2)$ 일 때 $X=e^Y$ 의 분포를 모수 $\mu$, $\sigma^2$ 인 로그정규분포라 하고 $X\sim\mathrm{LN}(\mu,\sigma^2)$ 로 쓴다. $\mu$ 와 $\sigma^2$ 은 $X$ 가 아니라 $\log X$ 의 평균과 분산이다.

$X$ 의 [확률밀도](probability-density.md)는 $Y$ 의 밀도를 $y=\log x$ 로 바꾸고 $dy/dx=1/x$ 를 곱한 것이다.

$$
f(x)=\frac{1}{x\sigma\sqrt{2\pi}}\exp\negthinspace\left(-\frac{(\log x-\mu)^2}{2\sigma^2}\right),\qquad x\gt 0
$$

# 성질

## 적률과 대푯값

**정리.** $X\sim\mathrm{LN}(\mu,\sigma^2)$ 이면 모든 실수 $k$ 에 대해 $\mathbb E\lbrack X^k\rbrack=e^{k\mu+k^2\sigma^2/2}$ 이다. 특히 다음이 성립한다.

$$
\mathbb E\lbrack X\rbrack=e^{\mu+\sigma^2/2},\qquad\mathrm{Var}(X)=\bigl(e^{\sigma^2}-1\bigr)e^{2\mu+\sigma^2}
$$

증명의 요지. $\mathbb E\lbrack X^k\rbrack=\mathbb E\lbrack e^{kY}\rbrack$ 는 정규분포의 [적률생성함수](moment-generating-function.md) $e^{k\mu+k^2\sigma^2/2}$ 다.

중앙값은 $e^{\mu}$ 이고 최빈값은 $e^{\mu-\sigma^2}$ 이다. 그러므로 최빈값, 중앙값, 평균이 이 순서로 커지고, $\sigma^2$ 이 클수록 셋이 멀어진다. 직관 절의 예에서 $\mu=\log 1000-0.50$, $\sigma^2=1.0$ 이므로 평균은 $1000e^{-0.50+0.50}=1000$ 이다.

## 곱과 거듭제곱

**정리.** $X_1\sim\mathrm{LN}(\mu_1,\sigma_1^2)$ 과 $X_2\sim\mathrm{LN}(\mu_2,\sigma_2^2)$ 가 독립이면 $X_1X_2\sim\mathrm{LN}(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2)$ 이다. $a\ne 0$ 이고 $c\gt 0$ 이면 $cX_1^a\sim\mathrm{LN}(a\mu_1+\log c,\thinspace a^2\sigma_1^2)$ 이다.

증명의 요지. 로그를 취하면 독립인 정규 확률변수의 합과 일차변환이 되고, 둘 다 정규분포를 따른다.

## 곱의 극한

**정리.** $R_1,R_2,\dots$ 가 독립이고 분포가 같은 양수 확률변수이고 $\log R_1$ 의 평균이 $m$, 분산이 $s^2\gt 0$ 이면, $n\to\infty$ 일 때 $(R_1\cdots R_n)^{1/\sqrt n}e^{-m\sqrt n}$ 의 분포가 $\mathrm{LN}(0,s^2)$ 로 수렴한다.

증명의 요지. 로그를 취한 값은 $\bigl(\sum_t\log R_t-nm\bigr)/\sqrt n$ 이고, 중심극한정리로 $N(0,s^2)$ 으로 분포수렴한다. $e^y$ 가 연속이므로 분포수렴이 보존된다.

## 적률로 정해지지 않는 분포

**정리.** $f$ 를 $\mathrm{LN}(0,1)$ 의 밀도라 하고 $-1\le\varepsilon\le 1$ 이라 하면, $f_\varepsilon(x)=f(x)\bigl(1+\varepsilon\sin(2\pi\log x)\bigr)$ 은 확률밀도이고 모든 자연수 $k$ 에 대해 $\int_0^\infty x^kf_\varepsilon(x)\thinspace dx=e^{k^2/2}$ 이다.[^1]

증명의 요지. $\int_0^\infty x^kf(x)\sin(2\pi\log x)\thinspace dx=0$ 을 보이면 된다. $x=e^y$ 로 바꾸면 이 적분은 $\int e^{ky}\varphi(y)\sin(2\pi y)\thinspace dy$ 이고, $\varphi$ 는 표준정규밀도다. $e^{ky}\varphi(y)=e^{k^2/2}\varphi(y-k)$ 이므로 $u=y-k$ 로 바꾸면 $e^{k^2/2}\int\varphi(u)\sin(2\pi u+2\pi k)\thinspace du$ 가 된다. $k$ 가 정수이므로 $\sin(2\pi u+2\pi k)=\sin(2\pi u)$ 이고, $\varphi$ 가 짝함수이므로 적분은 $0$ 이다.

모든 적률이 유한하고 서로 같은데 분포가 다른 예다. 적률생성함수 $\mathbb E\lbrack e^{tX}\rbrack$ 는 모든 $t\gt 0$ 에서 발산하므로 적률생성함수로 분포를 가르는 방법이 쓰이지 않는다.

# 활용

- [Black–Scholes 방정식](black-scholes-equation.md)은 주가를 기하 [Brown 운동](brownian-motion.md)(geometric Brownian motion) $S_t=S_0\exp\bigl((r-\sigma^2/2)t+\sigma W_t\bigr)$ 으로 둔다. $W_t\sim N(0,t)$ 이므로 $S_t$ 는 로그정규분포를 따르고, 유럽형 옵션(European option)의 가격은 이 분포에 대한 적분으로 나온다. 이 밀도는 [Fokker–Planck 방정식](fokker-planck.md)의 해이기도 하다.
- [특성함수](characteristic-functions.md)는 적률열이나 적률생성함수가 분포를 정하지 못하는 경우에도 분포를 정한다. 로그정규분포가 적률열이 실패하는 예다.
- 독립인 작은 배율이 곱으로 쌓이는 양, 곧 입자의 크기, 소득, 생물의 몸 크기를 로그정규분포로 두는 근거가 곱의 극한 정리다. 이 모형을 Gibrat 법칙(Gibrat's law)이라 한다.[^2]

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., Wiley (1971), §VII.3. 같은 적률을 갖는 서로 다른 분포의 예. 원 예는 C. C. Heyde, "On a property of the lognormal distribution", *Journal of the Royal Statistical Society B* 25 (1963), 392–393.
[^2]: J. Aitchison, J. A. C. Brown, *The Lognormal Distribution*, Cambridge University Press (1957), Chapter 2.

# 연관 문서

## 선수지식

- [정규분포](normal-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #analysis
