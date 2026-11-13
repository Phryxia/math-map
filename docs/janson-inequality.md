# Janson 부등식

# 개요

**Janson 부등식(Janson inequality)** 은 서로 조금씩 겹치는 드문 사건들이 하나도 일어나지 않을 확률을, 사건들이 독립인 것처럼 계산한 값에 겹침의 크기만큼 보정해 위에서 누르는 부등식이다. 정점 $n$ 개 사이에 간선을 동전 던지기로 넣은 무작위 그래프에 삼각형이 하나도 없을 확률을 알고 싶다. 삼각형들은 간선을 공유하므로 서로 독립이 아니고, 확률을 곱해서 계산할 수 없다. 겹치는 삼각형 쌍이 함께 생길 확률을 더한 양 하나만 계산하면, 이 부등식이 삼각형이 없을 확률의 상한을 준다.

# 직관

정점 $4$ 개 사이의 간선 $6$ 개를 각각 확률 $1/2$ 로 넣는다. 삼각형이 될 수 있는 정점 세 개 묶음은 $4$ 개이고, 각각이 삼각형일 확률은 $(1/2)^3 = 1/8$ 이다. 가능한 그래프 $64$ 개를 세면 삼각형이 없는 것이 $41$ 개이므로 삼각형이 없을 확률은 $41/64 \approx 0.641$ 이다.

네 삼각형이 독립이라면 하나도 없을 확률은 $(7/8)^4 \approx 0.586$ 이다. 실제 확률이 이보다 크다. 두 삼각형은 간선 하나를 공유하므로, 한 삼각형이 없다는 것을 알면 공유 간선이 빠졌을 가능성이 커지고 다른 삼각형도 없을 가능성이 커진다.

곱 $(7/8)^4$ 는 아래쪽 한계를 준다. 위쪽 한계를 얻으려면 삼각형들이 얼마나 겹치는지를 재야 한다. 서로 다른 두 삼각형은 어느 쌍이든 간선 하나를 공유하므로, 두 삼각형이 함께 생기려면 간선 $5$ 개가 있어야 하고 그 확률은 $1/32$ 이다. 순서를 매긴 쌍 $12$ 개에 대해 더하면 $12/32 = 3/8$ 이다.

삼각형 수의 기댓값은 $4\cdot 1/8 = 1/2$ 이다. 독립일 때 하나도 없을 확률이 대략 $e^{-1/2}$ 이므로, 겹침의 절반을 지수에 더한 $e^{-1/2 + 3/16} = e^{-5/16} \approx 0.732$ 를 상한으로 쓴다. 실제 확률 $0.641$ 은 하한 $0.586$ 과 상한 $0.732$ 사이에 있다.

# 정의

## 무작위 부분집합과 사건

유한집합 $\Omega$ 의 원소 $r$ 를 확률 $p_r$ 로 서로 독립으로 고른 무작위 부분집합을 $R$ 이라 하자. $\Omega$ 의 부분집합 $A_1, \dots, A_m$ 에 대해 사건 $B_i$ 는 $A_i \subseteq R$ 인 사건이다. 직관 절에서 $\Omega$ 는 간선 $6$ 개, $p_r = 1/2$, $A_i$ 는 삼각형 $i$ 의 간선 세 개다.

## 기댓값과 겹침

$A_i \cap A_j \ne \varnothing$ 이고 $i \ne j$ 이면 $i \sim j$ 로 적는다. 일어난 사건의 수 $X = \sum_i \mathbf 1_{B_i}$ 에 대해 다음 두 양을 정의한다.

$$
\mu = E\lbrack X\rbrack = \sum_{i=1}^m P(B_i), \qquad \Delta = \sum_{i \sim j} P(B_i \cap B_j)
$$

$\Delta$ 의 합은 순서를 매긴 쌍 $(i, j)$ 전체에 대한 것이다. 직관 절에서 $\mu = 1/2$, $\Delta = 3/8$ 이다.

# 성질

## Harris 하한

다음이 성립한다.

$$
P(X = 0) \ge \prod_{i=1}^m \big(1 - P(B_i)\big)
$$

각 $B_i$ 의 여사건은 $R$ 에 원소를 더하면 일어나지 않을 수 있는 감소 사건이다. 곱 측도에서 감소 사건 둘은 양의 상관을 가진다는 Harris 부등식(Harris inequality)을 사건마다 되풀이해 쓰면 나온다. 직관 절의 $(7/8)^4$ 가 이 하한이다.

## Janson 부등식

다음이 성립한다[^1].

$$
P(X = 0) \le \exp\negthinspace\Big(-\mu + \frac{\Delta}{2}\Big)
$$

증명의 요지. $P(X=0) = \prod_i P(\overline{B_i} \mid \overline{B_1}\cap\dots\cap\overline{B_{i-1}})$ 로 쓴다. 앞선 사건 가운데 $i$ 와 겹치는 것과 겹치지 않는 것으로 조건을 나누고 Harris 부등식을 쓰면 다음이 나온다[^2].

$$
P(B_i \mid \overline{B_1}\cap\dots\cap\overline{B_{i-1}}) \ge P(B_i) - \sum_{j \lt i,\thinspace j \sim i} P(B_i \cap B_j)
$$

$1 - x \le e^{-x}$ 를 곱하면 지수에 $-\mu$ 와 순서를 매기지 않은 쌍의 합 $\Delta/2$ 가 남는다.

## 겹침이 큰 경우

$\Delta \ge \mu$ 이면 다음이 성립한다[^1].

$$
P(X = 0) \le \exp\negthinspace\Big(-\frac{\mu^2}{2\Delta}\Big)
$$

증명의 요지. 사건의 부분집합 $S$ 에 앞 절의 부등식을 쓰면 $P(X=0)$ 이 $\exp(-\mu_S + \Delta_S/2)$ 이하다. $S$ 를 각 사건을 확률 $q$ 로 독립으로 고른 무작위 부분집합으로 두면 $\mu_S$ 의 기댓값은 $q\mu$, $\Delta_S$ 의 기댓값은 $q^2\Delta$ 이다. $-\mu_S + \Delta_S/2$ 가 그 기댓값 이하인 $S$ 가 있으므로, 기댓값 $-q\mu + q^2\Delta/2$ 에 $q = \mu/\Delta$ 를 넣는다.

## 2차 적률법과의 비교

Chebyshev 부등식(Chebyshev's inequality)으로 얻는 상한은 $\mathrm{Var}\thinspace X/\mu^2$ 이고, 여기서 $\mathrm{Var}\thinspace X \le \mu + \Delta$ 이다. $\mu$ 가 크고 $\Delta$ 가 $\mu$ 보다 작으면 Chebyshev 상한은 $1/\mu$ 규모이고 Janson 상한은 $e^{-\mu/2}$ 규모다.

# 활용

- 무작위 그래프의 부분그래프. [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md) $G(n,p)$ 에 삼각형이 없을 확률은 $p = c/n$ 에서 $e^{-c^3/6}$ 으로 간다. 이때 $\mu \to c^3/6$ 이고 $\Delta \to 0$ 이어서 Harris 하한과 Janson 상한이 같은 극한을 준다. 고정된 그래프 $H$ 를 부분그래프로 갖지 않을 확률도 같은 방법으로 지수의 크기까지 정해진다.
- 무작위 그래프의 채색수. Bollobás 는 $G(n, 1/2)$ 의 채색수가 $n/(2\log_2 n)$ 규모임을 보일 때, 정점 집합의 모든 큰 부분집합이 정해진 크기의 독립집합을 가질 확률을 겹침이 큰 경우의 Janson 부등식으로 누르고 합집합 상한을 썼다[^3].
- [확률적 방법](probabilistic-method.md). 나쁜 사건들이 하나도 일어나지 않을 확률이 양수임을 보이는 데 Lovász 국소 보조정리(Lovász local lemma)는 확률이 양수라는 것만 주고, Janson 부등식은 단조 사건에 한해 그 확률의 크기를 준다.

[^1]: S. Janson, T. Łuczak, A. Ruciński, "An exponential bound for the probability of nonexistence of a specified subgraph in a random graph", Random Graphs '87 (1990), 73–87. 교과서 서술은 N. Alon, J. H. Spencer, The Probabilistic Method, 4th ed., Wiley (2016), 8 장.
[^2]: R. Boppana, J. Spencer, "A useful elementary correlation inequality", Journal of Combinatorial Theory Series A 50 (1989), 305–307.
[^3]: B. Bollobás, "The chromatic number of random graphs", Combinatorica 8 (1988), 49–55.

# 연관 문서

## 선수지식

- [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #probability #graph_theory
