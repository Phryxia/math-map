# Blaschke 곱

# 개요

**Blaschke 곱(Blaschke product)** 은 단위원판 안의 지정한 점들에서만 $0$ 이 되고 원판에서 절댓값이 $1$ 보다 작은 정칙함수다. 원판에서 $\vert f\vert\le 1$ 이면서 $1/2, 2/3, 3/4,\dots$ 에서 모두 $0$ 이 되는 정칙함수가 $0$ 말고 있는지 물으면, 다항식은 영점이 유한 개라 답이 되지 못한다.

Blaschke 곱은 영점 하나마다 원 위에서 절댓값이 $1$ 인 인수를 곱해 그런 함수를 만들고, 그 곱이 수렴하는 조건 $\sum\_n(1-\vert a\_n\vert)\lt\infty$ 로 답을 가른다. $1-1/n$ 은 이 합이 발산해서 그런 함수가 없고, $1-1/n^2$ 은 합이 수렴해서 그런 함수가 있다.

# 직관

점 $a=1/2$ 하나에서 $0$ 이 되는 함수로 $z-1/2$ 을 쓰면 원판에서 $\vert z-1/2\vert$ 가 $3/2$ 까지 커진다. $z-1/2$ 을 $1-z/2$ 로 나누면 단위원 위에서 다음이 성립한다.

$$
\vert e^{i\theta}-1/2\vert=\vert e^{i\theta}\vert\thinspace\vert 1-e^{-i\theta}/2\vert=\vert 1-e^{i\theta}/2\vert
$$

마지막 등호는 켤레를 취해도 절댓값이 같다는 것이다. 그러므로 $(z-1/2)/(1-z/2)$ 는 단위원 위에서 절댓값이 $1$ 이고, 최대 절댓값 원리로 원판 안에서 절댓값이 $1$ 보다 작다. $1-z/2$ 는 원판에서 $0$ 이 되지 않으므로 영점은 $1/2$ 하나다.

영점이 $1/2$ 과 $2/3$ 이면 이런 인수 둘을 곱한다. 영점이 무한히 많으면 무한곱이 되고, 곱이 수렴하는지가 문제다. 원점에서 각 인수의 절댓값은 $\vert a\vert$ 이므로 곱의 원점 값은 $\prod\_n\vert a\_n\vert$ 이다. $a\_n=1-1/(n+1)$ 이면 부분곱이 $1/(N+1)$ 로 $0$ 에 가고, $a\_n=1-1/(n+1)^2$ 이면 부분곱이 $(N+2)/(2N+2)$ 로 $1/2$ 에 수렴한다.

# 정의

$a\neq 0$, $\vert a\vert\lt 1$ 일 때 **Blaschke 인자(Blaschke factor)** 는 다음 함수다.

$$
b\_a(z)=\frac{\vert a\vert}{a}\cdot\frac{a-z}{1-\bar az}
$$

$a=0$ 이면 $b\_0(z)=z$ 로 둔다. 앞의 인수 $\vert a\vert/a$ 는 $b\_a(0)=\vert a\vert$ 가 양의 실수가 되게 돌린 것이다. $b\_{1/2}(z)=(1/2-z)/(1-z/2)$ 이다.

원판 안의 점열 $(a\_n)$ 이 **Blaschke 조건(Blaschke condition)** $\sum\_n(1-\vert a\_n\vert)\lt\infty$ 를 만족할 때 **Blaschke 곱** 은 다음 함수다.

$$
B(z)=\prod_n b\_{a\_n}(z)
$$

$a\_n=1-1/n^2$ $(n\ge 2)$ 은 $\sum\_n 1/n^2\lt\infty$ 이므로 조건을 만족하고, $a\_n=1-1/n$ 은 조건을 만족하지 않는다.

# 성질

## 곱의 수렴

*정리.* Blaschke 조건을 만족하는 $(a\_n)$ 의 곱 $B$ 는 원판에서 국소 균등수렴하고, 원판에서 $\vert B\vert\lt 1$ 이며, 영점은 정확히 $a\_n$ 들이고 중복도는 $a\_n$ 이 되풀이된 횟수다[^1].

*증명의 요지.* 다음 등식은 통분해서 확인한다.

$$
1-b\_a(z)=\frac{(a+\vert a\vert z)(1-\vert a\vert)}{a(1-\bar az)}
$$

$\vert z\vert\le r\lt 1$ 에서 우변의 절댓값은 $\frac{1+r}{1-r}(1-\vert a\vert)$ 이하다. Blaschke 조건에서 $\sum\_n\vert 1-b\_{a\_n}\vert$ 가 그 원판에서 균등수렴하므로, [Weierstrass 인수분해 정리](weierstrass-factorization.md)의 무한곱 수렴 판정에서 곱이 국소 균등수렴하고 영점은 인수의 영점뿐이다. ∎

## 유계 정칙함수의 영점

원판에서 유계인 정칙함수 $f\not\equiv 0$ 의 영점은 Blaschke 조건을 만족한다. [Jensen 공식](jensen-formula.md)에서 나온다. 그러므로 $\vert f\vert\le 1$ 이고 $1-1/n$ 마다 $0$ 인 정칙함수는 $0$ 뿐이다.

## 영점의 분리

*정리.* $f$ 가 원판에서 정칙이고 $\vert f\vert\le M$ 이며 영점이 $(a\_n)$ 이면, $f=Bg$ 로 쓰인다. $B$ 는 $(a\_n)$ 의 Blaschke 곱이고 $g$ 는 영점이 없고 $\vert g\vert\le M$ 인 정칙함수다[^1].

*증명의 요지.* 앞 $N$ 개 인수의 곱 $B\_N$ 은 원 $\vert z\vert=r$ 위에서 $r\to 1$ 일 때 절댓값이 균등하게 $1$ 로 간다. 최대 절댓값 원리에서 $\vert f/B\_N\vert\le M$ 이 원판 전체에서 성립한다. $N\to\infty$ 로 보내면 $g=f/B$ 도 $\vert g\vert\le M$ 이다. ∎

## 원판의 자기동형

인자가 하나인 Blaschke 곱에 절댓값 $1$ 인 상수를 곱한 $e^{i\varphi}b\_a$ 는 원판을 원판 위로 보내는 전단사 정칙함수이고, 원판의 자기동형은 모두 이 꼴이다. [등각사상](conformal-mapping.md)의 원판의 자기동형군이 이것이다.

인자가 유한 개인 Blaschke 곱은 원판을 원판으로 보내고 원판 경계로 다가가는 점을 경계로 보내는 정칙함수이며, 이런 성질을 갖는 정칙함수는 모두 유한 Blaschke 곱에 절댓값 $1$ 인 상수를 곱한 것이다(Fatou 정리, Fatou's theorem)[^2].

# 활용

- Hardy 공간(Hardy space) $H^\infty$ 의 함수는 Blaschke 곱, 영점 없는 내부 함수(inner function), 외부 함수(outer function)의 곱으로 인수분해된다. 영점의 분리가 그 첫 단계다.
- [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)은 원판의 점 $z\_1,\dots,z\_n$ 에서 값 $w\_1,\dots,w\_n$ 을 갖고 $\vert f\vert\le 1$ 인 정칙함수를 찾는다. 해가 하나뿐인 경우의 해는 인자가 $n$ 개 미만인 유한 Blaschke 곱이다.
- [Nevanlinna 이론](nevanlinna-theory.md)의 원판 판에서 특성함수가 유계인 유리형함수는 두 유계 정칙함수의 몫이고, 그 영점과 극은 각각 Blaschke 조건을 만족한다.

[^1]: P. L. Duren, *Theory of Hᵖ Spaces*, Academic Press, 1970, 2 장 — Blaschke 곱과 영점의 분리.
[^2]: J. B. Garnett, *Bounded Analytic Functions*, revised 1st ed., Springer, 2007, 2 장 — 유한 Blaschke 곱과 내부 함수.

# 연관 문서

## 선수지식

- [Jensen 공식](jensen-formula.md)

## 더 알아보기

- [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)

#complex_analysis #analysis #functional_analysis
