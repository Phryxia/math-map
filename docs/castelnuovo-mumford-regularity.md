# Castelnuovo–Mumford 정칙성

# 개요

**Castelnuovo–Mumford 정칙성(Castelnuovo–Mumford regularity)** 은 차수 붙은 가군의 자유 분해에서 관계식의 차수가 단계마다 얼마나 늘어나는지를 재는 정수다. 평면의 세 점에서 원하는 값을 내는 다항식을 찾을 때, 세 점이 한 직선 위에 있으면 일차식으로는 안 되고 이차식이 있어야 하며, 한 직선 위에 있지 않으면 일차식으로 된다. 정칙성은 이 차이를 세 점이 정하는 아이디얼의 자유 분해에서 읽어, 몇 차부터 계산이 안정되는지를 수 하나로 준다.

# 직관

사영평면의 세 점 $(1:0:0)$, $(0:1:0)$, $(0:0:1)$ 에서 세 값 $a,b,c$ 를 내는 일차식은 $ax+by+cz$ 다. 같은 일을 직선 $x=0$ 위의 세 점 $(0:1:0)$, $(0:0:1)$, $(0:1:1)$ 에서 하면, 일차식 $\alpha x+\beta y+\gamma z$ 의 값은 $\beta$, $\gamma$, $\beta+\gamma$ 라서 셋째 값이 앞의 둘로 정해진다. 값을 마음대로 고르려면 이차식이 있어야 하고, $y^2$, $z^2$, $yz$ 의 값이 각각 $(1,0,1)$, $(0,1,1)$, $(0,0,1)$ 이므로 이차식으로는 된다.

[Hilbert 함수](hilbert-functions.md)로 적으면 이 차이가 보인다. 세 점에서 $0$ 인 다항식의 아이디얼을 $I$ 라 하면 $\dim\_k(S/I)\_d$ 는 $d$ 차식이 세 점에서 낼 수 있는 값의 조합의 차원이다. 한 직선 위에 있지 않은 세 점은 $1,3,3,3,\dots$ 이고 한 직선 위의 세 점은 $1,2,3,3,\dots$ 이다. 두 함수는 큰 차수에서 둘 다 $3$ 이지만 $3$ 에 닿는 차수가 $1$ 과 $2$ 로 다르다.

이 차수는 $I$ 의 생성원과 관계식의 차수로도 나타난다. 앞의 경우 $I=(xy,yz,zx)$ 는 이차식으로 생성되고, 뒤의 경우 $I=(x,\thinspace yz(y-z))$ 는 삼차식을 하나 포함한다. 정칙성은 자유 분해의 모든 단계에서 이런 차수를 모아 하나의 정수로 만든 것이다.

# 정의

$S=k\lbrack x\_0,\dots,x\_n\rbrack$ 이라 하고, 차수 붙은 Betti 수 $\beta\_{i,j}$ 는 [Hilbert syzygy 정리](hilbert-syzygy-theorem.md) 문서의 정의를 따른다.

## 정칙성

유한생성 차수 붙은 $S$ 가군 $M$ 의 정칙성은 다음 수다.

$$
\mathrm{reg}\thinspace M=\max\lbrace j-i:\beta\_{i,j}(M)\ne0\rbrace
$$

$i$ 번째 단계의 생성원 차수에서 $i$ 를 뺀 값의 최댓값이다. 최소 자유 분해가 유한하므로 이 최댓값이 있다.

## 세 점의 정칙성

한 직선 위에 있지 않은 세 점에서 $I=(xy,yz,zx)$ 이고 최소 자유 분해는 다음과 같다.

$$
0\to S(-3)^2\to S(-2)^3\to S\to S/I\to 0
$$

$j-i$ 의 값은 $0$, $2-1$, $3-2$ 이므로 $\mathrm{reg}\thinspace S/I=1$ 이다.

한 직선 위의 세 점에서 $I=(x,\thinspace yz(y-z))$ 이고, 두 생성원이 정칙열이므로 [Koszul 복합체](koszul-complex.md)가 최소 자유 분해다.

$$
0\to S(-4)\to S(-1)\oplus S(-3)\to S\to S/I\to 0
$$

$j-i$ 의 값은 $0$, $1-1$, $3-1$, $4-2$ 이므로 $\mathrm{reg}\thinspace S/I=2$ 다. 두 정칙성이 직관 절의 두 차수 $1$ 과 $2$ 와 같다.

# 성질

## Hilbert 함수가 다항식이 되는 차수

정리. $d\ge\mathrm{reg}\thinspace M+1$ 이면 $H\_M(d)=P\_M(d)$ 다[^1].

