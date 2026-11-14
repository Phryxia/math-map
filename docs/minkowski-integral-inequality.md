# Minkowski 적분 부등식

# 개요

**Minkowski 적분 부등식(Minkowski's integral inequality)** 은 함수들을 적분해 합친 것의 크기가 각 함수의 크기를 적분한 값을 넘지 않는다는 부등식이다. 측정값 $f$ 를 조금씩 밀어 놓은 사본들을 평균 내어 매끄럽게 만들면, 결과의 제곱 적분이 원래 $f$ 의 제곱 적분보다 커질 수 있는지 묻게 된다. 이 부등식은 평균 낸 결과의 크기를 사본 하나하나의 크기의 평균으로 위에서 눌러, 결과가 원래보다 커지지 않는다고 답한다.

# 직관

함수 $f$ 를 $y\in\lbrack 0,1\rbrack$ 만큼 밀어 놓은 사본 $f(x-y)$ 들의 평균을 낸다.

$$
Af(x)=\int_0^1 f(x-y)\thinspace dy
$$

사본이 유한 개이면 [Lᵖ 공간](lp-spaces.md)의 Minkowski 부등식 $\Vert f+g\Vert\_p\le\Vert f\Vert\_p+\Vert g\Vert\_p$ 를 되풀이해 쓴다. 평행이동은 노름을 바꾸지 않으므로 $N$ 개의 사본 $f(x-k/N)$ 의 평균은 노름이 $\frac1N\sum_k\Vert f\Vert\_p=\Vert f\Vert\_p$ 이하다. $Af$ 는 $N\to\infty$ 에서 이 평균들의 극한이므로 $\Vert Af\Vert\_p\le\Vert f\Vert\_p$ 가 나와야 한다.

$f=\mathbf 1\_{\lbrack 0,1\rbrack}$ 로 확인한다. $Af(x)$ 는 $\lbrack x-1,x\rbrack$ 와 $\lbrack 0,1\rbrack$ 이 겹치는 길이이므로 $\lbrack 0,2\rbrack$ 위에서 $x=1$ 에 꼭짓점을 둔 높이 $1$ 인 삼각형이다. $\Vert Af\Vert\_2^2=2\int_0^1x^2\thinspace dx=2/3$ 이고 $\Vert f\Vert\_2^2=1$ 이므로 $\Vert Af\Vert\_2=\sqrt{2/3}\le 1$ 이다. 합을 적분으로 바꾼 부등식이 이 문서의 정리다.

# 정의

$(X,\mu)$ 와 $(Y,\nu)$ 가 $\sigma$ 유한 측도공간이고 $F$ 가 $X\times Y$ 위의 가측함수라 하자. $y$ 를 고정한 함수 $F(\cdot,y)$ 를 $F$ 의 **단면(section)** 이라 하고, 다음 두 양을 비교한다.

$$
\Bigl\Vert\int_Y F(\cdot,y)\thinspace d\nu(y)\Bigr\Vert\_{L^p(X)}\qquad\int_Y\Vert F(\cdot,y)\Vert\_{L^p(X)}\thinspace d\nu(y)
$$

왼쪽은 단면들을 먼저 적분해 합친 함수의 노름이고, 오른쪽은 단면마다 노름을 잰 뒤 적분한 값이다. 직관 절에서는 $X=\mathbb R$, $Y=\lbrack 0,1\rbrack$, $F(x,y)=f(x-y)$ 이고, 왼쪽이 $\Vert Af\Vert\_p$, 오른쪽이 $\int_0^1\Vert f\Vert\_p\thinspace dy=\Vert f\Vert\_p$ 다.

# 성질

## 부등식의 진술

$1\le p\lt\infty$ 이면 다음이 성립한다.

$$
\Bigl\Vert\int_Y F(\cdot,y)\thinspace d\nu(y)\Bigr\Vert\_{L^p(X)}\le\int_Y\Vert F(\cdot,y)\Vert\_{L^p(X)}\thinspace d\nu(y)
$$

$\nu$ 가 점 $N$ 개 위의 셈측도이면 Minkowski 부등식을 $N$ 번 쓴 것과 같다. $p=\infty$ 에서도 단면들의 본질적 상한을 쓰면 같은 부등식이 성립한다.

## 증명의 요지

$F\ge 0$ 으로 두어도 된다. $p=1$ 이면 [Fubini–Tonelli 정리](fubini-tonelli.md)로 적분 순서를 바꾼 등식이다.

$1\lt p\lt\infty$ 이면 $H(x)=\int_Y F(x,y)\thinspace d\nu(y)$ 로 두고 $H^p=H^{p-1}\cdot H$ 의 한 인수 $H$ 를 정의대로 펼친다.

$$
\Vert H\Vert\_p^p=\int_Y\int_X H(x)^{p-1}F(x,y)\thinspace d\mu(x)\thinspace d\nu(y)
$$

안쪽 적분에 지수 $p/(p-1)$ 과 $p$ 의 [Hölder 부등식](holder-inequality.md)을 쓰면 $\Vert H\Vert\_p^{p-1}\Vert F(\cdot,y)\Vert\_p$ 이하가 된다. 순서를 바꾸는 데 Tonelli 정리를 썼다. 양변을 $\Vert H\Vert\_p^{p-1}$ 로 나누면 부등식이 나온다. $\Vert H\Vert\_p$ 가 무한일 수 있으므로 실제 증명은 $F$ 를 유계이고 유한 측도 집합에 받침을 둔 함수로 잘라 이 계산을 한 뒤 [단조 수렴 정리](monotone-convergence.md)로 극한을 취한다.

## 혼합 노름의 교환

$1\le p\le q\lt\infty$ 이면 다음이 성립한다.

$$
\Bigl\Vert\thinspace\Vert F(x,\cdot)\Vert\_{L^p(Y)}\Bigr\Vert\_{L^q(X)}\le\Bigl\Vert\thinspace\Vert F(\cdot,y)\Vert\_{L^q(X)}\Bigr\Vert\_{L^p(Y)}
$$

$\vert F\vert^p$ 에 지수 $q/p\ge 1$ 의 Minkowski 적분 부등식을 쓰고 양변을 $1/p$ 제곱하면 나온다. $p=1$ 이 앞 절의 부등식이다. 큰 지수의 노름을 바깥에 두는 쪽이 작다.

## 1 보다 작은 지수

$0\lt p\lt 1$ 에서는 부등식이 성립하지 않는다. Lᵖ 공간 문서의 Minkowski 부등식 절에 $p=1/2$ 의 반례가 있고, 이것은 $\nu$ 가 두 점 위의 셈측도인 경우다.

# 활용

- [Young 의 합성곱 부등식](young-convolution-inequality.md). 지수 $q=1$ 인 경우 $\Vert f\ast g\Vert\_p\le\Vert f\Vert\_p\Vert g\Vert\_1$ 은 $F(x,y)=f(x-y)g(y)$ 에 이 부등식을 쓴 것이다. 직관 절의 $Af$ 는 $g=\mathbf 1\_{\lbrack 0,1\rbrack}$ 인 경우다.
- [합성곱](convolution.md)의 근사 항등원. $\Vert f\ast\varphi_\varepsilon-f\Vert\_p\le\int\Vert\tau_yf-f\Vert\_p\thinspace\varphi_\varepsilon(y)\thinspace dy$ 가 이 부등식이고, 오른쪽이 평행이동의 $L^p$ 연속성으로 $0$ 으로 간다.
- Hardy 부등식(Hardy's inequality). $1\lt p\lt\infty$ 에서 $\frac1x\int_0^xf(t)\thinspace dt=\int_0^1 f(xs)\thinspace ds$ 로 쓰고 $\Vert f(\cdot\thinspace s)\Vert\_{L^p(0,\infty)}=s^{-1/p}\Vert f\Vert\_p$ 를 적분하면 상수 $p/(p-1)$ 이 나온다.
- [초축약성](hypercontractivity.md). Bonami–Beckner 정리를 한 좌표씩 귀납할 때 혼합 노름의 교환을 쓴다.

# 연관 문서

## 선수지식

- [Lᵖ 공간](lp-spaces.md)
- [Fubini–Tonelli 정리](fubini-tonelli.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #measure_theory #functional_analysis
