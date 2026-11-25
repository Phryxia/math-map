# H∞ 제어

# 개요

**H∞ 제어(H-infinity control)** 는 외란이 어떤 모양으로 들어오든 그 외란이 출력에서 커지는 배율의 최댓값을 정해진 값 $\gamma$ 아래로 누르는 제어기를 찾는 문제다. 수레의 위치 $x$ 가 $\dot x=w+u$ 로 움직이고 $w$ 는 바람, $u$ 는 모터의 힘이라 하자. 바람의 모양을 모르는 채로 위치와 모터 힘이 함께 작게 남도록 $u$ 를 정하려면, 가장 나쁜 바람에서 생기는 배율을 계산해 눌러야 한다.

H∞ 제어는 이 배율이 $\gamma$ 미만인 제어기가 있는지를 Riccati 방정식의 해가 있는지로 판정하고, 해가 있으면 그 해로 제어기를 적는다.

# 직관

개요의 수레에 되먹임 $u=-Kx$ 를 걸면 $\dot x=-Kx+w$ 다. 작게 남길 출력을 위치와 모터 힘을 모은 $z=(x,\thinspace u)$ 로 두면, 진동수 $\omega$ 의 바람이 $z$ 에서 커지는 배율은 다음과 같다.

$$
\frac{\sqrt{1+K^2}}{\sqrt{\omega^2+K^2}}
$$

이 값은 $\omega=0$, 곧 일정하게 부는 바람에서 가장 크고 그 값은 $\sqrt{1+K^2}/K$ 다. [선형 이차 조절기](linear-quadratic-regulator.md)는 위치와 힘의 제곱 적분을 최소화해 $K=1$ 을 주고, 그때 가장 나쁜 배율은 $\sqrt2\approx 1.414$ 다.

배율을 $\gamma\gt 1$ 미만으로 누르려면 $\sqrt{1+K^2}/K\lt\gamma$, 곧 $K\gt 1/\sqrt{\gamma^2-1}$ 이어야 한다. $\gamma=1.1$ 이면 $K\gt 2.18$ 이다. $K$ 를 키울수록 배율은 $1$ 에 다가가지만 $1$ 아래로는 내려가지 않는다. 일정한 바람에서 위치는 $w/K$ 로 $0$ 에 가까워져도 모터 힘 $u=-w$ 는 바람과 같은 크기로 남는다.

이 계산은 장치가 스칼라 하나라서 손으로 된다. 상태가 여럿이고 제어기가 상태를 직접 보지 못하면, 배율을 누르는 제어기가 있는지와 그 제어기가 무엇인지를 Riccati 방정식 두 개로 판정한다.

# 정의

## 일반화된 장치

외란 $w$, 제어 입력 $u$, 작게 남길 출력 $z$, 측정 $y$ 를 갖는 다음 계를 **일반화된 장치(generalized plant)** 라 한다.

$$
\begin{aligned}
\dot x&=Ax+B_1w+B_2u\cr
z&=C_1x+D_{12}u\cr
y&=C_2x+D_{21}w
\end{aligned}
$$

직관 절의 수레는 $A=0$, $B_1=B_2=1$, $C_1=(1,0)^{\mathsf T}$, $D_{12}=(0,1)^{\mathsf T}$ 이고, 상태를 그대로 측정하므로 $y=x$ 다.

## H∞ 노름과 H∞ 문제

안정한 전달 함수 $T$ 의 **H∞ 노름(H-infinity norm)** 은 다음 값이다.

$$
\Vert T\Vert\_\infty=\sup\_{\omega\in\mathbb R}\sigma\_{\max}\bigl(T(i\omega)\bigr)
$$

$\sigma\_{\max}$ 는 가장 큰 특이값이다. 이 값은 에너지가 유한한 모든 입력 $w$ 에 대한 $\Vert z\Vert\_{L^2}/\Vert w\Vert\_{L^2}$ 의 상한과 같다. 직관 절의 배율의 최댓값 $\sqrt{1+K^2}/K$ 가 닫힌 계의 H∞ 노름이다.

측정 $y$ 에서 입력 $u$ 를 만드는 제어기 $K$ 가 닫힌 계를 안정하게 하고 $w$ 에서 $z$ 까지의 전달 함수 $T\_{zw}$ 가 $\Vert T\_{zw}\Vert\_\infty\lt\gamma$ 를 만족하게 하는 것을 **H∞ 문제(H-infinity problem)** 라 한다. 이런 $K$ 가 있는 $\gamma$ 의 하한을 최적값 $\gamma^\ast$ 라 한다. 직관 절의 수레에서 일정한 바람이 $\vert z\vert\ge\vert w\vert$ 를 강제하므로 $\gamma^\ast\ge 1$ 이고, 상태 되먹임 $u=-Kx$ 로는 $1$ 에 닿지 않는다.

# 성질

## 상태 되먹임

$D\_{12}^{\mathsf T}C\_1=0$, $D\_{12}^{\mathsf T}D\_{12}=I$ 이고, $(A,B\_2)$ 가 안정화 가능하며, $(C\_1,A)$ 가 허수축 위에 관측 불가능한 모드를 갖지 않는다고 하자. 상태를 측정할 때 $\Vert T\_{zw}\Vert\_\infty\lt\gamma$ 인 상태 되먹임이 있을 필요충분조건은 다음 [대수 Riccati 방정식](algebraic-riccati-equation.md)이 $X\succeq 0$ 인 안정화 해를 갖는 것이다[^1].

$$
A^{\mathsf T}X+XA+X\bigl(\gamma^{-2}B\_1B\_1^{\mathsf T}-B\_2B\_2^{\mathsf T}\bigr)X+C\_1^{\mathsf T}C\_1=0
$$

해가 있으면 $u=-B\_2^{\mathsf T}Xx$ 가 그런 되먹임이다. 선형 이차 조절기의 Riccati 방정식과 다른 것은 가운데 항의 $\gamma^{-2}B\_1B\_1^{\mathsf T}$ 하나다.

직관 절의 수레에서 이 방정식은 $X^2(\gamma^{-2}-1)+1=0$ 이고, $\gamma\gt 1$ 일 때 $X=\gamma/\sqrt{\gamma^2-1}$ 이다. $\gamma\to\infty$ 이면 $X\to 1$ 로 선형 이차 조절기의 이득이 되고, $\gamma\to 1$ 이면 $X\to\infty$ 다. $X^2=\gamma^2/(\gamma^2-1)\gt 1/(\gamma^2-1)$ 이므로 $K=X$ 는 직관 절의 조건을 만족한다.

증명의 요지. $V(x)=x^{\mathsf T}Xx$ 를 시간으로 미분하고 Riccati 방정식을 쓰면 제곱을 완성할 수 있다.

$$
\dot V+\vert z\vert^2-\gamma^2\vert w\vert^2=\bigl\vert u+B\_2^{\mathsf T}Xx\bigr\vert^2-\gamma^2\bigl\vert w-\gamma^{-2}B\_1^{\mathsf T}Xx\bigr\vert^2
$$

$u=-B\_2^{\mathsf T}Xx$ 이면 우변이 $0$ 이하이고, $x(0)=0$ 에서 적분하면 $\Vert z\Vert^2\le\gamma^2\Vert w\Vert^2$ 이다. 오른쪽 둘째 항에서 $w=\gamma^{-2}B\_1^{\mathsf T}Xx$ 가 가장 나쁜 외란이다. 이 식은 제어기와 외란이 $\Vert z\Vert^2-\gamma^2\Vert w\Vert^2$ 를 두고 겨루는 미분 게임의 값 함수가 $V$ 라는 것을 보인다.

## 출력 되먹임

측정이 $y=C\_2x+D\_{21}w$ 뿐이면 쌍대인 둘째 Riccati 방정식이 필요하다.

$$
AY+YA^{\mathsf T}+Y\bigl(\gamma^{-2}C\_1^{\mathsf T}C\_1-C\_2^{\mathsf T}C\_2\bigr)Y+B\_1B\_1^{\mathsf T}=0
$$

**정리(Doyle–Glover–Khargonekar–Francis, 1989).** 정규화 가정 아래에서 $\Vert T\_{zw}\Vert\_\infty\lt\gamma$ 인 안정화 제어기가 있을 필요충분조건은 다음 셋이다[^1].

1. 첫 Riccati 방정식이 안정화 해 $X\succeq 0$ 을 갖는다.
2. 둘째 Riccati 방정식이 안정화 해 $Y\succeq 0$ 을 갖는다.
3. $XY$ 의 스펙트럼 반지름이 $\gamma^2$ 미만이다.

셋이 성립하면 상태 관측기와 상태 되먹임을 이은 중심 제어기가 차원이 장치와 같은 꼴로 적힌다. $\gamma\to\infty$ 이면 첫 방정식은 선형 이차 조절기의 방정식, 둘째는 [Kalman 필터](kalman-filter.md)의 정상 상태 방정식이 되고, 중심 제어기는 선형 이차 Gauss 제어기가 된다.

## 최적값의 계산

$\gamma$ 가 줄면 세 조건 가운데 하나가 처음 깨지는 값이 $\gamma^\ast$ 다. 각 Riccati 방정식의 안정화 해는 Hamilton 행렬이 허수축 위에 고윳값을 갖지 않을 때 존재하므로, [유계 실수 보조정리](bounded-real-lemma.md)의 노름 계산과 같은 방법으로 $\gamma$ 를 이분 탐색한다.

## 선형 행렬 부등식 판본

Riccati 방정식 대신 유계 실수 보조정리의 행렬 부등식에 제어기 변수를 넣어도 같은 판정이 나온다. Gahinet 과 Apkarian 은 출력 되먹임 문제를 $X$, $Y$ 에 대한 선형 행렬 부등식 둘과 결합 조건 하나로 적었고, 이 꼴은 정규화 가정이 없어도 쓰인다[^2].

# 활용

- 강건 안정성. 모형 오차를 노름이 $1/\gamma$ 이하인 모르는 부분 $\Delta$ 로 두면, 작은 이득 정리에 따라 $\Vert T\_{zw}\Vert\_\infty\lt\gamma$ 인 제어기는 그런 모든 $\Delta$ 에 대해 닫힌 계를 안정하게 한다.
- 혼합 감도 설계. 추종 오차, 제어 입력, 측정 잡음의 영향에 진동수마다 다른 가중치를 곱해 $z$ 로 묶고 H∞ 문제를 푼다. 낮은 진동수에서 추종을, 높은 진동수에서 잡음 차단을 요구하는 설계가 한 번에 된다.
- 고리 모양 다듬기. McFarlane 과 Glover 는 원하는 개루프 모양을 먼저 정하고, 그 모양의 정규화 서로소 분해에 대한 H∞ 문제를 풀어 강건성을 더하는 방법을 만들었다[^3].
- [적분 이차 제약](integral-quadratic-constraints.md)과 [Zames–Falb 승수](zames-falb-multipliers.md)로 비선형 부분을 다룰 때, 승수를 고른 뒤의 판정은 가중치를 곱한 H∞ 노름 조건이 된다.

[^1]: J. C. Doyle, K. Glover, P. P. Khargonekar, B. A. Francis, "State-space solutions to standard H2 and H∞ control problems", *IEEE Transactions on Automatic Control* 34 (1989), 831–847.
[^2]: P. Gahinet, P. Apkarian, "A linear matrix inequality approach to H∞ control", *International Journal of Robust and Nonlinear Control* 4 (1994), 421–448.
[^3]: D. McFarlane, K. Glover, "A loop-shaping design procedure using H∞ synthesis", *IEEE Transactions on Automatic Control* 37 (1992), 759–769.

# 연관 문서

## 선수지식

- [유계 실수 보조정리](bounded-real-lemma.md)
- [대수 Riccati 방정식](algebraic-riccati-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra #analysis
