# Kähler–Einstein 계량

# 개요

**Kähler–Einstein 계량(Kähler–Einstein metric)** 은 Ricci 곡률이 계량 자신의 상수배인 Kähler 계량이다. 곡면이면 Gauss 곡률이 어디서나 같은 계량이고, 둥근 구면과 평탄한 원환면과 쌍곡 계량을 준 종수 $2$ 곡면이 그 예다. 고차원 복소 다양체에서도 이런 계량이 있는지 묻는 문제는 Kähler 퍼텐셜 하나에 대한 복소 Monge–Ampère 방정식이 되고, 첫 Chern 류의 부호에 따라 그 방정식을 풀거나 풀리지 않는 이유를 찾는다.

# 직관

종수 $g$ 인 닫힌 곡면에 Gauss 곡률이 상수 $K$ 인 계량이 있다고 하자. [Gauss–Bonnet 정리](gauss-bonnet.md)에 따라 $\int K\thinspace dA=2\pi(2-2g)$ 이고 넓이는 양수이므로 $K$ 의 부호는 $2-2g$ 의 부호와 같다. 구면은 양의 곡률, 원환면은 곡률 $0$, 종수 $2$ 이상은 음의 곡률만 가능하다. 곡률의 부호를 계량이 아니라 위상이 정한다.

[Riemann 곡면](riemann-surfaces.md)에서는 균일화 정리(uniformization theorem)가 세 경우 모두에 이런 계량을 준다. 복소 차원이 $2$ 이상이면 곡률 하나 대신 Ricci 형식이 있고, 위상이 정하는 것은 그 형식의 코호몰로지류다. 곡률이 상수인 계량을 찾는 문제는 [Calabi 추측](calabi-conjecture.md)과 같은 꼴의 방정식에 계량 자신이 들어간 것이 된다.

# 정의

## Kähler–Einstein 계량

[Kähler 다양체](kahler-manifolds.md) $M$ 위의 Kähler 형식 $\omega$ 가

$$
\mathrm{Ric}(\omega)=\lambda\omega,\qquad\lambda\in\mathbb R
$$

를 만족하면 $\omega$ 를 Kähler–Einstein 계량이라 한다. 계량을 상수배 하면 $\mathrm{Ric}$ 는 바뀌지 않으므로 $\lambda\in\lbrace -1,0,1\rbrace$ 로 맞출 수 있다. 복소 차원 $1$ 에서 $\mathrm{Ric}(\omega)=K\omega$ 이므로 Kähler–Einstein 계량은 Gauss 곡률이 상수인 계량이다.

사영공간 $\mathbb{CP}^n$ 의 아핀 좌표에서 $\omega\_{\mathrm{FS}}=i\partial\bar\partial\log(1+\vert z\vert^2)$ 를 **Fubini–Study 계량(Fubini–Study metric)** 이라 한다. 계수 행렬의 행렬식이 $(1+\vert z\vert^2)^{-(n+1)}$ 이므로 $\mathrm{Ric}(\omega\_{\mathrm{FS}})=(n+1)\omega\_{\mathrm{FS}}$ 이다. 단위원판 위의 $\omega=i\thinspace dz\wedge d\bar z/(1-\vert z\vert^2)^2$ 는 같은 계산으로 $\mathrm{Ric}(\omega)=-2\omega$ 이고, 종수 $2$ 이상의 곡면은 원판을 Fuchs 군(Fuchsian group)으로 나눈 몫이므로 이 계량을 물려받는다.

## 첫 Chern 류의 부호

$\lbrack\mathrm{Ric}(\omega)\rbrack=2\pi c_1(M)$ 이므로 Kähler–Einstein 계량이 있으면 $\lambda\lbrack\omega\rbrack=2\pi c_1(M)$ 이다. $\lambda\gt 0$ 이면 $c_1(M)$ 이 양의 $(1,1)$ 형식으로 대표되고, $\lambda\lt 0$ 이면 음의 형식으로 대표되고, $\lambda=0$ 이면 $c_1(M)=0$ 이다. 이 세 경우를 $c_1\gt 0$, $c_1\lt 0$, $c_1=0$ 으로 쓴다. $c_1\gt 0$ 인 콤팩트 복소 다양체를 **Fano 다양체(Fano manifold)** 라 한다.

$\mathbb{CP}^{n+1}$ 안의 $d$ 차 매끄러운 초곡면(hypersurface)은 $c_1=(n+2-d)H$ 다. 여기서 $H$ 는 초평면의 류다. $d\lt n+2$ 이면 Fano, $d=n+2$ 이면 $c_1=0$, $d\gt n+2$ 이면 $c_1\lt 0$ 이다. $n=1$ 이면 평면곡선이고 $d=3$ 의 3 차 곡선이 원환면, $d\ge 4$ 가 종수 $3$ 이상의 곡선이다.

## 방정식

$\lambda\lbrack\omega\rbrack=2\pi c_1(M)$ 인 Kähler 형식 $\omega$ 를 하나 잡고 $\mathrm{Ric}(\omega)-\lambda\omega=i\partial\bar\partial F$ 인 실함수 $F$ 를 잡는다. $\omega\_\phi=\omega+i\partial\bar\partial\phi$ 에서 다음이 성립한다.

$$
\mathrm{Ric}(\omega\_\phi)=\mathrm{Ric}(\omega)-i\partial\bar\partial\log(\omega\_\phi^n/\omega^n)
$$

그러므로 $\mathrm{Ric}(\omega\_\phi)=\lambda\omega\_\phi$ 는 상수를 $F$ 에 흡수하면 다음과 같다.

$$
(\omega+i\partial\bar\partial\phi)^n=e^{F-\lambda\phi}\omega^n,\qquad\omega+i\partial\bar\partial\phi\gt 0
$$

$\lambda=0$ 이면 Calabi 추측의 방정식이다. 정의는 [Monge–Ampère 방정식](monge-ampere-equation.md)의 복소판에 미지함수 $\phi$ 가 오른쪽에도 나타나는 꼴이다.

# 성질

## Aubin–Yau 정리

정리(Aubin–Yau 정리, Aubin–Yau theorem). $c_1(M)\lt 0$ 인 콤팩트 Kähler 다양체에는 $\mathrm{Ric}(\omega)=-\omega$ 인 Kähler 계량이 하나뿐이다.[^1][^2]

증명의 요지. $\lambda=-1$ 이면 오른쪽이 $e^{F+\phi}$ 다. $\phi$ 가 최대인 점에서 $i\partial\bar\partial\phi\le 0$ 이므로 $\omega\_\phi^n\le\omega^n$ 이고, 따라서 그 점에서 $e^{F+\phi}\le 1$ 이다. 그러므로 $\sup\phi\le\sup(-F)$ 이고, 최소점에서 같은 논법으로 $\inf\phi\ge\inf(-F)$ 다.

Calabi 추측의 증명에서 Moser 반복이 하던 $C^0$ 추정이 [최대값 원리](maximum-principle.md) 한 줄로 끝나고, 나머지 추정과 연속법(continuity method)은 Yau 의 증명과 같다. 유일성도 같다. 두 해의 차 $\psi=\phi_1-\phi_2$ 의 최대점에서 $\omega\_{\phi_1}^n\le\omega\_{\phi_2}^n$ 이므로 $e^{\psi}\le 1$ 이고, 대칭으로 $\psi\ge 0$ 이다.

## Fano 다양체의 방해

$\lambda=1$ 이면 오른쪽이 $e^{F-\phi}$ 이고 최대점의 논법은 $\sup\phi\ge\inf F$ 만 준다. $\phi$ 의 상한이 나오지 않고, 실제로 Kähler–Einstein 계량이 없는 Fano 다양체가 있다.

정리(Matsushima 정리, Matsushima theorem). Fano 다양체 $M$ 에 Kähler–Einstein 계량이 있으면 $M$ 의 정칙 벡터장의 [Lie 대수](lie-algebras.md)는 [Killing 벡터장](killing-vector-fields.md)의 Lie 대수의 복소화다. 특히 환원 가능(reductive)하다.[^3]

$\mathbb{CP}^2$ 를 한 점에서 부풀린 곡면(blow-up)의 자기동형군은 그 점을 고정하는 사영변환들이고, 그 Lie 대수는 환원 가능하지 않다. 따라서 이 곡면에는 Kähler–Einstein 계량이 없다.

$\omega\in 2\pi c_1(M)$ 에 대해 $\mathrm{Ric}(\omega)-\omega=i\partial\bar\partial h\_\omega$ 라 할 때, 정칙 벡터장 $X$ 에 대해

$$
\mathrm{Fut}(X)=\int\_M X(h\_\omega)\thinspace\omega^n
$$

을 **Futaki 불변량(Futaki invariant)** 이라 한다. 이 값은 $\omega$ 를 $2\pi c_1(M)$ 안에서 바꿔도 같다. Kähler–Einstein 계량에서는 $h\_\omega$ 가 상수이므로 $\mathrm{Fut}=0$ 이고, 위의 부풀린 곡면에서는 $\mathrm{Fut}\ne 0$ 이다.[^4]

## 유일성과 존재

정리(Bando–Mabuchi 정리, Bando–Mabuchi theorem). Fano 다양체의 Kähler–Einstein 계량은 자기동형군의 단위원 성분(identity component)에 속하는 정칙 자기동형으로 옮긴 것을 빼고 하나뿐이다.[^2]

