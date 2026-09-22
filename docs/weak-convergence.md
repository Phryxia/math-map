# 분포 수렴과 Prokhorov 정리

# 개요

확률변수열이 수렴한다는 말에는 여러 층위가 있다. 거의 확실한 수렴과 $L^1$ 수렴은 "같은 표본점에서 값이 가까워진다"를 요구한다. 그런데 [중심극한정리](central-limit-theorem.md)가 말하는 수렴은 그런 종류가 아니다. 정규화된 합 $S_n/\sqrt n$ 은 어떤 고정된 확률변수로 다가가지 않는다. 다가가는 것은 그 **분포**, 곧 [상측도](pushforward-measure.md)로 얻은 확률측도다.

분포들이 사는 공간 위에 수렴 개념을 얹는 것이 약수렴(weak convergence)이고, 그 공간에서 콤팩트성이 무엇인지 답하는 것이 Prokhorov 정리다. [균등적분가능성](uniform-integrability.md)이 $L^1$ 안에서 약콤팩트성을 판정했다면, tightness 는 확률측도 공간에서 같은 역할을 한다.

# 직관

분포가 수렴한다는 것을 "확률변수의 값이 가까워진다"로 읽으면 곧 막힌다. 공정한 동전에서 앞면을 $+1$ , 뒷면을 $-1$ 로 두면 $X$ 와 $-X$ 는 분포가 같지만 값은 늘 반대다. 분포끼리의 거리는 표본점을 보지 않는 방식으로 재야 한다.

방법은 측도를 직접 비교하는 대신 시험함수로 재는 것이다. 유계 [연속함수](continuity.md) $f$ 를 하나 고정하고 평균 $\int f\thinspace d\mu_n$ 을 재면 수 하나가 나온다. 모든 시험함수에 대해 이 수들이 수렴하면 측도가 수렴한다고 부른다. 함수해석의 약$^\ast$ 위상을 확률측도에 적용한 것이고, "약"이라는 이름도 거기서 온다.

시험함수를 유계 **연속**함수로 제한하는 것이 핵심이다. 지시함수까지 허용하면 $1/n$ 에 놓인 점질량이 0 의 점질량으로 가는 자명한 수렴조차 깨진다. $\mathbf 1_{\lbrace 0\rbrace}$ 로 재면 값이 계속 0 이다가 극한에서만 1 로 튀기 때문이다. 연속함수만 쓰면 이런 경계에서의 불연속이 보이지 않아 수렴이 살아난다.

남는 문제는 콤팩트성이다. 유계 수열이 수렴 부분열을 갖듯, 확률측도열도 부분열을 뽑으면 수렴하기를 바란다. 이것이 그냥은 성립하지 않는다. 질량이 무한대로 도망갈 수 있기 때문이다. $\mu_n=\delta_n$ 은 어떤 부분열을 뽑아도 확률측도로 수렴하지 않는다. 모든 유계 연속함수의 적분이 0 으로 가지만 극한 측도의 총질량은 0 이라 확률측도가 아니다. **Tightness** 는 이 도피를 막는 조건이고, 막기만 하면 콤팩트성이 돌아온다는 것이 Prokhorov 정리다.

# 정의

이하 $S$ 는 [거리공간](metric-spaces.md), $\mathcal P(S)$ 는 $S$ 위 Borel 확률측도 전체다. $C_b(S)$ 는 유계 연속 실함수의 공간이다.

## 약수렴

$\mu_n,\mu\in\mathcal P(S)$ 에 대해

$$
\mu_n\Rightarrow\mu
\quad\stackrel{\text{def}}{\iff}\quad
\int_Sf\thinspace d\mu_n\to\int_Sf\thinspace d\mu\quad\text{for all }f\in C_b(S)
$$

일 때 $\mu_n$ 이 $\mu$ 로 **약수렴**한다고 한다. 확률변수 쪽 표현이 **분포 수렴**이다. $X_n$ 의 분포가 $X$ 의 분포로 약수렴하면 $X_n\xrightarrow{d}X$ 로 쓴다. 정의가 분포만 보므로 $X_n$ 과 $X$ 가 같은 확률공간 위에 있을 필요조차 없다.

## Portmanteau 정리

다음이 모두 동치다. 약수렴을 실제로 확인할 때 쓰는 도구 상자다.

1. 모든 $f\in C_b(S)$ 에 대해 $\int f\thinspace d\mu_n\to\int f\thinspace d\mu$ .
2. 모든 유계 균등연속 $f$ 에 대해 같은 수렴.
3. 모든 닫힌집합 $F$ 에 대해 $\limsup_n\mu_n(F)\le\mu(F)$ .
4. 모든 열린집합 $G$ 에 대해 $\liminf_n\mu_n(G)\ge\mu(G)$ .
5. $\mu(\partial A)=0$ 인 모든 Borel 집합 $A$ 에 대해 $\mu_n(A)\to\mu(A)$ .

3 과 4 가 등식이 아니라 부등식인 것이 요점이다. 질량은 닫힌집합 쪽으로 몰려들 수는 있어도 새로 생길 수는 없다. 5 의 조건 $\mu(\partial A)=0$ 을 **연속집합**이라 하며, $\mathbb R$ 에서는 이것이 "분포함수의 연속점에서 수렴"으로 번역된다.

## Tightness

$\Pi\subseteq\mathcal P(S)$ 가 **tight** 하다는 것은 임의의 $\varepsilon\gt 0$ 에 대해 어떤 [콤팩트](compactness.md) 집합 $K\subseteq S$ 가 존재하여

$$
\sup_{\mu\in\Pi}\mu(S\setminus K)\lt\varepsilon
$$

가 성립한다는 뜻이다. 족 전체가 하나의 콤팩트 집합 안에 거의 다 들어간다는 조건이고, "거의"의 정도를 족과 무관하게 잡을 수 있다는 것이 균등성이다. $\mathbb R$ 에서는 유계구간 $[-M,M]$ 을 잡으면 되므로, tightness 는 꼬리질량이 균등하게 작다는 조건이 된다.

# 성질

## Prokhorov 정리

$S$ 가 완비 분리가능 거리공간(Polish 공간)일 때

$$
\Pi\subseteq\mathcal P(S)\ \text{가 tight}
\iff
\Pi\ \text{가 약위상에서 상대적으로 콤팩트}.
$$

정방향이 본체다. tight 한 족의 임의의 수열에서 약수렴하는 부분열을 뽑을 수 있다. 증명의 요지는 $S$ 의 가산 조밀집합 위에서 대각선 논법으로 부분열을 뽑아 극한 범함수를 만들고, Riesz 표현정리로 그 범함수를 측도로 실현한 뒤, tightness 를 써서 총질량이 1 임을 확인하는 것이다. 마지막 단계가 없으면 질량이 새어 극한이 확률측도가 되지 않는다.

이 구조는 [균등적분가능성](uniform-integrability.md)에서 본 Dunford–Pettis 정리와 정확히 평행하다.

| 층위 | 콤팩트성을 주는 조건 | 정리 |
| --- | --- | --- |
| $L^1$ 안의 밀도족 | 균등적분가능 (+ tight) | Dunford–Pettis |
| $\mathcal P(S)$ 안의 측도족 | tight | Prokhorov |

밀도 수준에서 "높이로 도망가는" 것을 막는 조건이 **UI**(uniform integrability)이고, [측도](measure.md) 수준에서 "멀리 밀려나는" 것을 막는 조건이 tightness 다.

## Lévy 연속성 정리

$S=\mathbb R^d$ 에서는 시험함수를 복소지수 하나로 줄일 수 있다. 특성함수 $\varphi_n(t)=\int e^{i\langle t,x\rangle}\thinspace d\mu_n(x)$ 에 대해

$$
\mu_n\Rightarrow\mu
\iff
\varphi_n(t)\to\varphi(t)\ \text{for all }t
$$

이며, 더 강하게 다음이 성립한다. $\varphi_n$ 이 각 점에서 어떤 함수 $\varphi$ 로 수렴하고 $\varphi$ 가 0 에서 연속이면, $\varphi$ 는 어떤 확률측도의 특성함수이고 $\mu_n$ 은 그 측도로 약수렴한다.

0 에서의 연속성이 tightness 를 대신한다는 점이 묘미다. $\mu_n=\delta_n$ 이면 $\varphi_n(t)=e^{int}$ 는 $t=0$ 에서만 수렴하므로 가정이 깨진다. [Fourier 변환](fourier.md)이 tightness 를 원점 근방의 국소적 성질로 번역해 주는 셈이다. 중심극한정리의 표준 증명이 이 정리에 기댄다.

## 약수렴이 보존하지 않는 것

약수렴은 적률을 보존하지 않는다. 반례가 간단하다.

$$
\mu_n=\Bigl(1-\tfrac1n\Bigr)\delta_0+\tfrac1n\delta_n
$$

은 $\delta_0$ 으로 약수렴하지만 평균은 항상 1 이다. 질량 $1/n$ 이 위치 $n$ 으로 도망가면서 곱을 일정하게 유지한다. 유계 연속함수는 멀리 있는 질량을 유계로만 보기 때문에 이 도피를 감지하지 못한다.

여기서 균등적분가능성이 다시 등장한다. $X_n\xrightarrow{d}X$ 이고 $\lbrace X_n\rbrace$ 이 UI 이면 $\mathbb E[X_n]\to\mathbb E[X]$ 다. 분포 수렴이 모양을 맞춰 주고 UI 가 질량의 도피를 막아야 비로소 기댓값이 따라온다. 위 반례의 $\lbrace X_n\rbrace$ 은 물론 UI 가 아니다.

## Skorokhod 표현정리

$S$ 가 Polish 이고 $\mu_n\Rightarrow\mu$ 이면, 하나의 확률공간 위에 $Y_n\sim\mu_n$ , $Y\sim\mu$ 인 확률변수들을 잡아 $Y_n\to Y$ 가 거의 확실히 성립하게 할 수 있다.

분포 수렴을 거의 확실한 수렴으로 "실현"할 수 있다는 뜻이다. 표본점 사이 대응을 새로 설계해 얻는 것이므로 원래 확률변수들과는 무관하지만, 증명 도구로는 대단히 쓸모가 크다. 거의 확실한 수렴에 대한 정리(Fatou 보조정리, [지배 수렴 정리](dominated-convergence.md))를 분포 수렴 상황으로 곧장 옮길 수 있기 때문이다. 연속사상 정리 $X_n\xrightarrow{d}X\implies g(X_n)\xrightarrow{d}g(X)$ (단 $g$ 는 $\mu$ 거의 어디서나 연속)도 이 표현을 쓰면 한 줄로 끝난다.

## 수렴의 위계

$$
\text{거의 확실한 수렴}\implies\text{확률 수렴}\implies\text{분포 수렴}
$$

이고 역은 모두 거짓이다. 예외가 하나 있다. 극한이 상수이면 분포 수렴에서 확률 수렴이 따라 나온다. 상수 주위로 분포가 몰리는 것과 값이 상수에 가까워지는 것이 같은 말이기 때문이며, [큰 수의 법칙](law-of-large-numbers.md)의 약한 형태를 분포 수준에서 읽을 수 있는 이유이기도 하다.

# 활용

## 극한정리의 표준 증명 구조

분포 극한을 증명하는 논증은 대개 두 단계다.

1. **Tightness.** 족이 tight 함을 보여 수렴 부분열의 존재를 확보한다. 보통 $\sup_n\mathbb E[|X_n|^p]\lt\infty$ 같은 적률 유계에 Markov 부등식을 써서 얻는다.
2. **극한의 유일성.** 모든 수렴 부분열이 같은 극한을 가짐을 보인다. 특성함수나 적률로 극한을 식별한다.

두 단계가 맞물리면 수열 전체가 수렴한다. [중심극한정리](central-limit-theorem.md)는 2 단계를 Lévy 연속성 정리로 처리해 1 단계를 생략할 수 있는 특히 깔끔한 경우다. [Brown 운동](brownian-motion.md)의 구성에서 나오는 Donsker 불변원리는 같은 구조를 함수공간 $C[0,1]$ 위에서 돌린 것으로, 거기서는 tightness 확인이 논증의 대부분을 차지한다.

## 통계적 추론

추정량의 점근분포가 곧 분포 수렴이다. [최대가능도 추정](maximum-likelihood.md)량의 점근 정규성, [신뢰구간](confidence-intervals.md)의 유효성, 검정통계량의 귀무분포가 모두 이 개념 위에 있다. 델타 방법은 연속사상 정리에 Taylor 전개를 결합한 것이고, 부트스트랩의 타당성 증명은 재표본 분포가 원래 극한분포로 약수렴함을 보이는 일이다.

# 연관 문서

## 선수지식

- [상측도](pushforward-measure.md)
- [균등적분가능성](uniform-integrability.md)
- [확률론 개관](probability-overview.md)

## 더 알아보기

- [중심극한정리](central-limit-theorem.md)
- [특성함수와 Lévy 연속성 정리](characteristic-functions.md)
- [최적 수송과 Wasserstein 거리](optimal-transport.md)

#probability #measure_theory #theorem
