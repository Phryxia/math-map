# 전체 쌍대 정수성

# 개요

**전체 쌍대 정수성(total dual integrality, TDI)** 은 정수 계수 부등식들로 정한 다면체의 꼭짓점이 모두 정수점임을 보이는 데 쓰는, 부등식계의 성질이다. 그래프에서 겹치지 않는 간선을 가장 많이 고르는 문제를 부등식으로 적고 정수 조건을 빼고 풀면, 삼각형에서 간선마다 $1/2$ 을 주는 해가 나와 값이 $3/2$ 이 된다. 홀수 개의 정점 집합마다 부등식을 더하면 이런 분수 해가 사라지는데, TDI 는 이런 부등식계의 쌍대 문제가 정수 해를 가짐을 보여 꼭짓점이 모두 정수점임을 증명한다.

# 직관

전체 쌍대 정수성은 유리 부등식계 $Ax\le b$ 가 갖는 성질로, 최적값이 유한한 모든 정수 목적함수 $c$ 에 대해 [선형계획법](linear-programming.md)의 쌍대 문제가 정수 최적해를 갖는다는 것이다. $Ax\le b$ 가 TDI 이고 $b$ 가 정수이면 다면체 $\lbrace x:Ax\le b\rbrace$ 의 꼭짓점이 모두 정수점이다(Edmonds–Giles).

[완전 단일모듈 행렬](totally-unimodular-matrices.md)은 모든 정수 우변에 대해 정수 다면체를 주는 제약행렬이다. 일반 그래프의 [매칭](matchings.md)에서 얻는 [매칭 다면체](matching-polytope.md)처럼 제약행렬이 완전 단일모듈이 아닌 정수 다면체도 있고, TDI 는 그런 다면체의 정수성을 쌍대 문제의 정수해로 증명하는 틀이다.

다면체 $\lbrace x\in\mathbb R:x\le 1\rbrace$ 를 부등식 $2x\le 2$ 하나로 적는다. 목적함수 $c=1$ 의 최댓값은 $1$ 이다. 쌍대 문제는 $2y=1$, $y\ge 0$ 에서 $2y$ 를 최소로 하는 것이고 해가 $y=\tfrac12$ 뿐이어서 정수해가 없다.

같은 다면체를 $x\le 1$ 과 $2x\le 2$ 두 부등식으로 적으면 쌍대 문제의 해 $(y_1,y_2)=(1,0)$ 이 정수다. $c=2$ 이면 $(2,0)$ 이나 $(0,1)$ 이 정수해다. 다면체가 같아도 적는 부등식에 따라 쌍대 정수성이 달라지므로, TDI 는 다면체가 아니라 부등식계의 성질이다.

# 정의

유리 행렬 $A\in\mathbb Q^{m\times n}$ 과 $b\in\mathbb Q^m$ 에 대해, 부등식계 $Ax\le b$ 가 **TDI** 라는 것은 다음을 뜻한다. 모든 정수 벡터 $c\in\mathbb Z^n$ 에 대해 쌍대 문제

$$
\min\lbrace y^{\mathsf T}b:\ y^{\mathsf T}A=c^{\mathsf T},\ y\ge 0\rbrace
$$

의 최적값이 유한하면 정수 최적해 $y\in\mathbb Z^m$ 이 존재한다. 강쌍대성으로 이 최적값은 $\max\lbrace c^{\mathsf T}x:Ax\le b\rbrace$ 와 같다.

정수 벡터 유한 개 $a_1,\dots,a_k$ 가 생성하는 원뿔의 정수점이 모두 $a_i$ 들의 음이 아닌 정수 결합이면 $\lbrace a_i\rbrace$ 를 **Hilbert 기저(Hilbert basis)** 라 한다.

# 성질

## Edmonds–Giles 정리

> **정리.** $Ax\le b$ 가 TDI 이고 $b$ 가 정수이면 $P=\lbrace x:Ax\le b\rbrace$ 는 정수 다면체다.[^1]

증명의 요지. 최적값이 유한한 정수 $c$ 마다 쌍대 정수해 $y$ 가 있으므로 $\max\_{x\in P}c^{\mathsf T}x=y^{\mathsf T}b$ 가 정수다. 유리 다면체에서 모든 정수 목적함수의 최댓값이 정수이면 모든 면이 정수점을 포함한다. 꼭짓점 $v$ 에서만 최대가 되는 정수 $c$ 를 충분히 크게 잡으면 $c+e_i$ 도 $v$ 에서만 최대가 되므로 $v_i=(c+e_i)^{\mathsf T}v-c^{\mathsf T}v$ 가 정수다. $\square$

결론은 다면체의 성질이지만 가정은 부등식계의 성질이다. 직관 절의 $2x\le 2$ 처럼 TDI 가 아닌 계가 정수 다면체를 정의할 수 있다.

## TDI 계의 존재

> **정리 (Giles–Pulleyblank).** 모든 유리 다면체 $P$ 는 $A$ 가 정수인 TDI 계 $Ax\le b$ 로 적을 수 있다. $P$ 가 정수 다면체이면 $b$ 도 정수로 고를 수 있다.[^2]

증명의 요지. $P$ 의 면 $F$ 마다 $F$ 에서 등호인 부등식들의 법벡터가 생성하는 원뿔을 잡고, 그 원뿔의 정수점 가운데 Hilbert 기저를 이루는 유한 집합을 고른다. 그런 집합은 [Gordan 보조정리](gordan-lemma.md)로 존재한다. 법벡터 $a$ 마다 $a^{\mathsf T}x\le\max_P a^{\mathsf T}x$ 를 계에 더한다. 정수 $c$ 의 최댓값이 $F$ 에서 잡히면 $c$ 가 $F$ 의 원뿔에 들므로 Hilbert 기저의 정수 결합으로 쓰이고, 그 계수가 쌍대 정수해다. $\square$

같은 논법에서 $Ax\le b$ 가 TDI 인 것과, 모든 면에서 등호인 행들이 Hilbert 기저를 이루는 것이 동치다.

## 완전 단일모듈성과의 관계

> **정리.** 정수 행렬 $A$ 가 완전 단일모듈이면 모든 정수 $b$ 에 대해 $\lbrace x\ge 0:Ax\le b\rbrace$ 를 정의하는 계가 TDI 다.

쌍대 문제의 제약행렬은 $A^{\mathsf T}$ 이고 $A^{\mathsf T}$ 도 완전 단일모듈이다. Hoffman–Kruskal 정리(Hoffman–Kruskal theorem)를 정수 우변 $c$ 의 쌍대 다면체에 쓰면 쌍대 최적해를 꼭짓점에서 정수로 잡을 수 있다. 활용 절의 매칭 다면체의 계처럼 제약행렬이 완전 단일모듈이 아닌 TDI 계도 있다.

## 판정의 복잡도

$A$ 를 고정하지 않으면 계가 TDI 인지 판정하는 문제는 co-NP 완전(co-nondeterministic polynomial time complete)이다.[^3] 차원 $n$ 을 고정하면 다항 시간에 판정된다.

# 활용

- **매칭 다면체.** 일반 그래프에서 Edmonds 의 부등식계 $x\ge 0$, 꼭짓점마다 $x(\delta(v))\le 1$, 홀수 크기 꼭짓점 집합 $S$ 마다 $x(E(S))\le(\vert S\vert-1)/2$ 는 TDI 다(Cunningham–Marsh). Edmonds–Giles 정리로 이 계가 매칭의 다면체를 정의하고, 쌍대 정수해에서 최대 매칭의 크기에 대한 Tutte–Berge 공식(Tutte–Berge formula)이 나온다.
- **min-max 정리의 증명.** 조합최적화의 min-max 등식은 최대화 쪽 다면체의 정수성과 최소화 쪽 쌍대 문제의 정수해를 함께 요구한다. 계가 TDI 이면 두 쪽이 한꺼번에 나온다. Edmonds–Giles 의 부분모듈 흐름과 Lucchesi–Younger 정리가 이 방식으로 증명된다.[^1]
- **Chvátal–Gomory 폐포.** $A$ 가 정수인 TDI 계 $Ax\le b$ 로 적힌 다면체에 [정수계획법](integer-programming.md)의 Chvátal–Gomory 절단을 모두 더한 집합은 $\lbrace x:Ax\le\lfloor b\rfloor\rbrace$ 다(Schrijver).[^2] 절단 전체가 유한 개의 부등식으로 적히므로 폐포가 다면체다.

[^1]: J. Edmonds, R. Giles, "A min-max relation for submodular functions on graphs", *Annals of Discrete Mathematics* **1** (1977), 185–204.
[^2]: F. R. Giles, W. R. Pulleyblank, "Total dual integrality and integer polyhedra", *Linear Algebra and its Applications* **25** (1979), 191–196. Alexander Schrijver, *Theory of Linear and Integer Programming*, Wiley, 1986, 22 장과 23 장.
[^3]: Guoli Ding, Li Feng, Wenan Zang, "The complexity of recognizing linear systems with certain integrality properties", *Mathematical Programming* **114** (2008), 321–334.

# 연관 문서

## 선수지식

- [완전 단일모듈 행렬](totally-unimodular-matrices.md)
- [Gordan 보조정리](gordan-lemma.md)

## 더 알아보기

- [매칭 다면체](matching-polytope.md)

#optimization #combinatorics #linear_algebra
