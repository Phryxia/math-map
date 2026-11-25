# 작은 이득 정리

# 개요

**작은 이득 정리(small gain theorem)** 는 두 장치를 서로 되먹여 이었을 때, 한 바퀴 도는 동안 신호가 커지는 배율의 곱이 $1$ 보다 작으면 이은 계가 안정하다는 정리다. 장치 $1/(s+1)$ 의 출력을 시간 $\tau$ 만큼 늦춰 $k$ 배 한 뒤 빼서 되먹이면, $k=2$ 에서는 지연이 $\tau\approx 1.21$ 일 때 계가 진동하기 시작한다.

작은 이득 정리는 두 장치의 배율만 보므로, $k\lt 1$ 이면 지연이 얼마이든 계가 안정하다는 것을 지연을 계산하지 않고 보인다.

# 직관

장치 $G(s)=1/(s+1)$ 에 진동수 $\omega$ 의 사인파를 넣으면 진폭이 $1/\sqrt{1+\omega^2}$ 배가 된다. 이 배율은 $\omega=0$ 에서 가장 크고 그 값은 $1$ 이다. 지연은 진폭을 바꾸지 않으므로, 지연과 $k$ 배를 합친 부분의 배율은 모든 진동수에서 $k$ 다.

되먹임 고리를 한 바퀴 돈 신호의 진폭은 많아야 $k$ 배가 된다. $k\lt 1$ 이면 고리를 돌 때마다 진폭이 줄어들므로, 지연이 신호의 위상을 어떻게 돌려도 고리 안의 신호가 자라지 않는다.

$k=2$ 이면 $\omega=\sqrt3$ 에서 $G$ 의 배율이 $1/2$ 이고 한 바퀴의 배율이 정확히 $1$ 이다. 그 진동수에서 $G$ 가 위상을 $\pi/3$ 늦추므로, 지연이 나머지 $2\pi/3$ 를 늦추면 빼서 되먹인 신호가 원래 신호와 같은 위상으로 돌아온다. 그 지연은 $\tau=2\pi/(3\sqrt3)\approx 1.21$ 이다.

# 정의

## 이득

신호는 $\lbrack 0,\infty)$ 에서 정의되고 제곱 적분이 유한한 벡터값 함수이고, $\Vert\cdot\Vert$ 는 그 $L^2$ 노름이다. 신호를 신호로 보내는 인과적인 사상 $H$ 가 다음을 만족하는 $\gamma\ge 0$ 을 가지면 $H$ 는 유한 이득을 갖는다고 하고, 그런 $\gamma$ 의 하한을 $H$ 의 **이득(gain)** 이라 한다.

$$
\Vert Hu\Vert\le\gamma\Vert u\Vert+\beta\qquad(\text{모든 }u)
$$

$\beta$ 는 초기 상태에서 오는 상수다. 안정한 선형 시불변 장치 $G$ 의 이득은 [유계 실수 보조정리](bounded-real-lemma.md)의 H∞ 노름 $\Vert G\Vert\_\infty$ 다. 직관 절의 $G=1/(s+1)$ 의 이득은 $1$ 이고, $k$ 배 한 지연의 이득은 $\vert k\vert$ 다.

## 되먹임 연결

두 사상 $H\_1$, $H\_2$ 와 외부 입력 $u\_1$, $u\_2$ 에 대해 다음 식으로 이은 계를 **되먹임 연결(feedback interconnection)** 이라 한다.

$$
e\_1=u\_1-H\_2e\_2,\qquad e\_2=u\_2+H\_1e\_1
$$

모든 $u\_1$, $u\_2$ 에 대해 $e\_1$, $e\_2$ 가 하나씩 정해지면 연결이 잘 정의된다고 한다. 직관 절의 계는 $H\_1=G$, $H\_2$ 가 $k$ 배 한 지연인 경우다.

# 성질

## 작은 이득 정리

**정리(Zames, 1966).** 되먹임 연결이 잘 정의되고 $H\_1$, $H\_2$ 의 이득이 $\gamma\_1$, $\gamma\_2$ 이며 $\gamma\_1\gamma\_2\lt 1$ 이면 다음이 성립한다[^1].

$$
\Vert e\_1\Vert\le\frac{\Vert u\_1\Vert+\gamma\_2\Vert u\_2\Vert+\beta\_2+\gamma\_2\beta\_1}{1-\gamma\_1\gamma\_2}
$$

$e\_2$ 도 같은 꼴의 상한을 갖는다. 외부 입력의 에너지가 유한하면 고리 안 신호의 에너지도 유한하다.

증명의 요지. 두 식에 노름을 씌우면 $\Vert e\_1\Vert\le\Vert u\_1\Vert+\gamma\_2\Vert e\_2\Vert+\beta\_2$, $\Vert e\_2\Vert\le\Vert u\_2\Vert+\gamma\_1\Vert e\_1\Vert+\beta\_1$ 이다. 둘째를 첫째에 넣으면 $\Vert e\_1\Vert$ 이 양변에 남고, $1-\gamma\_1\gamma\_2\gt 0$ 으로 나누면 위 식이 나온다. 신호가 $L^2$ 에 있다는 것을 미리 알 수 없으므로, 실제 증명은 시각 $T$ 에서 자른 신호에 같은 계산을 하고 $T\to\infty$ 로 보낸다.

## 해의 존재

정리는 잘 정의된다는 것을 가정한다. $H\_1$ 과 $H\_2$ 가 $\gamma\_1\gamma\_2\lt 1$ 인 Lipschitz 상수를 갖는 사상이면, $e\_1\mapsto u\_1-H\_2(u\_2+H\_1e\_1)$ 은 축약이고 [축약사상 고정점 정리](banach-fixed-point.md)로 해가 하나 있다.

## 선형 시불변 판본

$H\_1=G\_1$, $H\_2=G\_2$ 가 안정한 전달 함수이면 조건은 $\Vert G\_1\Vert\_\infty\Vert G\_2\Vert\_\infty\lt 1$ 이다. 두 장치가 모두 선형 시불변이면 Nyquist 판정이 정확한 조건이고, 작은 이득 정리는 위상을 쓰지 않으므로 보수적이다. 직관 절에서 지연이 없으면 $1+k/(s+1)=0$ 의 근 $-1-k$ 는 모든 $k\gt -1$ 에서 왼쪽 반평면에 있지만, 작은 이득 정리는 $\vert k\vert\lt 1$ 만 준다.

## 강건 안정성

$G$ 가 안정한 전달 함수이고 $\Vert G\Vert\_\infty\lt 1/\delta$ 이면, 이득이 $\delta$ 이하인 모든 $\Delta$ 에 대해 $G$ 와 $\Delta$ 의 되먹임 연결이 안정하다. 거꾸로 선형 시불변 $\Delta$ 만 허용해도 $\Vert G\Vert\_\infty\ge 1/\delta$ 이면 이득이 $\delta$ 이하이고 연결을 불안정하게 하는 $\Delta$ 가 있다[^2]. 이 역 때문에 노름으로만 아는 모형 오차에 대해서는 $\Vert G\Vert\_\infty$ 가 정확한 판정량이다.

## 고리 변환

구간 조건 $\lbrack\alpha,\beta\rbrack$ 를 만족하는 비선형 부분은 중심 $(\alpha+\beta)/2$ 를 빼면 이득이 $(\beta-\alpha)/2$ 이하가 된다. 장치 쪽에 중심 이득을 되먹여 묶고 작은 이득 정리를 쓰면 [원 판정법](circle-criterion.md)의 원판 조건이 나온다[^1].

# 활용

- [H∞ 제어](h-infinity-control.md). 모형 오차의 이득이 $1/\gamma$ 이하라고 놓고, 강건 안정성 절에 따라 $\Vert T\_{zw}\Vert\_\infty\lt\gamma$ 인 제어기를 설계한다.
- 지연이 있는 계. 직관 절처럼 지연의 이득이 $1$ 이라는 것만 써서, 지연의 크기를 모를 때의 안정성을 판정한다.
- [적분 이차 제약](integral-quadratic-constraints.md). 노름 경계를 승수 $\mathrm{diag}(I,-I)$ 로 적으면 그 안정성 정리가 작은 이득 정리가 된다.
- 비선형 계의 연결. [입력 대 상태 안정성](input-to-state-stability.md)을 갖는 두 계를 이을 때 이득 함수의 합성이 항등함수보다 작으면 이은 계가 안정하다는 비선형 판본이 있다[^3].

[^1]: G. Zames, "On the input-output stability of time-varying nonlinear feedback systems, Part I and Part II", *IEEE Transactions on Automatic Control* 11 (1966), 228–238 and 465–476.
[^2]: K. Zhou, J. C. Doyle, K. Glover, *Robust and Optimal Control*, Prentice Hall, 1996, 9 장.
[^3]: Z.-P. Jiang, A. R. Teel, L. Praly, "Small-gain theorem for ISS systems and applications", *Mathematics of Control, Signals, and Systems* 7 (1994), 95–120.

# 연관 문서

## 선수지식

- [유계 실수 보조정리](bounded-real-lemma.md)

## 더 알아보기

- [H∞ 제어](h-infinity-control.md)
- [입력 대 상태 안정성](input-to-state-stability.md)

#optimization #analysis #functional_analysis
