# 판별식

# 개요

**판별식(discriminant)** 은 다항식의 계수로 계산해 근이 겹치는지와 근이 어떻게 놓이는지를 알려 주는 값이다. $x^2+bx+c$ 는 근을 구하지 않아도 $b^2-4c$ 가 $0$ 이면 중근, 양수이면 서로 다른 두 실근, 음수이면 허근을 갖는다. 판별식은 이 값을 근의 차의 곱으로 정의해 모든 차수의 다항식에 쓰고, 계수만으로 중근, 실근의 개수, Galois 군을 판정한다.

# 직관

$x^2+bx+c$ 의 근을 $r_1,r_2$ 라 하면 $r_1+r_2=-b$, $r_1r_2=c$ 다. 두 근의 차의 제곱은 근을 몰라도 계수로 적힌다.

$$
(r_1-r_2)^2=(r_1+r_2)^2-4r_1r_2=b^2-4c
$$

이 값이 $0$ 인 것은 두 근이 같은 것이다. 실계수일 때 두 근이 실수이면 차의 제곱이 양수이고, 켤레 허근 $u\pm vi$ 이면 차가 $2vi$ 라서 제곱이 $-4v^2\lt 0$ 이다.

삼차 $x^3+px+q$ 의 근 $r_1,r_2,r_3$ 에 대해서도 세 차의 제곱을 곱한 값은 근을 바꾸어도 그대로이므로 계수로 적히고, 계산하면 $-4p^3-27q^2$ 이다. $x^3-3x+1$ 에서는 $108-27=81$ 이고 실근이 셋이다. $x^3-6x-6$ 에서는 $864-972=-108$ 이고 실근은 $\sqrt[3]{4}+\sqrt[3]{2}$ 하나다.

# 정의

## 근의 차의 곱

체 $k$ 위의 차수 $n\ge 1$ 인 다항식 $f$ 가 분해체에서 $f=a(x-r_1)\cdots(x-r_n)$ 으로 쪼개질 때 다음 값을 $f$ 의 **판별식(discriminant)** 이라 한다.

$$
\Delta(f)=a^{2n-2}\prod_{i\lt j}(r_i-r_j)^2
$$

$f=x^2+bx+c$ 이면 $\Delta=b^2-4c$ 이고, $f=ax^2+bx+c$ 이면 $\Delta=b^2-4ac$ 다. $f=x^3+px+q$ 이면 $\Delta=-4p^3-27q^2$ 다.

## 계수로 적는 식

$\prod_{i\lt j}(r_i-r_j)^2$ 은 근에 대한 대칭다항식이므로 [대칭함수](symmetric-functions.md)의 대칭다항식의 기본정리(fundamental theorem of symmetric polynomials)로 근의 기본 대칭다항식, 곧 계수의 다항식이다. 그래서 $\Delta(f)$ 는 $k$ 의 원소다.

계수에서 바로 계산하는 식은 $f$ 와 도함수 $f'$ 의 [종결식](resultant.md) $\mathrm{Res}(f,f')$ 을 쓴다[^1].

$$
\Delta(f)=\frac{(-1)^{n(n-1)/2}}{a}\mathrm{Res}(f,f')
$$

# 성질

## 중근 판정

$\Delta(f)=0$ 인 것과 $f$ 가 분해체에서 중근을 갖는 것이 동치다. 중근은 $f$ 와 $f'$ 의 공통근이므로, 이것은 $f$ 와 $f'$ 의 최대공약수가 상수가 아닌 것과도 동치다. $x^3-3x+2=(x-1)^2(x+2)$ 는 $p=-3$, $q=2$ 이므로 $\Delta=108-108=0$ 이다.

## 실근의 개수

$f$ 가 중근이 없는 실계수 다항식이고 허근이 $s$ 쌍이면 $\Delta(f)$ 의 부호는 $(-1)^s$ 다[^1].

증명의 요지. 실근끼리의 차의 제곱은 양수다. 켤레 쌍 $z,\bar z$ 의 차의 제곱은 $(2i\thinspace\mathrm{Im}\thinspace z)^2\lt 0$ 이다. 나머지 인수는 $(r-z)^2(r-\bar z)^2=\vert r-z\vert^4$ 처럼 켤레끼리 묶여 양수다.

삼차에서는 $\Delta\gt 0$ 이면 실근이 셋, $\Delta\lt 0$ 이면 실근이 하나다. 직관 절의 두 예가 그렇다.

## Galois 군과 교대군

$k$ 의 표수가 $2$ 가 아니고 $f$ 가 중근이 없다고 한다. $\delta=\prod_{i\lt j}(r_i-r_j)$ 는 근의 짝순열에서 그대로이고 홀순열에서 부호가 바뀐다. 그래서 [Galois 이론](galois-theory.md)의 Galois 군이 교대군(alternating group) $A_n$ 에 들어 있는 것과 $\Delta=\delta^2$ 이 $k$ 에서 제곱수인 것이 동치다[^1].

- $x^3-3x+1$ 은 기약이고 $\Delta=81=9^2$ 이므로 Galois 군은 $A_3$, 곧 위수 $3$ 의 순환군이다.
- $x^3-6x-6$ 은 기약이고 $\Delta=-108$ 이 유리수의 제곱이 아니므로 Galois 군은 [대칭군](symmetric-groups.md) $S_3$ 이다. [Abel–Ruffini 정리](abel-ruffini-theorem.md)의 직관 절이 이 다항식의 세 근을 적는다.
- $x^4-x-1$ 은 $\Delta=-283$ 이 제곱이 아니므로 Galois 군이 $A_4$ 에 들어 있지 않다. [작도 가능한 수](constructible-numbers.md)가 이 다항식의 군이 $S_4$ 임을 쓴다.

# 활용

- [대수적 수체](algebraic-number-fields.md)의 판별식. 정수기저로 정의한 수체의 판별식은 $\alpha$ 의 최소다항식의 판별식과 제곱수 배만큼 다르고, 소수 $p$ 가 분기하는 것과 $p$ 가 판별식을 나누는 것이 동치다[^2].
- [이차형식](quadratic-forms.md). 이진형식 $ax^2+bxy+cy^2$ 의 판별식 $b^2-4ac$ 가 같은 형식끼리 동치류를 나눈다.
- [타원곡선](elliptic-curves.md). $y^2=x^3+ax+b$ 가 비특이인 것은 $x^3+ax+b$ 가 중근이 없는 것, 곧 $4a^3+27b^2\ne 0$ 인 것이다.

[^1]: D. S. Dummit, R. M. Foote, Abstract Algebra, 3rd ed., Wiley 2004, §14.6 — 판별식의 정의, 종결식 공식, 실근 개수와의 관계, Galois 군이 교대군에 드는 조건.
[^2]: J. Neukirch, Algebraic Number Theory, Springer, Grundlehren der mathematischen Wissenschaften 322 (1999), Chapter I §2 와 §8 — 수체의 판별식과 분기하는 소수.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [대칭함수](symmetric-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #field_theory #number_theory
