# 신뢰열

# 개요

**신뢰열(confidence sequence)** 은 자료가 하나 들어올 때마다 모수의 범위를 새로 내놓고, 아무 시점에 멈춰도 그 범위가 모수를 담을 확률을 보장하는 구간들의 열이다. 신약 시험에서 환자가 한 명 늘 때마다 평균 효과의 95% 구간을 다시 계산하고 효과가 보이는 순간 멈추면, 구간이 실제 효과를 놓칠 확률이 5% 보다 훨씬 커진다. 한 번만 계산하는 구간의 보장은 미리 정한 표본 크기 하나에서만 성립한다. 신뢰열은 구간을 조금 넓혀, 모든 시점에서 동시에 모수를 담을 확률이 95% 이상이 되게 한다.

# 직관

신뢰열은 모든 표본 크기 $n$ 에서 동시에 모수를 포함할 확률이 $1-\alpha$ 이상인 구간의 열 $(C_n)$ 이다. 식으로는 $P(\theta\in C_n\text{ 이 모든 }n\text{ 에서 성립})\ge 1-\alpha$ 다.

[신뢰구간](confidence-intervals.md)은 미리 정한 표본 크기 하나에서만 포함 확률을 보장한다. 신뢰열은 자료가 들어올 때마다 구간을 보고 아무 시점에나 멈춰도 그 보장이 유지된다. 그 대가로 구간이 넓어지고, 폭이 줄어드는 속도의 한계를 [반복로그 법칙](law-of-iterated-logarithm.md)이 정한다.

분산이 $\sigma^2$ 로 알려진 정규분포에서 평균 $\mu$ 를 추정한다. 표본평균을 $\bar X_n$ 이라 하면 $\bar X_n\pm 1.96\thinspace\sigma/\sqrt n$ 은 $n$ 마다 확률 $0.95$ 로 $\mu$ 를 포함한다. 그런데 자료를 하나 받을 때마다 이 구간을 다시 계산해 본다. $S_n=\sum_{i\le n}(X_i-\mu)$ 로 두면 구간이 $\mu$ 를 놓치는 것은 $\vert S_n\vert\gt 1.96\thinspace\sigma\sqrt n$ 인 것과 같다.

반복로그 법칙으로 $S_n$ 은 $\sqrt{2\sigma^2n\log\log n}$ 근처까지 무한히 자주 올라간다. $\log\log n$ 은 끝없이 커지므로 $S_n$ 은 언젠가 $1.96\thinspace\sigma\sqrt n$ 을 넘는다. 매 시점 구간을 보는 사람은 확률 $1$ 로 어느 시점에 $\mu$ 를 놓친 구간을 본다.

그러므로 $n$ 이 커질수록 $1.96$ 자리의 계수를 키워야 한다. 계수가 $\sqrt{2\log\log n}$ 보다 느리게 커지면 같은 이유로 실패한다. 아래 성질 절의 Ville 부등식이 계수를 얼마나 키우면 충분한지를 준다.

# 정의

$X_1,X_2,\dots$ 를 관측하고 $\mathcal F_n$ 을 처음 $n$ 개가 생성하는 정보라 한다. $\mathcal F_n$ 가측인 구간 $C_n$ 의 열이 모든 분포 $P$ 에서

$$
P\bigl(\theta(P)\in C_n\ \text{ 이 모든 } n\ge 1 \text{ 에서 성립}\bigr)\ge 1-\alpha
$$

를 만족하면 $(C_n)$ 을 수준 $1-\alpha$ 의 **신뢰열** 이라 한다. 여기서 $\theta(P)$ 는 추정할 모수다.

음이 아닌 과정 $(M_n)$ 이 $M_0=1$ 이고 $E\lbrack M_{n+1}\mid\mathcal F_n\rbrack\le M_n$ 을 만족하면 **음이 아닌 supermartingale(nonnegative supermartingale)** 이라 한다. [martingale](martingales.md) 은 등호인 경우다.

# 성질

## Ville 부등식

**정리 (Ville).** $(M_n)$ 이 $M_0=1$ 인 음이 아닌 supermartingale 이면

$$
P\bigl(M_n\ge 1/\alpha \text{ 인 } n \text{ 이 존재}\bigr)\le\alpha
$$

다.[^1]

증명의 요지. $\tau=\inf\lbrace n:M_n\ge 1/\alpha\rbrace$ 로 둔다. 정지된 과정도 supermartingale 이므로 $E\lbrack M_{\tau\wedge N}\rbrack\le 1$ 이고, $M\ge 0$ 이므로 $E\lbrack M_{\tau\wedge N}\rbrack\ge P(\tau\le N)/\alpha$ 다. $N\to\infty$ 로 보낸다. $\square$

고정된 $n$ 하나에서의 Markov 부등식 $P(M_n\ge 1/\alpha)\le\alpha$ 가 모든 $n$ 에서 동시에 성립한다는 진술이다.

## 혼합법

정규분포의 예에서 $\lambda$ 마다 $\exp(\lambda S_n-\lambda^2n\sigma^2/2)$ 는 기댓값 $1$ 인 martingale 이다. $\lambda$ 를 하나로 고정하면 Ville 부등식이 주는 구간의 폭이 $n$ 에 대해 줄지 않는다. $\lambda$ 를 분포 $N(0,\rho^2)$ 로 평균하면

