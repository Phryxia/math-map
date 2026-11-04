# 약수렴

# 개요

**약수렴(weak convergence)** 은 [확률변수](random-variables.md)의 값이 아니라 분포가 가까워지는 수렴이다. 공정한 동전을 $n$ 번 던져 앞면 수에서 $n/2$ 를 빼고 $\sqrt n$ 으로 나눈 값은 어느 한 수에 다가가지 않지만, 그 값의 히스토그램은 $n$ 이 커지면 종 모양 곡선에 다가간다. 약수렴은 유계 [연속함수](continuity.md)의 기댓값이 모두 수렴하는 것으로 이 다가감을 정의해, 극한 분포가 있는지와 언제 있는지를 다룬다.

# 직관

공정한 동전을 $n$ 번 던져 앞면 수를 $H_n$ 이라 하고 $Z_n=(H_n-n/2)/\sqrt n$ 으로 둔다. [중심극한정리](central-limit-theorem.md)에 따르면 $Z_n$ 의 히스토그램은 [정규분포](normal-distribution.md) $N(0,1/4)$ 의 밀도 곡선에 다가간다. 다가가는 것은 $Z_n$ 의 값이 아니라 $Z_n$ 의 분포, 곧 [상측도](pushforward-measure.md)로 얻은 $\mathbb R$ 위의 확률측도다. 이 다가감을 식으로 쓰려 한다.

값으로는 쓸 수 없다. 던진 동전을 모두 뒤집으면 $H_n$ 이 $n-H_n$ 이 되고 $Z_n$ 이 $-Z_n$ 이 된다. $Z_n$ 과 $-Z_n$ 은 분포가 같지만 값은 부호가 반대다.

집합의 확률로 쓰려 하면 다른 데서 막힌다. $Z_n$ 은 언제나 유리수이므로 모든 $n$ 에서 $\Pr\lbrack Z_n\in\mathbb Q\rbrack=1$ 이다. 정규분포에서 유리수 집합의 확률은 $0$ 이다. 모든 집합에서 확률이 수렴하기를 요구하면 이 수열은 정규분포로 가지 않는다.

막힌 까닭은 유리수 집합이 무리수와 촘촘히 섞여 있어서다. $Z_n$ 의 질량은 간격 $1/\sqrt n$ 의 격자 위에 있고, 정규분포의 질량은 그 사이까지 고르게 퍼져 있다. 그래서 집합 대신 유계 연속함수 $f$ 로 잰다. $f$ 는 가까운 점에 가까운 값을 주므로 $\mathbb Ef(Z_n)$ 은 격자 위의 질량과 고르게 퍼진 질량을 구별하지 않는다. 모든 유계 연속함수 $f$ 에서 $\mathbb Ef(Z_n)$ 이 정규분포의 평균 $\int f\thinspace d\mu$ 로 가는 것을 약수렴이라 한다.

# 정의

이하 $S$ 는 [거리공간](metric-spaces.md), $\mathcal P(S)$ 는 $S$ 위 Borel 확률측도(Borel probability measure) 전체다. $C_b(S)$ 는 유계 [연속함수](continuity.md) $S\to\mathbb R$ 의 공간이다.

## 약수렴

$\mu_n,\mu\in\mathcal P(S)$ 에 대해

$$
\mu_n\Rightarrow\mu
\quad\stackrel{\text{def}}{\iff}\quad
\int_Sf\thinspace d\mu_n\to\int_Sf\thinspace d\mu\quad\text{for all }f\in C_b(S)
$$

일 때 $\mu_n$ 이 $\mu$ 로 **약수렴(weak convergence)** 한다고 한다. 함수해석의 약$^\ast$ 위상(weak-$\ast$ topology)에서 이름이 왔다. 확률변수 쪽 표현이 **분포 수렴(convergence in distribution)** 이다. $X_n$ 의 분포가 $X$ 의 분포로 약수렴하면 $X_n\xrightarrow{d}X$ 로 쓴다. 정의가 분포만 보므로 $X_n$ 과 $X$ 가 같은 확률공간 위에 있지 않아도 된다.

직관 절의 동전에서는 $Z_n\xrightarrow{d}Z\sim N(0,1/4)$ 이다. 한 점 $1/n$ 에 실린 측도 $\delta_{1/n}$ 은 $f$ 가 연속이면 $f(1/n)\to f(0)$ 이므로 $\delta_0$ 으로 약수렴한다. 이때 $\delta_{1/n}(\lbrace 0\rbrace)=0$ 이고 $\delta_0(\lbrace 0\rbrace)=1$ 이어서 집합 $\lbrace 0\rbrace$ 의 확률은 수렴하지 않는다.

## Tightness

$\Pi\subseteq\mathcal P(S)$ 가 **tight** 하다는 것은 임의의 $\varepsilon\gt 0$ 에 대해 어떤 [콤팩트](compactness.md) 집합 $K\subseteq S$ 가 존재하여

$$
\sup_{\mu\in\Pi}\mu(S\setminus K)\lt\varepsilon
$$

가 성립한다는 뜻이다. $K$ 하나가 족의 모든 측도에 함께 쓰인다. $\mathbb R$ 에서는 유계구간 $\lbrack -M,M\rbrack$ 을 잡으면 되므로, tightness 는 꼬리질량이 족 전체에서 함께 작다는 조건이다.

직관 절의 $Z_n$ 의 분포들은 tight 하다. $\mathrm{Var}(Z_n)=1/4$ 이므로 $\Pr\lbrack\vert Z_n\vert\gt M\rbrack\le 1/(4M^2)$ 이고, $M=1/\sqrt{4\varepsilon}$ 보다 크게 잡으면 모든 $n$ 에서 $\varepsilon$ 보다 작다. 한 점 $n$ 에 실린 측도들 $\delta_n$ 은 tight 하지 않다. 어느 구간 $\lbrack -M,M\rbrack$ 을 잡아도 $n\gt M$ 인 $\delta_n$ 은 질량 $1$ 을 모두 구간 밖에 둔다.

# 성질

## Portmanteau 정리

다음이 모두 동치다. 이것이 Portmanteau 정리(Portmanteau theorem)다.

1. 모든 $f\in C_b(S)$ 에 대해 $\int f\thinspace d\mu_n\to\int f\thinspace d\mu$ .
2. 모든 유계 [균등연속](uniform-continuity.md) $f$ 에 대해 같은 수렴.
3. 모든 닫힌집합 $F$ 에 대해 $\limsup_n\mu_n(F)\le\mu(F)$ .
4. 모든 열린집합 $G$ 에 대해 $\liminf_n\mu_n(G)\ge\mu(G)$ .
5. $\mu(\partial A)=0$ 인 모든 Borel 집합 $A$ 에 대해 $\mu_n(A)\to\mu(A)$ .

3 과 4 는 등식이 아니라 부등식이다. 정의 절의 $\delta_{1/n}\Rightarrow\delta_0$ 에서 닫힌집합 $\lbrace 0\rbrace$ 은 $0\le 1$ 이고, 열린집합 $(0,1)$ 은 $1\ge 0$ 이다. 5 의 조건 $\mu(\partial A)=0$ 을 만족하는 $A$ 를 **$\mu$ 연속집합($\mu$-continuity set)** 이라 한다. 직관 절의 유리수 집합은 경계가 $\mathbb R$ 전체여서 연속집합이 아니다. $\mathbb R$ 에서 5 는 분포함수가 극한 분포함수의 연속점마다 수렴하는 것과 동치다.

## Prokhorov 정리

$S$ 가 완비 분리가능 거리공간([Polish 공간](polish-spaces.md))일 때

$$
\Pi\subseteq\mathcal P(S)\ \text{가 tight}
\iff
\Pi\ \text{가 약위상에서 상대적으로 콤팩트}.
$$

이것이 Prokhorov 정리(Prokhorov's theorem)다. 주로 쓰이는 것은 정방향으로, tight 한 족의 임의의 수열에서 약수렴하는 부분열을 뽑을 수 있다. 증명의 요지는 $S$ 의 셀 수 있는 조밀집합 위에서 대각선 논법으로 부분열을 뽑아 극한 범함수를 만들고, [Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)로 그 범함수를 측도로 나타낸 뒤, tightness 로 총질량이 1 임을 확인하는 것이다. 마지막 단계가 없으면 극한의 총질량이 1 보다 작을 수 있다. $\delta_n$ 의 부분열은 모든 $f\in C_c(\mathbb R)$ 에서 $f(n)\to 0$ 이어서 극한 범함수가 $0$ 이다.

[균등적분가능성](uniform-integrability.md)에서 본 Dunford–Pettis 정리(Dunford–Pettis theorem)와 같은 꼴이다.

| 층위 | 콤팩트성을 주는 조건 | 정리 |
| --- | --- | --- |
| $L^1$ 안의 밀도족 | 균등적분가능 (+ tight) | Dunford–Pettis |
| $\mathcal P(S)$ 안의 측도족 | tight | Prokhorov |

밀도의 값이 좁은 곳에서 커지는 것을 막는 조건이 균등적분가능성이고, [측도](measure.md)의 질량이 무한히 먼 곳으로 가는 것을 막는 조건이 tightness 다.

## Lévy 연속성 정리

$S=\mathbb R^d$ 에서는 시험함수를 복소지수로 줄일 수 있다. [특성함수](characteristic-functions.md) $\varphi_n(t)=\int e^{i\langle t,x\rangle}\thinspace d\mu_n(x)$ 에 대해

$$
\mu_n\Rightarrow\mu
\iff
\varphi_n(t)\to\varphi(t)\ \text{for all }t
$$

이며, 더 강하게 다음이 성립한다. $\varphi_n$ 이 각 점에서 어떤 함수 $\varphi$ 로 수렴하고 $\varphi$ 가 0 에서 연속이면, $\varphi$ 는 어떤 확률측도의 특성함수이고 $\mu_n$ 은 그 측도로 약수렴한다. 이것이 Lévy 연속성 정리(Lévy's continuity theorem)다.

0 에서의 연속성이 tightness 를 대신한다. $\mu_n=\delta_n$ 이면 $\varphi_n(t)=e^{int}$ 는 $t=0$ 에서만 수렴하므로 가정이 깨진다. [Fourier 변환](fourier-transform.md)이 tightness 를 원점 근방의 성질로 바꾼다. 중심극한정리의 표준 증명이 이 정리를 사용한다.

## 적률의 비보존

약수렴은 적률을 보존하지 않는다.

$$
\mu_n=\Bigl(1-\tfrac1n\Bigr)\delta_0+\tfrac1n\delta_n
$$

은 $\delta_0$ 으로 약수렴하지만 평균은 항상 1 이다. 위치 $n$ 의 질량 $1/n$ 이 평균에 $n\cdot 1/n=1$ 을 더한다. 유계 연속함수 $f$ 에서는 이 질량의 몫이 $f(n)/n$ 으로 $0$ 에 가므로 약수렴에는 영향이 없다.

$X_n\xrightarrow{d}X$ 이고 $\lbrace X_n\rbrace$ 이 균등적분가능이면 $\mathbb E\lbrack X_n\rbrack\to\mathbb E\lbrack X\rbrack$ 다. 위 반례의 $\lbrace X_n\rbrace$ 은 균등적분가능이 아니다.

## Skorokhod 표현정리

$S$ 가 Polish 이고 $\mu_n\Rightarrow\mu$ 이면, 하나의 확률공간 위에 $Y_n\sim\mu_n$ , $Y\sim\mu$ 인 확률변수들을 잡아 $Y_n\to Y$ 가 거의 확실히 성립하게 할 수 있다. 이것이 [Skorokhod 표현정리](skorokhod-representation.md)다.

거의 확실한 수렴을 가정하는 정리(Fatou 보조정리(Fatou's lemma), [지배 수렴 정리](dominated-convergence.md))를 분포 수렴에 적용하는 데 이 표현을 쓴다. 연속사상 정리(continuous mapping theorem) $X_n\xrightarrow{d}X\implies g(X_n)\xrightarrow{d}g(X)$ (단 $g$ 는 $\mu$ 거의 어디서나 연속)의 증명이 그 예다. $Y_n$ 은 원래 $X_n$ 과 분포만 같고, 원래 확률공간과는 관계가 없다.

## 수렴의 위계

$$
\text{거의 확실한 수렴}\implies\text{확률 수렴}\implies\text{분포 수렴}
$$

이고 역은 모두 거짓이다. 예외가 하나 있다. 극한이 상수 $c$ 이면 분포 수렴에서 확률 수렴이 따라 나온다. 집합 $\lbrace x:\vert x-c\vert\gt\varepsilon\rbrace$ 의 경계 $\lbrace c\pm\varepsilon\rbrace$ 은 $\delta_c$ 에서 확률이 $0$ 이므로, Portmanteau 정리의 5 에서 $\Pr\lbrack\vert X_n-c\vert\gt\varepsilon\rbrack\to 0$ 이다. [큰 수의 법칙](law-of-large-numbers.md)의 약한 형태가 이 경우다.

# 활용

## 극한정리의 표준 증명 구조

분포 극한을 증명하는 논증은 대개 두 단계다.

1. Tightness. 족이 tight 함을 보여 수렴 부분열의 존재를 확보한다. 보통 $\sup_n\mathbb E\lbrack\vert X_n\vert^p\rbrack\lt\infty$ 같은 적률 유계에 [Markov 부등식](concentration-inequalities.md)을 써서 얻는다.
2. 극한의 유일성. 모든 수렴 부분열이 같은 극한을 가짐을 보인다. 특성함수나 적률로 극한을 식별한다.

두 단계가 모두 성립하면 수열 전체가 수렴한다. 중심극한정리는 2 단계를 Lévy 연속성 정리로 처리해 1 단계를 생략할 수 있는 경우다. [Brown 운동](brownian-motion.md)의 구성에서 나오는 [Donsker 불변원리](donsker-invariance-principle.md)는 같은 두 단계를 함수공간 $C\lbrack 0,1\rbrack$ 위에서 밟고, 거기서는 tightness 확인이 논증의 대부분을 차지한다.

## 통계적 추론

추정량의 점근분포가 분포 수렴으로 진술된다. [최대가능도 추정](maximum-likelihood.md)량의 점근 정규성, [신뢰구간](confidence-intervals.md)의 유효성, 검정통계량의 귀무분포가 모두 분포 수렴이다. 델타 방법(delta method)은 연속사상 정리에 Taylor 전개를 결합한 것이고, [붓스트랩](bootstrap.md)의 타당성 증명은 재표본 분포가 원래 극한분포로 약수렴함을 보이는 일이다.

# 연관 문서

## 선수지식

- [상측도](pushforward-measure.md)
- [균등적분가능성](uniform-integrability.md)
- [확률론 개관](probability-overview.md)

## 더 알아보기

- [중심극한정리](central-limit-theorem.md)
- [특성함수](characteristic-functions.md)
- [Donsker 불변원리](donsker-invariance-principle.md)
- [최적 수송](optimal-transport.md)
- [Skorokhod 표현정리](skorokhod-representation.md)

#probability #measure_theory #theorem
