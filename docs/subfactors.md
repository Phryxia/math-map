# 부분인자

# 개요

**부분인자(subfactor)** 는 $\mathrm{II}\_1$ 형 인자 $M$ 과 그 부분대수이면서 자신도 인자인 $N$ 의 쌍 $N\subseteq M$ 이다. 행렬 대수 $M_k(\mathbb C)$ 는 스칼라 행렬 전체의 $k^2$ 배 크기라고 차원의 비로 말할 수 있지만, 무한차원 대수끼리는 차원의 비가 $\infty/\infty$ 여서 이렇게 잴 수 없다. 큰 대수를 작은 대수 위의 공간으로 보고 추적으로 그 크기를 재면 비가 실수 하나로 나오고, 그 값은 $4$ 보다 작은 쪽에서 띄엄띄엄한 수만 될 수 있다.

# 직관

행렬 대수 $M_k(\mathbb C)$ 와 그 안의 스칼라 행렬 $\mathbb C I$ 를 본다. 앞의 것은 차원이 $k^2$ 이고 뒤의 것은 $1$ 이므로 큰 대수가 작은 대수의 $k^2$ 배다. 부분대수의 크기는 차원의 비로 잰다.

[von Neumann 대수](von-neumann-algebras.md) 문서의 $\mathrm{II}\_1$ 형 인자는 무한차원이라 차원의 비가 $\infty/\infty$ 가 된다. 대신 이 인자에는 $\tau(I)=1$ 인 추적 $\tau$ 가 있고, 사영의 크기를 $\tau$ 로 $0$ 과 $1$ 사이의 실수로 잰다.

$M$ 에 내적 $\langle x,y\rangle=\tau(y^\ast x)$ 를 주고 완비화하면 [Hilbert 공간](hilbert-spaces.md) $L^2(M)$ 이 나온다. $N$ 은 이 공간에 왼쪽 곱으로 작용한다. 행렬의 예에서 $M_k(\mathbb C)$ 를 $\mathbb C$ 위의 공간으로 보면 차원이 $k^2$ 이었듯, $L^2(M)$ 을 $N$ 위의 공간으로 보고 $N$ 의 추적으로 그 "차원" 을 재면 비가 하나의 수로 나온다.

$N$ 을 $M=M_k(N)$ 에 대각으로 넣으면 $L^2(M)$ 은 $L^2(N)$ 을 $k^2$ 개 붙인 것이고 그 수는 $k^2$ 이다. 이 수가 Jones 지표이고, 정수가 아닌 값도 나온다.

이 실수 $\lbrack M:N\rbrack$ 을 Jones 지표(Jones index)라 한다. Jones 지표 정리는 이 값이 $\lbrace 4\cos^2(\pi/n)\mid n\ge 3\rbrace\cup\lbrack 4,\infty\rbrack$ 에만 있다고 진술한다.

# 정의

$M$ 을 추적 $\tau$ 를 가진 $\mathrm{II}\_1$ 형 인자, $L^2(M)$ 을 위의 완비화라 하자.

## 결합 상수

$N$ 이 Hilbert 공간 $H$ 에 정규 표현(normal representation)으로 작용하면 $H$ 는 $\ell^2\otimes L^2(N)$ 의 부분공간 $p(\ell^2\otimes L^2(N))$ 과 $N$ 가군으로 동형이다. 여기서 $p$ 는 $B(\ell^2)\bar\otimes N$ 의 사영이다. 이때

$$
\dim_NH=(\mathrm{Tr}\otimes\tau)(p)\in\lbrack 0,\infty\rbrack
$$

를 Murray–von Neumann 결합 상수(coupling constant)라 한다. $\mathrm{Tr}$ 은 $B(\ell^2)$ 의 표준 대각합이고 값은 $p$ 의 선택에 의존하지 않는다.

## Jones 지표

$N\subseteq M$ 이 같은 단위원을 가진 $\mathrm{II}\_1$ 형 인자이면

$$
\lbrack M:N\rbrack=\dim_NL^2(M)
$$

를 **Jones 지표(Jones index)** 라 한다. $N=M$ 이면 $1$ 이다. 항등원이 아닌 원소의 켤레류가 모두 무한인 군 $G$ 와 같은 조건을 만족하는 지표 유한 부분군 $H$ 에서 군 von Neumann 대수의 쌍 $L(H)\subseteq L(G)$ 는 부분인자이고 지표는 $\lbrack G:H\rbrack$ 이다.

## 기본 구성

$L^2(N)\subseteq L^2(M)$ 위로의 직교사영을 $e_N$ 이라 한다. $e_N$ 을 $M$ 에 제한하면 추적을 보존하는 [조건부 기댓값](conditional-expectation.md)(conditional expectation) $E_N\colon M\to N$ 이다. $M$ 과 $e_N$ 이 $L^2(M)$ 위에서 생성하는 von Neumann 대수를 $M_1$ 이라 하고, $N\subseteq M$ 에서 $M\subseteq M_1$ 을 만드는 이 과정을 **기본 구성(basic construction)** 이라 한다.

$\lbrack M:N\rbrack\lt\infty$ 이면 $M_1$ 도 $\mathrm{II}\_1$ 형 인자이고 다음이 성립한다[^1].

$$
\lbrack M_1:M\rbrack=\lbrack M:N\rbrack,\qquad e_Nxe_N=E_N(x)e_N\quad (x\in M),\qquad \tau(e_N)=\lbrack M:N\rbrack^{-1}
$$

# 성질

## Jones 사영의 열

기본 구성을 되풀이하면 인자의 탑 $N\subseteq M\subseteq M_1\subseteq M_2\subseteq\cdots$ 과 사영 $e_1=e_N,\thinspace e_2,\thinspace e_3,\dots$ 가 나온다. $\lambda=\lbrack M:N\rbrack^{-1}$ 로 두면 이 사영들은 다음을 만족한다.

$$
e_i^2=e_i=e_i^\ast,\qquad e_ie_{i\pm 1}e_i=\lambda e_i,\qquad e_ie_j=e_je_i\quad (\vert i-j\vert\ge 2)
$$

$\delta=\lambda^{-1/2}$ 로 두고 $f_i=\delta e_i$ 라 하면 $f_i^2=\delta f_i$ 이고 $f_if_{i\pm 1}f_i=\delta^3\lambda e_i=f_i$ 이므로, $f_i$ 들은 [Temperley–Lieb 대수](temperley-lieb-algebras.md) $TL_k(\delta)$ 의 관계를 만족한다. 추적 $\tau$ 는 이 대수 위에서 $\tau(we_{k})=\lambda\tau(w)$ ($w$ 는 $1,e_1,\dots,e_{k-1}$ 이 생성하는 원소) 를 만족하고, 이 성질을 Markov 성질(Markov property)이라 한다.

## Jones 지표 정리

Jones 지표 정리(Jones index theorem)는 다음이다. $N\subseteq M$ 이 $\mathrm{II}\_1$ 형 부분인자이면

$$
\lbrack M:N\rbrack\in\lbrace 4\cos^2(\pi/n)\mid n=3,4,5,\dots\rbrace\cup\lbrack 4,\infty\rbrack
$$

이고, 이 집합의 모든 값이 초유한(hyperfinite) $\mathrm{II}\_1$ 형 인자의 부분인자로 실현된다[^2].

증명의 요지는 추적의 양성이다. Jones 사영들이 생성하는 대수 위에서 $\tau$ 는 양의 범함수다. 그 대수는 $TL_k(\delta)$ 의 상이고, [Jones–Wenzl 멱등원](jones-wenzl-idempotents.md) $p_k$ 의 추적은 [Chebyshev 다항식](chebyshev-polynomials.md)의 비로 계산된다. $\delta\lt 2$ 에서 모든 $k$ 에 대해 이 값이 음이 아니려면 $\delta=2\cos(\pi/n)$ 이어야 한다. 그래서 $\lbrack M:N\rbrack=\delta^2$ 는 $4$ 미만에서 $1,\thinspace 2,\thinspace (3+\sqrt5)/2,\thinspace 3,\dots$ 만 가진다.

## 주 그래프

상대 교환자(relative commutant) $N'\cap M_k$ 들은 유한차원 대수이고 그 포함 관계를 이분 그래프로 적은 것을 주 그래프(principal graph)라 한다. 지표가 유한하고 주 그래프가 유한이면 그 인접행렬의 노름의 제곱이 $\lbrack M:N\rbrack$ 이다[^3]. 지표가 $4$ 미만이면 주 그래프는 노름이 $2$ 미만인 그래프, 곧 단순 끈(simply laced) Dynkin 도형(Dynkin diagram)이다.

# 활용

- [매듭 불변량](knot-invariants.md). [땋임군](braid-groups.md) $B_n$ 을 생성원 $\sigma_i$ 를 $1$ 과 $e_i$ 의 일차결합으로 보내 Jones 사영의 대수로 옮기고 Markov 성질을 가진 추적을 합성하면 닫힌 땋임의 불변량이 나온다. 이것이 Jones 다항식이다.
- 군의 부분군. $L(H)\subseteq L(G)$ 의 지표가 $\lbrack G:H\rbrack$ 이므로 부분인자는 부분군의 지표를 정수가 아닌 값으로 넓힌다.
- 범주론적 불변량. 부분인자에서 $N$-$N$, $N$-$M$ 쌍가군들이 이루는 텐서 범주를 얻고, 지표가 $4$ 미만인 경우의 분류가 Dynkin 도형의 분류와 대응한다.

[^1]: V. Jones, V. S. Sunder, *Introduction to Subfactors*, Cambridge University Press (1997), 3장. 결합 상수, 기본 구성, Jones 사영의 관계.
[^2]: V. Jones, Index for subfactors, *Invent. Math.* **72** (1983), 1–25.
[^3]: F. Goodman, P. de la Harpe, V. Jones, *Coxeter Graphs and Towers of Algebras*, Springer (1989), 1장과 4장.

# 연관 문서

## 선수지식

- [von Neumann 대수](von-neumann-algebras.md)
- [Temperley–Lieb 대수](temperley-lieb-algebras.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #algebra #topology #group_theory
