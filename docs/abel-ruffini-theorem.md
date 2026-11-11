# Abel–Ruffini 정리

# 개요

**Abel–Ruffini 정리(Abel–Ruffini theorem)** 는 5차 이상의 일반 다항식에 계수의 사칙연산과 거듭제곱근만으로 된 근의 공식이 없다는 정리다. 이차방정식은 $(-b\pm\sqrt{b^2-4c})/2$ 로 풀리고 삼차와 사차방정식에도 이런 식이 있는데, $x^5-6x+3=0$ 의 근을 같은 방식으로 적으려 하면 방법이 찾아지지 않는다. 이 정리는 근호를 하나 넣을 때마다 근을 바꾸는 대칭이 순환하는 조각으로 갈라진다는 것을 보여, 근호로 된 풀이가 있는지를 그 대칭의 군이 [가해군](solvable-groups.md)인지로 판정한다.

# 직관

이차방정식 $x^2+bx+c=0$ 의 근은 $(-b\pm\sqrt{b^2-4c})/2$ 다. 두 근을 맞바꾸는 일은 제곱근의 부호를 바꾸는 일과 같다.

삼차방정식 $x^3-6x-6=0$ 은 Cardano 의 공식(Cardano's formula)으로 근 $x=\sqrt[3]{4}+\sqrt[3]{2}$ 를 얻는다. 세제곱하면 다음이 나와 근임이 확인된다.

$$
(\sqrt[3]{4}+\sqrt[3]{2})^3=4+2+3\sqrt[3]{8}\thinspace(\sqrt[3]{4}+\sqrt[3]{2})=6+6x
$$

나머지 두 근은 $\omega=(-1+\sqrt{-3})/2$ 로 $\omega\sqrt[3]{4}+\omega^2\sqrt[3]{2}$ 와 $\omega^2\sqrt[3]{4}+\omega\sqrt[3]{2}$ 다. 세 근을 적는 데 넣은 근호는 두 개이고, 넣은 순서대로 체가 커진다.

$$
\mathbb Q\subset\mathbb Q(\sqrt{-3})\subset\mathbb Q(\sqrt{-3},\sqrt[3]{2})
$$

둘째 단계에서 $\sqrt[3]{2}\mapsto\omega\sqrt[3]{2}$ 를 되풀이하면 세 근이 순환하며 자리를 바꾼다. 첫 단계에서 $\sqrt{-3}$ 의 부호를 바꾸면 $\omega$ 와 $\omega^2$ 가 바뀌어 두 근이 맞바뀐다. 세 근을 바꾸는 대칭 여섯 개가 위수 $3$ 의 순환과 위수 $2$ 의 순환 두 조각으로 갈라진다. 5차 다항식의 근을 바꾸는 대칭을 이런 순환 조각으로 가를 수 있는지가 근의 공식이 있는지를 정한다.

# 정의

## 근호 확대

[체의 확대](field-extensions.md) $K/k$ 가 원소 $\alpha_1,\dots,\alpha_m$ 으로 $K=k(\alpha_1,\dots,\alpha_m)$ 이고, 각 $j$ 에 대해 어떤 양의 정수 $n_j$ 로 $\alpha_j^{n_j}$ 가 $k(\alpha_1,\dots,\alpha_{j-1})$ 에 들어 있으면 $K/k$ 를 **근호 확대(radical extension)** 라 한다. 직관 절의 $\mathbb Q(\sqrt{-3},\sqrt[3]{2})/\mathbb Q$ 는 $n_1=2$, $n_2=3$ 인 근호 확대다.

## 근호에 의한 가해성

$k$ 위의 다항식 $f$ 의 분해체가 어떤 근호 확대 안에 들어 있으면 $f$ 를 **근호로 풀린다(solvable by radicals)** 고 한다. 근 하나만이 아니라 모든 근이 근호로 적힌다는 뜻이다. 직관 절의 $x^3-6x-6$ 은 근호로 풀린다.

## 일반 다항식

변수 $a_1,\dots,a_n$ 을 계수로 갖는 다음 다항식을 $k(a_1,\dots,a_n)$ 위의 **일반 n 차 다항식(general polynomial of degree n)** 이라 한다.

$$
x^n+a_1x^{n-1}+\cdots+a_{n-1}x+a_n
$$

근의 공식은 이 다항식의 근을 계수의 근호로 적는 식이다.

# 성질

## Galois 의 판정

표수 $0$ 의 체 $k$ 위에서 $f$ 가 근호로 풀리는 것과 $f$ 의 [Galois 이론](galois-theory.md)에서의 Galois 군이 가해군인 것이 동치다[^1].

증명의 요지. 근호로 풀리면 근호 확대를 Galois 확대로 키우고 필요한 $1$ 의 거듭제곱근을 먼저 넣는다. 그러면 각 단계가 [Kummer 이론](kummer-theory.md)의 순환 확대이고, Galois 대응으로 Galois 군이 순환 몫을 갖는 사슬을 가져 가해다. 분해체의 Galois 군은 그 몫이므로 가해다. 거꾸로 가해이면 순환 몫의 사슬을 고정체의 사슬로 옮기고, $1$ 의 거듭제곱근을 넣은 뒤 Kummer 이론으로 각 순환 단계를 근호 하나로 만든다.

## 일반 다항식의 Galois 군

일반 $n$ 차 다항식의 Galois 군은 [대칭군](symmetric-groups.md) $S_n$ 전체다. 근 $x_1,\dots,x_n$ 을 변수로 보면 계수는 근의 기본 대칭다항식이다. [Artin 의 고정체 정리](artin-fixed-field-theorem.md)로 $S_n$ 이 고정하는 체가 기본 대칭다항식이 생성하는 체이므로, 분해체 $k(x_1,\dots,x_n)$ 의 Galois 군은 $S_n$ 이다.

## 정리의 진술과 증명

$n\ge 5$ 이면 일반 $n$ 차 다항식은 근호로 풀리지 않는다[^2].

증명의 요지. $n\ge 5$ 에서 교대군 $A_n$ 은 가환이 아닌 단순군이므로 $S_n$ 의 가해 사슬은 $A_n$ 에서 멈추고 $S_n$ 은 가해가 아니다. Galois 의 판정으로 근호 해가 없다. $n\le 4$ 이면 $S_n$ 이 가해이므로 이차, 삼차, 사차의 근의 공식이 있다.

## 근호로 풀리지 않는 유리수 계수 다항식

일반 다항식에 대한 진술은 개별 다항식에 대한 진술이 아니다. 유리수 계수의 $f=x^5-6x+3$ 이 근호로 풀리지 않음을 보인다.

- [Eisenstein 판정법](eisenstein-criterion.md)을 소수 $3$ 에 쓰면 $f$ 는 기약이다. 그래서 근 하나를 넣은 체의 차수 $5$ 가 Galois 군의 위수를 나누고, Galois 군에는 위수 $5$ 인 원소, 곧 5 순환이 있다.
- $f(-2)=-17$, $f(-1)=8$, $f(1)=-2$, $f(2)=23$ 이므로 실근이 셋 이상이다. $f'(x)=5x^4-6$ 의 실근이 둘이므로 실근은 정확히 셋이고 허근은 둘이다. 복소켤레는 두 허근만 맞바꾸므로 호환이다.
- 5 순환과 호환이 생성하는 $S_5$ 의 부분군은 $S_5$ 전체다. 그래서 Galois 군은 $S_5$ 이고 가해가 아니다.

## 근호로 풀리는 5차 다항식

$x^5-2$ 의 근은 $\zeta^k\sqrt[5]{2}$ 이고 $\zeta=e^{2\pi i/5}$ 다. 분해체 $\mathbb Q(\zeta,\sqrt[5]{2})$ 의 Galois 군은 위수 $20$ 이고, $\sqrt[5]{2}\mapsto\zeta\sqrt[5]{2}$ 가 생성하는 위수 $5$ 의 정규부분군과 위수 $4$ 의 순환 몫으로 갈라져 가해다. 5차 다항식이 근호로 풀리는지는 다항식마다 Galois 군으로 판정한다.

# 활용

- [작도 가능한 수](constructible-numbers.md). 근호를 제곱근으로 제한하면 가해군 조건이 Galois 군의 위수가 $2$ 의 거듭제곱이라는 조건으로 바뀐다. 정다각형의 작도 판정이 그 경우다.
- [미분 Galois 이론](differential-galois-theory.md). 선형 미분방정식이 적분과 지수함수로 풀리는지를 같은 방식으로 미분 Galois 군의 가해성으로 판정한다.
- 수치 해법. 5차 이상의 다항식은 근호 공식 대신 [Newton 법](newton-method.md) 같은 반복법으로 근을 구한다. 근은 [대수학의 기본정리](fundamental-theorem-of-algebra.md)로 존재한다.

[^1]: I. Stewart, Galois Theory, 4th ed., CRC Press 2015, Chapters 15–18 — 근호 확대, 가해성과 Galois 군의 가해성의 동치, 일반 다항식의 Galois 군.
[^2]: N. H. Abel, "Beweis der Unmöglichkeit, algebraische Gleichungen von höheren Graden als dem vierten allgemein aufzulösen", Journal für die reine und angewandte Mathematik 1 (1826) 65–84. 근호 가해성의 Galois 군 판정과 $x^5-6x+3$ 의 예는 M. Mrinal, "Galois theory and the Abel–Ruffini theorem", University of Chicago Research Experience for Undergraduates(REU) 2019 를 따른다. https://math.uchicago.edu/~may/REU2019/REUPapers/Mrinal.pdf

# 연관 문서

## 선수지식

- [Galois 이론](galois-theory.md)
- [가해군](solvable-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #group_theory #algebra
