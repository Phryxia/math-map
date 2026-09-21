# Krylov 부분공간 방법

# 개요

Krylov 부분공간 방법은 행렬 $A$ 를 분해하지 않고 행렬-벡터 곱만으로 선형계 $Ax = b$ 를 풀거나 고윳값을 근사하는 반복법이다. 곱을 되풀이해 얻은 벡터들이 펼치는 공간 $\mathrm{span}\lbrace b, Ab, \dots, A^{m-1}b\rbrace$ 안에서 근사해를 고른다.

무엇을 최소화하느냐가 방법을 가른다. 잔차를 부분공간에 수직으로 두면 공액기울기법이고, 잔차의 크기를 최소화하면 GMRES(generalized minimal residual)다. 수렴 속도는 $A$ 의 스펙트럼이 어떻게 모여 있는지로 정해진다.

# 직관

격자 위의 편미분방정식을 이산화하면 미지수가 $n = 10^6$ 개인 선형계가 나온다. 각 격자점이 이웃 넷과만 관계하므로 $A$ 의 한 행에는 비영 원소가 다섯 개뿐이다.

[$LU$ 분해](matrix-factorizations.md)로 풀어 본다. 소거를 시작하면 원래 $0$ 이던 자리가 채워진다. 2차원 격자를 줄 단위로 번호 매기면 소거 뒤 $L$ 의 비영 원소가 $n^{3/2}$ 개까지 늘고 연산은 $n^2$ 번이다. $n = 10^6$ 이면 저장할 수가 $10^9$ 개, 연산이 $10^{12}$ 번이다. 반면 $Av$ 를 계산하는 데는 곱셈이 $5n = 5 \times 10^6$ 번 든다.

곱셈만으로 해에 다가갈 수 있는지 본다. $A$ 의 특성다항식을 $\lambda^n + c_{n-1}\lambda^{n-1} + \dots + c_0$ 이라 하면 Cayley–Hamilton 정리로 $A^n + c_{n-1}A^{n-1} + \dots + c_0 I = 0$ 이다. $A$ 가 가역이면 $c_0 \neq 0$ 이므로 양변에 $A^{-1}$ 을 곱해 정리한다.

$$
A^{-1} \thinspace=\thinspace -\frac{1}{c_0}\left(A^{n-1} + c_{n-1}A^{n-2} + \dots + c_1 I\right)
$$

해 $x = A^{-1}b$ 는 따라서 $b, Ab, \dots, A^{n-1}b$ 의 일차결합이고, 이 벡터들은 곱셈만으로 얻는다. $n$ 개를 다 만들면 비용이 원래대로 돌아가므로 앞의 $m$ 개에서 끊고 그 $m$ 차원 공간 안에서 가장 좋은 근사를 고른다.

# 정의

## Krylov 부분공간

행렬 $A$ 와 벡터 $v$ 에 대해 다음 공간을 $m$ 차 **Krylov 부분공간**이라 한다.

$$
\mathcal K_m(A, v) \thinspace=\thinspace \mathrm{span}\lbrace v, Av, A^2v, \dots, A^{m-1}v\rbrace
$$

$v, Av, \dots$ 는 서로 거의 같은 방향으로 몰리므로 기저로 쓰기에 나쁘다. 실제 계산은 이 공간의 정규직교기저를 만들어 쓴다.

## Arnoldi 반복과 Lanczos 반복

$q_1 = v/\Vert v\Vert$ 에서 시작해 $Aq_j$ 를 앞의 기저에 [직교](inner-product-spaces.md)화하는 절차를 **Arnoldi 반복**이라 한다. 결과는 정규직교 열을 갖는 $Q_m$ 과 상 Hessenberg 행렬 $\tilde H_m$ 이고 다음을 만족한다.

$$
A Q_m \thinspace=\thinspace Q_{m+1} \tilde H_m, \qquad Q_m^{\top} A Q_m \thinspace=\thinspace H_m
$$

$A$ 가 대칭이면 $H_m$ 이 삼중대각이 되어 직교화가 바로 앞 두 벡터에만 걸린다. 이 형태를 **Lanczos 반복**이라 한다.[^1]

```javascript
// 대칭 A 에 대한 Lanczos 반복. matvec(v) 가 A 와 벡터의 곱을 준다.
function lanczos(matvec, b, m) {
  const q = [normalize(b)]
  const alpha = [], beta = []
  let qPrev = zeros(b.length), betaPrev = 0
  for (let j = 0; j < m; j++) {
    let w = matvec(q[j])
    alpha[j] = dot(q[j], w)
    w = sub(w, add(scale(q[j], alpha[j]), scale(qPrev, betaPrev)))
    betaPrev = norm(w)
    if (betaPrev === 0) break              // 불변 부분공간에 닿았다
    beta[j] = betaPrev
    qPrev = q[j]
    q.push(scale(w, 1 / betaPrev))
  }
  return { q, alpha, beta }                // alpha 가 대각, beta 가 부대각인 삼중대각 행렬
}
```

## 근사해를 고르는 조건

$x_0$ 를 초기 추측, $r_0 = b - Ax_0$ 라 하고 $x_m \in x_0 + \mathcal K_m(A, r_0)$ 를 찾는다. 두 조건이 표준이다.

| 조건 | 식 | 방법 |
| --- | --- | --- |
| Galerkin | $r_m \perp \mathcal K_m(A, r_0)$ | 공액기울기법 |
| 최소잔차 | $\Vert r_m\Vert$ 이 최소 | GMRES |

