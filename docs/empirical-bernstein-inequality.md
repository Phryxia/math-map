# 경험적 Bernstein 부등식

# 개요

**경험적 Bernstein 부등식(empirical Bernstein inequality)** 은 [Bernstein 부등식](bernstein-inequality.md)의 분산 자리에 표본에서 계산한 표본분산을 넣어도 성립하게 고친 신뢰 한계다. 드문 사건을 $1000$ 번 지켜보아 $10$ 번 보았을 때, 그 사건의 확률이 얼마 이하인지 95% 의 확신으로 말하려 한다. Bernstein 부등식은 분산이 작다는 것을 써서 좁은 한계를 주지만, 그 분산은 모르는 확률로 정해지므로 바로 쓸 수 없다. 경험적 Bernstein 부등식은 표본분산이 참 분산보다 작게 나올 몫까지 한계에 더해, 관측값만으로 계산되는 한계를 준다.

# 직관

사건이 일어나면 $1$, 아니면 $0$ 인 독립 관측 $X_1,\dots,X_{1000}$ 의 평균이 $\bar X=0.01$ 이다. 사건의 참 확률을 $\mu$ 라 한다.

[집중부등식](concentration-inequalities.md) 문서의 Hoeffding 부등식은 값이 $\lbrack 0,1\rbrack$ 에 든다는 것만 쓰고, 확률 $0.95$ 이상으로 다음 한계를 준다.

$$
\mu\le\bar X+\sqrt{\frac{\log(1/0.05)}{2\cdot 1000}}=0.01+0.0387=0.0487
$$

Bernstein 부등식 문서의 예처럼 분산이 $0.0099$ 쯤으로 작으면 한계가 훨씬 좁아야 한다. 그런데 분산 $\mu(1-\mu)$ 는 모르는 $\mu$ 로 정해진다.

표본에서 분산을 계산하면 $0.0099$ 정도가 나온다. 이 값을 분산 자리에 그대로 넣으면, 표본분산이 우연히 작게 나온 경우에 한계가 틀린다. 그래서 표본분산의 제곱근이 참 표준편차보다 작게 나올 수 있는 몫을 더하고, 실패 확률 $0.05$ 를 두 부등식에 반씩 나눈다.

그 결과가 $\mu\le 0.0272$ 다. Hoeffding 부등식의 오차폭 $0.0387$ 이 $0.0172$ 로 준다.

# 정의

$X_1,\dots,X_n$ 은 독립이고 같은 분포를 따르며 값이 $\lbrack 0,1\rbrack$ 에 들고, $n\ge 2$ 다. 평균을 $\mu$, 분산을 $\sigma^2$, 표본평균을 $\bar X$ 라 한다. **표본분산(sample variance)** 은 다음이다.

$$
V_n=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2=\frac{1}{n(n-1)}\sum_{1\le i\lt j\le n}(X_i-X_j)^2
$$

$E\lbrack V_n\rbrack=\sigma^2$ 이다. 직관 절의 예에서는 $X_i$ 가운데 $10$ 개가 $1$ 이므로 둘째 식의 합은 $1$ 과 $0$ 이 짝지어진 $10\cdot 990$ 쌍에서 $1$ 씩을 더한 것이다. 그래서 $V_n=9900/(1000\cdot 999)\approx 0.00991$ 이다.

# 성질

## 경험적 Bernstein 부등식

$0\lt\delta\lt 1$ 이면 확률 $1-\delta$ 이상으로 다음이 성립한다[^1].

$$
\mu-\bar X\le\sqrt{\frac{2V_n\log(2/\delta)}{n}}+\frac{7\log(2/\delta)}{3(n-1)}
$$

직관 절의 예에서 $\delta=0.05$ 이면 $\log 40\approx 3.689$ 이고, 첫 항이 $0.00855$, 둘째 항이 $0.00862$ 다. 그래서 $\mu\le 0.0272$ 다. $X_i$ 대신 $1-X_i$ 에 적용하면 $\bar X-\mu$ 의 한계가 나온다.

증명의 요지. $L=\log(2/\delta)$ 로 두고 두 사건을 쓴다. 첫째는 Bernstein 부등식을 확률 꼴로 푼 것으로, 확률 $1-\delta/2$ 이상으로 다음이 성립한다[^2].

$$
\mu-\bar X\le\sqrt{\frac{2\sigma^2L}{n}}+\frac{L}{3n}
$$

둘째는 아래 절의 표본 표준편차의 집중으로, 확률 $1-\delta/2$ 이상으로 $\sigma\le\sqrt{V_n}+\sqrt{2L/(n-1)}$ 이다. 둘째를 첫째에 넣으면 늘어나는 항이 $2L/\sqrt{n(n-1)}$ 이고, 이것은 $2L/(n-1)$ 이하다. $L/(3n)$ 과 더하면 $7L/(3(n-1))$ 이하다.

## 표본 표준편차의 집중

같은 가정에서 확률 $1-\delta$ 이상으로 다음이 성립한다[^1].

$$
\sigma\le\sqrt{V_n}+\sqrt{\frac{2\log(1/\delta)}{n-1}}
$$

$X_i$ 하나를 바꿀 때 $(n-1)V_n$ 이 변하는 양은 $(n-1)V_n$ 자신으로 눌린다. 이런 함수를 **자기 유계 함수(self-bounding function)** 라 하고, 자기 유계 함수는 평균 둘레에 Bernstein 꼴로 모인다. 이 집중을 $\sqrt{V_n}$ 에 대한 한계로 바꾸면 위 식이 나온다.

## 표본이 많은 경우의 오차폭

$n$ 이 커지면 첫 항 $\sqrt{2V_nL/n}$ 이 둘째 항보다 크고, $V_n$ 은 $\sigma^2$ 으로 간다. 그러면 오차폭은 분산을 알 때의 Bernstein 한계와 같은 $\sqrt{2\sigma^2L/n}$ 정도다. 분산을 모르는 값은 $1/n$ 차수의 둘째 항으로만 치른다.

Hoeffding 부등식의 오차폭 $\sqrt{L/(2n)}$ 과 견주면 비가 $2\sigma$ 다. 직관 절의 예에서 $2\sigma\approx 0.2$ 이므로, 표본이 충분히 많으면 오차폭이 Hoeffding 부등식의 약 $1/5$ 이다.

## 치우친 표본분산을 쓰는 판본

표본분산을 $n$ 으로 나눈 $\hat V_n=\frac{n-1}{n}V_n$ 을 쓰고 값이 $\lbrack 0,b\rbrack$ 에 들면, 확률 $1-\delta$ 이상으로 다음이 성립한다[^3].

$$
\vert\bar X-\mu\vert\le\sqrt{\frac{2\hat V_n\log(3/\delta)}{n}}+\frac{3b\log(3/\delta)}{n}
$$

# 활용

- 분산을 쓰는 밴딧 규칙. [다중 슬롯머신](multi-armed-bandits.md)의 UCB(upper confidence bound) 규칙에서 Hoeffding 신뢰폭 대신 위 절의 신뢰폭을 쓰는 UCB-V 규칙은, 보상의 분산이 작은 팔에서 후회가 준다[^3].
- 표본분산 벌점(sample variance penalization). 학습에서 경험 위험에 표본분산의 제곱근을 더한 값을 최소화한다. 이 값은 경험적 Bernstein 부등식의 우변이므로, 참 위험의 상한을 최소화하는 것이다[^1].
- 몬테카를로 추정의 멈춤 규칙. 표본을 하나씩 더 뽑다가 경험적 Bernstein 신뢰폭이 원하는 상대 오차 안에 들면 멈춘다. 분산이 작은 문제에서는 Hoeffding 부등식으로 정한 표본 수보다 일찍 멈춘다[^4].
- [신뢰구간](confidence-intervals.md). 분포의 꼴을 가정하지 않고 값의 범위만 알 때, 표본평균의 신뢰구간을 관측값만으로 만든다.

[^1]: A. Maurer, M. Pontil, "Empirical Bernstein bounds and sample variance penalization", Proceedings of the 22nd Conference on Learning Theory (2009).

[^2]: S. Boucheron, G. Lugosi, P. Massart, Concentration Inequalities: A Nonasymptotic Theory of Independence, Oxford University Press, 2013, §2.8.

[^3]: J.-Y. Audibert, R. Munos, Cs. Szepesvári, "Exploration–exploitation tradeoff using variance estimates in multi-armed bandits", Theoretical Computer Science 410 (2009), 1876–1902.

[^4]: V. Mnih, Cs. Szepesvári, J.-Y. Audibert, "Empirical Bernstein stopping", Proceedings of the 25th International Conference on Machine Learning (2008), 672–679.

# 연관 문서

## 선수지식

- [Bernstein 부등식](bernstein-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #machine_learning
