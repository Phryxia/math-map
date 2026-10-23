# 선택 알고리즘

# 개요

**선택 알고리즘(selection algorithm)** 은 $n$ 개의 원소 가운데 $k$ 번째로 작은 원소를 찾는 알고리즘이다. [비교 정렬](comparison-sorting.md)로 전부 정렬하면 비교가 $\Theta(n\log n)$ 번 들지만, 원소 하나만 찾을 때는 비교 $O(n)$ 번으로 충분하다. 무작위 quickselect 는 기댓값으로, 중앙값의 중앙값(median of medians) 알고리즘은 최악의 경우에도 선형 시간에 찾는다.

# 직관

원소 $n$ 개의 중앙값을 찾으려 한다. 무작위 quicksort 처럼 기준을 하나 골라 나머지를 기준보다 작은 것과 큰 것으로 가르면, 작은 쪽의 개수를 보고 중앙값이 어느 쪽에 있는지 안다. 정렬이라면 두 쪽을 다 재귀로 정렬해야 하지만, 중앙값을 찾을 때는 중앙값이 든 한쪽만 계속 보면 된다.

기준이 가운데 근처에 떨어지면 남은 원소가 매번 일정한 비율로 줄어든다. 남은 개수가 $n, \frac34 n, (\frac34)^2 n,\dots$ 로 줄면 가르기에 드는 비교의 합은 $n\sum_{j\ge 0}(\frac34)^j=4n$ 이다. 정렬이 $\log_2 n$ 단계마다 $n$ 번씩 비교하는 것과 달리, 단계마다 비교 수가 줄어드는 등비급수가 되어 합이 $n$ 의 상수배에 머문다.

# 정의

## 선택 문제

입력은 전순서 집합의 원소 $a_1,\dots,a_n$ 과 정수 $1\le k\le n$ 이다. 출력은 정렬했을 때 $k$ 번째 자리에 오는 원소이고, 이를 $k$ 번째 순서 통계량(order statistic)이라 한다. $k=1$ 이면 최솟값, $k=\lceil n/2\rceil$ 이면 중앙값이다. 계산 모형은 비교 정렬과 같은 비교 모형이다.

## 무작위 quickselect

**무작위 quickselect(randomized quickselect)** 는 기준을 균등한 확률로 골라 나머지를 기준과 비교해 가른 뒤, $k$ 번째 원소가 든 쪽에서만 재귀한다. Hoare 가 quicksort 와 함께 제안했다[^2].

```typescript
function quickselect(a: number[], k: number): number {
  // k 는 1 부터 센다
  const p = a[Math.floor(Math.random() * a.length)];
  const less = a.filter((x) => x < p);
  const equal = a.filter((x) => x === p);
  if (k <= less.length) return quickselect(less, k);
  if (k <= less.length + equal.length) return p;
  const greater = a.filter((x) => x > p);
  return quickselect(greater, k - less.length - equal.length);
}
```

## 중앙값의 중앙값

**중앙값의 중앙값(median of medians)** 알고리즘은 기준을 무작위로 고르는 대신 다음과 같이 정한다. Blum, Floyd, Pratt, Rivest, Tarjan 이 1973 년에 제안했다[^3].

1. 원소를 $5$ 개씩 $\lceil n/5\rceil$ 개의 무리로 나누고 무리마다 중앙값을 구한다.
2. 그 중앙값들의 중앙값 $x$ 를 이 알고리즘으로 재귀해 구한다.
3. $x$ 를 기준으로 나머지를 가르고, $k$ 번째 원소가 든 쪽에서 재귀한다.

# 성질

## 최솟값의 비교 횟수

정리. 최솟값을 찾는 비교 알고리즘은 최악의 경우 비교를 $n-1$ 번 이상 하고, 차례로 비교하며 지금까지의 최솟값을 들고 가면 정확히 $n-1$ 번으로 찾는다.

증명의 요지. 최솟값이 아닌 원소마다, 그 원소가 더 큰 쪽으로 나온 비교가 적어도 한 번 있어야 한다. 그런 비교가 없는 원소가 둘 남으면 어느 쪽이 최솟값인지 가를 수 없다. 비교 한 번은 더 큰 쪽을 하나만 내므로 비교가 $n-1$ 번 이상 필요하다.

## 무작위 quickselect 의 기대 비교 횟수

정리. 서로 다른 원소 $n$ 개에 대해 무작위 quickselect 의 비교 횟수의 기댓값은 모든 $k$ 에서 $2(1+\ln 2)n+o(n)\approx 3.39\thinspace n$ 이하이고, $k$ 가 중앙값일 때 이 값에 이른다[^1].

증명의 요지. 원소를 정렬된 순서로 $z_1\lt\cdots\lt z_n$ 이라 한다. $i\lt j$ 일 때 $z_i$ 와 $z_j$ 는, $z_{\min(i,k)},\dots,z_{\max(j,k)}$ 가운데 처음 기준으로 뽑힌 것이 $z_i$ 나 $z_j$ 일 때만 비교된다. 그보다 먼저 그 사이의 다른 원소가 뽑히면 둘이 갈리거나 둘 다 버려진다. 그러므로 비교될 확률은 $2/(\max(j,k)-\min(i,k)+1)$ 이고, 기댓값의 선형성으로 비교 횟수의 기댓값은 다음과 같다.

$$
\sum_{1\le i\lt j\le n}\frac{2}{\max(j,k)-\min(i,k)+1}
$$

$j\le k$ 인 쌍과 $i\ge k$ 인 쌍의 합은 각각 $2k$ 와 $2(n-k)$ 이하다. $i\lt k\lt j$ 인 쌍의 합은 $2\sum_{i\lt k\lt j}1/(j-i+1)$ 이고 $k=n/2$ 일 때 가장 커서 $2n\ln 2+o(n)$ 이다.

최악의 경우는 기준이 매번 남은 원소 가운데 가장 작거나 가장 큰 것으로 뽑힐 때이고, 비교가 $n(n-1)/2$ 번이다.

## 중앙값의 중앙값의 선형 시간

정리. 중앙값의 중앙값 알고리즘은 최악의 경우 $O(n)$ 번 비교한다[^3].

증명의 요지. 무리의 중앙값 가운데 절반은 $x$ 이하이고, 그런 무리마다 원소 $3$ 개가 $x$ 이하다. 그래서 $x$ 이하인 원소가 $3n/10-6$ 개 이상이고, 같은 이유로 $x$ 이상인 원소도 그만큼 있다. 3 단계의 재귀는 원소 $7n/10+6$ 개 이하에서 일어난다. 무리마다 중앙값을 구하는 것과 가르기가 비교 $an$ 번 이하이므로 다음이 성립한다.

$$
T(n)\le T(\lceil n/5\rceil)+T(7n/10+6)+an
$$

$\frac15+\frac7{10}=\frac9{10}\lt 1$ 이므로 $T(n)\le cn$ 을 귀납법으로 가정하면 오른쪽은 $\frac9{10}cn+an+O(c)$ 이고, $c\ge 10a$ 보다 조금 크게 잡으면 큰 $n$ 에서 $cn$ 이하다.

무리의 크기를 $3$ 으로 하면 $\frac13+\frac23=1$ 이 되어 이 계산이 성립하지 않는다.

# 활용

- 최악의 경우가 $O(n\log n)$ 인 quicksort. 무작위 quicksort 의 기준을 중앙값의 중앙값 알고리즘으로 구한 중앙값으로 바꾸면 두 쪽의 크기가 매번 절반이 되어, 최악의 비교 횟수가 $O(n\log n)$ 이다.
- 분위수 계산. 표본의 중앙값과 백분위수는 정렬 없이 선택 알고리즘으로 구한다.

[^1]: D. E. Knuth, *The Art of Computer Programming, Vol. 3: Sorting and Searching*, 2nd ed., Addison-Wesley, 1998, §5.3.3.
[^2]: C. A. R. Hoare, "Algorithm 65: Find", Communications of the ACM 4 (1961), 321–322.
[^3]: M. Blum, R. W. Floyd, V. Pratt, R. L. Rivest, R. E. Tarjan, "Time bounds for selection", Journal of Computer and System Sciences 7 (1973), 448–461.

# 연관 문서

## 선수지식

- [비교 정렬](comparison-sorting.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #order_theory #probability
