# Itô 적분

# 개요

**Itô 적분(Itô integral)** 은 무작위로 흔들리는 [Brown 운동](brownian-motion.md)에 대해 함수를 적분하는 방법이다. 주가처럼 매 순간 무작위로 흔들리는 양을 미분방정식으로 쓰려면 흔들림 $dB$ 에 대한 적분이 있어야 하는데, Brown 운동의 경로는 너무 들쭉날쭉해서 경로마다 보통의 적분을 할 수 없다. Itô 적분은 잘게 자른 구간마다 왼쪽 끝의 값을 곱해 더한 합의 평균제곱 극한으로 적분을 정의하고, 그 결과 연쇄법칙에 보정항이 붙은 Itô 공식을 얻는다.

# 직관

$\int_0^T B\thinspace dB$ 를 [Riemann–Stieltjes 적분](riemann-stieltjes-integral.md)처럼 계산하려 한다. $[0,T]$ 를 $0=t_0\lt t_1\lt\dots\lt t_n=T$ 로 $n$ 등분하고 $\Delta B_i=B_{t_{i+1}}-B_{t_i}$ 로 쓴다. 매끄러운 함수 $g$ 라면 조각마다 왼쪽 끝 값을 곱하든 오른쪽 끝 값을 곱하든 합이 $g(T)^2/2-g(0)^2/2$ 로 간다.

$B_T^2=\sum_i\bigl(B_{t_{i+1}}^2-B_{t_i}^2\bigr)=\sum_i\bigl(2B_{t_i}\Delta B_i+(\Delta B_i)^2\bigr)$ 이므로 왼쪽 끝 합과 오른쪽 끝 합은 다음과 같다.

$$
\sum_iB_{t_i}\Delta B_i=\frac{B_T^2-\sum_i(\Delta B_i)^2}{2},\qquad \sum_iB_{t_{i+1}}\Delta B_i=\frac{B_T^2+\sum_i(\Delta B_i)^2}{2}
$$

매끄러운 $g$ 에서는 $\sum_i(\Delta g_i)^2$ 이 $0$ 으로 가서 두 합이 같아진다. Brown 운동에서는 $\Delta B_i$ 의 분산이 $T/n$ 이므로 $\sum_i(\Delta B_i)^2$ 의 평균은 $T$ 이고 분산은 $2T^2/n$ 이어서, 이 합이 $T$ 로 간다. 그래서 왼쪽 끝 합은 $(B_T^2-T)/2$ 로, 오른쪽 끝 합은 $(B_T^2+T)/2$ 로 가고 두 값이 $T$ 만큼 다르다. 어느 점을 고르는지가 결과를 바꾼다.

왼쪽 끝을 고르면 $B_{t_i}$ 는 증분 $\Delta B_i$ 가 정해지기 전에 정해진 값이고 증분과 독립이다. 그래서 각 항의 기댓값이 $0$ 이고, 극한 $(B_T^2-T)/2$ 의 기댓값도 $0$ 이다. 이 선택으로 정한 적분이 Itô 적분이다. 같은 계산에서 $d(B^2)=2B\thinspace dB+dt$ 가 나오고, 보통의 연쇄법칙에 없는 $dt$ 는 $\sum_i(\Delta B_i)^2\to T$ 에서 온다. 이 규칙을 $(dB)^2=dt$ 로 줄여 쓴다.

# 정의

## 여과와 적합 과정

$\mathcal F_t$ 는 $B_s$ ($s\le t$) 의 값으로 정해지는 사건 전체의 $\sigma$-대수이고, 족 $(\mathcal F_t)$ 를 Brown 운동의 **여과(filtration)** 라 한다. 과정 $H$ 의 값 $H_t$ 가 모든 $t$ 에서 $\mathcal F_t$-가측이면 $H$ 를 **적합(adapted)** 과정이라 한다. 시각 $t$ 까지의 경로만 보고 $H_t$ 가 정해진다는 뜻이다.

$H_t=B_t$ 와 $H_t=\max_{s\le t}B_s$ 는 적합 과정이다. $T\gt 0$ 을 고정하고 $H_t=B_T$ 로 둔 과정은 $t\lt T$ 에서 미래의 값을 쓰므로 적합 과정이 아니다.

## 단순 과정의 적분

**단순 과정(simple process)** 은 $0=t_0\lt\dots\lt t_n=T$ 와 $\mathcal F_{t_i}$-가측인 확률변수 $H_{t_i}$ 에 대해 $[t_i,t_{i+1})$ 에서 값이 $H_{t_i}$ 인 과정이다. 그 적분을 다음 합으로 정의한다.

$$
\int_0^TH_s\thinspace dB_s=\sum_{i}H_{t_i}\big(B_{t_{i+1}}-B_{t_i}\big)
$$

$T=1$ 이고 $t_1=1/2$ 이며 $H_{t_i}=B_{t_i}$ 이면 적분은 $B_0(B_{1/2}-B_0)+B_{1/2}(B_1-B_{1/2})=B_{1/2}(B_1-B_{1/2})$ 이다. 직관 절의 왼쪽 끝 합이 이 적분이다.

## Itô 적분

$\int_0^T\mathbb E\lbrack H_s^2\rbrack\thinspace ds\lt\infty$ 인 적합 과정 $H$ 에 대해, $\mathbb E\int_0^T(H_s-H^{(n)}\_s)^2\thinspace ds\to 0$ 인 단순 과정 $H^{(n)}$ 을 잡는다. $\int_0^TH^{(n)}\_s\thinspace dB_s$ 의 평균제곱 극한이 **Itô 적분** $\int_0^TH_s\thinspace dB_s$ 다. 극한이 존재하고 $H^{(n)}$ 의 선택에 의존하지 않는 것은 성질 절의 Itô 등거리로 증명된다.

$H=B$ 이면 직관 절의 계산에서 $\int_0^TB_s\thinspace dB_s=(B_T^2-T)/2$ 다.

## Itô 과정과 확률미분방정식

**Itô 과정(Itô process)** 은 적합 과정 $a$, $b$ 에 대해 다음 꼴로 적히는 과정이다.

$$
X_t = X_0 + \int_0^t a_s\thinspace ds + \int_0^t b_s\thinspace dB_s
$$

$a$ 를 표류항(drift), $b$ 를 확산계수(diffusion coefficient)라 한다. $X=B$ 는 $a=0$, $b=1$ 인 Itô 과정이다. 앞 절의 예에서 $B_t^2=t+2\int_0^tB_s\thinspace dB_s$ 이므로 $B^2$ 은 $a=1$, $b\_s=2B_s$ 인 Itô 과정이다.

$a$ 와 $b$ 가 $X$ 자신의 함수인 적분 등식

$$
X_t=X_0+\int_0^ta(s,X_s)\thinspace ds+\int_0^tb(s,X_s)\thinspace dB_s
$$

을 만족하는 $X$ 를 구하는 문제가 [확률미분방정식](stochastic-differential-equations.md)이다. $dS=\mu S\thinspace dt+\sigma S\thinspace dB$ 는 $a(s,x)=\mu x$, $b(s,x)=\sigma x$ 인 예다.

# 성질

## Itô 등거리

단순 과정 $H$ 에 대해 다음이 성립한다. 이 등식을 **Itô 등거리(Itô isometry)** 라 한다.

$$
\mathbb{E}\bigg\lbrack\Big(\int_0^TH_s\thinspace dB_s\Big)^2\bigg\rbrack=\mathbb{E}\bigg\lbrack\int_0^TH_s^2\thinspace ds\bigg\rbrack
$$

증명의 요지는 제곱을 전개하는 것이다. $i\lt j$ 인 교차항 $H_{t_i}\Delta B_iH_{t_j}\Delta B_j$ 는 $\Delta B_j$ 가 앞의 세 인수와 독립이라 기댓값이 $0$ 이고, 대각항의 기댓값은 $\mathbb E\lbrack H_{t_i}^2\rbrack(t_{i+1}-t_i)$ 다. 따라서 적분은 단순 과정의 공간에서 평균제곱 노름을 보존하는 선형사상이다. 단순 과정이 조밀하므로 이 사상이 유일하게 연장되고, 그 연장이 Itô 적분이다.

$H=B$ 이면 우변은 $\int_0^Ts\thinspace ds=T^2/2$ 이고, 좌변은 $\mathrm{Var}(B_T^2)/4=2T^2/4$ 로 같다.

확률미분방정식의 해의 존재와 유일성을 Picard 반복으로 증명할 때, 계수가 Lipschitz 이면 Itô 등거리로 반복이 평균제곱에서 수축한다.

## 기본 성질

