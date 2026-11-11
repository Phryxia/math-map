# Nevanlinna–Pick 보간

# 개요

**Nevanlinna–Pick 보간(Nevanlinna–Pick interpolation)** 은 단위원판의 점 몇 개에서 정해진 값을 갖고 원판 전체에서 절댓값이 $1$ 이하인 정칙함수가 있는지 묻는 문제다. 원점에서 $0$, 점 $1/2$ 에서 $3/4$ 인 함수를 찾으면, 다항식으로는 이런 함수를 얼마든지 만들 수 있지만 원판의 다른 점에서 절댓값이 $1$ 을 넘는다.

Pick 정리는 점과 값으로 만든 행렬 하나의 고윳값이 모두 $0$ 이상인지로 답을 가른다. 이 예에서는 행렬식이 음수여서 그런 함수가 없다.

# 직관

원점에서 $0$ 이고 원판을 원판으로 보내는 정칙함수 $f$ 는 [등각사상](conformal-mapping.md)의 Schwarz 보조정리에서 $\vert f(z)\vert\le\vert z\vert$ 를 만족한다. 그러므로 $\vert f(1/2)\vert\le 1/2$ 이고, 값 $3/4$ 는 불가능하다. 값 $1/2$ 이면 등호가 성립해 $f(z)=z$ 하나뿐이다. 값이 $1/4$ 이면 $f(z)=z/2$, $f(z)=z^2$ 등 여러 해가 있다.

원점이 아닌 두 점에서도 같은 판정이 된다. 원판의 자기동형은 [Blaschke 곱](blaschke-products.md)의 인자 하나이고, 이것으로 첫 점과 첫 값을 원점으로 옮기면 위의 경우가 된다. 점이 셋 이상이면 이 옮기기를 한 점씩 되풀이해야 하고, 판정 조건을 한 번에 적은 것이 Pick 정리다.

# 정의

원판 $\mathbb D=\lbrace z:\vert z\vert\lt 1\rbrace$ 의 서로 다른 점 $z\_1,\dots,z\_n$ 과 $\mathbb D$ 의 값 $w\_1,\dots,w\_n$ 이 주어졌을 때, **Nevanlinna–Pick 문제** 는 다음을 만족하는 정칙함수 $f:\mathbb D\to\mathbb C$ 를 찾는 것이다.

$$
\sup_{z\in\mathbb D}\vert f(z)\vert\le 1,\qquad f(z\_j)=w\_j\quad(j=1,\dots,n)
$$

**Pick 행렬(Pick matrix)** 은 $(i,j)$ 성분이 다음인 $n\times n$ 행렬이다.

$$
P\_{ij}=\frac{1-w\_i\bar w\_j}{1-z\_i\bar z\_j}
$$

$P$ 는 에르미트 행렬(Hermitian matrix)이다. 직관 절의 $z\_1=0$, $z\_2=1/2$, $w\_1=0$, $w\_2=w$ 에서는 다음이 된다.

$$
P=\begin{pmatrix}1&1\cr 1&\frac{4}{3}(1-\vert w\vert^2)\end{pmatrix}
$$

에르미트 행렬의 고윳값이 모두 $0$ 이상이면 **양의 준정부호(positive semidefinite)** 라 한다.

# 성질

## Pick 정리

*정리.* Nevanlinna–Pick 문제의 해가 있을 필요충분조건은 $P$ 가 양의 준정부호인 것이다. 해가 하나뿐일 필요충분조건은 $P$ 가 양의 준정부호이고 특이한 것이며, 그 해는 인자가 $\mathrm{rank}\thinspace P$ 개인 Blaschke 곱에 절댓값 $1$ 인 상수를 곱한 것이다[^1].

직관 절의 $P$ 는 대각 성분이 양수이므로 행렬식 $\frac{4}{3}(1-\vert w\vert^2)-1$ 이 $0$ 이상일 때 양의 준정부호다. 이 조건은 $\vert w\vert\le 1/2$ 이고, Schwarz 보조정리의 판정과 같다. $\vert w\vert=1/2$ 이면 $P$ 의 계수가 $1$ 이고 해는 인자 하나의 Blaschke 곱 $e^{i\varphi}z$ 다.

## 필요성

$f$ 가 해이면 $P$ 가 양의 준정부호임은 다음 등식에서 나온다.

$$
\frac{1-f(z)\overline{f(\zeta)}}{1-z\bar\zeta}=\sum_{k\ge 0}z^k\bar\zeta^k-\sum_{k\ge 0}f(z)z^k\overline{f(\zeta)\zeta^k}
$$

좌변을 $z,\zeta$ 의 함수로 보면, $\vert f\vert\le 1$ 일 때 이 함수가 [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)의 양의 준정부호 핵이 된다. [Hardy 공간](hardy-spaces.md) $H^2$ 의 핵 $1/(1-z\bar\zeta)$ 에 대해 $f$ 를 곱하는 연산자의 노름이 $\sup\vert f\vert$ 이하이기 때문이다. 점 $z\_1,\dots,z\_n$ 에서 핵의 값을 모은 행렬이 $P$ 다.

## Schur 알고리즘

충분성은 점의 개수에 대한 귀납법으로 증명된다. $\varphi\_a(w)=(w-a)/(1-\bar aw)$ 로 쓴다. $f$ 가 해이면 다음 함수 $g$ 도 원판에서 $\vert g\vert\le 1$ 이다.

$$
g(z)=\frac{\varphi\_{w\_1}(f(z))}{\varphi\_{z\_1}(z)}
$$

분자가 $z\_1$ 에서 $0$ 이므로 $g$ 는 정칙이고, 최대 절댓값 원리에서 $\vert g\vert\le 1$ 이다.

역으로 $\vert g\vert\le 1$ 인 $g$ 가 남은 $n-1$ 개 점에서 $g(z\_j)=\varphi\_{w\_1}(w\_j)/\varphi\_{z\_1}(z\_j)$ 를 만족하면 위 식을 $f$ 에 대해 풀어 원래 문제의 해를 얻는다. 새 문제의 Pick 행렬은 $P$ 의 $(1,1)$ 성분에 대한 [Schur 보수](schur-complement.md) $S$ 를 가역 대각행렬 $D$ 로 $DSD^\ast$ 꼴로 바꾼 것이다. 그러므로 $P$ 가 양의 준정부호이면 새 문제의 Pick 행렬도 그렇고, 귀납이 진행된다. 이 절차를 Schur 알고리즘(Schur algorithm)이라 한다.

# 활용

- 견고 제어(robust control)에서 불확실한 장치를 안정화하는 제어기를 찾는 문제는 오른쪽 반평면의 몇 점에서 값이 정해진 유계 정칙함수를 찾는 문제가 되고, 원판으로 옮기면 Nevanlinna–Pick 문제다.
- Carathéodory–Fejér 문제(Carathéodory–Fejér problem)는 점의 값 대신 원점에서의 Taylor 계수 몇 개를 정한다. 정한 계수로 만든 하삼각 [Toeplitz 행렬](toeplitz-matrices.md) $T$ 에 대해 $I-TT^\ast$ 가 양의 준정부호인지가 답을 준다.
- Sarason 정리(Sarason's theorem)는 Pick 정리를 Hardy 공간 위 연산자의 교환자 들어올리기(commutant lifting)로 다시 증명하고, 같은 방법으로 다변수 원판과 다른 재생핵 공간의 보간 문제를 다룬다.

[^1]: J. B. Garnett, *Bounded Analytic Functions*, revised 1st ed., Springer, 2007, 1 장 2 절 — Pick 정리와 Schur 알고리즘.

# 연관 문서

## 선수지식

- [Blaschke 곱](blaschke-products.md)
- [등각사상](conformal-mapping.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #functional_analysis #linear_algebra
