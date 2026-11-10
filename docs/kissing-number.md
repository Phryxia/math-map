# 접촉수 문제

# 개요

**접촉수 문제(kissing number problem)** 는 같은 크기의 공 하나에 서로 겹치지 않게 동시에 닿을 수 있는 공의 최대 개수를 차원마다 정하는 문제다. 3 차원에서 가운데 공 둘레에 공 12 개를 정이십면체의 꼭짓점 방향으로 놓으면 공 사이에 틈이 남는다. 그래서 공을 움직여 틈을 모으면 13 번째 공이 들어가는지가 물음이 된다.

닿는 공의 방향을 단위구면 위의 점으로 바꾸면 이 문제는 서로 $60^\circ$ 이상 떨어진 점을 몇 개까지 놓을 수 있는가가 되고, [구면조화함수](spherical-harmonics.md)의 양성으로 그 개수의 상한을 얻는다.

# 직관

반지름 $1$ 인 공에 반지름 $1$ 인 공이 닿으면 중심 사이 거리가 $2$ 다. 닿는 공의 중심 방향을 단위 벡터 $x\_1,\dots,x\_N$ 으로 적으면, 두 공이 겹치지 않는 것은 두 중심의 거리가 $2$ 이상인 것이고 이것은 $\langle x\_i,x\_j\rangle\le\tfrac12$, 곧 두 방향의 각이 $60^\circ$ 이상인 것과 같다. 정이십면체의 이웃한 두 꼭짓점의 각은 약 $63.4^\circ$ 라 조건을 넉넉히 만족한다.

넓이로 상한을 잡아 본다. 각 $x\_i$ 둘레에 각반지름 $30^\circ$ 인 모자를 씌우면 모자들은 겹치지 않는다. 모자 하나의 넓이는 구면의 $\tfrac12(1-\cos30^\circ)\approx0.067$ 배이므로 $N\le14.9$, 곧 $N\le14$ 다. 모자 사이의 빈틈을 세지 않아 12 와 13 을 가르지 못한다.

넓이 대신 점들의 내적 전체를 한꺼번에 본다. 다항식 $f$ 를 골라 $\sum\_{i,j}f(\langle x\_i,x\_j\rangle)$ 를 두 방법으로 잰다. $f$ 가 $\lbrack -1,\tfrac12\rbrack$ 에서 $0$ 이하이면 $i\ne j$ 항이 모두 $0$ 이하라 합이 $Nf(1)$ 이하다.

한편 $f$ 를 구면조화함수에서 오는 다항식들로 펼친 계수가 모두 $0$ 이상이면 합이 $f\_0N^2$ 이상이다. 두 부등식을 합치면 $N\le f(1)/f\_0$ 이다.

# 정의

## 접촉수

$\mathbb R^n$ 에서 단위 공 하나에 겹치지 않게 동시에 닿는 단위 공의 최대 개수를 **접촉수(kissing number)** $\tau\_n$ 이라 한다. 직관 절의 변환으로 $\tau\_n$ 은 $\langle x,y\rangle\le\tfrac12$ ($x\ne y$) 인 $S^{n-1}$ 의 점 모임의 최대 크기다. $\tau\_2=6$ 이고, 정육각형의 꼭짓점 방향이 이를 달성한다.

## Gegenbauer 다항식

$S^{n-1}$ 위에서 차수 $k$ 인 구면조화함수의 정규직교기저 $Y\_1,\dots,Y\_m$ 에 대해 $\sum\_lY\_l(x)Y\_l(y)$ 는 $\langle x,y\rangle$ 에만 의존한다. 이 함수를 $t=\langle x,y\rangle$ 의 함수로 보고 $G\_k(1)=1$ 이 되게 나눈 다항식 $G\_k^{(n)}(t)$ 를 **Gegenbauer 다항식(Gegenbauer polynomial)** 이라 한다. $n=3$ 이면 구면조화함수의 덧셈정리에 나오는 Legendre 다항식 $P\_k$ 이고, $G\_1(t)=t$, $G\_2(t)=\tfrac12(3t^2-1)$ 이다.

# 성질

## Schoenberg 양성

정리. $S^{n-1}$ 의 유한 점 모임 $X$ 와 모든 $k\ge0$ 에서 다음이 성립한다[^1].

$$
\sum_{x,y\in X}G_k^{(n)}(\langle x,y\rangle)\ge0
$$

증명의 요지. 정의에서 좌변은 양의 상수배의 $\sum\_l\bigl(\sum\_{x\in X}Y\_l(x)\bigr)^2$ 이다. 등호는 $\sum\_{x\in X}Y(x)=0$ 이 차수 $k$ 의 모든 구면조화함수에서 성립할 때다. $1\le k\le t$ 에서 모두 등호이면 $X$ 는 [구면 설계](spherical-designs.md)의 $t$-설계다.

## 선형계획 상한

정리. $f(t)=\sum\_kf\_kG\_k^{(n)}(t)$ 가 $f\_0\gt0$, $f\_k\ge0$ 이고 $\lbrack -1,\tfrac12\rbrack$ 에서 $f(t)\le0$ 이면 $\tau\_n\le f(1)/f\_0$ 이다[^2].

증명은 직관 절의 두 부등식이고, 둘째 부등식이 Schoenberg 양성이다. 이 상한은 [Delsarte 선형계획 상한](delsarte-lp-bound.md)을 Hamming 공간에서 구면으로 옮긴 것이고, 최선의 $f$ 를 찾는 일이 선형계획 문제다.

## 8 차원과 24 차원

$n=8$ 에서 다음 다항식은 Gegenbauer 계수가 모두 $0$ 이상이고 $f(1)/f\_0=240$ 이다[^3].

$$
f(t)=(t+1)\bigl(t+\tfrac12\bigr)^2t^2\bigl(t-\tfrac12\bigr)
$$

[E₈ 격자](e8-lattice.md)의 최소 벡터 240 개가 이 값을 달성하므로 $\tau\_8=240$ 이다. 등호에서는 $i\ne j$ 인 내적이 $f$ 의 근 $-1,-\tfrac12,0,\tfrac12$ 에만 있어야 하고, E₈ 의 최소 벡터들의 내적이 그렇다. 같은 방식으로 $n=24$ 에서 [Leech 격자](leech-lattice.md)의 최소 벡터가 $\tau\_{24}=196560$ 을 준다[^3]. 두 차원에서 최적 배치는 회전을 빼면 하나뿐이다[^4].

## 3 차원과 4 차원

$n=3$ 에서 선형계획 상한의 최솟값은 약 $13.16$ 이라 $\tau\_3\le13$ 까지만 나온다[^3]. $\tau\_3=12$ 는 Schütte 와 van der Waerden 이 다른 방법으로 증명했다[^5]. $n=4$ 에서도 선형계획 상한은 $25$ 에 머물고, Musin 이 조건을 바꾼 상한으로 $\tau\_4=24$ 를 증명했다[^6].

# 활용

- [구 채우기](sphere-packing.md). 격자 채움에서 한 공에 닿는 공의 수는 최소 벡터의 개수이므로, 접촉수가 격자의 최소 벡터 수의 상한이다. Viazovska 의 8 차원 구 채우기 증명은 같은 꼴의 부등식을 [Fourier 변환](fourier-transform.md)으로 옮긴 Cohn–Elkies 의 선형계획 상한을 쓴다.
- 구면 부호(spherical code). 각이 정해진 값 이상인 구면 점 모임의 최대 크기를 같은 선형계획으로 누르고, 접촉수는 그 각이 $60^\circ$ 인 경우다.

[^1]: I. J. Schoenberg, "Positive definite functions on spheres", *Duke Mathematical Journal* 9 (1942), 96–108.
[^2]: P. Delsarte, J. M. Goethals, J. J. Seidel, "Spherical codes and designs", *Geometriae Dedicata* 6 (1977), 363–388.
[^3]: V. I. Levenshtein, "On bounds for packings in n-dimensional Euclidean space", *Soviet Mathematics Doklady* 20 (1979), 417–421; A. M. Odlyzko, N. J. A. Sloane, "New bounds on the number of unit spheres that can touch a unit sphere in n dimensions", *Journal of Combinatorial Theory A* 26 (1979), 210–214.
[^4]: E. Bannai, N. J. A. Sloane, "Uniqueness of certain spherical codes", *Canadian Journal of Mathematics* 33 (1981), 437–449.
[^5]: K. Schütte, B. L. van der Waerden, "Das Problem der dreizehn Kugeln", *Mathematische Annalen* 125 (1953), 325–334.
[^6]: O. R. Musin, "The kissing number in four dimensions", *Annals of Mathematics* 168 (2008), 1–32.

# 연관 문서

## 선수지식

- [구 채우기](sphere-packing.md)
- [구면 설계](spherical-designs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #optimization #analysis
