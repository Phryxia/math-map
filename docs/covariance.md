# 공분산

# 개요

**공분산(covariance)** 은 두 [확률변수](random-variables.md)가 각자의 평균에서 같은 방향으로 벗어나는 정도다.

$$
\mathrm{Cov}(X,Y)=\mathbb E\bigl\lbrack(X-\mathbb E X)(Y-\mathbb E Y)\bigr\rbrack
$$

$X$ 가 평균보다 클 때 $Y$ 도 평균보다 큰 경향이 있으면 양수, 반대 경향이 있으면 음수다. $\mathrm{Cov}(X,X)$ 는 분산이다. 공분산을 두 표준편차의 곱으로 나눈 상관계수는 $-1$ 과 $1$ 사이에 있고, 그 이유가 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)이다.

# 직관

키 $X$ 와 몸무게 $Y$ 를 함께 잰 사람 셋이 있다. 키는 $160,170,180$ 이고 몸무게는 $55,65,75$ 다. 평균은 $170$ 과 $65$ 이고, 평균에서 벗어난 양은 키가 $-10,0,10$, 몸무게가 $-10,0,10$ 이다. 같은 사람의 두 편차를 곱해 평균을 내면 $(100+0+100)/3=\tfrac{200}3$ 이고 이 값이 공분산이다. 키가 큰 사람이 무거워서 곱이 모두 $0$ 이상이다.

몸무게를 $75,65,55$ 로 바꾸면 편차가 $10,0,-10$ 이 되어 곱의 평균이 $-\tfrac{200}3$ 이다. 몸무게를 킬로그램 대신 그램으로 재면 편차가 $1000$ 배가 되어 공분산도 $1000$ 배가 되므로, 공분산의 크기만으로는 관계의 세기를 비교할 수 없다. 두 표준편차 $\sqrt{200/3}$ 의 곱으로 나누면 단위가 지워지고 값이 $1$ 이 된다. 세 점이 기울기가 양수인 한 직선 위에 있어서 이 값이 최대인 $1$ 이 나온다.

# 정의

## 공분산

$\mathbb E X^2$ 과 $\mathbb E Y^2$ 이 유한한 확률변수 $X,Y$ 에 대해

$$
\mathrm{Cov}(X,Y)=\mathbb E\bigl\lbrack(X-\mathbb E X)(Y-\mathbb E Y)\bigr\rbrack=\mathbb E\lbrack XY\rbrack-\mathbb E X\thinspace\mathbb E Y
$$

를 **공분산** 이라 한다. 둘째 등식은 곱을 전개해 기댓값의 선형성을 쓰면 나온다. $\mathrm{Cov}(X,Y)=0$ 이면 $X$ 와 $Y$ 가 **무상관(uncorrelated)** 이라 한다.

## 상관계수

분산이 양수인 $X,Y$ 에 대해

$$
\rho(X,Y)=\frac{\mathrm{Cov}(X,Y)}{\sqrt{\mathrm{Var}(X)\thinspace\mathrm{Var}(Y)}}
$$

를 **상관계수(correlation coefficient)** 라 한다. Pearson 상관계수(Pearson correlation coefficient)라고도 한다.

## 공분산행렬

$\mathbb R^d$ 값 확률벡터 $X=(X_1,\dots,X_d)$ 의 성분마다 2차 적률이 유한할 때 $(i,j)$ 성분이 $\mathrm{Cov}(X_i,X_j)$ 인 $d\times d$ 행렬

$$
\Sigma=\mathbb E\bigl\lbrack(X-\mathbb E X)(X-\mathbb E X)^\top\bigr\rbrack
$$

를 **공분산행렬(covariance matrix)** 이라 한다. 대각성분은 각 성분의 분산이다.

# 성질

## 쌍선형성

공분산은 대칭이고 각 변수에 대해 선형이다.

$$
\mathrm{Cov}(aX+bY,Z)=a\thinspace\mathrm{Cov}(X,Z)+b\thinspace\mathrm{Cov}(Y,Z),\qquad \mathrm{Cov}(X+c,Y)=\mathrm{Cov}(X,Y)
$$

여기서 합의 분산 공식이 나온다.

$$
\mathrm{Var}\Bigl(\sum_i X_i\Bigr)=\sum_i\mathrm{Var}(X_i)+2\sum_{i\lt j}\mathrm{Cov}(X_i,X_j)
$$

무상관인 변수들의 합에서는 분산이 더해진다. [큰 수의 법칙](law-of-large-numbers.md)의 Chebyshev 증명은 이것만 쓴다.

## 내적으로서의 공분산

평균이 $0$ 이고 분산이 유한한 확률변수의 공간에서 $\langle X,Y\rangle=\mathbb E\lbrack XY\rbrack$ 는 [내적](inner-product-spaces.md)이다(거의 확실히 같은 변수를 같게 본다). 중심화한 변수에서 공분산은 이 내적이고, 분산은 노름의 제곱, 무상관은 직교다.

Cauchy–Schwarz 부등식으로 $\lvert\mathrm{Cov}(X,Y)\rvert\le\sqrt{\mathrm{Var}(X)\mathrm{Var}(Y)}$ 이므로 $-1\le\rho\le 1$ 이다. 등호는 $Y-\mathbb E Y$ 가 $X-\mathbb E X$ 의 상수배일 때, 곧 $Y=aX+b$ 가 거의 확실히 성립할 때뿐이고, $\rho$ 의 부호는 $a$ 의 부호다. 상관계수는 두 중심화 변수 사이 각의 코사인이다.

## 독립과 무상관

$X,Y$ 가 독립이면 $\mathbb E\lbrack XY\rbrack=\mathbb E X\thinspace\mathbb E Y$ 이므로 무상관이다. 역은 성립하지 않는다. $X$ 가 $-1,0,1$ 을 확률 $\tfrac14,\tfrac12,\tfrac14$ 로 갖고 $Y=X^2$ 이면 $\mathrm{Cov}(X,Y)=\mathbb E X^3=0$ 이지만 $Y$ 는 $X$ 로 결정된다. 상관계수는 일차 관계만 잰다. 두 변수가 함께 [정규분포](normal-distribution.md)를 따를 때는 무상관과 독립이 동치다.

## 공분산행렬의 성질

공분산행렬은 대칭이고 양의 준정부호다. $a\in\mathbb R^d$ 에서

$$
a^\top\Sigma a=\mathrm{Var}(a^\top X)\ge 0
$$

이기 때문이다. $a^\top\Sigma a=0$ 이면 $a^\top X$ 가 거의 확실히 상수이므로, $\Sigma$ 가 특이인 것은 $X$ 가 거의 확실히 한 초평면 위에 있는 것과 동치다. $k\times d$ 행렬 $A$ 와 $b\in\mathbb R^k$ 에서 $AX+b$ 의 공분산행렬은 $A\Sigma A^\top$ 이다.

## 최적 선형 예측

$Y$ 를 $X$ 의 일차함수 $a+bX$ 로 예측할 때 제곱오차 $\mathbb E(Y-a-bX)^2$ 을 최소로 하는 계수는

$$
b=\frac{\mathrm{Cov}(X,Y)}{\mathrm{Var}(X)},\qquad a=\mathbb E Y-b\thinspace\mathbb E X
$$

이고, 최소 제곱오차는 $\mathrm{Var}(Y)(1-\rho^2)$ 이다. 오차 $Y-a-bX$ 는 $X$ 와 무상관이다. 내적으로 보면 오차가 $X$ 와 직교하도록 계수를 고른 것이고, $\rho^2$ 은 $Y$ 의 분산 가운데 $X$ 의 일차함수로 설명되는 비율이다.

## 표본 공분산

관측 $(x_1,y_1),\dots,(x_n,y_n)$ 에서

$$
s_{xy}=\frac1{n-1}\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y)
$$

를 표본 공분산이라 한다. 관측이 독립 동일분포이면 $\mathbb E s_{xy}=\mathrm{Cov}(X,Y)$ 다. $n$ 대신 $n-1$ 로 나누는 것은 $\bar x$ 와 $\bar y$ 를 추정하면서 잃는 자유도 하나를 메우기 위해서다.

# 활용

- [주성분 분석](principal-component-analysis.md)은 공분산행렬의 고유벡터를 분산이 큰 순서로 뽑는다. 첫 주성분은 $a^\top\Sigma a$ 를 단위벡터 $a$ 에서 최대로 만드는 방향이다.
- [정규분포](normal-distribution.md)의 다변량판은 평균벡터와 공분산행렬로 결정되고, 조건부분포의 공분산은 공분산행렬의 [Schur 보수](schur-complement.md)다.
- [선형회귀](linear-regression.md)의 최소제곱 계수는 최적 선형 예측 공식의 표본판이고, 단순회귀의 기울기는 $s_{xy}/s_{xx}$ 다.
- [Gauss 과정](gaussian-processes.md)의 공분산핵 $k(s,t)=\mathrm{Cov}(X_s,X_t)$ 는 공분산행렬을 무한 개의 시점으로 넓힌 것이고, 유한 개 시점에서 만든 행렬이 양의 준정부호라는 조건이 핵의 유효성 조건이다.
- [Fisher 정보](fisher-information.md)는 점수함수의 공분산행렬이고, Cramér–Rao 하한은 추정량의 공분산행렬을 그 역행렬로 아래에서 누른다.

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [Cauchy–Schwarz 부등식](cauchy-schwarz.md)

## 더 알아보기

- [정규분포](normal-distribution.md)
- [주성분 분석](principal-component-analysis.md)

#probability #statistics #linear_algebra
