# Maxwell 방정식

# 개요

**Maxwell 방정식(Maxwell's equations)** 은 전기장과 자기장이 전하, 전류와 어떻게 이어지는지 적는 편미분방정식 네 개다. 곧은 도선에 전류를 흘리면 둘레의 나침반 바늘이 도선을 감아 돌고, 자석을 코일에 넣었다 빼면 코일에 전류가 흐른다. 이 방정식은 이런 관찰을 두 장의 발산과 회전에 대한 식으로 적고, 전하가 없는 공간에서 풀면 두 장이 일정한 속도로 퍼지는 파동이 된다.

# 직관

$z$ 축을 따라 놓인 도선에 전류 $I$ 가 흐른다. 반지름 $r$ 인 원을 따라 자기장 $B$ 를 한 바퀴 적분한 값은 원이 감싼 전류의 $\mu_0$ 배라는 것이 실험 법칙이다. 대칭으로 $B$ 는 원의 접선 방향이고 크기가 같으므로 $2\pi r\vert B\vert=\mu_0I$, 곧 $\vert B\vert=\mu_0I/(2\pi r)$ 다.

이 법칙을 점마다의 식으로 바꾼다. [Kelvin–Stokes 정리](kelvin-stokes-theorem.md)로 원을 따른 적분은 원판을 지나는 $\nabla\times B$ 의 유량과 같고, 감싼 전류는 원판을 지나는 전류 밀도 $J$ 의 유량이다. 모든 원판에서 두 유량이 같으므로 $\nabla\times B=\mu_0J$ 다. 도선 밖에서는 $J=0$ 이고, 실제로 다음 장의 회전은 $0$ 이다.

$$
B=\frac{\mu_0I}{2\pi}\cdot\frac{(-y,x,0)}{x^2+y^2}
$$

이 식은 충전 중인 축전기에서 막힌다. 어떤 벡터장이든 $\nabla\cdot(\nabla\times B)=0$ 이므로 $\nabla\cdot J=0$ 이어야 한다. 그런데 축전기 판에는 전하 $\rho$ 가 쌓이고, 전하가 보존되므로 $\nabla\cdot J=-\partial\rho/\partial t\ne 0$ 이다.

판 사이에서 늘어나는 것은 전기장이다. 점전하에 대한 Coulomb 법칙(Coulomb's law)을 [발산 정리](divergence-theorem.md)로 점마다의 식으로 바꾸면 $\nabla\cdot E=\rho/\varepsilon_0$ 이다. 그러므로 $J$ 에 $\varepsilon_0\thinspace\partial E/\partial t$ 를 더하면 발산이 $-\partial\rho/\partial t+\partial\rho/\partial t=0$ 이 되어 모순이 사라진다. Maxwell 이 더한 이 항을 변위 전류(displacement current)라 한다.

# 정의

## 장과 원천

시공간 $\mathbb R^3\times\mathbb R$ 위에서 다음을 둔다.

- 전기장(electric field) $E(x,t)$ 와 자기장(magnetic field) $B(x,t)$. $\mathbb R^3$ 의 [벡터장](vector-fields.md)이고 시간 $t$ 에 따라 변한다.
- 전하 밀도(charge density) $\rho(x,t)$ 와 전류 밀도(current density) $J(x,t)$. 영역 안의 전하는 $\rho$ 의 적분이고, 곡면을 단위 시간에 지나는 전하는 $J$ 의 유량이다.
- 진공 유전율(vacuum permittivity) $\varepsilon_0$ 과 진공 투자율(vacuum permeability) $\mu_0$. 양의 상수다.

직관 절의 도선에서 $J$ 는 도선 위에서만 $0$ 이 아니고, 원판을 지나는 $J$ 의 유량이 $I$ 다.

## Maxwell 방정식

$E,B,\rho,J$ 가 다음 네 식을 만족한다는 것이 진공의 Maxwell 방정식이다.

$$
\begin{aligned}
\nabla\cdot E&=\frac{\rho}{\varepsilon_0}\cr
\nabla\cdot B&=0\cr
\nabla\times E&=-\frac{\partial B}{\partial t}\cr
\nabla\times B&=\mu_0J+\mu_0\varepsilon_0\frac{\partial E}{\partial t}
\end{aligned}
$$

차례로 Gauss 법칙(Gauss's law), Gauss 자기 법칙(Gauss's law for magnetism), Faraday 법칙(Faraday's law), Ampère–Maxwell 법칙(Ampère–Maxwell law)이라 한다. 직관 절의 $\nabla\cdot E=\rho/\varepsilon_0$ 이 첫째 식이고, $\nabla\times B=\mu_0J$ 에 변위 전류를 더한 것이 넷째 식이다.

## 적분꼴

발산 정리와 Kelvin–Stokes 정리로 네 식은 다음과 같다. $V$ 는 영역, $S$ 는 곡면, 경계는 $\partial$ 로 쓴다.

$$
\begin{aligned}
\int_{\partial V}E\cdot n\thinspace dA&=\frac{1}{\varepsilon_0}\int_V\rho\thinspace dV,&\int_{\partial V}B\cdot n\thinspace dA&=0\cr
\oint_{\partial S}E\cdot dl&=-\frac{d}{dt}\int_SB\cdot n\thinspace dA,&\oint_{\partial S}B\cdot dl&=\mu_0\int_SJ\cdot n\thinspace dA+\mu_0\varepsilon_0\frac{d}{dt}\int_SE\cdot n\thinspace dA
\end{aligned}
$$

셋째 식은 코일을 지나는 자기장의 유량이 변하면 코일을 따라 전압이 생긴다는 것이고, 개요의 자석과 코일이 이 경우다.

# 성질

## 전하 보존

넷째 식에 발산을 취하면 $\nabla\cdot(\nabla\times B)=0$ 이고, 첫째 식을 넣으면 다음 연속 방정식(continuity equation)이 나온다.

$$
\frac{\partial\rho}{\partial t}+\nabla\cdot J=0
$$

직관 절의 계산을 거꾸로 한 것이다. Maxwell 방정식을 만족하는 원천은 반드시 전하를 보존한다.

## 퍼텐셜과 게이지 변환

둘째 식 $\nabla\cdot B=0$ 과 [Poincaré 보조정리](poincare-lemma.md)로 $B=\nabla\times A$ 인 벡터 퍼텐셜(vector potential) $A$ 가 있다. 셋째 식에 넣으면 $\nabla\times(E+\partial A/\partial t)=0$ 이므로 같은 정리로 스칼라 퍼텐셜 $\varphi$ 가 있다.

$$
B=\nabla\times A,\qquad E=-\nabla\varphi-\frac{\partial A}{\partial t}
$$

이 꼴의 $E,B$ 는 둘째와 셋째 식을 자동으로 만족한다. 함수 $\lambda$ 로 $A\mapsto A+\nabla\lambda$, $\varphi\mapsto\varphi-\partial\lambda/\partial t$ 로 바꿔도 $E,B$ 는 그대로이고, 이 자유도를 게이지 변환(gauge transformation)이라 한다. 정적인 경우 $\varphi$ 와 $A$ 는 [Helmholtz 분해](helmholtz-decomposition.md)의 두 퍼텐셜이다.

## 전자기파

$\rho=0$, $J=0$ 인 공간에서 셋째 식에 회전을 취하고 넷째 식을 넣는다. 항등식 $\nabla\times(\nabla\times E)=\nabla(\nabla\cdot E)-\Delta E$ 와 $\nabla\cdot E=0$ 을 쓰면 다음이 나온다.

$$
\frac{\partial^2E}{\partial t^2}=c^2\Delta E,\qquad c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}
$$

$B$ 도 같은 방정식을 만족한다. $E$ 와 $B$ 의 각 성분이 속도 $c$ 의 [파동방정식](wave-equation.md)을 따르고, 측정한 $\mu_0,\varepsilon_0$ 에서 나온 $c\approx 3\times 10^8\thinspace\mathrm{m/s}$ 가 빛의 속도와 같다.

## 에너지 보존

에너지 밀도 $u$ 와 Poynting 벡터(Poynting vector) $S$ 를 다음으로 둔다.

$$
u=\frac12\Big(\varepsilon_0\vert E\vert^2+\frac{1}{\mu_0}\vert B\vert^2\Big),\qquad S=\frac{1}{\mu_0}E\times B
$$

그러면 $\partial u/\partial t+\nabla\cdot S=-J\cdot E$ 가 성립한다. 증명의 요지는 항등식 $\nabla\cdot(E\times B)=B\cdot(\nabla\times E)-E\cdot(\nabla\times B)$ 에 셋째와 넷째 식을 넣는 것이다. 영역 안의 장 에너지는 경계로 나가는 $S$ 의 유량과 전류에 해 준 일 $J\cdot E$ 만큼 줄어든다.

## 미분형식으로 쓴 꼴

시공간 $\mathbb R^4$ 위에서 $E$ 와 $B$ 의 성분을 모은 2형식 $F$ 와, $\rho$ 와 $J$ 를 모은 전류 형식을 두면 네 식은 $dF=0$ 과 $d\star F=J$ 두 식이 된다. 앞의 것이 둘째와 셋째 식, 뒤의 것이 첫째와 넷째 식이다. [미분형식](differential-forms.md)의 외미분과 Hodge 별작용소는 좌표에 의존하지 않으므로, 이 꼴은 Lorentz 변환(Lorentz transformation)에서 바뀌지 않는다.

# 활용

- 전자기파. 라디오파, 빛, X 선이 진동수만 다른 같은 파동방정식의 해다. 안테나의 설계와 광학의 굴절, 반사가 경계 조건을 붙인 Maxwell 방정식의 풀이다.
- 유도. 발전기와 변압기는 셋째 식의 적분꼴로, 회전하는 코일이나 이웃한 코일을 지나는 자기장의 유량 변화로 전압을 만든다.
- 수치 계산. 셋째와 넷째 식을 엇갈린 격자에서 차분하는 Yee 방법(Yee scheme)이 시간 영역 계산에 쓰이고, 변에 자유도를 둔 유한요소의 연립방정식은 [평활 응집](smoothed-aggregation.md) 같은 다중격자 방법으로 푼다.
- 게이지 이론. 미분형식으로 쓴 꼴의 $F=dA$ 를 비가환 대칭군의 [접속](connection.md)과 곡률로 옮긴 것이 [Yang–Mills 이론](yang-mills-theory.md)이다. 진공의 해가 조화형식이라는 [Hodge 이론](hodge-theory.md)의 관점도 이 꼴에서 나온다.

# 연관 문서

## 선수지식

- [Kelvin–Stokes 정리](kelvin-stokes-theorem.md)
- [Helmholtz 분해](helmholtz-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
