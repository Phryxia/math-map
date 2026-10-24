# e-값

# 개요

**e-값(e-value)** 은 귀무가설 아래에서 기댓값이 $1$ 이하인 음이 아닌 통계량의 값이다. Markov 부등식으로 $E\ge 1/\alpha$ 일 때 귀무가설을 기각하는 검정의 1 종 오류율이 $\alpha$ 이하다.

[가설검정](hypothesis-testing.md)의 p-값과 달리 e-값은 곱하고 평균해도 e-값이다. 독립인 실험의 결과를 곱해 합치고, 자료를 보면서 실험을 이어 가도 오류율이 유지된다. e-값을 시간에 따라 곱해 만든 과정이 [신뢰열](confidence-sequences.md)의 Ville 부등식이 다루는 음이 아닌 supermartingale 이다.

# 직관

동전이 공정하다는 가설을 내기로 시험한다. 가진 돈 $1$ 로 시작하고, 매번 던지기 전에 앞면에 걸 비율 $q$ 를 정한다. 앞면이 나오면 돈이 $2q$ 배, 뒷면이 나오면 $2(1-q)$ 배가 된다. 동전이 공정하면 한 번 던진 뒤 돈의 기댓값은 $\frac12\cdot 2q+\frac12\cdot 2(1-q)=1$ 배이므로, 공정한 동전으로는 평균적으로 돈을 불릴 수 없다.

$q=0.6$ 으로 미리 정하고 $100$ 번 던져 앞면이 $60$ 번 나왔다. 돈은 $1.2^{60}\cdot 0.8^{40}\approx 7.5$ 가 되었다. 동전이 공정할 때 돈이 언젠가 $20$ 이상이 될 확률은 $1/20$ 이하이므로, 돈이 $20$ 에 닿으면 유의수준 $0.05$ 로 공정성을 기각한다. 이번에는 $7.5$ 이므로 기각하지 않는다. 같은 자료에서 정규근사로 구한 양측 p-값은 약 $0.046$ 이어서 기각한다.

기각하지 않았으면 동전을 더 던져 내기를 이어 가면 된다. 공정한 동전 아래에서 돈의 기댓값은 몇 번을 던지든 $1$ 이므로, 언제 그만둘지를 돈을 보고 정해도 $20$ 에 닿을 확률은 $1/20$ 이하로 남는다. 이 돈의 값이 e-값이다.

# 정의

귀무가설 $H_0$ 은 확률분포의 모임이다. 음이 아닌 확률변수 $E$ 가

$$
E_P\lbrack E\rbrack\le 1\qquad(\text{모든 }P\in H_0)
$$

을 만족하면 $E$ 를 **e-변수(e-variable)** 라 하고, 그 실현값을 **e-값** 이라 한다.

여과 $(\mathcal F_n)$ 에 적응된 음이 아닌 과정 $(M_n)$ 이 $M_0=1$ 이고 모든 $P\in H_0$ 에서 $P$-supermartingale 이면 $(M_n)$ 을 **검정 supermartingale(test supermartingale)** 이라 한다. 앞면 비율을 걸어 불린 돈이 그 예이고, 그때는 martingale 이므로 **검정 martingale(test martingale)** 이라 한다.

# 성질

## 타당성

$E$ 가 e-변수이면 $P(E\ge 1/\alpha)\le\alpha E_P\lbrack E\rbrack\le\alpha$ 다. $(M_n)$ 이 검정 supermartingale 이면 Ville 부등식으로

$$
P\bigl(M_n\ge 1/\alpha\text{ 인 }n\text{ 이 존재}\bigr)\le\alpha
$$

이고, 임의의 정지시간 $\tau$ 에서 $M_\tau$ 가 e-변수다.

## 곱과 평균

**명제.** $E_1$ 이 e-변수이고 $E_2$ 가 $E_1$ 을 알 때의 조건부 기댓값이 $1$ 이하인 음이 아닌 확률변수이면 $E_1E_2$ 는 e-변수다. 의존 구조와 상관없이 e-변수들의 볼록결합도 e-변수다.

탑 성질로 $E\lbrack E_1E_2\rbrack=E\lbrack E_1E\lbrack E_2\mid E_1\rbrack\rbrack\le E\lbrack E_1\rbrack\le 1$ 이다. 평균은 기댓값의 선형성에서 바로 나온다. $\square$

p-값은 이렇게 합칠 수 없다. 독립인 두 p-값을 곱한 것은 p-값이 아니고, 합치려면 Fisher 방법(Fisher's method)처럼 미리 정한 분포 계산을 거쳐야 한다.

## p-값과의 변환

$E$ 가 e-변수이면 $\min(1,1/E)$ 는 p-변수다. 위의 타당성 부등식이 이것이다.

반대 방향은 **보정 함수(calibrator)** 로 한다. 감소함수 $f:\lbrack 0,1\rbrack\to\lbrack 0,\infty\rbrack$ 가 $\int_0^1f(u)\thinspace du=1$ 이면, p-변수 $V$ 에 대해 $f(V)$ 는 e-변수다. 귀무가설 아래에서 모든 $u$ 에 대해 $P(V\le u)\le u$ 이고 $f$ 가 감소하므로 $E\lbrack f(V)\rbrack\le\int_0^1f=1$ 이다. $0\lt\kappa\lt 1$ 에 대한 $f(p)=\kappa p^{\kappa-1}$ 이 흔히 쓰는 예다.[^1]

## 가능도비와 성장률

$H_0=\lbrace P_0\rbrace$ 가 하나의 분포이면 밀도 $q$ 를 무엇으로 잡든 $q(X)/p_0(X)$ 가 e-변수다. $E_{P_0}\lbrack q/p_0\rbrack=\int q=1$ 이기 때문이다. [순차확률비 검정](sequential-probability-ratio-test.md)의 누적 우도비가 이것을 곱한 검정 martingale 이다.

자료가 실제로 $Q$ 를 따를 때 한 번의 관측에서 $E_Q\lbrack\log E\rbrack$ 를 가장 크게 하는 e-변수는 $q=dQ/d\mu$ 로 잡은 가능도비이고, 그 값은 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence) $D(Q\Vert P_0)$ 다. 검정 martingale 은 대략 $\exp(nD(Q\Vert P_0))$ 의 속도로 자라고, 기각에 필요한 관측 수가 $\log(1/\alpha)/D(Q\Vert P_0)$ 규모다.

## 보편 추론

귀무가설이 모수 모임 $\Theta_0$ 일 때 자료를 둘로 나누어 $D_0$ 으로 아무 추정량 $\hat\theta_1$ 을 만들고, $D_1$ 의 가능도 $L_1$ 로

$$
E=\frac{L_1(\hat\theta_1)}{\sup_{\theta\in\Theta_0}L_1(\theta)}
$$

을 계산하면 $E$ 는 e-변수다. 참인 $\theta_0\in\Theta_0$ 에서 분모가 $L_1(\theta_0)$ 이상이므로 $E\le L_1(\hat\theta_1)/L_1(\theta_0)$ 이고, 오른쪽은 $\hat\theta_1$ 을 고정했을 때의 가능도비라 기댓값이 $1$ 이다. 이 구성을 **보편 추론(universal inference)** 이라 한다. 정칙성 조건 없이 성립하므로 [가능도비 검정](likelihood-ratio-test.md)의 Wilks 극한이 깨지는 모형에서도 쓴다.[^2]

# 활용

- **연구 결과의 누적.** 한 연구의 e-값을 보고 다음 연구를 할지 정해도, 연구들의 e-값을 곱한 값이 e-값이다.
- **신뢰열.** 모수 $\theta$ 마다 귀무가설 $\lbrace\theta\rbrace$ 의 검정 martingale $M_n(\theta)$ 를 두면 $\lbrace\theta:M_n(\theta)\lt 1/\alpha\rbrace$ 이 수준 $1-\alpha$ 의 신뢰열이다. 정규분포 평균에 대한 혼합법 신뢰열이 이 구성이다.
- **다중검정.** 가설 $m$ 개의 e-값을 크기순으로 $e_{(1)}\ge\cdots\ge e_{(m)}$ 이라 하고 $e_{(k)}\ge m/(\alpha k)$ 인 가장 큰 $k$ 까지 기각하면, 가설들 사이의 의존 구조와 상관없이 [거짓 발견률](false-discovery-rate.md)(false discovery rate, FDR)이 $\alpha$ 이하다. 이 절차를 e-BH(e-Benjamini–Hochberg) 라 하고, Benjamini–Hochberg 절차(Benjamini–Hochberg procedure)를 e-값으로 옮긴 것이다.[^3]

[^1]: Vladimir Vovk, Ruodu Wang, "E-values: Calibration, combination and applications", *Annals of Statistics* 49 (2021), 1736–1754.
[^2]: Larry Wasserman, Aaditya Ramdas, Sivaraman Balakrishnan, "Universal inference", *Proceedings of the National Academy of Sciences* 117 (2020), 16880–16890.
[^3]: Ruodu Wang, Aaditya Ramdas, "False discovery rate control with e-values", *Journal of the Royal Statistical Society Series B* 84 (2022), 822–852.

# 연관 문서

## 선수지식

- [신뢰열](confidence-sequences.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
