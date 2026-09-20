# Erdős–Ko–Rado 정리

# 개요

Erdős–Ko–Rado 정리는 $\lbrace 1,\dots,n\rbrace$ 의 $k$ 원소 부분집합을 어느 둘도 공통 원소를 갖도록 고를 때 최대 몇 개까지 고를 수 있는지 정한다. $n\ge 2k$ 이면 답은 $\binom{n-1}{k-1}$ 이고, 원소 하나를 정해 그것을 포함하는 부분집합을 전부 모은 족이 그 크기다.

증명은 원 위의 배열을 세는 것이고, [Sperner 정리](sperner-theorem.md)의 사슬 세기와 같은 이중 세기 구조다. $n\gt 2k$ 에서는 최대족이 그 한 가지뿐이다.

# 직관

$\lbrace 1,2,3,4\rbrace$ 의 두 원소 부분집합을 고르되 고른 것끼리 공통 원소를 갖게 하려 한다. 최대 몇 개인가.

$1$ 을 포함하는 것을 전부 고르면 $\lbrace 1,2\rbrace,\lbrace 1,3\rbrace,\lbrace 1,4\rbrace$ 셋이고, 모두 $1$ 을 공유하므로 조건을 만족한다. 다른 방법으로 $\lbrace 1,2\rbrace,\lbrace 2,3\rbrace,\lbrace 1,3\rbrace$ 를 고르면 이것도 셋이다. 넷째를 더하려 하면 남은 것은 앞서 고른 것 가운데 하나와 반드시 엇갈린다. 두 원소 부분집합 여섯 개는 $\lbrace 1,2\rbrace$ 와 $\lbrace 3,4\rbrace$ 처럼 서로 만나지 않는 세 쌍으로 갈라지고, 쌍마다 하나씩만 고를 수 있으므로 셋이 한계다.

$n$ 이 커지면 쌍으로 가르는 이 방법이 통하지 않는다. $\lbrace 1,\dots,6\rbrace$ 에서는 $\lbrace 1,2\rbrace$ 와 만나지 않는 두 원소 부분집합이 여섯 개나 되어 짝이 하나로 정해지지 않는다. 그래서 세는 방식을 바꾼다.

$1,\dots,n$ 을 원 위에 늘어놓고, 원 위에서 연속한 $k$ 칸을 차지하는 부분집합만 본다. 이런 것을 호라 하자. 한 배열에서 서로 겹치는 호는 많아야 $k$ 개다. 호 하나를 고정하면 그것과 겹치는 다른 호는 고정한 호의 내부 경계 $k-1$ 곳에서 갈라져 나오는데, 각 경계마다 왼쪽으로 뻗는 것과 오른쪽으로 뻗는 것이 서로 겹치지 않아 둘 중 하나만 고를 수 있다.

배열을 모든 방식으로 바꿔 가며 (배열, 그 배열에서 호가 된 족의 원소) 쌍을 세면 양쪽에서 답이 나온다. 배열 하나마다 쌍이 $k$ 개 이하이고, 족의 원소 하나마다 그것이 호가 되는 배열의 개수는 $k!\thinspace(n-k)!$ 로 같다. 두 수를 견주면 족의 크기가 $\binom{n-1}{k-1}$ 이하다.

# 정의

## 교차족

$\lbrack n\rbrack=\lbrace 1,\dots,n\rbrace$ 의 부분집합족 $\mathcal A$ 가 **교차족**이라는 것은 임의의 $A,B\in\mathcal A$ 에 대해 $A\cap B\ne\varnothing$ 이라는 뜻이다. 모든 원소의 크기가 $k$ 인 교차족을 $k$ **균일 교차족**이라 한다.

원소 $x\in\lbrack n\rbrack$ 을 하나 정하고

$$
\mathcal S_x=\lbrace A\subseteq\lbrack n\rbrack : \vert A\vert=k,\thinspace x\in A\rbrace
$$

로 두면 $\mathcal S_x$ 는 $k$ 균일 교차족이고 $\vert\mathcal S_x\vert=\binom{n-1}{k-1}$ 이다. 이런 족을 **별**이라 한다.

## 순환 배열과 호

$\lbrack n\rbrack$ 의 원소를 원 위에 늘어놓은 것을 **순환 배열**이라 하고, 회전으로 옮겨지는 두 배열은 같은 것으로 본다. 순환 배열은 $(n-1)!$ 개다. 순환 배열 $\sigma$ 에서 연속한 $k$ 칸에 놓인 원소의 집합을 $\sigma$ 의 $k$ **호**라 한다. 한 순환 배열의 $k$ 호는 $n$ 개다.

# 성질

## Erdős–Ko–Rado 정리

**정리.** $n\ge 2k$ 이고 $\mathcal A$ 가 $\lbrack n\rbrack$ 의 $k$ 균일 교차족이면 $\vert\mathcal A\vert\le\binom{n-1}{k-1}$ 이다.[^1]

Katona 의 증명은 순환 배열을 센다.[^2] 먼저 한 순환 배열 $\sigma$ 에서 $\mathcal A$ 에 속하는 호가 많아야 $k$ 개임을 본다. $\mathcal A$ 의 호 $A$ 를 하나 잡고 $A$ 가 자리 $1,\dots,k$ 를 차지한다고 하자. $A$ 와 만나는 다른 호는 자리 $i$ 와 $i+1$ 사이가 끊어지는 것이고, 그런 호는 $\lbrace i+1,\dots,i+k\rbrace$ 와 $\lbrace i-k+1,\dots,i\rbrace$ 둘이다. $n\ge 2k$ 이므로 이 둘은 서로 만나지 않아 많아야 하나가 $\mathcal A$ 에 속한다. $i$ 가 $1\le i\le k-1$ 에서 움직이므로 $A$ 를 뺀 나머지가 $k-1$ 개 이하다.

쌍 $(\sigma,A)$ 로 $\sigma$ 가 순환 배열이고 $A\in\mathcal A$ 가 $\sigma$ 의 호인 것을 센다. 배열 쪽에서 세면 $k\thinspace(n-1)!$ 이하다. 족 쪽에서 세면 $A$ 를 연속한 $k$ 칸에 놓는 순환 배열이 $k!\thinspace(n-k)!$ 개이므로 $\vert\mathcal A\vert\thinspace k!\thinspace(n-k)!$ 이다. 따라서

$$
\vert\mathcal A\vert\thinspace k!\thinspace(n-k)!\thinspace\le\thinspace k\thinspace(n-1)!
$$

이고 양변을 $k!\thinspace(n-k)!$ 로 나누면 $\vert\mathcal A\vert\le\binom{n-1}{k-1}$ 이다. ∎

## 등호 조건

$n\gt 2k$ 이면 크기가 $\binom{n-1}{k-1}$ 인 $k$ 균일 교차족은 별뿐이다.[^1] $n=2k$ 이면 사정이 다르다. 크기 $k$ 인 부분집합과 그 여집합은 만나지 않으므로 $\binom{2k}{k}/2$ 개의 쌍에서 하나씩 고르면 교차족이 되고, 그 크기가 $\binom{2k-1}{k-1}$ 로 최대다. 별이 아닌 최대족이 이렇게 많이 생긴다.

## Hilton–Milner 정리

별이 아닌 $k$ 균일 교차족은 별보다 훨씬 작다. $n\gt 2k$ 이고 $\mathcal A$ 가 별에 포함되지 않는 $k$ 균일 교차족이면

$$
\vert\mathcal A\vert\thinspace\le\thinspace\binom{n-1}{k-1}-\binom{n-k-1}{k-1}+1
$$

이다.[^3] 등호는 집합 $B$ 하나를 정하고, $x\in B$ 를 포함하면서 $B$ 와 만나는 모든 $k$ 집합에 $B$ 자신을 더한 족에서 성립한다. 우변은 $n$ 이 커질 때 $\binom{n-1}{k-1}$ 의 상수배가 아니라 $\binom{n-2}{k-2}$ 규모이므로, 최대족에서 조금만 벗어나도 크기가 한 차수 떨어진다.

# 활용

- **Kneser 그래프의 독립수.** Kneser 그래프 $K(n,k)$ 는 $\lbrack n\rbrack$ 의 $k$ 원소 부분집합을 정점으로 하고 서로 만나지 않는 두 집합을 간선으로 잇는다. 교차족은 이 그래프의 독립집합이므로 $n\ge 2k$ 에서 독립수가 $\binom{n-1}{k-1}$ 이다. 이 값은 [그래프 색칠](graph-coloring.md)에서 $K(n,k)$ 의 색수 하한을 주는 데 쓰인다.
- **$t$ 교차족.** 임의의 두 원소가 $t$ 개 이상을 공유한다는 조건으로 바꾸면 최대 크기는 $n$ 과 $k$ 와 $t$ 의 관계에 따라 갈린다. $t$ 개 원소를 전부 포함하는 족이 답이 되는 범위와 그렇지 않은 범위를 Ahlswede–Khachatrian 정리가 전부 정한다.[^4]
- **확률 판본.** 각 원소를 확률 $p$ 로 독립하게 뽑아 만든 부분집합족에서 교차 조건을 요구하면 크기가 아니라 측도를 재는 문제가 된다. $p\lt 1/2$ 에서 최대 측도가 $p$ 이고 별이 그 값을 준다는 진술이 대응하며, 증명에 [부울 함수의 Fourier 전개](boolean-fourier.md)를 쓴다.

[^1]: P. Erdős, C. Ko, R. Rado, *Intersection theorems for systems of finite sets*, Quart. J. Math. Oxford **12** (1961), 313–320. 등호 조건도 이 논문에 있다.

[^2]: G. O. H. Katona, *A simple proof of the Erdős–Chao Ko–Rado theorem*, J. Combin. Theory Ser. B **13** (1972), 183–184.

[^3]: A. J. W. Hilton, E. C. Milner, *Some intersection theorems for systems of finite sets*, Quart. J. Math. Oxford **18** (1967), 369–384.

[^4]: R. Ahlswede, L. H. Khachatrian, *The complete intersection theorem for systems of finite sets*, European J. Combin. **18** (1997), 125–136.

# 연관 문서

## 선수지식

- [Sperner 정리](sperner-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #order_theory
