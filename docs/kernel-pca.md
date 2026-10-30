# 커널 PCA

# 개요

**커널 PCA(kernel principal component analysis, kernel PCA)** 는 데이터를 사상 $\phi$ 로 고차원 공간에 보낸 뒤 그 공간에서 주성분 분석을 하는 방법이다. 평면에서 크기가 다른 동심원 두 개 위에 점이 흩어져 있으면 점들이 모든 방향으로 고르게 퍼져 있어, 어느 직선 방향을 골라도 두 원이 갈리지 않는다. 커널 PCA 는 점마다 원점까지 거리의 제곱 같은 새 좌표를 더해 두 원을 다른 높이로 떼어 놓고, 그 공간의 주성분을 점들 사이의 내적만으로 계산한다.

# 직관

[주성분 분석](principal-component-analysis.md)(principal component analysis, PCA)은 데이터가 가장 넓게 퍼진 직선 방향을 찾는다. 반지름 $1$ 인 원 위의 네 점 $(\pm1,0)$, $(0,\pm1)$ 과 반지름 $2$ 인 원 위의 네 점 $(\pm2,0)$, $(0,\pm2)$ 를 생각한다. 여덟 점의 평균은 원점이고, $x$ 좌표와 $y$ 좌표의 분산이 모두 $5/4$ 이며 두 좌표의 공분산은 $0$ 이다. 분산이 모든 방향에서 같으므로 PCA 가 고르는 방향이 정해지지 않고, 어느 직선에 내려도 두 원이 섞인다.

각 점에 원점까지 거리의 제곱을 셋째 좌표로 붙인다.

$$
\phi(x,y)=(x,\thinspace y,\thinspace x^2+y^2)
$$

셋째 좌표는 안쪽 원에서 $1$, 바깥 원에서 $4$ 이고 평균이 $5/2$ 이므로 분산이 $9/4$ 다. 앞의 두 좌표의 분산 $5/4$ 보다 크므로, 옮긴 공간에서 PCA 를 하면 첫 주성분이 셋째 좌표축이다. 그 방향의 점수는 안쪽 원에서 $-3/2$, 바깥 원에서 $3/2$ 여서 두 원이 갈린다.

$n$ 개의 점을 $d$ 차원에서 다룰 때 PCA 는 $d\times d$ [공분산](covariance.md)[행렬](matrices.md) $X^{\mathsf T}X$ 의 고유벡터를 구한다. 여기서 $X$ 는 점들을 행으로 쌓은 중심화된 $n\times d$ 행렬이다. $X^{\mathsf T}Xv=\lambda v$ 의 양변에 $X$ 를 곱하면 $XX^{\mathsf T}(Xv)=\lambda(Xv)$ 이므로, $n\times n$ 행렬 $XX^{\mathsf T}$ 는 $0$ 이 아닌 고윳값이 같고 고유벡터가 $v\mapsto Xv$ 로 옮겨진다. $XX^{\mathsf T}$ 의 성분은 점들 사이의 내적뿐이므로 좌표를 몰라도 내적만 알면 같은 계산이 끝나고, $d$ 가 $n$ 보다 훨씬 크면 이쪽이 계산량도 적다.

$\langle\phi(x),\phi(y)\rangle$ 를 원래 좌표의 식으로 계산하는 함수가 있으면 $\phi$ 를 적지 않아도 된다. 위의 $\phi$ 에서는 $\langle\phi(x),\phi(y)\rangle = x^{\mathsf T}y+\lVert x\rVert^2\lVert y\rVert^2$ 이다. $k(x,y)=(x^{\mathsf T}y+1)^2$ 는 2 차원 입력에 대해 6 차원 특징공간의 내적이고, $k(x,y)=\exp(-\lVert x-y\rVert^2/2\sigma^2)$ 는 무한차원에 대응한다. 어느 쪽이든 한 쌍의 값을 얻는 데는 원래 좌표에서 몇 번의 곱셈으로 끝난다.

# 정의

## 커널과 특징공간

점들 $x_1,\dots,x_n$ 에 대해 $K_{ij}=k(x_i,x_j)$ 로 만든 $n\times n$ 행렬 $K$ 를 **그람행렬(Gram matrix)** 이라 한다. 대칭함수 $k:\mathcal X\times\mathcal X\to\mathbb R$ 가 임의의 유한한 점들에 대해 양의 준정부호(positive semidefinite)인 그람행렬을 줄 때 $k$ 를 **커널(kernel)** 이라 한다. [내적 공간](inner-product-spaces.md) $\mathcal H$ 와 사상 $\phi:\mathcal X\to\mathcal H$ 가 $k(x,y)=\langle\phi(x),\phi(y)\rangle$ 를 만족하면 $\mathcal H$ 를 **특징공간(feature space)**, $\phi$ 를 **특징사상(feature map)** 이라 한다.

직관 절의 $k(x,y)=x^{\mathsf T}y+\lVert x\rVert^2\lVert y\rVert^2$ 는 특징사상 $\phi(x,y)=(x,y,x^2+y^2)$ 과 특징공간 $\mathbb R^3$ 을 가지는 커널이다. 두 점 $(1,0)$ 과 $(2,0)$ 의 커널 값은 $2+1\cdot 4=6$ 이고, $\phi$ 로 옮긴 $(1,0,1)$ 과 $(2,0,4)$ 의 내적도 $6$ 이다.

| 커널 | 식 | 특징공간 |
|---|---|---|
| 선형 | $x^{\mathsf T}y$ | 원 공간, 보통의 PCA |
| 다항 $p$ 차 | $(x^{\mathsf T}y+c)^p$ | $p$ 차 이하 단항식들 |
| Gauss(radial basis function, RBF) | $\exp(-\lVert x-y\rVert^2/2\sigma^2)$ | 무한차원 |
| Laplace | $\exp(-\lVert x-y\rVert/\sigma)$ | 무한차원 |

## 중심화된 그람행렬

**중심화된 그람행렬(centered Gram matrix)** $\tilde K$ 는 특징공간에서 $\phi(x_i)$ 의 평균 $\bar\phi$ 를 뺀 점들의 그람행렬이다. 커널 값으로는 다음과 같다. $\mathbf 1$ 은 모든 성분이 $1/n$ 인 $n\times n$ 행렬이다.

$$
\tilde K=K-\mathbf 1K-K\mathbf 1+\mathbf 1K\mathbf 1
$$

성분으로 쓰면 $\tilde K_{ij}=K_{ij}-\bar K_{i\cdot}-\bar K_{\cdot j}+\bar K$ 이며, 행평균과 열평균을 빼고 전체평균을 더한 것이다.

점이 둘이고 $K=\begin{pmatrix}a&b\cr b&c\end{pmatrix}$ 이면 $\tilde K = \frac{a-2b+c}{4}\begin{pmatrix}1&-1\cr -1&1\end{pmatrix}$ 이다. 평균을 뺀 두 점은 $\pm(\phi(x_1)-\phi(x_2))/2$ 이고, $a-2b+c$ 가 $\lVert\phi(x_1)-\phi(x_2)\rVert^2$ 이므로 성분이 맞는다.

## 절차

**커널 PCA** 는 다음 절차로 특징공간의 주성분 점수를 계산하는 방법이다.

1. $\tilde K$ 를 만든다.
2. $\tilde K a^{(m)}=n\lambda_m a^{(m)}$ 를 풀어 상위 고유쌍을 얻는다.
3. 특징공간에서 단위 길이가 되도록 $\lVert a^{(m)}\rVert^2 = 1/(n\lambda_m)$ 로 정규화한다.
4. 새 점 $x$ 의 $m$ 번째 성분 점수를 다음으로 계산한다.

$$
z_m(x)=\sum_{i=1}^na^{(m)}\_i\thinspace\tilde k(x_i,x)
$$

$\tilde k$ 는 새 점에도 같은 중심화를 적용한 커널 값이고, 고유벡터 $a^{(m)}$ 은 특징공간의 주축을 데이터 점들의 계수로 표현한 것이다. 주축 자체는 쓰지 못하고 계수만 쓴다. 직관 절의 여덟 점과 커널에서 첫 성분 점수는 안쪽 원의 네 점에서 $-3/2$, 바깥 원의 네 점에서 $3/2$ 다.

# 성질

## 특징공간의 존재

**정리 (Moore–Aronszajn).** 모든 커널 $k$ 에 대해 $k(x,y)=\langle\phi(x),\phi(y)\rangle$ 를 만족하는 특징공간과 특징사상이 존재한다. 그런 특징공간으로 [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)을 잡을 수 있다.

커널 PCA 의 절차는 $\phi$ 의 존재만 쓰고 $\phi$ 를 계산하지 않는다. 특징공간의 평균 $\bar\phi$ 도 명시할 수 없지만, 중심화된 내적이 커널 값들의 조합이므로 평균을 만들 필요가 없다.

## 주축의 표현

특징공간이 무한차원이어도 중심화된 공분산연산자(covariance operator)의 상은 $\lbrace\phi(x_i)-\bar\phi\rbrace$ 가 생성하는 최대 $n-1$ 차원 부분공간이다. 따라서 0 이 아닌 고윳값에 대응하는 고유벡터는 반드시

$$
v=\sum_{i=1}^n a_i\big(\phi(x_i)-\bar\phi\big)
$$

꼴로 쓰인다. 이 표현을 고유방정식에 넣고 양변에 $\phi(x_j)-\bar\phi$ 를 내적하면 $\tilde K$ 에 대한 유한차원 고유문제가 나오고, 무한차원 문제가 $n\times n$ 문제로 줄어든다. 표현 정리(representer theorem)의 한 사례다.

## 성분의 개수

중심화 때문에 $\tilde K$ 는 항상 $\mathbf 1$ 방향의 [고윳값](eigenvalues.md) 0 을 가지므로 유효한 성분이 최대 $n-1$ 개다. 선형 PCA 가 $\min(n-1,d)$ 개로 제한되는 것과 달리 커널 PCA 는 원 공간의 차원 $d$ 와 무관하게 표본 수까지 성분을 뽑을 수 있고, 같은 이유로 과적합(overfitting)하기 쉽다.

## 역상 문제

선형 PCA 에서 저차원 점수를 원 공간으로 되돌리는 재구성은 행렬 곱 한 번이다. 커널 PCA 에서는 $\phi$ 의 상이 특징공간 전체가 아니라 휘어진 부분다양체(submanifold)라서, 특징공간의 점 $\sum_m z_m v_m$ 에 대응하는 원 공간의 점 $x$ 가 없을 수 있다.

그래서 재구성은 다음 최적화로 근사한다. 이것을 역상 문제(pre-image problem)라 한다.

$$
\hat x=\arg\min_x\thinspace \big\lVert\phi(x)-P_M\phi(x_0)\big\rVert^2
$$

이 문제는 볼록이 아니어서 국소해에 빠질 수 있고, 잡음 제거에 커널 PCA 를 쓸 때 걸림돌이 된다.

## 저장과 고유분해 비용

$\tilde K$ 가 $n\times n$ 이므로 저장에 $O(n^2)$ , 고유분해에 $O(n^3)$ 이 든다. 원 공간 차원 $d$ 와 무관하지만 표본 수의 세제곱으로 커져 표본이 많으면 선형 PCA 보다 비싸다. 실무에서는 [Nyström 법](nystrom-method.md)과 같은 꼴의 근사나 무작위 특징(random features)으로 $K$ 를 저계수 근사한다.

새 점 하나의 점수를 구하는 데도 모든 학습 점과의 커널 값이 필요해 $O(n)$ 이다. 선형 PCA 의 $O(d)$ 와 대비된다.

## 커널과 대역폭의 선택

Gauss 커널의 대역폭(bandwidth) $\sigma$ 가 결과를 지배한다. 너무 작으면 $K$ 가 거의 항등행렬이 되어 모든 점이 직교하므로 구조가 사라지고, 너무 크면 커널 값이 1 에 가까워져 선형 PCA 로 퇴화한다. 점들 사이 거리의 중앙값 근처를 기준으로 삼는다.

설명분산비율은 특징공간의 값이고 원 공간의 값이 아니므로 몇 개의 성분을 남길지 판단하기 어렵다.

# 활용

## 비선형 구조의 시각화

동심원, 나선, 초승달처럼 선형 방법이 무력한 자료에서 두세 개의 커널 주성분으로 구조가 분리되는 경우가 많다. 군집 알고리즘의 전처리로 쓰면 원 공간에서 선형 분리가 불가능하던 군집이 분리된다.

## 다른 커널 방법과의 공통 구조

내적만 쓰는 알고리즘은 모두 같은 방식으로 커널화된다.

| 선형 방법 | 커널 판 |
|---|---|
| PCA | 커널 PCA |
| 선형회귀, 능형회귀(ridge regression) | [커널 능형회귀](kernel-ridge-regression.md), [Gauss 과정](gaussian-processes.md) 회귀 |
| 판별분석(discriminant analysis) | 커널 판별분석 |
| 최대 여백 분류기(maximum margin classifier) | [서포트 벡터 머신](support-vector-machine.md) |

## 다양체 학습과의 관계

Isomap, Laplacian 고유사상(Laplacian eigenmaps), 확산 사상(diffusion maps)은 각각 특정한 커널을 쓴 커널 PCA 로 다시 쓸 수 있다. 측지거리(geodesic distance)에서 만든 행렬을 이중 중심화(double centering)하는 Isomap 의 절차가 그 예다. 차원 축소 기법들이 어떤 유사도 행렬을 고유분해하는가라는 하나의 틀로 정리된다.

## 적용의 한계

표본이 수만 개를 넘으면 $O(n^3)$ 때문에 근사가 필요하다. 선형 PCA 의 성분은 원 변수들의 가중합이라 읽을 수 있지만 커널 성분은 학습 점들에 대한 계수로만 표현되어 해석이 어렵다. 표현력이 필요하면서 표본이 많으면 오토인코더(autoencoder)를 쓴다.

# 연관 문서

## 선수지식

- [주성분 분석](principal-component-analysis.md)
- [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #statistics #machine_learning
