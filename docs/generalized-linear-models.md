# 일반화선형모형

# 개요

**일반화선형모형(generalized linear model)** 은 결과가 합격과 불합격이나 사건 횟수인 자료에도 일차식을 쓰는 회귀 모형이다. 공부 시간으로 합격 여부를 예측할 때 합격 확률을 공부 시간의 일차식으로 두면, 공부 시간이 아주 길거나 짧을 때 확률이 $1$ 보다 크거나 $0$ 보다 작아진다. 일반화선형모형은 일차식을 확률에 직접 두지 않고 로그 오즈 같은 변환한 값에 두어, 결과의 분포마다 맞는 변환을 고르고 같은 추정 절차를 쓴다.

# 직관

이진 반응을 [선형회귀](linear-regression.md)로 적합한다. 환자 $i$ 의 검사값 $x_i$ 로 발병 여부 $y_i\in\lbrace 0,1\rbrace$ 를 예측하려고 $y_i=\beta_0+\beta_1 x_i+\varepsilon_i$ 를 최소제곱으로 푼다. 적합한 직선은 $x_i$ 가 크거나 작은 구간에서 $1$ 보다 큰 값과 $0$ 보다 작은 값을 내놓는다. 그래서 예측값을 발병 확률로 쓸 수 없다. 오차의 등분산 가정도 맞지 않는다. $y_i$ 가 확률 $p_i$ 의 Bernoulli 이면 분산이 $p_i(1-p_i)$ 이고 평균과 함께 변한다.

확률 $p_i$ 를 직선에 바로 올려놓아서 구간을 벗어났으니, $p_i$ 를 [실수](real-numbers.md) 전체로 퍼뜨린 뒤에 직선을 올린다. 비율 $p_i/(1-p_i)$ 는 $p_i$ 가 $0$ 에서 $1$ 로 갈 때 $0$ 에서 $+\infty$ 로 가고, 로그를 취하면 $-\infty$ 에서 $+\infty$ 로 간다. 그래서 $\log(p_i/(1-p_i))=\beta_0+\beta_1 x_i$ 로 둔다. $p_i$ 에 대해 풀면 $p_i=1/(1+e^{-\beta_0-\beta_1x_i})$ 이고 어떤 계수에서도 값이 $(0,1)$ 안이다.

Bernoulli 밀도를 $p^y(1-p)^{1-y}=\exp(y\log(p/(1-p))+\log(1-p))$ 로 적으면 지수에서 $y$ 에 곱해지는 양이 $\log(p/(1-p))$ 다. [지수족](exponential-families.md)에서 이 양을 자연모수라 하므로, 위에서 직선을 올려놓은 자리는 Bernoulli 의 자연모수다. 반응분포를 [Poisson 분포](poisson-distribution.md)로 바꾸면 자연모수가 $\log\lambda_i$ 이고 같은 규칙이 $\log\lambda_i=\beta_0+\beta_1x_i$ 를 준다. 반응분포의 자연모수에 직선을 두는 이 규칙을 정준연결이라 부른다.

# 정의

일반화선형모형은 세 가지로 정해진다.

반응 $y_i$ 는 자연모수 $\theta_i$ 의 지수족을 따른다.

$$
p(y_i\mid\theta_i)=h(y_i)\exp\big(\theta_i y_i-A(\theta_i)\big)
$$

설명변수 $x_i\in\mathbb R^d$ 와 계수 $\beta$ 로 만든 $\eta_i=x_i^{\top}\beta$ 를 **선형예측자(linear predictor)** 라 한다. 평균 $\mu_i=\mathbb E[y_i]$ 를 선형예측자에 잇는 단조함수 $g$ 를 **연결함수(link function)** 라 한다.

$$
g(\mu_i)=\eta_i=x_i^{\top}\beta
$$

지수족에서 $\mu_i=A'(\theta_i)$ 이므로, $g=(A')^{-1}$ 로 잡으면 $\theta_i=\eta_i$ 가 된다. 이 $g$ 를 **정준연결함수(canonical link function)** 라 하고, 아래의 성질은 모두 이 경우를 말한다.

직관 절의 발병 모형은 반응이 Bernoulli, $x_i=(1,\text{검사값})$, $g(\mu)=\log(\mu/(1-\mu))$ 인 경우다. 계수가 $\beta=(-4,1)$ 이면 검사값 $4$ 인 환자는 $\eta=0$ 이어서 $\mu=0.5$ 이고, 검사값 $6$ 인 환자는 $\eta=2$ 이어서 $\mu=1/(1+e^{-2})\approx 0.88$ 이다. 이 모형을 **로지스틱 회귀(logistic regression)** 라 한다.

## 반응분포별 정준연결

| 반응분포 | A(θ) | 정준연결 g(μ) | 모형 이름 |
| --- | --- | --- | --- |
| 정규(분산 고정) | $\theta^2/2$ | $\mu$ | 선형회귀 |
| Bernoulli | $\log(1+e^{\theta})$ | $\log\big(\mu/(1-\mu)\big)$ | 로지스틱 회귀 |
| Poisson | $e^{\theta}$ | $\log\mu$ | 로그선형모형 |
| Gamma(형상 고정) | $-\log(-\theta)$ | $-1/\mu$ | Gamma 회귀 |

[정규분포](normal-distribution.md)에서는 $g$ 가 항등함수라 선형회귀와 같다. Poisson 반응에 로그 연결을 쓴 모형을 로그선형모형(log-linear model)이라 한다.

## 분산함수

지수족에서 $\mathrm{Var}(y_i)=A''(\theta_i)$ 이고, $\theta_i$ 를 $\mu_i$ 로 바꿔 쓰면 분산이 평균의 함수가 된다. 이 함수 $V$ 를 **분산함수(variance function)** 라 한다.

$$
\mathrm{Var}(y_i)=\phi\thinspace V(\mu_i),\qquad V=A''\circ(A')^{-1}
$$

$\phi$ 는 산포모수(dispersion parameter)이고, Bernoulli 와 Poisson 에서는 $\phi=1$ 이다. Bernoulli 에서 $V(\mu)=\mu(1-\mu)$, Poisson 에서 $V(\mu)=\mu$, 정규에서 $V(\mu)=1$ 이다. 발병 모형의 검사값 $6$ 인 환자는 분산이 $0.88\cdot 0.12\approx 0.11$ 이고, 검사값 $4$ 인 환자는 $0.25$ 다.

## 이탈도

관측마다 모수를 따로 두어 $\hat\mu_i=y_i$ 로 맞춘 모형을 포화모형(saturated model)이라 한다. 포화모형의 로그가능도에서 적합모형의 로그가능도를 뺀 값의 두 배를 **이탈도(deviance)** 라 한다.

$$
D=2\big(\ell_{\mathrm{sat}}-\ell(\hat\beta)\big)
$$

Bernoulli 반응에서는 $\ell_{\mathrm{sat}}=0$ 이므로 $D=-2\ell(\hat\beta)$ 이다. 분산이 $1$ 인 정규 반응에서는 $D$ 가 잔차제곱합과 같다.

# 성질

## 로그가능도의 오목성

정준연결에서 로그가능도는 다음과 같다.

$$
\ell(\beta)=\sum_{i=1}^{n}\big(y_i\thinspace x_i^{\top}\beta-A(x_i^{\top}\beta)\big)+\text{const}
$$

$A$ 가 볼록이고 $\beta\mapsto x_i^{\top}\beta$ 가 선형이므로 $A(x_i^{\top}\beta)$ 는 $\beta$ 의 볼록함수다. 따라서 $\ell$ 은 오목하고 국소 최대가 전역 최대다. 설계행렬 $X$ 가 열완전계수(full column rank)이고 지수족이 최소 표현이면 $\ell$ 이 엄격오목이라 최대점이 유일하다.

## 점수방정식

$\ell$ 을 미분하면 $A'(\eta_i)=\mu_i$ 이므로 다음이 나온다.

$$
\nabla\ell(\beta)=X^{\top}\big(y-\mu(\beta)\big)=0
$$

설명변수로 가중한 적합값의 합이 관측값의 합과 같다. 절편을 넣으면 첫 좌표가 $\sum_i y_i=\sum_i\hat\mu_i$ 를 준다. 이 식은 지수족의 최대가능도 조건 "평균모수가 표본평균과 같다" 에 해당한다.

## 반복 가중최소제곱

[Hessian](hessian.md) 은 $\nabla^2\ell(\beta)=-X^{\top}WX$ 이고 $W=\mathrm{diag}\big(V(\mu_i)\big)$ 다. [Newton 법](newton-method.md)의 갱신을 펼치면 각 단계가 가중최소제곱 한 번과 같다. 작업반응(working response) $z_i=\eta_i+(y_i-\mu_i)/V(\mu_i)$ 를 두면 갱신이 $\beta\leftarrow(X^{\top}WX)^{-1}X^{\top}Wz$ 다. 이 절차를 반복 가중최소제곱(iteratively reweighted least squares, IRLS)이라 한다.

```javascript
function irls(X, y, A1, A2, steps) {
  let beta = zeros(X.cols)
  for (let t = 0; t < steps; t++) {
    const eta = matvec(X, beta)
    const mu = eta.map(A1)              // A' : 자연모수에서 평균으로
    const w = eta.map(A2)               // A'' : 분산함수의 값
    const z = eta.map((e, i) => e + (y[i] - mu[i]) / w[i])
    beta = solve(gram(X, w), matvecW(X, w, z))   // (X^T W X) beta = X^T W z
  }
  return beta
}
```

정규분포에서는 $V\equiv1$ 이고 $A'$ 가 항등이라 첫 단계에서 끝난다. 그 한 단계가 선형회귀의 정규방정식이다.

## 이탈도 차이의 근사

중첩된 두 모형의 이탈도 차이는 정칙 조건에서 자유도가 모수 개수 차이인 [카이제곱 분포](chi-squared-distribution.md)로 근사된다. 그래서 [가설검정](hypothesis-testing.md)의 [가능도비 검정](likelihood-ratio-test.md)으로 회귀 모형을 비교한다.

## 추정값의 존재

점수방정식의 해는 항상 있는 것이 아니다. 로지스틱 회귀에서 어떤 초평면이 두 부류를 완전히 가르면 그 방향으로 계수를 키울 때마다 가능도가 증가해 최대점이 유한한 곳에 없다. 지수족에서 표본평균이 평균모수 공간의 경계에 놓여 최대가능도 추정량이 없는 경우에 해당한다. 이때는 벌점을 더하거나 계수 노름을 제한한다.

# 활용

- 로지스틱 회귀의 분류. 선형예측자의 부호가 결정경계를 주고, 계수 $\beta_j$ 는 $x_j$ 가 $1$ 늘 때 로그 오즈(log odds) $\log(\mu/(1-\mu))$ 가 늘어나는 양이다. [경사하강법](gradient-descent.md)과 [준Newton 법](quasi-newton-methods.md)의 전형적인 적용 대상이 이 목적함수다.
- 계수 자료의 Poisson 회귀. 사건 수를 노출시간으로 나눈 비율을 모형화할 때 로그 노출시간을 계수 $1$ 로 고정한 항으로 넣는다.
- 다부류 분류의 소프트맥스. 반응을 [다항분포](multinomial-distribution.md)로 두면 정준연결이 로그 비율이 되고, 연결의 역함수가 소프트맥스다. 신경망의 마지막 층과 교차엔트로피 손실이 이 모형의 선형예측자를 신경망으로 바꾼 것이다.
- 모형 선택. 이탈도와 [교차검증](cross-validation.md)으로 연결함수와 설명변수 집합을 비교한다.

# 연관 문서

## 선수지식

- [선형회귀](linear-regression.md)
- [지수족](exponential-families.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #machine_learning #optimization #probability
