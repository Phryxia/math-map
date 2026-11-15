# Plackett–Luce 모형

# 개요

**Plackett–Luce 모형(Plackett–Luce model)** 은 여러 대상을 좋아하는 순서대로 한 줄로 세운 순위 기록으로 각 대상에 힘을 나타내는 양수 하나를 주는 확률 모형이다. 사람마다 커피 A, B, C 를 좋아하는 순서대로 적어 냈다면, 순위 하나를 둘씩 비교한 결과 셋으로 쪼개 [Bradley–Terry 모형](bradley-terry-model.md)에 넣을 수 있지만, 이 세 비교는 한 사람의 한 순위에서 나왔으므로 서로 독립이 아니다. 이 모형은 순위를 1 위부터 남은 대상 가운데 하나씩 고르는 과정으로 보고 고를 때마다 힘의 비로 확률을 주어, 순위 하나의 확률을 그대로 적는다.

# 직관

커피 A, B, C 의 힘을 $s_A=3$, $s_B=2$, $s_C=1$ 로 두자. Bradley–Terry 모형으로 A 가 B 보다 좋을 확률은 $3/5$, A 가 C 보다 좋을 확률은 $3/4$, B 가 C 보다 좋을 확률은 $2/3$ 다. 순위 A, B, C 를 세 비교로 쪼개고 서로 독립이라 놓으면 그 확률은 $\frac35\cdot\frac34\cdot\frac23=\frac{3}{10}$ 이다.

이 계산을 여섯 순위에 모두 하면 합이 $1$ 이 되지 않는다. 세 비교의 결과는 $8$ 가지이고, 그 가운데 "A 가 B 보다, B 가 C 보다, C 가 A 보다 좋다" 와 그 반대는 어느 순위에도 맞지 않는다. 두 순환의 확률은 $\frac35\cdot\frac23\cdot\frac14=\frac{1}{10}$ 과 $\frac25\cdot\frac13\cdot\frac34=\frac{1}{10}$ 이므로 여섯 순위의 확률을 더하면 $\frac45$ 다.

순환은 세 비교를 따로 뽑아서 생겼으니, 순위를 한 번에 만드는 과정으로 확률을 준다. 1 위는 세 잔 가운데 힘에 비례해 고르고, 2 위는 남은 두 잔 가운데 힘에 비례해 고른다. 순위 A, B, C 의 확률은 1 위로 A 를 고를 확률 $3/6$ 에 남은 B, C 가운데 B 를 고를 확률 $2/3$ 을 곱한 $1/3$ 이다. 여섯 순위의 확률은 다음과 같고 합이 $1$ 이다.

| 순위    | 확률                                  |
| ------- | ------------------------------------- |
| A, B, C | $\frac36\cdot\frac23=\frac13$         |
| A, C, B | $\frac36\cdot\frac13=\frac16$         |
| B, A, C | $\frac26\cdot\frac34=\frac14$         |
| B, C, A | $\frac26\cdot\frac14=\frac{1}{12}$    |
| C, A, B | $\frac16\cdot\frac35=\frac{1}{10}$    |
| C, B, A | $\frac16\cdot\frac25=\frac{1}{15}$    |

이 표에서 A 가 C 보다 위에 오는 순위의 확률을 더하면 $\frac13+\frac16+\frac14=\frac34$ 이고, Bradley–Terry 모형의 확률과 같다.

# 정의

대상 $1,\dots,m$ 에 양수 $s_1,\dots,s_m$ 을 두자. 순위 $\sigma=(\sigma_1,\dots,\sigma_m)$ 은 $1$ 위가 $\sigma_1$, $m$ 위가 $\sigma_m$ 인 대상의 나열이다. 다음 확률로 순위를 주는 모형을 **Plackett–Luce 모형** 이라 한다[^1].

$$
P(\sigma)=\prod_{k=1}^{m-1}\frac{s_{\sigma_k}}{s_{\sigma_k}+s_{\sigma_{k+1}}+\cdots+s_{\sigma_m}}
$$

$k$ 번째 인수는 $k$ 위까지 정해진 뒤 남은 대상 가운데 $\sigma_k$ 를 고를 확률이다. 직관 절의 표가 $m=3$, $s=(3,2,1)$ 인 경우다. $s_i$ 를 대상 $i$ 의 힘이라 하고, 모든 $s_i$ 에 같은 양수를 곱해도 확률이 같으므로 힘은 비로만 정해진다.

상위 $K$ 개만 적은 기록은 곱을 $k=K$ 까지만 한다. $K=1$ 이면 집합 $S$ 에서 $i$ 를 고를 확률이 $s_i/\sum_{j\in S}s_j$ 이고, 이것을 **Luce 선택 모형(Luce choice model)** 이라 한다. $m=2$ 이면 Bradley–Terry 모형이다.

$\theta_i=\log s_i$ 로 두면 순위 기록 $\sigma^1,\dots,\sigma^N$ 의 로그가능도는 다음과 같다. 안쪽 합의 $R\_{rk}=\lbrace\sigma^r_k,\dots,\sigma^r_m\rbrace$ 는 순위 $r$ 에서 $k$ 위를 고를 때 남은 대상의 집합이다.

$$
\ell(\theta)=\sum_{r=1}^{N}\sum_{k=1}^{m-1}\Bigl(\theta_{\sigma^r_k}-\log\sum_{j\in R_{rk}}e^{\theta_j}\Bigr)
$$

# 성질

## Luce 선택 공리

Luce 선택 모형에서 두 대상 $i,j\in S$ 를 고를 확률의 비는 $s_i/s_j$ 이고 $S$ 의 나머지 원소에 관계없다. 이 성질을 **Luce 선택 공리(Luce's choice axiom)** 라 한다. 역으로 모든 선택 확률이 양수이고 이 공리를 만족하는 선택 확률은 어떤 양수 $s_i$ 로 Luce 선택 모형의 꼴로 쓰인다[^2].

## Gumbel 효용 표현

$G_1,\dots,G_m$ 이 서로 독립이고 표준 Gumbel 분포 $P(G\le x)=\exp(-e^{-x})$ 를 따른다고 하자([극값 분포](extreme-value-distributions.md)). 효용 $U_i=\theta_i+G_i$ 가 큰 순서로 대상을 세운 순위는 Plackett–Luce 모형을 따른다[^3].

증명의 요지. $U_i$ 가 최대일 확률은 다음 적분이고 $e^{\theta_i}/\sum_je^{\theta_j}$ 다.

$$
\int_{-\infty}^{\infty}e^{-(x-\theta_i)}\exp\Bigl(-\sum_je^{-(x-\theta_j)}\Bigr)dx
$$

또 최댓값이 어느 대상에서 나왔는지는 최댓값의 크기와 독립이고, 그 대상을 뺀 나머지 효용의 조건부 분포는 같은 꼴이다. 그래서 2 위 이하도 남은 대상 사이의 같은 선택으로 정해진다.

## 두 대상의 상대 순서

$G_i-G_j$ 는 표준 로지스틱 분포(logistic distribution)를 따르므로 $i$ 가 $j$ 보다 위에 올 확률은 다음과 같다.

$$
P(U_i\gt U_j)=\frac{1}{1+e^{-(\theta_i-\theta_j)}}=\frac{s_i}{s_i+s_j}
$$

두 대상의 상대 순서만 보면 Bradley–Terry 모형이고, 직관 절의 $3/4$ 가 이 값이다. 그러나 세 쌍의 상대 순서는 서로 독립이 아니어서, 순위를 쌍으로 쪼개 독립인 비교로 다루면 가능도가 달라진다.

## 가능도 방정식과 존재

각 항이 $\theta$ 의 오목 함수이므로 $\ell$ 은 오목하다. $\ell$ 을 $\theta_i$ 로 미분해 $0$ 으로 두면 다음이 나온다. $W_i$ 는 대상 $i$ 가 남은 대상 가운데 뽑힌 횟수이고, 마지막 자리는 세지 않는다.

$$
W_i=\sum_{r=1}^{N}\sum_{k:\thinspace i\in R_{rk}}\frac{s_i}{\sum_{j\in R_{rk}}s_j}
$$

[최대가능도 추정](maximum-likelihood.md) 값에서는 대상마다 실제로 뽑힌 횟수가 모형의 기대 횟수와 같다.

대상을 비어 있지 않은 두 집단으로 어떻게 나누어도 둘째 집단의 어떤 대상이 첫째 집단의 어떤 대상보다 위에 온 순위가 있으면, 최대가능도 추정값이 존재하고 비를 빼고 유일하다[^4]. 한 집단이 늘 다른 집단보다 위에 오면 그 집단의 힘을 키울수록 가능도가 커지므로 최댓값이 없다.

## MM 알고리즘

Bradley–Terry 모형의 Zermelo 반복을 넓힌 반복이다. D. R. Hunter 는 각 단계가 로그가능도의 아래쪽 근사를 최대화하는 MM 알고리즘(minorize–maximize algorithm)의 한 걸음이라 가능도가 줄지 않고, 위의 존재 조건 아래에서 추정값으로 수렴함을 보였다[^4].

```javascript
function plackettLuce(rankings, m, iterations) {
  let s = new Array(m).fill(1);
  const wins = new Array(m).fill(0);
  for (const r of rankings) {
    for (let k = 0; k < r.length - 1; k++) wins[r[k]] += 1;
  }
  for (let t = 0; t < iterations; t++) {
    const denom = new Array(m).fill(0);
    for (const r of rankings) {
      let rest = r.reduce((acc, i) => acc + s[i], 0);
      for (let k = 0; k < r.length - 1; k++) {
        for (let l = k; l < r.length; l++) denom[r[l]] += 1 / rest;
        rest -= s[r[k]];
      }
    }
    const next = s.map((_, i) => wins[i] / denom[i]);
    const total = next.reduce((a, b) => a + b, 0);
    s = next.map((x) => x / total);
  }
  return s;
}
```

`rankings` 의 각 원소는 대상 번호를 1 위부터 적은 배열이고, 상위 일부만 적은 순위도 그대로 넣는다.

# 활용

- 경마. D. A. Harville 은 말 $i$ 가 우승할 확률 $p_i$ 를 배당에서 읽고, $i$ 가 1 등이고 $j$ 가 2 등일 확률을 $p_ip_j/(1-p_i)$ 로 두었다[^5]. 이것은 $s=p$ 인 Plackett–Luce 모형의 상위 두 자리 확률이고 Harville 공식(Harville formula)이라 부른다.
- 순위 학습(learning to rank). 검색 결과의 목록 전체를 학습할 때 점수 $\theta_i$ 를 모형으로 내고 정답 순위의 음의 로그가능도 $-\ell(\theta)$ 를 최소화한다. 이 손실을 ListMLE 라 한다.
- 선호 학습. 사람이 여러 응답을 좋은 순서로 세운 기록으로 보상 모형을 학습할 때, 응답이 둘이면 Bradley–Terry 모형의 손실이고 셋 이상이면 이 모형의 손실이다.
- 가중 비복원 추출(weighted sampling without replacement). 대상을 힘에 비례하는 확률로 하나씩 뽑고 뽑은 것을 빼는 추출에서 뽑힌 순서는 이 모형을 따른다. Gumbel 효용 표현에 따라 $\theta_i+G_i$ 를 한 번 계산해 큰 것부터 $K$ 개를 고르면 같은 분포의 표본이 나온다.
- 순위 투표. 유권자가 후보를 좋아하는 순서로 적어 낸 자료에서 후보의 지지 강도를 추정한다. [Kemeny 순위](kemeny-ranking.md)의 Mallows 모형은 참된 순위 하나를 두고 거리로 확률을 주는 데 비해, 이 모형은 후보마다 힘을 둔다.

[^1]: R. L. Plackett, "The analysis of permutations", Applied Statistics 24 (1975).
[^2]: R. D. Luce, *Individual Choice Behavior: A Theoretical Analysis*, Wiley, 1959.
[^3]: J. I. Yellott Jr., "The relationship between Luce's choice axiom, Thurstone's theory of comparative judgment, and the double exponential distribution", Journal of Mathematical Psychology 15 (1977).
[^4]: D. R. Hunter, "MM algorithms for generalized Bradley–Terry models", Annals of Statistics 32 (2004).
[^5]: D. A. Harville, "Assigning probabilities to the outcomes of multi-entry competitions", Journal of the American Statistical Association 68 (1973).

# 연관 문서

## 선수지식

- [Bradley–Terry 모형](bradley-terry-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning
