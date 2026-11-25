# Barbalat 보조정리

# 개요

**Barbalat 보조정리(Barbalat's lemma)** 는 함수가 극한으로 수렴할 때 그 도함수도 $0$ 으로 가려면 무엇이 더 필요한지 답하는 정리다. 함숫값이 줄어들다 어떤 값에 멈추어도, 기울기가 이따금 짧게 $-1$ 까지 떨어졌다가 돌아오는 일은 끝없이 일어날 수 있다.

Barbalat 보조정리는 도함수가 갑자기 바뀌지 못하면, 곧 균등연속이면, 이런 일이 일어나지 않고 도함수가 $0$ 으로 간다고 답한다.

# 직관

양의 정수 $n$ 마다 $t=n$ 에서 높이 $1$, 밑변 $1/n^2$ 인 삼각형 모양으로 솟는 함수 $g(t)\ge 0$ 를 생각한다. 다음 함수를 둔다.

$$
f(t)=-\int\_0^t g(s)\thinspace ds
$$

$f$ 는 감소하고, 삼각형 하나의 넓이가 $1/(2n^2)$ 이므로 $f(t)$ 는 $-\sum 1/(2n^2)=-\pi^2/12$ 로 수렴한다. 그런데 $f'(n)=-g(n)=-1$ 이 모든 $n$ 에서 성립하므로 $f'$ 은 $0$ 으로 가지 않는다.

삼각형이 점점 좁아지는 것이 이 일을 가능하게 한다. 기울기가 $-1$ 까지 떨어졌다 돌아오는 데 걸리는 시간이 $1/n^2$ 으로 줄어, 그동안 $f$ 가 줄어드는 양도 $1/(2n^2)$ 으로 줄어든다.

기울기가 바뀌는 빠르기에 한계가 있으면 삼각형의 밑변이 일정한 길이 아래로 줄지 못한다. 그러면 기울기가 $-1$ 에 닿을 때마다 $f$ 가 일정한 양 이상 줄고, 이것이 끝없이 되풀이되면 $f$ 가 수렴할 수 없다.

# 정의

함수 $\phi:\lbrack 0,\infty)\to\mathbb R$ 가 [균등연속](uniform-continuity.md)이라는 것은 모든 $\varepsilon\gt 0$ 에 대해 $\delta\gt 0$ 이 있어, $\vert s-t\vert\lt\delta$ 인 모든 $s,t$ 에서 $\vert\phi(s)-\phi(t)\vert\lt\varepsilon$ 이라는 것이다. 직관 절의 $g$ 는 $t=n$ 근처에서 $1/(2n^2)$ 의 시간 동안 $1$ 만큼 바뀌므로 균등연속이 아니다.

**Barbalat 보조정리** 는 다음 진술이다[^1].

- 미분 가능한 $f$ 가 $t\to\infty$ 에서 유한한 극한을 가지고 $f'$ 이 균등연속이면 $f'(t)\to 0$ 이다.

같은 내용을 적분으로 쓰면, $\phi$ 가 균등연속이고 [이상적분](improper-integral.md) $\int\_0^\infty\phi(s)\thinspace ds$ 가 수렴하면 $\phi(t)\to 0$ 이다. $f(t)=\int\_0^t\phi$ 로 두면 두 진술이 같다.

# 성질

## 증명

$\phi$ 가 $0$ 으로 가지 않는다고 하자. $\varepsilon\gt 0$ 과 $t\_n\to\infty$ 가 있어 $\vert\phi(t\_n)\vert\ge\varepsilon$ 이다. 균등연속성으로 $\delta\gt 0$ 을 잡아 $\vert s-t\_n\vert\le\delta$ 이면 $\vert\phi(s)-\phi(t\_n)\vert\lt\varepsilon/2$ 가 되게 한다.

구간 $\lbrack t\_n,t\_n+\delta\rbrack$ 에서 $\phi$ 는 $\phi(t\_n)$ 과 부호가 같고 절댓값이 $\varepsilon/2$ 보다 크므로 다음이 성립한다.

$$
\Bigl\vert\int\_{t\_n}^{t\_n+\delta}\phi(s)\thinspace ds\Bigr\vert\ge\frac{\varepsilon\delta}{2}
$$

이상적분이 수렴하면 Cauchy 조건으로 이 적분이 $n\to\infty$ 에서 $0$ 으로 가야 하므로 모순이다.

## 충분조건

$f$ 가 두 번 미분 가능하고 $f''$ 이 유계이면 $f'$ 은 Lipschitz 이므로 균등연속이다. 실제 쓰임에서는 대개 이 조건으로 확인한다. 직관 절의 $f$ 에서는 $f''$ 이 $t=n$ 근처에서 $2n^2$ 정도로 커져 유계가 아니다.

## 극한만으로는 부족함

$f$ 가 수렴해도 $f'$ 은 $0$ 으로 가지 않을 수 있고, $f'$ 이 $0$ 으로 가도 $f$ 는 수렴하지 않을 수 있다. $f(t)=\sin(t^2)/t$ 는 $0$ 으로 가지만 $f'(t)=2\cos(t^2)-\sin(t^2)/t^2$ 은 $-2$ 와 $2$ 근처를 끝없이 오간다. $f(t)=\log t$ 는 $f'=1/t\to 0$ 이지만 발산한다.

## Lyapunov 꼴의 따름정리

$V(t)$ 가 아래로 유계이고 $\dot V\le 0$ 이며 $\dot V$ 가 균등연속이면 $\dot V(t)\to 0$ 이다[^2]. $V$ 가 감소하고 아래로 유계이므로 극한을 가지고, 보조정리를 $f=V$ 에 쓴다.

시간에 의존하는 계 $\dot x=F(t,x)$ 에서는 [Lyapunov 안정성](lyapunov-stability.md)의 LaSalle 불변 원리를 쓸 수 없고, 이 따름정리가 그 자리를 대신한다. $\dot V=-W(x(t))$ 꼴이면 $W(x(t))\to 0$ 이 나온다.

# 활용

- [적응 제어](adaptive-control.md)의 추적 문제. 추적 오차 $e$ 와 매개변수 오차로 만든 $V$ 가 $\dot V=-e^2$ 을 만족하면 $e$ 와 매개변수 오차가 유계이다. 기준 신호가 유계이면 $\dot e$ 가 유계라 $e^2$ 의 도함수가 유계이고, 따름정리로 $e(t)\to 0$ 이다.
- 시변 계의 수렴 증명. 기준 궤적이나 시간에 따라 바뀌는 이득이 들어간 닫힌 계에서, 상태가 $0$ 으로 가는 것을 Lyapunov 함수의 미분이 $0$ 으로 가는 것으로 보인다.
- 신경망과 최적화의 연속 시간 해석. 기울기 흐름 $\dot\theta=-\nabla L(\theta)$ 에서 $L$ 이 아래로 유계이고 $\nabla L$ 이 Lipschitz 이며 궤적이 유계이면 $\Vert\nabla L(\theta(t))\Vert^2$ 이 $0$ 으로 간다.

[^1]: I. Barbălat, "Systèmes d'équations différentielles d'oscillations non linéaires", *Revue de Mathématiques Pures et Appliquées* 4 (1959), 267–270.
[^2]: H. K. Khalil, *Nonlinear Systems*, 3rd ed., Prentice Hall, 2002, 8.3 절.

# 연관 문서

## 선수지식

- [균등연속](uniform-continuity.md)
- [이상적분](improper-integral.md)

## 더 알아보기

- [적응 제어](adaptive-control.md)

#analysis #optimization
