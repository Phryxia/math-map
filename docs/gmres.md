# GMRES

# 개요

**GMRES(generalized minimal residual method)** 는 행렬-벡터 곱만으로 연립방정식 $Ax=b$ 의 근사해를 만들어 가되, 지금까지 곱해 얻은 벡터들의 일차결합 가운데 잔차 $b-Ax$ 의 길이가 가장 작은 것을 고르는 반복법이다. 대류가 있는 확산 방정식을 이산화한 계처럼 [행렬](matrices.md)이 대칭이 아니면 [공액기울기법](conjugate-gradient.md)의 걸음 공식이 성립하지 않아 반복이 잔차를 줄인다는 보장이 없다. GMRES 는 매 걸음 작은 최소제곱 문제를 풀어 잔차의 길이가 늘지 않게 하고, 그 길이를 해를 만들기 전에 계산해 멈출 때를 정한다.

# 직관

$A=\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$, $b=(0,1)$ 이고 $A$ 와 벡터의 곱만 계산할 수 있다고 하자. $x_0=0$ 에서 잔차는 $b$ 다. 첫 근사해를 $x_1=\alpha b$ 로 잡으면 $Ab=(1,1)$ 이므로 잔차는 $b-\alpha Ab=(-\alpha,1-\alpha)$ 이다. 길이의 제곱 $\alpha^2+(1-\alpha)^2$ 은 $\alpha=1/2$ 에서 가장 작고, $x_1=(0,1/2)$ 의 잔차 $(-1/2,1/2)$ 는 길이가 $1/\sqrt2$ 다.

둘째 걸음은 $b$ 와 $Ab$ 의 일차결합 전체에서 고른다. 두 벡터가 평면을 펼치므로 정확한 해 $x=(-1,1)$ 이 그 안에 있고 잔차가 $0$ 이 된다. 걸음마다 고르는 범위가 넓어지므로 잔차의 길이는 늘지 않는다.

$b, Ab, A^2b,\dots$ 를 그대로 쓰면 벡터들이 한 방향으로 몰려 최소화 계산이 부정확해진다. 그래서 곱할 때마다 앞의 벡터들에 직교화한다. $q_1=b=(0,1)$ 에서 $Aq_1=(1,1)$ 의 $q_1$ 성분 $1$ 을 빼면 $(1,0)$ 이 남아 $q_2=(1,0)$ 이다. 이 기저로 첫 걸음의 문제는 $(1,0)-y(1,1)$ 의 길이를 최소화하는 것이 된다. $(1,1)$ 을 $45°$ 돌려 $(\sqrt2,0)$ 으로 보내는 회전을 $(1,0)$ 에 쓰면 $(1/\sqrt2,-1/\sqrt2)$ 이고, 둘째 성분의 절댓값 $1/\sqrt2$ 가 $y$ 를 구하기 전에 나온 잔차의 길이다.

# 정의

$x_0$ 을 초기 추측, $r_0=b-Ax_0$, $\beta=\Vert r_0\Vert$ 라 하자. GMRES 의 $m$ 번째 근사해 $x_m$ 은 [Krylov 부분공간 방법](krylov-subspace-methods.md)의 Krylov 부분공간 위에서 잔차의 2 노름을 최소화하는 벡터다[^1].

$$
x_m=\mathop{\mathrm{argmin}}\_{x\in x_0+\mathcal K_m(A,r_0)}\Vert b-Ax\Vert
$$

Arnoldi 반복(Arnoldi iteration)이 주는 $AQ_m=Q_{m+1}\tilde H_m$ 에서 $x=x_0+Q_my$ 로 쓰면 $b-Ax=Q_{m+1}(\beta e_1-\tilde H_my)$ 이고, $Q_{m+1}$ 의 열이 정규직교이므로 문제는 $(m+1)\times m$ 최소제곱 문제가 된다.

$$
y_m=\mathop{\mathrm{argmin}}\_{y\in\mathbb R^m}\Vert\beta e_1-\tilde H_my\Vert,\qquad x_m=x_0+Q_my_m
$$

직관 절은 $x_0=0$, $\beta=1$, $\tilde H_1=(1,1)^{\mathsf T}$ 이고 $y_1=1/2$ 이다. $\tilde H_m$ 은 위 Hessenberg 행렬이므로 [Givens 회전](givens-rotation.md) $m$ 개로 위삼각 꼴이 되고, 회전을 같이 쓴 $\beta e_1$ 의 마지막 성분의 절댓값이 $\Vert b-Ax_m\Vert$ 다. 직관 절의 $45°$ 회전이 $c=s=1/\sqrt2$ 인 Givens 회전이다.

**재시작 GMRES(restarted GMRES)** 는 $m$ 걸음마다 $x_0\leftarrow x_m$ 으로 두고 기저를 버린 뒤 다시 시작하는 판본이고, GMRES($m$) 으로 쓴다.

```javascript
// matvec(v) 가 A 와 벡터의 곱을 준다. tol 은 상대 잔차의 기준
function gmres(matvec, b, x0, m, tol) {
  const r0 = sub(b, matvec(x0));
  const beta = norm(r0);
  const Q = [scale(r0, 1 / beta)];
  const H = [];                       // H[j][i] 가 Hessenberg 행렬의 (i, j) 성분
  const rot = [];                     // 앞서 쓴 Givens 회전들의 (c, s)
  const g = [beta];                   // 회전을 같이 쓴 beta e_1
  let k = 0;
  for (; k < m; k++) {
    let w = matvec(Q[k]);
    const h = [];
    for (let i = 0; i <= k; i++) { h[i] = dot(Q[i], w); w = sub(w, scale(Q[i], h[i])); }
    h[k + 1] = norm(w);
    const hNext = h[k + 1];             // 회전 전의 값. 0 이면 정확한 해에 닿았다
    for (let i = 0; i < k; i++) applyRotation(rot[i], h, i);   // 새 열에 앞의 회전을 쓴다
    rot[k] = givens(h[k], h[k + 1]);
    applyRotation(rot[k], h, k);                                // h[k+1] 을 0 으로 만든다
    g[k + 1] = -rot[k].s * g[k];
    g[k] = rot[k].c * g[k];
    H.push(h);
    if (Math.abs(g[k + 1]) <= tol * beta || hNext === 0) { k++; break; }
    Q.push(scale(w, 1 / hNext));
  }
  const y = backSubstitute(H, g, k);  // 위삼각 계를 아래에서부터 푼다
  return add(x0, combine(Q, y));
}
```

# 성질

## 다항식 꼴의 최소화

$x_m-x_0\in\mathcal K_m(A,r_0)$ 이므로 $r_m=p(A)r_0$ 이고 $p$ 는 차수 $m$ 이하, $p(0)=1$ 인 다항식이다. 그런 다항식의 집합을 $\mathcal P_m$ 이라 하면 다음이 성립한다.

$$
\Vert r_m\Vert=\min_{p\in\mathcal P_m}\Vert p(A)r_0\Vert
$$

직관 절의 $x_1$ 은 $p(z)=1-z/2$ 이고 $p(A)b=(-1/2,1/2)$ 다. $\mathcal P_m\subset\mathcal P_{m+1}$ 이므로 $\Vert r_m\Vert$ 는 단조 감소한다.

## 유한 종료

$A$ 가 가역이면 GMRES 는 $r_0$ 의 [최소다항식](minimal-polynomial.md)의 차수, 곧 $q(A)r_0=0$ 인 최고차 계수 $1$ 의 다항식 $q$ 의 가장 작은 차수에서 정확한 해에 닿는다. 이 차수는 $n$ 이하다. $q(0)\ne 0$ 이므로 $q(z)/q(0)$ 이 $\mathcal P_m$ 에 들고 $r_0$ 을 $0$ 으로 보낸다. 같은 걸음에서 Arnoldi 반복의 $h_{m+1,m}$ 이 $0$ 이 된다. 직관 절에서는 $Aq_2=(1,0)$ 에서 $q_1$, $q_2$ 성분을 빼면 $0$ 이 남아 $h_{32}=0$ 이고 $m=2$ 에서 끝난다.

## 고윳값에 의한 상한

$A=V\Lambda V^{-1}$ 로 대각화되면 $p(A)=Vp(\Lambda)V^{-1}$ 이므로 다음이 성립한다[^1].

$$
\frac{\Vert r_m\Vert}{\Vert r_0\Vert}\le\kappa(V)\min_{p\in\mathcal P_m}\max_i\vert p(\lambda_i)\vert,\qquad\kappa(V)=\Vert V\Vert\thinspace\Vert V^{-1}\Vert
$$

정규행렬은 $V$ 를 유니터리로 잡아 $\kappa(V)=1$ 이다. 고윳값이 중심 $c$, 반지름 $\rho\lt\vert c\vert$ 인 원판 안에 있으면 $p(z)=(1-z/c)^m$ 으로 상한 $\kappa(V)(\rho/\vert c\vert)^m$ 이 나온다.

