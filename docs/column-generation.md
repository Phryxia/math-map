# 열 생성

# 개요

**열 생성(column generation)** 은 변수가 너무 많아 다 적을 수 없는 선형계획 문제를, 변수 몇 개만 둔 작은 문제에서 시작해 목적값을 줄일 변수를 하나씩 찾아 더하며 푸는 방법이다. 길이 $10$ m 인 원자재에서 $3$ m 조각 $6$ 개와 $4$ m 조각 $4$ 개를 잘라 낼 때, 원자재 한 개를 자르는 방식마다 변수를 하나 두면 방식의 수는 조각의 종류가 늘수록 빠르게 늘어난다. 열 생성은 지금 쓰는 방식들의 [단체법](simplex-method.md) 해에서 나온 조각별 값으로 더 나은 자르기 방식 하나를 찾고, 그런 방식이 없으면 그때의 해가 전체 문제의 최적해다.

# 직관

자르는 방식을 두 조각 길이의 개수 $(a\_1,a\_2)$ 로 적는다. $3a\_1+4a\_2\le 10$ 이어야 한다. 처음에는 방식 A $=(3,0)$ 과 방식 B $=(0,2)$ 만 쓴다. A 를 $x\_A$ 번, B 를 $x\_B$ 번 쓰면 $3x\_A\ge 6$, $2x\_B\ge 4$ 이어야 하므로 $x\_A=2$, $x\_B=2$ 이고 원자재 $4$ 개가 든다.

A 한 번이 $3$ m 조각 $3$ 개를 원자재 $1$ 개로 만드므로 이 해에서 $3$ m 조각 하나의 값은 원자재 $\tfrac13$ 개다. B 한 번이 $4$ m 조각 $2$ 개를 원자재 $1$ 개로 만드므로 $4$ m 조각 하나의 값은 원자재 $\tfrac12$ 개다. 그러면 원자재 하나에서 조각 값의 합이 $1$ 보다 큰 방식이 있으면 그 방식이 원자재를 아낀다.

조각 값의 합을 가장 크게 하는 방식을 찾는다. $3a\_1+4a\_2\le 10$ 인 $(a\_1,a\_2)$ 가운데 $\tfrac13a\_1+\tfrac12a\_2$ 가 가장 큰 것은 방식 C $=(2,1)$ 이고 값은 $\tfrac76$ 이다. $\tfrac76\gt 1$ 이므로 C 를 더한다.

A, B, C 를 쓰는 문제를 다시 풀면 $x\_A=0$, $x\_B=\tfrac12$, $x\_C=3$ 이고 원자재는 $3.5$ 개다. 이 해의 조각 값은 $3$ m 조각 $\tfrac14$, $4$ m 조각 $\tfrac12$ 다. 이제 $\tfrac14a\_1+\tfrac12a\_2$ 의 최댓값은 B 와 C 에서 $1$ 이고, $1$ 을 넘는 방식이 없으므로 더할 방식이 없다. 모든 방식을 쓰는 문제의 최솟값도 $3.5$ 다.

원자재 개수는 정수여야 하므로 $4$ 개 이상이 든다. C 를 세 번, B 를 한 번 쓰면 $3$ m 조각 $6$ 개와 $4$ m 조각 $5$ 개가 나오므로 $4$ 개로 충분하다.

# 정의

## 주 문제와 제한 주 문제

열의 모임 $\mathcal P$ 가 주어졌을 때 다음 선형계획을 **주 문제(master problem)** 라 한다.

$$
\min\thinspace\sum\_{p\in\mathcal P}c\_p x\_p\quad\text{subject to}\quad\sum\_{p\in\mathcal P}a\_p x\_p\ge d,\quad x\ge 0
$$

$a\_p\in\mathbb R^m$ 은 열, $c\_p$ 는 그 열의 비용, $d\in\mathbb R^m$ 은 수요다. 직관 절에서 $\mathcal P$ 는 $3a\_1+4a\_2\le 10$ 인 음 아닌 정수 $(a\_1,a\_2)$ 전부이고, $c\_p=1$, $d=(6,4)$ 다.

