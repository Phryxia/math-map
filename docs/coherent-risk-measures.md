# 정합 위험 측도

# 개요

**정합 위험 측도(coherent risk measure)** 는 손실을 나타내는 확률변수에 실수를 주는 함수 가운데 단조성, 현금 불변성, 양의 동차성, 부분가법성을 만족하는 것이다. P. Artzner, F. Delbaen, J.-M. Eber, D. Heath 가 1999 년에 공리로 정했다[^1]. 유한 표본공간에서 정합 위험 측도는 확률측도들의 집합 위에서 기댓값의 최댓값으로 나타나고, [기대 결손](expected-shortfall.md)은 밀도가 일정한 값 이하인 확률측도 전체를 고른 경우다. 양의 동차성과 부분가법성을 볼록성 하나로 바꾸면 볼록 위험 측도가 되고, 그 표현은 [볼록 공액](convex-conjugate.md)으로 얻는다.

# 직관

같은 확률 $1/3$ 로 일어나는 세 시나리오에서 손실이 $0$, $30$, $90$ 이다. 수준 $1/3$ 의 기대 결손은 위쪽 꼬리 확률 $2/3$ 에 든 손실의 평균이므로 $(30+90)/2=60$ 이다.

같은 값을 시나리오의 확률을 바꿔서 얻을 수 있다. 각 시나리오의 확률을 원래 확률 $1/3$ 의 $3/2$ 배, 곧 $1/2$ 이하로 두고 합이 $1$ 이 되게 고친다. 그렇게 고친 확률로 구한 손실의 기댓값을 가장 크게 하려면 $90$ 과 $30$ 에 $1/2$ 씩 주어야 하고, 그 기댓값이 $60$ 이다. 기대 결손은 고칠 수 있는 확률 가운데 가장 나쁜 것으로 구한 기댓값이다.

고칠 수 있는 확률의 범위를 다르게 정해도 가장 나쁜 기댓값은 위험의 기준이 된다. 범위를 확률 하나로 좁히면 보통의 기댓값이고, 모든 확률로 넓히면 가장 큰 손실이다. 정합 위험 측도는 이런 기준을 공리로 모은 것이고, 성질 절의 표현 정리는 공리를 만족하는 기준이 모두 이 꼴이라고 정한다.

# 정의

확률공간 $(\Omega,\mathcal F,P)$ 위의 유계 확률변수 전체를 $\mathcal X$ 라 한다. $L\in\mathcal X$ 는 손실이므로 클수록 나쁘다. 함수 $\varrho:\mathcal X\to\mathbb R$ 가 다음 넷을 만족하면 정합 위험 측도다.

- 단조성. $L\le L'$ 이면 $\varrho(L)\le\varrho(L')$ 이다.
- 현금 불변성. 상수 $c$ 에 대해 $\varrho(L+c)=\varrho(L)+c$ 이다.
- 양의 동차성. $\lambda\ge 0$ 에 대해 $\varrho(\lambda L)=\lambda\varrho(L)$ 이다.
- 부분가법성. $\varrho(L+L')\le\varrho(L)+\varrho(L')$ 이다.

단조성과 현금 불변성을 만족하고 양의 동차성과 부분가법성 대신

$$
\varrho(\lambda L+(1-\lambda)L')\le\lambda\varrho(L)+(1-\lambda)\varrho(L')\qquad(0\le\lambda\le 1)
$$

을 만족하면 **볼록 위험 측도(convex risk measure)** 라 한다(Föllmer–Schied)[^2]. 정합 위험 측도는 볼록 위험 측도다.

$\varrho(L)\le 0$ 인 $L$ 의 집합 $\mathcal A$ 를 **수용 집합(acceptance set)** 이라 한다. 현금 불변성에서 $\varrho(L)=\inf\lbrace c\in\mathbb R : L-c\in\mathcal A\rbrace$ 이므로, $\varrho(L)$ 은 손실 $L$ 을 받아들일 수 있게 만드는 데 필요한 현금의 최솟값이다.

# 성질

## 표현 정리

정리(Artzner–Delbaen–Eber–Heath). $\Omega$ 가 유한하면 $\varrho$ 가 정합 위험 측도인 것은 $\Omega$ 위의 확률측도들의 공집합 아닌 닫힌 볼록 집합 $\mathcal Q$ 가 있어 다음이 성립하는 것과 동치다[^1].

$$
\varrho(L)=\max_{Q\in\mathcal Q}E_Q\lbrack L\rbrack
$$