## 고윳값만으로 정해지지 않는 수렴

Greenbaum–Pták–Strakoš 정리(Greenbaum–Pták–Strakoš theorem). 증가하지 않는 양수열 $f_0\ge f_1\ge\dots\ge f_{n-1}\gt 0$ 과 $0$ 이 아닌 복소수 $n$ 개가 주어지면, 고윳값이 그 $n$ 개이고 GMRES 의 잔차가 $\Vert r_m\Vert=f_m$ 인 행렬과 초기 잔차가 존재한다[^2].

고윳값이 모여 있어도 $\kappa(V)$ 가 크거나 $A$ 가 대각화되지 않으면 수렴이 느릴 수 있다. 직관 절의 $A$ 는 고윳값이 $1$ 뿐이어서, 대각화 가능하다면 $A=I$ 이고 $p(z)=1-z$ 로 한 걸음에 끝났을 것이다. 대각화되지 않아 첫 걸음의 잔차가 $1/\sqrt2$ 로 남는다.

## 재시작과 정체

$A=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$, $b=(1,0)$, $x_0=0$ 이면 $Ab=(0,1)$ 이 $b$ 와 직교하므로 $\Vert b-\alpha Ab\Vert^2=1+\alpha^2$ 은 $\alpha=0$ 에서 가장 작다. GMRES(1) 은 $x_1=0$ 을 내고 재시작해도 같은 계산을 되풀이해 움직이지 않는다. 재시작 없는 GMRES 는 $m=2$ 에서 정확한 해 $(0,1)$ 에 닿는다. 재시작은 저장량을 $m+1$ 개의 벡터로 묶는 대신 이런 정체를 허용한다.

## 연산량과 짧은 점화식

$j$ 번째 걸음은 행렬-벡터 곱 한 번과 내적 $j+1$ 번이 들고, $m$ 걸음의 직교화가 $O(m^2n)$ 번의 연산과 벡터 $m+1$ 개의 저장을 쓴다. $A$ 가 대칭이면 $\tilde H_m$ 이 삼중대각이 되어 [Lanczos 반복](lanczos-iteration.md)의 세 항 점화식으로 같은 최소화를 하고, 이것이 MINRES(minimal residual method)다. Faber–Manteuffel 정리(Faber–Manteuffel theorem)에 따르면 짧은 점화식으로 어떤 내적의 노름에서 오차를 최소화하는 Krylov 방법은, 그 내적에 대한 $A$ 의 수반이 $A$ 의 낮은 차수 다항식인 행렬에서만 존재한다[^3]. 일반 비대칭 행렬에서 최소잔차를 지키려면 기저 전체를 저장해야 한다.

# 활용

- 비대칭 희소 계의 표준 풀이. [유한요소법](finite-element-method.md)으로 대류 항이 있는 방정식을 이산화하면 강성행렬이 대칭이 아니고, [불완전 LU 분해](incomplete-lu.md)로 [전처리](preconditioning.md)한 GMRES 로 푼다. 오른쪽 전처리는 원래 계의 잔차를 최소화하므로 멈춤 기준이 그대로 쓰인다.
- Jacobian 없는 Newton–Krylov 방법(Jacobian-free Newton–Krylov method). [Newton 법](newton-method.md)의 걸음마다 Jacobian 계 $J\delta=-F(x)$ 를 GMRES 로 풀고, $Jv$ 는 $(F(x+\varepsilon v)-F(x))/\varepsilon$ 으로 계산해 $J$ 를 만들지 않는다.
- [영역 분할법](domain-decomposition.md)의 승법 Schwarz 전처리(multiplicative Schwarz preconditioner). 부분영역을 차례로 푸는 전처리는 대칭이 아니므로 공액기울기법 대신 GMRES 와 함께 쓴다.

[^1]: Y. Saad and M. H. Schultz, "GMRES: a generalized minimal residual algorithm for solving nonsymmetric linear systems", *SIAM Journal on Scientific and Statistical Computing* 7 (1986), 856–869.
[^2]: A. Greenbaum, V. Pták, Z. Strakoš, "Any nonincreasing convergence curve is possible for GMRES", *SIAM Journal on Matrix Analysis and Applications* 17 (1996), 465–469.
[^3]: V. Faber and T. Manteuffel, "Necessary and sufficient conditions for the existence of a conjugate gradient method", *SIAM Journal on Numerical Analysis* 21 (1984), 352–362.

# 연관 문서

## 선수지식

- [Krylov 부분공간 방법](krylov-subspace-methods.md)
- [Givens 회전](givens-rotation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation
