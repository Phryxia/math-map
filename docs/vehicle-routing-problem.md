# 차량 경로 문제

# 개요

**차량 경로 문제(vehicle routing problem, VRP)** 는 창고를 떠난 차량 여러 대가 모든 고객에게 짐을 나르고 창고로 돌아오는 경로들 가운데, 이동 거리의 합이 가장 짧은 것을 찾는 문제다. 트럭 한 대에 상자가 두 개만 실리는데 고객 넷이 상자를 하나씩 기다린다고 하자. 한 번에 넷을 모두 도는 가장 짧은 길은 상자가 모자라서 쓸 수 없고, 고객을 둘씩 어떻게 묶어 어느 순서로 돌지 함께 정해야 한다.

고객 하나씩 따로 왕복하는 데서 시작해, 두 고객을 한 번에 돌 때 줄어드는 거리가 큰 쌍부터 실을 수 있는 한 하나의 경로로 잇는다.

# 직관

창고를 $0$, 고객을 $1,2,3,4$ 라 하자. 창고에서 각 고객까지는 $5$ 이고, 고객 사이의 거리는 $d(1,2)=d(3,4)=2$, $d(2,3)=8$, 나머지 쌍은 $10$ 이다. $1$ 과 $2$ 는 북쪽에, $3$ 과 $4$ 는 남쪽에 붙어 있고, $2$ 와 $3$ 은 동쪽 끝에서 조금 가깝다.

트럭에 짐이 얼마든지 실리면 [외판원 문제](traveling-salesman-problem.md)이고, $0\to1\to2\to3\to4\to0$ 이 길이 $22$ 로 가장 짧다. 트럭에 상자가 두 개만 실리면 이 길은 쓸 수 없고, 한 경로가 고객을 둘까지만 들른다.

고객마다 따로 왕복하면 $4\times10=40$ 이다. 두 고객 $i,j$ 를 한 번에 돌면 왕복 둘 $0\to i\to0$, $0\to j\to0$ 이 $0\to i\to j\to0$ 하나로 바뀌어 $d(0,i)+d(0,j)-d(i,j)$ 만큼 준다. $1,2$ 를 묶으면 $8$, $3,4$ 를 묶으면 $8$, $2,3$ 을 묶으면 $2$ 가 준다. 큰 것부터 $1,2$ 와 $3,4$ 를 묶으면 트럭이 둘 다 찼으므로 더 묶을 수 없고, 거리의 합은 $40-16=24$ 다.

# 정의

**용량 제한 차량 경로 문제(capacitated vehicle routing problem, CVRP)** 는 다음 자료로 정해진다.

- 정점 $0,1,\dots,n$ 위의 완전그래프와 음이 아닌 대칭 거리 $d(i,j)$. 정점 $0$ 이 **창고(depot)** 이고 나머지가 고객이다.
- 고객마다 수요 $q_i\gt 0$ 과 차량의 용량 $Q\ge\max_i q_i$.

**경로(route)** 는 창고에서 출발해 고객 집합 $S$ 를 한 번씩 들르고 창고로 돌아오는 순환이고, $S$ 의 수요 합이 $Q$ 이하여야 한다. 고객 전체를 겹치지 않게 나누어 각 조각을 경로 하나로 도는 것이 해이고, 해의 비용은 경로 길이의 합이다. 비용이 가장 작은 해를 찾는 것이 문제다. 차량 수 $K$ 를 함께 주어 경로를 $K$ 개 이하로 묶기도 한다.

직관 절의 예는 $n=4$, $q_i=1$, $Q=2$ 다. 해 $\lbrace 0\to1\to2\to0,\ 0\to3\to4\to0\rbrace$ 의 비용은 $12+12=24$ 이고, 고객을 둘씩 나누는 다른 두 방법은 비용이 $38$ 과 $40$ 이므로 이것이 최적이다.

# 성질

## 외판원 문제와 상자 채우기 문제

