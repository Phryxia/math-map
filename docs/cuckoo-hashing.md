# 뻐꾸기 해싱

# 개요

**뻐꾸기 해싱(cuckoo hashing)** 은 키마다 들어갈 수 있는 칸을 두 개만 정해 두어, 키를 찾을 때 최악의 경우에도 두 칸만 보면 되게 하는 [해시 테이블](hash-tables.md)이다. 칸마다 목록을 잇는 해시 테이블은 목록 길이의 평균이 상수여도 가장 긴 목록은 키의 수에 따라 길어져, 운이 나쁜 키를 찾는 데 시간이 더 든다. 뻐꾸기 해싱은 새 키가 들어갈 칸에 다른 키가 있으면 그 키를 쫓아내 그 키의 다른 칸으로 보내는 일을 되풀이해, 삽입은 평균 상수 시간에 하고 찾기는 언제나 두 번의 조회로 끝낸다.

# 직관

뻐꾸기 해싱은 해시 함수 $h\_1,h\_2$ 와 표 $T\_1,T\_2$ 를 두고 키 $x$ 를 $T\_1\lbrack h\_1(x)\rbrack$ 와 $T\_2\lbrack h\_2(x)\rbrack$ 가운데 한 자리에만 두는 해시 테이블로서, 찾기와 지우기가 최악의 경우에도 두 자리의 조회로 끝나는 것이다. Pagh 와 Rodler 가 2001 년에 제안했다[^1].

[범용 해시족](universal-hashing.md)의 연쇄 방식은 목록 길이의 기댓값이 상수이지만 가장 긴 목록은 상수가 아니다. 뻐꾸기 해싱은 삽입에 드는 시간을 기댓값으로 상수에 두고, 찾기의 시간은 언제나 상수로 둔다.

키를 찾을 때 두 칸만 보려면 모든 키가 자기 두 칸 가운데 하나에 있어야 한다. 새 키 $x$ 를 넣을 때 $T\_1\lbrack h\_1(x)\rbrack$ 가 비어 있으면 거기에 둔다. 그 칸에 키 $y$ 가 있으면 $x$ 를 그 칸에 두고 $y$ 를 꺼낸다. $y$ 는 다른 칸 $T\_2\lbrack h\_2(y)\rbrack$ 로 간다.

그 칸에도 키 $z$ 가 있으면 $z$ 를 꺼내 $T\_1\lbrack h\_1(z)\rbrack$ 로 보내고, 빈 칸이 나올 때까지 이렇게 한다. 뻐꾸기가 남의 둥지에서 알을 밀어내는 모양이라 이름이 붙었다. 꺼내기가 정해진 횟수를 넘으면 순환에 빠졌다고 보고 새 함수를 골라 모든 키를 다시 넣는다.

# 정의

## 표와 연산

두 표의 크기는 각각 $r$ 이고 $h\_1,h\_2:U\to\lbrace 0,\dots,r-1\rbrace$ 이다.

- 찾기. $T\_1\lbrack h\_1(x)\rbrack=x$ 이거나 $T\_2\lbrack h\_2(x)\rbrack=x$ 인지 본다.
- 지우기. 찾은 칸을 비운다.
- 삽입. 아래 절차로 넣고, 꺼내기가 $L$ 번을 넘으면 새 $h\_1,h\_2$ 를 골라 모든 키를 다시 넣는다.

```typescript
function insert(T: (Key | null)[][], h: Array<(x: Key) => number>, x: Key, L: number): boolean {
  let cur: Key = x;
  let side = 0;
  for (let step = 0; step < L; step++) {
    const hs = h[side];
    const pos = hs(cur);
    const old = T[side][pos];
    T[side][pos] = cur;
    if (old === null) return true;
    cur = old;
    side = 1 - side;
  }
  return false; // 새 함수로 다시 넣는다
}
```

## 뻐꾸기 그래프

키 집합 $S$ 의 **뻐꾸기 그래프(cuckoo graph)** 는 두 표의 칸 $2r$ 개를 정점으로 하고, 키 $x$ 마다 $T\_1$ 의 칸 $h\_1(x)$ 와 $T\_2$ 의 칸 $h\_2(x)$ 를 잇는 간선을 둔 이분 다중그래프다.

# 성질

## 삽입이 성공하는 조건

정리. $S$ 의 모든 키를 두 표에 놓을 수 있는 것은 뻐꾸기 그래프의 모든 연결성분에서 간선 수가 정점 수 이하인 것과 동치다[^1].

증명의 요지. 키를 놓는 것은 간선마다 끝점 하나를 고르되 같은 정점을 두 간선이 고르지 않게 하는 것이다. 간선이 정점보다 많은 성분은 [비둘기집 원리](pigeonhole-principle.md)로 불가능하다. 간선 수가 정점 수 이하인 연결성분은 나무이거나 순환 하나가 있는 그래프이고, 순환의 간선은 순환을 따라 한 방향의 끝점을 고르고, 나머지 간선은 순환이나 뿌리에서 먼 쪽 끝점을 고르면 된다.

## 기대 시간

$r\ge(1+\varepsilon)n$ 이고 해시 함수가 충분히 독립이면, 키 $n$ 개를 넣는 동안 다시 넣기가 일어날 확률은 $O(1/n)$ 이고 삽입 하나의 기대 시간은 상수다[^1]. 이 분석은 함수가 범용성보다 강한 독립성을 가진다고 가정한다. 성분의 크기가 작고 순환이 둘 이상인 성분이 드물다는 것은 [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)에서 간선 수가 정점 수의 절반 아래일 때의 성분 구조와 같은 계산이다.

## 적재율의 문턱

칸 $2r$ 개 가운데 키가 차지하는 비율이 $1/2$ 을 넘으면 뻐꾸기 그래프에 순환이 둘 이상인 큰 성분이 높은 확률로 생겨 삽입이 실패한다. 키마다 함수를 $d$ 개 두고 그 가운데 한 칸에 놓으면 문턱이 올라가고, $d=3$ 이면 약 $0.918$ 이다[^2].

# 활용

- 네트워크 장비. 라우터와 스위치가 패킷마다 조회 횟수가 정해져 있어야 하는 주소 표를 뻐꾸기 해싱으로 둔다.
- 뻐꾸기 필터(cuckoo filter). 키 대신 키의 짧은 지문을 두 칸 가운데 하나에 저장해, [Bloom 필터](bloom-filters.md)와 같은 원소 여부 질의에 답하면서 삭제도 지원한다[^3].

[^1]: R. Pagh, F. F. Rodler, "Cuckoo hashing", Journal of Algorithms 51 (2004), 122–144.
[^2]: D. Fotakis, R. Pagh, P. Sanders, P. Spirakis, "Space efficient hash tables with worst case constant access time", Theory of Computing Systems 38 (2005), 229–248.
[^3]: B. Fan, D. G. Andersen, M. Kaminsky, M. D. Mitzenmacher, "Cuckoo filter: practically better than Bloom", CoNEXT 2014, 75–88.

# 연관 문서

## 선수지식

- [해시 테이블](hash-tables.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms #probability #graph_theory
