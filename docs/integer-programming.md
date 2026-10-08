# 정수계획법

# 개요

정수계획법은 선형 목적함수와 선형 제약에 변수의 정수 조건을 더한 최적화 문제다. 조건을 떼면 선형계획법이 되고 다항시간에 풀리지만, 정수 조건을 붙이면 NP(nondeterministic polynomial time)-hard 가 된다.

해법은 두 갈래다. 정수 조건을 뗀 완화해의 분수 좌표를 기준으로 문제를 쪼개는 것이 분기한정이고, 모든 정수해가 만족하면서 완화해는 위반하는 부등식을 더해 완화를 조이는 것이 절단평면이다. 실무 솔버는 둘을 함께 쓴다.

# 직관

물건 셋 가운데 몇 개를 가방에 넣는다. 무게는 $3,4,5$ 이고 값은 $4,5,6$ 이며 가방의 한도는 $6$ 이다. 변수 $x_i$ 는 물건 $i$ 를 넣으면 $1$, 넣지 않으면 $0$ 이다. 목적은 $4x_1+5x_2+6x_3$ 의 최대화이고 제약은 $3x_1+4x_2+5x_3\le 6$ 이다.

[선형계획법](linear-programming.md)으로 풀어 본다. $x_i$ 를 $0$ 과 $1$ 사이의 실수로 허용하면 값을 무게로 나눈 비 $4/3,\thinspace 5/4,\thinspace 6/5$ 가 큰 것부터 채우는 것이 최적이다. 물건 $1$ 을 전부 넣어 무게 $3$ 을 쓰고, 남은 $3$ 을 물건 $2$ 로 $3/4$ 만큼 채운다. 최적값은 $4+5\cdot 3/4=7.75$ 이고 최적해는 $(1,\thinspace 3/4,\thinspace 0)$ 이다.

이 해를 반올림할 수는 없다. $x_2$ 를 $1$ 로 올리면 무게가 $7$ 이 되어 제약을 위반하고, $0$ 으로 내리면 값이 $4$ 다. 정수해 가운데 최적인 것은 물건 $3$ 만 넣은 $(0,0,1)$ 이고 값은 $6$ 이다. 완화해의 좌표를 고쳐서는 여기에 닿지 않는다.

분수 좌표를 고치는 대신 완화의 가능영역을 줄인다. 물건 $1$ 과 $2$ 는 무게 합이 $7$ 이므로 함께 넣을 수 없고, 따라서 모든 정수해가 $x_1+x_2\le 1$ 을 만족한다. 완화해 $(1,\thinspace 3/4,\thinspace 0)$ 은 좌변이 $1.75$ 라 이 부등식을 위반한다. 같은 이유로 $x_1+x_3\le 1$ 과 $x_2+x_3\le 1$ 도 성립한다. 셋을 더하고 양변을 $2$ 로 나누면 $x_1+x_2+x_3\le 3/2$ 이고, 좌변이 언제나 정수이므로 $x_1+x_2+x_3\le 1$ 이다. 이 부등식을 더한 완화의 최적값은 $6$ 이고 최적해는 정수점 $(0,0,1)$ 이다.

# 정의

정수계획법 문제는

$$\max\thinspace c^{T}x\quad\text{subject to}\quad Ax\le b,\quad x\ge 0,\quad x\in\mathbb Z^{n}$$

꼴이다. $A\in\mathbb Q^{m\times n}$, $b\in\mathbb Q^{m}$, $c\in\mathbb Q^{n}$ 이다. 변수의 일부만 정수 조건을 받으면 **혼합정수 선형계획법**이라 하고, 모든 변수가 $0$ 또는 $1$ 이면 **0-1 정수계획법**이라 한다.

## 선형 완화와 정수 간극

정수 조건 $x\in\mathbb Z^n$ 을 뺀 문제를 **선형 완화**라 한다. 완화의 가능영역 $P=\lbrace x\ge 0:Ax\le b\rbrace$ 는 정수 가능해를 모두 포함하므로 완화의 최적값은 원래 최적값의 상한이다. 두 값의 비를 **정수 간극**이라 한다.

## 정수 껍질

$P\cap\mathbb Z^n$ 의 볼록껍질 $P_I=\mathrm{conv}(P\cap\mathbb Z^n)$ 을 $P$ 의 **정수 껍질**이라 한다. $P$ 가 유계이면 $P_I$ 는 다면체이고, 원래 문제는 $P_I$ 위의 선형계획법과 같은 최적값을 갖는다. $P_I$ 를 기술하는 부등식의 개수가 일반적으로 $n$ 의 지수이므로 이 등식은 해법이 아니다.

## 유효 부등식과 절단평면

모든 $x\in P\cap\mathbb Z^n$ 이 $\alpha^{T}x\le\beta$ 를 만족하면 이 부등식을 **유효 부등식**이라 한다. 완화 최적해 $x^{\ast}$ 가 $\alpha^{T}x^{\ast}\gt\beta$ 를 만족하는 유효 부등식을 $x^{\ast}$ 를 자르는 **절단평면**이라 한다.

## Chvátal–Gomory 절단

$u\ge 0$ 에 대해 $u^{T}Ax\le u^{T}b$ 는 $P$ 에서 성립한다. 계수를 내림한 $\lfloor u^{T}A\rfloor x\le\lfloor u^{T}b\rfloor$ 는 $x\ge 0$ 인 정수점에서 성립하므로 유효 부등식이고, 이것을 **Chvátal–Gomory 절단**이라 한다. 직관 절에서 세 부등식에 $u=(1/2,1/2,1/2)$ 를 써서 얻은 $x_1+x_2+x_3\le 1$ 이 그 예다.

# 성질

## 계산 복잡도

0-1 정수계획법은 NP-hard 다. Karp 의 21 개 NP-완전 문제에 들어 있다.[^1] 따라서 [P 대 NP 문제](p-np.md)의 답이 $\mathrm P\ne\mathrm{NP}$ 이면 다항시간 알고리즘이 없다.

변수의 개수 $n$ 을 고정하면 다항시간에 풀린다. Lenstra 의 알고리즘이 격자 축소로 가능영역을 얇은 방향으로 자르고 $n$ 에만 의존하는 횟수로 재귀한다.[^2]

## 완전 단일모듈성

정수 행렬 $A$ 의 모든 정사각 부분행렬의 행렬식이 $0,1,-1$ 가운데 하나이면 $A$ 를 **완전 단일모듈**(totally unimodular)이라 한다. $A$ 가 완전 단일모듈이고 $b$ 가 정수 벡터이면 $P=\lbrace x\ge 0:Ax\le b\rbrace$ 의 모든 꼭짓점이 정수점이다.[^3] 증명의 요지는 Cramer 공식이고, 꼭짓점 좌표의 분모가 정칙 부분행렬의 행렬식이므로 $\pm 1$ 이다.

이 경우 선형 완화의 최적해가 이미 정수해이므로 정수계획법이 선형계획법으로 풀린다. 이분그래프의 꼭짓점-변 근접행렬과 유향그래프의 근접행렬이 [완전 단일모듈 행렬](totally-unimodular-matrices.md)이고, [네트워크 흐름](network-flow.md)의 정수해 존재가 거기서 나온다.

## 절단평면의 유한 종료

유계 다면체 $P$ 에 대해, Chvátal–Gomory 절단을 모두 더해 얻는 다면체를 $P'$ 이라 하고 이를 되풀이하면 유한 번의 단계에서 $P^{(k)}=P_I$ 가 된다.[^3] $P$ 를 $P_I$ 로 보내는 데 필요한 최소 횟수를 $P$ 의 Chvátal 계수라 한다.

Gomory 의 분수 절단은 단체법의 기저에서 절단을 하나씩 뽑는 규칙이고, 절단을 더하고 완화를 다시 푸는 반복이 유한 번에 정수 최적해로 끝난다.[^3]

[^1]: Richard M. Karp, "Reducibility Among Combinatorial Problems", *Complexity of Computer Computations*, Plenum, 1972, 85–103 면. 0-1 정수계획법이 목록의 셋째 문제다.
[^2]: H. W. Lenstra Jr., "Integer Programming with a Fixed Number of Variables", *Mathematics of Operations Research* 8권 4호, 1983, 538–548 면.
[^3]: Alexander Schrijver, *Theory of Linear and Integer Programming*, Wiley, 1986. 완전 단일모듈성은 19 장, Chvátal–Gomory 절단과 유한 종료는 23 장이다.

# 활용

## 분기한정

완화해에 분수 좌표 $x_i=f$ 가 있으면 $x_i\le\lfloor f\rfloor$ 인 문제와 $x_i\ge\lceil f\rceil$ 인 문제로 나눈다. 두 문제의 정수 가능해를 합치면 원래 문제의 것과 같고, 어느 쪽도 $f$ 를 가능해로 갖지 않는다. 각 부분문제의 완화 최적값이 이미 찾은 정수해의 값보다 나쁘면 그 가지를 버린다.

```javascript
function branchAndBound(problem) {
  let bestValue = -Infinity
  let bestPoint = null
  const stack = [problem]
  while (stack.length > 0) {
    const sub = stack.pop()
    const relaxed = solveLinearRelaxation(sub)
    if (relaxed === null) continue
    if (relaxed.value <= bestValue) continue
    const i = relaxed.point.findIndex((v) => !Number.isInteger(v))
    if (i === -1) {
      bestValue = relaxed.value
      bestPoint = relaxed.point
      continue
    }
    const f = relaxed.point[i]
    stack.push(addUpperBound(sub, i, Math.floor(f)))
    stack.push(addLowerBound(sub, i, Math.ceil(f)))
  }
  return { bestValue, bestPoint }
}
```

하한을 좋게 만드는 것이 가지치기의 성능을 정한다. [Lagrange 쌍대성](lagrange-duality.md)의 쌍대함수가 임의의 승수에서 하한을 주므로 그 값을 가지치기 기준으로 쓴다.

## 조합 문제의 모형화

- **집합 덮개.** 덮개에 쓸 집합마다 $0$ 또는 $1$ 변수를 두고 원소마다 덮임 제약을 둔다. 그 선형 완화의 해를 확률로 읽어 반올림하는 것이 [LP 반올림](lp-rounding.md)(linear programming)의 전형이다.
- **외판원 문제.** 변마다 변수를 두고 각 꼭짓점의 차수를 $2$ 로 묶으면 부분순회가 여럿인 해가 나온다. 부분집합마다 그것을 끊는 유효 부등식을 절단평면으로 더한다.
- **그래프 채색.** 꼭짓점과 색의 짝마다 변수를 두면 [그래프 채색](graph-coloring.md)이 0-1 정수계획법이 된다. 색의 교환으로 생기는 대칭이 분기한정의 탐색을 키운다.

## 다면체 조합론

정수 껍질이 작은 개수의 부등식으로 기술되는 경우를 찾는 것이 다면체 조합론이다. [완벽그래프](perfect-graphs.md)는 독립집합 다면체가 클릭 부등식만으로 기술되는 그래프와 일치하고, 그 경우 완화가 타이트하다.

# 연관 문서

## 선수지식

- [선형계획법](linear-programming.md)

## 더 알아보기

- [완전 단일모듈 행렬](totally-unimodular-matrices.md)

#optimization #algorithms #combinatorics #complexity
