# Youla 매개화

# 개요

**Youla 매개화(Youla parametrization)** 는 한 장치를 안정화하는 되먹임 제어기 전체를 안정한 전달 함수 $Q$ 하나로 늘어놓는 방법이다. 장치 $1/(s+1)$ 에 제어기 $C$ 를 붙이면 외란이 출력에 남는 비율 $1/(1+GC)$ 는 $C$ 에 대해 분수 꼴이라, 이 비율을 원하는 모양으로 만드는 $C$ 를 바로 풀기 어렵다. $C$ 대신 $Q$ 를 고르면 그 비율이 $1-GQ$ 로 $Q$ 에 대해 일차식이 되어, 조건을 맞추는 $Q$ 를 계산으로 찾고 $C$ 로 되돌린다.

# 직관

장치 $G(s)=1/(s+1)$ 에 제어기 $C$ 를 붙인 고리에서 [Nyquist 판정법](nyquist-criterion.md)의 감도 함수 $S=1/(1+GC)$ 가 $S(0)=0$ 이기를 바란다. 그러면 계단 외란이 출력에서 사라진다. $C=k$ 로 두면 $S(0)=1/(1+k)$ 라 어떤 상수 $k$ 로도 $0$ 이 되지 않고, $C$ 의 꼴을 바꿀 때마다 $S$ 를 분수로 다시 계산해야 한다.

목표값에서 입력까지의 전달 함수 $Q=C/(1+GC)$ 를 새 변수로 둔다. 그러면 $GQ=GC/(1+GC)=1-S$ 이므로 $S=1-GQ$ 다. $Q$ 를 상수 $q$ 로 두면 $S=1-q/(s+1)$ 이고, $S(0)=1-q=0$ 에서 $q=1$ 이다. $C$ 로 되돌리면 다음이 나온다.

$$
C=\frac{Q}{1-GQ}=\frac{1}{1-1/(s+1)}=\frac{s+1}{s}=1+\frac1s
$$

비례 이득 $1$, 적분 이득 $1$ 인 [PID 제어](pid-control.md)(proportional–integral–derivative)의 PI 제어기(proportional–integral controller)다. 닫힌 고리의 특성다항식은 $(s+1)^2$ 이라 안정하고, $S=s/(s+1)$ 이다. $Q$ 가 안정한 한 $C$ 가 무엇이 되든 고리는 안정하다.

# 정의

## 내부 안정성

장치 $G$ 와 제어기 $C$ 가 실계수 유리 전달 함수이고 고리의 두 곳에 외란을 넣는다고 하자. 다음 네 전달 함수가 모두 오른쪽 닫힌 반평면에 극이 없고 $\vert s\vert\to\infty$ 에서 유계이면 고리를 **내부 안정(internally stable)** 이라 한다.

$$
\frac{1}{1+GC},\qquad\frac{G}{1+GC},\qquad\frac{C}{1+GC},\qquad\frac{GC}{1+GC}
$$

$C$ 가 장치의 불안정한 극을 영점으로 지우면 $S$ 는 안정해도 $G/(1+GC)$ 가 불안정하므로, 넷을 모두 본다. 직관 절의 고리는 넷이 $s/(s+1)$, $s/(s+1)^2$, $1$, $1/(s+1)$ 이라 내부 안정이다.

## 안정한 진유리함수와 서로소 분해

오른쪽 닫힌 반평면에 극이 없고 분자 차수가 분모 차수 이하인 실계수 유리함수의 환을 $\mathcal{RH}\_\infty$ 로 쓴다. 이것은 [Hardy 공간](hardy-spaces.md) $H^\infty$ 를 오른쪽 반평면으로 옮긴 것의 유리함수 부분이다.

$G=N/M$ 이고 $N,M\in\mathcal{RH}\_\infty$ 이며 어떤 $X,Y\in\mathcal{RH}\_\infty$ 에 대해 $XN+YM=1$ 이면 $(N,M)$ 을 $G$ 의 **서로소 분해(coprime factorization)** 라 하고, 마지막 식을 Bézout 항등식(Bézout identity)이라 한다. $G=1/(s-1)$ 이면 $N=1/(s+1)$, $M=(s-1)/(s+1)$ 이고 $X=2$, $Y=1$ 에서 다음이 성립한다.

$$
\frac{2}{s+1}+\frac{s-1}{s+1}=1
$$

안정한 $G$ 는 $N=G$, $M=1$, $X=0$, $Y=1$ 이다.

# 성질

## 안정한 장치의 매개화

$G\in\mathcal{RH}\_\infty$ 이면 $C$ 가 고리를 내부 안정하게 하는 것과 $Q=C/(1+GC)$ 가 $\mathcal{RH}\_\infty$ 에 속하는 것이 동치다. 그런 $C$ 는 모두 $C=Q/(1-GQ)$ 꼴이다.

증명의 요지. $Q$ 로 쓰면 네 전달 함수는 $1-GQ$, $G(1-GQ)$, $Q$, $GQ$ 다. $G$ 가 안정하므로 $Q$ 가 안정하면 넷이 안정하고, 거꾸로 셋째가 $Q$ 이므로 내부 안정이면 $Q$ 가 안정하다.

## Youla–Kučera 정리

$(N,M)$ 이 $G$ 의 서로소 분해이고 $XN+YM=1$ 이면, $G$ 를 내부 안정하게 하는 제어기 전체는 다음과 같다[^1][^2].

$$
C=\frac{X+MQ}{Y-NQ},\qquad Q\in\mathcal{RH}\_\infty,\quad Y-NQ\ne 0
$$

증명의 요지. 이 $C$ 에 대해 $1+GC$ 의 분자를 $\mathcal{RH}\_\infty$ 안에서 정리하면 다음이 나온다.

$$
M(Y-NQ)+N(X+MQ)=YM+XN=1
$$

그래서 네 전달 함수가 $M(Y-NQ)$, $N(Y-NQ)$, $M(X+MQ)$, $N(X+MQ)$ 로 모두 $\mathcal{RH}\_\infty$ 의 원소의 곱이다. 거꾸로 안정화하는 $C$ 가 주어지면 $C$ 의 서로소 분해에서 $Q$ 를 풀어 낼 수 있다.

## 닫힌 고리 함수의 일차성

감도 함수와 그 보함수 $T=1-S$ 는 $Q$ 에 대해 일차식이다.

$$
S=M(Y-NQ),\qquad T=N(X+MQ)
$$

$G=1/(s-1)$ 에서는 $S=\frac{s-1}{s+1}\bigl(1-\frac{Q}{s+1}\bigr)$ 이고, $Q=0$ 이 제어기 $C=2$ 다. 닫힌 고리의 특성다항식은 $s-1+2=s+1$ 이다.

## 보간 제약

$p$ 가 $G$ 의 오른쪽 반평면 극이면 $M(p)=0$ 이라 모든 안정화 제어기에서 $S(p)=0$ 이다. $z$ 가 오른쪽 반평면 영점이면 $N(z)=0$ 이라 $T(z)=0$, 곧 $S(z)=1$ 이다. 위 예에서 $Q$ 가 무엇이든 $S(1)=0$ 이다. [Bode 감도 적분](bode-sensitivity-integral.md)의 불안정한 극의 항이 이 제약에서 나온다.

# 활용

- 볼록 설계. 가중치 $W$ 를 둔 조건 $\Vert WS\Vert\_\infty\le 1$, 계단 응답의 상한, 정상 상태 오차 $0$ 은 모두 $Q$ 에 대해 볼록하므로, $Q$ 를 유한 개의 안정한 기저함수의 일차결합으로 두고 볼록 최적화로 푼다.
- 모형 맞춤 문제. [H∞ 제어](h-infinity-control.md)의 오차 전달 함수가 $T_1-T_2QT_3$ 꼴이 되고, 내부·외부 인수분해를 거치면 [Nehari 정리](nehari-theorem.md)의 거리 문제가 된다.
- 내부 모형. [내부 모형 원리](internal-model-principle.md)의 조건 $S(\pm i\omega_0)=0$ 은 $Q$ 에 대한 일차 보간 조건 $G(\pm i\omega_0)Q(\pm i\omega_0)=1$ 이다. 직관 절의 $q=1$ 이 $\omega_0=0$ 인 경우다.
- 내부 모형 제어(internal model control). 안정한 장치에서 $C=Q/(1-GQ)$ 는 장치 모형 $G$ 의 출력을 측정값에서 빼고 그 차이에 $Q$ 를 거는 구조이고, 공정 제어에서 이 구조로 제어기를 구현한다.

[^1]: D. C. Youla, H. A. Jabr, J. J. Bongiorno, "Modern Wiener–Hopf design of optimal controllers, Part II", *IEEE Transactions on Automatic Control* 21 (1976), 319–338.
[^2]: V. Kučera, *Discrete Linear Control: The Polynomial Equation Approach*, Wiley, 1979.

# 연관 문서

## 선수지식

- [Nyquist 판정법](nyquist-criterion.md)

## 더 알아보기

- [H∞ 고리 모양 다듬기](h-infinity-loop-shaping.md)

#optimization #complex_analysis #signal_processing
