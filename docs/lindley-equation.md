# Lindley 방정식

# 개요

**Lindley 방정식(Lindley's equation)** 은 창구 하나에서 손님이 차례로 기다리는 시간을 바로 앞 손님의 기다린 시간으로 적는 점화식이다. 손님이 도착하는 간격과 서비스 시간이 아무 분포를 따를 때, $100$ 번째 손님이 얼마나 기다리는지는 앞 손님 $99$ 명의 사정에 달려 있어 바로 계산되지 않는다. 기다리는 시간이 오래 지나면 어떤 분포로 가는지, 그 꼬리가 얼마나 빨리 줄어드는지가 이 방정식의 물음이다.

Lindley 방정식은 기다리는 시간을 증분이 독립인 걷기의 최댓값으로 바꾸어, [대기행렬](queues.md)의 물음을 무작위 걷기의 물음으로 답한다.

# 직관

손님 $n$ 이 줄에서 기다린 시간을 $W_n$, 서비스 시간을 $S_n$, 손님 $n$ 과 $n+1$ 의 도착 간격을 $A_{n+1}$ 이라 한다. 손님 $n$ 은 도착한 뒤 $W_n+S_n$ 만큼 지나 떠나고, 손님 $n+1$ 은 $A_{n+1}$ 만큼 지나 온다. 앞 손님이 아직 있으면 그 차이만큼 기다리고, 이미 떠났으면 기다리지 않는다.

$$
W_{n+1}=\max(W_n+S_n-A_{n+1},\thinspace 0)
$$

서비스 시간이 $4, 1, 3$ 분이고 도착 간격이 $2, 5, 1$ 분이면 다음과 같다. 첫 손님은 기다리지 않는다. 둘째 손님은 $\max(0+4-2,0)=2$ 분, 셋째는 $\max(2+1-5,0)=0$ 분, 넷째는 $\max(0+3-1,0)=2$ 분 기다린다.

$U_n=S_n-A_{n+1}$ 로 놓으면 $W_n$ 은 $U_n$ 을 차례로 더하다가 $0$ 아래로 내려가면 $0$ 으로 놓는 걷기다. 위 예의 $U$ 는 $2, -4, 2$ 다.

# 정의

## Lindley 방정식

$(S_n)$ 이 독립이고 같은 분포, $(A_n)$ 이 독립이고 같은 분포이며 두 열이 서로 독립인 단일 서버 대기행렬을 G/G/1 이라 한다. $W_1=0$ 과 위의 점화식으로 정한 $W_n$ 을 손님 $n$ 의 대기시간이라 하고, 이 점화식을 **Lindley 방정식** 이라 한다[^1].

## 증분과 걷기

$U_n=S_n-A_{n+1}$ 은 독립이고 같은 분포를 따른다. 부분합 $X_0=0$, $X_k=U_1+\dots+U_k$ 를 증분 $U$ 의 [무작위 걷기](random-walks.md)라 한다. 직관 절의 예에서 $X_1=2$, $X_2=-2$, $X_3=0$ 이다.

# 성질

## 최댓값 표현

정리. 점화식을 풀면 다음이 나온다[^1].

$$
W_{n+1}=\max_{0\le k\le n}\big(U_n+U_{n-1}+\dots+U_{n-k+1}\big)
$$

$k=0$ 인 항은 빈 합 $0$ 이다. 증분을 거꾸로 세어도 분포가 같으므로 $W_{n+1}$ 은 $\max_{0\le k\le n}X_k$ 와 분포가 같다.

증명의 요지. $W_{n+1}=\max(0,\thinspace U_n+W_n)$ 에 $W_n$ 의 같은 꼴을 넣고 $\max$ 를 밖으로 꺼내는 것을 $n$ 번 되풀이한다. 직관 절의 넷째 손님에서 $\max(0,\thinspace 2,\thinspace 2-4,\thinspace 2-4+2)=2$ 다.

## 안정 조건

정리. $\mathbb E[S]\lt\mathbb E[A]$ 이면 $W_n$ 은 다음 $W$ 로 분포수렴한다. $\mathbb E[S]\ge\mathbb E[A]$ 이면 $W_n$ 이 확률 $1$ 로 발산한다($\mathbb E[S]=\mathbb E[A]$ 이면 $U$ 가 상수가 아닐 때)[^1].

$$
W=\sup_{k\ge 0}X_k
$$

$\max_{0\le k\le n}X_k$ 는 $n$ 에 대해 늘어나므로 극한 $\sup_k X_k$ 가 있다. [큰 수의 법칙](law-of-large-numbers.md)으로 $X_k/k\to\mathbb E[U]$ 이므로, $\mathbb E[U]\lt 0$ 이면 $X_k\to-\infty$ 이고 상한이 유한하다. $\mathbb E[S]\lt\mathbb E[A]$ 는 이용률 $\rho=\mathbb E[S]/\mathbb E[A]\lt 1$ 과 같다.

## 지수 꼬리

정리. $\mathbb E[e^{RU}]=1$ 을 만족하는 $R\gt 0$ 이 있으면 모든 $u\ge 0$ 에서 다음이 성립한다[^2].

$$
\Pr[W\gt u]\le e^{-Ru}
$$

증명의 요지. $e^{RX_k}$ 는 평균이 $1$ 인 [Martingale](martingales.md) 이다. 걷기가 처음 $u$ 를 넘는 시각에서 선택적 정지 정리를 쓰면, 그때까지 $e^{RX}\ge e^{Ru}$ 이므로 넘을 확률이 $e^{-Ru}$ 이하다.

M/M/1 에서 $\mathbb E[e^{RU}]=\frac{\mu}{\mu-R}\cdot\frac{\lambda}{\lambda+R}$ 이고, 이것이 $1$ 인 양의 근은 $R=\mu-\lambda$ 다. 실제 꼬리는 $\Pr[W\gt u]=\rho\thinspace e^{-(\mu-\lambda)u}$ 이므로 지수가 맞고 앞의 상수만 $\rho$ 로 작다.

## 파산 확률과의 쌍대

$\Pr[W\gt u]=\Pr[\sup_k X_k\gt u]$ 는 걷기가 언젠가 $u$ 를 넘을 확률이다. 걷기의 증분 $U$ 를 보험금에서 그 사이에 들어온 보험료를 뺀 값으로 읽으면, 이것은 초기 자본 $u$ 인 보험사가 손님 도착 시각에만 잔고를 확인할 때 파산할 확률이다. 도착이 Poisson 인 M/G/1 에서는 정상 상태 대기 작업량의 꼬리가 [Cramér–Lundberg 모형](cramer-lundberg-model.md)의 파산 확률 $\psi(u)$ 와 같다[^2].

## Kingman 부등식

도착 간격과 서비스 시간의 분산을 $\sigma_A^2$, $\sigma_S^2$, 도착률을 $\lambda=1/\mathbb E[A]$ 라 하자. $\rho\lt 1$ 이면 평균 대기시간에 다음 상한이 성립한다. 이것을 Kingman 부등식(Kingman's inequality)이라 한다[^4].

$$
\mathbb E[W]\le\frac{\lambda\thinspace(\sigma_A^2+\sigma_S^2)}{2(1-\rho)}
$$

$\rho\to 1$ 에서 상한과 실제 평균의 비가 $1$ 로 가고, $W$ 를 평균으로 나눈 값이 평균 $1$ 의 [지수분포](exponential-distribution.md)로 간다[^3]. 붐비는 창구의 평균 대기는 이용률과 두 분산만으로 정해진다.

# 활용

- 대기행렬의 모의실험. 손님마다 Lindley 방정식을 한 번 적용하면 대기시간 열이 나오므로, 일반 분포의 G/G/1 을 상태 하나로 시뮬레이션한다.
- 저장과 재고. 댐의 저수량, 버퍼의 데이터 양처럼 들어오고 나가는 양의 차이를 더하되 $0$ 아래로 내려가지 않는 양이 같은 점화식을 따른다.
- 변화점 탐지. 누적합 검정(cumulative sum test, CUSUM)의 통계량이 로그 우도비를 증분으로 한 Lindley 방정식이고, 문턱을 넘으면 변화가 일어났다고 판정한다.

[^1]: D. V. Lindley, "The theory of queues with a single server", *Mathematical Proceedings of the Cambridge Philosophical Society* 48 (1952), 277–289.
[^2]: Søren Asmussen, *Applied Probability and Queues*, 2nd ed., Springer, 2003, Ch. III.7 (Lindley 과정과 최댓값 표현), Ch. XIII (파산 확률과의 쌍대).
[^3]: J. F. C. Kingman, "The single server queue in heavy traffic", *Mathematical Proceedings of the Cambridge Philosophical Society* 57 (1961), 902–904.
[^4]: J. F. C. Kingman, "Some inequalities for the queue GI/G/1", *Biometrika* 49 (1962), 315–324.

# 연관 문서

## 선수지식

- [대기행렬](queues.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
