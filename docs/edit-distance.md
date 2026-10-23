# 편집 거리

# 개요

**편집 거리(edit distance)** 는 문자열 $s$ 를 문자열 $t$ 로 바꾸는 데 필요한 글자 하나의 삽입, 삭제, 교체의 최소 횟수다. Levenshtein 이 1965 년에 정의해 Levenshtein 거리(Levenshtein distance)라고도 한다[^1]. 길이 $m$ 과 $n$ 인 두 문자열의 편집 거리는 [동적 계획법](dynamic-programming.md)으로 $O(mn)$ 시간에 계산된다.

편집 거리는 문자열 집합 위의 [거리 공간](metric-spaces.md)의 거리 함수다.

# 직관

$\mathtt{kitten}$ 을 $\mathtt{sitting}$ 으로 바꾼다. 첫 글자 $\mathtt k$ 를 $\mathtt s$ 로, 다섯째 글자 $\mathtt e$ 를 $\mathtt i$ 로 바꾸고 끝에 $\mathtt g$ 를 넣으면 세 번이다. 두 번으로는 안 된다는 것을 보이려면 모든 편집 순서를 따져야 하는데, 그 수는 길이에 대해 지수적으로 많다.

마지막 글자만 보면 경우가 셋으로 줄어든다. 최적의 편집에서 $s$ 의 마지막 글자는 지워지거나, $t$ 의 마지막 글자가 새로 넣어지거나, 두 마지막 글자가 서로 대응한다(같으면 그대로, 다르면 교체). 어느 경우든 남는 것은 두 문자열의 앞부분끼리의 같은 문제다. 그래서 앞부분 쌍 $(s_1\cdots s_i,\thinspace t_1\cdots t_j)$ 마다 답을 표에 적어 두고, 표를 작은 쪽부터 채운다.

# 정의

## 편집 연산과 거리

알파벳 $\Sigma$ 위의 문자열에서 글자 하나를 넣는 것, 지우는 것, 다른 글자로 바꾸는 것을 편집 연산이라 한다. $s$ 에 편집 연산을 $k$ 번 해 $t$ 가 되는 최소의 $k$ 를 $d(s,t)$ 로 쓴다.

## 점화식

$s=s_1\cdots s_m$, $t=t_1\cdots t_n$ 이라 하고 $D(i,j)=d(s_1\cdots s_i,\thinspace t_1\cdots t_j)$ 로 둔다. $D(i,0)=i$, $D(0,j)=j$ 이고, $i,j\ge 1$ 에서 다음이 성립한다.

$$
D(i,j)=\min\bigl(D(i-1,j)+1,\quad D(i,j-1)+1,\quad D(i-1,j-1)+\lbrack s_i\ne t_j\rbrack\bigr)
$$

$\lbrack s_i\ne t_j\rbrack$ 는 두 글자가 다르면 $1$, 같으면 $0$ 이다. $d(s,t)=D(m,n)$ 이다.

```typescript
function editDistance(s: string, t: string): number {
  const n = t.length;
  let prev = Array.from({ length: n + 1 }, (v, j) => j);
  for (let i = 1; i <= s.length; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      const sub = prev[j - 1] + (s[i - 1] === t[j - 1] ? 0 : 1);
      cur.push(Math.min(prev[j] + 1, cur[j - 1] + 1, sub));
    }
    prev = cur;
  }
  return prev[n];
}
```

# 성질

## 점화식의 정당성

정리. 위 점화식의 $D(m,n)$ 은 편집 거리와 같다[^2].

증명의 요지. 최소 편집 순서는 두 문자열의 정렬(alignment), 곧 $s$ 의 글자와 $t$ 의 글자를 순서를 지키며 짝짓고 짝이 없는 글자를 남긴 것으로 바꿀 수 있다. 짝이 없는 $s$ 의 글자는 삭제, 짝이 없는 $t$ 의 글자는 삽입, 다른 글자끼리의 짝은 교체이고, 비용은 이 셋의 개수다. 정렬에서 $s_m$ 과 $t_n$ 의 처지는 $s_m$ 에 짝이 없음, $t_n$ 에 짝이 없음, $s_m$ 과 $t_n$ 이 짝을 이룸의 셋 가운데 하나이고, 각각 점화식의 세 항이다.

## 거리 공리

정리. $d$ 는 문자열 집합 위의 거리 함수다.

증명의 요지. $d(s,t)=0$ 은 $s=t$ 와 동치다. 삽입과 삭제는 서로를 되돌리고 교체는 교체로 되돌리므로 $d(s,t)=d(t,s)$ 다. $s$ 를 $u$ 로 바꾸는 최소 순서 뒤에 $u$ 를 $t$ 로 바꾸는 최소 순서를 이으면 $s$ 를 $t$ 로 바꾸므로 $d(s,t)\le d(s,u)+d(u,t)$ 다.

## 최장 공통 부분수열

삽입과 삭제만 허용한 편집 거리는 $m+n-2L$ 이다. $L$ 은 $s$ 와 $t$ 의 최장 공통 부분수열(longest common subsequence)의 길이다. 정렬에서 교체가 없으면 짝은 같은 글자끼리의 짝뿐이고, 짝들이 공통 부분수열을 이루며, 나머지 $m-L$ 개와 $n-L$ 개의 글자가 삭제와 삽입이다.

## 공간과 정렬의 복원

거리만 구할 때는 표의 앞 행 하나만 있으면 되므로 $O(\min(m,n))$ 공간이다. 최적의 정렬까지 구하려면 표 전체를 두고 $D(m,n)$ 에서 거꾸로 따라가면 되지만, Hirschberg 의 분할정복은 $s$ 의 가운데 행에서 정렬이 지나는 칸을 앞뒤 두 번의 거리 계산으로 찾고 양쪽을 재귀해, $O(mn)$ 시간과 $O(m+n)$ 공간에 정렬을 복원한다[^3].

## 이차 시간의 하한

강한 지수 시간 가설(strong exponential time hypothesis)이 참이면, 어떤 $\varepsilon\gt 0$ 에 대해서도 길이 $n$ 인 두 문자열의 편집 거리를 $O(n^{2-\varepsilon})$ 시간에 계산하는 알고리즘은 없다. Backurs 와 Indyk 가 2015 년에 증명했다[^4].

# 활용

- 서열 정렬. 생물정보학의 Needleman–Wunsch 알고리즘(Needleman–Wunsch algorithm)은 같은 점화식에서 교체와 틈의 비용을 아미노산 쌍마다 다르게 둔다. 시작점과 끝점을 자유롭게 두면 국소 정렬인 Smith–Waterman 알고리즘(Smith–Waterman algorithm)이 된다.
- 철자 교정. 사전의 단어 가운데 입력과의 편집 거리가 작은 것을 후보로 낸다. 후보를 줄일 때는 편집 거리가 삼각부등식을 만족하는 것을 써서 거리 공간의 색인으로 거른다.
- 파일 비교. 두 파일의 줄을 글자로 보고 삽입과 삭제만 허용한 편집 거리를 구하면, 최장 공통 부분수열에 들지 않는 줄들이 차이로 보고된다.

[^1]: V. I. Levenshtein, "Binary codes capable of correcting deletions, insertions, and reversals", Soviet Physics Doklady 10 (1966), 707–710.
[^2]: R. A. Wagner, M. J. Fischer, "The string-to-string correction problem", Journal of the ACM 21 (1974), 168–173.
[^3]: D. S. Hirschberg, "A linear space algorithm for computing maximal common subsequences", Communications of the ACM 18 (1975), 341–343.
[^4]: A. Backurs, P. Indyk, "Edit distance cannot be computed in strongly subquadratic time (unless SETH is false)", STOC 2015, 51–58.

# 연관 문서

## 선수지식

- [동적 계획법](dynamic-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #combinatorics #computation