부분집합 $\mathcal P'\subseteq\mathcal P$ 의 열만 쓴 같은 꼴의 문제를 **제한 주 문제(restricted master problem)** 라 한다. 직관 절의 첫 제한 주 문제는 $\mathcal P'=\lbrace A,B\rbrace$ 이고 최솟값은 $4$ 다.

## 가격 결정 부분문제

제한 주 문제의 최적 쌍대해를 $y\ge 0$ 으로 둔다. 열 $p$ 의 축소 비용은 $\bar c\_p=c\_p-y^{\mathsf T}a\_p$ 다. 축소 비용이 가장 작은 열을 찾는 문제

$$
\min\_{p\in\mathcal P}\thinspace\bigl(c\_p-y^{\mathsf T}a\_p\bigr)
$$

를 **가격 결정 부분문제(pricing subproblem)** 라 한다. 이 문제는 $\mathcal P$ 를 나열하지 않고 열의 구조로 푼다. 직관 절에서는 $c\_p=1$ 이므로 가격 결정은 $3a\_1+4a\_2\le 10$ 아래에서 $y\_1a\_1+y\_2a\_2$ 를 최대로 하는 정수 [배낭 문제](knapsack-problem.md)다. 첫 쌍대해 $y=(\tfrac13,\tfrac12)$ 에서 답은 C 이고 $\bar c\_C=1-\tfrac76=-\tfrac16$ 이다.

## 열 생성 절차

다음을 되풀이하는 절차를 **열 생성** 이라 한다.

1. 제한 주 문제를 단체법으로 풀어 최적해 $x$ 와 쌍대해 $y$ 를 얻는다.
2. 가격 결정 부분문제를 푼다.
3. 최솟값이 $0$ 이상이면 멈춘다. 그렇지 않으면 그 열을 $\mathcal P'$ 에 더하고 1 로 간다.

```javascript
function columnGeneration(initialColumns, solveRestricted, price) {
  const columns = [...initialColumns];
  for (;;) {
    const { x, y, value } = solveRestricted(columns); // 단체법: 원 해와 쌍대 해
    const { column, reducedCost } = price(y); // 축소 비용이 가장 작은 열
    if (reducedCost >= 0) return { columns, x, value };
    columns.push(column);
  }
}
```

새 열을 더한 제한 주 문제는 직전 최적 기저에서 단체법을 이어 간다. 이전 기저는 여전히 허용 기저이고, 새 열만 축소 비용이 음수다.

# 성질

## 멈춤과 최적성

정리. 가격 결정 부분문제의 최솟값이 $0$ 이상이면 제한 주 문제의 최적해가 주 문제의 최적해다.

증명의 요지. 최솟값이 $0$ 이상이면 모든 $p\in\mathcal P$ 에 대해 $y^{\mathsf T}a\_p\le c\_p$ 이므로 $y$ 는 주 문제의 다음 쌍대 문제의 허용해다.

$$
\max\thinspace d^{\mathsf T}y\quad\text{subject to}\quad y^{\mathsf T}a\_p\le c\_p\thinspace(p\in\mathcal P),\quad y\ge 0
$$

 제한 주 문제의 강쌍대성으로 $d^{\mathsf T}y$ 가 제한 주 문제의 최솟값과 같고, 약쌍대성으로 이 값은 주 문제의 최솟값 이하다. 제한 주 문제의 해는 주 문제의 허용해이므로 두 값이 같다.

$\mathcal P$ 가 유한하면 퇴화 때의 순환을 Bland 규칙 같은 피벗 규칙으로 막는 한 절차는 유한 번 만에 멈춘다. 매번 더하는 열은 축소 비용이 음수이므로 이미 $\mathcal P'$ 에 있는 열이 아니다.

## 쌍대 쪽에서 본 열 생성

주 문제의 쌍대 문제는 제약이 $\lvert\mathcal P\rvert$ 개다. 가격 결정 부분문제는 $y$ 가 어기는 쌍대 제약 하나를 찾는 분리 문제(separation problem)이고, 열 생성은 쌍대 문제에 대한 절단평면법(cutting plane method)이다. 직관 절의 첫 쌍대해 $(\tfrac13,\tfrac12)$ 는 쌍대 제약 $2y\_1+y\_2\le 1$ 을 어기고, 이 제약을 더한 쌍대 문제의 해가 $(\tfrac14,\tfrac12)$ 다.

이 대응과 [타원체법](ellipsoid-method.md)의 분리-최적화 동치에서, 가격 결정 부분문제를 다항 시간에 풀 수 있으면 열이 지수 개인 주 문제의 최적값도 다항 시간에 구한다.

## Farley 하한

정리. 모든 $c\_p$ 가 $1$ 이고 제한 주 문제의 최솟값이 $z'$ 이면, 주 문제의 최솟값 $z^\ast$ 는 다음을 만족한다[^1].

$$
\frac{z'}{\max\_{p\in\mathcal P}y^{\mathsf T}a\_p}\le z^\ast\le z'
$$

증명의 요지. $M=\max\_p y^{\mathsf T}a\_p$ 라 하면 $y/M$ 은 주 문제의 쌍대 허용해이고 그 값이 $d^{\mathsf T}y/M=z'/M$ 이다.

직관 절의 첫 단계에서 $z'=4$, $M=\tfrac76$ 이므로 $\tfrac{24}{7}\le z^\ast\le 4$ 다. 실제 값 $3.5$ 는 이 사이에 있다. 하한의 올림이 $z'$ 의 올림과 같으면 원자재 개수의 정수 하한이 더 오르지 않으므로 반복을 일찍 멈춘다.

## 수렴의 느린 꼬리

최적값 근처에서 목적값이 거의 줄지 않는 반복이 길게 이어지는 꼬리 현상(tailing-off effect)이 흔하다. 쌍대해가 반복마다 크게 흔들리는 것이 원인이고, 쌍대해를 이전 값 근처에 묶어 두는 안정화(stabilization)로 줄인다[^2].

# 활용

- 재단 문제(cutting stock problem). P. C. Gilmore 와 R. E. Gomory 는 원자재 하나를 자르는 방식마다 변수를 두고 배낭 문제로 가격을 결정하는 직관 절의 방법을 1961 년에 주었다[^3]. [상자 채우기 문제](bin-packing.md)의 배치 선형계획(configuration linear program)도 같은 주 문제다.
- Dantzig–Wolfe 분해(Dantzig–Wolfe decomposition). 블록 대각 구조의 선형계획을 블록마다의 다면체의 꼭짓점을 열로 하는 주 문제로 바꾸고, 블록별 부분문제로 가격을 결정한다[^4].
- 분기 가격법(branch-and-price). [정수계획법](integer-programming.md)의 분기 한정법에서 마디마다의 선형계획 완화를 열 생성으로 푼다. [차량 경로 문제](vehicle-routing-problem.md)의 집합 분할 정식화가 경로마다 변수를 두고 최단 경로 꼴의 부분문제로 가격을 결정하는 대표 예다.
- 승무원 일정과 항공기 배정. 승무원 한 명의 근무 일정이나 항공기 한 대의 운항 순서를 열로 두는 집합 덮개 문제를 같은 방식으로 푼다.

[^1]: A. A. Farley, "A note on bounding a class of linear programming problems, including cutting stock problems", *Operations Research* 38 (1990), 922–923.
[^2]: M. E. Lübbecke, J. Desrosiers, "Selected topics in column generation", *Operations Research* 53 (2005), 1007–1023.
[^3]: P. C. Gilmore, R. E. Gomory, "A linear programming approach to the cutting-stock problem", *Operations Research* 9 (1961), 849–859.
[^4]: G. B. Dantzig, P. Wolfe, "Decomposition principle for linear programs", *Operations Research* 8 (1960), 101–111.

# 연관 문서

## 선수지식

- [단체법](simplex-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #combinatorics
