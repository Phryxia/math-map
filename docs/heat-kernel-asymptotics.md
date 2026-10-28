# 열핵 전개

# 개요

**열핵 전개(heat kernel asymptotic expansion)** 는 곡면 위의 한 점에 열을 주었을 때 아주 짧은 시간 동안 그 점에 남는 열의 밀도를 시간의 거듭제곱으로 전개한 식이다. 평면에서는 시간 $t$ 뒤 처음 점의 열 밀도가 정확히 $1/(4\pi t)$ 이지만, 휘어진 곡면에서는 이 값에 $1+Rt/6+\cdots$ 가 곱해지고 $R$ 은 그 점의 곡률에서 정해지는 수다. 열핵 전개의 계수가 곡률로 정해지므로, 곡면의 고윳값 목록만으로 넓이와 곡률의 적분을 계산한다.

# 직관

열핵 전개는 닫힌 Riemann 다양체의 열핵을 짧은 시간 $t\to 0^+$ 에서 $t$ 의 거듭제곱으로 전개한 식이다. 대각선에서

$$
p_t(x,x)\sim(4\pi t)^{-n/2}\bigl(a_0(x)+a_1(x)t+a_2(x)t^2+\cdots\bigr)
$$

이고 계수 $a_j$ 는 그 점의 곡률과 그 미분으로 정해진다. $a_0=1$, $a_1=R/6$ 이고 $R$ 은 스칼라 곡률이다. 대각선에서 적분한 열 대각합의 계수는 고윳값으로 정해지므로, 고윳값의 목록이 부피와 곡률 적분을 정한다. S. Minakshisundaram 과 Å. Pleijel 이 전개를 만들었다[^1].

길이 $2\pi$ 인 원 $\mathbb R/2\pi\mathbb Z$ 에서 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)의 고윳값은 $m^2$ $(m\in\mathbb Z)$ 이고 고유함수는 $e^{imx}/\sqrt{2\pi}$ 다. 열 대각합은 $\theta(t)=\sum_me^{-tm^2}$ 이고, [Poisson 합 공식](poisson-summation.md)으로 바꾸면

$$
\sum_{m\in\mathbb Z}e^{-tm^2}=\sqrt{\frac{\pi}{t}}\sum_{k\in\mathbb Z}e^{-\pi^2k^2/t}
$$

이다. $k=0$ 항 $\sqrt{\pi/t}$ 는 원의 길이 $2\pi$ 에 $(4\pi t)^{-1/2}$ 를 곱한 것이다. $k\ne 0$ 항은 $e^{-(2\pi k)^2/4t}$ 이고, 원을 $k$ 번 도는 닫힌 측지선의 길이 $2\pi\vert k\vert$ 에서 나온다. 이 항들은 $t\to 0$ 에서 $t$ 의 어떤 거듭제곱보다 빨리 작아지므로, 짧은 시간의 전개에 남는 것은 길이뿐이다.

원은 곡률이 없어서 $t$ 의 거듭제곱 보정이 없다. 단위구면 $S^2$ 에서는 고윳값 $\ell(\ell+1)$ 이 $2\ell+1$ 번 나오고

$$
\theta(t)=\sum_{\ell\ge 0}(2\ell+1)e^{-t\ell(\ell+1)}=\frac1t+\frac13+O(t)
$$

이다. 첫 항은 넓이 $4\pi$ 를 $4\pi t$ 로 나눈 것이고, 상수 $1/3$ 이 곡률에서 나온 보정이다. 곡률이 $1$ 인 구면의 스칼라 곡률은 $R=2$ 이고, $\frac{1}{4\pi t}\int_{S^2}\frac R6\thinspace t\thinspace dA=\frac13$ 이다.

# 정의

## 열핵

$(M,g)$ 를 닫힌 $n$ 차원 다양체라 하고, $-\Delta_g$ 의 고윳값을 $\lambda_k$, 정규직교 고유함수를 $\varphi_k$ 라 한다.

$$
p_t(x,y)=\sum_ke^{-t\lambda_k}\varphi_k(x)\varphi_k(y)\qquad(t\gt 0)
$$

를 $M$ 의 **열핵(heat kernel)** 이라 한다. $u(x,t)=\int_Mp_t(x,y)f(y)\thinspace dy$ 는 [열방정식](heat-equation.md) $\partial_tu=\Delta_gu$ 의 해이고 $t\to 0^+$ 에서 $f$ 로 간다. $\mathbb R^n$ 에서 $\kappa=1$ 인 열핵 $(4\pi t)^{-n/2}e^{-\Vert x-y\Vert^2/4t}$ 가 같은 역할을 한다.

## 열 대각합

$$
\theta(t)=\int_Mp_t(x,x)\thinspace dx=\sum_ke^{-t\lambda_k}
$$

를 **열 대각합(heat trace)** 이라 한다. 열핵 전개를 적분하면

$$
\theta(t)\sim(4\pi t)^{-n/2}\sum_{j\ge 0}A_jt^j,\qquad A_j=\int_Ma_j(x)\thinspace dx
$$

이다. 좌변이 고윳값만으로 정해지므로 $A_j$ 는 **스펙트럼 불변량(spectral invariant)** 이다.

# 성질

## 처음 세 계수

$$
A_0=\mathrm{vol}(M),\qquad A_1=\frac16\int_MR\thinspace dx,\qquad A_2=\frac{1}{360}\int_M\bigl(2\Vert\mathrm{Rm}\Vert^2-2\Vert\mathrm{Ric}\Vert^2+5R^2\bigr)dx
$$

이다. $\mathrm{Rm}$ 은 Riemann 곡률 텐서, $\mathrm{Ric}$ 는 Ricci 곡률이다. 이 식은 H. P. McKean 과 I. M. Singer 의 논문에 있다[^2].

## 매개함수 구성

$d(x,y)$ 를 측지 거리라 하고

$$
H_N(t,x,y)=(4\pi t)^{-n/2}e^{-d(x,y)^2/4t}\sum_{j=0}^Nu_j(x,y)t^j
$$

로 둔다. $(\partial_t-\Delta_g)H_N$ 을 $t$ 의 거듭제곱으로 정리하면 $u_j$ 가 만족할 [상미분방정식](ordinary-differential-equations.md)이 측지선을 따라 차례로 나오고, 이것을 풀면 $(\partial_t-\Delta_g)H_N=O(t^{N-n/2})$ 다. 이 오차를 Duhamel 공식으로 되풀이해 고치면 참 열핵이 나오고, $p_t-H_N$ 은 $t^{N+1-n/2}$ 규모다. 대각선에서 $d=0$ 이므로 $a_j(x)=u_j(x,x)$ 다.

## 곡면의 Euler 지표

$n=2$ 이면 $R=2K$ 이고 [Gauss–Bonnet 정리](gauss-bonnet.md)로 $\int_MK\thinspace dA=2\pi\chi(M)$ 이다. 그래서

$$
\theta(t)=\frac{\mathrm{area}(M)}{4\pi t}+\frac{\chi(M)}{6}+O(t)
$$

이고, 닫힌 곡면의 고윳값 목록이 [Euler 지표](euler-characteristic.md), 곧 종수를 정한다. 단위구면에서 $\chi=2$ 이므로 상수항은 직관 절의 $1/3$ 이다.

## 경계가 있는 평면 영역

경계가 매끄럽고 구멍이 $h$ 개인 평면 영역 $\Omega$ 에서 Dirichlet 열 대각합은

$$
\theta(t)=\frac{\vert\Omega\vert}{4\pi t}-\frac{\vert\partial\Omega\vert}{8\sqrt{\pi t}}+\frac{1-h}{6}+o(1)
$$

이다[^2]. 그래서 Dirichlet 고윳값이 넓이, 둘레, 구멍의 개수를 정한다.

## Varadhan 공식

$x\ne y$ 에서

$$
\lim_{t\to 0^+}\bigl(-4t\log p_t(x,y)\bigr)=d(x,y)^2
$$

이다. 이것이 Varadhan 공식(Varadhan's formula)이다[^3]. 짧은 시간에 $p_t(x,y)$ 가 $0$ 으로 가는 지수적 속도가 측지 거리의 제곱으로 정해진다.

# 활용

- [Weyl 법칙](weyl-law.md). $\theta(t)\sim A_0(4\pi t)^{-n/2}$ 에 [Tauber 정리](tauberian-theorems.md)를 쓰면 고윳값 세기 함수의 주항이 나온다.
- [제타 정규화 행렬식](zeta-regularized-determinant.md). 스펙트럼 zeta 함수를 $\theta(t)$ 의 [Mellin 변환](mellin-transform.md)으로 쓰면, 전개의 각 항이 $\Gamma(s)\zeta(s)$ 에 $s=n/2-j$ 의 극을 준다. $s=0$ 의 극은 $\Gamma(s)$ 의 극이 상쇄하므로 $\zeta$ 는 $s=0$ 에서 정칙이고 $\zeta^\prime(0)$ 이 정의된다.
- [지표 정리](index-theorem.md)의 열핵 증명. 짝수 차와 홀수 차 형식 위의 열 대각합의 차는 $t$ 에 무관하고, $t\to 0$ 의 전개에서 특성류의 적분이 나온다.

[^1]: S. Minakshisundaram, Å. Pleijel, "Some properties of the eigenfunctions of the Laplace-operator on Riemannian manifolds", Canad. J. Math. 1 (1949), 242–256.
[^2]: H. P. McKean, I. M. Singer, "Curvature and the eigenvalues of the Laplacian", J. Differential Geom. 1 (1967), 43–69.
[^3]: S. R. S. Varadhan, "On the behavior of the fundamental solution of the heat equation with variable coefficients", Comm. Pure Appl. Math. 20 (1967), 431–455.

# 연관 문서

## 선수지식

- [열방정식](heat-equation.md)
- [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)

## 더 알아보기

- [제타 정규화 행렬식](zeta-regularized-determinant.md)
- [등스펙트럼 다양체](isospectral-manifolds.md)

#differential_geometry #analysis #probability
