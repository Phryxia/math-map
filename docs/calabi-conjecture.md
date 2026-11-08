# Calabi 추측

# 개요

**Calabi 추측(Calabi conjecture)** 은 콤팩트 Kähler 다양체에서 Ricci 곡률을 첫 Chern 류의 대표 형식 아무것으로나 정해 줄 수 있고, 그런 Kähler 계량이 Kähler 류마다 하나뿐이라는 정리다. 1954 년에 Calabi 가 제안했고 1978 년에 Yau 가 증명했다. 곡면에서 Gauss 곡률을 원하는 함수로 바꾸려면 계량을 바꿔야 하고, 계량의 변화가 곡률을 어떻게 바꾸는지는 편미분방정식으로 적힌다. Calabi 추측은 Kähler 계량의 변화를 함수 하나로 적어 그 방정식을 복소 [Monge–Ampère 방정식](monge-ampere-equation.md)으로 바꾸고, 그 방정식의 해의 존재와 유일성으로 답한다.

# 직관

복소 1 차원 콤팩트 곡면에서 Kähler 형식 $\omega$ 의 Ricci 형식은 Gauss 곡률에 넓이 형식을 곱한 것이다. 계량을 $\omega\_\phi=\omega+i\partial\bar\partial\phi$ 로 바꾸면 넓이 형식이 $e^{F}$ 배가 되는데, $\omega\_\phi=e^F\omega$ 이므로 $F$ 와 $\phi$ 는 $1+\Delta\_\omega\phi=e^F$ 꼴의 식으로 이어진다. 넓이의 총합은 $\phi$ 를 바꿔도 같으므로 $\int e^F\omega=\int\omega$ 여야 한다.

Ricci 형식은 넓이 형식의 로그의 $i\partial\bar\partial$ 로 적히므로, 넓이 형식을 $e^F$ 배 하면 Ricci 형식이 $-i\partial\bar\partial F$ 만큼 바뀐다. 원하는 Ricci 형식과 지금 Ricci 형식의 차이 $-i\partial\bar\partial F$ 가 주어지면 $F$ 가 상수 차이로 정해지고, 남은 일은 $\phi$ 를 구하는 것이다. 복소 차원 $n$ 에서는 넓이 형식 자리에 부피 형식 $\omega^n$ 이 오고, $\phi$ 에 대한 식이 행렬식의 식이 된다.

# 정의

## Ricci 형식과 첫 Chern 류

[Kähler 다양체](kahler-manifolds.md) $M$ 의 Kähler 형식을 국소 좌표에서 $\omega=i\sum g\_{j\bar k}\thinspace dz_j\wedge d\bar z_k$ 로 쓸 때

$$
\mathrm{Ric}(\omega)=-i\partial\bar\partial\log\det(g\_{j\bar k})
$$

를 $\omega$ 의 **Ricci 형식(Ricci form)** 이라 한다. 좌표를 바꾸면 $\det(g\_{j\bar k})$ 가 정칙함수의 절댓값 제곱 배로 바뀌고 그 로그의 $\partial\bar\partial$ 은 $0$ 이므로, 이 형식은 좌표에 의존하지 않는 닫힌 실 $(1,1)$ 형식이다. 그 de Rham 류 $\lbrack\mathrm{Ric}(\omega)\rbrack/2\pi$ 는 $\omega$ 에 의존하지 않고, 이것이 $M$ 의 **첫 Chern 류(first Chern class)** $c_1(M)$ 다.[^1] 첫 Chern 류는 [특성류](characteristic-classes.md)의 하나다.

## Kähler 류

같은 de Rham 류 $\lbrack\omega\rbrack$ 에 속하는 Kähler 형식은 $\partial\bar\partial$ 보조정리($\partial\bar\partial$-lemma)에 따라 실함수 $\phi$ 로 $\omega\_\phi=\omega+i\partial\bar\partial\phi$ 라 쓸 수 있다. 류 $\lbrack\omega\rbrack$ 를 **Kähler 류(Kähler class)** 라 한다. 평탄한 원환면 $\mathbb C/(\mathbb Z+i\mathbb Z)$ 에서 $\omega=\frac i2dz\wedge d\bar z$ 이면 $\mathrm{Ric}(\omega)=0$ 이고 $c_1=0$ 이다.

# 성질

## Calabi–Yau 정리

정리. $M$ 이 콤팩트 Kähler 다양체이고 $\omega$ 가 Kähler 형식이며 $\rho$ 가 $2\pi c_1(M)$ 을 대표하는 닫힌 실 $(1,1)$ 형식이면, $\lbrack\omega\_\phi\rbrack=\lbrack\omega\rbrack$ 이고 $\mathrm{Ric}(\omega\_\phi)=\rho$ 인 Kähler 형식 $\omega\_\phi$ 가 하나뿐이다.[^2][^1]

$c_1(M)=0$ 이면 $\rho=0$ 을 고를 수 있으므로, 각 Kähler 류에 Ricci 평탄한 Kähler 계량이 하나씩 있다. 이런 계량을 가진 다양체가 Calabi–Yau 다양체(Calabi–Yau manifold)다.

## 복소 Monge–Ampère 방정식으로의 환원

$\mathrm{Ric}(\omega)-\rho=i\partial\bar\partial F$ 인 실함수 $F$ 를 잡고 상수를 더해 $\int\_M e^F\omega^n=\int\_M\omega^n$ 로 맞춘다. 그러면 정리는 다음 방정식의 해 $\phi$ 가 상수 차이를 빼고 하나라는 것과 같다.

$$
(\omega+i\partial\bar\partial\phi)^n=e^F\omega^n,\qquad\omega+i\partial\bar\partial\phi\gt 0
$$

양변의 로그에 $-i\partial\bar\partial$ 를 취하면 왼쪽이 $\mathrm{Ric}(\omega\_\phi)$, 오른쪽이 $\mathrm{Ric}(\omega)-i\partial\bar\partial F=\rho$ 다.

## 유일성

Calabi 가 증명했다. 두 해 $\phi_1$, $\phi_2$ 에서 $\omega_1^n-\omega_2^n=0$ 이고, 이 차를 $i\partial\bar\partial(\phi_1-\phi_2)$ 와 양의 $(n-1,n-1)$ 형식의 곱으로 인수분해한다. $\phi_1-\phi_2$ 를 곱해 적분하고 부분적분하면 $\int\vert\partial(\phi_1-\phi_2)\vert^2$ 에 양의 가중을 준 적분이 $0$ 이 되므로 $\phi_1-\phi_2$ 는 상수다.[^1]

## 존재

Yau 는 연속법(continuity method)으로 증명했다. $t\in\lbrack 0,1\rbrack$ 에서 $F$ 를 $tF+c_t$ 로 바꾼 방정식을 놓으면 $t=0$ 에서 $\phi=0$ 이 해다. 해가 있는 $t$ 의 집합이 열려 있다는 것은 선형화한 연산자 $\Delta\_{\omega\_\phi}$ 가 평균 $0$ 인 함수 위에서 가역이라는 것에서 나온다. 닫혀 있다는 것은 해의 선험 추정에서 나온다. $\sup\vert\phi\vert$ 의 $C^0$ 추정이 Moser 반복으로, 그 위에서 $\Delta\phi$ 의 상한이 [최대값 원리](maximum-principle.md)로, 3계 도함수의 추정이 Calabi 의 계산으로 얻어진다.[^2] 2계 도함수까지의 상한에서 3계로 가는 단계는 [Evans–Krylov 정리](evans-krylov-theorem.md)로도 할 수 있다.

# 활용

- Calabi–Yau 다양체. $c_1=0$ 인 사영 다양체, 예를 들어 $\mathbb{CP}^4$ 안의 5 차 초곡면은 Ricci 평탄한 계량을 갖는다. 그 계량은 명시적으로 적히지 않고 이 정리로만 존재가 증명된다.
- [Kähler–Einstein 계량](kahler-einstein-metrics.md). $\mathrm{Ric}(\omega)=\lambda\omega$ 인 계량을 찾는 문제는 오른쪽에 $e^{-\lambda\phi}$ 가 붙은 같은 꼴의 방정식이다. $c_1\lt 0$ 이면 Aubin 과 Yau 가 존재를 증명했고, $c_1=0$ 이면 이 정리의 경우다.[^1]
- [Ricci 흐름](ricci-flow.md). Kähler 다양체 위의 Ricci 흐름은 Kähler 퍼텐셜에 대한 포물형 복소 Monge–Ampère 방정식이 되고, $c_1=0$ 이면 흐름이 이 정리의 Ricci 평탄 계량으로 수렴한다.

[^1]: Gábor Székelyhidi, *An Introduction to Extremal Kähler Metrics*, Graduate Studies in Mathematics 152, American Mathematical Society, 2014, 3 장과 4 장. Ricci 형식과 첫 Chern 류, Calabi 의 유일성 증명, Yau 의 선험 추정, Kähler–Einstein 계량을 다룬다.
[^2]: Shing-Tung Yau, "On the Ricci curvature of a compact Kähler manifold and the complex Monge–Ampère equation. I", *Communications on Pure and Applied Mathematics* **31** (1978), 339–411.

# 연관 문서

## 선수지식

- [Kähler 다양체](kahler-manifolds.md)
- [Monge–Ampère 방정식](monge-ampere-equation.md)

## 더 알아보기

- [Kähler–Einstein 계량](kahler-einstein-metrics.md)

#differential_geometry #analysis #complex_analysis
