# Aho–Corasick 알고리즘

# 개요

**Aho–Corasick 알고리즘(Aho–Corasick algorithm)** 은 패턴 $k$ 개 $P_1,\dots,P_k$ 가 본문 $T$ 에 나타나는 자리를 모두, 본문을 한 번 읽어 찾는 문자열 검색 알고리즘이다. 패턴 길이의 합을 $L$, 본문 길이를 $n$, 나타난 횟수를 $z$ 라 하면 고정된 알파벳에서 $O(L+n+z)$ 시간이 든다. Aho 와 Corasick 이 1975 년에 발표했다[^1].

패턴들의 [트라이](tries.md)를 만들고, 마디마다 [Knuth–Morris–Pratt 알고리즘](knuth-morris-pratt.md)의 실패 함수를 여러 패턴으로 넓힌 실패 링크를 둔다.

# 직관

패턴 $\mathtt{he}, \mathtt{she}, \mathtt{his}, \mathtt{hers}$ 를 본문 $\mathtt{ushers}$ 에서 찾는다. 패턴마다 Knuth–Morris–Pratt 알고리즘을 따로 돌리면 본문을 네 번 읽는다. 패턴이 많으면 읽는 횟수가 패턴 수만큼 늘어난다.

네 패턴의 트라이를 만들고 본문을 따라 트라이를 내려간다. $\mathtt{ush}$ 를 읽고 나면 $\mathtt{sh}$ 의 마디에 있고, 다음 글자 $\mathtt e$ 로 $\mathtt{she}$ 의 마디에 닿아 $\mathtt{she}$ 를 찾는다. $\mathtt{she}$ 의 접미사 $\mathtt{he}$ 도 패턴이므로 함께 보고한다. 다음 글자 $\mathtt r$ 은 $\mathtt{she}$ 아래에 간선이 없다. 지금까지 읽은 것의 접미사 가운데 트라이에 있는 가장 긴 것은 $\mathtt{he}$ 이므로 $\mathtt{he}$ 의 마디로 옮겨 $\mathtt r$ 과 $\mathtt s$ 를 읽고 $\mathtt{hers}$ 를 찾는다. 본문의 글자는 한 번씩만 읽는다.

# 정의

## 실패 링크

패턴 집합의 트라이에서 마디 $v$ 가 나타내는 문자열을 $w(v)$ 라 한다. 뿌리가 아닌 마디 $v$ 의 **실패 링크(failure link)** $f(v)$ 는, $w(v)$ 의 접미사이면서 $w(v)$ 자신이 아니고 트라이의 어떤 마디가 나타내는 문자열 가운데 가장 긴 것의 마디다. 뿌리의 자식은 $f(v)$ 가 뿌리다.

$v$ 에서 실패 링크를 따라가며 처음 만나는 끝 표시 있는 마디를 $v$ 의 **출력 링크(output link)** 라 한다. $w(v)$ 의 접미사인 패턴은 $v$ 자신과 출력 링크의 사슬에서 모두 나온다.

## 구성

뿌리에서 너비 우선으로 마디를 차례로 처리한다. 마디 $v$ 에서 글자 $a$ 의 간선으로 자식 $u$ 가 있으면, $f(v)$ 에서 시작해 실패 링크를 따라가며 $a$ 의 간선이 있는 첫 마디 $x$ 를 찾고 $f(u)$ 를 그 간선의 끝으로 둔다. 그런 마디가 없으면 $f(u)$ 는 뿌리다. 너비 우선 순서에서 $f(v)$ 와 그 사슬은 $v$ 보다 얕으므로 이미 처리되어 있다.

## 검색

본문을 한 글자씩 읽으며 트라이의 마디 $v$ 를 유지한다. 다음 글자 $a$ 의 간선이 $v$ 에 없으면 $v$ 를 $f(v)$ 로 옮기기를 간선이 있거나 뿌리에 닿을 때까지 되풀이하고, 간선이 있으면 따라간다. 옮긴 마디와 그 출력 링크의 사슬에서 끝 표시 있는 마디마다 패턴 하나를 보고한다.

```typescript
interface ACNode {
  next: Map<string, ACNode>;
  fail: ACNode | null;
  out: ACNode | null; // 출력 링크
  pattern: number; // 끝 표시, 없으면 -1
}

function search(root: ACNode, t: string, report: (pos: number, p: number) => void): void {
  let v = root;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    while (v !== root && !v.next.has(a)) v = v.fail!;
    v = v.next.get(a) ?? root;
    for (let u: ACNode | null = v.pattern >= 0 ? v : v.out; u !== null; u = u.out) {
      report(i, u.pattern);
    }
  }
}
```

# 성질

## 검색 시간

정리. 검색은 $O(n+z)$ 시간이 든다[^1].

증명의 요지. 마디의 깊이는 글자를 하나 읽을 때 많아야 $1$ 늘고, 실패 링크를 한 번 따라갈 때마다 $1$ 이상 준다. 깊이는 음수가 되지 않으므로 실패 링크를 따라가는 횟수의 합은 $n$ 이하다. 출력 링크의 사슬은 만나는 마디마다 보고가 하나씩 나오므로 그 길이의 합이 $z$ 다.

## 구성 시간

정리. 실패 링크와 출력 링크를 모두 구하는 데 $O(L)$ 시간이 든다[^1].

증명의 요지. 패턴 $P_j$ 의 경로 위의 마디들만 보면, 경로를 한 글자 내려갈 때 실패 링크가 가리키는 마디의 깊이는 많아야 $1$ 늘고, 사슬을 따라갈 때마다 $1$ 이상 준다. 그래서 $P_j$ 의 경로 위에서 따라가는 횟수의 합은 $\lvert P_j\rvert$ 이하이고, 패턴들에 대해 더하면 $L$ 이하다. 이 계산은 퍼텐셜을 깊이로 둔 [분할상환 분석](amortized-analysis.md)이다. 출력 링크는 $f(v)$ 에 끝 표시가 있으면 $f(v)$, 없으면 $f(v)$ 의 출력 링크로 둔다.

## 결정적 오토마타

마디마다 모든 글자 $a$ 에 대해 전이 $\delta(v,a)$ 를 미리 채우면, 간선이 있으면 그 끝으로, 없으면 $\delta(f(v),a)$ 로, 뿌리에서는 뿌리로 두어 언어 $\Sigma^\ast(P_1\mid\cdots\mid P_k)$ 의 끝을 알아보는 [유한 오토마타](finite-automata.md)가 된다. 상태는 $L+1$ 개 이하이고, 표는 $O(L\lvert\Sigma\rvert)$ 칸이며, 검색에서 실패 링크를 따라가지 않는다. 패턴이 하나이면 이 오토마타는 Knuth–Morris–Pratt 알고리즘의 문자열 검색 오토마타와 같다.

# 활용

- 사전 검색. 금지어 거르기, 바이러스 서명 검사, 네트워크 침입 탐지처럼 고정된 패턴 사전으로 긴 입력을 훑는 일에 쓴다.
- 생물 서열. 유전체 서열에서 짧은 염기 서열 여러 개의 위치를 한 번에 찾는다.
- 서지 검색. Aho 와 Corasick 은 서지 목록에서 검색어 여러 개를 한 번에 찾으려고 이 알고리즘을 만들었다[^1].

[^1]: A. V. Aho, M. J. Corasick, "Efficient string matching: an aid to bibliographic search", Communications of the ACM 18 (1975), 333–340.

# 연관 문서

## 선수지식

- [트라이](tries.md)
- [Knuth–Morris–Pratt 알고리즘](knuth-morris-pratt.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #data_structures #computation
