# 분할정복 고윳값 알고리즘

# 개요

**분할정복 고윳값 알고리즘(divide-and-conquer eigenvalue algorithm)** 은 대칭 삼중대각행렬을 두 블록으로 잘라 각 블록의 고윳값 문제를 풀고, 자르며 뺀 성분 하나를 되살리는 작은 방정식으로 전체 고윳값을 얻는 방법이다. 용수철로 이웃끼리만 이은 추들의 사슬에서, 진동수와 진동 모양은 대칭 삼중대각행렬의 고윳값과 고유벡터다. 행렬을 반으로 자르면 각 반쪽은 따로 풀리지만, 잘린 자리의 성분 때문에 두 답을 그냥 이어 붙일 수는 없다. 이 방법은 그 성분이 계수 $1$ 인 행렬 하나라는 것을 써서, 두 반쪽의 고윳값 사이에서 근을 하나씩 찾는 방정식으로 전체를 잇는다.

# 직관

다음 행렬의 고윳값을 구한다. 답은 $2-\sqrt2\approx 0.586$, $2$, $2+\sqrt2\approx 3.414$ 다.

$$
T=\begin{pmatrix}2&1&0\cr 1&2&1\cr 0&1&2\end{pmatrix}
$$

첫 행과 둘째 행 사이를 자른다. 자른 자리의 성분 $1$ 을 떼어 내면서 두 대각 성분에서 $1$ 씩 빼면, $T$ 는 블록 대각행렬과 $v=(1,1,0)$ 으로 만든 행렬 $vv^{\mathsf T}$ 의 합이다.

$$
T=\begin{pmatrix}1&0&0\cr 0&1&1\cr 0&1&2\end{pmatrix}+vv^{\mathsf T}
$$

왼쪽 블록 $(1)$ 의 고윳값은 $1$ 이다. 오른쪽 블록은 다음과 같고, 고윳값은 $(3\pm\sqrt5)/2$, 곧 $0.382$ 와 $2.618$ 이다.

$$
\begin{pmatrix}1&1\cr 1&2\end{pmatrix}
$$

블록마다 고유벡터를 기저로 잡으면 블록 대각행렬은 대각행렬 $D=\mathrm{diag}(0.382,\thinspace 1,\thinspace 2.618)$ 이 되고, $v$ 는 성분의 제곱이 $0.7236$, $1$, $0.2764$ 인 벡터 $z$ 가 된다.

$D+zz^{\mathsf T}$ 의 고윳값 $\lambda$ 에서 $(D-\lambda I)u=-z(z^{\mathsf T}u)$ 이므로, $u=(D-\lambda I)^{-1}z$ 의 방향이고 양변에 $z^{\mathsf T}(D-\lambda I)^{-1}$ 을 곱하면 다음 방정식이 나온다.

$$
f(\lambda)=1+\frac{0.7236}{0.382-\lambda}+\frac{1}{1-\lambda}+\frac{0.2764}{2.618-\lambda}=0
$$

$f(2)=1-0.4472-1+0.4472=0$ 이다. $f$ 는 극 $0.382$, $1$, $2.618$ 사이마다 $-\infty$ 에서 $+\infty$ 로 증가하므로, 구간 $(0.382,1)$ 과 $(1,2.618)$ 과 $(2.618,\infty)$ 에 근이 하나씩 있다. 세 근이 $0.586$, $2$, $3.414$ 다.

# 정의

## 영년 방정식

$D=\mathrm{diag}(d_1,\dots,d_n)$, $d_1\lt\cdots\lt d_n$ 이고 $\rho\gt 0$, $z$ 의 모든 성분이 $0$ 이 아니라 하자. 다음 방정식을 $D+\rho zz^{\mathsf T}$ 의 **영년 방정식(secular equation)** 이라 한다.[^1]

$$
f(\lambda)=1+\rho\sum_{i=1}^n\frac{z_i^2}{d_i-\lambda}=0
$$

직관 절은 $n=3$, $\rho=1$ 인 경우다.

## 분할정복 단계

대칭 삼중대각행렬 $T$ 의 대각을 $a_i$, 부대각을 $b_i$ 라 하고 $k$ 번째 행 뒤에서 자른다. $\rho=b_k$ 로 두면 다음이 성립한다.

$$
T=\begin{pmatrix}T_1&0\cr 0&T_2\end{pmatrix}+\rho\thinspace vv^{\mathsf T},\qquad v=e_k+e_{k+1}
$$

$T_1$ 은 $T$ 의 왼쪽 위 $k\times k$ 블록에서 마지막 대각 성분을 $a_k-\rho$ 로, $T_2$ 는 나머지 블록에서 첫 대각 성분을 $a_{k+1}-\rho$ 로 바꾼 삼중대각행렬이다. $T_i=Q_iD_iQ_i^{\mathsf T}$ 를 같은 방법으로 재귀적으로 구하고, $Q=\mathrm{diag}(Q_1,Q_2)$, $D=\mathrm{diag}(D_1,D_2)$, $z=Q^{\mathsf T}v$ 로 두면 다음이 나온다.

$$
T=Q\bigl(D+\rho zz^{\mathsf T}\bigr)Q^{\mathsf T}
$$

$D+\rho zz^{\mathsf T}$ 의 고유분해를 영년 방정식으로 구해 $Q$ 와 곱하는 것을 Cuppen 의 **분할정복 고윳값 알고리즘** 이라 한다.[^2] 블록이 $1\times 1$ 이나 충분히 작아지면 [QR 알고리즘](qr-algorithm.md)으로 직접 푼다. $z=Q^{\mathsf T}v$ 는 $Q_1$ 의 마지막 행과 $Q_2$ 의 첫 행을 이어 붙인 것이다.

# 성질

## 끼움과 고유벡터

정의의 가정 아래에서 $D+\rho zz^{\mathsf T}$ 의 고윳값 $\lambda_1\lt\cdots\lt\lambda_n$ 은 영년 방정식의 근이고 다음을 만족한다.[^1]

$$
d_1\lt\lambda_1\lt d_2\lt\lambda_2\lt\cdots\lt d_n\lt\lambda_n\lt d_n+\rho\Vert z\Vert^2
$$

$f'(\lambda)=\rho\sum_iz_i^2/(d_i-\lambda)^2\gt 0$ 이라 $f$ 는 극 사이마다 증가하고, 극 근처에서 $\pm\infty$ 로 가므로 구간마다 근이 정확히 하나다. 마지막 구간의 끝은 $\mathrm{tr}(D+\rho zz^{\mathsf T})=\sum d_i+\rho\Vert z\Vert^2$ 에서 나온다. 직관 절에서는 $\Vert z\Vert^2=2$ 라 $\lambda_3\lt 4.618$ 이다.

$\lambda_j$ 의 고유벡터는 $(D-\lambda_jI)^{-1}z$ 의 방향이다. 직관 절의 $\lambda=2$ 에서 이 벡터를 $Q$ 로 되돌리면 $(-1,0,1)$ 방향이 되어 $T$ 의 고유벡터 $(1,0,-1)/\sqrt2$ 와 같다.

## 수축

$z_i=0$ 이면 $d_i$ 가 그대로 고윳값이고 $e_i$ 가 고유벡터다. $d_i=d_j$ 이면 그 두 좌표에서 [Givens 회전](givens-rotation.md)으로 $z$ 의 한 성분을 $0$ 으로 만들 수 있다. 이렇게 영년 방정식에서 빼는 것을 **수축(deflation)** 이라 한다. 실제 계산에서는 $\vert z_i\vert$ 가 작거나 $d_i$ 가 가까우면 수축하고, 수축이 많을수록 고유벡터를 곱하는 비용이 준다.[^3]

## 영년 방정식의 풀이

$f$ 는 극 근처에서 급하게 변해 Newton 방법의 접선이 근을 지나치기 쉽다. 근을 둘러싼 두 극 $d_j$, $d_{j+1}$ 에서 다음 꼴의 유리함수로 $f$ 를 근사하고, 그 근으로 옮기는 반복을 쓴다. 몇 번 만에 기계 정밀도에 닿는다.[^1][^3]

$$
\frac{c_1}{d_j-\lambda}+\frac{c_2}{d_{j+1}-\lambda}+c_3
$$

## 고유벡터의 직교성

계산한 근 $\hat\lambda_j$ 로 $(D-\hat\lambda_jI)^{-1}z$ 를 그대로 쓰면, 근이 극에 가까울 때 작은 오차가 크게 불어나 고유벡터들이 직교하지 않는다. Gu 와 Eisenstat 는 계산한 근들이 정확한 고윳값이 되는 벡터 $\hat z$ 를 Löwner 공식으로 다시 구하고, $\hat z$ 로 고유벡터를 만들어 직교성을 회복했다.[^4]

$$
\hat z_i^2=\frac{\prod_j(\hat\lambda_j-d_i)}{\rho\prod_{j\ne i}(d_j-d_i)}
$$

## 비용

$n\times n$ 행렬에서 두 블록의 고유벡터 행렬과 $D+\rho zz^{\mathsf T}$ 의 고유벡터 행렬을 곱하는 비용이 단계마다 $O(n^3)$ 이고, 수축이 없으면 전체도 $O(n^3)$ 이다. 고윳값만 필요하면 단계마다 $O(n^2)$ 이다. 고유벡터까지 구할 때 QR 알고리즘보다 대개 빠르고, 곱셈이 행렬 곱이라 병렬 계산에 맞는다.[^3]

# 활용

- 대칭 고윳값 문제. 대칭행렬을 [Householder 반사](householder-reflection.md)로 삼중대각행렬로 바꾼 뒤 모든 고윳값과 고유벡터를 이 방법으로 구한다. LAPACK(linear algebra package)의 대칭 고유값 풀이기 하나가 이 방법이다.[^3]
- 특이값 분해. 이중대각행렬의 특이값 문제를 같은 방식으로 나누어 푼다.[^3]
- 계수 1 갱신. 고유분해를 아는 대칭행렬에 $\rho zz^{\mathsf T}$ 를 더한 행렬의 고유분해를 영년 방정식으로 새로 구한다.[^1]

[^1]: J. R. Bunch, C. P. Nielsen, D. C. Sorensen, "Rank-one modification of the symmetric eigenproblem", *Numerische Mathematik* 31 (1978), 31–48.

[^2]: J. J. M. Cuppen, "A divide and conquer method for the symmetric tridiagonal eigenproblem", *Numerische Mathematik* 36 (1981), 177–195.

[^3]: J. W. Demmel, *Applied Numerical Linear Algebra*, SIAM (1997), 5.3 절.

[^4]: M. Gu, S. C. Eisenstat, "A divide-and-conquer algorithm for the symmetric tridiagonal eigenproblem", *SIAM Journal on Matrix Analysis and Applications* 16 (1995), 172–191.

# 연관 문서

## 선수지식

- [스펙트럼 정리](spectral-theorem.md)
- [삼중대각계](tridiagonal-systems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms
