# Wright–Fisher 모형

# 개요

**Wright–Fisher 모형(Wright–Fisher model)** 은 크기가 일정한 집단에서 다음 세대가 이번 세대를 무작위로 베껴 만들어질 때 한 유전자형의 개수가 어떻게 바뀌는지를 나타내는 확률 모형이다. 유전자 $4$ 개로 된 작은 집단에 돌연변이 $A$ 가 하나 있다. 생존에 유리하지도 불리하지도 않은 $A$ 가 우연만으로 사라지거나 집단 전체로 퍼질 수 있는지, 그 확률과 걸리는 세대 수가 이 모형의 물음이다.

Wright–Fisher 모형은 $A$ 의 개수를 [Markov 연쇄](markov-chains.md)로 놓고, 그 개수가 평균을 바꾸지 않는다는 성질로 이 물음에 답한다.

# 직관

다음 세대의 유전자 $4$ 개는 각각 이번 세대의 $4$ 개 가운데 하나를 고르게 골라 베낀다. 이번 세대에 $A$ 가 하나이면, 다음 세대의 유전자 하나가 $A$ 일 확률은 $1/4$ 이고 네 개가 서로 무관하다. 그러므로 다음 세대의 $A$ 의 개수는 [이항분포](binomial-distribution.md) $\mathrm B(4,1/4)$ 를 따른다.

한 세대 만에 $A$ 가 사라질 확률은 $(3/4)^4=81/256$, 약 $0.32$ 다. 사라지지 않으면 다음 세대에서 같은 추첨을 되풀이하고, 언젠가 $A$ 가 $0$ 개나 $4$ 개가 된다. 그 뒤로는 베낄 것이 하나뿐이므로 개수가 다시 바뀌지 않는다.

다음 세대의 $A$ 의 개수의 평균은 $4\cdot\frac14=1$ 이고 이번 세대와 같다. 세대마다 평균이 그대로이므로 오래 지나도 평균이 $1$ 이다. 결국 $0$ 개나 $4$ 개 가운데 하나이므로, $4$ 개가 될 확률을 $p$ 라 하면 $4p=1$ 이고 $p=1/4$ 이다.

# 정의

## Wright–Fisher 모형

집단의 유전자 수를 $N$ 이라 하고 세대 $n$ 의 $A$ 의 개수를 $X_n$ 이라 한다. $X_n=x$ 일 때 $X_{n+1}$ 이 $\mathrm B(N,x/N)$ 을 따르면 $(X_n)$ 을 **Wright–Fisher 모형** 이라 한다. 상태공간은 $\lbrace 0,1,\dots,N\rbrace$ 이다.

직관 절의 집단은 $N=4$, $X_0=1$ 이고 $\Pr[X_1=0]=81/256$, $\Pr[X_1=4]=1/256$ 이다.

## 고정과 소실

상태 $0$ 과 $N$ 은 한번 들어가면 떠나지 않는 흡수 상태(absorbing state)다. $X_n=N$ 이 되는 것을 $A$ 의 **고정(fixation)**, $X_n=0$ 이 되는 것을 **소실(loss)** 이라 한다. 둘 가운데 하나가 일어나는 첫 세대를 $\tau$ 라 한다.

## 이형접합도

$p_n=X_n/N$ 을 $A$ 의 빈도라 하고 $H_n=2p_n(1-p_n)$ 을 **이형접합도(heterozygosity)** 라 한다. 집단에서 유전자 두 개를 복원추출했을 때 서로 다를 확률이다. 직관 절의 처음 세대에서 $H_0=2\cdot\frac14\cdot\frac34=3/8$ 이다.

# 성질

## 고정 확률

정리. $X_0=i$ 이면 $A$ 가 고정될 확률은 $i/N$ 이다[^1].

증명의 요지. 이항분포의 평균으로 $\mathbb E[X_{n+1}\mid X_n]=X_n$ 이므로 $(X_n)$ 은 [Martingale](martingales.md) 이다. 값이 $[0,N]$ 에 유계이고 $\tau$ 가 확률 $1$ 로 유한하므로 선택적 정지 정리로 $\mathbb E[X_\tau]=i$ 다. $X_\tau$ 는 $0$ 이나 $N$ 이므로 $N\Pr[X_\tau=N]=i$ 다.

$0\lt X_n\lt N$ 인 상태마다 다음 세대에 흡수될 확률이 $(1-x/N)^N$ 이상이므로 $\tau$ 는 확률 $1$ 로 유한하다.

## 이형접합도의 감소

정리. 세대마다 이형접합도의 평균이 일정한 비율로 준다[^1].

$$
\mathbb E[H_{n+1}\mid X_n]=\left(1-\frac1N\right)H_n
$$

증명의 요지. $X_n=x$ 일 때 이항분포의 분산은 $x(1-x/N)$ 이므로 $\mathbb E[X_{n+1}^2]=x^2+x(1-x/N)$ 이다. 이것을 $\mathbb E[X_{n+1}(N-X_{n+1})]$ 에 넣으면 $x(N-x)(1-1/N)$ 이 나온다.

그러므로 $\mathbb E[H_n]=(1-1/N)^nH_0$ 이고, 다양성은 대략 $N$ 세대 규모로 사라진다. 직관 절의 집단에서 세대마다 $3/4$ 씩 곱해져 $H_0=3/8$ 의 평균이 한 세대 뒤 $9/32$ 가 된다.

## 고정까지의 시간

$N$ 이 크고 처음 빈도가 $p$ 이면 흡수까지 걸리는 평균 세대 수는 다음으로 근사된다[^2].

$$
\mathbb E[\tau]\approx -2N\big(p\log p+(1-p)\log(1-p)\big)
$$

시간을 $N$ 세대 단위로 재면 $p_n$ 이 Wright–Fisher 확산(Wright–Fisher diffusion) $dp=\sqrt{p(1-p)}\thinspace dB$ 로 수렴하고, 이 근사는 그 확산의 흡수 시간이다. $p=1/2$ 이면 약 $1.39N$ 세대다. 돌연변이 하나에서 출발해 고정되는 경우만 보면 평균이 약 $2N$ 세대다[^2].

## Moran 모형

세대를 겹치게 두어 한 번에 한 개체만 바꾸는 변형이 Moran 모형(Moran model)이다. 무작위로 고른 하나가 복제되고 무작위로 고른 하나가 죽는다. 개수는 한 번에 하나씩만 바뀌므로 [출생사망 과정](birth-death-process.md)이고, 증감의 세기는 둘 다 $x(N-x)/N$ 이다.

$A$ 의 복제 세기를 상대 적합도 $r$ 배로 두면 증가 세기가 $r$ 배가 된다. 출생사망 과정의 도달 확률 공식에 $\mu_k/\lambda_k=1/r$ 을 넣으면 고정 확률이 다음으로 나온다[^1].

$$
\Pr[\text{고정}\mid X_0=i]=\frac{1-r^{-i}}{1-r^{-N}}
$$

$r\to 1$ 에서 $i/N$ 이 되어 중립의 경우와 맞는다. $N=4$, $i=1$, $r=2$ 이면 $\frac{1-1/2}{1-1/16}=8/15$ 이다.

## 계보의 합류

시간을 거꾸로 보면, 지금 세대의 유전자 두 개가 같은 부모를 고를 확률은 세대마다 $1/N$ 이다. 그러므로 두 계보가 하나로 합쳐지기까지의 세대 수는 평균 $N$ 의 [기하분포](geometric-distribution.md)다. 표본 $k$ 개의 계보가 합쳐지는 과정을 $N$ 세대 단위로 재면 쌍마다 세기 $1$ 로 합쳐지는 Kingman 합류(Kingman's coalescent)로 수렴한다[^3].

# 활용

- 중립 진화의 검정. 이형접합도가 $(1-1/N)$ 씩 준다는 식에서 관측된 유전적 다양성으로 집단의 유효 크기(effective population size) $N$ 을 추정한다.
- 계통 추론. Kingman 합류가 표본 계보의 사전분포가 되어, 서열 자료에서 공통 조상까지의 시간과 집단 크기의 변화를 추론한다.
- 진화 게임. 전략을 유전자형으로 두고 보수를 적합도로 둔 Moran 과정의 고정 확률로 어느 전략이 집단에 퍼지는지 판정한다.

[^1]: Richard Durrett, *Probability Models for DNA Sequence Evolution*, 2nd ed., Springer, 2008, Ch. 1 (Wright–Fisher 모형, 이형접합도, Moran 모형의 고정 확률).
[^2]: Motoo Kimura, Tomoko Ohta, "The average number of generations until fixation of a mutant gene in a finite population", *Genetics* 61 (1969), 763–771.
[^3]: J. F. C. Kingman, "The coalescent", *Stochastic Processes and their Applications* 13 (1982), 235–248.

# 연관 문서

## 선수지식

- [Markov 연쇄](markov-chains.md)
- [Martingale](martingales.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
