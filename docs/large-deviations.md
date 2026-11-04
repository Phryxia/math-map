# 대편차 원리

# 개요

**대편차 원리(large deviation principle)** 는 드물게 일어나는 사건의 확률이 얼마나 빨리 작아지는지를 지수로 계산하는 방법이다. 공정한 동전을 $n$ 번 던져 앞면이 $3/4$ 이상 나올 확률은 $n$ 이 커지면 $0$ 으로 가고, 대략 $e^{-0.13n}$ 의 빠르기로 줄어든다. 대편차 원리는 이 지수 $0.13$ 같은 값을 주는 함수를 찾아, 표본평균이 기댓값에서 벗어날 확률을 그 함수의 최솟값으로 계산한다.

# 직관

공정한 동전을 $n$ 번 던져 앞면이 $k$ 번 나올 확률은 $\binom nk2^{-n}$ 이다. 앞면 비율이 $3/4$ 이상일 확률은 $k\ge 3n/4$ 인 항을 모두 더한 것이다. [큰 수의 법칙](law-of-large-numbers.md)에 따라 이 확률은 $0$ 으로 가고, 얼마나 빨리 가는지를 묻는다.

더하는 항은 $n+1$ 개 이하이고 가장 큰 항은 $k=3n/4$ 인 항이다. 그래서 확률은 가장 큰 항과 그 $n+1$ 배 사이에 있다. Stirling 공식(Stirling's formula)으로 $\binom{n}{3n/4}$ 은 $e^{nh}$ 규모이고, 여기서 $h=-\tfrac34\log\tfrac34-\tfrac14\log\tfrac14\approx 0.562$ 다. $2^{-n}=e^{-0.693n}$ 을 곱하면 가장 큰 항이 $e^{-0.131n}$ 규모이고, $n+1$ 배는 지수를 바꾸지 않으므로 확률도 $e^{-0.131n}$ 규모다.

$3/4$ 대신 비율 $x\gt 1/2$ 을 쓰면 같은 계산으로 지수가 $I(x)=x\log 2x+(1-x)\log 2(1-x)$ 다. [중심극한정리](central-limit-theorem.md)의 [정규분포](normal-distribution.md) 근사로 꼬리를 재면 지수가 $2(x-1/2)^2$ 이고, $x=3/4$ 에서 $0.125$ 여서 $0.131$ 과 다르다. 정규 근사는 기댓값 근처의 $n^{-1/2}$ 규모 요동만 맞히고 고정된 크기의 이탈의 지수는 맞히지 못한다.

# 정의

## 대편차 원리

$\mathcal X$ 가 거리공간이고 $I \colon \mathcal X \to \lbrack 0, \infty\rbrack$ 가 하반연속이며 준위집합 $\lbrace x : I(x) \le c\rbrace$ 가 모두 콤팩트일 때 $I$ 를 **속도함수(rate function)** 라 한다. $\mathcal X$ 위의 확률측도열 $\lbrace \mu_n\rbrace$ 이 속도 $n$ 과 속도함수 $I$ 로 **대편차 원리** 를 만족한다는 것은, 모든 닫힌집합 $F$ 와 열린집합 $G$ 에 대해 다음 두 부등식이 성립한다는 뜻이다.

$$
\limsup_{n\to\infty} \frac{1}{n}\log \mu_n(F) \le -\inf_{x\in F} I(x), \qquad \liminf_{n\to\infty} \frac{1}{n}\log \mu_n(G) \ge -\inf_{x\in G} I(x)
$$

직관 절의 동전에서 $\mu_n$ 은 앞면 비율의 분포이고, 속도함수는 $\lbrack 0,1\rbrack$ 에서 $I(x)=x\log 2x+(1-x)\log 2(1-x)$, 그 밖에서 $\infty$ 다. $F=\lbrack 3/4,1\rbrack$ 이면 $\inf_FI=I(3/4)\approx 0.131$ 이다.

닫힌집합과 열린집합을 나누는 것은 $\mu_n$ 이 이산분포일 때가 있기 때문이다. 동전에서 $A$ 를 $\lbrack 0,1\rbrack$ 의 무리수 전체로 두면 앞면 비율은 늘 유리수이므로 $\mu_n(A)=0$ 이지만, $\inf_AI=0$ 이다. $A$ 의 내부가 공집합이므로 아래 부등식은 아무것도 요구하지 않고 모순이 생기지 않는다.

## 로그 적률생성함수와 Legendre 변환

[확률변수](random-variables.md) $X$ 의 **로그 적률생성함수(log moment generating function)** $\Lambda$ 와 그 **Legendre 변환(Legendre transform)** $\Lambda^\ast$ 는 다음 함수다.

$$
\Lambda(\lambda) = \log \mathbb E\lbrack e^{\lambda X}\rbrack, \qquad \Lambda^\ast(x) = \sup_{\lambda\in\mathbb R}\bigl(\lambda x - \Lambda(\lambda)\bigr)
$$

$\Lambda$ 는 [적률생성함수](moment-generating-function.md)의 로그이고, $\Lambda^\ast$ 는 $\Lambda$ 의 [볼록 공액](convex-conjugate.md)이다. $X$ 가 $0$ 과 $1$ 을 확률 $1/2$ 씩 취하면 $\Lambda(\lambda)=\log\frac{1+e^{\lambda}}{2}$ 다. 최댓값을 주는 $\lambda$ 는 $e^{\lambda}=x/(1-x)$ 이고, 대입하면 $\Lambda^\ast(x)=x\log 2x+(1-x)\log 2(1-x)$ 로 직관 절의 $I$ 와 같다.

# 성질

## Cramér 정리

$\Lambda$ 는 볼록이고 $\Lambda^\ast$ 도 볼록이며 $\Lambda^\ast \ge 0$ 이다. $\Lambda^\ast$ 가 $0$ 이 되는 점은 $x = \mathbb E X$ 하나다.

$X_1, X_2, \ldots$ 가 독립이고 같은 분포를 따르며 $\Lambda(\lambda)$ 가 모든 $\lambda$ 에서 유한하면, 표본평균 $S_n/n$ 의 분포는 속도 $n$ 과 속도함수 $\Lambda^\ast$ 로 대편차 원리를 만족한다. 이것이 Cramér 정리(Cramér's theorem)다. 직관 절의 계산은 동전에 대한 이 정리다. 특히 $x \gt \mathbb E X$ 에서

$$
\lim_{n\to\infty} \frac{1}{n}\log \mathbb P\lbrack S_n/n \ge x\rbrack = -\Lambda^\ast(x)
$$

이다.

상계는 Markov 부등식(Markov's inequality)에서 나온다. 임의의 $\lambda \gt 0$ 에 대해 $\mathbb P\lbrack S_n \ge nx\rbrack \le e^{-n(\lambda x - \Lambda(\lambda))}$ 이고 $\lambda$ 에 대해 최적화하면 $e^{-n\Lambda^\ast(x)}$ 를 얻는다. 하계는 [측도변환](change-of-measure.md)으로 얻는다. 원래 분포를 $e^{\lambda x}$ 로 기울여 평균이 $x$ 인 새 분포를 만들면 그 아래에서는 문제의 사건이 전형적 사건이 되고, 우도비가 기여하는 인자가 정확히 $e^{-n\Lambda^\ast(x)}$ 다.

## Sanov 정리

Sanov 정리(Sanov's theorem)는 다음 정리다. $X_i$ 가 분포 $\mu$ 를 따르는 독립 표본일 때 경험분포 $L_n = \frac{1}{n}\sum_{i=1}^n \delta_{X_i}$ 는 속도 $n$ 과 속도함수 $\nu \mapsto \mathrm{KL}(\nu \Vert \mu)$ 로 대편차 원리를 만족한다. 볼록 집합 $A$ 에 대해

$$
\lim_{n\to\infty}\frac{1}{n}\log\mathbb P\lbrack L_n \in A\rbrack = -\inf_{\nu\in A}\mathrm{KL}(\nu\Vert\mu)
$$

이다. $\mathrm{KL}(\nu\Vert\mu)$ 는 $\nu$ 의 $\mu$ 에 대한 [상대엔트로피](kl-divergence.md)(Kullback–Leibler divergence)이고 $H$ 는 [Shannon 엔트로피](entropy.md)다. 유한 알파벳에서는 형 계수 세기(method of types)로 증명된다. 경험분포가 $\nu$ 인 표본열의 개수가 $e^{nH(\nu)}$ 규모이고 각 열의 확률이 $e^{-n(H(\nu)+\mathrm{KL}(\nu\Vert\mu))}$ 규모이므로 곱이 $e^{-n\mathrm{KL}(\nu\Vert\mu)}$ 가 된다.

## 축약 원리

축약 원리(contraction principle)는 다음 정리다. $\mu_n$ 이 속도함수 $I$ 로 대편차 원리를 만족하고 $f$ 가 연속이면 상 측도 $\mu_n \circ f^{-1}$ 도 대편차 원리를 만족하며 그 속도함수는 다음이다.

$$
I'(y) = \inf\lbrace I(x) : f(x) = y\rbrace
$$

$X$ 가 유계이면 Cramér 정리는 Sanov 정리에 $f(\nu) = \int x \thinspace d\nu$ 를 적용한 결과다. 경험분포 수준의 결과가 더 강하고 나머지는 축약으로 따라온다.

## Varadhan 보조정리

Varadhan 보조정리(Varadhan's lemma)는 다음 정리다. $\mu_n$ 이 속도함수 $I$ 로 대편차 원리를 만족하고 $\phi$ 가 유계연속이면 다음이 성립한다.

$$
\lim_{n\to\infty}\frac{1}{n}\log\int e^{n\phi(x)}\thinspace d\mu_n(x) = \sup_{x}\bigl(\phi(x) - I(x)\bigr)
$$

지수적분의 극한이 최댓값 하나로 결정된다는 점에서 [Laplace 방법](laplace-method.md)의 확률론 판이다. 우변의 최적화는 통계역학에서 자유에너지와 엔트로피를 잇는 변분 원리와 같은 형태다.

# 활용

- Chernoff 한계(Chernoff bound). Cramér 정리의 상계 부분이 유한 $n$ 에서도 성립하므로 $\mathbb P\lbrack S_n/n \ge x\rbrack \le e^{-n\Lambda^\ast(x)}$ 를 그대로 쓴다. [집중부등식](concentration-inequalities.md)의 여러 꼬리 한계가 이 형태의 특수 사례다.
- 가설검정의 오류지수. 두 분포를 구별하는 검정에서 제2종 오류(type II error)의 확률이 $e^{-n\mathrm{KL}}$ 규모로 감소하고 그 지수가 Stein 보조정리(Stein's lemma)로 주어진다. 표본 수를 정할 때 이 지수가 기준이 된다.
- 통계역학의 자유에너지. Gibbs 측도의 자유에너지가 Varadhan 보조정리의 우변에 해당하며 상전이는 속도함수의 최소점이 갈라지는 자리에 대응한다.
- 무작위 [그래프](graphs.md)의 드문 부분구조. [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)에서 삼각형 수가 기댓값보다 크게 나올 확률의 지수를 대편차 원리로 계산한다.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)
- [KL divergence](kl-divergence.md)
- [볼록 공액](convex-conjugate.md)

## 더 알아보기

- [Gärtner–Ellis 정리](gartner-ellis.md)
- [Freidlin–Wentzell 이론](freidlin-wentzell.md)

#probability #information_theory #statistics #analysis
