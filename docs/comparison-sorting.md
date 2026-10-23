# 비교 정렬

# 개요

**비교 정렬(comparison sort)** 은 두 원소를 비교한 결과만 써서 $n$ 개의 원소를 작은 것부터 늘어놓는 알고리즘이다. 어떤 비교 정렬도 최악의 경우 $\lceil\log_2 n!\rceil$ 번 이상 비교하고, 병합 정렬(merge sort)은 $n\lceil\log_2 n\rceil$ 번 이하로 정렬하므로 두 값은 $\Theta(n\log n)$ 으로 차수가 같다.

원소 사이의 순서는 [부분순서](partial-orders.md) 가운데 모든 쌍이 비교 가능한 전순서다. 무작위 quicksort 의 비교 횟수는 [유한 확률 공간](probability.md)의 기댓값으로 계산한다.

# 직관

카드 세 장 $a, b, c$ 를 작은 것부터 놓으려 한다. 가능한 순서는 $3!=6$ 가지다. 비교 한 번은 답이 "예" 와 "아니오" 둘뿐이므로 남은 순서들을 두 무리로 나눌 뿐이다. 두 번 비교하면 많아야 $4$ 무리로 나뉘고, $6$ 가지를 다 가르지 못한다. 그래서 어떤 순서로 비교하든 세 번 비교해야 하는 배치가 있다.

같은 계산을 $n$ 장에 하면 $k$ 번의 비교로 가를 수 있는 배치는 많아야 $2^k$ 가지이고, 갈라야 할 배치는 $n!$ 가지다. 그러므로 $2^k\ge n!$, 곧 $k\ge\log_2 n!$ 이다.

이만큼만 비교하는 방법도 있다. 카드를 반으로 나눠 각각 정렬한 뒤, 두 더미의 맨 위 카드끼리 비교해 작은 것을 하나씩 꺼내면 합치는 데 비교가 $n-1$ 번 이하다. 반으로 나누기를 $\log_2 n$ 번 되풀이하면 단계마다 비교가 $n$ 번 이하이므로 전체가 $n\log_2 n$ 번 근처다.

# 정의

## 비교 모형

입력은 전순서 집합의 원소 $a_1,\dots,a_n$ 이다. 알고리즘은 원소의 값을 읽지 않고 "$a_i\lt a_j$ 인가" 라는 질문의 답만 쓴다. 출력은 $a_{\pi(1)}\le a_{\pi(2)}\le\cdots\le a_{\pi(n)}$ 이 되게 하는 순열 $\pi$ 이고, 비용은 비교 횟수다.

## 결정 트리

$n$ 을 고정하면 비교 정렬 알고리즘 하나는 **결정 트리(decision tree)** 하나로 나타난다. 결정 트리는 이진 트리이고, 내부 마디마다 비교할 쌍 $(i,j)$ 가 붙어 있고, 두 자식은 그 비교의 두 답에 대응하고, 잎마다 출력 순열이 붙어 있다. 입력 하나에 대한 실행은 뿌리에서 잎까지의 경로이고, 최악의 비교 횟수는 트리의 높이다.

## 병합 정렬

**병합 정렬(merge sort)** 은 목록을 반으로 나눠 각각 재귀로 정렬하고 두 정렬된 목록을 합친다. 합치기는 두 목록의 맨 앞 원소를 비교해 작은 것을 꺼내기를 되풀이한다.

```typescript
function mergeSort(a: number[]): number[] {
  if (a.length <= 1) return a;
  const mid = Math.floor(a.length / 2);
  const left = mergeSort(a.slice(0, mid));
  const right = mergeSort(a.slice(mid));
  const out: number[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (right[j] < left[i]) out.push(right[j++]);
    else out.push(left[i++]);
  }
  return out.concat(left.slice(i), right.slice(j));
}
```

## 무작위 quicksort

**무작위 quicksort(randomized quicksort)** 는 원소 하나를 균등한 확률로 골라 기준(pivot)으로 삼고, 나머지 원소를 기준과 한 번씩 비교해 기준보다 작은 것과 큰 것으로 가른 뒤 두 무리를 재귀로 정렬한다. Hoare 가 1962 년에 제안했다[^2].

```typescript
function quicksort(a: number[]): number[] {
  if (a.length <= 1) return a;
  const p = a[Math.floor(Math.random() * a.length)];
  const less = a.filter((x) => x < p);
  const equal = a.filter((x) => x === p);
  const greater = a.filter((x) => x > p);
  return quicksort(less).concat(equal, quicksort(greater));
}
```

# 성질

## 최악의 비교 횟수의 하한

정리. 서로 다른 원소 $n$ 개를 정렬하는 비교 정렬은 최악의 경우 $\lceil\log_2 n!\rceil$ 번 이상 비교한다[^1].

증명의 요지. 입력의 배치 $n!$ 가지는 출력 순열이 모두 다르므로 결정 트리의 잎은 $n!$ 개 이상이다. 높이 $h$ 인 이진 트리의 잎은 $2^h$ 개 이하이므로 $h\ge\log_2 n!$ 이다.

$n!$ 의 곱에서 $n/2$ 이상인 인수 $\lceil n/2\rceil$ 개만 남기면 $n!\ge(n/2)^{n/2}$ 이므로 하한은 $\frac n2\log_2\frac n2$ 이상이고, $n!\le n^n$ 이므로 $\log_2 n!\le n\log_2 n$ 이다. 하한은 $\Theta(n\log n)$ 이다.

