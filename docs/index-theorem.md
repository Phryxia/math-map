# 지표 정리

# 개요

**지표 정리(Atiyah–Singer index theorem)** 는 콤팩트 [다양체](manifolds.md) 위 타원 미분작용소의 해석적 지표가 작용소의 최고차 기호로 정해지는 위상적 지표와 같다는 정리다. 원 위의 미분방정식 $f'+af=g$ 에서 상수 $a$ 를 $0$ 에서 조금 옮기면 $g=0$ 의 해의 차원이 $1$ 에서 $0$ 으로 뛰지만, 해의 차원에서 해가 없는 우변들의 차원을 뺀 값은 바뀌지 않는다. 지표 정리는 이 바뀌지 않는 정수를 미분방정식을 풀지 않고, 다양체의 특성류와 작용소의 기호로 만든 적분 하나로 계산한다.

# 직관

원 $\mathbb R/2\pi\mathbb Z$ 위의 방정식 $f'+af=g$ 를 본다. $a=0$ 이면 $g=0$ 의 해는 상수함수이므로 해공간이 1 차원이다. 우변 $g$ 는 $\int_0^{2\pi}g\thinspace dx=0$ 일 때만 풀리므로, 풀리지 않는 우변의 방향도 상수함수 하나로 1 차원이다. $1-1=0$ 이다.

$a$ 가 $0$ 이 아닌 작은 실수이면 $e^{-ax}$ 가 주기함수가 아니므로 $g=0$ 의 해는 $0$ 뿐이고, 모든 $g$ 에 대해 해가 있어 풀리지 않는 방향도 없다. $0-0=0$ 이다. 두 차원은 각각 $1$ 에서 $0$ 으로 뛰지만 차이는 $0$ 으로 그대로다.

곡면에서도 같은 차이를 센다. 콤팩트 곡면 $M$ 에서 $D=d+d^\ast$ 를 짝수 차수 형식에서 홀수 차수 형식으로 가는 작용소로 두면, [Hodge 이론](hodge-theory.md)으로 해공간과 풀리지 않는 방향이 조화형식으로 적힌다. 차이는 $b_0-b_1+b_2$, 곧 [Euler 지표](euler-characteristic.md) $\chi(M)$ 이다. [Gauss–Bonnet 정리](gauss-bonnet.md)는 같은 수를 [곡률](curvature.md)의 적분 $\frac1{2\pi}\int_MK\thinspace dA$ 로 준다. 해를 세는 쪽과 곡률을 적분하는 쪽이 같은 수를 준다.

# 정의

## 타원 작용소

$E,F$ 가 콤팩트 다양체 $M$ 위의 [벡터다발](vector-bundles.md)이고 $D\colon\Gamma(E)\to\Gamma(F)$ 가 $m$ 계 미분작용소일 때, 최고차 계수만 남기고 $\partial/\partial x^j$ 를 $i\xi_j$ 로 바꾼 것이 **주기호(principal symbol)** 다.

$$
\sigma_D(x,\xi)\colon E_x\to F_x,\qquad (x,\xi)\in T^\ast M
$$

모든 $\xi\ne0$ 에서 $\sigma_D(x,\xi)$ 가 동형이면 $D$ 가 **타원적(elliptic)** 이다. 직관 절의 $d/dx+a$ 는 기호가 $i\xi$ 이므로 타원적이다. Laplace 작용소는 기호가 $-\vert\xi\vert^2$ 라 타원적이고, 파동 작용소는 $\xi$ 가 빛원뿔 위에서 퇴화해 타원적이지 않다.

## 해석적 지표

타원 작용소 $D$ 의 **해석적 지표(analytic index)** 는 다음 정수다.

$$
\mathrm{ind}\_{\mathrm{an}}(D)=\dim\ker D-\dim\mathrm{coker}\thinspace D
$$

직관 절의 $d/dx+a$ 는 $a=0$ 에서 $1-1=0$, 작은 $a\ne 0$ 에서 $0-0=0$ 이다. 곡면의 $d+d^\ast$ 는 $\chi(M)$ 이다.

