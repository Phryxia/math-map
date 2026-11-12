# Erlang C 공식

# 개요

**Erlang C 공식(Erlang C formula)** 은 서버가 여러 대인 대기행렬에서 도착한 손님이 기다려야 할 확률을 주는 식이다. 상담원 두 명이 있는 창구에 손님이 시간당 평균 $3$ 명 오고, 상담원 한 명은 시간당 평균 $2$ 명을 처리한다. 두 상담원이 모두 바쁠 때 온 손님은 줄을 선다. 손님 가운데 몇 퍼센트가 기다리는지, 상담원을 몇 명 두어야 기다리는 손님이 일정 비율 아래로 떨어지는지가 이 공식의 물음이다.

이 공식은 손님 수를 [대기행렬](queues.md)의 출생사망 과정으로 놓고 정상분포에서 바쁜 상태의 확률을 더해 이 물음에 답한다.

# 직관

창구 안의 손님 수를 $X_t$ 라 한다. 손님이 오면 $X_t$ 가 하나 늘고, 그 빈도는 시간당 $3$ 이다. 손님이 $1$ 명이면 상담원 한 명이 일하므로 하나 주는 빈도가 $2$ 이고, $2$ 명 이상이면 두 명이 다 일하므로 $4$ 다.

이웃한 두 상태 사이의 흐름이 같다는 식을 차례로 쓴다.

$$
3\pi_0=2\pi_1,\qquad 3\pi_1=4\pi_2,\qquad 3\pi_n=4\pi_{n+1}\quad(n\ge 2)
$$

$\pi_0=1$ 로 놓으면 $\pi_1=1.5$, $\pi_2=1.125$ 이고, 그 뒤로는 $3/4$ 씩 곱해진다. $2$ 명 이상인 상태의 합은 $1.125/(1-3/4)=4.5$ 이고 전체 합은 $1+1.5+4.5=7$ 이다.

Poisson 도착은 정상분포대로 상태를 보므로 기다리는 손님의 비율은 $4.5/7=9/14$, 약 64% 다.

# 정의

## M/M/c 대기행렬

도착률 $\lambda$ 의 Poisson 도착, 서버 $c$ 대, 서버마다 서비스율 $\mu$ 의 [지수분포](exponential-distribution.md) 서비스로 된 대기행렬을 **M/M/c 대기행렬** 이라 한다. 손님 수 $X_t$ 는 [출생사망 과정](birth-death-process.md)이고 출생률은 $\lambda$, 사망률은 $\min(n,c)\thinspace\mu$ 다.

$a=\lambda/\mu$ 를 **제공 부하(offered load)** 라 하고, 단위는 얼랑(erlang)이다. $\rho=a/c$ 는 서버 한 대의 이용률이다. 직관 절의 창구는 $c=2$, $a=1.5$, $\rho=3/4$ 이다.

## Erlang C 공식

$\rho\lt 1$ 일 때 도착한 손님이 기다릴 확률은 다음이다.

$$
C(c,a)=\frac{\dfrac{a^c}{c!}\dfrac{1}{1-\rho}}{\displaystyle\sum_{k=0}^{c-1}\frac{a^k}{k!}+\frac{a^c}{c!}\frac{1}{1-\rho}}
$$

분자는 직관 절의 $4.5$, 분모의 합은 $1+1.5$ 에 해당한다. 그러므로 $C(2,1.5)=9/14$ 다.

## Erlang B 공식

줄을 설 자리가 없어 서버가 다 찬 때 온 손님이 그냥 떠나는 체계를 M/M/c/c 라 한다. 이때 손님을 잃을 확률을 **Erlang B 공식(Erlang B formula)** 이라 한다.

$$
B(c,a)=\frac{a^c/c!}{\displaystyle\sum_{k=0}^{c}a^k/k!}
$$

직관 절의 창구에서 줄을 없애면 $B(2,1.5)=1.125/3.625\approx 0.31$ 이다.

# 성질

## 정상분포

정리. $\rho\lt 1$ 이면 M/M/c 의 정상분포는 다음이다[^1].

$$
\pi_n=\begin{cases}\pi_0\thinspace\dfrac{a^n}{n!} & n\le c\cr \pi_0\thinspace\dfrac{a^c}{c!}\rho^{n-c} & n\ge c\end{cases}
$$

