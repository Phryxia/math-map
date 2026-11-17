# Misra–Gries 알고리즘

# 개요

**Misra–Gries 알고리즘(Misra–Gries algorithm)** 은 항목이 하나씩 지나가는 스트림(stream)을 한 번 읽으면서, 계수기 몇 개만으로 자주 나온 항목을 모두 찾는 방법이다. 표 $n$ 장을 차례로 읽으며 득표가 $n/3$ 을 넘는 후보를 찾으려 할 때, 후보마다 계수기를 두면 메모리가 후보 수에 비례한다. Misra–Gries 알고리즘은 계수기를 두 개만 두고, 둘 다 찬 상태에서 새 후보가 오면 서로 다른 후보 세 표를 한꺼번에 지운다. 이렇게 지우는 일은 $n/3$ 번을 넘지 못하므로 $n/3$ 표를 넘게 받은 후보는 끝까지 남는다.

# 직관

후보가 $a,b,c,d$ 인 표 여덟 장이 $a,b,a,c,a,b,d,a$ 의 순서로 온다. 득표가 $8/3$ 을 넘는 후보, 곧 세 표 이상 받은 후보를 찾는다. 후보가 몇 명일지 모르므로 후보마다 계수기를 두는 대신 계수기를 두 개만 둔다.

표가 오면 그 후보의 계수기가 있으면 $1$ 을 더하고, 빈 계수기가 있으면 그 후보에게 주고 $1$ 로 둔다. 두 계수기가 다른 후보에게 가 있으면 새 표를 버리고 두 계수기에서 $1$ 씩 뺀다. 이때 지워지는 것은 서로 다른 후보의 세 표다. 계수기가 $0$ 이 되면 비운다.

| 표  | 계수기               | 한 일                  |
| --- | -------------------- | ---------------------- |
| $a$ | $a{:}1$              | 빈 계수기에 둔다       |
| $b$ | $a{:}1$, $b{:}1$     | 빈 계수기에 둔다       |
| $a$ | $a{:}2$, $b{:}1$     | 더한다                 |
| $c$ | $a{:}1$              | $a,b,c$ 세 표를 지운다 |
| $a$ | $a{:}2$              | 더한다                 |
| $b$ | $a{:}2$, $b{:}1$     | 빈 계수기에 둔다       |
| $d$ | $a{:}1$              | $a,b,d$ 세 표를 지운다 |
| $a$ | $a{:}2$              | 더한다                 |

끝에 남은 후보는 $a$ 하나이고 계수기는 $2$ 다. $a$ 의 실제 득표는 $4$ 이고, 지우기 두 번에서 $a$ 의 표가 한 장씩 지워졌다.

지우기는 매번 서로 다른 후보의 표 세 장을 없애므로, 표 여덟 장에서 지우기는 $8/3$ 번보다 많이 일어날 수 없다. 한 번의 지우기에서 $a$ 의 표는 많아야 한 장 지워진다. 그래서 세 표 이상 받은 후보의 계수기는 $3-8/3\gt 0$ 이상이고 끝까지 남는다. 계수기 수를 $k-1$ 개로 늘리면 같은 계산으로 득표가 $n/k$ 를 넘는 후보가 모두 남는다.

# 정의

## 빈도와 빈발 항목

스트림 $x\_1,\dots,x\_n$ 의 항목은 집합 $U$ 에 속한다. 항목 $a\in U$ 의 **빈도(frequency)** 는 $f(a)=\lvert\lbrace i: x\_i=a\rbrace\rvert$ 다. 정수 $k\ge 2$ 에 대해 $f(a)\gt n/k$ 인 항목을 **빈발 항목(heavy hitter)** 이라 한다.

직관 절의 스트림에서 $n=8$ 이고 $f(a)=4$, $f(b)=2$, $f(c)=f(d)=1$ 이다. $k=3$ 이면 빈발 항목은 $f(a)=4\gt 8/3$ 인 $a$ 뿐이다.

## 알고리즘

