# Burnside 의 pᵃqᵇ 정리

# 개요

**Burnside 의 $p^aq^b$ 정리(Burnside's $p^aq^b$ theorem)** 는 위수의 소인수가 두 개뿐인 유한군은 [가해군](solvable-groups.md)이라는 정리다. 가장 작은 비가환 단순군 $A_5$ 의 위수는 $60=2^2\cdot 3\cdot 5$ 로 소인수가 셋인데, 소인수가 둘인 위수에도 이런 단순군이 있는지는 부분군을 찾아보는 것만으로는 알 수 없다. 이 정리는 군의 [지표표](character-table.md)에서 켤레류 크기와 지표값을 계산해 그런 단순군이 없음을 보인다.

# 직관

정리는 $p,q$ 가 소수이고 위수가 $p^aq^b$ 인 유한군에 대한 것이고, 비가환 유한 단순군의 위수에 서로 다른 소인수가 셋 이상 있다는 것과 같다. 증명은 지표표의 열 직교관계와 지표값이 대수적 정수라는 것을 쓴다.

가장 작은 비가환 단순군은 위수 $60=2^2\cdot 3\cdot 5$ 인 교대군 $A_5$ 이고, 소인수가 셋이다. 소인수가 둘인 위수의 군 가운데 단순군이 있는지 묻는다. $A_5$ 의 [켤레류](conjugacy-classes.md) 크기는 $1,15,20,12,12$ 이고, $1$ 을 빼면 소수의 거듭제곱인 것이 하나도 없다.

위수가 $p^aq^b$ 인 군 $G$ 에서는 크기가 $p$ 의 거듭제곱인 켤레류가 반드시 생긴다. [Sylow 정리](sylow-theorems.md)로 위수 $q^b$ 인 부분군 $Q$ 를 잡으면, 소수 거듭제곱 위수의 군은 중심이 자명하지 않으므로 $Q$ 의 중심에 $g\ne 1$ 이 있다. $Q$ 의 원소는 전부 $g$ 와 가환이므로 $g$ 와 가환인 원소들의 부분군은 위수가 $q^b$ 의 배수이고, $g$ 의 켤레류 크기는 $\vert G\vert$ 를 그 위수로 나눈 값이라 $p$ 의 거듭제곱이다.

Burnside 는 지표표로 비가환 단순군에는 $\lbrace 1\rbrace$ 이 아니면서 크기가 소수의 거듭제곱인 켤레류가 없다는 것을 보였다. 위의 $g$ 는 이것과 모순이므로 위수 $p^aq^b$ 인 군은 단순군이 아니고, 귀납으로 가해군이 된다.

# 정의

$G$ 를 유한군, $\chi_1,\dots,\chi_r$ 을 기약지표, $\chi_1$ 을 자명지표라 한다. $g\in G$ 의 **중심화군(centralizer)** 은 $C_G(g)=\lbrace x\in G: xg=gx\rbrace$ 이고, $g$ 의 켤레류 $K$ 의 크기는 $\vert K\vert=\lbrack G:C_G(g)\rbrack$ 다.

복소수 $\alpha$ 가 최고차항 계수가 $1$ 인 정수계수 다항식의 근이면 **대수적 정수(algebraic integer)** 라 한다. 대수적 정수 전체는 환을 이루고, 대수적 정수인 유리수는 정수뿐이다.

정리의 진술은 다음과 같다[^1].

> $p,q$ 가 소수이고 $a,b\ge 0$ 일 때, 위수가 $p^aq^b$ 인 유한군은 가해군이다.

# 성질

## 지표값의 정수성

$\chi(g)$ 는 대수적 정수다. $g$ 의 위수를 $m$ 이라 하면 $\rho(g)^m=I$ 이므로 $\rho(g)$ 의 고윳값은 $1$ 의 $m$ 제곱근이고, $\chi(g)$ 는 그 합이다.

$\chi$ 가 기약지표이고 $K$ 가 $g$ 의 켤레류이면 $\vert K\vert\chi(g)/\chi(1)$ 도 대수적 정수다[^2]. 류합 $\widehat K=\sum_{x\in K}x$ 는 군환의 중심에 속하므로 Schur 보조정리(Schur's lemma)에 따라 기약표현에서 스칼라 $\omega_\chi(\widehat K)$ 로 작용한다. 대각합을 비교하면 $\omega_\chi(\widehat K)=\vert K\vert\chi(g)/\chi(1)$ 이다. 류합들의 정수 계수 일차결합은 곱셈으로 닫힌 유한생성 가군이므로 $\omega_\chi(\widehat K)$ 는 대수적 정수다.

## Burnside 의 지표값 보조정리

**Burnside 의 지표값 보조정리(Burnside's lemma on character values)**. $\chi$ 가 표현 $\rho$ 의 기약지표이고 $\gcd(\vert K\vert,\chi(1))=1$ 이면 $\chi(g)=0$ 이거나 $\rho(g)$ 가 스칼라 행렬이다.

정수 $u,v$ 로 $u\vert K\vert+v\chi(1)=1$ 을 잡으면

$$
\alpha=\frac{\chi(g)}{\chi(1)}=u\frac{\vert K\vert\chi(g)}{\chi(1)}+v\chi(g)
$$

는 대수적 정수다. $\alpha$ 는 $1$ 의 거듭제곱근 $\chi(1)$ 개의 평균이므로 $\vert\alpha\vert\le 1$ 이고, 등호는 고윳값이 모두 같을 때, 곧 $\rho(g)$ 가 스칼라일 때뿐이다. $\alpha$ 의 켤레들도 같은 꼴의 평균이므로 절댓값이 $1$ 이하다. 켤레 전부의 곱은 유리수인 대수적 정수, 곧 정수이고 절댓값이 $1$ 보다 작으면 $0$ 이다. 따라서 $\vert\alpha\vert\lt 1$ 이면 $\alpha=0$ 이다.

## 소수 거듭제곱 크기의 켤레류

**정리.** 유한군 $G$ 의 켤레류 $K\ne\lbrace 1\rbrace$ 의 크기가 소수 거듭제곱 $p^k$ ($k\ge 1$)이면 $G$ 는 단순군이 아니다.

$G$ 가 비가환 단순군이라 하고 $g\in K$ 를 잡는다. 자명하지 않은 기약표현 $\rho_i$ 의 핵은 정규부분군이므로 자명하고, $\rho_i(g)$ 가 스칼라이면 $g$ 가 중심에 속해 $g=1$ 이 된다. 따라서 $p\nmid\chi_i(1)$ 인 자명하지 않은 $\chi_i$ 에서는 지표값 보조정리로 $\chi_i(g)=0$ 이다. 열 직교관계를 $g$ 의 열과 항등원의 열에 쓰면

$$
0=\sum_{i=1}^r\chi_i(1)\chi_i(g)=1+\sum_{p\mid\chi_i(1)}\chi_i(1)\chi_i(g)
$$

이다. 양변을 $p$ 로 나누면 $-1/p=\sum_{p\mid\chi_i(1)}(\chi_i(1)/p)\chi_i(g)$ 가 대수적 정수들의 합이 되는데, $-1/p$ 는 정수가 아닌 유리수이므로 모순이다. $K$ 의 크기가 $p^k$ 이면 $\gcd(\vert K\vert,\chi_i(1))=1$ 과 $p\nmid\chi_i(1)$ 이 같은 조건이라는 점을 썼다.

## 정리의 증명

$\vert G\vert$ 에 대한 귀납이다. $a=0$ 이나 $b=0$ 이면 $G$ 는 소수 거듭제곱 위수의 군이라 중심이 자명하지 않고, 중심으로 나눈 몫에 귀납을 쓰면 가해군이다. $G$ 에 자명하지 않은 진정규부분군 $N$ 이 있으면 $N$ 과 $G/N$ 의 위수도 $p^{a'}q^{b'}$ 꼴이므로 귀납 가정으로 둘 다 가해군이고, 가해군의 확대이므로 $G$ 도 가해군이다.

남는 경우는 $G$ 가 단순군이고 $a,b\ge 1$ 인 경우다. 가환이면 소수 위수 순환군이라 위수에 소인수가 하나뿐이므로 $G$ 는 비가환이다. 직관 절의 논법으로 Sylow $q$ 부분군의 중심에서 $g\ne 1$ 을 잡으면 켤레류 크기가 $p^k$ 다. $k=0$ 이면 $g$ 가 중심에 속해 비가환 단순군과 모순이고, $k\ge 1$ 이면 앞 절의 정리와 모순이다.

## 표현론을 쓰지 않는 증명

Goldschmidt(1970)와 Matsuyama(1973)가 지표를 쓰지 않는 군론적 증명을 내놓았다[^3]. 이 증명은 Feit–Thompson 정리(Feit–Thompson theorem)의 증명에 쓰인 국소 해석(local analysis) 기법을 쓰고, 지표 증명보다 길다.

# 활용

- [유한 단순군 분류](finite-simple-groups.md)의 첫 단계. 비가환 단순군의 위수는 소인수가 셋 이상이므로 $60$ 미만에 비가환 단순군이 없다.
- 가해군 판정. 위수 $p^aq^b$ 인 군은 합성열의 인자가 전부 소수 위수 순환군이므로 Galois 군이 이 위수인 표수 $0$ 의 체 위 다항식은 거듭제곱근으로 풀린다.

[^1]: W. Burnside, On groups of order $p^\alpha q^\beta$, *Proceedings of the London Mathematical Society* (2) 1 (1904), 388–392.
[^2]: I. M. Isaacs, *Character Theory of Finite Groups*, Academic Press, 1976, Chapter 3 — 류합의 중심 지표, Burnside 의 지표값 보조정리(Theorem 3.8), $p^aq^b$ 정리(Theorem 3.10).
[^3]: D. M. Goldschmidt, A group theoretic proof of the $p^aq^b$ theorem for odd primes, *Mathematische Zeitschrift* 113 (1970), 373–375. H. Matsuyama, Solvability of groups of order $2^ap^b$, *Osaka Journal of Mathematics* 10 (1973), 375–378.

# 연관 문서

## 선수지식

- [가해군](solvable-groups.md)
- [지표표](character-table.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #algebra #theorem
