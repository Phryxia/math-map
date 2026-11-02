# 선형회귀

# 개요

**선형회귀(linear regression)** 는 한 변수의 평균이 다른 변수들의 일차식으로 정해진다고 놓고 그 일차식의 계수를 자료에서 정하는 방법이다. 사람들의 키와 몸무게를 평면에 점으로 찍고 직선 하나를 맞추려면 어느 직선이 가장 잘 맞는지를 정해야 한다. 선형회귀는 각 점에서 직선까지의 세로 거리를 제곱해 더한 값이 가장 작은 직선을 고르고, 그 계수를 연립일차방정식 하나로 구한다.

# 직관

세 점 $(0,0)$, $(1,1)$, $(2,1)$ 에 직선 $y=a+bx$ 를 맞춘다. 세 점이 한 직선 위에 있지 않으므로 어떤 직선도 세 점을 모두 지나지 않는다. 점마다 세로 거리 $y_i-(a+bx_i)$ 를 재고, 그 제곱의 합

$$
(0-a)^2+(1-a-b)^2+(1-a-2b)^2
$$

을 가장 작게 하는 $a,b$ 를 고른다. $a$ 와 $b$ 로 각각 미분해 $0$ 으로 놓으면 $3a+3b=2$, $3a+5b=3$ 이고, 풀면 $b=1/2$, $a=1/6$ 이다. 남는 세로 거리는 $-1/6$, $1/3$, $-1/6$ 이고 그 제곱합은 $1/6$ 이다.

같은 계산을 벡터로 본다. 관측값을 $y=(0,1,1)$, 상수 열을 $\mathbf 1=(1,1,1)$, 설명변수 열을 $x=(0,1,2)$ 로 두면 $a\mathbf 1+bx$ 는 두 벡터가 생성하는 평면 위의 점이다. 제곱합은 $y$ 와 그 점 사이 거리의 제곱이므로, 가장 가까운 점은 $y$ 에서 평면으로 내린 수선의 발이다([내적 공간](inner-product-spaces.md)). 남는 벡터 $(-1/6,1/3,-1/6)$ 은 실제로 $\mathbf 1$ 과도 $x$ 와도 내적이 $0$ 이다.

# 정의

## 모형과 설계행렬

관측 $i=1,\dots,n$ 에 대해

$$
y_i \thickspace=\thickspace \beta_0 + \beta_1 x_{i1} + \cdots + \beta_{p-1} x_{i,p-1} + \varepsilon_i
$$

를 가정한다. [행렬](matrices.md)로 쓰면

$$
y = X\beta + \varepsilon, \qquad y \in \mathbb{R}^{n},\thickspace X \in \mathbb{R}^{n \times p},\thickspace \beta \in \mathbb{R}^{p}.
$$

$X$ 를 **설계행렬(design matrix)** 이라 하고, 절편을 쓰면 첫 열이 $1$ 벡터다. 직관 절의 세 점은 $n=3$, $p=2$ 이고 $X$ 의 행은 $(1,0)$, $(1,1)$, $(1,2)$ 다.

선형은 계수에 대한 선형이지 변수에 대한 선형이 아니다. 열에 $x^2$, $\log x$, 두 변수의 곱, 기저함수 값을 넣어도 선형회귀이고, 범주형 변수는 지시변수 열로 부호화한다. 세 점에 $y=a+bx+cx^2$ 을 맞추면 $X$ 의 행은 $(1,0,0)$, $(1,1,1)$, $(1,2,4)$ 다.

**Gauss–Markov 가정(Gauss–Markov assumptions)** 은 다음 세 가지다.

$$
\mathbb{E}[\varepsilon] = 0, \qquad \mathrm{Var}(\varepsilon) = \sigma^2 I_n, \qquad \mathrm{rank}(X) = p \le n .
$$

둘째 가정은 오차의 등분산성과 무상관을 함께 요구하고, 정규성은 여기서 쓰지 않는다.

## 최소제곱 문제와 정사영

**최소제곱추정량(least squares estimator)** 은

$$
\hat\beta \thickspace=\thickspace \arg\min_{b \in \mathbb{R}^{p}} \thickspace \lVert y - Xb \rVert^{2}
$$

이다. $Xb$ 의 집합이 $X$ 의 열공간 $C(X)$ 이므로 이 문제는 부분공간 위의 최근접점 찾기다. 내적 공간의 정사영 정리로 최근접점 $\hat y$ 가 유일하게 존재하고, 그 조건은

