# Ornstein–Uhlenbeck 과정

# 개요

**Ornstein–Uhlenbeck 과정(Ornstein–Uhlenbeck process)** 은 무작위로 흔들리면서도 늘 한 값 쪽으로 끌려 돌아오는 연속시간 확률과정이다. 물속 꽃가루 입자의 속도는 물 분자의 충돌로 계속 바뀌지만 마찰 때문에 한없이 커지지 않고, 오래 지나면 속도의 분포가 일정해진다. Ornstein–Uhlenbeck 과정은 이런 양을 [확률미분방정식](stochastic-differential-equations.md) $dX_t=-\theta X_t\thinspace dt+\sigma\thinspace dB_t$ 로 적고, 그 해가 [정규분포](normal-distribution.md)를 따르는 것을 써서 분포를 정확히 계산한다.

# 직관

시간을 길이 $h$ 의 칸으로 자른다. 한 칸마다 속도 $X$ 는 마찰 때문에 $\theta hX$ 만큼 줄고, 충돌 때문에 평균 $0$, 분산 $\sigma^2h$ 인 정규 잡음 $\xi_k$ 만큼 바뀐다.

$$
X_{k+1}=(1-\theta h)X_k+\xi_k
$$

분산을 $v_k$ 라 하면 잡음이 앞의 값과 독립이므로 $v_{k+1}=(1-\theta h)^2v_k+\sigma^2h$ 이다. 이 점화식은 $v=(1-\theta h)^2v+\sigma^2h$ 를 만족하는 값으로 수렴하고, 그 값은 $v=\sigma^2/\bigl(\theta(2-\theta h)\bigr)$ 이다.

$h\to 0$ 이면 이 값은 $\sigma^2/(2\theta)$ 다. 마찰이 강할수록, 잡음이 약할수록 속도가 $0$ 근처에 모인다. 칸마다 정규 잡음을 일차식으로 더하므로 $X_k$ 는 언제나 정규분포를 따른다.

# 정의

$\theta\gt 0$, $\sigma\gt 0$ 이고 $B_t$ 가 [Brown 운동](brownian-motion.md)일 때, 다음 확률미분방정식의 해 $X_t$ 를 Ornstein–Uhlenbeck 과정이라 한다.

$$
dX_t=-\theta X_t\thinspace dt+\sigma\thinspace dB_t
$$

평균 $\mu$ 쪽으로 끌리는 판은 $dX_t=\theta(\mu-X_t)\thinspace dt+\sigma\thinspace dB_t$ 이고, $X_t-\mu$ 가 위 방정식을 만족한다.

# 성질

## 해의 표현

**정리.** 해는 다음과 같다.

$$
X_t=e^{-\theta t}X_0+\sigma\int_0^te^{-\theta(t-s)}\thinspace dB_s
$$

증명의 요지. [Itô 적분](ito-calculus.md)의 곱 규칙을 $e^{\theta t}X_t$ 에 적용하면 $d(e^{\theta t}X_t)=e^{\theta t}\sigma\thinspace dB_t$ 이다. $e^{\theta t}$ 는 유한 변동이므로 Itô 보정항이 없다. 양변을 $0$ 부터 $t$ 까지 적분한다.

## 분포

**정리.** $X_0=x$ 이면 $X_t$ 는 다음 정규분포를 따른다.

$$
X_t\sim N\left(e^{-\theta t}x,\ \frac{\sigma^2}{2\theta}\bigl(1-e^{-2\theta t}\bigr)\right)
$$

증명의 요지. 결정적인 함수의 Itô 적분은 평균이 $0$ 이고 분산이 그 함수의 제곱의 적분인 정규 확률변수다. $\int_0^te^{-2\theta(t-s)}\thinspace ds=(1-e^{-2\theta t})/(2\theta)$ 이다.

$t\to\infty$ 이면 처음 값과 관계없이 분포가 $N\bigl(0,\sigma^2/(2\theta)\bigr)$ 으로 수렴한다. $X_0$ 이 이 분포를 따르고 $B$ 와 독립이면 모든 $t$ 에서 $X_t$ 가 같은 분포를 따르고, 이것을 정상분포라 한다.

## 공분산과 특징

**정리.** 정상분포에서 시작한 Ornstein–Uhlenbeck 과정은 평균이 $0$ 이고 공분산이 다음인 [Gauss 과정](gaussian-processes.md)이다.

$$
\mathrm{Cov}(X_s,X_t)=\frac{\sigma^2}{2\theta}e^{-\theta\vert t-s\vert}
$$

증명의 요지. $s\le t$ 이면 해의 표현에서 $X_t=e^{-\theta(t-s)}X_s+\sigma\int_s^te^{-\theta(t-u)}\thinspace dB_u$ 이고, 뒤의 항은 $X_s$ 와 독립이다.

Ornstein–Uhlenbeck 과정은 Markov 성질을 가지면서 정상인 Gauss 과정이다. 거꾸로 평균이 $0$ 이고 연속인 정상 Gauss 과정이 Markov 성질을 가지면 상수 과정이거나 Ornstein–Uhlenbeck 과정이다. 이것을 Doob 정리(Doob's theorem)라 한다.[^1]

## 생성작용소와 Fokker–Planck 방정식

이 과정의 생성작용소(generator)는 $Lf(x)=-\theta xf'(x)+\frac{\sigma^2}2f''(x)$ 이다. 밀도 $p(t,x)$ 는 [Fokker–Planck 방정식](fokker-planck.md) $\partial_tp=\partial_x(\theta xp)+\frac{\sigma^2}2\partial_x^2p$ 를 만족하고, 정상분포의 밀도 $\propto e^{-\theta x^2/\sigma^2}$ 은 우변을 $0$ 으로 만든다.

# 활용

- 물리에서 [Langevin 방정식](langevin-dynamics.md)의 입자 속도가 이 과정이다. Ornstein 과 Uhlenbeck 이 Brown 운동하는 입자의 속도를 다룬 1930 년 논문에서 이름이 왔다.[^2]
- 금융에서 이자율이 장기 평균으로 돌아오는 Vasicek 모형(Vasicek model)은 평균 $\mu$ 쪽으로 끌리는 판이다.
- [확산모형](diffusion-models.md)의 순방향 과정은 자료에 잡음을 더해 표준정규분포로 보내는 Ornstein–Uhlenbeck 과정이고, 생성은 그 시간 역전을 따라간다.
- Gauss 과정의 공분산핵 $e^{-\vert s-t\vert/\ell}$ 은 이 과정의 공분산이다.

[^1]: J. L. Doob, "The Brownian movement and stochastic equations", *Annals of Mathematics* 43 (1942), 351–369.
[^2]: G. E. Uhlenbeck, L. S. Ornstein, "On the theory of the Brownian motion", *Physical Review* 36 (1930), 823–841.

# 연관 문서

## 선수지식

- [확률미분방정식](stochastic-differential-equations.md)
- [Gauss 과정](gaussian-processes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #machine_learning
