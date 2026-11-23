# 셈 CSP 이분법 정리

# 개요

**셈 CSP 이분법 정리(counting CSP dichotomy theorem, CSP 는 constraint satisfaction problem)** 는 [제약 만족 문제](constraint-satisfaction-problems.md)의 해가 몇 개인지 세는 문제가 허용된 값의 조합 목록마다 다항시간에 계산되거나 #P-완전이라는 정리다. 그래프를 두 색으로 칠하는 방법의 수는 연결성분마다 $2$ 를 곱하면 나온다. 그래프의 독립집합은 빈 집합이 늘 있어 존재 여부는 물을 것도 없지만, 그 개수를 세는 문제는 #P-완전이다.

어느 쪽인지는 해 셋을 자리마다 섞어 새 해를 만드는 특정한 연산이 있는지로 정해진다. 그 연산이 있으면 해 전체를 짧게 적을 수 있고, 그 적은 것으로 개수를 센다.

# 직관

정점 $a,b,c$ 와 간선 $ab$, $bc$ 로 된 경로를 두 색 $0,1$ 로 칠한다. $a$ 의 색을 정하면 $b$ 와 $c$ 의 색이 하나로 정해지므로 칠하는 방법은 $2$ 가지다. 일반 그래프에서도 연결성분마다 첫 정점의 색만 고르면 나머지가 정해지고, 충돌이 나는 성분이 있으면 $0$ 가지다.

같은 경로의 독립집합은 $\varnothing$, $\lbrace a\rbrace$, $\lbrace b\rbrace$, $\lbrace c\rbrace$, $\lbrace a,c\rbrace$ 의 다섯이다. 정점마다 집합에 넣으면 $1$, 넣지 않으면 $0$ 을 준다. $a=0$ 으로 정해도 $b$ 에 $0$ 과 $1$ 이 모두 남으므로 값이 퍼지지 않고, 갈래마다 따로 세어야 한다.

두 색 색칠의 해는 법 $2$ 일차방정식 $a+b=1$, $b+c=1$ 의 해다. 해 셋 $x,y,z$ 에 대해 $x+y+z$ 도 해이고, 해 전체는 한 해에 방정식 $a+b=0$, $b+c=0$ 의 해를 더한 것이다. 그래서 개수는 $2^{\text{변수 수}-\text{계수}}=2^{3-2}=2$ 로 소거법 한 번에 나온다.

독립집합에서는 같은 섞기가 해를 내지 않는다. $x=\lbrace a\rbrace$, $y=\varnothing$, $z=\lbrace b\rbrace$ 를 자리마다 법 $2$ 로 더하면 $\lbrace a,b\rbrace$ 이고, 이것은 독립집합이 아니다.

# 정의

## 셈 문제

틀 $\Gamma$ 에 대해 **$\char35{}\mathrm{CSP}(\Gamma)$** 는 $\mathrm{CSP}(\Gamma)$ 의 인스턴스를 받아 해의 수를 내는 함수다. 틀, 인스턴스, 해는 제약 만족 문제 문서의 정의를 쓴다.

- 두 색 색칠의 틀은 $D=\lbrace 0,1\rbrace$ 와 관계 $\lbrace (0,1),(1,0)\rbrace$ 이다. 직관 절의 경로에서 값은 $2$ 다.
- 독립집합의 틀은 $D=\lbrace 0,1\rbrace$ 와 관계 $\lbrace (0,0),(0,1),(1,0)\rbrace$ 이다. 간선의 양 끝이 함께 $1$ 이면 안 된다. 직관 절의 경로에서 값은 $5$ 다.

## Mal'tsev 연산

함수 $m:D^3\to D$ 가 모든 $x,y\in D$ 에 대해 $m(x,y,y)=x$ 와 $m(y,y,x)=x$ 를 만족하면 $m$ 을 **Mal'tsev 연산(Mal'tsev operation)** 이라 한다. 틀의 다형사상인 Mal'tsev 연산을 Mal'tsev 다형사상이라 한다.

$D=\lbrace 0,1\rbrace$ 에서 $m(x,y,z)=x+y+z$ 를 법 $2$ 로 계산하면 $m(x,y,y)=x+2y=x$ 이므로 Mal'tsev 연산이다. 직관 절의 계산은 이 $m$ 이 두 색 색칠 틀의 다형사상이고 독립집합 틀의 다형사상이 아니라는 것이다.

# 성질

## Mal'tsev 다형사상의 필요성

$\char35{}\mathrm{CSP}(\Gamma)$ 가 #P-완전이 아니면 $\Gamma$ 는 Mal'tsev 다형사상을 가진다[^1]. 대우로, Mal'tsev 다형사상이 없는 틀의 셈 문제는 #P-완전이다. $\mathrm P\ne\char35{}\mathrm P$ 를 가정하면 Mal'tsev 다형사상은 다항시간 셈의 필요조건이다.

독립집합 틀의 관계에 Mal'tsev 연산 $m$ 을 $(1,0)$, $(0,0)$, $(0,1)$ 의 자리마다 적용하면 $m(1,0,0)=1$, $m(0,0,1)=1$ 이므로 $(1,1)$ 이 나온다. 어느 Mal'tsev 연산도 다형사상이 아니므로 독립집합의 수는 #P-완전이다. 직관 절의 간선 $ab$ 에서 일어난 일이 이것이다.

## 두 값의 경우

Creignou 와 Hermann 은 $D=\lbrace 0,1\rbrace$ 인 틀에서 모든 관계가 법 $2$ 일차방정식계의 해집합이면 $\char35{}\mathrm{CSP}(\Gamma)$ 가 다항시간에 계산되고, 그 밖에는 #P-완전임을 증명했다[^2]. 쉬운 쪽은 소거법으로 계수 $r$ 을 구해 해의 수 $2^{n-r}$ 을 낸다.

제약 만족 문제 문서의 Schaefer 이분법은 판정이 쉬운 경우를 여섯 가지 든다. 세기에서는 그 가운데 일차방정식의 경우만 남는다. 독립집합의 틀은 전부 $0$ 인 조합을 담아 판정이 자명하고 [2SAT](two-satisfiability.md)의 절 $\lnot u\lor\lnot v$ 로 정의되지만, 세기는 #P-완전이다.

## 그래프 준동형의 경우

Dyer 와 Greenhill 은 [그래프 준동형](graph-homomorphisms.md)의 수를 세는 문제를 다음과 같이 나누었다[^3]. 유한 무방향 그래프 $H$ 의 모든 연결성분이 고리 없는 완전 이분 그래프이거나 모든 정점에 고리가 있는 완전 그래프이면 $H$ 색칠의 수는 다항시간에 계산되고, 그 밖에는 #P-완전이다.

- $H=K\_2$ 는 고리 없는 완전 이분 그래프 $K\_{1,1}$ 이고, 두 색 색칠의 수가 쉬운 쪽이다.
- $H=K\_3$ 은 어느 꼴도 아니므로 세 색 색칠의 수는 #P-완전이다.
- 독립집합의 틀은 고리 있는 정점 $0$ 과 고리 없는 정점 $1$ 을 이은 그래프이고, 어느 꼴도 아니다.

쉬운 쪽의 계산은 성분별 곱이다. $H=K\_{s,t}$ 이고 $G$ 가 연결된 이분 그래프이며 두 쪽의 크기가 $p$, $q$ 이면 $H$ 색칠의 수는 $s^pt^q+s^qt^p$ 이다.

## 일반 틀의 이분법

Bulatov 는 모든 유한 틀 $\Gamma$ 에 대해 $\char35{}\mathrm{CSP}(\Gamma)$ 가 다항시간에 계산되거나 #P-완전임을 증명했다[^4]. 판정 기준은 $\Gamma$ 의 다형사상이 만드는 대수에 대한 조건이고, Mal'tsev 다형사상의 존재에 합동관계에 대한 조건이 더해진다.

Dyer 와 Richerby 는 같은 이분법을 관계에서 세는 행렬의 조건으로 다시 증명했다[^5]. $\Gamma$ 의 관계들의 연언과 존재 한정사로 정의되는 관계마다, 앞쪽 변수의 값을 행으로, 뒤쪽 변수의 값을 열로 두고 가운데 변수의 값의 개수를 성분으로 둔 행렬을 만든다. 이 행렬들이 모두 행과 열을 바꿔 늘어놓으면 계수 $1$ 인 블록들의 대각 배열이 될 때 쉬운 쪽이다. 이 조건이 주어진 $\Gamma$ 에서 성립하는지는 판정 가능하다.

# 활용

- 통계역학의 분배함수. 관계 대신 값의 조합마다 가중치를 주면 $\char35{}\mathrm{CSP}$ 는 [Ising 모형](ising-model.md)이나 [hard-core 모형](hard-core-model.md)의 분배함수가 된다. Cai 와 Chen 은 복소수 가중치까지 넓힌 이분법을 증명했다[^6].
- 근사 세기와의 대비. 정확한 셈이 #P-완전인 독립집합의 수도 최대 차수가 작은 그래프에서는 [Weitz 알고리즘](weitz-algorithm.md)으로 다항시간 근사가 된다. 이 정리는 정확한 셈의 경계만 정한다.
- 판정과 세기의 비교. [셈 복잡도](counting-complexity.md)의 완전 매칭처럼 판정은 쉽고 세기는 어려운 문제가, 고정된 틀의 CSP 에서는 Mal'tsev 다형사상이 없는 모든 쉬운 판정 문제로 나타난다.

[^1]: A. Bulatov, V. Dalmau, "Towards a dichotomy theorem for the counting constraint satisfaction problem", *Information and Computation* 205 (2007), 651–678.
[^2]: N. Creignou, M. Hermann, "Complexity of generalized satisfiability counting problems", *Information and Computation* 125 (1996), 1–12.
[^3]: M. Dyer, C. Greenhill, "The complexity of counting graph homomorphisms", *Random Structures & Algorithms* 17 (2000), 260–289.
[^4]: A. A. Bulatov, "The complexity of the counting constraint satisfaction problem", *Journal of the ACM* 60 (2013), Article 34.
[^5]: M. Dyer, D. Richerby, "An effective dichotomy for the counting constraint satisfaction problem", *SIAM Journal on Computing* 42 (2013), 1245–1274.
[^6]: J.-Y. Cai, X. Chen, "Complexity of counting CSP with complex weights", *Journal of the ACM* 64 (2017), Article 19.

# 연관 문서

## 선수지식

- [제약 만족 문제](constraint-satisfaction-problems.md)
- [셈 복잡도](counting-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #combinatorics #graph_theory
