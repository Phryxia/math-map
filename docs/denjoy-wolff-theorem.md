# Denjoy–Wolff 정리

# 개요

**Denjoy–Wolff 정리(Denjoy–Wolff theorem)** 는 단위원판을 단위원판 안으로 보내는 정칙함수를 거듭 적용하면, 회전과 같은 꼴의 함수가 아닌 한 모든 점이 같은 한 점으로 모인다는 정리다. $f(z)=(1+z)/2$ 를 원판의 점에 거듭 적용하면 점은 원판 안의 어디서 출발하든 경계의 점 $1$ 로 다가간다. 이 정리는 그 극한점이 원판 안의 고정점이거나, 고정점이 없을 때는 경계 위의 한 점으로 정해진다는 것을 보이고, 경계의 그 점을 함수만으로 찾는 방법을 준다.

# 직관

$f(z)=(1+z)/2$ 는 $\vert f(z)\vert\le(1+\vert z\vert)/2\lt 1$ 이므로 원판을 원판 안으로 보낸다. $f(z)-1=(z-1)/2$ 이므로 $n$ 번 적용하면 다음이 된다.

$$
f^{\circ n}(z)=1+\frac{z-1}{2^n}
$$

모든 $z$ 에서 $f^{\circ n}(z)\to 1$ 이다. $f$ 의 고정점은 $z=1$ 하나이고 원판 밖, 경계 위에 있다.

[Schwarz–Pick 보조정리](schwarz-pick-lemma.md)의 극값 함수 $g(z)=(z+1/2)/(1+z/2)$ 는 원판의 자기동형이라 쌍곡 거리를 보존한다. 그래도 $0$ 의 궤도는 $0, 1/2, 4/5, 13/14,\dots$ 이고, $n$ 번째 점은 $(3^n-1)/(3^n+1)$ 로 $1$ 에 다가간다. 쌍곡 거리로는 한 번에 $\log 3$ 씩 같은 측지선을 따라 경계로 나아간다.

$h(z)=iz$ 는 원판 안에 고정점 $0$ 을 갖는 회전이다. $1/2$ 의 궤도는 $1/2, i/2, -1/2, -i/2$ 를 돌고 어디로도 모이지 않는다. 세 예에서 모이지 않는 것은 회전뿐이고, 모이는 점은 원판 안의 고정점이 있으면 그 점, 없으면 경계 위의 한 점이다.

# 정의

정칙함수 $f:\mathbb D\to\mathbb D$ 의 $n$ 번 합성을 $f^{\circ n}$ 으로 쓴다. 원판의 자기동형 가운데 원판 안에 고정점을 갖는 것을 **타원형 자기동형(elliptic automorphism)** 이라 한다. 고정점을 $p$ 라 하면 타원형 자기동형은 $\varphi_p^{-1}(e^{i\theta}\varphi_p(z))$ 꼴이고, 직관 절의 $h$ 가 $p=0$, $\theta=\pi/2$ 인 경우다.

경계의 점 $\tau$ 와 $R\gt 0$ 에 대해 다음 집합을 $\tau$ 에서의 **horodisk** 라 한다.

$$
E(\tau,R)=\left\lbrace z\in\mathbb D:\frac{\vert\tau-z\vert^2}{1-\vert z\vert^2}\lt R\right\rbrace
$$

$E(\tau,R)$ 은 경계와 $\tau$ 에서 접하는 원판이고, $R\to 0$ 이면 $\tau$ 로 줄어든다. 원판 안의 점 $p$ 를 중심으로 한 쌍곡 원판의 중심을 경계의 $\tau$ 로 보내고 반지름을 함께 키운 극한이 horodisk 다. 직관 절의 $f$ 에서 $E(1,R)$ 은 $f$ 가 보내는 방향인 $1$ 에서 경계에 접하는 원판들이다.

# 성질

## 원판 안의 고정점

$f$ 가 자기동형이 아니고 원판 안에 고정점 $p$ 를 가지면, Schwarz–Pick 보조정리에서 $\vert f'(p)\vert\lt 1$ 이고 $p$ 는 $f$ 의 유일한 고정점이다. 모든 $z$ 에서 $f^{\circ n}(z)\to p$ 이고, 수렴은 원판의 콤팩트 부분집합에서 고르다. $p$ 를 $0$ 으로 옮기면 $\vert f(z)\vert\lt\vert z\vert$ 가 $\vert z\vert\le r$ 위에서 $\vert f(z)\vert\le c\vert z\vert$ 인 $c\lt 1$ 을 주므로 $\vert f^{\circ n}(z)\vert\le c^n r$ 이다.

## Wolff 보조정리

$f$ 가 원판 안에 고정점을 갖지 않으면, 경계의 점 $\tau$ 가 있어 모든 $R\gt 0$ 에서 $f(E(\tau,R))\subset E(\tau,R)$ 이다.[^2] 이 $\tau$ 를 $f$ 의 **Denjoy–Wolff 점(Denjoy–Wolff point)** 이라 한다.

증명의 요지는 다음과 같다. $0\lt r\lt 1$ 이면 $f_r=rf$ 는 원 $\vert z\vert=r$ 위에서 $\vert f_r(z)\vert\lt r$ 이므로, [Rouché 정리](rouche-theorem.md)에서 $z-f_r(z)$ 는 $\vert z\vert\lt r$ 안에 영점 $z_r$ 하나를 갖는다. $z_r$ 는 $f_r$ 의 고정점이다.

Schwarz–Pick 보조정리에서 $f_r$ 은 $z_r$ 를 중심으로 한 쌍곡 원판을 자기 안으로 보낸다. $f$ 에 고정점이 없으므로 $r\to 1$ 일 때 $z_r$ 의 극한점은 경계에 있고, 그 점을 $\tau$ 로 두면 쌍곡 원판들의 극한이 $\tau$ 에서의 horodisk 가 된다.

## Denjoy–Wolff 정리

$f:\mathbb D\to\mathbb D$ 가 정칙이고 타원형 자기동형이 아니면, $f^{\circ n}$ 은 원판의 콤팩트 부분집합에서 고르게 한 점 $\tau\in\overline{\mathbb D}$ 로 수렴한다.[^1] $f$ 가 원판 안에 고정점을 가지면 $\tau$ 는 그 고정점이고, 아니면 $\tau$ 는 Denjoy–Wolff 점이다.

고정점이 없는 경우의 증명은 [Montel 정리](montel-theorem.md)를 쓴다. $\lbrace f^{\circ n}\rbrace$ 은 원판으로 값을 갖는 함수족이므로 정규족이고, 어떤 부분수열의 극한 $F$ 가 원판 안의 값을 가지면 $f$ 가 원판 안의 고정점을 갖게 되어 가정에 어긋난다. 그래서 모든 극한은 경계 위의 상수다. Wolff 보조정리에서 $f^{\circ n}(z)$ 는 $z$ 를 담은 horodisk $E(\tau,R)$ 를 벗어나지 않고, 이 horodisk 의 닫힘이 경계와 만나는 점은 $\tau$ 뿐이므로 그 상수는 $\tau$ 다.

## 각 도함수

Denjoy–Wolff 점 $\tau$ 가 경계에 있으면, $z$ 가 경계에 접하지 않는 방향으로 $\tau$ 에 다가갈 때 $f(z)\to\tau$ 이고 차분몫 $(f(z)-\tau)/(z-\tau)$ 는 $(0,1\rbrack$ 의 값 $\alpha$ 로 수렴한다. 이 극한을 **각 도함수(angular derivative)** 라 하고, 그 존재는 [Julia–Carathéodory 정리](julia-caratheodory-theorem.md)가 준다. 직관 절의 $f$ 와 $g$ 에서 $\alpha$ 는 각각 $1/2$ 과 $1/3$ 이다.

이 값으로 horodisk 의 줄어드는 비율이 정해진다. 모든 $R\gt 0$ 에서 $f(E(\tau,R))\subset E(\tau,\alpha R)$ 이고, 이것이 **Julia 보조정리(Julia's lemma)** 다.[^3] $\alpha\lt 1$ 이면 궤도는 경계에 접하지 않는 방향으로 $\tau$ 에 다가가고, $\alpha=1$ 이면 경계에 접하는 방향으로 다가갈 수 있다.

# 활용

- [Fatou 성분의 분류](fatou-components.md). 유리함수 $R$ 의 Fatou 성분 $U$ 가 단순연결이고 $R(U)=U$ 이면, Riemann 사상으로 $R\vert\_U$ 를 원판의 자기사상으로 옮긴다. Denjoy–Wolff 정리에서 $R\vert\_U$ 가 타원형 자기동형이면 Siegel 원판이고, 아니면 궤도가 한 점으로 모여 유인 영역이나 포물선 영역이 된다.
- [분지과정](branching-processes.md). 자손 수의 생성함수 $\phi(s)=\sum_k p_ks^k$ 는 원판을 원판 안으로 보내고, $\phi^{\circ n}$ 은 $n$ 세대 개체 수의 생성함수다. $\phi^{\circ n}(0)$ 은 $n$ 세대에 멸종했을 확률이고, 그 극한인 멸종 확률이 $\phi$ 의 Denjoy–Wolff 점이다. 평균 자손 수가 $1$ 이하이면 그 점은 경계의 $1$ 이고, $1$ 보다 크면 원판 안의 고정점 $q\lt 1$ 이다.
- 정칙 반군. 원판의 자기사상들이 $f_{t+s}=f_t\circ f_s$ 를 만족하며 연속적으로 움직이면 모든 $f_t$ 가 같은 Denjoy–Wolff 점을 갖고, 그 점이 반군을 생성하는 벡터장의 꼴을 정한다.

[^1]: A. Denjoy, "Sur l'itération des fonctions analytiques", Comptes Rendus de l'Académie des Sciences 182 (1926). J. Wolff, "Sur l'itération des fonctions bornées", Comptes Rendus de l'Académie des Sciences 182 (1926).
[^2]: J. Wolff, "Sur une généralisation d'un théorème de Schwarz", Comptes Rendus de l'Académie des Sciences 182 (1926).
[^3]: G. Julia, "Extension nouvelle d'un lemme de Schwarz", Acta Mathematica 42 (1920).

# 연관 문서

## 선수지식

- [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)
- [Montel 정리](montel-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #probability
