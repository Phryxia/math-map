# Poincaré 부등식

# 개요

**Poincaré 부등식(Poincaré inequality)** 은 경계에서 $0$ 이거나 평균이 $0$ 인 함수의 크기를 기울기의 크기로 누르는 부등식이다. 정사각형 틀에 가장자리를 고정한 고무막을 생각한다. 막의 가운데를 높이 들어 올리려면 가장자리에서 가운데까지 어딘가가 가파르게 올라가야 한다. 이 부등식은 높이의 제곱 적분이 기울기의 제곱 적분의 상수배를 넘지 않음을 보이고, 그 상수가 틀의 모양에서 정해진다.

# 직관

한 변이 $\pi$ 인 정사각형 $Q=(0,\pi)^2$ 에서 가장자리가 $0$ 인 함수 $u$ 를 놓고, 비 $\int_Q u^2/\int_Q\vert\nabla u\vert^2$ 가 얼마나 커질 수 있는지 묻는다. $u=\sin x\sin y$ 를 넣으면 $\int_Q u^2=(\pi/2)^2=\pi^2/4$ 다. 기울기는 $(\cos x\sin y,\ \sin x\cos y)$ 이고 두 성분의 제곱 적분이 각각 $\pi^2/4$ 이므로 $\int_Q\vert\nabla u\vert^2=\pi^2/2$ 다. 비는 $1/2$ 이다.

$u=\sin mx\sin ny$ 를 넣으면 $\int_Q u^2$ 는 그대로 $\pi^2/4$ 이고, 기울기의 성분에 $m$ 과 $n$ 이 곱해지므로 $\int_Q\vert\nabla u\vert^2=(m^2+n^2)\pi^2/4$ 다. 비는 $1/(m^2+n^2)$ 이다. 막이 빨리 출렁일수록 기울기가 커져 비가 작아지고, 가장 느린 출렁임은 $m=n=1$ 이다.

가장자리가 $0$ 인 함수는 $u=\sum b_{mn}\sin mx\sin ny$ 로 쓴다. 서로 다른 $(m,n)$ 의 항은 곱의 적분이 $0$ 이므로 $\int_Q u^2=\frac{\pi^2}{4}\sum b_{mn}^2$ 이고 $\int_Q\vert\nabla u\vert^2=\frac{\pi^2}{4}\sum(m^2+n^2)b_{mn}^2$ 이다. $m,n\ge 1$ 이면 $m^2+n^2\ge 2$ 이므로 항마다 비교해 다음을 얻는다.

$$
\int_Q u^2\le\frac12\int_Q\vert\nabla u\vert^2
$$

가장자리 조건을 빼면 이 부등식이 깨진다. 상수함수 $u=1$ 은 기울기가 $0$ 이고 $\int_Q u^2=\pi^2$ 이다. 가장자리를 $0$ 으로 묶거나 평균을 $0$ 으로 묶는 것이 상수함수를 막는다. 일차원 구간에서 같은 계산을 한 것이 [Wirtinger 부등식](wirtinger-inequality.md)이다.

# 정의

## Dirichlet 판본

$U\subset\mathbb R^n$ 이 유계 열린집합이고 $1\le p\lt\infty$ 라 한다. **Poincaré 상수(Poincaré constant)** $C_P(U,p)$ 는 모든 $u\in W_0^{1,p}(U)$ 에 대해

$$
\Vert u\Vert\_{L^p(U)}\le C\thinspace\Vert\nabla u\Vert\_{L^p(U)}
$$

가 성립하는 $C$ 가운데 가장 작은 것이다. $W_0^{1,p}(U)$ 는 [Sobolev 공간](sobolev-spaces.md)에서 경계값이 $0$ 인 함수들의 공간이다. 이 부등식을 Dirichlet 경계조건의 Poincaré 부등식이라 한다. 직관 절의 정사각형에서는 $C_P(Q,2)^2=1/2$ 이다.

## 평균 판본

$U$ 가 유계이고 연결된 열린집합이며 경계가 Lipschitz 라 한다. $u\in W^{1,p}(U)$ 의 평균을 $u_U=\frac{1}{\vert U\vert}\int_U u$ 라 쓴다. **Poincaré–Wirtinger 부등식(Poincaré–Wirtinger inequality)** 은 다음이다.

$$
\Vert u-u_U\Vert\_{L^p(U)}\le C\thinspace\Vert\nabla u\Vert\_{L^p(U)}
$$

경계값에 조건이 없고, 평균을 빼서 상수함수를 막는다. 정사각형 $Q$ 에서 평균이 $0$ 인 함수는 $\sum a_{mn}\cos mx\cos ny$ 에서 $a_{00}=0$ 인 것이고, 남은 항의 $m^2+n^2$ 은 $1$ 이상이므로 $p=2$ 의 최적 상수는 $1$ 이다. 등호는 $u=\cos x$ 에서 성립한다.

## 첫 고윳값

유계 열린집합 $U$ 의 **Dirichlet 첫 고윳값(first Dirichlet eigenvalue)** 은 [Rayleigh 몫](rayleigh-quotient.md)의 하한이다.

$$
\lambda_1(U)=\inf_{u\in W_0^{1,2}(U)\setminus\lbrace 0\rbrace}\frac{\int_U\vert\nabla u\vert^2}{\int_U u^2}
$$

평균이 $0$ 인 $u\in W^{1,2}(U)$ 에서 같은 하한을 잡은 것을 **Neumann 첫 양의 고윳값(first nonzero Neumann eigenvalue)** $\mu_1(U)$ 라 한다. 정사각형 $Q$ 에서는 $\lambda_1(Q)=2$, $\mu_1(Q)=1$ 이다.

# 성질

## 최적 상수와 첫 고윳값

$p=2$ 의 두 최적 상수는 첫 고윳값의 역수의 제곱근이다.

$$
C_P(U,2)^2=\frac{1}{\lambda_1(U)}
$$

평균 판본의 최적 상수의 제곱은 $1/\mu_1(U)$ 다. 정의에서 바로 나오는 등식이다. 하한이 최솟값으로 달성되는 것은 Rellich–Kondrachov 정리(Rellich–Kondrachov theorem)가 최소화열에서 $L^2$ 수렴 부분열을 주기 때문이고, 최소점 $u$ 는 약한 의미에서 $-\Delta u=\lambda_1 u$ 를 만족한다. 정사각형에서 최소점은 $\sin x\sin y$ 다.

## 폭으로 쓴 상수

$U$ 가 두 평행한 초평면 사이 $\lbrace 0\lt x_1\lt d\rbrace$ 에 들어 있으면 $C_P(U,2)\le d/\pi$ 다[^1].

증명의 요지. $u\in C_c^\infty(U)$ 를 $U$ 밖에서 $0$ 으로 늘이고, $x_1$ 이외의 좌표를 고정한 선분마다 [Wirtinger 부등식](wirtinger-inequality.md)의 Dirichlet 판본 $\int_0^d u^2dx_1\le(d/\pi)^2\int_0^d(\partial_1u)^2dx_1$ 을 쓴다. 나머지 좌표로 적분하고 $(\partial_1u)^2\le\vert\nabla u\vert^2$ 를 쓰면 된다. $C_c^\infty(U)$ 는 $W_0^{1,2}(U)$ 에서 조밀하므로 부등식이 $W_0^{1,2}(U)$ 전체로 옮겨진다.

정사각형 $Q$ 는 $d=\pi$ 이므로 이 상한은 $C_P(Q,2)^2\le 1$ 이고 실제 값은 $1/2$ 이다. 유계성은 쓰이지 않으므로 한 방향의 폭만 유한하면 Dirichlet 판본이 성립한다.

## 크기에 대한 변화

$U$ 를 $t\gt 0$ 배로 늘린 $tU$ 에서 $u_t(x)=u(x/t)$ 를 쓰면 $C_P(tU,p)=t\thinspace C_P(U,p)$ 다. 전체 공간 $\mathbb R^n$ 에서는 상수가 없다. 고정한 $\varphi\in C_c^\infty(\mathbb R^n)$ 로 $\varphi(x/R)$ 를 넣으면 $\int u^2$ 는 $R^n$ 에, $\int\vert\nabla u\vert^2$ 는 $R^{n-2}$ 에 비례하므로 비가 $R^2$ 에 비례해 커진다.

## 연결성

평균 판본에는 연결성이 필요하다. $U$ 가 겹치지 않는 두 원판 $D_1,D_2$ 의 합집합이고 넓이가 같으면, $D_1$ 에서 $1$, $D_2$ 에서 $-1$ 인 함수는 평균이 $0$ 이고 기울기가 $0$ 이다. 이때 $\mu_1(U)$ 를 정의하는 하한이 $0$ 이므로 평균 판본을 만족하는 상수가 없다.

## 볼록 영역

$U$ 가 지름 $d$ 인 유계 볼록 열린집합이면 $\mu_1(U)\ge\pi^2/d^2$ 이다. 이것이 **Payne–Weinberger 부등식(Payne–Weinberger inequality)** 이고, 상수 $\pi^2/d^2$ 는 가늘고 긴 직사각형에서 극한으로 달성된다[^2]. 정사각형 $Q$ 의 지름은 $\sqrt2\pi$ 이므로 하한은 $1/2$ 이고 실제 값은 $1$ 이다.

## 부피로 쓴 상수

부피가 같은 유계 열린집합 가운데 $\lambda_1$ 이 가장 작은 것은 공이다. 이것이 [Faber–Krahn 부등식](faber-krahn.md)이고, Dirichlet 판본의 $C_P(U,2)$ 는 부피가 같으면 공에서 가장 크다. 평균 판본에서는 [Szegő–Weinberger 부등식](szego-weinberger.md)이 공에서 $\mu_1$ 이 가장 크다는 것을 준다.

## Gauss 측도의 Poincaré 부등식

$\mathbb R^n$ 의 표준 정규분포 $\gamma_n$ 에서 매끄러운 $f$ 가 $\int\vert\nabla f\vert^2d\gamma_n\lt\infty$ 를 만족하면 다음이 성립한다[^3].

$$
\int f^2d\gamma_n-\Bigl(\int f\thinspace d\gamma_n\Bigr)^2\le\int\vert\nabla f\vert^2d\gamma_n
$$

상수 $1$ 은 차원 $n$ 에 의존하지 않고, $f(x)=x_1$ 에서 양변이 모두 $1$ 이 되어 등호가 성립한다. 증명은 $n=1$ 에서 $f$ 를 $\gamma_1$ 에 대해 정규직교인 Hermite 다항식(Hermite polynomial) $h_k$ 로 전개하는 것이다. $h_k'=\sqrt k\thinspace h_{k-1}$ 이므로 분산 쪽 계수에 $k\ge 1$ 이 곱해진 것이 기울기 쪽이다. 직관 절의 사인 전개와 같은 계산이다.

## 이산 판본

$\lbrace -1,1\rbrace^n$ 위의 함수 $f$ 에 대해 분산은 좌표마다의 영향력(influence)의 합 이하다. 이 부등식이 [Kahn–Kalai–Linial 정리](kkl-theorem.md)의 출발점이다. 유한 [Markov 연쇄](markov-chains.md)에서는 정상분포 $\pi$ 에 대한 분산이 Dirichlet 형식(Dirichlet form)을 스펙트럼 간격(spectral gap) $\gamma$ 로 나눈 값 이하라는 부등식이 같은 꼴이고, $1/\gamma$ 가 [혼합 시간](mixing-time.md)의 상한에 들어간다.

# 활용

- [Lax–Milgram 정리](lax-milgram.md)로 [Dirichlet 문제](dirichlet-problem.md) $-\Delta u=f$ 를 풀 때, 쌍선형형식 $\int\nabla u\cdot\nabla v$ 의 강제성(coercivity)을 이 부등식으로 확인한다. Dirichlet 판본이 $\Vert\nabla u\Vert\_{L^2}$ 를 $W_0^{1,2}(U)$ 의 노름과 동치인 노름으로 만든다.
- [변분법의 직접법](direct-method.md)에서 경계값을 고정한 Dirichlet 에너지의 최소화열이 $W^{1,2}(U)$ 에서 유계라는 것을 이 부등식으로 보인다.
- [열방정식](heat-equation.md) $u_t=\Delta u$ 의 경계값 $0$ 인 해는 $\frac{d}{dt}\int u^2=-2\int\vert\nabla u\vert^2\le-2\lambda_1\int u^2$ 를 만족하므로 $\Vert u(t)\Vert\_{L^2}\le e^{-\lambda_1t}\Vert u(0)\Vert\_{L^2}$ 다. [Navier–Stokes 방정식](navier-stokes-equations.md)에서 바깥 힘이 없을 때 운동 에너지가 지수적으로 줄어드는 것도 같은 계산이다.
- [Stokes 방정식](stokes-equations.md)의 해의 존재 증명에서 속도장 공간의 노름을 기울기의 $L^2$ 노름으로 바꿀 때 쓴다.
- Gauss 측도의 판본은 정규분포를 따르는 확률변수의 함수의 분산을 기울기로 누르고, 이 분산 상한에 Chebyshev 부등식을 쓰면 꼬리 확률의 상한이 나온다. [집중부등식](concentration-inequalities.md)이 같은 함수에 지수 꼬리를 준다.

[^1]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 5.6 절과 5.8 절.
[^2]: L. E. Payne, H. F. Weinberger, "An optimal Poincaré inequality for convex domains", *Archive for Rational Mechanics and Analysis* 5 (1960), 286–292. 증명의 빈틈을 메운 것은 M. Bebendorf, "A note on the Poincaré inequality for convex domains", *Zeitschrift für Analysis und ihre Anwendungen* 22 (2003), 751–756 이다.
[^3]: Dominique Bakry, Ivan Gentil, Michel Ledoux, *Analysis and Geometry of Markov Diffusion Operators*, Springer, 2014, 4.1 절.

# 연관 문서

## 선수지식

- [Sobolev 공간](sobolev-spaces.md)
- [Wirtinger 부등식](wirtinger-inequality.md)
- [Rayleigh 몫](rayleigh-quotient.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #probability