## 평균 비교 횟수의 하한

정리. 입력의 배치가 $n!$ 가지 가운데 균등한 확률로 주어지면, 비교 정렬의 비교 횟수의 기댓값은 $\log_2 n!$ 이상이다[^1].

증명의 요지. 이진 트리의 잎의 깊이를 $d_1,\dots,d_N$ 이라 하면 Kraft 부등식(Kraft inequality) $\sum_{\ell}2^{-d_\ell}\le 1$ 이 성립한다. 뿌리에서 무게 $1$ 을 두 자식에 반씩 나눠 내려보내면 잎 $\ell$ 에 무게 $2^{-d_\ell}$ 이 도착하고, 잎에 도착한 무게의 합은 $1$ 이하다. 산술평균이 기하평균 이상이므로 평균 깊이 $\bar d$ 에 대해 $2^{-\bar d}\le\frac1N\sum_{\ell}2^{-d_\ell}\le\frac1N$ 이고, $N\ge n!$ 이므로 $\bar d\ge\log_2 n!$ 이다.

## 병합 정렬의 상한

정리. 병합 정렬의 비교 횟수 $C(n)$ 은 $n\lceil\log_2 n\rceil$ 이하다[^1].

증명의 요지. 합치기는 꺼낼 때마다 비교를 많아야 한 번 하고 마지막 원소는 비교 없이 꺼내므로 다음이 성립한다.

$$
C(1)=0,\qquad C(n)\le C(\lceil n/2\rceil)+C(\lfloor n/2\rfloor)+n-1
$$

재귀의 깊이는 $\lceil\log_2 n\rceil$ 이고, 같은 깊이의 부분 목록들은 서로 겹치지 않으므로 한 깊이에서 하는 비교는 모두 합쳐 $n$ 번 이하다.

## 무작위 quicksort 의 기대 비교 횟수

정리. 서로 다른 원소 $n$ 개에 대해 무작위 quicksort 의 비교 횟수의 기댓값은 입력에 관계없이 다음과 같다[^1].

$$
2(n+1)H_n-4n=2n\ln n+O(n),\qquad H_n=\sum_{k=1}^{n}\frac1k
$$

증명의 요지. 원소를 정렬된 순서로 $z_1\lt z_2\lt\cdots\lt z_n$ 이라 한다. 두 원소는 한쪽이 기준일 때만 비교되고, 비교된 뒤에는 서로 다른 무리로 갈리거나 기준이 빠지므로 다시 비교되지 않는다. $i\lt j$ 일 때 $z_i$ 와 $z_j$ 는 $z_i,\dots,z_j$ 가 처음 갈리기 전까지 한 무리에 있고, 이 $j-i+1$ 개 가운데 처음 기준으로 뽑힌 것이 $z_i$ 나 $z_j$ 일 때만 비교된다. 그 확률은 $2/(j-i+1)$ 이다. 쌍마다 비교되면 $1$, 아니면 $0$ 인 확률변수를 더한 것이 비교 횟수이므로 기댓값의 선형성으로 다음이 나온다.

$$
\sum_{1\le i\lt j\le n}\frac{2}{j-i+1}=\sum_{k=2}^{n}(n-k+1)\frac2k=2(n+1)H_n-4n
$$

$2n\ln n\approx 1.39\thinspace n\log_2 n$ 이므로 기댓값은 하한 $\log_2 n!\approx n\log_2 n$ 의 약 $1.39$ 배다. 기준이 매번 가장 작은 원소로 뽑히면 비교가 $n(n-1)/2$ 번이고, 이것이 최악의 경우다.

## 비교 모형 밖의 정렬

하한은 비교의 답만 쓰는 알고리즘에 대한 것이다. 키가 $0$ 이상 $k$ 미만의 정수이면 키마다 개수를 세어 두고 차례로 적는 계수 정렬(counting sort)이 비교 없이 $O(n+k)$ 시간에 정렬한다. 키의 값을 배열의 위치로 쓰므로 결정 트리로 나타나지 않는다.

# 활용

- [이진 힙](binary-heaps.md)의 힙 정렬은 추가 메모리 없이 $O(n\log n)$ 번 비교해 정렬하므로 최악의 비교 횟수가 하한과 차수가 같다.
- 비교 기반 자료구조의 하한. [균형 이진 탐색 트리](balanced-binary-search-trees.md)에 $n$ 개를 넣은 뒤 차례로 읽으면 정렬이 되므로, 비교 기반 탐색 트리의 삽입은 한 번에 평균 $\Omega(\log n)$ 번 비교한다. 같은 이유로 비교 기반 우선순위 큐는 삽입과 최솟값 삭제를 둘 다 $o(\log n)$ 에 하지 못한다. [Fibonacci 힙](fibonacci-heaps.md)은 삽입을 상수 시간에 하고 최솟값 삭제에 $O(\log n)$ 을 쓴다.

[^1]: D. E. Knuth, *The Art of Computer Programming, Vol. 3: Sorting and Searching*, 2nd ed., Addison-Wesley, 1998, §5.2.2, §5.2.4, §5.3.1.
[^2]: C. A. R. Hoare, "Quicksort", The Computer Journal 5 (1962), 10–16.

# 연관 문서

## 선수지식

- [부분순서](partial-orders.md)
- [유한 확률 공간](probability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #data_structures #order_theory #probability
