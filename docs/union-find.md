# 서로소 집합 자료구조

서로소 집합 자료구조는 원소들의 분할을 합치면서 두 원소가 같은 블록에 속하는지 빠르게 판정한다.

## 정의

유한한 원소 집합 U를 서로 겹치지 않는 부분집합들로 분할한다. 각 부분집합은 대표원 하나를 가진다. 자료구조는 다음 연산을 지원한다.

- MAKE-SET(x): 원소 x만 든 새 집합을 만든다.
- FIND(x): x가 속한 집합의 대표원을 반환한다.
- UNION(x,y): x와 y가 속한 두 집합을 하나로 합친다.

같은 집합에 속하는 관계는 반사적·대칭적·추이적이므로 동치관계다. 따라서 FIND(x)=FIND(y)는 x와 y가 같은 동치류에 있다는 뜻이다.

## 성질

각 집합을 뿌리 있는 트리로 나타내고, 뿌리를 대표원으로 삼을 수 있다. FIND는 부모 포인터를 따라 뿌리를 찾고, UNION은 서로 다른 두 뿌리 중 하나를 다른 하나의 자식으로 만든다.

union by size는 작은 트리의 뿌리를 큰 트리의 뿌리에 붙인다. 원소의 깊이가 1 증가할 때마다 자신이 속한 트리 크기가 적어도 두 배가 되므로, 원소 수를 n이라 할 때 높이는 다음보다 크지 않다.

$$
\lfloor\log_2 n\rfloor
$$

path compression은 FIND가 지나간 원소들의 부모를 찾은 뿌리로 바꾼다. union by size 또는 rank와 함께 쓰면 연속된 연산의 amortized cost는 inverse Ackermann 함수에 의해 제한된다. 이는 개별 FIND가 항상 상수 시간이라는 뜻이 아니라, 긴 연산열의 평균 비용에 관한 명제다.

UNION만 지원하므로 이미 추가한 연결을 삭제하는 fully dynamic connectivity에는 그대로 쓸 수 없다.

## 활용

Kruskal 알고리즘에서 가중치가 작은 순서로 간선 {u,v}를 볼 때 FIND(u)와 FIND(v)가 다르면 간선을 선택하고 UNION(u,v)를 수행한다. 대표원이 같다면 그 간선을 더하면 순환이 생기므로 버린다.

격자에서 연결 성분을 점진적으로 합치거나, 등가 제약들을 같은 부류로 묶거나, 이미지의 연결 성분을 표시할 때도 쓴다.

## 기타 참고 문헌

- [Robert Sedgewick and Kevin Wayne, Algorithms, §1.5 Union-Find](https://algs4.cs.princeton.edu/15uf/): quick-union, weighted union, path compression과 비용.
- [Kevin Wayne, Union-Find lecture slides](https://www.cs.princeton.edu/courses/archive/spring13/cos423/lectures/UnionFind.pdf): 연산 정의와 Kruskal을 포함한 응용.

# 연관 문서

## 선수지식

- [동치관계와 동치류](relations.md)
- [그래프](graphs.md)

## 더 알아보기

- [최소 신장트리](minimum-spanning-tree.md)
- [동적 연결성](dynamic-connectivity.md)

#data_structures #algorithms
