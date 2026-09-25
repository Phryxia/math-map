# Tutte 다항식

# 개요

Tutte 다항식은 [그래프](graphs.md)에 두 변수 다항식 $T(G;x,y)$ 를 대응시키는 불변량이다. 채색 다항식, 흐름 다항식, 신장트리 개수, 신뢰도 다항식이 모두 이 하나의 다항식에 변수를 대입한 값이다.

삭제-축약 점화식을 만족하는 그래프 불변량은 전부 Tutte 다항식의 값매김이라는 보편성 정리가 이 위치를 설명한다. 정의는 [matroid](matroids.md) 의 랭크 함수만 쓰므로 그래프를 넘어 matroid 로 그대로 확장된다.

# 직관

삼각형 $K_3$ 를 $k$ 색으로 칠하는 방법은 $k(k-1)(k-2)$ 가지다. 간선 하나를 골라 세는 방법도 있다. 간선 $e=uv$ 를 지운 그래프의 색칠은 $u$ 와 $v$ 의 색이 같은 것과 다른 것으로 나뉘고, 같은 것은 $e$ 를 축약한 그래프의 색칠과 일대일 대응한다. 그러므로 채색 다항식 $P$ 는 다음을 만족한다.

$$
P(G,k)=P(G-e,k)-P(G/e,k)
$$

신장트리 개수 $\tau$ 도 간선 하나로 갈린다. $e$ 를 쓰지 않는 신장트리는 $G-e$ 의 신장트리이고 $e$ 를 쓰는 것은 $G/e$ 의 신장트리에 $e$ 를 붙인 것이므로 $\tau(G)=\tau(G-e)+\tau(G/e)$ 다.

두 양이 같은 꼴의 점화식을 따르고 계수만 다르다. 점화식의 계수를 미정의 문자로 두고 끝까지 풀면 두 양을 한꺼번에 담는 식이 나온다. 그 식이 두 변수 다항식이고, $x$ 와 $y$ 에 수를 넣으면 채색 다항식과 신장트리 개수가 각각 떨어진다.

$K_3$ 에서 확인하면 $T(K_3;x,y)=x^2+x+y$ 다. $x=y=1$ 을 넣으면 $3$ 이고 이것이 $K_3$ 의 신장트리 개수다.

# 정의

## 랭크 함수

그래프 $G=(V,E)$ 와 부분집합 $S\subseteq E$ 에 대해 $c(S)$ 를 간선 $S$ 만 남긴 신장 부분그래프의 연결 성분 수라 하고 **랭크**를 다음으로 정의한다.

$$
r(S)=\lvert V\rvert-c(S)
$$

$r(S)$ 는 $S$ 안의 신장 숲이 쓰는 간선 수이고, $\lvert S\rvert-r(S)$ 는 $S$ 가 만드는 독립 순환의 개수다.

## Tutte 다항식

**Tutte 다항식**은 다음 합이다.[^1]

$$
T(G;x,y)=\sum_{S\subseteq E}(x-1)^{r(E)-r(S)}(y-1)^{\lvert S\rvert-r(S)}
$$

지수 $r(E)-r(S)$ 는 $S$ 에 모자란 간선 수, $\lvert S\rvert-r(S)$ 는 $S$ 에 남는 간선 수다. 정의에 쓴 것이 랭크 함수뿐이므로 같은 식이 matroid 의 Tutte 다항식을 정의한다.

## 고리와 다리

간선 $e$ 가 **고리**라는 것은 양 끝점이 같다는 뜻이고, **다리**라는 것은 $e$ 를 지우면 연결 성분이 늘어난다는 뜻이다. 두 경우에는 삭제와 축약이 같은 그래프를 주지 않으므로 점화식이 따로 필요하다.

# 성질

## 삭제-축약 점화식

**정리.** 간선이 없으면 $T=1$ 이고, 간선 $e$ 에 대해 다음이 성립한다.

$$
T(G;x,y)=\begin{cases}
x\thinspace T(G/e;x,y), & e \text{ 가 다리}\cr
y\thinspace T(G-e;x,y), & e \text{ 가 고리}\cr
T(G-e;x,y)+T(G/e;x,y), & \text{그 밖}
\end{cases}
$$

**증명의 요지.** $e$ 가 고리도 다리도 아니면 $S\subseteq E$ 를 $e\notin S$ 인 것과 $e\in S$ 인 것으로 가른다. 앞쪽 합은 $G-e$ 의 정의식 그대로이고, 뒤쪽은 $r_G(S)=r_{G/e}(S\setminus\lbrace e\rbrace)+1$ 과 $r_G(E)=r_{G/e}(E\setminus\lbrace e\rbrace)+1$ 이 두 지수를 그대로 보존하므로 $G/e$ 의 정의식이 된다.

