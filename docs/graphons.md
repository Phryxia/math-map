# 그래폰

# 개요

**그래폰(graphon)** 은 정점 수가 커지는 그래프 열의 극한으로 나타나는 대칭 가측함수 $W\colon\lbrack 0,1\rbrack^2\to\lbrack 0,1\rbrack$ 이다. 그래프를 인접행렬의 계단함수로 바꾸면 정점 수가 다른 그래프들이 한 공간에 놓이고, 부분그래프 밀도의 수렴이 그 공간의 거리 수렴과 같아진다. 이 거리 아래에서 그래폰 공간은 콤팩트하므로 조밀 그래프의 극단 문제가 그래폰 위 변분 문제로 바뀐다.

# 직관

정점 수가 다른 두 그래프가 얼마나 닮았는지 재려고 한다. 양쪽이 각각 $n$ 개 정점인 완전이분그래프와 양쪽이 각각 $2n$ 개인 완전이분그래프는 같은 모양이지만 정점 집합의 크기가 달라 정점끼리 짝지을 수 없다.

정점을 짝짓는 대신 작은 그래프를 집어넣는 방법의 수를 센다. 고정 그래프 $H$ 마다 $H$ 의 정점을 $G$ 의 정점으로 보내 간선을 간선으로 보내는 사상의 비율을 $t(H,G)$ 라 하면, 두 완전이분그래프는 모든 $H$ 에 대해 같은 값을 준다. 삼각형에서는 둘 다 $0$ 이고 간선에서는 둘 다 $1/2$ 다. 그러면 그래프 열 $G\_1,G\_2,\dots$ 의 정점 수가 커지면서 모든 $H$ 에 대해 $t(H,G\_n)$ 이 수렴할 때 그 극한이 무엇인지 물을 수 있다. 정점 수가 무한히 커지므로 극한은 그래프가 아니다.

인접행렬을 정사각형 그림으로 옮긴다. $n$ 정점 그래프의 $n\times n$ 인접행렬에서 $(i,j)$ 칸을 $\lbrack 0,1\rbrack^2$ 안의 변 $1/n$ 인 정사각형으로 놓고, 간선이면 그 정사각형에서 $1$, 아니면 $0$ 인 함수를 만든다. 완전이분그래프에서 이 함수는 $\lbrack 0,1/2\rbrack\times\lbrack 1/2,1\rbrack$ 과 그 대칭 위치에서 $1$ 이고 나머지에서 $0$ 이며, 정점 수 $n$ 이 무엇이든 같은 함수다. 정점 수가 다른 두 그래프가 하나의 함수로 모였다.

간선이 확률 $1/2$ 로 독립으로 놓인 그래프 열에서는 이 함수가 $n$ 이 커져도 $0$ 과 $1$ 만 취하고 상수 $1/2$ 에 점마다 가까워지지 않는다. 그러나 $t(H,G\_n)$ 은 모든 $H$ 에 대해 상수함수 $1/2$ 가 주는 값으로 간다. 그래서 극한은 점마다의 수렴이 아니라 밀도의 수렴으로 정한다.

# 정의

## 그래폰

**그래폰**은 대칭 가측함수 $W\colon\lbrack 0,1\rbrack^2\to\lbrack 0,1\rbrack$ 이다. 대칭이란 거의 모든 $(x,y)$ 에서 $W(x,y)=W(y,x)$ 인 것이다. 그래폰 전체를 $\mathcal W\_0$ 이라 쓴다.

$n$ 정점 그래프 $G$ 의 정점을 $1,\dots,n$ 으로 번호 붙이고 구간을 $I\_i=\lbrack (i-1)/n,i/n\rbrack$ 으로 자르면, $x\in I\_i$ 와 $y\in I\_j$ 에서

$$
W\_G(x,y)=\begin{cases}1&ij\in E(G)\cr 0&\text{그 외}\end{cases}
$$

인 그래폰 $W\_G$ 가 정해진다. 이것을 $G$ 의 **계단 그래폰**이라 한다.

## 준동형 밀도

유한 단순그래프 $H$ 와 그래폰 $W$ 에 대해

$$
t(H,W)=\int\_{\lbrack 0,1\rbrack^{V(H)}}\thinspace\prod\_{ij\in E(H)}W(x\_i,x\_j)\thinspace\prod\_{i\in V(H)}dx\_i
$$

를 $H$ 의 **준동형 밀도**라 한다. 그래프 $G$ 에 대해서는 $t(H,G)=t(H,W\_G)$ 이고, 이 값은 $V(H)$ 에서 $V(G)$ 로 가는 사상 가운데 간선을 간선으로 보내는 것의 비율이다.

## 좌 수렴

그래프 열 $(G\_n)$ 이 그래폰 $W$ 로 **좌 수렴**한다는 것은 모든 유한 단순그래프 $H$ 에 대해 $t(H,G\_n)\to t(H,W)$ 인 것이다.

## cut 노름과 cut 거리

가측함수 $U\colon\lbrack 0,1\rbrack^2\to\mathbb R$ 의 **cut 노름**은

$$
\Vert U\Vert\_\square=\sup\_{S,T\subseteq\lbrack 0,1\rbrack}\thinspace\left\vert\int\_{S\times T}U(x,y)\thinspace dx\thinspace dy\right\vert
$$

이고 상한은 가측집합 $S,T$ 에 대해 잡는다. 측도보존 전단사 $\varphi\colon\lbrack 0,1\rbrack\to\lbrack 0,1\rbrack$ 에 대해 $W^\varphi(x,y)=W(\varphi(x),\varphi(y))$ 로 두면, 두 그래폰의 **cut 거리**는

$$
\delta\_\square(W,W')=\inf\_\varphi\thinspace\Vert W-W'^{\thinspace\varphi}\Vert\_\square
$$

다. $\delta\_\square(W,W')=0$ 인 그래폰을 같은 것으로 보아 얻은 공간을 $\widetilde{\mathcal W}\_0$ 이라 쓴다.

# 성질

## 좌 수렴과 cut 거리의 동치

**정리.** 그래프 열 $(G\_n)$ 이 $W$ 로 좌 수렴하는 것과 $\delta\_\square(W\_{G\_n},W)\to 0$ 인 것은 같다[^1].

증명의 요지. 한 방향은 준동형 밀도가 cut 거리에 대해 Lipschitz 라는 추정에서 나온다. $H$ 의 간선마다 $W$ 를 하나씩 $W'$ 로 바꾸어 가면 $\vert t(H,W)-t(H,W')\vert\le\vert E(H)\vert\thinspace\delta\_\square(W,W')$ 가 된다. 반대 방향은 아래 콤팩트성과 샘플링으로 얻는다. 모든 $H$ 에서 밀도가 같은 두 그래폰은 cut 거리가 $0$ 이므로, 밀도가 수렴하는 열의 cut 거리 집적점이 하나뿐이다.

## 콤팩트성

**정리.** $(\widetilde{\mathcal W}\_0,\delta\_\square)$ 는 콤팩트하다[^1].

증명의 요지. 아래 약 정규성 보조정리가 모든 그래폰을 조각 수 $m(\varepsilon)$ 인 계단 그래폰으로 $\varepsilon$ 안에 근사한다. 조각 수가 $\varepsilon$ 에만 의존하므로 각 $\varepsilon$ 마다 유한 개의 $\varepsilon$ 그물을 만들 수 있고, 조각 사이 밀도값을 $\varepsilon$ 격자로 반올림하면 그물이 유한 집합이 된다. 완비성은 cut 노름 Cauchy 열에서 약수렴 부분열을 뽑아 얻는다.

## 약 정규성 보조정리

**정리.** 모든 $\varepsilon\gt 0$ 과 모든 그래폰 $W$ 에 대해 조각 수가 $2^{O(\varepsilon^{-2})}$ 이하인 계단 그래폰 $W'$ 가 있어 $\Vert W-W'\Vert\_\square\le\varepsilon$ 이다[^2].

증명의 요지. 조각 쌍마다 밀도를 맞춘 계단함수가 cut 노름에서 $\varepsilon$ 보다 멀면, 그 거리를 증언하는 집합 쌍 $(S,T)$ 로 분할을 쪼개어 $\Vert W'\Vert\_2^2$ 를 $\varepsilon^2$ 이상 늘릴 수 있다. 이 값이 $1$ 을 넘지 못하므로 $\varepsilon^{-2}$ 번 안에 멈춘다. 쪼갤 때마다 조각 수가 두 배가 되므로 조각 수 상한이 지수이고, [정규성 보조정리](szemeredi-regularity-lemma.md)의 탑 함수보다 작다. 조각 쌍마다 밀도를 맞추는 조건이 정규성보다 약한 대신 조각 수가 줄었다.

## 샘플링

그래폰 $W$ 에서 $\mathbb G(k,W)$ 를 다음으로 뽑는다. $x\_1,\dots,x\_k$ 를 $\lbrack 0,1\rbrack$ 에서 독립 균등하게 뽑고, 각 쌍 $ij$ 를 확률 $W(x\_i,x\_j)$ 로 독립으로 잇는다.

**정리.** $k\to\infty$ 일 때 $\delta\_\square(W\_{\mathbb G(k,W)},W)\to 0$ 이 확률 $1$ 로 성립한다[^1].

증명의 요지. $t(H,\mathbb G(k,W))$ 의 기댓값이 $t(H,W)$ 와 $O(\vert V(H)\vert^2/k)$ 안에서 같고, 집중 부등식이 편차를 누른다. 모든 $H$ 에서 밀도가 수렴하므로 위 동치 정리가 cut 거리 수렴을 준다.

## 유일성

**정리.** 두 그래폰이 모든 유한 단순그래프에서 같은 준동형 밀도를 가지면 측도보존 변환으로 서로 옮겨지는 것과 거의 같고, 곧 $\delta\_\square$ 가 $0$ 이다[^3].

증명의 요지. 밀도가 모두 같으면 샘플링 분포 $\mathbb G(k,W)$ 가 모든 $k$ 에서 일치한다. 두 그래폰에서 뽑은 표본의 분포가 같으므로 위 샘플링 정리의 극한이 같고, 그 극한이 cut 거리에서 유일하다.

# 활용

- **극단 그래프 이론.** 간선 밀도를 고정했을 때 삼각형 밀도의 최솟값 같은 문제를 그래폰 공간의 최소화로 적는다. 콤팩트성이 최소점의 존재를 주고, 최소점의 모양에서 극단 그래프 열의 구조가 읽힌다. [Turán 정리](turan-theorem.md)의 밀도 상수와 [Erdős–Stone 정리](erdos-stone-theorem.md)의 극단 밀도는 $t(H,W)=0$ 인 그래폰 가운데 간선 밀도를 최대화하는 문제의 답이다.
- **정규성 보조정리.** 약 정규성 보조정리의 그래폰 꼴이 조각 수를 지수로 줄인다. [정규성 보조정리](szemeredi-regularity-lemma.md)의 결론을 쓰는 곳에서 조각 쌍마다의 밀도만 필요하면 이 꼴로 바꿀 수 있다.
- **교환 가능 무작위 그래프.** 정점의 번호를 바꾸어도 분포가 변하지 않는 무한 무작위 그래프는 그래폰 하나와 $\mathbb G(\infty,W)$ 로 적힌다. Aldous–Hoover 표현 정리가 이 대응을 준다[^4].
- **속성 검사.** 그래프의 속성을 그래폰 공간의 부분집합으로 보면, 그 부분집합이 닫혀 있을 때 정점 상수 개를 뽑아 보는 검사가 가능하다. 샘플링 정리가 뽑은 부분그래프와 전체의 cut 거리를 눌러 준다.

[^1]: C. Borgs, J. T. Chayes, L. Lovász, V. T. Sós, K. Vesztergombi, "Convergent sequences of dense graphs I: Subgraph frequencies, metric properties and testing", Adv. Math. 219 (2008), 1801–1851.
[^2]: A. Frieze, R. Kannan, "Quick approximation to matrices and applications", Combinatorica 19 (1999), 175–220.
[^3]: C. Borgs, J. T. Chayes, L. Lovász, "Moments of two-variable functions and the uniqueness of graph limits", Geom. Funct. Anal. 19 (2010), 1597–1619.
[^4]: D. J. Aldous, "Representations for partially exchangeable arrays of random variables", J. Multivariate Anal. 11 (1981), 581–598.

# 연관 문서

## 선수지식

- [Szemerédi 정규성 보조정리](szemeredi-regularity-lemma.md)

## 더 알아보기

- [Sidorenko 추측](sidorenko-conjecture.md)

#combinatorics #graph_theory #measure_theory
