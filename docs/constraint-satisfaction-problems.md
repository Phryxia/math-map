# 제약 만족 문제

# 개요

**제약 만족 문제(constraint satisfaction problem, CSP)** 는 변수마다 유한한 값의 목록에서 값을 고르되, 정해진 변수 묶음마다 허용된 값의 조합만 쓰게 하는 문제다. 지도를 두 색으로 칠하는 문제, 세 색으로 칠하는 문제, 법 $2$ 일차방정식 몇 개를 동시에 푸는 문제가 모두 이 꼴이다. 앞의 것과 마지막 것은 빠르게 풀리고 세 색 문제는 NP-완전(NP-complete, NP 는 nondeterministic polynomial time)이다.

어느 쪽인지는 허용된 조합들의 목록에 달려 있다. 이 문서는 해 여러 개를 자리마다 섞어 새 해를 만드는 연산이 그 목록에 있는지로 두 쪽을 가른다.

# 직관

정점 $a,b,c,d$ 와 간선 $ab$, $cd$ 로 된 그래프를 두 색 $0,1$ 로 칠한다. 이웃한 두 정점은 다른 색이어야 한다. $a=0$ 으로 정하면 $b=1$ 이 강제되고, $c$ 를 정하면 $d$ 가 강제된다. 두 색에서는 정점 하나의 값이 이웃의 값을 하나로 정하므로, 값을 퍼뜨리다 충돌이 나는지만 보면 된다.

세 색 $0,1,2$ 에서는 $a=0$ 으로 정해도 $b$ 에 $1$ 과 $2$ 가 남는다. 값이 퍼지지 않으므로 갈래마다 따로 시도해야 하고, 갈래의 수는 정점 수에 대해 지수적으로 는다.

두 색 문제의 해를 셋 골라 정점마다 다수결로 값을 정한다. 해 $(a,b,c,d)$ 가 $(0,1,0,1)$, $(1,0,0,1)$, $(1,0,1,0)$ 이면 다수결은 $(1,0,0,1)$ 이고 이것도 해다.

간선 $uv$ 의 양 끝은 세 해에서 모두 서로 반대 값이므로 다수결도 반대 값이 된다. 세 색 문제에는 이렇게 해를 섞어 언제나 해를 내는 연산이 자명한 것밖에 없다.

# 정의

## 인스턴스와 틀

**틀(template)** $\Gamma$ 는 유한집합 $D$ 와 $D$ 위의 관계 $R_1,\dots,R_k$ 의 모음이다. $R_i\subseteq D^{r_i}$ 이고 $r_i$ 를 관계의 항수라 한다.

$\mathrm{CSP}(\Gamma)$ 의 **인스턴스(instance)** 는 변수의 집합 $V$ 와 제약의 목록이고, 제약 하나는 변수의 순서쌍 $(v_1,\dots,v\_{r_i})$ 와 관계 $R_i$ 의 짝이다. 할당 $s:V\to D$ 가 모든 제약에서 $(s(v_1),\dots,s(v\_{r_i}))\in R_i$ 를 만족하면 해라 한다. $\mathrm{CSP}(\Gamma)$ 는 인스턴스에 해가 있는지 판정하는 문제다.

- 두 색 색칠은 $D=\lbrace 0,1\rbrace$, $R=\lbrace (0,1),(1,0)\rbrace$ 이다. 직관 절의 인스턴스는 제약 $(a,b)$, $(c,d)$ 둘이다.
- $q$ 색 [그래프 색칠](graph-coloring.md)은 $D=\lbrace 0,\dots,q-1\rbrace$ 와 관계 $\ne$ 다.
- 3-SAT(3-satisfiability)는 $D=\lbrace 0,1\rbrace$ 와, 세 리터럴의 절 꼴 여덟 가지마다 그 절을 만족하는 $7$ 개 조합의 관계다.
- 법 $2$ 일차방정식은 $D=\lbrace 0,1\rbrace$ 와 관계 $\lbrace (x,y,z):x+y+z\equiv c\rbrace$, $c=0,1$ 이다.

