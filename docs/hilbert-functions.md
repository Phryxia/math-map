# Hilbert 함수

# 개요

**Hilbert 함수(Hilbert function)** 는 여러 변수의 다항식에 동차 관계식을 걸었을 때, 차수마다 남는 일차독립인 다항식의 수를 적은 함수다. 변수 $x,y,z$ 에 관계식 $x^2+y^2=z^2$ 를 걸면 $d$ 차 동차 다항식 가운데 $2d+1$ 개가 남고, $x=0$, $yz=0$ 을 걸면 $1$ 차 이상에서 늘 $2$ 개가 남는다. 이 수가 차수에 따라 어떻게 늘어나는지에서 관계식이 정하는 도형의 무엇을 읽을 수 있는가.

이 함수는 큰 차수에서 다항식과 같아지고, 그 다항식의 차수가 도형의 차원을, 최고차 계수가 도형의 차수를 준다. $2d+1$ 은 차수 $2$ 인 곡선이고 $2$ 는 점 두 개다.

# 직관

관계식 $f=x^2+y^2-z^2$ 를 건 다항식에서 $d$ 차 동차 다항식을 센다. $x,y,z$ 의 $d$ 차 단항식은 $\binom{d+2}2$ 개다. 그 가운데 $0$ 이 되는 것은 $f$ 에 $(d-2)$ 차 동차 다항식을 곱한 것이고, 그 공간의 차원은 $\binom d2$ 다.

$$
\binom{d+2}{2}-\binom{d}{2}=2d+1
$$

관계식 $x=0$, $yz=0$ 을 걸면 $d\ge1$ 차에서 남는 단항식은 $y^d$ 와 $z^d$ 둘이다. 이 두 관계식의 공통 영점은 사영평면의 점 $(0:1:0)$ 과 $(0:0:1)$ 두 개다.

$x^2+y^2=z^2$ 의 영점은 사영평면의 원뿔곡선이고, 직선 하나와 두 점에서 만난다. $2d+1$ 이 $d$ 의 일차식인 것은 영점이 곡선이기 때문이고, 일차항의 계수 $2$ 가 직선과 만나는 점의 수와 같다. 점 두 개의 경우에는 함수가 상수 $2$ 로 멈춘다.

# 정의

## 차수 붙은 가군

$S=k\lbrack x\_1,\dots,x\_n\rbrack$ 를 체 $k$ 위의 [다항식환](polynomial-rings.md)이라 하고, $d$ 차 동차 다항식의 공간을 $S\_d$ 로 쓴다. $S$ 가군 $M$ 이 벡터 공간의 직합 $M=\bigoplus\_dM\_d$ 이고 $S\_eM\_d\subseteq M\_{d+e}$ 이면 $M$ 을 **차수 붙은 가군(graded module)** 이라 한다. 동차 아이디얼 $I$ 에 대한 몫환 $S/I$ 가 이 문서의 주된 예다.

## Hilbert 함수와 Hilbert 급수

유한생성 차수 붙은 가군 $M$ 의 **Hilbert 함수** 는 $H\_M(d)=\dim\_kM\_d$ 이고, **Hilbert 급수(Hilbert series)** 는 이것을 계수로 둔 형식적 멱급수다.

$$
\mathrm{HS}\_M(t)=\sum\_{d}H\_M(d)\thinspace t^d
$$

직관 절의 두 예에서 급수는 다음과 같다.

$$
\sum\_{d\ge0}(2d+1)t^d=\frac{1+t}{(1-t)^2},\qquad 1+\sum\_{d\ge1}2t^d=\frac{1+t}{1-t}
$$

## Hilbert 다항식

모든 충분히 큰 $d$ 에서 $H\_M(d)=P\_M(d)$ 인 다항식 $P\_M$ 이 있으면 $P\_M$ 을 $M$ 의 **Hilbert 다항식(Hilbert polynomial)** 이라 한다. 원뿔곡선의 예에서 $P\_M(d)=2d+1$ 이고 점 두 개의 예에서 $P\_M(d)=2$ 다.

# 성질

## 급수의 유리성

정리. 유한생성 차수 붙은 $S$ 가군 $M$ 의 Hilbert 급수는 정수 계수 다항식 $Q$ 에 대해 $Q(t)/(1-t)^n$ 꼴이다[^1][^2].

증명의 요지. 변수의 수 $n$ 에 대한 귀납이다. $x\_n$ 을 곱하는 사상 $M\_{d-1}\to M\_d$ 의 핵 $K$ 와 여핵 $C$ 는 $x\_n$ 이 $0$ 으로 작용하므로 $n-1$ 변수 가군이고, 차원을 세면 $(1-t)\mathrm{HS}\_M=\mathrm{HS}\_C-t\thinspace\mathrm{HS}\_K$ 가 나온다. 오른쪽에 귀납 가정을 쓴다.

## Hilbert 다항식 정리

정리. $\mathrm{HS}\_M(t)=Q(t)/(1-t)^r$ 에서 $Q(1)\ne0$ 이 되도록 약분하면, $d$ 가 충분히 클 때 $H\_M(d)$ 는 차수 $r-1$ 인 다항식 $P\_M(d)$ 와 같고 최고차 계수는 $Q(1)/(r-1)!$ 이다[^1].

$1/(1-t)^r=\sum\_d\binom{d+r-1}{r-1}t^d$ 이고 이항계수 $\binom{d+r-1}{r-1}$ 이 $d$ 의 $r-1$ 차 다항식이므로, $Q$ 의 각 항이 $d$ 를 옮긴 이항계수를 더해 준다. 원뿔곡선의 예는 $r=2$, $Q(1)=2$ 이고 점 두 개의 예는 $r=1$, $Q(1)=2$ 다.

## 차원과 차수

$M=S/I$ 이면 극의 차수 $r$ 은 $S/I$ 의 [Krull 차원](krull-dimension.md)과 같다. $r$ 은 사영공간에서 $I$ 의 영점이 이루는 도형의 차원에 $1$ 을 더한 것이고, $Q(1)$ 을 그 도형의 **차수(degree)** 라 한다[^2].

$e$ 차 동차 다항식 하나 $f$ 로 나눈 $S/(f)$ 는 다음 급수를 가지므로 $r=n-1$ 이고 차수는 $e$ 다.

$$
\frac{1-t^e}{(1-t)^n}=\frac{1+t+\cdots+t^{e-1}}{(1-t)^{n-1}}
$$

## Hilbert 함수의 제약

어떤 함수가 $S/I$ 의 Hilbert 함수가 되는지는 [Macaulay 정리](macaulay-theorem.md)가 정한다. 그 부등식은 Hilbert 다항식과 같아지기 전의 작은 차수에서도 성립한다.

# 활용

- [Hilbert 스킴](hilbert-scheme.md). 사영공간의 닫힌 부분스킴을 Hilbert 다항식으로 나누어 모은 공간이다.
- [Stanley–Reisner 환](stanley-reisner-rings.md). 단체 복합체의 면의 수가 이 환의 Hilbert 급수의 분자로 적힌다.
- [Ehrhart 다항식](ehrhart-polynomial.md). 격자 다면체를 $t$ 배 늘린 것 안의 정수점 수는, 다면체의 정수점으로 만든 차수 붙은 환의 Hilbert 함수다.
- [Gröbner 기저](groebner-bases.md). 선두항 아이디얼이 같은 Hilbert 함수를 가지므로, Gröbner 기저를 구해 단항식을 세면 Hilbert 함수가 계산된다.

[^1]: D. Hilbert, "Über die Theorie der algebraischen Formen", *Mathematische Annalen* 36 (1890), 473–534.
[^2]: D. Eisenbud, *Commutative Algebra with a View Toward Algebraic Geometry*, Graduate Texts in Mathematics 150, Springer, 1995, 1 장 9 절과 12 장.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [Krull 차원](krull-dimension.md)

## 더 알아보기

- [Macaulay 정리](macaulay-theorem.md)
- [Hilbert syzygy 정리](hilbert-syzygy-theorem.md)

#ring_theory #algebra #combinatorics
