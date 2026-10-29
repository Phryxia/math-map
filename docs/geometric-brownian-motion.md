# 기하 Brown 운동

# 개요

**기하 Brown 운동(geometric Brownian motion)** 은 매 순간의 변화가 현재 값에 비례하고, 그 비율이 무작위로 흔들리는 연속시간 확률과정이다. 주가는 $1000$ 원짜리일 때와 $10000$ 원짜리일 때 하루에 움직이는 금액이 다르지만 움직이는 비율은 비슷하고, 값이 음수가 되지 않는다. 기하 Brown 운동은 이런 양을 [확률미분방정식](stochastic-differential-equations.md) $dS_t=\mu S_t\thinspace dt+\sigma S_t\thinspace dB_t$ 로 적고, 그 해가 [로그정규분포](lognormal-distribution.md)를 따르는 것을 써서 분포를 계산한다.

# 직관

시간을 길이 $h$ 의 칸으로 자르고, 칸마다 값이 $1+\mu h+\sigma\sqrt h\thinspace Z_k$ 배가 된다고 하자. $Z_k$ 는 서로 독립인 표준정규 확률변수다. $n$ 칸 뒤의 값은 이 배율들의 곱이다.

로그를 취하면 곱이 합이 된다. $\log(1+x)\approx x-x^2/2$ 이고 $(\sigma\sqrt hZ_k)^2$ 의 평균이 $\sigma^2h$ 이므로, 칸마다 로그는 평균 $(\mu-\sigma^2/2)h$, 분산 $\sigma^2h$ 만큼 바뀐다. 시각 $t=nh$ 까지 더하면 $\log(S_t/S_0)$ 은 평균 $(\mu-\sigma^2/2)t$, 분산 $\sigma^2t$ 인 정규분포에 가깝다.

평균 성장률 $\mu$ 에서 $\sigma^2/2$ 가 빠진다. 배율의 평균은 $1+\mu h$ 인데, 오르고 내리는 폭이 같으면 곱했을 때 내리는 쪽이 이긴다. $1.1\cdot 0.9=0.99$ 가 그 예다.

# 정의

$\mu\in\mathbb R$, $\sigma\gt 0$, $S_0\gt 0$ 이고 $B_t$ 가 [Brown 운동](brownian-motion.md)일 때 다음 확률미분방정식의 해를 기하 Brown 운동이라 한다. $\mu$ 를 표류율(drift), $\sigma$ 를 변동성(volatility)이라 한다.

$$
dS_t=\mu S_t\thinspace dt+\sigma S_t\thinspace dB_t
$$

# 성질

## 해의 표현

**정리.** 해는 다음과 같다.

$$
S_t=S_0\exp\Bigl(\bigl(\mu-\tfrac{\sigma^2}2\bigr)t+\sigma B_t\Bigr)
$$

증명의 요지. $f(x)=\log x$ 에 [Itô 적분](ito-calculus.md)의 Itô 공식을 쓰면 $d\log S_t=dS_t/S_t-\frac12(dS_t)^2/S_t^2$ 이고, $(dS_t)^2=\sigma^2S_t^2\thinspace dt$ 이므로 $d\log S_t=(\mu-\sigma^2/2)\thinspace dt+\sigma\thinspace dB_t$ 다.

## 분포와 적률

$S_t$ 는 $\mathrm{LN}\bigl(\log S_0+(\mu-\sigma^2/2)t,\ \sigma^2t\bigr)$ 를 따른다. 그러므로 다음이 성립한다.

$$
\mathbb E\lbrack S_t\rbrack=S_0e^{\mu t},\qquad\mathrm{Var}(S_t)=S_0^2e^{2\mu t}\bigl(e^{\sigma^2t}-1\bigr)
$$

평균은 $e^{\mu t}$ 로 자라고 중앙값은 $S_0e^{(\mu-\sigma^2/2)t}$ 로 자란다. $0\lt\mu\lt\sigma^2/2$ 이면 평균은 커지는데 중앙값은 줄어들고, [큰 수의 법칙](law-of-large-numbers.md)에 의해 $\frac1t\log S_t\to\mu-\sigma^2/2$ 이므로 거의 모든 경로가 $0$ 으로 간다.

## 비율 증분의 독립성

$0\le t_0\lt t_1\lt\cdots\lt t_k$ 이면 비 $S_{t_1}/S_{t_0},\dots,S_{t_k}/S_{t_{k-1}}$ 은 서로 독립이고, $S_{t_i}/S_{t_{i-1}}$ 의 분포는 시간 간격 $t_i-t_{i-1}$ 에만 의존한다. 해의 표현에서 각 비는 Brown 운동의 증분 $B_{t_i}-B_{t_{i-1}}$ 의 함수이고, Brown 운동의 증분은 서로 독립이며 분포가 시간 간격에만 의존한다.

## Martingale 조건

$S_t$ 가 [Martingale](martingales.md) 인 것은 $\mu=0$ 인 것과 동치다. $e^{\sigma B_t-\sigma^2t/2}$ 는 평균이 $1$ 인 martingale 이고, 이것을 지수 martingale 이라 한다.

# 활용

- [Black–Scholes 방정식](black-scholes-equation.md)은 주가를 기하 Brown 운동으로 둔다. 무위험 이자율 $r$ 에 대해 할인한 주가 $e^{-rt}S_t$ 가 martingale 이 되도록 [Girsanov 정리](girsanov.md)로 측도를 바꾸면 $\mu$ 가 $r$ 로 바뀌고, 옵션 가격은 그 측도 아래의 기댓값이다.
- [Fokker–Planck 방정식](fokker-planck.md)의 전이밀도가 닫힌 꼴로 나오는 예다. 밀도는 로그정규분포의 밀도다.
- 투자 비율을 고정한 포트폴리오의 가치도 기하 Brown 운동을 따르고, 장기 성장률 $\mu-\sigma^2/2$ 를 최대로 하는 비율을 고르는 것이 [Kelly 기준](kelly-criterion.md)의 연속시간 판이다.

# 연관 문서

## 선수지식

- [확률미분방정식](stochastic-differential-equations.md)
- [로그정규분포](lognormal-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis
