# 대기행렬

# 개요

**대기행렬(queue)** 은 손님이 무작위로 도착해 서비스를 기다렸다가 받고 떠나는 체계를 확률 모형으로 적은 것이다. 바리스타 한 명이 있는 카페에 손님이 시간당 평균 $10$ 명 오고, 바리스타는 시간당 평균 $12$ 잔을 만든다. 처리 능력이 도착보다 크지만 손님은 줄을 선다. 가게 안에 평균 몇 명이 있고 한 사람이 평균 몇 분을 머무는지가 이 모형의 물음이다.

대기행렬은 가게 안의 손님 수를 [Markov 연쇄](markov-chains.md)로 놓고 정상분포를 구해 이 물음에 답한다.

# 직관

손님 수를 $X_t$ 라 한다. 도착이 [Poisson 과정](poisson-process.md)이고 한 잔을 만드는 시간이 [지수분포](exponential-distribution.md)라 하자. 그러면 짧은 시간 $h$ 동안 손님이 한 명 늘 확률은 $10h$ 이고, 손님이 있을 때 한 명 줄 확률은 $12h$ 다.

오래 지켜보면 손님 수가 $n$ 에서 $n+1$ 로 오르는 횟수와 $n+1$ 에서 $n$ 으로 내리는 횟수가 같아야 한다. 가게에 $n$ 명이 있는 시간의 비율을 $\pi_n$ 이라 하면 다음이 나온다.

$$
10\thinspace\pi_n=12\thinspace\pi_{n+1}
$$

그러므로 $\pi_{n+1}=\frac56\pi_n$ 이고, 비율의 합이 $1$ 이 되려면 $\pi_n=\frac16\left(\frac56\right)^n$ 이다. 가게가 빌 확률은 $1/6$ 이고 평균 손님 수는 $\frac{5/6}{1/6}=5$ 명이다.

손님이 시간당 $10$ 명 들어와 가게에 평균 $5$ 명이 있으므로 한 사람은 평균 $5/10=0.5$ 시간 머문다. 손님이 시간당 $11$ 명으로 한 명 늘면 같은 계산으로 평균 손님 수가 $11$ 명, 머무는 시간이 $1$ 시간이 된다. 처리 능력에 가까워질수록 대기가 빠르게 길어진다.

# 정의

## Kendall 표기

대기행렬은 Kendall 표기(Kendall's notation) $A/B/c$ 로 적는다. $A$ 는 도착 간격의 분포, $B$ 는 서비스 시간의 분포, $c$ 는 서버의 수다. 분포 자리에는 지수분포(무기억, memoryless)를 뜻하는 M, 일반 분포를 뜻하는 G, 상수를 뜻하는 D 를 쓴다. 직관 절의 카페는 M/M/1 이다. 서비스 순서는 따로 밝히지 않으면 먼저 온 손님부터다(first in first out, FIFO).

## M/M/1 대기행렬

도착률 $\lambda$, 서비스율 $\mu$ 의 **M/M/1 대기행렬** 은 상태공간 $\lbrace 0,1,2,\dots\rbrace$ 위의 연속시간 Markov 연쇄 $X_t$ 로, $n$ 에서 $n+1$ 로 세기 $\lambda$ 로 뛰고 $n\ge 1$ 에서 $n-1$ 로 세기 $\mu$ 로 뛴다. 이웃한 상태로만 뛰는 이런 연쇄를 [출생사망 과정](birth-death-process.md)이라 한다.

$\rho=\lambda/\mu$ 를 **이용률(utilization)** 이라 한다. 카페에서 $\lambda=10$, $\mu=12$ 이고 $\rho=5/6$ 이다.

## 체계의 평균량

정상 상태에서 체계 안의 평균 손님 수를 $L$, 한 손님이 체계에 머무는 평균 시간을 $W$ 라 한다. 서비스를 받기 전 줄에서만 기다리는 양은 $L_q$, $W_q$ 로 적는다. 카페에서 $L=5$, $W=0.5$ 시간이다.

# 성질

## 안정 조건과 정상분포

정리. M/M/1 대기행렬에 정상분포가 있을 필요충분조건은 $\rho\lt 1$ 이고, 그때 정상분포는 다음이다[^1].

$$
\pi_n=(1-\rho)\rho^n,\qquad n=0,1,2,\dots
$$

증명은 직관 절의 균형식 $\lambda\pi_n=\mu\pi_{n+1}$ 이다. 이 분포는 성공확률 $1-\rho$ 의 [기하분포](geometric-distribution.md)이므로 $L=\rho/(1-\rho)$ 다. $\rho\ge 1$ 이면 $\sum\rho^n$ 이 발산해 정상분포가 없다. $\rho=1$ 이면 연쇄가 영재귀적이고 $\rho\gt 1$ 이면 손님 수가 무한대로 간다.

## Little 법칙

정리. 도착률 $\lambda$ 의 체계에서 $L$ 과 $W$ 가 시간 평균과 손님 평균으로 존재하면 다음이 성립한다. 이것을 Little 법칙(Little's law)이라 한다[^2].

$$
L=\lambda W
$$

증명의 요지. 체계가 비었다가 다시 비는 시각들은 [재생 과정](renewal-process.md)이다. 한 주기 동안 $X_t$ 를 적분한 값과 그 주기에 온 손님들의 머문 시간의 합은 같다. 두 값에 재생 보상 정리를 쓰면 각각 $L$ 과 $\lambda W$ 가 나온다.

이 법칙은 도착과 서비스의 분포에 의존하지 않는다. M/M/1 에서는 $W=L/\lambda=1/(\mu-\lambda)$ 이고, 카페에서 $1/(12-10)=0.5$ 시간이다.

## 머무는 시간의 분포

Poisson 도착은 정상 상태를 시간 평균대로 본다. 도착하는 손님이 보는 손님 수의 분포가 $\pi$ 와 같다는 뜻이고, 이 성질을 PASTA(Poisson arrivals see time averages)라 한다[^1].

정리. 정상 상태의 M/M/1 에서 한 손님이 머무는 시간은 평균 $1/(\mu-\lambda)$ 의 지수분포를 따른다[^1].

증명의 요지. 도착한 손님이 $n$ 명을 보면 머무는 시간은 독립인 평균 $1/\mu$ 의 지수분포 $n+1$ 개의 합이다. 지수분포의 무기억성 때문에 서비스 중인 손님의 남은 시간도 같은 분포다. $n$ 이 기하분포 $(1-\rho)\rho^n$ 을 따르므로, [적률생성함수](moment-generating-function.md)를 계산하면 세기 $\mu(1-\rho)=\mu-\lambda$ 의 지수분포가 나온다.

## Pollaczek–Khinchine 공식

서비스 시간 $S$ 가 일반 분포인 M/G/1 에서는 손님 수가 Markov 연쇄가 아니다. 이때도 $\rho=\lambda\thinspace\mathbb E[S]\lt 1$ 이면 줄에서 기다리는 평균 시간이 다음으로 나온다. 이것을 Pollaczek–Khinchine 공식(Pollaczek–Khinchine formula)이라 한다[^1].

$$
W_q=\frac{\lambda\thinspace\mathbb E[S^2]}{2(1-\rho)}
$$

증명의 요지. 도착한 손님은 줄에 선 손님들의 서비스 시간 전부와 서비스 중인 손님의 남은 시간을 기다린다. 앞의 것은 평균 $L_q\thinspace\mathbb E[S]=\lambda W_q\thinspace\mathbb E[S]$ 다. 뒤의 것은 PASTA 와 재생 과정의 검사 역설로 $\lambda\thinspace\mathbb E[S^2]/2$ 다. 두 값의 합이 $W_q$ 라는 식을 풀면 공식이 나온다.

서비스 시간의 평균이 같아도 제곱의 평균이 크면 대기가 길다. 카페에서 지수분포 서비스는 $\mathbb E[S^2]=2/144$ 이므로 $W_q=5/12$ 시간, 곧 $25$ 분이다. 한 잔을 늘 정확히 $5$ 분에 만드는 M/D/1 이면 $\mathbb E[S^2]=1/144$ 이므로 $W_q$ 가 절반인 $12.5$ 분이다.

## Jackson 망

서버 여러 대가 이어져 손님이 한 서버에서 서비스를 받은 뒤 정해진 확률로 다른 서버로 가거나 떠나는 망을 생각한다. 바깥 도착이 Poisson 이고 서비스가 지수분포이면, 각 서버의 실제 도착률 $\lambda_j$ 를 흐름 보존 방정식으로 구한 뒤 정상분포가 서버마다의 M/M/1 분포의 곱으로 나온다. 이것을 Jackson 정리(Jackson's theorem)라 한다[^3].

$$
\pi(n_1,\dots,n_k)=\prod_{j=1}^k(1-\rho_j)\rho_j^{n_j},\qquad \rho_j=\lambda_j/\mu_j
$$

# 활용

- 콜센터와 통신망. 상담원 $c$ 명의 M/M/c 에서 손님이 기다려야 할 확률을 [Erlang C 공식](erlang-c-formula.md)으로 구해 필요한 상담원 수를 정한다.
- 컴퓨터 체계. 서버 요청의 응답 시간을 Little 법칙으로 처리량과 동시 접속 수에서 계산한다.
- [Cramér–Lundberg 모형](cramer-lundberg-model.md). M/G/1 의 정상 상태 대기 작업량이 $u$ 를 넘을 확률은 보험금을 서비스 시간으로 바꾼 모형의 파산 확률 $\psi(u)$ 와 같다.

[^1]: Leonard Kleinrock, *Queueing Systems, Volume 1: Theory*, Wiley, 1975, Ch. 3 (M/M/1, 출생사망 과정), Ch. 5 (M/G/1 과 Pollaczek–Khinchine 공식).
[^2]: John D. C. Little, "A proof for the queuing formula: L = λW", *Operations Research* 9 (1961), 383–387.
[^3]: James R. Jackson, "Jobshop-like queueing systems", *Management Science* 10 (1963), 131–142.

# 연관 문서

## 선수지식

- [출생사망 과정](birth-death-process.md)
- [재생 과정](renewal-process.md)

## 더 알아보기

- [Erlang C 공식](erlang-c-formula.md)

#probability #statistics #computation
