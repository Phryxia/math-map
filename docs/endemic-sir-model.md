# 출생이 있는 SIR 모형

# 개요

**출생이 있는 SIR 모형(SIR model with demography)** 은 사람이 태어나고 죽는 집단에서 [SIR 모형](sir-model.md)을 푼 것이다. 홍역은 한 번 크게 유행하면 마을 사람 대부분이 면역이 되는데, 몇 해가 지나면 그 사이에 태어난 아이들 사이에서 다시 유행한다. 이런 병이 사라지는지, 일정한 수준으로 늘 남는지, 몇 해마다 되풀이되는지가 이 모형의 물음이다.

출생이 있는 SIR 모형은 감염될 수 있는 사람이 출생으로 다시 채워지는 평형점을 찾고, 그 평형점 둘레의 진동 주기를 계산한다.

# 직관

마을 사람은 평균 $50$ 년을 살고, 사망한 만큼 아기가 태어나 인구가 일정하다. 홍역 감염자는 약 $2$ 주 동안 앓고, 그 동안 모두가 감염될 수 있는 집단이라면 $15$ 명에게 옮긴다.

유행이 지나가면 감염될 수 있는 사람의 비율 $s$ 가 작아져 감염자 한 명이 옮기는 수 $15s$ 가 $1$ 보다 작고 감염자가 준다. 그 사이 아기가 태어나 $s$ 가 늘고, $15s$ 가 $1$ 을 넘으면 다시 유행한다. 그래서 $s$ 는 $1/15$ 근처를 오르내린다.

아래 성질 절의 계산으로 이 오르내림은 약 $2.3$ 년 주기의 진동이고, 진동은 조금씩 줄어 평형에 다가간다.

# 정의

## 출생이 있는 SIR 모형

$\beta,\gamma,\mu\gt 0$ 일 때 다음 방정식을 **출생이 있는 SIR 모형** 이라 한다[^1]. $\mu$ 는 출생률이자 사망률이고, 태어난 사람은 감염될 수 있는 사람이다.

$$
\dot s=\mu-\beta si-\mu s,\qquad \dot i=\beta si-(\gamma+\mu)i
$$

회복한 사람의 비율은 $r=1-s-i$ 다. 직관 절의 마을은 시간을 년으로 재어 $\mu=1/50$, $\gamma=26$ 이다.

## 기초 감염 재생산수

감염자는 회복하거나 죽을 때까지 평균 $1/(\gamma+\mu)$ 동안 앓는다. 그러므로 **기초 감염 재생산수(basic reproduction number)** 는 $R_0=\beta/(\gamma+\mu)$ 다. 직관 절에서 $R_0=15$ 다.

## 풍토병 평형

$R_0\gt 1$ 일 때 다음 평형점을 **풍토병 평형(endemic equilibrium)** 이라 한다.

$$
s^\ast=\frac1{R_0},\qquad i^\ast=\frac{\mu(R_0-1)}{\beta}
$$

$\dot i=0$ 에서 $\beta s^\ast=\gamma+\mu$ 이고, 이것을 $\dot s=0$ 에 넣으면 $i^\ast$ 가 나온다. 직관 절의 마을에서 $s^\ast=1/15$ 이고 $i^\ast\approx 0.0007$ 이다.

# 성질

## 평형의 안정성

정리. $R_0\le 1$ 이면 병이 없는 평형 $(1,0)$ 이, $R_0\gt 1$ 이면 풍토병 평형이 $s,i\gt 0$ 인 모든 출발점에 대해 점근 안정하다[^2].

증명의 요지. $R_0\gt 1$ 일 때 다음 함수를 쓴다.

$$
V(s,i)=s-s^\ast\log s+i-i^\ast\log i
$$

$\mu=\beta s^\ast i^\ast+\mu s^\ast$ 와 $\gamma+\mu=\beta s^\ast$ 를 써서 해를 따라 미분하면 $\dot V=-(\mu+\beta i^\ast)(s-s^\ast)^2/s\le 0$ 이 나온다. $\dot V=0$ 인 직선 $s=s^\ast$ 위에 머무는 해는 평형점뿐이므로 LaSalle 불변 원리(LaSalle's invariance principle)로 점근 안정하다. [Lyapunov 안정성](lyapunov-stability.md)의 방법이다.

## 진동의 주기

풍토병 평형에서 Jacobi 행렬의 고윳값 $\lambda$ 는 다음 방정식의 근이다.

$$
\lambda^2+\mu R_0\lambda+\mu(\gamma+\mu)(R_0-1)=0
$$

$\mu$ 가 $\gamma$ 보다 아주 작으면 근이 복소수이고 실수부가 음수이므로 해는 감쇠 진동을 하며 평형에 다가간다. 진동 주기는 다음에 가깝다[^1].

$$
T\approx 2\pi\sqrt{AD},\qquad A=\frac1{\mu(R_0-1)},\quad D=\frac1{\gamma+\mu}
$$

$A$ 는 감염되는 평균 나이, $D$ 는 감염 기간의 평균이다. 직관 절의 마을에서 $A\approx 3.6$ 년, $D=2$ 주이고 $T\approx 2.3$ 년이다.

# 활용

- 감염 나이와 $R_0$. 감염되는 평균 나이 $A$ 와 기대수명 $L=1/\mu$ 에서 $R_0\approx 1+L/A$ 를 얻는다. 예방접종 전 자료에서 $R_0$ 를 추정하는 데 쓴다.
- 홍역의 주기. 예방접종 전 영국과 미국 도시의 홍역은 대략 $2$ 년마다 크게 유행했고, 감쇠 진동에 학기에 따른 접촉률의 변화가 더해져 그 주기가 유지된다[^1].
- 예방접종. 신생아의 비율 $p$ 를 접종하면 출생률이 $\mu(1-p)$ 로 줄어든 것과 같고, $p\gt 1-1/R_0$ 이면 병이 사라진다.

[^1]: Roy M. Anderson, Robert M. May, *Infectious Diseases of Humans: Dynamics and Control*, Oxford University Press, 1991, Ch. 6.
[^2]: Andrei Korobeinikov, Graeme C. Wake, "Lyapunov functions and global stability for SIR, SIRS, and SIS epidemiological models", *Applied Mathematics Letters* 15 (2002), 955–960.

# 연관 문서

## 선수지식

- [SIR 모형](sir-model.md)
- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #statistics
