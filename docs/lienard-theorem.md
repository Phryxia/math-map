# Liénard 정리

# 개요

**Liénard 정리(Liénard's theorem)** 는 $x''+f(x)x'+g(x)=0$ 꼴의 2 계 방정식이 감쇠 계수 $f$ 와 복원력 $g$ 에 대한 몇 가지 부호 조건을 만족하면 원점을 둘러싼 극한 순환을 정확히 하나 갖고, 그 극한 순환이 안정하다는 정리다. [Poincaré–Bendixson 정리](poincare-bendixson.md)는 극한 순환이 있다는 것만 주고 몇 개인지는 말하지 않는데, 이 정리는 한 바퀴 동안 에너지가 얼마나 변하는지를 계산해 개수를 정한다.

# 직관

van der Pol 방정식 $x''-\mu(1-x^2)x'+x=0$ ($\mu\gt 0$) 은 원점이 불안정하고 먼 곳의 해가 안쪽으로 들어오므로, Poincaré–Bendixson 정리로 극한 순환이 적어도 하나 있다. 그 사이에 극한 순환이 여럿 겹겹이 있을 수도 있는지 알고 싶다.

$F(x)=\mu(x^3/3-x)$ 로 두고 새 변수 $y=x'+F(x)$ 를 쓰면 방정식은

$$
x'=y-F(x),\qquad y'=-x
$$

이 된다. 에너지 $E=\frac12(x^2+y^2)$ 를 해를 따라 미분하면

$$
E'=x\bigl(y-F(x)\bigr)+y(-x)=-xF(x)=\mu x^2\Bigl(1-\frac{x^2}{3}\Bigr)
$$

이다. $\vert x\vert\lt\sqrt3$ 인 띠에서는 에너지가 늘고, 그 밖에서는 준다.

양의 $y$ 축 위의 점 $(0,y_0)$ 에서 출발한 해가 음의 $y$ 축에 처음 닿을 때까지 에너지가 늘어난 양을 $\Delta(y_0)$ 이라 한다. $y_0$ 이 작으면 해는 띠 안에만 머물러 $\Delta(y_0)\gt 0$ 이다. $y_0$ 이 크면 해는 띠 밖에서 오래 머물러 $\Delta(y_0)\lt 0$ 이고, $y_0$ 이 커질수록 $\Delta(y_0)$ 은 줄어든다. 그러므로 $\Delta(y_0)=0$ 인 $y_0$ 이 하나뿐이다. 방정식이 $(x,y)\mapsto(-x,-y)$ 로 바꿔도 그대로이므로, $\Delta(y_0)=0$ 인 해는 나머지 반 바퀴를 대칭으로 돌아 출발점으로 돌아온다. 닫힌 궤도는 이 하나뿐이다.

# 정의

방정식 $x''+f(x)x'+g(x)=0$ 을 **Liénard 방정식(Liénard equation)** 이라 한다. $F(x)=\int_0^x f(s)\thinspace ds$ 로 두면 $y=x'+F(x)$ 에 대해 이 방정식은 평면계

$$
x'=y-F(x),\qquad y'=-g(x)
$$

와 같고, 이 좌표를 **Liénard 평면(Liénard plane)** 이라 한다.

**Liénard 정리.** 다음 조건이 성립하면 Liénard 방정식은 원점을 둘러싼 극한 순환을 정확히 하나 갖고, 그 극한 순환은 안정하다.[^1]

1. $f$ 와 $g$ 가 모든 $x$ 에서 연속미분가능하다.
2. $g$ 는 홀함수이고 $x\gt 0$ 에서 $g(x)\gt 0$ 이다.
3. $f$ 는 짝함수다.
4. $F$ 는 양의 영점 $a$ 를 하나만 갖고, $0\lt x\lt a$ 에서 $F(x)\lt 0$ 이며, $x\gt a$ 에서 $F(x)\gt 0$ 이고 감소하지 않으며, $x\to\infty$ 에서 $F(x)\to\infty$ 이다.

# 성질

## 증명의 요지

$G(x)=\int_0^x g(s)\thinspace ds$ 와 $E=\frac12y^2+G(x)$ 로 두면 $E'=-g(x)F(x)$ 이다. 조건 2 와 4 로 $\vert x\vert\lt a$ 에서 $E'\gt 0$ 이고 $\vert x\vert\gt a$ 에서 $E'\lt 0$ 이다. 양의 $y$ 축에서 출발해 음의 $y$ 축에 처음 닿을 때까지의 $E$ 의 변화 $\Delta(y_0)$ 은 작은 $y_0$ 에서 양수다. 해가 $x=a$ 를 넘는 $y_0$ 에서는 $\Delta(y_0)$ 이 $y_0$ 에 대해 순감소하고 $y_0\to\infty$ 에서 $-\infty$ 로 간다. $\Delta$ 의 영점이 하나뿐이고, 조건 2 와 3 이 주는 대칭 $(x,y)\mapsto(-x,-y)$ 로 그 해가 닫힌다. 영점의 안쪽에서는 $\Delta\gt 0$ 이고 바깥쪽에서는 $\Delta\lt 0$ 이므로 이웃한 해가 이 궤도로 다가가고, 극한 순환은 안정하다.

## van der Pol 방정식

$f(x)=-\mu(1-x^2)$, $g(x)=x$ 이면 $F(x)=\mu(x^3/3-x)$ 이고 $a=\sqrt3$ 이다. 조건 1 부터 4 가 모두 성립하므로 모든 $\mu\gt 0$ 에서 극한 순환이 하나뿐이다. $\mu$ 가 크면 Liénard 평면의 해는 곡선 $y=F(x)$ 를 따라 천천히 움직이다가 $F$ 의 극값에서 수평으로 빠르게 건너뛰고, 이 진동을 **이완 진동(relaxation oscillation)** 이라 한다.[^1]

## 극한 순환이 여럿인 경우

$f$ 가 짝함수가 아니거나 $F$ 의 양의 영점이 여럿이면 극한 순환이 여럿일 수 있다. 다항식 $F$ 의 차수가 높아지면 극한 순환의 개수도 늘어날 수 있다. 다항식 벡터장의 극한 순환 개수의 상한을 묻는 문제가 Hilbert 의 16 번째 문제의 둘째 부분이다.[^2]

# 활용

- **전기 진동 회로.** van der Pol 은 진공관 회로의 진동을 이 방정식으로 기술했다. 초깃값과 상관없이 같은 진폭의 진동으로 수렴한다는 것이 극한 순환의 유일성과 안정성이다.
- **극한 순환의 존재와 유일성.** Poincaré–Bendixson 정리가 존재를, 이 정리가 유일성을 준다. 둘 다 [Lyapunov 안정성](lyapunov-stability.md)의 Lyapunov 함수처럼 해를 구하지 않고 에너지의 증감만 계산한다.

[^1]: S. H. Strogatz, *Nonlinear Dynamics and Chaos*, 2nd ed., Westview Press, 2015, 7 장 4 절(Liénard 계), 7 장 5 절(이완 진동). 증명은 L. Perko, *Differential Equations and Dynamical Systems*, 3rd ed., Springer, 2001, 3 장 8 절.
[^2]: Yu. Ilyashenko, *Centennial history of Hilbert's 16th problem*, Bulletin of the American Mathematical Society **39** (2002), 301–354.

# 연관 문서

## 선수지식

- [Poincaré–Bendixson 정리](poincare-bendixson.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #topology
