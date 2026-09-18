# 가설검정과 p-값

# 개요

가설검정은 데이터가 특정 확률 모형과 얼마나 어긋나는지를 정해진 규칙으로 판정하는 절차다. 귀무가설이 참이라는 가정 아래 관측된 정도의 극단값이 나올 확률, 곧 p-값을 계산하고 미리 정한 유의수준과 비교해 기각 여부를 정한다.

이 틀은 두 종류의 오류를 비대칭으로 다룬다. 1 종 오류율을 먼저 고정하고 그 제약 아래 검정력을 최대화하며, Neyman–Pearson 보조정리가 단순가설에서 가능도비를 그 최적화의 해로 준다.

# 직관

동전을 100 번 던져 앞면이 60 번 나왔다. 공정하다면 앞면 개수가 평균 50, 표준편차 5 인 분포를 따르므로 60 은 2 표준편차 벗어난 값이고, 공정한 동전에서 이만큼 벗어난 결과가 나올 확률이 약 5% 다. 이 5% 가 p-값이다.

p-값은 동전이 공정할 확률이 아니다. 계산 전체가 공정하다는 가정 아래에서 이루어졌으므로 그 가정의 확률을 말해 주지 않는다. 방향을 바꾸려면 사전확률이 필요하다([Bayes 정리](bayes.md)).

귀무가설을 무죄로 두면, 증거가 무죄 가정 아래 충분히 이례적일 때만 유죄를 선고하는 구조다. 1 종 오류율을 낮게 고정하는 대가로 2 종 오류는 크게 남고, 기각에 실패한 것이 귀무가설의 증명이 되지 않는다.

절차는 귀무가설 $H_0$ 과 검정통계량 $T$ 를 정하고 $H_0$ 아래 $T$ 의 분포를 구한 뒤, 관측값이 주는 p-값이 미리 고정한 유의수준 $\alpha$ 이하이면 $H_0$ 을 기각하는 것이다.

# 정의

모형족 $f(x;\theta)$ 와 모수공간 $\Theta$ 가 주어졌을 때, $\Theta$ 를 서로소인 $\Theta_0$ 과 $\Theta_1$ 로 나눈 것이 가설이다. 한 점만 포함하면 단순가설, 여럿을 포함하면 복합가설이다.

$$
H_0:\ \theta\in\Theta_0
\qquad\text{대}\qquad
H_1:\ \theta\in\Theta_1
$$

검정은 데이터를 기각과 비기각으로 보내는 함수, 또는 기각할 확률을 주는 함수 $\varphi(x)$ 다. 값이 $0$ 과 $1$ 만 가지면 결정론적 검정, 그 사이 값을 허용하면 무작위화 검정이다.

## 두 종류의 오류

1 종 오류는 $H_0$ 이 참인데 기각하는 것이고 2 종 오류는 $H_1$ 이 참인데 기각하지 못하는 것이다.

$$
\alpha(\theta)=\mathbb E_\theta[\varphi(X)]\ \ (\theta\in\Theta_0),
\qquad
\beta(\theta)=1-\mathbb E_\theta[\varphi(X)]\ \ (\theta\in\Theta_1)
$$

검정의 크기는 $\Theta_0$ 위 기각확률의 상한이고, 유의수준 $\alpha$ 의 검정은 크기가 $\alpha$ 이하인 검정이다. 검정력은 대립가설 아래의 기각확률이다.

$$
\text{size}=\sup_{\theta\in\Theta_0}\mathbb E_\theta[\varphi(X)],
\qquad
\text{power}(\theta)=\mathbb E_\theta[\varphi(X)]=1-\beta(\theta)
$$

## p-값

검정통계량 $T$ 와 관측값 $t$ 에 대해 큰 값이 $H_0$ 과 어긋남을 뜻하도록 방향을 잡으면 p-값은 다음이다.

$$
p=\sup_{\theta\in\Theta_0}\ P_\theta\big(T\ge t\big)
$$

