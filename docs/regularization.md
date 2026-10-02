# 정칙화

# 개요

최소제곱 추정은 잔차제곱합만 최소로 만든다. 여기에 계수의 크기를 재는 항을 더해 함께 최소로 만드는 것이 **정칙화**다.

$$
\hat\beta=\arg\min\_\beta\thinspace \Vert y-X\beta\Vert^2+\lambda\thinspace P(\beta)
$$

벌점 $P$ 를 $\Vert\beta\Vert\_2^2$ 로 두면 능형회귀, $\Vert\beta\Vert\_1$ 로 두면 라소다. $\lambda$ 는 두 항의 비중을 정하는 수다.

# 직관

설명변수가 둘이고 그 둘이 거의 같은 값을 가지면, $\beta=(10,-9)$ 와 $\beta=(1,0)$ 이 거의 같은 적합값을 준다. 잔차제곱합이 두 계수를 거의 구별하지 못하므로 최소제곱의 해가 자료의 작은 변화에 크게 흔들린다. $X^\top X$ 의 고윳값 가운데 하나가 $0$ 에 가까워지고, 최소제곱 해 $(X^\top X)^{-1}X^\top y$ 에서 그 고유방향의 성분이 작은 수로 나뉘어 커진다. 계수의 분산이 그 고윳값의 역수에 비례한다.

작은 고윳값이 문제이므로 $X^\top X$ 대신 $X^\top X+\lambda I$ 를 쓰면 고윳값이 전부 $\lambda$ 만큼 올라가고 역행렬의 크기가 눌린다. 이 행렬이 나오는 최소화 문제를 거꾸로 찾으면 잔차제곱합에 $\lambda\Vert\beta\Vert\_2^2$ 를 더한 것이다. 계수가 작아진 대신 기댓값이 참값에서 벗어나고, $\lambda$ 를 키우면 분산이 줄고 치우침이 늘어난다. 평균제곱오차가 둘의 합이므로 $\lambda$ 를 어느 값까지 키우면 오차가 줄고, 그 뒤로는 늘어난다.

# 정의

## 벌점 최소화

자료 $(X,y)$ 와 볼록함수 $P$ , 수 $\lambda\ge0$ 에 대해 정칙화 추정량은

$$
\hat\beta(\lambda)=\arg\min\_{\beta}\thinspace \Vert y-X\beta\Vert\_2^2+\lambda P(\beta)
$$

이다. $\lambda=0$ 이면 최소제곱 추정량이고, $\lambda\to\infty$ 이면 $P$ 를 최소로 하는 점으로 간다.

## 능형회귀

$P(\beta)=\Vert\beta\Vert\_2^2$ 인 경우가 **능형회귀**(ridge regression)다. 목적함수가 이차식이므로 해가 닫힌 꼴이다.

$$
\hat\beta^{\mathrm{ridge}}(\lambda)=(X^\top X+\lambda I)^{-1}X^\top y
$$

## 라소

$P(\beta)=\Vert\beta\Vert\_1$ 인 경우가 **라소**(least absolute shrinkage and selection operator, LASSO)다. $\ell^1$ 벌점은 미분 불가능한 점을 원점에서 가지며 해의 좌표 여럿이 정확히 $0$ 이 된다.

## 제약 형태

두 벌점 문제는 제약 문제와 같다. 각 $\lambda$ 마다 어떤 $t$ 가 있어

$$
\min\_\beta\Vert y-X\beta\Vert\_2^2\quad\text{subject to}\quad P(\beta)\le t
$$

의 해와 일치한다. Lagrange 쌍대가 둘을 잇는다.

# 성질

## 축소

능형회귀의 해를 $X=U\Sigma V^\top$ 인 [특이값 분해](singular-value-decomposition.md)로 쓰면

$$
\hat y(\lambda)=\sum_j\frac{\sigma_j^2}{\sigma_j^2+\lambda}\thinspace u_j u_j^\top y
$$

다. 각 주성분 방향의 성분이 $\sigma_j^2/(\sigma_j^2+\lambda)$ 배로 줄고, 특이값이 작은 방향일수록 많이 줄어든다.

## 평균제곱오차

**정리.** $\lambda$ 가 $0$ 에서 커질 때 능형회귀의 평균제곱오차가 처음에는 감소한다.[^1]

$\lambda$ 에 대한 미분을 $\lambda=0$ 에서 계산하면 치우침의 제곱이 $\lambda^2$ 차수로 늘고 분산이 $\lambda$ 차수로 준다. 1차 항이 음수이므로 최소제곱 추정량은 평균제곱오차를 최소로 하지 않는다. [편향-분산 분해](bias-variance-decomposition.md)가 이 계산의 틀이다. ∎

## 해의 희소성

$X$ 의 열이 직교하고 $X^\top X=I$ 이면 라소의 해가 좌표마다 따로 계산된다.

$$
\hat\beta_j=\mathrm{sign}(z_j)\max(\vert z_j\vert-\lambda/2,\thinspace 0),\qquad z=X^\top y
$$

$\vert z_j\vert\le\lambda/2$ 인 좌표가 정확히 $0$ 이 된다. 같은 조건에서 능형회귀의 해는 $z_j/(1+\lambda)$ 이고 어느 좌표도 $0$ 이 아니다. $\ell^1$ 공의 꼭짓점이 좌표축 위에 있어 제약 집합과 타원의 접점이 축에서 생기는 것이 기하적 이유다.

일반적인 $X$ 에서 라소의 해는 닫힌 꼴이 아니고 [근접 경사법](proximal-gradient-method.md)이나 좌표하강으로 계산한다.

## 사전분포

계수에 사전분포를 두고 최대사후확률 추정을 하면 벌점이 나온다. $\beta_j\sim N(0,\tau^2)$ 이면 로그사후확률에 $-\Vert\beta\Vert\_2^2/(2\tau^2)$ 가 더해져 능형회귀가 되고, Laplace 사전분포이면 $\ell^1$ 항이 나와 라소가 된다. $\lambda$ 는 오차분산과 사전분산의 비다.

# 활용

- **다중공선성.** 설명변수가 거의 선형종속이면 [선형회귀](linear-regression.md)의 계수 분산이 커진다. 능형회귀가 $X^\top X$ 의 대각을 키워 이 분산을 누른다.
- **변수 선택.** 라소의 해에서 $0$ 이 아닌 좌표만 모형에 남는다. 적합과 선택을 한 번의 볼록 최적화로 함께 한다.
- **벌점 세기의 결정.** $\lambda$ 를 격자 위에서 훑고 [교차검증](cross-validation.md) 오차가 가장 작은 값을 고른다. 능형회귀는 적합이 선형이라 하나 빼기 교차검증의 닫힌 꼴이 그대로 쓰인다.
- **커널 방법.** 능형회귀의 벌점을 재생핵 Hilbert 공간의 노름으로 바꾸면 표현 정리가 해를 자료점에서의 핵 값들의 선형결합으로 준다. [Gauss 과정](gaussian-processes.md) 회귀의 사후평균이 같은 식이다.
- **역문제.** 관측 연산자가 나쁜 조건수를 가질 때 $\ell^2$ 벌점을 더해 해를 안정시키는 것을 Tikhonov 정칙화라 한다. 능형회귀가 그 유한차원 경우다.

[^1]: A. E. Hoerl, R. W. Kennard, "Ridge regression: biased estimation for nonorthogonal problems", *Technometrics* **12** (1970), 55–67. 교재 서술은 T. Hastie, R. Tibshirani, J. Friedman, *The Elements of Statistical Learning*, 2nd ed., Springer (2009), 3.4절.

# 연관 문서

## 선수지식

- [편향-분산 분해](bias-variance-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #machine_learning #optimization #linear_algebra