- 선형이고, $\int_0^t H\thinspace dB$ 는 $t$ 에 대해 연속인 [martingale](martingales.md) 이다.
- 기댓값은 $0$ 이고 분산은 Itô 등거리로 계산된다.
- Itô 과정 $X$ 의 2차변동(quadratic variation)은 $d\langle X \rangle_t = b_t^2\thinspace dt$ 다. 확산계수 $b$ 가 경로의 거칠기를 정하고 표류항 $a$ 는 2차변동에 기여하지 않는다.
- Doob 최대부등식(Doob's maximal inequality)이 적용되어 $\mathbb E\lbrack\sup_{t\le T}(\int_0^tH\thinspace dB)^2\rbrack\le 4\thinspace\mathbb E\int_0^TH_s^2\thinspace ds$ 다.

## Itô 공식

**Itô 공식(Itô formula)** 은 다음 정리다. $X$ 가 앞의 Itô 과정이고 $f(t,x)$ 가 $t$ 에 대해 한 번, $x$ 에 대해 두 번 연속미분가능하면 다음이 성립한다.

$$
df(t,X_t)=\Big(\partial_tf+a_t\thinspace\partial_xf+\tfrac12 b_t^2\thinspace\partial_x^2f\Big)dt+b_t\thinspace\partial_xf\thinspace dB_t
$$

증명의 요지는 $f$ 를 2차까지 Taylor 전개하고 $(dB)^2=dt$, $dB\thinspace dt=0$, $(dt)^2=0$ 을 쓰는 것이다. $\tfrac12 b^2 \partial_x^2 f$ 항이 보통의 연쇄법칙과의 차이다. $f(x) = x^2$ 와 $X = B$ 를 넣으면 $d(B^2) = 2B\thinspace dB + dt$ 이고, 적분하면 $\int_0^TB\thinspace dB=(B_T^2-T)/2$ 가 다시 나온다.

## Stratonovich 적분

조각마다 중점 값 $(B_{t_i}+B_{t_{i+1}})/2$ 를 곱한 합의 극한을 **Stratonovich 적분(Stratonovich integral)** $\int f(B)\circ dB$ 라 한다. 직관 절의 두 합의 평균이므로 $\int_0^TB\circ dB=B_T^2/2$ 다. 일반적으로 다음이 성립한다.

$$
\int_0^Tf(B_s)\circ dB_s=\int_0^Tf(B_s)\thinspace dB_s+\frac12\int_0^Tf^\prime(B_s)\thinspace ds
$$

Stratonovich 적분은 보통의 연쇄법칙을 만족하지만 martingale 이 아니다.

## Itô 보정

$dS=\mu S\thinspace dt+\sigma S\thinspace dB$ 의 해는 $S_t=S_0\exp((\mu-\sigma^2/2)t+\sigma B_t)$ 다. $f(x)=\log x$ 에 Itô 공식을 쓰면 $d\log S=(\mu-\sigma^2/2)dt+\sigma\thinspace dB$ 이다. 보통의 연쇄법칙으로 변수분리하면 $-\sigma^2/2$ 가 나오지 않는다. 이 항 때문에 $\mathbb{E}\lbrack S_t\rbrack=S_0e^{\mu t}$ 이지만 $\log S_t$ 의 평균은 $\log S_0+(\mu-\sigma^2/2)t$ 다.

## 지수 martingale 과 측도변환

$M_t = \exp(\int_0^t \theta\thinspace dB - \tfrac12 \int_0^t \theta^2\thinspace ds)$ 는 Novikov 조건(Novikov condition) $\mathbb E\lbrack\exp(\tfrac12\int_0^T\theta^2\thinspace ds)\rbrack\lt\infty$ 에서 martingale 이다. 이것을 밀도로 삼아 확률측도를 바꾸면 Brown 운동에 표류를 더하거나 뺄 수 있다. 이것이 [Girsanov 정리](girsanov.md)이고, [측도변환](change-of-measure.md)의 밀도 변경을 연속시간 과정에 적용한 것이다.

# 활용

## 금융

주가를 [기하 Brown 운동](geometric-brownian-motion.md)으로 모형화하고 파생상품의 가치에 Itô 공식을 적용하면 무작위 항을 상쇄하는 복제 포트폴리오를 구성할 수 있다. 남는 식이 [Black–Scholes 방정식](black-scholes-equation.md)이다. Girsanov 정리로 바꾼 위험중립측도(risk-neutral measure)에서 기댓값을 취하면 가격 공식이 나온다.

## 편미분방정식과의 대응

[Feynman–Kac 공식](feynman-kac.md)은 포물형 편미분방정식의 해를 확산 과정의 기댓값으로 표현한다. 해에 Itô 공식을 적용하면 방정식 때문에 $dt$ 항이 사라지고, 남은 확률적분이 martingale 이므로 기댓값만 남는다.

# 연관 문서

## 선수지식

- [Brown 운동](brownian-motion.md)

## 더 알아보기

- [확률미분방정식](stochastic-differential-equations.md)
- [Girsanov 정리](girsanov.md)
- [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)

#probability #analysis
