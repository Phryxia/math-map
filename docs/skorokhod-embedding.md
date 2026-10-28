# Skorokhod 매장

# 개요

**Skorokhod 매장(Skorokhod embedding)** 은 [Brown 운동](brownian-motion.md)을 적당한 시각에 멈추어, 멈춘 위치의 분포가 원하는 분포가 되게 하는 구성이다. Brown 운동이 처음으로 $+1$ 이나 $-1$ 에 닿을 때 멈추면 위치가 확률 $1/2$ 씩 $\pm 1$ 이고, 거기서 다시 출발해 되풀이하면 동전 던지기 걷기 전체가 Brown 운동의 한 경로 위에 놓인다. 이 구성으로 걷기의 부분합을 Brown 운동의 값으로 바꾸어, Brown 운동에 대해 증명한 반복로그 법칙 같은 정리를 부분합으로 옮긴다.

# 직관

Skorokhod 매장은 평균이 $0$ 이고 분산이 유한한 분포 $\mu$ 에 대해, Brown 운동 $B$ 의 정지시간 $\tau$ 를 골라 $B_\tau$ 의 분포가 $\mu$ 가 되게 하는 구성이다. 같은 구성을 되풀이하면 걸음의 분포가 $\mu$ 인 무작위 걷기 전체가 Brown 운동의 한 경로 위에 놓인다.

이 구성으로 Brown 운동에 대해 증명한 정리를 부분합에 옮긴다. 부분합의 반복로그 법칙과 Donsker 불변원리의 증명이 이 방법을 쓴다.

동전을 던져 $+1$ 이나 $-1$ 만큼 움직이는 걷기 $S_n$ 을 Brown 운동의 경로에서 읽어 내려고 한다. Brown 운동이 처음으로 $+1$ 이나 $-1$ 에 닿는 시각을 $\tau_1$ 이라 하면, 경로의 대칭성으로 $B_{\tau_1}$ 은 확률 $1/2$ 씩 $+1$ 과 $-1$ 이다. 그 시각부터 다시 출발한 Brown 운동이 $B_{\tau_1}\pm1$ 에 처음 닿는 시각을 $\tau_2$ 라 하면 $B_{\tau_2}-B_{\tau_1}$ 도 확률 $1/2$ 씩 $\pm1$ 이고 앞의 걸음과 독립이다. 이렇게 얻은 $B_{\tau_1},B_{\tau_2},\dots$ 는 $S_1,S_2,\dots$ 와 분포가 같다.

걸음이 $-2$ 나 $+1$ 이고 평균이 $0$ 이면 확률은 각각 $1/3$, $2/3$ 이다. 이번에는 Brown 운동이 구간 $(-2,1)$ 을 처음 벗어나는 시각을 쓴다. $B_t$ 가 [martingale](martingales.md) 이므로 벗어나는 점의 평균이 $0$ 이고, 그러면 $+1$ 로 벗어날 확률이 $2/3$ 로 정해진다. 평균이 $0$ 인 두 점 분포는 모두 이렇게 구간의 탈출 시각으로 얻는다.

걸음의 분포가 두 점이 아니면 구간의 양 끝을 먼저 무작위로 뽑는다. 평균이 $0$ 인 분포는 평균이 $0$ 인 두 점 분포들의 혼합으로 쓸 수 있으므로, 혼합의 비율대로 구간 $(u,v)$ 를 뽑은 뒤 그 구간의 탈출 시각에서 멈추면 된다.

# 정의

$\mu$ 는 $\int x\thinspace\mu(dx)=0$ 이고 $\int x^2\thinspace\mu(dx)\lt\infty$ 인 $\mathbb R$ 위의 확률분포다. $(B_t)$ 는 표준 Brown 운동이고, 필요하면 $B$ 와 독립인 확률변수를 덧붙인 여과(filtration)를 쓴다.

**Skorokhod 매장 문제(Skorokhod embedding problem)** 는 다음을 만족하는 정지시간 $\tau$ 를 찾는 문제다.

$$
B_\tau\sim\mu,\qquad E\lbrack\tau\rbrack\lt\infty
$$

$u\lt 0\lt v$ 에 대해 $\tau_{u,v}=\inf\lbrace t\ge 0:B_t\notin(u,v)\rbrace$ 를 구간 $(u,v)$ 의 탈출 시각이라 한다.

# 성질

## 탈출 시각의 분포

**보조정리.** $u\lt 0\lt v$ 이면

$$
P(B_{\tau_{u,v}}=v)=\frac{-u}{v-u},\qquad E\lbrack\tau_{u,v}\rbrack=-uv
$$

다.

$B_t$ 와 $B_t^2-t$ 가 martingale 이고 정지된 과정이 유계이므로 선택적 정지 정리(optional stopping theorem)를 쓸 수 있다. 첫 식에서 $vP(B_\tau=v)+u(1-P(B_\tau=v))=0$ 이고, 둘째 식에서 $E\lbrack\tau\rbrack=E\lbrack B_\tau^2\rbrack=v^2\frac{-u}{v-u}+u^2\frac{v}{v-u}=-uv$ 다. $\square$

## Skorokhod 정리

**정리 (Skorokhod).** 위 조건의 $\mu$ 마다 $B_\tau\sim\mu$ 이고 $E\lbrack\tau\rbrack=\int x^2\thinspace\mu(dx)$ 인 정지시간 $\tau$ 가 존재한다.[^1]

증명의 요지. $c=\int_{(0,\infty)}v\thinspace\mu(dv)=\int_{(-\infty,0)}(-u)\thinspace\mu(du)$ 로 둔다. 두 적분이 같은 것은 평균이 $0$ 이기 때문이다. $B$ 와 독립으로 쌍 $(U,V)$ 를 다음 분포로 뽑는다.

$$
P(U\in du,\thinspace V\in dv)=\frac{v-u}{c}\thinspace\mu(du)\thinspace\mu(dv)\qquad(u\lt 0\lt v)
$$

이 분포의 전체 질량은 $1-\mu(\lbrace 0\rbrace)$ 이고, 남은 확률 $\mu(\lbrace 0\rbrace)$ 로는 $\tau=0$ 으로 둔다. 그 밖에는 $\tau=\tau_{U,V}$ 다. $v\gt 0$ 에서 보조정리로

$$
P(B_\tau\in dv)=\int_{u\lt 0}\frac{v-u}{c}\cdot\frac{-u}{v-u}\thinspace\mu(du)\thinspace\mu(dv)=\mu(dv)
$$

이고 $u\lt 0$ 쪽도 같다. 기댓값은 $E\lbrack\tau\rbrack=\frac1c\iint(v-u)(-uv)\thinspace\mu(du)\thinspace\mu(dv)=\int x^2\thinspace\mu(dx)$ 다. $\square$

## Wald 항등식

$E\lbrack\tau\rbrack\lt\infty$ 인 정지시간에 대해 $E\lbrack B_\tau\rbrack=0$ 이고 $E\lbrack B_\tau^2\rbrack=E\lbrack\tau\rbrack$ 다. 이 둘을 **Wald 항등식(Wald's identities)** 이라 한다. 그러므로 $E\lbrack\tau\rbrack\lt\infty$ 인 매장이 존재하려면 $\mu$ 의 평균이 $0$ 이어야 하고, 매장이 존재하면 $E\lbrack\tau\rbrack$ 는 항상 $\mu$ 의 분산과 같다.

## 무작위 걷기의 매장

$X_1,X_2,\dots$ 가 분포 $\mu$ 를 따르는 독립 확률변수이고 $S_n=X_1+\cdots+X_n$ 이다. $\tau_1$ 을 위 정리의 정지시간으로 잡고, $\tau_1$ 이후의 Brown 운동 $B_{\tau_1+t}-B_{\tau_1}$ 에 같은 구성을 적용해 $\tau_2$ 를 얻는 일을 되풀이한다. Brown 운동의 강 Markov 성질(strong Markov property)로 $\tau_n-\tau_{n-1}$ 들은 서로 독립이고 분포가 같으며

$$
(B_{\tau_1},B_{\tau_2},B_{\tau_3},\dots)\overset{d}{=}(S_1,S_2,S_3,\dots)
$$

이다. $\sigma^2=\int x^2\thinspace\mu(dx)$ 이면 [큰 수의 법칙](law-of-large-numbers.md)으로 $\tau_n/n\to\sigma^2$ 이 거의 확실하게 성립한다.

## Azéma–Yor 매장

$\mu$ 의 무게중심 함수를 $\psi_\mu(x)=E\lbrack X\mid X\ge x\rbrack$ $(X\sim\mu)$ 로, 최댓값 과정을 $M_t=\max_{s\le t}B_s$ 로 둔다. 정지시간

$$
\tau_{\mathrm{AY}}=\inf\lbrace t\ge 0:M_t\ge\psi_\mu(B_t)\rbrace
$$

는 덧붙인 무작위성 없이 $B_{\tau_{\mathrm{AY}}}\sim\mu$ 를 준다. 이것을 **Azéma–Yor 매장(Azéma–Yor embedding)** 이라 한다. 이 매장의 $M_\tau$ 는 정지된 과정이 균등적분가능한 매장 가운데 확률적 순서로 가장 크다.[^2]

# 활용

- **부분합의 반복로그 법칙.** 무작위 걷기의 매장에서 $\tau_n/n\to\sigma^2$ 과 Brown 운동 경로의 연속률을 합치면 $\vert B_{\tau_n}-B_{\sigma^2n}\vert=o(\sqrt{n\log\log n})$ 이 거의 확실하게 나온다. 그러면 [반복로그 법칙](law-of-iterated-logarithm.md)의 Brown 운동 판본이 유한 분산 걸음의 부분합으로 옮겨지고, Strassen 의 함수형 판본도 같은 방법으로 증명된다.
- **Donsker 불변원리.** 같은 매장에서 $\max_{k\le n}\vert B_{\tau_k}-B_{\sigma^2k}\vert/\sqrt n$ 이 확률수렴으로 $0$ 에 가므로, 부분합의 꺾은선과 Brown 운동이 한 확률공간에서 가까워진다. [Donsker 불변원리](donsker-invariance-principle.md)의 증명 가운데 하나가 이것이다.
- **모형에 의존하지 않는 가격 한계.** 만기 가격의 분포가 옵션 시장에서 주어지고 가격 과정이 연속 martingale 이면, 그 과정은 Brown 운동의 시간 변경이고 만기 가격은 하나의 매장이다. 최댓값에 의존하는 lookback 옵션의 가격 상한이 Azéma–Yor 매장에서 달성된다.[^3]

[^1]: Peter Mörters, Yuval Peres, *Brownian Motion*, Cambridge University Press, 2010, 5.3 절.
[^2]: Jan Obłój, "The Skorokhod embedding problem and its offspring", *Probability Surveys* 1 (2004), 321–392.
[^3]: David G. Hobson, "Robust hedging of the lookback option", *Finance and Stochastics* 2 (1998), 329–347.

# 연관 문서

## 선수지식

- [Brown 운동](brownian-motion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory
