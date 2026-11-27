# 내부 모형 제어

# 개요

**내부 모형 제어(internal model control, IMC)** 는 제어기 안에 장치의 모형을 두고, 측정값과 모형 출력의 차이만 되먹임하는 구조로 제어기를 설계하는 방법이다. 난로의 온도를 목표값에 맞출 때 [PID 제어](pid-control.md)(proportional–integral–derivative control)의 세 이득을 하나씩 바꿔 가며 맞추면, 이득 하나가 응답의 무엇을 바꾸는지 따로 보이지 않는다. 내부 모형 제어는 원하는 닫힌 고리 응답의 빠르기 $\lambda$ 하나를 먼저 정하고, 모형을 뒤집어 그 응답을 내는 제어기를 계산한다.

# 직관

장치가 $G(s)=1/(s+1)$ 이고, 목표값이 계단으로 바뀌면 출력이 시정수 $\lambda=0.5$ 로 따라가기를 바란다. 모형이 맞고 외란이 없으면 측정값과 모형 출력의 차이가 $0$ 이라, 입력은 목표값에 $Q$ 를 건 $u=Qr$ 이고 출력은 $y=GQr$ 이다.

$Q=1/G=s+1$ 이면 $y=r$ 이지만, 이 $Q$ 는 목표값을 미분하므로 계단에서 입력이 무한히 커진다. 그래서 거르개를 곱한다.

$$
Q(s)=\frac{s+1}{\lambda s+1},\qquad y=\frac{1}{\lambda s+1}\thinspace r
$$

출력에 일정한 외란 $d$ 가 더해지면 측정값과 모형 출력의 차이가 $d$ 이고, 이것을 목표값에서 빼서 $Q$ 에 넣는다. 그러면 $y=(r-d)/(\lambda s+1)+d$ 이고, 정상 상태에서 $y=r$ 이 되어 외란이 사라진다.

이 구조를 오차 $r-y$ 를 받는 보통의 제어기 하나로 다시 쓰면 다음이 나온다.

$$
C(s)=\frac{Q}{1-GQ}=\frac{s+1}{\lambda s}=\frac1\lambda+\frac{1}{\lambda s}
$$

PI(proportional–integral) 제어기이고, $\lambda=0.5$ 이면 $K\_p=K\_i=2$ 다. 이득 두 개가 빠르기 하나로 정해졌다.

# 정의

안정한 장치 $G$ 와 그 모형 $\tilde G$, 안정하고 분자 차수가 분모 차수 이하인 전달 함수 $Q$ 가 있다. 입력을 다음과 같이 정하는 제어기를 내부 모형 제어기라 하고, $Q$ 를 IMC 제어기라 한다[^1].

$$
u=Q\thinspace\bigl(r-(y-\tilde Gu)\bigr)
$$

$y-\tilde Gu$ 는 측정값에서 모형 출력을 뺀 것이고, 모형이 맞으면 외란의 추정값이다. $u$ 에 대해 풀면 오차를 받는 제어기 $C=Q/(1-\tilde GQ)$ 와 같다. 직관 절은 $\tilde G=G=1/(s+1)$, $Q=(s+1)/(0.5s+1)$ 이다.

# 성질

## Q 에 대한 일차식

모형이 맞으면 목표값에서 출력까지와 외란에서 출력까지의 전달 함수는 다음이다.

$$
T=GQ,\qquad S=1-GQ
$$

둘 다 $Q$ 의 일차식이다. $G$ 가 안정하면 $Q$ 가 안정한 것과 고리가 내부 안정인 것이 동치다. 안정한 장치에서 [Youla 매개화](youla-parametrization.md)의 매개변수가 $Q$ 그 자체인 경우다.

## 설계 절차

$G$ 를 $G=G\_+G\_-$ 로 나눈다. $G\_+$ 는 오른쪽 반평면의 영점과 지연을 모은 인수로 $G\_+(0)=1$ 이고, $G\_-$ 는 안정한 역을 갖는 나머지다. $n$ 은 $Q$ 의 분자 차수가 분모 차수를 넘지 않게 고른다[^1].

$$
Q=G\_-^{-1}\frac{1}{(\lambda s+1)^n},\qquad T=G\_+\frac{1}{(\lambda s+1)^n}
$$

$G\_+$ 를 뒤집으면 $Q$ 가 불안정하거나 미래의 입력이 필요하므로 그대로 남는다. 장치가 $G\_0e^{-\theta s}$ 이면 $T$ 에 $e^{-\theta s}$ 가 남고, 이 제어기는 [Smith 예측기](smith-predictor.md)와 같은 구조다.

## 적분 동작

$Q(0)\tilde G(0)=1$ 이면 $C=Q/(1-\tilde GQ)$ 의 분모가 $s=0$ 에서 $0$ 이므로 $C$ 는 $s=0$ 에 극을 갖는다. 그래서 모형이 틀려도 고리가 안정하기만 하면 계단 목표값과 일정한 외란에서 정상 상태 오차가 $0$ 이다. 위 절의 $Q$ 는 $T(0)=G\_+(0)=1$ 이라 이 조건을 만족한다.

## 1차 지연 장치의 PI 규칙

$G=Ke^{-\theta s}/(\tau s+1)$ 에 $Q=(\tau s+1)/(K(\lambda s+1))$ 을 쓰고 $C$ 의 분모에서 $e^{-\theta s}$ 를 $1-\theta s$ 로 어림하면 다음이 나온다[^2].

$$
C(s)\approx\frac{\tau s+1}{K(\lambda+\theta)s},\qquad K\_p=\frac{\tau}{K(\lambda+\theta)},\qquad K\_i=\frac{1}{K(\lambda+\theta)}
$$

$\theta=0$ 이면 직관 절의 PI 제어기다. Skogestad 는 $\lambda=\theta$ 를 기본값으로 권했다[^3].

## 모형 오차에 대한 강건성

실제 장치가 $G=\tilde G(1+\ell)$ 이고 $\ell$ 이 안정하면, 모든 $\omega$ 에서 $\vert\tilde G(i\omega)Q(i\omega)\ell(i\omega)\vert\lt 1$ 일 때 고리가 안정하다. [작은 이득 정리](small-gain-theorem.md)의 결론이다. $\lambda$ 를 키우면 높은 진동수에서 $\tilde GQ$ 가 작아져 더 큰 모형 오차를 견디고, 대신 응답이 느려진다.

# 활용

- 공정 제어의 PI·PID 조율. 계단 응답에서 이득 $K$, 시정수 $\tau$, 지연 $\theta$ 를 읽고 위 규칙에 원하는 $\lambda$ 를 넣어 이득을 정한다[^3].
- 지연이 긴 공정. 지연을 뒤집지 않고 $T$ 에 남기는 설계가 Smith 예측기와 같은 구조를 준다.
- 모형 예측 제어와의 비교. 측정값과 모형 출력의 차이를 외란으로 보고 예측에 더하는 처리가 모형 예측 제어(model predictive control)의 외란 모형과 같다.

[^1]: M. Morari, E. Zafiriou, Robust Process Control, Prentice Hall, 1989.

[^2]: D. E. Rivera, M. Morari, S. Skogestad, "Internal model control. 4. PID controller design", Industrial & Engineering Chemistry Process Design and Development 25 (1986), 252–265.

[^3]: S. Skogestad, "Simple analytic rules for model reduction and PID controller tuning", Journal of Process Control 13 (2003), 291–309.

# 연관 문서

## 선수지식

- [Youla 매개화](youla-parametrization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis
