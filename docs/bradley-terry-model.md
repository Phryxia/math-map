# Bradley–Terry 모형

# 개요

**Bradley–Terry 모형(Bradley–Terry model)** 은 둘씩 겨룬 승패 기록으로 각 대상에 힘을 나타내는 양수 하나를 주는 확률 모형이다. 세 팀이 서로 다른 횟수로 맞붙었다면, 팀마다 승률을 세는 것만으로는 누가 약한 상대를 많이 만났는지가 반영되지 않는다. 팀 $i$ 가 팀 $j$ 를 이길 확률을 힘의 비 $s_i/(s_i+s_j)$ 로 놓고 [최대가능도 추정](maximum-likelihood.md)으로 힘을 정하면, 모든 경기 결과를 한 번에 반영한 점수가 나온다.

# 직관

세 팀 A, B, C 의 경기 기록이 다음과 같다.

| 대진  | 경기 수 | 앞 팀의 승 |
| ----- | ------- | ---------- |
| A – B | 3       | 2          |
| B – C | 3       | 2          |
| A – C | 5       | 4          |

승률은 A 가 $6/8$, B 가 $3/6$, C 가 $2/8$ 이다. B 의 승률 $1/2$ 는 강한 A 와 세 번, 약한 C 와 세 번 붙어 얻은 값이고, C 의 $1/4$ 은 강한 A 와 다섯 번 붙어 얻은 값이다. 상대가 다르니 승률을 그대로 견줄 수 없다.

팀마다 힘 $s_A$, $s_B$, $s_C$ 를 두고 A 가 B 를 이길 확률을 $s_A/(s_A+s_B)$ 로 놓는다. $s_A=4$, $s_B=2$, $s_C=1$ 로 두면 A 가 B 를 이길 확률은 $2/3$, B 가 C 를 이길 확률은 $2/3$, A 가 C 를 이길 확률은 $4/5$ 다. 이 확률로 기대 승수를 세면 A 는 $3\cdot\frac23+5\cdot\frac45=6$, B 는 $3\cdot\frac13+3\cdot\frac23=3$, C 는 $3\cdot\frac13+5\cdot\frac15=2$ 로 실제 승수와 같다. 이 힘이 기록의 가능도를 최대로 만드는 값이다.

# 정의

대상 $1,\dots,m$ 에 양수 $s_1,\dots,s_m$ 을 두고, $i$ 와 $j$ 가 겨루면 서로 독립으로 $i$ 가 확률 $s_i/(s_i+s_j)$ 로 이긴다고 놓은 모형을 **Bradley–Terry 모형** 이라 한다. $s_i$ 를 대상 $i$ 의 **힘(strength)** 이라 한다.

$\theta_i=\log s_i$ 로 두고 $i$ 가 $j$ 를 이기는 사건을 $i\succ j$ 로 적으면 이길 확률은 다음과 같다.

$$
P(i\succ j)=\frac{s_i}{s_i+s_j}=\frac{1}{1+e^{-(\theta_i-\theta_j)}}
$$

모든 $s_i$ 에 같은 양수를 곱해도 확률이 같으므로 힘은 비로만 정해진다. 직관 절에서는 $s_C=1$ 로 고정했다.

$n_{ij}$ 를 $i$ 와 $j$ 의 경기 수, $w_{ij}$ 를 $i$ 가 $j$ 를 이긴 횟수, $W_i=\sum_j w_{ij}$ 를 $i$ 의 총 승수라 하면 로그가능도는 다음과 같다.

$$
\ell(\theta)=\sum_{i\ne j}w_{ij}\bigl(\theta_i-\log(e^{\theta_i}+e^{\theta_j})\bigr)
$$

# 성질

## 가능도 방정식

$\ell$ 을 $\theta_i$ 로 미분해 $0$ 으로 두면 다음이 나온다.

$$
W_i=\sum_{j\ne i}n_{ij}\frac{s_i}{s_i+s_j}
$$

최대가능도 추정값에서는 대상마다 실제 승수가 모형의 기대 승수와 같다. 직관 절의 계산이 이 방정식을 확인한 것이다.

## 존재와 유일성

각 항 $-\log(1+e^{-(\theta_i-\theta_j)})$ 는 볼록 함수에 음의 부호를 붙인 오목 함수이므로 $\ell$ 은 $\theta$ 의 오목 함수다. 경기 기록에서 $i$ 가 $j$ 를 한 번이라도 이겼으면 $i$ 에서 $j$ 로 화살표를 긋는다. 최대가능도 추정값이 존재하고 비를 빼고 유일한 것은, 이 방향 그래프에서 어느 대상에서 출발해도 화살표를 따라 다른 모든 대상에 닿을 수 있는 것과 동치다.[^1]

이 조건이 깨지는 가장 단순한 경우는 모든 경기를 이긴 대상이 있는 경우다. 그 대상의 힘을 키울수록 가능도가 커지므로 최댓값이 없다.

## Zermelo 반복

가능도 방정식을 $s_i$ 에 대해 풀어 놓은 꼴로 반복한다.

```javascript
function bradleyTerry(n, w, iterations) {
  const m = n.length;
  let s = new Array(m).fill(1);
  for (let t = 0; t < iterations; t++) {
    const next = s.map((si, i) => {
      let wins = 0;
      let denom = 0;
      for (let j = 0; j < m; j++) {
        if (j === i) continue;
        wins += w[i][j];
        denom += n[i][j] / (si + s[j]);
      }
      return wins / denom;
    });
    const scale = next[m - 1];
    s = next.map((x) => x / scale);
  }
  return s;
}
```

E. Zermelo 가 1929 년에 체스 대회의 순위를 정하려고 이 반복을 썼다.[^2] 각 단계는 로그가능도의 아래쪽 근사를 최대화하는 MM 알고리즘(minorize–maximize algorithm)의 한 걸음이라 가능도가 줄지 않고, 존재 조건 아래에서 추정값으로 수렴한다.[^3]

## 로지스틱 회귀

대상 $i$ 와 $j$ 의 경기에 $i$ 자리는 $1$, $j$ 자리는 $-1$, 나머지는 $0$ 인 설명변수 벡터를 주면, 이길 확률은 이 벡터와 $\theta$ 의 내적에 로지스틱 함수를 씌운 값이다. 그러므로 Bradley–Terry 모형은 절편이 없는 로지스틱 회귀이고, [일반화선형모형](generalized-linear-models.md)의 반복 가중최소제곱으로도 추정한다. 로지스틱 함수 대신 표준정규분포의 분포함수를 쓰면 Thurstone 모형(Thurstone model)이 된다.

## 추이성

$s_i\gt s_j$ 인 것과 $i$ 가 $j$ 를 절반보다 큰 확률로 이기는 것이 동치다. 그래서 이 모형에서 "이긴다" 는 관계는 힘의 순서와 같고 추이적이다. A 가 B 를, B 가 C 를, C 가 A 를 이기는 [비추이적 주사위](nontransitive-dice.md) 같은 순환은 이 모형으로 맞출 수 없다.

## Luce 선택 모형

여러 대상의 집합 $S$ 가운데 하나를 고를 때 $i$ 를 고를 확률을 $s_i/\sum_{j\in S}s_j$ 로 두는 모형을 Luce 선택 모형(Luce choice model)이라 한다. $S$ 가 두 원소이면 Bradley–Terry 모형이다. 순위 전체를 1 위부터 차례로 남은 대상 가운데 고르는 것으로 보면 Plackett–Luce 모형(Plackett–Luce model)이 된다.

## Elo 평점

체스의 Elo 평점(Elo rating)에서 평점 $R_i$ 와 $R_j$ 인 두 선수의 기대 득점은 다음과 같다.

$$
E_i=\frac{1}{1+10^{(R_j-R_i)/400}}
$$

$s_i=10^{R_i/400}$ 로 두면 이것은 Bradley–Terry 모형의 이길 확률이다. 경기 뒤의 갱신 $R_i\leftarrow R_i+K(y_i-E_i)$ 에서 $y_i$ 는 실제 득점이다. $y_i-E_i$ 는 그 경기 하나의 로그가능도를 $\theta_i$ 로 미분한 값이므로, 이 갱신은 [확률적 경사 하강법](stochastic-gradient-descent.md)의 한 걸음이다.

# 활용

- 경기 순위. 맞붙은 횟수가 팀마다 다른 리그, 체스 대회, 테니스 투어에서 힘을 추정해 순위를 매긴다. 직관 절처럼 상대의 강약이 승률에 섞이는 것을 걸러낸다.
- 선호 학습. 사람이 두 응답 가운데 나은 것을 고른 기록으로 보상 모형 $r$ 을 학습할 때, 고른 응답 $y_w$ 와 버린 응답 $y_l$ 에 대해 로지스틱 함수 $\sigma(t)=1/(1+e^{-t})$ 로 쓴 손실 $-\log\sigma(r(y_w)-r(y_l))$ 을 최소화한다. 이것은 $\theta=r$ 인 Bradley–Terry 모형의 음의 로그가능도다. 사람 피드백을 이용한 강화학습(reinforcement learning from human feedback, RLHF)의 보상 모형이 이 꼴이다.
- 쌍대 비교 실험. 맛, 소리, 그림의 품질처럼 절대 점수를 매기기 어려운 대상을 둘씩 비교하게 하고 이 모형으로 척도를 세운다. R. A. Bradley 와 M. E. Terry 가 1952 년에 이 목적으로 모형을 냈다.[^4]
- 순위 학습. 검색 결과의 순위를 학습할 때 두 문서 가운데 어느 쪽이 위에 와야 하는지를 점수 차의 로지스틱 함수로 모형화한다.

[^1]: L. R. Ford Jr., "Solution of a ranking problem from binary comparisons", American Mathematical Monthly 64 (1957).
[^2]: E. Zermelo, "Die Berechnung der Turnier-Ergebnisse als ein Maximumproblem der Wahrscheinlichkeitsrechnung", Mathematische Zeitschrift 29 (1929).
[^3]: D. R. Hunter, "MM algorithms for generalized Bradley–Terry models", Annals of Statistics 32 (2004).
[^4]: R. A. Bradley, M. E. Terry, "Rank analysis of incomplete block designs: I. The method of paired comparisons", Biometrika 39 (1952).

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning
