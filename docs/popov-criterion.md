# Popov 판정법

# 개요

**Popov 판정법(Popov criterion)** 은 선형 장치와 시간에 따라 바뀌지 않는 비선형 되먹임으로 된 계가, 비선형 부분이 정해진 기울기 범위 안에 있기만 하면 어느 것이든 안정하다는 것을 진동수 조건 하나로 판정하는 정리다. 장치 $\ddot y+2\dot y+y=u$ 에 특성 곡선을 모르는 부품 $u=-\psi(y)$ 를 되먹이면, 일정한 이득은 모두 안정한데 [원 판정법](circle-criterion.md)은 기울기 $8$ 미만의 부품만 보장한다.

부품의 특성이 시간에 따라 바뀌지 않는다는 것을 쓰면 판정 조건에 자유 매개변수 $\gamma$ 가 하나 더 들어가고, 이 장치에서는 기울기 범위가 얼마나 크든 안정하다는 것이 나온다.

# 직관

원 판정법은 $1+k\thinspace\mathrm{Re}\thinspace G(i\omega)\gt 0$ 을 요구한다. 장치 $G(s)=1/(s+1)^2$ 에서는 다음이 나온다.

$$
G(i\omega)=\frac{1-\omega^2-2i\omega}{(1+\omega^2)^2}
$$

실수부가 $\omega^2=3$ 에서 $-\frac18$ 까지 내려가므로 $k\lt 8$ 에서 멈춘다.

허수부에 $\omega$ 를 곱한 값 $\omega\thinspace\mathrm{Im}\thinspace G(i\omega)=-2\omega^2/(1+\omega^2)^2$ 를 실수부에서 $\gamma$ 배만큼 빼면 다음이 나온다.

$$
\mathrm{Re}\thinspace G(i\omega)-\gamma\thinspace\omega\thinspace\mathrm{Im}\thinspace G(i\omega)=\frac{1-\omega^2+2\gamma\omega^2}{(1+\omega^2)^2}
$$

$\gamma=\frac12$ 이면 분자가 $1$ 이 되어 모든 $\omega$ 에서 양수다. Popov 판정법은 어떤 $\gamma\ge 0$ 에서 $\frac1k$ 에 이 값을 더한 것이 모든 $\omega$ 에서 양수이면 충분하다고 하므로, 이 장치는 모든 $k\gt 0$ 에서 절대 안정이다.

# 정의

원 판정법의 Lur'e 계에서 되먹임이 시간에 의존하지 않는 경우를 다룬다.

$$
\dot x=Ax+bu,\qquad y=c^{\mathsf T}x,\qquad u=-\psi(y)
$$

$\psi$ 는 연속이고 모든 $y$ 에서 $0\le\psi(y)\thinspace y\le ky^2$ 를 만족한다. 전달 함수는 $G(s)=c^{\mathsf T}(sI-A)^{-1}b$ 다.

진동수 $\omega\ge 0$ 마다 점 $\bigl(\mathrm{Re}\thinspace G(i\omega),\thinspace\omega\thinspace\mathrm{Im}\thinspace G(i\omega)\bigr)$ 를 찍어 얻은 곡선을 **Popov 곡선(Popov plot)** 이라 한다. 직관 절의 장치에서 Popov 곡선은 $\omega=0$ 의 $(1,0)$ 에서 출발해 아래로 내려갔다가 $\omega\to\infty$ 에서 원점으로 돌아온다. 가장 낮은 점은 $\omega=1$ 의 $(0,-\frac12)$ 다.

# 성질

## 정리

**정리(Popov, 1961).** $A$ 의 고윳값이 모두 왼쪽 반평면에 있고, $(A,b)$ 가 [가제어](controllability.md)이고, $(A,c^{\mathsf T})$ 가 가관측(observable)이라 한다. $\gamma\ge 0$ 이 $A$ 의 어느 고윳값 $\lambda$ 에 대해서도 $1+\gamma\lambda\ne 0$ 이고 모든 $\omega$ 에서 다음을 만족하면, 계는 구간 $\lbrack 0,k\rbrack$ 에서 절대 안정이다[^1][^2].

$$
\frac1k+\mathrm{Re}\bigl\lbrack(1+i\omega\gamma)G(i\omega)\bigr\rbrack\gt 0
$$

$\mathrm{Re}\lbrack(1+i\omega\gamma)G\rbrack=\mathrm{Re}\thinspace G-\gamma\omega\thinspace\mathrm{Im}\thinspace G$ 이므로 그림으로는 Popov 곡선이 점 $(-1/k,0)$ 을 지나고 기울기가 $1/\gamma$ 인 직선의 오른쪽에 있다는 것이다. $\gamma=0$ 이면 원 판정법의 반평면 조건이다.

## 증명의 요지

Lur'e–Postnikov 꼴의 함수를 Lyapunov 함수로 쓴다.

$$
V(x)=x^{\mathsf T}Px+2\gamma\int\_0^{y}\psi(\sigma)\thinspace d\sigma
$$

구간 조건에서 $\psi(\sigma)\sigma\ge 0$ 이므로 적분항은 음이 아니다. $\psi$ 가 시간에 의존하지 않으므로 적분항의 시간 미분은 $2\gamma\psi(y)\dot y$ 하나뿐이다. $\dot y=c^{\mathsf T}(Ax+bu)$ 를 넣으면 $\dot V$ 는 $(x,u)$ 의 이차형식에 구간 조건 $u(u+ky)\le 0$ 을 더한 꼴로 눌리고, 그 이차형식이 음의 정부호인 $P\succ 0$ 의 존재는 [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)로 진동수 조건과 동치다[^2]. $\dot y$ 가 진동수 영역에서 $i\omega$ 를 곱하는 것이므로 진동수 조건에 $i\omega\gamma$ 가 붙는다.

$\psi$ 가 시간에 따라 바뀌면 적분항의 미분에 $\partial\_t$ 항이 생겨 부호를 정할 수 없다. 그래서 $\gamma\gt 0$ 은 시불변 되먹임에서만 쓸 수 있다.

## Aizerman 추측

Aizerman 은 구간 $\lbrack 0,k\rbrack$ 의 모든 일정한 이득에서 안정하면 그 구간의 모든 시불변 비선형 되먹임에서도 안정할 것이라고 추측했다. 직관 절의 장치는 일정한 이득이 모두 안정하고, Popov 판정법으로 모든 비선형 되먹임에서도 안정하므로 이 추측이 성립하는 예다. 일반적으로는 반례가 있다[^3].

# 활용

- 포화가 있는 제어. 포화 $\mathrm{sat}(y)$ 는 시불변이고 구간 조건 $\lbrack 0,1\rbrack$ 를 만족하므로, 원 판정법이 실패하는 장치에서도 Popov 판정법으로 안정성을 보일 수 있다.
- 그래프 판정. Popov 곡선을 그리고 점 $(-1/k,0)$ 을 지나는 직선을 돌려 곡선의 왼쪽에 놓을 수 있는지 보면, 보장되는 가장 큰 $k$ 를 그림으로 읽는다.
- 적분 2차 제약. Megretski 와 Rantzer 는 원 판정법과 Popov 판정법을 비선형 부분이 만족하는 진동수 영역의 이차 제약으로 묶었고, $\gamma$ 의 항은 그 가운데 시불변성을 나타내는 제약이다[^4].

[^1]: V. M. Popov, "Absolute stability of nonlinear systems of automatic control", *Automation and Remote Control* 22 (1962), 857–875.
[^2]: H. K. Khalil, *Nonlinear Systems*, 3rd ed., Prentice Hall, 2002, Section 7.1.
[^3]: G. A. Leonov, N. V. Kuznetsov, "Hidden attractors in dynamical systems", *International Journal of Bifurcation and Chaos* 23 (2013), 1330002.
[^4]: A. Megretski, A. Rantzer, "System analysis via integral quadratic constraints", *IEEE Transactions on Automatic Control* 42 (1997), 819–830.

# 연관 문서

## 선수지식

- [원 판정법](circle-criterion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis
