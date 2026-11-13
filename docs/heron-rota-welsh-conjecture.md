# Heron–Rota–Welsh 추측

# 개요

**Heron–Rota–Welsh 추측(Heron–Rota–Welsh conjecture)** 은 [matroid](matroids.md) 의 특성다항식 계수의 절댓값이 이루는 수열에서 가운데 항의 제곱이 양 옆 항의 곱 이상이라는 진술이다. 완전그래프 $K_4$ 의 꼭짓점을 $q$ 가지 색으로 이웃끼리 다르게 칠하는 방법의 수는 $q^4-6q^3+11q^2-6q$ 이고, 계수의 절댓값 $1,6,11,6$ 은 커졌다가 작아진다. 이 모양이 모든 그래프와 모든 matroid 에서 나타나는지가 물음이었고, Adiprasito, Huh, Katz 가 matroid 에 대수다양체의 Hodge 이론을 흉내 낸 환을 만들어 2018 년에 증명했다.

# 직관

$K_4$ 를 $q$ 가지 색으로 칠할 때 꼭짓점을 하나씩 칠하면 $q$, $q-1$, $q-2$, $q-3$ 가지씩 고를 수 있다. 곱을 전개하면 다음과 같다.

$$
q(q-1)(q-2)(q-3)=q^4-6q^3+11q^2-6q
$$

계수의 절댓값에서 $6^2=36\ge 1\cdot 11$, $11^2=121\ge 6\cdot 6$ 이다. 꼭짓점 넷의 순환 $C_4$ 는 칠하는 방법의 수가 $(q-1)^4+(q-1)=q^4-4q^3+6q^2-3q$ 이고, $4^2\ge 1\cdot 6$, $6^2\ge 4\cdot 3$ 이다.

[그래프 색칠](graph-coloring.md)의 개수는 [Tutte 다항식](tutte-polynomial.md)을 특수화해 얻으므로 그래프의 순환 구조만으로 정해진다. 그래서 같은 계수 수열을 순환 구조가 주어진 matroid 마다 정의할 수 있고, 부등식도 matroid 에 대해 물을 수 있다.

# 정의

$M$ 을 유한 집합 $E$ 위의 matroid, $r$ 을 랭크 함수라 한다. $M$ 의 **특성다항식(characteristic polynomial)** 은 다음이다.

$$
\chi_M(q)=\sum_{S\subseteq E}(-1)^{\lvert S\rvert}q^{r(E)-r(S)}
$$

$M$ 에 고리(loop)가 없으면 $\chi_M(q)=\sum\_{k=0}^{r(E)}(-1)^kw_kq^{r(E)-k}$ 로 쓸 때 모든 $w_k$ 가 양수다. $w_k$ 를 제1종 Whitney 수(Whitney number of the first kind)라 한다.

그래프 $G$ 의 그래프 matroid 에서는 연결성분의 개수를 $c(G)$ 라 할 때 채색 다항식이 $P(G,q)=q^{c(G)}\chi_M(q)$ 이다. $K_4$ 는 $c=1$ 이므로 $\chi_M(q)=q^3-6q^2+11q-6$ 이고 $(w_0,w_1,w_2,w_3)=(1,6,11,6)$ 이다.

Heron–Rota–Welsh 추측은 고리가 없는 모든 matroid 에서 다음이 성립한다는 진술이다.

$$
w_k^2\ge w\_{k-1}w\_{k+1}\qquad(1\le k\le r(E)-1)
$$

# 성질

## 축소 특성다항식

$E$ 가 비어 있지 않으면 $\chi_M(1)=0$ 이므로 $\bar\chi_M(q)=\chi_M(q)/(q-1)$ 은 다항식이다. 이것을 축소 특성다항식(reduced characteristic polynomial)이라 하고 계수의 절댓값을 $\mu_0,\mu_1,\dots$ 로 쓴다. $K_4$ 에서는 $\bar\chi_M(q)=q^2-5q+6$ 이므로 $(\mu_0,\mu_1,\mu_2)=(1,5,6)$ 이다.

$w_k=\mu_k+\mu\_{k-1}$ 이다. 사이에 $0$ 이 없는 로그 오목 수열에 $(1,1)$ 을 합성곱하면 로그 오목성이 유지되므로, $\mu_k$ 의 로그 오목성에서 $w_k$ 의 로그 오목성이 나온다.

## Adiprasito–Huh–Katz 정리

정리. 고리가 없는 모든 matroid 에서 $\mu_k$ 와 $w_k$ 는 로그 오목이다.[^1]

증명의 요지. 랭크가 $r$ 인 matroid 마다 차수 $0$ 부터 $r-1$ 까지의 등급환 $A(M)$ 과 최고 차수의 원소를 실수로 보내는 선형사상 $\deg$ 를 정의한다. $A^1(M)$ 에 원소 $\alpha$, $\beta$ 가 있어 $\mu_k=\deg(\alpha^{r-1-k}\beta^k)$ 이다. Adiprasito, Huh, Katz 는 $A(M)$ 에서 사영 다양체의 [Hodge 이론](hodge-theory.md)이 주는 세 성질, 곧 [Poincaré 쌍대성](poincare-duality.md), 강한 Lefschetz 정리(hard Lefschetz theorem), Hodge–Riemann 관계(Hodge–Riemann relations)를 증명했다.

1차 Hodge–Riemann 관계에 따르면 $A^1(M)$ 위 2차형식 $(x,y)\mapsto\deg(\alpha^{r-2-k}\beta^{k-1}xy)$ 가 양의 정부호인 2차원 부분공간을 갖지 않는다. $x=\alpha$, $y=\beta$ 를 넣고 [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md)의 부호수 보조정리를 쓰면 $\mu_k^2\ge\mu\_{k-1}\mu\_{k+1}$ 이다.

## 앞선 결과

- Huh 는 표수 $0$ 인 체 위에서 표현되는 matroid 에 대해, 사영 초곡면의 특이점에서 정의되는 Milnor 수로 $w_k$ 를 적어 로그 오목성을 증명했다.[^2]
- Huh 와 Katz 는 임의의 체 위에서 표현되는 matroid 로 넓혔다.[^3] 표현되는 matroid 에서는 $A(M)$ 이 실제 대수다양체의 코호몰로지환이어서 Hodge 이론을 그대로 쓸 수 있다.

# 활용

- Read 의 추측. 채색 다항식 계수의 절댓값이 단봉(unimodal)이라는 추측이다.[^4] 양수 로그 오목 수열은 단봉이므로 그래프 matroid 의 경우로 증명된다.
- 독립집합의 개수. Adiprasito, Huh, Katz 는 같은 결과를 다른 matroid 에 적용해, 크기 $k$ 인 독립집합의 개수 $I_k$ 가 로그 오목이라는 Mason 추측의 약한 판본을 얻었다.[^1] 더 강한 초 로그 오목 판본은 [Lorentzian 다항식](lorentzian-polynomials.md)으로 증명된다.
- 초평면 배열. $\mathbb C^n$ 의 원점을 지나는 초평면 유한 개는 법선벡터들의 matroid 를 정하고, 초평면들을 뺀 여집합의 $k$ 번째 Betti 수가 $w_k$ 다.[^5] 따라서 여집합의 Betti 수가 로그 오목이다.

[^1]: Karim Adiprasito, June Huh and Eric Katz, "Hodge theory for combinatorial geometries", Annals of Mathematics 188 (2018), 381–452.
[^2]: June Huh, "Milnor numbers of projective hypersurfaces and the chromatic polynomial of graphs", Journal of the American Mathematical Society 25 (2012), 907–927.
[^3]: June Huh and Eric Katz, "Log-concavity of characteristic polynomials and the Bergman fan of matroids", Mathematische Annalen 354 (2012), 1103–1116.
[^4]: Ronald C. Read, "An introduction to chromatic polynomials", Journal of Combinatorial Theory 4 (1968), 52–71.
[^5]: Peter Orlik and Louis Solomon, "Combinatorics and topology of complements of hyperplanes", Inventiones Mathematicae 56 (1980), 167–189.

# 연관 문서

## 선수지식

- [Tutte 다항식](tutte-polynomial.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #algebra
