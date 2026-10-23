# 반복로그 법칙

# 개요

**반복로그 법칙(law of the iterated logarithm)** 은 평균 $0$, 분산 $\sigma^2$ 인 독립 동일분포 확률변수의 부분합 $S_n$ 에 대해

$$
\limsup\_{n\to\infty}\frac{S_n}{\sqrt{2\sigma^2n\log\log n}}=1\qquad\text{거의 확실하게}
$$

가 성립한다는 정리다. [큰 수의 법칙](law-of-large-numbers.md)은 $S_n/n\to 0$ 을, [중심극한정리](central-limit-theorem.md)는 $S_n/\sqrt n$ 의 분포를 준다. 반복로그 법칙은 한 표본 경로에서 $S_n$ 이 $\sqrt n$ 보다 얼마나 크게 흔들리는지를 준다.

[Brown 운동](brownian-motion.md)에서는 $\limsup\_{t\to\infty}B_t/\sqrt{2t\log\log t}=1$ 이고, 부분합의 판본은 Brown 운동의 판본에서 유도된다.

# 직관

동전을 던져 앞면이면 $+1$, 뒷면이면 $-1$ 을 더한 합을 $S_n$ 이라 한다. 중심극한정리로 $\Pr\lbrack S_n\gt a\sqrt n\rbrack$ 은 $n$ 이 크면 $e^{-a^2/2}$ 규모다. $a=3$ 이면 [정규분포](normal-distribution.md)에서 이 확률이 약 0.13% 이지만, $n$ 은 끝없이 계속되므로 $S_n\gt 3\sqrt n$ 인 $n$ 이 무한히 많이 나올 수 있다.

$n=2^k$ 인 시각들만 본다. 시각 $2^{k-1}$ 에서 $2^k$ 사이에 더해지는 항들은 앞선 항들과 독립이고, 그 합의 분산이 $S\_{2^k}$ 의 분산의 절반이다. 그래서 사건 $S\_{2^k}\gt a_k\sqrt{2^k}$ 들을 거의 독립으로 보고, 확률의 합 $\sum_ke^{-a_k^2/2}$ 가 발산하는지 보면 된다. $a_k^2=2c\log k$ 로 두면 합이 $\sum_kk^{-c}$ 이고, $c\lt 1$ 에서 발산, $c\gt 1$ 에서 수렴한다. 경계 $c=1$ 에서 $a_k=\sqrt{2\log k}$ 이고, $k=\log_2n$ 이므로 $S_n$ 의 최고점이 $\sqrt{2n\log\log n}$ 규모다.

# 정의

$X_1,X_2,\dots$ 가 독립이고 같은 분포를 따르며 $\mathbb E X_1=0$, $\mathbb E X_1^2=\sigma^2\in(0,\infty)$ 이라 한다. $S_n=X_1+\dots+X_n$, $h(n)=\sqrt{2n\log\log n}$ 으로 둔다. **반복로그 법칙**은

$$
\limsup\_{n\to\infty}\frac{S_n}{\sigma h(n)}=1,\qquad \liminf\_{n\to\infty}\frac{S_n}{\sigma h(n)}=-1
$$

이 거의 확실하게 성립한다는 진술이다. 동전 던지기의 경우는 Khinchin 이, 유한 분산의 일반적인 경우는 Hartman 과 Wintner 가 증명했다.[^1]

# 성질

## Brown 운동의 반복로그 법칙

> **정리.** 표준 Brown 운동 $B$ 와 $h(t)=\sqrt{2t\log\log t}$ 에 대해 $\limsup\_{t\to\infty}B_t/h(t)=1$ 이 거의 확실하게 성립한다.

증명의 요지. $\theta\gt 1$ 을 고정하고 $t_k=\theta^k$ 로 둔다.

- 상계. Brown 운동의 반사원리(reflection principle)로 $\Pr\lbrack\max\_{s\le t}B_s\gt a\rbrack=2\Pr\lbrack B_t\gt a\rbrack\le e^{-a^2/(2t)}$ 이다. $t=t\_{k+1}$, $a=(1+\varepsilon)h(t_k)$ 를 넣으면 확률이 $(k\log\theta)^{-(1+\varepsilon)^2/\theta}$ 이하다. $\theta\lt(1+\varepsilon)^2$ 이면 $k$ 에 대한 합이 유한하므로 [Borel–Cantelli 보조정리](borel-cantelli.md)로 충분히 큰 $k$ 에서 $\max\_{s\le t\_{k+1}}B_s\le(1+\varepsilon)h(t_k)$ 이다. $t_k\le t\le t\_{k+1}$ 에서 $h(t_k)\le h(t)$ 이므로 상극한이 $1+\varepsilon$ 이하다.
- 하계. 증분 $D_k=B\_{t_k}-B\_{t\_{k-1}}$ 들은 독립이고 분산이 $t_k(1-1/\theta)$ 이다. 정규분포의 꼬리 추정으로 $\Pr\lbrack D_k\gt(1-\varepsilon)h(t_k)\rbrack$ 는 $k^{-(1-\varepsilon)^2/(1-1/\theta)}$ 에 로그 인자를 곱한 규모다. $\theta$ 가 크면 지수가 $1$ 보다 작아 합이 발산하고, 독립 사건에 대한 Borel–Cantelli 의 둘째 판본으로 $D_k\gt(1-\varepsilon)h(t_k)$ 가 무한히 자주 일어난다. 상계를 $-B$ 에 쓰면 충분히 큰 $k$ 에서 $B\_{t\_{k-1}}\ge-2h(t\_{k-1})\ge-2h(t_k)/\sqrt\theta$ 이므로, 무한히 많은 $k$ 에서 $B\_{t_k}\gt(1-\varepsilon-2/\sqrt\theta)h(t_k)$ 다. $\theta\to\infty$, $\varepsilon\to 0$ 으로 보낸다. $\square$

시간역전 $tB\_{1/t}$ 가 Brown 운동이므로, 같은 정리에서 원점 근처의 판본 $\limsup\_{t\to 0^+}B_t/\sqrt{2t\log\log(1/t)}=1$ 이 나온다.

## 부분합의 반복로그 법칙

$X_i$ 가 정규분포를 따르면 $S_n$ 과 $\sigma B_n$ 의 분포가 같으므로 Brown 운동의 정리가 곧 부분합의 정리다. 일반 분포에서는 $S_n$ 과 $\sigma B_n$ 을 한 확률공간에 두어 그 차가 $h(n)$ 보다 작게 만드는 강근사(strong approximation)를 쓴다. Skorokhod 매장(Skorokhod embedding)은 정지시각 $\tau_1\le\tau_2\le\cdots$ 를 잡아 $(B\_{\tau_n})$ 이 $(S_n/\sigma)$ 와 같은 분포가 되게 하고, 큰 수의 법칙 $\tau_n/n\to 1$ 과 Brown 운동의 연속률로 $\vert B\_{\tau_n}-B_n\vert=o(h(n))$ 을 보인다.[^2]

## Strassen 의 함수형 반복로그 법칙

$\eta_n(t)=S\_{\lfloor nt\rfloor}/(\sigma h(n))$ $(0\le t\le 1)$ 로 둔다. **Strassen 정리**는 함수열 $(\eta_n)$ 이 균등노름에서 상대 콤팩트이고, 극한점 전체의 집합이 거의 확실하게

$$
K=\Bigl\lbrace f\in C\lbrack 0,1\rbrack:\ f(0)=0,\ f\ \text{절대연속},\ \int_0^1f'(t)^2\thinspace dt\le 1\Bigr\rbrace
$$

라는 정리다.[^3] $f\in K$ 이면 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $f(1)^2\le\int_0^1f'^2\le 1$ 이고 $f(t)=t$ 에서 등호이므로, $\sup\_{f\in K}f(1)=1$ 이 개요의 반복로그 법칙이다. 같은 집합에서 $\max_t f(t)$ 나 $\int_0^1 f$ 의 최댓값을 구하면 $\max\_{k\le n}S_k$ 나 $\sum\_{k\le n}S_k$ 의 상극한이 나온다.

## 분산 조건

$\mathbb E X_1^2=\infty$ 이면 $\limsup_n\vert S_n\vert/\sqrt{n\log\log n}=\infty$ 가 거의 확실하게 성립한다(Strassen).[^3] 유한 분산은 $S_n/\sqrt{n\log\log n}$ 이 유계일 필요충분조건이다.

# 활용

- **수렴 속도의 한계.** 강한 큰 수의 법칙의 오차 $S_n/n$ 은 $\sqrt{2\sigma^2\log\log n/n}$ 규모로 무한히 자주 나타나므로, 거의 확실한 수렴의 속도를 이보다 빠르게 줄 수 없다. Monte Carlo 방법(Monte Carlo method)의 표본평균 오차가 이 규모다.
- **Brown 운동의 국소 진동.** 원점 근처 판본은 Brown 운동 경로가 각 고정점에서 $\sqrt{2t\log\log(1/t)}$ 의 폭으로 진동한다는 것을 준다. 모든 점에서 동시에 성립하는 Lévy 의 연속률은 $\sqrt{2t\log(1/t)}$ 로 더 크다.
- **반복 검정의 경계.** 귀무가설 아래의 부분합이 $c\sqrt n$ 을 무한히 자주 넘으므로, 자료가 들어올 때마다 고정된 $c\sqrt n$ 경계로 검정하면 귀무가설이 참이어도 결국 기각한다. 모든 $n$ 에서 동시에 성립하는 신뢰열(confidence sequence)의 폭은 그래서 $\sqrt{n\log\log n}$ 규모 이상이다.[^4]

[^1]: A. Khintchine, "Über einen Satz der Wahrscheinlichkeitsrechnung", *Fundamenta Mathematicae* **6** (1924), 9–20. P. Hartman, A. Wintner, "On the law of the iterated logarithm", *American Journal of Mathematics* **63** (1941), 169–176.
[^2]: Richard Durrett, *Probability: Theory and Examples*, 5판, Cambridge University Press, 2019, 8 장.
[^3]: V. Strassen, "An invariance principle for the law of the iterated logarithm", *Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete* **3** (1964), 211–226. 무한 분산의 결과는 V. Strassen, "A converse to the law of the iterated logarithm", 같은 학술지 **4** (1966), 265–268.
[^4]: D. A. Darling, Herbert Robbins, "Confidence sequences for mean, variance, and median", *Proceedings of the National Academy of Sciences* **58** (1967), 66–68.

# 연관 문서

## 선수지식

- [Brown 운동](brownian-motion.md)
- [Borel–Cantelli 보조정리](borel-cantelli.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #statistics #theorem
