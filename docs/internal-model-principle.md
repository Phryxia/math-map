# 내부 모형 원리

# 개요

**내부 모형 원리(internal model principle)** 는 되먹임 제어기가 목표값이나 외란을 오차 없이 따라가려면 그 신호를 만들어 내는 동역학을 제어기 안에 갖고 있어야 한다는 원리다. 장치 $1/(s+1)$ 의 출력을 $\sin t$ 에 맞추려 할 때, 계단 목표값을 오차 없이 따라가던 PI 제어기(proportional–integral controller)로는 진폭 $0.28$ 의 오차가 끝까지 남는다. 제어기의 분모에 $\sin t$ 의 Laplace 변환 분모 $s^2+1$ 을 넣으면 오차가 $0$ 으로 간다.

# 직관

[PID 제어](pid-control.md)(proportional–integral–derivative) 문서의 장치 $G(s)=1/(s+1)$ 과 PI 제어기 $C(s)=3+4/s$ 를 쓴다. 계단 목표값에서는 적분 동작 때문에 오차가 $0$ 으로 갔다. 목표값을 $r(t)=\sin t$ 로 바꾸면 오차의 변환은 $E=SR$ 이고, $S=1/(1+CG)$ 는 다음과 같다.

$$
S(s)=\frac{s(s+1)}{(s+2)^2}
$$

닫힌 고리가 안정하므로 오차는 결국 진동수 $1$ 의 사인파가 되고, 그 진폭은 $s=i$ 를 넣은 값의 크기다.

$$
\vert S(i)\vert=\frac{\vert i\vert\thinspace\vert 1+i\vert}{\vert 2+i\vert^2}=\frac{\sqrt2}{5}\approx 0.28
$$

계단에서 오차가 사라진 이유는 $S(0)=0$ 이었기 때문이고, $S(0)=0$ 은 $C$ 의 극 $s=0$ 에서 나왔다. 계단의 Laplace 변환은 $1/s$ 이므로 제어기가 계단의 분모를 극으로 가졌다. 그러면 $\sin t$ 의 변환 $1/(s^2+1)$ 에 맞춰 제어기에 극 $\pm i$ 를 넣으면 된다. 분모가 $s^2+1$ 인 제어기를 두고 닫힌 고리의 극이 모두 $-2$ 에 오도록 분자를 고르면 다음이 나온다.

$$
C(s)=\frac{5s^2+11s+7}{s^2+1},\qquad S(s)=\frac{(s+1)(s^2+1)}{(s+2)^3}
$$

$S$ 가 $\pm i$ 에서 $0$ 이라 $E=SR=(s+1)/(s+2)^3$ 이고, 오차는 $e(t)=t(1-t/2)e^{-2t}$ 로 $0$ 에 간다. 장치를 $1/(s+1.5)$ 로 바꾸어도 닫힌 고리가 안정한 한 $S$ 의 분자에 $s^2+1$ 이 남아 오차가 여전히 $0$ 으로 간다.

# 정의

## 외부 신호 모형

목표값 $r$ 이나 외란 $d$ 의 [Laplace 변환](laplace-transform.md)이 서로소인 다항식으로 $N_r/D_r$ 꼴이고 $D_r$ 의 근이 모두 닫힌 오른쪽 반평면에 있을 때, $D_r$ 을 그 신호의 **신호 생성 다항식(signal generator polynomial)** 이라 한다. 계단은 $D_r=s$, $\sin t$ 는 $D_r=s^2+1$, 경사 $t$ 는 $D_r=s^2$ 이다. $D_r$ 의 근은 신호가 $0$ 으로 줄지 않게 하는 지수, 곧 $e^{\lambda t}$ 의 $\lambda$ 다.

## 내부 모형

장치 $G=N_G/D_G$ 와 제어기 $C=N_C/D_C$ 를 서로소 다항식의 비로 쓴다. $D_r$ 이 $D_C$ 를 나누면 제어기가 신호의 **내부 모형(internal model)** 을 가진다고 한다. 직관 절의 PI 제어기는 $D_C=s$ 라 계단의 내부 모형을 갖고, 둘째 제어기는 $D_C=s^2+1$ 이라 $\sin t$ 의 내부 모형을 갖는다.

## 출력 조정

닫힌 고리가 안정하고 모든 초깃값에서 $e(t)=r(t)-y(t)\to 0$ 이면 고리가 $r$ 을 **조정한다(regulates)** 고 한다. 직관 절의 PI 제어기는 계단을 조정하고 $\sin t$ 는 조정하지 못한다.

# 성질

## 조정의 조건

닫힌 고리 특성다항식 $\Delta=D_GD_C+N_GN_C$ 의 근이 모두 왼쪽 반평면에 있다고 하자. 고리가 $r$ 을 조정하는 것은 $D_r$ 이 $D_GD_C$ 를 나누는 것과 동치다.

증명의 요지. 오차의 변환은 다음과 같다.

$$
E=\frac{D_GD_C}{\Delta}\cdot\frac{N_r}{D_r}
$$

부분분수로 나누면 $\Delta$ 의 근에서 나온 항은 지수적으로 줄고, $D_r$ 의 근에서 나온 항은 줄지 않는다. 그래서 $e\to 0$ 은 $D_r$ 의 근이 분자 $D_GD_C$ 에 모두 지워지는 것, 곧 $D_r$ 이 $D_GD_C$ 를 나누는 것이다. 단일 입출력 고리에서는 $S(\lambda)=0$ 인 것이 $C(\lambda)G(\lambda)=\infty$ 인 것과 같아서, 분자 쪽 다항식이 신호의 근을 가져야 한다.

## 강건성과 내부 모형

$D_r$ 이 $D_C$ 를 나누면, 닫힌 고리를 안정하게 두는 모든 장치 $G$ 에 대해 고리가 $r$ 을 조정한다. 역으로 장치의 계수를 조금씩 바꾼 모든 장치에 대해 조정이 유지되면 $D_r$ 이 $D_C$ 를 나눈다(Francis–Wonham 정리)[^1][^2].

증명의 요지. 앞 절의 조건에서 $D_C$ 가 $D_r$ 을 가지면 $D_G$ 가 무엇이든 조건이 성립한다. 역으로 $D_r$ 의 근 $\lambda$ 가 $D_G$ 에만 있으면, $D_G$ 의 계수를 조금 바꾸어 $\lambda$ 를 근에서 비켜 놓을 수 있고 안정성은 유지되므로 조정이 깨진다. 직관 절의 장치를 $1/(s+1.5)$ 로 바꾼 것은 첫 방향의 예다.

## 장치의 영점

$D_r$ 의 근 $\lambda$ 가 장치의 영점, 곧 $N_G(\lambda)=0$ 이면 내부 모형을 가진 어떤 제어기로도 닫힌 고리를 안정하게 할 수 없다. $\Delta(\lambda)=D_G(\lambda)D_C(\lambda)+N_G(\lambda)N_C(\lambda)$ 의 두 항이 모두 $0$ 이라 $\lambda$ 가 닫힌 고리의 극이 되고, $\lambda$ 는 왼쪽 반평면에 있지 않기 때문이다. 영점이 $s=0$ 인 장치 $s/(s+1)$ 은 계단 목표값을 오차 없이 따라갈 수 없다.

## 감도의 대가

조정하는 고리에서는 $\vert S(i\omega_0)\vert=0$ 이라 $\log\vert S\vert$ 가 $\omega_0$ 근처에서 크게 음수다. 열린 고리 $CG$ 의 상대 차수가 $2$ 이상이면 [Bode 감도 적분](bode-sensitivity-integral.md)이 $\log\vert S\vert$ 의 적분을 $0$ 이상으로 고정하므로 다른 주파수에서 $\vert S\vert\gt 1$ 인 구간이 생긴다. 직관 절의 둘째 고리는 $CG$ 의 상대 차수가 $1$ 이고 $sC(s)G(s)\to 5$ 라 적분이 $-5\pi/2$ 이고, 이 제약이 걸리지 않는다.

# 활용

- 적분 동작. PID 제어의 적분 항은 계단 목표값과 일정한 외란의 내부 모형이다. 경사 목표값을 오차 없이 따라가려면 적분기 두 개, 곧 $D_C$ 에 $s^2$ 이 있어야 한다.
- 주기 외란 차단. 회전 기계의 진동이나 전력망의 $60$ Hz 성분처럼 진동수를 아는 외란은 그 진동수의 공진 제어기 $1/(s^2+\omega_0^2)$ 를 제어기에 넣어 지운다. 진동수 $k\omega_0$ 의 공진기를 여러 개 넣으면 주기 신호 전체를 따라가는 반복 제어(repetitive control)가 된다.
- 상태공간 판본. 다입력 다출력 장치에서는 외부 신호를 $\dot w=S_ww$ 로 만들고, 제어기가 $S_w$ 의 사본을 출력 수만큼 가져야 한다. 조정 가능성은 Francis 방정식(Francis equations)이라는 선형 행렬 방정식의 해의 존재로 판정한다[^1].
- 비선형 출력 조정. Isidori–Byrnes 의 비선형 조정 이론이 같은 원리를 중심다양체(center manifold) 위의 불변성 조건으로 쓴다.

[^1]: B. A. Francis, W. M. Wonham, "The internal model principle of control theory", *Automatica* 12 (1976), 457–465.
[^2]: E. J. Davison, "The robust control of a servomechanism problem for linear time-invariant multivariable systems", *IEEE Transactions on Automatic Control* 21 (1976), 25–34.

# 연관 문서

## 선수지식

- [PID 제어](pid-control.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #complex_analysis #signal_processing
