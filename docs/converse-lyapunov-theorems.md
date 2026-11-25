# 역 Lyapunov 정리

# 개요

**역 Lyapunov 정리(converse Lyapunov theorem)** 는 평형점이 점근 안정이면 그 평형점에 대한 엄격한 Lyapunov 함수가 반드시 존재한다는 정리다. Lyapunov 함수를 찾으면 안정성이 증명되지만, 찾지 못했을 때 함수가 없는 것인지 아직 못 찾은 것인지는 직접법만으로 알 수 없다.

역 Lyapunov 정리는 점근 안정인 계의 해를 따라 남은 거리를 적분해 Lyapunov 함수를 만들어, 점근 안정성과 엄격한 Lyapunov 함수의 존재가 동치임을 보인다.

# 직관

$\dot x=-x^3$ 의 평형점 $0$ 은 점근 안정이다. 해는 다음과 같다.

$$
\varphi\_t(x)=\frac{x}{\sqrt{1+2x^2t}}
$$

[Lyapunov 안정성](lyapunov-stability.md)의 직접법에 쓸 함수를 해로부터 만들려고, $x$ 에서 출발한 해가 앞으로 원점에서 얼마나 떨어져 있을지를 적분한다. $\int\_0^\infty\varphi\_t(x)^2\thinspace dt$ 는 피적분함수가 $1/(2t)$ 처럼 줄어 $\log$ 로 발산한다. 해가 $1/\sqrt{2t}$ 의 빠르기로만 원점에 다가가기 때문이다.

제곱 대신 네제곱을 적분하면 피적분함수가 $1/(4t^2)$ 처럼 줄어 수렴한다.

$$
V(x)=\int\_0^\infty\varphi\_t(x)^4\thinspace dt=\int\_0^\infty\frac{x^4}{(1+2x^2t)^2}\thinspace dt=\frac{x^2}{2}
$$

$x$ 에서 출발해 시간 $s$ 가 지난 점에서는 $V(\varphi\_s(x))=\int\_s^\infty\varphi\_t(x)^4\thinspace dt$ 이므로, 해를 따라 미분하면 $\dot V=-x^4\lt 0$ 이다. 해를 적분해 얻은 $V$ 가 엄격한 Lyapunov 함수다.

# 정의

$f$ 가 국소 Lipschitz 이고 $f(0)=0$ 인 자율계 $\dot x=f(x)$ 의 해를 $\varphi\_t(x)$ 로 쓴다. 원점이 점근 안정일 때 원점으로 가는 해의 초기값 전체를 **끌림 영역(domain of attraction)** 이라 하고 $\mathcal A$ 로 쓴다. 직관 절의 계에서는 $\mathcal A=\mathbb R$ 이다.

함수 $G:\lbrack 0,\infty)\to\lbrack 0,\infty)$ 가 연속이고 증가하며 $G(0)=0$ 일 때, 다음 함수를 해를 따라 $G$ 를 적분한 함수라 한다.

$$
V\_G(x)=\int\_0^\infty G\bigl(\vert\varphi\_t(x)\vert\bigr)\thinspace dt
$$

직관 절은 $G(s)=s^4$ 인 경우이고 $G(s)=s^2$ 이면 적분이 발산한다. $V\_G$ 가 유한하면 해를 따라 $\dot V\_G=-G(\vert x\vert)$ 다.

# 성질

## Massera 정리

$f$ 가 $C^1$ 이고 원점이 점근 안정이면, 끌림 영역 $\mathcal A$ 위에서 정의된 $C^1$ 함수 $V$ 가 존재해 $V(0)=0$, $x\ne 0$ 에서 $V(x)\gt 0$ 과 $\nabla V\cdot f(x)\lt 0$ 을 만족한다[^1].

증명의 요지. 점근 안정성으로 해가 원점에 다가가는 빠르기의 상한 $\vert\varphi\_t(x)\vert\le\beta(\vert x\vert,t)$ 가 있다. 여기서 $\beta$ 는 첫째 변수에 증가하고 둘째 변수에 $0$ 으로 감소한다. Massera 보조정리(Massera's lemma)로 $G$ 를 원점 근처에서 충분히 평평하게 골라 $\int\_0^\infty G(\beta(r,t))\thinspace dt$ 와 그 미분의 적분이 수렴하게 하면, $V\_G$ 가 원하는 함수다. 직관 절에서 네제곱이 제곱보다 평평해 적분이 수렴한 것과 같다.

Kurzweil 은 $f$ 가 연속이기만 해도 해가 유일하지 않을 수 있는 경우까지 넓히고 $V$ 를 매끄럽게 고를 수 있음을 보였다[^2].

## 지수 안정의 경우

원점이 $\vert\varphi\_t(x)\vert\le C\vert x\vert e^{-\lambda t}$ 로 지수 안정이고 $f$ 의 Jacobi 행렬이 유계이면, $G(s)=s^2$ 으로도 적분이 수렴한다. $T$ 를 충분히 크게 잡은 다음 함수는 상수 $c\_1,c\_2,c\_3,c\_4\gt 0$ 에 대해 네 부등식을 만족한다[^3].

$$
V(x)=\int\_0^T\vert\varphi\_t(x)\vert^2\thinspace dt
$$

$$
c\_1\vert x\vert^2\le V(x)\le c\_2\vert x\vert^2,\qquad\dot V\le-c\_3\vert x\vert^2,\qquad\vert\nabla V(x)\vert\le c\_4\vert x\vert
$$

선형계 $\dot x=Ax$ 에서 $A$ 의 고윳값이 모두 실부가 음수이면 $T=\infty$ 로 둘 수 있고, $V(x)=x^{\mathsf T}Px$ 의 $P=\int\_0^\infty e^{A^{\mathsf T}t}e^{At}\thinspace dt$ 는 Lyapunov 방정식 $A^{\mathsf T}P+PA=-I$ 의 해다.

## 섭동에 대한 강건성

지수 안정의 네 부등식을 쓰면 섭동된 계 $\dot x=f(x)+p(x)$ 에서 $\vert p(x)\vert\le\gamma\vert x\vert$ 이고 $\gamma\lt c\_3/c\_4$ 이면 다음이 나온다.

$$
\dot V\le-c\_3\vert x\vert^2+c\_4\gamma\vert x\vert^2\lt 0
$$

그래서 원점은 여전히 지수 안정이다. 점근 안정만 알 때도 Massera 정리의 $V$ 로 같은 논법을 쓰면, 충분히 작은 섭동 아래서 해가 원점 근처의 작은 집합으로 들어간다.

## 구성 문제와 Zubov 방정식

위 정리들은 해 $\varphi\_t$ 를 써서 $V$ 를 정의하므로 해를 모르면 $V$ 를 계산하지 못한다. Zubov 는 끌림 영역과 $V$ 를 함께 정하는 편미분방정식을 주었다[^4]. 양의 정부호 함수 $h$ 를 고르면 다음 방정식의 해 $V$ 가 $\mathcal A=\lbrace V\lt 1\rbrace$ 를 만족한다.

$$
\nabla V(x)\cdot f(x)=-h(x)\bigl(1-V(x)\bigr)
$$

# 활용

- [Sontag 공식](sontag-formula.md)의 Artstein 정리. 연속 되먹임이 원점을 안정화하면 닫힌 계에 역 Lyapunov 정리를 써서 제어 Lyapunov 함수를 얻으므로, 제어 Lyapunov 함수의 존재가 안정화 가능성의 필요조건이 된다.
- [입력 대 상태 안정성](input-to-state-stability.md)의 Sontag–Wang 정리. 입력 대 상태 안정에서 ISS(input-to-state stability) Lyapunov 함수가 존재함을 보이는 방향이 같은 구성을 입력이 있는 계로 넓힌 것이다.
- 끌림 영역의 추정. 다항식 계에서 Zubov 방정식이나 $\dot V\lt 0$ 조건을 제곱합(sum of squares) 다항식의 [반정부호 계획법](semidefinite-programming.md)으로 근사해 $V$ 를 찾고, 그 등위 집합으로 끌림 영역의 안쪽 근사를 얻는다.

[^1]: J. L. Massera, "On Liapounoff's conditions of stability", *Annals of Mathematics* 50 (1949), 705–721.
[^2]: J. Kurzweil, "On the inversion of Ljapunov's second theorem on stability of motion", *American Mathematical Society Translations, Series 2*, 24 (1963), 19–77. 원 논문은 *Czechoslovak Mathematical Journal* 6 (1956).
[^3]: H. K. Khalil, *Nonlinear Systems*, 3rd ed., Prentice Hall, 2002, 4.7 절.
[^4]: V. I. Zubov, *Methods of A. M. Lyapunov and Their Application*, Noordhoff, 1964.

# 연관 문서

## 선수지식

- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization
