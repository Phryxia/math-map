# Noether 문제

# 개요

**Noether 문제(Noether's problem)** 는 유한군 $G$ 가 변수 $x_1,\dots,x_n$ 을 맞바꿀 때, $G$ 의 작용으로 바뀌지 않는 유리함수 전체가 다시 독립 변수 몇 개의 유리함수 전체와 같은지를 묻는 문제다. 두 변수를 맞바꾸는 군에서 바뀌지 않는 유리함수는 $x+y$ 와 $xy$ 의 유리함수로 모두 적힌다. 군이 커지거나 모양이 바뀌어도 이렇게 새 변수 몇 개로 적히는지가 물음이다.

답이 긍정인 군은 [Hilbert 기약성 정리](hilbert-irreducibility-theorem.md)로 유리수체 위의 Galois 군으로 실현되므로, 이 문제는 [역 Galois 문제](inverse-galois-problem.md)를 푸는 한 방법이다.

# 직관

$\mathbb Q(x,y)$ 에서 $x$ 와 $y$ 를 맞바꾸는 군 $G=\lbrace 1,\sigma\rbrace$ 를 본다. $u=x+y$ 와 $v=xy$ 는 맞바꿔도 그대로이고, $x$ 와 $y$ 는 이차방정식 $T^2-uT+v=0$ 의 두 근이다.

[Artin 의 고정체 정리](artin-fixed-field-theorem.md)로 $\lbrack\mathbb Q(x,y):\mathbb Q(x,y)^G\rbrack=2$ 이고, $\mathbb Q(u,v)$ 위에서도 $\mathbb Q(x,y)$ 는 이 이차방정식으로 차수가 $2$ 이하다. 두 체가 같으므로 고정체는 $\mathbb Q(u,v)$ 이고, $u$ 와 $v$ 사이에는 다항식 관계가 없다.

이제 $u$ 와 $v$ 에 유리수를 넣으면 $T^2-uT+v$ 는 Galois 군이 $G$ 인 다항식이 되거나 갈라진다. 고정체가 독립 변수의 유리함수체이면 이렇게 변수에 값을 넣어 $G$ 를 Galois 군으로 갖는 유리수 계수 다항식을 얻는다.

# 정의

유한군 $G$ 가 $\lbrace 1,\dots,n\rbrace$ 에 작용하면, 변수의 첨자를 바꾸어 $G$ 가 유리함수체 $\mathbb Q(x_1,\dots,x_n)$ 에 작용한다. 그 고정체를 $\mathbb Q(x_1,\dots,x_n)^G$ 라 한다.

고정체가 대수적으로 독립인 원소 $t_1,\dots,t_n$ 으로 $\mathbb Q(t_1,\dots,t_n)$ 이 되면, 곧 [초월차수](transcendence-degree.md) $n$ 의 순수 초월 확대이면 Noether 문제의 답이 **긍정** 이라 한다. 직관 절의 맞바꿈에서 답은 긍정이고 $t_1=x+y$, $t_2=xy$ 다.

# 성질

## 대칭군

$S_n$ 이 $x_1,\dots,x_n$ 을 모두 맞바꾸면 고정체는 기본대칭다항식 $e_1,\dots,e_n$ 의 유리함수체 $\mathbb Q(e_1,\dots,e_n)$ 이다. 직관 절의 논증을 $n$ 개 변수로 넓힌 것이고, 그 정리는 [Artin 의 고정체 정리](artin-fixed-field-theorem.md)의 대칭 유리함수 절에 있다.

## 역 Galois 문제와의 관계

*정리.* $\mathbb Q(x_1,\dots,x_n)^G$ 가 $\mathbb Q(t_1,\dots,t_n)$ 이면 $G$ 는 $\mathbb Q$ 위에서 Galois 군으로 실현된다[^1].

*증명의 요지.* $\mathbb Q(x_1,\dots,x_n)$ 은 $\mathbb Q(t_1,\dots,t_n)$ 위에서 Galois 군이 $G$ 인 확대다. 원시원소의 최소다항식은 $t_1,\dots,t_n$ 을 계수에 갖고, Hilbert 기약성 정리의 Galois 군의 판으로 $t_i$ 에 유리수를 넣어도 Galois 군이 $G$ 로 남는 값이 있다. ∎

## 부정적인 답

위수 $47$ 인 순환군이 변수 $47$ 개를 순환시키면 고정체는 순수 초월 확대가 아니다[^2]. 위수 $47$ 인 순환군 자체는 아벨군이라 원분체로 $\mathbb Q$ 위에서 실현되므로, 답이 부정이어도 역 Galois 문제의 답이 부정인 것은 아니다. 바닥체를 복소수체 $\mathbb C$ 로 바꾸어도 위수가 $p^9$ 인 군에서 답이 부정이다[^3].

# 활용

- [역 Galois 문제](inverse-galois-problem.md)에서 대칭군의 실현이 이 길을 쓴다. 대칭군은 위 대칭군 절로 답이 긍정이다.
- 바닥체를 $\mathbb C$ 로 둔 판은 몫다양체 $\mathbb C^n/G$ 가 유리다양체인지를 묻는 물음이고, 부정적인 답의 증명에는 [Brauer 군](brauer-groups.md)으로 만든 불변량을 쓴다[^3].

[^1]: J.-P. Serre, *Topics in Galois Theory*, Jones and Bartlett, 1992, Chapter 4 — Noether 문제와 Hilbert 기약성 정리에 의한 실현.
[^2]: R. G. Swan, "Invariant rational functions and a problem of Steenrod", *Inventiones Mathematicae* 7 (1969) 148–158.
[^3]: D. J. Saltman, "Noether's problem over an algebraically closed field", *Inventiones Mathematicae* 77 (1984) 71–84 — 분지 없는 Brauer 군으로 만든 반례.

# 연관 문서

## 선수지식

- [Hilbert 기약성 정리](hilbert-irreducibility-theorem.md)
- [초월차수](transcendence-degree.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra #group_theory
