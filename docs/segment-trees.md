# 세그먼트 트리

# 개요

**세그먼트 트리(segment tree)** 는 배열을 반씩 나눈 구간들의 합을 미리 저장해 두고, 구간 합을 묻는 질의와 원소를 바꾸는 갱신을 모두 빠르게 처리하는 자료구조다. 길이 $8$ 인 배열에서 앞에서부터의 누적합을 저장하면 구간 합은 뺄셈 한 번으로 나오지만, 첫 원소 하나를 바꾸면 누적합 $8$ 개를 모두 고쳐야 한다. 세그먼트 트리는 묻는 구간을 저장된 구간 $O(\log n)$ 개로 쪼개 답하고, 원소 하나를 바꿀 때도 그 원소를 포함하는 구간 $O(\log n)$ 개만 고친다.

# 직관

길이 $8$ 인 배열에서 구간 합을 거듭 묻는다. 합을 매번 더하면 질의마다 구간 길이만큼 덧셈이 들고, 앞에서부터의 누적합 $s_r=a_0+\cdots+a_{r-1}$ 을 저장해 두면 질의는 $s_r-s_l$ 한 번으로 끝나지만 $a_0$ 하나를 바꾸면 누적합 $8$ 개를 모두 고쳐야 한다.

그래서 배열을 반으로 나누고, 다시 반으로 나누기를 길이 $1$ 이 될 때까지 해서 생긴 구간 $\lbrack 0,8),\lbrack 0,4),\lbrack 4,8),\lbrack 0,2),\dots$ 마다 합을 저장한다. 구간 $\lbrack 1,7)$ 의 합은 $\lbrack 1,2),\lbrack 2,4),\lbrack 4,6),\lbrack 6,7)$ 네 조각의 합이다. $a_3$ 을 바꾸면 $a_3$ 을 담은 구간 $\lbrack 3,4),\lbrack 2,4),\lbrack 0,4),\lbrack 0,8)$ 네 개만 고친다. 질의와 갱신 모두 반으로 나눈 횟수 $\log_2 8=3$ 에 비례하는 조각만 다룬다.

# 정의

## 트리

$(M,\oplus,e)$ 는 결합법칙을 만족하는 연산 $\oplus$ 와 항등원 $e$ 를 가진 집합이다. 합, 최솟값, 최댓값, 최대공약수, [행렬](matrices.md) 곱이 이런 연산이다. 배열 $a_0,\dots,a_{n-1}\in M$ 의 세그먼트 트리는 다음을 만족하는 [그래프](graphs.md)의 뿌리 있는 이진 트리다.

- 뿌리는 구간 $\lbrack 0,n)$ 에 대응한다.
- 구간 $\lbrack l,r)$ 에 대응하는 마디는 $r-l=1$ 이면 잎이고, 아니면 $m=\lfloor(l+r)/2\rfloor$ 로 나눈 $\lbrack l,m)$ 과 $\lbrack m,r)$ 의 마디를 자식으로 둔다.
- 구간 $\lbrack l,r)$ 의 마디에 $a_l\oplus\cdots\oplus a_{r-1}$ 을 저장한다.

예. 직관 절의 길이 $8$ 인 배열이 $(5,2,7,1,3,6,4,8)$ 이고 $\oplus$ 가 덧셈, $e=0$ 이면 뿌리 $\lbrack 0,8)$ 에 $36$, 자식 $\lbrack 0,4)$ 와 $\lbrack 4,8)$ 에 $15$ 와 $21$, 그 아래 $\lbrack 0,2),\lbrack 2,4),\lbrack 4,6),\lbrack 6,8)$ 에 $7,8,9,12$ 가 저장된다.

## 질의와 갱신

질의 $\lbrack x,y)$ 는 뿌리에서 시작해, 마디의 구간이 $\lbrack x,y)$ 에 포함되면 저장된 값을 돌려주고, 겹치지 않으면 $e$ 를 돌려주고, 그 밖에는 두 자식의 답을 $\oplus$ 로 합친다. 갱신은 잎의 값을 바꾸고 뿌리까지 올라가며 각 마디의 값을 두 자식의 값의 $\oplus$ 로 다시 계산한다.

예. 앞 절의 트리에서 질의 $\lbrack 1,7)$ 은 $\lbrack 1,2),\lbrack 2,4),\lbrack 4,6),\lbrack 6,7)$ 의 값 $2,8,9,4$ 를 더해 $23$ 을 낸다. $a_3$ 을 $10$ 으로 바꾸면 $\lbrack 3,4),\lbrack 2,4),\lbrack 0,4),\lbrack 0,8)$ 의 값이 $10,17,24,45$ 로 바뀐다.

