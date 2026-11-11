# Hilbert syzygy 정리

# 개요

**Hilbert syzygy 정리(Hilbert's syzygy theorem)** 는 변수가 $n$ 개인 다항식들 사이의 관계식을 세고, 그 관계식들 사이의 관계식을 세는 일이 $n$ 단계 안에 끝난다는 정리다. 변수 $x,y$ 의 다항식 $x^2$, $xy$, $y^2$ 의 배수가 $3$ 차에서 몇 개의 일차독립인 다항식을 이루는지 세면, $x^2\cdot y$ 와 $xy\cdot x$ 가 같은 다항식이어서 곱을 그냥 세면 겹친다. 겹침은 관계식으로 빼고, 관계식끼리 겹치면 다시 더한다. 이 정리는 그 빼고 더하기가 유한 번에 끝나서 각 차수의 수가 정확히 나온다는 것을 보장한다.

# 직관

$S=k\lbrack x,y\rbrack$ 에서 $x^2$, $xy$, $y^2$ 이 생성하는 아이디얼 $I$ 의 $3$ 차 부분을 센다. 세 다항식에 $1$ 차 단항식 $x$, $y$ 를 곱하면 여섯 개가 나온다.

$$
x^3,\quad x^2y,\quad x^2y,\quad xy^2,\quad xy^2,\quad y^3
$$

$x^2y$ 와 $xy^2$ 이 두 번씩 나오므로 실제로는 네 개다. 두 번 나온 것은 다음 두 관계식 때문이다.

$$
y\cdot x^2-x\cdot xy=0,\qquad y\cdot xy-x\cdot y^2=0
$$

$d$ 차에서도 같다. 세 다항식에 $(d-2)$ 차 다항식을 곱하면 $3(d-1)$ 개를 얻고, 두 관계식에 $(d-3)$ 차 다항식을 곱한 $2(d-2)$ 개만큼 겹친다. 두 관계식 사이에는 더 이상 관계식이 없으므로 $I$ 의 $d$ 차 부분의 차원은 다음과 같다.

$$
3(d-1)-2(d-2)=d+1
$$

$S$ 의 $d$ 차 단항식도 $d+1$ 개이므로 $d\ge 2$ 에서 $I$ 가 $d$ 차 다항식을 전부 포함한다. 관계식 사이에 관계식이 있으면 그것을 다시 더하고, 그 사이의 관계식은 다시 뺀다. 변수가 $n$ 개이면 이 과정이 $n$ 단계 안에 끝난다는 것이 이 정리다.

# 정의

$S=k\lbrack x\_1,\dots,x\_n\rbrack$ 을 체 $k$ 위의 [다항식환](polynomial-rings.md)이라 하고, 차수 붙은 가군은 [Hilbert 함수](hilbert-functions.md) 문서의 정의를 따른다.

## 자리 옮김

차수 붙은 가군 $M$ 과 정수 $j$ 에 대해 $M(-j)$ 는 $M(-j)\_d=M\_{d-j}$ 로 차수를 $j$ 만큼 올린 가군이다. $S(-2)$ 의 생성원 $1$ 은 $2$ 차에 놓인다. 직관 절의 $x^2$ 을 $S(-2)$ 의 생성원의 상으로 보면 곱셈 사상 $S(-2)\to S$ 가 차수를 보존한다.

## 자유 분해

$S$ 가군 $M$ 의 **자유 분해(free resolution)** 는 자유가군 $F\_i$ 의 [완전열](exact-sequences.md)이다.

$$
\cdots\to F\_2\xrightarrow{\varphi\_2}F\_1\xrightarrow{\varphi\_1}F\_0\to M\to 0
$$

$F\_i=\bigoplus\_jS(-j)^{\beta\_{i,j}}$ 이고 사상이 차수를 보존하면 차수 붙은 자유 분해라 한다. $\ker\varphi\_{i-1}$ 을 $M$ 의 **$i$ 번째 syzygy 가군(syzygy module)** 이라 한다. $F\_i\ne0$ 인 가장 큰 $i$ 를 분해의 길이라 한다.

직관 절의 $S/I$ 는 다음 분해를 가진다. 둘째 사상의 두 열이 직관 절의 두 관계식이다.

$$
0\to S(-3)^2\xrightarrow{\begin{pmatrix}y&0\cr -x&y\cr 0&-x\end{pmatrix}}S(-2)^3\xrightarrow{\begin{pmatrix}x^2&xy&y^2\end{pmatrix}}S\to S/I\to 0
$$

길이는 $2$ 다.

## 최소 분해와 Betti 수

$\mathfrak m=(x\_1,\dots,x\_n)$ 이라 하자. 모든 $i$ 에서 $\varphi\_i(F\_i)\subseteq\mathfrak mF\_{i-1}$ 이면, 곧 사상의 행렬 성분에 $0$ 이 아닌 상수가 없으면 **최소 자유 분해(minimal free resolution)** 라 한다. 최소 자유 분해의 지수 $\beta\_{i,j}$ 를 **차수 붙은 Betti 수(graded Betti number)** 라 한다. 위 분해의 행렬 성분은 $x$, $y$, $x^2$, $xy$, $y^2$ 이므로 최소이고, Betti 수는 $\beta\_{0,0}=1$, $\beta\_{1,2}=3$, $\beta\_{2,3}=2$ 이며 나머지는 $0$ 이다.

$M$ 의 자유 분해 가운데 가장 짧은 것의 길이를 $M$ 의 **사영 차원(projective dimension)** $\mathrm{pd}\thinspace M$ 이라 한다. $S/I$ 는 $\mathrm{pd}=2$ 다.

# 성질

## Hilbert syzygy 정리

정리. $S=k\lbrack x\_1,\dots,x\_n\rbrack$ 위의 유한생성 차수 붙은 가군 $M$ 은 길이가 $n$ 이하인 차수 붙은 자유 분해를 가지고, 각 $F\_i$ 는 유한 순위다[^1].

증명의 요지. [Nakayama 보조정리](nakayama-lemma.md)의 차수 붙은 판으로 최소 생성계를 고르는 일을 핵마다 되풀이하면 최소 자유 분해가 나오고, 그 지수는 다음과 같다.

$$
\beta\_{i,j}=\dim\_k\mathrm{Tor}\_i^S(M,k)\_j
$$

$\mathrm{Tor}$ 는 [유도 함자](derived-functors.md)이므로 $k$ 의 자유 분해로도 계산된다. $x\_1,\dots,x\_n$ 은 정칙열이므로 [Koszul 복합체](koszul-complex.md) $K\_\bullet(x\_1,\dots,x\_n)$ 가 길이 $n$ 인 $k$ 의 자유 분해이고, $i\gt n$ 에서 $\mathrm{Tor}\_i^S(M,k)=0$ 이다. 그래서 최소 분해의 $F\_i$ 는 $i\gt n$ 에서 $0$ 이다[^2].

## 분해의 유일성

최소 자유 분해는 복합체의 동형을 빼고 하나다. 그래서 Betti 수 $\beta\_{i,j}$ 는 분해를 고르는 방법과 무관한 $M$ 의 불변량이고, $\mathrm{pd}\thinspace M$ 은 최소 분해의 길이와 같다[^2].

## Hilbert 급수

차수 붙은 자유 분해가 있으면 각 차수에서 벡터 공간의 완전열이 되므로 차원의 교대합이 $0$ 이다. $S(-j)$ 의 Hilbert 급수는 $t^j/(1-t)^n$ 이므로 다음이 나온다.

$$
\mathrm{HS}\_M(t)=\frac{\sum\_i(-1)^i\sum\_j\beta\_{i,j}t^j}{(1-t)^n}
$$

분해가 유한하므로 분자가 다항식이고, Hilbert 함수 문서의 급수의 유리성이 이 식으로 증명된다. Hilbert 가 1890 년에 유리성을 증명한 방법이 이것이다[^1]. 직관 절의 예에서 분자는 $1-3t^2+2t^3$ 이고, 다음과 같이 $S/I$ 의 급수 $1+2t$ 가 나온다.

$$
\frac{1-3t^2+2t^3}{(1-t)^2}=\frac{(1+2t)(1-t)^2}{(1-t)^2}=1+2t
$$

## 상한 n 의 최선성

$k=S/\mathfrak m$ 은 $\mathrm{pd}\thinspace k=n$ 이다. Koszul 분해가 최소이고 마지막 항이 $S(-n)$ 이므로 $\beta\_{n,n}=1$ 이다. $n=2$ 이면 분해는 다음과 같다.

$$
0\to S(-2)\xrightarrow{\begin{pmatrix}-y\cr x\end{pmatrix}}S(-1)^2\xrightarrow{\begin{pmatrix}x&y\end{pmatrix}}S\to k\to 0
$$

## 다항식환이 아닌 환

정리는 다항식환에서만 성립한다. $R=k\lbrack x\rbrack/(x^2)$ 에서 $k=R/(x)$ 의 최소 분해는 $x$ 를 곱하는 사상이 끝없이 이어진다.

$$
\cdots\xrightarrow{x}R\xrightarrow{x}R\xrightarrow{x}R\to k\to 0
$$

$x$ 를 곱하는 사상의 핵이 다시 $xR\cong k$ 이기 때문이다. 국소환 $R$ 에서 모든 유한생성 가군의 사영 차원이 유한한 것과 $R$ 이 [정칙 국소환](regular-local-rings.md)인 것이 동치라는 것이 Serre 의 정리(Auslander–Buchsbaum–Serre theorem)다[^3].

## Auslander–Buchsbaum 공식

$M\ne0$ 인 유한생성 차수 붙은 $S$ 가군에 대해 다음이 성립한다. 이를 **Auslander–Buchsbaum 공식(Auslander–Buchsbaum formula)** 이라 한다[^2].

$$
\mathrm{pd}\thinspace M+\mathrm{depth}\thinspace M=n
$$

깊이는 [Cohen–Macaulay 환](cohen-macaulay-rings.md) 문서의 정의를 따른다. 직관 절의 $S/I$ 는 유한 차원이라 모든 원소가 $\mathfrak m$ 의 거듭제곱에 죽으므로 깊이가 $0$ 이고, $\mathrm{pd}=2$ 와 맞는다.

# 활용

- [Gröbner 기저](groebner-bases.md). Buchberger 판정에서 $0$ 으로 줄어드는 S 다항식이 syzygy 가군의 생성원을 준다. 이것을 되풀이하는 Schreyer 알고리즘(Schreyer's algorithm)이 자유 분해를 계산한다[^2].
- [Stanley–Reisner 환](stanley-reisner-rings.md). Hochster 공식이 면 아이디얼의 Betti 수를 단체 복합체의 부분복합체의 호몰로지로 적는다.
- Cohen–Macaulay 환. Auslander–Buchsbaum 공식으로 $S/I$ 가 Cohen–Macaulay 인 것과 $\mathrm{pd}\thinspace S/I$ 가 $I$ 의 높이와 같은 것이 동치가 된다.
- 사영공간의 점과 곡선. 차수 붙은 Betti 수가 0 이 아닌 $j$ 의 범위로 Castelnuovo–Mumford 정칙성(Castelnuovo–Mumford regularity)이 정의되고, 이 값이 Hilbert 함수가 Hilbert 다항식과 같아지는 차수의 상한을 준다[^2].

[^1]: D. Hilbert, "Über die Theorie der algebraischen Formen", *Mathematische Annalen* 36 (1890), 473–534.
[^2]: D. Eisenbud, *The Geometry of Syzygies*, Graduate Texts in Mathematics 229, Springer, 2005, 1 장과 4 장. Auslander–Buchsbaum 공식과 Schreyer 알고리즘은 D. Eisenbud, *Commutative Algebra with a View Toward Algebraic Geometry*, Graduate Texts in Mathematics 150, Springer, 1995, 15 장과 19 장.
[^3]: J.-P. Serre, "Sur la dimension homologique des anneaux et des modules noethériens", *Proc. Int. Symp. Algebraic Number Theory, Tokyo–Nikko* (1956), 175–189.

# 연관 문서

## 선수지식

- [Hilbert 함수](hilbert-functions.md)
- [Koszul 복합체](koszul-complex.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #combinatorics
