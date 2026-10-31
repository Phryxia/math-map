# 이진 힙

# 개요

**이진 힙(binary heap)** 은 가장 작은 값을 거듭 꺼내고 새 값을 넣는 일을 빠르게 하는 자료구조다. 작업 대기열에서 마감이 가장 이른 작업을 거듭 꺼낼 때, 작업을 마감 순으로 정렬해 두면 꺼내기는 바로 되지만 새 작업을 넣을 때마다 많은 작업을 한 칸씩 밀어야 한다. 정렬하지 않고 두면 넣기는 바로 되지만 꺼낼 때마다 전부 훑어야 한다. 이진 힙은 작업들을 트리에 놓고 부모가 자식보다 이르다는 조건만 지켜, 넣기와 꺼내기를 모두 작업 수의 로그에 비례하는 걸음으로 한다.

# 직관

작업 대기열에서 마감이 가장 이른 작업을 거듭 꺼내야 한다. 작업들을 마감 순서로 정렬해 두면 꺼내기는 바로 되지만, 새 작업을 넣을 때마다 자리를 찾아 뒤의 원소들을 밀어야 해서 $n$ 에 비례하는 시간이 든다. 꺼낼 것은 언제나 최솟값 하나뿐이므로 전체 순서까지 유지할 필요가 없다.

그래서 작업을 이진 트리에 두고 "부모의 마감이 자식의 마감 이하" 만 지킨다. 그러면 뿌리가 최솟값이다. 새 작업은 트리의 맨 끝 자리에 넣고 부모보다 이르면 부모와 자리를 바꾸기를 반복한다. 트리를 위층부터 빈틈없이 채우면 높이가 $\log\_2 n$ 이므로 자리 바꾸기가 그만큼만 일어난다. 이 트리가 이진 힙이다.

# 정의

## 배열 표현

크기 $n$ 인 배열 $A\lbrack 0..n-1\rbrack$ 에서 $i$ 번 마디의 자식은 $2i+1$ 번과 $2i+2$ 번이고 부모는 $\lfloor(i-1)/2\rfloor$ 번이다. 이 배치는 위층부터 왼쪽으로 빈틈없이 채운 이진 트리, 곧 **완전 이진 트리(complete binary tree)** 를 포인터 없이 저장한 것이다. 트리는 [그래프](graphs.md)의 뿌리 있는 나무다.

예. 마감이 $1,3,2,7,4$ 인 작업을 $A=(1,3,2,7,4)$ 로 두면 $0$ 번 마디 $1$ 의 자식은 $1$ 번 $3$ 과 $2$ 번 $2$ 이고, $1$ 번 마디 $3$ 의 자식은 $3$ 번 $7$ 과 $4$ 번 $4$ 다.

## 힙 조건

**최소 힙(min-heap)** 은 모든 $i\ge 1$ 에 대해 다음이 성립하는 배열 $A$ 다. 이진 힙은 보통 최소 힙을 가리킨다.

$$
A\lbrack\lfloor(i-1)/2\rfloor\rbrack\le A\lbrack i\rbrack
$$

예. 앞 절의 $A=(1,3,2,7,4)$ 는 $1\le 3$, $1\le 2$, $3\le 7$, $3\le 4$ 이므로 최소 힙이다. $(3,1,2)$ 는 뿌리 $3$ 이 자식 $1$ 보다 커서 최소 힙이 아니다.

트리의 조상 관계를 [부분순서](partial-orders.md)로 보면, 이 조건은 조상에서 자손으로 갈 때 키가 줄지 않는다는 것이다. 형제나 사촌 사이의 키에는 조건이 없다.

# 성질

## 삽입과 최솟값 삭제

삽입은 새 키를 $A\lbrack n\rbrack$ 에 두고 위로 올린다. 최솟값 삭제는 $A\lbrack 0\rbrack$ 을 꺼낸 뒤 마지막 키를 뿌리로 옮기고, 두 자식 가운데 작은 쪽과 자리를 바꾸며 아래로 내린다. 각 단계에서 힙 조건이 깨진 곳은 움직이는 키의 자리 하나뿐이므로, 높이 $\lfloor\log\_2 n\rfloor$ 만큼의 단계 뒤에 조건이 복구된다. 최솟값 보기, 삽입, 최솟값 삭제를 갖는 자료구조를 **우선순위 큐(priority queue)** 라 하고, 이진 힙은 그 구현이다.

예. $A=(1,3,2,7,4)$ 에 $0$ 을 넣으면 $A\lbrack 5\rbrack=0$ 의 부모는 $2$ 번 $2$ 이므로 자리를 바꾸고, 다시 부모인 $0$ 번 $1$ 과 바꾸어 $A=(0,3,1,7,4,2)$ 가 된다.

```typescript
function siftUp(A: number[], i: number): void {
  while (i > 0) {
    const p = Math.floor((i - 1) / 2);
    if (A[p] <= A[i]) return;
    [A[p], A[i]] = [A[i], A[p]];
    i = p;
  }
}

function siftDown(A: number[], i: number, n: number): void {
  for (;;) {
    let c = 2 * i + 1;
    if (c >= n) return;
    if (c + 1 < n && A[c + 1] < A[c]) c = c + 1;
    if (A[i] <= A[c]) return;
    [A[c], A[i]] = [A[i], A[c]];
    i = c;
  }
}
```

## 선형 시간 구성

임의의 배열은 $i=\lfloor n/2\rfloor-1$ 부터 $0$ 까지 차례로 `siftDown` 을 하면 힙이 된다[^2]. 높이 $h$ 인 마디는 $\lceil n/2^{h+1}\rceil$ 개 이하이고 각각 $O(h)$ 단계가 들므로 전체 시간은 다음이다.

$$
\sum\_{h\ge 0}\frac{n}{2^{h+1}}O(h)=O\Bigl(n\sum\_{h\ge 0}\frac{h}{2^{h}}\Bigr)=O(n)
$$

## 힙 정렬

배열을 힙으로 만든 뒤 최솟값 삭제를 $n$ 번 하면, 꺼낸 키를 배열 끝의 빈 자리에 두어 추가 메모리 없이 $O(n\log n)$ 에 정렬한다[^1]. [비교 정렬](comparison-sorting.md)은 $n!$ 가지 순서를 가려야 하므로 비교가 $\log\_2 n!=\Theta(n\log n)$ 번 필요하고, 힙 정렬은 차수에서 이 하한과 같다.

## 키 감소

각 키의 배열 위치를 따로 기록하면, 키를 줄인 뒤 `siftUp` 으로 $O(\log n)$ 에 조건을 복구한다. 키 감소를 분할상환 상수 시간에 하는 구조가 [Fibonacci 힙](fibonacci-heaps.md)이다[^3].

# 활용

- [최단경로](shortest-paths.md)의 Dijkstra 알고리즘. 아직 확정되지 않은 정점 가운데 거리가 가장 작은 것을 꺼내고 이웃의 거리를 키 감소로 줄인다. 이진 힙으로 $O((\lvert V\rvert+\lvert E\rvert)\log\lvert V\rvert)$ 다.
- [최소 신장트리](minimum-spanning-tree.md)의 Prim 알고리즘. 트리에 붙일 간선 가운데 가장 가벼운 것을 같은 방식으로 꺼낸다.
- [위상정렬](topological-sort.md). 진입 차수가 $0$ 인 정점을 큐 대신 힙에 두면 사전순으로 가장 앞선 위상정렬이 나온다.
- 사건 모의실험과 여러 정렬 목록의 병합. 다음 사건 시각이나 각 목록의 맨 앞 키를 힙에 두고 가장 작은 것을 꺼낸다.

[^1]: J. W. J. Williams, "Algorithm 232: Heapsort", Communications of the ACM 7 (1964), 347–348.
[^2]: R. W. Floyd, "Algorithm 245: Treesort 3", Communications of the ACM 7 (1964), 701.
[^3]: M. L. Fredman, R. E. Tarjan, "Fibonacci heaps and their uses in improved network optimization algorithms", Journal of the ACM 34 (1987), 596–615.

# 연관 문서

## 선수지식

- [그래프](graphs.md)
- [부분순서](partial-orders.md)

## 더 알아보기

- [Fibonacci 힙](fibonacci-heaps.md)

#data_structures #algorithms #order_theory
