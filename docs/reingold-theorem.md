# Reingold 정리

# 개요

**Reingold 정리(Reingold's theorem)** 는 무방향 그래프에서 두 정점이 연결되어 있는지 판정하는 문제가 결정적 로그 공간 L 에 든다는 정리다. O. Reingold 가 2005 년에 발표했다[^1]. 그래프를 [Expander 그래프](expander-graphs.md)로 바꾸는 변환을 로그 공간에서 계산하는 것이 증명의 요지다.

[공간 복잡도](space-complexity.md)에서 방향 그래프의 도달 가능성은 NL(nondeterministic logarithmic space)-완전이다. 무방향 그래프의 연결성은 H. R. Lewis 와 C. H. Papadimitriou 가 정의한 대칭 로그 공간 SL(symmetric logarithmic space)의 완전 문제이고[^2], 이 정리로 $\mathrm{SL}=\mathrm L$ 이다.

# 직관

정점이 $n$ 개인 무방향 [그래프](graphs.md)에서 $s$ 와 $t$ 가 연결되어 있는지 판정한다. 지금 있는 정점과 걸음 수만 기억하면 메모리가 $O(\log n)$ 비트다. 다음 정점을 무작위로 고르는 [무작위 걷기](random-walks.md)는 $s$ 가 속한 성분의 모든 정점을 $O(n^3)$ 걸음 안에 높은 확률로 방문하므로, 무작위 비트를 쓰면 로그 공간에 판정된다[^3]. 무작위 비트 없이 같은 메모리로 해 보려면 이웃을 고르는 순서를 미리 정해야 하고, 길이 $n^3$ 의 걸음을 모두 시험하는 것은 경로를 기억할 수 없어 되지 않는다.

그래프가 차수 $d$ 의 expander 이면 지름이 $O(\log n)$ 이어서, $s$ 와 $t$ 가 연결되어 있으면 길이 $O(\log n)$ 의 경로가 있다. 그런 경로는 걸음마다 이웃 번호 하나로 적히므로 $O(\log n)\cdot\log d$ 비트이고, 이런 비트열을 사전순으로 하나씩 만들어 따라가 보면 된다. $d$ 가 상수이면 메모리가 $O(\log n)$ 이다.

그래서 연결 성분의 모양을 유지한 채 그래프를 expander 로 바꾼다. 그래프를 거듭제곱하면 섞이는 속도가 빨라지지만 차수가 커지고, 지그재그 곱으로 차수를 상수로 되돌릴 수 있다. 두 연산을 번갈아 $O(\log n)$ 번 하면 각 성분이 상수 차수의 expander 가 된다.

# 정의

## 정규 그래프와 회전 사상

정점이 $N$ 개이고 차수가 $D$ 인 정규 그래프를 $(N,D)$ 그래프라 한다. 정점 $v$ 의 $i$ 번째 간선이 정점 $w$ 의 $j$ 번째 간선이면 **회전 사상(rotation map)** $\mathrm{Rot}(v,i)=(w,j)$ 로 쓴다. 그래프를 회전 사상으로 주면 이웃을 하나씩 계산할 수 있다.

전이행렬 $A/D$ 의 고윳값 가운데 $1$ 다음으로 큰 절댓값을 $\lambda(G)$ 라 한다. 연결 성분마다 이 값을 따로 잰다. 그래프 $G^k$ 는 $G$ 의 $k$ 걸음 경로를 간선으로 둔 $(N,D^k)$ 그래프이고 $\lambda(G^k)=\lambda(G)^k$ 다.

## 지그재그 곱

$G$ 가 $(N,D)$ 그래프이고 $H$ 가 $(D,d)$ 그래프일 때 **지그재그 곱(zig-zag product)** $G\mathbin{\text{ⓩ}}H$ 는 정점 집합이 $\lbrack N\rbrack\times\lbrack D\rbrack$ 인 $(ND,d^2)$ 그래프다. 정점 $(v,a)$ 에서 간선 $(i,j)\in\lbrack d\rbrack^2$ 를 따라가면 다음 세 걸음을 간다.

1. $H$ 에서 $a$ 의 $i$ 번째 이웃 $a'$ 으로 간다.
2. $\mathrm{Rot}\_G(v,a')=(w,b')$ 로 $G$ 의 간선을 건넌다.
3. $H$ 에서 $b'$ 의 $j$ 번째 이웃 $b$ 로 가서 $(w,b)$ 에 닿는다.

$G$ 의 각 정점을 $H$ 의 사본으로 바꾸고 사본 안의 걸음 사이에 $G$ 의 걸음 하나를 끼운 것이다.

# 성질

## 지그재그 곱의 간극

정리(Reingold–Vadhan–Wigderson). $\lambda(G\mathbin{\text{ⓩ}}H)\le\lambda(G)+\lambda(H)+\lambda(H)^2$ 이다[^4].

차수는 $H$ 만 정하고 $\lambda$ 는 $G$ 의 값에서 $H$ 의 몫만큼만 나빠진다. $G\mathbin{\text{ⓩ}}H$ 의 연결 성분은 $G$ 의 연결 성분과 일대일로 대응한다.

## Reingold 정리

정리. 무방향 그래프와 정점 $s$, $t$ 를 받아 $s$ 와 $t$ 가 연결되어 있는지 판정하는 문제는 $\mathrm L$ 에 든다[^1].

증명의 요지. 상수 $D$ 와 $\lambda(H)\le 1/100$ 인 고정된 $(D^{16},D)$ 그래프 $H$ 를 하나 정한다.

- 각 정점에 고리를 더하고 차수가 큰 정점을 순환으로 펼쳐 그래프를 $(N,D^{16})$ 그래프 $G_0$ 로 바꾼다. 연결된 비이분 정규 그래프는 $\lambda\le 1-1/\mathrm{poly}(N)$ 을 만족한다.
- $G_{i+1}=(G_i\mathbin{\text{ⓩ}}H)^8$ 로 둔다. 지그재그 곱이 차수를 $D^2$ 로 줄이고 여덟 제곱이 차수를 $D^{16}$ 으로 되돌린다. 위 정리로 $1-\lambda(G_{i+1})\ge\min\lbrace 2(1-\lambda(G_i)),\thinspace 1/2\rbrace$ 이므로 $\ell=O(\log N)$ 단계 뒤 각 성분에서 $\lambda(G_\ell)\le 1/2$ 이다.
- $G_\ell$ 의 정점 이름은 $G_0$ 의 정점에 단계마다 $\lbrack D^{16}\rbrack$ 의 원소 하나를 붙인 것이어서 $O(\log N)$ 비트다. $\mathrm{Rot}\_{G_{i+1}}$ 은 $\mathrm{Rot}\_{G_i}$ 를 상수 번 부르고 상수 비트만 더 기억하므로, $\mathrm{Rot}\_{G_\ell}$ 이 $O(\log N)$ 공간에 계산된다.
- $G_\ell$ 의 각 성분은 지름이 $O(\log N)$ 이므로, 직관 절처럼 $s$ 에 대응하는 정점에서 나가는 길이 $O(\log N)$ 의 경로를 모두 시험한다.

## 따름정리

- $\mathrm{SL}=\mathrm L$ 이다. 무방향 그래프의 이분성 판정, 순환이 있는지의 판정 같은 SL 의 문제가 모두 결정적 로그 공간에 든다.
- 무방향 그래프를 모두 훑는 **보편 탐색 수열(universal exploration sequence)** 이 로그 공간에서 만들어진다. 정점이 $n$ 개인 연결된 정규 그래프에서 이 수열이 정하는 이웃 번호를 따라가면 모든 정점을 방문한다.

# 활용

- [공간 복잡도](space-complexity.md)의 로그 공간 부류. 방향 그래프의 도달 가능성은 NL-완전이고, 무방향 그래프의 연결성은 이 정리로 L 에 든다. 방향 그래프의 도달 가능성이 L 에 들면 $\mathrm L=\mathrm{NL}$ 이다.
- 무작위 로그 공간 RL(randomized logarithmic space)의 탈무작위화. 직관 절의 무작위 걷기 알고리즘이 이 정리로 결정적 알고리즘으로 바뀌었다.
- [Expander 그래프](expander-graphs.md)의 지그재그 곱은 명시적인 상수 차수 expander 의 구성으로 도입되었고, 이 정리에서 그래프의 성분을 expander 로 바꾸는 데 쓰인다.

[^1]: O. Reingold, "Undirected connectivity in log-space", Journal of the ACM 55 (2008), Article 17. 학회 판은 Proceedings of the 37th ACM Symposium on Theory of Computing (2005), 376–385.
[^2]: H. R. Lewis, C. H. Papadimitriou, "Symmetric space-bounded computation", Theoretical Computer Science 19 (1982), 161–187.
[^3]: R. Aleliunas, R. M. Karp, R. J. Lipton, L. Lovász, C. Rackoff, "Random walks, universal traversal sequences, and the complexity of maze problems", Proceedings of the 20th IEEE Symposium on Foundations of Computer Science (1979), 218–223.
[^4]: O. Reingold, S. Vadhan, A. Wigderson, "Entropy waves, the zig-zag graph product, and new constant-degree expanders", Annals of Mathematics 155 (2002), 157–187.

# 연관 문서

## 선수지식

- [공간 복잡도](space-complexity.md)
- [Expander 그래프](expander-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #graph_theory
