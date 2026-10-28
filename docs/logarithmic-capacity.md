# 로그 용량

# 개요

**로그 용량(logarithmic capacity)** 은 평면의 닫힌 유계 집합에 크기를 하나의 길이로 주는 양으로, 그 집합에서 최고차 계수가 $1$ 인 다항식을 얼마나 작게 만들 수 있는지를 잰다. 구간 $\lbrack -1,1\rbrack$ 에서 최고차 계수가 $1$ 인 $n$ 차 다항식의 최대 절댓값을 가장 작게 하면 그 값은 $2^{1-n}$ 이고, 그 $n$ 제곱근은 $n\to\infty$ 에서 $\tfrac12$ 로 간다. 로그 용량은 이 극한값을 집합마다 정하는 양이고, 집합 위 확률측도의 로그 에너지를 최소로 하는 문제로 계산된다.

# 직관

로그 용량은 복소평면의 콤팩트 집합 $K$ 위 확률측도의 로그 에너지의 최솟값 $V(K)$ 로 $\mathrm{cap}(K)=e^{-V(K)}$ 라 정의하는 양이다. 평면에서 [퍼텐셜 이론](potential-theory.md)의 용량을 로그 핵으로 잰 것이다.

같은 양이 두 가지 다른 최적화 문제에서도 나온다. $K$ 의 점 $n$ 개 사이 거리의 곱을 최대로 한 값의 극한인 초월 지름(transfinite diameter)과, $K$ 에서 최고차 계수 $1$ 인 다항식의 최대 절댓값을 최소로 한 값의 극한인 Chebyshev 상수(Chebyshev constant)가 모두 $\mathrm{cap}(K)$ 와 같다.

$K=\lbrack-1,1\rbrack$ 에서 최고차 계수가 $1$ 인 차수 $n$ 다항식 $p$ 의 $\max_K\vert p\vert$ 를 가장 작게 하는 문제는 [Chebyshev 다항식](chebyshev-polynomials.md)이 푼다. 최솟값이 $2^{1-n}$ 이므로 $n$ 제곱근은 $n\to\infty$ 에서 $\tfrac12$ 로 간다.

$p$ 의 근을 $z_1,\dots,z_n$ 이라 하면 $\frac1n\log\vert p(z)\vert=\frac1n\sum_j\log\vert z-z_j\vert$ 이다. 근마다 질량 $\frac1n$ 을 둔 측도 $\nu$ 를 잡으면 이 값은 $\nu$ 의 로그 퍼텐셜에 $-1$ 을 곱한 것이다. $\max_K\vert p\vert$ 를 작게 하려면 이 퍼텐셜이 $K$ 위에서 고르게 커야 하고, 근을 한곳에 몰면 그 밖에서 퍼텐셜이 작아진다. $T_n$ 의 근 $\cos\frac{(2k-1)\pi}{2n}$ 은 $\theta$ 에 대해 등간격이므로 $n\to\infty$ 에서 밀도 $\frac{1}{\pi\sqrt{1-x^2}}$ 로 퍼진다. 이 측도의 로그 에너지가 $\log 2$ 이고 $e^{-\log 2}=\tfrac12$ 이 앞의 극한과 같다.

# 정의

## 로그 에너지

$K\subset\mathbb C$ 가 콤팩트이고 $\mu$ 가 $K$ 위의 확률측도이면

$$
U^\mu(z)=\int\log\frac{1}{\vert z-w\vert}\thinspace d\mu(w),\qquad I(\mu)=\int\int\log\frac{1}{\vert z-w\vert}\thinspace d\mu(z)\thinspace d\mu(w)
$$

를 $\mu$ 의 로그 퍼텐셜과 로그 에너지라 한다. $V(K)=\inf_\mu I(\mu)$ 를 Robin 상수(Robin constant)라 하고

$$
\mathrm{cap}(K)=e^{-V(K)}
$$

를 $K$ 의 **로그 용량**이라 한다. 에너지가 유한한 확률측도가 없으면 $V(K)=\infty$, $\mathrm{cap}(K)=0$ 이다. 하한을 달성하는 측도를 **균형 측도(equilibrium measure)** 라 한다.

## 초월 지름

$$
\delta_n(K)=\max\_{z_1,\dots,z_n\in K}\prod\_{i\lt j}\vert z_i-z_j\vert^{2/(n(n-1))}
$$

로 두면 $\delta_n(K)$ 는 $n$ 에 대해 감소한다. 극한 $\tau(K)=\lim_n\delta_n(K)$ 를 **초월 지름**이라 하고, 최댓값을 주는 점들을 Fekete 점(Fekete points)이라 한다.

## Chebyshev 상수

$$
t_n(K)=\min\Bigl\lbrace\max_K\vert p\vert:\ p(z)=z^n+\cdots\Bigr\rbrace
$$

로 두면 $t\_{m+n}\le t_mt_n$ 이므로 $\lim_nt_n(K)^{1/n}$ 이 존재한다. 이 극한을 **Chebyshev 상수**라 한다.

# 성질

## Fekete–Szegő 정리

> **정리.** 콤팩트 집합 $K\subset\mathbb C$ 에 대해 $\mathrm{cap}(K)=\tau(K)=\lim_nt_n(K)^{1/n}$ 이다.[^1]

증명의 요지. Fekete 점 $z_1,\dots,z_n$ 에서 $p(z)=\prod_j(z-z_j)$ 를 잡으면, 점 하나를 $z\in K$ 로 바꿔도 거리의 곱이 커지지 않는다는 조건에서 $\max_K\vert p\vert$ 가 $\delta_n^{\thinspace n}$ 규모로 묶여 Chebyshev 상수가 $\tau$ 이하다. 거꾸로 Vandermonde 행렬식 $\prod\_{i\lt j}(z_i-z_j)$ 의 열 $z_i^k$ 를 차수 $k$ 의 최적 다항식 값으로 바꿔도 행렬식은 같으므로, Hadamard 부등식(Hadamard's inequality)으로 $\delta_n$ 이 $t_k$ 들의 곱으로 묶여 $\tau$ 가 Chebyshev 상수 이하다. Fekete 점마다 질량 $\frac1n$ 씩 둔 측도로 대각선 밖의 에너지를 재면 $-\frac{n-1}{n}\log\delta_n$ 이므로, [약수렴](weak-convergence.md) 극한을 취해 $\tau$ 와 $e^{-V}$ 를 비교한다. $\square$

## 균형 측도

**정리 (Frostman).** $\mathrm{cap}(K)\gt 0$ 이면 균형 측도 $\mu_K$ 가 유일하게 존재하고, $U^{\mu_K}\le V(K)$ 가 평면 전체에서, $U^{\mu_K}=V(K)$ 가 $K$ 에서 용량 $0$ 인 집합을 빼고 성립한다.[^2]

$K$ 의 바깥 성분에서 $g_K(z)=V(K)-U^{\mu_K}(z)$ 는 무한원점에 극을 둔 [Green 함수](greens-function.md)이고, $z\to\infty$ 에서 $g_K(z)=\log\vert z\vert-\log\mathrm{cap}(K)+o(1)$ 이다.

## 예

| $K$ | $\mathrm{cap}(K)$ | 균형 측도 |
| --- | --- | --- |
| 반지름 $r$ 인 원판 또는 원 | $r$ | 원 위의 균등측도 |
| 길이 $L$ 인 선분 | $L/4$ | 양 끝으로 몰린 밀도 $\frac{1}{\pi\sqrt{(b-x)(x-a)}}$ |
| $\lbrack-2,2\rbrack$ | $1$ | 밀도 $\frac{1}{\pi\sqrt{4-x^2}}$ |
| 점 하나, 가산 집합 | $0$ | 없음 |

원판에서 $p(z)=z^n$ 의 최대 절댓값이 $r^n$ 이므로 Chebyshev 상수가 $r$ 이다. $\lbrack-1,1\rbrack$ 의 용량 $\tfrac12$ 를 $x\mapsto\frac{b-a}2x+\frac{a+b}2$ 로 옮기면 $\mathrm{cap}(aK+b)=\vert a\vert\thinspace\mathrm{cap}(K)$ 에서 $L/4$ 가 나온다.

## Bernstein–Walsh 부등식

> **정리.** 차수 $n$ 의 다항식 $p$ 와 $K$ 바깥의 $z$ 에 대해 $\vert p(z)\vert\le\Vert p\Vert_K\thinspace e^{ng_K(z)}$ 이다.

$\frac1n\log\vert p\vert-\frac1n\log\Vert p\Vert_K-g_K$ 가 바깥 성분에서 세분함수이고 무한원점에서 유계이며 경계에서 $0$ 이하이므로, [최대값 원리](maximum-principle.md)로 전체에서 $0$ 이하다. $K=\lbrack-1,1\rbrack$ 이면 $g_K(z)=\log\vert z+\sqrt{z^2-1}\vert$ 이고, 이 부등식은 구간 밖에서 $T_n$ 이 가장 빨리 커진다는 Chebyshev 다항식의 성질과 같다.

# 활용

- **대수적 정수의 분포.** 켤레가 모두 $K$ 에 드는 대수적 정수는 $\mathrm{cap}(K)\lt 1$ 이면 유한 개뿐이다(Fekete). 차수 $n$ 의 그런 대수적 정수의 최소다항식의 판별식은 $0$ 이 아닌 정수이므로 절댓값이 $1$ 이상인데, 판별식의 절댓값은 $\prod\_{i\lt j}\vert\alpha_i-\alpha_j\vert^2\le\delta_n(K)^{n(n-1)}$ 이하이고 $\delta_n(K)\to\mathrm{cap}(K)\lt 1$ 이므로 $n$ 이 유계다. $K$ 가 켤레에 대해 대칭이고 $\mathrm{cap}(K)\ge 1$ 이면 $K$ 의 어느 근방에도 켤레가 모두 그 근방에 드는 대수적 정수가 무한히 많다(Fekete–Szegő).[^3] $\lbrack-2,2\rbrack$ 는 경계의 경우이고 $2\cos(2\pi k/m)$ 들이 무한히 많은 예다.
- **다항식 근사의 속도.** $K$ 위의 함수를 차수 $n$ 의 다항식으로 근사하는 최선 오차가 $e^{-n\rho}$ 규모로 줄어드는 것과 함수가 $g_K\lt\rho$ 인 영역까지 해석적으로 연장되는 것이 동치다([Bernstein–Walsh 정리](bernstein-walsh-theorem.md)). [Clenshaw–Curtis 구적](clenshaw-curtis-quadrature.md)의 수렴 속도에 나오는 타원이 $\lbrack-1,1\rbrack$ 에서 $g_K$ 의 등위선이다.
- **제거가능 집합.** 용량 $0$ 인 콤팩트 집합 밖에서 유계인 조화함수는 그 집합으로 연장된다. 퍼텐셜 이론의 용량 $0$ 집합 정리를 평면에서 쓴 것이다.

[^1]: M. Fekete, "Über die Verteilung der Wurzeln bei gewissen algebraischen Gleichungen mit ganzzahligen Koeffizienten", *Mathematische Zeitschrift* **17** (1923), 228–249. G. Szegő, "Bemerkungen zu einer Arbeit von Herrn M. Fekete", *Mathematische Zeitschrift* **21** (1924), 203–208.
[^2]: Thomas Ransford, *Potential Theory in the Complex Plane*, Cambridge University Press, 1995, 3 장과 5 장.
[^3]: M. Fekete, G. Szegő, "On algebraic equations with integral coefficients whose roots belong to a given point set", *Mathematische Zeitschrift* **63** (1955), 158–172.

# 연관 문서

## 선수지식

- [퍼텐셜 이론](potential-theory.md)
- [Chebyshev 다항식](chebyshev-polynomials.md)

## 더 알아보기

- [Bernstein–Walsh 정리](bernstein-walsh-theorem.md)

#analysis #complex_analysis #number_theory