정리(Tian). 매끄러운 복소 곡면 가운데 Fano 인 것(del Pezzo 곡면, del Pezzo surface)에 Kähler–Einstein 계량이 있는 것은 그 곡면이 $\mathbb{CP}^2$ 를 한 점이나 두 점에서 부풀린 곡면이 아닐 때와 동치다.[^5]

**K-안정성(K-stability)** 은 $M$ 을 사영공간에 넣은 뒤 $\mathbb C^\ast$ 작용으로 퇴화시킨 각 시험 배치(test configuration)에 Donaldson–Futaki 불변량(Donaldson–Futaki invariant)이라는 수를 주고, 그 수가 항상 $0$ 이상이며 곱 꼴의 퇴화에서만 $0$ 이라는 대수 조건이다. 이 조건을 K-다안정(K-polystable)이라 한다. 퇴화가 정칙 벡터장에서 나오는 곱 꼴이면 Donaldson–Futaki 불변량은 Futaki 불변량이다.

정리(Chen–Donaldson–Sun 정리, Chen–Donaldson–Sun theorem). Fano 다양체에 Kähler–Einstein 계량이 있는 것은 $M$ 이 K-다안정인 것과 동치다.[^6]

이 동치를 예견한 진술을 Yau–Tian–Donaldson 추측(Yau–Tian–Donaldson conjecture)이라 한다.

# 활용

- 곡면의 균일화. 복소 차원 $1$ 에서 세 경우의 존재가 상수 곡률 계량의 존재이고, Aubin–Yau 정리와 Calabi 추측은 이것을 $c_1\lt 0$ 과 $c_1=0$ 인 고차원 다양체로 옮긴다.
- Chern 수 부등식. $c_1\lt 0$ 인 콤팩트 복소 곡면은 Aubin–Yau 정리의 계량을 쓰면 $c_1^2\le 3c_2$ 를 만족하고, 등호는 단위공을 이산군으로 나눈 몫일 때뿐이다. 이것이 Miyaoka–Yau 부등식(Miyaoka–Yau inequality)이다.[^7]
- Kähler–Ricci 흐름. [Ricci 흐름](ricci-flow.md)을 $c_1\lt 0$ 인 Kähler 다양체에서 정규화해 돌리면 Kähler 류 안에서 움직이고 Kähler–Einstein 계량으로 수렴한다. 흐름의 식은 위 방정식의 포물형판이다.
- Kähler–Ricci 솔리톤. Futaki 불변량이 $0$ 이 아니어서 Kähler–Einstein 계량이 없는 Fano 다양체에서는 $\mathrm{Ric}(\omega)-\omega$ 가 정칙 벡터장의 [Lie 미분](lie-derivative.md)인 계량을 찾는다. 이것이 [Ricci 솔리톤](ricci-solitons.md)의 Kähler 판이다.

[^1]: Thierry Aubin, "Équations du type Monge–Ampère sur les variétés kählériennes compactes", *Comptes Rendus de l'Académie des Sciences Paris* **283** (1976), 119–121. 같은 결과가 Shing-Tung Yau, "On the Ricci curvature of a compact Kähler manifold and the complex Monge–Ampère equation. I", *Communications on Pure and Applied Mathematics* **31** (1978), 339–411 에 있다.
[^2]: Gang Tian, *Canonical Metrics in Kähler Geometry*, Lectures in Mathematics ETH Zürich, Birkhäuser, 2000. $c_1\lt 0$ 의 존재, Matsushima 정리, Futaki 불변량, Bando–Mabuchi 의 유일성을 다룬다.
[^3]: Yozô Matsushima, "Sur la structure du groupe d'homéomorphismes analytiques d'une certaine variété kaehlérienne", *Nagoya Mathematical Journal* **11** (1957), 145–150.
[^4]: Akito Futaki, "An obstruction to the existence of Einstein Kähler metrics", *Inventiones Mathematicae* **73** (1983), 437–443.
[^5]: Gang Tian, "On Calabi's conjecture for complex surfaces with positive first Chern class", *Inventiones Mathematicae* **101** (1990), 101–172.
[^6]: Xiuxiong Chen, Simon Donaldson, Song Sun, "Kähler–Einstein metrics on Fano manifolds. I, II, III", *Journal of the American Mathematical Society* **28** (2015), 183–197, 199–234, 235–278.
[^7]: Shing-Tung Yau, "Calabi's conjecture and some new results in algebraic geometry", *Proceedings of the National Academy of Sciences USA* **74** (1977), 1798–1799.

# 연관 문서

## 선수지식

- [Calabi 추측](calabi-conjecture.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #complex_analysis #analysis
