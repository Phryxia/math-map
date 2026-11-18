# 조화 진동자

# 개요

**조화 진동자(harmonic oscillator)** 는 평형 위치에서 벗어난 거리에 비례하는 힘을 평형 쪽으로 받는 물체다. 질량 $1$ kg 인 추를 용수철 상수가 $4$ N/m 인 용수철에 매달아 $1$ m 당겼다 놓으면, 추는 평형 위치를 사이에 두고 오르내린다. 조화 진동자는 이 운동을 미분방정식 $x''=-4x$ 로 적고, 그 해 $x=\cos 2t$ 에서 추가 $\pi$ 초마다 같은 위치로 오는 것을 읽는다.

# 직관

추의 위치를 평형에서 잰 거리 $x(t)$ 로 둔다. 용수철이 추를 당기는 힘은 $-4x$ 이고, 힘은 질량 곱하기 가속도이므로 $x''=-4x$ 다. 처음에 $1$ m 당겨 놓았으므로 $x(0)=1$, 처음 속도는 $x'(0)=0$ 이다.

두 번 미분하면 자기 자신의 음수배가 되는 함수는 [삼각함수](trigonometric-functions.md)다. $x=\cos 2t$ 이면 $x''=-4\cos 2t=-4x$ 이고 $x(0)=1$, $x'(0)=0$ 을 만족한다. [상미분방정식](ordinary-differential-equations.md)의 해의 유일성에 따라 추의 운동은 이것뿐이다. 추는 $1$ 과 $-1$ 사이를 오가고, $\cos$ 의 주기 $2\pi$ 를 $2$ 로 나눈 $\pi$ 초마다 처음 위치로 온다.

실제 추는 공기 저항 때문에 점점 덜 흔들린다. 속도에 비례하는 저항 $-2x'$ 을 더하면 방정식은 $x''+2x'+4x=0$ 이다. 이번에는 $\cos$ 하나로 맞지 않으므로 $x=e^{rt}$ 꼴을 넣는다. 그러면 $r^2+2r+4=0$ 이고 $r=-1\pm\sqrt3\thinspace i$ 다.

근이 [복소수](complex-numbers.md)이므로 실수 해는 $e^{-t}\cos\sqrt3t$ 와 $e^{-t}\sin\sqrt3t$ 의 결합이다. 처음 조건에 맞추면 다음 해가 나온다. 추는 주기 $2\pi/\sqrt3$ 로 흔들리면서 흔들림의 폭이 $e^{-t}$ 처럼 줄어든다.

$$
x(t)=e^{-t}\Bigl(\cos\sqrt3t+\frac1{\sqrt3}\sin\sqrt3t\Bigr)
$$

# 정의

## 조화 진동자 방정식

질량 $m\gt 0$, 용수철 상수 $k\gt 0$ 인 조화 진동자의 위치 $x(t)$ 는 다음 방정식을 만족한다.

$$
mx''+kx=0
$$

$\omega=\sqrt{k/m}$ 을 **각진동수(angular frequency)** 라 하고, $T=2\pi/\omega$ 를 **주기(period)** 라 한다. 직관 절의 추는 $m=1$, $k=4$ 이므로 $\omega=2$, $T=\pi$ 다.

## 감쇠 진동자

속도에 비례하는 저항을 받는 진동자는 감쇠 계수 $c\ge0$ 에 대해 다음 방정식을 만족하고, 이것을 **감쇠 조화 진동자(damped harmonic oscillator)** 라 한다[^1].

$$
mx''+cx'+kx=0
$$

$x=e^{rt}$ 를 넣어 얻는 이차방정식 $mr^2+cr+k=0$ 을 **특성방정식(characteristic equation)** 이라 한다. 직관 절의 저항이 있는 추는 $c=2$ 이고 특성방정식은 $r^2+2r+4=0$ 이다.

# 성질

## 일반해와 진폭

$mx''+kx=0$ 의 해는 상수 $A$, $B$ 에 대해 $x=A\cos\omega t+B\sin\omega t$ 이고, $x(0)=A$, $x'(0)=\omega B$ 로 상수가 정해진다. 덧셈정리로 이 해는 $x=R\cos(\omega t-\delta)$ 로도 쓰이고, $R=\sqrt{A^2+B^2}$ 를 **진폭(amplitude)** 이라 한다. 주기는 진폭에 무관하다.

## 에너지 보존

$mx''+kx=0$ 의 양변에 $x'$ 을 곱하면 다음 식의 도함수가 $0$ 이므로 이 값은 시간에 따라 변하지 않는다.

$$
E=\frac12m(x')^2+\frac12kx^2
$$

첫 항은 운동 에너지, 둘째 항은 용수철의 위치 에너지다. 직관 절의 추는 $E=\frac12\cdot4\cdot1^2=2$ 다. 위치 $x$ 와 속도 $x'$ 을 두 좌표로 놓은 평면에서 운동은 타원 $E=2$ 위를 돈다. 감쇠가 있으면 $E'=-c(x')^2\le0$ 이어서 에너지가 줄어든다.

## 감쇠의 세 경우

특성방정식의 판별식 $c^2-4mk$ 의 부호로 운동이 갈린다. $m=1$, $k=4$, $x(0)=1$, $x'(0)=0$ 에서 세 경우의 해는 다음이다.

| 경우 | 조건 | 근 | 해 |
| --- | --- | --- | --- |
| 부족감쇠(underdamped) | $c=2$ | $-1\pm\sqrt3\thinspace i$ | 직관 절의 $e^{-t}(\cos\sqrt3t+\sin\sqrt3t/\sqrt3)$ |
| 임계감쇠(critically damped) | $c=4$ | $-2$ (중근) | $(1+2t)e^{-2t}$ |
| 과감쇠(overdamped) | $c=5$ | $-1$, $-4$ | $(4e^{-t}-e^{-4t})/3$ |

부족감쇠에서만 추가 평형을 지나 반대쪽으로 넘어간다. 임계감쇠와 과감쇠에서는 넘어가지 않고 평형으로 다가간다. 넘어가지 않는 경우 가운데서는 임계감쇠가 가장 빨리 다가간다. 중근일 때 둘째 해 $te^{-2t}$ 는 [Wronski 행렬식](wronskian.md)의 둘째 해 공식으로 얻는다.

## 강제 진동과 공명

바깥에서 주기적인 힘 $\cos\Omega t$ 를 주면 방정식은 $x''+4x=\cos\Omega t$ 다. $\Omega\ne2$ 이면 다음이 하나의 해이고, 일반해는 여기에 $\cos2t$ 와 $\sin2t$ 의 결합을 더한 것이다.

$$
x=\frac{\cos\Omega t}{4-\Omega^2}
$$

$\Omega$ 가 고유 각진동수 $2$ 에 가까워지면 진폭 $1/\vert 4-\Omega^2\vert$ 가 한없이 커진다. $\Omega=2$ 이면 $x=\frac t4\sin2t$ 가 해이고, 진폭이 시간에 비례해 커진다. 이것을 **공명(resonance)** 이라 한다. 감쇠 $c\gt 0$ 이 있으면 진폭은 유한하고 $\Omega$ 가 고유 각진동수 근처일 때 가장 크다.

# 활용

- [Hamilton 역학](hamiltonian-mechanics.md): 용수철의 Hamilton 함수 $H=p^2/2m+kq^2/2$ 가 에너지 보존 절의 $E$ 이고, 운동방정식이 위치와 운동량의 일계 연립방정식이 된다.
- 진자: 길이 $\ell$ 인 진자의 각 $\theta$ 는 $\theta''=-(g/\ell)\sin\theta$ 를 만족하고, 작은 각에서 $\sin\theta\approx\theta$ 로 바꾸면 각진동수 $\sqrt{g/\ell}$ 인 조화 진동자다.
- 전기 회로: 저항, 코일, 축전기를 직렬로 이은 회로의 전하는 감쇠 조화 진동자 방정식을 만족하고, 라디오 수신기는 공명으로 한 주파수를 고른다.
- [Laplace 변환](laplace-transform.md): 초깃값이 있는 감쇠·강제 진동자 방정식을 대수방정식으로 바꾸어 푼다.
- [행렬 지수](matrix-exponential.md): $y=(x,x')$ 로 두면 진동자 방정식은 $y'=Ay$ 꼴의 일계 연립방정식이 되고, 해는 $e^{tA}y(0)$ 이다.

[^1]: W. E. Boyce, R. C. DiPrima, *Elementary Differential Equations and Boundary Value Problems*, 10th ed., Wiley, 2012, 3.7~3.8 절.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)
- [삼각함수](trigonometric-functions.md)

## 더 알아보기

- [Kepler 법칙](kepler-laws.md)

#analysis #signal_processing
