# 매칭 다면체

# 개요

**매칭 다면체(matching polytope)** 는 그래프의 [매칭](matchings.md)들을 점으로 찍고 그 점들을 감싸는 가장 작은 볼록 도형이다. 삼각형의 간선마다 값 $\tfrac12$ 을 주면 꼭짓점마다 닿는 값의 합이 $1$ 이지만, 이 점은 어떤 매칭에도 대응하지 않는다. 매칭 다면체는 이런 점을 잘라 내는 부등식을 더해 최대 매칭 문제를 [선형계획법](linear-programming.md) 문제로 바꾼다.

# 직관

그래프 $G=(V,E)$ 의 매칭마다 그 간선 집합의 지시벡터를 $\mathbb R^E$ 에 찍고 그 점들의 볼록 껍질을 취한 것이 매칭 다면체다. 최대 가중 매칭 문제는 이 다면체 위에서 선형 목적함수를 최대화하는 문제다.

이분그래프에서는 꼭짓점마다 닿는 간선의 값의 합이 $1$ 이하라는 부등식만으로 이 다면체가 정의된다. 일반 그래프에서는 홀수 크기 꼭짓점 집합마다 부등식을 하나씩 더해야 하고, 그 계가 Edmonds 의 매칭 다면체 정리다.

삼각형 $K_3$ 의 세 간선에 값 $x_e\ge 0$ 을 주고 꼭짓점마다 닿는 두 간선의 합이 $1$ 이하라고 요구한다. $x_e=\tfrac12$ 을 모든 간선에 주면 조건을 만족하고 값의 합이 $\tfrac32$ 이다. 삼각형의 매칭은 간선 하나뿐이므로 매칭의 크기는 $1$ 을 넘지 못한다. 꼭짓점 조건만으로 만든 다면체에 정수가 아닌 꼭짓점 $(\tfrac12,\tfrac12,\tfrac12)$ 이 있다.

세 꼭짓점의 조건을 더하면 각 간선이 두 번 세어져 $2(x_1+x_2+x_3)\le 3$ 이다. 매칭이면 좌변이 짝수이므로 $x_1+x_2+x_3\le\lfloor\tfrac32\rfloor=1$ 이 성립하고, 이 부등식을 더하면 $(\tfrac12,\tfrac12,\tfrac12)$ 이 잘려 나간다. 홀수 크기 꼭짓점 집합 $S$ 마다 같은 계산으로 $S$ 안의 간선 값의 합이 $(\vert S\vert-1)/2$ 이하라는 부등식이 나온다.

# 정의

$x\in\mathbb R^E$ 와 간선 집합 $F$ 에 대해 $x(F)=\sum\_{e\in F}x_e$ 로 쓴다. $\delta(v)$ 는 $v$ 에 닿는 간선의 집합, $E(S)$ 는 두 끝점이 모두 $S$ 에 드는 간선의 집합이다.

$$
P\_{\mathrm{match}}(G)=\mathrm{conv}\lbrace\chi^M:\ M\text{ 은 }G\text{ 의 매칭}\rbrace
$$

를 **매칭 다면체**라 한다. $\chi^M$ 은 $M$ 의 간선에서 $1$, 나머지에서 $0$ 인 벡터다. 완전 매칭만으로 볼록 껍질을 취한 것을 **완전 매칭 다면체(perfect matching polytope)** 라 한다.

$S\subseteq V$, $\vert S\vert$ 가 $3$ 이상의 홀수일 때

$$
x(E(S))\le\frac{\vert S\vert-1}{2}
$$

를 **홀수 집합 부등식(odd set inequality)** 이라 한다.

# 성질

## 이분그래프

> **정리.** $G$ 가 이분그래프이면
> $$
> P\_{\mathrm{match}}(G)=\lbrace x\in\mathbb R^E:\ x\ge 0,\ x(\delta(v))\le 1\ (v\in V)\rbrace
> $$
> 이다.

이분그래프의 꼭짓점-간선 근접행렬은 [완전 단일모듈 행렬](totally-unimodular-matrices.md)이므로 오른쪽 다면체의 꼭짓점이 정수점이고, 정수점은 매칭의 지시벡터다. 쌍대 문제의 정수해에서 König 정리(König's theorem)가 나온다.

## Edmonds 의 매칭 다면체 정리

> **정리 (Edmonds).** 모든 그래프 $G$ 에 대해 $P\_{\mathrm{match}}(G)$ 는 $x\ge 0$, 꼭짓점 부등식 $x(\delta(v))\le 1$, 홀수 집합 부등식 전체로 정의된다.[^1]

증명은 두 가지가 있다. Edmonds 는 blossom 알고리즘이 끝날 때 쌍대 문제의 해를 함께 만들어, 모든 가중치에서 이 계의 최댓값이 매칭으로 달성됨을 보였다. Cunningham 과 Marsh 는 이 계가 [전체 쌍대 정수성](total-dual-integrality.md)을 갖는다는 것을 보였고, Edmonds–Giles 정리에서 다면체의 정수성이 나온다.[^2] 쌍대 정수해에서 Tutte–Berge 공식(Tutte–Berge formula)이 나온다.

완전 매칭 다면체는 $x\ge 0$, $x(\delta(v))=1$, $\vert S\vert$ 가 홀수인 $S$ 마다 $x(\delta(S))\ge 1$ 로 정의된다. $x(\delta(v))=1$ 아래에서 $2x(E(S))+x(\delta(S))=\vert S\vert$ 이므로 두 꼴의 홀수 집합 부등식은 같다.

## 면의 개수와 분리 문제

홀수 집합 부등식은 $2^{\vert V\vert-1}$ 개 가까이 있고, $K\_{2n}$ 에서 그 가운데 지수적으로 많은 것이 면을 정의한다. 그래도 주어진 $x$ 를 자르는 홀수 집합 부등식이 있는지는 다항 시간에 판정된다. Padberg 와 Rao 는 이 문제를 최소 홀수 절단을 찾는 문제로 바꾸어 [Gomory–Hu 트리](gomory-hu-tree.md)로 풀었다.[^3] 분리 문제가 다항 시간이므로 [타원체법](ellipsoid-method.md)으로 매칭 다면체 위의 선형 최적화를 다항 시간에 한다.

## 확장 복잡도

다면체를 더 높은 차원 다면체의 사영으로 적을 때 필요한 부등식의 최소 개수를 **확장 복잡도(extension complexity)** 라 한다. Rothvoss 는 $K_n$ 의 완전 매칭 다면체의 확장 복잡도가 $2^{\Omega(n)}$ 임을 보였다.[^4] 매칭 문제는 다항 시간에 풀리지만 다항 크기의 선형계획 표현은 없다.

# 활용

- **최대 가중 매칭.** blossom 알고리즘은 이 다면체의 원 문제와 쌍대 문제를 함께 푸는 원-쌍대 방법이고, 쌍대 변수가 홀수 집합 부등식마다 하나씩 붙는다.
- **Chvátal–Gomory 절단의 예.** 홀수 집합 부등식은 꼭짓점 부등식을 더하고 내림한 절단이므로, 꼭짓점 부등식만의 다면체의 [Chvátal 계수](chvatal-rank.md)가 $1$ 이다. 정수계획에서 절단평면이 정수 껍질에 한 번에 닿는 대표적인 예다.
- **간선 색칠의 분수판.** 매칭 다면체에서 간선 색칠의 분수 완화가 정의되고, 분수 간선 채색수는 Edmonds 정리로 최대 차수와 홀수 집합에서의 $\max_S\frac{2\vert E(S)\vert}{\vert S\vert-1}$ 가운데 큰 값이다.

[^1]: J. Edmonds, "Maximum matching and a polyhedron with 0,1-vertices", *Journal of Research of the National Bureau of Standards* **69B** (1965), 125–130.
[^2]: W. H. Cunningham, A. B. Marsh, "A primal algorithm for optimum matching", *Mathematical Programming Study* **8** (1978), 50–72.
[^3]: M. W. Padberg, M. R. Rao, "Odd minimum cut-sets and b-matchings", *Mathematics of Operations Research* **7** (1982), 67–80.
[^4]: Thomas Rothvoss, "The matching polytope has exponential extension complexity", *Journal of the ACM* **64** (2017), 41.

# 연관 문서

## 선수지식

- [매칭](matchings.md)
- [전체 쌍대 정수성](total-dual-integrality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #graph_theory #combinatorics
