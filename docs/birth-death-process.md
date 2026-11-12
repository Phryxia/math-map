# 출생사망 과정

# 개요

**출생사망 과정(birth-death process)** 은 개수가 한 번에 하나씩만 늘거나 줄어드는 양을 연속시간으로 따라가는 확률 모형이다. 자리가 세 칸인 주차장에 차가 시간당 평균 $2$ 대 들어오고, 세워진 차는 한 대마다 평균 $1$ 시간 뒤에 떠난다. 자리가 다 찼을 때 온 차는 그냥 돌아간다. 차가 돌아가는 시간의 비율이 얼마인지가 이 모형의 물음이다.

출생사망 과정은 이웃한 두 개수 사이를 오가는 흐름이 같다는 식 하나로 정상분포를 곱으로 적어 이 물음에 답한다.

# 직관

세워진 차의 수를 $X_t$ 라 한다. 빈자리가 있으면 차가 시간당 $2$ 대 꼴로 들어오므로 $X_t$ 가 하나 는다. 차가 $n$ 대 있으면 그 가운데 아무나 한 대가 떠나는 빈도가 시간당 $n$ 대이므로 $X_t$ 가 하나 준다.

오래 지켜보면 $n$ 대에서 $n+1$ 대로 오르는 횟수와 $n+1$ 대에서 $n$ 대로 내리는 횟수가 같다. $n$ 대인 시간의 비율을 $\pi_n$ 이라 하면 다음 세 식이 나온다.

$$
2\pi_0=1\cdot\pi_1,\qquad 2\pi_1=2\pi_2,\qquad 2\pi_2=3\pi_3
$$

$\pi_0$ 을 $1$ 로 놓으면 $\pi_1=2$, $\pi_2=2$, $\pi_3=4/3$ 이고, 합이 $19/3$ 이므로 이것으로 나눈다. 자리가 다 찬 시간의 비율은 $\pi_3=4/19$ 이고, 들어오려던 차의 약 21% 가 돌아간다.

# 정의

## 출생사망 과정

$\lambda_n\ge 0$, $\mu_n\ge 0$, $\mu_0=0$ 인 수열이 주어졌다고 하자. 상태공간 $\lbrace 0,1,2,\dots\rbrace$ 위의 연속시간 [Markov 연쇄](markov-chains.md) $X_t$ 가 상태 $n$ 에서 $n+1$ 로 세기 $\lambda_n$, $n-1$ 로 세기 $\mu_n$ 으로 뛰고 다른 상태로는 뛰지 않으면 $X_t$ 를 **출생사망 과정** 이라 한다. $\lambda_n$ 을 출생률(birth rate), $\mu_n$ 을 사망률(death rate)이라 한다.

상태 $n$ 에 머무는 시간은 평균 $1/(\lambda_n+\mu_n)$ 의 [지수분포](exponential-distribution.md)이고, 떠날 때 확률 $\lambda_n/(\lambda_n+\mu_n)$ 로 위로 간다. 직관 절의 주차장은 상태 $\lbrace 0,1,2,3\rbrace$ 위에서 $\lambda_0=\lambda_1=\lambda_2=2$, $\lambda_3=0$, $\mu_n=n$ 인 출생사망 과정이다.

$\mu_n=0$ 이 모든 $n$ 에서 성립하면 **순수 출생 과정(pure birth process)** 이라 한다. 모든 $\lambda_n=\lambda$ 인 순수 출생 과정이 [Poisson 과정](poisson-process.md)이다.

## 생성행렬

전이 세기를 모은 행렬 $Q$ 를 생성행렬(generator matrix)이라 한다. 비대각 성분 $q_{n,n+1}=\lambda_n$, $q_{n,n-1}=\mu_n$ 이고 대각 성분은 행의 합이 $0$ 이 되게 $-(\lambda_n+\mu_n)$ 으로 둔다. 확률분포 $\pi$ 가 $\pi Q=0$ 을 만족하면 정상분포다. 주차장의 생성행렬은 다음이다.

$$
Q=\begin{pmatrix}-2&2&0&0\cr 1&-3&2&0\cr 0&2&-4&2\cr 0&0&3&-3\end{pmatrix}
$$

# 성질

## 상세균형과 곱꼴 정상분포

정리. 상태가 하나로 이어져 있으면 출생사망 과정의 정상분포는 상세균형(detailed balance) $\lambda_n\pi_n=\mu_{n+1}\pi_{n+1}$ 을 만족한다. 그러므로 정상분포는 다음 꼴이다[^1].

$$
\pi_n=\pi_0\prod_{k=1}^n\frac{\lambda_{k-1}}{\mu_k}
$$

정상분포가 존재할 필요충분조건은 이 곱들의 합이 유한한 것이고, 그때 $\pi_0$ 은 합의 역수다.

증명의 요지. $\pi Q=0$ 의 $0$ 번째 식이 $\lambda_0\pi_0=\mu_1\pi_1$ 이다. $n$ 번째 식에서 $n-1$ 번째까지의 상세균형을 빼면 $\lambda_n\pi_n=\mu_{n+1}\pi_{n+1}$ 이 남는다. 상태 $\lbrace 0,\dots,n\rbrace$ 과 나머지 사이의 경계를 지나는 간선이 하나뿐이므로 그 간선의 양방향 흐름이 같아야 한다.

## 대표적인 예

| 모형     | 출생률 λₙ            | 사망률 μₙ            | 정상분포                                       |
| -------- | -------------------- | -------------------- | ---------------------------------------------- |
| M/M/1    | $\lambda$            | $\mu$                | [기하분포](geometric-distribution.md) $(1-\rho)\rho^n$, $\rho=\lambda/\mu$ |
| M/M/∞    | $\lambda$            | $n\mu$               | 평균 $\lambda/\mu$ 의 [Poisson 분포](poisson-distribution.md) |
| M/M/c/c  | $\lambda$ ($n\lt c$) | $n\mu$               | $\rho^n/n!$ 에 비례, $n\le c$                  |

M/M/∞ 에서 곱은 $(\lambda/\mu)^n/n!$ 이므로 정상분포가 Poisson 분포다. 직관 절의 주차장은 M/M/3/3 이고, 다 찬 확률 $4/19$ 는 $\rho=2$, $c=3$ 의 Erlang B 공식(Erlang B formula)이다.

## 재귀성

정리. 모든 $\lambda_n\gt 0$ ($n\ge 0$), $\mu_n\gt 0$ ($n\ge 1$) 이면 출생사망 과정이 재귀적일 필요충분조건은 다음 급수가 발산하는 것이다[^1].

$$
\sum_{n=1}^\infty\prod_{k=1}^n\frac{\mu_k}{\lambda_k}=\infty
$$

증명의 요지. 뛰는 순서만 보면 상태 $n$ 에서 확률 $\lambda_n/(\lambda_n+\mu_n)$ 로 오르는 이산시간 걷기다. $i$ 에서 출발해 $N$ 보다 먼저 $0$ 에 닿을 확률은 $\rho_j=\prod_{k=1}^j\mu_k/\lambda_k$, $\rho_0=1$ 로 놓을 때 $\sum_{j=i}^{N-1}\rho_j\big/\sum_{j=0}^{N-1}\rho_j$ 다. $N\to\infty$ 에서 이 값이 $1$ 로 갈 조건이 급수의 발산이다.

M/M/1 에서 $\rho_j=(\mu/\lambda)^j$ 이므로 $\lambda\le\mu$ 일 때 재귀적이다. 정상분포의 조건 $\lambda\lt\mu$ 와 견주면 $\lambda=\mu$ 가 재귀적이지만 정상분포가 없는 영재귀 경우다.

## 폭발

순수 출생 과정이 유한 시간 안에 무한대로 갈 필요충분조건은 $\sum 1/\lambda_n\lt\infty$ 다. 이것을 폭발(explosion)이라 한다[^2].

상태 $n$ 에 머무는 시간은 평균 $1/\lambda_n$ 이므로 무한대까지 가는 데 걸리는 시간의 평균이 $\sum 1/\lambda_n$ 이다. $\lambda_n=(n+1)^2$ 이면 $0$ 에서 출발한 과정이 무한대에 닿는 시간의 평균이 $\sum 1/(n+1)^2=\pi^2/6$ 이다. 반대로 합이 발산하면 독립인 지수분포 대기시간의 합이 확률 $1$ 로 발산한다.

## 선형 출생사망 과정

$\lambda_n=n\lambda$, $\mu_n=n\mu$ 이면 개체마다 세기 $\lambda$ 로 하나를 낳고 세기 $\mu$ 로 죽는다. 개체들이 서로 무관하므로 연속시간 [분지과정](branching-processes.md)이다. 평균은 $\mathbb E[X_t]=X_0e^{(\lambda-\mu)t}$ 이고, 한 개체에서 출발한 집단이 언젠가 사라질 확률은 $\min(1,\mu/\lambda)$ 다[^1].

소멸 확률은 뛰는 순서의 걷기에서 나온다. 개체 수가 $n\ge 1$ 이면 확률 $\lambda/(\lambda+\mu)$ 로 하나 늘고 확률 $\mu/(\lambda+\mu)$ 로 하나 준다. 이 걷기가 $1$ 에서 $0$ 에 닿을 확률이 $\lambda\gt\mu$ 일 때 $\mu/\lambda$ 다.

# 활용

- [대기행렬](queues.md). 도착이 Poisson 이고 서비스가 지수분포인 대기행렬의 손님 수는 출생사망 과정이고, 정상분포가 곱꼴 공식으로 나온다.
- 인구와 전염병. 감염자가 세기 $\beta n(N-n)/N$ 으로 늘고 세기 $\gamma n$ 으로 회복하는 감염-회복-감염 모형(susceptible-infected-susceptible model)이 유한 상태 출생사망 과정이다.
- 집단유전학. 크기 $N$ 인 집단에서 한 대립유전자의 개수를 따라가는 [Moran 모형](moran-model.md)이 출생사망 과정이고, 고정 확률을 재귀성 절의 도달 확률 공식으로 계산한다.

[^1]: Samuel Karlin, Howard M. Taylor, *A First Course in Stochastic Processes*, 2nd ed., Academic Press, 1975, Ch. 4 (birth and death processes).
[^2]: J. R. Norris, *Markov Chains*, Cambridge University Press, 1997, §2.5 (birth processes and explosion).

# 연관 문서

## 선수지식

- [Poisson 과정](poisson-process.md)

## 더 알아보기

- [대기행렬](queues.md)
- [Moran 모형](moran-model.md)

#probability #statistics
