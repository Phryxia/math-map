# Ladner 정리

# 개요

**Ladner 정리(Ladner's theorem)** 는 $\mathrm P\ne\mathrm{NP}$ 이면 $\mathrm{NP}$ 에 속하면서 $\mathrm P$ 에도 속하지 않고 NP-완전도 아닌 언어가 존재한다는 정리다. R. E. Ladner 가 1975 년에 증명했다[^1]. 이런 언어를 **NP-중간(NP-intermediate)** 이라 한다.

[NP-완전성과 Cook–Levin 정리](np-completeness.md)는 NP 의 가장 어려운 언어를 정하고, 이 정리는 그 아래와 $\mathrm P$ 위 사이가 비어 있지 않다고 한다. 증명은 [시간 계층 정리](time-hierarchy-theorem.md)처럼 기계를 하나씩 흉내 내며 어긋나게 만드는 대각선 논법이지만, 뒤집기를 미루어 두었다가 입력이 충분히 길어졌을 때 한다.

# 직관

충족가능성 문제(satisfiability, SAT)의 논리식 $\varphi$ 뒤에 $1$ 을 덧붙여 입력을 길게 만든다. $\varphi$ 를 받아 $1$ 을 $n^3$ 개 붙이는 것은 다항시간 환원이므로, 길이 $n$ 인 $\varphi$ 에 $1$ 을 $n^3$ 개 붙인 언어는 여전히 NP-완전이다. 반대로 $1$ 을 $2^n$ 개 붙이면, 논리식의 변수 배정 $2^n$ 개를 전부 시험하는 시간이 입력 길이의 다항식이 되어 이 언어는 $\mathrm P$ 에 든다.

다항식 개를 붙이면 너무 어렵고 지수 개를 붙이면 너무 쉽다. 그 사이의 $n^{H(n)}$ 개를 붙이되 $H(n)$ 이 아주 느리게 무한대로 가게 하면 어느 쪽에도 들지 않을 수 있다. $H$ 가 상수로 머물면 덧붙인 길이가 다항식이라 NP-완전이 되고, $H$ 가 빨리 커지면 $\mathrm P$ 에 들 수 있다. 그래서 $H$ 를 다항시간 기계들의 성적에 따라 정한다. $i$ 번째 기계가 짧은 입력에서 이 언어를 맞히는 동안은 $H$ 를 올리지 않는다.

# 정의

다항시간 기계를 $M_1,M_2,\dots$ 로 나열하되, $M_i$ 는 길이 $m$ 의 입력에서 $i\thinspace m^i$ 단계 안에 멈추게 시계를 붙인다. 모든 다항시간 언어는 어느 $M_i$ 로 판정된다.

함수 $H:\mathbb N\to\mathbb N$ 을 다음으로 정한다. $H(n)$ 은 $i\lt\log\log n$ 인 $i$ 가운데, 길이 $\log n$ 이하인 모든 입력 $x$ 에서 $M_i$ 의 답이 $x\in\mathrm{SAT}\_H$ 와 일치하는 가장 작은 $i$ 다. 그런 $i$ 가 없으면 $H(n)=\lceil\log\log n\rceil$ 이다. 여기서

$$
\mathrm{SAT}\_H=\lbrace\varphi\thinspace 0\thinspace 1^{n^{H(n)}} : \varphi\in\mathrm{SAT},\ n=\lvert\varphi\rvert\rbrace
$$

이다. $H(n)$ 의 정의는 길이 $\log n$ 이하의 입력에서 $\mathrm{SAT}\_H$ 를 묻고, 그 판정에는 더 작은 값의 $H$ 만 쓰이므로 이 재귀가 성립한다.

# 성질

## H 의 계산

$H(n)$ 은 $n$ 의 다항시간에 계산된다. 길이 $\log n$ 이하의 입력은 $O(n)$ 개이고, 각 입력에서 $M_i$ 를 $i(\log n)^i$ 단계 돌리는 것과 $\mathrm{SAT}\_H$ 의 소속을 모든 배정을 시험해 판정하는 것이 $n$ 의 다항식 시간에 끝난다. 그래서 $\mathrm{SAT}\_H\in\mathrm{NP}$ 다.

## Ladner 정리

정리. $\mathrm P\ne\mathrm{NP}$ 이면 $\mathrm{SAT}\_H$ 는 $\mathrm{NP}\setminus\mathrm P$ 에 속하고 NP-완전이 아니다[^1].

증명의 요지. 두 경우로 나눈다.

- $\mathrm{SAT}\_H\in\mathrm P$ 라 하자. 어떤 $M_i$ 가 $\mathrm{SAT}\_H$ 를 판정하므로 충분히 큰 $n$ 에서 $H(n)\le i$ 다. 그러면 덧붙인 길이가 $n^i$ 이하인 다항식이고, $\varphi$ 에 $1$ 을 붙여 $M_i$ 에 넣으면 SAT 가 다항시간에 판정되어 $\mathrm P=\mathrm{NP}$ 다.
- $\mathrm{SAT}\_H$ 가 NP-완전이라 하자. 앞의 경우의 대우로 $\mathrm{SAT}\_H\notin\mathrm P$ 이므로 모든 $M_i$ 가 어딘가에서 틀리고, $H(n)\to\infty$ 다. SAT 에서 $\mathrm{SAT}\_H$ 로 가는 시간 $n^c$ 의 환원이 있으므로, 긴 $\varphi$ 는 길이 $n^c$ 이하의 $\psi\thinspace 0\thinspace 1^{m^{H(m)}}$ 으로 간다. $H(m)\gt 2c$ 이면 $m^{H(m)}\le n^c$ 에서 $m\lt\sqrt n$ 이다. 그러므로 SAT 의 판정이 길이가 $\sqrt n$ 미만인 SAT 의 판정으로 줄어들고, 이를 되풀이하면 다항시간에 끝나 $\mathrm P=\mathrm{NP}$ 다.

두 경우 모두 가정에 어긋나므로 $\mathrm{SAT}\_H$ 는 NP-중간이다. 이 증명은 R. Impagliazzo 의 덧붙이기 판본이다[^2].

## 중간 차수의 조밀성

Ladner 의 원래 증명은 더 강한 것을 준다. $A\lt_p B$ 이고 둘 다 계산 가능한 언어이면 $A\lt_p C\lt_p B$ 인 $C$ 가 존재한다[^1]. 따라서 $\mathrm P\ne\mathrm{NP}$ 이면 $\mathrm P$ 와 NP-완전 사이에 다항시간 환원으로 서로 비교되지 않는 차수들과 끝없이 내려가는 사슬이 있다. 여기서 $A\lt_p B$ 는 $A\le_p B$ 이고 $B\not\le_p A$ 라는 뜻이다.

## 상대화

증명은 기계를 흉내 내고 답을 비교하기만 하므로 상대화된다. 모든 신탁 $A$ 에 대해 $\mathrm P^A\ne\mathrm{NP}^A$ 이면 $\mathrm{NP}^A$ 에 NP-중간 언어가 있다.

# 활용

- [그래프 동형](graph-isomorphism.md) 판정과 소인수분해는 NP-중간 후보다. Ladner 정리는 이런 후보가 있을 수 있는 자리를 보장할 뿐 특정 문제가 중간이라는 것을 증명하지 않는다. $\mathrm{SAT}\_H$ 는 덧붙이기로 만든 인공적 언어다.
- [다항 계층](polynomial-hierarchy.md)의 그래프 동형 결과와 함께 쓰인다. 그래프 동형이 NP-완전이면 다항 계층이 둘째 층으로 붕괴하므로, 그래프 동형은 계층이 붕괴하지 않는 한 NP-완전이 아니다.
- [Turing 차수](turing-degrees.md)의 Friedberg–Muchnik 정리가 계산 가능하게 열거 가능한 차수 사이에 중간 차수를 만든 것과 같은 꼴의 결과를 다항시간 환원에서 준다.

[^1]: R. E. Ladner, "On the structure of polynomial time reducibility", Journal of the ACM 22 (1975), 155–171.
[^2]: S. Arora, B. Barak, *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, 3.3 절.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)
- [시간 계층 정리](time-hierarchy-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #theorem