$Q$ 가 수요의 합 이상이면 경로 하나로 모든 고객을 돌 수 있고, 차량 경로 문제는 외판원 문제다. 거리를 모두 같게 두면 비용은 경로의 수에만 달려 있고, 차량 $K$ 대로 충분한지 묻는 것은 수요들을 용량 $Q$ 인 상자 $K$ 개에 나누어 담을 수 있는지 묻는 [상자 채우기 문제](bin-packing.md)다. 그래서 차량 수가 정해지면 허용되는 해가 하나라도 있는지 판정하는 것부터 NP-완전(NP-complete, NP 는 nondeterministic polynomial time)이다.

## 절약값

두 고객 $i,j$ 의 **절약값(savings)** 은 다음이다.

$$
s(i,j)=d(0,i)+d(0,j)-d(i,j)
$$

$i$ 에서 끝나는 경로 $0\to\dots\to i\to0$ 과 $j$ 에서 시작하는 경로 $0\to j\to\dots\to0$ 을 $0\to\dots\to i\to j\to\dots\to0$ 하나로 이으면 간선 $(i,0)$ 과 $(0,j)$ 가 빠지고 $(i,j)$ 가 들어오므로 비용이 정확히 $s(i,j)$ 만큼 준다. 거리가 삼각부등식을 만족하면 $s(i,j)\ge0$ 이다.

**Clarke–Wright 절약법(Clarke–Wright savings algorithm)** 은 고객마다 따로 왕복하는 해에서 출발해, 절약값이 큰 쌍부터 두 고객이 서로 다른 경로의 끝에 있고 두 경로의 수요 합이 $Q$ 이하이면 잇는다[^1]. 직관 절의 계산이 이 절차다.

```javascript
// d: 거리 표, q: 수요(q[0] 은 쓰지 않는다), Q: 용량. 경로마다 고객 순서를 돌려준다
function clarkeWright(n, d, q, Q) {
  const routeOf = new Map();
  for (let i = 1; i <= n; i++) routeOf.set(i, { seq: [i], load: q[i] });
  const pairs = [];
  for (let i = 1; i <= n; i++)
    for (let j = i + 1; j <= n; j++) pairs.push([d[0][i] + d[0][j] - d[i][j], i, j]);
  pairs.sort((a, b) => b[0] - a[0]);
  for (const [s, i, j] of pairs) {
    const ri = routeOf.get(i);
    const rj = routeOf.get(j);
    if (s <= 0 || ri === rj || ri.load + rj.load > Q) continue;
    if (ri.seq[ri.seq.length - 1] !== i) ri.seq.reverse(); // i 를 끝으로 돌린다
    if (rj.seq[0] !== j) rj.seq.reverse(); // j 를 앞으로 돌린다
    if (ri.seq[ri.seq.length - 1] !== i || rj.seq[0] !== j) continue; // 경로 가운데의 고객은 잇지 않는다
    const merged = { seq: [...ri.seq, ...rj.seq], load: ri.load + rj.load };
    for (const c of merged.seq) routeOf.set(c, merged);
  }
  return [...new Set(routeOf.values())].map((r) => r.seq);
}
```

절약값이 큰 쌍을 먼저 잇는 탐욕 규칙이라 최적을 보장하지 않는다. 앞에서 이은 경로가 용량을 채워, 뒤에 올 더 좋은 묶음을 막을 수 있다.

## 하한과 순회 분할

모든 고객의 수요가 $1$ 이라 하자. 경로 하나는 고객을 $Q$ 명까지 들르고, 그 경로의 길이는 가장 먼 고객까지의 왕복 이상이라 들른 고객 $i$ 들의 $2d(0,i)$ 의 평균 이상이다. 경로마다 더하면 최적 비용 $\mathrm{OPT}$ 에 대해 다음이 나온다.

$$
\mathrm{OPT}\ge\max\Big(L^{\ast},\ \frac{2}{Q}\sum_{i=1}^{n}d(0,i)\Big)
$$

$L^{\ast}$ 는 창고와 고객 전체를 도는 외판원 문제의 최적 길이다. 경로들을 창고에서 이어 붙이면 순회 하나가 되고 삼각부등식으로 줄여도 길이가 늘지 않으므로 $L^{\ast}\le\mathrm{OPT}$ 다. 직관 절의 예에서는 $\max(22,20)=22\le24$ 다.

순회 분할(iterated tour partitioning)은 창고와 고객 전체를 도는 순회 하나를 구한 뒤, 고객을 순회의 순서대로 $Q$ 명씩 끊어 조각마다 창고에 잇는다. 끊기 시작하는 자리 $Q$ 가지 가운데 가장 좋은 것을 고른다. 순회의 길이가 $L$ 이면 결과의 비용은 다음 이하다[^2].

$$
\frac{2}{Q}\sum_{i=1}^{n}d(0,i)+\Big(1-\frac{1}{Q}\Big)L
$$

시작 자리 $Q$ 가지에 대해 비용을 평균하면, 순회의 각 간선은 $Q$ 가지 가운데 한 번만 끊기고 끊긴 자리마다 양쪽 고객이 창고와 이어진다. 외판원 문제 문서의 Christofides 알고리즘(Christofides algorithm)으로 $L\le\tfrac32L^{\ast}$ 인 순회를 쓰면 위 하한으로 비용이 $\big(\tfrac52-\tfrac{3}{2Q}\big)\mathrm{OPT}$ 이하다.

## 집합 분할 정식화

허용되는 경로 전체를 $\mathcal R$, 경로 $r$ 의 길이를 $c_r$ 이라 하면 차량 경로 문제는 다음 [정수계획법](integer-programming.md) 문제다.

$$
\min\sum_{r\in\mathcal R}c_r x_r\quad\text{subject to}\quad\sum_{r\ni i}x_r=1\ (i=1,\dots,n),\quad x_r\in\lbrace 0,1\rbrace
$$

경로의 수가 고객 수에 대해 지수적으로 많으므로 선형계획 완화를 열을 하나씩 더해 가며 푼다. 새로 더할 경로를 찾는 문제는 고객마다 쌍대 변수를 뺀 거리로 창고에서 창고까지 가는 가장 짧은 경로를 용량 제한 아래 찾는 문제다. 이 완화의 값은 큰 실례에서도 최적에 가까워, 정확한 해는 이 완화로 하한을 구하는 분기한정(branch and bound)으로 얻는다.

# 활용

- 배송 계획. G. B. Dantzig 과 J. H. Ramser 는 주유소들에 휘발유를 나르는 유조차의 경로로 이 문제를 처음 세웠다[^3]. 택배, 식료품 배달, 우편 수거가 같은 꼴이다.
- 시간 창(time window). 고객마다 도착해야 하는 시각의 구간을 더한 판본이 학교 버스, 방문 간호, 기술자 출동 계획에 쓰인다.
- 호 경로 문제(arc routing problem). 고객 대신 길 자체를 작업해야 하는 제설과 쓰레기 수거는 [시골 우편배달부 문제](rural-postman-problem.md)에 용량을 더한 용량 제한 호 경로 문제로 세운다.
- 공유 이동과 승차 호출. 태우는 곳과 내리는 곳을 짝으로 둔 수거·배달 판본(pickup and delivery)이 합승 배차에 쓰인다.

[^1]: G. Clarke, J. W. Wright, "Scheduling of vehicles from a central depot to a number of delivery points", *Operations Research* 12 (1964), 568–581.
[^2]: M. Haimovich, A. H. G. Rinnooy Kan, "Bounds and heuristics for capacitated routing problems", *Mathematics of Operations Research* 10 (1985), 527–542.
[^3]: G. B. Dantzig, J. H. Ramser, "The truck dispatching problem", *Management Science* 6 (1959), 80–91.

# 연관 문서

## 선수지식

- [외판원 문제](traveling-salesman-problem.md)
- [상자 채우기 문제](bin-packing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #optimization #graph_theory #complexity
