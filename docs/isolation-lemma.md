# 고립 보조정리

# 개요

**고립 보조정리(isolation lemma)** 는 해가 여럿인 문제의 원소들에 무작위 무게를 주면, 무게 합이 가장 작은 해가 높은 확률로 하나뿐이라는 정리다. 꼭짓점 네 개인 사각형 그래프의 완전 [매칭](matchings.md)은 두 개이고, 간선 네 개에 $1$ 부터 $8$ 까지의 무게를 무작위로 주면 가장 가벼운 매칭이 하나뿐일 확률이 $1-4/8=1/2$ 이상이다. 이 보조정리로 해 하나를 골라내면, 해가 정확히 하나인 경우만 다루는 행렬식 계산으로 매칭을 병렬로 찾는 알고리즘이 정당화된다.

# 직관

고립 보조정리는 원소가 $m$ 개인 집합의 부분집합들로 이루어진 비지 않은 족 $\mathcal F$ 에 대해, 원소마다 $\lbrace 1,\dots,N\rbrace$ 에서 독립으로 균등하게 무게를 주면 무게 합이 최소인 $\mathcal F$ 의 원소가 하나뿐일 확률이 $1-m/N$ 이상이라는 정리다. 확률의 하한은 $\mathcal F$ 의 크기와 무관하다. K. Mulmuley, U. V. Vazirani, V. V. Vazirani 가 1987 년에 증명했다[^1].

해가 여럿인 문제에서 무작위 무게로 해 하나를 골라내는 데 쓰인다. 대표적인 쓰임은 완전 매칭을 행렬식 계산만으로 찾는 병렬 알고리즘이다.

이분 그래프에 완전 매칭이 있는지는 [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)에 따라 변마다 무작위 수를 넣은 [행렬](matrices.md)의 행렬식이 $0$ 인지로 판정된다. 매칭 하나를 실제로 찾으려면 어느 변이 매칭에 드는지 알아야 하는데, 완전 매칭이 여럿이면 변 하나를 빼도 다른 매칭이 남아 행렬식이 그대로 $0$ 이 아닐 수 있다. 완전 매칭이 하나뿐이면 변을 하나씩 빼 보며 행렬식이 $0$ 이 되는 변을 모으면 그 매칭이다.

그래서 매칭 여럿 가운데 하나만 다르게 보이게 만든다. 변마다 $1$ 부터 $N$ 까지의 무게를 무작위로 주면 매칭마다 무게 합이 정해지고, 무게 합이 가장 작은 매칭이 하나뿐이면 그 매칭이 골라진 것이다. 매칭이 지수적으로 많아도 가장 작은 것이 겹칠 확률은 변의 수 $m$ 과 $N$ 만으로 $m/N$ 이하가 된다.

# 정의

## 진술

$U$ 를 원소가 $m$ 개인 유한집합, $\mathcal F$ 를 $U$ 의 부분집합들로 이루어진 비지 않은 족이라 한다. 함수 $w\colon U\to\lbrace 1,\dots,N\rbrace$ 의 값을 원소마다 독립으로 균등하게 고르고, $S\subseteq U$ 의 무게를 $w(S)=\sum_{u\in S}w(u)$ 로 둔다. 그러면

$$
\Pr\Big\lbrack\ \text{무게가 }\min_{S\in\mathcal F}w(S)\text{ 인 }S\in\mathcal F\text{ 가 하나뿐이다}\ \Big\rbrack\ge 1-\frac{m}{N}
$$

이다. 확률은 [유한 확률 공간](probability.md) $\lbrace 1,\dots,N\rbrace^U$ 위의 [균등분포](uniform-distribution.md)로 잰다.

# 성질

## 증명의 요지

원소 $u$ 에 대해, 최소 무게인 $\mathcal F$ 의 원소 가운데 $u$ 를 포함하는 것과 포함하지 않는 것이 둘 다 있으면 $u$ 를 **특이 원소(singular element)** 라 한다. 최소 무게인 원소가 둘 이상이면 그 둘의 대칭차에 있는 원소가 특이 원소다.

$u$ 를 고정하고 $u$ 가 아닌 원소의 무게를 먼저 정한다. $u$ 를 포함하지 않는 $S\in\mathcal F$ 의 최소 무게를 $a$, $u$ 를 포함하는 $S$ 에 대해 $w(S)-w(u)$ 의 최솟값을 $b$ 라 두면 $a,b$ 는 $w(u)$ 와 무관하다. $u$ 가 특이 원소인 것은 $b+w(u)=a$ 인 것과 동치이므로, 확률은 $w(u)$ 가 값 $a-b$ 하나에 떨어질 확률 $1/N$ 이하다. $u$ 에 대해 더하면 특이 원소가 있을 확률이 $m/N$ 이하다.

## 상한의 꼴

하한 $1-m/N$ 에는 $\mathcal F$ 의 크기가 들어 있지 않다. $\mathcal F$ 가 $2^m$ 개의 부분집합 전체여도 같다. $N=2m$ 으로 잡으면 확률이 $1/2$ 이상이고, 무게의 비트 수는 $O(\log m)$ 이다.

## 이분 매칭의 고립

꼭짓점이 $\lbrace a_1,\dots,a_n\rbrace$ 과 $\lbrace b_1,\dots,b_n\rbrace$ 으로 나뉜 이분 그래프의 변 $a_ib_j$ 에 무게 $w_{ij}$ 를 주고, $B_{ij}=2^{w_{ij}}$ (변이 없으면 $0$)인 $n\times n$ 행렬 $B$ 를 둔다. [행렬식](determinants.md)을 전개하면

$$
\det B=\sum_{M}\pm 2^{w(M)}
$$

이고 합은 완전 매칭 $M$ 전체에 걸친다. 최소 무게 $W$ 인 완전 매칭이 하나뿐이면 $\det B$ 를 나누는 $2$ 의 가장 큰 거듭제곱이 $2^W$ 다. 같은 논리로 변 $a_ib_j$ 가 그 매칭에 드는 것과 $2^{w_{ij}}\det B^{(ij)}/2^W$ 가 홀수인 것이 동치다. $B^{(ij)}$ 는 $B$ 에서 $i$ 행과 $j$ 열을 지운 행렬이다.

# 활용

- 병렬 매칭 알고리즘. 행렬식은 다항 개의 처리기로 $O(\log^2 n)$ 단계에 계산되므로, 위 판정으로 모든 변을 동시에 확인해 완전 매칭을 찾는다. 이것이 완전 매칭 찾기가 무작위 병렬 다항로그 시간 부류 RNC(randomized Nick's class)에 든다는 증명이다[^1]. 일반 그래프에서는 Tutte 행렬(Tutte matrix)로 같은 일을 한다.
- 유일 해로의 환원. L. G. Valiant 와 V. V. Vazirani 는 [범용 해시족](universal-hashing.md)의 무작위 제약을 더해 만족 가능한 논리식을 해가 하나뿐인 논리식으로 바꾸는 무작위 환원을 주었다[^2]. 이것이 [Valiant–Vazirani 정리](valiant-vazirani.md)다. 이 보조정리와 같은 목표를 다른 도구로 이룬 결과이고, 해가 하나뿐임이 약속된 SAT(satisfiability) 문제도 무작위 환원 아래에서 NP(nondeterministic polynomial time)-어렵다는 것을 보인다.
- 탈무작위화. S. Fenner, R. Gurjar, T. Thierauf 는 이분 그래프에서 무게를 무작위로 고르는 대신 준다항 개의 무게 함수 가운데 하나가 반드시 고립시키도록 만들어, 이분 완전 매칭을 결정적 준다항 크기 병렬 회로로 찾았다[^3].

[^1]: K. Mulmuley, U. V. Vazirani, V. V. Vazirani, "Matching is as easy as matrix inversion", Combinatorica 7(1) (1987), 105–113.
[^2]: L. G. Valiant, V. V. Vazirani, "NP is as easy as detecting unique solutions", Theoretical Computer Science 47 (1986), 85–93.
[^3]: S. Fenner, R. Gurjar, T. Thierauf, "Bipartite perfect matching is in quasi-NC", Proceedings of the 48th ACM Symposium on Theory of Computing (2016), 754–763.

# 연관 문서

## 선수지식

- [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)
- [매칭](matchings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #algorithms #combinatorics #probability
