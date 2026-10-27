# Fibonacci 힙

# 개요

**Fibonacci 힙(Fibonacci heap)** 은 가장 작은 키를 빨리 꺼내는 우선순위 큐를, 정리 작업을 최솟값을 꺼낼 때까지 미뤄 구현한 자료구조다. [최단경로](shortest-paths.md)를 구하는 Dijkstra 알고리즘은 간선마다 키를 줄이는데, [이진 힙](binary-heaps.md)에서는 키를 줄일 때마다 $O(\log n)$ 이 들어 전체가 $O(\lvert E\rvert\log\lvert V\rvert)$ 다. Fibonacci 힙은 키가 줄어든 마디를 잘라 따로 한 그루로 두어 키 감소를 [분할상환](amortized-analysis.md) 상수 시간에 하고, Dijkstra 알고리즘을 $O(\lvert E\rvert+\lvert V\rvert\log\lvert V\rvert)$ 로 만든다.

# 직관

Fibonacci 힙은 힙 조건을 만족하는 나무들의 모임으로 우선순위 큐를 구현하되, 정리 작업을 최솟값 삭제 때까지 미뤄 삽입과 키 감소를 분할상환 상수 시간에 하는 자료구조다. Fredman 과 Tarjan 이 1987 년에 제안했다[^1].

이진 힙은 키 감소가 $O(\log n)$ 이어서, 키 감소가 간선 수만큼 일어나는 Dijkstra 알고리즘이 $O(\lvert E\rvert\log\lvert V\rvert)$ 이다. Fibonacci 힙으로는 $O(\lvert E\rvert+\lvert V\rvert\log\lvert V\rvert)$ 다. 이름은 마디의 차수와 부분트리 크기 사이의 관계에 Fibonacci 수가 나타나는 데서 왔다.

이진 힙에서 키를 줄이면 그 키를 뿌리 쪽으로 올리느라 높이만큼 자리를 바꾼다. 키가 줄어 부모보다 작아진 마디는 부모에게서 잘라 내 따로 한 그루의 나무로 두면 자리 바꾸기가 필요 없다. 삽입도 새 마디 하나를 나무 한 그루로 두면 끝난다. 그러면 나무가 많아지고 최솟값을 찾으려면 모든 뿌리를 보아야 한다.

그래서 최솟값을 꺼낼 때 한꺼번에 정리한다. 뿌리들을 차수(자식 수)별로 모아 같은 차수의 두 나무를 하나로 합치기를 반복하면 차수마다 나무가 하나씩만 남는다. 미뤄 둔 정리의 비용은 그동안 쌓인 나무 수에 비례하므로 삽입 하나하나에 나눠 매길 수 있다. 자르기를 마음대로 하면 나무가 가늘어져 차수가 커지므로, 한 마디에서 자식을 두 번 잃으면 그 마디도 잘라 낸다. 이 규칙으로 유지하는 나무들의 모임이 Fibonacci 힙이다.

# 정의

## 구조

Fibonacci 힙은 뿌리 있는 나무들의 모임이고, 각 나무는 부모의 키가 자식의 키 이하인 힙 조건을 만족한다. 뿌리들은 원형 목록으로 이어져 있고 최솟값 뿌리를 가리키는 포인터가 있다. 마디마다 차수와 표시(mark) 비트를 둔다. 표시는 그 마디가 부모 아래로 들어간 뒤 자식을 하나 잃었다는 뜻이다.

## 연산

- 삽입. 새 마디를 뿌리 목록에 넣고 최솟값 포인터를 고친다.
- 합치기. 두 힙의 뿌리 목록을 잇는다.
- 최솟값 삭제. 최솟값 뿌리를 지우고 그 자식들을 뿌리 목록에 올린다. 차수가 같은 두 뿌리가 있는 동안 키가 큰 쪽을 작은 쪽의 자식으로 붙인다.
- 키 감소. 키를 줄인 마디 $x$ 가 부모보다 작아지면 $x$ 를 잘라 뿌리로 올리고 표시를 지운다. 부모 $y$ 에 표시가 없으면 표시하고 멈춘다. 표시가 있으면 $y$ 도 잘라 올리고 그 부모에 대해 반복한다. 이 반복을 연쇄 자르기(cascading cut)라 한다.

# 성질

## 차수의 상한

정리. 차수가 $k$ 인 마디의 부분트리에는 마디가 $F\_{k+2}\ge\varphi^k$ 개 이상 있다. $F\_j$ 는 [Fibonacci 수](fibonacci-numbers.md)이고 $\varphi=(1+\sqrt 5)/2$ 다[^1].

증명의 요지. 마디 $x$ 의 자식들을 붙은 순서로 $y\_1,\dots,y\_k$ 라 하면, $y\_i$ 가 붙을 때 $x$ 의 차수는 $i-1$ 이상이었고 붙는 두 뿌리의 차수가 같으므로 $y\_i$ 의 차수도 $i-1$ 이상이었다. $y\_i$ 는 그 뒤 자식을 많아야 하나 잃었으므로 지금 차수가 $i-2$ 이상이다. 차수 $k$ 인 마디의 최소 부분트리 크기를 $s\_k$ 라 하면 $s\_k\ge 2+\sum\_{i=2}^{k}s\_{i-2}$ 이고, 이 점화식에서 $s\_k\ge F\_{k+2}$ 가 나온다. 그래서 $n$ 개 마디의 힙에서 차수는 $\log\_\varphi n$ 이하다.

## 분할상환 시간

뿌리의 수를 $t$, 표시된 마디의 수를 $m$ 이라 하고 퍼텐셜(potential)을 $\Phi=t+2m$ 으로 둔다. 삽입과 합치기는 실제 시간과 $\Phi$ 의 증가가 모두 상수다. 최솟값 삭제는 실제 시간이 $O(t+\log n)$ 이고 끝난 뒤 뿌리가 $O(\log n)$ 개이므로 분할상환 시간이 $O(\log n)$ 이다. 연쇄 자르기가 $c$ 번 일어나면 표시가 $c-1$ 개 이상 지워져 $\Phi$ 가 $c$ 에 비례해 줄므로 키 감소의 분할상환 시간은 상수다[^1].

| 연산        | 이진 힙       | Fibonacci 힙(분할상환) |
| ----------- | ------------- | ---------------------- |
| 삽입        | $O(\log n)$   | $O(1)$                 |
| 최솟값 보기 | $O(1)$        | $O(1)$                 |
| 최솟값 삭제 | $O(\log n)$   | $O(\log n)$            |
| 키 감소     | $O(\log n)$   | $O(1)$                 |
| 합치기      | $O(n)$        | $O(1)$                 |

# 활용

- 최단경로의 Dijkstra 알고리즘. 최솟값 삭제가 $\lvert V\rvert$ 번, 키 감소가 $\lvert E\rvert$ 번이므로 $O(\lvert E\rvert+\lvert V\rvert\log\lvert V\rvert)$ 다[^1].
- [최소 신장트리](minimum-spanning-tree.md)의 Prim 알고리즘. 같은 이유로 $O(\lvert E\rvert+\lvert V\rvert\log\lvert V\rvert)$ 다.

[^1]: M. L. Fredman, R. E. Tarjan, "Fibonacci heaps and their uses in improved network optimization algorithms", Journal of the ACM 34 (1987), 596–615.

# 연관 문서

## 선수지식

- [이진 힙](binary-heaps.md)
- [분할상환 분석](amortized-analysis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms #graph_theory
