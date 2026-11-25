# 유계 실수 보조정리

# 개요

**유계 실수 보조정리(bounded real lemma)** 는 선형 시불변 시스템이 입력 에너지를 $\gamma^2$ 배보다 크게 키워 내보내지 않는다는 조건이, 행렬 $P$ 하나에 대한 선형 행렬 부등식과 동치라는 정리다. $\dot x=-x+u$, $y=x$ 로 움직이는 장치에 어떤 신호를 넣어도 출력의 에너지 $\int y^2\thinspace dt$ 가 입력의 에너지 $\int u^2\thinspace dt$ 를 넘지 않는지 알려면, 입력 신호 전부를 확인해야 할 것 같다.

이 보조정리는 그 물음을 $x^{\mathsf T}Px$ 꼴의 저장 함수 하나를 찾는 문제로 바꾸고, 가장 작은 $\gamma$ 는 [반정부호 계획법](semidefinite-programming.md)이나 Hamilton 행렬의 고윳값으로 계산된다.

# 직관

장치 $\dot x=-x+u$, $y=x$ 에서 $x(0)=0$ 이라 한다. $V(x)=Px^2$ 로 두면 다음이 나온다.

$$
\dot V+y^2-\gamma^2u^2=(1-2P)x^2+2Pxu-\gamma^2u^2
$$

우변이 $(x,u)$ 의 이차형식으로서 음이면 적분해서 $V(x(T))+\int\_0^Ty^2\thinspace dt\le\gamma^2\int\_0^Tu^2\thinspace dt$ 이고, $V\ge 0$ 이므로 출력 에너지가 입력 에너지의 $\gamma^2$ 배 이하다.

우변이 음의 정부호일 조건은 $1-2P\lt 0$ 과 행렬식 $\gamma^2(2P-1)-P^2\gt 0$ 이다. 둘째 조건은 $\gamma^2\gt P^2/(2P-1)$ 이고, 우변은 $P=1$ 에서 가장 작은 값 $1$ 을 갖는다. 그래서 $\gamma\gt 1$ 이면 $P=1$ 이 이 장치의 저장 함수를 준다.

진동수로 보면 전달 함수 $G(s)=1/(s+1)$ 의 크기 $\vert G(i\omega)\vert=1/\sqrt{1+\omega^2}$ 가 $\omega=0$ 에서 가장 큰 값 $1$ 을 가지므로 같은 경계 $1$ 이 나온다.

# 정의

$A$ 는 고윳값이 모두 왼쪽 반평면에 있는 $n\times n$ 실행렬이고, $B$, $C$, $D$ 는 크기가 맞는 실행렬이다. 다음 계의 전달 함수는 $G(s)=C(sI-A)^{-1}B+D$ 다.

$$
\dot x=Ax+Bu,\qquad y=Cx+Du
$$

$G$ 의 **H∞ 노름(H-infinity norm)** 은 허수축 위에서 가장 큰 특이값의 상한이다.

$$
\Vert G\Vert\_\infty=\sup\_{\omega\in\mathbb R}\sigma\_{\max}\bigl(G(i\omega)\bigr)
$$

이 값은 $x(0)=0$ 에서 출력 에너지와 입력 에너지의 비의 제곱근의 상한과 같다. 직관 절의 장치에서 $\Vert G\Vert\_\infty=1$ 이다.

# 성질

## 정리

**정리.** $\gamma\gt 0$ 에 대해 다음 둘이 동치다[^1].

1. $\Vert G\Vert\_\infty\lt\gamma$ 다.
2. 다음 행렬 부등식을 만족하는 $P\succ 0$ 이 존재한다.

$$
\begin{pmatrix}A^{\mathsf T}P+PA+C^{\mathsf T}C&PB+C^{\mathsf T}D\cr B^{\mathsf T}P+D^{\mathsf T}C&D^{\mathsf T}D-\gamma^2I\end{pmatrix}\prec 0
$$

2 의 행렬에 $(x,u)$ 를 양쪽에서 곱한 값이 $\dot V+\vert y\vert^2-\gamma^2\vert u\vert^2$ 이고, 직관 절의 이차형식은 $A=-1$, $B=C=1$, $D=0$ 인 경우다.

## 증명의 요지

2 에서 1 은 직관 절처럼 적분하면 나온다. 1 에서 2 는 [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)의 엄격한 판본에 다음 행렬을 넣은 것이다.

$$
M=\begin{pmatrix}C^{\mathsf T}C&C^{\mathsf T}D\cr D^{\mathsf T}C&D^{\mathsf T}D-\gamma^2I\end{pmatrix}
$$

진동수 조건은 $G(i\omega)^\ast G(i\omega)-\gamma^2I\prec 0$ 이고 이것이 1 이다. $P\succ 0$ 은 왼쪽 위 블록 $A^{\mathsf T}P+PA\prec -C^{\mathsf T}C\preceq 0$ 과 $A$ 의 안정성에서 나온다.

## Hamilton 행렬 판정

$D=0$ 이면 $\Vert G\Vert\_\infty\lt\gamma$ 는 다음 행렬이 허수축 위에 고윳값을 갖지 않는 것과 동치다[^2].

$$
H\_\gamma=\begin{pmatrix}A&\gamma^{-2}BB^{\mathsf T}\cr -C^{\mathsf T}C&-A^{\mathsf T}\end{pmatrix}
$$

$H\_\gamma$ 의 고윳값 $i\omega$ 는 $G(i\omega)$ 의 특이값 가운데 하나가 $\gamma$ 인 진동수에 대응한다. 직관 절의 장치에서 $H\_\gamma$ 의 특성다항식은 $\lambda^2-1+\gamma^{-2}$ 이므로 $\gamma\lt 1$ 이면 고윳값이 순허수이고 $\gamma\gt 1$ 이면 실수다.

Boyd, Balakrishnan, Kabamba 는 $\gamma$ 를 이분 탐색하며 $H\_\gamma$ 의 고윳값을 보는 방법으로 $\Vert G\Vert\_\infty$ 를 계산했고, 이 반복이 이차 수렴하도록 고친 판본을 Bruinsma 와 Steinbuch 가 제시했다[^3]. 2 의 행렬 부등식은 [Schur 보수](schur-complement.md)로 [대수 Riccati 방정식](algebraic-riccati-equation.md)의 부등식 판본이 되고, $H\_\gamma$ 가 그 방정식의 Hamilton 행렬이다.

## 양의 실수 보조정리와의 관계

Kalman–Yakubovich–Popov 보조정리에서 $M$ 을 바꾸면 $G(i\omega)+G(i\omega)^\ast\succeq 0$ 을 다루는 양의 실수 보조정리가 된다. 두 보조정리는 Cayley 변환 $G\mapsto(I-G)(I+G)^{-1}$ 으로 서로 옮겨진다.

# 활용

- 작은 이득 정리(small gain theorem). $\Vert G\Vert\_\infty\lt\gamma$ 이고 되먹임 $\Delta$ 가 에너지를 $1/\gamma$ 배 이하로 키우면 닫힌 계가 안정하다. 모델 오차를 $\Delta$ 로 두는 강건 안정성 판정이 이 정리의 행렬 부등식으로 쓰인다.
- [H∞ 제어](h-infinity-control.md). 외란에서 오차까지의 H∞ 노름이 $\gamma$ 미만인 제어기는 이 행렬 부등식을 제어기 변수로 바꾼 선형 행렬 부등식을 풀거나, $H\_\gamma$ 꼴의 Hamilton 행렬을 갖는 두 Riccati 방정식을 풀어 얻는다[^1].
- 모형 축소. 균형 절단으로 줄인 모형의 오차 $\Vert G-G\_r\Vert\_\infty$ 를 이 보조정리로 계산해 확인한다.
- [원 판정법](circle-criterion.md). 구간 조건 $\lbrack -k,k\rbrack$ 의 원판은 원점을 중심으로 하는 원이고, 그때 원 판정법은 $\Vert G\Vert\_\infty\lt 1/k$ 라는 작은 이득 조건이 된다.

[^1]: K. Zhou, J. C. Doyle, K. Glover, *Robust and Optimal Control*, Prentice Hall, 1996, Chapter 4 and Chapter 16.
[^2]: S. Boyd, V. Balakrishnan, P. Kabamba, "A bisection method for computing the H∞ norm of a transfer matrix and related problems", *Mathematics of Control, Signals, and Systems* 2 (1989), 207–219.
[^3]: N. A. Bruinsma, M. Steinbuch, "A fast algorithm to compute the H∞-norm of a transfer function matrix", *Systems & Control Letters* 14 (1990), 287–293.

# 연관 문서

## 선수지식

- [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)

## 더 알아보기

- [적분 이차 제약](integral-quadratic-constraints.md)
- [H∞ 제어](h-infinity-control.md)

#optimization #analysis #linear_algebra
