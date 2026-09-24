# 전처리

# 개요

전처리는 선형계 $Ax = b$ 를 해가 같은 계 $M^{-1}Ax = M^{-1}b$ 로 바꾸어 반복법의 수렴을 빠르게 하는 방법이다. 반복 횟수가 계수행렬의 스펙트럼으로 정해지므로, $M^{-1}v$ 를 싸게 계산할 수 있으면서 $M^{-1}A$ 의 고윳값을 $1$ 근처로 모으는 $M$ 을 고른다.

고전적 분할, 불완전 분해, 다중격자, 영역 분할이 표준 선택이다. 이 가운데 어느 것도 모든 행렬에서 좋지 않고, 문제를 만든 미분방정식이나 [그래프](graphs.md)의 구조가 선택을 정한다.

# 직관

격자 간격이 $h$ 인 정사각 격자에서 Poisson 방정식을 5점 차분으로 이산화하면 미지수가 $n = h^{-2}$ 개인 대칭 양정부호 계가 나온다. [공액기울기법](krylov-subspace-methods.md)의 오차 상한은 조건수 $\kappa$ 로 $((\sqrt\kappa - 1)/(\sqrt\kappa + 1))^m$ 이고, 이 행렬의 조건수는 $h^{-2}$ 규모다. 오차를 $10^{-6}$ 으로 줄이는 데 드는 반복은 $\sqrt\kappa$ 에 비례하므로 $h^{-1}$ 규모, 곧 $h = 10^{-3}$ 에서 수천 번이다.

반복 횟수는 계수행렬의 고윳값 분포에만 달려 있다. 해를 바꾸지 않으면서 분포를 바꾸려면 가역행렬 $M$ 을 양변에 곱해 $M^{-1}Ax = M^{-1}b$ 를 푼다. $M = A$ 로 잡으면 계수행렬이 $I$ 가 되어 한 번에 끝나지만 $M^{-1}v$ 를 구하는 것이 원래 문제다. $M$ 은 $A$ 에 가까우면서 $M^{-1}v$ 가 싸야 한다.

대각 원소만 남긴 $M = \mathrm{diag}(A)$ 로 해 본다. 5점 차분 행렬의 대각은 전부 $4/h^2$ 로 같으므로 $M^{-1}A$ 는 $A$ 의 상수배이고 고윳값 분포의 모양이 그대로다. 조건수가 줄지 않는다. 대각은 격자점 사이의 이웃 관계를 하나도 담지 않는다.

이웃 관계를 담으려면 소거를 해야 하는데, 소거는 $0$ 이던 자리를 채워 비용을 키운다. 채움을 $A$ 의 비영 자리로 제한하고 나머지는 버린다. 남는 $M = LL^{\top}$ 는 $A$ 와 같은 희소 패턴을 갖고 $M^{-1}v$ 는 삼각 풀기 두 번이며, 버린 성분이 작으면 $M$ 이 $A$ 에 가깝다. 이 방식으로 격자 문제의 조건수가 $h^{-1}$ 규모까지 내려간다.[^1]

# 정의

## 전처리된 계

가역행렬 $M$ 에 대해 다음 세 계를 각각 왼쪽, 오른쪽, 양쪽 **전처리**라 한다.

$$
M^{-1}Ax = M^{-1}b, \qquad AM^{-1}y = b \thinspace\thinspace (x = M^{-1}y), \qquad L^{-1}AL^{-\top}y = L^{-1}b
$$

셋째 형태는 $M = LL^{\top}$ 로 쪼갤 때 쓰고, 계수행렬의 대칭과 양정부호를 보존한다. $M$ 을 **전처리 행렬**이라 한다.

## 전처리된 공액기울기법

$L^{-1}AL^{-\top}$ 를 직접 만들지 않고 잔차에 $M^{-1}$ 을 한 번 적용하는 것으로 같은 반복을 얻는다.

```javascript
// solveM(r) 이 M z = r 을 푼다. matvec(v) 가 A 와 벡터의 곱을 준다.
function pcg(matvec, solveM, b, x0, steps) {
  let x = x0
  let r = sub(b, matvec(x))
  let z = solveM(r)
  let p = z
  let rz = dot(r, z)
  for (let k = 0; k < steps; k++) {
    const Ap = matvec(p)
    const alpha = rz / dot(p, Ap)
    x = add(x, scale(p, alpha))
    r = sub(r, scale(Ap, alpha))
    z = solveM(r)
    const rzNext = dot(r, z)
    p = add(z, scale(p, rzNext / rz))       // 방향을 M-내적에서 공액으로 유지한다
    rz = rzNext
  }
  return x
}
```

한 반복에 드는 추가 비용은 $M z = r$ 을 한 번 푸는 것뿐이다.

# 성질

## 스펙트럼 등가

$A$ 와 $M$ 이 대칭 양정부호이고 모든 $x \neq 0$ 에서

$$
c\_1 \thinspace x^{\top} M x \thinspace\le\thinspace x^{\top} A x \thinspace\le\thinspace c\_2 \thinspace x^{\top} M x
$$

이면 $\kappa(M^{-1}A) \le c\_2/c\_1$ 이다.

$M^{-1}A$ 는 $M$-내적에서 대칭이므로 고윳값이 실수이고 Rayleigh 몫 $x^{\top}Ax / x^{\top}Mx$ 의 범위 안에 있다. 그 범위가 $\lbrack c\_1, c\_2\rbrack$ 이다. ∎

반복 횟수는 $\sqrt{c\_2/c\_1}$ 에 비례하므로, 격자 간격에 무관한 $c\_1, c\_2$ 를 주는 $M$ 을 찾는 것이 전처리 설계의 목표다.

## 고전적 분할

$A = D - E - F$ 를 대각, 아래삼각, 위삼각으로의 분할이라 할 때 $M = D$ 가 Jacobi, $M = D - E$ 가 Gauss–Seidel, $M = (D - \omega E)D^{-1}(D - \omega F)/(2 - \omega)$ 가 SSOR(symmetric successive over-relaxation) 전처리다.

같은 $M$ 이 정지 반복법 $x\_{k+1} = x\_k + M^{-1}(b - Ax\_k)$ 를 정의한다. 이 반복은 $\rho(I - M^{-1}A) \lt 1$ 일 때 수렴하고, 여기서 $\rho$ 는 스펙트럼 반지름이다. 전처리로 쓸 때는 수렴이 아니라 $M^{-1}A$ 의 고윳값이 모이는지만 문제가 된다.

## 불완전 분해

비영 자리의 집합 $S$ 를 정하고, Gauss 소거를 하되 $(i,j) \notin S$ 인 자리에 생기는 값을 버린 것을 **불완전 $LU$ 분해**라 한다. 대칭 양정부호에서 같은 절차를 Cholesky 분해에 적용한 것이 **불완전 Cholesky 분해**다. $S$ 를 $A$ 의 비영 패턴으로 잡은 것을 $\mathrm{ILU}(0)$, 소거를 $k$ 단계까지 번지게 허용한 것을 $\mathrm{ILU}(k)$ 라 한다.

비대각 성분이 모두 $0$ 이하이고 역행렬의 성분이 모두 $0$ 이상인 행렬을 **M-행렬**이라 한다. 5점 차분 행렬이 그 예다.

**정리**[^2]**.** $A$ 가 M-행렬이면 $\mathrm{ILU}(0)$ 이 존재하고 두 삼각인자가 모두 가역이다.

소거 과정에서 나오는 축이 양수로 유지됨을 M-행렬의 부호 조건으로 보인다. 일반 대칭 양정부호 행렬에서는 축이 음수가 되어 분해가 끊길 수 있고, 대각을 키워 막는다. ∎

## 다중격자

[다중격자](multigrid.md)는 격자를 여러 단계로 두고 완화와 성긴 격자 보정을 재귀로 쌓는다. V 사이클 한 번의 비용이 $O(n)$ 이고 수렴률이 격자 간격과 무관하므로, 사이클 한 번을 $M^{-1}v$ 로 쓰면 스펙트럼 등가 상수가 $h$ 에 의존하지 않는다.

## 영역 분할

[영역 분할법](domain-decomposition.md)은 정의역을 부분영역으로 쪼개고 각 부분에서 계를 따로 푼 결과를 더한다. 겹치는 부분영역에 성긴 공간 항을 하나 더하면 조건수 상한이 부분영역의 개수와 무관해지고, 각 부분 문제의 풀이가 독립이라 병렬 계산에 쓴다.

# 활용

- 편미분방정식을 이산화한 계에서 반복 횟수를 정한다. 확산 항이 지배하는 문제는 다중격자가, 이류 항이 섞이면 방향을 따르는 불완전 분해가 쓰인다.
- 내부점 방법의 각 단계에서 나오는 Newton 계가 진행에 따라 조건수가 커지므로, 장벽 항의 구조를 반영한 $M$ 을 쓴다. [경사하강법](gradient-descent.md)에서 좌표 변환으로 조건수를 낮추는 것과 같은 조작이다.
- [그래프 Laplacian](graph-laplacian.md) 계를 풀 때 [스펙트럼 희소화](spectral-sparsification.md)로 얻은 간선 수가 적은 그래프의 Laplacian 을 $M$ 으로 쓴다. 이차형식이 $1 \pm \epsilon$ 배 안에 들어간다는 보장이 그대로 스펙트럼 등가 상수다.
- [고윳값](eigenvalues.md) 계산에서 $\sigma$ 근처의 고윳값을 찾을 때 $(A - \sigma I)^{-1}$ 을 곱하는 대신 그 계를 전처리된 반복법으로 푼다.

[^1]: I. Gustafsson, "A class of first order factorization methods", *BIT Numerical Mathematics* 18 (1978), 142–156. 수정 불완전 Cholesky 분해가 2차원 격자 문제의 조건수를 $h^{-2}$ 에서 $h^{-1}$ 규모로 낮춤을 보인다.

[^2]: J. A. Meijerink and H. A. van der Vorst, "An iterative solution method for linear systems of which the coefficient matrix is a symmetric M-matrix", *Mathematics of Computation* 31 (1977), 148–162.

# 연관 문서

## 선수지식

- [Krylov 부분공간 방법](krylov-subspace-methods.md)

## 더 알아보기

- [다중격자](multigrid.md)

#linear_algebra #algorithms #computation
