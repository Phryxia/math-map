# Ledoit–Wolf 축소 추정

# 개요

**Ledoit–Wolf 축소 추정(Ledoit–Wolf shrinkage estimator)** 은 표본공분산행렬 $S$ 와 단위행렬의 배수 $mI$ 의 볼록결합으로 공분산행렬을 추정하고, 결합 비율을 자료에서 계산하는 추정량이다. 변수가 $100$ 개인데 관측이 $100$ 번뿐이면 표본공분산행렬은 가역이 아니고, 고윳값이 실제보다 크게 퍼진다. 이 추정량은 표본공분산행렬을 단위행렬 쪽으로 당겨 고윳값의 퍼짐을 줄이고, 당기는 비율을 기대 오차가 가장 작게 정한다.

# 직관

O. Ledoit 와 M. Wolf 가 2004 년에 이 추정량을 제시했다[^1]. [James–Stein 추정량](james-stein-estimator.md)이 평균 벡터를 한 점 쪽으로 줄이듯 이 추정량은 공분산행렬을 단위행렬 쪽으로 줄인다. 차원 $p$ 가 표본수 $n$ 과 같은 규모일 때 고윳값이 퍼지는 모양은 [Marchenko–Pastur 법칙](marchenko-pastur.md)이 준다.

참 공분산이 $\Sigma=I$ 이고 $p=100$, $n=200$ 이라 하자. Marchenko–Pastur 법칙으로 $S$ 의 고윳값은 $0.086$ 부터 $2.91$ 까지 퍼지므로, $S$ 의 가장 큰 고윳값과 가장 작은 고윳값의 비가 $30$ 이 넘는다. 참값의 고윳값은 모두 $1$ 이고 그 비는 $1$ 이다.

$S$ 의 고윳값의 평균 $m=\mathrm{tr}(S)/p$ 는 $1$ 에 가깝다. $S$ 를 $mI$ 쪽으로 비율 $\rho$ 만큼 옮긴 $\rho mI+(1-\rho)S$ 의 고윳값은 $\rho m+(1-\rho)\lambda_i$ 이므로, $\rho$ 가 클수록 고윳값이 $m$ 쪽으로 모인다. 이 예에서는 $\rho=1$ 이 참값을 준다.

참값이 $I$ 의 배수가 아니면 $\rho=1$ 은 너무 많이 옮긴 것이다. 그래서 $\rho$ 를 $S$ 의 흔들림의 크기와 $S$ 가 $mI$ 에서 떨어진 정도의 비로 정한다. 흔들림이 크면 많이 옮기고, $S$ 가 $mI$ 에서 멀면 적게 옮긴다.

# 정의

## 노름

$p\times p$ [행렬](matrices.md)에 대해 $\langle A,B\rangle=\mathrm{tr}(AB^{\mathsf T})/p$, $\Vert A\Vert^2=\langle A,A\rangle$ 로 둔다. $\Vert I\Vert=1$ 이다.

## 신탁 추정량

$\mu=\langle\Sigma,I\rangle$ 라 하고, $\Sigma^\ast=\rho\mu I+(1-\rho)S$ 의 기대 손실 $\mathbb E\Vert\Sigma^\ast-\Sigma\Vert^2$ 을 최소로 하는 $\rho$ 를 구한다. 다음 세 양으로

$$
\alpha^2=\Vert\Sigma-\mu I\Vert^2,\qquad\beta^2=\mathbb E\Vert S-\Sigma\Vert^2,\qquad\delta^2=\mathbb E\Vert S-\mu I\Vert^2
$$

최적 비율은 $\rho=\beta^2/\delta^2$ 이고 $\delta^2=\alpha^2+\beta^2$ 이다[^1]. 이 $\rho$ 를 쓴 추정량을 **신탁 추정량(oracle estimator)** 이라 한다. $\Sigma$ 를 모르면 계산할 수 없다.

## 추정량

표본 $x_1,\dots,x_n$ 이 평균 $0$ 이고 $S=\frac1n\sum_kx_kx_k^{\mathsf T}$ 라 한다. 세 양을 다음으로 추정한다.

$$
m=\langle S,I\rangle,\qquad d^2=\Vert S-mI\Vert^2,\qquad \bar b^2=\frac1{n^2}\sum_{k=1}^{n}\Vert x_kx_k^{\mathsf T}-S\Vert^2
$$

$b^2=\min(\bar b^2,d^2)$ 로 두면 **Ledoit–Wolf 추정량** 은 다음이다.

$$
\hat\Sigma=\frac{b^2}{d^2}mI+\Big(1-\frac{b^2}{d^2}\Big)S
$$

$\bar b^2$ 는 $S$ 를 이루는 항 $x_kx_k^{\mathsf T}$ 들이 평균 $S$ 에서 흩어진 정도로 $\beta^2$ 를 추정한다.

# 성질

## 일치성

정리. $p/n$ 이 유계이고 표본의 4 차 적률이 유계인 점근 체제에서, $\mathbb E\Vert\hat\Sigma-\Sigma\Vert^2$ 과 신탁 추정량의 기대 손실의 차가 $0$ 으로 간다[^1].

증명의 요지. $m-\mu$, $d^2-\delta^2$, $b^2-\beta^2$ 이 모두 이차평균으로 $0$ 으로 수렴한다는 것을 보인다. 그러면 비율 $b^2/d^2$ 이 $\beta^2/\delta^2$ 에 가까워지고 손실의 차가 작아진다.

## 조건수

$\hat\Sigma$ 의 고윳값은 $\rho m+(1-\rho)\lambda_i$ 이고 $\rho=b^2/d^2\gt 0$ 이면 모두 $\rho m$ 이상이다. 그래서 $p\gt n$ 이라 $S$ 가 특이행렬이어도 $\hat\Sigma$ 는 가역이다. 고유벡터는 $S$ 의 것과 같다.

## 비선형 축소

$\hat\Sigma$ 는 $S$ 의 고윳값 $\lambda_i$ 를 일차함수 $\lambda\mapsto\rho m+(1-\rho)\lambda$ 로 바꾼다. 고윳값마다 다른 함수로 바꾸는 추정량을 비선형 축소(nonlinear shrinkage)라 한다. Marchenko–Pastur 법칙의 Stieltjes 변환 관계를 거꾸로 풀어 관측 스펙트럼에서 참 스펙트럼을 추정하는 방법을 El Karoui 가 주었고[^2], Ledoit 와 Wolf 는 같은 관계로 고윳값마다의 최적 변환을 추정했다[^3].

# 활용

- 포트폴리오 최적화. 자산 수가 관측 기간과 비슷하면 $S^{-1}$ 이 작은 고윳값을 키워 가중치가 불안정하다. Ledoit 와 Wolf 의 2004 년 논문이 이 용도로 추정량을 제안했다[^1].
- 선형판별분석과 Gauss 분류기에서 공분산의 역행렬이 필요할 때 $S$ 대신 $\hat\Sigma$ 를 쓴다. $p\gt n$ 이어도 역행렬이 존재한다.
- [주성분 분석](principal-component-analysis.md)의 고유벡터는 바뀌지 않고 고윳값만 줄어드므로, 성분의 방향이 아니라 설명 분산의 크기를 보정할 때 쓴다.

[^1]: O. Ledoit, M. Wolf, "A well-conditioned estimator for large-dimensional covariance matrices", *Journal of Multivariate Analysis* **88** (2004), 365–411.
[^2]: N. El Karoui, "Spectrum estimation for large dimensional covariance matrices using random matrix theory", *Annals of Statistics* **36** (2008), 2757–2790.
[^3]: O. Ledoit, M. Wolf, "Nonlinear shrinkage estimation of large-dimensional covariance matrices", *Annals of Statistics* **40** (2012), 1024–1060.

# 연관 문서

## 선수지식

- [James–Stein 추정량](james-stein-estimator.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #linear_algebra
