# 기하화 정리

# 개요

**기하화 정리(geometrization theorem)** 는 3 차원 공간처럼 생긴 닫힌 도형을 정해진 방법으로 잘라 내면 조각마다 여덟 가지 표준 기하 가운데 하나가 들어간다는 정리다. 닫힌 곡면은 구면, 평면, 쌍곡 평면 가운데 하나를 본떠 만들 수 있어 셋으로 나뉘지만, 3 차원 도형 하나에는 균일한 기하를 통째로 줄 수 없는 경우가 있다. 이 정리는 구면과 원환면을 따라 먼저 자르고 남은 조각에 기하를 주어, 3 차원 [다양체](manifolds.md)를 여덟 기하의 조각으로 분류한다.

# 직관

쌍곡 기하가 들어가는 닫힌 3 다양체 $M_1$, $M_2$ 를 하나씩 잡고, 각각에서 공을 하나씩 떼어 경계 구면을 붙인 연결합 $M_1\char35{} M_2$ 를 만든다. 붙인 자리의 구면은 두 조각을 가르고, 어느 쪽으로도 한 점으로 오그라들지 않는다. 쌍곡 기하가 들어간 닫힌 3 다양체의 보편덮개는 쌍곡 공간 $\mathbb H^3$ 이고 그 안의 구면은 모두 한 점으로 오그라드므로, $M_1\char35{} M_2$ 에는 쌍곡 기하가 들어가지 않는다.

원환면도 같은 일을 한다. 오그라들지 않는 원환면이 들어 있으면 [기본군](fundamental-group.md) 안에 $\mathbb Z^2$ 가 들어가는데, 닫힌 쌍곡 다양체의 기본군에는 그런 부분군이 없다. 그러므로 먼저 이런 구면을 따라 자르고, 다음에 이런 원환면을 따라 자른다. 더 자를 것이 없을 때 조각마다 기하가 들어간다는 것이 기하화 정리다.

# 정의

## 모형 기하

단순연결 Riemann 다양체 $X$ 와 그 위에 작용하는 [Lie 군](lie-groups.md) $G$ 의 쌍 $(X,G)$ 가 다음을 만족하면 **모형 기하(model geometry)** 라 한다.

1. $G$ 가 등거리사상으로 추이적으로 작용하고 점 고정군이 콤팩트다.
2. $X/\Gamma$ 가 콤팩트인 이산 부분군 $\Gamma\le G$ 가 존재한다.
3. $G$ 는 이 성질을 갖는 군 가운데 극대다.

닫힌 3 다양체 $M$ 이 어떤 이산 부분군 $\Gamma$ 에 대해 $X/\Gamma$ 와 미분동형이면 $M$ 이 기하 $X$ 를 갖는다고 한다.

- $(S^3,\mathrm{SO}(4))$ 는 모형 기하다. $S^3$ 자체가 콤팩트이므로 $\Gamma$ 는 자명군이어도 된다. $\mathbb Z/p$ 가 작용한 몫인 [렌즈 공간](lens-spaces.md)이 기하 $S^3$ 을 갖는다.
- $(\mathbb E^3,\mathrm{Isom}(\mathbb E^3))$ 는 모형 기하이고, 평행이동 $\mathbb Z^3$ 의 몫인 3 차원 원환면이 기하 $\mathbb E^3$ 을 갖는다.
- $\mathbb E^3$ 에 $\mathbb E^2\times\mathbb R$ 의 곱을 보존하는 등거리군만 주면 조건 3 을 어긴다. 더 큰 군 $\mathrm{Isom}(\mathbb E^3)$ 이 있기 때문이다.

## 여덟 개의 목록

| 기하 | 곡률 성격 | 등거리군 차원 | 전형적인 다양체 |
|---|---|---|---|
| $S^3$ | 상수 $+1$ | 6 | 렌즈 공간, Poincaré 구면 |
| $\mathbb E^3$ | 상수 $0$ | 6 | 3 차원 원환면과 그 유한 몫 |
| $\mathbb H^3$ | 상수 $-1$ | 6 | 대부분의 매듭 여집합 |
| $S^2\times\mathbb R$ | 혼합 | 4 | $S^2\times S^1$ |
| $\mathbb H^2\times\mathbb R$ | 혼합 | 4 | 쌍곡 곡면 $\times S^1$ |
| $\widetilde{\mathrm{SL}\_2\mathbb R}$ | 꼬인 곱 | 4 | 쌍곡 곡면 위의 단위 접다발 |
| $\mathrm{Nil}$ | 멱영 | 4 | 원환면 위의 비자명 원다발 |
| $\mathrm{Sol}$ | 가해 | 3 | Anosov 사상의 사상원환면 |

$\mathrm{Nil}$ 은 3 차원 Heisenberg 군이고, $\mathrm{Sol}$ 은 두 방향이 각각 지수적으로 늘어나고 줄어드는 $\mathbb R^2\rtimes\mathbb R$ 이다.

## 소수 분해와 원환면 분해

닫힌 방향 가능 3 다양체 $M$ 이 $M=A\char35{} B$ 이면 $A$ 나 $B$ 가 $S^3$ 일 때 $M$ 을 **소수 다양체(prime manifold)** 라 한다. 3 다양체 안의 원환면 $T$ 에서 $\pi_1(T)\to\pi_1(M)$ 이 단사이면 $T$ 를 **비압축(incompressible)** 원환면이라 하고, 비압축 원환면이 경계와 평행한 것밖에 없으면 $M$ 을 **atoroidal** 이라 한다. 원으로 겹치지 않게 채워지고 각 원 근방이 표준 모양인 3 다양체를 **Seifert 올뭉치(Seifert fibered space)** 라 한다.

- 직관의 $M_1\char35{} M_2$ 는 소수 다양체가 아니고, $M_1$ 과 $M_2$ 는 소수 다양체다.
- 3 차원 원환면 $T^3=T^2\times S^1$ 안의 $T^2\times\lbrace p\rbrace$ 는 비압축 원환면이다. $T^3$ 은 원 $\lbrace q\rbrace\times S^1$ 들로 채워진 Seifert 올뭉치이기도 하다.

# 성질

## 분해 정리

닫힌 방향 가능 3 다양체는 소수 다양체들의 연결합으로 분해되고, 그 분해는 순서와 $S^3$ 인자를 빼고 유일하다. 이것이 Kneser–Milnor 정리(Kneser–Milnor theorem)다.

$S^2\times S^1$ 이 아닌 닫힌 소수 3 다양체 안에는 비압축 원환면들의 유한족이 있어, 그것을 따라 자르면 각 조각이 Seifert 올뭉치이거나 atoroidal 이다. 그런 원환면족은 isotopy 를 빼고 유일하다. 이것이 JSJ(Jaco–Shalen–Johannson) 분해다.

## 기하화 정리

닫힌 방향 가능 3 다양체를 소수 분해와 JSJ 분해로 자른 조각은 각각 여덟 모형 기하 가운데 하나를 갖는다. Thurston 이 추측했고 Perelman 이 증명했다. atoroidal 이고 기본군이 무한인 조각이 쌍곡 기하를 갖는다는 것이 증명에서 가장 어려운 부분이다.

## 모형 기하의 분류 방법

3 차원 모형 기하는 점 하나를 고정하는 등거리군의 크기로 갈린다. 고정군이 $\mathrm{SO}(3)$ 전부이면 모든 방향이 같아 상수 곡률 기하 $S^3$, $\mathbb E^3$, $\mathbb H^3$ 셋이 된다. $\mathrm{SO}(2)$ 이면 한 방향이 특별해 2 차원 기하에 직선을 곱하거나 꼬아 올린 $S^2\times\mathbb R$, $\mathbb H^2\times\mathbb R$, $\widetilde{\mathrm{SL}\_2\mathbb R}$, $\mathrm{Nil}$ 이 된다. 유한군만 남으면 $\mathrm{Sol}$ 이다. 등거리군 차원 6, 4, 3 이 이 세 경우에 대응한다.

## 일곱 기하의 분류

$\mathbb H^3$ 을 뺀 일곱 기하의 닫힌 다양체는 분류되어 있다.

- $S^3$, $\mathbb E^3$, $S^2\times\mathbb R$, $\mathbb H^2\times\mathbb R$, $\widetilde{\mathrm{SL}\_2\mathbb R}$, $\mathrm{Nil}$ 의 여섯은 Seifert 올뭉치이고, 밑공간인 2 차원 오비폴드(orbifold)와 몇 개의 수치 불변량으로 결정된다.
- $\mathrm{Sol}$ 다양체는 원 위의 원환면 다발이고 붙임사상이 $\mathrm{SL}\_2(\mathbb Z)$ 의 쌍곡 원소인 것, 또는 그 몫이다.

Seifert 올뭉치의 기하는 밑 오비폴드의 [Euler 지표](euler-characteristic.md)의 부호와 다발의 Euler 수가 $0$ 인지로 정해진다.

| 오비폴드 Euler 지표 / 다발 Euler 수 | 0 | 0 이 아님 |
|---|---|---|
| $\gt 0$ | $S^2\times\mathbb R$ | $S^3$ |
| $=0$ | $\mathbb E^3$ | $\mathrm{Nil}$ |
| $\lt 0$ | $\mathbb H^2\times\mathbb R$ | $\widetilde{\mathrm{SL}\_2\mathbb R}$ |

[곡면의 분류](classification-of-surfaces.md)에서 Euler 지표의 부호가 기하를 정하는 것과 같은 꼴이고, 다발의 꼬임이 열 하나를 더한다.

[쌍곡 3 다양체](hyperbolic-3-manifolds.md)에는 유한한 매개변수 목록이 없다. Mostow 강직성(Mostow rigidity)에 따라 기본군이 쌍곡 계량을 정하므로, 분류 문제는 Kleinian 군의 분류가 된다.

## Poincaré 추측

단순연결 닫힌 3 다양체는 $S^3$ 와 미분동형이다. 단순연결이면 오그라들지 않는 구면도 원환면도 없어 분해가 자기 자신에서 끝나고, 유한 기본군을 가진 기하는 $S^3$ 뿐이다. 그 몫이 단순연결이려면 $\Gamma$ 가 자명해야 하므로 다양체가 $S^3$ 다.

3 차원에서는 위상다양체마다 매끄러운 구조가 유일하므로 결론이 미분동형이다. [s-코보디즘 정리](s-cobordism.md)로 고차원에서 얻은 결론은 위상동형까지였다.

## Ricci 흐름

Perelman 의 증명은 계량을 직접 찾지 않고 임의의 계량에서 출발해 [Ricci 흐름](ricci-flow.md) 방정식

$$
\frac{\partial g}{\partial t}=-2\thinspace\mathrm{Ric}(g)
$$

을 따라 계량을 바꾼다. Hamilton 은 양의 Ricci 곡률 계량에서 출발하면 흐름을 다시 척도화한 것이 상수 곡률 계량으로 수렴함을 보였다.

일반적으로는 유한 시간에 곡률이 발산하는 특이점이 생긴다. Perelman 은 그 특이점 근처가 가늘어지는 $S^2\times\mathbb R$ 모양임을 보이고, 그 자리를 잘라 낸 뒤 흐름을 다시 시작하는 수술을 동반한 Ricci 흐름을 세웠다. 잘라 내는 구면이 소수 분해의 구면이다. 유한 시간 안에 수술이 유한 번만 일어난다는 것과, 오래 흐른 뒤 남은 부분이 기하 조각으로 갈린다는 것이 증명의 두 단계다.

# 활용

## 매듭 여집합의 분류

매듭 $K$ 의 여집합을 위 분해에 넣으면 세 경우가 나온다.

| 여집합의 유형 | 매듭 | 기하 |
|---|---|---|
| Seifert 올뭉치 | 원환면 매듭 | $\widetilde{\mathrm{SL}\_2\mathbb R}$ 또는 $\mathbb H^2\times\mathbb R$ |
| JSJ 분해로 잘림 | 위성 매듭 | 조각마다 다름 |
| atoroidal | 쌍곡 매듭 | $\mathbb H^3$ |

이 세 경우가 전부라는 것은 Thurston 의 정리다. 교차수가 작은 매듭은 대다수가 쌍곡 매듭이므로 쌍곡 부피, cusp 모양, 대각합체(trace field) 같은 불변량을 쓸 수 있다.

## 기하의 판정 절차

기하 조각 하나의 기하는 기본군으로 다음 순서로 판정한다.

1. $\pi_1$ 이 유한이면 $S^3$ 기하다.
2. $\pi_1$ 이 유한 지수의 아벨 부분군을 가지면(virtually abelian) $\mathbb E^3$ 또는 $S^2\times\mathbb R$ 기하다.
3. $\pi_1$ 에 무한 순환 정규부분군이 있으면 Seifert 올뭉치이고, 위의 표로 여섯 가운데 하나를 고른다.
4. $\pi_1$ 에 정규부분군 $\mathbb Z^2$ 가 있으면 $\mathrm{Sol}$ 기하다.
5. 그 밖이면 $\mathbb H^3$ 기하다.

5 단계가 맞다는 것이 기하화 정리에 의존한다.

## 변형과 확장

- 유한군 작용을 가진 3 다양체로 확장된 오비폴드 기하화 정리(orbifold theorem)가 있다(Boileau–Leeb–Porti).
- 기본군의 성장률이 기하마다 다르다. $\mathrm{Nil}$ 은 다항 성장, $\mathrm{Sol}$ 과 $\mathbb H^3$ 은 지수 성장이다.
- 4 차원 모형 기하도 분류되어 있지만(Filipkiewicz), 4 차원 다양체를 기하 조각으로 자르는 같은 꼴의 정리는 없다.

# 연관 문서

## 선수지식

- [Ricci 흐름](ricci-flow.md)
- [쌍곡 3 다양체](hyperbolic-3-manifolds.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #differential_geometry #algebraic_topology #theorem
