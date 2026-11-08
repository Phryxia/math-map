# 거듭제곱법

# 개요

**거듭제곱법(power iteration)** 은 벡터에 행렬을 거듭 곱하고 길이를 맞추는 것을 되풀이해, 절댓값이 가장 큰 고윳값과 그 고유벡터를 근사하는 반복법이다. 정점이 수십억 개인 웹 그래프에서 링크를 따라 무작위로 옮겨 다닐 때 오래 지나 각 쪽에 머무는 비율을 구하는 문제는, 그래프의 전이행렬에서 고윳값 $1$ 의 고유벡터를 찾는 문제다. 그 크기의 행렬은 특성다항식을 세울 수 없지만 벡터 하나에 곱하는 것은 링크 수만큼의 덧셈으로 끝나므로, 곱하기를 되풀이해 고유벡터에 다가간다.

# 직관

$A=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 은 $A(1,1)=3(1,1)$, $A(1,-1)=(1,-1)$ 이므로 [고윳값](eigenvalues.md)이 $3$ 과 $1$ 이다. $x_0=(1,0)$ 에 $A$ 를 거듭 곱한다.

$$
Ax_0=(2,1),\qquad A^2x_0=(5,4),\qquad A^3x_0=(14,13)
$$

두 성분의 비가 $2$, $1.25$, $1.077$ 로 $1$ 에 다가가고, 벡터의 방향이 고유벡터 $(1,1)$ 쪽으로 간다.

$x_0=\frac12(1,1)+\frac12(1,-1)$ 로 쓰면 $A^kx_0=\frac{3^k}{2}(1,1)+\frac12(1,-1)$ 이다. 곱할 때마다 $(1,1)$ 성분은 $3$ 배, $(1,-1)$ 성분은 $1$ 배가 되므로 두 성분의 비가 $3^{-k}$ 로 줄어든다. 고유벡터 방향에서 벗어난 정도가 매번 $1/3$ 배가 되고, $1/3$ 은 두 고윳값의 비다. 길이는 $3^k$ 배로 커지므로 계산에서는 매번 길이를 $1$ 로 맞춘다.

# 정의

$n\times n$ 행렬 $A$ 와 시작 벡터 $x_0\ne 0$ 에서 다음 반복을 거듭제곱법이라 한다.

$$
y_{k+1}=Ax_k,\qquad x_{k+1}=\frac{y_{k+1}}{\Vert y_{k+1}\Vert},\qquad \mu_{k+1}=x_{k+1}^\ast Ax_{k+1}
$$

$\mu_k$ 는 고윳값의 근사이고, $A$ 가 대칭이면 [Rayleigh 몫](rayleigh-quotient.md) $R_A(x_k)$ 다. 직관 절의 예에서 $\mu_1=R_A(2,1)=14/5=2.8$, $\mu_2=R_A(5,4)=122/41\approx 2.976$ 이다.

```javascript
function powerIteration(matVec, x, steps) {
  x = normalize(x);
  let mu = 0;
  for (let k = 0; k < steps; k++) {
    const y = matVec(x);
    x = normalize(y);
    mu = dot(x, matVec(x));
  }
  return { value: mu, vector: x };
}
```

# 성질

## 수렴률

$A$ 가 대각화 가능하고 고윳값이 $\vert\lambda_1\vert\gt\vert\lambda_2\vert\ge\dots\ge\vert\lambda_n\vert$, 고유벡터가 $u_1,\dots,u_n$ 이라 한다. $x_0$ 의 $u_1$ 성분이 $0$ 이 아니면 $x_k$ 는 $\pm u_1$ 방향으로 가고, 그 방향과의 거리가 $O(\vert\lambda_2/\lambda_1\vert^k)$ 다[^1].

증명의 요지. $x_0=\sum_ic_iu_i$ 이면 $A^kx_0=\lambda_1^k\bigl(c_1u_1+\sum_{i\ge 2}c_i(\lambda_i/\lambda_1)^ku_i\bigr)$ 이고 괄호 안의 둘째 항이 $\vert\lambda_2/\lambda_1\vert^k$ 의 속도로 $0$ 으로 간다. $x_k$ 는 이 벡터를 정규화한 것이다.

$\vert\lambda_1\vert=\vert\lambda_2\vert$ 이면 수렴하지 않을 수 있다. $\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 은 고윳값이 $1,-1$ 이고 $x_0=(1,0)$ 에서 $x_k$ 가 $(1,0)$ 과 $(0,1)$ 을 오간다.

## 대칭행렬에서 고윳값의 수렴

$A$ 가 대칭이면 $\vert\mu_k-\lambda_1\vert=O(\vert\lambda_2/\lambda_1\vert^{2k})$ 다. Rayleigh 몫의 오차가 고유벡터 오차의 제곱 규모이기 때문이다. 직관 절의 예에서 $3-\mu_1=0.2$, $3-\mu_2=1/41\approx 0.024$ 이고 비가 약 $1/8$ 로 $(1/3)^2$ 에 가깝다.

## 역반복과 이동

$\sigma$ 가 고윳값이 아니면 $(A-\sigma I)^{-1}$ 의 고윳값은 $1/(\lambda_i-\sigma)$ 이고 고유벡터는 $A$ 와 같다. 여기에 거듭제곱법을 쓰는 것을 **이동 역반복(shifted inverse iteration)** 이라 한다. $\sigma$ 에 가장 가까운 고윳값 $\lambda_j$ 의 고유벡터로 가고, 수렴률은 $\vert\lambda_j-\sigma\vert/\vert\lambda_l-\sigma\vert$ 다. $\lambda_l$ 은 그다음으로 가까운 고윳값이다. 반복마다 $(A-\sigma I)y=x$ 를 푼다. $\sigma$ 를 매번 $\mu_k$ 로 바꾸는 것이 Rayleigh 몫 반복이다.

직관 절의 $A$ 에서 $\sigma=0.9$ 이면 $(A-\sigma I)^{-1}$ 의 고윳값은 $1/0.1=10$ 과 $1/2.1\approx 0.48$ 이므로, 고윳값 $1$ 의 고유벡터 $(1,-1)$ 쪽으로 한 번에 약 $1/21$ 배씩 다가간다.

## 부분공간 반복

벡터 하나 대신 $n\times p$ 행렬 $X_k$ 에 $A$ 를 곱하고 QR 분해(QR decomposition)로 열을 정규직교화하는 것을 되풀이하면, $X_k$ 의 열공간이 큰 고윳값 $p$ 개의 고유공간으로 간다. 이것을 **부분공간 반복(subspace iteration)** 이라 한다. $j\le p$ 번째 방향의 수렴률은 $\vert\lambda_{j+1}/\lambda_j\vert$ 와 $\vert\lambda_{p+1}/\lambda_j\vert$ 로 정해진다. $p=n$ 이고 $X_0=I$ 이면 이 반복이 [QR 알고리즘](qr-algorithm.md)과 같은 행렬열을 만든다[^1].

# 활용

- [Perron–Frobenius 정리](perron-frobenius.md)의 Perron 벡터. 원시 음이 아닌 행렬은 Perron 근이 다른 고윳값보다 절댓값이 크므로 양벡터에서 시작한 거듭제곱법이 Perron 벡터로 간다. 웹 그래프의 확률행렬로 쪽의 순위를 정하는 PageRank 가 이 계산이다.
- [주성분 분석](principal-component-analysis.md)의 첫 주성분. 표본 공분산행렬 $X^{\mathsf T}X$ 를 만들지 않고 $X^{\mathsf T}(Xv)$ 의 곱만으로 반복한다.
- 행렬 노름의 추정. $A^{\mathsf T}A$ 에 쓰면 $\sqrt{\mu_k}$ 가 가장 큰 특이값으로 가므로, 연산자 2-노름을 행렬-벡터 곱 몇 번으로 추정한다.
- [Krylov 부분공간 방법](krylov-subspace-methods.md). 거듭제곱법은 $x_0,Ax_0,\dots,A^kx_0$ 가운데 마지막 벡터만 쓰고, Lanczos 반복과 Arnoldi 반복은 이 벡터들이 생성하는 공간 전체에서 근사를 골라 같은 곱셈 횟수로 더 빨리 수렴한다.

[^1]: Lloyd N. Trefethen, David Bau III, *Numerical Linear Algebra*, SIAM, 1997, 27 강과 28 강. 거듭제곱법과 역반복, Rayleigh 몫 반복, 부분공간 반복과 QR 알고리즘의 관계가 있다.

# 연관 문서

## 선수지식

- [고윳값](eigenvalues.md)

## 더 알아보기

- [QR 알고리즘](qr-algorithm.md)

#linear_algebra #algorithms #computation
