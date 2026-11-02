# 편향-분산 분해

# 개요

**편향-분산 분해(bias-variance decomposition)** 는 추정의 평균 제곱 오차를, 평균적으로 얼마나 빗나가는지와 자료에 따라 얼마나 흔들리는지 두 부분으로 나누는 식이다. 점 열 개로 곡선을 맞출 때 직선을 쓰면 자료를 바꿔도 답이 비슷하지만 곡선의 굽은 모양을 놓치고, 9 차 다항식을 쓰면 모양은 따라가지만 자료가 조금 바뀌어도 답이 크게 달라진다. 두 경우 모두 오차가 크지만 원인이 다르다. 편향-분산 분해는 오차를 편향의 제곱과 분산의 합으로 적어, 모형의 복잡도를 고를 때 두 원인을 따로 잰다.

# 직관

$X_1,\dots,X_n$ 이 평균 $\mu$ , 분산 $\sigma^2$ 인 분포에서 독립으로 나올 때 $\mu$ 를 표본평균 $\bar X$ 로 추정하는 것과 $\bar X$ 를 $c$ 배로 줄인 $c\bar X$ 로 추정하는 것 가운데 어느 쪽이 나은지 묻는다. 자료를 새로 뽑을 때마다 두 값이 달라지므로 한 번의 값으로는 비교할 수 없어 오차의 제곱을 자료에 대해 평균한 평균제곱오차(mean squared error, MSE)로 비교한다. $\mathbb E\lbrack \bar X\rbrack=\mu$ 와 $\mathrm{Var}(\bar X)=\sigma^2/n$ 을 써서 전개하면 다음이 나온다.

$$
\mathbb E\lbrack (c\bar X-\mu)^2\rbrack
=c^2\frac{\sigma^2}{n}+(1-c)^2\mu^2
$$

$c=1$ 을 넣으면 $\sigma^2/n$ 이고, 이 식을 $c$ 로 미분해 $0$ 으로 두면 최솟값을 주는 $c^\ast$ 가 아래와 같이 $1$ 보다 작게 나온다. $c^\ast$ 에서의 오차가 $c=1$ 에서의 오차보다 작으므로, 추정값을 $0$ 쪽으로 줄이면 평균제곱오차가 줄어든다. 위 식의 첫 항은 $c\bar X$ 가 자료마다 흔들리는 정도이고 둘째 항은 $c\bar X$ 의 평균이 $\mu$ 에서 벗어난 정도다. 앞을 분산, 뒤를 편향의 제곱이라 한다.

$$
c^\ast=\frac{\mu^2}{\mu^2+\sigma^2/n}\lt 1
$$

# 정의

## 추정량의 분해

모수 $\theta$ 의 추정량 $\hat\theta$ 에 대해 **편향(bias)** 은 $\mathrm{Bias}(\hat\theta)=\mathbb E\lbrack \hat\theta\rbrack-\theta$ 다. 평균제곱오차를 다음 두 항으로 쓰는 것이 추정량의 편향-분산 분해다.

$$
\mathbb E\lbrack (\hat\theta-\theta)^2\rbrack
=\mathrm{Bias}(\hat\theta)^2+\mathrm{Var}(\hat\theta)
$$

직관 절의 $c\bar X$ 는 편향이 $(c-1)\mu$, 분산이 $c^2\sigma^2/n$ 이다. $\mu=1$, $\sigma^2=1$, $n=4$ 이면 $c^\ast=0.8$ 이고, 평균제곱오차는 $c=1$ 에서 $0+0.25=0.25$, $c=0.8$ 에서 $0.04+0.16=0.2$ 다.

## 예측오차의 분해

$y=f(x)+\varepsilon$ 이고 $\mathbb E\lbrack \varepsilon\rbrack=0$, $\mathrm{Var}(\varepsilon)=\sigma^2$ 이라 하자. 훈련자료로 적합한 예측함수를 $\hat f$ 라 하고, 고정된 $x$ 에서 새 관측 $y$ 에 대한 오차를 잰다. 기댓값은 훈련자료와 $\varepsilon$ 양쪽에 대해 취한다.

$$
\mathbb E\lbrack (y-\hat f(x))^2\rbrack
=\sigma^2+\big(\mathbb E\lbrack \hat f(x)\rbrack-f(x)\big)^2+\mathrm{Var}(\hat f(x))
$$

첫 항은 어떤 예측함수로도 줄일 수 없다. 둘째 항이 편향의 제곱, 셋째 항이 분산이다.

$f$ 가 상수 $\mu$ 이고 $y$ 가 직관 절의 분포에서 새로 뽑은 관측일 때 $\hat f=\bar X$ 로 예측하면 오차는 $\sigma^2+0+\sigma^2/n$ 이다. $\sigma^2=1$, $n=4$ 이면 $1.25$ 이고, 이 가운데 $1$ 은 예측함수를 바꿔도 남는다.

# 성질

## 분해의 증명

$\hat\theta-\theta=(\hat\theta-\mathbb E\lbrack \hat\theta\rbrack)+(\mathbb E\lbrack \hat\theta\rbrack-\theta)$ 로 쪼개고 제곱한다. 교차항의 기댓값은 $2(\mathbb E\lbrack \hat\theta\rbrack-\theta)\thinspace\mathbb E\lbrack \hat\theta-\mathbb E\lbrack \hat\theta\rbrack\rbrack$ 이고 안쪽 기댓값이 $0$ 이므로 사라진다. 예측오차의 분해도 $\varepsilon$ 이 $\hat f$ 와 독립이라는 것을 써서 같은 방식으로 얻는다.

## 선형회귀에서의 값

$p$ 개 변수로 [최소제곱 적합](linear-regression.md)을 하면 훈련점 $x_1,\dots,x_n$ 에서의 분산을 더한 값이 $p\thinspace\sigma^2$ 이다. 사영행렬 $H$ 는 관측값 벡터를 적합값 벡터로 보내는 모자 행렬(hat matrix)이다. 사영행렬 $H$ 의 대각합이 $p$ 이고 $\mathrm{Var}(\hat f(x_i))=h\_{ii}\thinspace\sigma^2$ 이므로 이 합이 나온다. 변수를 늘리면 분산이 그만큼 커진다.

참 함수 $f$ 가 쓰는 변수들의 선형결합이면 편향이 $0$ 이다. 변수를 빼면 편향이 생기고 분산이 줄어든다.

## 절충이 아닌 경우

분해는 항등식이지 두 항이 반드시 맞바뀐다는 진술이 아니다. 두 항을 함께 줄이는 추정량이 있으면 그것이 낫다. 모형을 고정하고 표본 크기 $n$ 을 늘리면 $c\bar X$ 처럼 분산은 줄고 편향은 그대로인 경우가 많고, 그때 오차는 단조로 줄어든다.

# 활용

- [정칙화](regularization.md)의 능형회귀(ridge regression)는 계수를 $0$ 쪽으로 줄여 편향을 들여오고 분산을 줄인다. 벌점의 세기가 위 직관 절의 $c$ 에 해당하고, 벌점이 $0$ 이 아닌 값에서 평균제곱오차가 최소가 된다. 정규 평균이 셋 이상이면 줄이는 배수를 자료에서 정해도 모든 모수에서 오차가 줄고, 그 추정량이 [James–Stein 추정량](james-stein-estimator.md)이다.
- [교차검증](cross-validation.md)이 재는 것은 두 항과 잡음을 합한 예측오차다. 편향과 분산을 따로 재지 않으므로 어느 쪽이 커서 오차가 큰지는 훈련오차와 함께 보아야 갈린다.
- 같은 모형을 여러 [붓스트랩](bootstrap.md) 표본에 적합해 평균하는 배깅(bagging)은 편향을 그대로 두고 분산을 줄인다. 예측함수들을 차례로 더해 잔차를 맞추는 부스팅(boosting)은 편향을 줄인다.
- 핵밀도추정(kernel density estimation)과 국소회귀(local regression)에서 띠폭(bandwidth)을 넓히면 편향이 커지고 분산이 줄어든다. 평균제곱오차를 최소로 하는 띠폭이 두 항의 차수를 맞추는 곳에서 나온다.

# 연관 문서

## 선수지식

- [선형회귀](linear-regression.md)

## 더 알아보기

- [정칙화](regularization.md)
- [James–Stein 추정량](james-stein-estimator.md)

#statistics #machine_learning #probability
