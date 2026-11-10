# Chebyshev 반복

# 개요

**Chebyshev 반복(Chebyshev iteration, Chebyshev semi-iterative method)** 은 대칭 양정부호 행렬의 [고윳값](eigenvalues.md)이 들어 있는 구간 $\lbrack a,b\rbrack$ 를 알 때, 걸음마다 보폭을 바꾸어 오차를 [Chebyshev 다항식](chebyshev-polynomials.md)의 비율로 줄이는 반복법이다. 고윳값이 $1$ 과 $3$ 사이에 있는 계를 보폭 하나로 되풀이해 풀면 오차가 걸음마다 절반밖에 줄지 않는다. Chebyshev 반복은 같은 행렬-벡터 곱 횟수로 두 걸음 뒤의 오차를 $1/4$ 대신 $1/7$, 세 걸음 뒤에는 $1/8$ 대신 $1/26$ 이하로 줄이고, 내적을 계산하지 않는다.

# 직관

$Ax=b$ 를 $x_{k+1}=x_k+\omega(b-Ax_k)$ 로 푼다. 해를 $x^\ast$, 오차를 $e_k=x_k-x^\ast$ 라 하면 $e_{k+1}=(I-\omega A)e_k$ 이고, 고윳값 $\lambda$ 의 고유벡터 방향 성분은 걸음마다 $1-\omega\lambda$ 배가 된다. 고윳값이 $\lbrack 1,3\rbrack$ 에 있으면 $\max_{1\le\lambda\le 3}\vert 1-\omega\lambda\vert$ 는 $\omega=1/2$ 에서 가장 작은 $1/2$ 이다. 두 걸음이면 $1/4$ 이다.

두 걸음의 보폭을 $\omega_1$, $\omega_2$ 로 다르게 잡으면 두 걸음 뒤의 배율은 $p(\lambda)=(1-\omega_1\lambda)(1-\omega_2\lambda)$ 이다. $p$ 는 $p(0)=1$ 인 이차다항식이고, 근이 $1/\omega_1$ 과 $1/\omega_2$ 다. 근을 $2\mp 1/\sqrt2$ 로 두면 $p(\lambda)=\bigl(2(2-\lambda)^2-1\bigr)/7$ 이다. $\lambda\in\lbrack 1,3\rbrack$ 에서 $2-\lambda\in\lbrack -1,1\rbrack$ 이고 $\vert 2t^2-1\vert\le 1$ 이므로 $\vert p(\lambda)\vert\le 1/7$ 이다.

$2t^2-1$ 은 Chebyshev 다항식 $T_2$ 이고 $7=T_2(2)$ 다. 걸음 수 $k$ 에서도 근을 $T_k$ 의 영점에 맞추면 배율이 $1/T_k(2)$ 이고, $T_3(2)=26$ 이다.

# 정의

$A$ 를 고윳값이 $\lbrack a,b\rbrack$ ($0\lt a\lt b$) 에 있는 대칭 양정부호 행렬이라 하자. Chebyshev 반복의 $k$ 번째 근사해 $x_k$ 는 오차가 다음 다항식으로 정해지는 벡터다[^1].

$$
e_k=p_k(A)e_0,\qquad p_k(\lambda)=\frac{T_k\bigl((b+a-2\lambda)/(b-a)\bigr)}{T_k\bigl((b+a)/(b-a)\bigr)}
$$

직관 절은 $a=1$, $b=3$, $k=2$ 이고 $p_2(\lambda)=T_2(2-\lambda)/T_2(2)$ 다.

$T_{k+1}(t)=2tT_k(t)-T_{k-1}(t)$ 로부터 $x_k$ 는 세 항 점화식으로 계산된다. $\theta=(b+a)/2$, $\delta=(b-a)/2$, $\sigma=\theta/\delta$ 로 둔다.

```javascript
// 고윳값이 [a, b] 에 있는 대칭 양정부호 A. matvec(v) 가 A 와 벡터의 곱을 준다
function chebyshev(matvec, b, x0, a, bb, steps) {
  const theta = (bb + a) / 2, delta = (bb - a) / 2, sigma = theta / delta;
  let x = x0, r = sub(b, matvec(x0));
  let rho = 1 / sigma;
  let d = scale(r, 1 / theta);
  for (let k = 0; k < steps; k++) {
    x = add(x, d);
    r = sub(r, matvec(d));
    const rhoNext = 1 / (2 * sigma - rho);
    d = add(scale(d, rhoNext * rho), scale(r, 2 * rhoNext / delta));
    rho = rhoNext;
  }
  return x;
}
```

직관 절에서 $\sigma=2$ 이고 $\rho$ 는 $1/2$, $2/7$ 로 간다. 고윳값 $\lambda$ 의 방향에서 이 점화식의 첫 두 걸음은 오차를 $1-\lambda/2$ 배, $(2\lambda^2-8\lambda+7)/7$ 배로 만들고, 둘째가 $p_2(\lambda)$ 다.

# 성질

## 최소최대 성질

$p(0)=1$ 인 차수 $k$ 이하의 다항식 가운데 $\max_{a\le\lambda\le b}\vert p(\lambda)\vert$ 가 가장 작은 것이 $p_k$ 다. Chebyshev 다항식의 최소 편차 성질을 $\lambda\mapsto(b+a-2\lambda)/(b-a)$ 로 옮긴 것이다. 그래서 행렬-벡터 곱 $k$ 번으로 고윳값의 위치만 아는 반복 가운데 Chebyshev 반복이 2 노름의 최악 오차를 가장 작게 한다.

## 수렴률

$\kappa=b/a$ 라 하면 다음 부등식이 있다.

$$
T_k\left(\frac{\kappa+1}{\kappa-1}\right)\ge\frac12\left(\frac{\sqrt\kappa+1}{\sqrt\kappa-1}\right)^k
$$

그러므로 다음이 성립한다[^1].

$$
\Vert e_k\Vert\le\frac{1}{T_k\bigl((b+a)/(b-a)\bigr)}\Vert e_0\Vert\le 2\Bigl(\frac{\sqrt\kappa-1}{\sqrt\kappa+1}\Bigr)^k\Vert e_0\Vert
$$

직관 절은 $\kappa=3$ 이고 걸음당 배율이 점근적으로 $(\sqrt3-1)/(\sqrt3+1)\approx 0.268$ 이다. 보폭을 고정한 반복의 최적 배율 $(\kappa-1)/(\kappa+1)=1/2$ 보다 작다.

## 공액기울기법과의 비교

[공액기울기법](conjugate-gradient.md)은 $A$ 노름에서 같은 상한을 $a$, $b$ 없이 얻고, 고윳값이 몰려 있으면 더 빨리 수렴한다. 대신 걸음마다 내적 두 번이 든다. Chebyshev 반복은 내적이 없어서, 벡터가 여러 처리기에 나뉜 병렬 계산에서 전체 합을 모으는 통신을 하지 않는다.

## 구간 추정의 오차

고윳값이 $\lbrack a,b\rbrack$ 밖에 있으면 그 방향에서 $\vert p_k(\lambda)\vert$ 는 $1$ 보다 커질 수 있다. $\lambda\gt b$ 이면 $(b+a-2\lambda)/(b-a)\lt -1$ 이고 Chebyshev 다항식은 $\lbrack -1,1\rbrack$ 밖에서 지수적으로 커지므로, 큰 고윳값을 작게 잡으면 반복이 발산한다. $b$ 는 [거듭제곱법](power-iteration.md)이나 [Gershgorin 원판 정리](gershgorin-circle-theorem.md)로 위에서 어림한다. 비대칭 행렬에서는 구간 대신 고윳값을 둘러싼 타원을 쓴다[^2].

# 활용

- [다중격자](multigrid.md)의 평활자. 큰 고윳값 쪽 구간 $\lbrack\eta b,b\rbrack$ ($0\lt\eta\lt 1$) 에 Chebyshev 반복을 몇 걸음 쓰면 높은 주파수 성분만 줄인다. 내적이 없어 병렬 [대수적 다중격자](algebraic-multigrid.md)에서 Gauss–Seidel 대신 쓴다[^3].
- 다항식 [전처리](preconditioning.md). $p_k(A)$ 를 $I-q(A)A$ 꼴로 쓰면 $q(A)$ 가 $A^{-1}$ 의 근사이고, 행렬-벡터 곱만으로 적용되는 전처리 행렬이 된다.
- 고윳값 계산의 거르기. 원하지 않는 고윳값의 구간에서 작은 Chebyshev 다항식을 부분공간 반복의 각 걸음에 곱해, 원하는 고윳값 방향의 성분을 상대적으로 키운다.

[^1]: Y. Saad, *Iterative Methods for Sparse Linear Systems*, 2nd ed., SIAM (2003), 12.3 절.
[^2]: T. A. Manteuffel, "The Tchebychev iteration for nonsymmetric linear systems", *Numerische Mathematik* 28 (1977), 307–327.
[^3]: M. Adams, M. Brezina, J. Hu, R. Tuminaro, "Parallel multigrid smoothing: polynomial versus Gauss–Seidel", *Journal of Computational Physics* 188 (2003), 593–610.

# 연관 문서

## 선수지식

- [정지 반복법](stationary-iterative-methods.md)
- [Chebyshev 다항식](chebyshev-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation #analysis
