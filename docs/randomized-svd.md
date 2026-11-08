# 무작위 특이값 분해

# 개요

**무작위 특이값 분해(randomized singular value decomposition, randomized SVD)** 는 [행렬](matrices.md)에 무작위 벡터 몇 개를 곱해 큰 특이값의 방향을 먼저 잡고, 그 방향으로 줄인 작은 행렬의 특이값 분해로 원래 행렬의 상위 특이값과 특이벡터를 근사하는 방법이다. 행이 백만 개, 열이 만 개인 자료행렬에서 상위 성분 열 개만 필요해도, 전체 [특이값 분해](singular-value-decomposition.md)는 곱셈이 $10^{14}$ 번쯤 든다. 무작위 특이값 분해는 행렬과의 곱 몇십 번과 열이 열몇 개인 행렬의 계산만으로 같은 상위 성분을 오차 상한과 함께 준다.

# 직관

$A=\mathrm{diag}(3,1)$ 의 가장 큰 특이값은 $3$ 이고 그 방향은 $(1,0)$ 이다. 이 방향을 모른다고 하고 벡터 $\omega=(1,1)$ 을 곱하면 $A\omega=(3,1)$ 이다. 첫 성분은 $3$ 배, 둘째 성분은 $1$ 배가 되었으므로, 곱한 결과는 처음보다 $(1,0)$ 쪽으로 기운다.

$u=(3,1)/\sqrt{10}$ 을 그 방향의 단위벡터로 잡고 $A$ 를 이 한 방향으로만 본다. $u^{\mathsf T}A=(9,1)/\sqrt{10}$ 은 성분이 둘인 행 하나이고, 그 길이 $\sqrt{8.2}\approx 2.864$ 가 특이값 $3$ 의 근사다. $A$ 에서 $uu^{\mathsf T}A$ 를 뺀 나머지는 $\frac1{10}\begin{pmatrix}3&-3\cr -9&9\end{pmatrix}$ 이고 그 2 노름은 $\sqrt{1.8}\approx 1.342$ 다. 계수 $1$ 인 행렬로 낼 수 있는 가장 작은 오차는 둘째 특이값 $1$ 이다.

기운 정도는 두 특이값의 비 $3$ 이 정했다. $A$ 와 $A^{\mathsf T}$ 를 한 번씩 더 곱한 $AA^{\mathsf T}A\omega=(27,1)$ 은 비가 $3^3=27$ 이다. 이 벡터로 같은 계산을 하면 특이값 근사가 $\sqrt{6562/730}\approx 2.998$, 오차가 $\sqrt{738/730}\approx 1.0055$ 가 된다.

행렬이 커도 $A$ 를 쓰는 계산은 $A\omega$ 와 $u^{\mathsf T}A$ 두 번의 곱뿐이다. 특이값 분해를 하는 행렬은 원래 행렬이 아니라 $u^{\mathsf T}A$ 처럼 행이 몇 개뿐인 행렬이다.

# 정의

$A$ 를 $m\times n$ 실행렬, $k$ 를 구하려는 특이값의 개수, $p$ 를 **oversampling 매개변수(oversampling parameter)** 라 하고 $\ell=k+p$ 로 둔다. 성분이 서로 독립인 표준 [정규분포](normal-distribution.md)를 따르는 $n\times\ell$ 행렬 $\Omega$ 를 **Gauss 시험 행렬(Gaussian test matrix)** 이라 한다. 직관 절은 $k=1$, $p=0$ 이고 $\Omega$ 의 표본으로 $\omega=(1,1)$ 이 나온 경우다.

**무작위 치역 찾기(randomized range finder)** 는 다음 두 단계다[^1].

$$
Y=A\Omega,\qquad Y=QR
$$

둘째 식은 [행렬 분해](matrix-factorizations.md)의 QR 분해이고, $Q$ 는 열이 정규직교인 $m\times\ell$ 행렬이다. $Q$ 의 열공간이 $A$ 의 열공간 가운데 큰 특이값의 방향을 근사한다. 직관 절에서 $Q=u=(3,1)/\sqrt{10}$ 이다.

무작위 특이값 분해는 $Q$ 로 $A$ 를 줄인 $\ell\times n$ 행렬의 특이값 분해를 쓴다.

$$
B=Q^{\mathsf T}A=\tilde U\Sigma V^{\mathsf T},\qquad U=Q\tilde U,\qquad A\approx U\Sigma V^{\mathsf T}=QQ^{\mathsf T}A
$$

$\Sigma$ 와 $U$, $V$ 의 처음 $k$ 개 성분을 남겨 계수 $k$ 근사로 쓴다. 직관 절에서 $B=(9,1)/\sqrt{10}$ 의 특이값 분해는 $\tilde U=1$, $\Sigma=\sqrt{8.2}$, $V=(9,1)/\sqrt{82}$ 이고, $V$ 가 오른쪽 특이벡터 $(1,0)$ 의 근사다.

**거듭제곱 판본(power scheme)** 은 첫 단계의 $Y=A\Omega$ 를 다음으로 바꾼 것이다. $q$ 는 $0$ 이상의 정수다.

$$
Y=(AA^{\mathsf T})^qA\Omega
$$

곱할 때마다 결과의 열을 QR 분해로 정규직교화한 뒤 다음 곱을 한다. [거듭제곱법](power-iteration.md)의 부분공간 반복을 $A\Omega$ 에서 시작해 $q$ 번 돌린 것과 같다. 직관 절의 $(27,1)$ 은 $q=1$ 인 경우다.

```javascript
// A 와의 곱 matmul, 전치와의 곱 matmulT, QR 분해 qr, 작은 행렬의 특이값 분해 svd 가 있다고 둔다
function randomizedSVD(A, k, p, q) {
  const Omega = gaussianMatrix(A.cols, k + p);
  let Q = qr(matmul(A, Omega)).Q;
  for (let i = 0; i < q; i++) {
    Q = qr(matmulT(A, Q)).Q;       // A^T Q 의 열을 정규직교화
    Q = qr(matmul(A, Q)).Q;        // A (A^T Q) 의 열을 정규직교화
  }
  const B = matmulT(A, Q).transpose(); // B = Q^T A
  const { U: Ub, S, V } = svd(B);
  return { U: matmul(Q, Ub).firstCols(k), S: S.slice(0, k), V: V.firstCols(k) };
}
```

# 성질

## 계수가 낮은 행렬의 정확한 분해

$A$ 의 계수 $r$ 이 $\ell$ 이하이면 확률 $1$ 로 $QQ^{\mathsf T}A=A$ 이고, $U\Sigma V^{\mathsf T}$ 가 $A$ 의 특이값 분해다. $A=U_r\Sigma_rV_r^{\mathsf T}$ 로 쓰면 $Y=U_r\Sigma_r(V_r^{\mathsf T}\Omega)$ 이다. $V_r^{\mathsf T}\Omega$ 는 성분이 독립 표준 정규분포인 $r\times\ell$ 행렬과 분포가 같아 확률 $1$ 로 계수가 $r$ 이므로, $Y$ 의 열공간이 $A$ 의 열공간과 같다.

## 사영 오차

$U\Sigma V^{\mathsf T}=QQ^{\mathsf T}A$ 이므로 근사의 오차는 $\Vert (I-QQ^{\mathsf T})A\Vert$ 다. 열공간이 $Q$ 의 열공간에 드는 행렬 $QC$ 가운데 $A$ 에 가장 가까운 것이 $QQ^{\mathsf T}A$ 이고, 이것은 2 노름과 Frobenius 노름에서 모두 성립한다.

## 평균 오차 상한

$p\ge 2$ 이고 $\sigma_1\ge\sigma_2\ge\cdots$ 가 $A$ 의 특이값이면 무작위 치역 찾기의 $Q$ 는 다음을 만족한다[^1].

$$
\mathbb E\Vert (I-QQ^{\mathsf T})A\Vert\_F\le\Bigl(1+\frac{k}{p-1}\Bigr)^{1/2}\Bigl(\sum_{j\gt k}\sigma_j^2\Bigr)^{1/2}
$$

$$
\mathbb E\Vert (I-QQ^{\mathsf T})A\Vert\le\Bigl(1+\sqrt{\frac{k}{p-1}}\Bigr)\sigma_{k+1}+\frac{e\sqrt{k+p}}{p}\Bigl(\sum_{j\gt k}\sigma_j^2\Bigr)^{1/2}
$$

오른쪽의 $\sigma_{k+1}$ 과 $\bigl(\sum_{j\gt k}\sigma_j^2\bigr)^{1/2}$ 은 특이값 분해 문서의 Eckart–Young–Mirsky 정리(Eckart–Young–Mirsky theorem)가 주는 최소 오차다. $k=10$, $p=5$ 이면 Frobenius 노름의 배율이 $\sqrt{3.5}\approx 1.87$ 이다. 증명의 요지는 $V^{\mathsf T}\Omega$ 를 상위 $k$ 행과 나머지 행으로 나누면 두 부분이 독립인 Gauss 행렬이고, 상위 부분의 의사역행렬의 기댓값을 Gauss 행렬의 성질로 계산하는 것이다.

## 거듭제곱 판본의 오차

$(AA^{\mathsf T})^qA$ 의 특이값은 $\sigma_j^{2q+1}$ 이고 특이벡터는 $A$ 의 것과 같다. 이 행렬에 위 상한을 쓰고 $2q+1$ 제곱근을 취하면 다음이 나온다[^1].

$$
\mathbb E\Vert (I-QQ^{\mathsf T})A\Vert\le\Bigl\lbrack\Bigl(1+\sqrt{\frac{k}{p-1}}\Bigr)\sigma_{k+1}^{2q+1}+\frac{e\sqrt{k+p}}{p}\Bigl(\sum_{j\gt k}\sigma_j^{2(2q+1)}\Bigr)^{1/2}\Bigr\rbrack^{1/(2q+1)}
$$

$\sigma_{k+1}$ 앞의 배율이 $2q+1$ 제곱근으로 줄어 $q$ 가 커지면 $1$ 로 간다. 특이값이 천천히 줄어드는 행렬에서 $q=0$ 판본의 오차가 $\sum_{j\gt k}\sigma_j^2$ 항 때문에 커지므로, 이 판본으로 $q=1$ 이나 $2$ 를 쓴다. 곱마다 정규직교화하는 것은 $\sigma_j^{2q+1}$ 의 크기 차이 때문에 작은 특이값의 방향 성분이 반올림 오차보다 작아지는 것을 막기 위해서다.

## 사후 오차 추정

$\omega^{(1)},\dots,\omega^{(r)}$ 이 독립인 표준 정규벡터이면 확률 $1-10^{-r}$ 이상으로 다음이 성립한다[^1].

$$
\Vert (I-QQ^{\mathsf T})A\Vert\le 10\sqrt{\frac2\pi}\thinspace\max_{1\le i\le r}\Vert (I-QQ^{\mathsf T})A\omega^{(i)}\Vert
$$

오른쪽은 $A$ 와의 곱 $r$ 번으로 계산된다. 오차가 기준을 넘으면 $Q$ 에 열을 더하고 다시 잰다.

## 연산량

$A$ 가 조밀한 행렬이면 $A\Omega$ 와 $Q^{\mathsf T}A$ 가 곱셈 $O(mn\ell)$ 번, $Y$ 의 QR 분해가 $O(m\ell^2)$ 번, $B$ 의 특이값 분해가 $O(n\ell^2)$ 번이다. 전체 특이값 분해의 $O(mn\min(m,n))$ 번과 비교하면 $\min(m,n)$ 이 $\ell$ 로 바뀐다. 거듭제곱 판본은 $A$ 를 $2q+2$ 번 읽는다. $\Omega$ 대신 무작위 부호와 [이산 Fourier 변환](fourier.md)과 무작위 열 선택을 곱한 구조적 무작위 행렬(subsampled randomized Fourier transform, SRFT)을 쓰면 $A\Omega$ 가 $O(mn\log\ell)$ 번에 계산된다[^1].

$\Omega$ 가 Gauss 행렬일 필요는 없다. $A$ 의 상위 $k$ 개 오른쪽 특이벡터가 생성하는 부분공간 위에서 $\Omega^{\mathsf T}$ 가 길이를 거의 보존하면 같은 꼴의 상한이 성립한다. [Johnson–Lindenstrauss 보조정리](johnson-lindenstrauss-lemma.md)의 Gauss 무작위 사영이 그런 행렬이다[^2].

# 활용

- [주성분 분석](principal-component-analysis.md)의 상위 성분 계산. 평균을 뺀 자료행렬의 오른쪽 특이벡터가 주성분 방향이므로, 관측과 변수가 많고 성분 몇 개만 필요할 때 이 방법을 쓴다.
- [Hutchinson 대각합 추정량](hutchinson-trace-estimator.md)의 Hutch++. 큰 [고윳값](eigenvalues.md)의 고유공간을 근사하는 $Q$ 가 무작위 치역 찾기의 $Q$ 다.
- [행렬 완성](matrix-completion.md)의 특이값 문턱 알고리즘. 반복마다 문턱을 넘는 특이값과 특이벡터만 필요하므로 전체 특이값 분해 대신 이 방법으로 계산한다.
- 적분방정식과 편미분방정식의 해 작용소 압축. 해 작용소를 행렬로 적은 블록이 낮은 계수로 근사되면, 블록에 무작위 벡터를 곱한 결과만으로 그 근사를 만든다[^2].

[^1]: N. Halko, P.-G. Martinsson, J. A. Tropp, "Finding structure with randomness: Probabilistic algorithms for constructing approximate matrix decompositions", *SIAM Review* 53 (2011), 217–288. 무작위 치역 찾기는 Algorithm 4.1, 거듭제곱 판본은 Algorithm 4.3, 사후 오차 추정은 식 (4.3), 평균 오차 상한은 Theorem 10.5, 10.6 과 Corollary 10.10, SRFT 는 4.6 절이다.
[^2]: P.-G. Martinsson, J. A. Tropp, "Randomized numerical linear algebra: Foundations and algorithms", *Acta Numerica* 29 (2020), 403–572.

# 연관 문서

## 선수지식

- [특이값 분해](singular-value-decomposition.md)
- [행렬 분해](matrix-factorizations.md)
- [거듭제곱법](power-iteration.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #probability #statistics
