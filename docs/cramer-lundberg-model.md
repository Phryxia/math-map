# Cramér–Lundberg 모형

# 개요

**Cramér–Lundberg 모형(Cramér–Lundberg model)** 은 보험회사의 잔고를 처음 자본에 꾸준히 들어오는 보험료를 더하고 무작위로 일어나는 사고의 보험금을 뺀 값으로 놓은 확률 모형이다. 사고가 한 해 평균 한 번 일어나고 보험금이 평균 $1$ 이며 보험료를 한 해 $1.25$ 씩 받는 회사가 파산 확률을 1% 아래로 두려면 처음 자본이 얼마나 있어야 하는지가 이 모형의 물음이다. 이 모형은 잔고의 지수함수가 마팅게일이 되는 지수를 찾아, 파산 확률이 처음 자본에 대해 지수적으로 줄어든다는 상한을 준다.

# 직관

잔고를 다음과 같이 놓는다. $u$ 는 처음 자본, $c$ 는 시간당 보험료, $N\_t$ 는 시간당 평균 $\lambda$ 번 일어나는 사고의 횟수인 [Poisson 과정](poisson-process.md), $Y\_i$ 는 $i$ 번째 사고의 보험금이다.

$$
U\_t=u+ct-\sum\_{i=1}^{N\_t}Y\_i
$$

$U\_t$ 에서 $u$ 를 뺀 것은 [Lévy 과정](levy-processes.md)이다. 잔고가 한 번이라도 $0$ 아래로 내려가면 파산이라 하고, 그 확률을 $\psi(u)$ 로 쓴다.

$\lambda=1$, $c=1.25$ 이고 보험금이 평균 $1$ 인 지수분포이면, 성질 절의 공식에서 $\psi(u)=0.8e^{-0.2u}$ 다. 자본이 없으면 80% 의 확률로 파산하고, $u=10$ 이면 약 10.8%, $u=20$ 이면 약 1.5% 다. $0.8e^{-0.2u}\le0.01$ 을 풀면 $u\ge5\ln80\approx21.9$ 이므로 처음 자본이 $22$ 정도 있어야 파산 확률이 1% 아래로 내려간다.

# 정의

## 안전 부하

한 단위 시간에 들어오는 보험료는 $c$ 이고 나가는 보험금의 평균은 $\lambda\mu$ 다. $\mu=E\lbrack Y\_1\rbrack$ 이다. $c=(1+\theta)\lambda\mu$ 로 쓸 때 $\theta$ 를 **안전 부하(safety loading)** 라 한다. 직관 절에서는 $\lambda\mu=1$, $c=1.25$ 이므로 $\theta=0.25$ 다.

$\theta\le0$ 이면 잔고가 평균적으로 늘지 않고 $\psi(u)=1$ 이다. 이하에서는 $\theta\gt0$ 으로 둔다.

## 조정 계수

다음 방정식의 양의 해 $R$ 을 **조정 계수(adjustment coefficient)** 또는 Lundberg 지수(Lundberg exponent)라 한다. $M\_Y(r)=E\lbrack e^{rY\_1}\rbrack$ 은 보험금의 적률생성함수다.

$$
\lambda\big(M\_Y(R)-1\big)=cR
$$

보험금이 평균 $\mu$ 인 지수분포이면 $M\_Y(r)=1/(1-\mu r)$ 이므로 $R=\theta/\big((1+\theta)\mu\big)$ 다. 직관 절에서 $R=0.25/1.25=0.2$ 다.

# 성질

## Lundberg 부등식

정리. 조정 계수 $R$ 이 있으면 모든 $u\ge0$ 에서 $\psi(u)\le e^{-Ru}$ 다. 이것을 Lundberg 부등식(Lundberg inequality)이라 한다[^1].

증명의 요지. $R$ 의 방정식은 다음과 같다.

$$
E\lbrack e^{-R(U\_t-u)}\rbrack=e^{t(\lambda(M\_Y(R)-1)-cR)}=1
$$

그래서 $e^{-RU\_t}$ 는 [마팅게일](martingales.md)이다. 파산 시각 $\tau$ 에서 멈춘 마팅게일의 기댓값은 $e^{-Ru}$ 이고, 파산 시각에는 $U\_\tau\le0$ 이라 $e^{-RU\_\tau}\ge1$ 이다. 그래서 $e^{-Ru}\ge P(\tau\le t)$ 이고 $t\to\infty$ 로 보내면 결론이 나온다.

## 지수분포 보험금의 정확한 공식

정리. 보험금이 평균 $\mu$ 인 지수분포이면 다음이 성립한다[^1].

$$
\psi(u)=\frac1{1+\theta}\exp\Big(-\frac{\theta u}{(1+\theta)\mu}\Big)
$$

지수가 $-Ru$ 이므로 Lundberg 부등식의 상한과 지수가 같고 앞의 상수만 $1/(1+\theta)$ 로 다르다. 직관 절의 $0.8e^{-0.2u}$ 가 이 공식이다.

## Cramér–Lundberg 근사

정리. 보험금 분포가 격자 위에 있지 않고 조정 계수가 있으면, 상수 $C\in(0,1\rbrack$ 이 있어 $u\to\infty$ 에서 $\psi(u)\sim Ce^{-Ru}$ 다[^1].

증명은 $\psi$ 가 만족하는 재생 방정식(renewal equation)을 $e^{Ru}$ 로 기울여 [재생 과정](renewal-process.md)의 핵심 재생 정리(key renewal theorem)를 적용한다.

## 두꺼운 꼬리의 보험금

보험금의 적률생성함수가 $0$ 근처 밖에서 무한이면 조정 계수가 없다. 보험금 분포가 부분지수적(subexponential)이면 다음이 성립하고, 파산 확률이 지수적이 아니라 꼬리의 적분만큼 천천히 줄어든다[^1].

$$
\psi(u)\sim\frac1{\theta\mu}\int\_u^\infty P(Y\_1\gt y)\thinspace dy
$$

Pareto 분포처럼 $P(Y\_1\gt y)=y^{-\alpha}$, $\alpha\gt1$ 이면 $\psi(u)$ 는 $u^{1-\alpha}$ 의 상수배로 줄어든다.

# 활용

- 보험료와 자본의 결정. 목표 파산 확률 $\varepsilon$ 에 대해 Lundberg 부등식에서 $u\ge\ln(1/\varepsilon)/R$ 이면 충분하다. 안전 부하 $\theta$ 를 올리면 $R$ 이 커져 필요한 자본이 준다.
- 대기행렬. 보험금을 손님의 작업량, 보험료를 처리 속도로 바꾸면 $\psi(u)$ 는 M/G/1 대기행렬(M/G/1 queue)의 정상 상태 대기 작업량이 $u$ 를 넘을 확률과 같다[^1].

[^1]: S. Asmussen, H. Albrecher, *Ruin Probabilities*, 2판, World Scientific, 2010, 1 장, 4 장, 10 장.

# 연관 문서

## 선수지식

- [Lévy 과정](levy-processes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
