# Bernstein–Walsh 정리

# 개요

**Bernstein–Walsh 정리(Bernstein–Walsh theorem)** 는 함수를 다항식으로 근사할 때 오차가 줄어드는 빠르기가 그 함수를 복소평면으로 얼마나 멀리 연장할 수 있는지로 정해진다는 정리다. $f(x)=1/(1+25x^2)$ 은 $\lbrack -1,1\rbrack$ 에서 매끄럽지만 복소평면의 $x=\pm i/5$ 에서 발산하고, 이 때문에 차수 $n$ 의 다항식으로 근사한 오차가 대략 $1.22^{-n}$ 보다 빨리 줄지 않는다. 정리는 근사 오차가 $R^{-n}$ 규모로 줄어드는 것과 함수가 [Green 함수](greens-function.md)의 등위선 $g_K=\log R$ 안쪽까지 정칙으로 연장되는 것이 동치임을 보여, 근사의 빠르기를 특이점의 위치로 계산하게 한다.

# 직관

Bernstein–Walsh 정리는 콤팩트 집합 $K$ 위의 함수를 차수 $n$ 의 다항식으로 근사하는 최선 오차가 $R^{-n}$ 규모로 줄어드는 것과, 그 함수가 $K$ 의 Green 함수의 등위선 $g_K=\log R$ 안쪽까지 정칙함수로 연장되는 것이 동치라는 정리다. S. N. Bernstein 이 구간에 대해 1912 년에 증명했고, J. L. Walsh 가 일반 콤팩트 집합으로 넓혔다[^1].

등위선은 [로그 용량](logarithmic-capacity.md) 문서의 Green 함수 $g_K$ 로 정해지고, 증명의 한쪽은 그 문서의 Bernstein–Walsh 부등식이다.

$f(x)=1/(1+25x^2)$ 을 $\lbrack-1,1\rbrack$ 에서 다항식으로 근사한다. $0$ 에서의 [멱급수](power-series.md)는 $\sum_k(-25x^2)^k$ 이고 $\vert x\vert\lt 1/5$ 에서만 수렴하므로, 부분합으로는 $\lbrack-1,1\rbrack$ 전체를 근사하지 못한다. 수렴 반지름을 정한 것은 복소평면의 극 $\pm i/5$ 다.

[Chebyshev 다항식](chebyshev-polynomials.md)의 극값점에서 보간하면 차수 $n$ 의 보간 다항식이 $\lbrack-1,1\rbrack$ 전체에서 $f$ 로 균등수렴하고, 오차는 대략 $1.2198^{-n}$ 비율로 줄어든다. $n=20$ 이면 이 비율의 거듭제곱이 $0.019$, $n=50$ 이면 $0.00005$ 다.

비율 $1.2198$ 은 극 $i/5$ 에서 나온다. 초점이 $\pm 1$ 인 타원 가운데 $i/5$ 를 지나는 것의 두 반축의 합이 $(1+\sqrt{26})/5\approx 1.2198$ 이다. 원판 대신 이 타원이 수렴 영역이고, $f$ 는 타원 안에서 정칙이며 타원 위에 극이 있다.

# 정의

## Green 함수의 등위선

$K\subset\mathbb C$ 가 콤팩트이고 여집합이 연결이며, $\mathrm{cap}(K)\gt 0$ 이고 Green 함수 $g_K$ 가 $K$ 위에서 $0$ 으로 연속이라 한다. $R\gt 1$ 에 대해

$$
K_R=K\cup\lbrace z\notin K:g_K(z)\lt\log R\rbrace
$$

로 둔다. $K=\lbrack-1,1\rbrack$ 이면 $g_K(z)=\log\vert z+\sqrt{z^2-1}\vert$ 이고, $K_R$ 은 초점이 $\pm 1$ 이고 두 반축의 합이 $R$ 인 **Bernstein 타원(Bernstein ellipse)** 의 내부다. $K$ 가 원판 $\vert z\vert\le 1$ 이면 $K_R$ 은 원판 $\vert z\vert\lt R$ 이다.

## 최선 근사 오차

$K$ 위의 연속함수 $f$ 에 대해

$$
E_n(f)=\min_{\deg p\le n}\Vert f-p\Vert_K
$$

를 차수 $n$ 의 최선 근사 오차라 한다.

# 성질

## Bernstein–Walsh 정리

정리. $f$ 가 $K$ 위에서 연속이고 $R\gt 1$ 이면, $\limsup_{n\to\infty}E_n(f)^{1/n}\le 1/R$ 인 것과 $f$ 가 $K_R$ 에서 정칙인 함수로 연장되는 것이 동치다[^1][^2].

$f$ 가 연장되는 $K_R$ 가운데 가장 큰 $R$ 이 $\limsup E_n(f)^{1/n}=1/R$ 을 준다.

증명의 요지(오른쪽에서 왼쪽). $1\lt r\lt R$ 을 잡는다. 등위선 $\Gamma_r=\lbrace g_K=\log r\rbrace$ 위의 Cauchy 적분으로 $f$ 를 쓰고, 핵 $1/(w-z)$ 를 Fekete 점에서 보간한 다항식으로 바꾼다. 보간 오차는 $\vert\omega_n(z)/\omega_n(w)\vert$ 꼴이고, Fekete 점의 다항식 $\omega_n$ 이 $K$ 위에서 $\mathrm{cap}(K)^n$ 규모, $\Gamma_r$ 위에서 $(r\thinspace\mathrm{cap}(K))^n$ 규모이므로 오차가 $r^{-n}$ 규모다.

증명의 요지(왼쪽에서 오른쪽). 최선 근사 다항식 $p_n$ 에 대해 $\Vert p_{n+1}-p_n\Vert_K\le 2E_n(f)$ 다. 로그 용량 문서의 Bernstein–Walsh 부등식 $\vert p(z)\vert\le\Vert p\Vert_K\thinspace e^{ng_K(z)}$ 를 $p_{n+1}-p_n$ 에 쓰면 $K_\rho$ 위에서 $\vert p_{n+1}-p_n\vert\le 2E_n(f)\rho^{n+1}$ 이다. $\rho\lt R$ 이면 이 값이 기하급수로 줄어 $p_0+\sum_n(p_{n+1}-p_n)$ 이 $K_\rho$ 에서 균등수렴하고, 극한이 $f$ 의 정칙 연장이다.

## 구간에서의 오차 상한

$K=\lbrack-1,1\rbrack$ 이고 $f$ 가 Bernstein 타원 $K_\rho$ 안에서 정칙이며 $\vert f\vert\le M$ 이면, Chebyshev 전개 $f=\sum_k a_kT_k$ 의 계수가 $\vert a_k\vert\le 2M\rho^{-k}$ 를 만족한다[^3]. 그래서 차수 $n$ 에서 자른 다항식의 오차는 $2M\rho^{-n}/(\rho-1)$ 이하이고, Chebyshev 극값점의 보간 다항식의 오차는 $4M\rho^{-n}/(\rho-1)$ 이하다.

계수의 상한은 $x=\cos\theta$, $z=e^{i\theta}$ 로 바꾸어 $a_k$ 를 단위원 위의 적분으로 쓰고, 적분 경로를 반지름 $\rho$ 의 원으로 옮겨서 얻는다. 이 치환에서 $\lbrack-1,1\rbrack$ 의 Bernstein 타원은 원환 $\rho^{-1}\lt\vert z\vert\lt\rho$ 에 대응한다.

# 활용

- [Clenshaw–Curtis 구적](clenshaw-curtis-quadrature.md)의 오차가 피적분함수가 정칙인 Bernstein 타원의 크기로 지수적으로 줄어드는 것이 구간에서의 오차 상한에서 나온다.
- [Gauss 구적](gaussian-quadrature.md)도 같은 함수에서 오차가 $\rho^{-2n}$ 규모로 줄어든다. Gauss 구적이 차수 $2n+1$ 까지 정확하므로 최선 근사 오차 $E_{2n+1}(f)$ 로 오차가 막힌다.
- 다항식 근사의 수렴 속도에서 함수의 특이점 위치를 읽는다. 최선 근사 오차가 $R^{-n}$ 비율로 줄어들면 $f$ 의 가장 가까운 특이점이 등위선 $g_K=\log R$ 위에 있다.

[^1]: J. L. Walsh, *Interpolation and Approximation by Rational Functions in the Complex Domain*, AMS Colloquium Publications 20, 1935.
[^2]: Thomas Ransford, *Potential Theory in the Complex Plane*, Cambridge University Press, 1995, 6 장.
[^3]: Lloyd N. Trefethen, *Approximation Theory and Approximation Practice*, SIAM, 2013, 8 장.

# 연관 문서

## 선수지식

- [로그 용량](logarithmic-capacity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #complex_analysis