출생사망 과정의 곱꼴 정상분포에 위의 출생률과 사망률을 넣으면 나온다. $C(c,a)=\sum_{n\ge c}\pi_n$ 이고, Poisson 도착은 이 확률로 모든 서버가 바쁜 상태를 본다.

## 평균 대기시간

줄에서 기다리는 평균 시간은 다음이다[^1].

$$
W_q=\frac{C(c,a)}{c\mu-\lambda}
$$

모든 서버가 바쁘면 줄은 서비스율 $c\mu$ 의 M/M/1 처럼 줄어든다. 그러므로 기다리는 손님의 평균 대기는 $1/(c\mu-\lambda)$ 이고, 여기에 기다릴 확률 $C$ 를 곱한다. 직관 절의 창구에서 $W_q=9/14$ 시간, 약 $39$ 분이다.

## 두 공식의 관계

$B$ 와 $C$ 는 다음 식으로 이어진다[^2].

$$
C(c,a)=\frac{B(c,a)}{1-\rho\thinspace(1-B(c,a))}
$$

$B$ 는 다음 점화식으로 계산하고, 그 값을 위 식에 넣어 $C$ 를 얻는다. 계승과 거듭제곱을 직접 계산하지 않아 $c$ 가 커도 수치가 넘치지 않는다.

$$
B(0,a)=1,\qquad B(c,a)=\frac{a\thinspace B(c-1,a)}{c+a\thinspace B(c-1,a)}
$$

## 합치는 이득

서버를 합쳐 줄 하나로 두면 줄을 나눠 서는 것보다 대기가 짧다. 직관 절의 창구를 상담원마다 줄을 따로 세운 두 창구로 나누면, 각 창구는 $\lambda=1.5$, $\mu=2$ 의 M/M/1 이고 평균 대기가 다음이다.

$$
W_q=\frac{\rho}{\mu-\lambda}=\frac{0.75}{0.5}=1.5
$$

단위는 시간이다. 줄 하나의 $9/14$ 시간보다 두 배 넘게 길다. 줄이 나뉘면 한 상담원이 놀 때 다른 줄의 손님이 기다리는 일이 생긴다.

## 제곱근 인원 규칙

$c=a+\beta\sqrt a$ 로 두고 $a\to\infty$ 로 보내면 기다릴 확률이 $0$ 과 $1$ 사이의 극한으로 간다. 이것을 Halfin–Whitt 극한(Halfin–Whitt regime)이라 한다[^3].

$$
C(c,a)\to\left(1+\frac{\beta\thinspace\Phi(\beta)}{\varphi(\beta)}\right)^{-1}
$$

$\Phi$ 와 $\varphi$ 는 표준 [정규분포](normal-distribution.md)의 분포함수와 밀도다. 부하가 $a$ 일 때 필요한 여유 인원이 $a$ 가 아니라 $\sqrt a$ 에 비례하므로, 큰 창구일수록 서버 한 대의 이용률이 $1$ 에 가까워진다.

# 활용

- 콜센터 인원 산정. 시간대별 통화량으로 $a$ 를 정하고, 기다릴 확률이나 평균 대기가 목표 아래가 되는 가장 작은 $c$ 를 Erlang C 공식으로 찾는다. 큰 콜센터에서는 제곱근 인원 규칙이 근삿값을 준다.
- 전화 교환망. 회선 $c$ 개의 통화 손실 확률을 Erlang B 공식으로 계산한다. 손실 확률은 통화 시간의 분포가 지수분포가 아니어도 평균에만 의존한다[^2].
- 컴퓨터 체계. 작업 처리기 $c$ 개를 둔 서버의 대기시간과 처리기 수의 관계를 M/M/c 로 근사한다.

[^1]: Leonard Kleinrock, *Queueing Systems, Volume 1: Theory*, Wiley, 1975, §3.5 (the M/M/m queue).
[^2]: Ward Whitt, "The Erlang B and C formulas: problems and solutions", lecture notes, Columbia University, 2002. 두 공식의 관계, 점화식, Erlang B 의 무감각성.
[^3]: Shlomo Halfin, Ward Whitt, "Heavy-traffic limits for queues with many exponential servers", *Operations Research* 29 (1981), 567–588.

# 연관 문서

## 선수지식

- [대기행렬](queues.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #optimization