$A$ 가 대칭 양정부호이면 Galerkin 조건을 쓰는 방법이 **공액기울기법**(conjugate gradient, CG)이고, 삼항 점화식으로 갱신되어 한 반복에 벡터 세 개만 저장한다.[^2] 대칭이 아닌 행렬에서 최소잔차 조건을 쓰는 방법이 GMRES 이고, Arnoldi 기저를 전부 저장해야 하므로 보통 $m$ 을 정해 다시 시작한다.[^3] 대칭이면서 양정부호가 아닌 행렬에는 Lanczos 반복 위에서 같은 조건을 쓰는 최소잔차법을 쓴다.

# 성질

## 공액기울기법의 수렴

**정리.** $A$ 가 대칭 양정부호이고 조건수가 $\kappa$ 이면 다음이 성립한다.

$$
\Vert x - x_m\Vert_A \thinspace\le\thinspace 2\left(\frac{\sqrt\kappa - 1}{\sqrt\kappa + 1}\right)^m \Vert x - x_0\Vert_A
$$

Galerkin 조건은 $A$-노름 오차를 $x_0 + \mathcal K_m$ 위에서 최소화하는 것과 같다. 오차는 $p(A)(x - x_0)$ 꼴로 쓰이고 $p$ 는 $p(0) = 1$ 인 $m$ 차 다항식이므로, 상한은 $A$ 의 스펙트럼 구간에서 $\vert p\vert$ 를 최소화하는 문제가 된다. 그 최소를 주는 것이 구간 위의 Chebyshev 다항식이고, 값을 계산하면 위 식이 나온다. ∎

고윳값이 몇 덩어리로 뭉쳐 있으면 그 개수 차수의 다항식이 거의 $0$ 이 되므로 조건수가 커도 수렴이 빠르다. 조건수만 보는 위 상한은 이 경우 실제보다 느슨하다.

## 유한 종료

**정리.** 정확한 산술에서 Krylov 방법은 $r_0$ 에 대한 $A$ 의 최소다항식 차수 $d$ 번째 반복에서 정확한 해를 준다.

$\mathcal K_m(A, r_0)$ 의 차원은 $m$ 이 $d$ 에 이를 때까지 $1$ 씩 늘다가 그 뒤로 멈추고, $\mathcal K_d$ 가 $A$-불변이므로 해가 그 안에 있다. ∎

부동소수점 산술에서는 이 성질이 성립하지 않는다. Lanczos 반복이 만든 벡터들은 어떤 고윳값 방향의 성분이 커지면서 직교성을 잃고, 그 결과 같은 Ritz 값이 여러 번 나타난다.[^4] 대책은 재직교화이고, 선형계를 푸는 용도에서는 유한 종료를 포기하고 반복법으로 쓴다.

## Ritz 값

$H_m$ 의 고윳값을 **Ritz 값**이라 하고 $A$ 의 고윳값 근사로 쓴다. 스펙트럼의 양 끝에 있는 고윳값이 먼저 수렴하고, 끝 고윳값이 나머지에서 떨어져 있을수록 빠르다.

## 전처리

가역행렬 $M$ 을 골라 $M^{-1}Ax = M^{-1}b$ 를 대신 푸는 것을 **전처리**라 한다. $M$ 은 $A$ 에 가까우면서 $M^{-1}v$ 를 싸게 계산할 수 있어야 하고, 불완전 Cholesky 분해와 대수적 다중격자가 표준 선택이다. 수렴 속도가 $M^{-1}A$ 의 스펙트럼으로 정해지므로 전처리가 실제 성능을 지배한다.

# 활용

- 편미분방정식을 이산화한 큰 희소 계를 푸는 표준 방법이다. 유한요소법과 유한차분법이 만드는 강성행렬이 대칭 양정부호라 공액기울기법이 그대로 쓰인다.
- 큰 행렬의 극단 [고윳값](eigenvalues.md)을 Lanczos 반복으로 구한다. [스펙트럼 정리](spectral-theorem.md)가 보장하는 직교 고유기저를 전부 만들지 않고 몇 개만 얻는 절차다.
- Newton 방향을 구할 때 Hessian 을 만들지 않고 Hessian-벡터 곱만으로 계를 푼다. [경사하강법](gradient-descent.md)이 이차형식에서 느린 것과 달리 공액기울기법은 같은 정보로 $\kappa$ 대신 $\sqrt\kappa$ 규모의 반복을 쓴다.
- 행렬함수 $f(A)v$ 를 계산한다. $Q_m f(H_m) e_1 \Vert v\Vert$ 로 근사하면 작은 행렬에서만 $f$ 를 계산하면 되고, 지수함수와 제곱근에 쓰인다.

[^1]: C. Lanczos, "An iteration method for the solution of the eigenvalue problem of linear differential and integral operators", *Journal of Research of the National Bureau of Standards* 45 (1950), 255–282.

[^2]: M. R. Hestenes and E. Stiefel, "Methods of conjugate gradients for solving linear systems", *Journal of Research of the National Bureau of Standards* 49 (1952), 409–436.

[^3]: Y. Saad and M. H. Schultz, "GMRES: a generalized minimal residual algorithm for solving nonsymmetric linear systems", *SIAM Journal on Scientific and Statistical Computing* 7 (1986), 856–869.

[^4]: C. C. Paige, "Computational variants of the Lanczos method for the eigenproblem", *Journal of the Institute of Mathematics and Its Applications* 10 (1972), 373–381. 반올림 오차가 직교성을 잃게 하는 과정과 그 결과 나타나는 Ritz 값의 중복을 분석한다.

# 연관 문서

## 선수지식

- [행렬 분해](matrix-factorizations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #optimization #computation
