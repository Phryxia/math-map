# Brown 운동

# 개요

**Brown 운동(Brownian motion)** 은 물 위의 꽃가루처럼 끊임없이 무작위로 흔들리는 점의 경로를 적은 확률과정이다. 동전을 던져 앞면이면 오른쪽, 뒷면이면 왼쪽으로 한 걸음씩 가는 걷기에서 걸음의 폭을 $1/\sqrt n$, 한 걸음의 시간을 $1/n$ 로 줄이면, 경로의 분포가 $n$ 이 커질 때 연속 곡선들의 한 분포에 다가간다. Brown 운동은 이 극한을 연속시간 확률과정으로 정의하고, 증분이 독립이며 [정규분포](normal-distribution.md)를 따른다는 성질로 무작위 움직임의 확률을 계산한다.

# 직관

## 무작위 걷기의 축소 극한

시간 간격 $h$ 마다 $\pm\sqrt{h}$ 만큼 움직이는 대칭 무작위 걷기를 본다. 시각 $t$ 까지의 위치는 약 $t/h$ 번의 독립 걸음의 합이고, 걸음 크기를 $h$ 가 아니라 $\sqrt{h}$ 로 잡았으므로 분산이 $(t/h) \cdot h = t$ 로 $h$ 와 무관하다. [중심극한정리](central-limit-theorem.md)로 극한 분포는 $N(0, t)$ 이고, 이 극한이 분포 수준이 아니라 경로 수준에서도 존재한다는 것이 [Donsker 불변원리](donsker-invariance-principle.md)다. 눈금은 비대칭이어서 시간을 $c$ 배 늘리면 공간은 $\sqrt{c}$ 배 늘어난다.

## 두 종류의 변동

구간을 잘게 쪼개 증분의 절댓값을 더하면(1차변동, total variation) $n$ 개 조각에서 각각 $1/\sqrt{n}$ 규모이므로 합이 $\sqrt{n}$ 으로 발산한다. 반면 증분의 제곱을 더하면(2차변동, quadratic variation) 각 조각이 $1/n$ 규모여서 합이 유한한 값 $t$ 로 수렴한다.

$$
\sum_i\lvert B_{t_{i+1}}-B_{t_i}\rvert\to\infty,\qquad \sum_i(B_{t_{i+1}}-B_{t_i})^2\to t
$$

보통의 미적분은 1차변동이 유한한 곡선을 대상으로 하므로 이 경로에는 쓸 수 없다. 2차변동이 $0$ 이 아니므로 2차항을 남기는 [Itô 적분](ito-calculus.md)을 쓴다.

# 정의

## 표준 Brown 운동

확률공간 위의 과정 $(B_t)\_{t \ge 0}$ 이 다음 네 조건을 만족하면 **표준 Brown 운동(standard Brownian motion)** 이라 한다.

1. $B_0=0$ .
2. 독립증분(independent increments): $0 \le t_0 \lt\cdots \lt t_k$ 에 대해 $B_{t_1}-B_{t_0}, \dots, B_{t_k}-B_{t_{k-1}}$ 이 독립이다.
3. 정상 정규증분(stationary Gaussian increments): $s\lt t$ 이면 증분의 분포가 다음과 같다.

$$
B_t-B_s\sim N(0,\thinspace t-s)
$$

4. 거의 모든 표본점에서 $t \mapsto B_t$ 가 연속이다.

예를 들어 $B_1-B_{1/2}$ 는 $N(0,1/2)$ 를 따르고 $B_{1/2}$ 와 독립이다. $B_1\sim N(0,1)$ 이므로 $P(B_1\ge1)\approx0.159$ 다.

## 전이밀도

$B_t$ 의 밀도 $p_t$ 를 **전이밀도(transition density)** 라 한다. $B_0=0$ 이므로 $p_t$ 는 $N(0,t)$ 의 밀도이고 열핵(heat kernel)과 같다.

$$
p_t(x)=\frac{1}{\sqrt{2\pi t}}\exp\negthinspace\Big(-\frac{x^2}{2t}\Big)
$$

$p_1(0)=1/\sqrt{2\pi}\approx0.399$ 이고 $p_4(0)=1/\sqrt{8\pi}\approx0.199$ 다. 시간이 $4$ 배가 되면 원점의 밀도는 절반이 된다.

# 성질

## 존재

네 조건을 모두 만족하는 과정이 존재한다. 유한차원 분포만으로는 3번까지가 정해지므로 4번은 따로 증명한다. [Kolmogorov 확장정리](kolmogorov-extension.md)로 과정을 만든 뒤 연속 판본을 고르거나, 구간 $\lbrack 0,1\rbrack$ 위에서 Haar 기저(Haar basis)에 독립 정규 계수를 붙여 급수로 직접 구성하는 Lévy–Ciesielski 구성(Lévy–Ciesielski construction)을 쓴다. 후자는 [균등수렴](uniform-convergence.md)하는 급수를 주므로 연속성이 구성에서 바로 따라온다.

## 열방정식

전이밀도는 [열방정식](heat-equation.md) $\partial_t p = \tfrac12 \partial_x^2 p$ 를 만족한다. 직접 미분하면 양변이 모두 $p_t(x)\bigl(x^2/(2t^2)-1/(2t)\bigr)$ 이다.

## martingale 구조

자연 여과(natural filtration)에 대해 다음 세 과정이 모두 martingale 이다.

$$
B_t,\qquad B_t^2-t,\qquad \exp\negthinspace\Big(\theta B_t-\frac{\theta^2t}{2}\Big)
$$

첫째는 독립증분과 평균 0 에서, 둘째는 증분의 분산이 $t-s$ 라는 사실에서, 셋째는 정규분포의 적률생성함수에서 나온다. 둘째 것이 "2차변동이 $t$" 라는 진술의 martingale 판이고, 셋째 지수 martingale 을 측도변환과 큰 편차 계산에 쓴다.

## Lévy 특성화

Lévy 특성화(Lévy characterization)는 다음 진술이다. 연속경로를 가진 국소 martingale $M$ 이 $M_0=0$ 이고 $M_t^2-t$ 도 martingale 이면 $M$ 은 표준 Brown 운동이다. 가정에 정규분포가 없는데 결론에서 증분이 정규분포를 따른다.

## 강 Markov 성질과 반사원리

정지시간(stopping time) $\tau$ 에 대해 $(B_{\tau+t} - B_\tau)\_{t \ge 0}$ 은 다시 Brown 운동이고 $\tau$ 까지의 정보와 독립이다. 이것을 강 Markov 성질(strong Markov property)이라 한다. 이 성질과 대칭성을 결합하면 최댓값의 분포가 나온다. 수준 $a \gt 0$ 에 처음 닿는 시각 이후의 경로를 뒤집어도 같은 분포이므로 다음이 성립한다.

$$
P\Big(\max_{0\le s\le t}B_s\ge a\Big)=2\thinspace P(B_t\ge a)
$$

따라서 최댓값은 $\vert B_t\vert$ 와 같은 분포를 가진다. $t=a=1$ 이면 $P(\max_{s\le1}B_s\ge1)=2\times0.159\approx0.317$ 이다. 수준 $a$ 의 도달시각 밀도와 두 흡수벽 사이의 탈출 확률이 이 식에서 유도된다.

## 불변성

다음 변환들은 표준 Brown 운동을 표준 Brown 운동으로 보낸다.

| 변환 | 식 |
|---|---|
| 스케일링 | $c^{-1/2}B_{ct}$ |
| 대칭 | $-B_t$ |
| 시간반전 | $B_T-B_{T-t}$ (구간 $[0,T]$ ) |
| 시간역전 | $tB_{1/t}$ (단, $t=0$ 에서 0) |

스케일링 불변성이 자기유사성(self-similarity)의 진술이다. 시간역전은 $t \to 0$ 근처의 성질과 $t \to \infty$ 의 성질을 맞바꾼다. 시간역전한 과정이 $t=0$ 에서 연속이라는 것은 $t\to\infty$ 에서 $B_t/t \to 0$ 이라는 것, 곧 Brown 운동의 [대수의 법칙](law-of-large-numbers.md)과 동치다.

## 경로의 불규칙성

- 거의 확실히 모든 점에서 동시에 미분 불가능하다.
- 임의의 $\alpha \lt 1/2$ 에 대해 $\alpha$ Hölder 연속([Hölder 공간](holder-spaces.md))이지만 $\alpha = 1/2$ 에서는 아니다.
- 영점의 집합은 [측도](measure.md) 0 인 비가산 닫힌 집합이고 고립점이 없다. 이 세 성질은 [Cantor 집합](cantor-set.md)도 갖는다.
- [반복로그 법칙](law-of-iterated-logarithm.md)은 원점 근처의 진동 폭을 정확히 준다.

$$
\limsup_{t\to0^+}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=1
$$

# 활용

## 확률미분방정식

2차변동이 $0$ 이 아니므로 $dB_t$ 에 대한 적분은 보통의 [Riemann–Stieltjes 적분](riemann-stieltjes-integral.md)으로 정의되지 않는다. 대신 적분을 martingale 의 극한으로 정의하면 Itô 적분이 되고, 연쇄법칙에 2차항이 남는다.

$$
df(B_t)=f'(B_t)\thinspace dB_t+\tfrac12 f''(B_t)\thinspace dt
$$

이 등식을 Itô 공식이라 한다. [확률미분방정식](stochastic-differential-equations.md)으로 세우는 확산 과정, 금융의 옵션 가격 모형, 물리의 Langevin 방정식이 이 공식을 쓴다.

## 편미분방정식과의 대응

영역 $D$ 에서 경계에 닿을 때까지 Brown 운동을 흘려 보내고 경계값의 기댓값을 취하면 [Dirichlet 문제](dirichlet-problem.md)의 해가 된다. [조화함수](harmonic-functions.md)의 평균값 성질은 $u(B_{t\wedge\tau})$ 가 martingale 이라는 진술과 동치다. [무작위 걷기](random-walks.md)와 이산 조화함수의 대응을 연속으로 옮긴 것이 이 대응이다.

## 통계와 극한정리

경험분포함수를 $\sqrt{n}$ 배로 스케일링한 과정은 [Brown 다리](brownian-bridge.md)로 수렴하고, 그 최댓값의 분포가 [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)의 임계값을 준다. 단위근 검정, 변화점 탐지, 축차 검정의 극한분포도 Brown 운동의 범함수로 표현된다. Donsker 불변원리 덕분에 증분의 구체적 분포가 무엇이든 극한이 같아서, 한 번 계산한 표를 여러 상황에 쓸 수 있다.

# 연관 문서

## 선수지식

- [Martingale](martingales.md)
- [중심극한정리](central-limit-theorem.md)
- [Gauss 과정](gaussian-processes.md)

## 더 알아보기

- [Donsker 불변원리](donsker-invariance-principle.md)
- [Brown 다리](brownian-bridge.md)
- [반복로그 법칙](law-of-iterated-logarithm.md)
- [Lévy 연속률](levy-modulus.md)
- [Skorokhod 매장](skorokhod-embedding.md)
- [Itô 적분](ito-calculus.md)

#probability #analysis #measure_theory #construction
