# Gauss 구적

# 개요

**Gauss 구적(Gaussian quadrature)** 은 적분을 몇 점에서의 함숫값의 가중합으로 근사할 때, 점의 위치까지 골라 정확도를 가장 높인 공식이다. $\lbrack -1,1\rbrack$ 에서 노드를 $\pm 1$ 로 고정한 $f(-1)+f(1)$ 은 $x^2$ 의 적분 $2/3$ 을 $2$ 로 틀리지만, 노드를 $\pm 1/\sqrt 3$ 으로 옮기면 $x^3$ 까지의 다항식을 정확히 적분한다. Gauss 구적은 노드 $n$ 개를 [직교다항식](orthogonal-polynomials.md) $p_n$ 의 영점에 두어, 차수 $2n-1$ 이하의 다항식을 정확히 적분한다.

# 직관

$\lbrack -1,1\rbrack$ 에서 적분을 함숫값 두 개의 가중합으로 근사한다. 노드를 $\pm1$ 로 고정하면 가중치 두 개만 미지수이고, 상수와 $x$ 를 정확히 적분하라는 조건에서 $\int_{-1}^1f\approx f(-1)+f(1)$ 이 나온다. $f(x)=x^2$ 를 넣으면 좌변이 $2/3$, 우변이 $2$ 로 어긋난다.

노드도 미지수로 풀면 조건을 더 받을 수 있다. 노드 $\pm t$ 와 가중치 $w$ 를 대칭으로 두고 $1$ 과 $x^2$ 를 정확히 적분하라고 요구한다.

$$
2w=2,\qquad 2wt^2=\frac23
$$

에서 $w=1$ 과 $t=1/\sqrt3$ 이다. 홀수 거듭제곱은 대칭성으로 양변이 모두 $0$ 이므로 $x^3$ 까지 정확하다.

미지수는 노드 $n$ 개와 가중치 $n$ 개로 $2n$ 개이고, 차수 $2n-1$ 이하의 다항식 공간도 $2n$ 차원이다. 그래서 노드 $n$ 개로 차수 $2n-1$ 까지 맞추는 공식을 찾는다. 위의 $t=1/\sqrt3$ 은 [직교다항식](orthogonal-polynomials.md)의 하나인 Legendre 다항식(Legendre polynomial) $p_2(x)=x^2-\tfrac13$ 의 영점이고, 노드 $n$ 개의 공식도 $n$ 차 직교다항식의 영점에 노드를 둔다.

# 정의

## 구적 공식

**구적 공식(quadrature rule)** 은 가중함수(weight function) $w\ge0$ 에 대한 적분을 노드(node) $x_1,\dots,x_n$ 에서의 함숫값과 가중치(weight) $w_1,\dots,w_n$ 의 가중합으로 근사하는 식이다.

$$
\int_a^bf(x)w(x)\thinspace dx\approx\sum_{i=1}^nw_if(x_i)
$$

차수 $m$ 이하의 모든 다항식에서 등호가 성립하고 차수 $m+1$ 인 다항식 가운데 등호가 깨지는 것이 있으면 이 공식의 **정확도 차수(degree of exactness)** 가 $m$ 이다. 직관의 $f(-1)+f(1)$ 은 $1$ 과 $x$ 에서 정확하고 $x^2$ 에서 틀리므로 정확도 차수가 $1$ 이다.

## Gauss 구적

$p_n$ 을 가중 $w$ 의 $n$ 차 직교다항식이라 하고 그 영점을 $x_1,\dots,x_n$ 으로 둔다. 가중치를 Lagrange 기저(Lagrange basis) $\ell_i$ 의 적분으로 정한다.

$$
w_i=\int_a^b\ell_i(x)w(x)\thinspace dx,\qquad \ell_i(x)=\prod_{j\ne i}\frac{x-x_j}{x_i-x_j}
$$

이 노드와 가중치를 쓴 공식이 **Gauss 구적**이다. 직관의 예는 $w=1$, $n=2$ 인 경우다. 노드 $x_1=-1/\sqrt3$, $x_2=1/\sqrt3$ 에서 $\ell_1(x)=(x-1/\sqrt3)/(-2/\sqrt3)$ 이고 $\int_{-1}^1\ell_1=1$ 이므로 $w_1=1$ 이며, 같은 계산으로 $w_2=1$ 이다.

가중함수가 $\lbrack -1,1\rbrack$ 위의 $1$ 이면 **Gauss–Legendre 구적(Gauss–Legendre quadrature)**, $\lbrack -1,1\rbrack$ 위의 $(1-x^2)^{-1/2}$ 이면 **Gauss–Chebyshev 구적(Gauss–Chebyshev quadrature)**, $\mathbb R$ 위의 $e^{-x^2}$ 이면 **Gauss–Hermite 구적(Gauss–Hermite quadrature)** 이다.

## Jacobi 행렬

**Jacobi 행렬(Jacobi matrix)** 은 선행계수가 $1$ 인 직교다항식의 점화식 $p_{n+1}=(x-B_n)p_n-C_np_{n-1}$ 의 계수를 모은 삼중대각 대칭 [행렬](matrices.md)이다.

$$
J_n=\begin{pmatrix}B_0&\sqrt{C_1}&&\cr \sqrt{C_1}&B_1&\ddots&\cr &\ddots&\ddots&\sqrt{C_{n-1}}\cr &&\sqrt{C_{n-1}}&B_{n-1}\end{pmatrix}
$$

Legendre 다항식은 $B_k=0$, $C_k=k^2/(4k^2-1)$ 을 만족한다. $n=2$ 이면 $C_1=1/3$ 이므로 $J_2$ 는 대각 성분이 $0$ 이고 비대각 성분이 $1/\sqrt3$ 인 $2\times2$ 행렬이다.

# 성질

## 정확도 차수

Gauss 구적의 정확도 차수는 $2n-1$ 이고, 노드 $n$ 개를 쓰는 어떤 구적 공식도 정확도 차수가 $2n$ 이상이 되지 못한다.

차수 $2n-1$ 이하의 $f$ 를 $p_n$ 으로 나눠 $f=qp_n+r$ 로 쓰면 $\deg q\le n-1$ 이다. 직교성에서 $\int qp_nw=0$ 이므로 좌변이 $\int rw$ 와 같고, 노드에서 $p_n$ 이 $0$ 이라 우변도 $r$ 의 값만 본다. 차수 $n-1$ 이하에서 $n$ 점 [다항식 보간](polynomial-interpolation.md)이 정확하므로 양변이 일치한다.

차수 $2n$ 이 불가능한 것은 $f(x)=p_n(x)^2$ 가 반례다. 좌변이 양수인데 모든 노드에서 $f$ 가 $0$ 이라 우변이 $0$ 이다.

## 가중치의 양수성

$f=\ell_i^2$ 는 차수 $2n-2$ 이므로 공식이 정확하고, 좌변이 양수이며 우변이 $w_i$ 다. 따라서 모든 $w_i\gt0$ 이다. 가중치가 양수이므로 함숫값의 오차가 상쇄 없이 더해지고 공식이 수치적으로 안정하다.

## Golub–Welsch 절차

Golub–Welsch 절차(Golub–Welsch algorithm)는 다음 정리로 노드와 가중치를 구한다. $J_n$ 의 [고윳값](eigenvalues.md)이 Gauss 노드이고, 고윳값 $x_i$ 에 대한 단위 고유벡터의 첫 성분 $v_{i,1}$ 에서 $w_i=\mu_0v_{i,1}^2$ 이다. 여기서 $\mu_0=\int_a^bw$ 다[^1]. Legendre 의 $J_2$ 는 고윳값이 $\pm1/\sqrt3$ 이고 단위 고유벡터 $(1,\pm1)/\sqrt2$ 의 첫 성분 제곱이 $1/2$ 이므로 $w_i=2\cdot\tfrac12=1$ 이다.

$p_n$ 의 영점이 $J_n$ 의 고윳값인 것은 점화식을 행렬로 적은 것에서 바로 나온다. 다항식의 근을 직접 구하면 차수가 커질 때 불안정하지만, 대칭 삼중대각 행렬의 고윳값 계산은 안정하고 비용이 $O(n^2)$ 다.

```javascript
// 노드와 가중치를 점화식 계수에서 얻는다
function golubWelsch(B, C, mu0) {
  const J = tridiagonalSymmetric(B, C.map(Math.sqrt))
  const { values, vectors } = symmetricEigen(J)   // 안정한 대칭 고윳값 분해
  return values.map((x, i) => ({
    node: x,
    weight: mu0 * vectors[i][0] ** 2,
  }))
}
```

## 오차

$f$ 가 $C^{2n}$ 이면 오차가 다음 꼴이다.

$$
\int_a^bfw-\sum_iw_if(x_i)=\frac{f^{(2n)}(\xi)}{(2n)!}\int_a^bp_n(x)^2w(x)\thinspace dx
$$

어떤 $\xi\in(a,b)$ 에서 성립한다. $f$ 가 구간을 포함하는 영역에서 해석적이면 우변이 $n$ 에 대해 지수적으로 줄어든다. 고계 도함수가 없거나 큰 함수에서는 이 추정을 쓸 수 없으므로 구간을 나눠 조각마다 적용한다.

# 활용

- 수치적분. 함수 호출 $n$ 번으로 차수 $2n-1$ 까지 정확하므로, 같은 호출 수의 [Newton–Cotes 공식](newton-cotes.md)보다 정확도가 높고 노드가 구간 안에 있어 끝점의 특이성을 피한다.
- [유한요소법](finite-element-method.md)의 요소 적분. 기저함수의 곱이 다항식이라 차수를 알고 있으므로, 그 차수를 정확히 적분하는 최소 노드 수를 Gauss 구적으로 고른다.
- 가중함수에 특이성이 있는 적분. $(1-x^2)^{-1/2}$ 나 $x^\alpha e^{-x}$ 를 가중함수로 흡수하면 특이점이 노드 선택에 들어가므로 변수변환 없이 적분한다.
- [확률변수](random-variables.md)의 모멘트 계산. 분포의 가중함수에 딸린 직교다항식을 쓰면 적은 노드로 기댓값 적분을 대신하고, 노드와 가중치가 모멘트를 정해진 차수까지 보존한다.

[^1]: G. Golub, J. Welsch, "Calculation of Gauss quadrature rules", Math. Comp. 23 (1969), 221–230.

# 연관 문서

## 선수지식

- [직교다항식](orthogonal-polynomials.md)
- [다항식 보간](polynomial-interpolation.md)

## 더 알아보기

- [Nyström 법](nystrom-method.md)

#algorithms #analysis #linear_algebra
