# 조건부 기댓값

# 개요

조건부 기댓값 $E[X\mid\mathcal G]$ 는 부분 $\sigma$ 대수 $\mathcal G$ 에 담긴 정보만으로 $X$ 를 예측한 확률변수다. 정의는 두 조건이다. $\mathcal G$ 가측이고, $\mathcal G$ 의 모든 사건 위에서 $X$ 와 적분값이 같다. 존재와 거의 확실한 유일성은 [Radon–Nikodym 정리](radon-nikodym.md)에서 나온다.

사건 $B$ 에 대한 초등 조건부 기댓값 $E[X\mid B]=E[X\mathbf 1_B]/P(B)$ 는 $P(B)=0$ 이면 정의되지 않는다. $\sigma$ 대수로 조건을 거는 정의는 이 경우를 포함한다. [Martingale](martingales.md)과 일반 상태공간의 [Markov 연쇄](markov-chains.md), [상측도](pushforward-measure.md) 위의 조건부 분포를 이 정의로 세운다.

# 직관

## 조각 위의 평균

주사위 두 개를 던져 합 $S$ 를 본다. 첫 눈 $i$ 만 알려 주었을 때 $S$ 의 예측값은, 첫 눈이 $i$ 인 순서쌍 여섯 개 위에서 $S$ 를 평균한 $i+3.5$ 다. 사건 $\lbrace i=1\rbrace,\dots,\lbrace i=6\rbrace$ 이 표본공간을 여섯 조각으로 나누고, 예측값은 조각마다 상수이며 그 상수는 조각 위의 평균이다.

조각마다 상수라는 것은 이 조각들이 생성하는 $\sigma$ 대수 $\mathcal G$ 에 대해 가측이라는 것이고, 조각 위의 평균이라는 것은 $\mathcal G$ 의 사건마다 $X$ 와 적분이 같다는 것이다. 일반적인 $\mathcal G$ 에는 조각이 없지만 이 두 조건은 그대로 쓸 수 있어 정의로 삼는다.

## 정사영

제곱적분 가능한 확률변수의 공간은 [Hilbert 공간](hilbert-spaces.md)이고 $\mathcal G$ 가측인 것들은 닫힌 부분공간이다. $E[X\mid\mathcal G]$ 는 $X$ 를 이 부분공간에 내린 정사영이다. 오차 $X-E[X\mid\mathcal G]$ 가 모든 $\mathcal G$ 가측 변수와 직교한다는 것이 적분 일치 조건과 같은 말이다. 그래서 $E[X\mid\mathcal G]$ 는 제곱오차를 가장 작게 만드는 $\mathcal G$ 가측 예측이고, [선형회귀](linear-regression.md)의 회귀함수가 이것이다.

# 정의

## 조건부 기댓값

확률공간 $(\Omega, \mathcal F, P)$ 와 부분 $\sigma$ -대수 $\mathcal G \subseteq \mathcal F$ 와 $E\lvert X \rvert \lt\infty$ 를 만족하는 확률변수 $X$ 를 고정한다. 확률변수 $Y$ 가 다음 두 조건을 만족하면 $Y$ 를 $\mathcal G$ 에 대한 $X$ 의 조건부 기댓값이라 하고 $Y = E[X \mid \mathcal G]$ 로 쓴다.

1. $Y$ 는 $\mathcal G$ 에 대한 [가측함수](measurable-functions.md)이고 적분 가능하다.
2. 모든 $A \in \mathcal G$ 에 대하여

$$
\int_A Y \thinspace dP \thickspace=\thickspace \int_A X \thinspace dP .
$$

조건 2를 부분적분 등식(partial averaging property)이라 부른다. $A = \Omega$ 를 넣으면 특히 $E[Y] = E[X]$ 다.

확률변수 $Z$ 에 대한 조건부 기댓값은 $Z$ 가 생성하는 $\sigma$ -대수를 쓴 약속이다.

$$
E[X \mid Z] \thickspace:=\thickspace E[X \mid \sigma(Z)], \qquad \sigma(Z) = \lbrace Z^{-1}(B) : B \in \mathcal{B}(\mathbb{R})\rbrace.
$$

Doob–Dynkin 보조정리에 의해 $\sigma(Z)$ 가측 확률변수는 어떤 Borel 함수 $g$ 에 대해 $g(Z)$ 의 꼴이므로, $E[X \mid Z] = g(Z)$ 인 함수 $g$ 가 존재한다. 이 $g$ 를 회귀함수라 부른다.

조건부 확률은 지시함수의 조건부 기댓값으로 정의한다.

$$
P(A \mid \mathcal{G}) \thickspace:=\thickspace E[\mathbf{1}\_A \mid \mathcal{G}].
$$

## 존재성과 유일성

**정리.** $E\lvert X \rvert \lt\infty$ 이면 $E[X \mid \mathcal G]$ 가 존재하고, 거의 확실하게 유일하다.

*유일성.* $Y$ 와 $Y'$ 가 둘 다 조건을 만족한다고 하자. $A = \lbrace Y - Y' \gt\varepsilon\rbrace \in \mathcal G$ 에 대해 두 부분적분 등식을 빼면 $\int_A (Y - Y') \thinspace dP = 0$ 이고, 피적분함수가 $A$ 위에서 $\varepsilon$ 보다 크므로 $\varepsilon P(A) \le 0$ 이다. 따라서 $P(A) = 0$ 이다. $\varepsilon \downarrow 0$ 과 역할을 바꾼 논증으로 $Y = Y'$ 가 거의 확실하게 성립한다. 따라서 조건부 기댓값은 **버전**(version)까지만 결정되며, 등식은 모두 "거의 확실하게"로 읽어야 한다.

*존재성.* 먼저 $X \ge 0$ 라 하자. $\mathcal G$ 위에서 유한측도

$$
\nu(A) \thickspace=\thickspace \int_A X \thinspace dP, \qquad A \in \mathcal{G}
$$

를 정의한다. $P(A) = 0$ 이면 $\nu(A) = 0$ 이므로 $\nu \ll P\rvert_{\mathcal G}$ 이고, [Radon–Nikodym 정리](radon-nikodym.md)에 의해 $\mathcal G$ 가측 밀도 $Y = d\nu / d(P\rvert_{\mathcal G})$ 가 존재한다. 이 $Y$ 가 정의의 두 조건을 그대로 만족한다. 일반적인 $X$ 는 $X = X^+ - X^-$ 로 분해하고 선형으로 결합한다. 존재성 증명은 전부 Radon–Nikodym 정리에 의존한다.

## L2 정사영으로서의 정의

$E[X^2] \lt\infty$ 인 경우에는 측도론 없이도 구성할 수 있다. $L^2(\Omega, \mathcal F, P)$ 는 내적

$$
\langle U, V \rangle \thickspace=\thickspace E[UV]
$$

를 가진 [Hilbert 공간](hilbert-spaces.md)이고, $L^2(\Omega, \mathcal G, P)$ 는 그 닫힌 부분공간이다. 정사영 정리에 의해 $X$ 에 가장 가까운 원소 $Y$ 가 유일하게 존재하며, 최적성의 1차 조건은

$$
E[(X - Y) W] = 0 \quad \text{for all } W \in L^2(\Omega, \mathcal{G}, P)
$$

이다. $W = \mathbf 1_A$ 로 두면 부분적분 등식이 되므로 이 $Y$ 가 조건부 기댓값이다. 즉 $L^2$ 에서 조건부 기댓값은 정사영 연산자이며, 특히 $E[E[X \mid \mathcal G] \mid \mathcal G] = E[X \mid \mathcal G]$ 라는 멱등성을 갖고 작용소 노름이 1이다. 일반적인 $L^1$ 의 경우는 $L^2$ 가 $L^1$ 에서 조밀하다는 사실과 아래의 수축성(contraction) 성질로 확장해 얻을 수도 있다.

## 이산 경우와의 일치

$\mathcal G = \sigma(B_1, B_2, \dots)$ 가 양의 확률을 갖는 가산 분할로 생성되면, $\mathcal G$ 가측 변수는 각 $B_k$ 위에서 상수다. $Y = \sum_k c_k \mathbf 1_{B_k}$ 를 $A = B_k$ 에 대한 부분적분 등식에 넣으면 $c_k P(B_k) = E[X \mathbf 1_{B_k}]$ 이므로

$$
c_k \thickspace=\thickspace \frac{E[X \mathbf{1}\_{B_k}]}{P(B_k)} \thickspace=\thickspace E[X \mid B_k]
$$

가 되어 초등적 정의와 일치한다. [유한 확률 공간](probability.md)에서 배우는 조건부 기댓값과 [Bayes 정리](bayes.md)의 계산은 모두 이 특수 경우다.

# 성질

아래에서 $X$ 와 $Y$ 는 적분 가능하고 등식은 거의 확실한 의미다.

## 기본 연산 성질

**선형성.** 상수 $a$ 와 $b$ 에 대해

$$
E[aX + bY \mid \mathcal{G}] \thickspace=\thickspace a\thinspace E[X \mid \mathcal{G}] + b\thinspace E[Y \mid \mathcal{G}].
$$

증명은 우변이 $\mathcal G$ 가측이고 부분적분 등식을 만족함을 확인한 뒤 유일성을 쓰면 끝난다. 이후 성질들도 대부분 같은 전략을 따른다.

**단조성.** $X \le Y$ 이면 $E[X \mid \mathcal G] \le E[Y \mid \mathcal G]$ 다. 실제로 $A = \lbrace E[X \mid \mathcal G] - E[Y \mid \mathcal G] \gt\varepsilon\rbrace$ 위에서 적분하면 모순이 나온다. 따름정리로 $\lvert E[X \mid \mathcal G] \rvert \le E[\lvert X \rvert \mid \mathcal G]$ 가 성립하고, 따라서 조건부 기댓값은 $L^1$ 위의 수축이다.

$$
E\big[\thinspace\big|E[X \mid \mathcal{G}]\big|\thinspace\big] \thickspace\le\thickspace E[\thinspace|X|\thinspace].
$$

**탑 성질 (tower property).** $\mathcal H \subseteq \mathcal G \subseteq \mathcal F$ 이면

$$
E\big[\thinspace E[X \mid \mathcal{G}] \thinspace\big|\thinspace \mathcal{H}\thinspace\big] \thickspace=\thickspace E[X \mid \mathcal{H}].
$$

증명: 좌변은 $\mathcal H$ 가측이다. $A \in \mathcal H \subseteq \mathcal G$ 에 대해 $\int_A E[E[X \mid \mathcal G] \mid \mathcal H] \thinspace dP = \int_A E[X \mid \mathcal G] \thinspace dP = \int_A X \thinspace dP$ 이며, 첫 등식은 $\mathcal H$ 에 대한 정의, 둘째 등식은 $A \in \mathcal G$ 이므로 $\mathcal G$ 에 대한 정의다. 유일성으로 결론이 난다. 두 번 조건을 걸면 거친 쪽만 남는 이 성질을 Martingale 이론의 계산에서 되풀이해 쓴다.

**끌어내기 (taking out what is known).** $W$ 가 $\mathcal G$ 가측이고 $XW$ 가 적분 가능하면

$$
E[XW \mid \mathcal{G}] \thickspace=\thickspace W \thinspace E[X \mid \mathcal{G}].
$$

$B \in \mathcal G$ 인 지시함수 $W = \mathbf 1_B$ 에 대해 확인한 뒤 단순함수, 단조극한([단조 수렴 정리](monotone-convergence.md))의 순서로 확장한다.

**독립성.** $X$ 가 $\mathcal G$ 와 독립이면 $E[X \mid \mathcal G] = E[X]$ 다. 상수는 $\mathcal G$ 가측이고, $A \in \mathcal G$ 에 대해 $E[X \mathbf 1_A] = E[X] P(A)$ 이기 때문이다. 반대 극단으로 $X$ 가 $\mathcal G$ 가측이면 $E[X \mid \mathcal G] = X$ 다.

## 수렴 정리와 Jensen

조건 없는 적분의 수렴 정리들은 모두 조건부 버전을 갖는다. $0 \le X_n \uparrow X$ 이면 $E[X_n \mid \mathcal G] \uparrow E[X \mid \mathcal G]$ 이고(조건부 단조수렴), $\lvert X_n \rvert \le Z$ 이고 $X_n \to X$ 이면 $E[X_n \mid \mathcal G] \to E[X \mid \mathcal G]$ 이며([지배 수렴 정리](dominated-convergence.md)의 조건부 버전), $X_n \ge 0$ 이면 $E[\liminf X_n \mid \mathcal G] \le \liminf E[X_n \mid \mathcal G]$ 다(조건부 Fatou).

**조건부 Jensen 부등식.** $\varphi$ 가 [볼록](convexity.md)이고 $X$ 와 $\varphi(X)$ 가 적분 가능하면

$$
\varphi\big(E[X \mid \mathcal{G}]\big) \thickspace\le\thickspace E[\varphi(X) \mid \mathcal{G}].
$$

*증명 스케치.* 볼록함수는 자신의 접선(지지선)들의 상한이다. 유리수 매개변수로 가산 집합 $\lbrace(a_n, b_n)\rbrace$ 을 골라 $\varphi(x) = \sup_n (a_n x + b_n)$ 로 쓸 수 있다. 각 $n$ 에 대해 $\varphi(X) \ge a_n X + b_n$ 이므로 단조성과 선형성으로 $E[\varphi(X) \mid \mathcal G] \ge a_n E[X \mid \mathcal G] + b_n$ 이고, 가산 상한을 취하면 영집합이 가산 번만 합쳐지므로 부등식이 거의 확실하게 유지된다.

$\varphi(x) = \lvert x \rvert^p$ 를 넣으면 $p \ge 1$ 인 모든 $L^p$ 에서 조건부 기댓값이 수축임이 따라 나온다. 이 사실은 [균등적분성](uniform-integrability.md)과 결합해 martingale 수렴 이론의 $L^1$ 수렴 판정에 쓰인다.

## 분산 분해와 최적 예측

$E[X^2] \lt\infty$ 일 때 조건부 분산을 $\mathrm{Var}(X \mid \mathcal G) = E[X^2 \mid \mathcal G] - E[X \mid \mathcal G]^2$ 로 정의하면 전분산 공식이 성립한다.

$$
\mathrm{Var}(X) \thickspace=\thickspace E\big[\mathrm{Var}(X \mid \mathcal{G})\big] \thickspace+\thickspace \mathrm{Var}\big(E[X \mid \mathcal{G}]\big).
$$

Pythagoras 정리의 확률적 표현이다. 또한 임의의 $\mathcal G$ 가측 제곱적분 가능 $W$ 에 대해

$$
E\big[(X - W)^2\big] \thickspace=\thickspace E\big[(X - E[X \mid \mathcal{G}])^2\big] + E\big[(E[X \mid \mathcal{G}] - W)^2\big]
$$

이므로 제곱오차를 최소화하는 예측기는 $W = E[X \mid \mathcal G]$ 이다. 통계학에서 "조건부 평균이 최적 예측"이라는 표어가 이것이며, 추정량의 개선을 다루는 Rao–Blackwell 정리도 같은 항등식의 따름이다[^1].

## 정칙 조건부 분포

각 $\omega$ 마다 $A \mapsto P(A \mid \mathcal G)(\omega)$ 가 진짜 확률측도가 되도록 버전을 고를 수 있는가는 자명하지 않다. 가산가법성을 요구하는 영집합이 사건마다 다르기 때문이다. 상태공간이 Polish 공간(완비 가분 거리공간)이면 정칙 조건부 분포가 존재한다는 것이 표준 정리이며[^2], 이 결과 덕분에 "조건부로 분포를 갖는다"는 서술이 안전하다. 조건부 독립, Markov 성질, 그리고 [Bayes 추론](bayesian-inference.md)의 사후분포가 모두 이 위에서 정의된다.

# 활용

## Martingale 과 확률과정

시간 축을 가진 $\sigma$ -대수의 증가열 $\mathcal F_0 \subseteq \mathcal F_1 \subseteq \dots$ (filtration)을 두면 $E[X_{n+1} \mid \mathcal F_n]$ 은 "현재까지의 정보로 본 다음 값의 예측"이다. 이 예측이 현재 값과 같으면 Martingale 이다. 탑 성질은 곧바로 $E[X_n] = E[X_0]$ 를 주고, 여기서 선택적 정지 정리, Doob 부등식, martingale 수렴 정리가 뻗어 나온다. [Markov 연쇄](markov-chains.md)의 Markov 성질도 $E[f(X_{n+1}) \mid \mathcal F_n] = (Pf)(X_n)$ 라는 조건부 기댓값 등식으로 쓰는 것이 표준이다.

## 통계와 기계학습

회귀 문제에서 목표는 특징 $Z$ 로부터 반응 $X$ 를 예측하는 것이고, 제곱오차 기준의 정답은 회귀함수 $E[X \mid Z]$ 다. [선형회귀](linear-regression.md)는 이 정사영을 $Z$ 의 아핀 함수들이 이루는 부분공간으로 제한한 근사이며, 비모수 회귀는 $E[X \mid Z]$ 자체를 추정한다. [최대가능도 추정](maximum-likelihood.md)의 EM 알고리즘에서 E-단계는 문자 그대로 잠재변수에 대한 조건부 기댓값 계산이고, [KL divergence](kl-divergence.md)(Kullback–Leibler)의 연쇄법칙도 조건부 분포에 대한 기댓값으로 표현된다.

## 연속 조건의 계산

조건이 연속 변수이면 원자가 없으므로 조각 위 평균으로 계산할 수 없고, 밀도를 통해

$$
E[X \mid Z = z] \thickspace=\thickspace \frac{\int x \thinspace f(x, z) \thinspace dx}{\int f(x, z) \thinspace dx}
$$

로 계산한다. 이 표현이 정당한 이유는 우변이 $Z$ 의 Borel 함수이고 Fubini 정리로 부분적분 등식을 만족하기 때문이며, 분모가 0 인 $z$ 들의 집합은 $Z$ 의 분포에 대해 영집합이다. 조건이 영확률 사건이라는 사실과 무관하게 정의가 작동한다는 점이 측도론적 정의의 실질적인 이득이다.

[^1]: Rick Durrett, Probability: Theory and Examples (5th ed.), Chapter 4, https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
[^2]: Russell Lyons and Yuval Peres, Probability on Trees and Networks, https://rdlyons.pages.iu.edu/prbtree/book.pdf

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [Radon–Nikodym 정리](radon-nikodym.md)

## 더 알아보기

- [Martingale](martingales.md)
- [Gauss 과정](gaussian-processes.md)

#probability #measure_theory
