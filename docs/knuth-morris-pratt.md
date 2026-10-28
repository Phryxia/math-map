# Knuth–Morris–Pratt 알고리즘

# 개요

**Knuth–Morris–Pratt 알고리즘(Knuth–Morris–Pratt algorithm)** 은 긴 본문에서 짧은 패턴이 나타나는 자리를, 본문에서 이미 읽은 글자로 돌아가지 않고 모두 찾는 알고리즘이다. 패턴 $\mathtt{ababc}$ 를 본문 $\mathtt{abababc}$ 에서 찾으면 첫 자리에서 $\mathtt{abab}$ 까지 맞다가 어긋나는데, 패턴을 한 칸 밀어 처음부터 다시 비교하면 읽은 글자를 또 읽어 비교가 최악 $nm$ 번에 이른다. 이 알고리즘은 맞은 부분 $\mathtt{abab}$ 의 끝이 패턴의 앞부분 $\mathtt{ab}$ 와 같다는 정보를 패턴에서 미리 계산해 두고, 어긋나면 본문은 그대로 둔 채 패턴만 그만큼 옮겨 비교를 $O(n+m)$ 번으로 줄인다.

# 직관

Knuth–Morris–Pratt 알고리즘은 길이 $m$ 인 패턴 $P$ 가 길이 $n$ 인 본문 $T$ 에 나타나는 자리를 모두 $O(n+m)$ 시간에 찾는 문자열 검색 알고리즘이다. 패턴에서 실패 함수(failure function)를 미리 계산해 두어, 글자가 어긋나도 본문의 읽은 자리로 되돌아가지 않는다. Knuth, Morris, Pratt 가 1977 년에 발표했다[^1].

실패 함수는 언어 $\Sigma^\ast P$ 를 받는 [유한 오토마타](finite-automata.md)의 전이를 상태 $m+1$ 개와 함숫값 $m$ 개로 나타낸 것이다.

패턴 $P=\mathtt{ababc}$ 를 본문 $T=\mathtt{abababc}$ 에서 찾는다. 첫 자리에 맞대면 $\mathtt{abab}$ 까지 맞고 다섯째 글자에서 $T$ 의 $\mathtt a$ 와 $P$ 의 $\mathtt c$ 가 어긋난다. 패턴을 한 칸씩 밀며 처음부터 다시 비교하면, 이미 읽은 본문 글자를 다시 읽어서 최악의 경우 비교가 $nm$ 번 가까이 든다.

어긋나기 직전에 본문의 마지막 네 글자가 $\mathtt{abab}$ 라는 것은 이미 안다. 패턴의 앞부분이 이 네 글자의 끝부분과 맞아야 다음 후보가 되고, 그런 앞부분 가운데 가장 긴 것은 $\mathtt{ab}$ 다. 그래서 패턴을 두 칸 밀어 $\mathtt{ab}$ 를 본문의 셋째와 넷째 글자에 맞추고, 어긋났던 본문 글자를 $P$ 의 셋째 글자 $\mathtt a$ 와 비교한다. 이번에는 맞고 $\mathtt{ababc}$ 가 끝까지 맞는다. 본문의 글자는 한 번도 다시 읽지 않았다.

# 정의

## 경계

문자열 $w$ 의 **경계(border)** 는 $w$ 의 접두사이면서 접미사이고 $w$ 자신이 아닌 문자열이다. 빈 문자열은 모든 $w$ 의 경계다. $\mathtt{abab}$ 의 경계는 빈 문자열과 $\mathtt{ab}$ 다.

## 실패 함수

패턴 $P=p_1p_2\cdots p_m$ 의 길이 $q$ 접두사를 $P_q$ 라 한다. **실패 함수(failure function)** $\pi:\lbrace 1,\dots,m\rbrace\to\lbrace 0,\dots,m-1\rbrace$ 는 $\pi(q)$ 를 $P_q$ 의 가장 긴 경계의 길이로 둔다. $P=\mathtt{ababc}$ 이면 $\pi(1),\dots,\pi(5)$ 는 $0,0,1,2,0$ 이다.

## 검색

본문을 왼쪽부터 한 글자씩 읽으며, 지금까지 읽은 본문의 접미사 가운데 $P$ 의 접두사인 가장 긴 것의 길이 $q$ 를 유지한다. 다음 글자가 $p_{q+1}$ 과 다르면 $q$ 를 $\pi(q)$ 로 줄이기를 맞을 때까지 또는 $q=0$ 이 될 때까지 되풀이한다. $q=m$ 이 되면 $P$ 가 나타난 것이고, $q$ 를 $\pi(m)$ 으로 줄여 계속한다.

```typescript
function failure(p: string): number[] {
  // pi[q] 는 길이 q 접두사의 가장 긴 경계의 길이, pi[0] 은 쓰지 않는다
  const m = p.length;
  const pi = new Array<number>(m + 1).fill(0);
  let k = 0;
  for (let q = 2; q <= m; q++) {
    while (k > 0 && p[k] !== p[q - 1]) k = pi[k];
    if (p[k] === p[q - 1]) k++;
    pi[q] = k;
  }
  return pi;
}

function search(t: string, p: string): number[] {
  const pi = failure(p);
  const found: number[] = [];
  let q = 0;
  for (let i = 0; i < t.length; i++) {
    while (q > 0 && p[q] !== t[i]) q = pi[q];
    if (p[q] === t[i]) q++;
    if (q === p.length) {
      found.push(i - p.length + 1);
      q = pi[q];
    }
  }
  return found;
}
```

# 성질

## 경계의 사슬

정리. $P_q$ 의 경계의 길이는 정확히 $\pi(q),\pi(\pi(q)),\pi(\pi(\pi(q))),\dots$ 이고 마지막은 $0$ 이다[^1].

증명의 요지. $u$ 가 $w$ 의 경계이고 $v$ 가 $w$ 의 경계이며 $v$ 가 $u$ 보다 짧으면, $v$ 는 $w$ 의 접두사 $u$ 의 접두사이고 $w$ 의 접미사 $u$ 의 접미사이므로 $u$ 의 경계다. 그래서 $P_q$ 의 경계 가운데 $\pi(q)$ 보다 짧은 것은 모두 $P_{\pi(q)}$ 의 경계이고, 귀납법으로 사슬이 모든 경계를 지난다.

검색에서 어긋날 때 $q$ 를 $\pi(q)$ 로 줄이는 것은 이 사슬을 긴 쪽부터 따라가며 다음 글자로 늘릴 수 있는 경계를 찾는 것이다. 그래서 건너뛴 자리에서는 패턴이 나타날 수 없다.

## 선형 시간

정리. 검색은 글자 비교를 $2n$ 번 이하로 하고, 실패 함수의 계산은 $2m$ 번 이하로 한다[^1].

증명의 요지. 검색의 비교마다 본문의 자리 $i$ 가 하나 늘거나 $q$ 가 $1$ 이상 준다. $q$ 는 $i$ 가 늘 때만 $1$ 씩 늘고 음수가 되지 않으므로 줄어든 총량은 $n$ 이하다. 그래서 비교는 $n+n$ 번 이하다. 퍼텐셜을 $q$ 로 둔 [분할상환 분석](amortized-analysis.md)이다. 실패 함수의 계산은 $P$ 를 자기 자신에서 검색하는 것과 같은 계산이다.

## 주기

$P$ 의 **주기(period)** 는 모든 $i\le m-r$ 에서 $p_i=p_{i+r}$ 인 양의 정수 $r$ 이다. $r$ 이 주기인 것과 $P$ 에 길이 $m-r$ 인 경계가 있는 것은 동치이므로, 가장 짧은 주기는 $m-\pi(m)$ 이다. $\mathtt{abcabcab}$ 는 $\pi(8)=5$ 이고 가장 짧은 주기가 $3$ 이다.

## 문자열 검색 오토마타

$\Sigma^\ast P$ 를 받는 결정적 유한 오토마타를 상태 $0,\dots,m$ 과 다음 전이로 만든다. 상태 $m$ 만 받아들인다.

$$
\delta(q,a)=\begin{cases}q+1 & q\lt m,\ a=p_{q+1}\cr \delta(\pi(q),a) & q\ge 1,\ \text{그 밖}\cr 0 & q=0,\ a\ne p_1\end{cases}
$$

상태 $q$ 는 지금까지 읽은 문자열의 접미사 가운데 $P$ 의 접두사인 가장 긴 것의 길이이고, 이 오토마타는 상태가 가장 적다. $q\lt q'$ 이면 길이 $m-q'$ 인 문자열 $p_{q'+1}\cdots p_m$ 이 $q'$ 에서는 받아들여지고 $q$ 에서는 길이가 모자라 받아들여지지 않으므로, 유한 오토마타의 Myhill–Nerode 정리로 상태를 합칠 수 없다. 표 전체는 $(m+1)\lvert\Sigma\rvert$ 칸이고, 실패 함수는 같은 전이를 $m$ 개의 값으로 적는다.

# 활용

- 여러 패턴의 검색. [Aho–Corasick 알고리즘](aho-corasick.md)은 패턴들의 [트라이](tries.md)를 만들고 마디마다 실패 함수를 두어, 패턴 전체의 길이와 본문의 길이와 나타난 횟수의 합에 비례하는 시간에 모든 패턴을 찾는다[^2].
- 문자열의 주기와 반복. 가장 짧은 주기 $m-\pi(m)$ 으로 문자열이 더 짧은 문자열의 거듭인지 판정한다. $m$ 이 $m-\pi(m)$ 의 배수이면 $P$ 는 길이 $m-\pi(m)$ 인 접두사의 거듭이다.
- 와일드카드가 있는 검색. 아무 글자와도 맞는 기호가 패턴에 있으면 경계의 사슬이 성립하지 않는다. 이때는 [고속 Fourier 변환](fft.md)으로 합성곱을 계산해 $O(n\log m)$ 시간에 찾는다.

[^1]: D. E. Knuth, J. H. Morris, V. R. Pratt, "Fast pattern matching in strings", SIAM Journal on Computing 6 (1977), 323–350.
[^2]: A. V. Aho, M. J. Corasick, "Efficient string matching: an aid to bibliographic search", Communications of the ACM 18 (1975), 333–340.

# 연관 문서

## 선수지식

- [유한 오토마타](finite-automata.md)

## 더 알아보기

- [Aho–Corasick 알고리즘](aho-corasick.md)

#algorithms #computation
