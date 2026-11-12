# Wright–Fisher 확산

# 개요

**Wright–Fisher 확산(Wright–Fisher diffusion)** 은 큰 집단에서 한 유전자형의 빈도가 우연과 선택으로 오르내리는 것을 연속시간, 연속값으로 나타낸 확률미분방정식이다. 유전자 $1000$ 개로 된 집단에서 빈도가 $0.1$ 인 유전자형이 세대마다 1% 더 많은 자손을 남긴다. 이 유전자형이 집단 전체로 퍼질 확률은 상태가 $1001$ 개인 [Markov 연쇄](markov-chains.md)의 흡수 확률이라 손으로 계산할 수 없다.

Wright–Fisher 확산은 세대마다의 작은 변화를 평균과 분산 두 수로 줄여, 이 확률을 [상미분방정식](ordinary-differential-equations.md) 하나의 해로 구한다.

# 직관

[Wright–Fisher 모형](wright-fisher-model.md)에서 유전자 $N$ 개 가운데 유형 $A$ 의 빈도가 $p$ 이고 $A$ 가 자손을 $1+s$ 배 남긴다고 하자. 다음 세대의 유전자는 각각 확률 $p(1+s)/(1+sp)$ 로 $A$ 를 베끼므로, 한 세대 동안 빈도는 평균 $sp(1-p)$ 쯤 늘고 그 분산은 $p(1-p)/N$ 쯤이다. $N=1000$, $s=0.01$ 이면 둘 다 아주 작아서 빈도가 크게 바뀌려면 수천 세대가 걸린다.

시간을 $N$ 세대 단위로 재면 단위 시간 동안 평균 변화는 $Ns\thinspace p(1-p)$, 분산은 $p(1-p)$ 가 된다. $\sigma=Ns$ 라 하고 빈도 $p$ 에서 출발해 $A$ 가 퍼질 확률을 $u(p)$ 라 하자. 짧은 시간 뒤의 빈도 $p+\Delta p$ 에서 다시 출발한 것으로 보면 $u(p)$ 는 $u(p+\Delta p)$ 의 평균과 같다. $u(p+\Delta p)$ 를 둘째 항까지 펼치고 평균을 내면 다음이 나온다.

$$
\sigma p(1-p)\thinspace u'(p)+\tfrac12p(1-p)\thinspace u''(p)=0
$$

이 식은 $u''=-2\sigma u'$ 이므로 $u'$ 가 $e^{-2\sigma p}$ 에 비례한다. $u(0)=0$, $u(1)=1$ 로 적분하면 다음이 나온다.

$$
u(p)=\frac{1-e^{-2\sigma p}}{1-e^{-2\sigma}}
$$

개요의 집단은 $\sigma=1000\cdot 0.01=10$, $p=0.1$ 이므로 $u(0.1)=(1-e^{-2})/(1-e^{-20})\approx 0.86$ 이다. 자손 수가 같았다면 이 확률은 $0.1$ 이다.

# 정의

## Wright–Fisher 확산

$\sigma\in\mathbb R$ 일 때 $\lbrack 0,1\rbrack$ 위의 다음 [확률미분방정식](stochastic-differential-equations.md)의 해 $p_t$ 를 **Wright–Fisher 확산** 이라 한다[^1]. $B_t$ 는 [Brown 운동](brownian-motion.md)이다.

$$
dp_t=\sigma p_t(1-p_t)\thinspace dt+\sqrt{p_t(1-p_t)}\thinspace dB_t
$$

$\sigma$ 를 **선택 계수(selection coefficient)** 라 하고, $\sigma=0$ 이면 중립(neutral)이라 한다. 직관 절의 집단은 $\sigma=10$, $p_0=0.1$ 인 경우다.

생성작용소는 다음과 같다. 직관 절의 $u$ 에 대한 식은 $Lu=0$ 이다.

$$
(Lf)(p)=\sigma p(1-p)f'(p)+\tfrac12p(1-p)f''(p)
$$

## 확산 극한

$X_n$ 이 유전자 $N$ 개, 선택 계수 $s=\sigma/N$ 인 Wright–Fisher 모형이면 $X_{\lfloor Nt\rfloor}/N$ 은 $N\to\infty$ 에서 Wright–Fisher 확산으로 분포수렴한다[^2]. 확산의 시간 $1$ 은 Wright–Fisher 모형의 $N$ 세대다.

## 흡수 시각

$p_t$ 가 처음 $0$ 이나 $1$ 에 닿는 시각을 $\tau$ 라 한다. $p_\tau=1$ 이면 $A$ 가 고정되었다 하고, $p_\tau=0$ 이면 소실되었다 한다. 해는 $\tau$ 뒤로 그 값에 머문다.

# 성질

## 고정 확률

정리(Kimura). $p_0=p$ 일 때 $A$ 가 고정될 확률은 $\sigma\ne 0$ 이면 $(1-e^{-2\sigma p})/(1-e^{-2\sigma})$, $\sigma=0$ 이면 $p$ 다[^3].

증명의 요지. 직관 절의 $u$ 는 $Lu=0$ 을 만족하므로 Itô 공식으로 $u(p_t)$ 가 [Martingale](martingales.md) 이다. $u$ 가 유계이고 $\tau$ 가 확률 $1$ 로 유한하므로 $u(p)=\mathbb E\lbrack u(p_\tau)\rbrack=\Pr\lbrack p_\tau=1\rbrack$ 이다.

돌연변이 하나에서 출발하면 $p=1/N$ 이다. $s$ 가 작고 $Ns$ 가 크면 고정 확률은 다음에 가깝다.

$$
\frac{1-e^{-2s}}{1-e^{-2Ns}}\approx 2s
$$

자손을 1% 더 남기는 돌연변이 하나는 약 2% 의 확률로만 고정되고, 나머지는 우연으로 사라진다.

## 중립 흡수 시간

정리. 중립이고 $p_0=p$ 이면 흡수까지의 평균 시간 $T(p)$ 와, 고정을 조건으로 한 평균 시간 $T_1(p)$ 는 다음과 같다[^3].

$$
T(p)=-2\big(p\log p+(1-p)\log(1-p)\big),\qquad T_1(p)=-\frac{2(1-p)\log(1-p)}{p}
$$

증명의 요지. $T$ 는 $LT=-1$, $T(0)=T(1)=0$ 의 해이고, $\frac12p(1-p)T''=-1$ 을 두 번 적분하면 위 식이 나온다. 고정을 조건으로 하면 표류 항이 $(1-p)$ 로 바뀐 확산이 되고, $T_1$ 은 그 확산에서 같은 식을 푼 것이다.

$p=1/2$ 이면 $T=2\log 2\approx 1.39$, 곧 $1.39N$ 세대다. $p\to 0$ 이면 $T_1(p)\to 2$ 이므로, 고정되는 돌연변이 하나는 평균 $2N$ 세대가 걸린다.

## 이형접합도

중립에서 $L\big(p(1-p)\big)=-p(1-p)$ 이므로 다음이 성립한다.

$$
\mathbb E\lbrack p_t(1-p_t)\rbrack=e^{-t}p_0(1-p_0)
$$

Wright–Fisher 모형의 이형접합도가 세대마다 $1-1/N$ 배가 되는 것을 $N$ 세대 단위로 잰 것이다.

## 돌연변이와 정상분포

$A$ 에서 다른 유형으로, 다른 유형에서 $A$ 로 바뀌는 돌연변이를 넣으면 중립 확산이 다음과 같다.

$$
dp_t=\tfrac12\big(\theta_1(1-p_t)-\theta_2p_t\big)\thinspace dt+\sqrt{p_t(1-p_t)}\thinspace dB_t
$$

$\theta_1,\theta_2\gt 0$ 이면 $0$ 과 $1$ 은 흡수 상태가 아니고, 정상분포는 [Beta 분포](beta-distribution.md) $\mathrm{Beta}(\theta_1,\theta_2)$ 다[^1]. 1 차원 확산 $dp=a\thinspace dt+\sqrt b\thinspace dB$ 의 정상밀도가 $b^{-1}\exp\int 2a/b$ 에 비례하고, 여기서 $2a/b=\theta_1/p-\theta_2/(1-p)$ 이므로 밀도가 $p^{\theta_1-1}(1-p)^{\theta_2-1}$ 에 비례한다.

## Kingman 합류와의 쌍대성

중립에서 $L(p^n)=\binom n2(p^{n-1}-p^n)$ 이다. 오른쪽은 계보 $n$ 개가 세기 $\binom n2$ 로 $n-1$ 개가 되는 [Kingman 합류](kingman-coalescent.md)의 변화와 같은 꼴이다. 그래서 $A_n(t)$ 를 계보 $n$ 개에서 출발한 Kingman 합류의 시각 $t$ 의 계보 수라 하면 다음이 성립한다[^1].

$$
\mathbb E_p\lbrack p_t^n\rbrack=\mathbb E\lbrack p^{A_n(t)}\rbrack
$$

왼쪽은 시각 $t$ 의 집단에서 뽑은 유전자 $n$ 개가 모두 $A$ 일 확률이고, 오른쪽은 그 $n$ 개의 계보를 시각 $0$ 까지 거슬러 올라간 조상이 모두 $A$ 일 확률이다.

# 활용

- 선택의 추정. 시기마다 잰 대립유전자 빈도에 확산의 추이밀도를 맞춰 선택 계수 $\sigma$ 를 추정한다.
- 유리한 돌연변이의 고정. 고정 확률 $2s$ 로 유리한 돌연변이 대부분이 사라진다는 것을 계산한다. [Moran 모형](moran-model.md)은 세대마다 빈도의 분산이 두 배라서 같은 돌연변이의 고정 확률이 약 $s$ 다.
- [Ewens 표본 공식](ewens-sampling-formula.md)은 유형이 무한히 많은 판본의 정상분포에서 뽑은 표본의 분포다.

[^1]: Alison M. Etheridge, *Some Mathematical Models from Population Genetics*, Lecture Notes in Mathematics 2012, Springer, 2011.
[^2]: Stewart N. Ethier, Thomas G. Kurtz, *Markov Processes: Characterization and Convergence*, Wiley, 1986, Ch. 10.
[^3]: Motoo Kimura, "On the probability of fixation of mutant genes in a population", *Genetics* 47 (1962), 713–719; Motoo Kimura, Tomoko Ohta, "The average number of generations until fixation of a mutant gene in a finite population", *Genetics* 61 (1969), 763–771.

# 연관 문서

## 선수지식

- [Wright–Fisher 모형](wright-fisher-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #analysis
