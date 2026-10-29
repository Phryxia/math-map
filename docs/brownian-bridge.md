# Brown 다리

# 개요

**Brown 다리(Brownian bridge)** 는 시작과 끝의 값이 모두 $0$ 으로 묶인 채 무작위로 오르내리는 경로다. $\lbrack 0,1\rbrack$ 에서 균등하게 뽑은 표본 $n$ 개로 점 $t$ 이하인 표본의 비율을 세면, 그 비율과 $t$ 의 차는 $t=0$ 과 $t=1$ 에서 언제나 $0$ 이고 그 사이에서는 무작위로 오르내린다. 표본이 정말 [균등분포](uniform-distribution.md)에서 왔는지 판정하려면 표본이 많을 때 이 차의 최댓값이 얼마나 큰지 알아야 한다. 이 차를 $\sqrt n$ 배 하면 Brown 다리에 다가가므로, 판정에 쓰는 극한분포를 Brown 다리의 최댓값 분포로 계산한다.

# 직관

Brown 다리는 $\lbrack 0,1\rbrack$ 위에서 양 끝값이 $0$ 으로 묶인 평균 $0$ 의 [Gauss 과정](gaussian-processes.md)이고, 공분산이 $\min(s,t)-st$ 다. [Brown 운동](brownian-motion.md) $B$ 로 $B^0_t=B_t-tB_1$ 이라 쓰면 Brown 다리이고, $B$ 를 $B_1=0$ 이라는 조건 아래 둔 과정과 분포가 같다.

균등 표본의 경험 분포함수에서 $t$ 를 뺀 차를 $\sqrt n$ 배 한 과정이 Brown 다리로 수렴하므로, 경험 분포함수로 만든 검정통계량의 극한분포가 Brown 다리의 범함수로 나온다.

$\lbrack 0,1\rbrack$ 의 균등분포에서 표본 $n$ 개를 뽑고 경험 분포함수 $F_n(t)$ 를 만든다. $F_n(0)=0$, $F_n(1)=1$ 이므로 차 $F_n(t)-t$ 는 $t=0$ 과 $t=1$ 에서 항상 $0$ 이다. $nF_n(t)$ 는 시행 $n$ 번, 성공확률 $t$ 의 [이항분포](binomial-distribution.md)를 따르므로 $\sqrt n(F_n(t)-t)$ 의 분산은 $t(1-t)$ 이고, 두 시각 $s\le t$ 의 공분산은 $s-st$ 다.

Brown 운동의 분산 $t$ 는 $t=1$ 에서 $0$ 이 되지 않는다. 끝점에서 $0$ 이 되도록 $B_t$ 에서 $tB_1$ 을 빼면 분산이 $t-2t^2+t^2=t(1-t)$ 이고, 공분산도 $s-st$ 로 경험 분포함수의 것과 같다.

# 정의

표준 Brown 운동 $(B_t)\_{0\le t\le 1}$ 에 대해

$$
B^0_t=B_t-tB_1\qquad(0\le t\le 1)
$$

을 **Brown 다리**라 한다. $B^0$ 은 경로가 연속이고 $B^0_0=B^0_1=0$ 이며, 평균 $0$ 과 공분산

$$
\mathbb E\lbrack B^0_sB^0_t\rbrack=\min(s,t)-st
$$

로 분포가 정해지는 Gauss 과정이다. $s\le t$ 이면 $\mathbb E\lbrack B^0_sB^0_t\rbrack=s-ts-st+st=s-st$ 이다.

끝값을 $a$, $b$ 로 묶은 판본은 $a+(b-a)t+B^0_t$ 이고, 구간 $\lbrack 0,T\rbrack$ 의 판본은 $\sqrt T\thinspace B^0\_{t/T}$ 다.

# 성질

## 조건부 분포로서의 Brown 다리

> **정리.** $B^0$ 과 $B_1$ 은 독립이다. 따라서 $B$ 를 $B_1=0$ 이라는 조건 아래 둔 과정의 분포는 $B^0$ 의 분포다.

증명의 요지. $(B^0_{t_1},\dots,B^0_{t_k},B_1)$ 은 결합 [정규분포](normal-distribution.md)를 따르고 $\mathbb E\lbrack B^0_tB_1\rbrack=t-t=0$ 이다. 결합 정규분포에서 공분산이 $0$ 이면 독립이다. $B_t=B^0_t+tB_1$ 이므로 $B_1=x$ 인 조건 아래 $B$ 는 $B^0_t+tx$ 와 분포가 같고, $x=0$ 을 넣는다. $\square$

## 시간 변환 표현

$W$ 를 표준 Brown 운동이라 하면

$$
B^0_t=(1-t)\thinspace W\_{t/(1-t)}\qquad(0\le t\lt 1)
$$

도 Brown 다리다. $s\le t$ 에서 공분산이 $(1-s)(1-t)\cdot\frac{s}{1-s}=s-st$ 로 같다. 이 표현에서 $B^0$ 은 확률미분방정식

$$
dX_t=-\frac{X_t}{1-t}\thinspace dt+dW_t,\qquad X_0=0
$$

의 해와 분포가 같다.[^1] 표류 항 $-X_t/(1-t)$ 는 $X_t$ 와 부호가 반대이고 $t\to 1$ 에서 크기가 무한히 커진다. [확률미분방정식](stochastic-differential-equations.md)의 해로 보면 $B^0$ 은 Markov 과정이다.

## 최댓값의 분포

> **정리.** $a\gt 0$ 에 대해
> $$
> \Pr\Bigl\lbrack\max\_{0\le t\le 1}B^0_t\gt a\Bigr\rbrack=e^{-2a^2},\qquad \Pr\Bigl\lbrack\max\_{0\le t\le 1}\vert B^0_t\vert\le a\Bigr\rbrack=1-2\sum\_{j=1}^\infty(-1)^{j-1}e^{-2j^2a^2}
> $$
> 이다.

증명의 요지(첫 식). Brown 운동의 반사원리(reflection principle)에서 $x\lt a$ 이면 $\max B\gt a$ 이고 $B_1\in dx$ 일 확률밀도가 $B_1\in d(2a-x)$ 의 확률밀도와 같다. $x=0$ 에서 두 정규밀도의 비가 $e^{-(2a)^2/2}=e^{-2a^2}$ 이고, 첫 정리의 조건부 분포에 넣으면 첫 식이 나온다. 둘째 식은 $a$ 와 $-a$ 에서의 반사를 번갈아 되풀이하고 포함배제로 더한 것이다. $\square$

둘째 식의 오른쪽이 Kolmogorov 분포(Kolmogorov distribution)의 분포함수다.

## Karhunen–Loève 전개

공분산 $\min(s,t)-st$ 를 핵으로 하는 적분작용소의 고유함수는 $\sqrt2\sin(k\pi t)$ 이고 고윳값은 $1/(k\pi)^2$ 이다. 독립 표준정규 $Z_1,Z_2,\dots$ 로

$$
B^0_t=\sum\_{k=1}^\infty\frac{\sqrt2\sin(k\pi t)}{k\pi}Z_k
$$

이고 급수는 거의 확실하게 $t$ 에 대해 균등수렴한다.[^2] 직교성에서 $\int_0^1(B^0_t)^2\thinspace dt=\sum_kZ_k^2/(k\pi)^2$ 이다.

# 활용

- **[Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md).** 통계량 $\sqrt n D_n$ 의 극한이 $\max_t\vert B^0_t\vert$ 이고, 최댓값의 분포 절이 기각역의 분위수를 준다. Doob 이 경험 분포함수의 극한을 Brown 다리로 보고 Kolmogorov 의 극한분포를 다시 유도했다.[^3]
- **[이차 경험분포함수 통계량](quadratic-edf-statistics.md).** Cramér–von Mises 통계량 $n\int_0^1(F_n(t)-t)^2\thinspace dt$ 의 극한이 $\int_0^1(B^0_t)^2\thinspace dt$ 이고, Karhunen–Loève 전개가 그 분포를 정규 제곱의 가중합으로 준다.
- **[경험 과정](empirical-process.md).** 반직선의 지시함수족에서 경험 과정의 극한이 Brown 다리이고, [Donsker 불변원리](donsker-invariance-principle.md)의 경험과정 판본이 그 수렴을 준다.
- **Brown 운동의 구성.** 두 시각의 값이 정해진 Brown 운동을 그 사이에서 채우는 것이 끝값을 묶은 Brown 다리다. Lévy 의 구성은 구간을 반씩 나누며 가운데 점의 값을 이 조건부 분포에서 뽑는다.

[^1]: Ioannis Karatzas, Steven E. Shreve, *Brownian Motion and Stochastic Calculus*, 2판, Springer, 1991, 5.6.B 절.
[^2]: Galen R. Shorack, Jon A. Wellner, *Empirical Processes with Applications to Statistics*, Wiley, 1986.
[^3]: J. L. Doob, "Heuristic approach to the Kolmogorov–Smirnov theorems", *Annals of Mathematical Statistics* **20** (1949), 393–403.

# 연관 문서

## 선수지식

- [Brown 운동](brownian-motion.md)

## 더 알아보기

- [이차 경험분포함수 통계량](quadratic-edf-statistics.md)

#probability #statistics #measure_theory
