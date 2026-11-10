# Macaulay 정리

# 개요

**Macaulay 정리(Macaulay's theorem)** 는 여러 변수의 다항식에 동차 관계식을 걸었을 때, 한 차수에서 남는 단항식의 수가 다음 차수에서 얼마까지 늘 수 있는지 정하는 정리다. 변수 $x,y,z$ 에서 $x^2=0$, $xy=0$ 으로 두면 2 차 단항식 여섯 개 가운데 $xz,y^2,yz,z^2$ 넷이 남고, 3 차 단항식 열 개 가운데 다섯이 남는다. 2 차에서 넷이 남게 하는 다른 관계식을 걸면 3 차에서 여섯 이상이 남을 수 있는가.

이 정리는 $4$ 를 이항계수의 합으로 펼친 식 하나로 3 차에서 남을 수 있는 최댓값 $5$ 를 계산하고, 관계식을 사전식 순서로 앞에서부터 고르면 그 최댓값이 나온다는 것을 보인다.

# 직관

관계식 $x^2=0$, $xy=0$ 을 건 다항식에서 3 차 단항식을 센다. $x^2$ 나 $xy$ 로 나누어떨어지는 단항식은 $0$ 이 되므로, 남는 것은 $x$ 를 한 번 이하로 쓰고 $x$ 를 쓰면 $y$ 를 쓰지 않는 단항식이다. 3 차에서는 $xz^2,y^3,y^2z,yz^2,z^3$ 다섯이 남는다.

관계식을 $xy=0$, $z^2=0$ 으로 바꾼다. 2 차에서 남는 것은 $x^2,xz,y^2,yz$ 넷으로 앞의 경우와 수가 같다. 3 차에서 남는 것은 $x^3,x^2z,y^3,y^2z$ 넷이고, 앞의 경우보다 하나 적다.

어느 경우에도 3 차에서 남는 단항식은 그것을 나누는 2 차 단항식이 전부 남아 있어야 한다. $xz^2$ 가 남으려면 $xz$ 와 $z^2$ 가 남아야 한다. 2 차에서 남는 단항식이 $m$ 개이면, 그 $m$ 개만으로 나누는 2 차 단항식을 전부 채울 수 있는 3 차 단항식의 수에 상한이 생긴다.

이 상한은 [Kruskal–Katona 정리](kruskal-katona-theorem.md)의 그림자 셈과 같은 방법으로 계산된다. $4=\binom32+\binom11$ 로 펼치고 각 항의 위아래 숫자에 $1$ 을 더하면 $\binom43+\binom22=5$ 가 나온다. 첫 경우가 이 값에 이르므로 다섯이 최댓값이다.

# 정의

## 동차 아이디얼과 몫환

체 $k$ 위의 $n$ 변수 [다항식환](polynomial-rings.md) $S=k\lbrack x\_1,\dots,x\_n\rbrack$ 에서 차수가 $d$ 인 단항식들의 일차결합을 $d$ 차 동차 다항식이라 하고, 그 전체를 $S\_d$ 로 쓴다. 동차 다항식들로 생성되는 아이디얼을 **동차 아이디얼(homogeneous ideal)** 이라 한다. $I$ 가 동차 아이디얼이면 $I\_d=I\cap S\_d$ 로 두고 몫환 $R=S/I$ 의 $d$ 차 부분을 $R\_d=S\_d/I\_d$ 로 정한다.

직관 절의 첫 경우는 $S=k\lbrack x,y,z\rbrack$, $I=(x^2,xy)$ 다. $I\_2$ 는 $x^2,xy$ 가 생성하는 2 차원 공간이고 $R\_2$ 의 기저는 $xz,y^2,yz,z^2$ 다.

## Hilbert 함수

$R=S/I$ 의 [Hilbert 함수](hilbert-functions.md)는 차수마다 $R\_d$ 의 차원을 적은 함수다.

$$
H\_R(d)=\dim\_k R\_d
$$

$I=(x^2,xy)$ 이면 $d\ge1$ 에서 남는 단항식이 $xz^{d-1}$ 하나와 $y^bz^c$ ($b+c=d$) $d+1$ 개이므로 $H\_R(d)=d+2$ 다. $I=(xy,z^2)$ 이면 $H\_R$ 는 $1,3,4,4,4,\dots$ 다. $I=0$ 이면 $H\_S(d)=\binom{n+d-1}{d}$ 이고, $n=3$ 에서 $1,3,6,10,\dots$ 이다.

## Macaulay 전개

양의 정수 $h$ 와 $d$ 에 대해 다음을 만족하는 정수 $a\_d\gt a\_{d-1}\gt\cdots\gt a\_s\ge s\ge1$ 이 하나뿐이다. 이것을 $h$ 의 $d$ 차 **Macaulay 전개(Macaulay representation)** 라 한다. Kruskal–Katona 정리의 이항 전개와 같은 것이다.

$$
h=\binom{a_d}{d}+\binom{a_{d-1}}{d-1}+\cdots+\binom{a_s}{s}
$$

이 전개에서 다음 값을 정의한다. $0^{\langle d\rangle}=0$ 으로 둔다.

$$
h^{\langle d\rangle}=\binom{a_d+1}{d+1}+\binom{a_{d-1}+1}{d}+\cdots+\binom{a_s+1}{s+1}
$$

$h=4$, $d=2$ 이면 $\binom32=3\le4\lt\binom42=6$ 이므로 $a\_2=3$ 이고 남은 $1=\binom11$ 에서 $a\_1=1$ 이다. 그래서 $4^{\langle 2\rangle}=\binom43+\binom22=5$ 다.

## 사전식 구간

단항식 $x\_1^{e\_1}\cdots x\_n^{e\_n}$ 과 $x\_1^{f\_1}\cdots x\_n^{f\_n}$ 에서 $e\_i\ne f\_i$ 인 첫 $i$ 에서 $e\_i\gt f\_i$ 이면 앞의 것이 크다고 하는 순서를 **사전식 순서(lexicographic order)** 라 한다. $x\gt y\gt z$ 에서 2 차 단항식은 $x^2,xy,xz,y^2,yz,z^2$ 순이다.

각 차수 $d$ 에서 $I\_d$ 가 $d$ 차 단항식 가운데 사전식으로 큰 것부터 몇 개를 기저로 갖는 단항식 아이디얼을 **사전식 아이디얼(lex ideal)** 이라 한다. $(x^2,xy)$ 는 2 차에서 처음 두 개를 고른 것이고 3 차에서 $x^3,x^2y,x^2z,xy^2,xyz$ 다섯 개를 고른 것이므로 사전식 아이디얼이다. $(xy,z^2)$ 는 2 차에서 $x^2$ 를 고르지 않고 $xy$ 를 고르므로 사전식 아이디얼이 아니다.

# 성질

## 정리

정리. 함수 $h:\mathbb N\to\mathbb N$ 이 어떤 다항식환의 동차 아이디얼 $I$ 에 대한 $S/I$ 의 Hilbert 함수인 것은 다음과 동치다[^1][^2].

$$
h(0)=1,\qquad h(d+1)\le h(d)^{\langle d\rangle}\quad(d\ge1)
$$

$I=(x^2,xy)$ 에서 $h(2)=4$, $h(3)=5=4^{\langle 2\rangle}$ 이다. $5=\binom43+\binom22$ 이므로 $5^{\langle 3\rangle}=\binom54+\binom33=6=h(4)$ 이고, 이 아이디얼은 모든 차수에서 등호를 이룬다. $I=(xy,z^2)$ 에서 $h(3)=4\lt5$ 다.

증명의 요지. 단항식 순서를 하나 정하고 $I$ 의 원소마다 가장 큰 단항식을 모은 단항식 아이디얼 $\mathrm{in}(I)$ 를 만들면, [Gröbner 기저](groebner-bases.md) 문서의 성질대로, $\mathrm{in}(I)$ 에 들지 않는 단항식이 $S/I$ 의 기저가 되어 Hilbert 함수가 같다. 그래서 단항식 아이디얼만 보면 된다.

단항식 아이디얼에서 남는 단항식의 집합은 나누는 것에 닫혀 있고, 각 차수의 남는 집합을 같은 크기의 사전식 끝 구간으로 바꾸어도 다음 차수에서 남을 수 있는 수가 줄지 않는다. 사전식 아이디얼에서는 남는 단항식을 직접 세어 $h(d)^{\langle d\rangle}$ 가 나온다. 충분조건 쪽은 조건을 만족하는 $h$ 마다 각 차수에서 사전식으로 큰 단항식 $\binom{n+d-1}{d}-h(d)$ 개를 고르면 그것이 아이디얼이 된다.

## 다항식환의 등호

$h(d)=\binom{n+d-1}{d}$ 의 $d$ 차 Macaulay 전개는 항 하나이므로 다음이 나온다.

$$
h(d)^{\langle d\rangle}=\binom{n+d}{d+1}=h(d+1)
$$

관계식이 없으면 모든 차수에서 정리의 등호가 성립한다.

## 줄어드는 구간

$1\le h(d)\le d$ 이면 $h(d+1)\le h(d)$ 다. $h\le d$ 의 $d$ 차 Macaulay 전개는 $\binom dd+\binom{d-1}{d-1}+\cdots$ 로 $1$ 을 $h$ 번 더한 것이고, 각 항의 숫자에 $1$ 을 더해도 항이 $1$ 이므로 $h^{\langle d\rangle}=h$ 다. $k\lbrack x,y\rbrack/(x^2,y^2)$ 의 Hilbert 함수 $1,2,1,0,\dots$ 가 이 꼴이다.

## Gotzmann 지속 정리

정리. $I$ 가 $d$ 차 이하의 동차 다항식으로 생성되고 $H\_{S/I}(d+1)=H\_{S/I}(d)^{\langle d\rangle}$ 이면, 모든 $e\ge d$ 에서 $H\_{S/I}(e+1)=H\_{S/I}(e)^{\langle e\rangle}$ 이다. 이것을 **Gotzmann 지속 정리(Gotzmann's persistence theorem)** 라 한다[^3].

$I=(x^2,xy)$ 는 2 차로 생성되고 $h(3)=4^{\langle 2\rangle}$ 이므로, 모든 차수에서 등호가 이어져 $h(d)=d+2$ 가 3 차 이후로 다시 계산하지 않아도 정해진다.

## Clements–Lindström 정리

변수 $x\_i$ 의 지수를 $k\_i$ 이하로 제한한 단항식에서도 같은 꼴의 정리가 성립한다. 이것을 **Clements–Lindström 정리(Clements–Lindström theorem)** 라 한다[^4]. 모든 $k\_i$ 가 무한이면 Macaulay 정리이고, 모든 $k\_i=1$ 이면 단항식이 제곱 인수 없는 단항식, 곧 유한집합이 되어 Kruskal–Katona 정리다.

# 활용

- [Cohen–Macaulay 환](cohen-macaulay-rings.md). [Stanley–Reisner 환](stanley-reisner-rings.md)에서 Stanley 는 Cohen–Macaulay 단체 복합체의 h 벡터(h-vector)가 어떤 몫환의 Hilbert 함수와 같음을 보여, h 벡터가 Macaulay 정리의 부등식을 만족한다는 것을 증명했다[^5].
- 단체 다면체의 g 정리(g-theorem). 단체 다면체의 면의 수가 만드는 g 벡터가 Macaulay 정리의 부등식을 만족한다는 조건이 면의 수의 특성화에 들어 있다. 필요성은 Stanley 가 강한 Lefschetz 성질로, 충분성은 Billera 와 Lee 가 구성으로 증명했다[^6][^7].
- [Hilbert 스킴](hilbert-scheme.md). Gotzmann 지속 정리는 Hilbert 다항식이 정해진 부분스킴들을 정해진 차수의 동차 다항식 공간 안의 조건으로 적게 해 주고, Hilbert 스킴을 [Grassmann 다양체](grassmannian.md)의 닫힌 부분스킴으로 구성하는 데 쓰인다[^3].

[^1]: F. S. Macaulay, "Some properties of enumeration in the theory of modular systems", *Proceedings of the London Mathematical Society* (2) 26 (1927), 531–555.
[^2]: W. Bruns, J. Herzog, *Cohen–Macaulay Rings*, Cambridge University Press, 1993, 4 장 2 절.
[^3]: G. Gotzmann, "Eine Bedingung für die Flachheit und das Hilbertpolynom eines graduierten Ringes", *Mathematische Zeitschrift* 158 (1978), 61–70.
[^4]: G. F. Clements, B. Lindström, "A generalization of a combinatorial theorem of Macaulay", *Journal of Combinatorial Theory* 7 (1969), 230–238.
[^5]: R. P. Stanley, "Cohen–Macaulay complexes", in *Higher Combinatorics*, Reidel, 1977, 51–62.
[^6]: R. P. Stanley, "The number of faces of a simplicial convex polytope", *Advances in Mathematics* 35 (1980), 236–238.
[^7]: L. J. Billera, C. W. Lee, "A proof of the sufficiency of McMullen's conditions for f-vectors of simplicial convex polytopes", *Journal of Combinatorial Theory, Series A* 31 (1981), 237–255.

# 연관 문서

## 선수지식

- [Hilbert 함수](hilbert-functions.md)
- [Kruskal–Katona 정리](kruskal-katona-theorem.md)

## 더 알아보기

- [Stanley–Reisner 환](stanley-reisner-rings.md)

#combinatorics #ring_theory #algebra
