# Oliver 고정점 정리

# 개요

**Oliver 고정점 정리(Oliver's fixed point theorem)** 는 유한군 $G$ 가 $p$-군인 정규부분군 $P$ 를 가지고 $G/P$ 가 순환군이면, $G$ 가 $\mathbb Z/p$ 계수 호몰로지가 한 점과 같은 유한 단체 복합체에 단체적으로 작용할 때 고정된 부분복합체의 [Euler 지표](euler-characteristic.md)가 $1$ 이라는 정리다. R. Oliver 가 1975 년에 증명했다[^1].

증명은 $p$-군의 고정점에 대한 P. A. Smith 의 정리와 순환군의 생성원에 대한 [Lefschetz 고정점 정리](lefschetz-fixed-point.md)를 차례로 쓴다. 조합론에서는 그래프 성질의 결정 나무 하한에 쓰인다.

# 직관

유한군이 공간에 작용할 때 모든 원소가 함께 고정하는 점이 있는지 묻는다. 군이 원소 하나로 생성되면 그 원소 $g$ 의 고정점만 보면 된다. 공간의 호몰로지가 한 점과 같으면 $g$ 가 호몰로지에 주는 준동형은 $0$ 차에서 항등이고 나머지에서 $0$ 이므로 Lefschetz 수가 $1$ 이고, $g$ 의 고정점이 있다.

군이 순환군이 아니면 이 논증을 바로 쓸 수 없다. 교대군 $A_5$ 는 고정점 없이 유한 축약 가능 복합체에 작용한다[^1]. 그래서 군을 두 층으로 나눈다. $p$-군 $P$ 의 고정점 집합은 Smith 의 정리로 다시 $\mathbb Z/p$ 계수 호몰로지가 한 점과 같고, 그 위에 남은 순환군 $G/P$ 가 작용하므로 첫 문단의 논증이 적용된다.

# 정의

- 유한 단체 복합체 $X$ 가 **$\mathbb Z/p$-비순환($\mathbb Z/p$-acyclic)** 이라는 것은 $\mathbb Z/p$ 계수의 축소 [호몰로지](homology.md) $\tilde H_i(X;\mathbb Z/p)$ 가 모든 $i$ 에서 $0$ 인 것이다. 축약 가능한 복합체는 $\mathbb Z/p$-비순환이다.
- 군 $G$ 가 $X$ 에 **단체적으로 작용(acts simplicially)** 한다는 것은 각 원소가 꼭짓점을 꼭짓점으로 보내고 단체를 단체로 보내는 것이다. 무게중심 세분을 하면, 원소가 단체를 집합으로 고정할 때 그 단체의 점을 모두 고정하도록 할 수 있다. 그러면 고정점 집합 $X^G$ 는 부분복합체다.
- $p$ 가 소수일 때 위수가 $p$ 의 거듭제곱인 군을 **$p$-군($p$-group)** 이라 한다.

# 성질

## Smith 정리

정리(P. A. Smith). $p$-군 $P$ 가 $\mathbb Z/p$-비순환인 유한 단체 복합체 $X$ 에 단체적으로 작용하면 $X^P$ 도 $\mathbb Z/p$-비순환이고, 특히 비어 있지 않다[^2].

증명의 요지. $p$-군 $P$ 는 위수 $p$ 의 중심 부분군 $Z$ 를 가지고 $X^P=(X^Z)^{P/Z}$ 이므로, 위수에 대한 귀납법으로 위수 $p$ 의 순환군에 대해 증명하면 된다. 고정되지 않은 단체는 크기 $p$ 의 궤도로 나뉜다. 사슬 복합체를 고정된 부분과 자유로운 부분으로 나누고 $\mathbb Z/p$ 계수에서 Euler 지표와 호몰로지를 세는 Smith 의 완전열로 결론이 나온다.

## Oliver 정리

정리(Oliver). 유한군 $G$ 가 $p$-군인 정규부분군 $P$ 를 가지고 $G/P$ 가 순환군이며, $G$ 가 $\mathbb Z/p$-비순환인 유한 단체 복합체 $X$ 에 단체적으로 작용하면 $\chi(X^G)=1$ 이다[^1].

증명의 요지. $Y=X^P$ 는 Smith 정리로 $\mathbb Z/p$-비순환이다. 보편 계수 정리로 $Y$ 의 정수 계수 축소 호몰로지는 자유 부분의 계수(rank)가 $0$ 이므로 유리수 계수 축소 호몰로지가 $0$ 이다. $G/P$ 의 생성원 $g$ 가 $Y$ 에 작용하고 $Y^g=X^G$ 다. 유리수 계수의 Lefschetz 수는 $0$ 차의 대각합 $1$ 뿐이다. 무게중심 세분 뒤에는 $i$ 차 사슬에 대한 $g$ 의 대각합이 $g$ 가 고정하는 $i$ 차 단체의 개수이므로, Hopf 대각합 공식(Hopf trace formula)으로 Lefschetz 수가 $\chi(Y^g)$ 와 같다. 따라서 $\chi(X^G)=1$ 이고 $X^G$ 는 비어 있지 않다.

## 군의 조건

Oliver 는 이 조건이 꼭 필요함도 보였다. $G$ 가 위 꼴의 군을 소수 $q$ 의 $q$-군으로 확장한 꼴이 아니면, $G$ 가 고정점 없이 작용하는 유한 축약 가능 복합체가 있다[^1].

# 활용

- [Aanderaa–Karp–Rosenberg 추측](evasiveness-conjecture.md). J. Kahn, M. Saks, D. Sturtevant 는 회피적이 아닌 단조 그래프 성질의 복합체가 축약 가능함을 보이고, $n$ 이 소수의 거듭제곱일 때 유한체의 아핀 변환군에 이 정리를 적용해 고정점이 있다는 결론으로 모순을 만들었다.

[^1]: R. Oliver, "Fixed-point sets of group actions on finite acyclic complexes", Commentarii Mathematici Helvetici 50 (1975), 155–177.
[^2]: P. A. Smith, "Fixed-point theorems for periodic transformations", American Journal of Mathematics 63 (1941), 1–8.

# 연관 문서

## 선수지식

- [Lefschetz 고정점 정리](lefschetz-fixed-point.md)
- [Sylow 정리](sylow-theorems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #group_theory #combinatorics
