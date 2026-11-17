# Galvin–Tetali 정리

# 개요

**Galvin–Tetali 정리(Galvin–Tetali theorem)** 는 모든 정점의 차수가 $d$ 인 이분그래프에서 고정된 그래프 $H$ 로 가는 준동형의 수가, 정점 하나당 몫으로 따져 완전 이분그래프 $K\_{d,d}$ 에서 가장 크다는 정리다. 고리 모양 그래프를 세 색으로 칠하는 방법의 수와 독립집합의 수는 서로 다른 셈이지만, 둘 다 [그래프 준동형](graph-homomorphisms.md)의 수다.

[Kahn–Zhao 정리](kahn-zhao-theorem.md)가 독립집합에 대해 보인 상한을, 이 정리는 색칠을 비롯한 모든 준동형의 셈으로 넓힌다. 증명은 같은 엔트로피 논법이다.

# 직관

정점 $6$ 개의 고리 $C\_6$ 을 세 색으로 칠한다. 이웃한 정점은 다른 색이다. 첫 정점부터 돌며 세면 $2^6+2=66$ 가지다. 정사각형 $C\_4=K\_{2,2}$ 는 $2^4+2=18$ 가지다.

정점 수가 다르므로 정점 하나당 몫으로 비교한다. $C\_6$ 은 $66^{1/6}\approx 2.010$, $C\_4$ 는 $18^{1/4}\approx 2.060$ 이다. 정사각형 쪽이 크고, 이 정리에 따르면 $2$ 정칙 이분그래프 가운데 $K\_{2,2}$ 의 몫이 가장 크다.

독립집합으로 바꾸어도 같다. $C\_6$ 의 독립집합은 $18$ 개, $C\_4$ 는 $7$ 개이고 $18^{1/6}\approx 1.618\lt 7^{1/4}\approx 1.627$ 이다.

# 정의

## 준동형의 수

그래프 $G$ 에서 $H$ 로 가는 준동형의 수를 $\hom(G,H)$ 로 쓴다. $H$ 에는 고리가 있어도 된다. $H$ 가 삼각형 $K\_3$ 이면 $\hom(G,K\_3)$ 은 $G$ 의 세 색 색칠의 수다. 직관 절에서 $\hom(C\_6,K\_3)=66$, $\hom(C\_4,K\_3)=18$ 이다.

## 정칙 이분그래프

모든 정점의 차수가 $d$ 인 이분그래프를 $d$ 정칙 이분그래프라 한다. 두 쪽의 정점 수는 같다. 고리 $C\_{2m}$ 은 $2$ 정칙 이분그래프이고 $K\_{d,d}$ 는 $d$ 정칙 이분그래프다.

# 성질

## Galvin–Tetali 정리

정리. $G$ 가 정점 $n$ 개의 $d$ 정칙 이분그래프이면 모든 그래프 $H$ 에 대해 다음이 성립한다.[^1]

$$
\hom(G,H)\le\hom(K_{d,d},H)^{n/(2d)}
$$

$G$ 가 $K\_{d,d}$ 를 여러 개 나란히 둔 것이면 등호가 성립한다. 직관 절에서 $66\le 18^{6/4}\approx 76.4$ 이다.

## 엔트로피 증명

$G$ 의 두 쪽을 $A$, $B$ 라 하고, $G$ 에서 $H$ 로 가는 준동형 $f$ 를 고르게 뽑는다. [Shannon 엔트로피](entropy.md)로 $\log\hom(G,H)=H(f)$ 다. 연쇄법칙과 조건부 엔트로피의 성질로 다음이 성립한다.

$$
H(f)=H(f_A)+H(f_B\mid f_A)\le H(f_A)+\sum_{v\in B}H(f_v\mid f_{N(v)})
$$

$N(v)$ 는 $v$ 의 이웃이다. $\lbrace N(v):v\in B\rbrace$ 는 $A$ 의 각 정점을 $d$ 번 덮으므로 [Shearer 보조정리](shearer-lemma.md)로 $H(f\_A)\le\frac1d\sum\_{v\in B}H(f\_{N(v)})$ 다.

이제 $v\in B$ 마다 $X=f\_{N(v)}$, $Y=f\_v$ 로 둔다. $X$ 가 $x$ 일 때 $Y$ 는 $x$ 의 모든 성분과 이웃한 $H$ 의 정점이므로, 그런 정점의 수를 $c(x)$ 라 하면 $H(Y\mid X)\le\mathbb E\log c(X)$ 다. [Jensen 부등식](jensen-inequality.md)으로 다음이 나온다.

$$
H(X)+d\thinspace H(Y\mid X)\le\mathbb E\log\frac{c(X)^d}{p(X)}\le\log\sum_xc(x)^d=\log\hom(K_{d,d},H)
$$

마지막 등호는 $K\_{d,d}$ 의 한쪽을 $x$ 로 보낸 뒤 다른 쪽 $d$ 개 정점을 $c(x)$ 개 가운데 고르는 셈이다. 세 식을 합치면 $\log\hom(G,H)\le\frac{n}{2d}\log\hom(K\_{d,d},H)$ 다.

## 이분이 아닌 정칙 그래프

$G$ 가 이분그래프가 아니면 같은 부등식이 성립하지 않는 $H$ 가 있다. 고리가 달린 정점 두 개를 잇지 않고 둔 그래프로 가는 준동형은 연결 성분마다 정점 하나를 고르는 셈이라, $K\_{d+1}$ 의 몫 $2^{1/(d+1)}$ 이 $K\_{d,d}$ 의 몫 $2^{1/(2d)}$ 보다 크다.[^2] 독립집합의 경우에는 Y. Zhao 가 이분이 아닌 정칙 그래프에서도 상한이 성립함을 보였다.[^3]

# 활용

- 색칠의 수. $d$ 정칙 이분그래프 $G$ 의 $q$ 색 색칠은 $\hom(K\_{d,d},K\_q)^{n/(2d)}$ 개 이하다.
- 통계역학 모형. 정점마다 상태를 주고 이웃한 상태에 제약을 두는 모형의 상태 배치 수를, 차수가 같은 이분 격자에서 $K\_{d,d}$ 의 값으로 묶는다. 단단한 알갱이 모형(hard-core model)의 배치 수가 독립집합의 수다.
- 가중치가 있는 판본. $H$ 의 정점과 간선에 양의 가중치를 주어 준동형마다 가중치를 곱한 분배함수에도 같은 상한이 성립한다.[^1]

[^1]: D. Galvin, P. Tetali, "On weighted graph homomorphisms", in *Graphs, Morphisms and Statistical Physics*, DIMACS Series in Discrete Mathematics and Theoretical Computer Science **63** (2004), 97–104.
[^2]: Y. Zhao, "Extremal regular graphs: independent sets and graph homomorphisms", *American Mathematical Monthly* **124** (2017), 827–843.
[^3]: Y. Zhao, "The number of independent sets in a regular graph", *Combinatorics, Probability and Computing* **19** (2010), 315–320.

# 연관 문서

## 선수지식

- [그래프 준동형](graph-homomorphisms.md)
- [Kahn–Zhao 정리](kahn-zhao-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #information_theory
