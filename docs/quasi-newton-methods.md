# 준Newton 법

# 개요

준Newton 법은 Hessian 을 계산하지 않고 그 근사 행렬을 걸음마다 계급 1 이나 계급 2 로 갱신하는 [Newton 법](newton-method.md)의 변형이다. 갱신은 직전 두 점의 기울기 차에서 읽히는 secant 조건 $B\_{k+1}s\_k=y\_k$ 를 만족하도록 정한다.

Hessian 을 만들고 분해하는 비용이 사라지는 대신 수렴 차수가 이차에서 초선형으로 떨어진다. BFGS(Broyden–Fletcher–Goldfarb–Shanno) 갱신과 그 제한 기억 판 L-BFGS 가 미분 가능한 비제약 최소화의 기본 방법이다.

# 직관

$n$ 변수 함수를 Newton 법으로 최소화하려면 걸음마다 Hessian 을 만들고 선형계를 풀어야 한다. 서로 다른 이차 편도함수가 $n(n+1)/2$ 개이고 분해가 $O(n^3)$ 번 연산이므로, $n=10^4$ 이면 원소가 약 $5\times10^7$ 개이고 분해가 약 $10^{12}$ 번이다. 걸음마다 이것을 하는 계산은 끝나지 않는다.

한 걸음을 걸으면 기울기를 두 점에서 알게 된다. $x\_k$ 에서 $x\_{k+1}$ 로 가는 변위를 $s\_k$ , 기울기의 차를 $y\_k$ 라 하면 Taylor 전개에서 $y\_k\approx\nabla^2f(x\_k)s\_k$ 다. Hessian 전체는 모르지만 그것이 방향 $s\_k$ 에 어떻게 작용하는지는 이미 계산한 기울기 두 개에서 나온다.

그래서 Hessian 을 새로 만들지 않고 근사 행렬 하나를 들고 다니며, 걸음마다 이 조건 하나씩을 반영한다. $B\_{k+1}s\_k=y\_k$ 를 만족하는 행렬은 여럿이므로 $B\_k$ 에서 가장 적게 바뀌는 것을 고르고, 그 변화를 계급 1 이나 계급 2 로 제한해 갱신 비용을 $O(n^2)$ 로 묶는다.

한 변수에서 같은 계산을 하면 $f''(x\_k)$ 를 두 점의 차분으로 바꾼 할선법이 되고, 수렴 차수가 $(1+\sqrt5)/2\approx1.618$ 로 Newton 법의 $2$ 보다 낮다.

# 정의

## secant 조건

$$
s\_k=x\_{k+1}-x\_k,\qquad y\_k=\nabla f(x\_{k+1})-\nabla f(x\_k)
$$

근사 Hessian $B\_{k+1}$ 에 대한 **secant 조건**은 $B\_{k+1}s\_k=y\_k$ 다. 방정식이 $n$ 개이고 미지수가 $n(n+1)/2$ 개여서 해가 유일하지 않다.

## Broyden 법

비선형 방정식 $F(x)=0$ 에서 Jacobian 근사 $J\_k$ 를 계급 1 로 갱신한다.

$$
J\_{k+1}=J\_k+\frac{(y\_k-J\_ks\_k)s\_k^{\mathsf T}}{s\_k^{\mathsf T}s\_k},\qquad y\_k=F(x\_{k+1})-F(x\_k)
$$

이것은 secant 조건을 만족하는 행렬 가운데 Frobenius 노름으로 $J\_k$ 에 가장 가까운 것이다.

## BFGS 갱신

대칭 양정부호를 유지해야 하는 최소화에서는 계급 2 로 갱신한다.

$$
B\_{k+1}=B\_k+\frac{y\_ky\_k^{\mathsf T}}{y\_k^{\mathsf T}s\_k}-\frac{B\_ks\_ks\_k^{\mathsf T}B\_k}{s\_k^{\mathsf T}B\_ks\_k}
$$

걸음을 구할 때 필요한 것은 역행렬이므로 $H\_k=B\_k^{-1}$ 을 직접 갱신한다.

$$
H\_{k+1}=\left(I-\frac{s\_ky\_k^{\mathsf T}}{y\_k^{\mathsf T}s\_k}\right)H\_k\left(I-\frac{y\_ks\_k^{\mathsf T}}{y\_k^{\mathsf T}s\_k}\right)+\frac{s\_ks\_k^{\mathsf T}}{y\_k^{\mathsf T}s\_k}
$$

걸음은 $x\_{k+1}=x\_k-\alpha\_kH\_k\nabla f(x\_k)$ 이고 $\alpha\_k$ 는 선탐색으로 정한다. 역행렬을 따로 구하지 않고 계급 2 수정의 역을 닫힌 꼴로 얻는 계산이 [Sherman–Morrison 공식](sherman-morrison.md)의 계급 2 판이다.

## L-BFGS

$H\_k$ 를 행렬로 저장하지 않고 최근 $m$ 개의 쌍 $(s\_i,y\_i)$ 만 저장한다. $H\_k\nabla f(x\_k)$ 는 그 쌍들을 역순으로 한 번, 정순으로 한 번 훑는 두 고리로 계산된다.

```javascript
function twoLoopRecursion(grad, pairs, gamma) {
  let q = grad.slice()
  const alpha = []
  for (let i = pairs.length - 1; i >= 0; i--) {
    const { s, y, rho } = pairs[i]      // rho = 1 / dot(y, s)
    alpha[i] = rho * dot(s, q)
    q = axpy(-alpha[i], y, q)           // q <- q - alpha[i] * y
  }
  let r = scale(gamma, q)               // gamma * I 를 초기 근사로 쓴다
  for (let i = 0; i < pairs.length; i++) {
    const { s, y, rho } = pairs[i]
    const beta = rho * dot(y, r)
    r = axpy(alpha[i] - beta, s, r)
  }
  return r                              // H_k * grad
}
```

기억과 계산이 $O(mn)$ 이어서 $n$ 이 $10^6$ 을 넘는 문제에도 쓰인다.

## Gauss–Newton 과 Levenberg–Marquardt

목적함수가 잔차의 제곱합 $f(x)=\tfrac12\Vert r(x)\Vert^2$ 이면 Hessian 이 $J^{\mathsf T}J+\sum\_ir\_i\nabla^2r\_i$ 이고, 둘째 항을 버린 $J^{\mathsf T}J$ 를 쓰는 것이 **Gauss–Newton 법**이다. 여기에 감쇠항을 더해 $(J^{\mathsf T}J+\lambda I)$ 를 쓰는 것이 **Levenberg–Marquardt 법**이고, $\lambda$ 가 크면 걸음이 [경사하강법](gradient-descent.md)에 가까워지고 작으면 Gauss–Newton 에 가까워진다.

# 성질

## 양정부호의 보존

$B\_k$ 가 양정부호이고 $y\_k^{\mathsf T}s\_k\gt 0$ 이면 BFGS 갱신으로 얻은 $B\_{k+1}$ 도 양정부호다.

증명의 요지는 역행렬 꼴을 보는 것이다. $H\_{k+1}=V^{\mathsf T}H\_kV+s\_ks\_k^{\mathsf T}/(y\_k^{\mathsf T}s\_k)$ 에서 $V=I-y\_ks\_k^{\mathsf T}/(y\_k^{\mathsf T}s\_k)$ 이므로 임의의 $z\neq0$ 에 대해 $z^{\mathsf T}H\_{k+1}z$ 는 음이 아닌 두 항의 합이다. 둘이 함께 $0$ 이 되려면 $Vz=0$ 과 $s\_k^{\mathsf T}z=0$ 이 함께 성립해야 하는데, 뒤 식에서 $Vz=z$ 이므로 $z=0$ 이다.

조건 $y\_k^{\mathsf T}s\_k\gt 0$ 은 선탐색이 Wolfe 조건을 만족하면 자동으로 따라온다. $f$ 가 볼록이면 조건이 언제나 성립한다.

## 초선형 수렴

$f$ 가 두 번 미분 가능하고 극소점 $x^\ast$ 에서 Hessian 이 양정부호일 때, 근사 행렬이 Dennis–Moré 조건

$$
\lim\_{k\to\infty}\frac{\Vert(B\_k-\nabla^2f(x^\ast))s\_k\Vert}{\Vert s\_k\Vert}=0
$$

을 만족하면 반복은 초선형으로 수렴한다[^1]. BFGS 는 이 조건을 만족하지만 $B\_k$ 가 Hessian 으로 수렴하지는 않는다. 조건이 요구하는 것은 걸어가는 방향에서의 일치뿐이다.

## 이차함수에서의 유한 종료

$f$ 가 양정부호 이차함수이고 선탐색이 정확하면 BFGS 는 $n$ 번 안에 최소점에 닿고, 생성되는 방향은 [공액기울기법](krylov-subspace-methods.md)의 방향과 같다.

# 활용

- 미분 가능한 비제약 최소화에서 Hessian 을 쓸 수 없을 때의 기본 선택이다. [Newton 법](newton-method.md)의 이차 수렴을 초선형으로 내리고 걸음마다의 비용을 $O(n^3)$ 에서 $O(n^2)$ 또는 $O(mn)$ 으로 줄인다.
- 최대우도 추정에서 로그우도의 Hessian 을 해석적으로 구하기 어려울 때 L-BFGS 로 푼다. 로지스틱 회귀와 조건부 무작위장의 학습이 그 자리다.
- 잔차 제곱합의 최소화에서 Gauss–Newton 과 Levenberg–Marquardt 가 곡선 맞춤과 카메라 보정의 표준 해법이다.
- [Lagrange 쌍대성](lagrange-duality.md)의 KKT(Karush–Kuhn–Tucker) 조건에 Newton 법을 적용하는 내부점 방법에서 KKT 계수행렬의 근사 갱신으로도 쓰인다.

[^1]: J. E. Dennis, J. J. Moré, "A characterization of superlinear convergence and its application to quasi-Newton methods", *Mathematics of Computation* 28 (1974), 549–560.

# 연관 문서

## 선수지식

- [Newton 법](newton-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra #analysis #statistics
