# Garside 정규형

# 개요

**Garside 정규형(Garside normal form)** 은 [땋임군](braid-groups.md) $B_n$ 의 원소를 기본 땋임 $\Delta$ 의 거듭제곱과 단순 땋임들의 곱으로 유일하게 적는 표준형이다. $B_3$ 의 두 낱말 $\sigma_1\sigma_2\sigma_1^{-1}$ 과 $\sigma_2^{-1}\sigma_1\sigma_2$ 가 같은 땋임인지 물을 때, 역원이 섞인 낱말에는 관계를 어디에 쓸지 정해진 순서가 없다. Garside 정규형은 역원을 $\Delta$ 의 음의 거듭제곱 하나로 모아 맨 앞으로 보내고 나머지를 정해진 규칙으로 적어, 두 낱말이 같은지를 정규형의 비교로 판정한다.

# 직관

$B_3$ 의 두 낱말 $\sigma_1\sigma_2\sigma_1^{-1}$ 과 $\sigma_2^{-1}\sigma_1\sigma_2$ 가 같은 땋임인지 묻는다. 관계 $\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2$ 를 앞뒤로 써 볼 수 있지만, 역원이 섞인 낱말은 관계를 어디에 쓸지 정해진 순서가 없다.

역원을 없앤다. $\Delta=\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2$ 로 두면 $\sigma_1^{-1}=\sigma_2\sigma_1\Delta^{-1}$ 이고 $\sigma_2^{-1}=\sigma_1\sigma_2\Delta^{-1}$ 이다. 또 $\Delta^{-1}\sigma_1=\sigma_2\Delta^{-1}$, $\Delta^{-1}\sigma_2=\sigma_1\Delta^{-1}$ 이므로 $\Delta^{-1}$ 을 낱말의 맨 앞으로 옮길 수 있다.

첫 낱말은 $\sigma_1\sigma_2\sigma_2\sigma_1\Delta^{-1}=\Delta^{-1}\sigma_2\sigma_1\sigma_1\sigma_2$ 가 된다. 둘째 낱말은 $\sigma_1\sigma_2\Delta^{-1}\sigma_1\sigma_2=\sigma_1\sigma_2\sigma_2\sigma_1\Delta^{-1}=\Delta^{-1}\sigma_2\sigma_1\sigma_1\sigma_2$ 가 된다. 두 결과가 글자 그대로 같으므로 두 낱말은 같은 땋임이다.

이 계산에서 남는 것은 $\Delta$ 의 거듭제곱과 역원 없는 양의 낱말이다. 양의 낱말끼리 같은지는 아직 관계를 써 봐야 알 수 있으므로, 양의 부분을 정해진 방식으로 다시 자르는 규칙이 Garside 정규형이다.

이 표준형으로 $B_n$ 의 낱말 문제(word problem)가 다항시간에 풀린다. 같은 구조를 가진 군을 Garside 군이라 하고 유한형 Artin 군이 그 예다.

# 정의

## 양의 땋임 모노이드와 기본 땋임

생성원 $\sigma_1,\dots,\sigma_{n-1}$ 과 땋임 관계로 표시된 모노이드를 양의 땋임 모노이드(positive braid monoid) $B_n^+$ 라 한다. **기본 땋임(fundamental braid)** 은

$$
\Delta=(\sigma_1\sigma_2\cdots\sigma_{n-1})(\sigma_1\cdots\sigma_{n-2})\cdots(\sigma_1\sigma_2)\sigma_1
$$

이고 모든 가닥 쌍을 한 번씩 교차시키는 반 바퀴 꼬임이다. $\Delta\sigma_i\Delta^{-1}=\sigma_{n-i}$ 이고 $\Delta^2$ 은 $B_n$ 의 중심에 속한다.

## 단순 땋임

$\Delta$ 를 왼쪽에서 나누는 양의 땋임, 곧 $\Delta=AB$ 인 양의 땋임 $B$ 가 있는 양의 땋임 $A$ 를 **단순 땋임(simple braid)** 이라 한다. 단순 땋임은 모든 가닥 쌍이 많아야 한 번 교차하는 양의 땋임이고, 가닥의 순열로 정해지므로 $n!$ 개다.

단순 땋임 $A$ 의 출발 집합 $S(A)$ 는 $A=\sigma_iA'$ 꼴로 쓸 수 있는 $i$ 전체이고, 도착 집합 $F(A)$ 는 $A=A''\sigma_i$ 꼴로 쓸 수 있는 $i$ 전체다.

## 왼쪽 정규형

