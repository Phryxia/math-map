# 트라이

# 개요

**트라이(trie)** 는 문자열 집합을 뿌리 있는 트리에 저장하되, 각 간선에 글자 하나를 붙이고 뿌리에서 마디까지의 경로가 읽는 글자들이 그 마디가 나타내는 접두사가 되게 한 자료구조다. 길이 $\ell$ 인 문자열을 찾고 넣는 데 집합의 크기와 관계없이 마디 $\ell$ 개를 지난다. de la Briandais 가 1959 년에 제안했고, 이름은 Fredkin 이 retrieval 에서 땄다[^1].

트라이는 [그래프](graphs.md)의 트리이고, 같은 접두사를 가진 문자열들이 한 경로를 함께 쓴다.

# 직관

단어 $\mathtt{to}, \mathtt{tea}, \mathtt{ten}, \mathtt{in}$ 을 사전에 넣는다. 정렬된 배열에 두고 이진 탐색을 하면 비교마다 두 단어를 앞 글자부터 대조하므로, 단어 수가 늘수록 비교 횟수가 늘고 비교마다 같은 앞 글자 $\mathtt{te}$ 를 되풀이해 읽는다.

$\mathtt{tea}$ 와 $\mathtt{ten}$ 은 $\mathtt{te}$ 까지 같으므로 그 부분을 한 번만 적고 셋째 글자에서 갈라지게 한다. 뿌리에서 $\mathtt t$ 와 $\mathtt i$ 로 가는 간선을 두고, $\mathtt t$ 아래에 $\mathtt o$ 와 $\mathtt e$, $\mathtt e$ 아래에 $\mathtt a$ 와 $\mathtt n$ 을 둔다. $\mathtt{ten}$ 을 찾으려면 뿌리에서 $\mathtt t, \mathtt e, \mathtt n$ 간선을 차례로 따라가면 되고, 다른 단어와 비교하지 않는다.

# 정의

## 트라이

알파벳 $\Sigma$ 위의 유한 문자열 집합 $S$ 의 트라이는 다음을 만족하는 뿌리 있는 트리다.

- 각 마디에서 자식으로 가는 간선마다 서로 다른 글자 $a\in\Sigma$ 가 붙어 있다.
- 마디 $v$ 에 대해 뿌리에서 $v$ 까지의 경로가 읽는 문자열 $w(v)$ 는 $S$ 의 어떤 원소의 접두사이고, $S$ 의 원소의 모든 접두사가 이렇게 마디 하나씩으로 나타난다.
- $w(v)\in S$ 인 마디 $v$ 에 끝 표시를 둔다.

찾기는 뿌리에서 글자마다 그 글자의 간선을 따라가고, 간선이 없거나 끝난 마디에 끝 표시가 없으면 실패한다. 넣기는 같은 경로를 따라가다 간선이 없는 자리부터 새 마디를 만든다.

```typescript
class TrieNode {
  children = new Map<string, TrieNode>();
  end = false;
}

function insert(root: TrieNode, w: string): void {
  let v = root;
  for (const a of w) {
    let u = v.children.get(a);
    if (u === undefined) {
      u = new TrieNode();
      v.children.set(a, u);
    }
    v = u;
  }
  v.end = true;
}

function contains(root: TrieNode, w: string): boolean {
  let v: TrieNode | undefined = root;
  for (const a of w) {
    v = v.children.get(a);
    if (v === undefined) return false;
  }
  return v.end;
}
```

## 압축 트라이

**압축 트라이(compressed trie)** 는 트라이에서 자식이 하나이고 끝 표시가 없는 마디를 지우고, 그 마디를 지나는 간선들을 하나로 이어 문자열을 붙인 것이다. 기수 트리(radix tree) 또는 Patricia 트리라고도 한다[^2].

## 접미사 트리

본문 $T$ 의 끝에 다른 곳에 없는 글자 $\char36{}$ 를 붙인 $T\char36{}$ 의 접미사 전체의 압축 트라이를 $T$ 의 **접미사 트리(suffix tree)** 라 한다. 간선의 문자열은 $T$ 안의 시작과 끝 위치 두 수로 적는다.

# 성질

## 마디 수

정리. $S$ 의 원소의 길이 합이 $L$ 이면 트라이의 마디는 $L+1$ 개 이하다. $S$ 가 $k$ 개의 원소로 되어 있고 어느 원소도 다른 원소의 접두사가 아니면, 압축 트라이의 마디는 $2k-1$ 개 이하다.

증명의 요지. 뿌리가 아닌 마디마다 그 마디를 처음 만든 원소의 글자 하나가 대응하므로 마디는 $L+1$ 개 이하다. 압축 트라이에서 잎은 정확히 $S$ 의 원소 $k$ 개이고, 뿌리가 아닌 내부 마디는 자식이 둘 이상이다. 자식이 둘 이상인 마디가 $j$ 개인 트리의 잎은 $j+1$ 개 이상이므로 내부 마디는 $k-1$ 개 이하다.

## 무작위 트라이의 깊이

정리. 서로 독립이고 각 비트가 균등한 무한 이진 문자열 $n$ 개를 넣은 트라이에서, 문자열 하나가 끝나는 잎의 깊이의 기댓값은 $\log\_2 n+O(1)$ 이다[^1].

증명의 요지. 문자열 $x$ 의 잎은 $x$ 와 다른 문자열의 공통 접두사 길이의 최댓값보다 한 단계 깊다. 두 문자열의 처음 $k$ 비트가 같을 확률은 $2^{-k}$ 이므로, 합집합 상한으로 최댓값이 $k$ 이상일 확률은 $\min(1,(n-1)2^{-k})$ 이하다. 이 값을 $k=1,2,\dots$ 에 대해 더하면 기댓값이 $\log\_2 n+2$ 이하다.

$O(1)$ 항은 극한을 갖지 않고 $\log\_2 n$ 에 대해 주기 $1$ 로 진동한다. 평균 깊이를 조화합으로 쓰고 [Mellin 변환](mellin-transform.md)을 취하면 허수축 위의 극점 $2\pi ik/\ln 2$ 가 이 진동항을 준다[^3].

## 접미사 트리의 크기와 질의

길이 $n$ 인 본문의 접미사 트리는 잎이 $n+1$ 개이므로 마디가 $2n+1$ 개 이하이고, 간선을 위치 두 수로 적어 $O(n)$ 공간에 들어간다. 고정된 알파벳에서 Weiner 와 Ukkonen 의 알고리즘이 이 트리를 $O(n)$ 시간에 만든다[^4]. 본문에 나타나는 패턴은 어떤 접미사의 접두사이므로, 길이 $m$ 인 패턴이 본문에 나타나는지는 뿌리에서 패턴을 따라 $O(m)$ 시간에 판정한다.

# 활용

- 접두사 질의. 입력한 접두사로 시작하는 단어를 모두 찾는 자동 완성은 그 접두사의 마디 아래 부분트리를 훑는다.
- 가장 긴 접두사 일치. 인터넷 경로 선택은 목적지 주소의 비트를 따라 이진 압축 트라이를 내려가며 끝 표시가 있는 가장 깊은 마디의 경로를 고른다.
- 여러 패턴의 검색. Aho–Corasick 알고리즘(Aho–Corasick algorithm)은 패턴들의 트라이에 [Knuth–Morris–Pratt 알고리즘](knuth-morris-pratt.md)의 실패 함수를 마디마다 두어 본문을 한 번 읽고 모든 패턴을 찾는다.

[^1]: D. E. Knuth, *The Art of Computer Programming, Vol. 3: Sorting and Searching*, 2nd ed., Addison-Wesley, 1998, §6.3.
[^2]: D. R. Morrison, "PATRICIA — practical algorithm to retrieve information coded in alphanumeric", Journal of the ACM 15 (1968), 514–534.
[^3]: P. Flajolet, X. Gourdon, P. Dumas, "Mellin transforms and asymptotics: harmonic sums", Theoretical Computer Science 144 (1995), 3–58.
[^4]: E. Ukkonen, "On-line construction of suffix trees", Algorithmica 14 (1995), 249–260.

# 연관 문서

## 선수지식

- [그래프](graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms #graph_theory
