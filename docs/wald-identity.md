# Wald 항등식

# 개요

**Wald 항등식(Wald's identity)** 은 독립인 값을 하나씩 더하다가 지금까지 본 값만 보고 멈출 때, 멈춘 시점의 합의 평균이 한 번의 평균과 더한 횟수의 평균의 곱이라는 정리다. 주사위를 $6$ 이 나올 때까지 던지고 나온 눈을 모두 더한다고 하자. 던지는 횟수가 결과에 따라 달라지고 마지막 눈은 늘 $6$ 이므로, 합의 평균이 $3.5$ 와 평균 횟수의 곱인지는 바로 보이지 않는다.

Wald 항등식은 멈추는 규칙이 미래를 보지 않으면 이 곱셈이 맞다는 것을 보이고, 합의 평균을 횟수의 평균 하나로 계산하게 한다.

# 직관

주사위 눈을 $X_1, X_2, \dots$ 로 적고 처음 $6$ 이 나온 회차를 $N$ 이라 한다. $N$ 은 성공확률 $1/6$ 의 [기하분포](geometric-distribution.md)를 따르므로 평균이 $6$ 이다.

합 $X_1+\dots+X_N$ 을 직접 계산한다. 마지막 눈은 $6$ 이다. 그 앞의 $N-1$ 번은 $6$ 이 아니었다는 조건이 붙으므로 각각 $1$ 부터 $5$ 까지 고르게 나오고 평균이 $3$ 이다. 앞의 횟수는 평균 $5$ 번이므로 합의 평균은 $5\cdot 3+6=21$ 이다.

한 번의 평균 $3.5$ 와 평균 횟수 $6$ 을 곱해도 $21$ 이다. 앞의 눈이 평균보다 작은 만큼 마지막 눈이 평균보다 크다. 멈추는 규칙이 지금까지의 눈만 보고 정해지면 이 상쇄가 늘 일어난다.

# 정의

$X_1, X_2, \dots$ 가 독립이고 같은 분포를 따르는 [확률변수](random-variables.md)이고 $S_n=X_1+\dots+X_n$ 이라 한다. 양의 정수값 확률변수 $N$ 이 모든 $n$ 에 대해 사건 $\lbrace N=n\rbrace$ 이 $X_1,\dots,X_n$ 만으로 정해지면 $N$ 을 정지시간(stopping time)이라 한다. [Martingale](martingales.md) 이론의 정지시간을 독립 합에 적용한 것이다.

직관 절의 $N$ 은 정지시간이다. $N=n$ 인지는 $n$ 번째까지의 눈을 보면 안다.

처음 $6$ 이 나오기 바로 전 회차를 $N'$ 이라 하면 $N'$ 은 정지시간이 아니다. $N'=n$ 인지는 $n+1$ 번째 눈을 보아야 안다.

# 성질

## Wald 항등식

정리. $\mathbb E\vert X_1\vert\lt\infty$ 이고 $N$ 이 $\mathbb E[N]\lt\infty$ 인 정지시간이면 다음이 성립한다[^1].

$$
\mathbb E[S_N]=\mathbb E[N]\thinspace\mathbb E[X_1]
$$

증명의 요지. 합을 지시함수로 적는다.

$$
S_N=\sum_{k=1}^\infty X_k\thinspace\mathbf 1\lbrace N\ge k\rbrace
$$

사건 $\lbrace N\ge k\rbrace$ 는 $\lbrace N\le k-1\rbrace$ 의 여사건이므로 $X_1,\dots,X_{k-1}$ 로 정해지고 $X_k$ 와 독립이다. 그러므로 각 항의 기댓값은 $\mathbb E[X_1]\Pr[N\ge k]$ 이고, 이것을 $k$ 에 대해 더하면 $\mathbb E[X_1]\mathbb E[N]$ 이다. 합과 기댓값의 순서는 $\vert X_k\vert$ 에 같은 계산을 해서 얻은 유한한 값으로 바꾼다.

직관 절의 $N'$ 에 이 계산을 하면 틀린 값이 나온다. $N'=N-1$ 이므로 $\mathbb E[S_{N'}]=15$ 인데, $\mathbb E[N']\thinspace\mathbb E[X_1]=5\cdot 3.5=17.5$ 다.

## 조건이 빠지면 성립하지 않는 경우

$X_k$ 가 확률 $1/2$ 씩 $+1$, $-1$ 이고 $N$ 이 $S_n=1$ 이 처음 되는 시각이라 하자. $N$ 은 확률 $1$ 로 유한한 정지시간이지만 $\mathbb E[S_N]=1$ 이고 $\mathbb E[X_1]=0$ 이다. $\mathbb E[N]=\infty$ 이므로 정리의 조건을 만족하지 않는다[^1].

## Wald 의 둘째 항등식

정리. $\mathbb E[X_1]=\mu$, $\mathrm{Var}(X_1)=\sigma^2\lt\infty$ 이고 $N$ 이 $\mathbb E[N]\lt\infty$ 인 정지시간이면 다음이 성립한다[^1].

$$
\mathbb E\big[(S_N-N\mu)^2\big]=\sigma^2\thinspace\mathbb E[N]
$$

증명은 $S_n-n\mu$ 를 위와 같이 지시함수의 합으로 적고 제곱을 전개한다. 서로 다른 두 항의 곱은 뒤쪽 항이 앞쪽의 정보와 독립이므로 기댓값이 $0$ 이다.

$\pm1$ 걸음에서 $N$ 을 $S_n$ 이 $a$ 나 $-b$ 에 처음 닿는 시각으로 두면, 첫째 항등식에서 $a$ 에 닿을 확률 $b/(a+b)$ 가 나오고 둘째 항등식에서 $\mathbb E[N]=ab$ 가 나온다. 선택적 정지 정리로 얻는 도박꾼 파산 확률, 기대 시간과 같은 값이다.

## 지수 항등식

$X_1$ 의 [적률생성함수](moment-generating-function.md) $M(\theta)=\mathbb E[e^{\theta X_1}]$ 이 유한하면 $e^{\theta S_n}M(\theta)^{-n}$ 은 평균이 $1$ 인 martingale 이다. 이 과정이 $N$ 까지 유계이고 $N$ 이 확률 $1$ 로 유한하면 다음이 성립한다. 이것을 Wald 의 기본 항등식(Wald's fundamental identity)이라 한다[^2].

$$
\mathbb E\big[e^{\theta S_N}M(\theta)^{-N}\big]=1
$$

$M(\theta)=1$ 인 $\theta\ne 0$ 을 고르면 $\mathbb E[e^{\theta S_N}]=1$ 이 되어, 합이 어느 문턱을 먼저 넘는지의 확률을 문턱 값으로 근사한다.

# 활용

- [재생 과정](renewal-process.md). 도착 간격의 합 $S_{N_t+1}$ 에 첫째 항등식을 써서 기본 재생 정리를 증명한다.
- [순차확률비 검정](sequential-probability-ratio-test.md). 로그 우도비의 합이 문턱을 넘을 때 멈추는 검정의 평균 표본 수를 첫째 항등식으로, 오류율을 지수 항등식으로 계산한다.
- [Skorokhod 매장](skorokhod-embedding.md). [Brown 운동](brownian-motion.md)의 정지시간에 대한 연속시간 판본 $\mathbb E[B_\tau^2]=\mathbb E[\tau]$ 가 매장 시간의 평균을 목표 분포의 분산으로 정한다.

[^1]: Rick Durrett, *Probability: Theory and Examples*, 5th ed., Cambridge University Press, 2019, §4.8 (Wald's equation and Wald's second equation).
[^2]: A. Wald, *Sequential Analysis*, Wiley, 1947, Appendix A.1 (the fundamental identity of sequential analysis).

# 연관 문서

## 선수지식

- [Martingale](martingales.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
