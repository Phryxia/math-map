# 기대 결손

# 개요

**기대 결손(expected shortfall)** 은 손실 $L$ 의 분포에서 위쪽 $1-\alpha$ 꼬리에 든 손실의 평균이다. 확률 $0.04$ 로 $100$ 을 잃는 채권 하나의 손실 기준을 확률 $0.95$ 로 넘지 않는 손실로 정하면 $0$ 인데, 독립인 두 회사의 채권을 하나씩 사서 위험을 나누면 같은 기준이 $100$ 으로 커진다. 기대 결손은 기준점 하나 대신 그 위 꼬리의 평균을 써서, 두 포지션을 합친 값이 각 값의 합을 넘지 않게 한다.

# 직관

기대 결손은 손실의 $\alpha$-분위수인 **위험가치(value at risk, VaR)** 보다 크거나 같다. 기대 결손은 Artzner, Delbaen, Eber, Heath 가 정한 [정합 위험 측도](coherent-risk-measures.md)(coherent risk measure)의 네 공리를 모두 만족한다[^1]. 조건부 위험가치(conditional value at risk, CVaR)라고도 한다.

채권 하나가 확률 $0.04$ 로 부도가 나서 $100$ 을 잃고, 그 밖에는 잃지 않는다. 손실이 $\ell$ 이하일 확률이 $0.95$ 이상이 되는 가장 작은 $\ell$ 을 손실의 기준으로 삼는다. 손실이 $0$ 일 확률이 $0.96$ 이므로 기준은 $0$ 이다. 이것이 수준 $0.95$ 의 위험가치다.

같은 채권을 독립인 두 회사에서 하나씩 사면 둘 다 부도가 나지 않을 확률이 $0.96^2=0.9216$ 이라 $0.95$ 보다 작다. 손실이 $100$ 이하일 확률은 $0.9984$ 이므로 기준은 $100$ 이다. 채권 하나씩의 기준은 $0$ 과 $0$ 인데 둘을 합친 기준은 $100$ 이다. 위험을 나누어 가졌는데 기준이 커졌다.

이 기준은 꼬리 확률 $0.05$ 안에서 손실이 얼마나 큰지를 보지 않는다. 그래서 꼬리 $0.05$ 에 든 손실을 평균한다. 채권 하나에서는 꼬리 $0.05$ 가운데 $0.04$ 가 손실 $100$, $0.01$ 이 손실 $0$ 이므로 평균이 $4/0.05=80$ 이다. 두 채권에서는 꼬리 $0.05$ 가운데 $0.0016$ 이 손실 $200$, $0.0484$ 가 손실 $100$ 이므로 평균이 $5.16/0.05=103.2$ 이고, $80+80=160$ 보다 작다.

# 정의

## 위험가치

손실 $L$ 의 분포함수를 $F$ 라 하고 $0\lt\alpha\lt 1$ 이라 한다. 수준 $\alpha$ 의 위험가치는

$$
\mathrm{VaR}\_\alpha(L)=\inf\lbrace\ell\in\mathbb R:F(\ell)\ge\alpha\rbrace
$$

이고, $L$ 의 $\alpha$-분위수다.

## 기대 결손

$E\lvert L\rvert\lt\infty$ 일 때 수준 $\alpha$ 의 기대 결손은

$$
\mathrm{ES}\_\alpha(L)=\frac1{1-\alpha}\int_\alpha^1\mathrm{VaR}\_u(L)\thinspace du
$$

이다. $F$ 가 연속이면 $\mathrm{ES}\_\alpha(L)=E\lbrack L\mid L\ge\mathrm{VaR}\_\alpha(L)\rbrack$ 이다.

## 정합 위험 측도

확률변수 $L$ 에 실수를 주는 함수 $\varrho$ 가 다음 넷을 만족하면 **정합 위험 측도(coherent risk measure)** 라 한다. $L$ 은 손실이므로 클수록 나쁘다.

- 단조성. $L\le L'$ 이면 $\varrho(L)\le\varrho(L')$ 이다.
- 현금 불변성. 상수 $c$ 에 대해 $\varrho(L+c)=\varrho(L)+c$ 이다.
- 양의 동차성. $\lambda\ge 0$ 에 대해 $\varrho(\lambda L)=\lambda\varrho(L)$ 이다.
- 부분가법성. $\varrho(L+L')\le\varrho(L)+\varrho(L')$ 이다.

# 성질

## 위험가치의 부분가법성 실패

위험가치는 앞의 세 공리를 만족하지만 부분가법성을 만족하지 않는다. 직관 절의 두 채권이 반례다.

## 기대 결손의 정합성

정리(Acerbi–Tasche). 기대 결손은 정합 위험 측도다[^2].

