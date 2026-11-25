# 적분 이차 제약

# 개요

**적분 이차 제약(integral quadratic constraint)** 은 계의 모르는 부분이 들어오는 신호와 나가는 신호 사이에서 만족하는 성질을, 두 신호의 [Fourier 변환](fourier-transform.md)에 대한 이차형식의 적분이 음이 아니라는 부등식 하나로 적은 것이다. 장치 $\ddot y+2\dot y+y=u$ 에 특성을 모르는 부품 $u=-\psi(y)$ 를 되먹일 때, 부품에 대해 아는 것은 "기울기가 $0$ 과 $k$ 사이다", "시간에 따라 바뀌지 않는다" 처럼 여러 가지일 수 있다.

적분 이차 제약은 이렇게 아는 것을 하나씩 부등식으로 적고, 그 부등식들의 양의 결합과 선형 부분의 진동수 응답만으로 닫힌 계의 안정성을 판정한다. [원 판정법](circle-criterion.md), [Popov 판정법](popov-criterion.md), 작은 이득 정리가 모두 이 판정의 특수한 경우다.

# 직관

부품의 입력을 $v=y$, 출력을 $w=u=-\psi(v)$ 라 한다. 기울기가 $0$ 과 $k$ 사이라는 것은 매 순간 $w(-kv-w)\ge 0$ 이라는 것이고, 시간에 대해 적분하고 Plancherel 정리(Plancherel theorem)로 진동수 쪽으로 옮기면 다음이 나온다.

$$
\int\_{-\infty}^{\infty}\Bigl(-k\thinspace\mathrm{Re}\bigl(\overline{\hat v}\hat w\bigr)-\vert\hat w\vert^2\Bigr)\thinspace d\omega\ge 0
$$

부품이 시간에 따라 바뀌지 않는다는 것은 다른 식이 된다. $\Psi'=\psi$ 인 $\Psi$ 에 대해 $\int w\dot v\thinspace dt=-\int\frac{d}{dt}\Psi(v)\thinspace dt=0$ 이고, 진동수 쪽에서 $\dot v$ 는 $i\omega\hat v$ 이므로 다음이 나온다.

$$
\int\_{-\infty}^{\infty}\mathrm{Re}\bigl(i\omega\thinspace\overline{\hat w}\hat v\bigr)\thinspace d\omega=0
$$

닫힌 계에서는 $\hat v=G\hat w$ 이고 $G(s)=1/(s+1)^2$ 이다. 첫 제약만 쓰면 피적분 함수가 $-\vert\hat w\vert^2\bigl(1+k\thinspace\mathrm{Re}\thinspace G\bigr)$ 이 되어 원 판정법의 $k\lt 8$ 이 나온다. 둘째 제약에 실수 $\lambda$ 를 곱해 더하면 피적분 함수가 $-\vert\hat w\vert^2\bigl(1+k\thinspace\mathrm{Re}\thinspace G+\lambda\omega\thinspace\mathrm{Im}\thinspace G\bigr)$ 이 되고, $\lambda=-k/2$ 에서 괄호가 $1+k/(1+\omega^2)^2\gt 0$ 이 되어 모든 $k$ 에서 안정하다는 Popov 판정법의 결론이 나온다.

# 정의

$L^2$ 신호 $v$ 의 Fourier 변환을 $\hat v$ 로 쓴다. $\Pi(i\omega)$ 는 진동수마다 에르미트 행렬인 유계 함수다.

$L^2$ 신호 $v$, $w$ 가 다음을 만족하면 $\Pi$ 로 정의되는 적분 이차 제약을 만족한다고 한다.

$$
\int\_{-\infty}^{\infty}\begin{pmatrix}\hat v(i\omega)\cr\hat w(i\omega)\end{pmatrix}^\ast\Pi(i\omega)\begin{pmatrix}\hat v(i\omega)\cr\hat w(i\omega)\end{pmatrix}d\omega\ge 0
$$

유계이고 인과적인 작용소 $\Delta$ 가 모든 $v\in L^2$ 와 $w=\Delta(v)$ 에 대해 이 부등식을 만족하면 $\Delta$ 가 $\Pi$ 로 정의되는 제약을 만족한다고 한다. 이때 $\Pi$ 를 승수(multiplier)라고도 한다. 직관 절의 두 제약은 다음 승수다.

$$
\Pi\_{\mathrm{s}}=\begin{pmatrix}0&-k/2\cr -k/2&-1\end{pmatrix},\qquad\Pi\_{\mathrm{P}}(i\omega)=\begin{pmatrix}0&-i\omega/2\cr i\omega/2&0\end{pmatrix}
$$

$\Pi\_{\mathrm{P}}$ 는 등식으로 성립하므로 $\pm\Pi\_{\mathrm{P}}$ 가 모두 승수다.

# 성질

## 안정성 정리

**정리(Megretski–Rantzer, 1997).** $G$ 는 안정한 유리 전달 함수이고 $\Delta$ 는 유계이고 인과적인 작용소다. 다음 셋이 성립하면 $v=Gw+f$, $w=\Delta(v)+e$ 로 이은 닫힌 계는 안정하다[^1].

1. 모든 $\tau\in\lbrack 0,1\rbrack$ 에서 $G$ 와 $\tau\Delta$ 를 이은 계가 잘 정의된다.
2. 모든 $\tau\in\lbrack 0,1\rbrack$ 에서 $\tau\Delta$ 가 $\Pi$ 로 정의되는 제약을 만족한다.
3. $\varepsilon\gt 0$ 이 있어 모든 $\omega$ 에서 다음이 성립한다.

$$
\begin{pmatrix}G(i\omega)\cr I\end{pmatrix}^\ast\Pi(i\omega)\begin{pmatrix}G(i\omega)\cr I\end{pmatrix}\preceq-\varepsilon I
$$

## 증명의 요지

$\tau=0$ 에서는 $G$ 가 안정하므로 닫힌 계가 안정하다. 3 은 $\hat v=G\hat w$ 를 넣은 이차형식이 $-\varepsilon\Vert w\Vert^2$ 이하라는 것이고, 2 의 제약과 견주면 닫힌 계의 이득이 $\tau$ 에 무관한 상수로 눌린다. 이득이 유계인 동안 $\tau$ 를 조금 늘려도 안정성이 유지되므로, $\tau$ 를 $0$ 에서 $1$ 까지 유한 번의 걸음으로 옮길 수 있다[^1].

시간 영역의 Lyapunov 함수가 필요 없다. 그래서 지연이나 무한차원 부분처럼 상태 공간이 유한차원이 아닌 $\Delta$ 에도 쓸 수 있다.

## 승수의 결합

$\Delta$ 가 $\Pi\_1,\dots,\Pi\_m$ 로 정의되는 제약을 모두 만족하면 계수 $\lambda\_j\ge 0$ 으로 만든 $\sum\_j\lambda\_j\Pi\_j$ 도 승수다. 3 의 조건은 $\lambda\_j$ 에 대해 선형이고, $\Pi$ 가 유리 함수이면 [Kalman–Yakubovich–Popov 보조정리](kalman-yakubovich-popov-lemma.md)로 $\lambda\_j$ 와 행렬 $P$ 에 대한 선형 행렬 부등식이 된다. 그래서 알려진 제약을 모두 넣고 가장 좋은 결합을 [반정부호 계획법](semidefinite-programming.md)으로 찾는다.

## 고전 판정법의 승수

- 노름 경계. $\Vert\Delta\Vert\le 1$ 이면 $\Pi=\mathrm{diag}(I,-I)$ 이고, 3 은 $\Vert G\Vert\_\infty\lt 1$ 이다. 이것이 작은 이득 정리이고, 그 계산은 [유계 실수 보조정리](bounded-real-lemma.md)가 맡는다.
- 구간 조건. 직관 절의 $\Pi\_{\mathrm{s}}$ 이고, 3 은 원 판정법의 반평면 조건이다.
- 시불변 비선형. $\Pi\_{\mathrm{s}}$ 에 $\lambda\Pi\_{\mathrm{P}}$ 를 더한 것이고, 3 은 Popov 판정법의 조건이다.
- 기울기 제한 비선형. 단조이고 시불변인 비선형에는 지연 부등식에서 나오는 [Zames–Falb 승수](zames-falb-multipliers.md)를 쓴다.
- 상수 실수 매개변수. $\Delta(v)=\delta v$ 이고 $\vert\delta\vert\le 1$ 인 상수이면, $X(i\omega)\succeq 0$ 과 $Y(i\omega)=-Y(i\omega)^\ast$ 로 만든 다음 행렬이 승수다[^1].

$$
\Pi=\begin{pmatrix}X&Y\cr Y^\ast&-X\end{pmatrix}
$$

# 활용

- 강건 제어. 모형 오차, 지연, 포화, 시변 매개변수를 각각의 승수로 적고 합쳐 한 번의 반정부호 계획법으로 안정성과 성능을 판정한다.
- 최적화 알고리즘 분석. Lessard, Recht, Packard 는 [경사하강법](gradient-descent.md)과 [Nesterov 가속법](nesterov-acceleration.md)을 선형 계와 기울기 사상의 되먹임으로 보고, 강볼록 함수의 기울기가 만족하는 구간 조건을 승수로 적어 수렴률을 작은 행렬 부등식으로 계산했다[^2].
- 지연이 있는 계. 지연 연산자 $e^{-s\tau}$ 는 상태가 무한차원이므로 Lyapunov 함수를 찾기 어렵지만, 지연이 만족하는 진동수 영역의 제약을 승수로 적어 같은 정리를 쓴다.

[^1]: A. Megretski, A. Rantzer, "System analysis via integral quadratic constraints", *IEEE Transactions on Automatic Control* 42 (1997), 819–830.
[^2]: L. Lessard, B. Recht, A. Packard, "Analysis and design of optimization algorithms via integral quadratic constraints", *SIAM Journal on Optimization* 26 (2016), 57–95.

# 연관 문서

## 선수지식

- [Popov 판정법](popov-criterion.md)
- [유계 실수 보조정리](bounded-real-lemma.md)

## 더 알아보기

- [Zames–Falb 승수](zames-falb-multipliers.md)

#optimization #analysis #functional_analysis