곧 $H_0$ 아래에서 관측된 만큼 또는 더 극단적인 결과가 나올 확률이다.[^1] $T$ 가 연속분포를 따르고 $H_0$ 이 단순가설이면 p-값이 $H_0$ 아래에서 $[0,1]$ 의 균등분포를 따르므로, $p\le\alpha$ 로 기각하는 규칙의 1 종 오류율이 정확히 $\alpha$ 다. 이산분포에서는 p-값의 분포가 균등분포를 확률적으로 지배해 실제 크기가 $\alpha$ 보다 작아진다.

# 성질

## p-값의 오용

미국통계학회는 2016 년 성명에서 p-값 사용의 여섯 원칙을 제시했다.[^2] 다음 두 가지가 정의에서 직접 따른다.

p-값은 $H_0$ 이 참일 확률도, 데이터가 우연만으로 생겼을 확률도 아니다. 정의가 $H_0$ 을 조건으로 두므로 조건의 방향이 반대다.

$$
P(T\ge t\mid H_0)\ \neq\ P(H_0\mid T\ge t)
$$

p-값은 효과의 크기나 결과의 중요성을 재지 않는다. 표본이 매우 크면 실질적으로 무의미한 차이도 아주 작은 p-값을 내고, 표본이 작으면 큰 효과도 기각에 실패한다. 그래서 추정값과 신뢰구간을 함께 본다.

여러 가설을 검정하면 1 종 오류가 누적된다. 독립인 검정 $m$ 개를 각각 유의수준 $\alpha$ 로 하면 적어도 하나를 잘못 기각할 확률이 다음과 같다.

$$
1-(1-\alpha)^m\qquad(\alpha=0.05,\ m=20\ \Rightarrow\ \approx 0.64)
$$

Bonferroni 보정이나 false discovery rate 통제가 이 문제를 다룬다. 유의해질 때까지 데이터를 더 모으거나 가설을 바꾸는 관행(p-hacking)은 명목 유의수준을 무의미하게 만든다.

## Neyman–Pearson 보조정리

$H_0$ 에서 밀도가 $f_0$ , $H_1$ 에서 $f_1$ 인 단순가설을 본다. 가능도비를 기준으로 기각하는 검정이 최적이다.[^3]

$$
\Lambda(x)=\frac{f_1(x)}{f_0(x)},
\qquad
\varphi(x)=\begin{cases}
1, & \Lambda(x)>k\cr
\gamma, & \Lambda(x)=k\cr
0, & \Lambda(x)<k
\end{cases}
$$

진술은 두 부분이다. 임의의 $\alpha$ 에 대해 위 형태이면서 크기가 정확히 $\alpha$ 인 상수 $k$ 와 $\gamma$ 가 존재하고, 그 검정은 유의수준 $\alpha$ 의 모든 검정 가운데 검정력이 최대다.

최적성의 증명은 크기가 $\alpha$ 이하인 임의의 검정 $\psi$ 에 대해 다음 적분을 본다.

$$
\int \big(\varphi(x)-\psi(x)\big)\big(f_1(x)-k f_0(x)\big)\thinspace dx\ \ge\ 0
$$

$\Lambda(x)>k$ 인 곳에서는 $\varphi=1$ 이라 첫 인자가 음이 아니고 둘째 인자가 양수이며, $\Lambda(x)<k$ 인 곳에서는 두 인자의 부호가 모두 뒤집혀 피적분함수가 항상 음이 아니다. 전개하면 $\varphi$ 의 검정력에서 $\psi$ 의 검정력을 뺀 값이 $k$ 배의 크기 차이 이상이고, $\psi$ 의 크기가 $\alpha$ 이하이므로 그 차이가 음이 아니다.

복합가설에는 그대로 확장되지 않는다. 최적 기각역이 대립가설의 어느 점을 보느냐에 따라 달라지기 때문이다. 단조가능도비를 갖는 모형족에서는 단측검정에 대해 균등최강력(UMP) 검정이 존재한다. 일반적인 경우에는 [최대가능도 추정](maximum-likelihood.md)을 이용한 가능도비 검정을 쓰고, Wilks 정리가 그 통계량의 점근분포를 카이제곱으로 준다.

## 신뢰구간과의 쌍대성

유의수준 $\alpha$ 의 검정족과 신뢰수준 $1-\alpha$ 의 구간은 서로를 결정한다. 값 $\theta_0$ 을 기각하지 않는 $\theta_0$ 전체가 신뢰집합이 되고, 역으로 신뢰집합에 $\theta_0$ 이 없을 때 기각하면 검정이 된다. 신뢰구간은 같은 정보를 담으면서 효과의 크기를 함께 보여 준다.

# 활용

## z-검정

모평균이 $\mu_0$ 인지 검정한다. 분산이 알려져 있거나 표본이 충분히 크면 [중심극한정리](central-limit-theorem.md)에 의해 다음 통계량이 $H_0$ 아래 근사적으로 표준정규분포를 따른다.

$$
Z=\frac{\overline X_n-\mu_0}{\sigma/\sqrt n},
\qquad
p_{\text{양측}}=2\big(1-\Phi(|z|)\big)
$$

동전 예에서 $H_0$ 은 성공확률 $0.5$ , $n=100$ , 앞면 60 회다. 표본비율이 $0.6$ 이고 $H_0$ 아래 표준오차가 $0.05$ 이므로 다음과 같다.

$$
z=\frac{0.6-0.5}{0.05}=2.0,
\qquad
p_{\text{양측}}=2\big(1-\Phi(2.0)\big)\approx 0.0455
$$

유의수준 0.05 에서는 기각, 0.01 에서는 기각 실패다. 경계 근처의 결론이 유의수준 선택에 좌우된다.

## 검정력 설계

표본 크기를 정할 때는 검출하려는 효과 크기 $\delta$ , 유의수준 $\alpha$ , 목표 검정력 $1-\beta$ 를 정하고 $n$ 을 역산한다. 양측 z-검정의 근사식은 다음이고 $z_q$ 는 표준정규분포의 상위 $q$ 분위수다.

$$
n\ \approx\ \frac{\left(z_{\alpha/2}+z_{\beta}\right)^2\sigma^2}{\delta^2}
$$

검출하려는 효과가 절반이 되면 필요한 표본이 네 배가 된다. 사후적으로 계산한 검정력은 p-값의 재표현이므로 해석에 쓰지 않는다.

## 쓰임

임상시험의 우월성과 비열등성 검정, A/B 테스트, 품질관리의 관리도, 난수 생성기의 적합도 검정이 같은 틀을 쓴다. 입자물리의 5 시그마 기준은 표준정규분포의 단측 꼬리 확률 약 $3\times10^{-7}$ 에 해당하며, 동시에 살펴보는 가설이 많다는 사실을 반영한 관례다. 대안으로 사후확률과 Bayes factor 를 보고하는 방식, [Shannon entropy](entropy.md) 기반의 정보량 기준(AIC 등)으로 모형을 비교하는 방식이 있다.

[^1]: R. L. Wasserstein and N. A. Lazar, "The ASA Statement on p-Values: Context, Process, and Purpose", The American Statistician 70(2), 2016. https://www.tandfonline.com/doi/full/10.1080/00031305.2016.1154108
[^2]: American Statistical Association, "ASA Statement on Statistical Significance and P-Values", 2016 (여섯 원칙). https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf
[^3]: Stanford University, Stats 200, Lecture 6: "Simple alternatives, Neyman–Pearson lemma" (가능도비 검정의 존재와 최적성 진술 및 증명). https://web.stanford.edu/class/stats200/Lecture06.pdf

# 연관 문서

## 선수지식

- [확률변수와 기댓값](random-variables.md)
- [중심극한정리](central-limit-theorem.md)
- [최대가능도 추정](maximum-likelihood.md)

## 더 알아보기

- [신뢰구간](confidence-intervals.md)

#statistics #probability
