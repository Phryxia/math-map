# 초타원곡선

# 개요

**초타원곡선(hyperelliptic curve)** 은 $y^2=f(x)$ 꼴의 식으로 쓰이는 곡선 가운데 종수가 $2$ 이상인 것이다. $y^2=x^5-x$ 에서는 $x$ 하나에 $y$ 가 두 개씩 대응하고, $f$ 의 근 다섯 개와 무한원점에서만 두 값이 하나로 합쳐진다. 이 여섯 점의 개수에서 곡면의 구멍 수인 종수 $2$ 가 나오고, 같은 방식으로 정칙 미분과 자기동형도 식에서 바로 계산한다.

# 직관

[Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)으로 $y^2=f(x)$ 의 종수를 세면, $x$ 로의 사영이 차수 $2$ 이고 분기점이 $r=2\lceil d/2\rceil$ 개여서 $g=r/2-1$ 이다. $f(x)=x^5-x$ 이면 근이 $0,\pm 1,\pm i$ 다섯 개이고 차수가 홀수라 무한원점에서도 분기하므로 $r=6$, $g=2$ 다.

거꾸로 곡선 $X$ 에 차수 $2$ 인 사상 $x:X\to\mathbb P^1$ 이 있으면 $X$ 위 유리형함수의 체는 $\mathbb C(x)$ 의 2 차 확대다. 2 차 확대는 생성원 $w$ 가 $w^2+a(x)w+b(x)=0$ 을 만족하고, $y=w+a/2$ 로 완전제곱을 만들면 $y^2=f(x)$ 가 된다. $f$ 의 제곱 인수를 $y$ 로 옮기면 $f$ 의 근이 서로 다르게 된다. 따라서 차수 $2$ 인 사상을 갖는다는 조건과 $y^2=f(x)$ 로 쓰인다는 조건이 같다.

# 정의

## 두 장의 좌표

$f\in\mathbb C\lbrack x\rbrack$ 가 서로 다른 근 $d$ 개를 갖고 $g=\lceil d/2\rceil-1\ge 2$ 라 하자. 아핀 곡선 $y^2=f(x)$ 와, $u=1/x$, $v=y/x^{g+1}$ 로 둔

$$
v^2=u^{2g+2}f(1/u)
$$

을 $u\ne 0$ 에서 붙인 콤팩트 [Riemann 곡면](riemann-surfaces.md) $X$ 를 초타원곡선이라 한다. 같은 구성에서 $g=1$ 이면 [타원곡선](elliptic-curves.md)이 나온다. 우변은 $u$ 의 다항식이고 근이 서로 다르므로 둘째 장도 매끄럽다. 무한원점 위에는 $d=2g+2$ 이면 점이 둘, $d=2g+1$ 이면 점이 하나 있다. $f(x)=x^5-x$ 이면 $d=5$, $g=2$ 이고, 둘째 장은 $v^2=u^6(u^{-5}-u^{-1})=u-u^5$ 이며 무한원점 위의 점은 $(u,v)=(0,0)$ 하나다.

## 초타원 대합

$\iota(x,y)=(x,-y)$ 는 $X$ 의 자기동형이고 $\iota^2=\mathrm{id}$ 다. 이 $\iota$ 를 **초타원 대합(hyperelliptic involution)** 이라 한다. $\iota$ 의 고정점은 $y=0$ 인 점과, $d$ 가 홀수일 때의 무한원점으로 모두 $2g+2$ 개이고, 이들이 사영 $x$ 의 분기점이다. $X/\langle\iota\rangle\cong\mathbb P^1$ 이다. $y^2=x^5-x$ 에서 $\iota$ 의 고정점은 $x=0,\pm1,\pm i$ 위의 다섯 점과 무한원점으로 $6=2\cdot 2+2$ 개다.

# 성질

## 정칙 미분의 기저

$X$ 위의 정칙 미분 형식의 공간은 다음을 기저로 갖는다.

$$
\omega_k=\frac{x^k\thinspace dx}{y},\qquad k=0,1,\dots,g-1
$$

증명의 요지. $y=0$ 인 점 $(a,0)$ 에서 국소 좌표는 $y$ 이고 $2y\thinspace dy=f'(x)\thinspace dx$ 에서 $dx/y=2\thinspace dy/f'(x)$ 이며 $f'(a)\ne 0$ 이므로 정칙이다. 무한원점 근처에서 $u,v$ 로 고치면 $x^k\thinspace dx/y=-u^{g-1-k}\thinspace du/v$ 이므로 $k\le g-1$ 이면 정칙이다. 개수가 종수 $g$ 와 같고 일차독립이므로 기저다.

$\omega_k$ 의 비 $\omega_k/\omega_0=x^k$ 가 모두 $x$ 의 함수이므로 정준사상(canonical map) $X\to\mathbb P^{g-1}$, $P\mapsto\lbrack\omega_0(P):\cdots:\omega_{g-1}(P)\rbrack$ 은 $x\mapsto\lbrack 1:x:\cdots:x^{g-1}\rbrack$ 을 거친다. 초타원곡선의 정준사상은 차수 $2$ 로 유리 정규곡선(rational normal curve)에 덮이고 매장이 아니다. 초타원이 아닌 곡선에서는 정준사상이 매장이다.

## 종수 2 곡선

종수 $2$ 인 곡선은 전부 초타원곡선이다. 정칙 미분의 공간이 $2$ 차원이므로 두 미분의 비 $\omega_1/\omega_0$ 가 유리형함수이고, 정준인자(canonical divisor)의 차수가 $2g-2=2$ 이므로 이 함수의 극점은 많아야 $2$ 개다. [Riemann–Roch 정리](riemann-roch.md)로 정칙 미분이 공통 영점을 갖지 않음이 증명되어, 이 함수가 차수 정확히 $2$ 인 사상 $X\to\mathbb P^1$ 이다.

## 종수 3 이상

종수 $g\ge 3$ 에서 초타원곡선은 드물다. 초타원곡선은 $\mathbb P^1$ 의 분기점 $2g+2$ 개로 정해지고, $\mathbb P^1$ 의 자기동형군 $\mathrm{PGL}\_2(\mathbb C)$ 가 $3$ 차원이므로 동형류의 족이 $2g-1$ 차원이다. [곡선의 모듈라이 공간](moduli-of-curves.md)은 $3g-3$ 차원이고 $g\ge 3$ 에서 $2g-1\lt 3g-3$ 이다. 종수 $3$ 의 일반적인 곡선은 평면 4 차 곡선이다.

## 자기동형과 Weierstrass 점

종수 $g\ge 2$ 인 초타원곡선에서 차수 $2$ 인 사상 $X\to\mathbb P^1$ 은 $\mathbb P^1$ 의 자기동형을 빼고 하나뿐이고, 따라서 $\iota$ 는 유일하며 자기동형군의 중심에 속한다. 자기동형군을 $\langle\iota\rangle$ 로 나눈 몫은 분기점 $2g+2$ 개를 보존하는 $\mathrm{PGL}\_2(\mathbb C)$ 의 부분군이다.

점 $P$ 에서 극점이 $P$ 에만 있고 위수가 $g$ 이하인 상수 아닌 유리형함수가 있으면 $P$ 를 **Weierstrass 점(Weierstrass point)** 이라 한다. 초타원곡선의 Weierstrass 점은 $\iota$ 의 고정점 $2g+2$ 개와 정확히 같다[^1]. 고정점 $P=(a,0)$ 에서 $1/(x-a)$ 는 $P$ 에서만 위수 $2$ 인 극을 가지므로 Weierstrass 점이다.

# 활용

- [Jacobi 다양체](jacobian-variety.md)와 곡선 암호. 유한체 위 초타원곡선의 Jacobi 다양체의 유리점이 이루는 군을 이산로그 암호에 쓰고, 군의 덧셈은 Cantor 알고리즘(Cantor's algorithm)으로 다항식 쌍을 줄여 계산한다. 위수 계산에 [Kedlaya 알고리즘](kedlaya-algorithm.md)을 쓴다.
- 초타원 적분. $\int dx/\sqrt{f(x)}$ 꼴의 적분은 $\omega_0$ 의 경로 적분이고, 주기 격자와 Abel–Jacobi 사상이 이 적분에서 정의된다.
- 수론적 곡선족. 정수계수 $f$ 를 갖는 $y^2=f(x)$ 의 족에서 L 함수의 영점 통계와 모노드로미를 계산한다.

[^1]: H. M. Farkas, I. Kra, *Riemann Surfaces*, 2nd ed., Springer, 1992, Chapter III §7 — 초타원곡선의 Weierstrass 점과 초타원 대합.

# 연관 문서

## 선수지식

- [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #number_theory #algebraic_topology
