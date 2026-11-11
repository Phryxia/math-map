# 역 Galois 문제

# 개요

**역 Galois 문제(inverse Galois problem)** 는 주어진 유한군이 유리수체 $\mathbb Q$ 의 어떤 Galois 확대의 Galois 군으로 나타나는지를 묻는 문제다. 다항식 하나를 주면 그 근들을 맞바꾸는 대칭의 군이 정해진다. 거꾸로 위수 $3$ 인 순환군을 먼저 정해 두고, 근들의 대칭이 정확히 이 군인 유리수 계수 다항식을 찾을 수 있는가가 이런 물음이다.

군마다 그 군을 대칭으로 갖는 체를 직접 만들어 답한다. 아벨군은 원분체의 부분체로, 대칭군은 근의 개수만큼 변수를 둔 다항식에 유리수를 대입해 얻는다.

# 직관

위수 $3$ 인 순환군을 Galois 군으로 갖는 $\mathbb Q$ 의 확대를 찾는다. [Artin 의 고정체 정리](artin-fixed-field-theorem.md)는 아무 유한군이나 어떤 체 위의 Galois 군으로 만들지만, 그 바닥체는 유리함수의 체여서 $\mathbb Q$ 가 아니다.

$\zeta=e^{2\pi i/7}$ 로 두면 [원분체](cyclotomic-fields.md) $\mathbb Q(\zeta)$ 의 Galois 군은 $(\mathbb Z/7\mathbb Z)^\times$ 이고, 이 군은 위수 $6$ 인 순환군이다. 그 안의 위수 $2$ 부분군 $\lbrace\pm 1\rbrace$ 는 $\zeta$ 를 $\zeta^{-1}$ 로 보내는 켤레를 가리키고, 이 부분군이 고정하는 체는 $\mathbb Q(\zeta+\zeta^{-1})$ 이다.

[Galois 이론](galois-theory.md)의 대응으로 $\mathbb Q(\zeta+\zeta^{-1})$ 의 Galois 군은 몫군 $(\mathbb Z/7\mathbb Z)^\times/\lbrace\pm1\rbrace$ 이고, 이것이 위수 $3$ 인 순환군이다. $\zeta+\zeta^{-1}=2\cos(2\pi/7)$ 의 최소다항식은 다음과 같다.

$$
x^3+x^2-2x-1
$$

이 다항식의 세 근 $2\cos(2\pi/7)$, $2\cos(4\pi/7)$, $2\cos(6\pi/7)$ 은 순환적으로만 맞바뀐다. 원하는 군을 큰 확대의 Galois 군의 몫으로 만들고 고정체를 잡는 것이 이 문제를 푸는 첫 방법이다.

# 정의

체 $K$ 와 유한군 $G$ 에 대해, Galois 확대 $L/K$ 가 있어 $\mathrm{Gal}(L/K)\cong G$ 이면 $G$ 가 **$K$ 위에서 실현된다(realizable over K)** 고 한다. 직관 절의 위수 $3$ 인 순환군은 $L=\mathbb Q(\zeta+\zeta^{-1})$ 로 $\mathbb Q$ 위에서 실현된다.

**역 Galois 문제** 는 모든 유한군이 $\mathbb Q$ 위에서 실현되는지를 묻는다. 이 물음은 열려 있다[^1].

# 성질

## 아벨군

*정리.* 모든 유한 아벨군은 $\mathbb Q$ 위에서 실현된다.

*증명의 요지.* $G\cong\mathbb Z/n_1\times\cdots\times\mathbb Z/n_k$ 로 쓴다. Dirichlet 의 산술수열의 소수 정리([Dirichlet L 함수](dirichlet-l-functions.md))로 $p_i\equiv 1\pmod{n_i}$ 인 서로 다른 소수 $p_1,\dots,p_k$ 를 잡는다. $(\mathbb Z/p_i\mathbb Z)^\times$ 는 위수 $p_i-1$ 인 순환군이므로 $\mathbb Z/n_i$ 로 가는 전사 준동형이 있다. $m=p_1\cdots p_k$ 이면 $\mathrm{Gal}(\mathbb Q(\zeta_m)/\mathbb Q)\cong\prod(\mathbb Z/p_i\mathbb Z)^\times$ 가 $G$ 위로 가고, 그 핵의 고정체가 $G$ 를 실현한다. ∎

직관 절은 $n_1=3$, $p_1=7$ 인 경우다.

## 대칭군

다항식 $x^5-x-1$ 의 Galois 군은 [대칭군](symmetric-groups.md) $S_5$ 이다. 판별식 $5^5-4^4=2869=19\cdot 151$ 은 $2$ 와 $5$ 로 나누어지지 않으므로, 법 $2$ 와 법 $5$ 의 인수분해 꼴이 Galois 군 원소의 순환 꼴을 준다.

법 $5$ 에서 $x^5-x-1$ 은 [Artin–Schreier 이론](artin-schreier-theory.md)의 다항식이라 기약이고, 길이 $5$ 인 순환이 Galois 군에 있다. 법 $2$ 에서는 다음 인수분해가 성립한다.

$$
x^5+x+1=(x^2+x+1)(x^3+x^2+1)
$$

그래서 꼴이 $(2,3)$ 인 원소 $\sigma$ 가 Galois 군에 있고, $\sigma^3$ 은 호환이다.

길이 $5$ 인 순환과 호환은 $S_5$ 를 생성하므로 Galois 군은 $S_5$ 다. 일반적으로 $n$ 마다 Galois 군이 $S_n$ 인 유리수 계수 다항식이 있다. 계수를 변수로 둔 다음 다항식은 $\mathbb Q(t_1,\dots,t_n)$ 위에서 Galois 군이 $S_n$ 이다.

$$
x^n+t_1x^{n-1}+\cdots+t_n
$$

[Hilbert 기약성 정리](hilbert-irreducibility-theorem.md)로 변수에 유리수를 넣어도 Galois 군이 $S_n$ 으로 남는 값이 있다[^1]. 같은 논법으로 교대군 $A_n$ 도 $\mathbb Q$ 위에서 실현된다.

## Noether 문제

$G\subset S_n$ 이 변수 $x_1,\dots,x_n$ 을 맞바꾸어 작용할 때, 고정체 $\mathbb Q(x_1,\dots,x_n)^G$ 가 유리함수체 $\mathbb Q(t_1,\dots,t_n)$ 과 같은지를 묻는 것이 **Noether 문제(Noether's problem)** 다. 답이 긍정이면 Hilbert 기약성 정리로 $G$ 가 $\mathbb Q$ 위에서 실현된다. 위수 $47$ 인 순환군에서는 답이 부정이므로[^2], 이 길로 모든 군을 실현하지는 못한다. 위수 $47$ 인 순환군 자체는 아벨군이므로 앞 절의 방법으로 실현된다.

## 가해군과 단순군

Shafarevich 는 모든 [가해군](solvable-groups.md)이 $\mathbb Q$ 위에서 실현된다는 것을 증명했다[^3]. 비가해군 쪽에서는 강체 방법(rigidity method)이 군의 켤레류 세 개의 조건으로 실현을 보이고, 이 방법으로 Monster 군을 포함한 산재 단순군 다수가 $\mathbb Q$ 위에서 실현된다[^4].

# 활용

- [Artin 의 고정체 정리](artin-fixed-field-theorem.md)의 활용 절이 이 문제를 바닥체가 $\mathbb Q$ 인 판으로 가리킨다. 그 정리가 주는 바닥체 $K^G$ 를 $\mathbb Q$ 로 내리는 것이 Noether 문제의 길이다.
- [군 확대](group-extensions.md)의 매장 문제는 몫군 $Q$ 를 실현하는 확대를 $G$ 를 실현하는 확대 안에 넣는 물음이고, Shafarevich 의 가해군 실현은 매장 문제를 되풀이해 푸는 방식으로 증명된다.

[^1]: J.-P. Serre, *Topics in Galois Theory*, Jones and Bartlett, 1992, Introduction, Chapter 3, Chapter 4 — 문제의 진술과 열려 있다는 서술, Hilbert 기약성 정리와 $S_n$, $A_n$ 의 실현.
[^2]: R. G. Swan, "Invariant rational functions and a problem of Steenrod", *Inventiones Mathematicae* 7 (1969) 148–158 — 위수 47 인 순환군의 Noether 문제의 부정적 답.
[^3]: J. Neukirch, A. Schmidt, K. Wingberg, *Cohomology of Number Fields*, 2nd ed., Springer, 2008, Chapter IX §6 — 가해군의 실현에 관한 Shafarevich 정리.
[^4]: G. Malle, B. H. Matzat, *Inverse Galois Theory*, 2nd ed., Springer, 2018, Chapter II — 강체 방법과 산재 단순군의 실현.

# 연관 문서

## 선수지식

- [Artin 의 고정체 정리](artin-fixed-field-theorem.md)
- [원분체](cyclotomic-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #number_theory #group_theory
