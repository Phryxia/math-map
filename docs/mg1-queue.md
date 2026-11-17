# M/G/1 대기행렬

# 개요

**M/G/1 대기행렬(M/G/1 queue)** 은 손님이 [Poisson 과정](poisson-process.md)으로 도착하고 서버 한 대가 일반 분포의 시간으로 서비스하는 [대기행렬](queues.md)이다. 시간당 평균 $10$ 명이 오는 카페에서 기계가 음료 한 잔을 늘 정확히 $5$ 분에 만든다. 서비스 시간이 지수분포가 아니므로 M/M/1 의 계산은 쓸 수 없다. M/G/1 은 손님이 떠나는 순간마다 남은 손님 수를 보아 Markov 연쇄를 얻고, 그 [Markov 연쇄](markov-chains.md)에서 평균 손님 수 $35/12$ 를 계산한다.

# 직관

M/M/1 에서는 손님 수만 알면 다음 일의 확률이 정해졌다. 서비스 시간이 지수분포여서 서비스 중인 음료가 언제 끝날지가 이미 흐른 시간과 무관했다.

음료가 정확히 $5$ 분에 나오면 사정이 다르다. 손님이 세 명일 때 서비스가 $4$ 분 지났으면 $1$ 분 안에 한 명이 반드시 떠나고, 막 시작했으면 $5$ 분 동안 아무도 떠나지 않는다. 손님 수만으로는 앞일이 정해지지 않으므로 손님 수의 과정은 Markov 연쇄가 아니다.

막힌 이유는 서비스가 진행 중인 시각을 보았다는 것이다. 그래서 손님이 떠나는 순간만 본다. $n$ 번째 손님이 떠날 때 남은 손님 수를 $X_n$ 이라 하자. $X_n\ge 1$ 이면 다음 서비스가 바로 시작되고, 그 $5$ 분 동안 온 손님 수를 $A$ 라 하면 $X_{n+1}=X_n-1+A$ 다. $X_n=0$ 이면 다음 손님이 와서 서비스를 받는 동안 온 손님 수가 $X_{n+1}=A$ 다.

$5$ 분 동안 도착하는 손님 수 $A$ 는 평균 $10\cdot\frac1{12}=\frac56$ 의 [Poisson 분포](poisson-distribution.md)이고, 앞의 $X_n$ 과 독립이다. 그러므로 $X_n$ 은 Markov 연쇄다. 이 연쇄의 정상분포에서 평균을 계산하면 $35/12\approx 2.92$ 명이 나온다. 같은 카페의 M/M/1 에서는 $5$ 명이었다.

# 정의

## M/G/1 대기행렬

도착률 $\lambda$ 의 Poisson 과정으로 손님이 오고, 서버 한 대가 먼저 온 손님부터 서비스하며, 서비스 시간 $S_1,S_2,\dots$ 가 도착과 독립이고 분포가 같은 양의 확률변수인 체계를 **M/G/1 대기행렬** 이라 한다. 이용률은 $\rho=\lambda\thinspace\mathbb E[S]$ 다.

직관 절의 카페는 $\lambda=10$, $S=1/12$ 시간인 M/D/1 이고 $\rho=5/6$ 이다.

## 이탈 시점 연쇄

$X_n$ 을 $n$ 번째 손님이 떠난 직후 체계에 남은 손님 수, $A_{n+1}$ 을 $n+1$ 번째 손님의 서비스 동안 도착한 손님 수라 하자. 다음 점화식이 성립하고 $X_n$ 을 **이탈 시점 연쇄(embedded Markov chain at departures)** 라 한다.

$$
X_{n+1}=X_n-\mathbf 1\lbrace X_n\ge 1\rbrace+A_{n+1}
$$

$A_{n+1}$ 은 $S_{n+1}$ 이 주어지면 평균 $\lambda S_{n+1}$ 의 Poisson 분포를 따른다. 카페에서 $\mathbb P(A=0)=e^{-5/6}\approx 0.43$ 이므로, 손님이 셋 남은 상태에서 다음 이탈 때 둘이 남을 확률이 $0.43$ 이다.

# 성질

## Pollaczek–Khinchine 평균값 공식

정리. $\rho\lt 1$ 이면 이탈 시점 연쇄에 정상분포가 있고, 정상 상태의 평균 손님 수는 다음이다[^1].

$$
L=\rho+\frac{\lambda^2\thinspace\mathbb E[S^2]}{2(1-\rho)}
$$

증명의 요지. $U=\mathbf 1\lbrace X\ge 1\rbrace$ 로 두면 정상 상태에서 $\mathbb E[X']=\mathbb E[X]$ 이므로 $\mathbb E[U]=\mathbb E[A]=\rho$ 다. 점화식 $X'=X-U+A$ 를 제곱하고 $U^2=U$, $XU=X$, $A$ 와 $X$ 의 독립성을 쓰면 다음이 나온다.

$$
0=\rho+\mathbb E[A^2]-2\thinspace\mathbb E[X]+2\rho\thinspace\mathbb E[X]-2\rho^2
$$

$\mathbb E[A^2]=\rho+\lambda^2\thinspace\mathbb E[S^2]$ 를 넣고 $\mathbb E[X]$ 에 대해 풀면 위의 식이다. 손님 수는 하나씩 오르내리므로 떠나는 손님이 보는 분포와 도착하는 손님이 보는 분포가 같고, Poisson 도착은 시간 평균을 보므로 이 평균이 시간 평균 $L$ 과 같다.

카페에서 $\mathbb E[S^2]=1/144$ 이므로 $L=5/6+25/12=35/12$ 다. Little 법칙(Little's law)으로 $W=L/\lambda=7/24$ 시간, 곧 $17.5$ 분이고, 이 가운데 서비스 $5$ 분을 뺀 $12.5$ 분이 대기열 문서의 $W_q$ 다.

## Pollaczek–Khinchine 변환 공식

$\tilde S(s)=\mathbb E[e^{-sS}]$ 를 서비스 시간의 [Laplace 변환](laplace-transform.md)이라 하자. 정리. $\rho\lt 1$ 이면 정상분포 $\pi_n$ 의 [생성함수](generating-functions.md)는 다음이다[^1].

$$
\sum_{n\ge 0}\pi_nz^n=\frac{(1-\rho)(1-z)\thinspace\tilde S(\lambda(1-z))}{\tilde S(\lambda(1-z))-z}
$$

증명의 요지. $\mathbb E[z^A]=\tilde S(\lambda(1-z))$ 이고 $\mathbb E[z^{X-U}]=\pi_0+(G(z)-\pi_0)/z$ 다. 점화식에서 $G(z)=\mathbb E[z^{X-U}]\thinspace\mathbb E[z^A]$ 이므로 $G$ 에 대해 풀고 $\pi_0=1-\rho$ 를 넣는다.

서비스가 세기 $\mu$ 의 지수분포이면 $\tilde S(s)=\mu/(\mu+s)$ 이고 공식은 $(1-\rho)/(1-\rho z)$ 가 된다. M/M/1 의 기하분포 $\pi_n=(1-\rho)\rho^n$ 이다.

## 바쁜 기간

서버가 쉬다가 손님이 와서 다시 쉴 때까지의 시간을 **바쁜 기간(busy period)** $T$ 라 한다. 정리. $\rho\lt 1$ 이면 다음이 성립한다.

$$
\mathbb E[T]=\frac{\mathbb E[S]}{1-\rho}
$$

증명의 요지. 첫 손님의 서비스 동안 $A$ 명이 오고, 각자가 자기 뒤로 온 손님을 다 처리할 때까지 $T$ 와 같은 분포의 바쁜 기간을 하나씩 만든다. 그러므로 $\mathbb E[T]=\mathbb E[S]+\mathbb E[A]\thinspace\mathbb E[T]=\mathbb E[S]+\rho\thinspace\mathbb E[T]$ 다. 카페에서 $\mathbb E[T]=5/(1/6)=30$ 분이다.

# 활용

- 서비스 시간의 분산이 대기에 주는 영향을 평균값 공식으로 계산한다. 평균이 같으면 $\mathbb E[S^2]$ 가 작은 쪽, 곧 서비스 시간이 일정한 쪽의 대기가 짧다. 카페에서 지수분포 서비스의 $L=5$ 와 일정한 서비스의 $L=35/12$ 가 그 예다.
- 디스크 요청, 패킷 전송처럼 처리 시간이 지수분포가 아닌 컴퓨터 체계의 응답 시간을 이 공식으로 근사한다.
- [Cramér–Lundberg 모형](cramer-lundberg-model.md)의 파산 확률에 대한 Pollaczek–Khinchine 공식은 M/G/1 의 정상 작업량 분포와 같은 식이다.

[^1]: Leonard Kleinrock, *Queueing Systems, Volume 1: Theory*, Wiley, 1975, Ch. 5.

# 연관 문서

## 선수지식

- [대기행렬](queues.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #computation
