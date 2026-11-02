# 비유계 작용소

# 개요

**비유계 작용소(unbounded operator)** 는 공간 전체가 아니라 조밀한 부분공간에서 정의되고 유계가 아닐 수 있는 선형작용소다. 예로 미분 $d/dx$ 는 $\sin nx$ 를 $n\cos nx$ 로 보내 크기를 $n$ 배로 키우므로 출력의 크기를 입력 크기의 상수배로 누를 수 없고, 미분할 수 없는 함수에는 정의되지도 않는다. 이런 작용소는 정의역을 작용소의 일부로 정해 다루고, 같은 미분 표현이라도 경계조건으로 정의역을 바꾸면 다른 작용소가 된다.

# 직관

물리와 미분방정식에서 다루는 작용소는 대개 [유계 작용소](bounded-operators.md)가 아니다. $L^2[0,1]$ 에서 미분 $-i\thinspace d/dx$ 는 $e^{2\pi inx}$ 를 $2\pi ne^{2\pi inx}$ 로 보내 노름을 $2\pi n$ 배로 키우고, 미분할 수 없는 함수에는 정의되지 않는다.

이 미분을 어떤 함수에 적용할지 세 가지로 정해 본다.

- $\mathcal D_0$ 은 양 끝에서 $0$ 이 되는 매끄러운 함수들이다.
- $\mathcal D_\theta$ 는 미분이 $L^2$ 에 있고 $f(1)=e^{i\theta}f(0)$ 인 함수들이다.
- $\mathcal D_{\max}$ 는 미분이 $L^2$ 에 있는 모든 함수다.

고윳값을 구한다. $-if'=\lambda f$ 의 해는 $f=ce^{i\lambda x}$ 다. $\mathcal D_\theta$ 에서는 $e^{i\lambda}=e^{i\theta}$ 여야 하므로 고윳값이 $\lambda=2\pi n+\theta$ 이고 모두 실수다. $\mathcal D_{\max}$ 에서는 모든 복소수 $\lambda$ 가 고윳값이고, $\mathcal D_0$ 에서는 $e^{i\lambda x}$ 가 끝점에서 $0$ 이 되지 않으므로 고윳값이 하나도 없다.

같은 식이 함수의 범위에 따라 전혀 다른 고윳값을 준다. 그래서 정의역을 작용소의 일부로 둔다. 고윳값이 실수로만 나온 것은 $\mathcal D_\theta$ 뿐이고, 이 경우를 다른 둘과 가르는 조건이 정의 절의 자기수반이다.

# 정의

**비유계 작용소(unbounded operator)** 는 [Hilbert 공간](hilbert-spaces.md)의 조밀한 부분공간에서 정의되고 유계가 아닐 수 있는 선형작용소다. 정의역 $\mathcal D(T)$ 를 작용소의 일부로 보아, 정의역이 다르면 다른 작용소다. 직관 절의 미분을 $\mathcal D_0$, $\mathcal D_\theta$, $\mathcal D_{\max}$ 위에서 본 것을 각각 $T_0$, $T_\theta$, $T_{\max}$ 로 쓴다.

## 수반

$\mathcal D(T)\subset H$ 가 조밀하고 $T:\mathcal D(T)\to H$ 가 선형이라 하자. **수반작용소(adjoint operator)** $T^\ast$ 의 정의역은 다음이다.

$$
\mathcal D(T^\ast)=\big\lbrace g\in H:\ \exists h\in H,\ \langle Tf,g\rangle=\langle f,h\rangle\ \ \forall f\in\mathcal D(T)\big\rbrace
$$

이때 $T^\ast g=h$ 로 둔다. $\mathcal D(T)$ 가 조밀하므로 $h$ 는 하나로 정해진다.

$T_0$ 에서 $g\in\mathcal D_{\max}$ 이면 부분적분의 경계항이 $f(0)=f(1)=0$ 으로 사라져 $\langle -if',g\rangle=\langle f,-ig'\rangle$ 이다. 그래서 $g\in\mathcal D(T_0^\ast)$ 이고 $T_0^\ast g=-ig'$ 다.

## 확장, 대칭, 자기수반

$\mathcal D(S)\subseteq\mathcal D(T)$ 이고 $\mathcal D(S)$ 에서 $T=S$ 이면 $T$ 를 $S$ 의 **확장(extension)** 이라 하고 $S\subseteq T$ 로 쓴다. $T_0\subseteq T_\theta\subseteq T_{\max}$ 다.

정의역 안의 모든 $f,g$ 에서 $\langle Tf,g\rangle=\langle f,Tg\rangle$ 이면 $T$ 가 **대칭(symmetric)** 이라 하고, $T=T^\ast$ 이면 정의역까지 같다는 뜻에서 **자기수반(self-adjoint)** 이라 한다.

$$
T\ \text{대칭}\iff T\subseteq T^\ast,\qquad T\ \text{자기수반}\iff T=T^\ast
$$

$T_0$ 은 대칭이지만 위 계산에서 $T_0^\ast\supseteq T_{\max}\ne T_0$ 이므로 자기수반이 아니다. $T_\theta$ 는 자기수반이다. $T_{\max}$ 는 $f=x$, $g=1$ 에서 $\langle T_{\max}f,g\rangle=\int_0^1(-i)\thinspace dx=-i$ 이고 $\langle f,T_{\max}g\rangle=0$ 이므로 대칭이 아니다.

## 닫힌 작용소와 폐포

$T$ 의 그래프(graph) $\lbrace(f,Tf):f\in\mathcal D(T)\rbrace$ 가 $H\oplus H$ 에서 닫혀 있으면 $T$ 를 **닫힌 작용소(closed operator)** 라 한다. $T$ 의 닫힌 확장 가운데 가장 작은 것이 있으면 그것을 $T$ 의 **폐포(closure)** $\overline T$ 라 한다.

$f_n\to f$, $f_n'\to h$ 가 $L^2$ 에서 성립하면 $f$ 의 미분이 $h$ 이므로 $T_{\max}$ 는 닫힌 작용소다. $T_0$ 은 닫혀 있지 않고, 폐포의 정의역은 양 끝에서 $0$ 이면서 미분이 $L^2$ 에 있는 함수 전체다.

## 본질적 자기수반

대칭 작용소 $T$ 의 폐포가 자기수반이면 $T$ 를 **본질적 자기수반(essentially self-adjoint)** 이라 한다. $T_0$ 의 폐포는 $T_\theta$ 보다 작은 작용소이고 자기수반이 아니므로 $T_0$ 은 본질적 자기수반이 아니다.

## 결손지수

대칭 작용소 $T$ 에 대해 다음을 **결손공간(deficiency subspace)**, 그 차원을 **결손지수(deficiency index)** 라 한다.

$$
K_\pm=\ker(T^\ast\mp i),\qquad n_\pm=\dim K_\pm
$$

$T_0$ 에서 $T_0^\ast f=\pm if$ 는 $-if'=\pm if$, 곧 $f=e^{\mp x}$ 이고 둘 다 $L^2[0,1]$ 에 있으므로 $n_+=n_-=1$ 이다.

# 성질

## 확장과 수반

$S\subseteq T$ 이면 $T^\ast\subseteq S^\ast$ 다. 정의역을 좁히면 수반의 정의역은 넓어진다. 그래서 정의역을 좁게 잡으면 대칭이지만 자기수반이 아니고($T_0$), 넓게 잡으면 대칭성을 잃는다($T_{\max}$).

수반은 항상 닫혀 있다. 대칭 작용소는 닫힌 확장 $T^\ast$ 를 가지므로 항상 폐포를 갖는다. 전 공간에서 정의된 유계 작용소는 닫혀 있고, 닫힌 그래프 정리(closed graph theorem)는 전 공간에서 정의된 닫힌 작용소가 유계라는 것이므로 닫힌 비유계 작용소의 정의역은 전 공간이 아니다.

## von Neumann 정리

닫힌 대칭 작용소의 자기수반 확장은 결손지수로 정해진다. 이것이 von Neumann 정리(von Neumann's theorem)다.

| 결손지수 | 자기수반 확장 |
|---|---|
| $n_+=n_-=0$ | 이미 본질적 자기수반, 유일 |
| $n_+=n_-=n\gt 0$ | $K_+$ 에서 $K_-$ 로 가는 유니터리만큼, 무한히 많음 |
| $n_+\ne n_-$ | 없음 |

대칭 작용소가 본질적 자기수반인 것은 $n_+=n_-=0$ 인 것과 동치이고, 이때 자기수반 확장이 하나뿐이다. 매끄럽고 받침이 콤팩트한 함수들 위에서 작용소를 정의한 뒤 본질적 자기수반임을 보이면 정의역을 따로 정하지 않아도 자기수반 작용소가 하나로 정해진다. $\mathbb R$ 위의 $-i\thinspace d/dx$ 는 $e^{\mp x}$ 가 $L^2(\mathbb R)$ 에 없어 $n_\pm=0$ 이므로 본질적 자기수반이다.

## 구간 위의 미분 작용소

$T_0$ 은 $n_+=n_-=1$ 이므로 자기수반 확장이 원 하나만큼 있다. $K_+$ 에서 $K_-$ 로 가는 유니터리는 절댓값 $1$ 인 복소수 하나이고, 그에 대응하는 확장이 경계조건 $f(1)=e^{i\theta}f(0)$ 의 $T_\theta$ 다. 직관 절의 계산대로 각 $\theta$ 마다 스펙트럼이 $\lbrace 2\pi n+\theta:n\in\mathbb Z\rbrace$ 로 달라진다.

반직선 $[0,\infty)$ 에서는 $e^{-x}$ 만 제곱적분가능하므로 $n_+=1$, $n_-=0$ 이고 자기수반 확장이 없다. 반직선 위의 운동량은 자기수반 작용소로 나타나지 않는다.

## 자기수반의 필요성

대칭이기만 하면 스펙트럼이 [실수](real-numbers.md)라는 보장이 없다. 닫힌 대칭 작용소가 자기수반이 아니면 스펙트럼은 닫힌 위 반평면, 닫힌 아래 반평면, 복소평면 전체 가운데 하나다. 관측량이 실수 값을 가지고 시간 발전이 확률을 보존하려면 Hamilton 작용소(Hamiltonian)가 자기수반이어야 한다.

## 스펙트럼 정리

[스펙트럼 정리](spectral-theorem.md)는 비유계인 자기수반 작용소에도 성립한다. 자기수반 작용소 $T$ 에 대해 사영값 측도(projection-valued measure) $E$ 가 유일하게 존재해 다음이 성립한다.

$$
T=\int_{\mathbb R}\lambda\thinspace dE(\lambda),\qquad
\mathcal D(T)=\Big\lbrace f:\int\lambda^2\thinspace d\langle E(\lambda)f,f\rangle\lt\infty\Big\rbrace
$$

유계인 경우와 달리 정의역이 스펙트럼 측도로부터 결정된다. 동치인 형태로, 모든 자기수반 작용소는 어떤 측도공간 위에서 실함수를 곱하는 작용소와 유니터리 동치다. $T_\theta$ 는 기저 $e^{i(2\pi n+\theta)x}$ 에서 수열에 $2\pi n+\theta$ 를 곱하는 작용소다.

## Stone 정리

Stone 정리(Stone's theorem). 자기수반 작용소와 강연속 유니터리 일매개군(strongly continuous one-parameter unitary group)이 일대일로 대응한다.

$T$ 가 자기수반이면 $U(t)=e^{-itT}$ 가 유니터리군이고, 역으로 강연속 유니터리군 $U(t)$ 가 주어지면

$$
Tf=\lim_{t\to0}\frac{i\big(U(t)f-f\big)}{t}
$$

가 존재하는 $f$ 들 위에서 자기수반 작용소를 정의하며 $U(t)=e^{-itT}$ 다. $T_\theta$ 에 대응하는 $U(t)$ 는 함수를 $t$ 만큼 평행이동하고 $1$ 을 넘은 부분을 $e^{-i\theta}$ 배해 $0$ 쪽으로 붙이는 사상이다.

유니터리군의 생성원은 반드시 자기수반이므로, 시간 발전이 확률을 보존한다는 것과 Hamilton 작용소가 자기수반이라는 것이 같은 진술이다.

## Kato–Rellich 정리

Kato–Rellich 정리(Kato–Rellich theorem). $T$ 가 자기수반이고 $V$ 가 대칭이며 $T$ 에 대해 상대적으로 유계(relatively bounded), 곧 $\mathcal D(T)\subseteq\mathcal D(V)$ 이고 어떤 $a\lt 1$ 과 $b$ 에 대해

$$
\lVert Vf\rVert\le a\lVert Tf\rVert+b\lVert f\rVert
$$

이면 $T+V$ 가 $\mathcal D(T)$ 위에서 자기수반이다.

자유 Hamilton 작용소 $-\Delta$ 는 [Fourier 변환](fourier-transform.md)으로 곱셈 작용소가 되어 자기수반이고, 여기에 위치에너지를 더한 것이 자기수반인지를 위 조건으로 판정한다. Coulomb 위치에너지 $-1/\vert x\vert$ 가 $\mathbb R^3$ 에서 조건을 만족하므로 수소 원자의 Hamilton 작용소가 자기수반이다.

## 스펙트럼의 분해

자기수반 작용소의 스펙트럼 측도는 순점(pure point), 절대연속(absolutely continuous), 특이연속(singular continuous) 부분으로 나뉜다. 순점 부분이 고윳값에 해당하고 속박 상태를 준다. 절대연속 부분이 산란 상태를 준다. 특이연속 부분은 거의 Mathieu 작용소(almost Mathieu operator) 같은 준주기 퍼텐셜에서 나타난다.

수소 원자에서는 음의 고윳값들이 이산적으로 쌓여 $0$ 으로 수렴하고 $\lbrack 0,\infty)$ 가 절대연속 스펙트럼이다. 음의 고윳값이 에너지 준위이고 $0$ 이 이온화의 경계다.

# 활용

## 양자역학의 경계조건

상자 안의 입자에서 벽에 주는 경계조건이 자기수반 확장의 선택이다. Dirichlet, Neumann, 주기 경계조건이 각각 다른 작용소와 다른 에너지 준위를 준다.

점 상호작용(point interaction)을 가진 모형에서는 델타 함수 퍼텐셜을 특이한 항으로 다루는 대신, 원점을 뺀 공간에서 작용소를 정의하고 자기수반 확장의 족을 결합상수로 매개화한다.

## 발전 방정식

Schrödinger 방정식뿐 아니라 [열방정식](heat-equation.md)과 [파동방정식](wave-equation.md)도 같은 틀로 다룬다. 양의 자기수반 작용소 $T$ 에서 $e^{-tT}$ 와 $\cos(t\sqrt T)$ 를 스펙트럼 정리로 만들어 해를 쓴다. 자기수반이 아닌 생성원에 대해서는 반군 이론(semigroup theory)의 Hille–Yosida 정리(Hille–Yosida theorem)가 축약 반군을 생성할 조건을 준다.

## 수치 계산

비유계 작용소를 이산화하면 항상 유계 [행렬](matrices.md)이 되므로, 어떤 자기수반 확장을 근사하고 있는지가 격자와 경계 처리로 정해진다. 경계조건을 잘못 이산화하면 다른 작용소의 스펙트럼으로 수렴할 수 있다. 연속 스펙트럼의 틈에 극한에서 사라지지 않는 가짜 고윳값이 생기는 현상을 스펙트럼 오염(spectral pollution)이라 한다.

# 연관 문서

## 선수지식

- [유계 작용소](bounded-operators.md)

## 더 알아보기

- [Friedrichs 확장](friedrichs-extension.md)
- [극한점·극한원 분류](limit-point-limit-circle.md)

#functional_analysis #analysis