증명의 요지. $(1-\alpha)\thinspace\mathrm{ES}\_\alpha(L)$ 는 $0\le\varphi\le 1$, $E\varphi=1-\alpha$ 인 확률변수 $\varphi$ 에 대한 $E\lbrack L\varphi\rbrack$ 의 최댓값이다. 최댓값은 $L$ 이 큰 쪽 꼬리에 $\varphi=1$ 을 주어 얻는다. 합의 최댓값은 최댓값의 합을 넘지 않으므로 부분가법성이 나오고, 나머지 공리는 이 표현에서 바로 나온다.

## Rockafellar–Uryasev 공식

정리(Rockafellar–Uryasev). 다음이 성립하고, 오른쪽의 최소는 $c=\mathrm{VaR}\_\alpha(L)$ 에서 이루어진다[^3].

$$
\mathrm{ES}\_\alpha(L)=\min_{c\in\mathbb R}\Bigl\lbrace c+\frac1{1-\alpha}E\lbrack(L-c)^{+}\rbrack\Bigr\rbrace
$$

$c$ 로 미분한 값이 $1-P(L\gt c)/(1-\alpha)$ 이므로 $P(L\le c)=\alpha$ 에서 $0$ 이다. 이 $c$ 가 $\alpha$-분위수이고, 대입하면 꼬리의 평균이 나온다. 포지션 $x$ 의 손실 $L(x)$ 가 $x$ 의 일차식이고 시나리오가 유한 개이면, 이 식으로 기대 결손을 최소화하는 포지션 선택이 [선형계획법](linear-programming.md)이 된다.

## 정규분포

$L\sim N(\mu,\sigma^2)$ 이면 표준정규 분포함수 $\Phi$ 와 밀도 $\phi$ 에 대해 다음이 성립한다.

$$
\mathrm{VaR}\_\alpha(L)=\mu+\sigma\Phi^{-1}(\alpha),\qquad\mathrm{ES}\_\alpha(L)=\mu+\sigma\frac{\phi(\Phi^{-1}(\alpha))}{1-\alpha}
$$

$\alpha=0.975$ 에서 기대 결손은 $\mu+2.338\sigma$ 이고, $\alpha=0.99$ 의 위험가치 $\mu+2.326\sigma$ 와 거의 같다.

## 유도 가능성

손실 함수 $S$ 가 있어 예측값 $x$ 에 대한 $E\thinspace S(x,L)$ 의 최소점이 측도의 값이면 그 측도를 **유도 가능(elicitable)** 하다고 한다. 위험가치는 [분위수 회귀](quantile-regression.md)의 확인 함수 $S(x,\ell)=\rho_\alpha(\ell-x)$ 로 유도 가능하다. 기대 결손은 홀로 유도 가능하지 않고[^4], 위험가치와 짝으로는 유도 가능하다[^5]. 그래서 기대 결손 예측의 사후 검증은 위험가치와 함께 한다.

# 활용

- 금융 규제. Basel 은행감독위원회(Basel Committee on Banking Supervision)는 은행의 시장위험 자본을 수준 $0.99$ 의 위험가치 대신 수준 $0.975$ 의 기대 결손으로 계산하도록 기준을 바꾸었다[^6].
- 포트폴리오 최적화. Rockafellar–Uryasev 공식으로 시나리오 손실의 기대 결손을 제약이나 목적함수에 넣고 선형계획으로 푼다.
- 조건부 꼬리 위험. 설명변수에 따라 위험가치를 분위수 회귀로 추정하고, 그 위의 꼬리 평균으로 조건부 기대 결손을 추정한다.

[^1]: P. Artzner, F. Delbaen, J.-M. Eber, D. Heath, "Coherent measures of risk", Mathematical Finance 9 (1999), 203–228.
[^2]: C. Acerbi, D. Tasche, "On the coherence of expected shortfall", Journal of Banking & Finance 26 (2002), 1487–1503.
[^3]: R. T. Rockafellar, S. Uryasev, "Optimization of conditional value-at-risk", Journal of Risk 2 (2000), 21–41.
[^4]: T. Gneiting, "Making and evaluating point forecasts", Journal of the American Statistical Association 106 (2011), 746–762.
[^5]: T. Fissler, J. F. Ziegel, "Higher order elicitability and Osband's principle", Annals of Statistics 44 (2016), 1680–1707.
[^6]: Basel Committee on Banking Supervision, *Minimum capital requirements for market risk*, Bank for International Settlements (2016).

# 연관 문서

## 선수지식

- [분위수 회귀](quantile-regression.md)

## 더 알아보기

- [정합 위험 측도](coherent-risk-measures.md)

#statistics #probability #optimization