$$
M_n=\frac{1}{\sqrt{1+\rho^2n\sigma^2}}\exp\Bigl(\frac{\rho^2S_n^2}{2(1+\rho^2n\sigma^2)}\Bigr)
$$

이고 이것도 martingale 이다. Ville 부등식을 쓰면 확률 $1-\alpha$ 이상으로 모든 $n$ 에서

$$
\vert S_n\vert\lt\sqrt{\frac{1+\rho^2n\sigma^2}{\rho^2}\Bigl(2\log\frac1\alpha+\log(1+\rho^2n\sigma^2)\Bigr)}
$$

이 성립한다. 양변을 $n$ 으로 나누면 $\mu$ 의 신뢰열이 나오고, 폭은 $\sigma\sqrt{\log n/n}$ 규모다. 이 구성을 **혼합법(method of mixtures)** 이라 한다.[^2]

## 폭의 하한

**정리.** 정규분포의 예에서 어떤 $\varepsilon\gt 0$ 에 대해 충분히 큰 모든 $n$ 에서 $C_n\subseteq\lbrack\bar X_n-w_n,\thinspace\bar X_n+w_n\rbrack$ 이고 $w_n\le(1-\varepsilon)\sigma\sqrt{2\log\log n/n}$ 이면 $(C_n)$ 은 어떤 수준의 신뢰열도 아니다.

반복로그 법칙으로 거의 확실하게 $\vert S_n\vert/n\gt w_n$ 인 $n$ 이 무한히 많고, 그런 $n$ 에서 $\mu\notin C_n$ 이다. 그러므로 모든 $n$ 에서 포함할 확률이 $0$ 이다. 혼합 분포를 $\lambda$ 의 크기마다 층을 나누어 잡으면 폭을 $\sigma\sqrt{\log\log n/n}$ 의 상수배까지 줄일 수 있다.[^3]

## 정지시간에서의 포함

**정리.** $(C_n)$ 이 수준 $1-\alpha$ 의 신뢰열인 것은 모든 정지시간 $\tau$ 에서 $P(\theta\in C_\tau)\ge 1-\alpha$ 인 것과 동치다. 여기서 $\tau=\infty$ 일 수 있는 정지시간은 $C_\infty=\mathbb R$ 로 둔다.

신뢰열이면 사건 $\lbrace\theta\in C_\tau\rbrace$ 가 모든 $n$ 에서 포함하는 사건을 포함하므로 한쪽이 나온다. 반대쪽은 $\tau=\inf\lbrace n:\theta\notin C_n\rbrace$ 로 두면 $\lbrace\theta\notin C_\tau\rbrace$ 가 어느 $n$ 에서 놓치는 사건과 같다. $\square$

# 활용

- **연속 감시 실험.** 온라인 실험에서 두 처리의 차를 자료가 들어올 때마다 보고 차가 분명해지는 시점에 멈춘다. 정지시간에서의 포함 정리로, 멈추는 규칙을 미리 정하지 않아도 그 시점의 구간이 수준 $1-\alpha$ 를 지킨다.
- **순차검정.** [순차확률비 검정](sequential-probability-ratio-test.md)의 누적 우도비 $\Lambda_n$ 은 귀무가설 아래에서 기댓값 $1$ 인 음이 아닌 martingale 이다. Ville 부등식으로 $\Lambda_n\ge 1/\alpha$ 에서 기각하는 검정은 아래 문턱 없이 1 종 오류율이 $\alpha$ 이하다. [군축차 설계](group-sequential-design.md)는 분석 시점을 유한 개로 미리 정하는 대신 이보다 좁은 경계를 쓴다.
- **다중 슬롯머신.** [다중 슬롯머신](multi-armed-bandits.md)의 상한 신뢰 지표(upper confidence bound, UCB) 알고리즘은 팔마다 모든 시점에서 동시에 성립하는 상한을 쓴다. 반복로그 법칙 규모의 신뢰열을 쓰는 판본은 최선의 팔을 찾는 데 필요한 표본 수가 반복로그 법칙이 주는 하한과 상수배 차이로 맞는다.[^4]

[^1]: Jean Ville, *Étude critique de la notion de collectif*, Gauthier-Villars, 1939.
[^2]: Herbert Robbins, "Statistical methods related to the law of the iterated logarithm", *Annals of Mathematical Statistics* 41 (1970), 1397–1409.
[^3]: D. A. Darling, Herbert Robbins, "Confidence sequences for mean, variance, and median", *Proceedings of the National Academy of Sciences* 58 (1967), 66–68. Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, Jasjeet Sekhon, "Time-uniform, nonparametric, nonasymptotic confidence sequences", *Annals of Statistics* 49 (2021), 1055–1080.
[^4]: Kevin Jamieson, Matthew Malloy, Robert Nowak, Sébastien Bubeck, "lil' UCB: An optimal exploration algorithm for multi-armed bandits", *Proceedings of the 27th Conference on Learning Theory* (2014), 423–439.

# 연관 문서

## 선수지식

- [신뢰구간](confidence-intervals.md)
- [반복로그 법칙](law-of-iterated-logarithm.md)

## 더 알아보기

- [e-값](e-values.md)

#statistics #probability