## 위상적 지표

**위상적 지표(topological index)** 는 기호만으로 만든다. $\sigma_D$ 가 $T^\ast M$ 위에서 콤팩트 받침을 갖는 $K$ 이론 류 $\lbrack\sigma_D\rbrack\in K(T^\ast M)$ 를 정의하고, 이를 한 점의 $K$ 이론으로 밀어내려 정수를 얻는다. 특성류로 쓰면

$$
\mathrm{ind}\_{\mathrm{top}}(D)=(-1)^{\dim M}\int_{T^\ast M}\mathrm{ch}(\lbrack\sigma_D\rbrack)\thinspace\mathrm{Td}(TM\otimes\mathbb C)
$$

이고 $\mathrm{ch}$ 는 Chern 지표(Chern character), $\mathrm{Td}$ 는 [곱셈적 종수](multiplicative-genera.md)의 하나인 Todd 류(Todd class)다. 곡면의 $d+d^\ast$ 에서는 이 적분이 Euler 류의 적분, 곧 $\frac1{2\pi}\int_MK\thinspace dA$ 가 된다.

## 지표 정리

콤팩트 다양체 위의 모든 타원 작용소에서 $\mathrm{ind}\_{\mathrm{an}}(D)=\mathrm{ind}\_{\mathrm{top}}(D)$ 다. 이것이 Atiyah–Singer 지표 정리다. 곡면의 $d+d^\ast$ 에서는 Gauss–Bonnet 정리 $\chi(M)=\frac1{2\pi}\int_MK\thinspace dA$ 다.

# 성질

## Fredholm 성질

콤팩트 다양체 위에서 타원 작용소는 [Fredholm 작용소](fredholm-operators.md)다. 핵과 여핵이 모두 유한차원이므로 해석적 지표가 정수로 정의된다.

## 증명의 세 방법

원래 증명은 [코보디즘](cobordism.md)으로 일반 경우를 이미 아는 경우로 환원한다. $K$ 이론을 쓰는 증명은 두 지표가 모두 $K(T^\ast M)$ 위의 준동형이며 몇 가지 공리를 만족함을 보인 뒤, 그 공리가 준동형을 유일하게 결정함을 쓴다.

세 번째가 열핵 방법이다. 0 이 아닌 고윳값들이 양쪽에서 짝을 이뤄 상쇄되므로 항등식

$$
\mathrm{ind}(D)=\mathrm{tr}\thinspace e^{-tD^\ast D}-\mathrm{tr}\thinspace e^{-tDD^\ast}
$$

이 모든 $t\gt 0$ 에서 성립한다. 좌변이 $t$ 에 무관하므로 $t\to0$ 극한을 취하면 [열핵 전개](heat-kernel-asymptotics.md)에서 특성류 적분이 나온다. 초대칭을 쓰는 물리학의 논증이 같은 구조를 따른다.

## 지표의 호모토피 불변성

유한차원에서 [선형사상](linear-maps.md) $A\colon V\to W$ 의 지표는 $\dim V-\dim W$ 이고 $A$ 에 무관하다. 계수가 변하면 핵과 여핵이 같은 만큼 함께 변한다. 무한차원에서도 $D$ 를 연속적으로 움직일 때 핵에서 빠져나간 벡터만큼 여핵에서도 빠져나가므로 차이가 보존된다.

그래서 지표는 타원 작용소의 공간에서 $D$ 의 연결 성분만 보는 양이다. 연결 성분을 결정하는 것은 최고차 기호이고, 기호는 여접다발 위의 [벡터다발](vector-bundles.md) 사상이라 위상적 대상이다.

## 주요 특수 사례

| 작용소 / 복합체 | 지표 | 위상적 표현 |
|---|---|---|
| de Rham $d+d^\ast$ | $\chi(M)$ | Euler 류의 적분 (Gauss–Bonnet) |
| 부호수 작용소 | $\mathrm{sign}(M)$ | $L$ 종수 ([Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)) |
| Dolbeault $\bar\partial+\bar\partial^\ast$ | $\sum(-1)^q\dim H^q(M,\mathcal O)$ | Todd 류 ([Riemann–Roch 정리](riemann-roch.md)) |
| [Dirac 작용소](dirac-operator.md) | $\mathrm{ind}\thinspace{\not}D$ | $\hat A$ 종수 |

de Rham 복합체의 지표는 $\chi(M)$ 이고, 같은 수를 벡터장의 영점 지표 합으로 세는 것이 [Poincaré–Hopf 정리](poincare-hopf.md)다.

스핀 다양체에서 $\mathrm{ind}\thinspace{\not}D=\hat A(M)$ 이고 좌변이 정수이므로 $\hat A$ 종수가 정수다. 이 정수성은 위상만으로 자명하지 않으며, 이 정수성에서 4 차원 스핀 다양체의 부호수가 16 으로 나누어진다는 Rokhlin 정리(Rokhlin's theorem)가 따라온다.

양의 스칼라 곡률을 가지면 Lichnerowicz 공식(Lichnerowicz formula)으로 $\ker{\not}D=0$ 이므로 $\hat A(M)=0$ 이어야 한다. 곡률에 대한 기하적 가정이 위상적 장애를 만든다.

## 가정

- [콤팩트성](compactness.md)이 없으면 핵이 무한차원일 수 있다. 경계가 있는 경우에는 경계 조건이 필요하고, 그때의 지표 공식이 Atiyah–Patodi–Singer 지표 정리(Atiyah–Patodi–Singer index theorem)이며 국소적이지 않은 보정항 $\eta$ 불변량(eta invariant)이 붙는다.
- 타원성이 없으면 핵이 유한차원이 아닐 수 있다. 쌍곡형이나 포물형 작용소가 그 예다.
- 계수가 매끄러워야 기호가 다발 사상으로 정의된다.

## 확장

- 콤팩트군이 작용하면 지표가 표현이 되고, 이것이 동변 지표 정리(equivariant index theorem)다. 그 지표에 대한 국소화 공식이 Atiyah–Bott 고정점 정리(Atiyah–Bott fixed-point theorem)다. [Lefschetz 고정점 공식](lefschetz-fixed-point.md)이 특수한 경우다.
- 작용소가 매개변수 공간을 따라 움직이면 지표가 정수가 아니라 $K$ 이론 류가 되고, 이것이 족 지표 정리(families index theorem)다. 게이지 이론의 변칙(anomaly) 계산에 쓰인다.
- 비가환 기하(noncommutative geometry)에서 Connes 는 엽층의 잎 공간처럼 다양체가 아닌 공간에서도 지표 정리를 세웠다. 공간을 $C^\ast$ 대수로 대체하고 $K$ 이론을 순환 코호몰로지(cyclic cohomology)와 짝지운다.
- 물리에서 지표는 초대칭 양자역학의 Witten 지표(Witten index)이고 장론의 변칙이 지표 정리로 계산된다. 열핵 증명이 경로적분 논증과 대응한다.

# 활용

- 대수기하에서 선다발의 단면의 차원을 Riemann–Roch 정리로 계산한다. 곡선에서는 $\ell(D)-\ell(K-D)=\deg D+1-g$ 이므로 종수만 알면 단면 공간의 크기를 알 수 있다.
- $\hat A$ 종수가 0 이 아니면 그 다양체에 양의 스칼라 곡률 계량이 없다. 지표가 0 이 아니라는 것이 기하적 구조의 부재를 증명한다.
- 게이지 이론에서 순간자 모듈라이 공간의 차원이 어떤 타원 복합체의 지표로 나온다. [Donaldson 불변량](donaldson-invariants.md)과 [Seiberg–Witten 이론](seiberg-witten-theory.md)의 모듈라이 공간 차원이 이 지표로 계산된다.

# 연관 문서

## 선수지식

- [Hodge 이론](hodge-theory.md)
- [Fredholm 작용소](fredholm-operators.md)
- [Gauss–Bonnet 정리](gauss-bonnet.md)

## 더 알아보기

- [Riemann–Roch 정리](riemann-roch.md)

#differential_geometry #algebraic_topology #theorem
