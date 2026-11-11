# Artin 의 고정체 정리

# 개요

**Artin 의 고정체 정리(Artin's theorem on fixed fields)** 는 체의 자기동형으로 이루어진 유한군이 있을 때, 그 군이 고정하는 원소 전체의 체 위에서 원래 체의 차수가 군의 위수와 같다는 정리다. 유리함수 $f(t)$ 가운데 $t$ 를 $1/t$ 로 바꾸어도 그대로인 것을 모두 찾으려 하면, $t+1/t$ 의 유리함수가 그렇다는 것은 쉽게 보이지만 그 밖에 더 없는지는 하나씩 확인해서는 알 수 없다. 이 정리는 군의 위수 $2$ 로 차수를 정해 주고, 그 차수 계산으로 고정되는 유리함수가 $t+1/t$ 의 유리함수뿐이라는 것을 보인다.

# 직관

$K=\mathbb Q(t)$ 를 유리함수체라 하고 $\tau(f(t))=f(1/t)$ 라 한다. $\tau$ 는 사칙연산을 보존하고 $\tau^2$ 이 항등사상이므로, 항등사상과 $\tau$ 가 위수 $2$ 의 군 $G$ 를 이룬다. $G$ 가 고정하는 유리함수 전체를 $F$ 라 한다.

$u=t+1/t$ 는 $\tau(u)=1/t+t=u$ 이므로 $F$ 에 들어 있고, $\mathbb Q(u)\subseteq F$ 다. 거꾸로 $t$ 는 $\mathbb Q(u)$ 위의 이차방정식의 근이다.

$$
t^2-ut+1=0
$$

그래서 $\lbrack K:\mathbb Q(u)\rbrack\le2$ 다. 탑 법칙에서 $\lbrack K:\mathbb Q(u)\rbrack=\lbrack K:F\rbrack\thinspace\lbrack F:\mathbb Q(u)\rbrack$ 이므로, $\lbrack K:F\rbrack=2$ 임을 알면 $\lbrack F:\mathbb Q(u)\rbrack=1$ 이고 $F=\mathbb Q(u)$ 다. 고정되는 유리함수를 하나씩 찾는 대신 $\lbrack K:F\rbrack$ 를 군의 위수로 구하면 된다.

# 정의

## 고정체

$K$ 를 체, $G$ 를 $K$ 의 체 자기동형으로 이루어진 유한군이라 한다. $G$ 의 모든 원소가 고정하는 원소 전체 $K^G$ 를 $G$ 의 **고정체(fixed field)** 라 한다.

$$
K^G=\lbrace a\in K:\ \sigma(a)=a\ \text{for all } \sigma\in G\rbrace
$$

$K^G$ 는 $K$ 의 부분체다. 직관 절에서 $K^G=F$ 이고, [Galois 이론](galois-theory.md)의 $\mathbb Q(\sqrt2,\sqrt3)$ 에서 $\sqrt2$ 의 부호만 바꾸는 위수 $2$ 의 군의 고정체는 $\mathbb Q(\sqrt3)$ 이다.

## 정리의 진술

$G$ 가 체 $K$ 의 자기동형으로 이루어진 유한군이면 다음이 성립한다[^1].

$$
\lbrack K:K^G\rbrack=\lvert G\rvert,\qquad \mathrm{Aut}(K/K^G)=G
$$

그리고 $K/K^G$ 는 Galois 확대다. 직관 절의 확대에서는 $\lbrack\mathbb Q(t):F\rbrack=2$ 이고, 그래서 $F=\mathbb Q(t+1/t)$ 다.

# 성질

## 증명

$F=K^G$ 라 한다. $\alpha\in K$ 의 $G$ 궤도를 $\alpha=\alpha_1,\dots,\alpha_m$ ( $m\le\lvert G\rvert$, 서로 다름) 이라 하고 다음 다항식을 만든다.

$$
f\_\alpha(x)=\prod_{i=1}^{m}(x-\alpha_i)
$$

$G$ 의 원소는 궤도의 원소를 서로 바꿀 뿐이므로 $f\_\alpha$ 의 계수는 $G$ 가 고정하고, $f\_\alpha\in F\lbrack x\rbrack$ 다. $f\_\alpha$ 는 근이 서로 다르고 $K$ 에서 일차식의 곱으로 쪼개진다. 그래서 $K$ 의 모든 원소는 $F$ 위에서 차수가 $\lvert G\rvert$ 이하인 분리원소이고, $K/F$ 는 [분리 확대](separable-extensions.md)이면서 [정규 확대](normal-extensions.md)다.

$\lbrack K:F\rbrack\gt\lvert G\rvert$ 라면 $F$ 위에서 차수가 $\lvert G\rvert$ 보다 큰 유한 중간체 $L$ 이 있다. $L/F$ 는 유한 분리 확대이므로 [원시원소 정리](primitive-element-theorem.md)로 $L=F(\gamma)$ 이고, $\gamma$ 의 차수가 $\lvert G\rvert$ 보다 커서 앞 문단에 어긋난다. 그래서 $\lbrack K:F\rbrack\le\lvert G\rvert$ 다.

반대쪽 부등식은 $G\subseteq\mathrm{Aut}(K/F)$ 와 정규 확대의 부등식 $\lvert\mathrm{Aut}(K/F)\rvert\le\lbrack K:F\rbrack$ 에서 나온다. 두 부등식으로 $\lvert G\rvert=\lvert\mathrm{Aut}(K/F)\rvert=\lbrack K:F\rbrack$ 이고 $G=\mathrm{Aut}(K/F)$ 다.

## Dedekind 의 지표 독립

**Dedekind 의 지표 독립 정리(Dedekind's independence of characters)** 는 체 $K$ 에서 체 $L$ 로 가는 서로 다른 체 준동형 $\sigma_1,\dots,\sigma_n$ 이 $L$ 위에서 일차독립이라는 정리다. 곧 $c_i\in L$ 에 대해 모든 $a\in K$ 에서 다음이 성립하면 $c_1=\dots=c_n=0$ 이다.

$$
c_1\sigma_1(a)+\dots+c_n\sigma_n(a)=0
$$

증명의 요지. 0 이 아닌 계수가 가장 적은 관계를 잡는다. $\sigma_1(b)\ne\sigma_2(b)$ 인 $b$ 를 골라, 관계에 $a$ 대신 $ab$ 를 넣은 식과 관계에 $\sigma_1(b)$ 를 곱한 식을 빼면 $\sigma_1$ 항이 사라지고 $\sigma_2$ 항은 남아 더 짧은 관계가 된다. 이 정리를 쓰면 $\lbrack K:K^G\rbrack\ge\lvert G\rvert$ 를 정규 확대의 부등식 없이 보일 수 있다[^2].

## 대칭 유리함수

$K=k(x_1,\dots,x_n)$ 에 [대칭군](symmetric-groups.md) $S_n$ 이 변수를 바꾸어 작용하면, 정리로 $\lbrack K:K^{S_n}\rbrack=n!$ 이다. 기본대칭다항식(elementary symmetric polynomial) $e_1,\dots,e_n$ 은 $K^{S_n}$ 에 들어 있고, $K$ 는 $k(e_1,\dots,e_n)$ 위의 다항식 $\prod_i(x-x_i)$ 의 분해체라서 차수가 $n!$ 이하다. 그래서 다음이 성립한다.

$$
K^{S_n}=k(e_1,\dots,e_n)
$$

곧 대칭 유리함수는 모두 기본대칭다항식의 유리함수다. 직관 절의 $u=t+1/t$ 를 구한 논증과 같은 꼴이다.

# 활용

- [Galois 이론](galois-theory.md)의 기본정리. 유한 Galois 확대 $K/k$ 의 부분군 $H$ 에 대해 이 정리로 $\mathrm{Gal}(K/K^H)=H$ 이고, 이것이 부분군에서 중간체로 가는 대응이 단사라는 증명이다.
- 유한군을 Galois 군으로 실현하기. 유한군 $G$ 는 Cayley 정리(Cayley's theorem)로 어떤 $S_n$ 의 부분군이고, $K=k(x_1,\dots,x_n)$ 에 작용시키면 정리로 $K/K^G$ 가 Galois 군 $G$ 의 Galois 확대다. 바닥체를 $\mathbb Q$ 로 고정하고 같은 것을 묻는 것이 [역 Galois 문제](inverse-galois-problem.md)다.
- [대칭함수](symmetric-functions.md). 대칭 유리함수가 기본대칭다항식의 유리함수라는 위 결과를, 대칭다항식이 기본대칭다항식의 다항식이라는 기본정리와 짝지어 쓴다.

[^1]: S. Lang, *Algebra*, 3rd ed., Springer GTM 211, Chapter VI §1, Theorem 1.8.
[^2]: E. Artin, *Galois Theory*, Notre Dame Mathematical Lectures 2, 1942. 지표의 독립과 고정체의 차수.

# 연관 문서

## 선수지식

- [Galois 이론](galois-theory.md)
- [정규 확대](normal-extensions.md)
- [원시원소 정리](primitive-element-theorem.md)

## 더 알아보기

- [역 Galois 문제](inverse-galois-problem.md)

#field_theory #group_theory #algebra
