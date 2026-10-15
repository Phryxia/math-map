# Chebyshev 다항식

# 개요

Chebyshev 다항식은 $T_n(\cos\theta)=\cos n\theta$ 를 만족하는 차수 $n$ 의 다항식이다. 구간 $\lbrack-1,1\rbrack$ 에서 최고차 계수가 $1$ 인 차수 $n$ 다항식 가운데 균등노름이 가장 작은 것이 $2^{1-n}T_n$ 이다.

[Stone–Weierstrass 정리](stone-weierstrass.md)는 다항식으로 연속함수를 균등근사할 수 있다는 것을 주고 차수마다의 오차는 말하지 않는다. Chebyshev 다항식은 차수를 고정했을 때의 최선을 준다.

# 직관

$\lbrack-1,1\rbrack$ 에서 $x^n$ 을 차수 $n-1$ 이하 다항식으로 근사한다. 오차 $x^n-q(x)$ 는 최고차 계수가 $1$ 인 차수 $n$ 다항식이므로, 문제는 그런 다항식 $p$ 의 $\max\_{\lbrack-1,1\rbrack}\vert p\vert$ 를 가장 작게 만드는 것이다.

$n=2$ 에서 $p(x)=x^2$ 는 최대값 $1$ 을 준다. $p(x)=x^2-\tfrac12$ 로 바꾸면 값이 $x=0$ 에서 $-\tfrac12$, $x=\pm 1$ 에서 $\tfrac12$ 이므로 최대값이 $\tfrac12$ 로 줄어든다. 줄어든 자리를 보면 $p$ 가 세 점에서 최대 절댓값에 닿고 부호가 번갈아 있다.

최대 절댓값에 여러 번 번갈아 닿는 함수를 찾는다. $x=\cos\theta$ 로 바꾸면 $\cos n\theta$ 가 $\theta=k\pi/n$ 에서 $\pm 1$ 을 번갈아 취하고 그 점이 $n+1$ 개다. $\cos n\theta$ 가 $\cos\theta$ 의 다항식인지는 덧셈정리로 확인된다.

$$
\cos(n+1)\theta=2\cos\theta\cos n\theta-\cos(n-1)\theta
$$

이므로 $\cos n\theta$ 가 $\cos\theta$ 의 다항식이면 $\cos(n+1)\theta$ 도 그렇다. 이 점화식에서 최고차 계수는 매번 $2$ 배가 되어 차수 $n$ 에서 $2^{n-1}$ 이다. 최고차 계수를 $1$ 로 맞추려고 $2^{1-n}$ 을 곱하면 최대 절댓값이 $2^{1-n}$ 인 다항식이 나오고, $n=2$ 에서 그것이 $x^2-\tfrac12$ 다.

# 정의

## 점화식

$$
T_0(x)=1,\qquad T_1(x)=x,\qquad T\_{n+1}(x)=2xT_n(x)-T\_{n-1}(x)
$$

으로 정의되는 다항식 $T_n$ 을 **제1종 Chebyshev 다항식**이라 한다. $T_n$ 의 차수는 $n$ 이고 최고차 계수는 $n\ge 1$ 에서 $2^{n-1}$ 이다.

$\vert x\vert\le 1$ 에서 $x=\cos\theta$ 로 두면 $T_n(x)=\cos(n\arccos x)$ 이고, $\vert x\vert\ge 1$ 에서는 $T_n(x)=\cosh(n\thinspace\mathrm{arccosh}\thinspace x)$ 다.

## 영점과 극값점

$T_n$ 의 영점은

$$
x_k=\cos\frac{(2k-1)\pi}{2n},\qquad k=1,\dots,n
$$

이고 모두 $(-1,1)$ 에 있다. $\vert T_n\vert$ 이 $\lbrack-1,1\rbrack$ 에서 최대값 $1$ 에 닿는 점은

$$
y_k=\cos\frac{k\pi}{n},\qquad k=0,\dots,n
$$

이며 $T_n(y_k)=(-1)^k$ 다. 앞의 $n$ 개를 **Chebyshev 절점**, 뒤의 $n+1$ 개를 **극값점**이라 한다.

# 성질

## 최소 편차 성질

**정리.** $p$ 가 최고차 계수 $1$ 인 차수 $n\ge 1$ 의 다항식이면

$$
\max\_{x\in\lbrack-1,1\rbrack}\vert p(x)\vert\ge 2^{1-n}
$$

이고 등호는 $p=2^{1-n}T_n$ 일 때만 성립한다.[^1]

증명의 요지. $q=2^{1-n}T_n$ 이라 하고 $\max\vert p\vert\lt 2^{1-n}$ 을 가정한다. $p$ 와 $q$ 의 최고차 항이 같으므로 $q-p$ 의 차수는 $n-1$ 이하다. $q(y_k)=(-1)^k2^{1-n}$ 이고 $\vert p(y_k)\vert\lt 2^{1-n}$ 이므로 $q-p$ 의 부호가 $y_0,\dots,y_n$ 에서 번갈아 바뀐다. 따라서 $q-p$ 가 그 사이의 $n$ 개 구간마다 영점을 하나씩 가지므로 차수 $n-1$ 이하인 다항식이 영점을 $n$ 개 갖고, $q-p$ 가 영다항식이어야 한다. 가정과 어긋난다. 등호의 경우도 같은 셈으로 $q-p=0$ 이 나온다. $\square$

증명이 쓴 것은 $n+1$ 개의 점에서 최대 절댓값에 번갈아 닿는 성질뿐이다. 이 성질을 등진동이라 하고, 차수를 고정한 최적 근사의 특징으로 쓴다.

## 직교성

**정리.** $m\ne n$ 이면

$$
\int\_{-1}^1\frac{T_m(x)T_n(x)}{\sqrt{1-x^2}}\thinspace dx=0
$$

이다.

증명의 요지. $x=\cos\theta$ 로 치환하면 $dx=-\sin\theta\thinspace d\theta$ 이고 $\sqrt{1-x^2}=\sin\theta$ 이므로 적분이 $\int_0^\pi\cos m\theta\cos n\theta\thinspace d\theta$ 가 된다. 곱을 합으로 바꾸면 $m\ne n$ 에서 값이 $0$ 이다. $\square$

가중 $(1-x^2)^{-1/2}$ 를 준 $L^2$ 공간에서 $\lbrace T_n\rbrace$ 이 직교기저이고, 그 전개는 $\cos\theta$ 로 치환한 Fourier 여현급수와 같다.

## 구간 밖의 성장

$x\gt 1$ 에서

$$
T_n(x)=\tfrac12\left\lbrack(x+\sqrt{x^2-1})^n+(x-\sqrt{x^2-1})^n\right\rbrack
$$

이므로 $T_n(x)$ 는 $(x+\sqrt{x^2-1})^n$ 에 비례해 커진다. $\lbrack-1,1\rbrack$ 에서 $1$ 로 묶여 있으면서 구간 밖에서 가장 빨리 커지는 다항식이 $T_n$ 이고, 최소 편차 성질을 구간 밖의 한 점에서의 값을 고정한 문제로 바꿔도 같은 다항식이 나온다.

## Chebyshev 절점 보간

$n+1$ 개의 극값점에서 연속함수를 보간하는 사상의 균등노름을 Lebesgue 상수라 한다. 극값점을 쓰면 이 상수가 $\log n$ 에 비례해 커지는 데 그치고, 등간격 점을 쓰면 $2^n/(n\log n)$ 에 비례해 커진다.[^2]

등간격 보간에서 차수를 올릴수록 구간 끝의 오차가 커지는 현상이 그 차이에서 나온다. 절점을 구간 끝에 몰아 놓는 것이 $\cos$ 치환의 효과다.

# 활용

- **공액기울기법의 수렴률.** [Krylov 부분공간 방법](krylov-subspace-methods.md)의 수렴 정리는 $p(0)=1$ 인 차수 $k$ 다항식 가운데 스펙트럼이 든 구간 $\lbrack\lambda\_{\min},\lambda\_{\max}\rbrack$ 에서 균등노름이 가장 작은 것을 찾는 문제로 환원된다. 그 구간으로 옮긴 $T_k$ 가 답을 주고, 구간 밖의 성장 공식이 조건수 $\kappa$ 에 대한 비 $(\sqrt\kappa-1)/(\sqrt\kappa+1)$ 를 준다.
- **다항식 전처리.** [전처리](preconditioning.md)에서 행렬의 다항식을 전처리 행렬로 쓸 때, 스펙트럼 구간에서 $1-\lambda p(\lambda)$ 를 작게 만드는 $p$ 를 Chebyshev 다항식으로 고른다.
- **수치적분과 보간.** 절점 보간의 Lebesgue 상수 추정이 Chebyshev 절점을 쓰는 적분 공식의 안정성 근거다.
- **최적 근사의 판정.** 등진동 성질은 차수를 고정한 균등근사에서 최적해의 특징이고, 최적 근사 다항식을 찾는 반복법이 이 특징을 종료 조건으로 쓴다.

[^1]: Theodore J. Rivlin, *Chebyshev Polynomials*, 2판, Wiley, 1990, 2.1 절. P. L. Chebyshev, "Théorie des mécanismes connus sous le nom de parallélogrammes", *Mémoires de l'Académie Impériale des Sciences de St.-Pétersbourg* **7** (1854), 539–568 이 원 논문이다.
[^2]: Lloyd N. Trefethen, *Approximation Theory and Approximation Practice*, Society for Industrial and Applied Mathematics, 2013, 15 장. 등간격 점의 Lebesgue 상수 점근은 같은 책 15 장의 표와 그 출처를 따른다.

# 연관 문서

## 선수지식

- [Stone–Weierstrass 정리](stone-weierstrass.md)
- [직교다항식](orthogonal-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra #algorithms
