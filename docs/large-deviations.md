# 대편차 원리

# 개요

대편차 원리는 [큰 수의 법칙](law-of-large-numbers.md)이 확률 $0$ 으로 보내는 사건의 확률이 얼마나 빨리 작아지는지를 재는 틀이다. 표본평균이 기댓값에서 벗어날 확률은 표본 수 $n$ 에 대해 지수적으로 감소하고, 그 지수를 결정하는 함수가 rate function 이다. [집중부등식](concentration-inequalities.md)은 이 감소의 지수적 상계를 주고, 대편차 원리는 그 지수의 정확한 값을 준다.

rate function 은 두 방식으로 나타난다. 실수값 표본평균에서는 로그 적률생성함수의 Legendre 변환이고, 경험분포에서는 참분포에 대한 [상대엔트로피](kl-divergence.md)다. 두 결과가 Cramér 정리와 Sanov 정리이며, 축약 원리가 둘을 잇는다.

# 직관

## 지수적 감소의 속도

공정한 동전을 $n$ 번 던져 앞면 비율이 $0.7$ 이상일 확률은 [중심극한정리](central-limit-theorem.md)가 다루는 $n^{-1/2}$ 규모의 요동이 아니라 고정된 크기의 이탈이다. 이 확률은 $n$ 이 커질 때 $e^{-nI(0.7)}$ 규모로 줄어들고, $I(0.7)$ 은 $0$ 이 아닌 상수다.

중심극한정리는 기댓값 근방의 요동을 정규분포로 근사하지만 꼬리 확률의 지수까지는 알려 주지 않는다. 대편차 원리는 그 지수를 정확히 준다.

## 가장 값싼 경로

$I$ 를 최소로 만드는 점이 이탈이 실제로 일어나는 방식을 결정한다. 사건 $A$ 가 일어났다는 조건 아래 표본평균의 분포는 $A$ 안에서 $I$ 를 최소로 하는 점에 집중한다. 드문 사건은 가장 덜 드문 방식으로 일어난다.

# 정의

## 대편차 원리

거리공간 위의 확률측도열 $\lbrace \mu_n\rbrace$ 이 속도 $n$ 과 rate function $I$ 로 **대편차 원리**를 만족한다는 것은 다음 두 부등식이 성립한다는 뜻이다. 닫힌집합 $F$ 와 열린집합 $G$ 에 대해

$$
\limsup_{n\to\infty} \frac{1}{n}\log \mu_n(F) \le -\inf_{x\in F} I(x), \qquad \liminf_{n\to\infty} \frac{1}{n}\log \mu_n(G) \ge -\inf_{x\in G} I(x)
$$

이다. 여기서 $I \colon \mathcal X \to \lbrack 0, \infty\rbrack$ 는 하반연속이고 준위집합 $\lbrace x : I(x) \le c\rbrace$ 가 콤팩트인 함수다.

닫힌집합과 열린집합에 서로 다른 부등식을 두는 이유는 경계에서 두 값이 갈라질 수 있기 때문이다. $I$ 의 최소가 집합 내부에서 달성되는 좋은 집합에서는 두 극한이 일치한다.

## Legendre 변환

확률변수 $X$ 의 **로그 적률생성함수**와 그 **Legendre 변환**을 다음으로 둔다.

$$
\Lambda(\lambda) = \log \mathbb E\lbrack e^{\lambda X}\rbrack, \qquad \Lambda^\ast(x) = \sup_{\lambda\in\mathbb R}\bigl(\lambda x - \Lambda(\lambda)\bigr)
$$

$\Lambda$ 는 볼록이고 $\Lambda^\ast$ 도 볼록이며 $\Lambda^\ast \ge 0$ 이다. $\Lambda^\ast$ 가 $0$ 이 되는 점은 $x = \mathbb E X$ 하나다.

# 성질

## Cramér 정리

$X_1, X_2, \ldots$ 가 독립이고 같은 분포를 따르며 $\Lambda(\lambda)$ 가 모든 $\lambda$ 에서 유한하면, 표본평균 $S_n/n$ 의 분포는 속도 $n$ 과 rate function $\Lambda^\ast$ 로 대편차 원리를 만족한다. 특히 $x \gt \mathbb E X$ 에서

$$
\lim_{n\to\infty} \frac{1}{n}\log \mathbb P\lbrack S_n/n \ge x\rbrack = -\Lambda^\ast(x)
$$

이다.

상계는 Markov 부등식에서 나온다. 임의의 $\lambda \gt 0$ 에 대해 $\mathbb P\lbrack S_n \ge nx\rbrack \le e^{-n(\lambda x - \Lambda(\lambda))}$ 이고 $\lambda$ 에 대해 최적화하면 $e^{-n\Lambda^\ast(x)}$ 를 얻는다. 하계는 측도변환으로 얻는다. 원래 분포를 $e^{\lambda x}$ 로 기울여 평균이 $x$ 인 새 분포를 만들면 그 아래에서는 문제의 사건이 전형적 사건이 되고, 우도비가 기여하는 인자가 정확히 $e^{-n\Lambda^\ast(x)}$ 다.

## Sanov 정리

$X_i$ 가 분포 $\mu$ 를 따르는 독립 표본일 때 경험분포 $L_n = \frac{1}{n}\sum_{i=1}^n \delta_{X_i}$ 는 속도 $n$ 과 rate function $\nu \mapsto \mathrm{KL}(\nu \Vert \mu)$ 로 대편차 원리를 만족한다. 볼록 집합 $A$ 에 대해

$$
\lim_{n\to\infty}\frac{1}{n}\log\mathbb P\lbrack L_n \in A\rbrack = -\inf_{\nu\in A}\mathrm{KL}(\nu\Vert\mu)
$$

이다. $\mathrm{KL}(\nu\Vert\mu)$ 는 $\nu$ 의 $\mu$ 에 대한 상대엔트로피(Kullback–Leibler divergence)이고 $H$ 는 Shannon entropy 다. 유한 알파벳에서는 형 계수 세기로 증명된다. 경험분포가 $\nu$ 인 표본열의 개수가 $e^{nH(\nu)}$ 규모이고 각 열의 확률이 $e^{-n(H(\nu)+\mathrm{KL}(\nu\Vert\mu))}$ 규모이므로 곱이 $e^{-n\mathrm{KL}(\nu\Vert\mu)}$ 가 된다.

## 축약 원리

$\mu_n$ 이 rate function $I$ 로 대편차 원리를 만족하고 $f$ 가 연속이면 상측도 $\mu_n \circ f^{-1}$ 도 대편차 원리를 만족하며 그 rate function 은 다음이다.

$$
I'(y) = \inf\lbrace I(x) : f(x) = y\rbrace
$$

Cramér 정리는 Sanov 정리에 $f(\nu) = \int x \thinspace d\nu$ 를 적용한 결과다. 경험분포 수준의 결과가 더 강하고 나머지는 축약으로 따라온다.

## Varadhan 보조정리

$\mu_n$ 이 rate function $I$ 로 대편차 원리를 만족하고 $\phi$ 가 유계연속이면 다음이 성립한다.

$$
\lim_{n\to\infty}\frac{1}{n}\log\int e^{n\phi(x)}\thinspace d\mu_n(x) = \sup_{x}\bigl(\phi(x) - I(x)\bigr)
$$

지수적분의 극한이 최댓값 하나로 결정된다는 점에서 [Laplace 방법](laplace-method.md)의 확률론 판이다. 우변의 최적화는 통계역학에서 자유에너지와 엔트로피를 잇는 변분 원리와 같은 형태다.

# 활용

- **Chernoff 한계.** Cramér 정리의 상계 부분이 유한 $n$ 에서도 성립하므로 $\mathbb P\lbrack S_n/n \ge x\rbrack \le e^{-n\Lambda^\ast(x)}$ 를 그대로 쓴다. [집중부등식](concentration-inequalities.md)의 여러 꼬리 한계가 이 형태의 특수 사례다.
- **가설검정의 오류지수.** 두 분포를 구별하는 검정에서 제2종 오류의 확률이 $e^{-n\mathrm{KL}}$ 규모로 감소하고 그 지수가 Stein 보조정리로 주어진다. 표본 수를 정할 때 이 지수가 기준이 된다.
- **통계역학의 자유에너지.** Gibbs 측도의 자유에너지가 Varadhan 보조정리의 우변에 해당하며 상전이는 rate function 의 최소점이 갈라지는 자리에 대응한다.
- **무작위 그래프의 드문 부분구조.** Erdős–Rényi 그래프에서 삼각형 수가 기댓값보다 크게 나올 확률의 지수를 대편차 원리로 계산한다.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #information_theory #statistics #analysis
