# Ehrenfest 모형

# 개요

**Ehrenfest 모형(Ehrenfest model)** 은 공 $N$ 개를 두 항아리에 나누어 두고, 매 단계 공 하나를 무작위로 골라 다른 항아리로 옮기는 [Markov 연쇄](markov-chains.md)다. 칸막이로 나뉜 상자의 한쪽에만 기체를 넣고 칸막이에 작은 구멍을 내면 기체는 양쪽에 반씩 퍼지고, 다시 한쪽으로 모이는 일은 관찰되지 않는다. 이 모형은 공의 수를 상태로 삼아, 반반으로 가는 평균적 움직임과 한쪽으로 다시 모이기까지의 평균 시간을 둘 다 정확히 계산한다.

# 직관

공이 $4$ 개이고 처음에 모두 항아리 A 에 있다고 하자. 첫 단계에서는 어느 공을 골라도 A 에서 나가므로 A 의 공은 $3$ 개가 된다. 다음 단계에서는 $3/4$ 의 확률로 A 의 공이 골려 $2$ 개가 되고, $1/4$ 의 확률로 B 의 공이 골려 $4$ 개로 돌아간다.

A 에 공이 많을수록 A 에서 나가는 쪽으로 움직일 확률이 크다. 그래서 공의 수는 평균적으로 $2$ 쪽으로 끌려가고, $4$ 개가 모두 A 에 모이는 상태는 드물게만 다시 나온다. 계산하면 그 상태로 돌아오는 데 평균 $16$ 단계가 걸린다. 공이 $100$ 개이면 이 평균은 $2^{100}\approx 1.3\times 10^{30}$ 단계다.

# 정의

공 $N$ 개 가운데 항아리 A 에 있는 공의 수를 $X_n$ 이라 한다. $X_n$ 은 상태 $\lbrace 0,1,\dots,N\rbrace$ 위의 Markov 연쇄이고 전이확률은 다음과 같다.

$$
P(k,k-1)=\frac kN,\qquad P(k,k+1)=\frac{N-k}{N}
$$

이 연쇄를 **Ehrenfest 모형** 또는 Ehrenfest 항아리 모형(Ehrenfest urn model)이라 한다. P. Ehrenfest 와 T. Ehrenfest 가 1907 년에 열역학 제2법칙과 역학의 시간 대칭이 어긋나 보이는 문제를 설명하려고 도입했다.[^1] 직관 절의 예는 $N=4$ 이고 $P(3,2)=3/4$, $P(3,4)=1/4$ 이다.

공 하나하나의 위치를 기록하면 상태는 $\lbrace 0,1\rbrace^N$ 의 원소이고, 한 단계는 좌표 하나를 고르게 골라 뒤집는 것이다. 이것은 [초입방체 그래프](hypercube-graphs.md) 위의 단순 무작위 걷기이고, $X_n$ 은 그 위치에서 $1$ 의 개수다.

# 성질

## 정상분포

정상분포는 [이항분포](binomial-distribution.md) $\mathrm B(N,1/2)$ 다.

$$
\pi(k)=\binom Nk2^{-N}
$$

증명의 요지. $\binom Nk(N-k)=\binom N{k+1}(k+1)$ 이므로 다음이 성립한다.

$$
\pi(k)P(k,k+1)=\pi(k+1)P(k+1,k)
$$

[가역 Markov 연쇄](reversible-markov-chains.md)의 상세균형(detailed balance)이 성립하므로 $\pi$ 가 정상분포다. $\square$

공을 하나씩 따로 보면 각 공이 A 에 있을 확률이 $1/2$ 이고 서로 독립인 상태가 정상상태다.

## 평균 귀환 시간

기약 연쇄에서 상태 $k$ 로 돌아오는 시간의 기댓값은 $1/\pi(k)$ 이다. 이것을 Kac 보조정리(Kac's lemma)라 한다. 그래서 모든 공이 A 에 있는 상태 $N$ 의 평균 귀환 시간은 $2^N$ 이고, 반반인 상태 $N/2$ 의 평균 귀환 시간은 다음과 같다.

$$
\frac{2^N}{\binom N{N/2}}\approx\sqrt{\frac{\pi N}{2}}
$$

$N=100$ 이면 앞의 것은 약 $1.3\times 10^{30}$, 뒤의 것은 약 $12.6$ 이다. 연쇄는 모든 상태로 언젠가 돌아오지만, 한쪽으로 모인 상태로 돌아오는 시간은 $N$ 에 대해 지수적으로 길다. M. Kac 은 이 계산으로 되돌이(recurrence)와 비가역성이 함께 성립함을 보였다.[^2]

## 평균의 지수적 감쇠

한 단계 뒤의 조건부 기댓값은 다음과 같다.

$$
\mathbb E\lbrack X_{n+1}\mid X_n=k\rbrack-\frac N2=\Big(1-\frac2N\Big)\Big(k-\frac N2\Big)
$$

그래서 $\mathbb E\lbrack X_n\rbrack-N/2=(1-2/N)^n(X_0-N/2)$ 이다. 평균은 반반에서 벗어난 양이 매 단계 같은 비율로 줄어드는 식으로 $N/2$ 에 다가가고, 이것이 기체가 퍼지는 모습에 해당한다.

## 스펙트럼

전이행렬의 고윳값은 $1-2j/N$, $j=0,1,\dots,N$ 이다.[^2] 대응하는 고유벡터는 [Krawtchouk 다항식](krawtchouk-polynomials.md)으로 주어진다. 초입방체 위의 걷기에서 좌표의 부분집합 $S$ 에 대한 지표 $(-1)^{\sum_{i\in S}x_i}$ 가 고윳값 $1-2\vert S\vert/N$ 의 고유함수이고, 이것을 $1$ 의 개수로 묶으면 Krawtchouk 다항식이 된다.

고윳값 $-1$ 이 있으므로 연쇄는 주기 $2$ 이고, $X_n$ 의 분포는 정상분포로 수렴하지 않는다. 매 단계 확률 $1/2$ 로 제자리에 머무는 판본은 고윳값이 $1-j/N$ 이 되어 정상분포로 수렴한다.

# 활용

- 통계역학의 비가역성. 미시적 운동은 시간을 거꾸로 돌려도 같은 법칙을 따르는데 거시적 기체는 한 방향으로만 퍼진다. Ehrenfest 모형은 처음 상태로 돌아오는 시간이 지수적으로 길다는 계산으로 두 사실이 모순되지 않음을 보인다.
- 확산 근사(diffusion approximation). $N$ 이 클 때 $(X_n-N/2)/\sqrt N$ 을 시간 척도 $N$ 으로 보면 [Ornstein–Uhlenbeck 과정](ornstein-uhlenbeck-process.md)으로 수렴한다. 평균의 지수적 감쇠가 그 과정의 평균 회귀 항이다.
- 혼합 시간의 표준 예. 초입방체 위의 게으른 무작위 걷기는 정상분포로 가는 거리가 짧은 시간 구간 안에서 $1$ 근처에서 $0$ 근처로 떨어지는 예로, [혼합 시간](mixing-time.md)의 급격한 전환(cutoff) 현상을 보이는 데 쓰인다.[^3]

[^1]: P. Ehrenfest, T. Ehrenfest, "Über zwei bekannte Einwände gegen das Boltzmannsche H-Theorem", *Physikalische Zeitschrift* **8** (1907), 311–314.
[^2]: M. Kac, "Random walk and the theory of Brownian motion", *American Mathematical Monthly* **54** (1947), 369–391.
[^3]: D. A. Levin, Y. Peres, E. L. Wilmer, *Markov Chains and Mixing Times*, 2nd ed., American Mathematical Society (2017), 2 장과 18 장.

# 연관 문서

## 선수지식

- [가역 Markov 연쇄](reversible-markov-chains.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics
