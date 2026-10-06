# Szemerédi 정규성 보조정리

# 개요

정규성 보조정리는 모든 그래프의 정점을 거의 같은 크기의 조각으로 나누어, 거의 모든 조각 쌍에서 간선이 무작위 그래프처럼 고르게 퍼지게 할 수 있다는 정리다. 조각의 개수에 그래프 크기와 무관한 상한이 붙으므로, 큰 그래프를 조각 사이 밀도만 적은 자료로 바꿔 부분그래프의 개수를 셀 수 있다.

# 직관

[Turán 정리](turan-theorem.md)는 간선이 충분히 많은 그래프에 삼각형이 있다고 말한다. 삼각형이 몇 개인지 세려고 한다. $n$ 정점 그래프에 간선이 $\delta n^2/2$ 개 있다고 하자. 간선이 확률 $\delta$ 로 독립으로 놓인 무작위 그래프라면 세 정점 쌍이 모두 간선일 확률이 $\delta^3$ 이므로 삼각형은 약 $\delta^3n^3/6$ 개다.

이 셈이 일반 그래프에서는 틀린다. 두 쪽이 각각 $n/2$ 개 정점인 완전이분그래프는 간선이 $n^2/4$ 개로 $\delta=1/2$ 인데 삼각형이 $0$ 개다. 간선의 전체 개수는 간선이 어디 몰려 있는지를 말해 주지 않고, 이 그래프는 간선이 두 쪽 사이에만 있어 삼각형이 들어설 자리가 없다.

간선의 전체 개수로 막혔으니 정점을 조각으로 나누어 조각 쌍마다 밀도를 따로 잰다. 조각 쌍 $(X,Y)$ 안에서 간선이 고르게 퍼졌다는 것은, 너무 작지 않은 부분집합 $X'\subseteq X$ 와 $Y'\subseteq Y$ 를 아무렇게 골라도 그 사이의 밀도가 $(X,Y)$ 전체의 밀도와 가깝다는 뜻으로 적는다. 완전이분그래프를 두 쪽으로 나누면 각 쪽 안의 밀도가 어디서나 $0$ 이고 두 쪽 사이의 밀도가 어디서나 $1$ 이라 이 조건을 만족한다.

조각 쌍이 이 조건을 만족하면 삼각형 개수가 조각 사이 밀도 세 개의 곱으로 돌아온다. 정규성 보조정리는 이런 분할이 조각 수에 $n$ 과 무관한 상한을 두고 모든 그래프에 있다고 말한다.

# 정의

## 간선 밀도

서로소인 $X,Y\subseteq V(G)$ 에 대해 두 집합 사이의 간선 수를 $e(X,Y)$ 라 하고

$$
d(X,Y)=\frac{e(X,Y)}{\vert X\vert\thinspace\vert Y\vert}
$$

를 **간선 밀도**라 한다.

## 정규 쌍

$\varepsilon\gt 0$ 에 대해 쌍 $(X,Y)$ 가 $\varepsilon$ **정규**라는 것은, $\vert X'\vert\ge\varepsilon\vert X\vert$ 와 $\vert Y'\vert\ge\varepsilon\vert Y\vert$ 를 만족하는 모든 $X'\subseteq X$, $Y'\subseteq Y$ 에 대해

$$
\vert d(X',Y')-d(X,Y)\vert\le\varepsilon
$$

인 것이다.

## 정규 분할

분할 $V(G)=V_1\cup\dots\cup V_k$ 가 $\varepsilon$ **정규 분할**이라는 것은 조각의 크기가 서로 $1$ 이하로 다르고, $\varepsilon$ 정규가 아닌 쌍 $(V_i,V_j)$ 의 개수가 $\varepsilon k^2$ 이하인 것이다.

## 정규성 보조정리

**정리.** 모든 $\varepsilon\gt 0$ 과 모든 $m$ 에 대해 $M=M(\varepsilon,m)$ 이 있어, 모든 그래프가 조각 수 $k$ 로 $m\le k\le M$ 인 $\varepsilon$ 정규 분할을 갖는다.

# 성질

## 에너지 증가 논법

분할 $\mathcal P=\lbrace V_1,\dots,V_k\rbrace$ 의 **에너지**를

$$
q(\mathcal P)=\sum_{i,j}\frac{\vert V_i\vert\thinspace\vert V_j\vert}{n^2}d(V_i,V_j)^2
$$

로 둔다. $0\le q(\mathcal P)\le 1$ 이다.

증명의 요지. 분할을 세분하면 에너지가 줄지 않는다. Cauchy–Schwarz 부등식을 조각 안의 밀도에 적용한 결과다. 분할에 $\varepsilon$ 정규가 아닌 쌍이 $\varepsilon k^2$ 개보다 많으면, 각 비정규 쌍의 증인 $X',Y'$ 로 조각들을 동시에 쪼개 에너지를 $\varepsilon^5$ 이상 늘릴 수 있다. 에너지가 $1$ 을 넘지 못하므로 이 세분이 $\varepsilon^{-5}$ 번 안에 멈추고, 멈춘 분할이 정규 분할이다. 세분마다 조각 수가 지수로 늘어나므로 $M$ 은 $\varepsilon^{-1}$ 에 대한 탑 함수 크기가 된다.

## 조각 수의 하한

**정리.** $M(\varepsilon,m)$ 은 $\varepsilon^{-1}$ 에 대한 탑 함수보다 작게 잡을 수 없다[^1].

위 증명이 내놓는 탑 함수 상한이 논법의 낭비가 아니라 정리 자체의 크기라는 뜻이다. 조각 수가 이만큼 크므로 정규성 보조정리는 정점 수가 매우 큰 그래프에서만 뜻이 있다.

## 셈 보조정리

**정리.** 세 조각 $V_1,V_2,V_3$ 의 쌍이 모두 $\varepsilon$ 정규이고 밀도 $d_{ij}=d(V_i,V_j)$ 가 모두 $2\varepsilon$ 이상이면, 세 조각에서 하나씩 고른 삼각형의 개수는

$$
(1-O(\varepsilon))\thinspace d_{12}d_{13}d_{23}\vert V_1\vert\thinspace\vert V_2\vert\thinspace\vert V_3\vert
$$

이상이다.

증명의 요지. $V_1$ 의 점 가운데 $V_2$ 와 $V_3$ 양쪽으로 이웃이 기대한 만큼 있는 것이 대부분이다. 그렇지 않은 점을 모으면 정규성 조건을 위반하는 부분집합이 되기 때문이다. 그런 점 $v$ 마다 그 이웃들 사이의 간선을 세면 $(V_2,V_3)$ 의 정규성이 밀도 $d_{23}$ 을 준다.

## 삼각형 제거 보조정리

**정리.** 모든 $\varepsilon\gt 0$ 에 대해 $\delta\gt 0$ 이 있어, $n$ 정점 그래프의 삼각형이 $\delta n^3$ 개 이하이면 간선 $\varepsilon n^2$ 개를 지워 삼각형 없는 그래프로 만들 수 있다.

증명의 요지. $\varepsilon$ 에 맞춘 정규 분할을 잡고 비정규 쌍의 간선, 조각 안의 간선, 밀도가 $2\varepsilon$ 미만인 쌍의 간선을 모두 지운다. 지운 간선은 $\varepsilon n^2$ 개 규모다. 남은 그래프에 삼각형이 있으면 그 세 조각이 셈 보조정리의 조건을 만족하므로 삼각형이 $n^3$ 에 비례하는 개수로 있어야 하고, $\delta$ 를 작게 잡아 두면 가정과 어긋난다. 따라서 남은 그래프에 삼각형이 없다.

## Roth 정리

**정리.** 양의 상밀도를 갖는 $\mathbb N$ 의 부분집합은 길이 $3$ 의 등차수열을 담는다.

증명의 요지. $A\subseteq\mathbb Z/N$ 에 대해 정점을 $\mathbb Z/N$ 의 세 벌 $X,Y,Z$ 로 두고, $x\in X$ 와 $y\in Y$ 를 $y-x\in A$ 일 때, $y$ 와 $z\in Z$ 를 $z-y\in A$ 일 때, $x$ 와 $z$ 를 $(z-x)/2\in A$ 일 때 잇는다. 삼각형 $(x,y,z)$ 는 $A$ 의 세 원소 $y-x$, $z-y$, $(z-x)/2$ 가 등차수열을 이루는 것과 대응하고, 세 값이 같은 삼각형이 $\vert A\vert N$ 개 있다. 각 간선이 그런 삼각형 하나에만 들어가므로, 삼각형 없는 그래프로 만들려면 간선을 $\vert A\vert N$ 개 지워야 한다. $A$ 의 밀도가 양수이면 이 값이 삼각형 제거 보조정리의 $\varepsilon n^2$ 보다 크고, 따라서 세 값이 다른 삼각형이 있다.

# 활용

- **금지 부분그래프.** 고정 그래프 $H$ 를 담지 않는 그래프의 최대 간선 수를 묻는 문제에서 [Erdős–Stone 정리](erdos-stone-theorem.md)가 이 보조정리로 증명되고, [Turán 정리](turan-theorem.md)의 밀도 상수가 $H$ 의 색칠수로 결정된다.
- **산술 조합론.** Roth 정리의 그래프 증명이 위와 같고, 같은 틀을 초그래프로 올리면 길이 $k$ 의 등차수열에 대한 Szemerédi 정리가 나온다.
- **속성 검사.** 그래프가 삼각형이 없는지 아니면 간선 $\varepsilon n^2$ 개를 지워야 하는지를 가르는 판정이 정점 상수 개를 뽑아 보는 것으로 가능하다. 제거 보조정리가 그 상수를 준다.
- **안정 그래프.** [안정 이론](stable-theories.md)의 안정성 조건을 그래프에 걸면 비정규 쌍이 아예 없는 분할을 얻고 조각 수가 $\varepsilon^{-1}$ 의 다항식으로 줄어든다.

[^1]: W. T. Gowers, "Lower bounds of tower type for Szemerédi's uniformity lemma", Geom. Funct. Anal. 7 (1997), 322–337.

# 연관 문서

## 선수지식

- [Turán 정리](turan-theorem.md)

## 더 알아보기

- [Erdős–Stone 정리](erdos-stone-theorem.md)

#combinatorics #graph_theory #number_theory