증명의 요지. Hilbert syzygy 정리의 Hilbert 급수 식에서 $H\_M(d)$ 는 $\binom{d-j+n}{n}$ 들의 교대합이다. $\binom{d-j+n}{n}$ 은 $d\ge j-n$ 에서 $d$ 의 다항식과 같으므로, 모든 $\beta\_{i,j}\ne0$ 에 대해 $d\ge j-n$ 이면 $H\_M$ 이 다항식과 같다. 정칙성의 정의와 $i\le n+1$ 로 이 조건이 $d\ge\mathrm{reg}\thinspace M+1$ 에서 성립한다.

세 점의 예에서 $H$ 는 각각 $d\ge1$, $d\ge2$ 에서 상수 $3$ 이고 정리의 범위 $d\ge2$, $d\ge3$ 보다 하나 이르다. 깊이가 $1$ 이상인 가군에서는 Auslander–Buchsbaum 공식으로 $i\le n$ 이므로 범위가 $d\ge\mathrm{reg}\thinspace M$ 으로 하나 내려간다[^1].

## 점 집합

정리. 사영공간의 점 $r$ 개의 집합 $X$ 에서 $S\_X=S/I(X)$ 라 하면 $\mathrm{reg}\thinspace S\_X\le r-1$ 이고, 등호는 $X$ 가 한 직선 위에 있을 때만 성립한다[^1].

$d\ge\mathrm{reg}\thinspace S\_X$ 이면 $d$ 차식으로 $X$ 의 점마다 값을 마음대로 정할 수 있다. 직관 절의 한 직선 위 세 점은 $r-1=2$ 로 등호를 이룬다.

## 국소 코호몰로지에 의한 기술

$\mathfrak m=(x\_0,\dots,x\_n)$ 에 대한 [국소 코호몰로지](local-cohomology.md) $H^i\_{\mathfrak m}(M)$ 으로 정칙성이 다음과 같이 적힌다[^1].

$$
\mathrm{reg}\thinspace M=\max\lbrace e+i:H^i\_{\mathfrak m}(M)\_e\ne0\rbrace
$$

이 식은 자유 분해를 쓰지 않으므로, Mumford 는 사영공간 위의 층에 대해 $H^i(\mathcal F(m-i))=0$ $(i\gt0)$ 일 때 $\mathcal F$ 가 $m$ 정칙이라 정의했다[^2].

# 활용

- [Hilbert 스킴](hilbert-scheme.md). Hilbert 다항식이 같은 부분스킴의 아이디얼이 모두 같은 차수 이하에서 정칙이라는 Gotzmann 정칙성 정리(Gotzmann's regularity theorem)로, 그 차수의 [Grassmann 다양체](grassmannian.md) 안에 Hilbert 스킴을 만든다.
- [Gröbner 기저](groebner-bases.md). 표수 $0$ 에서 좌표를 일반적으로 바꾼 뒤 역사전식 순서의 선두항 아이디얼은 원래 아이디얼과 정칙성이 같다는 Bayer–Stillman 정리(Bayer–Stillman theorem)가 있어, Gröbner 기저 계산의 차수를 정칙성으로 잰다[^3].
- 사영 곡선. $\mathbb P^r$ 안의 차수 $e$ 인 비퇴화 기약 곡선의 아이디얼 $I$ 는 $\mathrm{reg}\thinspace I\le e-r+2$ 이다. Gruson, Lazarsfeld, Peskine 이 증명했다[^4]. 고차원 다양체로 넓힌 Eisenbud–Goto 추측(Eisenbud–Goto conjecture)에는 McCullough 와 Peeva 가 반례를 냈다[^5].

[^1]: D. Eisenbud, *The Geometry of Syzygies*, Graduate Texts in Mathematics 229, Springer, 2005, 4 장.
[^2]: D. Mumford, *Lectures on Curves on an Algebraic Surface*, Annals of Mathematics Studies 59, Princeton University Press, 1966, 14 강.
[^3]: D. Bayer, M. Stillman, "A criterion for detecting m-regularity", *Inventiones Mathematicae* 87 (1987), 1–11.
[^4]: L. Gruson, R. Lazarsfeld, C. Peskine, "On a theorem of Castelnuovo, and the equations defining space curves", *Inventiones Mathematicae* 72 (1983), 491–506.
[^5]: J. McCullough, I. Peeva, "Counterexamples to the Eisenbud–Goto regularity conjecture", *Journal of the American Mathematical Society* 31 (2018), 473–496.

# 연관 문서

## 선수지식

- [Hilbert syzygy 정리](hilbert-syzygy-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #combinatorics
