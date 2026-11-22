# Bourgain 매장 정리

# 개요

**Bourgain 매장 정리(Bourgain's embedding theorem)** 는 점이 $n$ 개인 [거리 공간](metric-spaces.md)이면 어느 것이든 거리를 $O(\log n)$ 배 안에서만 바꾸며 좌표 공간에 옮길 수 있다는 정리다. 도시 $n$ 곳 사이의 도로 거리는 표 하나로 주어질 뿐 좌표가 없어서, 점을 좌표로 다루는 계산을 바로 쓸 수 없다. Bourgain 은 무작위로 고른 점 집합들까지의 거리를 좌표로 삼으면 어느 두 도시의 거리도 $O(\log n)$ 배 넘게 틀어지지 않음을 보였다.

# 직관

네 점 $a,b,c,d$ 가 이 순서로 고리를 이루고, 이웃한 점 사이 거리가 $1$, 마주 보는 점 사이 거리가 $2$ 인 거리 공간을 수직선에 옮기려 한다. $a$ 까지의 거리를 좌표로 삼으면 $a,b,c,d$ 가 $0,1,2,1$ 로 간다. 삼각부등식으로 두 점의 좌표 차는 원래 거리를 넘지 않는다. 그러나 $b$ 와 $d$ 는 거리가 $2$ 인데 같은 좌표 $1$ 로 간다.

$b$ 까지의 거리를 둘째 좌표로 더하면 네 점은 $(0,1)$, $(1,0)$, $(2,1)$, $(1,2)$ 로 간다. 두 좌표 차의 절댓값을 더한 거리로 재면 마주 보는 점 사이는 $2$ 로 그대로이고, 이웃한 점 사이는 $2$ 로 두 배가 된다. 좌표 하나하나는 거리를 늘리지 않고, 좌표를 늘리면 줄어들던 쌍이 살아난다.

점이 많으면 어느 점까지의 거리를 좌표로 삼을지 정하기 어렵다. Bourgain 은 한 점 대신 무작위로 고른 점 집합까지의 거리를 쓰고, 집합의 크기를 $2,4,8,\dots$ 의 여러 규모로 고른다. 그러면 가까운 쌍은 작은 집합이, 먼 쌍은 큰 집합이 떼어 놓는다.

# 정의

## 왜곡

거리 공간 $(X,d)$ 에서 노름 공간 $(Y,\Vert\cdot\Vert)$ 로 가는 단사 $f$ 가 어떤 $r\gt 0$ 에 대해 모든 $x,y$ 에서 다음을 만족할 때, 가능한 $D$ 의 최솟값을 $f$ 의 **왜곡(distortion)** 이라 한다.

$$
r\thinspace d(x,y)\le\Vert f(x)-f(y)\Vert\le Dr\thinspace d(x,y)
$$

$X$ 를 $Y$ 에 왜곡 $D$ 로 옮기는 $f$ 를 왜곡 $D$ 의 **매장(embedding)** 이라 한다. 직관 절의 두 좌표 사상은 $\ell\_1$ 노름 $\Vert u\Vert\_1=\sum\_i\vert u\_i\vert$ 에 대해 $r=1$ 이고 왜곡이 $2$ 다.

## Fréchet 좌표

점 집합 $S\subseteq X$ 가 공집합이 아닐 때 $d(x,S)=\min\_{s\in S}d(x,s)$ 를 $S$ 에 대한 **Fréchet 좌표(Fréchet coordinate)** 라 한다. 삼각부등식으로 $\vert d(x,S)-d(y,S)\vert\le d(x,y)$ 이다. 직관 절의 두 좌표는 $S=\lbrace a\rbrace$ 와 $S=\lbrace b\rbrace$ 에 대한 Fréchet 좌표다.

# 성질

## Bourgain 정리

정리(Bourgain). 점이 $n$ 개인 거리 공간은 모두 $\ell\_1$ 에, 그리고 $1\le p\le\infty$ 인 모든 $\ell\_p$ 에 왜곡 $O(\log n)$ 으로 매장된다[^1].

증명의 요지. $L=\lceil\log\_2n\rceil$ 로 둔다. $j=1,\dots,L$ 마다 각 점을 확률 $2^{-j}$ 로 독립적으로 넣은 무작위 집합 $S\_j$ 를 만들고, $f(x)=\bigl(d(x,S\_1),\dots,d(x,S\_L)\bigr)$ 로 둔다.

- 위쪽. 좌표마다 $\vert d(x,S\_j)-d(y,S\_j)\vert\le d(x,y)$ 이므로 $\Vert f(x)-f(y)\Vert\_1\le L\thinspace d(x,y)$ 다.
- 아래쪽. $\rho\_t$ 를 $x$ 둘레의 공과 $y$ 둘레의 공이 둘 다 점을 $2^t$ 개 이상 담는 가장 작은 반지름으로 두고, $d(x,y)/2$ 를 넘으면 $d(x,y)/2$ 로 자른다. 규모 $j\approx L-t$ 의 집합은 상수 확률로 한쪽 공의 반지름 $\rho\_t$ 안에 점을 갖고 다른 쪽 공의 반지름 $\rho\_{t-1}$ 안에는 점을 갖지 않는다. 이때 그 좌표의 차가 $\rho\_t-\rho\_{t-1}$ 이상이고, $t$ 에 대해 더하면 기댓값이 $c\thinspace d(x,y)$ 이상이다.

좌표를 $O(\log n)$ 번 독립적으로 반복해 평균하면 모든 쌍에서 동시에 아래쪽 부등식이 높은 확률로 성립하고, 왜곡은 $O(L)=O(\log n)$ 이다.

## 차원과 알고리즘

Linial, London, Rabinovich 는 위 증명의 좌표가 $O(\log^2n)$ 개로 충분하고 무작위 다항 시간 알고리즘으로 매장을 만든다는 것을 보였다[^2]. [Johnson–Lindenstrauss 보조정리](johnson-lindenstrauss-lemma.md)는 이미 Euclid 공간에 있는 점의 차원을 줄이는 정리이고, Bourgain 정리는 좌표가 없는 거리 공간에 좌표를 처음 주는 정리다.

## 왜곡의 하한

정리. 차수가 일정한 [Expander 그래프](expander-graphs.md)의 최단 경로 거리는 $\ell\_1$ 과 $\ell\_2$ 에 왜곡 $\Omega(\log n)$ 이 아니면 매장되지 않는다[^2].

증명의 요지. $\ell\_1$ 거리는 절단 거리의 양의 결합이다. 그래서 $\ell\_1$ 에 매장된 점에서는, 간선 길이의 합을 모든 쌍의 거리 합으로 나눈 비가 어떤 절단의 간선 수를 그 절단이 가르는 쌍의 수로 나눈 비 이상이다. Expander 그래프에서 이 절단의 비는 $\Omega(1/n)$ 이다. 원래 거리에서는 간선 길이의 합이 $O(n)$ 이고 대부분의 두 점이 거리 $\Omega(\log n)$ 이라 쌍의 거리 합이 $\Omega(n^2\log n)$ 이므로, 비가 $O(1/(n\log n))$ 이다.

두 비가 $\log n$ 배 어긋나므로 왜곡은 $\Omega(\log n)$ 이다. $\ell\_2$ 는 $\ell\_1$ 에 거리를 그대로 두고 매장되므로 $\ell\_2$ 에서도 같은 하한이 나온다. 그러므로 $O(\log n)$ 은 상수배를 빼면 더 줄일 수 없다.

# 활용

- [다품종 흐름](multicommodity-flow.md)의 흐름과 절단의 차이. 최대 동시 흐름의 쌍대 문제가 주는 거리 공간을 $\ell\_1$ 에 매장하고 절단으로 쪼개면, [가장 희소한 절단](sparsest-cut.md)의 값이 최대 동시 흐름의 $O(\log k)$ 배 이하임이 나온다. 품종의 끝점 $k$ 개에만 집중한 Bourgain 매장을 쓴다.
- [근사 알고리즘](approximation-algorithms.md). 거리를 입력으로 받는 문제를 좌표 공간의 문제로 바꾸어 $O(\log n)$ 배 안의 근사를 얻는다. 거리 공간을 나무 거리로 옮기는 확률적 나무 매장(probabilistic tree embedding)도 같은 쓰임이다.
- [Banach 공간](banach-spaces.md)의 국소 이론. 유한 거리 공간을 노름 공간에 넣는 왜곡이 노름 공간의 [Rademacher type](rademacher-type.md)과 여형(cotype)과 이어지고, 이 연결에서 Ribe 프로그램(Ribe program)이 나왔다.

[^1]: J. Bourgain, "On Lipschitz embedding of finite metric spaces in Hilbert space", *Israel Journal of Mathematics* 52 (1985), 46–52.
[^2]: N. Linial, E. London, Y. Rabinovich, "The geometry of graphs and some of its algorithmic applications", *Combinatorica* 15 (1995), 215–245.

# 연관 문서

## 선수지식

- [거리 공간](metric-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #combinatorics #functional_analysis