증명의 요지. 오른쪽이 네 공리를 만족하는 것은 기댓값이 각 $Q$ 에서 선형이고 단조이며 상수를 보존하고, 최댓값이 합에 대해 부분가법인 데서 나온다. 거꾸로 $\varrho$ 는 $\mathbb R^\Omega$ 위의 양의 동차이고 부분가법인 함수이므로, 그 볼록 공액은 닫힌 볼록 집합 $\mathcal Q$ 의 지시함수이고 $\varrho$ 는 $\mathcal Q$ 의 지지함수다. 단조성에서 $\mathcal Q$ 의 원소가 음이 아니고, 현금 불변성에서 그 합이 $1$ 이다.

## 볼록 위험 측도의 표현

정리(Föllmer–Schied). $\Omega$ 가 유한하면 볼록 위험 측도는 확률측도 $Q$ 위의 함수 $\beta(Q)=\sup_{L}\bigl(E_Q\lbrack L\rbrack-\varrho(L)\bigr)$ 에 대해 다음과 같이 쓰인다[^2].

$$
\varrho(L)=\max_Q\bigl(E_Q\lbrack L\rbrack-\beta(Q)\bigr)
$$

$\beta$ 는 $\varrho$ 의 볼록 공액이고, 식은 볼록 공액을 두 번 취하면 원래 함수가 된다는 Fenchel–Moreau 정리(Fenchel–Moreau theorem)다. 정합 위험 측도에서는 $\beta$ 가 $\mathcal Q$ 위에서 $0$, 밖에서 $\infty$ 다. 무한 표본공간에서는 균등하게 유계인 $L_n$ 이 $L$ 로 거의 확실히 수렴할 때 $\varrho(L)\le\liminf_n\varrho(L_n)$ 인 성질(Fatou property)을 가정하고 최댓값을 상한으로, 확률측도를 $P$ 에 대해 절대연속인 측도로 바꾸어 같은 표현이 성립한다.

## 예

- 기대 결손. 수준 $\alpha$ 의 기대 결손은 $\mathcal Q=\lbrace Q : dQ/dP\le 1/(1-\alpha)\rbrace$ 인 정합 위험 측도다. 직관 절의 확률 고치기가 이 집합이다.
- 최악 손실. $\mathcal Q$ 를 모든 확률측도로 두면 $\varrho(L)=\mathrm{ess\thinspace sup}\thinspace L$ 이다.
- 엔트로피 위험 측도. $\gamma\gt 0$ 에 대해 $\varrho(L)=\gamma^{-1}\log E\lbrack e^{\gamma L}\rbrack$ 는 볼록 위험 측도이고 양의 동차가 아니다. 벌점은 [KL divergence](kl-divergence.md)의 $\gamma^{-1}$ 배, 곧 $\beta(Q)=\gamma^{-1}D(Q\Vert P)$ 다.
- 위험가치. 손실의 분위수인 위험가치는 부분가법성을 만족하지 않아 정합 위험 측도가 아니다.

## 분포 불변 정합 위험 측도

$L$ 과 $L'$ 의 분포가 같으면 $\varrho(L)=\varrho(L')$ 인 위험 측도를 분포 불변(law invariant)이라 한다. S. Kusuoka 는 원자 없는 확률공간에서 Fatou property 를 갖는 분포 불변 정합 위험 측도가 $\lbrack 0,1)$ 위의 확률측도들의 집합 $\mathcal M$ 에 대해

$$
\varrho(L)=\sup_{\mu\in\mathcal M}\int_0^1\mathrm{ES}\_u(L)\thinspace\mu(du)
$$

로 쓰인다는 것을 증명했다[^3]. 분포 불변 정합 위험 측도는 여러 수준의 기대 결손을 섞은 것의 최댓값이다.

# 활용

- 은행 자본 규제. 수용 집합은 규제 기관이 받아들이는 포지션의 집합이고, 위험 측도의 값이 그 포지션에 필요한 자본이다. 기대 결손이 시장위험 자본 규칙에 쓰인다.
- 강건 최적화. 표현 정리의 $\mathcal Q$ 는 모형의 불확실성을 나타내는 확률측도의 집합이고, 위험 측도를 최소화하는 문제는 $\mathcal Q$ 위의 최악 기댓값을 최소화하는 분포 강건 최적화 문제다.
- 보험료 산정. 엔트로피 위험 측도는 지수 효용 아래의 보험료 원리와 같은 식이다.

[^1]: P. Artzner, F. Delbaen, J.-M. Eber, D. Heath, "Coherent measures of risk", Mathematical Finance 9 (1999), 203–228.
[^2]: H. Föllmer, A. Schied, "Convex measures of risk and trading constraints", Finance and Stochastics 6 (2002), 429–447.
[^3]: S. Kusuoka, "On law invariant coherent risk measures", Advances in Mathematical Economics 3 (2001), 83–95.

# 연관 문서

## 선수지식

- [기대 결손](expected-shortfall.md)
- [볼록 공액](convex-conjugate.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #optimization
