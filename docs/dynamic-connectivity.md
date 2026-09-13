# 동적 연결성

동적 연결성은 간선이 변하는 그래프에서 두 정점이 같은 연결 성분에 속하는지 계속 질의하는 문제다.

## 정의

고정된 정점 집합을 가진 무향 그래프에 대해 다음 연산들을 처리한다.

- INSERT(u,v): 간선 {u,v}를 추가한다.
- DELETE(u,v): 기존 간선 {u,v}를 제거한다.
- CONNECTED(u,v): u와 v 사이에 경로가 있는지 반환한다.

추가만 허용하면 incremental connectivity, 삭제만 허용하면 decremental connectivity, 둘 다 허용하면 fully dynamic connectivity라 한다.

## 성질

incremental 문제는 서로소 집합 자료구조로 처리할 수 있다. 간선을 추가할 때 두 연결 성분을 합치고, 질의에서는 두 정점의 대표원을 비교한다.

삭제는 단순한 역연산이 아니다. 트리 간선을 지우면 연결 성분이 갈라질 수 있지만, 순환에 속한 간선을 지우면 연결성은 유지된다. 서로소 집합 자료구조는 합칠 때 버린 내부 경로 정보를 복원하지 않으므로 DELETE를 직접 지원하지 않는다.

그래프가 항상 forest라면 link-cut tree로 각 트리를 동적으로 표현할 수 있다. LINK는 서로 다른 두 트리를 잇고, CUT은 트리 간선 하나를 제거하며, 두 정점의 root가 같은지 비교해 연결성을 판정한다. Splay tree에 기반한 구현은 각 연산에 amortized logarithmic time을 제공한다.

일반 그래프에서는 유지 중인 spanning forest의 트리 간선을 삭제할 때 두 성분을 다시 잇는 non-tree edge를 찾아야 한다. 이 replacement edge 탐색이 forest의 경우보다 어려운 핵심이다.

## 활용

통신망의 연결 상태, 도로의 개통과 폐쇄, 온라인 그래프 편집, 변화하는 군집을 추적한다. 모든 변경을 미리 아는 offline 문제라면 삭제를 시간을 거꾸로 읽은 추가로 바꾸어 서로소 집합 자료구조를 다시 사용할 수 있는 경우도 있다.

## 기타 참고 문헌

- [MIT 6.851 Advanced Data Structures, Lecture 19](https://courses.csail.mit.edu/6.851/spring12/lectures/L19.html): dynamic graph 문제, link-cut tree의 LINK·CUT과 amortized O(log n) 연산.

# 연관 문서

## 선수지식

- [그래프](graphs.md)
- [서로소 집합 자료구조](union-find.md)

## 더 알아보기

- [Link-cut tree](link-cut-trees.md)

#algorithms #data_structures