이 점화식은 간선을 지우는 순서에 의존하지 않는다. 정의식이 순서를 언급하지 않기 때문이다.

## 보편성

**정리 (Tutte).** 그래프 불변량 $f$ 가 간선 없는 그래프에서 $1$ 이고, 어떤 상수 $a,b,\sigma,\tau$ 에 대해 다리에서 $f(G)=a\thinspace f(G/e)$ , 고리에서 $f(G)=b\thinspace f(G-e)$ , 그 밖에서 $f(G)=\sigma f(G-e)+\tau f(G/e)$ 를 만족하면

$$
f(G)=\sigma^{\lvert E\rvert-r(E)}\tau^{r(E)}\thinspace T\Bigl(G;\frac a\tau,\frac b\sigma\Bigr)
$$

이다. 삭제-축약으로 계산되는 불변량은 Tutte 다항식의 값매김뿐이라는 뜻이다.

## 특수화

| 대입 | 값 |
| --- | --- |
| $T(G;1,1)$ | 신장트리 개수 |
| $T(G;2,1)$ | 신장 숲의 개수 |
| $T(G;1,2)$ | 신장 연결 부분그래프의 개수 |
| $T(G;2,2)$ | $2^{\lvert E\rvert}$ |
| $(-1)^{r(E)}k^{c(E)}T(G;1-k,0)$ | 채색 다항식 $P(G,k)$ |
| $(-1)^{\lvert E\rvert-r(E)}T(G;0,1-k)$ | 흐름 다항식 |

연결 그래프에서 $T(G;1,1)=\tau(G)$ 는 [행렬식](determinants.md)으로 계산하는 Kirchhoff 의 matrix-tree 정리와 같은 수를 준다.

## 평면 쌍대

**정리.** $G$ 가 [평면 그래프](planar-graphs.md)이고 $G^\ast$ 가 그 쌍대이면 다음이 성립한다.

$$
T(G^\ast;x,y)=T(G;y,x)
$$

쌍대에서 랭크와 나율리티가 뒤바뀌므로 정의식의 두 지수가 맞바뀐다. 채색 다항식과 흐름 다항식이 평면 그래프에서 서로 바뀌는 것이 이 항등식의 특수화다.

## 계산 복잡도

**정리 (Jaeger–Vertigan–Welsh, 1990).** 고정된 점 $(x,y)$ 에서 $T(G;x,y)$ 를 계산하는 문제는 쌍곡선 $(x-1)(y-1)=1$ 과 특수한 점 아홉 개를 뺀 모든 점에서 $\char35$ P-난해다.[^2]

예외 점에서는 다항 시간에 풀린다. $(1,1)$ 은 matrix-tree 정리가 처리하고, $(-1,-1)$ 은 이분 그래프 여부로 정해지는 부호 $\pm2^{\dim}$ 을 준다. 삭제-축약을 그대로 돌리면 간선 수에 지수인 시간이 걸린다.

# 활용

- **통계물리.** $q$ 상태 Potts 모형의 분배함수가 $T$ 의 값매김이다. 온도와 상태 수가 $(x,y)$ 평면의 한 곡선을 따라 움직이고, 강자성 영역이 $y\gt 1$ 에 대응한다.
- **매듭 불변량.** 교대 매듭의 [Jones 다항식](knot-invariants.md)은 매듭 도형에서 만든 그래프의 Tutte 다항식을 한 변수로 특수화한 것이다.
- **신뢰도.** 각 간선이 독립적으로 확률 $p$ 로 남을 때 그래프가 연결로 남을 확률이 $T$ 의 값매김이다.
- **Matroid 불변량.** 정의가 랭크 함수만 쓰므로 벡터 matroid 와 횡단 matroid 에도 같은 다항식이 있고, 삭제-축약과 쌍대 항등식이 그대로 성립한다.

[^1]: W. T. Tutte, "A contribution to the theory of chromatic polynomials", Canadian Journal of Mathematics 6 (1954), https://doi.org/10.4153/CJM-1954-010-9
[^2]: F. Jaeger, D. L. Vertigan, D. J. A. Welsh, "On the computational complexity of the Jones and Tutte polynomials", Mathematical Proceedings of the Cambridge Philosophical Society 108 (1990), https://doi.org/10.1017/S0305004100068936

# 연관 문서

## 선수지식

- [그래프 색칠](graph-coloring.md)
- [Matroid](matroids.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #combinatorics #complexity
