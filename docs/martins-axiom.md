# Martin 의 공리

# 개요

Martin 의 공리는 조건이 좋은 부분순서에서 조밀집합을 연속체 개수 미만으로 만나는 필터가 실제로 존재한다는 주장이다. [강제법](forcing.md)은 가산 개의 조밀집합을 만나는 필터를 가산 추이 모형 위에서 만든다. Martin 의 공리는 그 개수를 연속체 미만까지 올리고, 모형을 바꾸지 않고 지금의 우주 안에서 필터를 준다.

[연속체 가설](continuum-hypothesis.md)이 참이면 이 주장은 Rasiowa–Sikorski 보조정리와 같아진다. 연속체 가설이 거짓인 모형에서는 새 주장이 되고, 그 경우도 ZFC(Zermelo–Fraenkel with choice)와 무모순이다.

위상 쪽에서 보면 이 주장은 [Baire 범주 정리](baire-category.md)의 가산 조건을 비가산 개로 올린 것이다.

# 직관

강제법은 가산 추이 모형 $M$ 바깥에 새 모형 $M\lbrack G\rbrack$ 을 만든다. 새 모형에서 성립하는 것을 지금 있는 우주에서 쓰려면 일반 필터 $G$ 가 우주 안에 있어야 한다. 그런 $G$ 는 조밀집합을 몇 개까지 만날 수 있는가.

유한 비트열 전체의 순서 $P$ 를 잡는다. $q \le p$ 는 $q$ 가 $p$ 뒤에 비트를 더 붙인 것이라는 뜻이다. 실수 $x$ 를 무한 비트열로 보고, 각 $x$ 마다 조건들의 모임 $D_x$ 를 만든다. $D_x$ 는 $x$ 와 값이 갈리는 자리를 이미 정한 유한 비트열 전체다. 아무 유한 비트열 $p$ 에서 출발해도 다음 자리를 $x$ 와 다른 값으로 붙이면 $D_x$ 에 들어가므로 $D_x$ 는 조밀하다.

필터 $G$ 가 모든 실수 $x$ 에 대해 $D_x$ 를 만난다고 하자. $G$ 의 조건들을 이어 붙이면 무한 비트열 하나가 나오고, 그 비트열은 모든 $x$ 와 어느 자리에서 갈린다. 그런데 무한 비트열도 실수다. 자기 자신과 갈리는 실수는 없으므로 그런 $G$ 는 없다. 조밀집합을 연속체 개수만큼 만나는 필터는 존재하지 않는다.

가산 개는 Rasiowa–Sikorski 보조정리로 언제나 된다. 남은 것은 가산보다 많고 연속체보다 적은 개수다. 그 범위에서 필터가 존재한다고 주장하는 것이 Martin 의 공리다.

순서에는 제한이 필요하다. $\omega$ 에서 $\omega_1$ 로 가는 유한 부분함수들의 순서를 잡고, $\xi \lt \omega_1$ 마다 $\xi$ 를 치역에 넣는 조건들의 모임을 만들면 그 모임도 조밀하다. $\aleph_1$ 개의 조밀집합을 전부 만나는 필터는 $\omega$ 에서 $\omega_1$ 위로 가는 함수를 만들어 $\omega_1$ 을 가산으로 만든다. 이 순서에는 서로 양립하지 않는 조건이 $\aleph_1$ 개 있고, 가산 반사슬 조건(countable chain condition, ccc)을 요구하면 이 예가 걸러진다.

# 정의

## 조건과 필터

부분순서 $(P, \le)$ 의 원소를 **조건**이라 한다. $p, q$ 는 $r \le p$ 이고 $r \le q$ 인 $r$ 이 있으면 **양립한다**고 하고, 서로 양립하지 않는 조건들의 집합을 **반사슬**이라 한다. $P$ 의 반사슬이 모두 가산이면 $P$ 가 **ccc** 를 만족한다고 한다.

$D \subseteq P$ 가 **조밀**하다는 것은 모든 $p \in P$ 에 대해 $q \le p$ 인 $q \in D$ 가 있다는 뜻이고, $G \subseteq P$ 가 **필터**라는 것은 $G$ 가 위로 닫혀 있고 $G$ 의 두 원소가 $G$ 안에서 양립한다는 뜻이다.

## Martin 의 공리

Martin 의 공리(Martin's axiom)를 조밀집합의 개수마다 나누어 쓴다. 기수 $\kappa$ 에 대해 $\mathrm{MA}(\kappa)$ 는 다음 주장이다.

> $P$ 가 ccc 를 만족하는 부분순서이고 $\mathcal D$ 가 $P$ 의 조밀집합들의 모임으로 $\vert \mathcal D\vert \le \kappa$ 이면, 모든 $D \in \mathcal D$ 에 대해 $G \cap D \neq \varnothing$ 인 필터 $G \subseteq P$ 가 있다.

**Martin 의 공리**는 $\kappa \lt 2^{\aleph_0}$ 인 모든 $\kappa$ 에 대해 $\mathrm{MA}(\kappa)$ 가 성립한다는 주장이다.

## 강제 공리

$\mathrm{MA}(\kappa)$ 에서 ccc 자리에 다른 순서 종류를 넣은 주장을 **강제 공리**라 한다. 고유 강제 공리는 고유 순서에 대한 $\mathrm{MA}(\aleph_1)$ 이고, Martin 의 최대는 정상집합을 보존하는 순서에 대한 $\mathrm{MA}(\aleph_1)$ 이다.

# 성질

## 성립하는 경계와 성립하지 않는 경계

**정리(Rasiowa–Sikorski).** $\mathrm{MA}(\aleph_0)$ 은 ZFC 의 정리다.

증명은 조밀집합을 $D_0, D_1, \dots$ 로 줄 세우고 $p_{n+1} \in D_n$ 을 $p_n$ 보다 강하게 잡는 것이다. 이 단계에서 ccc 는 쓰이지 않는다.

**정리.** $\mathrm{MA}(2^{\aleph_0})$ 은 거짓이다.

직관 절의 계산이 증명이다. 유한 비트열의 순서는 조건이 유한이므로 ccc 를 만족하고, 조밀집합 $D_x$ 를 실수마다 하나씩 잡으면 $2^{\aleph_0}$ 개다. 이것을 전부 만나는 필터는 모든 실수와 갈리는 실수를 만든다.

같은 논법에서 따름정리가 나온다.[^1]

**따름정리.** $\mathrm{MA}(\kappa)$ 이면 $2^{\aleph_0} \gt \kappa$ 다.

$\kappa$ 개의 실수 $\lbrace x_\alpha : \alpha \lt \kappa\rbrace$ 를 잡고 $D_{x_\alpha}$ 를 전부 만나는 필터를 얻으면 이 $\kappa$ 개 어느 것과도 다른 실수가 나오므로, 실수 전체를 $\kappa$ 개로 줄 세울 수 없다.

따라서 연속체 가설이 참이면 Martin 의 공리는 $\mathrm{MA}(\aleph_0)$ 뿐이고 자동으로 성립한다. Martin 의 공리가 내용을 갖는 것은 $2^{\aleph_0} \gt \aleph_1$ 인 모형에서다.

## 무모순성

**정리(Solovay–Tennenbaum).** ZFC 가 무모순이면 ZFC 와 Martin 의 공리와 $2^{\aleph_0} = \aleph_2$ 가 함께 무모순이다.[^2]

증명은 길이 $\omega_2$ 의 유한 지지 반복 강제법이다. 각 단계에서 ccc 순서를 하나 골라 강제하고, 크기가 $\aleph_1$ 이하인 ccc 순서가 모두 어느 단계에선가 나오도록 부기 함수로 관리한다. ccc 순서의 유한 지지 반복이 다시 ccc 이므로 기수가 보존되고, 최종 모형에서 임의의 ccc 순서와 $\aleph_1$ 개의 조밀집합이 주어지면 그 순서의 반사슬 구조가 어느 중간 단계에 이미 들어와 있어 그 단계의 일반 필터가 답이 된다.

크기가 $\aleph_1$ 이하인 순서만 다루어도 되는 것은 다음 때문이다. $\mathcal D$ 가 $\aleph_1$ 개의 조밀집합이면 $P$ 의 가산 부분구조를 $\aleph_1$ 개 이어 붙여 각 $D \in \mathcal D$ 와의 교집합이 그 부분구조 안에서 조밀한 크기 $\aleph_1$ 의 부분순서를 얻는다.

## 측도와 범주

**정리.** $\mathrm{MA}(\kappa)$ 이면 $\kappa$ 개 이하의 Lebesgue 영집합의 합집합은 영집합이고, $\kappa$ 개 이하의 조밀한 열린집합의 교집합은 조밀하다.

뒤 진술은 Baire 범주 정리를 가산 개에서 $\kappa$ 개로 올린 것이다. 증명은 순서를 알맞게 고르는 것이다. 범주 쪽은 유리수 구간들의 순서를, 측도 쪽은 측도가 작은 열린집합들의 순서를 쓰고, 두 순서 모두 ccc 를 만족한다. Martin 의 공리 아래에서는 실수를 $\aleph_1$ 개의 영집합으로 덮을 수 없고, $\aleph_1$ 개 미만의 실수 집합은 항상 [측도](measure.md) $0$ 이다.

## Suslin 가설

**정리.** Martin 의 공리와 연속체 가설의 부정을 함께 가정하면 Suslin 나무가 없다.

Suslin 나무는 가산 반사슬과 가산 사슬만 갖는 높이 $\omega_1$ 의 나무다. 그런 나무가 있으면 그것을 거꾸로 세운 순서가 ccc 를 만족하고, 높이 $\alpha$ 이상의 마디들의 모임이 $\alpha \lt \omega_1$ 마다 조밀집합이 된다. $\mathrm{MA}(\aleph_1)$ 을 쓰면 이 $\aleph_1$ 개의 조밀집합을 만나는 필터가 나오고, 그 필터는 나무 안의 길이 $\omega_1$ 인 사슬이므로 가산 사슬 조건에 어긋난다.

이 정리와 [구성가능 우주](constructible-universe.md)에서 Suslin 나무를 짓는 Jensen 의 구성을 합치면, 조밀하고 끝점이 없으며 분리 가능성 대신 ccc 만 만족하는 완비 선형순서가 실직선과 동형인가 하는 [Suslin 가설](suslin-problem.md)이 ZFC 와 독립임이 나온다.

# 활용

- Suslin 가설의 독립성 증명에서 한쪽 방향이 위의 정리다. 다른 쪽은 구성가능 우주에서 나온다.
- 기수 불변량 사이의 관계를 규정한다. Martin 의 공리는 영집합 합집합의 가법성, 성긴 집합 합집합의 가법성, 유사순서의 탑 높이를 모두 $2^{\aleph_0}$ 으로 만든다. Bell 은 $\sigma$ -중심 순서로 제한한 $\mathrm{MA}(\kappa)$ 가 유사교차수 $\mathfrak p$ 에 대한 $\mathfrak p \gt \kappa$ 와 동치임을 보였다.[^3]
- Whitehead 문제, 곧 $\mathrm{Ext}^1(A, \mathbb Z) = 0$ 인 Abel [군](groups.md) $A$ 가 자유군인가 하는 물음의 독립성 증명에 Martin 의 공리가 쓰인다. Shelah 는 구성가능 우주에서 답이 참이고 Martin 의 공리와 연속체 가설의 부정 아래에서 거짓임을 보였다.
- 위상공간론에서 ccc 공간의 곱이 다시 ccc 인가, 정규 Moore 공간이 거리화 가능한가 같은 물음이 Martin 의 공리 아래에서 답을 갖는다.
- 강제 공리를 세우는 틀을 준다. 고유 강제 공리와 Martin 의 최대는 순서의 종류를 넓힌 것이고, 둘 다 $2^{\aleph_0} = \aleph_2$ 를 함의한다.

[^1]: Kenneth Kunen, *Set Theory: An Introduction to Independence Proofs*, North-Holland (1980), Ch. II. Martin 의 공리의 정의, 연속체와의 관계, Suslin 나무로의 적용이 이 장에 있다.
[^2]: R. M. Solovay and S. Tennenbaum, "Iterated Cohen Extensions and Souslin's Problem", Annals of Mathematics 94 (1971), https://www.jstor.org/stable/1970860
[^3]: Murray G. Bell, "On the combinatorial principle $P(\mathfrak c)$", Fundamenta Mathematicae 114 (1981).

# 연관 문서

## 선수지식

- [강제법](forcing.md)
- [Baire 범주 정리](baire-category.md)

## 더 알아보기

- [Suslin 문제](suslin-problem.md)

#set_theory #logic #foundations #topology
