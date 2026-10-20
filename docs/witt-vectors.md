# Witt 벡터

# 개요

**Witt 벡터(Witt vector)** 는 환의 원소열 $(a_0,a_1,a_2,\dots)$ 에 다항식으로 정의한 덧셈과 곱셈을 주어 만든 환이다. 성분은 표수 $p$ 의 환에서 가져오고, 만들어진 환은 표수 $0$ 이 된다.

$\mathbb F\_p$ 의 Witt 벡터 환은 $p$ 진 정수환 $\mathbb Z\_p$ 다. 길이 $m$ 으로 끊은 Witt 벡터에 Artin–Schreier 사상을 성분별로 확장하면 표수 $p$ 체의 차수 $p^m$ 순환확대가 분류된다.

# 직관

표수 $p$ 체 $K$ 에서 [Artin–Schreier 이론](artin-schreier-theory.md)은 차수 $p$ 순환확대를 $\wp(y)=y^p-y$ 의 상으로 나눈 몫 $K/\wp(K)$ 로 분류한다. 차수 $p^2$ 순환확대를 같은 방식으로 분류하려고 쌍 $(a_0,a_1)$ 을 성분별로 더해 보면, 그 덧셈이 $\mathbb Z/p\times\mathbb Z/p$ 의 덧셈이므로 $\mathbb Z/p^2$ 가 나오지 않는다.

$\mathbb Z/p^2$ 의 덧셈에는 자리올림이 있다. $a_0+a_1p$ 와 $b_0+b_1p$ 를 더하면 첫 자리의 합 $a_0+b_0$ 가 $p$ 를 넘을 때 둘째 자리로 $1$ 이 올라간다. 올라가는 양은 $((a_0+b_0) - a_0 - b_0)/p$ 꼴로 $p$ 로 나누는 계산을 포함하고, 표수 $p$ 체에서는 $p$ 로 나눌 수 없다.

$p$ 제곱을 넣으면 나눗셈이 사라진다. 정수 $a_0,b_0$ 에 대해

$$a_0^p + b_0^p - (a_0+b_0)^p$$

의 각 항은 이항계수 $\binom{p}{k}$ 를 갖고, $0\lt k\lt p$ 에서 $p\mid\binom{p}{k}$ 이므로 이 식은 $p$ 로 나누어진다. 몫

$$c(a_0,b_0) = \frac{a_0^p+b_0^p-(a_0+b_0)^p}{p}$$

은 정수계수 다항식이고, 계수를 표수 $p$ 로 보내도 뜻이 남는다.

그러므로 쌍의 덧셈을 $(a_0,a_1)+(b_0,b_1) = (a_0+b_0,\thinspace a_1+b_1+c(a_0,b_0))$ 로 정의한다. 둘째 성분에 들어간 $c$ 가 자리올림이고, 이 덧셈이 $\mathbb Z/p^2$ 의 덧셈을 표수 $p$ 의 연산만으로 쓴 것이다. 길이를 $m$ 으로 늘리면 같은 꼴의 다항식이 성분마다 하나씩 나온다.

# 정의

## 고스트 성분

가환환 $A$ 와 열 $a=(a_0,a_1,\dots)\in A^{\mathbb N}$ 에 대해

$$w_n(a) = \sum\_{i=0}^{n} p^i a_i^{p^{n-i}}$$

을 $a$ 의 $n$ 번째 **고스트 성분**이라 한다. $w_0(a)=a_0$ 이고 $w_1(a)=a_0^p+pa_1$ 이다.

## Witt 벡터 환

**정리.** 모든 $n$ 에서 $w_n(S_n)$ 과 $w_n(P_n)$ 이 고스트 성분의 합과 곱이 되도록 하는 정수계수 다항식족 $S_n, P_n \in\mathbb Z\lbrack a_0,\dots,a_n,b_0,\dots,b_n\rbrack$ 이 유일하게 있다[^1]. 곧

$$w_n(S(a,b)) = w_n(a)+w_n(b), \qquad w_n(P(a,b)) = w_n(a)\thinspace w_n(b)$$

이다.

증명의 요지. $p$ 가 가역인 환에서는 고스트 사상 $a\mapsto(w_0(a),w_1(a),\dots)$ 가 전단사다. $w_n(a)$ 가 $p^n a_n$ 에 앞 성분만으로 된 식을 더한 꼴이므로 $a_n$ 을 $w_0,\dots,w_n$ 으로 풀 수 있다. 그러므로 $\mathbb Z\lbrack 1/p\rbrack$ 계수에서 $S_n$ 과 $P_n$ 이 유일하게 정해진다. 그 계수가 정수라는 것은 $x\equiv y \bmod p^k$ 에서 $x^p\equiv y^p \bmod p^{k+1}$ 이 따라오는 합동을 써서 $n$ 에 대한 귀납으로 확인한다.

$A^{\mathbb N}$ 에 $a+b = S(a,b)$ 와 $a\thinspace b = P(a,b)$ 를 주어 얻은 환을 $A$ 의 **Witt 벡터** 환 $W(A)$ 라 한다. 영원소는 $(0,0,\dots)$ 이고 단위원은 $(1,0,0,\dots)$ 다. $S_0=a_0+b_0$ 이고 $S_1 = a_1+b_1+c(a_0,b_0)$ 다.

$A$ 가 표수 $p$ 여도 $W(A)$ 는 표수 $p$ 가 아니다. $\mathbb F\_p$ 에서 $p\cdot(1,0,0,\dots)$ 를 계산하면 $(0,1,0,\dots)$ 이 나오고 영이 아니다.

## 절단 Witt 벡터

성분을 $a_0,\dots,a\_{m-1}$ 로 끊으면 다항식 $S_n,P_n$ 이 그 안에서 닫히므로 환이 된다. 이것을 길이 $m$ 의 **절단 Witt 벡터** 환 $W_m(A)$ 라 한다. $W_1(A)=A$ 이고 $W(A)$ 는 사영극한 $\varprojlim_m W_m(A)$ 다.

## Frobenius 와 Verschiebung

$A$ 가 표수 $p$ 일 때 성분별 $p$ 제곱

$$F(a_0,a_1,\dots) = (a_0^p,a_1^p,\dots)$$

을 **Frobenius**, 성분을 한 칸 미는 사상

$$V(a_0,a_1,\dots) = (0,a_0,a_1,\dots)$$

을 **Verschiebung** 이라 한다. $F$ 는 환 준동형이고 $V$ 는 덧셈군 준동형이다. 둘은 $FV=VF=p$ 와 $V(F(a)\thinspace b) = a\thinspace V(b)$ 를 만족한다.

# 성질

## 유한체의 Witt 벡터

**정리.** $W(\mathbb F\_p)\cong\mathbb Z\_p$ 이고, 차수 $p^f$ 유한체에서 $W(\mathbb F\_{p^f})$ 는 $\mathbb Q\_p$ 의 차수 $f$ 불분기 확대의 정수환이다.

증명의 요지. $W(\mathbb F\_p)\to\mathbb Z/p^m$ 을 고스트 성분 $w\_{m-1}$ 의 법 $p^m$ 환원으로 정의하면 $W_m(\mathbb F\_p)\cong\mathbb Z/p^m$ 이고, 사영극한을 취한다. Teichmüller 대표원 $a\mapsto(a,0,0,\dots)$ 이 곱셈을 보존하므로 $\mathbb F\_p^{\times}$ 가 $\mathbb Z\_p^{\times}$ 로 올라간다.

## 완전환의 올림

**정리.** $A$ 가 표수 $p$ 의 완전환, 곧 Frobenius가 전단사인 환이면 $W(A)$ 는 $p$ 로 나눈 잉여환이 $A$ 인 $p$ 진 완비 환이고, 그런 환은 동형을 제외해 유일하다[^1].

표수 $p$ 의 대상을 표수 $0$ 으로 올려 다루는 길이 이 유일성에서 나온다. [p 진 Hodge 이론](p-adic-hodge-theory.md)의 주기환과 결정 코호몰로지의 계수환이 $W$ 로 만들어진다.

## Artin–Schreier–Witt 이론

$\wp$ 를 Witt 벡터로 확장해 $\wp = F-1$ 로 둔다. 표수 $p$ 체 $K$ 와 분리 가능 폐포 $K^{\mathrm{sep}}$ 에 대해 $\wp: W_m(K^{\mathrm{sep}})\to W_m(K^{\mathrm{sep}})$ 는 전사이고 핵이 $W_m(\mathbb F\_p)=\mathbb Z/p^m$ 이다.

**정리.** $K$ 의 지수 $p^m$ 아벨 확대는 몫군 $W_m(K)/\wp\thinspace W_m(K)$ 의 부분군과 일대일 대응한다[^2]. 차수 $p^m$ 순환확대는 그 몫군에서 위수 $p^m$ 인 원소가 생성하는 부분군에 대응한다.

증명의 요지. $\wp$ 의 핵이 $\mathbb Z/p^m$ 이므로 짧은 완전열 $0\to\mathbb Z/p^m\to W_m(K^{\mathrm{sep}})\to W_m(K^{\mathrm{sep}})\to 0$ 을 얻고, [Galois 코호몰로지](galois-cohomology.md)의 긴 완전열에서 $H^1(\mathrm{Gal}(K^{\mathrm{sep}}/K),\mathbb Z/p^m)\cong W_m(K)/\wp\thinspace W_m(K)$ 가 나온다. $m=1$ 에서 $W_1=K$ 이므로 Artin–Schreier 이론의 대응이 된다.

# 활용

## 차수 p² 순환확대의 생성

$a=(a_0,a_1)\in W_2(K)$ 에 대해 $\wp(y)=a$ 의 해 $y=(y_0,y_1)$ 을 붙인다. 첫 성분은 $y_0^p-y_0=a_0$ 이고 둘째 성분은 $y_1^p-y_1 = a_1 + c(y_0^p, -y_0)$ 꼴로 아래 층의 해 $y_0$ 를 포함한다. 두 층이 이렇게 얽혀 Galois 군이 $\mathbb Z/p^2$ 가 된다.

## 불분기 확대의 구성

$\mathbb Q\_p$ 의 차수 $f$ 불분기 확대를 $W(\mathbb F\_{p^f})$ 의 분수체로 얻는다. [p 진수](p-adic-numbers.md)의 확대를 분류할 때 불분기 부분을 유한체의 확대로 바꾸어 다루는 길이 이 구성이다.

## 형식군과 Dieudonné 이론

완전체 위의 $p$ 진 형식군은 $W(k)$ 에 $F$ 와 $V$ 를 더해 만든 Dieudonné 환 위의 모듈로 분류한다. 아벨 다양체의 $p$ 진 Tate 모듈이 그 모듈로 기술된다.

[^1]: J.-P. Serre, *Local Fields*, Springer (1979), II §5–6 — Witt 벡터 다항식의 존재와 유일성, 완전환 위 올림의 유일성.
[^2]: Lang, *Algebra*, 3rd ed., VI §8 "Artin–Schreier–Witt theory" — 지수 $p^m$ 아벨 확대와 $W_m(K)/\wp W_m(K)$ 의 대응.

# 연관 문서

## 선수지식

- [Artin–Schreier 이론](artin-schreier-theory.md)
- [p 진수](p-adic-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra #number_theory
