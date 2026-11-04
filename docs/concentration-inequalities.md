# 집중부등식

# 개요

**집중부등식(concentration inequality)** 은 확률변수가 자기 기댓값에서 크게 벗어날 확률의 상한을 주는 부등식이다. 동전을 $n$ 번 던져 앞면의 비율로 앞면이 나올 확률을 추정할 때, [큰 수의 법칙](law-of-large-numbers.md)은 비율이 참값에 다가간다고만 말하고 몇 번 던져야 오차가 $0.01$ 안에 드는지는 답하지 않는다. 집중부등식은 독립인 시행의 평균이 기댓값에서 $t$ 이상 벗어날 확률이 $n t^2$ 에 대해 지수적으로 작다는 것을 보여, 필요한 시행 횟수를 계산하게 해 준다.

# 직관

동전을 $1000$ 번 던져 앞면의 수를 $S$ 라 한다. 앞면 확률이 $1/2$ 일 때 $S\ge550$, 곧 앞면 비율이 $0.55$ 이상일 확률의 상한을 구한다. 평균 $500$ 만 쓰면 $S\ge550$ 일 확률은 $500/550\approx0.91$ 이하라는 것밖에 나오지 않는다. 분산 $250$ 을 쓰면 $\vert S-500\vert\ge50$ 일 확률이 $250/50^2=0.1$ 이하다.

던지기마다의 지수 $e^{\lambda X_i}$ 를 쓰면 상한이 훨씬 작아진다. 던지기가 독립이므로 $E\lbrack e^{\lambda S}\rbrack=\bigl((1+e^\lambda)/2\bigr)^{1000}$ 으로 곱이 나뉜다. $S\ge550$ 이면 $e^{\lambda S}\ge e^{550\lambda}$ 이므로, 평균만 쓴 앞의 논법을 $e^{\lambda S}$ 에 적용하고 $\lambda$ 를 고르면 상한이 약 $e^{-5}\approx0.0067$ 이다. 던지는 횟수 $1000$ 이 지수에 들어가므로 횟수를 두 배로 하면 상한이 제곱이 된다.

# 정의

## 꼬리 확률

확률변수 $X$ 와 $t\gt0$ 에 대해 $P(X-E\lbrack X\rbrack\ge t)$ 와 $P(\vert X-E\lbrack X\rbrack\vert\ge t)$ 를 **꼬리 확률(tail probability)** 이라 하고, 그 상한을 주는 부등식을 **집중부등식** 이라 한다. 직관 절에서 $P(S-500\ge50)$ 이 꼬리 확률이다.

## 누율생성함수

$\psi_X(\lambda)=\log E\lbrack e^{\lambda X}\rbrack$ 를 $X$ 의 **누율생성함수(cumulant generating function)** 라 한다. 앞면이면 $1$, 뒷면이면 $0$ 인 공정한 동전에서 $\psi(\lambda)=\log\bigl((1+e^\lambda)/2\bigr)$ 이고, $X_i$ 가 독립이면 $\psi_{\sum X_i}=\sum_i\psi_{X_i}$ 다.

## sub-Gaussian

평균이 $0$ 인 확률변수 $X$ 가 어떤 $\sigma \gt 0$ 에 대해

$$
E\big\lbrack e^{\lambda X}\big\rbrack\thickspace\le\thickspace \exp\negthinspace\Big(\frac{\lambda^2 \sigma^2}{2}\Big) \quad \text{for all } \lambda \in \mathbb{R}
$$

를 만족하면 $X$ 를 매개변수 $\sigma$ 의 **sub-Gaussian** 이라 한다. 같은 확률로 $\pm1$ 인 확률변수는 $E\lbrack e^{\lambda X}\rbrack=\cosh\lambda\le e^{\lambda^2/2}$ 이므로 $\sigma=1$ 의 sub-Gaussian 이다. 평균 $0$, 분산 $\sigma^2$ 인 [정규분포](normal-distribution.md)는 등호로 이 조건을 만족한다.

# 성질

## Markov 와 Chebyshev

Markov 부등식(Markov's inequality)은 다음이다. 비음 확률변수 $X$ 와 $t\gt 0$ 에 대해

$$
P(X \ge t) \thickspace\le\thickspace \frac{E\lbrack X\rbrack}{t}.
$$

$X \ge t \cdot \mathbf 1\lbrace X \ge t\rbrace$ 의 양변에 기댓값을 취하면 된다([확률변수](random-variables.md)의 기댓값의 단조성). 직관 절의 $500/550$ 이 이 부등식이다.

Chebyshev 부등식(Chebyshev's inequality)은 다음이다. $\mathrm{Var}(X) \lt\infty$ 이면

$$
P\big(\vert X - E\lbrack X\rbrack\vert \ge t\big) \thickspace\le\thickspace \frac{\mathrm{Var}(X)}{t^2}.
$$

$(X - E\lbrack X\rbrack)^2$ 에 Markov 부등식을 적용한 결과다. 일반적으로 비감소 비음 함수 $\varphi$ 에 대해 $P(X \ge t) \le E\lbrack\varphi(X)\rbrack / \varphi(t)$ 가 성립한다.

## Chernoff 기법

$\lambda \gt 0$ 에 대해 $\varphi(x) = e^{\lambda x}$ 를 택하면

$$
P(X \ge t) \thickspace\le\thickspace e^{-\lambda t} \thinspace E\big\lbrack e^{\lambda X}\big\rbrack
\quad\Longrightarrow\quad
P(X \ge t) \thickspace\le\thickspace \exp\Big(-\sup_{\lambda \gt 0} \big(\lambda t - \log E\lbrack e^{\lambda X}\rbrack\big)\Big).
$$

우변의 지수는 누율생성함수 $\psi$ 의 [볼록 공액](convex-conjugate.md), 곧 Legendre 변환이며, 이 최적화 절차를 Chernoff 기법(Chernoff method)이라 한다. 독립합에서는 $\psi$ 가 항별로 더해지므로 계산이 항 단위로 나뉜다. 직관 절의 동전에서 최적의 $\lambda=\log(11/9)$ 이고 지수는 $1000\bigl(0.55\log1.1+0.45\log0.9\bigr)\approx5.01$ 이다.

독립 Bernoulli 합 $S = \sum X_i$ 와 $\mu = E\lbrack S\rbrack$ 에 대한 고전적 결과는 다음과 같다.

$$
P\big(S \ge (1+\delta)\mu\big) \thickspace\le\thickspace \Big(\frac{e^{\delta}}{(1+\delta)^{1+\delta}}\Big)^{\mu}
\thickspace\le\thickspace \exp\negthinspace\Big(-\frac{\delta^2 \mu}{2 + \delta}\Big), \qquad \delta \gt 0 .
$$

## Hoeffding 보조정리와 부등식

Hoeffding 보조정리(Hoeffding's lemma)는 다음이다. 확률변수 $Y$ 가 $E\lbrack Y\rbrack = 0$ 이고 $a \le Y \le b$ 이면 모든 [실수](real-numbers.md) $\lambda$ 에 대해

$$
E\big\lbrack e^{\lambda Y}\big\rbrack \thickspace\le\thickspace \exp\negthinspace\Big(\frac{\lambda^2 (b-a)^2}{8}\Big).
$$

$\psi(\lambda) = \log E\lbrack e^{\lambda Y}\rbrack$ 는 매끄럽고 $\psi(0) = 0$ 이며 $\psi'(0) = E\lbrack Y\rbrack = 0$ 이다. $\psi''(\lambda)$ 는 밀도를 $e^{\lambda y}$ 로 기울인 새 분포에 대한 분산이고, 그 분포는 $\lbrack a, b\rbrack$ 에 지지되므로 Popoviciu 부등식(Popoviciu's inequality)으로 $\psi''(\lambda) \le (b-a)^2/4$ 이다. Taylor 전개 $\psi(\lambda) = \psi(0) + \lambda\psi'(0) + \lambda^2\psi''(\xi)/2$ 에 대입하면 결론이 나온다.

Hoeffding 부등식(Hoeffding's inequality)은 다음이다. $X_1, \dots, X_n$ 이 독립이고 $a_i \le X_i \le b_i$ 이며 $S_n = \sum X_i$ 일 때

$$
P\big(S_n - E\lbrack S_n\rbrack \ge t\big) \thickspace\le\thickspace \exp\negthinspace\left(-\frac{2 t^2}{\sum_{i=1}^{n} (b_i - a_i)^2}\right).
$$

중심화한 항에 Chernoff 기법을 적용하고 독립성으로 곱 분해한 뒤 보조정리를 각 항에 쓰면 상한은 $\exp(\lambda^2 \sum (b_i - a_i)^2 / 8 - \lambda t)$ 이다. $\lambda = 4t / \sum (b_i - a_i)^2$ 에서 최소화하면 된다. 양쪽 꼬리를 합치면 우변이 두 배가 된다.

특히 $X_i \in \lbrack 0, 1\rbrack$ 이고 표본평균을 볼 때

$$
P\big(\vert\bar{X}\_n - \mu\vert \ge \varepsilon\big) \thickspace\le\thickspace 2 \exp\big(-2 n \varepsilon^2\big)
$$

이다. Chebyshev 가 주는 $1/(4n\varepsilon^2)$ 와 비교하면 꼬리 감소 속도가 다항에서 지수로 바뀐다. 직관 절에서 $n=1000$, $\varepsilon=0.05$ 이면 한쪽 꼬리 상한이 $e^{-5}$ 다.

## sub-Gaussian 의 꼬리

Hoeffding 보조정리에 따르면 $\lbrack a,b\rbrack$ 에 값을 갖고 평균이 $0$ 인 확률변수는 $\sigma=(b-a)/2$ 의 sub-Gaussian 이다. 정의에서 곧바로

$$
P(X \ge t) \le \exp\negthinspace\Big(-\frac{t^2}{2\sigma^2}\Big), \qquad
P(\vert X\vert \ge t) \le 2\exp\negthinspace\Big(-\frac{t^2}{2\sigma^2}\Big)
$$

가 따르고, 역으로 이런 꼬리 경계를 갖는 변수는 상수배 매개변수의 sub-Gaussian 이다. 꼬리 경계, 적률생성함수 경계, 모멘트 증가 속도 $(E\lvert X \rvert^p)^{1/p} = O(\sqrt p)$, Orlicz 노름(Orlicz norm)의 유한성은 상수배를 빼고 동치다. 독립 sub-Gaussian 의 합은 매개변수의 제곱이 더해지는 sub-Gaussian 이므로, 합의 꼬리 확률 상한이 정의에서 바로 나온다.

분산이 작지만 꼬리가 두꺼운 변수(예: 드문 사건의 지시함수 합)에는 sub-Gaussian 대신 sub-exponential 조건과 Bernstein 부등식(Bernstein's inequality)

$$
P\big(S_n - E\lbrack S_n\rbrack \ge t\big) \thickspace\le\thickspace
\exp\negthinspace\left(-\frac{t^2}{2\big(\sum_i \mathrm{Var}(X_i) + bt/3\big)}\right)
$$

를 쓴다. 여기서 $\vert X_i-E\lbrack X_i\rbrack\vert\le b$ 다. 작은 편차에서는 분산이 지배해 Gaussian 꼴, 큰 편차에서는 유계 상수 $b$ 가 지배해 지수 꼴이 된다[^1]. 같은 분산 정보로 더 작은 상한을 주는 것이 Bennett 부등식(Bennett's inequality)이고, 그 지수를 $t$ 의 2차식으로 완화하면 위 형태가 나온다.

## 큰 수의 법칙의 정량화

약한 큰 수의 법칙은 Chebyshev 부등식 한 줄로 나온다. $\mathrm{Var}(X_i) = \sigma^2$ 이면

$$
P\big(\vert\bar{X}\_n - \mu\vert \ge \varepsilon\big) \thickspace\le\thickspace \frac{\sigma^2}{n \varepsilon^2} \thickspace\to\thickspace 0 .
$$

유계성을 추가하면 Hoeffding 이 지수 경계를 주고, 이때 우변이 합 가능하므로 [Borel–Cantelli 보조정리](borel-cantelli.md)로 거의 확실한 수렴, 곧 유계인 경우의 강한 큰 수의 법칙이 나온다.

Hoeffding 부등식을 $n$ 에 대해 풀면 표본 크기 공식이 된다. 오차 $\varepsilon$ 와 신뢰수준 $1 - \delta$ 를 원하면

$$
n \thickspace\ge\thickspace \frac{1}{2\varepsilon^2} \log \frac{2}{\delta}
$$

이면 충분하다. 표본 수는 $\delta$ 에 로그로만 의존한다. $\varepsilon=0.01$, $\delta=0.05$ 이면 $n\ge18445$ 다.

## 중심극한정리와의 관계

[중심극한정리](central-limit-theorem.md)에 따르면 $\sqrt n (\bar X_n - \mu)$ 가 정규분포로 수렴하므로 편차의 규모는 $\sigma/\sqrt n$ 이다. 집중부등식도 같은 규모를 준다. 차이는 두 가지다. 첫째, 중심극한정리는 점근적 근사이고 유한 $n$ 에서의 오차는 Berry–Esseen 부등식(Berry–Esseen inequality)으로 따로 얻는다. 둘째, 편차가 $n$ 과 함께 커지는 큰 편차 영역에서는 정규 근사의 상대오차가 커지지만 Chernoff 경계는 모든 $n$ 에서 성립한다.

## Azuma 부등식과 McDiarmid 부등식

Chernoff 기법에서 독립성을 쓰는 곳은 적률생성함수의 곱 분해 한 곳뿐이다. 그 자리에 [조건부 기댓값](conditional-expectation.md)을 쓰면 같은 논증이 [Martingale](martingales.md) 증분에 대해 성립한다. 결과가 Azuma–Hoeffding 부등식(Azuma–Hoeffding inequality)이고, 여기서 유계 차분 조건을 가진 함수에 대한 McDiarmid 부등식(McDiarmid's inequality)이 유도된다. 함수 $f$ 가 각 좌표를 바꿀 때 $c_i$ 이하로 변하면

$$
P\big(f(X_1, \dots, X_n) - E\lbrack f\rbrack \ge t\big) \thickspace\le\thickspace \exp\negthinspace\left(-\frac{2t^2}{\sum_i c_i^2}\right)
$$

이다. 합이 아닌 통계량(최댓값, [그래프](graphs.md)의 색수, [경험 과정](empirical-process.md)의 상한)에도 이 부등식을 쓴다. 엔트로피 방법(entropy method)과 로그-Sobolev 부등식(log-Sobolev inequality)으로도 이런 부등식을 얻는다[^2].

## 상수의 최적성

Hoeffding 부등식은 분산을 전혀 쓰지 않으므로 실제 분산이 매우 작은 경우 심하게 느슨하다(이때는 Bernstein 이 낫다). 또한 유계성이나 sub-Gaussian 가정이 깨지면(예: 두꺼운 꼬리 분포) 지수 경계 자체가 거짓이 되고 다항 꼬리만 가능하다. 마지막으로 여러 사건에 대해 합집합 경계를 쓰는 순간 $\log(\text{개수})$ 만큼 손해가 발생하므로, 개수가 지수적으로 많으면 연쇄 논법(chaining)을 쓴다.

# 활용

## 무작위 알고리즘

- 성공 확률 증폭. 성공 확률이 $2/3$ 인 판정 알고리즘을 $k$ 번 독립 실행하고 다수결을 취하면 오류 확률이 $\exp(-\Theta(k))$ 로 떨어진다. 다수결 실패는 성공 횟수가 $k/2$ 이하인 사건이므로 Chernoff 경계가 바로 적용된다.
- 부하 분산. $n$ 개의 공을 $n$ 개의 상자에 무작위로 넣으면 최대 부하가 높은 확률로 $\Theta(\log n / \log\log n)$ 이다. 상한은 한 상자의 부하에 Chernoff 를 적용하고 상자 개수만큼 합집합 경계를 쓰는 표준 논증이다.
- 차원 축소. Johnson–Lindenstrauss 보조정리(Johnson–Lindenstrauss lemma)는 무작위 사영이 거리의 제곱을 $1 \pm \varepsilon$ 배 안에서 보존한다는 정리이고, 증명에 카이제곱 꼴 확률변수의 지수 꼬리 상한을 쓴다. 유효저항 계산과 스펙트럼 희소화의 오차 분석도 같은 유형의 [행렬](matrices.md) Chernoff 부등식을 쓴다.
- 존재 증명과 희소화. [확률적 방법](probabilistic-method.md)은 무작위 대상이 나쁜 사건을 피할 확률이 양수임을 보여 존재를 증명하고, 그 확률의 하한을 집중부등식으로 얻는다. [스펙트럼 희소화](spectral-sparsification.md)는 간선을 [유효저항](effective-resistance.md)에 비례하는 확률로 뽑은 행렬 합의 오차를 행렬 판본의 집중부등식으로 얻는다.

## 학습이론의 표본 복잡도

가설 $h$ 의 경험 오차와 실제 오차의 차이는 유계 확률변수 $n$ 개의 평균 문제이므로 Hoeffding 이 적용된다. 유한 가설류 $\mathcal H$ 에 대해 모든 가설에 동시에 성립시키려면 합집합 경계를 쓰고

$$
n \thickspace\ge\thickspace \frac{1}{2\varepsilon^2}\Big(\log \vert\mathcal{H}\vert + \log \frac{2}{\delta}\Big)
$$

이면 충분하다. 가설 개수에 로그로만 의존하므로 유한 가설류는 PAC(probably approximately correct) 학습 가능하다. 무한 가설류에서는 $\log\vert\mathcal H\vert$ 자리에 [VC 차원](vc-dimension.md)(Vapnik–Chervonenkis dimension)이나 [Rademacher 복잡도](rademacher-complexity.md)가 들어가고, 경험 과정 전체의 상한에 McDiarmid 부등식을 적용해 집중을 보장한다. [가설검정](hypothesis-testing.md)이나 [신뢰구간](confidence-intervals.md)에서 분포 가정 없이 유한 표본 보장을 얻고 싶을 때도 같은 부등식을 쓴다.

[^1]: Gábor Lugosi, Concentration-of-measure inequalities (lecture notes), https://www.upf.edu/documents/298368705/0/anu.pdf

[^2]: Rick Durrett, Probability: Theory and Examples (5th ed.), https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [큰 수의 법칙](law-of-large-numbers.md)

## 더 알아보기

- [대편차 원리](large-deviations.md)
- [Khintchine 부등식](khintchine-inequality.md)
- [Rademacher 복잡도](rademacher-complexity.md)
- [다중 슬롯머신](multi-armed-bandits.md)
- [무작위 복잡도 부류](randomized-complexity-classes.md)

#probability #algorithms #machine_learning
