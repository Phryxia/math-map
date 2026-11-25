# 역진 설계

# 개요

**역진 설계(backstepping)** 는 입력이 적분기 여러 개를 거쳐 상태에 닿는 비선형 계의 안정화 제어기를, 입력에서 가장 먼 식부터 한 단계씩 거슬러 오며 만드는 방법이다. 계 $\dot x\_1=x\_1^2+x\_2$, $\dot x\_2=u$ 에서 입력 $u$ 는 $x\_2$ 를 바꿀 뿐이고 $x\_1$ 의 식에는 $x\_2$ 를 거쳐서만 들어간다. 이 경우 $u$ 를 바로 정하는 공식이 눈에 보이지 않는다.

역진 설계는 먼저 $x\_2$ 를 입력으로 보고 $x\_1$ 을 안정화하는 값을 정한 뒤, 실제 $x\_2$ 가 그 값을 따라가도록 $u$ 를 정한다. 단계마다 [Lyapunov 안정성](lyapunov-stability.md)의 Lyapunov 함수에 제곱항 하나를 더해 닫힌 계의 Lyapunov 함수를 함께 만든다.

# 직관

개요의 계에서 $x\_2$ 를 마음대로 정할 수 있다고 하자. $x\_2=-x\_1^2-x\_1$ 이면 첫 식이 $\dot x\_1=-x\_1$ 이 되고, $V\_1=x\_1^2/2$ 는 $\dot V\_1=-x\_1^2$ 로 줄어든다.

실제 $x\_2$ 는 이 값과 다르므로 차이 $z=x\_2+x\_1^2+x\_1$ 을 새 변수로 둔다. 첫 식은 $\dot x\_1=-x\_1+z$ 가 되고, $z$ 는 다음 식을 따른다.

$$
\dot z=u+(2x\_1+1)(x\_1^2+x\_2)
$$

$V=x\_1^2/2+z^2/2$ 로 두면 다음이 나온다.

$$
\dot V=-x\_1^2+x\_1z+z\bigl(u+(2x\_1+1)(x\_1^2+x\_2)\bigr)
$$

괄호 안이 $-x\_1-z$ 가 되도록 다음 $u$ 를 고른다.

$$
u=-x\_1-z-(2x\_1+1)(x\_1^2+x\_2)
$$

그러면 $\dot V=-x\_1^2-z^2$ 이므로 $(x\_1,z)$ 가, 따라서 $(x\_1,x\_2)$ 가 원점으로 간다. $\dot V$ 의 교차항 $x\_1z$ 를 $u$ 로 지운 것이 이 계산의 요점이다.

# 정의

## 제어 Lyapunov 함수

계 $\dot x=f(x)+g(x)u$ 에 대해 양의 정부호이고 방사적으로 비유계인 매끄러운 함수 $V$ 가 모든 $x\ne 0$ 에서 다음을 만족하면 **제어 Lyapunov 함수(control Lyapunov function)** 라 한다.

$$
\inf\_u\nabla V(x)\cdot\bigl(f(x)+g(x)u\bigr)\lt 0
$$

직관 절의 $V=x\_1^2/2+z^2/2$ 는 개요의 계의 제어 Lyapunov 함수다. Artstein 과 Sontag 은 제어 Lyapunov 함수가 있으면 원점을 대역 점근 안정하게 하는 되먹임이 원점 밖에서 매끄럽게 존재함을 보였다[^1]. 그 되먹임을 $V$ 의 미분값으로 적은 식이 [Sontag 공식](sontag-formula.md)이다.

## 엄격 되먹임 꼴

다음 꼴의 계를 **엄격 되먹임 꼴(strict-feedback form)** 이라 한다. 각 $g\_i$ 는 $0$ 이 되지 않는다.

$$
\begin{aligned}
\dot x\_i&=f\_i(x\_1,\dots,x\_i)+g\_i(x\_1,\dots,x\_i)\thinspace x\_{i+1}\qquad(i=1,\dots,n-1)\cr
\dot x\_n&=f\_n(x\_1,\dots,x\_n)+g\_n(x\_1,\dots,x\_n)\thinspace u
\end{aligned}
$$

$i$ 번째 식의 우변에는 $x\_{i+1}$ 까지만 나온다. 개요의 계는 $n=2$, $f\_1=x\_1^2$, $g\_1=1$, $f\_2=0$, $g\_2=1$ 인 경우다.

# 성질

## 적분기 역진 보조정리

계 $\dot x=f(x)+g(x)\xi$ 에서 $\xi=\varphi(x)$ 가 원점을 안정화하고, Lyapunov 함수 $V$ 가 $\nabla V\cdot(f+g\varphi)\le-W(x)$ 를 만족한다고 하자. 여기서 $W$ 는 양의 정부호다. 적분기를 붙인 계 $\dot x=f(x)+g(x)\xi$, $\dot\xi=u$ 에서 $z=\xi-\varphi(x)$, $k\gt 0$ 으로 두고 다음 되먹임을 쓰면 원점이 대역 점근 안정이다[^2].

$$
u=\nabla\varphi(x)\cdot\bigl(f(x)+g(x)\xi\bigr)-\nabla V(x)\cdot g(x)-kz
$$

증명의 요지. $V\_a=V+z^2/2$ 를 미분하면 다음이 나온다.

$$
\dot V\_a=\nabla V\cdot(f+g\varphi)+z\Bigl(\nabla V\cdot g+u-\nabla\varphi\cdot(f+g\xi)\Bigr)
$$

위 $u$ 를 넣으면 괄호가 $-kz$ 가 되어 $\dot V\_a\le-W(x)-kz^2$ 이다. 직관 절의 계산은 $\varphi=-x\_1^2-x\_1$, $V=x\_1^2/2$, $k=1$ 인 경우다.

## 엄격 되먹임 꼴의 재귀

엄격 되먹임 꼴에서는 $x\_2$ 를 가상 입력으로 보고 첫 식을 안정화한 뒤, 보조정리를 $x\_2$, $x\_3$, $\dots$, $x\_n$ 의 차례로 $n-1$ 번 쓴다. 각 단계에서 $g\_i\ne 0$ 이므로 $x\_{i+1}$ 의 원하는 값을 나눗셈으로 정할 수 있다. 닫힌 계의 Lyapunov 함수는 $V\_1$ 에 차이 변수의 제곱 $n-1$ 개를 더한 것이다.

단계가 늘수록 가상 입력의 미분을 해석적으로 계산해야 하므로 제어 법칙의 항 수가 빠르게 는다. 가상 입력을 필터에 통과시켜 미분을 근사하는 판본이 이 문제를 줄인다.

## 비선형 항을 지우지 않는 선택

$\varphi$ 는 비선형 항을 모두 지울 필요가 없다. $\dot x\_1=-x\_1^3+x\_2$ 처럼 비선형 항이 이미 안정화 쪽으로 작용하면 $\varphi=0$ 으로도 $\dot V\_1=-x\_1^4\lt 0$ 이다. 이런 항을 남기면 큰 상태에서 입력이 작아진다[^2].

# 활용

- 적응 제어. 매개변수를 모르는 엄격 되먹임 꼴에서, 매개변수 추정치의 갱신 법칙을 단계마다 Lyapunov 함수에 넣어 함께 정하는 적응 역진 설계가 있다[^2].
- 외란이 있는 계. 각 단계의 Lyapunov 함수가 외란을 입력으로 [입력 대 상태 안정성](input-to-state-stability.md)(input-to-state stability, ISS)의 ISS Lyapunov 함수가 되도록 감쇠항을 더하면, 외란 크기에 따라 정해지는 상태의 상한을 보장한다.
- 기계 계와 비행 제어. 위치와 속도, 자세각과 각속도처럼 입력이 적분기를 거쳐 들어가는 계가 엄격 되먹임 꼴이고, 로봇 팔과 비행체의 비선형 자세 제어에 쓰인다.

[^1]: E. D. Sontag, "A 'universal' construction of Artstein's theorem on nonlinear stabilization", *Systems & Control Letters* 13 (1989), 117–123.
[^2]: M. Krstić, I. Kanellakopoulos, P. V. Kokotović, *Nonlinear and Adaptive Control Design*, Wiley, 1995, 2 장과 4 장.

# 연관 문서

## 선수지식

- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

- [Sontag 공식](sontag-formula.md)

#optimization #analysis
