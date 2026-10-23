# 경험 과정

# 개요

**경험 과정(empirical process)** 은 함수족을 지표로 갖는 확률과정이다. 표본에서 만든 평균과 참 기댓값의 차이에 $\sqrt n$ 을 곱해 함수마다 값 하나를 주고, 함수족 전체에서 본 그 값의 최대를 다룬다.

함수족이 반직선의 지시함수들이면 그 최대가 Kolmogorov–Smirnov 거리이고, [Glivenko–Cantelli 정리](glivenko-cantelli.md)가 그 거리의 수렴을 준다. 일반 함수족에서 같은 결론이 성립하는지는 족의 크기에 달려 있고, 그 크기를 덮개수와 묶음수로 재는 것이 경험 과정 이론이다.

# 직관

$\lbrack 0,1\rbrack$ 위 균등분포에서 표본 $X_1,\dots,X_n$ 을 뽑고, 집합 $A$ 의 참 확률 $P(A)$ 를 표본 가운데 $A$ 에 든 것의 비율 $P_n(A)$ 로 추정한다. $A$ 가 $\lbrack 0,x\rbrack$ 꼴이면 두 값의 차이가 모든 $x$ 에서 동시에 $0$ 으로 간다. $A$ 를 Borel 집합 전체에서 고르면 어떻게 되는지 계산한다.

$A=\lbrace X_1,\dots,X_n\rbrace$ 으로 잡는다. 이 집합은 점 $n$ 개뿐이므로 $P(A)=0$ 이고, 표본의 모든 점이 들어 있으므로 $P_n(A)=1$ 이다. 차이가 $1$ 이고 $n$ 을 키워도 줄지 않는다.

표본을 보고 고른 집합이 족 안에 있어서 차이가 $1$ 이 됐다. 그래서 족을 유한 개로 근사할 수 있는 것으로 제한한다. 두 집합의 거리를 대칭차의 확률로 재면 족을 반지름 $\varepsilon$ 인 공 몇 개로 덮는지 셀 수 있고, 구간족은 유한 개로 덮이지만 Borel 집합 전체는 덮이지 않는다. 덮개가 유한 개면 그 중심마다 큰 수의 법칙을 쓰고 합집합 경계로 묶는다.

집합 하나를 고정하면 [중심극한정리](central-limit-theorem.md)가 차이의 크기를 $1/\sqrt n$ 으로 준다. 그러므로 $\sqrt n$ 을 곱하면 극한이 $0$ 이 아니고 평균 $0$ 인 [정규분포](normal-distribution.md)가 남는다. 족 전체에서 이 극한을 하나의 과정으로 다루는 것이 경험 과정이다.

# 정의

## 경험 측도

표본 $X_1,\dots,X_n$ 이 확률측도 $P$ 에서 독립으로 뽑혔을 때

$$P_n = \frac1n\sum_{i=1}^n \delta_{X_i}$$

을 **경험 측도**라 한다. $\delta_x$ 는 $x$ 에 질량 $1$ 을 둔 측도이고, 가측함수 $f$ 에 대해 $P_n f = \frac1n\sum_{i=1}^n f(X_i)$ 다. 참 기댓값은 $Pf = E\lbrack f(X)\rbrack$ 로 쓴다.

## 경험 과정

함수족 $\mathcal F$ 에 대해

$$\mathbb G_n f = \sqrt n\thinspace (P_n f - Pf), \qquad f\in\mathcal F$$

을 **경험 과정**이라 한다. 지표 집합이 $\mathcal F$ 이고 각 $f$ 에서 $\mathbb G_n f$ 가 확률변수다. 중심극한정리가 $f$ 하나를 고정했을 때의 극한을 주고, 경험 과정 이론은 족 전체에서 본

$$\Vert\mathbb G_n\Vert\_{\mathcal F} = \sup\_{f\in\mathcal F}\vert\mathbb G_n f\vert$$

을 다룬다. $\mathcal F$ 가 반직선의 지시함수족 $\lbrace 1\lbrack \cdot\le x\rbrack : x\in\mathbb R\rbrace$ 이면 $\mathbb G_n$ 의 값이 $\sqrt n\thinspace (F_n(x)-F(x))$ 이고 그 최대가 Kolmogorov–Smirnov 거리의 $\sqrt n$ 배다.

## Glivenko–Cantelli 족과 Donsker 족

$\mathcal F$ 가 **Glivenko–Cantelli 족**이라는 것은

$$\Vert P_n - P\Vert\_{\mathcal F} = \sup\_{f\in\mathcal F}\vert P_n f - Pf\vert \to 0$$

이 확률수렴으로 성립하는 것이다. 거의 확실한 수렴을 요구하면 강 Glivenko–Cantelli 족이다.

$\mathcal F$ 가 **Donsker 족**이라는 것은 $\mathbb G_n$ 이 유계함수 공간 $\ell^\infty(\mathcal F)$ 에서 [Gauss 과정](gaussian-processes.md) $\mathbb G$ 로 [약수렴](weak-convergence.md)하는 것이다. 극한의 평균은 $0$ 이고 [공분산](covariance.md)은

$$E\lbrack\mathbb G f\thinspace\mathbb G g\rbrack = Pfg - Pf\thinspace Pg$$

다. Donsker 족은 Glivenko–Cantelli 족이다.

## 덮개수와 묶음수

$\mathcal F$ 를 $L^r(Q)$ 노름의 반지름 $\varepsilon$ 인 공으로 덮는 최소 개수를 **덮개수** $N(\varepsilon,\mathcal F,L^r(Q))$ 라 한다.

$l\le f\le u$ 와 $\Vert u-l\Vert\_{L^r(P)}\lt \varepsilon$ 을 만족하는 묶음 $\lbrack l,u\rbrack$ 로 $\mathcal F$ 를 덮는 최소 개수를 **묶음수**(bracketing number) $N\_{\lbrack\thinspace\rbrack}(\varepsilon,\mathcal F,L^r(P))$ 라 한다. 묶음의 양 끝은 $\mathcal F$ 에 속하지 않아도 된다.

# 성질

## 묶음수 유한성과 균등 큰 수의 법칙

**정리.** 모든 $\varepsilon\gt 0$ 에서 $N\_{\lbrack\thinspace\rbrack}(\varepsilon,\mathcal F,L^1(P))$ 가 유한하면 $\mathcal F$ 는 Glivenko–Cantelli 족이다[^1].

증명의 요지. 묶음 $\lbrack l_j,u_j\rbrack$ 유한 개로 $\mathcal F$ 를 덮는다. $f$ 가 $j$ 번째 묶음에 들면

$$P_n f - Pf \le P_n u_j - Pu_j + P(u_j - l_j)$$

이고 오른쪽 둘째 항은 $\varepsilon$ 이하다. 첫째 항은 함수 유한 개에 대한 [큰 수의 법칙](law-of-large-numbers.md)이 $0$ 으로 보낸다. 아래쪽 경계는 $l_j$ 로 같은 계산을 한다.

## 대칭화

$\sigma_1,\dots,\sigma_n$ 이 $\pm1$ 을 같은 확률로 갖는 독립 부호이고 $P_n^{\circ}f = \frac1n\sum_{i=1}^n \sigma_i f(X_i)$ 이면

$$E\Vert P_n - P\Vert\_{\mathcal F} \le 2\thinspace E\Vert P_n^{\circ}\Vert\_{\mathcal F}$$

오른쪽은 [Rademacher 복잡도](rademacher-complexity.md)의 $\mathcal F$ 에 대한 값이다. 참 측도 $P$ 가 사라져 표본과 부호만 남으므로, 부호에 대한 조건부 계산으로 상한을 잡을 수 있다.

## 사슬 묶기와 Dudley 적분

**정리.** $\mathcal F$ 의 $L^2(P)$ 지름이 $\theta$ 이하이면 상수 $C$ 에 대해

$$E\Vert\mathbb G_n\Vert\_{\mathcal F} \le C\int\_0^{\theta}\sqrt{\log N(\varepsilon,\mathcal F,L^2(P))}\thinspace d\varepsilon$$

증명의 요지. 반지름 $\theta 2^{-k}$ 인 덮개의 중심 집합 $\mathcal F_k$ 를 단계마다 잡고, $f$ 를 각 단계에서 가장 가까운 중심 $\pi_k f$ 로 바꾼다. $\mathbb G_n f$ 를 증분 $\mathbb G_n(\pi_k f - \pi_{k-1}f)$ 의 합으로 쓰면 단계마다 증분이 유한 개이고, 그 최대값에 Massart 유한류 보조정리를 적용해 $\theta 2^{-k}\sqrt{\log\vert\mathcal F_k\vert}$ 꼴의 상한을 얻는다. $k$ 에 대한 합이 위 적분으로 묶인다.

이 적분이 유한한 것을 **Dudley 적분 조건**이라 한다. 덮개수가 $\varepsilon^{-d}$ 처럼 다항으로 커지면 로그가 $d\log(1/\varepsilon)$ 이고 적분이 수렴한다. 덮개수가 $e^{1/\varepsilon}$ 처럼 커지면 발산한다.

## Donsker 정리의 충분조건

**정리.** 묶음수가

$$\int\_0^1\sqrt{\log N\_{\lbrack\thinspace\rbrack}(\varepsilon,\mathcal F,L^2(P))}\thinspace d\varepsilon \lt \infty$$

를 만족하면 $\mathcal F$ 는 Donsker 족이다[^1].

**정리.** $\mathcal F$ 가 VC(Vapnik–Chervonenkis) 차원이 유한한 집합족의 지시함수족이면 Donsker 족이다. 일반 함수족에서는 [VC 차원](vc-dimension.md)을 부분그래프 집합족의 차원으로 바꾸고 제곱적분가능한 포락함수를 요구한다.

모수족 $\lbrace f\_\theta : \theta\in\Theta\rbrace$ 가 유계인 $\Theta\subset\mathbb R^d$ 위에서

$$\vert f\_{\theta_1} - f\_{\theta_2}\vert \le m\thinspace\Vert\theta_1-\theta_2\Vert$$

을 $Pm^2\lt\infty$ 인 $m$ 과 함께 만족하면 묶음수가 $\varepsilon^{-d}$ 꼴로 커지고 위 적분이 수렴한다.

## 극한 Gauss 과정

$\mathcal F$ 가 분포함수 $F$ 를 갖는 분포의 반직선 지시함수족이면 극한의 공분산은

$$F(x\wedge y) - F(x)F(y)$$

이고, 이 공분산을 갖는 과정이 [Brown 다리](brownian-bridge.md)다. [Donsker 불변원리](donsker-invariance-principle.md)의 경험과정 판본이 이 경우를 다룬다.

# 활용

## M-추정량의 점근 성질

모수 $\theta$ 를 $\theta\mapsto P_n m\_\theta$ 의 최대점으로 정하는 추정량에서, 일치성의 증명은 $\lbrace m\_\theta\rbrace$ 가 Glivenko–Cantelli 족임을 쓰고 점근 정규성의 증명은 미분한 족이 Donsker 족임을 쓴다. [최대가능도 추정](maximum-likelihood.md)이 $m\_\theta = \log p\_\theta$ 인 경우다.

## 통계학습의 일반화 경계

가설류의 손실함수족에 대한 $\Vert P_n - P\Vert\_{\mathcal F}$ 의 상한이 훈련오차와 일반화오차의 차이를 묶는다. Rademacher 복잡도는 대칭화를 거쳐, VC 차원은 성장함수를 거쳐 이 상한을 계산한다.

## 적합도 검정

$\Vert\mathbb G_n\Vert\_{\mathcal F}$ 의 극한분포가 검정통계량의 기각역을 준다. $\mathcal F$ 가 반직선족이면 [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)이고, Glivenko–Cantelli 정리의 적합도 검정 절이 그 경우다.

## 붓스트랩의 타당성

표본에서 다시 뽑아 만든 경험 측도 $P_n^{\ast}$ 에 대해 $\sqrt n\thinspace (P_n^{\ast} - P_n)$ 이 같은 극한 $\mathbb G$ 로 수렴하는지가 재표본 추출로 분포를 근사하는 방법의 근거다. $\mathcal F$ 가 Donsker 족이면 수렴한다[^1].

[^1]: A. W. van der Vaart, J. A. Wellner, *Weak Convergence and Empirical Processes*, Springer (1996). 묶음수와 균등 큰 수의 법칙은 §2.4, 묶음 적분과 Donsker 정리는 §2.5, 덮개수와 사슬 묶기는 §2.14, 붓스트랩의 타당성은 §3.6.

# 연관 문서

## 선수지식

- [Glivenko–Cantelli 정리](glivenko-cantelli.md)
- [Donsker 불변원리](donsker-invariance-principle.md)

## 더 알아보기

- [붓스트랩](bootstrap.md)

#statistics #probability #machine_learning
