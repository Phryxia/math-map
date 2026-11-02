# 확률적 PCA

# 개요

**확률적 PCA(probabilistic principal component analysis)** 는 [주성분 분석](principal-component-analysis.md)을 잠재변수가 있는 Gauss 선형 모형의 최대가능도 추정으로 다시 얻는 방법이다. 설문 응답 표에 빈칸이 몇 개 있을 때 주성분 분석은 빈칸을 어떻게 채울지, 주성분을 몇 개 남길지 정하는 규칙을 주지 않는다. 확률적 PCA 는 관측이 저차원 잠재변수의 선형변환에 잡음을 더해 생긴다고 두고, 그 확률모형의 가능도로 빈칸과 성분 개수를 정한다.

# 직관

두 과목 점수에서 평균을 뺀 점 $(x_1,x_2)$ 를 모았더니 표본 [공분산](covariance.md)행렬의 고윳값이 $5$ 와 $1$ 이고, 고유벡터가 $u_1=(1,1)/\sqrt2$ 와 $u_2=(1,-1)/\sqrt2$ 였다. [주성분 분석](principal-component-analysis.md)은 $u_1$ 방향의 직선 하나를 남기고 점을 그 직선에 사영한다. 수직 방향의 분산 $1$ 이 무엇인지, 한 과목 점수가 빠진 학생을 어디에 놓을지는 이 절차가 정하지 않는다.

점이 다음처럼 생긴다고 놓는다. 학생마다 보이지 않는 수 $z$ 를 표준정규분포에서 뽑아 벡터 $w$ 에 곱하고, 두 과목에 각각 분산 $\sigma^2$ 인 잡음을 따로 더한다. 그러면 점들의 공분산은 $ww^{\mathsf T}+\sigma^2I$ 이고, $w$ 방향의 분산은 $\Vert w\Vert^2+\sigma^2$, 그에 수직인 방향의 분산은 $\sigma^2$ 다.

이 공분산을 표본의 것에 맞추면 $\sigma^2=1$, $\Vert w\Vert^2=4$ 이고 $w$ 는 $u_1$ 방향이다. 남는 직선은 주성분 분석의 것과 같고, 수직 방향의 분산 $1$ 은 잡음의 분산이다. 점 $x$ 가 주어졌을 때 $wz$ 의 평균을 계산하면 $x$ 를 직선에 사영한 점의 $4/5$ 배가 나온다. 관측된 크기 가운데 잡음의 몫을 빼고 신호를 추정하기 때문이다.

# 정의

## 모형

$z \in \mathbb R^q$ 와 $x \in \mathbb R^d$ 와 $q \lt d$ 로 두고 다음을 가정한다.

$$
z\sim N(0,I_q),\qquad x\mid z\thickspace\sim\thickspace N(Wz+\mu,\thinspace\sigma^2I_d)
$$

이 모형을 **확률적 PCA** 라 하고, $z$ 를 잠재변수(latent variable), $W\in\mathbb R^{d\times q}$ 를 적재행렬(loading matrix)이라 한다. Gauss 분포의 주변화가 다시 Gauss 이므로 관측의 주변분포는 다음이다.

$$
x\sim N(\mu,\thinspace C),\qquad C=WW^{\mathsf T}+\sigma^2I_d
$$

직관 절은 $d=2$, $q=1$, $\mu=0$, $W=(\sqrt2,\sqrt2)^{\mathsf T}$, $\sigma^2=1$ 인 경우다. $C$ 는 대각성분이 $3$, 비대각성분이 $2$ 인 행렬이고 고윳값이 $5$ 와 $1$ 이다.

## 사후분포

Gauss 켤레성으로 잠재변수의 사후분포도 Gauss 다. $M = W^{\mathsf T}W+\sigma^2I_q$ 라 하면

$$
z\mid x\thickspace\sim\thickspace N\big(M^{-1}W^{\mathsf T}(x-\mu),\thinspace\sigma^2M^{-1}\big)
$$

이다. 사후평균을 점 $x$ 의 **점수(score)** 라 한다. $q\times q$ [행렬](matrices.md)만 역행렬을 구하므로 $d$ 가 커도 계산이 싸다. 직관 절의 예에서 $M=5$ 이고, 점 $x=(1,1)$ 의 점수는 $(\sqrt2+\sqrt2)/5\approx 0.566$, 사후분산은 $1/5$ 이다. $W$ 에 점수를 곱한 $(0.8,0.8)$ 은 $x$ 를 직선에 사영한 $(1,1)$ 의 $4/5$ 배다.

## 최대가능도 해

표본 공분산 $S$ 의 고윳값을 $\lambda_1\ge\cdots\ge\lambda_d$ 로, 대응 고유벡터를 $u_1,\dots,u_d$ 라 한다. 최대가능도 해는 다음과 같다.[^1]

$$
\hat\mu=\bar x,\qquad
\hat\sigma^2=\frac1{d-q}\sum_{j=q+1}^d\lambda_j,\qquad
\hat W=U_q\big(\Lambda_q-\hat\sigma^2I_q\big)^{1/2}R
$$

$U_q$ 는 상위 $q$ 개 고유벡터를 열로 가진 행렬, $\Lambda_q$ 는 대응 고윳값의 대각행렬, $R$ 은 임의의 직교행렬이다. 부분공간은 상위 주성분들이 생성하는 공간이고, 잡음 분산은 버린 고윳값들의 평균이며, 각 축의 크기는 고윳값에서 잡음 분산을 뺀 값의 제곱근이다. 직관 절에서 $\hat\sigma^2=1$, $\hat W=u_1\sqrt{5-1}=(\sqrt2,\sqrt2)^{\mathsf T}$ 이고 $R=\pm1$ 이다.

# 성질

## 회전 불변성

$z$ 의 분포 $N(0,I_q)$ 는 회전에 불변이므로 $W$ 와 $WR$ 은 같은 $C$ 를 준다. 그래서 최대가능도가 정하는 것은 $W$ 가 아니라 그 열이 생성하는 부분공간이다. 고전 PCA 처럼 개별 축을 특정하려면 $R$ 을 고정하는 규약을 따로 둔다. $\sigma^2\to 0$ 이면 점수의 수축이 사라지고 고전 PCA 의 사영과 같아진다.

## 모형 공분산

최대가능도 해를 넣으면 모형 공분산이 상위 $q$ 방향에서 표본 공분산과 일치한다.

$$
\hat C=U_q\Lambda_qU_q^{\mathsf T}+\hat\sigma^2\Big(I-U_qU_q^{\mathsf T}\Big)
$$

남긴 방향의 분산은 그대로 두고 버린 방향들의 분산을 그 평균으로 바꾼 것이다. 모형이 $d-q$ 개의 서로 다른 고윳값을 하나로 뭉치므로 정보 손실이 이 자리에서 일어난다.

## 상위 고윳값의 최적성

로그가능도는 $\ln|C| + \mathrm{tr}(C^{-1}S)$ 의 부호를 바꾼 것에 상수를 더한 형태다. 어느 $q$ 개를 남기든 [대각화](eigenvalues.md)된 좌표에서 $\mathrm{tr}(C^{-1}S) = d$ 이므로 선택은 $\ln|C|$ 가 정한다. 버린 고윳값들의 산술평균이 기하평균 이상이므로 상위 $q$ 개를 남기는 것이 최적이다.

## EM 알고리즘

잠재변수를 결측으로 보고 [기댓값 최대화 알고리즘](em-algorithm.md)(expectation-maximization, EM)을 돌리면 고유분해 없이 해를 얻는다.

E 단계에서 각 점의 사후 적률을 계산한다.

$$
\mathbb E[z_i]=M^{-1}W^{\mathsf T}(x_i-\mu),\qquad \mathbb E[z_iz_i^{\mathsf T}]=\sigma^2M^{-1}+\mathbb E[z_i]\mathbb E[z_i]^{\mathsf T}
$$

M 단계에서 $W$ 와 $\sigma^2$ 를 갱신한다.

$$
W^{\text{new}}=\left(\sum_i(x_i-\mu)\mathbb E[z_i]^{\mathsf T}\right)\left(\sum_i\mathbb E[z_iz_i^{\mathsf T}]\right)^{-1}
$$

한 번 순회의 비용이 $O(ndq)$ 로 공분산행렬을 만드는 $O(nd^2)$ 보다 싸고, 표본 공분산을 만들 필요도 없다. $d$ 가 크고 $q$ 가 작을 때 이득이 크다.

## 결측값 처리

관측되지 않은 좌표를 잠재변수와 함께 E 단계에서 채우면 결측이 있는 자료에도 적용된다. 고전 PCA 에는 결측 좌표를 다루는 원칙이 없다. 추천 시스템의 행렬 완성(matrix completion)이 같은 구조다.

## 인자분석과의 차이

잡음 공분산을 등방성 $\sigma^2I$ 대신 임의의 대각행렬 $\Psi$ 로 두면 인자분석(factor analysis)이 된다.

| | 확률적 PCA | 인자분석 |
|---|---|---|
| 잡음 | $\sigma^2I$ | 대각 $\Psi$ |
| 좌표 스케일 | 바꾸면 해가 달라짐 | 스케일 불변 |
| 해 | 닫힌 꼴 | EM 등 반복 필요 |
| 의미 | 신호 부분공간 + 균일 잡음 | 공통인자 + 변수별 고유분산 |

변수들의 단위와 잡음 수준이 크게 다르면 인자분석이 적절하고, 그렇지 않으면 확률적 PCA 의 닫힌 해를 쓴다.

## 성분 개수의 선택

가능도가 있으므로 모형 선택 기준을 쓴다. [정보 기준](information-criteria.md)의 Bayes 정보 기준(Bayesian information criterion, BIC)이나 주변가능도로 $q$ 를 고르거나, $W$ 의 각 열에 사전분포를 두어 필요 없는 열을 0 으로 보내는 자동 관련도 결정(automatic relevance determination)을 쓴다.

잡음이 등방적이지 않으면 $\hat\sigma^2$ 가 큰 잡음 방향에 끌려가 성분 개수를 잘못 고른다.

## 혼합모형 확장

각 성분이 자기 부분공간을 가지는 혼합 확률적 PCA(mixture of probabilistic PCA)는 데이터가 여러 저차원 조각으로 이루어진 경우를 다루고, 비선형 [다양체](manifolds.md)를 국소 선형 조각으로 근사한다.

# 활용

## 불확실성이 있는 저차원 표현

점수에 사후 공분산 $\sigma^2M^{-1}$ 이 함께 나오므로 각 점의 표현에 대한 불확실성을 알 수 있고, 하류 작업으로 전파할 수 있다.

## 이상값 탐색

새 점의 주변가능도 $N(x\mid\mu, WW^{\mathsf T}+\sigma^2I)$ 를 직접 계산한다. 값이 낮으면 모형이 설명하지 못하는 점이다. 부분공간까지의 거리만 보는 방식과 달리 부분공간 안에서 멀리 떨어진 점도 잡아낸다.

## 큰 자료에서의 계산

$d$ 가 수만이고 $q$ 가 수십이면 $d\times d$ 공분산행렬을 만들 수 없다. EM 은 자료를 한 묶음씩 보며 $O(ndq)$ 로 진행하므로 이 규모에서 쓸 수 있고, 온라인 갱신과 미니배치 변형이 나온다.

## 생성모형 확장

관측을 잠재변수의 변환에 잡음을 더한 것으로 보는 틀을 유지하고 선형변환을 신경망으로 바꾸면 [변분 오토인코더](variational-autoencoder.md)가 된다. 이때 사후분포가 닫힌 꼴이 아니므로 변분 근사가 필요하다. 확률적 PCA 는 이 계열에서 모든 계산이 닫힌 꼴로 되는 경우다.

[^1]: Tipping, Bishop, *Probabilistic Principal Component Analysis*, J. R. Statist. Soc. B 61(3), 1999. 최대가능도 해의 닫힌 꼴, 회전 불변성, EM 알고리즘.

# 연관 문서

## 선수지식

- [주성분 분석](principal-component-analysis.md)
- [통계 개관](statistics-overview.md)

## 더 알아보기

- [변분 오토인코더](variational-autoencoder.md)

#statistics #linear_algebra #machine_learning
