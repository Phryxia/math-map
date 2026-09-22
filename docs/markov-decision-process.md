# Markov 결정 과정

# 개요

Markov 결정 과정은 행동을 고를 수 있는 Markov 연쇄다. 상태마다 행동을 하나 고르면 그 행동이 다음 상태의 분포와 보상을 정하고, 고르는 규칙을 바꾸면 연쇄가 바뀐다. 장기 보상의 기댓값을 가장 크게 하는 규칙을 찾는 것이 이 모형의 문제다.

# 직관

격자 위에서 출발점부터 목적지까지 비용이 가장 적은 경로를 찾는다. 칸마다 상하좌우 중 하나를 고르고 한 칸을 움직이면 비용 $1$ 이 든다. [최단경로](shortest-paths.md)의 완화 반복은 목적지까지 남은 최소 비용 $d(s)$ 를 다음 식으로 고쳐 나간다.

$$d(s)=\min_{a}\lbrace 1+d(s_a)\rbrace$$

$s_a$ 는 칸 $s$ 에서 방향 $a$ 로 한 칸 간 칸이다.

이 격자에 바람이 분다. 방향 $a$ 를 골라도 확률 $0.8$ 로 그쪽으로 가고 확률 $0.1$ 씩 좌우로 밀린다. 그러면 $s_a$ 가 하나로 정해지지 않으므로 $1+d(s_a)$ 를 계산할 수 없다. 경로를 미리 적어 두는 것도 소용이 없다. 두 번째 칸에서 어디에 서 있을지 모르기 때문이다.

도착 칸이 하나가 아니라 셋이고 각각의 확률을 알고 있으니, 한 값 대신 세 값을 확률로 평균한다. 위 식의 $d(s_a)$ 자리에 $0.8\thinspace d(s_a)+0.1\thinspace d(s_{a'})+0.1\thinspace d(s_{a''})$ 를 넣는다. 좌우로 밀리는 칸이 $s_{a'}$ 와 $s_{a''}$ 다. 이 식은 여전히 $d$ 에 대한 방정식이고 완화 반복도 그대로 돌아간다.

경로 대신 정해야 하는 것은 칸마다 어느 방향을 고를지다. 어느 칸에 서 있든 그 칸의 값만 보고 방향이 정해지므로, 계획은 칸에서 방향으로 가는 함수 하나다. 이 함수를 정책이라 하고 위 식을 푸는 $d$ 를 가치함수라 한다.

# 정의

**Markov 결정 과정**(Markov decision process, MDP)은 다섯 짝 $(S,A,P,r,\gamma)$ 다[^2]. $S$ 는 상태집합, $A$ 는 행동집합, $P(s'\mid s,a)$ 는 상태 $s$ 에서 행동 $a$ 를 했을 때 $s'$ 로 갈 확률, $r(s,a)$ 는 그때 받는 보상, $\gamma\in\lbrack 0,1)$ 는 할인율이다. 아래에서 $S$ 와 $A$ 는 유한집합으로 둔다.

## 정책과 가치함수

**정책**은 함수 $\pi:S\to A$ 다. 정책을 고정하면 전이가 $P(s'\mid s,\pi(s))$ 인 [Markov 연쇄](markov-chains.md)가 되고, 그 연쇄를 상태 $s$ 에서 출발시켜 받는 보상의 할인합의 기댓값이 $\pi$ 의 **가치함수**다.

$$V^\pi(s)=\mathbb E\left\lbrack\sum_{t=0}^{\infty}\gamma^t\thinspace r(S_t,\pi(S_t))\thinspace\Big\vert\thinspace S_0=s\right\rbrack$$

보상이 유계이고 $\gamma\lt 1$ 이므로 이 급수는 절대수렴한다. 할인율이 없으면 합이 발산할 수 있고, 그때는 시간당 평균 보상을 대신 쓴다[^1].

## Bellman 최적 방정식

**최적 가치함수**는 $V^\ast(s)=\max_\pi V^\pi(s)$ 이고, 다음 방정식을 만족한다.

$$V^\ast(s)=\max_{a\in A}\left\lbrace r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)\thinspace V^\ast(s')\right\rbrace$$

우변을 임의의 함수 $V:S\to\mathbb R$ 에 적용하는 연산을 **Bellman 작용소** $T$ 라 한다.

$$(TV)(s)=\max_{a\in A}\left\lbrace r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)\thinspace V(s')\right\rbrace$$

최적 가치함수는 $T$ 의 고정점이다.

## 값 반복

$V_0$ 을 아무렇게나 두고 $V_{k+1}=TV_k$ 를 반복한다.

```javascript
function valueIteration(S, A, P, r, gamma, eps) {
  let V = new Map(S.map(s => [s, 0]))
  while (true) {
    const next = new Map()
    for (const s of S) {
      next.set(s, Math.max(...A.map(a =>
        r(s, a) + gamma * S.reduce((acc, t) => acc + P(t, s, a) * V.get(t), 0))))
    }
    const delta = Math.max(...S.map(s => Math.abs(next.get(s) - V.get(s))))
    V = next
    if (delta < eps) return V
  }
}
```

# 성질

## 축약사상

$T$ 는 상한 노름에서 계수 $\gamma$ 의 축약사상이다.

$$\Vert TV-TW\Vert\_\infty\le\gamma\thinspace\Vert V-W\Vert\_\infty$$

증명의 요지. 두 최댓값의 차는 같은 $a$ 에서 잰 차의 최댓값 이하다. 그 차는 $\gamma\sum_{s'}P(s'\mid s,a)\lvert V(s')-W(s')\rvert$ 이하이고, 확률의 합이 $1$ 이므로 $\gamma\thinspace\Vert V-W\Vert\_\infty$ 이하다.

유한집합 위의 함수들은 상한 노름에서 완비이므로 [축약사상 고정점 정리](banach-fixed-point.md)가 적용된다. $T$ 의 고정점은 유일하고 값 반복은 어느 $V_0$ 에서 출발해도 그 고정점으로 수렴한다. 수렴 속도는 $\Vert V_k-V^\ast\Vert\_\infty\le\gamma^k\thinspace\Vert V_0-V^\ast\Vert\_\infty$ 다.

## 결정적 정상 정책의 최적성

과거 전체를 보거나 난수를 쓰는 정책을 허용해도 최적값은 커지지 않는다. Bellman 방정식의 우변에서 최댓값을 주는 행동을 상태마다 하나 고르면 그 정책 $\pi^\ast$ 가 $V^{\pi^\ast}=V^\ast$ 를 만족하기 때문이다. 상태가 다음 상태의 분포를 결정하므로 과거를 더 보아도 얻을 정보가 없다.

$$\pi^\ast(s)\in\mathop{\mathrm{argmax}}\_{a\in A}\left\lbrace r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)\thinspace V^\ast(s')\right\rbrace$$

## 정책 반복의 유한 종료

정책 $\pi$ 의 가치 $V^\pi$ 를 선형방정식 $V=r_\pi+\gamma P_\pi V$ 로 풀고, 그 값으로 위의 argmax 를 취해 $\pi'$ 를 얻는 것을 반복한다. 각 단계에서 $V^{\pi'}\ge V^\pi$ 이고 등호는 $\pi$ 가 최적일 때만 성립한다. 결정적 정책은 $\lvert A\rvert^{\lvert S\rvert}$ 개뿐이고 값이 순증가하므로 반복은 유한 번에 멈춘다.

## 선형계획 표현

$V^\ast$ 는 다음 [선형계획법](linear-programming.md) 문제의 해다.

$$\text{minimize}\thinspace\sum_{s}V(s)\quad\text{subject to}\quad V(s)\ge r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)\thinspace V(s')$$

제약은 모든 $(s,a)$ 에 대한 것이다. 실행가능한 $V$ 는 $TV\le V$ 를 만족하고 단조성에서 $V\ge V^\ast$ 가 따라오므로, 합을 최소화하면 $V^\ast$ 에 닿는다.

# 활용

- **최단경로.** 전이가 결정적이고 $\gamma=1$ 이면 Bellman 최적 방정식이 최단경로의 완화 식이 된다. 값 반복이 Bellman–Ford 반복이고, 할인율이 수축을 주는 자리에 음수 사이클의 부재가 들어간다.
- **강화학습.** $P$ 와 $r$ 을 모르고 표본만 얻는 경우다. Bellman 작용소를 표본으로 근사한 것이 Q 학습의 갱신식이고, 축약성이 그 수렴 증명의 근거다.
- **재고와 대기행렬의 제어.** 재고 수준이 상태, 주문량이 행동, 보관비와 품절비의 합이 보상이다. 최적 정책이 기준값 하나로 적히는 조건을 이 틀에서 찾는다.
- **최적 정지.** 행동이 "멈춘다" 와 "계속한다" 둘뿐인 경우이고, 계속의 가치와 멈춤의 보상을 비교하는 것이 Bellman 방정식이다. [Martingale](martingales.md)의 선택적 정지가 다루는 문제와 같은 대상이다.

[^1]: M. L. Puterman, *Markov Decision Processes: Discrete Stochastic Dynamic Programming*, Wiley, 1994. 6장이 할인 문제의 값 반복, 정책 반복, 선형계획 표현을 다룬다.

[^2]: R. Bellman, *A Markovian decision process*, J. Math. Mech. **6** (1957), 679–684.

# 연관 문서

## 선수지식

- [Markov 연쇄](markov-chains.md)
- [최단경로](shortest-paths.md)
- [축약사상 고정점 정리](banach-fixed-point.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #optimization #algorithms #machine_learning
