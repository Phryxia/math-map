# 준무작위 군

# 개요

**준무작위 군(quasirandom group)** 은 자명하지 않은 기약 표현의 차원이 모두 큰 유한군이다. 원소가 $n$ 개인 군에서 $a,b\in A$ 이면 $ab\notin A$ 인 집합 $A$ 를 얼마나 크게 잡을 수 있는지 묻는다. 시계의 덧셈 $\mathbb Z\_{12}$ 에서는 홀수 여섯 개가 그런 집합이고, 크기가 전체의 절반이다. 준무작위 군에서는 표현의 차원이 $D$ 이상이면 그런 집합의 크기가 $n/D^{1/3}$ 보다 작다는 것으로 이 물음에 답한다.

# 직관

$\mathbb Z\_{12}$ 에서 홀수 $A=\lbrace 1,3,5,7,9,11\rbrace$ 을 고른다. 홀수 둘을 더하면 짝수이므로 $a+b$ 는 $A$ 에 들어가지 않는다. 이 집합이 커질 수 있었던 것은 $\mathbb Z\_{12}$ 의 원소를 홀짝으로 나누는 준동형 $\mathbb Z\_{12}\to\mathbb Z\_2$ 가 있기 때문이다. $\mathbb Z\_2$ 에서 $\lbrace 1\rbrace$ 은 $1+1=0$ 이라 곱이 없는 집합이고, 그 역상이 $A$ 다.

$\mathbb Z\_2$ 로 가는 준동형은 $x\mapsto(-1)^x$ 로 $\lbrace 1,-1\rbrace$ 로 가는 1 차원 표현이다. 군이 큰 집합을 이런 식으로 잃지 않으려면 작은 군으로 가는 준동형이 없어야 하고, 더 넓게는 차원이 작은 표현이 없어야 한다. 차원이 작은 표현이 없는 군에서는 집합 $A$ 와 $B$ 의 곱 $ab$ 가 군 전체에 고르게 퍼진다. 그래서 $A$ 가 크면 어떤 곱 $ab$ 가 $A$ 에 떨어진다.

# 정의

$G$ 는 원소가 $n$ 개인 유한군이다. [군의 표현](group-representations.md) 문서의 기약 표현은 복소 벡터 공간 위의 것이다.

자명한 표현을 뺀 모든 기약 표현의 차원이 $D$ 이상이면 $G$ 를 **$D$-준무작위(D-quasirandom)** 라 한다[^1].

- $\mathbb Z\_n$ 의 기약 표현은 모두 1 차원이므로 $\mathbb Z\_n$ 은 $D=1$ 에서만 준무작위다. 아벨군이 모두 그렇다.
- 교대군 $A\_5$ 의 기약 표현의 차원은 $1,3,3,4,5$ 이므로 $A\_5$ 는 $3$-준무작위다.
- $p$ 가 홀수 소수이면 $\mathrm{PSL}\_2(\mathbb F\_p)$ 의 자명하지 않은 기약 표현은 차원이 $(p-1)/2$ 이상이다(Frobenius)[^1]. 위수가 $p(p^2-1)/2$ 이므로 $D$ 가 $n^{1/3}$ 정도다.

$a,b\in A$ 이면 $ab\notin A$ 인 부분집합 $A\subseteq G$ 를 **곱이 없는 집합(product-free set)** 이라 한다. 직관 절의 홀수 집합이 $\mathbb Z\_{12}$ 의 곱이 없는 집합이다.

# 성질

## Gowers 정리

**정리(Gowers).** $G$ 가 $D$-준무작위이고 $A,B,C\subseteq G$ 가 $\vert A\vert\vert B\vert\vert C\vert\gt n^3/D$ 를 만족하면 $ab=c$ 인 $a\in A$, $b\in B$, $c\in C$ 가 있다[^1].

$A=B=C$ 로 두면 곱이 없는 집합은 $\vert A\vert^3\le n^3/D$, 곧 $\vert A\vert\le n/D^{1/3}$ 이다. $\mathrm{PSL}\_2(\mathbb F\_p)$ 에서는 곱이 없는 집합의 크기가 $n^{8/9}$ 의 상수배 이하이고, 전체에서 차지하는 비율이 $0$ 으로 간다.

## 증명의 요지

함수 $f:G\to\mathbb C$ 에 대해 $(Tf)(x)=\sum\_{b\in B}f(xb^{-1})$ 로 둔다. $(T1\_A)(c)$ 는 $ab=c$ 인 $(a,b)\in A\times B$ 의 개수이므로, 구하는 개수는 내적 $\langle 1\_C,T1\_A\rangle$ 다.

