# Fisher 정보

# 개요

Fisher 정보는 관측 하나가 모수에 대해 담은 정보의 양을 재는 행렬이다. 로그가능도의 모수에 대한 도함수인 점수함수의 공분산으로 정의하고, 정칙 조건 아래에서 로그가능도의 Hessian 의 기댓값의 음수와 같다. 불편추정량의 분산 하한, 최대가능도 추정량의 점근분산, 분포족 위의 Riemann 계량이 모두 이 행렬로 적힌다.

# 직관

동전의 앞면 확률 $p$ 를 $n=100$ 번 던져 추정한다. 표본비율 $\hat p=k/n$ 의 분산은 $p(1-p)/n$ 이므로 $p=0.5$ 에서 $0.0025$ , $p=0.99$ 에서 $0.0001$ 이다. 같은 횟수를 던졌는데 참값에 따라 정확도가 $25$ 배 차이가 난다. 차이가 어디서 오는지 로그가능도를 보면 나온다. 앞면이 $k$ 번 나왔을 때 로그가능도와 그 도함수는 다음이다.

$$
\ell(p)=k\log p+(n-k)\log(1-p),\qquad \ell'(p)=\frac{k}{p}-\frac{n-k}{1-p}
$$

참값 $p$ 에서 $\mathbb E\lbrack k\rbrack=np$ 를 넣으면 $\mathbb E\lbrack \ell'(p)\rbrack=0$ 이다. 도함수가 평균적으로 $0$ 이므로 정보는 그 값이 아니라 흔들리는 폭에 있다. $\ell'(p)=k/(p(1-p))-n/(1-p)$ 로 정리하고 $\mathrm{Var}(k)=np(1-p)$ 를 넣으면 분산이 나온다.

$$
\mathrm{Var}\big(\ell'(p)\big)=\frac{np(1-p)}{\big(p(1-p)\big)^2}=\frac{n}{p(1-p)}
$$

$p=0.5$ 에서 $4n$ , $p=0.99$ 에서 약 $101n$ 이다. 이 값이 클수록 $k$ 가 조금 달라져도 도함수가 크게 달라지므로 $\ell$ 의 최대점 위치가 좁게 정해진다. 그리고 이 값의 역수 $p(1-p)/n$ 이 처음에 구한 $\hat p$ 의 분산과 정확히 같다. 점수함수의 분산이 Fisher 정보다.

# 정의

Fisher 정보는 점수함수의 공분산행렬이다. 모수 $\theta\in\Theta\subseteq\mathbb R^d$ 의 모형 $f(x;\theta)$ 에 대해 **점수함수**와 **Fisher 정보**를 다음으로 정의한다.

$$
s(\theta;x)=\nabla\_\theta\log f(x;\theta),\qquad I(\theta)=\mathbb E\_\theta\big\lbrack s(\theta;X)\thinspace s(\theta;X)^{\mathsf T}\big\rbrack
$$

$I(\theta)$ 는 $d\times d$ 대칭 준양정부호 행렬이다. $\mathbb E\_\theta\lbrack s\rbrack=0$ 이므로 공분산과 2차 적률이 같다.

## 정칙 조건

정의와 아래의 성질은 다음을 가정한다. 지지집합 $\lbrace x:f(x;\theta)\gt 0\rbrace$ 이 $\theta$ 에 의존하지 않고, $\theta$ 가 $\Theta$ 의 내부점이며, $\log f$ 가 $\theta$ 에 대해 두 번 미분가능하고 $\theta$ 에 대한 미분과 $x$ 에 대한 적분을 바꿀 수 있다. 균등분포 $\mathrm{Unif}(0,\theta)$ 처럼 지지집합이 모수에 의존하는 모형은 이 조건을 어기고 아래의 하한이 성립하지 않는다.

## 관측 정보와의 구별

$\mathbb E\_\theta$ 를 취하지 않은 $-\nabla^2\_\theta\ell(\theta)$ 를 관측 정보라 하고, 자료로 계산한 추정값 $-\nabla^2\ell(\hat\theta)$ 를 관측 Fisher 정보라 한다. Fisher 정보는 기댓값을 취한 양이므로 자료에 의존하지 않고 $\theta$ 만의 함수다.

# 성질

## 정보 등식

$$
I(\theta)=-\thinspace\mathbb E\_\theta\big\lbrack\nabla^2\_\theta\log f(X;\theta)\big\rbrack
$$

증명의 요지. $\int f(x;\theta)\thinspace dx=1$ 을 $\theta$ 로 두 번 미분한다. 한 번 미분하면 $\int\nabla f=0$ 이고 이것이 $\mathbb E\lbrack s\rbrack=0$ 이다. 두 번 미분한 $\int\nabla^2f=0$ 에 $\nabla^2f=f\thinspace(\nabla^2\log f+ss^{\mathsf T})$ 를 넣으면 두 항의 기댓값이 상쇄된다.

## 가법성

관측이 독립이고 같은 분포에서 나오면 표본 전체의 정보가 $n$ 배다. 결합밀도의 로그가 합이 되어 점수함수가 독립인 항들의 합이고, 독립인 항의 공분산이 더해지기 때문이다.

$$
I\_n(\theta)=n\thinspace I(\theta)
$$

독립이 아니면 성립하지 않으며, 상관이 있는 관측은 정보를 덜 준다.

## Cramér–Rao 하한

$\hat\theta$ 가 $\theta$ 의 불편추정량이면 공분산행렬에 다음 하한이 있다. 여기서 $A\succeq B$ 는 $A-B$ 가 준양정부호라는 뜻이다.

$$
\mathrm{Cov}\_\theta(\hat\theta)\succeq I\_n(\theta)^{-1}
$$

증명의 요지. 불편성 $\mathbb E\_\theta\lbrack\hat\theta\rbrack=\theta$ 를 $\theta$ 로 미분하면 $\mathrm{Cov}(\hat\theta,s)=\mathrm I\_d$ 가 나온다. 임의의 벡터 $a,b$ 에 Cauchy–Schwarz 부등식을 적용하면 $(a^{\mathsf T}b)^2\le(a^{\mathsf T}\mathrm{Cov}(\hat\theta)a)(b^{\mathsf T}I\_nb)$ 이고, $b=I\_n^{-1}a$ 로 두면 결론이 된다.

등호는 점수함수가 $\hat\theta-\theta$ 의 상수배일 때, 곧 모형이 [지수족](exponential-families.md)이고 $\hat\theta$ 가 충분통계량의 함수일 때 성립한다.[^1]

## 재모수화

$\theta=h(\eta)$ 로 모수를 바꾸고 $J=\partial h/\partial\eta$ 를 Jacobian 행렬이라 하면 정보가 다음으로 변한다.

$$
I\_\eta(\eta)=J^{\mathsf T}I\_\theta\big(h(\eta)\big)\thinspace J
$$

연쇄법칙으로 점수함수가 $J^{\mathsf T}s$ 로 바뀌고 공분산을 취하면 나온다. 따라서 Fisher 정보는 좌표에 의존하는 양이고, 모수 선택과 무관한 것은 $\det I(\theta)$ 의 제곱근을 밀도로 읽은 측도다. 이것이 Jeffreys 사전분포가 재모수화에 불변인 근거다([Bayes 추론](bayesian-inference.md)의 무정보 사전분포 절).

## KL divergence 의 2차 근사

$$
D\_{\mathrm{KL}}\big(f(\cdot;\theta)\thinspace\Vert\thinspace f(\cdot;\theta+\delta)\big)=\tfrac12\delta^{\mathsf T}I(\theta)\delta+O(\Vert\delta\Vert^3)
$$

증명의 요지. $\delta$ 에 대해 좌변을 Taylor 전개한다. 상수항은 $0$ 이고, 1차항은 $-\mathbb E\lbrack s\rbrack=0$ 이며, 2차항의 계수가 정보 등식으로 $I(\theta)$ 가 된다.

[KL divergence](kl-divergence.md)(Kullback–Leibler divergence)가 대칭이 아닌데도 2차항이 대칭행렬로 나오므로, 모수 공간에 Riemann 계량을 준 것으로 읽는다. 이 계량이 Fisher–Rao 계량이고 재모수화 변환 규칙이 계량의 변환 규칙과 같다.[^2]

# 활용

- **[최대가능도 추정](maximum-likelihood.md)의 점근분산.** 정칙 조건 아래 $\sqrt n(\hat\theta-\theta)$ 가 평균 $0$ 이고 공분산 $I(\theta)^{-1}$ 인 정규분포로 수렴한다. 하한과 일치하므로 최대가능도 추정량이 점근적으로 효율적이다.
- **[신뢰구간](confidence-intervals.md).** 위의 점근분포에서 $\hat\theta\pm z\_{\alpha/2}\sqrt{(nI(\hat\theta))^{-1}}$ 꼴의 Wald 구간이 나온다. 분모에 관측 Fisher 정보를 넣는 변형도 쓴다.
- **Fisher scoring.** [Newton 방법](newton-method.md)에서 Hessian 을 $I(\theta)$ 로 바꾼 반복이고, 일반화선형모형의 표준 적합 절차 IRLS(iteratively reweighted least squares)가 그 구체형이다. [지수족](exponential-families.md)의 자연매개화에서는 Hessian 이 이미 공분산이라 두 방법이 일치한다.
- **자연 경사법.** 확률분포족 위의 최적화에서 걸음을 $I(\theta)^{-1}\nabla$ 로 잡는다. 유클리드 거리 대신 Fisher–Rao 계량으로 보폭을 재는 것이고, [신뢰영역 정책 최적화](trust-region-policy-optimization.md)의 KL 제약이 이 형태로 풀린다.
- **실험계획.** 설계 $\xi$ 가 주는 정보행렬 $I(\theta;\xi)$ 의 행렬식을 최대화하는 것이 D 최적 설계이고, 특정 방향의 분산을 줄이려면 $a^{\mathsf T}I^{-1}a$ 를 최소화한다.

[^1]: Erich Lehmann and George Casella, *Theory of Point Estimation*, 2nd ed., Springer, 1998, Chapter 2. 정보 등식과 Cramér–Rao 하한, 등호 조건.
[^2]: Shun-ichi Amari and Hiroshi Nagaoka, *Methods of Information Geometry*, American Mathematical Society, 2000, Chapter 2. Fisher–Rao 계량과 재모수화 불변성.

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #information_theory #machine_learning
