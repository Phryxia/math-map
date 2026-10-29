# 충분통계량

# 개요

**충분통계량(sufficient statistic)** 은 표본을 요약한 값 가운데 모수에 대한 정보를 하나도 잃지 않은 것이다. 동전을 $10$ 번 던져 앞면이 나올 확률을 추정할 때, 앞면과 뒷면이 나온 순서까지 기록해야 하는지 앞면의 개수만 알면 되는지를 정해야 한다. 충분통계량은 요약값이 주어졌을 때 원래 표본의 분포가 모수에 의존하지 않는지를 보아 이것을 판정한다.

# 직관

앞면이 나올 확률을 $p$ 라 하고 $10$ 번 던져 앞면이 $7$ 번 나왔다. 앞면이 $7$ 번인 특정한 순서 하나가 나올 확률은 $p^7(1-p)^3$ 이고, 앞면이 $7$ 번일 확률은 $\binom{10}7p^7(1-p)^3$ 이다.

그러므로 앞면이 $7$ 번이라는 것을 알 때 특정한 순서가 나왔을 조건부확률은 $1/\binom{10}7=1/120$ 이다. 이 값에는 $p$ 가 없다. 앞면의 개수를 안 뒤에 순서를 보는 것은 $p$ 와 관계없는 제비뽑기를 보는 것과 같아서, 순서에는 $p$ 에 대한 정보가 남아 있지 않다.

첫 번째 던지기의 결과만 기록하면 사정이 다르다. 첫 번째가 앞면이라는 것을 알아도 나머지 $9$ 번의 분포에는 $p$ 가 그대로 남는다. 앞면의 개수는 충분하고 첫 번째 결과는 충분하지 않다.

# 정의

$X$ 의 분포가 모수 $\theta\in\Theta$ 로 정해지는 모형 $\lbrace P_\theta\rbrace$ 와 통계량 $T=T(X)$ 가 있다. 모든 사건 $A$ 에 대해 [조건부 기댓값](conditional-expectation.md) $P_\theta(X\in A\mid T)$ 를 $\theta$ 에 의존하지 않는 $T$ 의 함수로 고를 수 있으면 $T$ 를 $\theta$ 에 대한 충분통계량이라 한다.

다른 모든 충분통계량의 함수인 충분통계량을 **최소충분통계량(minimal sufficient statistic)** 이라 한다. 모든 $\theta$ 에서 $\mathbb E_\theta\lbrack g(T)\rbrack=0$ 이면 모든 $\theta$ 에서 $g(T)=0$ 이 거의 확실하게 성립할 때 $T$ 를 **완비(complete)** 라 한다. 분포가 $\theta$ 에 의존하지 않는 통계량을 **보조통계량(ancillary statistic)** 이라 한다.

# 성질

이 절에서 $X=(X_1,\dots,X_n)$ 은 독립이고 같은 분포를 따르는 표본이고, $p(x\mid\theta)$ 는 $X$ 의 밀도나 확률질량함수다.

## 인수분해 정리

**정리(Fisher–Neyman 인수분해 정리, Fisher–Neyman factorization theorem).** $T$ 가 충분통계량인 것은 음이 아닌 함수 $g$ 와 $h$ 가 있어 다음이 성립하는 것과 동치다.[^1]

$$
p(x\mid\theta)=g\bigl(T(x),\theta\bigr)\thinspace h(x)
$$

이산인 경우의 증명은 [지수족](exponential-families.md)의 인수분해 절에 있다. 연속인 경우와 일반적인 지배된 모형족은 Halmos 와 Savage 가 증명했다.[^2]

정규분포 $N(\mu,\sigma^2)$ 의 표본에서 밀도는 $\sum_ix_i$ 와 $\sum_ix_i^2$ 를 통해서만 $(\mu,\sigma^2)$ 와 엮이므로 이 두 값이 충분통계량이다. $\lbrack 0,\theta\rbrack$ 의 [균등분포](uniform-distribution.md)에서 밀도는 $\theta^{-n}\mathbf 1\lbrace\max_ix_i\le\theta\rbrace$ 이므로 최댓값인 [순서통계량](order-statistics.md) $X_{(n)}$ 이 충분통계량이다.

## 최소충분성의 판정

**정리.** 두 표본점 $x$, $y$ 에 대해 $p(x\mid\theta)/p(y\mid\theta)$ 가 $\theta$ 에 의존하지 않는 것이 $T(x)=T(y)$ 와 동치이면 $T$ 는 최소충분통계량이다.[^1]

동전의 예에서 $p(x\mid p)/p(y\mid p)=\bigl(p/(1-p)\bigr)^{s(x)-s(y)}$ 이고, $s$ 는 앞면의 개수다. 이 비가 $p$ 에 의존하지 않는 것은 $s(x)=s(y)$ 와 동치이므로 앞면의 개수가 최소충분통계량이다.

## Rao–Blackwell 정리

**정리(Rao–Blackwell 정리, Rao–Blackwell theorem).** $\delta(X)$ 가 $\tau(\theta)$ 의 추정량이고 분산이 유한하며 $T$ 가 충분통계량이면, $\delta^\ast=\mathbb E\lbrack\delta(X)\mid T\rbrack$ 는 추정량이고 모든 $\theta$ 에서 다음이 성립한다.

$$
\mathbb E_\theta\lbrack\delta^\ast\rbrack=\mathbb E_\theta\lbrack\delta(X)\rbrack,\qquad\mathrm{Var}\_\theta(\delta^\ast)\le\mathrm{Var}\_\theta\bigl(\delta(X)\bigr)
$$

증명의 요지. 충분성에 의해 $\mathbb E\lbrack\delta(X)\mid T\rbrack$ 가 $\theta$ 에 의존하지 않으므로 표본만으로 계산되는 추정량이다. 평균은 반복 기댓값의 법칙으로 같고, 분산은 $\mathrm{Var}(\delta)=\mathrm{Var}(\delta^\ast)+\mathbb E\lbrack\mathrm{Var}(\delta\mid T)\rbrack$ 에서 둘째 항이 음이 아니므로 줄어든다.

동전의 예에서 첫 번째 결과 $X_1$ 은 $p$ 의 불편추정량이다. 앞면의 개수 $S$ 로 조건을 걸면 대칭성에 의해 $\mathbb E\lbrack X_1\mid S\rbrack=S/10$ 이고, 분산이 $p(1-p)$ 에서 $p(1-p)/10$ 으로 줄어든다.

## Lehmann–Scheffé 정리

**정리(Lehmann–Scheffé 정리, Lehmann–Scheffé theorem).** $T$ 가 완비충분통계량이고 $g(T)$ 가 $\tau(\theta)$ 의 불편추정량이면, $g(T)$ 는 $\tau(\theta)$ 의 불편추정량 가운데 모든 $\theta$ 에서 분산이 가장 작은 유일한 것이다.[^1]

증명의 요지. 불편추정량 $\delta$ 가 있으면 Rao–Blackwell 정리로 $\mathbb E\lbrack\delta\mid T\rbrack$ 는 분산이 더 작은 $T$ 의 함수인 불편추정량이다. $T$ 의 함수인 불편추정량 둘의 차는 모든 $\theta$ 에서 평균이 $0$ 이므로 완비성에 의해 $0$ 이다.

## Basu 정리

**정리(Basu 정리, Basu's theorem).** $T$ 가 완비충분통계량이면 $T$ 는 모든 보조통계량과 독립이다.[^3]

증명의 요지. 보조통계량 $V$ 와 사건 $B$ 에 대해 $P(V\in B)$ 는 $\theta$ 와 관계없는 상수 $c$ 이고, 충분성에 의해 $P(V\in B\mid T)$ 도 $\theta$ 와 관계없는 $T$ 의 함수다. $P(V\in B\mid T)-c$ 는 모든 $\theta$ 에서 평균이 $0$ 이므로 완비성에 의해 $0$ 이다.

분산 $\sigma^2$ 을 아는 정규분포의 표본에서 표본평균은 $\mu$ 에 대한 완비충분통계량이고 표본분산은 보조통계량이다. 그래서 둘이 독립이다.

# 활용

- [Bayes 추론](bayesian-inference.md)에서 사후분포는 인수분해 정리의 $g(T(x),\theta)$ 를 통해서만 자료에 의존한다. 자료를 하나씩 받아 사후분포를 갱신할 때 충분통계량만 저장하면 된다.
- [Fisher 정보](fisher-information.md)에서 통계량 $T$ 가 담은 정보는 표본 전체의 정보 이하이고, 정칙 조건 아래 $T$ 가 충분통계량이면 두 정보가 같다.
- [기댓값 최대화 알고리즘](em-algorithm.md)(expectation–maximization, EM)에서 완전자료가 지수족이면 E 단계는 충분통계량의 조건부 기댓값만 계산한다.

[^1]: G. Casella, R. L. Berger, *Statistical Inference*, 2nd ed., Duxbury (2002), §6.2 와 §7.3. 인수분해 정리, 최소충분성 판정, Rao–Blackwell 정리와 Lehmann–Scheffé 정리.
[^2]: P. R. Halmos, L. J. Savage, "Application of the Radon–Nikodym theorem to the theory of sufficient statistics", *Annals of Mathematical Statistics* 20 (1949), 225–241.
[^3]: D. Basu, "On statistics independent of a complete sufficient statistic", *Sankhyā* 15 (1955), 377–380.

# 연관 문서

## 선수지식

- [지수족](exponential-families.md)
- [조건부 기댓값](conditional-expectation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
