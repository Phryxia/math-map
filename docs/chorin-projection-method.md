# Chorin 투영법

# 개요

**Chorin 투영법(Chorin projection method)** 은 비압축 유체의 속도를 시간 간격마다 두 단계로 갱신하는 수치 해법이다. 물을 담은 상자에서 속도를 한 걸음 앞으로 계산하면, 계산한 속도가 어떤 자리로 물을 모으고 어떤 자리에서 물을 비우게 된다. 물은 압축되지 않으므로 이런 속도는 틀렸다.

Chorin 투영법은 압력 없이 먼저 계산한 속도에서 물을 모으는 성분만 떼어 내고, 떼어 낸 성분을 압력의 기울기로 읽는다.

# 직관

[Navier–Stokes 방정식](navier-stokes-equations.md)을 시간에 대해 한 걸음씩 풀려고 한다. 속도 $u$ 에는 $\partial_tu=\dots$ 꼴의 식이 있지만 압력 $p$ 에는 시간 도함수가 든 식이 없고, 대신 속도가 $\mathrm{div}\thinspace u=0$ 을 만족해야 한다는 조건이 있다. 그래서 압력을 빼고 한 걸음 계산한 속도를 $u^\ast$ 라 하자.

가로세로가 $2\pi$ 인 주기 정사각형에서 $u^\ast=(\cos x+\sin y,\thinspace 0)$ 이 나왔다고 하자. $\mathrm{div}\thinspace u^\ast=-\sin x$ 가 $0$ 이 아니므로 $x=\pi/2$ 근처에서는 물이 빠져나가고 $x=3\pi/2$ 근처에서는 물이 모인다. 이 속도를 다음 두 장의 합으로 쓴다.

$$
u^\ast=\nabla(\sin x)+(\sin y,\thinspace 0)
$$

첫 장은 기울기이고 둘째 장은 발산이 $0$ 이다. 물을 모으는 것은 첫 장뿐이므로 다음 시각의 속도를 $u=(\sin y,\thinspace 0)$ 으로 둔다.

Navier–Stokes 방정식에서 압력은 $-\nabla p$ 라는 기울기 꼴의 힘으로만 속도에 들어간다. 그러므로 떼어 낸 기울기 $\nabla(\sin x)$ 가 한 걸음 $\delta t$ 동안 압력이 한 일이고, 압력은 $\delta t\thinspace p=\sin x$ 로 정해진다. 속도를 기울기와 발산 없는 장으로 나누는 것이 [Helmholtz 분해](helmholtz-decomposition.md)다.

# 정의

## Leray 정사영

$\Omega\subset\mathbb R^d$ 를 경계가 매끄러운 유계 열린집합, $\mathbf n$ 을 경계의 바깥 법선이라 한다. $L^2(\Omega)^d$ 의 다음 두 부분공간은 직교하고 합이 전체다.

$$
H=\lbrace v\mid\mathrm{div}\thinspace v=0,\thinspace v\cdot\mathbf n=0\thinspace(\partial\Omega\text{ 에서})\rbrace,\qquad G=\lbrace\nabla q\mid q\in H^1(\Omega)\rbrace
$$

직교는 $v\in H$ 에서 다음 부분적분으로 나온다.

$$
\int\_\Omega\nabla q\cdot v\thinspace dx=-\int\_\Omega q\thinspace\mathrm{div}\thinspace v\thinspace dx+\int\_{\partial\Omega}q\thinspace v\cdot\mathbf n\thinspace dS=0
$$

$L^2(\Omega)^d$ 에서 $H$ 로 가는 직교 정사영 $P$ 를 **Leray 정사영(Leray projection)** 이라 한다. 직관 절의 예에서 $P u^\ast=(\sin y,\thinspace 0)$ 이다.

## 두 단계

시간 간격 $\delta t$, 점성계수 $\nu$, 바깥 힘 $f$ 에 대해 $u^n$ 에서 $u^{n+1}$ 을 다음 두 단계로 얻는 방법을 Chorin 투영법이라 한다.[^1][^2] 첫 단계는 압력을 뺀 방정식을 한 걸음 푸는 것이다.

$$
\frac{u^\ast-u^n}{\delta t}+(u^n\cdot\nabla)u^n-\nu\Delta u^\ast=f,\qquad u^\ast=0\quad(\partial\Omega\text{ 에서})
$$

둘째 단계는 $u^\ast$ 를 정사영하는 것이다.

$$
\frac{u^{n+1}-u^\ast}{\delta t}+\nabla p^{n+1}=0,\qquad\mathrm{div}\thinspace u^{n+1}=0,\qquad u^{n+1}\cdot\mathbf n=0\quad(\partial\Omega\text{ 에서})
$$

둘째 단계는 $u^{n+1}=Pu^\ast$ 와 같다. 첫 식의 발산을 잡고 경계에서 법선 성분을 보면, 압력은 다음 [Poisson 방정식](poisson-equation.md)의 해다.

$$
\Delta p^{n+1}=\frac{1}{\delta t}\mathrm{div}\thinspace u^\ast,\qquad\frac{\partial p^{n+1}}{\partial\mathbf n}=0\quad(\partial\Omega\text{ 에서})
$$

# 성질

## 정사영 단계의 에너지

$u^{n+1}\in H$ 와 $\delta t\nabla p^{n+1}\in G$ 가 직교하므로 다음이 성립한다.

$$
\Vert u^{n+1}\Vert^2+\delta t^2\Vert\nabla p^{n+1}\Vert^2=\Vert u^\ast\Vert^2
$$

둘째 단계는 운동 에너지를 늘리지 않는다. 직관 절의 예에서 $\Vert u^\ast\Vert^2=\Vert\nabla\sin x\Vert^2+\Vert(\sin y,0)\Vert^2$ 이고, 두 항이 각각 $2\pi^2$ 이다.

## 인공 경계 조건

참 압력은 경계에서 $\partial p/\partial\mathbf n=0$ 을 만족하지 않는다. 그런데 둘째 단계는 이 조건을 압력에 붙이고, 대신 접선 방향 $\tau$ 의 속도 성분은 경계에서 $-\delta t\thinspace\partial p^{n+1}/\partial\tau$ 로 남아 $u=0$ 이 맞지 않는다. 그 결과 경계 근처에 압력의 오차가 모이는 얇은 층이 생긴다.

정리. 해가 충분히 매끄러우면 Chorin 투영법의 오차는 속도가 $L^2$ 에서 $O(\delta t)$, 압력이 $L^2$ 에서 $O(\delta t^{1/2})$ 다.[^3]

## 증분 판

첫 단계에 앞 시각의 압력 기울기 $\nabla p^n$ 을 넣고, 둘째 단계에서 압력의 변화량 $p^{n+1}-p^n$ 만 같은 Poisson 방정식으로 구하는 방법을 **증분 압력 보정법(incremental pressure-correction scheme)** 이라 한다. 둘째 단계가 바꾸는 양이 $\delta t$ 의 크기로 줄어들므로 인공 경계 조건이 만드는 오차도 줄어든다.[^3]

# 활용

- 주기 영역의 스펙트럼 방법. 주기 상자에서 [Fourier 변환](fourier-transform.md)을 하면 Leray 정사영은 진동수 $\xi\ne 0$ 마다 $\hat u(\xi)$ 에서 $\xi$ 방향 성분을 빼는 것이므로, 둘째 단계에 방정식 풀이가 필요 없다.
- 유한차분과 유한요소 계산. 시간 간격마다 첫 단계의 점성 방정식 하나와 압력의 Poisson 방정식 하나를 풀면 되므로, 속도와 압력을 한꺼번에 푸는 [Stokes 방정식](stokes-equations.md) 꼴의 안장점 문제를 피한다. Poisson 방정식 풀이에는 [다중격자법](multigrid.md)이 쓰인다.

[^1]: Alexandre J. Chorin, "Numerical solution of the Navier–Stokes equations", *Mathematics of Computation* **22** (1968), 745–762.
[^2]: Roger Temam, "Sur l'approximation de la solution des équations de Navier–Stokes par la méthode des pas fractionnaires (II)", *Archive for Rational Mechanics and Analysis* **33** (1969), 377–385.
[^3]: Jean-Luc Guermond, Peter Minev, Jie Shen, "An overview of projection methods for incompressible flows", *Computer Methods in Applied Mechanics and Engineering* **195** (2006), 6011–6045.

# 연관 문서

## 선수지식

- [Helmholtz 분해](helmholtz-decomposition.md)
- [Navier–Stokes 방정식](navier-stokes-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #linear_algebra
