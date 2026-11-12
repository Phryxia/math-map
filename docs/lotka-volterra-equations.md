# Lotka–Volterra 방정식

# 개요

**Lotka–Volterra 방정식(Lotka–Volterra equations)** 은 서로 잡아먹거나 경쟁하는 생물 종들의 개체 수가 서로의 수에 따라 늘고 주는 것을 나타내는 미분방정식이다. 토끼는 여우가 없으면 불어나고, 여우는 토끼를 먹어야 산다. 토끼가 늘면 여우가 늘고, 여우가 늘면 토끼가 준다. 이 오르내림이 점점 줄어 한 값에 머무는지, 같은 폭으로 끝없이 되풀이되는지가 이 방정식의 물음이다.

Lotka–Volterra 방정식은 해를 따라 값이 변하지 않는 함수를 찾아, 해가 같은 닫힌 곡선을 계속 돈다는 것을 보인다.

# 직관

토끼의 수를 $x$, 여우의 수를 $y$ 라 하자. 토끼는 여우가 없으면 단위 시간마다 자기 수의 $2$ 배 속도로 늘고, 여우 한 마리마다 그 속도가 $1$ 씩 준다. 여우는 토끼가 없으면 자기 수의 속도로 줄고, 토끼 한 마리마다 그 속도가 $1$ 씩 는다. 이것을 식으로 적으면 다음과 같다.

$$
\dot x=x(2-y),\qquad \dot y=y(x-1)
$$

$x=1$, $y=2$ 이면 둘 다 변하지 않는다. $x=1$, $y=1$ 에서 출발하면 $\dot x\gt 0$ 이라 토끼가 늘고, 토끼가 $1$ 을 넘으면 여우가 는다. 여우가 $2$ 를 넘으면 토끼가 줄고, 토끼가 $1$ 아래로 내려가면 여우도 준다. 상태 $(x,y)$ 는 점 $(1,2)$ 둘레를 시계 반대 방향으로 돈다.

돌면서 $(1,2)$ 에 다가가는지 멀어지는지는 식을 풀지 않고 정할 수 있다. 두 식을 나누면 $\frac{dy}{dx}=\frac{y(x-1)}{x(2-y)}$ 이고, 변수를 갈라 적분하면 다음 함수가 해를 따라 일정하다.

$$
H(x,y)=x-\log x+y-2\log y
$$

$H$ 는 $(1,2)$ 에서 가장 작고 그 둘레의 등위선은 닫힌 곡선이다. 해는 처음 지나간 등위선을 떠나지 못하므로, 오르내림은 줄지도 커지지도 않고 같은 곡선을 따라 되풀이된다.

# 정의

## 포식자와 피식자 방정식

$\alpha,\beta,\gamma,\delta\gt 0$ 일 때 $x,y\gt 0$ 위의 다음 방정식을 **포식자와 피식자 Lotka–Volterra 방정식(predator–prey Lotka–Volterra equations)** 이라 한다[^1][^2].

$$
\dot x=x(\alpha-\beta y),\qquad \dot y=y(\delta x-\gamma)
$$

$x$ 는 피식자, $y$ 는 포식자의 수다. $\alpha$ 는 피식자의 증가율, $\gamma$ 는 포식자의 감소율이고, $\beta$ 와 $\delta$ 는 만남이 두 종의 증감에 미치는 정도다. 직관 절의 토끼와 여우는 $\alpha=2$, $\beta=\gamma=\delta=1$ 인 경우다.

내부의 평형점은 $(x^\ast,y^\ast)=(\gamma/\delta,\thinspace\alpha/\beta)$ 하나다. 직관 절에서는 $(1,2)$ 다.

## 일반 Lotka–Volterra 방정식

종이 $n$ 개일 때 $x\in\mathbb R^n_{\ge 0}$ 위의 다음 방정식을 **Lotka–Volterra 방정식** 이라 한다.

$$
\dot x_i=x_i\Big(r_i+\sum_{j=1}^nb_{ij}x_j\Big)\qquad(i=1,\dots,n)
$$

$r_i$ 는 종 $i$ 가 홀로 있을 때의 증가율이고, $b_{ij}$ 는 종 $j$ 한 마리가 종 $i$ 의 증가율을 바꾸는 양이다. 포식자와 피식자 방정식은 $n=2$, $r=(\alpha,-\gamma)$, $b_{12}=-\beta$, $b_{21}=\delta$, $b_{11}=b_{22}=0$ 인 경우다. 모든 $i\ne j$ 에서 $b_{ij}\lt 0$ 이면 **경쟁 방정식(competitive Lotka–Volterra equations)** 이라 한다.

# 성질

## 보존량과 주기해

정리. 포식자와 피식자 방정식의 해 가운데 내부 평형점이 아닌 것은 모두 주기해다[^1].

$$
H(x,y)=\delta x-\gamma\log x+\beta y-\alpha\log y
$$

증명의 요지. 해를 따라 미분하면 다음이 나온다.

$$
\dot H=\Big(\delta-\frac{\gamma}{x}\Big)\dot x+\Big(\beta-\frac{\alpha}{y}\Big)\dot y=(\delta x-\gamma)(\alpha-\beta y)+(\beta y-\alpha)(\delta x-\gamma)=0
$$

$H$ 는 순볼록이고 $(x^\ast,y^\ast)$ 에서 최소이므로 그보다 큰 등위선은 평형점을 지나지 않는 닫힌 곡선이다. 해는 그 곡선 위를 멈추지 않고 움직이므로 곡선을 한 바퀴 돌아 처음 점으로 돌아온다.

$H-H(x^\ast,y^\ast)$ 는 [Lyapunov 안정성](lyapunov-stability.md)의 Lyapunov 함수이고 $\dot H=0$ 이므로, 내부 평형점은 안정하지만 점근 안정하지 않다.

## 선형화의 실패

내부 평형점에서 Jacobi 행렬과 그 고윳값은 다음과 같다.

$$
\begin{pmatrix}0&-\beta\gamma/\delta\cr \alpha\delta/\beta&0\end{pmatrix},\qquad \lambda=\pm i\sqrt{\alpha\gamma}
$$

실수부가 $0$ 이므로 선형화로는 안정성이 판정되지 않고, 보존량 $H$ 가 있어야 주기해임이 드러난다. 평형점 가까운 주기해의 주기는 $2\pi/\sqrt{\alpha\gamma}$ 에 가깝다. 직관 절에서 고윳값은 $\pm i\sqrt2$ 이고 작은 진동의 주기는 약 $4.44$ 다.

## 시간 평균

정리. 주기가 $T$ 인 해에서 두 종의 시간 평균은 평형점의 값과 같다[^2].

$$
\frac1T\int_0^Tx(t)\thinspace dt=\frac{\gamma}{\delta},\qquad \frac1T\int_0^Ty(t)\thinspace dt=\frac{\alpha}{\beta}
$$

증명의 요지. $\frac{d}{dt}\log x=\alpha-\beta y$ 를 한 주기 동안 적분하면 왼쪽은 $\log x(T)-\log x(0)=0$ 이므로 $\alpha T=\beta\int_0^Ty\thinspace dt$ 다. $y$ 의 식에서 같은 방법으로 $x$ 의 평균이 나온다.

## 자기 억제와 점근 안정성

피식자에 자기 억제 항을 더한 방정식 $\dot x=x(\alpha-\beta y-\varepsilon x)$, $\dot y=y(\delta x-\gamma)$ 를 보자. $\varepsilon\gt 0$ 이 작으면 내부 평형점 $(x^\ast,y^\ast)$ 가 있고, $H$ 에서 $\gamma/\delta$ 와 $\alpha/\beta$ 를 $x^\ast$ 와 $y^\ast$ 로 바꾼 함수 $\delta(x-x^\ast\log x)+\beta(y-y^\ast\log y)$ 를 해를 따라 미분하면 다음이 나온다.

$$
\dot H=-\varepsilon\delta(x-x^\ast)^2\le 0
$$

$\dot H=0$ 인 직선 $x=x^\ast$ 위에 머무는 해는 평형점뿐이므로, LaSalle 불변 원리(LaSalle's invariance principle)로 평형점은 점근 안정하다. 그래서 $\varepsilon=0$ 의 닫힌 궤도들은 아무리 작은 $\varepsilon$ 에서도 사라지고 해는 나선을 그리며 평형점에 다가간다.

## 두 종의 경쟁

경쟁 방정식 $\dot x_1=x_1(1-x_1-ax_2)$, $\dot x_2=x_2(1-bx_1-x_2)$ 에서 $a,b\gt 0$ 이다. $a\lt 1$, $b\lt 1$ 이면 내부 평형점 $\big((1-a)/(1-ab),\thinspace(1-b)/(1-ab)\big)$ 이 점근 안정하고 두 종이 함께 산다. $a\gt 1$, $b\gt 1$ 이면 내부 평형점이 안장점이고, 처음 상태에 따라 한 종만 남는다[^1].

## 복제자 방정식과의 동치

전략이 $n$ 개인 [복제자 방정식](replicator-equation.md)은 $y_i=x_i/x_n$ 으로 좌표를 바꾸고 시간을 다시 재면 종이 $n-1$ 개인 Lotka–Volterra 방정식이 된다[^1]. 이득 행렬 $A$ 에서 계수는 $r_i=a_{in}-a_{nn}$, $b_{ij}=a_{ij}-a_{nj}$ 다.

# 활용

- 어업. 두 종을 같은 비율 $\varepsilon$ 으로 잡으면 $\alpha$ 가 $\alpha-\varepsilon$ 으로, $\gamma$ 가 $\gamma+\varepsilon$ 으로 바뀐다. 시간 평균 정리로 피식자의 평균 $(\gamma+\varepsilon)/\delta$ 는 늘고 포식자의 평균 $(\alpha-\varepsilon)/\beta$ 는 준다. Volterra 는 어획이 줄었던 시기에 포식 어종의 비율이 늘어난 관측을 이것으로 설명했다[^2].
- 화학 반응. 자기 촉매 반응 두 단계의 농도가 같은 꼴의 방정식을 따라 진동한다는 것을 Lotka 가 보였다[^3].
- 진화 게임. 복제자 방정식과의 동치로 게임의 균형과 종의 공존을 한 방정식으로 분석한다.

[^1]: Josef Hofbauer, Karl Sigmund, *Evolutionary Games and Population Dynamics*, Cambridge University Press, 1998, Ch. 2–5, 7.
[^2]: Vito Volterra, "Fluctuations in the abundance of a species considered mathematically", *Nature* 118 (1926), 558–560.
[^3]: Alfred J. Lotka, "Analytical note on certain rhythmic relations in organic systems", *Proceedings of the National Academy of Sciences* 6 (1920), 410–415.

# 연관 문서

## 선수지식

- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization
