# 재생 과정

# 개요

**재생 과정(renewal process)** 은 같은 일이 서로 무관한 간격으로 되풀이될 때 지금까지 몇 번 일어났는지를 세는 확률 모형이다. 전구가 나가면 곧바로 새 전구로 갈아 끼우고, 전구의 수명이 반반의 확률로 $1$ 년이거나 $3$ 년이라고 하자. 10 년 동안 몇 번 갈아 끼우는지, 아무 날에 들어가 보았을 때 켜져 있는 전구의 수명이 평균 몇 년인지가 이 모형의 물음이다.

재생 과정은 교체 시각마다 과정이 처음 상태로 돌아간다는 점을 써서, 이 물음들을 수명 분포 하나의 평균과 제곱의 평균으로 답한다.

# 직관

전구 수명을 $T_1, T_2, \dots$ 로 적는다. 각 $T_k$ 는 확률 $1/2$ 로 $1$, 확률 $1/2$ 로 $3$ 이고 서로 독립이다. 평균 수명은 $2$ 년이다.

수명이 $1, 3, 3, 1, 1, 3$ 으로 나왔다면 교체 시각은 $1, 4, 7, 8, 9, 12$ 년이다. 10 년 시점까지 교체는 다섯 번이다. 교체 시각 $n$ 번째는 수명 $n$ 개의 합이고, [큰 수의 법칙](law-of-large-numbers.md)에 따라 이 합은 $2n$ 에 가깝다. 그러므로 긴 시간 $t$ 동안의 교체 횟수는 $t/2$ 에 가깝다.

켜져 있는 전구의 수명은 다르게 나온다. 위의 12 년 가운데 수명 $3$ 짜리 전구가 켜져 있던 시간은 $9$ 년이고 수명 $1$ 짜리는 $3$ 년이다. 긴 시간에서는 두 종류가 같은 수만큼 나오므로 시간의 $3/4$ 동안 수명 $3$ 짜리가 켜져 있다. 아무 날에 들어가 본 전구의 수명은 평균 $\frac14\cdot 1+\frac34\cdot 3=2.5$ 년이고, 전구 하나의 평균 수명 $2$ 년보다 길다.

긴 전구가 시간을 더 많이 차지하므로 무작위 시점에 걸리기도 쉽다. 이 차이가 재생 과정의 극한정리에 그대로 나타난다.

# 정의

## 재생 과정

$T_1, T_2, \dots$ 가 독립이고 같은 분포 $F$ 를 따르는 양의 [확률변수](random-variables.md)이고 $\Pr[T_1=0]\lt 1$ 이라 하자. $T_k$ 를 **도착 간격(interarrival time)** 이라 한다. 교체 시각과 계수과정을 다음으로 정의한다.

$$
S_0=0,\qquad S_n=T_1+\dots+T_n,\qquad N_t=\max\lbrace n\ge 0: S_n\le t\rbrace
$$

$(N_t)\_{t\ge 0}$ 를 **재생 과정** 이라 하고 $S_n$ 을 재생 시각이라 한다. 직관 절의 수명열 $1, 3, 3, 1, 1, 3$ 에서 $S_3=7$ 이고 $N_{10}=5$ 다.

도착 간격이 세기 $\lambda$ 의 [지수분포](exponential-distribution.md)이면 $(N_t)$ 는 [Poisson 과정](poisson-process.md)이다. Poisson 과정은 재생 과정 가운데 간격 분포가 무기억성을 갖는 경우다.

## 재생 함수

**재생 함수(renewal function)** 는 $m(t)=\mathbb E[N_t]$ 다. 첫 간격 $T_1=s\le t$ 에서 조건을 걸면 과정이 시각 $s$ 에서 새로 시작하므로 다음 **재생 방정식(renewal equation)** 이 나온다.

$$
m(t)=F(t)+\int_0^t m(t-s)\thinspace dF(s)
$$

Poisson 과정에서는 $F(t)=1-e^{-\lambda t}$ 이고 $m(t)=\lambda t$ 다. 우변의 적분이 $\lambda t-(1-e^{-\lambda t})$ 이므로 $F(t)$ 를 더하면 $\lambda t$ 가 되어 방정식이 성립한다.

## 나이와 잔여 수명

시각 $t$ 에 켜져 있는 전구에 대해 세 양을 정의한다.

$$
A_t=t-S_{N_t},\qquad R_t=S_{N_t+1}-t,\qquad L_t=A_t+R_t=T_{N_t+1}
$$

$A_t$ 를 **나이(age)**, $R_t$ 를 **잔여 수명(residual life)**, $L_t$ 를 시각 $t$ 를 포함하는 간격의 길이라 한다. 수명열 $1, 3, 3, 1, 1, 3$ 에서 $t=5$ 이면 켜진 전구는 시각 $4$ 에 끼운 수명 $3$ 짜리이므로 $A_5=1$, $R_5=2$, $L_5=3$ 이다.

# 성질

아래에서 $\mu=\mathbb E[T_1]$ 이고 $0\lt\mu\le\infty$ 이다. $\mu=\infty$ 이면 $1/\mu=0$ 으로 읽는다.

## 재생 과정의 강한 법칙

정리. 확률 $1$ 로 $N_t/t\to 1/\mu$ 다[^1].

증명의 요지. $S_{N_t}\le t\lt S_{N_t+1}$ 을 $N_t$ 로 나눈다. $t\to\infty$ 에서 $N_t\to\infty$ 이고 큰 수의 강한 법칙으로 $S_n/n\to\mu$ 이므로 양 끝이 모두 $\mu$ 로 간다. 직관 절의 전구에서 극한은 $1/2$ 이다.

## 기본 재생 정리

정리. $m(t)/t\to 1/\mu$ 다. 이것을 기본 재생 정리(elementary renewal theorem)라 한다[^1].

거의 확실한 수렴에서 기댓값의 수렴이 바로 나오지 않으므로 증명에 Wald 항등식(Wald's identity)을 쓴다. $N_t+1$ 은 [Martingale](martingales.md) 이론의 정지시간(stopping time)이므로 다음이 성립한다.

$$
\mathbb E[S_{N_t+1}]=\mu\thinspace(m(t)+1)
$$

$S_{N_t+1}\gt t$ 에서 $\liminf m(t)/t\ge 1/\mu$ 가 나온다. 반대쪽은 간격을 상수 $c$ 에서 잘라 $S_{N_t+1}\le t+c$ 로 누른 뒤 $c\to\infty$ 로 보낸다.

## 재생 보상 정리

재생 구간마다 보상 $W_k$ 를 받고 $(T_k, W_k)$ 가 독립이고 같은 분포라 하자. $\mathbb E\vert W_1\vert\lt\infty$ 이고 $\mu\lt\infty$ 이면 시각 $t$ 까지 받은 보상의 합 $W(t)$ 에 대해 확률 $1$ 로 다음이 성립한다. 이것을 재생 보상 정리(renewal reward theorem)라 한다[^1].

$$
\frac{W(t)}{t}\to\frac{\mathbb E[W_1]}{\mathbb E[T_1]}
$$

증명은 강한 법칙과 같다. 분자와 분모에 각각 큰 수의 법칙을 쓴다.

## 검사 역설

정리. $\mathbb E[T_1^2]\lt\infty$ 이면 확률 $1$ 로 다음이 성립한다.

$$
\frac1t\int_0^t L_s\thinspace ds\to\frac{\mathbb E[T_1^2]}{\mu},\qquad \frac1t\int_0^t R_s\thinspace ds\to\frac{\mathbb E[T_1^2]}{2\mu}
$$

증명의 요지. 재생 보상 정리에서 $k$ 번째 구간의 보상을 그 구간 동안 $L_s$ 를 적분한 값 $T_k^2$ 으로 놓는다. $R_s$ 는 구간 안에서 $T_k$ 에서 $0$ 까지 줄어들므로 적분값이 $T_k^2/2$ 다.

[Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $\mathbb E[T_1^2]\ge\mu^2$ 이므로 시간 평균으로 본 간격 길이는 $\mu$ 이상이다. 이 차이를 **검사 역설(inspection paradox)** 이라 한다. 직관 절의 전구에서 $\mathbb E[T_1^2]=5$ 이므로 극한은 $5/2=2.5$ 이고 직관 절의 계산과 같다. Poisson 과정에서는 $\mathbb E[T_1^2]=2/\lambda^2$ 이므로 평균 잔여 대기시간이 $1/\lambda$ 이고, 무기억성과 맞는다.

## 이산 재생 정리

도착 간격이 정수값이고 값들의 최대공약수가 $1$ 이라 하자. $u_n$ 을 시각 $n$ 이 재생 시각일 확률이라 하면 $n\to\infty$ 에서 $u_n\to 1/\mu$ 다. 이것을 Erdős–Feller–Pollard 정리(Erdős–Feller–Pollard theorem)라 한다[^2].

직관 절의 전구에서 $u_0=1$ 이고, 마지막 간격이 $1$ 인지 $3$ 인지로 나누면 다음 점화식이 나온다.

$$
u_n=\tfrac12 u_{n-1}+\tfrac12 u_{n-3}\qquad(n\ge 1,\thinspace u_{-1}=u_{-2}=0)
$$

$u_1, \dots, u_6$ 은 $1/2, 1/4, 5/8, 9/16, 13/32, 33/64$ 이고 $1/\mu=1/2$ 로 다가간다. 수명이 $2$ 와 $4$ 처럼 최대공약수가 $2$ 이면 홀수 시각의 $u_n$ 이 늘 $0$ 이라 수렴하지 않는다. 이런 분포를 **격자형(lattice)** 이라 한다.

## Blackwell 정리와 핵심 재생 정리

$F$ 가 격자형이 아니면 모든 $h\gt 0$ 에 대해 $m(t+h)-m(t)\to h/\mu$ 다. 이것을 Blackwell 재생 정리(Blackwell's renewal theorem)라 한다[^1].

동치인 꼴이 핵심 재생 정리(key renewal theorem)다. $g$ 가 직접 [Riemann 적분](riemann-integral.md) 가능(directly Riemann integrable)하고 $Z=g+Z\ast F$ 를 만족하는 $Z$ 가 유계 구간에서 유계이면 다음이 성립한다[^1].

$$
Z(t)\to\frac1\mu\int_0^\infty g(s)\thinspace ds
$$

재생 방정식 꼴로 적히는 양은 이 정리로 극한을 얻는다. $\Pr[R_t\gt x]$ 에 적용하면 잔여 수명의 극한분포가 밀도 $\Pr[T_1\gt x]/\mu$ 를 갖는다.

# 활용

- [Markov 연쇄](markov-chains.md). 상태 $i$ 에서 출발한 연쇄가 $i$ 로 돌아오는 시각들은 재생 과정이다. 재생 과정의 강한 법칙을 쓰면 $i$ 에 머무는 시간의 비율이 평균 복귀시간의 역수이고, 이것이 정상분포의 값이다.
- [Cramér–Lundberg 모형](cramer-lundberg-model.md). 파산 확률은 결함 있는 재생 방정식을 만족한다. 지수로 기울여 핵심 재생 정리를 쓰면 Cramér–Lundberg 근사 $\psi(u)\sim Ce^{-Ru}$ 가 나온다.
- 대기행렬. 서버가 비는 시각들이 재생 시각이 되므로, 대기열 길이의 시간 평균을 재생 보상 정리로 한 구간의 기댓값 둘의 비로 계산한다.
- 교체 정책. 부품을 나이 $a$ 에서 미리 교체하는 정책의 장기 단위 시간 비용은 재생 보상 정리로 한 주기의 기대 비용을 기대 길이로 나눈 값이다.

[^1]: Sheldon M. Ross, *Stochastic Processes*, 2nd ed., Wiley, 1996, Ch. 3 (Renewal Theory). 강한 법칙, 기본 재생 정리, Wald 항등식, 재생 보상 정리, Blackwell 정리와 핵심 재생 정리.
[^2]: P. Erdős, W. Feller, H. Pollard, "A property of power series with positive coefficients", *Bulletin of the AMS* 55 (1949), 201–204.

# 연관 문서

## 선수지식

- [큰 수의 법칙](law-of-large-numbers.md)
- [Poisson 과정](poisson-process.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
