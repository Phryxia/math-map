# Sherali–Adams 계층

# 개요

**Sherali–Adams 계층(Sherali–Adams hierarchy)** 은 $0$-$1$ 정수계획의 선형 완화에서 제약을 변수들의 곱으로 곱해 새 부등식을 만들고, 곱을 새 변수로 바꿔 다시 선형계획으로 만드는 완화들의 열이다. 삼각형에서 서로 이웃하지 않는 정점을 가장 많이 고르는 정수계획을 변마다 $x_i+x_j\le 1$ 로 완화하면 $x=(1/2,1/2,1/2)$ 도 허용되어 최댓값이 $3/2$ 로 나오지만, 정수해의 최댓값은 $1$ 이다. Sherali–Adams 계층은 $x_i^2=x_i$ 처럼 정수점에서만 성립하는 성질과 부등식끼리의 곱으로 $x_1+x_2+x_3\le 1$ 같은 부등식을 만들어 이런 점을 잘라 낸다.

# 직관

[안정집합 다면체](stable-set-polytope.md)의 직관 절에서 삼각형의 변 완화는 점 $x=(1/2,1/2,1/2)$ 을 포함하고, 이 점을 자르려면 $x_1+x_2+x_3\le 1$ 이 있어야 했다. 정수점에서만 성립하는 성질을 써서 이 부등식을 얻는다. $x_i\in\lbrace 0,1\rbrace$ 이면 $x_i^2=x_i$ 이고, 부등식 $1-x_1-x_2\ge 0$ 에 음이 아닌 $x_1$ 을 곱해도 부등식이 유지된다.

$$
x_1(1-x_1-x_2)=x_1-x_1^2-x_1x_2=-x_1x_2\ge 0
$$

곱 $x_1x_2$ 를 새 변수 $y_{12}$ 로 두면 $y_{12}\le 0$ 이다. 곱 $x_1x_2\ge 0$ 에서 $y_{12}\ge 0$ 도 나오므로 $y_{12}=0$ 이고, 같은 방법으로 $y_{13}=y_{23}=0$ 이다. 이번에는 같은 부등식에 $1-x_3$ 을 곱한다.

$$
(1-x_3)(1-x_1-x_2)=1-x_1-x_2-x_3+x_1x_3+x_2x_3\ge 0
$$

$y_{13}=y_{23}=0$ 을 넣으면 $x_1+x_2+x_3\le 1$ 이다. 변 부등식에 변수 하나씩을 곱하고 곱을 새 변수로 바꾼 선형계획만으로 클릭 부등식이 나왔고, $(1/2,1/2,1/2)$ 은 잘려 나간다. 곱하는 인자의 개수를 늘리며 이 절차를 반복한 것이 Sherali–Adams 계층이다.

단계 $r$ 의 완화는 크기가 $n^{O(r)}$ 인 선형계획이고, 단계가 올라갈수록 완화가 좁아져 단계 $n$ 에서 정수 껍질에 닿는다. [Chvátal 계수](chvatal-rank.md)가 내림으로 얻는 절단을 반복하는 횟수를 재는 것과 달리, 이 계층은 곱셈으로 절단을 만든다.

# 정의

$P=\lbrace x\in\lbrack 0,1\rbrack^n:Ax\le b\rbrace$ 이고 정수 껍질을 $P_I=\mathrm{conv}(P\cap\lbrace 0,1\rbrace^n)$ 으로 쓴다. $P$ 를 정의하는 부등식에 $x_k\ge 0$ 과 $1-x_k\ge 0$ 이 모두 들어 있다고 둔다.

$\lbrack n\rbrack=\lbrace 1,\dots,n\rbrace$ 의 서로소인 부분집합 $I$, $J$ 에 대해

$$
\delta_{I,J}(x)=\prod_{i\in I}x_i\prod_{j\in J}(1-x_j)
$$

로 둔다. 단계 $r$ 에서는 $\lvert I\rvert+\lvert J\rvert\le r$ 인 모든 $I$, $J$ 와 $P$ 의 모든 부등식 $a^Tx\le\beta$ 에 대해 $\delta_{I,J}(x)(\beta-a^Tx)\ge 0$ 을 전개하고, 다음 두 단계로 선형화한다.

1. 각 단항식에서 $x_i^2$ 을 $x_i$ 로 바꿔 다중선형 다항식으로 만든다.
2. 단항식 $\prod_{i\in S}x_i$ 를 새 변수 $y_S$ 로 바꾼다. $y_\emptyset=1$, $y_{\lbrace i\rbrace}=x_i$ 다.

이렇게 얻은 변수 $(y_S)\_{\lvert S\rvert\le r+1}$ 의 선형 부등식계를 만족하는 $y$ 의 $x$ 좌표 전체를 $\mathrm{SA}\_r(P)$ 라 한다. 이것이 $P$ 의 단계 $r$ **Sherali–Adams 완화(Sherali–Adams relaxation)** 다.[^1]

같은 곱셈을 인자 하나씩만 하고 사영한 뒤 반복하는 것이 **Lovász–Schrijver 연산(Lovász–Schrijver operator)** 이다. $P$ 의 부등식에 $x_j$ 또는 $1-x_j$ 를 곱해 선형화하고 $x$ 좌표로 사영한 집합을 $N(P)$ 라 하고, $N^r(P)$ 는 이것을 $r$ 번 반복한 것이다.[^2]

# 성질

## 사슬과 종료

$$
P_I=\mathrm{SA}\_n(P)\subseteq\mathrm{SA}\_{n-1}(P)\subseteq\dots\subseteq\mathrm{SA}\_1(P)\subseteq P
$$

포함 관계는 단계 $r+1$ 의 곱셈에 단계 $r$ 의 곱셈이 들어 있다는 데서 나온다. $\delta_{I,J}=\delta_{I\cup\lbrace k\rbrace,J}+\delta_{I,J\cup\lbrace k\rbrace}$ 이므로 단계 $r$ 의 부등식은 단계 $r+1$ 의 부등식 둘의 합이다.

$\mathrm{SA}\_n(P)=P_I$ 의 증명의 요지. $\lbrack n\rbrack$ 을 $I$ 와 $J=\lbrack n\rbrack\setminus I$ 로 나누면 $\sum_I\delta_{I,J}(x)=1$ 이 다항식의 항등식이다. $\delta_{I,J}$ 를 선형화한 값을 $\lambda_I$ 라 하면 $\lambda_I\ge 0$, $\sum_I\lambda_I=1$ 이고, $x_k\delta_{I,J}$ 는 $k\in I$ 일 때 $\delta_{I,J}$, $k\in J$ 일 때 $0$ 이므로 $x=\sum_I\lambda_I\chi^I$ 다. 부등식 $a^Tx\le\beta$ 에 $\delta_{I,J}$ 를 곱한 것은 선형화하면 $\lambda_I(\beta-a^T\chi^I)\ge 0$ 이 되므로 $\lambda_I\gt 0$ 인 $\chi^I$ 는 $P$ 에 속한다. 그래서 $x\in P_I$ 다.[^1]

## 계산 비용

단계 $r$ 의 선형계획은 변수가 $\sum_{k\le r+1}\binom nk$ 개, 부등식이 $P$ 의 부등식 수의 $O((2n)^r)$ 배이므로 $r$ 이 고정되면 크기가 $n$ 의 다항식이다. [선형계획법](linear-programming.md)의 다항시간 해법으로 $\mathrm{SA}\_r(P)$ 위의 최적화가 $n^{O(r)}$ 시간에 풀린다. 반면 Chvátal 계수의 기본 닫힘 $P'$ 에 점이 속하는지 판정하는 문제는 coNP 완전이다.[^3]

## 국소 분포

$x\_k\ge 0$, $1-x\_k\ge 0$ 에 곱한 부등식만 보면, $y$ 가 이 부등식들을 만족하는 것은 크기가 $r+1$ 이하인 집합 $T\subseteq\lbrack n\rbrack$ 마다 $\lbrace 0,1\rbrace^T$ 위의 확률분포가 존재하고, 두 집합의 분포가 공통 부분에서 같은 주변분포를 갖고, $y_S$ 가 $S$ 의 변수가 모두 $1$ 일 확률인 것과 동치다. 확률분포의 값은 $\delta_{I,J}$ 를 선형화한 값이다. 그래서 단계 $r$ 의 점은 $r+1$ 개 이하의 변수만 보면 정수점들의 혼합처럼 보이는 점이고, 정수 간격의 하한을 보이려면 이런 국소 분포를 구성하면 된다.

## Lovász–Schrijver 연산과의 비교

$\mathrm{SA}\_r(P)\subseteq N^r(P)$ 다. Lovász–Schrijver 연산은 매 단계에서 $x$ 로 사영하므로 곱의 변수 $y_S$ 를 다음 단계로 넘기지 못하고, Sherali–Adams 는 $y_S$ 를 모두 유지한다.[^1] 안정집합 다면체의 변 완화 $\mathrm{FRAC}(G)$ 에서 $N(\mathrm{FRAC}(G))$ 는 홀수 사이클 부등식을 모두 만족하고, $N^r(\mathrm{FRAC}(G))=\mathrm{STAB}(G)$ 가 되는 최소 $r$ 은

$$
\frac{n}{\alpha(G)}-2\le r\le n-\alpha(G)-1
$$

을 만족한다. 여기서 $\alpha(G)$ 는 최대 안정집합의 크기다. 완전그래프 $K_n$ 에서는 $\alpha=1$ 이므로 $r=n-2$ 다.[^2]

## Chvátal 계수와의 비교

$\lbrack 0,1\rbrack^n$ 안의 다면체에서 Sherali–Adams 계층은 언제나 $n$ 단계 안에 $P_I$ 에 닿는다. Chvátal 계수는 같은 범위의 다면체에서 $n$ 을 넘을 수 있다. 홀수 사이클 부등식은 두 방법 모두 한 단계에 얻는다.

# 활용

- **정수 간격의 하한.** [근사 알고리즘](approximation-algorithms.md)의 한계를 보이는 방법으로, 어떤 문제의 Sherali–Adams 완화가 많은 단계에서도 정수 최적값과 멀리 떨어진 값을 갖는다는 것을 국소 분포를 구성해 증명한다. 꼭짓점 덮개(vertex cover)는 상수 $\delta\gt 0$ 에 대해 $n^\delta$ 단계에서도 정수 간격이 $2-\varepsilon$ 이다.[^4]
- **반정부호 계층의 비교 기준.** [반정부호 계획법](semidefinite-programming.md)의 [Lasserre 계층](lasserre-hierarchy.md)은 Sherali–Adams 의 곱셈에 모멘트 [행렬](matrices.md)이 반정부호라는 조건을 더한 것이고, 같은 단계에서 Sherali–Adams 완화보다 좁다. Lovász–Schrijver 연산에 반정부호 조건을 더한 판을 변 완화에 한 번 적용한 집합은 [Lovász 세타 함수](lovasz-theta.md)의 세타 몸체에 포함된다.[^2]
- **분기 절단법의 절단 생성.** 단계 $1$ 의 곱셈을 변수 하나에만 적용해 얻는 lift-and-project 절단을 정수계획 풀이의 절단평면으로 쓴다.

[^1]: H. D. Sherali and W. P. Adams, *A hierarchy of relaxations between the continuous and convex hull representations for zero-one programming problems*, SIAM Journal on Discrete Mathematics **3** (1990), 411–430. M. Laurent, *A comparison of the Sherali–Adams, Lovász–Schrijver, and Lasserre relaxations for 0–1 programming*, Mathematics of Operations Research **28** (2003), 470–496.
[^2]: L. Lovász and A. Schrijver, *Cones of matrices and set-functions and 0–1 optimization*, SIAM Journal on Optimization **1** (1991), 166–190.
[^3]: F. Eisenbrand, *On the membership problem for the elementary closure of a polyhedron*, Combinatorica **19** (1999), 297–300.
[^4]: M. Charikar, K. Makarychev and Y. Makarychev, *Integrality gaps for Sherali–Adams relaxations*, Proceedings of the 41st ACM Symposium on Theory of Computing (2009), 283–292.

# 연관 문서

## 선수지식

- [Chvátal 계수](chvatal-rank.md)
- [안정집합 다면체](stable-set-polytope.md)

## 더 알아보기

- [Lasserre 계층](lasserre-hierarchy.md)

#optimization #combinatorics #complexity