```typescript
class SegmentTree {
  private t: number[];
  constructor(private n: number, private op: (x: number, y: number) => number, private e: number) {
    this.t = new Array<number>(4 * n).fill(e);
  }
  update(i: number, v: number, node = 1, l = 0, r = this.n): void {
    if (r - l === 1) {
      this.t[node] = v;
      return;
    }
    const m = Math.floor((l + r) / 2);
    if (i < m) this.update(i, v, 2 * node, l, m);
    else this.update(i, v, 2 * node + 1, m, r);
    this.t[node] = this.op(this.t[2 * node], this.t[2 * node + 1]);
  }
  query(x: number, y: number, node = 1, l = 0, r = this.n): number {
    if (y <= l || r <= x) return this.e;
    if (x <= l && r <= y) return this.t[node];
    const m = Math.floor((l + r) / 2);
    return this.op(this.query(x, y, 2 * node, l, m), this.query(x, y, 2 * node + 1, m, r));
  }
}
```

# 성질

## 높이와 크기

트리의 높이는 $\lceil\log_2 n\rceil$ 이고, 잎이 $n$ 개이며 내부 마디마다 자식이 둘이므로 마디는 $2n-1$ 개다.

## 질의의 비용

정리. 질의는 깊이마다 마디를 $4$ 개 이하 방문하므로 $O(\log n)$ 시간이 든다[^1].

증명의 요지. 같은 깊이의 마디들의 구간은 서로 겹치지 않고 왼쪽에서 오른쪽으로 놓인다. 어떤 깊이에서 재귀가 자식으로 내려가는 마디는 구간이 $\lbrack x,y)$ 에 포함되지도 않고 겹치지 않지도 않은 마디, 곧 $x$ 나 $y$ 를 구간 안쪽에 둔 마디다. 그런 마디는 깊이마다 둘 이하이고, 각각 자식 둘을 방문하므로 다음 깊이의 방문은 $4$ 개 이하다.

## 구간 갱신과 지연 전파

구간 $\lbrack x,y)$ 의 모든 원소에 같은 값을 더하는 갱신도 $O(\log n)$ 시간에 한다. 질의와 같이 구간을 $O(\log n)$ 개의 마디로 나누고, 그 마디들에는 값을 고친 뒤 "자식들에 아직 더하지 않은 값" 을 표시해 둔다. 나중에 질의나 갱신이 그 마디의 자식으로 내려갈 때 표시를 자식들에게 넘긴다. 이 방법을 지연 전파(lazy propagation)라 한다. 합 질의에서 구간 $\lbrack l,r)$ 의 마디에 $c$ 를 더하면 저장된 합이 $c(r-l)$ 늘어난다.

## Fenwick 트리

연산이 [군](groups.md)의 연산이어서 역원이 있으면, 구간 값은 앞에서부터의 값 두 개의 차 $s_y-s_x$ 로 나온다. **Fenwick 트리(Fenwick tree)** 는 이 경우에 배열 하나만으로 $s_r$ 과 원소 갱신을 $O(\log n)$ 에 처리한다. 칸 $i$ 에 구간 $(i-\mathrm{low}(i), i\rbrack$ 의 합을 두며, $\mathrm{low}(i)$ 는 $i$ 의 이진 표현에서 가장 낮은 $1$ 비트의 값이다. $s_r$ 은 $r$ 에서 $\mathrm{low}$ 를 거듭 빼며 칸을 더하고, 갱신은 $i$ 에 $\mathrm{low}$ 를 거듭 더하며 칸을 고친다. 두 반복 모두 $\lfloor\log_2 n\rfloor+1$ 번 이하다[^2].

# 활용

- 구간 최솟값 질의. 연산을 최솟값으로 두면 구간 최솟값을 $O(\log n)$ 에 답한다. [접미사 배열](suffix-arrays.md)의 LCP(longest common prefix) 배열에 이것을 쓰면 임의의 두 접미사의 공통 접두사 길이가 구간 최솟값으로 나온다.
- 시간 축 분할. [동적 연결성](dynamic-connectivity.md)의 오프라인 알고리즘은 간선마다 살아 있는 시간 구간을 세그먼트 트리의 $O(\log n)$ 개 마디에 붙이고 트리를 깊이 우선으로 돌며 간선을 넣고 뺀다.
- 계산 기하. 평면의 직사각형 $n$ 개의 합집합 넓이는 한 축을 따라 쓸며, 다른 축의 덮인 길이를 세그먼트 트리로 유지해 $O(n\log n)$ 시간에 구한다. Bentley 가 이 목적으로 세그먼트 트리를 도입했다[^1].

[^1]: M. de Berg, O. Cheong, M. van Kreveld, M. Overmars, *Computational Geometry: Algorithms and Applications*, 3rd ed., Springer, 2008, §10.3.
[^2]: P. M. Fenwick, "A new data structure for cumulative frequency tables", Software: Practice and Experience 24 (1994), 327–336.

# 연관 문서

## 선수지식

- [그래프](graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms
