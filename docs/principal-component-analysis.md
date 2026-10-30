# 주성분 분석

# 개요

**주성분 분석(principal component analysis, PCA)** 은 데이터가 가장 넓게 퍼진 방향을 순서대로 뽑는 방법이다. 평면에 비스듬한 타원 모양으로 흩어진 점들을 한 직선 위로 내려 수 하나로 요약하려면, 점들이 가장 길게 퍼진 방향의 직선을 골라야 정보가 덜 사라진다. 주성분 분석은 이런 방향을 [공분산](covariance.md)[행렬](matrices.md)의 고유벡터로 구한다.

# 직관

평면의 네 점 $(3,1)$, $(1,3)$, $(-3,-1)$, $(-1,-3)$ 을 점마다 수 하나로 요약하려고 한다. 네 점의 평균은 원점이다. 원점을 지나는 직선의 방향을 단위벡터 $u$ 로 잡고 점 $z$ 를 그 직선에 수직으로 내리면, 직선 위의 위치는 $u^{\mathsf T}z$ 이고 잃는 부분은 $z-(u^{\mathsf T}z)u$ 다. 둘은 직교하므로 각 점에서 피타고라스 정리가 성립한다.

$$
\lVert z\rVert^2=(u^{\mathsf T}z)^2+\lVert z-(u^{\mathsf T}z)u\rVert^2
$$

네 점의 $\lVert z\rVert^2$ 는 모두 $10$ 이고 합은 $40$ 이다. $u=(1,0)$ 이면 위치가 $3, 1, -3, -1$ 이어서 제곱합이 $20$ 이고 잃는 부분의 제곱합도 $20$ 이다. $u=(1,1)/\sqrt 2$ 이면 위치가 $2\sqrt 2, 2\sqrt 2, -2\sqrt 2, -2\sqrt 2$ 여서 제곱합이 $32$ 이고, 잃는 부분은 $8$ 뿐이다. 합 $40$ 은 $u$ 와 무관하므로, 위치의 제곱합을 키우는 것과 잃는 부분의 제곱합을 줄이는 것이 같은 문제다.

$u=(\cos\theta,\sin\theta)$ 로 두면 위치의 제곱합은

$$
\sum_i (u^{\mathsf T}z_i)^2 = u^{\mathsf T}\begin{pmatrix}20&12\cr 12&20\end{pmatrix}u = 20+12\sin 2\theta
$$

이다. 가운데 행렬의 성분은 $x$ 좌표의 제곱합, $y$ 좌표의 제곱합, 두 좌표의 곱의 합이다. 최대는 $\theta=45^\circ$ 에서 $32$ 이고, 그때의 $u=(1,1)/\sqrt 2$ 는 이 행렬의 [고윳값](eigenvalues.md) $32$ 에 대한 고유벡터다. 가장 많이 남기는 방향은 이 행렬의 가장 큰 고윳값에 대한 고유벡터이고, 그에 직교하는 $(1,-1)/\sqrt 2$ 가 다음 방향이다.

# 정의

## 모집단 주성분

[확률변수](random-variables.md) $p$ 개를 모은 확률벡터 $X$ 의 평균을 $m$ 으로, 공분산행렬을 $\Sigma$ 로 둔다.

$$
\Sigma=\mathbb{E}\big[(X-m)(X-m)^{\mathsf T}\big]
$$

$\Sigma$ 의 고윳값을 $\lambda_1 \ge \cdots \ge \lambda_p$ 로 늘어놓고, 서로 직교하는 단위 고유벡터를 $u_1, \dots, u_p$ 로 고른다. $u_k$ 를 $k$ 번째 **주성분(principal component)** 이라 하고, $u_k^{\mathsf T}(X-m)$ 을 $k$ 번째 **주성분 점수(principal component score)** 라 한다.

$X$ 가 직관 절의 네 점에서 각각 확률 $1/4$ 로 값을 가지면 $m=0$ 이고 $\Sigma=\begin{pmatrix}5&3\cr 3&5\end{pmatrix}$ 다. 첫 주성분은 $u_1=(1,1)/\sqrt 2$ 이고 $\lambda_1=8$, 둘째 주성분은 $u_2=(1,-1)/\sqrt 2$ 이고 $\lambda_2=2$ 다. 점 $(3,1)$ 의 첫 주성분 점수는 $2\sqrt 2$ 다.

## 표본 주성분

$n \times p$ 데이터행렬의 각 열에서 그 열의 평균을 뺀 것을 **중심화된 데이터행렬(centered data matrix)** $Z$ 라 한다. **표본공분산행렬(sample covariance matrix)** 은 $S = Z^{\mathsf T} Z / (n-1)$ 이고, $S$ 의 고유벡터를 **표본 주성분(sample principal component)** 이라 한다.

직관 절의 네 점을 행으로 쌓으면 평균이 원점이므로 그대로 $Z$ 이고, $Z^{\mathsf T}Z=\begin{pmatrix}20&12\cr 12&20\end{pmatrix}$, $S=Z^{\mathsf T}Z/3$ 이다. 표본 주성분은 모집단 주성분과 같은 $(1,1)/\sqrt 2$, $(1,-1)/\sqrt 2$ 이고 고윳값은 $32/3$, $8/3$ 이다.

## 설명분산비율

$k$ 개 성분까지 남겼을 때의 **설명분산비율(explained variance ratio)** 은 다음과 같다.

$$
\rho_k=\frac{\lambda_1+\cdots+\lambda_k}{\lambda_1+\cdots+\lambda_p}
$$

분모를 **총분산(total variance)** 이라 한다. 직관 절의 예에서 $\rho_1 = 8/(8+2) = 4/5$ 다. 첫 주성분 하나가 퍼짐의 $80$ 퍼센트를 남긴다.

# 성질

## 공분산행렬의 주축

$\Sigma$ 는 대칭이고 양의 준정부호(positive semidefinite)이므로, [스펙트럼 정리](spectral-theorem.md)에 따라 직교하는 고유벡터를 가지고 고윳값이 모두 $0$ 이상이다. 평균을 원점으로 옮긴 표본은 타원체 모양으로 퍼지고, 이 타원체의 주축이 주성분이다. 총분산은 $\Sigma$ 의 대각합(trace)과 같다.

## 사영 분산

단위벡터 $u$ 방향의 점수의 분산은 다음과 같다.

$$
\mathrm{Var}(u^{\mathsf T}X)=u^{\mathsf T}\Sigma u
$$

$u^{\mathsf T}\Sigma u$ 는 단위벡터에서 Rayleigh 몫(Rayleigh quotient)과 같다. $u=u_k$ 이면 이 값이 $\lambda_k$ 이므로, $k$ 번째 주성분 점수의 분산은 $\lambda_k$ 다.

## 최적성

**정리 (분산 최대화).** $\lambda_1 = \max\lbrace\thinspace u^{\mathsf T} \Sigma u : \Vert u\Vert = 1 \thinspace\rbrace$ 이고 최대는 $u_1$ 에서 달성된다.

이미 고른 성분들과 직교한다는 제약을 걸고 같은 문제를 풀면 $\lambda_2, \lambda_3, \dots$ 이 차례로 나온다. 일반적인 $k$ 번째 값은 Courant–Fischer 최소최대 정리(Courant–Fischer min-max theorem)로 서술된다.

**정리 (재구성 오차 최소화).** $k$ 차원 부분공간 $W$ 로의 정사영을 $P_W$ 라 하면 다음 최소화 문제의 해가 상위 $k$ 개 주성분이 생성하는 공간이다.

$$
\min_{\dim W=k}\thinspace \frac{1}{n}\sum_{i=1}^{n}\lVert z_i-P_Wz_i\rVert^2
$$

직관 절의 피타고라스 등식을 모든 표본에 대해 더하면 두 문제가 같아진다. 행렬로 쓰면 Eckart–Young–Mirsky 정리(Eckart–Young–Mirsky theorem)가 같은 내용을 저계수 근사(low-rank approximation)의 최적성으로 진술한다. 남은 오차는 버린 고윳값의 합이다.

$$
\frac{1}{n-1}\min_{\mathrm{rank}B\le k}\lVert Z-B\rVert_F^2=\lambda_{k+1}+\cdots+\lambda_p
$$

직관 절의 예에서 $k=1$ 이면 잃는 부분의 제곱합 $8$ 을 $3$ 으로 나눈 $8/3$ 이 버린 표본 고윳값과 같다.

## SVD 로 계산하기

$Z = U D V^{\mathsf T}$ 가 $Z$ 의 [특이값 분해](singular-value-decomposition.md)(singular value decomposition, SVD)이면 다음이 성립한다.

$$
S=V\frac{D^{\mathsf T}D}{n-1}V^{\mathsf T}
$$

