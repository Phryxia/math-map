# 순차확률비 검정

# 개요

순차확률비 검정은 관측을 하나씩 보면서 두 단순가설 가운데 하나를 고르거나 관측을 계속할지 정하는 검정이다. 매 시점의 누적 우도비를 문턱 두 개와 견주어 위를 넘으면 대립가설, 아래로 내려가면 귀무가설로 판정하고, 사이에 있으면 표본을 하나 더 뽑는다. 표본 크기가 미리 정해지지 않고 관측 결과에 따라 달라진다.

# 직관

동전 하나를 던져 앞면 확률이 $0.5$ 인지 $0.7$ 인지 판정한다. 두 종류의 오류율을 모두 $0.05$ 로 잡고 던질 횟수를 먼저 정하면, [가설검정](hypothesis-testing.md)의 표본 크기 역산이 다음을 준다.

$$n\approx\left(\frac{z_\alpha\sqrt{0.5\cdot 0.5}+z_\beta\sqrt{0.7\cdot 0.3}}{0.7-0.5}\right)^2=\left(\frac{1.645\cdot 0.958}{0.2}\right)^2\approx 62$$

62 번을 던지기로 하고 시작했는데 처음 10 번이 모두 앞면으로 나왔다. 이 결과가 나올 확률은 앞면 확률이 $0.7$ 일 때 $0.7^{10}$, $0.5$ 일 때 $0.5^{10}$ 이고 두 값의 비는 $1.4^{10}\approx 28.9$ 다. 치우친 쪽이 29 배 더 그럴듯한데도 규칙은 52 번을 더 던지라고 한다.

앞 10 번으로 이미 한쪽이 기울었으니, 던질 때마다 이 비를 계산하고 충분히 커지는 순간 멈춘다. 얼마나 커야 충분한지는 오류율이 정한다. 치우쳤다고 판정하게 되는 관측열을 전부 모으면 그 위에서 비가 문턱 $A$ 이상이므로, 이 관측열들이 나올 확률은 동전이 치우쳤을 때가 공정할 때의 $A$ 배 이상이다. 앞의 확률은 $0.95$ 이고 뒤의 확률은 $0.05$ 이므로 $A$ 는 $19$ 까지 잡을 수 있다.

앞면만 계속 나오면 $1.4^n\ge 19$ 인 첫 $n$ 에서 멈춘다. $1.4^8\approx 14.8$ 이고 $1.4^9\approx 20.7$ 이므로 9 번째에 끝난다. 반대쪽 문턱은 같은 계산을 뒤집어 $0.05/0.95=1/19$ 이고, 비가 이 아래로 내려가면 공정하다고 판정한다.

# 정의

$X_1,X_2,\dots$ 가 독립이고 같은 분포를 따르며, 귀무가설 $H_0$ 에서 밀도가 $f_0$ 이고 대립가설 $H_1$ 에서 $f_1$ 이라 하자. $n$ 개를 본 시점의 **누적 우도비**는 다음이다.

$$\Lambda_n=\prod_{i=1}^{n}\frac{f_1(X_i)}{f_0(X_i)}$$

문턱 $0\lt B\lt 1\lt A$ 를 고정한다. **순차확률비 검정**(sequential probability ratio test, SPRT)은 다음 정지시간에서 관측을 멈추고, $\Lambda_N\ge A$ 이면 $H_1$ 을 $\Lambda_N\le B$ 이면 $H_0$ 을 고르는 검정이다[^1].

$$N=\min\lbrace n\ge 1:\thinspace\Lambda_n\ge A\ \text{ 또는 }\ \Lambda_n\le B\rbrace$$

## 로그 형태

$Z_i=\log\bigl(f_1(X_i)/f_0(X_i)\bigr)$ 와 $S_n=Z_1+\cdots+Z_n$ 으로 두면 $\log\Lambda_n=S_n$ 이다. $(S_n)$ 은 독립인 증분의 합이므로 확률보행이고, $N$ 은 이 보행이 띠 $\lbrack\log B,\thinspace\log A\rbrack$ 을 처음 벗어나는 시각이다.

## 문턱의 선택

목표 오류율 $\alpha$ 와 $\beta$ 에 대해 문턱을 다음으로 잡는다.

$$A=\frac{1-\beta}{\alpha},\qquad B=\frac{\beta}{1-\alpha}$$

# 성질

## 유한 종료

$P(Z_1\ne 0)\gt 0$ 이면 $N\lt\infty$ 가 확률 1 로 성립하고 $\mathbb E\lbrack N\rbrack\lt\infty$ 다.

증명의 요지. $Z_1$ 이 항등적으로 $0$ 이 아니므로 어떤 $m$ 과 $\delta\gt 0$ 에 대해 $P(\lvert S_m\rvert\gt\log A-\log B)\ge\delta$ 다. 보행을 길이 $m$ 의 블록으로 나누면 블록마다 이 사건이 독립으로 일어나고, 한 번 일어나면 띠를 벗어난다. 따라서 $P(N\gt km)\le(1-\delta)^k$ 이고 $N$ 의 꼬리가 기하적으로 감소한다.

## Wald 의 오류율 경계

실제 오류율 $\alpha'$ 와 $\beta'$ 는 다음을 만족한다.

$$\alpha'\le\frac{1-\beta'}{A},\qquad \beta'\le B(1-\alpha')$$

증명의 요지. $\mathcal A$ 를 $H_1$ 로 판정하게 되는 관측열 전체라 하자. $\mathcal A$ 위에서 $\Lambda_N\ge A$ 이므로, [측도변환](change-of-measure.md)으로 $P_1(\mathcal A)=\mathbb E_0\lbrack\Lambda_N\mathbf 1_{\mathcal A}\rbrack\ge A\thinspace P_0(\mathcal A)$ 다. 왼쪽이 $1-\beta'$ 이고 오른쪽이 $A\alpha'$ 다. 둘째 부등식은 같은 계산을 $H_0$ 으로 판정하는 쪽에 적용한 것이다.

문턱을 위의 값으로 잡으면 두 부등식에서 $\alpha'+\beta'\le\alpha+\beta$ 가 따라온다. 각 오류율이 목표를 조금 넘을 수는 있으나 둘의 합은 넘지 않는다.

## Wald 항등식

$Z_i$ 가 독립이고 같은 분포를 따르며 $\mathbb E\lvert Z_1\rvert\lt\infty$ 이고, 정지시간 $N$ 이 $\mathbb E\lbrack N\rbrack\lt\infty$ 를 만족하면 다음이 성립한다.

$$\mathbb E\lbrack S_N\rbrack=\mathbb E\lbrack N\rbrack\thinspace\mathbb E\lbrack Z_1\rbrack$$

증명의 요지. $S_N=\sum_{n\ge 1}Z_n\mathbf 1_{\lbrace N\ge n\rbrace}$ 이고 사건 $\lbrace N\ge n\rbrace$ 은 $\mathcal F_{n-1}$ 가측이라 $Z_n$ 과 독립이다. 항마다 기댓값을 취하면 $\mathbb E\lbrack Z_1\rbrack P(N\ge n)$ 이고, $n$ 에 대해 더하면 오른쪽이 나온다.

## 기대 표본 수

$S_N$ 이 문턱을 넘어선 초과분을 무시하면 $S_N$ 은 $\log A$ 와 $\log B$ 두 값만 취한다. $H_1$ 아래에서 $\mathbb E_1\lbrack Z_1\rbrack=D(P_1\Vert P_0)$ 이므로 Wald 항등식이 다음을 준다.

$$\mathbb E_1\lbrack N\rbrack\approx\frac{(1-\beta)\log A+\beta\log B}{D(P_1\Vert P_0)}$$

$D$ 는 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)이고, 표본 하나가 주는 증거의 양을 잰다. 동전 예에서 $D(P_1\Vert P_0)=0.082$ 이고 $\log A=-\log B=2.94$ 이므로 $\mathbb E_1\lbrack N\rbrack\approx 32$ 다. 같은 오류율을 갖는 고정 표본 검정의 $62$ 번과 견주면 절반이다.

## Wald–Wolfowitz 최적성

오류율이 $\alpha$ 와 $\beta$ 이하인 모든 순차검정 가운데 SPRT 가 $\mathbb E_0\lbrack N\rbrack$ 과 $\mathbb E_1\lbrack N\rbrack$ 을 동시에 최소화한다[^2].

증명의 요지. 사전확률 $\pi$ 와 관측 한 번의 비용 $c$ 를 둔 Bayes 판정 문제를 푼다. 사후확률을 상태로 삼은 [최적 정지](optimal-stopping.md) 문제이고, 값함수가 사후확률의 오목함수이므로 정지 영역이 양 끝의 두 구간이 된다. 따라서 최적 규칙이 사후확률의 두 문턱 규칙, 곧 SPRT 다. $\pi$ 와 $c$ 를 움직여 주어진 $\alpha$ 와 $\beta$ 를 갖는 SPRT 를 만들면 그것이 그 오류율 아래의 최소 기대 표본 수를 준다.

# 활용

- **임상시험의 중간분석.** 환자를 차례로 등록하면서 효과가 충분히 드러나면 시험을 조기에 끝낸다. 문턱을 시각에 따라 바꾼 변형이 군축차 설계다.
- **축차 표본검사.** 로트에서 제품을 하나씩 뽑아 불량률이 두 수준 가운데 어느 쪽인지 판정하고, 판정이 서면 검사를 멈춘다.
- **엿보기 문제.** 고정 표본 검정을 진행 도중 여러 번 들여다보고 유의해지는 순간 멈추면 1 종 오류율이 목표를 넘는다. SPRT 는 멈추는 규칙을 검정의 일부로 두므로 Wald 의 오류율 경계가 그대로 적용된다.
- **martingale 구조.** $(\Lambda_n)$ 은 $P_0$ 아래의 [martingale](martingales.md)이다. 위의 오류율 경계는 이 martingale 에 선택적 정지 정리를 쓴 것과 같은 계산이다.

[^1]: A. Wald, *Sequential Analysis*, Wiley, 1947. 3장이 문턱의 선택과 오류율 경계를 다룬다.

[^2]: A. Wald and J. Wolfowitz, "Optimum Character of the Sequential Probability Ratio Test", Annals of Mathematical Statistics **19** (1948), 326–339.

# 연관 문서

## 선수지식

- [가설검정](hypothesis-testing.md)
- [최적 정지](optimal-stopping.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #information_theory
