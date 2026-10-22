# Szegő–Weinberger 부등식

# 개요

**Szegő–Weinberger 부등식(Szegő–Weinberger inequality)** 은 부피가 같은 매끄러운 유계 영역 가운데 Neumann 경계조건의 [Laplace 연산자](laplace-operator.md)의 $0$ 이 아닌 첫 고윳값이 가장 큰 것이 공이라는 부등식이다. $\Omega^\ast$ 를 $\Omega$ 와 부피가 같은 공이라 하면

$$
\mu_1(\Omega)\le\mu_1(\Omega^\ast)
$$

이다. Dirichlet 첫 고윳값을 공이 최소로 하는 [Faber–Krahn 부등식](faber-krahn.md)과 방향이 반대다. G. Szegő 가 평면의 단순연결 영역에서[^1], H. Weinberger 가 모든 차원에서 증명했다[^2].

# 직관

Neumann 경계조건의 막은 가장자리가 자유롭게 움직인다. 첫 고윳값 $0$ 은 막 전체가 같이 오르내리는 상수 함수의 것이고, $\mu_1$ 은 평균이 $0$ 인 함수에 걸친 Rayleigh 몫 $\int\Vert\nabla u\Vert^2/\int u^2$ 의 최솟값이다.

넓이가 $\pi$ 인 원판, 곧 반지름 $1$ 인 원판에서 $\mu_1$ 의 고유함수는 $J_1(p r)\cos\theta$ 이고 $p\approx 1.841$ 은 [Bessel 함수](bessel-functions.md) $J_1$ 의 도함수의 첫 영점이다. 그래서 $\mu_1=p^2\approx 3.39$ 다. 같은 넓이의 정사각형은 한 변이 $\sqrt\pi$ 이고 $\cos(\pi x/\sqrt\pi)$ 가 고유함수라 $\mu_1=\pi\approx 3.14$ 로 원판보다 작다. 영역이 한 방향으로 길수록 그 방향으로 천천히 변하는 함수의 Rayleigh 몫이 작아지므로 $\mu_1$ 이 작다.

# 정의

$\Omega\subset\mathbb R^n$ 을 경계가 매끄러운 유계 연결 열린집합이라 한다. Neumann 고윳값은 $H^1(\Omega)$ 위의 이차형식 $\int_\Omega\Vert\nabla u\Vert^2$ 의 고윳값이고 $0=\mu_0\lt\mu_1\le\mu_2\le\cdots$ 로 적는다.

$$
\mu_1(\Omega)=\min\Bigl\lbrace\frac{\int_\Omega\Vert\nabla u\Vert^2}{\int_\Omega u^2}:u\in H^1(\Omega)\setminus\lbrace 0\rbrace,\ \int_\Omega u=0\Bigr\rbrace
$$

반지름 $R$ 인 공에서 $\mu_1$ 의 고유공간은 $n$ 차원이고 $g(r)x_i/r$ $(i=1,\dots,n)$ 로 생성된다. $g$ 는 $g(0)=0$, $g^\prime(R)=0$ 인 반지름 방향 함수다.

# 성질

## Weinberger 의 증명

$g$ 를 $\Omega^\ast$ 의 반지름 $R$ 까지는 공의 반지름 방향 함수로, $r\gt R$ 에서는 상수 $g(R)$ 로 둔다. $P_i(x)=g(\vert x\vert)x_i/\vert x\vert$ 라 한다.

1. 원점을 옮겨 모든 $i$ 에서 $\int_\Omega P_i=0$ 이 되게 한다. 원점의 위치마다 벡터 $\bigl(\int_\Omega P_i\bigr)\_i$ 를 대응시키는 사상에 [Brouwer 고정점 정리](brouwer-fixed-point.md)를 쓰면 이런 점이 존재한다.
2. 각 $P_i$ 가 $\mu_1(\Omega)$ 의 시험함수이므로 $\mu_1(\Omega)\int_\Omega P_i^2\le\int_\Omega\Vert\nabla P_i\Vert^2$ 다. $i$ 에 대해 더하면
   $$
   \mu_1(\Omega)\int_\Omega g^2\le\int_\Omega\Bigl(g^{\prime 2}+\frac{n-1}{r^2}g^2\Bigr)
   $$
   이다.
3. $g^2$ 는 $r$ 에 대해 증가하고 $B(r)=g^{\prime 2}+(n-1)g^2/r^2$ 은 감소한다. $\Omega$ 의 부피를 원점 가까이로 옮겨 $\Omega^\ast$ 로 바꾸면 왼쪽 적분은 줄고 오른쪽 적분은 는다. $\Omega^\ast$ 에서는 두 적분의 비가 $\mu_1(\Omega^\ast)$ 이므로 부등식이 나온다.

## 구면의 Hersch 부등식

2 차원 구면 위의 [Riemann 계량](riemannian-metrics.md) $g$ 에서는 $\mu_1(g)\cdot\mathrm{area}(g)\le 8\pi$ 이고, 등호는 둥근 계량에서 성립한다. 이것이 Hersch 부등식(Hersch's inequality)이다[^3]. 증명은 Weinberger 의 증명과 같은 꼴이다. [등각사상](conformal-mapping.md)으로 무게중심을 원점에 맞춘 뒤, 좌표함수 셋을 시험함수로 쓴다.

# 활용

- [열방정식](heat-equation.md)의 Neumann 문제에서 해는 $e^{-\mu_1t}$ 의 속도로 평균값에 간다. 부피가 같은 영역 가운데 공에서 이 속도가 가장 빠르다.
- [Cheeger 부등식](cheeger-inequality.md)이 $\mu_1$ 의 하한을 영역의 잘록한 정도로 준다면, 이 부등식은 $\mu_1$ 의 상한을 부피로 준다.

[^1]: G. Szegő, "Inequalities for certain eigenvalues of a membrane of given area", J. Rational Mech. Anal. 3 (1954), 343–356.
[^2]: H. F. Weinberger, "An isoperimetric inequality for the N-dimensional free membrane problem", J. Rational Mech. Anal. 5 (1956), 633–636.
[^3]: J. Hersch, "Quatre propriétés isopérimétriques de membranes sphériques homogènes", C. R. Acad. Sci. Paris Sér. A-B 270 (1970), A1645–A1648.

# 연관 문서

## 선수지식

- [Faber–Krahn 부등식](faber-krahn.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #optimization #theorem
