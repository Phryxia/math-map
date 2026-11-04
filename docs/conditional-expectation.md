# 조건부 기댓값

# 개요

**조건부 기댓값(conditional expectation)** 은 일부 정보만 알 때 확률변수의 값을 가장 잘 예측한 값이다. 주사위 하나를 던져 나온 눈을 $X$ 라 하고 눈이 짝수인지만 알려 준다면, 짝수일 때의 예측은 $(2+4+6)/3=4$ 이고 홀수일 때는 $(1+3+5)/3=3$ 이다. 조건부 기댓값은 알려 준 정보마다 정해지는 예측을 하나의 확률변수로 묶고, 조건으로 건 사건의 확률이 $0$ 일 때까지 같은 방식으로 정의한다.

# 직관

주사위 두 개를 던져 합 $S$ 를 본다. 첫 눈 $i$ 만 알려 주었을 때 $S$ 의 예측값은, 첫 눈이 $i$ 인 순서쌍 여섯 개 위에서 $S$ 를 평균한 $i+3.5$ 다. 사건 $\lbrace i=1\rbrace,\dots,\lbrace i=6\rbrace$ 이 표본공간을 여섯 조각으로 나누고, 예측값은 조각마다 상수이며 그 상수는 조각 위의 평균이다.

조각마다 상수라는 것은 이 조각들이 생성하는 $\sigma$ 대수 $\mathcal G$ 에 대해 가측이라는 것이고, 조각 위의 평균이라는 것은 $\mathcal G$ 의 사건마다 $X$ 와 적분이 같다는 것이다. 일반적인 $\mathcal G$ 에는 조각이 없지만 이 두 조건은 그대로 쓸 수 있어 정의로 삼는다.

# 정의

## 조건부 기댓값

확률공간 $(\Omega, \mathcal F, P)$ 와 부분 $\sigma$ -대수 $\mathcal G \subseteq \mathcal F$ 와 $E\lvert X \rvert \lt\infty$ 를 만족하는 확률변수 $X$ 를 고정한다. 확률변수 $Y$ 가 다음 두 조건을 만족하면 $Y$ 를 $\mathcal G$ 에 대한 $X$ 의 **조건부 기댓값** 이라 하고 $Y = E\lbrack X \mid \mathcal G\rbrack$ 로 쓴다.

1. $Y$ 는 $\mathcal G$ 에 대한 [가측함수](measurable-functions.md)이고 적분 가능하다.
2. 모든 $A \in \mathcal G$ 에 대하여

$$
\int_A Y \thinspace dP \thickspace=\thickspace \int_A X \thinspace dP .
$$

조건 2를 부분적분 등식(partial averaging property)이라 한다. $A = \Omega$ 를 넣으면 $E\lbrack Y\rbrack = E\lbrack X\rbrack$ 다.

직관 절의 두 주사위에서 첫 눈을 $X_1$, $\mathcal G=\sigma(X_1)$ 이라 하면 $E\lbrack S\mid\mathcal G\rbrack=X_1+3.5$ 다. $A=\lbrace X_1\le2\rbrace$ 에서 확인하면 $\int_A S\thinspace dP=\frac13\cdot5=\frac53$ 이고 $\int_A(X_1+3.5)\thinspace dP=\frac16(4.5+5.5)=\frac53$ 이다.

확률변수 $Z$ 에 대한 조건부 기댓값은 $Z$ 가 생성하는 $\sigma$ -대수에 대한 조건부 기댓값이다.

$$
E\lbrack X \mid Z\rbrack \thickspace:=\thickspace E\lbrack X \mid \sigma(Z)\rbrack, \qquad \sigma(Z) = \lbrace Z^{-1}(B) : B \in \mathcal{B}(\mathbb{R})\rbrace.
$$

Doob–Dynkin 보조정리(Doob–Dynkin lemma)로 $\sigma(Z)$ 가측 확률변수는 어떤 Borel 함수 $g$ 에 대해 $g(Z)$ 의 꼴이므로, $E\lbrack X \mid Z\rbrack = g(Z)$ 인 함수 $g$ 가 존재한다. 이 $g$ 를 **회귀함수(regression function)** 라 한다. 개요의 주사위 하나에서 $Z$ 를 눈이 짝수이면 $1$, 홀수이면 $0$ 인 확률변수라 하면 $E\lbrack X\mid Z\rbrack=g(Z)$, $g(1)=4$, $g(0)=3$ 이다.

조건부 확률은 지시함수의 조건부 기댓값으로 정의한다.

$$
P(A \mid \mathcal{G}) \thickspace:=\thickspace E\lbrack\mathbf{1}\_A \mid \mathcal{G}\rbrack.
$$

같은 예에서 $P(X=6\mid Z)$ 는 짝수일 때 $1/3$, 홀수일 때 $0$ 이다.

# 성질

아래에서 $X$ 와 $Y$ 는 적분 가능하고 등식은 거의 확실한 의미다.

## 존재성과 유일성

$E\lvert X \rvert \lt\infty$ 이면 $E\lbrack X \mid \mathcal G\rbrack$ 가 존재하고, 거의 확실하게 유일하다.

$Y$ 와 $Y'$ 가 둘 다 조건을 만족한다고 하자. $A = \lbrace Y - Y' \gt\varepsilon\rbrace \in \mathcal G$ 에 대해 두 부분적분 등식을 빼면 $\int_A (Y - Y') \thinspace dP = 0$ 이고, 피적분함수가 $A$ 위에서 $\varepsilon$ 보다 크므로 $\varepsilon P(A) \le 0$ 이다. 따라서 $P(A) = 0$ 이다. $\varepsilon \downarrow 0$ 과 역할을 바꾼 논증으로 $Y = Y'$ 가 거의 확실하게 성립한다. 따라서 조건부 기댓값은 영집합 위의 값을 빼고 정해지고, 하나하나의 선택을 버전(version)이라 한다.

존재를 보이기 위해 먼저 $X \ge 0$ 라 하자. $\mathcal G$ 위에서 유한측도

$$
\nu(A) \thickspace=\thickspace \int_A X \thinspace dP, \qquad A \in \mathcal{G}
$$

를 정의한다. $P(A) = 0$ 이면 $\nu(A) = 0$ 이므로 $\nu \ll P\rvert_{\mathcal G}$ 이고, [Radon–Nikodym 정리](radon-nikodym.md)로 $\mathcal G$ 가측 밀도 $Y = d\nu / d(P\rvert_{\mathcal G})$ 가 존재한다. 이 $Y$ 가 정의의 두 조건을 그대로 만족한다. 일반적인 $X$ 는 $X = X^+ - X^-$ 로 분해하고 선형으로 결합한다.

## L² 정사영

$E\lbrack X^2\rbrack \lt\infty$ 인 경우에는 측도론 없이도 구성할 수 있다. $L^2(\Omega, \mathcal F, P)$ 는 내적

$$
\langle U, V \rangle \thickspace=\thickspace E\lbrack UV\rbrack
$$

를 가진 [Hilbert 공간](hilbert-spaces.md)이고, $L^2(\Omega, \mathcal G, P)$ 는 그 닫힌 부분공간이다. 정사영 정리로 $X$ 에 가장 가까운 원소 $Y$ 가 유일하게 존재하며, 최적성의 1차 조건은

$$
E\lbrack(X - Y) W\rbrack = 0 \quad \text{for all } W \in L^2(\Omega, \mathcal{G}, P)
$$

이다. $W = \mathbf 1_A$ 로 두면 부분적분 등식이 되므로 이 $Y$ 가 조건부 기댓값이다. 따라서 $L^2$ 에서 조건부 기댓값은 정사영 연산자이며, 특히 $E\lbrack E\lbrack X \mid \mathcal G\rbrack \mid \mathcal G\rbrack = E\lbrack X \mid \mathcal G\rbrack$ 라는 멱등성을 갖고 작용소 노름이 1이다. 일반적인 $L^1$ 의 경우는 $L^2$ 가 $L^1$ 에서 조밀하다는 사실과 아래의 수축성(contraction) 성질로 확장해 얻을 수도 있다.

## 이산 경우와의 일치

$\mathcal G = \sigma(B_1, B_2, \dots)$ 가 양의 확률을 갖는 가산 분할로 생성되면, $\mathcal G$ 가측 변수는 각 $B_k$ 위에서 상수다. $Y = \sum_k c_k \mathbf 1_{B_k}$ 를 $A = B_k$ 에 대한 부분적분 등식에 넣으면 $c_k P(B_k) = E\lbrack X \mathbf 1_{B_k}\rbrack$ 이므로

$$
c_k \thickspace=\thickspace \frac{E\lbrack X \mathbf{1}\_{B_k}\rbrack}{P(B_k)} \thickspace=\thickspace E\lbrack X \mid B_k\rbrack
$$

가 되어 초등적 정의와 일치한다. [유한 확률 공간](probability.md)에서 배우는 조건부 기댓값과 [Bayes 정리](bayes.md)의 계산은 모두 이 특수 경우다.

## 선형성

상수 $a$ 와 $b$ 에 대해

$$
E\lbrack aX + bY \mid \mathcal{G}\rbrack \thickspace=\thickspace a\thinspace E\lbrack X \mid \mathcal{G}\rbrack + b\thinspace E\lbrack Y \mid \mathcal{G}\rbrack.
$$

우변이 $\mathcal G$ 가측이고 부분적분 등식을 만족하므로 유일성으로 등식이 나온다.

## 단조성

$X \le Y$ 이면 $E\lbrack X \mid \mathcal G\rbrack \le E\lbrack Y \mid \mathcal G\rbrack$ 다. 실제로 $A = \lbrace E\lbrack X \mid \mathcal G\rbrack - E\lbrack Y \mid \mathcal G\rbrack \gt\varepsilon\rbrace$ 위에서 적분하면 모순이 나온다. 따름정리로 $\lvert E\lbrack X \mid \mathcal G\rbrack \rvert \le E\lbrack\lvert X \rvert \mid \mathcal G\rbrack$ 가 성립하고, 따라서 조건부 기댓값은 $L^1$ 위의 수축이다.

$$
E\big\lbrack\thinspace\big\vert E\lbrack X \mid \mathcal{G}\rbrack\big\vert\thinspace\big\rbrack \thickspace\le\thickspace E\lbrack\thinspace\vert X\vert\thinspace\rbrack.
$$

## 탑 성질

탑 성질(tower property)은 다음이다. $\mathcal H \subseteq \mathcal G \subseteq \mathcal F$ 이면

$$
E\big\lbrack\thinspace E\lbrack X \mid \mathcal{G}\rbrack \thinspace\big\vert\thinspace \mathcal{H}\thinspace\big\rbrack \thickspace=\thickspace E\lbrack X \mid \mathcal{H}\rbrack.
$$

좌변은 $\mathcal H$ 가측이다. $A \in \mathcal H \subseteq \mathcal G$ 에 대해 $\int_A E\lbrack E\lbrack X \mid \mathcal G\rbrack \mid \mathcal H\rbrack \thinspace dP = \int_A E\lbrack X \mid \mathcal G\rbrack \thinspace dP = \int_A X \thinspace dP$ 이며, 첫 등식은 $\mathcal H$ 에 대한 정의, 둘째 등식은 $A \in \mathcal G$ 이므로 $\mathcal G$ 에 대한 정의다. 유일성으로 결론이 난다. $\mathcal H$ 가 자명한 $\sigma$ 대수이면 $E\lbrack E\lbrack X\mid\mathcal G\rbrack\rbrack=E\lbrack X\rbrack$ 이고, 두 주사위에서 $E\lbrack X_1+3.5\rbrack=7=E\lbrack S\rbrack$ 다. [Martingale](martingales.md) 이론의 계산에서 이 성질을 되풀이해 쓴다.

## 알려진 인수 끌어내기

알려진 인수 끌어내기(taking out what is known)는 다음이다. $W$ 가 $\mathcal G$ 가측이고 $XW$ 가 적분 가능하면

$$
E\lbrack XW \mid \mathcal{G}\rbrack \thickspace=\thickspace W \thinspace E\lbrack X \mid \mathcal{G}\rbrack.
$$

$B \in \mathcal G$ 인 지시함수 $W = \mathbf 1_B$ 에 대해 확인한 뒤 단순함수, 단조극한([단조 수렴 정리](monotone-convergence.md))의 순서로 확장한다.

## 독립성

상수는 $\mathcal G$ 가측이고 $A \in \mathcal G$ 에 대해 $E\lbrack X \mathbf 1_A\rbrack = E\lbrack X\rbrack P(A)$ 이므로, $X$ 가 $\mathcal G$ 와 독립이면 $E\lbrack X \mid \mathcal G\rbrack = E\lbrack X\rbrack$ 다. 반대 극단으로 $X$ 가 $\mathcal G$ 가측이면 $E\lbrack X \mid \mathcal G\rbrack = X$ 다.

## 수렴 정리와 Jensen

조건 없는 적분의 수렴 정리들은 모두 조건부 버전을 갖는다. $0 \le X_n \uparrow X$ 이면 $E\lbrack X_n \mid \mathcal G\rbrack \uparrow E\lbrack X \mid \mathcal G\rbrack$ 이고(조건부 단조수렴), $\lvert X_n \rvert \le Z$ 이고 $X_n \to X$ 이면 $E\lbrack X_n \mid \mathcal G\rbrack \to E\lbrack X \mid \mathcal G\rbrack$ 이며([지배 수렴 정리](dominated-convergence.md)의 조건부 버전), $X_n \ge 0$ 이면 $E\lbrack\liminf X_n \mid \mathcal G\rbrack \le \liminf E\lbrack X_n \mid \mathcal G\rbrack$ 다(조건부 Fatou).

조건부 [Jensen 부등식](jensen-inequality.md)은 다음이다. $\varphi$ 가 [볼록](convexity.md)이고 $X$ 와 $\varphi(X)$ 가 적분 가능하면

$$
\varphi\big(E\lbrack X \mid \mathcal{G}\rbrack\big) \thickspace\le\thickspace E\lbrack\varphi(X) \mid \mathcal{G}\rbrack.
$$

볼록함수는 자신의 접선(지지선)들의 상한이다. 유리수 매개변수로 가산 집합 $\lbrace(a_n, b_n)\rbrace$ 을 골라 $\varphi(x) = \sup_n (a_n x + b_n)$ 로 쓸 수 있다. 각 $n$ 에 대해 $\varphi(X) \ge a_n X + b_n$ 이므로 단조성과 선형성으로 $E\lbrack\varphi(X) \mid \mathcal G\rbrack \ge a_n E\lbrack X \mid \mathcal G\rbrack + b_n$ 이고, 가산 상한을 취하면 영집합이 가산 번만 합쳐지므로 부등식이 거의 확실하게 유지된다.

$\varphi(x) = \lvert x \rvert^p$ 를 넣으면 $p \ge 1$ 인 모든 $L^p$ 에서 조건부 기댓값이 수축임이 따라 나온다. 이 사실은 [균등적분가능성](uniform-integrability.md)과 결합해 martingale 수렴 이론의 $L^1$ 수렴 판정에 쓰인다.

## 분산 분해와 최적 예측

$E\lbrack X^2\rbrack \lt\infty$ 일 때 조건부 분산(conditional variance)을 $\mathrm{Var}(X \mid \mathcal G) = E\lbrack X^2 \mid \mathcal G\rbrack - E\lbrack X \mid \mathcal G\rbrack^2$ 로 정의하면 전분산 공식(law of total variance)이 성립한다.

$$
\mathrm{Var}(X) \thickspace=\thickspace E\big\lbrack\mathrm{Var}(X \mid \mathcal{G})\big\rbrack \thickspace+\thickspace \mathrm{Var}\big(E\lbrack X \mid \mathcal{G}\rbrack\big).
$$

Pythagoras 정리의 확률적 표현이다. 두 주사위에서 $\mathrm{Var}(S)=35/6$ 이고 $\mathrm{Var}(E\lbrack S\mid X_1\rbrack)=\mathrm{Var}(X_1)=35/12$, $E\lbrack\mathrm{Var}(S\mid X_1)\rbrack=35/12$ 다. 또한 임의의 $\mathcal G$ 가측 제곱적분 가능 $W$ 에 대해

$$
E\big\lbrack(X - W)^2\big\rbrack \thickspace=\thickspace E\big\lbrack(X - E\lbrack X \mid \mathcal{G}\rbrack)^2\big\rbrack + E\big\lbrack(E\lbrack X \mid \mathcal{G}\rbrack - W)^2\big\rbrack
$$

이므로 제곱오차를 최소화하는 예측기는 $W = E\lbrack X \mid \mathcal G\rbrack$ 이다. 추정량의 분산을 줄이는 Rao–Blackwell 정리(Rao–Blackwell theorem)도 같은 항등식에서 유도된다[^1].

## 정칙 조건부 분포

각 $\omega$ 마다 $A \mapsto P(A \mid \mathcal G)(\omega)$ 가 진짜 확률측도가 되도록 버전을 고를 수 있는가는 자명하지 않다. 가산가법성을 요구하는 영집합이 사건마다 다르기 때문이다. 상태공간이 [Polish 공간](polish-spaces.md)(완비 가분 거리공간)이면 그런 버전, 곧 정칙 조건부 분포(regular conditional distribution)가 존재한다[^2]. 조건부 독립, Markov 성질, [Bayes 추론](bayesian-inference.md)의 사후분포가 이 분포로 정의된다.

# 활용

## Martingale 과 확률과정

시간 축을 가진 $\sigma$ -대수의 증가열 $\mathcal F_0 \subseteq \mathcal F_1 \subseteq \dots$, 곧 여과(filtration)를 두면 $E\lbrack X_{n+1} \mid \mathcal F_n\rbrack$ 은 "현재까지의 정보로 본 다음 값의 예측"이다. 이 예측이 현재 값과 같으면 Martingale 이다. 탑 성질에서 $E\lbrack X_n\rbrack = E\lbrack X_0\rbrack$ 가 나오고, 선택적 정지 정리, Doob 부등식, martingale 수렴 정리도 탑 성질로 증명된다. [Markov 연쇄](markov-chains.md)의 Markov 성질도 $E\lbrack f(X_{n+1}) \mid \mathcal F_n\rbrack = (Pf)(X_n)$ 라는 조건부 기댓값 등식으로 쓰는 것이 표준이다.

## 통계와 기계학습

회귀 문제에서 목표는 특징 $Z$ 로부터 반응 $X$ 를 예측하는 것이고, 제곱오차 기준의 정답은 회귀함수 $E\lbrack X \mid Z\rbrack$ 다. 선형회귀는 이 정사영을 $Z$ 의 아핀 함수들이 이루는 부분공간으로 제한한 근사이며, 비모수 회귀는 $E\lbrack X \mid Z\rbrack$ 자체를 추정한다. [최대가능도 추정](maximum-likelihood.md)의 EM(expectation–maximization) 알고리즘에서 E-단계는 잠재변수에 대한 조건부 기댓값 계산이고, [KL divergence](kl-divergence.md)(Kullback–Leibler)의 연쇄법칙도 조건부 분포에 대한 기댓값으로 표현된다.

## 연속 조건의 계산

조건이 연속 변수이면 원자가 없으므로 조각 위 평균으로 계산할 수 없고, 밀도를 통해

$$
E\lbrack X \mid Z = z\rbrack \thickspace=\thickspace \frac{\int x \thinspace f(x, z) \thinspace dx}{\int f(x, z) \thinspace dx}
$$

로 계산한다. 우변은 $Z$ 의 Borel 함수이고 [Fubini 정리](fubini-tonelli.md)로 부분적분 등식을 만족하므로 이 식이 성립한다. 분모가 0 인 $z$ 들의 집합은 $Z$ 의 분포에 대해 영집합이다. $P(Z=z)=0$ 이어도 이 값이 정해진다.

[^1]: Rick Durrett, Probability: Theory and Examples (5th ed.), Chapter 4, https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
[^2]: Russell Lyons and Yuval Peres, Probability on Trees and Networks, https://rdlyons.pages.iu.edu/prbtree/book.pdf

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [Radon–Nikodym 정리](radon-nikodym.md)

## 더 알아보기

- [Martingale](martingales.md)
- [Gauss 과정](gaussian-processes.md)
- [Kalman 필터](kalman-filter.md)
- [에르고딕 정리](ergodic-theorem.md)
- [충분통계량](sufficient-statistics.md)

#probability #measure_theory
