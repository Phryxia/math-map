# Hamburger 적률 문제

# 개요

**Hamburger 적률 문제(Hamburger moment problem)** 는 실수 위의 확률분포를 적률 $s_n=\mathbb E\lbrack X^n\rbrack$ 의 수열만으로 되찾는 문제다. 평균이 $1$ 이고 제곱의 평균이 $0$ 인 확률변수는 없다. 이처럼 아무 수열이나 적률이 되지는 못하고, 적률이 같아도 분포가 다를 수 있다.

Hamburger 정리는 수열이 적률 수열인 것을 수열로 만든 행렬들이 양의 준정부호인 것으로 판정하고, Carleman 조건은 적률이 너무 빨리 커지지 않으면 분포가 하나로 정해진다는 것을 보인다.

# 직관

확률변수 $X$ 와 실수 $c_0,c_1$ 에 대해 $(c_0+c_1X)^2$ 은 음이 아니므로 그 평균도 음이 아니다. 평균을 적률로 쓰면 다음이 나온다.

$$
\mathbb E\lbrack(c_0+c_1X)^2\rbrack=c_0^2s_0+2c_0c_1s_1+c_1^2s_2\ge 0
$$

$s_0=1$, $s_1=1$, $s_2=0$ 이면 $c_0=1$, $c_1=-1$ 에서 좌변이 $1-2+0=-1$ 이다. 그러므로 $(1,1,0)$ 으로 시작하는 수열은 적률 수열이 아니다. 일차식 대신 $n$ 차 다항식 $p$ 를 넣으면 $\mathbb E\lbrack p(X)^2\rbrack\ge 0$ 이 되어, 수열마다 같은 검사를 모든 차수에서 할 수 있다.

[Hausdorff 적률 문제](hausdorff-moment-problem.md)에서는 분포가 $\lbrack 0,1\rbrack$ 에 있어 적률이 분포를 하나로 정했다. 실수 전체로 넓히면 [로그정규분포](lognormal-distribution.md)처럼 적률이 모두 같은 다른 분포가 생긴다. 로그정규분포의 적률은 $s_n=e^{n^2/2}$ 로 매우 빨리 커지고, 이 증가 속도가 유일성을 깨는 자리다.

# 정의

실수 위의 확률측도 $\mu$ 의 모든 적률 $s_n=\int x^n\thinspace d\mu(x)$ 이 유한할 때 $(s_n)$ 을 $\mu$ 의 **적률 수열(moment sequence)** 이라 한다.

수열 $(s_n)$ 에서 $(i,j)$ 성분이 $s_{i+j}$ 인 $(n+1)\times(n+1)$ 행렬 $H_n$ 을 **Hankel 행렬(Hankel matrix)** 이라 한다. $n=1$ 에서는 다음과 같다.

$$
H_1=\begin{pmatrix}s_0&s_1\cr s_1&s_2\end{pmatrix}
$$

직관 절의 부등식은 $H_1$ 이 양의 준정부호라는 조건이다. 수열 $(1,1,0)$ 에서 $H_1$ 의 행렬식은 $-1$ 이므로 $H_1$ 은 양의 준정부호가 아니다.

적률 수열 $(s_n)$ 을 갖는 확률측도가 하나뿐이면 적률 문제가 **결정적(determinate)** 이라 하고, 둘 이상이면 **비결정적(indeterminate)** 이라 한다. 로그정규분포의 적률 수열은 비결정적이다.

# 성질

## Hamburger 정리

*정리.* $s_0=1$ 인 수열 $(s_n)$ 이 실수 위의 확률측도의 적률 수열인 것은 모든 $n$ 에서 $H_n$ 이 양의 준정부호인 것과 동치다[^1].

*증명의 요지.* 필요조건은 직관 절의 계산을 $n$ 차 다항식으로 넓힌 것이다. 충분조건은 다항식 위의 선형범함수 $L(x^n)=s_n$ 에서 출발한다. $H_n$ 이 양의 준정부호이면 모든 다항식 $p$ 에서 $L(p^2)\ge 0$ 이고, 실수 위에서 음이 아닌 다항식은 두 다항식의 제곱의 합이므로 $L$ 은 음이 아닌 다항식에서 음이 아니다. 이런 범함수를 연속함수로 넓히고 측도로 표현하면 원하는 $\mu$ 가 나온다. ∎

## Carleman 조건

*정리.* 적률 수열 $(s_n)$ 이 다음을 만족하면 적률 문제는 결정적이다[^1].

$$
\sum_{n=1}^{\infty}s_{2n}^{-1/(2n)}=\infty
$$

표준정규분포는 $s_{2n}=(2n-1)!!\le(2n)^n$ 이므로 $s_{2n}^{-1/(2n)}\ge 1/\sqrt{2n}$ 이고 합이 발산한다. 그러므로 정규분포는 적률로 정해진다. 로그정규분포는 $s_{2n}^{-1/(2n)}=e^{-n}$ 이어서 합이 수렴하고, 조건이 성립하지 않는다.

## 적률생성함수와의 관계

[적률생성함수](moment-generating-function.md) $\mathbb E\lbrack e^{tX}\rbrack$ 가 $0$ 의 근방에서 유한하면 $s_{2n}\le C^{2n}(2n)!$ 꼴의 한계가 있고 Carleman 조건이 성립한다. 로그정규분포는 모든 $t\gt 0$ 에서 적률생성함수가 발산하므로 이 판정을 쓸 수 없다.

# 활용

- [직교다항식](orthogonal-polynomials.md)은 $L(p\thinspace q)$ 를 내적으로 한 다항식 공간의 Gram–Schmidt 결과다. Hankel 행렬이 양의 정부호이면 이 내적이 정의되고, 삼항 점화식의 계수로 측도를 되찾는 Favard 정리(Favard's theorem)가 Hamburger 정리의 다른 형태다.
- 적률법(method of moments)으로 분포의 수렴을 보일 때, 극한 분포가 결정적이면 적률의 수렴이 분포의 수렴을 함의한다. [Wigner 반원법칙](wigner-semicircle.md)의 증명은 반원분포가 유계 구간에 있어 결정적이라는 것을 쓴다.

[^1]: K. Schmüdgen, *The Moment Problem*, Springer, 2017, Chapter 3 과 Chapter 4 — Hamburger 정리와 Carleman 조건.

# 연관 문서

## 선수지식

- [Hausdorff 적률 문제](hausdorff-moment-problem.md)
- [직교다항식](orthogonal-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #measure_theory