**Misra–Gries 요약(Misra–Gries summary)** 은 항목과 양의 정수의 쌍을 많아야 $k-1$ 개 담는 표 $T$ 다. 빈 표에서 시작해 항목 $x$ 가 올 때마다 다음을 한다. Misra 와 Gries 가 1982 년에 제안했다[^1].

- $x$ 가 $T$ 에 있으면 $T\lbrack x\rbrack$ 에 $1$ 을 더한다.
- $x$ 가 없고 $T$ 의 쌍이 $k-1$ 개보다 적으면 $T\lbrack x\rbrack=1$ 을 넣는다.
- $x$ 가 없고 쌍이 $k-1$ 개이면 $x$ 를 버리고 모든 쌍의 값에서 $1$ 을 빼며, $0$ 이 된 쌍을 지운다. 이 단계를 **지우기(decrement step)** 라 한다.

항목 $a$ 의 추정값 $\hat f(a)$ 는 $a$ 가 $T$ 에 있으면 $T\lbrack a\rbrack$, 없으면 $0$ 이다. 직관 절의 표에서 $k=3$ 이고 지우기가 넷째와 일곱째 표에서 일어났으며, 끝의 추정값은 $\hat f(a)=2$, $\hat f(b)=\hat f(c)=\hat f(d)=0$ 이다.

```typescript
function update(T: Map<string, number>, k: number, x: string): void {
  const c = T.get(x);
  if (c !== undefined) {
    T.set(x, c + 1);
  } else if (T.size < k - 1) {
    T.set(x, 1);
  } else {
    for (const [y, cy] of T) {
      if (cy === 1) T.delete(y);
      else T.set(y, cy - 1);
    }
  }
}

function estimate(T: Map<string, number>, a: string): number {
  return T.get(a) ?? 0;
}
```

# 성질

## 오차 한계

정리. 모든 항목 $a$ 에 대해 다음이 성립한다[^1].

$$
f(a)-\frac{n}{k}\le\hat f(a)\le f(a)
$$

증명의 요지. $\hat f(a)$ 는 $a$ 가 올 때만 늘어나므로 $f(a)$ 이하다. $\hat f(a)$ 가 $f(a)$ 보다 작아지는 것은 $a$ 가 버려지거나 $T\lbrack a\rbrack$ 에서 $1$ 이 빠질 때뿐이고, 둘 다 지우기에서 일어나며 한 번의 지우기에서 많아야 $1$ 이다. 지우기 한 번은 버린 항목 하나와 $T$ 의 쌍 $k-1$ 개에서 하나씩, 서로 다른 항목의 출현 $k$ 개를 없앤다. 없앤 출현의 수는 $n$ 이하이므로 지우기 횟수를 $D$ 라 하면 $kD\le n$ 이고 $f(a)-\hat f(a)\le D\le n/k$ 다.

따름정리. $f(a)\gt n/k$ 이면 $\hat f(a)\ge f(a)-n/k\gt 0$ 이므로 빈발 항목은 모두 끝에 $T$ 에 남는다.

남은 쌍 가운데는 빈발 항목이 아닌 것도 있다. 스트림을 한 번 더 읽어 남은 항목 많아야 $k-1$ 개의 빈도를 정확히 세면 빈발 항목만 고를 수 있다.

## 공간과 갱신 시간

$T$ 는 쌍을 많아야 $k-1$ 개 담으므로 공간은 항목 $k-1$ 개와 $O(\log n)$ 비트 계수기 $k-1$ 개다. $\lvert U\rvert$ 와 서로 다른 항목의 수에는 의존하지 않는다. $k=1/\varepsilon$ 으로 두면 계수기 $O(1/\varepsilon)$ 개로 오차가 $\varepsilon n$ 이하다.

지우기 한 번은 $k-1$ 개의 계수기를 고치므로 그 갱신 하나의 비용은 $k$ 에 비례한다. [분할상환 분석](amortized-analysis.md)의 회계 방법으로 보면 항목이 $T$ 에 $1$ 을 더할 때마다 적립금 $1$ 을 그 계수기에 두고, 지우기에서 계수기 하나를 $1$ 줄이는 비용을 그 계수기의 적립금으로 치른다. 계수기의 값이 곧 적립금이므로 적립금은 음수가 되지 않는다. $T$ 를 [해시 테이블](hash-tables.md)로 두면 갱신 하나의 분할상환 비용은 상수다.

## 합치기

같은 $k$ 로 두 스트림에서 만든 요약 $T\_1,T\_2$ 를 합친다. 항목마다 두 값을 더한 표를 만들고, 그 표의 값 가운데 $k$ 번째로 큰 값 $c\_k$ 를 모든 값에서 뺀 뒤 양수인 쌍만 남긴다. 쌍이 $k-1$ 개보다 적으면 $c\_k=0$ 으로 둔다. Agarwal 등은 이 표가 두 스트림을 이어 붙인 길이 $n\_1+n\_2$ 의 스트림에 대해 오차 한계 정리를 그대로 만족함을 증명했다[^2]. 그래서 여러 서버가 따로 만든 요약을 합쳐 전체의 빈발 항목을 찾는다.

## 다수결 알고리즘

$k=2$ 이면 계수기가 하나이고, 빈발 항목은 과반을 얻은 항목이다. 이 경우는 Boyer–Moore 다수결 알고리즘(Boyer–Moore majority vote algorithm)이다. 계수기 하나로 과반 항목이 있으면 그것을 남기고, 두 번째 읽기로 정말 과반인지 확인한다.

## Space-Saving

Space-Saving 알고리즘(Space-Saving algorithm)은 계수기 $m$ 개가 다 찼을 때 새 항목을 버리는 대신, 값이 가장 작은 쌍의 항목을 새 항목으로 바꾸고 그 값에 $1$ 을 더한다[^3]. 추정값은 참값 이상이고 초과분은 $n/m$ 이하다. 오차의 방향이 Misra–Gries 와 반대이고, 두 요약은 서로의 값으로 바꿔 계산된다[^2].

## Count-Min 스케치와의 비교

[Count-Min 스케치](count-min-sketch.md)도 같은 문제를 계수기 $O(\varepsilon^{-1}\log(1/\delta))$ 개로 풀지만 해시 함수를 무작위로 고르고 확률 $\delta$ 로 실패한다. Misra–Gries 요약은 결정적이고 계수기가 $1/\varepsilon$ 개로 더 적다. 항목을 지우는 갱신이 있는 스트림에서는 Count-Min 스케치만 쓸 수 있다. Misra–Gries 요약은 버린 출현을 기록하지 않으므로 나중에 온 삭제를 반영하지 못한다.

# 활용

- 네트워크 감시. 라우터가 흐름마다 패킷 수를 세어 트래픽의 큰 몫을 차지하는 출처를 고정된 메모리로 찾는다.
- 검색어와 상품 순위. 검색어나 조회된 상품 가운데 상위 항목을 전체 사전 없이 뽑는다.
- 데이터베이스. 값의 빈도가 문턱을 넘는 그룹만 내놓는 질의를 한 번의 읽기로 후보를 좁히고 두 번째 읽기로 확정한다.
- 분산 집계. 합치기 성질로 서버마다 만든 요약을 나무 꼴로 합쳐 전체 스트림의 요약을 얻는다.

[^1]: J. Misra, D. Gries, "Finding repeated elements", Science of Computer Programming 2 (1982), 143–152.
[^2]: P. K. Agarwal, G. Cormode, Z. Huang, J. M. Phillips, Z. Wei, K. Yi, "Mergeable summaries", ACM Transactions on Database Systems 38 (2013), Article 26.
[^3]: A. Metwally, D. Agrawal, A. El Abbadi, "Efficient computation of frequent and top-k elements in data streams", International Conference on Database Theory (ICDT) 2005, Lecture Notes in Computer Science 3363, 398–412.

# 연관 문서

## 선수지식

- [분할상환 분석](amortized-analysis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms
