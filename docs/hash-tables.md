# 해시 테이블

# 개요

**해시 테이블(hash table)** 은 키를 해시 함수로 계산한 칸에 저장해 삽입과 찾기와 지우기를 기대 상수 시간에 하는 사전 자료구조다. 같은 칸으로 간 키들을 칸마다 목록으로 잇는 체이닝(separate chaining)과, 표 안의 다른 빈칸을 정해진 순서로 찾아가는 개방 주소법(open addressing)으로 나뉜다.

체이닝에서 목록 길이의 기댓값은 [범용 해시족](universal-hashing.md)의 정리로 정해진다. 개방 주소법의 비용은 표가 얼마나 찼는지에 따라 달라지고, 그 계산은 [유한 확률 공간](probability.md)의 기댓값이다.

# 직관

칸이 $m=10$ 개인 배열에 키를 넣는다. 키 $x$ 의 칸 $h(x)$ 에 이미 다른 키가 있으면 바로 오른쪽 칸을 보고, 그 칸도 차 있으면 다시 오른쪽을 보아 빈칸이 나오면 거기에 둔다. 찾을 때도 $h(x)$ 부터 오른쪽으로 가다가 $x$ 를 만나면 찾은 것이고 빈칸을 만나면 $x$ 가 없는 것이다.

키가 $9$ 개 들어 있으면 빈칸은 하나뿐이다. 새 키의 칸이 어디로 떨어지든 그 빈칸까지 걸어가야 하므로 평균 $5$ 칸 가까이 본다. 키가 $5$ 개면 빈칸이 다섯이어서 대개 한두 칸 만에 빈칸을 만난다. 그래서 비용은 키 수 $n$ 이 아니라 찬 비율 $n/m$ 으로 정해지고, 비율이 $1$ 에 가까워질 때 크게 늘어난다. 비율이 정해진 값을 넘으면 배열을 두 배로 늘려 비율을 다시 낮춘다.

# 정의

## 적재율

키 $n$ 개가 칸 $m$ 개의 표에 들어 있을 때 $\alpha=n/m$ 을 **적재율(load factor)** 이라 한다.

## 체이닝

**체이닝(separate chaining)** 은 칸 $i$ 마다 $h(x)=i$ 인 키들의 목록을 둔다. 찾기는 칸 $h(x)$ 의 목록을 처음부터 훑는다. 적재율은 $1$ 을 넘을 수 있다.

## 개방 주소법

**개방 주소법(open addressing)** 은 키를 표의 칸에 직접 두고, 키마다 칸들의 순서 $h(x,0),h(x,1),\dots,h(x,m-1)$ 을 정한다. 이 순서를 탐사열(probe sequence)이라 하고, $0,\dots,m-1$ 의 순열이어야 한다. 삽입은 탐사열을 따라 첫 빈칸에 두고, 찾기는 키를 만나거나 빈칸을 만날 때까지 탐사열을 따른다. 적재율은 $1$ 이하다.

- 선형 탐사(linear probing). $h(x,i)=(h(x)+i)\bmod m$.
- 이중 해싱(double hashing). $h(x,i)=(h\_1(x)+i\thinspace h\_2(x))\bmod m$. $h\_2(x)$ 가 $m$ 과 서로소이면 탐사열이 순열이다.

키를 지울 때 칸을 비우면 그 칸을 지나 저장된 키를 찾다가 거기서 멈춘다. 그래서 지운 칸에 "지움" 표시를 남기고, 찾기는 그 칸을 지나가고 삽입은 그 칸에 쓴다.

```typescript
const EMPTY = null;
const DELETED = Symbol("deleted");
type Cell = number | null | typeof DELETED;

function find(t: Cell[], x: number, h: (x: number) => number): number {
  const m = t.length;
  for (let i = 0; i < m; i++) {
    const j = (h(x) + i) % m;
    if (t[j] === EMPTY) return -1;
    if (t[j] === x) return j;
  }
  return -1;
}

function insert(t: Cell[], x: number, h: (x: number) => number): void {
  const m = t.length;
  for (let i = 0; i < m; i++) {
    const j = (h(x) + i) % m;
    if (t[j] === EMPTY || t[j] === DELETED) {
      t[j] = x;
      return;
    }
  }
}
```

# 성질

## 균등 해싱에서의 탐사 횟수

균등 해싱 가정(uniform hashing assumption)은 키마다 탐사열이 $m!$ 개의 순열 가운데 균등하고 독립으로 정해진다는 가정이다.

