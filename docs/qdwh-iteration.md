# QDWH 반복

# 개요

**QDWH 반복(QR-based dynamically weighted Halley iteration)** 은 행렬의 [극분해](polar-decomposition.md) $A=QP$ 의 유니터리 인수 $Q$ 를, 역행렬 없이 QR 분해만으로 몇 번 안에 구하는 반복이다. 가장 큰 특이값이 $1$, 가장 작은 특이값이 $0.1$ 인 행렬에 극분해 문서의 Newton 반복을 쓰면 특이값 $0.1$ 이 첫 걸음에 $5.05$ 로 튀고, 반복마다 역행렬을 구해야 한다. QDWH 반복은 반복마다 가장 작은 특이값의 하한에 맞춘 유리함수를 특이값 전체에 한꺼번에 적용해, 이 예에서 첫 걸음에 모든 특이값을 $0.86$ 과 $1$ 사이로 모은다.

# 직관

극분해에서 $X=QP$ 의 $P$ 를 바꾸고 $Q$ 는 그대로 두는 반복은 특이값에만 작용한다. $X$ 의 특이값 분해가 $X=U\Sigma V^\ast$ 이면 $Q=UV^\ast$ 이고, 반복 $X\mapsto Xh(X^\ast X)$ 는 특이값마다 $\sigma\mapsto\sigma h(\sigma^2)$ 를 일으킨다. 그러므로 $[\ell,1]$ 의 모든 수를 빨리 $1$ 로 보내는 함수 $f(\sigma)=\sigma h(\sigma^2)$ 를 고르면 된다.

Halley 반복은 $f(\sigma)=\sigma(3+\sigma^2)/(1+3\sigma^2)$ 를 쓴다. $f(1)=1$ 이고 $1$ 근처에서 오차가 세제곱으로 준다. 그러나 작은 특이값은 천천히 움직인다. $0.1$ 은 $0.292$, $0.718$, $0.991$ 로 가고, 세 걸음 뒤에야 $1$ 에 가까워진다.

계수를 고정하지 않고 $f(\sigma)=\sigma(a+b\sigma^2)/(1+c\sigma^2)$ 의 $a,b,c$ 를 하한 $\ell=0.1$ 에 맞추어 고르면, $f$ 는 구간 $[0.1,1]$ 전체를 $[0.866,1]$ 로 보낸다. 다음 걸음은 새 하한 $0.866$ 에 맞춘 계수로 다시 한다. 반복마다 계수를 바꾸는 것을 동적 가중(dynamic weighting)이라 한다.

# 정의

## 가중 Halley 반복

$A$ 가 가역이고 $\alpha\ge\Vert A\Vert\_2$, $0\lt\ell\_0\le\sigma\_{\min}(A)/\alpha$ 로 둔다. $X\_0=A/\alpha$ 에서 다음을 되풀이하는 것을 **가중 Halley 반복(dynamically weighted Halley iteration)** 이라 한다.

$$
X\_{k+1}=X\_k\bigl(a\_kI+b\_kX\_k^\ast X\_k\bigr)\bigl(I+c\_kX\_k^\ast X\_k\bigr)^{-1}
$$

$$
\ell\_{k+1}=\ell\_k\frac{a\_k+b\_k\ell\_k^2}{1+c\_k\ell\_k^2}
$$

계수는 $\ell=\ell\_k$ 에서 다음으로 정한다[^1].

$$
\begin{aligned}
\gamma&=\Bigl(\frac{4(1-\ell^2)}{\ell^4}\Bigr)^{1/3},\cr
a\_k&=\sqrt{1+\gamma}+\frac12\sqrt{8-4\gamma+\frac{8(2-\ell^2)}{\ell^2\sqrt{1+\gamma}}},\cr
b\_k&=\frac{(a\_k-1)^2}{4},\qquad c\_k=a\_k+b\_k-1
\end{aligned}
$$

$\ell=1$ 이면 $\gamma=0$ 이고 $(a\_k,b\_k,c\_k)=(3,1,3)$ 이 되어 고정 계수의 Halley 반복이다. 직관 절의 $\ell\_0=0.1$ 에서는 $a\_0\approx 11.85$, $b\_0\approx 29.4$, $c\_0\approx 40.3$ 이고 $\ell\_1\approx 0.866$ 이다.

## QR 분해로 쓴 꼴

다음 QR 분해를 구한다.

$$
\begin{pmatrix}\sqrt{c\_k}X\_k\cr I\end{pmatrix}=\begin{pmatrix}Q\_1\cr Q\_2\end{pmatrix}R
$$

그러면 $R^\ast R=I+c\_kX\_k^\ast X\_k$ 이고, $Q\_1=\sqrt{c\_k}X\_kR^{-1}$, $Q\_2=R^{-1}$ 에서 다음이 나온다.

$$
Q\_1Q\_2^\ast=\sqrt{c\_k}X\_k\bigl(I+c\_kX\_k^\ast X\_k\bigr)^{-1}
$$

그러므로 가중 Halley 반복은 다음과 같다.

$$
X\_{k+1}=\frac{b\_k}{c\_k}X\_k+\frac{1}{\sqrt{c\_k}}\Bigl(a\_k-\frac{b\_k}{c\_k}\Bigr)Q\_1Q\_2^\ast
$$

이 꼴로 계산하는 가중 Halley 반복을 **QDWH 반복** 이라 한다. 역행렬이 나타나지 않는다.

```javascript
function qdwh(A, alpha, ell, tol) {
  let X = scale(A, 1 / alpha);
  while (!closeTo(ell, 1, tol)) {
    const { a, b, c } = weights(ell); // 정의 절의 식
    const [Q1, Q2] = thinQR(stack(scale(X, Math.sqrt(c)), identity(X.cols)));
    X = add(scale(X, b / c), scale(mul(Q1, adjoint(Q2)), (a - b / c) / Math.sqrt(c)));
    ell = (ell * (a + b * ell * ell)) / (1 + c * ell * ell);
  }
  return X; // 극분해의 유니터리 인수 Q
}
```

에르미트 인수는 $P=\tfrac12\bigl(Q^\ast A+(Q^\ast A)^\ast\bigr)$ 로 얻는다.

# 성질

## 계수의 최적성

정리. 정의 절의 $(a\_k,b\_k,c\_k)$ 는 $f(1)=1$ 이고 $[\ell,1]$ 에서 $0\lt f\le 1$ 인 꼴 $f(\sigma)=\sigma(a+b\sigma^2)/(1+c\sigma^2)$ 의 함수 가운데 $\min\_{[\ell,1]}f$ 를 가장 크게 하는 것이다[^1].

증명의 요지. 최적인 $f$ 는 $[\ell,1]$ 에서 최솟값을 $\sigma=\ell$ 과 안쪽 한 점에서, 최댓값 $1$ 을 안쪽 한 점과 $\sigma=1$ 에서 갖는다. 이 조건들을 $a,b,c$ 에 대한 방정식으로 풀면 정의 절의 식이 나온다.

## 반복 횟수

정리. $\kappa\_2(A)\le 10^{16}$ 이면 $\ell\_k$ 는 많아야 여섯 걸음 만에 배정밀도의 $1$ 과 구별되지 않을 만큼 가까워진다[^1].

$\ell\_0=0.1$ 에서는 첫 걸음에 $0.866$ 이 되고, 그 뒤로는 계수가 Halley 반복에 가까워져 세제곱 수렴한다.

## 후방 안정성

QR 분해를 [Householder 반사](householder-reflection.md)로 구하면 QDWH 반복은 후방 안정하다. 계산한 $\hat Q$, $\hat P$ 에 대해 $\hat Q\hat P$ 와 $A$ 의 차이가 기계 정밀도에 $\Vert A\Vert$ 를 곱한 정도이고, $\hat Q$ 는 유니터리 행렬과 그 정도로 가깝다[^2].

## 비용

걸음마다 $2n\times n$ 행렬의 QR 분해 하나와 행렬 곱 하나가 들어, Newton 반복의 역행렬 하나보다 비싸다. 그러나 반복 횟수가 적고, QR 분해와 행렬 곱은 병렬 계산과 블록 계산에서 역행렬보다 효율이 높다. $\Vert X\_k\Vert\_2\le 1$ 이므로 $I+c\_kX\_k^\ast X\_k$ 의 조건수는 $1+c\_k$ 이하다. 첫 걸음 뒤 $c\_k$ 가 작아지면 QR 분해 대신 이 행렬의 Cholesky 분해로 $R$ 을 구해도 정밀도를 잃지 않는다.

# 활용

- [스펙트럼 분할정복](spectral-divide-and-conquer.md). 대칭행렬 $A-sI$ 의 극분해의 유니터리 인수가 $\mathrm{sign}(A-sI)$ 이므로, QDWH 반복으로 고유공간을 둘로 나누는 사영 $\tfrac12(I+\mathrm{sign}(A-sI))$ 를 얻는다. 이것을 되풀이해 고윳값 분해와 [특이값 분해](singular-value-decomposition.md)를 구하는 것이 Nakatsukasa 와 Higham 의 방법이다[^3].
- [직교 Procrustes 문제](orthogonal-procrustes.md). $CB^{\mathsf T}$ 의 극분해의 유니터리 인수를 특이값 분해 없이 구한다.
- [행렬 부호 함수](matrix-sign-function.md). 극분해 문서의 블록 행렬 관계식으로, 부호 함수에 같은 꼴의 가중 반복을 쓴 것이 $A$ 에 대한 QDWH 반복과 같아진다.

[^1]: Y. Nakatsukasa, Z. Bai, F. Gygi, "Optimizing Halley's iteration for computing the matrix polar decomposition", *SIAM Journal on Matrix Analysis and Applications* 31 (2010), 2700–2720.
[^2]: Y. Nakatsukasa, N. J. Higham, "Backward stability of iterations for computing the polar decomposition", *SIAM Journal on Matrix Analysis and Applications* 33 (2012), 460–479.
[^3]: Y. Nakatsukasa, N. J. Higham, "Stable and efficient spectral divide and conquer algorithms for the symmetric eigenvalue decomposition and the SVD", *SIAM Journal on Scientific Computing* 35 (2013), A1325–A1349.

# 연관 문서

## 선수지식

- [극분해](polar-decomposition.md)

## 더 알아보기

- [Zolotarev 유리 근사](zolotarev-rational-approximation.md)

#linear_algebra #algorithms #analysis
