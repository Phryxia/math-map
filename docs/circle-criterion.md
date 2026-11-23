# 원 판정법

# 개요

**원 판정법(circle criterion)** 은 선형 장치와 모양을 모르는 비선형 되먹임으로 된 계가, 비선형 부분이 정해진 기울기 범위 안에 있기만 하면 어느 것이든 안정하다는 것을 선형 부분의 진동수 응답 그림 하나로 판정하는 정리다. 밸브나 증폭기처럼 입력을 받아 출력을 돌려주는 부품의 특성 곡선은 정확히 모르지만, 그 곡선이 두 직선 $u=0$ 과 $u=ky$ 사이에 있다는 것은 아는 경우가 많다. 이때 그 사이의 모든 곡선에 대해 계가 원점으로 돌아오는지를 묻는다.

이 판정법은 선형 부분의 전달 함수 $G$ 의 그림이 복소평면의 원판 하나(구간 $\lbrack 0,k\rbrack$ 이면 반평면 하나)를 피하는지로 그 물음에 답한다.

# 직관

장치 $\ddot y+2\dot y+y=u$ 에 되먹임 $u=-\varphi(t,y)$ 를 건다. 되먹임이 일정한 이득 $u=-cy$ 이면 특성다항식이 $(s+1)^2+c$ 이고 근 $-1\pm i\sqrt c$ 는 모든 $c\gt 0$ 에서 왼쪽 반평면에 있다. 그래서 이득이 하나로 정해져 있으면 얼마나 크든 계가 안정하다.

되먹임 부품의 특성은 $0\le\varphi(t,y)\thinspace y\le ky^2$ 라는 것만 알고, 시간에 따라 바뀔 수도 있다고 한다. 이득 $c$ 를 하나씩 넣어 보는 방법으로는 이 부품을 다룰 수 없다. 부품의 순간 기울기가 $0$ 과 $k$ 사이를 오가면 정해진 $c$ 어느 것에도 해당하지 않는다.

장치의 전달 함수는 $G(s)=1/(s+1)^2$ 이고 진동수 $\omega$ 에서 실수부는 다음과 같다.

$$
\mathrm{Re}\thinspace G(i\omega)=\frac{1-\omega^2}{(1+\omega^2)^2}
$$

이 값은 $\omega^2=3$ 에서 가장 작은 값 $-\frac18$ 을 갖는다. 원 판정법은 모든 $\omega$ 에서 $1+k\thinspace\mathrm{Re}\thinspace G(i\omega)\gt 0$ 이면 이 구간의 모든 부품에 대해 계가 원점으로 돌아온다는 것을 준다. 이 장치에서는 $k\lt 8$ 이면 된다.

# 정의

$A$ 를 $n\times n$ 실행렬, $b$, $c$ 를 $\mathbb R^n$ 의 벡터로 두고 다음 계를 **Lur'e 계(Lur'e system)** 라 한다.

$$
\dot x=Ax+bu,\qquad y=c^{\mathsf T}x,\qquad u=-\varphi(t,y)
$$

선형 부분의 전달 함수는 $G(s)=c^{\mathsf T}(sI-A)^{-1}b$ 다. 직관 절의 장치는 $x=(y,\dot y)$ 로 두면 이 꼴이 된다.

$\alpha\lt\beta$ 에 대해 모든 $t$, $y$ 에서 $\alpha y^2\le\varphi(t,y)\thinspace y\le\beta y^2$ 이면 $\varphi$ 가 **구간 조건(sector condition)** $\lbrack\alpha,\beta\rbrack$ 를 만족한다고 한다. 그래프로는 $\varphi(t,\cdot)$ 의 그래프가 두 직선 $u=\alpha y$ 와 $u=\beta y$ 사이에 있다는 것이다. 직관 절의 부품은 구간 조건 $\lbrack 0,k\rbrack$ 를 만족한다.

구간 조건 $\lbrack\alpha,\beta\rbrack$ 를 만족하는 모든 $\varphi$ 에 대해 원점이 전역 점근 안정이면 Lur'e 계가 그 구간에서 **절대 안정(absolutely stable)** 하다고 한다.

# 성질

## 반평면 판정법

**정리.** $A$ 의 고윳값이 모두 왼쪽 반평면에 있고 모든 실수 $\omega$ 에서 다음이 성립하면, Lur'e 계는 구간 $\lbrack 0,k\rbrack$ 에서 절대 안정이다[^1][^2].

$$
1+k\thinspace\mathrm{Re}\thinspace G(i\omega)\gt 0
$$

그림으로는 $G(i\omega)$ 가 그리는 곡선이 직선 $\mathrm{Re}\thinspace s=-1/k$ 의 오른쪽에 있다는 것이다. 직관 절의 장치에서 이 곡선의 가장 왼쪽 점은 $\mathrm{Re}=-\frac18$ 이다.

## 증명의 요지

$u=-\varphi$ 이므로 구간 조건 $\lbrack 0,k\rbrack$ 는 $u(u+ky)\le 0$ 이다. $V(x)=x^{\mathsf T}Px$ 로 두고 모든 $(x,u)\ne 0$ 에서 다음이 성립하는 대칭행렬 $P$ 를 찾는다.

$$
2x^{\mathsf T}P(Ax+bu)-2u\bigl(u+k\thinspace c^{\mathsf T}x\bigr)\lt 0
$$

그러면 계의 궤도에서 $u(u+ky)\le 0$ 이므로 $\dot V=2x^{\mathsf T}P(Ax+bu)\lt 0$ 이다. 위 부등식은 $(x,u)$ 에 대한 이차형식이 음의 정부호라는 것이고, [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)의 엄격한 판본에 따르면 이것은 진동수 조건과 동치다. $x=(i\omega I-A)^{-1}bu$ 를 넣으면 첫째 항의 실수부가 사라지고 $-2\vert u\vert^2\bigl(1+k\thinspace\mathrm{Re}\thinspace G(i\omega)\bigr)\lt 0$ 이 남는다.

$u=0$ 을 넣으면 $A^{\mathsf T}P+PA\prec 0$ 이고, $A$ 가 안정하므로 $P\succ 0$ 이다. $V$ 는 모든 $\varphi$ 에 공통인 [Lyapunov 안정성](lyapunov-stability.md)의 Lyapunov 함수가 된다.

## 원판 판정법

$0\lt\alpha\lt\beta$ 이면 실수축 위의 두 점 $-1/\alpha$ 와 $-1/\beta$ 를 지름의 양 끝으로 하는 원판을 $D(\alpha,\beta)$ 로 쓴다.

**정리.** $G$ 의 극 가운데 오른쪽 반평면에 있는 것이 $p$ 개이고 허수축 위에는 없다고 한다. $\omega$ 가 $-\infty$ 에서 $\infty$ 로 갈 때 $G(i\omega)$ 의 곡선이 $D(\alpha,\beta)$ 에 들어가지 않고 그 원판을 반시계 방향으로 $p$ 번 감으면, Lur'e 계는 구간 $\lbrack\alpha,\beta\rbrack$ 에서 절대 안정이다[^2].

증명은 $\varphi$ 에서 $\alpha y$ 를 떼어 내 선형 부분으로 옮기고, 남은 부분의 구간을 $\lbrack 0,\beta-\alpha\rbrack$ 로 바꾼 뒤 반평면 판정법을 쓴다. 선형 부분이 $G/(1+\alpha G)$ 로 바뀌고, 이 [Möbius 변환](mobius-transformations.md)이 반평면 조건을 원판 조건으로 옮긴다.

## Nyquist 판정법과의 관계

되먹임이 일정한 이득 $c$ 이면 Nyquist 판정법(Nyquist stability criterion)은 $G(i\omega)$ 의 곡선이 점 $-1/c$ 를 반시계 방향으로 $p$ 번 감는 것과 닫힌 계의 안정이 동치라고 한다. 이 판정법은 [유수 정리](residue-theorem.md)의 편각 원리에서 나온다.

$c$ 가 $\lbrack\alpha,\beta\rbrack$ 를 움직이면 $-1/c$ 는 원판 $D(\alpha,\beta)$ 의 지름을 쓸고 간다. 원 판정법은 지름 위의 점 하나하나 대신 원판 전체를 피하라고 요구한다. 시간에 따라 바뀌는 부품까지 덮기 위해 조건이 그만큼 강해진다. 직관 절의 장치에서 선형 이득은 모든 $c\gt 0$ 에서 안정하지만 원 판정법은 $k\lt 8$ 만 보장한다.

# 활용

- 포화와 불감대. 증폭기의 포화 $\mathrm{sat}(y)$ 와 불감대는 구간 조건 $\lbrack 0,1\rbrack$ 를 만족하므로, 선형 제어기를 설계한 뒤 이 판정법으로 포화가 걸려도 안정한지 확인한다.
- 시변 이득. 구간 조건은 $\varphi$ 가 시간에 따라 바뀌어도 성립하므로, 작동점에 따라 이득을 바꾸는 이득 계획 제어기의 안정성을 이득의 범위만으로 판정한다.
- 반정부호 계획법. 증명의 행렬 부등식은 $P$ 에 대한 선형 행렬 부등식이므로 [반정부호 계획법](semidefinite-programming.md)으로 $P$ 를 찾고, 가장 큰 $k$ 를 이분 탐색으로 구한다.
- 입출력 안정성. Zames 는 같은 조건을 $L^2$ 신호 사이의 작은 이득 논법으로 다시 증명했고, 이 방법은 무한차원 선형 부분에도 쓰인다[^1].

[^1]: G. Zames, "On the input-output stability of time-varying nonlinear feedback systems, Part I and Part II", *IEEE Transactions on Automatic Control* 11 (1966), 228–238 and 465–476.
[^2]: H. K. Khalil, *Nonlinear Systems*, 3rd ed., Prentice Hall, 2002, Section 7.1.

# 연관 문서

## 선수지식

- [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis
