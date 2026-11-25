# 적응 제어

# 개요

**적응 제어(adaptive control)** 는 계의 매개변수를 모르는 채로 되먹임 이득을 운전 중에 바꾸어 가며 계를 안정화하거나 목표를 따라가게 하는 방법이다. $\dot x=\theta x+u$ 에서 $\theta$ 를 모르면, $u=-x$ 처럼 이득을 미리 정한 되먹임은 $\theta\ge 1$ 일 때 $x$ 를 $0$ 으로 보내지 못한다.

적응 제어는 $\theta$ 의 추정값을 되먹임에 쓰고, 그 추정값을 갱신하는 규칙을 상태와 추정 오차를 함께 담은 Lyapunov 함수가 줄어들도록 정한다.

# 직관

계 $\dot x=\theta x+u$ 에서 참값이 $\theta=1$ 이라 하자. $u=-x$ 를 쓰면 $\dot x=0$ 이라 $x$ 가 처음 값에 머문다. $\theta=2$ 이면 $\dot x=x$ 라 $x$ 가 $e^t$ 로 자란다.

$\theta$ 를 알면 $u=-\theta x-x$ 로 $\dot x=-x$ 를 만들 수 있다. 모르므로 추정값 $\hat\theta$ 를 대신 넣어 $u=-\hat\theta x-x$ 로 둔다. 닫힌 계는 $\dot x=(\theta-\hat\theta-1)x$ 다.

$\hat\theta$ 를 어떻게 바꿀지 정하려고 다음 함수를 본다.

$$
V=\frac{x^2}{2}+\frac{(\hat\theta-\theta)^2}{2}
$$

미분하면 $\dot V=(\theta-\hat\theta-1)x^2+(\hat\theta-\theta)\dot{\hat\theta}$ 다. 모르는 $\theta$ 가 든 항 $(\theta-\hat\theta)x^2$ 을 지우려고 $\dot{\hat\theta}=x^2$ 으로 두면 $\dot V=-x^2$ 이다. 갱신 규칙에 $\theta$ 가 들어가지 않는다.

$\theta=1$, $x(0)=1$, $\hat\theta(0)=0$ 이면 닫힌 계는 $\dot x=-\hat\theta x$, $\dot{\hat\theta}=x^2$ 이다. $x^2+\hat\theta^2$ 이 보존되어 $\hat\theta=\tanh t$, $x=\mathrm{sech}\thinspace t$ 이고, $x$ 는 $0$ 으로 가고 $\hat\theta$ 는 $1$ 로 간다.

$x(0)=0.5$ 에서 출발하면 같은 계산으로 $\hat\theta=0.5\tanh(0.5t)$, $x=0.5\thinspace\mathrm{sech}(0.5t)$ 다. $x$ 는 $0$ 으로 가지만 $\hat\theta$ 는 참값 $1$ 이 아닌 $0.5$ 로 간다. $\hat\theta=0.5$ 에서도 닫힌 계의 이득 $\theta-\hat\theta-1=-0.5$ 가 음수라 $x$ 는 $0$ 으로 가고, $x$ 가 작아지면 갱신 속도 $x^2$ 도 작아져 $\hat\theta$ 가 더 움직이지 않는다.

# 정의

## 매개변수가 일차로 들어가는 계

모르는 매개변수 $\theta\in\mathbb R^p$ 가 다음처럼 일차로 들어가는 계를 다룬다.

$$
\dot x=f(x)+F(x)\theta+g(x)u
$$

$F(x)$ 는 알려진 $n\times p$ 행렬이고 **회귀 행렬(regressor)** 이라 한다. 직관 절의 계는 $n=p=1$, $f=0$, $F(x)=x$, $g=1$ 인 경우다.

## 확실성 등가 되먹임과 갱신 규칙

$\theta$ 를 알 때의 되먹임 $u=k(x,\theta)$ 에 추정값 $\hat\theta$ 를 넣은 $u=k(x,\hat\theta)$ 를 **확실성 등가(certainty equivalence)** 되먹임이라 한다. $\hat\theta$ 의 미분방정식 $\dot{\hat\theta}=\tau(x,\hat\theta)$ 를 **갱신 규칙(update law)** 이라 한다.

$V\_0(x)$ 가 $\theta$ 를 알 때의 Lyapunov 함수이고 $\nabla V\_0\cdot(f+F\theta+gk(x,\theta))\le-W(x)$ 이면, 다음 갱신 규칙이 표준 꼴이다. $\Gamma$ 는 양의 정부호 대칭 행렬로 정하는 갱신 이득이다.

$$
\dot{\hat\theta}=\Gamma F(x)^{\mathsf T}\nabla V\_0(x)
$$

직관 절은 $V\_0=x^2/2$, $\Gamma=1$ 이고 $F^{\mathsf T}\nabla V\_0=x\cdot x=x^2$ 이다.

# 성질

## 상태의 수렴

되먹임 $k$ 가 모르는 항을 다음 꼴로 상쇄한다고 하자.

$$
g(x)k(x,\hat\theta)=g(x)k(x,\theta)-F(x)(\hat\theta-\theta)
$$

그러면 표준 갱신 규칙과 다음 함수에서 $\dot V\le-W(x)$ 다[^1].

$$
V=V\_0(x)+\frac12(\hat\theta-\theta)^{\mathsf T}\Gamma^{-1}(\hat\theta-\theta)
$$

$V$ 가 $(x,\hat\theta)$ 에 대해 방사적으로 비유계이므로 해는 유계이다. 계가 시간에 의존하지 않으면 [Lyapunov 안정성](lyapunov-stability.md)의 LaSalle 불변 원리로 해가 $\lbrace W=0\rbrace$ 안의 불변집합으로 가고, $W$ 가 양의 정부호이면 $x\to 0$ 이다. 목표 궤적을 따라가는 문제처럼 시간에 의존하면 Barbalat 보조정리(Barbalat's lemma)로 $W(x(t))\to 0$ 을 얻는다.

## 매개변수의 수렴과 지속 여기

$x\to 0$ 이어도 $\hat\theta\to\theta$ 라는 보장은 없다. 직관 절의 $x(0)=0.5$ 에서 $\hat\theta\to 0.5$ 였다.

추정 오차 $\tilde\theta=\hat\theta-\theta$ 가 $0$ 으로 가려면 회귀 행렬이 모든 방향을 고르게 지나야 한다. 상수 $T,c\gt 0$ 이 있어 모든 $t$ 에서 다음이 성립하면 신호 $\phi(t)$ 가 **지속 여기(persistent excitation)** 라 한다.

$$
\int\_t^{t+T}\phi(s)\phi(s)^{\mathsf T}\thinspace ds\succeq cI
$$

추적 문제에서 회귀 신호가 지속 여기이면 $\tilde\theta$ 는 지수적으로 $0$ 으로 간다[^2]. 안정화 문제에서는 $x\to 0$ 이라 $F(x)\to 0$ 이므로 지속 여기가 성립하지 않는다.

## 외란과 매개변수 표류

외란 $d(t)$ 가 들어간 $\dot x=\theta x+u+d$ 에서 표준 갱신 규칙 $\dot{\hat\theta}=x^2$ 은 $x$ 가 $0$ 이 되지 않는 한 $\hat\theta$ 를 계속 키운다. 작고 끊이지 않는 외란으로도 $\hat\theta$ 가 한없이 자라는 이 현상을 매개변수 표류(parameter drift)라 한다.

Rohrs 등은 모형화하지 않은 빠른 동역학과 작은 외란이 함께 있으면 표준 적응 제어기가 불안정해지는 예를 보였다[^3]. 갱신 규칙에 $-\sigma\Gamma\hat\theta$ 를 더하는 $\sigma$ 수정(σ-modification)이나 $\hat\theta$ 를 정해진 볼록 집합 안에 묶는 사영(projection)이 표류를 막는다. 대가로 외란이 없어도 $x$ 가 정확히 $0$ 으로 가지 않고 작은 집합에 머문다.

## 적응 역진 설계

[역진 설계](backstepping.md)의 엄격 되먹임 꼴에 모르는 매개변수가 들어가면, 단계마다 가상 입력이 $\hat\theta$ 에 의존하고 그 미분에 $\dot{\hat\theta}$ 이 나온다. Krstić, Kanellakopoulos, Kokotović 는 단계마다 갱신 규칙의 후보를 하나씩 쌓아 마지막 단계에서 갱신 규칙 하나로 정하는 조율 함수(tuning function)를 써서, 매개변수 하나에 추정값 하나만 두는 설계를 만들었다[^1].

# 활용

- 모형 기준 적응 제어(model reference adaptive control). 원하는 응답을 내는 기준 모형 $\dot x\_m=a\_mx\_m+b\_mr$ 를 두고, 추적 오차 $e=x-x\_m$ 의 제곱을 $V\_0$ 로 써서 이득들을 갱신한다. 비행기의 비행 영역에 따라 공기역학 계수가 바뀌는 비행 제어에 쓰였다.
- 로봇 팔의 적응 제어. 질량과 관성 모멘트가 운동방정식에 일차로 들어가므로 회귀 행렬 꼴이 되고, Slotine 과 Li 의 설계가 쥔 물체의 질량을 모르는 채 궤적을 따라가게 한다[^4].
- 적응 신경망 제어. $F(x)\theta$ 자리에 고정된 기저 함수의 일차 결합을 두어 모르는 비선형 항을 근사하고, 결합 계수를 같은 갱신 규칙으로 정한다.

[^1]: M. Krstić, I. Kanellakopoulos, P. V. Kokotović, *Nonlinear and Adaptive Control Design*, Wiley, 1995, 3 장과 4 장.
[^2]: K. J. Åström, B. Wittenmark, *Adaptive Control*, 2nd ed., Addison-Wesley, 1995, 5 장.
[^3]: C. E. Rohrs, L. Valavani, M. Athans, G. Stein, "Robustness of continuous-time adaptive control algorithms in the presence of unmodeled dynamics", *IEEE Transactions on Automatic Control* 30 (1985), 881–889.
[^4]: J.-J. E. Slotine, W. Li, "On the adaptive control of robot manipulators", *International Journal of Robotics Research* 6 (1987), 49–59.

# 연관 문서

## 선수지식

- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis
