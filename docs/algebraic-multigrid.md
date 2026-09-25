# 대수적 다중격자

# 개요

[다중격자](multigrid.md)는 격자 간격 $h$ 와 $2h$ 의 두 판을 두고 완화가 지우지 못한 저주파 오차를 성긴 판으로 넘긴다. 성긴 판과 두 판 사이의 보간은 격자의 좌표에서 온다.

**대수적 다중격자**(algebraic multigrid, AMG)는 계수 행렬 $A$ 만으로 성긴 단계와 보간을 만든다. 행렬의 계수 크기를 이웃 관계로 읽어 변수를 성긴 것과 고운 것으로 가르고, 그 분할에서 보간 행렬을 세운다. 비구조 격자와 그래프에서 나온 계에 쓴다.

# 직관

유한요소 이산화가 준 계 $Au=b$ 에서 격자가 불규칙하면 절반 간격의 성긴 판을 어떻게 잡을지 정해지지 않는다. 좌표 대신 행렬에서 읽을 것을 찾는다.

Gauss–Seidel 을 몇 번 돌리고 남은 오차 $e$ 를 본다. 잔차 $r=Ae$ 가 이미 작으므로 $i$ 행에서

$$
a_{ii}e_i\approx-\sum_{j\ne i}a_{ij}e_j
$$

가 성립한다. $\vert a_{ij}\vert$ 가 큰 $j$ 가 이 합을 지배하므로 $e_i$ 는 그 몇 개의 $e_j$ 로 거의 정해진다. 계수가 작은 $j$ 는 $e_i$ 를 거의 바꾸지 못한다.

그러므로 계수가 큰 자리를 이웃으로 삼는다. 변수 $i$ 와 $j$ 를 $\vert a_{ij}\vert$ 가 그 행의 최대 계수에 견줄 만할 때만 이었다고 보고, 이 관계로 만든 그래프에서 변수의 일부를 골라 성긴 단계로 둔다. 남은 변수의 값은 위 식으로 고른 변수들에서 보간한다. 격자 좌표는 쓰지 않았고 행렬 계수만 썼다.

# 정의

## 강한 연결

문턱 $0\lt \theta\le 1$ 을 정한다. 변수 $i$ 가 $j$ 에 **강하게 연결**되었다는 것은

$$
\vert a_{ij}\vert\ge\theta\max_{k\ne i}\vert a_{ik}\vert
$$

라는 뜻이다. $\theta=0.25$ 를 흔히 쓴다. 강한 연결은 대칭이 아니므로 $i$ 가 강하게 연결된 변수의 집합 $S_i$ 와 $i$ 에 강하게 연결된 변수의 집합 $S_i^T$ 를 따로 둔다.

## C/F 분할

변수 집합을 성긴 변수 $C$ 와 고운 변수 $F$ 로 나눈 것을 **C/F 분할**이라 한다. Ruge–Stüben 의 판정은 두 조건이다.[^1]

- 모든 $i\in F$ 와 $j\in S_i$ 에 대해 $j\in C$ 이거나 $j$ 가 $i$ 의 보간에 쓰이는 $C$ 변수와 강하게 연결된다.
- $C$ 는 강한 연결에 대해 독립집합에 가깝다.

첫 조건이 보간의 정확도를, 둘째가 성긴 단계의 크기를 정한다. 두 조건을 다 만족시킬 수는 없어 첫 조건을 지키고 둘째를 완화한다.

```javascript
// Ruge-Stüben C/F 분할
// strong[i]: i 가 강하게 연결된 변수, strongInv[i]: i 에 강하게 연결된 변수
function coarsen(strong, strongInv, n) {
  const coarse = new Set(), fine = new Set(), undecided = new Set()
  const weight = []
  for (let i = 0; i < n; i++) {
    weight.push(strongInv[i].length)
    undecided.add(i)
  }

  while (undecided.size > 0) {
    const i = argmaxOver(undecided, (v) => weight[v])
    coarse.add(i)
    undecided.delete(i)
    for (const j of strongInv[i]) {     // i 에 의존하던 변수가 고운 변수가 된다
      if (!undecided.has(j)) continue
      fine.add(j)
      undecided.delete(j)
      for (const k of strong[j]) if (undecided.has(k)) weight[k] += 1
    }
    for (const j of strong[i]) if (undecided.has(j)) weight[j] -= 1
  }
  return { coarse, fine }
}
```

## 보간과 성긴 행렬

보간 행렬 $P$ 는 $C$ 위의 값을 전체 변수로 늘린다. $i\in C$ 이면 값을 그대로 옮기고, $i\in F$ 이면

$$
(Pe_c)\_i=\sum_{j\in C_i}w_{ij}\thinspace(e_c)\_j
$$

로 둔다. $C_i$ 는 $i$ 가 강하게 연결된 $C$ 변수이고 $w_{ij}$ 는 직관 절의 식에서 약한 연결과 $F$ 이웃을 $C_i$ 쪽으로 분배해 얻는다. 성긴 행렬은 Galerkin 곱

$$
A_c=P^T A P
$$

다. 이 구성은 격자를 쓰지 않으므로 재귀로 여러 단계를 쌓는다.

# 성질

## 두 단계 수렴

**정리.** $A$ 가 대칭 양정부호이고 보간이 근사 성질

$$
\Vert e-P e_c\Vert_0^2\le\frac{\tau}{\Vert A\Vert}\thinspace\Vert e\Vert_1^2
$$

를 만족하면 두 단계 사이클의 수렴률이 $\sqrt{1-1/\tau}$ 이하이고 $\tau$ 는 문제 크기와 무관하다.[^2]

여기서 $\Vert\cdot\Vert_0$ 은 대각 성분으로 잰 노름, $\Vert\cdot\Vert_1$ 은 $A$ 노름이다. 완화가 $A$ 노름을 거의 줄이지 못하는 오차는 $\Vert e\Vert_1$ 이 $\Vert e\Vert_0$ 에 견주어 작은 오차이고, 근사 성질은 그런 오차를 보간이 잡는다는 조건이다. 증명은 완화 성질과 이 부등식을 곱해 두 단계 연산자의 노름을 재는 것이다. ∎

## 복잡도

성긴 행렬 $A_c=P^T A P$ 는 $A$ 보다 행당 비영 성분이 많다. 단계마다 늘어난 비영 성분의 총합을 원래 행렬의 비영 성분으로 나눈 값이 **연산자 복잡도**이고, 이 값이 사이클 한 번의 비용을 정한다. 강한 연결의 문턱 $\theta$ 를 낮추면 보간이 정확해지고 연산자 복잡도가 커진다.

## M-행렬 가정

Ruge–Stüben 의 보간 공식은 비대각 성분이 음이 아닌 것을 전제한다. 이 조건이 깨지면 분배 과정에서 가중치의 부호가 뒤집혀 보간이 매끄러운 오차를 재현하지 못한다. [불완전 $LU$ 분해](incomplete-lu.md)의 존재 정리가 같은 가정 위에 서 있다.

# 활용

- **비구조 유한요소.** 삼각형이나 사면체로 나눈 영역에서 성긴 판을 따로 만들 필요가 없어 기하 다중격자를 쓸 수 없는 계에 적용한다.
- **[그래프 Laplacian](graph-laplacian.md).** 그래프의 Laplacian 계에서 $C$ 는 뽑힌 정점이고 성긴 행렬은 정점을 뭉친 그래프의 Laplacian 이다. 강한 연결의 문턱이 간선 가중치의 문턱이 된다.
- **전처리.** 사이클 한 번을 [전처리](preconditioning.md) 행렬의 작용으로 쓴다. 계수가 크게 변하는 확산 문제에서 불완전 분해보다 반복 횟수가 적다.
- **평활 응집.** C/F 분할 대신 변수를 겹치지 않는 덩어리로 묶고 각 덩어리의 지시벡터를 완화해 보간을 만드는 방법이다. 탄성 문제처럼 영에너지 모드가 여럿인 계에서 그 모드를 보간에 넣는다.[^3]

[^1]: J. Ruge, K. Stüben, "Algebraic multigrid", in *Multigrid Methods*, SIAM Frontiers in Applied Mathematics **3** (1987), 73–130.
[^2]: A. Brandt, "Algebraic multigrid theory: the symmetric case", *Appl. Math. Comput.* **19** (1986), 23–56.
[^3]: P. Vaněk, J. Mandel, M. Brezina, "Algebraic multigrid by smoothed aggregation for second and fourth order elliptic problems", *Computing* **56** (1996), 179–196.

# 연관 문서

## 선수지식

- [다중격자](multigrid.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation #graph_theory
