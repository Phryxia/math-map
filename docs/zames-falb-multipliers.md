# Zames–Falb 승수

# 개요

**Zames–Falb 승수(Zames–Falb multiplier)** 는 되먹임 부품의 특성 곡선이 오르기만 하는 곡선이라는 사실을 안정성 판정에 넣는 진동수 영역의 가중치다. 장치 $1/(s+1)^3$ 에 기울기가 $0$ 과 $k$ 사이인 모르는 부품을 되먹이면, 부품이 상수 이득일 때는 $k\lt 8$ 이면 안정하지만 [원 판정법](circle-criterion.md)은 $k\lt 4$ 까지만 보장한다.

원 판정법은 부품의 출력과 입력의 곱이 매 순간 $0$ 과 $k$ 배 사이라는 것만 쓴다. Zames–Falb 승수는 부품이 시간에 따라 바뀌지 않는 단조 곡선이라는 것에서 나오는 부등식을 더 써서, 이 장치의 보장 범위를 $8$ 에 얼마든지 가깝게 넓힌다.

# 직관

부품의 특성 곡선을 오르기만 하는 함수 $\psi$, 입력을 $v(t)$, 출력을 $w(t)=\psi(v(t))$ 라 한다. 입력을 세 시각의 값 $(2,\thinspace 0,\thinspace -1)$ 로, 곡선을 $\psi(x)=x^3$ 으로 두면 출력은 $(8,\thinspace 0,\thinspace -1)$ 이다. 출력과 입력을 시각마다 곱해 더하면 $16+0+1=17$ 이다.

입력을 한 칸 늦춘 $(0,\thinspace 2,\thinspace 0)$ 과 곱해 더하면 $8\cdot 0+0\cdot 2+(-1)\cdot 0=0$ 이고, 두 칸 늦춘 $(0,\thinspace 0,\thinspace 2)$ 와 곱해 더하면 $-2$ 다. 둘 다 $17$ 보다 작다. 출력이 큰 시각에 입력도 크도록 짝지은 원래 배치에서 합이 가장 크다.

이 부등식은 곡선이 오르기만 하고 시간에 따라 바뀌지 않으면 어떤 입력과 어떤 지연에서나 성립한다. 원 판정법이 쓰는 사실은 지연이 $0$ 인 곱 $wv$ 가 $0$ 이상이라는 것 하나다. 지연 $\tau$ 마다 나오는 부등식에 음이 아닌 가중치를 붙여 더하면 새로운 제약이 생기고, 가중치를 장치에 맞게 고르면 원 판정법보다 넓은 범위가 보장된다.

장치 $1/(s+1)^3$ 에서 지연 $\tau$ 의 가중치를 $2.7e^{-3\tau}$ 로 고르면 보장 범위가 $k\lt 7.77$ 이 된다. 가중치의 합 $0.9$ 를 $1$ 에 가깝게 하면 범위가 $8$ 에 다가간다. 상수 이득 $8$ 에서 계가 이미 불안정하므로 $8$ 보다 넓힐 수는 없다.

# 정의

## 기울기 제한

$\psi:\mathbb R\to\mathbb R$ 가 $\psi(0)=0$ 이고 모든 $x\ne y$ 에서 다음을 만족하면 $\psi$ 의 기울기가 $\lbrack 0,k\rbrack$ 로 **제한된다(slope-restricted)** 고 한다.

$$
0\le\frac{\psi(x)-\psi(y)}{x-y}\le k
$$

$k=\infty$ 이면 $\psi$ 는 단조 증가 함수다. 기울기가 $\lbrack 0,k\rbrack$ 로 제한된 함수는 원 판정법의 구간 조건 $\lbrack 0,k\rbrack$ 도 만족하고, 상수 이득 $\psi(x)=cx$, $0\le c\le k$ 도 이 모임에 든다.

## Zames–Falb 승수

$h$ 가 $\int\_{-\infty}^{\infty}\vert h(t)\vert\thinspace dt\lt 1$ 인 실함수이고 $H$ 가 그 Fourier 변환일 때, 다음 함수를 **Zames–Falb 승수(Zames–Falb multiplier)** 라 한다[^1].

$$
M(i\omega)=1-H(i\omega),\qquad H(i\omega)=\int\_{-\infty}^{\infty}h(t)e^{-i\omega t}\thinspace dt
$$

$h\ge 0$ 이면 단조 함수에 대한 승수이고, $h$ 의 부호에 제한이 없으면 홀함수인 단조 함수에 대한 승수다. 직관 절의 가중치는 $t\ge 0$ 에서 $h(t)=2.7e^{-3t}$, $t\lt 0$ 에서 $h(t)=0$ 이고, $H(s)=2.7/(s+3)$, $M(s)=(s+0.3)/(s+3)$ 이다.

[적분 이차 제약](integral-quadratic-constraints.md)으로 쓰면, 입력 $v$ 와 출력 $w$ 에 대한 다음 부등식이 기울기 $\lbrack 0,k\rbrack$ 인 $\psi$ 의 제약이다.

$$
\int\_{-\infty}^{\infty}\mathrm{Re}\Bigl(\overline{\hat w(i\omega)}\thinspace M(i\omega)\bigl(k\hat v(i\omega)-\hat w(i\omega)\bigr)\Bigr)\thinspace d\omega\ge 0
$$

# 성질

## 지연 부등식

**정리.** $\psi$ 가 단조 증가이고 $\psi(0)=0$ 이며 $\Psi(x)=\int\_0^x\psi$ 에 대해 $\Psi(v(t))$ 가 적분 가능하면, 모든 $\tau$ 에서 다음이 성립한다[^1].

$$
\int\_{-\infty}^{\infty}\psi(v(t))\thinspace v(t-\tau)\thinspace dt\le\int\_{-\infty}^{\infty}\psi(v(t))\thinspace v(t)\thinspace dt
$$

$\psi$ 가 홀함수이면 좌변에 절댓값을 씌운 부등식도 성립한다.

증명의 요지. $\Psi'=\psi$ 가 단조 증가이므로 $\Psi$ 는 [볼록](convexity.md) 함수이고, 접선 부등식 $\Psi(x)\ge\Psi(y)+\psi(y)(x-y)$ 에 $x=v(t-\tau)$, $y=v(t)$ 를 넣으면 다음이 나온다.

$$
\psi(v(t))\thinspace v(t-\tau)\le\psi(v(t))\thinspace v(t)+\Psi(v(t-\tau))-\Psi(v(t))
$$

$t$ 에 대해 적분하면 마지막 두 항의 적분은 서로 같아 지워진다. $\psi$ 가 홀함수이면 $\Psi$ 가 짝함수이므로 $x=-v(t-\tau)$ 를 넣어 반대쪽 부등식을 얻는다.

## 승수 부등식

$h\ge 0$, $\int h\le 1$ 이면 지연 부등식에 $h(\tau)$ 를 곱해 $\tau$ 에 대해 적분하고, $\psi(x)x\ge 0$ 에서 나오는 $\int\psi(v)v\ge 0$ 을 쓰면 다음이 나온다.

$$
\int\_{-\infty}^{\infty}\psi(v(t))\bigl(v(t)-(h\ast v)(t)\bigr)\thinspace dt\ge 0
$$

Plancherel 정리(Plancherel theorem)로 진동수 쪽으로 옮기면 $\int\mathrm{Re}\bigl(\overline{\hat w}M\hat v\bigr)\thinspace d\omega\ge 0$ 이다. 기울기가 $\lbrack 0,k\rbrack$ 로 제한되면 $kv-\psi(v)$ 도 $v$ 에 대해 단조 증가이므로, $w$ 는 $kv-w$ 의 단조 함수다. 같은 부등식을 입력 $kv-w$ 와 출력 $w$ 에 쓰면 정의 절의 제약이 나온다.

## 안정성 판정

**정리(Zames–Falb, 1968).** $G$ 가 안정한 유리 전달 함수이고 $\psi$ 의 기울기가 $\lbrack 0,k\rbrack$ 로 제한된다고 하자. $\int\vert h\vert\lt 1$ 인 $h\ge 0$ 과 $\delta\gt 0$ 이 있어 모든 $\omega$ 에서 다음이 성립하면, $y=Gu$, $u=-\psi(y)$ 로 이은 닫힌 계는 $L^2$ 안정하다[^1][^2].

$$
\mathrm{Re}\Bigl(M(i\omega)\bigl(1+kG(i\omega)\bigr)\Bigr)\ge\delta
$$

$\psi$ 가 홀함수이면 $h$ 의 부호에 제한이 없다.

증명의 요지. 닫힌 계에서는 $w=\psi(y)=-u$ 이므로 $\hat y=-G\hat w$ 이고 $k\hat y-\hat w=-(1+kG)\hat w$ 다. 정의 절의 제약에 넣으면 좌변이 $-\int\vert\hat w\vert^2\mathrm{Re}\bigl(M(1+kG)\bigr)d\omega\le-\delta\Vert w\Vert^2$ 이 되어 제약과 어긋난다. 이 어긋남을 적분 이차 제약의 안정성 정리에 넣으면 닫힌 계의 이득이 유계라는 것이 나온다.

## 원 판정법과 선형 이득의 한계

$h=0$ 이면 $M=1$ 이고 판정은 $1+k\thinspace\mathrm{Re}\thinspace G\gt 0$, 곧 원 판정법이다. 장치 $1/(s+1)^3$ 에서 $\mathrm{Re}\thinspace G(i\omega)=(1-3\omega^2)/(1+\omega^2)^3$ 은 $\omega=1$ 에서 가장 작은 값 $-1/4$ 를 가지므로 원 판정법은 $k\lt 4$ 를 준다.

상수 이득 $cx$, $0\le c\le k$ 는 기울기가 $\lbrack 0,k\rbrack$ 로 제한되므로, 이 모임 전체에 대한 판정은 선형 되먹임이 안정한 범위를 넘을 수 없다. 장치 $1/(s+1)^3$ 의 위상은 $\omega=\sqrt3$ 에서 $-\pi$ 이고 그때 크기가 $1/8$ 이므로 그 범위는 $k\lt 8$ 이다. 직관 절의 승수 $M(s)=(s+0.3)/(s+3)$ 는 $k\lt 7.77$ 을 주고, $h(t)=\lambda\cdot 3e^{-3t}$ 의 $\lambda$ 를 $1$ 에 가깝게 하면 보장 범위가 $8$ 에 다가간다. 이 장치에서는 [Popov 판정법](popov-criterion.md)도 $q=1$ 에서 같은 $8$ 에 닿는다.

## 볼록 탐색

판정식은 $h$ 에 대해 선형이다. $h$ 를 정해 둔 기저 함수들의 결합으로 두고 계수에 $\int\vert h\vert\lt 1$ 을 걸면, 판정을 만족하는 $h$ 를 찾는 문제는 선형계획이나 [반정부호 계획법](semidefinite-programming.md)이 된다. $H$ 가 유리 함수이면 [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)로 진동수마다의 부등식을 선형 행렬 부등식 하나로 바꾼다[^2].

## 이산시간

수열 $v_n$ 에 대해서도 지연 부등식과 승수 부등식이 같은 증명으로 성립한다. Popov 판정법은 입력의 도함수를 쓰므로 이산시간에 그대로 옮겨지지 않지만, Zames–Falb 승수는 $h$ 를 수열로 바꾸기만 하면 된다[^2].

# 활용

- 포화가 있는 제어계. 포화 함수는 기울기가 $\lbrack 0,1\rbrack$ 인 홀함수이므로, 부호 제한이 없는 $h$ 로 포화 되먹임과 적분기 와인드업 보상의 안정성을 판정한다.
- 최적화 알고리즘 분석. 강볼록이고 매끄러운 함수의 기울기는 기울기 제한 조건의 다변수 판본을 만족한다. Lessard, Recht, Packard 는 [경사하강법](gradient-descent.md)과 [Nesterov 가속법](nesterov-acceleration.md)의 수렴률을 계산할 때 원 판정법의 제약에 이산시간 Zames–Falb 승수를 더해 상한을 좁혔다[^3].
- 순환 신경망의 안정성. tanh 와 ReLU 같은 활성화 함수는 기울기가 $\lbrack 0,1\rbrack$ 로 제한되므로, 활성화를 모르는 부품으로 두고 같은 판정으로 상태가 원점으로 가는지 본다.

[^1]: G. Zames, P. L. Falb, "Stability conditions for systems with monotone and slope-restricted nonlinearities", *SIAM Journal on Control* 6 (1968), 89–108.
[^2]: J. Carrasco, M. C. Turner, W. P. Heath, "Zames–Falb multipliers for absolute stability: from O'Shea's contribution to convex searches", *European Journal of Control* 28 (2016), 1–19.
[^3]: L. Lessard, B. Recht, A. Packard, "Analysis and design of optimization algorithms via integral quadratic constraints", *SIAM Journal on Optimization* 26 (2016), 57–95.

# 연관 문서

## 선수지식

- [적분 이차 제약](integral-quadratic-constraints.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #functional_analysis