인스턴스의 변수와 제약을 $\Gamma$ 와 같은 꼴의 관계 구조 $A$ 로 보면, 해는 $A$ 에서 $\Gamma$ 로 가는 준동형이다. 그래프에서는 $\mathrm{CSP}(H)$ 가 [그래프 준동형](graph-homomorphisms.md)의 $H$ 색칠 존재 문제다.

## 다형사상

함수 $f:D^m\to D$ 가 $\Gamma$ 의 모든 관계 $R$ 에 대해, $R$ 의 원소 $m$ 개 $t_1,\dots,t_m$ 에 자리마다 $f$ 를 적용한 $\bigl(f(t_1(1),\dots,t_m(1)),\dots\bigr)$ 이 다시 $R$ 에 들면 $f$ 를 $\Gamma$ 의 **다형사상(polymorphism)** 이라 한다. 사영 $f(x_1,\dots,x_m)=x_i$ 는 언제나 다형사상이다.

- 두 색 색칠에서 다수결 $\mathrm{maj}(x,y,z)$ 는 다형사상이다. 직관 절의 계산이 이것이다.
- 법 $2$ 일차방정식에서 $f(x,y,z)=x+y+z$ 는 다형사상이다. 세 해 $s_1,s_2,s_3$ 가 $x+y+z\equiv c$ 를 만족하면 $s_1+s_2+s_3$ 은 $3c\equiv c$ 를 만족한다.

$f(x,\dots,x)=x$ 이고 한 자리만 다른 값 $y$ 를 넣은 결과가 그 자리에 무관하게

$$
f(y,x,\dots,x)=f(x,y,x,\dots,x)=\dots=f(x,\dots,x,y)
$$

인 $f$ 를 **약한 거의 만장일치 연산(weak near-unanimity operation, WNU)** 이라 한다. 다수결은 $3$ 항 WNU 다.

# 성질

## Schaefer 이분법

$D=\lbrace 0,1\rbrace$ 인 틀 $\Gamma$ 에 대해 $\mathrm{CSP}(\Gamma)$ 는 다음 여섯 경우에 다항시간에 풀리고, 그 밖에는 NP-완전이다[^1].

- 모든 관계가 전부 $0$ 인 조합을 담는다.
- 모든 관계가 전부 $1$ 인 조합을 담는다.
- 모든 관계가 Horn 절(Horn clause)의 연언으로 정의된다. $\min(x,y)$ 가 다형사상인 것과 동치다.
- 모든 관계가 쌍대 Horn 절의 연언으로 정의된다. $\max(x,y)$ 가 다형사상인 것과 동치다.
- 모든 관계가 리터럴 둘짜리 절의 연언으로 정의된다([2SAT](two-satisfiability.md)). 다수결이 다형사상인 것과 동치다.
- 모든 관계가 법 $2$ 일차방정식계의 해집합이다. $x+y+z$ 가 다형사상인 것과 동치다.

두 색 색칠은 다섯째와 여섯째에, 법 $2$ 일차방정식은 여섯째에 든다. 3-SAT 의 관계들은 여섯 경우 어디에도 들지 않으므로 NP-완전이고, 이것이 [NP-완전성과 Cook–Levin 정리](np-completeness.md)의 SAT 의 경우와 맞는다.

## Hell–Nešetřil 정리

유한 무방향 그래프 $H$ 에 대해 $\mathrm{CSP}(H)$ 는 $H$ 가 고리를 가지거나 이분그래프이면 다항시간에 풀리고, 그 밖에는 NP-완전이다[^2]. 고리가 있으면 모든 정점을 그 고리로 보내면 되고, 이분그래프이면 두 색 색칠로 돌아간다. $H=K\_3$ 이면 세 색 색칠이다.

## 다형사상과 복잡도

$\Gamma$ 와 $\Delta$ 가 같은 정의역 위의 틀이고 $\Gamma$ 의 다형사상이 모두 $\Delta$ 의 다형사상이면, $\mathrm{CSP}(\Delta)$ 는 $\mathrm{CSP}(\Gamma)$ 로 다항시간에 환원된다[^3]. 증명의 요지. 이 조건 아래 $\Delta$ 의 관계는 $\Gamma$ 의 관계들의 연언과 존재 한정사로 정의되고, 그 정의를 인스턴스에 풀어 쓰면 새 변수가 몇 개 늘 뿐이다. 그러므로 복잡도는 다형사상의 모음으로 정해지고, 다형사상이 많을수록 문제가 쉽다.

- 다수결 같은 $3$ 항 다수 연산(majority operation)이 다형사상이면, 변수 둘씩 묶어 허용 값을 줄여 가는 국소 일관성(local consistency) 검사가 해의 존재를 판정한다.
- $f(x,y,z)=x-y+z$ 꼴의 Mal'tsev 연산이 다형사상이면 [Gauss 소거법](gaussian-elimination.md)을 넓힌 방법으로 푼다.
- $K\_3$ 의 다형사상은 사영에 $\lbrace 0,1,2\rbrace$ 의 순열을 합성한 것뿐이다.

## CSP 이분법 정리

Feder 와 Vardi 는 모든 유한 틀 $\Gamma$ 에 대해 $\mathrm{CSP}(\Gamma)$ 가 다항시간이거나 NP-완전이라고 추측했다[^4]. Bulatov 와 Zhuk 이 2017 년에 각자 이를 증명했다[^5][^6]. 판정 기준은 다음과 같다. $\Gamma$ 를 자기 자신으로 가는 준동형이 모두 전단사인 꼴(핵)로 줄이고 각 원소를 상수 관계로 더한 틀에 대해,

- WNU 다형사상이 있으면 $\mathrm{CSP}(\Gamma)$ 는 다항시간에 풀리고,
- 없으면 NP-완전이다.

[Ladner 정리](ladner-theorem.md)에 따르면 $\mathrm P\ne\mathrm{NP}$ 이면 NP 에 다항시간도 NP-완전도 아닌 문제가 있다. 이분법 정리에 따라 고정된 유한 틀의 CSP 에는 그런 문제가 없다.

# 활용

- 일정 짜기와 배정. 시험 시간표, 주파수 배정, 퍼즐(스도쿠)은 변수, 값, 금지 조합으로 적히는 CSP 다. 일반 풀이기는 국소 일관성으로 값을 줄인 뒤 되추적한다.
- 데이터베이스 질의. 관계형 데이터베이스의 결합 질의(conjunctive query)의 답이 있는지 판정하는 문제는 질의 구조에서 데이터베이스로 가는 준동형 문제와 같다.
- 근사와 셈. 제약을 가장 많이 만족하는 판본은 [PCP 정리](pcp-theorem.md)(probabilistically checkable proof)와 [유일게임 추측과 2-to-2 정리](unique-games.md)가 근사 한계를 정하고, 해의 수를 세는 판본은 [셈 복잡도](counting-complexity.md)에서 다룬다.
- 통계역학. 해 위에 무게를 준 분포가 [단단한 알갱이 모형](hard-core-model.md)과 [Potts 모형](potts-model.md)이다.

[^1]: T. J. Schaefer, "The complexity of satisfiability problems", STOC 1978, 216–226.
[^2]: P. Hell, J. Nešetřil, "On the complexity of H-coloring", *Journal of Combinatorial Theory, Series B* 48 (1990), 92–110.
[^3]: P. Jeavons, "On the algebraic structure of combinatorial problems", *Theoretical Computer Science* 200 (1998), 185–204.
[^4]: T. Feder, M. Y. Vardi, "The computational structure of monotone monadic SNP and constraint satisfaction", *SIAM Journal on Computing* 28 (1998), 57–104.
[^5]: A. A. Bulatov, "A dichotomy theorem for nonuniform CSPs", FOCS 2017.
[^6]: D. Zhuk, "A proof of the CSP dichotomy conjecture", *Journal of the ACM* 67 (2020), Article 30.

# 연관 문서

## 선수지식

- [그래프 준동형](graph-homomorphisms.md)
- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #graph_theory #algorithms #logic
