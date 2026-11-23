# Kalman–Yakubovich–Popov 보조정리

# 개요

**Kalman–Yakubovich–Popov 보조정리(Kalman–Yakubovich–Popov lemma)** 는 선형 시불변 시스템의 전달 함수가 모든 진동수에서 만족하는 이차 부등식이, 행렬 $P$ 하나에 대한 선형 행렬 부등식과 동치라는 정리다. 입력 $u$ 를 받아 $\dot x=-x+u$ 로 움직이고 $y=x$ 를 내보내는 장치가 받은 에너지보다 많이 내보내지 않는지 보려면, 진동수 $\omega$ 마다 응답을 계산해 무한히 많은 부등식을 확인해야 할 것 같다.

이 보조정리는 그 무한히 많은 부등식을 대칭행렬 $P$ 하나를 찾는 [반정부호 계획법](semidefinite-programming.md) 문제로 바꾼다. 찾은 $P$ 는 $x^{\mathsf T}Px$ 꼴의 에너지 함수를 준다.

# 직관

$\dot x=-x+u$, $y=x$ 에 입력 $u=e^{i\omega t}$ 를 넣으면 정상 상태 출력은 $G(i\omega)e^{i\omega t}$ 이고 $G(s)=1/(s+1)$ 이다. 실수부는 다음과 같다.

$$
\mathrm{Re}\thinspace G(i\omega)=\mathrm{Re}\thinspace\frac{1-i\omega}{1+\omega^2}=\frac1{1+\omega^2}\ge 0
$$

모든 $\omega$ 에서 실수부가 음이 아니므로 어느 진동수의 입력도 평균적으로 장치에 에너지를 넣는 쪽이다.

같은 결론을 진동수 없이 얻는다. $V(x)=x^2$ 로 두면 $\dot V=2x\dot x=-2x^2+2xu\le 2uy$ 이고, 적분하면 $V(x(T))-V(x(0))\le 2\int\_0^Tu\thinspace y\thinspace dt$ 다. 저장된 에너지 $V$ 의 증가가 받은 일 $2\int uy$ 를 넘지 않는다. $V=Px^2$ 의 계수 $P=1$ 하나가 모든 $\omega$ 의 부등식을 대신한다.

# 정의

$A$ 는 $n\times n$ 실행렬, $B$ 는 $n\times m$ 실행렬, $M$ 은 $(n+m)\times(n+m)$ 실대칭행렬이다. $A$ 는 허수축 위에 고윳값이 없다고 한다. 진동수 $\omega$ 마다 $x\_\omega=(i\omega I-A)^{-1}B$ 로 두면 입력 $u e^{i\omega t}$ 에 대한 정상 상태가 $x\_\omega ue^{i\omega t}$ 다.

**Kalman–Yakubovich–Popov 보조정리** 는 $(A,B)$ 가 [가제어](controllability.md)일 때 다음 둘이 동치라는 정리다[^1][^2].

1. 모든 실수 $\omega$ 에서 다음 $m\times m$ 행렬이 음의 준정부호다.
2. 대칭행렬 $P$ 가 있어 아래 행렬 부등식이 성립한다.

$$
\begin{pmatrix}x\_\omega\cr I\end{pmatrix}^{\ast}M\begin{pmatrix}x\_\omega\cr I\end{pmatrix}\preceq 0,\qquad\begin{pmatrix}A^{\mathsf T}P+PA&PB\cr B^{\mathsf T}P&0\end{pmatrix}+M\preceq 0
$$

직관 절은 $A=-1$, $B=1$ 이고, 출력 $y=x$ 에 대해 이차형식 $-2uy$ 를 주는 다음 $M$ 인 경우다.

$$
M=\begin{pmatrix}0&-1\cr -1&0\end{pmatrix}
$$

 1 은 $-2\thinspace\mathrm{Re}\thinspace G(i\omega)\le 0$ 이고, 2 는 $P=1$ 에서 행렬 $\mathrm{diag}(-2,0)$ 이 음의 준정부호라는 것이다.

# 성질

## 2 에서 1

$x=x\_\omega u$ 로 두면 $i\omega x=Ax+Bu$ 다. 2 의 행렬에 $(x,u)$ 를 양쪽에서 곱하면 $P$ 가 든 부분이 다음이 된다.

$$
2\thinspace\mathrm{Re}\bigl(x^{\ast}P(Ax+Bu)\bigr)=2\thinspace\mathrm{Re}\bigl(i\omega\thinspace x^{\ast}Px\bigr)=0
$$

$x^{\ast}Px$ 가 실수이기 때문이다. 남는 것은 1 의 이차형식이므로 2 에서 1 이 나온다.

## 1 에서 2

역방향은 1 의 진동수 조건을 $(x,u)$ 에 대한 이차 부등식의 함의로 쓰고, 두 이차형식의 값의 집합이 볼록이라는 것을 써서 $P$ 를 분리 초평면의 계수로 얻는다. Yakubovich 의 원래 증명은 [S 보조정리](s-lemma.md)를 썼고, Rantzer 는 같은 볼록성 논증을 짧게 정리했다[^2]. 부등식을 모두 엄격한 부등식으로 바꾼 판본은 가제어성 없이 성립한다.

## 양의 실수 보조정리

$D$ 를 $m\times m$ 행렬, $C$ 를 $m\times n$ 행렬로 두고 $G(s)=C(sI-A)^{-1}B+D$ 라 한다. $M$ 의 블록을 $0$, $-C^{\mathsf T}$, $-C$, $-(D+D^{\mathsf T})$ 로 두면 1 은 모든 $\omega$ 에서 $G(i\omega)+G(i\omega)^{\ast}\succeq 0$ 이다. 2 는 다음이 된다.

$$
\begin{pmatrix}A^{\mathsf T}P+PA&PB-C^{\mathsf T}\cr B^{\mathsf T}P-C&-(D+D^{\mathsf T})\end{pmatrix}\preceq 0
$$

이것을 양의 실수 보조정리(positive real lemma)라 한다. $A$ 가 안정하면 $P$ 를 양의 정부호로 고를 수 있고, $x^{\mathsf T}Px$ 가 직관 절의 $V$ 처럼 저장 함수가 된다.

## Lyapunov 부등식과의 관계

$B=0$ 이고 $M=\mathrm{diag}(Q,0)$ 이면 2 는 $A^{\mathsf T}P+PA+Q\preceq 0$ 이다. 이것은 [Lyapunov 안정성](lyapunov-stability.md)의 Lyapunov 방정식을 부등식으로 쓴 것이다.

# 활용

- 절대 안정성. 선형 부분 $G$ 와 기울기가 구간 $\lbrack 0,k\rbrack$ 에 드는 비선형 되먹임으로 된 Lur'e 계에서, 원 판정법(circle criterion)과 Popov 판정법(Popov criterion)은 $G$ 의 진동수 조건이다. 이 보조정리는 그 조건에서 이차 Lyapunov 함수 $x^{\mathsf T}Px$ 를 만들어 안정성을 증명한다[^1].
- 유계 실수 보조정리. $M$ 의 블록을 $C^{\mathsf T}C$, $C^{\mathsf T}D$, $D^{\mathsf T}C$, $D^{\mathsf T}D-\gamma^2I$ 로 두면 1 은 모든 $\omega$ 에서 $G(i\omega)$ 의 가장 큰 특이값이 $\gamma$ 이하라는 조건이다. 이 판본으로 $H^\infty$ 노름의 계산과 제어기 설계가 행렬 부등식 문제가 된다.
- 행렬 부등식 제어. 수동성, 이득, 지연 같은 진동수 영역의 요구를 $P$ 에 대한 선형 행렬 부등식으로 바꾸어 반정부호 계획법으로 푼다.

[^1]: R. E. Kalman, "Lyapunov functions for the problem of Lur'e in automatic control", *Proceedings of the National Academy of Sciences* 49 (1963), 201–205.
[^2]: A. Rantzer, "On the Kalman–Yakubovich–Popov lemma", *Systems & Control Letters* 28 (1996), 7–10.

# 연관 문서

## 선수지식

- [S 보조정리](s-lemma.md)
- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #linear_algebra
