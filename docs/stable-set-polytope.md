# 안정집합 다면체

# 개요

**안정집합 다면체(stable set polytope)** 는 그래프 $G=(V,E)$ 의 안정집합, 곧 서로 이웃하지 않는 꼭짓점들의 집합마다 그 지시벡터를 $\mathbb R^V$ 의 점으로 두고 그 점들의 볼록 껍질을 취한 다면체 $\mathrm{STAB}(G)$ 다. 독립집합 다면체라고도 한다.

가중치가 가장 큰 안정집합을 찾는 문제는 이 다면체 위의 선형계획이 된다. [정수계획법](integer-programming.md)에서 정수 껍질을 부등식으로 적는 문제의 대표적인 예이고, 어떤 부등식이 필요한지가 그래프의 구조로 정해진다.

# 직관

5 개의 꼭짓점이 원으로 이어진 사이클 $C\_5$ 에서 안정집합은 많아야 $2$ 개의 꼭짓점을 갖는다. 각 꼭짓점에 변수 $x\_i\in\lbrace 0,1\rbrace$ 를 두고 이웃한 두 꼭짓점을 함께 고르지 못하게 하면 제약은 변마다 $x\_i+x\_j\le 1$ 이다. 정수 조건을 풀고 $0\le x\_i\le 1$ 로 바꾸면 모든 $x\_i=1/2$ 이 제약을 만족하고 합이 $5/2$ 로 $2$ 보다 크다.

변 부등식 다섯 개를 더하면 $2\sum x\_i\le 5$ 이고, 왼쪽이 정수인 점에서는 $\sum x\_i\le 2$ 다. 이 부등식을 더하면 $x\_i=1/2$ 이 잘려 나간다. 삼각형에서는 같은 이유로 $x\_1+x\_2+x\_3\le 1$ 이 필요하다. 변 부등식만으로는 부족하고, 홀수 사이클과 클릭에서 오는 부등식이 더 필요하다.

# 정의

$S\subseteq V$ 의 지시벡터를 $\chi^S\in\lbrace 0,1\rbrace^V$ 라 하면

$$
\mathrm{STAB}(G)=\mathrm{conv}\lbrace\chi^S:S\text{ 는 }G\text{ 의 안정집합}\rbrace
$$

이다. 이 다면체를 바깥에서 근사하는 두 다면체를 둔다.

$$
\mathrm{FRAC}(G)=\lbrace x\ge 0:x\_i+x\_j\le 1\thinspace(ij\in E)\rbrace,\qquad \mathrm{QSTAB}(G)=\Bigl\lbrace x\ge 0:\sum\_{i\in K}x\_i\le 1\thinspace(K\text{ 는 클릭})\Bigr\rbrace
$$

변도 클릭이므로 $\mathrm{STAB}(G)\subseteq\mathrm{QSTAB}(G)\subseteq\mathrm{FRAC}(G)$ 다. 길이 $2k+1$ 인 홀수 사이클 $C$ 마다

$$
\sum\_{i\in C}x\_i\le k
$$

를 **홀수 사이클 부등식(odd cycle inequality)** 이라 한다.

# 성질

## 변 완화

- $\mathrm{FRAC}(G)=\mathrm{STAB}(G)$ 인 것과 $G$ 가 이분그래프인 것은 동치다. 이분그래프의 변-꼭짓점 결합행렬은 [완전 단일모듈 행렬](totally-unimodular-matrices.md)이어서 꼭짓점이 정수이고, 홀수 사이클이 있으면 직관 절의 $1/2$ 점이 꼭짓점으로 남는다.
- $\mathrm{FRAC}(G)$ 의 꼭짓점은 성분이 $0$, $1/2$, $1$ 뿐이다. 선형계획의 최적해에서 $1$ 인 꼭짓점들을 포함하고 $0$ 인 꼭짓점들을 피하는 최대 가중치 안정집합이 존재한다(Nemhauser–Trotter)[^1].

## 홀수 사이클 부등식과 Chvátal 계수

홀수 사이클 부등식은 직관 절처럼 변 부등식을 더해 $2$ 로 나누고 내림하여 얻으므로 [Chvátal 계수](chvatal-rank.md) $1$ 의 절단평면이다. 음이 아님, 변 부등식, 홀수 사이클 부등식만으로 $\mathrm{STAB}(G)$ 가 기술되는 그래프를 t-완벽(t-perfect) 그래프라 하고, 직병렬 그래프가 그 예다[^1].

## 완벽그래프의 판정

**정리(Chvátal, 1975).** $\mathrm{STAB}(G)=\mathrm{QSTAB}(G)$ 인 것과 $G$ 가 [완벽그래프](perfect-graphs.md)인 것은 동치다[^1].

클릭 부등식이 모든 면을 주는 그래프가 완벽그래프다. 다만 클릭이 지수 개일 수 있고, $\mathrm{QSTAB}(G)$ 위에서 최적화하는 것도 일반 그래프에서는 최대 가중치 클릭 문제를 풀어야 해서 어렵다.

## 세타 몸체

[Lovász 세타 함수](lovasz-theta.md)의 반정부호 완화가 정하는 볼록 집합 $\mathrm{TH}(G)$ 는

$$
\mathrm{STAB}(G)\subseteq\mathrm{TH}(G)\subseteq\mathrm{QSTAB}(G)
$$

를 만족하고, 그 위의 선형 최적화는 다항시간에 근사된다. 완벽그래프에서는 세 집합이 같으므로 최대 가중치 안정집합을 다항시간에 구한다(Grötschel–Lovász–Schrijver)[^2].

## 확장 복잡도

다른 변수를 더해 $\mathrm{STAB}(G)$ 를 더 높은 차원 다면체의 사영으로 쓰더라도, 꼭짓점이 $n$ 개인 어떤 그래프들에서는 그 다면체의 면이 $2^{\Omega(\sqrt n)}$ 개 이상 필요하다[^3]. 일반 그래프의 최대 안정집합이 다항 크기의 선형계획으로 풀리지 않는다는 것이 계산 복잡도 가정 없이 증명된다.

# 활용

- **분기 절단법.** 최대 가중치 안정집합과 [그래프 색칠](graph-coloring.md)의 정수계획 풀이에서 클릭 부등식과 홀수 사이클 부등식을 절단평면으로 더한다. 홀수 사이클 부등식의 분리 문제는 최단 경로로 다항시간에 풀린다.
- **최소최대 정리.** 완벽그래프에서 $\mathrm{STAB}=\mathrm{QSTAB}$ 이므로 선형계획 쌍대성이 최대 가중치 안정집합과 최소 가중치 클릭 덮개의 등식을 준다.

[^1]: A. Schrijver, *Combinatorial Optimization: Polyhedra and Efficiency*, Springer, 2003, 64–68 장. 변 완화의 반정수성과 Nemhauser–Trotter 정리, 완벽그래프의 다면체 판정, t-완벽 그래프.
[^2]: M. Grötschel, L. Lovász, A. Schrijver, *Geometric Algorithms and Combinatorial Optimization*, Springer, 1988, 9 장.
[^3]: S. Fiorini, S. Massar, S. Pokutta, H. R. Tiwary, R. de Wolf, "Exponential lower bounds for polytopes in combinatorial optimization", *Journal of the ACM*(Association for Computing Machinery) 62 (2015), 17.

# 연관 문서

## 선수지식

- [정수계획법](integer-programming.md)
- [완벽그래프와 강한 완벽그래프 정리](perfect-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #graph_theory #combinatorics
