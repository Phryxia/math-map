# Huffman 부호

# 개요

**Huffman 부호(Huffman code)** 는 기호마다 확률이 주어졌을 때 평균 길이가 가장 짧은 접두부호다. 다섯 기호의 확률이 $(0.45,0.25,0.15,0.10,0.05)$ 일 때 길이를 $\lceil -\log_2 p\rceil$ 로 잡은 부호는 평균 길이가 $2.5$ 이지만, 부호 나무에 빈 잎이 남아 더 줄일 수 있다. Huffman 부호는 확률이 가장 작은 두 기호를 하나로 합치기를 되풀이해 나무를 아래에서부터 만들고, 이 예에서 평균 길이를 $2.0$ 으로 줄인다.

# 직관

Huffman 부호는 기호마다 확률이 주어졌을 때 확률이 가장 작은 두 기호를 하나로 합치기를 되풀이해 만드는 접두부호이고, 평균 부호 길이가 모든 접두부호 가운데 최소다. D. A. Huffman 이 1952 년에 발표했다[^1].

[무손실 부호화 정리](source-coding.md)에서 평균 길이는 엔트로피 $H$ 이상이고 $H+1$ 미만으로 만들 수 있다. Huffman 부호는 주어진 분포에서 그 가운데 가장 짧은 부호다.

다섯 기호의 확률이 $p=(0.45,0.25,0.15,0.10,0.05)$ 다. 길이를 $\lceil-\log_2 p\rceil$ 로 잡으면 $(2,2,3,4,5)$ 이고 평균 길이는 $0.9+0.5+0.45+0.4+0.25=2.5$ 다. Kraft 합은 $1/4+1/4+1/8+1/16+1/32=23/32$ 이라 $1$ 에 못 미친다. 트리에 빈 잎이 남았으니 더 짧은 부호가 있다.

가장 짧은 부호의 트리에서 확률이 가장 작은 두 기호 $0.10$ 과 $0.05$ 는 가장 깊은 곳에 형제로 놓인다. 더 자주 나오는 기호가 더 깊이 있으면 두 기호의 자리를 바꿔 평균을 줄일 수 있으므로, 가장 짧은 부호에서는 드문 기호가 더 깊다. 그러면 두 잎을 그 부모 하나로 보고 확률 $0.15$ 인 기호 하나로 바꿀 수 있다. 원래 평균 길이는 줄어든 문제의 평균 길이에 $0.15$ 를 더한 값이다.

남은 확률은 $(0.45,0.25,0.15,0.15)$ 다. 같은 일을 되풀이하면 $0.15$ 둘을 합쳐 $0.30$, 다음에 $0.25$ 와 $0.30$ 을 합쳐 $0.55$, 마지막에 $0.45$ 와 $0.55$ 를 합친다. 합친 순서를 거꾸로 따라 내려가면 길이는 $(1,2,3,4,4)$ 이고 평균 길이는 $2.0$ 이다. 엔트로피는 $H\approx 1.9772$ 이고 Kraft 합은 정확히 $1$ 이다.

# 정의

## Huffman 알고리즘

알파벳 $A$ 의 기호 $a$ 마다 확률 $p(a)$ 가 있다. **Huffman 알고리즘(Huffman algorithm)** 은 다음을 한다.

1. 기호마다 잎 하나를 만들고 무게를 $p(a)$ 로 둔다.
2. 남은 마디가 둘 이상이면 무게가 가장 작은 두 마디를 골라 새 마디의 두 자식으로 두고, 새 마디의 무게를 두 무게의 합으로 둔다.
3. 마디가 하나 남으면 그 마디가 뿌리다. 마디마다 왼쪽 자식으로 가는 가지에 $0$, 오른쪽 자식으로 가는 가지에 $1$ 을 붙인다. 기호의 부호어는 뿌리에서 그 잎까지 가지에 붙은 비트를 이어 쓴 것이다.

```typescript
type HuffNode = { p: number; symbol: number; left?: HuffNode; right?: HuffNode };

function huffman(probs: number[]): string[] {
  let queue: HuffNode[] = probs.map((p, symbol) => ({ p, symbol }));
  while (queue.length > 1) {
    queue.sort((u, v) => u.p - v.p);
    const [left, right, ...rest] = queue;
    queue = [...rest, { p: left.p + right.p, symbol: -1, left, right }];
  }
  const code: string[] = [];
  const walk = (node: HuffNode, prefix: string) => {
    if (node.symbol >= 0) code[node.symbol] = prefix || "0";
    else {
      walk(node.left!, prefix + "0");
      walk(node.right!, prefix + "1");
    }
  };
  walk(queue[0], "");
  return code;
}
```

무게가 같은 마디가 있으면 고르는 방법에 따라 부호가 달라진다. 평균 길이는 어느 것을 골라도 같다.

## 정준 Huffman 부호

부호어의 길이만 정하고 부호어는 규칙으로 붙인 것을 **정준 Huffman 부호(canonical Huffman code)** 라 한다. 기호를 길이 순으로, 길이가 같으면 기호 순으로 놓고, 첫 부호어를 $0\cdots 0$ 으로 둔다. 다음 부호어는 앞 부호어에 $1$ 을 더하고 길이가 늘었으면 그만큼 오른쪽에 $0$ 을 붙인다. 복호기는 길이 목록만 받으면 같은 부호를 만든다.

# 성질

## 최적성

정리. Huffman 부호의 평균 길이는 같은 분포에 대한 모든 접두부호의 평균 길이 이하다[^1][^2].

증명의 요지. 확률이 가장 작은 두 기호를 $x$, $y$ 라 한다.

1. 최적 접두부호 가운데 $x$ 와 $y$ 가 가장 깊은 곳의 형제 잎인 것이 있다. 최적 부호의 트리에서 자식이 하나인 마디는 없다. 있으면 그 마디를 지워 부호를 줄일 수 있다. 그래서 가장 깊은 잎에는 형제 잎이 있고, 그 두 잎의 기호를 $x$, $y$ 와 바꿔도 평균 길이가 늘지 않는다.
2. $x$, $y$ 를 무게 $p(x)+p(y)$ 인 기호 $z$ 하나로 바꾼 알파벳의 접두부호 $C'$ 에서 $z$ 의 잎에 두 자식을 달아 $x$, $y$ 를 놓으면 원래 알파벳의 접두부호 $C$ 가 되고, $L(C)=L(C')+p(x)+p(y)$ 다.
3. 1 의 최적 부호에 2 를 거꾸로 쓰면 줄어든 알파벳의 부호가 나오므로, 원래 문제의 최솟값은 줄어든 문제의 최솟값에 $p(x)+p(y)$ 를 더한 값이다. Huffman 알고리즘은 줄어든 문제를 같은 방법으로 풀므로 기호 수에 대한 귀납법으로 최적이다.

## 길이의 한계

최적 부호도 엔트로피 하한을 깨지 못하고, 길이를 $\lceil-\log_2 p\rceil$ 로 잡는 Shannon 부호가 $H+1$ 미만이므로 다음이 성립한다.

$$
H(X)\le L_{\mathrm{Huffman}}\lt H(X)+1
$$

가장 큰 확률을 $p\_{\max}$ 라 하면 $p\_{\max}\lt 1/2$ 일 때 $L_{\mathrm{Huffman}}-H(X)\le p\_{\max}+0.086$ 이다[^3]. 한 기호가 확률을 거의 다 차지하면 손해가 $1$ 비트 가까이 된다. 확률 $0.9$ 와 $0.1$ 인 두 기호는 $H\approx 0.469$ 이지만 어떤 접두부호도 기호마다 $1$ 비트를 쓴다.

## 계산 시간

기호가 $m$ 개이면 합치기를 $m-1$ 번 한다. 무게를 [이진 힙](binary-heaps.md)에 넣으면 합치기마다 최솟값 두 번 꺼내기와 넣기 한 번이므로 전체가 $O(m\log m)$ 이다. 확률이 이미 정렬되어 있으면 잎의 큐와 합친 마디의 큐 두 개를 두고 두 큐의 앞에서만 꺼내면 된다. 합친 마디의 무게는 만들어진 순서대로 커지므로 두 큐가 정렬된 채로 남고, 전체가 $O(m)$ 이다[^4].

# 활용

- 기호를 묶어 부호화하기. 기호 $n$ 개를 한 덩어리로 보고 덩어리에 Huffman 부호를 쓰면 기호당 손해가 $1/n$ 미만이다. 위의 확률 $0.9$ 와 $0.1$ 인 원천에서 기호당 길이는 $n=2$ 에서 $0.645$, $n=4$ 에서 $0.4926$, $n=8$ 에서 $0.4758$ 이다. 덩어리의 수는 $2^n$ 으로 늘어난다. [산술 부호화](arithmetic-coding.md)는 덩어리 없이 기호열 전체에서 손해를 $2$ 비트 이하로 둔다.
- 범용 압축기. `gzip` 과 PNG(portable network graphics)가 쓰는 DEFLATE 형식은 [Lempel–Ziv 압축](lempel-ziv.md)의 참조와 리터럴을 정준 Huffman 부호로 다시 줄이고, 블록마다 길이 목록만 보낸다. 기본 JPEG(Joint Photographic Experts Group) 형식은 양자화한 변환 계수를 Huffman 부호로 줄인다.
- $D$ 진 부호. 무게가 가장 작은 마디 $D$ 개를 한 번에 합치면 $D$ 진 최적 접두부호가 나온다. 기호 수 $m$ 이 $m-1\equiv 0\pmod{D-1}$ 을 만족하지 않으면 확률 $0$ 인 기호를 더해 맞춘다[^2].

[^1]: D. A. Huffman, "A method for the construction of minimum-redundancy codes", Proceedings of the IRE 40 (9) (1952), 1098–1101.
[^2]: T. M. Cover, J. A. Thomas, *Elements of Information Theory*, 2nd ed., Wiley, 2006, §5.6–5.8.
[^3]: R. G. Gallager, "Variations on a theme by Huffman", IEEE Transactions on Information Theory 24 (6) (1978), 668–674.
[^4]: J. van Leeuwen, "On the construction of Huffman trees", Proceedings of the 3rd International Colloquium on Automata, Languages and Programming (1976), 382–410.

# 연관 문서

## 선수지식

- [무손실 부호화 정리](source-coding.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #algorithms #probability