$\beta\in B_n$ 이 다음 꼴이면 이를 $\beta$ 의 왼쪽 Garside 정규형이라 한다.

$$
\beta=\Delta^rA_1A_2\cdots A_m
$$

여기서 $r\in\mathbb Z$ 이고 $A_1,\dots,A_m$ 은 $1$ 도 $\Delta$ 도 아닌 단순 땋임이며, 모든 $i$ 에서 $S(A_{i+1})\subseteq F(A_i)$ 다. 마지막 조건은 $A_{i+1}$ 의 앞 글자를 $A_i$ 로 옮겨 $A_i$ 를 더 키울 수 없다는 뜻이다.

# 성질

## 존재와 유일성

양의 땋임 모노이드는 소거법칙을 만족하고 $B_n$ 에 매장된다[^1]. 모든 $\beta\in B_n$ 은 $\Delta^kP$ ($P\in B_n^+$) 꼴로 쓰이고, 왼쪽 정규형이 유일하게 존재한다[^2]. $r$ 과 $r+m$ 을 각각 $\mathrm{inf}(\beta)$, $\mathrm{sup}(\beta)$ 라 한다.

## 계산과 낱말 문제

길이 $L$ 인 낱말의 정규형은 $O(L^2n\log n)$ 시간에 계산된다[^2]. 두 단순 땋임 $A_i,A_{i+1}$ 이 조건을 어기면 $A_{i+1}$ 의 출발 집합 가운데 $F(A_i)$ 밖에 있는 글자를 $A_i$ 로 옮기는 국소 연산을 되풀이하고, 각 단순 땋임은 순열로 다루므로 한 연산이 $O(n\log n)$ 이다. 정규형이 유일하므로 두 낱말의 정규형이 같은 것과 같은 땋임인 것이 동치다.

## 켤레 문제

$\beta$ 의 켤레류 가운데 $\mathrm{inf}$ 가 최대이고 $\mathrm{sup}$ 이 최소인 원소 전체를 초정상 집합(super summit set)이라 한다. 이 집합은 유한이고 비어 있지 않으며, 두 땋임이 켤레인 것은 초정상 집합이 같은 것과 동치다. 순환(cycling)과 역순환(decycling)이라는 정규형 위의 연산으로 이 집합의 한 원소에 도달하고 집합 전체를 나열한다[^3]. 집합의 크기가 $n$ 에 대해 지수적으로 커질 수 있으므로 이 알고리즘은 다항시간이 아니다.

## Garside 군

위의 성질은 $\Delta$ 의 약수가 유한 격자를 이룬다는 것에서 나오므로, 같은 조건을 만족하는 모노이드와 원소 $\Delta$ 를 가진 군에서 똑같이 성립한다. 이런 군을 Garside 군(Garside group)이라 한다. 유한 [Coxeter 군](coxeter-groups.md)에 대응하는 Artin 군(Artin group)이 Garside 군이고, 그 낱말 문제와 켤레 문제가 같은 방법으로 풀린다[^4].

# 활용

- 낱말 문제의 계산. 땋임의 동위 판정과 땋임으로 표시된 사상류의 비교가 정규형 계산으로 이루어진다.
- 땋임군 암호. 켤레 문제를 어려운 문제로 놓은 키 교환 방식이 제안되었고, 초정상 집합과 그 개량으로 켤레 문제를 푸는 공격이 그 안전성을 판정하는 데 쓰였다.
- 땋임의 분류. 주기적, 환원 가능, 유사 Anosov 땋임을 가르는 Nielsen–Thurston 분류(Nielsen–Thurston classification)를 계산하는 알고리즘이 초정상 집합을 줄인 켤레류의 부분집합을 쓴다.

[^1]: F. Garside, The braid group and other groups, *Quart. J. Math. Oxford* **20** (1969), 235–254.
[^2]: D. Epstein, J. Cannon, D. Holt, S. Levy, M. Paterson, W. Thurston, *Word Processing in Groups*, Jones and Bartlett (1992), 9장.
[^3]: E. El-Rifai, H. Morton, Algorithms for positive braids, *Quart. J. Math. Oxford* **45** (1994), 479–497.
[^4]: E. Brieskorn, K. Saito, Artin-Gruppen und Coxeter-Gruppen, *Invent. Math.* **17** (1972), 245–271. P. Deligne, Les immeubles des groupes de tresses généralisés, *Invent. Math.* **17** (1972), 273–302.

# 연관 문서

## 선수지식

- [땋임군](braid-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #topology #algorithms
