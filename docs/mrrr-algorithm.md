# MRRR 알고리즘

# 개요

**MRRR 알고리즘(multiple relatively robust representations algorithm)** 은 대칭 삼중대각행렬의 고유벡터를 하나에 행렬 크기에 비례하는 연산으로, 서로 직교하게 구하는 방법이다. 고윳값이 $1+10^{-10}$ 과 $1+2\cdot 10^{-10}$ 인 두 고유벡터를 따로 구한다고 하자. 고윳값을 $10^{-16}$ 의 오차로 구해도 각 벡터의 방향은 그 오차를 두 고윳값의 차 $10^{-10}$ 으로 나눈 $10^{-6}$ 정도 틀어지고, 두 벡터의 내적도 $0$ 이 아니라 $10^{-6}$ 규모가 된다.

MRRR 알고리즘은 행렬에서 $I$ 를 뺀 행렬을 고윳값이 상대 오차로 정확히 정해지는 꼴로 다시 나타낸다. 그러면 두 고윳값은 $10^{-10}$ 과 $2\cdot 10^{-10}$, 곧 자기 크기만큼 떨어진 값이 되고, 각 고유벡터를 따로 구해도 직교성이 기계 정밀도 규모로 맞는다.

# 직관

대각이 $2$, 그 위아래가 $-1$ 인 $3\times 3$ [삼중대각계](tridiagonal-systems.md)의 계수행렬 $T$ 는 고윳값 $2$ 와 고유벡터 $(1,0,-1)$ 을 갖는다. 고윳값을 $\hat\lambda=2+\delta$, $\delta=10^{-8}$ 으로 조금 틀리게 구했다고 하자. $(T-\hat\lambda I)z=0$ 은 다음 세 식이다.

$$
\begin{aligned}
-\delta z_1-z_2&=0\cr
-z_1-\delta z_2-z_3&=0\cr
-z_2-\delta z_3&=0
\end{aligned}
$$

$\hat\lambda$ 가 고윳값이 아니므로 세 식을 다 만족하는 것은 $z=0$ 뿐이다. 그래서 식 하나를 버리고 $z$ 의 성분 하나를 $1$ 로 정한 뒤 나머지 두 식을 푼다.

첫 식을 버리고 $z_1=1$ 로 두면 셋째 식에서 $z_2=-\delta z_3$ 이고, 둘째 식에서 $z_3=-1/(1-\delta^2)$ 이다. $z\approx(1,\thinspace 10^{-8},\thinspace -1)$ 이 나오고, 버린 첫 식에 넣으면 좌변이 $0$ 대신 약 $-2\delta$ 다. 방향이 고유벡터 $(1,0,-1)$ 과 거의 같다.

둘째 식을 버리고 $z_2=1$ 로 두면 첫 식과 셋째 식에서 $z_1=z_3=-1/\delta=-10^8$ 이다. 정규화하면 방향이 $(1,0,1)$ 에 가깝고, 고유벡터 $(1,0,-1)$ 과 직교한다. 버린 둘째 식의 좌변은 $2/\delta-\delta$, 곧 $2\times 10^8$ 이다. 고유벡터의 가운데 성분이 $0$ 이므로 $z_2=1$ 로 맞춘 벡터는 고유벡터에 가까울 수 없다.

버린 식의 좌변에 남는 값이 작은 쪽을 고르면 고유벡터의 성분이 큰 자리를 고른 것이 된다. 남는 값은 위에서 내려오는 소거와 아래에서 올라오는 소거를 한 번씩 하면 모든 자리에서 한꺼번에 나오므로, 벡터 하나에 드는 연산이 $n$ 에 비례한다.

벡터 하나가 고유벡터에서 틀어진 각은 남는 값을 이웃 고윳값까지의 거리로 나눈 것 정도다. 개요의 두 고윳값처럼 이웃이 $10^{-10}$ 거리에 있으면 남는 값이 $10^{-16}$ 이어도 각이 $10^{-6}$ 이다. 행렬에서 $I$ 를 빼면 고윳값이 $10^{-10}$, $2\cdot 10^{-10}$ 이 되는데, 이 작은 고윳값을 상대 오차 $10^{-16}$ 으로, 곧 절대 오차 $10^{-26}$ 으로 구할 수 있는 꼴로 $T-I$ 를 적으면 남는 값도 그 규모로 줄어 각이 다시 $10^{-16}$ 규모가 된다.

# 정의

대칭 삼중대각행렬 $T$ 의 대각 성분을 $a_1,\dots,a_n$, 대각 바로 아래와 위의 성분을 $b_1,\dots,b_{n-1}$ 로 쓰고 $b_i\ne 0$ 이라 한다. $T$ 의 고윳값을 $\lambda_1,\dots,\lambda_n$, 단위 고유벡터를 $v_1,\dots,v_n$ 이라 한다.

## 비틀린 분해

실수 $\lambda$ 에 대해 $T-\lambda I$ 를 위에서 아래로 소거한 분해와 아래에서 위로 소거한 분해를 다음과 같이 쓴다.

$$
T-\lambda I=L^{+}D^{+}(L^{+})^{\mathsf T}=U^{-}D^{-}(U^{-})^{\mathsf T}
$$

두 분해는 다음 점화식으로 정해진다. $L^{+}$ 는 대각이 $1$ 인 아래 이중대각행렬, $U^{-}$ 는 대각이 $1$ 인 위 이중대각행렬, $D^{\pm}$ 는 대각행렬이다.

$$
\begin{aligned}
D_1^{+}&=a_1-\lambda,&L_i^{+}&=b_i/D_i^{+},&D_{i+1}^{+}&=a_{i+1}-\lambda-b_iL_i^{+}\cr
D_n^{-}&=a_n-\lambda,&U_i^{-}&=b_i/D_{i+1}^{-},&D_i^{-}&=a_i-\lambda-b_iU_i^{-}
\end{aligned}
$$

위 줄은 [삼중대각계](tridiagonal-systems.md)의 Thomas 알고리즘이 하는 소거와 같다. 각 자리 $k$ 에서 다음 값을 정한다.

$$
\gamma_k=D_k^{+}+D_k^{-}-(a_k-\lambda)
$$

$N_k$ 를 대각이 $1$ 이고, $1$ 열부터 $k-1$ 열까지는 대각 바로 아래에 $L_1^{+},\dots,L_{k-1}^{+}$ 를, $k+1$ 열부터 $n$ 열까지는 대각 바로 위에 $U_k^{-},\dots,U_{n-1}^{-}$ 를 둔 행렬로 정하면 다음이 성립한다.

$$
T-\lambda I=N_k\Delta_kN_k^{\mathsf T},\qquad \Delta_k=\mathrm{diag}(D_1^{+},\dots,D_{k-1}^{+},\gamma_k,D_{k+1}^{-},\dots,D_n^{-})
$$

이것을 자리 $k$ 에서의 **비틀린 분해(twisted factorization)** 라 한다. 위쪽 $k-1$ 행은 위에서 내려온 소거의 결과이고 아래쪽 $n-k$ 행은 아래에서 올라온 소거의 결과이며, 두 소거가 $k$ 행에서 만난다. 직관 절에서 $k$ 번째 식을 버리고 $z_k=1$ 로 두어 구한 벡터는 $N_k^{\mathsf T}z=e_k$ 의 해이고, 버린 식의 좌변에 남은 값이 $\gamma_k$ 다. 직관 절의 행렬에서 $\gamma_1=\gamma_3\approx -2\delta$, $\gamma_2=2/\delta-\delta$ 다.

## 비틀린 벡터의 계산

$\lambda$ 를 고윳값의 근삿값 $\hat\lambda$ 로 두고 $\vert\gamma_k\vert$ 가 가장 작은 $k$ 를 골라 $N_k^{\mathsf T}z=e_k$ 를 푼다. 이 해는 $z_k=1$ 에서 시작해 위아래로 한 성분씩 정해진다.

```javascript
// a: 대각 n 개, b: 비대각 n-1 개, lam: 고윳값의 근삿값
function twistedVector(a, b, lam) {
  const n = a.length;
  const Dp = new Array(n), Lp = new Array(n - 1);
  const Dm = new Array(n), Um = new Array(n - 1);
  Dp[0] = a[0] - lam;
  for (let i = 0; i < n - 1; i++) {
    Lp[i] = b[i] / Dp[i];
    Dp[i + 1] = a[i + 1] - lam - b[i] * Lp[i];
  }
  Dm[n - 1] = a[n - 1] - lam;
  for (let i = n - 2; i >= 0; i--) {
    Um[i] = b[i] / Dm[i + 1];
    Dm[i] = a[i] - lam - b[i] * Um[i];
  }
  let k = 0, best = Infinity;
  for (let i = 0; i < n; i++) {
    const g = Dp[i] + Dm[i] - (a[i] - lam);
    if (Math.abs(g) < best) { best = Math.abs(g); k = i; }
  }
  const z = new Array(n).fill(0);
  z[k] = 1;
  for (let i = k - 1; i >= 0; i--) z[i] = -Lp[i] * z[i + 1];
  for (let i = k; i < n - 1; i++) z[i + 1] = -Um[i] * z[i];
  return { z, k, gamma: best };
}
```

MRRR 알고리즘의 실제 계산은 $T$ 의 성분 $a_i,b_i$ 가 아니라 아래 절의 $LDL^{\mathsf T}$ 의 성분에서 같은 두 소거를 [dqds 알고리즘](dqds-algorithm.md)과 같은 꼴의 점화식으로 한다.

## 상대 간격

고윳값 $\lambda_j\ne 0$ 의 **상대 간격(relative gap)** 은 다음 값이다.

$$
\mathrm{relgap}(\lambda_j)=\min_{i\ne j}\frac{\vert\lambda_i-\lambda_j\vert}{\vert\lambda_j\vert}
$$

개요의 두 고윳값 $1+10^{-10}$, $1+2\cdot 10^{-10}$ 의 상대 간격은 약 $10^{-10}$ 이고, $I$ 를 뺀 뒤의 $10^{-10}$, $2\cdot 10^{-10}$ 의 상대 간격은 각각 $1$ 과 $1/2$ 이다.

## 상대적으로 견고한 표현

대칭행렬을 정하는 수 $x_1,\dots,x_m$ 의 묶음을 그 행렬의 표현이라 한다. 각 $x_i$ 를 $x_i(1+\eta_i)$, $\vert\eta_i\vert\le\eta$ 로 바꿀 때 고윳값 $\lambda_j$ 의 상대 변화가 $\eta$ 의 상수 배 이하이고 고유벡터의 각 변화가 $\eta/\mathrm{relgap}(\lambda_j)$ 의 상수 배 이하이면, 그 표현을 $\lambda_j$ 에 대한 **상대적으로 견고한 표현(relatively robust representation, RRR)** 이라 한다[^1].

같은 행렬도 표현에 따라 다르다. 행렬

$$
A=\begin{pmatrix}1&1\cr 1&1+\mu\end{pmatrix},\qquad \mu=10^{-6}
$$

의 작은 고윳값은 약 $\mu/2=5\times 10^{-7}$ 이다. 성분 $a_1=1$ 을 $1+10^{-8}$ 로 바꾸면 이 고윳값이 1% 바뀐다. 같은 행렬을 $LDL^{\mathsf T}$ 로 쓰면 $D=\mathrm{diag}(1,\mu)$, $L$ 의 대각 아래 성분은 $1$ 이고, 이 세 수를 각각 상대적으로 $10^{-8}$ 이하로 바꾸면 작은 고윳값의 상대 변화는 $10^{-8}$ 의 몇 배 안이다. 성분 표현은 작은 고윳값에 대해 견고하지 않고 $LDL^{\mathsf T}$ 표현은 견고하다.

양의 정부호 삼중대각행렬의 $LDL^{\mathsf T}$ 에서 $LD^{1/2}$ 는 이중대각 Cholesky 인수다. 이중대각행렬의 특이값은 성분의 상대 섭동에 대해 상대적으로 조금만 움직이므로, 이 표현은 모든 고윳값에 대한 RRR 이다[^1].

## 표현 나무

MRRR 알고리즘은 표현을 마디로 하는 나무를 만든다. 이것을 **표현 나무(representation tree)** 라 한다.

1. 뿌리. 스펙트럼의 한쪽 끝 가까이의 $\sigma_0$ 로 $T-\sigma_0I=L_0D_0L_0^{\mathsf T}$ 를 만든다. $T-\sigma_0I$ 가 정부호이므로 이 표현은 모든 고윳값에 대한 RRR 이다.
2. 고윳값. 마디의 표현에서 고윳값을 상대 정확도로 구한다. 이분법이나 dqds 를 쓴다.
3. 나누기. 상대 간격이 문턱값 $\tau$ 이상인 고윳값은 홀로 선 고윳값이고, 나머지는 서로 가까운 것끼리 묶음을 이룬다. LAPACK(Linear Algebra PACKage)의 구현은 $\tau=10^{-3}$ 을 쓴다[^2].
4. 홀로 선 고윳값은 그 마디의 표현에서 비틀린 벡터를 계산한다.
5. 묶음마다 묶음의 끝 가까이에 $\sigma$ 를 골라 $LDL^{\mathsf T}-\sigma I=L_cD_cL_c^{\mathsf T}$ 를 만들어 자식 마디로 삼는다. 묶음의 고윳값은 자식에서 $\sigma$ 만큼 작아지므로 상대 간격이 커진다. 자식 마디에서 2 단계부터 되풀이한다.

```javascript
// rep: 표현 {L, D}, eigs: rep 의 고윳값 근삿값, shift: 뿌리부터 뺀 이동량의 합
function mrrrNode(rep, eigs, shift, tau, out) {
  for (const group of splitByRelativeGap(eigs, tau)) {
    if (group.length === 1) {
      const lam = refine(rep, group[0]);
      out.push({ value: lam + shift, vector: twistedVectorLDL(rep, lam) });
    } else {
      const sigma = chooseShiftNear(group);
      const child = shiftRepresentation(rep, sigma); // LDL^T - sigma I 를 L_c D_c L_c^T 로
      const childEigs = group.map((lam) => refine(child, lam - sigma));
      mrrrNode(child, childEigs, shift + sigma, tau, out);
    }
  }
}
```

`shiftRepresentation` 은 $L$, $D$ 에서 $L_c$, $D_c$ 를 dqds 의 이동 단계와 같은 꼴의 점화식으로 만든다. 이 점화식은 $L$, $D$ 의 각 성분을 상대적으로 기계 정밀도 규모만큼 바꾼 표현에서 정확히 이동한 결과를 내고, 그 결과도 각 성분을 같은 규모로 바꾸면 계산값과 일치한다[^1].

# 성질

## 남는 값과 잔차

$z$ 를 자리 $k$ 의 비틀린 분해에서 $N_k^{\mathsf T}z=e_k$ 의 해라 하자. $N_k$ 의 $k$ 열은 $e_k$ 이므로 $N_ke_k=e_k$ 이고, 다음이 성립한다.

$$
(T-\hat\lambda I)z=N_k\Delta_kN_k^{\mathsf T}z=N_k\Delta_ke_k=\gamma_ke_k
$$

잔차가 $k$ 행에만 있고 그 크기가 $\vert\gamma_k\vert$ 다. 같은 식에서 $e_k^{\mathsf T}(T-\hat\lambda I)^{-1}e_k=1/\gamma_k$ 이므로 다음이 나온다.

$$
\frac{1}{\gamma_k}=\sum_{i=1}^n\frac{v_i(k)^2}{\lambda_i-\hat\lambda}
$$

$\hat\lambda$ 가 $\lambda_j$ 에 가까우면 $i=j$ 항이 합을 차지하므로 $\vert\gamma_k\vert$ 가 가장 작은 자리는 $\vert v_j(k)\vert$ 가 큰 자리다. 직관 절의 $k=2$ 에서는 $v_j(2)=0$ 이라 그 항이 없고 $\gamma_2$ 가 컸다.

## 잔차의 상한

어느 $k$ 에 대해서나 다음이 성립한다[^3].

$$
\frac{\Vert(T-\hat\lambda I)z\Vert}{\Vert z\Vert}\le\frac{\vert\lambda_j-\hat\lambda\vert}{\vert v_j(k)\vert}
$$

증명의 요지. $z=\gamma_k(T-\hat\lambda I)^{-1}e_k$ 이므로 $v_j^{\mathsf T}z=\gamma_kv_j(k)/(\lambda_j-\hat\lambda)$ 이고, $\Vert z\Vert\ge\vert v_j^{\mathsf T}z\vert$ 에서 위 식이 나온다. $\vert v_j(k)\vert$ 가 가장 큰 $k$ 에서는 $v_j(k)^2\ge 1/n$ 이므로 상한이 $\sqrt n\thinspace\vert\lambda_j-\hat\lambda\vert$ 다.

## 각의 상한과 직교성

$\hat\lambda$ 에서 $\lambda_j$ 를 뺀 다른 고윳값까지의 거리의 최솟값을 $g$ 라 하면 다음이 성립한다.

$$
\sin\angle(z,v_j)\le\frac{\Vert(T-\hat\lambda I)z\Vert}{g\thinspace\Vert z\Vert}
$$

$z$ 를 고유벡터로 전개해 $v_j$ 성분을 뺀 부분의 노름을 세면 나온다. [Davis–Kahan sin θ 정리](davis-kahan-theorem.md)의 벡터 하나 판본이다.

표현이 $\lambda_j$ 에 대한 RRR 이고 $\hat\lambda$ 가 상대 오차 $O(n\varepsilon)$ 로 구해졌으면, 비틀린 벡터의 잔차는 $O(n\varepsilon\vert\hat\lambda\vert)$ 이고 각은 $O(n\varepsilon)/\mathrm{relgap}(\lambda_j)$ 이다. 여기서 $\varepsilon$ 은 기계 정밀도다. 표현 나무의 잎에서는 상대 간격이 모두 $\tau$ 이상이므로, 따로 계산한 두 벡터의 내적은 Gram–Schmidt 직교화 없이 $O(n\varepsilon/\tau)$ 이하다[^1].

## 고윳값 세기

$D_1^{+},\dots,D_n^{+}$ 가운데 음수의 개수는 $\lambda$ 보다 작은 $T$ 의 고윳값의 개수다. $T-\lambda I$ 와 $D^{+}$ 는 합동이므로 [이차형식](quadratic-forms.md)의 Sylvester 관성법칙(Sylvester's law of inertia)에서 나온다. $D_i^{+}$ 는 $T-\lambda I$ 의 앞쪽 $i\times i$ 소행렬식과 $(i-1)\times(i-1)$ 소행렬식의 비이고, 이 개수는 [Sturm 정리](sturm-theorem.md)의 부호 변화 수와 같다. 2 단계의 이분법은 이 개수로 고윳값이 든 구간을 반씩 줄인다.

## 연산량

비틀린 벡터 하나에 연산이 $O(n)$ 이고, 고윳값 하나를 상대 정확도로 다듬는 데도 $O(n)$ 연산을 일정 횟수 쓴다. 그래서 고유벡터 $k$ 개를 구하는 데 $O(nk)$, 전부 구하는 데 $O(n^2)$ 이 든다[^2]. 가까운 고윳값 $k$ 개를 [거듭제곱법](power-iteration.md)의 이동 역반복으로 구하고 Gram–Schmidt 로 직교화하면 $O(nk^2)$ 이 든다. [분할정복 고윳값 알고리즘](divide-and-conquer-eigenvalue-algorithm.md)은 고유벡터 행렬을 곱해 합치므로 최악의 경우 $O(n^3)$ 이다.

# 활용

- 조밀한 대칭 고윳값 문제. [Householder 반사](householder-reflection.md)로 삼중대각 꼴로 바꾼 뒤 고유벡터를 구하는 단계에 쓴다. LAPACK 의 루틴 `dstemr` 가 이 구현이다[^2].
- 고유벡터 일부만 필요한 문제. 원하는 고윳값 구간의 벡터만 $O(nk)$ 에 구한다. 분할정복은 일부만 구하는 것이 전부 구하는 것보다 싸지 않다.
- 병렬 계산. 벡터마다 계산이 독립이므로 벡터를 처리기에 나눠 맡기고 서로 통신하지 않는다[^4].
- 이중대각행렬의 특이벡터. Großer 와 Lang 은 같은 방법을 이중대각행렬의 특이값 분해에 써서 $O(n^2)$ 알고리즘을 만들었다[^5].

[^1]: I. S. Dhillon, B. N. Parlett, "Multiple representations to compute orthogonal eigenvectors of symmetric tridiagonal matrices", *Linear Algebra and its Applications* 387 (2004), 1–28.
[^2]: I. S. Dhillon, B. N. Parlett, C. Vömel, "The design and implementation of the MRRR algorithm", *ACM Transactions on Mathematical Software* 32 (2006), 533–560.
[^3]: B. N. Parlett, I. S. Dhillon, "Fernando's solution to Wilkinson's problem: an application of double factorization", *Linear Algebra and its Applications* 267 (1997), 247–279.
[^4]: P. Bientinesi, I. S. Dhillon, R. A. van de Geijn, "A parallel eigensolver for dense symmetric matrices based on multiple relatively robust representations", *SIAM Journal on Scientific Computing* 27 (2005), 43–66.
[^5]: B. Großer, B. Lang, "An O(n²) algorithm for the bidiagonal SVD", *Linear Algebra and its Applications* 358 (2003), 45–70.

# 연관 문서

## 선수지식

- [삼중대각계](tridiagonal-systems.md)
- [dqds 알고리즘](dqds-algorithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation
