# 단체법

# 개요

**단체법(simplex method)** 은 [선형계획법](linear-programming.md)의 허용 다면체의 꼭짓점에서 출발해, 목적함수가 커지는 이웃 꼭짓점으로 옮겨 가기를 더 커지는 이웃이 없을 때까지 되풀이하는 알고리즘이다. 꼭짓점은 기저 허용해로, 이웃 꼭짓점으로 옮기는 한 걸음은 기저 변수 하나를 바꾸는 피벗(pivot)으로 계산한다. Dantzig 가 1947 년에 제안했다.[^1]

멈춘 꼭짓점에서 계산한 쌍대 변수가 쌍대 문제의 허용해이므로, 단체법은 최적해와 그 최적성의 증명을 함께 낸다.

# 직관

두 변수 문제 $\max\thinspace x_1+x_2$, $x_1+2x_2\le 4$, $3x_1+2x_2\le 6$, $x\ge 0$ 을 원점에서 푼다. 원점의 목적값은 $0$ 이다. $x_2=0$ 으로 둔 채 $x_1$ 을 늘리면 목적값이 커지고, 두 제약이 $x_1\le 4$ 와 $x_1\le 2$ 를 주므로 $x_1=2$ 에서 멈춘다. 꼭짓점 $(2,0)$ 의 목적값은 $2$ 다.

$(2,0)$ 에서는 $x_2=0$ 과 $3x_1+2x_2=6$ 이 등식이다. 둘째 등식을 지킨 채 $x_2$ 를 늘리면 $x_1=2-\tfrac23x_2$ 이고 목적값이 $2+\tfrac13x_2$ 로 커진다. 첫 제약 $x_1+2x_2\le 4$ 가 $x_2\le\tfrac32$ 를 주므로 $(1,\tfrac32)$ 에서 멈추고 목적값은 $\tfrac52$ 다. 여기서 등식인 두 제약 가운데 어느 쪽을 풀고 움직여도 목적값이 줄어드므로 최적이다.

# 정의

## 표준형과 기저

등식형 문제

$$
\max\ c^{\mathsf T}x\quad\text{subject to}\quad Ax=b,\ \ x\ge 0
$$

에서 $A$ 는 $m\times n$ 이고 계수가 $m$ 이다. 열 $m$ 개의 첨자 집합 $\mathcal B$ 로 만든 부분행렬 $A\_{\mathcal B}$ 가 정칙이면 $\mathcal B$ 를 **기저(basis)** 라 한다. $x\_{\mathcal B}=A\_{\mathcal B}^{-1}b$, 나머지 좌표 $0$ 인 점이 기저 해이고, $x\_{\mathcal B}\ge 0$ 이면 기저 허용해다. 부등식형 문제는 여유 변수를 더해 이 꼴로 바꾼다.

## 축소 비용

기저 $\mathcal B$ 에서 $y^{\mathsf T}=c\_{\mathcal B}^{\mathsf T}A\_{\mathcal B}^{-1}$ 로 두고, 기저 밖의 첨자 $j$ 마다

$$
\bar c_j=c_j-y^{\mathsf T}A_j
$$

를 **축소 비용(reduced cost)** 이라 한다. $A_j$ 는 $A$ 의 $j$ 번째 열이다. $\bar c_j$ 는 $x_j$ 를 $0$ 에서 한 단위 늘리고 등식 $Ax=b$ 를 지키도록 기저 변수를 맞췄을 때 목적값의 변화량이다.

## 피벗

1. 모든 $j$ 에서 $\bar c_j\le 0$ 이면 멈춘다. 현재 기저 허용해가 최적이다.
2. $\bar c_j\gt 0$ 인 $j$ 하나를 들어올 변수로 고르고 $d=A\_{\mathcal B}^{-1}A_j$ 를 계산한다.
3. $d\le 0$ 이면 $x_j$ 를 끝없이 늘릴 수 있으므로 문제가 비유계다.
4. $d_i\gt 0$ 인 $i$ 가운데 $x\_{\mathcal B,i}/d_i$ 가 가장 작은 것을 나갈 변수로 고르고(비율 검사), $\mathcal B$ 에서 그 첨자를 $j$ 로 바꾼다.

```typescript
// 기저 허용해 B 에서 출발한다. solve(B, v) 는 A_B z = v 를 푼 z 를 돌려준다
function simplex(A: number[][], b: number[], c: number[], B: number[]) {
  while (true) {
    const xB = solve(B, b);
    const y = solveTransposed(B, B.map((k) => c[k]));
    const j = nonBasic(B).find((k) => c[k] - dot(y, column(A, k)) > 0);  // 진입 규칙
    if (j === undefined) return { B, xB };                                // 최적
    const d = solve(B, column(A, j));
    let leave = -1;
    for (let i = 0; i < d.length; i++)
      if (d[i] > 0 && (leave === -1 || xB[i] / d[i] < xB[leave] / d[leave])) leave = i;
    if (leave === -1) return "unbounded";
    B[leave] = j;
  }
}
```

# 성질

## 기저 허용해와 꼭짓점

> **정리.** $x$ 가 $\lbrace x:Ax=b,\ x\ge 0\rbrace$ 의 꼭짓점인 것과 어떤 기저의 기저 허용해인 것은 동치다.

$x$ 의 양수 좌표에 해당하는 열들이 일차독립인 것과 $x$ 가 꼭짓점인 것이 동치이고, 일차독립인 열들을 기저로 넓힌다. 기저는 $\binom nm$ 개 이하이므로 꼭짓점도 유한하다.

## 최적성 증명

> **정리.** 단체법이 피벗의 첫 조건 $\bar c\le 0$ 으로 멈추면 $y^{\mathsf T}=c\_{\mathcal B}^{\mathsf T}A\_{\mathcal B}^{-1}$ 는 쌍대 문제 $\min\lbrace b^{\mathsf T}y:A^{\mathsf T}y\ge c\rbrace$ 의 허용해이고 $b^{\mathsf T}y=c^{\mathsf T}x$ 다.

$\bar c\le 0$ 이 $A^{\mathsf T}y\ge c$ 이고, $b^{\mathsf T}y=c\_{\mathcal B}^{\mathsf T}A\_{\mathcal B}^{-1}b=c\_{\mathcal B}^{\mathsf T}x\_{\mathcal B}$ 다. 약쌍대성으로 두 해가 모두 최적이다. 이 정리를 단체법의 종료와 합치면 강쌍대성의 구성적 증명이 된다.

## 퇴화와 순환

기저 변수 가운데 $0$ 인 것이 있으면 비율 검사의 최솟값이 $0$ 이어서 피벗을 해도 꼭짓점이 바뀌지 않는다. 이런 기저를 퇴화(degenerate) 기저라 한다. 진입·이탈 규칙에 따라서는 같은 꼭짓점의 기저들을 돌며 처음 기저로 되돌아오는 순환이 생긴다.

> **정리 (Bland).** 들어올 변수와 나갈 변수를 후보 가운데 첨자가 가장 작은 것으로 고르면 순환이 생기지 않고 단체법이 유한 번 안에 멈춘다.[^2]

## 피벗 횟수

Klee 와 Minty 는 $n$ 차원 입방체를 조금 찌그러뜨린 다면체에서, 축소 비용이 가장 큰 변수를 고르는 Dantzig 규칙이 꼭짓점 $2^n$ 개를 모두 지나게 만들었다.[^3] 다른 여러 규칙에도 같은 꼴의 예가 있으므로 단체법은 최악의 경우 다항 시간이 아니다. Spielman 과 Teng 은 자료에 작은 Gauss 잡음을 더했을 때 그림자 꼭짓점 규칙의 기대 피벗 횟수가 다항식임을 보였다(평활 분석, smoothed analysis).[^4]

## 시작 기저

원점이 허용해가 아니면 인공 변수 $z\ge 0$ 을 더한 $Ax+z=b$ $(b\ge 0)$ 에서 $\sum z_i$ 를 최소화하는 문제를 먼저 푼다. 이 문제는 $x=0$, $z=b$ 를 시작 기저로 갖고, 최솟값이 $0$ 이면 원래 문제의 기저 허용해가 나오며 양수이면 원래 문제에 허용해가 없다. 이것을 2 단계 단체법(two-phase simplex method)의 1 단계라 한다.

# 활용

- **선형계획 문제의 실제 풀이.** 최악 피벗 횟수는 지수이지만 잡음이 섞인 자료에서는 평활 분석의 결과대로 다항식이다. [내점법](interior-point-method.md)과 함께 상용 풀이기에서 쓴다.
- **[정수계획법](integer-programming.md)의 절단평면.** Gomory 분수 절단은 단체법이 끝난 기저의 한 행에서 분수 부분을 취해 만든다. 분기 한정법은 자식 문제마다 부모의 최적 기저에서 쌍대 단체법으로 다시 시작한다.
- **[네트워크 흐름](network-flow.md).** 최소 비용 흐름 문제의 기저는 신장 트리에 대응하고, 피벗이 트리에 간선 하나를 넣고 하나를 빼는 연산이 되는 네트워크 단체법이 된다.
- **조합적 증명.** 행렬 게임의 최적 전략, [Farkas 보조정리](farkas-lemma.md) 같은 대안 정리가 단체법의 종료 상태에서 읽힌다.

[^1]: George B. Dantzig, *Linear Programming and Extensions*, Princeton University Press, 1963.
[^2]: Robert G. Bland, "New finite pivoting rules for the simplex method", *Mathematics of Operations Research* **2** (1977), 103–107.
[^3]: Victor Klee, George J. Minty, "How good is the simplex algorithm?", *Inequalities III*, Academic Press, 1972, 159–175.
[^4]: Daniel A. Spielman, Shang-Hua Teng, "Smoothed analysis of algorithms: Why the simplex algorithm usually takes polynomial time", *Journal of the ACM* **51** (2004), 385–463.

# 연관 문서

## 선수지식

- [선형계획법](linear-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #linear_algebra