정리. 균등 해싱 가정 아래 적재율 $\alpha\lt 1$ 인 표에서, 없는 키를 찾을 때 보는 칸 수의 기댓값은 $1/(1-\alpha)$ 이하이고, 있는 키를 찾을 때는 $\frac1\alpha\ln\frac1{1-\alpha}$ 이하다[^1].

증명의 요지. 없는 키의 탐사열이 처음 $i$ 칸을 모두 찬 칸에서 만날 확률은 $\frac nm\cdot\frac{n-1}{m-1}\cdots\frac{n-i+1}{m-i+1}\le\alpha^i$ 이다. 보는 칸 수의 기댓값은 이 확률을 $i=0,1,2,\dots$ 에 대해 더한 것이므로 $\sum\_{i\ge 0}\alpha^i=1/(1-\alpha)$ 이하다. 있는 키를 찾는 탐사열은 그 키를 넣을 때의 탐사열과 같다. $k+1$ 번째로 넣은 키는 넣을 때 적재율이 $k/m$ 이었으므로 찾는 데 $m/(m-k)$ 칸 이하를 보고, 키 $n$ 개의 평균은 다음과 같다.

$$
\frac1n\sum_{k=0}^{n-1}\frac{m}{m-k}\le\frac1\alpha\int_{0}^{\alpha}\frac{dt}{1-t}=\frac1\alpha\ln\frac1{1-\alpha}
$$

$\alpha=1/2$ 이면 두 값은 $2$ 와 약 $1.39$ 이고, $\alpha=0.9$ 이면 $10$ 과 약 $2.56$ 이다.

## 선형 탐사

선형 탐사는 찬 칸들이 이어진 덩어리를 만들고, 덩어리에 떨어진 키는 덩어리 끝까지 간 뒤 덩어리를 한 칸 늘린다. 그래서 균등 해싱보다 비용이 크다. 해시 함수의 값이 균등하고 독립이면, 적재율 $\alpha$ 에서 보는 칸 수의 기댓값은 있는 키를 찾을 때 $\frac12\left(1+\frac1{1-\alpha}\right)$, 없는 키를 찾을 때 $\frac12\left(1+\frac1{(1-\alpha)^2}\right)$ 에 가까워진다. Knuth 가 1963 년에 계산했다[^1].

해시 함수를 키 다섯 개마다 독립인 족에서 고르면 적재율이 $1$ 보다 작은 상수일 때 연산 하나의 기대 시간이 상수다[^2]. 선형 탐사는 이웃한 칸을 차례로 읽으므로 메모리 캐시에 유리하다.

## 크기 두 배 늘리기

적재율이 정해진 상한 $\alpha\_{\max}$ 를 넘으면 칸이 두 배인 표를 새로 만들고 모든 키를 다시 넣는다. 크기가 $m$ 에서 $2m$ 으로 늘 때 다시 넣는 키는 $\alpha\_{\max}m$ 개다. 키 $n$ 개를 넣는 동안 다시 넣기의 합은 $n+\frac n2+\frac n4+\cdots\le 2n$ 이므로 삽입 하나의 분할상환(amortized) 비용은 상수다.

# 활용

- 사전과 집합. 키의 순서가 필요 없는 사전은 해시 테이블로 구현한다. 키 순서의 범위 질의가 필요하면 [균형 이진 탐색 트리](balanced-binary-search-trees.md)나 [스킵 리스트](skip-lists.md)를 쓴다.
- 최악의 찾기 시간. 체이닝의 가장 긴 목록과 선형 탐사의 가장 긴 덩어리는 $\Theta(\log n/\log\log n)$ 과 $\Theta(\log n)$ 으로 자란다. [뻐꾸기 해싱](cuckoo-hashing.md)은 키마다 두 칸만 허용해 찾기를 최악의 경우에도 두 번의 조회로 끝낸다.
- 공간을 줄인 근사. [Bloom 필터](bloom-filters.md)는 키를 저장하지 않고 비트만 두어, 거짓 양성을 허용하는 대신 키 하나당 상수 개의 비트로 원소 여부에 답한다.

[^1]: D. E. Knuth, *The Art of Computer Programming, Vol. 3: Sorting and Searching*, 2nd ed., Addison-Wesley, 1998, §6.4.
[^2]: A. Pagh, R. Pagh, M. Ružić, "Linear probing with constant independence", SIAM Journal on Computing 39 (2009), 1107–1120.

# 연관 문서

## 선수지식

- [범용 해시족](universal-hashing.md)

## 더 알아보기

- [뻐꾸기 해싱](cuckoo-hashing.md)

#data_structures #algorithms #probability
