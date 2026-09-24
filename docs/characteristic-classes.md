# 특성류

# 개요

특성류는 벡터다발에 밑공간의 코호몰로지류를 대응시키는 불변량이다. 자명한 다발의 특성류는 소멸하므로, 류가 $0$ 이 아니면 그 다발은 자명하지 않다.

Chern–Weil 이론이 이 류를 접속의 곡률에서 만든다. 곡률은 접속마다 다르지만 곡률의 불변 다항식이 정하는 코호몰로지류는 접속에 의존하지 않는다.

# 직관

구 $S^2$ 의 접다발이 자명한지 묻는다. 자명하면 전역 기저가 있고, 기저의 첫 벡터는 어디서도 $0$ 이 아닌 벡터장이다.

그런 벡터장을 만들어 본다. 북극에서 남극으로 흐르는 벡터장을 적으면 두 극에서 크기가 $0$ 이 된다. 극을 피해 옆으로 돌리면 적도 방향으로 도는 벡터장이 되는데 이번에도 두 극에서 $0$ 이다. 영점의 위치는 옮길 수 있지만 없앨 수가 없다.

영점 하나를 둘러싼 작은 원을 따라가며 벡터가 몇 바퀴 도는지 센다. 북극의 흐름에서는 $+1$ 바퀴, 남극에서도 $+1$ 바퀴라 합이 $2$ 다. 적도로 도는 벡터장에서도 두 영점의 회전수를 더하면 $2$ 다. 벡터장을 바꿔도 이 합은 $2$ 다.

곡률로도 같은 수가 나온다. 반지름 $1$ 인 구의 Gauss 곡률은 어디서나 $1$ 이고 넓이가 $4\pi$ 이므로 곡률의 적분은 $4\pi$ 다. 이것을 $2\pi$ 로 나누면 $2$ 다. 구를 찌그러뜨리면 곡률은 점마다 달라지지만 적분값은 그대로다.

곡률에서 만든 양이 다발의 불변량을 주는 이 계산을 임의의 벡터다발과 임의의 불변 다항식으로 확장한 것이 특성류다.

# 정의

## 특성류

밑공간이 $M$ 인 계수 $r$ 인 복소 [벡터다발](vector-bundles.md) $E$ 마다 $H^\ast(M)$ 의 원소를 대응시키는 규칙 가운데, 사상 $f : N \to M$ 에 대해 $c(f^\ast E) = f^\ast c(E)$ 를 만족하는 것을 **특성류**라 한다.

이 자연성 조건은 특성류가 다발의 동형류에만 의존한다는 뜻이다. 다발이 자명하면 한 점으로 가는 사상의 당김이므로, 차수가 양수인 특성류는 모두 $0$ 이다.

## Chern 류

복소 벡터다발의 **전 Chern 류**는 다음 세 조건으로 결정된다.[^1]

- 자연성: $c(f^\ast E) = f^\ast c(E)$
- Whitney 합 공식: $c(E \oplus F) = c(E)\thinspace c(F)$
- 정규화: $\mathbb{CP}^1$ 위 동어반복 선다발 $\gamma$ 에 대해 $c_1(\gamma)$ 가 $H^2(\mathbb{CP}^1;\mathbb Z) \cong \mathbb Z$ 의 생성원의 음수

$c(E) = 1 + c_1(E) + \dots + c_r(E)$ 로 쓰고 $c_i(E) \in H^{2i}(M;\mathbb Z)$ 를 $i$ 번째 **Chern 류**라 한다.

실 벡터다발에는 $\mathbb Z/2$ 계수의 **Stiefel–Whitney 류** $w_i \in H^i(M;\mathbb Z/2)$ 가 같은 꼴의 공리로 정의되고, 방향 지어진 실 다발에는 계수 $r$ 차수의 **Euler 류** $e(E) \in H^r(M;\mathbb Z)$ 가 있다.

## Chern–Weil 사상

$E$ 에 접속 $\nabla$ 를 주고 곡률 2형식을 $F$ 라 한다. $\mathrm{GL}\_r$ 의 켤레 작용에서 불변인 다항식 $P$ 에 대해 $P(F)$ 는 $M$ 위의 미분형식이고, 그 [de Rham 코호몰로지](de-rham-cohomology.md)류를 대응시키는 사상을 **Chern–Weil 사상**이라 한다.

$$
c(E) \thinspace=\thinspace \left\lbrack \det\left(I + \frac{i}{2\pi}F\right)\right\rbrack
$$

$\det$ 를 차수별로 펼치면 $c_i(E)$ 가 곡률의 $i$ 차 불변 다항식으로 나온다. $c_1$ 은 $\frac{i}{2\pi}\mathrm{tr}(F)$ 의 류다.

# 성질

## 접속에 의존하지 않음

**정리(Chern–Weil)**[^2]**.** 불변 다항식 $P$ 와 접속 $\nabla$ 에 대해 $P(F^{\nabla})$ 는 닫힌 형식이고, 그 코호몰로지류는 $\nabla$ 의 선택에 의존하지 않는다.

닫힘은 Bianchi 항등식 $d_{\nabla}F = 0$ 과 $P$ 의 불변성에서 나온다. 두 접속 $\nabla_0, \nabla_1$ 의 차이는 다발 준동형이므로 $\nabla_t = (1-t)\nabla_0 + t\nabla_1$ 이 다시 접속이고, $\frac{d}{dt}P(F_t)$ 를 계산하면 완전형식이 된다. $t$ 에 대해 적분하면 두 류의 차가 완전형식의 류이므로 $0$ 이다. ∎

접속은 단위 분할로 언제나 존재하므로 이 정리가 특성류를 실제로 계산할 수단을 준다.

## 자명성 판정

**정리.** $E$ 가 자명하면 차수가 양수인 모든 특성류가 $0$ 이다.

자명한 다발은 평탄한 접속을 가지므로 $F = 0$ 이고 $P(F)$ 가 상수항만 남는다. ∎

역은 성립하지 않는다. 구 $S^n$ 의 접다발은 모든 Pontryagin 류와 Stiefel–Whitney 류가 $n$ 이 짝수일 때의 Euler 류를 빼면 소멸하지만, $n$ 이 $1, 3, 7$ 이 아니면 자명하지 않다.[^3]

## 분할 원리

**정리.** 임의의 벡터다발 $E \to M$ 에 대해 사상 $\pi : N \to M$ 이 있어 $\pi^\ast$ 가 코호몰로지에서 단사이고 $\pi^\ast E$ 가 선다발의 직합이 된다.

$E$ 의 깃발다발을 취하면 된다. 이 정리 덕분에 특성류의 항등식은 선다발의 경우만 확인하면 충분하다. Chern 류를 선다발 성분의 1차 류 $x_1,\dots,x_r$ 의 기본 대칭식으로 쓰는 것이 표준 계산법이고, 이 $x_i$ 를 **Chern 근**이라 한다. ∎

## Euler 류와 Gauss–Bonnet

**정리.** $M$ 이 콤팩트 방향 [다양체](manifolds.md)이면 $\int_M e(TM) = \chi(M)$ 이다.

Euler 류를 곡률로 쓴 것이 [Gauss–Bonnet 정리](gauss-bonnet.md)의 일반화이고, 짝수 차원에서 Pfaffian 이 그 불변 다항식이다. 구에서 이 적분이 $2$ 를 주는 것이 직관 절의 계산이다.

# 활용

- [지표 정리](index-theorem.md)의 우변이 특성류의 적분이다. Todd 류와 $\hat A$ 류가 그 자리에 들어가고, 좌변의 해석적 지표와 같다는 것이 정리의 내용이다.
- [Chern–Simons 이론](chern-simons.md)의 작용이 4차원 특성류 $\mathrm{tr}(F \wedge F)$ 의 원시함수다. 레벨의 양자화가 그 특성류의 적분이 정수라는 데서 나온다.
- 게이지 이론에서 순간자 수가 $c_2$ 의 적분이다. 이 정수가 접속의 모듈라이 공간을 성분으로 나눈다.
- 복소 대수다양체의 수치 불변량을 준다. Hirzebruch–Riemann–Roch 공식이 [층](sheaves.md) 코호몰로지의 교대합을 접다발과 층의 Chern 류로 계산한다.

[^1]: J. W. Milnor and J. D. Stasheff, *Characteristic Classes*, Annals of Mathematics Studies 76, Princeton University Press (1974), §14. Chern 류를 결정하는 공리와 그 유일성이 이 절에 있다.

[^2]: S. Kobayashi and K. Nomizu, *Foundations of Differential Geometry*, Vol. II, Wiley (1969), Ch. XII. 불변 다항식에서 코호몰로지류를 얻는 구성과 접속 독립성 증명이 이 장의 내용이다.

[^3]: J. F. Adams, "On the non-existence of elements of Hopf invariant one", *Annals of Mathematics* 72 (1960), 20–104. $S^n$ 의 접다발이 자명한 것은 $n = 1, 3, 7$ 일 때뿐임을 보인다.

# 연관 문서

## 선수지식

- [벡터다발](vector-bundles.md)
- [de Rham 코호몰로지](de-rham-cohomology.md)

## 더 알아보기

- [분류공간](classifying-spaces.md)

#differential_geometry #algebraic_topology #topology
