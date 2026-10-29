# 기하 불변량 이론

# 개요

**기하 불변량 이론(geometric invariant theory)** 은 대수군의 작용으로 대수다양체를 나눈 몫을 다시 대수다양체로 만드는 방법이다. 평면의 점 $(x,y)$ 를 $(tx,t^{-1}y)$ 로 옮기는 작용에서 궤도마다 점 하나로 모으려 하면, 두 좌표축과 원점은 서로 다른 궤도인데 궤도 위에서 일정한 어떤 다항식으로도 구별되지 않는다. 그런 다항식들로 몫을 만들고, 구별되지 않는 궤도 가운데 닫힌 것만 남기도록 점을 골라 내면 몫이 대수다양체가 된다.

# 직관

곱셈군 $\mathbb C^\ast$ 가 평면에 $t\cdot(x,y)=(tx,t^{-1}y)$ 로 작용한다고 한다. 몫을 만들려면 궤도 하나가 점 하나가 되어야 하고, 점을 가리는 데 쓸 수 있는 것은 궤도마다 일정한 값을 갖는 함수다. $xy$ 는 작용에 변하지 않고, 평면의 다항식 가운데 변하지 않는 것은 모두 $xy$ 의 다항식이다.

$xy$ 의 값으로 궤도를 가른다. 값이 $c\neq 0$ 이면 쌍곡선 $xy=c$ 가 정확히 하나의 궤도다. 값이 $0$ 인 자리에는 궤도가 셋 들어 있다. $x$ 축에서 원점을 뺀 것, $y$ 축에서 원점을 뺀 것, 원점이다. $t$ 를 $0$ 으로 보내면 $(tx,0)$ 이 원점으로 가므로 원점은 앞의 두 궤도의 닫힘 안에 있고, 다항식은 닫힘에서 같은 값을 가지므로 이 셋을 가르는 불변 다항식이 없다.

불변 다항식으로 가를 수 없는 궤도를 한 점으로 붙이면 몫이 직선 하나가 된다. 궤도와 점을 일대일로 만들려면 붙여진 궤도 가운데 하나만 남겨야 하고, 남기는 것은 닫힌 궤도인 원점이다. 궤도가 닫히지 않은 점을 미리 빼는 조건이 안정성이다.

기하 불변량 이론은 불변 다항식환의 스펙트럼을 몫으로 정의하고, 궤도가 점과 일대일로 대응하지 않는 자리를 안정성 조건으로 걸러 낸다. 모듈라이 공간을 만드는 데 쓰는 주된 방법이다.

# 정의

군 $G$ 가 **환원적**이라는 것은 유니포텐트 근기가 자명하다는 것이다. $\mathrm{GL}\_n$, $\mathrm{SL}\_n$, 토러스, 유한군이 환원적이고, 상삼각행렬의 군은 아니다.

환원적 $G$ 가 아핀 다양체 $X$ 에 작용할 때 **아핀 몫**은

$$X/\negthinspace\negthinspace/G=\mathrm{Spec}\thinspace \mathbb C\lbrack X\rbrack^G$$

이다. $\mathbb C\lbrack X\rbrack^G$ 는 작용에 변하지 않는 다항식의 환이다. 포함 $\mathbb C\lbrack X\rbrack^G\subset\mathbb C\lbrack X\rbrack$ 가 사상 $\pi\colon X\to X/\negthinspace\negthinspace/G$ 를 준다.

사영 다양체에서는 작용을 직선다발까지 올려야 몫이 정해진다. $X\subset\mathbb P^n$ 에 $G$ 가 작용하고 그 작용이 $\mathcal O(1)$ 의 당김으로 올라가 있다고 한다. 이 올림을 **선형화**라 하고, 올림이 정해지면 $X$ 의 좌표환에 $G$ 작용이 생긴다.

점 $x\in X$ 가 **반안정**이라는 것은 $x$ 를 대표하는 아핀 원뿔의 점에서 $0$ 이 아닌 값을 갖는 불변 동차다항식이 있다는 것이다. 반안정점 가운데 궤도가 닫히고 안정화군이 유한한 것을 **안정**이라 한다. 반안정점의 집합을 $X^{ss}$, 안정점의 집합을 $X^{s}$ 로 적는다.

**사영 몫**은 불변 동차다항식이 만드는 분지환의 사영 스펙트럼이고, 집합으로는 $X^{ss}$ 를 궤도의 닫힘이 만나는 관계로 나눈 몫이다.

$$X/\negthinspace\negthinspace/G=\mathrm{Proj}\thinspace \bigoplus\_{m\ge 0} H^0(X,\mathcal O(m))^G$$

# 성질

## 불변식환의 유한생성

환원적 군이 유한생성 가환대수에 작용하면 불변식환도 유한생성이다.[^1]

이 정리가 없으면 $\mathrm{Spec}\thinspace\mathbb C\lbrack X\rbrack^G$ 가 유한 차원 다양체가 아니다. 환원적 조건이 필요하다. 환원적이 아닌 군의 작용에서는 불변식환이 유한생성이 아닌 예가 있다.

## 몫의 점과 닫힌 궤도

$\pi\colon X\to X/\negthinspace\negthinspace/G$ 의 섬유마다 닫힌 궤도가 정확히 하나 있다. 따라서 $X/\negthinspace\negthinspace/G$ 의 점은 $X$ 의 닫힌 궤도와 일대일로 대응한다.

증명의 요지. 궤도의 닫힘은 $G$ 불변 닫힌 집합이고 그 안의 극소 궤도가 닫혀 있다. 불변 다항식은 닫힘에서 같은 값을 가지므로 같은 섬유의 두 닫힌 궤도는 서로의 닫힘에 들어가지 않고, 환원적 군에 대해 불변 다항식이 서로소인 두 불변 닫힌 집합을 가르므로 두 닫힌 궤도가 같은 섬유에 있을 수 없다.

$X^s$ 위에서는 모든 궤도가 닫혀 있고 안정화군이 유한하다. 그러므로 $X^s/G$ 는 궤도의 집합 그대로이고 $X/\negthinspace\negthinspace/G$ 의 열린 부분이다.

## Hilbert–Mumford 판정

안정성을 1매개변수 부분군으로 판정한다. $\lambda\colon\mathbb C^\ast\to G$ 마다 $\lambda(t)\cdot\tilde x$ 의 극한이 선형화에서 갖는 무게를 $\mu(x,\lambda)$ 로 적는다.[^2]

| 조건 | 판정 |
| --- | --- |
| 모든 $\lambda\neq 1$ 에서 $\mu(x,\lambda)\ge 0$ | $x$ 가 반안정 |
| 모든 $\lambda\neq 1$ 에서 $\mu(x,\lambda)\gt 0$ | $x$ 가 안정 |
| 어떤 $\lambda$ 에서 $\mu(x,\lambda)\lt 0$ | $x$ 가 불안정 |

군 전체를 보는 조건을 토러스 한 개짜리 부분군들로 바꾸므로 판정이 계산 가능한 문제가 된다. 평면의 점 $n$ 개나 곡선의 심기 같은 구체적 작용에서 안정성 조건을 좌표로 적을 때 이 판정을 쓴다.

## 심플렉틱 몫과의 대응

$X$ 가 [Kähler 다양체](kahler-manifolds.md)이고 $G$ 의 최대 콤팩트 부분군 $K$ 가 [모멘트 사상](moment-map.md) $\mu\colon X\to\mathfrak k^\ast$ 를 갖는 해밀턴 작용을 하면 두 몫이 일치한다.

$$X^{ss}/\negthinspace\negthinspace/G\cong \mu^{-1}(0)/K$$

안정점의 궤도마다 $\mu=0$ 인 점이 $K$ 궤도 하나만큼 있다는 것이 이 대응의 내용이다.[^3] 대수적 안정성 조건과 [심플렉틱 다양체](symplectic-manifolds.md)의 모멘트 사상 영점 조건이 같은 것을 가린다.

# 활용

- **모듈라이 공간의 구성.** [모듈라이 공간](moduli-space.md)을 만들 때 대상을 사영공간에 심은 전체를 [Hilbert 스킴](hilbert-scheme.md)으로 매개하고 심기의 자유도를 $\mathrm{GL}\_n$ 의 작용으로 지운다. 안정곡선과 안정 벡터다발의 안정성 조건이 Hilbert–Mumford 판정을 그 작용에 적용해 나온 것이다.
- **사영공간의 몫과 토릭 다양체.** 토러스가 $\mathbb C^n$ 에 무게로 작용할 때 선형화를 바꾸면 안정점의 집합이 바뀌고 몫도 바뀐다. 이렇게 얻는 몫이 [토릭 다양체](toric-varieties.md)이고, 선형화의 공간을 나누는 벽을 넘을 때 몫이 쌍유리 변환으로 바뀐다.
- **표현의 분류.** 군이나 대수의 표현을 [행렬](matrices.md)의 조로 적으면 기저의 선택이 $\mathrm{GL}\_n$ 의 작용이 된다. 표현의 동형류를 매개하는 공간을 이 작용의 몫으로 얻고, 안정성 조건이 기약성이나 반단순성에 대응한다.

[^1]: M. Nagata, "Invariants of a Group in an Affine Ring", Journal of Mathematics of Kyoto University **3** (1964), 369–377.

[^2]: D. Mumford, J. Fogarty and F. Kirwan, *Geometric Invariant Theory*, 3rd ed., Springer, 1994, Chapter 2.

[^3]: G. Kempf and L. Ness, "The Length of Vectors in Representation Spaces", in *Algebraic Geometry*, Lecture Notes in Mathematics **732**, Springer, 1979, 233–243.

# 연관 문서

## 선수지식

- [대수군](algebraic-groups.md)
- [모듈라이 공간](moduli-space.md)

## 더 알아보기

- [벡터다발의 모듈라이 공간](moduli-of-vector-bundles.md)

#algebra #group_theory #differential_geometry
