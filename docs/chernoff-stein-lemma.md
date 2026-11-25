# Chernoff–Stein 보조정리

# 개요

**Chernoff–Stein 보조정리(Chernoff–Stein lemma)** 는 두 분포 가운데 어느 쪽에서 표본이 나왔는지 가를 때, 한쪽 오류를 일정 수준 아래로 묶으면 다른 쪽 오류가 표본 수에 대해 지수적으로 줄고 그 지수가 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)라는 정리다. 동전을 $n$ 번 던져 공정한 동전인지 앞면 확률이 $1/4$ 인 동전인지 가르려면, $n$ 을 늘릴 때 틀릴 확률이 얼마나 빨리 줄어드는지 알아야 필요한 던지기 횟수를 정할 수 있다.

Chernoff–Stein 보조정리는 공정한 동전을 잘못 버릴 확률을 5% 처럼 고정했을 때, 치우친 동전을 공정하다고 볼 확률이 대략 $e^{-0.144n}$ 으로 줄어든다고 답한다.

# 직관

공정한 동전을 $P\_0$, 앞면 확률 $1/4$ 인 동전을 $P\_1$ 이라 하자. 한 번 던진 결과 $x$ 의 로그 가능도비는 다음과 같다.

$$
\ell(x)=\log\frac{P\_0(x)}{P\_1(x)}=\begin{cases}\log 2\approx 0.693&\text{앞면}\cr\log(2/3)\approx-0.405&\text{뒷면}\end{cases}
$$

[가설검정](hypothesis-testing.md)의 Neyman–Pearson 보조정리에 따르면 가장 좋은 검정은 $n$ 번의 $\ell$ 을 더한 값이 문턱보다 크면 공정하다고 판정한다.

동전이 공정하면 앞면과 뒷면이 반씩 나오므로 $\ell$ 의 평균은 $(0.693-0.405)/2\approx 0.144$ 다. [큰 수의 법칙](law-of-large-numbers.md)으로 $\frac1n\sum\ell(x\_i)$ 는 $0.144$ 로 간다. 문턱을 $n(0.144-\delta)$ 로 두면 공정한 동전을 잘못 버릴 확률은 $0$ 으로 간다.

치우친 동전이 이 문턱을 넘는 결과를 내면 그 결과 $x\_1,\dots,x\_n$ 에서 $P\_1^n$ 의 확률은 $P\_0^n$ 의 확률에 $e^{-\sum\ell}\le e^{-n(0.144-\delta)}$ 를 곱한 것 이하다. 그런 결과 전체의 $P\_0^n$ 확률은 $1$ 이하이므로, 치우친 동전을 공정하다고 볼 확률은 $e^{-n(0.144-\delta)}$ 이하다. $0.144$ 는 $\ell$ 의 평균, 곧 KL divergence $D(P\_0\Vert P\_1)=\frac12\log\frac43$ 이다.

# 정의

$P\_0$, $P\_1$ 이 유한 집합 $\mathcal X$ 위의 분포이고 모든 $x$ 에서 $P\_1(x)\gt 0$ 이라 하자. 표본 $X\_1,\dots,X\_n$ 이 $P\_0$ 또는 $P\_1$ 에서 독립으로 나온다. 검정은 집합 $A\_n\subset\mathcal X^n$ 이고, 표본이 $A\_n$ 에 들면 $P\_0$ 이라 판정한다.

두 오류 확률을 다음과 같이 둔다.

$$
\alpha\_n=P\_0^n(A\_n^c),\qquad\beta\_n=P\_1^n(A\_n)
$$

$0\lt\varepsilon\lt 1$ 에 대해 $\alpha\_n\le\varepsilon$ 인 검정 가운데 가장 작은 $\beta\_n$ 을 $\beta\_n^\ast(\varepsilon)$ 로 쓴다. 직관 절에서 $\alpha\_n$ 은 공정한 동전을 버릴 확률, $\beta\_n$ 은 치우친 동전을 공정하다고 볼 확률이다.

# 성질

## Chernoff–Stein 보조정리

모든 $0\lt\varepsilon\lt 1$ 에서 다음이 성립한다[^1][^2].

$$
\lim\_{n\to\infty}\frac1n\log\beta\_n^\ast(\varepsilon)=-D(P\_0\Vert P\_1)
$$

증명의 요지. $\delta\gt 0$ 에 대해 $B\_n=\lbrace x:\vert\frac1n\sum\ell(x\_i)-D\vert\le\delta\rbrace$ 로 둔다. 큰 수의 법칙으로 $P\_0^n(B\_n)\to 1$ 이다.

- 상한. $A\_n=B\_n$ 이면 $\alpha\_n\to 0$ 이고, $B\_n$ 위에서 $P\_1^n(x)\le P\_0^n(x)e^{-n(D-\delta)}$ 이므로 $\beta\_n\le e^{-n(D-\delta)}$ 다.
- 하한. $\alpha\_n\le\varepsilon$ 인 아무 검정 $A\_n$ 에서 $B\_n$ 위의 $P\_1^n(x)\ge P\_0^n(x)e^{-n(D+\delta)}$ 를 쓰면 $\beta\_n\ge e^{-n(D+\delta)}P\_0^n(A\_n\cap B\_n)$ 이다. $P\_0^n(A\_n\cap B\_n)\ge 1-\varepsilon-P\_0^n(B\_n^c)$ 는 $1-\varepsilon$ 으로 간다.

$\delta$ 를 $0$ 으로 보내면 극한이 나온다. 극한이 $\varepsilon$ 에 의존하지 않는다는 것은 $\alpha\_n$ 을 $0.01$ 로 묶든 $0.5$ 로 묶든 지수가 같다는 뜻이다.

## 지수의 비대칭

역할을 바꾸어 $\beta\_n$ 을 묶고 $\alpha\_n$ 을 줄이면 지수는 $D(P\_1\Vert P\_0)$ 이다. 직관 절의 동전에서 다음이 나온다.

$$
D(P\_1\Vert P\_0)=\frac14\log\frac12+\frac34\log\frac32\approx 0.131
$$

$D(P\_0\Vert P\_1)\approx 0.144$ 와 다르다. 어느 오류를 묶을지에 따라 필요한 표본 수가 달라진다.

## 두 오류를 함께 줄이는 지수

두 오류를 모두 지수적으로 줄일 때 $\alpha\_n\le e^{-nr}$ 이면 가장 좋은 $\beta\_n$ 의 지수는 다음과 같다[^3].

$$
e(r)=\min\bigl\lbrace D(Q\Vert P\_1):D(Q\Vert P\_0)\le r\bigr\rbrace
$$

$r\to 0$ 이면 $Q\to P\_0$ 이라 $e(0)=D(P\_0\Vert P\_1)$ 로 Chernoff–Stein 보조정리와 같다. 사전확률을 두고 두 오류의 가중합을 줄이면 지수는 $e(r)=r$ 인 점의 값이며, 다음 Chernoff 정보량(Chernoff information)과 같다[^1].

$$
C(P\_0,P\_1)=-\min\_{0\le\lambda\le 1}\log\sum\_xP\_0(x)^\lambda P\_1(x)^{1-\lambda}
$$

# 활용

- [순차확률비 검정](sequential-probability-ratio-test.md). 표본 수를 미리 정하지 않고 로그 가능도비의 합이 두 문턱 가운데 하나를 넘을 때 멈추면, $P\_0$ 아래 평균 표본 수가 $\log(1/\beta)/D(P\_0\Vert P\_1)$ 정도다. 고정 표본 검정의 지수와 같은 양이 나온다.
- 통신로 부호화의 역정리(converse coding theorem). 통신로 부호의 오류 확률 하한을 두 분포를 가르는 검정의 오류로 바꾸어, Chernoff–Stein 보조정리의 하한을 쓴다.
- 양자 가설검정. 두 밀도행렬을 가르는 검정에서 같은 진술이 [양자 상대 엔트로피](quantum-relative-entropy.md)의 양자 Stein 보조정리로 성립하고, 지수가 양자 상대 엔트로피다.
- 실험 설계. 두 가설 가운데 하나를 고르는 실험에서 측정 방법마다 $D(P\_0\Vert P\_1)$ 을 계산해, 같은 오류 수준에 필요한 표본 수가 가장 적은 측정을 고른다.

[^1]: T. M. Cover, J. A. Thomas, *Elements of Information Theory*, 2nd ed., Wiley, 2006, 11.8 절과 11.9 절.
[^2]: H. Chernoff, "A measure of asymptotic efficiency for tests of a hypothesis based on the sum of observations", *Annals of Mathematical Statistics* 23 (1952), 493–507.
[^3]: W. Hoeffding, "Asymptotically optimal tests for multinomial distributions", *Annals of Mathematical Statistics* 36 (1965), 369–401.

# 연관 문서

## 선수지식

- [KL divergence](kl-divergence.md)
- [가설검정](hypothesis-testing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #statistics #probability
