# van Emde Boas 트리

# 개요

**van Emde Boas 트리(van Emde Boas tree)** 는 $0$ 이상 $u$ 미만의 정수 집합을 저장해, 삽입과 삭제와 다음 원소(successor) 찾기를 $O(\log\log u)$ 시간에 하는 자료구조다. 수의 범위를 $\sqrt u$ 개의 묶음으로 나누고 묶음마다, 그리고 비어 있지 않은 묶음들의 목록에 같은 구조를 재귀로 둔다. van Emde Boas 가 1975 년에 발표했다[^1].

[균형 이진 탐색 트리](balanced-binary-search-trees.md)는 키를 비교로만 다루어 다음 원소 찾기에 $\Omega(\log n)$ 번 비교한다. van Emde Boas 트리는 키의 비트를 위아래 절반으로 갈라 배열의 위치로 쓰므로 이 하한이 적용되지 않는다.

# 직관

$0$ 이상 $2^{16}$ 미만의 정수 집합에서 $x$ 다음으로 큰 원소를 찾는다. $x$ 를 $16$ 비트로 쓰면 위 $8$ 비트는 $x$ 가 든 묶음의 번호, 아래 $8$ 비트는 묶음 안의 위치다. 같은 묶음 안에 $x$ 보다 큰 원소가 있으면 답은 그 묶음 안에 있고, 없으면 답은 $x$ 의 묶음 다음의 비어 있지 않은 첫 묶음의 가장 작은 원소다.

어느 쪽인지는 묶음의 최댓값을 저장해 두면 비교 한 번으로 정해진다. 묶음 안에서 찾는 것도, 비어 있지 않은 묶음 번호들의 집합에서 다음 번호를 찾는 것도 $2^8$ 미만의 정수에서의 같은 문제다. 둘 가운데 하나만 재귀하므로 비트 수가 $16, 8, 4, 2, 1$ 로 반씩 줄며, 단계는 $\log_2 16=4$ 개다.

# 정의

## 묶음과 요약

$u=2^{2^k}$ 라 하고 $\sqrt u$ 미만의 정수로 $x=\mathrm{high}(x)\sqrt u+\mathrm{low}(x)$ 라 쓴다. 범위 $u$ 의 van Emde Boas 트리 $V$ 는 다음을 가진다.

- 원소 가운데 최솟값 $V.\mathrm{min}$ 과 최댓값 $V.\mathrm{max}$. 비어 있으면 둘 다 없음으로 둔다.
- 범위 $\sqrt u$ 의 van Emde Boas 트리 $\sqrt u$ 개 $V.\mathrm{cluster}\lbrack 0\rbrack,\dots,V.\mathrm{cluster}\lbrack\sqrt u-1\rbrack$. $V.\mathrm{cluster}\lbrack i\rbrack$ 는 최솟값을 뺀 원소들 가운데 $\mathrm{high}(x)=i$ 인 것들의 $\mathrm{low}(x)$ 를 저장한다.
- 범위 $\sqrt u$ 의 van Emde Boas 트리 $V.\mathrm{summary}$. 비어 있지 않은 묶음의 번호를 저장한다.

$u=2$ 이면 $\mathrm{min}$ 과 $\mathrm{max}$ 만 둔다. 최솟값은 묶음에 넣지 않으므로, 빈 트리에 원소를 넣을 때와 원소가 하나뿐인 트리에서 뺄 때는 재귀하지 않는다.

## 다음 원소 찾기

$x$ 의 다음 원소는 다음 순서로 찾는다. $x\lt V.\mathrm{min}$ 이면 $V.\mathrm{min}$ 이다. 그 밖에 $i=\mathrm{high}(x)$ 의 묶음의 최댓값이 $\mathrm{low}(x)$ 보다 크면, 그 묶음에서 $\mathrm{low}(x)$ 의 다음 원소를 재귀로 찾는다. 아니면 $V.\mathrm{summary}$ 에서 $i$ 의 다음 번호 $j$ 를 재귀로 찾고, 묶음 $j$ 의 최솟값을 읽는다.

```typescript
interface VEB {
  u: number;
  min: number | null;
  max: number | null;
  summary: VEB | null;
  cluster: VEB[];
}

function successor(V: VEB, x: number): number | null {
  if (V.min !== null && x < V.min) return V.min;
  if (V.u === 2) return x === 0 && V.max === 1 ? 1 : null;
  const s = Math.sqrt(V.u);
  const i = Math.floor(x / s);
  const lo = x % s;
  const c = V.cluster[i];
  if (c.max !== null && lo < c.max) return i * s + successor(c, lo)!;
  const j = successor(V.summary!, i);
  if (j === null) return null;
  return j * s + V.cluster[j].min!;
}
```

# 성질

## 시간

정리. 삽입, 삭제, 다음 원소 찾기, 이전 원소 찾기는 $O(\log\log u)$ 시간이 든다[^2].

증명의 요지. 다음 원소 찾기는 묶음과 요약 가운데 하나에서만 재귀하고 나머지는 상수 시간이다. 삽입은 묶음이 비어 있으면 요약에 묶음 번호를 재귀로 넣고 빈 묶음에는 상수 시간에 넣으며, 묶음이 비어 있지 않으면 요약을 건드리지 않고 묶음에만 재귀한다. 그래서 각 연산의 시간 $T(u)$ 는 다음을 만족한다.

$$
T(u)\le T(\sqrt u)+O(1)
$$

$u=2^{2^k}$ 이면 재귀 한 번에 $k$ 가 $1$ 줄므로 $T(u)=O(k)=O(\log\log u)$ 다.

## 공간

정리. 범위 $u$ 의 van Emde Boas 트리는 저장한 원소 수와 관계없이 $\Theta(u)$ 공간을 쓴다. 비어 있지 않은 묶음만 [해시 테이블](hash-tables.md)에 두면 원소 $n$ 개에 $O(n\log\log u)$ 공간이고, 시간은 기댓값으로 $O(\log\log u)$ 다.

증명의 요지. 공간 $S(u)$ 는 $S(u)=(\sqrt u+1)S(\sqrt u)+O(\sqrt u)$ 를 만족하고 그 해가 $\Theta(u)$ 다. 묶음을 해시 테이블에 두면 비어 있지 않은 구조만 공간을 쓴다. 삽입 하나는 재귀 단계마다 빈 묶음 많아야 하나를 비어 있지 않게 만들고 단계는 $O(\log\log u)$ 개이므로, 원소 $n$ 개가 만드는 구조는 $O(n\log\log u)$ 개다.

## 비교 모형과의 차이

키가 $w$ 비트 정수이면 $u=2^w$ 이고 시간은 $O(\log w)$ 다. $w=64$ 이면 단계가 $6$ 개다. 같은 문제를 비교만으로 풀면 [비교 정렬](comparison-sorting.md)의 결정 트리 논증으로 $\Omega(\log n)$ 번 비교가 필요하다. van Emde Boas 트리는 $\mathrm{high}(x)$ 와 $\mathrm{low}(x)$ 를 배열의 위치로 쓰므로 결정 트리로 나타나지 않는다.

# 활용

- 정수 우선순위 큐. 삽입과 최솟값 삭제가 $O(\log\log u)$ 이므로, 간선 가중치가 작은 정수인 [최단경로](shortest-paths.md) 문제에서 Dijkstra 알고리즘의 우선순위 큐로 쓴다.
- 정수 정렬. 원소 $n$ 개를 넣고 최솟값부터 다음 원소를 차례로 찾으면 $O(n\log\log u)$ 시간에 정렬된다.
- 가장 가까운 키의 질의. 라우팅 표나 시간표처럼 키 범위가 정해진 정수 키에서 주어진 값 이하의 가장 큰 키를 찾는 데 쓴다.

[^1]: P. van Emde Boas, "Preserving order in a forest in less than logarithmic time", 16th Annual Symposium on Foundations of Computer Science, 1975, 75–84.
[^2]: T. H. Cormen, C. E. Leiserson, R. L. Rivest, C. Stein, *Introduction to Algorithms*, 3rd ed., MIT Press, 2009, Chapter 20.

# 연관 문서

## 선수지식

- [균형 이진 탐색 트리](balanced-binary-search-trees.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms
