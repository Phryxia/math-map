# 등거리변환군

# 개요

**등거리변환군(isometry group)** 은 Riemann 다양체 $(M,g)$ 에서 자기 자신으로 가는 등거리변환 전체가 합성으로 이루는 군 $\mathrm{Isom}(M,g)$ 이다. Myers–Steenrod 정리(Myers–Steenrod theorem)에 따르면 이 군은 [Lie 군](lie-groups.md)이고 $M$ 에 매끄럽게 작용한다.

등거리변환은 한 점에서의 값과 미분으로 전체가 정해지므로 군의 차원은 $n(n+1)/2$ 를 넘지 않는다. 군의 [Lie 대수](lie-algebras.md)는 [Killing 벡터장](killing-vector-fields.md)으로 이루어진다.

# 직관

단위구면 $S^2$ 의 등거리변환은 원점을 고정하는 $\mathbb R^3$ 의 직교변환이다. 회전축의 방향 $2$ 개와 회전각 $1$ 개를 고르므로 회전만 모아도 $3$ 차원의 군이 된다.

구면을 한 축 방향으로 늘여 회전타원면을 만든다. 축 둘레의 회전은 여전히 길이를 보존하지만 다른 축 둘레의 회전은 그렇지 않다. [곡률](curvature.md)의 Theorema Egregium 에 따라 등거리변환은 Gauss 곡률을 보존하고, 회전타원면의 Gauss 곡률은 위도에 따라 달라지므로 등거리변환은 위도선을 위도선으로 보낸다. 연속으로 움직일 수 있는 것은 축 둘레의 회전뿐이고, 군의 차원이 $3$ 에서 $1$ 로 줄었다.

구면에서 차원이 $3$ 이었던 이유는 등거리변환이 측지선을 측지선으로 보내는 데 있다. 한 점 $p$ 가 어디로 가는지와 $p$ 의 접평면이 어떻게 돌아가는지를 정하면, $p$ 에서 나가는 측지선마다 상이 정해지고 그것으로 곡면 전체의 상이 정해진다. 점의 위치가 $2$ 차원, 접평면의 회전이 $1$ 차원이므로 $2$ 차원 곡면의 등거리변환군은 $3$ 차원을 넘지 않는다.

# 정의

$(M,g)$ 를 연결 Riemann 다양체라 한다. 미분동형 $f:M\to M$ 이 모든 점에서 $g(df\_p v,df\_p w)=g(v,w)$ 를 만족하면 **등거리변환(isometry)** 이라 한다. 등거리변환 전체는 합성으로 군을 이루고, 이것을 **등거리변환군** $\mathrm{Isom}(M,g)$ 라 한다. 한 점 $p$ 를 고정하는 등거리변환의 부분군을 $p$ 의 안정자(isotropy subgroup) $\mathrm{Isom}\_p$ 라 한다.

등거리변환은 [Riemann 계량](riemannian-metrics.md)이 정하는 거리를 보존한다. 거꾸로 거리를 보존하는 전단사는 매끄럽고 계량을 보존한다(Myers–Steenrod)[^1].

# 성질

## 한 점에서의 결정

**정리.** $M$ 이 연결이고 두 등거리변환 $f$, $h$ 가 한 점 $p$ 에서 $f(p)=h(p)$, $df\_p=dh\_p$ 이면 $f=h$ 다.

증명의 요지. 등거리변환은 [측지선](geodesics.md)을 측지선으로 보내므로 $f(\exp\_pv)=\exp\_{f(p)}(df\_pv)$ 다. 그래서 $f$ 와 $h$ 는 $p$ 의 근방에서 같다. 두 사상의 값과 미분이 같은 점의 집합은 닫혀 있고, 같은 논증으로 열려 있으므로 연결성에서 $M$ 전체다.

따라서 $f\mapsto(f(p),df\_p)$ 는 $\mathrm{Isom}(M,g)$ 를 정규직교 틀의 다발 안에 단사로 넣는다. 그 다발의 차원이 $n+n(n-1)/2=n(n+1)/2$ 이다.

## Myers–Steenrod 정리

**정리(Myers–Steenrod).** $\mathrm{Isom}(M,g)$ 는 콤팩트-열린 위상으로 유한차원 Lie 군이고, $M$ 에 대한 작용 $\mathrm{Isom}(M,g)\times M\to M$ 은 매끄럽다. 안정자 $\mathrm{Isom}\_p$ 는 콤팩트이고, $M$ 이 콤팩트이면 $\mathrm{Isom}(M,g)$ 도 콤팩트다[^1].

군의 차원은 $n(n+1)/2$ 이하이고, 이 상한에 닿으면 $M$ 은 단면곡률이 상수다[^2]. Lie 대수는 흐름이 모든 시각에서 정의되는 Killing 벡터장들의 Lie 대수이고, $M$ 이 콤팩트이면 Killing 벡터장 전체다.

## 모형 공간의 등거리변환군

| 다양체 | 등거리변환군 | 차원 |
| --- | --- | --- |
| Euclid 공간 | 평행이동과 직교변환의 반직접곱 | $n(n+1)/2$ |
| 구면 | 직교군 $\mathrm O(n+1)$ | $n(n+1)/2$ |
| 쌍곡공간 | $\mathrm O(n,1)$ 가운데 위쪽 면을 보존하는 지표 $2$ 부분군 | $n(n+1)/2$ |
| 평탄 원환면 $\mathbb R^2/\mathbb Z^2$ | 평행이동 $T^2$ 와 위수 $8$ 의 이면체군 | $2$ |

앞의 셋은 [공간형](space-forms.md)의 단순연결 모형이고 차원의 상한에 닿는다. 원환면은 같은 평탄 계량이지만 회전이 격자를 보존하지 않아 차원이 $2$ 로 떨어진다.

## 콤팩트 군의 작용

콤팩트 Lie 군 $G$ 가 다양체 $M$ 에 매끄럽게 작용하면 $M$ 위에 $G$ 의 원소가 모두 등거리변환이 되는 Riemann 계량이 존재한다. 아무 계량 $g\_0$ 을 잡고 [Haar 측도](haar-measure.md) $dk$ 로

$$
g\_p(v,w)=\int\_G g\_{0,kp}(dk\_pv,\thinspace dk\_pw)\thinspace dk
$$

를 놓으면 된다.

# 활용

- **등질공간.** $\mathrm{Isom}(M,g)$ 가 $M$ 에 추이적으로 작용하면 $M=\mathrm{Isom}(M,g)/\mathrm{Isom}\_p$ 이고, $M$ 은 [등질공간](homogeneous-spaces.md)이다. [대칭공간](symmetric-spaces.md)은 점마다 측지선을 뒤집는 등거리변환이 있는 경우다.
- **공간형의 몫.** 공간형은 모형 공간을 등거리변환군의 이산 부분군으로 나눈 몫이다. 몫이 매끄러운 다양체가 되는 조건이 부분군의 작용에 고정점이 없는 것이다.
- **대칭을 쓴 계산.** 등거리변환군이 크면 측지선, Laplace 작용소의 고유함수, 곡률을 군의 표현으로 계산한다. 구면의 [구면조화함수](spherical-harmonics.md)가 $\mathrm{SO}(n+1)$ 의 표현으로 분해되는 것이 그 예다.

[^1]: S. B. Myers, N. E. Steenrod, "The group of isometries of a Riemannian manifold", *Annals of Mathematics* 40 (1939), 400–416.
[^2]: S. Kobayashi, *Transformation Groups in Differential Geometry*, Springer, 1972, II 장 3 절. 등거리변환군의 차원 상한과 등호의 경우.

# 연관 문서

## 선수지식

- [Killing 벡터장](killing-vector-fields.md)
- [Lie 군](lie-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #group_theory #topology