$V$ 의 열이 표본 주성분이고, 고윳값은 특이값의 제곱을 $n-1$ 로 나눈 값이며, 점수 행렬은 $ZV = UD$ 다. $Z^{\mathsf T} Z$ 를 만들면 조건수가 제곱이 되어 작은 성분이 수치적으로 뭉개지므로, 실제 계산은 $Z$ 의 SVD 를 직접 쓴다. 직관 절의 $Z$ 의 특이값은 $\sqrt{32}$ 와 $\sqrt 8$ 이다.

## 성분의 무상관성

점수들의 표본공분산은 $V^{\mathsf T} S V = \mathrm{diag}(\lambda_1, \dots, \lambda_p)$ 로 대각행렬이다. 원래 변수들이 강하게 상관되어 있어도 주성분 좌표에서는 상관이 사라진다. 각 좌표를 $\sqrt{\lambda_k}$ 로 나누어 공분산을 항등행렬로 만드는 것이 백색화(whitening)다. 무상관은 독립보다 약하므로 분포가 [정규분포](normal-distribution.md)가 아니면 성분들이 비선형으로 얽혀 있을 수 있다.

## 스케일 의존성

길이를 미터에서 밀리미터로 바꾸면 그 변수의 분산이 백만 배가 되어 첫 주성분을 독차지한다. 단위가 다른 변수를 섞을 때는 각 변수를 표준편차로 나눈 상관행렬(correlation matrix)에 대해 PCA 를 한다. 모든 변수가 같은 단위이면 공분산행렬을 그대로 쓴다. 중심화를 건너뛰면 첫 성분이 평균 방향을 가리킨다.

## 성분 개수의 선택

고윳값을 큰 순서로 그린 그래프에서 꺾이는 자리를 택하거나 $\rho_k$ 가 목표치를 넘는 최소 $k$ 를 택한다. 신호가 상위 몇 성분에 몰려 있고 나머지가 잡음이면 고윳값이 완만한 꼬리를 이룬다. 꼬리가 두껍고 평평하면 저차원 구조가 없으므로 차원을 줄이면 정보를 잃는다.

## 선형성과 분산 기준의 제약

- 선형 부분공간만 찾는다. 데이터가 곡면이나 나선 위에 있으면 분산은 커도 구조는 잡히지 않는다.
- 분산이 큰 방향이 쓸모 있는 방향이라는 보장은 없다. 분류에 결정적인 방향의 분산이 작으면 PCA 는 그 방향을 먼저 버린다.
- 제곱 오차를 쓰므로 이상치 하나가 공분산을 지배할 수 있다.
- 성분은 원래 변수들의 조밀한 선형결합이라 해석이 어렵다. 희소성을 요구하면 다른 방법이 필요하다.

# 활용

## 전처리와 시각화

수백 개 변수를 두세 개 성분으로 줄여 산점도를 그리면 군집, 이상치, 측정 오류가 드러난다. 설명변수들이 강하게 상관되어 [선형회귀](linear-regression.md)의 해가 불안정할 때 주성분 몇 개로 회귀하면 분산이 줄어든다. 대신 편향이 생기고 계수가 원래 변수의 의미를 잃는다.

## 압축과 잡음 제거

신호가 저차원 부분공간 근처에 있고 잡음이 모든 방향에 고르게 퍼져 있으면 상위 성분만 남기는 것이 잡음 제거가 된다. 이미지와 문서의 저차원 표현, 추천 시스템의 잠재요인(latent factor), 모델 가중치의 저계수 근사가 같은 원리다.

## 커널 PCA, 오토인코더, 확률적 PCA

내적을 커널로 바꾸면 [커널 PCA](kernel-pca.md)가 되고, 사영과 재구성을 신경망으로 바꾸면 오토인코더(autoencoder)가 된다. 선형 오토인코더의 최적해는 주성분이 생성하는 공간이다. 관측을 저차원 잠재변수의 선형변환에 등방성 잡음(isotropic noise)을 더한 것으로 보는 [확률적 PCA](probabilistic-pca.md)는 [최대가능도 추정](maximum-likelihood.md)의 해가 고전적 PCA 와 일치한다.

# 연관 문서

## 선수지식

- [특이값 분해](singular-value-decomposition.md)
- [확률변수](random-variables.md)
- [공분산](covariance.md)

## 더 알아보기

- [Marchenko–Pastur 법칙](marchenko-pastur.md)
- [커널 PCA](kernel-pca.md)
- [확률적 PCA](probabilistic-pca.md)

#linear_algebra #statistics