$$
y - \hat{y} \thickspace\perp\thickspace C(X), \qquad \text{곧}\quad X^{\top}(y - X\hat\beta) = 0
$$

이다. 이 식을 정리한

$$
X^{\top}X\thinspace\hat\beta \thickspace=\thickspace X^{\top}y
$$

를 **정규방정식(normal equations)** 이라 한다. $\mathrm{rank}(X)=p$ 이면 $X^{\mathsf T}X$ 가 가역이므로

$$
\hat\beta = (X^{\top}X)^{-1}X^{\top}y, \qquad \hat{y} = X\hat\beta = Hy .
$$

직관 절에서 $X^{\top}X$ 는 행이 $(3,3)$, $(3,5)$ 인 행렬이고 $X^{\top}y=(2,3)$ 이므로 정규방정식은 $3a+3b=2$, $3a+5b=3$ 이다.

## 모자 행렬

$$
H \thickspace=\thickspace X(X^{\top}X)^{-1}X^{\top}
$$

를 **모자 행렬(hat matrix)** 이라 한다. $y$ 에 $H$ 를 곱하면 적합값 $\hat y$ 가 나온다. 대각원소 $h_{ii}$ 를 관측 $i$ 의 **레버리지(leverage)** 라 하고, **잔차(residual)** 를 $e=y-\hat y=(I-H)y$ 로 둔다. 직관 절에서 $(X^{\top}X)^{-1}$ 은 행이 $(5/6,-1/2)$, $(-1/2,1/2)$ 이므로 레버리지는 $5/6$, $1/3$, $5/6$ 이고 잔차는 $(-1/6,1/3,-1/6)$ 이다.

## 잔차제곱합과 분산추정

$$
\mathrm{RSS} = \lVert e \rVert^{2} = y^{\top}(I - H)y, \qquad
\hat\sigma^{2} = \frac{\mathrm{RSS}}{n - p}.
$$

$\mathrm{RSS}$ 를 **잔차제곱합(residual sum of squares)** 이라 한다. 직관 절에서 $\mathrm{RSS}=1/6$ 이고 $\hat\sigma^2=(1/6)/(3-2)=1/6$ 이다.

# 성질

## 모자 행렬의 성질

$H$ 는 $C(X)$ 로 가는 정사영이므로 다음이 성립한다.

$$
H^{\top} = H, \qquad H^{2} = H, \qquad HX = X, \qquad \mathrm{tr}(H) = p .
$$

대칭이고 멱등이므로 [고윳값](eigenvalues.md)이 $0$ 과 $1$ 뿐이고, $1$ 의 중복도가 $\mathrm{rank}(X)=p$ 라 대각합이 $p$ 다. 직관 절의 레버리지 합 $5/6+1/3+5/6=2$ 가 $p$ 다. $I-H$ 는 $C(X)$ 의 직교여공간으로 가는 사영이다. 레버리지는 $0\le h_{ii}\le1$ 이고 $h_{ii}=\partial\hat y_i/\partial y_i$ 이므로, 레버리지가 큰 관측은 자기 적합값을 크게 움직인다.

$\mathbb{E}[\mathrm{RSS}]=(n-p)\sigma^2$ 이므로 $\hat\sigma^2$ 은 불편이다. 잔차가 $X^\top e=0$ 이라는 $p$ 개의 선형제약을 받아 자유도가 $n-p$ 다.

## 정사영 정리와 유일성

$b$ 가 임의의 계수벡터일 때

$$
\lVert y - Xb \rVert^{2} = \lVert y - \hat{y} \rVert^{2} + \lVert \hat{y} - Xb \rVert^{2}
$$

가 성립한다. $y-\hat{y}$ 가 $C(X)$ 와 직교하고 $\hat{y}-Xb\in C(X)$ 이므로 Pythagoras 정리가 적용된다. 오른쪽 둘째 항은 $Xb = \hat{y}$ 일 때만 0 이므로 $\hat{y}$ 는 유일하고, 열이 일차독립이면 $\hat\beta$ 도 유일하다. 열이 일차종속이면 $\hat{y}$ 는 여전히 유일하지만 $\hat\beta$ 는 유일하지 않고, 이때는 Moore–Penrose 유사역행렬(Moore–Penrose pseudoinverse)로 노름이 최소인 해를 고른다.

## Gauss–Markov 정리

Gauss–Markov 정리(Gauss–Markov theorem)는 다음이다. Gauss–Markov 가정 아래에서 $\hat\beta$ 는 불편이고

$$
\mathbb{E}[\hat\beta] = \beta, \qquad \mathrm{Var}(\hat\beta) = \sigma^{2}(X^{\top}X)^{-1}
$$

이며, 임의의 $c \in \mathbb{R}^p$ 에 대해 $c^\top \beta$ 의 선형불편추정량 중 분산이 최소인 것은 $c^\top \hat\beta$ 다(BLUE, best linear unbiased estimator).

증명의 요지는 다음과 같다. 다른 선형불편추정량을 $\tilde{a} = a^\top y$ 라 하고 $a = X(X^\top X)^{-1}c + d$ 로 분해한다. 불편성은 모든 $\beta$ 에 대해 $a^\top X\beta = c^\top \beta$ 를 요구하므로 $X^\top d = 0$ 이고, 즉 $d \perp C(X)$ 다. 그러면

$$
\mathrm{Var}(a^{\top}y) = \sigma^{2}\lVert a \rVert^{2} = \sigma^{2}\big(\lVert X(X^{\top}X)^{-1}c \rVert^{2} + \lVert d \rVert^{2}\big) \thickspace\ge\thickspace \mathrm{Var}(c^{\top}\hat\beta),
$$

등호는 $d=0$ 일 때만 성립한다. 증명에 오차의 분포를 쓰지 않았다. 선형과 불편이라는 제약을 풀면 평균제곱오차가 더 작은 추정량이 있다. 능형회귀(ridge regression) 추정량은 편향을 더하는 대신 평균제곱오차를 줄인다.

## 정규오차 아래의 최대가능도

오차가 [정규분포](normal-distribution.md) $\varepsilon \sim N(0, \sigma^2 I)$ 를 따른다고 추가로 가정하면 로그가능도는

$$
\ell(\beta, \sigma^{2}) = -\frac{n}{2}\log(2\pi\sigma^{2}) - \frac{1}{2\sigma^{2}}\lVert y - X\beta \rVert^{2}
$$

이다. $\beta$ 에 대한 부분이 $-\mathrm{RSS}/(2\sigma^2)$ 뿐이므로 가능도 최대화가 잔차제곱합 최소화와 같은 문제이고, 최소제곱추정량이 정규오차 모형의 [최대가능도 추정](maximum-likelihood.md)량(maximum likelihood estimator, MLE)이다. 분산에 대해서는 미분해서

$$
\hat\sigma^{2}\_{\mathrm{MLE}} = \frac{\mathrm{RSS}}{n}
$$

을 얻는다. 이 값은 아래로 치우쳐 있어 $n-p$ 로 나눈 값을 쓴다. 오차가 Laplace 분포이면 같은 계산이 절대편차합 최소화, 곧 중앙값 회귀를 준다([분위수 회귀](quantile-regression.md)). 손실함수의 선택은 오차분포의 가정과 대응한다.

## 추정량의 분포와 추론

정규 가정 아래

$$
\hat\beta \sim N\negthinspace\big(\beta,\thickspace \sigma^{2}(X^{\top}X)^{-1}\big), \qquad
\frac{\mathrm{RSS}}{\sigma^{2}} \sim \chi^{2}\_{n-p},
$$

이고 둘은 독립이다. 두 양이 직교하는 두 사영에 의한 정규벡터의 상의 함수이기 때문이다. 그러므로 $(X^{\mathsf T}X)^{-1}$ 의 $j$ 번째 대각원소를 $v_j$ 라 할 때

$$
\frac{\hat\beta_j - \beta_j}{\hat\sigma \sqrt{v_j}} \sim t_{n-p}
$$

는 [t 분포](t-distribution.md)를 따르는 피벗량(pivot)이고, 이것으로 계수의 [신뢰구간](confidence-intervals.md)과 t 검정(t-test)을 만든다. 여러 계수를 동시에 검정하려면 [F 분포](f-distribution.md)를 따르는 F 통계량을 쓴다. 모형 비교의 F 검정은 두 사영의 잔차제곱합 차이를 자유도로 나눈 값을 쓴다.

## 분해와 결정계수

절편이 모형에 있으면 잔차의 합이 0 이고, 총제곱합이 직교분해된다.

$$
\underbrace{\sum_i (y_i - \bar{y})^{2}}\_{\mathrm{TSS}} = \underbrace{\sum_i (\hat{y}\_i - \bar{y})^{2}}\_{\mathrm{ESS}} + \underbrace{\sum_i (y_i - \hat{y}\_i)^{2}}\_{\mathrm{RSS}}, \qquad
R^{2} = 1 - \frac{\mathrm{RSS}}{\mathrm{TSS}} = \frac{\mathrm{ESS}}{\mathrm{TSS}}.
$$

$\mathrm{TSS}$ 는 총제곱합(total sum of squares), $\mathrm{ESS}$ 는 설명제곱합(explained sum of squares)이다. $R^2$ 를 결정계수(coefficient of determination)라 하고, 설명된 분산의 비율이다. 직관 절에서 $\mathrm{TSS}=2/3$, $\mathrm{RSS}=1/6$ 이므로 $R^2=3/4$ 다. 열을 추가하면 $R^2$ 가 줄지 않으므로 모형 선택에는 자유도로 보정한 조정 $R^2$ 나 [정보 기준](information-criteria.md), [교차검증](cross-validation.md)을 쓴다. 단순회귀에서 $R^2$ 는 표본상관계수의 제곱이다.

## 다중공선성과 수치 문제

설명변수들이 서로 거의 선형종속인 것을 다중공선성(multicollinearity)이라 한다. 이때 $X^\top X$ 가 거의 특이해져 계수의 분산이 커진다. $j$ 번째 변수를 나머지 변수들로 회귀했을 때의 결정계수를 $R_j^2$ 라 하면 분산팽창계수(variance inflation factor, VIF)는

$$
\mathrm{VIF}\_j = \frac{1}{1 - R_j^{2}}
$$

이고 $\mathrm{Var}(\hat\beta_j)$ 가 그만큼 커진다. 적합값 $\hat{y}$ 는 안정적이지만 개별 계수의 해석이 불안정해진다. 대응은 변수 제거, 주성분 사용([특이값 분해](singular-value-decomposition.md)), 능형회귀처럼 $X^\top X+\lambda I$ 로 대각을 키우는 정규화다.

# 활용

- [일반화선형모형](generalized-linear-models.md). 반응이 이항이나 개수(count)면 정규 가정이 맞지 않는다. [지수족](exponential-families.md)의 분포족에 연결함수를 붙이면 로지스틱 회귀, Poisson 회귀가 나오고, 추정은 반복 가중최소제곱(iteratively reweighted least squares, IRLS)이 된다. 닫힌 해가 없어 [경사하강법](gradient-descent.md)이나 [Newton 법](newton-method.md) 계열 최적화를 쓴다.
- 정규화와 Bayes 추정. 계수에 $N(0, \tau^2)$ 사전분포를 두면 MAP(maximum a posteriori) 추정이 능형회귀가 되고, Laplace 사전분포를 두면 lasso 가 된다([Bayes 추론](bayesian-inference.md)).
- 일반화최소제곱(generalized least squares, GLS). 오차의 분산이 다르거나 상관이 있을 때 쓴다. $\mathrm{Var}(\varepsilon) = \sigma^2 \Sigma$ 로 두고 $\Sigma^{-1}$ 로 정한 내적에 대한 정사영을 한다.
- [분산분석](analysis-of-variance.md)은 지시변수로 부호화한 선형회귀이고, 제곱합의 분해가 중첩된 부분공간들의 직교분해다.
- 진단. 잔차 대 적합값 그림으로 비선형성과 이분산을, 레버리지와 Cook 거리(Cook's distance)로 영향점을, 분위수-분위수 그림(quantile-quantile plot, QQ 플롯)으로 정규성을 본다. 회귀계수는 다른 변수를 통제한 조건부 연관이고, 관측 자료에서 인과 효과로 해석하려면 설계에 대한 별도의 가정이 있어야 한다.[^1]

[^1]: T. Hastie, R. Tibshirani, J. Friedman, *The Elements of Statistical Learning*, 2nd ed., Springer, https://hastie.su.domains/ElemStatLearn/

# 연관 문서

## 선수지식

- [내적 공간](inner-product-spaces.md)
- [최대가능도 추정](maximum-likelihood.md)

## 더 알아보기

### 모형의 확장

- [일반화선형모형](generalized-linear-models.md)
- [비선형 최소제곱](nonlinear-least-squares.md)
- [핵 능형회귀](kernel-ridge-regression.md)
- [압축 센싱](compressed-sensing.md)
- [분위수 회귀](quantile-regression.md)
- [붕괴점](breakdown-point.md)
- [분산분석](analysis-of-variance.md)

### 예측오차의 평가

- [편향-분산 분해](bias-variance-decomposition.md)
- [교차검증](cross-validation.md)

#statistics #linear_algebra #optimization
