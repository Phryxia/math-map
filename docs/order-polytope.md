# 순서 다면체

# 개요

**순서 다면체(order polytope)** 는 유한 [부분순서](partial-orders.md)의 원소마다 $0$ 과 $1$ 사이의 값을 순서를 어기지 않게 매긴 점 전체가 이루는 다면체다. 일 $a$, $b$, $c$ 가 있고 $c$ 는 $a$ 와 $b$ 를 모두 끝낸 뒤에만 할 수 있으면, 세 일을 한 줄로 세우는 방법은 $abc$ 와 $bac$ 둘이다. 이런 방법의 수는 일이 많아지면 직접 세기 어렵다. 순서 다면체의 부피에 원소 개수의 계승을 곱하면 이 수가 나오므로, 세는 문제가 부피를 재는 문제로 바뀐다.

# 직관

세 일에 $0$ 과 $1$ 사이의 시각 $f_a,f_b,f_c$ 를 아무렇게나 뽑는다. 세 시각은 확률 $1$ 로 서로 다르고, 크기 순서는 $3!=6$ 가지가 똑같은 확률로 나온다. 시각을 일을 하는 순간으로 보면 $f_a\le f_c$, $f_b\le f_c$ 인 경우가 순서를 지킨 일정이고, 크기 순서로는 $c$ 가 마지막인 $abc$ 와 $bac$ 두 가지다. 그래서 순서를 지키는 점 $(f_a,f_b,f_c)$ 가 단위정육면체에서 차지하는 부피는 $2/6=1/3$ 이다.

같은 부피를 적분으로 구할 수 있다. $f_c$ 를 고정하면 $f_a$ 와 $f_b$ 가 각각 $[0,f_c]$ 에서 움직이므로 단면의 넓이가 $f_c^2$ 이고, 이것을 $0$ 부터 $1$ 까지 적분하면 $1/3$ 이다.

정육면체는 세 좌표의 크기 순서에 따라 부피 $1/6$ 인 조각 여섯 개로 나뉜다. 순서를 지키는 점의 집합은 그 가운데 $abc$ 와 $bac$ 에 해당하는 두 조각을 합친 것이다.

# 정의

$P$ 를 원소가 $n$ 개인 유한 부분순서라 한다. 다음 집합을 $P$ 의 순서 다면체라 하고 $\mathcal O(P)$ 로 쓴다.

$$
\mathcal O(P)=\lbrace f\in\mathbb R^P:0\le f(x)\le 1,\quad x\le y\Rightarrow f(x)\le f(y)\rbrace
$$

부등식 유한 개로 정해지는 유계 집합이므로 [볼록 다면체](convex-polytopes.md)다. 직관 절의 $P=\lbrace a,b,c\rbrace$, $a\lt c$, $b\lt c$ 에서 $\mathcal O(P)$ 는 $0\le f_a\le f_c\le 1$, $0\le f_b\le f_c$ 인 점의 집합이다.

$P$ 의 원소를 순서를 어기지 않고 한 줄로 세운 것이 선형 확장이다. 선형 확장의 개수를 $e(P)$ 로 쓴다. 직관 절의 $P$ 는 $e(P)=2$ 다.

$U\subseteq P$ 가 $x\in U$, $x\le y$ 이면 $y\in U$ 를 만족하면 **위 집합(up-set)** 이라 한다. 직관 절의 $P$ 의 위 집합은 $\varnothing$, $\lbrace c\rbrace$, $\lbrace a,c\rbrace$, $\lbrace b,c\rbrace$, $\lbrace a,b,c\rbrace$ 다섯이다.

# 성질

## 꼭짓점

정리. $\mathcal O(P)$ 의 꼭짓점은 위 집합의 지시함수 $\mathbf 1_U$ 전부다.[^1]

직관 절의 $P$ 에서 꼭짓점은 $(f_a,f_b,f_c)$ 로 $(0,0,0)$, $(0,0,1)$, $(1,0,1)$, $(0,1,1)$, $(1,1,1)$ 이다.

증명의 요지. $\mathbf 1_U$ 는 순서를 지키는 $0,1$ 값 함수이고, 정육면체의 꼭짓점이므로 $\mathcal O(P)$ 의 꼭짓점이다. 거꾸로 $f\in\mathcal O(P)$ 의 서로 다른 값을 $0\lt c_1\lt\dots\lt c_k$ 라 하면 $U_i=\lbrace x:f(x)\ge c_i\rbrace$ 는 위 집합이고, $c_0=0$ 으로 두어 $f=\sum_i(c_i-c\_{i-1})\mathbf 1\_{U_i}$ 로 쓴다. 계수의 합이 $c_k\le 1$ 이므로 나머지를 $\mathbf 1\_\varnothing=0$ 에 주면 $f$ 는 위 집합의 지시함수들의 볼록 결합이다.

## 부피와 선형 확장

정리. $\mathrm{vol}(\mathcal O(P))=e(P)/n!$ 이다.[^1]

증명의 요지. 선형 확장 $x_1,\dots,x_n$ 마다 단체 $\lbrace 0\le f(x_1)\le\dots\le f(x_n)\le 1\rbrace$ 를 잡는다. 각 단체의 부피는 $1/n!$ 이다. $\mathcal O(P)$ 의 점의 좌표를 크기순으로 늘어놓으면 그 순서를 어기지 않는 선형 확장이 있으므로 단체들이 $\mathcal O(P)$ 를 덮고, 서로 다른 선형 확장의 단체는 경계에서만 만난다.

## 격자점과 순서 다항식

$\Omega(P,m)$ 을 $P$ 에서 $m$ 원소 사슬 $1\lt 2\lt\dots\lt m$ 으로 가는 순서 보존 사상의 개수라 하고, 순서 다항식(order polynomial)이라 한다. $m\mathcal O(P)$ 의 격자점은 $P$ 에서 $\lbrace 0,\dots,m\rbrace$ 로 가는 순서 보존 사상이므로 그 개수는 $\Omega(P,m+1)$ 이다. 곧 $\Omega(P,m+1)$ 이 $\mathcal O(P)$ 의 [Ehrhart 다항식](ehrhart-polynomial.md)이다.

직관 절의 $P$ 에서는 $f(c)=k$ 로 고정하면 $f(a),f(b)$ 가 각각 $k$ 가지씩이므로 다음과 같다.

$$
\Omega(P,m)=\sum_{k=1}^m k^2=\frac{m(m+1)(2m+1)}{6}
$$

$m=2$ 이면 $5$ 로 꼭짓점의 개수와 같고, 최고차 계수 $1/3$ 이 부피다.

## 사슬 다면체

$P$ 의 사슬 $C$ 마다 $\sum\_{x\in C}g(x)\le 1$ 을 요구하고 $g\ge 0$ 인 $g\in\mathbb R^P$ 전체를 사슬 다면체(chain polytope)라 하고 $\mathcal C(P)$ 로 쓴다. 꼭짓점은 반사슬의 지시함수다.

Stanley 는 $\mathcal O(P)$ 를 $\mathcal C(P)$ 로 보내는 조각별 선형 전단사를 만들어 두 다면체의 부피와 Ehrhart 다항식이 같음을 보였다.[^1] 직관 절의 $P$ 에서 $\mathcal C(P)$ 는 $g_a+g_c\le 1$, $g_b+g_c\le 1$ 이고, $g_c$ 로 자른 단면의 넓이 $(1-g_c)^2$ 를 적분하면 부피가 $1/3$ 이다. 반사슬은 $\varnothing$, $\lbrace a\rbrace$, $\lbrace b\rbrace$, $\lbrace c\rbrace$, $\lbrace a,b\rbrace$ 다섯으로 꼭짓점 수도 같다.

## 계산 복잡도

$e(P)$ 를 세는 문제는 #P-완전(#P-complete)이다.[^2] 따라서 순서 다면체의 부피를 정확히 계산하는 문제도 #P-어렵다. 볼록체의 부피를 무작위로 근사하는 다항시간 알고리즘을 $\mathcal O(P)$ 에 적용하면 $e(P)$ 의 근삿값을 얻는다.

# 활용

- [Alexandrov–Fenchel 부등식](alexandrov-fenchel-inequality.md). Stanley 는 원소 $x$ 가 $k$ 번째에 오는 선형 확장의 개수 $N_k$ 를 $\mathcal O(P)$ 에서 $x$ 의 값을 고정한 단면들의 혼합부피로 적고, 그 부등식으로 $N_k^2\ge N\_{k-1}N\_{k+1}$ 을 증명했다.[^3]
- [셈 복잡도](counting-complexity.md). 선형 확장을 세는 문제는 #P-완전 문제의 예이고, 근사는 부피 근사로 한다.
- Ehrhart 다항식의 예. 순서 다면체는 꼭짓점이 정수점이고 Ehrhart 다항식이 순서 다항식으로 주어지는 다면체 족이다.

[^1]: Richard P. Stanley, "Two poset polytopes", Discrete & Computational Geometry 1 (1986), 9–23.
[^2]: Graham Brightwell and Peter Winkler, "Counting linear extensions", Order 8 (1991), 225–242.
[^3]: Richard P. Stanley, "Two combinatorial applications of the Aleksandrov–Fenchel inequalities", Journal of Combinatorial Theory, Series A 31 (1981), 56–65.

# 연관 문서

## 선수지식

- [부분순서](partial-orders.md)
- [볼록 다면체](convex-polytopes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#order_theory #combinatorics #computation