$1\_A$ 를 상수 $\vert A\vert/n$ 과 합이 $0$ 인 함수 $f\_0$ 로 나누면 상수 부분이 $\vert A\vert\vert B\vert\vert C\vert/n$ 을 준다. $T$ 는 왼쪽 이동과 교환하므로 $T^\ast T$ 의 고유공간은 왼쪽 정칙 표현의 부분표현이고, 자명하지 않은 고유공간은 차원이 $D$ 이상이다. $T^\ast T$ 의 대각합이 $n\vert B\vert$ 이므로 그런 고윳값은 $n\vert B\vert/D$ 이하이고, 다음이 나온다.

$$
\bigl\vert\langle 1\_C,Tf\_0\rangle\bigr\vert\le\sqrt{\frac{n\vert B\vert}{D}}\thinspace\sqrt{\vert A\vert\vert C\vert}
$$

$\vert A\vert\vert B\vert\vert C\vert\gt n^3/D$ 이면 상수 부분이 이 오차보다 커서 개수가 양수다.

## 준무작위 그래프와의 관계

$G$ 의 두 복사본을 정점으로 두고 $yx^{-1}\in B$ 인 $x$ 와 $y$ 를 이은 이분 그래프를 본다. 위 증명은 이 그래프의 둘째 특이값이 $\sqrt{n\vert B\vert/D}$ 이하라는 것이다. $D$ 가 크면 이 그래프는 [준무작위 그래프](quasirandom-graphs.md)의 이분판 조건을 만족하고, Gowers 는 이 그래프가 준무작위인 것과 $G$ 가 준무작위인 것이 서로를 함의함을 보였다[^1].

## 큰 곱이 없는 집합

Babai 와 Sós 는 어떤 상수 $c\gt 0$ 에 대해 모든 유한군이 크기 $cn$ 이상의 곱이 없는 집합을 갖는지 물었다. 아벨군과 가해군은 작은 군으로 가는 준동형을 거쳐 그런 집합을 갖지만, $\mathrm{PSL}\_2(\mathbb F\_p)$ 는 Gowers 정리로 갖지 않는다[^1]. 한편 모든 유한군은 크기가 $n^{11/14}$ 의 상수배 이상인 곱이 없는 집합을 갖는다[^2].

# 활용

- [유한 단순군 분류](finite-simple-groups.md). 비아벨 유한 단순군은 자명하지 않은 표현이 충실하다. 차원 $d$ 인 충실한 표현을 갖는 유한군의 크기를 $d$ 로 제한하는 [Jordan 의 유한 선형군 정리](jordan-finite-linear-groups.md)에 따라, 비아벨 유한 단순군은 위수가 커지면 $D$ 도 커진다. Lie 형 군의 $D$ 는 Landazuri–Seitz 의 표로 구체적으로 주어진다.
- [Expander 그래프](expander-graphs.md). Bourgain–Gamburd 의 방법은 $\mathrm{SL}\_2(\mathbb F\_p)$ 의 Cayley 그래프가 확장성을 갖는다는 것을 보일 때, 고윳값의 중복도가 $(p-1)/2$ 이상이라는 사실로 둘째 고윳값을 제한한다[^3].
- 곱 집합의 크기. $D$-준무작위 군에서 $\vert A\vert\vert B\vert\vert C\vert\gt n^3/D$ 이면 $ABC=G$ 이다. 위 정리를 $A$, $B$, $gC^{-1}$ 에 적용하면 나오고, 유한 단순군의 원소를 짧은 곱으로 쓰는 문제에 쓰인다[^4].

[^1]: W. T. Gowers, "Quasirandom groups", *Combinatorics, Probability and Computing* 17 (2008), 363–387.
[^2]: K. S. Kedlaya, "Large product-free subsets of finite groups", *Journal of Combinatorial Theory, Series A* 77 (1997), 339–343.
[^3]: J. Bourgain, A. Gamburd, "Uniform expansion bounds for Cayley graphs of SL₂(Fₚ)", *Annals of Mathematics* 167 (2008), 625–642.
[^4]: N. Nikolov, L. Pyber, "Product decompositions of quasirandom groups and a Jordan type theorem", *Journal of the European Mathematical Society* 13 (2011), 1063–1077.

# 연관 문서

## 선수지식

- [군의 표현](group-representations.md)
- [준무작위 그래프](quasirandom-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #combinatorics #graph_theory
