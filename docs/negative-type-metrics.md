# 음형 거리

# 개요

**음형 거리(metric of negative type)** 는 점들을 Euclid 공간의 점으로 놓고 두 점 사이 거리의 제곱을 거리로 삼았을 때, 그것이 삼각부등식을 만족하는 거리다. 평면의 점 셋으로 이런 거리를 만들려면 세 점이 이루는 각이 하나도 둔각이면 안 된다. [가장 희소한 절단](sparsest-cut.md)의 반정부호 완화가 내놓는 거리가 이 꼴이고, 음형 거리를 절단으로 얼마나 잘 쪼갤 수 있는지가 그 완화의 근사비를 정한다.

# 직관

수직선 위의 점 $0,1,2$ 에서 거리의 제곱은 $1$, $1$, $4$ 다. 가운데 점의 각이 $180^\circ$ 라 $4\gt 1+1$ 이 되어, 제곱한 값은 삼각부등식을 어긴다.

정사각형의 네 꼭짓점 $(0,0)$, $(1,0)$, $(1,1)$, $(0,1)$ 에서는 거리의 제곱이 이웃한 꼭짓점 사이 $1$, 마주 보는 꼭짓점 사이 $2$ 다. 어느 세 꼭짓점도 각이 $90^\circ$ 이하이고, 제곱한 값이 삼각부등식을 만족한다.

정사각형의 꼭짓점은 좌표가 $0$ 과 $1$ 이라, 거리의 제곱이 좌표가 다른 자리의 수와 같다. 그러므로 이 거리는 좌표마다 $0$ 인 쪽과 $1$ 인 쪽으로 나누는 절단 두 개를 더한 것이다.

# 정의

## 음형 거리

유한 집합 $X$ 위의 거리 $d$ 에 대해 다음을 만족하는 점 $v\_x\in\mathbb R^m$ 이 있으면 $d$ 를 **음형 거리** 또는 $\ell\_2^2$ 거리라 한다.

$$
d(x,y)=\Vert v\_x-v\_y\Vert\_2^2\qquad(x,y\in X)
$$

$d$ 가 거리이므로 $v$ 들은 다음 삼각부등식을 만족한다.

$$
\Vert v\_x-v\_z\Vert^2\le\Vert v\_x-v\_y\Vert^2+\Vert v\_y-v\_z\Vert^2
$$

이것은 $v\_y$ 에서의 각이 $90^\circ$ 이하라는 것과 같다. 직관 절의 정사각형은 음형 거리이고, 수직선의 세 점은 아니다.

## Schoenberg 판정

$d$ 가 $\ell\_2^2$ 거리일 필요충분조건은 합이 $0$ 인 모든 실수 $b\_x$ 에 대해 다음이 성립하는 것이다(Schoenberg).

$$
\sum\_{x,y\in X}b\_xb\_y\thinspace d(x,y)\le 0
$$

이 이차형식이 음의 준정부호라는 데서 이름이 나왔다.

# 성질

## ℓ₁ 거리와의 포함

$\ell\_1$ 거리, 곧 점을 $\ell\_1$ 노름 공간에 놓은 거리는 모두 음형 거리다. $\ell\_1$ 거리는 절단 거리의 음 아닌 결합이고, 절단 거리 하나는 직관 절처럼 $0$ 과 $1$ 의 좌표 하나로 적혀 $\ell\_2^2$ 거리이며, $\ell\_2^2$ 거리의 음 아닌 결합은 좌표를 이어 붙여 다시 $\ell\_2^2$ 거리가 된다.

## Goemans–Linial 추측과 그 반례

Goemans–Linial 추측(Goemans–Linial conjecture)은 모든 음형 거리가 왜곡이 상수인 $\ell\_1$ 매장을 갖는다는 진술이다. Khot 과 Vishnoi 는 점 $n$ 개의 음형 거리 가운데 $\ell\_1$ 매장의 왜곡이 $(\log\log n)^c$ 이상인 것을 만들어 이 추측을 부정했다[^1].

## Arora–Lee–Naor 정리

정리. 점이 $n$ 개인 음형 거리는 $\ell\_2$ 에, 그러므로 $\ell\_1$ 에 왜곡 $O(\sqrt{\log n}\thinspace\log\log n)$ 으로 매장된다[^2].

일반 거리에 대한 [Bourgain 매장 정리](bourgain-embedding-theorem.md)의 $O(\log n)$ 보다 작다. 그러므로 가장 희소한 절단의 반정부호 완화가 주는 음형 거리를 이 매장으로 $\ell\_1$ 에 옮기고 절단으로 쪼개면, 일반 수요에서 근사비 $O(\sqrt{\log n}\thinspace\log\log n)$ 이 나온다.

## ARV 구조 정리

정리(ARV 구조 정리, Arora–Rao–Vazirani structure theorem). 단위 공 안의 음형 거리 $n$ 점 가운데 서로의 거리 평균이 상수 이상이면, 크기가 $\Omega(n)$ 이고 두 집합 사이 모든 거리가 $\Omega(1/\sqrt{\log n})$ 이상인 두 부분집합이 있다[^3].

이 두 집합 사이를 가르는 절단이 균일한 가장 희소한 절단의 $O(\sqrt{\log n})$ 근사를 준다.

# 활용

- 절단 문제의 반정부호 완화. 가장 희소한 절단, 균형 분리, 최소 이등분의 반정부호 완화에 $\ell\_2^2$ 삼각부등식을 더하고, 이 문서의 매장과 구조 정리로 반올림한다.
- [유일게임 추측](unique-games.md)의 정수성 간격. Khot–Vishnoi 의 반례는 유일게임 문제의 반정부호 완화가 정수해와 크게 어긋나는 예에서 나왔다.

[^1]: S. Khot, N. K. Vishnoi, "The unique games conjecture, integrality gap for cut problems and embeddability of negative-type metrics into ℓ1", *Journal of the ACM* 62 (2015), Article 8.
[^2]: S. Arora, J. R. Lee, A. Naor, "Euclidean distortion and the sparsest cut", *Journal of the American Mathematical Society* 21 (2008), 1–21.
[^3]: S. Arora, S. Rao, U. Vazirani, "Expander flows, geometric embeddings and graph partitioning", *Journal of the ACM* 56 (2009), Article 5.

# 연관 문서

## 선수지식

- [가장 희소한 절단](sparsest-cut.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #graph_theory #functional_analysis
