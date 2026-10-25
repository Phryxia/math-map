# 조합적 영점 정리

# 개요

**조합적 영점 정리(Combinatorial Nullstellensatz)** 는 체 위의 다변수 다항식이 유한집합들의 곱 $S_1\times\cdots\times S_n$ 의 모든 점에서 $0$ 이 될 수 없는 조건을 최고차 단항식의 계수로 주는 정리다. N. Alon 이 1999 년에 정리해 발표했다[^1]. 이름은 대수기하의 Hilbert 영점 정리(Hilbert's Nullstellensatz)에서 왔다.

일변수 [다항식환](polynomial-rings.md)에서 차수 $d$ 의 다항식은 근이 많아야 $d$ 개다. 이 정리는 그 근의 개수 제한을 격자 모양의 유한집합 위에서 여러 변수로 옮긴 것이고, 조합론의 존재 문제를 "어떤 다항식이 어느 점에서 $0$ 이 아니다" 로 바꾸어 푸는 데 쓰인다. 주된 적용 대상이 [유한체](finite-fields.md)다.

# 직관

$7$ 로 나눈 나머지 $\mathbb Z/7\mathbb Z$ 에서 $A=\lbrace 0,1\rbrace$, $B=\lbrace 0,1,2\rbrace$ 로 두고 두 원소의 합을 모은 집합을 $A+B=\lbrace a+b : a\in A,\thinspace b\in B\rbrace$ 는 $\lbrace 0,1,2,3\rbrace$ 이고 원소가 $4=2+3-1$ 개다. $A$ 와 $B$ 를 어떻게 골라도 $A+B$ 의 원소가 $\lvert A\rvert+\lvert B\rvert-1$ 개보다 적어지지 않는지(원소가 $7$ 개를 넘을 수는 없으므로 그 범위 안에서) 묻는다.

$\lvert A\rvert+\lvert B\rvert\le 7$ 인데 $A+B$ 가 그보다 작은 집합 $C$ 안에 다 들어간다고 놓고, $C$ 에 원소를 더해 원소 수를 $\lvert A\rvert+\lvert B\rvert-2$ 로 맞춘다. $f(x,y)=\prod_{c\in C}(x+y-c)$ 는 $x\in A$, $y\in B$ 를 넣으면 $x+y\in C$ 이므로 언제나 $0$ 이다. 변수가 하나라면 근이 너무 많다는 것으로 모순을 낸다. 변수가 둘이면 $x+y$ 처럼 근이 무한히 많은 다항식도 있어서 근의 개수만으로는 모순이 나오지 않는다.

$f$ 의 근은 $A\times B$ 라는 바둑판 모양의 점 전체를 덮는다. $x$ 에 대한 차수가 $\lvert A\rvert$ 보다 작고 $y$ 에 대한 차수가 $\lvert B\rvert$ 보다 작은 다항식이 바둑판 전체에서 $0$ 이면, $x$ 를 바둑판의 한 열에 고정할 때마다 $y$ 의 다항식이 $\lvert B\rvert$ 개의 근을 가지므로 계수가 전부 $0$ 이고 영다항식이다.

$f$ 는 차수가 $\lvert A\rvert+\lvert B\rvert-2$ 라서 이 조건을 바로 만족하지 않는다. 그래도 최고차 단항식 $x^{\lvert A\rvert-1}y^{\lvert B\rvert-1}$ 은 변수마다 지수가 바둑판 크기보다 작고, 그 계수가 $0$ 이 아니면 $f$ 는 바둑판 전체에서 $0$ 일 수 없다. 이 계수는 이항계수 $\binom{\lvert A\rvert+\lvert B\rvert-2}{\lvert A\rvert-1}$ 이고 $7$ 보다 작은 수들의 계승의 비라서 $7$ 의 배수가 아니므로, $A+B$ 의 원소는 $\lvert A\rvert+\lvert B\rvert-1$ 개 이상이다. 조합적 영점 정리는 이 마지막 단계를 다변수 다항식 일반에 대해 진술한다.

# 정의

$\mathbb F$ 를 체, $f\in\mathbb F\lbrack x_1,\dots,x_n\rbrack$ 를 다항식, $S_1,\dots,S_n$ 을 $\mathbb F$ 의 공집합이 아닌 유한부분집합이라 한다. $g_i(x_i)=\prod_{s\in S_i}(x_i-s)$ 로 둔다.

## 첫째 판본

$f$ 가 $S_1\times\cdots\times S_n$ 의 모든 점에서 $0$ 이면, 다항식 $h_1,\dots,h_n$ 이 존재해

$$
f=\sum_{i=1}^{n}h_i\thinspace g_i,\qquad \deg h_i\le\deg f-\lvert S_i\rvert
$$

이다. $g_i$ 는 $S_i$ 의 점에서만 $0$ 이 되는 $x_i$ 의 다항식이므로, $f$ 는 그런 다항식들이 생성하는 아이디얼에 차수 조건을 지키며 들어간다.

## 둘째 판본

$f$ 의 전체 차수가 $t_1+\cdots+t_n$ 이고 단항식 $x_1^{t_1}\cdots x_n^{t_n}$ 의 계수가 $0$ 이 아니며 모든 $i$ 에서 $\lvert S_i\rvert\gt t_i$ 이면, $s_i\in S_i$ 가 존재해

$$
f(s_1,\dots,s_n)\ne 0
$$

이다. 적용에서 쓰는 것은 대개 이 판본이다.

# 성질

## 격자 위의 영다항식

모든 $i$ 에서 $f$ 의 $x_i$ 에 대한 차수가 $\lvert S_i\rvert-1$ 이하이고 $f$ 가 $S_1\times\cdots\times S_n$ 의 모든 점에서 $0$ 이면 $f$ 는 영다항식이다.

증명의 요지. $n$ 에 대한 귀납법이다. $f=\sum_{j}x_n^{\thinspace j}f_j(x_1,\dots,x_{n-1})$ 로 쓰고 $(s_1,\dots,s_{n-1})\in S_1\times\cdots\times S_{n-1}$ 을 고정하면, $x_n$ 의 차수가 $\lvert S_n\rvert-1$ 이하인 일변수 다항식이 $\lvert S_n\rvert$ 개의 근을 가지므로 계수 $f_j(s_1,\dots,s_{n-1})$ 가 모두 $0$ 이다. 귀납 가정으로 $f_j$ 가 모두 영다항식이다.

## 둘째 판본의 증명

$f$ 가 $S_1\times\cdots\times S_n$ 의 모든 점에서 $0$ 이라 가정한다. $S_i$ 의 점에서는 $x_i^{\lvert S_i\rvert}=x_i^{\lvert S_i\rvert}-g_i(x_i)$ 이고 오른쪽은 차수가 $\lvert S_i\rvert-1$ 이하다. $f$ 의 각 단항식에서 $x_i^{\lvert S_i\rvert}$ 를 이 식으로 바꾸기를 되풀이하면, 모든 변수의 차수가 $\lvert S_i\rvert-1$ 이하이고 격자 위에서 $f$ 와 값이 같은 다항식 $\bar f$ 가 나온다. 앞 절에 따라 $\bar f$ 는 영다항식이다.

바꾸기 한 번은 그 단항식의 전체 차수를 줄인다. $x_1^{t_1}\cdots x_n^{t_n}$ 은 $t_i\lt\lvert S_i\rvert$ 이므로 바뀌지 않고, 다른 단항식은 차수가 $t_1+\cdots+t_n$ 이하에서 출발해 바뀌면 그보다 작아지므로 이 단항식을 만들지 않는다. 그래서 $\bar f$ 에 $x_1^{t_1}\cdots x_n^{t_n}$ 의 계수가 그대로 남아 $\bar f\ne 0$ 이고, 모순이다.

첫째 판본도 같은 바꾸기에서 나온다. 바꾸기에서 빼낸 $g_i$ 의 배수를 모으면 $f-\bar f=\sum_i h_i g_i$ 이고, 각 바꾸기가 차수를 늘리지 않으므로 $\deg h_i\le\deg f-\lvert S_i\rvert$ 다.

## Schwartz–Zippel 보조정리와의 관계

[Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)는 같은 격자 $S^n$ 위에서 근의 개수를 $d\lvert S\rvert^{n-1}$ 이하로 세고, 이 정리는 근이 격자 전체를 덮지 못하는 조건을 준다. Schwartz–Zippel 보조정리는 $d\lt\lvert S\rvert$ 이면 영이 아닌 점이 있다는 것을 주지만, 이 정리는 차수가 $\lvert S\rvert$ 보다 커도 최고차 단항식의 변수별 지수가 $\lvert S\rvert$ 보다 작으면 같은 결론을 준다. 직관 절의 $f$ 는 차수가 $\lvert A\rvert+\lvert B\rvert-2$ 라서 $\lvert A\rvert$ 와 $\lvert B\rvert$ 를 둘 다 넘을 수 있다.

# 활용

## Cauchy–Davenport 정리

**Cauchy–Davenport 정리(Cauchy–Davenport theorem)** 는 소수 $p$ 와 $\mathbb Z/p\mathbb Z$ 의 공집합이 아닌 부분집합 $A,B$ 에 대해

$$
\lvert A+B\rvert\ge\min\big(p,\thinspace \lvert A\rvert+\lvert B\rvert-1\big)
$$

라는 정리다[^2]. $\lvert A\rvert+\lvert B\rvert\gt p$ 이면 모든 $c$ 에서 $A$ 와 $c-B$ 의 원소 수 합이 $p$ 를 넘으므로 둘이 만나고, [비둘기집 원리](pigeonhole-principle.md)로 $A+B$ 가 전체다. $\lvert A\rvert+\lvert B\rvert\le p$ 이면 직관 절의 논법이 증명이다. $\lvert C\rvert=\lvert A\rvert+\lvert B\rvert-2$ 로 늘려 $f=\prod_{c\in C}(x+y-c)$, $t_1=\lvert A\rvert-1$, $t_2=\lvert B\rvert-1$ 로 둘째 판본을 쓴다. 계수 $\binom{\lvert A\rvert+\lvert B\rvert-2}{\lvert A\rvert-1}$ 은 $p$ 보다 작은 수들의 계승의 비이므로 $p$ 로 나누어지지 않는다.

## Chevalley 정리

**Chevalley 정리(Chevalley's theorem)** 는 위수 $q$ 의 유한체 $\mathbb F\_q$ 위의 다항식 $P_1,\dots,P_m$ 이 $n$ 변수이고 $\sum_k\deg P_k\lt n$ 이며 $0$ 이 공통근이면, $0$ 이 아닌 공통근이 존재한다는 정리다[^3]. E. Warning 은 같은 조건에서 공통근의 개수가 표수의 배수라는 것을 증명했고, 둘을 합쳐 Chevalley–Warning 정리(Chevalley–Warning theorem)라 부른다.

증명. 공통근이 $0$ 뿐이라 가정하고

$$
f=\prod_{k=1}^{m}\big(1-P_k^{\thinspace q-1}\big)-\delta\prod_{j=1}^{n}\prod_{s\in\mathbb F\_q^{\times}}(x_j-s)
$$

로 둔다. $\delta$ 는 $f(0)=0$ 이 되게 고른 $0$ 이 아닌 상수다. $x\ne 0$ 이면 어떤 $P_k(x)\ne 0$ 이어서 $P_k(x)^{q-1}=1$ 이므로 첫 곱이 $0$ 이고, 어떤 $x_j\ne 0$ 이어서 둘째 곱도 $0$ 이다. 그래서 $f$ 는 $\mathbb F\_q^{\thinspace n}$ 전체에서 $0$ 이다. 첫 곱의 차수는 $(q-1)\sum_k\deg P_k\lt(q-1)n$ 이므로 $x_1^{q-1}\cdots x_n^{q-1}$ 의 계수는 $-\delta\ne 0$ 이고, $S_j=\mathbb F\_q$ 로 둘째 판본을 쓰면 모순이다.

## Erdős–Ginzburg–Ziv 정리

**Erdős–Ginzburg–Ziv 정리(Erdős–Ginzburg–Ziv theorem)** 는 정수 $2n-1$ 개 가운데 합이 $n$ 의 배수인 $n$ 개를 고를 수 있다는 정리다[^4]. $n=p$ 가 소수인 경우는 Chevalley 정리에서 나온다. 정수 $a_1,\dots,a_{2p-1}$ 에 대해 $\mathbb F\_p$ 위에서

$$
P_1=\sum_{i=1}^{2p-1}a_i\thinspace x_i^{\thinspace p-1},\qquad P_2=\sum_{i=1}^{2p-1}x_i^{\thinspace p-1}
$$

로 두면 차수 합이 $2p-2\lt 2p-1$ 이고 $0$ 이 공통근이므로, $0$ 이 아닌 공통근 $x$ 가 있다. $x_i^{p-1}$ 은 $x_i\ne 0$ 일 때 $1$, $x_i=0$ 일 때 $0$ 이다. $x_i\ne 0$ 인 첨자의 집합을 $I$ 라 하면 $P_2(x)=0$ 에서 $\lvert I\rvert$ 가 $p$ 의 배수이고 $1\le\lvert I\rvert\le 2p-1$ 이므로 $\lvert I\rvert=p$ 다. $P_1(x)=0$ 에서 $\sum_{i\in I}a_i$ 가 $p$ 의 배수다. 일반의 $n$ 은 $n=ab$ 일 때 $a$ 와 $b$ 의 경우를 합쳐 얻는다.

## 그래프의 목록 색칠

[그래프 색칠](graph-coloring.md)에서 정점마다 허용된 색의 목록을 주고 그 안에서 인접한 정점이 다른 색을 받게 칠하는 것을 목록 색칠(list coloring)이라 한다. 정점 $v$ 에 변수 $x_v$ 를 두고 그래프 다항식 $\prod_{uv\in E,\thinspace u\lt v}(x_u-x_v)$ 에 둘째 판본을 쓰면, 이 다항식의 단항식 $\prod_v x_v^{d_v}$ 의 지수 합이 간선 수와 같고 그 계수가 $0$ 이 아닐 때 목록 크기가 $d_v+1$ 이상인 모든 목록에서 색칠이 존재한다. N. Alon 과 M. Tarsi 는 이 계수가, 정점 $v$ 에서 나가는 간선이 $d_v$ 개인 방향 짓기 하나를 고정할 때 모든 정점에서 들어오는 간선 수와 나가는 간선 수가 같은 부분그래프 가운데 간선이 짝수 개인 것과 홀수 개인 것의 개수 차에 부호를 붙인 값이라는 것을 증명했다(Alon–Tarsi 정리, Alon–Tarsi theorem)[^5].

[^1]: N. Alon, "Combinatorial Nullstellensatz", Combinatorics, Probability and Computing 8 (1999), 7–29.
[^2]: H. Davenport, "On the addition of residue classes", Journal of the London Mathematical Society 10 (1935), 30–32.
[^3]: C. Chevalley, "Démonstration d'une hypothèse de M. Artin", Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 11 (1935), 73–75.
[^4]: P. Erdős, A. Ginzburg, A. Ziv, "Theorem in the additive number theory", Bulletin of the Research Council of Israel 10F (1961), 41–43.
[^5]: N. Alon, M. Tarsi, "Colorings and orientations of graphs", Combinatorica 12 (1992), 125–134.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [유한체](finite-fields.md)

## 더 알아보기

- [유한체 Kakeya 집합](finite-field-kakeya-sets.md)

#combinatorics #algebra #number_theory #graph_theory
