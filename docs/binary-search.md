# 이진 탐색

# 개요

**이진 탐색(binary search)** 은 정렬된 배열에서 찾는 값과 가운데 원소를 비교해 남은 범위를 절반으로 줄이기를 되풀이하는 탐색 알고리즘이다. 원소가 $n$ 개이면 비교 $\lfloor\log_2 n\rfloor+1$ 번 안에 끝나고, 비교만 쓰는 탐색 가운데 최악의 비교 횟수가 가장 적다.

정렬된 배열은 [비교 정렬](comparison-sorting.md)로 만들고, 최적성의 증명은 비교 정렬의 하한과 같은 결정 트리 논증이다.

# 직관

$1$ 부터 $100$ 까지의 수 가운데 상대가 정한 수를 "그보다 큰가" 라는 질문으로 맞힌다. $1$ 부터 차례로 물으면 최악의 경우 $99$ 번을 묻는다. $50$ 보다 큰지 물으면 답이 어느 쪽이든 후보가 $50$ 개로 줄고, 다음에 남은 범위의 가운데를 물으면 $25$ 개로 준다.

후보가 매번 절반 이하가 되므로 $100,50,25,13,7,4,2,1$ 로 줄어 일곱 번이면 하나가 남는다. $2^7=128\ge 100$ 이므로 일곱 번이면 충분하고, $2^6=64\lt 100$ 이므로 질문의 답이 두 갈래인 이상 여섯 번으로는 모든 수를 가를 수 없다.

# 정의

## 이진 탐색

$a_0\le a_1\le\cdots\le a_{n-1}$ 과 값 $x$ 가 주어졌을 때 $a_i\ge x$ 인 가장 작은 $i$ 를 찾는다. 그런 $i$ 가 없으면 $n$ 을 답한다. 범위 $\lbrack lo,hi)$ 를 $\lbrack 0,n)$ 에서 시작해, $mid=\lfloor(lo+hi)/2\rfloor$ 에서 $a_{mid}\lt x$ 이면 $lo=mid+1$, 아니면 $hi=mid$ 로 두기를 $lo=hi$ 가 될 때까지 되풀이한다. 답은 $lo$ 다.

```typescript
function lowerBound(a: number[], x: number): number {
  let lo = 0;
  let hi = a.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
```

## 단조 술어의 이분법

같은 절차는 배열이 아니어도 된다. 정수 위의 술어 $p$ 가 단조, 곧 $p(i)$ 가 참이면 $p(i+1)$ 도 참이고 $p(lo)$ 는 거짓, $p(hi)$ 는 참이면, 위 절차는 $p$ 가 참이 되는 첫 정수를 $\lceil\log_2(hi-lo)\rceil$ 번의 평가로 찾는다. 정렬된 배열의 경우는 $p(i)$ 가 "$a_i\ge x$" 인 경우다.

# 성질

## 정확성

정리. 반복마다 다음 불변식이 성립하고, 반복은 끝나며, 끝났을 때 $lo$ 가 답이다.

$$
a_i\lt x\quad (i\lt lo),\qquad a_i\ge x\quad (i\ge hi)
$$

증명의 요지. 처음에는 두 조건 모두 해당하는 $i$ 가 없다. $a_{mid}\lt x$ 이면 정렬되어 있으므로 $i\le mid$ 인 모든 $i$ 에서 $a_i\lt x$ 이고, 아니면 $i\ge mid$ 인 모든 $i$ 에서 $a_i\ge x$ 이다. $lo\le mid\lt hi$ 이므로 $hi-lo$ 는 반복마다 줄고, $lo=hi$ 에서 두 조건이 $a_i\ge x$ 인 첫 자리가 $lo$ 임을 준다.

## 비교 횟수와 최적성

정리. 이진 탐색은 비교를 $\lceil\log_2(n+1)\rceil$ 번 이하로 하고, 비교만 쓰는 어떤 탐색도 최악의 경우 이만큼 비교한다[^1].

증명의 요지. 범위의 길이 $m$ 은 한 번의 비교 뒤 $\lfloor m/2\rfloor$ 이하가 되므로 $\lceil\log_2(n+1)\rceil$ 번 뒤에 $0$ 이 된다. 답은 $0,\dots,n$ 의 $n+1$ 가지이고, 비교 한 번은 답의 후보를 두 무리로 나눌 뿐이므로 $k$ 번의 비교로 가를 수 있는 답은 $2^k$ 가지 이하다. 그래서 $2^k\ge n+1$ 이다.

## 지수 탐색

답의 자리 $i$ 가 배열 앞쪽에 있으면 $a_1,a_2,a_4,a_8,\dots$ 을 차례로 비교해 $a_{2^j}\ge x$ 인 첫 $j$ 를 찾고, 범위 $\lbrack 2^{j-1},2^j\rbrack$ 에서 이진 탐색을 한다. 비교는 $O(\log i)$ 번이고 배열의 길이를 몰라도 된다. Bentley 와 Yao 가 1976 년에 제안했다[^2].

# 활용

- 정렬된 자료의 질의. [접미사 배열](suffix-arrays.md)에서 패턴으로 시작하는 접미사의 구간 양 끝을 이진 탐색으로 찾는다.
- 답의 이분법. 최적값 $t$ 를 직접 구하기 어렵지만 "답이 $t$ 이하인가" 를 판정할 수 있으면, 판정이 단조이므로 $t$ 에 대해 이분법을 쓴다. 정수 계수 문제에서는 판정을 $O(\log T)$ 번 부르고, 실수 문제에서는 중간값 정리(intermediate value theorem)의 이분법처럼 구간을 반씩 줄인다.
- 정보량. 같은 확률의 후보 $N$ 개 가운데 하나를 가리키는 데는 예·아니오 질문이 $\log_2 N$ 번 필요하고, 이 값이 균등 분포의 [Shannon 엔트로피](entropy.md)다.

[^1]: D. E. Knuth, *The Art of Computer Programming, Vol. 3: Sorting and Searching*, 2nd ed., Addison-Wesley, 1998, §6.2.1.
[^2]: J. L. Bentley, A. C.-C. Yao, "An almost optimal algorithm for unbounded searching", Information Processing Letters 5 (1976), 82–87.

# 연관 문서

## 선수지식

- [비교 정렬](comparison-sorting.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #data_structures
